# ADHDev Model Card

| Field | Value |
|---|---|
| Repository | [vilmire/adhdev](https://github.com/vilmire/adhdev) |
| Category | Coding-Agent Control Plane |
| Stars / forks snapshot | 33 / 8 |
| Language | TypeScript |
| License | AGPL-3.0 |
| Raw capture | raw-github/vilmire_adhdev.md |
| Updated by | hourly public metadata update, 2026-05-26 05:44 +0800 |

## 1. Role in Self Evolve

ADHDev is not a self-evolution algorithm, but it is relevant infrastructure for long-running coding agents: it gives users a local dashboard to monitor, interrupt, resume, and inspect multiple agent sessions.

## 2. Working Principle

coding-agent session -> local daemon/dashboard -> status, terminal, chat, approvals, history -> human-controlled continuation or interruption

## 3. Evidence Path

Web-observed GitHub evidence showed 33 stars, 8 forks, 1,127 commits, 243 tags, AGPL-3.0 licensing, and a TypeScript-dominant implementation. README states it supports Cursor, Google Antigravity, VS Code, Kiro, Codex, Claude Code, Hermes Agent, Codex CLI, and Claude Code CLI as tested or working integrations.

## 4. Teaching Use

Use this card to explain the operational control-plane layer: self-improving coding agents need observable sessions and approval states before they can safely run as background workers.

## 5. Limits

The repository was not run locally and no agent session was connected. Shell GitHub API DNS failed, so metadata is web-observed rather than API-verified.
