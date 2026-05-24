# BrowserGym Model Card

| Field | Value |
|---|---|
| Repository | [ServiceNow/BrowserGym](https://github.com/ServiceNow/BrowserGym) |
| Category | Web Agent Benchmark Gym |
| Stars / forks snapshot | 1200 / 174 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/servicenow_browsergym.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

ServiceNow BrowserGym 是网页任务自动化的 Gym 环境，整合 MiniWoB、WebArena、VisualWebArena、WorkArena、AssistantBench、WebLINX、OpenApps、TimeWarp 等 web agent benchmark。

## 2. Working Principle

Gym environment -> browser task benchmarks -> agent loop -> reward/termination metrics

## 3. Evidence Path

web GitHub page observed README, 385 commits, 1.2k stars, 174 forks, browsergym package install instructions, benchmark list, and AgentLab integration; shell GitHub API was blocked by DNS and gh auth was invalid, so this run marks freshness as web-page observed rather than API verified.

## 4. Teaching Use

Use this card to explain whether a repository is a runtime, benchmark, harness-evolution loop, memory/skill substrate, or resource index. The key reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark 或 SDK examples；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
