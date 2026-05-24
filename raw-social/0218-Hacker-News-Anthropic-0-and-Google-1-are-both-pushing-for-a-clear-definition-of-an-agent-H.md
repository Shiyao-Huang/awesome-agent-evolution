# Anthropic[0] and Google[1] are both pushing for a clear definition of an “agent”... | Hacker News

- URL: https://news.ycombinator.com/item?id=43419169
- Platform: Hacker News
- Extraction status: fallback_snippet
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown

## Raw Content

Anthropic[0] and Google[1] are both pushing for a clear definition of an “agent”... | Hacker News Anthropic[0] and Google[1] are both pushing for a clear definition of an “agent” vs. an “agentic workflow” > Workflows are systems where LLMs and tools are orchestrated through predefined code paths. > Agents, on the other hand, are systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks. Most “agents” today fall into the workflow category. The foundation model makers are pushing their new models to be better at the second, “pure” agent, approach. Let me clarify: we are discussing how the Agent is internally implemented, given LLM calls and tools. It can be built using a graph, where one node makes decisions that branch out to tools and can loop back. The workflow can vary. For example, it can involve multiple LLM calls chained together without branching or looping. It can also be built using a graph. Yes, the difference is that in the “pure” agent approach, the model is the only thing directing what to do. In a sense there’s still a graph of execution, but the graph isn’t known until the “agent” runs and decides what tools to use, in what order, and for how long. There is no scaffold, just LLM + MCP (or w/e) in a loop. ---
