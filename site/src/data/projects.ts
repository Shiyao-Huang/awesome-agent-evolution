export type Project = {
  name: string;
  repo: string;
  url: string;
  description: string;
  stack: string[];
  category: string;
  status: 'placeholder' | 'candidate' | 'verified';
  stars: number;
  forks: string | number;
  lastPushed: string;
  language: string;
  license: string;
  report: string;
  pattern: string;
  tags: string[];
  localPath?: string;
};

// ── EC + LLM 核心项目 (01-04) ──
// ── Agent 框架项目 (05-09, built by Builder-1) ──
// ── Agent 框架项目 (10-17, built by Builder-4) ──

export const projects: Project[] = [
    {
        "name": "openevolve",
        "repo": "algorithmicsuperintelligence/openevolve",
        "url": "https://github.com/algorithmicsuperintelligence/openevolve",
        "stars": 6358,
        "forks": "1018",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/algorithmicsuperintelligence__openevolve.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "开源 AlphaEvolve 风格的进化式编码智能体，使用 LLM 生成程序变体、评估打分并选择高分候选持续迭代。",
        "stack": [
            "Python",
            "OpenAI 兼容 API",
            "PyTorch",
            "pytest"
        ],
        "category": "进化式代码优化",
        "lastPushed": "2026-03-18T12:25:39Z",
        "localPath": "repos/algorithmicsuperintelligence__openevolve",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器"
        ]
    },
    {
        "name": "agents",
        "repo": "aiwaves-cn/agents",
        "url": "https://github.com/aiwaves-cn/agents",
        "stars": 5928,
        "forks": "482",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/aiwaves_cn__agents.md",
        "pattern": "进化/搜索循环 → 评估器/打分器 → 智能体编排",
        "description": "数据中心化的自进化语言智能体框架，强调用数据、环境反馈和智能体编排让 Agent 在任务中持续改进。",
        "stack": [
            "Python",
            "OpenAI 兼容 API",
            "PyTorch",
            "Transformers",
            "LangChain"
        ],
        "category": "数据驱动 Agent 进化",
        "lastPushed": "2024-09-26T03:12:53Z",
        "localPath": "repos/aiwaves_cn__agents",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器",
            "智能体编排"
        ]
    },
    {
        "name": "reflexion",
        "repo": "noahshinn/reflexion",
        "url": "https://github.com/noahshinn/reflexion",
        "stars": 3158,
        "forks": "306",
        "language": "Python",
        "license": "MIT",
        "report": "projects/noahshinn__reflexion.md",
        "pattern": "进化/搜索循环 → 反思记忆 → 反馈-精炼 → 评估器/打分器 → 训练/数据循环",
        "description": "Reflexion 经典实现，使用语言反思作为“ verbal reinforcement ”，把失败经验写入记忆以改进后续行为。",
        "stack": [
            "Python",
            "OpenAI 兼容 API",
            "PyTorch",
            "Transformers",
            "LangChain"
        ],
        "category": "反思记忆",
        "lastPushed": "2025-01-14T07:54:02Z",
        "localPath": "repos/noahshinn__reflexion",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "反思记忆",
            "反馈-精炼",
            "评估器/打分器",
            "训练/数据循环"
        ]
    },
    {
        "name": "AgentEvolver",
        "repo": "modelscope/AgentEvolver",
        "url": "https://github.com/modelscope/AgentEvolver",
        "stars": 1441,
        "forks": "167",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/modelscope__agentevolver.md",
        "pattern": "进化/搜索循环 → 评估器/打分器 → 智能体编排 → 训练/数据循环",
        "description": "面向高效自进化智能体系统的研究实现，核心关注轨迹、经验和评估反馈驱动的 Agent 能力提升。",
        "stack": [
            "Python",
            "FastAPI"
        ],
        "category": "Agent 进化框架",
        "lastPushed": "2026-04-01T08:47:19Z",
        "localPath": "repos/modelscope__agentevolver",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器",
            "智能体编排",
            "训练/数据循环"
        ]
    },
    {
        "name": "self-refine",
        "repo": "madaan/self-refine",
        "url": "https://github.com/madaan/self-refine",
        "stars": 805,
        "forks": "70",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/madaan__self_refine.md",
        "pattern": "反馈-精炼",
        "description": "Self-Refine 经典实现，用同一个 LLM 生成初稿、生成反馈、再根据反馈迭代精炼，无需训练或强化学习。",
        "stack": [
            "Python"
        ],
        "category": "反馈精炼",
        "lastPushed": "2024-10-04T21:06:28Z",
        "localPath": "repos/madaan__self_refine",
        "status": "verified",
        "tags": [
            "反馈-精炼"
        ]
    },
    {
        "name": "SE-Agent",
        "repo": "JARVIS-Xs/SE-Agent",
        "url": "https://github.com/JARVIS-Xs/SE-Agent",
        "stars": 274,
        "forks": "29",
        "language": "Python",
        "license": "MIT",
        "report": "projects/jarvis_xs__se_agent.md",
        "pattern": "进化/搜索循环 → 评估器/打分器 → 智能体编排",
        "description": "面向代码智能体的自进化框架，通过 Revision、Recombination、Refinement 在多条推理轨迹间交换信息，扩大搜索空间。",
        "stack": [
            "Python"
        ],
        "category": "代码智能体自进化",
        "lastPushed": "2025-09-23T01:32:14Z",
        "localPath": "repos/jarvis_xs__se_agent",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器",
            "智能体编排"
        ]
    },
    {
        "name": "science-codeevolve",
        "repo": "inter-co/science-codeevolve",
        "url": "https://github.com/inter-co/science-codeevolve",
        "stars": 97,
        "forks": "14",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/inter_co__science_codeevolve.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "面向科学与算法发现的 CodeEvolve 实现，将 LLM 与遗传算法、岛屿模型、交叉/变异等机制结合。",
        "stack": [
            "Python",
            "OpenAI 兼容 API",
            "PyTorch",
            "pytest"
        ],
        "category": "科学代码进化",
        "lastPushed": "2026-04-08T14:38:23Z",
        "localPath": "repos/inter_co__science_codeevolve",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器"
        ]
    },
    {
        "name": "SCOPE",
        "repo": "JarvisPei/SCOPE",
        "url": "https://github.com/JarvisPei/SCOPE",
        "stars": 77,
        "forks": "6",
        "language": "Python",
        "license": "MIT",
        "report": "projects/jarvispei__scope.md",
        "pattern": "进化/搜索循环",
        "description": "Self-evolving Context Optimization via Prompt Evolution，通过提示词/上下文演化优化 LLM 的任务表现。",
        "stack": [
            "Python",
            "OpenAI 兼容 API",
            "Anthropic/Claude",
            "pytest"
        ],
        "category": "上下文/Prompt 进化",
        "lastPushed": "2026-03-26T03:01:04Z",
        "localPath": "repos/jarvispei__scope",
        "status": "verified",
        "tags": [
            "进化/搜索循环"
        ]
    },
    {
        "name": "LLM-Self-Judge",
        "repo": "OPPO-Mente-Lab/LLM-Self-Judge",
        "url": "https://github.com/OPPO-Mente-Lab/LLM-Self-Judge",
        "stars": 43,
        "forks": "1",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/oppo_mente_lab__llm_self_judge.md",
        "pattern": "进化/搜索循环 → 评估器/打分器 → 智能体编排 → 训练/数据循环",
        "description": "围绕多模态推理中模型自评判和无监督自进化的官方实现，关注 judge 信号如何驱动模型/数据改进。",
        "stack": [
            "Python",
            "PyTorch",
            "Transformers",
            "vLLM",
            "FastAPI",
            "pytest"
        ],
        "category": "自评判训练",
        "lastPushed": "2026-03-24T03:51:30Z",
        "localPath": "repos/oppo_mente_lab__llm_self_judge",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器",
            "智能体编排",
            "训练/数据循环"
        ]
    },
    {
        "name": "DARWIN",
        "repo": "ZJU-LLM-Safety/DARWIN",
        "url": "https://github.com/ZJU-LLM-Safety/DARWIN",
        "stars": 41,
        "forks": "4",
        "language": "Python",
        "license": "NOASSERTION",
        "report": "projects/zju_llm_safety__darwin.md",
        "pattern": "进化/搜索循环 → 反思记忆",
        "description": "自进化 LLM 越狱/安全研究框架，维护策略池并用检索、过滤、马尔可夫选择、反思和遗传演化扩展攻击策略。",
        "stack": [
            "Python",
            "OpenAI 兼容 API",
            "PyTorch",
            "Transformers"
        ],
        "category": "安全策略进化",
        "lastPushed": "2026-05-07T03:26:42Z",
        "localPath": "repos/zju_llm_safety__darwin",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "反思记忆"
        ]
    },
    {
        "name": "OPRO",
        "repo": "google-deepmind/opro",
        "url": "https://github.com/google-deepmind/opro",
        "stars": 2500,
        "forks": "200",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/01-opro-llm-as-optimizer.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "Google DeepMind 的 OPRO（Optimization by PROmpting），用 LLM 作为优化器，通过进化式 Prompt 迭代搜索最优解。",
        "stack": [
            "Python",
            "Google PaLM/Gemini API"
        ],
        "category": "LLM 作为优化器",
        "lastPushed": "2024-01-01T00:00:00Z",
        "localPath": "repos/google_deepmind__opro",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器",
            "LLM-as-Optimizer"
        ]
    },
    {
        "name": "OpenELM",
        "repo": "carperai/openelm",
        "url": "https://github.com/carperai/openelm",
        "stars": 1800,
        "forks": "150",
        "language": "Python",
        "license": "MIT",
        "report": "projects/02-openelm-evolution-large-models.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "CarperAI 的开源进化大模型框架，使用 MAP-Elites 质量多样性算法进化 LLM Prompt 和代码。",
        "stack": [
            "Python",
            "OpenAI API",
            "PyTorch"
        ],
        "category": "进化式 Prompt 优化",
        "lastPushed": "2024-01-01T00:00:00Z",
        "localPath": "repos/carperai__openelm",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "MAP-Elites",
            "质量多样性"
        ]
    },
    {
        "name": "ADAS",
        "repo": "shengranhu/adas",
        "url": "https://github.com/ShengranHu/ADAS",
        "stars": 1200,
        "forks": "100",
        "language": "Python",
        "license": "MIT",
        "report": "projects/03-adas-automated-design-agentic-systems.md",
        "pattern": "进化/搜索循环 → 智能体编排 → 评估器/打分器",
        "description": "自动设计智能体系统（ADAS），使用 Meta Agent Search 在代码层面搜索最优 Agent 架构。",
        "stack": [
            "Python",
            "Anthropic Claude API"
        ],
        "category": "Agent 架构自动搜索",
        "lastPushed": "2024-01-01T00:00:00Z",
        "localPath": "repos/shengranhu__adas",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "Meta Agent Search",
            "智能体编排"
        ]
    },
    {
        "name": "FunSearch",
        "repo": "google-deepmind/funsearch",
        "url": "https://github.com/google-deepmind/funsearch",
        "stars": 1500,
        "forks": "130",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/04-funsearch-mathematical-discoveries.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "Google DeepMind 的 FunSearch，用 LLM + 岛屿模型进化搜索发现数学新知识，首个在数学开放问题上超越人类已知的 LLM 系统。",
        "stack": [
            "Python",
            "Google PaLM 2 API"
        ],
        "category": "进化式数学发现",
        "lastPushed": "2024-01-01T00:00:00Z",
        "localPath": "repos/google_deepmind__funsearch",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "岛屿模型",
            "数学发现"
        ]
    },
    {
        "name": "AutoML-Agent",
        "repo": "DeepAuto-AI/automl-agent",
        "url": "https://github.com/DeepAuto-AI/automl-agent",
        "stars": 500,
        "forks": "50",
        "language": "Python",
        "license": "CC-BY-NC-4.0",
        "report": "projects/05-automl-agent-multi-agent.md",
        "pattern": "智能体编排 → 进化/搜索循环 → 评估器/打分器",
        "description": "ICML 2025 论文实现，分层管理式 5 Agent 的 AutoML 框架，含 7 状态 FSM + Evol-Instruct 进化 + 代码自动修复。",
        "stack": [
            "Python",
            "vLLM",
            "Mixtral-8x7B",
            "LangChain",
            "AutoGluon"
        ],
        "category": "多 Agent AutoML",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/deepauto_ai__automl_agent",
        "status": "verified",
        "tags": [
            "智能体编排",
            "Evol-Instruct",
            "AutoML"
        ]
    },
    {
        "name": "CoML",
        "repo": "microsoft/CoML",
        "url": "https://github.com/microsoft/CoML",
        "stars": 300,
        "forks": "40",
        "language": "Python",
        "license": "MIT",
        "report": "projects/06-coml-mlcopilot.md",
        "pattern": "反馈-精炼 → 评估器/打分器",
        "description": "微软研究院的交互式 ML 编程助手，通过知识库驱动的配置推荐和 Jupyter Magic 实现经验积累与迁移。",
        "stack": [
            "Python",
            "OpenAI GPT-3.5",
            "Jupyter",
            "TypeScript"
        ],
        "category": "ML 知识库驱动",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/microsoft__coml",
        "status": "verified",
        "tags": [
            "反馈-精炼",
            "知识库",
            "配置迁移"
        ]
    },
    {
        "name": "MetaGPT",
        "repo": "FoundationAgents/MetaGPT",
        "url": "https://github.com/FoundationAgents/MetaGPT",
        "stars": 50000,
        "forks": "6000",
        "language": "Python",
        "license": "MIT",
        "report": "projects/07-metagpt-multi-agent-framework.md",
        "pattern": "智能体编排 → 反馈-精炼",
        "description": "最成熟的多智能体协作框架，Code = SOP(Team) 理念，含 SELA（MCTS+LLM）和 AFlow（ICLR 2025 Oral）。",
        "stack": [
            "Python",
            "OpenAI/Azure/Ollama API"
        ],
        "category": "多 Agent 协作框架",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/foundation_agents__metagpt",
        "status": "verified",
        "tags": [
            "智能体编排",
            "SOP(Team)",
            "SELA",
            "AFlow"
        ]
    },
    {
        "name": "AutoGPT",
        "repo": "Significant-Gravitas/AutoGPT",
        "url": "https://github.com/Significant-Gravitas/AutoGPT",
        "stars": 175000,
        "forks": "45000",
        "language": "Python",
        "license": "MIT",
        "report": "projects/08-autogpt-autonomous-agent.md",
        "pattern": "智能体编排",
        "description": "GitHub 历史最高星标之一，定义了自主 Agent 的 TAO 循环（Thought-Action-Observation），已演进为完整 Agent 平台。",
        "stack": [
            "Python",
            "Docker",
            "React",
            "TypeScript",
            "FastAPI"
        ],
        "category": "自主 Agent 平台",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/significant_gravitas__autogpt",
        "status": "verified",
        "tags": [
            "智能体编排",
            "TAO循环",
            "Agent平台"
        ]
    },
    {
        "name": "CrewAI",
        "repo": "crewAIInc/crewAI",
        "url": "https://github.com/crewAIInc/crewAI",
        "stars": 30000,
        "forks": "4000",
        "language": "Python",
        "license": "MIT",
        "report": "projects/09-crewai-multi-agent-framework.md",
        "pattern": "智能体编排",
        "description": "轻量高性能多 Agent 自动化框架，Crew + Flow 双架构，零依赖独立实现，100k+ 认证开发者。",
        "stack": [
            "Python"
        ],
        "category": "多 Agent 协作框架",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/crewai_inc__crewai",
        "status": "verified",
        "tags": [
            "智能体编排",
            "Crew+Flow",
            "零依赖"
        ]
    },
    {
        "name": "DSPy",
        "repo": "stanfordnlp/dspy",
        "url": "https://github.com/stanfordnlp/dspy",
        "stars": 25000,
        "forks": "2000",
        "language": "Python",
        "license": "MIT",
        "report": "projects/10-dspy-declarative-llm-programming.md",
        "pattern": "反馈-精炼 → 进化/搜索循环 → 评估器/打分器",
        "description": "斯坦福 NLP 声明式 LLM 编程框架，将 Prompt 视为可优化参数，含 SIMBA 自我反思优化器和丰富 Teleprompter 家族。",
        "stack": [
            "Python",
            "Pydantic",
            "LiteLLM",
            "Optuna"
        ],
        "category": "声明式 Prompt 优化",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/stanfordnlp__dspy",
        "status": "verified",
        "tags": [
            "反馈-精炼",
            "Prompt优化",
            "SIMBA",
            "Teleprompter"
        ]
    },
    {
        "name": "AutoGen",
        "repo": "microsoft/autogen",
        "url": "https://github.com/microsoft/autogen",
        "stars": 50000,
        "forks": "6000",
        "language": "Python",
        "license": "MIT",
        "report": "projects/11-autogen-multi-agent-conversation.md",
        "pattern": "智能体编排",
        "description": "微软多智能体对话框架，基于 Actor 模型的消息传递运行时，支持 Round-Robin/Group Chat/Society of Mind 多种编排。",
        "stack": [
            "Python",
            "gRPC",
            "FastAPI",
            "React"
        ],
        "category": "多 Agent 对话框架",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/microsoft__autogen",
        "status": "verified",
        "tags": [
            "智能体编排",
            "Actor模型",
            "Magentic-One"
        ]
    },
    {
        "name": "CAMEL-AI",
        "repo": "camel-ai/camel",
        "url": "https://github.com/camel-ai/camel",
        "stars": 12000,
        "forks": "1300",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/12-camel-ai-communicative-agents.md",
        "pattern": "智能体编排 → 反馈-精炼",
        "description": "最早探索多 Agent 角色扮演对话的框架，含 Critic 在环批评机制和 Self-Instruct 数据生成。",
        "stack": [
            "Python",
            "OpenAI/Anthropic/Google API",
            "Pydantic"
        ],
        "category": "角色扮演 Agent 框架",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/camel_ai__camel",
        "status": "verified",
        "tags": [
            "智能体编排",
            "角色扮演",
            "Critic在环"
        ]
    },
    {
        "name": "LangGraph",
        "repo": "langchain-ai/langgraph",
        "url": "https://github.com/langchain-ai/langgraph",
        "stars": 20000,
        "forks": "2500",
        "language": "Python",
        "license": "MIT",
        "report": "projects/13-langgraph-agent-workflows.md",
        "pattern": "智能体编排",
        "description": "LangChain 的状态化多 Agent 工作流框架，将 Agent 编排建模为有向图，支持循环/分支/并行和状态持久化。",
        "stack": [
            "Python",
            "TypeScript",
            "LangChain Core",
            "Pydantic"
        ],
        "category": "图式 Agent 编排",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/langchain_ai__langgraph",
        "status": "verified",
        "tags": [
            "智能体编排",
            "有向图",
            "Pregel引擎"
        ]
    },
    {
        "name": "SWE-Agent",
        "repo": "princeton-nlp/SWE-agent",
        "url": "https://github.com/princeton-nlp/SWE-agent",
        "stars": 15000,
        "forks": "1500",
        "language": "Python",
        "license": "MIT",
        "report": "projects/14-swe-agent-software-engineering.md",
        "pattern": "反馈-精炼 → 评估器/打分器",
        "description": "Princeton NLP 软件工程 Agent，ICLR 2025 Oral，首创 Agent-Computer Interface (ACI)，在 SWE-bench 上达到 SOTA。",
        "stack": [
            "Python",
            "Jinja2",
            "Docker",
            "swerex"
        ],
        "category": "软件工程 Agent",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/swe_agent__swe_agent",
        "status": "verified",
        "tags": [
            "反馈-精炼",
            "ACI设计",
            "SWE-bench"
        ]
    },
    {
        "name": "OpenHands",
        "repo": "All-Hands-AI/OpenHands",
        "url": "https://github.com/All-Hands-AI/OpenHands",
        "stars": 55000,
        "forks": "6500",
        "language": "Python",
        "license": "MIT",
        "report": "projects/15-openhands-ai-software-dev.md",
        "pattern": "智能体编排",
        "description": "开源 AI 软件开发平台（原 OpenDevin），AI Agent + 完整开发环境（编辑器/终端/浏览器），55k+ Stars。",
        "stack": [
            "Python",
            "React",
            "Docker",
            "FastAPI"
        ],
        "category": "AI 软件开发平台",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/all_hands_ai__openhands",
        "status": "verified",
        "tags": [
            "智能体编排",
            "Microagent",
            "沙箱环境"
        ]
    },
    {
        "name": "Devika",
        "repo": "stitionai/devika",
        "url": "https://github.com/stitionai/devika",
        "stars": 22000,
        "forks": "3000",
        "language": "Python",
        "license": "MIT",
        "report": "projects/16-devika-ai-software-engineer.md",
        "pattern": "智能体编排 → 反馈-精炼",
        "description": "开源 AI 软件工程师，多 Agent 流水线（规划→研究→决策→编码→测试→修复），支持 8+ LLM 后端。",
        "stack": [
            "Python",
            "Flask",
            "Socket.IO",
            "Playwright",
            "BERT"
        ],
        "category": "AI 软件工程师",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/stitionai__devika",
        "status": "verified",
        "tags": [
            "智能体编排",
            "多LLM",
            "流水线"
        ]
    },
    {
        "name": "AgentVerse",
        "repo": "OpenBMB/AgentVerse",
        "url": "https://github.com/OpenBMB/AgentVerse",
        "stars": 5000,
        "forks": "500",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/17-agentverse-multi-agent-platform.md",
        "pattern": "智能体编排 → 反思记忆",
        "description": "清华 OpenBMB 多智能体仿真平台（ACL 2024），双模式（仿真+任务求解），含 Reflection 记忆操作器。",
        "stack": [
            "Python",
            "Pydantic",
            "OpenAI API",
            "React"
        ],
        "category": "多 Agent 仿真平台",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/openbmb__agentverse",
        "status": "verified",
        "tags": [
            "智能体编排",
            "涌现行为",
            "Reflection"
        ]
    },
    {
        "name": "ReEvo",
        "repo": "ai4co/reevo",
        "url": "https://github.com/ai4co/reevo",
        "stars": 500,
        "forks": "50",
        "language": "Python",
        "license": "MIT",
        "report": "projects/18-reevo-reflective-evolution.md",
        "pattern": "进化/搜索循环 → 反思记忆 → 评估器/打分器",
        "description": "NeurIPS 2024 反射式进化搜索框架，将 LLM 作为语言超启发式（LHHs），通过短期/长期反射机制结合交叉变异实现组合优化算法的自动发现。",
        "stack": [
            "Python",
            "Hydra/OmegaConf",
            "LiteLLM",
            "NumPy"
        ],
        "category": "反射式进化搜索",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/ai4co__reevo",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "反思记忆",
            "超启发式",
            "组合优化"
        ]
    },
    {
        "name": "LLaMEA",
        "repo": "xai-liacs/LLaMEA",
        "url": "https://github.com/XAI-liacs/LLaMEA",
        "stars": 1200,
        "forks": "100",
        "language": "Python",
        "license": "MIT",
        "report": "projects/19-llamea-llm-evolutionary-algorithm.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "IEEE TEVC 2025 论文，自称 AlphaEvolve 的完全开源后继者，利用 LLM 自动生成和优化元启发式算法，获 GECCO 2025 银质 Humies 奖。",
        "stack": [
            "Python",
            "OpenAI/Gemini/Ollama API",
            "IOHexperimenter",
            "SMAC",
            "NumPy"
        ],
        "category": "LLM 驱动算法自动发现",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/xai_liacs__llamea",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器",
            "元启发式",
            "算法自动发现"
        ]
    },
    {
        "name": "EvoPrompt",
        "repo": "beeevita/EvoPrompt",
        "url": "https://github.com/beeevita/EvoPrompt",
        "stars": 300,
        "forks": "30",
        "language": "Python",
        "license": "MIT",
        "report": "projects/20-evoprompt-prompt-optimization.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "ICLR 2024 论文，将进化算法（GA/DE）与 LLM 结合实现离散提示词优化，在 31 个数据集上显著超越人工设计的提示词。",
        "stack": [
            "Python",
            "OpenAI API",
            "Alpaca (LLaMA)",
            "NumPy"
        ],
        "category": "进化式 Prompt 优化",
        "lastPushed": "2024-01-01T00:00:00Z",
        "localPath": "repos/beeevita__evoprompt",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器",
            "Prompt优化"
        ]
    },
    {
        "name": "EvoAgent",
        "repo": "siyuyuan/evoagent",
        "url": "https://github.com/siyuyuan/evoagent",
        "stars": 200,
        "forks": "20",
        "language": "Python",
        "license": "NOASSERTION",
        "report": "projects/21-evoagent-evolutionary-multi-agent.md",
        "pattern": "进化/搜索循环 → 智能体编排",
        "description": "NeurIPS 2024 论文，通过进化算法自动将专家 Agent 扩展为多智能体系统，模拟人类社会的繁衍机制实现从单 Agent 到多 Agent 的自动化扩展。",
        "stack": [
            "Python",
            "OpenAI API",
            "Gemini API",
            "LangChain",
            "ScienceWorld"
        ],
        "category": "进化式多 Agent 系统",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/siyuyuan__evoagent",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "智能体编排",
            "多Agent生成"
        ]
    },
    {
        "name": "EvoAgentX",
        "repo": "EvoAgentX/EvoAgentX",
        "url": "https://github.com/EvoAgentX/EvoAgentX",
        "stars": 1000,
        "forks": "100",
        "language": "Python",
        "license": "MIT",
        "report": "projects/22-evoagentx-agent-evolution-framework.md",
        "pattern": "进化/搜索循环 → 智能体编排 → 评估器/打分器 → 反馈-精炼",
        "description": "面向 LLM Agent 的构建、评估与自动进化开源框架，集成 TextGrad/MIPRO/AFlow/EvoPrompt 等多种进化算法优化 workflow 结构与提示词。",
        "stack": [
            "Python",
            "OpenAI/Qwen/Claude/Deepseek API",
            "FastAPI",
            "MongoDB",
            "PostgreSQL",
            "FAISS"
        ],
        "category": "自进化 Agent 生态系统",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/evoagentx__evoagentx",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "智能体编排",
            "评估器/打分器",
            "反馈-精炼",
            "自进化引擎"
        ]
    },
    {
        "name": "EverOS",
        "repo": "EverMind-AI/EverOS",
        "url": "https://github.com/EverMind-AI/EverOS",
        "stars": 5600,
        "forks": "593",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/79-everos-self-evolving-memory-os.md",
        "pattern": "long-term memory methods -> hypergraph architecture -> use-case integrations -> memory/evolution benchmark suites",
        "description": "EverOS 把长期记忆方法、HyperMem 架构、用例集成、EverMemBench 和 EvoAgentBench 放在同一仓库中，直接连接 agent memory、MCP/skills 和 self-evolution evaluation。",
        "stack": [
            "Python",
            "TypeScript",
            "EverCore",
            "HyperMem",
            "EverMemBench",
            "EvoAgentBench"
        ],
        "category": "Self-Evolving Agent Memory OS",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/evermind-ai_everos.md",
        "status": "verified",
        "tags": [
            "记忆系统",
            "自进化Agent",
            "Benchmark",
            "MCP",
            "技能系统"
        ]
    },
    {
        "name": "OpenTreeSearch",
        "repo": "Genentech/OpenTreeSearch",
        "url": "https://github.com/Genentech/opentreesearch",
        "stars": 200,
        "forks": "20",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/24-opentreesearch-llm-code-evolution.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "Genentech 发布的基于 PUCT 树搜索的 LLM 引导代码进化工具，构建在 OpenEvolve 之上，用单超参数替代岛屿模型多超参数。",
        "stack": [
            "Python",
            "OpenEvolve",
            "PUCT树搜索",
            "LLM (Gemini/Qwen)"
        ],
        "category": "LLM 引导代码进化",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/genentech__opentreesearch",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器",
            "树搜索",
            "代码进化"
        ]
    },
    {
        "name": "pyribs",
        "repo": "icaros-usc/pyribs",
        "url": "https://github.com/icaros-usc/pyribs",
        "stars": 800,
        "forks": "80",
        "language": "Python",
        "license": "MIT",
        "report": "projects/25-pyribs-quality-diversity.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "USC ICAROS Lab 的质量多样性（QD）优化库，实现高度模块化的 RIBS 框架，支持 CMA-ME/CMA-MEGA/CMA-MAE 等先进 QD 算法。",
        "stack": [
            "Python",
            "NumPy",
            "SciPy",
            "JAX",
            "PyTorch"
        ],
        "category": "质量多样性优化",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/icaros_usc__pyribs",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器",
            "质量多样性",
            "MAP-Elites"
        ]
    },
    {
        "name": "LLM4EC",
        "repo": "wuxingyu-ai/LLM4EC",
        "url": "https://github.com/wuxingyu-ai/LLM4EC",
        "stars": 200,
        "forks": "20",
        "language": "Markdown",
        "license": "NOASSERTION",
        "report": "projects/26-llm4ec-llm-evolutionary-computation.md",
        "pattern": "文献综述",
        "description": "IEEE TEVC 综述论文配套资源库，系统整理 LLM 与 EC 交叉领域研究，划分为 LLM 增强 EA、EA 增强 LLM、LLM 与 EA 协同应用三大方向。",
        "stack": [
            "Markdown",
            "论文索引"
        ],
        "category": "LLM+EC 交叉综述",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/wuxingyu_ai__llm4ec",
        "status": "verified",
        "tags": [
            "文献综述",
            "LLM+EC",
            "进化计算"
        ]
    },
    {
        "name": "LLM4Opt",
        "repo": "FeiLiu36/LLM4Opt",
        "url": "https://github.com/FeiLiu36/LLM4Opt",
        "stars": 400,
        "forks": "40",
        "language": "Markdown",
        "license": "NOASSERTION",
        "report": "projects/27-llm4opt-llm-optimization.md",
        "pattern": "文献综述",
        "description": "ACM Computing Surveys 2025 综述配套资源库，提出 LLM 在算法设计中的四范式分类：LLMaO/LLMaP/LLMaE/LLMaD，收录 300+ 篇论文。",
        "stack": [
            "Markdown",
            "论文索引"
        ],
        "category": "LLM 驱动算法设计综述",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/feiliu36__llm4opt",
        "status": "verified",
        "tags": [
            "文献综述",
            "LLM-as-Optimizer",
            "算法设计"
        ]
    },
    {
        "name": "Nevergrad",
        "repo": "facebookresearch/nevergrad",
        "url": "https://github.com/facebookresearch/nevergrad",
        "stars": 4000,
        "forks": "400",
        "language": "Python",
        "license": "MIT",
        "report": "projects/28-nevergrad-derivative-free.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "Meta Research 的 Python 无梯度优化平台，实现 100+ 种优化器的统一接口，含差分进化/CMA-ES/粒子群/贝叶斯优化等，通过 NGOpt 自动选择算法。",
        "stack": [
            "Python",
            "NumPy",
            "SciPy"
        ],
        "category": "无梯度优化框架",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/facebookresearch__nevergrad",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器",
            "无梯度优化",
            "NGOpt"
        ]
    },
    {
        "name": "DEAP",
        "repo": "DEAP/deap",
        "url": "https://github.com/DEAP/deap",
        "stars": 6000,
        "forks": "1200",
        "language": "Python",
        "license": "LGPL-3.0",
        "report": "projects/29-deap-evolutionary-framework.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "JMLR 2012 经典进化计算框架，支持 GA/GP/ES/多目标/协同进化等多种范式，以算法显式化、数据结构透明化为设计理念，与 multiprocessing/SCOOP 兼容。",
        "stack": [
            "Python",
            "NumPy",
            "multiprocessing",
            "SCOOP"
        ],
        "category": "经典进化算法框架",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/deap__deap",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器",
            "遗传算法",
            "遗传编程"
        ]
    },
    {
        "name": "pycma",
        "repo": "CMA-ES/pycma",
        "url": "https://github.com/CMA-ES/pycma",
        "stars": 1000,
        "forks": "250",
        "language": "Python",
        "license": "BSD-3-Clause",
        "report": "projects/30-pycma-cma-es.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "CMA-ES 官方 Python 参考实现，适用于非凸、病态、多模态和噪声连续优化问题，含边界/约束处理、噪声处理和混合整数优化支持。",
        "stack": [
            "Python",
            "NumPy",
            "matplotlib"
        ],
        "category": "经典进化策略",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/cma_es__pycma",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "CMA-ES",
            "无导数优化"
        ]
    },
    {
        "name": "auto-sklearn",
        "repo": "automl/auto-sklearn",
        "url": "https://github.com/automl/auto-sklearn",
        "stars": 7500,
        "forks": "1000",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/31-autosklearn-automl.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "Freiburg 大学 AutoML 团队开发的自动化机器学习框架（NeurIPS 2015），结合元学习、贝叶斯优化和自动模型集成实现端到端 ML 流程自动化。",
        "stack": [
            "Python",
            "scikit-learn",
            "SMAC",
            "ConfigSpace",
            "Dask"
        ],
        "category": "AutoML 框架",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/automl__auto_sklearn",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器",
            "AutoML",
            "贝叶斯优化"
        ]
    },
    {
        "name": "Self-Evolving-Agents",
        "repo": "CharlesQ9/Self-Evolving-Agents",
        "url": "https://github.com/CharlesQ9/Self-Evolving-Agents",
        "stars": 300,
        "forks": "30",
        "language": "Markdown",
        "license": "NOASSERTION",
        "report": "projects/32-self-evolving-agents.md",
        "pattern": "文献综述",
        "description": "普林斯顿/UIUC/MIT 等联合撰写的自进化 Agent 综述，系统回答 What/When/How/Where to Evolve 四个核心问题，覆盖从模型权重到 Agent 架构的多个进化层次。",
        "stack": [
            "Markdown",
            "论文索引"
        ],
        "category": "自进化 Agent 综述",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/charlesq9__self_evolving_agents",
        "status": "verified",
        "tags": [
            "文献综述",
            "自进化Agent",
            "超级智能"
        ]
    },
    {
        "name": "self-improvement-llm",
        "repo": "Zesearch/self-improvement-llm",
        "url": "https://github.com/Zesearch/self-improvement-llm",
        "stars": 200,
        "forks": "20",
        "language": "Markdown",
        "license": "NOASSERTION",
        "report": "projects/33-self-improvement-llm.md",
        "pattern": "文献综述",
        "description": "Stony Brook University 发布的 LLM 自改进系统级综述，提出覆盖数据获取/选择/模型优化/推理优化/自主评估的五组件框架，收录 300+ 篇论文。",
        "stack": [
            "Markdown",
            "论文索引"
        ],
        "category": "LLM 自改进综述",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/zesearch__self_improvement_llm",
        "status": "verified",
        "tags": [
            "文献综述",
            "自改进",
            "LLM优化"
        ]
    },
    {
        "name": "LLM-EA-Survey",
        "repo": "xiaofangxd/LLM_EA",
        "url": "https://github.com/xiaofangxd/LLM_EA",
        "stars": 300,
        "forks": "30",
        "language": "Markdown",
        "license": "NOASSERTION",
        "report": "projects/34-llm-ea-survey.md",
        "pattern": "文献综述",
        "description": "LLM 与 EA 交叉研究综述论文配套资源库，将论文分为 LLM 用于 EA 和 EA 用于 LLM 两大方向，涵盖 2022-2024 年 100+ 篇重要文献。",
        "stack": [
            "Markdown",
            "BibTeX"
        ],
        "category": "LLM+EA 交叉综述",
        "lastPushed": "2024-01-01T00:00:00Z",
        "localPath": "repos/xiaofangxd__llm_ea",
        "status": "verified",
        "tags": [
            "文献综述",
            "LLM+EA",
            "进化计算"
        ]
    },
    {
        "name": "Tutorial-GP-LLM",
        "repo": "alfa-group/tutorial_gp_llm",
        "url": "https://github.com/alfa-group/tutorial_gp_llm",
        "stars": 50,
        "forks": "10",
        "language": "Python",
        "license": "NOASSERTION",
        "report": "projects/35-tutorial-gp-llm.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "MIT ALFA Group 的教学项目，展示如何将 LLM 集成到 GP 进化算子中，扩展 pony_gp 框架实现 LLM 驱动的个体初始化、交叉和变异操作。",
        "stack": [
            "Python",
            "OpenAI API",
            "YAML",
            "符号回归"
        ],
        "category": "GP+LLM 教学",
        "lastPushed": "2024-01-01T00:00:00Z",
        "localPath": "repos/alfa_group__tutorial_gp_llm",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "遗传编程",
            "LLM算子",
            "教学"
        ]
    },
    {
        "name": "LLM-Agent-Optimization",
        "repo": "YoungDubbyDu/LLM-Agent-Optimization",
        "url": "https://github.com/YoungDubbyDu/LLM-Agent-Optimization",
        "stars": 500,
        "forks": "50",
        "language": "Markdown",
        "license": "NOASSERTION",
        "report": "projects/36-llm-agent-optimization.md",
        "pattern": "文献综述",
        "description": "ACM Computing Surveys 接收论文配套列表，系统探讨 LLM Agent 优化技术，划分为参数驱动/无参数/数据集与基准/应用四大类别，收录 200+ 篇论文。",
        "stack": [
            "Markdown",
            "学术文献管理"
        ],
        "category": "LLM Agent 优化综述",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/youngdubbydu__llm_agent_optimization",
        "status": "verified",
        "tags": [
            "文献综述",
            "Agent优化",
            "参数优化",
            "无参数优化"
        ]
    },
    {
        "name": "Awesome-Code-LLM",
        "repo": "CodeFuse-ML/awesome-code-llm",
        "url": "https://github.com/CodeFuse-ML/awesome-code-llm",
        "stars": 2000,
        "forks": "150",
        "language": "Markdown",
        "license": "NOASSERTION",
        "report": "projects/37-awesome-code-llm.md",
        "pattern": "文献综述",
        "description": "CodeFuse AI (蚂蚁集团) 维护的代码 LLM 全景资源列表，TMLR 论文配套仓库，涵盖模型架构/预训练/代码推理/评估基准等 8 大类别。",
        "stack": [
            "Markdown",
            "学术文献索引"
        ],
        "category": "代码 LLM 综述",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/codefuse_ml__awesome_code_llm",
        "status": "verified",
        "tags": [
            "文献综述",
            "代码LLM",
            "模型架构"
        ]
    },
    {
        "name": "AgentBench",
        "repo": "THUDM/AgentBench",
        "url": "https://github.com/THUDM/AgentBench",
        "stars": 3000,
        "forks": "300",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/38-agentbench.md",
        "pattern": "评估器/打分器",
        "description": "清华 THUDM 开发的首个系统性 LLM-as-Agent 评测基准（ICLR 2024），设计 8 个截然不同的评测环境，全面评估规划/推理/工具使用/长程决策能力。",
        "stack": [
            "Python",
            "Docker",
            "Redis",
            "MySQL",
            "OpenAI API"
        ],
        "category": "Agent 评测基准",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/thudm__agentbench",
        "status": "verified",
        "tags": [
            "评估器/打分器",
            "Agent评测",
            "多环境基准"
        ]
    },
    {
        "name": "RL4CO",
        "repo": "ai4co/rl4co",
        "url": "https://github.com/ai4co/rl4co",
        "stars": 1200,
        "forks": "150",
        "language": "Python",
        "license": "MIT",
        "report": "projects/39-rl4co-reinforcement-learning.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "AI4CO 团队的强化学习组合优化基准框架（KDD 2025），基于 PyTorch 生态，包含 20+ 种前沿模型，支持路由/调度/图问题等多种 CO 任务。",
        "stack": [
            "PyTorch",
            "TorchRL",
            "PyTorch Lightning",
            "Hydra",
            "TensorDict"
        ],
        "category": "RL 组合优化基准",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/ai4co__rl4co",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器",
            "强化学习",
            "组合优化"
        ]
    },
    {
        "name": "Awesome-FM4CO",
        "repo": "ai4co/awesome-fm4co",
        "url": "https://github.com/ai4co/awesome-fm4co",
        "stars": 500,
        "forks": "50",
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/40-awesome-fm4co.md",
        "pattern": "文献综述",
        "description": "AI4CO 团队维护的基础模型驱动的组合优化前沿研究索引，收录 2022-2026 年 200+ 篇论文，从 LLM 解决 CO 和领域 FM 两个维度组织文献。",
        "stack": [
            "Markdown",
            "表格索引"
        ],
        "category": "基础模型+组合优化综述",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/ai4co__awesome_fm4co",
        "status": "verified",
        "tags": [
            "文献综述",
            "基础模型",
            "组合优化"
        ]
    },
    {
        "name": "OpenDevin",
        "repo": "OpenDevin/OpenDevin",
        "url": "https://github.com/OpenDevin/OpenDevin",
        "stars": 50000,
        "forks": "6000",
        "language": "Python",
        "license": "MIT",
        "report": "projects/41-opendevin-ai-software.md",
        "pattern": "智能体编排 → 反馈-精炼",
        "description": "开源 AI 软件开发平台（原 OpenDevin，现 OpenHands），在 SWE-bench 上达到 77.6% 解决率，被 TikTok/Amazon/Netflix/NVIDIA/Google 等采用。",
        "stack": [
            "Python",
            "React",
            "Docker",
            "PyTorch",
            "Claude/GPT API",
            "FastAPI"
        ],
        "category": "AI 软件开发平台",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/opendevin__opendevin",
        "status": "verified",
        "tags": [
            "智能体编排",
            "反馈-精炼",
            "SWE-bench",
            "软件开发"
        ]
    },
    {
        "name": "GP-LLM-Code-Evolution",
        "repo": "pureples/pureples",
        "url": "https://github.com/pureples/pureples",
        "stars": 100,
        "forks": "20",
        "language": "Python",
        "license": "NOASSERTION",
        "report": "projects/42-gp-llm-code-evolution.md",
        "pattern": "进化/搜索循环 → 评估器/打分器",
        "description": "GP+LLM 融合代码进化综合研究报告，分析遗传编程与大语言模型融合的技术路线，涵盖 LLM 作为遗传算子/优化器/超启发式/进化编码 Agent 等方向。",
        "stack": [
            "Python",
            "OpenAI API",
            "进化算法框架",
            "LLM API"
        ],
        "category": "GP+LLM 代码进化",
        "lastPushed": "2025-01-01T00:00:00Z",
        "localPath": "repos/pureples__pureples",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "遗传编程",
            "LLM",
            "代码进化"
        ]
    },
    {
        "name": "Agentic Harness Engineering",
        "repo": "china-qijizhifeng/agentic-Harness-engineering",
        "url": "https://github.com/china-qijizhifeng/agentic-Harness-engineering",
        "stars": 391,
        "forks": "unknown",
        "language": "Python",
        "license": "NOASSERTION",
        "report": "projects/43-agentic-harness-engineering.md",
        "pattern": "评估器/打分器 → 工具/提示/记忆/子智能体进化 → 回归验证",
        "description": "用户点名补入的 Harness 进化项目，关注在固定基础模型上演化提示词、工具、中间件、技能、子智能体和记忆，而不是只比较模型权重。",
        "stack": [
            "Python",
            "Agent harness",
            "Terminal-Bench",
            "prompt/tool/memory evolution"
        ],
        "category": "Harness 进化工程",
        "lastPushed": "2026-05-22T00:00:00Z",
        "localPath": "raw-github/china-qijizhifeng_agentic-harness-engineering.md",
        "status": "candidate",
        "tags": [
            "评估器/打分器",
            "Harness进化",
            "工具进化",
            "记忆进化",
            "子智能体"
        ]
    },
    {
        "name": "Hermes Agent",
        "repo": "NousResearch/hermes-agent",
        "url": "https://github.com/NousResearch/hermes-agent",
        "stars": 162000,
        "forks": "26400",
        "language": "Python",
        "license": "MIT",
        "report": "projects/44-hermes-agent.md",
        "pattern": "反思记忆 → 技能生成/改进 → 消息/自动化运行时",
        "description": "Nous Research 的自改进个人 Agent，强调持久记忆、自动技能生成、会话搜索、用户建模、消息网关和可压缩轨迹。",
        "stack": [
            "Python",
            "TypeScript",
            "SQLite FTS5",
            "skills",
            "messaging gateway"
        ],
        "category": "自改进个人 Agent 运行时",
        "lastPushed": "2026-05-16T00:00:00Z",
        "localPath": "raw-github/nousresearch_hermes-agent.md",
        "status": "verified",
        "tags": [
            "反思记忆",
            "技能生成",
            "消息网关",
            "用户建模",
            "轨迹压缩"
        ]
    },
    {
        "name": "Hermes Agent Self-Evolution",
        "repo": "NousResearch/hermes-agent-self-evolution",
        "url": "https://github.com/NousResearch/hermes-agent-self-evolution",
        "stars": 3400,
        "forks": "370",
        "language": "Python",
        "license": "NOASSERTION",
        "report": "projects/45-hermes-agent-self-evolution.md",
        "pattern": "执行轨迹 → GEPA/DSPy 候选变体 → 评估选择",
        "description": "Hermes Agent 的伴生自进化仓库，用 DSPy 和 GEPA 优化技能、提示、工具描述和代码，提供无需 GPU 训练的评估驱动改进环。",
        "stack": [
            "Python",
            "DSPy",
            "GEPA",
            "evaluation datasets",
            "execution traces"
        ],
        "category": "技能与提示进化",
        "lastPushed": "2026-05-21T00:00:00Z",
        "localPath": "raw-github/nousresearch_hermes-agent-self-evolution.md",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "评估器/打分器",
            "技能优化",
            "GEPA",
            "DSPy"
        ]
    },
    {
        "name": "EvoMap Evolver",
        "repo": "EvoMap/evolver",
        "url": "https://github.com/EvoMap/evolver",
        "stars": 7507,
        "forks": "760",
        "language": "JavaScript",
        "license": "GPL-3.0",
        "report": "projects/46-evomap-evolver.md",
        "pattern": "Genome Evolution Protocol → Genes/Capsules/Events → 可审计演化",
        "description": "EvoMap 的 GEP 自进化引擎，把 Agent 能力拆成 Genes、Capsules 和 Events，让技能/提示/行为改动具备可追踪演化日志。",
        "stack": [
            "Node.js",
            "JavaScript",
            "GEP",
            "CLI",
            "SKILL.md"
        ],
        "category": "可审计 Agent 演化引擎",
        "lastPushed": "2026-02-01T00:00:00Z",
        "localPath": "raw-github/evomap_evolver.md",
        "status": "verified",
        "tags": [
            "进化/搜索循环",
            "GEP",
            "可审计演化",
            "技能系统",
            "Agent运行时"
        ]
    },
    {
        "name": "GenericAgent",
        "repo": "lsdefine/GenericAgent",
        "url": "https://github.com/lsdefine/GenericAgent",
        "stars": 11900,
        "forks": "1400",
        "language": "Python",
        "license": "NOASSERTION",
        "report": "projects/47-genericagent.md",
        "pattern": "上下文密度最大化 → 技能树增长 → 反思/记忆压缩",
        "description": "用户点名的 2026 新项目，从小型种子 Agent 增长技能树，强调用更低 token 消耗获得长程系统控制能力。",
        "stack": [
            "Python",
            "memory",
            "plugins",
            "reflection",
            "web frontend"
        ],
        "category": "Token 高效自进化 Agent",
        "lastPushed": "2026-05-21T00:00:00Z",
        "localPath": "raw-github/lsdefine_genericagent.md",
        "status": "verified",
        "tags": [
            "自进化Agent",
            "反思记忆",
            "技能树",
            "Token效率",
            "系统控制"
        ]
    },
    {
        "name": "OpenClaw",
        "repo": "openclaw/openclaw",
        "url": "https://github.com/openclaw/openclaw",
        "stars": 374000,
        "forks": "77700",
        "language": "TypeScript",
        "license": "NOASSERTION",
        "report": "projects/48-openclaw.md",
        "pattern": "本地优先运行时 → 多渠道入口 → 技能/工具/会话闭环",
        "description": "个人 AI assistant / agent runtime，强调本地优先、多消息渠道、Live Canvas、工具节点、cron/session 和 skill 支持，是产品可用性判断的关键样本。",
        "stack": [
            "TypeScript",
            "local-first",
            "messaging",
            "browser/canvas tools",
            "skills"
        ],
        "category": "个人 Agent 产品运行时",
        "lastPushed": "2026-05-21T00:00:00Z",
        "localPath": "raw-github/openclaw_openclaw.md",
        "status": "verified",
        "tags": [
            "智能体编排",
            "产品运行时",
            "技能系统",
            "多渠道",
            "本地优先"
        ]
    },
    {
        "name": "Superpowers",
        "repo": "obra/superpowers",
        "url": "https://github.com/obra/superpowers",
        "stars": 202000,
        "forks": "18000",
        "language": "Shell",
        "license": "MIT",
        "report": "projects/49-superpowers.md",
        "pattern": "方法论/技能库 → 计划/执行/评审/TDD → 跨 Agent 复用",
        "description": "面向 Claude Code、Codex、Cursor 等 coding agents 的技能框架和软件开发方法论，把操作手册转成可复用 skill。",
        "stack": [
            "Shell",
            "JavaScript",
            "Python",
            "skills",
            "TDD"
        ],
        "category": "Agentic 技能方法论",
        "lastPushed": "2026-05-04T00:00:00Z",
        "localPath": "raw-github/obra_superpowers.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "方法论",
            "TDD",
            "代码评审",
            "并行Agent"
        ]
    },
    {
        "name": "agentmemory",
        "repo": "rohitg00/agentmemory",
        "url": "https://github.com/rohitg00/agentmemory",
        "stars": 16000,
        "forks": "1300",
        "language": "TypeScript",
        "license": "Apache-2.0",
        "report": "projects/50-agentmemory.md",
        "pattern": "持久记忆 → 知识图谱/混合搜索 → 多 Agent harness 接入",
        "description": "面向 Claude Code、Codex、Cursor、Hermes、OpenClaw 和 MCP 客户端的持久记忆层，补上 Agent 跨会话连续性的工程证据。",
        "stack": [
            "TypeScript",
            "knowledge graph",
            "hybrid search",
            "MCP",
            "confidence scoring"
        ],
        "category": "Agent 持久记忆层",
        "lastPushed": "2026-05-18T00:00:00Z",
        "localPath": "raw-github/rohitg00_agentmemory.md",
        "status": "verified",
        "tags": [
            "反思记忆",
            "知识图谱",
            "MCP",
            "跨会话连续性",
            "Harness"
        ]
    },
    {
        "name": "PinchBench Skill",
        "repo": "pinchbench/skill",
        "url": "https://github.com/pinchbench/skill",
        "stars": 1200,
        "forks": "132",
        "language": "Python",
        "license": "MIT",
        "report": "projects/51-pinchbench-skill.md",
        "pattern": "真实任务集 → 自动/LLM 评分 → 会话转录分析",
        "description": "OpenClaw coding agents 的真实任务 benchmark，覆盖会议、代码、邮件、研究、文件、记忆和技能发现，连接产品运行时与可验证评测。",
        "stack": [
            "Python",
            "TypeScript",
            "OpenClaw",
            "LLM judge",
            "session transcripts"
        ],
        "category": "真实 Agent 任务基准",
        "lastPushed": "2026-05-06T00:00:00Z",
        "localPath": "raw-github/pinchbench_skill.md",
        "status": "verified",
        "tags": [
            "评估器/打分器",
            "Agent评测",
            "真实任务",
            "OpenClaw",
            "会话转录"
        ]
    },
    {
        "name": "OpenHuman",
        "repo": "tinyhumansai/openhuman",
        "url": "https://github.com/tinyhumansai/openhuman",
        "stars": 25100,
        "forks": "2300",
        "language": "Rust",
        "license": "GPL-3.0",
        "report": "projects/52-openhuman.md",
        "pattern": "本地记忆/wiki → 第三方集成 → token 压缩/工具调用",
        "description": "UI-first 的个人 AI super intelligence，强调本地优先记忆、Obsidian 兼容 wiki、118+ 集成、自动抓取、typed tools 和 token 压缩。",
        "stack": [
            "Rust",
            "TypeScript",
            "Obsidian-compatible wiki",
            "typed tools",
            "local memory"
        ],
        "category": "个人 Agent 产品与记忆系统",
        "lastPushed": "2026-05-21T00:00:00Z",
        "localPath": "raw-github/tinyhumansai_openhuman.md",
        "status": "verified",
        "tags": [
            "反思记忆",
            "产品运行时",
            "本地优先",
            "工具调用",
            "Token压缩"
        ]
    },
    {
        "name": "Claw Bench",
        "repo": "claw-bench/claw-bench",
        "url": "https://github.com/claw-bench/claw-bench",
        "stars": 171,
        "forks": "18",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/53-claw-bench-agent-benchmark.md",
        "pattern": "真实任务集 → skill.md 指令 → pytest 验证器 → 公开榜单",
        "description": "面向真实 AI Agent 产品的基准，强调 agent 直接读任务、执行工作、通过 pytest verifier 和 leaderboard 形成可复现评测。",
        "stack": [
            "Python",
            "pytest",
            "leaderboard",
            "skill.md",
            "Docker"
        ],
        "category": "真实 Agent 任务基准",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/claw-bench_claw-bench.md",
        "status": "verified",
        "tags": [
            "评估器/打分器",
            "Agent评测",
            "真实任务",
            "技能系统",
            "公开榜单"
        ]
    },
    {
        "name": "OpenClaw ClawBench",
        "repo": "openclaw/clawbench",
        "url": "https://github.com/openclaw/clawbench",
        "stars": 97,
        "forks": "18",
        "language": "Python",
        "license": "MIT",
        "report": "projects/54-openclaw-clawbench.md",
        "pattern": "执行轨迹 → 可靠性/噪声分解 → harness/config/model 联合评分",
        "description": "OpenClaw 生态的 trace-based agent benchmark，关注 seed noise、capability signal、failure regime 和 harness 配置对结果的影响。",
        "stack": [
            "Python",
            "Docker",
            "trace scoring",
            "rejudge pipeline",
            "diagnostics"
        ],
        "category": "Agent Harness 评测诊断",
        "lastPushed": "2026-04-20T00:00:00Z",
        "localPath": "raw-github/openclaw_clawbench.md",
        "status": "verified",
        "tags": [
            "评估器/打分器",
            "Harness",
            "轨迹评分",
            "可靠性",
            "噪声分解"
        ]
    },
    {
        "name": "Claw-Eval",
        "repo": "claw-eval/claw-eval",
        "url": "https://github.com/claw-eval/claw-eval",
        "stars": 606,
        "forks": "52",
        "language": "Python",
        "license": "NOASSERTION",
        "report": "projects/55-claw-eval-agent-evaluation.md",
        "pattern": "人类验证任务 → Pass^3 多次运行 → 全轨迹审计",
        "description": "自治 Agent 可信评测 harness，覆盖 300 个 human-verified tasks、2,159 条 rubrics，并用 Pass^3 降低 lucky run 偏差。",
        "stack": [
            "Python",
            "task rubrics",
            "trajectory audit",
            "Docker",
            "leaderboard"
        ],
        "category": "可信 Agent 评测",
        "lastPushed": "2026-03-01T00:00:00Z",
        "localPath": "raw-github/claw-eval_claw-eval.md",
        "status": "verified",
        "tags": [
            "评估器/打分器",
            "Pass^3",
            "人类验证",
            "全轨迹审计",
            "鲁棒性"
        ]
    },
    {
        "name": "Harness Evolver",
        "repo": "raphaelchristi/harness-evolver",
        "url": "https://github.com/raphaelchristi/harness-evolver",
        "stars": 21,
        "forks": "2",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/56-harness-evolver.md",
        "pattern": "失败数据 → 多 proposer 修改 harness → gate 拒绝退化 → 自动合并赢家",
        "description": "Claude Code 插件和 npx 工具，用 LangSmith-backed evaluation 进化 agent harness 的 prompts、routing、tools 和 architecture。",
        "stack": [
            "TypeScript",
            "Claude Code plugin",
            "LangSmith",
            "git worktrees",
            "skills"
        ],
        "category": "Harness 自进化工具",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/raphaelchristi_harness-evolver.md",
        "status": "verified",
        "tags": [
            "Harness",
            "技能系统",
            "进化/搜索循环",
            "评估器/打分器",
            "自动回归门控"
        ]
    },
    {
        "name": "Awesome Harness Engineering",
        "repo": "ai-boost/awesome-harness-engineering",
        "url": "https://github.com/ai-boost/awesome-harness-engineering",
        "stars": 1100,
        "forks": "100",
        "language": "Markdown",
        "license": "CC0",
        "report": "projects/57-awesome-harness-engineering.md",
        "pattern": "资源索引 → harness primitives → 评测/记忆/工具/权限分类",
        "description": "AI agent harness engineering 的资源与模板索引，把 context、tools、planning、verification、memory、sandbox 等支架组件结构化。",
        "stack": [
            "Markdown",
            "templates",
            "MCP",
            "memory",
            "verification"
        ],
        "category": "Harness Engineering 资源索引",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/ai-boost_awesome-harness-engineering.md",
        "status": "verified",
        "tags": [
            "教程/tutorial",
            "Harness",
            "MCP",
            "反思记忆",
            "评估器/打分器"
        ]
    },
    {
        "name": "Mem0",
        "repo": "mem0ai/mem0",
        "url": "https://github.com/mem0ai/mem0",
        "stars": 56500,
        "forks": "6400",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/58-mem0-agent-memory.md",
        "pattern": "用户/会话/Agent 记忆 → 多信号检索 → agent runtime 插件化",
        "description": "通用 AI Agent 记忆层，提供用户、会话和 Agent 状态记忆，以及 OpenClaw、CLI、SDK 和 evaluation 支持。",
        "stack": [
            "Python",
            "TypeScript",
            "memory layer",
            "hybrid retrieval",
            "OpenClaw plugin"
        ],
        "category": "Agent 通用记忆层",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/mem0ai_mem0.md",
        "status": "verified",
        "tags": [
            "反思记忆",
            "Agent记忆",
            "OpenClaw",
            "多信号检索",
            "SDK"
        ]
    },
    {
        "name": "TiMem",
        "repo": "TiMEM-AI/timem",
        "url": "https://github.com/TiMEM-AI/timem",
        "stars": 134,
        "forks": "8",
        "language": "Python",
        "license": "NOASSERTION",
        "report": "projects/59-timem-temporal-memory.md",
        "pattern": "时间层级记忆树 → 语义巩固 → 复杂度自适应召回",
        "description": "Temporal-Hierarchical Memory Consolidation 项目，用五层 Temporal Memory Tree 组织长程对话记忆并支持云服务与自托管部署。",
        "stack": [
            "Python",
            "Temporal Memory Tree",
            "cloud service",
            "self-hosted memory",
            "long-horizon conversation"
        ],
        "category": "长程 Agent 时间记忆",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/timem-ai_timem.md",
        "status": "verified",
        "tags": [
            "反思记忆",
            "时间记忆",
            "长程对话",
            "LoCoMo",
            "LongMemEval"
        ]
    },
    {
        "name": "AMA-Bench",
        "repo": "AMA-Bench/AMA-Bench",
        "url": "https://github.com/AMA-Bench/AMA-Bench",
        "stars": 40,
        "forks": "8",
        "language": "Python",
        "license": "MIT",
        "report": "projects/60-ama-bench-memory-evaluation.md",
        "pattern": "长轨迹 → 记忆构建/检索接口 → QA/MCQ → LLM-as-judge 与 leaderboard",
        "description": "面向 agentic applications 的长程记忆 benchmark，评估方法是否能从长 agent 轨迹构建记忆、召回证据并回答问题。",
        "stack": [
            "Python",
            "memory benchmark",
            "LLM judge",
            "trajectory QA",
            "Hugging Face dataset"
        ],
        "category": "Agent 长程记忆基准",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/ama-bench_ama-bench.md",
        "status": "verified",
        "tags": [
            "评估器/打分器",
            "反思记忆",
            "长程轨迹",
            "LLM Judge",
            "Leaderboard"
        ]
    },
    {
        "name": "Agent Skills Directory",
        "repo": "dmgrok/agent_skills_directory",
        "url": "https://github.com/dmgrok/agent_skills_directory",
        "stars": 16,
        "forks": "2",
        "language": "Python",
        "license": "MIT",
        "report": "projects/61-agent-skills-directory.md",
        "pattern": "技能目录聚合 → 质量/维护/安全评分 → 项目相关性推荐",
        "description": "AI Agent skills 发现与安装目录，聚合 40+ providers、130+ curated skills，并提供本地质量评分、维护状态和安全扫描。",
        "stack": [
            "Python",
            "CLI",
            "skill catalog",
            "quality scoring",
            "security scan"
        ],
        "category": "Agent 技能发现索引",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/dmgrok_agent_skills_directory.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "资源索引",
            "质量评分",
            "安全扫描",
            "CLI"
        ]
    },
    {
        "name": "AceForge",
        "repo": "sudokrang/aceforge",
        "url": "https://github.com/sudokrang/aceforge",
        "stars": 1,
        "forks": "0",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/62-aceforge-skill-evolution.md",
        "pattern": "工具调用观察 → 模式提炼 → SKILL.md 生成 → adversarial validation → 人类批准",
        "description": "OpenClaw agent 的自进化技能引擎，观察工具调用、失败和用户修正，把模式提炼为可审计、人工批准的 SKILL.md。",
        "stack": [
            "TypeScript",
            "OpenClaw plugin",
            "SKILL.md",
            "dual-model pipeline",
            "adversarial validation"
        ],
        "category": "OpenClaw 技能自进化引擎",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/sudokrang_aceforge.md",
        "status": "verified",
        "tags": [
            "自进化Agent",
            "技能系统",
            "OpenClaw",
            "人类批准",
            "验证门控"
        ]
    },
    {
        "name": "EvoCUA",
        "repo": "meituan/EvoCUA",
        "url": "https://github.com/meituan/EvoCUA",
        "stars": 317,
        "forks": "23",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/63-evocua-computer-use-agent.md",
        "pattern": "GUI 多模态轨迹 → CUA 训练/评测 → OSWorld/WAA 跨环境泛化",
        "description": "美团 EvoCUA 计算机使用 Agent 项目，发布 EvoCUA-32B/8B 并在 OSWorld、WindowsAgentArena 等 GUI 自动化评测上报告结果。",
        "stack": [
            "Python",
            "computer-use agent",
            "multimodal model",
            "OSWorld",
            "WindowsAgentArena"
        ],
        "category": "Computer Use Agent 进化模型",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/meituan_evocua.md",
        "status": "verified",
        "tags": [
            "自进化Agent",
            "Computer Use Agent",
            "OSWorld",
            "多模态",
            "GUI自动化"
        ]
    },
    {
        "name": "Anthropic Skills",
        "repo": "anthropics/skills",
        "url": "https://github.com/anthropics/skills",
        "stars": 140000,
        "forks": "16500",
        "language": "Python",
        "license": "Mixed: Apache-2.0/source-available",
        "report": "projects/64-anthropic-skills.md",
        "pattern": "官方技能规范 -> 示例技能 -> Claude Code/Claude API 加载",
        "description": "Anthropic 官方 Agent Skills 公共仓库，提供技能规范、模板、示例技能与 Claude Code 插件市场安装入口，是技能生态的上游参考实现。",
        "stack": [
            "Python",
            "SKILL.md",
            "Claude Code plugin marketplace",
            "document skills",
            "template skills"
        ],
        "category": "官方 Agent Skills 标准样例库",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/anthropics_skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "官方规范",
            "Claude Code",
            "SKILL.md",
            "插件市场"
        ]
    },
    {
        "name": "Awesome Claude Skills",
        "repo": "ComposioHQ/awesome-claude-skills",
        "url": "https://github.com/ComposioHQ/awesome-claude-skills",
        "stars": 61500,
        "forks": "6700",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/65-awesome-claude-skills.md",
        "pattern": "社区技能目录 -> 分类/用例 -> 跨 Codex/Claude/Cursor/Gemini 复用",
        "description": "Composio 维护的 Claude Skills/agent skills 大型索引，覆盖生产技能、插件、SaaS workflow、MCP/Rube 集成和跨 coding agent 复用场景。",
        "stack": [
            "Python",
            "SKILL.md",
            "Claude Skills",
            "Composio/Rube MCP",
            "curated awesome list"
        ],
        "category": "Agent Skills 社区资源索引",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/composiohq_awesome-claude-skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "资源索引",
            "Claude Skills",
            "Codex",
            "MCP"
        ]
    },
    {
        "name": "Microsoft Agent Skills",
        "repo": "MicrosoftDocs/Agent-Skills",
        "url": "https://github.com/MicrosoftDocs/Agent-Skills",
        "stars": 557,
        "forks": "56",
        "language": "Markdown",
        "license": "CC-BY-4.0 + MIT",
        "report": "projects/66-microsoft-agent-skills.md",
        "pattern": "Microsoft Learn 文档 -> 技能扫描/分类 -> coding agent 按需加载",
        "description": "MicrosoftDocs 的 Azure Agent Skills 仓库，把 Microsoft Learn/Azure 文档组织为 SKILL.md 技能，服务 Copilot、Codex、Claude Code、Cursor 等 coding agents。",
        "stack": [
            "Markdown",
            "SKILL.md",
            "Microsoft Learn",
            "Azure documentation",
            "GitHub Copilot"
        ],
        "category": "企业文档驱动 Agent Skills",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/microsoftdocs_agent-skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "Microsoft Learn",
            "Azure",
            "企业文档",
            "渐进披露"
        ]
    },
    {
        "name": "Scientific Agent Skills",
        "repo": "K-Dense-AI/scientific-agent-skills",
        "url": "https://github.com/K-Dense-AI/scientific-agent-skills",
        "stars": 25500,
        "forks": "2700",
        "language": "Python",
        "license": "MIT",
        "report": "projects/67-scientific-agent-skills.md",
        "pattern": "科研任务域 -> 技能包/数据库接口 -> 多步科学工作流",
        "description": "K-Dense 的 Scientific Agent Skills 把生物、化学、医学、材料、地理、数据分析等科研工具和数据库组织为可安装技能，面向 AI co-scientist 工作流。",
        "stack": [
            "Python",
            "SKILL.md",
            "scientific databases",
            "uv",
            "security scanner"
        ],
        "category": "科研 Agent Skills 工作流库",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/k-dense-ai_scientific-agent-skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "科研Agent",
            "数据库",
            "AI Scientist",
            "安全扫描"
        ]
    },
    {
        "name": "Aden Hive",
        "repo": "aden-hive/hive",
        "url": "https://github.com/aden-hive/hive",
        "stars": 10400,
        "forks": "5700",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/68-aden-hive.md",
        "pattern": "目标描述 -> 自动生成 graph -> 执行/观测 -> 失败捕获 -> graph evolution",
        "description": "Aden Hive 是生产 AI 的 multi-agent harness，强调状态持久化、崩溃恢复、成本控制、审计轨迹、MCP 工具集成和失败驱动的 graph evolution。",
        "stack": [
            "Python",
            "TypeScript",
            "MCP tools",
            "graph executor",
            "cost controls"
        ],
        "category": "生产级 Multi-Agent Harness",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/aden-hive_hive.md",
        "status": "verified",
        "tags": [
            "Harness",
            "自进化Agent",
            "多Agent",
            "MCP",
            "生产运行时"
        ]
    },
    {
        "name": "SWE-Skills-Bench",
        "repo": "GeniusHTX/SWE-Skills-Bench",
        "url": "https://github.com/GeniusHTX/SWE-Skills-Bench",
        "stars": 42,
        "forks": "7",
        "language": "Python",
        "license": "MIT",
        "report": "projects/69-swe-skills-bench.md",
        "pattern": "49 SWE 任务 -> skill/no-skill 对照 -> Docker 执行 -> pass-rate/token/duration 对比",
        "description": "SWE-Skills-Bench 是评估 skill 文档注入是否提升真实软件工程任务表现的 benchmark，提供 49 个任务、skill/no-skill 对照运行和结果统计脚本。",
        "stack": [
            "Python",
            "Docker",
            "Claude Code CLI",
            "Hugging Face dataset",
            "pytest-style tests"
        ],
        "category": "Agent Skills 效果基准",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/geniushtx_swe-skills-bench.md",
        "status": "verified",
        "tags": [
            "评估器/打分器",
            "技能系统",
            "SWE benchmark",
            "对照实验",
            "Docker"
        ]
    },
    {
        "name": "LangMem",
        "repo": "langchain-ai/langmem",
        "url": "https://github.com/langchain-ai/langmem",
        "stars": 1500,
        "forks": "168",
        "language": "Python",
        "license": "MIT",
        "report": "projects/70-langmem-agent-memory.md",
        "pattern": "对话/交互 -> 记忆抽取 -> hot-path 工具检索 -> LangGraph 长期存储",
        "description": "LangChain 的 LangMem 帮助 agent 从交互中学习并适配用户，提供记忆抽取、prompt refinement、长期记忆管理工具和 LangGraph store 集成。",
        "stack": [
            "Python",
            "LangGraph",
            "long-term memory",
            "memory tools",
            "prompt refinement"
        ],
        "category": "Agent 长期记忆 SDK",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/langchain-ai_langmem.md",
        "status": "verified",
        "tags": [
            "记忆系统",
            "Agent自适应",
            "LangGraph",
            "长期记忆",
            "上下文进化"
        ]
    },
    {
        "name": "Graphiti",
        "repo": "getzep/graphiti",
        "url": "https://github.com/getzep/graphiti",
        "stars": 26500,
        "forks": "2600",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/71-graphiti-temporal-context-graphs.md",
        "pattern": "交互/企业数据 -> temporal context graph -> provenance/ontology -> agent 检索与 MCP memory",
        "description": "Graphiti 构建面向 AI agents 的 temporal context graph，持续集成交互、结构化/非结构化数据和外部信息，支持 provenance、时间查询、增量更新和 MCP server。",
        "stack": [
            "Python",
            "knowledge graph",
            "temporal memory",
            "MCP server",
            "Neo4j/FalkorDB"
        ],
        "category": "Temporal Context Graph Agent Memory",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/getzep_graphiti.md",
        "status": "verified",
        "tags": [
            "记忆系统",
            "知识图谱",
            "MCP",
            "时间上下文",
            "企业Agent"
        ]
    },
    {
        "name": "Memobase",
        "repo": "memodb-io/memobase",
        "url": "https://github.com/memodb-io/memobase",
        "stars": 2700,
        "forks": "212",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/72-memobase-user-profile-memory.md",
        "pattern": "聊天 blobs -> buffer 批处理 -> user profile/event timeline -> prompt context API",
        "description": "Memobase 是 profile-based long-term memory 系统，围绕用户画像、事件时间线、批处理 buffer 和 context API 给 LLM 应用提供可控、低延迟的长期记忆。",
        "stack": [
            "Python",
            "FastAPI",
            "Postgres",
            "Redis",
            "SDKs",
            "MCP"
        ],
        "category": "用户画像长期记忆后端",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/memodb-io_memobase.md",
        "status": "verified",
        "tags": [
            "记忆系统",
            "用户画像",
            "长期记忆",
            "LOCOMO",
            "MCP"
        ]
    },
    {
        "name": "OSWorld",
        "repo": "xlang-ai/OSWorld",
        "url": "https://github.com/xlang-ai/OSWorld",
        "stars": 2900,
        "forks": "463",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/73-osworld-computer-agent-benchmark.md",
        "pattern": "真实桌面任务 -> 虚拟机/云环境 -> multimodal agent actions -> benchmark result comparison",
        "description": "OSWorld 是 NeurIPS 2024 的真实计算机环境 multimodal agent benchmark，提供桌面环境、数据、运行脚本和 OSWorld-Verified 更新，用于衡量 CUA/GUI agent 能力。",
        "stack": [
            "Python",
            "VMware/VirtualBox",
            "Docker",
            "AWS/Azure",
            "multimodal agents"
        ],
        "category": "Computer-use Agent OS Benchmark",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/xlang-ai_osworld.md",
        "status": "verified",
        "tags": [
            "评估器/打分器",
            "Computer Use Agent",
            "GUI自动化",
            "OSWorld",
            "真实环境"
        ]
    },
    {
        "name": "WindowsAgentArena",
        "repo": "microsoft/WindowsAgentArena",
        "url": "https://github.com/microsoft/WindowsAgentArena",
        "stars": 861,
        "forks": "95",
        "language": "Python",
        "license": "MIT",
        "report": "projects/74-windows-agent-arena.md",
        "pattern": "Windows 11 VM/golden image -> multimodal OS agent -> scalable benchmark execution -> report metrics",
        "description": "Microsoft Windows Agent Arena 是面向多模态 OS agents 的 Windows 评测平台，使用 Docker、Windows 11 VM/golden image 和 OpenAI/Azure OpenAI endpoint 执行大规模 benchmark。",
        "stack": [
            "Python",
            "Docker",
            "Windows 11 VM",
            "OpenAI/Azure OpenAI",
            "OS agents"
        ],
        "category": "Windows OS Agent Benchmark",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/microsoft_windowsagentarena.md",
        "status": "verified",
        "tags": [
            "评估器/打分器",
            "WindowsAgentArena",
            "Computer Use Agent",
            "GUI自动化",
            "Microsoft"
        ]
    },
    {
        "name": "BrowserGym",
        "repo": "ServiceNow/BrowserGym",
        "url": "https://github.com/ServiceNow/BrowserGym",
        "stars": 1200,
        "forks": "174",
        "language": "Python",
        "license": "MIT",
        "report": "projects/75-browsergym-web-agent-benchmark.md",
        "pattern": "Gym environment -> browser task benchmarks -> agent loop -> reward/termination metrics",
        "description": "ServiceNow BrowserGym 是网页任务自动化的 Gym 环境，整合 MiniWoB、WebArena、VisualWebArena、WorkArena、AssistantBench、WebLINX、OpenApps、TimeWarp 等 web agent benchmark。",
        "stack": [
            "Python",
            "Gymnasium",
            "Playwright",
            "web benchmarks",
            "AgentLab"
        ],
        "category": "Web Agent Benchmark Gym",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/servicenow_browsergym.md",
        "status": "verified",
        "tags": [
            "评估器/打分器",
            "Web Agent",
            "BrowserGym",
            "WebArena",
            "WorkArena"
        ]
    },
    {
        "name": "agent-memory",
        "repo": "jayzeng/agentmemory",
        "url": "https://github.com/jayzeng/agentmemory",
        "stars": 5,
        "forks": "0",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/76-agentmemory-coding-agent-memory.md",
        "pattern": "agent turn -> local markdown memory -> qmd search -> selective context injection -> skill-installed recall",
        "description": "agent-memory 是面向 Claude Code、OpenAI Codex、Cursor 和 Agent CLI 的本地优先记忆 CLI，用 Markdown 文件保存长期事实、daily log、topic note 和 scratchpad，并用 qmd 做语义检索与上下文注入。",
        "stack": [
            "TypeScript",
            "Bun",
            "qmd",
            "Markdown files",
            "Claude/Codex/Cursor skills"
        ],
        "category": "Coding Agent Memory CLI",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/jayzeng_agentmemory.md",
        "status": "verified",
        "tags": [
            "记忆系统",
            "Coding Agent",
            "Codex",
            "Claude Code",
            "上下文注入"
        ]
    },
    {
        "name": "Agent Memory Benchmark",
        "repo": "vectorize-io/agent-memory-benchmark",
        "url": "https://github.com/vectorize-io/agent-memory-benchmark",
        "stars": 43,
        "forks": "15",
        "language": "Python",
        "license": "Unknown",
        "report": "projects/77-agent-memory-benchmark.md",
        "pattern": "dataset ingest -> memory provider retrieve -> answer generation -> judge scoring -> speed/token/cost comparison",
        "description": "AMB 是面向 agent memory 的公开 benchmark，强调可复现的评测 harness、judge prompts、answer prompts 和结果，并同时跟踪 accuracy、speed、token cost。",
        "stack": [
            "Python",
            "Vue",
            "Gemini judge",
            "memory providers",
            "benchmark UI"
        ],
        "category": "Agent Memory Benchmark",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/vectorize-io_agent-memory-benchmark.md",
        "status": "verified",
        "tags": [
            "评估器/打分器",
            "记忆系统",
            "Agent Memory",
            "成本评估",
            "Benchmark"
        ]
    },
    {
        "name": "memU",
        "repo": "NevaMind-AI/memU",
        "url": "https://github.com/NevaMind-AI/memU",
        "stars": 13700,
        "forks": "1000",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/78-memu-proactive-agent-memory.md",
        "pattern": "always-on interaction stream -> hierarchical memory filesystem -> intent inference -> proactive agent action",
        "description": "memU 是面向 24/7 proactive agents 的 memory framework，公开页面把它定位为 OpenClaw-like always-on assistant 的长期记忆底座，关注低 token 成本、用户意图理解和主动行动。",
        "stack": [
            "Python",
            "uv",
            "MCP",
            "custom LLM providers",
            "hierarchical memory"
        ],
        "category": "24/7 Proactive Agent Memory",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/nevamind-ai_memu.md",
        "status": "verified",
        "tags": [
            "记忆系统",
            "OpenClaw",
            "主动Agent",
            "MCP",
            "长期记忆"
        ]
    },
    {
        "name": "OneWave Claude Skills",
        "repo": "OneWave-AI/claude-skills",
        "url": "https://github.com/OneWave-AI/claude-skills",
        "stars": 154,
        "forks": "23",
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/80-onewave-claude-skills.md",
        "pattern": "task domain -> self-contained SKILL.md -> Claude Code install -> agent-army / specialist workflow execution",
        "description": "OneWave Claude Skills 是 production-ready Claude Code skills 库，覆盖业务、销售、工程、咨询和 AI agent architecture，并包含 agent-army 等多 agent 并行执行技能。",
        "stack": [
            "Markdown",
            "SKILL.md",
            "Claude Code",
            "agent-army",
            "business/dev/security skills"
        ],
        "category": "Production Claude Skills Library",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/onewave-ai_claude-skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "Claude Code",
            "多Agent",
            "工作流",
            "Agent工具"
        ]
    },
    {
        "name": "simota Agent Skills",
        "repo": "simota/agent-skills",
        "url": "https://github.com/simota/agent-skills",
        "stars": 39,
        "forks": "8",
        "language": "HTML",
        "license": "MIT",
        "report": "projects/81-simota-agent-skills-nexus.md",
        "pattern": "task request -> Nexus chain design -> specialist skill handoff -> platform-agnostic agent execution",
        "description": "simota/agent-skills 是跨 Claude Code、Codex CLI、Antigravity CLI 等平台的 agent skill collection，包含 Nexus Orchestrator 用于分析任务并设计 specialist agent chain。",
        "stack": [
            "HTML",
            "JavaScript",
            "CSS",
            "Shell",
            "SKILL.md",
            "Nexus orchestrator"
        ],
        "category": "Cross-Agent Skills and Nexus Orchestrator",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/simota_agent-skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "Codex CLI",
            "Claude Code",
            "Nexus",
            "多Agent"
        ]
    },
    {
        "name": "SkVM",
        "repo": "SJTU-IPADS/SkVM",
        "url": "https://github.com/SJTU-IPADS/SkVM",
        "stars": 480,
        "forks": "41",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/82-skvm-skill-virtual-machine.md",
        "pattern": "skill profile -> AOT compilation -> JIT optimization -> benchmark across harness/model pairs",
        "description": "SkVM 是面向 agent skills 的语言虚拟机，把技能编译、优化并运行到不同模型和 harness 上，使 skill 在 OpenClaw、Hermes、pi Agent 等环境里可迁移和可评测。",
        "stack": [
            "TypeScript",
            "Bun",
            "Agent Skills",
            "OpenClaw/Hermes adapters",
            "Benchmark runners"
        ],
        "category": "Skill Virtual Machine",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/sjtu-ipads_skvm.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "Harness",
            "Benchmark",
            "OpenClaw",
            "Hermes"
        ]
    },
    {
        "name": "OpenCrabs",
        "repo": "adolfousier/opencrabs",
        "url": "https://github.com/adolfousier/opencrabs",
        "stars": 755,
        "forks": "72",
        "language": "Rust",
        "license": "MIT",
        "report": "projects/83-opencrabs-self-improving-agent.md",
        "pattern": "local brain files -> procedural/episodic memory -> hybrid recall -> commands/tools/channels -> self-update hooks",
        "description": "OpenCrabs 是受 OpenClaw 启发的单二进制多渠道 AI agent，强调本地 brain files、memory search、custom commands、cron/background jobs 和 self-update 组成的自改进循环。",
        "stack": [
            "Rust",
            "Ratatui",
            "SQLite",
            "qmd",
            "Multi-provider LLM APIs"
        ],
        "category": "Self-Improving Terminal Agent",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/adolfousier_opencrabs.md",
        "status": "verified",
        "tags": [
            "自进化Agent",
            "OpenClaw Alternative",
            "记忆系统",
            "Rust",
            "多渠道Agent"
        ]
    },
    {
        "name": "SKILL-INJECT",
        "repo": "aisa-group/skill-inject",
        "url": "https://github.com/aisa-group/skill-inject",
        "stars": 73,
        "forks": "2",
        "language": "Python",
        "license": "See LICENSE",
        "report": "projects/84-skill-inject-agent-skill-security.md",
        "pattern": "skill file injection -> containerized agent run -> policy condition -> LLM judge/evaluation -> ablation comparison",
        "description": "SKILL-INJECT 是面向 agent skill 文件的安全 benchmark，用上下文/明显恶意注入、Docker agent 容器和多安全策略评估 Claude Code、Codex、Gemini CLI 等代理的技能文件攻击面。",
        "stack": [
            "Python",
            "Docker",
            "Claude Code",
            "Codex",
            "Gemini CLI"
        ],
        "category": "Agent Skill Security Benchmark",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/aisa-group_skill-inject.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "安全评测",
            "Prompt Injection",
            "Codex",
            "Claude Code"
        ]
    },
    {
        "name": "Hugging Face Skills",
        "repo": "huggingface/skills",
        "url": "https://github.com/huggingface/skills",
        "stars": 10600,
        "forks": "681",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/85-huggingface-skills.md",
        "pattern": "AI/ML task domain -> SKILL.md package -> agent marketplace/install path -> reusable HF workflow execution",
        "description": "huggingface/skills 是 Hugging Face 生态的 Agent Skills 仓库，提供 Codex、Claude Code、Gemini CLI、Cursor 可用的 HF CLI、数据集、评测、训练、论文发布等技能包。",
        "stack": [
            "Python",
            "Shell",
            "TypeScript",
            "Agent Skills",
            "Codex/Claude/Gemini/Cursor"
        ],
        "category": "Agent Skills Registry",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/huggingface_skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "Codex",
            "Claude Code",
            "Hugging Face",
            "Plugin Marketplace"
        ]
    },
    {
        "name": "SimpleMem / EvolveMem",
        "repo": "aiming-lab/SimpleMem",
        "url": "https://github.com/aiming-lab/SimpleMem",
        "stars": 3400,
        "forks": "347",
        "language": "Python",
        "license": "MIT",
        "report": "projects/86-simplemem-evolvemem-memory-stack.md",
        "pattern": "dialogue/media stream -> compressed memory units -> intent-aware retrieval -> EvolveMem optimize loop -> guarded config update",
        "description": "SimpleMem 把文本、多模态记忆和 EvolveMem 自进化检索放入同一 Python 包，用压缩记忆、意图检索规划和 AutoResearch 式优化循环提升 agent memory 的质量与成本表现。",
        "stack": [
            "Python",
            "MCP planned",
            "FAISS/BM25",
            "Knowledge graph",
            "LoCoMo/MemBench"
        ],
        "category": "Self-Evolving Agent Memory Stack",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/aiming-lab_simplemem.md",
        "status": "verified",
        "tags": [
            "记忆系统",
            "自进化检索",
            "EvolveMem",
            "MCP",
            "LoCoMo"
        ]
    },
    {
        "name": "Mem0 Memory Benchmarks",
        "repo": "mem0ai/memory-benchmarks",
        "url": "https://github.com/mem0ai/memory-benchmarks",
        "stars": 33,
        "forks": "9",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/87-mem0-memory-benchmarks.md",
        "pattern": "memory benchmark dataset -> ingest/search/evaluate pipeline -> answerer/judge scoring -> UI/results comparison",
        "description": "mem0ai/memory-benchmarks 是 memory-augmented LLM systems 的公开评测套件，覆盖 LOCOMO、LongMemEval 和 BEAM，并同时支持 Mem0 cloud 与 OSS self-hosted pipeline。",
        "stack": [
            "Python",
            "TypeScript",
            "Next.js",
            "Docker",
            "Qdrant/Mem0"
        ],
        "category": "Memory Benchmark Suite",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/mem0ai_memory-benchmarks.md",
        "status": "verified",
        "tags": [
            "评估器/打分器",
            "记忆系统",
            "LOCOMO",
            "LongMemEval",
            "BEAM"
        ]
    },
    {
        "name": "MemRL",
        "repo": "MemTensor/MemRL",
        "url": "https://github.com/MemTensor/MemRL",
        "stars": 117,
        "forks": "10",
        "language": "Python",
        "license": "MIT",
        "report": "projects/88-memrl-runtime-memory-rl.md",
        "pattern": "episodic memory -> two-phase retrieval -> environmental feedback -> runtime reinforcement update -> benchmark transfer",
        "description": "MemRL 是自进化 agent 的论文代码，用 episodic memory 上的 runtime reinforcement learning 代替参数微调，通过环境反馈筛选高效策略并在多个 benchmark 上验证持续改进。",
        "stack": [
            "Python",
            "YAML configs",
            "BigCodeBench",
            "ALFWorld",
            "Lifelong Agent Bench"
        ],
        "category": "Runtime Reinforcement Memory",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/memtensor_memrl.md",
        "status": "verified",
        "tags": [
            "记忆系统",
            "自进化Agent",
            "Runtime RL",
            "BigCodeBench",
            "ALFWorld"
        ]
    },
    {
        "name": "CORAL",
        "repo": "Human-Agent-Society/CORAL",
        "url": "https://github.com/Human-Agent-Society/CORAL",
        "stars": 667,
        "forks": "89",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/89-coral-multi-agent-evolution.md",
        "pattern": "task + grader -> isolated worktrees -> shared .coral/public state -> graded commits -> heartbeat reflect/consolidate/pivot -> multi-agent evolution",
        "description": "CORAL 是面向 open-ended discovery 的多代理自主演化基础设施，用隔离 git worktrees、共享状态目录、grader daemon、heartbeat prompt 和多 runtime 集成推动 agent teams 连续改进。",
        "stack": [
            "Python",
            "HTML",
            "TypeScript",
            "Git worktrees",
            "Grader daemon"
        ],
        "category": "Multi-Agent Evolution Infrastructure",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/human-agent-society_coral.md",
        "status": "verified",
        "tags": [
            "自进化Agent",
            "多Agent",
            "评估器/打分器",
            "Codex",
            "Claude Code"
        ]
    },
    {
        "name": "ScienceClaw",
        "repo": "beita6969/ScienceClaw",
        "url": "https://github.com/beita6969/ScienceClaw",
        "stars": 816,
        "forks": "90",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/90-scienceclaw-research-agent.md",
        "pattern": "research query -> field-specific skills -> persistent memory -> citation-checked analysis -> post-task reflection and skill evolution",
        "description": "ScienceClaw 是面向科学家的 self-evolving research agent，把 OpenClaw、长期记忆、285 个研究技能、领域适配和零幻觉引用约束组织成科研工作台。",
        "stack": [
            "TypeScript",
            "Python",
            "MCP",
            "LanceDB",
            "OpenClaw"
        ],
        "category": "Self-Evolving Research Agent",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/beita6969_scienceclaw.md",
        "status": "verified",
        "tags": [
            "科研Agent",
            "技能系统",
            "记忆系统",
            "OpenClaw",
            "引用校验"
        ]
    },
    {
        "name": "memsearch",
        "repo": "zilliztech/memsearch",
        "url": "https://github.com/zilliztech/memsearch",
        "stars": 1800,
        "forks": "169",
        "language": "Python",
        "license": "MIT",
        "report": "projects/91-memsearch-agent-memory.md",
        "pattern": "markdown memory files -> hybrid BM25/vector index -> agent recall context -> answer/writeback -> re-index or live watch",
        "description": "memsearch 是给 Claude Code、Codex、OpenClaw、OpenCode 等代理使用的 Markdown + Milvus 统一记忆层，支持索引、搜索、watch、compact 和平台插件。",
        "stack": [
            "Python",
            "Shell",
            "TypeScript",
            "Milvus",
            "Markdown"
        ],
        "category": "Agent Memory Search Layer",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/zilliztech_memsearch.md",
        "status": "verified",
        "tags": [
            "记忆系统",
            "Codex",
            "Claude Code",
            "OpenClaw",
            "Milvus"
        ]
    },
    {
        "name": "Awesome Agent Skills",
        "repo": "VoltAgent/awesome-agent-skills",
        "url": "https://github.com/VoltAgent/awesome-agent-skills",
        "stars": 22900,
        "forks": "2400",
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/92-awesome-agent-skills-index.md",
        "pattern": "official/community skill source -> curated skill index -> agent compatibility metadata -> install/read path -> reusable workflow execution",
        "description": "VoltAgent awesome-agent-skills 是跨 Claude Code、Codex、Gemini CLI、Cursor、GitHub Copilot、OpenCode 等 agent 的官方与社区技能索引，重点筛选真实团队使用的 Agent Skills。",
        "stack": [
            "Markdown",
            "Agent Skills",
            "Codex/Claude/Gemini/Cursor",
            "Community index"
        ],
        "category": "Agent Skills Registry",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/voltagent_awesome-agent-skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "Codex",
            "Claude Code",
            "Gemini CLI",
            "官方技能"
        ]
    },
    {
        "name": "swarmclaw",
        "repo": "swarmclawai/swarmclaw",
        "url": "https://github.com/swarmclawai/swarmclaw",
        "stars": 518,
        "forks": "103",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/93-swarmclaw-agent-runtime.md",
        "pattern": "agent runtime -> memory and MCP connectors -> schedules/delegation -> swarm workflows -> marketplace/feed/vault surfaces",
        "description": "swarmclaw 是 self-hosted agent runtime 与多代理框架，覆盖 agent memory、MCP tools、schedule、delegation、SwarmDock/SwarmFeed/SwarmVault 和 23+ LLM provider。",
        "stack": [
            "TypeScript",
            "JavaScript",
            "MCP",
            "Electron",
            "Agent runtime"
        ],
        "category": "Self-Hosted Agent Runtime",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/swarmclawai_swarmclaw.md",
        "status": "verified",
        "tags": [
            "多Agent",
            "记忆系统",
            "MCP",
            "调度",
            "OpenClaw"
        ]
    },
    {
        "name": "MOLT",
        "repo": "OiiOAI/MOLT",
        "url": "https://github.com/OiiOAI/MOLT",
        "stars": 0,
        "forks": "0",
        "language": "Shell",
        "license": "MIT",
        "report": "projects/94-molt-co-evolution-engine.md",
        "pattern": "multi-agent traces -> structural friction observation -> root-cause attribution -> evidence-backed findings -> protocol/memory/team evolution",
        "description": "MOLT 是 OpenClaw multi-agent systems 的 reflexive co-evolution engine，用结构化观察发现重复劳动、handoff 断裂、协议偏移和 memory 不读回等系统性摩擦。",
        "stack": [
            "Shell",
            "OpenClaw",
            "Claude Code Skill",
            "Observability protocol"
        ],
        "category": "Reflexive Co-Evolution Engine",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/oiioai_molt.md",
        "status": "verified",
        "tags": [
            "自进化Agent",
            "多Agent",
            "可观测性",
            "OpenClaw",
            "Claude Code Skill"
        ]
    },
    {
        "name": "OpenClaw Evolution Framework",
        "repo": "TerryFYL/openclaw-evolution-framework",
        "url": "https://github.com/TerryFYL/openclaw-evolution-framework",
        "stars": 4,
        "forks": "0",
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/95-openclaw-evolution-framework.md",
        "pattern": "cron trigger -> time/theme guard -> deep exploration -> markdown insight -> self-trigger next round -> summary report",
        "description": "OpenClaw Evolution Framework 用 cron 触发、自选主题轮转、markdown insight 输出、HITL checkpoint 和 self-trigger next round 组成 OpenClaw agent 的连续学习实验框架。",
        "stack": [
            "Markdown",
            "OpenClaw cron",
            "YAML config",
            "JSON job",
            "Markdown memory"
        ],
        "category": "Continuous Learning Harness",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/terryfyl_openclaw-evolution-framework.md",
        "status": "verified",
        "tags": [
            "自进化Agent",
            "OpenClaw",
            "Cron",
            "学习循环",
            "HITL"
        ]
    },
    {
        "name": "ClawBio",
        "repo": "ClawBio/ClawBio",
        "url": "https://github.com/ClawBio/ClawBio",
        "stars": 867,
        "forks": "174",
        "language": "Python",
        "license": "MIT",
        "report": "projects/96-clawbio-bioinformatics-skills.md",
        "pattern": "domain skill spec -> validated Python workflow -> reproducibility bundle -> benchmark scorer -> local-first agent execution",
        "description": "ClawBio 是 built on OpenClaw 的生物信息 Agent Skill Library，用 SKILL.md、Python workflow、demo data、reproducibility bundle 和 benchmark scorer 把专业分析变成可复现技能。",
        "stack": [
            "Python",
            "SKILL.md",
            "bioinformatics workflows",
            "benchmark scorer",
            "OpenClaw"
        ],
        "category": "Bioinformatics Agent Skill Library",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/clawbio_clawbio.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "生物信息",
            "OpenClaw",
            "可复现工作流",
            "Benchmark"
        ]
    },
    {
        "name": "EdgeClaw",
        "repo": "OpenBMB/EdgeClaw",
        "url": "https://github.com/OpenBMB/EdgeClaw",
        "stars": 1200,
        "forks": "70",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/97-edgeclaw-edge-cloud-agent.md",
        "pattern": "edge runtime -> cloud collaboration -> cost router -> memory engine -> skill/tool governance -> self-driven agent loop",
        "description": "EdgeClaw 是 OpenBMB 等机构基于 OpenClaw 的边云协同个人 AI Assistant，把 cost-aware routing、multi-layer memory、skill discovery、tool governance 和 sandbox 组织成个人 Agent runtime。",
        "stack": [
            "TypeScript",
            "OpenClaw",
            "edge-cloud runtime",
            "memory engine",
            "tool governance"
        ],
        "category": "Edge-Cloud Personal Agent Runtime",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/openbmb_edgeclaw.md",
        "status": "verified",
        "tags": [
            "个人Agent",
            "OpenClaw",
            "记忆系统",
            "技能发现",
            "边云协同"
        ]
    },
    {
        "name": "OpenClaw.NET",
        "repo": "clawdotnet/openclaw.net",
        "url": "https://github.com/clawdotnet/openclaw.net",
        "stars": 345,
        "forks": "66",
        "language": "C#",
        "license": "MIT",
        "report": "projects/98-openclaw-dotnet-runtime.md",
        "pattern": "self-hosted gateway -> OpenAI-compatible API -> tool execution -> MCP/memory topics -> NativeAOT deployment",
        "description": "OpenClaw.NET 是 self-hosted OpenClaw gateway 和 .NET agent runtime，强调 NativeAOT-friendly、OpenAI-compatible API、MCP、memory、tool execution 和 Microsoft Agent Framework 互操作。",
        "stack": [
            "C#",
            ".NET",
            "NativeAOT",
            "MCP",
            "Microsoft Agent Framework"
        ],
        "category": ".NET Self-Hosted Agent Runtime",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/clawdotnet_openclaw.net.md",
        "status": "verified",
        "tags": [
            "Agent运行时",
            ".NET",
            "OpenClaw",
            "MCP",
            "Self-hosted"
        ]
    },
    {
        "name": "JordanMcCann agentmemory",
        "repo": "JordanMcCann/agentmemory",
        "url": "https://github.com/JordanMcCann/agentmemory",
        "stars": 23,
        "forks": "2",
        "language": "Python",
        "license": "MIT",
        "report": "projects/99-jordanmccann-agentmemory-longmemeval.md",
        "pattern": "ingest sessions -> graph/vector/BM25 recall -> context build -> LongMemEval real-retrieval run -> legitimacy audit",
        "description": "JordanMcCann/agentmemory 是一个以 LongMemEval 96.20% world-record claim 为中心的 agent memory system，附带 LEGITIMACY.md、完整运行日志和 real-retrieval benchmark harness。",
        "stack": [
            "Python",
            "LongMemEval",
            "memory graph",
            "BM25/vector retrieval",
            "LLM judge"
        ],
        "category": "Agent Memory Benchmark Claim",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/jordanmccann_agentmemory.md",
        "status": "verified",
        "tags": [
            "Agent记忆",
            "LongMemEval",
            "Benchmark",
            "真实性审计",
            "检索记忆"
        ]
    },
    {
        "name": "ClawdMarket",
        "repo": "trillskillz/clawdmarket",
        "url": "https://github.com/trillskillz/clawdmarket",
        "stars": 2,
        "forks": "0",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/100-clawdmarket-agent-marketplace.md",
        "pattern": "agent discovery -> task/bid marketplace -> escrow/proof -> seller benchmark -> prompt variants -> judge selection -> lineage re-registration",
        "description": "ClawdMarket 是 agent-to-agent marketplace，把机器支付、A2A messaging、public proof、seller benchmark 和 Karpathy-style recursive self-improvement loop 放进同一个生产系统叙事。",
        "stack": [
            "Next.js",
            "TypeScript",
            "A2A",
            "MPP/x402",
            "LLM-as-judge"
        ],
        "category": "Agent-to-Agent Marketplace Evolution Loop",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/trillskillz_clawdmarket.md",
        "status": "verified",
        "tags": [
            "自进化Agent",
            "Agent市场",
            "A2A",
            "LLM-as-judge",
            "MPP/x402"
        ]
    },
    {
        "name": "Agent Teams",
        "repo": "jbrahy/meta-agent-teams",
        "url": "https://github.com/jbrahy/meta-agent-teams",
        "stars": 2,
        "forks": "0",
        "language": "Shell",
        "license": "AGPL-3.0",
        "report": "projects/101-agent-teams-git-backed-evolution.md",
        "pattern": "human feedback -> meta-agent proposes evolution -> auditor checks drift/regression -> git-backed history -> team prompt/role update",
        "description": "Agent Teams 是面向 self-improving AI agent teams 的开放框架，用 meta-agent、auditor、structured feedback loops 和 git-backed history 管理团队角色、规则、关系和演化原因。",
        "stack": [
            "Shell",
            "Markdown",
            "team-builder skill",
            "git history",
            "auditor agent"
        ],
        "category": "Self-Improving Agent Team Framework",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/jbrahy_meta-agent-teams.md",
        "status": "verified",
        "tags": [
            "多Agent",
            "自进化Agent",
            "Git-backed",
            "审计Agent",
            "反馈循环"
        ]
    },
    {
        "name": "Randroids Dojo Skills",
        "repo": "Randroids-Dojo/skills",
        "url": "https://github.com/Randroids-Dojo/skills",
        "stars": 33,
        "forks": "2",
        "language": "HTML/Shell/Python",
        "license": "MIT",
        "report": "projects/102-randroids-skills-agent-skill-loop.md",
        "pattern": "skill bundle -> plugin manifest -> Codex/Claude/OpenCode discovery -> reusable autonomous loop -> cross-agent install path",
        "description": "Randroids Dojo Skills 是面向 Claude Code、Codex CLI 和 OpenCode 的双格式技能库，把 randroid-loop、task tracking、game-dev skills 和 spiral scaffold 组织成可安装的 agent skill bundle。",
        "stack": [
            "HTML",
            "Shell",
            "Python",
            "SKILL.md",
            "Claude Code plugin"
        ],
        "category": "Agent Skill Loop Library",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/randroids-dojo_skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "Codex",
            "Claude Code",
            "OpenCode",
            "自循环工作流"
        ]
    },
    {
        "name": "Memori",
        "repo": "MemoriLabs/Memori",
        "url": "https://github.com/memorilabs/memori",
        "stars": 14900,
        "forks": "2300",
        "language": "Python/TypeScript",
        "license": "Apache-2.0",
        "report": "projects/103-memori-agent-native-memory.md",
        "pattern": "agent execution/conversation -> structured memory capture -> background augmentation -> recall on demand -> benchmarked context reduction",
        "description": "Memori 是 agent-native memory infrastructure，把 agent execution 和 conversation 转成结构化持久状态，并用 LoCoMo benchmark 报告记忆质量和上下文成本表现。",
        "stack": [
            "Python",
            "TypeScript",
            "Rust",
            "LoCoMo benchmark",
            "Memory MCP"
        ],
        "category": "Agent-Native Memory Infrastructure",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/memorilabs_memori.md",
        "status": "verified",
        "tags": [
            "Agent记忆",
            "长期记忆",
            "LoCoMo",
            "OpenClaw Memory",
            "状态管理"
        ]
    },
    {
        "name": "skills-supply",
        "repo": "803/skills-supply",
        "url": "https://github.com/803/skills-supply",
        "stars": 32,
        "forks": "1",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/104-skills-supply-cross-agent-skills.md",
        "pattern": "agents.toml manifest -> GitHub/plugin/local package source -> sk sync -> per-agent skill directories -> reconciled skill state",
        "description": "skills-supply 是跨 Claude Code、Amp、Codex、OpenCode、Factory 的 agent skill 管理 CLI，用 agents.toml 把技能包来源、同步和团队共享统一成一条供应链。",
        "stack": [
            "TypeScript",
            "agents.toml",
            "sk CLI",
            "Claude Code plugins",
            "Codex/OpenCode sync"
        ],
        "category": "Cross-Agent Skill Supply Chain",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/803_skills-supply.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "跨Agent",
            "Codex",
            "Claude Code",
            "工具链"
        ]
    },
    {
        "name": "AgentOS",
        "repo": "iii-experimental/agentos",
        "url": "https://github.com/iii-experimental/agentos",
        "stars": 145,
        "forks": "20",
        "language": "Rust/TypeScript/Python",
        "license": "Apache-2.0",
        "report": "projects/105-agentos-self-evolving-agent-os.md",
        "pattern": "narrow workers -> function registration -> trigger bus -> traces/state/retries -> dynamic function evolution loop",
        "description": "AgentOS 是 iii engine 上的 self-evolving agent OS，把 worker、function、trigger 三个原语放到统一 bus 上，并把 function generate/register/eval/feedback/promote 作为自进化路径。",
        "stack": [
            "Rust",
            "TypeScript",
            "Python",
            "iii engine",
            "workers/functions/triggers"
        ],
        "category": "Self-Evolving Agent Operating System",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/iii-experimental_agentos.md",
        "status": "verified",
        "tags": [
            "自进化Agent",
            "Agent运行时",
            "多Agent",
            "Rust",
            "Function Evolution"
        ]
    },
    {
        "name": "Qt AI Skills",
        "repo": "TheQtCompanyRnD/agent-skills",
        "url": "https://github.com/TheQtCompanyRnD/agent-skills",
        "stars": 171,
        "forks": "16",
        "language": "Python/C++/HTML",
        "license": "BSD-3-Clause",
        "report": "projects/106-qt-ai-skills.md",
        "pattern": "domain engineering standards -> SKILL.md skill directories -> deterministic lint rules -> parallel deep-analysis agents -> cross-tool install paths",
        "description": "Qt AI Skills 是 Qt 官方工程技能包，把 Qt C++/QML review、deterministic rules、parallel deep-analysis agents 和跨 Codex/Claude/Gemini/Copilot 安装路径放在同一仓库。",
        "stack": [
            "Python",
            "C++",
            "QML",
            "SKILL.md",
            "MkDocs"
        ],
        "category": "Industrial Agent Skill Pack",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/theqtcompanyrnd_agent-skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "工业工程",
            "Codex",
            "Claude Code",
            "Qt"
        ]
    },
    {
        "name": "chriscox Agent Skills",
        "repo": "chriscox/agent-skills",
        "url": "https://github.com/chriscox/agent-skills",
        "stars": 10,
        "forks": "2",
        "language": "Shell",
        "license": "MIT",
        "report": "projects/107-chriscox-agent-skills.md",
        "pattern": "reusable workflow skill -> install script -> project planner/docs sync -> orchestrator plus coding-agent sharing -> cross-team behavior consistency",
        "description": "chriscox/agent-skills 是可复用的 AI coding agent skill 库，重点覆盖 project-planner、docs-sync 和跨 Claude Code、Codex、Gemini CLI、OpenClaw 的共享工作流。",
        "stack": [
            "Shell",
            "SKILL.md",
            "Claude Code plugin",
            "Codex",
            "OpenClaw"
        ],
        "category": "Reusable Coding Agent Skills",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/chriscox_agent-skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "Codex",
            "Claude Code",
            "OpenClaw",
            "文档同步"
        ]
    },
    {
        "name": "Sediment",
        "repo": "rendro/sediment",
        "url": "https://github.com/rendro/sediment",
        "stars": 32,
        "forks": "5",
        "language": "Rust",
        "license": "MIT",
        "report": "projects/108-sediment-local-agent-memory.md",
        "pattern": "local memory store -> vector plus graph index -> scoped recall -> decay/trust rerank -> MCP clients",
        "description": "Sediment 是 local-first、MCP-native 的 agent semantic memory 层，用单文件 Rust binary 把向量检索、关系图、访问衰减、项目隔离和冲突检测组合成可本地运行的记忆系统。",
        "stack": [
            "Rust",
            "MCP",
            "LanceDB",
            "SQLite",
            "Candle embeddings"
        ],
        "category": "Local-First Agent Memory MCP",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/rendro_sediment.md",
        "status": "verified",
        "tags": [
            "Agent记忆",
            "MCP",
            "本地优先",
            "向量检索",
            "关系图"
        ]
    },
    {
        "name": "HAL Harness",
        "repo": "princeton-pli/hal-harness",
        "url": "https://github.com/princeton-pli/hal-harness",
        "stars": 289,
        "forks": "55",
        "language": "Python",
        "license": "Unknown",
        "report": "projects/109-hal-harness-agent-leaderboard.md",
        "pattern": "agent implementation -> hal-eval benchmark adapter -> parallel local/cloud runner -> traces/cost logs -> encrypted leaderboard upload",
        "description": "HAL Harness 是 Princeton PLI 的 holistic agent evaluation harness，用统一 CLI 在 SWE-bench、USACO、AppWorld、CORE-bench、tau-bench 等任务上比较 agent，同时记录成本、trace 和 leaderboard 提交流程。",
        "stack": [
            "Python",
            "hal-eval",
            "Weave",
            "Azure VM",
            "Docker"
        ],
        "category": "Holistic Agent Evaluation Harness",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/princeton-pli_hal-harness.md",
        "status": "verified",
        "tags": [
            "Agent评测",
            "Benchmark",
            "Leaderboard",
            "成本追踪",
            "Trace"
        ]
    },
    {
        "name": "Memoria",
        "repo": "matrixorigin/Memoria",
        "url": "https://github.com/matrixorigin/Memoria",
        "stars": 271,
        "forks": "36",
        "language": "Rust/TypeScript",
        "license": "Apache-2.0",
        "report": "projects/110-memoria-git-for-agent-memory.md",
        "pattern": "agent memory mutation -> snapshot/branch/merge/rollback -> contradiction detection -> audit trail -> consistent long-term context",
        "description": "Memoria 把 AI Agent memory 做成类似 Git 的可版本化基础设施，用 snapshot、branch、merge、rollback、语义检索和自治理规则降低幻觉并维护长期上下文一致性。",
        "stack": [
            "Rust",
            "TypeScript",
            "MatrixOne",
            "Copy-on-Write",
            "Memory governance"
        ],
        "category": "Versioned Agent Memory Infrastructure",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/matrixorigin_memoria.md",
        "status": "verified",
        "tags": [
            "Agent记忆",
            "版本控制",
            "审计轨迹",
            "长期上下文",
            "MatrixOne"
        ]
    },
    {
        "name": "MemoryAgentBench",
        "repo": "HUST-AI-HYZ/MemoryAgentBench",
        "url": "https://github.com/HUST-AI-HYZ/MemoryAgentBench",
        "stars": 341,
        "forks": "53",
        "language": "Python",
        "license": "MIT",
        "report": "projects/111-memoryagentbench-incremental-memory-eval.md",
        "pattern": "incremental multi-turn interaction -> memory injection -> repeated queries -> retrieval/learning/conflict metrics -> agent memory comparison",
        "description": "MemoryAgentBench 是 ICLR 2026 记忆评测代码库，用增量多轮交互测试 agent memory 的准确检索、测试时学习、长程理解和冲突解决能力。",
        "stack": [
            "Python",
            "LongMemEval",
            "EventQA",
            "FactConsolidation",
            "ICLR 2026"
        ],
        "category": "Incremental Agent Memory Benchmark",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/hust-ai-hyz_memoryagentbench.md",
        "status": "verified",
        "tags": [
            "Agent记忆",
            "评测",
            "ICLR 2026",
            "LongMemEval",
            "冲突解决"
        ]
    },
    {
        "name": "Agent Almanac",
        "repo": "pjt222/agent-almanac",
        "url": "https://github.com/pjt222/agent-almanac",
        "stars": 17,
        "forks": "2",
        "language": "R/JavaScript",
        "license": "MIT",
        "report": "projects/112-agent-almanac-skill-agent-team-index.md",
        "pattern": "skill/agent/team catalog -> symlink/install layout -> interactive visualization -> reusable engineering procedures",
        "description": "Agent Almanac 是 executable skills、specialist agents 和 pre-built teams 的索引库，用技能目录、agent/team 编排和交互可视化帮助 AI-assisted development 复用操作流程。",
        "stack": [
            "R",
            "JavaScript",
            "Claude Code",
            "Agent Skills",
            "Force graph"
        ],
        "category": "Executable Skill and Agent Almanac",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/pjt222_agent-almanac.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "Agent团队",
            "Claude Code",
            "可视化",
            "索引"
        ]
    },
    {
        "name": "psenger AI Agent Skills",
        "repo": "psenger/ai-agent-skills",
        "url": "https://github.com/psenger/ai-agent-skills",
        "stars": 3,
        "forks": "0",
        "language": "Python/HTML/Shell",
        "license": "MIT",
        "report": "projects/113-psenger-ai-agent-skills.md",
        "pattern": "skill standard -> curated skill packages -> npx/marketplace install -> cross-tool agent workflows",
        "description": "psenger/ai-agent-skills 是面向 Claude Code、Codex、Cursor 和 Agent Skills Open Standard 的 production-ready skill 包，强调 API、Git、Obsidian、架构评审和安全等工程场景。",
        "stack": [
            "Python",
            "HTML",
            "Shell",
            "Agent Skills Open Standard",
            "Claude/Codex/Cursor"
        ],
        "category": "Production Agent Skills Pack",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/psenger_ai-agent-skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "Codex",
            "Claude Code",
            "Cursor",
            "工程流程"
        ]
    },
    {
        "name": "OpenHands Benchmarks",
        "repo": "OpenHands/benchmarks",
        "url": "https://github.com/OpenHands/benchmarks",
        "stars": 85,
        "forks": "62",
        "language": "Python",
        "license": "MIT",
        "report": "projects/114-openhands-benchmarks.md",
        "pattern": "OpenHands agent -> benchmark adapter -> standardized evaluation pipeline -> migration to V1 Software Agent SDK",
        "description": "OpenHands Benchmarks 是 OpenHands V1 的 evaluation harness，用标准化 pipeline 测试软件工程、通用推理、Commit0 和 workplace safety 等真实任务上的 agent 能力。",
        "stack": [
            "Python",
            "Shell",
            "Jinja",
            "OpenHands SDK",
            "SWE-bench/GAIA/Commit0"
        ],
        "category": "OpenHands Agent Evaluation Harness",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/openhands_benchmarks.md",
        "status": "verified",
        "tags": [
            "Agent评测",
            "OpenHands",
            "SWE-bench",
            "GAIA",
            "软件工程"
        ]
    },
    {
        "name": "A-Evolve",
        "repo": "a-evo-lab/a-evolve",
        "url": "https://github.com/a-evo-lab/a-evolve",
        "stars": 552,
        "forks": "67",
        "language": "Python",
        "license": "MIT",
        "report": "projects/115-a-evolve-universal-agent-evolution.md",
        "pattern": "base agent -> benchmark adapter -> evolution loop -> workspace mutation over prompts/skills/memory -> benchmarked improved agent",
        "description": "A-Evolve 是通用 self-improving agent 基础设施：给定 base agent、benchmark 和 evolution algorithm，就把 prompt、skills、memory 等 agent workspace 文件作为可变状态进行迭代。",
        "stack": [
            "Python"
        ],
        "category": "Universal Self-Improving Agent Infrastructure",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/a-evo-lab_a-evolve.md",
        "status": "verified",
        "tags": [
            "Agent进化",
            "Benchmark适配",
            "技能变异",
            "SWE-bench",
            "MCP-Atlas"
        ]
    },
    {
        "name": "AutoResearchClaw",
        "repo": "aiming-lab/AutoResearchClaw",
        "url": "https://github.com/aiming-lab/AutoResearchClaw",
        "stars": 12600,
        "forks": "1500",
        "language": "Python",
        "license": "MIT",
        "report": "projects/116-autoresearchclaw-self-evolving-research-agent.md",
        "pattern": "research idea -> multi-agent debate -> sandbox experiment -> claim verification -> lessons/evolution -> paper deliverables",
        "description": "AutoResearchClaw 是从 research idea 到 paper 的自主/协作式科研 agent 管线，结合多 agent debate、实验沙箱、claim verification、HITL co-pilot、MetaClaw cross-run learning 和 ARC-Bench。",
        "stack": [
            "Python"
        ],
        "category": "Self-Evolving Research Agent Pipeline",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/aiming-lab_autoresearchclaw.md",
        "status": "verified",
        "tags": [
            "自主科研",
            "Self-evolving",
            "ARC-Bench",
            "多Agent辩论",
            "论文生成"
        ]
    },
    {
        "name": "MemOS",
        "repo": "memtensor/memos",
        "url": "https://github.com/memtensor/memos",
        "stars": 9400,
        "forks": "846",
        "language": "TypeScript/Python",
        "license": "Apache-2.0",
        "report": "projects/117-memos-self-evolving-memory-os.md",
        "pattern": "agent event/tool trace -> memory cube/API -> hybrid retrieval/governance -> skill/world-model crystallization -> reusable long-term memory",
        "description": "MemOS 是面向 LLM 和 Agent 的 memory operating system，把 memory API、memory cube、插件、dashboard 和 self-evolving memory layers 合成可治理的长期记忆基础设施。",
        "stack": [
            "TypeScript",
            "Python",
            "HTML",
            "JavaScript"
        ],
        "category": "Self-Evolving Memory OS",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/memtensor_memos.md",
        "status": "verified",
        "tags": [
            "Agent记忆",
            "Memory OS",
            "Skill evolution",
            "长期记忆",
            "OpenClaw"
        ]
    },
    {
        "name": "SkillLearnBench",
        "repo": "cxcscmu/SkillLearnBench",
        "url": "https://github.com/cxcscmu/SkillLearnBench",
        "stars": 21,
        "forks": "2",
        "language": "Python",
        "license": "MIT",
        "report": "projects/118-skilllearnbench-agent-skill-generation.md",
        "pattern": "skill generation method -> skill-dependent task suite -> containerized agent trials -> task/skill/trajectory metrics -> continual learning comparison",
        "description": "SkillLearnBench 是面向自动生成 agent skills 的 continual learning benchmark，覆盖真实任务、技能质量、轨迹质量和 task success。",
        "stack": [
            "Python"
        ],
        "category": "Agent Skill Continual-Learning Benchmark",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/cxcscmu_skilllearnbench.md",
        "status": "verified",
        "tags": [
            "技能生成",
            "持续学习",
            "Agent评测",
            "Skill quality",
            "Trajectory quality"
        ]
    },
    {
        "name": "AgentSkillOS",
        "repo": "ynulihao/AgentSkillOS",
        "url": "https://github.com/ynulihao/AgentSkillOS",
        "stars": 415,
        "forks": "49",
        "language": "HTML/Python",
        "license": "MIT",
        "report": "projects/119-agentskillos-skill-retrieval-orchestration.md",
        "pattern": "large skill ecosystem -> retrieval -> orchestration/composition -> batch execution -> benchmarked skill workflows",
        "description": "AgentSkillOS 把 200,000+ public skills 做成检索、组合和编排系统，并提供 30 个多格式 creative tasks 的 benchmark。",
        "stack": [
            "HTML",
            "Python",
            "JavaScript",
            "TypeScript"
        ],
        "category": "Agent Skill Retrieval and Orchestration OS",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/ynulihao_agentskillos.md",
        "status": "verified",
        "tags": [
            "技能检索",
            "技能编排",
            "Skill OS",
            "Benchmark",
            "Agent生态"
        ]
    },
    {
        "name": "STATE-Bench",
        "repo": "microsoft/STATE-Bench",
        "url": "https://github.com/microsoft/STATE-Bench",
        "stars": 25,
        "forks": "3",
        "language": "Python",
        "license": "MIT",
        "report": "projects/120-state-bench-agent-memory-evaluation.md",
        "pattern": "enterprise task suite -> sandbox database/tools/user simulator -> stateful agent execution -> deterministic assertions -> memory impact metrics",
        "description": "STATE-Bench 是 Microsoft 发布的 stateful agent task evaluation benchmark，用三类企业任务评估 memory 是否改善 agent 的可靠性、效率和多步执行。",
        "stack": [
            "Python"
        ],
        "category": "Stateful Agent Memory Benchmark",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/microsoft_state-bench.md",
        "status": "verified",
        "tags": [
            "Agent记忆",
            "企业任务",
            "评测",
            "Microsoft",
            "状态测试"
        ]
    },
    {
        "name": "OpenAI Skills",
        "repo": "openai/skills",
        "url": "https://github.com/openai/skills",
        "stars": 20100,
        "forks": "1.3k",
        "language": "Python/JavaScript/Shell",
        "license": "Per-skill LICENSE.txt",
        "report": "projects/121-openai-skills-codex-catalog.md",
        "pattern": "skill folder standard -> curated/experimental catalog -> skill-installer -> reusable Codex capabilities",
        "description": "OpenAI Skills 是 Codex 的官方 skills catalog，把可发现的说明、脚本和资源打包成可安装能力，成为 agent skill 生态的标准入口。",
        "stack": [
            "Python",
            "JavaScript",
            "Shell",
            "Codex",
            "Agent Skills"
        ],
        "category": "Codex Agent Skills Catalog",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/openai_skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "Codex",
            "OpenAI",
            "可复用能力",
            "标准目录"
        ]
    },
    {
        "name": "EvoSkill",
        "repo": "sentient-agi/EvoSkill",
        "url": "https://github.com/sentient-agi/EvoSkill",
        "stars": 798,
        "forks": "85",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/122-evoskill-automated-skill-discovery.md",
        "pattern": "failed trajectories -> skill/prompt mutation proposals -> held-out evaluation -> new agent program -> reusable skill transfer",
        "description": "EvoSkill 把失败轨迹转成可复用 agent skills 和 prompt mutations，用 benchmark 驱动 held-out evaluation，使 coding agent 从单 prompt 修订走向完整 agent program evolution。",
        "stack": [
            "Python",
            "Claude Code",
            "Codex CLI",
            "OpenCode",
            "OpenHands",
            "Harbor"
        ],
        "category": "Automated Agent Skill Discovery",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/sentient-agi_evoskill.md",
        "status": "verified",
        "tags": [
            "技能进化",
            "失败轨迹",
            "Agent进化",
            "Benchmark",
            "GEPA扩展"
        ]
    },
    {
        "name": "ICM",
        "repo": "rtk-ai/icm",
        "url": "https://github.com/rtk-ai/icm",
        "stars": 371,
        "forks": "35",
        "language": "Rust",
        "license": "Apache-2.0",
        "report": "projects/123-icm-permanent-agent-memory.md",
        "pattern": "agent conversation/tool trace -> single-binary local memory -> MCP/hooks recall -> persistent context across sessions",
        "description": "ICM 是 experimental 但实用的永久 agent memory 层，用 Rust 单二进制和 MCP native 接口让 coding agent 在会话之间保留长期上下文。",
        "stack": [
            "Rust",
            "MCP",
            "Single binary",
            "Hooks",
            "CLI"
        ],
        "category": "Permanent MCP-Native Agent Memory",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/rtk-ai_icm.md",
        "status": "verified",
        "tags": [
            "Agent记忆",
            "MCP",
            "本地优先",
            "长期上下文",
            "Rust"
        ]
    },
    {
        "name": "Callstack Agent Skills",
        "repo": "callstackincubator/agent-skills",
        "url": "https://github.com/callstackincubator/agent-skills",
        "stars": 1400,
        "forks": "100",
        "language": "TypeScript/Markdown",
        "license": "MIT",
        "report": "projects/124-callstack-agent-skills.md",
        "pattern": "domain engineering knowledge -> skills directory -> Claude/Codex plugin metadata -> reusable mobile-development agent workflows",
        "description": "Callstack Agent Skills 把 React Native、GitHub workflow、Actions、upgrade 和 brownfield migration 等移动工程经验封装成 Claude/Codex 可安装的 skills。",
        "stack": [
            "Agent Skills",
            "Claude plugin",
            "Codex plugin",
            "React Native",
            "GitHub Actions"
        ],
        "category": "React Native Agent Skills Pack",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/callstackincubator_agent-skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "React Native",
            "Codex插件",
            "Claude插件",
            "工程最佳实践"
        ]
    },
    {
        "name": "AI-Driven Development",
        "repo": "CodeAlive-AI/ai-driven-development",
        "url": "https://github.com/CodeAlive-AI/ai-driven-development",
        "stars": 74,
        "forks": "3",
        "language": "Markdown/Go",
        "license": "MIT",
        "report": "projects/125-ai-driven-development-skills-hooks.md",
        "pattern": "engineering practice taxonomy -> cross-agent skills -> safety hooks -> low-friction disciplined agent development workflow",
        "description": "AI-Driven Development 是跨 Claude Code、Codex CLI、OpenCode、Cursor、Gemini 等工具的 skills 与安全 hook 集合，把 bug fix、研究、MCP、subagents、安全和 repo exploration 变成可复用操作协议。",
        "stack": [
            "Agent Skills",
            "Claude Code",
            "Codex CLI",
            "OpenCode",
            "Cursor",
            "Go hooks"
        ],
        "category": "Cross-Agent Development Skills and Hooks",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/codealive-ai_ai-driven-development.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "安全Hook",
            "多Agent",
            "Codex",
            "工程流程"
        ]
    },
    {
        "name": "jakenuts Agent Skills",
        "repo": "jakenuts/agent-skills",
        "url": "https://github.com/jakenuts/agent-skills",
        "stars": 0,
        "forks": "0",
        "language": "Shell/PowerShell/Markdown",
        "license": "MIT",
        "report": "projects/126-jakenuts-agent-skills-toolkit.md",
        "pattern": "skill definitions + expert agents -> init detector -> deploy to Claude/Codex dirs -> on-demand dependencies and specialist invocation",
        "description": "jakenuts Agent Skills 是面向 Claude Code 与 OpenAI Codex CLI 的技能和专家 agent toolkit，用 init 脚本部署 skills/agents，并通过分层专家定义控制上下文成本。",
        "stack": [
            "Shell",
            "PowerShell",
            "Claude Code",
            "Codex CLI",
            "Expert agents"
        ],
        "category": "Agent Skills and Expert-Agent Toolkit",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/jakenuts_agent-skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "专家Agent",
            "Codex CLI",
            "Claude Code",
            "部署脚本"
        ]
    },
    {
        "name": "Agent Skills Kit",
        "repo": "jscraik/Agent-Skills",
        "url": "https://github.com/jscraik/Agent-Skills",
        "stars": 4,
        "forks": "4",
        "language": "TypeScript/Python/Shell/Markdown",
        "license": "Apache-2.0",
        "report": "projects/127-agent-skills-kit-control-plane.md",
        "pattern": "canonical skill source -> generated command handles -> runtime projections -> audits/evals/proof commands",
        "description": "Agent Skills Kit 是面向 Codex 和 AI coding agents 的技能控制平面，用 ask CLI、runtime projections、command handles、repo memory search 和 proof commands 管理技能质量与上下文成本。",
        "stack": [
            "Agent Skills",
            "Codex",
            "ask CLI",
            "Runtime projection",
            "Skill graph"
        ],
        "category": "Governed Agent Skills Control Plane",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/jscraik_agent-skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "Codex",
            "控制平面",
            "命令句柄",
            "质量证明"
        ]
    },
    {
        "name": "Deep Agents CLI Codex Skill",
        "repo": "Gitmaxd/deepagents-cli-codex-skill",
        "url": "https://github.com/Gitmaxd/deepagents-cli-codex-skill",
        "stars": 1,
        "forks": "0",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/128-deepagents-cli-codex-skill.md",
        "pattern": "Deep Agents CLI docs -> Codex skill scaffold -> structured references -> direct $deepagents-cli invocation",
        "description": "Deep Agents CLI Codex Skill 把 LangChain Deep Agents CLI 的命令、provider、memory、sandbox、streaming、SDK customization 和 Agent Client Protocol 知识封装成 Codex 可加载 skill。",
        "stack": [
            "TypeScript",
            "Codex Skill",
            "Deep Agents CLI",
            "LangChain",
            "LangGraph"
        ],
        "category": "Deep Agents Codex Skill Pack",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/gitmaxd_deepagents-cli-codex-skill.md",
        "status": "verified",
        "tags": [
            "Codex技能",
            "Deep Agents",
            "LangGraph",
            "持久记忆",
            "CLI知识封装"
        ]
    },
    {
        "name": "Vercel Skills CLI",
        "repo": "vercel-labs/skills",
        "url": "https://github.com/vercel-labs/skills",
        "stars": 19900,
        "forks": "1.6k",
        "language": "TypeScript/JavaScript",
        "license": "MIT",
        "report": "projects/129-vercel-skills-cli.md",
        "pattern": "GitHub/GitLab skill source -> npx skills installer -> host-specific agent skill directories -> shared skill ecosystem",
        "description": "Vercel Skills CLI 是开放 agent skills 生态的安装工具，支持 OpenCode、Claude Code、Codex、Cursor 等五十多个 agent，把 repo、URL、直接路径或 registry 中的技能安装到对应运行时。",
        "stack": [
            "TypeScript",
            "JavaScript",
            "npx skills",
            "Codex",
            "OpenCode",
            "Claude Code"
        ],
        "category": "Open Agent Skills Installer CLI",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/vercel-labs_skills.md",
        "status": "verified",
        "tags": [
            "技能安装器",
            "Codex",
            "OpenCode",
            "Claude Code",
            "生态工具"
        ]
    },
    {
        "name": "Neo4j Agent Memory",
        "repo": "neo4j-labs/agent-memory",
        "url": "https://github.com/neo4j-labs/agent-memory",
        "stars": 262,
        "forks": "63",
        "language": "Python/TypeScript",
        "license": "Apache-2.0",
        "report": "projects/130-neo4j-agent-memory.md",
        "pattern": "conversation/reasoning trace -> Neo4j knowledge graph memory -> MCP/SDK context retrieval -> eval harness and audit edges",
        "description": "Neo4j Agent Memory 是图原生 agent memory 系统，提供 Python/TypeScript SDK、MCP server、短期/长期/推理记忆、实体抽取、context graph、eval harness 和 reasoning trace audit edges。",
        "stack": [
            "Python",
            "TypeScript",
            "Neo4j",
            "MCP",
            "Knowledge graph"
        ],
        "category": "Graph-Native Agent Memory",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/neo4j-labs_agent-memory.md",
        "status": "verified",
        "tags": [
            "Agent记忆",
            "Neo4j",
            "知识图谱",
            "MCP",
            "评测"
        ]
    },
    {
        "name": "MCP Memory Service",
        "repo": "doobidoo/mcp-memory-service",
        "url": "https://github.com/doobidoo/mcp-memory-service",
        "stars": 1900,
        "forks": "291",
        "language": "Python/JavaScript/Shell",
        "license": "Apache-2.0",
        "report": "projects/131-mcp-memory-service.md",
        "pattern": "agent messages/decisions -> REST/MCP memory service -> knowledge graph + hybrid search -> shared cross-agent recall and coordination",
        "description": "MCP Memory Service 是面向 LangGraph、CrewAI、AutoGen、Claude、OpenCode、Codex CLI 等 agent 的共享记忆后端，提供 REST API、MCP、OAuth、dashboard、知识图谱和本地 embedding。",
        "stack": [
            "Python",
            "JavaScript",
            "MCP",
            "REST API",
            "Knowledge graph",
            "OAuth"
        ],
        "category": "Shared Agent Memory Service",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/doobidoo_mcp-memory-service.md",
        "status": "verified",
        "tags": [
            "共享记忆",
            "MCP",
            "REST API",
            "知识图谱",
            "多Agent协调"
        ]
    },
    {
        "name": "Microsoft Skills",
        "repo": "microsoft/skills",
        "url": "https://github.com/microsoft/skills",
        "stars": 2400,
        "forks": "266",
        "language": "TypeScript/Astro/JavaScript/Shell",
        "license": "MIT",
        "report": "projects/132-microsoft-skills.md",
        "pattern": "SDK docs + MCP configs + custom agents -> skill catalog -> acceptance scenarios -> coding-agent grounding for Azure/Microsoft work",
        "description": "Microsoft Skills 汇集 SDK skills、MCP servers、custom agents 和 AGENTS.md 模板，用于让 coding agents 在 Azure SDK、Microsoft AI Foundry 和 Microsoft 365 等场景中获得结构化、可测试的工程上下文。",
        "stack": [
            "TypeScript",
            "Astro",
            "JavaScript",
            "Shell",
            "Azure SDK",
            "MCP"
        ],
        "category": "Microsoft SDK Agent Skills Catalog",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/microsoft_skills.md",
        "status": "verified",
        "tags": [
            "技能系统",
            "Microsoft",
            "Azure SDK",
            "MCP",
            "测试场景"
        ]
    },
    {
        "name": "Tech Leads Club Agent Skills",
        "repo": "tech-leads-club/agent-skills",
        "url": "https://github.com/tech-leads-club/agent-skills",
        "stars": 4400,
        "forks": "376",
        "language": "TypeScript/Python",
        "license": "MIT / CC-BY-4.0 content",
        "report": "projects/133-tech-leads-agent-skills-registry.md",
        "pattern": "curated skill catalog -> security scan and lockfile integrity -> CLI install -> MCP progressive disclosure for coding agents",
        "description": "Tech Leads Club Agent Skills 是面向专业 AI coding agents 的安全技能注册表，提供 CLI 安装、缓存、审计日志、MCP progressive disclosure 和多 Agent 目标支持。",
        "stack": [
            "TypeScript",
            "Python",
            "JavaScript",
            "Shell",
            "MCP",
            "Nx"
        ],
        "category": "Secure Agent Skills Registry",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/tech-leads-club_agent-skills.md",
        "status": "verified",
        "tags": [
            "技能注册表",
            "安全扫描",
            "MCP",
            "Codex",
            "多Agent安装"
        ]
    },
    {
        "name": "jdrhyne Agent Skills",
        "repo": "jdrhyne/agent-skills",
        "url": "https://github.com/jdrhyne/agent-skills",
        "stars": 230,
        "forks": "27",
        "language": "Python/CSS/HTML/Shell",
        "license": "Unknown",
        "report": "projects/134-jdrhyne-agent-skills-pack.md",
        "pattern": "skills and prompts folders -> compatibility matrix -> direct copy/install -> Clawdbot Claude Code Codex workflows",
        "description": "jdrhyne Agent Skills 汇集 Clawdbot、Claude Code、Codex 和 OpenClaw 可用的技能与提示包，突出 context recovery、前端设计、报告生成和任务编排等可迁移工作流。",
        "stack": [
            "Python",
            "CSS",
            "HTML",
            "Shell",
            "JavaScript",
            "TypeScript"
        ],
        "category": "Portable Agent Skills Pack",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/jdrhyne_agent-skills.md",
        "status": "verified",
        "tags": [
            "技能包",
            "Codex",
            "OpenClaw",
            "上下文恢复",
            "提示与工作流"
        ]
    },
    {
        "name": "OpenSite Skills",
        "repo": "opensite-ai/opensite-skills",
        "url": "https://github.com/opensite-ai/opensite-skills",
        "stars": 7,
        "forks": "0",
        "language": "Python/Shell",
        "license": "Unknown",
        "report": "projects/135-opensite-skills-memory-sync.md",
        "pattern": "single skills repo -> cross-agent skill sync -> persistent cross-session memory -> Playwright cloud upload automation",
        "description": "OpenSite Skills 把 Claude、Codex、Cursor、Copilot 与 Perplexity Computer 的技能保持在一个 Git 真相源中，并加入跨会话记忆、RAG 与 Playwright 云端上传自动化。",
        "stack": [
            "Python",
            "Shell",
            "Playwright",
            "RAG",
            "Persistent memory"
        ],
        "category": "Cross-Agent Skills and Memory Sync",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/opensite-ai_opensite-skills.md",
        "status": "verified",
        "tags": [
            "跨Agent同步",
            "持久记忆",
            "RAG",
            "Playwright",
            "技能真相源"
        ]
    },
    {
        "name": "fast-agent",
        "repo": "evalstate/fast-agent",
        "url": "https://github.com/evalstate/fast-agent",
        "stars": 3800,
        "forks": "404",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/136-fast-agent-skills-mcp-acp.md",
        "pattern": "fast-agent CLI/TUI -> Skills registry -> MCP/ACP connections -> coding/evaluation workflow runtime",
        "description": "fast-agent 是面向编码、构建和评测 Agent 的 Python 运行时，集成 SKILL.md、MCP、ACP、shell 模式、/skills 管理和 /connect 工具连接。",
        "stack": [
            "Python",
            "MCP",
            "ACP",
            "TUI",
            "Agent Skills"
        ],
        "category": "Skills/MCP/ACP Agent Runtime",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/evalstate_fast-agent.md",
        "status": "verified",
        "tags": [
            "Agent运行时",
            "MCP",
            "ACP",
            "SKILL.md",
            "Codex pack"
        ]
    },
    {
        "name": "MCP Local RAG",
        "repo": "shinpr/mcp-local-rag",
        "url": "https://github.com/shinpr/mcp-local-rag",
        "stars": 275,
        "forks": "53",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/137-mcp-local-rag-agent-skills.md",
        "pattern": "local documents/code -> semantic plus keyword RAG -> MCP/CLI tools -> optional Codex/Claude skills for query and ingestion workflows",
        "description": "MCP Local RAG 是开发者本地优先的 RAG 服务器，用 TypeScript 提供 MCP/CLI、语义+关键词混合搜索、离线隐私保护和 Codex/Claude Agent Skills 安装。",
        "stack": [
            "TypeScript",
            "MCP",
            "RAG",
            "Vector search",
            "Agent Skills"
        ],
        "category": "Local-First RAG and Agent Skills",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/shinpr_mcp-local-rag.md",
        "status": "verified",
        "tags": [
            "本地RAG",
            "MCP",
            "Codex技能",
            "语义搜索",
            "隐私优先"
        ]
    },
    {
        "name": "Awesome Omni Skills",
        "repo": "diegosouzapw/awesome-omni-skills",
        "url": "https://github.com/diegosouzapw/awesome-omni-skills",
        "stars": 42,
        "forks": "11",
        "language": "Python/JavaScript/Shell",
        "license": "MIT / CC-BY-4.0 content",
        "report": "projects/138-awesome-omni-skills-runtime.md",
        "pattern": "native skill intake -> validation and curation -> CLI/API/MCP/A2A runtime surfaces -> multi-client skill installation",
        "description": "Awesome Omni Skills 是可安装的 AI coding skills 目录与运行时，把 SKILL.md、CLI、API、MCP、A2A、bundle、验证和多客户端安装统一成一个发布面。",
        "stack": [
            "Python",
            "JavaScript",
            "Shell",
            "TypeScript",
            "MCP",
            "A2A"
        ],
        "category": "Omni Skills CLI API MCP A2A Runtime",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/diegosouzapw_awesome-omni-skills.md",
        "status": "verified",
        "tags": [
            "技能目录",
            "MCP",
            "A2A",
            "Codex CLI",
            "验证管线"
        ]
    },
    {
        "name": "LightAgent",
        "repo": "wanxingai/LightAgent",
        "url": "https://github.com/wanxingai/LightAgent",
        "stars": 987,
        "forks": "127",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/139-lightagent-memory-mcp-skills.md",
        "pattern": "lightweight Python agent core -> memory/tool/MCP modules -> native skills -> self-learning multi-agent workflows",
        "description": "LightAgent 是轻量级 Python Agent 框架，把 Skills、持久记忆、MCP、Tree-of-Thought 和 multi-agent collaboration 组合成可快速嵌入的 self-learning runtime。",
        "stack": [
            "Python",
            "MCP",
            "mem0",
            "Agent Skills",
            "Tree of Thought"
        ],
        "category": "Memory/MCP Skill Agent Framework",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/wanxingai_lightagent.md",
        "status": "verified",
        "tags": [
            "Agent框架",
            "Skills",
            "MCP",
            "Memory",
            "Self-learning"
        ]
    },
    {
        "name": "Agent Skills Hub",
        "repo": "agent-skills-hub/agent-skills-hub",
        "url": "https://github.com/agent-skills-hub/agent-skills-hub",
        "stars": 40,
        "forks": "13",
        "language": "JavaScript",
        "license": "MIT",
        "report": "projects/140-agent-skills-hub-registry.md",
        "pattern": "skill catalog -> NPX installer -> per-agent install targets -> cross-agent reusable workflow instructions",
        "description": "Agent Skills Hub 是跨 Claude Code、Gemini、Cursor、Kiro、Codex、Antigravity、OpenCode 等工具的 skills 注册表和 NPX 安装器。",
        "stack": [
            "JavaScript",
            "Markdown",
            "NPX",
            "Agent Skills"
        ],
        "category": "Cross-Agent Skills Registry",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/agent-skills-hub_agent-skills-hub.md",
        "status": "verified",
        "tags": [
            "技能注册表",
            "Codex",
            "OpenClaw",
            "NPX",
            "跨Agent"
        ]
    },
    {
        "name": "thClaws",
        "repo": "thClaws/thClaws",
        "url": "https://github.com/thClaws/thClaws",
        "stars": 1000,
        "forks": "140",
        "language": "Rust",
        "license": "MIT OR Apache-2.0",
        "report": "projects/141-thclaws-agent-harness-platform.md",
        "pattern": "local Rust agent engine -> GUI/CLI/web surfaces -> MCP/tools/memory -> plugin-bundled skills and agents",
        "description": "thClaws 是本地优先的 Rust Agent harness 平台，用一个 engine 支撑 GUI、CLI、单次命令和 webapp，并把 skills、commands、agent definitions 与 MCP servers 作为可安装插件打包。",
        "stack": [
            "Rust",
            "MCP",
            "Plugin system",
            "Desktop GUI",
            "CLI"
        ],
        "category": "Local Agent Harness Platform",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/thclaws_thclaws.md",
        "status": "verified",
        "tags": [
            "Agent Harness",
            "Rust",
            "MCP",
            "Skills",
            "Local-first"
        ]
    },
    {
        "name": "Memento-Skills",
        "repo": "Memento-Teams/Memento-Skills",
        "url": "https://github.com/Memento-Teams/Memento-Skills",
        "stars": 1400,
        "forks": "157",
        "language": "Python",
        "license": "Unknown",
        "report": "projects/142-memento-skills-self-evolving-agent.md",
        "pattern": "task execution -> skill retrieval/generation -> reflection -> utility update or skill rewrite -> growing skill memory",
        "description": "Memento-Skills 是 deployment-time learning Agent 框架，让 Agent 在冻结模型参数的前提下通过 skill memory、失败反思和技能重写持续进化。",
        "stack": [
            "Python",
            "Skill memory",
            "Reflection loop",
            "CLI",
            "GUI"
        ],
        "category": "Self-Evolving Skill Memory Agent",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/memento-teams_memento-skills.md",
        "status": "verified",
        "tags": [
            "自进化Agent",
            "Skill memory",
            "Reflection",
            "HLE",
            "GAIA"
        ]
    },
    {
        "name": "OpenClaw Medical Skills",
        "repo": "FreedomIntelligence/OpenClaw-Medical-Skills",
        "url": "https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills",
        "stars": 2500,
        "forks": "357",
        "language": "Markdown",
        "license": "Unknown",
        "report": "projects/143-openclaw-medical-skills-library.md",
        "pattern": "domain skill corpus -> OpenClaw/NanoClaw install paths -> biomedical workflows -> specialized agent capability expansion",
        "description": "OpenClaw Medical Skills 是面向 OpenClaw/NanoClaw 的医学与生物信息 agent skills 库，用 869 个 SKILL.md 模块把数据库、API、临床和组学工作流接入通用 Agent。",
        "stack": [
            "Markdown",
            "SKILL.md",
            "OpenClaw",
            "NanoClaw",
            "Biomedical tools"
        ],
        "category": "Domain Agent Skills Library",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/freedomintelligence_openclaw-medical-skills.md",
        "status": "verified",
        "tags": [
            "OpenClaw",
            "Medical Skills",
            "Bioinformatics",
            "SKILL.md",
            "Domain skills"
        ]
    },
    {
        "name": "AgentSys",
        "repo": "agent-sh/agentsys",
        "url": "https://github.com/agent-sh/agentsys",
        "stars": 818,
        "forks": "90",
        "language": "JavaScript",
        "license": "MIT",
        "report": "projects/144-agentsys-agent-orchestration-runtime.md",
        "pattern": "plugins and agents -> phase-gated workflows -> persistent state -> review/CI/PR/delivery automation",
        "description": "AgentSys 是面向 Claude Code、OpenCode、Codex、Cursor 和 Kiro 的 agent orchestration runtime，把插件、agents、skills、phase gates、持久状态和交付流水线组织成可安装系统。",
        "stack": [
            "JavaScript",
            "Plugins",
            "Agents",
            "Skills",
            "Codex CLI"
        ],
        "category": "Agent Orchestration Runtime",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/agent-sh_agentsys.md",
        "status": "verified",
        "tags": [
            "Agent orchestration",
            "Codex CLI",
            "Skills",
            "Persistent state",
            "CI workflow"
        ]
    },
    {
        "name": "Harness Skills",
        "repo": "harness/harness-skills",
        "url": "https://github.com/harness/harness-skills",
        "stars": 20,
        "forks": "4",
        "language": "Shell",
        "license": "Apache-2.0",
        "report": "projects/145-harness-skills-cicd-agent-skills.md",
        "pattern": "repo-level agent instructions -> domain SKILL.md modules -> Harness MCP schema validation -> CI/CD creation/debug/governance workflows",
        "description": "Harness Skills 是面向 Claude Code、Codex、Cursor 和 GitHub Copilot 的 CI/CD agent skills 系统，把 Harness MCP、AGENTS.md、CLAUDE.md 与技能目录组合成可复用的交付工作流。",
        "stack": [
            "Markdown",
            "AGENTS.md",
            "Claude Code",
            "Codex",
            "Harness MCP"
        ],
        "category": "CI/CD Agent Skills System",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/harness_harness-skills.md",
        "status": "verified",
        "tags": [
            "CI/CD",
            "Agent Skills",
            "Codex",
            "Harness MCP",
            "Workflow governance"
        ]
    },
    {
        "name": "OpenHarness",
        "repo": "HKUDS/OpenHarness",
        "url": "https://github.com/HKUDS/OpenHarness",
        "stars": 13000,
        "forks": "2.2k",
        "language": "Python",
        "license": "MIT",
        "report": "projects/146-openharness-agent-harness-ohmo.md",
        "pattern": "agent loop -> tools/skills/plugins/permissions/hooks -> memory/tasks/coordinator -> CLI and React TUI surfaces",
        "description": "OpenHarness 是内置个人 Agent Ohmo 的开源 agent harness runtime，把 tool-use、skills、memory、多 Agent coordination、MCP 和安全权限系统组织成轻量基础设施。",
        "stack": [
            "Python",
            "MCP",
            "Skills",
            "Memory",
            "React TUI"
        ],
        "category": "Open Agent Harness Runtime",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/hkuds_openharness.md",
        "status": "verified",
        "tags": [
            "Agent Harness",
            "Skills",
            "Memory",
            "MCP",
            "Multi-agent"
        ]
    },
    {
        "name": "my-codex",
        "repo": "sehoon787/my-codex",
        "url": "https://github.com/sehoon787/my-codex",
        "stars": 16,
        "forks": "2",
        "language": "Shell/Markdown",
        "license": "MIT",
        "report": "projects/147-my-codex-agent-harness-pack.md",
        "pattern": "Codex plugin package -> Boss meta-orchestrator -> agent/skill discovery -> spawn_agent delegation -> verification loop",
        "description": "my-codex 是面向 OpenAI Codex CLI 的 agent harness 包，把 Boss 元编排器、Codex agents、skills、hooks 和 MCP servers 打包成一键安装的 specialist delegation 环境。",
        "stack": [
            "Codex CLI",
            "Agents",
            "Skills",
            "MCP",
            "Shell"
        ],
        "category": "Codex Agent Harness Pack",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/sehoon787_my-codex.md",
        "status": "verified",
        "tags": [
            "Codex CLI",
            "Agent harness",
            "Skills",
            "MCP",
            "Delegation"
        ]
    },
    {
        "name": "SkillRL",
        "repo": "aiming-lab/SkillRL",
        "url": "https://github.com/aiming-lab/SkillRL",
        "stars": 765,
        "forks": "59",
        "language": "Python",
        "license": "MIT",
        "report": "projects/148-skillrl-recursive-skill-rl.md",
        "pattern": "experience trajectories -> skill distillation -> hierarchical SKILLBANK -> validation-failure analysis -> recursive skill/policy co-evolution",
        "description": "SkillRL 是通过自动技能发现连接经验轨迹和策略改进的论文代码，把成功/失败轨迹压缩成层级技能库，并在 RL 中让技能库与 agent policy 递归共进化。",
        "stack": [
            "Python",
            "RL",
            "SkillBank",
            "ALFWorld",
            "WebShop"
        ],
        "category": "Recursive Skill-Augmented RL",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/aiming-lab_skillrl.md",
        "status": "verified",
        "tags": [
            "Skill evolution",
            "RL",
            "SkillBank",
            "ALFWorld",
            "WebShop"
        ]
    },
    {
        "name": "HEBBS",
        "repo": "hebbs-ai/hebbs-memory-engine",
        "url": "https://github.com/hebbs-ai/hebbs-memory-engine",
        "stars": 28,
        "forks": "4",
        "language": "Rust",
        "license": "Apache-2.0 / BSL",
        "report": "projects/149-hebbs-memory-engine.md",
        "pattern": "project files -> portable .hebbs cognition layer -> temporal/causal/analogical recall -> consolidation/decay -> agent skill surface",
        "description": "HEBBS 是面向 AI agents 的 Rust 记忆引擎，把项目旁路的 .hebbs cognition layer、四种召回、原生 consolidation、decay 与 Claude Code/OpenClaw skill surface 组合起来。",
        "stack": [
            "Rust",
            "Agent Memory",
            "Claude Code Skill",
            "OpenClaw Skill",
            "CLI"
        ],
        "category": "Agent Memory Engine",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/hebbs-ai_hebbs-memory-engine.md",
        "status": "verified",
        "tags": [
            "Memory substrate",
            "Rust",
            "Claude Code",
            "OpenClaw",
            "Recall strategies"
        ]
    },
    {
        "name": "MemSkill",
        "repo": "ViktorAxelsen/MemSkill",
        "url": "https://github.com/ViktorAxelsen/MemSkill",
        "stars": 484,
        "forks": "31",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/150-memskill-evolving-memory-skills.md",
        "pattern": "long-horizon interaction data -> skill-conditioned memory construction -> hard-case mining -> memory skill refinement/new skill proposals -> reusable skill bank",
        "description": "MemSkill 是学习并进化 long-horizon agent 记忆技能的框架，把记忆操作从静态手写规则变成由任务反馈驱动的 meta-memory skill bank。",
        "stack": [
            "Python",
            "Memory Skills",
            "ALFWorld",
            "LoCoMo",
            "LongMemEval"
        ],
        "category": "Evolving Memory Skills",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/viktoraxelsen_memskill.md",
        "status": "verified",
        "tags": [
            "Memory skills",
            "Self-evolving agents",
            "ALFWorld",
            "LoCoMo",
            "LongMemEval"
        ]
    },
    {
        "name": "Zylos Core",
        "repo": "zylos-ai/zylos-core",
        "url": "https://github.com/zylos-ai/zylos-core",
        "stars": 1400,
        "forks": "158",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/151-zylos-core-self-evolving-ai-teams.md",
        "pattern": "specialized agents -> shared memory/context -> marketplace tools -> autonomous improvement cycles -> team delivery surface",
        "description": "Zylos Core 是 self-evolving AI team platform，把专门化 agents、共享记忆、工具市场和交付界面组合成持续改进的团队运行时。",
        "stack": [
            "Python",
            "Docker",
            "Agent teams",
            "Memory",
            "Marketplace"
        ],
        "category": "Self-Evolving AI Team Platform",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/zylos-ai_zylos-core.md",
        "status": "verified",
        "tags": [
            "Self-evolving teams",
            "Agent runtime",
            "Memory",
            "Marketplace",
            "Automation"
        ]
    },
    {
        "name": "QuantaAlpha",
        "repo": "QuantaAlpha/QuantaAlpha",
        "url": "https://github.com/QuantaAlpha/QuantaAlpha",
        "stars": 702,
        "forks": "83",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/152-quantaalpha-evolutionary-repo-agent.md",
        "pattern": "repo understanding -> task decomposition -> evolutionary candidate generation -> evaluation feedback -> improved repository-level actions",
        "description": "QuantaAlpha 是面向 repository-level software tasks 的 evolutionary code/repo agent，和 SE-Agent、RepoMaster、GitTaskBench 共同形成真实仓库任务上的自改进链路。",
        "stack": [
            "Python",
            "Repository agents",
            "Evolutionary search",
            "Code intelligence"
        ],
        "category": "Evolutionary Repository Agent",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/quantaalpha_quantaalpha.md",
        "status": "verified",
        "tags": [
            "Evolutionary code agent",
            "Repository tasks",
            "SE-Agent ecosystem",
            "GitTaskBench",
            "RepoMaster"
        ]
    },
    {
        "name": "Skill Validator",
        "repo": "agent-ecosystem/skill-validator",
        "url": "https://github.com/agent-ecosystem/skill-validator",
        "stars": 47,
        "forks": "6",
        "language": "Python",
        "license": "MIT",
        "report": "projects/153-agent-ecosystem-skill-validator.md",
        "pattern": "skill package -> schema/security/style validation -> diagnostics -> registry quality gate",
        "description": "Skill Validator 是面向 Agent Skill 规范的验证工具，把 skill 包从“能被发现”推进到“可检查、可发布、可治理”的质量门。",
        "stack": [
            "Python",
            "Agent Skills",
            "Validation",
            "Security checks"
        ],
        "category": "Agent Skill Validation Tool",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/agent-ecosystem_skill-validator.md",
        "status": "verified",
        "tags": [
            "Agent Skills",
            "Validation",
            "Quality gate",
            "Security",
            "Registry"
        ]
    },
    {
        "name": "agent-skills-eval",
        "repo": "darkrishabh/agent-skills-eval",
        "url": "https://github.com/darkrishabh/agent-skills-eval",
        "stars": 34,
        "forks": "5",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/154-agent-skills-eval-benchmark.md",
        "pattern": "skill corpus -> task prompts -> execution/evaluation harness -> pass/fail evidence -> skill quality comparison",
        "description": "agent-skills-eval 是面向 agent skills 的轻量评测 harness，用任务执行和结果检查把技能目录转成可比较的质量证据。",
        "stack": [
            "TypeScript",
            "Agent Skills",
            "Evaluation harness",
            "Benchmark tasks"
        ],
        "category": "Agent Skills Evaluation Harness",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/darkrishabh_agent-skills-eval.md",
        "status": "verified",
        "tags": [
            "Agent Skills",
            "Evaluation",
            "Benchmark",
            "Harness",
            "Quality evidence"
        ]
    },
    {
        "name": "Baoyu Skills",
        "repo": "JimLiu/baoyu-skills",
        "url": "https://github.com/JimLiu/baoyu-skills",
        "stars": 339,
        "forks": "31",
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/155-baoyu-agent-skills-pack.md",
        "pattern": "curated skills -> per-agent installation paths -> reusable workflow instructions -> agent capability expansion",
        "description": "Baoyu Skills 是可安装到 Claude Code、Codex、OpenClaw 等 agent 工具的技能包，代表 agent capability 通过 Markdown/SKILL.md 资产流通的开源形态。",
        "stack": [
            "Markdown",
            "Agent Skills",
            "Claude Code",
            "Codex",
            "OpenClaw"
        ],
        "category": "Agent Skills Pack",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/jimliu_baoyu-skills.md",
        "status": "verified",
        "tags": [
            "Agent Skills",
            "Codex",
            "Claude Code",
            "OpenClaw",
            "Skill distribution"
        ]
    },
    {
        "name": "Claude Skills",
        "repo": "alirezarezvani/claude-skills",
        "url": "https://github.com/alirezarezvani/claude-skills",
        "stars": 214,
        "forks": "17",
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/156-alirezarezvani-claude-skills-pack.md",
        "pattern": "skill folders -> reusable workflow instructions -> install/use surface -> agent task specialization",
        "description": "alirezarezvani/claude-skills 是面向 Claude Skills 生态的公开技能包，用 Markdown 工作流指令沉淀可复用 agent 专长。",
        "stack": [
            "Markdown",
            "Claude Skills",
            "Workflow instructions",
            "Skill registry"
        ],
        "category": "Claude Skill Pack",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/alirezarezvani_claude-skills.md",
        "status": "verified",
        "tags": [
            "Claude Skills",
            "Agent Skills",
            "Markdown",
            "Skill pack",
            "Workflow reuse"
        ]
    },
    {
        "name": "Agent Skills Specification",
        "repo": "agentskills/agentskills",
        "url": "https://github.com/agentskills/agentskills",
        "stars": 19300,
        "forks": "1.2k",
        "language": "Python",
        "license": "Apache-2.0 / CC-BY-4.0 docs",
        "report": "projects/157-agentskills-open-standard.md",
        "pattern": "skill folder -> SKILL.md metadata and instructions -> progressive disclosure -> cross-product agent reuse",
        "description": "Agent Skills Specification 是 agent skills 生态的公开标准源，定义 SKILL.md、渐进式加载、脚本/参考资料/资产打包和跨 agent 复用边界。",
        "stack": [
            "Python",
            "Shell",
            "SKILL.md",
            "Specification"
        ],
        "category": "Agent Skills Open Standard",
        "lastPushed": "2026-05-25T00:18:20Z",
        "localPath": "raw-github/agentskills_agentskills.md",
        "status": "verified",
        "tags": [
            "Agent Skills",
            "Open standard",
            "SKILL.md",
            "Progressive disclosure",
            "Cross-agent reuse"
        ]
    },
    {
        "name": "Elastic Agent Skills",
        "repo": "elastic/agent-skills",
        "url": "https://github.com/elastic/agent-skills",
        "stars": 485,
        "forks": "34",
        "language": "JavaScript",
        "license": "Apache-2.0",
        "report": "projects/158-elastic-official-agent-skills.md",
        "pattern": "vendor domain expertise -> skill/plugin packaging -> installer/update flows -> agent-native Elastic operations",
        "description": "Elastic Agent Skills 是厂商官方技能库，把 Elastic 平台经验封装成符合 Agent Skills 开放标准的 agent 可加载工作流。",
        "stack": [
            "JavaScript",
            "Python",
            "Shell",
            "Elastic",
            "Agent Skills"
        ],
        "category": "Official Vendor Agent Skills",
        "lastPushed": "2026-05-25T00:18:20Z",
        "localPath": "raw-github/elastic_agent-skills.md",
        "status": "verified",
        "tags": [
            "Agent Skills",
            "Elastic",
            "Vendor skills",
            "Plugin",
            "Open standard"
        ]
    },
    {
        "name": "HOL Registry Skills",
        "repo": "hashgraph-online/registry-broker-skills",
        "url": "https://github.com/hashgraph-online/registry-broker-skills",
        "stars": 345,
        "forks": "5",
        "language": "TypeScript",
        "license": "Apache-2.0",
        "report": "projects/159-hol-registry-broker-skills.md",
        "pattern": "universal registry API -> SKILL.md bridge -> MCP/CLI search and publish flows -> agent discovery and registration",
        "description": "HOL Registry Skills 把 Universal Agentic Registry、MCP discovery、agent skills registry 和 skill package publishing 做成可被 Claude/Codex/OpenClaw 等 agent 使用的技能桥。",
        "stack": [
            "TypeScript",
            "JavaScript",
            "Shell",
            "MCP",
            "Agent registry"
        ],
        "category": "Agent Registry Skill Bridge",
        "lastPushed": "2026-05-25T00:18:20Z",
        "localPath": "raw-github/hashgraph-online_registry-broker-skills.md",
        "status": "verified",
        "tags": [
            "Agent registry",
            "MCP",
            "Agent Skills",
            "OpenClaw",
            "Codex"
        ]
    },
    {
        "name": "Skill Hunter",
        "repo": "CE0Alex/skill-hunter",
        "url": "https://github.com/CE0Alex/skill-hunter",
        "stars": 22,
        "forks": "0",
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/160-skill-hunter-agent-skill-recommender.md",
        "pattern": "repo scan -> clarifying questions -> registry search -> source/compatibility inspection -> recommended skill stack",
        "description": "Skill Hunter 是一个 meta-skill：它分析当前仓库并推荐最适合的外部 skill 栈，使 agent skills 从静态目录变成可验证、可匹配、可安装的能力选择流程。",
        "stack": [
            "Markdown",
            "Agent Skills",
            "Skill discovery",
            "Codex",
            "Claude"
        ],
        "category": "Agent Skill Discovery Skill",
        "lastPushed": "2026-05-25T00:18:20Z",
        "localPath": "raw-github/ce0alex_skill-hunter.md",
        "status": "verified",
        "tags": [
            "Skill discovery",
            "Agent Skills",
            "Codex",
            "Claude",
            "Verification"
        ]
    },
    {
        "name": "SkillClaw",
        "repo": "AMAP-ML/SkillClaw",
        "url": "https://github.com/AMAP-ML/SkillClaw",
        "stars": 1500,
        "forks": "137",
        "language": "Python",
        "license": "MIT",
        "report": "projects/161-skillclaw-collective-skill-evolution.md",
        "pattern": "agent session data -> proxy capture -> skill dedup/improvement/verification -> shared evolve server -> reused skills",
        "description": "SkillClaw 直接回应“skill 如何自进化”：它从真实 agent 会话中抽取、去重、验证并共享可复用 skills，让单用户和多 agent 团队都能把经验沉淀为演化资产。",
        "stack": [
            "Python",
            "JavaScript",
            "Skill evolution",
            "Hermes",
            "OpenClaw"
        ],
        "category": "Collective Skill Evolution",
        "lastPushed": "2026-05-25T00:18:20Z",
        "localPath": "raw-github/amap-ml_skillclaw.md",
        "status": "verified",
        "tags": [
            "Skill evolution",
            "OpenClaw",
            "Hermes",
            "Codex",
            "Claude Code"
        ]
    },
    {
        "name": "OpenSpace",
        "repo": "HKUDS/OpenSpace",
        "url": "https://github.com/HKUDS/OpenSpace",
        "stars": 6300,
        "forks": "780",
        "language": "Python",
        "license": "MIT",
        "report": "projects/162-openspace-self-evolving-skills.md",
        "pattern": "task execution -> skill selection/application -> quality monitoring -> auto-fix/auto-improve/auto-learn -> shared skill community",
        "description": "OpenSpace 把 skills 当作会选择、执行、监控、分析并演化的运行时实体，提供 OpenClaw、nanobot、Claude Code、Codex、Cursor 等 agent 的自进化技能层。",
        "stack": [
            "Python",
            "TypeScript",
            "React",
            "MCP",
            "Self-evolving skills"
        ],
        "category": "Self-Evolving Skill Runtime",
        "lastPushed": "2026-05-25T00:18:20Z",
        "localPath": "raw-github/hkuds_openspace.md",
        "status": "verified",
        "tags": [
            "Self-evolving skills",
            "MCP",
            "OpenClaw",
            "Codex",
            "Benchmark"
        ]
    },
    {
        "name": "COG Second Brain",
        "repo": "huytieu/COG-second-brain",
        "url": "https://github.com/huytieu/COG-second-brain",
        "stars": 486,
        "forks": "57",
        "language": "Shell",
        "license": "MIT",
        "report": "projects/163-cog-self-evolving-second-brain.md",
        "pattern": "markdown vault -> 17 skills -> 6 worker agents -> daily/weekly/monthly learning loops -> Git/Obsidian second brain",
        "description": "COG Second Brain 是把 agent skills、worker agents、Obsidian/Git markdown vault 和个人/团队知识流程合成的 self-evolving second brain 产品形态。",
        "stack": [
            "Shell",
            "Markdown",
            "Obsidian",
            "Agent Skills",
            "Worker agents"
        ],
        "category": "Self-Evolving Personal Memory System",
        "lastPushed": "2026-05-25T00:18:20Z",
        "localPath": "raw-github/huytieu_cog-second-brain.md",
        "status": "verified",
        "tags": [
            "Second brain",
            "Agent Skills",
            "Worker agents",
            "Memory",
            "Codex"
        ]
    },
    {
        "name": "Hippo Memory",
        "repo": "kitfunso/hippo-memory",
        "url": "https://github.com/kitfunso/hippo-memory",
        "stars": 675,
        "forks": "34",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/164-hippo-memory-biological-agent-memory.md",
        "pattern": "memory event -> decay/retrieval strengthening/consolidation -> LongMemEval and sequential-learning harness -> cross-agent transfer questions",
        "description": "Hippo Memory 是偏研究/工程混合的 agent memory 系统，重点在衰减、强化检索、巩固和可审计 benchmark，尤其适合比较 memory 是否带来随任务序列改进。",
        "stack": [
            "TypeScript",
            "HTML",
            "JavaScript",
            "Python",
            "Memory benchmarks"
        ],
        "category": "Agent Memory System",
        "lastPushed": "2026-05-25T00:18:20Z",
        "localPath": "raw-github/kitfunso_hippo-memory.md",
        "status": "verified",
        "tags": [
            "Agent memory",
            "LongMemEval",
            "Sequential learning",
            "Benchmark",
            "Audit trail"
        ]
    },
    {
        "name": "Awesome OpenClaw Skills",
        "repo": "sundial-org/awesome-openclaw-skills",
        "url": "https://github.com/sundial-org/awesome-openclaw-skills",
        "stars": 602,
        "forks": "83",
        "language": "Python",
        "license": "CC0-1.0",
        "report": "projects/165-awesome-openclaw-skills-index.md",
        "pattern": "OpenClaw ecosystem skills -> popularity/download curation -> install names -> domain categories -> agent capability discovery",
        "description": "Awesome OpenClaw Skills 是 OpenClaw skill 生态的热门技能索引，提供 913 个技能、下载/安装名和领域分类，是 public site 比较 skill marketplace 形态的补充证据。",
        "stack": [
            "Python",
            "JavaScript",
            "Shell",
            "TypeScript",
            "Rust"
        ],
        "category": "OpenClaw Skill Index",
        "lastPushed": "2026-05-25T00:18:20Z",
        "localPath": "raw-github/sundial-org_awesome-openclaw-skills.md",
        "status": "verified",
        "tags": [
            "OpenClaw",
            "Skill index",
            "Marketplace",
            "Agent Skills",
            "Discovery"
        ]
    },
    {
        "name": "EVOTEST",
        "repo": "yf-he/EvoTest",
        "url": "https://github.com/yf-he/EvoTest",
        "stars": 19,
        "forks": "1",
        "language": "Python",
        "license": "MIT",
        "report": "projects/166-evotest-evolutionary-test-time-learning.md",
        "pattern": "episode rollout -> failure/success memory -> evolver rewrites prompt/state extractor/hyperparameters -> next episode evaluation",
        "description": "EVOTEST 是面向 self-improving agentic systems 的 test-time evolution 框架，用 Jericho repeated episodes 检验无梯度、无微调条件下的 prompt、memory、state extractor 与工具策略演化。",
        "stack": [
            "Python",
            "Jericho",
            "OpenRouter/OpenAI API",
            "RAG",
            "Cross-episode memory"
        ],
        "category": "Evolutionary Test-Time Learning",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/yf-he_evotest.md",
        "status": "verified",
        "tags": [
            "Test-time evolution",
            "Self-improving agents",
            "Jericho",
            "Cross-episode memory",
            "Benchmark"
        ]
    },
    {
        "name": "agentic-stack",
        "repo": "codejunkie99/agentic-stack",
        "url": "https://github.com/codejunkie99/agentic-stack",
        "stars": 2000,
        "forks": "254",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/167-agentic-stack-portable-agent-memory-skills.md",
        "pattern": "portable .agent workspace -> adapters for agent harnesses -> local data layer -> memory/skills/protocol transfer -> flywheel artifacts",
        "description": "agentic-stack 把 memory、skills、protocols 和 harness adapters 放进可迁移的 `.agent/` 层，让 Claude Code、Cursor、OpenClaw、Codex、Gemini、Hermes 等工具共享同一套经验与技能。",
        "stack": [
            "Python",
            ".agent folder",
            "Memory",
            "Skills",
            "Adapters",
            "Dashboard"
        ],
        "category": "Portable Agent Memory and Skills Layer",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/codejunkie99_agentic-stack.md",
        "status": "verified",
        "tags": [
            "Agent memory",
            "Agent skills",
            "Portable harness",
            "Codex",
            "Flywheel artifacts"
        ]
    },
    {
        "name": "Harness",
        "repo": "revfactory/harness",
        "url": "https://github.com/revfactory/harness",
        "stars": 3500,
        "forks": "525",
        "language": "Markdown",
        "license": "Apache-2.0",
        "report": "projects/168-revfactory-harness-team-architecture-factory.md",
        "pattern": "domain sentence -> six team patterns -> generated agent definitions + generated skills -> validation and A/B harness comparison",
        "description": "revfactory/harness 是面向 Claude Code 的 team-architecture factory，把领域描述转成 agent team、skills、orchestration protocol 和验证流程，是 harness-as-meta-factory 的代表。",
        "stack": [
            "Claude Code plugin",
            "Agent teams",
            "Skills",
            "Architecture patterns",
            "Validation"
        ],
        "category": "Team-Architecture Harness Factory",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/revfactory_harness.md",
        "status": "verified",
        "tags": [
            "Harness factory",
            "Claude Code",
            "Agent teams",
            "Skills",
            "Meta-factory"
        ]
    },
    {
        "name": "oh-my-skills",
        "repo": "akillness/oh-my-skills",
        "url": "https://github.com/akillness/oh-my-skills",
        "stars": 16,
        "forks": "1",
        "language": "Markdown",
        "license": "Unknown",
        "report": "projects/169-oh-my-skills-cross-agent-skill-collection.md",
        "pattern": "local skill folders -> TOON/JEO orchestration protocol -> plan/execute/verify/cleanup skills -> cross-agent install prompts",
        "description": "oh-my-skills 是跨 Claude Code、Gemini CLI、Codex CLI 和 OpenCode 的技能集合，用 JEO 编排协议把 plan、execute、verify、cleanup、多 agent team coordination 变成可复用技能层。",
        "stack": [
            "Markdown",
            "TOON",
            "JEO",
            "Codex CLI",
            "Claude Code",
            "Gemini CLI"
        ],
        "category": "Cross-Agent Skill Collection",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/akillness_oh-my-skills.md",
        "status": "verified",
        "tags": [
            "Agent Skills",
            "Codex CLI",
            "Claude Code",
            "JEO",
            "Skill collection"
        ]
    },
    {
        "name": "OpenClaw Harness Engineering",
        "repo": "guixiang123124/openclaw-harness",
        "url": "https://github.com/guixiang123124/openclaw-harness",
        "stars": 3,
        "forks": "0",
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/170-openclaw-harness-engineering-factory.md",
        "pattern": "lead agent scouts repo -> SPRINT.md contract -> ACP builder agents -> weighted review -> iterate until pass -> ship/report",
        "description": "OpenClaw Harness Engineering 把 OpenClaw agent 包装成工程团队：Lead 规划 sprint，ACP Builder 实现，Lead/Reviewer 按功能、质量、安全、边界条件评分并迭代到可交付。",
        "stack": [
            "OpenClaw",
            "ACP",
            "Agent teams",
            "Skills",
            "Sprint templates"
        ],
        "category": "OpenClaw Harness Engineering",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/guixiang123124_openclaw-harness.md",
        "status": "verified",
        "tags": [
            "OpenClaw",
            "Harness engineering",
            "ACP",
            "Agent team",
            "Review loop"
        ]
    },
    {
        "name": "Codex CLI 1UP",
        "repo": "regenrek/codex-1up",
        "url": "https://github.com/regenrek/codex-1up",
        "stars": 430,
        "forks": "18",
        "language": "TypeScript/JavaScript",
        "license": "Unknown",
        "report": "projects/171-codex-1up-codex-cli-upgrade-kit.md",
        "pattern": "Codex install/update -> shell tool bootstrap -> AGENTS.md template -> config profiles -> bundled skills and ongoing maintenance commands",
        "description": "codex-1up 是 Codex CLI 增强包，把 Codex 安装/更新、常用 shell 工具、AGENTS.md、配置 profiles、通知和 skills 管理整合成可重复的 agent workstation bootstrap。",
        "stack": [
            "Codex CLI",
            "AGENTS.md",
            "Skills",
            "Shell tools",
            "Profiles"
        ],
        "category": "Codex CLI Upgrade Kit",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/regenrek_codex-1up.md",
        "status": "verified",
        "tags": [
            "Codex CLI",
            "AGENTS.md",
            "Skills",
            "Bootstrap",
            "Developer tools"
        ]
    },
    {
        "name": "dotnet-skills",
        "repo": "managedcode/dotnet-skills",
        "url": "https://github.com/managedcode/dotnet-skills",
        "stars": 403,
        "forks": "31",
        "language": "C#",
        "license": "MIT",
        "report": "projects/172-dotnet-skills-agent-skill-catalog.md",
        "pattern": "catalog packages -> SKILL.md/AGENT.md folders -> CLI recommend/install/update -> upstream watch -> daily catalog/site/tool release",
        "description": "dotnet-skills 是面向 Codex、Claude Code、GitHub Copilot、Gemini、Junie 的 .NET skill catalog 和 CLI，把现代 .NET 官方文档、包、agents 与 upstream watch 组合成可安装技能供应链。",
        "stack": [
            "C#",
            "Python",
            "PowerShell",
            "Codex skills",
            "Claude skills",
            "GitHub Pages"
        ],
        "category": ".NET Agent Skill Catalog",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/managedcode_dotnet-skills.md",
        "status": "verified",
        "tags": [
            ".NET",
            "Agent Skills",
            "Codex",
            "Claude Code",
            "Upstream watch"
        ]
    },
    {
        "name": "Honcho",
        "repo": "plastic-labs/honcho",
        "url": "https://github.com/plastic-labs/honcho",
        "stars": 4200,
        "forks": "488",
        "language": "Python",
        "license": "AGPL-3.0",
        "report": "projects/173-honcho-stateful-agent-memory.md",
        "pattern": "messages/events -> background reasoning -> peer/session representations -> context/search/chat endpoints -> agent injection",
        "description": "Honcho is memory infrastructure for stateful agents, modeling peers, sessions, messages, representations and background reasoning so agents can carry durable context across conversations and tools.",
        "stack": [
            "Python",
            "TypeScript",
            "FastAPI",
            "PostgreSQL",
            "MCP"
        ],
        "category": "Agent Memory Infrastructure",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/plastic-labs_honcho.md",
        "status": "verified",
        "tags": [
            "Agent memory",
            "Stateful agents",
            "Context engineering",
            "MCP",
            "Self-hosted"
        ]
    },
    {
        "name": "Hindsight",
        "repo": "vectorize-io/hindsight",
        "url": "https://github.com/vectorize-io/hindsight",
        "stars": 14400,
        "forks": "821",
        "language": "Python",
        "license": "MIT",
        "report": "projects/174-hindsight-agent-memory-that-learns.md",
        "pattern": "retain -> fact/entity/time extraction -> hybrid semantic/keyword/graph/temporal recall -> reflect -> learned mental models",
        "description": "Hindsight is an agent memory system focused on agents that learn over time, with retain/recall/reflect APIs, memory banks, hybrid retrieval and LongMemEval-style performance claims.",
        "stack": [
            "Python",
            "TypeScript",
            "Rust",
            "Docker",
            "BM25/vector/graph retrieval"
        ],
        "category": "Learning Agent Memory System",
        "lastPushed": "2026-05-14T00:00:00Z",
        "localPath": "raw-github/vectorize-io_hindsight.md",
        "status": "verified",
        "tags": [
            "Agent memory",
            "Learning loop",
            "Hybrid retrieval",
            "LongMemEval",
            "Reflect"
        ]
    },
    {
        "name": "Agentic Context Engine",
        "repo": "kayba-ai/agentic-context-engine",
        "url": "https://github.com/kayba-ai/agentic-context-engine",
        "stars": 2200,
        "forks": "273",
        "language": "Python",
        "license": "View license",
        "report": "projects/175-agentic-context-engine-experience-learning.md",
        "pattern": "task trace -> reflector -> skill manager -> skillbook update -> strategies injected into future agent runs",
        "description": "Agentic Context Engine adds a persistent learning loop for agents: it reflects on traces, records strategies in a skillbook and reinjects those strategies into future runs across CLI, browser and LangChain-style agents.",
        "stack": [
            "Python",
            "PydanticAI",
            "LiteLLM",
            "MCP",
            "browser-use"
        ],
        "category": "Agent Experience Learning Loop",
        "lastPushed": "2026-05-07T00:00:00Z",
        "localPath": "raw-github/kayba-ai_agentic-context-engine.md",
        "status": "verified",
        "tags": [
            "Self-improvement",
            "Trace learning",
            "Skillbook",
            "Claude Code",
            "Benchmark"
        ]
    },
    {
        "name": "TrustGraph",
        "repo": "trustgraph-ai/trustgraph",
        "url": "https://github.com/trustgraph-ai/trustgraph",
        "stars": 2100,
        "forks": "242",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/176-trustgraph-context-graph-agent-runtime.md",
        "pattern": "private domain data -> context graph -> memory/retrieval/orchestration/inference -> explainable grounded agent answers",
        "description": "TrustGraph is an agent runtime platform built around context graphs, combining knowledge graphs, memory, retrieval, orchestration and inference for precision-critical deployments.",
        "stack": [
            "Python",
            "RDF",
            "SPARQL",
            "Knowledge graph",
            "Agent runtime"
        ],
        "category": "Context Graph Agent Runtime",
        "lastPushed": "2026-05-11T00:00:00Z",
        "localPath": "raw-github/trustgraph-ai_trustgraph.md",
        "status": "verified",
        "tags": [
            "Context graph",
            "Agent runtime",
            "Knowledge graph",
            "Memory",
            "Retrieval"
        ]
    },
    {
        "name": "HaluMem",
        "repo": "MemTensor/HaluMem",
        "url": "https://github.com/MemTensor/HaluMem",
        "stars": 138,
        "forks": "14",
        "language": "Python",
        "license": "Unknown",
        "report": "projects/177-halumem-agent-memory-hallucination-benchmark.md",
        "pattern": "persona/life timeline -> synthetic sessions with distractors -> memory extraction/update/QA tasks -> hallucination leaderboard",
        "description": "HaluMem is an operation-level benchmark for hallucinations in memory systems, decomposing memory evaluation into extraction, update and question answering tasks with leaderboard comparisons.",
        "stack": [
            "Python",
            "Benchmark",
            "Memory extraction",
            "Memory update",
            "QA evaluation"
        ],
        "category": "Agent Memory Hallucination Benchmark",
        "lastPushed": "2025-11-01T00:00:00Z",
        "localPath": "raw-github/memtensor_halumem.md",
        "status": "verified",
        "tags": [
            "Benchmark",
            "Agent memory",
            "Hallucination evaluation",
            "Memory extraction",
            "Leaderboard"
        ]
    },
    {
        "name": "Planning with Files",
        "repo": "OthmanAdi/planning-with-files",
        "url": "https://github.com/OthmanAdi/planning-with-files",
        "stars": 22000,
        "forks": "2000",
        "language": "Python",
        "license": "MIT",
        "report": "projects/178-planning-with-files-agent-planning-skill.md",
        "pattern": "persistent markdown plan -> hook/session recovery -> attestation -> agent skill routing",
        "description": "Planning with Files is a cross-agent skill for persistent markdown planning, session recovery, plan attestation and platform-specific hooks across Claude Code, Codex, OpenCode, Gemini, Kiro and other agent runtimes.",
        "stack": [
            "Python",
            "Shell",
            "PowerShell",
            "TypeScript",
            "Agent Skills",
            "Hooks"
        ],
        "category": "Persistent Agent Planning Skill",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/othmanadi_planning-with-files.md",
        "status": "verified",
        "tags": [
            "Agent Skills",
            "Planning",
            "Context engineering",
            "Session recovery",
            "Codex hooks"
        ]
    },
    {
        "name": "ECC",
        "repo": "affaan-m/ECC",
        "url": "https://github.com/affaan-m/ECC",
        "stars": 191000,
        "forks": "29500",
        "language": "JavaScript",
        "license": "MIT",
        "report": "projects/179-ecc-agent-harness-optimization-system.md",
        "pattern": "skills + instincts + memory + hooks + context monitor -> coding-agent performance governance",
        "description": "ECC is an agent harness optimization system that packages skills, instincts, memory, security review, context monitoring and research-first workflows for Claude Code, Codex, OpenCode, Cursor and related coding agents.",
        "stack": [
            "JavaScript",
            "Rust",
            "Python",
            "Shell",
            "TypeScript",
            "Agent harness"
        ],
        "category": "Agent Harness Optimization System",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/affaan-m_ecc.md",
        "status": "verified",
        "tags": [
            "Agent harness",
            "Skills",
            "Memory",
            "Security",
            "Context management"
        ]
    },
    {
        "name": "vibe-codex",
        "repo": "kks0488/vibe-codex",
        "url": "https://github.com/kks0488/vibe-codex",
        "stars": 10,
        "forks": "0",
        "language": "JavaScript",
        "license": "Unknown",
        "report": "projects/180-vibe-codex-codex-skills-teams.md",
        "pattern": "Codex skills -> retry/self-heal loops -> agent teams JSON mailboxes -> completion proof",
        "description": "vibe-codex is a Codex-first skill bundle with retry, self-healing, completion proof, MCP docs setup and Codex-native agent team mailboxes for parallel research and implementation workflows.",
        "stack": [
            "JavaScript",
            "PowerShell",
            "Shell",
            "Codex Skills",
            "JSON mailboxes"
        ],
        "category": "Codex Skills and Agent Teams Kit",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/kks0488_vibe-codex.md",
        "status": "verified",
        "tags": [
            "Codex",
            "Agent Skills",
            "Agent teams",
            "Self-healing",
            "Completion proof"
        ]
    },
    {
        "name": "OpenCode Skills",
        "repo": "farmage/opencode-skills",
        "url": "https://github.com/farmage/opencode-skills",
        "stars": 28,
        "forks": "6",
        "language": "Python",
        "license": "MIT",
        "report": "projects/181-opencode-skills-workflow-commands.md",
        "pattern": "skill directories + workflow commands + validation tooling -> OpenCode execution surface",
        "description": "OpenCode Skills adapts a Claude-style skill library into 66 OpenCode skills plus workflow commands, installer, validation tooling, decision trees and Jira/Confluence MCP command workflows.",
        "stack": [
            "Python",
            "JavaScript",
            "Shell",
            "HTML",
            "Makefile",
            "Astro",
            "OpenCode"
        ],
        "category": "OpenCode Agent Skills and Workflow Commands",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/farmage_opencode-skills.md",
        "status": "verified",
        "tags": [
            "OpenCode",
            "Agent Skills",
            "Workflow commands",
            "MCP",
            "Validation"
        ]
    },
    {
        "name": "Agent Smith",
        "repo": "cyijun/agent-smith",
        "url": "https://github.com/cyijun/agent-smith",
        "stars": 18,
        "forks": "2",
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/182-agent-smith-directory-isolated-multi-agent.md",
        "pattern": "root task inbox -> recursive child agents -> directory isolation -> outbox aggregation",
        "description": "Agent Smith is a self-similar multi-agent collaboration protocol that decomposes work recursively while isolating each agent through inbox/private/outbox/children directories.",
        "stack": [
            "Markdown",
            "Claude Code Skill",
            "Directory protocol",
            "OpenCode",
            "OpenClaw"
        ],
        "category": "Directory-Isolated Multi-Agent Protocol",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/cyijun_agent-smith.md",
        "status": "verified",
        "tags": [
            "Multi-agent",
            "Directory isolation",
            "Task decomposition",
            "Agent Skills",
            "OpenClaw"
        ]
    },
    {
        "name": "Galyarder Framework",
        "repo": "galyarderlabs/galyarder-framework",
        "url": "https://github.com/galyarderlabs/galyarder-framework",
        "stars": 11,
        "forks": "2",
        "language": "Agent Skills",
        "license": "Unknown",
        "report": "projects/183-galyarder-agentic-skills-orchestration.md",
        "pattern": "department skills + commands + hooks -> universal plugin architecture -> mission execution",
        "description": "Galyarder Framework organizes agentic skills, commands, hooks and departments into a universal plugin architecture for Claude, Codex, OpenCode, Gemini and adjacent developer agents.",
        "stack": [
            "Agent Skills",
            "Commands",
            "Hooks",
            "Codex",
            "OpenCode",
            "Claude plugin"
        ],
        "category": "Agentic Skills Orchestration Framework",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/galyarderlabs_galyarder-framework.md",
        "status": "verified",
        "tags": [
            "Agent Skills",
            "Orchestration",
            "Codex",
            "OpenCode",
            "Plugin architecture"
        ]
    },
    {
        "name": "Thesis Skills",
        "repo": "quzhiii/thesis-skills",
        "url": "https://github.com/quzhiii/thesis-skills",
        "stars": 71,
        "forks": "6",
        "language": "Python",
        "license": "MIT",
        "report": "projects/184-thesis-skills-paper-workflow-skills.md",
        "pattern": "paper workflow skill modules -> reference/language/format checks -> compile/readiness gates",
        "description": "Thesis Skills is a deterministic paper workflow skill repository for Word-to-LaTeX migration, citation integrity, language checks, format validation, compile readiness and defense package preparation.",
        "stack": [
            "Python",
            "HTML",
            "CSS",
            "LaTeX",
            "Agent Skills"
        ],
        "category": "Paper Workflow Agent Skills",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/quzhiii_thesis-skills.md",
        "status": "verified",
        "tags": [
            "Agent Skills",
            "Paper workflow",
            "LaTeX",
            "Citation checks",
            "Readiness gates"
        ]
    },
    {
        "name": "PRB Agent Skills",
        "repo": "PaulRBerg/agent-skills",
        "url": "https://github.com/PaulRBerg/agent-skills",
        "stars": 59,
        "forks": "2",
        "language": "Shell",
        "license": "MIT",
        "report": "projects/185-prb-agent-skills-personal-codex-skill-pack.md",
        "pattern": "personal skill modules -> progressive disclosure -> repeatable coding workflows",
        "description": "PRB Agent Skills is a compact personal skill pack for Claude Code and Codex, with executable workflow guidance for review, commits, docs, release work and task execution.",
        "stack": [
            "Shell",
            "Just",
            "Agent Skills",
            "Codex",
            "Claude Code"
        ],
        "category": "Personal Codex Agent Skills Pack",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/paulrberg_agent-skills.md",
        "status": "verified",
        "tags": [
            "Agent Skills",
            "Codex",
            "Claude Code",
            "Personal workflow",
            "Skill supply"
        ]
    },
    {
        "name": "Awesome Codex Skills",
        "repo": "ComposioHQ/awesome-codex-skills",
        "url": "https://github.com/ComposioHQ/awesome-codex-skills",
        "stars": 11500,
        "forks": "1.1k",
        "language": "Python",
        "license": "Not observed",
        "report": "projects/186-awesome-codex-skills-automation-catalog.md",
        "pattern": "skill catalog -> installer path -> automation workflows across external tools",
        "description": "Awesome Codex Skills is a high-signal catalog of practical Codex skill folders for workflow automation, including Composio-backed actions across external services.",
        "stack": [
            "Python",
            "Markdown",
            "Codex Skills",
            "Composio",
            "Automation"
        ],
        "category": "Codex Skills Automation Catalog",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/composiohq_awesome-codex-skills.md",
        "status": "verified",
        "tags": [
            "Codex",
            "Agent Skills",
            "Automation",
            "Workflow catalog",
            "Composio"
        ]
    },
    {
        "name": "Eigent Agent Skills",
        "repo": "eigent-ai/agent-skills",
        "url": "https://github.com/eigent-ai/agent-skills",
        "stars": 10,
        "forks": "0",
        "language": "Markdown",
        "license": "Not observed",
        "report": "projects/187-eigent-agent-skills-cowork-collection.md",
        "pattern": "skill catalog -> category taxonomy -> agent cowork workflows",
        "description": "Eigent Agent Skills is an open cowork-agent skill collection that packages research, marketing, document, analytics, image/video and communication workflows as reusable agent skills.",
        "stack": [
            "Markdown",
            "Python",
            "TypeScript",
            "Agent Skills",
            "Workflow Skills"
        ],
        "category": "Cowork Agent Skills Collection",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/eigent-ai_agent-skills.md",
        "status": "verified",
        "tags": [
            "Agent Skills",
            "Research",
            "Marketing",
            "Documents",
            "Workflow catalog"
        ]
    },
    {
        "name": "AI Agent Skills",
        "repo": "MoizIbnYousaf/Ai-Agent-Skills",
        "url": "https://github.com/MoizIbnYousaf/Ai-Agent-Skills",
        "stars": 1100,
        "forks": "122",
        "language": "JavaScript",
        "license": "MIT",
        "report": "projects/188-ai-agent-skills-curated-library-cli.md",
        "pattern": "curated shelves -> provenance notes -> CLI/TUI install and library management",
        "description": "AI Agent Skills packages a curated skill library plus CLI/TUI workflows for building and managing smaller, provenance-aware agent skill shelves.",
        "stack": [
            "JavaScript",
            "HTML",
            "CLI",
            "TUI",
            "Agent Skills"
        ],
        "category": "Curated Agent Skills Library and CLI",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/moizibnyousaf_ai-agent-skills.md",
        "status": "verified",
        "tags": [
            "Agent Skills",
            "CLI",
            "TUI",
            "Provenance",
            "Skill curation"
        ]
    },
    {
        "name": "Arc",
        "repo": "howells/arc",
        "url": "https://github.com/howells/arc",
        "stars": 22,
        "forks": "2",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/189-arc-agent-workflow-plugin.md",
        "pattern": "vision/spec -> implementation/testing -> review/audit/refactor -> commit/launch",
        "description": "Arc is a self-contained software development lifecycle for coding agents, exposing Claude plugin commands and Codex skills/plugins for ideation, implementation, review, testing, launch readiness and commits.",
        "stack": [
            "TypeScript",
            "Markdown",
            "Codex plugin",
            "Claude plugin",
            "Agent Skills"
        ],
        "category": "Agent Workflow Plugin",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/howells_arc.md",
        "status": "verified",
        "tags": [
            "Codex",
            "Claude Code",
            "Workflow plugin",
            "Agent Skills",
            "TDD"
        ]
    },
    {
        "name": "Gentleman Skills",
        "repo": "Gentleman-Programming/Gentleman-Skills",
        "url": "https://github.com/Gentleman-Programming/Gentleman-Skills",
        "stars": 522,
        "forks": "79",
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/190-gentleman-skills-community-agent-patterns.md",
        "pattern": "curated/community skills -> SKILL template -> framework-specific coding patterns",
        "description": "Gentleman Skills is a community-driven set of AI agent skills for Claude Code, OpenCode, Gemini CLI, Cursor, VS Code Copilot, Codex and other assistants.",
        "stack": [
            "Markdown",
            "Agent Skills",
            "Claude Code",
            "OpenCode",
            "Codex"
        ],
        "category": "Community Agent Skills Patterns",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/gentleman-programming_gentleman-skills.md",
        "status": "verified",
        "tags": [
            "Agent Skills",
            "Community",
            "Frontend patterns",
            "Skill creation",
            "Codex"
        ]
    },
    {
        "name": "Together AI Skills",
        "repo": "togethercomputer/skills",
        "url": "https://github.com/togethercomputer/skills",
        "stars": 28,
        "forks": "5",
        "language": "Python",
        "license": "MIT",
        "report": "projects/191-together-ai-skills-provider-api-pack.md",
        "pattern": "provider API references -> runnable scripts -> agent skill routing for SDK usage",
        "description": "Together AI Skills packages provider-specific API and SDK knowledge into 12 agent skills covering inference, training, embeddings, audio, video, images, function calling and infrastructure.",
        "stack": [
            "Python",
            "TypeScript",
            "Together AI SDK",
            "Agent Skills",
            "API examples"
        ],
        "category": "Provider API Agent Skills Pack",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/togethercomputer_skills.md",
        "status": "verified",
        "tags": [
            "Agent Skills",
            "Provider API",
            "Codex",
            "Claude Code",
            "SDK examples"
        ]
    },
    {
        "name": "EvoMemBench",
        "repo": "DSAIL-Memory/EvoMemBench",
        "url": "https://github.com/DSAIL-Memory/EvoMemBench",
        "stars": 0,
        "forks": "0",
        "language": "Markdown",
        "license": "Apache-2.0",
        "report": "projects/192-evomembench-self-evolving-memory-benchmark.md",
        "pattern": "memory benchmark -> self-evolving perspective",
        "description": "EvoMemBench 是 2026-05 arXiv 论文配套的 agent memory benchmark，按 in-episode/cross-episode 与 knowledge/execution 两条轴评估记忆机制是否支持自演化 agent。",
        "stack": [
                  "Markdown"
        ],
        "category": "Self-Evolving Agent Memory Benchmark",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/dsail-memory_evomembench.md",
        "status": "candidate",
        "tags": [
                  "memory benchmark",
                  "self-evolving perspective",
                  "agent memory"
        ]
    },
    {
        "name": "Signet AI",
        "repo": "Signet-AI/signetai",
        "url": "https://github.com/Signet-AI/signetai",
        "stars": 167,
        "forks": "33",
        "language": "TypeScript",
        "license": "Apache-2.0",
        "report": "projects/193-signet-agent-context-substrate.md",
        "pattern": "ambient memory -> provenance -> cross-harness continuity",
        "description": "Signet 是 local-first agent context layer，把 identity、memory、provenance、secrets、skills 和工作知识放在可检查的 SQLite/文件记录中，支持 Claude Code、OpenCode、OpenClaw、Codex、Gemini CLI 等 harness。",
        "stack": [
                  "TypeScript",
                  "Bun",
                  "SQLite",
                  "MCP"
        ],
        "category": "Agent Context and Memory Substrate",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/signet-ai_signetai.md",
        "status": "candidate",
        "tags": [
                  "memory substrate",
                  "context continuity",
                  "mcp",
                  "codex"
        ]
    },
    {
        "name": "MemPalace",
        "repo": "MemPalace/mempalace",
        "url": "https://github.com/MemPalace/mempalace",
        "stars": 52800,
        "forks": "7000",
        "language": "Python",
        "license": "MIT",
        "report": "projects/194-mempalace-agent-memory-benchmark.md",
        "pattern": "verbatim memory -> scoped retrieval -> benchmarked recall",
        "description": "MemPalace 是 local-first agent memory system，强调 verbatim storage、可插拔检索、知识图谱和 MCP tools，并公开 LongMemEval/LoCoMo/ConvoMem/MemBench 复现实验说明。",
        "stack": [
                  "Python",
                  "ChromaDB",
                  "SQLite",
                  "MCP"
        ],
        "category": "Benchmarked Agent Memory System",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/mempalace_mempalace.md",
        "status": "candidate",
        "tags": [
                  "agent memory",
                  "LongMemEval",
                  "MCP",
                  "local-first"
        ]
    },
    {
        "name": "RASPUTIN Memory",
        "repo": "jcartu/rasputin-memory",
        "url": "https://github.com/jcartu/rasputin-memory",
        "stars": 33,
        "forks": "5",
        "language": "Python",
        "license": "MIT",
        "report": "projects/195-rasputin-memory-openclaw-claude.md",
        "pattern": "memory extraction -> hybrid search -> reranked recall",
        "description": "RASPUTIN Memory 是面向 OpenClaw 和 Claude Code 的 self-hosted long-term memory backend，包含 fact/window/entity/event lane、hybrid search、Qwen reranker、MCP server 和 LoCoMo 评测记录。",
        "stack": [
                  "Python",
                  "Qdrant",
                  "FalkorDB",
                  "MCP"
        ],
        "category": "Self-Hosted Agent Memory Backend",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/jcartu_rasputin-memory.md",
        "status": "candidate",
        "tags": [
                  "agent memory",
                  "openclaw",
                  "claude-code",
                  "mcp",
                  "locomo"
        ]
    }
];

