#!/usr/bin/env python3
"""Detect anomalies in cross-platform project data.

Checks for: HN burst posting, low engagement ratio, single-author dominance,
duplicate content, bot-like timing patterns, and GitHub star/contributor anomalies.
"""

import argparse
import json
import math
import os
import sys
from collections import Counter, defaultdict
from datetime import datetime, timedelta, timezone


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def load_json(path):
    """Load a JSON file, returning {} on any failure."""
    try:
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
        return data if isinstance(data, dict) else {}
    except (json.JSONDecodeError, FileNotFoundError, OSError):
        return {}


def parse_date(value):
    """Parse ISO string or Unix timestamp (int/float) into a datetime, or return None."""
    if value is None:
        return None
    if isinstance(value, (int, float)):
        try:
            return datetime.fromtimestamp(value, tz=timezone.utc)
        except (OSError, OverflowError, ValueError):
            return None
    if isinstance(value, str):
        for fmt in (
            "%Y-%m-%dT%H:%M:%S.%f%z",
            "%Y-%m-%dT%H:%M:%S%z",
            "%Y-%m-%dT%H:%M:%S.%f",
            "%Y-%m-%dT%H:%M:%S",
            "%Y-%m-%d %H:%M:%S",
            "%Y-%m-%d",
        ):
            try:
                return datetime.strptime(value, fmt).replace(tzinfo=timezone.utc)
            except ValueError:
                continue
    return None


def discover_projects(storage_dir):
    """Return sorted list of project names found across all storage subdirectories.

    Skips ``analysis/`` and ``propagation/`` directories.
    """
    projects = set()
    skip = {"analysis", "propagation"}
    try:
        entries = os.listdir(storage_dir)
    except OSError:
        return projects
    for entry in entries:
        if entry in skip:
            continue
        subdir = os.path.join(storage_dir, entry)
        if not os.path.isdir(subdir):
            continue
        for fname in os.listdir(subdir):
            if fname.endswith(".json"):
                projects.add(fname[:-5])
    return sorted(projects)


# ---------------------------------------------------------------------------
# Individual anomaly checks
# ---------------------------------------------------------------------------

def _flatten_posts(platform_data, platform):
    """Yield (source, title, author, date, score, comments) from platform data."""
    results = platform_data.get("results", {})
    for _query, items in results.items():
        if not isinstance(items, list):
            continue
        for item in items:
            if not isinstance(item, dict):
                continue
            if platform == "hn":
                title = item.get("title", "")
                author = item.get("author", "")
                date_val = item.get("created_at")
                score = item.get("points") or item.get("score") or 0
                comments = item.get("num_comments") or 0
            elif platform == "reddit":
                title = item.get("title", "")
                author = item.get("author", "")
                date_val = item.get("created_utc")
                score = item.get("score") or item.get("ups") or 0
                comments = item.get("num_comments") or 0
            else:
                continue
            dt = parse_date(date_val)
            yield platform, title, author, dt, int(score), int(comments)


def check_hn_burst(hn_data, window_hours=24, threshold=5):
    """Detect many HN posts within a short time window."""
    anomalies = []
    posts = list(_flatten_posts(hn_data, "hn"))
    dates = [p[3] for p in posts if p[3] is not None]
    if len(dates) < threshold:
        return anomalies
    dates.sort()
    for i in range(len(dates)):
        window_end = dates[i] + timedelta(hours=window_hours)
        count = sum(1 for d in dates[i:] if d <= window_end)
        if count >= threshold:
            anomalies.append({
                "type": "hn_burst",
                "severity": "high" if count >= threshold * 2 else "medium",
                "description": f"{count} HN posts within {window_hours}h window",
                "window_start": dates[i].isoformat(),
                "count": count,
            })
            break  # report once
    return anomalies


def check_low_engagement_ratio(platform_data, platform, min_posts=3):
    """Flag when posts have very high score but near-zero comments (possible manipulation)."""
    anomalies = []
    posts = list(_flatten_posts(platform_data, platform))
    if len(posts) < min_posts:
        return anomalies
    low_ratio = []
    for _src, title, _author, _dt, score, comments in posts:
        if score >= 100 and comments <= 2:
            low_ratio.append({"title": title[:80], "score": score, "comments": comments})
    if len(low_ratio) >= 2:
        anomalies.append({
            "type": "low_engagement_ratio",
            "severity": "medium",
            "description": f"{len(low_ratio)} {platform} posts with high score but near-zero comments",
            "platform": platform,
            "examples": low_ratio[:5],
        })
    return anomalies


