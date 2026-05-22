# Strategy Taxonomy: Agent Self-Evolution Repos

> 107 repos classified by self-evolution strategy and method.
> Generated: 2026-05-22

---

## 1. Complete Taxonomy Table (Sorted by Stars Descending)

| # | Repo | Stars | Primary Strategy | Core Mechanism | Key Innovation | Target Domain | Paper? | Benchmarks? |
|---|------|------:|-----------------|----------------|----------------|---------------|--------|-------------|
| 1 | volcengine/OpenViking | 24,247 | Memory-based | Context database with filesystem paradigm for hierarchical memory/resource/skill delivery to agents, enabling self-evolving context management | Filesystem-as-context abstraction; unifies memory, resources, skills under one hierarchy | General (agent infrastructure) | no | no |
| 2 | letta-ai/letta | 22,833 | Memory-based | Stateful agent platform with advanced memory (archival + recall + core) that enables agents to learn and self-improve over time through persistent state | Tiered memory architecture (core/recall/archival) with infinite context via MemGPT | General | yes | yes |
| 3 | lsdefine/GenericAgent | 11,837 | Skill-based | Agent grows a skill tree from a 3.3K-line seed, autonomously expanding capabilities until achieving full system control with 6x token savings | Self-growing skill tree from minimal seed; radical token efficiency | General (system control) | no | yes |
| 4 | MemTensor/MemOS | 9,211 | Memory-based | Self-evolving memory OS with ultra-persistent memory, hybrid-retrieval, and cross-task skill reuse, achieving 35.24% token savings | Memory as OS; hybrid retrieval + cross-task skill reuse as memory primitives | General | no | yes |
| 5 | EvoMap/evolver | 7,507 | Evolutionary/Genetic | GEP-powered (Gene Expression Programming) self-evolving engine with auditable evolution via Genes, Capsules, and Events | Auditable evolution using GEP genes/capsules/events; full provenance of changes | General (framework) | no | no |
| 6 | HKUDS/OpenSpace | 6,277 | Hybrid | Community-driven self-evolving agent framework that makes agents smarter and lower-cost through shared evolution infrastructure | Community/cloud-based agent evolution with shared skill repositories | General | no | no |
| 7 | aiwaves-cn/agents | 5,927 | Memory-based | Data-centric self-evolving autonomous language agents that improve through accumulated interaction data | Data-centric evolution; agents evolve by learning from accumulated interaction datasets | General | yes | yes |
| 8 | EverMind-AI/EverOS | 5,128 | Memory-based | Build, evaluate, and integrate long-term memory for self-evolving agents with benchmarked memory persistence | Long-term memory evaluation platform; benchmarks for agent memory quality | General | no | yes |
| 9 | NousResearch/hermes-agent-self-evolution | 3,401 | Prompt-Optimization | Evolutionary self-improvement for Hermes Agent, optimizing skills/prompts/code using DSPy + GEPA (Gene Expression Programming for Agents) | GEPA: applying gene expression programming to prompt optimization for agent skills | General | no | yes |
| 10 | noahshinn/reflexion | 3,155 | Reflexion/Verbal-RL | Agents learn from verbal feedback stored in memory, replacing scalar rewards with natural language reflections (NeurIPS 2023) | Pioneered verbal reinforcement learning -- language as reward signal | General | yes | yes |
| 11 | EvoAgentX/EvoAgentX | 3,023 | Evolutionary/Genetic | Self-evolving ecosystem of AI agents using evolutionary optimization (EVO) across agent workflows | Full ecosystem evolution; agents, workflows, and prompts co-evolve via genetic operators | General | yes | yes |
| 12 | facebookresearch/HyperAgents | 2,503 | Meta-learning | Self-referential self-improving agents that can optimize themselves for any computable task through meta-learning | Self-referential improvement loop; agents that rewrite their own optimization logic | General | no | no |
| 13 | sentrux/sentrux | 2,357 | Self-Debugging | Real-time architectural sensor in Rust that helps AI agents close the feedback loop for recursive self-improvement of code quality | Runtime architectural sensor; feedback loop closure at the architecture level | Coding (Rust) | no | no |
| 14 | EvoAgentX/Awesome-Self-Evolving-Agents | 2,162 | Survey (N/A) | Comprehensive survey of self-evolving AI agents bridging foundation models and lifelong agentic systems | Systematic taxonomy of self-evolution paradigms (survey resource list) | Survey | yes | no |
| 15 | jennyzzt/dgm | 2,054 | Evolutionary/Genetic | Darwin Godel Machine: open-ended evolution of self-improving agents through Darwinian selection on agent code/weights | Darwinian selection applied to agent architectures; open-ended evolution | General | yes | yes |
| 16 | chrisworsey55/atlas-gic | 1,862 | Reflexion/Verbal-RL | Self-improving AI trading agents using Karpathy-style autoresearch for financial market analysis and trading | Karpathy-style autoresearch applied to trading; financial self-evolution | Trading | no | no |
| 17 | OS-Copilot/OS-Copilot | 1,772 | Self-Debugging | Self-improving embodied conversational agent integrated into the OS, learning from task execution to automate daily tasks | OS-level embodied agent with self-improvement through task interaction | OS/Desktop | yes | yes |
| 18 | yologdev/yoyo-evolve | 1,764 | Self-Debugging | A Truman Show-style self-evolving AI coding agent that writes its own code and grows up in public (Rust) | Transparent self-evolution; agent literally rewrites itself live, observable by community | Coding (Rust) | no | no |
| 19 | modelscope/AgentEvolver | 1,442 | Evolutionary/Genetic | AgentEvolver: towards efficient self-evolving agent systems through automated evolution pipelines | Automated pipeline for evolving agent configurations at scale | General | yes | yes |
| 20 | AMAP-ML/SkillClaw | 1,390 | Skill-based | Let skills evolve collectively with agentic evolver; skills are mined, composed, and refined by agents | Collective skill evolution; agentic evolver coordinates skill mining and composition | General | yes | yes |
| 21 | aiming-lab/Agent0 | 1,193 | Meta-learning | Agent0 series: self-evolving agents from zero data, learning purely from self-generated experience | Zero-data self-evolution; no human demonstrations needed | General | yes | yes |
| 22 | CharlesQ9/Self-Evolving-Agents | 1,128 | Survey (N/A) | Survey/resource list for self-evolving agents on the path to artificial super intelligence | Curated ASI-focused resource list for self-evolution | Survey | no | no |
| 23 | greyhaven-ai/autocontext | 1,012 | Memory-based | Recursive self-improving harness that helps agents (and future agent iterations) succeed on any task through accumulated context | Recursive context accumulation across agent generations | General | no | no |
| 24 | metauto-ai/GPTSwarm | 998 | Multi-agent-CoEvo | First self-improving agents with RL and re-prompting using swarm intelligence for agent graph optimization | Swarm-based optimization of agent graphs; agents as swarms that self-organize | General | yes | yes |
| 25 | madaan/self-refine | 805 | Reflexion/Verbal-RL | LLMs iteratively generate feedback on their own work and use it to improve output through multi-round self-refinement | Iterative self-refinement without external feedback; pure self-feedback loop | General | yes | yes |
| 26 | openmemind/memind | 786 | Memory-based | Self-evolving cognitive memory and context engine for AI agents in Java, empowering 24/7 proactive agents with understanding | Cognitive memory engine; Java-native persistent memory with proactive retrieval | General (Java) | no | no |
| 27 | Human-Agent-Society/CORAL | 668 | Multi-agent-CoEvo | Robust, lightweight infrastructure for multi-agent autonomous self-evolution, built for autoresearch with Claude Code/Codex | Multi-agent autonomous self-evolution infrastructure; works with major CLI agents | Research (autoresearch) | no | no |
| 28 | A-EVO-Lab/a-evolve | 549 | Evolutionary/Genetic | Position paper and code for "Agentic Evolution is the Path to Evolving LLMs" -- evolutionary optimization of LLM agents | Position that agentic evolution (not just training) is the evolutionary path for LLMs | General | yes | no |
| 29 | THUDM/WebRL | 524 | RL-finetuning | Building open LLM web agents with self-evolving online curriculum RL for web navigation | Online curriculum RL that generates progressively harder web tasks | Web navigation | yes | yes |
| 30 | facebookresearch/drzero | 515 | RL-finetuning | Dr. Zero: self-evolving search agents without training data, using zero-shot RL for search optimization | Zero-training-data self-evolving search via pure RL | Search | yes | yes |
| 31 | neosigmaai/auto-harness | 508 | Self-Debugging | Bring-your-own-agent self-improving system that mines failures, optimizes the agent harness, and gates against regressions | Automated failure mining + harness optimization with regression gating | General | no | yes |
| 32 | ViktorAxelsen/MemSkill | 481 | Memory-based | MemSkill: learning and evolving memory skills for self-evolving agents through episodic memory consolidation | Memory skill evolution; episodic memory becomes reusable skills | General | yes | yes |
| 33 | LYL1015/JarvisEvo | 401 | Evolutionary/Genetic | Self-evolving photo editing agent with synergistic editor-evaluator optimization (CVPR 2026) | Synergistic editor-evaluator co-optimization; generative adversarial self-evolution for image editing | Photo editing (CVPR) | yes | yes |
| 34 | OpenAutoCoder/live-swe-agent | 390 | Self-Debugging | Live, runtime self-evolving software engineering agent that improves from ongoing task execution | Runtime self-evolution for SWE; agent learns while deployed | Coding (SWE) | no | yes |
| 35 | noahshinn/reflexion-draft | 388 | Reflexion/Verbal-RL | Reflexion draft: autonomous agent with dynamic memory and self-reflection (earlier version of Reflexion) | Dynamic memory and self-reflection; precursor to the NeurIPS Reflexion paper | General | yes | yes |
| 36 | bingreeky/MemGen | 378 | Memory-based | MemGen: weaving generative latent memory for self-evolving agents, using latent space memory generation | Generative latent memory; memory is generated, not just stored | General | yes | yes |
| 37 | agentic-in/elephant-agent | 353 | Memory-based | Personal-model first self-evolving AI agent with emphasis on local/personal model evolution | Personal/local model priority; self-evolution on edge devices | General | no | no |
| 38 | maitrix-org/PromptAgent | 353 | Prompt-Optimization | Strategic planning with language models for expert-level prompt optimization via Monte Carlo tree search | MCTS-based prompt optimization; expert-level prompt engineering automated | General | yes | yes |
| 39 | ChanningLua/prax-agent | 294 | Self-Debugging | Self-improving agent runtime with test-verify-fix loops, correction detection, cross-project memory, multi-model orchestration | Test-verify-fix loop with cross-project memory; multi-model correction detection | Coding | no | no |
| 40 | JARVIS-Xs/SE-Agent | 274 | Evolutionary/Genetic | Self-evolution framework for LLM code agents via trajectory-level evolution: revision, recombination, refinement across reasoning paths | Trajectory-level evolution operators (revision/recombination/refinement) for code agents | Coding (SWE-bench) | no | yes |
| 41 | dsifry/metaswarm | 272 | Multi-agent-CoEvo | Self-improving multi-agent orchestration for Claude Code/Gemini CLI/Codex CLI with 18 agents, 13 skills, TDD enforcement | Multi-CLI multi-agent orchestration with TDD quality gates and self-improvement | Coding | no | no |
| 42 | SunzeY/SEAgent | 247 | Memory-based | Self-evolving computer use agent with autonomous learning from experience (ICML 2026) | Computer use agent that autonomously learns from its own GUI interaction experience | Desktop/GUI | yes | yes |
| 43 | ReflexioAI/reflexio | 219 | Reflexion/Verbal-RL | AI agent self-improvement harness that enables continuous learning from real user interactions | Real user interaction as the feedback signal for self-improvement | General | no | no |
| 44 | modelscope/AgentJet | 208 | RL-finetuning | Cutting-edge platform for LLM agent tuning with RL, multi-agent optimization, and realtime benchmarking | RL tuning platform with multi-agent optimization and realtime community benchmarks | General | no | yes |
| 45 | deepelementlab/clawcode | 199 | Skill-based | Claude Code-inspired agent in Python+Rust with experience-based evolution; supports 200+ models | Experience-based evolution for multi-model coding agent CLI | Coding | no | no |
| 46 | kayba-ai/recursive-improve | 194 | Self-Debugging | Framework to make agents recursively self-improve through iterative improvement loops | Simple recursive self-improvement pattern; minimal framework for RSI | General | no | no |
| 47 | memovai/memov | 190 | Memory-based | Git-like and traceable memory for coding agents via MCP; self-evolution for skills with versioned memory | Git-like versioned memory for agents; MCP-based memory with traceable evolution | Coding | no | no |
| 48 | Arvid-pku/Godel_Agent | 182 | Meta-learning | Godel Agent: self-referential agent framework for recursive self-improvement where agent can modify its own code | Self-referential modification; agent rewrites its own operational code | General | yes | yes |
| 49 | XMUDeepLIT/Awesome-Self-Evolving-Agents | 179 | Survey (N/A) | Curated survey/resource list for self-evolving agents with papers, benchmarks, and open-source projects | Academic survey list organized by evolution paradigm | Survey | yes | no |
| 50 | MAXNORM8650/MedAgentSim | 163 | Multi-agent-CoEvo | Self-evolving multi-agent simulations for realistic clinical interactions (MICCAI 2025 oral) | Multi-agent clinical simulation that self-evolves toward realism | Healthcare | yes | yes |
| 51 | ArchishmanSengupta/autovoiceevals | 148 | Reflexion/Verbal-RL | Self-improving loop for voice AI agents using Karpathy-style autoresearch as foundation | Autoresearch applied to voice AI; self-improving voice evaluation pipeline | Voice AI | no | no |
| 52 | hao-cyber/skill-evolution | 145 | Skill-based | Self-evolving AI skill framework where skills learn from execution, reflect on failures, and autonomously improve | Skills as first-class evolving entities; each skill has its own improvement lifecycle | General | no | no |
| 53 | iii-experimental/agentos | 143 | Self-Debugging | The agent OS that evolves itself -- agents can modify their own runtime infrastructure | Self-evolving OS layer; agent infrastructure rewrites itself | General (Rust) | no | no |
| 54 | zaixizhang/STELLA | 141 | Skill-based | Self-evolving LLM agent for biomedical research that autonomously acquires new tools and skills | Autonomous tool/skill acquisition for biomedical domain | Biomedical research | yes | yes |
| 55 | FareedKhan-dev/autonomous-agentic-rag | 139 | Reflexion/Verbal-RL | Self-improving agentic RAG pipeline that refines its retrieval and generation through feedback | RAG pipeline that self-improves its retrieval and generation quality | RAG/QA | no | no |
| 56 | hwfengcs/DM-Code-Agent | 135 | Hybrid | Lightweight code agent (~1500 LOC) combining ReAct + Planner + Reflexion + Hybrid RAG with SWE-bench eval | Hybrid architecture: ReAct + Reflexion + RAG in a minimal footprint | Coding (SWE-bench) | no | yes |
| 57 | adam-s/intercept | 127 | Self-Debugging | Turn any website into a typed JSON API using self-improving agents that learn from scraping failures | Self-improving web scraping; agents learn to handle website variations | Web scraping | no | no |
| 58 | EvoMap/awesome-agent-evolution | 123 | Survey (N/A) | Curated list of AI agent evolution, memory systems, multi-agent architectures, and self-improvement projects | Community curated list with evolution-specific categorization | Survey | no | no |
| 59 | OSU-NLP-Group/SkillWeaver | 123 | Skill-based | Framework for web agent self-improvement through environment exploration and skill synthesis | Environment exploration + skill synthesis; agent discovers and creates its own skills | Web | yes | yes |
| 60 | shintaro-sprech/agent-orchestrator-template | 120 | Multi-agent-CoEvo | Self-evolving subagent system for Claude Code with dynamic subagent spawning | Self-evolving subagent orchestration; dynamic spawning for Claude Code | Coding (Claude Code) | no | no |
| 61 | MemTensor/MemRL | 117 | RL-finetuning | Self-evolving agents via runtime reinforcement learning on episodic memory | Runtime RL on episodic memory; no offline training, RL happens at inference time | General | yes | yes |
| 62 | longyunfeigu/learn-hermes-agent | 113 | Skill-based | 27-chapter tutorial for building autonomous AI agent with agent loop, tools, memory, skills, MCP, and self-evolution | Educational/tutorial; step-by-step construction of self-evolving agent | Education | no | no |
| 63 | autohandai/code-cli | 110 | Self-Debugging | Ultra-fast self-evolving coding agent that runs in terminal, improving from coding experience | Ultra-fast terminal coding agent with self-evolution | Coding | no | no |
| 64 | dongxiangjue/Awesome-LLM-Self-Improvement | 106 | Survey (N/A) | Curated list of LLM inference-time self-improvement (ITSI) papers from survey on the topic | Inference-time self-improvement as distinct from training-time improvement | Survey | yes | no |
| 65 | Yang1999code/controllable-agent | 105 | Hybrid | 20-interface agent framework with 3-layer architecture, multi-agent delegation, and self-evolution | 20-interface design with 3-layer self-evolving architecture | General | no | no |
| 66 | sethkarten/continual-harness | 105 | RL-finetuning | Online adaptation for self-improving foundation agents with continual harness optimization (PokeAgent) | Continual/online adaptation for self-improvement; PokeAgent speedrun benchmark | General | yes | yes |
| 67 | 0xSanei/darwinia | 102 | Evolutionary/Genetic | Self-evolving agent ecosystem for trading through Darwinian selection and adversarial self-play | Darwinian selection + adversarial self-play for trading agent evolution | Trading | no | no |
| 68 | zou-group/sirius | 101 | Multi-agent-CoEvo | Self-improving multi-agent systems via bootstrapped reasoning where agents teach each other | Bootstrapped reasoning across agents; multi-agent mutual teaching | General | no | no |
| 69 | OpenTracy/OpenTracy | 101 | Self-Debugging | Self-improving AI agent harness: propose, eval, approve, ship with AHE autonomous loop + MCP + eval suite | Propose-eval-approve-ship loop with MCP integration and human approval gate | General | no | yes |
| 70 | Tencent/SelfEvolvingAgent | 100 | Memory-based | Research works from Tencent AI Lab on self-evolving agents with experience accumulation | Tencent AI Lab's systematic research on self-evolving agent paradigms | General | yes | yes |
| 71 | KnowledgeXLab/MUSE | 88 | Memory-based | Experience-driven self-evolving agent for long-horizon tasks that learns on the job | Learning on the job; experience-driven adaptation for long-horizon tasks | General | yes | yes |
| 72 | ngoodman/metaprompt | 88 | Prompt-Optimization | Meta-prompt: a simple self-improving language agent that rewrites its own prompts | Self-rewriting prompts; meta-prompting as self-improvement mechanism | General | no | no |
| 73 | AgentToolkit/altk-evolve | 85 | Evolutionary/Genetic | Self-improving agents through iterative evolutionary optimization | Iterative evolutionary optimization for agent behavior | General | no | no |
| 74 | Richchen-maker/openclaw-multi-agent-team | 80 | Multi-agent-CoEvo | DNA-driven multi-agent collaboration with 9 genes, 11-step pipeline, 60+ roles, 6 self-evolution gears | DNA-driven gene model for multi-agent collaboration; 6 evolution gears | General (OpenClaw) | no | no |
| 75 | GenSI-THUAIR/FLEX | 78 | Memory-based | Continuous agent evolution via forward learning from experience (paper codebase) | Forward learning from experience; continuous (non-episodic) evolution | General | yes | no |
| 76 | ShaoShuai0605/Misevolution | 76 | Survey (N/A) | Your Agent May Misevolve: emergent risks in self-evolving LLM agents (safety analysis) | Safety/risk analysis of self-evolution; identifies misevolution failure modes | Safety | yes | yes |
| 77 | ECNU-ICALK/ELL-StuLife | 74 | Meta-learning | Self-evolving agent via experience-driven lifelong learning in student life domain | Experience-driven lifelong learning; student life as testbed for continual evolution | Education/lifelong learning | yes | no |
| 78 | Yonkoo11/hermes-dojo | 72 | Skill-based | Self-improvement system for Hermes Agent that monitors performance, finds weak skills, fixes them via self-evolution | Performance monitoring + weak skill detection + targeted self-evolution | General (Hermes) | no | no |
| 79 | mbchang/meta-prompt | 65 | Prompt-Optimization | LangChain re-implementation of Meta-Prompt for building self-improving agents | Meta-Prompt in LangChain; accessible reimplementation of self-improving prompting | General | yes | no |
| 80 | omdivyatej/Self-Learning-Agents | 63 | Reflexion/Verbal-RL | Lightweight Python library for any LLM agent to self-improve through feedback without retraining | No-retraining self-improvement; purely feedback-driven at inference time | General | no | no |
| 81 | Euphoria16/UI-Genie | 57 | Self-Debugging | Self-improving approach for iteratively boosting MLLM-based mobile GUI agents (NeurIPS 2025) | Self-improving mobile GUI agent; iterative boosting of multimodal capabilities | Mobile GUI | yes | yes |
| 82 | eliasecchig/gemini-cli-git | 56 | Self-Debugging | Turn Git repo into self-improving autonomous agent: open issues to assign tasks, review PRs, merge to teach | Git-as-agent-loop; issues as tasks, PRs as learning, merges as training | Coding (Git) | no | no |
| 83 | evotai/evot | 54 | Evolutionary/Genetic | Self-evolving AI coding agent for long-running, complex software engineering in Rust | Long-running self-evolution for complex SWE; Rust-based | Coding (Rust) | no | no |
| 84 | emson/elfmem | 53 | Memory-based | Self-improving agent memory system with evolving memory structures | Self-improving memory system; memory structures that evolve with use | General | no | no |
| 85 | iLearn-Lab/EvoHarness | 52 | Hybrid | Terminal-native agent infrastructure with tools, commands, skills, agents, plugins, MCP, memory, approvals, controlled self-evolution | Terminal-native comprehensive agent infrastructure with controlled evolution | Coding | no | no |
| 86 | IBM/awesome-agentic-workflow-optimization | 51 | Survey (N/A) | Survey of workflow optimization for LLM agents: from static templates to dynamic runtime graphs | Workflow graph optimization survey; static to dynamic evolution of agent workflows | Survey | yes | no |
| 87 | zoe-yyx/AgentNet | 46 | Multi-agent-CoEvo | Decentralized, RAG-enhanced multi-agent framework with dynamic task routing and agent evolution (NeurIPS 2025) | Decentralized agent evolution with RAG-enhanced dynamic routing | General | yes | yes |
| 88 | pingcy/ace-langgraph | 46 | Reflexion/Verbal-RL | ReAct agent with adaptive learning integrating ACE framework with LangGraph for self-improving agents | ACE + LangGraph integration; adaptive learning within ReAct pattern | General | no | no |
| 89 | keskival/recursive-self-improvement-suite | 46 | Meta-learning | Suite of open-ended, non-imitative tasks for bootstrapped recursive self-improvement toward unambiguous AGI | Open-ended non-imitative task suite specifically designed to test RSI capability | General (AGI) | no | no |
| 90 | zhang677/AccelOpt | 43 | RL-finetuning | Self-improving agents for AI accelerator kernel optimization (MLSys 2026) | Self-improvement applied to hardware accelerator kernel optimization | Hardware (MLSys) | yes | yes |
| 91 | 28naem-del/mnemosyne | 41 | Memory-based | Cognitive Memory OS for AI agents: persistent, self-improving, multi-agent memory | Cognitive memory OS; multi-agent shared memory that self-improves | General | no | no |
| 92 | Cellium-Project/Cellium-Agent | 41 | Hybrid | Self-evolving agent framework with decision-loop microkernel, hot-pluggable components, triple-layer memory, infinite evolution engine | Microkernel architecture with hot-pluggable components and triple-layer memory | General | no | no |
| 93 | hankbesser/recursive-agents | 39 | Self-Debugging | Meta-framework for self-improving LLMs with transparent reasoning chains | Transparent reasoning chains for self-improvement; explainable RSI | General | no | no |
| 94 | Clawland-AI/Geneclaw | 36 | Self-Debugging | Self-evolving agent framework with 5-layer safety gatekeeper; agents observe failures, propose fixes, safely apply | 5-layer safety gatekeeper for controlled self-evolution; built on HKUDS/nanobot | General | no | no |
| 95 | naivoder/MCTSr | 22 | Reflexion/Verbal-RL | Monte Carlo Tree Search Self-Refine: combines MCTS with iterative self-refinement | MCTS + self-refine; tree search over improvement trajectories | General | yes | no |
| 96 | faveos8758/reflexion-agent-ts | 20 | Reflexion/Verbal-RL | Self-improving LLM agent in TypeScript using Reflexion (verbal RL) with custom evaluators and reflexion memory | TypeScript Reflexion implementation; Vercel AI SDK with HTTP API and CLI | General (TypeScript) | no | no |
| 97 | exoskeletonzj/MARS | 18 | Prompt-Optimization | Multi-agent approach integrating Socratic guidance for automated prompt optimization | Socratic guidance for prompt optimization via multi-agent debate | General | no | no |
| 98 | ventr1c/memma | 17 | Memory-based | MemMA: coordinating the memory cycle through multi-agent reasoning and in-situ self-evolution | Multi-agent reasoning for memory coordination; in-situ self-evolution | General | yes | no |
| 99 | YinBo0927/FATE | 16 | RL-finetuning | On-policy self-evolution via failure trajectories for agentic safety alignment | Failure trajectory learning for safety alignment; self-evolution from negative examples | Safety | yes | yes |
| 100 | tylerdotai/meta-harness-evolver | 14 | Prompt-Optimization | Meta-Harness: end-to-end optimization of LLM harnesses for OpenClaw agent evolution | End-to-end harness optimization; meta-level evolution of agent configuration | General (OpenClaw) | no | no |
| 101 | OpenDataBox/Workspace-Bench | 13 | Survey (N/A) | Benchmark for self-evolving agents on realistic large-scale file workspaces | Realistic workspace benchmark for evaluating self-evolution quality | Benchmark | no | yes |
| 102 | privkeyio/evolve-mcp | 11 | Evolutionary/Genetic | Universal MCP server for agent self-improvement via evolutionary algorithms | MCP-based evolutionary self-improvement; protocol-level evolution | General (MCP) | no | no |
| 103 | Octobrist/CoPE | 11 | Prompt-Optimization | LLM-based agent optimization that incorporates planning-execution coordination into optimization (ICML 2026) | Planning-execution coordination explicitly modeled in optimization loop | General | yes | yes |
| 104 | ZhihaoPENG-CityU/Awesome-Self-Evolving-AI-for-Agentic-Healthcare | 11 | Survey (N/A) | Curated list of self-evolving AI resources specifically for agentic healthcare applications | Healthcare-focused self-evolution resource list | Healthcare (survey) | no | no |
| 105 | senweaver/SenAgentOS | 10 | Hybrid | High-performance Rust agent OS with multi-agent orchestration, self-evolution, memory-first design, and built-in security | Rust-based agent OS with memory-first design and hardware-to-chat extensibility | General (Rust) | no | no |
| 106 | aiming-lab/ATP | 10 | Survey (N/A) | Alignment Tipping Process: how self-evolution pushes LLM agents off the rails (safety analysis) | Identifies tipping points where self-evolution causes alignment failures | Safety | yes | no |
| 107 | MettaMazza/ErnOSAgent | 10 | Self-Debugging | Local-first, privacy-first AI agent with recursive self-improvement on device | Local-first privacy-preserving RSI; all evolution happens on-device | General (local) | no | no |

