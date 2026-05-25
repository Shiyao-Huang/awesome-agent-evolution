"""Collect GitHub issue/PR data for repos."""
import sys, os
from collections import Counter

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from collectors.base import GitHubClient, save_json, add_common_args, resolve_repos
import argparse


def collect_issues(client, repo, output_dir):
    owner, name = repo.split("/")
    print(f"📋 Collecting issues/PRs for {repo}")
    issues = client.paginate(f"/repos/{owner}/{name}/issues?state=all", max_pages=5)

    open_issues = [i for i in issues if i.get("state") == "open" and "pull_request" not in i]
    closed_issues = [i for i in issues if i.get("state") == "closed" and "pull_request" not in i]
    prs = [i for i in issues if "pull_request" in i]
    contributors = Counter(i.get("user", {}).get("login", "unknown") for i in issues)
    labels = Counter(lb["name"] for i in issues for lb in i.get("labels", []))
    monthly_opened = Counter()
    for i in issues:
        ts = i.get("created_at", "")[:7]
        if ts:
            monthly_opened[ts] += 1
    recent = sorted(issues, key=lambda i: i.get("created_at", ""), reverse=True)[:30]

    data = {
        "full_name": repo, "issues_sampled": len(issues),
        "open_issues": len(open_issues), "closed_issues": len(closed_issues), "pull_requests": len(prs),
        "top_contributors": dict(contributors.most_common(20)),
        "top_labels": dict(labels.most_common(20)),
        "monthly_opened": dict(sorted(monthly_opened.items())),
        "recent": [{"number": i.get("number"), "title": i.get("title", "")[:80], "state": i.get("state"), "is_pr": "pull_request" in i, "created_at": i.get("created_at"), "user": i.get("user", {}).get("login")} for i in recent],
    }
    save_json(output_dir, f"{repo.replace('/', '_')}_issues.json", repo, "github_issues", data)
    return data


def main():
    parser = argparse.ArgumentParser(description="GitHub Issues Collector")
    add_common_args(parser)
    args = parser.parse_args()
    client = GitHubClient(args.token)
    for repo in resolve_repos(args):
        collect_issues(client, repo, args.output)
        client.throttle()


if __name__ == "__main__":
    main()
