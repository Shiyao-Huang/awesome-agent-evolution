# Harness Evals Model Card

| Field | Value |
|---|---|
| Repository | [harness/harness-evals](https://github.com/harness/harness-evals) |
| Category | Agent Reliability Evaluation Framework |
| Stars / forks snapshot | 3 / 3 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/harness_harness-evals.md |
| Updated by | hourly public metadata update, 2026-05-27 16:00 +0800 |

## 1. Role in Self Evolve

Harness Evals is an open-source evaluation framework for LLM agents, prompts, and structured outputs with normalized score semantics. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

evaluate cases with normalized 0-1 scores -> configurable pass thresholds -> optional llm judged metrics and telemetry sinks -> regression export to CI observability pipelines

## 3. Evidence Path

web-observed GitHub page showed 3 stars, 3 forks, 86 commits, Apache-2.0 license, and README claims for normalized scoring, threshold-based pass/fail, optional LLM metrics, and OTLP/Langfuse integration. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Agent Reliability Evaluation Framework: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