def check_single_author_dominance(platform_data, platform, threshold=0.7, min_posts=5):
    """Flag when one author accounts for >= threshold of all posts."""
    anomalies = []
    posts = list(_flatten_posts(platform_data, platform))
    if len(posts) < min_posts:
        return anomalies
    author_counts = Counter(p[2] for p in posts if p[2])
    if not author_counts:
        return anomalies
    top_author, top_count = author_counts.most_common(1)[0]
    ratio = top_count / len(posts)
    if ratio >= threshold:
        anomalies.append({
            "type": "single_author_dominance",
            "severity": "high" if ratio >= 0.9 else "medium",
            "description": f"Author '{top_author}' wrote {top_count}/{len(posts)} "
                           f"({ratio:.0%}) {platform} posts",
            "platform": platform,
            "author": top_author,
            "ratio": round(ratio, 3),
        })
    return anomalies


def check_duplicate_content(platform_data, platform):
    """Detect identical or near-identical titles across posts."""
    anomalies = []
    posts = list(_flatten_posts(platform_data, platform))
    titles = [p[1].strip().lower() for p in posts if p[1]]
    title_counts = Counter(titles)
    dupes = {t: c for t, c in title_counts.items() if c >= 3}
    if dupes:
        anomalies.append({
            "type": "duplicate_content",
            "severity": "medium",
            "description": f"{len(dupes)} duplicated titles on {platform} "
                           f"(max repeats: {max(dupes.values())})",
            "platform": platform,
            "duplicate_count": len(dupes),
            "max_repeats": max(dupes.values()),
        })
    return anomalies


def check_bot_like_timing(platform_data, platform, min_posts=6):
    """Flag when posts appear at suspiciously regular intervals."""
    anomalies = []
    posts = list(_flatten_posts(platform_data, platform))
    dates = sorted([p[3] for p in posts if p[3] is not None])
    if len(dates) < min_posts:
        return anomalies
    # Compute intervals in seconds
    intervals = []
    for i in range(1, len(dates)):
        delta = (dates[i] - dates[i - 1]).total_seconds()
        if delta > 0:
            intervals.append(delta)
    if len(intervals) < 3:
        return anomalies
    avg_interval = sum(intervals) / len(intervals)
    if avg_interval == 0:
        return anomalies
    # Coefficient of variation — low CV means very regular (suspicious)
    variance = sum((x - avg_interval) ** 2 for x in intervals) / len(intervals)
    std_dev = math.sqrt(variance)
    cv = std_dev / avg_interval
    if cv < 0.15 and len(intervals) >= 4:
        anomalies.append({
            "type": "bot_like_timing",
            "severity": "medium",
            "description": f"{platform} posts appear at very regular intervals "
                           f"(CV={cv:.3f}, avg={avg_interval:.0f}s between posts)",
            "platform": platform,
            "cv": round(cv, 4),
            "avg_interval_seconds": round(avg_interval, 1),
        })
    return anomalies


def check_github_anomalies(gh_data):
    """Detect GitHub star/contributor anomalies.

    Flags:
    - Very high stars but zero or extremely low contributors
    - Stars-to-forks ratio far outside normal range
    """
    anomalies = []
    if not gh_data:
        return anomalies

    # Handle both flat and metadata+data layouts
    if "data" in gh_data and isinstance(gh_data["data"], dict):
        gh = gh_data["data"]
    else:
        gh = gh_data

    stars = gh.get("stargazers_count") or gh.get("stars") or gh.get("watchers") or 0
    forks = gh.get("forks_count") or gh.get("forks") or 0
    contributors = gh.get("contributors_count") or gh.get("contributors") or 0
    subscribers = gh.get("subscribers_count") or 0

    stars = int(stars)
    forks = int(forks)
    contributors = int(contributors)

    # High stars, suspiciously low contributors
    if stars >= 1000 and contributors <= 3:
        anomalies.append({
            "type": "github_star_contributor_mismatch",
            "severity": "high",
            "description": f"{stars} stars but only {contributors} contributors",
            "stars": stars,
            "contributors": contributors,
        })

    # Stars/forks ratio — typical open-source is roughly 3-10x
    if forks > 0 and stars >= 500:
        ratio = stars / forks
        if ratio > 50:
            anomalies.append({
                "type": "github_star_fork_ratio",
                "severity": "low",
                "description": f"Stars/forks ratio is {ratio:.1f} (typical 3-10)",
                "stars": stars,
                "forks": forks,
                "ratio": round(ratio, 1),
            })

    # Very high stars but near-zero watchers/subscribers
    if stars >= 5000 and subscribers <= 10:
        anomalies.append({
            "type": "github_star_subscriber_mismatch",
            "severity": "medium",
            "description": f"{stars} stars but only {subscribers} subscribers",
            "stars": stars,
            "subscribers": subscribers,
        })

    return anomalies


