#!/usr/bin/env python3
"""Build cross-platform propagation timeline for each project.

Extracts dated events from each platform, normalises timestamps, and builds
edges showing information flow between platforms.
"""

import argparse
import json
import os
import sys
from collections import defaultdict
from datetime import datetime, timezone


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
# Event extraction per platform
# ---------------------------------------------------------------------------

def extract_hn_events(data):
    """Return list of event dicts from HN data."""
    events = []
    results = data.get("results", {})
    for query, hits in results.items():
        if not isinstance(hits, list):
            continue
        for hit in hits:
            if not isinstance(hit, dict):
                continue
            dt = parse_date(hit.get("created_at"))
            events.append({
                "platform": "hn",
                "date": dt.isoformat() if dt else None,
                "date_parsed": dt,
                "title": hit.get("title", ""),
                "url": hit.get("url", ""),
                "points": hit.get("points") or hit.get("score") or 0,
                "comments": hit.get("num_comments") or 0,
                "author": hit.get("author", ""),
                "object_id": hit.get("objectID", ""),
            })
    return events


def extract_reddit_events(data):
    """Return list of event dicts from Reddit data."""
    events = []
    results = data.get("results", {})
    for query, posts in results.items():
        if not isinstance(posts, list):
            continue
        for post in posts:
            if not isinstance(post, dict):
                continue
            # created_utc is Unix float, but handle both formats
            dt = parse_date(post.get("created_utc"))
            events.append({
                "platform": "reddit",
                "date": dt.isoformat() if dt else None,
                "date_parsed": dt,
                "title": post.get("title", ""),
                "url": post.get("url", ""),
                "score": post.get("score") or post.get("ups") or 0,
                "comments": post.get("num_comments") or 0,
                "author": post.get("author", ""),
                "subreddit": post.get("subreddit", ""),
                "post_id": post.get("id", ""),
            })
    return events


def extract_github_events(data):
    """Return list of event dicts from GitHub data."""
    events = []
    if not data:
        return events

    # Handle both flat and metadata+data layouts
    if "data" in data and isinstance(data["data"], dict):
        gh = data["data"]
        meta = data.get("metadata", {})
    else:
        gh = data
        meta = {}

    stars = gh.get("stargazers_count") or gh.get("stars") or 0
    forks = gh.get("forks_count") or gh.get("forks") or 0
    contributors = gh.get("contributors_count") or gh.get("contributors") or 0
    created_at = gh.get("created_at") or meta.get("collection_timestamp")
    pushed_at = gh.get("pushed_at")
    updated_at = gh.get("updated_at")

    if created_at:
        dt = parse_date(created_at)
        events.append({
            "platform": "github",
            "date": dt.isoformat() if dt else None,
            "date_parsed": dt,
            "event_type": "repo_created",
            "stars": stars,
            "forks": forks,
            "contributors": contributors,
        })

    if pushed_at:
        dt = parse_date(push_at) if (push_at := pushed_at) else None
        dt = parse_date(pushed_at)
        events.append({
            "platform": "github",
            "date": dt.isoformat() if dt else None,
            "date_parsed": dt,
            "event_type": "last_push",
            "stars": stars,
        })

    if updated_at:
        dt = parse_date(updated_at)
        events.append({
            "platform": "github",
            "date": dt.isoformat() if dt else None,
            "date_parsed": dt,
            "event_type": "last_updated",
            "stars": stars,
        })

    # Snapshot event from metadata
    col_ts = meta.get("collection_timestamp") or data.get("collected_at")
    if col_ts:
        dt = parse_date(col_ts)
        events.append({
            "platform": "github",
            "date": dt.isoformat() if dt else None,
            "date_parsed": dt,
            "event_type": "data_snapshot",
            "stars": stars,
            "forks": forks,
            "contributors": contributors,
        })

    return events


