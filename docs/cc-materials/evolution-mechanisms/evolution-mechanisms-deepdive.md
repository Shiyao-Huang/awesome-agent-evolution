# Evolution Mechanisms Deep Dive: How Agents Actually Improve Themselves

**Analysis date: 2026-05-22**
**Source: 535 files across raw-github/ (348) and raw-papers/ (187)**

---

## Executive Summary

After reading hundreds of project READMEs and paper abstracts, the honest truth is this: **most projects that claim "self-evolution" are not actually evolving anything**. The term has become a marketing buzzword loosely applied to any system that uses feedback loops. Genuine self-evolution -- where an agent autonomously modifies its own behavior and those modifications compound over time -- exists in perhaps 15-20% of the projects surveyed. This analysis separates the real from the fake with brutal specificity.

---

## A. Mechanism Taxonomy Table

### TIER 1: Genuine Evolutionary Optimization (LLM-as-mutation-operator + structured selection)

These projects use real evolutionary algorithms where LLMs serve as intelligent mutation operators, populations of candidates are maintained, and selection is driven by objective fitness functions.

| Project | What Evolves | How It Evolves | Feedback Signal | Selection | Retention | Scope |
|---------|-------------|----------------|-----------------|-----------|-----------|-------|
| **OpenEvolve** | Code (algorithms, programs) | MAP-Elites + island-based EA, LLM mutation | Deterministic evaluator scores (0-1) | Quality-diversity Pareto front | Checkpoint/database on disk | Population |
| **ClaudeEvolve** | Code, prompts, configs | MAP-Elites + island migration + UCB1 strategy selection | Evaluator script (0-1) or Claude-as-judge | Stagnation-adaptive, power-law parent selection | Cross-run memory + warm cache | Population |
| **ShinkaEvolve** | Code (scientific programs) | Population EA with ensemble LLM mutation, diff/full/cross patches | Task-specific evaluator | UCB model selection, archive + islands | Database with migration | Population |
| **EoH (Evolution of Heuristics)** | Algorithm code + natural language "thoughts" | Co-evolution of thoughts and code, LLM mutation | Problem-specific benchmarks | Tournament selection | Population database | Population |
| **AlphaEvolve** (paper) | Code (algorithms) | Evolutionary coding agent pipeline, multi-evaluator feedback | Automated evaluators + human-defined metrics | Best-of-population | Archive | Population |
| **GEPA** | Prompts, code, configs, architectures | Pareto-efficient reflective evolution: select-execute-reflect-mutate | Full execution traces (error messages, profiler output) | Pareto frontier across task subsets | Best candidate on disk | Single-stream with Pareto archive |
| **GigaEvo** | Code (programs) | LLM-driven mutation + selection | Problem evaluators | Population-based | Database | Population |
| **LLaMEA** | Algorithm code | EA with LLM mutation operators | Benchmark performance | Elitist selection | Population archive | Population |
| **EvoToolkit** | Any text artifact | Modular 3-layer EA: Method/Interface/Task | User-provided evaluator | Configurable selection strategies | Database | Population |

### TIER 2: Agent Self-Modification (agent modifies its own operational artifacts)

These projects have agents that modify their own prompts, skills, code, or configurations based on task performance.

