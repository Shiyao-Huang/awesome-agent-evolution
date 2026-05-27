# Agent Harness (EvalOps) Model Card

| Field | Value |
|---|---|
| Repository | [evalops/agent-harness](https://github.com/evalops/agent-harness) |
| Category | Cross-Provider Agent Harness Adapter |
| Stars / forks snapshot | 18 / 5 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/evalops_agent-harness.md |
| Updated by | hourly public metadata update, 2026-05-27 16:00 +0800 |

## 1. Role in Self Evolve

evalops/agent-harness is a lightweight adapter that lets one tool registry run across OpenAI Agents SDK and Anthropic Claude Agent SDK backends. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

register tools once -> normalize json schema and response shape -> lazy provider adapter import -> run identical prompts across OpenAI/Claude backends for comparison

## 3. Evidence Path

web-observed GitHub page showed 18 stars, 5 forks, 12 commits, MIT license, and README notes for thread-safe tool registry, lazy provider adapters, and provider comparison helper flows. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Cross-Provider Agent Harness Adapter: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
