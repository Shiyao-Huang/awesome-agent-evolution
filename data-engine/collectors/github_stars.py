#!/usr/bin/env python3
"""
GitHub Star History Collector - 每日粒度 Star 增长追踪

用法:
  python github_stars.py --repo Significant-Gravitas/AutoGPT --token $GITHUB_TOKEN
  python github_stars.py --config ../config/projects.json --token $GITHUB_TOKEN --all
"""

import argparse
import json
import os
import sys
import time
from datetime import datetime, timedelta
from collections import defaultdict
from pathlib import Path

try:
    import requests
except ImportError:
    print("请安装 requests: pip install requests")
    sys.exit(1)

GITHUB_API = "https://api.github.com"


def get_star_history(owner, repo, token=None, max_pages=None):
    """
    获取仓库的完整 Star 历史（每个 star 的时间戳）

    返回: list of {"starred_at": "2023-04-01T12:34:56Z", "user": "username"}
    """
    stars = []
    headers = {
        "Accept": "application/vnd.github.v3.star+json",
        "User-Agent": "propagation-chain-data-engine/1.0"
    }
    if token:
        headers["Authorization"] = f"token {token}"

    url = f"{GITHUB_API}/repos/{owner}/{repo}/stargazers"
    page = 1

    while True:
        params = {"page": page, "per_page": 100}
        resp = requests.get(url, headers=headers, params=params)

        if resp.status_code == 403:
            reset_time = int(resp.headers.get("X-RateLimit-Reset", 0))
            if reset_time:
                wait = max(reset_time - int(time.time()), 10) + 5
                print(f"  Rate limited. Waiting {wait}s...")
                time.sleep(wait)
                continue
            else:
                print(f"  403 Forbidden. Stopping.")
                break

        if resp.status_code != 200:
            print(f"  Error {resp.status_code}: {resp.text[:200]}")
            break

        data = resp.json()
        if not data:
            break

        for entry in data:
            if isinstance(entry, dict) and "starred_at" in entry:
                stars.append({
                    "starred_at": entry["starred_at"],
                    "user": entry.get("user", {}).get("login", "unknown")
                })
            elif isinstance(entry, dict):
                # Fallback for non-star+json format
                stars.append({
                    "starred_at": entry.get("created_at", ""),
                    "user": entry.get("login", "unknown")
                })

        print(f"  Page {page}: {len(data)} stars (total: {len(stars)})")

        if len(data) < 100:
            break

        page += 1
        if max_pages and page > max_pages:
            print(f"  Reached max pages limit ({max_pages})")
            break

        # Rate limit: stay under 5000/hr
        remaining = int(resp.headers.get("X-RateLimit-Remaining", 100))
        if remaining < 100:
            print(f"  Low rate limit remaining: {remaining}. Sleeping 60s...")
            time.sleep(60)
        else:
            time.sleep(1)

    return stars


def stars_to_daily(stars_list):
    """
    将 star 时间戳列表转换为每日增长数据

    返回: list of {"date": "2023-04-01", "stars_cumulative": 15000, "stars_new": 5000}
    """
    daily = defaultdict(int)
    for entry in stars_list:
        if entry["starred_at"]:
            date = entry["starred_at"][:10]  # YYYY-MM-DD
            daily[date] += 1

    if not daily:
        return []

    sorted_dates = sorted(daily.keys())
    cumulative = 0
    result = []

    for date in sorted_dates:
        cumulative += daily[date]
        result.append({
            "date": date,
            "stars_new": daily[date],
            "stars_cumulative": cumulative
        })

    return result


def get_repo_metadata(owner, repo, token=None):
    """获取仓库当前元数据"""
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "propagation-chain-data-engine/1.0"
    }
    if token:
        headers["Authorization"] = f"token {token}"

    resp = requests.get(f"{GITHUB_API}/repos/{owner}/{repo}", headers=headers)
    if resp.status_code == 200:
        data = resp.json()
        return {
            "full_name": data.get("full_name"),
            "stars": data.get("stargazers_count"),
            "forks": data.get("forks_count"),
            "open_issues": data.get("open_issues_count"),
            "watchers": data.get("watchers_count"),
            "language": data.get("language"),
            "created_at": data.get("created_at"),
            "updated_at": data.get("updated_at"),
            "pushed_at": data.get("pushed_at"),
            "topics": data.get("topics", []),
            "license": data.get("license", {}).get("spdx_id") if data.get("license") else None,
            "default_branch": data.get("default_branch"),
            "collected_at": datetime.utcnow().isoformat() + "Z"
        }
    return None


