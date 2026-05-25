"""Collect GitHub repo events."""
import sys, os
from collections import Counter

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from collectors.base import GitHubClient, save_json, add_common_args, resolve_repos
import argparse


def collect_events(client, repo, output_dir):
    owner, name = repo.split("/")
    print(f"📊 Collecting events for {repo}")

    events = client.paginate(f"/repos/{owner}/{name}/events", max_pages=3)

    type_dist = Counter(e.get("type", "unknown") for e in events)
    actors = Counter(e.get("actor", {}).get("login", "unknown") for e in events)

    daily = Counter()
    for e in events:
        ts = e.get("created_at", "")[:10]
        if ts:
            daily[ts] += 1

    pushes = [e for e in events if e.get("type") == "PushEvent"][:10]
    releases = [e for e in events if e.get("type") == "ReleaseEvent"][:5]
    pr_events = [e for e in events if e.get("type") == "PullRequestEvent"][:10]

    data = {
        "full_name": repo,
        "events_sampled": len(events),
        "type_distribution": dict(type_dist.most_common()),
        "top_actors": dict(actors.most_common(15)),
        "daily_activity": dict(sorted(daily.items())),
        "recent_pushes": [
            {"actor": e.get("actor", {}).get("login"), "created_at": e.get("created_at")}
            for e in pushes
        ],
        "recent_releases": [
            {"created_at": e.get("created_at")} for e in releases
        ],
        "recent_pr_events": [
            {"actor": e.get("actor", {}).get("login"), "created_at": e.get("created_at")}
            for e in pr_events
        ],
    }
    safe = repo.replace("/", "_")
    save_json(output_dir, f"{safe}_events.json", repo, "github_events", data)
    return data


def main():
    parser = argparse.ArgumentParser(description="GitHub Events Collector")
    add_common_args(parser)
    args = parser.parse_args()
    client = GitHubClient(args.token)
    repos = resolve_repos(args)
    if not repos:
        print("No repos to process", file=sys.stderr)
        return
    for repo in repos:
        collect_events(client, repo, args.output)
        client.throttle()


if __name__ == "__main__":
    main()
