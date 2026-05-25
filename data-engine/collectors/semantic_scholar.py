#!/usr/bin/env python3
"""
Semantic Scholar Citation Tracker - 追踪论文引用增长

使用 Semantic Scholar API（免费，可选 API Key 提高速率）
API 文档: https://api.semanticscholar.org/api-docs/

用法:
  python semantic_scholar.py --paper "SelfEvolve" --arxiv 2406.03269
  python semantic_scholar.py --config ../config/projects.json --all
"""

import argparse
import json
import os
import sys
import time
from datetime import datetime
from collections import defaultdict
from pathlib import Path

try:
    import requests
except ImportError:
    print("请安装 requests: pip install requests")
    sys.exit(1)

S2_API_BASE = "https://api.semanticscholar.org/graph/v1"


def get_paper_by_arxiv(arxiv_id, api_key=None):
    """通过 arXiv ID 获取论文信息"""
    headers = {}
    if api_key:
        headers["x-api-key"] = api_key

    url = f"{S2_API_BASE}/paper/ArXiv:{arxiv_id}"
    params = {
        "fields": "title,authors,year,citationCount,referenceCount,publicationDate,"
                  "venue,externalIds,url,citations.url,citations.authors,citations.year,"
                  "citations.citationCount,citations.title,citations.venue"
    }

    resp = requests.get(url, headers=headers, params=params, timeout=30)
    if resp.status_code == 200:
        return resp.json()
    elif resp.status_code == 404:
        print(f"  Paper not found: ArXiv:{arxiv_id}")
        return None
    else:
        print(f"  S2 API error: {resp.status_code} - {resp.text[:200]}")
        return None


def get_paper_by_title(title, api_key=None):
    """通过标题搜索论文"""
    headers = {}
    if api_key:
        headers["x-api-key"] = api_key

    url = f"{S2_API_BASE}/paper/search"
    params = {
        "query": title,
        "limit": 5,
        "fields": "title,authors,year,citationCount,publicationDate,venue,externalIds,url"
    }

    resp = requests.get(url, headers=headers, params=params, timeout=30)
    if resp.status_code == 200:
        data = resp.json()
        if data.get("data"):
            return data["data"][0]  # 最相关结果
    return None


def get_citations_batch(paper_id, api_key=None, offset=0, limit=1000):
    """获取引用列表（分页）"""
    headers = {}
    if api_key:
        headers["x-api-key"] = api_key

    url = f"{S2_API_BASE}/paper/{paper_id}/citations"
    params = {
        "fields": "title,authors,year,citationCount,publicationDate,venue,externalIds",
        "offset": offset,
        "limit": limit,
    }

    resp = requests.get(url, headers=headers, params=params, timeout=30)
    if resp.status_code == 200:
        return resp.json()
    return None


def get_all_citations(paper_id, api_key=None, max_citations=5000):
    """获取全部引用"""
    all_citations = []
    offset = 0

    while True:
        result = get_citations_batch(paper_id, api_key, offset=offset)
        if not result or not result.get("data"):
            break

        for c in result["data"]:
            paper = c.get("citingPaper", {})
            if paper and paper.get("paperId"):
                all_citations.append({
                    "paper_id": paper.get("paperId"),
                    "title": paper.get("title", ""),
                    "year": paper.get("year"),
                    "citation_count": paper.get("citationCount", 0),
                    "venue": paper.get("venue", ""),
                    "authors": [a.get("name", "") for a in (paper.get("authors") or [])][:5],
                    "publication_date": paper.get("publicationDate", ""),
                    "arxiv_id": paper.get("externalIds", {}).get("ArXiv"),
                })

        offset += len(result["data"])
        if offset >= max_citations or not result.get("next"):
            break

        time.sleep(1)

    return all_citations


def citations_to_yearly(citations):
    """将引用按年聚合"""
    yearly = defaultdict(int)
    for c in citations:
        if c.get("year"):
            yearly[c["year"]] += 1

    result = []
    cumulative = 0
    for year in sorted(yearly.keys()):
        cumulative += yearly[year]
        result.append({
            "year": year,
            "new_citations": yearly[year],
            "cumulative": cumulative,
        })
    return result


def save_output(data, filepath):
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"  Saved: {filepath}")


def process_paper(title, arxiv_id=None, api_key=None, output_dir="../storage"):
    print(f"\n{'='*60}")
    print(f"S2 Paper: {title}")
    print(f"{'='*60}")

    result = {
        "title": title,
        "arxiv_id": arxiv_id,
        "collected_at": datetime.utcnow().isoformat() + "Z"
    }

    # 获取论文信息
    paper = None
    if arxiv_id:
        paper = get_paper_by_arxiv(arxiv_id, api_key)
    if not paper:
        paper = get_paper_by_title(title, api_key)

    if not paper:
        print(f"  Could not find paper: {title}")
        return result

    result["paper"] = {
        "paper_id": paper.get("paperId"),
        "title": paper.get("title"),
        "year": paper.get("year"),
        "citation_count": paper.get("citationCount", 0),
        "reference_count": paper.get("referenceCount", 0),
        "publication_date": paper.get("publicationDate"),
        "venue": paper.get("venue"),
        "authors": [a.get("name", "") for a in (paper.get("authors") or [])],
    }

    print(f"  Citations: {result['paper']['citation_count']}, "
          f"References: {result['paper']['reference_count']}")

    # 获取引用列表
    paper_id = paper.get("paperId")
    if paper_id:
        citations = get_all_citations(paper_id, api_key)
        yearly = citations_to_yearly(citations)

        result["citations_sampled"] = len(citations)
        result["citations_yearly"] = yearly
        result["top_citing_papers"] = sorted(citations,
                                              key=lambda x: x.get("citation_count", 0),
                                              reverse=True)[:20]

        print(f"  Citations sampled: {len(citations)}, years: {len(yearly)}")

    safe_name = title.replace(" ", "_").replace("/", "_")[:50]
    filepath = os.path.join(output_dir, "propagation", f"{safe_name}_citations.json")
    save_output(result, filepath)
    return result


def main():
    parser = argparse.ArgumentParser(description="Semantic Scholar Citation Tracker")
    parser.add_argument("--paper", help="Paper title")
    parser.add_argument("--arxiv", help="arXiv ID (e.g. 2406.03269)")
    parser.add_argument("--config", help="Path to projects.json config")
    parser.add_argument("--all", action="store_true", help="Process all papers in config")
    parser.add_argument("--api-key", help="Semantic Scholar API key")
    parser.add_argument("--output", default="../storage", help="Output directory")
    args = parser.parse_args()

    api_key = args.api_key or os.environ.get("S2_API_KEY")

    if args.paper:
        process_paper(args.paper, args.arxiv, api_key, args.output)
    elif args.config:
        with open(args.config) as f:
            config = json.load(f)
        for paper in config.get("academic_papers", []):
            try:
                process_paper(paper["title"], paper.get("arxiv_id"), api_key, args.output)
                time.sleep(2)
            except Exception as e:
                print(f"  Error: {e}")
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
