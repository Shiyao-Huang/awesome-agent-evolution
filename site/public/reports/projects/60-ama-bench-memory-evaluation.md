# AMA-Bench Model Card

| Field | Value |
|---|---|
| Repository | [AMA-Bench/AMA-Bench](https://github.com/AMA-Bench/AMA-Bench) |
| Category | Agent 长程记忆基准 |
| Stars / forks snapshot | 40 / 8 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/ama-bench_ama-bench.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

面向 agentic applications 的长程记忆 benchmark，评估方法是否能从长 agent 轨迹构建记忆、召回证据并回答问题。

## 2. Working Principle

把 agent 长轨迹转换为记忆构建/检索接口，再用问答与评审器衡量长期证据保持能力。

## 3. Evidence Path

web GitHub page observed benchmark README, two-stage method API, judge reliability table, and leaderboard links; shell GitHub API was blocked by DNS and gh auth was invalid, so this run marks freshness as web-page observed rather than API verified.

## 4. Teaching Use

Use this card to explain whether a repository is a runtime, benchmark, harness-evolution loop, memory/skill substrate, or resource index. The key reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark；star/fork/commit 快照来自公开 GitHub 页面文本。
