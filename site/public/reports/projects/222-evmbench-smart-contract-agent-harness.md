# evmbench Model Card

| Field | Value |
|---|---|
| Repository | [paradigmxyz/evmbench](https://github.com/paradigmxyz/evmbench) |
| Category | Smart Contract Agent Benchmark Harness |
| Stars / forks snapshot | 421 / 62 |
| Language | TypeScript / Python |
| License | Apache-2.0 |
| Raw capture | raw-github/paradigmxyz_evmbench.md |
| Updated by | hourly public metadata update, 2026-05-26 02:39 +0800 |

## 1. Role in Self Evolve

evmbench is a domain-specific benchmark and harness for LLM agents that find and exploit smart-contract bugs, wrapping Codex detect-mode workers, job queues, secret handling, result validation and a report UI.

## 2. Working Principle

contract upload -> sandboxed Codex detect worker -> JSON vulnerability report -> UI/report validation

## 3. Evidence Path

web-observed GitHub page showed 421 stars, 62 forks, 5 commits, Apache-2.0 license, TypeScript/Python/Docker stack, frontend/backend/worker architecture, pinned frontier-evals reference, Codex detect-mode worker flow, parseable JSON vulnerability validation, and explicit security guidance for untrusted code; shell GitHub API freshness was blocked.

## 4. Teaching Use

Use this card to show how domain benchmarks package sandboxing, secrets, validation and report surfaces around an agent instead of only scoring final text.

## 5. Limits

The repository was not cloned in this iteration; no local install, benchmark rerun, security review, skill execution or CI gate was performed. Counts and claims are visible public-page signals unless independently revalidated later.
