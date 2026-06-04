# Redis Agent Memory Server Model Card

| Field | Value |
|---|---|
| Repository | [redis/agent-memory-server](https://github.com/redis/agent-memory-server) |
| Category | Agent Memory Runtime and Context Service |
| Stars / forks snapshot | 266 / 50 |
| Commits / issues / PRs snapshot | 735 / 19 / 28 |
| Language | Python |
| License | MIT |
| Latest visible commit date | 2026-04-16 |
| Raw capture | raw-github/redis_agent-memory-server.md |
| Updated by | hourly public metadata update, 2026-06-05 11:00 +0800 |

## 1. Role in Self Evolve

agent-memory-server is Redis-maintained memory middleware that gives AI agents fast, persistent, and flexible context memory through an MCP-compatible service and client stack. It matters because self-evolving agents need explicit runtime, memory, skill, and benchmark substrates before their improvement claims become trustworthy.

## 2. Working Principle

capture agent events and context -> store and retrieve memory through Redis-backed services -> expose memory operations via MCP and client APIs -> feed retrieved context into later agent loops

## 3. Evidence Path

web-observed GitHub repo page and commit history showed 266 stars, 50 forks, 19 issues, 28 pull requests, 735 commits, MIT license, agent-memory-client plus MCP/server folders, and latest visible commits on 2026-04-16. This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on 2026-06-05, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Agent Memory Runtime and Context Service: it shows how swarm runtimes, skill optimizers, benchmark suites, browser harnesses, and memory middleware fit into the broader self-evolving-agent pipeline.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
