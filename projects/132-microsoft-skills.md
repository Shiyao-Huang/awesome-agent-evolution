# Microsoft Skills Model Card

| Field | Value |
|---|---|
| Repository | [microsoft/skills](https://github.com/microsoft/skills) |
| Category | Microsoft SDK Agent Skills Catalog |
| Stars / forks snapshot | 2400 / 266 |
| Language | TypeScript/Astro/JavaScript/Shell |
| License | MIT |
| Raw capture | raw-github/microsoft_skills.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

Microsoft Skills 汇集 SDK skills、MCP servers、custom agents 和 AGENTS.md 模板，用于让 coding agents 在 Azure SDK、Microsoft AI Foundry 和 Microsoft 365 等场景中获得结构化、可测试的工程上下文。

## 2. Working Principle

SDK docs + MCP configs + custom agents -> skill catalog -> acceptance scenarios -> coding-agent grounding for Azure/Microsoft work

## 3. Evidence Path

web GitHub page observed MIT license, 2.4k stars and 266 forks, no releases, TypeScript/Astro/JavaScript/Shell stack; README says the repo contains Skills, MCP servers, Custom Agents, and Agents.md for SDKs to ground Coding Agents, with a workflow for SKILL.md creation, categorization, acceptance criteria, and mock harness tests. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in prior hourly runs, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Microsoft SDK Agent Skills Catalog in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
