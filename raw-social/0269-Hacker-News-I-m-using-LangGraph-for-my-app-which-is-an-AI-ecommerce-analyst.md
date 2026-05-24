# I'm using LangGraph for my app which is an AI ecommerce analyst ...

- URL: https://news.ycombinator.com/item?id=44916676
- Platform: Hacker News
- Extraction status: fallback_snippet
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com/item "LangGraph"

## Raw Content

I'm using LangGraph for my app which is an AI ecommerce analyst with multiple mo... | Hacker News I'm using LangGraph for my app which is an AI ecommerce analyst with multiple modes (report builder, and chatbot). It consumes API data and visitor sessions to build a giant report then compress it back down to actionable insights for online store owners. The report runs for each customer once a day, queued up with BullMQ. It's not super complex, in fact that seems to be the way to get a more or less reliable agent right now Keep the graph small, the prompts concise, the nodes and tools atomic in function, etc. * Orchestrator choice and why: LangGraph because it seems the most robust and well established from my research at the time (about 6 months ago). It has decent documentation, and includes community-built graphs and nodes. People complain a lot about LangChain, but the general vibe around LangGraph is that it's a maturely designed framework. This, honestly, modern AI. much better, but 100% reliable Thanks for sharing this, truly inspiring. A few questions: (1) What do you like the most about langgraph, have you tried platforms like autogen? (2) Why using BullMQ with node, why not a solution like Temporal? (3) I didn't got you usecase regarding memory check pointer? if things can re-run at negligible cost why do we need it? (4) For sentimental analysis for chats are you using batch inferencing? Probably a loop keeping ready "interesting" chats for review (5) this 30 days analysis is it happening parallelly or is it a sequential loop? why not using something like Airflow for this?
