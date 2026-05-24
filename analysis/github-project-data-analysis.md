# GitHub Project Data Analysis

Generated: 2026-05-24T17:27:40.143Z

## One-Sentence Compression

The project corpus has 416 timestamp-indexed raw GitHub captures, 416 classified repositories, 129 site/paper model-card projects, 71 strict evolution-theme repositories, and 166 broad evolution-related repositories.

## Corpus Funnel

| Layer | Count | Definition |
|---|---:|---|
| Raw GitHub captures | 416 | Records in `output/raw-github-timestamp-index.json`; each points to one `raw-github/*.md` capture. |
| Classified repositories | 416 | Rows in `research/repo-classification.json` with category, theme, stack, and time slice. |
| Analyzed model-card projects | 129 | Repositories in `site/src/data/projects.ts` that receive public project pages and reports. |
| Strict evolution-theme repositories | 71 | Classified rows whose `base_theme` is `evolution`. |
| Broad evolution-related repositories | 166 | Rows matching evolution/self-improvement/reflection/search keywords in repo, description, or evidence fields. |

## Raw Collection Categories

| Category | Count |
|---|---:|
| 框架/framework | 118 |
| 评测/evaluation | 96 |
| 教程/tutorial | 75 |
| 工具/tool | 56 |
| 应用/application | 47 |
| 论文代码/paper-code | 24 |

## Raw Collection Themes

| Theme | Count |
|---|---:|
| evaluation | 89 |
| memory | 77 |
| evolution | 71 |
| framework | 43 |
| education-list | 35 |
| research-agent | 31 |
| prompt-optimization | 26 |
| skill | 20 |
| coding-agent | 17 |
| workflow-automation | 6 |
| safety | 1 |

## Time Slices

| Time slice | Raw classified repos |
|---|---:|
| 2026-05 | 254 |
| unknown | 108 |
| 2026-04 | 8 |
| 2024-Q2 | 7 |
| 2026-03 | 7 |
| 2024-Q3 | 4 |
| 2025-11 | 4 |
| 2025-05 | 3 |
| 2026-01 | 3 |
| 2026-02 | 3 |
| early | 3 |
| 2024-Q1 | 2 |
| 2024-Q4 | 2 |
| 2025-09 | 2 |
| 2025-12 | 2 |
| 2025-02 | 1 |
| 2025-04 | 1 |
| 2025-07 | 1 |
| 2025-10 | 1 |

## Analyzed Project Release Timeline

