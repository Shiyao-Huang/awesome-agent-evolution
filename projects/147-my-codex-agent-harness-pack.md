# my-codex Model Card

| Field | Value |
|---|---|
| Repository | [sehoon787/my-codex](https://github.com/sehoon787/my-codex) |
| Category | Codex Agent Harness Pack |
| Stars / forks snapshot | 16 / 2 |
| Language | Shell/Markdown |
| License | MIT |
| Raw capture | raw-github/sehoon787_my-codex.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

my-codex 是面向 OpenAI Codex CLI 的 agent harness 包，把 Boss 元编排器、Codex agents、skills、hooks 和 MCP servers 打包成一键安装的 specialist delegation 环境。

## 2. Working Principle

Codex plugin package -> Boss meta-orchestrator -> agent/skill discovery -> spawn_agent delegation -> verification loop

## 3. Evidence Path

web GitHub page observed 205 commits, MIT license, 16 stars and 2 forks; README says my-codex is an all-in-one OpenAI Codex CLI harness with 330+ agents ready, Boss auto-discovers agents and skills at runtime, routes tasks through spawn_agent, and includes .codex-plugin, codex-agents, hooks, skills and MCP configuration. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Codex Agent Harness Pack in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
