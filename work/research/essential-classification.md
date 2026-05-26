# Essential Classification: Self-Evolution Mechanism Taxonomy

> **Rebuilt**: 2026-05-26 (supervisor rebuild from wiki sources + survey content)
> **Scope**: Unified taxonomy across all raw data sources
> **Trust**: Based on mechanism-analysis-framework.md + raw-github/papers/social analyses

---

## 1. Five-Dimensional Classification

Self-evolution systems are classified across 5 essential dimensions:

### D1: Mechanism Type (10 categories)

| ID | Mechanism | Core Loop | Papers | Projects |
|---:|-----------|-----------|------:|---------:|
| M1 | Self-Reflection | generate→critique→refine | ~25 | ~25 |
| M2 | Self-Reward | generate→judge→preference train | ~15 | ~8 |
| M3 | Memory Accumulation | execute→extract→store→reuse | ~20 | ~15 |
| M4 | Code Self-Modification | analyze→modify code→test→deploy | ~20 | ~20 |
| M5 | Evolutionary Search | variants→evaluate→select→mutate | ~15 | ~15 |
| M6 | Multi-Agent Co-Evolution | share/compete→collective improve | ~15 | ~8 |
| M7 | Environment Adaptation | learn from env→adapt→self-gen tasks | ~18 | ~5 |
| M8 | Prompt Optimization | prompt space search | ~10 | ~10 |
| M9 | Weight-Level Improvement | modify model weights | ~5 | ~8 |
| M10 | Safety & Governance | alignment verification | ~5 | ~3 |

### D2: Effect Quality (4 tiers)

| Tier | Definition | % of Papers |
|------|-----------|------:|
| T1 Verified | External benchmark + cross-domain + cost | 4% |
| T2 Benchmarked | External benchmark, limited cross-domain | 27% |
| T3 Self-Evaluated | LLM-as-judge or custom metric | 31% |
| T4 Conceptual | Qualitative/anecdotal | 38% |

### D3: Architecture Pattern (7 types)

| Pattern | Description | Key Example |
|---------|-------------|------------|
| Single-Agent Loop | One agent iterates on own output | Reflexion |
| Generator-Discriminator | Create + evaluate pair | Self-Rewarding LM |
| Population-Based | Multiple candidates compete | DGM, OpenEvolve |
| Hierarchical Memory | Layered experience storage | MUSE, Voyager |
| Protocol-Based | Formal propose-assess-commit cycle | Autogenesis |
| Multi-Agent Mesh | Peer-to-peer knowledge sharing | CORAL |
| Agent-Environment | Co-adaptive system and environment | GenEnv |

### D4: Maturity Level (SEMM L0-L5)

| Level | Count (of 470) | % |
|:---:|---:|---:|
| L4+ (Code Self-Mod) | ~21 | 4.5% |
| L3 (Memory/Skill) | ~14 | 3.0% |
| L2 (Prompt Refine) | ~23 | 4.9% |
| L1 (External Feedback) | ~25 | 5.3% |
| L0 (Infrastructure) | ~205 | 43.6% |
| N/A / Insufficient | ~182 | 38.7% |

### D5: High-Potential Directions (6)

| Direction | Rationale | Evidence Level |
|-----------|-----------|:-:|
| **D-A: Safe Code Self-Modification** | M4 has zero safety; highest urgency | ★★★★ |
| **D-B: Cross-Agent Skill Transfer** | SkillClaw shows transfer across agent types | ★★★ |
| **D-C: Memory + ASM Combination** | Neither sufficient alone; synergy expected | ★★★★ |
| **D-D: Cost-Aware Evolution** | 88M tokens/run unsustainable; efficiency matters | ★★★★★ |
| **D-E: Evolution Verification** | No standard for verifying evolved systems | ★★★ |
| **D-F: Human-Compatible Co-Evolution** | CE shows promise but needs safety layer | ★★ |

---

## 2. Cross-Dimensional Interactions

| Interaction | Effect | Example |
|-------------|--------|---------|
| M4 (Code) × L4 (SEMM) | Strongest correlation — code modification → highest level | DGM, ADAS |
| M3 (Memory) × M4 (Code) | Memory enables code evolution quality | Voyager + code library |
| M5 (Evolution) × M6 (Multi-Agent) | Population diversity × knowledge sharing | CORAL |
| D4 L2 × M8 (Prompt) | PO is ceiling — cannot break L2 barrier | DSPy, EvoPrompt |
| M10 (Safety) × All | Critical gap — no mechanism has adequate safety | ATP/Misevolution |

---

## 3. Classification Matrix

| | T1-T2 (Verified) | T3-T4 (Weaker) |
|---|---:|---:|
| M4+M5+M9 (Code/Evolution) | 8 | 12 |
| M1+M2+M8 (Reflection/Reward) | 15 | 25 |
| M3+M6+M7 (Memory/Multi/Env) | 10 | 23 |
| M10 (Safety) | 1 | 4 |

**Key insight**: Code/Evolution mechanisms have highest verification ratio (40%) vs Memory/Multi/Env (30%). Safety is critically under-verified (20%).

---

## 4. Missing Skills & Agents

| Gap | Required Capability | Current Status |
|-----|-------------------|----------------|
| Evolution Verification Agent | Verify evolved code safety | Non-existent |
| Cost-Aware Evolution Engine | Budget-constrained search | Partial (AlphaEvolve) |
| Cross-Agent Skill Curator | When to create/update/merge skills | Unsolved |
| Safety Boundary Detector | Detect evolution boundary violations | Research only (ATP) |
| Multi-Agent Evolution Protocol | Standardize co-evolution communication | No standard exists |
| Production Evolution Monitor | Track deployed evolved system health | Non-existent |
| Evolution Rollback System | Safe revert when evolution degrades | Non-existent |

---

## 5. Source References

- Mechanism framework: work/wiki/synthesis/mechanism-framework.md
- GitHub mechanism analysis: work/wiki/sources/raw-github-mechanism-analysis.md
- Papers mechanism analysis: work/wiki/sources/raw-papers-mechanism-analysis.md
- Project grading (L0-L5): work/wiki/sources/project-evolution-grading-full.md
- Survey taxonomy: paper-drafts/ch2-taxonomy.tex (five-loop model)

## Trust Chain

| Claim | Evidence | Level |
|-------|----------|-------|
| 10 mechanism categories | Unified from 3 raw data sources | [KNOWN] |
| 470 projects at L0-L5 | Full directory grading | [KNOWN] |
| 7 architecture patterns | Survey + papers cross-validation | [KNOWN] |
| 6 high-potential directions | Expert analysis of gap matrix | [INFERRED] |
| 7 missing agents/ skills | Gap analysis | [INFERRED] |
