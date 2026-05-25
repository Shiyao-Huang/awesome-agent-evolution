# Agent Skills Kit Model Card

| Field | Value |
|---|---|
| Repository | [jscraik/Agent-Skills](https://github.com/jscraik/Agent-Skills) |
| Category | Governed Agent Skills Control Plane |
| Stars / forks snapshot | 4 / 4 |
| Language | TypeScript/Python/Shell/Markdown |
| License | Apache-2.0 |
| Raw capture | raw-github/jscraik_agent-skills.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

Agent Skills Kit 是面向 Codex 和 AI coding agents 的技能控制平面，用 ask CLI、runtime projections、command handles、repo memory search 和 proof commands 管理技能质量与上下文成本。

## 2. Working Principle

canonical skill source -> generated command handles -> runtime projections -> audits/evals/proof commands

## 3. Evidence Path

web GitHub page observed 645 commits, Apache-2.0 license, 4 stars and 4 forks; README says Agent Skills Kit exposes 26 skills, 110 generated command handles, rooted runtime projections, ask CLI robot mode, memory search, audits, evals, and proof commands for Codex and AI coding agents. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in prior hourly runs, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Governed Agent Skills Control Plane in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
