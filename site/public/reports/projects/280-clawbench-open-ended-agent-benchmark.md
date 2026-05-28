# ClawBench Model Card

| Field | Value |
|---|---|
| Repository | [TIGER-AI-Lab/ClawBench](https://github.com/TIGER-AI-Lab/ClawBench) |
| Category | Open-Ended Agent Benchmark Harness |
| Stars / forks snapshot | 338 / 21 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/tiger-ai-lab_clawbench.md |
| Updated by | hourly public metadata update, 2026-05-28 10:00 +0800 |

## 1. Role in Self Evolve

ClawBench is an open-ended agent benchmark built for evaluating long-horizon OpenClaw-style agent performance and generalization. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

open-ended task generation -> long-horizon agent execution traces -> verifier-guided scoring -> benchmark snapshots for iterative harness improvement

## 3. Evidence Path

web-observed GitHub page showed 338 stars, 21 forks, 310 commits, Apache-2.0 license, and README benchmark framing for open-ended agent evaluation. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Open-Ended Agent Benchmark Harness: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
