---
repo: claw-bench/claw-bench
url: https://github.com/claw-bench/claw-bench
content_timestamp: 2026-05-24
time_slice: 2026-05
timestamp_source: web_github_page_open_2026-05-24
collected_at: 2026-05-24T15:00:00+08:00
source: github_web
---

## GitHub - claw-bench/claw-bench: The Definitive AI Agent Benchmark

**Source**: https://github.com/claw-bench/claw-bench

**Collection note**: Captured through browser-accessible GitHub page text because local shell DNS resolution for `api.github.com` failed during this automation run.

## Public metadata snapshot

- Repository: `claw-bench/claw-bench`
- Stars observed: 171
- Forks observed: 18
- Commits observed: 67
- License observed: Apache-2.0
- Primary languages observed: Python, Shell, TypeScript
- Visible paths: `.github`, `config`, `docker`, `docs`, `examples`, `leaderboard`, `scripts`, `skills`, `src/claw_bench`, `tasks`, `tests`, `README.md`, `README.zh-CN.md`, `pyproject.toml`

## Raw README signals

# Claw Bench

The Definitive AI Agent Benchmark.

Standardized, reproducible evaluation across 314 tasks, 33 domains, and 4 difficulty levels.

Claw Bench evaluates real AI Agent products directly. Your agent reads the task instructions, does the actual work, and submits results to the global leaderboard.

Quick start:

```bash
pip install git+https://github.com/claw-bench/claw-bench.git
claw-bench submit ./results/latest
```

Quick OpenClaw test:

```bash
claw-bench run --framework openclaw --tasks quick --dry-run
cmdop agent start
claw-bench run --framework openclaw --tasks quick --model "@balanced+agents"
```

Feature signals:

- 313 curated tasks across 32 domains.
- Weighted scoring via pytest markers.
- 4 difficulty levels.
- Real agent testing without adapter middlemen.
- Automated verification for every task.
- Global leaderboard.
- Anti-abuse protections.

Task domains observed include file operations, data analysis, workflow automation, database, real tools, security, system administration, code assistance, cross-domain work, multimodal tasks, debugging, math reasoning, communication, email, calendar, document editing, memory, web browsing, and planning.

Project structure signal:

```text
claw-bench/
  src/claw_bench/
  tasks/
  skills/
  config/
  scripts/
  leaderboard/
  docker/
```
