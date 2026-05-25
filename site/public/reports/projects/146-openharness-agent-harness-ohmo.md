# OpenHarness Model Card

| Field | Value |
|---|---|
| Repository | [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) |
| Category | Open Agent Harness Runtime |
| Stars / forks snapshot | 13000 / 2.2k |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/hkuds_openharness.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

OpenHarness 是内置个人 Agent Ohmo 的开源 agent harness runtime，把 tool-use、skills、memory、多 Agent coordination、MCP 和安全权限系统组织成轻量基础设施。

## 2. Working Principle

agent loop -> tools/skills/plugins/permissions/hooks -> memory/tasks/coordinator -> CLI and React TUI surfaces

## 3. Evidence Path

web GitHub page observed 422 commits, MIT license, 13k stars and 2.2k forks; README says OpenHarness provides tool-use, skills, memory and multi-agent coordination, supports Copilot OAuth backend, and implements a harness architecture with tools, skills, plugins, permissions, hooks, commands, MCP, memory, tasks, coordinator and prompt assembly. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Open Agent Harness Runtime in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
