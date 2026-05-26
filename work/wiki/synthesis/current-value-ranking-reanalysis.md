---
title: Current-Value Ranking Reanalysis
type: synthesis
rank: A
tags: [github-projects, ranking, recency, current-value, release-attention]
sources:
  - analysis/github-project-data-analysis.json
  - analysis/github-project-data-analysis.md
  - reports/current-value-ranking-reanalysis.md
  - site/src/pages/rankings/index.astro
updated: 2026-05-26
---

# Current-Value Ranking Reanalysis

## One Sentence

[KNOWN] The GitHub project ranking is now a current-value ranking with 50% time/newness weight, so historical star-heavy 2023 projects no longer rank first by default. — Source: `analysis/github-project-data-analysis.json`, `reports/current-value-ranking-reanalysis.md`

## Three Sentences

[KNOWN] The previous `/rankings/` page mixed historical popularity with current release attention because stars dominated the displayed order. — Source: `site/src/pages/rankings/index.astro`

[KNOWN] The corrected formula is `0.50*time + 0.20*mechanism + 0.15*evidence + 0.10*adoption + 0.05*usefulness`. — Source: `analysis/github-project-data-analysis.json`

[KNOWN] Missing GitHub `created_at` no longer gets treated as creation freshness; local mirror first commit is only `first_observed_at`, and unknown creation dates are capped at 45/100 on time score. — Source: `scripts/analyze_github_project_data.mjs`, `analysis/github-project-data-analysis.md`

## Corrected Top Signal

| Rank | Project | Score | Created | Note |
|---:|---|---:|---|---|
| 1 | `modelscope/AgentEvolver` | 83.82 | 2025-11 | Strong mechanism + evidence + recent activity |
| 2 | `ZJU-LLM-Safety/DARWIN` | 77.39 | 2026-04 | High time score, recent creation |
| 3 | `OPPO-Mente-Lab/LLM-Self-Judge` | 76.35 | 2026-03 | Strong evaluator mechanism |
| 14 | `stanfordnlp/dspy` | 53.46 | 2023-01 | Historically important, no longer current-value #1 |

## Trust Chain

- [KNOWN] Ranking source of truth: `analysis/github-project-data-analysis.json`.
- [KNOWN] Public page uses `recency_weighted_project_ranking`: `site/src/pages/rankings/index.astro`.
- [KNOWN] Human-readable result report: `reports/current-value-ranking-reanalysis.md`.
- [INFERRED] Remaining ranking uncertainty is concentrated in projects with missing GitHub API `created_at`; these should be refreshed before using the list as a final publication ranking.

## Operational Rule

Future ranking updates must preserve the distinction between historical impact and current release attention. Stars may be an adoption signal, but they should not dominate a ranking whose stated goal is current value.
