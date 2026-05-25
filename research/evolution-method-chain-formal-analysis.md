---
title: "Evolution Method Chain: Formal Analysis of Self-Evolving AI Agents"
content_timestamp: 2026-05-25
time_slice: 2026-05
language: en
output_type: deep_analysis
source_corpus:
  survey: survey/ch2-theory-cn.md, survey/ch3-methods-cn.md, survey/ch4-systems-cn.md, survey/ch5-evaluation-cn.md, survey/ch8-future-cn.md
  paper_reviews: paper-reviews/ (18 reviews analyzed)
  classification: research/repo-classification.json, survey/figures/method-taxonomy-mermaid.md
coverage:
  papers_analyzed: 18
  levels_defined: 5
  benchmarks_covered: 25+
---

# Evolution Method Chain: Formal Analysis of Self-Evolving AI Agents

> Generated: 2026-05-25 | Source: 18 paper reviews + survey ch2-ch8 + repo classification data
> Status: This is a formal research analysis. Claims backed by paper reviews are marked [VERIFIED]. Claims from survey narrative are marked [SURVEY]. Speculative claims are marked [INFERRED].

## 0. Executive Summary

**One sentence.** AI agent self-evolution follows a five-level progression chain — from in-context self-refinement (L1) through memory/skill accumulation (L2), reward-driven policy optimization (L3), architecture/program search (L4), to self-referential code modification (L5) — where each level increases expressive power, autonomy, and risk, and where the quantitative evidence shows a clear trade-off: higher levels achieve larger absolute gains (DGM: +30% on SWE-bench) but require stronger safety guarantees and more expensive evaluation.

**Three sentences.** This document formalizes the evolution chain as a nested set of update operators on agent state, provides a comparative paradigm framework mapping four optimization families (RL, search, gradient, evolutionary) to specific methods, and compiles quantitative benchmark data from 18 representative papers. The key empirical finding is that objective, environment-grounded evaluation (compilers, unit tests, programmatic evaluators) consistently outperforms self-critique across all levels, and that iterative self-improvement exhibits diminishing returns or bias degeneration within 2-4 iterations without external calibration. The key theoretical finding is that the five levels correspond to increasingly complex mutation operators in an evolutionary framework, where the highest level (self-modification) creates a recursive fitness landscape that requires immutable evaluation infrastructure to prevent Goodhart collapse.

**Five sentences.**
1. The formal agent state is z = (θ, c, g, m, A) — parameters, context, graph, memory, archive — and evolution methods differ primarily in which components they mutate and what selection pressure they apply.
2. The quantitative evidence (18 papers, 25+ benchmarks) shows that L3-L5 methods achieve the largest gains on code/engineering benchmarks but have the weakest evidence on open-ended, cross-domain, and long-horizon tasks.
3. The paradigm comparison reveals that evolutionary/search methods dominate at L4-L5, RL methods dominate at L3, and gradient-based methods are currently limited to L1-L2 in the agent evolution context.
4. The critical open problem is not "can agents self-improve" but "can we build evaluation infrastructure that remains trustworthy when the agent can modify its own code, evaluator, or training signal."
5. The practical recommendation is layered evolution: start with L1-L2 (safe, cheap, interpretable), escalate to L3-L4 only with independent evaluation, and reserve L5 for sandboxed research with immutable safety constraints.

---

## 1. The Five-Level Evolution Chain

### 1.1 Formal Definition

Let an agent system be characterized by a state tuple:

```
z = (θ, c, g, m, A)
```

Where:
- **θ** = base model parameters (weights, typically frozen)
- **c** = context/prompt configuration (system prompts, few-shot examples, tool descriptions)
- **g** = graph/code structure (tool pipelines, control flow, agent architecture, code modules)
- **m** = memory/skill state (episodic memory, semantic knowledge, skill library, world model)
- **A** = archive (historical candidate variants with fitness records)

Given task distribution P(τ), environment E, evaluator V, and safety constraints C, the evolution cycle is:

```
z_{t+1}, A_{t+1} = S(A_t ∪ {U_k(z_t, x_t, y_t)}_{k=1}^K; V, C, D)
```

Where U_k is a mutation operator, S is a selection operator, V is fitness evaluation, C is constraint checking, and D is diversity preservation.

