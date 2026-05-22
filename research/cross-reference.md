# Self Evolve: Cross-Domain Reference Analysis

> Generated: 2026-05-22 | Coverage: AutoML/NAS, LLM Self-Improvement, Agent Frameworks, Evolutionary Computation, Program Synthesis
> Sources: arXiv, Google Scholar, Semantic Scholar

---

## 1. AutoML / Neural Architecture Search (NAS) Connections

### 1.1 Evolutionary NAS → Agent Architecture Search

| NAS Method | Self Evolve Analog | Connection |
|---|---|---|
| **NEAT** (Stanley & Miikkulainen, 2002) | DGM | Both evolve network topology + weights |
| **AmoebaNet** (Real et al., 2019) | ADAS | Tournament selection in architecture space |
| **DARTS** (Liu et al., 2019) | Agent Symbolic Learning | Gradient-based search in differentiable space |
| **ENAS** (Pham et al., 2018) | Meta Agent Search | Shared weights across searched architectures |
| **NASNet** (Zoph et al., 2018) | ADAS | RL-based controller designs architectures |

### 1.2 Key Insight
ADAS and DGM are essentially **NAS for agent architectures**: instead of searching neural network topologies, they search agent code/prompt/pipeline structures. The search space shift (from continuous weights to discrete code) is the key difference.

### 1.3 Cross-Pollination Opportunities
- **Efficient search**: NAS learned weight-sharing tricks (ENAS) → apply to agent search
- **Benchmarks**: NAS has NAS-Bench-101/201/301 → Self Evolve needs analogous benchmarks
- **Theory**: NAS has convergence proofs → Self Evolve lacks formal guarantees

---

## 2. LLM Self-Improvement Techniques

### 2.1 Taxonomy of Self-Improvement

```
LLM Self-Improvement
├── Prompting-based (no weight updates)
│   ├── Self-Refine (iterative critique + refine)
│   ├── Reflexion (verbal RL with memory)
│   ├── Tree of Thoughts (search over reasoning paths)
│   └── RCI (Recursive Criticizes and Improves)
│
├── Fine-tuning-based (weight updates)
│   ├── RISE (RL fine-tuning for introspection)
│   ├── RAGEN (trajectory-level agent RL)
│   ├── Absolute Zero (self-play RL with zero data)
│   └── ReVeal (multi-turn code RL)
│
├── Code-level self-modification
│   ├── DGM (evolutionary code modification)
│   ├── Gödel Agent (monkey patching)
│   ├── ADAS (meta agent writes agent code)
│   └── AlphaEvolve (evolutionary coding agent)
│
└── Symbolic optimization
    ├── Agent Symbolic Learning (textual backprop)
    ├── DSPy (prompt optimization)
    └── EvoMAC (textual backprop for multi-agent)
```

### 2.2 Key Connections

| Method | Input | Self-Improvement Mechanism | Output |
|---|---|---|---|
| Self-Refine | Prompt | Critique + refine (same model) | Better text |
| Reflexion | Prompt + memory | Verbal feedback storage | Better text |
| DSPy | Prompt template | Compiled demonstrations | Optimized prompt |
| Symbolic Learning | Agent architecture | Textual backprop | Better agent |
| ADAS | Search space | Meta agent writes code | New agent code |
| DGM | Archive | Evolution + code modification | New agent variant |

---

## 3. Agent Frameworks with Self-Evolution Mechanisms

### 3.1 Major Frameworks

| Framework | Self-Evolution? | Mechanism | Stars |
|---|---|---|---|
| **AutoGen** (Microsoft) | Partial | Multi-agent conversation, human-in-loop | 44k+ |
| **CrewAI** | No | Fixed role-based agents | 51.8k |
| **MetaGPT** | No | Fixed software engineering pipeline | 51.5k |
| **LangGraph** | Partial | State graph can be modified at runtime | 32.5k |
| **Letta (MemGPT)** | Yes | Memory evolution across sessions | 22.8k |
| **smolagents** (HF) | No | Lightweight agent framework | 27.4k |

### 3.2 Frameworks With Genuine Self-Evolution

