"""Master runner for GitHub data collection."""
import json, os, sys, time, importlib
from datetime import datetime, timezone
import argparse

COLLECTORS = {"stars": "collectors.github_stars", "forks": "collectors.github_forks",
              "issues": "collectors.github_issues", "events": "collectors.github_events",
              "quick_stats": "collectors.github_quick_stats"}
PRIORITY_ORDER = {"critical": 0, "high": 1, "medium": 2}


def main():
    parser = argparse.ArgumentParser(description="Run all GitHub collectors")
    parser.add_argument("--token", default=None, help="GitHub PAT (or set GITHUB_TOKEN env)")
    parser.add_argument("--output", default="./storage")
    parser.add_argument("--config", default="./config/projects.json")
    parser.add_argument("--priority", default=None, choices=["critical", "high", "medium"])
    parser.add_argument("--collectors", default="quick_stats", help="Comma-separated: stars,forks,issues,events,quick_stats")
    parser.add_argument("--limit", type=int, default=None)
    args = parser.parse_args()

    token = args.token or os.environ.get("GITHUB_TOKEN")
    if not token:
        print("⚠️  No GITHUB_TOKEN. Unauthenticated: 60 req/hr. Use quick_stats for fast collection.", file=sys.stderr)

    with open(args.config) as f:
        projects = json.load(f)
    if args.priority:
        projects = [p for p in projects if p["priority"] == args.priority]
    projects.sort(key=lambda p: PRIORITY_ORDER.get(p.get("priority", "medium"), 9))
    if args.limit:
        projects = projects[:args.limit]

    collector_names = [c.strip() for c in args.collectors.split(",")]
    print(f"🚀 Running {len(collector_names)} collector(s) for {len(projects)} projects (token={'YES' if token else 'NO'})")

    from collectors.base import GitHubClient
    client = GitHubClient(token)
    results = {}

    for cn in collector_names:
        if cn not in COLLECTORS:
            print(f"⚠️ Unknown collector: {cn}", file=sys.stderr)
            continue
        mod = importlib.import_module(COLLECTORS[cn])
        collect_fn = getattr(mod, f"collect_{cn}" if cn != "quick_stats" else "collect_repo_stats", None)
        if not collect_fn:
            continue
        results[cn] = {"ok": 0, "fail": 0, "errors": []}
        for proj in projects:
            try:
                if cn == "quick_stats":
                    r = collect_fn(client, proj["repo"], args.output)
                else:
                    r = collect_fn(client, proj["repo"], args.output)
                    client.throttle()
                if r is not None:
                    results[cn]["ok"] += 1
                else:
                    results[cn]["fail"] += 1
                    results[cn]["errors"].append(proj["repo"])
            except Exception as e:
                results[cn]["fail"] += 1
                results[cn]["errors"].append(f"{proj['repo']}: {e}")
            if cn == "quick_stats":
                time.sleep(0.8 if token else 61)

    summary = {"run_timestamp": datetime.now(timezone.utc).isoformat(), "total_projects": len(projects),
               "collectors_run": collector_names, "token_used": bool(token), "results": results}
    os.makedirs(args.output, exist_ok=True)
    with open(os.path.join(args.output, "_summary.json"), "w") as f:
        json.dump(summary, f, indent=2)
    print(f"\n📊 Summary: {json.dumps({k: f'{v[\"ok\"]}ok/{v[\"fail\"]}fail' for k, v in results.items()})}")


if __name__ == "__main__":
    main()
