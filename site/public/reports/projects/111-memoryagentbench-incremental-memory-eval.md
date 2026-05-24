# MemoryAgentBench Model Card

| Field | Value |
|---|---|
| Repository | [HUST-AI-HYZ/MemoryAgentBench](https://github.com/HUST-AI-HYZ/MemoryAgentBench) |
| Category | Incremental Agent Memory Benchmark |
| Stars / forks snapshot | 341 / 53 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/hust-ai-hyz_memoryagentbench.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

MemoryAgentBench 是 ICLR 2026 记忆评测代码库，用增量多轮交互测试 agent memory 的准确检索、测试时学习、长程理解和冲突解决能力。

## 2. Working Principle

incremental multi-turn interaction -> memory injection -> repeated queries -> retrieval/learning/conflict metrics -> agent memory comparison

## 3. Evidence Path

web GitHub page observed 24 commits, MIT license, Python primary language, ICLR 2026 memory-agent benchmark, LongMemEval/EventQA/FactConsolidation signals, mem0/letta/cognee method folders, 341 stars and 53 forks. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Incremental Agent Memory Benchmark in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