| Project | What Evolves | How It Evolves | Feedback Signal | Selection | Retention | Scope |
|---------|-------------|----------------|-----------------|-----------|-----------|-------|
| **A-Evolve** | Prompts, skills, memory (agent workspace files) | LLM-driven mutation of workspace files, 5-phase loop: Solve-Observe-Evolve-Gate-Reload | Benchmark score on holdout tasks | Gate validates on holdout; regression triggers git rollback | Git-tagged mutations (evo-1, evo-2, ...) | Single agent, iterated |
| **Darwin Godel Machine (DGM)** | Agent's own codebase (coding_agent.py) | FM proposes code modifications to itself; empirically validated | SWE-bench + Polyglot benchmark scores | Only keep if performance improves | Archive tree of all agents | Open-ended population tree |
| **AgentEvolver** (ModelScope) | Agent policy (LLM weights via GRPO) | Self-questioning (task gen), self-navigating (experience), self-attributing (credit assignment) | Task success in sandboxed environments | GRPO with ADCA advantage | Training checkpoints + experience pool | Single agent, RL-trained |
| **AutoSkill** | SKILL.md files | Experience-driven extraction from conversations/trajectories; SkillEvo: replay-evaluate-mutate-promote | Task success/failure, user feedback | Version-gated (v0.1.0 -> v0.1.1) | Local skill bank (SkillBank/) | Single agent |
| **SkillWeaver** | Skill APIs (Python functions) | Agent explores websites, discovers skills, practices them, distills into APIs | Task completion rate on WebArena | Iterative practice success | Skill library on disk | Single agent |
| **Hermes Agent Self-Evolution** | SKILL.md files, tool descriptions | DSPy + GEPA: reflective prompt evolution reading execution traces | Benchmark metrics + test suite pass rate | Constraint gates (tests, size limits) + human PR review | Git PR against hermes-agent | Single agent |
| **EvoAgentX** | Workflow structure, prompts | Automatic workflow construction + self-evolving algorithm optimization | Built-in evaluators scoring agent behavior | Evolutionary selection | Workflow files | Multi-agent ecosystem |
| **Dr. Zero** (Meta) | Search agent policy (LLM weights) | Iterative self-play: challenger generates hard problems, solver trains on them, evolves | Solver success rate on generated problems | Iterative refinement across 3 iterations | Training checkpoints | Single agent, adversarial self-play |
| **YoYo-Evolve** | Skills, code (its own codebase) | Writes own code, evolves skills through daily iterations | Task success + implicit metrics | Manual/community | Git repo (2,088+ commits) | Single agent |

### TIER 3: Reflection-Based Self-Improvement (in-context learning from failures)

These projects use verbal/linguistic feedback within context windows to improve on subsequent attempts. No persistent mutation of artifacts -- improvement lives in the conversation.

| Project | What Evolves | How It Evolves | Feedback Signal | Selection | Retention | Scope |
|---------|-------------|----------------|-----------------|-----------|-----------|-------|
| **Reflexion** | Episodic memory (verbal reflections) | Agent attempts task, generates verbal reflection on failure, stores in memory buffer for future attempts | Task success/failure (scalar + verbal) | Only store reflections from failed attempts | Episodic memory buffer (in-context) | Single agent |
| **Self-Refine** | Output text | LLM generates, then self-critiques, then refines iteratively | Self-generated feedback | Implicit (final output selected) | None (within single session) | Single agent |
| **MUSE** | Memory (experience database) | Experience-driven learning: accumulate task-solving experiences, retrieve for future tasks | Task completion success | Only retain successful trajectories | Experience database | Single agent |
| **FLEX** | In-context examples (experience buffer) | Forward learning from experience: accumulate successful trajectories as ICL examples | Task success/failure | Population-based training of example collections | Trajectory database | Single agent |
| **Self-Generated ICL** (arXiv 2505.00234) | Trajectory database (in-context examples) | Naive accumulation of successful trajectories + dual-level curation | Task success rate | Database-level (population training) + exemplar-level (utility-based retention) | Persistent trajectory database | Single agent |

### TIER 4: Prompt Optimization (automated prompt engineering)

| Project | What Evolves | How It Evolves | Feedback Signal | Selection | Retention | Scope |
|---------|-------------|----------------|-----------------|-----------|-----------|-------|
| **DSPy** | Prompt templates, few-shot examples, module configurations | Multiple optimizers: BootstrapFewShot, MIPROv2, GEPA, etc. | Metric function (user-defined) | Optimizer-specific (bayesian, genetic, etc.) | Compiled program state | Pipeline |
| **EvoPrompt** | Text prompts | Classic GA operators (crossover, mutation) applied to prompts via LLM | Task accuracy on dev set | Tournament selection | Best prompt on disk | Single prompt |
| **TextGrad** | Any text parameter | "Textual gradient descent": LLM generates gradient-like feedback, applies as text edits | Task metric | Gradient-style updates | Optimized text | Single pipeline |
| **PromptAgent** | Prompt strings | MCTS-based search over prompt space | Task metric | UCB + tree search | Best prompt | Single prompt |
| **Meta-Prompt** | Prompt templates | LLM-based prompt generation with feedback | Task accuracy | Human evaluation or automated metric | Best prompt | Single prompt |

