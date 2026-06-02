# Arc Continual Learning Benchmark Model Card

| Field | Value |
|---|---|
| Repository | [Arc-Computer/CL-Bench](https://github.com/Arc-Computer/CL-Bench) |
| Category | Stateful Continual-Learning Benchmark for LLM Agents |
| Stars / forks snapshot | 19 / 3 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/arc-computer_cl-bench.md |
| Updated by | hourly public metadata update, 2026-06-02 13:53 +0800 |

## 1. Role in Self Evolve

Arc-Computer/CL-Bench is a benchmark framework for evaluating LLM agent continual learning in stateful environments with CRM-style workflows. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, independent benchmarks, and durable memory/runtime surfaces before claiming stable improvement.

## 2. Working Principle

place agents inside stateful multi-turn workflows -> mutate persistent entities under production-style constraints -> evaluate adaptation and reliability under cross-turn dependencies -> use continual-learning pressure instead of one-shot benchmark snapshots

## 3. Evidence Path

web-observed GitHub page showed 19 stars, 3 forks, 50 commits, Apache-2.0 license, and explicit continual-learning benchmark framing for stateful environments. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Stateful Continual-Learning Benchmark for LLM Agents: it shows how benchmark/harness or memory/runtime layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