The five levels differ in what U_k can modify and how V is defined:

| Level | Name | Mutable State | Mutation Operator U | Fitness V | Representative Methods |
|-------|------|--------------|---------------------|-----------|------------------------|
| **L1** | Self-Refine | c (in-context) | LLM self-feedback rewrite | Task completion / LLM judge | Self-Refine, Reflexion, STaR |
| **L2** | Self-Improve | m (memory/skills) | Experience extraction → memory write | Task transfer / efficiency gain | Voyager, ExpeL, ICE, ACE, ReasoningBank |
| **L3** | Self-Evolve (policy) | θ or π (policy) | RL update / DPO / self-play | Reward / preference / environment | Self-Rewarding, Meta-Rewarding, RISE, SCoRe, RAGEN, SPIRAL |
| **L4** | Self-Evolve (architecture) | g (code/graph) | LLM proposes code diffs | Programmatic tests / benchmarks | ADAS, AlphaEvolve, EvoMAC, FunSearch |
| **L5** | Self-Modify | g + meta-g (self-modification code) | Agent edits own codebase | Sandbox evaluation / archive | DGM, Gödel Agent, SICA |

### 1.2 Evolution Chain Diagram

```mermaid
flowchart TD
    subgraph L1["L1: Self-Refine"]
        direction TB
        L1_in["Input x"] --> L1_gen["Generate → Self-Critique → Revise"]
        L1_gen --> L1_out["Refined output"]
        L1_note["Mutable: c (context)<br/>U: textual feedback<br/>V: task completion"]
    end

    subgraph L2["L2: Self-Improve"]
        direction TB
        L2_exp["Execute task"] --> L2_reflect["Reflect on failure/success"]
        L2_reflect --> L2_store["Store insights/skills in m"]
        L2_store --> L2_retrieve["Retrieve for next task"]
        L2_retrieve --> L2_exp
        L2_note["Mutable: m (memory)<br/>U: experience extraction<br/>V: cross-task transfer"]
    end

    subgraph L3["L3: Self-Evolve (Policy)"]
        direction TB
        L3_act["Agent acts in environment"] --> L3_reward["Get reward r"]
        L3_reward --> L3_update["Update policy π via RL/DPO"]
        L3_update --> L3_act
        L3_note["Mutable: θ or π<br/>U: gradient/RL update<br/>V: reward function"]
    end

    subgraph L4["L4: Self-Evolve (Architecture)"]
        direction TB
        L4_propose["LLM proposes code variant"] --> L4_eval["Run in sandbox"]
        L4_eval --> L4_select["Select best → archive"]
        L4_select --> L4_propose
        L4_note["Mutable: g (code/graph)<br/>U: LLM code mutation<br/>V: programmatic evaluator"]
    end

    subgraph L5["L5: Self-Modify"]
        direction TB
        L5_self["Agent reads own code"] --> L5_edit["Agent edits own code"]
        L5_edit --> L5_sandbox["Sandbox execution"]
        L5_sandbox --> L5_archive["Archive maintains lineage"]
        L5_archive --> L5_self
        L5_note["Mutable: g + meta-g<br/>U: self-referential edit<br/>V: immutable external evaluator"]
    end

    L1 -->|"persist experience"| L2
    L2 -->|"train on trajectories"| L3
    L3 -->|"search over structures"| L4
    L4 -->|"modify self-modification"| L5

    style L1 fill:#e8f5e9
    style L2 fill:#e3f2fd
    style L3 fill:#fff3e0
    style L4 fill:#fce4ec
    style L5 fill:#f3e5f5
```

### 1.3 Key Properties by Level

| Property | L1 | L2 | L3 | L4 | L5 |
|----------|-----|-----|-----|-----|-----|
| **Expressive power** | Low (text edits) | Medium (skills/rules) | High (policy params) | Very high (Turing-complete code) | Maximum (self-referential) |
| **Cost per iteration** | ~$0.01-1 | ~$0.1-10 | ~$1-100 | ~$10-1000 | ~$100-10000+ |
| **Risk level** | Minimal | Low | Medium | High | Critical |
| **Interpretability** | High (readable text) | High (readable skills) | Medium (learned policy) | Medium (code diffs) | Low (recursive edits) |
| **Convergence guarantee** | None | None | Weak (RL theory) | None | None |
| **External evaluation needed** | Optional | Recommended | Required | Required | Mandatory |
| **Typical iterations to plateau** | 1-3 | 10-50 | 3-5 | 10-100 | Open-ended |

