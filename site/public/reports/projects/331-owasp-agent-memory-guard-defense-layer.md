# OWASP Agent Memory Guard Model Card

| Field | Value |
|---|---|
| Repository | [OWASP/www-project-agent-memory-guard](https://github.com/OWASP/www-project-agent-memory-guard) |
| Category | Agent Memory Poisoning Defense and Guard Layer |
| Stars / forks snapshot | 17 / 10 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/owasp_www-project-agent-memory-guard.md |
| Updated by | hourly public metadata update, 2026-05-30 19:17 +0800 |

## 1. Role in Self Evolve

OWASP Agent Memory Guard is a runtime protection layer for agent memory operations, targeting memory poisoning, leakage, and integrity tampering. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

screen every memory read/write through detectors -> enforce declarative security policy -> emit forensics-ready events and snapshots -> block persistent memory poisoning before it propagates across sessions

## 3. Evidence Path

web-observed GitHub page showed 17 stars, 10 forks, 140 commits, Apache-2.0 license, and README claims as OWASP reference implementation for ASI06 memory poisoning. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Agent Memory Poisoning Defense and Guard Layer: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
