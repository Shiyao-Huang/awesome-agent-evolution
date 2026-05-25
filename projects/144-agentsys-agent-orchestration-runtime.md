# AgentSys Model Card

| Field | Value |
|---|---|
| Repository | [agent-sh/agentsys](https://github.com/agent-sh/agentsys) |
| Category | Agent Orchestration Runtime |
| Stars / forks snapshot | 818 / 90 |
| Language | JavaScript |
| License | MIT |
| Raw capture | raw-github/agent-sh_agentsys.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

AgentSys 是面向 Claude Code、OpenCode、Codex、Cursor 和 Kiro 的 agent orchestration runtime，把插件、agents、skills、phase gates、持久状态和交付流水线组织成可安装系统。

## 2. Working Principle

plugins and agents -> phase-gated workflows -> persistent state -> review/CI/PR/delivery automation

## 3. Evidence Path

web GitHub page observed 766 commits, MIT license, 818 stars and 90 forks; README says AgentSys has 26 plugins, 50 agents, 47 skills, 3,518 tests and 5 platforms, supports Claude Code, OpenCode, Codex CLI, Cursor and Kiro, orchestrates task selection, branch management, review, CI, PR comments and deployment, and includes durable memory commands such as /axiom plus phase-gated workflows. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Agent Orchestration Runtime in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
