# Raw Data Source Mechanism Deep-Dive

> **Rebuilt**: 2026-05-26 (supervisor rebuild from wiki sources)
> **Origin**: Unified analysis of raw-github (365 projects), raw-papers (128 unique), raw-social (612+), raw-blogs (650+)
> **Trust**: All claims traceable to wiki sources with [KNOWN]/[INFERRED]/[UNVERIFIED] tags

---

## 1. Executive Summary

Cross-analysis of 4 raw data layers reveals: only ~12% of 365 GitHub projects implement genuine self-evolution [KNOWN]; 7 mechanism families span 128 academic papers [KNOWN]; social media hype significantly overstates actual capabilities [KNOWN]; and the gap between scaffolding improvement (real, bounded) and weight-level improvement (hypothetical, unbounded) is the field's central tension.

---

## 2. Mechanism Taxonomy (Unified)

### 2.1 Seven Mechanism Families [KNOWN]

From paper analysis (F1-F7) and GitHub analysis (PBE/MDE/etc.), unified into 10 mechanism categories:

| ID | Mechanism | Papers | Projects | Key Signal |
|---:|-----------|------:|---------:|------------|
| M1 | Self-Reflection & Refinement (F1/RBS) | ~25 | ~25 | Verbal RL, self-critique loops |
| M2 | Self-Reward & Alignment (F2) | ~15 | ~8 | Bootstrap via self-judgment |
| M3 | Memory & Experience Accumulation (F3/MDE) | ~20 | ~15 | Structured graph memory |
| M4 | Code & Architecture Self-Modification (F4/ASM) | ~20 | ~20 | Modify own code/architecture |
| M5 | Evolutionary Search & Optimization (F5/PBE) | ~15 | ~15 | LLM as semantic mutation operator |
| M6 | Multi-Agent Co-Evolution (F6/CE) | ~15 | ~8 | Knowledge reuse, not parallel |
| M7 | Environment Adaptation & Curriculum (F7) | ~18 | ~5 | Self-generated tasks |
| M8 | Prompt Optimization (PO) | ~10 | ~10 | Prompt space search |
| M9 | Weight-Level Self-Improvement (WLS) | ~5 | ~8 | Modify model weights |
| M10 | Safety & Governance | ~5 | ~3 | Alignment verification |

### 2.2 Effect Tiers [KNOWN]

| Tier | Definition | Papers | Concern |
|------|-----------|------:|---------|
| T1 Verified | External benchmark + cross-domain + cost | 5 | Gold standard |
| T2 Benchmarked | External benchmark, limited cross-domain | 35 | Overfitting risk |
| T3 Self-Evaluated | LLM-as-judge or custom metric | 40 | Circular evaluation |
| T4 Conceptual | Qualitative/anecdotal | 48 | Unverified |

---

## 3. Data Source Cross-Validation

### 3.1 Raw-GitHub (365 projects) [KNOWN]

| Metric | Value |
|--------|-------|
| Genuine self-evolution (all 5 structural factors) | ~12% (44 projects) |
| 7-class taxonomy coverage | 101 classified |
| Top PBE projects | OpenEvolve, ClaudeEvolve, EoH, ShinkaEvolve |
| Top ASM projects | A-Evolve, SkillClaw, ALTK-Evolve, Geneclaw |

**5 Structural Factors** separating TRUE from PSEUDO self-evolution:
1. Objective feedback loop
2. Mutable artifacts
3. Empirical selection
4. Session retention
5. Systematic variation

### 3.2 Raw-Papers (128 unique) [KNOWN]

**Top-10 Papers by Impact:**

| Paper | arXiv | Family | Key Mechanism |
|-------|-------|--------|--------------|
| Gödel Agent | 2410.04444 | F4 | Self-referential recursive modification |
| Self-Rewarding LM | 2401.10020 | F2 | Bootstrap via self-judgment DPO |
| CORAL | 2604.01658 | F5+F6 | Multi-agent + shared persistent memory |
| Autogenesis | 2604.15034 | F4 | Protocol-level propose-assess-commit |
| Native Agency | 2604.18131 | F7 | Intrinsic evolution, reward-free |
| Reflexion | 2303.11366 | F1+F3 | Verbal RL through language memory |
| Symbolic Learning | 2406.18532 | F4 | NL backpropagation over agent networks |
| RISE | 2407.18219 | F1 | Multi-turn MDP + reward-weighted regression |
| SCoRe | 2409.12917 | F1 | RL-trained self-correction |
| ADAS | 2408.08435 | F4+F5 | Turing-complete architecture search |