def extract_scholar_events(data):
    """Return list of event dicts from Scholar data."""
    events = []
    papers = data.get("papers", {})
    if isinstance(papers, dict):
        for query, paper_list in papers.items():
            if not isinstance(paper_list, list):
                continue
            for paper in paper_list:
                if not isinstance(paper, dict):
                    continue
                # Common Semantic Scholar fields
                title = paper.get("title", "")
                pub_date = paper.get("publicationDate") or paper.get("year")
                dt = parse_date(pub_date) if isinstance(pub_date, str) else None
                year = paper.get("year")
                citations = paper.get("citationCount", 0)
                events.append({
                    "platform": "scholar",
                    "date": dt.isoformat() if dt else (f"{year}-01-01T00:00:00+00:00" if year else None),
                    "date_parsed": dt,
                    "event_type": "publication",
                    "title": title,
                    "citations": citations,
                    "year": year,
                })

    # Collection timestamp
    col_ts = data.get("collected_at")
    if col_ts:
        dt = parse_date(col_ts)
        events.append({
            "platform": "scholar",
            "date": dt.isoformat() if dt else None,
            "date_parsed": dt,
            "event_type": "data_snapshot",
        })

    return events


def extract_chinese_events(data):
    """Return list of event dicts from Chinese media data."""
    events = []
    results = data.get("results", {})
    for query, items in results.items():
        if not isinstance(items, list):
            continue
        for item in items:
            if not isinstance(item, dict):
                continue
            dt = parse_date(item.get("published_at") or item.get("created_at") or item.get("date"))
            events.append({
                "platform": "chinese",
                "date": dt.isoformat() if dt else None,
                "date_parsed": dt,
                "title": item.get("title", ""),
                "url": item.get("url", ""),
                "source": item.get("source", ""),
                "event_type": "article",
            })
    # Collection timestamp
    col_ts = data.get("collected_at")
    if col_ts:
        dt = parse_date(col_ts)
        events.append({
            "platform": "chinese",
            "date": dt.isoformat() if dt else None,
            "date_parsed": dt,
            "event_type": "data_snapshot",
        })
    return events


# ---------------------------------------------------------------------------
# Edge building
# ---------------------------------------------------------------------------

def build_edges(events):
    """Build directed edges between platforms based on temporal ordering.

    For events on different platforms that occur close in time (within 72h),
    create a directed edge from earlier platform to later one.
    """
    edges = []
    by_platform = defaultdict(list)
    for ev in events:
        if ev.get("date_parsed"):
            by_platform[ev["platform"]].append(ev)

    platforms = sorted(by_platform.keys())
    for i in range(len(platforms)):
        for j in range(i + 1, len(platforms)):
            p_a, p_b = platforms[i], platforms[j]
            events_a = sorted(by_platform[p_a], key=lambda e: e["date_parsed"])
            events_b = sorted(by_platform[p_b], key=lambda e: e["date_parsed"])
            for ea in events_a:
                for eb in events_b:
                    delta = (eb["date_parsed"] - ea["date_parsed"]).total_seconds()
                    if 0 < delta <= 72 * 3600:
                        edges.append({
                            "from": p_a,
                            "to": p_b,
                            "from_date": ea["date"],
                            "to_date": eb["date"],
                            "delay_hours": round(delta / 3600, 1),
                        })
                    elif -72 * 3600 <= delta < 0:
                        edges.append({
                            "from": p_b,
                            "to": p_a,
                            "from_date": eb["date"],
                            "to_date": ea["date"],
                            "delay_hours": round(-delta / 3600, 1),
                        })
    # Deduplicate edges (keep unique from->to with shortest delay)
    best = {}
    for e in edges:
        key = (e["from"], e["to"])
        if key not in best or e["delay_hours"] < best[key]["delay_hours"]:
            best[key] = e
    return sorted(best.values(), key=lambda e: e["delay_hours"])


# ---------------------------------------------------------------------------
# Project timeline builder
# ---------------------------------------------------------------------------