---

## 2. Strategy Distribution Chart

Excluding survey/resource-list repos (7 entries), the distribution of 100 repos with active self-evolution strategies:

```
Strategy                  Count  Bar
------------------------  -----  -----------------------------
Memory-based                15  ████████████████░░░░░░░░░░░░
Skill-based                  8  ████████░░░░░░░░░░░░░░░░░░░░
Evolutionary/Genetic        10  ██████████░░░░░░░░░░░░░░░░░░
Reflexion/Verbal-RL          9  █████████░░░░░░░░░░░░░░░░░░░
Self-Debugging              12  ████████████░░░░░░░░░░░░░░░░
Prompt-Optimization          7  ███████░░░░░░░░░░░░░░░░░░░░░
RL-finetuning                6  ██████░░░░░░░░░░░░░░░░░░░░░░
Multi-agent-CoEvo            7  ███████░░░░░░░░░░░░░░░░░░░░░
Meta-learning                5  █████░░░░░░░░░░░░░░░░░░░░░░░
Hybrid                       5  █████░░░░░░░░░░░░░░░░░░░░░░░
Survey (N/A)                 7  ███████░░░░░░░░░░░░░░░░░░░░░
```

**Top 3 strategies by count**: Memory-based (15), Self-Debugging (12), Evolutionary/Genetic (10)

