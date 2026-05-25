#!/usr/bin/env python3
"""
Propagation Rebuilder — Cross-platform propagation chain reconstruction.

Reconstructs how a project/idea spreads across:
  - GitHub (stars, forks, issues)
  - Hacker News (submissions, comments)
  - Reddit (posts, upvotes)
  - Semantic Scholar (citations)
  - Chinese media (blog posts, news)

Outputs a timeline of propagation events with source→target edges.
"""

import argparse
import json
import os
from datetime import datetime
from pathlib import Path


def load_json(path: str):
    if not os.path.exists(path):
        return None
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def parse_date(s: str) -> str:
    """Normalize date to ISO format string."""
    if not s:
        return ""
    try:
        dt = datetime.fromisoformat(s.replace("Z", "+00:00"))
        return dt.strftime("%Y-%m-%dT%H:%M:%SZ")
    except (ValueError, AttributeError):
        return s[:19]


def load_github_events(storage_dir: str, project_name: str) -> list:
    """Load GitHub events (stars, forks, issues) for a project."""
    events = []

    # Try daily snapshots
    snapshots_dir = os.path.join(storage_dir, "daily_snapshots")
    if os.path.isdir(snapshots_dir):
        for date_dir in sorted(os.listdir(snapshots_dir)):
            fpath = os.path.join(snapshots_dir, date_dir, f"{project_name}.json")
            data = load_json(fpath)
            if data:
                events.append({"source": "github", "date": date_dir,
                               "type": "snapshot", "data": data})

    # Try flat file
    fpath = os.path.join(storage_dir, f"{project_name}.json")
    data = load_json(fpath)
    if data:
        events.append({"source": "github", "date": "latest",
                       "type": "snapshot", "data": data})

    return events


def load_social_events(storage_dir: str, project_name: str) -> list:
    """Load HN/Reddit/S2/media events for a project."""
    events = []
    social_dir = os.path.join(storage_dir, "social")
    if not os.path.isdir(social_dir):
        return events

    # Try loading from various social collector outputs
    social_files = {
        "hn_search": f"hn_{project_name}.json",
        "reddit_search": f"reddit_{project_name}.json",
        "semantic_scholar": f"s2_{project_name}.json",
        "chinese_media": f"cn_media_{project_name}.json",
    }

    for source, fname in social_files.items():
        fpath = os.path.join(social_dir, fname)
        data = load_json(fpath)
        if data:
            items = data if isinstance(data, list) else data.get("results", [data])
            for item in items:
                events.append({
                    "source": source,
                    "date": parse_date(item.get("created_at", item.get("date", ""))),
                    "type": item.get("type", "mention"),
                    "data": item,
                })

    return events


def extract_github_timeline(github_data: dict) -> list:
    """Extract key GitHub milestone events."""
    timeline = []

    # Repository creation
    created = github_data.get("created_at", "")
    if created:
        timeline.append({
            "date": parse_date(created),
            "event": "repo_created",
            "platform": "github",
            "detail": "Repository created",
        })

    # Star milestones
    stars = github_data.get("stars", github_data.get("stargazers_count", 0))
    milestones = [100, 500, 1000, 5000, 10000, 25000, 50000, 100000, 175000]
    for m in milestones:
        if stars >= m:
            timeline.append({
                "date": "",  # would need star history for exact dates
                "event": f"stars_{m}",
                "platform": "github",
                "detail": f"Reached {m:,} stars",
            })

    # Fork milestones
    forks = github_data.get("forks_count", 0)
    if forks >= 100:
        timeline.append({
            "date": "",
            "event": f"forks_{forks}",
            "platform": "github",
            "detail": f"{forks:,} forks",
        })

    return timeline


