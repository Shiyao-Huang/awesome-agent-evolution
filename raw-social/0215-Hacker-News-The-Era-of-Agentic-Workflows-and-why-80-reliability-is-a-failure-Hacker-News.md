# The Era of Agentic Workflows (and why 80% reliability is a failure) | Hacker News

- URL: https://news.ycombinator.com/item?id=47184040
- Platform: Hacker News
- Extraction status: fallback_snippet
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown

## Raw Content

The Era of Agentic Workflows (and why 80% reliability is a failure) | Hacker News If you've built an AI agent recently, you know the \"Agent Paradox\": they are incredibly impressive 80% of the time and catastrophically wrong 20% of the time. For production applications, \"80% reliable\" is a failure. \n\nInstead of one giant \"God Agent\" that tries to handle everything, the best builders are moving toward specialized, hierarchical teams.\n\n1. The Router: A small, fast model (like Llama 3 8B) that only determines the intent of the user request and sends it to the right specialist.\n2. The Worker: A model fine-tuned for a specific task (e.g., SQL generation, code refactoring).\n3. The Critic: A separate model that reviews the output of the Worker against a set of constraints before it ever reaches the user.\n\nTactical Tip: Use Structured Outputs\nStop parsing raw text. Use libraries like Instructor or Pydantic to force your models to return valid JSON. This reduces \"integration hallucinations\" by 90% and makes your agentic loops much more stable.\n\nIf you found this helpful, I write a weekly newsletter for AI builders covering deep dives like this, new models, and tools.
