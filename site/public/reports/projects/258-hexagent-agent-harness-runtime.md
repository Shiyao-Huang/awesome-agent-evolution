# HexAgent Model Card

| Field | Value |
|---|---|
| Repository | [UnicomAI/hexagent](https://github.com/UnicomAI/hexagent) |
| Category | LLM Computer Harness Runtime |
| Stars / forks snapshot | 122 / 12 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/unicomai_hexagent.md |
| Updated by | hourly public metadata update, 2026-05-27 16:00 +0800 |

## 1. Role in Self Evolve

HexAgent is a harness runtime that gives LLM agents an isolated computer layer and pluggable execution protocol instead of coupling agent runtime and machine state. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

runtime/computer separation -> pluggable local-vm-cloud computer protocol -> middleware hooks and skill injection -> isolated subagent execution with MCP/tool orchestration

## 3. Evidence Path

web-observed GitHub page showed 122 stars, 12 forks, 105 commits, MIT license, and README claims for runtime/computer isolation, pluggable Computer protocol, middleware pipeline, and skill discovery. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain LLM Computer Harness Runtime: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
