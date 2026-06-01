---
title: Frontier Value Queue
type: synthesis
rank: A
tags: [frontier-queue, value-screening, dual-chain, github-projects, recency, code-scan]
sources:
  - analysis/frontier-value-queue.md
  - analysis/frontier-value-queue.json
  - scripts/generate_frontier_value_queue.mjs
  - analysis/github-project-data-analysis.json
  - analysis/github-star-growth-ranking.json
  - output/raw-github-timestamp-index.json
updated: 2026-06-01
---

# Frontier Value Queue

> Repeatable frontier triage generated from the dual-chain protocol.

## One Sentence

[KNOWN] The frontier queue scores 246 analyzed projects and splits them into code-ready, clone-needed, metadata-refresh, current-raw watch, historical-baseline, and parked lanes before deeper code/issue reading. — Source: `analysis/frontier-value-queue.json`

## Three Sentences

[KNOWN] The generator uses a 40/20/15/10/10/5 frontier score over recency, continuity, self-evolution gap fit, implementation evidence, discourse/resource signal, and benchmark/product usefulness. — Source: `scripts/generate_frontier_value_queue.mjs`

[KNOWN] The current generated queue has 5 `frontier-code-ready` projects and 15 `frontier-clone-needed` projects; code-ready means the local clone exists and can be scanned before network issue review. — Source: `analysis/frontier-value-queue.json`

[INFERRED] The immediate next research move is to fetch missing star histories for high queue entries, code-scan `modelscope/AgentEvolver`, `JARVIS-Xs/SE-Agent`, `inter-co/science-codeevolve`, `algorithmicsuperintelligence/openevolve`, and `google-gemini/gemini-cli`, while cloning/refreshing the clone-needed frontier headed by `ZJU-LLM-Safety/DARWIN`, `manthanguptaa/water`, `MemTensor/skills-vote`, and `SuperagenticAI/metaharness`. — Source: `analysis/frontier-value-queue.md`

## Lane Counts

| Lane | Count |
|---|---:|
| metadata-refresh | 102 |
| watch-current-raw | 64 |
| park-for-later | 43 |
| historical-baseline | 17 |
| frontier-clone-needed | 15 |
| frontier-code-ready | 5 |

## Top Frontier

| Rank | Project | Lane | Next action |
|---:|---|---|---|
| 1 | `modelscope/AgentEvolver` | frontier-code-ready | local code scan, then issue/PR/resource review |
| 2 | `ZJU-LLM-Safety/DARWIN` | frontier-clone-needed | clone, then code/issue scan |
| 3 | `manthanguptaa/water` | frontier-clone-needed | refresh metadata, rebuild star-history seed, clone, then scan |
| 4 | `MemTensor/skills-vote` | frontier-clone-needed | fetch star history, refresh metadata, clone, then scan |
| 5 | `JARVIS-Xs/SE-Agent` | frontier-code-ready | fetch star history, local code scan, then issue/PR/resource review |

## Cross-references

- [[value-screening-dual-chain-knowledge-base]]
- [[current-value-ranking-reanalysis]]
- [[code-evolution-benchmark-matrix]]
- [[self-evolution-definition-criteria]]
