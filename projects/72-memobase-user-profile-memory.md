# Memobase Model Card

| Field | Value |
|---|---|
| Repository | [memodb-io/memobase](https://github.com/memodb-io/memobase) |
| Category | 用户画像长期记忆后端 |
| Stars / forks snapshot | 2700 / 212 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/memodb-io_memobase.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

Memobase 是 profile-based long-term memory 系统，围绕用户画像、事件时间线、批处理 buffer 和 context API 给 LLM 应用提供可控、低延迟的长期记忆。

## 2. Working Principle

聊天 blobs -> buffer 批处理 -> user profile/event timeline -> prompt context API

## 3. Evidence Path

web GitHub page observed README, 467 commits, Apache-2.0 license, 2.7k stars, 212 forks, profile/event memory workflow and SDK/MCP integration; shell GitHub API was blocked by DNS and gh auth was invalid, so this run marks freshness as web-page observed rather than API verified.

## 4. Teaching Use

Use this card to explain whether a repository is a runtime, benchmark, harness-evolution loop, memory/skill substrate, or resource index. The key reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark 或 SDK examples；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
