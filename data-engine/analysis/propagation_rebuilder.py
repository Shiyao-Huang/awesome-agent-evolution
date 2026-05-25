#!/usr/bin/env python3
"""
Propagation Chain Rebuilder - 传播链重建引擎

将多源数据（GitHub stars, HN, Reddit, 中文媒体, 论文引用）
合并为统一的传播链时间线

用法:
  python propagation_rebuilder.py --repo Significant-Gravitas/AutoGPT --input ../storage/
  python propagation_rebuilder.py --all --input ../storage/
"""

import argparse
import json
import os
import sys
from datetime import datetime
from collections import defaultdict
from pathlib import Path


def load_json(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return None


def merge_daily_data(star_data=None, fork_data=None, issue_data=None,
                     hn_data=None, reddit_data=None, chinese_data=None):
    """合并多源日级数据为统一时间线"""

    # 收集所有日期
    all_dates = set()

    if star_data and star_data.get("daily_history"):
        for d in star_data["daily_history"]:
            all_dates.add(d["date"])

    if fork_data and fork_data.get("daily_history"):
        for d in fork_data["daily_history"]:
            all_dates.add(d["date"])

    if hn_data and hn_data.get("daily_summary"):
        for d in hn_data["daily_summary"]:
            all_dates.add(d["date"])

    if reddit_data and reddit_data.get("daily_summary"):
        for d in reddit_data["daily_summary"]:
            all_dates.add(d["date"])

    if not all_dates:
        return []

    # 建立索引
    star_by_date = {}
    if star_data and star_data.get("daily_history"):
        for d in star_data["daily_history"]:
            star_by_date[d["date"]] = d

    fork_by_date = {}
    if fork_data and fork_data.get("daily_history"):
        for d in fork_data["daily_history"]:
            fork_by_date[d["date"]] = d

    issue_by_date = {}
    if issue_data and issue_data.get("daily_timeline"):
        for d in issue_data["daily_timeline"]:
            issue_by_date[d["date"]] = d

    hn_by_date = {}
    if hn_data and hn_data.get("daily_summary"):
        for d in hn_data["daily_summary"]:
            hn_by_date[d["date"]] = d

    reddit_by_date = {}
    if reddit_data and reddit_data.get("daily_summary"):
        for d in reddit_data["daily_summary"]:
            reddit_by_date[d["date"]] = d

    # 合并时间线
    timeline = []
    for date in sorted(all_dates):
        entry = {"date": date}

        if date in star_by_date:
            s = star_by_date[date]
            entry["stars_new"] = s.get("stars_new", 0)
            entry["stars_cumulative"] = s.get("stars_cumulative", 0)

        if date in fork_by_date:
            f = fork_by_date[date]
            entry["forks_new"] = f.get("forks_new", 0)
            entry["forks_cumulative"] = f.get("forks_cumulative", 0)

        if date in issue_by_date:
            i = issue_by_date[date]
            entry["issues_opened"] = i.get("issues_opened", 0)
            entry["issues_closed"] = i.get("issues_closed", 0)
            entry["prs_opened"] = i.get("prs_opened", 0)

        if date in hn_by_date:
            h = hn_by_date[date]
            entry["hn_posts"] = h.get("posts", 0)
            entry["hn_points"] = h.get("total_points", 0)

        if date in reddit_by_date:
            r = reddit_by_date[date]
            entry["reddit_posts"] = r.get("posts", 0)
            entry["reddit_score"] = r.get("total_score", 0)

        timeline.append(entry)

    return timeline


def detect_propagation_events(timeline):
    """检测传播关键事件"""
    events = []

    if not timeline:
        return events

    prev_stars = 0
    for i, day in enumerate(timeline):
        stars_cum = day.get("stars_cumulative", prev_stars)
        stars_new = day.get("stars_new", 0)

        # 里程碑
        milestones = [1000, 5000, 10000, 25000, 50000, 100000, 175000]
        for m in milestones:
            if prev_stars < m <= stars_cum:
                events.append({
                    "date": day["date"],
                    "type": "milestone",
                    "detail": f"达到 {m:,} stars",
                    "stars": stars_cum,
                })

        # 异常增长（单日新增 > 前 7 天日均的 5 倍）
        if i >= 7 and stars_new > 0:
            prev_7_avg = sum(timeline[j].get("stars_new", 0) for j in range(i - 7, i)) / 7
            if prev_7_avg > 0 and stars_new > prev_7_avg * 5:
                events.append({
                    "date": day["date"],
                    "type": "anomaly_spike",
                    "detail": f"单日 +{stars_new} stars（7日均值 {prev_7_avg:.0f} 的 {stars_new/prev_7_avg:.1f}x）",
                    "stars_new": stars_new,
                })

        # HN 爆发
        if day.get("hn_points", 0) > 200:
            events.append({
                "date": day["date"],
                "type": "hn_surge",
                "detail": f"HN {day['hn_posts']} 帖，{day['hn_points']} pts",
                "hn_points": day["hn_points"],
            })

        # Reddit 讨论
        if day.get("reddit_posts", 0) >= 5:
            events.append({
                "date": day["date"],
                "type": "reddit_discussion",
                "detail": f"Reddit {day['reddit_posts']} 帖，{day.get('reddit_score', 0)} pts",
            })

        prev_stars = stars_cum

    return events


def compute_propagation_metrics(timeline):
    """计算传播指标"""
    if not timeline:
        return {}

    total_days = len(timeline)
    days_with_hn = sum(1 for d in timeline if d.get("hn_posts", 0) > 0)
    days_with_reddit = sum(1 for d in timeline if d.get("reddit_posts", 0) > 0)

    # 计算各阶段速度
    star_data = [(d["date"], d.get("stars_cumulative", 0)) for d in timeline
                 if d.get("stars_cumulative")]

    return {
        "total_days": total_days,
        "first_date": timeline[0]["date"],
        "last_date": timeline[-1]["date"],
        "days_with_hn_discussion": days_with_hn,
        "days_with_reddit_discussion": days_with_reddit,
        "hn_penetration": round(days_with_hn / total_days * 100, 1) if total_days else 0,
        "reddit_penetration": round(days_with_reddit / total_days * 100, 1) if total_days else 0,
    }


def main():
    parser = argparse.ArgumentParser(description="Propagation Chain Rebuilder")
    parser.add_argument("--repo", help="Repository (owner/repo)")
    parser.add_argument("--all", action="store_true", help="Process all repos with data")
    parser.add_argument("--input", default="../storage", help="Input directory")
    parser.add_argument("--output", default="../storage/propagation", help="Output directory")
    args = parser.parse_args()

    input_dir = Path(args.input)
    snapshots_dir = input_dir / "daily_snapshots"
    propagation_dir = input_dir / "propagation"
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    if args.repo:
        repos = [args.repo]
    elif args.all:
        # 发现所有有 star 数据的仓库
        repos = []
        if snapshots_dir.exists():
            for f in snapshots_dir.glob("*_stars.json"):
                repo_name = f.stem.replace("_stars", "").replace("_", "/", 1)
                repos.append(repo_name)
    else:
        parser.print_help()
        return

    for repo in repos:
        safe_name = repo.replace("/", "_")
        print(f"\nRebuilding: {repo}")

        # 加载数据
        star_data = load_json(snapshots_dir / f"{safe_name}.json") if snapshots_dir.exists() else None
        fork_data = load_json(snapshots_dir / f"{safe_name}_forks.json") if snapshots_dir.exists() else None
        issue_data = load_json(snapshots_dir / f"{safe_name}_issues.json") if snapshots_dir.exists() else None
        hn_data = load_json(propagation_dir / f"{safe_name}_hn.json") if propagation_dir.exists() else None
        reddit_data = load_json(propagation_dir / f"{safe_name}_reddit.json") if propagation_dir.exists() else None

        # 合并
        timeline = merge_daily_data(star_data, fork_data, issue_data, hn_data, reddit_data)
        events = detect_propagation_events(timeline)
        metrics = compute_propagation_metrics(timeline)

        result = {
            "repo": repo,
            "collected_at": datetime.utcnow().isoformat() + "Z",
            "timeline_days": len(timeline),
            "events_detected": len(events),
            "metrics": metrics,
            "key_events": events,
            "timeline": timeline,
        }

        print(f"  Timeline: {len(timeline)} days, {len(events)} key events")
        for e in events[:5]:
            print(f"    [{e['date']}] {e['type']}: {e['detail']}")

        output_file = output_dir / f"{safe_name}_chain.json"
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(result, f, indent=2, ensure_ascii=False)
        print(f"  Saved: {output_file}")


if __name__ == "__main__":
    main()
