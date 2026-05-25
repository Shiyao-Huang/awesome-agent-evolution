# Memento-Skills Model Card

| Field | Value |
|---|---|
| Repository | [Memento-Teams/Memento-Skills](https://github.com/Memento-Teams/Memento-Skills) |
| Category | Self-Evolving Skill Memory Agent |
| Stars / forks snapshot | 1400 / 157 |
| Language | Python |
| License | Unknown |
| Raw capture | raw-github/memento-teams_memento-skills.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

Memento-Skills 是 deployment-time learning Agent 框架，让 Agent 在冻结模型参数的前提下通过 skill memory、失败反思和技能重写持续进化。

## 2. Working Principle

task execution -> skill retrieval/generation -> reflection -> utility update or skill rewrite -> growing skill memory

## 3. Evidence Path

web GitHub page observed 7 commits, 1.4k stars and 157 forks; README says Memento-Skills lets agents design agents, deploys an agent that learns, rewrites, and evolves its own skills, uses Read-Write Reflective Learning, routes or generates executable skills, writes back utility scores or optimizes skill folders, and reports improvement over HLE and GAIA rounds while skill memory grows. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Self-Evolving Skill Memory Agent in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
