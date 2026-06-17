# PinchBench Skill Model Card

## One Sentence

PinchBench is one of the clearest benchmark anchors in this corpus: not a self-evolving runtime, but the evaluator substrate that makes self-improvement claims comparable.

## Three Sentences

It spans productivity, research, writing, coding, analysis, email, memory, and skill-discovery tasks rather than a single narrow benchmark lane. That makes it important for this survey’s “benchmark as selection pressure” thread. The 2026-06-17 morning packet nudged the public star count again, so the benchmark anchor also needed a same-day metadata refresh.

## Model Card

| Field | Value |
|---|---|
| Repository | `pinchbench/skill` |
| Source | `raw-github/pinchbench_skill.md` |
| Category | Real-world agent task benchmark |
| Pattern | task suite -> OpenClaw agent execution -> automatic and/or LLM judging -> transcript retention -> optional leaderboard upload |
| Evidence | Authenticated GitHub API snapshot, 2026-06-17 08:29 +0800 |

## Teaching Use

Use PinchBench to explain why benchmark infrastructure matters as much as the agent loop itself. Without evaluator strength and saved transcripts, improvement stays anecdotal.

## Evidence And Limits

The raw capture now reflects an authenticated GitHub API snapshot observed on 2026-06-17 08:29 +0800: 1,236 stars, 140 forks, 383 commits, 20 open issues, and 1 open pull requests. The latest public release visible through the API remains v2.0.0 (2026-05-06). Relative to the previous authenticated packet at 2026-06-17 02:30 +0800: stars 1235 -> 1236. This run did not execute the benchmark, upload results, or validate leaderboard behavior locally. All benchmark-scope claims remain repository-scoped.
