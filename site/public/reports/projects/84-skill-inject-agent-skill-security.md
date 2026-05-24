# SKILL-INJECT Model Card

| Field | Value |
|---|---|
| Repository | [aisa-group/skill-inject](https://github.com/aisa-group/skill-inject) |
| Category | Agent Skill Security Benchmark |
| Stars / forks snapshot | 73 / 2 |
| Language | Python |
| License | See LICENSE |
| Raw capture | raw-github/aisa-group_skill-inject.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

SKILL-INJECT 是面向 agent skill 文件的安全 benchmark，用上下文/明显恶意注入、Docker agent 容器和多安全策略评估 Claude Code、Codex、Gemini CLI 等代理的技能文件攻击面。

## 2. Working Principle

skill file injection -> containerized agent run -> policy condition -> LLM judge/evaluation -> ablation comparison

## 3. Evidence Path

web GitHub page observed 8 commits, Python primary language, skill-file injection benchmark, Docker agent containers, Claude/Codex/Gemini agents, 73 stars and 2 forks. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Agent Skill Security Benchmark in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows 或 memory experiments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
