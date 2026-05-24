# agent-memory Model Card

| Field | Value |
|---|---|
| Repository | [jayzeng/agentmemory](https://github.com/jayzeng/agentmemory) |
| Category | Coding Agent Memory CLI |
| Stars / forks snapshot | 5 / 0 |
| Language | TypeScript |
| License | MIT |
| Raw capture | raw-github/jayzeng_agentmemory.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

agent-memory 是面向 Claude Code、OpenAI Codex、Cursor 和 Agent CLI 的本地优先记忆 CLI，用 Markdown 文件保存长期事实、daily log、topic note 和 scratchpad，并用 qmd 做语义检索与上下文注入。

## 2. Working Principle

agent turn -> local markdown memory -> qmd search -> selective context injection -> skill-installed recall

## 3. Evidence Path

web GitHub page observed 36 commits, MIT license, TypeScript primary language, Claude/Codex/Cursor skill install paths, qmd search, local markdown storage, 5 stars and 0 forks. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Coding-agent memory substrate in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples 或 skill install flows；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
