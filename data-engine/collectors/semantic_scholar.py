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
S2_HEADERS = {}  # No API key needed for public endpoints


def _s2_get(url, params, max_retries=3):
    for attempt in range(max_retries):
        try:
            resp = requests.get(url, params=params, headers=S2_HEADERS, timeout=15)
            if resp.status_code == 429:
                wait = 3 * (attempt + 1)
                print(f"  [RATE] S2 429, waiting {wait}s...", file=sys.stderr)
                time.sleep(wait)
                continue
            resp.raise_for_status()
            return resp.json()
        except (requests.RequestException, ValueError) as e:
            if attempt < max_retries - 1:
                time.sleep(2)
                continue
            print(f"  [WARN] S2 failed: {e}", file=sys.stderr)
            return None
    return None


def search_papers(query, limit=10, fields=None):
    if fields is None:
        fields = "paperId,title,year,citationCount,referenceCount,venue,url,externalIds,abstract"
    results = []
    params = {"query": query, "limit": limit, "fields": fields}
    data = _s2_get(S2_SEARCH, params)
    if data is None:
        return results

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
            "doi": ext_ids.get("DOI", ""),
            "abstract": (paper.get("abstract") or "")[:500],
        })
    return results


def get_paper_citations(paper_id, limit=20):
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


def collect_project(project, output_dir):
    name = project["name"]
    repo = project.get("repo", name)
    queries = [name]
    if "/" in repo:
        repo_short = repo.split("/")[1]
        if repo_short.lower() != name.lower():
            queries.append(repo_short)

    all_papers = {}
    all_citations = {}
    for q in queries:
        print(f"  S2 searching: '{q}'")
        papers = search_papers(q, limit=10)
        all_papers[q] = papers

        for paper in papers[:3]:
            pid = paper.get("paperId", "")
            if pid and paper.get("citationCount", 0) > 5:
                cits = get_paper_citations(pid, limit=10)
                all_citations[pid] = cits
                time.sleep(1.0)

        time.sleep(1.0)

    out_path = os.path.join(output_dir, "scholar", f"{name.replace('/', '_')}.json")
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    total_papers = sum(len(v) for v in all_papers.values())
    total_cits = sum(len(v) for v in all_citations.values())
    payload = {
        "project": name,
        "repo": repo,
        "collected_at": datetime.now(timezone.utc).isoformat(),
        "queries": queries,
        "total_papers": total_papers,
        "total_citations": total_cits,
        "papers": all_papers,
        "citations": all_citations,
    }
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"  -> {out_path} ({total_papers} papers, {total_cits} citations)")
    return total_papers, total_cits


def main():
    parser = argparse.ArgumentParser(description="Semantic Scholar citation collector")
    parser.add_argument("--config", default="config/projects.json")
    parser.add_argument("--output", default="./storage")
    parser.add_argument("--all", action="store_true")
    parser.add_argument("--query", type=str, help="Single query test")
    args = parser.parse_args()

    if args.query:
        papers = search_papers(args.query)
        print(json.dumps(papers, indent=2, ensure_ascii=False))
        return

    with open(args.config) as f:
        config = json.load(f)

    projects = config.get("projects", [])
    if not args.all:
        projects = [p for p in projects if p.get("priority") == "critical"]

    print(f"Semantic Scholar collection: {len(projects)} projects")
    total_papers = 0
    total_cits = 0
    for i, proj in enumerate(projects):
        print(f"[{i+1}/{len(projects)}] {proj['name']}")
        p, c = collect_project(proj, args.output)
        total_papers += p
        total_cits += c

    print(f"\nS2 done: {total_papers} papers, {total_cits} citations across {len(projects)} projects")


if __name__ == "__main__":
    main()
