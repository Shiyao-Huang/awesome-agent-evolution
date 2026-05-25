# Skill Hunter Model Card

| Field | Value |
|---|---|
| Repository | [CE0Alex/skill-hunter](https://github.com/CE0Alex/skill-hunter) |
| Category | Agent Skill Discovery Skill |
| Stars / forks snapshot | 22 / 0 |
| Language | Markdown |
| License | MIT |
| Raw capture | raw-github/ce0alex_skill-hunter.md |
| Updated by | hourly public metadata update, 2026-05-25 08:18 +0800 |

## 1. Role in Self Evolve

Skill Hunter 是一个 meta-skill：它分析当前仓库并推荐最适合的外部 skill 栈，使 agent skills 从静态目录变成可验证、可匹配、可安装的能力选择流程。

## 2. Working Principle

repo scan -> clarifying questions -> registry search -> source/compatibility inspection -> recommended skill stack

## 3. Evidence Path

web GitHub page observed 52 commits, MIT license, 22 stars, 0 forks, 22 releases with v1.0.23 latest on 2026-01-31, and README workflow covering project analysis, clarifying questions, registry search, candidate verification and stack recommendation. Shell GitHub API access remained blocked by DNS in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Agent Skill Discovery Skill in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
