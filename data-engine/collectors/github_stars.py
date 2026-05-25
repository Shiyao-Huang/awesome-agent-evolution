#!/usr/bin/env python3
"""Collect star history for a GitHub repository.

Uses the public GitHub REST API:
  GET /repos/{owner}/{repo}           -- current star count
  GET /repos/{owner}/{repo}/stargazers -- stargazer timeline (with timestamp header)

Output file: {owner}_{repo}_stars.json
"""

import argparse
import sys
from datetime import datetime

from dateutil.parser import isoparse

# Allow running as both package and standalone script
try:
    from collectors.base import GitHubClient, save_json, add_common_args, resolve_repos, log
except ImportError:
    sys.path.insert(0, ".")
    from collectors.base import GitHubClient, save_json, add_common_args, resolve_repos, log

COLLECTOR = "github_stars"


def collect(client: GitHubClient, repo: str) -> dict:
    """Return star-history data for *repo*."""
    owner, name = repo.split("/", 1)

    # 1. Current repo info for star count
    resp = client.get(f"/repos/{owner}/{name}")
    if resp is None:
        return {"error": f"Could not fetch repo {repo}"}
    repo_data = resp.json()
    current_stars = repo_data.get("stargazers_count", 0)

    # 2. Stargazer timeline (requires special Accept header for timestamps)
    stargazers = client.paginate(
        f"/repos/{owner}/{name}/stargazers",
        per_page=100,
        max_pages=40,  # up to 4000 stargazer records
        headers={"Accept": "application/vnd.github.v3.star+json"},
    )

    # Build timeline: list of {starred_at, user}
    timeline = []
    for entry in stargazers:
        if not isinstance(entry, dict):
            continue
        starred_at = entry.get("starred_at")
        user = entry.get("user", {}).get("login", "unknown") if isinstance(entry.get("user"), dict) else "unknown"
        if starred_at:
            timeline.append({"starred_at": starred_at, "user": user})

    # 3. Aggregate by month
    monthly: dict[str, int] = {}
    for t in timeline:
        try:
            dt = isoparse(t["starred_at"])
        except (ValueError, TypeError):
            continue
        key = dt.strftime("%Y-%m")
        monthly[key] = monthly.get(key, 0) + 1

    return {
        "repo": repo,
        "current_stars": current_stars,
        "stargazers_fetched": len(timeline),
        "timeline_sample": timeline[:50],
        "monthly_counts": dict(sorted(monthly.items())),
    }


def main():
    parser = argparse.ArgumentParser(description="Collect GitHub star history")
    add_common_args(parser)
    args = parser.parse_args()

    repos = resolve_repos(args)
    if not repos:
        log.error("No repos to process. Use --repo, --all, or --priority.")
        sys.exit(1)

    client = GitHubClient(token=args.token)
    log.info("Collecting stars for %d repo(s) (auth=%s)", len(repos), client.authenticated())

    for repo in repos:
        log.info("-> %s", repo)
        data = collect(client, repo)
        filename = f"{client.safe_filename(repo)}_stars.json"
        save_json(args.output, filename, COLLECTOR, repo, data)

    log.info("Done.")


if __name__ == "__main__":
    main()
