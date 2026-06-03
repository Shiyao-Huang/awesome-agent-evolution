# Hermes Benchmark Outer-Loop Harness Model Card

| Field | Value |
|---|---|
| Repository | [howdymary/hermes-agent-metaharness](https://github.com/howdymary/hermes-agent-metaharness) |
| Category | Hermes Benchmark Outer-Loop Harness |
| Stars / forks snapshot | 88 / 9 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/howdymary_hermes-agent-metaharness.md |
| Updated by | hourly public metadata update, 2026-06-03 07:52 +0800 |

## 1. Role in Self Evolve

Hermes Agent Meta-Harness is a standalone outer-loop evaluator that optimizes Hermes benchmark harness candidates without modifying model weights. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

select candidate -> evaluate on TBLite/TB2 -> parse archives -> compare baseline vs candidate -> update frontier

## 3. Evidence Path

web-observed GitHub page showed 88 stars, 9 forks, 11 commits, MIT license, explicit TBLite/TB2 benchmark orchestration, baseline-vs-candidate comparison, and frontier-backed deterministic search. This iteration keeps freshness honest: the snapshot comes from the current public GitHub page, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Hermes Benchmark Outer-Loop Harness: it shows how harness/runtime/benchmark or memory/skill layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
