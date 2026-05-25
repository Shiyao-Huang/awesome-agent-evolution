#!/usr/bin/env python3
"""
Data Engine Orchestrator - 一键运行所有采集器和分析引擎

用法:
  python run_all.py --token $GITHUB_TOKEN                  # 全量采集
  python run_all.py --token $GITHUB_TOKEN --stars-only     # 仅采集 Star 数据
  python run_all.py --token $GITHUB_TOKEN --priority critical  # 仅关键项目
  python run_all.py --analyze                               # 仅运行分析
  python run_all.py --config ../config/projects.json --token $GITHUB_TOKEN
"""

import argparse
import json
import os
import sys
import time
import subprocess
from datetime import datetime
from pathlib import Path


COLLECTORS_DIR = Path(__file__).parent / "collectors"
ANALYSIS_DIR = Path(__file__).parent / "analysis"
CONFIG_PATH = Path(__file__).parent / "config" / "projects.json"
STORAGE_DIR = Path(__file__).parent / "storage"


def run_collector(script_name, args_list, description=""):
    """运行单个采集器"""
    script_path = COLLECTORS_DIR / script_name
    if not script_path.exists():
        print(f"  SKIP: {script_name} not found")
        return False

    cmd = [sys.executable, str(script_path)] + args_list
    print(f"\n{'='*60}")
    print(f"Running: {description or script_name}")
    print(f"Command: {' '.join(cmd)}")
    print(f"{'='*60}")

    try:
        result = subprocess.run(cmd, timeout=3600)  # 1h timeout per collector
        if result.returncode == 0:
            print(f"  ✓ {script_name} completed")
            return True
        else:
            print(f"  ✗ {script_name} failed (exit code: {result.returncode})")
            return False
    except subprocess.TimeoutExpired:
        print(f"  ✗ {script_name} timed out")
        return False
    except Exception as e:
        print(f"  ✗ {script_name} error: {e}")
        return False


def run_analyzer(script_name, args_list, description=""):
    """运行单个分析器"""
    script_path = ANALYSIS_DIR / script_name
    if not script_path.exists():
        print(f"  SKIP: {script_name} not found")
        return False

    cmd = [sys.executable, str(script_path)] + args_list
    print(f"\nRunning: {description or script_name}")

    try:
        result = subprocess.run(cmd, timeout=1800)
        return result.returncode == 0
    except Exception as e:
        print(f"  ✗ Error: {e}")
        return False


def filter_projects_by_priority(config_path, priority=None):
    """按优先级过滤项目"""
    with open(config_path) as f:
        config = json.load(f)

    projects = config.get("target_projects", [])
    if priority:
        if priority == "critical":
            projects = [p for p in projects if p.get("priority") == "critical"]
        elif priority == "high":
            projects = [p for p in projects if p.get("priority") in ["critical", "high"]]

    return {"target_projects": projects, "academic_papers": config.get("academic_papers", [])}


