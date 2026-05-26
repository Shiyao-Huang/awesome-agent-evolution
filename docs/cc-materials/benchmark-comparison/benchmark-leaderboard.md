# Benchmark Comparison: Agent Self-Evolution Papers

> Analysis of 115 unique papers (2022-2026) from the Agent Self-Evolution space.
> Extracted benchmark mentions, scores, and cross-referenced with 348 GitHub repos.

---

## 1. Benchmark Frequency Ranking

How often each benchmark appears across the corpus (papers + repos):

| Rank | Benchmark | Mentions | Category |
|------|-----------|----------|----------|
| 1 | **HumanEval** | 15 | Code Generation |
| 2 | **MBPP** | 10 | Code Generation |
| 3 | **LiveCodeBench** | 9 | Code Generation |
| 4 | **SWE-bench** (Verified/Lite/Full) | 8 | Software Engineering |
| 5 | **GAIA** | 8 | General Agent Tasks |
| 6 | **MATH** | 7 (+3 lowercase) | Mathematical Reasoning |
| 7 | **ALFWorld** | 6 | Interactive Decision-Making |
| 8 | **GSM8K** | 5 (+2 alt) | Mathematical Reasoning |
| 9 | **AlpacaEval 2.0** | 5 | Instruction Following |
| 10 | **AIME** (2024/2025) | 5 | Competition Math |
| 11 | **APPS** | 4 | Competitive Programming |
| 12 | **HotPotQA** | 3 (+2 alt) | Multi-hop QA |
| 13 | **BigCodeBench** | 3 | Code Generation |
| 14 | **Spider** | 2 | Text-to-SQL |
| 15 | **MT-Bench** | 2 | Chat/Reasoning |
| 16 | **Minecraft/MineDojo** | 6 | Embodied Agent |
| 17 | **MMLU** | 2 | General Knowledge |
| 18 | **WebArena** | 1 | Web Agent |
| 19 | **OSWorld** | 1 | Computer Use Agent |

---

## 2. Detailed Leaderboards for Top Benchmarks

### 2.1 HumanEval (Code Generation -- Pass@1 %)

| Paper | Year | Method | Model | Score | Baseline | Delta |
|-------|------|--------|-------|-------|----------|-------|
| Reflexion (2303.11366) | 2023 | Verbal Reinforcement Learning | GPT-3.5 + Reflection | **91.0** | GPT-4: 80.0 | +11.0 |
| CoCoS (2505.23060) | 2025 | Online RL + Accumulated Reward | 1B-scale SLM | +27.7% over baseline | Baseline SLM | +27.7% relative |
| SCoRe (2409.12917) | 2024 | Multi-turn Online RL | Gemini 1.0 Pro/1.5 Flash | +9.1% improvement | Base model | +9.1% |
| MGDebugger (2410.01215) | 2024 | Hierarchical Debugging | GPT-4 based | +18.9% accuracy | Seed generation | +18.9% |
| Self-Debugging (2501.12793) | 2025 | Post/In-execution debugging | Various LLMs | Improves competitive problems | -- | -- |
| ReflectEvo (2505.16475) | 2025 | Iterative Reflection Learning | Llama-3: 52.4% -> 71.2% | 71.2 (BIG-bench) | Llama-3 base: 52.4% | +18.8 |

**Key Insight**: Reflexion's 91% on HumanEval (2023) was a landmark result showing that verbal self-reflection can surpass GPT-4. However, this result uses GPT-3.5 as the base with access to execution feedback -- it is not purely self-improving without tools. CoCoS shows that even 1B-scale models can achieve dramatic improvements through RL-based self-correction.

---

### 2.2 SWE-bench (Software Engineering -- Verified/Lite %)

| Paper | Year | Method | Model | Score | Baseline | Delta |
|-------|------|--------|-------|-------|----------|-------|
| SWE-agent (repo) | 2025 | Agent + Claude 3.7 | SWE-agent 1.0 + Claude 3.7 | **65.0** (Verified) | -- | SoTA open-source |
| Mini-SWE-agent (repo) | 2025 | 100-line Python agent | Mini-SWE-agent | **65.0** (Verified) | -- | Matches full SWE-agent |
| SE-Agent (2508.02085) | 2025 | Trajectory Evolution (revision/recombination/refinement) | Multiple LLMs | Up to 55% relative improvement | Base LLM | +55% relative |
| Darwin Godel Machine (2505.22954) | 2025 | Open-ended self-modifying code | DGM (archive-based) | **20.0 -> 50.0** (Verified) | Initial: 20.0 | +30.0 absolute |
| Self-Improving Coding Agent (2504.15228) | 2025 | Agent self-edits own code | LLM agent system | **17 -> 53** (Verified) | Initial: 17.0 | +36.0 absolute |
| ARTEMIS (2512.09108) | 2025 | Evolutionary optimization of agent configs | Mini-SWE Agent | +10.1% on SWE-Perf | Default config | +10.1% |
| EvoMAC (2410.16946) | 2024 | Textual backpropagation for multi-agent | MAC network | Outperforms SOTA | Prior MAC methods | -- |

