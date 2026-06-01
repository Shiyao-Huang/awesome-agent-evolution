---
title: Value Screening and Dual-Chain Knowledge Base
type: synthesis
rank: A
tags: [value-screening, dual-chain, self-mirror, github-projects, recency, continuity]
sources:
  - analysis/value-screening-dual-chain-knowledge-base.md
  - analysis/github-project-data-analysis.json
  - analysis/github-project-data-analysis.md
  - work/wiki/schema.md
  - /Users/copizzah/Desktop/work/agent-cli/self-mirror-guideline/SKILL.md
updated: 2026-06-01
---

# Value Screening and Dual-Chain Knowledge Base

> The next research phase should use time-weighted triage plus dual-chain annotation: evidence chain for what is true, mirror chain for why it matters.

## One Sentence

[KNOWN] The corpus has 639 raw GitHub captures, 232 public model-card projects, 92 strict evolution-theme repositories, and 199 broad evolution-related repositories; the next bottleneck is selecting which current projects deserve code/issue-level analysis first. — Source: `analysis/github-project-data-analysis.json`

## Three Sentences

[KNOWN] The current public ranking already gives time/newness 50% weight, separating current value from historical star impact. — Source: `analysis/github-project-data-analysis.json`, `work/wiki/synthesis/current-value-ranking-reanalysis.md`

[INFERRED] For research execution, time should be combined with continuity, gap fit, implementation evidence, issue/resource signal, and benchmark/product usefulness so that a 2026 frontier project and a 2023 baseline project are not judged by the same lane. — Source: `analysis/value-screening-dual-chain-knowledge-base.md`

[INFERRED] The dual-chain model pairs an evidence chain (`raw -> metadata -> code -> issues/resources -> model card -> public result`) with a mirror chain (`intent -> value gap -> dependency -> rank -> next action`) so future agents can audit both facts and judgement. — Source: `analysis/value-screening-dual-chain-knowledge-base.md`

## Frontier Investigation Queue

| Priority | Project | Reason | Caveat |
|---:|---|---|---|
| 1 | `modelscope/AgentEvolver` | Highest current-value score, late-2025, strong mechanism/evidence. | Needs code/issue continuity scan. |
| 2 | `ZJU-LLM-Safety/DARWIN` | 2026-04 safety/evolution signal. | Verify retained self-evolution depth. |
| 3 | `OPPO-Mente-Lab/LLM-Self-Judge` | 2026-03 evaluator/self-judging direction. | Needs benchmark and issue trust review. |
| 4 | `microsoft/agent-lightning` | 2026-05 strict raw signal and strong adoption. | GitHub `created_at` unknown in current cache. |
| 5 | `NousResearch/hermes-agent-self-evolution` | Direct self-evolution model pipeline signal. | Metadata and trajectory evidence need refresh. |
| 6 | `EvoMap/evolver` | Memory/self-evolution direction and high mechanism score. | Metadata and code evidence need confirmation. |

## Operating Rule

Older systems such as Reflexion, Self-Refine, DSPy, OPRO, ADAS, FunSearch, and OpenEvolve remain baseline anchors; they should not be discarded, but they should not occupy the same rank lane as late-2025 and 2026 frontier candidates unless current continuity evidence is present.

## Cross-references

- [[current-value-ranking-reanalysis]]
- [[survey-seo-topic-map]]
- [[self-evolution-definition-criteria]]
- [[five-evolution-loops-topic]]
- [[agent-swarm-evolve]]
