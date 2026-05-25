#!/usr/bin/env python3
"""Collect recent repository events for a GitHub repository.

Uses the public GitHub REST API:
  GET /repos/{owner}/{repo}/events?per_page=100  -- recent events (up to 10 pages)

The events endpoint returns a mix of event types (PushEvent, IssuesEvent,
PullRequestEvent, ReleaseEvent, WatchEvent, ForkEvent, etc.).

Output file: {owner}_{repo}_events.json
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

COLLECTOR = "github_events"


def collect(client: GitHubClient, repo: str) -> dict:
    """Return event data for *repo*."""
    owner, name = repo.split("/", 1)

    # The events API returns up to 300 items across 10 pages of 30 each
    # (GitHub caps at ~10 pages for repo events)
    events = client.paginate(
        f"/repos/{owner}/{name}/events",
        per_page=100,
        max_pages=10,
    )

    type_counts: Counter = Counter()
    actor_counts: Counter = Counter()
    daily_activity: dict[str, int] = {}
    recent_pushes = []
    recent_releases = []
    recent_pr_events = []

    for ev in events:
        if not isinstance(ev, dict):
            continue

        event_type = ev.get("type", "Unknown")
        type_counts[event_type] += 1

        actor = ev.get("actor", {})
        login = actor.get("login", "unknown") if isinstance(actor, dict) else "unknown"
        actor_counts[login] += 1

        created = ev.get("created_at", "")
        try:
            dt = isoparse(created)
            day = dt.strftime("%Y-%m-%d")
            daily_activity[day] = daily_activity.get(day, 0) + 1
        except (ValueError, TypeError):
            day = "unknown"

        payload = ev.get("payload", {})

        # Capture recent pushes
        if event_type == "PushEvent" and len(recent_pushes) < 20:
            commits = payload.get("commits", [])
            recent_pushes.append({
                "actor": login,
                "created_at": created,
                "ref": payload.get("ref", ""),
                "commit_count": len(commits) if isinstance(commits, list) else 0,
                "head": payload.get("head", "")[:12],
            })

        # Capture recent releases
        if event_type == "ReleaseEvent" and len(recent_releases) < 10:
            release = payload.get("release", {})
            recent_releases.append({
                "actor": login,
                "created_at": created,
                "tag": payload.get("action", ""),
                "name": release.get("name", release.get("tag_name", "")),
                "prerelease": release.get("prerelease", False),
            })

        # Capture recent PR events
        if event_type == "PullRequestEvent" and len(recent_pr_events) < 20:
            pr = payload.get("pull_request", {})
            recent_pr_events.append({
                "actor": login,
                "created_at": created,
                "action": payload.get("action", ""),
                "number": pr.get("number"),
                "title": pr.get("title", "")[:120],
                "state": pr.get("state", ""),
                "merged": pr.get("merged", False),
            })

    return {
        "repo": repo,
        "events_fetched": len(events),
        "event_type_distribution": dict(type_counts.most_common()),
        "top_actors": [{"login": l, "count": c} for l, c in actor_counts.most_common(20)],
        "daily_activity": dict(sorted(daily_activity.items())),
        "recent_pushes": recent_pushes,
        "recent_releases": recent_releases,
        "recent_pull_request_events": recent_pr_events,
    }


def main():
    parser = argparse.ArgumentParser(description="Collect GitHub repository events")
    add_common_args(parser)
    args = parser.parse_args()

    repos = resolve_repos(args)
    if not repos:
        log.error("No repos to process. Use --repo, --all, or --priority.")
        sys.exit(1)

    client = GitHubClient(token=args.token)
    log.info("Collecting events for %d repo(s) (auth=%s)", len(repos), client.authenticated())

    for repo in repos:
        log.info("-> %s", repo)
        data = collect(client, repo)
        filename = f"{client.safe_filename(repo)}_events.json"
        save_json(args.output, filename, COLLECTOR, repo, data)

    log.info("Done.")


if __name__ == "__main__":
    main()
