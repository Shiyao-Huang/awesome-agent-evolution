#!/usr/bin/env python3
"""
GH Archive Event Collector - 全量 GitHub 公共事件小时级数据

GH Archive (https://gharchive.org/) 提供 2011 年至今的所有公共 GitHub 事件。
每小时一个 gzip JSON 文件。

用法:
  python gh_archive.py --repo Significant-Gravitas/AutoGPT --date 2023-04-01
  python gh_archive.py --repo Significant-Gravitas/AutoGPT --start 2023-03-30 --end 2023-04-15
  python gh_archive.py --config ../config/projects.json --start 2023-04-01 --end 2023-04-30
"""

import argparse
import gzip
import json
import os
import sys
import time
from datetime import datetime, timedelta
from collections import defaultdict
from pathlib import Path
from io import BytesIO

try:
    import requests
except ImportError:
    print("请安装 requests: pip install requests")
    sys.exit(1)

GH_ARCHIVE_BASE = "https://data.gharchive.org"


def download_hour_events(date_str, hour):
    """下载某小时的 GH Archive 文件"""
    filename = f"{date_str}-{hour}.json.gz"
    url = f"{GH_ARCHIVE_BASE}/{filename}"

    try:
        resp = requests.get(url, timeout=30)
        if resp.status_code == 200:
            decompressed = gzip.decompress(resp.content)
            lines = decompressed.decode("utf-8").strip().split("\n")
            events = []
            for line in lines:
                try:
                    events.append(json.loads(line))
                except json.JSONDecodeError:
                    continue
            return events
        elif resp.status_code == 404:
            return []  # 未来日期或不存在
        else:
            print(f"  Warning: {url} returned {resp.status_code}")
            return []
    except Exception as e:
        print(f"  Error downloading {url}: {e}")
        return []


def filter_repo_events(events, repo_full_name):
    """过滤指定仓库的事件"""
    repo_lower = repo_full_name.lower()
    return [e for e in events if e.get("repo", {}).get("name", "").lower() == repo_lower]


def extract_event_summary(event):
    """提取事件关键信息"""
    return {
        "id": event.get("id"),
        "type": event.get("type"),
        "actor": event.get("actor", {}).get("login", "unknown"),
        "created_at": event.get("created_at"),
        "payload_type": event.get("payload", {}).get("action") if event.get("payload") else None,
    }


def collect_repo_day(repo_full_name, date_str):
    """收集某仓库某天的所有事件"""
    all_events = []

    for hour in range(24):
        hourly_events = download_hour_events(date_str, hour)
        repo_events = filter_repo_events(hourly_events, repo_full_name)

        for e in repo_events:
            summary = extract_event_summary(e)
            summary["hour"] = hour
            all_events.append(summary)

        # 礼貌延迟
        time.sleep(0.3)

    return all_events


def events_to_daily_summary(events):
    """将小时级事件聚合为日级统计"""
    event_types = defaultdict(int)
    actors = set()
    hours = defaultdict(int)

    for e in events:
        event_types[e["type"]] += 1
        if e["actor"] != "unknown":
            actors.add(e["actor"])
        hours[e.get("hour", 0)] += 1

    return {
        "total_events": len(events),
        "unique_actors": len(actors),
        "event_type_distribution": dict(event_types),
        "hourly_distribution": dict(sorted(hours.items())),
        "top_actors": sorted(list(actors))[:20],
    }


def collect_date_range(repo_full_name, start_date, end_date, output_dir):
    """收集日期范围内的事件"""
    start = datetime.strptime(start_date, "%Y-%m-%d")
    end = datetime.strptime(end_date, "%Y-%m-%d")

    results = {
        "repo": repo_full_name,
        "start_date": start_date,
        "end_date": end_date,
        "daily_data": [],
        "collected_at": datetime.utcnow().isoformat() + "Z"
    }

    current = start
    while current <= end:
        date_str = current.strftime("%Y-%m-%d")
        print(f"  Collecting {date_str}...")

        events = collect_repo_day(repo_full_name, date_str)
        summary = events_to_daily_summary(events)
        summary["date"] = date_str

        results["daily_data"].append(summary)
        print(f"    {date_str}: {summary['total_events']} events, {summary['unique_actors']} actors")

        current += timedelta(days=1)

    # 汇总
    total_events = sum(d["total_events"] for d in results["daily_data"])
    peak_day = max(results["daily_data"], key=lambda x: x["total_events"]) if results["daily_data"] else None
    results["summary"] = {
        "total_events": total_events,
        "days_collected": len(results["daily_data"]),
        "peak_day": peak_day["date"] if peak_day else None,
        "peak_events": peak_day["total_events"] if peak_day else 0,
        "avg_daily_events": round(total_events / max(len(results["daily_data"]), 1), 1),
    }

    # 保存
    safe_name = repo_full_name.replace("/", "_")
    filepath = os.path.join(output_dir, "events", f"{safe_name}_gharchive.json")
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"  Saved: {filepath}")

    return results


def main():
    parser = argparse.ArgumentParser(description="GH Archive Event Collector")
    parser.add_argument("--repo", help="Repository (owner/repo)")
    parser.add_argument("--config", help="Path to projects.json config")
    parser.add_argument("--date", help="Single date (YYYY-MM-DD)")
    parser.add_argument("--start", help="Start date (YYYY-MM-DD)")
    parser.add_argument("--end", help="End date (YYYY-MM-DD)")
    parser.add_argument("--output", default="../storage", help="Output directory")
    args = parser.parse_args()

    if args.date:
        start = end = args.date
    elif args.start and args.end:
        start = args.start
        end = args.end
    else:
        print("Error: Provide --date or --start/--end")
        sys.exit(1)

    if args.repo:
        collect_date_range(args.repo, start, end, args.output)
    elif args.config:
        with open(args.config) as f:
            config = json.load(f)
        for proj in config.get("target_projects", []):
            try:
                collect_date_range(proj["repo"], start, end, args.output)
            except Exception as e:
                print(f"  Error: {e}")
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
