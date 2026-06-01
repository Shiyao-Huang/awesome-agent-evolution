---
title: Five Evolution Loops Topic
type: synthesis
rank: A
tags: [survey, seo, taxonomy, evolution-loops]
sources:
  - analysis/five-evolution-loops-topic.md
  - site/src/data/survey.ts
  - site/src/pages/topics/five-evolution-loops/index.astro
  - site/src/pages/survey/mechanisms.astro
  - paper-drafts/ch1-intro.tex
  - paper-drafts/ch3-methods.tex
updated: 2026-06-01
---

# Five Evolution Loops Topic

## One Sentence

[KNOWN] Five Evolution Loops is the Rank 2 survey/SEO topic after the definition page: it explains how feedback becomes retained change. Source: `analysis/five-evolution-loops-topic.md`

## Key Claim

[INFERRED] A self-evolving agent should be classified by loop mechanics before project name: mutable object, feedback signal, verifier, retention mechanism, and failure mode. Source: `analysis/five-evolution-loops-topic.md`

## Loop Memory

| Loop | Use it to ask | Main risk |
|---|---|---|
| Specification-to-Execution | Can the system turn a fuzzy goal into a repeatable executable process? | spec drift or no runnable artifact |
| Search | Which candidate space is being explored and selected? | random walk, local optimum, benchmark overfitting |
| Evaluator | Who decides that a change is real improvement? | Goodhart, leakage, weak tests |
| Reflection | Does failure become scoped reusable memory? | memory pollution, self-confirmation |
| Population | Are multiple candidate lineages preserved across generations? | premature convergence or unmanaged cost |

## Public Surface

- Public topic page: `site/src/pages/topics/five-evolution-loops/index.astro`
- Processed analysis: `analysis/five-evolution-loops-topic.md`
- Existing survey mechanism page: `site/src/pages/survey/mechanisms.astro`
- Existing blog explainer: `site/src/content/blog/five-evolution-loops-for-ai-agents.mdx`

## Use In Future Work

- The topic map Rank 2 cluster should link directly to `/topics/five-evolution-loops/`.
- Future per-loop pages should reuse the matrix fields: mutable object, feedback signal, verifier, retention, failure mode, and representative evidence.
- Evolve-AGI Index loop-strength claims should cite this loop page or the processed analysis before scoring mechanism maturity.
