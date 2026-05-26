# Current-Value Ranking Reanalysis

> Date: 2026-05-26  
> Scope: GitHub project ranking for public release attention  
> Source chain: `site/src/data/projects.ts`, `analysis/github-project-data-analysis.json`, `research/repo-classification.json`, `output/raw-github-timestamp-index.json`, `raw-github/`, `projects/`, `site/public/reports/projects/`

## One-Sentence Judgment

The old ranking mixed historical popularity with current value; the corrected ranking gives time/newness 50% weight and no longer lets a 2023 star-heavy project rank first by default.

## Three-Sentence Diagnosis

The previous `/rankings/` page sorted mostly by stars while describing itself as a comprehensive ranking, so old viral projects could dominate. The analysis script also treated local mirror first commit as repository creation time when GitHub API metadata was missing, which could fabricate false 2026 freshness. The new ranking separates verified `created_at`, recent activity, first-observed local fallback, mechanism strength, evidence completeness, and adoption.

## Corrected Formula

```text
current_value =
  0.50 * time
  + 0.20 * mechanism
  + 0.15 * evidence
  + 0.10 * adoption
  + 0.05 * usefulness
```

Time score:

- 70% verified repository creation recency, using GitHub API `created_at`.
- 30% recent activity, using GitHub `pushed_at`, project `lastPushed`, or raw observation timestamp.
- If `created_at` is unavailable, time score is capped at 45/100 and marked with a caveat.
- Local mirror first commit is now `first_observed_at`, not creation time.

## Top 20 After Reanalysis

| Rank | Project | Score | Time | Mechanism | Evidence | Created | Activity |
|---:|---|---:|---:|---:|---:|---|---|
| 1 | `modelscope/AgentEvolver` | 83.82 | 76.84 | 100.00 | 100.00 | 2025-11 | 2026-04 |
| 2 | `ZJU-LLM-Safety/DARWIN` | 77.39 | 94.72 | 75.00 | 62.00 | 2026-04 | 2026-05 |
| 3 | `OPPO-Mente-Lab/LLM-Self-Judge` | 76.35 | 87.56 | 85.00 | 62.00 | 2026-03 | 2026-03 |
| 4 | `algorithmicsuperintelligence/openevolve` | 71.56 | 58.28 | 79.00 | 100.00 | 2025-05 | 2026-03 |
| 5 | `JarvisPei/SCOPE` | 68.77 | 79.66 | 67.00 | 62.00 | 2025-12 | 2026-03 |
| 6 | `inter-co/science-codeevolve` | 66.24 | 74.59 | 59.00 | 68.00 | 2025-10 | 2026-04 |
| 7 | `JARVIS-Xs/SE-Agent` | 64.05 | 49.24 | 77.00 | 100.00 | 2025-07 | 2025-09 |
| 8 | `stanford-iris-lab/meta-harness` | 57.96 | 45.00 | 87.00 | 56.00 | unknown | 2026-05 |
| 9 | `EvoAgentX/EvoAgentX` | 57.43 | 30.06 | 97.00 | 86.00 | unknown | 2026-01 |
| 10 | `gofenix/nex-agent` | 56.84 | 45.00 | 95.00 | 56.00 | unknown | 2026-05 |
| 11 | `MaximeRobeyns/self_improving_coding_agent` | 55.32 | 45.00 | 87.00 | 56.00 | unknown | 2026-05 |
| 12 | `YunjueTech/Yunjue-Agent` | 54.63 | 35.67 | 97.00 | 56.00 | unknown | 2026-02 |
| 13 | `RangeKing/self-evolving-agent` | 53.80 | 45.00 | 85.00 | 56.00 | unknown | 2026-05 |
| 14 | `stanfordnlp/dspy` | 53.46 | 29.77 | 59.00 | 100.00 | 2023-01 | 2026-05 |
| 15 | `EverMind-AI/EverOS` | 51.73 | 30.06 | 71.00 | 86.00 | unknown | 2026-01 |
| 16 | `wazionapps/nexo` | 51.69 | 45.00 | 71.00 | 56.00 | unknown | 2026-05 |
| 17 | `Orchestra-Research/AI-research-SKILLs` | 50.80 | 45.00 | 42.00 | 56.00 | unknown | 2026-05 |
| 18 | `SuperagenticAI/metaharness` | 50.52 | 45.00 | 59.00 | 56.00 | unknown | 2026-05 |
| 19 | `google-gemini/gemini-cli` | 49.34 | 45.00 | 18.00 | 68.00 | unknown | 2026-05 |
| 20 | `XMUDeepLIT/Awesome-Self-Evolving-Agents` | 49.29 | 31.98 | 69.00 | 68.00 | unknown | 2026-01 |

## What Changed

| Issue | Previous Behavior | Corrected Behavior |
|---|---|---|
| Stars dominated `/rankings/` | Old viral projects could rank first | Stars are only 10% adoption signal |
| Time not explicit | "Active" was implied but not enforced | Time/newness is 50% of score |
| Local mirror first commit | Could be treated as creation date | Now only `first_observed_at` |
| Missing GitHub API metadata | Hidden inside generic unknowns | Caveat shown and time score capped |
| Historical impact vs current release value | Blended into one list | Current-value ranking is separate from historical influence |

## Interpretation

`modelscope/AgentEvolver` ranks first because it has verified late-2025 creation, strong self-evolution mechanism coverage, strong evidence completeness, and recent 2026 activity. Older projects such as `DSPy`, `Reflexion`, `AutoGPT`, `MetaGPT`, and `FunSearch` remain historically important, but they no longer dominate the current release-attention ranking under a 50% time-weight policy. Unknown-created projects can still appear if they have strong mechanism evidence, but they are capped and visibly marked.

## Follow-Up Required

The most important next improvement is to refresh GitHub API metadata for repositories currently marked `unknown`. Until that is done, this ranking is conservative: it prevents fake freshness but may under-rank genuinely recent projects whose creation date could not be verified.

