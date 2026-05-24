# Claw Bench Model Card

| Field | Value |
|---|---|
| Repository | [claw-bench/claw-bench](https://github.com/claw-bench/claw-bench) |
| Category | 真实 Agent 任务基准 |
| Stars / forks snapshot | 171 / 18 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/claw-bench_claw-bench.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

把真实 agent 产品直接放进任务环境，让 agent 读取 skill.md、执行实际工作，并通过 pytest verifier 与 leaderboard 形成评测闭环。

## 2. Working Principle

任务库 + skill.md 指令 + pytest verifier + weighted scoring + leaderboard。

## 3. Evidence Path

web GitHub page captured stars/forks/visible paths; shell GitHub API was blocked by DNS, so this run marks freshness as web-page observed rather than API verified.

## 4. Teaching Use

Use this card to explain whether a repository is a runtime, benchmark, harness-evolution loop, memory/skill substrate, or resource index. The key reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark；任务数量和 star 快照来自公开页面文本。
