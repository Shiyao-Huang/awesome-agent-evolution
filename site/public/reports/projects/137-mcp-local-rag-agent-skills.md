# MCP Local RAG Agent Skills Model Card

| Field | Value |
|---|---|
| Repository | [shinpr/mcp-local-rag](https://github.com/shinpr/mcp-local-rag) |
| Category | Local-First RAG and Agent Skills |
| Stars / forks snapshot | 275 / 53 |
| Language | TypeScript |
| License | MIT |
| Raw capture | raw-github/shinpr_mcp-local-rag.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

MCP Local RAG 是开发者本地优先的 RAG 服务器，用 TypeScript 提供 MCP/CLI、语义+关键词混合搜索、离线隐私保护和 Codex/Claude Agent Skills 安装。

## 2. Working Principle

local documents/code -> semantic plus keyword RAG -> MCP/CLI tools -> optional Codex/Claude skills for query and ingestion workflows

## 3. Evidence Path

web GitHub page observed MIT license, 275 stars and 53 forks, 37 releases with v0.14.2 latest on 2026-05-23, TypeScript 99.6%; README says it provides local RAG for developers via MCP or CLI, semantic search with keyword boost, fully private offline operation, 7 MCP tools, and Agent Skills install commands including npx mcp-local-rag skills install --codex for better query formulation, result interpretation, and ingestion workflows. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Local-First RAG and Agent Skills in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