def build_timeline(name, storage_dir):
    """Build full cross-platform timeline for a project."""
    paths = {
        "hn": os.path.join(storage_dir, "hn", f"{name}.json"),
        "reddit": os.path.join(storage_dir, "reddit", f"{name}.json"),
        "github": os.path.join(storage_dir, "github", f"{name}.json"),
        "scholar": os.path.join(storage_dir, "scholar", f"{name}.json"),
        "chinese": os.path.join(storage_dir, "chinese", f"{name}.json"),
    }
    stars_path = os.path.join(storage_dir, f"{name}_stars.json")

    all_events = []

    hn_data = load_json(paths["hn"])
    if hn_data:
        all_events.extend(extract_hn_events(hn_data))

    reddit_data = load_json(paths["reddit"])
    if reddit_data:
        all_events.extend(extract_reddit_events(reddit_data))

    gh_data = load_json(paths["github"]) or load_json(stars_path)
    if gh_data:
        all_events.extend(extract_github_events(gh_data))

    scholar_data = load_json(paths["scholar"])
    if scholar_data:
        all_events.extend(extract_scholar_events(scholar_data))

    chinese_data = load_json(paths["chinese"])
    if chinese_data:
        all_events.extend(extract_chinese_events(chinese_data))

    # Sort chronologically, None dates last
    all_events.sort(key=lambda e: e["date_parsed"] or datetime.max.replace(tzinfo=timezone.utc))

    # Build edges
    edges = build_edges(all_events)

    # Platforms covered
    platforms = sorted(set(e["platform"] for e in all_events))

    # Date range
    dated = [e["date_parsed"] for e in all_events if e.get("date_parsed")]
    date_range = {
        "earliest": min(dated).isoformat() if dated else None,
        "latest": max(dated).isoformat() if dated else None,
    }

    # Strip date_parsed (non-serializable) from events for output
    clean_events = []
    for e in all_events:
        clean = {k: v for k, v in e.items() if k != "date_parsed"}
        clean_events.append(clean)

    return {
        "project": name,
        "platforms": platforms,
        "platform_count": len(platforms),
        "event_count": len(clean_events),
        "date_range": date_range,
        "events": clean_events,
        "edges": edges,
        "edge_count": len(edges),
        "built_at": datetime.now(timezone.utc).isoformat(),
    }


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Build cross-platform propagation timelines for projects"
    )
    parser.add_argument("--input", default="./storage", help="Storage root directory")
    parser.add_argument("--output", default="./storage/analysis/propagation.json",
                        help="Output JSON path")
    parser.add_argument("--all", action="store_true",
                        help="Process all discovered projects (default)")
    args = parser.parse_args()

    storage_dir = os.path.abspath(args.input)
    output_path = os.path.abspath(args.output)
    if os.path.isdir(output_path):
        import os.path as op
        basename = op.basename('analysis/propagation_rebuilder.py').replace('.py', '.json') if 'daily' not in 'analysis/propagation_rebuilder.py' else 'daily_report_' + __import__('datetime').datetime.now().strftime('%Y-%m-%d') + '.md'
        output_path = os.path.join(output_path, basename)

    projects = discover_projects(storage_dir)
    if not projects:
        print("No projects discovered in", storage_dir)
        return

    timelines = []
    for name in projects:
        timeline = build_timeline(name, storage_dir)
        timelines.append(timeline)

    timelines.sort(key=lambda t: t["event_count"], reverse=True)

    payload = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "total_projects": len(timelines),
        "timelines": timelines,
    }

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)

    # Summary
    print(f"\n{'='*60}")
    print(f"PROPAGATION TIMELINES  ({len(timelines)} projects)")
    print(f"{'='*60}")
    print(f"{'Project':<40} {'Events':>8} {'Edges':>7} {'Platforms':<20}")
    print(f"{'-'*40} {'-'*8} {'-'*7} {'-'*20}")
    for t in timelines:
        plats = ", ".join(t["platforms"])
        print(f"{t['project']:<40} {t['event_count']:>8} {t['edge_count']:>7} {plats:<20}")

    # Show propagation patterns
    edge_projects = [t for t in timelines if t["edge_count"] > 0]
    if edge_projects:
        print(f"\nCross-platform propagation patterns:")
        for t in edge_projects[:10]:
            for e in t["edges"][:3]:
                print(f"  {t['project']}: {e['from']} -> {e['to']} "
                      f"({e['delay_hours']}h)")

    print(f"\nOutput written to {output_path}")


if __name__ == "__main__":
    main()
