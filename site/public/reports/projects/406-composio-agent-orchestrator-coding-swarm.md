# Composio Agent Orchestrator Model Card

| Field | Value |
|---|---|
| Repository | [AgentWrapper/agent-orchestrator](https://github.com/AgentWrapper/agent-orchestrator) |
| Category | Production Coding-Agent Swarm Orchestrator |
| Stars / forks snapshot | 7,514 / 1,025 |
| Commits / issues / PRs snapshot | 1,277 / 478 / 474 |
| Language | TypeScript |
| License | MIT |
| Latest visible dated signal | 2026-06-09 GitHub API snapshot |
| Raw capture | raw-github/composiohq_agent-orchestrator.md |
| Updated by | hourly public metadata update, 2026-06-13 02:15 +0800 |

## 1. Role in Self Evolve

Agent Orchestrator is a production coding-agent swarm that runs spec, build, test, review, and merge flows through Git worktrees, skills, memory, and MCP-connected execution. It matters because self-evolving agents need a reproducible harness for parallel work, branch isolation, and reviewer loops before claims about autonomous improvement become operationally credible.

## 2. Working Principle

route coding tasks into specialized agents -> isolate changes in Git worktrees -> reuse skills and memory across execution steps -> coordinate MCP/tool calls and review gates -> merge accepted work back into the main engineering flow

## 3. Evidence Path

GitHub GraphQL/API snapshot captured via authenticated `gh` on 2026-06-13 showed the canonical redirected repository `AgentWrapper/agent-orchestrator` at 7,514 stars, 1,025 forks, 478 open issues, 474 open pull requests, 1,277 commits on `main`, latest push at 2026-06-09T00:56:58Z, MIT license, and latest nightly release published on 2026-06-08. The snapshot also showed 51 releases with v0.9.3-nightly-5897b4e8d8cefc33f681ab73bf0e3ebc0b17b517 latest on 2026-06-08. This run keeps freshness honest because it uses authenticated GitHub API data rather than stale local summaries.

## 4. Teaching Use

Use this card to explain Production Coding-Agent Swarm Orchestrator: it shows how skills, memory, worktree isolation, MCP tools, and reviewer gates create the harness surface where future self-improvement claims can actually be audited.

## 5. Limits

The repository was not cloned in this iteration; no coding workflow, benchmark, or merge policy was executed locally. Counts and claims are GitHub API snapshot signals unless independently revalidated later.
