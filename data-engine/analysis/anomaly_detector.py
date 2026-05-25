#!/usr/bin/env python3
"""
Anomaly Detector — Suspicious Growth Pattern Detection

Detects anomalies from cross-platform data:
  1. HN burst: many submissions with high points in short time
  2. Low engagement ratio: many hits but few meaningful interactions
  3. Single author dominance: one HN author submitting all posts
  4. Duplicate content: same URL/title across multiple submissions
  5. Bot-like timing: submissions at exact intervals
  6. GitHub star/contributor ratio anomalies (when data available)
"""

import argparse
import json
import os
from collections import Counter
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


def discover_projects(storage_dir: str) -> dict:
    """Discover all projects from storage subdirectories."""
    projects = {}
    for subdir in os.listdir(storage_dir):
        sub_path = os.path.join(storage_dir, subdir)
        if not os.path.isdir(sub_path) or subdir in ("analysis", "propagation"):
            continue
        for fname in os.listdir(sub_path):
            if not fname.endswith(".json"):
                continue
            proj_name = fname.replace(".json", "")
            fpath = os.path.join(sub_path, fname)
            data = load_json(fpath)
            if data:
                projects.setdefault(proj_name, {})[subdir] = data
    return projects


def extract_hn_items(hn_data: dict) -> list:
    """Flatten HN results into a single list of items."""
    if not hn_data:
        return []
    results = hn_data.get("results", {})
    items = []
    if isinstance(results, dict):
        for query, query_items in results.items():
            if isinstance(query_items, list):
                items.extend(query_items)
    elif isinstance(results, list):
        items = results
    return items


def detect_hn_burst(items: list, threshold_days: int = 7,
                    threshold_count: int = 10) -> dict:
    """Detect if too many HN submissions in a short window."""
    if not items or len(items) < 3:
        return {"detected": False, "detail": "insufficient HN data"}

    timestamps = sorted([parse_date(it.get("created_at", "")) for it in items
                         if it.get("created_at")])
    if len(timestamps) < 3:
        return {"detected": False, "detail": "insufficient timestamps"}

    for i in range(len(timestamps)):
        window_end = timestamps[i] + timedelta(days=threshold_days)
        count = sum(1 for t in timestamps[i:] if t <= window_end)
        if count >= threshold_count:
            return {
                "detected": True,
                "detail": f"{count} HN submissions in {threshold_days} days",
                "start_date": timestamps[i].strftime("%Y-%m-%d"),
            }
    return {"detected": False, "detail": "HN posting rate normal"}


def detect_low_engagement(items: list, threshold: float = 0.3) -> dict:
    """Detect if most posts have very low engagement."""
    if not items:
        return {"detected": False, "detail": "no items"}
    low_eng = sum(1 for it in items
                  if it.get("points", 0) < 5 and it.get("num_comments", 0) < 3)
    ratio = low_eng / len(items)
    return {
        "detected": ratio > threshold,
        "detail": f"low_engagement_ratio={ratio:.0%} (threshold={threshold:.0%})",
        "ratio": round(ratio, 3),
    }


def detect_author_dominance(items: list, threshold: float = 0.6) -> dict:
    """Detect if one author posted most of the submissions."""
    if not items:
        return {"detected": False, "detail": "no items"}
    authors = [it.get("author", "unknown") for it in items]
    if not authors:
        return {"detected": False, "detail": "no authors"}
    counter = Counter(authors)
    top_author, top_count = counter.most_common(1)[0]
    ratio = top_count / len(authors)
    return {
        "detected": ratio > threshold and len(authors) > 3,
        "detail": f"top_author={top_author} ({ratio:.0%} of posts, threshold={threshold:.0%})",
        "top_author": top_author,
        "ratio": round(ratio, 3),
    }


def detect_duplicate_content(items: list) -> dict:
    """Detect duplicate URLs or very similar titles."""
    if not items:
        return {"detected": False, "detail": "no items"}
    urls = [it.get("url", "") for it in items if it.get("url")]
    titles = [it.get("title", "").lower().strip() for it in items if it.get("title")]
    dup_urls = len(urls) - len(set(urls))
    dup_titles = len(titles) - len(set(titles))
    return {
        "detected": dup_urls > 2 or dup_titles > 2,
        "detail": f"dup_urls={dup_urls}, dup_titles={dup_titles}",
        "duplicate_urls": dup_urls,
        "duplicate_titles": dup_titles,
    }


def detect_bot_timing(items: list) -> dict:
    """Detect bot-like uniform submission timing."""
    if not items or len(items) < 5:
        return {"detected": False, "detail": "insufficient items"}

    timestamps = sorted([parse_date(it.get("created_at", "")) for it in items
                         if it.get("created_at")])
    if len(timestamps) < 5:
        return {"detected": False, "detail": "insufficient timestamps"}

    intervals = [(timestamps[i+1] - timestamps[i]).total_seconds()
                 for i in range(len(timestamps) - 1)]
    if not intervals:
        return {"detected": False, "detail": "no intervals"}

    mean_int = sum(intervals) / len(intervals)
    if mean_int <= 0:
        return {"detected": False, "detail": "zero interval"}
    variance = sum((x - mean_int) ** 2 for x in intervals) / len(intervals)
    cv = (variance ** 0.5) / mean_int

    return {
        "detected": cv < 0.15 and mean_int < 86400,  # very uniform + < 1 day apart
        "detail": f"cv={cv:.3f}, mean_interval={mean_int:.0f}s",
        "coefficient_of_variation": round(cv, 4),
    }


def analyze_project(project_name: str, data_sources: dict) -> dict:
    """Run all anomaly detectors on one project."""
    anomalies = []
    hn_data = data_sources.get("hn")
    items = extract_hn_items(hn_data)

    if items:
        checks = [
            ("hn_burst", detect_hn_burst(items)),
            ("low_engagement", detect_low_engagement(items)),
            ("author_dominance", detect_author_dominance(items)),
            ("duplicate_content", detect_duplicate_content(items)),
            ("bot_timing", detect_bot_timing(items)),
        ]
        anomalies.extend(checks)

    detected = [a for a in anomalies if a[1].get("detected")]

    return {
        "project": project_name,
        "total_hn_items": len(items),
        "anomaly_count": len(detected),
        "anomalies": [{"check": name, **result} for name, result in anomalies],
        "status": "flagged" if detected else "clean",
    }


def run_anomaly_detection(input_dir: str, output_dir: str):
    """Main entry: detect anomalies across all projects."""
    os.makedirs(output_dir, exist_ok=True)
    projects = discover_projects(input_dir)

    if not projects:
        print("[anomaly_detector] No project data found")
        return {"generated_at": datetime.utcnow().isoformat() + "Z",
                "total_projects": 0, "flagged_projects": 0, "results": []}

    results = []
    for proj_name, sources in sorted(projects.items()):
        result = analyze_project(proj_name, sources)
        results.append(result)

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
            print(f"  !! {r['project']:<25s} anomalies={r['anomaly_count']} "
                  f"({', '.join(checks)})")

    return output


def main():
    parser = argparse.ArgumentParser(description="Anomaly Detector")
    parser.add_argument("--input", default="./storage")
    parser.add_argument("--output", default="./storage/analysis")
    args = parser.parse_args()
    run_anomaly_detection(args.input, args.output)


if __name__ == "__main__":
    main()
