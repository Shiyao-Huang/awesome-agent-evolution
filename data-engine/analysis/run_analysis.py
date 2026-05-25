#!/usr/bin/env python3
"""
Single-file analysis pipeline runner.
Combines hype scoring, anomaly detection, propagation chains, and daily report.
Designed to survive directory rebuilds by other agents.
"""

import json
import os
import sys
from datetime import datetime, timezone
from collections import Counter

STORAGE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "storage")


def load_json(path):
    if not os.path.exists(path):
        return None
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return None


def save_json(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def parse_date(s):
    if not s:
        return ""
    if isinstance(s, (int, float)):
        return datetime.utcfromtimestamp(s).strftime("%Y-%m-%dT%H:%M:%SZ")
    try:
        dt = datetime.fromisoformat(str(s).replace("Z", "+00:00"))
        return dt.strftime("%Y-%m-%dT%H:%M:%SZ")
    except (ValueError, AttributeError):
        return str(s)[:19]


def discover_projects(storage_dir):
    """Discover all projects from storage subdirectories."""
    projects = {}
    for subdir in os.listdir(storage_dir):
        sub_path = os.path.join(storage_dir, subdir)
        if not os.path.isdir(sub_path) or subdir in ("analysis", "propagation"):
            continue
        for fname in os.listdir(sub_path):
            if not fname.endswith(".json"):
                continue
            proj = fname.replace(".json", "")
            data = load_json(os.path.join(sub_path, fname))
            if data:
                projects.setdefault(proj, {})[subdir] = data
    # Flat files in root
    for fname in os.listdir(storage_dir):
        if fname.endswith(".json"):
            data = load_json(os.path.join(storage_dir, fname))
            if data:
                projects.setdefault(fname.replace(".json", ""), {})["root"] = data
    return projects


def flatten_hn(hn_data):
    if not hn_data:
        return []
    results = hn_data.get("results", {})
    items = []
    if isinstance(results, dict):
        for q, vals in results.items():
            if isinstance(vals, list):
                items.extend(vals)
    elif isinstance(results, list):
        items = results
    return items


def flatten_reddit(reddit_data):
    if not reddit_data:
        return []
    results = reddit_data if isinstance(reddit_data, list) else reddit_data.get("results", {})
    items = []
    if isinstance(results, dict):
        for q, vals in results.items():
            if isinstance(vals, list):
                items.extend(vals)
    elif isinstance(results, list):
        items = results
    return items


# ─── HYPE SCORER ────────────────────────────────────────────────────────────

def score_project_hype(proj_name, sources):
    scores = {}
    platform_info = {}

    # HN (weight 35%)
    hn_items = flatten_hn(sources.get("hn"))
    if hn_items:
        pts = [it.get("points", 0) for it in hn_items]
        avg_pts = sum(pts) / len(pts) if pts else 0
        import math
        hn_score = min(35, (math.log1p(avg_pts) / math.log1p(1000)) * 35)
        scores["hn"] = hn_score
        platform_info["hn"] = {"items": len(hn_items), "avg_points": round(avg_pts, 1),
                                "max_points": max(pts) if pts else 0}

    # Reddit (weight 25%)
    reddit_items = flatten_reddit(sources.get("reddit"))
    if reddit_items:
        ups = [it.get("score", it.get("ups", 0)) for it in reddit_items]
        avg_ups = sum(ups) / len(ups) if ups else 0
        import math
        rd_score = min(25, (math.log1p(avg_ups) / math.log1p(500)) * 25)
        scores["reddit"] = rd_score
        platform_info["reddit"] = {"items": len(reddit_items), "avg_ups": round(avg_ups, 1)}

    # Scholar (weight 15%)
    scholar_data = sources.get("scholar")
    if scholar_data:
        papers = scholar_data if isinstance(scholar_data, list) else scholar_data.get("papers", [scholar_data])
        if isinstance(papers, dict):
            papers = [papers]
        count = len(papers)
        citations = sum(p.get("citationCount", p.get("citations", 0)) for p in papers if isinstance(p, dict))
        import math
        s_score = min(15, (math.log1p(citations) / math.log1p(1000)) * 15)
        scores["scholar"] = s_score
        platform_info["scholar"] = {"papers": count, "citations": citations}

    composite = sum(scores.values())
    total_weight = {"hn": 35, "reddit": 25, "scholar": 15}.get  # not all present
    max_possible = 35 * ("hn" in sources) + 25 * ("reddit" in sources) + 15 * ("scholar" in sources) + 25
    if max_possible > 0:
        composite_pct = round(composite / max_possible * 100, 1)
    else:
        composite_pct = 0

    # Classify
    if composite_pct >= 65:
        cls = "viral"
    elif composite_pct >= 45:
        cls = "steady"
    else:
        cls = "organic"

    return {
        "project": proj_name,
        "composite_score": composite_pct,
        "classification": cls,
        "platform_scores": {k: round(v, 1) for k, v in scores.items()},
        "platforms": platform_info,
        "data_sources": list(sources.keys()),
    }


# ─── ANOMALY DETECTOR ────────────────────────────────────────────────────────

def detect_anomalies(proj_name, sources):
    anomalies = []
    hn_items = flatten_hn(sources.get("hn"))
    reddit_items = flatten_reddit(sources.get("reddit"))

    # HN burst: 5+ posts in 24h
    if hn_items and len(hn_items) >= 5:
        timestamps = sorted([parse_date(it.get("created_at", "")) for it in hn_items if it.get("created_at")])
        from datetime import timedelta
        for i in range(len(timestamps)):
            try:
                start = datetime.fromisoformat(timestamps[i].replace("Z", "+00:00"))
                count = sum(1 for t in timestamps[i:] if t and
                            (datetime.fromisoformat(t.replace("Z", "+00:00")) - start) <= timedelta(hours=24))
                if count >= 5:
                    anomalies.append({"check": "hn_burst", "detail": f"{count} HN posts in 24h"})
                    break
            except (ValueError, TypeError):
                continue

    # Duplicate content
    for platform, items in [("hn", hn_items), ("reddit", reddit_items)]:
        if items:
            titles = [it.get("title", "").strip().lower() for it in items if it.get("title")]
            title_counts = Counter(titles)
            max_dup = max(title_counts.values()) if title_counts else 0
            dup_titles = sum(1 for c in title_counts.values() if c > 1)
            if dup_titles >= 2:
                anomalies.append({"check": "duplicate_content",
                                  "detail": f"{dup_titles} dup titles on {platform} (max repeats: {max_dup})"})

    # Low engagement
    if hn_items and len(hn_items) >= 3:
        low = sum(1 for it in hn_items if it.get("points", 0) < 5 and it.get("num_comments", 0) < 3)
        if low / len(hn_items) > 0.5:
            anomalies.append({"check": "low_engagement", "detail": f"{low}/{len(hn_items)} low-engagement posts"})

    detected = [a for a in anomalies if True]  # all are detected
    return {"project": proj_name, "anomaly_count": len(detected), "anomalies": detected,
            "status": "flagged" if detected else "clean"}


# ─── PROPAGATION REBUILDER ──────────────────────────────────────────────────

def build_chain(proj_name, sources):
    timeline = []
    platforms = {}

    # HN events
    hn_items = flatten_hn(sources.get("hn"))
    for it in hn_items:
        timeline.append({"date": parse_date(it.get("created_at")), "platform": "hn",
                         "title": it.get("title", ""), "points": it.get("points", 0),
                         "comments": it.get("num_comments", 0)})
    if hn_items:
        platforms["hn"] = len(hn_items)

    # Reddit events
    reddit_items = flatten_reddit(sources.get("reddit"))
    for it in reddit_items:
        timeline.append({"date": parse_date(it.get("created_utc", it.get("created_at"))),
                         "platform": "reddit", "title": it.get("title", ""),
                         "score": it.get("score", it.get("ups", 0))})
    if reddit_items:
        platforms["reddit"] = len(reddit_items)

    # Scholar events
    scholar = sources.get("scholar")
    if scholar:
        papers = scholar if isinstance(scholar, list) else [scholar]
        for p in papers:
            if isinstance(p, dict):
                timeline.append({"date": parse_date(p.get("publicationDate", p.get("created_at"))),
                                 "platform": "scholar", "title": p.get("title", ""),
                                 "citations": p.get("citationCount", 0)})
        platforms["scholar"] = len(papers)

    timeline.sort(key=lambda e: e.get("date", ""))
    plat_names = list(platforms.keys())
    edges = []
    for i, s in enumerate(plat_names):
        for t in plat_names[i+1:]:
            edges.append({"source": s, "target": t})

    return {"project": proj_name, "timeline": timeline, "platforms": platforms,
            "edges": edges, "total_events": len(timeline)}


# ─── DAILY REPORT ───────────────────────────────────────────────────────────

def generate_report(scores, anomalies, chains, output_dir):
    now = datetime.now(timezone.utc)
    date_str = now.strftime("%Y-%m-%d")

    lines = [f"# Data Engine Daily Report\n", f"> Generated: {now.isoformat()}\n"]

    # Hype scores
    lines.append("## Hype Score Rankings\n")
    lines.append(f"Projects scored: {len(scores)}\n")
    lines.append("| # | Project | Score | Class | Sources |")
    lines.append("|---|---------|-------|-------|---------|")
    for i, s in enumerate(scores[:30], 1):
        lines.append(f"| {i} | {s['project']} | {s['composite_score']} | {s['classification']} | {', '.join(s['data_sources'])} |")
    if len(scores) > 30:
        lines.append(f"\n... and {len(scores) - 30} more projects\n")

    # Anomalies
    flagged = [a for a in anomalies if a["status"] == "flagged"]
    lines.append(f"\n## Anomaly Detection\n\nFlagged: {len(flagged)}/{len(anomalies)}\n")
    if flagged:
        for a in sorted(flagged, key=lambda x: x["anomaly_count"], reverse=True)[:10]:
            checks = ", ".join(c["check"] for c in a["anomalies"])
            lines.append(f"- **{a['project']}** ({a['anomaly_count']}): {checks}")

    # Propagation
    multi = [c for c in chains if len(c["platforms"]) > 1]
    lines.append(f"\n## Propagation Chains\n\nMulti-platform: {len(multi)}/{len(chains)}\n")
    for c in sorted(multi, key=lambda x: x["total_events"], reverse=True)[:10]:
        plats = ", ".join(c["platforms"].keys())
        lines.append(f"- **{c['project']}**: {c['total_events']} events ({plats})")

    lines.append(f"\n---\n*Self Evolve Data Engine — {date_str}*")

    report_path = os.path.join(output_dir, f"daily_report_{date_str}.md")
    os.makedirs(output_dir, exist_ok=True)
    with open(report_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"\n[report] → {report_path}")


# ─── MAIN ───────────────────────────────────────────────────────────────────

def main():
    storage_dir = sys.argv[1] if len(sys.argv) > 1 else STORAGE
    output_dir = os.path.join(storage_dir, "analysis")
    prop_dir = os.path.join(storage_dir, "propagation")
    os.makedirs(output_dir, exist_ok=True)
    os.makedirs(prop_dir, exist_ok=True)

    projects = discover_projects(storage_dir)
    if not projects:
        print("No data found in", storage_dir)
        return

    print(f"Discovered {len(projects)} projects")

    # Hype scoring
    scores = []
    for name, sources in sorted(projects.items()):
        scores.append(score_project_hype(name, sources))
    scores.sort(key=lambda x: x["composite_score"], reverse=True)
    save_json(os.path.join(output_dir, "hype_scores.json"),
              {"generated_at": datetime.now(timezone.utc).isoformat(),
               "total_projects": len(scores), "scores": scores})
    print(f"[hype] Scored {len(scores)} projects")
    for s in scores[:10]:
        print(f"  {s['project']:<30s} {s['composite_score']:>5} {s['classification']}")

    # Anomaly detection
    anomalies = []
    for name, sources in sorted(projects.items()):
        anomalies.append(detect_anomalies(name, sources))
    anomalies.sort(key=lambda x: x["anomaly_count"], reverse=True)
    flagged = [a for a in anomalies if a["status"] == "flagged"]
    save_json(os.path.join(output_dir, "anomaly_report.json"),
              {"generated_at": datetime.now(timezone.utc).isoformat(),
               "total_projects": len(anomalies), "flagged": len(flagged), "results": anomalies})
    print(f"\n[anomaly] {len(flagged)}/{len(anomalies)} flagged")

    # Propagation chains
    chains = []
    for name, sources in sorted(projects.items()):
        chains.append(build_chain(name, sources))
    chains.sort(key=lambda x: x["total_events"], reverse=True)
    save_json(os.path.join(prop_dir, "propagation_chains.json"),
              {"generated_at": datetime.now(timezone.utc).isoformat(),
               "total_projects": len(chains), "chains": chains})
    print(f"\n[propagation] {len(chains)} chains")
    for c in chains[:10]:
        plats = ", ".join(c["platforms"].keys())
        print(f"  {c['project']:<30s} {c['total_events']:>3} events ({plats})")

    # Daily report
    generate_report(scores, anomalies, chains, output_dir)


if __name__ == "__main__":
    main()
