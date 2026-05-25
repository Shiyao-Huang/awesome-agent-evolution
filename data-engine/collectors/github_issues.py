#!/usr/bin/env python3
"""
GitHub Issues/PR Timeline Collector - 追踪 Issue/PR 活动时间线

用法:
  python github_issues.py --repo Significant-Gravitas/AutoGPT --token $GITHUB_TOKEN
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


def get_issues_timeline(owner, repo, token=None, state="all", max_pages=None, since=None):
    """获取 Issue 时间线"""
    issues = []
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "propagation-chain-data-engine/1.0"
    }
    if token:
        headers["Authorization"] = f"token {token}"

    url = f"{GITHUB_API}/repos/{owner}/{repo}/issues"
    page = 1

    while True:
        params = {
            "page": page,
            "per_page": 100,
            "state": state,
            "sort": "created",
            "direction": "asc",
        }
        if since:
            params["since"] = since

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

        for issue in data:
            # Skip PRs (they have pull_request field)
            is_pr = "pull_request" in issue
            issues.append({
                "number": issue.get("number"),
                "type": "pr" if is_pr else "issue",
                "state": issue.get("state"),
                "created_at": issue.get("created_at", ""),
                "closed_at": issue.get("closed_at", ""),
                "updated_at": issue.get("updated_at", ""),
                "user": issue.get("user", {}).get("login", "unknown"),
                "labels": [l.get("name") for l in issue.get("labels", [])],
                "comments_count": issue.get("comments", 0),
                "reactions": issue.get("reactions", {}).get("total_count", 0) if issue.get("reactions") else 0,
            })

        print(f"  Page {page}: {len(data)} items (total: {len(issues)})")

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

    return issues


def get_pr_stats(owner, repo, token=None):
    """获取 PR 统计（合并率等）"""
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "propagation-chain-data-engine/1.0"
    }
    if token:
        headers["Authorization"] = f"token {token}"

    stats = {}
    for state in ["open", "closed"]:
        resp = requests.get(
            f"{GITHUB_API}/repos/{owner}/{repo}/pulls",
            headers=headers,
            params={"state": state, "per_page": 1, "page": 1}
        )
        if resp.status_code == 200:
            link = resp.headers.get("Link", "")
            if 'rel="last"' in link:
                import re
                match = re.search(r'page=(\d+)>; rel="last"', link)
                if match:
                    stats[f"prs_{state}"] = int(match.group(1))
                else:
                    stats[f"prs_{state}"] = len(resp.json())
            else:
                stats[f"prs_{state}"] = len(resp.json())

    # merged PRs (closed state includes merged)
    resp = requests.get(
        f"{GITHUB_API}/repos/{owner}/{repo}/pulls",
        headers=headers,
        params={"state": "closed", "per_page": 100}
    )
    merged_count = 0
    if resp.status_code == 200:
        for pr in resp.json():
            if pr.get("merged_at"):
                merged_count += 1
        # Extrapolate if there are more pages
        total_closed = stats.get("prs_closed", 0)
        if len(resp.json()) == 100 and total_closed > 100:
            merge_ratio = merged_count / 100
            merged_count = int(total_closed * merge_ratio)

    stats["prs_merged"] = merged_count
    total = stats.get("prs_open", 0) + stats.get("prs_closed", 0)
    stats["pr_merge_rate"] = round(merged_count / total * 100, 1) if total else 0

    return stats


def issues_to_daily(issues_list):
    """将 issues 转换为每日统计"""
    daily = defaultdict(lambda: {"issues_opened": 0, "issues_closed": 0,
                                  "prs_opened": 0, "prs_closed": 0})

    for item in issues_list:
        if item["created_at"]:
            date = item["created_at"][:10]
            if item["type"] == "pr":
                daily[date]["prs_opened"] += 1
            else:
                daily[date]["issues_opened"] += 1

        if item.get("closed_at"):
            date = item["closed_at"][:10]
            if item["type"] == "pr":
                daily[date]["prs_closed"] += 1
            else:
                daily[date]["issues_closed"] += 1

    result = []
    for date in sorted(daily.keys()):
        entry = {"date": date}
        entry.update(daily[date])
        result.append(entry)

    return result


def save_output(data, filepath):
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"  Saved: {filepath}")


def process_repo(owner, repo, token, output_dir, max_pages=None, since=None):
    print(f"\n{'='*60}")
    print(f"Processing issues: {owner}/{repo}")
    print(f"{'='*60}")

    result = {
        "repo": f"{owner}/{repo}",
        "collected_at": datetime.utcnow().isoformat() + "Z"
    }

    issues = get_issues_timeline(owner, repo, token, max_pages=max_pages, since=since)
    daily = issues_to_daily(issues)
    pr_stats = get_pr_stats(owner, repo, token)

    result["total_items_fetched"] = len(issues)
    result["daily_timeline"] = daily
    result["pr_stats"] = pr_stats

    # Issue 质量评估
    issues_only = [i for i in issues if i["type"] == "issue"]
    issues_with_comments = sum(1 for i in issues_only if i["comments_count"] > 0)
    issues_with_labels = sum(1 for i in issues_only if i["labels"])

    result["issue_quality"] = {
        "total_issues": len(issues_only),
        "issues_with_comments": issues_with_comments,
        "comment_rate": round(issues_with_comments / len(issues_only) * 100, 1) if issues_only else 0,
        "issues_with_labels": issues_with_labels,
        "label_rate": round(issues_with_labels / len(issues_only) * 100, 1) if issues_only else 0,
    }

    print(f"  Issues: {len(issues_only)}, PRs: {len(issues) - len(issues_only)}")
    print(f"  PR merge rate: {pr_stats.get('pr_merge_rate', 'N/A')}%")
    print(f"  Issue comment rate: {result['issue_quality']['comment_rate']}%")

    safe_name = f"{owner}_{repo}".replace("/", "_")
    filepath = os.path.join(output_dir, "daily_snapshots", f"{safe_name}_issues.json")
    save_output(result, filepath)
    return result


def main():
    parser = argparse.ArgumentParser(description="GitHub Issues/PR Timeline Collector")
    parser.add_argument("--repo", help="Repository (owner/repo)")
    parser.add_argument("--config", help="Path to projects.json config")
    parser.add_argument("--all", action="store_true", help="Process all projects")
    parser.add_argument("--token", help="GitHub PAT token")
    parser.add_argument("--output", default="../storage", help="Output directory")
    parser.add_argument("--max-pages", type=int, help="Max pages")
    parser.add_argument("--since", help="Only items updated after ISO date")
    args = parser.parse_args()

    token = args.token or os.environ.get("GITHUB_TOKEN")

    if args.repo:
        owner, repo = args.repo.split("/")
        process_repo(owner, repo, token, args.output, args.max_pages, args.since)
    elif args.config:
        with open(args.config) as f:
            config = json.load(f)
        for proj in config.get("target_projects", []):
            try:
                owner, repo = proj["repo"].split("/")
                process_repo(owner, repo, token, args.output, args.max_pages, args.since)
            except Exception as e:
                print(f"  Error: {e}")
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
