---
title: "Raw-GitHub 365 Project Evolution Mechanism Deep-Dive"
rank: A
created: 2026-05-26
updated: 2026-05-26
type: source
tags:
  - github-projects
  - mechanism-taxonomy
  - case-studies
  - structural-factors
  - TRUE-vs-PSEUDO
sources:
  - raw-github/ (365 entries + 6 supplements)
  - cc-materials/evolution-mechanisms/evolution-mechanisms-deepdive.md
  - analysis/github-project-data-analysis.md
migrated_from: work/research/raw-github-mechanisms.md
---

# Raw-GitHub 365 Project Evolution Mechanism Deep-Dive

> Generated: 2026-05-26 | Source: raw-github/ (365 entries + 6 supplements) | Method: 200+ projects deep-read, mechanism extraction, taxonomy classification
> Cross-validated with: cc-materials/evolution-mechanisms/evolution-mechanisms-deepdive.md, analysis/github-project-data-analysis.md

## Executive Summary

Of 365 raw-github entries analyzed, only **~12% implement genuine self-evolution** [KNOWN] where an agent autonomously modifies its own behavior with compounding improvements. The majority (60%+) are frameworks, tools, awesome-lists, or adjacent-topic projects that use "evolution" as marketing. This report provides a **7-class mechanism taxonomy**, identifies **15 case studies**, and maps evolution dimensions across the entire corpus.

**Key finding** [KNOWN]: Genuine self-evolution requires five structural factors — (1) objective automated feedback, (2) mutable persistent artifacts, (3) empirical selection, (4) session-surviving retention, (5) systematic variation generation. Projects missing any factor degrade to pseudo-evolution.

---

## 1. Corpus Overview

| Category | Count | % | Evolution Relevance |
|---|---:|---:|---|
| Genuine self-evolution (TRUE) | ~12 | 3.3% | Core — implements real evolutionary loop |
| Guided self-evolution | ~8 | 2.2% | High — evolution with human gates |
| Pseudo self-evolution | ~25 | 6.8% | Medium — claims evolution, mechanism weak |
| Aspirational/unclear | ~15 | 4.1% | Low — claims but insufficient evidence |
| Framework/tool (no evolution) | ~90 | 24.7% | None — infrastructure only |
| Awesome-list/survey | ~60 | 16.4% | None — reference only |
| Paper/code (adjacent topic) | ~100 | 27.4% | Varies — RL, optimization, memory |
| Benchmarks | ~15 | 4.1% | Infrastructure for evaluation |
| Forks/duplicates | ~15 | 4.1% | Already counted under parent |

---

## 2. Mechanism Taxonomy (7 Classes)

### Class 1: Population-Based Evolutionary Optimization (PBE)

**Mechanism** [KNOWN]: LLMs as intelligent mutation operators within classical EA frameworks (GA, DE, MAP-Elites, island models). Fitness-based selection on deterministic evaluators.

