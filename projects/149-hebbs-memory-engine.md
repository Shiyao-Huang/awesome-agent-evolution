# HEBBS Model Card

| Field | Value |
|---|---|
| Repository | [hebbs-ai/hebbs-memory-engine](https://github.com/hebbs-ai/hebbs-memory-engine) |
| Category | Agent Memory Engine |
| Stars / forks snapshot | 28 / 4 |
| Language | Rust |
| License | Apache-2.0 / BSL |
| Raw capture | raw-github/hebbs-ai_hebbs-memory-engine.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

HEBBS 是面向 AI agents 的 Rust 记忆引擎，把项目旁路的 .hebbs cognition layer、四种召回、原生 consolidation、decay 与 Claude Code/OpenClaw skill surface 组合起来。

## 2. Working Principle

project files -> portable .hebbs cognition layer -> temporal/causal/analogical recall -> consolidation/decay -> agent skill surface

## 3. Evidence Path

web GitHub page redirected to hebbs-memory-engine and observed 389 commits, Apache-2.0 plus BSL license files, Rust stack, 28 stars and 4 forks; README says HEBBS is a cognitive memory primitive for AI agents with four recall strategies, native consolidation, automatic decay, portable .hebbs cognition layer, and skill support for Claude Code and OpenClaw. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Agent Memory Engine in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
