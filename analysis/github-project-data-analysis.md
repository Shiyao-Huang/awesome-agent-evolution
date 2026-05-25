# GitHub Project Data Analysis

Generated: 2026-05-25T20:54:54.139Z

## One-Sentence Compression

The project corpus has 510 timestamp-indexed raw GitHub captures, 510 classified repositories, 100 site/paper model-card projects, 80 strict evolution-theme repositories, and 181 broad evolution-related repositories.

## Corpus Funnel

| Layer | Count | Definition |
|---|---:|---|
| Raw GitHub captures | 510 | Records in `output/raw-github-timestamp-index.json`; each points to one `raw-github/*.md` capture. |
| Classified repositories | 510 | Rows in `research/repo-classification.json` with category, theme, stack, and time slice. |
| Analyzed model-card projects | 100 | Repositories in `site/src/data/projects.ts` that receive public project pages and reports. |
| Strict evolution-theme repositories | 80 | Classified rows whose `base_theme` is `evolution`. |
| Broad evolution-related repositories | 181 | Rows matching evolution/self-improvement/reflection/search keywords in repo, description, or evidence fields. |

## Raw Collection Categories

| Category | Count |
|---|---:|
| 框架/framework | 143 |
| 评测/evaluation | 104 |
| 教程/tutorial | 97 |
| 工具/tool | 88 |
| 应用/application | 47 |
| 论文代码/paper-code | 30 |
| 评测/benchmark | 1 |

## Raw Collection Themes

| Theme | Count |
|---|---:|
| memory | 103 |
| evaluation | 93 |
| evolution | 80 |
| skill | 63 |
| framework | 55 |
| education-list | 35 |
| research-agent | 31 |
| prompt-optimization | 26 |
| coding-agent | 17 |
| workflow-automation | 6 |
| safety | 1 |

## Time Slices

