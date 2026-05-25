#!/usr/bin/env python3
"""
Unified analysis pipeline — single file for resilience against directory rebuilds.
Handles both subdirectory structure (hn/, reddit/, scholar/) and flat GitHub stats files.
"""

import json, math, os, sys
from datetime import datetime, timezone, timedelta
from collections import Counter

def load_json(path):
    if not os.path.exists(path): return None
    try:
        with open(path, "r", encoding="utf-8") as f: return json.load(f)
    except: return None

def save_json(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def parse_date(s):
    if not s: return ""
    if isinstance(s, (int, float)): return datetime.utcfromtimestamp(s).strftime("%Y-%m-%dT%H:%M:%SZ")
    try: return datetime.fromisoformat(str(s).replace("Z","+00:00")).strftime("%Y-%m-%dT%H:%M:%SZ")
    except: return str(s)[:19]

def discover_projects(storage_dir):
    projects = {}
    skip = {"analysis", "propagation"}
    for entry in os.listdir(storage_dir):
        path = os.path.join(storage_dir, entry)
        if os.path.isdir(path) and entry not in skip:
            for fname in os.listdir(path):
                if not fname.endswith(".json"): continue
                proj = fname.replace(".json", "")
                data = load_json(os.path.join(path, fname))
                if data: projects.setdefault(proj, {})[entry] = data
        elif entry.endswith(".json"):
            # Flat files: {org}_{repo}_stats.json
            name = entry.replace(".json", "")
            # Extract readable project name from org_repo_stats
            if name.endswith("_stats"):
                repo_part = name[:-6]  # strip _stats
                # Convert org_repo to readable
                parts = repo_part.split("_", 1)
                if len(parts) == 2:
                    proj = parts[1]  # use repo name
                else:
                    proj = repo_part
            else:
                proj = name
            data = load_json(path)
            if data: projects.setdefault(proj, {})[entry] = data
    return projects

def flatten_items(data, platform):
    """Extract list of items from platform-specific data."""
    if not data: return []
    if platform == "hn":
        results = data.get("results", {})
        if isinstance(results, dict):
            items = []
            for q, vals in results.items():
                if isinstance(vals, list): items.extend(vals)
            return items
        return results if isinstance(results, list) else []
    elif platform == "reddit":
        results = data if isinstance(data, list) else data.get("results", {})
        if isinstance(results, dict):
            items = []
            for q, vals in results.items():
                if isinstance(vals, list): items.extend(vals)
            return items
        return results if isinstance(results, list) else []
    return []

def score_project(proj_name, sources):
    """Compute hype score from all available data sources."""
    import math as m
    scores = {}
    info = {}

    # HN engagement (max 35 pts)
    hn_items = flatten_items(sources.get("hn"), "hn")
    if hn_items:
        pts = [it.get("points", 0) for it in hn_items]
        avg = sum(pts)/len(pts)
        scores["hn"] = min(35, (m.log1p(avg)/m.log1p(1000))*35)
        info["hn"] = {"items": len(hn_items), "avg_pts": round(avg,1), "max_pts": max(pts)}

    # Reddit (max 25 pts)
    rd_items = flatten_items(sources.get("reddit"), "reddit")
    if rd_items:
        ups = [it.get("score", it.get("ups", 0)) for it in rd_items]
        avg = sum(ups)/len(ups)
        scores["reddit"] = min(25, (m.log1p(avg)/m.log1p(500))*25)
        info["reddit"] = {"items": len(rd_items), "avg_ups": round(avg,1)}

    # GitHub stats (max 25 pts) - flat files with {metadata, data} structure
    for key, val in sources.items():
        if "_stats" in key and isinstance(val, dict):
            d = val.get("data", val)
            stars = d.get("stars", 0)
            forks = d.get("forks", 0)
            watchers = d.get("subscribers_count", d.get("watchers", 0))
            scores["github"] = min(25, (m.log1p(stars)/m.log1p(200000))*25)
            info["github"] = {"stars": stars, "forks": forks, "watchers": watchers,
                              "repo": val.get("metadata", {}).get("repo", "")}
            break

    # Scholar (max 15 pts)
    scholar = sources.get("scholar")
    if scholar:
        papers = scholar if isinstance(scholar, list) else scholar.get("papers", [scholar])
        if isinstance(papers, dict): papers = [papers]
        citations = sum(p.get("citationCount", p.get("citations", 0)) for p in papers if isinstance(p, dict))
        scores["scholar"] = min(15, (m.log1p(citations)/m.log1p(5000))*15)
        info["scholar"] = {"papers": len(papers), "citations": citations}

    raw = sum(scores.values())
    weights = {"hn": 35, "reddit": 25, "github": 25, "scholar": 15}
    max_possible = sum(weights.get(k, 0) for k in scores)
    composite = round(raw / max_possible * 100, 1) if max_possible > 0 else 0
    cls = "viral" if composite >= 65 else "steady" if composite >= 45 else "organic"

    return {"project": proj_name, "composite_score": composite, "classification": cls,
            "platform_scores": {k: round(v,1) for k,v in scores.items()},
            "platforms": info, "data_sources": list(sources.keys())}

def detect_anomalies(proj_name, sources):
    anomalies = []
    for platform in ["hn", "reddit"]:
        items = flatten_items(sources.get(platform), platform)
        if not items: continue
        # Duplicate titles
        titles = [it.get("title","").strip().lower() for it in items if it.get("title")]
        tc = Counter(titles)
        dups = sum(1 for c in tc.values() if c > 1)
        if dups >= 2:
            anomalies.append({"check": "duplicate_content", "detail": f"{dups} dup titles on {platform}"})
        # HN burst
        if platform == "hn" and len(items) >= 5:
            timestamps = sorted([parse_date(it.get("created_at")) for it in items if it.get("created_at")])
            for i in range(len(timestamps)):
                try:
                    start = datetime.fromisoformat(timestamps[i].replace("Z","+00:00"))
                    count = sum(1 for t in timestamps[i:] if t and
                                (datetime.fromisoformat(t.replace("Z","+00:00"))-start) <= timedelta(hours=24))
                    if count >= 5:
                        anomalies.append({"check": "hn_burst", "detail": f"{count} posts in 24h"})
                        break
                except: continue
    flagged = [a for a in anomalies]
    return {"project": proj_name, "anomaly_count": len(flagged), "anomalies": flagged,
            "status": "flagged" if flagged else "clean"}

def build_chain(proj_name, sources):
    timeline, platforms = [], {}
    for platform in ["hn", "reddit"]:
        items = flatten_items(sources.get(platform), platform)
        for it in items:
            date_key = "created_at" if platform == "hn" else "created_utc"
            timeline.append({"date": parse_date(it.get(date_key, it.get("created_at"))),
                             "platform": platform, "title": it.get("title","")})
        if items: platforms[platform] = len(items)
    # Scholar
    scholar = sources.get("scholar")
    if scholar:
        papers = scholar if isinstance(scholar, list) else [scholar]
        for p in papers:
            if isinstance(p, dict):
                timeline.append({"date": parse_date(p.get("publicationDate","")), "platform": "scholar",
                                 "title": p.get("title",""), "citations": p.get("citationCount",0)})
        platforms["scholar"] = len(papers)
    # GitHub stats
    for key, val in sources.items():
        if "_stats" in key and isinstance(val, dict):
            d = val.get("data", val)
            timeline.append({"date": parse_date(d.get("created_at","")), "platform": "github",
                             "title": f"Stars: {d.get('stars',0):,}"})
            platforms["github"] = 1
            break
    timeline.sort(key=lambda e: e.get("date",""))
    return {"project": proj_name, "timeline": timeline, "platforms": platforms,
            "total_events": len(timeline)}

def generate_report(scores, anomalies, chains, output_dir):
    now = datetime.now(timezone.utc)
    date_str = now.strftime("%Y-%m-%d")
    lines = [f"# Data Engine Daily Report\n", f"> Generated: {now.isoformat()}\n"]
    lines.append("## Hype Score Rankings\n")
    lines.append("| # | Project | Score | Class | Stars | Sources |")
    lines.append("|---|---------|-------|-------|-------|---------|")
    for i, s in enumerate(scores[:30], 1):
        stars = s.get("platforms",{}).get("github",{}).get("stars","-")
        lines.append(f"| {i} | {s['project']} | {s['composite_score']} | {s['classification']} | {stars} | {', '.join(s['data_sources'])} |")
    flagged = [a for a in anomalies if a["status"]=="flagged"]
    lines.append(f"\n## Anomalies\n\nFlagged: {len(flagged)}/{len(anomalies)}\n")
    for a in sorted(flagged, key=lambda x: x["anomaly_count"], reverse=True)[:10]:
        lines.append(f"- **{a['project']}** ({a['anomaly_count']}): {', '.join(c['check'] for c in a['anomalies'])}")
    multi = [c for c in chains if len(c["platforms"])>1]
    lines.append(f"\n## Propagation\n\nMulti-platform: {len(multi)}/{len(chains)}\n")
    for c in sorted(multi, key=lambda x: x["total_events"], reverse=True)[:10]:
        lines.append(f"- **{c['project']}**: {c['total_events']} events ({', '.join(c['platforms'].keys())})")
    lines.append(f"\n---\n*Self Evolve Data Engine — {date_str}*")
    path = os.path.join(output_dir, f"daily_report_{date_str}.md")
    os.makedirs(output_dir, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f: f.write("\n".join(lines))
    print(f"\n[report] -> {path}")

def main():
    storage_dir = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else
                                   os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "storage"))
    output_dir = os.path.join(storage_dir, "analysis")
    prop_dir = os.path.join(storage_dir, "propagation")
    projects = discover_projects(storage_dir)
    if not projects:
        print(f"No data found in {storage_dir}")
        return
    print(f"Discovered {len(projects)} projects")

    scores = sorted([score_project(n, s) for n, s in projects.items()],
                    key=lambda x: x["composite_score"], reverse=True)
    save_json(os.path.join(output_dir, "hype_scores.json"),
              {"generated_at": datetime.now(timezone.utc).isoformat(), "total_projects": len(scores), "scores": scores})
    print(f"[hype] {len(scores)} projects")
    for s in scores[:10]:
        gh = s.get("platforms",{}).get("github",{})
        stars = gh.get("stars","")
        extra = f" stars={stars}" if stars else ""
        print(f"  {s['project']:<30s} {s['composite_score']:>5} {s['classification']}{extra}")

    anomalies = sorted([detect_anomalies(n, s) for n, s in projects.items()],
                       key=lambda x: x["anomaly_count"], reverse=True)
    flagged = [a for a in anomalies if a["status"]=="flagged"]
    save_json(os.path.join(output_dir, "anomaly_report.json"),
              {"generated_at": datetime.now(timezone.utc).isoformat(), "total": len(anomalies), "flagged": len(flagged), "results": anomalies})
    print(f"\n[anomaly] {len(flagged)}/{len(anomalies)} flagged")

    chains = sorted([build_chain(n, s) for n, s in projects.items()],
                    key=lambda x: x["total_events"], reverse=True)
    save_json(os.path.join(prop_dir, "propagation_chains.json"),
              {"generated_at": datetime.now(timezone.utc).isoformat(), "total_projects": len(chains), "chains": chains})
    print(f"\n[propagation] {len(chains)} chains")
    for c in chains[:10]:
        print(f"  {c['project']:<30s} {c['total_events']:>3} events ({', '.join(c['platforms'].keys())})")

    generate_report(scores, anomalies, chains, output_dir)

if __name__ == "__main__":
    main()