**Key Insight**: SWE-bench Verified is THE standard benchmark for self-evolving coding agents. The progression from 17% to 65% in roughly one year (2024-2025) is remarkable. Darwin Godel Machine and Self-Improving Coding Agent both show that agents modifying their own code is a highly effective strategy. The fact that Mini-SWE-agent matches the full SWE-agent in 100 lines of Python suggests that the LLM matters more than the agent architecture.

**Surprising Finding**: Darwin Godel Machine's 30-point gain (20% to 50%) comes entirely from the agent modifying its own architecture -- discovering better code editing tools, long-context management, and peer-review mechanisms automatically.

---

### 2.3 LiveCodeBench (Code Generation -- pass@1 %)

| Paper | Year | Method | Model | Score Improvement |
|-------|------|--------|-------|-------------------|
| SAGE (2603.15255) | 2026 | Multi-Agent Co-evolution (Challenger/Planner/Solver/Critic) | Qwen-2.5-7B | **+8.9%** |
| SEW (2505.18646) | 2025 | Self-Evolving Workflows | Multi-agent auto-generated | **+33%** over backbone LLM |
| Self-Improving Coding Agent (2504.15228) | 2025 | Agent self-editing | LLM agent system | Additional gains reported |
| CoCoS (2505.23060) | 2025 | Online RL correction | 1B-scale | Significant improvement |

**Key Insight**: LiveCodeBench is emerging as the successor to HumanEval for code generation evaluation. SEW's 33% improvement through self-evolving multi-agent workflows is striking -- automatically discovering and optimizing agent architectures produces dramatically better results than fixed pipelines.

---

### 2.4 GAIA (General AI Assistant -- %)

| Paper | Year | Method | Score | Notes |
|-------|------|--------|-------|-------|
| OWL / CAMEL-AI (repo) | 2025 | Multi-agent workforce | **69.09%** | #1 open-source framework |
| OWL / CAMEL-AI (repo, v1) | 2025 | Multi-agent workforce | 58.18% | Earlier version |
| AutoAgent (2502.05957) | 2025 | Zero-code agent framework | Surpasses existing SOTA | Natural-language-only agent creation |
| WebEvolver (2504.21024) | 2025 | Co-evolving World Model | +10% over self-evolving baselines | On GAIA-web subset |

**Key Insight**: GAIA is becoming the go-to benchmark for general-purpose agent systems. The rapid progression from 58% to 69% by OWL in two months shows how quickly multi-agent self-evolving methods are improving. AutoAgent's result is notable because it creates agents entirely through natural language -- no code required.

---

### 2.5 MATH / Mathematical Reasoning

| Paper | Year | Method | Model | Score/Benchmark | Delta |
|-------|------|--------|-------|-----------------|-------|
| Deep Self-Evolving Reasoning (2510.17498) | 2025 | Probabilistic iterative reasoning (Markov chain) | DeepSeek-R1-0528-Qwen3-8B | Solves 5/9 previously unsolvable AIME 2024-2025 | Surpasses 600B teacher |
| Absolute Zero (2505.03335) | 2025 | Self-play with zero external data | AZR | SOTA on coding + math (zero data) | Outperforms models using tens of thousands of examples |
| RISE (2407.18219) | 2024 | Recursive introspection multi-turn RL | Llama2/Llama3/Mistral | Improves with more turns | Outperforms single-turn strategies |
| ReflectEvo (2505.16475) | 2025 | Iterative self-reflection learning | Llama-3 / Mistral | Llama-3: 52.4% -> 71.2% (BIG-bench) | +18.8 pts, no distillation |
| STaR (2203.14465) | 2022 | Bootstrapping reasoning with reasoning | Various | Comparable to 30x larger model on CommonsenseQA | Foundational self-improvement paper |
| STaR-SQL (2502.13550) | 2025 | Self-taught reasoning for Text-to-SQL | -- | 86.6% on Spider | +31.6% over few-shot, +18% over direct fine-tune |
| SCoRe (2409.12917) | 2024 | Multi-turn online RL | Gemini Pro | +15.6% on MATH | Self-generated data only |
| Agent0 (2511.16043) | 2025 | Zero-data co-evolution with tools | Qwen3-8B-Base | +18% on math reasoning | No external data |
| FLEX (2511.06449) | 2025 | Forward Learning from Experience | Various | AIME25: 40% -> 63% | +23 pts |
| SPIRAL (2506.24119) | 2025 | Self-play zero-sum games | Qwen/Llama families | Up to +10% across 8 reasoning benchmarks | Transferable reasoning |
| Multi-Agent Evolve (2510.23595) | 2025 | Proposer/Solver/Judge co-evolution | Qwen2.5-3B-Instruct | +4.54% average across benchmarks | Scalable, data-efficient |
| ARTEMIS (2512.09108) | 2025 | Evolutionary agent config optimization | MathTales-Teacher (Qwen2.5-7B) | +22% accuracy on GSM8K | Optimized without code changes |

