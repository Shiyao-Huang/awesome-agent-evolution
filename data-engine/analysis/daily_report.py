#!/usr/bin/env python3
"""
Daily Report Generator — Comprehensive analysis Markdown report.

Aggregates hype scores, anomaly detection, and propagation chains
into a unified report for the team.
"""

import argparse
import json
import os
from datetime import datetime


def load_json(path: str):
    if not os.path.exists(path):
        return None
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def render_hype_section(hype_data: dict) -> str:
    if not hype_data or not hype_data.get("results"):
        return "## Hype Scores\n\nNo hype score data available.\n"

    lines = [
        "## Hype Score Rankings\n",
        f"**Projects scored**: {hype_data['total_projects']}  ",
        f"**Generated**: {hype_data.get('generated_at', 'N/A')}\n",
        "| # | Project | Score | Growth Class | HN Avg Points | Sources |",
        "|---|---------|-------|-------------|--------------|---------|",
    ]

    for i, r in enumerate(hype_data["results"], 1):
        hn = r.get("platforms", {}).get("hn", {})
        avg_pts = hn.get("avg_points", "N/A")
        sources = ", ".join(r.get("data_sources", []))
        lines.append(
            f"| {i} | {r['project']} | {r['composite_score']} | "
            f"{r['growth_class']} | {avg_pts} | {sources} |"
        )

    return "\n".join(lines) + "\n"


def render_anomaly_section(anomaly_data: dict) -> str:
    if not anomaly_data or not anomaly_data.get("results"):
        return "## Anomaly Detection\n\nNo anomaly data available.\n"

    flagged = [r for r in anomaly_data["results"] if r.get("status") == "flagged"]
    lines = [
        "## Anomaly Detection\n",
        f"**Total checked**: {anomaly_data['total_projects']}  ",
        f"**Flagged**: {anomaly_data['flagged_projects']}\n",
    ]

    if not flagged:
        lines.append("No anomalies detected. All projects appear clean.\n")
        return "\n".join(lines)

    lines.append("### Flagged Projects\n")
    for r in flagged:
        lines.append(f"#### {r['project']}")
        lines.append(f"- HN items: {r.get('total_hn_items', 0)}")
        lines.append(f"- Anomaly count: {r['anomaly_count']}\n")
        for a in r.get("anomalies", []):
            if a.get("detected"):
                lines.append(f"- **{a['check']}**: {a.get('detail', '')}")
        lines.append("")

    return "\n".join(lines)


def render_propagation_section(prop_data: dict) -> str:
    if not prop_data or not prop_data.get("chains"):
        return "## Propagation Chains\n\nNo propagation data available.\n"

    lines = [
        "## Propagation Chains\n",
        f"**Total projects**: {prop_data['total_projects']}\n",
    ]

    for c in prop_data["chains"]:
        if c["total_events"] == 0:
            continue
        platforms = ", ".join(c["platforms"].keys()) if c["platforms"] else "none"
        lines.append(f"### {c['project']}")
        lines.append(f"- Platforms: {platforms}")
        lines.append(f"- Timeline events: {c['total_events']}\n")

        for evt in c["timeline"][:10]:
            date = evt.get("date", "?")[:10]
            pts = evt.get("points", evt.get("score", ""))
            pts_str = f" ({pts} pts)" if pts else ""
            lines.append(f"- `{date}` [{evt['platform']}] "
                         f"{evt.get('title', evt.get('event', ''))}{pts_str}")
        if c["total_events"] > 10:
            lines.append(f"- ... and {c['total_events'] - 10} more events")
        lines.append("")

    return "\n".join(lines)


def generate_daily_report(storage_dir: str, output_dir: str) -> str:
    os.makedirs(output_dir, exist_ok=True)

    hype_data = load_json(os.path.join(output_dir, "hype_scores.json"))
    anomaly_data = load_json(os.path.join(output_dir, "anomaly_report.json"))
    propagation_dir = os.path.join(storage_dir, "propagation")
    prop_data = load_json(os.path.join(propagation_dir, "propagation_chains.json"))

    now = datetime.utcnow()
    date_str = now.strftime("%Y-%m-%d")

    report = f"""# Data Engine Daily Report

> **Generated**: {now.isoformat()}Z
> **Date**: {date_str}

---

{render_hype_section(hype_data)}

---

{render_anomaly_section(anomaly_data)}

---

{render_propagation_section(prop_data)}

---

## Methodology

- **Hype Scoring**: Cross-platform engagement score (HN points, GitHub stars, Reddit upvotes)
- **Anomaly Detection**: 5 checks (HN burst, low engagement, author dominance, duplicate content, bot timing)
- **Propagation Chains**: Cross-platform timeline reconstruction

---

*Self Evolve Data Engine — {date_str}*
"""

    report_path = os.path.join(output_dir, f"daily_report_{date_str}.md")
    with open(report_path, "w", encoding="utf-8") as f:
        f.write(report)

    print(f"[daily_report] Generated → {report_path}")
    return report_path


def main():
    parser = argparse.ArgumentParser(description="Daily Report Generator")
    parser.add_argument("--input", default="./storage")
    parser.add_argument("--output", default="./storage/analysis")
    args = parser.parse_args()
    generate_daily_report(args.input, args.output)


if __name__ == "__main__":
    main()
