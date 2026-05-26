# Projects/ Model Card Mechanism Deep-Dive

> **Rebuilt**: 2026-05-26 (supervisor rebuild from wiki + existing grading data)
> **Scope**: 470 project model cards in projects/ directory, classified by SEMM L0-L5
> **Trust**: Based on project-evolution-grading-full.md and raw-github mechanism analysis

---

## 1. Methodology

### 1.1 Classification Framework: SEMM (Self-Evolution Maturity Model)

| Level | Name | Key Signal | Count |
|:---:|---|---|---:|
| **L5** | Autonomous Co-Evolution | Generator+Evaluator+Infra co-evolve | ~3 |
| **L4** | Architecture/Code Self-Modification | Modifies own code/architecture | ~21 |
| **L3** | Memory/Skill Accumulation | Persistent reusable skills | ~14 |
| **L2** | Prompt/Output Refinement | Self-refine prompts/outputs | ~23 |
| **L1** | External Feedback | Human-in-loop, no self-modification | ~25 |
| **L0** | Infrastructure | Static tools/frameworks | ~205 |
| N/A | Reference | Lists/collections/replicas | ~75 |
| ? | Insufficient | Short cards, inadequate signal | ~107 |

### 1.2 Data Source Mapping

| Source | Coverage | Trust |
|--------|----------|-------|
| radar-profiles.json | 8 core systems | ★★★★★ |
| Format A deep cards (11) | DGM, AlphaEvolve, etc. | ★★★★★ |
| Format B detailed Chinese (~63) | Numbered 01-52 + named | ★★★★ |
| Format C short cards (~200+) | Auto-generated, minimal | ★★ |
| raw-github mechanism analysis | 365 entries, 7-class taxonomy | ★★★★ |

---

## 2. L4+ TRUE Self-Evolution Projects (21 projects, 4.5%)

### 2.1 Population-Based Evolution (PBE) — 4 projects

| Project | L | Mechanism | Key Evidence |
|---------|:-:|-----------|-------------|
| **OpenEvolve** | 4 | MAP-Elites + islands | Circle packing n=26 SOTA, 2.8x GPU kernel speedup |
| **ClaudeEvolve** | 4 | MAP-Elites + UCB1 | World record n=26 circle packing |
| **EoH** | 4 | LLM + evolutionary search | Novel heuristics discovery |
| **ShinkaEvolve** | 4 | Open-ended program evolution | Automated scientific discovery |

### 2.2 Agent Self-Modification (ASM) — 7 projects

| Project | L | Mechanism | Key Evidence |
|---------|:-:|-----------|-------------|
| **A-Evolve** | 4 | Solve→Observe→Evolve→Gate→Reload | SWE-bench 76.8%, MCP-Atlas 79.4% |
| **SkillClaw** | 4 | Cross-agent skill evolution | Frontend patterns improve backend design |
| **DGM** | 4 | Self-modifying source code | Reward function scoring, open-ended |
| **ALTK-Evolve** | 4 | MCP server on-the-job learning | +8.9 points AppWorld, 74% hard tasks |
| **Geneclaw** | 3 | 5-layer safety gatekeeper | Git-branched evolution, pytest validation |
| **Hermes Dojo** | 3 | Closed-loop measure-evolve-report | Per-skill success rates, human gates |
| **Interceptor** | 2-3 | 18-check scorecard | 47 iterations, 2x transport coverage |

### 2.3 Co-Evolution (CE) — 5 projects

| Project | L | Mechanism | Key Evidence |
|---------|:-:|-----------|-------------|
| **Agent0** | 4 | Curriculum+Executor co-evolution | +18% math, +24% reasoning |
| **JarvisEvo** | 4-5 | Editor-Evaluator co-evolution | CVPR 2026, synergistic dynamics |
| **Darwinia** | 4 | 50-agent Darwinian selection | Attack survival 30%→98-100% |
| **UI-Genie** | 3-4 | Agent-Reward Model co-evolution | SOTA AndroidControl/Lab/Arena |
| **GenEnv** | 3 | Agent-Environment co-training | Auto-curriculum at capability boundary |

---

## 3. L3: Memory/Skill Accumulation (14 projects, 3.0%)

Key projects: MUSE (#1 Agent Company benchmark), Mnemosyne (13,000+ memories), Meta-Prompt (self-critique instructions).

**Critical insight**: Memory alone insufficient for high-level evolution. Must combine with ASM or CE.

---

## 4. L2: Prompt/Output Refinement (23 projects, 4.9%)

Notable: Reflexion (6300+ citations), Self-Refine, DSPy, EvoPrompt (+25% on 31 datasets), TextGrad.

**Critical insight**: PO is L2 ceiling. Prompt space search is closed — doesn't change system structure.

---

## 5. Mechanism × Level Cross-Matrix

| Mechanism | L4+ | L3 | L2 | L1 | Total |
|-----------|---:|---:|---:|---:|------:|
| PBE | 4 | 0 | 0 | 0 | 4 |
| ASM | 7 | 3 | 0 | 0 | 10 |
| RBS | 2 | 2 | 5 | 2 | 11 |
| PO | 0 | 0 | 4 | 0 | 4 |
| WLS | 1 | 0 | 0 | 0 | 1 |
| CE | 5 | 3 | 1 | 0 | 9 |
| MDE | 2 | 6 | 3 | 5 | 16 |
| **Total** | **21** | **14** | **13** | **7** | **55** |

---

## 6. Key Insights

1. **12.3% have self-evolution (L2+)**, only 4.5% reach code-level self-modification
2. **ASM + PBE = highest L4 concentration** — modify code and population search are main paths
3. **Hall of Overpromising**: AutoGPT (184K stars, L0), Letta/MemGPT ("self-improvement", L1), LangChain (95K stars, L0)
4. **Safety gap**: Zero L4+ projects have production safety mechanisms

---

## 7. Data Sources

- Full grading: work/wiki/sources/project-evolution-grading-full.md (220 lines)
- Mechanism analysis: work/wiki/sources/raw-github-mechanism-analysis.md
- Radar profiles: research/ranking-framework/radar-profiles.json
- Model cards: projects/ (470 files)

## Trust Chain

| Claim | Evidence | Level |
|-------|----------|-------|
| 470 projects graded | Full directory scan | [KNOWN] |
| 21 L4+ projects | radar-profiles + Format A cards | [KNOWN] |
| ~12.3% self-evolution rate | Cross-validated with raw-github | [KNOWN] |
| Format C cards may be underestimated | Short descriptions only | [UNVERIFIED] |
