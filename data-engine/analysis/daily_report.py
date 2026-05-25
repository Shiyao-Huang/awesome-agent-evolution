#!/usr/bin/env python3
"""
Daily Report Generator — Comprehensive analysis report.

Aggregates outputs from hype_scorer, anomaly_detector, and propagation_rebuilder
into a unified Markdown report for the team.
"""

import argparse
import json
import os
from datetime import datetime
from pathlib import Path


def load_json(path: str):
    if not os.path.exists(path):
        return None
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def render_hype_section(hype_data: dict) -> str:
    """Render hype score rankings as Markdown table."""
    if not hype_data or not hype_data.get("results"):
        return "## Hype Scores\n\nNo hype score data available.\n"

    lines = [
        "## Hype Score Rankings\n",
        f"**Total projects scored**: {hype_data['total_projects']}  ",
        f"**Generated**: {hype_data.get('generated_at', 'N/A')}\n",
        "| # | Project | Stars | Score | Suspicion | Growth Class |",
        "|---|---------|-------|-------|-----------|-------------|",
    ]

    for i, r in enumerate(hype_data["results"], 1):
        score = r.get("composite_score", "N/A")
        suspicion = r.get("suspicion_index", "N/A")
        growth = r.get("growth_class", "N/A")
        stars = r.get("stars", "N/A")
        lines.append(
            f"| {i} | {r['project']} | {stars} | {score} | {suspicion} | {growth} |"
        )

    return "\n".join(lines) + "\n"


def render_anomaly_section(anomaly_data: dict) -> str:
    """Render anomaly detection results."""
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
        lines.append(f"- Stars: {r.get('stars', 'N/A')}")
        lines.append(f"- Anomaly count: {r['anomaly_count']}\n")
        for a in r.get("anomalies", []):
            if a.get("detected"):
                lines.append(f"- **{a['check']}**: {a.get('detail', '')}")
        lines.append("")

    return "\n".join(lines)


def render_propagation_section(prop_data: dict) -> str:
    """Render propagation chain summaries."""
    if not prop_data or not prop_data.get("chains"):
        return "## Propagation Chains\n\nNo propagation data available.\n"

    lines = [
        "## Propagation Chains\n",
        f"**Total projects**: {prop_data['total_projects']}\n",
    ]

    for c in prop_data["chains"]:
        platforms = ", ".join(c["platforms"].keys()) if c["platforms"] else "none"
        events = len(c["timeline"])
        lines.append(f"### {c['project']}")
        lines.append(f"- Platforms: {platforms}")
        lines.append(f"- Timeline events: {events}")
        if c["timeline"]:
            lines.append("\n**Key events:**\n")
            for evt in c["timeline"][:10]:  # Top 10 events
                date = evt.get("date", "?")[:10]
                lines.append(f"- {date} [{evt['platform']}] {evt.get('detail', evt.get('event', ''))}")
            if events > 10:
                lines.append(f"- ... and {events - 10} more events")
        lines.append("")

    return "\n".join(lines)


def generate_daily_report(storage_dir: str, output_dir: str) -> str:
    """Generate the full daily report."""
    os.makedirs(output_dir, exist_ok=True)

    # Load analysis results
    hype_data = load_json(os.path.join(output_dir, "hype_scores.json"))
    anomaly_data = load_json(os.path.join(output_dir, "anomaly_report.json"))

    # Load propagation chains
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

- **Hype Scoring**: 5-dimension weighted score (star activity, contributor diversity, fork quality, issue quality, PR merge rate)
- **Anomaly Detection**: 6 checks (burst growth, low fork quality, high star/contributor ratio, issue spam, activity drop, bot-like stars)
- **Propagation Chains**: Cross-platform timeline reconstruction (GitHub, HN, Reddit, Semantic Scholar, Chinese media)

---

*Self Evolve Data Engine — {date_str}*
"""

    # Write report
    report_path = os.path.join(output_dir, f"daily_report_{date_str}.md")
    with open(report_path, "w", encoding="utf-8") as f:
        f.write(report)

    print(f"[daily_report] Generated → {report_path}")
    return report_path


def main():
    parser = argparse.ArgumentParser(description="Daily Report Generator")
    parser.add_argument("--input", default="./storage",
                        help="Input storage directory")
    parser.add_argument("--output", default="./storage/analysis",
                        help="Output directory for report")
    args = parser.parse_args()

    generate_daily_report(args.input, args.output)


if __name__ == "__main__":
    main()
