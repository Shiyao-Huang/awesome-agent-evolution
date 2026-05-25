#!/usr/bin/env python3
"""
Daily Report Generator - 每日数据报告生成

汇总所有采集数据，生成日级/周级/月级报告

用法:
  python daily_report.py --input ../storage/ --output ../storage/analysis/
  python daily_report.py --input ../storage/ --format markdown
"""

import argparse
import json
import os
import sys
from datetime import datetime
from pathlib import Path


def load_json(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return None


def generate_daily_digest(storage_dir, output_dir, report_date=None):
    """生成每日摘要报告"""
    snapshots_dir = storage_dir / "daily_snapshots"
    propagation_dir = storage_dir / "propagation"

    if not report_date:
        report_date = datetime.utcnow().strftime("%Y-%m-%d")

    repos = {}

    # 收集 star 数据
    if snapshots_dir.exists():
        for f in snapshots_dir.glob("*.json"):
            if any(f.stem.endswith(s) for s in ["_forks", "_issues", "_events"]):
                continue
            data = load_json(f)
            if data:
                repo = data.get("repo", f.stem)
                meta = data.get("metadata", {})
                summary = data.get("summary", {})
                repos[repo] = {
                    "stars": meta.get("stars", 0),
                    "forks": meta.get("forks", 0),
                    "language": meta.get("language"),
                    "days_to_1k": summary.get("days_to_1k"),
                    "days_to_10k": summary.get("days_to_10k"),
                    "days_to_100k": summary.get("days_to_100k"),
                    "peak_day": summary.get("peak_day", {}).get("date") if summary.get("peak_day") else None,
                    "collected_at": data.get("collected_at"),
                }

    # 收集 fork 数据
    if snapshots_dir.exists():
        for f in snapshots_dir.glob("*_forks.json"):
            data = load_json(f)
            if data:
                repo = data.get("repo", "")
                if repo in repos:
                    q = data.get("fork_quality", {})
                    repos[repo]["fork_push_pct"] = q.get("forks_with_push_pct")
                    repos[repo]["fork_active_30d_pct"] = q.get("forks_active_30d_pct")

    # 收集 issue 数据
    if snapshots_dir.exists():
        for f in snapshots_dir.glob("*_issues.json"):
            data = load_json(f)
            if data:
                repo = data.get("repo", "")
                if repo in repos:
                    iq = data.get("issue_quality", {})
                    repos[repo]["issue_comment_rate"] = iq.get("comment_rate")
                    repos[repo]["pr_merge_rate"] = data.get("pr_stats", {}).get("pr_merge_rate")

    # 收集 HN 数据
    if propagation_dir.exists():
        for f in propagation_dir.glob("*_hn.json"):
            data = load_json(f)
            if data:
                repo = data.get("repo", "")
                if repo in repos:
                    s = data.get("summary", {})
                    repos[repo]["hn_total_mentions"] = data.get("total_mentions", 0)
                    repos[repo]["hn_total_points"] = s.get("total_points_all") if s else None

    # 排名
    ranked_by_stars = sorted(repos.items(), key=lambda x: x[1].get("stars", 0), reverse=True)

    # 生成报告
    report = {
        "report_date": report_date,
        "generated_at": datetime.utcnow().isoformat() + "Z",
        "total_projects": len(repos),
        "top_by_stars": [(r, d.get("stars")) for r, d in ranked_by_stars[:20]],
        "projects": repos,
    }

    return report


def generate_markdown_report(report):
    """生成 Markdown 报告"""
    lines = [
        f"# 传播链数据引擎 — 每日报告",
        f"",
        f"> **日期**: {report['report_date']}",
        f"> **项目数**: {report['total_projects']}",
        f"> **生成时间**: {report['generated_at']}",
        f"",
        f"## Star 排名 Top 20",
        f"",
        f"| # | 项目 | Stars | Forks | Fork质量 | PR合并率 | HN提及 |",
        f"|---|------|-------|-------|---------|---------|--------|",
    ]

    for i, (repo, data) in enumerate(report.get("projects", {}).items(), 1):
        if i > 20:
            break
        stars = f"{data.get('stars', 0):,}" if data.get('stars') else "-"
        forks = f"{data.get('forks', 0):,}" if data.get('forks') else "-"
        fork_q = f"{data.get('fork_push_pct', '-')}%" if data.get('fork_push_pct') is not None else "-"
        pr_rate = f"{data.get('pr_merge_rate', '-')}%" if data.get('pr_merge_rate') is not None else "-"
        hn = str(data.get('hn_total_mentions', '-'))
        lines.append(f"| {i} | {repo} | {stars} | {forks} | {fork_q} | {pr_rate} | {hn} |")

    lines.extend([
        "",
        "## 里程碑分析",
        "",
        "| 项目 | →1K天 | →10K天 | →100K天 | 峰值日 |",
        "|------|-------|--------|---------|--------|",
    ])

    for repo, data in report.get("projects", {}).items():
        d1k = str(data.get("days_to_1k", "-"))
        d10k = str(data.get("days_to_10k", "-"))
        d100k = str(data.get("days_to_100k", "-"))
        peak = data.get("peak_day", "-")
        if any(v != "-" for v in [d1k, d10k, d100k]):
            lines.append(f"| {repo} | {d1k} | {d10k} | {d100k} | {peak} |")

    lines.extend([
        "",
        "---",
        f"*传播链数据引擎 · {report['report_date']}*",
    ])

    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description="Daily Report Generator")
    parser.add_argument("--input", default="../storage", help="Storage directory")
    parser.add_argument("--output", default="../storage/analysis", help="Output directory")
    parser.add_argument("--date", help="Report date (YYYY-MM-DD)")
    parser.add_argument("--format", choices=["json", "markdown"], default="markdown")
    args = parser.parse_args()

    storage_dir = Path(args.input)
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    report = generate_daily_digest(storage_dir, output_dir, args.date)

    if args.format == "markdown":
        md = generate_markdown_report(report)
        report_file = output_dir / f"daily_report_{report['report_date']}.md"
        with open(report_file, "w", encoding="utf-8") as f:
            f.write(md)
        print(f"Report saved: {report_file}")
    else:
        report_file = output_dir / f"daily_report_{report['report_date']}.json"
        with open(report_file, "w", encoding="utf-8") as f:
            json.dump(report, f, indent=2, ensure_ascii=False)
        print(f"Report saved: {report_file}")


if __name__ == "__main__":
    main()
