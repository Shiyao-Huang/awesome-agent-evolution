# Top 20 Agent Self-Evolution Repos: Deep Dive Analysis

> Analysis date: 2026-05-22 | Repos ranked by GitHub stars (descending) | Source: raw-github README scrapes

---

## Table of Contents

1. [Individual Repo Analysis (#1-#20)](#individual-repo-analyses)
2. [Comparative Analysis](#comparative-analysis)
3. [Cross-Cutting Patterns](#cross-cutting-patterns)
4. [Surprising Findings](#surprising-findings)

---

## Individual Repo Analyses

---

### #1. lsdefine/GenericAgent (11.8K stars)

**Code Architecture**: Ultra-minimal monolith. ~3K lines of seed code, ~100-line agent loop, 9 atomic tools. Single-process Python with a flat directory structure (`agent_loop.py`, `llmcore.py`, `ga.py` at root). Plugin and memory subdirectories exist but the core is deliberately tiny. No microservices, no plugin kernel -- just a tight loop.

**Evolution Mechanism**: Skill crystallization through task execution. Every time the agent solves a task, it automatically distills the execution path into a reusable `Skill` file. These accumulate into a personal skill tree grown entirely from the 3K-line seed. Claims self-bootstrap: everything in the repo was built autonomously by the agent itself, from `git init` onward. Token efficiency is a core design goal: <30K context window vs. 200K-1M for competitors.

**Tech Stack**: Python 3.11/3.12. Key dependencies: pywebview (desktop UI), Textual (TUI), Streamlit (web UI). Browser injection via TMWebDriver.py. ADB for mobile device control. Multi-LLM support (Claude, Gemini, Kimi, MiniMax).

**Code Quality Signals**: 687 commits, 1.4K forks. Documentation includes installation guides, getting started docs, Chinese translations. No visible CI/CD configuration. Tests directory exists. LOC is deliberately tiny -- this is a feature, not a bug.

**Contributor Patterns**: Solo developer (lsdefine) with community contributions. Active commits through May 2026. 1.4K forks indicate significant community adoption.

**Core Innovation**: The "don't preload skills, evolve them" philosophy. Starting from 3.3K lines of seed code and claiming full system control through skill crystallization. The self-bootstrap proof (the repo was built entirely by the agent) is the unique selling point.

**Weakness/Gaps**: Minimal test coverage evidence. No CI/CD. Single-maintainer risk. The self-bootstrap claim is extraordinary but hard to independently verify. Browser injection approach (preserving login sessions) is powerful but security-sensitive.

**Paper Linkage**: arXiv:2604.17091. Technical report at JinyiHan99/GA-Technical-Report.

**Elegance Score**: 5/5. This is the most architecturally elegant repo in the top 20. The "3K lines that grow into a skill tree" is a genuinely beautiful design philosophy. No over-engineering.

---

### #2. MemTensor/MemOS (9.2K stars)

**Code Architecture**: Large-scale modular system. Multi-package monorepo with `src/`, `apps/`, `packages/`, `evaluation/`, `examples/`, `deploy/helm/`, `docker/`. Supports both cloud-hosted and self-hosted deployment. Docker Compose orchestration with Neo4j + Qdrant backends.

**Evolution Mechanism**: Self-evolving memory operating system with 4 tiers: L1 trace memory, L2 policy memory, L3 world model, and crystallized Skills driven by feedback. Hybrid retrieval (FTS5 + vector). Memory feedback and correction through natural language. Multi-modal memory (text, images, tool traces, personas). MemScheduler for asynchronous ingestion.

**Tech Stack**: Python backend (uvicorn/FastAPI), TypeScript frontend. Neo4j (graph DB), Qdrant (vector DB), Redis Streams (scheduling), SQLite (local). Docker deployment. Supports OpenAI, Azure, Qwen, DeepSeek, MiniMax, Ollama, HuggingFace, vLLM. Poetry + uv for dependency management.

**Code Quality Signals**: 1,778 commits. Pre-commit config (`pre-commit-config.yaml`). Tests directory. Dockerfile, Makefile, Helm charts. Comprehensive documentation site. Bilingual (Chinese/English). Production-grade deployment options.

**Contributor Patterns**: MemTensor organization. Active development since July 2024 (v1.0) through v2.0 (Stardust, December 2025). 831 forks. Significant institutional backing.

**Core Innovation**: The Memory OS abstraction itself -- treating agent memory as a first-class operating system concern with graph-structured, multi-modal, multi-cube knowledge base management. The "+43.70% accuracy vs. OpenAI Memory" claim with LoCoMo 75.80 is the headline number.

**Weakness/Gaps**: Heavy infrastructure requirements (Neo4j, Qdrant, Redis). Complexity may be overkill for simple use cases. The evolution mechanism is memory-centric rather than code-centric -- it evolves what the agent remembers, not what the agent does.

**Paper Linkage**: arXiv:2507.03724 "MemOS: A Memory OS for AI System"

**Elegance Score**: 3/5. Solid engineering but the architecture is heavy. Multiple databases, deployment modes, and configuration surfaces create cognitive overhead. The memory tiering concept is elegant; the implementation is enterprise-grade but not minimal.

---

### #3. EvoMap/evolver (7.5K stars)

**Code Architecture**: CLI-first engine with a clean src/ directory structure. Node.js/JavaScript monolith. Ships as `@evomap/evolver` npm package. Offline-first with optional network connection. Git-integrated (requires running inside a git repo).

**Evolution Mechanism**: GEP (Gene-Encoded Protocol) powered evolution. Agent experience is encoded as Genes and Capsules, not ad hoc prompts. Each cycle: (1) scans `memory/` for runtime logs and error patterns, (2) selects best-matching Gene/Capsule from `assets/gep/`, (3) emits a protocol-bound GEP prompt, (4) records an auditable EvolutionEvent. Explicitly does NOT automatically edit source code -- it is a prompt generator, not a code patcher.

**Tech Stack**: Node.js >= 18, JavaScript. npm package. Git for rollback and blast radius calculation. Supports Cursor, Claude Code, Codex, Kiro, OpenCode, OpenClaw via setup-hooks.

**Code Quality Signals**: 72 commits. Test directory. Examples. Multi-language README (EN, CN, JP, KR). CONTRIBUTING.md. Relatively young project (first release Feb 2026).

**Contributor Patterns**: EvoMap organization. Small team. Moving from open source (MIT/GPL-3.0) to source-available licensing, explicitly citing a competitor (Hermes Agent Self-Evolution) that allegedly copied their design without attribution.

**Core Innovation**: The GEP protocol -- encoding evolution as Genes and Capsules with strict audit trails rather than free-form prompt mutation. The paper shows Gene-based evolution lifts base models from 9.1% to 18.57% on CritPt. The "prompt generator, not code patcher" boundary is a deliberate and clean design choice.

**Weakness/Gaps**: Only 72 commits suggests early maturity. The source-available licensing transition will limit community contributions. The standalone mode is limited to text output -- real power requires a host runtime like OpenClaw. The attribution dispute with Hermes creates ecosystem friction.

**Paper Linkage**: arXiv:2604.15097 "From Procedural Skills to Strategy Genes: Towards Experience-Driven Test-Time Evolution"

**Elegance Score**: 4/5. Clean separation of concerns. The GEP protocol is well-defined. The "prompt generator, not code patcher" boundary is architecturally honest. Slightly over-engineered in the networking layer.

---

### #4. HKUDS/OpenSpace (6.3K stars)

**Code Architecture**: Python package (`openspace`) with MCP server architecture. Dual-mode: Path A (plug into any agent as skills via MCP) and Path B (use as standalone co-worker). Frontend dashboard included. Cloud skill community platform at open-space.cloud.

**Evolution Mechanism**: Skill-based self-evolution with 4 modes: AUTO-FIX (broken skills self-repair), AUTO-IMPROVE (successful patterns become better skill versions), AUTO-LEARN (captures winning workflows), and quality monitoring. Collective agent intelligence: one agent's improvement becomes every agent's upgrade through cloud skill sharing. MCP server (stdio/SSE/streamable HTTP) for agent integration.

**Tech Stack**: Python. MCP protocol. SSE and streamable HTTP transports. Frontend (web dashboard). litellm for multi-provider support. WhatsApp and Feishu communication adapters.

**Code Quality Signals**: 74 commits. pyproject.toml. requirements.txt. Chinese i18n. Production-grade: security hardening (path traversal protection), pip installable. GDPVal economic benchmark with 50 professional tasks across 6 industries.

**Contributor Patterns**: HKUDS (Hong Kong University Data Science) academic lab. Community platform at open-space.cloud. 777 forks.

**Core Innovation**: The collective intelligence model -- not just individual agent evolution but network-effect skill sharing across agents. The GDPVal benchmark showing 4.2x better performance with 46% fewer tokens, earning $11K in 6 hours on real professional tasks, is a compelling economic argument.

**Weakness/Gaps**: Relies heavily on the cloud skill community for its network-effect value proposition. Privacy concerns with skill sharing. 74 commits is relatively low for 6.3K stars, suggesting stars may outpace maturity.

**Paper Linkage**: Not explicitly linked in README, but GDPVal benchmark is referenced.

**Elegance Score**: 3/5. The collective intelligence vision is compelling, but the implementation mixes too many concerns (MCP server, cloud platform, WhatsApp adapters, frontend dashboard). The skill evolution lifecycle is well-designed but the codebase sprawl reduces elegance.

---

### #5. aiwaves-cn/agents (5.9K stars)

**Code Architecture**: Python package with src/agents/ module. Clean separation between agent pipeline construction and the symbolic learning framework. Examples directory with use cases.

**Evolution Mechanism**: Symbolic learning inspired by connectionist learning (neural network training). Agent pipeline = computational graph, agent node = neural layer, prompts/tools = weights. Implements forward pass (agent execution storing trajectory), language loss function (prompt-based evaluation), back-propagation (textual analyses and reflections along trajectory = "language gradients"), and weight update (updating symbolic components via language gradients). Multi-agent systems supported by treating nodes as different agents.

**Tech Stack**: Python 100%. setup.py packaging. Minimal dependencies beyond LLM API access.

**Code Quality Signals**: 1,325 commits. Well-documented with paper, project page, and docs site. Version 2.0 is a major rewrite. Apache-2.0 license.

**Contributor Patterns**: Academic team (Wangchunshu Zhou, Yuchen Eleanor Jiang, et al.). PRs welcome. 482 forks. Chinese academic origin (aiwaves-cn).

**Core Innovation**: The neural-network-to-agent-pipeline analogy is genuinely novel and well-articulated. "Language gradients" and "language loss" provide a principled framework for prompt evolution that goes beyond ad hoc mutation. This is the most theoretically grounded approach in the top 20.

**Weakness/Gaps**: Last update timestamp is June 2024 -- potentially stale. No visible CI/CD. The symbolic learning framework requires significant LLM API calls for each training iteration (forward + backward + update passes). May be expensive at scale.

**Paper Linkage**: arXiv:2406.18532 "Symbolic Learning Enables Self-Evolving Agents". Also arXiv:2309.07870 for the original Agents framework.

**Elegance Score**: 5/5. The analogy between neural network training and agent pipeline optimization is intellectually beautiful. The implementation maps cleanly to the theory. This is the most theoretically elegant design in the entire list.

---

### #6. EverMind-AI/EverOS (5.1K stars)

**Code Architecture**: Multi-component monorepo: `methods/` (EverCore memory system, HyperMem), `benchmarks/` (EverMemBench, EvoAgentBench), `use-cases/` (20+ integrations). Each component has independent installation and dependencies. Docker Compose for EverCore.

**Evolution Mechanism**: Self-organizing memory OS inspired by biological imprinting. EverCore extracts, structures, and retrieves long-term knowledge from conversations. HyperMem uses hypergraph-based hierarchical memory with topic, event, and fact layers. Three-layer memory quality evaluation. Agent self-evolution evaluation through longitudinal growth curves.

**Tech Stack**: Python. Docker Compose. uv for dependency management. Vectorize API for embedding/rerank. REST API (port 1995). 20+ use case integrations spanning wearables, iOS apps, games, browser agents, coding agents.

**Code Quality Signals**: 653 commits. AGENTS.md and CLAUDE.md for agent collaboration. NOTICE file. Comprehensive docs site. Evaluation infrastructure (LoCoMo 93.05%, LongMemEval 83.00%).

**Contributor Patterns**: EverMind-AI organization. Active community with Discord. HuggingFace presence. 556 forks.

**Core Innovation**: The breadth of the ecosystem -- not just a memory system but a platform with benchmarks, multiple memory architectures (EverCore + HyperMem), and 20+ real-world integrations. The EvoAgentBench for measuring agent self-evolution longitudinally fills a gap in the field.

**Weakness/Gaps**: Scope creep risk -- trying to be memory system, benchmark suite, and integration platform simultaneously. Some use cases listed as "Coming soon." The repo may be spreading thin across too many fronts.

**Paper Linkage**: Referenced but not explicitly linked in the README content examined.

**Elegance Score**: 3/5. Good engineering breadth but lacks a single sharp insight. The hypergraph memory architecture is interesting but buried under the weight of 20+ use cases and two separate benchmark suites.

---

### #7. NousResearch/hermes-agent-self-evolution (3.4K stars)

**Code Architecture**: Very thin repo. Only 7 commits. Datasets/, evolution/, reports/, tests/ directories. Single entry point via `python -m evolution.skills.evolve_skill`. Plan-driven development with PLAN.md.

**Evolution Mechanism**: DSPy + GEPA (Genetic-Pareto Prompt Evolution). Reads execution traces to understand *why* things fail, then proposes targeted improvements. Generates eval datasets (synthetic or from session history). Candidate variants pass through constraint gates (full test suite, size limits, caching compatibility, semantic preservation). Best variant creates a PR against hermes-agent. Phased approach: currently Phase 1 (skill files), Phases 2-5 planned (tool descriptions, system prompts, code, continuous loop).

**Tech Stack**: Python 100%. DSPy framework. pyproject.toml. GEPA optimizer. Darwinian Evolver (external, AGPL v3) for code evolution.

**Code Quality Signals**: Only 7 commits. Tests directory. PLAN.md for architecture documentation. MIT licensed. Very early stage.

**Contributor Patterns**: NousResearch organization. Solo or tiny team working on this specific repo. Leverages the broader Hermes Agent ecosystem.

**Core Innovation**: The guardrails system -- every evolved variant must pass full test suite, size limits, caching compatibility, semantic preservation, and human PR review. This is the most safety-conscious evolution framework in the top 20. The GEPA execution trace analysis (understanding *why* failures happen, not just *that* they happened) is conceptually strong.

**Weakness/Gaps**: Only 7 commits. Most features are in "Planned" status (Phases 2-5). Only skill file evolution is implemented. The repo is more of a design document with a thin implementation than a mature system. 3.4K stars for 7 commits is extraordinary star-to-commit ratio, suggesting stars are driven by the NousResearch brand and the concept rather than the code.

**Paper Linkage**: GEPA paper: arXiv:2507.19457 "GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning" (ICLR 2026 Oral).

**Elegance Score**: 4/5. The phased approach and guardrail design are elegant. The execution trace analysis concept is clean. However, the sparseness of the actual implementation makes it hard to fully judge.

---

### #8. noahshinn/reflexion (3.2K stars)

**Code Architecture**: Paper-code repository. Organized by evaluation domain: `alfworld_runs/`, `hotpotqa_runs/`, `programming_runs/`, `webshop_runs/`. Jupyter notebooks for interactive exploration. No packaged library -- this is research code.

**Evolution Mechanism**: Verbal reinforcement learning. Agent attempts a task, receives a binary reward (success/failure), generates a verbal self-reflection ("I failed because..."), stores this reflection in persistent memory, and uses accumulated reflections as context for future attempts. Four strategies: NONE, LAST_ATTEMPT (reasoning trace), REFLEXION (self-reflection), LAST_ATTEMPT_AND_REFLEXION (both).

**Tech Stack**: Python 90%, Jupyter Notebook 8%, Shell 2%. OpenAI API (GPT-4). alfworld, hotpotqa, webshop environments.

**Code Quality Signals**: 176 commits. MIT licensed. NeurIPS 2023 paper. Log files included for reproducibility. No CI/CD, no packaging -- this is academic research code, not production software.

**Contributor Patterns**: Academic team: Noah Shinn, Federico Cassano, Edward Berman, Ashwin Gopinath, Karthik Narasimhan, Shunyu Yao. 306 forks. NeurIPS 2023 acceptance validates research quality.

**Core Innovation**: The foundational idea that LLM agents can learn from verbal self-reflection stored in persistent memory, eliminating the need for weight updates. This is the seminal work that spawned an entire sub-field. Every other repo in this list builds on the conceptual foundation Reflexion established.

**Weakness/Gaps**: Research code quality -- not designed for production use. No library packaging. Requires GPT-4 API access (expensive for reproduction). Domain-specific implementations (AlfWorld, HotPotQA) rather than a general framework.

**Paper Linkage**: arXiv:2303.11366 "Reflexion: Language Agents with Verbal Reinforcement Learning" (NeurIPS 2023)

**Elegance Score**: 4/5. The concept is paradigmatically elegant -- replacing gradient updates with verbal reflection. The code is straightforward research implementation, not over-engineered. Points off for lack of general framework packaging.

---

### #9. EvoAgentX/EvoAgentX (3.0K stars)

**Code Architecture**: Full-featured framework with `evoagentx/` package, `examples/`, `tests/`, `docs/`. pyproject.toml packaging. MkDocs documentation. pytest configuration. Modular design with separate model adapters (OpenAI, Qwen, LiteLLM, SiliconFlow, OpenRouter).

**Evolution Mechanism**: Self-evolving ecosystem with multiple components: (1) Agent Workflow Autoconstruction -- from a single prompt, builds multi-agent workflows, (2) Built-in Evaluation -- automatic evaluators scoring agent behavior, (3) Self-Evolution Engine -- iteratively improves workflows using evolution algorithms, (4) Memory Module -- short-term and long-term memory, (5) Human-in-the-Loop interaction.

**Tech Stack**: Python. LiteLLM for multi-provider support. MkDocs for documentation. pytest for testing. pip installable (`pip install evoagentx`). Supports Claude, DeepSeek, Kimi, and others through LiteLLM.

**Code Quality Signals**: 1,105 commits. Tests directory with pytest.ini. CONTRIBUTING.md. Multi-language README (EN, CN, TW). Weekly community meetings. MkDocs documentation site.

**Contributor Patterns**: EvoAgentX organization with Discord, Twitter, WeChat community. 265 forks. Active development since May 2025.

**Core Innovation**: The "ecosystem" approach -- not just evolving individual agents but entire multi-agent workflows. The automatic workflow construction from a single prompt combined with iterative evolution is the key differentiator. Framework paper provides academic backing.

**Weakness/Gaps**: Ambitious scope may lead to feature bloat. The evolution algorithms are not deeply detailed in the README. 1,105 commits with a 3K star ratio suggests active development but the framework paper is from July 2025 -- still maturing.

**Paper Linkage**: arXiv:2507.03616 (EvoAgentX framework paper). Also connected to arXiv:2508.07407 (self-evolving agents survey).

**Elegance Score**: 3/5. Feature-complete but the breadth of scope (workflow construction, evaluation, evolution, memory, HITL) creates complexity. The pieces fit together but the whole is not as elegant as smaller, more focused systems.

---

### #10. facebookresearch/HyperAgents (2.5K stars)

**Code Architecture**: Research code with clean separation: `agent/` (foundation model interface), `domains/` (task domains), `analysis/` (plotting), `baselines/`, `utils/`. Entry points: `generate_loop.py`, `run_meta_agent.py`, `run_task_agent.py`, `meta_agent.py`, `task_agent.py`. Docker support.

**Evolution Mechanism**: Self-referential self-improvement. A meta-agent reads and modifies the code of task agents. The meta-agent itself is also a task agent that can be improved. Empirical validation: each code change is tested against benchmarks. Open-ended evolution -- no predefined stopping condition. The system can optimize for any computable task.

**Tech Stack**: Python 99%. Docker. OpenAI, Anthropic, Gemini API support. graphviz for analysis visualization.

**Code Quality Signals**: Only 9 commits. Dockerfile. Requirements split into main and dev. Google Drive for experiment logs. CODE_OF_CONDUCT.md, CONTRIBUTING.md (Meta/Facebook standards).

**Contributor Patterns**: Meta/Facebook Research. Academic team: Jenny Zhang, Bingchen Zhao, et al. with Jeff Clune, Jakob Foerster. 323 forks.

**Core Innovation**: The self-referential nature -- the meta-agent improves task agents AND can itself be improved, creating an open-ended improvement loop. This is the closest to recursive self-improvement in the theoretical sense. The connection to Jeff Clune's previous work on open-endedness is significant.

**Weakness/Gaps**: Only 9 commits -- extremely early code. Requires Docker. Safety warning about executing untrusted model-generated code. No library packaging -- research code only. The self-referential improvement loop is conceptually powerful but practical safety guarantees are minimal.

**Paper Linkage**: arXiv:2603.19461 "HyperAgents"

**Elegance Score**: 4/5. The self-referential architecture is conceptually elegant and minimalist. Only 9 files at root level. The design is clean and the evolution mechanism is precisely defined. Loses a point for the thin implementation.

---

### #11. sentrux/sentrux (2.4K stars)

**Code Architecture**: Rust workspace with `sentrux-core/` and `sentrux-bin/` crates. Plugin system for language support. MCP server integration. Single binary distribution (no runtime dependencies). Cargo.toml workspace.

**Evolution Mechanism**: Architectural sensing, not prompt/memory/code evolution in the traditional sense. Sentrux provides the *feedback loop* for self-improvement: it monitors code quality in real-time (5 root cause metrics: modularity, acyclicity, depth, equality, redundancy), generates a single 0-10000 quality score, and provides this signal to AI agents via MCP. The "evolution" is the agent using this feedback to improve its own output quality. Quality gates prevent regression.

**Tech Stack**: Pure Rust. tree-sitter for 52-language support (plugin-based). MCP protocol. Cargo workspace. GPU-accelerated GUI (Vulkan/GL/fallback). brew installable on macOS.

**Code Quality Signals**: 318 commits. CI workflow (`.github/workflows/`). Tests. Plugin system. Install scripts for macOS, Linux, Windows. Multi-language README (EN, CN, DE, JP). claude-plugin integration.

**Contributor Patterns**: sentrux organization. 213 forks. Active development.

**Core Innovation**: Closing the architecture-level feedback loop. While other repos focus on evolving prompts or code, sentrux gives agents *spatial awareness* of the codebase -- the one thing AI agents lost when we moved from IDEs to terminals. The "sensor that helps agents close the feedback loop" is a genuinely different approach to self-improvement.

**Weakness/Gaps**: Not evolution in the traditional sense -- it is a quality monitoring tool, not an evolution engine. Requires separate agent to act on the feedback. The evolution claim is indirect: agents improve because they can *see* degradation, not because the system directly evolves anything.

**Paper Linkage**: None mentioned.

**Elegance Score**: 4/5. Pure Rust, single binary, 52 languages via plugins -- technically elegant. The "sensor, spec, actuator" feedback loop model is cleanly architected. The approach is orthogonal to other repos, which is itself elegant.

---

### #12. EvoAgentX/Awesome-Self-Evolving-Agents (2.2K stars)

**Code Architecture**: Survey/resource list only. No executable code. README.md with organized paper links, assets/ with taxonomy figures. 70 commits updating the list.

**Evolution Mechanism**: N/A -- this is a curated survey, not an implementation. However, it provides the most comprehensive taxonomy of self-evolution mechanisms: single-agent optimization (LLM behavior, prompt, memory, tool, unified), multi-agent optimization, and domain-specific optimization.

**Tech Stack**: Markdown only.

**Code Quality Signals**: 70 commits. Well-organized taxonomy. Figures explaining the evolution tree and framework.

**Contributor Patterns**: EvoAgentX organization. Community contributions via pull requests.

**Core Innovation**: The taxonomy itself -- categorizing evolution along "What to evolve?" (models, context, tools, architecture), "When to evolve?" (intra-test-time, inter-test-time), "How to evolve?" (reward-based, imitation, population-based), and "Where to evolve?" (general vs. specialized domains).

**Weakness/Gaps**: No code. Survey repos naturally become stale as the field moves fast. The value is organizational, not technical.

**Paper Linkage**: arXiv:2508.07407 "A Comprehensive Survey of Self-Evolving AI Agents"

**Elegance Score**: 4/5 (as a taxonomy/survey). The categorization framework is clean and comprehensive. The visual taxonomy tree is well-designed.

---

### #13. jennyzzt/dgm (2.1K stars)

**Code Architecture**: Research code with flat structure. `DGM_outer.py` (entry point), `coding_agent.py`, `coding_agent_polyglot.py`, `self_improve_step.py` at root. Domain-specific: `swe_bench/`, `polyglot/`, `prompts/`, `tools/`. Docker for sandboxed execution.

**Evolution Mechanism**: Darwin + Godel Machine. Iteratively modifies its own code (improving its ability to modify its own codebase), empirically validates each change using coding benchmarks (SWE-bench, Polyglot). Open-ended evolution with no predefined stopping condition. The agent reads its own source, proposes changes, tests them, and keeps improvements.

**Tech Stack**: Python 56%, Shell 44%, Dockerfile. Docker for sandboxed evaluation. SWE-bench, Polyglot benchmark integration.

**Code Quality Signals**: Only 5 commits. Apache-2.0 licensed. pytest.ini. tests/ directory. Dockerfile. Analysis scripts with graphviz. Google Drive for experiment logs.

**Contributor Patterns**: Jenny Zhang (same first author as HyperAgents). Affiliated with Sakana AI. 416 forks.

**Core Innovation**: The Godel Machine connection -- an agent that can prove its own improvements are correct before applying them. Combined with Darwinian evolution (population of agent variants, survival of the fittest), this is one of the most theoretically rigorous approaches to open-ended self-improvement.

**Weakness/Gaps**: Only 5 commits -- essentially a paper release. Requires Docker. Focus is narrow (coding benchmarks only). Safety concerns about executing model-generated code.

**Paper Linkage**: arXiv:2505.22954 "Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents". Sakana AI blog post.

**Elegance Score**: 4/5. The Darwin + Godel combination is intellectually elegant. The code is minimal and focused. Loses a point for the thin implementation (5 commits).

---

### #14. chrisworsey55/atlas-gic (1.9K stars)

**Code Architecture**: Domain-specific system for financial trading. `src/`, `architecture/`, `prompts/examples/`, `results/`. Only 5 commits. The architecture is described conceptually (4 layers, 25+ agents) rather than implemented as a general framework.

**Evolution Mechanism**: Karpathy-style autoresearch applied to financial markets. Agent prompts are the "weights" being optimized. Sharpe ratio is the loss function. Every trading day is one training iteration. The system identifies the worst agent by rolling Sharpe, generates targeted prompt modifications, evaluates over 5 trading days, and keeps (git commit) or reverts (git reset). Darwinian weighting: top quartile agents get louder, bottom quartile get quieter. Agent spawning: system detects knowledge gaps and creates new specialist agents autonomously. Regime-specific training (PRISM): separate cohorts trained on different market conditions.

**Tech Stack**: Python. Git for version control of agent prompts. $20/month VM replaces H100 -- no GPU needed.

**Code Quality Signals**: Only 5 commits. No tests visible. Results directory with backtest outputs. Architecture documentation.

**Contributor Patterns**: Solo developer (chrisworsey55) at General Intelligence Capital. 346 forks. Commercial platform (atlasagents.co) built on top.

**Core Innovation**: Applying the autoresearch pattern to a non-coding domain (financial trading) with remarkable results: +22% deployment return, convergent evolution discovering the same meta-rules across market regimes. The JANUS meta-layer (emergent regime detection from cohort weighting) and Soros reflexivity engine are unique domain-specific innovations.

**Weakness/Gaps**: Only 5 commits -- essentially a concept/demo. Commercial interests may conflict with open-source goals. Domain-specific (trading), not a general framework. The 30% survival rate for prompt modifications suggests the evolution signal is noisy.

**Paper Linkage**: No formal paper. Karpathy's autoresearch is the methodological foundation.

**Elegance Score**: 3/5. The application of autoresearch to trading is clever and the emergent properties (convergent evolution, JANUS regime detection) are fascinating. But the repo itself is thin -- more documentation of an idea than implementation of a framework.

---

### #15. OS-Copilot/OS-Copilot (1.8K stars)

**Code Architecture**: Python package (`oscopilot/`) with `examples/`, `docs/`, `fronted/` (frontend), `working_dir/`. setup.py packaging. Frontend interface for visual interaction. Example scripts for quick start and course learning.

**Evolution Mechanism**: Self-improving embodied agent integrated into the operating system. FRIDAY agent can interface with web, code terminals, files, multimedia, and applications. Self-learning capability: the agent can add and remove its own tools. Vision support added (friday_vision). Course learning mode for structured self-improvement.

**Tech Stack**: Python 92%, JavaScript 5%, CSS 3%. conda environment. OpenAI API. Frontend with web interface. Read the Docs documentation.

**Code Quality Signals**: 380 commits. Read the Docs integration. setup.py packaging. .readthedocs.yaml. Examples directory with tutorials at beginner, intermediate, and advanced levels. MIT licensed. v0.1.0 release (March 2024).

**Contributor Patterns**: Academic team (Zhiyong Wu, Chengcheng Han, et al., Lingpeng Kong). ICLR 2024 LLM Agents Workshop acceptance. Discord and Twitter community. 202 forks.

**Core Innovation**: The embodied OS-integration approach -- not just a chat agent but one that can control the entire operating system (web, terminal, files, applications). The self-learning feature where the agent can add its own tools is notable.

**Weakness/Gaps**: Last significant update appears to be September 2024 (vision addition). Single-round conversation only. Python 3.10 dependency. The self-improvement mechanism is less formally defined than competitors.

**Paper Linkage**: arXiv:2402.07456 "OS-Copilot: Towards Generalist Computer Agents with Self-Improvement" (ICLR 2024 Workshop)

**Elegance Score**: 3/5. Practical but not theoretically novel. The OS-integration is useful but the evolution mechanism is loosely defined compared to more focused competitors.

---

### #16. yologdev/yoyo-evolve (1.8K stars)

**Code Architecture**: Rust workspace (`Cargo.toml`). `src/` for core agent, `skills/` and `skills_attic/` for evolved skills, `memory/` for active learnings, `journals/` for evolution log, `tests/` for test suite. 2,088 commits -- the most active repo in the top 20 by commit count.

**Evolution Mechanism**: Autonomous self-evolving coding agent. Every ~8 hours: reads its own source code, checks GitHub issues for community input, plans improvements, makes changes, runs tests, commits if tests pass (reverts if not). Every 4 hours: social sessions reading and replying to GitHub Discussions. Daily: synthesis job regenerates active memory with time-weighted compression. Started from 200 lines of Rust, grew to 51,000+ lines over 52 days with 2,000+ tests.

**Tech Stack**: Rust. 12 LLM providers (Anthropic, OpenAI, Google, Ollama, OpenRouter, xAI, Groq, DeepSeek, Mistral, Cerebras, AWS Bedrock, custom). GitHub Actions for automated evolution runs. crates.io package (`yoyo-agent`).

**Code Quality Signals**: 2,088 commits (highest in top 20). 2,000+ tests. 35 source files. GitHub Actions CI. mutants.toml for mutation testing. CHANGELOG.md. CLAUDE.md for agent collaboration. Documentation site and DeepWiki.

**Contributor Patterns**: Solo developer (yologdev). Community input via GitHub Issues and Discussions. The agent itself is a contributor (commits as yoyo-evolve[bot]). Sponsorship model ($5-50/month tiers). 117 forks.

**Core Innovation**: The "Truman Show" model -- a coding agent that evolves itself in public, with the entire growth history visible in git log and journals. The agent not only writes code but interacts with its community, files its own issues, asks for help when stuck. The 200-lines-to-51K growth trajectory is the most compelling self-evolution proof point in the entire list.

**Weakness/Gaps**: Solo developer risk. The "evolve or die" model means quality depends entirely on the test suite quality. No academic paper backing. The evolution is unguided beyond community votes -- no principled optimization function beyond "tests pass."

**Paper Linkage**: None.

**Elegance Score**: 5/5. The most compelling demonstration of self-evolution in the entire list. 200 lines growing to 51K through autonomous evolution, with full transparency, community interaction, and a compelling narrative. The Rust implementation is clean and performant.

---

### #17. modelscope/AgentEvolver (1.4K stars)

**Code Architecture**: Service-oriented dataflow architecture. `agentevolver/` package, `config/`, `env_service/` (environment sandboxes), `external/` (ReMe integration), `games/` (game arena), `research/CuES/`. Launcher script for unified startup. Modular services with standardized interfaces.

**Evolution Mechanism**: Three self-evolving mechanisms: (1) Self-Questioning -- explore environment and autonomously create diverse tasks (eliminating manual dataset construction), (2) Self-Navigating -- summarize and reuse cross-task experience for better exploration, (3) Self-Attributing -- process long trajectories for causal contribution of intermediate steps, enabling fine-grained policy optimization (ADCA-GRPO). End-to-end training pipeline with RL (GRPO).

**Tech Stack**: Python. conda + CUDA. ReMe for experience management. veRL for distributed RL training. mkdocs for documentation. Environment service for sandboxed task execution.

**Code Quality Signals**: 858 commits. Pre-commit config. Tests directory. MkDocs documentation site. Multi-language support. Install script.

**Contributor Patterns**: ModelScope (Alibaba Cloud). Academic team (Yunpeng Zhai, et al., Bolin Ding, Jingren Zhou). 167 forks. DeepWiki integration.

**Core Innovation**: The most complete training-time evolution framework. While most repos focus on inference-time evolution (prompt mutation, memory updates), AgentEvolver actually fine-tunes the underlying LLM using self-generated tasks, self-navigated experience, and self-attributed credit. The Game Arena extension (Avalon, Diplomacy) for multi-agent social reasoning training is unique.

**Weakness/Gaps**: Requires CUDA GPU -- not accessible without hardware. Complex setup (conda, CUDA, env services). The training-time approach is more powerful but less accessible than inference-time methods. 858 commits but the November 2025 release suggests ongoing development.

**Paper Linkage**: arXiv:2511.10395 "AgentEvolver: Towards Efficient Self-Evolving Agent System". Also arXiv:2512.01311 (CuES extension).

**Elegance Score**: 3/5. The three-mechanism design (questioning, navigating, attributing) is well-structured, but the implementation complexity (env services, RL training, game arenas) makes it heavy. The service-oriented architecture is sound but not minimal.

---

### #18. AMAP-ML/SkillClaw (1.4K stars)

**Code Architecture**: Client-server model. Client proxy intercepts API calls (`/v1/chat/completions`, `/v1/messages`). Evolve server processes session data. `skillclaw/` package, `evolve_server/`, `scripts/`, `tests/`. Two evolution engines: `workflow` (fixed 3-stage LLM pipeline) and `agent` (OpenClaw-driven workspace).

**Evolution Mechanism**: Collective skill evolution across sessions, agents, devices, and users. Skills are automatically deduplicated, improved, and verified. Client proxy intercepts agent requests, records session artifacts. Evolve server reads shared storage, evolves skills, writes them back. Multiplier effect: N users, one skill, continuous evolution. Cross-device and cross-agent skill unification.

**Tech Stack**: Python >= 3.10. Alibaba OSS / S3 / local filesystem for shared storage. SKILL.md format. OpenAI-compatible API proxy. Pre-commit config.

**Code Quality Signals**: 19 commits. Pre-commit config. Tests directory. PDF paper included. Shell installer for macOS/Linux. pyproject.toml.

**Contributor Patterns**: AMAP-ML (Amap/Alibaba Maps ML team). 129 forks. WeChat discussion group. HuggingFace Paper of the Day recognition.

**Core Innovation**: The collective evolution model at scale -- not just one user's skills improving but cross-user, cross-device, cross-agent skill sharing with automatic deduplication and quality improvement. The client proxy architecture (intercepting API calls transparently) is clever -- zero change to existing agent workflows.

**Weakness/Gaps**: Only 19 commits -- very early. Alibaba OSS dependency for full features. The proxy architecture adds latency to every API call. Privacy implications of shared skill evolution across users.

**Paper Linkage**: arXiv:2604.08377 "SkillClaw: Let Skills Evolve Collectively with Agentic Evolver"

**Elegance Score**: 4/5. The proxy-based transparent integration is elegant -- skills evolve without changing the agent. The client-server separation with shared storage is clean. The collective evolution vision is compelling.

---

### #19. aiming-lab/Agent0 (1.2K stars)

**Code Architecture**: Research code with two parallel subdirectories: `Agent0/` (language agents) and `Agent0-VL/` (vision-language agents). `docs/`, `figs/`. 44 commits.

**Evolution Mechanism**: Zero-data self-evolution through tool-integrated reasoning. Two-agent co-evolution: Curriculum Agent proposes increasingly challenging tasks, Executor Agent learns to solve them using external tools. No human annotations, no external data. Multi-step self-evolution with iterative improvement. For Agent0-VL: dual-role architecture with Solver and Verifier generating structured feedback and self-rewards.

**Tech Stack**: Python. Research code with benchmark integrations (AMC, MATH, GSM8K, AIME, etc.). Apache 2.0 license.

**Code Quality Signals**: 44 commits. Discord and WeChat communities. Detailed benchmark tables in README. Well-documented results.

**Contributor Patterns**: Academic collaboration: UNC-Chapel Hill, Salesforce Research, Stanford University. 141 forks.

**Core Innovation**: The zero-data self-evolution claim is the strongest in the field -- no human-curated datasets, no handcrafted supervision. The Curriculum + Executor co-evolution is a clean adversarial framework. Results are impressive: +18% on math, +24% on general reasoning. Agent0-VL extending the approach to multimodal reasoning is a meaningful contribution.

**Weakness/Gaps**: Research code -- not a production framework. 44 commits. Focused on reasoning benchmarks rather than general agent tasks. The co-evolution approach requires significant compute for training.

**Paper Linkage**: arXiv:2511.16043 "Agent0: Unleashing Self-Evolving Agents from Zero Data via Tool-Integrated Reasoning". arXiv:2511.19900 "Agent0-VL".

**Elegance Score**: 4/5. The Curriculum + Executor co-evolution is conceptually clean. The zero-data claim is well-supported by results. Loses a point for being research code rather than reusable framework.

---

### #20. CharlesQ9/Self-Evolving-Agents (1.1K stars)

**Code Architecture**: Survey/resource list only. 20 commits. README.md with comprehensive taxonomy and paper links. `figures/` directory with evolution and development diagrams. No executable code.

**Evolution Mechanism**: N/A -- survey repository. Provides the most comprehensive taxonomy: What to evolve (Models, Context/Memory/Prompts, Tools, Architecture), When to evolve (intra-test-time, inter-test-time), How to evolve (reward-based, imitation, population-based, evolutionary), Where to evolve (general vs. specialized domains).

**Tech Stack**: Markdown only.

**Code Quality Signals**: 20 commits. Well-organized with table of contents. Comprehensive paper links with arXiv references.

**Contributor Patterns**: CharlesQ9 (likely academic). 99 forks.

**Core Innovation**: The survey's taxonomy framework, particularly the "When to evolve?" dimension (intra-test-time vs. inter-test-time) which is a useful analytical lens missing from the EvoAgentX survey.

**Weakness/Gaps**: No code. Survey only. May overlap with EvoAgentX/Awesome-Self-Evolving-Agents. Less actively maintained (20 commits vs. 70 for EvoAgentX survey).

**Paper Linkage**: The survey itself is the contribution. Papers referenced include Alita (arXiv:2505.20286) by the same author.

**Elegance Score**: 3/5 (as a survey). Well-organized but the taxonomy is less visually developed than the EvoAgentX survey.

---

## Comparative Analysis

### Most Elegant Architectures (by Elegance Score)

| Rank | Repo | Score | Why |
|---|---|---|---|
| 1 | **GenericAgent** | 5/5 | 3K lines of seed code that grow into a skill tree. The "don't preload skills, evolve them" philosophy is the most minimal viable architecture possible. |
| 2 | **aiwaves-cn/agents** | 5/5 | The neural-network-to-agent-pipeline analogy (forward pass, language loss, back-prop, weight update) is the most theoretically elegant framework. |
| 3 | **yoyo-evolve** | 5/5 | 200 lines of Rust growing to 51K through autonomous evolution. The "Truman Show" model with full transparency is the most compelling self-evolution demo. |
| 4 | **EvoMap/evolver** | 4/5 | GEP protocol with Genes and Capsules. Clean "prompt generator, not code patcher" boundary. |
| 5 | **NousResearch/hermes-agent-self-evolution** | 4/5 | Guardrail-first design with phased approach. Execution trace analysis is conceptually clean. |
| 6 | **reflexion** | 4/5 | The foundational verbal RL concept is paradigmatically elegant. Simple and profound. |
| 7 | **HyperAgents** | 4/5 | Self-referential architecture is minimalist and precisely defined. |
| 8 | **sentrux** | 4/5 | Pure Rust, single binary, feedback loop model. Orthogonal approach to everyone else. |
| 9 | **Agent0** | 4/5 | Curriculum + Executor co-evolution. Zero-data claim is well-supported. |

### Most Over-Engineered

| Repo | Why |
|---|---|
| **MemOS** | 4 databases (Neo4j, Qdrant, Redis, SQLite), Docker Compose, Helm charts, cloud and self-hosted modes. Enterprise-grade but heavy for the core value proposition. |
| **OpenSpace** | MCP server + SSE/HTTP transports + WhatsApp/Feishu adapters + frontend dashboard + cloud community platform. Too many surfaces. |
| **EvoAgentX** | Workflow construction + evaluation + evolution + memory + HITL + 12 provider integrations. Breadth over depth. |
| **EverOS** | Memory system + benchmark suite + 20+ use case integrations + HyperMem. Ambitious scope risks spreading thin. |

### Most Minimal and Clean

| Repo | LOC/Complexity | Why |
|---|---|---|
| **GenericAgent** | ~3K lines | The entire framework fits in a single reading session. |
| **reflexion** | Research code | Straightforward implementation of a profound idea. No packaging, no ceremony. |
| **HyperAgents** | 9 commits | Thin but conceptually precise. Self-referential loop in its purest form. |
| **yoyo-evolve** | 200 lines seed | Started minimal and grew organically through evolution itself. |

---

## Cross-Cutting Patterns

### 1. Evolution Mechanism Taxonomy

The top 20 repos cluster into five distinct evolution mechanisms:

| Mechanism | Repos | Count |
|---|---|---|
| **Skill crystallization** (task execution -> reusable skill) | GenericAgent, SkillClaw, OpenSpace, evolver | 4 |
| **Prompt/code mutation** (evolutionary search over prompts or code) | hermes-agent-self-evolution, atlas-gic, aiwaves-cn/agents, evolver | 4 |
| **Memory evolution** (memory tiers, retrieval optimization) | MemOS, EverOS, yoyo-evolve | 3 |
| **Verbal/reflective feedback** (self-reflection, verbal RL) | reflexion, OS-Copilot | 2 |
| **Training-time evolution** (RL fine-tuning, self-generated data) | AgentEvolver, Agent0, HyperAgents, DGM | 4 |
| **Survey/taxonomy only** | Awesome-Self-Evolving-Agents, Self-Evolving-Agents | 2 |
| **Architecture sensing** (feedback loop, not direct evolution) | sentrux | 1 |

### 2. Language Distribution

| Language | Repos |
|---|---|
| Python | 16 of 20 (80%) |
| Rust | 2 (sentrux, yoyo-evolve) |
| JavaScript/Node | 1 (evolver) |
| Markdown-only (surveys) | 2 |

### 3. Paper-Code Ratio

| Category | Count | Repos |
|---|---|---|
| Has formal paper (arXiv) | 14/20 | All except sentrux, yoyo-evolve, atlas-gic, OpenSpace (no explicit link), Awesome-Self-Evolving-Agents (is the survey) |
| Research code (paper release) | 5 | reflexion, HyperAgents, DGM, Agent0, aiwaves-cn/agents |
| Production framework | 6 | GenericAgent, MemOS, evolver, OpenSpace, EvoAgentX, AgentEvolver |
| Survey only | 2 | Awesome-Self-Evolving-Agents, Self-Evolving-Agents |
| Tool/plugin | 4 | sentrux, yoyo-evolve, hermes-agent-self-evolution, SkillClaw |
| Domain-specific application | 1 | atlas-gic |

### 4. Commit Activity vs. Stars

| Repo | Stars | Commits | Stars/Commit |
|---|---|---|---|
| hermes-agent-self-evolution | 3,400 | 7 | 486 |
| HyperAgents | 2,500 | 9 | 278 |
| atlas-gic | 1,900 | 5 | 380 |
| DGM | 2,100 | 5 | 420 |
| yoyo-evolve | 1,800 | 2,088 | 0.86 |
| MemOS | 9,200 | 1,778 | 5.2 |
| GenericAgent | 11,800 | 687 | 17.2 |

The top-starred repos with the fewest commits (hermes-agent-self-evolution, HyperAgents, atlas-gic, DGM) suggest that star counts in this space are driven by brand recognition (NousResearch, Meta/Facebook) and concept appeal rather than code maturity.

### 5. Solo Dev vs. Team vs. Org

| Pattern | Count | Examples |
|---|---|---|
| Solo developer | 3 | GenericAgent (lsdefine), atlas-gic (chrisworsey55), yoyo-evolve (yologdev) |
| Academic team | 7 | reflexion, aiwaves-cn/agents, OS-Copilot, Agent0, DGM, HyperAgents, EverOS |
| Corporate org | 4 | MemOS (MemTensor), hermes-agent-self-evolution (NousResearch), AgentEvolver (ModelScope/Alibaba), SkillClaw (Amap/Alibaba) |
| Startup/indie org | 4 | evolver (EvoMap), OpenSpace (HKUDS), sentrux, EvoAgentX |

---

## Surprising Findings

### 1. The "Evolution" Definition Is Remarkably Broad

The top 20 repos use "self-evolution" to mean fundamentally different things: prompt mutation (hermes-agent-self-evolution), memory tiering (MemOS), skill crystallization (GenericAgent), code self-modification (DGM, yoyo-evolve), RL fine-tuning (AgentEvolver, Agent0), verbal reflection (reflexion), architectural sensing (sentrux), and even trading prompt optimization (atlas-gic). The field has not converged on a definition.

### 2. Minimal Beats Complex

The three repos with the highest elegance scores (GenericAgent, aiwaves-cn/agents, yoyo-evolve) are also the three most minimal. The most complex systems (MemOS, OpenSpace, EvoAgentX) have lower elegance scores despite higher star counts in some cases. This suggests the field rewards conceptual clarity over feature breadth.

### 3. Rust Is Overrepresented for Evolution Infrastructure

Two of the top 20 repos (sentrux, yoyo-evolve) are written in Rust, despite Rust being a minority language in ML/AI. Both use Rust for its performance and safety properties -- sentrux for real-time code analysis, yoyo-evolve for a self-modifying agent that needs to not break itself. The choice is deliberate: if an agent is rewriting its own code, you want compile-time safety guarantees.

### 4. yoyo-evolve Is the Most Compelling Self-Evolution Demo

GenericAgent claims self-bootstrap (the repo was built by the agent), but yoyo-evolve proves it publicly: 2,088 commits, 51K lines grown from 200 lines, full git history, journal entries, and social interaction with its community. This is the repo that would convince a skeptic that self-evolving agents are real.

### 5. The Academic-Commercial Split Is Pronounced

Paper-backed repos (reflexion, HyperAgents, DGM, Agent0, aiwaves-cn/agents) tend to have thin implementations (5-44 commits) with strong theoretical foundations. Commercial/org-backed repos (MemOS, SkillClaw, AgentEvolver) have heavier implementations (19-1,778 commits) but less conceptual novelty. The sweet spot appears to be solo developers (GenericAgent, yoyo-evolve) who combine practical implementation with clear design philosophy.

### 6. The "Hermes Ecosystem" Is a Dominant Force

Three repos in the top 20 are directly part of or compatible with the Hermes Agent ecosystem: hermes-agent-self-evolution (NousResearch itself), MemOS (has a Hermes plugin), SkillClaw (Hermes integration). OpenSpace, evolver, and GenericAgent also mention Hermes compatibility. This suggests Hermes is becoming a de facto standard for agent skill evolution.

### 7. Attribution Disputes Already Exist

The evolver repo explicitly alleges that Hermes Agent Self-Evolution copied its memory/skill/evolution-asset design without attribution, and is transitioning from open source to source-available licensing as a result. This is an early warning sign that the space is becoming competitive enough for IP disputes.

### 8. No Repo Combines Training-Time AND Inference-Time Evolution

Training-time evolution (AgentEvolver, Agent0) and inference-time evolution (GenericAgent, evolver, hermes-agent-self-evolution) are orthogonal approaches. No single repo in the top 20 combines both. This is a clear gap and likely the next frontier.

### 9. Safety Is an Afterthought

Only 3 of 20 repos have explicit safety mechanisms: HyperAgents (safety warning), hermes-agent-self-evolution (guardrails), and sentrux (quality gates). The remaining 17 have no visible safety infrastructure. For systems that modify their own behavior, this is a significant concern.

### 10. The Field Is Dominated by Chinese Teams

At least 8 of 20 repos have Chinese institutional backing: GenericAgent (Fudan), MemOS (MemTensor/Shanghai), aiwaves-cn/agents, EverOS, OpenSpace (HKUDS/Hong Kong), AgentEvolver (ModelScope/Alibaba), SkillClaw (Amap/Alibaba), Agent0 (UNC+Salesforce but with Chinese co-authors). The concentration of talent and investment in this space from Chinese institutions is notable.

---

*End of analysis. All assessments based on README content from raw-github/ directory, which represents the public-facing documentation of each repository as of the collection date.*
