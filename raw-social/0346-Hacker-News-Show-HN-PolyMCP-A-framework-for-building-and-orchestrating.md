# Show HN: PolyMCP – A framework for building and orchestrating ...

- URL: https://news.ycombinator.com/item?id=47017912
- Platform: Hacker News
- Extraction status: fallback_snippet
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com/item "MCP agents"

## Raw Content

Show HN: PolyMCP – A framework for building and orchestrating MCP agents | Hacker News Hi everyone, I’ve been working on PolyMCP, an open-source framework for building and orchestrating agents using the Model Context Protocol (MCP). Most of the tooling around MCP focuses on exposing tools. With PolyMCP, the focus this time is on agents: how to structure them, connect them to multiple MCP servers, and make them reliable in real workflows. PolyMCP provides: • A clean way to define MCP-compatible tool servers in Python or TypeScript • An agent abstraction that can connect to multiple MCP endpoints (stdio, HTTP, etc.) • Built-in orchestration primitives for multi-step tasks • A CLI to scaffold projects and run an inspector UI to debug tools and agent interactions • A modular structure that makes it easier to compose skills and reuse components across projects The main goal is to make agent systems less ad-hoc. Instead of writing glue code around each model + tool combination, PolyMCP gives you a structured way to: • Register tools as MCP servers • Connect them to one or more agents • Control execution flow and state • Inspect and debug interactions It’s MIT licensed and intended for developers building real-world automation, internal copilots, or multi-tool assistants. I’d love feedback on: • The agent abstraction: is it too opinionated or not opinionated enough? • Orchestration patterns for multi-agent setups • Developer experience (CLI, inspector, project layout) Happy to answer questions. | Show HN: PolyMCP – A framework for building and orchestrating MCP agents | | --- | | 3 points by justvugg 79 days ago| hide| past| favorite| 2 comments | Sounds interesting. Can you share a link or videos? Hi thanks for the comment https://github.com/poly-mcp/PolyMCP ---
