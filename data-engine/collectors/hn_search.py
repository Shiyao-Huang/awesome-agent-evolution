#!/usr/bin/env python3
"""HN discussion search collector using Algolia HN API."""

import argparse
import json
import os
import sys
import time
from datetime import datetime, timezone

import requests

HN_API = "https://hn.algolia.com/api/v1/search"


def search_hn(query, max_pages=3, hits_per_page=20):
    results = []
    for page in range(max_pages):
        params = {
            "query": query,
            "tags": "story",
            "page": page,
            "hitsPerPage": hits_per_page,
        }
        try:
            resp = requests.get(HN_API, params=params, timeout=15)
            resp.raise_for_status()
            data = resp.json()
        except (requests.RequestException, ValueError) as e:
            print(f"  [WARN] HN page {page} for '{query}': {e}", file=sys.stderr)
            break

        hits = data.get("hits", [])
        if not hits:
            break

        for h in hits:
            results.append({
                "objectID": h.get("objectID"),
                "title": h.get("title", ""),
                "url": h.get("url", ""),
                "points": h.get("points", 0),
                "num_comments": h.get("num_comments", 0),
                "author": h.get("author", ""),
                "created_at": h.get("created_at", ""),
            })

        if len(hits) < hits_per_page:
            break
        time.sleep(0.4)

    return results


def collect_project(project, output_dir):
    name = project["name"]
    repo = project.get("repo", name)
    query_parts = [name]
    if "/" in repo:
        query_parts.append(repo.split("/")[1])

    all_results = {}
    for q in query_parts:
        print(f"  HN searching: '{q}'")
        hits = search_hn(q, max_pages=2)
        all_results[q] = hits
        time.sleep(0.5)

    out_path = os.path.join(output_dir, "hn", f"{name.replace('/', '_')}.json")
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    payload = {
        "project": name,
        "repo": repo,
        "collected_at": datetime.now(timezone.utc).isoformat(),
        "queries": query_parts,
        "total_hits": sum(len(v) for v in all_results.values()),
        "results": all_results,
    }
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"  -> {out_path} ({payload['total_hits']} hits)")
    return payload["total_hits"]


def main():
    parser = argparse.ArgumentParser(description="HN discussion search collector")
    parser.add_argument("--config", default="config/projects.json")
    parser.add_argument("--output", default="./storage")
    parser.add_argument("--all", action="store_true", help="Collect all projects")
    parser.add_argument("--query", type=str, help="Single query test")
    args = parser.parse_args()

    if args.query:
        hits = search_hn(args.query)
        print(json.dumps(hits, indent=2, ensure_ascii=False))
        return

    with open(args.config) as f:
        config = json.load(f)

    projects = config.get("projects", [])
    if not args.all:
        projects = [p for p in projects if p.get("priority") == "critical"]

    print(f"HN collection: {len(projects)} projects")
    total = 0
    for i, proj in enumerate(projects):
        print(f"[{i+1}/{len(projects)}] {proj['name']}")
        total += collect_project(proj, args.output)

    print(f"\nHN done: {total} total hits across {len(projects)} projects")


if __name__ == "__main__":
    main()
