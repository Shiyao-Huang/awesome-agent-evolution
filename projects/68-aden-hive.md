# Aden Hive Model Card

| Field | Value |
|---|---|
| Repository | [aden-hive/hive](https://github.com/aden-hive/hive) |
| Category | 生产级 Multi-Agent Harness |
| Stars / forks snapshot | 10,400 / 5700 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/aden-hive_hive.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

Aden Hive 是生产 AI 的 multi-agent harness，强调状态持久化、崩溃恢复、成本控制、审计轨迹、MCP 工具集成和失败驱动的 graph evolution。

## 2. Working Principle

目标描述 -> 自动生成 graph -> 执行/观测 -> 失败捕获 -> graph evolution

## 3. Evidence Path

web GitHub page observed production multi-agent harness README, self-heal through failure capture and graph evolution claim, quickstart/runtime docs, Apache-2.0 license, and public star/fork snapshot; shell GitHub API was blocked by DNS and gh auth was invalid, so this run marks freshness as web-page observed rather than API verified.

## 4. Teaching Use

Use this card to explain whether a repository is a runtime, benchmark, harness-evolution loop, memory/skill substrate, or resource index. The key reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark；star/fork/commit 快照来自公开 GitHub 页面文本。
