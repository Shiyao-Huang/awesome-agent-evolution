# Ask HN: What are you building with AI coding agents / tooling?

- URL: https://news.ycombinator.com/item?id=47589668
- Platform: Hacker News
- Extraction status: fallback_snippet
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com/item "AI coding agents"

## Raw Content

Ask HN: What are you building with AI coding agents / tooling? | Hacker News I'm building a tool to catch AI agent regressions. For example, behavior can silently shift for a number of reasons -- a prompt tweak, model swap, context change, routing -- and the impact on output wont be obvious until a few weeks later when refunds for edge cases spike! Agentura is like pytest for AI agents. Its 100% free. * Simpler workflows beat complex prompts, skills, AGENT.md etc. I run most things with the pi-mono coding agent with no extensions. the same model verify finding/claim in fresh context. This drastically reduces false positives and improves correctness of findings. Going further, run a third verification with a different model. I'm doing a vaguely similar thing - I have a 10" rack minilab [1] and I've vibe-coded an MCP server that runs in the cluster to introspect, etc, but the main longterm goal is to set up some ML pipelines and maybe work toward formal verification via TLA+ or smth. (_not_ vibecoding that... I'm thinking of moving into AI formal verification or compliance automation as a career move.)
