#!/usr/bin/env python3
"""Chinese media discussion collector using web scraping."""

import argparse
import json
import os
import re
import sys
import time
from datetime import datetime, timezone

import requests
from bs4 import BeautifulSoup

UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)


def search_google_cn(query, limit=10):
    results = []
    url = "https://www.google.com/search"
    params = {"q": f"{query} site:zhihu.com OR site:36kr.com OR site:oschina.net OR site:juejin.cn", "num": limit}
    headers = {"User-Agent": UA}
    try:
        resp = requests.get(url, params=params, headers=headers, timeout=15)
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, "lxml")
        for g in soup.select("div.g")[:limit]:
            title_el = g.select_one("h3")
            link_el = g.select_one("a[href]")
            snippet_el = g.select_one(".VwiC3b")
            if title_el and link_el:
                href = link_el.get("href", "")
                results.append({
                    "title": title_el.get_text(strip=True),
                    "url": href,
                    "snippet": snippet_el.get_text(strip=True) if snippet_el else "",
                    "source": "google-cn-search",
                })
    except Exception as e:
        print(f"  [WARN] Google CN search '{query}': {e}", file=sys.stderr)
    return results


def search_juejin(query, limit=10):
    results = []
    url = "https://api.juejin.cn/search_api/v1/search"
    headers = {"User-Agent": UA, "Content-Type": "application/json"}
    payload = {
        "aid": "2608",
        "keyword": query,
        "period": "all",
        "sort_type": 0,
        "search_type": 0,
        "cursor": "0",
        "limit": limit,
    }
    try:
        resp = requests.post(url, json=payload, headers=headers, timeout=15)
        resp.raise_for_status()
        data = resp.json()
        for item in data.get("data", [])[:limit]:
            art = item.get("article_info") or item.get("post_info") or {}
            results.append({
                "title": art.get("title", ""),
                "url": f"https://juejin.cn/post/{art.get('article_id', art.get('post_id', ''))}",
                "view_count": art.get("view_count", 0),
                "digg_count": art.get("digg_count", 0),
                "comment_count": art.get("comment_count", 0),
                "source": "juejin",
            })
    except (requests.RequestException, ValueError, KeyError) as e:
        print(f"  [WARN] Juejin search '{query}': {e}", file=sys.stderr)
    return results


def search_hellogithub(query, limit=10):
    results = []
    url = "https://hellogithub.com/repository/search"
    params = {"q": query, "page": 1, "per_page": limit}
    headers = {"User-Agent": UA}
    try:
        resp = requests.get(url, params=params, headers=headers, timeout=15)
        resp.raise_for_status()
        data = resp.json()
        for item in data.get("data", {}).get("items", [])[:limit]:
            results.append({
                "title": item.get("name", ""),
                "description": (item.get("description") or "")[:300],
                "url": item.get("url", ""),
                "stars": item.get("stargazers_count", 0),
                "source": "hellogithub",
            })
    except (requests.RequestException, ValueError) as e:
        print(f"  [WARN] HelloGitHub search '{query}': {e}", file=sys.stderr)
    return results


def collect_project(project, output_dir):
    name = project["name"]
    repo = project.get("repo", name)
    queries = [name]
    if "/" in repo:
        repo_short = repo.split("/")[1]
        if repo_short.lower() != name.lower():
            queries.append(repo_short)

    all_results = {}
    for q in queries:
        print(f"  Chinese media searching: '{q}'")
        all_results[q] = {
            "juejin": search_juejin(q),
            "hellogithub": search_hellogithub(q),
            "google_cn": search_google_cn(q),
        }
        time.sleep(1.5)

    out_path = os.path.join(output_dir, "chinese", f"{name.replace('/', '_')}.json")
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    payload = {
        "project": name,
        "repo": repo,
        "collected_at": datetime.now(timezone.utc).isoformat(),
        "queries": queries,
        "results": all_results,
    }
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    total = sum(
        len(v2)
        for v1 in all_results.values()
        for v2 in v1.values()
    )
    print(f"  -> {out_path} ({total} items)")
    return total


def main():
    parser = argparse.ArgumentParser(description="Chinese media discussion collector")
    parser.add_argument("--config", default="config/projects.json")
    parser.add_argument("--output", default="./storage")
    parser.add_argument("--all", action="store_true")
    parser.add_argument("--query", type=str, help="Single query test")
    args = parser.parse_args()

    if args.query:
        results = {
            "juejin": search_juejin(args.query),
            "hellogithub": search_hellogithub(args.query),
            "google_cn": search_google_cn(args.query),
        }
        print(json.dumps(results, indent=2, ensure_ascii=False))
        return

    with open(args.config) as f:
        config = json.load(f)

    projects = config.get("projects", [])
    if not args.all:
        projects = [p for p in projects if p.get("priority") == "critical"]

    print(f"Chinese media collection: {len(projects)} projects")
    total = 0
    for i, proj in enumerate(projects):
        print(f"[{i+1}/{len(projects)}] {proj['name']}")
        total += collect_project(proj, args.output)

    print(f"\nChinese media done: {total} items across {len(projects)} projects")


if __name__ == "__main__":
    main()
