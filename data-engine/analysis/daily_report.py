#!/usr/bin/env python3
"""Generate a Markdown daily report aggregating hype scores, anomaly detection,
and propagation timeline data.
"""

import argparse
import json
import os
import sys
from datetime import datetime, timezone


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def load_json(path):
    """Load a JSON file, returning {} on any failure."""
    try:
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
        return data if isinstance(data, dict) else {}
    except (json.JSONDecodeError, FileNotFoundError, OSError):
        return {}


def parse_date(value):
    """Parse ISO string or Unix timestamp (int/float) into a datetime, or return None."""
    if value is None:
        return None
    if isinstance(value, (int, float)):
        try:
            return datetime.fromtimestamp(value, tz=timezone.utc)
        except (OSError, OverflowError, ValueError):
            return None
    if isinstance(value, str):
        for fmt in (
            "%Y-%m-%dT%H:%M:%S.%f%z",
            "%Y-%m-%dT%H:%M:%S%z",
            "%Y-%m-%dT%H:%M:%S.%f",
            "%Y-%m-%dT%H:%M:%S",
            "%Y-%m-%d %H:%M:%S",
            "%Y-%m-%d",
        ):
            try:
                return datetime.strptime(value, fmt).replace(tzinfo=timezone.utc)
            except ValueError:
                continue
    return None


# ---------------------------------------------------------------------------
# Report sections
# ---------------------------------------------------------------------------

def section_header(title, level=2):
    return f"{'#' * level} {title}\n"


def render_hype_scores(data):
    """Render hype scores section as Markdown."""
    lines = [section_header("Hype Scores")]
    scores = data.get("scores", [])
    if not scores:
        lines.append("_No hype score data available._\n")
        return "\n".join(lines)

    generated = data.get("generated_at", "N/A")
    lines.append(f"Generated: `{generated}`  ")
    lines.append(f"Projects scored: **{len(scores)}**\n")

    # Classification counts
    class_counts = {}
    for s in scores:
        cls = s.get("classification", "unknown")
        class_counts[cls] = class_counts.get(cls, 0) + 1
    lines.append("| Classification | Count |")
    lines.append("|---|---|")
    for cls in ("organic", "steady", "viral", "suspicious"):
        if cls in class_counts:
            lines.append(f"| {cls} | {class_counts[cls]} |")
    lines.append("")

    # Table
    lines.append("| Project | Score | Classification | HN | Reddit | GitHub | Scholar |")
    lines.append("|---|---|---|---|---|---|---|")
    for s in scores:
        bd = s.get("breakdown", {})
        hn = bd.get("hn", {}).get("score", "-")
        reddit = bd.get("reddit", {}).get("score", "-")
        github = bd.get("github", {}).get("score", "-")
        scholar = bd.get("scholar", {}).get("score", "-")
        hn_str = f"{hn}" if isinstance(hn, (int, float)) else "-"
        reddit_str = f"{reddit}" if isinstance(reddit, (int, float)) else "-"
        gh_str = f"{github}" if isinstance(github, (int, float)) else "-"
        sc_str = f"{scholar}" if isinstance(scholar, (int, float)) else "-"
        lines.append(
            f"| {s['project']} | {s['composite_score']} | {s['classification']} "
            f"| {hn_str} | {reddit_str} | {gh_str} | {sc_str} |"
        )
    lines.append("")
    return "\n".join(lines)


def render_anomalies(data):
    """Render anomaly detection section as Markdown."""
    lines = [section_header("Anomaly Detection")]
    results = data.get("results", [])
    if not results:
        lines.append("_No anomaly data available._\n")
        return "\n".join(lines)

    generated = data.get("generated_at", "N/A")
    total_anomalies = data.get("total_anomalies", 0)
    flagged = [r for r in results if r.get("anomaly_count", 0) > 0]
    lines.append(f"Generated: `{generated}`  ")
    lines.append(f"Total anomalies found: **{total_anomalies}** across **{len(flagged)}** projects\n")

    if not flagged:
        lines.append("_No anomalies detected. All projects appear normal._\n")
        return "\n".join(lines)

    for r in flagged:
        lines.append(f"### {r['project']} ({r['anomaly_count']} anomalies)\n")
        lines.append("| Type | Severity | Description |")
        lines.append("|---|---|---|")
        for a in r.get("anomalies", []):
            atype = a.get("type", "unknown")
            severity = a.get("severity", "unknown")
            desc = a.get("description", "")
            # Escape pipes in description
            desc = desc.replace("|", "\\|")
            lines.append(f"| {atype} | {severity} | {desc} |")
        lines.append("")

    return "\n".join(lines)


def render_propagation(data):
    """Render propagation timeline section as Markdown."""
    lines = [section_header("Cross-Platform Propagation")]
    timelines = data.get("timelines", [])
    if not timelines:
        lines.append("_No propagation data available._\n")
        return "\n".join(lines)

    generated = data.get("generated_at", "N/A")
    lines.append(f"Generated: `{generated}`  ")
    lines.append(f"Projects with timelines: **{len(timelines)}**\n")

    # Summary table
    lines.append("| Project | Events | Edges | Platforms | Date Range |")
    lines.append("|---|---|---|---|---|")
    for t in timelines:
        plats = ", ".join(t.get("platforms", []))
        dr = t.get("date_range", {})
        earliest = dr.get("earliest", "N/A")
        latest = dr.get("latest", "N/A")
        if earliest and earliest != "N/A":
            earliest = earliest[:10]
        if latest and latest != "N/A":
            latest = latest[:10]
        date_str = f"{earliest} to {latest}" if earliest != "N/A" else "N/A"
        lines.append(
            f"| {t['project']} | {t['event_count']} | {t['edge_count']} "
            f"| {plats} | {date_str} |"
        )
    lines.append("")

    # Show notable propagation chains
    chains = [t for t in timelines if t.get("edge_count", 0) > 0]
    if chains:
        lines.append("### Notable Propagation Chains\n")
        for t in chains[:15]:
            lines.append(f"**{t['project']}**:")
            for e in t.get("edges", [])[:5]:
                lines.append(
                    f"- {e['from']} -> {e['to']} "
                    f"(delay: {e.get('delay_hours', '?')}h)"
                )
            lines.append("")

    return "\n".join(lines)