**Key Insight**: Mathematical reasoning is the domain where self-evolution shines brightest. The most striking result is DSER (Deep Self-Evolving Reasoning) where an 8B model surpasses its 600B teacher -- a compelling demonstration that self-evolution can overcome scale limitations. Absolute Zero achieving SOTA with zero external data challenges the entire paradigm of relying on human-curated training sets.

---

### 2.6 AlpacaEval 2.0 (Instruction Following -- LC Win Rate %)

| Paper | Year | Method | Score | Notes |
|-------|------|--------|-------|-------|
| Self-Rewarding LMs (2401.10020) | 2024 | Iterative DPO with LLM-as-Judge | Outperforms Claude 2, Gemini Pro, GPT-4 0613 | Llama 2 70B fine-tuned |
| Meta-Rewarding (2407.19594) | 2024 | LLM-as-Meta-Judge | **22.9% -> 39.4%** (Llama-3-8B) | Self-improving alignment |
| EVOLVE (2502.05605) | 2025 | Iterative preference optimization | **62.3% LC win rate** on AlpacaEval 2 | Llama-3.1-8B surpasses Llama-3.1-405B-Instruct and GPT-4o |

**Surprising Finding**: EVOLVE's 62.3% LC win rate from an 8B model is extraordinary -- it surpasses both the 405B version of the same model family and GPT-4o. This is achieved through iterative self-refinement during both training and inference. The self-rewarding paradigm (where the model judges itself) shows consistent gains across three independent papers, suggesting it is a robust approach to self-improvement.

---

## 3. Web & Agent-Specific Benchmarks

### 3.1 WebArena / Web Agent Benchmarks

| Paper | Year | Benchmark | Score | Notes |
|-------|------|-----------|-------|-------|
| WebRL (2411.02337) | 2024 | WebArena-Lite | **4.8% -> 42.4%** (Llama-3.1-8B) | Surpasses GPT-4-Turbo (17.6%) |
| WebEvolver (2504.21024) | 2025 | Mind2Web-Live, WebVoyager, GAIA-web | +10% over self-evolving baselines | World model co-evolution |
| Native Agency (2604.18131) | 2026 | WebVoyager, WebWalker | +20% performance increase | Reward-free self-evolution |

**Key Insight**: WebRL's improvement from 4.8% to 42.4% on WebArena-Lite is the largest single improvement in any benchmark in this corpus. The fact that an 8B open-source model surpasses GPT-4-Turbo (17.6%) by 2.4x through self-evolving curriculum RL is a landmark result for the field.

### 3.2 OS-World / Computer Use

| Paper | Year | Score | Notes |
|-------|------|-------|-------|
| SEAgent (2508.04700) | 2025 | 11.3% -> 34.5% on OS-World | +23.2% improvement over UI-TARS |

### 3.3 ALFWorld (Interactive Decision-Making)

Mentioned in 6 papers (Reflexion, ExpeL, RISE, ICE, etc.) as a standard testbed for interactive agent learning. Reflexion and ExpeL both show significant improvements over base agents.

### 3.4 Minecraft / MineDojo (Embodied Agent)

| Paper | Year | Score | Notes |
|-------|------|-------|-------|
| Voyager (2305.16291) | 2023 | 3.3x more unique items, 2.3x longer distances, 15.3x faster tech tree milestones | Lifelong learning with skill library |

### 3.5 Settlers of Catan (Strategic Planning)

| Paper | Year | Score | Notes |
|-------|------|-------|-------|
| HexMachina (2506.04651) | 2025 | **54% win rate** vs AlphaBeta (strongest human-crafted baseline) | Artifact-centric continual learning |

---

## 4. Papers Introducing NEW Benchmarks

