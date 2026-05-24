# SWE-Skills-Bench Model Card

| Field | Value |
|---|---|
| Repository | [GeniusHTX/SWE-Skills-Bench](https://github.com/GeniusHTX/SWE-Skills-Bench) |
| Category | Agent Skills 效果基准 |
| Stars / forks snapshot | 42 / 7 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/geniushtx_swe-skills-bench.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

SWE-Skills-Bench 是评估 skill 文档注入是否提升真实软件工程任务表现的 benchmark，提供 49 个任务、skill/no-skill 对照运行和结果统计脚本。

## 2. Working Principle

49 SWE 任务 -> skill/no-skill 对照 -> Docker 执行 -> pass-rate/token/duration 对比

## 3. Evidence Path

web GitHub page observed 49-task benchmark README, Hugging Face dataset loading path, Docker/Claude Code evaluation commands, MIT license, 13 commits, and public star/fork snapshot; shell GitHub API was blocked by DNS and gh auth was invalid, so this run marks freshness as web-page observed rather than API verified.

## 4. Teaching Use

Use this card to explain whether a repository is a runtime, benchmark, harness-evolution loop, memory/skill substrate, or resource index. The key reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark；star/fork/commit 快照来自公开 GitHub 页面文本。
