# Composio Agent Orchestrator Model Card

| Field | Value |
|---|---|
| Repository | [AgentWrapper/agent-orchestrator](https://github.com/AgentWrapper/agent-orchestrator) |
| Category | Production Coding-Agent Swarm Orchestrator |
| Stars / forks snapshot | 7700 / 1100 |
| Commits / issues / PRs snapshot | 1264 / 46 / 7 |
| Language | TypeScript |
| License | MIT |
| Latest visible dated signal | 2026-06-08 |
| Raw capture | raw-github/composiohq_agent-orchestrator.md |
| Updated by | hourly public metadata update, 2026-06-08 23:45 +0800 |

## 1. Role in Self Evolve

Agent Orchestrator is a production coding-agent swarm that runs spec, build, test, review, and merge flows through Git worktrees, skills, memory, and MCP-connected execution. It matters because self-evolving agents need a reproducible harness for parallel work, branch isolation, and reviewer loops before claims about autonomous improvement become operationally credible.

## 2. Working Principle

route coding tasks into specialized agents -> isolate changes in Git worktrees -> reuse skills and memory across execution steps -> coordinate MCP/tool calls and review gates -> merge accepted work back into the main engineering flow

## 3. Evidence Path

The public GitHub page on 2026-06-08 redirected the legacy `ComposioHQ/agent-orchestrator` URL to `AgentWrapper/agent-orchestrator`, then showed 7.7k stars, 1.1k forks, 1,264 commits, MIT license, 46 issues, 7 pull requests, and a repository-page "Updated Jun 8, 2026" signal. The public page still positions the project as a production orchestrator for agent swarms rather than a single demo loop, and this run keeps freshness honest because shell GitHub API access remained blocked.

## 4. Teaching Use

Use this card to explain Production Coding-Agent Swarm Orchestrator: it shows how skills, memory, worktree isolation, MCP tools, and reviewer gates create the harness surface where future self-improvement claims can actually be audited.

## 5. Limits

The repository was not cloned in this iteration; no coding workflow, benchmark, or merge policy was executed locally. Counts and claims are visible public-page signals unless independently revalidated later.
