# HaluMem Model Card

| Field | Value |
|---|---|
| Repository | [MemTensor/HaluMem](https://github.com/MemTensor/HaluMem) |
| Category | Agent Memory Hallucination Benchmark |
| Stars / forks snapshot | 138 / 14 |
| Language | Python |
| License | Unknown |
| Raw capture | raw-github/memtensor_halumem.md |
| Updated by | hourly public metadata update, 2026-05-25 11:20 +0800 |

## 1. Role in Self Evolve

HaluMem is an operation-level benchmark for hallucinations in memory systems, decomposing memory evaluation into extraction, update and question answering tasks with leaderboard comparisons.

## 2. Working Principle

persona/life timeline -> synthetic sessions with distractors -> memory extraction/update/QA tasks -> hallucination leaderboard

## 3. Evidence Path

web GitHub page observed 19 commits, Python stack, 138 stars and 14 forks; README describes HaluMem as a comprehensive operation-level hallucination benchmark for memory systems, evaluating extraction, updating and QA across Mem0, Memobase, MemOS, Supermemory and Zep. Shell GitHub API access remained DNS-blocked and the local gh token was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain how HaluMem fits the raw -> classification -> project card -> site/report pipeline. It is useful for comparing whether self-evolution is implemented as memory substrate, trace learning, context graph grounding, or benchmark/evaluation infrastructure.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
