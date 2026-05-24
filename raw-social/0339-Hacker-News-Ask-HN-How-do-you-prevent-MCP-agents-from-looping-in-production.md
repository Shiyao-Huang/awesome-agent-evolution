# Ask HN: How do you prevent MCP agents from looping in production?

- URL: https://news.ycombinator.com/item?id=47331249
- Platform: Hacker News
- Extraction status: fallback_snippet
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com/item "MCP agents"

## Raw Content

Ask HN: How do you prevent MCP agents from looping in production? | Hacker News I'm building with MCP and starting to run agents with more autonomy — multiple tools, longer sessions, less human oversight. The failure modes I keep hitting aren't the model being wrong, they're the agent making too many calls, retrying things that won't work, or calling tools it shouldn't need for the task. Right now I'm just setting hard iteration limits in my agent code, which feels like a blunt instrument. What are other people doing here — especially anyone running MCP agents in anything close to production? | Ask HN: How do you prevent MCP agents from looping in production? | | --- | | 3 points by aethis 58 days ago| hide| past| favorite| 4 comments | Hard limits are a good first layer but they don't tell you why the agent is looping. Retrying because it's confused, retrying because a dependency is flaky, and genuine planning loops are three different problems with different fixes. What helped us was logging the agent's intent at each step, and if it's asking the same underlying question three times in different syntax, that's the signal to bail early rather than burning through your iteration budget. Hard caps treat the symptom. If agents call tools they shouldn't need, the root cause is tool set visibility - 80 tools in context means the model tries irrelevant ones, fails, and retries. Pre-filtering to a semantically relevant subset per request (BM25 on the incoming query works well) eliminates most retry loops before they start; the cap stays as backstop for genuinely pathological cases. What is wrong with a blunt tool? Almost every other system ends up with a hard cap of retries. It's all about context management
