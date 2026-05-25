#!/usr/bin/env python3
"""Collect issue and pull-request data for a GitHub repository.

Uses the public GitHub REST API:
  GET /repos/{owner}/{repo}/issues?state=all&per_page=100  -- paginated

The GitHub issues endpoint returns both issues and PRs; PRs are identified by
the presence of a `pull_request` key.

Output file: {owner}_{repo}_issues.json
"""

import argparse
import sys
from collections import Counter

from dateutil.parser import isoparse

try:
    from collectors.base import GitHubClient, save_json, add_common_args, resolve_repos, log
except ImportError:
    sys.path.insert(0, ".")
    from collectors.base import GitHubClient, save_json, add_common_args, resolve_repos, log

COLLECTOR = "github_issues"


def collect(client: GitHubClient, repo: str) -> dict:
    """Return issue/PR data for *repo*."""
    owner, name = repo.split("/", 1)

    # Fetch up to 1000 issues/PRs (10 pages x 100)
    items = client.paginate(
        f"/repos/{owner}/{name}/issues",
        per_page=100,
        max_pages=10,
        params={"state": "all", "sort": "updated", "direction": "desc"},
    )

    open_issues = 0
    closed_issues = 0
    open_prs = 0
    closed_prs = 0
    contributor_counts: Counter = Counter()
    label_counts: Counter = Counter()
    monthly_opened: dict[str, int] = {}
    recent_items = []

    for item in items:
        if not isinstance(item, dict):
            continue

        is_pr = "pull_request" in item
        state = item.get("state", "")
        user = item.get("user", {}).get("login", "unknown") if isinstance(item.get("user"), dict) else "unknown"

        if is_pr:
            if state == "open":
                open_prs += 1
            else:
                closed_prs += 1
        else:
            if state == "open":
                open_issues += 1
            else:
                closed_issues += 1

        contributor_counts[user] += 1

        for label in item.get("labels", []):
            if isinstance(label, dict):
                label_counts[label.get("name", "")] += 1

        created = item.get("created_at", "")
        try:
            dt = isoparse(created)
            key = dt.strftime("%Y-%m")
            monthly_opened[key] = monthly_opened.get(key, 0) + 1
        except (ValueError, TypeError):
            pass

        # Keep the 30 most recently updated items as samples
        if len(recent_items) < 30:
            recent_items.append({
                "number": item.get("number"),
                "title": item.get("title", "")[:120],
                "state": state,
                "type": "pull_request" if is_pr else "issue",
                "user": user,
                "created_at": created,
                "updated_at": item.get("updated_at", ""),
                "comments": item.get("comments", 0),
            })

    top_contributors = contributor_counts.most_common(20)
    top_labels = label_counts.most_common(15)

    return {
        "repo": repo,
        "issues_fetched": len(items),
        "open_issues": open_issues,
        "closed_issues": closed_issues,
        "open_pull_requests": open_prs,
        "closed_pull_requests": closed_prs,
        "top_contributors": [{"login": l, "count": c} for l, c in top_contributors],
        "top_labels": [{"label": l, "count": c} for l, c in top_labels],
        "monthly_opened": dict(sorted(monthly_opened.items())),
        "recent_items": recent_items,
    }


def main():
    parser = argparse.ArgumentParser(description="Collect GitHub issue/PR data")
    add_common_args(parser)
    args = parser.parse_args()

    repos = resolve_repos(args)
    if not repos:
        log.error("No repos to process. Use --repo, --all, or --priority.")
        sys.exit(1)

    client = GitHubClient(token=args.token)
    log.info("Collecting issues for %d repo(s) (auth=%s)", len(repos), client.authenticated())

    for repo in repos:
        log.info("-> %s", repo)
        data = collect(client, repo)
        filename = f"{client.safe_filename(repo)}_issues.json"
        save_json(args.output, filename, COLLECTOR, repo, data)

    log.info("Done.")


if __name__ == "__main__":
    main()
