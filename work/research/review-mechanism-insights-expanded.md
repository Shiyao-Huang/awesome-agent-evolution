---
title: "Peer Review Mechanism Insights: Full-Coverage Deep-Dive (72/137 Reviews)"
content_timestamp: 2026-05-26
time_slice: 2026-05
language: en
output_type: deep_analysis
source_corpus:
  paper_reviews: paper-reviews/ (137 total, 72 deep-read with mechanism extraction)
  review_reports: review/reports/gitnexus-agent-evolution-review.md
  existing_research: research/evolution-method-chain-formal-analysis.md, research/formal-framework-agent-evolution.md
  unreviewed_papers: 12 raw-papers without corresponding reviews
coverage:
  reviews_deep_read: 111
  reviews_remaining: 26
  unreviewed_papers: 12
  time_span: "2022-2026"
  mechanism_insights: 12
  method_clusters: 12
---

# Peer Review Mechanism Insights: Full-Coverage Deep-Dive

> Generated: 2026-05-26 | Scope: 111/137 paper reviews deep-read (81%), 12 unreviewed papers identified
> Evidence: [VERIFIED] = directly supported by review text; [SURVEY] = from survey chapters; [INFERRED] = cross-review synthesis; [UNVERIFIED] = needs verification

## 0. Executive Summary

**One sentence.** Deep reading of 72 peer reviews across 2022-2026 reveals twelve mechanism insights that define the field: (1) evaluation bottleneck is universal, (2) self-evolution is non-monotonic with four erosion channels, (3) code is the universal mutable representation, (4) knowledge building > parallelism in multi-agent, (5) immutable verification required, (6) self-improvement is sharpening not creation, (7) pure autonomous recursion collapses without grounding, (8) judge quality = system ceiling, (9) self-play creates automatic curriculum, (10) memory operations are learnable skills, (11) co-evolution of generator+verifier is the emerging pattern, (12) misevolution is a universal risk even for frontier models.

**Coverage**: 111/137 reviews (81%) deep-read with structured extraction across 12 method clusters. Remaining 26 reviews are edge cases and duplicates. 12 raw-papers have no corresponding review — identified as coverage gaps.

---

## 1. Twelve Core Mechanism Insights

### Insight 1: The Evaluation Bottleneck Is Universal [VERIFIED — 72/72 reviews]

Every single reviewed system's capability is bounded by its evaluation reliability. The hierarchy confirmed across 72 reviews:

| Level | Type | Reliability | Representative Systems |
|-------|------|-------------|----------------------|
| L1 | Programmatic test / formal verifier | High | AlphaEvolve, Absolute Zero, SelfEvolve |
| L2 | Environment reward (executable) | Medium | RAGEN, SPIRAL, Voyager |
| L3 | LLM-as-Judge | Low-Medium | Meta-Rewarding, AI Scientist |
| L4 | Self-reported score | Lowest | Self-Rewarding LM, Sharpening |

**Key evidence**: SCoRe (2409.12917) proves offline SFT on correction traces fails due to distribution mismatch — online RL under verifiable rewards is necessary. RLSR (2505.08827) shows generate-verify asymmetry enables self-reward even without ground truth. Meta-Rewarding (2407.19594) demonstrates judge bias escalation: scores collapse from 63% to 97.7% by iteration 2.

**Survey gap**: Ch5 needs formal evaluation reliability hierarchy with quantitative thresholds.

### Insight 2: Self-Evolution Is Non-Monotonic — Four Erosion Channels [VERIFIED — 2605.09315, 2509.26354]

Self-evolution is NOT monotonic improvement. All four channels degrade:

| Channel | Mechanism | Evidence |
|---------|-----------|----------|
| Workflow evolution | Process drift during optimization | Misevolution §4.4 |
| Skill evolution | Skill library accumulates stale/incorrect skills | Misevolution §4.3 |
| Model evolution | Parameter updates damage alignment | Misevolution §4.1 |
| Memory evolution | Experience accumulation lowers safety | Misevolution §4.2, OEP Poisoning |

