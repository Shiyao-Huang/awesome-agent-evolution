#!/usr/bin/env python3
"""
Hype Scorer — Star Quality & Hype Detection Engine

Scores GitHub projects on 5 dimensions:
  1. Star Activity (20%) — active stargazers in last 90 days
  2. Contributor Diversity (20%) — Gini coefficient inverted
  3. Fork Quality (20%) — forks with commits / total forks
  4. Issue Quality (20%) — non-template / non-spam issues
  5. PR Merge Rate (20%) — merged PRs / total PRs

Suspicion Index = stars_per_contributor / 100
  < 0.5 → organic
  0.5–1.5 → watch
  > 1.5 → suspicious
"""

import argparse
import json
import os
import sys
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


def load_project_data(storage_dir: str):
    """Load all collected data for all projects from storage."""
    data = {}
    snapshots_dir = os.path.join(storage_dir, "daily_snapshots")
    if not os.path.isdir(snapshots_dir):
        return data

    for date_dir in sorted(os.listdir(snapshots_dir)):
        date_path = os.path.join(snapshots_dir, date_dir)
        if not os.path.isdir(date_path):
            continue
        for fname in os.listdir(date_path):
            if not fname.endswith(".json"):
                continue
            proj_name = fname.replace(".json", "")
            fpath = os.path.join(date_path, fname)
            entry = load_json(fpath)
            if entry:
                data.setdefault(proj_name, []).append({
                    "date": date_dir,
                    "data": entry,
                })
    return data


def score_star_activity(star_history: list, window_days: int = 90) -> float:
    """Fraction of stars gained in the last N days vs total."""
    if not star_history:
        return 0.5  # neutral if no data
    now = datetime.utcnow()
    cutoff = now - timedelta(days=window_days)
    recent = sum(1 for s in star_history if parse_date(s.get("starred_at", "")) > cutoff)
    total = len(star_history)
    return recent / total if total > 0 else 0.0


def score_contributor_diversity(contributors: list) -> float:
    """Inverted Gini coefficient over contributor commit counts."""
    if not contributors or np is None:
        return 0.5
    commits = [c.get("contributions", 0) for c in contributors]
    if not commits or sum(commits) == 0:
        return 0.5
    commits = sorted(commits)
    n = len(commits)
    total = sum(commits)
    cum = 0
    gini_sum = 0
    for i, c in enumerate(commits):
        cum += c
        gini_sum += (2 * (i + 1) - n - 1) * c
    gini = gini_sum / (n * total) if n * total > 0 else 0
    return 1.0 - gini  # inverted: higher = more diverse


def score_fork_quality(forks: list) -> float:
    """Fraction of forks that have commits (not empty forks)."""
    if not forks:
        return 0.5
    with_commits = sum(1 for f in forks if f.get("commits", 0) > 0)
    return with_commits / len(forks)


def score_issue_quality(issues: list) -> float:
    """Fraction of issues that are non-template, non-spam."""
    if not issues:
        return 0.5
    spam_signals = ["question", "duplicate", "invalid", "wontfix"]
    quality = 0
    for issue in issues:
        labels = [l.get("name", "").lower() for l in issue.get("labels", [])]
        if not any(s in labels for s in spam_signals):
            quality += 1
    return quality / len(issues)


def score_pr_merge_rate(prs: list) -> float:
    """Fraction of PRs that were merged."""
    if not prs:
        return 0.5
    merged = sum(1 for p in prs if p.get("merged_at") is not None)
    return merged / len(prs)


def parse_date(s: str) -> datetime:
    """Parse ISO date string, return epoch on failure."""
    try:
        return datetime.fromisoformat(s.replace("Z", "+00:00")).replace(tzinfo=None)
    except (ValueError, AttributeError):
        return datetime(2000, 1, 1)


def compute_suspicion_index(stars: int, contributors: int) -> float:
    """stars_per_contributor / 100."""
    if contributors <= 0:
        return 10.0
    return (stars / contributors) / 100


def classify_growth(suspicion: float) -> str:
    if suspicion < 0.5:
        return "organic"
    elif suspicion < 1.5:
        return "watch"
    else:
        return "suspicious"


def score_project(project_name: str, records: list) -> dict:
    """Compute full hype score for one project from its collected data."""
    # Use the most recent snapshot
    if not records:
        return {
            "project": project_name,
            "composite_score": None,
            "suspicion_index": None,
            "growth_class": "unknown",
            "dimensions": {},
            "error": "no data",
        }

    latest = records[-1]["data"]
    stars_count = latest.get("stars", latest.get("stargazers_count", 0))
    contributors = latest.get("contributors", [])
    contributors_count = latest.get("contributors_count", len(contributors))
    forks = latest.get("forks", [])
    issues = latest.get("issues", [])
    prs = latest.get("pull_requests", [])
    star_history = latest.get("star_history", [])

    dims = {
        "star_activity": score_star_activity(star_history),
        "contributor_diversity": score_contributor_diversity(contributors),
        "fork_quality": score_fork_quality(forks),
        "issue_quality": score_issue_quality(issues),
        "pr_merge_rate": score_pr_merge_rate(prs),
    }

    weights = {
        "star_activity": 0.20,
        "contributor_diversity": 0.20,
        "fork_quality": 0.20,
        "issue_quality": 0.20,
        "pr_merge_rate": 0.20,
    }

    composite = sum(dims[k] * weights[k] for k in dims)
    composite = round(composite * 100, 1)  # scale to 0-100

    suspicion = compute_suspicion_index(stars_count, contributors_count)
    growth_class = classify_growth(suspicion)

    return {
        "project": project_name,
        "stars": stars_count,
        "contributors": contributors_count,
        "composite_score": composite,
        "suspicion_index": round(suspicion, 3),
        "growth_class": growth_class,
        "dimensions": {k: round(v, 3) for k, v in dims.items()},
        "data_points": len(records),
        "latest_date": records[-1]["date"],
    }


def run_hype_scoring(input_dir: str, output_dir: str):
    """Main entry: score all projects and write results."""
    os.makedirs(output_dir, exist_ok=True)

    projects_data = load_project_data(input_dir)
    if not projects_data:
        # Also try loading flat files from input_dir
        for fname in os.listdir(input_dir):
            if fname.endswith(".json"):
                proj_name = fname.replace(".json", "")
                entry = load_json(os.path.join(input_dir, fname))
                if entry:
                    projects_data[proj_name] = [{"date": "latest", "data": entry}]

    results = []
    for proj_name, records in sorted(projects_data.items()):
        result = score_project(proj_name, records)
        results.append(result)

    # Sort by composite_score descending
    results.sort(key=lambda r: r.get("composite_score", 0) or 0, reverse=True)

    output = {
        "generated_at": datetime.utcnow().isoformat() + "Z",
        "total_projects": len(results),
        "results": results,
    }

    out_path = os.path.join(output_dir, "hype_scores.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    print(f"[hype_scorer] Scored {len(results)} projects → {out_path}")

    # Print summary
    print("\n=== Hype Score Rankings ===")
    for i, r in enumerate(results[:20], 1):
        print(f"  {i:2d}. {r['project']:<25s} score={r['composite_score']:>5}  "
              f"suspicion={r['suspicion_index']:<6}  class={r['growth_class']}")

    return output


def main():
    parser = argparse.ArgumentParser(description="Hype Scorer — Star Quality Engine")
    parser.add_argument("--input", default="./storage",
                        help="Input storage directory")
    parser.add_argument("--output", default="./storage/analysis",
                        help="Output directory for scores")
    args = parser.parse_args()

    run_hype_scoring(args.input, args.output)


if __name__ == "__main__":
    main()
