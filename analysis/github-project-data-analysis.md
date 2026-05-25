# GitHub Project Data Analysis

Generated: 2026-05-25T07:24:40.992Z

## One-Sentence Compression

The project corpus has 486 timestamp-indexed raw GitHub captures, 486 classified repositories, 204 site/paper model-card projects, 79 strict evolution-theme repositories, and 176 broad evolution-related repositories.

## Corpus Funnel

| Layer | Count | Definition |
|---|---:|---|
| Raw GitHub captures | 486 | Records in `output/raw-github-timestamp-index.json`; each points to one `raw-github/*.md` capture. |
| Classified repositories | 486 | Rows in `research/repo-classification.json` with category, theme, stack, and time slice. |
| Analyzed model-card projects | 204 | Repositories in `site/src/data/projects.ts` that receive public project pages and reports. |
| Strict evolution-theme repositories | 79 | Classified rows whose `base_theme` is `evolution`. |
| Broad evolution-related repositories | 176 | Rows matching evolution/self-improvement/reflection/search keywords in repo, description, or evidence fields. |

## Raw Collection Categories

| Category | Count |
|---|---:|
| 框架/framework | 138 |
| 评测/evaluation | 98 |
| 教程/tutorial | 91 |
| 工具/tool | 82 |
| 应用/application | 47 |
| 论文代码/paper-code | 29 |
| 评测/benchmark | 1 |

## Raw Collection Themes

| Theme | Count |
|---|---:|
| memory | 92 |
| evaluation | 89 |
| evolution | 79 |
| skill | 60 |
| framework | 50 |
| education-list | 35 |
| research-agent | 31 |
| prompt-optimization | 26 |
| coding-agent | 17 |
| workflow-automation | 6 |
| safety | 1 |

## Time Slices