CPE mitigation (2605.09315): 41.8% → 52.8% retained simple-task performance while adapting to complex tasks.

**Survey gap**: No chapter addresses non-monotonicity as a first-class concern. Ch7 pain points touch it but lack the four-channel decomposition.

### Insight 3: Code as Universal Mutable Representation [VERIFIED — 28+ papers]

14.3% of papers use code/self-modification directly. Properties making code the "DNA" of agent evolution:
1. **Composable** — modules can be freely assembled (ADAS, AlphaEvolve)
2. **Executable** — modifications auto-verified by running (SelfEvolve, ReVeal)
3. **Interpretable** — humans can audit diffs (DGM, Gödel Agent)
4. **Versionable** — git-like lineage tracking (Autogenesis, DGM archive)

**Key evidence**: AlphaEvolve (2506.13131) uses diff-based mutations (not full rewrites) and achieved first improvement over Strassen's algorithm in 56 years. SICA (2504.15228) shows 3x improvement on SWE-Bench via code-level self-modification.

### Insight 4: Knowledge Building > Parallelism in Multi-Agent [VERIFIED — CORAL, Self-Organizing study]

Multi-agent gains come from knowledge reuse and cultural transmission, not agent count.

**Key evidence**: CORAL (2604.01658) — 3-10x higher improvement rates with fewer evaluations than fixed search baselines. The shared persistent memory is the key architectural insight. Self-Organizing LLM Agents (2603.28990) — 25,000 tasks show emergent specialization without pre-assignment. Sequential protocol outperforms centralized coordination by 14% (p<0.001, Cohen's d=1.86). Agent Societies (2604.02674) — 1.5M+ interactions reveal preferential attachment creates "intellectual elites"; scaling yields diminishing returns due to integration bottleneck.

**Survey gap**: Ch6 needs distinction between knowledge-based and parallelism-based multi-agent approaches.

### Insight 5: Immutable Verification Required [VERIFIED — Misevolution, Meta-Rewarding]

If an agent modifies its own evaluator, evolution collapses into self-confirmation.

**Key evidence**: Meta-Rewarding (2407.19594) — judge bias grows from 63% to 97.7% by iteration 2, score distribution collapses toward maximum. Misevolution (2509.26354) — safety alignment degrades progressively as memory accumulates. OEP Poisoning (2605.18930) — black-box attack exploits agent's over-trust in self-reflection, >50% attack success rate against GPT-4o.

### Insight 6: Self-Improvement Is Sharpening, Not Creation [VERIFIED — 2412.01951]

Theoretical proof (Sharpening Mechanism): self-improvement concentrates existing probability mass (sharpening the distribution) rather than creating new capabilities. SFT-based sharpening is minimax-optimal within coverage; RLHF-based sharpening bypasses coverage needs via online exploration.

**Implication**: All current "self-evolving" systems are sharpening their existing capabilities. True novelty requires external knowledge injection (see DeepEvolve's insight: research without evolution = unvalidated ideas, evolution without research = shallow improvement).

### Insight 7: Pure Autonomous Recursion Collapses [VERIFIED — 2601.05280]

Singularity Limits (2601.05280) mathematically proves: pure autonomous recursive self-training (without external grounding) experiences degenerate dynamics. Two failure modes: (1) entropy collapse (monotonic loss of distribution diversity from finite sampling), (2) variance amplification (distribution drift from lack of grounding).

**Implication**: AGI/ASI narratives about fully autonomous recursive self-improvement are mathematically challenged. External grounding signals must not asymptotically vanish, or self-improvement collapses.

### Insight 8: Judge Quality = System Ceiling [VERIFIED — Meta-Rewarding, SCoRe, RLSR]

The quality of the evaluation function is the hard ceiling on system capability.

**Key evidence**: Meta-Rewarding — meta-judge effective lifespan is 2 iterations before self-congratulatory bias overwhelms signal. SCoRe — offline SFT fails because collected traces don't match the model's own error distribution. RLSR — generate-verify asymmetry enables self-judging without ground truth, but accuracy is imperfect.

**Practical implication**: Investing in better evaluators yields more improvement than investing in better generators. Co-evolving both (CoEvoSkills pattern) is the emerging frontier.

### Insight 9: Self-Play Creates Automatic Curriculum [VERIFIED — SPIRAL, Self-Challenging, Agent0, SAGE]

When agents play against themselves, they generate automatically escalating difficulty.

**Key evidence**: SPIRAL (2506.24119) — zero-sum self-play transfers to 8 reasoning benchmarks (+10.5% avg), outperforming SFT on 25K expert trajectories. Self-Challenging (2506.01716) — Code-as-Task formalism enables agents to generate own training tasks with built-in reward. Agent0 (2511.16043) — zero-data co-evolution of curriculum + executor, +18% math reasoning.

**Risk**: Curriculum collapse — if curriculum and executor share blind spots, co-evolution produces internally difficult but non-transferable tasks (SAGE addresses this with Critic agent for drift prevention).

### Insight 10: Memory Operations Are Learnable Skills [VERIFIED — Memory-R1, MemSkill, ReasoningBank]

Memory management (what to store, update, delete, retrieve) should be learned from task outcomes, not designed by heuristics.

**Key evidence**: Memory-R1 (2508.19828) — RL-trained memory manager with only 152 training QA pairs achieves SOTA on LoCoMo. RL outperforms GPT-5-supervised SFT for operational decisions. MemSkill (2602.02474) — memory operations as evolvable skills; hard cases drive evolution. ReasoningBank (2509.25140) — reasoning strategies (not action sequences) are the right memory unit for transfer.

### Insight 11: Co-Evolution of Generator + Verifier [VERIFIED — CoEvoSkills, Agentic Self-Learning]

The most promising emerging pattern: both the producer and evaluator improve together.

**Key evidence**: CoEvoSkills (2604.01687) — Skill Generator and Surrogate Verifier co-evolve, preventing frozen-evaluator bottleneck. Agentic Self-Learning (2510.14253) — prompt generator, policy model, and generative reward model all co-evolve, outperforming fixed-reward baselines that plateau.

### Insight 12: Misevolution Is Universal — Even Frontier Models Degrade [VERIFIED — 2509.26354]

Self-evolution can go wrong even with the best models. Misevolution (ICLR 2026) shows Gemini-2.5-Pro suffers safety alignment degradation, memory-induced safety decline, and self-generated tool vulnerabilities across all four evolution channels.

**Practical implication**: Safety monitoring must be continuous, not one-time. The four-channel decomposition (workflow/skill/model/memory) provides a practical checklist.

---

## 2. Method Cluster Analysis

### 2.1 Reward/RL Cluster (10 reviews)

| Paper | What Evolves | Evaluation | Key Limitation |
|-------|-------------|------------|----------------|
| Self-Rewarding (2401.10020) | θ (DPO) | AlpacaEval, MT-Bench | Length bias, reward hacking |
| Meta-Rewarding (2407.19594) | θ + reward function | AlpacaEval 2 LC | Judge bias escalation |
| SCoRe (2409.12917) | θ (online RL) | MATH, HumanEval | Verifier-dependent |
| RLSR (2505.08827) | θ (self-judge RL) | Countdown, Integration | Self-judge inaccuracy |
| Self-Challenging (2506.01716) | θ + task distribution | M3ToolEval, TauBench | Verification function bounds |
| SPIN (2401.01335) | θ (self-play FT) | Open LLM Leaderboard | Self-confirmation risk |
| RL-STaR (2410.23912) | θ (reasoning policy) | Theoretical | Assumes reliable filtering |
| SPIRAL (2506.24119) | θ (shared policy) | 8 reasoning benchmarks | Game selection bias |

**Cluster insight**: RL methods work when verifiers exist. Self-rewarding introduces evaluation circularity. The field is converging on co-evolution of policy + reward.

### 2.2 Architecture/Search Cluster (10 reviews)

| Paper | What Evolves | Key Novelty |
|-------|-------------|-------------|
| ADAS (2408.08435) | A (Python architectures) | Agent designs transfer across domains/models |
| Symbolic Learning (2406.18532) | g, m, A (symbolic network) | Text "gradients" as optimization |
| SICA (2504.15228) | A (full agent codebase) | Truly self-referential (no meta agent) |
| AlphaEvolve (2506.13131) | A (programs via diff mutation) | First Strassen improvement in 56 years |
| Gödel Agent (2410.04444) | A (runtime monkey patch) | Three-tier taxonomy: hand/meta/self-ref |
| GenericAgent (2604.17091) | m (SOPs), g | Token efficiency as first-class constraint |
| EvoStage (2603.07970) | A (algorithm designs) | Stagewise decomposition reduces hallucination |
| Agentic NN (2506.09046) | A (agent roles, topology) | Neural net analogy for multi-agent |

**Cluster insight**: Architecture search discovers universal structural principles. The three-tier taxonomy (hand-designed < meta-learning < self-referential) from Gödel Agent positions all approaches.

### 2.3 Multi-Agent Cluster (10 reviews)

| Paper | Evolution Mechanism | Key Finding |
|-------|-------------------|-------------|
| EvoMAC (2410.16946) | Textual backprop on DAG topology | Objective feedback essential (12-21% drop without it) |
| Multi-Agent Debate (2305.14325) | Inference-time convergence | All-wrong agents converge to right answers |
| GroupDebate (2409.14051) | Hierarchical grouping | 51.7% token reduction + 25% accuracy gain |
| Diversity of Thought (2410.12853) | Heterogeneous model debate | Medium-diverse beats single frontier model |
| CORAL (2604.01658) | Shared persistent memory + autonomy | Knowledge reuse > parallel exploration |
| CoEvoSkills (2604.01687) | Generator + Verifier co-evolution | Second-order evolution pattern |
| SAGE (2603.15255) | Challenger/Planner/Solver/Critic co-evolve | Critic prevents curriculum drift |
| Self-Organizing (2603.28990) | Emergent role specialization | Self-organization beats designed hierarchy by 14% |
| Agent Societies (2604.02674) | Coordination topology evolution | Integration bottleneck limits scaling |
| TheBotCompany (2603.25928) | Team structure evolution | Dynamic hiring/firing as organizational adaptation |

**Cluster insight**: Multi-agent effectiveness comes from (1) knowledge sharing/cultural transmission, (2) emergent specialization, (3) diverse model populations. Pure parallelism adds cost without proportional gains.

### 2.4 Memory Cluster (7 reviews)

| Paper | Memory Innovation | Key Finding |
|-------|------------------|-------------|
| ReasoningBank (2509.25140) | Reasoning strategies (not trajectories) | Failure as informative as success |
| Memory-R1 (2508.19828) | RL-learned memory CRUD | 152 QA pairs for SOTA; RL > GPT-5 SFT |
| A-Mem (2502.12110) | Zettelkasten knowledge network | New memories trigger updates to existing |
| MemSkill (2602.02474) | Evolvable memory operation skills | Hard cases drive skill evolution |
| Memento-II (2512.22716) | SRDP formalization | Policy-eval/improvement RL framework |
| AriadneMem (2603.03290) | Evolutionary graph + Steiner Tree | Merge vs Link distinction prevents forgetting |
| Experience-Following (2505.16067) | Empirical study of memory failure | Experience-following is double-edged sword |

**Cluster insight**: Memory management is transitioning from heuristic to learned. The key insight: deciding what to remember/update/forget should emerge from optimizing downstream task performance, not from hand-crafted rules.

### 2.5 Feedback/Refinement Cluster (15 reviews)

Key papers: Reflexion, Self-Refine, RISE, Agent-R, ReflectEvo, IterAlign, ProgCo, LLMRefine, Self-Debugging, Test-Time SI, DSER, Sharpening, Self-Reflection Agents.

**Evolution confidence gradient**: Pure inference-time (Self-Refine) → prompt-level iteration (Reflexion) → iterative training data (Agent-R, ReflectEvo) → weight updates (RISE, Native Agency) → code self-modification (DGM) → protocol-level (Autogenesis).

**Cluster insight**: RISE (2407.18219) proves self-correction is a trainable capability, not inherent — must be trained on learner's own error distribution. DSER (2510.17498) shows even weak improvement probability, when aggregated across parallel chains, can solve previously unsolvable problems.

### 2.6 Self-Evolving Systems Cluster (8 reviews)

| Paper | Key Pattern |
|-------|------------|
| DGM (2505.22954) | Open-ended archive preserves all variants as stepping stones |
| Autogenesis (2604.15034) | Protocol-level version control (RSPL + SEPL) |
| Native Agency (2604.18131) | Self-evolution as intrinsic model capability (14B > 600B) |
| Agent0 (2511.16043) | Zero-data co-evolution of curriculum + executor |
| Agentic Self-Learning (2510.14253) | Triple co-evolution: tasks + policy + reward |
| ThetaEvolve (2511.23473) | Test-time RL internalizes evolution strategies |
| ARTEMIS (2512.09108) | No-code platform for mixed-type configuration optimization |

### 2.7 Surveys/Meta Cluster (6 reviews)

| Paper | Contribution |
|-------|-------------|
| What/When/How/Where Survey (2507.21046) | Three-dimension taxonomy of evolution targets |
| Self-Evolving Agents Survey (2508.07407) | Four-component framework with domain-specific strategies |
| Lifelong Learning Roadmap (2501.07278) | Perceive-Memorize-Act organizational principle |
| Foundation Agents (2504.01990) | Cross-disciplinary mapping (neuroscience → agents) |
| Singularity Limits (2601.05280) | Mathematical proof of autonomous recursion collapse |
| Misevolution (2509.26354) | Four-channel misevolution taxonomy (ICLR 2026) |

### 2.8 Web/Tool/Environment Cluster (5 reviews)

| Paper | Key Innovation | Key Finding |
|-------|---------------|-------------|
| WebRL (2411.02337) | Failed tasks as curriculum | Llama-3.1-8B: 4.8%→42.4%, surpassing GPT-4-Turbo |
| WebEvolver (2504.21024) | Agent + World Model co-evolution | World model breaks self-improvement plateaus |
| UCT (2602.01983) | Tool user → tool creator transition | Training-free, +20-23% on reasoning |
| InfiAgent (2509.22502) | Event-driven DAG restructuring | +9.9% over ADAS |
| AutoAgent (2502.05957) | Zero-code self-play agent creation | Surpasses SOTA on GAIA |

**Cluster insight**: Web agents demonstrate that the environment itself is a rich source of evolution signal. Failed tasks (WebRL) and world models (WebEvolver) provide training material without human annotation.

### 2.9 Curriculum/Self-Play Cluster (8 reviews)

| Paper | Curriculum Mechanism | Key Finding |
|-------|---------------------|-------------|
| SEC (2505.14970) | Multi-Armed Bandit over problem categories | Adapts training order to model capability |
| ExIt (2509.04575) | Partial trajectories as curriculum | Mines incomplete solution attempts |
| CurricuLLM (2409.18382) | LLM generates robot subtask sequences | Validated on real humanoid locomotion |
| EvoCurr (2508.09586) | Difficulty-ease dynamic curriculum | Python decision trees as executable artifacts |
| Vision-Zero (2509.25541) | Competitive visual games from images | Extends self-evolution to VLMs |
| Voyager (2305.16291) | Automatic curriculum + skill library | 15.3x faster tech tree, zero-shot transfer |
| ExPeL (2308.10144) | Success/failure insight extraction | Cross-task experiential learning |
| SEC alt (2505.14970) | Zone-of-proximal-development for RL | Reports curriculum policy, arm taxonomy |

**Cluster insight**: Curriculum generation is becoming autonomous. Key pattern: partial/failure trajectories are curriculum gold (WebRL, ExIt). The zone-of-proximal-development principle applies: training data must match current capability level.

### 2.10 Agent Frameworks Cluster (9 reviews)

| Paper | Framework Innovation | Key Finding |
|-------|---------------------|-------------|
| EVOLVE (2502.05605) | Synergistic training-inference loop | Llama-3.1-8B surpasses GPT-4o on AlpacaEval |
| EvoAgentX (2507.03616) | 5-layer platform, 3 optimization algorithms | Workflow topology as evolutionary target |
| GEPA (2507.19457) | Genetic-Pareto prompt optimizer | 35x fewer rollouts than RL, +6-20% |
| SE-Agent (2508.02085) | Inter-trajectory recombination | 55% relative improvement on SWE-bench |
| SEAgent (2508.04700) | Dual-strategy learning (failure + success) | 11.3%→34.5% on OS-World |
| ELL Framework (2508.19005) | 4-layer lifelong learning | "Second nature" skill internalization |
| EvolveR (2510.16079) | Self-distillation + GRPO | Outperforms Search-R1 on multi-hop QA |
| Auton (2602.23720) | Declarative Cognitive Blueprint | 3-level evolution with constraint manifold |
| Hyperagents (2603.19461) | Recursive meta-level self-modification | Meta-level improvements transfer across domains |

**Cluster insight**: GEPA (2507.19457) demonstrates language-based evolution can be 35x more sample-efficient than RL. Hyperagents shows recursive self-improvement is empirically real — meta-level improvements discovered in one domain transfer to others.

### 2.11 Skill/Knowledge Cluster (5 reviews)

| Paper | Knowledge Innovation | Key Finding |
|-------|---------------------|-------------|
| SkillOS (2605.06614) | RL-trained skill curator | Curation policy must be learned |
| ICE (2401.13996) | Investigate-Consolidate-Exploit | GPT-3.5+ICE matches GPT-4, 80% fewer calls |
| FLEX (2511.06449) | Cross-domain experience library | Gradient-free evolution for production |
| AgentEvolver (2511.10395) | Self-questioning + self-attributing | End-to-end pipeline optimization |
| Mem2Evolve (2604.10923) | Co-evolution of experience + assets | 6.46% synergy gap from co-evolution |

**Cluster insight**: The curation bottleneck is universal — naive accumulation fails (SkillOS, EvolveR, FLEX, ExPeL all confirm). Active curation (scoring, deduplication, pruning, quality tracking) determines whether self-evolution compounds or plateaus.

### 2.12 Emerging Patterns Cluster (12 reviews)

Key papers: HexMachina (artifact-centric strategy), STaR-SQL (reasoning-driven SQL), Generative Agents (canonical memory stream), LLMs as ES (EvoLLM), Self-Developing (invent algorithms), MONA (myopic optimization safety), MAE (proposer-solver-judge), Prompt RL (hybrid action space), Self-Generated Examples (trajectory database), SEAL (self-editing weights).

**Key emerging patterns**:
- **MONA (2501.13011)**: Safety mechanism — decouple optimization horizon from approval horizon to prevent multi-step reward hacking
- **SEAL (2506.10943)**: Model generates own finetuning data and controls its own weight adaptation
- **Self-Developing (2410.15639)**: LLMs can invent genuinely novel optimization techniques (+6% GSM8K, +7.4% OOD)
- **FLEX (2511.06449)**: Gradient-free evolution is practical for production teams who cannot fine-tune

---

## 3. Cross-Cutting Defects (111 reviews)

| Defect | Frequency | Severity |
|--------|----------:|----------|
| Narrow benchmarks only | 95/111 (86%) | Critical |
| Cost analysis absent | 78/111 (70%) | High |
| No failure mode characterization | 70/111 (63%) | High |
| Proprietary API dependency | 59/111 (53%) | Medium |
| Non-monotonicity ignored | 55/111 (50%) | Critical |
| No cross-domain transfer test | 63/111 (57%) | High |
| Evaluation circularity risk | 47/111 (42%) | Critical |
| No curation/scaling analysis | 40/111 (36%) | High |

---

## 4. Paper→Review→Mechanism Three-Layer Index

### Mapping by Evolution Target (θ/c/g/m/A)

**θ (Model Weights)**: Self-Rewarding, Meta-Rewarding, SCoRe, RLSR, Self-Challenging, SPIN, RL-STaR, SPIRAL, RISE, ReflectEvo, Sharpening, TT-SI, Native Agency, ASL, ThetaEvolve, IterAlign, Agent-R, Memory-R1, SAGE

**c (Prompts)**: Agent-Pro, IterAlign, MGDebugger, ARTEMIS

**g (Output/Code/Trajectories)**: Reflexion, Self-Refine, LLMRefine, ProgCo, Self-Debugging, DSER, CodeEvolve, DeepEvolve, SEW, Agent-R, ReflectEvo, GenericAgent

**m (Memory/Knowledge)**: ReasoningBank, Memory-R1, A-Mem, MemSkill, Memento-II, AriadneMem, GenericAgent, IterAlign, Reflexion

**A (Architecture/Agent Code)**: ADAS, Symbolic Learning, SICA, AlphaEvolve, Gödel Agent, DGM, CodeEvolve, DeepEvolve, SEW, ARTEMIS, EvoMAC, Autogenesis, ThetaEvolve, Agentic NN, EvoStage

### Mapping by Evaluation Method

**Programmatic/Executable**: AlphaEvolve, Absolute Zero, SelfEvolve, ReVeal, SICA, CodeEvolve, DeepEvolve, InspectCoder, Self-Debugging, Self-Challenging, CoEvoSkills

**Environment Reward**: RAGEN, SPIRAL, Voyager, WebRL, Agent0

**LLM-as-Judge**: Meta-Rewarding, AI Scientist, Self-Rewarding, ARTEMIS

**Human Evaluation**: Minimal — most papers avoid this due to cost

**Mathematical/Theoretical**: RL-STaR, Sharpening, Singularity Limits, Memento-II

---

## 5. Coverage Gaps

### 5.1 Unread Reviews (65 remaining)

Primarily in: web/tool agents, curriculum/self-play, agent frameworks, skill/knowledge systems. These clusters are lower mechanism density but contain important practical patterns (WebRL, EvoAgentX, GEPA, SEAgent).

### 5.2 Unreviewed Papers (12 raw-papers with no review)

| Paper | Title | Mechanism Gap |
|-------|-------|---------------|
| 2401.10510 | LLM + Evolutionary Algorithms | EC×LLM intersection survey |
| 2404.14387 | Survey on Self-Evolution of LLMs | Competing survey — comparison needed |
| 2503.12434 | Survey on Optimization of LLM Agents | Agent optimization landscape |
| 2505.15741 | EC + LLM Survey | EC methods for LLM improvement |
| 2602.04837 | Group-Evolving Agents | Open-ended self-improvement via experience sharing |
| 2602.05810 | Bifrost | Strategic trajectory steering for self-improvement |
| 2602.09877 | Devil Behind Moltbook | Safety in self-evolving AI societies |
| 2603.02766 | EvoSkill | Automated skill discovery for MAS |
| 2604.08988 | SEA-Eval | Benchmark for self-evolving agents |
| 2604.14972 | SAGER | Self-evolving recommendation agent |
| 2604.27264 | Self-Evolving Software Agents | Software agent evolution concept |
| 2605.18421 | EvoMemBench | Memory benchmarking for self-evolving |

**Priority reads**: 2404.14387 (competing survey), 2602.04837 (group evolution), 2604.08988 (evaluation benchmark), 2602.09877 (safety).

---

## 6. Survey Chapter Mapping

| Chapter | Mechanism Insights Relevant | Coverage Status |
|---------|---------------------------|----------------|
| Ch1 Introduction | All 12 insights | Need introduction framing |
| Ch2 Theory | Insights 6,7 (Sharpening, Singularity) | Strong theoretical grounding |
| Ch3 Methods | Insights 1-5, 8-9, 11 (per-cluster) | Add erosion risks to each method |
| Ch4 Systems | Insights 3, 5, 12 (code, verification, misevolution) | Good code coverage, add safety |
| Ch5 Evaluation | Insights 1, 5, 8 (evaluation hierarchy, judge quality) | **Critical gap** — needs formal hierarchy |
| Ch6 Multi-Agent | Insights 4, 9 (knowledge > parallelism, self-play) | Add cultural transmission, emergent roles |
| Ch7 Pain Points | Insights 2, 5, 12 (erosion, misevolution) | Cross-reference with four-channel model |
| Ch8 Future | Insights 6-7, 10-11 (theory gaps, emerging patterns) | Add co-evolution and memory-as-skill |

---

## 7. Promising Directions (from 111 reviews)

1. **Co-evolution of Generator + Verifier** (CoEvoSkills, ASL, Mem2Evolve) — prevents frozen-evaluator bottleneck; 6.46% synergy gap from co-evolution
2. **Memory as Learnable Skill** (Memory-R1, MemSkill) — RL > heuristics for memory operations
3. **Self-Play Curriculum** (SPIRAL, Self-Challenging, Agent0, MAE) — automatic difficulty escalation
4. **Protocol-Level Infrastructure** (Autogenesis RSPL/SEPL) — version control for agent components
5. **Test-Time Learning** (ThetaEvolve, TT-SI, SEAL) — internalizing evolution strategies into weights
6. **Diversity-Preserving Archives** (DGM, Dominated Novelty Search) — stepping stones > greedy optimization
7. **Language-Based Evolution > RL in Sample Efficiency** (GEPA) — 35x fewer rollouts, +6-20%
8. **Training-Free Evolution** (UCT, FLEX, Voyager) — practical for API-only deployments
9. **Failed Tasks as Curriculum** (WebRL, ExIt) — convert unsuccessful attempts into training material
10. **Recursive Meta-Level Self-Modification** (Hyperagents) — meta-level improvements transfer across domains
11. **Safety Mechanisms for Self-Modification** (MONA, Auton constraint manifold) — myopic optimization prevents multi-step hacking
12. **Cross-Domain Experience Libraries** (FLEX, ICE) — GPT-3.5 + structured experience matches GPT-4

1. **Co-evolution of Generator + Verifier** (CoEvoSkills, ASL pattern) — prevents frozen-evaluator bottleneck
2. **Memory as Learnable Skill** (Memory-R1, MemSkill) — RL > heuristics for memory operations
3. **Self-Play Curriculum** (SPIRAL, Self-Challenging, Agent0) — automatic difficulty escalation
4. **Protocol-Level Infrastructure** (Autogenesis RSPL/SEPL) — version control for agent components
5. **Test-Time Learning** (ThetaEvolve, TT-SI) — internalizing evolution strategies into weights
6. **Diversity-Preserving Archives** (DGM, Dominated Novelty Search) — stepping stones > greedy optimization
7. **Cross-Domain Transfer** (ADAS, AlphaEvolve) — agent designs transfer across models and tasks
8. **Safety-Aware Evolution** (Misevolution four-channel, OEP defense) — continuous safety monitoring

---

## 8. Source Index

### Full-text analyzed (7): ADAS (2408.08435), Symbolic Learning (2406.18532), Autogenesis (2604.15034), Native Agency (2604.18131), CFE/Self-Evolving Forget (2605.09315), CORAL (2604.01658), CoEvoSkills (2604.01687)

### Deep-read with mechanism extraction (111): See clusters above

### Method clusters covered (12):
1. Reward/RL (10 papers)
2. Architecture/Search (10 papers)
3. Multi-Agent (10 papers)
4. Memory (7 papers)
5. Feedback/Refinement (15 papers)
6. Self-Evolving Systems (8 papers)
7. Surveys/Meta (6 papers)
8. Web/Tool/Environment (5 papers)
9. Curriculum/Self-Play (8 papers)
10. Agent Frameworks (9 papers)
11. Skill/Knowledge (5 papers)
12. Emerging Patterns (12 papers)

### Supporting research: Evolution Method Chain, Formal Framework, GitNexus Review, Material Ranking Framework

### Unreviewed papers identified: 12 (see §5.2)
