# OpenClaw.NET Model Card

| Field | Value |
|---|---|
| Repository | [clawdotnet/openclaw.net](https://github.com/clawdotnet/openclaw.net) |
| Category | .NET Self-Hosted Agent Runtime |
| Stars / forks snapshot | 345 / 66 |
| Language | C# |
| License | MIT |
| Raw capture | raw-github/clawdotnet_openclaw.net.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

OpenClaw.NET 是 self-hosted OpenClaw gateway 和 .NET agent runtime，强调 NativeAOT-friendly、OpenAI-compatible API、MCP、memory、tool execution 和 Microsoft Agent Framework 互操作。

## 2. Working Principle

self-hosted gateway -> OpenAI-compatible API -> tool execution -> MCP/memory topics -> NativeAOT deployment

## 3. Evidence Path

web GitHub page observed 375 commits, MIT license, C#/.NET runtime folders, self-hosted OpenClaw gateway description, self-evolving/agent-harness topics, 345 stars and 66 forks. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain .NET Self-Hosted Agent Runtime in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
