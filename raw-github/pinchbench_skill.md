---
repo: pinchbench/skill
url: https://github.com/pinchbench/skill
content_timestamp: 2026-06-03
time_slice: 2026-06
timestamp_confidence: explicit
timestamp_source: web_observed_public_github_page_2026_06_03
collected_at: 2026-06-03T19:56:18+08:00
source: github_web
source_tool: web.open
---

## GitHub - pinchbench/skill: PinchBench benchmark skill/tasks for OpenClaw coding agents

**Source**: https://github.com/pinchbench/skill

## Collection note

Captured from the public GitHub repository page on 2026-06-03 because local shell access to `api.github.com` still failed DNS resolution and `gh` reported an invalid token. This file records web-observed repository metadata, not authenticated GitHub API freshness.

## Public metadata snapshot

- Repository: `pinchbench/skill`
- Stars observed: 1.2k
- Forks observed: 133
- Issues observed: 16
- Pull requests observed: 0
- Commit history observed: 383 commits
- Releases observed: 14 total; latest `v2.0.0` on 2026-05-06
- License observed: MIT
- Primary languages observed: Python 59.8%, Shell 19.5%, TypeScript 13.6%, HTML 7.0%, jq 0.1%
- Homepage / leaderboard: `https://pinchbench.com`

## Raw README signals

- README frames PinchBench as "Real-world benchmarks for AI coding agents" rather than synthetic capability tests.
- The repository explicitly says it contains benchmark skill/tasks, not the official leaderboard backend.
- The benchmark measures OpenClaw-style agents on 53 real tasks across productivity, research, writing, coding, analysis, email, memory, and skill discovery.
- The public page now foregrounds transcript retention and leaderboard upload as first-class benchmark surfaces, not just local task execution.
- The documented run path is `./scripts/run.sh --model ...`, with provider-prefixed model IDs and a running OpenClaw instance required.
- Each task can be graded automatically, by an LLM judge, or both; session transcripts are saved under `results/{run_id}_transcripts/` for post-run analysis.

## Raw boundary

No task was rerun in this iteration, no OpenClaw instance was launched, and no leaderboard claim was independently reproduced. This capture preserves the public benchmark surface for downstream classification, deep reports, README/site summaries, and value-repair triage.
