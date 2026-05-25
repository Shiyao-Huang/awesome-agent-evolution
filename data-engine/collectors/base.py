"""Shared utilities for GitHub data collectors."""

import json
import logging
import os
import sys
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Optional

import requests

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------

def setup_logger(name: str) -> logging.Logger:
    logger = logging.getLogger(name)
    if not logger.handlers:
        handler = logging.StreamHandler(sys.stdout)
        handler.setFormatter(
            logging.Formatter("%(asctime)s [%(name)s] %(levelname)s %(message)s",
                              datefmt="%Y-%m-%d %H:%M:%S")
        )
        logger.addHandler(handler)
        logger.setLevel(logging.INFO)
    return logger

log = setup_logger("github")

# ---------------------------------------------------------------------------
# GitHub API client
# ---------------------------------------------------------------------------

GITHUB_API = "https://api.github.com"

# Conservative defaults: 60 req/hr unauthenticated, 5000 req/hr authenticated.
UNAUTH_INTERVAL = 61.0       # seconds between requests without a token
AUTH_INTERVAL = 0.8          # seconds between requests with a token
MAX_RETRIES = 5
BACKOFF_BASE = 2             # exponential-backoff multiplier


class GitHubClient:
    """Lightweight wrapper around the GitHub REST API with rate-limit handling."""

    def __init__(self, token: Optional[str] = None):
        self.token = token
        self.session = requests.Session()
        self.session.headers.update({
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "awesome-evolution-data-engine/1.0",
        })
        if token:
            self.session.headers["Authorization"] = f"Bearer {token}"
        self._last_request_time = 0.0
        self._min_interval = AUTH_INTERVAL if token else UNAUTH_INTERVAL

    # -- public helpers -------------------------------------------------------

    def authenticated(self) -> bool:
        return self.token is not None

    def safe_filename(self, repo: str) -> str:
        """Convert 'owner/repo' to 'owner_repo'."""
        return repo.replace("/", "_")

    # -- core request ---------------------------------------------------------

    def get(self, path: str, *, headers: Optional[Dict] = None,
            params: Optional[Dict] = None) -> Optional[requests.Response]:
        """Perform a GET with automatic rate-limit sleeping and retry on 5xx."""
        url = f"{GITHUB_API}{path}"
        for attempt in range(1, MAX_RETRIES + 1):
            self._throttle()
            try:
                resp = self.session.get(url, headers=headers, params=params,
                                        timeout=30)
            except requests.RequestException as exc:
                log.warning("Network error on %s (attempt %d/%d): %s",
                            path, attempt, MAX_RETRIES, exc)
                self._backoff(attempt)
                continue

            # --- rate-limit handling ---
            if resp.status_code == 403:
                remaining = int(resp.headers.get("X-RateLimit-Remaining", 1))
                if remaining == 0:
                    reset = int(resp.headers.get("X-RateLimit-Reset", 0))
                    wait = max(reset - time.time(), 1) + 1
                    log.warning("Rate limit hit. Sleeping %.0f s until reset.", wait)
                    time.sleep(wait)
                    continue
                # non-rate-limit 403 -- treat as permanent
                log.error("403 Forbidden on %s: %s", path,
                          resp.json().get("message", "")[:200])
                return None

            if resp.status_code == 404:
                log.warning("404 Not Found: %s", path)
                return None

            if resp.status_code >= 500:
                log.warning("Server error %d on %s (attempt %d/%d)",
                            resp.status_code, path, attempt, MAX_RETRIES)
                self._backoff(attempt)
                continue

            # successful response (2xx / 3xx / 4xx-not-handled-above)
            return resp

        log.error("All %d attempts failed for %s", MAX_RETRIES, path)
        return None

    def paginate(self, path: str, *, per_page: int = 100,
                 max_pages: int = 50, headers: Optional[Dict] = None,
                 params: Optional[Dict] = None) -> List[dict]:
        """Paginate through a GitHub list endpoint, returning all items."""
        items: List[dict] = []
        p = {**(params or {}), "per_page": per_page, "page": 1}
        merged_headers = {**(headers or {})}

        for _ in range(max_pages):
            resp = self.get(path, headers=merged_headers, params=p)
            if resp is None:
                break
            page_items = resp.json()
            if not isinstance(page_items, list) or len(page_items) == 0:
                break
            items.extend(page_items)
            if len(page_items) < per_page:
                break
            p["page"] += 1
        return items

    # -- internals ------------------------------------------------------------

    def _throttle(self):
        """Enforce minimum interval between consecutive requests."""
        elapsed = time.time() - self._last_request_time
        if elapsed < self._min_interval:
            time.sleep(self._min_interval - elapsed)
        self._last_request_time = time.time()

    def _backoff(self, attempt: int):
        delay = BACKOFF_BASE ** attempt
        log.info("Backing off %.1f s ...", delay)
        time.sleep(delay)


# ---------------------------------------------------------------------------
# Output helpers
# ---------------------------------------------------------------------------

def save_json(output_dir: str, filename: str, collector_name: str,
              repo: str, data: dict) -> str:
    """Wrap *data* with metadata and write to *output_dir/filename*."""
    os.makedirs(output_dir, exist_ok=True)
    payload = {
        "metadata": {
            "collection_timestamp": datetime.now(timezone.utc).isoformat(),
            "repo": repo,
            "collector": collector_name,
        },
        "data": data,
    }
    path = os.path.join(output_dir, filename)
    with open(path, "w", encoding="utf-8") as fh:
        json.dump(payload, fh, indent=2, ensure_ascii=False)
    log.info("Saved %s (%d bytes)", path, os.path.getsize(path))
    return path


# ---------------------------------------------------------------------------
# CLI helpers shared by all collector scripts
# ---------------------------------------------------------------------------

def add_common_args(parser):
    """Add --token, --output, --config, --all, --repo, --priority flags."""
    parser.add_argument("--token", default=os.environ.get("GITHUB_TOKEN"),
                        help="GitHub personal-access token (or set GITHUB_TOKEN env)")
    parser.add_argument("--output", default="./storage",
                        help="Directory for JSON output (default: ./storage)")
    parser.add_argument("--config", default=None,
                        help="Path to projects.json (default: config/projects.json)")
    parser.add_argument("--repo", action="append", default=[],
                        help="Specific repo(s) in owner/repo format (repeatable)")
    parser.add_argument("--all", action="store_true", dest="all_projects",
                        help="Collect for all projects in config")
    parser.add_argument("--priority", choices=["critical", "high", "medium"],
                        help="Filter config projects by priority")


def resolve_repos(args) -> List[str]:
    """Return the list of repos to process based on CLI flags."""
    if args.repo:
        return args.repo

    config_path = args.config
    if config_path is None:
        # Walk up from this file to find config/projects.json
        base = Path(__file__).resolve().parent.parent
        config_path = str(base / "config" / "projects.json")

    if not os.path.exists(config_path):
        log.error("Config not found: %s", config_path)
        return []

    with open(config_path, encoding="utf-8") as fh:
        cfg = json.load(fh)

    projects = cfg.get("projects", [])
    if not args.all_projects and args.priority:
        projects = [p for p in projects if p["priority"] == args.priority]
    elif not args.all_projects:
        # default: critical only when nothing specified
        projects = [p for p in projects if p["priority"] == "critical"]

    return [p["repo"] for p in projects]
