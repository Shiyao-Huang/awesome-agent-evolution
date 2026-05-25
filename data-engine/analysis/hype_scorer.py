#!/usr/bin/env python3
"""
Hype Scorer — Star Quality & Hype Detection Engine

Scores projects using available cross-platform data:
  - HN engagement (points, comments)
  - GitHub stars/contributors (when available)
  - Community engagement signals

Suspicion Index = stars_per_contributor / 100 (when GH data available)
Fallback: HN engagement ratio as proxy.
"""

import argparse
import json
import os
from datetime import datetime, timedelta
from pathlib import Path

try:
    import numpy as np
except ImportError:
    np = None


def load_json(path: str):
    if not os.path.exists(path):
        return None
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def discover_projects(storage_dir: str) -> dict:
    """Discover all projects from storage subdirectories."""
    projects = {}
    # Scan all subdirectories (hn/, reddit/, github/, social/, etc.)
    for subdir in os.listdir(storage_dir):
        sub_path = os.path.join(storage_dir, subdir)
        if not os.path.isdir(sub_path) or subdir in ("analysis", "propagation"):
            continue
        for fname in os.listdir(sub_path):
            if not fname.endswith(".json"):
                continue
            proj_name = fname.replace(".json", "")
            fpath = os.path.join(sub_path, fname)
            data = load_json(fpath)
            if data:
                projects.setdefault(proj_name, {})[subdir] = data
    # Also check flat files in storage_dir
    for fname in os.listdir(storage_dir):
        if fname.endswith(".json"):
            proj_name = fname.replace(".json", "")
            fpath = os.path.join(storage_dir, fname)
            data = load_json(fpath)
            if data:
                projects.setdefault(proj_name, {})["root"] = data
    return projects


def score_hn_engagement(hn_data: dict) -> dict:
    """Score HN engagement: points and comments distribution."""
    if not hn_data or not hn_data.get("results"):
        return {"score": 0.5, "total_hits": 0, "avg_points": 0, "avg_comments": 0}

    all_items = []
    results = hn_data["results"]
    if isinstance(results, dict):
        for query, items in results.items():
            if isinstance(items, list):
                all_items.extend(items)
    elif isinstance(results, list):
        all_items = results

    if not all_items:
        return {"score": 0.5, "total_hits": hn_data.get("total_hits", 0),
                "avg_points": 0, "avg_comments": 0}

    points = [item.get("points", 0) for item in all_items]
    comments = [item.get("num_comments", 0) for item in all_items]

    avg_points = sum(points) / len(points) if points else 0
    avg_comments = sum(comments) / len(comments) if comments else 0

    # Score: higher avg_points + more items = better engagement
    # Normalize: avg_points > 100 = 1.0, > 50 = 0.7, > 20 = 0.5, else lower
    if avg_points > 100:
        score = 1.0
    elif avg_points > 50:
        score = 0.8
    elif avg_points > 20:
        score = 0.6
    elif avg_points > 5:
        score = 0.4
    else:
        score = 0.2

    return {
        "score": score,
        "total_hits": hn_data.get("total_hits", len(all_items)),
        "total_items": len(all_items),
        "avg_points": round(avg_points, 1),
        "avg_comments": round(avg_comments, 1),
        "max_points": max(points) if points else 0,
    }


def score_github_data(gh_data: dict) -> dict:
    """Score GitHub metrics when available."""
    if not gh_data:
        return {"score": 0.5, "stars": 0, "contributors": 0}

    stars = gh_data.get("stargazers_count", gh_data.get("stars", 0))
    contributors = gh_data.get("contributors_count",
                               len(gh_data.get("contributors", [])))
    forks_count = gh_data.get("forks_count", 0)
    open_issues = gh_data.get("open_issues_count", 0)

    # Fork quality
    forks = gh_data.get("forks", [])
    if forks:
        fork_quality = sum(1 for f in forks if f.get("commits", 0) > 0) / len(forks)
    else:
        fork_quality = 0.5

    # PR merge rate
    prs = gh_data.get("pull_requests", [])
    if prs:
        pr_merge_rate = sum(1 for p in prs if p.get("merged_at")) / len(prs)
    else:
        pr_merge_rate = 0.5

    # Suspicion index
    suspicion = (stars / contributors / 100) if contributors > 0 else 10.0

    return {
        "score": 0.5,  # placeholder
        "stars": stars,
        "contributors": contributors,
        "forks_count": forks_count,
        "fork_quality": round(fork_quality, 3),
        "pr_merge_rate": round(pr_merge_rate, 3),
        "suspicion_index": round(suspicion, 3),
        "stars_per_contributor": round(stars / contributors, 1) if contributors > 0 else None,
    }


