#!/usr/bin/env python3
"""
Hacker News Discussion Tracker - 追踪 HN 上的项目讨论

使用 Algolia HN Search API（免费，无需认证）
API 文档: https://hn.algolia.com/api

用法:
  python hn_search.py --query "AutoGPT" --output ../storage
  python hn_search.py --config ../config/projects.json --all
"""

import argparse
import json
import os
import sys
import time
from datetime import datetime
from collections import defaultdict
from pathlib import Path

try:
    import requests
except ImportError:
    print("请安装 requests: pip install requests")
    sys.exit(1)

HN_SEARCH_URL = "https://hn.algolia.com/api/v1/search"
HN_SEARCH_BY_DATE_URL = "https://hn.algolia.com/api/v1/search_by_date"


def search_hn(query, tags=None, page=0, hits_per_page=20):
    """搜索 HN（按相关性）"""
    params = {
        "query": query,
        "page": page,
        "hitsPerPage": hits_per_page,
    }
    if tags:
        params["tags"] = tags

    resp = requests.get(HN_SEARCH_URL, params=params, timeout=15)
    if resp.status_code == 200:
        return resp.json()
    print(f"  HN search error: {resp.status_code}")
    return None


def search_hn_by_date(query, tags=None, page=0, hits_per_page=50,
                      start_ts=None, end_ts=None):
    """按日期搜索 HN"""
    params = {
        "query": query,
        "page": page,
        "hitsPerPage": hits_per_page,
    }
    if tags:
        params["tags"] = tags
    if start_ts:
        params["numericFilters"] = params.get("numericFilters", [])
        if isinstance(params["numericFilters"], str):
            params["numericFilters"] = [params["numericFilters"]]
        params["numericFilters"].append(f"created_at_i>{start_ts}")
    if end_ts:
        params["numericFilters"] = params.get("numericFilters", [])
        if isinstance(params["numericFilters"], str):
            params["numericFilters"] = [params["numericFilters"]]
        params["numericFilters"].append(f"created_at_i<{end_ts}")

    resp = requests.get(HN_SEARCH_BY_DATE_URL, params=params, timeout=15)
    if resp.status_code == 200:
        return resp.json()
    return None


def extract_hit_data(hit):
    """提取 HN 帖子关键信息"""
    return {
        "objectID": hit.get("objectID"),
        "title": hit.get("title", ""),
        "url": hit.get("url", ""),
        "author": hit.get("author", ""),
        "points": hit.get("points", 0),
        "num_comments": hit.get("num_comments", 0),
        "created_at": hit.get("created_at", ""),
        "created_at_i": hit.get("created_at_i", 0),
        "type": hit.get("_tags", ["story"])[0] if hit.get("_tags") else "story",
    }


def search_project_mentions(project_name, github_url=None, max_pages=5):
    """搜索项目中所有 HN 提及"""
    all_hits = []
    seen_ids = set()

    queries = [project_name]
    if github_url and "github.com/" in github_url:
        repo_name = github_url.split("github.com/")[-1]
        queries.append(repo_name)

    for query in queries:
        page = 0
        while page < max_pages:
            result = search_hn_by_date(query, page=page, hits_per_page=50)
            if not result or not result.get("hits"):
                break

            for hit in result["hits"]:
                oid = hit.get("objectID")
                if oid and oid not in seen_ids:
                    seen_ids.add(oid)
                    all_hits.append(extract_hit_data(hit))

            nb_pages = result.get("nbPages", 0)
            if page >= nb_pages - 1:
                break
            page += 1
            time.sleep(0.5)

        time.sleep(1)

    return sorted(all_hits, key=lambda x: x.get("created_at_i", 0))


def hits_to_daily(hits):
    """将 HN 帖子按日聚合"""
    daily = defaultdict(lambda: {"posts": 0, "total_points": 0, "total_comments": 0,
                                   "front_page": 0})

    for h in hits:
        if h["created_at"]:
            date = h["created_at"][:10]
            daily[date]["posts"] += 1
            daily[date]["total_points"] += h.get("points", 0)
            daily[date]["total_comments"] += h.get("num_comments", 0)
            if h.get("points", 0) >= 100:
                daily[date]["front_page"] += 1

    return [{"date": d, **daily[d]} for d in sorted(daily.keys())]


def save_output(data, filepath):
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"  Saved: {filepath}")


def process_project(name, repo, output_dir):
    print(f"\n{'='*60}")
    print(f"HN Search: {name} ({repo})")
    print(f"{'='*60}")

    result = {
        "project": name,
        "repo": repo,
        "collected_at": datetime.utcnow().isoformat() + "Z"
    }

    hits = search_project_mentions(name, f"https://github.com/{repo}")
    daily = hits_to_daily(hits)

    result["total_mentions"] = len(hits)
    result["hits"] = hits
    result["daily_summary"] = daily

    if daily:
        peak = max(daily, key=lambda x: x["total_points"])
        result["summary"] = {
            "first_mention": daily[0]["date"],
            "last_mention": daily[-1]["date"],
            "peak_day": peak["date"],
            "peak_points": peak["total_points"],
            "total_points_all": sum(d["total_points"] for d in daily),
            "total_comments_all": sum(d["total_comments"] for d in daily),
            "front_page_days": sum(1 for d in daily if d["front_page"] > 0),
        }
        print(f"  Found {len(hits)} mentions, peak: {peak['date']} ({peak['total_points']} pts)")

    safe_name = repo.replace("/", "_")
    filepath = os.path.join(output_dir, "propagation", f"{safe_name}_hn.json")
    save_output(result, filepath)
    return result


def main():
    parser = argparse.ArgumentParser(description="Hacker News Discussion Tracker")
    parser.add_argument("--query", help="Single search query")
    parser.add_argument("--config", help="Path to projects.json config")
    parser.add_argument("--all", action="store_true", help="Process all projects")
    parser.add_argument("--output", default="../storage", help="Output directory")
    args = parser.parse_args()

    if args.query:
        hits = search_project_mentions(args.query)
        for h in hits[:10]:
            print(f"  [{h['created_at'][:10]}] {h['title']} ({h['points']} pts, {h['num_comments']} comments)")
    elif args.config:
        with open(args.config) as f:
            config = json.load(f)
        for proj in config.get("target_projects", []):
            try:
                process_project(proj["name"], proj["repo"], args.output)
            except Exception as e:
                print(f"  Error: {e}")
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
