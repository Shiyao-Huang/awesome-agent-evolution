#!/usr/bin/env python3
"""
Propagation Rebuilder — Cross-platform propagation chain reconstruction.

Reconstructs how a project spreads across platforms using collected data.
Builds a timeline of events: HN posts, Reddit mentions, GitHub stars, etc.
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


def parse_date(s) -> str:
    if not s:
        return ""
    # Handle Unix timestamp (float/int)
    if isinstance(s, (int, float)):
        return datetime.utcfromtimestamp(s).strftime("%Y-%m-%dT%H:%M:%SZ")
    try:
        dt = datetime.fromisoformat(s.replace("Z", "+00:00"))
        return dt.strftime("%Y-%m-%dT%H:%M:%SZ")
    except (ValueError, AttributeError):
        return str(s)[:19]


def discover_projects(storage_dir: str) -> dict:
    """Discover all projects from storage subdirectories."""
    projects = {}
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
    return projects


def extract_hn_timeline(hn_data: dict) -> list:
    """Extract HN events as timeline entries."""
    events = []
    if not hn_data:
        return events

    results = hn_data.get("results", {})
    items = []
    if isinstance(results, dict):
        for query, query_items in results.items():
            if isinstance(query_items, list):
                items.extend(query_items)
    elif isinstance(results, list):
        items = results

    for item in items:
        events.append({
            "date": parse_date(item.get("created_at", "")),
            "platform": "hacker_news",
            "event": "submission",
            "title": item.get("title", ""),
            "points": item.get("points", 0),
            "comments": item.get("num_comments", 0),
            "author": item.get("author", ""),
            "url": item.get("url", ""),
        })

    return events


def extract_reddit_timeline(reddit_data: dict) -> list:
    """Extract Reddit events as timeline entries."""
    events = []
    if not reddit_data:
        return events

    items = reddit_data if isinstance(reddit_data, list) else reddit_data.get("results", [])
    if isinstance(items, dict):
        for query, query_items in items.items():
            if isinstance(query_items, list):
                items = query_items

    for item in items if isinstance(items, list) else []:
        events.append({
            "date": parse_date(item.get("created_utc", item.get("created_at", ""))),
            "platform": "reddit",
            "event": "post",
            "title": item.get("title", ""),
            "score": item.get("score", item.get("ups", 0)),
            "subreddit": item.get("subreddit", ""),
            "url": item.get("url", ""),
        })

    return events


def extract_github_timeline(gh_data: dict) -> list:
    """Extract GitHub milestones as timeline entries."""
    events = []
    if not gh_data:
        return events

    created = gh_data.get("created_at", "")
    if created:
        events.append({
            "date": parse_date(created),
            "platform": "github",
            "event": "repo_created",
            "title": "Repository created",
        })

    stars = gh_data.get("stargazers_count", gh_data.get("stars", 0))
    if stars:
        events.append({
            "date": "",
            "platform": "github",
            "event": f"stars_{stars}",
            "title": f"Current stars: {stars:,}",
        })

    return events


def build_propagation_chain(project_name: str, data_sources: dict) -> dict:
    """Build full cross-platform propagation chain."""
    timeline = []
    platforms = {}

    # HN
    if "hn" in data_sources:
        hn_events = extract_hn_timeline(data_sources["hn"])
        timeline.extend(hn_events)
        if hn_events:
            platforms["hacker_news"] = {
                "submissions": len(hn_events),
                "max_points": max(e.get("points", 0) for e in hn_events),
                "total_comments": sum(e.get("comments", 0) for e in hn_events),
            }

    # Reddit
    if "reddit" in data_sources:
        reddit_events = extract_reddit_timeline(data_sources["reddit"])
        timeline.extend(reddit_events)
        if reddit_events:
            platforms["reddit"] = {
                "posts": len(reddit_events),
            }

    # GitHub
    for gh_key in ("github", "github_stars", "root"):
        if gh_key in data_sources:
            gh_events = extract_github_timeline(data_sources[gh_key])
            timeline.extend(gh_events)
            gh = data_sources[gh_key]
            platforms["github"] = {
                "stars": gh.get("stargazers_count", gh.get("stars", 0)),
            }
            break

    # Build edges
    platform_names = list(platforms.keys())
    edges = []
    for i, src in enumerate(platform_names):
        for tgt in platform_names[i+1:]:
            edges.append({"source": src, "target": tgt,
                          "type": "cross_platform_propagation"})

    # Sort timeline by date
    timeline.sort(key=lambda e: e.get("date", ""))

    return {
        "project": project_name,
        "timeline": timeline,
        "platforms": platforms,
        "edges": edges,
        "total_events": len(timeline),
    }


def run_propagation_rebuild(input_dir: str, output_dir: str,
                            projects_list: list = None):
    """Main entry: rebuild propagation chains."""
    os.makedirs(output_dir, exist_ok=True)
    projects = discover_projects(input_dir)

    if projects_list:
        projects = {k: v for k, v in projects.items() if k in projects_list}

    chains = []
    for proj_name, sources in sorted(projects.items()):
        chain = build_propagation_chain(proj_name, sources)
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
    for c in chains:
        plats = list(c["platforms"].keys())
        print(f"  {c['project']:<25s} platforms={plats}  events={c['total_events']}")

    return output


def main():
    parser = argparse.ArgumentParser(description="Propagation Chain Rebuilder")
    parser.add_argument("--input", default="./storage")
    parser.add_argument("--output", default="./storage/propagation")
    parser.add_argument("--all", action="store_true")
    parser.add_argument("--projects", nargs="*", default=None)
    args = parser.parse_args()
    run_propagation_rebuild(args.input, args.output, args.projects)


if __name__ == "__main__":
    main()
