# Continuity Benchmarks Model Card

| Field | Value |
|---|---|
| Repository | [Alienfader/continuity-benchmarks](https://github.com/Alienfader/continuity-benchmarks) |
| Category | Execution-Intent Memory Benchmark Harness |
| Stars / forks snapshot | 3 / 0 |
| Language | TypeScript |
| License | MIT |
| Raw capture | raw-github/alienfader_continuity-benchmarks.md |
| Updated by | hourly public metadata update, 2026-05-29 04:05 +0800 |

## 1. Role in Self Evolve

continuity-benchmarks provides reproducible execution-intent memory benchmarks for long-horizon AI coding agents with LongMemEval-S and ID-RAG matrix evaluation. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

agent action intent -> retrieval keyed by execution intent vs prompt intent -> benchmark runners score recall/alignment -> report deltas and confidence for memory strategy selection

## 3. Evidence Path

web-observed GitHub page showed 3 stars, 0 forks, 27 commits, MIT license, and benchmark runners comparing retrieval strategies for coding-agent memory. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Execution-Intent Memory Benchmark Harness: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