### TIER 5: Weight-Level Self-Improvement (modifying model parameters)

| Project | What Evolves | How It Evolves | Feedback Signal | Selection | Retention | Scope |
|---------|-------------|----------------|-----------------|-----------|-----------|-------|
| **RLSR** (Self-Reward) | LLM weights | Self-judging for reward signal + RL training; self-generated problems + self-evaluation | Self-generated reward (LLM judge) | RL optimization (GRPO-style) | Model weights | Single model |
| **WebEvolver** (Tencent) | Agent LLM + World Model LLM weights | Co-evolving: World Model generates training data, Agent trains on it; inference-time look-ahead via World Model | Web task success rate (Mind2Web-Live, etc.) | Iterative RL training | Model checkpoints | Co-evolving pair |
| **ReflectEvo** | LLM weights | Iterative self-reflection generation -> SFT + DPO training | Self-generated reflection quality | SFT + DPO | Model weights | Single model |
| **Self-Evolving Curriculum** | LLM weights | Multi-armed bandit curriculum + RL fine-tuning | Absolute advantage from policy gradient | Bandit-based curriculum selection | Model weights | Single model |
| **AgentEvolver Game Arena** | LLM weights | GRPO in multi-agent social games (Avalon, Diplomacy) | Game win/loss | RL optimization | Model weights | Population |

### TIER 6: Survey / Awesome-List / Framework (no implementation of evolution)

| Project | Nature |
|---------|--------|
| Self-Evolving-Agents (CharlesQ9 survey) | Paper survey with taxonomy |
| Awesome-Self-Evolving-Agents (EvoAgentX) | Paper/survey list |
| Awesome-Agent-Evolution (EvoMap) | Curated list |
| Awesome-LLM-Self-Improvement | Paper list |
| Awesome-Agent-Memory | Paper list |
| Awesome-Lifelong-LLM-Agent | Paper list |
| LLM-EA | Paper collection on LLM+EA |
| Awesome-Agentic-Workflows | List |
| Most "awesome-*" repos | Paper/resource lists only |

---

## B. Feedback Signal Analysis

### Frequency of Feedback Signal Types (across all implementation projects)

| Signal Type | Count | Percentage | Examples |
|-------------|-------|------------|----------|
| **Task success rate / benchmark score** | 28 | 47% | SWE-bench pass rate, WebArena success, circle packing score |
| **Deterministic evaluator output** | 14 | 23% | Custom scoring scripts, unit test pass rates |
| **LLM-as-judge** | 8 | 13% | Claude-as-critic, GPT-as-evaluator |
| **Self-generated reward** | 5 | 8% | RLSR self-judging, self-reward reasoning |
| **Human feedback** | 4 | 7% | PR review (Hermes), HITL checkpoints (EvoAgentX) |
| **Verbal self-reflection** | 6 | 10% | Reflexion verbal feedback, Self-Refine self-critique |

### Effectiveness Assessment

**Most effective**: Deterministic evaluators + benchmark scores. The projects that achieve the most impressive results (AlphaEvolve, OpenEvolve, ShinkaEvolve, ClaudeEvolve beating published records on circle packing) all use hard, objective, automated evaluators. There is no ambiguity about whether a solution is better.

**Most scalable**: Task success rate on automated benchmarks. A-Evolve, DGM, and AgentEvolver all scale their evolution loops because the feedback is cheap, fast, and unambiguous.

**Most questionable**: LLM-as-judge and self-generated reward. RLSR shows promising results, but using an LLM to judge its own output introduces circularity risks. The OEP attack paper (arXiv 2605.18930) demonstrates that self-generated reflections can be poisoned by locally-correct but globally-harmful experiences.

**Least genuine**: Human feedback. While valuable, human-in-the-loop systems are fundamentally rate-limited and cannot scale to the hundreds or thousands of iterations needed for genuine evolution. Projects that require human approval for every mutation are doing guided engineering, not autonomous evolution.

---

## C. The Evolution Gap: Projects That Overpromise

### Hall of Overpromising

