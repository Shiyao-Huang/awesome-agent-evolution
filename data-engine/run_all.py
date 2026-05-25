"""Master runner for GitHub data collection."""
import json, os, sys, time, importlib
from datetime import datetime, timezone

import argparse

COLLECTORS = {
    "stars": "collectors.github_stars",
    "forks": "collectors.github_forks",
    "issues": "collectors.github_issues",
    "events": "collectors.github_events",
}

PRIORITY_ORDER = {"critical": 0, "high": 1, "medium": 2}


def main():
    parser = argparse.ArgumentParser(description="Run all GitHub collectors")
    parser.add_argument("--token", default=None, help="GitHub PAT (or set GITHUB_TOKEN env)")
    parser.add_argument("--output", default="./storage", help="Output directory")
    parser.add_argument("--config", default="./config/projects.json", help="Projects config")
    parser.add_argument("--priority", default=None, choices=["critical", "high", "medium"])
    parser.add_argument("--collectors", default="stars,forks,issues,events", help="Comma-separated collector names")
    parser.add_argument("--limit", type=int, default=None, help="Max projects to process")
    args = parser.parse_args()

    token = args.token or os.environ.get("GITHUB_TOKEN")
    if not token:
        print("⚠️  No GITHUB_TOKEN set. Unauthenticated rate limit: 60 req/hr.", file=sys.stderr)
        print("⚠️  Collection will be VERY slow. Set GITHUB_TOKEN for 5000 req/hr.", file=sys.stderr)

    with open(args.config) as f:
        projects = json.load(f)

    if args.priority:
        projects = [p for p in projects if p["priority"] == args.priority]
    projects.sort(key=lambda p: PRIORITY_ORDER.get(p.get("priority", "medium"), 9))
    if args.limit:
        projects = projects[: args.limit]

    collector_names = [c.strip() for c in args.collectors.split(",")]
    print(f"🚀 Running {len(collector_names)} collectors for {len(projects)} projects")
    print(f"   Token: {'YES' if token else 'NO (rate limited)'}")
    print(f"   Collectors: {collector_names}")
    print(f"   Priority filter: {args.priority or 'all'}")
    print()

    results = {}
    total_ok, total_fail = 0, 0

    for collector_name in collector_names:
        if collector_name not in COLLECTORS:
            print(f"⚠️ Unknown collector: {collector_name}", file=sys.stderr)
            continue
        mod = importlib.import_module(COLLECTORS[collector_name])
        collect_fn = getattr(mod, f"collect_{collector_name}", None)
        if not collect_fn:
            print(f"⚠️ No collect function in {collector_name}", file=sys.stderr)
            continue

        from collectors.base import GitHubClient

        client = GitHubClient(token)
        results[collector_name] = {"ok": 0, "fail": 0, "errors": []}

        for proj in projects:
            repo = proj["repo"]
            try:
                result = collect_fn(client, repo, args.output)
                if result is not None:
                    results[collector_name]["ok"] += 1
                    total_ok += 1
                else:
                    results[collector_name]["fail"] += 1
                    total_fail += 1
                    results[collector_name]["errors"].append(repo)
            except Exception as e:
                print(f"  ❌ {repo}: {e}", file=sys.stderr)
                results[collector_name]["fail"] += 1
                total_fail += 1
                results[collector_name]["errors"].append(f"{repo}: {e}")
            client.throttle()

    # Save summary
    summary = {
        "run_timestamp": datetime.now(timezone.utc).isoformat(),
        "total_projects": len(projects),
        "collectors_run": collector_names,
        "token_used": bool(token),
        "results": results,
        "total_ok": total_ok,
        "total_fail": total_fail,
    }
    os.makedirs(args.output, exist_ok=True)
    with open(os.path.join(args.output, "_summary.json"), "w") as f:
        json.dump(summary, f, indent=2)

    print(f"\n{'='*60}")
    print(f"📊 Collection Summary")
    print(f"   Projects: {len(projects)}")
    print(f"   Success:  {total_ok}")
    print(f"   Failed:   {total_fail}")
    for cn, cr in results.items():
        print(f"   {cn}: {cr['ok']} ok / {cr['fail']} fail")
        if cr["errors"]:
            print(f"     errors: {cr['errors'][:5]}")


if __name__ == "__main__":
    main()