export const projectGroups = [
  {
    "title": "进化式代码 / AlphaEvolve 类",
    "repos": [
      "algorithmicsuperintelligence/openevolve",
      "inter-co/science-codeevolve",
      "JARVIS-Xs/SE-Agent"
    ]
  },
  {
    "title": "LLM 作为优化器",
    "repos": [
      "google-deepmind/opro",
      "carperai/openelm",
      "google-deepmind/funsearch"
    ]
  },
  {
    "title": "Agent 架构自动搜索",
    "repos": [
      "ShengranHu/ADAS"
    ]
  },
  {
    "title": "Agent 自进化系统",
    "repos": [
      "modelscope/AgentEvolver",
      "aiwaves-cn/agents",
      "JarvisPei/SCOPE",
      "iii-experimental/agentos"
    ]
  },
  {
    "title": "反思 / 精炼经典范式",
    "repos": [
      "noahshinn/reflexion",
      "madaan/self-refine"
    ]
  },
  {
    "title": "安全、评判与数据/模型自进化",
    "repos": [
      "ZJU-LLM-Safety/DARWIN",
      "OPPO-Mente-Lab/LLM-Self-Judge"
    ]
  },
  {
    "title": "声明式 Prompt 优化",
    "repos": [
      "stanfordnlp/dspy"
    ]
  },
  {
    "title": "多 Agent 协作框架",
    "repos": [
      "FoundationAgents/MetaGPT",
      "crewAIInc/crewAI",
      "microsoft/autogen",
      "camel-ai/camel",
      "OpenBMB/AgentVerse"
    ]
  },
  {
    "title": "图式 Agent 编排",
    "repos": [
      "langchain-ai/langgraph"
    ]
  },
  {
    "title": "AI 软件工程",
    "repos": [
      "Significant-Gravitas/AutoGPT",
      "princeton-nlp/SWE-agent",
      "All-Hands-AI/OpenHands",
      "stitionai/devika",
      "OpenDevin/OpenDevin"
    ]
  },
  {
    "title": "AutoML / ML 知识驱动",
    "repos": [
      "DeepAuto-AI/automl-agent",
      "microsoft/CoML"
    ]
  },
  {
    "title": "反射式进化搜索",
    "repos": [
      "ai4co/reevo",
      "xai-liacs/LLaMEA"
    ]
  },
  {
    "title": "进化式 Prompt/上下文优化",
    "repos": [
      "beeevita/EvoPrompt"
    ]
  },
  {
    "title": "进化式多 Agent 系统",
    "repos": [
      "siyuyuan/evoagent",
      "EvoAgentX/EvoAgentX",
      "EverMind-AI/EverOS",
      "a-evo-lab/a-evolve"
    ]
  },
  {
    "title": "LLM 驱动进化计算",
    "repos": [
      "Genentech/OpenTreeSearch",
      "wuxingyu-ai/LLM4EC",
      "FeiLiu36/LLM4Opt",
      "xiaofangxd/LLM_EA",
      "alfa-group/tutorial_gp_llm"
    ]
  },
  {
    "title": "质量多样性优化",
    "repos": [
      "icaros-usc/pyribs"
    ]
  },
  {
    "title": "经典进化算法框架",
    "repos": [
      "DEAP/deap",
      "CMA-ES/pycma",
      "facebookresearch/nevergrad"
    ]
  },
  {
    "title": "AutoML 框架",
    "repos": [
      "automl/auto-sklearn"
    ]
  },
  {
    "title": "自进化 Agent 综述",
    "repos": [
      "CharlesQ9/Self-Evolving-Agents",
      "Zesearch/self-improvement-llm"
    ]
  },
  {
    "title": "LLM Agent 优化",
    "repos": [
      "YoungDubbyDu/LLM-Agent-Optimization"
    ]
  },
  {
    "title": "代码模型与评测",
    "repos": [
      "CodeFuse-ML/awesome-code-llm",
      "THUDM/AgentBench",
      "ai4co/rl4co",
      "ai4co/awesome-fm4co"
    ]
  },
  {
    "title": "遗传编程",
    "repos": [
      "pureples/pureples"
    ]
  },
  {
    "title": "Harness / 技能 / 记忆进化",
    "repos": [
      "china-qijizhifeng/agentic-Harness-engineering",
      "jcartu/rasputin-memory",
      "MemPalace/mempalace",
      "Signet-AI/signetai",
      "NousResearch/hermes-agent",
      "NousResearch/hermes-agent-self-evolution",
      "EvoMap/evolver",
      "lsdefine/GenericAgent",
      "obra/superpowers",
      "rohitg00/agentmemory",
      "mem0ai/mem0",
      "TiMEM-AI/timem",
      "langchain-ai/langmem",
      "getzep/graphiti",
      "memodb-io/memobase",
      "dmgrok/agent_skills_directory",
      "sudokrang/aceforge",
      "anthropics/skills",
      "ComposioHQ/awesome-claude-skills",
      "MicrosoftDocs/Agent-Skills",
      "K-Dense-AI/scientific-agent-skills",
      "jayzeng/agentmemory",
      "NevaMind-AI/memU",
      "OneWave-AI/claude-skills",
      "simota/agent-skills",
      "SJTU-IPADS/SkVM",
      "huggingface/skills",
      "aiming-lab/SimpleMem",
      "MemTensor/MemRL",
      "Human-Agent-Society/CORAL",
      "beita6969/ScienceClaw",
      "zilliztech/memsearch",
      "VoltAgent/awesome-agent-skills",
      "swarmclawai/swarmclaw",
      "OiiOAI/MOLT",
      "TerryFYL/openclaw-evolution-framework",
      "ClawBio/ClawBio",
      "jbrahy/meta-agent-teams",
      "Randroids-Dojo/skills",
      "MemoriLabs/Memori",
      "803/skills-supply",
      "TheQtCompanyRnD/agent-skills",
      "chriscox/agent-skills",
      "rendro/sediment",
      "matrixorigin/Memoria",
      "pjt222/agent-almanac",
      "psenger/ai-agent-skills",
      "memtensor/memos",
      "ynulihao/AgentSkillOS",
      "openai/skills",
      "sentient-agi/EvoSkill",
      "callstackincubator/agent-skills",
      "CodeAlive-AI/ai-driven-development",
      "jakenuts/agent-skills",
      "jscraik/Agent-Skills",
      "Gitmaxd/deepagents-cli-codex-skill",
      "vercel-labs/skills",
      "neo4j-labs/agent-memory",
      "doobidoo/mcp-memory-service",
      "microsoft/skills",
      "tech-leads-club/agent-skills",
      "jdrhyne/agent-skills",
      "opensite-ai/opensite-skills",
      "evalstate/fast-agent",
      "shinpr/mcp-local-rag",
      "diegosouzapw/awesome-omni-skills",
      "wanxingai/LightAgent",
      "agent-skills-hub/agent-skills-hub",
      "thClaws/thClaws",
      "Memento-Teams/Memento-Skills",
      "FreedomIntelligence/OpenClaw-Medical-Skills",
      "agent-sh/agentsys",
      "harness/harness-skills",
      "sehoon787/my-codex",
      "hebbs-ai/hebbs-memory-engine",
      "ViktorAxelsen/MemSkill",
      "JimLiu/baoyu-skills",
      "alirezarezvani/claude-skills",
      "agentskills/agentskills",
      "elastic/agent-skills",
      "hashgraph-online/registry-broker-skills",
      "huytieu/COG-second-brain",
      "sundial-org/awesome-openclaw-skills",
      "plastic-labs/honcho",
      "vectorize-io/hindsight",
      "kayba-ai/agentic-context-engine",
      "trustgraph-ai/trustgraph",
      "OthmanAdi/planning-with-files",
      "affaan-m/ECC",
      "kks0488/vibe-codex",
      "farmage/opencode-skills",
      "cyijun/agent-smith",
      "galyarderlabs/galyarder-framework",
      "quzhiii/thesis-skills",
      "PaulRBerg/agent-skills",
      "ComposioHQ/awesome-codex-skills",
      "eigent-ai/agent-skills",
      "MoizIbnYousaf/Ai-Agent-Skills",
      "howells/arc",
      "Gentleman-Programming/Gentleman-Skills",
      "togethercomputer/skills"
    ]
  },
  {
    "title": "个人 Agent 产品与真实评测",
    "repos": [
      "openclaw/openclaw",
      "DSAIL-Memory/EvoMemBench",
      "tinyhumansai/openhuman",
      "pinchbench/skill",
      "claw-bench/claw-bench",
      "openclaw/clawbench",
      "claw-eval/claw-eval",
      "AMA-Bench/AMA-Bench",
      "meituan/EvoCUA",
      "GeniusHTX/SWE-Skills-Bench",
      "xlang-ai/OSWorld",
      "microsoft/WindowsAgentArena",
      "ServiceNow/BrowserGym",
      "vectorize-io/agent-memory-benchmark",
      "adolfousier/opencrabs",
      "aisa-group/skill-inject",
      "mem0ai/memory-benchmarks",
      "OpenBMB/EdgeClaw",
      "clawdotnet/openclaw.net",
      "JordanMcCann/agentmemory",
      "trillskillz/clawdmarket",
      "princeton-pli/hal-harness",
      "HUST-AI-HYZ/MemoryAgentBench",
      "OpenHands/benchmarks",
      "cxcscmu/SkillLearnBench",
      "microsoft/STATE-Bench",
      "rtk-ai/icm",
      "HKUDS/OpenHarness",
      "agent-ecosystem/skill-validator",
      "darkrishabh/agent-skills-eval",
      "CE0Alex/skill-hunter",
      "kitfunso/hippo-memory",
      "yf-he/EvoTest",
      "MemTensor/HaluMem"
    ]
  },
  {
    "title": "Harness 进化与方法索引",
    "repos": [
      "raphaelchristi/harness-evolver",
      "ai-boost/awesome-harness-engineering",
      "neosigmaai/auto-harness",
      "aden-hive/hive",
      "aiming-lab/AutoResearchClaw",
      "aiming-lab/SkillRL",
      "zylos-ai/zylos-core",
      "QuantaAlpha/QuantaAlpha",
      "AMAP-ML/SkillClaw",
      "HKUDS/OpenSpace",
      "revfactory/harness",
      "guixiang123124/openclaw-harness"
    ]
  }
];