def compute_composite(project_name: str, data_sources: dict) -> dict:
    """Compute composite hype score for a project."""
    dims = {}
    platform_data = {}

    # HN engagement (weight: 30% when no GH data, 15% when GH available)
    if "hn" in data_sources:
        hn_score = score_hn_engagement(data_sources["hn"])
        dims["hn_engagement"] = hn_score["score"]
        platform_data["hn"] = hn_score

    # GitHub data (weight: 50% when available)
    for gh_key in ("github", "github_stars", "root"):
        if gh_key in data_sources:
            gh_score = score_github_data(data_sources[gh_key])
            dims["github"] = gh_score["score"]
            platform_data["github"] = gh_score
            break

    # Reddit data (weight: 20% when available)
    if "reddit" in data_sources:
        reddit_data = data_sources["reddit"]
        items = reddit_data if isinstance(reddit_data, list) else reddit_data.get("results", [])
        if isinstance(items, dict):
            items = [v for vals in items.values() if isinstance(vals, list) for v in vals]
        if items:
            avg_ups = sum(i.get("ups", i.get("score", 0)) for i in items) / len(items)
            dims["reddit_engagement"] = min(1.0, avg_ups / 200)
        platform_data["reddit"] = {"items": len(items) if isinstance(items, list) else 0}

    # Compute composite
    if dims:
        composite = sum(dims.values()) / len(dims) * 100
    else:
        composite = 0

    # Classify
    gh = platform_data.get("github", {})
    suspicion = gh.get("suspicion_index", None)
    if suspicion is not None:
        if suspicion < 0.5:
            growth_class = "organic"
        elif suspicion < 1.5:
            growth_class = "watch"
        else:
            growth_class = "suspicious"
    else:
        # Use HN engagement as proxy
        hn = platform_data.get("hn", {})
        if hn.get("avg_points", 0) > 100 and hn.get("total_items", 0) > 10:
            growth_class = "viral"
        elif hn.get("avg_points", 0) > 30:
            growth_class = "steady"
        else:
            growth_class = "organic"

    return {
        "project": project_name,
        "composite_score": round(composite, 1),
        "growth_class": growth_class,
        "suspicion_index": suspicion,
        "dimensions": {k: round(v, 3) for k, v in dims.items()},
        "platforms": platform_data,
        "data_sources": list(data_sources.keys()),
    }


def run_hype_scoring(input_dir: str, output_dir: str):
    """Main entry: score all projects."""
    os.makedirs(output_dir, exist_ok=True)
    projects = discover_projects(input_dir)

    if not projects:
        print("[hype_scorer] No project data found")
        return {"generated_at": datetime.utcnow().isoformat() + "Z",
                "total_projects": 0, "results": []}

    results = []
    for proj_name, sources in sorted(projects.items()):
        result = compute_composite(proj_name, sources)
        results.append(result)

    results.sort(key=lambda r: r.get("composite_score", 0), reverse=True)

    output = {
        "generated_at": datetime.utcnow().isoformat() + "Z",
        "total_projects": len(results),
        "results": results,
    }

    out_path = os.path.join(output_dir, "hype_scores.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    print(f"[hype_scorer] Scored {len(results)} projects → {out_path}")
    print("\n=== Hype Score Rankings ===")
    for i, r in enumerate(results[:20], 1):
        gh = r["platforms"].get("github", {})
        stars = gh.get("stars", "?")
        print(f"  {i:2d}. {r['project']:<25s} score={r['composite_score']:>5}  "
              f"class={r['growth_class']:<10s}  stars={stars}")

    return output


def main():
    parser = argparse.ArgumentParser(description="Hype Scorer")
    parser.add_argument("--input", default="./storage")
    parser.add_argument("--output", default="./storage/analysis")
    args = parser.parse_args()
    run_hype_scoring(args.input, args.output)


if __name__ == "__main__":
    main()
