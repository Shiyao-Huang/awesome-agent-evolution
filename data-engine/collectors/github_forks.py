#!/usr/bin/env python3
"""
GitHub Fork History Collector - 追踪 Fork 增长与质量

用法:
  python github_forks.py --repo Significant-Gravitas/AutoGPT --token $GITHUB_TOKEN
  python github_forks.py --config ../config/projects.json --token $GITHUB_TOKEN --all
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

GITHUB_API = "https://api.github.com"


def get_forks(owner, repo, token=None, max_pages=None):
    """获取仓库 fork 列表（含创建时间）"""
    forks = []
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "propagation-chain-data-engine/1.0"
    }
    if token:
        headers["Authorization"] = f"token {token}"

    url = f"{GITHUB_API}/repos/{owner}/{repo}/forks"
    page = 1

    while True:
        params = {"page": page, "per_page": 100, "sort": "oldest"}
        resp = requests.get(url, headers=headers, params=params)

        if resp.status_code == 403:
            reset_time = int(resp.headers.get("X-RateLimit-Reset", 0))
            if reset_time:
                wait = max(reset_time - int(time.time()), 10) + 5
                print(f"  Rate limited. Waiting {wait}s...")
                time.sleep(wait)
                continue
            break

        if resp.status_code != 200:
            print(f"  Error {resp.status_code}: {resp.text[:200]}")
            break

        data = resp.json()
        if not data:
            break

        for fork in data:
            forks.append({
                "fork_owner": fork.get("owner", {}).get("login", "unknown"),
                "created_at": fork.get("created_at", ""),
                "updated_at": fork.get("updated_at", ""),
                "pushed_at": fork.get("pushed_at", ""),
                "stargazers_count": fork.get("stargazers_count", 0),
                "forks_count": fork.get("forks_count", 0),
                "open_issues_count": fork.get("open_issues_count", 0),
                "watchers_count": fork.get("watchers_count", 0),
            })

        print(f"  Page {page}: {len(data)} forks (total: {len(forks)})")

        if len(data) < 100:
            break
        page += 1
        if max_pages and page > max_pages:
            break

        remaining = int(resp.headers.get("X-RateLimit-Remaining", 100))
        if remaining < 100:
            time.sleep(60)
        else:
            time.sleep(1)

    return forks


def forks_to_daily(forks_list):
    """将 fork 列表转换为每日增长数据"""
    daily = defaultdict(int)
    for f in forks_list:
        if f["created_at"]:
            date = f["created_at"][:10]
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
            "forks_new": daily[date],
            "forks_cumulative": cumulative
        })
    return result


def compute_fork_quality(forks_list):
    """评估 fork 质量：有 push 活动的 fork 占比"""
    if not forks_list:
        return {}

    with_push = 0
    with_stars = 0
    now = datetime.utcnow().isoformat() + "Z"
    active_30d = 0

    for f in forks_list:
        if f.get("pushed_at"):
            with_push += 1
            # 检查 30 天内是否有 push
            try:
                pushed = f["pushed_at"][:10]
                days_since = (datetime.utcnow() - datetime.fromisoformat(pushed)).days
                if days_since <= 30:
                    active_30d += 1
            except:
                pass
        if f.get("stargazers_count", 0) > 0:
            with_stars += 1

    total = len(forks_list)
    return {
        "total_forks_sampled": total,
        "forks_with_push": with_push,
        "forks_with_push_pct": round(with_push / total * 100, 1) if total else 0,
        "forks_with_stars": with_stars,
        "forks_with_stars_pct": round(with_stars / total * 100, 1) if total else 0,
        "forks_active_30d": active_30d,
        "forks_active_30d_pct": round(active_30d / total * 100, 1) if total else 0,
    }


def save_output(data, filepath):
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"  Saved: {filepath}")


def process_repo(owner, repo, token, output_dir, max_pages=None):
    print(f"\n{'='*60}")
    print(f"Processing forks: {owner}/{repo}")
    print(f"{'='*60}")

    result = {
        "repo": f"{owner}/{repo}",
        "collected_at": datetime.utcnow().isoformat() + "Z"
    }

    forks = get_forks(owner, repo, token, max_pages)
    daily = forks_to_daily(forks)
    quality = compute_fork_quality(forks)

    result["total_forks_fetched"] = len(forks)
    result["daily_history"] = daily
    result["fork_quality"] = quality

    if quality:
        print(f"  Fork quality: {quality['forks_with_push_pct']}% have push, "
              f"{quality['forks_active_30d_pct']}% active in 30d")

    safe_name = f"{owner}_{repo}".replace("/", "_")
    filepath = os.path.join(output_dir, "daily_snapshots", f"{safe_name}_forks.json")
    save_output(result, filepath)
    return result


def main():
    parser = argparse.ArgumentParser(description="GitHub Fork History Collector")
    parser.add_argument("--repo", help="Repository (owner/repo)")
    parser.add_argument("--config", help="Path to projects.json config")
    parser.add_argument("--all", action="store_true", help="Process all projects")
    parser.add_argument("--token", help="GitHub PAT token")
    parser.add_argument("--output", default="../storage", help="Output directory")
    parser.add_argument("--max-pages", type=int, help="Max pages for fork list")
    args = parser.parse_args()

    token = args.token or os.environ.get("GITHUB_TOKEN")

    if args.repo:
        owner, repo = args.repo.split("/")
        process_repo(owner, repo, token, args.output, args.max_pages)
    elif args.config:
        with open(args.config) as f:
            config = json.load(f)
        for proj in config.get("target_projects", []):
            try:
                owner, repo = proj["repo"].split("/")
                process_repo(owner, repo, token, args.output, args.max_pages)
            except Exception as e:
                print(f"  Error: {e}")
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