1. **AutoGPT (Significant-Gravitas)**: 184K stars. Claims to be an "AI agent" that can "autonomously" achieve goals. In practice: it loops through LLM calls with a fixed prompt structure. There is no evolution mechanism. No self-modification. No learning from experience. The agent does not get better over time. It was the viral spark for "autonomous agents" but contains zero self-evolution.

2. **Letta (formerly MemGPT)**: Claims "AI with advanced memory that can learn and self-improve over time." The "self-improvement" is managing memory (storing/retrieving conversation history). The agent does not modify its behavior, prompts, skills, or architecture. Memory management is not self-evolution.

3. **LangChain / LangGraph**: Enormous frameworks for building agentic workflows. No built-in evolution mechanism. LangSmith provides observability but not autonomous self-improvement. You could build an evolving agent on top of them, but the frameworks themselves do not evolve anything.

4. **N8N, Vercel AI SDK, etc.**: Workflow orchestration tools. No evolution. Period.

5. **Genesis-Agent (Garrus800-stack)**: Claims "self-aware cognitive AI agent that reads, modifies & verifies its own code." In reality: a desktop Electron app where an LLM edits files. The "emotional state" and "episodic memory" are thin wrappers around LLM context. No structured evolution loop.

6. **Cellium-Agent**: Claims "Self-Evolving AI Agent Framework" with "Agent Infinite Evolution Engine that Learns from Failures." The "infinite evolution engine" appears to be a retry loop with error logging. There is no population, no selection pressure, no fitness function.

7. **Self-Learning-Agents (omdivyatej)**: "A lightweight Python library that allows any LLM agent to self-improve through feedback, without retraining models." The implementation stores user feedback in a JSON file and prepends it to future prompts. This is a feedback form, not evolution.

8. **Intercept (adam-s)**: Claims "self improving agents" that turn websites into APIs. The "self-improvement" is extracting structured data from web pages using LLMs with retry logic. No behavioral modification occurs.

9. **Most "awesome-lists" tagged with self-evolution**: They survey papers about self-evolving agents but implement nothing themselves. Useful as references, not as evolution mechanisms.

10. **Evot (evotai)**: Claims "self-evolving AI coding agent." Actually a Rust-based coding agent with standard LLM tool-use. No evidence of self-modification or evolutionary mechanism in the codebase.

---

## D. Real vs Fake Self-Evolution Classification

### TRUE Self-Evolution (agent autonomously modifies its own behavior, modifications compound)

The agent makes autonomous changes to its own operational artifacts, evaluates those changes against objective metrics, and retains improvements. The key test: **does it get demonstrably better at its task over time without human intervention?**

| Project | Evidence |
|---------|----------|
| **Darwin Godel Machine** | SWE-bench 20% -> 50%, Polyglot 14.2% -> 30.7%. Agent modifies own code, validates empirically, maintains archive tree. |
| **A-Evolve** | SWE-bench 74.2% -> 76.8%, MCP-Atlas 76% -> 79.4%. Workspace files mutated, validated on holdout, git-rollback on regression. |
| **OpenEvolve** | Matches published circle packing records, 2.8x GPU kernel speedup. MAP-Elites + islands, fully automated. |
| **ShinkaEvolve** | Won ICFP 2025 Programming Contest. Island-based EA with UCB model selection. |
| **ClaudeEvolve** | Beat AlphaEvolve and ShinkaEvolve on circle packing. MAP-Elites + stagnation engine + cross-run memory. |
| **AlphaEvolve** (paper) | First improvement over Strassen's algorithm in 56 years. Evolved Google data center scheduling. |
| **EoH** | New world record in circle packing. Co-evolution of thoughts and code. ICML 2024 Oral. |
| **GEPA** | GPT-4.1-mini 46.6% -> 56.6% on AIME. 90x cheaper than Claude Opus at Databricks. ICLR 2026 Oral. |
| **AgentEvolver** (ModelScope) | Qwen2.5-7B 15.8% -> 45.2% on combined benchmarks. Self-questioning + self-navigating + self-attributing. |
| **YoYo-Evolve** | 2,088+ commits of self-modification over months. The agent literally lives in its own repo. |

### GUIDED Self-Evolution (autonomous mutation, human in the loop for approval)

