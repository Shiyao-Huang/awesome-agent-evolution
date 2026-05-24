# PydanticAI-DeepAgents – AI Agent Framework planning, filesystem ...

- URL: https://news.ycombinator.com/item?id=46254477
- Platform: Hacker News
- Extraction status: fallback_snippet
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com/item "AI agent framework"

## Raw Content

PydanticAI-DeepAgents – AI Agent Framework planning, filesystem, and subagents | Hacker News Hey HN, I built pydantic-deepagents after getting frustrated with existing agent frameworks. Most work great for demos but break down when you need agents to actually do things: work with files, break complex tasks into subtasks, or handle long conversations without blowing through token limits. This framework extends pydantic-ai with the stuff I kept rebuilding across projects: Multiple backends: in-memory, filesystem persistence, Docker sandbox for isolation, or composites mixing them Built-in toolsets: TODO management, filesystem ops, subagent spawning, skills system with markdown prompts File uploads: mount files and let agents process them (e.g., analyze a CSV) Structured outputs via Pydantic models - no more JSON parsing headaches Auto-summarization for long conversations to stay under token limits Human-in-the-loop confirmation for sensitive actions Streaming support Quick example: from pydantic_deep import create_deep_agent, create_default_deps from pydantic_deep.backends import StateBackend backend = StateBackend() deps = create_default_deps(backend) agent = create_deep_agent() result = await agent.run("Help me organize my tasks", deps=deps) For type-safe outputs, just pass a Pydantic model as output_type and access fields directly on result.output. Install: pip install pydantic-deep (add [sandbox] for Docker support) Demo video: https://drive.google.com/file/d/1hqgXkbAgUrsKOWpfWdF48cqaxRh... Chat app example with streaming: https://github.com/vstorm-co/pydantic-deepagents/tree/main/e... Docs: https://vstorm-co.github.io/pydantic-deepagents/ Repo: https://github.com/vstorm-co/pydantic-deepagents MIT licensed, 100% test coverage. Would love to hear what features you'd find useful, or what's missing from your current agent workflows.
