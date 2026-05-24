# Mem0 Memory Benchmarks Model Card

| Field | Value |
|---|---|
| Repository | [mem0ai/memory-benchmarks](https://github.com/mem0ai/memory-benchmarks) |
| Category | Memory Benchmark Suite |
| Stars / forks snapshot | 33 / 9 |
| Language | Python/TypeScript |
| License | Apache-2.0 |
| Raw capture | raw-github/mem0ai_memory-benchmarks.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

mem0ai/memory-benchmarks 是 memory-augmented LLM systems 的公开评测套件，覆盖 LOCOMO、LongMemEval 和 BEAM，并同时支持 Mem0 cloud 与 OSS self-hosted pipeline。

## 2. Working Principle

memory benchmark dataset -> ingest/search/evaluate pipeline -> answerer/judge scoring -> UI/results comparison

## 3. Evidence Path

web GitHub page observed 15 commits, Apache-2.0 license, Python/TypeScript stack, LOCOMO/LongMemEval/BEAM benchmarks, Mem0 cloud and OSS paths, 33 stars and 9 forks. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Memory Benchmark Suite in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows 或 memory experiments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