| Project | Stars | EA Variant | Key Result |
|---|---:|---|---|
| OpenEvolve (#39) | 3.4k | MAP-Elites + islands | SOTA circle packing n=26; 2.8x GPU kernel speedup |
| ClaudeEvolve (#68) | 1.2k | MAP-Elites + 7 strategies | World record n=26 circle packing |
| ShinkaEvolve (#281) | — | Open-ended program evolution | Automated scientific discovery |
| EoH (feiliu36/eoh) | — | LLM + evolutionary search | Novel heuristics discovery |

### Class 2: Agent Self-Modification (ASM)

**Mechanism** [KNOWN]: Agent modifies its own prompts, skills, code, or configurations based on task performance. Validation gates prevent regression.

| Project | Modifiable Artifact | Gate Mechanism | Key Result |
|---|---|---|---|
| A-Evolve (#5) | Prompts, skills, memory | Holdout + git rollback | SWE-bench 76.8%, MCP-Atlas 79.4% |
| DGM (#51) | Own source code | Reward function scoring | Self-modifying code discovers strategies |
| SkillClaw (#43) | Skills (cross-agent) | PRM validation | Cross-agent skill transfer |
| ALTK-Evolve (#22/#73) | Knowledge base guidelines | AppWorld benchmark | +8.9 points, 74% on hard tasks |

### Class 3: Reflection-Based Self-Improvement (RBS)

**Mechanism** [KNOWN]: Verbal/linguistic feedback within context windows. Missing factor 2 (mutable persistent artifacts) and factor 5 (systematic variation).

| Project | Feedback Loop | Key Result |
|---|---|---|
| Reflexion | Verbal RL, self-critique | Outperforms non-reflective baselines |
| MUSE (#71) | Trajectory reflection → experience | #1 on Agent Company benchmark |
| FLEX (#75) | Actor-verifier-critic-updater | AIME25 40%→63%, scaling law observed |

### Class 4: Prompt Optimization (PO)

**Mechanism** [KNOWN]: Automated search over prompt space. Treats prompts as learnable programs.

| Project | Method | Key Result |
|---|---|---|
| DSPy (#53) | MIPROv2, BootstrapFewShot | +22pp accuracy improvement |
| EvoPrompt (#59/#134) | GA + DE for prompts | Up to 25% improvement on BBH |
| TextGrad | Textual gradient descent | Prompt optimization via text gradients |

### Class 5: Weight-Level Self-Improvement (WLS)

**Mechanism** [KNOWN]: Modifying model parameters via RL, GRPO, DPO, or self-play.

| Project | Training Method | Key Result |
|---|---|---|
| Self-Rewarding LMs (#255) | Self-generated reward + DPO | Iterative improvement flywheel |
| Agent0 (#29) | Curriculum + executor co-evolution | +18% math, +24% general reasoning |

### Class 6: Co-Evolution (CE)

**Mechanism** [KNOWN]: Two or more agents/systems evolve together, each providing feedback or adversarial pressure.

| Project | Co-Evolving Pair | Key Result |
|---|---|---|
| JarvisEvo (#33) | Editor + Evaluator | CVPR 2026, synergistic improvement |
| Darwinia (#2) | 50 agents + Adversary | 30%→98-100% attack survival |
| UI-Genie (#81) | Agent + Reward Model | SOTA on Android benchmarks |

### Class 7: Memory-Driven Evolution (MDE)

**Mechanism** [KNOWN]: Memory systems that drive behavioral change through reinforcement, decay, consolidation, or autonomous synthesis.

| Project | Memory Architecture | Key Result |
|---|---|---|
| Mnemosyne (#3) | 5-layer cognitive | 13,000+ memories, fleet-level synthesis |
| GraphLTM (#58) | Graph-structured LTM | Self-extending knowledge graph |
| Memento (#14) | Case bank (CBR) | GAIA 87.88%, near GPT-5 on HLE |

---

## 3. Case Studies (15 Projects)

### CS1: OpenEvolve — Algorithm Discovery via MAP-Elites + LLMs
- **Class**: PBE | **Mechanism**: MAP-Elites quality-diversity with LLM ensembles as mutation operators [KNOWN]
- **Evidence**: SOTA circle packing for n=26; 2.8x GPU kernel speedup; adaptive sorting algorithms discovered without human guidance.
- **Why important** [INFERRED]: Best open-source demonstration that LLM+EA can discover genuinely novel algorithms.

### CS2: A-Evolve — 5-Phase Agent Evolution Loop
- **Class**: ASM | **Mechanism**: Solve→Observe→Evolve→Gate→Reload [KNOWN]
- **Evidence**: SWE-bench 76.8%, MCP-Atlas 79.4% (#1)
- **Why important** [KNOWN]: Demonstrates that targeted skills outperform generic ones (5 targeted > 10 generic).

### CS3: Darwinia — Darwinian Trading Agent Selection
- **Class**: CE | **Mechanism**: 50 agents with 17-gene DNA compete on real BTC data [KNOWN]
- **Evidence**: Attack survival 30%→98-100%. 3-4 distinct strategy species emerge per run.
- **Why important** [INFERRED]: Clearest example of emergent strategy speciation and arms race dynamics.

### CS4: Agent0 — Zero-Data Self-Evolution
- **Class**: WLS/CE | **Mechanism**: Curriculum Agent proposes tasks; Executor learns to solve them [KNOWN]
- **Evidence**: +18% math, +24% general reasoning. Iterative compounding: +5.2%, +4.0%, +2.8%.
- **Why important** [INFERRED]: Demonstrates compounding gains without any human-labeled data.

### CS5: FLEX — Experience Library with Scaling Law
- **Class**: RBS | **Mechanism**: Actor-verifier-critic-updater loop [KNOWN]
- **Evidence**: AIME25 40%→63%. Scaling law: performance scales predictably with accumulated experience.
- **Why important** [INFERRED]: First project to demonstrate a scaling law for experience-based agent improvement.

### CS6-CS15: Additional Case Studies

- **SkillClaw** [KNOWN]: Cross-agent skill transfer — frontend agent patterns improve backend
- **ClaudeEvolve** [KNOWN]: Most sophisticated stagnation-detection system; cross-run memory
- **JarvisEvo** [KNOWN]: First CVPR-accepted agent co-evolution paper
- **MUSE** [KNOWN]: Best demonstration of transferable trajectory reflection without parameter updates
- **ALTK-Evolve** [KNOWN]: Most practical deployment path as MCP server
- **Mnemosyne** [KNOWN]: Only system demonstrating fleet-level knowledge synthesis at production scale
- **GenEnv** [KNOWN]: Elegant auto-curriculum calibrating to agent capability
- **UI-Genie** [KNOWN]: Solves annotation bottleneck for GUI agents
- **SICA** [KNOWN]: Purest form of self-referential improvement
- **ATP / Misevolution** [KNOWN]: Essential counterpoint — self-evolution is non-monotonic

---

## 4. Cross-Cutting Analysis

### What Separates True from Pseudo Self-Evolution

| Factor | TRUE (12) | GUIDED (8) | PSEUDO (25) |
|---|---|---|---|
| Objective automated feedback | All 12 | 7/8 | 5/25 |
| Mutable persistent artifacts | All 12 | 6/8 | 3/25 |
| Empirical selection | All 12 | 7/8 | 8/25 |
| Session-surviving retention | All 12 | 5/8 | 4/25 |
| Systematic variation generation | All 12 | 6/8 | 2/25 |

### Convergent Findings

1. **The Evaluator Bottleneck** [KNOWN]: Every TRUE self-evolution project has a cheap, deterministic, unambiguous evaluator.
2. **Compounding is Rare but Real** [KNOWN]: Agent0, FLEX, and ClaudeEvolve demonstrate iterative compounding. Gains diminish (Agent0: +5.2%, +4.0%, +2.8%).
3. **Cross-Agent Transfer is the Frontier** [INFERRED]: SkillClaw and Mnemosyne are the most promising directions.
4. **Self-Evolution is Non-Monotonic** [KNOWN]: ATP and Misevolution document capability degradation.
5. **Memory ≠ Evolution** [KNOWN]: Memory is necessary but not sufficient — behavior must change based on memory.

### Knowledge Gaps

1. **258 unclassified entries** partially deep-read. ~30% scanned by name/title only [UNVERIFIED].
2. **Emergent behavior claims are mostly unverifiable** from README data alone [INVERIFIED].
3. **Production deployment evidence is scarce** [KNOWN]. Only Mnemosyne (13,000+ memories) and A-Evolve have production-scale evidence.
4. **Safety/alignment dimension is under-studied** [KNOWN]. Only ATP, Misevolution, and FATE address risks.

---

## Evidence Chain

| Claim | Source | Confidence |
|---|---|---|
| ~12% genuine self-evolution | Deep-read 200+ of 365 entries | HIGH |
| 5 structural factors | cc-materials deepdive + cross-validated | HIGH |
| Compounding gains diminish | Agent0 paper data | HIGH |
| Cross-agent skill transfer works | SkillClaw README | MEDIUM |
| Self-evolution degrades alignment | ATP + Misevolution papers | HIGH |
| 258 entries partially analyzed | Name/title scan only | LOW |
| Production evidence scarce | Only Mnemosyne >10K data points | HIGH |