def build_propagation_chain(project_name: str, storage_dir: str) -> dict:
    """Build full cross-platform propagation chain for a project."""
    chain = {
        "project": project_name,
        "generated_at": datetime.utcnow().isoformat() + "Z",
        "timeline": [],
        "platforms": {},
        "edges": [],
    }

    # Load GitHub data
    github_events = load_github_events(storage_dir, project_name)
    if github_events:
        latest_gh = github_events[-1].get("data", {})
        gh_timeline = extract_github_timeline(latest_gh)
        chain["timeline"].extend(gh_timeline)
        chain["platforms"]["github"] = {
            "stars": latest_gh.get("stars", latest_gh.get("stargazers_count", 0)),
            "forks": latest_gh.get("forks_count", 0),
            "events_count": len(github_events),
        }

    # Load social data
    social_events = load_social_events(storage_dir, project_name)
    for evt in social_events:
        chain["timeline"].append({
            "date": evt["date"],
            "event": f"{evt['source']}_mention",
            "platform": evt["source"],
            "detail": evt.get("data", {}).get("title", evt.get("type", "")),
        })
        chain["platforms"].setdefault(evt["source"], {"events": 0})
        chain["platforms"][evt["source"]]["events"] += 1

    # Build propagation edges (source → target)
    platforms_with_data = list(chain["platforms"].keys())
    for i, source in enumerate(platforms_with_data):
        for target in platforms_with_data[i+1:]:
            chain["edges"].append({
                "source": source,
                "target": target,
                "type": "cross_platform_propagation",
            })

    # Sort timeline by date
    chain["timeline"].sort(key=lambda e: e.get("date", ""))

    return chain


def run_propagation_rebuild(input_dir: str, output_dir: str,
                            projects: list = None, all_projects: bool = False):
    """Main entry: rebuild propagation chains for all or specified projects."""
    os.makedirs(output_dir, exist_ok=True)

    # Discover projects
    if not projects:
        projects = set()
        # From daily_snapshots
        snapshots_dir = os.path.join(input_dir, "daily_snapshots")
        if os.path.isdir(snapshots_dir):
            for date_dir in os.listdir(snapshots_dir):
                date_path = os.path.join(snapshots_dir, date_dir)
                if os.path.isdir(date_path):
                    for f in os.listdir(date_path):
                        if f.endswith(".json"):
                            projects.add(f.replace(".json", ""))
        # From flat files
        for f in os.listdir(input_dir):
            if f.endswith(".json"):
                projects.add(f.replace(".json", ""))
        # From social dir
        social_dir = os.path.join(input_dir, "social")
        if os.path.isdir(social_dir):
            for f in os.listdir(social_dir):
                if f.endswith(".json"):
                    # Strip prefix (hn_, reddit_, s2_, cn_media_)
                    name = f.replace(".json", "")
                    for prefix in ["hn_", "reddit_", "s2_", "cn_media_"]:
                        if name.startswith(prefix):
                            projects.add(name[len(prefix):])
                            break

    chains = []
    for proj_name in sorted(projects):
        chain = build_propagation_chain(proj_name, input_dir)
        chains.append(chain)

    output = {
        "generated_at": datetime.utcnow().isoformat() + "Z",
        "total_projects": len(chains),
        "chains": chains,
    }

    out_path = os.path.join(output_dir, "propagation_chains.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    print(f"[propagation_rebuilder] Built chains for {len(chains)} projects → {out_path}")

    # Summary
    for c in chains:
        platforms = list(c["platforms"].keys())
        events = len(c["timeline"])
        print(f"  {c['project']:<25s} platforms={platforms}  events={events}")

    return output


def main():
    parser = argparse.ArgumentParser(description="Propagation Chain Rebuilder")
    parser.add_argument("--input", default="./storage",
                        help="Input storage directory")
    parser.add_argument("--output", default="./storage/propagation",
                        help="Output directory for propagation chains")
    parser.add_argument("--all", action="store_true",
                        help="Process all discovered projects")
    parser.add_argument("--projects", nargs="*", default=None,
                        help="Specific projects to process")
    args = parser.parse_args()

    if not args.all and not args.projects:
        args.all = True

    run_propagation_rebuild(args.input, args.output,
                           projects=args.projects,
                           all_projects=args.all)


if __name__ == "__main__":
    main()
