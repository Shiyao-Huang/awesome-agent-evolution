---
title: Projects Model Card Evolution Grading
type: source
rank: A
tags: [projects, model-cards, evolution-grading, L0-L4]
sources: [projects/]
updated: 2026-05-26
---

# Source: Projects Model Card Evolution Grading

> **Origin**: projects/ (437 cards) | **Sample**: 43 deep-graded | **Framework**: Self-Improvement Depth Spectrum L0-L4

## L0-L4 Framework Definition

| Level | Name | What Evolves | Key Structural Factor |
|---|---|---|---|
| L0 | No Evolution | Nothing — static system | 0/5 factors |
| L1 | Prompt Evolution | Instructions, prompts | Feedback + variation |
| L2 | Memory Evolution | Persistent memory, experience | + Session retention |
| L3 | Policy/Weight Update | Model weights via RL/DPO | + Empirical selection |
| L4 | Code Self-Modification | Own source code, architecture | + Mutable persistent code artifacts |

## Key Findings

1. **Distribution**: L0=33%, L1=19%, L2=16%, L3=16%, L4=16%
2. **L4 frontier (7 projects)**: ADAS, OpenEvolve, A-Evolve, DGM, Godel Agent, EvoAgentX, SICA
3. **Card format bias**: All L4 projects have deep-format cards. 13/14 L0 projects have lightweight cards — evolution capability may be underestimated.
4. **Memory ≠ Evolution**: Many L0/L1 projects have memory features but lack feedback-driven behavioral modification loops.

## Top L4 Projects (True Self-Evolution)

- **ADAS**: Meta-agent writes agent architectures as Python code. `exec()` injection.
- **Darwin Godel Machine**: Agent modifies own source code. Quality-diversity archive.
- **Godel Agent**: Recursive self-modification. Policy AND meta-learning co-evolve.
- **OpenEvolve**: MAP-Elites + LLMs. Algorithm discovery.
- **A-Evolve**: Universal self-improving infrastructure. SWE-bench 76.8%.

## Related Wiki Pages

- [[concepts/self-improvement]] — L1-L4 depth spectrum definition
- [[sources/raw-github-mechanism-analysis]] — 7-class taxonomy from raw-github corpus
- [[concepts/architecture-search]] — L4 architecture search methods

## Full Report

`work/research/projects-evolution-grading.md` — complete table with 43 projects, evidence, confidence ratings, Mermaid distribution chart.
