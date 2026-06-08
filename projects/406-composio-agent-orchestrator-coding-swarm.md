# Composio Agent Orchestrator Model Card

| Field | Value |
|---|---|
| Repository | [AgentWrapper/agent-orchestrator](https://github.com/AgentWrapper/agent-orchestrator) |
| Category | Production Coding-Agent Swarm Orchestrator |
| Stars / forks snapshot | 7500 / 1000 |
| Commits / issues / PRs snapshot | 1277 / 476 / 468 |
| Language | TypeScript |
| License | MIT |
| Latest visible dated signal | 2026-06-09 web-observed snapshot |
| Raw capture | raw-github/composiohq_agent-orchestrator.md |
| Updated by | hourly public metadata update, 2026-06-09 10:20 +0800 |

## 1. Role in Self Evolve

Agent Orchestrator is a production coding-agent swarm that runs spec, build, test, review, and merge flows through Git worktrees, skills, memory, and MCP-connected execution. It matters because self-evolving agents need a reproducible harness for parallel work, branch isolation, and reviewer loops before claims about autonomous improvement become operationally credible.

## 2. Working Principle

route coding tasks into specialized agents -> isolate changes in Git worktrees -> reuse skills and memory across execution steps -> coordinate MCP/tool calls and review gates -> merge accepted work back into the main engineering flow

## 3. Evidence Path

The public GitHub page on 2026-06-09 still redirected the legacy `ComposioHQ/agent-orchestrator` URL to `AgentWrapper/agent-orchestrator`, then showed 7.5k stars, 1k forks, 1,277 commits, MIT license, 476 issues, and 468 pull requests. The public page still positions the project as a production orchestrator for coding-agent swarms rather than a single demo loop, and this run keeps freshness honest because shell GitHub API access remained blocked.

## 4. Teaching Use

Use this card to explain Production Coding-Agent Swarm Orchestrator: it shows how skills, memory, worktree isolation, MCP tools, and reviewer gates create the harness surface where future self-improvement claims can actually be audited.

## 5. Limits

The repository was not cloned in this iteration; no coding workflow, benchmark, or merge policy was executed locally. Counts and claims are visible public-page signals unless independently revalidated later.
