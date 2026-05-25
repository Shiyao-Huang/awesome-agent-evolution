# Signet AI Model Card

| Field | Value |
|---|---|
| Repository | [Signet-AI/signetai](https://github.com/Signet-AI/signetai) |
| Category | Agent Context and Memory Substrate |
| Stars / forks snapshot | 167 / 33 |
| Language | TypeScript |
| License | Apache-2.0 |
| Raw capture | raw-github/signet-ai_signetai.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

Signet 是 local-first agent context layer，把 identity、memory、provenance、secrets、skills 和工作知识放在可检查的 SQLite/文件记录中，支持 Claude Code、OpenCode、OpenClaw、Codex、Gemini CLI 等 harness。

## 2. Working Principle

raw transcripts/files -> semantic memory -> FTS/vector/graph retrieval -> bounded context injection across harnesses

## 3. Evidence Path

web GitHub page observed 2,150 commits, Apache-2.0 license, 167 stars and 33 forks; README describes local-first identity, memory and secrets for AI agents, ambient memory, raw transcript provenance, SQLite/FTS/vector/graph retrieval, and 97.6% LongMemEval answer accuracy claim under its MemoryBench rules profile. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Agent Context and Memory Substrate in the raw -> classification -> project card -> site/report pipeline. The key question is whether memory/context evidence improves downstream agent behavior, or only improves retrieval on a local benchmark.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