| Created month | Repo | Category | Pattern | Source |
|---|---|---|---|---|
| 2022-09 | [carperai/openelm](https://github.com/carperai/openelm) | 进化式 Prompt 优化 | 进化/搜索循环 → 评估器/打分器 | github_api |
| 2023-01 | [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | 声明式 Prompt 优化 | 反馈-精炼 → 进化/搜索循环 → 评估器/打分器 | github_api |
| 2023-03 | [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 自主 Agent 平台 | 智能体编排 | github_api |
| 2023-03 | [camel-ai/camel](https://github.com/camel-ai/camel) | 角色扮演 Agent 框架 | 智能体编排 → 反馈-精炼 | github_api |
| 2023-03 | [noahshinn/reflexion](https://github.com/noahshinn/reflexion) | 反思记忆 | 进化/搜索循环 → 反思记忆 → 反馈-精炼 → 评估器/打分器 → 训练/数据循环 | github_api |
| 2023-03 | [madaan/self-refine](https://github.com/madaan/self-refine) | 反馈精炼 | 反馈-精炼 | github_api |
| 2023-04 | [automl/auto-sklearn](https://github.com/automl/auto-sklearn) | AutoML 框架 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2023-04 | [microsoft/CoML](https://github.com/microsoft/CoML) | ML 知识库驱动 | 反馈-精炼 → 评估器/打分器 | github_api |
| 2023-06 | [FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT) | 多 Agent 协作框架 | 智能体编排 → 反馈-精炼 | github_api |
| 2023-07 | [aiwaves-cn/agents](https://github.com/aiwaves-cn/agents) | 数据驱动 Agent 进化 | 进化/搜索循环 → 评估器/打分器 → 智能体编排 | github_api |
| 2023-08 | [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 图式 Agent 编排 | 智能体编排 | github_api |
| 2023-08 | [microsoft/autogen](https://github.com/microsoft/autogen) | 多 Agent 对话框架 | 智能体编排 | github_api |
| 2023-10 | [google-deepmind/opro](https://github.com/google-deepmind/opro) | LLM 作为优化器 | 进化/搜索循环 → 评估器/打分器 | github_api |
| 2023-10 | [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | 多 Agent 协作框架 | 智能体编排 | github_api |
| 2023-11 | [google-deepmind/funsearch](https://github.com/google-deepmind/funsearch) | 进化式数学发现 | 进化/搜索循环 → 评估器/打分器 | github_api |
| 2024-03 | [All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands) | AI 软件开发平台 | 智能体编排 | github_api |
| 2024-04 | [princeton-nlp/SWE-agent](https://github.com/princeton-nlp/SWE-agent) | 软件工程 Agent | 反馈-精炼 → 评估器/打分器 | github_api |
| 2024-07 | [shengranhu/adas](https://github.com/ShengranHu/ADAS) | Agent 架构自动搜索 | 进化/搜索循环 → 智能体编排 → 评估器/打分器 | github_api |
| 2024-08 | [alfa-group/tutorial_gp_llm](https://github.com/alfa-group/tutorial_gp_llm) | GP+LLM 教学 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2024-09 | [OpenBMB/AgentVerse](https://github.com/OpenBMB/AgentVerse) | 多 Agent 仿真平台 | 智能体编排 → 反思记忆 | local_git_first_commit |
| 2024-10 | [siyuyuan/evoagent](https://github.com/siyuyuan/evoagent) | 进化式多 Agent 系统 | 进化/搜索循环 → 智能体编排 | local_git_first_commit |
| 2024-11 | [xiaofangxd/LLM_EA](https://github.com/xiaofangxd/LLM_EA) | LLM+EA 交叉综述 | 文献综述 | local_git_first_commit |
| 2025-03 | [wuxingyu-ai/LLM4EC](https://github.com/wuxingyu-ai/LLM4EC) | LLM+EC 交叉综述 | 文献综述 | local_git_first_commit |
| 2025-05 | [DeepAuto-AI/automl-agent](https://github.com/DeepAuto-AI/automl-agent) | 多 Agent AutoML | 智能体编排 → 进化/搜索循环 → 评估器/打分器 | github_api |
| 2025-05 | [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve) | 进化式代码优化 | 进化/搜索循环 → 评估器/打分器 | github_api |
| 2025-07 | [JARVIS-Xs/SE-Agent](https://github.com/JARVIS-Xs/SE-Agent) | 代码智能体自进化 | 进化/搜索循环 → 评估器/打分器 → 智能体编排 | github_api |
| 2025-09 | [beeevita/EvoPrompt](https://github.com/beeevita/EvoPrompt) | 进化式 Prompt 优化 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2025-09 | [stitionai/devika](https://github.com/stitionai/devika) | AI 软件工程师 | 智能体编排 → 反馈-精炼 | local_git_first_commit |
| 2025-10 | [inter-co/science-codeevolve](https://github.com/inter-co/science-codeevolve) | 科学代码进化 | 进化/搜索循环 → 评估器/打分器 | github_api |
| 2025-10 | [CharlesQ9/Self-Evolving-Agents](https://github.com/CharlesQ9/Self-Evolving-Agents) | 自进化 Agent 综述 | 文献综述 | local_git_first_commit |
| 2025-11 | [modelscope/AgentEvolver](https://github.com/modelscope/AgentEvolver) | Agent 进化框架 | 进化/搜索循环 → 评估器/打分器 → 智能体编排 → 训练/数据循环 | github_api |
| 2025-12 | [JarvisPei/SCOPE](https://github.com/JarvisPei/SCOPE) | 上下文/Prompt 进化 | 进化/搜索循环 | github_api |
| 2026-01 | [ai4co/rl4co](https://github.com/ai4co/rl4co) | RL 组合优化基准 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-01 | [ai4co/reevo](https://github.com/ai4co/reevo) | 反射式进化搜索 | 进化/搜索循环 → 反思记忆 → 评估器/打分器 | local_git_first_commit |
| 2026-02 | [THUDM/AgentBench](https://github.com/THUDM/AgentBench) | Agent 评测基准 | 评估器/打分器 | local_git_first_commit |
| 2026-02 | [CMA-ES/pycma](https://github.com/CMA-ES/pycma) | 经典进化策略 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-02 | [YoungDubbyDu/LLM-Agent-Optimization](https://github.com/YoungDubbyDu/LLM-Agent-Optimization) | LLM Agent 优化综述 | 文献综述 | local_git_first_commit |
| 2026-03 | [OPPO-Mente-Lab/LLM-Self-Judge](https://github.com/OPPO-Mente-Lab/LLM-Self-Judge) | 自评判训练 | 进化/搜索循环 → 评估器/打分器 → 智能体编排 → 训练/数据循环 | github_api |
| 2026-03 | [facebookresearch/nevergrad](https://github.com/facebookresearch/nevergrad) | 无梯度优化框架 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-03 | [FeiLiu36/LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) | LLM 驱动算法设计综述 | 文献综述 | local_git_first_commit |
| 2026-03 | [Zesearch/self-improvement-llm](https://github.com/Zesearch/self-improvement-llm) | LLM 自改进综述 | 文献综述 | local_git_first_commit |
| 2026-04 | [DEAP/deap](https://github.com/DEAP/deap) | 经典进化算法框架 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-04 | [ZJU-LLM-Safety/DARWIN](https://github.com/ZJU-LLM-Safety/DARWIN) | 安全策略进化 | 进化/搜索循环 → 反思记忆 | github_api |
| 2026-05 | [EvoAgentX/EvoAgentX](https://github.com/EvoAgentX/EvoAgentX) | 自进化 Agent 生态系统 | 进化/搜索循环 → 智能体编排 → 评估器/打分器 → 反馈-精炼 | local_git_first_commit |
| 2026-05 | [icaros-usc/pyribs](https://github.com/icaros-usc/pyribs) | 质量多样性优化 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-05 | [xai-liacs/LLaMEA](https://github.com/XAI-liacs/LLaMEA) | LLM 驱动算法自动发现 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-05 | [Genentech/OpenTreeSearch](https://github.com/Genentech/opentreesearch) | LLM 引导代码进化 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-05 | [ai4co/awesome-fm4co](https://github.com/ai4co/awesome-fm4co) | 基础模型+组合优化综述 | 文献综述 | local_git_first_commit |
| 2026-05 | [OpenDevin/OpenDevin](https://github.com/OpenDevin/OpenDevin) | AI 软件开发平台 | 智能体编排 → 反馈-精炼 | local_git_first_commit |
| unknown | [803/skills-supply](https://github.com/803/skills-supply) | Cross-Agent Skill Supply Chain | agents.toml manifest -> GitHub/plugin/local package source -> sk sync -> per-agent skill directories -> reconciled skill state | github_api_fetch_error |
| unknown | [a-evo-lab/a-evolve](https://github.com/a-evo-lab/a-evolve) | Universal Self-Improving Agent Infrastructure | base agent -> benchmark adapter -> evolution loop -> workspace mutation over prompts/skills/memory -> benchmarked improved agent | github_api_fetch_error |
| unknown | [aden-hive/hive](https://github.com/aden-hive/hive) | 生产级 Multi-Agent Harness | 目标描述 -> 自动生成 graph -> 执行/观测 -> 失败捕获 -> graph evolution | github_api_fetch_error |
| unknown | [adolfousier/opencrabs](https://github.com/adolfousier/opencrabs) | Self-Improving Terminal Agent | local brain files -> procedural/episodic memory -> hybrid recall -> commands/tools/channels -> self-update hooks | github_api_fetch_error |
| unknown | [ai-boost/awesome-harness-engineering](https://github.com/ai-boost/awesome-harness-engineering) | Harness Engineering 资源索引 | 资源索引 → harness primitives → 评测/记忆/工具/权限分类 | github_api_fetch_error |
| unknown | [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | Self-Evolving Research Agent Pipeline | research idea -> multi-agent debate -> sandbox experiment -> claim verification -> lessons/evolution -> paper deliverables | github_api_fetch_error |
| unknown | [aiming-lab/SimpleMem](https://github.com/aiming-lab/SimpleMem) | Self-Evolving Agent Memory Stack | dialogue/media stream -> compressed memory units -> intent-aware retrieval -> EvolveMem optimize loop -> guarded config update | github_api_fetch_error |
| unknown | [aisa-group/skill-inject](https://github.com/aisa-group/skill-inject) | Agent Skill Security Benchmark | skill file injection -> containerized agent run -> policy condition -> LLM judge/evaluation -> ablation comparison | github_api_fetch_error |
| unknown | [AMA-Bench/AMA-Bench](https://github.com/AMA-Bench/AMA-Bench) | Agent 长程记忆基准 | 长轨迹 → 记忆构建/检索接口 → QA/MCQ → LLM-as-judge 与 leaderboard | github_api_fetch_error |
| unknown | [anthropics/skills](https://github.com/anthropics/skills) | 官方 Agent Skills 标准样例库 | 官方技能规范 -> 示例技能 -> Claude Code/Claude API 加载 | github_api_fetch_error |
| unknown | [beita6969/ScienceClaw](https://github.com/beita6969/ScienceClaw) | Self-Evolving Research Agent | research query -> field-specific skills -> persistent memory -> citation-checked analysis -> post-task reflection and skill evolution | github_api_fetch_error |
| unknown | [china-qijizhifeng/agentic-Harness-engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering) | Harness 进化工程 | 评估器/打分器 → 工具/提示/记忆/子智能体进化 → 回归验证 | github_api_403 |
| unknown | [chriscox/agent-skills](https://github.com/chriscox/agent-skills) | Reusable Coding Agent Skills | reusable workflow skill -> install script -> project planner/docs sync -> orchestrator plus coding-agent sharing -> cross-team behavior consistency | github_api_fetch_error |
| unknown | [claw-bench/claw-bench](https://github.com/claw-bench/claw-bench) | 真实 Agent 任务基准 | 真实任务集 → skill.md 指令 → pytest 验证器 → 公开榜单 | github_api_fetch_error |
| unknown | [claw-eval/claw-eval](https://github.com/claw-eval/claw-eval) | 可信 Agent 评测 | 人类验证任务 → Pass^3 多次运行 → 全轨迹审计 | github_api_fetch_error |
| unknown | [ClawBio/ClawBio](https://github.com/ClawBio/ClawBio) | Bioinformatics Agent Skill Library | domain skill spec -> validated Python workflow -> reproducibility bundle -> benchmark scorer -> local-first agent execution | github_api_fetch_error |
| unknown | [clawdotnet/openclaw.net](https://github.com/clawdotnet/openclaw.net) | .NET Self-Hosted Agent Runtime | self-hosted gateway -> OpenAI-compatible API -> tool execution -> MCP/memory topics -> NativeAOT deployment | github_api_fetch_error |
| unknown | [CodeFuse-ML/awesome-code-llm](https://github.com/CodeFuse-ML/awesome-code-llm) | 代码 LLM 综述 | 文献综述 | github_api_403 |
| unknown | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Agent Skills 社区资源索引 | 社区技能目录 -> 分类/用例 -> 跨 Codex/Claude/Cursor/Gemini 复用 | github_api_fetch_error |
| unknown | [cxcscmu/SkillLearnBench](https://github.com/cxcscmu/SkillLearnBench) | Agent Skill Continual-Learning Benchmark | skill generation method -> skill-dependent task suite -> containerized agent trials -> task/skill/trajectory metrics -> continual learning comparison | github_api_fetch_error |
| unknown | [dmgrok/agent_skills_directory](https://github.com/dmgrok/agent_skills_directory) | Agent 技能发现索引 | 技能目录聚合 → 质量/维护/安全评分 → 项目相关性推荐 | github_api_fetch_error |
| unknown | [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | Self-Evolving Agent Memory OS | long-term memory methods -> hypergraph architecture -> use-case integrations -> memory/evolution benchmark suites | github_api_403 |
| unknown | [EvoMap/evolver](https://github.com/EvoMap/evolver) | 可审计 Agent 演化引擎 | Genome Evolution Protocol → Genes/Capsules/Events → 可审计演化 | github_api_403 |
| unknown | [GeniusHTX/SWE-Skills-Bench](https://github.com/GeniusHTX/SWE-Skills-Bench) | Agent Skills 效果基准 | 49 SWE 任务 -> skill/no-skill 对照 -> Docker 执行 -> pass-rate/token/duration 对比 | github_api_fetch_error |
| unknown | [getzep/graphiti](https://github.com/getzep/graphiti) | Temporal Context Graph Agent Memory | 交互/企业数据 -> temporal context graph -> provenance/ontology -> agent 检索与 MCP memory | github_api_fetch_error |
| unknown | [huggingface/skills](https://github.com/huggingface/skills) | Agent Skills Registry | AI/ML task domain -> SKILL.md package -> agent marketplace/install path -> reusable HF workflow execution | github_api_fetch_error |
| unknown | [Human-Agent-Society/CORAL](https://github.com/Human-Agent-Society/CORAL) | Multi-Agent Evolution Infrastructure | task + grader -> isolated worktrees -> shared .coral/public state -> graded commits -> heartbeat reflect/consolidate/pivot -> multi-agent evolution | github_api_fetch_error |
| unknown | [HUST-AI-HYZ/MemoryAgentBench](https://github.com/HUST-AI-HYZ/MemoryAgentBench) | Incremental Agent Memory Benchmark | incremental multi-turn interaction -> memory injection -> repeated queries -> retrieval/learning/conflict metrics -> agent memory comparison | github_api_fetch_error |
| unknown | [iii-experimental/agentos](https://github.com/iii-experimental/agentos) | Self-Evolving Agent Operating System | narrow workers -> function registration -> trigger bus -> traces/state/retries -> dynamic function evolution loop | github_api_fetch_error |
| unknown | [jayzeng/agentmemory](https://github.com/jayzeng/agentmemory) | Coding Agent Memory CLI | agent turn -> local markdown memory -> qmd search -> selective context injection -> skill-installed recall | github_api_fetch_error |
| unknown | [jbrahy/meta-agent-teams](https://github.com/jbrahy/meta-agent-teams) | Self-Improving Agent Team Framework | human feedback -> meta-agent proposes evolution -> auditor checks drift/regression -> git-backed history -> team prompt/role update | github_api_fetch_error |
| unknown | [JordanMcCann/agentmemory](https://github.com/JordanMcCann/agentmemory) | Agent Memory Benchmark Claim | ingest sessions -> graph/vector/BM25 recall -> context build -> LongMemEval real-retrieval run -> legitimacy audit | github_api_fetch_error |
| unknown | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 科研 Agent Skills 工作流库 | 科研任务域 -> 技能包/数据库接口 -> 多步科学工作流 | github_api_fetch_error |
| unknown | [langchain-ai/langmem](https://github.com/langchain-ai/langmem) | Agent 长期记忆 SDK | 对话/交互 -> 记忆抽取 -> hot-path 工具检索 -> LangGraph 长期存储 | github_api_fetch_error |
| unknown | [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | Token 高效自进化 Agent | 上下文密度最大化 → 技能树增长 → 反思/记忆压缩 | github_api_403 |
| unknown | [matrixorigin/Memoria](https://github.com/matrixorigin/Memoria) | Versioned Agent Memory Infrastructure | agent memory mutation -> snapshot/branch/merge/rollback -> contradiction detection -> audit trail -> consistent long-term context | github_api_fetch_error |
| unknown | [meituan/EvoCUA](https://github.com/meituan/EvoCUA) | Computer Use Agent 进化模型 | GUI 多模态轨迹 → CUA 训练/评测 → OSWorld/WAA 跨环境泛化 | github_api_fetch_error |
| unknown | [mem0ai/mem0](https://github.com/mem0ai/mem0) | Agent 通用记忆层 | 用户/会话/Agent 记忆 → 多信号检索 → agent runtime 插件化 | github_api_fetch_error |
| unknown | [mem0ai/memory-benchmarks](https://github.com/mem0ai/memory-benchmarks) | Memory Benchmark Suite | memory benchmark dataset -> ingest/search/evaluate pipeline -> answerer/judge scoring -> UI/results comparison | github_api_fetch_error |
| unknown | [memodb-io/memobase](https://github.com/memodb-io/memobase) | 用户画像长期记忆后端 | 聊天 blobs -> buffer 批处理 -> user profile/event timeline -> prompt context API | github_api_fetch_error |
| unknown | [MemoriLabs/Memori](https://github.com/memorilabs/memori) | Agent-Native Memory Infrastructure | agent execution/conversation -> structured memory capture -> background augmentation -> recall on demand -> benchmarked context reduction | github_api_fetch_error |
| unknown | [memtensor/memos](https://github.com/memtensor/memos) | Self-Evolving Memory OS | agent event/tool trace -> memory cube/API -> hybrid retrieval/governance -> skill/world-model crystallization -> reusable long-term memory | github_api_fetch_error |
| unknown | [MemTensor/MemRL](https://github.com/MemTensor/MemRL) | Runtime Reinforcement Memory | episodic memory -> two-phase retrieval -> environmental feedback -> runtime reinforcement update -> benchmark transfer | github_api_fetch_error |
| unknown | [microsoft/STATE-Bench](https://github.com/microsoft/STATE-Bench) | Stateful Agent Memory Benchmark | enterprise task suite -> sandbox database/tools/user simulator -> stateful agent execution -> deterministic assertions -> memory impact metrics | github_api_fetch_error |
| unknown | [microsoft/WindowsAgentArena](https://github.com/microsoft/WindowsAgentArena) | Windows OS Agent Benchmark | Windows 11 VM/golden image -> multimodal OS agent -> scalable benchmark execution -> report metrics | github_api_fetch_error |
| unknown | [MicrosoftDocs/Agent-Skills](https://github.com/MicrosoftDocs/Agent-Skills) | 企业文档驱动 Agent Skills | Microsoft Learn 文档 -> 技能扫描/分类 -> coding agent 按需加载 | github_api_fetch_error |
| unknown | [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 24/7 Proactive Agent Memory | always-on interaction stream -> hierarchical memory filesystem -> intent inference -> proactive agent action | github_api_fetch_error |
| unknown | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 自改进个人 Agent 运行时 | 反思记忆 → 技能生成/改进 → 消息/自动化运行时 | github_api_403 |
| unknown | [NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution) | 技能与提示进化 | 执行轨迹 → GEPA/DSPy 候选变体 → 评估选择 | github_api_403 |
| unknown | [obra/superpowers](https://github.com/obra/superpowers) | Agentic 技能方法论 | 方法论/技能库 → 计划/执行/评审/TDD → 跨 Agent 复用 | github_api_403 |
| unknown | [OiiOAI/MOLT](https://github.com/OiiOAI/MOLT) | Reflexive Co-Evolution Engine | multi-agent traces -> structural friction observation -> root-cause attribution -> evidence-backed findings -> protocol/memory/team evolution | github_api_fetch_error |
| unknown | [OneWave-AI/claude-skills](https://github.com/OneWave-AI/claude-skills) | Production Claude Skills Library | task domain -> self-contained SKILL.md -> Claude Code install -> agent-army / specialist workflow execution | github_api_fetch_error |
| unknown | [OpenBMB/EdgeClaw](https://github.com/OpenBMB/EdgeClaw) | Edge-Cloud Personal Agent Runtime | edge runtime -> cloud collaboration -> cost router -> memory engine -> skill/tool governance -> self-driven agent loop | github_api_fetch_error |
| unknown | [openclaw/clawbench](https://github.com/openclaw/clawbench) | Agent Harness 评测诊断 | 执行轨迹 → 可靠性/噪声分解 → harness/config/model 联合评分 | github_api_fetch_error |
| unknown | [openclaw/openclaw](https://github.com/openclaw/openclaw) | 个人 Agent 产品运行时 | 本地优先运行时 → 多渠道入口 → 技能/工具/会话闭环 | github_api_403 |
| unknown | [OpenHands/benchmarks](https://github.com/OpenHands/benchmarks) | OpenHands Agent Evaluation Harness | OpenHands agent -> benchmark adapter -> standardized evaluation pipeline -> migration to V1 Software Agent SDK | github_api_fetch_error |
| unknown | [pinchbench/skill](https://github.com/pinchbench/skill) | 真实 Agent 任务基准 | 真实任务集 → 自动/LLM 评分 → 会话转录分析 | github_api_403 |
| unknown | [pjt222/agent-almanac](https://github.com/pjt222/agent-almanac) | Executable Skill and Agent Almanac | skill/agent/team catalog -> symlink/install layout -> interactive visualization -> reusable engineering procedures | github_api_fetch_error |
| unknown | [princeton-pli/hal-harness](https://github.com/princeton-pli/hal-harness) | Holistic Agent Evaluation Harness | agent implementation -> hal-eval benchmark adapter -> parallel local/cloud runner -> traces/cost logs -> encrypted leaderboard upload | github_api_fetch_error |
| unknown | [psenger/ai-agent-skills](https://github.com/psenger/ai-agent-skills) | Production Agent Skills Pack | skill standard -> curated skill packages -> npx/marketplace install -> cross-tool agent workflows | github_api_fetch_error |
| unknown | [pureples/pureples](https://github.com/pureples/pureples) | GP+LLM 代码进化 | 进化/搜索循环 → 评估器/打分器 | github_api_403 |
| unknown | [Randroids-Dojo/skills](https://github.com/Randroids-Dojo/skills) | Agent Skill Loop Library | skill bundle -> plugin manifest -> Codex/Claude/OpenCode discovery -> reusable autonomous loop -> cross-agent install path | github_api_fetch_error |
| unknown | [raphaelchristi/harness-evolver](https://github.com/raphaelchristi/harness-evolver) | Harness 自进化工具 | 失败数据 → 多 proposer 修改 harness → gate 拒绝退化 → 自动合并赢家 | github_api_fetch_error |
| unknown | [rendro/sediment](https://github.com/rendro/sediment) | Local-First Agent Memory MCP | local memory store -> vector plus graph index -> scoped recall -> decay/trust rerank -> MCP clients | github_api_fetch_error |
| unknown | [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | Agent 持久记忆层 | 持久记忆 → 知识图谱/混合搜索 → 多 Agent harness 接入 | github_api_403 |
| unknown | [ServiceNow/BrowserGym](https://github.com/ServiceNow/BrowserGym) | Web Agent Benchmark Gym | Gym environment -> browser task benchmarks -> agent loop -> reward/termination metrics | github_api_fetch_error |
| unknown | [simota/agent-skills](https://github.com/simota/agent-skills) | Cross-Agent Skills and Nexus Orchestrator | task request -> Nexus chain design -> specialist skill handoff -> platform-agnostic agent execution | github_api_fetch_error |
| unknown | [SJTU-IPADS/SkVM](https://github.com/SJTU-IPADS/SkVM) | Skill Virtual Machine | skill profile -> AOT compilation -> JIT optimization -> benchmark across harness/model pairs | github_api_fetch_error |
| unknown | [sudokrang/aceforge](https://github.com/sudokrang/aceforge) | OpenClaw 技能自进化引擎 | 工具调用观察 → 模式提炼 → SKILL.md 生成 → adversarial validation → 人类批准 | github_api_fetch_error |
| unknown | [swarmclawai/swarmclaw](https://github.com/swarmclawai/swarmclaw) | Self-Hosted Agent Runtime | agent runtime -> memory and MCP connectors -> schedules/delegation -> swarm workflows -> marketplace/feed/vault surfaces | github_api_fetch_error |
| unknown | [TerryFYL/openclaw-evolution-framework](https://github.com/TerryFYL/openclaw-evolution-framework) | Continuous Learning Harness | cron trigger -> time/theme guard -> deep exploration -> markdown insight -> self-trigger next round -> summary report | github_api_fetch_error |
| unknown | [TheQtCompanyRnD/agent-skills](https://github.com/TheQtCompanyRnD/agent-skills) | Industrial Agent Skill Pack | domain engineering standards -> SKILL.md skill directories -> deterministic lint rules -> parallel deep-analysis agents -> cross-tool install paths | github_api_fetch_error |
| unknown | [TiMEM-AI/timem](https://github.com/TiMEM-AI/timem) | 长程 Agent 时间记忆 | 时间层级记忆树 → 语义巩固 → 复杂度自适应召回 | github_api_fetch_error |
| unknown | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 个人 Agent 产品与记忆系统 | 本地记忆/wiki → 第三方集成 → token 压缩/工具调用 | github_api_403 |
| unknown | [trillskillz/clawdmarket](https://github.com/trillskillz/clawdmarket) | Agent-to-Agent Marketplace Evolution Loop | agent discovery -> task/bid marketplace -> escrow/proof -> seller benchmark -> prompt variants -> judge selection -> lineage re-registration | github_api_fetch_error |
| unknown | [vectorize-io/agent-memory-benchmark](https://github.com/vectorize-io/agent-memory-benchmark) | Agent Memory Benchmark | dataset ingest -> memory provider retrieve -> answer generation -> judge scoring -> speed/token/cost comparison | github_api_fetch_error |
| unknown | [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | Agent Skills Registry | official/community skill source -> curated skill index -> agent compatibility metadata -> install/read path -> reusable workflow execution | github_api_fetch_error |
| unknown | [xlang-ai/OSWorld](https://github.com/xlang-ai/OSWorld) | Computer-use Agent OS Benchmark | 真实桌面任务 -> 虚拟机/云环境 -> multimodal agent actions -> benchmark result comparison | github_api_fetch_error |
| unknown | [ynulihao/AgentSkillOS](https://github.com/ynulihao/AgentSkillOS) | Agent Skill Retrieval and Orchestration OS | large skill ecosystem -> retrieval -> orchestration/composition -> batch execution -> benchmarked skill workflows | github_api_fetch_error |
| unknown | [zilliztech/memsearch](https://github.com/zilliztech/memsearch) | Agent Memory Search Layer | markdown memory files -> hybrid BM25/vector index -> agent recall context -> answer/writeback -> re-index or live watch | github_api_fetch_error |

## Top Strict Evolution-Theme Raw Repositories

| Repo | Stars | Category | Time slice | Description |
|---|---:|---|---|---|
| [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | 12600 | 应用/application | 2026-05 | AutoResearchClaw 是从 research idea 到 paper 的自主/协作式科研 agent 管线，结合多 agent debate、实验沙箱、claim verification、HITL co-pilot、MetaClaw cross-run learning 和 ARC-Bench。 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10400 | 框架/framework | 2026-05 | Aden Hive 是生产 AI 的 multi-agent harness，强调状态持久化、崩溃恢复、成本控制、审计轨迹、MCP 工具集成和失败驱动的 graph evolution。 |
| [metauto-ai/gptswarm](https://github.com/metauto-ai/gptswarm) | 998 | 应用/application | 2026-05 | 🐝 The First Self-Improving agents with RL / Prompting Optimization |
| [adolfousier/opencrabs](https://github.com/adolfousier/opencrabs) | 755 | 应用/application | 2026-05 | OpenCrabs 是受 OpenClaw 启发的单二进制多渠道 AI agent，强调本地 brain files、memory search、custom commands、cron/background jobs 和 self-update 组成的自改进循环。 |
| [human-agent-society/coral](https://github.com/Human-Agent-Society/CORAL) | 667 | 框架/framework | 2026-05 | CORAL 是面向 open-ended discovery 的多代理自主演化基础设施，用隔离 git worktrees、共享状态目录、grader daemon、heartbeat prompt 和多 runtime 集成推动 agent teams 连续改进。 |
| [a-evo-lab/a-evolve](https://github.com/a-evo-lab/a-evolve) | 552 | 论文代码/paper-code | 2026-05 | A-Evolve 是通用 self-improving agent 基础设施：给定 base agent、benchmark 和 evolution algorithm，就把 prompt、skills、memory 等 agent workspace 文件作为可变状态进行迭代。 |
| [thudm/webrl](https://github.com/thudm/webrl) | 524 | 应用/application | 2026-05 | Building Open LLM Web Agents with Self-Evolving Online Curriculum RL |
| [ecnu-icalk/autoskill](https://github.com/ecnu-icalk/autoskill) | 424 | 工具/tool | 2026-05 | AutoSkill: Experience-Driven Lifelong Learning via Skill Self-Evolution |
| [china-qijizhifeng/agentic-Harness-engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering) | 391 | 框架/framework | 2026-05 | Agentic Harness Engineering treats prompts, tools, middleware, skills, sub-agents, memory, and evaluator scaffolds as evolvable harness surfaces while the base model stays fixed. |
| [feiliu36/eoh](https://github.com/feiliu36/eoh) | 319 | 应用/application | unknown | Evolution of Heuristics |
| [meituan/EvoCUA](https://github.com/meituan/EvoCUA) | 317 | 论文代码/paper-code | 2026-05 | 美团 EvoCUA 计算机使用 Agent 项目，发布 EvoCUA-32B/8B 并在 OSWorld、WindowsAgentArena 等 GUI 自动化评测上报告结果。 |
| [brain-research/guided-evolutionary-strategies](https://github.com/brain-research/guided-evolutionary-strategies) | 273 | 教程/tutorial | unknown | Guided Evolutionary Strategies |
| [kayba-ai/recursive-improve](https://github.com/kayba-ai/recursive-improve) | 194 | 应用/application | 2026-05 | 🪞 Make your agents recursively self-improve |
| [arvid-pku/godel/agent](https://github.com/arvid-pku/godel/agent) | 182 | 框架/framework | 2026-05 | Gödel Agent: A Self-Referential Agent Framework for Recursive Self-Improvement |
| [xmudeeplit/awesome-self-evolving-agents](https://github.com/xmudeeplit/awesome-self-evolving-agents) | 181 | 工具/tool | 2026-05 | A Survey of Self-Evolving Agents / A curated list of resources (surveys, papers, benchmarks, and opensource projects) on Self-Evolving Agents. |
| [maxnorm8650/medagentsim](https://github.com/maxnorm8650/medagentsim) | 163 | 评测/evaluation | 2026-05 | MedAgentSim: Self-Evolving Multi-Agent Simulations for Realistic Clinical Interactions, MICCAI 2025 (oral and early accepted) |
| [hao-cyber/skill-evolution](https://github.com/hao-cyber/skill-evolution) | 145 | 框架/framework | 2026-05 | Self-evolving AI skill framework — skills that learn from execution, reflect on failures, and autonomously improve themselves |
| [iii-experimental/agentos](https://github.com/iii-experimental/agentos) | 145 | 框架/framework | 2026-05 | AgentOS 是 iii engine 上的 self-evolving agent OS，把 worker、function、trigger 三个原语放到统一 bus 上，并把 function generate/register/eval/feedback/promote 作为自进化路径。 |
| [wuxingyu-ai/llm4ec](https://github.com/wuxingyu-ai/llm4ec) | 139 | 教程/tutorial | 2026-05 | A list of awesome papers and resources of the intersection of Large Language Models and Evolutionary Computation. |
| [evomap/awesome-agent-evolution](https://github.com/evomap/awesome-agent-evolution) | 123 | 工具/tool | 2026-05 | A curated list of AI Agent evolution, memory systems, multi-agent architectures, and self-improvement projects. / evomap.ai |
| [osu-nlp-group/skillweaver](https://github.com/osu-nlp-group/skillweaver) | 123 | 框架/framework | 2024-Q3 | SkillWeaver is a framework to enable web agent self-improvement through environment exploration and skill synthesis. |
| [memtensor/memrl](https://github.com/memtensor/memrl) | 117 | 论文代码/paper-code | 2026-05 | MemRL 是自进化 agent 的论文代码，用 episodic memory 上的 runtime reinforcement learning 代替参数微调，通过环境反馈筛选高效策略并在多个 benchmark 上验证持续改进。 |
| [fusionbrainlab/gigaevo-core](https://github.com/fusionbrainlab/gigaevo-core) | 116 | 工具/tool | unknown | Evolutionary algorithm that uses Large Language Models (LLMs) to automatically improve programs through iterative mutation and selection |
| [dongxiangjue/awesome-llm-self-improvement](https://github.com/dongxiangjue/awesome-llm-self-improvement) | 106 | 工具/tool | 2026-05 | A curated list of awesome LLM Inference-Time Self-Improvement (ITSI, pronounced "itsy") papers from our recent survey: A Survey on Large Language Model Inference-Time Self-Improvement. |
| [0xsanei/darwinia](https://github.com/0xsanei/darwinia) | 102 | 框架/framework | 2026-05 | The Self-Evolving Agent Ecosystem — Trading agents that evolve through Darwinian selection and adversarial self-play |

## Writing Implications

- The paper should describe a funnel, not a flat list: raw captures are the discovery layer, classified rows are the analysis layer, and the 129 model-card projects are the teaching/review layer.
- The strict evolution subset should drive the conceptual argument; the broader subset explains adjacent attention from memory, evaluation, coding agents, prompt optimization, and framework infrastructure.
- The timeline must distinguish repository creation time from latest activity time. Raw `time_slice` is an activity/content timestamp; analyzed project `created_at` comes from GitHub API where available.
- Unknown timestamps remain a bias source and should be reported rather than hidden.
