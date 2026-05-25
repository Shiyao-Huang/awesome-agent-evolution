#!/usr/bin/env python3
"""
Hype Scorer - 炒作指数评分引擎

基于 5 维度评分模型，计算项目的「炒作指数」：
1. Stars/Contributor Ratio
2. Fork Quality（有 push 的 fork 占比）
3. Issue Quality（有评论/标签的 issue 占比）
4. PR Merge Rate
5. Star Growth Velocity（0→1K 天数）

用法:
  python hype_scorer.py --input ../storage/daily_snapshots/ --output ../storage/analysis/
  python hype_scorer.py --repo Significant-Gravitas/AutoGPT --input ../storage/
"""

import argparse
import json
import os
import sys
from datetime import datetime
from pathlib import Path


def load_json(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f)


def compute_stars_contributor_score(stars, contributors):
    """Stars/Contributor Ratio 评分"""
    if not contributors or contributors == 0:
        return 50  # 无数据，中性

    ratio = stars / contributors

    if ratio < 50:
        return 100  # 极健康
    elif ratio < 100:
        return 80
    elif ratio < 150:
        return 60
    elif ratio < 200:
        return 40
    elif ratio < 300:
        return 20
    else:
        return 5  # 极度可疑


def compute_fork_quality_score(fork_quality):
    """Fork 质量评分"""
    if not fork_quality:
        return 50

    push_pct = fork_quality.get("forks_with_push_pct", 0)

    if push_pct > 40:
        return 90
    elif push_pct > 25:
        return 70
    elif push_pct > 15:
        return 50
    elif push_pct > 5:
        return 30
    else:
        return 10  # 几乎全是空 fork


def compute_issue_quality_score(issue_quality):
    """Issue 质量评分"""
    if not issue_quality:
        return 50

    comment_rate = issue_quality.get("comment_rate", 0)
    label_rate = issue_quality.get("label_rate", 0)
    combined = (comment_rate * 0.6 + label_rate * 0.4)

    if combined > 60:
        return 90
    elif combined > 40:
        return 70
    elif combined > 25:
        return 50
    elif combined > 10:
        return 30
    else:
        return 10


def compute_pr_merge_score(pr_stats):
    """PR 合并率评分"""
    if not pr_stats:
        return 50

    merge_rate = pr_stats.get("pr_merge_rate", 0)

    if merge_rate > 80:
        return 90
    elif merge_rate > 60:
        return 75
    elif merge_rate > 40:
        return 55
    elif merge_rate > 20:
        return 35
    else:
        return 15


def compute_growth_velocity_score(summary):
    """Star 增长速度评分"""
    if not summary:
        return 50

    days_to_1k = summary.get("days_to_1k")
    days_to_10k = summary.get("days_to_10k")

    score = 50  # 基准

    if days_to_1k is not None:
        if days_to_1k > 90:
            score += 20  # 慢增长 = 健康
        elif days_to_1k > 30:
            score += 10
        elif days_to_1k > 7:
            score -= 5
        else:
            score -= 20  # 爆发式 = 炒作嫌疑

    if days_to_10k is not None:
        if days_to_10k > 180:
            score += 15
        elif days_to_10k > 60:
            score += 5
        elif days_to_10k > 14:
            score -= 10
        else:
            score -= 25

    return max(0, min(100, score))


def classify_growth_pattern(star_history, summary):
    """分类增长模式"""
    if not star_history or len(star_history) < 7:
        return "insufficient_data"

    # 取前 30 天的新增 star
    first_30 = star_history[:30]
    total_first_30 = sum(d.get("stars_new", 0) for d in first_30)

    # 取 30-60 天
    next_30 = star_history[30:60] if len(star_history) > 30 else []
    total_next_30 = sum(d.get("stars_new", 0) for d in next_30)

    if total_first_30 == 0:
        return "dormant"

    # 爆发比：前 30 天 vs 后 30 天
    if total_next_30 > 0:
        burst_ratio = total_first_30 / total_next_30
    else:
        burst_ratio = float("inf")

    days_to_1k = summary.get("days_to_1k") if summary else None

    if days_to_1k and days_to_1k < 7:
        return "viral"      # 爆发式
    elif burst_ratio > 5:
        return "viral"       # 前 30 天远超后续
    elif burst_ratio > 2:
        return "media_spike"  # 媒体驱动
    elif total_first_30 < 500 and total_next_30 > total_first_30 * 0.5:
        return "organic"    # 自然增长
    else:
        return "steady"     # 稳健增长


