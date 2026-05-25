#!/usr/bin/env python3
"""Social media data collection runner - resume mode."""

import json
import os
import sys
import time
from datetime import datetime, timezone

import requests

OUTPUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "social-storage")
CONFIG_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "config", "projects.json")

def load_projects():
    with open(CONFIG_PATH) as f:
        config = json.load(f)
    return config if isinstance(config, list) else config.get("projects", [])

def collect_hn(projects):
    print(f"HN: {len(projects)} projects")
    total = 0
    for i, proj in enumerate(projects):
        name = proj["name"]
        repo = proj.get("repo", name)
        out_path = os.path.join(OUTPUT, "hn", f"{name.replace('/', '_')}.json")
        if os.path.exists(out_path):
            continue
        queries = [name]
        if "/" in repo:
            queries.append(repo.split("/")[1])
        all_results = {}
        for q in queries:
            hits = []
            for page in range(2):
                try:
                    r = requests.get("https://hn.algolia.com/api/v1/search",
                                     params={"query": q, "tags": "story", "page": page, "hitsPerPage": 20},
                                     timeout=15)
                    r.raise_for_status()
                    for h in r.json().get("hits", []):
                        hits.append({"objectID": h.get("objectID"), "title": h.get("title", ""),
                                     "points": h.get("points", 0), "num_comments": h.get("num_comments", 0),
                                     "created_at": h.get("created_at", "")})
                    if len(r.json().get("hits", [])) < 20:
                        break
                except Exception as e:
                    print(f"  [WARN] {q}: {e}", file=sys.stderr)
                    break
                time.sleep(0.4)
            all_results[q] = hits
            time.sleep(0.5)
        t = sum(len(v) for v in all_results.values())
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        with open(out_path, "w") as f:
            json.dump({"project": name, "repo": repo, "collected_at": datetime.now(timezone.utc).isoformat(),
                       "total_hits": t, "results": all_results}, f, indent=2, ensure_ascii=False)
        total += t
        print(f"  [{i+1}/{len(projects)}] {name}: {t} hits")
    print(f"HN done: {total} hits")
    return total

def main():
    projects = load_projects()
    hn_total = collect_hn(projects)
    hn_files = len([f for f in os.listdir(os.path.join(OUTPUT, "hn")) if f.endswith(".json")])
    reddit_files = 0
    if os.path.exists(os.path.join(OUTPUT, "reddit")):
        reddit_files = len([f for f in os.listdir(os.path.join(OUTPUT, "reddit")) if f.endswith(".json")])
    print(f"\nSUMMARY: HN={hn_files} files/{hn_total} hits, Reddit={reddit_files} files")

if __name__ == "__main__":
    main()
