# ICM Model Card

| Field | Value |
|---|---|
| Repository | [rtk-ai/icm](https://github.com/rtk-ai/icm) |
| Category | Permanent MCP-Native Agent Memory |
| Stars / forks snapshot | 371 / 35 |
| Language | Rust |
| License | Apache-2.0 |
| Raw capture | raw-github/rtk-ai_icm.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

ICM 是 experimental 但实用的永久 agent memory 层，用 Rust 单二进制和 MCP native 接口让 coding agent 在会话之间保留长期上下文。

## 2. Working Principle

agent conversation/tool trace -> single-binary local memory -> MCP/hooks recall -> persistent context across sessions

## 3. Evidence Path

web GitHub page observed 307 commits, Apache-2.0 license, Rust/Cargo layout, 371 stars and 35 forks; README says permanent memory for AI agents, single binary, zero dependencies, MCP native, pre-1.0 experimental but used daily by maintainer as a coding memory layer. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Permanent MCP-Native Agent Memory in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
