"""Shared utilities for GitHub data collectors."""
import json, os, time, sys, argparse
from datetime import datetime, timezone
from pathlib import Path

import requests

API = "https://api.github.com"


class GitHubClient:
    def __init__(self, token=None):
        self.token = token
        self.session = requests.Session()
        if token:
            self.session.headers["Authorization"] = f"token {token}"
        self.session.headers["Accept"] = "application/vnd.github.v3+json"

    def get(self, path, **kwargs):
        url = f"{API}{path}" if path.startswith("/") else path
        r = self.session.get(url, **kwargs)
        self._handle_rate(r)
        if r.status_code >= 500:
            for attempt in range(3):
                time.sleep(2 ** attempt)
                r = self.session.get(url, **kwargs)
                self._handle_rate(r)
                if r.status_code < 500:
                    break
        return r

    def _handle_rate(self, r):
        remaining = int(r.headers.get("X-RateLimit-Remaining", 1))
        if remaining <= 1:
            reset = int(r.headers.get("X-RateLimit-Reset", time.time() + 60))
            wait = max(reset - time.time(), 1) + 1
            print(f"  ⏳ Rate limit hit, sleeping {wait:.0f}s", file=sys.stderr)
            time.sleep(wait)

    def throttle(self):
        if not self.token:
            time.sleep(61)
        else:
            time.sleep(0.8)

    def paginate(self, path, per_page=100, max_pages=10):
        results = []
        for page in range(1, max_pages + 1):
            r = self.get(path, params={"page": page, "per_page": per_page})
            if r.status_code != 200:
                print(f"  ⚠️ {path} page {page}: HTTP {r.status_code}", file=sys.stderr)
                break
            items = r.json()
            if not items:
                break
            results.extend(items)
            if len(items) < per_page:
                break
            self.throttle()
        return results


def save_json(output_dir, filename, repo, collector_name, data):
    ts = datetime.now(timezone.utc).isoformat()
    payload = {
        "metadata": {"collection_timestamp": ts, "repo": repo, "collector_name": collector_name},
        "data": data,
    }
    os.makedirs(output_dir, exist_ok=True)
    path = os.path.join(output_dir, filename)
    with open(path, "w") as f:
        json.dump(payload, f, indent=2, default=str)
    print(f"  💾 Saved {path}")
    return path


def add_common_args(parser):
    parser.add_argument("--token", default=None, help="GitHub PAT")
    parser.add_argument("--output", default="./storage", help="Output directory")
    parser.add_argument("--config", default="./config/projects.json", help="Projects config")
    parser.add_argument("--repo", default=None, help="Single repo (owner/repo)")
    parser.add_argument("--all", action="store_true", dest="all_projects", help="All projects")
    parser.add_argument("--priority", default=None, choices=["critical", "high", "medium"])


def resolve_repos(args):
    if args.repo:
        return [args.repo]
    if not os.path.exists(args.config):
        print(f"Config not found: {args.config}", file=sys.stderr)
        return []
    with open(args.config) as f:
        projects = json.load(f)
    if args.priority:
        projects = [p for p in projects if p.get("priority") == args.priority]
    if args.all_projects:
        return [p["repo"] for p in projects]
    if args.priority:
        return [p["repo"] for p in projects]
    return [p["repo"] for p in projects if p.get("priority") == "critical"]
