# JordanMcCann agentmemory Model Card

| Field | Value |
|---|---|
| Repository | [JordanMcCann/agentmemory](https://github.com/JordanMcCann/agentmemory) |
| Category | Agent Memory Benchmark Claim |
| Stars / forks snapshot | 23 / 2 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/jordanmccann_agentmemory.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

JordanMcCann/agentmemory 是一个以 LongMemEval 96.20% world-record claim 为中心的 agent memory system，附带 LEGITIMACY.md、完整运行日志和 real-retrieval benchmark harness。

## 2. Working Principle

ingest sessions -> graph/vector/BM25 recall -> context build -> LongMemEval real-retrieval run -> legitimacy audit

## 3. Evidence Path

web GitHub page observed 1 commit, MIT license, Python memory package, LongMemEval 96.20% claim, legitimacy verification notes, 23 stars and 2 forks. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Agent Memory Benchmark Claim in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
