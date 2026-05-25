# Agent Skills Hub Model Card

| Field | Value |
|---|---|
| Repository | [agent-skills-hub/agent-skills-hub](https://github.com/agent-skills-hub/agent-skills-hub) |
| Category | Cross-Agent Skills Registry |
| Stars / forks snapshot | 40 / 13 |
| Language | JavaScript |
| License | MIT |
| Raw capture | raw-github/agent-skills-hub_agent-skills-hub.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

Agent Skills Hub 是跨 Claude Code、Gemini、Cursor、Kiro、Codex、Antigravity、OpenCode 等工具的 skills 注册表和 NPX 安装器。

## 2. Working Principle

skill catalog -> NPX installer -> per-agent install targets -> cross-agent reusable workflow instructions

## 3. Evidence Path

web GitHub page observed 23 commits, MIT license, 40 stars and 13 forks; README says it maintains 790+ skills, ships an NPX-first CLI, supports Claude Code, Gemini, Cursor, Kiro, Codex, Antigravity, OpenCode, AdaL and OpenClaw install targets, and treats skills as Markdown-based reasoning plugins. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Cross-Agent Skills Registry in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
