#!/usr/bin/env python3
"""
Anomaly Detector — Suspicious Growth Pattern Detection

Detects:
  1. Burst growth: >10K stars gained in <7 days
  2. Low fork quality: <20% forks with commits
  3. High star/contributor ratio: >150:1
  4. Issue spam: >50% template/duplicate issues
  5. Sudden activity drop: >80% decline in 30 days
  6. Bot-like star patterns: uniform star timestamps
"""

import argparse
import json
import os
import sys
from datetime import datetime, timedelta
from pathlib import Path


def load_json(path: str):
    if not os.path.exists(path):
        return None
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def parse_date(s: str) -> datetime:
    try:
        return datetime.fromisoformat(s.replace("Z", "+00:00")).replace(tzinfo=None)
    except (ValueError, AttributeError):
        return datetime(2000, 1, 1)


def load_all_data(storage_dir: str):
    """Load all project data from storage."""
    data = {}
    # Try daily_snapshots first
    snapshots_dir = os.path.join(storage_dir, "daily_snapshots")
    if os.path.isdir(snapshots_dir):
        for date_dir in sorted(os.listdir(snapshots_dir)):
            date_path = os.path.join(snapshots_dir, date_dir)
            if not os.path.isdir(date_path):
                continue
            for fname in os.listdir(date_path):
                if not fname.endswith(".json"):
                    continue
                proj = fname.replace(".json", "")
                entry = load_json(os.path.join(date_path, fname))
                if entry:
                    data.setdefault(proj, []).append({"date": date_dir, "data": entry})

    # Fallback: flat files in storage_dir
    if not data:
        for fname in os.listdir(storage_dir):
            if fname.endswith(".json"):
                proj = fname.replace(".json", "")
                entry = load_json(os.path.join(storage_dir, fname))
                if entry:
                    data[proj] = [{"date": "latest", "data": entry}]

    return data


def detect_burst_growth(star_history: list, threshold_days: int = 7,
                        threshold_stars: int = 10000) -> dict:
    """Detect if a project gained threshold_stars in threshold_days."""
    if not star_history or len(star_history) < 2:
        return {"detected": False, "detail": "insufficient star history"}

    timestamps = sorted([parse_date(s.get("starred_at", "")) for s in star_history])
    for i in range(len(timestamps)):
        window_end = timestamps[i] + timedelta(days=threshold_days)
        stars_in_window = sum(1 for t in timestamps[i:] if t <= window_end)
        if stars_in_window >= threshold_stars:
            return {
                "detected": True,
                "detail": f"{stars_in_window} stars in {threshold_days} days",
                "start_date": timestamps[i].isoformat(),
            }
    return {"detected": False, "detail": "growth within normal range"}


def detect_low_fork_quality(forks: list, threshold: float = 0.2) -> dict:
    """Detect if fork quality is below threshold."""
    if not forks:
        return {"detected": False, "detail": "no fork data"}
    with_commits = sum(1 for f in forks if f.get("commits", 0) > 0)
    ratio = with_commits / len(forks)
    return {
        "detected": ratio < threshold,
        "detail": f"fork_quality={ratio:.2%} (threshold={threshold:.0%})",
        "fork_quality": round(ratio, 3),
    }


def detect_high_star_contributor_ratio(stars: int, contributors: int,
                                        threshold: int = 150) -> dict:
    """Detect abnormally high star/contributor ratio."""
    if contributors <= 0:
        return {"detected": True, "detail": f"ratio=inf (0 contributors)", "ratio": None}
    ratio = stars / contributors
    return {
        "detected": ratio > threshold,
        "detail": f"ratio={ratio:.0f}:1 (threshold={threshold}:1)",
        "ratio": round(ratio, 1),
    }


def detect_issue_spam(issues: list, threshold: float = 0.5) -> dict:
    """Detect if >threshold of issues are spam/template."""
    if not issues:
        return {"detected": False, "detail": "no issue data"}
    spam_labels = {"question", "duplicate", "invalid", "wontfix", "spam"}
    spam_count = 0
    for issue in issues:
        labels = {l.get("name", "").lower() for l in issue.get("labels", [])}
        if labels & spam_labels:
            spam_count += 1
    ratio = spam_count / len(issues)
    return {
        "detected": ratio > threshold,
        "detail": f"spam_ratio={ratio:.2%} (threshold={threshold:.0%})",
        "spam_ratio": round(ratio, 3),
    }


