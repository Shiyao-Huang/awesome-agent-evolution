# Agent Memory Benchmark Model Card

| Field | Value |
|---|---|
| Repository | [vectorize-io/agent-memory-benchmark](https://github.com/vectorize-io/agent-memory-benchmark) |
| Category | Agent Memory Benchmark |
| Stars / forks snapshot | 46 / 17 |
| Language | Python |
| License | Unknown from public page snapshot |
| Raw capture | raw-github/vectorize-io_agent-memory-benchmark.md |
| Updated by | hourly public metadata update, 2026-06-02 19:52 +0800 |

## 1. Role in Self Evolve

AMB is a benchmark for agent memory systems, not a memory system itself. Its value is that it makes memory claims face the tradeoff the field often avoids: answer quality must be judged together with speed and token cost, not in isolation.

## 2. Working Principle

dataset ingest -> memory provider retrieve -> Gemini answer generation -> second Gemini judge -> accuracy/speed/token-cost comparison -> saved JSON outputs and browser viewer

## 3. Evidence Path

The public GitHub page on 2026-06-02 showed 46 stars, 17 forks, 6 issues, 4 pull requests, 29 commits, benchmark/ai-agent/ai-memory topics, Python/Vue implementation, and README language about open datasets, prompts, scoring logic, and exact model choices. Shell GitHub API access remained blocked by DNS failure and `gh` could not connect, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain why memory evaluation must move beyond chat-history QA. AMB is a good teaching example because it explicitly defines the benchmark loop, publishes prompts and outputs, and argues why million-token contexts can hide weak memory architecture design.

## 5. Limits

This iteration did not run AMB, inspect hidden datasets, or verify Gemini judge behavior. The conclusions here are about benchmark role and methodology, not reproduced leaderboard performance.