| Time slice | Raw classified repos |
|---|---:|
| 2026-05 | 326 |
| unknown | 107 |
| 2024-Q2 | 7 |
| 2026-03 | 7 |
| 2026-04 | 7 |
| 2025-11 | 5 |
| 2024-Q3 | 4 |
| 2025-05 | 3 |
| 2026-02 | 3 |
| early | 3 |
| 2024-Q1 | 2 |
| 2024-Q4 | 2 |
| 2025-09 | 2 |
| 2025-12 | 2 |
| 2026-01 | 2 |
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
| 2026-02 | [Signet-AI/signetai](https://github.com/Signet-AI/signetai) | Agent Context and Memory Substrate | ambient memory -> provenance -> cross-harness continuity | github_api |
| 2026-02 | [CMA-ES/pycma](https://github.com/CMA-ES/pycma) | 经典进化策略 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-02 | [YoungDubbyDu/LLM-Agent-Optimization](https://github.com/YoungDubbyDu/LLM-Agent-Optimization) | LLM Agent 优化综述 | 文献综述 | local_git_first_commit |
| 2026-03 | [OPPO-Mente-Lab/LLM-Self-Judge](https://github.com/OPPO-Mente-Lab/LLM-Self-Judge) | 自评判训练 | 进化/搜索循环 → 评估器/打分器 → 智能体编排 → 训练/数据循环 | github_api |
| 2026-03 | [facebookresearch/nevergrad](https://github.com/facebookresearch/nevergrad) | 无梯度优化框架 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-03 | [jcartu/rasputin-memory](https://github.com/jcartu/rasputin-memory) | Self-Hosted Agent Memory Backend | memory extraction -> hybrid search -> reranked recall | github_api |
| 2026-03 | [FeiLiu36/LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) | LLM 驱动算法设计综述 | 文献综述 | local_git_first_commit |
| 2026-03 | [Zesearch/self-improvement-llm](https://github.com/Zesearch/self-improvement-llm) | LLM 自改进综述 | 文献综述 | local_git_first_commit |
| 2026-04 | [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | Benchmarked Agent Memory System | verbatim memory -> scoped retrieval -> benchmarked recall | github_api |
| 2026-04 | [DEAP/deap](https://github.com/DEAP/deap) | 经典进化算法框架 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-04 | [ZJU-LLM-Safety/DARWIN](https://github.com/ZJU-LLM-Safety/DARWIN) | 安全策略进化 | 进化/搜索循环 → 反思记忆 | github_api |
| 2026-05 | [EvoAgentX/EvoAgentX](https://github.com/EvoAgentX/EvoAgentX) | 自进化 Agent 生态系统 | 进化/搜索循环 → 智能体编排 → 评估器/打分器 → 反馈-精炼 | local_git_first_commit |
| 2026-05 | [icaros-usc/pyribs](https://github.com/icaros-usc/pyribs) | 质量多样性优化 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-05 | [DSAIL-Memory/EvoMemBench](https://github.com/DSAIL-Memory/EvoMemBench) | Self-Evolving Agent Memory Benchmark | memory benchmark -> self-evolving perspective | github_api |
| 2026-05 | [xai-liacs/LLaMEA](https://github.com/XAI-liacs/LLaMEA) | LLM 驱动算法自动发现 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-05 | [Genentech/OpenTreeSearch](https://github.com/Genentech/opentreesearch) | LLM 引导代码进化 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-05 | [ai4co/awesome-fm4co](https://github.com/ai4co/awesome-fm4co) | 基础模型+组合优化综述 | 文献综述 | local_git_first_commit |
| 2026-05 | [OpenDevin/OpenDevin](https://github.com/OpenDevin/OpenDevin) | AI 软件开发平台 | 智能体编排 → 反馈-精炼 | local_git_first_commit |
| unknown | [803/skills-supply](https://github.com/803/skills-supply) | Cross-Agent Skill Supply Chain | agents.toml manifest -> GitHub/plugin/local package source -> sk sync -> per-agent skill directories -> reconciled skill state | github_api_fetch_error |
| unknown | [a-evo-lab/a-evolve](https://github.com/a-evo-lab/a-evolve) | Universal Self-Improving Agent Infrastructure | base agent -> benchmark adapter -> evolution loop -> workspace mutation over prompts/skills/memory -> benchmarked improved agent | github_api_fetch_error |
| unknown | [aden-hive/hive](https://github.com/aden-hive/hive) | 生产级 Multi-Agent Harness | 目标描述 -> 自动生成 graph -> 执行/观测 -> 失败捕获 -> graph evolution | github_api_fetch_error |
| unknown | [adolfousier/opencrabs](https://github.com/adolfousier/opencrabs) | Self-Improving Terminal Agent | local brain files -> procedural/episodic memory -> hybrid recall -> commands/tools/channels -> self-update hooks | github_api_fetch_error |
| unknown | [affaan-m/ECC](https://github.com/affaan-m/ECC) | Agent Harness Optimization System | skills + instincts + memory + hooks + context monitor -> coding-agent performance governance | github_api_fetch_error |
| unknown | [agent-ecosystem/skill-validator](https://github.com/agent-ecosystem/skill-validator) | Agent Skill Validation Tool | skill package -> schema/security/style validation -> diagnostics -> registry quality gate | github_api_fetch_error |
| unknown | [agent-sh/agentsys](https://github.com/agent-sh/agentsys) | Agent Orchestration Runtime | plugins and agents -> phase-gated workflows -> persistent state -> review/CI/PR/delivery automation | github_api_fetch_error |
| unknown | [agent-skills-hub/agent-skills-hub](https://github.com/agent-skills-hub/agent-skills-hub) | Cross-Agent Skills Registry | skill catalog -> NPX installer -> per-agent install targets -> cross-agent reusable workflow instructions | github_api_fetch_error |
| unknown | [agentskills/agentskills](https://github.com/agentskills/agentskills) | Agent Skills Open Standard | skill folder -> SKILL.md metadata and instructions -> progressive disclosure -> cross-product agent reuse | github_api_fetch_error |
| unknown | [ai-boost/awesome-harness-engineering](https://github.com/ai-boost/awesome-harness-engineering) | Harness Engineering 资源索引 | 资源索引 → harness primitives → 评测/记忆/工具/权限分类 | github_api_fetch_error |
| unknown | [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | Self-Evolving Research Agent Pipeline | research idea -> multi-agent debate -> sandbox experiment -> claim verification -> lessons/evolution -> paper deliverables | github_api_fetch_error |
| unknown | [aiming-lab/SimpleMem](https://github.com/aiming-lab/SimpleMem) | Self-Evolving Agent Memory Stack | dialogue/media stream -> compressed memory units -> intent-aware retrieval -> EvolveMem optimize loop -> guarded config update | github_api_fetch_error |
| unknown | [aiming-lab/SkillRL](https://github.com/aiming-lab/SkillRL) | Recursive Skill-Augmented RL | experience trajectories -> skill distillation -> hierarchical SKILLBANK -> validation-failure analysis -> recursive skill/policy co-evolution | github_api_fetch_error |
| unknown | [aisa-group/skill-inject](https://github.com/aisa-group/skill-inject) | Agent Skill Security Benchmark | skill file injection -> containerized agent run -> policy condition -> LLM judge/evaluation -> ablation comparison | github_api_fetch_error |
| unknown | [akillness/oh-my-skills](https://github.com/akillness/oh-my-skills) | Cross-Agent Skill Collection | local skill folders -> TOON/JEO orchestration protocol -> plan/execute/verify/cleanup skills -> cross-agent install prompts | github_api_fetch_error |
| unknown | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | Claude Skill Pack | skill folders -> reusable workflow instructions -> install/use surface -> agent task specialization | github_api_fetch_error |
| unknown | [AMA-Bench/AMA-Bench](https://github.com/AMA-Bench/AMA-Bench) | Agent 长程记忆基准 | 长轨迹 → 记忆构建/检索接口 → QA/MCQ → LLM-as-judge 与 leaderboard | github_api_fetch_error |
| unknown | [AMAP-ML/SkillClaw](https://github.com/AMAP-ML/SkillClaw) | Collective Skill Evolution | agent session data -> proxy capture -> skill dedup/improvement/verification -> shared evolve server -> reused skills | github_api_fetch_error |
| unknown | [anthropics/skills](https://github.com/anthropics/skills) | 官方 Agent Skills 标准样例库 | 官方技能规范 -> 示例技能 -> Claude Code/Claude API 加载 | github_api_fetch_error |
| unknown | [beita6969/ScienceClaw](https://github.com/beita6969/ScienceClaw) | Self-Evolving Research Agent | research query -> field-specific skills -> persistent memory -> citation-checked analysis -> post-task reflection and skill evolution | github_api_fetch_error |
| unknown | [callstackincubator/agent-skills](https://github.com/callstackincubator/agent-skills) | React Native Agent Skills Pack | domain engineering knowledge -> skills directory -> Claude/Codex plugin metadata -> reusable mobile-development agent workflows | github_api_fetch_error |
| unknown | [CE0Alex/skill-hunter](https://github.com/CE0Alex/skill-hunter) | Agent Skill Discovery Skill | repo scan -> clarifying questions -> registry search -> source/compatibility inspection -> recommended skill stack | github_api_fetch_error |
| unknown | [china-qijizhifeng/agentic-Harness-engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering) | Harness 进化工程 | 评估器/打分器 → 工具/提示/记忆/子智能体进化 → 回归验证 | github_api_403 |
| unknown | [chriscox/agent-skills](https://github.com/chriscox/agent-skills) | Reusable Coding Agent Skills | reusable workflow skill -> install script -> project planner/docs sync -> orchestrator plus coding-agent sharing -> cross-team behavior consistency | github_api_fetch_error |
| unknown | [claw-bench/claw-bench](https://github.com/claw-bench/claw-bench) | 真实 Agent 任务基准 | 真实任务集 → skill.md 指令 → pytest 验证器 → 公开榜单 | github_api_fetch_error |
| unknown | [claw-eval/claw-eval](https://github.com/claw-eval/claw-eval) | 可信 Agent 评测 | 人类验证任务 → Pass^3 多次运行 → 全轨迹审计 | github_api_fetch_error |
| unknown | [ClawBio/ClawBio](https://github.com/ClawBio/ClawBio) | Bioinformatics Agent Skill Library | domain skill spec -> validated Python workflow -> reproducibility bundle -> benchmark scorer -> local-first agent execution | github_api_fetch_error |
| unknown | [clawdotnet/openclaw.net](https://github.com/clawdotnet/openclaw.net) | .NET Self-Hosted Agent Runtime | self-hosted gateway -> OpenAI-compatible API -> tool execution -> MCP/memory topics -> NativeAOT deployment | github_api_fetch_error |
| unknown | [CodeAlive-AI/ai-driven-development](https://github.com/CodeAlive-AI/ai-driven-development) | Cross-Agent Development Skills and Hooks | engineering practice taxonomy -> cross-agent skills -> safety hooks -> low-friction disciplined agent development workflow | github_api_fetch_error |
| unknown | [CodeFuse-ML/awesome-code-llm](https://github.com/CodeFuse-ML/awesome-code-llm) | 代码 LLM 综述 | 文献综述 | github_api_403 |
| unknown | [codejunkie99/agentic-stack](https://github.com/codejunkie99/agentic-stack) | Portable Agent Memory and Skills Layer | portable .agent workspace -> adapters for agent harnesses -> local data layer -> memory/skills/protocol transfer -> flywheel artifacts | github_api_fetch_error |
| unknown | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Agent Skills 社区资源索引 | 社区技能目录 -> 分类/用例 -> 跨 Codex/Claude/Cursor/Gemini 复用 | github_api_fetch_error |
| unknown | [ComposioHQ/awesome-codex-skills](https://github.com/ComposioHQ/awesome-codex-skills) | Codex Skills Automation Catalog | skill catalog -> installer path -> automation workflows across external tools | github_api_fetch_error |
| unknown | [cxcscmu/SkillLearnBench](https://github.com/cxcscmu/SkillLearnBench) | Agent Skill Continual-Learning Benchmark | skill generation method -> skill-dependent task suite -> containerized agent trials -> task/skill/trajectory metrics -> continual learning comparison | github_api_fetch_error |
| unknown | [cyijun/agent-smith](https://github.com/cyijun/agent-smith) | Directory-Isolated Multi-Agent Protocol | root task inbox -> recursive child agents -> directory isolation -> outbox aggregation | github_api_fetch_error |
| unknown | [darkrishabh/agent-skills-eval](https://github.com/darkrishabh/agent-skills-eval) | Agent Skills Evaluation Harness | skill corpus -> task prompts -> execution/evaluation harness -> pass/fail evidence -> skill quality comparison | github_api_fetch_error |
| unknown | [diegosouzapw/awesome-omni-skills](https://github.com/diegosouzapw/awesome-omni-skills) | Omni Skills CLI API MCP A2A Runtime | native skill intake -> validation and curation -> CLI/API/MCP/A2A runtime surfaces -> multi-client skill installation | github_api_fetch_error |
| unknown | [dmgrok/agent_skills_directory](https://github.com/dmgrok/agent_skills_directory) | Agent 技能发现索引 | 技能目录聚合 → 质量/维护/安全评分 → 项目相关性推荐 | github_api_fetch_error |
| unknown | [doobidoo/mcp-memory-service](https://github.com/doobidoo/mcp-memory-service) | Shared Agent Memory Service | agent messages/decisions -> REST/MCP memory service -> knowledge graph + hybrid search -> shared cross-agent recall and coordination | github_api_fetch_error |
| unknown | [eigent-ai/agent-skills](https://github.com/eigent-ai/agent-skills) | Cowork Agent Skills Collection | skill catalog -> category taxonomy -> agent cowork workflows | github_api_fetch_error |
| unknown | [elastic/agent-skills](https://github.com/elastic/agent-skills) | Official Vendor Agent Skills | vendor domain expertise -> skill/plugin packaging -> installer/update flows -> agent-native Elastic operations | github_api_fetch_error |
| unknown | [evalstate/fast-agent](https://github.com/evalstate/fast-agent) | Skills/MCP/ACP Agent Runtime | fast-agent CLI/TUI -> Skills registry -> MCP/ACP connections -> coding/evaluation workflow runtime | github_api_fetch_error |
| unknown | [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | Self-Evolving Agent Memory OS | long-term memory methods -> hypergraph architecture -> use-case integrations -> memory/evolution benchmark suites | github_api_403 |
| unknown | [EvoMap/evolver](https://github.com/EvoMap/evolver) | 可审计 Agent 演化引擎 | Genome Evolution Protocol → Genes/Capsules/Events → 可审计演化 | github_api_403 |
| unknown | [farmage/opencode-skills](https://github.com/farmage/opencode-skills) | OpenCode Agent Skills and Workflow Commands | skill directories + workflow commands + validation tooling -> OpenCode execution surface | github_api_fetch_error |
| unknown | [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | Domain Agent Skills Library | domain skill corpus -> OpenClaw/NanoClaw install paths -> biomedical workflows -> specialized agent capability expansion | github_api_fetch_error |
| unknown | [galyarderlabs/galyarder-framework](https://github.com/galyarderlabs/galyarder-framework) | Agentic Skills Orchestration Framework | department skills + commands + hooks -> universal plugin architecture -> mission execution | github_api_fetch_error |
| unknown | [GeniusHTX/SWE-Skills-Bench](https://github.com/GeniusHTX/SWE-Skills-Bench) | Agent Skills 效果基准 | 49 SWE 任务 -> skill/no-skill 对照 -> Docker 执行 -> pass-rate/token/duration 对比 | github_api_fetch_error |
| unknown | [Gentleman-Programming/Gentleman-Skills](https://github.com/Gentleman-Programming/Gentleman-Skills) | Community Agent Skills Patterns | curated/community skills -> SKILL template -> framework-specific coding patterns | github_api_fetch_error |
| unknown | [getzep/graphiti](https://github.com/getzep/graphiti) | Temporal Context Graph Agent Memory | 交互/企业数据 -> temporal context graph -> provenance/ontology -> agent 检索与 MCP memory | github_api_fetch_error |
| unknown | [Gitmaxd/deepagents-cli-codex-skill](https://github.com/Gitmaxd/deepagents-cli-codex-skill) | Deep Agents Codex Skill Pack | Deep Agents CLI docs -> Codex skill scaffold -> structured references -> direct $deepagents-cli invocation | github_api_fetch_error |
| unknown | [guixiang123124/openclaw-harness](https://github.com/guixiang123124/openclaw-harness) | OpenClaw Harness Engineering | lead agent scouts repo -> SPRINT.md contract -> ACP builder agents -> weighted review -> iterate until pass -> ship/report | github_api_fetch_error |
| unknown | [harness/harness-skills](https://github.com/harness/harness-skills) | CI/CD Agent Skills System | repo-level agent instructions -> domain SKILL.md modules -> Harness MCP schema validation -> CI/CD creation/debug/governance workflows | github_api_fetch_error |
| unknown | [hashgraph-online/registry-broker-skills](https://github.com/hashgraph-online/registry-broker-skills) | Agent Registry Skill Bridge | universal registry API -> SKILL.md bridge -> MCP/CLI search and publish flows -> agent discovery and registration | github_api_fetch_error |
| unknown | [hebbs-ai/hebbs-memory-engine](https://github.com/hebbs-ai/hebbs-memory-engine) | Agent Memory Engine | project files -> portable .hebbs cognition layer -> temporal/causal/analogical recall -> consolidation/decay -> agent skill surface | github_api_fetch_error |
| unknown | [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | Open Agent Harness Runtime | agent loop -> tools/skills/plugins/permissions/hooks -> memory/tasks/coordinator -> CLI and React TUI surfaces | github_api_fetch_error |
| unknown | [HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace) | Self-Evolving Skill Runtime | task execution -> skill selection/application -> quality monitoring -> auto-fix/auto-improve/auto-learn -> shared skill community | github_api_fetch_error |
| unknown | [howells/arc](https://github.com/howells/arc) | Agent Workflow Plugin | vision/spec -> implementation/testing -> review/audit/refactor -> commit/launch | github_api_fetch_error |
| unknown | [huggingface/skills](https://github.com/huggingface/skills) | Agent Skills Registry | AI/ML task domain -> SKILL.md package -> agent marketplace/install path -> reusable HF workflow execution | github_api_fetch_error |
| unknown | [Human-Agent-Society/CORAL](https://github.com/Human-Agent-Society/CORAL) | Multi-Agent Evolution Infrastructure | task + grader -> isolated worktrees -> shared .coral/public state -> graded commits -> heartbeat reflect/consolidate/pivot -> multi-agent evolution | github_api_fetch_error |
| unknown | [HUST-AI-HYZ/MemoryAgentBench](https://github.com/HUST-AI-HYZ/MemoryAgentBench) | Incremental Agent Memory Benchmark | incremental multi-turn interaction -> memory injection -> repeated queries -> retrieval/learning/conflict metrics -> agent memory comparison | github_api_fetch_error |
| unknown | [huytieu/COG-second-brain](https://github.com/huytieu/COG-second-brain) | Self-Evolving Personal Memory System | markdown vault -> 17 skills -> 6 worker agents -> daily/weekly/monthly learning loops -> Git/Obsidian second brain | github_api_fetch_error |
| unknown | [iii-experimental/agentos](https://github.com/iii-experimental/agentos) | Self-Evolving Agent Operating System | narrow workers -> function registration -> trigger bus -> traces/state/retries -> dynamic function evolution loop | github_api_fetch_error |
| unknown | [jakenuts/agent-skills](https://github.com/jakenuts/agent-skills) | Agent Skills and Expert-Agent Toolkit | skill definitions + expert agents -> init detector -> deploy to Claude/Codex dirs -> on-demand dependencies and specialist invocation | github_api_fetch_error |
| unknown | [jayzeng/agentmemory](https://github.com/jayzeng/agentmemory) | Coding Agent Memory CLI | agent turn -> local markdown memory -> qmd search -> selective context injection -> skill-installed recall | github_api_fetch_error |
| unknown | [jbrahy/meta-agent-teams](https://github.com/jbrahy/meta-agent-teams) | Self-Improving Agent Team Framework | human feedback -> meta-agent proposes evolution -> auditor checks drift/regression -> git-backed history -> team prompt/role update | github_api_fetch_error |
| unknown | [jdrhyne/agent-skills](https://github.com/jdrhyne/agent-skills) | Portable Agent Skills Pack | skills and prompts folders -> compatibility matrix -> direct copy/install -> Clawdbot Claude Code Codex workflows | github_api_fetch_error |
| unknown | [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) | Agent Skills Pack | curated skills -> per-agent installation paths -> reusable workflow instructions -> agent capability expansion | github_api_fetch_error |
| unknown | [JordanMcCann/agentmemory](https://github.com/JordanMcCann/agentmemory) | Agent Memory Benchmark Claim | ingest sessions -> graph/vector/BM25 recall -> context build -> LongMemEval real-retrieval run -> legitimacy audit | github_api_fetch_error |
| unknown | [jscraik/Agent-Skills](https://github.com/jscraik/Agent-Skills) | Governed Agent Skills Control Plane | canonical skill source -> generated command handles -> runtime projections -> audits/evals/proof commands | github_api_fetch_error |
| unknown | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 科研 Agent Skills 工作流库 | 科研任务域 -> 技能包/数据库接口 -> 多步科学工作流 | github_api_fetch_error |
| unknown | [kayba-ai/agentic-context-engine](https://github.com/kayba-ai/agentic-context-engine) | Agent Experience Learning Loop | task trace -> reflector -> skill manager -> skillbook update -> strategies injected into future agent runs | github_api_fetch_error |
| unknown | [kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory) | Agent Memory System | memory event -> decay/retrieval strengthening/consolidation -> LongMemEval and sequential-learning harness -> cross-agent transfer questions | github_api_fetch_error |
| unknown | [kks0488/vibe-codex](https://github.com/kks0488/vibe-codex) | Codex Skills and Agent Teams Kit | Codex skills -> retry/self-heal loops -> agent teams JSON mailboxes -> completion proof | github_api_fetch_error |
| unknown | [langchain-ai/langmem](https://github.com/langchain-ai/langmem) | Agent 长期记忆 SDK | 对话/交互 -> 记忆抽取 -> hot-path 工具检索 -> LangGraph 长期存储 | github_api_fetch_error |
| unknown | [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | Token 高效自进化 Agent | 上下文密度最大化 → 技能树增长 → 反思/记忆压缩 | github_api_403 |
| unknown | [managedcode/dotnet-skills](https://github.com/managedcode/dotnet-skills) | .NET Agent Skill Catalog | catalog packages -> SKILL.md/AGENT.md folders -> CLI recommend/install/update -> upstream watch -> daily catalog/site/tool release | github_api_fetch_error |
| unknown | [matrixorigin/Memoria](https://github.com/matrixorigin/Memoria) | Versioned Agent Memory Infrastructure | agent memory mutation -> snapshot/branch/merge/rollback -> contradiction detection -> audit trail -> consistent long-term context | github_api_fetch_error |
| unknown | [meituan/EvoCUA](https://github.com/meituan/EvoCUA) | Computer Use Agent 进化模型 | GUI 多模态轨迹 → CUA 训练/评测 → OSWorld/WAA 跨环境泛化 | github_api_fetch_error |
| unknown | [mem0ai/mem0](https://github.com/mem0ai/mem0) | Agent 通用记忆层 | 用户/会话/Agent 记忆 → 多信号检索 → agent runtime 插件化 | github_api_fetch_error |
| unknown | [mem0ai/memory-benchmarks](https://github.com/mem0ai/memory-benchmarks) | Memory Benchmark Suite | memory benchmark dataset -> ingest/search/evaluate pipeline -> answerer/judge scoring -> UI/results comparison | github_api_fetch_error |
| unknown | [Memento-Teams/Memento-Skills](https://github.com/Memento-Teams/Memento-Skills) | Self-Evolving Skill Memory Agent | task execution -> skill retrieval/generation -> reflection -> utility update or skill rewrite -> growing skill memory | github_api_fetch_error |
| unknown | [memodb-io/memobase](https://github.com/memodb-io/memobase) | 用户画像长期记忆后端 | 聊天 blobs -> buffer 批处理 -> user profile/event timeline -> prompt context API | github_api_fetch_error |
| unknown | [MemoriLabs/Memori](https://github.com/memorilabs/memori) | Agent-Native Memory Infrastructure | agent execution/conversation -> structured memory capture -> background augmentation -> recall on demand -> benchmarked context reduction | github_api_fetch_error |
| unknown | [MemTensor/HaluMem](https://github.com/MemTensor/HaluMem) | Agent Memory Hallucination Benchmark | persona/life timeline -> synthetic sessions with distractors -> memory extraction/update/QA tasks -> hallucination leaderboard | github_api_fetch_error |
| unknown | [memtensor/memos](https://github.com/memtensor/memos) | Self-Evolving Memory OS | agent event/tool trace -> memory cube/API -> hybrid retrieval/governance -> skill/world-model crystallization -> reusable long-term memory | github_api_fetch_error |
| unknown | [MemTensor/MemRL](https://github.com/MemTensor/MemRL) | Runtime Reinforcement Memory | episodic memory -> two-phase retrieval -> environmental feedback -> runtime reinforcement update -> benchmark transfer | github_api_fetch_error |
| unknown | [microsoft/skills](https://github.com/microsoft/skills) | Microsoft SDK Agent Skills Catalog | SDK docs + MCP configs + custom agents -> skill catalog -> acceptance scenarios -> coding-agent grounding for Azure/Microsoft work | github_api_fetch_error |
| unknown | [microsoft/STATE-Bench](https://github.com/microsoft/STATE-Bench) | Stateful Agent Memory Benchmark | enterprise task suite -> sandbox database/tools/user simulator -> stateful agent execution -> deterministic assertions -> memory impact metrics | github_api_fetch_error |
| unknown | [microsoft/WindowsAgentArena](https://github.com/microsoft/WindowsAgentArena) | Windows OS Agent Benchmark | Windows 11 VM/golden image -> multimodal OS agent -> scalable benchmark execution -> report metrics | github_api_fetch_error |
| unknown | [MicrosoftDocs/Agent-Skills](https://github.com/MicrosoftDocs/Agent-Skills) | 企业文档驱动 Agent Skills | Microsoft Learn 文档 -> 技能扫描/分类 -> coding agent 按需加载 | github_api_fetch_error |
| unknown | [MoizIbnYousaf/Ai-Agent-Skills](https://github.com/MoizIbnYousaf/Ai-Agent-Skills) | Curated Agent Skills Library and CLI | curated shelves -> provenance notes -> CLI/TUI install and library management | github_api_fetch_error |
| unknown | [neo4j-labs/agent-memory](https://github.com/neo4j-labs/agent-memory) | Graph-Native Agent Memory | conversation/reasoning trace -> Neo4j knowledge graph memory -> MCP/SDK context retrieval -> eval harness and audit edges | github_api_fetch_error |
| unknown | [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 24/7 Proactive Agent Memory | always-on interaction stream -> hierarchical memory filesystem -> intent inference -> proactive agent action | github_api_fetch_error |
| unknown | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 自改进个人 Agent 运行时 | 反思记忆 → 技能生成/改进 → 消息/自动化运行时 | github_api_403 |
| unknown | [NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution) | 技能与提示进化 | 执行轨迹 → GEPA/DSPy 候选变体 → 评估选择 | github_api_403 |
| unknown | [obra/superpowers](https://github.com/obra/superpowers) | Agentic 技能方法论 | 方法论/技能库 → 计划/执行/评审/TDD → 跨 Agent 复用 | github_api_403 |
| unknown | [OiiOAI/MOLT](https://github.com/OiiOAI/MOLT) | Reflexive Co-Evolution Engine | multi-agent traces -> structural friction observation -> root-cause attribution -> evidence-backed findings -> protocol/memory/team evolution | github_api_fetch_error |
| unknown | [OneWave-AI/claude-skills](https://github.com/OneWave-AI/claude-skills) | Production Claude Skills Library | task domain -> self-contained SKILL.md -> Claude Code install -> agent-army / specialist workflow execution | github_api_fetch_error |
| unknown | [openai/skills](https://github.com/openai/skills) | Codex Agent Skills Catalog | skill folder standard -> curated/experimental catalog -> skill-installer -> reusable Codex capabilities | github_api_fetch_error |
| unknown | [OpenBMB/EdgeClaw](https://github.com/OpenBMB/EdgeClaw) | Edge-Cloud Personal Agent Runtime | edge runtime -> cloud collaboration -> cost router -> memory engine -> skill/tool governance -> self-driven agent loop | github_api_fetch_error |
| unknown | [openclaw/clawbench](https://github.com/openclaw/clawbench) | Agent Harness 评测诊断 | 执行轨迹 → 可靠性/噪声分解 → harness/config/model 联合评分 | github_api_fetch_error |
| unknown | [openclaw/openclaw](https://github.com/openclaw/openclaw) | 个人 Agent 产品运行时 | 本地优先运行时 → 多渠道入口 → 技能/工具/会话闭环 | github_api_403 |
| unknown | [OpenHands/benchmarks](https://github.com/OpenHands/benchmarks) | OpenHands Agent Evaluation Harness | OpenHands agent -> benchmark adapter -> standardized evaluation pipeline -> migration to V1 Software Agent SDK | github_api_fetch_error |
| unknown | [opensite-ai/opensite-skills](https://github.com/opensite-ai/opensite-skills) | Cross-Agent Skills and Memory Sync | single skills repo -> cross-agent skill sync -> persistent cross-session memory -> Playwright cloud upload automation | github_api_fetch_error |
| unknown | [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | Persistent Agent Planning Skill | persistent markdown plan -> hook/session recovery -> attestation -> agent skill routing | github_api_fetch_error |
| unknown | [PaulRBerg/agent-skills](https://github.com/PaulRBerg/agent-skills) | Personal Codex Agent Skills Pack | personal skill modules -> progressive disclosure -> repeatable coding workflows | github_api_fetch_error |
| unknown | [pinchbench/skill](https://github.com/pinchbench/skill) | 真实 Agent 任务基准 | 真实任务集 → 自动/LLM 评分 → 会话转录分析 | github_api_403 |
| unknown | [pjt222/agent-almanac](https://github.com/pjt222/agent-almanac) | Executable Skill and Agent Almanac | skill/agent/team catalog -> symlink/install layout -> interactive visualization -> reusable engineering procedures | github_api_fetch_error |
| unknown | [plastic-labs/honcho](https://github.com/plastic-labs/honcho) | Agent Memory Infrastructure | messages/events -> background reasoning -> peer/session representations -> context/search/chat endpoints -> agent injection | github_api_fetch_error |
| unknown | [princeton-pli/hal-harness](https://github.com/princeton-pli/hal-harness) | Holistic Agent Evaluation Harness | agent implementation -> hal-eval benchmark adapter -> parallel local/cloud runner -> traces/cost logs -> encrypted leaderboard upload | github_api_fetch_error |
| unknown | [psenger/ai-agent-skills](https://github.com/psenger/ai-agent-skills) | Production Agent Skills Pack | skill standard -> curated skill packages -> npx/marketplace install -> cross-tool agent workflows | github_api_fetch_error |
| unknown | [pureples/pureples](https://github.com/pureples/pureples) | GP+LLM 代码进化 | 进化/搜索循环 → 评估器/打分器 | github_api_403 |
| unknown | [QuantaAlpha/QuantaAlpha](https://github.com/QuantaAlpha/QuantaAlpha) | Evolutionary Repository Agent | repo understanding -> task decomposition -> evolutionary candidate generation -> evaluation feedback -> improved repository-level actions | github_api_fetch_error |
| unknown | [quzhiii/thesis-skills](https://github.com/quzhiii/thesis-skills) | Paper Workflow Agent Skills | paper workflow skill modules -> reference/language/format checks -> compile/readiness gates | github_api_fetch_error |
| unknown | [Randroids-Dojo/skills](https://github.com/Randroids-Dojo/skills) | Agent Skill Loop Library | skill bundle -> plugin manifest -> Codex/Claude/OpenCode discovery -> reusable autonomous loop -> cross-agent install path | github_api_fetch_error |
| unknown | [raphaelchristi/harness-evolver](https://github.com/raphaelchristi/harness-evolver) | Harness 自进化工具 | 失败数据 → 多 proposer 修改 harness → gate 拒绝退化 → 自动合并赢家 | github_api_fetch_error |
| unknown | [regenrek/codex-1up](https://github.com/regenrek/codex-1up) | Codex CLI Upgrade Kit | Codex install/update -> shell tool bootstrap -> AGENTS.md template -> config profiles -> bundled skills and ongoing maintenance commands | github_api_fetch_error |
| unknown | [rendro/sediment](https://github.com/rendro/sediment) | Local-First Agent Memory MCP | local memory store -> vector plus graph index -> scoped recall -> decay/trust rerank -> MCP clients | github_api_fetch_error |
| unknown | [revfactory/harness](https://github.com/revfactory/harness) | Team-Architecture Harness Factory | domain sentence -> six team patterns -> generated agent definitions + generated skills -> validation and A/B harness comparison | github_api_fetch_error |
| unknown | [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | Agent 持久记忆层 | 持久记忆 → 知识图谱/混合搜索 → 多 Agent harness 接入 | github_api_403 |
| unknown | [rtk-ai/icm](https://github.com/rtk-ai/icm) | Permanent MCP-Native Agent Memory | agent conversation/tool trace -> single-binary local memory -> MCP/hooks recall -> persistent context across sessions | github_api_fetch_error |
| unknown | [sehoon787/my-codex](https://github.com/sehoon787/my-codex) | Codex Agent Harness Pack | Codex plugin package -> Boss meta-orchestrator -> agent/skill discovery -> spawn_agent delegation -> verification loop | github_api_fetch_error |
| unknown | [sentient-agi/EvoSkill](https://github.com/sentient-agi/EvoSkill) | Automated Agent Skill Discovery | failed trajectories -> skill/prompt mutation proposals -> held-out evaluation -> new agent program -> reusable skill transfer | github_api_fetch_error |
| unknown | [ServiceNow/BrowserGym](https://github.com/ServiceNow/BrowserGym) | Web Agent Benchmark Gym | Gym environment -> browser task benchmarks -> agent loop -> reward/termination metrics | github_api_fetch_error |
| unknown | [shinpr/mcp-local-rag](https://github.com/shinpr/mcp-local-rag) | Local-First RAG and Agent Skills | local documents/code -> semantic plus keyword RAG -> MCP/CLI tools -> optional Codex/Claude skills for query and ingestion workflows | github_api_fetch_error |
| unknown | [simota/agent-skills](https://github.com/simota/agent-skills) | Cross-Agent Skills and Nexus Orchestrator | task request -> Nexus chain design -> specialist skill handoff -> platform-agnostic agent execution | github_api_fetch_error |
| unknown | [SJTU-IPADS/SkVM](https://github.com/SJTU-IPADS/SkVM) | Skill Virtual Machine | skill profile -> AOT compilation -> JIT optimization -> benchmark across harness/model pairs | github_api_fetch_error |
| unknown | [sudokrang/aceforge](https://github.com/sudokrang/aceforge) | OpenClaw 技能自进化引擎 | 工具调用观察 → 模式提炼 → SKILL.md 生成 → adversarial validation → 人类批准 | github_api_fetch_error |
| unknown | [sundial-org/awesome-openclaw-skills](https://github.com/sundial-org/awesome-openclaw-skills) | OpenClaw Skill Index | OpenClaw ecosystem skills -> popularity/download curation -> install names -> domain categories -> agent capability discovery | github_api_fetch_error |
| unknown | [swarmclawai/swarmclaw](https://github.com/swarmclawai/swarmclaw) | Self-Hosted Agent Runtime | agent runtime -> memory and MCP connectors -> schedules/delegation -> swarm workflows -> marketplace/feed/vault surfaces | github_api_fetch_error |
| unknown | [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | Secure Agent Skills Registry | curated skill catalog -> security scan and lockfile integrity -> CLI install -> MCP progressive disclosure for coding agents | github_api_fetch_error |
| unknown | [TerryFYL/openclaw-evolution-framework](https://github.com/TerryFYL/openclaw-evolution-framework) | Continuous Learning Harness | cron trigger -> time/theme guard -> deep exploration -> markdown insight -> self-trigger next round -> summary report | github_api_fetch_error |
| unknown | [thClaws/thClaws](https://github.com/thClaws/thClaws) | Local Agent Harness Platform | local Rust agent engine -> GUI/CLI/web surfaces -> MCP/tools/memory -> plugin-bundled skills and agents | github_api_fetch_error |
| unknown | [TheQtCompanyRnD/agent-skills](https://github.com/TheQtCompanyRnD/agent-skills) | Industrial Agent Skill Pack | domain engineering standards -> SKILL.md skill directories -> deterministic lint rules -> parallel deep-analysis agents -> cross-tool install paths | github_api_fetch_error |
| unknown | [TiMEM-AI/timem](https://github.com/TiMEM-AI/timem) | 长程 Agent 时间记忆 | 时间层级记忆树 → 语义巩固 → 复杂度自适应召回 | github_api_fetch_error |
| unknown | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 个人 Agent 产品与记忆系统 | 本地记忆/wiki → 第三方集成 → token 压缩/工具调用 | github_api_403 |
| unknown | [togethercomputer/skills](https://github.com/togethercomputer/skills) | Provider API Agent Skills Pack | provider API references -> runnable scripts -> agent skill routing for SDK usage | github_api_fetch_error |
| unknown | [trillskillz/clawdmarket](https://github.com/trillskillz/clawdmarket) | Agent-to-Agent Marketplace Evolution Loop | agent discovery -> task/bid marketplace -> escrow/proof -> seller benchmark -> prompt variants -> judge selection -> lineage re-registration | github_api_fetch_error |
| unknown | [trustgraph-ai/trustgraph](https://github.com/trustgraph-ai/trustgraph) | Context Graph Agent Runtime | private domain data -> context graph -> memory/retrieval/orchestration/inference -> explainable grounded agent answers | github_api_fetch_error |
| unknown | [vectorize-io/agent-memory-benchmark](https://github.com/vectorize-io/agent-memory-benchmark) | Agent Memory Benchmark | dataset ingest -> memory provider retrieve -> answer generation -> judge scoring -> speed/token/cost comparison | github_api_fetch_error |
| unknown | [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Learning Agent Memory System | retain -> fact/entity/time extraction -> hybrid semantic/keyword/graph/temporal recall -> reflect -> learned mental models | github_api_fetch_error |
| unknown | [vercel-labs/skills](https://github.com/vercel-labs/skills) | Open Agent Skills Installer CLI | GitHub/GitLab skill source -> npx skills installer -> host-specific agent skill directories -> shared skill ecosystem | github_api_fetch_error |
| unknown | [ViktorAxelsen/MemSkill](https://github.com/ViktorAxelsen/MemSkill) | Evolving Memory Skills | long-horizon interaction data -> skill-conditioned memory construction -> hard-case mining -> memory skill refinement/new skill proposals -> reusable skill bank | github_api_fetch_error |
| unknown | [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | Agent Skills Registry | official/community skill source -> curated skill index -> agent compatibility metadata -> install/read path -> reusable workflow execution | github_api_fetch_error |
| unknown | [wanxingai/LightAgent](https://github.com/wanxingai/LightAgent) | Memory/MCP Skill Agent Framework | lightweight Python agent core -> memory/tool/MCP modules -> native skills -> self-learning multi-agent workflows | github_api_fetch_error |
| unknown | [xlang-ai/OSWorld](https://github.com/xlang-ai/OSWorld) | Computer-use Agent OS Benchmark | 真实桌面任务 -> 虚拟机/云环境 -> multimodal agent actions -> benchmark result comparison | github_api_fetch_error |
| unknown | [yf-he/EvoTest](https://github.com/yf-he/EvoTest) | Evolutionary Test-Time Learning | episode rollout -> failure/success memory -> evolver rewrites prompt/state extractor/hyperparameters -> next episode evaluation | github_api_fetch_error |
| unknown | [ynulihao/AgentSkillOS](https://github.com/ynulihao/AgentSkillOS) | Agent Skill Retrieval and Orchestration OS | large skill ecosystem -> retrieval -> orchestration/composition -> batch execution -> benchmarked skill workflows | github_api_fetch_error |
| unknown | [zilliztech/memsearch](https://github.com/zilliztech/memsearch) | Agent Memory Search Layer | markdown memory files -> hybrid BM25/vector index -> agent recall context -> answer/writeback -> re-index or live watch | github_api_fetch_error |
| unknown | [zylos-ai/zylos-core](https://github.com/zylos-ai/zylos-core) | Self-Evolving AI Team Platform | specialized agents -> shared memory/context -> marketplace tools -> autonomous improvement cycles -> team delivery surface | github_api_fetch_error |

## Git Evidence Join

This table joins each public model-card project back to raw capture, classification, GitHub API/cache metadata, local mirror evidence when present, and public report output. `github_api_fetch_error` and `github_api_403` are preserved as evidence-quality signals rather than silently replaced.

| Joined evidence channel | Count | Meaning |
|---|---:|---|
| GitHub API/cache metadata | 29 | Projects with verified `github_api` metadata in `analysis/github-created-at-cache.json`. |
| Local git mirror evidence | 46 | Projects whose `localPath` points to a local git clone and can report first/last commit, count, branch, and HEAD. |
| Raw timestamp capture | 172 | Public projects that also appear in `output/raw-github-timestamp-index.json`. |
| Classification row | 172 | Public projects that also appear in `research/repo-classification.json`. |
| Public model-card report | 204 | Public projects with a generated report under `site/public/reports/projects/`. |

| Repo | Raw | Classification | Report | Git source | Created | Pushed | Stars/Forks | Local git mirror |
|---|---|---|---|---|---|---|---:|---|
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [raw](../raw-github/openclaw_openclaw.md) | framework | [report](../projects/48-openclaw.md) | github_api_403 | unknown | 2026-05 | 374000/77700 | - |
| [obra/superpowers](https://github.com/obra/superpowers) | [raw](../raw-github/obra_superpowers.md) | memory | [report](../projects/49-superpowers.md) | github_api_403 | unknown | 2026-05 | 202000/18000 | - |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | [raw](../raw-github/affaan-m_ecc.md) | skill | [report](../projects/179-ecc-agent-harness-optimization-system.md) | github_api_fetch_error | unknown | 2026-05 | 191000/29500 | - |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | [raw](../raw-github/significant-gravitas_autogpt.md) | framework | [report](../projects/08-autogpt-autonomous-agent.md) | github_api | 2023-03 | 2026-05 | 184482/46225 | 1 commits @ 127a0fa (2026-05 -> 2026-05) |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | [raw](../raw-github/nousresearch_hermes-agent.md) | framework | [report](../projects/44-hermes-agent.md) | github_api_403 | unknown | 2026-05 | 162000/26400 | - |
| [anthropics/skills](https://github.com/anthropics/skills) | [raw](../raw-github/anthropics_skills.md) | skill | [report](../projects/64-anthropic-skills.md) | github_api_fetch_error | unknown | 2026-05 | 140000/16500 | - |
| [All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands) | - | missing | [report](../projects/15-openhands-ai-software-dev.md) | github_api | 2024-03 | 2026-05 | 74662/9459 | 1 commits @ 3515cb0 (2026-05 -> 2026-05) |
| [FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT) | - | missing | [report](../projects/07-metagpt-multi-agent-framework.md) | github_api | 2023-06 | 2026-01 | 68239/8695 | 1 commits @ 11cdf46 (2026-01 -> 2026-01) |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | [raw](../raw-github/composiohq_awesome-claude-skills.md) | skill | [report](../projects/65-awesome-claude-skills.md) | github_api_fetch_error | unknown | 2026-05 | 61500/6700 | - |
| [microsoft/autogen](https://github.com/microsoft/autogen) | - | missing | [report](../projects/11-autogen-multi-agent-conversation.md) | github_api | 2023-08 | 2026-04 | 58330/8807 | 1 commits @ 027ecf0 (2026-04 -> 2026-04) |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | [raw](../raw-github/mem0ai_mem0.md) | memory | [report](../projects/58-mem0-agent-memory.md) | github_api_fetch_error | unknown | 2026-05 | 56500/6400 | - |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | [raw](../raw-github/mempalace_mempalace.md) | memory | [report](../projects/194-mempalace-agent-memory-benchmark.md) | github_api | 2026-04 | 2026-05 | 52789/6968 | - |
| [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | [raw](../raw-github/crewaiinc_crewai.md) | framework | [report](../projects/09-crewai-multi-agent-framework.md) | github_api | 2023-10 | 2026-05 | 52041/7211 | 1 commits @ 179c20b (2026-05 -> 2026-05) |
| [OpenDevin/OpenDevin](https://github.com/OpenDevin/OpenDevin) | - | missing | [report](../projects/41-opendevin-ai-software.md) | github_api_403 | 2026-05 | 2026-01 | 50000/6000 | 1 commits @ 3515cb0 (2026-05 -> 2026-05) |
| [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | [raw](../raw-github/stanfordnlp_dspy.md) | prompt-optimization | [report](../projects/10-dspy-declarative-llm-programming.md) | github_api | 2023-01 | 2026-05 | 34604/2918 | 1 commits @ 6fb3f96 (2026-05 -> 2026-05) |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | [raw](../raw-github/langchain-ai_langgraph.md) | framework | [report](../projects/13-langgraph-agent-workflows.md) | github_api | 2023-08 | 2026-05 | 32784/5544 | 1 commits @ 82b3872 (2026-05 -> 2026-05) |
| [getzep/graphiti](https://github.com/getzep/graphiti) | [raw](../raw-github/getzep_graphiti.md) | memory | [report](../projects/71-graphiti-temporal-context-graphs.md) | github_api_fetch_error | unknown | 2026-05 | 26500/2600 | - |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | [raw](../raw-github/k-dense-ai_scientific-agent-skills.md) | skill | [report](../projects/67-scientific-agent-skills.md) | github_api_fetch_error | unknown | 2026-05 | 25500/2700 | - |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | [raw](../raw-github/tinyhumansai_openhuman.md) | memory | [report](../projects/52-openhuman.md) | github_api_403 | unknown | 2026-05 | 25100/2300 | - |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | [raw](../raw-github/voltagent_awesome-agent-skills.md) | skill | [report](../projects/92-awesome-agent-skills-index.md) | github_api_fetch_error | unknown | 2026-05 | 22900/2400 | - |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | [raw](../raw-github/othmanadi_planning-with-files.md) | skill | [report](../projects/178-planning-with-files-agent-planning-skill.md) | github_api_fetch_error | unknown | 2026-05 | 22000/2000 | - |
| [stitionai/devika](https://github.com/stitionai/devika) | - | missing | [report](../projects/16-devika-ai-software-engineer.md) | github_api_403 | 2025-09 | 2025-01 | 22000/3000 | 1 commits @ 80bb343 (2025-09 -> 2025-09) |
| [openai/skills](https://github.com/openai/skills) | [raw](../raw-github/openai_skills.md) | skill | [report](../projects/121-openai-skills-codex-catalog.md) | github_api_fetch_error | unknown | 2026-05 | 20100/1.3k | - |
| [vercel-labs/skills](https://github.com/vercel-labs/skills) | [raw](../raw-github/vercel-labs_skills.md) | skill | [report](../projects/129-vercel-skills-cli.md) | github_api_fetch_error | unknown | 2026-05 | 19900/1.6k | - |
| [agentskills/agentskills](https://github.com/agentskills/agentskills) | [raw](../raw-github/agentskills_agentskills.md) | skill | [report](../projects/157-agentskills-open-standard.md) | github_api_fetch_error | unknown | 2026-05 | 19300/1.2k | - |
| [princeton-nlp/SWE-agent](https://github.com/princeton-nlp/SWE-agent) | - | missing | [report](../projects/14-swe-agent-software-engineering.md) | github_api | 2024-04 | 2026-05 | 19280/2093 | 1 commits @ 0f4f3bb (2026-03 -> 2026-03) |
| [camel-ai/camel](https://github.com/camel-ai/camel) | - | missing | [report](../projects/12-camel-ai-communicative-agents.md) | github_api | 2023-03 | 2026-05 | 17025/1910 | 1 commits @ 1d38051 (2026-05 -> 2026-05) |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | [raw](../raw-github/rohitg00_agentmemory.md) | memory | [report](../projects/50-agentmemory.md) | github_api_403 | unknown | 2026-05 | 16000/1300 | - |
| [MemoriLabs/Memori](https://github.com/memorilabs/memori) | [raw](../raw-github/memorilabs_memori.md) | memory | [report](../projects/103-memori-agent-native-memory.md) | github_api_fetch_error | unknown | 2026-05 | 14900/2300 | - |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | [raw](../raw-github/vectorize-io_hindsight.md) | memory | [report](../projects/174-hindsight-agent-memory-that-learns.md) | github_api_fetch_error | unknown | 2026-05 | 14400/821 | - |
| [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | [raw](../raw-github/nevamind-ai_memu.md) | memory | [report](../projects/78-memu-proactive-agent-memory.md) | github_api_fetch_error | unknown | 2026-05 | 13700/1000 | - |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | [raw](../raw-github/hkuds_openharness.md) | framework | [report](../projects/146-openharness-agent-harness-ohmo.md) | github_api_fetch_error | unknown | 2026-05 | 13000/2.2k | - |
| [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | [raw](../raw-github/aiming-lab_autoresearchclaw.md) | evolution | [report](../projects/116-autoresearchclaw-self-evolving-research-agent.md) | github_api_fetch_error | unknown | 2026-05 | 12600/1500 | - |
| [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | [raw](../raw-github/lsdefine_genericagent.md) | evolution | [report](../projects/47-genericagent.md) | github_api_403 | unknown | 2026-05 | 11900/1400 | - |
| [ComposioHQ/awesome-codex-skills](https://github.com/ComposioHQ/awesome-codex-skills) | [raw](../raw-github/composiohq_awesome-codex-skills.md) | skill | [report](../projects/186-awesome-codex-skills-automation-catalog.md) | github_api_fetch_error | unknown | 2026-05 | 11500/1.1k | - |
| [huggingface/skills](https://github.com/huggingface/skills) | [raw](../raw-github/huggingface_skills.md) | skill | [report](../projects/85-huggingface-skills.md) | github_api_fetch_error | unknown | 2026-05 | 10600/681 | - |
| [aden-hive/hive](https://github.com/aden-hive/hive) | [raw](../raw-github/aden-hive_hive.md) | evolution | [report](../projects/68-aden-hive.md) | github_api_fetch_error | unknown | 2026-05 | 10400/5700 | - |
| [memtensor/memos](https://github.com/memtensor/memos) | [raw](../raw-github/memtensor_memos.md) | memory | [report](../projects/117-memos-self-evolving-memory-os.md) | github_api_fetch_error | unknown | 2026-05 | 9400/846 | - |
| [EvoMap/evolver](https://github.com/EvoMap/evolver) | [raw](../raw-github/evomap_evolver.md) | evolution | [report](../projects/46-evomap-evolver.md) | github_api_403 | unknown | 2026-02 | 7507/760 | - |
| [automl/auto-sklearn](https://github.com/automl/auto-sklearn) | - | missing | [report](../projects/31-autosklearn-automl.md) | github_api_403 | 2023-04 | 2025-01 | 7500/1000 | 1 commits @ 6732112 (2023-04 -> 2023-04) |
| [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve) | [raw](../raw-github/algorithmicsuperintelligence_openevolve.md) | evolution | [report](../projects/algorithmicsuperintelligence__openevolve.md) | github_api | 2025-05 | 2026-03 | 6377/1019 | 1 commits @ 80945ed (2026-03 -> 2026-03) |
| [HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace) | [raw](../raw-github/hkuds_openspace.md) | evolution | [report](../projects/162-openspace-self-evolving-skills.md) | github_api_fetch_error | unknown | 2026-05 | 6300/780 | - |
| [DEAP/deap](https://github.com/DEAP/deap) | - | missing | [report](../projects/29-deap-evolutionary-framework.md) | github_api_403 | 2026-04 | 2025-01 | 6000/1200 | 1 commits @ 8a96fd3 (2026-04 -> 2026-04) |
| [aiwaves-cn/agents](https://github.com/aiwaves-cn/agents) | [raw](../raw-github/aiwaves-cn_agents.md) | evolution | [report](../projects/aiwaves_cn__agents.md) | github_api | 2023-07 | 2024-09 | 5928/482 | 1 commits @ e8c4e3c (2024-09 -> 2024-09) |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | [raw](../raw-github/evermind-ai_everos.md) | evaluation | [report](../projects/79-everos-self-evolving-memory-os.md) | github_api_403 | unknown | 2026-05 | 5600/593 | - |
| [OpenBMB/AgentVerse](https://github.com/OpenBMB/AgentVerse) | - | missing | [report](../projects/17-agentverse-multi-agent-platform.md) | github_api_403 | 2024-09 | 2025-01 | 5000/500 | 1 commits @ f90c4bd (2024-09 -> 2024-09) |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | [raw](../raw-github/tech-leads-club_agent-skills.md) | skill | [report](../projects/133-tech-leads-agent-skills-registry.md) | github_api_fetch_error | unknown | 2026-05 | 4400/376 | - |
| [plastic-labs/honcho](https://github.com/plastic-labs/honcho) | [raw](../raw-github/plastic-labs_honcho.md) | memory | [report](../projects/173-honcho-stateful-agent-memory.md) | github_api_fetch_error | unknown | 2026-05 | 4200/488 | - |
| [facebookresearch/nevergrad](https://github.com/facebookresearch/nevergrad) | - | missing | [report](../projects/28-nevergrad-derivative-free.md) | github_api_403 | 2026-03 | 2025-01 | 4000/400 | 1 commits @ 617a3b0 (2026-03 -> 2026-03) |
| [evalstate/fast-agent](https://github.com/evalstate/fast-agent) | [raw](../raw-github/evalstate_fast-agent.md) | framework | [report](../projects/136-fast-agent-skills-mcp-acp.md) | github_api_fetch_error | unknown | 2026-05 | 3800/404 | - |
| [revfactory/harness](https://github.com/revfactory/harness) | [raw](../raw-github/revfactory_harness.md) | skill | [report](../projects/168-revfactory-harness-team-architecture-factory.md) | github_api_fetch_error | unknown | 2026-05 | 3500/525 | - |
| [aiming-lab/SimpleMem](https://github.com/aiming-lab/SimpleMem) | [raw](../raw-github/aiming-lab_simplemem.md) | memory | [report](../projects/86-simplemem-evolvemem-memory-stack.md) | github_api_fetch_error | unknown | 2026-05 | 3400/347 | - |
| [NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution) | [raw](../raw-github/nousresearch_hermes-agent-self-evolution.md) | evolution | [report](../projects/45-hermes-agent-self-evolution.md) | github_api_403 | unknown | 2026-05 | 3400/370 | - |
| [noahshinn/reflexion](https://github.com/noahshinn/reflexion) | [raw](../raw-github/noahshinn_reflexion.md) | memory | [report](../projects/noahshinn__reflexion.md) | github_api | 2023-03 | 2025-01 | 3159/306 | 1 commits @ 218cf0e (2025-01 -> 2025-01) |
| [THUDM/AgentBench](https://github.com/THUDM/AgentBench) | - | missing | [report](../projects/38-agentbench.md) | github_api_403 | 2026-02 | 2025-01 | 3000/300 | 1 commits @ d1e4a10 (2026-02 -> 2026-02) |
| [xlang-ai/OSWorld](https://github.com/xlang-ai/OSWorld) | [raw](../raw-github/xlang-ai_osworld.md) | evaluation | [report](../projects/73-osworld-computer-agent-benchmark.md) | github_api_fetch_error | unknown | 2026-05 | 2900/463 | - |
| [memodb-io/memobase](https://github.com/memodb-io/memobase) | [raw](../raw-github/memodb-io_memobase.md) | memory | [report](../projects/72-memobase-user-profile-memory.md) | github_api_fetch_error | unknown | 2026-05 | 2700/212 | - |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | [raw](../raw-github/freedomintelligence_openclaw-medical-skills.md) | skill | [report](../projects/143-openclaw-medical-skills-library.md) | github_api_fetch_error | unknown | 2026-05 | 2500/357 | - |
| [microsoft/skills](https://github.com/microsoft/skills) | [raw](../raw-github/microsoft_skills.md) | skill | [report](../projects/132-microsoft-skills.md) | github_api_fetch_error | unknown | 2026-05 | 2400/266 | - |
| [kayba-ai/agentic-context-engine](https://github.com/kayba-ai/agentic-context-engine) | [raw](../raw-github/kayba-ai_agentic-context-engine.md) | evolution | [report](../projects/175-agentic-context-engine-experience-learning.md) | github_api_fetch_error | unknown | 2026-05 | 2200/273 | - |
| [trustgraph-ai/trustgraph](https://github.com/trustgraph-ai/trustgraph) | [raw](../raw-github/trustgraph-ai_trustgraph.md) | memory | [report](../projects/176-trustgraph-context-graph-agent-runtime.md) | github_api_fetch_error | unknown | 2026-05 | 2100/242 | - |
| [CodeFuse-ML/awesome-code-llm](https://github.com/CodeFuse-ML/awesome-code-llm) | - | missing | [report](../projects/37-awesome-code-llm.md) | github_api_403 | unknown | 2026-01 | 2000/150 | - |
| [codejunkie99/agentic-stack](https://github.com/codejunkie99/agentic-stack) | [raw](../raw-github/codejunkie99_agentic-stack.md) | memory | [report](../projects/167-agentic-stack-portable-agent-memory-skills.md) | github_api_fetch_error | unknown | 2026-05 | 2000/254 | - |
| [doobidoo/mcp-memory-service](https://github.com/doobidoo/mcp-memory-service) | [raw](../raw-github/doobidoo_mcp-memory-service.md) | memory | [report](../projects/131-mcp-memory-service.md) | github_api_fetch_error | unknown | 2026-05 | 1900/291 | - |
| [zilliztech/memsearch](https://github.com/zilliztech/memsearch) | [raw](../raw-github/zilliztech_memsearch.md) | memory | [report](../projects/91-memsearch-agent-memory.md) | github_api_fetch_error | unknown | 2026-05 | 1800/169 | - |
| [shengranhu/adas](https://github.com/ShengranHu/ADAS) | - | missing | [report](../projects/03-adas-automated-design-agentic-systems.md) | github_api | 2024-07 | 2025-01 | 1581/236 | 1 commits @ 2702bee (2025-01 -> 2025-01) |
| [AMAP-ML/SkillClaw](https://github.com/AMAP-ML/SkillClaw) | [raw](../raw-github/amap-ml_skillclaw.md) | evolution | [report](../projects/161-skillclaw-collective-skill-evolution.md) | github_api_fetch_error | unknown | 2026-05 | 1500/137 | - |
| [langchain-ai/langmem](https://github.com/langchain-ai/langmem) | [raw](../raw-github/langchain-ai_langmem.md) | memory | [report](../projects/70-langmem-agent-memory.md) | github_api_fetch_error | unknown | 2026-05 | 1500/168 | - |
| [modelscope/AgentEvolver](https://github.com/modelscope/AgentEvolver) | [raw](../raw-github/modelscope_agentevolver.md) | evolution | [report](../projects/modelscope__agentevolver.md) | github_api | 2025-11 | 2026-04 | 1440/167 | 1 commits @ a5a8db8 (2026-03 -> 2026-03) |
| [callstackincubator/agent-skills](https://github.com/callstackincubator/agent-skills) | [raw](../raw-github/callstackincubator_agent-skills.md) | skill | [report](../projects/124-callstack-agent-skills.md) | github_api_fetch_error | unknown | 2026-05 | 1400/100 | - |
| [Memento-Teams/Memento-Skills](https://github.com/Memento-Teams/Memento-Skills) | [raw](../raw-github/memento-teams_memento-skills.md) | evolution | [report](../projects/142-memento-skills-self-evolving-agent.md) | github_api_fetch_error | unknown | 2026-05 | 1400/157 | - |
| [zylos-ai/zylos-core](https://github.com/zylos-ai/zylos-core) | [raw](../raw-github/zylos-ai_zylos-core.md) | evolution | [report](../projects/151-zylos-core-self-evolving-ai-teams.md) | github_api_fetch_error | unknown | 2026-05 | 1400/158 | - |
| [ai4co/rl4co](https://github.com/ai4co/rl4co) | - | missing | [report](../projects/39-rl4co-reinforcement-learning.md) | github_api_403 | 2026-01 | 2025-01 | 1200/150 | 1 commits @ 7a15396 (2026-01 -> 2026-01) |
| [OpenBMB/EdgeClaw](https://github.com/OpenBMB/EdgeClaw) | [raw](../raw-github/openbmb_edgeclaw.md) | framework | [report](../projects/97-edgeclaw-edge-cloud-agent.md) | github_api_fetch_error | unknown | 2026-05 | 1200/70 | - |
| [pinchbench/skill](https://github.com/pinchbench/skill) | [raw](../raw-github/pinchbench_skill.md) | evaluation | [report](../projects/51-pinchbench-skill.md) | github_api_403 | unknown | 2026-05 | 1200/132 | - |
| [ServiceNow/BrowserGym](https://github.com/ServiceNow/BrowserGym) | [raw](../raw-github/servicenow_browsergym.md) | evaluation | [report](../projects/75-browsergym-web-agent-benchmark.md) | github_api_fetch_error | unknown | 2026-05 | 1200/174 | - |
| [xai-liacs/LLaMEA](https://github.com/XAI-liacs/LLaMEA) | [raw](../raw-github/xai-liacs_llamea.md) | evaluation | [report](../projects/19-llamea-llm-evolutionary-algorithm.md) | github_api_403 | 2026-05 | 2025-01 | 1200/100 | 1 commits @ 8e4833e (2026-05 -> 2026-05) |
| [ai-boost/awesome-harness-engineering](https://github.com/ai-boost/awesome-harness-engineering) | [raw](../raw-github/ai-boost_awesome-harness-engineering.md) | education-list | [report](../projects/57-awesome-harness-engineering.md) | github_api_fetch_error | unknown | 2026-05 | 1100/100 | - |
| [MoizIbnYousaf/Ai-Agent-Skills](https://github.com/MoizIbnYousaf/Ai-Agent-Skills) | [raw](../raw-github/moizibnyousaf_ai-agent-skills.md) | skill | [report](../projects/188-ai-agent-skills-curated-library-cli.md) | github_api_fetch_error | unknown | 2026-05 | 1100/122 | - |
| [google-deepmind/funsearch](https://github.com/google-deepmind/funsearch) | - | missing | [report](../projects/04-funsearch-mathematical-discoveries.md) | github_api | 2023-11 | 2024-02 | 1065/177 | 1 commits @ cc53f27 (2024-02 -> 2024-02) |
| [CMA-ES/pycma](https://github.com/CMA-ES/pycma) | - | missing | [report](../projects/30-pycma-cma-es.md) | github_api_403 | 2026-02 | 2025-01 | 1000/250 | 1 commits @ 83089d1 (2026-02 -> 2026-02) |
| [EvoAgentX/EvoAgentX](https://github.com/EvoAgentX/EvoAgentX) | [raw](../raw-github/evoagentx_evoagentx.md) | evolution | [report](../projects/22-evoagentx-agent-evolution-framework.md) | github_api_403 | 2026-05 | 2026-01 | 1000/100 | 1 commits @ f542ce4 (2026-05 -> 2026-05) |
| [thClaws/thClaws](https://github.com/thClaws/thClaws) | [raw](../raw-github/thclaws_thclaws.md) | framework | [report](../projects/141-thclaws-agent-harness-platform.md) | github_api_fetch_error | unknown | 2026-05 | 1000/140 | - |
| [wanxingai/LightAgent](https://github.com/wanxingai/LightAgent) | [raw](../raw-github/wanxingai_lightagent.md) | framework | [report](../projects/139-lightagent-memory-mcp-skills.md) | github_api_fetch_error | unknown | 2026-05 | 987/127 | - |
| [ClawBio/ClawBio](https://github.com/ClawBio/ClawBio) | [raw](../raw-github/clawbio_clawbio.md) | skill | [report](../projects/96-clawbio-bioinformatics-skills.md) | github_api_fetch_error | unknown | 2026-05 | 867/174 | - |
| [microsoft/WindowsAgentArena](https://github.com/microsoft/WindowsAgentArena) | [raw](../raw-github/microsoft_windowsagentarena.md) | evaluation | [report](../projects/74-windows-agent-arena.md) | github_api_fetch_error | unknown | 2026-05 | 861/95 | - |
| [agent-sh/agentsys](https://github.com/agent-sh/agentsys) | [raw](../raw-github/agent-sh_agentsys.md) | framework | [report](../projects/144-agentsys-agent-orchestration-runtime.md) | github_api_fetch_error | unknown | 2026-05 | 818/90 | - |
| [beita6969/ScienceClaw](https://github.com/beita6969/ScienceClaw) | [raw](../raw-github/beita6969_scienceclaw.md) | research-agent | [report](../projects/90-scienceclaw-research-agent.md) | github_api_fetch_error | unknown | 2026-05 | 816/90 | - |
| [madaan/self-refine](https://github.com/madaan/self-refine) | [raw](../raw-github/madaan_self-refine.md) | prompt-optimization | [report](../projects/madaan__self_refine.md) | github_api | 2023-03 | 2024-10 | 805/70 | 1 commits @ 9a206d4 (2024-10 -> 2024-10) |
| [icaros-usc/pyribs](https://github.com/icaros-usc/pyribs) | - | missing | [report](../projects/25-pyribs-quality-diversity.md) | github_api_403 | 2026-05 | 2025-01 | 800/80 | 1 commits @ 91479af (2026-05 -> 2026-05) |
| [sentient-agi/EvoSkill](https://github.com/sentient-agi/EvoSkill) | [raw](../raw-github/sentient-agi_evoskill.md) | evolution | [report](../projects/122-evoskill-automated-skill-discovery.md) | github_api_fetch_error | unknown | 2026-05 | 798/85 | - |
| [aiming-lab/SkillRL](https://github.com/aiming-lab/SkillRL) | [raw](../raw-github/aiming-lab_skillrl.md) | evolution | [report](../projects/148-skillrl-recursive-skill-rl.md) | github_api_fetch_error | unknown | 2026-05 | 765/59 | - |
| [adolfousier/opencrabs](https://github.com/adolfousier/opencrabs) | [raw](../raw-github/adolfousier_opencrabs.md) | evolution | [report](../projects/83-opencrabs-self-improving-agent.md) | github_api_fetch_error | unknown | 2026-05 | 755/72 | - |
| [google-deepmind/opro](https://github.com/google-deepmind/opro) | - | missing | [report](../projects/01-opro-llm-as-optimizer.md) | github_api | 2023-10 | 2024-12 | 746/91 | 1 commits @ a76bdce (2024-12 -> 2024-12) |
| [carperai/openelm](https://github.com/carperai/openelm) | - | missing | [report](../projects/02-openelm-evolution-large-models.md) | github_api | 2022-09 | 2023-11 | 739/90 | 1 commits @ c844e14 (2023-10 -> 2023-10) |
| [QuantaAlpha/QuantaAlpha](https://github.com/QuantaAlpha/QuantaAlpha) | [raw](../raw-github/quantaalpha_quantaalpha.md) | evolution | [report](../projects/152-quantaalpha-evolutionary-repo-agent.md) | github_api_fetch_error | unknown | 2026-05 | 702/83 | - |
| [kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory) | [raw](../raw-github/kitfunso_hippo-memory.md) | memory | [report](../projects/164-hippo-memory-biological-agent-memory.md) | github_api_fetch_error | unknown | 2026-05 | 675/34 | - |
| [Human-Agent-Society/CORAL](https://github.com/Human-Agent-Society/CORAL) | [raw](../raw-github/human-agent-society_coral.md) | evolution | [report](../projects/89-coral-multi-agent-evolution.md) | github_api_fetch_error | unknown | 2026-05 | 667/89 | - |
| [claw-eval/claw-eval](https://github.com/claw-eval/claw-eval) | [raw](../raw-github/claw-eval_claw-eval.md) | evaluation | [report](../projects/55-claw-eval-agent-evaluation.md) | github_api_fetch_error | unknown | 2026-03 | 606/52 | - |
| [sundial-org/awesome-openclaw-skills](https://github.com/sundial-org/awesome-openclaw-skills) | [raw](../raw-github/sundial-org_awesome-openclaw-skills.md) | skill | [report](../projects/165-awesome-openclaw-skills-index.md) | github_api_fetch_error | unknown | 2026-05 | 602/83 | - |
| [MicrosoftDocs/Agent-Skills](https://github.com/MicrosoftDocs/Agent-Skills) | [raw](../raw-github/microsoftdocs_agent-skills.md) | skill | [report](../projects/66-microsoft-agent-skills.md) | github_api_fetch_error | unknown | 2026-05 | 557/56 | - |
| [a-evo-lab/a-evolve](https://github.com/a-evo-lab/a-evolve) | [raw](../raw-github/a-evo-lab_a-evolve.md) | evolution | [report](../projects/115-a-evolve-universal-agent-evolution.md) | github_api_fetch_error | unknown | 2026-05 | 552/67 | - |
| [Gentleman-Programming/Gentleman-Skills](https://github.com/Gentleman-Programming/Gentleman-Skills) | [raw](../raw-github/gentleman-programming_gentleman-skills.md) | skill | [report](../projects/190-gentleman-skills-community-agent-patterns.md) | github_api_fetch_error | unknown | 2026-05 | 522/79 | - |
| [swarmclawai/swarmclaw](https://github.com/swarmclawai/swarmclaw) | [raw](../raw-github/swarmclawai_swarmclaw.md) | framework | [report](../projects/93-swarmclaw-agent-runtime.md) | github_api_fetch_error | unknown | 2026-05 | 518/103 | - |
| [ai4co/awesome-fm4co](https://github.com/ai4co/awesome-fm4co) | [raw](../raw-github/ai4co_awesome-fm4co.md) | education-list | [report](../projects/40-awesome-fm4co.md) | github_api_403 | 2026-05 | 2026-01 | 500/50 | 1 commits @ 5e4c333 (2026-05 -> 2026-05) |
| [ai4co/reevo](https://github.com/ai4co/reevo) | - | missing | [report](../projects/18-reevo-reflective-evolution.md) | github_api_403 | 2026-01 | 2025-01 | 500/50 | 1 commits @ 6dce182 (2026-01 -> 2026-01) |
| [YoungDubbyDu/LLM-Agent-Optimization](https://github.com/YoungDubbyDu/LLM-Agent-Optimization) | [raw](../raw-github/youngdubbydu_llm-agent-optimization.md) | education-list | [report](../projects/36-llm-agent-optimization.md) | github_api_403 | 2026-02 | 2026-01 | 500/50 | 1 commits @ 662b5b5 (2026-02 -> 2026-02) |
| [huytieu/COG-second-brain](https://github.com/huytieu/COG-second-brain) | [raw](../raw-github/huytieu_cog-second-brain.md) | memory | [report](../projects/163-cog-self-evolving-second-brain.md) | github_api_fetch_error | unknown | 2026-05 | 486/57 | - |
| [elastic/agent-skills](https://github.com/elastic/agent-skills) | [raw](../raw-github/elastic_agent-skills.md) | skill | [report](../projects/158-elastic-official-agent-skills.md) | github_api_fetch_error | unknown | 2026-05 | 485/34 | - |
| [ViktorAxelsen/MemSkill](https://github.com/ViktorAxelsen/MemSkill) | [raw](../raw-github/viktoraxelsen_memskill.md) | evolution | [report](../projects/150-memskill-evolving-memory-skills.md) | github_api_fetch_error | unknown | 2026-05 | 484/31 | - |
| [SJTU-IPADS/SkVM](https://github.com/SJTU-IPADS/SkVM) | [raw](../raw-github/sjtu-ipads_skvm.md) | skill | [report](../projects/82-skvm-skill-virtual-machine.md) | github_api_fetch_error | unknown | 2026-05 | 480/41 | - |
| [regenrek/codex-1up](https://github.com/regenrek/codex-1up) | [raw](../raw-github/regenrek_codex-1up.md) | skill | [report](../projects/171-codex-1up-codex-cli-upgrade-kit.md) | github_api_fetch_error | unknown | 2026-05 | 430/18 | - |
| [ynulihao/AgentSkillOS](https://github.com/ynulihao/AgentSkillOS) | [raw](../raw-github/ynulihao_agentskillos.md) | skill | [report](../projects/119-agentskillos-skill-retrieval-orchestration.md) | github_api_fetch_error | unknown | 2026-05 | 415/49 | - |
| [managedcode/dotnet-skills](https://github.com/managedcode/dotnet-skills) | [raw](../raw-github/managedcode_dotnet-skills.md) | skill | [report](../projects/172-dotnet-skills-agent-skill-catalog.md) | github_api_fetch_error | unknown | 2026-05 | 403/31 | - |
| [FeiLiu36/LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) | [raw](../raw-github/feiliu36_llm4opt.md) | research-agent | [report](../projects/27-llm4opt-llm-optimization.md) | github_api_403 | 2026-03 | 2025-01 | 400/40 | 1 commits @ a198a9c (2026-03 -> 2026-03) |
| [china-qijizhifeng/agentic-Harness-engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering) | [raw](../raw-github/china-qijizhifeng_agentic-harness-engineering.md) | evolution | [report](../projects/43-agentic-harness-engineering.md) | github_api_403 | unknown | 2026-05 | 391/unknown | - |
| [rtk-ai/icm](https://github.com/rtk-ai/icm) | [raw](../raw-github/rtk-ai_icm.md) | memory | [report](../projects/123-icm-permanent-agent-memory.md) | github_api_fetch_error | unknown | 2026-05 | 371/35 | - |
| [clawdotnet/openclaw.net](https://github.com/clawdotnet/openclaw.net) | [raw](../raw-github/clawdotnet_openclaw.net.md) | framework | [report](../projects/98-openclaw-dotnet-runtime.md) | github_api_fetch_error | unknown | 2026-05 | 345/66 | - |
| [hashgraph-online/registry-broker-skills](https://github.com/hashgraph-online/registry-broker-skills) | [raw](../raw-github/hashgraph-online_registry-broker-skills.md) | skill | [report](../projects/159-hol-registry-broker-skills.md) | github_api_fetch_error | unknown | 2026-05 | 345/5 | - |
| [HUST-AI-HYZ/MemoryAgentBench](https://github.com/HUST-AI-HYZ/MemoryAgentBench) | [raw](../raw-github/hust-ai-hyz_memoryagentbench.md) | memory | [report](../projects/111-memoryagentbench-incremental-memory-eval.md) | github_api_fetch_error | unknown | 2026-05 | 341/53 | - |
| [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) | [raw](../raw-github/jimliu_baoyu-skills.md) | skill | [report](../projects/155-baoyu-agent-skills-pack.md) | github_api_fetch_error | unknown | 2026-05 | 339/31 | - |
| [meituan/EvoCUA](https://github.com/meituan/EvoCUA) | [raw](../raw-github/meituan_evocua.md) | evolution | [report](../projects/63-evocua-computer-use-agent.md) | github_api_fetch_error | unknown | 2026-05 | 317/23 | - |
| [beeevita/EvoPrompt](https://github.com/beeevita/EvoPrompt) | [raw](../raw-github/beeevita_evoprompt.md) | prompt-optimization | [report](../projects/20-evoprompt-prompt-optimization.md) | github_api_403 | 2025-09 | 2024-01 | 300/30 | 1 commits @ 94caff3 (2025-09 -> 2025-09) |
| [CharlesQ9/Self-Evolving-Agents](https://github.com/CharlesQ9/Self-Evolving-Agents) | [raw](../raw-github/charlesq9_self-evolving-agents.md) | evolution | [report](../projects/32-self-evolving-agents.md) | github_api_403 | 2025-10 | 2025-01 | 300/30 | 1 commits @ c017544 (2025-10 -> 2025-10) |
| [xiaofangxd/LLM_EA](https://github.com/xiaofangxd/LLM_EA) | - | missing | [report](../projects/34-llm-ea-survey.md) | github_api_403 | 2024-11 | 2024-01 | 300/30 | 1 commits @ fbaa79f (2024-11 -> 2024-11) |
| [princeton-pli/hal-harness](https://github.com/princeton-pli/hal-harness) | [raw](../raw-github/princeton-pli_hal-harness.md) | evaluation | [report](../projects/109-hal-harness-agent-leaderboard.md) | github_api_fetch_error | unknown | 2026-05 | 289/55 | - |
| [shinpr/mcp-local-rag](https://github.com/shinpr/mcp-local-rag) | [raw](../raw-github/shinpr_mcp-local-rag.md) | memory | [report](../projects/137-mcp-local-rag-agent-skills.md) | github_api_fetch_error | unknown | 2026-05 | 275/53 | - |
| [JARVIS-Xs/SE-Agent](https://github.com/JARVIS-Xs/SE-Agent) | [raw](../raw-github/jarvis-xs_se-agent.md) | evaluation | [report](../projects/jarvis_xs__se_agent.md) | github_api | 2025-07 | 2025-09 | 274/29 | 1 commits @ c188ce1 (2025-09 -> 2025-09) |
| [matrixorigin/Memoria](https://github.com/matrixorigin/Memoria) | [raw](../raw-github/matrixorigin_memoria.md) | memory | [report](../projects/110-memoria-git-for-agent-memory.md) | github_api_fetch_error | unknown | 2026-05 | 271/36 | - |
| [neo4j-labs/agent-memory](https://github.com/neo4j-labs/agent-memory) | [raw](../raw-github/neo4j-labs_agent-memory.md) | memory | [report](../projects/130-neo4j-agent-memory.md) | github_api_fetch_error | unknown | 2026-05 | 262/63 | - |
| [jdrhyne/agent-skills](https://github.com/jdrhyne/agent-skills) | [raw](../raw-github/jdrhyne_agent-skills.md) | skill | [report](../projects/134-jdrhyne-agent-skills-pack.md) | github_api_fetch_error | unknown | 2026-05 | 230/27 | - |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | [raw](../raw-github/alirezarezvani_claude-skills.md) | skill | [report](../projects/156-alirezarezvani-claude-skills-pack.md) | github_api_fetch_error | unknown | 2026-05 | 214/17 | - |
| [Genentech/OpenTreeSearch](https://github.com/Genentech/opentreesearch) | - | missing | [report](../projects/24-opentreesearch-llm-code-evolution.md) | github_api_403 | 2026-05 | 2026-01 | 200/20 | 1 commits @ 0c8b452 (2026-05 -> 2026-05) |
| [siyuyuan/evoagent](https://github.com/siyuyuan/evoagent) | - | missing | [report](../projects/21-evoagent-evolutionary-multi-agent.md) | github_api_403 | 2024-10 | 2025-01 | 200/20 | 1 commits @ fc6d087 (2024-10 -> 2024-10) |
| [wuxingyu-ai/LLM4EC](https://github.com/wuxingyu-ai/LLM4EC) | [raw](../raw-github/wuxingyu-ai_llm4ec.md) | evolution | [report](../projects/26-llm4ec-llm-evolutionary-computation.md) | github_api_403 | 2025-03 | 2025-01 | 200/20 | 1 commits @ a6ef587 (2025-03 -> 2025-03) |
| [Zesearch/self-improvement-llm](https://github.com/Zesearch/self-improvement-llm) | [raw](../raw-github/zesearch_self-improvement-llm.md) | evolution | [report](../projects/33-self-improvement-llm.md) | github_api_403 | 2026-03 | 2026-01 | 200/20 | 1 commits @ 45c630c (2026-03 -> 2026-03) |
| [claw-bench/claw-bench](https://github.com/claw-bench/claw-bench) | [raw](../raw-github/claw-bench_claw-bench.md) | evaluation | [report](../projects/53-claw-bench-agent-benchmark.md) | github_api_fetch_error | unknown | 2026-05 | 171/18 | - |
| [TheQtCompanyRnD/agent-skills](https://github.com/TheQtCompanyRnD/agent-skills) | [raw](../raw-github/theqtcompanyrnd_agent-skills.md) | skill | [report](../projects/106-qt-ai-skills.md) | github_api_fetch_error | unknown | 2026-05 | 171/16 | - |
| [Signet-AI/signetai](https://github.com/Signet-AI/signetai) | [raw](../raw-github/signet-ai_signetai.md) | memory | [report](../projects/193-signet-agent-context-substrate.md) | github_api | 2026-02 | 2026-05 | 167/33 | - |
| [OneWave-AI/claude-skills](https://github.com/OneWave-AI/claude-skills) | [raw](../raw-github/onewave-ai_claude-skills.md) | skill | [report](../projects/80-onewave-claude-skills.md) | github_api_fetch_error | unknown | 2026-05 | 154/23 | - |
| [iii-experimental/agentos](https://github.com/iii-experimental/agentos) | [raw](../raw-github/iii-experimental_agentos.md) | evolution | [report](../projects/105-agentos-self-evolving-agent-os.md) | github_api_fetch_error | unknown | 2026-05 | 145/20 | - |
| [MemTensor/HaluMem](https://github.com/MemTensor/HaluMem) | [raw](../raw-github/memtensor_halumem.md) | memory | [report](../projects/177-halumem-agent-memory-hallucination-benchmark.md) | github_api_fetch_error | unknown | 2025-11 | 138/14 | - |
| [DeepAuto-AI/automl-agent](https://github.com/DeepAuto-AI/automl-agent) | - | missing | [report](../projects/05-automl-agent-multi-agent.md) | github_api | 2025-05 | 2025-07 | 136/21 | 1 commits @ 9e0d842 (2025-07 -> 2025-07) |
| [TiMEM-AI/timem](https://github.com/TiMEM-AI/timem) | [raw](../raw-github/timem-ai_timem.md) | memory | [report](../projects/59-timem-temporal-memory.md) | github_api_fetch_error | unknown | 2026-05 | 134/8 | - |
| [MemTensor/MemRL](https://github.com/MemTensor/MemRL) | [raw](../raw-github/memtensor_memrl.md) | evolution | [report](../projects/88-memrl-runtime-memory-rl.md) | github_api_fetch_error | unknown | 2026-05 | 117/10 | - |
| [microsoft/CoML](https://github.com/microsoft/CoML) | - | missing | [report](../projects/06-coml-mlcopilot.md) | github_api | 2023-04 | 2024-10 | 100/16 | 1 commits @ 46f7452 (2024-10 -> 2024-10) |
| [pureples/pureples](https://github.com/pureples/pureples) | - | missing | [report](../projects/42-gp-llm-code-evolution.md) | github_api_403 | unknown | 2025-01 | 100/20 | - |
| [inter-co/science-codeevolve](https://github.com/inter-co/science-codeevolve) | - | missing | [report](../projects/inter_co__science_codeevolve.md) | github_api | 2025-10 | 2026-04 | 98/14 | 1 commits @ c077959 (2026-04 -> 2026-04) |
| [openclaw/clawbench](https://github.com/openclaw/clawbench) | [raw](../raw-github/openclaw_clawbench.md) | evaluation | [report](../projects/54-openclaw-clawbench.md) | github_api_fetch_error | unknown | 2026-04 | 97/18 | - |
| [OpenHands/benchmarks](https://github.com/OpenHands/benchmarks) | [raw](../raw-github/openhands_benchmarks.md) | evaluation | [report](../projects/114-openhands-benchmarks.md) | github_api_fetch_error | unknown | 2026-05 | 85/62 | - |
| [JarvisPei/SCOPE](https://github.com/JarvisPei/SCOPE) | - | missing | [report](../projects/jarvispei__scope.md) | github_api | 2025-12 | 2026-03 | 77/6 | - |
| [CodeAlive-AI/ai-driven-development](https://github.com/CodeAlive-AI/ai-driven-development) | [raw](../raw-github/codealive-ai_ai-driven-development.md) | skill | [report](../projects/125-ai-driven-development-skills-hooks.md) | github_api_fetch_error | unknown | 2026-05 | 74/3 | - |
| [aisa-group/skill-inject](https://github.com/aisa-group/skill-inject) | [raw](../raw-github/aisa-group_skill-inject.md) | skill | [report](../projects/84-skill-inject-agent-skill-security.md) | github_api_fetch_error | unknown | 2026-05 | 73/2 | - |
| [quzhiii/thesis-skills](https://github.com/quzhiii/thesis-skills) | [raw](../raw-github/quzhiii_thesis-skills.md) | skill | [report](../projects/184-thesis-skills-paper-workflow-skills.md) | github_api_fetch_error | unknown | 2026-05 | 71/6 | - |
| [PaulRBerg/agent-skills](https://github.com/PaulRBerg/agent-skills) | [raw](../raw-github/paulrberg_agent-skills.md) | skill | [report](../projects/185-prb-agent-skills-personal-codex-skill-pack.md) | github_api_fetch_error | unknown | 2026-05 | 59/2 | - |
| [alfa-group/tutorial_gp_llm](https://github.com/alfa-group/tutorial_gp_llm) | - | missing | [report](../projects/35-tutorial-gp-llm.md) | github_api_403 | 2024-08 | 2024-01 | 50/10 | 1 commits @ e3b3c52 (2024-08 -> 2024-08) |
| [agent-ecosystem/skill-validator](https://github.com/agent-ecosystem/skill-validator) | [raw](../raw-github/agent-ecosystem_skill-validator.md) | skill | [report](../projects/153-agent-ecosystem-skill-validator.md) | github_api_fetch_error | unknown | 2026-05 | 47/6 | - |
| [OPPO-Mente-Lab/LLM-Self-Judge](https://github.com/OPPO-Mente-Lab/LLM-Self-Judge) | - | missing | [report](../projects/oppo_mente_lab__llm_self_judge.md) | github_api | 2026-03 | 2026-03 | 43/1 | - |
| [vectorize-io/agent-memory-benchmark](https://github.com/vectorize-io/agent-memory-benchmark) | [raw](../raw-github/vectorize-io_agent-memory-benchmark.md) | memory | [report](../projects/77-agent-memory-benchmark.md) | github_api_fetch_error | unknown | 2026-05 | 43/15 | - |
| [diegosouzapw/awesome-omni-skills](https://github.com/diegosouzapw/awesome-omni-skills) | [raw](../raw-github/diegosouzapw_awesome-omni-skills.md) | skill | [report](../projects/138-awesome-omni-skills-runtime.md) | github_api_fetch_error | unknown | 2026-05 | 42/11 | - |
| [GeniusHTX/SWE-Skills-Bench](https://github.com/GeniusHTX/SWE-Skills-Bench) | [raw](../raw-github/geniushtx_swe-skills-bench.md) | evaluation | [report](../projects/69-swe-skills-bench.md) | github_api_fetch_error | unknown | 2026-05 | 42/7 | - |
| [ZJU-LLM-Safety/DARWIN](https://github.com/ZJU-LLM-Safety/DARWIN) | - | missing | [report](../projects/zju_llm_safety__darwin.md) | github_api | 2026-04 | 2026-05 | 41/4 | - |
| [agent-skills-hub/agent-skills-hub](https://github.com/agent-skills-hub/agent-skills-hub) | [raw](../raw-github/agent-skills-hub_agent-skills-hub.md) | skill | [report](../projects/140-agent-skills-hub-registry.md) | github_api_fetch_error | unknown | 2026-05 | 40/13 | - |
| [AMA-Bench/AMA-Bench](https://github.com/AMA-Bench/AMA-Bench) | [raw](../raw-github/ama-bench_ama-bench.md) | memory | [report](../projects/60-ama-bench-memory-evaluation.md) | github_api_fetch_error | unknown | 2026-05 | 40/8 | - |
| [simota/agent-skills](https://github.com/simota/agent-skills) | [raw](../raw-github/simota_agent-skills.md) | skill | [report](../projects/81-simota-agent-skills-nexus.md) | github_api_fetch_error | unknown | 2026-05 | 39/8 | - |
| [darkrishabh/agent-skills-eval](https://github.com/darkrishabh/agent-skills-eval) | [raw](../raw-github/darkrishabh_agent-skills-eval.md) | evaluation | [report](../projects/154-agent-skills-eval-benchmark.md) | github_api_fetch_error | unknown | 2026-05 | 34/5 | - |
| [jcartu/rasputin-memory](https://github.com/jcartu/rasputin-memory) | [raw](../raw-github/jcartu_rasputin-memory.md) | memory | [report](../projects/195-rasputin-memory-openclaw-claude.md) | github_api | 2026-03 | 2026-04 | 33/5 | - |
| [mem0ai/memory-benchmarks](https://github.com/mem0ai/memory-benchmarks) | [raw](../raw-github/mem0ai_memory-benchmarks.md) | memory | [report](../projects/87-mem0-memory-benchmarks.md) | github_api_fetch_error | unknown | 2026-05 | 33/9 | - |
| [Randroids-Dojo/skills](https://github.com/Randroids-Dojo/skills) | [raw](../raw-github/randroids-dojo_skills.md) | skill | [report](../projects/102-randroids-skills-agent-skill-loop.md) | github_api_fetch_error | unknown | 2026-05 | 33/2 | - |
| [803/skills-supply](https://github.com/803/skills-supply) | [raw](../raw-github/803_skills-supply.md) | skill | [report](../projects/104-skills-supply-cross-agent-skills.md) | github_api_fetch_error | unknown | 2026-05 | 32/1 | - |
| [rendro/sediment](https://github.com/rendro/sediment) | [raw](../raw-github/rendro_sediment.md) | memory | [report](../projects/108-sediment-local-agent-memory.md) | github_api_fetch_error | unknown | 2026-05 | 32/5 | - |
| [farmage/opencode-skills](https://github.com/farmage/opencode-skills) | [raw](../raw-github/farmage_opencode-skills.md) | skill | [report](../projects/181-opencode-skills-workflow-commands.md) | github_api_fetch_error | unknown | 2026-05 | 28/6 | - |
| [hebbs-ai/hebbs-memory-engine](https://github.com/hebbs-ai/hebbs-memory-engine) | [raw](../raw-github/hebbs-ai_hebbs-memory-engine.md) | memory | [report](../projects/149-hebbs-memory-engine.md) | github_api_fetch_error | unknown | 2026-05 | 28/4 | - |
| [togethercomputer/skills](https://github.com/togethercomputer/skills) | [raw](../raw-github/togethercomputer_skills.md) | skill | [report](../projects/191-together-ai-skills-provider-api-pack.md) | github_api_fetch_error | unknown | 2026-05 | 28/5 | - |
| [microsoft/STATE-Bench](https://github.com/microsoft/STATE-Bench) | [raw](../raw-github/microsoft_state-bench.md) | memory | [report](../projects/120-state-bench-agent-memory-evaluation.md) | github_api_fetch_error | unknown | 2026-05 | 25/3 | - |
| [JordanMcCann/agentmemory](https://github.com/JordanMcCann/agentmemory) | [raw](../raw-github/jordanmccann_agentmemory.md) | memory | [report](../projects/99-jordanmccann-agentmemory-longmemeval.md) | github_api_fetch_error | unknown | 2026-05 | 23/2 | - |
| [CE0Alex/skill-hunter](https://github.com/CE0Alex/skill-hunter) | [raw](../raw-github/ce0alex_skill-hunter.md) | skill | [report](../projects/160-skill-hunter-agent-skill-recommender.md) | github_api_fetch_error | unknown | 2026-05 | 22/0 | - |
| [howells/arc](https://github.com/howells/arc) | [raw](../raw-github/howells_arc.md) | framework | [report](../projects/189-arc-agent-workflow-plugin.md) | github_api_fetch_error | unknown | 2026-05 | 22/2 | - |
| [cxcscmu/SkillLearnBench](https://github.com/cxcscmu/SkillLearnBench) | [raw](../raw-github/cxcscmu_skilllearnbench.md) | skill | [report](../projects/118-skilllearnbench-agent-skill-generation.md) | github_api_fetch_error | unknown | 2026-05 | 21/2 | - |
| [raphaelchristi/harness-evolver](https://github.com/raphaelchristi/harness-evolver) | [raw](../raw-github/raphaelchristi_harness-evolver.md) | evolution | [report](../projects/56-harness-evolver.md) | github_api_fetch_error | unknown | 2026-05 | 21/2 | - |
| [harness/harness-skills](https://github.com/harness/harness-skills) | [raw](../raw-github/harness_harness-skills.md) | skill | [report](../projects/145-harness-skills-cicd-agent-skills.md) | github_api_fetch_error | unknown | 2026-05 | 20/4 | - |
| [yf-he/EvoTest](https://github.com/yf-he/EvoTest) | [raw](../raw-github/yf-he_evotest.md) | evolution | [report](../projects/166-evotest-evolutionary-test-time-learning.md) | github_api_fetch_error | unknown | 2026-05 | 19/1 | - |
| [cyijun/agent-smith](https://github.com/cyijun/agent-smith) | [raw](../raw-github/cyijun_agent-smith.md) | framework | [report](../projects/182-agent-smith-directory-isolated-multi-agent.md) | github_api_fetch_error | unknown | 2026-05 | 18/2 | - |
| [pjt222/agent-almanac](https://github.com/pjt222/agent-almanac) | [raw](../raw-github/pjt222_agent-almanac.md) | skill | [report](../projects/112-agent-almanac-skill-agent-team-index.md) | github_api_fetch_error | unknown | 2026-05 | 17/2 | - |
| [akillness/oh-my-skills](https://github.com/akillness/oh-my-skills) | [raw](../raw-github/akillness_oh-my-skills.md) | skill | [report](../projects/169-oh-my-skills-cross-agent-skill-collection.md) | github_api_fetch_error | unknown | 2026-05 | 16/1 | - |
| [dmgrok/agent_skills_directory](https://github.com/dmgrok/agent_skills_directory) | [raw](../raw-github/dmgrok_agent_skills_directory.md) | skill | [report](../projects/61-agent-skills-directory.md) | github_api_fetch_error | unknown | 2026-05 | 16/2 | - |
| [sehoon787/my-codex](https://github.com/sehoon787/my-codex) | [raw](../raw-github/sehoon787_my-codex.md) | skill | [report](../projects/147-my-codex-agent-harness-pack.md) | github_api_fetch_error | unknown | 2026-05 | 16/2 | - |
| [galyarderlabs/galyarder-framework](https://github.com/galyarderlabs/galyarder-framework) | [raw](../raw-github/galyarderlabs_galyarder-framework.md) | skill | [report](../projects/183-galyarder-agentic-skills-orchestration.md) | github_api_fetch_error | unknown | 2026-05 | 11/2 | - |
| [chriscox/agent-skills](https://github.com/chriscox/agent-skills) | [raw](../raw-github/chriscox_agent-skills.md) | skill | [report](../projects/107-chriscox-agent-skills.md) | github_api_fetch_error | unknown | 2026-05 | 10/2 | - |
| [eigent-ai/agent-skills](https://github.com/eigent-ai/agent-skills) | [raw](../raw-github/eigent-ai_agent-skills.md) | skill | [report](../projects/187-eigent-agent-skills-cowork-collection.md) | github_api_fetch_error | unknown | 2026-05 | 10/0 | - |
| [kks0488/vibe-codex](https://github.com/kks0488/vibe-codex) | [raw](../raw-github/kks0488_vibe-codex.md) | skill | [report](../projects/180-vibe-codex-codex-skills-teams.md) | github_api_fetch_error | unknown | 2026-05 | 10/0 | - |
| [opensite-ai/opensite-skills](https://github.com/opensite-ai/opensite-skills) | [raw](../raw-github/opensite-ai_opensite-skills.md) | memory | [report](../projects/135-opensite-skills-memory-sync.md) | github_api_fetch_error | unknown | 2026-05 | 7/0 | - |
| [jayzeng/agentmemory](https://github.com/jayzeng/agentmemory) | [raw](../raw-github/jayzeng_agentmemory.md) | memory | [report](../projects/76-agentmemory-coding-agent-memory.md) | github_api_fetch_error | unknown | 2026-05 | 5/0 | - |
| [jscraik/Agent-Skills](https://github.com/jscraik/Agent-Skills) | [raw](../raw-github/jscraik_agent-skills.md) | skill | [report](../projects/127-agent-skills-kit-control-plane.md) | github_api_fetch_error | unknown | 2026-05 | 4/4 | - |
| [TerryFYL/openclaw-evolution-framework](https://github.com/TerryFYL/openclaw-evolution-framework) | [raw](../raw-github/terryfyl_openclaw-evolution-framework.md) | evolution | [report](../projects/95-openclaw-evolution-framework.md) | github_api_fetch_error | unknown | 2026-05 | 4/0 | - |
| [guixiang123124/openclaw-harness](https://github.com/guixiang123124/openclaw-harness) | [raw](../raw-github/guixiang123124_openclaw-harness.md) | skill | [report](../projects/170-openclaw-harness-engineering-factory.md) | github_api_fetch_error | unknown | 2026-05 | 3/0 | - |
| [psenger/ai-agent-skills](https://github.com/psenger/ai-agent-skills) | [raw](../raw-github/psenger_ai-agent-skills.md) | skill | [report](../projects/113-psenger-ai-agent-skills.md) | github_api_fetch_error | unknown | 2026-05 | 3/0 | - |
| [jbrahy/meta-agent-teams](https://github.com/jbrahy/meta-agent-teams) | [raw](../raw-github/jbrahy_meta-agent-teams.md) | evolution | [report](../projects/101-agent-teams-git-backed-evolution.md) | github_api_fetch_error | unknown | 2026-05 | 2/0 | - |
| [trillskillz/clawdmarket](https://github.com/trillskillz/clawdmarket) | [raw](../raw-github/trillskillz_clawdmarket.md) | evolution | [report](../projects/100-clawdmarket-agent-marketplace.md) | github_api_fetch_error | unknown | 2026-05 | 2/0 | - |
| [Gitmaxd/deepagents-cli-codex-skill](https://github.com/Gitmaxd/deepagents-cli-codex-skill) | [raw](../raw-github/gitmaxd_deepagents-cli-codex-skill.md) | skill | [report](../projects/128-deepagents-cli-codex-skill.md) | github_api_fetch_error | unknown | 2026-05 | 1/0 | - |
| [sudokrang/aceforge](https://github.com/sudokrang/aceforge) | [raw](../raw-github/sudokrang_aceforge.md) | evolution | [report](../projects/62-aceforge-skill-evolution.md) | github_api_fetch_error | unknown | 2026-05 | 1/0 | - |
| [DSAIL-Memory/EvoMemBench](https://github.com/DSAIL-Memory/EvoMemBench) | [raw](../raw-github/dsail-memory_evomembench.md) | memory | [report](../projects/192-evomembench-self-evolving-memory-benchmark.md) | github_api | 2026-05 | 2026-05 | 0/0 | - |
| [jakenuts/agent-skills](https://github.com/jakenuts/agent-skills) | [raw](../raw-github/jakenuts_agent-skills.md) | skill | [report](../projects/126-jakenuts-agent-skills-toolkit.md) | github_api_fetch_error | unknown | 2026-05 | 0/0 | - |
| [OiiOAI/MOLT](https://github.com/OiiOAI/MOLT) | [raw](../raw-github/oiioai_molt.md) | evolution | [report](../projects/94-molt-co-evolution-engine.md) | github_api_fetch_error | unknown | 2026-05 | 0/0 | - |

## Top Strict Evolution-Theme Raw Repositories

| Repo | Stars | Category | Time slice | Description |
|---|---:|---|---|---|
| [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | 12600 | 应用/application | 2026-05 | AutoResearchClaw 是从 research idea 到 paper 的自主/协作式科研 agent 管线，结合多 agent debate、实验沙箱、claim verification、HITL co-pilot、MetaClaw cross-run learning 和 ARC-Bench。 |
| [aden-hive/hive](https://github.com/aden-hive/hive) | 10400 | 框架/framework | 2026-05 | Aden Hive 是生产 AI 的 multi-agent harness，强调状态持久化、崩溃恢复、成本控制、审计轨迹、MCP 工具集成和失败驱动的 graph evolution。 |
| [HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace) | 6300 | 框架/framework | 2026-05 | OpenSpace 把 skills 当作会选择、执行、监控、分析并演化的运行时实体，提供 OpenClaw、nanobot、Claude Code、Codex、Cursor 等 agent 的自进化技能层。 |
| [kayba-ai/agentic-context-engine](https://github.com/kayba-ai/agentic-context-engine) | 2200 | 框架/framework | 2026-05 | Agentic Context Engine adds a persistent learning loop for agents: it reflects on traces, records strategies in a skillbook and reinjects those strategies into future runs across CLI, browser and LangChain-style agents. |
| [AMAP-ML/SkillClaw](https://github.com/AMAP-ML/SkillClaw) | 1500 | 论文代码/paper-code | 2026-05 | SkillClaw 直接回应“skill 如何自进化”：它从真实 agent 会话中抽取、去重、验证并共享可复用 skills，让单用户和多 agent 团队都能把经验沉淀为演化资产。 |
| [Memento-Teams/Memento-Skills](https://github.com/Memento-Teams/Memento-Skills) | 1400 | 框架/framework | 2026-05 | Memento-Skills 是 deployment-time learning Agent 框架，让 Agent 在冻结模型参数的前提下通过 skill memory、失败反思和技能重写持续进化。 |
| [zylos-ai/zylos-core](https://github.com/zylos-ai/zylos-core) | 1400 | 框架/framework | 2026-05 | Zylos Core 是 self-evolving AI team platform，把专门化 agents、共享记忆、工具市场和交付界面组合成持续改进的团队运行时。 |
| [metauto-ai/gptswarm](https://github.com/metauto-ai/gptswarm) | 998 | 应用/application | 2026-05 | 🐝 The First Self-Improving agents with RL / Prompting Optimization |
| [sentient-agi/EvoSkill](https://github.com/sentient-agi/EvoSkill) | 798 | 框架/framework | 2026-05 | EvoSkill 把失败轨迹转成可复用 agent skills 和 prompt mutations，用 benchmark 驱动 held-out evaluation，使 coding agent 从单 prompt 修订走向完整 agent program evolution。 |
| [aiming-lab/SkillRL](https://github.com/aiming-lab/SkillRL) | 765 | 论文代码/paper-code | 2026-05 | SkillRL 是通过自动技能发现连接经验轨迹和策略改进的论文代码，把成功/失败轨迹压缩成层级技能库，并在 RL 中让技能库与 agent policy 递归共进化。 |
| [adolfousier/opencrabs](https://github.com/adolfousier/opencrabs) | 755 | 应用/application | 2026-05 | OpenCrabs 是受 OpenClaw 启发的单二进制多渠道 AI agent，强调本地 brain files、memory search、custom commands、cron/background jobs 和 self-update 组成的自改进循环。 |
| [QuantaAlpha/QuantaAlpha](https://github.com/QuantaAlpha/QuantaAlpha) | 702 | 论文代码/paper-code | 2026-05 | QuantaAlpha 是面向 repository-level software tasks 的 evolutionary code/repo agent，和 SE-Agent、RepoMaster、GitTaskBench 共同形成真实仓库任务上的自改进链路。 |
| [human-agent-society/coral](https://github.com/Human-Agent-Society/CORAL) | 667 | 框架/framework | 2026-05 | CORAL 是面向 open-ended discovery 的多代理自主演化基础设施，用隔离 git worktrees、共享状态目录、grader daemon、heartbeat prompt 和多 runtime 集成推动 agent teams 连续改进。 |
| [a-evo-lab/a-evolve](https://github.com/a-evo-lab/a-evolve) | 552 | 论文代码/paper-code | 2026-05 | A-Evolve 是通用 self-improving agent 基础设施：给定 base agent、benchmark 和 evolution algorithm，就把 prompt、skills、memory 等 agent workspace 文件作为可变状态进行迭代。 |
| [thudm/webrl](https://github.com/thudm/webrl) | 524 | 应用/application | 2026-05 | Building Open LLM Web Agents with Self-Evolving Online Curriculum RL |
| [ViktorAxelsen/MemSkill](https://github.com/ViktorAxelsen/MemSkill) | 484 | 论文代码/paper-code | 2026-05 | MemSkill 是学习并进化 long-horizon agent 记忆技能的框架，把记忆操作从静态手写规则变成由任务反馈驱动的 meta-memory skill bank。 |
| [ecnu-icalk/autoskill](https://github.com/ecnu-icalk/autoskill) | 424 | 工具/tool | 2026-05 | AutoSkill: Experience-Driven Lifelong Learning via Skill Self-Evolution |
| [china-qijizhifeng/agentic-Harness-engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering) | 391 | 框架/framework | 2026-05 | Agentic Harness Engineering treats prompts, tools, middleware, skills, sub-agents, memory, and evaluator scaffolds as evolvable harness surfaces while the base model stays fixed. |
| [feiliu36/eoh](https://github.com/feiliu36/eoh) | 319 | 应用/application | unknown | Evolution of Heuristics |
| [meituan/EvoCUA](https://github.com/meituan/EvoCUA) | 317 | 论文代码/paper-code | 2026-05 | 美团 EvoCUA 计算机使用 Agent 项目，发布 EvoCUA-32B/8B 并在 OSWorld、WindowsAgentArena 等 GUI 自动化评测上报告结果。 |
| [brain-research/guided-evolutionary-strategies](https://github.com/brain-research/guided-evolutionary-strategies) | 273 | 教程/tutorial | unknown | Guided Evolutionary Strategies |
| [kayba-ai/recursive-improve](https://github.com/kayba-ai/recursive-improve) | 194 | 应用/application | 2026-05 | 🪞 Make your agents recursively self-improve |
| [arvid-pku/godel/agent](https://github.com/arvid-pku/godel/agent) | 182 | 框架/framework | 2026-05 | Gödel Agent: A Self-Referential Agent Framework for Recursive Self-Improvement |
| [xmudeeplit/awesome-self-evolving-agents](https://github.com/xmudeeplit/awesome-self-evolving-agents) | 181 | 工具/tool | 2026-05 | A Survey of Self-Evolving Agents / A curated list of resources (surveys, papers, benchmarks, and opensource projects) on Self-Evolving Agents. |
| [maxnorm8650/medagentsim](https://github.com/maxnorm8650/medagentsim) | 163 | 评测/evaluation | 2026-05 | MedAgentSim: Self-Evolving Multi-Agent Simulations for Realistic Clinical Interactions, MICCAI 2025 (oral and early accepted) |

## Writing Implications

- The paper should describe a funnel, not a flat list: raw captures are the discovery layer, classified rows are the analysis layer, and the 204 model-card projects are the teaching/review layer.
- The strict evolution subset should drive the conceptual argument; the broader subset explains adjacent attention from memory, evaluation, coding agents, prompt optimization, and framework infrastructure.
- The timeline must distinguish repository creation time from latest activity time. Raw `time_slice` is an activity/content timestamp; analyzed project `created_at` comes from GitHub API where available.
- The Git evidence join connects each public project back to raw capture, classification row, public report, GitHub API/cache source, and local mirror status. Missing API data should be treated as an evidence-quality caveat, not as absence of repository activity.
- Unknown timestamps remain a bias source and should be reported rather than hidden.
