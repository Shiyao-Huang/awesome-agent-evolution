# Agent Memory Benchmark Model Card

| Field | Value |
|---|---|
| Repository | [vectorize-io/agent-memory-benchmark](https://github.com/vectorize-io/agent-memory-benchmark) |
| Category | Agent Memory Benchmark |
| Stars / forks snapshot | 46 / 17 |
| Commits / issues / PRs snapshot | 29 / 6 / 4 |
| Language | Python |
| License | Unknown |
| Raw capture | raw-github/vectorize-io_agent-memory-benchmark.md |
| Updated by | hourly public metadata update, 2026-06-04 15:36 +0800 |

## 1. Role in Self Evolve

vectorize-io/agent-memory-benchmark is a benchmark harness for comparing agent memory strategies on multi-step tasks where retrieval quality, latency, and token cost all matter. It matters because self-evolving agents need inspectable memory, skill, harness, benchmark, and runtime substrates before improvement claims become trustworthy.

## 2. Working Principle

ingest documents and traces -> retrieve candidate context -> generate agent answer -> judge accuracy and cost -> compare memory strategies across datasets and modes

## 3. Evidence Path

web-observed GitHub page showed 46 stars, 17 forks, 29 commits, 6 open issues, 4 pull requests, and a benchmark surface spanning ingest, retrieve, generate, judge, outputs, and a bundled viewer. This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on 2026-06-04, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Agent Memory Benchmark: it shows how raw public GitHub evidence becomes a project-facing teaching artifact inside the self-evolving-agent pipeline.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
