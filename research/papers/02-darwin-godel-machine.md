# Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents

> arXiv: 2505.22954 | 2025 | University of British Columbia + Vector Institute
> Authors: Jie (Jenny) Zhang, Shengran Hu, Cong Lu, Jeff Clune, Cong Tian, Yuqi Xie, et al.

---

## Summary

Combines Darwinian evolution with Gödel machine self-reference. Maintains an open-ended archive of agent implementations, iteratively samples and modifies agent code using foundation models, and validates improvements via benchmarks. SWE-bench 20.0% → 50.0%.

---

## Core Method

### Architecture

1. **Archive**: Stores a growing collection of agent implementations (code + performance metrics)
2. **Sampling**: Selects parent agents from archive (with diversity bias)
3. **Self-Modification**: Foundation model (Claude/GPT) proposes code changes to the agent
4. **Evaluation**: Validates modified agents on coding benchmarks
5. **Selection**: Keeps improved versions in the archive

### Key Algorithm Flow

```
Initialize archive A with seed agent a_0
For each iteration t:
  1. Sample parent agent a_parent from A (diversity-weighted)
  2. LLM proposes modification m to a_parent → a_child
  3. Evaluate a_child on benchmark B
  4. If a_child improves over a_parent:
     Add a_child to A
  Else:
     Optionally keep for diversity
  5. Archive grows → open-ended exploration
```

### Open-Endedness

Unlike standard evolutionary algorithms that converge to a single optimum, DGM maintains a diverse archive, enabling:
- Exploration of qualitatively different agent architectures
- Discovery of unexpected strategies
- Cumulative improvement without local optima traps

---

## Key Formulas

| Component | Description |
|---|---|
| Archive | A = {a_1, a_2, ..., a_n} with fitness scores |
| Sampling | P(a_i) ∝ f(a_i) × diversity_bonus(a_i, A) |
| Modification | a_child = LLM(a_parent.code, edit_instruction) |
| Selection | Keep if fitness(a_child) > fitness(a_parent) |

---

## Benchmarks & Results

### SWE-bench (software engineering)
| Metric | Before | After DGM |
|---|---|---|
| Verified (%) | 20.0% | **50.0%** |

### Polyglot (multi-language coding)
| Metric | Before | After DGM |
|---|---|---|
| Score (%) | 14.2% | **30.7%** |

### Key Comparisons
- Outperforms hand-designed agent architectures
- Discovered novel agent structures not imagined by human designers
- Agents transfer across domains (train on one benchmark, test on others)

---

## Authors & Affiliations

| Author | Affiliation | Notable |
|---|---|---|
| **Jie (Jenny) Zhang** | UBC | Primary author |
| **Shengran Hu** | UBC / Vector Institute | Also leads ADAS |
| **Cong Lu** | UBC / Vector Institute | Evolutionary AI |
| **Jeff Clune** | UBC / Vector Institute | Pioneer in open-ended evolution, POET, Quality Diversity |
| Cong Tian | UBC | |
| Yuqi Xie | UBC | |

### Lab Context
- **UBC Evolutionary AI Lab** (Jeff Clune): Leading group in open-ended evolution, quality diversity
- Related projects: POET, QD-NG, OMNI-EPIC
- Jeff Clune previously at Uber AI Labs

---

## Limitations

1. Computationally expensive: each iteration requires benchmark evaluation
2. Code modifications are not guaranteed to be syntactically correct
3. Depends on foundation model quality for proposing meaningful changes
4. Archive management (when to prune, how to balance diversity) is non-trivial
5. Safety: self-modifying code can introduce unexpected behaviors

---

## Citation Context

- Builds on ADAS (same authors) but adds open-ended archive mechanism
- Inspired by Schmidhuber's Gödel Machine (self-rewriting provably optimal code)
- Combines ideas from POET (open-ended learning) and Quality Diversity algorithms
- Contemporary with Gödel Agent (different approach to self-reference)
