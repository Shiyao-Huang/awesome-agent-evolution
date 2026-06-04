# Learning SDK Model Card

| Field | Value |
|---|---|
| Repository | [letta-ai/learning-sdk](https://github.com/letta-ai/learning-sdk) |
| Category | Continual Learning And Long-Term Memory SDK |
| Stars / forks snapshot | 45 / 3 |
| Commits / issues / PRs snapshot | 72 / 1 / 1 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/letta-ai_agentic-learning-sdk.md |
| Updated by | hourly public metadata update, 2026-06-04 16:00 +0800 |

## 1. Role in Self Evolve

Learning SDK is a drop-in memory and continual-learning substrate for existing LLM agents, exposing a thin wrapper instead of a full custom runtime. It matters because self-evolving agents need explicit memory, harness, benchmark, and safety substrates before their improvement claims become trustworthy.

## 2. Working Principle

wrap an existing LLM client -> capture conversation traces -> persist and inject relevant memory -> make the original agent stateful without retraining the base model

## 3. Evidence Path

web-observed GitHub page showed 45 stars, 3 forks, 72 commits, Apache-2.0 license, Python and TypeScript packages, and a one-line pattern for adding continual learning plus long-term memory to existing LLM agents. This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on 2026-06-04, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Continual Learning And Long-Term Memory SDK: it shows how survey indexes, embeddable memory SDKs, harness taxonomies, controlled self-modification, or trace-scored benchmarks connect to the broader self-evolving-agent pipeline.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
