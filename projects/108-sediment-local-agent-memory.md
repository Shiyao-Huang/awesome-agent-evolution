# Sediment Model Card

| Field | Value |
|---|---|
| Repository | [rendro/sediment](https://github.com/rendro/sediment) |
| Category | Local-First Agent Memory MCP |
| Stars / forks snapshot | 32 / 5 |
| Language | Rust |
| License | MIT |
| Raw capture | raw-github/rendro_sediment.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

Sediment 是 local-first、MCP-native 的 agent semantic memory 层，用单文件 Rust binary 把向量检索、关系图、访问衰减、项目隔离和冲突检测组合成可本地运行的记忆系统。

## 2. Working Principle

local memory store -> vector plus graph index -> scoped recall -> decay/trust rerank -> MCP clients

## 3. Evidence Path

web GitHub page observed 86 commits, MIT license, Rust primary language, single-binary MCP memory server, LanceDB/SQLite hybrid graph+vector design, benchmark table versus ChromaDB/Mem0, v0.5.1 latest Mar 30 2026, 32 stars and 5 forks. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Local-First Agent Memory MCP in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
