# OpenAI Agents SDK (Python) Model Card

| Field | Value |
|---|---|
| Repository | [openai/openai-agents-python](https://github.com/openai/openai-agents-python) |
| Category | Official OpenAI Agents SDK Runtime Baseline |
| Stars / forks snapshot | 27,111 / 4,185 |
| Commits / issues / PRs snapshot | 1,603 / 45 / 99 |
| Language | Python |
| License | MIT |
| Latest visible dated signal | 2026-06-11 GitHub API snapshot |
| Raw capture | raw-github/openai_openai-agents-python.md |
| Updated by | hourly public metadata update, 2026-06-13 02:15 +0800 |

## 1. Role in Self Evolve

OpenAI Agents SDK (Python) is the official Python baseline for multi-agent orchestration with handoffs, tool calls, guardrails, tracing, and session state. It matters because third-party swarm, harness, memory, and skill claims need a canonical upstream orchestration/runtime baseline before they can be compared honestly.

## 2. Working Principle

define agents plus tools and handoffs -> trace runs and guardrails -> keep session state and memory-like context inside SDK workflows -> reuse the official runtime as the canonical orchestration baseline for third-party swarm and harness claims

## 3. Evidence Path

GitHub GraphQL/API snapshot captured via authenticated `gh` on 2026-06-13 showed 27,111 stars, 4,185 forks, 45 open issues, 99 open pull requests, 1,603 commits on `main`, latest push at 2026-06-11T04:10:37Z, MIT license, and latest release `v0.17.5` published on 2026-06-11. The snapshot also showed 102 releases with v0.17.5 latest on 2026-06-11. This run keeps freshness honest because it uses authenticated GitHub API data rather than stale local summaries.

## 4. Teaching Use

Use this card to explain Official OpenAI Agents SDK Runtime Baseline: it gives the corpus a canonical upstream baseline for agent orchestration, guardrails, tracing, and tool/handoff design before downstream systems add their own memory, benchmark, or self-improvement layers.

## 5. Limits

The repository was not cloned or executed in this iteration; no SDK example, agent loop, benchmark, or realtime flow was run locally. Counts and claims are GitHub API snapshot signals unless independently revalidated later.