def render_top_lists(hype_data, anomaly_data, propagation_data):
    """Render summary top-lists."""
    lines = [section_header("Quick Reference")]

    # Top 5 by hype
    scores = hype_data.get("scores", [])
    if scores:
        lines.append("#### Top 5 by Hype Score\n")
        for i, s in enumerate(scores[:5], 1):
            lines.append(f"{i}. **{s['project']}** - {s['composite_score']} ({s['classification']})")
        lines.append("")

    # Most flagged
    results = anomaly_data.get("results", [])
    flagged = sorted(
        [r for r in results if r.get("anomaly_count", 0) > 0],
        key=lambda x: x["anomaly_count"],
        reverse=True,
    )
    if flagged:
        lines.append("#### Most Flagged Projects\n")
        for r in flagged[:5]:
            types = ", ".join(
                set(a["type"] for a in r.get("anomalies", []))
            )
            lines.append(f"- **{r['project']}** ({r['anomaly_count']} issues): {types}")
        lines.append("")

    # Widest cross-platform reach
    timelines = propagation_data.get("timelines", [])
    multi = sorted(
        [t for t in timelines if t.get("platform_count", 0) > 1],
        key=lambda x: x["platform_count"],
        reverse=True,
    )
    if multi:
        lines.append("#### Widest Platform Reach\n")
        for t in multi[:5]:
            lines.append(
                f"- **{t['project']}** - {t['platform_count']} platforms "
                f"({', '.join(t['platforms'])})"
            )
        lines.append("")

    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Report generation
# ---------------------------------------------------------------------------

def generate_report(hype_data, anomaly_data, propagation_data):
    """Build full Markdown report string."""
    now = datetime.now(timezone.utc)
    lines = []

    lines.append(f"# Daily Cross-Platform Analysis Report\n")
    lines.append(f"**Date**: {now.strftime('%Y-%m-%d %H:%M UTC')}  ")
    lines.append(
        f"**Projects analysed**: "
        f"{max(len(hype_data.get('scores', [])), len(anomaly_data.get('results', [])), len(propagation_data.get('timelines', [])))}"
        "\n"
    )
    lines.append("---\n")

    # Quick reference first
    lines.append(render_top_lists(hype_data, anomaly_data, propagation_data))
    lines.append("---\n")

    # Detailed sections
    lines.append(render_hype_scores(hype_data))
    lines.append("---\n")
    lines.append(render_anomalies(anomaly_data))
    lines.append("---\n")
    lines.append(render_propagation(propagation_data))

    lines.append("---\n")
    lines.append(f"_Report generated at {now.isoformat()}_\n")

    return "\n".join(lines)


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Generate Markdown daily report from analysis outputs"
    )
    parser.add_argument("--input", default="./storage/analysis",
                        help="Directory containing hype_scores.json, anomalies.json, "
                             "propagation.json")
    parser.add_argument("--output", default="./storage/analysis/daily_report.md",
                        help="Output Markdown path")
    args = parser.parse_args()

    input_dir = os.path.abspath(args.input)
    output_path = os.path.abspath(args.output)
    if os.path.isdir(output_path):
        import os.path as op
        basename = op.basename('analysis/daily_report.py').replace('.py', '.json') if 'daily' not in 'analysis/daily_report.py' else 'daily_report_' + __import__('datetime').datetime.now().strftime('%Y-%m-%d') + '.md'
        output_path = os.path.join(output_path, basename)

    hype_path = os.path.join(input_dir, "hype_scores.json")
    anomaly_path = os.path.join(input_dir, "anomaly_detector.json")
    if not os.path.exists(anomaly_path):
        anomaly_path = os.path.join(input_dir, "anomalies.json")
    propagation_path = os.path.join(input_dir, "propagation.json")
    if not os.path.exists(propagation_path):
        # Check in propagation subdir
        alt = os.path.join(os.path.dirname(input_dir), "propagation", "propagation_rebuilder.json")
        if os.path.exists(alt):
            propagation_path = alt

    hype_data = load_json(hype_path)
    anomaly_data = load_json(anomaly_path)
    propagation_data = load_json(propagation_path)

    if not hype_data and not anomaly_data and not propagation_data:
        print("No analysis data found. Run hype_scorer, anomaly_detector, and "
              "propagation_rebuilder first.")
        return

    report = generate_report(hype_data, anomaly_data, propagation_data)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(report)

    # Summary
    print(f"\n{'='*60}")
    print(f"DAILY REPORT")
    print(f"{'='*60}")
    print(f"Hype scores:   {len(hype_data.get('scores', []))} projects "
          f"({'loaded' if hype_data else 'MISSING'})")
    print(f"Anomalies:     {len(anomaly_data.get('results', []))} projects "
          f"({'loaded' if anomaly_data else 'MISSING'})")
    print(f"Propagation:   {len(propagation_data.get('timelines', []))} projects "
          f"({'loaded' if propagation_data else 'MISSING'})")
    print(f"\nOutput written to {output_path}")


if __name__ == "__main__":
    main()
