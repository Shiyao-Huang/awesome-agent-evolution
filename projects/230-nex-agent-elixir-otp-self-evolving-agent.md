# NexAgent Model Card

| Field | Value |
|---|---|
| Repository | [gofenix/nex-agent](https://github.com/gofenix/nex-agent) |
| Category | Elixir/OTP Self-Evolving Agent Runtime |
| Stars / forks snapshot | 64 / 5 |
| Language | Elixir |
| License | Unknown from public capture |
| Raw capture | raw-github/gofenix_nex-agent.md |
| Updated by | hourly public metadata update, 2026-05-26 05:44 +0800 |

## 1. Role in Self Evolve

NexAgent is relevant because it treats long-running agent life as a runtime problem: persistent sessions, memory, dynamic tools, skills, cron, subagents, and source-level upgrade management live inside an OTP supervision model.

## 2. Working Principle

chat/app event -> supervised runner -> memory/tool/skill registry -> subagent or scheduled job -> code upgrade manager -> durable next runtime state

## 3. Evidence Path

Web-observed GitHub evidence showed 64 stars, 5 forks, 159 commits, one tag, and an Elixir/OTP stack. README architecture names Gateway, Runner, SessionManager, Memory/Memory.Index, Tool.Registry, Skills, Cron, Subagent, CodeUpgrade, and UpgradeManager.

## 4. Teaching Use

Use this card when explaining why self-evolving agents need runtime fault tolerance and boundaries, not only prompt loops.

## 5. Limits

The repository was not cloned and the Elixir runtime was not tested. License was not visible in the public excerpt, and shell GitHub API DNS failed, so metadata is web-observed rather than API-verified.
