# Harness Evolver Model Card

| Field | Value |
|---|---|
| Repository | [raphaelchristi/harness-evolver](https://github.com/raphaelchristi/harness-evolver) |
| Category | Harness 自进化工具 |
| Stars / forks snapshot | 21 / 2 |
| Language | TypeScript |
| License | MIT |
| Raw capture | raw-github/raphaelchristi_harness-evolver.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

把 agent harness 自身作为可进化对象，自动修改 prompts、routing、tools 和 architecture，并用 evaluation gate 合并赢家。

## 2. Working Principle

failure data -> proposer worktrees -> LangSmith evaluation -> regression gate -> merge winning candidates。

## 3. Evidence Path

web GitHub page captured Claude Code plugin/npx install path, command surface, and repository layout.

## 4. Teaching Use

Use this card to explain whether a repository is a runtime, benchmark, harness-evolution loop, memory/skill substrate, or resource index. The key reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

未安装插件或运行 LangSmith-backed eval；本轮只记录 public metadata 与机制信号。
