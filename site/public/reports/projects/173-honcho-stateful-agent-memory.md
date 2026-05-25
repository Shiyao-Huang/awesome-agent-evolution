# Honcho Model Card

| Field | Value |
|---|---|
| Repository | [plastic-labs/honcho](https://github.com/plastic-labs/honcho) |
| Category | Agent Memory Infrastructure |
| Stars / forks snapshot | 4200 / 488 |
| Language | Python |
| License | AGPL-3.0 |
| Raw capture | raw-github/plastic-labs_honcho.md |
| Updated by | hourly public metadata update, 2026-05-25 11:20 +0800 |

## 1. Role in Self Evolve

Honcho is memory infrastructure for stateful agents, modeling peers, sessions, messages, representations and background reasoning so agents can carry durable context across conversations and tools.

## 2. Working Principle

messages/events -> background reasoning -> peer/session representations -> context/search/chat endpoints -> agent injection

## 3. Evidence Path

web GitHub page observed 527 commits, AGPL-3.0 license, Python/TypeScript stack, 4.2k stars and 488 forks; README describes memory infrastructure for stateful agents, peer/session/message primitives, MCP/OpenCode/OpenClaw/Hermes integrations and self-hosted FastAPI deployment. Shell GitHub API access remained DNS-blocked and the local gh token was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain how Honcho fits the raw -> classification -> project card -> site/report pipeline. It is useful for comparing whether self-evolution is implemented as memory substrate, trace learning, context graph grounding, or benchmark/evaluation infrastructure.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
