#!/usr/bin/env python3
"""Reddit discussion search collector."""

import argparse, json, os, sys, time
from datetime import datetime, timezone
import requests

REDDIT_SEARCH = "https://www.reddit.com/search.json"
REDDIT_HEADERS = {"User-Agent": "awesome-evolution-data-engine/1.0"}


def search_reddit(query, limit=25):
    params = {"q": query, "sort": "relevance", "limit": limit, "type": "link"}
    try:
        resp = requests.get(REDDIT_SEARCH, params=params, headers=REDDIT_HEADERS, timeout=15)
        resp.raise_for_status()
        data = resp.json()
    except (requests.RequestException, ValueError) as e:
        print(f"  [WARN] Reddit '{query}': {e}", file=sys.stderr)
        return []
    results = []
    for child in data.get("data", {}).get("children", []):
        d = child.get("data", {})
        results.append({
            "id": d.get("id"), "subreddit": d.get("subreddit", ""),
            "title": d.get("title", ""), "score": d.get("score", 0),
            "num_comments": d.get("num_comments", 0), "author": d.get("author", ""),
            "url": f"https://reddit.com{d.get('permalink', '')}",
            "created_utc": d.get("created_utc", 0),
        })
    return results


def load_projects(config_path, all_projects=False, priority=None):
    with open(config_path) as f:
        config = json.load(f)
    projects = config if isinstance(config, list) else config.get("projects", [])
    if priority:
        projects = [p for p in projects if p.get("priority") == priority]
    elif not all_projects:
        projects = [p for p in projects if p.get("priority") == "critical"]
    return projects


def collect_project(project, output_dir):
    name = project["name"]
    repo = project.get("repo", name)
    out_path = os.path.join(output_dir, "reddit", f"{name.replace('/', '_')}.json")
    if os.path.exists(out_path):
        return 0
    queries = [name]
    if "/" in repo:
        queries.append(repo.split("/")[1])
    all_results = {}
    for q in queries:
        posts = search_reddit(q)
        all_results[q] = posts
        time.sleep(2.0)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    total = sum(len(v) for v in all_results.values())
    payload = {"project": name, "repo": repo, "collected_at": datetime.now(timezone.utc).isoformat(),
               "queries": queries, "total_posts": total, "results": all_results}
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"  {name}: {total} posts")
    return total


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", default="config/projects.json")
    parser.add_argument("--output", default="./storage")
    parser.add_argument("--all", action="store_true")
    parser.add_argument("--priority", choices=["critical", "high", "medium"])
    parser.add_argument("--query", type=str)
    args = parser.parse_args()
    if args.query:
        print(json.dumps(search_reddit(args.query), indent=2, ensure_ascii=False))
        return
    projects = load_projects(args.config, args.all, args.priority)
    print(f"Reddit: {len(projects)} projects")
    total = sum(collect_project(p, args.output) for p in projects)
    print(f"Reddit done: {total} posts")


if __name__ == "__main__":
    main()
