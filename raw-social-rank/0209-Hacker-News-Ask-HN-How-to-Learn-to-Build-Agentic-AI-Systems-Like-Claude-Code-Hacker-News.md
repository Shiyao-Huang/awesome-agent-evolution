# Ask HN: How to Learn to Build Agentic AI Systems (Like Claude Code) | Hacker News

- URL: https://news.ycombinator.com/item?id=45045829
- Platform: Hacker News
- Extraction status: fallback_snippet
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com "agentic AI"

## Raw Content

Ask HN: How to Learn to Build Agentic AI Systems (Like Claude Code) | Hacker News I’m trying to learn how one can build agentic AI systems similar to Claude Code, and eventually adapt that knowledge toward domain-specific use cases (e.g., “Claude Code for healthcare, finance, education, etc.”). • Foundational learning: What books, courses, or papers provide the best grounding for understanding LLM-based systems and their decision-making? • Architectural patterns: What design patterns are worth studying for things like context management, memory, reasoning, and orchestration? • Build vs. deploy: How do you think about building internal systems vs. packaging/distributing them as APIs, SDKs, or products? • Open source projects: Which ones are most valuable to study for internals (decision making, evals, context engineering, tool use, etc.)? • Evals and observability: What tools or products help evaluate quality, measure system behavior, and observe performance in real-world use? • Models: Which models are best suited for “thinking” (reasoning, planning, decomposing problems) vs. “doing” (execution, coding, retrieval)? • Learning path: How would you approach going from theory → prototype → production-quality system? How to Learn to Build Agentic AI Systems (Like This is pretty much a step-by-step guide for getting started with code: https://ampcode.com/how-to-build-an-agent Great resource, definitely a good place to take the next step. As I looked into detail, the natural question came (based on software developing experience), how do I evaluate the correctness of output produced by LLM given the inputs. Clearly, unit test with fixed in/out pairs won't help so learning methods to evaluate as we develop iteratively will be very useful. Two resources that I am currently learning from are We (the Princeton SWE-bench team) have a 100 line of code agent that does pretty well, you can read the code here: https://github.com/SWE-agent/mini-swe-agent
