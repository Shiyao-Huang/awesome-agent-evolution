# Agent Memory Benchmark Model Card

| Field | Value |
|---|---|
| Repository | [vectorize-io/agent-memory-benchmark](https://github.com/vectorize-io/agent-memory-benchmark) |
| Category | Agent Memory Benchmark |
| Stars / forks snapshot | 43 / 15 |
| Language | Python |
| License | Unknown |
| Raw capture | raw-github/vectorize-io_agent-memory-benchmark.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

AMB 是面向 agent memory 的公开 benchmark，强调可复现的评测 harness、judge prompts、answer prompts 和结果，并同时跟踪 accuracy、speed、token cost。

## 2. Working Principle

dataset ingest -> memory provider retrieve -> answer generation -> judge scoring -> speed/token/cost comparison

## 3. Evidence Path

web GitHub page observed 29 commits, Python/Vue stack, benchmark topics, reproducibility claims, uv CLI commands, 43 stars and 15 forks. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Memory benchmark/evaluation harness in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples 或 skill install flows；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
