---
title: GitHub Star Growth Database
type: synthesis
rank: A
tags: [github, star-growth, ranking, database, huggingface, current-value]
sources: [analysis/github-star-growth-database-plan.md, analysis/github-star-growth-ranking.md, data-engine/github-star-history/README.md]
updated: 2026-06-01
---

# GitHub Star Growth Database

> Total stars are historical accumulation; current-stage value needs 2026 new-star momentum, coverage-aware ranking, and a Hugging Face-ready event/aggregate database.

## Core Shift

The ranking question changed from "who has the most stars" to "which self-evolution GitHub projects are gaining stars now, especially in 2026, with enough historical coverage to trust the rank." This is a data-model shift, not a cosmetic scoring tweak.

## Implemented Objects

- `scripts/build_github_star_history_db.mjs` builds seeds, optional GitHub API stargazer fetches, monthly aggregates, and ranking outputs.
- `data-engine/github-star-history/` is the work-layer database directory.
- `analysis/github-star-growth-ranking.json` and `.md` are the processed growth-ranking outputs.
- `analysis/github-star-growth-database-plan.md` records the user-input alignment, schema, ranking rule, and Hugging Face plan.

## Current Smoke-Test State

| Metric | Value |
|---|---:|
| Seed repos | 697 |
| Deduped star events | 45 |
| Repos with event history | 1 |
| Complete/near-complete repos | 1 |
| Not fetched repos | 696 |
| Coverage-qualified growth rows | 1 |
| Fetch backlog rows | 696 |

The smoke-test repo is `ZJU-LLM-Safety/DARWIN`; it validates event extraction and monthly aggregation, but it is not a final public ranking.

## Rank Rule

```text
growth_quality_score =
  70% * normalized_log(new_stars_in_year)
+ 20% * normalized_log(new_stars_recent_90d)
+ 10% * coverage_score
```

Public claims require `coverage_status = complete_or_near_complete`. `partial` and `not_fetched` are queue states, not negative evidence.

The generated output now splits `coverage_qualified_ranking` from `fetch_priority_backlog` so old high-star projects cannot re-enter the growth ranking before their star events are fetched.

## Cross-references

- [[Value Screening and Dual-Chain Knowledge Base]]
- [[Frontier Value Queue]]
- [[modelscope AgentEvolver Frontier Deep Dive]]
