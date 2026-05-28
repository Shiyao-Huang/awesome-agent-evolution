# Procedural Memory Benchmark Model Card

| Field | Value |
|---|---|
| Repository | [qpiai/Proced_mem_bench](https://github.com/qpiai/Proced_mem_bench) |
| Category | Procedural Memory Retrieval Benchmark |
| Stars / forks snapshot | 6 / 3 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/qpiai_proced_mem_bench.md |
| Updated by | hourly public metadata update, 2026-05-29 04:05 +0800 |

## 1. Role in Self Evolve

Proced_mem_bench benchmarks procedural memory retrieval for language agents across ALFWorld trajectories and upcoming OSWorld scenarios. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

task trajectory corpus -> procedural retrieval methods -> LLM-as-judge plus IR metrics -> benchmark reports for procedural memory quality

## 3. Evidence Path

web-observed GitHub page showed 6 stars, 3 forks, 7 commits, Apache-2.0 license, and README framing as a standardized procedural-memory benchmark. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Procedural Memory Retrieval Benchmark: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