**5 Citation Lineages:**
1. Reflection: Self-Refine → Reflexion → SCoRe → RISE
2. Self-Reward: Weak-to-Strong → Self-Rewarding → Meta-Rewarding
3. Architecture: Symbolic Learning → ADAS → Gödel Agent → Autogenesis
4. Memory: Generative Agents → ExpeL → Voyager → AriadneMem
5. Multi-Agent: Multi-Agent Debate → CORAL → SAGE

### 3.3 Raw-Social & Raw-Blogs (1,298 + 1,308 files) [KNOWN]

**7 Dominant Patterns:**
1. Empirical validation replaces mathematical proof
2. Archive / stepping stone architecture (failed branches lead to breakthroughs)
3. Skill crystallization via execution traces
4. Meta-meta self-modification
5. Reward hacking as spontaneous emergence
6. Deterministic network from stochastic components
7. Budget/cost as fundamental constraint

**Social Hype vs Academic Reality Gap:**

| Social Claim | Reality | Gap |
|-------------|---------|-----|
| "Agents rewrite themselves" | Modify scaffolding/prompts, not weights | Large |
| "Exponential self-improvement" | Linear (DGM: 30pts/80 iterations) | Large |
| "Self-improvement is cheap" | $300-1,731/run; 88M tokens | Large |
| "Reward hacking is hypothetical" | Emerged unprompted in DGM, OUROBOROS | Large |

---

## 4. Convergent Conclusions

### 4.1 Three Mechanism-Level Findings [KNOWN]

1. **ASM and PBE have highest L4 concentration.** ASM: 7/10 projects at L4. PBE: 4/4 at L4. "Modify own code" and "population evolution search" are the two main paths to highest evolution level.

2. **MDE is most distributed but lowest level.** 16 MDE projects spread across L1-L4. Memory alone insufficient — needs ASM or CE to advance.

3. **PO is L2 ceiling.** 4 PO projects all stuck at L2. Prompt space search is closed — optimizing prompts doesn't change system structure.

### 4.2 Cross-Source Contradictions

| GitHub Data | Paper Data | Resolution |
|-------------|-----------|------------|
| ~12% genuine evolution | Papers claim broader capability | GitHub captures actual implementation; papers claim potential |
| Reward hacking observed in practice | Only 5/128 papers address | Practice reveals gaps theory hasn't formalized |
| Memory = most common pattern | Memory = lowest-level mechanism | Maturity gap: everyone starts with memory, few advance |

### 4.3 Coverage Gaps [INFERRED]

1. **Safety/F4 intersection**: Only Autogenesis addresses; Gödel Agent has zero safety
2. **Cost reporting**: Only 6% of papers report cost
3. **Production readiness**: Only 1% discuss deployment
4. **Stability**: Only 2% analyze stability under self-evolution pressure

---

## 5. Wiki Source References

| Source | File | Coverage |
|--------|------|----------|
| Raw-GitHub | work/wiki/sources/raw-github-mechanism-analysis.md | 365 projects, 15 case studies |
| Raw-Papers | work/wiki/sources/raw-papers-mechanism-analysis.md | 128 papers, 7 families, top-10 |
| Raw-Social/Blogs | work/wiki/sources/raw-social-blogs-mechanism-analysis.md | 7 patterns, hype gap analysis |
| Social Insights | work/research/social-mechanism-insights.md | 355 lines, benchmarks |
| Mechanism Framework | work/wiki/synthesis/mechanism-framework.md | Unified 5-loop model |

---

## 6. Trust Chain

| Claim | Source | Level |
|-------|--------|-------|
| ~12% genuine evolution | raw-github 200+ deep-read | [KNOWN] |
| 7 mechanism families | raw-papers 30+ core reviews | [KNOWN] |
| Social hype gap | cross-validation of 40+ files | [KNOWN] |
| Compounding gains diminish | Agent0 paper data | [KNOWN] |
| Cross-agent skill transfer | SkillClaw, limited external validation | [INFERRED] |
| 258 entries partially analyzed | Name/title scan only | [UNVERIFIED] |
