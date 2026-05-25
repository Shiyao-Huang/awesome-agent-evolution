# OpenClaw Harness Engineering Model Card

| Field | Value |
|---|---|
| Repository | [guixiang123124/openclaw-harness](https://github.com/guixiang123124/openclaw-harness) |
| Category | OpenClaw Harness Engineering |
| Stars / forks snapshot | 3 / 0 |
| Language | Markdown |
| License | MIT |
| Raw capture | raw-github/guixiang123124_openclaw-harness.md |
| Updated by | hourly public metadata update, 2026-05-25 09:19 +0800 |

## 1. Role in Self Evolve

OpenClaw Harness Engineering 把 OpenClaw agent 包装成工程团队：Lead 规划 sprint，ACP Builder 实现，Lead/Reviewer 按功能、质量、安全、边界条件评分并迭代到可交付。

## 2. Working Principle

lead agent scouts repo -> SPRINT.md contract -> ACP builder agents -> weighted review -> iterate until pass -> ship/report

## 3. Evidence Path

web GitHub page observed 13 commits, MIT license, 3 stars and 0 forks; README describes native OpenClaw orchestration, ACP spawning of Claude Code builders, five-phase scout/build/review/iterate/ship pipeline, four-dimension scoring, security floor rule, sprint templates and cross-sprint learning roadmap. Shell GitHub API access remained DNS-blocked in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain OpenClaw Harness Engineering in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
