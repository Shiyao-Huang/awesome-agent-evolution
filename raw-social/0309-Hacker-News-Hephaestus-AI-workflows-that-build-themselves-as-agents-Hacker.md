# Hephaestus: AI workflows that build themselves as agents | Hacker ...

- URL: https://news.ycombinator.com/item?id=45761184
- Platform: Hacker News
- Extraction status: fallback_snippet
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com/item "AI workflows" "agents"

## Raw Content

Hephaestus: AI workflows that build themselves as agents | Hacker News Hey everyone! I've been working on Hephaestus - an open-source framework that changes how we think about AI agent workflows. The Problem: Most agentic frameworks make you define every step upfront. But complex tasks don't work like that - you discover what needs to be done as you go. The Solution: Semi-structured workflows. You define phases - the logical steps needed to solve a problem (like "Reconnaissance → Investigation → Validation" for pentesting). Then agents dynamically create tasks across these phases based on what they discover. Example: During a pentest, a validation agent finds an IDOR vulnerability that exposes API keys. Instead of being stuck in validation, it spawns a new reconnaissance task: "Enumerate internal APIs using these keys." Another agent picks it up, discovers admin endpoints, chains discoveries together, and the workflow branches naturally. Agents share discoveries through RAG-powered memory and coordinate via a Kanban board. A Guardian agent continuously tracks each agent's behavior and trajectory, steering them in real-time to stay focused on their tasks and prevent drift. GitHub: https://github.com/Ido-Levi/Hephaestus Docs: https://ido-levi.github.io/Hephaestus/ Fair warning: This is a brand new framework I built alone, so expect rough edges and issues. The repo is a bit of a mess right now. If you find any problems, please report them - feedback is very welcome! And if you want to contribute, I'll be more than happy to review it!
