---
title: Value LSH Classification System
type: synthesis
rank: A
tags: [value-lsh, classification, mom-test, embedding, graph]
sources: [analysis/value-lsh-classification-system.md, analysis/value-lsh-index.md, data-engine/value-lsh-index/manifest.json]
updated: 2026-06-01
---

# Value LSH Classification System

> Value LSH is a new classification system that converts user-value facets into discrete `-1/0/+1` separating lines, then uses LSH and embedding projections to compare the whole corpus.

## Core Claim

[CLAIM] The classification unit is a value facet, not a repo category: usability, verifier strength, retained improvement, rollback, current momentum, user demand, and evidence-chain completeness are all separate dimensions. — Source: `analysis/value-lsh-classification-system.md`

[CLAIM] The first implementation scans GitHub projects, raw papers, raw social/X captures, ranked social captures, and raw blogs into a value matrix and LSH cluster map. — Source: `analysis/value-lsh-index.json`

[CLAIM] OpenAI-compatible embeddings, gbrain embedding endpoints, hash embeddings, value-vector embeddings, PCA/TSNE, and future gbrain graph adapters are parallel semantic views; they should propose neighborhoods, not replace evidence-backed facet judgement. — Source: `scripts/build_value_embedding_projection.mjs`

## Mom Test Link

Mom Test interview notes should produce facets by extracting past behavior, workaround cost, repeated pain, and buying/usage signals. A strong interview-derived facet becomes a better LSH line than an agent-invented label because it separates projects by user value rather than vocabulary.

## Granularity

| Level | Role |
|---|---|
| L0 axis | Reader-facing question, such as "can it run?" or "does it improve itself?" |
| L1 facet | LSH dimension, such as `implementation_runnable` |
| L2 probe | Detector/evidence rule, such as local eval scripts or benchmark text |
| L3 citation | Raw/processed/interview source path |

## Current Artifacts

- `scripts/build_value_lsh_index.mjs`
- `scripts/build_value_embedding_projection.mjs`
- `analysis/value-lsh-classification-system.md`
- `analysis/value-lsh-index.md`
- `analysis/value-lsh-index.json`
- `analysis/value-lsh-graph-3d.json`
- `data-engine/value-lsh-index/`

## Next Iteration

1. Add structured Mom Test/interview facet inputs.
2. Add a gbrain graph adapter that stores value-facet nodes, material nodes, and cluster edges.
3. Use OpenAI-compatible or gbrain embeddings only when the API key is available through environment variables; keep value/hash embedding as offline baselines.
4. Compare LSH clusters against embedding clusters and promote only stable cross-view findings.
