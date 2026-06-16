# agentmemory Model Card

## One Sentence

agentmemory is the cross-harness memory layer that turns continuity from a promise into an engineering dependency.

## Three Sentences

It targets Claude Code, Codex, Cursor, Hermes, OpenClaw, and MCP clients instead of staying inside one runtime. That makes it a direct answer to the user’s memory-substrate requirement for self-evolving agents. This 2026-06-16 packet keeps the public memory evidence synchronized with the latest available GitHub metadata.

## Model Card

| Field | Value |
|---|---|
| Repository | `rohitg00/agentmemory` |
| Source | `raw-github/rohitg00_agentmemory.md` |
| Category | Agent persistent memory layer |
| Pattern | persistent memory -> wiki-style knowledge capture -> graph/hybrid retrieval -> cross-harness continuity |
| Evidence | Authenticated GitHub API snapshot, 2026-06-16 |

## Teaching Use

Use agentmemory to teach why memory cannot be an afterthought. Durable facts, project traces, user preferences, and retrieval boundaries are what let an agent accumulate value across sessions.

## Evidence And Limits

The raw capture now reflects a GitHub metadata packet observed on 2026-06-16: 23,006 stars, 1,899 forks, 462 commits, 147 open issues, and 160 open pull requests. The live GitHub fetch was degraded in this run, so some fields were preserved from the previous authenticated packet at 2026-06-16 14:28 +0800. This run did not execute the repository locally, validate workflows end to end, or independently rerun benchmark claims. Product, memory, benchmark, and automation claims therefore remain repository-scoped unless separately tested.
