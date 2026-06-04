# Neo4j Agent Memory Model Card

| Field | Value |
|---|---|
| Repository | [neo4j-labs/agent-memory](https://github.com/neo4j-labs/agent-memory) |
| Category | Graph-Native Agent Memory |
| Stars / forks snapshot | 302 / 67 |
| Commits / issues / PRs snapshot | 431 / 30 / 26 |
| Language | Python/TypeScript |
| License | Apache-2.0 |
| Raw capture | raw-github/neo4j-labs_agent-memory.md |
| Updated by | hourly public metadata update, 2026-06-04 21:38 +0800 |

## 1. Role in Self Evolve

Neo4j Agent Memory 是图原生 agent memory 系统，提供 Python/TypeScript SDK、MCP server、短期/长期/推理记忆、实体抽取、context graph、eval harness 和 reasoning trace audit edges。 It matters because self-evolving agents need explicit memory, harness, benchmark, and safety substrates before their improvement claims become trustworthy.

## 2. Working Principle

conversation and reasoning traces -> Neo4j knowledge graph memory -> MCP or SDK retrieval -> eval harness and audit edges

## 3. Evidence Path

web-observed GitHub page showed 302 stars, 67 forks, 30 issues, 26 pull requests, 431 commits, Apache-2.0 license, one release v0.4.0 on 2026-05-21, Python 87.7%, TypeScript 11.5%, eval harness support, and explicit :TOUCHED audit edges. This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on 2026-06-04, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Graph-Native Agent Memory: it shows how memory systems, harness maps, benchmark suites, and outer-loop evaluators connect to the broader self-evolving-agent pipeline.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
