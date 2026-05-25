#!/usr/bin/env python3
"""
Anomaly Detector - 异常增长检测

检测 Star/Fork/Issue 的异常增长模式：
- 单日爆发（>5x 7日均值）
- 周末异常（周末 star 暴增，通常为机器人行为）
- 脉冲式增长（短期暴增后快速衰减）
- 同步增长（多个项目同时暴增，说明是外部事件驱动）

用法:
  python anomaly_detector.py --input ../storage/ --output ../storage/analysis/
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


def detect_daily_anomalies(daily_history, window=7, threshold=5.0):
    """检测日级异常增长"""
    anomalies = []

    for i, day in enumerate(daily_history):
        if i < window:
            continue

        new_stars = day.get("stars_new", 0)
        if new_stars <= 0:
            continue

        # 前 N 天均值
        prev_avg = sum(daily_history[j].get("stars_new", 0)
                       for j in range(i - window, i)) / window

        if prev_avg > 0:
            ratio = new_stars / prev_avg
            if ratio >= threshold:
                anomalies.append({
                    "date": day["date"],
                    "type": "daily_spike",
                    "stars_new": new_stars,
                    "prev_avg": round(prev_avg, 1),
                    "ratio": round(ratio, 1),
                    "severity": "critical" if ratio >= 10 else "high" if ratio >= 7 else "medium",
                })

    return anomalies


def detect_weekend_anomalies(daily_history):
    """检测周末异常（周六日 star 占比过高）"""
    weekday_stars = []
    weekend_stars = []

    for day in daily_history:
        try:
            dt = datetime.strptime(day["date"], "%Y-%m-%d")
            new = day.get("stars_new", 0)
            if dt.weekday() < 5:
                weekday_stars.append(new)
            else:
                weekend_stars.append(new)
        except:
            continue

    if not weekday_stars or not weekend_stars:
        return None

    weekday_avg = sum(weekday_stars) / len(weekday_stars)
    weekend_avg = sum(weekend_stars) / len(weekend_stars)

    if weekday_avg > 0:
        ratio = weekend_avg / weekday_avg
    else:
        ratio = 0

    # 正常情况下周末 star 应少于工作日
    # 如果周末 > 工作日，可能是机器人
    is_anomalous = ratio > 1.3

    return {
        "weekday_avg": round(weekday_avg, 1),
        "weekend_avg": round(weekend_avg, 1),
        "weekend_weekday_ratio": round(ratio, 2),
        "is_anomalous": is_anomalous,
        "note": "周末 star 高于工作日，可能为机器人行为" if is_anomalous else "正常模式",
    }


def detect_pulse_pattern(daily_history, window=14):
    """检测脉冲式增长（暴增后快速衰减）"""
    pulses = []

    for i in range(window, len(daily_history) - window):
        before = sum(daily_history[j].get("stars_new", 0)
                     for j in range(i - window, i)) / window
        during = daily_history[i].get("stars_new", 0)
        after = sum(daily_history[j].get("stars_new", 0)
                    for j in range(i + 1, min(i + window + 1, len(daily_history)))) / window

        if during > before * 5 and after < during * 0.3:
            pulses.append({
                "date": daily_history[i]["date"],
                "peak_stars": during,
                "before_avg": round(before, 1),
                "after_avg": round(after, 1),
                "decay_ratio": round(after / during, 2) if during else 0,
            })

    return pulses


def detect_synchronized_growth(all_repos_data):
    """检测多个项目同步增长（外部事件驱动）"""
    # 收集所有日期的增长
    date_growth = defaultdict(list)

    for repo_name, data in all_repos_data.items():
        for day in data.get("daily_history", []):
            if day.get("stars_new", 0) > 0:
                date_growth[day["date"]].append({
                    "repo": repo_name,
                    "stars_new": day["stars_new"],
                })

    # 找出多个项目同时增长的日期
    sync_events = []
    for date, repos in sorted(date_growth.items()):
        if len(repos) >= 3:  # 3+ 项目同时增长
            total = sum(r["stars_new"] for r in repos)
            sync_events.append({
                "date": date,
                "repos_count": len(repos),
                "total_new_stars": total,
                "repos": repos,
            })

    return sorted(sync_events, key=lambda x: x["repos_count"], reverse=True)[:20]


def main():
    parser = argparse.ArgumentParser(description="Anomaly Detector")
    parser.add_argument("--input", default="../storage/daily_snapshots",
                        help="Input directory with snapshot JSONs")
    parser.add_argument("--output", default="../storage/analysis",
                        help="Output directory")
    parser.add_argument("--repo", help="Specific repo to analyze")
    args = parser.parse_args()

    input_dir = Path(args.input)
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    all_repos = {}
    star_files = sorted(input_dir.glob("*.json")) if input_dir.exists() else []
    # 排除非 star 数据文件
    star_files = [f for f in star_files
                  if not f.stem.endswith("_forks")
                  and not f.stem.endswith("_issues")
                  and not f.stem.endswith("_events")]

    for star_file in star_files:
        data = load_json(star_file)
        if not data:
            continue

        repo_name = data.get("repo", star_file.stem)
        if args.repo and repo_name != args.repo:
            continue

        all_repos[repo_name] = data
        daily = data.get("daily_history", [])
        if not daily:
            continue

        print(f"\n{'='*60}")
        print(f"Anomaly Analysis: {repo_name}")
        print(f"{'='*60}")

        # 日级异常
        daily_anomalies = detect_daily_anomalies(daily)
        print(f"  Daily spikes: {len(daily_anomalies)}")
        for a in daily_anomalies[:5]:
            print(f"    [{a['date']}] +{a['stars_new']} ({a['ratio']}x avg, {a['severity']})")

        # 周末异常
        weekend = detect_weekend_anomalies(daily)
        if weekend:
            print(f"  Weekend pattern: {weekend['note']}")
            print(f"    Weekday avg: {weekend['weekday_avg']}, Weekend avg: {weekend['weekend_avg']}")

        # 脉冲检测
        pulses = detect_pulse_pattern(daily)
        print(f"  Pulse events: {len(pulses)}")
        for p in pulses[:3]:
            print(f"    [{p['date']}] Peak {p['peak_stars']}, decay to {p['after_avg']} ({p['decay_ratio']})")

        # 保存
        result = {
            "repo": repo_name,
            "analyzed_at": datetime.utcnow().isoformat() + "Z",
            "daily_anomalies": daily_anomalies,
            "weekend_analysis": weekend,
            "pulse_events": pulses,
        }

        safe_name = repo_name.replace("/", "_")
        output_file = output_dir / f"{safe_name}_anomalies.json"
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(result, f, indent=2, ensure_ascii=False)
        print(f"  Saved: {output_file}")

    # 同步增长检测
    if len(all_repos) >= 3:
        print(f"\n{'='*60}")
        print("Synchronized Growth Detection")
        print(f"{'='*60}")
        sync = detect_synchronized_growth(all_repos)
        print(f"  Found {len(sync)} synchronized dates")
        for s in sync[:5]:
            repos_str = ", ".join(r["repo"].split("/")[-1] for r in s["repos"])
            print(f"    [{s['date']}] {s['repos_count']} repos, {s['total_new_stars']} total stars: {repos_str}")

        sync_file = output_dir / "synchronized_growth.json"
        with open(sync_file, "w", encoding="utf-8") as f:
            json.dump(sync, f, indent=2, ensure_ascii=False)
        print(f"  Saved: {sync_file}")


if __name__ == "__main__":
    main()
