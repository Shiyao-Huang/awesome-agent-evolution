# memsearch Model Card

| Field | Value |
|---|---|
| Repository | [zilliztech/memsearch](https://github.com/zilliztech/memsearch) |
| Category | Agent Memory Search Layer |
| Stars / forks snapshot | 1800 / 169 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/zilliztech_memsearch.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

memsearch 是给 Claude Code、Codex、OpenClaw、OpenCode 等代理使用的 Markdown + Milvus 统一记忆层，支持索引、搜索、watch、compact 和平台插件。

## 2. Working Principle

markdown memory files -> hybrid BM25/vector index -> agent recall context -> answer/writeback -> re-index or live watch

## 3. Evidence Path

web GitHub page observed 352 commits, MIT license, Python primary language, Markdown/Milvus memory layer, Claude Code/OpenClaw/OpenCode/Codex plugins, v0.4.4 latest on 2026-05-21, 1.8k stars and 169 forks. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Agent Memory Search Layer in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
