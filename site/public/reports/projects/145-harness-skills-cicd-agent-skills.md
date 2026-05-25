# Harness Skills Model Card

| Field | Value |
|---|---|
| Repository | [harness/harness-skills](https://github.com/harness/harness-skills) |
| Category | CI/CD Agent Skills System |
| Stars / forks snapshot | 20 / 4 |
| Language | Shell |
| License | Apache-2.0 |
| Raw capture | raw-github/harness_harness-skills.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

Harness Skills 是面向 Claude Code、Codex、Cursor 和 GitHub Copilot 的 CI/CD agent skills 系统，把 Harness MCP、AGENTS.md、CLAUDE.md 与技能目录组合成可复用的交付工作流。

## 2. Working Principle

repo-level agent instructions -> domain SKILL.md modules -> Harness MCP schema validation -> CI/CD creation/debug/governance workflows

## 3. Evidence Path

web GitHub page observed 72 commits, Apache-2.0 license, Shell primary language, 20 stars and 4 forks; README says the repo is a workflow system with AGENTS.md, CLAUDE.md, Copilot instructions, skills/*/SKILL.md, Harness MCP v2, schema discovery, dependency verification, and create/debug/govern/report modes. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain CI/CD Agent Skills System in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
