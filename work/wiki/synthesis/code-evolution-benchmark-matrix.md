---
title: Code Evolution Benchmark Matrix
type: synthesis
rank: A
tags: [benchmark, code-evolution, algorithm-discovery, seo, evidence-chain]
sources:
  - analysis/code-evolution-benchmark-matrix.md
  - analysis/survey-seo-topic-map.md
  - survey/ch5-evaluation-cn.md
  - research/papers/02-darwin-godel-machine.md
  - research/papers/04-adas.md
  - research/papers/08-alphaevolve.md
  - site/src/pages/topics/code-evolution-benchmark/index.astro
updated: 2026-06-01
---

# Code Evolution Benchmark Matrix

## One Sentence

[KNOWN] Rank 3 of the public topic map is now anchored by a benchmark matrix that separates self-modifying coding agents, algorithm discovery, agent architecture search, prompt/program optimization, and reflection/repair loops. Source: `analysis/code-evolution-benchmark-matrix.md`

## Three Sentences

1. [KNOWN] Software-engineering claims should point to SWE-Bench, SWE-Bench Verified, Polyglot, HumanEval, MBPP, LiveCodeBench, or repository regression tests. Source: `survey/ch5-evaluation-cn.md`
2. [KNOWN] Algorithm-discovery claims are strongest when a runnable evaluator scores candidate programs and an archive/selection process retains better variants. Source: `research/papers/08-alphaevolve.md`, `projects/algorithmicsuperintelligence__openevolve.md`
3. [INFERRED] Public reader pages should explain benchmark evidence and risks; internal workflow, startup checks, and validation commands stay in `docs/ops/`, `AGENTS.md`, `CLAUDE.md`, and `work/wiki/schema.md`.

## Reuse Notes

- Use this page when updating `/topics/code-evolution-benchmark/`, `/topics/`, `/benchmark/`, README tables, and future code-evolution SEO pages.
- Do not collapse DGM/SICA, AlphaEvolve/OpenEvolve, ADAS/A-Evolve, and OPRO/DSPy/GEPA into one bucket; they mutate different objects and need different evaluators.
- If a future project only reports a final score, ask for archive, lineage, failure candidates, regression tests, cost, and transfer evidence before calling it self-evolving.

## Trust Chain

- [KNOWN] Processed analysis lives at `analysis/code-evolution-benchmark-matrix.md`.
- [KNOWN] Public page lives at `site/src/pages/topics/code-evolution-benchmark/index.astro`.
- [KNOWN] Topic data lives in `site/src/data/topicMap.ts`.
