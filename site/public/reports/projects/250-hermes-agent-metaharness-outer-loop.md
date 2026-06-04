# Hermes Benchmark Outer-Loop Harness Model Card

| Field | Value |
|---|---|
| Repository | [howdymary/hermes-agent-metaharness](https://github.com/howdymary/hermes-agent-metaharness) |
| Category | Hermes Benchmark Outer-Loop Harness |
| Stars / forks snapshot | 89 / 9 |
| Commits / issues / PRs snapshot | 11 / 0 / 0 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/howdymary_hermes-agent-metaharness.md |
| Updated by | hourly public metadata update, 2026-06-04 21:38 +0800 |

## 1. Role in Self Evolve

Hermes Agent Meta-Harness is a standalone outer-loop evaluator that optimizes Hermes benchmark harness candidates without modifying model weights. It matters because self-evolving agents need explicit memory, harness, benchmark, and safety substrates before their improvement claims become trustworthy.

## 2. Working Principle

select candidate -> evaluate on TBLite/TB2 -> parse archives -> compare baseline vs candidate -> update frontier

## 3. Evidence Path

web-observed GitHub page showed 89 stars, 9 forks, 0 issues, 0 pull requests, 11 commits, MIT license, explicit TBLite/TB2 benchmark orchestration, baseline-vs-candidate comparison, and frontier-backed deterministic search. This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on 2026-06-04, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Hermes Benchmark Outer-Loop Harness: it shows how memory systems, harness maps, benchmark suites, and outer-loop evaluators connect to the broader self-evolving-agent pipeline.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
