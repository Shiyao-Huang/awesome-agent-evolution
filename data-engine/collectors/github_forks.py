"""Collect GitHub fork data for repos."""
import sys, os
from collections import Counter

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from collectors.base import GitHubClient, save_json, add_common_args, resolve_repos
import argparse


def collect_forks(client, repo, output_dir):
    owner, name = repo.split("/")
    print(f"🍴 Collecting forks for {repo}")
    r = client.get(f"/repos/{owner}/{name}")
    if r.status_code != 200:
        print(f"  ❌ HTTP {r.status_code} for {repo}", file=sys.stderr)
        return None
    fork_count = r.json().get("forks_count", 0)
    forks = client.paginate(f"/repos/{owner}/{name}/forks", max_pages=3)

    top_by_stars = sorted(forks, key=lambda f: f.get("stargazers_count", 0), reverse=True)[:10]
    recent = sorted(forks, key=lambda f: f.get("created_at", ""), reverse=True)[:10]
    monthly = Counter()
    for f in forks:
        ts = f.get("created_at", "")[:7]
        if ts:
            monthly[ts] += 1

    data = {
        "full_name": repo, "forks_count": fork_count, "forks_sampled": len(forks),
        "top_forks": [{"full_name": f.get("full_name"), "stars": f.get("stargazers_count", 0)} for f in top_by_stars],
        "recent_forks": [{"full_name": f.get("full_name"), "created_at": f.get("created_at")} for f in recent],
        "monthly_counts": dict(sorted(monthly.items())),
    }
    save_json(output_dir, f"{repo.replace('/', '_')}_forks.json", repo, "github_forks", data)
    return data


def main():
    parser = argparse.ArgumentParser(description="GitHub Forks Collector")
    add_common_args(parser)
    args = parser.parse_args()
    client = GitHubClient(args.token)
    for repo in resolve_repos(args):
        collect_forks(client, repo, args.output)
        client.throttle()


if __name__ == "__main__":
    main()
