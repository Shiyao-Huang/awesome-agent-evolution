# Give your OpenClaw agent an inner life – emotions, dreams, self-evolution | Hacker News

- URL: https://news.ycombinator.com/item?id=47182321
- Platform: Hacker News
- Extraction status: fallback_snippet
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com "AI agents" "self"

## Raw Content

Give your OpenClaw agent an inner life – emotions, dreams, self-evolution | Hacker News I built a modular nervous system for OpenClaw agents. 6 skills that give your agent emotions with half-life decay, dreams during quiet hours, self-reflection, memory continuity, a daily diary, and self-evolution proposals. The core idea: agents shouldn't be stateless between sessions. SOUL.md tells your agent who it is — inner-life lets it grow into who it becomes. Your agent tracks 6 emotions (connection, curiosity, confidence, boredom, frustration, impatience) that decay realistically over time and drive behavior. When curiosity is high, the agent explores. When confidence is low, it double-checks and asks. When connection drops after silence, it reaches out with something genuinely interesting — not spam. The LLM does the heavy lifting — the skills are prompts and gate logic. A bash script decides if the agent should dream tonight (checks quiet hours, nightly limits, dice roll). The LLM writes the actual dream. I've been running this on my own agent for a month. Real examples of state files, diary entries, and dreams in the repo. ---