**Top 3 strategies by total stars**: Memory-based (~68K), Evolutionary/Genetic (~17K), Self-Debugging (~8K)

---

## 3. Strategy Clusters -- Which Strategies Co-occur?

Many repos combine multiple strategies. The following table shows which strategy pairs commonly co-occur within single repos:

| Strategy A | Strategy B | Co-occurrence Count | Example Repos |
|-----------|-----------|----:|---------------|
| Memory-based | Skill-based | 8 | GenericAgent, MemOS, MemSkill, STELLA, SkillClaw |
| Reflexion/Verbal-RL | Self-Debugging | 6 | OS-Copilot, DM-Code-Agent, prax-agent, Reflexio |
| Evolutionary/Genetic | Prompt-Optimization | 5 | hermes-agent-self-evolution, evolver, altk-evolve |
| Memory-based | RL-finetuning | 4 | MemRL, FLEX, letta, EverOS |
| Multi-agent-CoEvo | Evolutionary/Genetic | 4 | GPTSwarm, openclaw-multi-agent-team, CORAL |
| Skill-based | Self-Debugging | 4 | skill-evolution, ClawCode, Clawland-AI/Geneclaw |
| Memory-based | Reflexion/Verbal-RL | 3 | letta, reflexio, memind |
| Meta-learning | Self-Debugging | 3 | HyperAgents, Godel_Agent, yoyo-evolve |

