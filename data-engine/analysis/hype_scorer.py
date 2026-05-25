#!/usr/bin/env python3
"""Score projects by cross-platform hype using HN, Reddit, GitHub, Scholar data."""

import argparse
import json
import os
import sys
from datetime import datetime, timezone
from collections import defaultdict


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
    # Unix timestamp — int or float
    if isinstance(value, (int, float)):
        try:
            return datetime.fromtimestamp(value, tz=timezone.utc)
        except (OSError, OverflowError, ValueError):
            return None
    # ISO string
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
    """Return set of project names found across all storage subdirectories.

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
# Scoring helpers — per-platform
# ---------------------------------------------------------------------------

def _score_hn(data):
    """Return (points, info_dict) from HN data."""
    info = {"total_hits": data.get("total_hits", 0), "avg_points": 0, "avg_comments": 0}
    all_points, all_comments = [], []
    results = data.get("results", {})
    for _query, hits in results.items():
        for hit in hits if isinstance(hits, list) else []:
            p = hit.get("points") or hit.get("score") or 0
            c = hit.get("num_comments") or 0
            all_points.append(int(p))
            all_comments.append(int(c))
    if all_points:
        info["avg_points"] = sum(all_points) / len(all_points)
        info["avg_comments"] = sum(all_comments) / len(all_comments)
    # HN component: 0-30 points, logarithmic scaling
    score = min(30, 5 * (1 + len(all_points)) ** 0.5)
    if all_points:
        score += min(15, sum(all_points) / max(len(all_points), 1) / 10)
    score = min(30, score)
    return score, info


def _score_reddit(data):
    """Return (points, info_dict) from Reddit data."""
    info = {"total_posts": data.get("total_posts", 0), "avg_score": 0, "avg_comments": 0}
    all_scores, all_comments = [], []
    results = data.get("results", {})
    for _query, posts in results.items():
        for post in posts if isinstance(posts, list) else []:
            s = post.get("score") or post.get("ups") or 0
            c = post.get("num_comments") or 0
            all_scores.append(int(s))
            all_comments.append(int(c))
    if all_scores:
        info["avg_score"] = sum(all_scores) / len(all_scores)
        info["avg_comments"] = sum(all_comments) / len(all_comments)
    # Reddit component: 0-25 points
    score = min(25, 4 * (1 + len(all_scores)) ** 0.5)
    if all_scores:
        score += min(10, sum(all_scores) / max(len(all_scores), 1) / 20)
    score = min(25, score)
    return score, info


def _score_github(data):
    """Return (points, info_dict) from GitHub data."""
    # Handle both flat metadata+data layout and direct fields
    if "data" in data and isinstance(data["data"], dict):
        gh = data["data"]
    else:
        gh = data

    stars = gh.get("stargazers_count") or gh.get("stars") or gh.get("watchers") or 0
    forks = gh.get("forks_count") or gh.get("forks") or 0
    contributors = gh.get("contributors_count") or gh.get("contributors") or 0
    subscribers = gh.get("subscribers_count") or 0

    info = {
        "stars": stars,
        "forks": forks,
        "contributors": contributors,
        "subscribers": subscribers,
    }
    # GitHub component: 0-30 points
    import math
    star_score = min(20, math.log10(max(stars, 1)) * 5)
    contrib_score = min(10, math.log10(max(contributors, 1)) * 3.3)
    score = min(30, star_score + contrib_score)
    return score, info


def _score_scholar(data):
    """Return (points, info_dict) from Semantic Scholar data."""
    papers = data.get("papers", {})
    total_papers = data.get("total_papers", 0)
    total_citations = data.get("total_citations", 0)
    # Also count from dict if papers is a dict of lists
    if isinstance(papers, dict):
        total_papers = total_papers or sum(len(v) for v in papers.values() if isinstance(v, list))
    info = {"total_papers": total_papers, "total_citations": total_citations}
    # Scholar component: 0-15 points
    import math
    paper_score = min(8, math.log10(max(total_papers, 1)) * 2.5)
    citation_score = min(7, math.log10(max(total_citations, 1)) * 2)
    score = min(15, paper_score + citation_score)
    return score, info


# ---------------------------------------------------------------------------
# Classification
# ---------------------------------------------------------------------------

def classify(score, details):
    """Classify project hype profile.

    Returns one of: organic, steady, viral, suspicious.
    """
    # Suspicious: high score but very few unique authors / single-source
    hn_results = details.get("hn", {}).get("results", {})
    reddit_results = details.get("reddit", {}).get("results", {})
    authors = set()
    for _q, hits in hn_results.items():
        for h in (hits if isinstance(hits, list) else []):
            a = h.get("author")
            if a:
                authors.add(a)
    for _q, posts in reddit_results.items():
        for p in (posts if isinstance(posts, list) else []):
            a = p.get("author")
            if a:
                authors.add(a)

    total_posts = sum(
        len(v) for v in hn_results.values() if isinstance(v, list)
    ) + sum(
        len(v) for v in reddit_results.values() if isinstance(v, list)
    )

    if score >= 65:
        if total_posts > 0 and len(authors) <= 2:
            return "suspicious"
        return "viral"
    if score >= 35:
        return "steady"
    return "organic"


# ---------------------------------------------------------------------------
# Main scorer
# ---------------------------------------------------------------------------

def score_project(name, storage_dir):
    """Return (composite_score, breakdown_dict) for a single project."""
    paths = {
        "hn": os.path.join(storage_dir, "hn", f"{name}.json"),
        "reddit": os.path.join(storage_dir, "reddit", f"{name}.json"),
        "github": os.path.join(storage_dir, "github", f"{name}.json"),
        "scholar": os.path.join(storage_dir, "scholar", f"{name}.json"),
    }
    # Also try *_stars.json pattern for GitHub
    stars_path = os.path.join(storage_dir, f"{name}_stars.json")

    breakdown = {}
    total = 0.0

    hn_data = load_json(paths["hn"])
    if hn_data:
        s, info = _score_hn(hn_data)
        breakdown["hn"] = {"score": round(s, 2), **info, "raw": hn_data}
        total += s
    else:
        breakdown["hn"] = {"score": 0, "note": "no data"}

    reddit_data = load_json(paths["reddit"])
    if reddit_data:
        s, info = _score_reddit(reddit_data)
        breakdown["reddit"] = {"score": round(s, 2), **info, "raw": reddit_data}
        total += s
    else:
        breakdown["reddit"] = {"score": 0, "note": "no data"}

    gh_data = load_json(paths["github"]) or load_json(stars_path)
    if gh_data:
        s, info = _score_github(gh_data)
        breakdown["github"] = {"score": round(s, 2), **info, "raw": gh_data}
        total += s
    else:
        breakdown["github"] = {"score": 0, "note": "no data"}

    scholar_data = load_json(paths["scholar"])
    if scholar_data:
        s, info = _score_scholar(scholar_data)
        breakdown["scholar"] = {"score": round(s, 2), **info, "raw": scholar_data}
        total += s
    else:
        breakdown["scholar"] = {"score": 0, "note": "no data"}

    composite = min(100, round(total, 1))

    # Add classification context
    detail_for_classify = {}
    for platform in ("hn", "reddit", "github", "scholar"):
        raw = breakdown.get(platform, {}).get("raw")
        if raw:
            detail_for_classify[platform] = raw

    label = classify(composite, detail_for_classify)

    result = {
        "project": name,
        "composite_score": composite,
        "classification": label,
        "breakdown": {
            k: {kk: vv for kk, vv in v.items() if kk != "raw"}
            for k, v in breakdown.items()
        },
        "scored_at": datetime.now(timezone.utc).isoformat(),
    }
    return result


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Score projects by cross-platform hype")
    parser.add_argument("--input", default="./storage", help="Storage root directory")
    parser.add_argument("--output", default="./storage/analysis/hype_scores.json",
                        help="Output JSON path")
    args = parser.parse_args()

    storage_dir = os.path.abspath(args.input)
    output_path = os.path.abspath(args.output)
    if os.path.isdir(output_path):
        output_path = os.path.join(output_path, "hype_scores.json")

    projects = discover_projects(storage_dir)
    if not projects:
        print("No projects discovered in", storage_dir)
        return

    scores = []
    for name in projects:
        result = score_project(name, storage_dir)
        scores.append(result)

    scores.sort(key=lambda x: x["composite_score"], reverse=True)

    payload = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "total_projects": len(scores),
        "scores": scores,
    }

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)

    # Summary
    print(f"\n{'='*60}")
    print(f"HYPE SCORES  ({len(scores)} projects)")
    print(f"{'='*60}")
    print(f"{'Project':<40} {'Score':>6} {'Class':<12}")
    print(f"{'-'*40} {'-'*6} {'-'*12}")
    for s in scores:
        print(f"{s['project']:<40} {s['composite_score']:>6} {s['classification']:<12}")
    print(f"\nOutput written to {output_path}")


if __name__ == "__main__":
    main()
