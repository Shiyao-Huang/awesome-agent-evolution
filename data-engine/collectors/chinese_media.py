#!/usr/bin/env python3
"""Chinese media discussion collector."""

import argparse, json, os, sys, time
from datetime import datetime, timezone
import requests

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
      "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")


def search_juejin(query, limit=10):
    url = "https://api.juejin.cn/search_api/v1/search"
    headers = {"User-Agent": UA, "Content-Type": "application/json"}
    payload = {"aid": "2608", "keyword": query, "period": "all",
               "sort_type": 0, "search_type": 0, "cursor": "0", "limit": limit}
    try:
        resp = requests.post(url, json=payload, headers=headers, timeout=15)
        resp.raise_for_status()
        data = resp.json()
        results = []
        for item in data.get("data", [])[:limit]:
            art = item.get("article_info") or item.get("post_info") or {}
            results.append({
                "title": art.get("title", ""),
                "url": f"https://juejin.cn/post/{art.get('article_id', art.get('post_id', ''))}",
                "view_count": art.get("view_count", 0),
                "digg_count": art.get("digg_count", 0),
                "source": "juejin",
            })
        return results
    except Exception as e:
        print(f"  [WARN] Juejin: {e}", file=sys.stderr)
        return []


def search_cnblogs(query, limit=10):
    url = "https://zzk.cnblogs.com/s/blog"
    params = {"q": query, "pagesize": limit}
    headers = {"User-Agent": UA}
    try:
        resp = requests.get(url, params=params, headers=headers, timeout=15)
        resp.raise_for_status()
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(resp.text, "lxml")
        results = []
        for item in soup.select(".searchItem")[:limit]:
            title_el = item.select_one(".searchItemTitle a")
            if title_el:
                results.append({
                    "title": title_el.get_text(strip=True),
                    "url": title_el.get("href", ""),
                    "source": "cnblogs",
                })
        return results
    except Exception as e:
        print(f"  [WARN] Cnblogs: {e}", file=sys.stderr)
        return []


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
    out_path = os.path.join(output_dir, "chinese", f"{name.replace('/', '_')}.json")
    if os.path.exists(out_path):
        return 0
    queries = [name]
    if "/" in repo:
        queries.append(repo.split("/")[1])
    all_results = {}
    for q in queries:
        all_results[q] = {"juejin": search_juejin(q), "cnblogs": search_cnblogs(q)}
        time.sleep(1.5)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    total = sum(len(v2) for v1 in all_results.values() for v2 in v1.values())
    payload = {"project": name, "repo": repo, "collected_at": datetime.now(timezone.utc).isoformat(),
               "results": all_results}
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"  {name}: {total} items")
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
        results = {"juejin": search_juejin(args.query), "cnblogs": search_cnblogs(args.query)}
        print(json.dumps(results, indent=2, ensure_ascii=False))
        return
    projects = load_projects(args.config, args.all, args.priority)
    print(f"Chinese media: {len(projects)} projects")
    total = sum(collect_project(p, args.output) for p in projects)
    print(f"Chinese media done: {total} items")


if __name__ == "__main__":
    main()
