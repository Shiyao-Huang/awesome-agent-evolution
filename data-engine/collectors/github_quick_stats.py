"""Lightweight GitHub repo stats collector - 1 API call per repo.
Designed for unauthenticated mode (60 req/hr). Collects stars, forks,
issues, watchers, topics, language, license, last activity in one call.
"""
import sys, os, json, argparse, time
from datetime import datetime, timezone

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from collectors.base import GitHubClient, save_json


def collect_repo_stats(client, repo, output_dir):
    owner, name = repo.split("/")
    r = client.get(f"/repos/{owner}/{name}")
    if r.status_code != 200:
        print(f"  ❌ {repo}: HTTP {r.status_code}", file=sys.stderr)
        return None

    d = r.json()
    data = {
        "full_name": repo,
        "description": d.get("description", "")[:200],
        "stars": d.get("stargazers_count", 0),
        "forks": d.get("forks_count", 0),
        "open_issues": d.get("open_issues_count", 0),
        "watchers": d.get("subscribers_count", 0),
        "language": d.get("language"),
        "license": (d.get("license") or {}).get("spdx_id"),
        "topics": d.get("topics", []),
        "created_at": d.get("created_at"),
        "updated_at": d.get("updated_at"),
        "pushed_at": d.get("pushed_at"),
        "default_branch": d.get("default_branch"),
        "archived": d.get("archived", False),
        "network_count": d.get("network_count", 0),
    }
    safe = repo.replace("/", "_")
    save_json(output_dir, f"{safe}_stats.json", repo, "github_quick_stats", data)
    print(f"  ✅ {repo}: ⭐{data['stars']} 🍴{data['forks']} 📋{data['open_issues']}")
    return data


def main():
    parser = argparse.ArgumentParser(description="Quick GitHub repo stats (1 call/repo)")
    parser.add_argument("--token", default=None)
    parser.add_argument("--output", default="./storage")
    parser.add_argument("--config", default="./config/projects.json")
    parser.add_argument("--repo", default=None)
    parser.add_argument("--all", action="store_true", dest="all_projects")
    parser.add_argument("--priority", default=None, choices=["critical", "high", "medium"])
    parser.add_argument("--limit", type=int, default=None)
    args = parser.parse_args()

    token = args.token or os.environ.get("GITHUB_TOKEN")
    client = GitHubClient(token)

    # Resolve repos
    if args.repo:
        repos = [args.repo]
    else:
        with open(args.config) as f:
            projects = json.load(f)
        if args.priority:
            projects = [p for p in projects if p.get("priority") == args.priority]
        if args.all_projects or args.priority:
            repos = [p["repo"] for p in projects]
        else:
            repos = [p["repo"] for p in projects if p.get("priority") == "critical"]
        if args.limit:
            repos = repos[:args.limit]

    if not token:
        delay = 61  # unauthenticated: 1 req/min to stay safe
    else:
        delay = 0.8

    print(f"🚀 Quick stats for {len(repos)} repos (token={'YES' if token else 'NO'}, delay={delay}s)")
    ok, fail, all_data = 0, 0, []

    for i, repo in enumerate(repos):
        print(f"[{i+1}/{len(repos)}] ", end="")
        try:
            result = collect_repo_stats(client, repo, args.output)
            if result:
                ok += 1
                all_data.append(result)
            else:
                fail += 1
        except Exception as e:
            print(f"  ❌ {repo}: {e}", file=sys.stderr)
            fail += 1
        if i < len(repos) - 1:
            time.sleep(delay)

    # Save combined stats
    summary = {
        "collection_timestamp": datetime.now(timezone.utc).isoformat(),
        "repos_total": len(repos),
        "success": ok,
        "failed": fail,
        "token_used": bool(token),
        "repos": sorted(all_data, key=lambda x: x.get("stars", 0), reverse=True),
    }
    path = os.path.join(args.output, "_github_stats_summary.json")
    with open(path, "w") as f:
        json.dump(summary, f, indent=2, default=str)
    print(f"\n{'='*50}")
    print(f"📊 Done: {ok} ok, {fail} fail out of {len(repos)}")
    print(f"💾 Summary: {path}")


if __name__ == "__main__":
    main()
