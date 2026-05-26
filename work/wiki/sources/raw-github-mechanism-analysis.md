# Source: Raw-GitHub 365 Project Mechanism Analysis

> **Type**: Source analysis | **Rank**: A | **Date**: 2026-05-26
> **Origin**: raw-github/ (365 entries + 6 supplements)
> **Method**: 200+ projects deep-read, mechanism extraction across entries 1-365
> **Cross-validated with**: cc-materials/evolution-mechanisms/evolution-mechanisms-deepdive.md, analysis/github-project-data-analysis.md

## Summary

Deep analysis of 365 raw-github entries extracting evolution mechanisms. Only ~12% implement genuine self-evolution. Identified 7 mechanism classes, 15 case studies, and 5 structural factors separating true from pseudo self-evolution.

## Key Findings

1. **~12% genuine self-evolution**: Only ~12 of 365 projects implement all 5 structural factors for true self-evolution
2. **7-class taxonomy**: PBE / ASM / RBS / PO / WLS / CE / MDE
3. **5 structural factors**: Objective feedback + Mutable artifacts + Empirical selection + Session retention + Systematic variation
4. **Compounding gains are real but diminishing**: Agent0 shows +5.2%, +4.0%, +2.8% across iterations
5. **Self-evolution is non-monotonic**: ATP/Misevolution document capability degradation under self-evolution pressure

## Mechanism Classes

| Class | Full Name | Projects | Key Examples |
|---|---|---:|---|
| PBE | Population-Based Evolutionary Optimization | ~15 | OpenEvolve, ClaudeEvolve, ShinkaEvolve, EoH |
| ASM | Agent Self-Modification | ~20 | A-Evolve, SkillClaw, ALTK-Evolve, Geneclaw |
| RBS | Reflection-Based Self-Improvement | ~25 | MUSE, FLEX, Reflexion, Self-Refine |
| PO | Prompt Optimization | ~10 | DSPy, EvoPrompt, TextGrad |
| WLS | Weight-Level Self-Improvement | ~8 | Agent0, Self-Rewarding LMs, SPIN-PEFT |
| CE | Co-Evolution | ~8 | JarvisEvo, UI-Genie, GenEnv, Darwinia |
| MDE | Memory-Driven Evolution | ~15 | Mnemosyne, GraphLTM, MemRL, Memento |

## Top Case Studies

### CS1: OpenEvolve — Algorithm Discovery via MAP-Elites + LLMs
- **Class**: PBE | Multi-population islands
- SOTA circle packing n=26; 2.8x GPU kernel speedup; novel algorithms discovered without human guidance

### CS2: A-Evolve — 5-Phase Agent Evolution Loop
- **Class**: ASM | Single agent
- Solve→Observe→Evolve→Gate→Reload. SWE-bench 76.8%, MCP-Atlas 79.4% (#1)

### CS3: Darwinia — Darwinian Trading Agent Selection
- **Class**: CE | 50-agent population
- 3-4 species emerge per run. Attack survival 30%→98-100%. Arms race dynamics.

### CS4: Agent0 — Zero-Data Self-Evolution
- **Class**: WLS/CE | Curriculum + Executor co-evolution
- +18% math, +24% general reasoning. Compounding: +5.2%, +4.0%, +2.8% across iterations.

### CS5: FLEX — Experience Library Scaling Law
- **Class**: RBS | Single agent
- AIME25 40%→63%. Scaling law: performance scales predictably with accumulated experience.

### CS6: SkillClaw — Cross-Agent Skill Evolution
- **Class**: ASM | Multi-agent (Hermes, Codex, Claude Code, OpenClaw)
- Cross-agent skill transfer: frontend React patterns improve backend API design.

### CS7: ClaudeEvolve — AlphaEvolve in Claude Code
- **Class**: PBE | Multi-strategy
- World record n=26 circle packing from generic baselines. Most sophisticated stagnation detection.

### CS8: JarvisEvo — Editor-Evaluator Co-Evolution
- **Class**: CE | Dual-agent
- CVPR 2026. Synergistic improvement — evaluator's improvement accelerates editor's improvement.

### CS9: MUSE — Hierarchical Memory Self-Evolution
- **Class**: RBS | Single agent
- #1 on Agent Company benchmark. Accumulated experience generalizes to unseen tasks.

### CS10: ALTK-Evolve — On-the-Job Learning via MCP
- **Class**: ASM | MCP server
- +8.9 points AppWorld, 74% on hard tasks. Most practical deployment path.

### CS11: Mnemosyne — Fleet-Level Knowledge Synthesis
- **Class**: MDE | 10-agent mesh
- 13,000+ memories. When 3+ agents agree on fact → auto-synthesized into fleet-level insight.

### CS12: GenEnv — Agent-Environment Co-Training
- **Class**: CE | Dual-agent
- Environment generates tasks at ~50% success rate for maximum gradient signal.

### CS13: UI-Genie — GUI Agent-Reward Model Co-Evolution
- **Class**: CE | Agent + reward model
- SOTA on AndroidControl, AndroidLab, Android Arena. Progressive task space expansion.

### CS14: SICA — Self-Referential Code Improvement
- **Class**: ASM | Single agent (self-referential)
- ICLR 2025 Workshop. Agent improves its own codebase — purest self-referential improvement.

### CS15: ATP / Misevolution — Evolution Risk Studies
- **Class**: Research (risk)
- ICLR 2026. Self-evolution is non-monotonic. RL alignment is fragile. Memory can bias toward over-refunding.

## Related Wiki Pages

- [[concepts/evolution-mechanism-taxonomy]] — 7-class taxonomy definition
- [[concepts/structural-factors-self-evolution]] — 5 factors separating TRUE from PSEUDO
- [[entities/openevolve]] — Case study CS1
- [[entities/a-evolve]] — Case study CS2
- [[sources/raw-github-index]] — Full corpus of 365 entries

## Full Report

Detailed analysis with Mermaid diagrams, cross-cutting tables, and evidence chains: `work/research/raw-github-mechanisms.md`

## Trust Chain

| Claim | Evidence | Confidence |
|---|---|---|
| ~12% genuine self-evolution | Deep-read 200+ of 365 entries | HIGH |
| 5 structural factors | Cross-validated with cc-materials deepdive | HIGH |
| Compounding gains diminish | Agent0 paper data | HIGH |
| Cross-agent skill transfer | SkillClaw architecture, limited external validation | MEDIUM |
| Self-evolution degrades alignment | ATP + Misevolution (ICLR 2026) | HIGH |
| 258 entries partially analyzed | Name/title scan only | LOW |
