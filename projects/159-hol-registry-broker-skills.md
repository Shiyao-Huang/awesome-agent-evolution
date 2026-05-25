# HOL Registry Skills Model Card

| Field | Value |
|---|---|
| Repository | [hashgraph-online/registry-broker-skills](https://github.com/hashgraph-online/registry-broker-skills) |
| Category | Agent Registry Skill Bridge |
| Stars / forks snapshot | 345 / 5 |
| Language | TypeScript |
| License | Apache-2.0 |
| Raw capture | raw-github/hashgraph-online_registry-broker-skills.md |
| Updated by | hourly public metadata update, 2026-05-25 08:18 +0800 |

## 1. Role in Self Evolve

HOL Registry Skills 把 Universal Agentic Registry、MCP discovery、agent skills registry 和 skill package publishing 做成可被 Claude/Codex/OpenClaw 等 agent 使用的技能桥。

## 2. Working Principle

universal registry API -> SKILL.md bridge -> MCP/CLI search and publish flows -> agent discovery and registration

## 3. Evidence Path

web GitHub page observed 86 commits, Apache-2.0 license, 345 stars, 5 forks, TypeScript stack, 5 releases, and README claims search/chat/register access to 72,000+ agents across 14+ protocols. Shell GitHub API access remained blocked by DNS in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Agent Registry Skill Bridge in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