def get_contributors_count(owner, repo, token=None):
    """获取贡献者数量（通过 API 分页）"""
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "propagation-chain-data-engine/1.0"
    }
    if token:
        headers["Authorization"] = f"token {token}"

    # Use per_page=1 and check last page Link header for total count
    resp = requests.get(
        f"{GITHUB_API}/repos/{owner}/{repo}/contributors",
        headers=headers,
        params={"per_page": 1, "page": 1}
    )

    if resp.status_code == 200:
        link = resp.headers.get("Link", "")
        if 'rel="last"' in link:
            # Extract page count from last page URL
            import re
            match = re.search(r'page=(\d+)>; rel="last"', link)
            if match:
                return int(match.group(1))
        # If no last page, only 1 page of results
        return len(resp.json())
    return None


def save_output(data, filepath):
    """保存 JSON 输出"""
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"  Saved: {filepath}")


def process_repo(owner, repo, token, output_dir, max_pages=None):
    """处理单个仓库的完整数据采集"""
    print(f"\n{'='*60}")
    print(f"Processing: {owner}/{repo}")
    print(f"{'='*60}")

    result = {
        "repo": f"{owner}/{repo}",
        "collected_at": datetime.utcnow().isoformat() + "Z"
    }

    # 1. 元数据
    print("  [1/3] Fetching metadata...")
    metadata = get_repo_metadata(owner, repo, token)
    if metadata:
        result["metadata"] = metadata
        print(f"  Stars: {metadata['stars']}, Forks: {metadata['forks']}")

    # 2. 贡献者数量
    print("  [2/3] Fetching contributors count...")
    contrib_count = get_contributors_count(owner, repo, token)
    if contrib_count is not None:
        result["contributors_count"] = contrib_count
        if metadata and metadata["stars"]:
            result["stars_per_contributor"] = round(metadata["stars"] / contrib_count, 1)
        print(f"  Contributors: {contrib_count}, S/C ratio: {result.get('stars_per_contributor', 'N/A')}")

    # 3. Star 历史
    print("  [3/3] Fetching star history...")
    stars = get_star_history(owner, repo, token, max_pages)
    daily = stars_to_daily(stars)

    result["total_stars_fetched"] = len(stars)
    result["daily_history"] = daily
    result["daily_history_count"] = len(daily)

    if daily:
        first_date = daily[0]["date"]
        last_date = daily[-1]["date"]
        peak_day = max(daily, key=lambda x: x["stars_new"])
        result["summary"] = {
            "first_star_date": first_date,
            "last_star_date": last_date,
            "peak_day": {"date": peak_day["date"], "new_stars": peak_day["stars_new"]},
            "days_to_1k": next((i+1 for i, d in enumerate(daily) if d["stars_cumulative"] >= 1000), None),
            "days_to_10k": next((i+1 for i, d in enumerate(daily) if d["stars_cumulative"] >= 10000), None),
            "days_to_50k": next((i+1 for i, d in enumerate(daily) if d["stars_cumulative"] >= 50000), None),
            "days_to_100k": next((i+1 for i, d in enumerate(daily) if d["stars_cumulative"] >= 100000), None),
        }
        print(f"  Star history: {first_date} → {last_date} ({len(daily)} days)")
        print(f"  Peak day: {peak_day['date']} (+{peak_day['stars_new']} stars)")
        print(f"  Days to 1K: {result['summary']['days_to_1k']}, 10K: {result['summary']['days_to_10k']}, 100K: {result['summary']['days_to_100k']}")

    # 保存
    safe_name = f"{owner}_{repo}".replace("/", "_")
    filepath = os.path.join(output_dir, "daily_snapshots", f"{safe_name}.json")
    save_output(result, filepath)

    return result


def main():
    parser = argparse.ArgumentParser(description="GitHub Star History Collector")
    parser.add_argument("--repo", help="Repository (owner/repo)")
    parser.add_argument("--config", help="Path to projects.json config")
    parser.add_argument("--all", action="store_true", help="Process all projects in config")
    parser.add_argument("--token", help="GitHub PAT token")
    parser.add_argument("--output", default="../storage", help="Output directory")
    parser.add_argument("--max-pages", type=int, help="Max pages for star history")
    args = parser.parse_args()

    token = args.token or os.environ.get("GITHUB_TOKEN")

    if not token:
        print("Warning: No GitHub token provided. Rate limit will be 60/hr.")
        print("Set GITHUB_TOKEN env var or use --token flag.")

    if args.repo:
        owner, repo = args.repo.split("/")
        process_repo(owner, repo, token, args.output, args.max_pages)
    elif args.config:
        with open(args.config) as f:
            config = json.load(f)
        projects = config.get("target_projects", [])
        print(f"Found {len(projects)} projects in config")

        for i, proj in enumerate(projects):
            print(f"\n[{i+1}/{len(projects)}] {proj['name']} ({proj['repo']})")
            try:
                owner, repo = proj["repo"].split("/")
                process_repo(owner, repo, token, args.output, args.max_pages)
            except Exception as e:
                print(f"  Error: {e}")
                continue
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
