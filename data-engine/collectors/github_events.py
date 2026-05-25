#!/usr/bin/env python3
"""
GitHub Events Stream Collector - 仓库事件流追踪

追踪仓库级别的实时事件（WatchEvent, ForkEvent, IssuesEvent, PullRequestEvent 等）

用法:
  python github_events.py --repo Significant-Gravitas/AutoGPT --token $GITHUB_TOKEN
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


def get_repo_events(owner, repo, token=None, max_pages=10):
    """获取仓库事件流"""
    events = []
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "propagation-chain-data-engine/1.0"
    }
    if token:
        headers["Authorization"] = f"token {token}"

    url = f"{GITHUB_API}/repos/{owner}/{repo}/events"
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
            break

        if resp.status_code != 200:
            print(f"  Error {resp.status_code}: {resp.text[:200]}")
            break

        data = resp.json()
        if not data:
            break

        for event in data:
            events.append({
                "id": event.get("id"),
                "type": event.get("type"),
                "actor": event.get("actor", {}).get("login", "unknown"),
                "created_at": event.get("created_at"),
                "payload_action": event.get("payload", {}).get("action"),
            })

        if len(data) < 100:
            break
        page += 1
        if page > max_pages:
            break
        time.sleep(1)

    return events


def get_commit_activity(owner, repo, token=None):
    """获取每周 commit 活动统计"""
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "propagation-chain-data-engine/1.0"
    }
    if token:
        headers["Authorization"] = f"token {token}"

    resp = requests.get(
        f"{GITHUB_API}/repos/{owner}/{repo}/stats/commit_activity",
        headers=headers
    )
    if resp.status_code == 200:
        return resp.json()
    elif resp.status_code == 202:
        print("  Commit activity stats being computed (202). Retry later.")
        return None
    return None


def get_code_frequency(owner, repo, token=None):
    """获取每周代码增删统计"""
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "propagation-chain-data-engine/1.0"
    }
    if token:
        headers["Authorization"] = f"token {token}"

    resp = requests.get(
        f"{GITHUB_API}/repos/{owner}/{repo}/stats/code_frequency",
        headers=headers
    )
    if resp.status_code == 200:
        return resp.json()
    elif resp.status_code == 202:
        print("  Code frequency stats being computed (202). Retry later.")
        return None
    return None


def get_participation(owner, repo, token=None):
    """获取每周 commit 参与度（owner vs all）"""
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "propagation-chain-data-engine/1.0"
    }
    if token:
        headers["Authorization"] = f"token {token}"

    resp = requests.get(
        f"{GITHUB_API}/repos/{owner}/{repo}/stats/participation",
        headers=headers
    )
    if resp.status_code == 200:
        return resp.json()
    elif resp.status_code == 202:
        print("  Participation stats being computed (202). Retry later.")
        return None
    return None


def events_to_summary(events):
    """事件统计摘要"""
    type_counts = defaultdict(int)
    actor_counts = defaultdict(int)

    for e in events:
        type_counts[e["type"]] += 1
        actor_counts[e["actor"]] += 1

    return {
        "total_events": len(events),
        "type_distribution": dict(sorted(type_counts.items(), key=lambda x: -x[1])),
        "unique_actors": len(actor_counts),
        "top_actors": dict(sorted(actor_counts.items(), key=lambda x: -x[1])[:10]),
    }


def save_output(data, filepath):
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"  Saved: {filepath}")


def process_repo(owner, repo, token, output_dir):
    print(f"\n{'='*60}")
    print(f"Processing events: {owner}/{repo}")
    print(f"{'='*60}")

    result = {
        "repo": f"{owner}/{repo}",
        "collected_at": datetime.utcnow().isoformat() + "Z"
    }

    # 事件流
    events = get_repo_events(owner, repo, token)
    result["events_summary"] = events_to_summary(events)
    print(f"  Events: {len(events)}, types: {result['events_summary']['type_distribution']}")

    # Commit 活动
    activity = get_commit_activity(owner, repo, token)
    if activity:
        result["commit_activity"] = activity
        total_commits = sum(w.get("total", 0) for w in activity)
        print(f"  Commit activity (52w): {total_commits} total commits")

    # 代码频率
    freq = get_code_frequency(owner, repo, token)
    if freq:
        result["code_frequency"] = freq

    # 参与度
    participation = get_participation(owner, repo, token)
    if participation:
        result["participation"] = participation

    safe_name = f"{owner}_{repo}".replace("/", "_")
    filepath = os.path.join(output_dir, "daily_snapshots", f"{safe_name}_events.json")
    save_output(result, filepath)
    return result


def main():
    parser = argparse.ArgumentParser(description="GitHub Events Stream Collector")
    parser.add_argument("--repo", help="Repository (owner/repo)")
    parser.add_argument("--config", help="Path to projects.json config")
    parser.add_argument("--all", action="store_true", help="Process all projects")
    parser.add_argument("--token", help="GitHub PAT token")
    parser.add_argument("--output", default="../storage", help="Output directory")
    args = parser.parse_args()

    token = args.token or os.environ.get("GITHUB_TOKEN")

    if args.repo:
        owner, repo = args.repo.split("/")
        process_repo(owner, repo, token, args.output)
    elif args.config:
        with open(args.config) as f:
            config = json.load(f)
        for proj in config.get("target_projects", []):
            try:
                owner, repo = proj["repo"].split("/")
                process_repo(owner, repo, token, args.output)
                time.sleep(2)
            except Exception as e:
                print(f"  Error: {e}")
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
