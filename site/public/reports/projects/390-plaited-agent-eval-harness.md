# Plaited Agent Eval Harness Model Card

| Field | Value |
|---|---|
| Repository | [plaited/agent-eval-harness](https://github.com/plaited/agent-eval-harness) |
| Category | CLI Agent Evaluation Harness with Schema-Driven Trial Pipelines |
| Stars / forks snapshot | 3 / 1 |
| Language | TypeScript |
| License | ISC |
| Raw capture | raw-github/plaited_agent-eval-harness.md |
| Updated by | hourly public metadata update, 2026-06-02 13:53 +0800 |

## 1. Role in Self Evolve

plaited/agent-eval-harness provides a Unix-style, schema-driven evaluation harness for CLI agents with run, grade, compare, and calibrate modes. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, independent benchmarks, and durable memory/runtime surfaces before claiming stable improvement.

## 2. Working Principle

define adapter schemas for any CLI agent -> capture raw trajectories over task suites -> grade and compare multi-run outputs -> turn agent release quality into repeatable pass@k-style evidence

## 3. Evidence Path

web-observed GitHub page showed 3 stars, 1 fork, 73 commits, ISC license, and explicit run/grade/compare/calibrate eval pipeline framing. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain CLI Agent Evaluation Harness with Schema-Driven Trial Pipelines: it shows how benchmark/harness or memory/runtime layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