| Paper | Benchmark | Description | Year |
|-------|-----------|-------------|------|
| Building Self-Evolving Agents (2508.19005) | **StuLife** | Simulates a student's holistic college journey across 3 phases and 10 sub-scenarios for evaluating lifelong learning agents | 2025 |
| EvoMAC (2410.16946) | **rSDE-Bench** | Requirement-oriented software development benchmark with automatic evaluation of requirement correctness | 2024 |
| CORAL (2604.01658) | Various open problems | Uses Anthropic kernel engineering task (1363 -> 1103 cycles), math and algorithmic discovery tasks | 2026 |
| Self-Challenging (2506.01716) | **M3ToolEval**, **TauBench** | Multi-turn tool-use agent benchmarks; Code-as-Task format | 2025 |

---

## 5. Cross-Reference: Papers vs. GitHub Repos

### 5.1 Repos with Confirmed Benchmark Results

| Repo | Associated Paper(s) | Key Benchmarks | Status |
|------|---------------------|----------------|--------|
| allenai/SWE-agent | SWE-agent paper (2405.15793) | SWE-bench Verified: **65%** | Actively maintained, SoTA |
| camel-ai/owl | OWL technical report | GAIA: **69.09%** (#1 open-source) | Actively maintained |
| aiming-lab/agent0 | Agent0 (2511.16043) | Math: +18%, General: +24% | Confirmed in repo |
| human-agent-society/coral | CORAL (2604.01658) | 10 tasks SOTA, kernel eng. 1363->1103 | Confirmed in repo |
| gensi-thuair/flex | FLEX (2511.06449) | AIME25: 40%->63%, USPTO50k: 20%->30% | Confirmed in repo |
| algorithmicsuperintelligence/openevolve | OpenEvolve | Circle packing, algorithmic optimization | Actively maintained |
| budecosystem/claudeevolve | ClaudeEvolve | Circle packing WR: sum radii 2.635983 | Confirmed in repo |

### 5.2 Discrepancies Between Papers and Repos

| Finding | Details |
|---------|---------|
| **Paper claims often lack repo-level reproducibility** | Many papers report benchmark improvements but do not release reproducible evaluation code. Darwin Godel Machine (2505.22954) claims 20%->50% on SWE-bench but uses proprietary infrastructure. |
| **OW L's GAIA score evolved rapidly in the repo** | 58.18% (March 2025) -> 69.09% (April 2025) within one month, with customized toolkit optimizations not in the paper. |
| **SWE-agent: repo outperforms paper** | The SWE-agent repo now reports 65% on SWE-bench Verified (July 2025) with mini-swe-agent, far surpassing the original paper's results, showing rapid community iteration. |
| **FLEX repo confirms paper claims** | The gensi-thuair/flex repo provides test scripts for AIME25 and USPTO50k with reproducible evaluation, matching paper claims. |

---

## 6. Key Insights and Patterns

### 6.1 The "Standard" Benchmark Landscape

The field lacks a unified evaluation protocol. Only **HumanEval** and **SWE-bench** are used by more than 5 papers. Most papers introduce task-specific evaluations, making direct comparison nearly impossible. The Agent Self-Evolution community urgently needs:

1. A standardized benchmark suite (like HELM for general LLMs)
2. Agreed-upon metrics beyond pass@1 (efficiency, generalization, sample complexity)
3. Standardized baselines (what "base model" means varies wildly)

### 6.2 Which Methods Dominate Which Benchmarks?

| Benchmark Category | Dominant Approach | Why |
|--------------------|-------------------|-----|
| Code Generation (HumanEval, MBPP, LiveCodeBench) | **RL-based self-correction** (SCoRe, CoCoS, RISE) | Execution feedback is verifiable; iterative correction works reliably |
| Software Engineering (SWE-bench) | **Agent self-modification** (DGM, Self-Improving Coding Agent) | Agents that rewrite their own code discover strategies humans miss |
| Math Reasoning (MATH, AIME) | **Self-play / curriculum co-evolution** (Absolute Zero, DSER, Agent0, SAGE) | Generating progressively harder problems is effective for math |
| Web Agents (WebArena, GAIA) | **Self-evolving curriculum RL** (WebRL, WebEvolver) | Web environments provide rich, verifiable feedback |
| Instruction Following (AlpacaEval) | **Self-rewarding / preference optimization** (EVOLVE, Meta-Rewarding) | LLM-as-Judge provides cheap, scalable reward signal |

### 6.3 Surprising Results

1. **EVOLVE (8B) beats GPT-4o on AlpacaEval 2**: A Llama-3.1-8B model achieves 62.3% LC win rate through iterative self-refinement, surpassing models 50x its size. This challenges the assumption that scale is everything.

2. **DSER: 8B model beats its 600B teacher on AIME**: Deep Self-Evolving Reasoning shows that probabilistic iterative refinement allows small models to surpass their teachers through majority voting -- the self-evolution loop itself provides the "scale."

3. **WebRL: 8B open-source beats GPT-4-Turbo by 2.4x on WebArena**: From 4.8% to 42.4% through self-evolving curriculum RL. The model generates its own training tasks from failed attempts.

4. **Absolute Zero achieves SOTA with zero data**: The AZR system trains entirely from self-play, using a code executor as the only external tool. It outperforms models trained on tens of thousands of human-curated examples.

5. **Voyager's skill library compounds over time**: The Minecraft agent's discovered skills compose into increasingly complex behaviors. This is one of the few papers showing genuine open-ended learning, not just benchmark optimization.

6. **Agent architectures can transfer across domains**: ADAS (2408.08435) discovers agent designs in code that transfer across coding, science, and math domains, suggesting that some agent architectures are universally superior.

### 6.4 The "Self-Evolution Tax"

Most self-evolution methods come with a significant compute cost:
- Darwin Godel Machine requires maintaining an archive of agents and running evolutionary search
- SCoRe requires multi-turn RL training
- WebRL requires extensive curriculum generation
- SPIRAL requires self-play across many games

Only a few methods (STaR, ReflectEvo, DSER at inference) are lightweight enough for practical deployment. The field needs more research into **efficient self-evolution**.

### 6.5 The Verification Problem

A meta-observation: many "self-improving" methods rely on external verifiers (code executors, test suites, formal math verifiers). The benchmarks where self-evolution works best (code, math) are precisely those with cheap, reliable verification. Benchmarks without verifiers (open-ended generation, creative tasks, strategic planning) show much less convincing results. This suggests the bottleneck is not self-improvement per se, but **self-evaluation**.

---

## 7. Comprehensive Benchmark-Paper Matrix

| Benchmark | Papers |
|-----------|--------|
| HumanEval | Reflexion, Self-Refine, CoCoS, SCoRe, MGDebugger, ReflectEvo, Self-Debugging, and 8 more |
| SWE-bench | DGM, Self-Improving Coding Agent, SE-Agent, ARTEMIS, EvoMAC, CORAL, SWE-agent, WebRL |
| LiveCodeBench | SAGE, SEW, Self-Improving Coding Agent, CoCoS, and 5 more |
| GAIA | OWL, AutoAgent, WebEvolver, and 5 more |
| MATH | SCoRe, RISE, Absolute Zero, EVOLVE, ReflectEvo, DSER, Agent0, FLEX, SPIRAL, MAE, SAGE |
| AIME | DSER, Absolute Zero, FLEX, Agent0, SPIRAL |
| GSM8K | EVOLVE, ARTEMIS, STaR, ReflectEvo, Agent0 |
| MBPP | CoCoS, SCoRe, and 8 more |
| AlpacaEval 2 | Self-Rewarding LMs, Meta-Rewarding, EVOLVE |
| WebArena | WebRL, WebEvolver |
| Spider | STaR-SQL |
| ALFWorld | Reflexion, ExpeL, RISE, Agent-R, ICE |
| Minecraft | Voyager |
| OS-World | SEAgent |
| BIG-bench | ReflectEvo |
| Polyglot | Darwin Godel Machine (14.2% -> 30.7%) |
| AtCoder Heuristic | ARTEMIS (+13.6%) |
| OlympiadBench | SAGE (+10.7%) |
| Catanatron | HexMachina (54% win rate) |
| LoCoMo | Memory-R1 (+48% F1, +69% BLEU-1) |
| USPTO50k | FLEX (20% -> 30%) |
| StuLife | ELL framework (NEW benchmark) |
| rSDE-Bench | EvoMAC (NEW benchmark) |
| M3ToolEval | Self-Challenging (NEW benchmark) |
| TauBench | Self-Challenging (NEW benchmark) |
| Circle Packing (n=26) | AlphaEvolve, ThetaEvolve, ClaudeEvolve, OpenEvolve, CORAL |
| Kernel Engineering | CORAL (1363 -> 1103 cycles) |
| MIT Integration Bee | RLSR (Qwen 2.5 7B qualifies) |
| WebVoyager | Native Agency (+20%), WebEvolver |
| WebWalker | Native Agency (+20%) |
| Mind2Web-Live | WebEvolver |

---

*Generated: 2026-05-22 | Papers analyzed: 115 | GitHub repos cross-referenced: 348*