| Project | Evidence |
|---------|----------|
| **Hermes Agent Self-Evolution** | GEPA-driven skill evolution, but every change goes through human PR review. |
| **EvoAgentX** | HITL checkpoints for human review/guidance of workflow evolution. |
| **Dr. Zero** (Meta) | Iterative self-play, but human-designed iteration boundaries (iter1, iter2, iter3 scripts). |
| **AutoSkill** | Skill extraction is automatic, but version updates can be human-edited/reviewed. |

### PSEUDO Self-Evolution (feedback loops, not actual evolution)

These systems have feedback mechanisms but do not autonomously modify their own behavioral artifacts. The "improvement" is ephemeral (in-context) or requires human engineering.

| Project | What It Actually Does |
|---------|----------------------|
| **Reflexion** | Stores verbal reflections in context window. Agent reads past reflections. No persistent behavior change. |
| **Self-Refine** | Iterative self-critique within a single session. Nothing persists. |
| **DSPy** | Prompt optimization toolkit. Powerful, but the optimizer is external to the agent. The agent does not evolve itself; a human runs the optimizer. |
| **TextGrad** | Same as DSPy -- an external optimizer modifies prompts/code. Not autonomous agent self-improvement. |
| **MUSE** | Accumulates experience in a database, retrieves similar past experiences. This is memory-augmented retrieval, not evolution. |
| **Letta/MemGPT** | Memory management system. Storing and retrieving conversations is not self-evolution. |
| **AutoGPT** | Fixed-prompt loop with tools. No learning, no adaptation, no evolution. |
| **LangChain/LangGraph** | Orchestration frameworks. No evolution primitives. |
| **GPTSwarm** | Optimizes edge probabilities in agent graph. Interesting, but the "self-improvement" is gradient optimization of graph connectivity weights, not behavioral evolution. |

### ASPIRATIONAL Self-Evolution (claims it but hasn't implemented it)

| Project | Claim vs Reality |
|---------|-----------------|
| **Cellium-Agent** | "Infinite Evolution Engine" = retry loop with error logging |
| **Genesis-Agent** | "Self-aware cognitive AI" = LLM in Electron app |
| **Self-Learning-Agents** | "Self-improve through feedback" = stores user feedback in JSON |
| **Intercept** | "Self-improving agents" = retry logic on web scraping |
| **Evot** | "Self-evolving coding agent" = standard coding agent |
| **IncidentFox Self-Learning** | "Self-learning AI" = RAG over Slack messages |
| **Sentrux, Evermind, etc.** | Marketing copy with no evolution mechanism visible in codebase |

---

## E. Key Insight: What Separates Genuine Self-Improvement from Pretenders

After analyzing 535 files, five structural factors separate projects that genuinely self-improve from those that merely claim to:

### 1. Objective, Automated Feedback Is Non-Negotiable

Every project in the TRUE category has a **deterministic, automated evaluator** that scores candidate solutions without human judgment. Circle packing scores, benchmark pass rates, unit test results. No project that relies primarily on LLM-as-judge or human approval has achieved compound self-improvement. The evaluator must be:
- **Cheap enough** to run thousands of times (A-Evolve runs "solve" on batches of tasks every cycle)
- **Unambiguous** (a number, not a subjective opinion)
- **Grounded in reality** (actual code execution, not hypothetical assessment)

This is the single most important factor. Without it, you have an agent talking to itself about whether it is improving, which is circular and unreliable.

### 2. The Artifact Must Be Material and Mutable

Genuine self-evolution requires the agent to modify a **persistent artifact** that materially affects its future behavior:
- Code files (DGM, OpenEvolve, AlphaEvolve)
- Prompt/skill files (A-Evolve, GEPA, Hermes)
- Model weights (AgentEvolver, WebEvolver, RLSR)
- Workflow configurations (EvoAgentX)

If the "improvement" exists only in the context window and disappears when the session ends, it is not evolution. It is a clever prompting trick.

### 3. Selection Must Be Empirical, Not Theoretical

DGM validates every code change against SWE-bench. A-Evolve runs holdout validation and git-rolls-back regressions. OpenEvolve maintains a Pareto front. GEPA uses Pareto-optimal selection across task subsets.