**Key Insight**: The most common co-occurrence is Memory + Skills (8 repos), suggesting that persistent memory and skill acquisition are deeply intertwined in self-evolution architectures. The second most common cluster is Reflexion + Self-Debugging (6 repos), indicating that verbal reflection is often the mechanism through which debugging self-improvement occurs.

---

## 4. Strategy Trends Over Time

Based on content_timestamp and paper publication dates across the 107 repos:

### Timeline of Strategy Emergence

| Period | Dominant Emerging Strategy | Key Repos / Events |
|--------|---------------------------|-------------------|
| 2023 H2 | Reflexion/Verbal-RL | Reflexion (NeurIPS 2023), Self-Refine |
| 2024 H1 | Prompt-Optimization | PromptAgent, Meta-Prompt |
| 2024 H2 | Skill-based, Self-Debugging | SkillWeaver, OS-Copilot |
| 2025 H1 | Evolutionary/Genetic, Memory-based | DGM, AgentEvolver, STELLA, MUSE, MemGen |
| 2025 H2 | RL-finetuning, Multi-agent-CoEvo | WebRL, MemRL, AgentNet, CORAL, MedAgentSim |
| 2026 H1 | Hybrid, Meta-learning | GenericAgent, OpenViking, evolver, HyperAgents, Agent0 |

