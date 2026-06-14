# PinchBench Skill Model Card

## One Sentence

PinchBench is one of the clearest benchmark anchors in this corpus: not a self-evolving runtime, but the evaluator substrate that makes self-improvement claims comparable.

## Three Sentences

It spans productivity, research, writing, coding, analysis, email, memory, and skill-discovery tasks rather than a single narrow benchmark lane. That makes it important for this survey’s “benchmark as selection pressure” thread. The 2026-06-14 authenticated refresh changed several public counters and timestamps, so the benchmark anchor no longer matched yesterday's packet.

## Model Card

| Field | Value |
|---|---|
| Repository | `pinchbench/skill` |
| Source | `raw-github/pinchbench_skill.md` |
| Category | Real-world agent task benchmark |
| Pattern | task suite -> OpenClaw agent execution -> automatic and/or LLM judging -> transcript retention -> optional leaderboard upload |
| Evidence | Authenticated GitHub API snapshot, 2026-06-14 |

## Teaching Use

Use PinchBench to explain why benchmark infrastructure matters as much as the agent loop itself. Without evaluator strength and saved transcripts, “improvement” stays anecdotal.

## Evidence And Limits

The raw capture now reflects an authenticated GitHub API snapshot: 1,230 stars, 139 forks, 383 commits, 19 open issues, 0 open pull requests, and MIT license metadata observed on 2026-06-14. This run did not execute the benchmark, upload results, or validate leaderboard behavior locally. All benchmark-scope claims remain repository-scoped.