def detect_activity_drop(records: list, threshold: float = 0.8) -> dict:
    """Detect >threshold decline in activity over last 30 days."""
    if len(records) < 2:
        return {"detected": False, "detail": "insufficient history"}

    # Compare recent activity vs previous
    def activity_score(rec):
        d = rec.get("data", {})
        return d.get("commit_count", 0) + d.get("issue_count", 0) + d.get("pr_count", 0)

    recent_score = activity_score(records[-1])
    baseline_score = max(activity_score(r) for r in records[:-1])

    if baseline_score <= 0:
        return {"detected": False, "detail": "zero baseline activity"}

    drop = 1.0 - (recent_score / baseline_score)
    return {
        "detected": drop > threshold,
        "detail": f"drop={drop:.0%} (threshold={threshold:.0%})",
        "drop_percent": round(drop, 3),
    }


def detect_bot_stars(star_history: list) -> dict:
    """Detect bot-like uniform star timestamp patterns."""
    if not star_history or len(star_history) < 100:
        return {"detected": False, "detail": "insufficient stars for pattern analysis"}

    timestamps = sorted([parse_date(s.get("starred_at", "")) for s in star_history])
    # Check intervals between consecutive stars
    intervals = []
    for i in range(1, min(len(timestamps), 1000)):
        delta = (timestamps[i] - timestamps[i-1]).total_seconds()
        intervals.append(delta)

    if not intervals:
        return {"detected": False, "detail": "no intervals"}

    # If std deviation of intervals is very low, stars are suspiciously uniform
    mean_interval = sum(intervals) / len(intervals)
    variance = sum((x - mean_interval) ** 2 for x in intervals) / len(intervals)
    std_dev = variance ** 0.5
    cv = std_dev / mean_interval if mean_interval > 0 else 0  # coefficient of variation

    # Very low CV = bot-like pattern
    return {
        "detected": cv < 0.1 and mean_interval < 3600,
        "detail": f"cv={cv:.3f}, mean_interval={mean_interval:.0f}s",
        "coefficient_of_variation": round(cv, 4),
    }


def analyze_project(project_name: str, records: list) -> dict:
    """Run all anomaly detectors on one project."""
    if not records:
        return {"project": project_name, "anomalies": [], "anomaly_count": 0,
                "status": "no_data"}

    latest = records[-1]["data"]
    stars = latest.get("stars", latest.get("stargazers_count", 0))
    contributors = latest.get("contributors", [])
    contributors_count = latest.get("contributors_count", len(contributors))
    forks = latest.get("forks", [])
    issues = latest.get("issues", [])
    prs = latest.get("pull_requests", [])
    star_history = latest.get("star_history", [])

    anomalies = []

    checks = [
        ("burst_growth", detect_burst_growth(star_history)),
        ("low_fork_quality", detect_low_fork_quality(forks)),
        ("high_star_contributor_ratio",
         detect_high_star_contributor_ratio(stars, contributors_count)),
        ("issue_spam", detect_issue_spam(issues)),
        ("activity_drop", detect_activity_drop(records)),
        ("bot_like_stars", detect_bot_stars(star_history)),
    ]

    for check_name, result in checks:
        anomalies.append({
            "check": check_name,
            **result,
        })

    detected = [a for a in anomalies if a.get("detected")]

    return {
        "project": project_name,
        "stars": stars,
        "anomaly_count": len(detected),
        "anomalies": anomalies,
        "status": "flagged" if detected else "clean",
    }


def run_anomaly_detection(input_dir: str, output_dir: str):
    """Main entry: detect anomalies across all projects."""
    os.makedirs(output_dir, exist_ok=True)

    all_data = load_all_data(input_dir)

    results = []
    for proj_name, records in sorted(all_data.items()):
        result = analyze_project(proj_name, records)
        results.append(result)

    # Sort by anomaly count descending
    results.sort(key=lambda r: r.get("anomaly_count", 0), reverse=True)

    flagged = [r for r in results if r["status"] == "flagged"]

    output = {
        "generated_at": datetime.utcnow().isoformat() + "Z",
        "total_projects": len(results),
        "flagged_projects": len(flagged),
        "results": results,
    }

    out_path = os.path.join(output_dir, "anomaly_report.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    print(f"[anomaly_detector] Checked {len(results)} projects, "
          f"{len(flagged)} flagged → {out_path}")

    if flagged:
        print("\n=== Flagged Projects ===")
        for r in flagged:
            checks = [a["check"] for a in r["anomalies"] if a.get("detected")]
            print(f"  ⚠ {r['project']:<25s} anomalies={r['anomaly_count']} "
                  f"({', '.join(checks)})")

    return output


def main():
    parser = argparse.ArgumentParser(description="Anomaly Detector")
    parser.add_argument("--input", default="./storage",
                        help="Input storage directory")
    parser.add_argument("--output", default="./storage/analysis",
                        help="Output directory for anomaly report")
    args = parser.parse_args()

    run_anomaly_detection(args.input, args.output)


if __name__ == "__main__":
    main()
