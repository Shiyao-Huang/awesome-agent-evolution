# AceForge Model Card

| Field | Value |
|---|---|
| Repository | [sudokrang/aceforge](https://github.com/sudokrang/aceforge) |
| Category | OpenClaw 技能自进化引擎 |
| Stars / forks snapshot | 1 / 0 |
| Language | TypeScript |
| License | MIT |
| Raw capture | raw-github/sudokrang_aceforge.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

OpenClaw agent 的自进化技能引擎，观察工具调用、失败和用户修正，把模式提炼为可审计、人工批准的 SKILL.md。

## 2. Working Principle

让 agent 操作日志反向生成技能候选，再经双模型与对抗验证门控，最后由人类确认是否固化。

## 3. Evidence Path

web GitHub page observed OpenClaw skill engine README, plugin manifest, validation/security sections; shell GitHub API was blocked by DNS and gh auth was invalid, so this run marks freshness as web-page observed rather than API verified.

## 4. Teaching Use

Use this card to explain whether a repository is a runtime, benchmark, harness-evolution loop, memory/skill substrate, or resource index. The key reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark；star/fork/commit 快照来自公开 GitHub 页面文本。
