---
title: Essential Taxonomy Framework
type: source
rank: A
tags: [taxonomy, classification, 5d-framework, essential-taxonomy]
sources: [work/research/essential-classification.md, survey/ch2-ch6]
updated: 2026-05-26
---

# Essential Taxonomy Framework: 5D Classification for Self-Evolution

> **Rebuilt**: 2026-05-26 (supervisor rebuild)
> **Source**: Derived from essential-classification.md + survey ch2-ch6 + existing taxonomies
> **Purpose**: Unified classification framework connecting all project materials

---

## 1. Framework Overview

This framework unifies 6 independent classification systems found across the project into a single 5-dimensional essential taxonomy.

### Existing Systems Unified

| System | Source | Dimensions |
|--------|--------|-----------|
| Five Evolution Loops | paper-drafts/ch2 | 5 loop types |
| 6-Category Methods | paper-drafts/ch3 | F1-F7 families |
| 6 Evaluation Dimensions | paper-drafts/ch5 | Quality metrics |
| 8 Framework Comparison | paper-drafts/ch6 | Architecture patterns |
| 7-Class Taxonomy | raw-github analysis | PBE/ASM/etc. |
| SEMM L0-L5 | project grading | Maturity levels |

---

## 2. Five Essential Dimensions

### D1: Update Target (What gets modified?)

| Target | Code | Description | Examples |
|--------|:---:|-------------|---------|
| Prompts/Instructions | P | System modifies its own prompts | DSPy, EvoPrompt, Self-Refine |
| Memory/Experience | M | Accumulates and revises experience | Voyager, ExPeL, MUSE |
| Code/Architecture | C | Modifies own source code | DGM, ADAS, Gödel Agent |
| Weights/Parameters | W | Modifies model parameters | Self-Rewarding LM, SPIN-PEFT |
| Environment/Protocol | E | Changes its operating environment | Autogenesis, GenEnv |

### D2: Feedback Source (Where does improvement signal come from?)

| Source | Code | Description | Reliability |
|--------|:---:|-------------|:---:|
| External Oracle | O | Ground truth evaluator | ★★★★★ |
| LLM-as-Judge | J | Another LLM evaluates | ★★★ |
| Self-Evaluation | S | System evaluates itself | ★★ |
| Environmental Reward | R | Task success/failure signal | ★★★★ |
| Human Feedback | H | Human-in-the-loop | ★★★★★ |

### D3: Temporal Persistence (How long do changes last?)

| Persistence | Code | Description | Systems |
|-------------|:---:|-------------|---------|
| Ephemeral | E | Changes lost between sessions | Reflexion (original) |
| Session-Level | S | Persists within one run | Most prompt optimization |
| Persistent | P | Survives across sessions | Voyager skill library |
| Fleet-Level | F | Shared across agent instances | CORAL, Mnemosyne |
| Generational | G | Inherited by successor systems | DGM, evolutionary methods |

### D4: Search Mechanism (How are improvements found?)

| Mechanism | Code | Description | Complexity |
|-----------|:---:|-------------|:---:|
| Gradient-Based | G | Following improvement signal | Low |
| Random/Enumerative | R | Try many variants | Low |
| Evolutionary/Population | E | Selection + mutation | Medium |
| Reinforcement Learning | L | Policy optimization | High |
| Self-Referential | X | System modifies its own search | Very High |

### D5: System Scope (What is the boundary of evolution?)

| Scope | Code | Description | Coordination |
|-------|:---:|-------------|:---:|
| Single Component | 1 | One module evolves alone | None |
| Agent-Level | A | Full agent evolves | Internal |
| Multi-Agent | M | Multiple agents co-evolve | Required |
| System-Level | S | Entire system + infra evolves | Required |
| Open-Ended | O | No predefined boundary | Emergent |

---

## 3. Cross-Dimensional Interaction Matrix

### Key Interactions

| Interaction | Effect | Example |
|-------------|--------|---------|
| D1=C × D4=X | Self-referential code modification → highest risk/reward | Gödel Agent |
| D1=P × D3=P | Persistent prompt changes → compound improvement | DSPy |
| D2=S × D1=C | Self-evaluated code changes → reward hacking risk | DGM |
| D5=M × D3=F | Multi-agent fleet persistence → knowledge sharing | CORAL |
| D4=E × D5=O | Open-ended evolution → emergent behavior | Darwinia |

### 3 Most Promising Unexplored Regions

1. **D1=C × D2=O × D3=G**: Code modification with external oracle validation, generational persistence. Currently: no production system. Closest: AlphaEvolve (but not generational).

2. **D1=E × D4=L × D5=S**: Environment adaptation via RL at system scope. Currently: research only (Native Agency). Production gap is large.

3. **D1=W × D3=F × D5=M**: Fleet-level weight sharing across multi-agent systems. Currently: theoretical (SPIN-PEFT is single-agent). Potential for emergent specialization.

---

## 4. Priority Goals

### 1-Month Targets

| Priority | Goal | Dimension | Current Gap |
|:---:|------|-----------|-------------|
| P0 | Safe code self-modification | D1=C × D2=O | Zero safety in M4 |
| P0 | Cost-constrained evolution | D4=E × budget | 88M tokens/run |
| P1 | Evolution verification standard | D2=O × D3=P | No standard exists |
| P1 | Cross-agent skill curation | D1=M × D5=M | When to create/update/merge |

### 3-Month Targets

| Priority | Goal | Dimension | Current Gap |
|:---:|------|-----------|-------------|
| P0 | Production evolution monitor | D3=P × monitoring | Deployed evolved systems untracked |
| P1 | Multi-agent evolution protocol | D5=M × D4=E | No communication standard |
| P2 | Fleet-level knowledge synthesis | D3=F × D5=M | Only Mnemosyne prototype |

---

## 5. Missing Skills/Agents (7 identified)

| # | Agent/Skill | Purpose | Urgency |
|---:|------------|---------|:---:|
| 1 | Evolution Safety Verifier | Validate evolved code before deployment | Critical |
| 2 | Cost-Aware Evolution Engine | Budget-constrained search optimization | High |
| 3 | Cross-Agent Skill Curator | Decide when to create/update/merge skills | High |
| 4 | Evolution Boundary Detector | Detect when system exceeds safe bounds | Critical |
| 5 | Multi-Agent Evolution Protocol | Standardize co-evolution communication | Medium |
| 6 | Production Evolution Monitor | Track health of deployed evolved systems | High |
| 7 | Evolution Rollback System | Safe revert when evolution degrades | Critical |

---

## 6. Source References

- Essential classification: work/research/essential-classification.md
- Mechanism framework: work/wiki/synthesis/mechanism-framework.md
- Survey taxonomy: paper-drafts/ch2-taxonomy.tex
- Methods classification: paper-drafts/ch3-methods.tex
- Evaluation dimensions: paper-drafts/ch5-evaluation.tex
- Project grading: work/wiki/sources/project-evolution-grading-full.md

## Trust Chain

| Claim | Source | Level |
|-------|--------|-------|
| 5 essential dimensions | Unified from 6 existing systems | [KNOWN] |
| 3 most promising unexplored regions | Gap analysis of 5D space | [INFERRED] |
| 7 missing agents/ skills | Cross-dimensional gap analysis | [INFERRED] |
| Priority goals based on urgency | Evidence from raw data analysis | [INFERRED] |