| Time slice | Raw classified repos |
|---|---:|
| 2026-05 | 350 |
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
| 2023-09 | [smol-ai/developer](https://github.com/smol-ai/developer) | AI 开发助手 | 最小 Agent → 代码生成 → 迭代 | local_git_first_commit |
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
| 2024-11 | [xlang-ai/OpenAgents](https://github.com/xlang-ai/OpenAgents) | Agent 工具使用 | 工具调用 → 函数选择 → 代码执行 | local_git_first_commit |
| 2025-01 | [TransformerOptimus/SuperAGI](https://github.com/TransformerOptimus/SuperAGI) | 自主 Agent 框架 | 自主 Agent → 工具生态 → 任务执行 | local_git_first_commit |
| 2025-03 | [wuxingyu-ai/LLM4EC](https://github.com/wuxingyu-ai/LLM4EC) | LLM+EC 交叉综述 | 文献综述 | local_git_first_commit |
| 2025-04 | [reworkd/AgentGPT](https://github.com/reworkd/AgentGPT) | 自主 Agent 平台 | 自主循环 → 任务分解 → 执行 → 学习 | local_git_first_commit |
| 2025-05 | [DeepAuto-AI/automl-agent](https://github.com/DeepAuto-AI/automl-agent) | 多 Agent AutoML | 智能体编排 → 进化/搜索循环 → 评估器/打分器 | github_api |
| 2025-05 | [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve) | 进化式代码优化 | 进化/搜索循环 → 评估器/打分器 | github_api |
| 2025-06 | [cheshire-cat-ai/core](https://github.com/cheshire-cat-ai/core) | AI 聊天框架 | 插件式 AI → 模块化 → 可扩展 | local_git_first_commit |
| 2025-07 | [JARVIS-Xs/SE-Agent](https://github.com/JARVIS-Xs/SE-Agent) | 代码智能体自进化 | 进化/搜索循环 → 评估器/打分器 → 智能体编排 | github_api |
| 2025-09 | [beeevita/EvoPrompt](https://github.com/beeevita/EvoPrompt) | 进化式 Prompt 优化 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2025-09 | [stitionai/devika](https://github.com/stitionai/devika) | AI 软件工程师 | 智能体编排 → 反馈-精炼 | local_git_first_commit |
| 2025-10 | [inter-co/science-codeevolve](https://github.com/inter-co/science-codeevolve) | 科学代码进化 | 进化/搜索循环 → 评估器/打分器 | github_api |
| 2025-10 | [CharlesQ9/Self-Evolving-Agents](https://github.com/CharlesQ9/Self-Evolving-Agents) | 自进化 Agent 综述 | 文献综述 | local_git_first_commit |
| 2025-11 | [luo-junyu/Awesome-Agent-Papers](https://github.com/luo-junyu/Awesome-Agent-Papers) | Agent 研究综述 | 论文索引 → LLM Agent 研究追踪 | local_git_first_commit |
| 2025-11 | [modelscope/AgentEvolver](https://github.com/modelscope/AgentEvolver) | Agent 进化框架 | 进化/搜索循环 → 评估器/打分器 → 智能体编排 → 训练/数据循环 | github_api |
| 2025-11 | [web-arena-x/webarena](https://github.com/web-arena-x/webarena) | Agent 评测基准 | Web 环境 → Agent 浏览 → 任务完成评估 | local_git_first_commit |
| 2025-12 | [JarvisPei/SCOPE](https://github.com/JarvisPei/SCOPE) | 上下文/Prompt 进化 | 进化/搜索循环 | github_api |
| 2026-01 | [ai4co/rl4co](https://github.com/ai4co/rl4co) | RL 组合优化基准 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-01 | [ai4co/reevo](https://github.com/ai4co/reevo) | 反射式进化搜索 | 进化/搜索循环 → 反思记忆 → 评估器/打分器 | local_git_first_commit |
| 2026-01 | [yoheinakajima/babyagi](https://github.com/yoheinakajima/babyagi) | 自主 Agent 框架 | 目标 → 任务分解 → 优先级 → 执行 → 学习 | local_git_first_commit |
| 2026-02 | [THUDM/AgentBench](https://github.com/THUDM/AgentBench) | Agent 评测基准 | 评估器/打分器 | local_git_first_commit |
| 2026-02 | [CMA-ES/pycma](https://github.com/CMA-ES/pycma) | 经典进化策略 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-02 | [YoungDubbyDu/LLM-Agent-Optimization](https://github.com/YoungDubbyDu/LLM-Agent-Optimization) | LLM Agent 优化综述 | 文献综述 | local_git_first_commit |
| 2026-03 | [OPPO-Mente-Lab/LLM-Self-Judge](https://github.com/OPPO-Mente-Lab/LLM-Self-Judge) | 自评判训练 | 进化/搜索循环 → 评估器/打分器 → 智能体编排 → 训练/数据循环 | github_api |
| 2026-03 | [facebookresearch/nevergrad](https://github.com/facebookresearch/nevergrad) | 无梯度优化框架 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-03 | [SWE-bench/SWE-bench](https://github.com/SWE-bench/SWE-bench) | Agent 评测基准 | 真实 GitHub Issue → 模型生成 Patch → 评估 | local_git_first_commit |
| 2026-03 | [FeiLiu36/LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) | LLM 驱动算法设计综述 | 文献综述 | local_git_first_commit |
| 2026-03 | [Zesearch/self-improvement-llm](https://github.com/Zesearch/self-improvement-llm) | LLM 自改进综述 | 文献综述 | local_git_first_commit |
| 2026-04 | [DEAP/deap](https://github.com/DEAP/deap) | 经典进化算法框架 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-04 | [ZJU-LLM-Safety/DARWIN](https://github.com/ZJU-LLM-Safety/DARWIN) | 安全策略进化 | 进化/搜索循环 → 反思记忆 | github_api |
| 2026-04 | [Chainlit/chainlit](https://github.com/Chainlit/chainlit) | LLM 聊天框架 | LLM 聊天 UI → 快速构建 → 部署 | local_git_first_commit |
| 2026-05 | [XMUDeepLIT/Awesome-Self-Evolving-Agents](https://github.com/XMUDeepLIT/Awesome-Self-Evolving-Agents) | 自进化 Agent 综述 | 综述索引 → 自进化 Agent 论文集合 | local_git_first_commit |
| 2026-05 | [open-webui/open-webui](https://github.com/open-webui/open-webui) | 自托管 AI 平台 | 自托管 → 多 LLM → RAG → 插件 | local_git_first_commit |
| 2026-05 | [OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev) | 多 Agent 协作框架 | 虚拟公司 → 角色对话链 → 软件开发 | local_git_first_commit |
| 2026-05 | [EvoAgentX/EvoAgentX](https://github.com/EvoAgentX/EvoAgentX) | 自进化 Agent 生态系统 | 进化/搜索循环 → 智能体编排 → 评估器/打分器 → 反馈-精炼 | local_git_first_commit |
| 2026-05 | [icaros-usc/pyribs](https://github.com/icaros-usc/pyribs) | 质量多样性优化 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-05 | [xai-liacs/LLaMEA](https://github.com/XAI-liacs/LLaMEA) | LLM 驱动算法自动发现 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-05 | [e2b-dev/e2b](https://github.com/e2b-dev/e2b) | 代码执行沙箱 | AI 代码 → 安全沙箱 → 隔离执行 | local_git_first_commit |
| 2026-05 | [Genentech/OpenTreeSearch](https://github.com/Genentech/opentreesearch) | LLM 引导代码进化 | 进化/搜索循环 → 评估器/打分器 | local_git_first_commit |
| 2026-05 | [dataelement/bisheng](https://github.com/dataelement/bisheng) | LLM 应用平台 | LLM 应用平台 → 可视化编排 → 知识库 | local_git_first_commit |
| 2026-05 | [InternLM/WildClawBench](https://github.com/InternLM/WildClawBench) | Agent 评测基准 | 真实任务 → 端到端评估 → 无人工干预 | local_git_first_commit |
| 2026-05 | [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 可视化 LLM 平台 | 拖拽 UI → LLM 链 → 可视化编排 | local_git_first_commit |
| 2026-05 | [ai4co/awesome-fm4co](https://github.com/ai4co/awesome-fm4co) | 基础模型+组合优化综述 | 文献综述 | local_git_first_commit |
| 2026-05 | [huggingface/smolagents](https://github.com/huggingface/smolagents) | Agent 框架 | 轻量 Agent → 工具调用 → HuggingFace 集成 | local_git_first_commit |
| 2026-05 | [Agenta-AI/agenta](https://github.com/Agenta-AI/agenta) | LLM 评测平台 | Prompt 管理 → 测试集 → 评估器 → 可观测性 | local_git_first_commit |
| 2026-05 | [langflow-ai/langflow](https://github.com/langflow-ai/langflow) | 可视化 Agent 平台 | 拖拽可视化 → LangChain 组件 → Agent 编排 | local_git_first_commit |
| 2026-05 | [Zijian-Ni/awesome-ai-agents-2026](https://github.com/Zijian-Ni/awesome-ai-agents-2026) | Agent 研究综述 | 2026 Agent 追踪 → 实时更新 | local_git_first_commit |
| 2026-05 | [xlang-ai/OSWorld](https://github.com/xlang-ai/OSWorld) | Agent 评测基准 | 桌面 OS 环境 → Agent 操作 → 任务评估 | local_git_first_commit |
| 2026-05 | [ollama/ollama](https://github.com/ollama/ollama) | LLM 基础设施 | 本地推理 → 模型管理 → API 服务 | local_git_first_commit |
| 2026-05 | [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 自进化 Agent 记忆系统 | 反思记忆 → 智能体编排 | local_git_first_commit |
| 2026-05 | [OpenDevin/OpenDevin](https://github.com/OpenDevin/OpenDevin) | AI 软件开发平台 | 智能体编排 → 反馈-精炼 | local_git_first_commit |
| 2026-05 | [BerriAI/litellm](https://github.com/BerriAI/litellm) | LLM 基础设施 | 统一接口 → 100+ LLM → 代理网关 | local_git_first_commit |
| 2026-05 | [future-agi/future-agi](https://github.com/future-agi/future-agi) | 自改进 Agent | 自改进循环 → 评估 → 迭代优化 | local_git_first_commit |
| 2026-05 | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | Agent CLI Auto-Memory and Skills | session transcripts -> auto-memory mining -> reviewable patches / SKILL.md drafts -> approved durable memory or skill assets | local_git_first_commit |
| 2026-05 | [ag2ai/ag2](https://github.com/ag2ai/ag2) | 多 Agent 协作框架 | 多 Agent 对话 → 编排 → 协作 | local_git_first_commit |
| 2026-05 | [phidatahq/phidata](https://github.com/phidatahq/phidata) | Agent 框架 | Agent → 记忆 + 知识 + 工具 → 执行 | local_git_first_commit |
| 2026-05 | [n8n-io/n8n](https://github.com/n8n-io/n8n) | 工作流自动化 | 可视化工作流 → 节点编排 → AI Agent 节点 | local_git_first_commit |
| 2026-05 | [langgenius/dify](https://github.com/langgenius/dify) | LLM 应用平台 | 可视化工作流 → LLM 编排 → 应用部署 | local_git_first_commit |
| unknown | [agent0ai/agent-zero](https://github.com/agent0ai/agent-zero) | Autonomous Agent Runtime | project workspace -> Linux/tools/browser/memory/skills -> inspectable agent work -> reusable state | github_api_fetch_error |
| unknown | [CodeFuse-ML/awesome-code-llm](https://github.com/CodeFuse-ML/awesome-code-llm) | 代码 LLM 综述 | 文献综述 | github_api_403 |
| unknown | [cxxz/awesome-agent-memory](https://github.com/cxxz/awesome-agent-memory) | Agent Memory Resource Index | memory systems -> tools/patterns/research -> agent memory taxonomy | github_api_fetch_error |
| unknown | [DEEP-PolyU/Awesome-GraphMemory](https://github.com/DEEP-PolyU/Awesome-GraphMemory) | Graph-Based Agent Memory Index | graph memory papers -> techniques/applications -> memory substrate map | github_api_fetch_error |
| unknown | [elizaOS/eliza](https://github.com/elizaOS/eliza) | Autonomous Agent Framework | autonomous-agent framework -> plugins/CLI/web lifecycle -> deployed agent applications | github_api_fetch_error |
| unknown | [Kenotic-Labs/ATANT](https://github.com/Kenotic-Labs/ATANT) | Agent Continuity Evaluation | agent narrative checkpoints -> continuity tests -> self/identity drift evidence | github_api_fetch_error |
| unknown | [MaximeRobeyns/self_improving_coding_agent](https://github.com/MaximeRobeyns/self_improving_coding_agent) | Self-Improving Coding Agent | coding agent -> own-codebase modification -> tests/review signal -> improved next agent iteration | github_api_fetch_error |
| unknown | [mgechev/skillgrade](https://github.com/mgechev/skillgrade) | Agent Skill Evaluation Harness | SKILL.md package -> eval.yaml tasks and graders -> sandboxed agent trials -> pass-rate gate | github_api_fetch_error |
| unknown | [mgechev/skills-best-practices](https://github.com/mgechev/skills-best-practices) | Agent Skill Authoring Methodology | skill need -> trigger-optimized frontmatter -> lean SKILL.md -> references/scripts/assets -> discovery/logic/edge-case validation -> regression-aware skill iteration | github_api_fetch_error |
| unknown | [microsoft/waza](https://github.com/microsoft/waza) | Waza Agent Skill Evaluation CLI | SKILL.md asset -> eval scaffold -> benchmark run -> grader/coverage report -> skill quality gate | github_api_fetch_error |
| unknown | [NirDiamant/Agent_Memory_Techniques](https://github.com/NirDiamant/Agent_Memory_Techniques) | Agent Memory Technique Cookbook | memory need -> 30 runnable techniques -> taxonomy/decision tree -> evaluation and production notebooks | github_api_fetch_error |
| unknown | [open-gitagent/gitagent](https://github.com/open-gitagent/gitagent) | Git-Native Agent Framework | git repository -> agent identity/rules/memory/tools/skills/hooks -> auditable agent runtime | github_api_fetch_error |
| unknown | [paradigmxyz/centaur](https://github.com/paradigmxyz/centaur) | Secure Team Agent Runtime | Slack/API request -> durable control plane -> sandboxed harness -> tools/workflows -> replayable team result | github_api_fetch_error |
| unknown | [paradigmxyz/evmbench](https://github.com/paradigmxyz/evmbench) | Smart Contract Agent Benchmark Harness | contract upload -> sandboxed Codex detect worker -> JSON vulnerability report -> UI/report validation | github_api_fetch_error |
| unknown | [pureples/pureples](https://github.com/pureples/pureples) | GP+LLM 代码进化 | 进化/搜索循环 → 评估器/打分器 | github_api_403 |
| unknown | [razroo/state-trace](https://github.com/razroo/state-trace) | state-trace Agent Memory Engine | agent log step -> typed memory node/edge -> capacity-aware decay -> graph traversal retrieval | github_api_fetch_error |
| unknown | [shareAI-lab/kbench](https://github.com/shareAI-lab/kbench) | Agent Harness Benchmark CLI | benchmark bridge -> kbench CLI -> built-in or custom agent harness -> standardized run artifacts | github_api_fetch_error |
| unknown | [wazionapps/nexo](https://github.com/wazionapps/nexo) | NEXO Agent Memory Runtime | conversation/session traces -> cognitive memory extraction -> semantic/temporal retrieval -> trust/forgetting gates -> proactive context packets | github_api_fetch_error |
| unknown | [webmaxru/Agent-Skills](https://github.com/webmaxru/Agent-Skills) | Reviewed Web API Agent Skills | Web API source material -> skill authoring -> validation/remediation -> install verification | github_api_fetch_error |
| unknown | [zhangfengcdt/memoir](https://github.com/zhangfengcdt/memoir) | Git-like Agent Auto-Memory | agent activity -> hierarchical memory paths -> Git-like commits/branches -> recoverable continuity | github_api_fetch_error |

## Git Evidence Join

This table joins each public model-card project back to raw capture, classification, GitHub API/cache metadata, local mirror evidence when present, and public report output. `github_api_fetch_error` and `github_api_403` are preserved as evidence-quality signals rather than silently replaced.

| Joined evidence channel | Count | Meaning |
|---|---:|---|
| GitHub API/cache metadata | 25 | Projects with verified `github_api` metadata in `analysis/github-created-at-cache.json`. |
| Local git mirror evidence | 77 | Projects whose `localPath` points to a local git clone and can report first/last commit, count, branch, and HEAD. |
| Raw timestamp capture | 47 | Public projects that also appear in `output/raw-github-timestamp-index.json`. |
| Classification row | 47 | Public projects that also appear in `research/repo-classification.json`. |
| Public model-card report | 70 | Public projects with a generated report under `site/public/reports/projects/`. |

| Repo | Raw | Classification | Report | Git source | Created | Pushed | Stars/Forks | Local git mirror |
|---|---|---|---|---|---|---|---:|---|
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | [raw](../raw-github/significant-gravitas_autogpt.md) | framework | [report](../projects/08-autogpt-autonomous-agent.md) | github_api | 2023-03 | 2026-05 | 184482/46225 | 1 commits @ 127a0fa (2026-05 -> 2026-05) |
| [ollama/ollama](https://github.com/ollama/ollama) | - | missing | [report](../research/projects/64-ollama-llm-runtime.md) | github_api_403 | 2026-05 | 2026-05 | 140000/11000 | 1 commits @ 91c8e5e (2026-05 -> 2026-05) |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | - | missing | [report](../research/projects/55-open-webui.md) | github_api_403 | 2026-05 | 2026-05 | 124000/15000 | 1 commits @ 3660bc0 (2026-05 -> 2026-05) |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | [raw](../raw-github/google-gemini_gemini-cli.md) | memory | [report](../projects/214-gemini-cli-auto-memory-skills.md) | github_api_403 | 2026-05 | 2026-05 | 105000/13900 | 1 commits @ ba04e99 (2026-05 -> 2026-05) |
| [langgenius/dify](https://github.com/langgenius/dify) | - | missing | [report](../research/projects/51-dify-ai-platform.md) | github_api_403 | 2026-05 | 2026-05 | 95000/14000 | 1 commits @ 473c945 (2026-05 -> 2026-05) |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | [raw](../raw-github/n8n-io_n8n.md) | workflow-automation | [report](../research/projects/57-n8n-workflow-automation.md) | github_api_403 | 2026-05 | 2026-05 | 75000/8000 | 1 commits @ 51415e14 (2026-05 -> 2026-05) |
| [All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands) | - | missing | [report](../projects/15-openhands-ai-software-dev.md) | github_api | 2024-03 | 2026-05 | 74662/9459 | 1 commits @ 3515cb0 (2026-05 -> 2026-05) |
| [FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT) | - | missing | [report](../projects/07-metagpt-multi-agent-framework.md) | github_api | 2023-06 | 2026-01 | 68239/8695 | 1 commits @ 11cdf46 (2026-01 -> 2026-01) |
| [microsoft/autogen](https://github.com/microsoft/autogen) | - | missing | [report](../projects/11-autogen-multi-agent-conversation.md) | github_api | 2023-08 | 2026-04 | 58330/8807 | 1 commits @ 027ecf0 (2026-04 -> 2026-04) |
| [langflow-ai/langflow](https://github.com/langflow-ai/langflow) | - | missing | [report](../research/projects/58-langflow-visual-agent.md) | github_api_403 | 2026-05 | 2026-05 | 58000/6100 | 1 commits @ 49de16c (2026-05 -> 2026-05) |
| [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | [raw](../raw-github/crewaiinc_crewai.md) | framework | [report](../projects/09-crewai-multi-agent-framework.md) | github_api | 2023-10 | 2026-05 | 52041/7211 | 1 commits @ 179c20b (2026-05 -> 2026-05) |
| [OpenDevin/OpenDevin](https://github.com/OpenDevin/OpenDevin) | - | missing | [report](../projects/41-opendevin-ai-software.md) | github_api_403 | 2026-05 | 2026-01 | 50000/6000 | 1 commits @ 3515cb0 (2026-05 -> 2026-05) |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | - | missing | [report](../research/projects/65-flowise-visual-llm.md) | github_api_403 | 2026-05 | 2026-05 | 36000/4500 | 1 commits @ b7a2005 (2026-05 -> 2026-05) |
| [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | [raw](../raw-github/stanfordnlp_dspy.md) | prompt-optimization | [report](../projects/10-dspy-declarative-llm-programming.md) | github_api | 2023-01 | 2026-05 | 34604/2918 | 1 commits @ 6fb3f96 (2026-05 -> 2026-05) |
| [reworkd/AgentGPT](https://github.com/reworkd/AgentGPT) | - | missing | [report](../research/projects/52-agentgpt-autonomous.md) | github_api_403 | 2025-04 | 2025-08 | 33000/9100 | 1 commits @ 18b073a (2025-04 -> 2025-04) |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | [raw](../raw-github/langchain-ai_langgraph.md) | framework | [report](../projects/13-langgraph-agent-workflows.md) | github_api | 2023-08 | 2026-05 | 32784/5544 | 1 commits @ 82b3872 (2026-05 -> 2026-05) |
| [OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev) | - | missing | [report](../research/projects/46-chatdev-multi-agent-platform.md) | github_api_403 | 2026-05 | 2026-01 | 26000/3200 | 1 commits @ b23950d (2026-05 -> 2026-05) |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | - | missing | [report](../research/projects/63-litellm-gateway.md) | github_api_403 | 2026-05 | 2026-05 | 22000/2800 | 1 commits @ d04373f (2026-05 -> 2026-05) |
| [stitionai/devika](https://github.com/stitionai/devika) | - | missing | [report](../projects/16-devika-ai-software-engineer.md) | github_api_403 | 2025-09 | 2025-01 | 22000/3000 | 1 commits @ 80bb343 (2025-09 -> 2025-09) |
| [yoheinakajima/babyagi](https://github.com/yoheinakajima/babyagi) | - | missing | [report](../research/projects/66-babyagi-task-agent.md) | github_api_403 | 2026-01 | 2024-06 | 21000/2900 | 1 commits @ fa8930e (2026-01 -> 2026-01) |
| [princeton-nlp/SWE-agent](https://github.com/princeton-nlp/SWE-agent) | - | missing | [report](../projects/14-swe-agent-software-engineering.md) | github_api | 2024-04 | 2026-05 | 19280/2093 | 1 commits @ 0f4f3bb (2026-03 -> 2026-03) |
| [phidatahq/phidata](https://github.com/phidatahq/phidata) | - | missing | [report](../research/projects/49-phidata-framework.md) | github_api_403 | 2026-05 | 2026-05 | 18000/2200 | 1 commits @ dfb9298 (2026-05 -> 2026-05) |
| [agent0ai/agent-zero](https://github.com/agent0ai/agent-zero) | [raw](../raw-github/agent0ai_agent-zero.md) | framework | [report](../projects/225-agent-zero-runtime.md) | github_api_fetch_error | unknown | 2026-05 | 17600/3600 | - |
| [elizaOS/eliza](https://github.com/elizaOS/eliza) | [raw](../raw-github/elizaos_eliza.md) | framework | [report](../projects/226-elizaos-autonomous-agent-framework.md) | github_api_fetch_error | unknown | 2026-05 | 17300/5400 | - |
| [camel-ai/camel](https://github.com/camel-ai/camel) | - | missing | [report](../projects/12-camel-ai-communicative-agents.md) | github_api | 2023-03 | 2026-05 | 17025/1910 | 1 commits @ 1d38051 (2026-05 -> 2026-05) |
| [TransformerOptimus/SuperAGI](https://github.com/TransformerOptimus/SuperAGI) | [raw](../raw-github/transformeroptimus_superagi.md) | framework | [report](../research/projects/48-superagi-platform.md) | github_api_403 | 2025-01 | 2025-03 | 16000/1900 | 1 commits @ c3c1982 (2025-01 -> 2025-01) |
| [huggingface/smolagents](https://github.com/huggingface/smolagents) | [raw](../raw-github/huggingface_smolagents.md) | evaluation | [report](../research/projects/68-smolagents-huggingface.md) | github_api_403 | 2026-05 | 2026-05 | 15000/1300 | 1 commits @ 3cd5c84 (2026-05 -> 2026-05) |
| [smol-ai/developer](https://github.com/smol-ai/developer) | - | missing | [report](../research/projects/50-smol-developer.md) | github_api_403 | 2023-09 | 2025-06 | 14000/1600 | 1 commits @ a6747d1 (2023-09 -> 2023-09) |
| [Chainlit/chainlit](https://github.com/Chainlit/chainlit) | - | missing | [report](../research/projects/70-chainlit-llm-chat.md) | github_api_403 | 2026-04 | 2026-05 | 10000/1200 | 1 commits @ 488b745 (2026-04 -> 2026-04) |
| [Agenta-AI/agenta](https://github.com/Agenta-AI/agenta) | - | missing | [report](../research/projects/53-agenta-evaluation.md) | github_api_403 | 2026-05 | 2026-05 | 8000/850 | 1 commits @ 5eef689 (2026-05 -> 2026-05) |
| [dataelement/bisheng](https://github.com/dataelement/bisheng) | - | missing | [report](../research/projects/69-bisheng-llm-platform.md) | github_api_403 | 2026-05 | 2026-05 | 8000/1300 | 1 commits @ 9eb9328 (2026-05 -> 2026-05) |
| [automl/auto-sklearn](https://github.com/automl/auto-sklearn) | - | missing | [report](../projects/31-autosklearn-automl.md) | github_api_403 | 2023-04 | 2025-01 | 7500/1000 | 1 commits @ 6732112 (2023-04 -> 2023-04) |
| [e2b-dev/e2b](https://github.com/e2b-dev/e2b) | - | missing | [report](../research/projects/54-e2b-sandbox.md) | github_api_403 | 2026-05 | 2026-05 | 7000/450 | 1 commits @ b355e7c (2026-05 -> 2026-05) |
| [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve) | [raw](../raw-github/algorithmicsuperintelligence_openevolve.md) | evolution | [report](../projects/algorithmicsuperintelligence__openevolve.md) | github_api | 2025-05 | 2026-03 | 6377/1019 | 1 commits @ 80945ed (2026-03 -> 2026-03) |
| [DEAP/deap](https://github.com/DEAP/deap) | - | missing | [report](../projects/29-deap-evolutionary-framework.md) | github_api_403 | 2026-04 | 2025-01 | 6000/1200 | 1 commits @ 8a96fd3 (2026-04 -> 2026-04) |
| [aiwaves-cn/agents](https://github.com/aiwaves-cn/agents) | [raw](../raw-github/aiwaves-cn_agents.md) | evolution | [report](../projects/aiwaves_cn__agents.md) | github_api | 2023-07 | 2024-09 | 5928/482 | 1 commits @ e8c4e3c (2024-09 -> 2024-09) |
| [ag2ai/ag2](https://github.com/ag2ai/ag2) | - | missing | [report](../research/projects/45-ag2-multi-agent.md) | github_api_403 | 2026-05 | 2026-05 | 5200/680 | 1 commits @ f50307a (2026-05 -> 2026-05) |
| [future-agi/future-agi](https://github.com/future-agi/future-agi) | - | missing | [report](../research/projects/43-future-agi-self-improving.md) | github_api_403 | 2026-05 | 2025-06 | 5200/420 | 1 commits @ 0f5ed34 (2026-05 -> 2026-05) |
| [OpenBMB/AgentVerse](https://github.com/OpenBMB/AgentVerse) | - | missing | [report](../projects/17-agentverse-multi-agent-platform.md) | github_api_403 | 2024-09 | 2025-01 | 5000/500 | 1 commits @ f90c4bd (2024-09 -> 2024-09) |
| [xlang-ai/OpenAgents](https://github.com/xlang-ai/OpenAgents) | - | missing | [report](../research/projects/47-openagents-platform.md) | github_api_403 | 2024-11 | 2025-08 | 4200/410 | 1 commits @ ff2e464 (2024-11 -> 2024-11) |
| [facebookresearch/nevergrad](https://github.com/facebookresearch/nevergrad) | - | missing | [report](../projects/28-nevergrad-derivative-free.md) | github_api_403 | 2026-03 | 2025-01 | 4000/400 | 1 commits @ 617a3b0 (2026-03 -> 2026-03) |
| [XMUDeepLIT/Awesome-Self-Evolving-Agents](https://github.com/XMUDeepLIT/Awesome-Self-Evolving-Agents) | [raw](../raw-github/xmudeeplit_awesome-self-evolving-agents.md) | evolution | [report](../research/projects/44-xmu-self-evolving-agents.md) | github_api_403 | 2026-05 | 2026-01 | 3800/280 | 1 commits @ 5081d19 (2026-05 -> 2026-05) |
| [cheshire-cat-ai/core](https://github.com/cheshire-cat-ai/core) | - | missing | [report](../research/projects/67-cheshire-cat-ai-framework.md) | github_api_403 | 2025-06 | 2026-05 | 3200/380 | 1 commits @ f8025c9 (2025-06 -> 2025-06) |
| [noahshinn/reflexion](https://github.com/noahshinn/reflexion) | [raw](../raw-github/noahshinn_reflexion.md) | memory | [report](../projects/noahshinn__reflexion.md) | github_api | 2023-03 | 2025-01 | 3159/306 | 1 commits @ 218cf0e (2025-01 -> 2025-01) |
| [THUDM/AgentBench](https://github.com/THUDM/AgentBench) | - | missing | [report](../projects/38-agentbench.md) | github_api_403 | 2026-02 | 2025-01 | 3000/300 | 1 commits @ d1e4a10 (2026-02 -> 2026-02) |
| [SWE-bench/SWE-bench](https://github.com/SWE-bench/SWE-bench) | [raw](../raw-github/swe-bench_swe-bench.md) | evaluation | [report](../research/projects/60-swe-bench-evaluation.md) | github_api_403 | 2026-03 | 2026-04 | 2800/420 | 1 commits @ f7bbbb2 (2026-03 -> 2026-03) |
| [web-arena-x/webarena](https://github.com/web-arena-x/webarena) | - | missing | [report](../research/projects/62-webarena-web-evaluation.md) | github_api_403 | 2025-11 | 2025-10 | 2800/260 | 1 commits @ dce0468 (2025-11 -> 2025-11) |
| [xlang-ai/OSWorld](https://github.com/xlang-ai/OSWorld) | [raw](../raw-github/xlang-ai_osworld.md) | evaluation | [report](../research/projects/61-osworld-agent-evaluation.md) | github_api_fetch_error | 2026-05 | 2025-12 | 2200/180 | 1 commits @ 705623c (2026-05 -> 2026-05) |
| [CodeFuse-ML/awesome-code-llm](https://github.com/CodeFuse-ML/awesome-code-llm) | - | missing | [report](../projects/37-awesome-code-llm.md) | github_api_403 | unknown | 2026-01 | 2000/150 | - |
| [mgechev/skills-best-practices](https://github.com/mgechev/skills-best-practices) | [raw](../raw-github/mgechev_skills-best-practices.md) | skill | [report](../projects/223-skills-best-practices-agent-skill-authoring.md) | github_api_fetch_error | unknown | 2026-05 | 1900/131 | - |
| [shengranhu/adas](https://github.com/ShengranHu/ADAS) | - | missing | [report](../projects/03-adas-automated-design-agentic-systems.md) | github_api | 2024-07 | 2025-01 | 1581/236 | 1 commits @ 2702bee (2025-01 -> 2025-01) |
| [modelscope/AgentEvolver](https://github.com/modelscope/AgentEvolver) | [raw](../raw-github/modelscope_agentevolver.md) | evolution | [report](../projects/modelscope__agentevolver.md) | github_api | 2025-11 | 2026-04 | 1440/167 | 1 commits @ a5a8db8 (2026-03 -> 2026-03) |
| [ai4co/rl4co](https://github.com/ai4co/rl4co) | - | missing | [report](../projects/39-rl4co-reinforcement-learning.md) | github_api_403 | 2026-01 | 2025-01 | 1200/150 | 1 commits @ 7a15396 (2026-01 -> 2026-01) |
| [luo-junyu/Awesome-Agent-Papers](https://github.com/luo-junyu/Awesome-Agent-Papers) | [raw](../raw-github/luo-junyu_awesome-agent-papers.md) | education-list | [report](../research/projects/59-awesome-agent-papers.md) | github_api_403 | 2025-11 | 2026-03 | 1200/100 | 1 commits @ 55afd29 (2025-11 -> 2025-11) |
| [xai-liacs/LLaMEA](https://github.com/XAI-liacs/LLaMEA) | [raw](../raw-github/xai-liacs_llamea.md) | evaluation | [report](../projects/19-llamea-llm-evolutionary-algorithm.md) | github_api_403 | 2026-05 | 2025-01 | 1200/100 | 1 commits @ 8e4833e (2026-05 -> 2026-05) |
| [google-deepmind/funsearch](https://github.com/google-deepmind/funsearch) | - | missing | [report](../projects/04-funsearch-mathematical-discoveries.md) | github_api | 2023-11 | 2024-02 | 1065/177 | 1 commits @ cc53f27 (2024-02 -> 2024-02) |
| [CMA-ES/pycma](https://github.com/CMA-ES/pycma) | - | missing | [report](../projects/30-pycma-cma-es.md) | github_api_403 | 2026-02 | 2025-01 | 1000/250 | 1 commits @ 83089d1 (2026-02 -> 2026-02) |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | [raw](../raw-github/evermind-ai_everos.md) | evaluation | [report](../projects/23-everos-self-evolving-agents.md) | github_api_403 | 2026-05 | 2026-01 | 1000/100 | 1 commits @ e37205f (2026-05 -> 2026-05) |
| [EvoAgentX/EvoAgentX](https://github.com/EvoAgentX/EvoAgentX) | [raw](../raw-github/evoagentx_evoagentx.md) | evolution | [report](../projects/22-evoagentx-agent-evolution-framework.md) | github_api_403 | 2026-05 | 2026-01 | 1000/100 | 1 commits @ f542ce4 (2026-05 -> 2026-05) |
| [microsoft/waza](https://github.com/microsoft/waza) | [raw](../raw-github/microsoft_waza.md) | skill | [report](../projects/217-waza-agent-skill-evaluation-cli.md) | github_api_fetch_error | unknown | 2026-05 | 904/49 | - |
| [madaan/self-refine](https://github.com/madaan/self-refine) | [raw](../raw-github/madaan_self-refine.md) | prompt-optimization | [report](../projects/madaan__self_refine.md) | github_api | 2023-03 | 2024-10 | 805/70 | 1 commits @ 9a206d4 (2024-10 -> 2024-10) |
| [icaros-usc/pyribs](https://github.com/icaros-usc/pyribs) | - | missing | [report](../projects/25-pyribs-quality-diversity.md) | github_api_403 | 2026-05 | 2025-01 | 800/80 | 1 commits @ 91479af (2026-05 -> 2026-05) |
| [Zijian-Ni/awesome-ai-agents-2026](https://github.com/Zijian-Ni/awesome-ai-agents-2026) | [raw](../raw-github/zijian-ni_awesome-ai-agents-2026.md) | education-list | [report](../research/projects/72-awesome-ai-agents-2026.md) | github_api_403 | 2026-05 | 2026-05 | 800/80 | 1 commits @ 6819d0b (2026-05 -> 2026-05) |
| [google-deepmind/opro](https://github.com/google-deepmind/opro) | - | missing | [report](../projects/01-opro-llm-as-optimizer.md) | github_api | 2023-10 | 2024-12 | 746/91 | 1 commits @ a76bdce (2024-12 -> 2024-12) |
| [carperai/openelm](https://github.com/carperai/openelm) | - | missing | [report](../projects/02-openelm-evolution-large-models.md) | github_api | 2022-09 | 2023-11 | 739/90 | 1 commits @ c844e14 (2023-10 -> 2023-10) |
| [zhangfengcdt/memoir](https://github.com/zhangfengcdt/memoir) | [raw](../raw-github/zhangfengcdt_memoir.md) | memory | [report](../projects/210-memoir-agent-auto-memory.md) | github_api_fetch_error | unknown | 2026-05 | 549/35 | - |
| [ai4co/awesome-fm4co](https://github.com/ai4co/awesome-fm4co) | [raw](../raw-github/ai4co_awesome-fm4co.md) | education-list | [report](../projects/40-awesome-fm4co.md) | github_api_403 | 2026-05 | 2026-01 | 500/50 | 1 commits @ 5e4c333 (2026-05 -> 2026-05) |
| [ai4co/reevo](https://github.com/ai4co/reevo) | - | missing | [report](../projects/18-reevo-reflective-evolution.md) | github_api_403 | 2026-01 | 2025-01 | 500/50 | 1 commits @ 6dce182 (2026-01 -> 2026-01) |
| [InternLM/WildClawBench](https://github.com/InternLM/WildClawBench) | - | missing | [report](../research/projects/71-wildclawbench-agent-benchmark.md) | github_api_403 | 2026-05 | 2026-02 | 500/50 | 1 commits @ 86d7144 (2026-05 -> 2026-05) |
| [YoungDubbyDu/LLM-Agent-Optimization](https://github.com/YoungDubbyDu/LLM-Agent-Optimization) | [raw](../raw-github/youngdubbydu_llm-agent-optimization.md) | education-list | [report](../projects/36-llm-agent-optimization.md) | github_api_403 | 2026-02 | 2026-01 | 500/50 | 1 commits @ 662b5b5 (2026-02 -> 2026-02) |
| [mgechev/skillgrade](https://github.com/mgechev/skillgrade) | [raw](../raw-github/mgechev_skillgrade.md) | evaluation | [report](../projects/215-skillgrade-agent-skill-evaluation.md) | github_api_fetch_error | unknown | 2026-05 | 490/35 | - |
| [paradigmxyz/centaur](https://github.com/paradigmxyz/centaur) | [raw](../raw-github/paradigmxyz_centaur.md) | framework | [report](../projects/227-centaur-secure-team-agent-runtime.md) | github_api_fetch_error | unknown | 2026-05 | 469/55 | - |
| [paradigmxyz/evmbench](https://github.com/paradigmxyz/evmbench) | [raw](../raw-github/paradigmxyz_evmbench.md) | evaluation | [report](../projects/222-evmbench-smart-contract-agent-harness.md) | github_api_fetch_error | unknown | 2026-05 | 421/62 | - |
| [NirDiamant/Agent_Memory_Techniques](https://github.com/NirDiamant/Agent_Memory_Techniques) | [raw](../raw-github/nirdiamant_agent_memory_techniques.md) | memory | [report](../projects/220-agent-memory-techniques.md) | github_api_fetch_error | unknown | 2026-05 | 412/58 | - |
| [open-gitagent/gitagent](https://github.com/open-gitagent/gitagent) | [raw](../raw-github/open-gitagent_gitagent.md) | framework | [report](../projects/213-gitagent-git-native-agent-framework.md) | github_api_fetch_error | unknown | 2026-05 | 404/82 | - |
| [FeiLiu36/LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) | [raw](../raw-github/feiliu36_llm4opt.md) | research-agent | [report](../projects/27-llm4opt-llm-optimization.md) | github_api_403 | 2026-03 | 2025-01 | 400/40 | 1 commits @ a198a9c (2026-03 -> 2026-03) |
| [MaximeRobeyns/self_improving_coding_agent](https://github.com/MaximeRobeyns/self_improving_coding_agent) | [raw](../raw-github/maximerobeyns_self_improving_coding_agent.md) | evolution | [report](../projects/224-sica-self-improving-coding-agent.md) | github_api_fetch_error | unknown | 2026-05 | 324/56 | - |
| [beeevita/EvoPrompt](https://github.com/beeevita/EvoPrompt) | [raw](../raw-github/beeevita_evoprompt.md) | prompt-optimization | [report](../projects/20-evoprompt-prompt-optimization.md) | github_api_403 | 2025-09 | 2024-01 | 300/30 | 1 commits @ 94caff3 (2025-09 -> 2025-09) |
| [CharlesQ9/Self-Evolving-Agents](https://github.com/CharlesQ9/Self-Evolving-Agents) | [raw](../raw-github/charlesq9_self-evolving-agents.md) | evolution | [report](../projects/32-self-evolving-agents-survey.md) | github_api_403 | 2025-10 | 2025-01 | 300/30 | 1 commits @ c017544 (2025-10 -> 2025-10) |
| [xiaofangxd/LLM_EA](https://github.com/xiaofangxd/LLM_EA) | - | missing | [report](../projects/34-llm-ea-survey.md) | github_api_403 | 2024-11 | 2024-01 | 300/30 | 1 commits @ fbaa79f (2024-11 -> 2024-11) |
| [JARVIS-Xs/SE-Agent](https://github.com/JARVIS-Xs/SE-Agent) | [raw](../raw-github/jarvis-xs_se-agent.md) | evaluation | [report](../projects/jarvis_xs__se_agent.md) | github_api | 2025-07 | 2025-09 | 274/29 | 1 commits @ c188ce1 (2025-09 -> 2025-09) |
| [DEEP-PolyU/Awesome-GraphMemory](https://github.com/DEEP-PolyU/Awesome-GraphMemory) | [raw](../raw-github/deep-polyu_awesome-graphmemory.md) | memory | [report](../projects/211-awesome-graphmemory.md) | github_api_fetch_error | unknown | 2026-05 | 273/15 | - |
| [Genentech/OpenTreeSearch](https://github.com/Genentech/opentreesearch) | - | missing | [report](../projects/24-opentreesearch-llm-code-evolution.md) | github_api_403 | 2026-05 | 2026-01 | 200/20 | 1 commits @ 0c8b452 (2026-05 -> 2026-05) |
| [siyuyuan/evoagent](https://github.com/siyuyuan/evoagent) | - | missing | [report](../projects/21-evoagent-evolutionary-multi-agent.md) | github_api_403 | 2024-10 | 2025-01 | 200/20 | 1 commits @ fc6d087 (2024-10 -> 2024-10) |
| [wuxingyu-ai/LLM4EC](https://github.com/wuxingyu-ai/LLM4EC) | [raw](../raw-github/wuxingyu-ai_llm4ec.md) | evolution | [report](../projects/26-llm4ec-llm-evolutionary-computation.md) | github_api_403 | 2025-03 | 2025-01 | 200/20 | 1 commits @ a6ef587 (2025-03 -> 2025-03) |
| [Zesearch/self-improvement-llm](https://github.com/Zesearch/self-improvement-llm) | [raw](../raw-github/zesearch_self-improvement-llm.md) | evolution | [report](../projects/33-self-improvement-llm.md) | github_api_403 | 2026-03 | 2026-01 | 200/20 | 1 commits @ 45c630c (2026-03 -> 2026-03) |
| [DeepAuto-AI/automl-agent](https://github.com/DeepAuto-AI/automl-agent) | - | missing | [report](../projects/05-automl-agent-multi-agent.md) | github_api | 2025-05 | 2025-07 | 136/21 | 1 commits @ 9e0d842 (2025-07 -> 2025-07) |
| [microsoft/CoML](https://github.com/microsoft/CoML) | - | missing | [report](../projects/06-coml-mlcopilot.md) | github_api | 2023-04 | 2024-10 | 100/16 | 1 commits @ 46f7452 (2024-10 -> 2024-10) |
| [pureples/pureples](https://github.com/pureples/pureples) | - | missing | [report](../projects/42-gp-llm-code-evolution.md) | github_api_403 | unknown | 2025-01 | 100/20 | - |
| [inter-co/science-codeevolve](https://github.com/inter-co/science-codeevolve) | - | missing | [report](../projects/inter_co__science_codeevolve.md) | github_api | 2025-10 | 2026-04 | 98/14 | 1 commits @ c077959 (2026-04 -> 2026-04) |
| [JarvisPei/SCOPE](https://github.com/JarvisPei/SCOPE) | - | missing | [report](../projects/jarvispei__scope.md) | github_api | 2025-12 | 2026-03 | 77/6 | - |
| [alfa-group/tutorial_gp_llm](https://github.com/alfa-group/tutorial_gp_llm) | - | missing | [report](../projects/35-tutorial-gp-llm.md) | github_api_403 | 2024-08 | 2024-01 | 50/10 | 1 commits @ e3b3c52 (2024-08 -> 2024-08) |
| [OPPO-Mente-Lab/LLM-Self-Judge](https://github.com/OPPO-Mente-Lab/LLM-Self-Judge) | - | missing | [report](../projects/oppo_mente_lab__llm_self_judge.md) | github_api | 2026-03 | 2026-03 | 43/1 | - |
| [ZJU-LLM-Safety/DARWIN](https://github.com/ZJU-LLM-Safety/DARWIN) | - | missing | [report](../projects/zju_llm_safety__darwin.md) | github_api | 2026-04 | 2026-05 | 41/4 | - |
| [webmaxru/Agent-Skills](https://github.com/webmaxru/Agent-Skills) | [raw](../raw-github/webmaxru_agent-skills.md) | skill | [report](../projects/216-webmaxru-agent-skills.md) | github_api_fetch_error | unknown | 2026-05 | 29/2 | - |
| [wazionapps/nexo](https://github.com/wazionapps/nexo) | [raw](../raw-github/wazionapps_nexo.md) | memory | [report](../projects/218-nexo-agent-memory-runtime.md) | github_api_fetch_error | unknown | 2026-05 | 22/9 | - |
| [cxxz/awesome-agent-memory](https://github.com/cxxz/awesome-agent-memory) | [raw](../raw-github/cxxz_awesome-agent-memory.md) | memory | [report](../projects/209-cxxz-awesome-agent-memory.md) | github_api_fetch_error | unknown | 2026-05 | 10/3 | - |
| [shareAI-lab/kbench](https://github.com/shareAI-lab/kbench) | [raw](../raw-github/shareai-lab_kbench.md) | evaluation | [report](../projects/221-kbench-agent-harness-benchmark-cli.md) | github_api_fetch_error | unknown | 2026-05 | 10/1 | - |
| [Kenotic-Labs/ATANT](https://github.com/Kenotic-Labs/ATANT) | [raw](../raw-github/kenotic-labs_atant.md) | evaluation | [report](../projects/212-atant-agent-continuity-eval.md) | github_api_fetch_error | unknown | 2026-05 | 3/0 | - |
| [razroo/state-trace](https://github.com/razroo/state-trace) | [raw](../raw-github/razroo_state-trace.md) | memory | [report](../projects/219-state-trace-agent-memory-engine.md) | github_api_fetch_error | unknown | 2026-05 | 1/0 | - |

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
| [MaximeRobeyns/self_improving_coding_agent](https://github.com/MaximeRobeyns/self_improving_coding_agent) | 324 | 论文代码/paper-code | 2026-05 | SICA is a self-improving coding agent framework whose improvement target is the coding agent codebase itself. |
| [feiliu36/eoh](https://github.com/feiliu36/eoh) | 319 | 应用/application | unknown | Evolution of Heuristics |
| [meituan/EvoCUA](https://github.com/meituan/EvoCUA) | 317 | 论文代码/paper-code | 2026-05 | 美团 EvoCUA 计算机使用 Agent 项目，发布 EvoCUA-32B/8B 并在 OSWorld、WindowsAgentArena 等 GUI 自动化评测上报告结果。 |
| [brain-research/guided-evolutionary-strategies](https://github.com/brain-research/guided-evolutionary-strategies) | 273 | 教程/tutorial | unknown | Guided Evolutionary Strategies |
| [kayba-ai/recursive-improve](https://github.com/kayba-ai/recursive-improve) | 194 | 应用/application | 2026-05 | 🪞 Make your agents recursively self-improve |
| [arvid-pku/godel/agent](https://github.com/arvid-pku/godel/agent) | 182 | 框架/framework | 2026-05 | Gödel Agent: A Self-Referential Agent Framework for Recursive Self-Improvement |
| [xmudeeplit/awesome-self-evolving-agents](https://github.com/xmudeeplit/awesome-self-evolving-agents) | 181 | 工具/tool | 2026-05 | A Survey of Self-Evolving Agents / A curated list of resources (surveys, papers, benchmarks, and opensource projects) on Self-Evolving Agents. |

## Writing Implications

- The paper should describe a funnel, not a flat list: raw captures are the discovery layer, classified rows are the analysis layer, and the 100 model-card projects are the teaching/review layer.
- The strict evolution subset should drive the conceptual argument; the broader subset explains adjacent attention from memory, evaluation, coding agents, prompt optimization, and framework infrastructure.
- The timeline must distinguish repository creation time from latest activity time. Raw `time_slice` is an activity/content timestamp; analyzed project `created_at` comes from GitHub API where available.
- The Git evidence join connects each public project back to raw capture, classification row, public report, GitHub API/cache source, and local mirror status. Missing API data should be treated as an evidence-quality caveat, not as absence of repository activity.
- Unknown timestamps remain a bias source and should be reported rather than hidden.
