# MCP Memory Service Model Card

| Field | Value |
|---|---|
| Repository | [doobidoo/mcp-memory-service](https://github.com/doobidoo/mcp-memory-service) |
| Category | Shared Agent Memory Service |
| Stars / forks snapshot | 1900 / 291 |
| Language | Python/JavaScript/Shell |
| License | Apache-2.0 |
| Raw capture | raw-github/doobidoo_mcp-memory-service.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

MCP Memory Service 是面向 LangGraph、CrewAI、AutoGen、Claude、OpenCode、Codex CLI 等 agent 的共享记忆后端，提供 REST API、MCP、OAuth、dashboard、知识图谱和本地 embedding。

## 2. Working Principle

agent messages/decisions -> REST/MCP memory service -> knowledge graph + hybrid search -> shared cross-agent recall and coordination

## 3. Evidence Path

web GitHub page observed 2,728 commits, Apache-2.0 license, 1.9k stars and 291 forks, 337 releases with v10.65.0 latest on 2026-05-24; README says it is a persistent shared memory backend with REST API, MCP, OAuth, CLI, dashboard, typed knowledge graph, local embeddings, 76 endpoints, and real-world multi-agent cluster use. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in prior hourly runs, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Shared Agent Memory Service in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