---

## 2. Comparative Paradigm Framework

### 2.1 Four Optimization Families

Self-evolution methods can be classified by their underlying optimization paradigm:

```mermaid
flowchart LR
    subgraph Paradigms["Optimization Paradigms"]
        RL["RL-Based<br/>Policy gradient<br/>DPO/PPO<br/>Reward shaping"]
        Search["Search-Based<br/>Beam search<br/>MCTS<br/>Evolutionary"]
        Grad["Gradient-Based<br/>Fine-tuning<br/>LoRA/adapter<br/>Backprop"]
        Evo["Evolutionary<br/>Population archive<br/>Mutation + selection<br/>Quality diversity"]
    end

    RL --> L3a["L3: Self-Rewarding<br/>Meta-Rewarding<br/>RISE, SCoRe<br/>RAGEN, StarPO"]
    Search --> L1a["L1: Self-Refine<br/>Reflexion<br/>OPRO"]
    Search --> L4a["L4: ADAS<br/>AlphaEvolve<br/>FunSearch"]
    Grad --> L1b["L1: STaR<br/>(filtered fine-tuning)"]
    Grad --> L3b["L3: RISE<br/>(reward-weighted regression)"]
    Evo --> L4b["L4: EvoMAC<br/>(textual backprop)"]
    Evo --> L5a["L5: DGM<br/>(open-ended archive)"]
    Evo --> L2a["L2: Voyager<br/>(skill library evolution)"]

    style RL fill:#fff3e0
    style Search fill:#e8f5e9
    style Grad fill:#e3f2fd
    style Evo fill:#fce4ec
```

### 2.2 Paradigm Comparison Matrix

| Dimension | RL-Based | Search-Based | Gradient-Based | Evolutionary |
|-----------|----------|--------------|----------------|--------------|
| **Optimization target** | Policy π(a\|s) | Discrete candidate space | Parameters θ | Population/archive |
| **Differentiable** | Yes (policy gradient) | No | Yes | No |
| **Exploration mechanism** | Policy stochasticity | Branching + pruning | Noise injection | Mutation + crossover |
| **Selection pressure** | Reward signal | Score ranking | Loss gradient | Fitness + diversity |
| **Scalability** | High (GPU parallel) | Medium (evaluation bottleneck) | High (GPU parallel) | Medium (archive growth) |
| **Safety controllability** | Medium (reward shaping) | High (candidate filtering) | Low (hard to constrain) | High (sandbox + gate) |
| **Key risk** | Reward hacking | Search space explosion | Overfitting | Archive bloat |
| **Representative methods** | Self-Rewarding, RISE, RAGEN, SCoRe | OPRO, Reflexion, ADAS | STaR | DGM, AlphaEvolve, EvoMAC, Voyager |

### 2.3 Formal Operator Definitions

**RL-Based Update (L3):**
```
θ_{t+1} = θ_t + α ∇_θ E[r(π_θ(τ))]
```
With variants: DPO (preference pairs), PPO (clipped surrogate), StarPO (trajectory-level), reward-weighted regression.

**Search-Based Update (L1, L4):**
```
c_{t+1} = argmax_{c' ∈ N(c_t)} V(π(c'), τ)
```
Where N(c_t) is the neighborhood generated by LLM rewrite or beam search.

**Evolutionary Update (L4, L5):**
```
A_{t+1} = Select(A_t ∪ Mutate(z_parent), V, D)
```
Where Mutate is LLM-generated code diff, Select combines fitness ranking with diversity preservation, and A is the growing archive.

**Memory Update (L2):**
```
m_{t+1} = Compress(m_t, Extract(τ_t, f_t))
```
Where Extract converts trajectory-level feedback into reusable insights/skills, and Compress manages memory lifecycle (merge, delete, version).

---

## 3. Quantitative Evidence Compilation

### 3.1 Cross-Method Benchmark Performance

