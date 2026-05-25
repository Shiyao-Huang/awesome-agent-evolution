# Tech Leads Club Agent Skills Registry Model Card

| Field | Value |
|---|---|
| Repository | [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) |
| Category | Secure Agent Skills Registry |
| Stars / forks snapshot | 4400 / 376 |
| Language | TypeScript/Python |
| License | MIT / CC-BY-4.0 content |
| Raw capture | raw-github/tech-leads-club_agent-skills.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

Tech Leads Club Agent Skills 是面向专业 AI coding agents 的安全技能注册表，提供 CLI 安装、缓存、审计日志、MCP progressive disclosure 和多 Agent 目标支持。

## 2. Working Principle

curated skill catalog -> security scan and lockfile integrity -> CLI install -> MCP progressive disclosure for coding agents

## 3. Evidence Path

web GitHub page observed 1,024 commits, 4.4k stars and 376 forks, 56 releases with skills-catalog-v0.14.3 latest on 2026-04-28, TypeScript/Python/JavaScript/Shell stack; README frames it as a secure validated skill registry with CLI install, cache, audit log, Snyk Agent Scan, lockfile integrity, and MCP tools list_skills/search_skills/read_skill/fetch_skill_files for Codex, Claude Code, Cursor, Copilot, OpenCode and related agents. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Secure Agent Skills Registry in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
