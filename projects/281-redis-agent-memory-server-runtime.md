# Redis Agent Memory Server Model Card

| Field | Value |
|---|---|
| Repository | [redis/agent-memory-server](https://github.com/redis/agent-memory-server) |
| Category | Agent Memory Runtime and Context Service |
| Stars / forks snapshot | 266 / 51 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/redis_agent-memory-server.md |
| Updated by | hourly public metadata update, 2026-05-28 22:03 +0800 |

## 1. Role in Self Evolve

agent-memory-server is Redis-maintained memory middleware that gives AI agents fast, persistent, and flexible context memory through an MCP service. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

agent event and interaction signals -> Redis-backed memory storage and retrieval -> MCP server exposes memory operations to agents -> memory context reused in downstream task loops

## 3. Evidence Path

web-observed GitHub page showed 266 stars, 51 forks, 735 commits, MIT license, Python-first implementation, and README framing as fast/flexible memory for AI agents. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Agent Memory Runtime and Context Service: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
