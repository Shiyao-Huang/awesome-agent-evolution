#!/usr/bin/env python3
"""Master runner for all GitHub data collectors.

Reads config/projects.json, runs selected collectors for each project, and
produces a summary report at the end.

Usage:
    python run_all.py [--token TOKEN] --output ./storage [--priority critical|high|medium] [--collectors stars,forks,issues,events]
"""

import argparse
import json
import os
import sys
import time
from collections import defaultdict
from pathlib import Path
from datetime import datetime, timezone
from typing import Dict, List, Optional

# Ensure the data-engine root is on sys.path so `collectors` package resolves
BASE_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(BASE_DIR))

from collectors.base import GitHubClient, log

# ---------------------------------------------------------------------------
# Collector registry
# ---------------------------------------------------------------------------

COLLECTORS = {
    "stars": ("collectors.github_stars", "collect"),
    "forks": ("collectors.github_forks", "collect"),
    "issues": ("collectors.github_issues", "collect"),
    "events": ("collectors.github_events", "collect"),
}


def load_collector(name: str):
    """Dynamically import a collector module and return its collect function."""
    module_path, func_name = COLLECTORS[name]
    import importlib
    mod = importlib.import_module(module_path)
    return getattr(mod, func_name)


def load_projects(config_path: str, priority: Optional[str] = None) -> List[dict]:
    """Load and optionally filter projects from config."""
    if not os.path.exists(config_path):
        log.error("Config not found: %s", config_path)
        return []
    with open(config_path, encoding="utf-8") as fh:
        cfg = json.load(fh)
    projects = cfg.get("projects", [])
    if priority:
        projects = [p for p in projects if p["priority"] == priority]
    return projects


def main():
    parser = argparse.ArgumentParser(
        description="Run all GitHub data collectors for configured projects"
    )
    parser.add_argument("--token", default=os.environ.get("GITHUB_TOKEN"),
                        help="GitHub personal-access token (or set GITHUB_TOKEN env)")
    parser.add_argument("--output", default=str(BASE_DIR / "storage"),
                        help="Directory for JSON output (default: ./storage)")
    parser.add_argument("--config", default=str(BASE_DIR / "config" / "projects.json"),
                        help="Path to projects.json config")
    parser.add_argument("--priority", choices=["critical", "high", "medium"],
                        help="Only collect for projects with this priority")
    parser.add_argument("--collectors", default="stars,forks,issues,events",
                        help="Comma-separated list of collectors to run (default: all)")
    args = parser.parse_args()

    # Resolve which collectors to run
    requested = [c.strip() for c in args.collectors.split(",")]
    active_collectors = {}
    for name in requested:
        if name not in COLLECTORS:
            log.error("Unknown collector: %s (available: %s)", name,
                      ", ".join(COLLECTORS.keys()))
            sys.exit(1)
        active_collectors[name] = load_collector(name)

    if not active_collectors:
        log.error("No collectors selected.")
        sys.exit(1)

    # Load projects
    projects = load_projects(args.config, args.priority)
    if not projects:
        log.error("No projects to process.")
        sys.exit(1)

    # Sort by priority order: critical > high > medium
    priority_order = {"critical": 0, "high": 1, "medium": 2}
    projects.sort(key=lambda p: priority_order.get(p.get("priority", "medium"), 9))

    log.info("=== Data Engine Run ===")
    log.info("Projects: %d  |  Collectors: %s  |  Auth: %s",
             len(projects),
             ", ".join(active_collectors.keys()),
             "yes" if args.token else "no (60 req/hr limit)")

    client = GitHubClient(token=args.token)
    os.makedirs(args.output, exist_ok=True)

    # Tracking
    results: List[dict] = []
    errors: List[str] = []
    start_time = time.time()

    total_tasks = len(projects) * len(active_collectors)
    completed = 0

    for idx, project in enumerate(projects, 1):
        repo = project["repo"]
        name = project["name"]
        priority = project.get("priority", "medium")
        log.info("[%d/%d] %s (%s, %s)", idx, len(projects), name, repo, priority)

        for collector_name, collect_fn in active_collectors.items():
            completed += 1
            pct = completed * 100 // total_tasks
            log.info("  [%d%%] %s -> %s ...", pct, collector_name, repo)

            try:
                data = collect_fn(client, repo)
                # Check for error in data
                if isinstance(data, dict) and "error" in data:
                    errors.append(f"{collector_name}:{repo} - {data['error']}")
                    log.warning("  SKIP %s/%s: %s", collector_name, repo, data["error"])
                    results.append({"repo": repo, "collector": collector_name,
                                    "status": "error", "detail": data["error"]})
                    continue

                filename = f"{client.safe_filename(repo)}_{collector_name}.json"
                from collectors.base import save_json
                save_json(args.output, filename, f"github_{collector_name}", repo, data)
                results.append({"repo": repo, "collector": collector_name, "status": "ok"})

            except Exception as exc:
                errors.append(f"{collector_name}:{repo} - {exc}")
                log.error("  ERROR %s/%s: %s", collector_name, repo, exc)
                results.append({"repo": repo, "collector": collector_name,
                                "status": "error", "detail": str(exc)})

    elapsed = time.time() - start_time

    # ---- Summary report -------------------------------------------------------
    ok_count = sum(1 for r in results if r["status"] == "ok")
    err_count = sum(1 for r in results if r["status"] == "error")

    summary = {
        "run_timestamp": datetime.now(timezone.utc).isoformat(),
        "config": args.config,
        "collectors": list(active_collectors.keys()),
        "priority_filter": args.priority,
        "total_projects": len(projects),
        "total_tasks": total_tasks,
        "successful": ok_count,
        "errors": err_count,
        "elapsed_seconds": round(elapsed, 1),
        "results": results,
    }

    summary_path = os.path.join(args.output, "_summary.json")
    with open(summary_path, "w", encoding="utf-8") as fh:
        json.dump(summary, fh, indent=2, ensure_ascii=False)

    # Print summary to stdout
    print("\n" + "=" * 60)
    print("COLLECTION SUMMARY")
    print("=" * 60)
    print(f"  Projects:     {len(projects)}")
    print(f"  Collectors:   {', '.join(active_collectors.keys())}")
    print(f"  Successful:   {ok_count}/{total_tasks}")
    print(f"  Errors:       {err_count}/{total_tasks}")
    print(f"  Elapsed:      {elapsed:.1f}s")
    print(f"  Output dir:   {args.output}")
    print(f"  Summary file: {summary_path}")

    if errors:
        print(f"\n  Errors ({len(errors)}):")
        for e in errors[:20]:
            print(f"    - {e}")
        if len(errors) > 20:
            print(f"    ... and {len(errors) - 20} more")

    print("=" * 60)

    # Per-collector stats
    by_collector = defaultdict(lambda: {"ok": 0, "error": 0})
    for r in results:
        by_collector[r["collector"]][r["status"]] += 1

    print("\n  Per collector:")
    for cname in active_collectors:
        stats = by_collector[cname]
        print(f"    {cname:10s}  ok={stats['ok']}  errors={stats['error']}")
    print()

    sys.exit(1 if err_count == total_tasks else 0)


if __name__ == "__main__":
    main()
