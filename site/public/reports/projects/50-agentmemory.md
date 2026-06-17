# agentmemory Model Card

## One Sentence

agentmemory is the cross-harness memory layer that turns continuity from a promise into an engineering dependency.

## Three Sentences

It targets Claude Code, Codex, Cursor, Hermes, OpenClaw, and MCP clients instead of staying inside one runtime. That makes it a direct answer to the user’s memory-substrate requirement for self-evolving agents. The 2026-06-17 morning packet keeps the memory-substrate evidence current with another small but real GitHub delta.

## Model Card

| Field | Value |
|---|---|
| Repository | `rohitg00/agentmemory` |
| Source | `raw-github/rohitg00_agentmemory.md` |
| Category | Agent persistent memory layer |
| Pattern | persistent memory -> wiki-style knowledge capture -> graph/hybrid retrieval -> cross-harness continuity |
| Evidence | Authenticated GitHub API snapshot, 2026-06-17 08:29 +0800 |

## Teaching Use

Use agentmemory to teach why memory cannot be an afterthought. Durable facts, project traces, user preferences, and retrieval boundaries are what let an agent accumulate value across sessions.

## Evidence And Limits

The raw capture now reflects an authenticated GitHub API snapshot observed on 2026-06-17 08:29 +0800: 23,143 stars, 1,908 forks, 462 commits, 147 open issues, and 160 open pull requests. The latest public release visible through the API remains v0.9.27 (2026-06-07). Relative to the previous authenticated packet at 2026-06-17 02:30 +0800: stars 23107 -> 23143; forks 1905 -> 1908. This run did not inspect the schema, lifecycle implementation, or confidence updates in code. Memory-quality claims remain repository-scoped unless validated with tests or benchmarks.