def main():
    parser = argparse.ArgumentParser(description="Data Engine Orchestrator")
    parser.add_argument("--token", help="GitHub PAT token")
    parser.add_argument("--config", default=str(CONFIG_PATH), help="Config path")
    parser.add_argument("--output", default=str(STORAGE_DIR), help="Output directory")
    parser.add_argument("--priority", choices=["critical", "high", "all"], default="all")
    parser.add_argument("--stars-only", action="store_true", help="Only collect star data")
    parser.add_argument("--forks-only", action="store_true", help="Only collect fork data")
    parser.add_argument("--social-only", action="store_true", help="Only collect social media data")
    parser.add_argument("--academic-only", action="store_true", help="Only collect academic data")
    parser.add_argument("--analyze", action="store_true", help="Only run analysis")
    parser.add_argument("--max-pages", type=int, help="Max pages per API call")
    args = parser.parse_args()

    token = args.token or os.environ.get("GITHUB_TOKEN")

    # 确保输出目录存在
    for subdir in ["daily_snapshots", "events", "propagation", "analysis"]:
        (Path(args.output) / subdir).mkdir(parents=True, exist_ok=True)

    start_time = time.time()
    results = {"started_at": datetime.utcnow().isoformat() + "Z", "collectors": {}}

    # 准备过滤后的配置
    priority = args.priority if args.priority != "all" else None
    filtered = filter_projects_by_priority(args.config, priority)
    filtered_config = Path(args.output) / "_filtered_config.json"
    with open(filtered_config, "w") as f:
        json.dump(filtered, f, indent=2)

    project_count = len(filtered["target_projects"])
    print(f"\n🚀 Data Engine starting: {project_count} projects, priority={args.priority}")

    if not args.analyze:
        # === 采集阶段 ===

        # 1. GitHub Stars
        if not args.forks_only and not args.social_only and not args.academic_only:
            r = run_collector("github_stars.py", [
                "--config", str(filtered_config), "--all",
                "--token", token or "",
                "--output", args.output,
            ] + (["--max-pages", str(args.max_pages)] if args.max_pages else []),
                "GitHub Star History")
            results["collectors"]["github_stars"] = r

        if args.stars_only:
            print("\nStars-only mode. Skipping other collectors.")

        if not args.stars_only:
            # 2. GitHub Forks
            if not args.social_only and not args.academic_only:
                r = run_collector("github_forks.py", [
                    "--config", str(filtered_config), "--all",
                    "--token", token or "",
                    "--output", args.output,
                ] + (["--max-pages", str(args.max_pages)] if args.max_pages else []),
                    "GitHub Fork History")
                results["collectors"]["github_forks"] = r

            # 3. GitHub Issues/PRs
            if not args.social_only and not args.academic_only:
                r = run_collector("github_issues.py", [
                    "--config", str(filtered_config), "--all",
                    "--token", token or "",
                    "--output", args.output,
                ] + (["--max-pages", str(args.max_pages)] if args.max_pages else []),
                    "GitHub Issues/PR Timeline")
                results["collectors"]["github_issues"] = r

            # 4. GitHub Events
            if not args.social_only and not args.academic_only:
                r = run_collector("github_events.py", [
                    "--config", str(filtered_config), "--all",
                    "--token", token or "",
                    "--output", args.output,
                ], "GitHub Events Stream")
                results["collectors"]["github_events"] = r

            # 5. HN Search
            if not args.academic_only:
                r = run_collector("hn_search.py", [
                    "--config", str(filtered_config), "--all",
                    "--output", args.output,
                ], "Hacker News Discussion")
                results["collectors"]["hn_search"] = r

            # 6. Reddit Search
            if not args.academic_only:
                r = run_collector("reddit_search.py", [
                    "--config", str(filtered_config), "--all",
                    "--output", args.output,
                ], "Reddit Discussion")
                results["collectors"]["reddit_search"] = r

            # 7. Semantic Scholar
            if not args.social_only:
                r = run_collector("semantic_scholar.py", [
                    "--config", str(filtered_config), "--all",
                    "--output", args.output,
                ], "Semantic Scholar Citations")
                results["collectors"]["semantic_scholar"] = r

            # 8. Chinese Media
            if not args.academic_only:
                r = run_collector("chinese_media.py", [
                    "--config", str(filtered_config), "--all",
                    "--output", args.output,
                ], "Chinese Media Tracking")
                results["collectors"]["chinese_media"] = r

    # === 分析阶段 ===
    print(f"\n{'='*60}")
    print("Running Analysis Pipeline")
    print(f"{'='*60}")

    # Hype Scorer
    r = run_analyzer("hype_scorer.py", [
        "--input", str(Path(args.output) / "daily_snapshots"),
        "--output", str(Path(args.output) / "analysis"),
    ], "Hype Scoring")
    results["collectors"]["hype_scorer"] = r

    # Anomaly Detector
    r = run_analyzer("anomaly_detector.py", [
        "--input", str(Path(args.output) / "daily_snapshots"),
        "--output", str(Path(args.output) / "analysis"),
    ], "Anomaly Detection")
    results["collectors"]["anomaly_detector"] = r

    # Propagation Rebuilder
    r = run_analyzer("propagation_rebuilder.py", [
        "--all",
        "--input", args.output,
        "--output", str(Path(args.output) / "propagation"),
    ], "Propagation Chain Rebuild")
    results["collectors"]["propagation_rebuilder"] = r

    # Daily Report
    r = run_analyzer("daily_report.py", [
        "--input", args.output,
        "--output", str(Path(args.output) / "analysis"),
    ], "Daily Report")
    results["collectors"]["daily_report"] = r

    # 汇总
    elapsed = time.time() - start_time
    results["completed_at"] = datetime.utcnow().isoformat() + "Z"
    results["elapsed_seconds"] = round(elapsed, 1)
    results["success_count"] = sum(1 for v in results["collectors"].values() if v)
    results["failure_count"] = sum(1 for v in results["collectors"].values() if not v)

    print(f"\n{'='*60}")
    print(f"Data Engine Complete")
    print(f"  Time: {elapsed:.0f}s")
    print(f"  Success: {results['success_count']}, Failed: {results['failure_count']}")
    print(f"{'='*60}")

    # 保存运行日志
    log_path = Path(args.output) / "analysis" / f"run_{datetime.utcnow().strftime('%Y%m%d_%H%M%S')}.json"
    with open(log_path, "w") as f:
        json.dump(results, f, indent=2)
    print(f"Run log: {log_path}")


if __name__ == "__main__":
    main()