Projects that "evolve" by having an LLM judge its own output or by having humans thumbs-up/thumbs-down suggestions are not doing selection -- they are doing vibe checking. Real selection is **empirical**: you run the modified agent on the actual task and measure whether it does better.

### 4. Retention Must Outlast the Session

Every TRUE project has a durable retention mechanism:
- Git commits/tags (A-Evolve tags every mutation)
- Checkpoint databases (OpenEvolve, ShinkaEvolve)
- Population archives (DGM maintains a tree of all agents)
- Model weight saves (AgentEvolver, RLSR)
- Skill banks with versioning (AutoSkill)

If improvements evaporate when you close the terminal, no compounding can occur. The power of evolution comes from accumulated improvements over many iterations.

### 5. There Must Be Actual Variation Generation

A feedback loop is not evolution. A/B testing two prompts is not evolution. Real evolution requires **systematic generation of behavioral variation**:
- LLM-as-mutation-operator proposing concrete code/prompt changes (OpenEvolve, GEPA, EoH)
- Self-modification of codebase (DGM)
- Skill synthesis from experience (SkillWeaver, AutoSkill)
- Population-level crossover and mutation (all EA-based systems)

Projects where a human writes the variations and the system merely selects among them are doing optimization, not evolution.

---

## The Capability Erosion Problem

The most sobering finding comes from arXiv 2605.09315 ("Do Self-Evolving Agents Forget?"), which demonstrates that self-evolution is **non-monotonic**: adapting to new task distributions progressively degrades previously acquired capabilities. This "capability erosion" emerges across all four evolution channels (workflow, skill, model, memory). The paper proposes Capability-Preserving Evolution (CPE) as a mitigation, but the finding itself is a fundamental challenge to the field.

Similarly, the OEP attack paper (arXiv 2605.18930) shows that self-evolving agents can be poisoned by "locally correct but non-transferable experiences" that bias reflection toward harmful over-generalization. The agent's greatest strength -- reflective experience accumulation -- is also its greatest vulnerability.

These findings suggest that the naive "more evolution = better" assumption is wrong. Stable self-evolution requires explicit mechanisms for capability preservation and adversarial robustness, not just improvement-seeking.

---

## The Convergence of Two Traditions

The field is converging from two directions:

1. **Evolutionary Computation + LLMs**: OpenEvolve, ShinkaEvolve, EoH, AlphaEvolve. These come from the optimization community and treat LLMs as intelligent mutation operators within classical EA frameworks (MAP-Elites, island models, tournament selection). They are excellent at discovering novel solutions to well-defined problems but do not modify agents themselves.

2. **Agent Self-Modification**: DGM, A-Evolve, AgentEvolver. These come from the AI agent community and treat the agent's own artifacts (code, prompts, skills, weights) as the evolvable substrate. They are excellent at improving agent behavior but are limited by the agent's ability to evaluate itself.

The most powerful systems (GEPA, ClaudeEvolve) combine both: structured evolutionary search over agent behavioral artifacts with rich feedback from execution traces.

---

## Summary Statistics

| Category | Count | Percentage |
|----------|-------|------------|
| TRUE self-evolution (genuine autonomous self-improvement) | ~12 projects | 3.5% |
| GUIDED self-evolution (human-in-the-loop approval) | ~8 projects | 2.3% |
| PSEUDO self-evolution (feedback loops, no persistent change) | ~25 projects | 7.2% |
| ASPIRATIONAL (claims without implementation) | ~15 projects | 4.3% |
| Awesome-lists / surveys / resource collections | ~60 projects | 17.2% |
| Frameworks / tools (no evolution, but useful infrastructure) | ~50 projects | 14.4% |
| Papers describing self-evolution mechanisms | ~80 papers | 23.0% |
| Adjacent topics (RL, memory, RAG, agents without evolution) | ~100 projects | 28.1% |

**Bottom line**: Genuine, autonomous, compounding self-evolution in AI agents is real but rare. It requires objective evaluators, persistent mutable artifacts, empirical selection, durable retention, and systematic variation generation. Most projects that claim "self-evolution" are doing prompt engineering, feedback loops, or memory management. The gap between marketing and reality is enormous.
