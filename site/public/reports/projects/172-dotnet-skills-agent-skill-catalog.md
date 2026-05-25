# dotnet-skills Model Card

| Field | Value |
|---|---|
| Repository | [managedcode/dotnet-skills](https://github.com/managedcode/dotnet-skills) |
| Category | .NET Agent Skill Catalog |
| Stars / forks snapshot | 403 / 31 |
| Language | C# |
| License | MIT |
| Raw capture | raw-github/managedcode_dotnet-skills.md |
| Updated by | hourly public metadata update, 2026-05-25 09:19 +0800 |

## 1. Role in Self Evolve

dotnet-skills 是面向 Codex、Claude Code、GitHub Copilot、Gemini、Junie 的 .NET skill catalog 和 CLI，把现代 .NET 官方文档、包、agents 与 upstream watch 组合成可安装技能供应链。

## 2. Working Principle

catalog packages -> SKILL.md/AGENT.md folders -> CLI recommend/install/update -> upstream watch -> daily catalog/site/tool release

## 3. Evidence Path

web GitHub page observed 177 commits, MIT license, 403 stars and 31 forks, 56 releases with latest Catalog 2026.5.24.0 on 2026-05-24, and README describes skills for ASP.NET Core, Orleans, MAUI, Semantic Kernel, Codex install paths, repo-owned orchestration agents, package manifests and upstream release/docs watch config. Shell GitHub API access remained DNS-blocked in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain .NET Agent Skill Catalog in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
