# Geneclaw Model Card

| Field | Value |
|---|---|
| Repository | [clawland-ai/geneclaw](https://github.com/Clawland-AI/Geneclaw) |
| Category | Safe Self-Evolving Agent Framework |
| Stars / forks snapshot | 36 / 8 |
| Commits / issues / PRs snapshot | 8 / 0 / 0 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/clawland-ai_geneclaw.md |
| Updated by | hourly public metadata update, 2026-06-04 16:00 +0800 |

## 1. Role in Self Evolve

Geneclaw is a safe-by-default self-evolving agent framework that observes failures, proposes fixes, and only applies changes behind an explicit safety gate. It matters because self-evolving agents need explicit memory, harness, benchmark, and safety substrates before their improvement claims become trustworthy.

## 2. Working Principle

observe failures -> diagnose root causes -> propose constrained diffs -> validate through five safety gates -> branch, test, and apply only after approval or configured autopilot

## 3. Evidence Path

web-observed GitHub page showed 36 stars, 8 forks, 8 commits, MIT license, 0 issues, 0 pull requests, and a dry-run-first self-evolution loop with a five-layer gatekeeper plus benchmark and rollback surfaces. This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on 2026-06-04, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Safe Self-Evolving Agent Framework: it shows how survey indexes, embeddable memory SDKs, harness taxonomies, controlled self-modification, or trace-scored benchmarks connect to the broader self-evolving-agent pipeline.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
