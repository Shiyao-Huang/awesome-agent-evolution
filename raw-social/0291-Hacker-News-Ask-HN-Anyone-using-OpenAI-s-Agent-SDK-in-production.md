# Ask HN: Anyone using OpenAI's Agent SDK in production?

- URL: https://news.ycombinator.com/item?id=44353964
- Platform: Hacker News
- Extraction status: fallback_snippet
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com/item "OpenAI agents"

## Raw Content

Ask HN: Anyone using OpenAI's Agent SDK in production? | Hacker News | Hacker News new| past| comments| ask| show| jobs| submit | login | | --- | --- | I'm exploring building a simple agent-based app and came across OpenAI's Agent SDK: https://openai.github.io/openai-agents-js/ . From what I understand, it wraps a lot of functionality — like the agent loop, function calling, and integration with the OpenAI MCP server — which could potentially save me a lot of work compared to using the plain OpenAI SDK. However, I'm wondering: Is the Agent SDK too abstracted or hard to debug? Has anyone actually used it in a real production app yet? Would I be better off just implementing the logic myself on top of the plain OpenAI SDK for more control and transparency? Appreciate any insights. | Ask HN: Anyone using OpenAI's Agent SDK in production? | | --- | | 8 points by sukit 8 months ago| hide| past| favorite| 3 comments | pancsta 8 months ago| [–] I agree with the debugging part - we need a new approach to handle these abstractions, and a regular code-stepping or reading logs isn't enough in the case of agents. It's all about managing state, and most ppl here say to avoid it. What I say is that if you go all-in and unify the architecture from the bottom layer, it's actually easier in the long run, but you'll need dedicated devtools for that. This is precisely why I've created AI-gent Workflows (launched on HN today [0]), which comes with a purpose-built state machine and devtools. Unlike LangGraph, it starts already in the lowest layer and everything is state-based. You can time travel and even modify states of a live agent. [0] https://news.ycombinator.com/item?id=44386314 codingwagie 8 months ago| | [–] OpenAI SDK is much simpler to use and understand than langchain etc. I havent deployed really complicated agents, but I have a number of simple use cases that work just fine android521 8 months ago| [–] you're better off just implementing the logic yourself as it is more flexible. | Guidelines| FAQ| Lists| API| Security| Legal| Apply to YC| Contact Search: | | --- |
