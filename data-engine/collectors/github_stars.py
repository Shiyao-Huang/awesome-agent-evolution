"""Collect GitHub star history for repos."""
import sys, os
from collections import Counter

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from collectors.base import GitHubClient, save_json, add_common_args, resolve_repos
import argparse


def collect_stars(client, repo, output_dir):
    owner, name = repo.split("/")
    print(f"⭐ Collecting stars for {repo}")
    r = client.get(f"/repos/{owner}/{name}")
    if r.status_code != 200:
        print(f"  ❌ HTTP {r.status_code} for {repo}", file=sys.stderr)
        return None
    star_count = r.json().get("stargazers_count", 0)

    client.session.headers["Accept"] = "application/vnd.github.v3.star+json"
    stargazers = client.paginate(f"/repos/{owner}/{name}/stargazers", max_pages=5)
    client.session.headers["Accept"] = "application/vnd.github.v3+json"

    monthly = Counter()
    for sg in stargazers:
        ts = sg.get("starred_at", "")[:7]
        if ts:
            monthly[ts] += 1

    data = {"full_name": repo, "stars": star_count, "stargazers_sampled": len(stargazers), "monthly_counts": dict(sorted(monthly.items()))}
    save_json(output_dir, f"{repo.replace('/', '_')}_stars.json", repo, "github_stars", data)
    return data


def main():
    parser = argparse.ArgumentParser(description="GitHub Stars Collector")
    add_common_args(parser)
    args = parser.parse_args()
    client = GitHubClient(args.token)
    for repo in resolve_repos(args):
        collect_stars(client, repo, args.output)
        client.throttle()


if __name__ == "__main__":
    main()
