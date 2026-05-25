# Agentic Context Engine Model Card

| Field | Value |
|---|---|
| Repository | [kayba-ai/agentic-context-engine](https://github.com/kayba-ai/agentic-context-engine) |
| Category | Agent Experience Learning Loop |
| Stars / forks snapshot | 2200 / 273 |
| Language | Python |
| License | View license |
| Raw capture | raw-github/kayba-ai_agentic-context-engine.md |
| Updated by | hourly public metadata update, 2026-05-25 11:20 +0800 |

## 1. Role in Self Evolve

Agentic Context Engine adds a persistent learning loop for agents: it reflects on traces, records strategies in a skillbook and reinjects those strategies into future runs across CLI, browser and LangChain-style agents.

## 2. Working Principle

task trace -> reflector -> skill manager -> skillbook update -> strategies injected into future agent runs

## 3. Evidence Path

web GitHub page observed 931 commits, 2.2k stars and 273 forks, v0.12.0 latest on 2026-05-07; README says ACE makes agents learn from experience, uses trace reflection, SkillManager and Skillbook updates, supports Claude Code/browser-use/LangChain runners, and reports Tau2 and Claude Code translation benchmark signals. Shell GitHub API access remained DNS-blocked and the local gh token was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain how Agentic Context Engine fits the raw -> classification -> project card -> site/report pipeline. It is useful for comparing whether self-evolution is implemented as memory substrate, trace learning, context graph grounding, or benchmark/evaluation infrastructure.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
