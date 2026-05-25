# RASPUTIN Memory Model Card

| Field | Value |
|---|---|
| Repository | [jcartu/rasputin-memory](https://github.com/jcartu/rasputin-memory) |
| Category | Self-Hosted Agent Memory Backend |
| Stars / forks snapshot | 33 / 5 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/jcartu_rasputin-memory.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

RASPUTIN Memory 是面向 OpenClaw 和 Claude Code 的 self-hosted long-term memory backend，包含 fact/window/entity/event lane、hybrid search、Qwen reranker、MCP server 和 LoCoMo 评测记录。

## 2. Working Principle

conversation windows/facts/entities/events -> hybrid retrieval lanes -> reranker -> reflect/search API -> MCP recall

## 3. Evidence Path

web GitHub page observed MIT license, Python/JavaScript/Shell stack, 33 stars and 5 forks; README describes persistent conversation memory with LLM fact extraction, four-partition retrieval, Qwen3 reranker, HTTP API, MCP server, 33-question regression corpus and LoCoMo evaluation harness, while explicitly marking several future graph/temporal features as not integrated. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Self-Hosted Agent Memory Backend in the raw -> classification -> project card -> site/report pipeline. The key question is whether memory/context evidence improves downstream agent behavior, or only improves retrieval on a local benchmark.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
