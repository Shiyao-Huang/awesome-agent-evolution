# Self Evolve & AI Self-Evolution: Comprehensive Research Report

> Generated: 2026-05-22
> Scope: GitHub open-source projects, HuggingFace, Papers With Code, benchmark datasets
> Methodology: GitHub search API, web scraping, repository deep-reads, cross-referencing

---

## Table of Contents

1. [OpenEvolve / AlphaEvolve Alternatives](#1-openevolve--alphaevolve-alternatives)
2. [Evolutionary Agent Projects](#2-evolutionary-agent-projects)
3. [LLM Self-Improvement Repos](#3-llm-self-improvement-repos)
4. [Code/Program Evolution with LLM](#4-codeprogram-evolution-with-llm)
5. [Self-Refine Implementations](#5-self-refine-implementations)
6. [Reflexion Agent Implementations](#6-reflexion-agent-implementations)
7. [Tree of Thought Implementations](#7-tree-of-thought-implementations)
8. [Neural Architecture Search with LLM (NAS-LLM)](#8-neural-architecture-search-with-llm-nas-llm)
9. [AutoML with Evolutionary Approaches](#9-automl-with-evolutionary-approaches)
10. [HuggingFace, Papers With Code & Benchmarks](#10-huggingface-papers-with-code--benchmarks)
11. [Extended Landscape: Top Repos by Stars](#11-extended-landscape-top-repos-by-stars)
12. [Summary & Key Findings](#12-summary--key-findings)

---

## 1. OpenEvolve / AlphaEvolve Alternatives

These projects implement or replicate Google DeepMind's AlphaEvolve concept: using LLM-guided evolutionary algorithms to discover and optimize code/algorithms.

### 1.1 algorithmicsuperintelligence/openevolve

| Field | Value |
|---|---|
| **URL** | https://github.com/algorithmicsuperintelligence/openevolve |
| **Stars** | ~500+ (growing rapidly) |
| **Language** | Python |
| **License** | Apache 2.0 |
| **Last Updated** | 2026-05-20 |
| **PyPI** | `pip install openevolve` |

**Key Features:**
- Most advanced open-source evolutionary coding agent
- Island-based evolution with MAP-Elites quality-diversity optimization
- Multi-language support (Python, R, Rust, etc.)
- Cascade evaluation pattern (3-stage: quick validation, basic perf, comprehensive)
- `EVOLVE-BLOCK-START` / `EVOLVE-BLOCK-END` markers for specifying evolution zones
- Diff-based and full-rewrite mutation strategies
- Checkpoint/resume capability
- Parallel evaluation via ProcessPoolExecutor
- LLM ensemble approach with configurable weights and async generation

**Technical Stack:**
- Python >=3.10
- OpenAI-compatible APIs (works with any LLM backend)
- YAML-based configuration
- unittest testing framework
- Black code formatting

**Architecture:**
- `Controller` - Main orchestrator managing evolution process
- `Database` - MAP-Elites with island-based evolution and migration
- `Evaluator` - Cascade evaluation with threshold gates
- `LLM Integration` - Ensemble with retry logic
- `Iteration` - Worker process for sampling, mutation, evaluation

**Relation to Self Evolve:** Direct open-source implementation of AlphaEvolve's evolutionary coding paradigm. Programs evolve through LLM-guided mutations across isolated island populations with periodic migration. The closest open-source analogue to a "self-evolving code system."

---

### 1.2 inter-co/science-codeevolve

| Field | Value |
|---|---|
| **URL** | https://github.com/inter-co/science-codeevolve |
| **Stars** | 97 |
| **Language** | Python |
| **License** | Apache 2.0 |
| **Last Updated** | 2026-04-08 |
| **Paper** | arXiv 2510.14150 |

**Key Features:**
- CodeEvolve v0.3.1 - Islands-based genetic algorithm with modular evolutionary operators
- Inspiration-based Crossover operator
- Meta-prompting Exploration strategy
- Depth-based Exploitation strategy
- MAP-Elites Integration for quality-diversity
- Distributed architecture with islands coordinator, migration logic, synchronization
- OpenAI-compatible API support, ensemble LLM support

**Technical Stack:**
- Python, conda environment
- Core modules: `cli.py`, `runner.py`, `evolution.py`, `database.py`, `scheduler.py`, `evaluator.py`
- Islands subsystem: `islands/sync.py`, `islands/graph.py`, `islands/migration.py`
- LLM layer: `lm/base.py`, `lm/openai.py`
- Prompt system: `prompt/sampler.py`, `prompt/template.py`

**Benchmarks:** Competes with or exceeds AlphaEvolve on autocorrelation inequalities, packing problems, and Heilbronn problems.

**Relation to Self Evolve:** Research-grade evolutionary code synthesis platform. Islands-based architecture with migration topology enables distributed self-improving code search. Paper-backed with rigorous evaluation.

---

### 1.3 gratitude5dee/OpenEvolve

| Field | Value |
|---|---|
| **URL** | https://github.com/gratitude5dee/OpenEvolve |
| **Stars** | 2 |
| **Language** | TypeScript |
| **Last Updated** | 2025-07-06 |
| **Award** | 1st Place AI Safety @ AGI SF |

**Key Features:**
- Prompt Sampler, LLM Ensemble, Evaluator Pool, Program Database architecture
- Multi-language code evolution support
- Multi-objective optimization
- Distributed evaluation
- Checkpointing/resuming with Docker support
- Async pipeline architecture

**Technical Stack:**
- TypeScript/Node.js
- `config.yaml` with model configs (e.g., gemini-2.0-flash-lite)
- population_size: 500, num_islands: 5 defaults
- Docker containerization

**Benchmarks:** Successfully replicated AlphaEvolve circle packing n=26 results (SOTA).

**Relation to Self Evolve:** TypeScript-based alternative to Python OpenEvolve implementations. Demonstrates the evolutionary coding paradigm is language-agnostic.

---

### 1.4 ryanrudes/openevolve

| Field | Value |
|---|---|
| **URL** | https://github.com/ryanrudes/openevolve |
| **Stars** | 3 |
| **Language** | Python |
| **License** | MIT |
| **Last Updated** | 2025-06-09 |

**Key Features:**
- Codebase-scale evolutionary program synthesis inspired by AlphaEvolve
- Based on original FunSearch code (Apache License 2.0)
- Authors: Ryan Rudes, James Hou, Aditya Mehta

**Relation to Self Evolve:** Academic/educational implementation bridging FunSearch and AlphaEvolve concepts.

---

### 1.5 Other OpenEvolve Variants

| Repo | Stars | Language | Notes |
|---|---:|---|---|
| [carlos-life/OpenEvolve](https://github.com/carlos-life/OpenEvolve) | 0 | Python | Updated 2025-03-15 |
| [ishanwen-byte/openevolve-go](https://github.com/ishanwen-byte/openevolve-go) | 0 | Go | Updated 2025-12-17 |
| [gogolB/evocoder](https://github.com/gogolB/evocoder) | 4 | Python | Updated 2025-05-24 |

---

## 2. Evolutionary Agent Projects

Projects where AI agents themselves evolve their behavior, skills, or architecture over time.

### 2.1 lsdefine/GenericAgent

| Field | Value |
|---|---|
| **URL** | https://github.com/lsdefine/GenericAgent |
| **Stars** | 11,837 |
| **Language** | Python |
| **Last Updated** | 2026-05-20 |

**Key Features:** Self-evolving agent that grows a skill tree from a 3.3K-line seed, achieving full system control with 6x less token consumption.

**Relation to Self Evolve:** Demonstrates the "seed evolution" concept - starting from a minimal seed and autonomously growing capabilities through skill acquisition.

---

### 2.2 EvoMap/evolver

| Field | Value |
|---|---|
| **URL** | https://github.com/EvoMap/evolver |
| **Stars** | 7,507 |
| **Language** | JavaScript |
| **Last Updated** | 2026-05-20 |

**Key Features:** GEP-powered (Gene Expression Programming) self-evolving engine for AI agents. Auditable evolution with Genes, Capsules, and Events.

**Relation to Self Evolve:** Production-grade evolutionary engine with auditable gene/capsule/event architecture. Provides the infrastructure layer for agent evolution.

---

### 2.3 EvoAgentX/EvoAgentX

| Field | Value |
|---|---|
| **URL** | https://github.com/EvoAgentX/EvoAgentX |
| **Stars** | 3,023 |
| **Language** | Python |
| **Last Updated** | 2026-05-19 |

**Key Features:** Self-evolving ecosystem of AI agents. Framework for building multi-agent systems that co-evolve.

**Relation to Self Evolve:** Multi-agent co-evolution platform - agents evolve not in isolation but as an ecosystem.

---

### 2.4 jennyzzt/dgm (Darwin Godel Machine)

| Field | Value |
|---|---|
| **URL** | https://github.com/jennyzzt/dgm |
| **Stars** | 2,054 |
| **Language** | Python |
| **Last Updated** | 2026-05-20 |

**Key Features:** Darwin Godel Machine - Open-Ended Evolution of Self-Improving Agents. Combines Darwinian evolution with Godel's self-reference concept.

**Relation to Self Evolve:** Theoretically grounded approach to open-ended self-improvement. Agents can modify their own code and verify improvements.

---

### 2.5 facebookresearch/HyperAgents

| Field | Value |
|---|---|
| **URL** | https://github.com/facebookresearch/HyperAgents |
| **Stars** | 2,503 |
| **Language** | Python |
| **Last Updated** | 2026-05-20 |

**Key Features:** Self-referential self-improving agents that can optimize for any computable task. From Meta/Facebook Research.

**Relation to Self Evolve:** Industry-backed research into self-referential agent improvement. Key contribution is the formalization of "any computable task" optimization.

---

### 2.6 Other Notable Evolutionary Agent Projects

| Repo | Stars | Language | Key Feature |
|---|---:|---|---|
| [HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace) | 6,277 | Python | Self-evolving agents community platform |
| [aiwaves-cn/agents](https://github.com/aiwaves-cn/agents) | 5,927 | Python | Data-centric self-evolving autonomous agents |
| [NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution) | 3,401 | Python | Evolutionary self-improvement using DSPy + GEPA |
| [metauto-ai/GPTSwarm](https://github.com/metauto-ai/GPTSwarm) | 998 | Python | Self-improving agents with RL / Re-prompting |
| [modelscope/AgentEvolver](https://github.com/modelscope/AgentEvolver) | 1,442 | Python | Efficient self-evolving agent system |
| [AMAP-ML/SkillClaw](https://github.com/AMAP-ML/SkillClaw) | 1,390 | Python | Skills that evolve collectively |
| [yologdev/yoyo-evolve](https://github.com/yologdev/yoyo-evolve) | 1,764 | Rust | Self-evolving AI coding agent |
| [sentrux/sentrux](https://github.com/sentrux/sentrux) | 2,357 | Rust | Recursive self-improvement of code quality |
| [OshriNap/_evolution_-_agent_](https://github.com/OshriNap/_evolution_-_agent_) | 0 | Python | Research evolution agent |
| [A-EVO-Lab/a-evolve](https://github.com/A-EVO-Lab/a-evolve) | 549 | Python | Agentic Evolution for evolving LLMs |
| [Tencent/SelfEvolvingAgent](https://github.com/Tencent/SelfEvolvingAgent) | 100 | Python | Tencent AI Lab self-evolving agents |

---

## 3. LLM Self-Improvement Repos

Projects focused on LLMs improving their own outputs, prompts, or reasoning processes.

### 3.1 dongxiangjue/Awesome-LLM-Self-Improvement

| Field | Value |
|---|---|
| **URL** | https://github.com/dongxiangjue/Awesome-LLM-Self-Improvement |
| **Stars** | 106 |
| **Type** | Curated paper list |
| **Last Updated** | 2026-05-19 |

**Key Features:** Comprehensive curated list of LLM inference-time self-improvement papers.

**Relation to Self Evolve:** Reference index for the broader field of LLM self-improvement research.

---

### 3.2 EvoAgentX/Awesome-Self-Evolving-Agents

| Field | Value |
|---|---|
| **URL** | https://github.com/EvoAgentX/Awesome-Self-Evolving-Agents |
| **Stars** | 2,162 |
| **Type** | Survey/resource list |
| **Last Updated** | 2026-05-20 |

**Key Features:** "A Comprehensive Survey of Self-Evolving AI Agents: A New Paradigm Bridging Foundation Models and Lifelong Agentic Systems"

**Relation to Self Evolve:** The authoritative survey list for the entire self-evolving agent field.

---

### 3.3 CharlesQ9/Self-Evolving-Agents

| Field | Value |
|---|---|
| **URL** | https://github.com/CharlesQ9/Self-Evolving-Agents |
| **Stars** | 1,128 |
| **Type** | Resource list |
| **Last Updated** | 2026-05-19 |

**Key Features:** Survey/resource list for self-evolving agents on the path to artificial super intelligence.

---

### 3.4 Other LLM Self-Improvement Projects

| Repo | Stars | Language | Key Feature |
|---|---:|---|---|
| [kayba-ai/recursive-improve](https://github.com/kayba-ai/recursive-improve) | 194 | Python | Make agents recursively self-improve |
| [keskival/recursive-self-improvement-suite](https://github.com/keskival/recursive-self-improvement-suite) | 46 | Python | Suite of open-ended tasks for bootstrapped self-improvement |
| [ngoodman/metaprompt](https://github.com/ngoodman/metaprompt) | 88 | Python | Meta-prompt: simple self-improving language agent |
| [mbchang/meta-prompt](https://github.com/mbchang/meta-prompt) | 65 | Jupyter | LangChain re-implementation of Meta-Prompt |

---

## 4. Code/Program Evolution with LLM

Projects where LLMs evolve, optimize, or synthesize code through evolutionary processes.

### 4.1 algorithmicsuperintelligence/openevolve (Primary)

(Covered in Section 1.1 - the flagship project in this category)

### 4.2 symflower/eval-dev-quality

| Field | Value |
|---|---|
| **URL** | https://github.com/symflower/eval-dev-quality |
| **Stars** | 185 |
| **Language** | Go |
| **Last Updated** | 2026-05 |

**Key Features:** Framework to compare and evolve code generation quality of LLMs. Notable for "evolve" in its mission.

**Relation to Self Evolve:** Evaluates and evolves code generation quality - bridges evaluation and evolution.

---

### 4.3 ForrestXie9/LLM-SAEA

| Field | Value |
|---|---|
| **URL** | https://github.com/ForrestXie9/LLM-SAEA |
| **Stars** | 1 |
| **Language** | Python |
| **Last Updated** | 2025-06-23 |

**Key Features:** LLM-based Self-Adaptive Evolutionary Algorithm for code optimization.

**Relation to Self Evolve:** Combines LLM guidance with self-adaptive evolutionary algorithms for code-level optimization.

---

### 4.4 evotai/evot

| Field | Value |
|---|---|
| **URL** | https://github.com/evotai/evot |
| **Stars** | 54 |
| **Language** | Rust |
| **Last Updated** | 2026-05-20 |

**Key Features:** Self-evolving AI coding agent for long-running, complex software engineering tasks.

**Relation to Self Evolve:** Production-grade self-evolving coding agent built in Rust for performance-critical evolution loops.

---

### 4.5 Other Code Evolution Projects

| Repo | Stars | Language | Key Feature |
|---|---:|---|---|
| [deepelementlab/clawcode](https://github.com/deepelementlab/clawcode) | 199 | Python | Claude Code-inspired with experience-based evolution |
| [autohandai/code-cli](https://github.com/autohandai/code-cli) | 110 | TypeScript | Ultra fast self-evolving coding agent CLI |
| [CrystalHu940106/evolve-ea-shinka](https://github.com/CrystalHu940106/evolve-ea-shinka) | 1 | Python | Evolutionary algorithm with Shinka approach |
| [FUYOH666/Plague-InGG](https://github.com/FUYOH666/Plague-InGG) | 0 | Python | Evolutionary code generation research |

---

## 5. Self-Refine Implementations

Projects implementing the Self-Refine paradigm: LLMs generate feedback on their own work, use it to improve, and iterate.

### 5.1 madaan/self-refine

| Field | Value |
|---|---|
| **URL** | https://github.com/madaan/self-refine |
| **Stars** | 805 |
| **Language** | Python |
| **Last Updated** | 2024-10-04 (mature/stable) |

**Key Features:**
- Official implementation of the Self-Refine paper
- Iterative feedback-generation-improvement loop
- LLM acts as both generator and critic
- Multiple refinement iterations with configurable stopping criteria
- Works with any instruction-following LLM

**Technical Stack:**
- Python
- OpenAI API (or compatible)
- Prompt templates for feedback and refinement

**Relation to Self Evolve:** Self-Refine is a foundational technique for self-evolving systems. The iterative generate-feedback-improve cycle is a core building block of larger self-evolution architectures.

---

### 5.2 naivoder/MCTSr (Monte Carlo Tree Search Self-Refine)

| Field | Value |
|---|---|
| **URL** | https://github.com/naivoder/MCTSr |
| **Stars** | 22 |
| **Language** | Python |
| **Last Updated** | 2025-10-06 |

**Key Features:** Combines Monte Carlo Tree Search with Self-Refine for improved mathematical reasoning.

**Relation to Self Evolve:** Extends Self-Refine with structured search (MCTS), enabling more systematic exploration of the improvement space.

---

## 6. Reflexion Agent Implementations

Projects implementing Reflexion: verbal reinforcement learning where agents learn from past failures through natural language reflections.

### 6.1 noahshinn/reflexion

| Field | Value |
|---|---|
| **URL** | https://github.com/noahshinn/reflexion |
| **Stars** | 3,155 |
| **Language** | Python |
| **Last Updated** | 2026-05-19 |
| **Venue** | NeurIPS 2023 |

**Key Features:**
- Official Reflexion implementation
- Language agents with verbal reinforcement learning
- Agents store linguistic reflections from past failures
- Reflections guide future decision-making
- No weight updates required - learning happens through context

**Technical Stack:**
- Python
- LLM API integration
- Evaluation harness for standard agent benchmarks

**Relation to Self Evolve:** Reflexion provides the "experience accumulation" layer for self-evolving agents. Agents build a growing memory of reflections that improve their performance over time without model retraining.

---

### 6.2 noahshinn/reflexion-draft

| Field | Value |
|---|---|
| **URL** | https://github.com/noahshinn/reflexion-draft |
| **Stars** | 388 |
| **Language** | Python |
| **Last Updated** | 2026-04-16 |

**Key Features:** Earlier/draft version with dynamic memory and self-reflection capabilities.

---

### 6.3 hwfengcs/DM-Code-Agent

| Field | Value |
|---|---|
| **URL** | https://github.com/hwfengcs/DM-Code-Agent |
| **Stars** | 135 |
| **Language** | Python |
| **Last Updated** | 2026-05-11 |

**Key Features:**
- Lightweight auditable Python code agent (~1500 LOC)
- ReAct + Planner + Reflexion + Hybrid RAG
- SWE-bench Lite evaluation with trace replay

**Relation to Self Evolve:** Production-oriented integration of Reflexion into a code agent, demonstrating practical application of verbal RL in software engineering tasks.

---

### 6.4 faveos8758/reflexion-agent-ts

| Field | Value |
|---|---|
| **URL** | https://github.com/faveos8758/reflexion-agent-ts |
| **Stars** | 20 |
| **Language** | TypeScript |
| **Last Updated** | 2026-04-19 |

**Key Features:** TypeScript implementation of Reflexion with custom evaluators, reflexion memory, HTTP API, CLI. Built with Vercel AI SDK.

---

## 7. Tree of Thought Implementations

Projects implementing Tree of Thoughts (ToT): deliberate problem solving by exploring multiple reasoning paths with LLMs.

### 7.1 princeton-nlp/tree-of-thought-llm

| Field | Value |
|---|---|
| **URL** | https://github.com/princeton-nlp/tree-of-thought-llm |
| **Stars** | 6,000 |
| **Language** | Python |
| **Last Updated** | 2025-01-16 (mature) |

**Key Features:**
- Official Tree of Thoughts implementation from Princeton NLP
- Explores multiple reasoning paths using search algorithms (BFS, DFS)
- LLMs evaluate and select promising thought branches
- Significantly outperforms chain-of-thought prompting on planning tasks

**Technical Stack:**
- Python
- OpenAI API
- Search algorithms (BFS, DFS) for thought tree traversal

**Relation to Self Evolve:** ToT provides the structured search component for self-evolving systems. When combined with evolutionary approaches, ToT enables systematic exploration of the solution space rather than random mutation alone.

---

### 7.2 dave1010/tree-of-thought-prompting

| Field | Value |
|---|---|
| **URL** | https://github.com/dave1010/tree-of-thought-prompting |
| **Stars** | 817 |
| **Last Updated** | Active |

**Key Features:** Practical guide and implementation of ToT prompting techniques for real-world applications.

---

### 7.3 jieyilong/tree-of-thought-puzzle-solver

| Field | Value |
|---|---|
| **URL** | https://github.com/jieyilong/tree-of-thought-puzzle-solver |
| **Stars** | 374 |
| **Language** | Python |
| **Last Updated** | Active |

**Key Features:** ToT applied to puzzle-solving, demonstrating the paradigm on constraint satisfaction problems.

---

## 8. Neural Architecture Search with LLM (NAS-LLM)

Projects combining neural architecture search with LLM guidance.

### 8.1 LLMENAS/LLMENAS

| Field | Value |
|---|---|
| **URL** | https://github.com/LLMENAS/LLMENAS |
| **Stars** | 2 |
| **Language** | Python |
| **Last Updated** | 2026-03-23 |

**Key Features:** LLM-Enhanced Neural Architecture Search - using LLMs to guide the search for optimal neural network architectures.

**Relation to Self Evolve:** Represents the intersection of NAS and LLMs, where the LLM acts as a search guide rather than a traditional RL/supervised controller.

---

### 8.2 baigeixiaowang/LLM-ENAS-PKB

| Field | Value |
|---|---|
| **URL** | https://github.com/baigeixiaowang/LLM-ENAS-PKB |
| **Stars** | 1 |
| **Language** | Python |

**Key Features:** LLM-guided Efficient Neural Architecture Search with Prior Knowledge Base.

---

**Note on NAS-LLM:** This is an emerging and relatively sparse category on GitHub. Most NAS-LLM work remains in paper form (arXiv) rather than open-source implementations. The field is expected to grow significantly as LLMs become more capable of understanding and manipulating neural architectures.

---

## 9. AutoML with Evolutionary Approaches

Projects combining automated machine learning with evolutionary algorithms.

### 9.1 AgileRL/AgileRL

| Field | Value |
|---|---|
| **URL** | https://github.com/AgileRL/AgileRL |
| **Stars** | 919 |
| **Language** | Python |
| **Last Updated** | 2026-05 (actively maintained) |

**Key Features:**
- Full-stack AutoRL framework with evolutionary optimization
- Population-based training with evolutionary strategies
- Supports multi-agent reinforcement learning
- Co-evolution of agent populations

**Relation to Self Evolve:** Demonstrates evolutionary approaches applied to the full RL pipeline, from architecture search to hyperparameter optimization to training strategy.

---

### 9.2 rodrigo-arenas/Sklearn-genetic-opt

| Field | Value |
|---|---|
| **URL** | https://github.com/rodrigo-arenas/Sklearn-genetic-opt |
| **Stars** | 361 |
| **Language** | Python |
| **Last Updated** | 2026-03-31 |

**Key Features:** Genetic algorithm-based hyperparameter optimization for scikit-learn pipelines. Evolutionary search over ML pipeline configurations.

---

### 9.3 EMI-Group/evorl

| Field | Value |
|---|---|
| **URL** | https://github.com/EMI-Group/evorl |
| **Stars** | 322 |
| **Language** | Python |
| **Last Updated** | 2026-04-05 |

**Key Features:** Evolutionary Reinforcement Learning framework. Combines evolution strategies with RL for policy optimization.

---

### 9.4 hengzhe-zhang/Evolutionary_Forest

| Field | Value |
|---|---|
| **URL** | https://github.com/hengzhe-zhang/Evolutionary_Forest |
| **Stars** | 161 |
| **Language** | Python |
| **Last Updated** | 2026-04-08 |

**Key Features:** Evolutionary random forest for AutoML. Uses genetic programming to evolve decision tree ensembles.

---

### 9.5 Other AutoML-Evolutionary Projects

| Repo | Stars | Language | Key Feature |
|---|---:|---|---|
| [Evolutionary-Intelligence/SAEI](https://github.com/Evolutionary-Intelligence/SAEI) | 152 | TeX | Survey of automated evolutionary intelligence |
| [aimclub/FEDOT.Web](https://github.com/aimclub/FEDOT.Web) | 39 | JavaScript | Evolutionary AutoML web interface |
| [NeteaseFuxiRL/wuji](https://github.com/NeteaseFuxiRL/wuji) | 28 | Python | Evolutionary RL from NetEase |
| [chakkritte/EEEA-Net](https://github.com/chakkritte/EEEA-Net) | 18 | Python | Evolutionary efficient architecture search |
| [miguelrabuge/fedora](https://github.com/miguelrabuge/fedora) | 6 | Python | Federated evolutionary optimization |
| [TuDo1403/TF-MOENAS](https://github.com/TuDo1403/TF-MOENAS) | 6 | Python | Multi-objective evolutionary NAS with TensorFlow |

---

## 10. HuggingFace, Papers With Code & Benchmarks

### 10.1 HuggingFace Search Results

**Status: Largely unsuccessful**

| Resource Type | Query | Result |
|---|---|---|
| Models | "self evolve evolutionary code" | 0 results |
| Models | "evolutionary algorithm code optimization" | 0 results |
| Spaces | "evolutionary code generation" | 403 Forbidden |
| Datasets | "evolutionary benchmark code optimization" | 0 results |

**Analysis:** HuggingFace's search indexes focus on model architectures and fine-tuned weights rather than algorithmic/evolutionary tooling. Evolutionary coding agents are typically distributed as GitHub repos with pip/conda packages, not as HF models. This is a gap in the ecosystem.

### 10.2 Papers With Code

**Status: Redirects to HuggingFace**

Papers With Code has been integrated into HuggingFace. Direct searches for evolutionary code optimization papers redirect to `huggingface.co/papers`. Relevant papers should be searched via:
- arXiv (search: "AlphaEvolve", "self-evolving agents", "evolutionary code")
- Semantic Scholar
- Google Scholar

### 10.3 Benchmark Datasets & Frameworks

| Repo | Stars | Description |
|---|---:|---|
| [NewtonGomez/evobench](https://github.com/NewtonGomez/evobench) | 0 | Framework for benchmarking EAs against baselines |
| [OpenDataBox/Workspace-Bench](https://github.com/OpenDataBox/Workspace-Bench) | 13 | Benchmark self-evolving agents on realistic large-scale file workspaces |
| [pinchbench/skill](https://github.com/pinchbench/skill) | 1,200 | Benchmarking system for evaluating LLM models as coding agents |
| [tongye98/Awesome-Code-Benchmark](https://github.com/tongye98/Awesome-Code-Benchmark) | 225 | Comprehensive code domain benchmark review |
| [symflower/eval-dev-quality](https://github.com/symflower/eval-dev-quality) | 185 | Framework to compare and evolve code generation quality |

**Gap Analysis:** There is no widely-adopted, standardized benchmark specifically for evolutionary coding agents / LLM-guided evolutionary algorithms. The closest are general LLM coding benchmarks (SWE-bench, HumanEval) and specialized algorithmic optimization problems used in AlphaEvolve/FunSearch papers (circle packing, autocorrelation inequalities, Heilbronn problems).

---

## 11. Extended Landscape: Top Repos by Stars

The broader self-evolving agent landscape extends well beyond the 10 search categories. Here are the top repos discovered across all searches:

| Rank | Repo | Stars | Category |
|---:|---|---:|---|
| 1 | [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 24,247 | Agent context database |
| 2 | [letta-ai/letta](https://github.com/letta-ai/letta) | 22,833 | Stateful agents with memory |
| 3 | [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | 11,837 | Self-evolving skill tree agent |
| 4 | [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 9,211 | Self-evolving memory OS |
| 5 | [EvoMap/evolver](https://github.com/EvoMap/evolver) | 7,507 | GEP self-evolving engine |
| 6 | [princeton-nlp/tree-of-thought-llm](https://github.com/princeton-nlp/tree-of-thought-llm) | 6,000 | Tree of Thoughts (official) |
| 7 | [HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace) | 6,277 | Self-evolving agents platform |
| 8 | [aiwaves-cn/agents](https://github.com/aiwaves-cn/agents) | 5,927 | Data-centric self-evolving agents |
| 9 | [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 5,128 | Long-term memory for self-evolving agents |
| 10 | [noahshinn/reflexion](https://github.com/noahshinn/reflexion) | 3,155 | Reflexion (NeurIPS 2023) |
| 11 | [EvoAgentX/EvoAgentX](https://github.com/EvoAgentX/EvoAgentX) | 3,023 | Self-evolving agent ecosystem |
| 12 | [facebookresearch/HyperAgents](https://github.com/facebookresearch/HyperAgents) | 2,503 | Self-referential self-improving agents |
| 13 | [EvoAgentX/Awesome-Self-Evolving-Agents](https://github.com/EvoAgentX/Awesome-Self-Evolving-Agents) | 2,162 | Survey of self-evolving agents |
| 14 | [jennyzzt/dgm](https://github.com/jennyzzt/dgm) | 2,054 | Darwin Godel Machine |
| 15 | [sentrux/sentrux](https://github.com/sentrux/sentrux) | 2,357 | Recursive self-improvement (Rust) |
| 16 | [CharlesQ9/Self-Evolving-Agents](https://github.com/CharlesQ9/Self-Evolving-Agents) | 1,128 | Resource list for ASI path |
| 17 | [madaan/self-refine](https://github.com/madaan/self-refine) | 805 | Self-Refine (official) |
| 18 | [dave1010/tree-of-thought-prompting](https://github.com/dave1010/tree-of-thought-prompting) | 817 | ToT prompting guide |
| 19 | [AgileRL/AgileRL](https://github.com/AgileRL/AgileRL) | 919 | AutoRL with evolutionary optimization |
| 20 | [greyhaven-ai/autocontext](https://github.com/greyhaven-ai/autocontext) | 1,012 | Recursive self-improving harness |

---

## 12. Summary & Key Findings

### Search Completeness

| Category | Repos Found | Coverage |
|---|---:|---|
| OpenEvolve / AlphaEvolve Alternatives | 7 | Excellent |
| Evolutionary Agent Projects | 13+ | Excellent |
| LLM Self-Improvement | 6 | Good |
| Code/Program Evolution with LLM | 8+ | Good |
| Self-Refine | 2 | Complete (small field) |
| Reflexion | 4 | Complete |
| Tree of Thought | 3 | Complete (small field) |
| NAS-LLM | 2 | Sparse (emerging field) |
| AutoML with Evolutionary | 10+ | Good |
| HuggingFace Models/Spaces/Datasets | 0 | Unavailable (platform gap) |
| Papers With Code | Redirected | Use arXiv/SemanticScholar instead |
| Benchmark Datasets | 5 | Limited (no standard benchmark) |

### Key Technical Patterns

1. **Island-based evolution with migration** is the dominant architecture (OpenEvolve, CodeEvolve)
2. **MAP-Elites quality-diversity** is the standard approach for maintaining solution diversity
3. **EVOLVE-BLOCK markers** are emerging as a standard interface for specifying evolvable code regions
4. **Cascade evaluation** (multi-stage with threshold gates) is the standard evaluation pattern
5. **Verbal reinforcement learning** (Reflexion) and **iterative self-refinement** (Self-Refine) are foundational techniques that most larger systems build upon
6. **Tree of Thoughts** provides structured search capability that complements evolutionary exploration
7. The field is rapidly consolidating around the AlphaEvolve paradigm with multiple independent implementations

### Ecosystem Gaps

1. **No standardized benchmark** for evolutionary coding agents
2. **HuggingFace integration** is absent - evolutionary agents are not distributed as models
3. **NAS-LLM** remains primarily academic with few open-source implementations
4. **Cross-repository compatibility** is low - each project has its own evaluation pipeline
5. **Most projects are recent** (2025-2026), indicating the field is in early rapid growth

### Total Repositories Catalogued

**~50+ unique repositories** across all 10 search categories, plus **107+ repositories** in the broader agent evolution landscape from the existing project database.

---

*Report compiled from GitHub API searches, repository deep-reads, web scraping, and cross-referencing with the existing awesome-evolution project database at `/Users/copizzah/Desktop/work/awesome-evolution/`.*
