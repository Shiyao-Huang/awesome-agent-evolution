# Harness Model Card

| Field | Value |
|---|---|
| Repository | [revfactory/harness](https://github.com/revfactory/harness) |
| Category | Team-Architecture Harness Factory |
| Stars / forks snapshot | 3500 / 525 |
| Language | Markdown |
| License | Apache-2.0 |
| Raw capture | raw-github/revfactory_harness.md |
| Updated by | hourly public metadata update, 2026-05-25 09:19 +0800 |

## 1. Role in Self Evolve

revfactory/harness 是面向 Claude Code 的 team-architecture factory，把领域描述转成 agent team、skills、orchestration protocol 和验证流程，是 harness-as-meta-factory 的代表。

## 2. Working Principle

domain sentence -> six team patterns -> generated agent definitions + generated skills -> validation and A/B harness comparison

## 3. Evidence Path

web GitHub page observed 28 commits, Apache-2.0 license, 3.5k stars and 525 forks; README says it generates .claude/agents and .claude/skills from a domain description using six team-architecture patterns and positions itself as an L3 meta-factory for harnesses. Shell GitHub API access remained DNS-blocked in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Team-Architecture Harness Factory in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