1. **Letta/MemGPT**: Memory system evolves across sessions — closest to "self-evolving" in production
2. **LangGraph**: State graph modification allows dynamic workflow changes
3. **AutoGen**: Conversational evolution — agents adapt through dialogue
4. **EvoMAC**: Specifically designed for self-evolving multi-agent collaboration

### 3.3 Gap Analysis
Most popular frameworks (CrewAI, MetaGPT) are **static** — they define agents at design time and don't evolve. Self-evolution is still primarily a research topic, not a production feature.

---

## 4. Evolutionary Computation in Modern AI

### 4.1 Neuroevolution Renaissance

| Method | Year | Contribution | Connection |
|---|---|---|---|
| **NEAT** | 2002 | Evolve neural network topology | DGM (topology evolution) |
| **HyperNEAT** | 2009 | Indirect encoding for large networks | ADAS (code as indirect encoding) |
| **POET** | 2019 | Open-ended co-evolution of agents + environments | DGM (open-ended archive) |
| **Quality Diversity** | 2015 | MAP-Elites algorithm | AlphaEvolve (MAP-Elites for code) |
| **FunSearch** | 2023 | LLM + evolutionary search for math | AlphaEvolve (extends to full codebases) |
| **OMNI-EPIC** | 2023 | Open-ended evolution for RL | DGM (same group: Clune) |

### 4.2 Evolutionary Computation → Self Evolve Pipeline

```
Traditional EC                    Self Evolve
─────────────                    ────────────
Population of solutions    →     Archive of agent implementations
Fitness function           →     Benchmark evaluation (SWE-bench, etc.)
Mutation operator          →     LLM proposes code changes
Crossover operator         →     LLM combines ideas from multiple agents
Selection                  →     Keep improved agents
Elitism                    →     Maintain best-in-class per niche (MAP-Elites)
```

### 4.3 Key Difference
In traditional EC, mutation/crossover are **random** or **rule-based**. In Self Evolve, they are **LLM-guided** — the foundation model provides intelligent variation that understands code semantics, not just syntax.

---

## 5. Program Synthesis & Self-Repairing Code

### 5.1 Program Synthesis Heritage

| Work | Year | Contribution | Self Evolve Connection |
|---|---|---|---|
| **Codex** (OpenAI) | 2021 | LLM generates code from natural language | Foundation for code-based agents |
| **AlphaCode** (DeepMind) | 2022 | Competition-level programming | Precursor to AlphaEvolve |
| **CodeT** | 2023 | Test-based code generation + verification | ReVeal (verification loop) |
| **Self-Debugging** | 2023 | Code explains its own execution to fix bugs | Reflexion (verbal self-reflection) |
| **SWE-bench** | 2023 | Benchmark for real-world bug fixing | Primary benchmark for DGM |
| **HumanEval** | 2021 | Function-level code generation benchmark | Primary benchmark for Reflexion |

### 5.2 Self-Repairing Code Pipeline

```
Traditional:  Write code → Run → Bug → Human fixes → Repeat
Self-Refine:  Write code → Critique → Refine → Repeat
Reflexion:    Write code → Evaluate → Verbal reflection → Rewrite with memory
ReVeal:       Write code → Self-verify with tests → Fix based on tool feedback → RL train
DGM:          Write agent → Evaluate → LLM modifies code → Keep if improved
```

### 5.3 Verification and Safety

| Approach | Verification Method | Safety Level |
|---|---|---|
| Self-Refine | Self-critique (unreliable) | Low |
| Reflexion | External evaluator | Medium |
| AlphaEvolve | Automated code executor | High (mechanical verification) |
| DGM | Benchmark evaluation | Medium (task-specific) |
| Absolute Zero | Code executor | High (executable verification) |

---

## 6. Temporal Evolution of the Field

```
2022: Code generation (Codex, AlphaCode) → LLMs can write code
      │
2023: Self-reflection (Self-Refine, Reflexion, RCI) → LLMs can critique + improve
      │   Agent reasoning (ReAct, ToT) → LLMs can reason step-by-step
      │   Program search (FunSearch) → LLMs can discover algorithms
      │
2024: Agent design (ADAS) → LLMs can design agent architectures
      │   Symbolic learning → Agents as optimizable networks
      │   Multi-agent (EvoMAC) → Multi-agent self-evolution
      │
2025: Code-level evolution (DGM, Gödel Agent) → Agents modify own code
      │   Large-scale (AlphaEvolve) → Google-scale evolutionary coding
      │   RL integration (RISE, RAGEN, Absolute Zero) → RL-trained self-improvement
      │   Self-play (Absolute Zero, Agent0) → Zero-data bootstrapping
      │
2026: Production deployment (Letta/MemGPT) → Self-evolving agents in production
      │   Safety & governance → Growing concern
      │   Benchmark standardization → Need for unified evaluation
```

