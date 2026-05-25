#!/usr/bin/env python3
"""
Reddit Discussion Tracker - 追踪 Reddit 上的项目讨论

使用 Reddit JSON API（免费，无需 OAuth 也可基础访问）

用法:
  python reddit_search.py --query "AutoGPT" --subreddit MachineLearning
  python reddit_search.py --config ../config/projects.json --all
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

REDDIT_SEARCH_URL = "https://www.reddit.com/search.json"
REDDIT_HEADERS = {
    "User-Agent": "propagation-chain-data-engine/1.0 (research)",
    "Accept": "application/json"
}


def search_reddit(query, subreddit=None, sort="new", time_filter="all",
                  limit=100, after=None):
    """搜索 Reddit 帖子"""
    params = {
        "q": query,
        "sort": sort,
        "t": time_filter,
        "limit": limit,
    }
    if subreddit:
        url = f"https://www.reddit.com/r/{subreddit}/search.json"
        params["restrict_sr"] = "on"
    else:
        url = REDDIT_SEARCH_URL

    if after:
        params["after"] = after

    try:
        resp = requests.get(url, headers=REDDIT_HEADERS, params=params, timeout=15)
        if resp.status_code == 200:
            return resp.json()
        elif resp.status_code == 429:
            print("  Rate limited. Waiting 60s...")
            time.sleep(60)
            return search_reddit(query, subreddit, sort, time_filter, limit, after)
        else:
            print(f"  Reddit error: {resp.status_code}")
            return None
    except Exception as e:
        print(f"  Reddit request error: {e}")
        return None


def extract_post_data(post):
    """提取帖子关键信息"""
    data = post.get("data", {})
    return {
        "id": data.get("name", ""),
        "title": data.get("title", ""),
        "author": data.get("author", ""),
        "subreddit": data.get("subreddit", ""),
        "score": data.get("score", 0),
        "num_comments": data.get("num_comments", 0),
        "upvote_ratio": data.get("upvote_ratio", 0),
        "created_utc": data.get("created_utc", 0),
        "created_at": datetime.utcfromtimestamp(data.get("created_utc", 0)).isoformat() + "Z" if data.get("created_utc") else "",
        "url": data.get("url", ""),
        "permalink": f"https://reddit.com{data.get('permalink', '')}",
        "selftext": data.get("selftext", "")[:500],
        "link_flair_text": data.get("link_flair_text"),
    }


def search_project_mentions(project_name, github_url=None, max_pages=5):
    """搜索项目所有 Reddit 提及"""
    all_posts = []
    seen_ids = set()

    queries = [project_name]
    if github_url and "github.com/" in github_url:
        repo_name = github_url.split("github.com/")[-1]
        queries.append(repo_name)

    subreddits = [None, "MachineLearning", "artificial", "LocalLLaMA",
                  "singularity", "ChatGPT", "OpenAI", "devops"]

    for query in queries:
        for sub in subreddits:
            after = None
            pages = 0

            while pages < max_pages:
                result = search_reddit(query, subreddit=sub, after=after, limit=100)
                if not result or not result.get("data", {}).get("children"):
                    break

                for post in result["data"]["children"]:
                    post_data = extract_post_data(post)
                    pid = post_data["id"]
                    if pid and pid not in seen_ids:
                        seen_ids.add(pid)
                        all_posts.append(post_data)

                after = result["data"].get("after")
                if not after:
                    break
                pages += 1
                time.sleep(2)

            time.sleep(2)

    return sorted(all_posts, key=lambda x: x.get("created_utc", 0))


def posts_to_daily(posts):
    """按日聚合 Reddit 讨论"""
    daily = defaultdict(lambda: {"posts": 0, "total_score": 0, "total_comments": 0,
                                   "avg_upvote_ratio": [], "subreddits": set()})

    for p in posts:
        if p["created_at"]:
            date = p["created_at"][:10]
            daily[date]["posts"] += 1
            daily[date]["total_score"] += p.get("score", 0)
            daily[date]["total_comments"] += p.get("num_comments", 0)
            if p.get("upvote_ratio"):
                daily[date]["avg_upvote_ratio"].append(p["upvote_ratio"])
            if p.get("subreddit"):
                daily[date]["subreddits"].add(p["subreddit"])

    result = []
    for date in sorted(daily.keys()):
        d = daily[date]
        avg_ratio = sum(d["avg_upvote_ratio"]) / len(d["avg_upvote_ratio"]) if d["avg_upvote_ratio"] else 0
        result.append({
            "date": date,
            "posts": d["posts"],
            "total_score": d["total_score"],
            "total_comments": d["total_comments"],
            "avg_upvote_ratio": round(avg_ratio, 2),
            "subreddits": sorted(list(d["subreddits"])),
        })
    return result


def save_output(data, filepath):
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"  Saved: {filepath}")


def process_project(name, repo, output_dir):
    print(f"\n{'='*60}")
    print(f"Reddit Search: {name} ({repo})")
    print(f"{'='*60}")

    result = {
        "project": name,
        "repo": repo,
        "collected_at": datetime.utcnow().isoformat() + "Z"
    }

    posts = search_project_mentions(name, f"https://github.com/{repo}")
    daily = posts_to_daily(posts)

    result["total_posts"] = len(posts)
    result["posts_sample"] = posts[:100]
    result["daily_summary"] = daily

    if daily:
        peak = max(daily, key=lambda x: x["total_score"])
        result["summary"] = {
            "first_post": daily[0]["date"],
            "last_post": daily[-1]["date"],
            "peak_day": peak["date"],
            "peak_score": peak["total_score"],
            "total_score": sum(d["total_score"] for d in daily),
            "unique_subreddits": len(set(s for d in daily for s in d["subreddits"])),
        }
        print(f"  Found {len(posts)} posts, peak: {peak['date']}")

    safe_name = repo.replace("/", "_")
    filepath = os.path.join(output_dir, "propagation", f"{safe_name}_reddit.json")
    save_output(result, filepath)
    return result


def main():
    parser = argparse.ArgumentParser(description="Reddit Discussion Tracker")
    parser.add_argument("--query", help="Single search query")
    parser.add_argument("--config", help="Path to projects.json config")
    parser.add_argument("--all", action="store_true", help="Process all projects")
    parser.add_argument("--output", default="../storage", help="Output directory")
    args = parser.parse_args()

    if args.query:
        posts = search_project_mentions(args.query)
        for p in posts[:10]:
            print(f"  [{p['created_at'][:10]}] r/{p['subreddit']} - {p['title'][:60]} ({p['score']} pts)")
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