| Method | Level | Paradigm | Benchmark(s) | Baseline | Best | Delta | Iters | Source |
|--------|-------|----------|-------------|----------|------|-------|-------|--------|
| **DGM** | L5 | Evolutionary | SWE-bench | 20.0% | 50.0% | **+30.0** | Open-ended | [VERIFIED] review-2505.22954 |
| **DGM** | L5 | Evolutionary | Polyglot | 14.2% | 30.7% | **+16.5** | Open-ended | [VERIFIED] review-2505.22954 |
| **EvoMAC** | L4 | Evolutionary | rSDE-Bench Website | Prior SOTA | — | **+26.5%** | 3-5 | [VERIFIED] review-2410.16946 |
| **EvoMAC** | L4 | Evolutionary | rSDE-Bench Game | Prior SOTA | — | **+34.8%** | 3-5 | [VERIFIED] review-2410.16946 |
| **AlphaEvolve** | L4 | Evolutionary | 4×4 complex matmul | Strassen (49 mults) | 48 mults | **-1 mult** | Many gen | [VERIFIED] review-2506.13131 |
| **SCoRe** | L3 | RL | MATH (Gemini 1.0) | Base | — | **+15.6%** | 2-phase RL | [VERIFIED] review-2409.12917 |
| **SCoRe** | L3 | RL | HumanEval (Gemini 1.5) | Base | — | **+9.1%** | 2-phase RL | [VERIFIED] review-2409.12917 |
| **Meta-Rewarding** | L3 | RL | AlpacaEval 2 LC | 22.9% | 39.4% | **+16.5** | 4 | [VERIFIED] review-2407.19594 |
| **Meta-Rewarding** | L3 | RL | Arena-Hard | 20.6% | 29.1% | **+8.5** | 4 | [VERIFIED] review-2407.19594 |
| **Self-Rewarding** | L3 | RL | AlpacaEval 2 | Llama2 70B SFT | >GPT-4 0613 | — | 3 | [VERIFIED] review-2401.10020 |
| **Voyager** | L2 | Evolutionary | Minecraft items | Prior methods | — | **3.3x** | 160 prompts | [VERIFIED] review-2305.16291 |
| **Voyager** | L2 | Evolutionary | Minecraft milestones | Prior methods | — | **15.3x** | 160 prompts | [VERIFIED] review-2305.16291 |
| **Reflexion** | L1 | Search | HumanEval | 80% | 91% | **+11** | 1-3 | [VERIFIED] review-2303.11366 |
| **Reflexion** | L1 | Search | AlfWorld | Base | — | **+22** | 1-3 | [VERIFIED] review-2303.11366 |
| **Reflexion** | L1 | Search | HotPotQA | Base | — | **+20** | 1-3 | [VERIFIED] review-2303.11366 |
| **Self-Developing** | L4 | Evolutionary+DPO | GSM8k | Seed | — | **+6%** | Iterative | [VERIFIED] review-2410.15639 |
| **ICE** | L2 | Search | XAgent tasks | GPT-4 raw | GPT-3.5+ICE = GPT-4 | **80% fewer API calls** | 3-phase | [VERIFIED] review-2401.13996 |
| **STaR** | L1 | Gradient | CommonsenseQA | ~6B model | Matches 30x model | **~30x efficiency** | Iterative | [VERIFIED] review-2203.14465 |
| **ADAS** | L4 | Search | ARC, DROP, MGSM, MMLU, GPQA | Hand-designed | Outperforms all baselines | — | ~$300-500/run | [VERIFIED] review-2408.08435 |

### 3.2 Delta vs. Level Analysis

```mermaid
quadrantChart
    title Evolution Level vs. Maximum Reported Improvement
    x-axis Low Autonomy --> High Autonomy
    y-axis Small Delta --> Large Delta
    quadrant-1 High autonomy, Large delta
    quadrant-2 Low autonomy, Large delta
    quadrant-3 Low autonomy, Small delta
    quadrant-4 High autonomy, Small delta
    DGM: [0.95, 0.95]
    EvoMAC: [0.8, 0.85]
    SCoRe: [0.6, 0.5]
    Meta-Rewarding: [0.6, 0.55]
    AlphaEvolve: [0.8, 0.7]
    Voyager: [0.4, 0.75]
    Reflexion: [0.2, 0.4]
    STaR: [0.15, 0.6]
    ICE: [0.4, 0.55]
    ADAS: [0.8, 0.5]
    Self-Rewarding: [0.6, 0.45]
```

