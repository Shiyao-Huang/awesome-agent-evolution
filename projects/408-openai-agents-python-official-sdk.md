# OpenAI Agents SDK (Python) Model Card

| Field | Value |
|---|---|
| Repository | [openai/openai-agents-python](https://github.com/openai/openai-agents-python) |
| Category | Official OpenAI Agents SDK Runtime Baseline |
| Stars / forks snapshot | 26800 / 4200 |
| Issues / PRs snapshot | 45 / 68 |
| Language | Python |
| License | MIT |
| Latest visible dated signal | 2026-06-08 |
| Raw capture | raw-github/openai_openai-agents-python.md |
| Updated by | hourly public metadata update, 2026-06-08 23:45 +0800 |

## 1. Role in Self Evolve

OpenAI Agents SDK (Python) is the official Python baseline for multi-agent orchestration with handoffs, tool calls, guardrails, tracing, and session state. It matters because third-party swarm, harness, memory, and skill claims need a canonical upstream orchestration/runtime baseline before they can be compared honestly.

## 2. Working Principle

define agents plus tools and handoffs -> trace runs and guardrails -> keep session state and memory-like context inside SDK workflows -> reuse the official runtime as the canonical orchestration baseline for third-party swarm and harness claims

## 3. Evidence Path

web-observed GitHub repo page showed 26.8k stars, 4.2k forks, 45 issues, 68 pull requests, MIT license, and a repository-page "Updated Jun 8, 2026" signal; README navigation exposed models, tools, handoffs, guardrails, tracing, MCP, voice, sessions, agents-as-tools, and context-management docs. This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on 2026-06-08, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Official OpenAI Agents SDK Runtime Baseline: it gives the corpus a canonical upstream baseline for agent orchestration, guardrails, tracing, and tool/handoff design before downstream systems add their own memory, benchmark, or self-improvement layers.

## 5. Limits

The repository was not cloned or executed in this iteration; no SDK example, agent loop, benchmark, or realtime flow was run locally. Counts and claims are visible public-page signals unless independently revalidated later.
