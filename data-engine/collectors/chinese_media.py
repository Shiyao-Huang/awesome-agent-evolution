#!/usr/bin/env python3
"""
Chinese Media Tracker - 追踪中文平台（知乎、微信公众号、B站、CSDN）的项目讨论

使用公开搜索接口和 RSS 源

用法:
  python chinese_media.py --query "AutoGPT" --output ../storage
  python chinese_media.py --config ../config/projects.json --all
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


def search_zhihu(query, limit=20):
    """搜索知乎"""
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                       "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json",
    }

    results = []
    try:
        url = "https://www.zhihu.com/api/v4/search_v3"
        params = {
            "q": query,
            "t": "general",
            "correction": 1,
            "offset": 0,
            "limit": limit,
        }
        resp = requests.get(url, headers=headers, params=params, timeout=15)
        if resp.status_code == 200:
            data = resp.json()
            for item in data.get("data", []):
                obj = item.get("object", {})
                results.append({
                    "platform": "zhihu",
                    "type": item.get("type", ""),
                    "title": obj.get("title", ""),
                    "excerpt": obj.get("excerpt", "")[:300],
                    "url": obj.get("url", ""),
                    "author": obj.get("author", {}).get("name", ""),
                    "voteup_count": obj.get("voteup_count", 0),
                    "comment_count": obj.get("comment_count", 0),
                    "created_time": obj.get("created_time", 0),
                })
    except Exception as e:
        print(f"  Zhihu search error: {e}")

    return results


def search_csdn(query, limit=20):
    """搜索 CSDN"""
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        "Accept": "application/json",
    }

    results = []
    try:
        url = "https://so.csdn.net/api/v3/search"
        params = {
            "q": query,
            "t": "all",
            "p": 1,
            "s": 0,
            "lv": 3,
        }
        resp = requests.get(url, headers=headers, params=params, timeout=15)
        if resp.status_code == 200:
            data = resp.json()
            for item in data.get("result", []):
                results.append({
                    "platform": "csdn",
                    "title": item.get("title", ""),
                    "url": item.get("url", ""),
                    "description": item.get("description", "")[:300],
                    "author": item.get("nickname", ""),
                    "view_count": item.get("view_count", 0),
                    "like_count": item.get("digg_count", 0),
                    "comment_count": item.get("comment_count", 0),
                    "created_at": item.get("created_at", ""),
                })
    except Exception as e:
        print(f"  CSDN search error: {e}")

    return results


def search_bilibili(query, limit=20):
    """搜索 B站视频"""
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        "Accept": "application/json",
    }

    results = []
    try:
        url = "https://api.bilibili.com/x/web-interface/search/type"
        params = {
            "keyword": query,
            "search_type": "video",
            "page": 1,
            "page_size": limit,
        }
        resp = requests.get(url, headers=headers, params=params, timeout=15)
        if resp.status_code == 200:
            data = resp.json()
            for item in data.get("data", {}).get("result", []):
                results.append({
                    "platform": "bilibili",
                    "title": item.get("title", "").replace('<em class="keyword">', "").replace("</em>", ""),
                    "url": f"https://www.bilibili.com/video/{item.get('bvid', '')}",
                    "author": item.get("author", ""),
                    "play_count": item.get("play", 0),
                    "danmaku_count": item.get("video_review", 0),
                    "favorite_count": item.get("favorites", 0),
                    "duration": item.get("duration", ""),
                    "pubdate": item.get("pubdate", 0),
                })
    except Exception as e:
        print(f"  Bilibili search error: {e}")

    return results


def search_wechat_articles(query, limit=10):
    """搜索微信公众号文章（使用公开搜索页面）"""
    # WeChat 公众号搜索需要登录或有反爬限制
    # 这里使用搜狗微信搜索作为替代
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    }

    results = []
    try:
        url = "https://weixin.sogou.com/weixin"
        params = {
            "type": 2,  # 文章
            "query": query,
            "s_from": "input",
        }
        resp = requests.get(url, headers=headers, params=params, timeout=15)
        if resp.status_code == 200:
            # 解析 HTML（简单正则提取）
            import re
            titles = re.findall(r'<h3[^>]*><a[^>]*>(.*?)</a>', resp.text)
            urls = re.findall(r'href="(https?://mp\.weixin\.qq\.com/[^"]*)"', resp.text)

            for i in range(min(len(titles), len(urls), limit)):
                clean_title = re.sub(r'<[^>]+>', '', titles[i])
                results.append({
                    "platform": "wechat",
                    "title": clean_title,
                    "url": urls[i],
                })
    except Exception as e:
        print(f"  WeChat search error: {e}")

    return results


def search_all_platforms(query):
    """跨平台搜索"""
    all_results = []

    # 知乎
    print("  Searching Zhihu...")
    zhihu = search_zhihu(query)
    all_results.extend(zhihu)
    print(f"    Found {len(zhihu)} results")

    time.sleep(2)

    # CSDN
    print("  Searching CSDN...")
    csdn = search_csdn(query)
    all_results.extend(csdn)
    print(f"    Found {len(csdn)} results")

    time.sleep(2)

    # B站
    print("  Searching Bilibili...")
    bilibili = search_bilibili(query)
    all_results.extend(bilibili)
    print(f"    Found {len(bilibili)} results")

    time.sleep(2)

    # 微信
    print("  Searching WeChat...")
    wechat = search_wechat_articles(query)
    all_results.extend(wechat)
    print(f"    Found {len(wechat)} results")

    return all_results


def results_to_platform_summary(results):
    """按平台聚合统计"""
    summary = defaultdict(lambda: {"count": 0, "total_engagement": 0})
    for r in results:
        platform = r.get("platform", "unknown")
        summary[platform]["count"] += 1
        engagement = (r.get("voteup_count", 0) or 0) + \
                     (r.get("play_count", 0) or 0) + \
                     (r.get("view_count", 0) or 0) + \
                     (r.get("like_count", 0) or 0)
        summary[platform]["total_engagement"] += engagement

    return dict(summary)


def save_output(data, filepath):
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"  Saved: {filepath}")


def process_project(name, repo, output_dir):
    print(f"\n{'='*60}")
    print(f"Chinese Media: {name} ({repo})")
    print(f"{'='*60}")

    result = {
        "project": name,
        "repo": repo,
        "collected_at": datetime.utcnow().isoformat() + "Z"
    }

    queries = [name]
    if "/" in repo:
        queries.append(repo.split("/")[-1])

    all_results = []
    for query in queries:
        results = search_all_platforms(query)
        all_results.extend(results)
        time.sleep(3)

    platform_summary = results_to_platform_summary(all_results)

    result["total_results"] = len(all_results)
    result["platform_summary"] = platform_summary
    result["results_sample"] = all_results[:50]

    print(f"  Total: {len(all_results)} results across {len(platform_summary)} platforms")

    safe_name = repo.replace("/", "_")
    filepath = os.path.join(output_dir, "propagation", f"{safe_name}_chinese.json")
    save_output(result, filepath)
    return result


def main():
    parser = argparse.ArgumentParser(description="Chinese Media Tracker")
    parser.add_argument("--query", help="Single search query")
    parser.add_argument("--config", help="Path to projects.json config")
    parser.add_argument("--all", action="store_true", help="Process all projects")
    parser.add_argument("--output", default="../storage", help="Output directory")
    args = parser.parse_args()

    if args.query:
        results = search_all_platforms(args.query)
        for r in results[:10]:
            print(f"  [{r.get('platform')}] {r.get('title', '')[:60]}")
    elif args.config:
        with open(args.config) as f:
            config = json.load(f)
        for proj in config.get("target_projects", []):
            try:
                process_project(proj["name"], proj["repo"], args.output)
            except Exception as e:
                print(f"  Error: {e}")
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
