---
title: GitHub Projects Digest
type: source
rank: A
tags: [github, digest, projects, taxonomy, self-evolution]
sources: [raw-github/]
updated: 2026-05-26
---

# GitHub Projects Digest

> **Type**: Aggregate digest | **Rank**: A | **Date**: 2026-05-26
> **Origin**: raw-github/ (531 entries, 365 with deep analysis)
> **Canonical digest per schema**: Yes
> **Cross-ref**: See also [raw-github-mechanism-analysis.md](raw-github-mechanism-analysis.md) for 365-project deep dive

## Overview

raw-github/ contains 531 project markdown files extracted from GitHub repositories related to Agent Evolution / Self-Evolution. Each file has YAML frontmatter (repo, url, collected_at, source) + README content. 365 entries received deep mechanism analysis; 166 newer entries await analysis.

## Coverage Statistics

| Metric | Value |
|--------|-------|
| Total entries | 531 |
| Deep-analyzed | 365 (69%) |
| Genuine self-evolution | ~12% of analyzed (≈44 projects) |
| Top by stars | volcengine/openviking (24,247), letta-ai/letta (22,833) |
| Top by relevance | noahshinn/reflexion, jennyzzt/dgm, evoagentx/evoagentx |

## 7-Class Taxonomy (from 365-project analysis)

| Class | Full Name | Count | Representative |
|-------|-----------|------:|----------------|
| PBE | Population-Based Evolutionary Optimization | ~15 | OpenEvolve, ClaudeEvolve, ShinkaEvolve |
| ASM | Agent Self-Modification | ~20 | A-Evolve, SkillClaw, ALTK-Evolve |
| RBS | Reflection-Based Self-Improvement | ~25 | MUSE, FLEX, Reflexion, Self-Refine |
| PO | Prompt Optimization | ~10 | DSPy, EvoPrompt, TextGrad |
| WLS | Weight-Level Self-Improvement | ~8 | Agent0, Self-Rewarding LMs |
| CE | Co-Evolution | ~8 | JarvisEvo, UI-Genie, GenEnv |
| MDE | Memory-Driven Evolution | ~15 | Mnemosyne, GraphLTM, MemRL |

## 5 Structural Factors for Genuine Self-Evolution

1. Objective feedback (not just self-consistency)
2. Mutable artifacts (prompts, code, weights — not just outputs)
3. Empirical selection (accept/reject based on evaluation)
4. Session retention (improvements persist across sessions)
5. Systematic variation (structured exploration, not random)

Projects scoring all 5: OpenEvolve, DGM, A-Evolve, Agent0, Reflexion, AlphaEvolve, ADAS.

## Top Case Studies

### CS1: OpenEvolve — MAP-Elites + LLMs
- PBE class. SOTA circle packing n=26; 2.8x GPU kernel speedup. — Source: raw-github/openevolve_openevolve.md

### CS2: A-Evolve — 5-Phase Agent Loop
- ASM class. SWE-bench 76.8%, MCP-Atlas 79.4% (#1). — Source: raw-github/a-evolve_a-evolve.md

### CS3: Agent0 — Diminishing but Real Compounding
- WLS class. +5.2%, +4.0%, +2.8% across iterations. Shows non-linearity of self-improvement. — Source: raw-github/agent0_agent0.md

## Unanalyzed Entries (166 projects)

166 entries added after the initial 365-project analysis. Priority for next ingest cycle:
- Projects with >500 stars
- Projects tagged as "论文代码" (paper code)
- Projects in ASM/PBE classes (highest self-evolution density)

## Trust Chain

- All project data sourced from raw-github/ (immutable Layer 1)
- Mechanism classifications cross-validated with cc-materials/evolution-mechanisms/
- Star counts are point-in-time snapshots from collection date
