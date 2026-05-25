# Neo4j Agent Memory Model Card

| Field | Value |
|---|---|
| Repository | [neo4j-labs/agent-memory](https://github.com/neo4j-labs/agent-memory) |
| Category | Graph-Native Agent Memory |
| Stars / forks snapshot | 262 / 63 |
| Language | Python/TypeScript |
| License | Apache-2.0 |
| Raw capture | raw-github/neo4j-labs_agent-memory.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

Neo4j Agent Memory 是图原生 agent memory 系统，提供 Python/TypeScript SDK、MCP server、短期/长期/推理记忆、实体抽取、context graph、eval harness 和 reasoning trace audit edges。

## 2. Working Principle

conversation/reasoning trace -> Neo4j knowledge graph memory -> MCP/SDK context retrieval -> eval harness and audit edges

## 3. Evidence Path

web GitHub page observed 418 commits, Apache-2.0 license, 262 stars and 63 forks, v0.4.0 latest on 2026-05-21, Python 88.6% and TypeScript 10.6%; README says it stores conversations, builds knowledge graphs, supports MCP with 16 tools, LangChain/PydanticAI/ADK/CrewAI integrations, eval harness, and TOUCHED audit edges. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in prior hourly runs, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Graph-Native Agent Memory in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
