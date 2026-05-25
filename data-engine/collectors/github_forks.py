#!/usr/bin/env python3
"""Collect fork data for a GitHub repository.

Uses the public GitHub REST API:
  GET /repos/{owner}/{repo}        -- fork count
  GET /repos/{owner}/{repo}/forks  -- list forks with pagination

Output file: {owner}_{repo}_forks.json
"""

import argparse
import sys

from dateutil.parser import isoparse

try:
    from collectors.base import GitHubClient, save_json, add_common_args, resolve_repos, log
except ImportError:
    sys.path.insert(0, ".")
    from collectors.base import GitHubClient, save_json, add_common_args, resolve_repos, log

COLLECTOR = "github_forks"


def collect(client: GitHubClient, repo: str) -> dict:
    """Return fork data for *repo*."""
    owner, name = repo.split("/", 1)

    # 1. Repo-level fork count
    resp = client.get(f"/repos/{owner}/{name}")
    if resp is None:
        return {"error": f"Could not fetch repo {repo}"}
    repo_data = resp.json()
    total_forks = repo_data.get("forks_count", 0)

    # 2. Paginate through forks (sorted by newest)
    forks = client.paginate(
        f"/repos/{owner}/{name}/forks",
        per_page=100,
        max_pages=10,
        params={"sort": "newest"},
    )

    # 3. Extract useful information
    fork_list = []
    for f in forks:
        if not isinstance(f, dict):
            continue
        fork_list.append({
            "full_name": f.get("full_name", ""),
            "stars": f.get("stargazers_count", 0),
            "forks": f.get("forks_count", 0),
            "open_issues": f.get("open_issues_count", 0),
            "created_at": f.get("created_at", ""),
            "pushed_at": f.get("pushed_at", ""),
            "language": f.get("language", ""),
        })

    # Top forks by star count
    top_by_stars = sorted(fork_list, key=lambda x: x["stars"], reverse=True)[:20]

    # Recent forks (already sorted by newest from API)
    recent = fork_list[:20]

    # Forks created per month
    monthly: dict[str, int] = {}
    for f in fork_list:
        try:
            dt = isoparse(f["created_at"])
        except (ValueError, TypeError):
            continue
        key = dt.strftime("%Y-%m")
        monthly[key] = monthly.get(key, 0) + 1

    return {
        "repo": repo,
        "total_forks": total_forks,
        "forks_fetched": len(fork_list),
        "top_forks_by_stars": top_by_stars,
        "recent_forks": recent,
        "monthly_counts": dict(sorted(monthly.items())),
    }


def main():
    parser = argparse.ArgumentParser(description="Collect GitHub fork data")
    add_common_args(parser)
    args = parser.parse_args()

    repos = resolve_repos(args)
    if not repos:
        log.error("No repos to process. Use --repo, --all, or --priority.")
        sys.exit(1)

    client = GitHubClient(token=args.token)
    log.info("Collecting forks for %d repo(s) (auth=%s)", len(repos), client.authenticated())

    for repo in repos:
        log.info("-> %s", repo)
        data = collect(client, repo)
        filename = f"{client.safe_filename(repo)}_forks.json"
        save_json(args.output, filename, COLLECTOR, repo, data)

    log.info("Done.")


if __name__ == "__main__":
    main()