# ---------------------------------------------------------------------------
# Per-project analysis
# ---------------------------------------------------------------------------

def analyze_project(name, storage_dir):
    """Run all anomaly checks on a project. Returns dict with anomalies list."""
    paths = {
        "hn": os.path.join(storage_dir, "hn", f"{name}.json"),
        "reddit": os.path.join(storage_dir, "reddit", f"{name}.json"),
        "github": os.path.join(storage_dir, "github", f"{name}.json"),
    }
    stars_path = os.path.join(storage_dir, f"{name}_stars.json")

    hn_data = load_json(paths["hn"])
    reddit_data = load_json(paths["reddit"])
    gh_data = load_json(paths["github"]) or load_json(stars_path)

    anomalies = []

    # HN checks
    if hn_data:
        anomalies.extend(check_hn_burst(hn_data))
        anomalies.extend(check_low_engagement_ratio(hn_data, "hn"))
        anomalies.extend(check_single_author_dominance(hn_data, "hn"))
        anomalies.extend(check_duplicate_content(hn_data, "hn"))
        anomalies.extend(check_bot_like_timing(hn_data, "hn"))

    # Reddit checks
    if reddit_data:
        anomalies.extend(check_low_engagement_ratio(reddit_data, "reddit"))
        anomalies.extend(check_single_author_dominance(reddit_data, "reddit"))
        anomalies.extend(check_duplicate_content(reddit_data, "reddit"))
        anomalies.extend(check_bot_like_timing(reddit_data, "reddit"))

    # GitHub checks
    anomalies.extend(check_github_anomalies(gh_data))

    severity_rank = {"high": 0, "medium": 1, "low": 2}
    anomalies.sort(key=lambda a: severity_rank.get(a.get("severity", "low"), 9))

    return {
        "project": name,
        "anomaly_count": len(anomalies),
        "anomalies": anomalies,
        "analyzed_at": datetime.now(timezone.utc).isoformat(),
    }


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Detect anomalies in cross-platform project data")
    parser.add_argument("--input", default="./storage", help="Storage root directory")
    parser.add_argument("--output", default="./storage/analysis/anomalies.json",
                        help="Output JSON path")
    args = parser.parse_args()

    storage_dir = os.path.abspath(args.input)
    output_path = os.path.abspath(args.output)
    if os.path.isdir(output_path):
        import os.path as op
        basename = op.basename('analysis/anomaly_detector.py').replace('.py', '.json') if 'daily' not in 'analysis/anomaly_detector.py' else 'daily_report_' + __import__('datetime').datetime.now().strftime('%Y-%m-%d') + '.md'
        output_path = os.path.join(output_path, basename)

    projects = discover_projects(storage_dir)
    if not projects:
        print("No projects discovered in", storage_dir)
        return

    results = []
    for name in projects:
        result = analyze_project(name, storage_dir)
        results.append(result)

    results.sort(key=lambda x: x["anomaly_count"], reverse=True)

    payload = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "total_projects": len(results),
        "total_anomalies": sum(r["anomaly_count"] for r in results),
        "results": results,
    }

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)

    # Summary
    print(f"\n{'='*60}")
    print(f"ANOMALY DETECTION  ({len(results)} projects)")
    print(f"{'='*60}")
    flagged = [r for r in results if r["anomaly_count"] > 0]
    print(f"Flagged: {len(flagged)}/{len(results)} projects")

    type_counts = Counter()
    for r in results:
        for a in r["anomalies"]:
            type_counts[a["type"]] += 1

    if type_counts:
        print(f"\nAnomaly breakdown:")
        for atype, count in type_counts.most_common():
            print(f"  {atype:<35} {count}")

    if flagged:
        print(f"\n{'Project':<40} {'Anomalies':>10}")
        print(f"{'-'*40} {'-'*10}")
        for r in flagged:
            print(f"{r['project']:<40} {r['anomaly_count']:>10}")
            for a in r["anomalies"]:
                print(f"  [{a['severity']}] {a['description']}")

    print(f"\nOutput written to {output_path}")


if __name__ == "__main__":
    main()
