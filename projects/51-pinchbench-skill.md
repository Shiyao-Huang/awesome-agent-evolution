# PinchBench Skill Model Card

## One Sentence

PinchBench is one of the clearest benchmark anchors in this corpus: not a self-evolving runtime, but the evaluator substrate that makes self-improvement claims comparable.

## Three Sentences

It spans productivity, research, writing, coding, analysis, email, memory, and skill-discovery tasks rather than a single narrow benchmark lane. That makes it important for this survey’s “benchmark as selection pressure” thread. This 2026-06-16 packet confirms the benchmark anchor on a fresh authenticated snapshot.

## Model Card

| Field | Value |
|---|---|
| Repository | `pinchbench/skill` |
| Source | `raw-github/pinchbench_skill.md` |
| Category | Real-world agent task benchmark |
| Pattern | task suite -> OpenClaw agent execution -> automatic and/or LLM judging -> transcript retention -> optional leaderboard upload |
| Evidence | Authenticated GitHub API snapshot, 2026-06-16 |

## Teaching Use

Use PinchBench to explain why benchmark infrastructure matters as much as the agent loop itself. Without evaluator strength and saved transcripts, “improvement” stays anecdotal.

## Evidence And Limits

The raw capture now reflects an authenticated GitHub API snapshot: 1,232 stars, 140 forks, 383 commits, 19 open issues, and 0 open pull requests observed on 2026-06-16. Relative to the previous 2026-06-15 20:24 packet: No public metadata delta relative to the 2026-06-15 20:24 packet. This run did not execute the benchmark, upload results, or validate leaderboard behavior locally. All benchmark-scope claims remain repository-scoped.
