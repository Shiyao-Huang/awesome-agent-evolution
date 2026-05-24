# skills-supply Model Card

| Field | Value |
|---|---|
| Repository | [803/skills-supply](https://github.com/803/skills-supply) |
| Category | Cross-Agent Skill Supply Chain |
| Stars / forks snapshot | 32 / 1 |
| Language | TypeScript |
| License | MIT |
| Raw capture | raw-github/803_skills-supply.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

skills-supply 是跨 Claude Code、Amp、Codex、OpenCode、Factory 的 agent skill 管理 CLI，用 agents.toml 把技能包来源、同步和团队共享统一成一条供应链。

## 2. Working Principle

agents.toml manifest -> GitHub/plugin/local package source -> sk sync -> per-agent skill directories -> reconciled skill state

## 3. Evidence Path

web GitHub page observed 60 commits, MIT license, TypeScript primary language, sk CLI with agents.toml, latest sk@0.2.4 on Jan 12 2026, 32 stars and 1 fork. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Cross-Agent Skill Supply Chain in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
