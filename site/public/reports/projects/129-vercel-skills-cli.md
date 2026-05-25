# Vercel Skills CLI Model Card

| Field | Value |
|---|---|
| Repository | [vercel-labs/skills](https://github.com/vercel-labs/skills) |
| Category | Open Agent Skills Installer CLI |
| Stars / forks snapshot | 19900 / 1.6k |
| Language | TypeScript/JavaScript |
| License | MIT |
| Raw capture | raw-github/vercel-labs_skills.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

Vercel Skills CLI 是开放 agent skills 生态的安装工具，支持 OpenCode、Claude Code、Codex、Cursor 等五十多个 agent，把 repo、URL、直接路径或 registry 中的技能安装到对应运行时。

## 2. Working Principle

GitHub/GitLab skill source -> npx skills installer -> host-specific agent skill directories -> shared skill ecosystem

## 3. Evidence Path

web GitHub page observed 289 commits, MIT license, 19.9k stars and 1.6k forks, 26 releases with v1.5.7 latest on 2026-05-14; README says it is the CLI for the open agent skills ecosystem and supports OpenCode, Claude Code, Codex, Cursor, and 51 more agents. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in prior hourly runs, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Open Agent Skills Installer CLI in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