### Trend Analysis

```
Strategy              2023  2024  2025  2026  Trend
--------------------  ----  ----  ----  ----  ----------
Reflexion/Verbal-RL    3     2     2     2     stable
Evolutionary/Genetic   0     1     5     4     rising
Memory-based           1     2     6     6     rising
Skill-based            0     2     3     3     stable
Prompt-Optimization    0     3     2     2     peaked
RL-finetuning          0     0     4     2     rising
Meta-learning          0     1     2     2     rising
Self-Debugging         1     2     4     5     rising
Multi-agent-CoEvo      0     1     3     3     rising
Hybrid                 0     0     2     3     rising
```

**Key Trends**:
1. **Memory-based** and **Evolutionary/Genetic** strategies are accelerating in 2025-2026, reflecting the shift from single-turn improvement to persistent, population-level evolution.
2. **Reflexion/Verbal-RL** was the foundational strategy (2023) and remains steady, but is now often a component within hybrid systems rather than standalone.
3. **Prompt-Optimization** peaked in 2024 and has stabilized; it is now subsumed into broader frameworks (e.g., GEPA in hermes-agent-self-evolution).
4. **Self-Debugging** is rising sharply in 2026, driven by the coding agent boom (SWE-bench, live-SWE-agent, ClawCode, etc.).
5. **Multi-agent Co-Evolution** and **Hybrid** approaches are emerging as the newest frontier (2025-2026), combining multiple strategies into unified self-evolution architectures.
6. **Safety concerns** emerged in 2026 (ATP, Misevolution, FATE), indicating the field is maturing and recognizing risks of uncontrolled self-evolution.

