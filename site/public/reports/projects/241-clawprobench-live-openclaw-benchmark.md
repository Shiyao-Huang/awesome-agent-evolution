# ClawProBench Model Card

| Field | Value |
|---|---|
| Repository | [suyoumo/ClawProBench](https://github.com/suyoumo/ClawProBench) |
| Category | Live OpenClaw Benchmark Harness |
| Stars / forks snapshot | 690 / 50 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/suyoumo_clawprobench.md |
| Updated by | hourly public metadata update, 2026-05-26 09:12 +0800 |

## 1. Role in Self Evolve

ClawProBench is a live-first benchmark harness for evaluating LLM agents in the OpenClaw runtime with deterministic grading, profile selection and repeated-trial reliability. It matters because self-evolving agents need reliable harnesses, memory/skill surfaces, feedback evidence and benchmark loops before any improvement claim can be trusted.

## 2. Working Principle

OpenClaw runtime task -> live scenario execution -> deterministic grading -> structured report -> leaderboard/profile selection

## 3. Evidence Path

web-observed GitHub page showed 690 stars, 50 forks, 44 commits, Apache-2.0 license, Python primary language, and README claims for 102 active scenarios, 162 catalog scenarios, deterministic grading, core profile ranking and public leaderboard. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Live OpenClaw Benchmark Harness: it shows which part of the agent improvement stack is made operational, and where evaluator, policy, memory, skill, task-state or artifact evidence enters the loop.

## 5. Limits

The repository was not cloned in this iteration; no benchmark, install flow, workflow run, policy audit, memory experiment, OpenClaw run, or agent loop was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