def score_repo(star_data, fork_data=None, issue_data=None, event_data=None):
    """对单个仓库进行综合评分"""
    scores = {}

    # 1. Stars/Contributor
    metadata = star_data.get("metadata", {}) if star_data else {}
    stars = metadata.get("stars", 0)
    contributors = star_data.get("contributors_count", 0) if star_data else 0
    scores["stars_contributor"] = compute_stars_contributor_score(stars, contributors)
    scores["stars_contributor_raw"] = round(stars / contributors, 1) if contributors else None

    # 2. Fork Quality
    fork_quality = fork_data.get("fork_quality", {}) if fork_data else {}
    scores["fork_quality"] = compute_fork_quality_score(fork_quality)

    # 3. Issue Quality
    issue_quality = issue_data.get("issue_quality", {}) if issue_data else {}
    scores["issue_quality"] = compute_issue_quality_score(issue_quality)

    # 4. PR Merge Rate
    pr_stats = issue_data.get("pr_stats", {}) if issue_data else {}
    scores["pr_merge_rate"] = compute_pr_merge_score(pr_stats)

    # 5. Growth Velocity
    summary = star_data.get("summary", {}) if star_data else {}
    scores["growth_velocity"] = compute_growth_velocity_score(summary)

    # 加权综合分
    weights = {
        "stars_contributor": 0.25,
        "fork_quality": 0.20,
        "issue_quality": 0.20,
        "pr_merge_rate": 0.15,
        "growth_velocity": 0.20,
    }

    composite = sum(scores[k] * weights[k] for k in weights)
    scores["composite"] = round(composite, 1)

    # 增长模式分类
    daily_history = star_data.get("daily_history", []) if star_data else []
    growth_pattern = classify_growth_pattern(daily_history, summary)
    scores["growth_pattern"] = growth_pattern

    # 判定
    if composite >= 65:
        scores["verdict"] = "organic"
    elif composite >= 45:
        scores["verdict"] = "mixed"
    else:
        scores["verdict"] = "hype_suspected"

    # 炒作指数（反转：越低越健康）
    scores["hype_index"] = round(100 - composite, 1)

    return scores


def generate_report(repo_name, scores, star_data=None):
    """生成可读报告"""
    verdict_emoji = {
        "organic": "🟢",
        "mixed": "🟡",
        "hype_suspected": "🔴",
    }

    pattern_desc = {
        "viral": "爆发式传播（疑似炒作/媒体驱动）",
        "media_spike": "媒体驱动增长",
        "organic": "自然有机增长",
        "steady": "稳健持续增长",
        "dormant": "沉寂/数据不足",
        "insufficient_data": "数据不足",
    }

    report = f"""
## {repo_name}

**综合评分**: {scores['composite']}/100 {verdict_emoji.get(scores['verdict'], '')}
**炒作指数**: {scores['hype_index']}/100
**增长模式**: {pattern_desc.get(scores['growth_pattern'], scores['growth_pattern'])}
**判定**: {scores['verdict'].upper()}

### 分项评分

| 维度 | 评分 | 原始值 |
|------|------|--------|
| Stars/Contributor | {scores['stars_contributor']}/100 | {scores.get('stars_contributor_raw', 'N/A')} |
| Fork 质量 | {scores['fork_quality']}/100 | - |
| Issue 质量 | {scores['issue_quality']}/100 | - |
| PR 合并率 | {scores['pr_merge_rate']}/100 | - |
| 增长速度 | {scores['growth_velocity']}/100 | - |
"""
    return report


def main():
    parser = argparse.ArgumentParser(description="Hype Scorer - 项目炒作指数评分")
    parser.add_argument("--input", default="../storage/daily_snapshots",
                        help="Input directory with snapshot JSONs")
    parser.add_argument("--output", default="../storage/analysis",
                        help="Output directory")
    parser.add_argument("--repo", help="Specific repo to score (owner/repo)")
    args = parser.parse_args()

    input_dir = Path(args.input)
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    results = {}

    # 收集所有仓库的数据
    star_files = sorted(input_dir.glob("*_stars.json")) if input_dir.exists() else []
    fork_files = {f.name.replace("_forks.json", ""): f
                  for f in input_dir.glob("*_forks.json")} if input_dir.exists() else {}
    issue_files = {f.name.replace("_issues.json", ""): f
                   for f in input_dir.glob("*_issues.json")} if input_dir.exists() else {}

    for star_file in star_files:
        repo_key = star_file.stem.replace("_stars", "")
        if args.repo:
            expected = args.repo.replace("/", "_")
            if repo_key != expected:
                continue

        star_data = load_json(star_file)

        fork_data = None
        if repo_key in fork_files:
            fork_data = load_json(fork_files[repo_key])

        issue_data = None
        if repo_key in issue_files:
            issue_data = load_json(issue_files[repo_key])

        repo_name = star_data.get("repo", repo_key)
        scores = score_repo(star_data, fork_data, issue_data)

        results[repo_name] = scores

        report = generate_report(repo_name, scores, star_data)
        print(report)

    # 保存汇总
    output_file = output_dir / "hype_scores.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"\nSaved scores: {output_file}")

    # 排名报告
    ranked = sorted(results.items(), key=lambda x: x[1]["composite"], reverse=True)
    report_path = output_dir / "ranking_report.md"
    with open(report_path, "w", encoding="utf-8") as f:
        f.write("# 项目质量排名\n\n")
        f.write(f"> Generated: {datetime.utcnow().isoformat()}Z\n\n")
        f.write("| # | 项目 | 综合分 | 炒作指数 | 增长模式 | 判定 |\n")
        f.write("|---|------|--------|---------|---------|------|\n")
        for i, (name, s) in enumerate(ranked, 1):
            f.write(f"| {i} | {name} | {s['composite']} | {s['hype_index']} "
                    f"| {s['growth_pattern']} | {s['verdict']} |\n")

    print(f"Saved ranking: {report_path}")


if __name__ == "__main__":
    main()