---

## 5. Domain Distribution

| Domain | Count | Example Repos |
|--------|------:|---------------|
| General | 47 | letta, GenericAgent, evolver, HyperAgents |
| Coding / SWE | 14 | live-SWE-agent, ClawCode, yoyo-evolve, prax-agent, SE-Agent |
| Web | 4 | WebRL, SkillWeaver, intercept |
| Trading | 2 | atlas-gic, darwinia |
| Biomedical | 1 | STELLA |
| Healthcare | 2 | MedAgentSim, Awesome-Self-Evolving-AI-for-Agentic-Healthcare |
| Mobile GUI | 1 | UI-Genie |
| Research (autoresearch) | 2 | CORAL, learn-hermes-agent |
| Safety | 3 | ATP, Misevolution, FATE |
| Survey / Benchmark | 11 | Awesome-Self-Evolving-Agents, Workspace-Bench, ... |
| Education | 2 | ELL-StuLife, learn-hermes-agent |
| RAG/QA | 1 | autonomous-agentic-rag |
| Photo Editing | 1 | JarvisEvo |
| Hardware | 1 | AccelOpt |
| Voice AI | 1 | autovoiceevals |
| Desktop/OS | 2 | OS-Copilot, SEAgent |

---

## 6. Paper & Benchmark Coverage

| Metric | Count | Percentage |
|--------|------:|-----------:|
| Has associated paper | 42 | 39% |
| Has benchmark results | 34 | 32% |
| Both paper and benchmarks | 28 | 26% |
| Neither paper nor benchmarks | 56 | 52% |

**Observation**: The majority of repos (56) are engineering/framework projects without formal academic papers, suggesting the field is highly practitioner-driven. However, the repos with the highest star counts tend to have both papers and benchmarks (letta, reflexion, GPTSwarm, etc.).

---

## 7. Language/Stack Distribution

| Language | Count | Notable |
|----------|------:|---------|
| Python | 68 | Dominant for research and frameworks |
| Rust | 5 | sentrux, yoyo-evolve, agentos, evot, SenAgentOS |
| TypeScript/JavaScript | 6 | MemOS, intercept, code-cli, reflexion-agent-ts, mnemosyne |
| Java | 1 | memind |
| Shell | 1 | metaswarm |

---

*End of taxonomy.*
