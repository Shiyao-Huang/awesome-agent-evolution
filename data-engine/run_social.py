#!/usr/bin/env python3
"""Social media data collection runner for 50 AI Agent projects."""

import json
import os
import sys
import time
from datetime import datetime, timezone

import requests
from bs4 import BeautifulSoup

OUTPUT = os.path.join(os.path.dirname(__file__), "social-storage")
CONFIG_PATH = os.path.join(os.path.dirname(__file__), "config", "projects.json")
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"


def load_projects(priority=None):
    with open(CONFIG_PATH) as f:
        config = json.load(f)
    projects = config if isinstance(config, list) else config.get("projects", [])
    if priority:
        projects = [p for p in projects if p.get("priority") == priority]
    return projects


def save(data, subdir, name):
    d = os.path.join(OUTPUT, subdir)
    os.makedirs(d, exist_ok=True)
    path = os.path.join(d, f"{name.replace('/', '_')}.json")
    with open(path, "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    return path


# ── HN (Algolia) ──
def collect_hn(projects):
    print(f"\n{'='*40}\nHN: {len(projects)} projects\n{'='*40}")
    total = 0
    for i, proj in enumerate(projects):
        name = proj["name"]
        repo = proj.get("repo", name)
        out_path = os.path.join(OUTPUT, "hn", f"{name.replace('/', '_')}.json")
        if os.path.exists(out_path):
            continue
        queries = [name]
        if "/" in repo:
            queries.append(repo.split("/")[1])
        all_results = {}
        for q in queries:
            hits = []
            for page in range(2):
                try:
                    r = requests.get("https://hn.algolia.com/api/v1/search",
                                     params={"query": q, "tags": "story", "page": page, "hitsPerPage": 20},
                                     timeout=15)
                    r.raise_for_status()
                    for h in r.json().get("hits", []):
                        hits.append({"objectID": h.get("objectID"), "title": h.get("title", ""),
                                     "points": h.get("points", 0), "num_comments": h.get("num_comments", 0),
                                     "author": h.get("author", ""), "created_at": h.get("created_at", "")})
                    if len(r.json().get("hits", [])) < 20:
                        break
                except Exception as e:
                    print(f"  [WARN] HN {q}: {e}", file=sys.stderr)
                    break
                time.sleep(0.4)
            all_results[q] = hits
            time.sleep(0.5)
        t = sum(len(v) for v in all_results.values())
        save({"project": name, "repo": repo, "collected_at": datetime.now(timezone.utc).isoformat(),
              "total_hits": t, "results": all_results}, "hn", name)
        total += t
        print(f"  [{i+1}/{len(projects)}] {name}: {t} hits")
    print(f"HN done: {total} hits")
    return total


# ── Reddit (public JSON) ──
def collect_reddit(projects):
    print(f"\n{'='*40}\nReddit: {len(projects)} projects\n{'='*40}")
    total = 0
    for i, proj in enumerate(projects):
        name = proj["name"]
        repo = proj.get("repo", name)
        out_path = os.path.join(OUTPUT, "reddit", f"{name.replace('/', '_')}.json")
        if os.path.exists(out_path):
            continue
        queries = [name]
        if "/" in repo:
            queries.append(repo.split("/")[1])
        all_results = {}
        for q in queries:
            posts = []
            try:
                r = requests.get("https://www.reddit.com/search.json",
                                 params={"q": q, "sort": "relevance", "limit": 25, "type": "link"},
                                 headers={"User-Agent": "awesome-evolution/1.0"}, timeout=15)
                r.raise_for_status()
                for child in r.json().get("data", {}).get("children", []):
                    d = child.get("data", {})
                    posts.append({"id": d.get("id"), "subreddit": d.get("subreddit", ""),
                                  "title": d.get("title", ""), "score": d.get("score", 0),
                                  "num_comments": d.get("num_comments", 0),
                                  "url": f"https://reddit.com{d.get('permalink', '')}"})
            except Exception as e:
                print(f"  [WARN] Reddit {q}: {e}", file=sys.stderr)
            all_results[q] = posts
            time.sleep(2.0)
        t = sum(len(v) for v in all_results.values())
        save({"project": name, "repo": repo, "collected_at": datetime.now(timezone.utc).isoformat(),
              "total_posts": t, "results": all_results}, "reddit", name)
        total += t
        print(f"  [{i+1}/{len(projects)}] {name}: {t} posts")
    print(f"Reddit done: {total} posts")
    return total


# ── Semantic Scholar ──
def collect_scholar(projects):
    print(f"\n{'='*40}\nScholar: {len(projects)} projects\n{'='*40}")
    total_papers = 0
    for i, proj in enumerate(projects):
        name = proj["name"]
        repo = proj.get("repo", name)
        out_path = os.path.join(OUTPUT, "scholar", f"{name.replace('/', '_')}.json")
        if os.path.exists(out_path):
            continue
        queries = [name]
        if "/" in repo:
            short = repo.split("/")[1]
            if short.lower() != name.lower():
                queries.append(short)
        all_papers = {}
        for q in queries:
            papers = []
            for attempt in range(3):
                try:
                    r = requests.get("https://api.semanticscholar.org/graph/v1/paper/search",
                                     params={"query": q, "limit": 5,
                                             "fields": "paperId,title,year,citationCount,venue,url"},
                                     timeout=15)
                    if r.status_code == 429:
                        time.sleep(5 * (attempt + 1))
                        continue
                    r.raise_for_status()
                    for p in r.json().get("data", []):
                        papers.append({"paperId": p.get("paperId", ""), "title": p.get("title", ""),
                                       "year": p.get("year"), "citationCount": p.get("citationCount", 0),
                                       "venue": p.get("venue", ""), "url": p.get("url", "")})
                    break
                except Exception:
                    time.sleep(3)
            all_papers[q] = papers
            time.sleep(3.0)
        tp = sum(len(v) for v in all_papers.values())
        save({"project": name, "repo": repo, "collected_at": datetime.now(timezone.utc).isoformat(),
              "total_papers": tp, "papers": all_papers}, "scholar", name)
        total_papers += tp
        print(f"  [{i+1}/{len(projects)}] {name}: {tp} papers")
    print(f"Scholar done: {total_papers} papers")
    return total_papers


def main():
    os.makedirs(OUTPUT, exist_ok=True)
    projects = load_projects()

    print(f"Social media collection: {len(projects)} projects")
    hn_total = collect_hn(projects)
    reddit_total = collect_reddit(projects)
    scholar_total = collect_scholar(projects)

    # Summary
    summary = {
        "collected_at": datetime.now(timezone.utc).isoformat(),
        "total_projects": len(projects),
        "hn": {"files": len(os.listdir(os.path.join(OUTPUT, "hn"))), "total_hits": hn_total},
        "reddit": {"files": len(os.listdir(os.path.join(OUTPUT, "reddit"))), "total_posts": reddit_total},
        "scholar": {"files": len(os.listdir(os.path.join(OUTPUT, "scholar"))), "total_papers": scholar_total},
    }
    save(summary, "", "collection_summary")
    print(f"\n{'='*40}\nSUMMARY\n{'='*40}")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
