# Show HN: A local-first documentation tool for AI agents (MCP)

- URL: https://news.ycombinator.com/item?id=46937128
- Platform: Hacker News
- Extraction status: fallback_snippet
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com/item "MCP" "agents"

## Raw Content

Show HN: A local-first documentation tool for AI agents (MCP) | Hacker News I got tired of my AI agent hitting rate limits right when I was actually getting work done. I’d be using an MCP server for docs, and suddenly the assistant would start hallucinating old API patterns because the cloud service I was using hit its cap or was lagging. It felt kind of ridiculous that we’re paying monthly subscriptions and dealing with network latency just to query markdown files. These docs don't change every five minutes—they change per version. So I spent the last week building a local-first version called Context. The idea is pretty simple: you "build" a library's docs into a local SQLite file once. From then on, your AI can query it in under 10ms with zero internet. A few things I realized while building it: - FTS5 is underrated: Everyone wants to jump straight to Vector DBs and embeddings, but for docs, simple full-text search with BM25 ranking is incredible. I weighted headings higher than body text, and it's been snappier and more accurate for me than the cloud RAG stuff I was using before. - The "Build Once" approach: Since the output is just a .db file, you can actually share it. I’ve started just sending the database file to my teammates so they don't have to clone or index anything themselves. - Parsing is the hard part: Getting the chunking right - especially stripping out MDX-specific junk and keeping code blocks together—took way more effort than the actual search engine part. I built the whole thing using Claude Code as a partner. It’s definitely not perfect, but it’s been a massive quality-of-life upgrade for my own workflow. If you're sick of rate limits or just want your agent to stop lagging, check it out: https://github.com/neuledge/context
