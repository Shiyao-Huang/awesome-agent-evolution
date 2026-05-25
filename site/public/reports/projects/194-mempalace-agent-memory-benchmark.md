# MemPalace Model Card

| Field | Value |
|---|---|
| Repository | [MemPalace/mempalace](https://github.com/MemPalace/mempalace) |
| Category | Benchmarked Agent Memory System |
| Stars / forks snapshot | 52800 / 7000 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/mempalace_mempalace.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

MemPalace 是 local-first agent memory system，强调 verbatim storage、可插拔检索、知识图谱和 MCP tools，并公开 LongMemEval/LoCoMo/ConvoMem/MemBench 复现实验说明。

## 2. Working Principle

conversation/project text -> palace index -> scoped semantic retrieval + graph timeline -> agent wake-up context

## 3. Evidence Path

web GitHub page observed MIT license, Python project, 52.8k stars and 7k forks; README claims verbatim local memory, ChromaDB-backed retrieval, knowledge graph, MCP tools, and reproducible benchmark files with 96.6% LongMemEval raw R@5 plus 98.4% held-out hybrid R@5. Treat benchmark numbers as project claims until independently rerun. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Benchmarked Agent Memory System in the raw -> classification -> project card -> site/report pipeline. The key question is whether memory/context evidence improves downstream agent behavior, or only improves retrieval on a local benchmark.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