---

## 7. Cross-Domain Synthesis

### 7.1 Unifying Framework

All Self Evolve methods can be mapped to a common abstraction:

```
Agent(state) → action → reward → update(agent)

Where "update" can be:
- Prompt-level: Self-Refine, Reflexion (no code changes)
- Architecture-level: ADAS, Symbolic Learning (prompt/pipeline changes)
- Code-level: DGM, Gödel Agent (source code changes)
- Weight-level: RISE, RAGEN (neural weight updates)
- Population-level: AlphaEvolve, DGM (archive-based evolution)
```

### 7.2 Key Dimensions for Comparison

| Dimension | Range | Example |
|---|---|---|
| Granularity | Prompt → Pipeline → Code → Weights | Self-Refine (prompt) vs DGM (code) |
| Training required | None → Fine-tuning → Full training | Reflexion (none) vs RISE (fine-tune) |
| Evaluation | Human → Automated → Code executor | Self-Refine (self) vs AlphaEvolve (executor) |
| Open-endedness | Single task → Multi-task → Unlimited | Self-Refine (single) vs DGM (unlimited) |
| Safety | None → Rollback → Sandbox → Formal | Gödel Agent (rollback) vs AlphaEvolve (sandbox) |

### 7.3 Open Research Questions

1. **Convergence**: Does self-evolution converge, or is it inherently open-ended?
2. **Safety**: How to guarantee self-modifying agents remain safe?
3. **Evaluation**: How to benchmark self-evolution? (No standard exists)
4. **Efficiency**: LLM-guided evolution is expensive; how to reduce cost?
5. **Generalization**: Do evolved agents generalize across domains?
6. **Theoretical foundations**: What can we prove about self-evolving systems?

---

## 8. Key Conferences & Venues

| Venue | Relevance | Key Papers |
|---|---|---|
| **NeurIPS** | Primary venue for self-evolution | Reflexion, Self-Refine, Symbolic Learning, Absolute Zero |
| **ICLR** | Agent architecture design | ADAS, Gödel Agent |
| **ACL** | NLP-focused self-improvement | Gödel Agent |
| **ICML** | RL-based self-improvement | RISE, RAGEN |
| **Nature** | Breakthrough discoveries | FunSearch |
| **GECCO** | Evolutionary computation | Traditional EC methods |
| **ASE/ICSE** | Software engineering | SWE-bench evaluations |
| **AAAI** | General AI | Various agent papers |

---

## 9. Companies Investing in Self Evolve

| Company | Investment | Evidence |
|---|---|---|
| **Google DeepMind** | Heavy | AlphaEvolve, FunSearch, AlphaCode |
| **Microsoft** | Moderate | AutoGen, ReVeal (Microsoft Research) |
| **Anthropic** | Emerging | Claude used in DGM; Constitutional AI self-critique |
| **OpenAI** | Moderate | Codex, GPT-4 as backbone for many methods |
| **Meta** | Light | ToolFormer, some agent research |
| **AI2 (Allen Institute)** | Moderate | Self-Refine (Peter Clark), reasoning research |
| **AIWaves** | Specialized | Agent Symbolic Learning, agent frameworks |

---

## 10. Summary

The Self Evolve field sits at the intersection of **four mature research traditions**:
1. **Evolutionary Computation** (population-based optimization)
2. **AutoML/NAS** (automated architecture design)
3. **LLM Self-Improvement** (iterative refinement and reflection)
4. **Program Synthesis** (automated code generation and repair)

The key innovation of 2024-2025 is the convergence of these traditions: using LLMs as intelligent variation operators within evolutionary frameworks, applied to agent architectures expressed as code. This creates a new paradigm where agents can genuinely improve themselves without human intervention.