### 3.3 Key Empirical Patterns

**Pattern 1: Environment-grounded evaluation outperforms self-critique.**
Across all levels, methods using programmatic evaluators (DGM, AlphaEvolve, EvoMAC) achieve larger and more reproducible gains than methods using LLM-as-judge (Self-Rewarding, Meta-Rewarding). [INFERRED from cross-method comparison]

**Pattern 2: Diminishing returns within 2-4 iterations.**
Meta-Rewarding shows most gains in iterations 1-2, with bias escalation after iteration 2. Self-Rewarding plateaus after M2. SCoRe uses a 2-phase approach to prevent collapse. Reflexion gains saturate by iteration 3. [VERIFIED from individual reviews]

**Pattern 3: Transfer evidence is sparse.**
ADAS shows cross-model transfer (discovered architectures work on different LLMs). Voyager shows cross-world skill transfer. Most other methods only report within-distribution improvement. Cross-domain transfer (e.g., from code to web to scientific discovery) remains largely unproven. [INFERRED from review coverage]

**Pattern 4: Cost scales super-linearly with level.**
L1 methods cost ~$0.01-1 per improvement cycle. L3 methods cost ~$1-100. L4 methods cost ~$10-1000. L5 methods cost ~$100-10000+. The cost-per-delta-point is not always favorable at higher levels. [INFERRED from review reports]

**Pattern 5: Archive-based methods show the strongest open-ended improvement.**
DGM's open-ended archive and AlphaEvolve's evolutionary loop both demonstrate that maintaining diverse candidates (not just the current best) produces stepping stones that enable breakthroughs. This aligns with quality-diversity theory in evolutionary computation. [SURVEY ch2-ch3, VERIFIED from DGM/AlphaEvolve reviews]

---

## 4. Formal Framework: Unified Evolution Operator

### 4.1 General Evolution Cycle

```mermaid
flowchart TD
    subgraph Cycle["Evolution Cycle"]
        POP["Population/Archive A_t"]
        POP -->|"sample parent z_parent"| MUT["Mutation U(z_parent, feedback)"]
        ENV["Environment E"] -->|"task τ, context"| AGENT["Agent π_z"]
        AGENT -->|"trajectory x_t"| EVAL["Evaluator V(x_t, τ)"]
        EVAL -->|"fitness f_t, constraints c_t"| SEL["Selection S(candidates, f, d)"]
        MUT -->|"candidate z'"| SANDBOX["Sandbox Execution"]
        SANDBOX -->|"verified z'"| SEL
        SEL -->|"A_{t+1}"| POP
    end

    subgraph Safety["Safety Infrastructure"]
        IMMU["Immutable Evaluator<br/>(hidden tests, frozen judge)"]
        AUDIT["Audit Log<br/>(lineage, diffs, scores)"]
        ROLLBACK["Rollback Gate<br/>(regression check)"]
        COST["Cost Budget<br/>(token/API/compute limits)"]
    end

    SEL -.->|"must pass"| IMMU
    SEL -.->|"must log"| AUDIT
    SEL -.->|"must check"| ROLLBACK
    SEL -.->|"must respect"| COST

    style Safety fill:#fff8e1
    style Cycle fill:#e8f5e9
```

### 4.2 Operator Specification

Each method instantiates the general cycle with specific operators:

**Mutation Operator U:**

| Level | U definition | Search space | Example |
|-------|-------------|--------------|---------|
| L1 | U(c, f) = LLM_rewrite(c, self_feedback(c)) | Text space (prompts) | Reflexion: "Given failure X, revise strategy" |
| L2 | U(m, τ, f) = store(compress(extract(τ, f)), m) | Memory space (insights, skills) | Voyager: "Save successful JS skill with embedding" |
| L3 | U(θ, trajectories, r) = θ + α∇E[r] | Parameter space | Self-Rewarding: DPO on self-generated pairs |
| L4 | U(g, V_history) = LLM_propose_code_diff(g, V_history) | Program space | ADAS: "Write new agent architecture in Python" |
| L5 | U(g_self, V_history) = agent_edits_own_code(g_self) | Self-referential program space | DGM: "Agent modifies its own editor/reviewer/context-manager" |

