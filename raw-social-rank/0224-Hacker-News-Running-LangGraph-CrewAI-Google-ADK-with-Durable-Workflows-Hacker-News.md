# Running LangGraph, CrewAI, Google ADK with Durable Workflows | Hacker News

- URL: https://news.ycombinator.com/item?id=47351352
- Platform: Hacker News
- Extraction status: fallback_snippet
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com "LangGraph" "agents"

## Raw Content

Running LangGraph, CrewAI, Google ADK with Durable Workflows | Hacker News One pattern we've seen while building AI agents is that developers often have to make a frustrating choice between agent frameworks and workflow engines. Frameworks like LangGraph, Strands, CrewAI, ADK, etc. already implement reasoning loops, tool execution, retries, and memory. But they typically don't provide durable execution—if the process crashes, the agent will restart from scratch. Some have very basic checkpoint systems that leave failure detection and resumption to the user, which is essentially the hard problem workflow engines solve. The problem with workflow engines is they handle durability well but require developers to rewrite their agent logic inside the workflow system, which means rebuilding the agent framework from scratch. This work aims to remove that tradeoff by allowing existing agent frameworks to get all the benefits of a durable workflow orchestrator without rewriting any part of their code.
