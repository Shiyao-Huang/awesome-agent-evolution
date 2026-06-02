---
repo: vectorize-io/agent-memory-benchmark
url: https://github.com/vectorize-io/agent-memory-benchmark
content_timestamp: 2026-06-02
time_slice: 2026-06
timestamp_source: web_github_page_open_2026-06-02
collected_at: 2026-06-02T19:52:08+08:00
source: github_web
source_tool: web.open
---

## GitHub - vectorize-io/agent-memory-benchmark: Agent Memory Benchmark

**Source**: https://github.com/vectorize-io/agent-memory-benchmark

## Collection note

Captured through the public GitHub page because local shell DNS resolution for `api.github.com` still failed and `gh` could not reach GitHub. This is web-observed freshness, not GitHub API-verified freshness.

## Public metadata snapshot

- Repository: `vectorize-io/agent-memory-benchmark`
- Stars observed: 46
- Forks observed: 17
- Issues observed: 6
- Pull requests observed: 4
- Commit history observed: 29 commits
- License observed: no license text exposed on the public page snapshot
- Primary languages observed: Python 73.6%, Vue 22.5%, CSS 2.2%, JavaScript 1.2%, HTML 0.5%
- Topics observed: `benchmark`, `ai-agents`, `ai-memory`

## Raw README signals

- README says AMB exists because existing memory benchmarks no longer distinguish memory architectures well once million-token context windows make brute-force context dumping viable.
- AMB adds agentic-task datasets that cover memory across tool calls, document research, and preferences in multi-step decisions.
- The documented benchmark loop is ingest -> retrieve -> generate -> judge, while also tracking retrieval time, ingestion time, speed, and token cost.
- The tool surface is explicit and reproducible: `uv run amb providers`, `uv run amb run`, `uv run amb dataset-stats`, and `uv run amb view`.
- Results are written to `outputs/{dataset}/{memory}/{mode}/{domain}.json` and explored through the bundled viewer.

## Raw boundary

No dataset run, Gemini call, or UI session was executed in this iteration. This file preserves the public benchmark surface and problem framing for downstream classification, deep reports, public model cards, and README/site evidence.
