# Agentic Harness Engineering Model Card

## One Sentence

Agentic Harness Engineering is the project that makes the survey's "harness evolves, not only the model" thread explicit.

## Three Sentences

It belongs in the runtime/harness layer: prompts, tools, middleware, skills, sub-agents, memory, and evaluation scaffolds become the object of improvement. The user explicitly pointed to this repository, so it should not stay hidden in raw notes or legacy README fragments. Its main research value is to connect benchmark movement with concrete engineering surfaces that agents can inspect, edit, test, and roll back.

## Model Card

| Field | Value |
|---|---|
| Repository | `china-qijizhifeng/agentic-Harness-engineering` |
| Source | `raw-github/china-qijizhifeng_agentic-harness-engineering.md` |
| Category | Harness evolution engineering |
| Pattern | evaluator -> harness mutation -> regression verification |
| Status | Candidate; metadata refresh is blocked by unauthenticated GitHub API rate limit |

## Teaching Use

Use this project to explain why agent self-evolution is not only weight training or code search. A production agent is wrapped in a harness: prompts, tools, memory, task routing, sub-agent policy, middleware, permissions, logs, and tests. If those pieces are versioned and evaluated, the harness itself can evolve while the foundation model stays fixed.

## Evidence And Limits

The current local evidence is the user-provided GitHub URL, the legacy README entry, and the supplement classification. That is enough to keep the project in the target graph, but not enough to call the analysis final. The next evidence step is an authenticated GitHub metadata refresh plus a source read of README, benchmark claims, and evaluation scripts.
