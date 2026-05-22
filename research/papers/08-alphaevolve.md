# AlphaEvolve: A Gemini-Powered Coding Agent for Algorithm Discovery

> arXiv: 2506.13131 | Google DeepMind | 2025
> Authors: Alexander Novikov, Ngân Vũ, Marvin Eisenberger, Emilien Dupont, Po-Sen Huang, Adam Zsolt Wagner, et al. (Led by Filip Wolski, Balog Marelo)

---

## Summary

An evolutionary coding agent that combines Gemini Flash (breadth) + Gemini Pro (depth) to discover and optimize algorithms. Uses MAP-Elites quality-diversity search. Found first improvement over Strassen's algorithm in 56 years. Applied to Google's data center scheduling, chip design, and LLM training.

---

## Core Method

### Architecture

1. **LLM Ensemble**: Gemini Flash (fast exploration) + Gemini Pro (deep insight)
2. **Evolutionary Database**: Maintains population of candidate programs
3. **Automated Evaluators**: Objective scoring functions for verification
4. **MAP-Elites**: Quality-diversity search balancing performance and behavioral diversity

### Evolution Loop

```
Initialize population P with seed programs
For each evolution step:
  1. Select parents from P (quality + diversity weighted)
  2. LLM proposes mutations/crossovers → child programs
  3. Evaluate children via automated evaluators
  4. Update P using MAP-Elites (keep if improves niche)
  5. Evolution context adapts with successful/failed attempts
Return best programs from P
```

### MAP-Elites Quality Diversity

Unlike standard evolution (find single best), MAP-Elites maintains a map of high-performing solutions across behavioral dimensions:
- **Elites**: Best solution per behavioral niche
- **Archive**: Growing collection of diverse, high-quality solutions
- **Illumination**: Maps the solution landscape

---

## Key Formulas

| Component | Description |
|---|---|
| Population | P = {p_1, ..., p_n} with fitness + behavior descriptors |
| Selection | Parent selection weighted by fitness + novelty |
| Mutation | p_child = LLM(p_parent, evolution_context) |
| MAP-Elites update | Archive[b(p_child)] = p_child if f(p_child) > f(Archive[b(p_child)]) |
| Dual-model | Flash: breadth (many ideas), Pro: depth (key improvements) |

---

## Benchmarks & Results

### Mathematical Discoveries
| Problem | Result |
|---|---|
| 4×4 complex matrix multiplication | **48 multiplications** (first improvement over Strassen in 56 years) |
| 50+ math problems | Re-discovered SOTA for 75%, found better for 20% |

### Google Infrastructure Improvements
| Application | Result |
|---|---|
| Data center scheduling (Borg) | Recovered **0.7%** of worldwide compute |
| Hardware accelerator design | Functionally equivalent simplification |
| LLM training (FlashAttention) | **23% speedup** in kernel tiling |
| LLM training (other) | **32% speedup** in attention |

### Open-Source Implementation
- **OpenEvolve**: Community implementation of AlphaEvolve concepts
- URL: https://github.com/codelion/openevolve (community fork)

---

## Authors & Affiliations

| Author | Affiliation | Notable |
|---|---|---|
| **Alexander Novikov** | Google DeepMind | Evolutionary computation |
| **Ngân Vũ** | Google DeepMind | |
| **Marvin Eisenberger** | Google DeepMind | |
| **Emilien Dupont** | Google DeepMind | |
| **Po-Sen Huang** | Google DeepMind | |
| **Adam Zsolt Wagner** | Google DeepMind | |
| **Abigail See** | Google DeepMind | Controllable text generation |
| **Swarat Chaudhuri** | Google DeepMind | Program synthesis |
| **Pushmeet Kohli** | Google DeepMind | AI for science lead |
| + others | Google DeepMind | |

### Lab Context
- **Google DeepMind**: Major investment in AI-for-science and evolutionary methods
- Builds on FunSearch (Romera-Paredes et al., Nature 2023) — single-function discovery
- AlphaEvolve extends to entire codebase evolution

---

## Limitations

1. Not publicly available (academic early access only)
2. Requires well-defined evaluation functions
3. Computational cost of large-scale evolution
4. Limited to domains with automated verifiers
5. Dual-model approach requires access to multiple LLM tiers

---

## Citation Context

- Builds on FunSearch (Nature 2023) — extends single function to full codebases
- Uses MAP-Elites (Mouret & Clune, 2015) for quality-diversity search
- Related to ADAS/DGM (academic counterparts) but at Google scale
- Contemporary with OpenEvolve (open-source community replication)
- Influences ShinkaEvolve, EvoControl, and other evolutionary coding frameworks
