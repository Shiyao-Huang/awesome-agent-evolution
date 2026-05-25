#!/usr/bin/env python3
"""Semantic Scholar paper citation collector."""

import argparse
import json
import os
import sys
import time
from datetime import datetime, timezone

import requests

S2_API = "https://api.semanticscholar.org/graph/v1"
S2_SEARCH = f"{S2_API}/paper/search"
S2_HEADERS = {}


def _s2_get(url, params, max_retries=3):
    for attempt in range(max_retries):
        try:
            resp = requests.get(url, params=params, headers=S2_HEADERS, timeout=15)
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
            print(f"  [WARN] S2 failed: {e}", file=sys.stderr)
            return None
    return None


def search_papers(query, limit=5):
    fields = "paperId,title,year,citationCount,referenceCount,venue,url,externalIds"
    params = {"query": query, "limit": limit, "fields": fields}
    data = _s2_get(S2_SEARCH, params)
    if data is None:
        return []
    results = []
    for paper in data.get("data", []):
        ext_ids = paper.get("externalIds") or {}
        results.append({
            "paperId": paper.get("paperId", ""),
            "title": paper.get("title", ""),
            "year": paper.get("year"),
            "citationCount": paper.get("citationCount", 0),
            "referenceCount": paper.get("referenceCount", 0),
            "venue": paper.get("venue", ""),
            "url": paper.get("url", ""),
            "arxivId": ext_ids.get("ArXiv", ""),
        })
    return results


def get_paper_citations(paper_id, limit=10):
    url = f"{S2_API}/paper/{paper_id}/citations"
    fields = "paperId,title,year,citationCount,venue,url"
    params = {"fields": fields, "limit": limit}
    data = _s2_get(url, params)
    if data is None:
        return []
    results = []
    for c in data.get("data", []):
        p = c.get("citingPaper", {})
        results.append({
            "paperId": p.get("paperId", ""),
            "title": p.get("title", ""),
            "year": p.get("year"),
            "citationCount": p.get("citationCount", 0),
            "venue": p.get("venue", ""),
            "url": p.get("url", ""),
        })
    return results


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
    out_name = name.replace("/", "_")
    out_path = os.path.join(output_dir, "scholar", f"{out_name}.json")
    if os.path.exists(out_path):
        print(f"  [SKIP] {out_path} already exists")
        return 0, 0

    queries = [name]
    if "/" in repo:
        repo_short = repo.split("/")[1]
        if repo_short.lower() != name.lower():
            queries.append(repo_short)

    all_papers = {}
    all_citations = {}
    for q in queries:
        print(f"  S2 searching: '{q}'")
        papers = search_papers(q, limit=5)
        all_papers[q] = papers

        for paper in papers[:2]:
            pid = paper.get("paperId", "")
            if pid and paper.get("citationCount", 0) > 3:
                cits = get_paper_citations(pid, limit=5)
                all_citations[pid] = cits
                time.sleep(3.0)

        time.sleep(3.0)

    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    tp = sum(len(v) for v in all_papers.values())
    tc = sum(len(v) for v in all_citations.values())
    payload = {
        "project": name,
        "repo": repo,
        "collected_at": datetime.now(timezone.utc).isoformat(),
        "queries": queries,
        "total_papers": tp,
        "total_citations": tc,
        "papers": all_papers,
        "citations": all_citations,
    }
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"  -> {out_path} ({tp} papers, {tc} citations)")
    return tp, tc


def main():
    parser = argparse.ArgumentParser(description="Semantic Scholar citation collector")
    parser.add_argument("--config", default="config/projects.json")
    parser.add_argument("--output", default="./storage")
    parser.add_argument("--all", action="store_true")
    parser.add_argument("--priority", choices=["critical", "high", "medium"])
    parser.add_argument("--query", type=str, help="Single query test")
    args = parser.parse_args()

    if args.query:
        papers = search_papers(args.query)
        print(json.dumps(papers, indent=2, ensure_ascii=False))
        return

    projects = load_projects(args.config, args.all, args.priority)
    print(f"S2 collection: {len(projects)} projects")
    tp = tc = 0
    for i, proj in enumerate(projects):
        print(f"[{i+1}/{len(projects)}] {proj['name']}")
        p, c = collect_project(proj, args.output)
        tp += p
        tc += c

    print(f"\nS2 done: {tp} papers, {tc} citations across {len(projects)} projects")


if __name__ == "__main__":
    main()
