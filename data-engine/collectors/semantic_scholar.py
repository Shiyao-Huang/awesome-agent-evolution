#!/usr/bin/env python3
"""Semantic Scholar paper citation collector."""

import argparse, json, os, sys, time
from datetime import datetime, timezone
import requests

S2_API = "https://api.semanticscholar.org/graph/v1"
S2_SEARCH = f"{S2_API}/paper/search"


def _s2_get(url, params, max_retries=3):
    for attempt in range(max_retries):
        try:
            resp = requests.get(url, params=params, timeout=15)
            if resp.status_code == 429:
                wait = 5 * (attempt + 1)
                print(f"  [RATE] S2 429, waiting {wait}s...", file=sys.stderr)
                time.sleep(wait)
                continue
            resp.raise_for_status()
            return resp.json()
        except (requests.RequestException, ValueError) as e:
            if attempt < max_retries - 1:
                time.sleep(3)
                continue
            print(f"  [WARN] S2: {e}", file=sys.stderr)
            return None
    return None


def search_papers(query, limit=5):
    params = {"query": query, "limit": limit,
              "fields": "paperId,title,year,citationCount,referenceCount,venue,url,externalIds"}
    data = _s2_get(S2_SEARCH, params)
    if not data:
        return []
    results = []
    for p in data.get("data", []):
        ext = p.get("externalIds") or {}
        results.append({
            "paperId": p.get("paperId", ""), "title": p.get("title", ""),
            "year": p.get("year"), "citationCount": p.get("citationCount", 0),
            "venue": p.get("venue", ""), "url": p.get("url", ""),
            "arxivId": ext.get("ArXiv", ""),
        })
    return results


def get_citations(paper_id, limit=5):
    url = f"{S2_API}/paper/{paper_id}/citations"
    params = {"fields": "paperId,title,year,citationCount,venue,url", "limit": limit}
    data = _s2_get(url, params)
    if not data:
        return []
    return [{"paperId": c.get("citingPaper", {}).get("paperId", ""),
             "title": c.get("citingPaper", {}).get("title", ""),
             "year": c.get("citingPaper", {}).get("year"),
             "citationCount": c.get("citingPaper", {}).get("citationCount", 0)}
            for c in data.get("data", [])]


def load_projects(config_path, all_projects=False, priority=None):
    with open(config_path) as f:
        config = json.load(f)
    projects = config if isinstance(config, list) else config.get("projects", [])
    if priority:
        projects = [p for p in projects if p.get("priority") == priority]
    elif not all_projects:
        projects = [p for p in projects if p.get("priority") == "critical"]
    return projects


def collect_project(project, output_dir):
    name = project["name"]
    repo = project.get("repo", name)
    out_path = os.path.join(output_dir, "scholar", f"{name.replace('/', '_')}.json")
    if os.path.exists(out_path):
        return 0, 0
    queries = [name]
    if "/" in repo:
        short = repo.split("/")[1]
        if short.lower() != name.lower():
            queries.append(short)
    all_papers, all_cits = {}, {}
    for q in queries:
        papers = search_papers(q, limit=5)
        all_papers[q] = papers
        for p in papers[:2]:
            pid = p.get("paperId", "")
            if pid and p.get("citationCount", 0) > 3:
                all_cits[pid] = get_citations(pid, limit=5)
                time.sleep(3.0)
        time.sleep(3.0)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    tp = sum(len(v) for v in all_papers.values())
    tc = sum(len(v) for v in all_cits.values())
    payload = {"project": name, "repo": repo, "collected_at": datetime.now(timezone.utc).isoformat(),
               "total_papers": tp, "total_citations": tc, "papers": all_papers, "citations": all_cits}
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"  {name}: {tp} papers, {tc} citations")
    return tp, tc


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", default="config/projects.json")
    parser.add_argument("--output", default="./storage")
    parser.add_argument("--all", action="store_true")
    parser.add_argument("--priority", choices=["critical", "high", "medium"])
    parser.add_argument("--query", type=str)
    args = parser.parse_args()
    if args.query:
        print(json.dumps(search_papers(args.query), indent=2, ensure_ascii=False))
        return
    projects = load_projects(args.config, args.all, args.priority)
    print(f"S2: {len(projects)} projects")
    tp = tc = 0
    for p in projects:
        a, b = collect_project(p, args.output)
        tp += a; tc += b
    print(f"S2 done: {tp} papers, {tc} citations")


if __name__ == "__main__":
    main()
