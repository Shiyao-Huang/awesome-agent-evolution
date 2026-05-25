# Arc Agent Workflow Plugin Model Card

| Field | Value |
|---|---|
| Repository | [howells/arc](https://github.com/howells/arc) |
| Category | Agent Workflow Plugin |
| Stars / forks snapshot | 22 / 2 |
| Language | TypeScript/Markdown |
| License | MIT |
| Raw capture | raw-github/howells_arc.md |
| Updated by | hourly public metadata update, 2026-05-25 13:21 +0800 |

## 1. Role in Self Evolve

Arc is a self-contained software development lifecycle for coding agents, exposing Claude plugin commands and Codex skills/plugins for ideation, implementation, review, testing, launch readiness and commits.

## 2. Working Principle

vision/spec -> implementation/testing -> review/audit/refactor -> commit/launch

## 3. Evidence Path

web GitHub page observed 531 commits, MIT license, 22 stars and 2 forks; README describes .codex-plugin, .claude-plugin, .agents/skills, installer paths, and workflow stages from vision and ideation through implementation, audit, testing and commit.. Shell GitHub API access remained DNS-blocked and the local gh token was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain how Arc fits the raw -> classification -> project card -> site/report pipeline. It is useful for comparing whether self-evolution is implemented as skill supply, memory substrate, planning persistence, harness governance, multi-agent orchestration, provider API packaging, or benchmark/evaluation infrastructure.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
