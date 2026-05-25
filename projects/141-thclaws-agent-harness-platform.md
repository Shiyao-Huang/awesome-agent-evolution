# thClaws Model Card

| Field | Value |
|---|---|
| Repository | [thClaws/thClaws](https://github.com/thClaws/thClaws) |
| Category | Local Agent Harness Platform |
| Stars / forks snapshot | 1000 / 140 |
| Language | Rust |
| License | MIT OR Apache-2.0 |
| Raw capture | raw-github/thclaws_thclaws.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

thClaws 是本地优先的 Rust Agent harness 平台，用一个 engine 支撑 GUI、CLI、单次命令和 webapp，并把 skills、commands、agent definitions 与 MCP servers 作为可安装插件打包。

## 2. Working Principle

local Rust agent engine -> GUI/CLI/web surfaces -> MCP/tools/memory -> plugin-bundled skills and agents

## 3. Evidence Path

web GitHub page observed 359 commits, MIT OR Apache-2.0 license, 1k stars and 140 forks; README describes a native Rust local AI agent workspace with Terminal/Chat/Files/Team surfaces, MCP servers, persistent memory, and a plugin system bundling skills, commands, agent definitions and MCP servers under one manifest installable from git or zip. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Local Agent Harness Platform in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
