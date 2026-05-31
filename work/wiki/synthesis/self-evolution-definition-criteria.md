---
title: Self-Evolution Definition Criteria
type: synthesis
rank: A
tags: [definition, survey, self-evolution, evidence-chain]
sources:
  - analysis/self-evolution-definition-criteria.md
  - paper-drafts/main.tex
  - paper-drafts/ch1-intro.tex
  - site/src/pages/topics/self-evolving-ai-agents/index.astro
updated: 2026-06-01
---

# Self-Evolution Definition Criteria

## One Sentence

[KNOWN] A self-evolving AI agent must modify its own operational machinery through feedback and retain verified changes for later behavior. Source: `paper-drafts/main.tex`, `paper-drafts/ch1-intro.tex`

## Six Gates

1. [KNOWN] Mutable object: prompt, memory, tool policy, workflow, code, curriculum, weights, or population. Source: `paper-drafts/main.tex`
2. [KNOWN] Feedback signal: benchmark, environment, user feedback, executor, test, judge, or verifier. Source: `paper-drafts/ch1-intro.tex`
3. [INFERRED] Candidate generation: the system participates in proposing changes.
4. [KNOWN] Independent verification: an external test, environment, or judge checks the change. Source: `paper-drafts/ch1-intro.tex`
5. [INFERRED] Retention: passing changes persist and affect later behavior.
6. [INFERRED] Audit and rollback: lineage, rejected candidates, cost, or version boundaries exist.

## Public Surface

- Public evergreen page: `site/src/pages/topics/self-evolving-ai-agents/index.astro`
- Processed source: `analysis/self-evolution-definition-criteria.md`
- Topic map cluster: `definition` in `site/src/data/topicMap.ts`

## Use In Future Work

- Use this definition before adding a project to strict self-evolution coverage.
- Names containing “evolve” are weak evidence; mechanism evidence is stronger.
- Projects without “evolve” in the name can still be core if they pass the gates.
