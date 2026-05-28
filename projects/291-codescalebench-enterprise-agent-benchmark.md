# CodeScaleBench Model Card

| Field | Value |
|---|---|
| Repository | [sourcegraph/CodeScaleBench](https://github.com/sourcegraph/CodeScaleBench) |
| Category | Enterprise-Scale Coding Agent Benchmark Harness |
| Stars / forks snapshot | 25 / 3 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/sourcegraph_codescalebench.md |
| Updated by | hourly public metadata update, 2026-05-29 04:05 +0800 |

## 1. Role in Self Evolve

CodeScaleBench is a benchmark suite for measuring coding agents with external retrieval tools on large enterprise-scale software tasks. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

enterprise codebase tasks -> Harbor/Claude harness with baseline vs MCP retrieval configs -> dual-verifier scoring and cost tracking -> auditable snapshots for benchmark governance

## 3. Evidence Path

web-observed GitHub page showed 25 stars, 3 forks, 1,310 commits, Apache-2.0 license, and README describing 275 tasks with auditable run snapshots. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Enterprise-Scale Coding Agent Benchmark Harness: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
