#!/usr/bin/env python3
"""Reddit discussion search collector using public JSON API."""

import argparse
import json
import os
import sys
import time
from datetime import datetime, timezone

import requests


REDDIT_SEARCH = "https://www.reddit.com/search.json"
REDDIT_HEADERS = {"User-Agent": "awesome-evolution-data-engine/1.0"}


def search_reddit(query, max_pages=2, limit=25, sort="relevance"):
    results = []
    after = None
    for _ in range(max_pages):
        params = {
            "q": query,
            "sort": sort,
            "limit": limit,
            "type": "link",
        }
        if after:
            params["after"] = after

        try:
            resp = requests.get(
                REDDIT_SEARCH,
                params=params,
                headers=REDDIT_HEADERS,
                timeout=15,
            )
            resp.raise_for_status()
            data = resp.json()
        except (requests.RequestException, ValueError) as e:
            print(f"  [WARN] Reddit search for '{query}': {e}", file=sys.stderr)
            break

        children = data.get("data", {}).get("children", [])
        if not children:
            break

        for child in children:
            d = child.get("data", {})
            results.append({
                "id": d.get("id"),
                "subreddit": d.get("subreddit", ""),
                "title": d.get("title", ""),
                "selftext": (d.get("selftext") or "")[:500],
                "score": d.get("score", 0),
                "num_comments": d.get("num_comments", 0),
                "author": d.get("author", ""),
                "url": f"https://reddit.com{d.get('permalink', '')}",
                "created_utc": d.get("created_utc", 0),
            })

        after = data.get("data", {}).get("after")
        if not after:
            break
        time.sleep(2.0)

    return results


def collect_project(project, output_dir):
    name = project["name"]
    repo = project.get("repo", name)
    query_parts = [name]
    if "/" in repo:
        query_parts.append(repo.split("/")[1])

    all_results = {}
    for q in query_parts:
        print(f"  Reddit searching: '{q}'")
        posts = search_reddit(q, max_pages=1)
        all_results[q] = posts
        time.sleep(2.0)

    out_path = os.path.join(output_dir, "reddit", f"{name.replace('/', '_')}.json")
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    payload = {
        "project": name,
        "repo": repo,
        "collected_at": datetime.now(timezone.utc).isoformat(),
        "queries": query_parts,
        "total_posts": sum(len(v) for v in all_results.values()),
        "results": all_results,
    }
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"  -> {out_path} ({payload['total_posts']} posts)")
    return payload["total_posts"]


def main():
    parser = argparse.ArgumentParser(description="Reddit discussion search collector")
    parser.add_argument("--config", default="config/projects.json")
    parser.add_argument("--output", default="./storage")
    parser.add_argument("--all", action="store_true")
    parser.add_argument("--query", type=str, help="Single query test")
    args = parser.parse_args()

    if args.query:
        posts = search_reddit(args.query)
        print(json.dumps(posts, indent=2, ensure_ascii=False))
        return

    with open(args.config) as f:
        config = json.load(f)

    projects = config.get("projects", [])
    if not args.all:
        projects = [p for p in projects if p.get("priority") == "critical"]

    print(f"Reddit collection: {len(projects)} projects")
    total = 0
    for i, proj in enumerate(projects):
        print(f"[{i+1}/{len(projects)}] {proj['name']}")
        total += collect_project(proj, args.output)

    print(f"\nReddit done: {total} total posts across {len(projects)} projects")


if __name__ == "__main__":
    main()
