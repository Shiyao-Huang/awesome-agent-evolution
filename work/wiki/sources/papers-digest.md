---
title: Papers Digest
type: source
rank: A
tags: [papers, digest, mechanism-families, taxonomy, evidence]
sources: [raw-papers/, paper-reviews/]
updated: 2026-05-26
---

# Papers Digest

> **Type**: Aggregate digest | **Rank**: A | **Date**: 2026-05-26
> **Origin**: raw-papers/ (201 files, 128 unique papers) + paper-reviews/ (137 reviews)
> **Canonical digest per schema**: Yes
> **Cross-ref**: See also [raw-papers-mechanism-analysis.md](raw-papers-mechanism-analysis.md) for deep dive

## Overview

raw-papers/ contains 201 files covering 128 unique papers on Agent Self-Evolution. 137 reviews exist in paper-reviews/. Deep mechanism analysis covers the core 30+ papers with cross-validation.

## 7 Mechanism Families

| ID | Family | Core Loop | Papers | Key Insight |
|----|--------|-----------|------:|-------------|
| F1 | Self-Reflection & Refinement | generate→critique→refine→iterate | ~25 | Without external grounding, degrades on hard tasks |
| F2 | Self-Reward & Alignment | generate→self-judge→preference train→iterate | ~15 | Evaluator quality bounds improvement quality |
| F3 | Memory & Experience Accumulation | execute→extract→store→reuse | ~20 | Evolved from flat text to structured graph memory |
| F4 | Code & Architecture Self-Modification | analyze→modify code→test→deploy | ~20 | Maximum freedom but zero safety in most papers |
| F5 | Evolutionary Search & Optimization | generate variants→evaluate→select→mutate | ~15 | LLMs as semantic mutation operators |
| F6 | Multi-Agent Co-Evolution | share/compete/debate→collective improve | ~15 | Value is knowledge reuse, not parallel search |
| F7 | Environment Adaptation & Curriculum | learn from env→adapt→self-generate tasks | ~18 | Evolution can substitute for raw scale |

## Top-10 Papers by Impact

| # | Paper | arXiv | Family | Mechanism |
|---|-------|-------|--------|-----------|
| 1 | Gödel Agent | 2410.04444 | F4 | Self-referential recursive modification |
| 2 | Self-Rewarding LM | 2401.10020 | F2 | Bootstrap via self-judgment DPO |
| 3 | CORAL | 2604.01658 | F5+F6 | Multi-agent + shared persistent memory |
| 4 | Autogenesis | 2604.15034 | F4 | Protocol-level propose-assess-commit |
| 5 | Native Agency | 2604.18131 | F7 | Intrinsic evolution, reward-free inference |
| 6 | Reflexion | 2303.11366 | F1+F3 | Verbal RL through language memory |
| 7 | Symbolic Learning | 2406.18532 | F4 | NL backpropagation over agent networks |
| 8 | RISE | 2407.18219 | F1 | Multi-turn MDP + reward-weighted regression |
| 9 | AlphaEvolve | — | F5 | Industrial-scale evolutionary coding |
| 10 | Absolute Zero | 2504.16663 | F7 | Zero-data self-play reasoning |

## Coverage Statistics

| Metric | Value |
|--------|-------|
| Total raw files | 201 |
| Unique papers | 128 |
| Reviews | 137 |
| Mechanism families | 7 (F1-F7) |
| Coverage by analysis | ~64% (128/201) |

## Uncovered Papers (73 papers)

73 papers in raw-papers/ not yet represented in mechanism analysis. Priority for next ingest:
- Papers with arXiv IDs starting 2504-2605 (newest)
- Papers in F4 (code/architecture self-modification) — highest risk/highest reward
- Papers in F7 (environment adaptation) — emerging frontier

## Trust Chain

- All paper data sourced from raw-papers/ (immutable Layer 1)
- arXiv IDs provide permanent traceability
- Reviews cross-validated against paper content
- Mechanism family assignments: [INFERRED] from analysis, tagged for verification