**Selection Operator S:**

| Method type | S definition | Diversity D |
|-------------|-------------|-------------|
| Greedy | S = argmax V(z') | None |
| Top-k | S = top_k(A, V) | None |
| Novelty-based | S = argmax [V(z') + β · novelty(z', A)] | Embedding distance |
| Quality-diversity | S = elites from each behavior cell | Behavioral descriptors |
| Open-ended | S = all z' above threshold | Growing archive |

**Fitness V:**

| Evaluator type | Reliability | Coverage | Example |
|---------------|-------------|----------|---------|
| Programmatic (tests, compiler) | High | Narrow | AlphaEvolve: performance metrics |
| Environment reward | Medium-High | Medium | RAGEN: StarPO trajectory reward |
| LLM-as-Judge | Medium | Broad | Self-Rewarding: self-generated scores |
| Human evaluation | High | Broad | Expensive, non-repeatable |
| Self-reflection text | Low | Broad | Reflexion: natural language critique |

### 4.3 Safety Constraint Specification

For self-evolution to be trustworthy, the following constraints must hold:

```
C₁ (Evaluation Isolation): V ∉ mutable(z)     — evaluator cannot be modified by agent
C₂ (Sandbox Execution): execute(U(z)) ⊂ Sandbox — mutations run in isolation
C₃ (Regression Gate): V(z_{t+1}) ≥ V(z_t) - ε  — no catastrophic regression
C₄ (Audit Trail): lineage(z_{t+1}) ∈ A          — full history preserved
C₅ (Cost Budget): cost(U, V, execute) ≤ Budget   — bounded resource consumption
C₆ (Permission Boundary): tools(z') ⊆ allowed_tools — no privilege escalation
```

**Critical observation:** At L5, C₁ is the hardest to enforce because the agent can theoretically modify the evaluation harness itself. DGM addresses this by keeping the evaluator outside the agent's codebase. Gödel Agent relies on runtime sandbox. Both are engineering approximations, not formal guarantees. [SURVEY ch4, VERIFIED from DGM/Gödel reviews]

---

## 5. Open Problems and Future Directions

### 5.1 Critical Open Problems

```mermaid
flowchart TD
    OP1["OP1: Evaluation Trustworthiness<br/>How to prevent Goodhart collapse<br/>when agent can optimize any visible metric?"]
    OP2["OP2: Transfer Verification<br/>How to prove improvement transfers<br/>beyond training benchmark?"]
    OP3["OP3: Recursive Safety<br/>How to constrain self-modification<br/>without limiting capability?"]
    OP4["OP4: Long-Horizon Memory<br/>How to manage memory lifecycle<br/>across 1000+ task episodes?"]
    OP5["OP5: Attribution in Hybrid Systems<br/>When multiple modules update simultaneously,<br/>which change caused improvement?"]
    OP6["OP6: Cost-Effective Search<br/>How to reduce evaluation cost<br/>from $1000/run to $10/run?"]

    OP1 -->|"requires"| SOL1["Immutable evaluator infrastructure<br/>+ hidden test sets + adversarial calibration"]
    OP2 -->|"requires"| SOL2["Cross-domain benchmark suites<br/>+ meta-learning evaluation protocols"]
    OP3 -->|"requires"| SOL3["Formal permission boundaries<br/>+ verified safety constraints"]
    OP4 -->|"requires"| SOL4["Memory lifecycle management<br/>(compress, merge, delete, version)"]
    OP5 -->|"requires"| SOL5["Single-variable ablation protocols<br/>+ causal attribution methods"]
    OP6 -->|"requires"| SOL6["Surrogate evaluators + transfer learning<br/>+ few-shot fitness estimation"]

    style OP1 fill:#ffcdd2
    style OP2 fill:#ffcdd2
    style OP3 fill:#ffcdd2
    style OP4 fill:#fff9c4
    style OP5 fill:#fff9c4
    style OP6 fill:#c8e6c9
```

### 5.2 Detailed Problem Analysis

**OP1: Evaluation Trustworthiness** [CRITICAL]
- **Evidence:** Meta-Rewarding shows score inflation after iteration 2 [VERIFIED]. Self-Rewarding's judge bias grows with each DPO round [VERIFIED]. DGM could theoretically optimize for benchmark-specific shortcuts [SURVEY ch4].
- **Formal challenge:** The evaluator V is simultaneously the training signal and the validation criterion. When V is visible to the optimization process, Goodhart's law guarantees metric distortion.
- **Current best practice:** Immutable hidden evaluator (DGM), meta-judge calibration (Meta-Rewarding), multi-evaluator consensus (proposed but not implemented).
- **Required research:** Adversarial evaluator design — treat evaluator construction as an adversarial game between the agent and the evaluation architect.

**OP2: Transfer Verification** [CRITICAL]
- **Evidence:** Only ADAS explicitly tests cross-model transfer [VERIFIED]. Voyager tests cross-world transfer [VERIFIED]. Most methods report only within-distribution gains.
- **Formal challenge:** Improvement on P_train(τ) does not imply improvement on P_deploy(τ) when distributions differ.
- **Required research:** Standardized transfer benchmarks — train on one task family, test on a held-out family from a different domain.

**OP3: Recursive Safety** [HIGH]
- **Evidence:** DGM shows 30% improvement on SWE-bench but requires full sandbox isolation [VERIFIED]. Gödel Agent monkey-patches at runtime [VERIFIED].
- **Formal challenge:** At L5, the mutation operator U modifies itself: U_{t+1} = U_t(U_t). This creates a recursive fitness landscape with no known convergence properties.
- **Required research:** Formal verification of safety constraints (C₁-C₆) under recursive self-modification. Even partial verification would be progress.

**OP4: Long-Horizon Memory** [MEDIUM]
- **Evidence:** Memory-R1 learns when to write/read/delete memory [SURVEY ch3]. AriadneMem handles multi-hop evidence [SURVEY ch3]. No system demonstrates stable memory management over 1000+ diverse task episodes.
- **Required research:** Memory lifecycle protocols with automatic staleness detection, conflict resolution, and versioned rollback.

**OP5: Attribution in Hybrid Systems** [MEDIUM]
- **Evidence:** Survey ch3 notes "attribution failure" as a key weakness of hybrid methods [SURVEY].
- **Required research:** Causal attribution methods that can isolate which module update caused which performance change, with confidence intervals.

**OP6: Cost-Effective Search** [PRACTICAL]
- **Evidence:** ADAS costs $300-500/run [VERIFIED]. L5 methods cost $100-10000+ [INFERRED].
- **Required research:** Surrogate evaluators, transfer-based warm-starting, and few-shot fitness estimation to reduce evaluation cost by 10-100x.

### 5.3 Future Direction Map

| Horizon | Direction | Enabling Evidence | Blocking Problem |
|---------|-----------|-------------------|------------------|
| Near (1-2 years) | Standardized evaluator libraries | DGM, AlphaEvolve, SWE-bench success | OP1 (evaluation trust) |
| Near (1-2 years) | Layered evolution deployments | L1-L2 safety record | OP5 (attribution) |
| Mid (2-5 years) | Self-evolution report standards | Archive practices in DGM/ADAS | OP4 (long-horizon memory) |
| Mid (2-5 years) | Cross-domain transfer benchmarks | ADAS transfer evidence | OP2 (transfer verification) |
| Far (5+ years) | Formally verified self-modification | Gödel Machine theory | OP3 (recursive safety) |
| Far (5+ years) | Open-ended multi-agent ecosystems | DGM archive, EvoMAC networks | OP1+OP3+OP6 combined |

---

## 6. Method Selection Decision Tree

```mermaid
flowchart TD
    START["What do you want to improve?"] --> Q1{"Is the answer<br/>automatically verifiable?"}

    Q1 -->|"Yes (code, math, SQL)"| Q2{"Do you need to<br/>modify agent structure?"}
    Q1 -->|"No (open-ended tasks)"| Q3{"Do you need<br/>long-term memory?"}

    Q2 -->|"No"| L1_CODE["L1: Reflexion, STaR<br/>+ programmatic tests"]
    Q2 -->|"Yes"| Q4{"Can agent modify<br/>its own code?"}

    Q4 -->|"No"| L4_EXT["L4: ADAS, AlphaEvolve<br/>External meta-agent"]
    Q4 -->|"Yes"| L5_DGM["L5: DGM, SICA<br/>With immutable evaluator"]

    Q3 -->|"No"| L1_OPEN["L1: Self-Refine, OPRO<br/>+ LLM judge calibration"]
    Q3 -->|"Yes"| Q5{"Do tasks transfer<br/>across episodes?"}

    Q5 -->|"Yes"| L2_MEM["L2: ExpeL, Voyager, ACE<br/>+ skill/insight library"]
    Q5 -->|"No"| L3_RL["L3: Self-Rewarding, RISE<br/>+ preference/reward loop"]

    L1_CODE --> RULE1["Rule: Single-variable ablation<br/>+ independent test set"]
    L1_OPEN --> RULE2["Rule: External judge calibration<br/>+ human spot-check"]
    L2_MEM --> RULE3["Rule: Memory lifecycle mgmt<br/>+ staleness detection"]
    L3_RL --> RULE4["Rule: Validation/test isolation<br/>+ cost budget"]
    L4_EXT --> RULE5["Rule: Sandbox execution<br/>+ regression gate"]
    L5_DGM --> RULE6["Rule: Immutable evaluator<br/>+ audit trail + rollback"]

    style START fill:#e3f2fd
    style RULE1 fill:#e8f5e9
    style RULE2 fill:#e8f5e9
    style RULE3 fill:#e8f5e9
    style RULE4 fill:#e8f5e9
    style RULE5 fill:#e8f5e9
    style RULE6 fill:#e8f5e9
```

---

## 7. Conclusion

**What is known:**
- The five-level evolution chain (L1-L5) provides a formal taxonomy where each level corresponds to a well-defined set of mutable state components and mutation operators.
- Quantitative evidence from 18 papers confirms that higher-level methods achieve larger absolute improvements on structured benchmarks, with DGM (+30% SWE-bench) being the current frontier.
- Environment-grounded evaluation consistently outperforms self-critique across all levels.
- Iterative self-improvement exhibits diminishing returns within 2-4 iterations without external calibration.

**What is inferred:**
- The cost-per-delta-point is not always favorable at higher levels; L2 methods like Voyager offer better cost-efficiency for embodied tasks.
- Cross-domain transfer remains the weakest link in the evidence chain.
- Archive-based methods (DGM, AlphaEvolve) represent the most promising path toward open-ended improvement.

**What remains unverified:**
- Whether L5 methods can operate safely without human oversight in production environments.
- Whether improvements at any level transfer to tasks fundamentally different from the training distribution.
- Whether the theoretical formalism of Gödel Machines can be approximated with engineering safeguards to produce reliable self-modification.
- The long-term dynamics of memory-based evolution over 1000+ diverse episodes.

---

## Appendix: Source Index

| Review File | Method | Level |
|-------------|--------|-------|
| review-2505.22954-darwin-godel-machine.md | DGM | L5 |
| review-2506.13131-alphaevolve.md | AlphaEvolve | L4 |
| review-2408.08435-adas.md | ADAS | L4 |
| review-2410.04444-godel-agent.md | Gödel Agent | L5 |
| review-2410.16946-evomac.md | EvoMAC | L4 |
| review-2410.15639-algo-self-improve.md | Self-Developing | L4 |
| review-2401.10020-self-rewarding.md | Self-Rewarding | L3 |
| review-2407.19594-meta-rewarding.md | Meta-Rewarding | L3 |
| review-2407.18219-rise.md | RISE | L3 |
| review-2409.12917-score.md | SCoRe | L3 |
| review-2305.16291-voyager.md | Voyager | L2 |
| review-2308.10144-expel.md | ExpeL | L2 |
| review-2401.13996-ice.md | ICE | L2 |
| review-2303.11366-reflexion.md | Reflexion | L1 |
| review-2203.14465-star.md | STaR | L1 |
| review-2402.17574-agent-pro.md | Agent-Pro | L1 |
| review-2406.18532-symbolic-learning.md | Symbolic Learning | L4 |
| review-2401.01335-self-play-fine-tuning.md | SPIN | L3 |
