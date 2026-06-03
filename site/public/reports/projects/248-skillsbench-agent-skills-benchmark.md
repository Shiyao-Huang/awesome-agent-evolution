# SkillsBench Model Card

| Field | Value |
|---|---|
| Repository | [benchflow-ai/skillsbench](https://github.com/benchflow-ai/skillsbench) |
| Category | Agent Skills Benchmark Harness |
| Stars / forks snapshot | 1300 / 305 |
| Language | PDDL |
| License | Apache-2.0 |
| Raw capture | raw-github/benchflow-ai_skillsbench.md |
| Updated by | hourly public metadata update, 2026-06-04 01:56 +0800 |

## 1. Role in Self Evolve

SkillsBench is a gym-style benchmark framework for measuring how well agents use reusable skills across multi-step tasks. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

task + skill set -> agent run -> deterministic verifier scoring -> artifact/leaderboard export -> iteration and comparison

## 3. Evidence Path

The current run rechecked a cached GitHub search result observed on 2026-06-04, with crawl recency surfaced as `5 days ago`. That cached public result showed 1.3k stars, 305 forks, 367 commits, Apache-2.0 licensing, runnable `tasks/` plus `tasks_excluded/`, and README language about multi-skill composition with reproducible lockfile-based evaluation. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as cached public-page evidence rather than live API verification.

## 4. Teaching Use

Use this card to explain Agent Skills Benchmark Harness: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
