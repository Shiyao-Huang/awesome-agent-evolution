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

export const projects: Project[] = [
    {
        "name": "openevolve",
        "repo": "algorithmicsuperintelligence/openevolve",
        "url": "https://github.com/algorithmicsuperintelligence/openevolve",
        "stars": 6500,
        "forks": "1000",
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
        "description": "Google DeepMind 的 OPRO（Optimization by PROmpting），用 LLM 作为优化器，通过进化式 Prompt 迭代搜索更优候选。",
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
        "description": "自动设计智能体系统（ADAS），使用 Meta Agent Search 在代码层面搜索候选 Agent 架构。",
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
        "description": "高可见度的多智能体协作框架，Code = SOP(Team) 理念，含 SELA（MCTS+LLM）和 AFlow（ICLR 2025 Oral）线索。",
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
        "description": "GitHub 历史高星标自主 Agent 项目之一，定义了 TAO 循环（Thought-Action-Observation），并演进出平台化形态。",
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
        "description": "较早探索多 Agent 角色扮演对话的框架，含 Critic 在环批评机制和 Self-Instruct 数据生成。",
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
        "description": "Princeton NLP 软件工程 Agent，ICLR 2025 Oral，提出 Agent-Computer Interface (ACI)；SWE-bench 结果需按论文和 leaderboard 版本复查。",
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
        "stars": 6800,
        "forks": "669",
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
        "stars": 1000,
        "forks": "100",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/23-everos-self-evolving-agents.md",
        "pattern": "反思记忆 → 智能体编排",
        "description": "面向自进化 Agent 的长期记忆平台，把 EverCore、HyperMem、EverMemBench、EvoAgentBench 和 skills/MCP 集成放进同一条记忆到评测的数据流。",
        "stack": [
            "Python",
            "FastAPI",
            "Docker",
            "Milvus",
            "Elasticsearch"
        ],
        "category": "自进化 Agent 记忆系统",
        "lastPushed": "2026-01-01T00:00:00Z",
        "localPath": "repos/evermind_ai__everos",
        "status": "verified",
        "tags": [
            "反思记忆",
            "智能体编排",
            "长期记忆",
            "自进化Agent"
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
        "report": "projects/32-self-evolving-agents-survey.md",
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
        "name": "future-agi",
        "repo": "future-agi/future-agi",
        "url": "https://github.com/future-agi/future-agi",
        "stars": 5200,
        "forks": "420",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "research/projects/43-future-agi-self-improving.md",
        "pattern": "自改进循环 → 评估 → 迭代优化",
        "description": "FutureAGI 自改进 AI Agent 框架，支持 Agent 通过反馈循环持续优化自身行为。",
        "stack": [
            "Python",
            "LLM API",
            "FastAPI"
        ],
        "category": "自改进 Agent",
        "lastPushed": "2025-06-01T00:00:00Z",
        "localPath": "repos/future_agi__future_agi",
        "status": "candidate",
        "tags": [
            "自改进",
            "反馈循环",
            "Agent 框架"
        ]
    },
    {
        "name": "awesome-self-evolving-agents",
        "repo": "XMUDeepLIT/Awesome-Self-Evolving-Agents",
        "url": "https://github.com/XMUDeepLIT/Awesome-Self-Evolving-Agents",
        "stars": 3800,
        "forks": "280",
        "language": "Markdown",
        "license": "CC-BY-4.0",
        "report": "research/projects/44-xmu-self-evolving-agents.md",
        "pattern": "综述索引 → 自进化 Agent 论文集合",
        "description": "厦门大学 XMUDeepLIT 维护的自进化 Agent 领域论文精选列表，涵盖 Self-Evolving、Self-Improving、Self-Debugging 等方向。",
        "stack": [
            "Markdown",
            "论文索引"
        ],
        "category": "自进化 Agent 综述",
        "lastPushed": "2026-01-15T00:00:00Z",
        "localPath": "repos/xmudeeplit__awesome_self_evolving_agents",
        "status": "candidate",
        "tags": [
            "综述",
            "自进化",
            "论文索引"
        ]
    },
    {
        "name": "ag2",
        "repo": "ag2ai/ag2",
        "url": "https://github.com/ag2ai/ag2",
        "stars": 5200,
        "forks": "680",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "research/projects/45-ag2-multi-agent.md",
        "pattern": "多 Agent 对话 → 编排 → 协作",
        "description": "AG2（原 AutoGen）微软开源的多 Agent 对话框架，支持可组合的 Agent 编排、群聊、人机协作和工具集成。",
        "stack": [
            "Python",
            "OpenAI API",
            "Docker"
        ],
        "category": "多 Agent 协作框架",
        "lastPushed": "2026-05-20T00:00:00Z",
        "localPath": "repos/ag2ai__ag2",
        "status": "candidate",
        "tags": [
            "多 Agent",
            "对话编排",
            "人机协作"
        ]
    },
    {
        "name": "chatdev",
        "repo": "OpenBMB/ChatDev",
        "url": "https://github.com/OpenBMB/ChatDev",
        "stars": 26000,
        "forks": "3200",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "research/projects/46-chatdev-multi-agent-platform.md",
        "pattern": "虚拟公司 → 角色对话链 → 软件开发",
        "description": "ChatDev 清华 OpenBMB 多智能体协作平台，2.0 版为零代码编排平台，Puppeteer 用 RL 优化 Agent 编排（NeurIPS 2025）。",
        "stack": [
            "Python",
            "LLM API",
            "React"
        ],
        "category": "多 Agent 协作框架",
        "lastPushed": "2026-01-07T00:00:00Z",
        "localPath": "repos/openbmb__chatdev",
        "status": "candidate",
        "tags": [
            "多 Agent",
            "角色扮演",
            "RL 编排"
        ]
    },
    {
        "name": "openagents",
        "repo": "xlang-ai/OpenAgents",
        "url": "https://github.com/xlang-ai/OpenAgents",
        "stars": 4200,
        "forks": "410",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "research/projects/47-openagents-platform.md",
        "pattern": "工具调用 → 函数选择 → 代码执行",
        "description": "OpenAgents 开源 Agent 平台，专注于 LLM 工具使用（Tool Use）和函数调用能力。",
        "stack": [
            "Python",
            "LLM API",
            "React"
        ],
        "category": "Agent 工具使用",
        "lastPushed": "2025-08-01T00:00:00Z",
        "localPath": "repos/xlang_ai__openagents",
        "status": "candidate",
        "tags": [
            "工具调用",
            "函数选择",
            "Agent 平台"
        ]
    },
    {
        "name": "superagi",
        "repo": "TransformerOptimus/SuperAGI",
        "url": "https://github.com/TransformerOptimus/SuperAGI",
        "stars": 16000,
        "forks": "1900",
        "language": "Python",
        "license": "MIT",
        "report": "research/projects/48-superagi-platform.md",
        "pattern": "自主 Agent → 工具生态 → 任务执行",
        "description": "SuperAGI 开源自主 AI Agent 框架，提供丰富的工具生态和 Web UI 管理。",
        "stack": [
            "Python",
            "FastAPI",
            "React",
            "Docker"
        ],
        "category": "自主 Agent 框架",
        "lastPushed": "2025-03-01T00:00:00Z",
        "localPath": "repos/superagi__superagi",
        "status": "candidate",
        "tags": [
            "自主 Agent",
            "工具生态",
            "Web UI"
        ]
    },
    {
        "name": "phidata",
        "repo": "phidatahq/phidata",
        "url": "https://github.com/phidatahq/phidata",
        "stars": 18000,
        "forks": "2200",
        "language": "Python",
        "license": "MIT",
        "report": "research/projects/49-phidata-framework.md",
        "pattern": "Agent → 记忆 + 知识 + 工具 → 执行",
        "description": "PhiData Agent 框架，内置记忆系统、知识库和工具集成，支持构建生产级 AI Agent。",
        "stack": [
            "Python",
            "LLM API",
            "PostgreSQL"
        ],
        "category": "Agent 框架",
        "lastPushed": "2026-05-15T00:00:00Z",
        "localPath": "repos/phidata__phidata",
        "status": "candidate",
        "tags": [
            "Agent 框架",
            "记忆系统",
            "知识库"
        ]
    },
    {
        "name": "smol-developer",
        "repo": "smol-ai/developer",
        "url": "https://github.com/smol-ai/developer",
        "stars": 14000,
        "forks": "1600",
        "language": "Python",
        "license": "MIT",
        "report": "research/projects/50-smol-developer.md",
        "pattern": "最小 Agent → 代码生成 → 迭代",
        "description": "Smol Developer 极简 AI 开发助手，以少量代码展示 AI 辅助开发路径。",
        "stack": [
            "Python",
            "LLM API"
        ],
        "category": "AI 开发助手",
        "lastPushed": "2025-06-01T00:00:00Z",
        "localPath": "repos/smol_ai__developer",
        "status": "candidate",
        "tags": [
            "极简 Agent",
            "代码生成",
            "AI 开发"
        ]
    },
    {
        "name": "dify",
        "repo": "langgenius/dify",
        "url": "https://github.com/langgenius/dify",
        "stars": 95000,
        "forks": "14000",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "research/projects/51-dify-ai-platform.md",
        "pattern": "可视化工作流 → LLM 编排 → 应用部署",
        "description": "Dify 开源 LLM 应用开发平台，提供可视化工作流编排、RAG 引擎和 Agent 构建工具。",
        "stack": [
            "Python",
            "Flask",
            "React",
            "PostgreSQL",
            "Docker"
        ],
        "category": "LLM 应用平台",
        "lastPushed": "2026-05-22T00:00:00Z",
        "localPath": "repos/langgenius__dify",
        "status": "candidate",
        "tags": [
            "LLM 平台",
            "工作流编排",
            "RAG"
        ]
    },
    {
        "name": "agentgpt",
        "repo": "reworkd/AgentGPT",
        "url": "https://github.com/reworkd/AgentGPT",
        "stars": 33000,
        "forks": "9100",
        "language": "TypeScript",
        "license": "MIT",
        "report": "research/projects/52-agentgpt-autonomous.md",
        "pattern": "自主循环 → 任务分解 → 执行 → 学习",
        "description": "AgentGPT 浏览器内自主 AI Agent 平台，通过思考→执行→学习循环自动达成目标。",
        "stack": [
            "TypeScript",
            "Next.js",
            "Python",
            "FastAPI",
            "MySQL"
        ],
        "category": "自主 Agent 平台",
        "lastPushed": "2025-08-01T00:00:00Z",
        "localPath": "repos/reworkd__agentgpt",
        "status": "candidate",
        "tags": [
            "自主 Agent",
            "任务分解",
            "Web UI"
        ]
    },
    {
        "name": "agenta",
        "repo": "Agenta-AI/agenta",
        "url": "https://github.com/Agenta-AI/agenta",
        "stars": 8000,
        "forks": "850",
        "language": "Python",
        "license": "MIT",
        "report": "research/projects/53-agenta-evaluation.md",
        "pattern": "Prompt 管理 → 测试集 → 评估器 → 可观测性",
        "description": "Agenta 开源 LLMOps 评测平台，集成 Prompt 管理、系统化评估和可观测性。",
        "stack": [
            "Python",
            "FastAPI",
            "React",
            "Docker"
        ],
        "category": "LLM 评测平台",
        "lastPushed": "2026-05-10T00:00:00Z",
        "localPath": "repos/agenta_ai__agenta",
        "status": "candidate",
        "tags": [
            "LLMOps",
            "评测框架",
            "Prompt 管理"
        ]
    },
    {
        "name": "e2b",
        "repo": "e2b-dev/e2b",
        "url": "https://github.com/e2b-dev/e2b",
        "stars": 7000,
        "forks": "450",
        "language": "Python",
        "license": "MIT",
        "report": "research/projects/54-e2b-sandbox.md",
        "pattern": "AI 代码 → 安全沙箱 → 隔离执行",
        "description": "E2B 开源 AI 代码安全执行沙箱，基于 Firecracker 微虚拟机实现毫秒级启动的隔离环境。",
        "stack": [
            "Python",
            "TypeScript",
            "gRPC",
            "Firecracker"
        ],
        "category": "代码执行沙箱",
        "lastPushed": "2026-05-18T00:00:00Z",
        "localPath": "repos/e2b__code_interpreter",
        "status": "candidate",
        "tags": [
            "沙箱",
            "代码执行",
            "安全隔离"
        ]
    },
    {
        "name": "open-webui",
        "repo": "open-webui/open-webui",
        "url": "https://github.com/open-webui/open-webui",
        "stars": 124000,
        "forks": "15000",
        "language": "Python",
        "license": "MIT",
        "report": "research/projects/55-open-webui.md",
        "pattern": "自托管 → 多 LLM → RAG → 插件",
        "description": "Open WebUI 124K+ stars 自托管 AI 平台，支持 Ollama/OpenAI API、内置 RAG、Python 工具插件。",
        "stack": [
            "Python",
            "Svelte",
            "Docker",
            "Ollama"
        ],
        "category": "自托管 AI 平台",
        "lastPushed": "2026-05-22T00:00:00Z",
        "localPath": "repos/open_webui__open_webui",
        "status": "candidate",
        "tags": [
            "自托管",
            "多 LLM",
            "RAG",
            "插件"
        ]
    },
    {
        "name": "Gemini CLI Auto Memory",
        "repo": "google-gemini/gemini-cli",
        "url": "https://github.com/google-gemini/gemini-cli",
        "stars": 105000,
        "forks": "13900",
        "language": "TypeScript",
        "license": "Apache-2.0",
        "report": "projects/214-gemini-cli-auto-memory-skills.md",
        "pattern": "session transcripts -> auto-memory mining -> reviewable patches / SKILL.md drafts -> approved durable memory or skill assets",
        "description": "Gemini CLI 是 Google 开源终端 AI Agent；Auto Memory 路线把历史会话挖掘成可审核的 durable memory 和 Agent Skills 草稿。",
        "stack": [
            "TypeScript",
            "Node.js",
            "MCP",
            "Auto Memory",
            "Agent Skills"
        ],
        "category": "Agent CLI Auto-Memory and Skills",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "repos/google_gemini__gemini_cli",
        "status": "candidate",
        "tags": [
            "CLI Agent",
            "Google Gemini",
            "MCP",
            "agent memory",
            "skills"
        ]
    },
    {
        "name": "n8n",
        "repo": "n8n-io/n8n",
        "url": "https://github.com/n8n-io/n8n",
        "stars": 75000,
        "forks": "8000",
        "language": "TypeScript",
        "license": "Sustainable Use",
        "report": "research/projects/57-n8n-workflow-automation.md",
        "pattern": "可视化工作流 → 节点编排 → AI Agent 节点",
        "description": "n8n 开源工作流自动化平台，支持 400+ 集成和 AI Agent 节点，可视化编排自动化流程。",
        "stack": [
            "TypeScript",
            "Node.js",
            "Vue.js"
        ],
        "category": "工作流自动化",
        "lastPushed": "2026-05-22T00:00:00Z",
        "localPath": "repos/n8n__n8n",
        "status": "candidate",
        "tags": [
            "工作流",
            "自动化",
            "AI Agent"
        ]
    },
    {
        "name": "langflow",
        "repo": "langflow-ai/langflow",
        "url": "https://github.com/langflow-ai/langflow",
        "stars": 58000,
        "forks": "6100",
        "language": "Python",
        "license": "MIT",
        "report": "research/projects/58-langflow-visual-agent.md",
        "pattern": "拖拽可视化 → LangChain 组件 → Agent 编排",
        "description": "Langflow LangChain 生态的可视化 Agent/工作流构建器，拖拽式设计 LangChain 应用。",
        "stack": [
            "Python",
            "React",
            "LangChain"
        ],
        "category": "可视化 Agent 平台",
        "lastPushed": "2026-05-20T00:00:00Z",
        "localPath": "repos/langflow__langflow",
        "status": "candidate",
        "tags": [
            "可视化",
            "LangChain",
            "拖拽构建"
        ]
    },
    {
        "name": "awesome-agent-papers",
        "repo": "luo-junyu/Awesome-Agent-Papers",
        "url": "https://github.com/luo-junyu/Awesome-Agent-Papers",
        "stars": 1200,
        "forks": "100",
        "language": "Markdown",
        "license": "MIT",
        "report": "research/projects/59-awesome-agent-papers.md",
        "pattern": "论文索引 → LLM Agent 研究追踪",
        "description": "Awesome Agent Papers 是 LLM Agent 研究论文精选列表，用于持续追踪 Agent 领域进展。",
        "stack": [
            "Markdown"
        ],
        "category": "Agent 研究综述",
        "lastPushed": "2026-03-01T00:00:00Z",
        "localPath": "repos/luo_junyu__awesome_agent_papers",
        "status": "candidate",
        "tags": [
            "论文索引",
            "Agent 研究"
        ]
    },
    {
        "name": "swe-bench",
        "repo": "SWE-bench/SWE-bench",
        "url": "https://github.com/SWE-bench/SWE-bench",
        "stars": 2800,
        "forks": "420",
        "language": "Python",
        "license": "MIT",
        "report": "research/projects/60-swe-bench-evaluation.md",
        "pattern": "真实 GitHub Issue → 模型生成 Patch → 评估",
        "description": "SWE-bench 软件工程评测基准，使用真实 GitHub Issue 评估 LLM 生成补丁的能力。",
        "stack": [
            "Python",
            "Docker",
            "Git"
        ],
        "category": "Agent 评测基准",
        "lastPushed": "2026-04-01T00:00:00Z",
        "localPath": "repos/swe_bench__swe_bench",
        "status": "candidate",
        "tags": [
            "评测基准",
            "软件工程",
            "代码补丁"
        ]
    },
    {
        "name": "osworld",
        "repo": "xlang-ai/OSWorld",
        "url": "https://github.com/xlang-ai/OSWorld",
        "stars": 2200,
        "forks": "180",
        "language": "Python",
        "license": "MIT",
        "report": "research/projects/61-osworld-agent-evaluation.md",
        "pattern": "桌面 OS 环境 → Agent 操作 → 任务评估",
        "description": "OSWorld 桌面级 OS Agent 评测基准，在真实操作系统环境中评估 AI Agent 的端到端任务完成能力。",
        "stack": [
            "Python",
            "VirtualBox",
            "Docker"
        ],
        "category": "Agent 评测基准",
        "lastPushed": "2025-12-01T00:00:00Z",
        "localPath": "repos/xlang_ai__osworld",
        "status": "candidate",
        "tags": [
            "评测基准",
            "OS 操作",
            "端到端"
        ]
    },
    {
        "name": "webarena",
        "repo": "web-arena-x/webarena",
        "url": "https://github.com/web-arena-x/webarena",
        "stars": 2800,
        "forks": "260",
        "language": "Python",
        "license": "MIT",
        "report": "research/projects/62-webarena-web-evaluation.md",
        "pattern": "Web 环境 → Agent 浏览 → 任务完成评估",
        "description": "WebArena Web Agent 评测基准，在真实网站环境中评估 Agent 的网页交互任务完成能力。",
        "stack": [
            "Python",
            "Docker",
            "Playwright"
        ],
        "category": "Agent 评测基准",
        "lastPushed": "2025-10-01T00:00:00Z",
        "localPath": "repos/web_arena_x__webarena",
        "status": "candidate",
        "tags": [
            "评测基准",
            "Web 交互",
            "浏览器"
        ]
    },
    {
        "name": "litellm",
        "repo": "BerriAI/litellm",
        "url": "https://github.com/BerriAI/litellm",
        "stars": 22000,
        "forks": "2800",
        "language": "Python",
        "license": "MIT",
        "report": "research/projects/63-litellm-gateway.md",
        "pattern": "统一接口 → 100+ LLM → 代理网关",
        "description": "LiteLLM 统一 LLM 网关，提供 100+ LLM 提供商的统一接口，支持 Python SDK 和代理服务器。",
        "stack": [
            "Python",
            "FastAPI",
            "Proxy"
        ],
        "category": "LLM 基础设施",
        "lastPushed": "2026-05-22T00:00:00Z",
        "localPath": "repos/berriai__litellm",
        "status": "candidate",
        "tags": [
            "LLM 网关",
            "统一接口",
            "代理"
        ]
    },
    {
        "name": "ollama",
        "repo": "ollama/ollama",
        "url": "https://github.com/ollama/ollama",
        "stars": 140000,
        "forks": "11000",
        "language": "Go",
        "license": "MIT",
        "report": "research/projects/64-ollama-llm-runtime.md",
        "pattern": "本地推理 → 模型管理 → API 服务",
        "description": "Ollama 140K+ stars 本地 LLM 推理运行时，支持 Llama、Gemma、Mistral 等模型的一键部署。",
        "stack": [
            "Go",
            "C++",
            "llama.cpp"
        ],
        "category": "LLM 基础设施",
        "lastPushed": "2026-05-22T00:00:00Z",
        "localPath": "repos/ollama__ollama",
        "status": "candidate",
        "tags": [
            "LLM 推理",
            "本地部署",
            "模型管理"
        ]
    },
    {
        "name": "flowise",
        "repo": "FlowiseAI/Flowise",
        "url": "https://github.com/FlowiseAI/Flowise",
        "stars": 36000,
        "forks": "4500",
        "language": "TypeScript",
        "license": "Apache-2.0",
        "report": "research/projects/65-flowise-visual-llm.md",
        "pattern": "拖拽 UI → LLM 链 → 可视化编排",
        "description": "Flowise 拖拽式 LLM 可视化构建器，通过 UI 拖拽构建 LLM 应用链。",
        "stack": [
            "TypeScript",
            "Node.js",
            "React",
            "LangChain"
        ],
        "category": "可视化 LLM 平台",
        "lastPushed": "2026-05-15T00:00:00Z",
        "localPath": "repos/flowiseai__flowise",
        "status": "candidate",
        "tags": [
            "可视化",
            "拖拽构建",
            "LLM 链"
        ]
    },
    {
        "name": "babyagi",
        "repo": "yoheinakajima/babyagi",
        "url": "https://github.com/yoheinakajima/babyagi",
        "stars": 21000,
        "forks": "2900",
        "language": "Python",
        "license": "MIT",
        "report": "research/projects/66-babyagi-task-agent.md",
        "pattern": "目标 → 任务分解 → 优先级 → 执行 → 学习",
        "description": "BabyAGI 任务驱动自主 Agent，通过目标分解、优先级排序和自我反馈循环自动完成复杂任务。",
        "stack": [
            "Python",
            "OpenAI API",
            "Pinecone"
        ],
        "category": "自主 Agent 框架",
        "lastPushed": "2024-06-01T00:00:00Z",
        "localPath": "repos/yoheinakajima__babyagi",
        "status": "candidate",
        "tags": [
            "自主 Agent",
            "任务分解",
            "自反馈"
        ]
    },
    {
        "name": "cheshire-cat",
        "repo": "cheshire-cat-ai/core",
        "url": "https://github.com/cheshire-cat-ai/core",
        "stars": 3200,
        "forks": "380",
        "language": "Python",
        "license": "GPL-3.0",
        "report": "research/projects/67-cheshire-cat-ai-framework.md",
        "pattern": "插件式 AI → 模块化 → 可扩展",
        "description": "Cheshire Cat AI 模块化聊天框架，通过插件系统实现可扩展的 AI 对话能力。",
        "stack": [
            "Python",
            "FastAPI",
            "Qdrant",
            "Docker"
        ],
        "category": "AI 聊天框架",
        "lastPushed": "2026-05-10T00:00:00Z",
        "localPath": "repos/cheshire_cat_ai__core",
        "status": "candidate",
        "tags": [
            "插件系统",
            "模块化",
            "聊天框架"
        ]
    },
    {
        "name": "smolagents",
        "repo": "huggingface/smolagents",
        "url": "https://github.com/huggingface/smolagents",
        "stars": 15000,
        "forks": "1300",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "research/projects/68-smolagents-huggingface.md",
        "pattern": "轻量 Agent → 工具调用 → HuggingFace 集成",
        "description": "smolagents HuggingFace 轻量级 Agent 框架，简洁 API 构建 AI Agent。",
        "stack": [
            "Python",
            "HuggingFace",
            "Transformers"
        ],
        "category": "Agent 框架",
        "lastPushed": "2026-05-20T00:00:00Z",
        "localPath": "repos/huggingface__smolagents",
        "status": "candidate",
        "tags": [
            "轻量 Agent",
            "HuggingFace",
            "工具调用"
        ]
    },
    {
        "name": "bisheng",
        "repo": "dataelement/bisheng",
        "url": "https://github.com/dataelement/bisheng",
        "stars": 8000,
        "forks": "1300",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "research/projects/69-bisheng-llm-platform.md",
        "pattern": "LLM 应用平台 → 可视化编排 → 知识库",
        "description": "Bisheng 开源 LLM 应用开发平台（毕昇），提供可视化编排、知识库管理和 RAG 引擎。",
        "stack": [
            "Python",
            "React",
            "PostgreSQL",
            "Docker"
        ],
        "category": "LLM 应用平台",
        "lastPushed": "2026-05-18T00:00:00Z",
        "localPath": "repos/dataelement__bisheng",
        "status": "candidate",
        "tags": [
            "LLM 平台",
            "可视化编排",
            "RAG"
        ]
    },
    {
        "name": "chainlit",
        "repo": "Chainlit/chainlit",
        "url": "https://github.com/Chainlit/chainlit",
        "stars": 10000,
        "forks": "1200",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "research/projects/70-chainlit-llm-chat.md",
        "pattern": "LLM 聊天 UI → 快速构建 → 部署",
        "description": "Chainlit LLM 聊天应用框架，快速构建类似 ChatGPT 的 LLM 应用界面。",
        "stack": [
            "Python",
            "React",
            "FastAPI"
        ],
        "category": "LLM 聊天框架",
        "lastPushed": "2026-05-15T00:00:00Z",
        "localPath": "repos/chainlit__chainlit",
        "status": "candidate",
        "tags": [
            "聊天 UI",
            "LLM 应用",
            "快速构建"
        ]
    },
    {
        "name": "WildClawBench",
        "repo": "InternLM/WildClawBench",
        "url": "https://github.com/InternLM/WildClawBench",
        "stars": 408,
        "forks": "37",
        "language": "Python",
        "license": "MIT",
        "report": "projects/245-wildclawbench-authentic-real-world-agent-benchmark.md",
        "pattern": "真实场景任务 -> 多轮动态交互 -> anti-overfitting 设计 -> 端到端评分 -> agent 能力画像",
        "description": "WildClawBench 是面向 LLM Agent 的真实世界风格评测基准，强调动态、多轮、长程任务与 anti-overfitting 评估设计。",
        "stack": [
            "Python",
            "Benchmark"
        ],
        "category": "Agent 评测基准",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/internlm_wildclawbench.md",
        "status": "candidate",
        "tags": [
            "评测基准",
            "真实任务",
            "multi-turn",
            "anti-overfitting"
        ]
    },
    {
        "name": "awesome-ai-agents-2026",
        "repo": "Zijian-Ni/awesome-ai-agents-2026",
        "url": "https://github.com/Zijian-Ni/awesome-ai-agents-2026",
        "stars": 800,
        "forks": "80",
        "language": "Markdown",
        "license": "CC-BY-4.0",
        "report": "research/projects/72-awesome-ai-agents-2026.md",
        "pattern": "2026 Agent 追踪 → 实时更新",
        "description": "Awesome AI Agents 2026 精选列表，追踪 2026 年先进 AI Agent 项目和基准。",
        "stack": [
            "Markdown"
        ],
        "category": "Agent 研究综述",
        "lastPushed": "2026-05-20T00:00:00Z",
        "localPath": "repos/zijian_ni__awesome_ai_agents_2026",
        "status": "candidate",
        "tags": [
            "综述",
            "2026 Agent",
            "项目追踪"
        ]
    },
    {
        "name": "Awesome Agent Memory by cxxz",
        "repo": "cxxz/awesome-agent-memory",
        "url": "https://github.com/cxxz/awesome-agent-memory",
        "stars": 11,
        "forks": 3,
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/209-cxxz-awesome-agent-memory.md",
        "pattern": "memory systems -> tools/patterns/research -> agent memory taxonomy",
        "description": "A curated agent-memory resource index that helps separate memory tools, patterns and research signals from runtime claims.",
        "stack": [
            "Markdown"
        ],
        "category": "Agent Memory Resource Index",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/cxxz_awesome-agent-memory.md",
        "status": "candidate",
        "tags": [
            "agent memory",
            "research index",
            "taxonomy"
        ]
    },
    {
        "name": "Memoir",
        "repo": "zhangfengcdt/memoir",
        "url": "https://github.com/zhangfengcdt/memoir",
        "stars": 549,
        "forks": 35,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/210-memoir-agent-auto-memory.md",
        "pattern": "agent activity -> hierarchical memory paths -> Git-like commits/branches -> recoverable continuity",
        "description": "Memoir frames agent memory as declarative, hierarchical and Git-like, making memory state inspectable through commits and branches instead of only vector retrieval.",
        "stack": [
            "Python",
            "Git-like memory"
        ],
        "category": "Git-like Agent Auto-Memory",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/zhangfengcdt_memoir.md",
        "status": "candidate",
        "tags": [
            "agent memory",
            "versioned memory",
            "continuity"
        ]
    },
    {
        "name": "Awesome GraphMemory",
        "repo": "DEEP-PolyU/Awesome-GraphMemory",
        "url": "https://github.com/DEEP-PolyU/Awesome-GraphMemory",
        "stars": 273,
        "forks": 15,
        "language": "Markdown",
        "license": "Unknown",
        "report": "projects/211-awesome-graphmemory.md",
        "pattern": "graph memory papers -> techniques/applications -> memory substrate map",
        "description": "Awesome GraphMemory is a paper-facing index for graph-based agent memory, giving the corpus a bridge from memory substrates to graph knowledge structures.",
        "stack": [
            "Markdown",
            "Graph memory papers"
        ],
        "category": "Graph-Based Agent Memory Index",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/deep-polyu_awesome-graphmemory.md",
        "status": "candidate",
        "tags": [
            "graph memory",
            "agent memory",
            "paper index"
        ]
    },
    {
        "name": "ATANT",
        "repo": "Kenotic-Labs/ATANT",
        "url": "https://github.com/Kenotic-Labs/ATANT",
        "stars": 3,
        "forks": 0,
        "language": "Python",
        "license": "License visible",
        "report": "projects/212-atant-agent-continuity-eval.md",
        "pattern": "agent narrative checkpoints -> continuity tests -> self/identity drift evidence",
        "description": "ATANT adds an agent-continuity evaluation angle: memory is not only retrieval quality, but whether an agent maintains narrative state and checkpoint continuity.",
        "stack": [
            "Python",
            "Evaluation framework"
        ],
        "category": "Agent Continuity Evaluation",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/kenotic-labs_atant.md",
        "status": "candidate",
        "tags": [
            "agent continuity",
            "evaluation",
            "memory benchmark"
        ]
    },
    {
        "name": "Gitagent",
        "repo": "open-gitagent/gitagent",
        "url": "https://github.com/open-gitagent/gitagent",
        "stars": 404,
        "forks": 82,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/213-gitagent-git-native-agent-framework.md",
        "pattern": "git repository -> agent identity/rules/memory/tools/skills/hooks -> auditable agent runtime",
        "description": "Gitagent treats an agent as a Git repository: identity, rules, memory, tools, skills, hooks, plugins and audit state all live in version-controlled files.",
        "stack": [
            "TypeScript",
            "Git-native agent runtime"
        ],
        "category": "Git-Native Agent Framework",
        "lastPushed": "2026-05-25T00:00:00Z",
        "localPath": "raw-github/open-gitagent_gitagent.md",
        "status": "candidate",
        "tags": [
            "git-native agent",
            "agent memory",
            "skills",
            "audit"
        ]
    },
    {
        "name": "Skillgrade Agent Skill Evaluation",
        "repo": "mgechev/skillgrade",
        "url": "https://github.com/mgechev/skillgrade",
        "stars": 490,
        "forks": 35,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/215-skillgrade-agent-skill-evaluation.md",
        "pattern": "SKILL.md package -> eval.yaml tasks and graders -> sandboxed agent trials -> pass-rate gate",
        "description": "Skillgrade turns Agent Skills into testable assets with repeatable smoke, reliability and regression trials across Gemini, Claude, Codex, ACP and OpenCode-style agents.",
        "stack": [
            "TypeScript",
            "Node.js",
            "Docker",
            "Agent Skills"
        ],
        "category": "Agent Skill Evaluation Harness",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/mgechev_skillgrade.md",
        "status": "candidate",
        "tags": [
            "agent skills",
            "evaluation",
            "benchmark",
            "quality gate"
        ]
    },
    {
        "name": "Webmaxru Agent Skills",
        "repo": "webmaxru/Agent-Skills",
        "url": "https://github.com/webmaxru/Agent-Skills",
        "stars": 29,
        "forks": 2,
        "language": "TypeScript / JavaScript",
        "license": "Public repository license visible",
        "report": "projects/216-webmaxru-agent-skills.md",
        "pattern": "Web API source material -> skill authoring -> validation/remediation -> install verification",
        "description": "Webmaxru Agent Skills is a reviewed Web API skills collection with explicit creation, validation, remediation and install-check phases.",
        "stack": [
            "TypeScript",
            "JavaScript",
            "Web API Agent Skills"
        ],
        "category": "Reviewed Web API Agent Skills",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/webmaxru_agent-skills.md",
        "status": "candidate",
        "tags": [
            "agent skills",
            "web APIs",
            "validation",
            "skill lifecycle"
        ]
    },
    {
        "name": "Waza",
        "repo": "microsoft/waza",
        "url": "https://github.com/microsoft/waza",
        "stars": 904,
        "forks": 49,
        "language": "Go",
        "license": "MIT",
        "report": "projects/217-waza-agent-skill-evaluation-cli.md",
        "pattern": "SKILL.md asset -> eval scaffold -> benchmark run -> grader/coverage report -> skill quality gate",
        "description": "Waza is Microsoft's Go CLI / framework for agent skills: it scaffolds skills and eval suites, runs benchmark tasks, compares models, checks coverage, and turns SKILL.md assets into measurable quality gates.",
        "stack": [
            "Go"
        ],
        "category": "Waza Agent Skill Evaluation CLI",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/microsoft_waza.md",
        "status": "candidate",
        "tags": [
            "agent skills",
            "evaluation",
            "benchmark",
            "quality gate"
        ]
    },
    {
        "name": "NEXO Brain",
        "repo": "wazionapps/nexo",
        "url": "https://github.com/wazionapps/nexo",
        "stars": 22,
        "forks": 9,
        "language": "Python / MCP",
        "license": "Open source public repository",
        "report": "projects/218-nexo-agent-memory-runtime.md",
        "pattern": "conversation/session traces -> cognitive memory extraction -> semantic/temporal retrieval -> trust/forgetting gates -> proactive context packets",
        "description": "NEXO Brain is a local shared-brain memory runtime for Claude Code, Codex, Claude Desktop and MCP clients, combining persistent memory, RAG, temporal recall, forgetting, trust scoring, benchmark reporting and background self-improvement jobs.",
        "stack": [
            "Python",
            "MCP"
        ],
        "category": "NEXO Agent Memory Runtime",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/wazionapps_nexo.md",
        "status": "candidate",
        "tags": [
            "agent memory",
            "MCP",
            "LoCoMo",
            "self-improvement"
        ]
    },
    {
        "name": "state-trace",
        "repo": "razroo/state-trace",
        "url": "https://github.com/razroo/state-trace",
        "stars": 1,
        "forks": 0,
        "language": "Python",
        "license": "Public repository license not verified",
        "report": "projects/219-state-trace-agent-memory-engine.md",
        "pattern": "agent log step -> typed memory node/edge -> capacity-aware decay -> graph traversal retrieval",
        "description": "state-trace is a graph-native memory engine for AI agents that stores typed memories and causal links, then retrieves state-aware context through graph traversal instead of only vector similarity.",
        "stack": [
            "Python"
        ],
        "category": "state-trace Agent Memory Engine",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/razroo_state-trace.md",
        "status": "candidate",
        "tags": [
            "agent memory",
            "graph memory",
            "stateful agents"
        ]
    },
    {
        "name": "Agent Memory Techniques",
        "repo": "NirDiamant/Agent_Memory_Techniques",
        "url": "https://github.com/NirDiamant/Agent_Memory_Techniques",
        "stars": 412,
        "forks": 58,
        "language": "Jupyter Notebook / Python",
        "license": "Apache-2.0",
        "report": "projects/220-agent-memory-techniques.md",
        "pattern": "memory need -> 30 runnable techniques -> taxonomy/decision tree -> evaluation and production notebooks",
        "description": "Agent Memory Techniques is a runnable notebook cookbook for 30 LLM-agent memory patterns, covering short-term buffers, long-term stores, cognitive architectures, multi-agent shared memory, framework integrations, LoCoMo-style evaluation and production patterns.",
        "stack": [
            "Jupyter Notebook",
            "Python",
            "Mermaid"
        ],
        "category": "Agent Memory Technique Cookbook",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/nirdiamant_agent_memory_techniques.md",
        "status": "candidate",
        "tags": [
            "agent memory",
            "cookbook",
            "LoCoMo",
            "knowledge graph",
            "production patterns"
        ]
    },
    {
        "name": "kbench",
        "repo": "shareAI-lab/kbench",
        "url": "https://github.com/shareAI-lab/kbench",
        "stars": 10,
        "forks": 1,
        "language": "TypeScript / Python",
        "license": "Apache-2.0",
        "report": "projects/221-kbench-agent-harness-benchmark-cli.md",
        "pattern": "benchmark bridge -> kbench CLI -> built-in or custom agent harness -> standardized run artifacts",
        "description": "kbench normalizes SWE, Terminal-Bench 2.0, tau-bench and Standardized Agent Exams through one CLI and harness contract, including Codex, Claude Code, Gemini CLI, kode-agent-sdk and custom adapter paths.",
        "stack": [
            "TypeScript",
            "Python",
            "Shell"
        ],
        "category": "Agent Harness Benchmark CLI",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/shareai-lab_kbench.md",
        "status": "candidate",
        "tags": [
            "agent harness",
            "benchmark",
            "SWE-bench",
            "terminal-bench",
            "SAE"
        ]
    },
    {
        "name": "evmbench",
        "repo": "paradigmxyz/evmbench",
        "url": "https://github.com/paradigmxyz/evmbench",
        "stars": 421,
        "forks": 62,
        "language": "TypeScript / Python",
        "license": "Apache-2.0",
        "report": "projects/222-evmbench-smart-contract-agent-harness.md",
        "pattern": "contract upload -> sandboxed Codex detect worker -> JSON vulnerability report -> UI/report validation",
        "description": "evmbench is a domain-specific benchmark and harness for LLM agents that find and exploit smart-contract bugs, wrapping Codex detect-mode workers, job queues, secret handling, result validation and a report UI.",
        "stack": [
            "TypeScript",
            "Python",
            "Docker"
        ],
        "category": "Smart Contract Agent Benchmark Harness",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/paradigmxyz_evmbench.md",
        "status": "candidate",
        "tags": [
            "agent benchmark",
            "security",
            "codex",
            "smart contracts",
            "sandbox"
        ]
    },
    {
        "name": "Skills Best Practices",
        "repo": "mgechev/skills-best-practices",
        "url": "https://github.com/mgechev/skills-best-practices",
        "stars": 1900,
        "forks": 131,
        "language": "Python / Markdown",
        "license": "not verified",
        "report": "projects/223-skills-best-practices-agent-skill-authoring.md",
        "pattern": "skill need -> trigger-optimized frontmatter -> lean SKILL.md -> references/scripts/assets -> discovery/logic/edge-case validation -> regression-aware skill iteration",
        "description": "Skills Best Practices is a methodology layer for professional-grade agent skills, emphasizing discoverable frontmatter, progressive disclosure, deterministic helper scripts and LLM-based validation loops.",
        "stack": [
            "Python",
            "Markdown",
            "Agent Skills"
        ],
        "category": "Agent Skill Authoring Methodology",
        "lastPushed": "2026-05-24T00:00:00Z",
        "localPath": "raw-github/mgechev_skills-best-practices.md",
        "status": "candidate",
        "tags": [
            "agent skills",
            "skill authoring",
            "progressive disclosure",
            "validation",
            "skillgrade"
        ]
    },
    {
        "name": "SICA Self-Improving Coding Agent",
        "repo": "MaximeRobeyns/self_improving_coding_agent",
        "url": "https://github.com/MaximeRobeyns/self_improving_coding_agent",
        "stars": 324,
        "forks": 56,
        "language": "Python",
        "license": "MIT",
        "report": "projects/224-sica-self-improving-coding-agent.md",
        "pattern": "coding agent -> own-codebase modification -> tests/review signal -> improved next agent iteration",
        "description": "SICA is a self-improving coding-agent implementation where the agent works on its own codebase, making it a core self-referential improvement artifact.",
        "stack": [
            "Python",
            "JavaScript",
            "Docker"
        ],
        "category": "Self-Improving Coding Agent",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/maximerobeyns_self_improving_coding_agent.md",
        "status": "candidate",
        "tags": [
            "self-improving coding agent",
            "SICA",
            "code self-modification",
            "ICLR 2025 workshop"
        ]
    },
    {
        "name": "Agent Zero",
        "repo": "agent0ai/agent-zero",
        "url": "https://github.com/agent0ai/agent-zero",
        "stars": 17600,
        "forks": 3600,
        "language": "Python",
        "license": "Public repository license visible",
        "report": "projects/225-agent-zero-runtime.md",
        "pattern": "project workspace -> Linux/tools/browser/memory/skills -> inspectable agent work -> reusable state",
        "description": "Agent Zero is an autonomous-agent runtime with Linux execution, memory, browser automation, skills, plugins, projects and subordinate agents.",
        "stack": [
            "Python",
            "Docker",
            "Browser automation",
            "Agent Skills"
        ],
        "category": "Autonomous Agent Runtime",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/agent0ai_agent-zero.md",
        "status": "candidate",
        "tags": [
            "agent runtime",
            "memory",
            "skills",
            "multi-agent",
            "browser automation"
        ]
    },
    {
        "name": "elizaOS",
        "repo": "elizaOS/eliza",
        "url": "https://github.com/elizaOS/eliza",
        "stars": 17300,
        "forks": 5400,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/226-elizaos-autonomous-agent-framework.md",
        "pattern": "autonomous-agent framework -> plugins/CLI/web lifecycle -> deployed agent applications",
        "description": "elizaOS is a high-adoption autonomous-agent framework whose plugin and lifecycle surface can host memory, skill, workflow and evaluator loops.",
        "stack": [
            "TypeScript",
            "CLI",
            "Plugins",
            "Web interface"
        ],
        "category": "Autonomous Agent Framework",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/elizaos_eliza.md",
        "status": "candidate",
        "tags": [
            "agent framework",
            "plugins",
            "autonomous agents",
            "runtime infrastructure"
        ]
    },
    {
        "name": "Centaur",
        "repo": "paradigmxyz/centaur",
        "url": "https://github.com/paradigmxyz/centaur",
        "stars": 469,
        "forks": 55,
        "language": "Python / TypeScript",
        "license": "View license / MIT signal from public site",
        "report": "projects/227-centaur-secure-team-agent-runtime.md",
        "pattern": "Slack/API request -> durable control plane -> sandboxed harness -> tools/workflows -> replayable team result",
        "description": "Centaur is a multiplayer self-hosted secure team-agent runtime with Kubernetes sandboxes, bring-your-own harness support, durable workflows, tools and credential boundaries.",
        "stack": [
            "Python",
            "TypeScript",
            "Kubernetes",
            "Slack",
            "Agent harness"
        ],
        "category": "Secure Team Agent Runtime",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/paradigmxyz_centaur.md",
        "status": "candidate",
        "tags": [
            "team agent runtime",
            "harness",
            "durable workflows",
            "credential boundaries",
            "sandbox"
        ]
    },
    {
        "name": "Yunjue Agent",
        "repo": "YunjueTech/Yunjue-Agent",
        "url": "https://github.com/YunjueTech/Yunjue-Agent",
        "stars": 426,
        "forks": 49,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/228-yunjue-agent-in-situ-self-evolving-agent.md",
        "pattern": "open-ended task stream -> tool evolution -> reusable capabilities -> trace/reproduction audit",
        "description": "Yunjue Agent is a reproducible zero-start in-situ self-evolving agent system that turns execution feedback into reusable tools and auditable traces.",
        "stack": [
            "Python",
            "Tool synthesis",
            "Benchmark traces",
            "Codex CLI"
        ],
        "category": "In-Situ Self-Evolving Agent System",
        "lastPushed": "2026-02-11T00:00:00Z",
        "localPath": "raw-github/yunjuetech_yunjue-agent.md",
        "status": "candidate",
        "tags": [
            "in-situ self-evolution",
            "tool evolution",
            "benchmark traces",
            "reproducibility",
            "open-ended tasks"
        ]
    },
    {
        "name": "self-evolving-agent",
        "repo": "RangeKing/self-evolving-agent",
        "url": "https://github.com/RangeKing/self-evolving-agent",
        "stars": 9,
        "forks": 0,
        "language": "Python",
        "license": "MIT",
        "report": "projects/229-rangeking-self-evolving-agent-skill.md",
        "pattern": "agent run -> .evolution workspace -> evaluation/curriculum -> promoted capability",
        "description": "RangeKing/self-evolving-agent is an OpenClaw skill that upgrades self-improvement logs into a governed evolution workspace with curriculum, evals and promotion.",
        "stack": [
            "Python",
            "OpenClaw",
            "Benchmarks",
            "Hooks"
        ],
        "category": "OpenClaw Self-Evolving Skill",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/rangeking_self-evolving-agent.md",
        "status": "candidate",
        "tags": [
            "agent skill",
            "OpenClaw",
            "curriculum",
            "evaluation",
            "promotion"
        ]
    },
    {
        "name": "NexAgent",
        "repo": "gofenix/nex-agent",
        "url": "https://github.com/gofenix/nex-agent",
        "stars": 64,
        "forks": 5,
        "language": "Elixir",
        "license": "Unknown",
        "report": "projects/230-nex-agent-elixir-otp-self-evolving-agent.md",
        "pattern": "supervised runtime -> memory/tools/skills -> subagents/jobs -> source-level upgrades",
        "description": "NexAgent uses Elixir/OTP supervision to combine persistent sessions, memory, dynamic tools, skills, cron, subagents and source-level self-improvement.",
        "stack": [
            "Elixir",
            "OTP",
            "Memory",
            "Dynamic tools"
        ],
        "category": "Elixir/OTP Self-Evolving Agent Runtime",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/gofenix_nex-agent.md",
        "status": "candidate",
        "tags": [
            "self-evolving runtime",
            "Elixir/OTP",
            "persistent memory",
            "subagents",
            "code upgrades"
        ]
    },
    {
        "name": "hermes2anti",
        "repo": "swapedoc/hermes2anti",
        "url": "https://github.com/swapedoc/hermes2anti",
        "stars": 4,
        "forks": 0,
        "language": "Python",
        "license": "MIT",
        "report": "projects/231-hermes2anti-self-improve-agent-memory-skills.md",
        "pattern": "task session -> golden path extraction -> skill creation/security scan -> memory recall",
        "description": "hermes2anti is a compact Hermes-inspired memory and skill loop that persists lessons, creates reusable skills, scans them, and recalls prior sessions.",
        "stack": [
            "Python",
            "SQLite FTS5",
            "Agent Skills",
            "Security scanner"
        ],
        "category": "Memory and Skill Self-Improvement Toolkit",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/swapedoc_hermes2anti.md",
        "status": "candidate",
        "tags": [
            "memory",
            "skills",
            "Hermes Agent",
            "security scanning",
            "session recall"
        ]
    },
    {
        "name": "ADHDev",
        "repo": "vilmire/adhdev",
        "url": "https://github.com/vilmire/adhdev",
        "stars": 33,
        "forks": 8,
        "language": "TypeScript",
        "license": "AGPL-3.0",
        "report": "projects/232-adhdev-agent-dashboard-control-plane.md",
        "pattern": "coding-agent session -> local dashboard/control plane -> approval, status, history and continuation",
        "description": "ADHDev is a self-hosted control plane for long-running coding-agent sessions across IDEs and CLIs, including Codex, Claude Code and Hermes Agent.",
        "stack": [
            "TypeScript",
            "Node.js",
            "Local daemon",
            "Dashboard"
        ],
        "category": "Coding-Agent Control Plane",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/vilmire_adhdev.md",
        "status": "candidate",
        "tags": [
            "control plane",
            "coding agents",
            "session dashboard",
            "Codex",
            "Claude Code"
        ]
    },
    {
        "name": "AI Research SKILLs",
        "repo": "Orchestra-Research/AI-research-SKILLs",
        "url": "https://github.com/Orchestra-Research/AI-research-SKILLs",
        "stars": 8900,
        "forks": 679,
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/233-ai-research-skills-agent-research-workflow.md",
        "pattern": "research skill library -> autoresearch orchestration -> evaluation, agents, prompting and paper workflow skills",
        "description": "AI Research SKILLs is a large open-source skill library for turning coding agents into AI research agents across ideation, experiments, evaluation and paper writing.",
        "stack": [
            "Markdown",
            "npm installer",
            "Claude Code marketplace",
            "Agent skills"
        ],
        "category": "Agent Research Skill Library",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/orchestra-research_ai-research-skills.md",
        "status": "candidate",
        "tags": [
            "skills",
            "autoresearch",
            "evaluation",
            "paper writing",
            "agent workflow"
        ]
    },
    {
        "name": "ai-skills",
        "repo": "iliaal/ai-skills",
        "url": "https://github.com/iliaal/ai-skills",
        "stars": 13,
        "forks": 3,
        "language": "Shell",
        "license": "MIT",
        "report": "projects/234-ai-skills-agent-process-discipline.md",
        "pattern": "portable agent skills -> planning, debugging, review and verification discipline -> reusable behavior layer",
        "description": "ai-skills is a compact behavioral skill library for coding agents, distributing process discipline across Codex, Claude Code, Cursor, Gemini CLI and related runtimes.",
        "stack": [
            "Shell",
            "Markdown",
            "npx skills installer",
            "Agent skills"
        ],
        "category": "Agent Process Skill Library",
        "lastPushed": "2026-05-16T00:00:00Z",
        "localPath": "raw-github/iliaal_ai-skills.md",
        "status": "candidate",
        "tags": [
            "skills",
            "verification",
            "debugging",
            "planning",
            "multi-agent orchestration"
        ]
    },
    {
        "name": "Claude Trading Skills",
        "repo": "agiprolabs/claude-trading-skills",
        "url": "https://github.com/agiprolabs/claude-trading-skills",
        "stars": 31,
        "forks": 14,
        "language": "Python",
        "license": "MIT",
        "report": "projects/235-claude-trading-skills-domain-agent-workflows.md",
        "pattern": "domain skill pack -> market data / backtesting / risk / tax workflows -> reusable agent task procedures",
        "description": "Claude Trading Skills packages trading, DeFi and quantitative finance procedures as reusable Agent Skills for Claude Code, Codex, Cursor, Gemini CLI and other compatible runtimes.",
        "stack": [
            "Python",
            "Markdown",
            "Agent Skills"
        ],
        "category": "Domain Agent Skill Workflow Pack",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/agiprolabs_claude-trading-skills.md",
        "status": "candidate",
        "tags": [
            "agent skills",
            "domain workflow",
            "trading",
            "Codex",
            "Claude Code"
        ]
    },
    {
        "name": "Spec Kit Agent Skills",
        "repo": "dceoy/speckit-agent-skills",
        "url": "https://github.com/dceoy/speckit-agent-skills",
        "stars": 88,
        "forks": 21,
        "language": "Shell",
        "license": "AGPL-3.0",
        "report": "projects/236-speckit-agent-skills-spec-driven-workflow.md",
        "pattern": "spec-driven workflow -> constitution/specify/plan/tasks/implement skills -> multi-runtime agent process discipline",
        "description": "speckit-agent-skills maps Spec Kit methodology into shared skills, prompts, commands and agent files for Claude Code, Codex CLI, GitHub Copilot CLI, Gemini CLI and related runtimes.",
        "stack": [
            "Shell",
            "Markdown",
            "Spec Kit"
        ],
        "category": "Spec-Driven Agent Workflow Skills",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/dceoy_speckit-agent-skills.md",
        "status": "candidate",
        "tags": [
            "agent skills",
            "spec-driven development",
            "workflow orchestration",
            "Codex",
            "Gemini CLI"
        ]
    },
    {
        "name": "CUGA Agent",
        "repo": "cuga-project/cuga-agent",
        "url": "https://github.com/cuga-project/cuga-agent",
        "stars": 742,
        "forks": 132,
        "language": "Python",
        "license": "Open source public repository",
        "report": "projects/237-cuga-agent-enterprise-agent-harness.md",
        "pattern": "enterprise agent config -> tools/MCP/OpenAPI -> policies/HITL -> optional memory/knowledge/skills -> trajectory visualization",
        "description": "CUGA is an enterprise generalist agent harness that wires APIs, MCP servers, policies, memory, knowledge and agent skills into configurable web/API task execution.",
        "stack": [
            "Python",
            "TypeScript",
            "Agent Skills",
            "MCP"
        ],
        "category": "Enterprise Generalist Agent Harness",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/cuga-project_cuga-agent.md",
        "status": "candidate",
        "tags": [
            "agent harness",
            "MCP",
            "policy",
            "skills",
            "enterprise agents"
        ]
    },
    {
        "name": "AutoR",
        "repo": "AutoX-AI-Labs/AutoR",
        "url": "https://github.com/AutoX-AI-Labs/AutoR",
        "stars": 897,
        "forks": 22,
        "language": "Python",
        "license": "Public repository license not verified",
        "report": "projects/238-autor-human-centered-research-harness.md",
        "pattern": "human research intent -> staged agent execution -> approval checkpoints -> artifact-backed run directory -> resume/redo/rollback",
        "description": "AutoR is a terminal-first research harness where AI handles execution, humans retain direction, and every run is stored as an inspectable artifact on disk.",
        "stack": [
            "Python",
            "JavaScript",
            "Research Harness"
        ],
        "category": "Human-Centered Research Harness",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/autox-ai-labs_autor.md",
        "status": "candidate",
        "tags": [
            "research agent",
            "harness",
            "artifact-backed runs",
            "human approval"
        ]
    },
    {
        "name": "Chorus",
        "repo": "Chorus-AIDLC/Chorus",
        "url": "https://github.com/Chorus-AIDLC/Chorus",
        "stars": 909,
        "forks": 84,
        "language": "TypeScript",
        "license": "AGPL-3.0",
        "report": "projects/239-chorus-ai-human-collaboration-harness.md",
        "pattern": "requirements/task state -> sub-agent orchestration -> permissions/context injection -> observability/failure recovery -> OpenSpec archival",
        "description": "Chorus is an AI-human collaboration harness that manages session lifecycle, task state, sub-agent orchestration, permissions, observability and failure recovery around LLM agents.",
        "stack": [
            "TypeScript",
            "Shell",
            "Astro"
        ],
        "category": "AI-Human Collaboration Harness",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/chorus-aidlc_chorus.md",
        "status": "candidate",
        "tags": [
            "agent harness",
            "multi-agent",
            "AI-DLC",
            "permissions",
            "observability"
        ]
    },
    {
        "name": "KWeaver Core",
        "repo": "kweaver-ai/kweaver-core",
        "url": "https://github.com/kweaver-ai/kweaver-core",
        "stars": 803,
        "forks": 92,
        "language": "Go",
        "license": "Apache-2.0",
        "report": "projects/240-kweaver-core-enterprise-decision-agent-harness.md",
        "pattern": "business knowledge network -> governed context loader -> tool curation/path guidance -> decision agent execution -> TraceAI feedback evidence",
        "description": "KWeaver Core is a harness-first foundation for enterprise decision agents, combining governed context, knowledge networks, tool policies and TraceAI-style feedback evidence.",
        "stack": [
            "Go",
            "Python",
            "Knowledge Network"
        ],
        "category": "Enterprise Decision Agent Harness",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/kweaver-ai_kweaver-core.md",
        "status": "candidate",
        "tags": [
            "decision agents",
            "harness",
            "knowledge network",
            "TraceAI",
            "governance"
        ]
    },
    {
        "name": "ClawProBench",
        "repo": "suyoumo/ClawProBench",
        "url": "https://github.com/suyoumo/ClawProBench",
        "stars": 690,
        "forks": 50,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/241-clawprobench-live-openclaw-benchmark.md",
        "pattern": "OpenClaw runtime task -> live scenario execution -> deterministic grading -> structured report -> leaderboard/profile selection",
        "description": "ClawProBench is a live-first benchmark harness for evaluating LLM agents in the OpenClaw runtime with deterministic grading, profile selection and repeated-trial reliability.",
        "stack": [
            "Python",
            "OpenClaw",
            "Benchmark"
        ],
        "category": "Live OpenClaw Benchmark Harness",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/suyoumo_clawprobench.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "OpenClaw",
            "agent evaluation",
            "deterministic grading"
        ]
    },
    {
        "name": "sd0x-dev-flow",
        "repo": "sd0xdev/sd0x-dev-flow",
        "url": "https://github.com/sd0xdev/sd0x-dev-flow",
        "stars": 157,
        "forks": 21,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/242-sd0x-dev-flow-claude-code-harness-safety-gates.md",
        "pattern": "hook lifecycle -> state-machine gates -> dual-review approvals -> fail-closed enforcement -> reusable skill pack",
        "description": "sd0x-dev-flow is a harness layer for Claude Code with dual-review gates, state-machine controls and fail-closed safety for coding-agent workflows.",
        "stack": [
            "JavaScript",
            "TypeScript",
            "Claude Code hooks"
        ],
        "category": "Claude Code Harness Safety Runtime",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/sd0xdev_sd0x-dev-flow.md",
        "status": "candidate",
        "tags": [
            "harness",
            "Claude Code",
            "safety gates",
            "skill orchestration",
            "agent workflow"
        ]
    },
    {
        "name": "Utah",
        "repo": "inngest/utah",
        "url": "https://github.com/inngest/utah",
        "stars": 116,
        "forks": 2,
        "language": "TypeScript",
        "license": "Apache-2.0",
        "report": "projects/243-utah-event-driven-agent-harness.md",
        "pattern": "incoming event -> think/act/observe loop -> durable retries and singleton control -> memory/session trace updates -> channel response",
        "description": "Utah is a universally triggered agent harness built on Inngest events with durable retries and local worker execution for think-act-observe loops.",
        "stack": [
            "TypeScript",
            "Inngest",
            "pi-ai",
            "skills"
        ],
        "category": "Event-Driven Agent Harness Runtime",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/inngest_utah.md",
        "status": "candidate",
        "tags": [
            "harness",
            "event-driven",
            "Inngest",
            "agent memory",
            "skills"
        ]
    },
    {
        "name": "Meta Harness",
        "repo": "SuperagenticAI/metaharness",
        "url": "https://github.com/SuperagenticAI/metaharness",
        "stars": 102,
        "forks": 11,
        "language": "Python",
        "license": "Repository LICENSE file",
        "report": "projects/244-metaharness-benchmark-driven-harness-evolution.md",
        "pattern": "propose harness change -> run benchmark matrix -> compare score/runtime/cost -> keep best candidate -> persist ledger",
        "description": "Meta Harness is a benchmark-driven outer loop for coding-agent harness optimization, with reproducible candidate ledgers and run evidence.",
        "stack": [
            "Python",
            "Codex CLI",
            "Ollama benchmark harness"
        ],
        "category": "Benchmark-Driven Harness Evolution Toolkit",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/superagenticai_metaharness.md",
        "status": "candidate",
        "tags": [
            "benchmark harness",
            "Codex CLI",
            "Ollama",
            "proposal ledger",
            "agent optimization"
        ]
    },
    {
        "name": "Supermemory",
        "repo": "supermemoryai/supermemory",
        "url": "https://github.com/supermemoryai/supermemory",
        "stars": 22700,
        "forks": 2100,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/246-supermemory-open-memory-infrastructure.md",
        "pattern": "chat/browser context ingest -> memory indexing -> retrieval scoring -> personalization -> downstream agent loop reuse",
        "description": "Supermemory 是开源 AI memory 基础设施，把聊天与浏览上下文沉淀为可检索、可复用的长期记忆层。",
        "stack": [
            "TypeScript",
            "Memory Infrastructure",
            "Postgres",
            "Redis"
        ],
        "category": "Open AI Memory Infrastructure",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/supermemoryai_supermemory.md",
        "status": "candidate",
        "tags": [
            "memory substrate",
            "retrieval",
            "personalization",
            "agent memory",
            "infra"
        ]
    },
    {
        "name": "FlagoS Skills",
        "repo": "flagos-ai/skills",
        "url": "https://github.com/flagos-ai/skills",
        "stars": 12,
        "forks": 11,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/247-flagos-skills-open-agent-skill-registry.md",
        "pattern": "skill package spec -> registry publishing -> install hooks -> versioning -> cross-agent reuse",
        "description": "FlagoS skills 提供开源 AI agent 技能注册表和包格式，把技能资产变成可发布、可安装、可复用模块。",
        "stack": [
            "Python",
            "Skill Registry",
            "Package Tooling"
        ],
        "category": "Open Agent Skill Registry",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/flagos-ai_skills.md",
        "status": "candidate",
        "tags": [
            "skills",
            "registry",
            "package format",
            "agent tooling",
            "reuse"
        ]
    },
    {
        "name": "SkillsBench",
        "repo": "benchflow-ai/skillsbench",
        "url": "https://github.com/benchflow-ai/skillsbench",
        "stars": 1300,
        "forks": 312,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/248-skillsbench-agent-skills-benchmark.md",
        "pattern": "define skill-centric tasks -> run agent plus skill compositions -> score verifier outputs and task success -> compare per-task and per-skill behavior across models and runtimes",
        "description": "SkillsBench evaluates how well AI agents actually use reusable skills across specialized multi-step workflows under deterministic and gym-style benchmark settings.",
        "stack": [
            "PDDL",
            "Python",
            "Website",
            "Tasks"
        ],
        "category": "Agent Skills Benchmark Harness",
        "lastPushed": "2026-06-03T00:00:00Z",
        "localPath": "raw-github/benchflow-ai_skillsbench.md",
        "status": "candidate",
        "tags": [
            "skills",
            "benchmark",
            "evaluation",
            "task taxonomy",
            "dataset"
        ]
    },
    {
        "name": "Meta-Harness (Stanford IRIS)",
        "repo": "stanford-iris-lab/meta-harness",
        "url": "https://github.com/stanford-iris-lab/meta-harness",
        "stars": 1079,
        "forks": 104,
        "language": "Python",
        "license": "MIT",
        "report": "projects/249-stanford-meta-harness-framework.md",
        "pattern": "define domain spec -> search harness candidates -> run reference experiments -> compare outcomes -> retain stronger harness",
        "description": "Meta-Harness provides reference code for automated search over model harnesses, including terminal benchmark scaffold evolution and text-classification memory-system search.",
        "stack": [
            "Python",
            "Harness Search",
            "Benchmark Scaffold Evolution"
        ],
        "category": "Meta-harness framework and reference experiments",
        "lastPushed": "2026-04-29T16:39:58Z",
        "localPath": "raw-github/stanford-iris-lab_meta-harness.md",
        "status": "candidate",
        "tags": [
            "meta-harness",
            "harness engineering",
            "agent evolution",
            "benchmark",
            "outer-loop search"
        ]
    },
    {
        "name": "Hermes Benchmark Outer-Loop Harness",
        "repo": "howdymary/hermes-agent-metaharness",
        "url": "https://github.com/howdymary/hermes-agent-metaharness",
        "stars": 89,
        "forks": 9,
        "language": "Python",
        "license": "MIT",
        "report": "projects/250-hermes-agent-metaharness-outer-loop.md",
        "pattern": "select candidate -> evaluate on TBLite/TB2 -> parse archives -> compare baseline vs candidate -> update frontier",
        "description": "Hermes Agent Meta-Harness is a standalone outer-loop evaluator that optimizes Hermes benchmark harness candidates without modifying model weights.",
        "stack": [
            "Python",
            "Hermes Benchmark Outer Loop"
        ],
        "category": "Hermes Benchmark Outer-Loop Harness",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/howdymary_hermes-agent-metaharness.md",
        "status": "candidate",
        "tags": [
            "hermes",
            "meta-harness",
            "benchmark orchestration",
            "frontier tracking",
            "candidate mutation"
        ]
    },
    {
        "name": "SkillX",
        "repo": "zjunlp/SkillX",
        "url": "https://github.com/zjunlp/SkillX",
        "stars": 181,
        "forks": 16,
        "language": "Python",
        "license": "MIT",
        "report": "projects/251-skillx-agent-skill-kb-construction.md",
        "pattern": "collect trajectories -> extract multi-level skills -> refine and filter skill library -> expand via exploration -> transfer to other agents",
        "description": "SkillX is a paper-backed framework that automatically constructs reusable multi-level skill knowledge bases for agents from execution experience.",
        "stack": [
            "Python"
        ],
        "category": "Automated Agent Skill KB Construction",
        "lastPushed": "2026-05-26T00:00:00Z",
        "localPath": "raw-github/zjunlp_skillx.md",
        "status": "candidate",
        "tags": [
            "skills",
            "knowledge base",
            "experience learning",
            "agent transfer",
            "benchmark"
        ]
    },
    {
        "name": "mem9",
        "repo": "mem9-ai/mem9",
        "url": "https://github.com/mem9-ai/mem9",
        "stars": 1100,
        "forks": 111,
        "language": "Go",
        "license": "Apache-2.0",
        "report": "projects/252-mem9-persistent-memory-layer.md",
        "pattern": "memory write/search/get/update/delete API -> runtime plugins and skills -> cross-session recall -> shared multi-agent memory reuse",
        "description": "mem9 provides a persistent memory server and plugin integrations so multiple agent runtimes can share durable context instead of isolated session notes.",
        "stack": [
            "Go",
            "TypeScript",
            "OpenClaw",
            "Hermes",
            "Codex",
            "Dify"
        ],
        "category": "Persistent Memory Layer for Multi-Agent Runtimes",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/mem9-ai_mem9.md",
        "status": "candidate",
        "tags": [
            "memory",
            "multi-agent",
            "openclaw",
            "codex",
            "persistent context"
        ]
    },
    {
        "name": "memory-lancedb-pro",
        "repo": "CortexReach/memory-lancedb-pro",
        "url": "https://github.com/CortexReach/memory-lancedb-pro",
        "stars": 4400,
        "forks": 725,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/253-memory-lancedb-pro-openclaw-memory-assistant.md",
        "pattern": "auto-capture memory -> vector+BM25 retrieval -> rerank/context injection -> scoped memory boundaries -> CLI backup and migration",
        "description": "memory-lancedb-pro is a production-grade OpenClaw memory plugin that combines long-term storage, hybrid retrieval, and scoped context injection for agent workflows.",
        "stack": [
            "TypeScript",
            "LanceDB",
            "OpenClaw plugin"
        ],
        "category": "OpenClaw Long-Term Memory Plugin",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/cortexreach_memory-lancedb-pro.md",
        "status": "candidate",
        "tags": [
            "memory plugin",
            "lancedb",
            "openclaw",
            "hybrid retrieval",
            "agent context"
        ]
    },
    {
        "name": "GBrain",
        "repo": "garrytan/gbrain",
        "url": "https://github.com/garrytan/gbrain",
        "stars": 19200,
        "forks": 2700,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/254-gbrain-agent-company-brain.md",
        "pattern": "ingest multi-source signals -> synthesize and link entities -> persist memory graph -> query/retrieve for next actions -> recurring maintenance jobs",
        "description": "GBrain is an opinionated long-term brain layer for OpenClaw and Hermes-style agents, combining structured memory pages, graph linking, and retrieval workflows.",
        "stack": [
            "TypeScript",
            "Markdown",
            "Knowledge Graph",
            "OpenClaw"
        ],
        "category": "Agent Company Brain and Memory OS",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/garrytan_gbrain.md",
        "status": "candidate",
        "tags": [
            "memory substrate",
            "knowledge graph",
            "openclaw",
            "hermes",
            "agent ops"
        ]
    },
    {
        "name": "Akephalos",
        "repo": "sunnja69/akephalos",
        "url": "https://github.com/sunnja69/akephalos",
        "stars": 0,
        "forks": 1,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/255-akephalos-local-agent-passport.md",
        "pattern": "local passport init -> markdown/jsonl memory updates -> multi-agent bundle sync -> optional mcp serving",
        "description": "Akephalos is a markdown-first local passport for AI agents that carries durable user and project context across different tools and machines.",
        "stack": [
            "TypeScript",
            "Markdown",
            "JSONL",
            "CLI"
        ],
        "category": "Local-First Agent Passport Memory Bundle",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/sunnja69_akephalos.md",
        "status": "candidate",
        "tags": [
            "local-first",
            "agent passport",
            "memory portability",
            "markdown",
            "mcp"
        ]
    },
    {
        "name": "InternAgent-1.5",
        "repo": "InternScience/InternAgent",
        "url": "https://github.com/InternScience/InternAgent",
        "stars": 1300,
        "forks": 116,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/256-internagent-autonomous-scientific-discovery.md",
        "pattern": "idea generation -> method construction -> experiment planning and execution -> benchmark evaluation -> memory-informed next iteration",
        "description": "InternAgent-1.5 is a unified multi-agent framework for long-horizon autonomous scientific discovery, spanning discovery runs, QA deep research, and reproducible task execution.",
        "stack": [
            "Python",
            "Shell",
            "Deep-Research",
            "Experiment Orchestration"
        ],
        "category": "Autonomous Scientific Discovery Agent Framework",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/internscience_internagent.md",
        "status": "candidate",
        "tags": [
            "research agent",
            "scientific discovery",
            "multi-agent",
            "benchmark",
            "memory"
        ]
    },
    {
        "name": "ClawXMemory",
        "repo": "OpenBMB/ClawXMemory",
        "url": "https://github.com/OpenBMB/ClawXMemory",
        "stars": 33,
        "forks": 8,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/257-clawxmemory-openclaw-long-term-memory-module.md",
        "pattern": "background indexing of chat sessions -> markdown file memories + sqlite control-plane -> model-guided recall selection -> dashboard traces for recall/index/dream lifecycle",
        "description": "ClawXMemory is a multi-level OpenClaw memory plugin that writes durable file-based long-term memory and performs model-guided recall for project/user context.",
        "stack": [
            "TypeScript",
            "OpenClaw",
            "Markdown",
            "SQLite"
        ],
        "category": "OpenClaw Long-Term Memory Module",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/openbmb_clawxmemory.md",
        "status": "candidate",
        "tags": [
            "memory",
            "openclaw",
            "markdown memory",
            "long-term context",
            "local-first"
        ]
    },
    {
        "name": "HexAgent",
        "repo": "UnicomAI/hexagent",
        "url": "https://github.com/UnicomAI/hexagent",
        "stars": 122,
        "forks": 12,
        "language": "Python",
        "license": "MIT",
        "report": "projects/258-hexagent-agent-harness-runtime.md",
        "pattern": "runtime/computer separation -> pluggable local-vm-cloud computer protocol -> middleware hooks and skill injection -> isolated subagent execution with MCP/tool orchestration",
        "description": "HexAgent is a harness runtime that gives LLM agents an isolated computer layer and pluggable execution protocol instead of coupling agent runtime and machine state.",
        "stack": [
            "Python",
            "TypeScript",
            "MCP",
            "Sandboxed Computer"
        ],
        "category": "LLM Computer Harness Runtime",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/unicomai_hexagent.md",
        "status": "candidate",
        "tags": [
            "harness",
            "runtime",
            "mcp",
            "skills",
            "sandbox"
        ]
    },
    {
        "name": "Agent Harness (EvalOps)",
        "repo": "evalops/agent-harness",
        "url": "https://github.com/evalops/agent-harness",
        "stars": 18,
        "forks": 5,
        "language": "Python",
        "license": "MIT",
        "report": "projects/259-evalops-agent-harness-provider-adapter.md",
        "pattern": "register tools once -> normalize json schema and response shape -> lazy-load provider adapters -> run the same task across multiple agent backends for comparison",
        "description": "evalops/agent-harness is a lightweight harness adapter that lets one tool registry and one prompt surface run across OpenAI and Claude agent SDK backends.",
        "stack": [
            "Python",
            "Bazel",
            "OpenAI-Agents",
            "Claude-Agent-SDK"
        ],
        "category": "Cross-Provider Agent Harness Adapter",
        "lastPushed": "2026-06-04T00:00:00Z",
        "localPath": "raw-github/evalops_agent-harness.md",
        "status": "candidate",
        "tags": [
            "harness",
            "provider swap",
            "evaluation",
            "mcp",
            "python",
            "framework-runtime"
        ]
    },
    {
        "name": "Harness Evals",
        "repo": "harness/harness-evals",
        "url": "https://github.com/harness/harness-evals",
        "stars": 3,
        "forks": 3,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/260-harness-evals-agent-reliability-benchmark.md",
        "pattern": "evaluate cases with normalized 0-1 scores -> configurable pass thresholds -> optional llm judged metrics and telemetry sinks -> regression export to CI observability pipelines",
        "description": "Harness Evals is an open-source evaluation framework for LLM agents, prompts, and structured outputs with normalized score semantics.",
        "stack": [
            "Python",
            "OTel",
            "LLM-Judge Metrics",
            "CI"
        ],
        "category": "Agent Reliability Evaluation Framework",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/harness_harness-evals.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "evaluation",
            "reliability",
            "agent metrics",
            "observability"
        ]
    },
    {
        "name": "Browser Harness",
        "repo": "browser-use/browser-harness",
        "url": "https://github.com/browser-use/browser-harness",
        "stars": 14300,
        "forks": 1300,
        "language": "Python",
        "license": "MIT",
        "report": "projects/261-browser-harness-self-healing-web-agent-runtime.md",
        "pattern": "attach one websocket to Chrome -> let the agent call or write browser helpers -> execute repeatable browser tasks -> keep the harness editable so the next run can reuse stronger helpers",
        "description": "Browser Harness connects LLM agents to a real browser through a thin editable CDP harness and explicitly encourages runtime self-healing by letting the agent write missing helper code during execution.",
        "stack": [
            "Python",
            "CDP",
            "Chrome Debugging",
            "Playwright"
        ],
        "category": "Self-Healing Browser Agent Harness",
        "lastPushed": "2026-05-20T00:00:00Z",
        "localPath": "raw-github/browser-use_browser-harness.md",
        "status": "candidate",
        "tags": [
            "browser harness",
            "cdp",
            "self-healing",
            "playwright",
            "agent workspace"
        ]
    },
    {
        "name": "Awesome Agent Skills",
        "repo": "junminhong/awesome-agent-skills",
        "url": "https://github.com/junminhong/awesome-agent-skills",
        "stars": 13,
        "forks": 7,
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/262-awesome-agent-skills-cross-platform-index.md",
        "pattern": "curate platform-specific skills -> define skill frontmatter and folder template -> enumerate design patterns and evaluation checklists -> map official docs for reusable implementation",
        "description": "junminhong/awesome-agent-skills curates reusable skill workflows and templates for Codex, Claude Code, and other agent platforms.",
        "stack": [
            "Markdown",
            "SKILL.md Templates",
            "Codex",
            "Claude Code"
        ],
        "category": "Cross-Platform Agent Skill Index",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/junminhong_awesome-agent-skills.md",
        "status": "candidate",
        "tags": [
            "skills",
            "resource-index",
            "codex",
            "claude-code",
            "workflow templates"
        ]
    },
    {
        "name": "Trellis",
        "repo": "mindfold-ai/Trellis",
        "url": "https://github.com/mindfold-ai/Trellis",
        "stars": 8500,
        "forks": 466,
        "language": "Python",
        "license": "AGPL-3.0",
        "report": "projects/263-trellis-cognitive-workspace-runtime.md",
        "pattern": "agent workspace with visual browser timelines -> workspace state and memory graph persistence -> explicit logic layer for plan/edit/review loops -> local execution with web and tool integrations",
        "description": "Trellis is an open-source cognitive workspace for autonomous agents with browser execution, persistent workspace memory, and explicit reasoning workflows.",
        "stack": [
            "Python",
            "TypeScript",
            "Rust",
            "CDP",
            "Docker"
        ],
        "category": "Cognitive Workspace Agent Runtime",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/mindfold-ai_trellis.md",
        "status": "candidate",
        "tags": [
            "agent workspace",
            "memory",
            "browser automation",
            "planner",
            "runtime"
        ]
    },
    {
        "name": "Awesome Agent Harness (Picrew)",
        "repo": "Picrew/awesome-agent-harness",
        "url": "https://github.com/Picrew/awesome-agent-harness",
        "stars": 673,
        "forks": 53,
        "language": "Markdown",
        "license": "Unknown",
        "report": "projects/264-awesome-agent-harness-picrew-curation.md",
        "pattern": "aggregate benchmark suites and harness runtimes -> map evaluation dimensions and reliability criteria -> link open-source implementation references -> maintain rapid ecosystem comparison entrypoint",
        "description": "Picrew/awesome-agent-harness is a curated index of AI agent harness frameworks, benchmark suites, and reliability-oriented evaluation resources.",
        "stack": [
            "Markdown",
            "Benchmark Catalog",
            "Runtime Comparison"
        ],
        "category": "Awesome Agent Harness Landscape",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/picrew_awesome-agent-harness.md",
        "status": "candidate",
        "tags": [
            "harness",
            "awesome-list",
            "benchmark",
            "evaluation",
            "resource-index"
        ]
    },
    {
        "name": "Awesome Agent Harness (AutoJunjie)",
        "repo": "AutoJunjie/awesome-agent-harness",
        "url": "https://github.com/AutoJunjie/awesome-agent-harness",
        "stars": 437,
        "forks": 32,
        "language": "Markdown",
        "license": "Unknown",
        "report": "projects/265-awesome-agent-harness-autojunjie-curation.md",
        "pattern": "collect harness repositories and papers -> classify them by lifecycle, runtime, memory, protocols, and workflows -> provide a quick browse path for reproducibility and safety trends",
        "description": "AutoJunjie/awesome-agent-harness curates the emerging agent harness ecosystem, combining benchmark references and implementation pointers.",
        "stack": [
            "Markdown",
            "Resource Curation",
            "Benchmark Notes"
        ],
        "category": "Harness Curation and Reading Map",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/autojunjie_awesome-agent-harness.md",
        "status": "candidate",
        "tags": [
            "harness",
            "resource-index",
            "benchmark",
            "memory",
            "protocols"
        ]
    },
    {
        "name": "Learn Claude Code",
        "repo": "shareAI-lab/learn-claude-code",
        "url": "https://github.com/shareAI-lab/learn-claude-code",
        "stars": 63000,
        "forks": 10300,
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/266-learn-claude-code-agent-curriculum.md",
        "pattern": "structured learning path -> daily skill tasks with runnable examples -> command and workflow rehearsal -> advanced orchestration patterns for practical coding-agent productivity",
        "description": "learn-claude-code provides a staged curriculum and practical exercises for Claude Code users to build reliable agent coding workflows.",
        "stack": [
            "Markdown",
            "CLI Skills",
            "Workflow Playbooks"
        ],
        "category": "Claude Code Skill Learning Curriculum",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/shareai-lab_learn-claude-code.md",
        "status": "candidate",
        "tags": [
            "claude-code",
            "skills",
            "curriculum",
            "workflow",
            "coding-agent"
        ]
    },
    {
        "name": "AI Agent Benchmark",
        "repo": "murataslan1/ai-agent-benchmark",
        "url": "https://github.com/murataslan1/ai-agent-benchmark",
        "stars": 24,
        "forks": 4,
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/267-ai-agent-benchmark-multi-domain-pack.md",
        "pattern": "define multi-domain task suites -> evaluate coding/math/memory/translation and safety behavior -> score cross-model outcomes -> expose benchmark schema for reproducible comparisons",
        "description": "ai-agent-benchmark is a compact benchmark repository that evaluates AI agents across coding, math, memory, translation, and safety-oriented task slices.",
        "stack": [
            "Markdown",
            "JSON",
            "Python Bench Scripts"
        ],
        "category": "Multi-Domain Agent Benchmark Pack",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/murataslan1_ai-agent-benchmark.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "agent-evaluation",
            "multi-domain",
            "safety",
            "comparison"
        ]
    },
    {
        "name": "holaOS",
        "repo": "holaboss-ai/holaOS",
        "url": "https://github.com/holaboss-ai/holaOS",
        "stars": 5400,
        "forks": 328,
        "language": "TypeScript",
        "license": "Modified Apache-2.0",
        "report": "projects/268-holaos-long-horizon-agent-environment.md",
        "pattern": "agent environment as execution substrate -> continuity-oriented context and memory management -> MCP-compatible tooling for long-horizon work -> self-evolving workflow emphasis through environment-level adaptation",
        "description": "holaOS is an agent environment focused on long-horizon continuity, context retention, and self-evolving workflows for autonomous execution.",
        "stack": [
            "TypeScript",
            "Tauri",
            "MCP",
            "Context Management"
        ],
        "category": "Long-Horizon Agent Environment",
        "lastPushed": "2026-05-27T00:00:00Z",
        "localPath": "raw-github/holaboss-ai_holaos.md",
        "status": "candidate",
        "tags": [
            "agent os",
            "long-horizon",
            "memory",
            "context",
            "self-evolving"
        ]
    },
    {
        "name": "Deep Agents",
        "repo": "langchain-ai/deepagents",
        "url": "https://github.com/langchain-ai/deepagents",
        "stars": 23400,
        "forks": 3300,
        "language": "Python",
        "license": "MIT",
        "report": "projects/269-deepagents-batteries-included-harness.md",
        "pattern": "opinionated harness runtime -> sub-agent delegation and filesystem actions -> persistent memory plus context management -> evaluation and deployment paths via LangGraph/LangSmith",
        "description": "Deep Agents is a batteries-included agent harness that bundles planning, context management, skills, and persistent memory for long-horizon execution.",
        "stack": [
            "Python",
            "TypeScript",
            "LangGraph",
            "LangSmith"
        ],
        "category": "Batteries-included Agent Harness Runtime",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/langchain-ai_deepagents.md",
        "status": "candidate",
        "tags": [
            "harness",
            "runtime",
            "skills",
            "memory",
            "evaluation"
        ]
    },
    {
        "name": "Archon",
        "repo": "coleam00/Archon",
        "url": "https://github.com/coleam00/Archon",
        "stars": 21900,
        "forks": 3300,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/270-archon-ai-coding-harness-builder.md",
        "pattern": "workflow-defined coding pipeline -> deterministic phases and validation gates -> isolated worktree execution -> artifacted review/PR generation with mixed deterministic and AI nodes",
        "description": "Archon is an open-source harness builder for AI coding that turns development processes into deterministic, reusable workflows.",
        "stack": [
            "TypeScript",
            "Bun",
            "YAML",
            "Workflow Engine"
        ],
        "category": "Deterministic AI Coding Harness Builder",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/coleam00_archon.md",
        "status": "candidate",
        "tags": [
            "harness",
            "workflow-engine",
            "coding-agent",
            "validation",
            "orchestration"
        ]
    },
    {
        "name": "Best of Agent Harnesses",
        "repo": "RyanAlberts/best-of-Agent-Harnesses",
        "url": "https://github.com/RyanAlberts/best-of-Agent-Harnesses",
        "stars": 64,
        "forks": 4,
        "language": "Python",
        "license": "CC-BY-SA-4.0",
        "report": "projects/271-best-of-agent-harnesses-ranked-index.md",
        "pattern": "collect harness projects -> score and rank ecosystem coverage -> expose category tags and update cadence -> provide comparative entrypoint for reliability-oriented harness selection",
        "description": "best-of-Agent-Harnesses curates and ranks 100+ agent harness projects, exposing weekly-updated use-case, eval, memory, MCP, and orchestration comparisons for harness selection.",
        "stack": [
            "Python",
            "Shell",
            "Generated Best-of Lists"
        ],
        "category": "Ranked Agent Harness Landscape Index",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/ryanalberts_best-of-agent-harnesses.md",
        "status": "candidate",
        "tags": [
            "awesome-list",
            "harness",
            "ranking",
            "resource-index",
            "evaluation"
        ]
    },
    {
        "name": "SkillOpt",
        "repo": "microsoft/SkillOpt",
        "url": "https://github.com/microsoft/SkillOpt",
        "stars": 4000,
        "forks": 416,
        "language": "Python",
        "license": "MIT",
        "report": "projects/272-skillopt-self-evolving-agent-skills.md",
        "pattern": "collect trajectories -> propose skill edits -> validate on held-out tasks -> keep stronger best_skill artifacts -> repeat like epochs and mini-batches without touching base model weights",
        "description": "SkillOpt is a text-space optimizer that trains reusable natural-language skills for frozen LLM agents through trajectory-driven edits, validation-gated updates, and deployable best_skill.md artifacts.",
        "stack": [
            "Python",
            "HTML",
            "Skill Training Loops"
        ],
        "category": "Self-Evolving Agent Skill Optimizer",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/microsoft_skillopt.md",
        "status": "candidate",
        "tags": [
            "agent skills",
            "skill optimization",
            "frozen model",
            "validation gates",
            "cross-harness eval"
        ]
    },
    {
        "name": "TencentDB Agent Memory",
        "repo": "Tencent/TencentDB-Agent-Memory",
        "url": "https://github.com/Tencent/TencentDB-Agent-Memory",
        "stars": 4300,
        "forks": 354,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/273-tencentdb-agent-memory-local-memory-substrate.md",
        "pattern": "symbolic short-term memory plus layered long-term memory -> plugin-based integration into agent runtimes -> local-first persistence pipeline -> benchmarked token and pass-rate impact reporting",
        "description": "TencentDB Agent Memory provides a local-first long-term memory pipeline for AI agents with plugin integration and benchmarked efficiency gains.",
        "stack": [
            "TypeScript",
            "Python",
            "OpenClaw Plugin"
        ],
        "category": "Local Long-Term Agent Memory Substrate",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/tencent_tencentdb-agent-memory.md",
        "status": "candidate",
        "tags": [
            "memory",
            "long-term-memory",
            "openclaw",
            "local-first",
            "plugin"
        ]
    },
    {
        "name": "GitTaskBench",
        "repo": "QuantaAlpha/GitTaskBench",
        "url": "https://github.com/QuantaAlpha/GitTaskBench",
        "stars": 255,
        "forks": 20,
        "language": "Python",
        "license": "Unknown",
        "report": "projects/274-gittaskbench-repo-level-code-agent-benchmark.md",
        "pattern": "repo-level task suites -> environment setup and incremental bug-fixing traces -> cost-aware alpha metrics for code-agent performance -> multi-agent runner comparison across real repositories",
        "description": "GitTaskBench is a repository-level benchmark for real-world coding-agent tasks from repository understanding through implementation and task delivery.",
        "stack": [
            "Python",
            "Jupyter",
            "C++",
            "Benchmark Tooling"
        ],
        "category": "Repo-Level Code Agent Benchmark Harness",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/quantaalpha_gittaskbench.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "code-agent",
            "repo-level",
            "evaluation",
            "harness"
        ]
    },
    {
        "name": "OpenClaw ClawHub",
        "repo": "openclaw/clawhub",
        "url": "https://github.com/openclaw/clawhub",
        "stars": 8800,
        "forks": 1400,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/275-openclaw-clawhub-package-catalog.md",
        "pattern": "package discovery and rating hub -> curated OpenClaw package metadata -> install and publish flow -> reusable skill and harness package circulation",
        "description": "ClawHub is the OpenClaw package catalog for discovering, rating, and sharing open-source AI coding agent packages and workflows.",
        "stack": [
            "TypeScript",
            "React",
            "OpenClaw Packages"
        ],
        "category": "OpenClaw Package Catalog and Skill Distribution Hub",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/openclaw_clawhub.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "package-catalog",
            "skills",
            "distribution",
            "marketplace"
        ]
    },
    {
        "name": "Awesome OpenClaw Skills",
        "repo": "VoltAgent/awesome-openclaw-skills",
        "url": "https://github.com/VoltAgent/awesome-openclaw-skills",
        "stars": 49400,
        "forks": 4800,
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/276-awesome-openclaw-skills-curated-index.md",
        "pattern": "collect OpenClaw skills and tools -> categorize by use case and domain -> provide fast lookup and install references -> support reusable skill adoption",
        "description": "awesome-openclaw-skills is a large curated index of OpenClaw skills, prompts, and reusable agent workflow assets.",
        "stack": [
            "Markdown",
            "Curated Skill Catalog"
        ],
        "category": "OpenClaw Skill and Agent Workflow Index",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/voltagent_awesome-openclaw-skills.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "skills",
            "awesome-list",
            "resource-index",
            "catalog"
        ]
    },
    {
        "name": "Awesome OpenClaw",
        "repo": "ZeroLu/awesome-openclaw",
        "url": "https://github.com/ZeroLu/awesome-openclaw",
        "stars": 71,
        "forks": 11,
        "language": "Markdown",
        "license": "Unknown",
        "report": "projects/277-awesome-openclaw-community-landscape.md",
        "pattern": "aggregate OpenClaw links and toolkits -> map onboarding resources and examples -> curate ecosystem entry points for rapid adoption",
        "description": "awesome-openclaw curates OpenClaw ecosystem resources including skills, runtime guidance, and adjacent project links.",
        "stack": [
            "Markdown",
            "Resource Curation"
        ],
        "category": "OpenClaw Community Landscape and Resources",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/zerolu_awesome-openclaw.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "awesome-list",
            "skills",
            "onboarding",
            "resources"
        ]
    },
    {
        "name": "QuantClaw",
        "repo": "QuantClaw/QuantClaw",
        "url": "https://github.com/QuantClaw/QuantClaw",
        "stars": 31,
        "forks": 5,
        "language": "C++",
        "license": "Apache-2.0",
        "report": "projects/278-quantclaw-quantitative-agent-runtime.md",
        "pattern": "market data ingestion -> autonomous analysis and execution planning -> tool and strategy orchestration -> runtime feedback loop for quantitative task workflows",
        "description": "QuantClaw is an autonomous quantitative agent runtime built around OpenClaw-style agent workflows for market analysis and execution tasks.",
        "stack": [
            "C++",
            "Python",
            "LLM Trading Runtime"
        ],
        "category": "Quantitative Agent Harness Runtime",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/quantclaw_quantclaw.md",
        "status": "candidate",
        "tags": [
            "agent-runtime",
            "quantitative",
            "framework",
            "workflow-automation",
            "trading"
        ]
    },
    {
        "name": "Awesome Scientific Skills",
        "repo": "InternScience/Awesome-Scientific-Skills",
        "url": "https://github.com/InternScience/Awesome-Scientific-Skills",
        "stars": 400,
        "forks": 23,
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/279-awesome-scientific-skills-research-index.md",
        "pattern": "collect scientific task skills and tools -> map reusable research procedures -> connect benchmarks and methodology references -> support skill transfer into research agents",
        "description": "Awesome-Scientific-Skills is a curated list of scientific-agent skills, tools, and workflows intended for reusable research automation.",
        "stack": [
            "Markdown",
            "Scientific Workflow Curation"
        ],
        "category": "Scientific Agent Skill and Tooling Index",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/internscience_awesome-scientific-skills.md",
        "status": "candidate",
        "tags": [
            "scientific-agent",
            "skills",
            "resource-index",
            "research-workflow",
            "benchmark"
        ]
    },
    {
        "name": "ClawBench",
        "repo": "TIGER-AI-Lab/ClawBench",
        "url": "https://github.com/TIGER-AI-Lab/ClawBench",
        "stars": 338,
        "forks": 21,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/280-clawbench-open-ended-agent-benchmark.md",
        "pattern": "open-ended task generation -> long-horizon agent execution traces -> verifier-guided scoring -> benchmark snapshots for iterative harness improvement",
        "description": "ClawBench is an open-ended agent benchmark built for evaluating long-horizon OpenClaw-style agent performance and generalization.",
        "stack": [
            "Python",
            "Benchmark Harness",
            "OpenClaw"
        ],
        "category": "Open-Ended Agent Benchmark Harness",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/tiger-ai-lab_clawbench.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "open-ended",
            "openclaw",
            "evaluation",
            "agent-harness"
        ]
    },
    {
        "name": "Redis Agent Memory Server",
        "repo": "redis/agent-memory-server",
        "url": "https://github.com/redis/agent-memory-server",
        "stars": 266,
        "forks": 50,
        "language": "Python",
        "license": "MIT",
        "report": "projects/281-redis-agent-memory-server-runtime.md",
        "pattern": "capture agent events and context -> store and retrieve memory through Redis-backed services -> expose memory operations via MCP and client APIs -> feed retrieved context into later agent loops",
        "description": "agent-memory-server is Redis-maintained memory middleware that gives AI agents fast, persistent, and flexible context memory through an MCP-compatible service and client stack.",
        "stack": [
            "Python",
            "Redis",
            "MCP Memory Service"
        ],
        "category": "Agent Memory Runtime and Context Service",
        "lastPushed": "2026-04-16T00:00:00Z",
        "localPath": "raw-github/redis_agent-memory-server.md",
        "status": "candidate",
        "tags": [
            "memory",
            "redis",
            "mcp",
            "agent-runtime",
            "context-service"
        ]
    },
    {
        "name": "LangChain Memory Agent",
        "repo": "langchain-ai/memory-agent",
        "url": "https://github.com/langchain-ai/memory-agent",
        "stars": 1800,
        "forks": 51,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/282-langchain-memory-agent-workflow.md",
        "pattern": "long-running conversation and user context -> memory extraction and consolidation via LangMem -> LangGraph workflow execution -> memory-grounded follow-up behavior and replayable traces",
        "description": "memory-agent is LangChain’s reference memory-aware agent application that demonstrates persistent user context and long-term adaptive behavior.",
        "stack": [
            "Python",
            "LangGraph",
            "LangMem"
        ],
        "category": "Memory-Aware Agent Workflow and Evaluation App",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/langchain-ai_memory-agent.md",
        "status": "candidate",
        "tags": [
            "memory",
            "langgraph",
            "langmem",
            "agent-workflow",
            "evaluation"
        ]
    },
    {
        "name": "iFLYTEK SkillHub",
        "repo": "iflytek/skillhub",
        "url": "https://github.com/iflytek/skillhub",
        "stars": 3200,
        "forks": 443,
        "language": "C++",
        "license": "Apache-2.0",
        "report": "projects/283-iflytek-skillhub-agent-skill-registry.md",
        "pattern": "structured skill package definition -> runtime orchestration and multi-agent routing -> deployment and plugin integration -> reusable skill asset lifecycle management",
        "description": "SkillHub is an open-source AI agent platform focused on skill packaging, orchestration, and reusable execution components.",
        "stack": [
            "C++",
            "Go",
            "TypeScript Multi-Agent Skill Platform"
        ],
        "category": "Agent Skill Registry and Open Runtime Platform",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/iflytek_skillhub.md",
        "status": "candidate",
        "tags": [
            "skill",
            "agent-platform",
            "multi-agent",
            "orchestration",
            "runtime"
        ]
    },
    {
        "name": "Acontext",
        "repo": "memodb-io/Acontext",
        "url": "https://github.com/memodb-io/Acontext",
        "stars": 3500,
        "forks": 319,
        "language": "TypeScript",
        "license": "Apache-2.0",
        "report": "projects/285-memodb-acontext-memory-layer.md",
        "pattern": "skill and behavior trace ingestion -> memory indexing and retrieval -> context-aware execution with long-term persistence -> memory-informed agent behavior adaptation",
        "description": "Acontext provides an agent memory layer designed to persist and retrieve skill-aware context for autonomous AI workflows.",
        "stack": [
            "TypeScript",
            "Rust Agent Memory Infrastructure"
        ],
        "category": "Agent Skill Memory Layer and Runtime Context Engine",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/memodb-io_Acontext.md",
        "status": "candidate",
        "tags": [
            "memory",
            "agent-skills",
            "context-engine",
            "runtime",
            "long-term-memory"
        ]
    },
    {
        "name": "Nemori",
        "repo": "nemori-ai/nemori",
        "url": "https://github.com/nemori-ai/nemori",
        "stars": 202,
        "forks": 17,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/286-nemori-episodic-memory-substrate.md",
        "pattern": "episodic interaction capture -> memory graph indexing and retrieval -> semantic recall for future agent plans -> persistent memory feedback into subsequent actions",
        "description": "Nemori is an episodic memory and persistent context engine for autonomous agents that need durable recall across sessions.",
        "stack": [
            "TypeScript",
            "Vector DB",
            "Agent Memory Graph"
        ],
        "category": "Episodic Agent Memory Substrate and Knowledge Store",
        "lastPushed": "2026-05-28T00:00:00Z",
        "localPath": "raw-github/nemori-ai_nemori.md",
        "status": "candidate",
        "tags": [
            "memory",
            "episodic",
            "knowledge-graph",
            "context-retrieval",
            "agent-state"
        ]
    },
    {
        "name": "Continuity Benchmarks",
        "repo": "Alienfader/continuity-benchmarks",
        "url": "https://github.com/Alienfader/continuity-benchmarks",
        "stars": 3,
        "forks": 0,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/287-continuity-benchmarks-execution-intent-memory.md",
        "pattern": "agent action intent -> retrieval keyed by execution intent vs prompt intent -> benchmark runners score recall/alignment -> report deltas and confidence for memory strategy selection",
        "description": "continuity-benchmarks provides reproducible execution-intent memory benchmarks for long-horizon AI coding agents with LongMemEval-S and ID-RAG matrix evaluation.",
        "stack": [
            "TypeScript",
            "Python",
            "LongMemEval-S"
        ],
        "category": "Execution-Intent Memory Benchmark Harness",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/alienfader_continuity-benchmarks.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "memory",
            "longmemeval",
            "agent-harness",
            "evaluation"
        ]
    },
    {
        "name": "MemWeave",
        "repo": "sachinsharma9780/memweave",
        "url": "https://github.com/sachinsharma9780/memweave",
        "stars": 39,
        "forks": 2,
        "language": "Python",
        "license": "MIT",
        "report": "projects/288-memweave-markdown-agent-memory.md",
        "pattern": "agent writes memory markdown -> sqlite vector+fts index build -> hybrid retrieval and reranking -> persistent memory feedback for next agent turns",
        "description": "memweave is a zero-infrastructure async Python memory library for AI agents using markdown files and SQLite-backed searchable persistence.",
        "stack": [
            "Python",
            "SQLite",
            "Markdown Memory Store"
        ],
        "category": "Persistent Agent Memory Substrate",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/sachinsharma9780_memweave.md",
        "status": "candidate",
        "tags": [
            "agent memory",
            "markdown memory",
            "sqlite",
            "hybrid retrieval",
            "openclaw"
        ]
    },
    {
        "name": "Procedural Memory Benchmark",
        "repo": "qpiai/Proced_mem_bench",
        "url": "https://github.com/qpiai/Proced_mem_bench",
        "stars": 6,
        "forks": 3,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/289-proced-mem-benchmark-procedural-retrieval.md",
        "pattern": "task trajectory corpus -> procedural retrieval methods -> LLM-as-judge plus IR metrics -> benchmark reports for procedural memory quality",
        "description": "Proced_mem_bench benchmarks procedural memory retrieval for language agents across ALFWorld trajectories and upcoming OSWorld scenarios.",
        "stack": [
            "Python",
            "ALFWorld",
            "OSWorld Retrieval Eval"
        ],
        "category": "Procedural Memory Retrieval Benchmark",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/qpiai_proced_mem_bench.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "procedural-memory",
            "retrieval",
            "alfworld",
            "osworld"
        ]
    },
    {
        "name": "RepoMod Bench",
        "repo": "Modelcode-ai/mcode-benchmark",
        "url": "https://github.com/Modelcode-ai/mcode-benchmark",
        "stars": 1,
        "forks": 0,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/290-repomod-bench-repo-translation-eval.md",
        "pattern": "source repository workspace -> agent performs cross-language/framework translation -> hidden tests evaluate functional equivalence -> benchmark outputs per-language/task reliability",
        "description": "mcode-benchmark (RepoMod-Bench) evaluates repository-scale AI agent translation across languages and frameworks with hidden test validation.",
        "stack": [
            "Python",
            "Pytest",
            "Repo Translation Harness"
        ],
        "category": "Repository-Scale Agent Translation Benchmark",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/modelcode-ai_mcode-benchmark.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "repo-translation",
            "code-agents",
            "pytest",
            "evaluation"
        ]
    },
    {
        "name": "CodeScaleBench",
        "repo": "sourcegraph/CodeScaleBench",
        "url": "https://github.com/sourcegraph/CodeScaleBench",
        "stars": 25,
        "forks": 3,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/291-codescalebench-enterprise-agent-benchmark.md",
        "pattern": "enterprise codebase tasks -> Harbor/Claude harness with baseline vs MCP retrieval configs -> dual-verifier scoring and cost tracking -> auditable snapshots for benchmark governance",
        "description": "CodeScaleBench is a benchmark suite for measuring coding agents with external retrieval tools on large enterprise-scale software tasks.",
        "stack": [
            "Python",
            "Claude Code Harness",
            "MCP Retrieval"
        ],
        "category": "Enterprise-Scale Coding Agent Benchmark Harness",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/sourcegraph_codescalebench.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "coding-agent",
            "harness",
            "mcp",
            "enterprise-codebase"
        ]
    },
    {
        "name": "MLCommons ModelBench",
        "repo": "mlcommons/modelbench",
        "url": "https://github.com/mlcommons/modelbench",
        "stars": 126,
        "forks": 28,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/292-mlcommons-modelbench-safety-eval.md",
        "pattern": "model responses and annotator judgments -> hazard aggregation into benchmark scores -> safety report generation -> benchmark governance feedback into model evaluation pipeline",
        "description": "MLCommons modelbench runs safety benchmarks against AI models and publishes detailed hazard-oriented benchmark reports.",
        "stack": [
            "Python",
            "ModelGauge",
            "Safety Reporting"
        ],
        "category": "Model Safety Benchmark and Reporting Framework",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/mlcommons_modelbench.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "safety",
            "model-evaluation",
            "mlcommons",
            "reporting"
        ]
    },
    {
        "name": "Self-Improving Agent",
        "repo": "BerriAI/self-improving-agent",
        "url": "https://github.com/BerriAI/self-improving-agent",
        "stars": 5,
        "forks": 0,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/293-berriai-self-improving-agent-loop.md",
        "pattern": "agent executes coding tasks -> evaluates outcomes via benchmarks and user feedback -> writes workflow/self changes -> reruns tasks to measure iterative improvement",
        "description": "self-improving-agent studies whether coding agents can improve themselves through a repeated eval-and-update loop over real tasks.",
        "stack": [
            "TypeScript",
            "GitHub Actions",
            "Agent Self-Optimization Loop"
        ],
        "category": "Self-Improving Coding Agent Loop",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/berriai_self-improving-agent.md",
        "status": "candidate",
        "tags": [
            "self-improving-agent",
            "coding-agent",
            "evolution-loop",
            "github-actions",
            "autonomous-iteration"
        ]
    },
    {
        "name": "Awesome Agent Skills Security",
        "repo": "LLMSecurity/awesome-agent-skills-security",
        "url": "https://github.com/LLMSecurity/awesome-agent-skills-security",
        "stars": 8,
        "forks": 9,
        "language": "Markdown",
        "license": "CC0-1.0",
        "report": "projects/294-awesome-agent-skills-security.md",
        "pattern": "collect benchmark and attack references -> map skill-level vulnerabilities and mitigations -> publish curated defense pathways for agent-skill engineering teams",
        "description": "awesome-agent-skills-security curates security and benchmark resources specifically for agent skill systems and tool-use workflows.",
        "stack": [
            "Markdown",
            "Security Taxonomy",
            "Skill Benchmark References"
        ],
        "category": "Agent Skill Security Resource Index",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/llmsecurity_awesome-agent-skills-security.md",
        "status": "candidate",
        "tags": [
            "agent-skills",
            "security",
            "benchmark",
            "resource-index",
            "llm-security"
        ]
    },
    {
        "name": "Awesome Agent CLIs",
        "repo": "ComposioHQ/awesome-agent-clis",
        "url": "https://github.com/ComposioHQ/awesome-agent-clis",
        "stars": 223,
        "forks": 26,
        "language": "Markdown",
        "license": "CC0-1.0",
        "report": "projects/295-awesome-agent-clis-orchestration.md",
        "pattern": "aggregate production-ready agent CLIs -> expose setup/docs/ecosystem compatibility -> guide teams to reusable command-line workflows for coding and operations agents",
        "description": "awesome-agent-clis tracks command-line agent tools and workflow utilities that can be reused as skill and harness building blocks.",
        "stack": [
            "Markdown",
            "CLI Tooling",
            "Agent Workflow Catalog"
        ],
        "category": "Agent CLI Orchestration Resource Index",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/composiohq_awesome-agent-clis.md",
        "status": "candidate",
        "tags": [
            "agent-cli",
            "workflow",
            "developer-tools",
            "skill-catalog",
            "resource-index"
        ]
    },
    {
        "name": "Agent Skills",
        "repo": "Olshansk/agent-skills",
        "url": "https://github.com/Olshansk/agent-skills",
        "stars": 7,
        "forks": 0,
        "language": "HTML",
        "license": "MIT",
        "report": "projects/296-olshansk-agent-skills-library.md",
        "pattern": "package reusable operational skills -> validate with local tests and linting -> install into agent runtimes as modular capability units -> iterate via versioned skill updates",
        "description": "agent-skills provides reusable operational skill bundles designed to be installed and maintained across agent runtimes.",
        "stack": [
            "HTML",
            "JavaScript Skill Bundles",
            "Validation Scripts"
        ],
        "category": "Reusable Agent Skill Library",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/olshansk_agent-skills.md",
        "status": "candidate",
        "tags": [
            "agent-skills",
            "skill-library",
            "playbooks",
            "workflow",
            "reuse"
        ]
    },
    {
        "name": "Agent Memory",
        "repo": "axiomhq/agent-memory",
        "url": "https://github.com/axiomhq/agent-memory",
        "stars": 5,
        "forks": 2,
        "language": "TypeScript",
        "license": "Unspecified",
        "report": "projects/297-axiom-agent-memory-substrate.md",
        "pattern": "capture user/agent interaction state -> extract and store memory artifacts in redis-backed structures -> retrieve context through memory APIs -> feed subsequent agent decisions and orchestration flows",
        "description": "agent-memory is an opinionated TypeScript memory runtime focused on extracting, storing, and retrieving long-lived context for AI agents.",
        "stack": [
            "TypeScript",
            "Redis",
            "Memory Pipeline Infrastructure"
        ],
        "category": "Persistent Agent Memory Runtime",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/axiomhq_agent-memory.md",
        "status": "candidate",
        "tags": [
            "agent-memory",
            "typescript",
            "redis",
            "memory-runtime",
            "context-persistence"
        ]
    },
    {
        "name": "Tiermem",
        "repo": "FreedomIntelligence/Tiermem",
        "url": "https://github.com/FreedomIntelligence/Tiermem",
        "stars": 5,
        "forks": 1,
        "language": "Python",
        "license": "MIT",
        "report": "projects/298-tiermem-provenance-memory-benchmark.md",
        "pattern": "construct knowledge-memory tasks with provenance labels -> run language-agent memory retrieval and generation pipelines -> score both answer quality and citation provenance -> compare memory frameworks under standardized settings",
        "description": "Tiermem introduces benchmark tasks that jointly evaluate memory answer quality and provenance consistency for long-term AI assistants.",
        "stack": [
            "Python",
            "Memory QA Benchmark",
            "Provenance Evaluation"
        ],
        "category": "Provenance-Aware Memory Benchmark Framework",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/freedomintelligence_tiermem.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "memory",
            "provenance",
            "evaluation",
            "long-context"
        ]
    },
    {
        "name": "Awesome Agent Skills (itgoyo)",
        "repo": "itgoyo/awesome-agent-skills",
        "url": "https://github.com/itgoyo/awesome-agent-skills",
        "stars": 112,
        "forks": 10,
        "language": "Markdown",
        "license": "CC-BY-4.0 (README declared)",
        "report": "projects/299-itgoyo-awesome-agent-skills.md",
        "pattern": "curate agent-skill resources across runtimes -> map official and community skill ecosystems -> link install/readme paths -> help teams bootstrap reusable skill workflows quickly",
        "description": "itgoyo/awesome-agent-skills is a cross-runtime skills index covering Claude Code, Codex, Gemini CLI, Cline, Cursor and MCP-oriented skill resources.",
        "stack": [
            "Markdown",
            "MCP-Compatible Skill Registry",
            "Workflow Resource Index"
        ],
        "category": "Cross-Platform Agent Skills Resource Index",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/itgoyo_awesome-agent-skills.md",
        "status": "candidate",
        "tags": [
            "agent-skills",
            "resource-index",
            "mcp",
            "workflow",
            "cross-runtime"
        ]
    },
    {
        "name": "Agent Skill Loader",
        "repo": "back1ply/agent-skill-loader",
        "url": "https://github.com/back1ply/agent-skill-loader",
        "stars": 10,
        "forks": 3,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/300-back1ply-agent-skill-loader.md",
        "pattern": "ingest skill bundles with uniform loader interfaces -> resolve runtime dependencies and skill metadata -> mount skills into agent execution contexts -> support iteration through modular updates",
        "description": "agent-skill-loader provides a TypeScript loader pipeline for wiring reusable skill modules into AI agent runtimes.",
        "stack": [
            "TypeScript",
            "Skill Loading Pipeline",
            "Agent Runtime Integration"
        ],
        "category": "Runtime Agent Skill Loader",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/back1ply_agent-skill-loader.md",
        "status": "candidate",
        "tags": [
            "agent-skills",
            "skill-loader",
            "typescript",
            "runtime",
            "orchestration"
        ]
    },
    {
        "name": "SEAD",
        "repo": "Da1yuqin/SEAD",
        "url": "https://github.com/Da1yuqin/SEAD",
        "stars": 20,
        "forks": 1,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/301-da1yuqin-sead-benchmark.md",
        "pattern": "benchmark architecture-level agent design quality -> compare model-generated system designs under controlled tasks -> score design quality and completion behavior -> reveal where self-evolving design loops fail",
        "description": "SEAD is a benchmark for evaluating LLM-based agents on software system design tasks with an explicit self-evolving-agent framing.",
        "stack": [
            "Python",
            "Agent System Design Benchmark",
            "Evolution Evaluation"
        ],
        "category": "Self-Evolving Agent Design Benchmark",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/da1yuqin_sead.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "self-evolving-agent",
            "system-design",
            "evaluation",
            "llm-agent"
        ]
    },
    {
        "name": "Darwin Mobile Agent",
        "repo": "ai-agents-2030/darwin-mobile-agent",
        "url": "https://github.com/ai-agents-2030/darwin-mobile-agent",
        "stars": 10,
        "forks": 0,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/302-darwin-mobile-agent.md",
        "pattern": "run mobile task execution loops -> record failures and intervention traces -> evolve prompts/skills/action plans -> replay against app tasks to measure iterative gains",
        "description": "darwin-mobile-agent targets self-evolving mobile automation agents with an explicit iterative improvement workflow.",
        "stack": [
            "Python",
            "Mobile Agent Runtime",
            "Self-Improvement Loop"
        ],
        "category": "Mobile Agent Self-Evolution Framework",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/ai-agents-2030_darwin-mobile-agent.md",
        "status": "candidate",
        "tags": [
            "mobile-agent",
            "self-evolution",
            "android",
            "agent-runtime",
            "evaluation"
        ]
    },
    {
        "name": "Mem-Gallery",
        "repo": "YuanchenBei/Mem-Gallery",
        "url": "https://github.com/YuanchenBei/Mem-Gallery",
        "stars": 36,
        "forks": 2,
        "language": "Python",
        "license": "MIT",
        "report": "projects/303-mem-gallery-memory-benchmark.md",
        "pattern": "assemble memory-intensive tasks and temporal-context datasets -> run agents with different memory strategies -> score recall/consistency/retrieval behavior -> compare long-term memory robustness across setups",
        "description": "Mem-Gallery provides a benchmark suite for long-term memory capability in LLM-based agents and assistants.",
        "stack": [
            "Python",
            "Long-Term Memory Benchmark",
            "LLM Agent Evaluation"
        ],
        "category": "Long-Term Memory Benchmark Suite",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/yuanchenbei_mem-gallery.md",
        "status": "candidate",
        "tags": [
            "memory",
            "benchmark",
            "long-term-memory",
            "evaluation",
            "agent"
        ]
    },
    {
        "name": "InfiAgent",
        "repo": "InfiAgent/InfiAgent",
        "url": "https://github.com/InfiAgent/InfiAgent",
        "stars": 1900,
        "forks": 235,
        "language": "Python",
        "license": "MIT",
        "report": "projects/304-infiagent-framework.md",
        "pattern": "break complex goals into planner-executor-reflection stages -> execute tasks with tool-use traces -> distill successful trajectories into reusable policies -> iterate to improve completion quality over time",
        "description": "InfiAgent presents an open-source framework aimed at self-improving AI agent loops with planner/executor/reflection style workflows.",
        "stack": [
            "Python",
            "Agent Workflow Infrastructure",
            "Self-Improvement Loop"
        ],
        "category": "Framework for Self-Improving Agent Loops",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/infiagent_infiagent.md",
        "status": "candidate",
        "tags": [
            "self-improving-agent",
            "framework",
            "workflow",
            "reflection",
            "python"
        ]
    },
    {
        "name": "Clownfish",
        "repo": "openclaw/clownfish",
        "url": "https://github.com/openclaw/clownfish",
        "stars": 36,
        "forks": 11,
        "language": "JavaScript",
        "license": "Unspecified (public page metadata)",
        "report": "projects/305-openclaw-clownfish-maintainer-harness.md",
        "pattern": "crawl and cluster large issue queues -> route clusters into codex-maintainer workflows -> execute fixes and verification steps -> feed resolved cases back into maintainable engineering loops",
        "description": "clownfish is OpenClaw's maintainer codex harness focused on resolving issue clusters at scale with auditable workflows.",
        "stack": [
            "JavaScript",
            "Maintainer Codex Harness",
            "Issue-Cluster Resolution"
        ],
        "category": "Maintainer Codex Harness for Issue Clusters",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/openclaw_clownfish.md",
        "status": "candidate",
        "tags": [
            "harness",
            "maintainer-codex",
            "issue-clustering",
            "openclaw",
            "agent-workflow"
        ]
    },
    {
        "name": "Crabpot",
        "repo": "openclaw/crabpot",
        "url": "https://github.com/openclaw/crabpot",
        "stars": 9,
        "forks": 8,
        "language": "JavaScript",
        "license": "MIT",
        "report": "projects/306-openclaw-crabpot-plugin-compatibility-testbed.md",
        "pattern": "assemble community plugin scenarios -> run compatibility checks across plugin boundaries -> surface breakage and integration regressions -> guide stable skill/plugin release pipelines",
        "description": "crabpot is a compatibility testbed repository for OpenClaw community plugins and plugin seam validation.",
        "stack": [
            "JavaScript",
            "Plugin Compatibility Harness",
            "OpenClaw Extension Testing"
        ],
        "category": "OpenClaw Plugin Compatibility Testbed",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/openclaw_crabpot.md",
        "status": "candidate",
        "tags": [
            "plugin-compatibility",
            "openclaw",
            "harness",
            "evaluation",
            "extensions"
        ]
    },
    {
        "name": "Gitcrawl",
        "repo": "openclaw/gitcrawl",
        "url": "https://github.com/openclaw/gitcrawl",
        "stars": 76,
        "forks": 15,
        "language": "Go",
        "license": "MIT",
        "report": "projects/307-openclaw-gitcrawl-repo-memory-ingest.md",
        "pattern": "crawl GitHub issues and pull requests locally -> normalize and archive repository discourse -> expose structured artifacts for triage and analysis -> feed downstream maintainer and agent memory workflows",
        "description": "gitcrawl is a local-first issue and pull-request crawler for creating reusable repository archives used by maintainer and agent workflows.",
        "stack": [
            "Go",
            "SQLite",
            "GitHub Issue and PR Crawl Pipeline"
        ],
        "category": "Local-First GitHub Crawl and Archive Harness",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/openclaw_gitcrawl.md",
        "status": "candidate",
        "tags": [
            "github-crawler",
            "local-first",
            "go",
            "archive",
            "harness-tooling"
        ]
    },
    {
        "name": "Crawlkit",
        "repo": "openclaw/crawlkit",
        "url": "https://github.com/openclaw/crawlkit",
        "stars": 33,
        "forks": 5,
        "language": "Go",
        "license": "MIT",
        "report": "projects/308-openclaw-crawlkit-shared-crawl-infra.md",
        "pattern": "provide shared crawl primitives and storage abstractions -> standardize archive generation across crawler services -> reduce duplicate data-ingest logic -> improve reuse for harness and memory data pipelines",
        "description": "crawlkit is OpenClaw's shared Go infrastructure for local-first crawler and archive processing workflows.",
        "stack": [
            "Go",
            "Crawl Infrastructure",
            "Archive Processing Toolkit"
        ],
        "category": "Shared Crawl Infrastructure Toolkit",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/openclaw_crawlkit.md",
        "status": "candidate",
        "tags": [
            "crawlkit",
            "go",
            "toolkit",
            "archive",
            "openclaw"
        ]
    },
    {
        "name": "Discrawl",
        "repo": "openclaw/discrawl",
        "url": "https://github.com/openclaw/discrawl",
        "stars": 761,
        "forks": 81,
        "language": "Go",
        "license": "MIT",
        "report": "projects/309-openclaw-discrawl-discord-archive-memory.md",
        "pattern": "crawl Discord channels through CLI workflows -> persist conversations into SQLite archives -> expose query-ready organizational memory artifacts -> support agent learning and maintainer context retrieval loops",
        "description": "discrawl is a Discord CLI crawler with SQLite-backed archival pipelines for building reusable organizational memory datasets.",
        "stack": [
            "Go",
            "SQLite",
            "Discord CLI Crawl and Archive Pipeline"
        ],
        "category": "Discord Archive and Memory Ingest Harness",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/openclaw_discrawl.md",
        "status": "candidate",
        "tags": [
            "discord-crawler",
            "memory-ingest",
            "sqlite",
            "go",
            "openclaw"
        ]
    },
    {
        "name": "MemOS Cloud OpenClaw Plugin",
        "repo": "MemTensor/MemOS-Cloud-OpenClaw-Plugin",
        "url": "https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin",
        "stars": 367,
        "forks": 56,
        "language": "JavaScript",
        "license": "Apache-2.0",
        "report": "projects/310-memos-cloud-openclaw-plugin-memory-runtime.md",
        "pattern": "intercept agent execution context before task start -> recall long-term memories from hosted MemOS service -> run tasks with enriched context -> persist post-run conversations for cumulative memory growth",
        "description": "MemOS-Cloud-OpenClaw-Plugin is an official OpenClaw plugin that adds hosted long-term memory retrieval and persistence through MemOS Cloud.",
        "stack": [
            "JavaScript",
            "OpenClaw Plugin",
            "MemOS Cloud Long-Term Memory Runtime"
        ],
        "category": "Hosted Agent Memory Runtime Plugin",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/memtensor_memos-cloud-openclaw-plugin.md",
        "status": "candidate",
        "tags": [
            "memos",
            "openclaw-plugin",
            "memory-runtime",
            "long-term-memory",
            "cloud-memory"
        ]
    },
    {
        "name": "OpenAI Swarm",
        "repo": "openai/swarm",
        "url": "https://github.com/openai/swarm",
        "stars": 21600,
        "forks": 2300,
        "language": "Python",
        "license": "MIT",
        "report": "projects/311-openai-swarm-multi-agent-orchestration.md",
        "pattern": "compose lightweight routines and handoffs -> route user tasks across specialized agents -> keep tool usage explicit and inspectable -> treat orchestration as a simple educational baseline rather than a production control plane",
        "description": "Swarm is OpenAI’s educational multi-agent orchestration framework for lightweight handoffs, routines, and inspectable agent workflow patterns, now explicitly positioned as a predecessor to the OpenAI Agents SDK.",
        "stack": [
            "Python",
            "Multi-Agent Orchestration",
            "Function Calling Handoffs"
        ],
        "category": "Experimental Multi-Agent Orchestration Framework",
        "lastPushed": "2026-04-15T00:00:00Z",
        "localPath": "raw-github/openai_swarm.md",
        "status": "candidate",
        "tags": [
            "multi-agent",
            "orchestration",
            "handoff",
            "openai",
            "educational"
        ]
    },
    {
        "name": "Agent Lightning",
        "repo": "microsoft/agent-lightning",
        "url": "https://github.com/microsoft/agent-lightning",
        "stars": 17300,
        "forks": 1500,
        "language": "Python",
        "license": "MIT",
        "report": "projects/312-microsoft-agent-lightning-rl-agent-evolution.md",
        "pattern": "decouple agent execution from RL training through unified trajectories -> build a training-agent disaggregation architecture -> optimize downstream agent policies with LightningRL credit assignment -> feed validated gains back into agent runtime loops",
        "description": "Agent Lightning is Microsoft's framework for turning arbitrary agent execution traces into RL-friendly transitions and optimizing agent behavior with LightningRL.",
        "stack": [
            "Python",
            "RL Training Framework",
            "Agent Finetuning and Observability"
        ],
        "category": "Reinforcement-Learning Agent Training Framework",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/microsoft_agent-lightning.md",
        "status": "candidate",
        "tags": [
            "reinforcement-learning",
            "agent-training",
            "self-improvement",
            "microsoft",
            "evolution"
        ]
    },
    {
        "name": "Awesome AI Agent Skills",
        "repo": "seb1n/awesome-ai-agent-skills",
        "url": "https://github.com/seb1n/awesome-ai-agent-skills",
        "stars": 92,
        "forks": 17,
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/313-awesome-ai-agent-skills-cross-agent-skill-index.md",
        "pattern": "collect reusable agent skills in one registry -> map installation paths for multiple agent runtimes -> standardize skill formatting and metadata -> reduce bootstrapping friction for reproducible skill reuse",
        "description": "awesome-ai-agent-skills curates reusable skill packs and installation paths across Codex, Claude, Cursor, Gemini CLI, OpenCode, and related agent runtimes.",
        "stack": [
            "Markdown",
            "Skill Registry",
            "Codex Claude Cursor Gemini OpenCode Support"
        ],
        "category": "Cross-Agent Skill Index and Install Guide",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/seb1n_awesome-ai-agent-skills.md",
        "status": "candidate",
        "tags": [
            "skills",
            "awesome-list",
            "cross-agent",
            "codex",
            "claude-code"
        ]
    },
    {
        "name": "ACPX",
        "repo": "openclaw/acpx",
        "url": "https://github.com/openclaw/acpx",
        "stars": 2800,
        "forks": 272,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/315-openclaw-acpx-stateful-agent-runtime.md",
        "pattern": "preserve session state across agent switches -> coordinate skills through ACP-compatible runtime contracts -> maintain continuity for long-running workflows -> turn ad hoc tool use into transferable orchestration assets",
        "description": "acpx is OpenClaw's state-preserving runtime for switching across coding agents while retaining full session context and ACP compatibility.",
        "stack": [
            "TypeScript",
            "ACP Runtime",
            "Stateful Session and Skill Orchestration"
        ],
        "category": "State-Preserving Agent Runtime and Session Handoff",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/openclaw_acpx.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "acp",
            "stateful-runtime",
            "skill-orchestration",
            "session-handoff"
        ]
    },
    {
        "name": "Crabbox",
        "repo": "openclaw/crabbox",
        "url": "https://github.com/openclaw/crabbox",
        "stars": 539,
        "forks": 61,
        "language": "Go",
        "license": "MIT",
        "report": "projects/316-openclaw-crabbox-browser-agent-benchmark.md",
        "pattern": "define browser-agent task suites -> execute agent runs with standardized tooling and policies -> score outcomes with reproducible evaluators -> provide benchmark signals for agent iteration and harness tuning",
        "description": "crabbox is OpenClaw's browser-agent benchmark framework for reproducible task execution and evaluator-driven comparison.",
        "stack": [
            "Go",
            "Browser Agent Benchmark Harness",
            "Task Evaluation Pipeline"
        ],
        "category": "Browser Agent Benchmark and Evaluation Harness",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/openclaw_crabbox.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "benchmark",
            "browser-agent",
            "evaluation",
            "harness"
        ]
    },
    {
        "name": "OpenClaw Windows Node",
        "repo": "openclaw/openclaw-windows-node",
        "url": "https://github.com/openclaw/openclaw-windows-node",
        "stars": 542,
        "forks": 95,
        "language": "C#",
        "license": "MIT",
        "report": "projects/317-openclaw-windows-node-runner.md",
        "pattern": "bridge OpenClaw workflows into Windows environments -> run companion node services with OS-specific integration -> keep agent operations portable across platform constraints -> feed platform results back into broader harness reliability",
        "description": "openclaw-windows-node provides a Windows companion runtime layer to execute OpenClaw agent workflows in native Windows contexts.",
        "stack": [
            "C#",
            "Windows Runtime",
            "Companion Node for OpenClaw Execution"
        ],
        "category": "Windows Companion Runtime for Agent Execution",
        "lastPushed": "2026-05-29T00:00:00Z",
        "localPath": "raw-github/openclaw_openclaw-windows-node.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "windows",
            "runtime",
            "companion-node",
            "cross-platform"
        ]
    },
    {
        "name": "Oh My Agent",
        "repo": "first-fluke/oh-my-agent",
        "url": "https://github.com/first-fluke/oh-my-agent",
        "stars": 1000,
        "forks": 118,
        "language": "Python",
        "license": "MIT",
        "report": "projects/318-oh-my-agent-multi-agent-runtime-and-harness.md",
        "pattern": "build agent workflows through composable nodes -> run memory, planner, and tool execution as auditable modules -> benchmark agents with repeatable evaluation entries -> iterate runtime policies using harness feedback and workflow traces",
        "description": "oh-my-agent is an open source multi-agent AI framework with workflow orchestration, memory modules, tooling integration, and built-in benchmark surfaces.",
        "stack": [
            "Python",
            "Multi-Agent Runtime",
            "Workflow and Benchmark Harness"
        ],
        "category": "Open Multi-Agent Runtime and Benchmark Harness",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/first-fluke_oh-my-agent.md",
        "status": "candidate",
        "tags": [
            "multi-agent",
            "workflow",
            "harness",
            "benchmark",
            "framework"
        ]
    },
    {
        "name": "ReMe",
        "repo": "agentscope-ai/ReMe",
        "url": "https://github.com/agentscope-ai/ReMe",
        "stars": 3000,
        "forks": 248,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/319-agentscope-reme-long-term-memory-framework.md",
        "pattern": "compress long context into structured summaries -> persist long-term memory in file/vector backends -> recall relevant memory with hybrid retrieval -> reuse memory traces across sessions and benchmark loops",
        "description": "ReMe is a memory management toolkit for AI agents that provides long-term memory retention, context compression, and benchmark-backed retrieval quality signals.",
        "stack": [
            "Python",
            "Agent Memory Runtime",
            "Temporal Context Compression and Recall"
        ],
        "category": "Long-Term Agent Memory and Context Compression Framework",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/agentscope-ai_reme.md",
        "status": "candidate",
        "tags": [
            "memory",
            "context-compression",
            "long-term-memory",
            "benchmark",
            "agentscope"
        ]
    },
    {
        "name": "Open Memory Specification (OMS)",
        "repo": "openmemoryspec/oms",
        "url": "https://github.com/openmemoryspec/oms",
        "stars": 5,
        "forks": 0,
        "language": "Markdown",
        "license": "CC0-1.0",
        "report": "projects/320-open-memory-spec-oms-interoperability-standard.md",
        "pattern": "define immutable memory grain containers -> standardize query and context-assembly languages -> enforce portable and auditable memory exchange across runtimes -> reduce lock-in and memory migration friction for long-lived agents",
        "description": "OMS defines a portable and auditable memory standard for autonomous agents, including a binary memory grain format and context assembly language.",
        "stack": [
            "Specification",
            "Memory Grain Standard",
            "CAL and SML Context Assembly"
        ],
        "category": "Portable Agent Memory Interoperability Standard",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/openmemoryspec_oms.md",
        "status": "candidate",
        "tags": [
            "memory",
            "interoperability",
            "specification",
            "cal",
            "sml"
        ]
    },
    {
        "name": "MemToMem",
        "repo": "memtomem/memtomem",
        "url": "https://github.com/memtomem/memtomem",
        "stars": 5,
        "forks": 24,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/321-memtomem-hierarchical-memory-for-agents.md",
        "pattern": "capture episodic and semantic memory traces -> structure memory in hierarchical graphs -> retrieve context by relevance and recency -> feed persistent memory context back into ongoing autonomous task execution",
        "description": "memtomem provides a hierarchical long-term memory framework to improve context retention, retrieval quality, and continuity in autonomous agent workflows.",
        "stack": [
            "Python",
            "Hierarchical Memory",
            "Graph-Based Long-Term Agent Recall"
        ],
        "category": "Hierarchical Agent Memory Framework",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/memtomem_memtomem.md",
        "status": "candidate",
        "tags": [
            "memory",
            "hierarchical-memory",
            "graph-memory",
            "agent-runtime",
            "python"
        ]
    },
    {
        "name": "Awesome Agent Skills (Skillmatic)",
        "repo": "skillmatic-ai/awesome-agent-skills",
        "url": "https://github.com/skillmatic-ai/awesome-agent-skills",
        "stars": 1000,
        "forks": 98,
        "language": "Markdown",
        "license": "CC0-1.0",
        "report": "projects/322-skillmatic-awesome-agent-skills-registry.md",
        "pattern": "curate reusable skills in one index -> map installation paths for multiple agent runtimes -> standardize skill packaging and integration hints -> reduce onboarding and reproducibility cost for skill reuse",
        "description": "skillmatic-awesome-agent-skills is a large cross-framework directory of reusable agent skills spanning Codex, Claude Code, Cursor, Gemini, and other runtimes.",
        "stack": [
            "Markdown",
            "Agent Skill Catalog",
            "Codex Claude Cursor Gemini OpenCode"
        ],
        "category": "Cross-Framework Agent Skills Registry",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/skillmatic-ai_awesome-agent-skills.md",
        "status": "candidate",
        "tags": [
            "skills",
            "awesome-list",
            "codex",
            "claude-code",
            "cursor"
        ]
    },
    {
        "name": "Agentic Harness",
        "repo": "sevenschulte/agentic-harness",
        "url": "https://github.com/sevenschulte/agentic-harness",
        "stars": 2,
        "forks": 0,
        "language": "Python",
        "license": "MIT",
        "report": "projects/323-agentic-harness-python-workflow-test-harness.md",
        "pattern": "define reusable workflow nodes for agent pipelines -> attach deterministic tests to workflow behavior -> run harness checks before production rollout -> use failures as fast feedback for agent workflow evolution",
        "description": "agentic-harness is a Python package for building and testing AI workflows with composable harness primitives and lightweight runtime checks.",
        "stack": [
            "Python",
            "Workflow Harness",
            "Composable Agent Testing"
        ],
        "category": "Python Agent Workflow Testing Harness",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/sevenschulte_agentic-harness.md",
        "status": "candidate",
        "tags": [
            "harness",
            "workflow",
            "python",
            "testing",
            "harness"
        ]
    },
    {
        "name": ".NET Skills",
        "repo": "dotnet/skills",
        "url": "https://github.com/dotnet/skills",
        "stars": 3200,
        "forks": 236,
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/324-dotnet-skills-runtime-pack.md",
        "pattern": "publish reusable coding-agent skill packs for multiple runtimes -> provide strict .NET engineering workflows and reusable prompts -> score and compare skill quality with benchmark harness integration -> transfer high-quality skill behavior across sessions and tools",
        "description": "dotnet/skills curates production-grade coding-agent skill packs with .NET-focused workflows, scoring guidance, and multi-runtime installation support.",
        "stack": [
            "Markdown",
            ".NET C#",
            "Agent Skills Packs and Scoring Dashboard"
        ],
        "category": "Cross-IDE .NET Agent Skills Runtime Pack",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/dotnet_skills.md",
        "status": "candidate",
        "tags": [
            "skills",
            "dotnet",
            "csharp",
            "agent-runtime",
            "skill-pack"
        ]
    },
    {
        "name": "Datalayer Agent Skills",
        "repo": "datalayer/agent-skills",
        "url": "https://github.com/datalayer/agent-skills",
        "stars": 9,
        "forks": 1,
        "language": "Python",
        "license": "BSD-3-Clause",
        "report": "projects/325-datalayer-agent-skills-pack.md",
        "pattern": "collect reusable skills as installable packs -> map skills to real workflows and runtime contexts -> version skill definitions to preserve reproducibility -> compose skills into controllable agent workflows with lower setup cost",
        "description": "datalayer/agent-skills provides composable skill packs and runtime recipes for coding agents with an emphasis on reproducible installation and workflow reuse.",
        "stack": [
            "Python",
            "Markdown",
            "Claude Code and Codex Skill Packs"
        ],
        "category": "Composable Agent Skills Pack and Runtime Recipes",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/datalayer_agent-skills.md",
        "status": "candidate",
        "tags": [
            "skills",
            "claude-code",
            "codex",
            "workflow",
            "runtime"
        ]
    },
    {
        "name": "Agent Skills (Block)",
        "repo": "block/agent-skills",
        "url": "https://github.com/block/agent-skills",
        "stars": 96,
        "forks": 25,
        "language": "Markdown",
        "license": "Apache-2.0",
        "report": "projects/326-block-agent-skills-enterprise-playbook.md",
        "pattern": "standardize reusable skills as enterprise playbooks -> encode engineering policy and risk checks into skill procedures -> distribute skills across codex/claude workflows -> reduce variance and onboarding cost in large agent teams",
        "description": "block/agent-skills is a public enterprise-oriented skill library that packages repeatable coding-agent playbooks for safer and faster software delivery.",
        "stack": [
            "Markdown",
            "Agent Skill Playbooks",
            "Claude and Codex"
        ],
        "category": "Enterprise Agent Skills and Playbook Library",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/block_agent-skills.md",
        "status": "candidate",
        "tags": [
            "skills",
            "enterprise",
            "playbook",
            "claude",
            "codex"
        ]
    },
    {
        "name": "EvalMonkey",
        "repo": "Corbell-AI/evalmonkey",
        "url": "https://github.com/Corbell-AI/evalmonkey",
        "stars": 36,
        "forks": 4,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/327-evalmonkey-agent-evaluation-harness.md",
        "pattern": "define task-level agent evaluation suites -> run LLM-based and deterministic regression checks -> aggregate quality metrics into repeatable reports -> feed benchmark regressions back into skill/harness improvement loops",
        "description": "EvalMonkey provides a lightweight evaluation harness for LLM agents with regression workflows and reusable benchmark checks.",
        "stack": [
            "Python",
            "LLM Evaluation Harness",
            "Continuous Regression Tests"
        ],
        "category": "Agent Evaluation Harness and Regression Pipeline",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/corbell-ai_evalmonkey.md",
        "status": "candidate",
        "tags": [
            "evaluation",
            "benchmark",
            "harness",
            "regression",
            "agent"
        ]
    },
    {
        "name": "AEC Bench",
        "repo": "nomic-ai/aec-bench",
        "url": "https://github.com/nomic-ai/aec-bench",
        "stars": 54,
        "forks": 3,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/328-aec-bench-agentic-context-benchmark.md",
        "pattern": "construct realistic context-heavy agent tasks -> compare retrieval, memory, and orchestration strategies -> benchmark long-context reasoning under controlled settings -> convert benchmark outcomes into actionable harness/memory optimizations",
        "description": "aec-bench is an agentic context engineering benchmark suite for measuring long-context agent behavior and retrieval-aware execution quality.",
        "stack": [
            "Python",
            "Benchmark Harness",
            "Agentic Context Evaluation"
        ],
        "category": "Agentic Context Engineering Benchmark Suite",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/nomic-ai_aec-bench.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "evaluation",
            "context-engineering",
            "memory",
            "agent"
        ]
    },
    {
        "name": "Google AX",
        "repo": "google/ax",
        "url": "https://github.com/google/ax",
        "stars": 1300,
        "forks": 70,
        "language": "Go",
        "license": "Apache-2.0",
        "report": "projects/329-google-ax-agent-runtime.md",
        "pattern": "build modular agent execution runtime primitives -> encode context engineering into reusable runtime components -> integrate evaluation and tracing for production reliability -> iterate runtime behavior using measured workflow outcomes",
        "description": "google/ax is a production-focused agent runtime framework that packages context engineering, orchestration, and evaluation-friendly primitives for real systems.",
        "stack": [
            "Go",
            "TypeScript",
            "Agent Runtime and Context Engineering"
        ],
        "category": "Production Agent Runtime and Context Engineering Framework",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/google_ax.md",
        "status": "candidate",
        "tags": [
            "agent-runtime",
            "framework",
            "context-engineering",
            "production",
            "google"
        ]
    },
    {
        "name": "AutoHarness",
        "repo": "aiming-lab/AutoHarness",
        "url": "https://github.com/aiming-lab/AutoHarness",
        "stars": 295,
        "forks": 23,
        "language": "Python",
        "license": "MIT",
        "report": "projects/330-autoharness-agent-harness-engineering-framework.md",
        "pattern": "treat harness as the controllable layer around model reasoning -> enforce multi-step governance and risk checks on tool execution -> track costs, logs, and sessions -> feed failures back into harness policies to improve future agent runs",
        "description": "AutoHarness provides a governance-oriented runtime that wraps LLM clients and upgrades demo agents into auditable, policy-controlled production loops.",
        "stack": [
            "Python",
            "TypeScript",
            "Harness Governance Runtime"
        ],
        "category": "Automated Agent Harness Engineering Framework",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/aiming-lab_autoharness.md",
        "status": "candidate",
        "tags": [
            "harness",
            "governance",
            "multi-agent",
            "self-improvement",
            "runtime"
        ]
    },
    {
        "name": "OWASP Agent Memory Guard",
        "repo": "OWASP/www-project-agent-memory-guard",
        "url": "https://github.com/OWASP/www-project-agent-memory-guard",
        "stars": 17,
        "forks": 10,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/331-owasp-agent-memory-guard-defense-layer.md",
        "pattern": "screen every memory read/write through detectors -> enforce declarative security policy -> emit forensics-ready events and snapshots -> block persistent memory poisoning before it propagates across sessions",
        "description": "OWASP Agent Memory Guard is a runtime protection layer for agent memory operations, targeting memory poisoning, leakage, and integrity tampering.",
        "stack": [
            "Python",
            "Agent Memory Security Middleware",
            "Benchmarkable Guard"
        ],
        "category": "Agent Memory Poisoning Defense and Guard Layer",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/owasp_www-project-agent-memory-guard.md",
        "status": "candidate",
        "tags": [
            "memory",
            "security",
            "owasp",
            "prompt-injection",
            "agentic-ai"
        ]
    },
    {
        "name": "Addy Agent Skills",
        "repo": "addyosmani/agent-skills",
        "url": "https://github.com/addyosmani/agent-skills",
        "stars": 47000,
        "forks": 5200,
        "language": "Shell",
        "license": "MIT",
        "report": "projects/332-addy-agent-skills-production-pack.md",
        "pattern": "encode senior engineering workflows as reusable agent skills -> map tasks to explicit process gates -> force verification evidence before ship -> compound quality through consistent command-level behavior",
        "description": "addyosmani/agent-skills is a large-scale production skill pack that standardizes coding-agent engineering workflows and quality gates.",
        "stack": [
            "Shell",
            "JavaScript",
            "Structured Skill Workflows"
        ],
        "category": "Production Engineering Skill Pack for Coding Agents",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/addyosmani_agent-skills.md",
        "status": "candidate",
        "tags": [
            "skills",
            "workflow",
            "coding-agent",
            "quality-gates",
            "playbook"
        ]
    },
    {
        "name": "Zo Skills Registry",
        "repo": "zocomputer/skills",
        "url": "https://github.com/zocomputer/skills",
        "stars": 40,
        "forks": 40,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/333-zo-skills-registry.md",
        "pattern": "maintain a curated multi-source skills registry -> validate skill package structure -> sync external skill feeds into a manifest -> distribute reusable skills into agent runtimes with consistent metadata",
        "description": "zocomputer/skills is an agent skills registry that unifies official, external, and community skill packages with validation and manifest generation.",
        "stack": [
            "TypeScript",
            "Python",
            "Skill Registry and Manifest Pipeline"
        ],
        "category": "Open Agent Skills Registry and Distribution Layer",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/zocomputer_skills.md",
        "status": "candidate",
        "tags": [
            "skills",
            "registry",
            "manifest",
            "agent-runtime",
            "distribution"
        ]
    },
    {
        "name": "QF-Bench",
        "repo": "QF-Bench/QuantitativeFinance-Bench",
        "url": "https://github.com/QF-Bench/QuantitativeFinance-Bench",
        "stars": 28,
        "forks": 35,
        "language": "Python",
        "license": "CC-BY-NC-4.0",
        "report": "projects/334-qf-bench-financial-agent-evaluation.md",
        "pattern": "package stateful quantitative tasks in reproducible sandboxes -> run oracle and real-agent evaluation paths -> enforce test-based numeric verification -> use benchmark deltas to tune agent harness and reasoning reliability",
        "description": "QF-Bench is a state-aware benchmark dataset for evaluating AI agents on realistic quantitative finance workflows under sandboxed verification.",
        "stack": [
            "Python",
            "Harbor-based Benchmark Dataset",
            "Sandbox Evaluation"
        ],
        "category": "State-Aware Financial Agent Benchmark Suite",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/qf-bench_quantitativefinance-bench.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "evaluation",
            "harbor",
            "agent",
            "finance"
        ]
    },
    {
        "name": "AegisLLM",
        "repo": "zikuicai/aegisllm",
        "url": "https://github.com/zikuicai/aegisllm",
        "stars": 34,
        "forks": 4,
        "language": "Python",
        "license": "MIT",
        "report": "projects/335-aegisllm-self-reflective-defense-agents.md",
        "pattern": "coordinate orchestrator-deflector-responder-evaluator roles -> evaluate adversarial and unlearning threats -> optimize prompts with DSPy loops -> improve runtime defense quality without model retraining",
        "description": "AegisLLM is a cooperative multi-agent security framework that claims self-improving defensive behavior through test-time prompt optimization.",
        "stack": [
            "Python",
            "Multi-Agent Defense Pipelines",
            "DSPy Optimization"
        ],
        "category": "Self-Reflective Multi-Agent Defense System",
        "lastPushed": "2026-05-30T00:00:00Z",
        "localPath": "raw-github/zikuicai_aegisllm.md",
        "status": "candidate",
        "tags": [
            "multi-agent",
            "security",
            "self-improvement",
            "dspy",
            "evaluation"
        ]
    },
    {
        "name": "EvoMap Evolver",
        "repo": "EvoMap/evolver",
        "url": "https://github.com/EvoMap/evolver",
        "stars": 7600,
        "forks": 773,
        "language": "JavaScript",
        "license": "GPL-3.0",
        "report": "projects/336-evomap-evolver-self-evolving-memory-framework.md",
        "pattern": "represent knowledge as evolving graph maps -> apply reinforcement and relation updates from interaction feedback -> optimize memory retrieval paths for downstream reasoning -> persist the updated map structure as a reusable long-horizon state substrate",
        "description": "EvoMap/evolver presents a memory-map framework that keeps updating graph structures from user and task feedback to improve retrieval and reasoning quality over time.",
        "stack": [
            "JavaScript",
            "Graph Memory Evolution Runtime",
            "Reasoning Retrieval"
        ],
        "category": "Self-Evolving Memory and Reasoning Map Framework",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/evomap_evolver.md",
        "status": "candidate",
        "tags": [
            "memory",
            "graph",
            "self-evolving",
            "retrieval",
            "reasoning"
        ]
    },
    {
        "name": "Hermes Agent Self-Evolution",
        "repo": "NousResearch/hermes-agent-self-evolution",
        "url": "https://github.com/NousResearch/hermes-agent-self-evolution",
        "stars": 3700,
        "forks": 422,
        "language": "Python",
        "license": "MIT",
        "report": "projects/337-hermes-agent-self-evolution-rl-model-card.md",
        "pattern": "collect trajectories from environment interaction -> run self-play and reward-driven filtering -> distill improved policy behavior into Hermes checkpoints -> iterate closed-loop updates to increase task-level coding and reasoning performance",
        "description": "NousResearch/hermes-agent-self-evolution packages a self-evolving RL training workflow that distills improved interaction behavior into Hermes model variants.",
        "stack": [
            "Python",
            "RL Distillation Pipeline",
            "Self-Evolution Agent Training"
        ],
        "category": "On-Policy RL Self-Evolution Pipeline for Agent Models",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/nousresearch_hermes-agent-self-evolution.md",
        "status": "candidate",
        "tags": [
            "self-evolution",
            "rl",
            "agent-training",
            "distillation",
            "hermes"
        ]
    },
    {
        "name": "MCP Neo4j Agent Memory",
        "repo": "knowall-ai/mcp-neo4j-agent-memory",
        "url": "https://github.com/knowall-ai/mcp-neo4j-agent-memory",
        "stars": 68,
        "forks": 15,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/338-mcp-neo4j-agent-memory-server.md",
        "pattern": "capture chat events and tool outputs into a graph memory store -> expose semantic and structural retrieval through MCP endpoints -> keep temporal and entity relations queryable -> feed retrieved memories back into agent planning and execution loops",
        "description": "knowall-ai/mcp-neo4j-agent-memory provides an MCP server that gives agents persistent graph memory backed by Neo4j plus vector retrieval.",
        "stack": [
            "TypeScript",
            "Neo4j MCP Server",
            "Vector Memory Store"
        ],
        "category": "Graph-Memory MCP Server for Long-Horizon Agents",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/knowall-ai_mcp-neo4j-agent-memory.md",
        "status": "candidate",
        "tags": [
            "memory",
            "neo4j",
            "mcp",
            "graph",
            "long-context"
        ]
    },
    {
        "name": "CC Harness Skills",
        "repo": "LearnPrompt/cc-harness-skills",
        "url": "https://github.com/LearnPrompt/cc-harness-skills",
        "stars": 217,
        "forks": 63,
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/339-cc-harness-skills-operational-playbooks.md",
        "pattern": "encode recurring coding-agent execution patterns as reusable markdown skills -> bind each playbook to harness-level commands and quality checks -> reuse these skills across sessions to reduce setup entropy -> iterate skill prompts based on failure and review feedback",
        "description": "LearnPrompt/cc-harness-skills curates reusable harness playbooks for Codex and Claude Code workflows, emphasizing skill reuse over one-off prompts.",
        "stack": [
            "Markdown",
            "Harness Skill Playbooks",
            "Codex-Claude Workflows"
        ],
        "category": "Codex/Claude Harness Skill Playbooks",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/learnprompt_cc-harness-skills.md",
        "status": "candidate",
        "tags": [
            "skills",
            "harness",
            "codex",
            "claude-code",
            "playbook"
        ]
    },
    {
        "name": "ClawArena",
        "repo": "aiming-lab/ClawArena",
        "url": "https://github.com/aiming-lab/ClawArena",
        "stars": 47,
        "forks": 0,
        "language": "Python",
        "license": "MIT",
        "report": "projects/340-clawarena-computer-use-benchmark.md",
        "pattern": "run interactive browser/desktop tasks in benchmark arenas -> score agent behavior across controlled environments -> compare policy and harness variants with reproducible evaluation traces -> feed benchmark deltas back into harness and skill updates",
        "description": "aiming-lab/ClawArena focuses on benchmark-centric evaluation for computer-use agents under controlled interactive environments.",
        "stack": [
            "Python",
            "Computer-Use Benchmark Arena",
            "Multi-Agent Harness"
        ],
        "category": "Interactive Computer-Use Benchmark Harness Arena",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/aiming-lab_clawarena.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "computer-use",
            "harness",
            "evaluation",
            "agent"
        ]
    },
    {
        "name": "Kodu Awesome Agent Skills",
        "repo": "kodustech/awesome-agent-skills",
        "url": "https://github.com/kodustech/awesome-agent-skills",
        "stars": 71,
        "forks": 29,
        "language": "Markdown",
        "license": "CC0-1.0",
        "report": "projects/341-kodu-awesome-agent-skills-index.md",
        "pattern": "curate reusable coding-agent skills into an index with reproducible examples -> normalize prompt and workflow patterns across domains -> make skills discoverable and composable for harness integration -> accelerate agent improvement by reusing validated skill modules",
        "description": "kodustech/awesome-agent-skills is a curated index of reusable AI coding-agent skills and prompt workflow patterns.",
        "stack": [
            "Markdown",
            "Agent Skill Catalog",
            "Reusable Prompt Patterns"
        ],
        "category": "Curated Agent Skill Catalog and Prompt Workflow Patterns",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/kodustech_awesome-agent-skills.md",
        "status": "candidate",
        "tags": [
            "skills",
            "awesome-list",
            "prompt-patterns",
            "catalog",
            "agent-workflow"
        ]
    },
    {
        "name": "Lossless Claw Context Management",
        "repo": "Martian-Engineering/lossless-claw",
        "url": "https://github.com/Martian-Engineering/lossless-claw",
        "stars": 4800,
        "forks": 410,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/342-lossless-claw-context-management.md",
        "pattern": "capture task and conversation traces into structured context artifacts -> rank and compress context for retrieval fidelity -> inject curated context into follow-up agent/tool calls -> keep a replayable context lineage that reduces drift across long-running workflows",
        "description": "Martian-Engineering/lossless-claw provides persistent context-management primitives for OpenClaw-style agent workflows with explicit long-horizon memory handling.",
        "stack": [
            "TypeScript",
            "OpenClaw Plugin",
            "Context Management Runtime"
        ],
        "category": "Persistent Context and Memory Orchestration for OpenClaw",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/martian-engineering_lossless-claw.md",
        "status": "candidate",
        "tags": [
            "memory",
            "context",
            "openclaw",
            "plugin",
            "lineage"
        ]
    },
    {
        "name": "AgentsMeetRL Benchmark Index",
        "repo": "thinkwee/AgentsMeetRL",
        "url": "https://github.com/thinkwee/AgentsMeetRL",
        "stars": 1500,
        "forks": 203,
        "language": "Markdown",
        "license": "Not listed",
        "report": "projects/343-agentsmeetrl-benchmark-index.md",
        "pattern": "aggregate agentic-RL methods and benchmark references into a structured index -> cluster methods by training/evaluation setting -> expose comparison anchors for harness design and evaluator selection -> support downstream pipeline choices with curated benchmark evidence",
        "description": "thinkwee/AgentsMeetRL is an awesome-style collection focused on agentic RL papers, methods, and benchmark references for agent training/evaluation loops.",
        "stack": [
            "Markdown",
            "Awesome List",
            "Agentic RL Benchmark Survey"
        ],
        "category": "Agentic RL and Benchmark Knowledge Index",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/thinkwee_agentsmeetrl.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "agentic-rl",
            "evaluation",
            "awesome-list",
            "survey"
        ]
    },
    {
        "name": "OpenHarness Agent Harness Fork",
        "repo": "syntax-syndicate/OpenHarness-agent-harness",
        "url": "https://github.com/syntax-syndicate/OpenHarness-agent-harness",
        "stars": 1,
        "forks": 0,
        "language": "Python",
        "license": "MIT",
        "report": "projects/344-openharness-agent-harness-fork.md",
        "pattern": "define standardized harness interfaces for task setup, execution, and judging -> route agent actions through controlled runtime adapters -> log traces and outcomes for comparable replay -> make harness-level protocol changes testable before model-level retraining",
        "description": "syntax-syndicate/OpenHarness-agent-harness tracks an OpenHarness runtime fork for controlled agent execution and evaluation workflow standardization.",
        "stack": [
            "Python",
            "Agent Harness Runtime",
            "Evaluation Pipeline"
        ],
        "category": "Open Agent Harness Runtime and Evaluation Workflow",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/syntax-syndicate_openharness-agent-harness.md",
        "status": "candidate",
        "tags": [
            "harness",
            "framework",
            "runtime",
            "evaluation",
            "workflow"
        ]
    },
    {
        "name": "OpenClaw Arcade Plugin",
        "repo": "ArcadeAI/openclaw-arcade-plugin",
        "url": "https://github.com/ArcadeAI/openclaw-arcade-plugin",
        "stars": 4,
        "forks": 2,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/345-openclaw-arcade-plugin.md",
        "pattern": "bridge OpenClaw runtime calls to Arcade.dev tool endpoints -> register reusable tool skills through plugin contracts -> execute constrained external actions with typed interfaces -> feed tool outcomes back into agent planning loops for iterative skill reuse",
        "description": "ArcadeAI/openclaw-arcade-plugin connects OpenClaw agents to Arcade.dev tool APIs as reusable plugin skills.",
        "stack": [
            "TypeScript",
            "OpenClaw Plugin",
            "Arcade Tool Bridge"
        ],
        "category": "OpenClaw Skill Plugin for Arcade Tool Connectivity",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/arcadeai_openclaw-arcade-plugin.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "plugin",
            "skills",
            "tools",
            "integration"
        ]
    },
    {
        "name": "ObsidianClaw Knowledge Plugin",
        "repo": "humanitylabs-org/obsidianclaw",
        "url": "https://github.com/humanitylabs-org/obsidianclaw",
        "stars": 6,
        "forks": 0,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/346-obsidianclaw-knowledge-plugin.md",
        "pattern": "connect OpenClaw sessions with Obsidian-backed knowledge notes -> store interaction artifacts as structured vault entries -> retrieve linked notes into future planning/context windows -> preserve durable memory across episodic agent runs",
        "description": "humanitylabs-org/obsidianclaw is an archived OpenClaw plugin that links agent workflows with Obsidian-style knowledge memory.",
        "stack": [
            "TypeScript",
            "OpenClaw Plugin",
            "Obsidian Knowledge Sync"
        ],
        "category": "OpenClaw Knowledge and Notes Integration Plugin",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/humanitylabs-org_obsidianclaw.md",
        "status": "candidate",
        "tags": [
            "memory",
            "obsidian",
            "openclaw",
            "knowledge-base",
            "plugin"
        ]
    },
    {
        "name": "Momo OpenClaw Plugin",
        "repo": "momo-personal-assistant/openclaw-plugin",
        "url": "https://github.com/momo-personal-assistant/openclaw-plugin",
        "stars": 15,
        "forks": 10,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/347-momo-openclaw-plugin.md",
        "pattern": "encode assistant behaviors as plugin capabilities inside OpenClaw -> retain user/task state and reminders across sessions -> orchestrate personal productivity actions through constrained tool calls -> evolve assistant behavior from interaction feedback and retained context",
        "description": "momo-personal-assistant/openclaw-plugin provides an OpenClaw plugin layer for personal-assistant style workflows with persistent task context.",
        "stack": [
            "TypeScript",
            "OpenClaw Personal Assistant Plugin",
            "Task Memory"
        ],
        "category": "Personal Assistant Plugin for OpenClaw Workflows",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/momo-personal-assistant_openclaw-plugin.md",
        "status": "candidate",
        "tags": [
            "assistant",
            "openclaw",
            "plugin",
            "memory",
            "application"
        ]
    },
    {
        "name": "NVIDIA Agent Skills Registry",
        "repo": "NVIDIA/skills",
        "url": "https://github.com/NVIDIA/skills",
        "stars": 692,
        "forks": 91,
        "language": "Jupyter Notebook",
        "license": "Apache-2.0",
        "report": "projects/348-nvidia-agent-skills-registry.md",
        "pattern": "package task procedures as reusable skills -> define declarative metadata for retrieval and execution -> map skill modules to agent workflow runtimes -> reduce repeated prompt engineering by codifying high-signal operational playbooks",
        "description": "NVIDIA/skills curates reusable agent skill modules and templates for enterprise-grade assistant and coding workflows.",
        "stack": [
            "Jupyter Notebook",
            "Python",
            "Agent Skill Registry"
        ],
        "category": "Enterprise Agent Skill Registry and Runtime Templates",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/nvidia_skills.md",
        "status": "candidate",
        "tags": [
            "skill",
            "registry",
            "agent-runtime",
            "workflow",
            "nvidia"
        ]
    },
    {
        "name": "Supabase Agent Skills",
        "repo": "supabase/agent-skills",
        "url": "https://github.com/supabase/agent-skills",
        "stars": 2200,
        "forks": 146,
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/349-supabase-agent-skills.md",
        "pattern": "encode domain-specific playbooks as compact skill assets -> inject them into agent context only when needed -> preserve high-value workflow constraints and SQL/product knowledge -> stabilize assistant output quality through reusable prompt primitives",
        "description": "supabase/agent-skills publishes composable skill packs for coding and product-support agent workflows with reusable prompt structures.",
        "stack": [
            "Markdown",
            "Prompt Assets",
            "Agent Skill Packs"
        ],
        "category": "Agent Skill Packs and Prompt Compression Patterns",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/supabase_agent-skills.md",
        "status": "candidate",
        "tags": [
            "skill",
            "prompt-engineering",
            "agent",
            "supabase",
            "workflow"
        ]
    },
    {
        "name": "Skills Vote Evolution Benchmark",
        "repo": "MemTensor/skills-vote",
        "url": "https://github.com/MemTensor/skills-vote",
        "stars": 267,
        "forks": 14,
        "language": "Python",
        "license": "MIT",
        "report": "projects/350-skills-vote-evolution-benchmark.md",
        "pattern": "generate multiple candidate skill mutations -> score candidates with voting-style evaluators on benchmark tasks -> retain winning variants in the skill pool -> iterate selection to improve downstream agent performance across tasks",
        "description": "MemTensor/skills-vote focuses on self-evolving skill selection and evaluation loops for agent improvement experiments.",
        "stack": [
            "Python",
            "Evolution Framework",
            "Benchmark Evaluation"
        ],
        "category": "Self-Evolving Skill Selection and Benchmark Pipeline",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/memtensor_skills-vote.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "evaluation",
            "skill-evolution",
            "self-improving",
            "python"
        ]
    },
    {
        "name": "Ori Mnemos Memory Harness",
        "repo": "aayoawoyemi/ori-mnemos",
        "url": "https://github.com/aayoawoyemi/ori-mnemos",
        "stars": 10,
        "forks": 0,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/351-ori-mnemos-memory-harness.md",
        "pattern": "capture agent interactions and prompts into typed memory records -> run compression and retrieval policies over prior episodes -> inject relevant traces back into current execution context -> expose memory operations as runtime primitives for reproducible long-horizon behavior",
        "description": "aayoawoyemi/ori-mnemos provides a memory substrate that records agent traces and feeds retrieval into future steps.",
        "stack": [
            "TypeScript",
            "Agent Memory Runtime",
            "Prompt and Event Tracing"
        ],
        "category": "Agent Memory Substrate and Runtime Tracing Harness",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/aayoawoyemi_ori-mnemos.md",
        "status": "candidate",
        "tags": [
            "memory",
            "runtime",
            "agent-harness",
            "typescript",
            "tracing"
        ]
    },
    {
        "name": "OpenClaw DingTalk Channel Plugin",
        "repo": "soimy/openclaw-channel-dingtalk",
        "url": "https://github.com/soimy/openclaw-channel-dingtalk",
        "stars": 87,
        "forks": 38,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/352-openclaw-dingtalk-channel-plugin.md",
        "pattern": "wrap enterprise messaging APIs as OpenClaw channel adapters -> route conversations and action callbacks through typed plugin interfaces -> persist channel events as reusable context for follow-up workflows -> turn communication endpoints into reusable agent operation skills",
        "description": "soimy/openclaw-channel-dingtalk integrates OpenClaw agents with DingTalk channels for enterprise communication workflows.",
        "stack": [
            "TypeScript",
            "OpenClaw Channel Plugin",
            "DingTalk Integration"
        ],
        "category": "Agent Channel Plugin for Enterprise Messaging Runtime",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/soimy_openclaw-channel-dingtalk.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "plugin",
            "channel",
            "dingtalk",
            "integration"
        ]
    },
    {
        "name": "OpenClaw Codex App Server",
        "repo": "pwrdrvr/openclaw-codex-app-server",
        "url": "https://github.com/pwrdrvr/openclaw-codex-app-server",
        "stars": 258,
        "forks": 35,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/353-openclaw-codex-app-server.md",
        "pattern": "host OpenClaw runtime endpoints behind an app server layer -> connect Codex and external model providers through unified interfaces -> control task execution and environment state with server-level policies -> enable reproducible harness loops for agent coding workflows",
        "description": "pwrdrvr/openclaw-codex-app-server exposes an app-server runtime linking OpenClaw workflows with Codex and provider integrations.",
        "stack": [
            "TypeScript",
            "OpenClaw App Server",
            "Runpod-Together Integration"
        ],
        "category": "Harness-Oriented App Server for OpenClaw and Codex Workflows",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/pwrdrvr_openclaw-codex-app-server.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "codex",
            "app-server",
            "harness",
            "typescript"
        ]
    },
    {
        "name": "OpenClaw Observability Plugin",
        "repo": "henrikrexed/openclaw-observability-plugin",
        "url": "https://github.com/henrikrexed/openclaw-observability-plugin",
        "stars": 0,
        "forks": 0,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/354-openclaw-observability-plugin.md",
        "pattern": "instrument OpenClaw runtime events into observable traces -> route telemetry into inspection dashboards and logs -> correlate agent actions with execution outcomes -> reduce blind spots in harness debugging and regression analysis",
        "description": "henrikrexed/openclaw-observability-plugin adds observability and trace-monitoring capabilities to OpenClaw agent runtimes.",
        "stack": [
            "TypeScript",
            "OpenClaw Plugin",
            "Observability Tracing"
        ],
        "category": "Agent Runtime Observability and Trace Monitoring Plugin",
        "lastPushed": "2026-05-31T00:00:00Z",
        "localPath": "raw-github/henrikrexed_openclaw-observability-plugin.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "observability",
            "tracing",
            "runtime",
            "plugin"
        ]
    },
    {
        "name": "Self Evolve OpenClaw Playground",
        "repo": "longmans/self-evolve",
        "url": "https://github.com/longmans/self-evolve",
        "stars": 96,
        "forks": 5,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/355-self-evolve-openclaw-playground.md",
        "pattern": "feedback detection -> reward scoring and learning gates -> Q-value updates plus episodic memory append -> local and remote retrieval on later turns",
        "description": "longmans/self-evolve is a self-learning OpenClaw plugin that learns from feedback and turns runtime experience into reusable memory.",
        "stack": [
            "TypeScript",
            "OpenClaw Plugin",
            "Workflow Benchmark Harness"
        ],
        "category": "Self-Evolving OpenClaw Workflow Playground and Benchmark Harness",
        "lastPushed": "2026-06-08T00:00:00Z",
        "localPath": "raw-github/longmans_self-evolve.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "self-evolve",
            "plugin",
            "episodic memory",
            "feedback learning"
        ]
    },
    {
        "name": "OpenClaw Langfuse Observability Plugin",
        "repo": "MCKRUZ/openclaw-langfuse",
        "url": "https://github.com/MCKRUZ/openclaw-langfuse",
        "stars": 1,
        "forks": 0,
        "language": "JavaScript",
        "license": "MIT",
        "report": "projects/356-openclaw-langfuse-observability-plugin.md",
        "pattern": "hook OpenClaw tool and model events into Langfuse traces -> attach session metadata for replayable diagnostics -> surface latency and failure patterns across agent runs -> support regression spotting before releasing updated agent workflows",
        "description": "MCKRUZ/openclaw-langfuse adds Langfuse observability to OpenClaw through a lightweight plugin bridge.",
        "stack": [
            "JavaScript",
            "OpenClaw Plugin",
            "Langfuse Tracing"
        ],
        "category": "OpenClaw Tracing Plugin for Langfuse Observability",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/mckruz_openclaw-langfuse.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "langfuse",
            "observability",
            "tracing",
            "plugin"
        ]
    },
    {
        "name": "HyperSpell OpenClaw Memory Engine",
        "repo": "hyperspell/hyperspell-openclaw",
        "url": "https://github.com/hyperspell/hyperspell-openclaw",
        "stars": 181,
        "forks": 35,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/357-hyperspell-openclaw-memory-engine.md",
        "pattern": "capture workspace memory artifacts from OpenClaw sessions -> sync and normalize context into an external memory substrate -> retrieve high-signal notes into follow-up prompts and tool calls -> reinforce long-horizon consistency across evolving agent tasks",
        "description": "hyperspell/hyperspell-openclaw extends OpenClaw with memory/context synchronization and retrieval enhancements.",
        "stack": [
            "TypeScript",
            "OpenClaw Memory Plugin",
            "Context Synchronization"
        ],
        "category": "OpenClaw Memory and Context Enhancement Runtime",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/hyperspell_hyperspell-openclaw.md",
        "status": "candidate",
        "tags": [
            "memory",
            "context",
            "openclaw",
            "plugin",
            "typescript"
        ]
    },
    {
        "name": "Awesome OpenClaw Plugins (Composio Community)",
        "repo": "composio-community/awesome-openclaw-plugins",
        "url": "https://github.com/composio-community/awesome-openclaw-plugins",
        "stars": 43,
        "forks": 10,
        "language": "TypeScript",
        "license": "CC0-1.0",
        "report": "projects/358-awesome-openclaw-plugins-composio-community.md",
        "pattern": "curate installable OpenClaw plugins into structured categories -> map memory, security, observability, and multi-agent capabilities in one index -> provide concrete install commands as reusable operational skills -> accelerate capability discovery for agent workflow evolution",
        "description": "composio-community/awesome-openclaw-plugins curates OpenClaw plugin assets and operational playbooks into a structured ecosystem index.",
        "stack": [
            "TypeScript",
            "OpenClaw Plugin Registry",
            "Resource Index"
        ],
        "category": "OpenClaw Plugin Ecosystem Index and Skill Resource Map",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/composio-community_awesome-openclaw-plugins.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "plugins",
            "awesome-list",
            "skills",
            "resource-index"
        ]
    },
    {
        "name": "Last30Days Skill Benchmark Harness",
        "repo": "mvanhorn/last30days-skill",
        "url": "https://github.com/mvanhorn/last30days-skill",
        "stars": 1300,
        "forks": 147,
        "language": "Python",
        "license": "MIT",
        "report": "projects/359-last30days-skill-benchmark-harness.md",
        "pattern": "define benchmark tasks and scoring protocol for skill-driven agent runs -> execute task trajectories under controlled harness settings -> compare variants over reproducible metrics and historical windows -> retain high-performing skill behaviors while flagging regressions",
        "description": "mvanhorn/last30days-skill provides a mature Python benchmark harness for evaluating agent skill performance over time.",
        "stack": [
            "Python",
            "Benchmark Harness",
            "Agent Skill Evaluation"
        ],
        "category": "Reproducible Agent Skill Benchmark and Evaluation Harness",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/mvanhorn_last30days-skill.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "evaluation",
            "skills",
            "harness",
            "python"
        ]
    },
    {
        "name": "ClawDreamer Automation Plugin",
        "repo": "EESIZ/clawdreamer",
        "url": "https://github.com/EESIZ/clawdreamer",
        "stars": 23,
        "forks": 5,
        "language": "Python",
        "license": "MIT",
        "report": "projects/360-clawdreamer-automation-plugin.md",
        "pattern": "package practical automation actions as OpenClaw-callable capabilities -> bind daily productivity workflows to reusable agent commands -> persist operational context between invocations -> turn repeated manual steps into compounding assistant skills",
        "description": "EESIZ/clawdreamer offers an OpenClaw-oriented automation app/plugin for productivity and workflow execution.",
        "stack": [
            "Python",
            "OpenClaw Automation Plugin",
            "Workflow Assistant"
        ],
        "category": "OpenClaw Automation App and Productivity Workflow Plugin",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/eesiz_clawdreamer.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "automation",
            "plugin",
            "application",
            "python"
        ]
    },
    {
        "name": "Awesome OpenClaw Plugins (ThisIsJeron)",
        "repo": "ThisIsJeron/awesome-openclaw-plugins",
        "url": "https://github.com/ThisIsJeron/awesome-openclaw-plugins",
        "stars": 13,
        "forks": 12,
        "language": "Markdown",
        "license": "CC0-1.0",
        "report": "projects/361-awesome-openclaw-plugins-thisisjeron.md",
        "pattern": "organize community plugins by channels, memory, security, observability, and self-improvement roles -> clarify skills versus plugins for execution boundaries -> provide install references and integration routes -> shorten discovery time for building agent capability stacks",
        "description": "ThisIsJeron/awesome-openclaw-plugins is a curated OpenClaw plugin knowledge index with operational categories and install references.",
        "stack": [
            "Markdown",
            "OpenClaw Plugin Catalog",
            "Community Resource Index"
        ],
        "category": "OpenClaw Plugin Catalog and Community Knowledge Index",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/thisisjeron_awesome-openclaw-plugins.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "plugins",
            "resource-index",
            "community",
            "skills"
        ]
    },
    {
        "name": "Awesome OpenClaw Money Maker Index",
        "repo": "BlockRunAI/awesome-OpenClaw-Money-Maker",
        "url": "https://github.com/BlockRunAI/awesome-OpenClaw-Money-Maker",
        "stars": 261,
        "forks": 45,
        "language": "Markdown",
        "license": "CC0-1.0",
        "report": "projects/362-awesome-openclaw-money-maker-index.md",
        "pattern": "catalog repeatable OpenClaw monetization workflows and supporting tools -> connect skills, automations, and infrastructure choices to concrete earning scenarios -> expose cost and risk controls for agent deployment decisions -> provide a practical lens for product-level agent usability",
        "description": "BlockRunAI/awesome-OpenClaw-Money-Maker curates OpenClaw-centric automation and skill pathways oriented toward real-world monetization scenarios.",
        "stack": [
            "Markdown",
            "OpenClaw Use-Case Index",
            "Monetization Workflow Guide"
        ],
        "category": "Agent Monetization Workflow and OpenClaw Use-Case Index",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/blockrunai_awesome-openclaw-money-maker.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "use-cases",
            "automation",
            "resource-index",
            "monetization"
        ]
    },
    {
        "name": "Awesome OpenClaw Ecosystem Index (SamurAIGPT)",
        "repo": "SamurAIGPT/awesome-openclaw",
        "url": "https://github.com/SamurAIGPT/awesome-openclaw",
        "stars": 410,
        "forks": 72,
        "language": "Shell/JavaScript/HTML",
        "license": "License file present (public page)",
        "report": "projects/363-awesome-openclaw-ecosystem-index-samuraigpt.md",
        "pattern": "curate OpenClaw tools, skills, tutorials, and ecosystem modules into one navigable index -> group resources by workflow role and operating context -> shorten adoption path for newcomers and operators -> turn fragmented community assets into reusable skill discovery infrastructure",
        "description": "SamurAIGPT/awesome-openclaw is a curated index of OpenClaw resources, tools, skills, tutorials, and community projects.",
        "stack": [
            "Shell",
            "JavaScript",
            "HTML",
            "OpenClaw Resource Index"
        ],
        "category": "OpenClaw Ecosystem Curation and Skill Resource Index",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/samuraigpt_awesome-openclaw.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "skills",
            "resource-index",
            "tutorial",
            "ecosystem"
        ]
    },
    {
        "name": "Awesome Claws Collection (LHL3341)",
        "repo": "LHL3341/awesome-claws",
        "url": "https://github.com/LHL3341/awesome-claws",
        "stars": 129,
        "forks": 12,
        "language": "TypeScript",
        "license": "CC0-1.0",
        "report": "projects/364-awesome-claws-collection-lhl3341.md",
        "pattern": "organize OpenClaw products, skills, communities, and ecosystem resources into scenario-based sections -> keep practical references and links continuously discoverable -> reduce search overhead for builders selecting tools -> accelerate workflow assembly for multi-agent and channel deployments",
        "description": "LHL3341/awesome-claws curates OpenClaw products, skills, communities, and ecosystem resources in bilingual scenario-focused structure.",
        "stack": [
            "TypeScript",
            "OpenClaw Ecosystem Index",
            "Curated Collection"
        ],
        "category": "OpenClaw Ecosystem Collection and Skill/Tool Index",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/lhl3341_awesome-claws.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "skills",
            "resource-index",
            "ecosystem",
            "tutorial"
        ]
    },
    {
        "name": "REINS Self-Improving Model Framework",
        "repo": "pegasi-ai/reins",
        "url": "https://github.com/pegasi-ai/reins",
        "stars": 84,
        "forks": 7,
        "language": "Python",
        "license": "MIT",
        "report": "projects/365-reins-self-improving-model-framework.md",
        "pattern": "constrain and optimize agent behavior with explicit reinforcement policies -> score behavior against undesired actions and alignment constraints -> update control policies as reusable guardrails -> compound safer self-improving behavior in repeated execution loops",
        "description": "pegasi-ai/reins provides a self-improving control framework aimed at reducing undesired agent behavior during iterative execution.",
        "stack": [
            "Python",
            "Self-Improving Model Framework",
            "Training Harness"
        ],
        "category": "Self-Improving Agent Policy Framework and Training Harness",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/pegasi-ai_reins.md",
        "status": "candidate",
        "tags": [
            "evolution",
            "framework",
            "reinforcement",
            "policy",
            "harness"
        ]
    },
    {
        "name": "MentisDB Agent Memory Graph Database",
        "repo": "cloudllm-ai/mentisdb",
        "url": "https://github.com/cloudllm-ai/mentisdb",
        "stars": 71,
        "forks": 8,
        "language": "Rust",
        "license": "MIT",
        "report": "projects/366-mentisdb-agent-memory-graph-database.md",
        "pattern": "store append-only semantic memory and thought chains in a durable graph substrate -> version skills as integrity-checked artifacts similar to a registry -> retrieve and merge high-signal historical context into active agent decisions -> preserve learning continuity across sessions, models, and team handoffs",
        "description": "cloudllm-ai/mentisdb is a durable semantic memory engine and versioned skill registry for long-horizon AI agent operation.",
        "stack": [
            "Rust",
            "Graph Memory Database",
            "Versioned Skill Registry"
        ],
        "category": "Durable Agent Memory Graph Database and Skill Registry Runtime",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/cloudllm-ai_mentisdb.md",
        "status": "candidate",
        "tags": [
            "memory",
            "graph-database",
            "skills",
            "registry",
            "rust"
        ]
    },
    {
        "name": "Awesome OpenClaw Plugin Index (rohitg00)",
        "repo": "rohitg00/awesome-openclaw",
        "url": "https://github.com/rohitg00/awesome-openclaw",
        "stars": 512,
        "forks": 123,
        "language": "Python",
        "license": "CC0-1.0",
        "report": "projects/367-awesome-openclaw-plugin-index-rohitg00.md",
        "pattern": "aggregate plugin, memory, observability, deployment, and benchmark resources around OpenClaw workflows -> structure links by operational problem class -> give installable and reusable pathways for skills and channels -> increase reproducibility of agent capability composition",
        "description": "rohitg00/awesome-openclaw is a high-activity curated index for OpenClaw plugins, skills, deployment patterns, and ecosystem resources.",
        "stack": [
            "Python",
            "OpenClaw Plugin Catalog",
            "Resource Index"
        ],
        "category": "OpenClaw Plugin and Agent Skills Resource Index",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/rohitg00_awesome-openclaw.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "plugins",
            "skills",
            "resource-index",
            "operations"
        ]
    },
    {
        "name": "ClawMem On-Device Memory Layer",
        "repo": "yoloshii/ClawMem",
        "url": "https://github.com/yoloshii/ClawMem",
        "stars": 179,
        "forks": 26,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/368-clawmem-on-device-memory-layer.md",
        "pattern": "index local documents and session artifacts into a persistent memory substrate -> combine hybrid retrieval, hooks, and MCP tooling to surface relevant context automatically -> preserve decisions and handoffs across sessions and agents -> enable compounding memory quality through repeated retrieval and feedback loops",
        "description": "yoloshii/ClawMem provides an on-device memory layer for Claude Code, Hermes, and OpenClaw agents with hybrid retrieval and hooks.",
        "stack": [
            "TypeScript",
            "Bun",
            "On-Device Memory Layer",
            "RAG Hooks"
        ],
        "category": "On-Device Memory Layer and Retrieval Runtime for Agents",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/yoloshii_clawmem.md",
        "status": "candidate",
        "tags": [
            "memory",
            "openclaw",
            "claude-code",
            "mcp",
            "rag"
        ]
    },
    {
        "name": "SoulClaw OpenClaw Fork with Soul Memory",
        "repo": "clawsouls/soulclaw",
        "url": "https://github.com/clawsouls/soulclaw",
        "stars": 7,
        "forks": 0,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/369-soulclaw-openclaw-fork-with-soul-memory.md",
        "pattern": "extend OpenClaw with persistent identity and multi-tier memory boundaries -> separate immutable soul identity from working and session memories -> synchronize persona and memory policies across channels and teams -> reduce drift while enabling long-horizon behavior consistency",
        "description": "clawsouls/soulclaw is an OpenClaw-derived framework emphasizing persistent identity, multi-tier memory, and channel-ready agent runtime.",
        "stack": [
            "TypeScript",
            "Swift",
            "Kotlin",
            "OpenClaw Fork with Soul Memory"
        ],
        "category": "OpenClaw Fork with Multi-Tier Memory and Persona Runtime",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/clawsouls_soulclaw.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "memory",
            "persona",
            "framework",
            "multi-agent"
        ]
    },
    {
        "name": "Commonly Agent Swarm Operating System",
        "repo": "Team-Commonly/commonly",
        "url": "https://github.com/Team-Commonly/commonly",
        "stars": 685,
        "forks": 97,
        "language": "TypeScript",
        "license": "License file present (public page)",
        "report": "projects/370-commonly-agent-swarm-operating-system.md",
        "pattern": "organize agent teams into role-based workflow lanes -> attach memory and control rules per lane -> route tasks across shared context and approval boundaries -> preserve swarm-level learning and execution continuity across long-horizon work",
        "description": "Team-Commonly/commonly positions itself as an AI swarm workflow operating system with built-in orchestration and repository-first execution patterns.",
        "stack": [
            "TypeScript",
            "Node.js",
            "Agent Swarm Runtime"
        ],
        "category": "Multi-Agent Swarm Orchestration Runtime and Workflow Infrastructure",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/team-commonly_commonly.md",
        "status": "candidate",
        "tags": [
            "swarm",
            "multi-agent",
            "workflow",
            "runtime",
            "orchestration"
        ]
    },
    {
        "name": "MateClaw OpenClaw Memory and Rule Engine",
        "repo": "matevip/mateclaw",
        "url": "https://github.com/matevip/mateclaw",
        "stars": 537,
        "forks": 184,
        "language": "Java",
        "license": "Apache-2.0",
        "report": "projects/371-mateclaw-openclaw-memory-and-rule-engine.md",
        "pattern": "inject memory and rule-engine controls into OpenClaw execution -> bind prompts, tools, and context flows to policy checks -> automate repeatable task pipelines with persistent state -> reduce drift while compounding operator experience across runs",
        "description": "matevip/mateclaw extends the OpenClaw ecosystem with memory-aware runtime controls, rule-engine automation, and agent execution governance.",
        "stack": [
            "Java",
            "TypeScript",
            "Spring AI Alibaba",
            "OpenClaw Runtime"
        ],
        "category": "OpenClaw Runtime Extension with Memory Control and Automation Rules",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/matevip_mateclaw.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "memory",
            "rule-engine",
            "automation",
            "runtime"
        ]
    },
    {
        "name": "OnionClaw OPSEC Agent Plugin",
        "repo": "christinminor459/OnionClaw",
        "url": "https://github.com/christinminor459/OnionClaw",
        "stars": 198,
        "forks": 56,
        "language": "Python",
        "license": "License file present (public page)",
        "report": "projects/372-onionclaw-opsec-agent-plugin.md",
        "pattern": "wrap agent actions with OPSEC constraints and privacy-first tool defaults -> provide hardened plugins for network, command, and context operations -> keep operational traces bounded while still enabling autonomous workflows -> improve safe deployment readiness for agent teams",
        "description": "christinminor459/OnionClaw is an OPSEC-focused OpenClaw plugin layer for secure agent execution and operational hardening.",
        "stack": [
            "Python",
            "OpenClaw Plugin",
            "Security Workflow"
        ],
        "category": "Security/Privacy Agent Plugin with Tooling and Channel Hardening",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/christinminor459_onionclaw.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "security",
            "privacy",
            "plugin",
            "tooling"
        ]
    },
    {
        "name": "Nowledge Community OpenClaw Skills Hub",
        "repo": "nowledge-co/community",
        "url": "https://github.com/nowledge-co/community",
        "stars": 86,
        "forks": 21,
        "language": "TypeScript",
        "license": "License file present (public page)",
        "report": "projects/373-nowledge-community-openclaw-skills-hub.md",
        "pattern": "curate community-authored OpenClaw skills and runtime practices -> map reusable skill packages to real execution scenarios -> standardize onboarding paths for contributors and operators -> accelerate practical adoption of multi-skill agent workflows",
        "description": "nowledge-co/community acts as a community hub for OpenClaw skills, runtime integrations, and ecosystem collaboration resources.",
        "stack": [
            "TypeScript",
            "OpenClaw Skills Hub",
            "Community Runtime Patterns"
        ],
        "category": "OpenClaw Community Skills and Runtime Integration Hub",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/nowledge-co_community.md",
        "status": "candidate",
        "tags": [
            "openclaw",
            "community",
            "skills",
            "resource-index",
            "runtime"
        ]
    },
    {
        "name": "LACP Lightweight Agent Context Protocol",
        "repo": "0xNyk/lacp",
        "url": "https://github.com/0xNyk/lacp",
        "stars": 261,
        "forks": 33,
        "language": "TypeScript",
        "license": "License file present (public page)",
        "report": "projects/374-lacp-lightweight-agent-context-protocol.md",
        "pattern": "define lightweight context exchange boundaries for agent workflows -> normalize session and memory payload handoff across tools -> reduce protocol mismatch cost in multi-agent chains -> preserve context continuity while keeping transport overhead low",
        "description": "0xNyk/lacp provides a lightweight agent context protocol aimed at reusable context passing and tool interoperability.",
        "stack": [
            "TypeScript",
            "Protocol",
            "Agent Context Exchange"
        ],
        "category": "Agent Context Protocol and Interoperability Tooling",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/0xnyk_lacp.md",
        "status": "candidate",
        "tags": [
            "protocol",
            "context",
            "memory",
            "interoperability",
            "agent"
        ]
    },
    {
        "name": "WATER Self-Improving Coding Agent",
        "repo": "manthanguptaa/water",
        "url": "https://github.com/manthanguptaa/water",
        "stars": 288,
        "forks": 38,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/375-water-self-improving-coding-agent.md",
        "pattern": "run coding-agent trajectories under measurable evaluation loops -> compare strategy revisions against task outcomes and regression signals -> retain higher-performing behaviors while dropping failing patches -> improve coding reliability through iterative self-correction",
        "description": "manthanguptaa/water targets self-improving coding agents with benchmark-linked execution loops and iterative optimization behavior.",
        "stack": [
            "Python",
            "Coding Agent",
            "Self-Improvement Evaluation"
        ],
        "category": "Self-Improving Coding Agent with Benchmark-Oriented Execution",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/manthanguptaa_water.md",
        "status": "candidate",
        "tags": [
            "self-improvement",
            "coding-agent",
            "benchmark",
            "evaluation",
            "evolution"
        ]
    },
    {
        "name": "Sponsio Workflow and Multi-Agent Control Plane",
        "repo": "SponsioLabs/Sponsio",
        "url": "https://github.com/SponsioLabs/Sponsio",
        "stars": 469,
        "forks": 28,
        "language": "TypeScript",
        "license": "License file present (public page)",
        "report": "projects/376-sponsio-workflow-and-multi-agent-control.md",
        "pattern": "coordinate multi-agent workflow execution with explicit orchestration contracts -> maintain shared task state and control checkpoints across agents -> expose repeatable automation patterns for teams and pipelines -> improve end-to-end delivery reliability under autonomous execution",
        "description": "SponsioLabs/Sponsio provides workflow-centric multi-agent control infrastructure for orchestrated autonomous task execution.",
        "stack": [
            "TypeScript",
            "Multi-Agent Workflow Control Plane"
        ],
        "category": "Workflow Automation and Multi-Agent Control Infrastructure",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/sponsiolabs_sponsio.md",
        "status": "candidate",
        "tags": [
            "workflow",
            "multi-agent",
            "control-plane",
            "harness",
            "automation"
        ]
    },
    {
        "name": "Agent Workflow Memory Knowledge Graph Runtime",
        "repo": "zorazrw/agent-workflow-memory",
        "url": "https://github.com/zorazrw/agent-workflow-memory",
        "stars": 440,
        "forks": 50,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/377-agent-workflow-memory-knowledge-graph-runtime.md",
        "pattern": "link memory manager and knowledge graph into workflow execution -> route task context through persistent memory nodes -> query historical traces to stabilize next-step planning -> reduce drift across multi-step agent workflows",
        "description": "zorazrw/agent-workflow-memory builds an agent workflow memory system with a graph-backed memory manager and FastAPI execution surface.",
        "stack": [
            "Python",
            "FastAPI",
            "LangChain",
            "Neo4j",
            "Workflow Memory"
        ],
        "category": "Agent Workflow Memory Runtime with Knowledge Graph Integration",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/zorazrw_agent-workflow-memory.md",
        "status": "candidate",
        "tags": [
            "memory",
            "workflow",
            "knowledge-graph",
            "runtime",
            "agent"
        ]
    },
    {
        "name": "AgentMemory Benchmark Framework",
        "repo": "webzler/agentMemory",
        "url": "https://github.com/webzler/agentMemory",
        "stars": 28,
        "forks": 4,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/378-agentmemory-benchmark-framework.md",
        "pattern": "define memory-capability evaluation tasks -> execute benchmark cases across recall and hallucination dimensions -> report scorecards for different agent memory strategies -> provide reproducible baseline harness for memory quality claims",
        "description": "webzler/agentMemory provides a benchmark framework focused on agent memory capability and hallucination-aware evaluation workflows.",
        "stack": [
            "TypeScript",
            "Benchmark Harness",
            "Memory Evaluation"
        ],
        "category": "Benchmark Framework for Agent Memory Evaluation and Hallucination Testing",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/webzler_agentmemory.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "memory",
            "evaluation",
            "hallucination",
            "harness"
        ]
    },
    {
        "name": "A-MEM Agentic Memory for LLM Agents",
        "repo": "agiresearch/A-mem",
        "url": "https://github.com/agiresearch/A-mem",
        "stars": 1000,
        "forks": 86,
        "language": "Python",
        "license": "MIT",
        "report": "projects/379-a-mem-agentic-memory-llm-agents.md",
        "pattern": "build autonomous memory lifecycle for LLM agents -> store and retrieve long-horizon context with salience control -> update memory store through usage feedback -> improve continuity and task grounding across iterative agent runs",
        "description": "agiresearch/A-mem presents agentic memory infrastructure for LLM agents and targets long-term context quality in autonomous task loops.",
        "stack": [
            "Python",
            "LLM Agent Memory",
            "Long-Term Retention"
        ],
        "category": "Agentic Memory Architecture for LLM Agent Long-Term Context Retention",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/agiresearch_a-mem.md",
        "status": "candidate",
        "tags": [
            "memory",
            "llm-agent",
            "agentic-memory",
            "long-term",
            "framework"
        ]
    },
    {
        "name": "ElizaOS AgentMemory Plugin",
        "repo": "elizaOS/agentmemory",
        "url": "https://github.com/elizaOS/agentmemory",
        "stars": 236,
        "forks": 57,
        "language": "Python",
        "license": "MIT",
        "report": "projects/380-elizaos-agentmemory-plugin.md",
        "pattern": "attach memory plugin into ElizaOS runtime pipeline -> persist memory records and expose retrieval hooks to agents -> apply configurable memory operations per interaction -> provide reusable memory module boundary for agent ecosystems",
        "description": "elizaOS/agentmemory is a plugin module that enables memory management capabilities inside ElizaOS-based agent runtimes.",
        "stack": [
            "Python",
            "ElizaOS Plugin",
            "Memory Runtime Integration"
        ],
        "category": "Agent Memory Plugin for ElizaOS Runtime and Persistent Context Handling",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/elizaos_agentmemory.md",
        "status": "candidate",
        "tags": [
            "memory",
            "plugin",
            "elizaos",
            "runtime",
            "tooling"
        ]
    },
    {
        "name": "Apify Agent Skills Library",
        "repo": "apify/agent-skills",
        "url": "https://github.com/apify/agent-skills",
        "stars": 2100,
        "forks": 228,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/381-apify-agent-skills-library.md",
        "pattern": "package reusable skill prompts and procedures for coding agents -> map repeated engineering tasks into skill modules -> compose skill units into longer autonomous workflows -> improve reliability and transferability of agent execution behavior",
        "description": "apify/agent-skills curates reusable skills for coding agents to improve execution quality across software and automation tasks.",
        "stack": [
            "Python",
            "Agent Skills",
            "Developer Workflow Library"
        ],
        "category": "Reusable Skills Library for Coding Agents and Automation Workflows",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/apify_agent-skills.md",
        "status": "candidate",
        "tags": [
            "skills",
            "coding-agent",
            "workflow",
            "library",
            "automation"
        ]
    },
    {
        "name": "OpenSwarm Multi-Agent Orchestration Framework",
        "repo": "openswarm-ai/openswarm",
        "url": "https://github.com/openswarm-ai/openswarm",
        "stars": 129,
        "forks": 16,
        "language": "Python",
        "license": "MIT",
        "report": "projects/382-openswarm-multi-agent-orchestration-framework.md",
        "pattern": "assemble multiple role-specific agents into swarm workflows -> dispatch tasks across shared control boundaries -> coordinate context and handoff logic through lightweight runtime primitives -> support reproducible multi-agent execution loops in production-like settings",
        "description": "openswarm-ai/openswarm provides lightweight multi-agent orchestration primitives for building swarm-style autonomous workflows.",
        "stack": [
            "Python",
            "Multi-Agent Swarm",
            "Runtime Orchestration"
        ],
        "category": "Multi-Agent Swarm Orchestration Framework with Lightweight Runtime Control",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/openswarm-ai_openswarm.md",
        "status": "candidate",
        "tags": [
            "swarm",
            "multi-agent",
            "orchestration",
            "runtime",
            "harness"
        ]
    },
    {
        "name": "AgentraLabs Agentic Memory Runtime",
        "repo": "agentralabs/agentic-memory",
        "url": "https://github.com/agentralabs/agentic-memory",
        "stars": 18,
        "forks": 4,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/383-agentralabs-agentic-memory-runtime.md",
        "pattern": "model memory as a first-class runtime subsystem -> persist and recall long-horizon context artifacts -> expose deterministic memory hooks to agent loops -> reduce context loss across iterative autonomous tasks",
        "description": "agentralabs/agentic-memory provides an agent memory runtime package focused on persistent context and reusable memory APIs.",
        "stack": [
            "TypeScript",
            "Python",
            "Agent Memory Runtime"
        ],
        "category": "Agentic Memory Runtime Framework for Persistent Context",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/agentralabs_agentic-memory.md",
        "status": "candidate",
        "tags": [
            "memory",
            "agentic-memory",
            "runtime",
            "context",
            "agent"
        ]
    },
    {
        "name": "LHL Agentic Memory Module",
        "repo": "lhl/agentic-memory",
        "url": "https://github.com/lhl/agentic-memory",
        "stars": 246,
        "forks": 25,
        "language": "TypeScript",
        "license": "Unspecified",
        "report": "projects/384-lhl-agentic-memory-module.md",
        "pattern": "package memory primitives as pluggable modules -> slot memory handling into existing agent systems -> retain interaction context across sessions -> provide a lightweight memory building block for broader agent stacks",
        "description": "lhl/agentic-memory is a simple memory implementation designed to be slotted into any agentic system.",
        "stack": [
            "TypeScript",
            "Agent Memory Module"
        ],
        "category": "Pluggable Agentic Memory Module for Any Agent System",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/lhl_agentic-memory.md",
        "status": "candidate",
        "tags": [
            "memory",
            "module",
            "agentic-system",
            "plugin",
            "context"
        ]
    },
    {
        "name": "LangChain AgentEvals Harness",
        "repo": "langchain-ai/agentevals",
        "url": "https://github.com/langchain-ai/agentevals",
        "stars": 76,
        "forks": 9,
        "language": "Python",
        "license": "MIT",
        "report": "projects/385-langchain-agentevals-harness.md",
        "pattern": "define executable eval datasets and scoring rules -> run deterministic and model-graded checks against agent trajectories -> surface regressions through repeatable evaluation loops -> harden agent releases with test-like quality gates",
        "description": "langchain-ai/agentevals is a LangChain ecosystem harness for running repeatable agent evaluation suites.",
        "stack": [
            "Python",
            "LangGraph",
            "Agent Evaluation Harness"
        ],
        "category": "Agent Evaluation Harness with LangGraph Integrations",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/langchain-ai_agentevals.md",
        "status": "candidate",
        "tags": [
            "evaluation",
            "benchmark",
            "langgraph",
            "harness",
            "agent"
        ]
    },
    {
        "name": "AgentEvals.dev Benchmark Framework",
        "repo": "agentevals-dev/agentevals",
        "url": "https://github.com/agentevals-dev/agentevals",
        "stars": 98,
        "forks": 6,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/386-agentevals-dev-benchmark-framework.md",
        "pattern": "standardize evaluation tasks for autonomous agents -> execute benchmark suites across versions and prompts -> compare outcomes using shared scoring protocols -> keep performance claims auditable across continuous updates",
        "description": "agentevals-dev/agentevals provides an Apache-licensed benchmark framework for evaluating agent behavior and quality changes.",
        "stack": [
            "Python",
            "Agent Benchmark Framework"
        ],
        "category": "Benchmark and Evaluation Framework for Agent Systems",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/agentevals-dev_agentevals.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "evaluation",
            "agent",
            "quality",
            "framework"
        ]
    },
    {
        "name": "ALucek Agentic Memory Methods Library",
        "repo": "ALucek/agentic-memory",
        "url": "https://github.com/ALucek/agentic-memory",
        "stars": 462,
        "forks": 91,
        "language": "Python",
        "license": "Unspecified",
        "report": "projects/387-alucek-agentic-memory-methods-library.md",
        "pattern": "translate cognitive-memory concepts into implementation templates -> organize memory techniques by operational use-case -> provide runnable method patterns for agent builders -> improve practical memory design choices through comparative examples",
        "description": "ALucek/agentic-memory curates practical memory implementation methods for agentic LLM systems inspired by cognitive architecture concepts.",
        "stack": [
            "Python",
            "Memory Methods",
            "Agent Architecture"
        ],
        "category": "Memory Methods Library for Cognitive Agent Architectures",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/alucek_agentic-memory.md",
        "status": "candidate",
        "tags": [
            "memory",
            "methods",
            "cognitive-architecture",
            "tutorial",
            "agent"
        ]
    },
    {
        "name": "VectorSpaceLab General Agentic Memory",
        "repo": "VectorSpaceLab/general-agentic-memory",
        "url": "https://github.com/VectorSpaceLab/general-agentic-memory",
        "stars": 390,
        "forks": 32,
        "language": "Python",
        "license": "Unspecified",
        "report": "projects/388-vectorspacelab-general-agentic-memory.md",
        "pattern": "design generalized memory abstractions for diverse agent tasks -> persist and retrieve context under shared memory interfaces -> reuse memory operations across domains and workflows -> scale agent continuity without per-task memory rewrites",
        "description": "VectorSpaceLab/general-agentic-memory focuses on generalized memory abstractions that can be reused across varied agent workloads.",
        "stack": [
            "Python",
            "Generalized Agent Memory Framework"
        ],
        "category": "General Agentic Memory Framework with Cross-Task Reuse",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/vectorspacelab_general-agentic-memory.md",
        "status": "candidate",
        "tags": [
            "memory",
            "framework",
            "generalization",
            "runtime",
            "agent"
        ]
    },
    {
        "name": "Nocturne Memory Context Engine",
        "repo": "Dataojitori/nocturne_memory",
        "url": "https://github.com/Dataojitori/nocturne_memory",
        "stars": 1200,
        "forks": 147,
        "language": "Python",
        "license": "MIT",
        "report": "projects/389-nocturne-memory-context-engine.md",
        "pattern": "capture and rank interaction context for long-term retention -> retrieve semantically relevant memory at inference time -> reinforce memory quality through ongoing usage feedback -> improve continuity and personalization of autonomous agent behavior",
        "description": "Dataojitori/nocturne_memory is a context-aware long-term memory engine for AI agents with sustained repository activity.",
        "stack": [
            "Python",
            "Context Memory Engine"
        ],
        "category": "Context-Aware Long-Term Memory Engine for AI Agents",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/dataojitori_nocturne_memory.md",
        "status": "candidate",
        "tags": [
            "memory",
            "context-aware",
            "long-term",
            "engine",
            "agent"
        ]
    },
    {
        "name": "Plaited Agent Eval Harness",
        "repo": "plaited/agent-eval-harness",
        "url": "https://github.com/plaited/agent-eval-harness",
        "stars": 3,
        "forks": 1,
        "language": "TypeScript",
        "license": "ISC",
        "report": "projects/390-plaited-agent-eval-harness.md",
        "pattern": "define adapter schemas for any CLI agent -> capture raw trajectories over task suites -> grade and compare multi-run outputs -> turn agent release quality into repeatable pass@k-style evidence",
        "description": "plaited/agent-eval-harness provides a Unix-style, schema-driven evaluation harness for CLI agents with run, grade, compare, and calibrate modes.",
        "stack": [
            "TypeScript",
            "Bun",
            "CLI Agent Eval Harness"
        ],
        "category": "CLI Agent Evaluation Harness with Schema-Driven Trial Pipelines",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/plaited_agent-eval-harness.md",
        "status": "candidate",
        "tags": [
            "evaluation",
            "harness",
            "cli-agent",
            "schema",
            "benchmark"
        ]
    },
    {
        "name": "MultiAgentEval Enterprise Harness",
        "repo": "najeed/ai-agent-eval-harness",
        "url": "https://github.com/najeed/ai-agent-eval-harness",
        "stars": 28,
        "forks": 6,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/391-multiagenteval-enterprise-harness.md",
        "pattern": "simulate business workflows through benchmark scenarios and shims -> replay deep traces for verification and debugging -> compare agent reliability across environments and workflows -> close the agentic reliability gap with explicit eval infrastructure",
        "description": "najeed/ai-agent-eval-harness is an enterprise-grade reliability framework for AI agents with benchmark, replay, and verification surfaces.",
        "stack": [
            "Python",
            "Docker",
            "Enterprise Agent Eval Harness"
        ],
        "category": "Enterprise Multi-Agent Evaluation and Verification Harness",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/najeed_ai-agent-eval-harness.md",
        "status": "candidate",
        "tags": [
            "evaluation",
            "verification",
            "enterprise",
            "multi-agent",
            "harness"
        ]
    },
    {
        "name": "Arc Continual Learning Benchmark",
        "repo": "Arc-Computer/CL-Bench",
        "url": "https://github.com/Arc-Computer/CL-Bench",
        "stars": 19,
        "forks": 3,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/392-arc-continual-learning-benchmark.md",
        "pattern": "place agents inside stateful multi-turn workflows -> mutate persistent entities under production-style constraints -> evaluate adaptation and reliability under cross-turn dependencies -> use continual-learning pressure instead of one-shot benchmark snapshots",
        "description": "Arc-Computer/CL-Bench is a benchmark framework for evaluating LLM agent continual learning in stateful environments with CRM-style workflows.",
        "stack": [
            "Python",
            "SQL",
            "CRM Workflow Benchmark"
        ],
        "category": "Stateful Continual-Learning Benchmark for LLM Agents",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/arc-computer_cl-bench.md",
        "status": "candidate",
        "tags": [
            "continual learning benchmark",
            "crm workflow",
            "stateful eval",
            "tool validation",
            "agent benchmark"
        ]
    },
    {
        "name": "ClawVault Memory Runtime",
        "repo": "Versatly/clawvault",
        "url": "https://github.com/Versatly/clawvault",
        "stars": 646,
        "forks": 62,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/393-clawvault-memory-runtime.md",
        "pattern": "store structured memory for autonomous agent workflows -> expose retrieval and evaluation surfaces to long-horizon tasks -> integrate memory into OpenClaw-style execution loops -> treat persistence as a runtime subsystem rather than a prompt-only trick",
        "description": "Versatly/clawvault provides structured persistent memory for AI agents and exposes benchmarks, docs, and eval surfaces around that memory stack.",
        "stack": [
            "TypeScript",
            "Node",
            "OpenClaw Memory Runtime"
        ],
        "category": "Persistent Memory Runtime for OpenClaw-Style AI Agents",
        "lastPushed": "2026-06-02T00:00:00Z",
        "localPath": "raw-github/versatly_clawvault.md",
        "status": "candidate",
        "tags": [
            "memory",
            "runtime",
            "openclaw",
            "persistent-context",
            "agent"
        ]
    },
    {
        "name": "OpenSquilla Token-Efficient Agent Runtime",
        "repo": "opensquilla/opensquilla",
        "url": "https://github.com/opensquilla/opensquilla",
        "stars": 2184,
        "forks": 148,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/377-opensquilla-token-efficient-agent-runtime.md",
        "pattern": "optimize agent intelligence density under fixed token budgets -> combine runtime controls with memory and MCP connectivity -> keep execution quality stable while reducing context waste -> improve long-horizon self-improving loops with explicit efficiency constraints",
        "description": "opensquilla/opensquilla is a token-efficient AI agent runtime focused on higher intelligence density with OpenClaw, memory, and MCP integration signals.",
        "stack": [
            "Python",
            "Agent Runtime",
            "MCP",
            "OpenClaw",
            "Memory"
        ],
        "category": "Token-Efficient Agent Runtime with OpenClaw/MCP/Memory Integration",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/opensquilla_opensquilla.md",
        "status": "candidate",
        "tags": [
            "runtime",
            "openclaw",
            "memory",
            "mcp",
            "token-efficiency"
        ]
    },
    {
        "name": "BitFun Desktop Agent Runtime Suite",
        "repo": "GCWing/BitFun",
        "url": "https://github.com/GCWing/BitFun",
        "stars": 799,
        "forks": 99,
        "language": "Rust",
        "license": "MIT",
        "report": "projects/378-bitfun-desktop-agent-runtime-suite.md",
        "pattern": "provide desktop-native agent runtime with code, cowork, and computer-use modalities -> preserve memory and personality state across sessions -> support long-running service mode for continuous operation -> compound capabilities through repeated task execution and context retention",
        "description": "GCWing/BitFun provides a desktop-grade agent runtime suite with built-in code/cowork/computer-use flows plus persistent memory and evolving behavior claims.",
        "stack": [
            "Rust",
            "Desktop Agent Runtime",
            "Computer Use",
            "Memory"
        ],
        "category": "Desktop Agent Runtime and Multi-Mode Execution Environment",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/gcwing_bitfun.md",
        "status": "candidate",
        "tags": [
            "desktop",
            "runtime",
            "computer-use",
            "memory",
            "multi-mode"
        ]
    },
    {
        "name": "PowerMem Agent Memory Plugin",
        "repo": "oceanbase/powermem",
        "url": "https://github.com/oceanbase/powermem",
        "stars": 688,
        "forks": 83,
        "language": "Python",
        "license": "NOASSERTION",
        "report": "projects/379-powermem-agent-memory-plugin.md",
        "pattern": "augment agent pipelines with explicit memory plugin boundaries -> optimize recall quality and retrieval cost across workflows -> provide reusable memory layer for multi-step decisions -> increase agent consistency through persistent context integration",
        "description": "oceanbase/powermem is an agent memory plugin focused on improving accuracy, agility, and affordability for AI agent memory retrieval.",
        "stack": [
            "Python",
            "Memory Plugin",
            "Agent Retrieval"
        ],
        "category": "Agent Memory Plugin and Retrieval Augmentation Layer",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/oceanbase_powermem.md",
        "status": "candidate",
        "tags": [
            "memory",
            "plugin",
            "retrieval",
            "agent",
            "runtime"
        ]
    },
    {
        "name": "Mnemon Persistent Memory Substrate",
        "repo": "mnemon-dev/mnemon",
        "url": "https://github.com/mnemon-dev/mnemon",
        "stars": 322,
        "forks": 46,
        "language": "Go",
        "license": "Apache-2.0",
        "report": "projects/380-mnemon-persistent-memory-substrate.md",
        "pattern": "store agent knowledge in graph-shaped persistent memory -> enable cross-session recall with LLM-supervised consolidation -> feed historical memory into current task reasoning -> improve continuity for multi-agent CLI operations over time",
        "description": "mnemon-dev/mnemon provides LLM-supervised persistent graph memory for agents across Claude Code, OpenClaw, and other CLI runtimes.",
        "stack": [
            "Go",
            "Graph Memory",
            "CLI Agent Memory Runtime"
        ],
        "category": "Persistent Memory Substrate for Cross-Session Agent Recall",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/mnemon-dev_mnemon.md",
        "status": "candidate",
        "tags": [
            "memory",
            "graph",
            "cross-session",
            "openclaw",
            "cli-agent"
        ]
    },
    {
        "name": "Mengram Human-Like Agent Memory",
        "repo": "alibaizhanov/mengram",
        "url": "https://github.com/alibaizhanov/mengram",
        "stars": 172,
        "forks": 27,
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/381-mengram-human-like-agent-memory.md",
        "pattern": "model semantic, episodic, and procedural memories as explicit agent assets -> learn procedures from failures and feedback traces -> integrate memory services into LangChain/CrewAI/OpenClaw flows -> improve adaptation quality through structured memory retention",
        "description": "alibaizhanov/mengram offers human-like semantic/episodic/procedural memory infrastructure for AI agents with multi-framework integrations.",
        "stack": [
            "Python",
            "Memory API",
            "SDK Integrations"
        ],
        "category": "Semantic/Episodic/Procedural Memory Runtime for Agents",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/alibaizhanov_mengram.md",
        "status": "candidate",
        "tags": [
            "memory",
            "semantic",
            "episodic",
            "procedural",
            "sdk"
        ]
    },
    {
        "name": "IMCodes Shared Agent Context Layer",
        "repo": "im4codes/imcodes",
        "url": "https://github.com/im4codes/imcodes",
        "stars": 131,
        "forks": 11,
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/382-imcodes-shared-agent-context-layer.md",
        "pattern": "establish shared context and memory channels across agent providers -> supervise execution and record cross-agent audit trails -> standardize communication primitives for multi-agent collaboration -> reduce fragmentation and improve reproducibility in mixed-agent systems",
        "description": "im4codes/imcodes focuses on shared agent context and memory with supervised execution and cross-agent audit capabilities.",
        "stack": [
            "TypeScript",
            "Shared Context Bus",
            "Cross-Agent Audit"
        ],
        "category": "Shared Agent Context, Memory, and Supervised Execution Layer",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/im4codes_imcodes.md",
        "status": "candidate",
        "tags": [
            "context",
            "memory",
            "audit",
            "cross-agent",
            "tooling"
        ]
    },
    {
        "name": "Weaviate Query Agent Benchmarking Toolkit",
        "repo": "weaviate/query-agent-benchmarking",
        "url": "https://github.com/weaviate/query-agent-benchmarking",
        "stars": 15,
        "forks": 3,
        "language": "Jupyter Notebook",
        "license": "BSD-3-Clause",
        "report": "projects/383-weaviate-query-agent-benchmarking-toolkit.md",
        "pattern": "package benchmark scenarios for query-agent evaluation -> measure retrieval and answer quality across controlled tasks -> make evaluation pipelines reusable and comparable -> provide practical evidence surface for agent benchmark governance",
        "description": "weaviate/query-agent-benchmarking provides benchmarking scenarios and tooling for evaluating Weaviate query-agent behavior.",
        "stack": [
            "Jupyter Notebook",
            "Benchmark Toolkit",
            "Query Agent Evaluation"
        ],
        "category": "Agent Benchmark Toolkit for Query/Retrieval Evaluation",
        "lastPushed": "2026-06-01T00:00:00Z",
        "localPath": "raw-github/weaviate_query-agent-benchmarking.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "evaluation",
            "query-agent",
            "retrieval",
            "toolkit"
        ]
    },
    {
        "name": "PinchBench Skill",
        "repo": "pinchbench/skill",
        "url": "https://github.com/pinchbench/skill",
        "stars": 1234,
        "forks": 140,
        "language": "Python",
        "license": "MIT",
        "report": "projects/51-pinchbench-skill.md",
        "pattern": "task suite -> OpenClaw agent execution -> automatic and/or LLM judging -> transcript retention -> optional leaderboard upload",
        "description": "PinchBench is an OpenClaw-oriented real task benchmark that measures coding agents across productivity, research, writing, coding, analysis, email, memory, and skill-discovery tasks.",
        "stack": [
            "Python",
            "Shell",
            "TypeScript",
            "OpenClaw Benchmark Harness"
        ],
        "category": "Real-world agent task benchmark",
        "lastPushed": "2026-06-02T21:35:43Z",
        "localPath": "raw-github/pinchbench_skill.md",
        "status": "candidate",
        "tags": [
            "benchmark",
            "evaluation",
            "openclaw",
            "skills",
            "transcripts"
        ]
    },
    {
        "name": "Agent Memory Benchmark",
        "repo": "vectorize-io/agent-memory-benchmark",
        "url": "https://github.com/vectorize-io/agent-memory-benchmark",
        "stars": 46,
        "forks": 17,
        "language": "Python",
        "license": "Unknown",
        "report": "projects/77-agent-memory-benchmark.md",
        "pattern": "ingest documents and traces -> retrieve candidate context -> generate agent answer -> judge accuracy and cost -> compare memory strategies across datasets and modes",
        "description": "vectorize-io/agent-memory-benchmark is a benchmark harness for comparing agent memory strategies on multi-step tasks where retrieval quality, latency, and token cost all matter.",
        "stack": [
            "Python",
            "Vue",
            "Agent Memory Benchmark"
        ],
        "category": "Agent Memory Benchmark",
        "lastPushed": "2026-06-04T00:00:00Z",
        "localPath": "raw-github/vectorize-io_agent-memory-benchmark.md",
        "status": "candidate",
        "tags": [
            "memory",
            "benchmark",
            "evaluation",
            "cost",
            "retrieval",
            "benchmark-eval"
        ]
    },
    {
        "name": "EvoMap Awesome Agent Evolution",
        "repo": "EvoMap/awesome-agent-evolution",
        "url": "https://github.com/EvoMap/awesome-agent-evolution",
        "stars": 140,
        "forks": 20,
        "language": "JavaScript",
        "license": "NOASSERTION",
        "report": "projects/394-evomap-awesome-agent-evolution.md",
        "pattern": "field taxonomy -> curated project/paper/benchmark sections -> related awesome-list pointers -> reader-facing ecosystem navigation",
        "description": "EvoMap/awesome-agent-evolution is a curated awesome list covering self-evolution, memory, protocols, benchmarks, coding agents, and adjacent infrastructure.",
        "stack": [
            "JavaScript",
            "Shell",
            "Curated Taxonomy Pipeline"
        ],
        "category": "External awesome list and taxonomy comparator",
        "lastPushed": "2026-06-15T14:57:02Z",
        "localPath": "raw-github/evomap_awesome-agent-evolution.md",
        "status": "candidate",
        "tags": [
            "taxonomy",
            "awesome-list",
            "memory",
            "benchmark",
            "agent-swarm"
        ]
    },
    {
        "name": "RepairAgent",
        "repo": "sola-st/repairagent",
        "url": "https://github.com/sola-st/RepairAgent",
        "description": "RepairAgent is an autonomous agent that fixes bugs in Java projects using LLMs through a localize-analyze-fix-test iteration loop.",
        "stack": [
            "Python",
            "Java",
            "Defects4J Program Repair"
        ],
        "category": "Autonomous Java Bug Repair Agent",
        "status": "candidate",
        "stars": 99,
        "forks": 32,
        "lastPushed": "2026-06-03T00:00:00Z",
        "language": "Python",
        "license": "MIT",
        "report": "projects/393-repairagent-java-autonomous-bug-repair.md",
        "pattern": "read failing test -> localize bug -> analyze code -> generate patch -> run tests -> iterate until a correct fix survives validation",
        "tags": [
            "code repair",
            "defects4j",
            "bug fixing agent",
            "java",
            "autonomous debugging"
        ],
        "localPath": "raw-github/sola-st_repairagent.md"
    },
    {
        "name": "AccelOpt",
        "repo": "zhang677/accelopt",
        "url": "https://github.com/zhang677/AccelOpt",
        "description": "AccelOpt is a self-improving LLM agentic system that iteratively optimizes AI accelerator kernels using optimization memory and benchmarked kernel profiling.",
        "stack": [
            "Python",
            "NKIBench",
            "Accelerator Kernel Optimization"
        ],
        "category": "Self-Improving Accelerator Kernel Optimization Agent",
        "status": "candidate",
        "stars": 51,
        "forks": 7,
        "lastPushed": "2026-06-03T00:00:00Z",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/394-accelopt-self-improving-kernel-optimizer.md",
        "pattern": "generate candidate kernel -> consult optimization memory -> profile on NKIBench or FlashInfer-Bench -> compare slow-fast kernel pairs -> keep stronger optimization traces",
        "tags": [
            "self-improving agent",
            "kernel optimization",
            "nkibench",
            "flashinfer-bench",
            "accelerator tuning"
        ],
        "localPath": "raw-github/zhang677_accelopt.md"
    },
    {
        "name": "DM-Code-Agent",
        "repo": "hwfengcs/dm-code-agent",
        "url": "https://github.com/hwfengcs/DM-Code-Agent",
        "description": "DM-Code-Agent is a local-first and auditable Python code agent baseline with explicit planning, trace replay, optional reflexion modules, and benchmark-facing evaluation paths.",
        "stack": [
            "Python",
            "SWE-bench Lite",
            "Trace Replay"
        ],
        "category": "Auditable Local-First Code Agent Baseline",
        "status": "candidate",
        "stars": 138,
        "forks": 12,
        "lastPushed": "2026-06-03T00:00:00Z",
        "language": "Python",
        "license": "MIT",
        "report": "projects/395-dm-code-agent-auditable-code-baseline.md",
        "pattern": "plan and replan -> call tools with JSONL trace capture -> enable optional reflexion or critic modules -> run maintenance benchmark harness -> replay and diff the trajectory",
        "tags": [
            "code agent",
            "trace replay",
            "swe-bench lite",
            "local first",
            "auditable"
        ],
        "localPath": "raw-github/hwfengcs_dm-code-agent.md"
    },
    {
        "name": "LaSeR",
        "repo": "rucbm/laser",
        "url": "https://github.com/RUCBM/LaSeR",
        "description": "LaSeR is a reinforcement-learning recipe that jointly improves reasoning and self-rewarding behavior by adding an MSE self-reward term to the RLVR objective.",
        "stack": [
            "Python",
            "RLVR",
            "Self-Rewarding Training"
        ],
        "category": "Last-Token Self-Rewarding Reinforcement Learning Recipe",
        "status": "candidate",
        "stars": 36,
        "forks": 2,
        "lastPushed": "2026-06-03T00:00:00Z",
        "language": "Python",
        "license": "MIT",
        "report": "projects/396-laser-last-token-self-rewarding-rl.md",
        "pattern": "optimize RLVR objective -> learn last-token self-reward signal -> reuse auxiliary reward during training and testing -> improve reasoning and reward calibration together",
        "tags": [
            "self reward",
            "rlvr",
            "reasoning optimization",
            "paper code",
            "checkpoint release"
        ],
        "localPath": "raw-github/rucbm_laser.md"
    },
    {
        "name": "GraphMind",
        "repo": "arthurmgraf/graphmind",
        "url": "https://github.com/arthurmgraf/graphmind",
        "description": "GraphMind is an agentic RAG runtime that combines knowledge graphs, dual orchestration engines, and self-evaluating retrieval pipelines for autonomous knowledge work.",
        "stack": [
            "Python",
            "LangGraph",
            "CrewAI",
            "Knowledge Graph RAG"
        ],
        "category": "Knowledge-Graph Agentic RAG Runtime",
        "status": "candidate",
        "stars": 1,
        "forks": 0,
        "lastPushed": "2026-06-03T00:00:00Z",
        "language": "Python",
        "license": "MIT",
        "report": "projects/397-graphmind-knowledge-agent-rag-runtime.md",
        "pattern": "receive query -> choose LangGraph or CrewAI engine -> retrieve over hybrid graph layer -> self-evaluate the answer -> retry when score stays below threshold",
        "tags": [
            "knowledge graph",
            "agentic rag",
            "langgraph",
            "crewai",
            "self evaluation"
        ],
        "localPath": "raw-github/arthurmgraf_graphmind.md"
    },
    {
        "name": "Awesome Agent Memory",
        "repo": "agentmemoryworld/awesome-agent-memory",
        "url": "https://github.com/AgentMemoryWorld/Awesome-Agent-Memory",
        "description": "Awesome Agent Memory is an up-to-date survey index for agent-memory papers, systems, and benchmarks rather than a runnable memory runtime.",
        "stack": [
            "Markdown",
            "Survey",
            "Resource Index"
        ],
        "category": "Agent Memory Resource Survey Index",
        "status": "candidate",
        "stars": 155,
        "forks": 8,
        "lastPushed": "2026-06-04T00:00:00Z",
        "language": "Markdown",
        "license": "Unknown",
        "report": "projects/398-agentmemoryworld-awesome-agent-memory-resource-index.md",
        "pattern": "collect memory papers and systems -> organize them by mechanism and scope -> point readers to benchmark and implementation anchors -> keep the memory landscape navigable as a survey resource",
        "tags": [
            "memory",
            "survey index",
            "resource map",
            "benchmark entrypoint",
            "agent memory"
        ],
        "localPath": "raw-github/agentmemoryworld_awesome-agent-memory.md"
    },
    {
        "name": "Learning SDK",
        "repo": "letta-ai/learning-sdk",
        "url": "https://github.com/letta-ai/learning-sdk",
        "description": "Learning SDK is a drop-in memory and continual-learning substrate for existing LLM agents, exposing a thin wrapper instead of a full custom runtime.",
        "stack": [
            "Python",
            "TypeScript",
            "Letta SDK"
        ],
        "category": "Continual Learning And Long-Term Memory SDK",
        "status": "candidate",
        "stars": 45,
        "forks": 3,
        "lastPushed": "2026-06-04T00:00:00Z",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/399-letta-learning-sdk-continual-memory-sdk.md",
        "pattern": "wrap an existing LLM client -> capture conversation traces -> persist and inject relevant memory -> make the original agent stateful without retraining the base model",
        "tags": [
            "memory runtime",
            "continual learning",
            "stateful agents",
            "sdk",
            "provider-agnostic"
        ],
        "localPath": "raw-github/letta-ai_agentic-learning-sdk.md"
    },
    {
        "name": "Awesome Code as Agent Harness Papers",
        "repo": "yennning/awesome-code-as-agent-harness-papers",
        "url": "https://github.com/YennNing/Awesome-Code-as-Agent-Harness-Papers",
        "description": "Awesome Code as Agent Harness Papers is a harness-first survey index that turns code-centric agent systems into an organized reading and comparison map.",
        "stack": [
            "Markdown",
            "Survey",
            "Harness Taxonomy"
        ],
        "category": "Code-As-Agent-Harness Survey Index",
        "status": "candidate",
        "stars": 331,
        "forks": 24,
        "lastPushed": "2026-06-04T00:00:00Z",
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/400-yennning-code-as-agent-harness-papers.md",
        "pattern": "collect code-centric agent papers -> regroup them by harness interface, mechanism, and scaling pattern -> expose memory, tool, debugging, and multi-agent topology lanes -> provide a navigable harness taxonomy",
        "tags": [
            "harness",
            "survey index",
            "code agents",
            "taxonomy",
            "multi-agent topology"
        ],
        "localPath": "raw-github/yennning_awesome-code-as-agent-harness-papers.md"
    },
    {
        "name": "Geneclaw",
        "repo": "clawland-ai/geneclaw",
        "url": "https://github.com/Clawland-AI/Geneclaw",
        "description": "Geneclaw is a safe-by-default self-evolving agent framework that observes failures, proposes fixes, and only applies changes behind an explicit safety gate.",
        "stack": [
            "Python",
            "Nanobot",
            "Geneclaw Evolution Protocol"
        ],
        "category": "Safe Self-Evolving Agent Framework",
        "status": "candidate",
        "stars": 36,
        "forks": 8,
        "lastPushed": "2026-06-04T00:00:00Z",
        "language": "Python",
        "license": "MIT",
        "report": "projects/401-geneclaw-safe-self-evolving-agent-framework.md",
        "pattern": "observe failures -> diagnose root causes -> propose constrained diffs -> validate through five safety gates -> branch, test, and apply only after approval or configured autopilot",
        "tags": [
            "self-evolving agents",
            "safety gatekeeper",
            "agent evolution",
            "rollback",
            "benchmark hooks"
        ],
        "localPath": "raw-github/clawland-ai_geneclaw.md"
    },
    {
        "name": "ClawBench",
        "repo": "openclaw/clawbench",
        "url": "https://github.com/openclaw/clawbench",
        "description": "ClawBench is a benchmark for agent systems that scores the full stack through execution traces, reliability metrics, and diagnostics rather than only final-task success.",
        "stack": [
            "Python",
            "Trace-Scored Benchmark",
            "Docker"
        ],
        "category": "Trace-Scored Full-Stack Agent Benchmark",
        "status": "candidate",
        "stars": 106,
        "forks": 19,
        "lastPushed": "2026-06-04T00:00:00Z",
        "language": "Python",
        "license": "MIT",
        "report": "projects/402-openclaw-clawbench-full-stack-agent-benchmark.md",
        "pattern": "run container-isolated tasks -> capture full execution traces -> score deterministic completion, trajectory quality, and behavior -> quantify noise and failure regimes -> compare harness/model/config combinations",
        "tags": [
            "benchmark",
            "trace scoring",
            "harness evaluation",
            "reliability",
            "diagnostics"
        ],
        "localPath": "raw-github/openclaw_clawbench.md"
    },
    {
        "name": "Awesome Agent Skills",
        "repo": "voltagent/awesome-agent-skills",
        "url": "https://github.com/voltagent/awesome-agent-skills",
        "description": "voltagent/awesome-agent-skills is a high-signal resource index for reusable agent skills across Claude Code, Codex, Gemini CLI, Cursor, GitHub Copilot, and adjacent coding-agent surfaces.",
        "stack": [
            "Markdown",
            "Official Skill Registry"
        ],
        "category": "Agent Skills Resource Index",
        "status": "candidate",
        "stars": 24200,
        "forks": 2600,
        "lastPushed": "2026-06-04T00:00:00Z",
        "language": "Markdown",
        "license": "MIT",
        "report": "projects/403-voltagent-awesome-agent-skills-resource-index.md",
        "pattern": "collect official and community skill packs -> normalize reader entry by tool and provider -> expose reusable procedures as installable skills -> keep the engineering skill ecosystem searchable and comparable",
        "tags": [
            "skill",
            "resource-index"
        ]
    },
    {
        "name": "swarmclaw",
        "repo": "swarmclawai/swarmclaw",
        "url": "https://github.com/swarmclawai/swarmclaw",
        "description": "swarmclawai/swarmclaw is a self-hosted multi-agent runtime that combines memory, MCP tooling, delegation, schedules, skills, and swarm-oriented execution surfaces.",
        "stack": [
            "TypeScript",
            "Agent Runtime",
            "Memory",
            "MCP",
            "Delegation"
        ],
        "category": "Self-Hosted Agent Runtime",
        "status": "candidate",
        "stars": 544,
        "forks": 106,
        "lastPushed": "2026-06-04T00:00:00Z",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/93-swarmclaw-agent-runtime.md",
        "pattern": "agent runtime -> memory and MCP connectors -> schedules and delegation -> swarm workflows -> self-hosted distribution and release cadence",
        "tags": [
            "harness",
            "framework-runtime"
        ]
    },
    {
        "name": "Swarms",
        "repo": "kyegomez/swarms",
        "url": "https://github.com/kyegomez/swarms",
        "description": "Swarms is a production-oriented multi-agent orchestration framework that packages sequential, concurrent, and hierarchical agent topologies with tools, memory, protocol adapters, and marketplace-style extensions.",
        "stack": [
            "Python",
            "Multi-Agent Orchestration",
            "MCP",
            "x402",
            "Skills Interop"
        ],
        "category": "Production Multi-Agent Orchestration Runtime",
        "status": "candidate",
        "stars": 6800,
        "forks": 935,
        "lastPushed": "2026-05-28T00:00:00Z",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/371-swarms-enterprise-multi-agent-runtime.md",
        "pattern": "define agents and swarm topology -> run sequential/concurrent/hierarchical orchestration -> attach tools, memory, and protocol adapters -> keep workflow behavior inspectable through runtime boundaries and reusable swarm patterns",
        "tags": [
            "multi-agent",
            "swarm",
            "orchestration",
            "mcp",
            "production-runtime"
        ],
        "localPath": "raw-github/kyegomez_swarms.md"
    },
    {
        "name": "Agent Orchestrator",
        "repo": "AgentWrapper/agent-orchestrator",
        "url": "https://github.com/AgentWrapper/agent-orchestrator",
        "description": "Agent Orchestrator is a production coding-agent swarm that runs spec, build, test, review, and merge flows through Git worktrees, skills, memory, and MCP-connected execution.",
        "stack": [
            "TypeScript",
            "Swarm Harness",
            "Worktrees",
            "Skills",
            "Memory"
        ],
        "category": "Production Coding-Agent Swarm Orchestrator",
        "status": "candidate",
        "stars": 7514,
        "forks": 1025,
        "lastPushed": "2026-06-09T00:56:58Z",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/406-composio-agent-orchestrator-coding-swarm.md",
        "pattern": "route coding tasks into specialized agents -> isolate changes in Git worktrees -> reuse skills and memory across execution steps -> coordinate MCP/tool calls and review gates -> merge accepted work back into the main engineering flow",
        "tags": [
            "coding-agent",
            "swarm",
            "harness",
            "worktree",
            "mcp"
        ],
        "localPath": "raw-github/composiohq_agent-orchestrator.md"
    },
    {
        "name": "MedMemoryBench",
        "repo": "AQ-MedAI/MedMemoryBench",
        "url": "https://github.com/AQ-MedAI/MedMemoryBench",
        "description": "MedMemoryBench is a benchmark for agent memory in personalized healthcare, testing whether clinical agents retain, retrieve, and use longitudinal patient context safely and accurately.",
        "stack": [
            "Python",
            "Healthcare Memory Benchmark",
            "Longitudinal Evaluation"
        ],
        "category": "Personalized Healthcare Agent Memory Benchmark",
        "status": "candidate",
        "stars": 60,
        "forks": 1,
        "lastPushed": "2026-05-13T13:26:05Z",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/407-medmemorybench-agent-memory-benchmark.md",
        "pattern": "construct longitudinal healthcare episodes -> require agents to recall and apply patient-specific context -> score temporal memory quality and downstream task success -> expose where memory retrieval helps or harms clinical reasoning",
        "tags": [
            "memory",
            "benchmark",
            "healthcare",
            "longitudinal-context"
        ],
        "localPath": "raw-github/aq-medai_medmemorybench.md"
    },
    {
        "name": "Agent Swarm",
        "repo": "desplega-ai/agent-swarm",
        "url": "https://github.com/desplega-ai/agent-swarm",
        "description": "Agent Swarm is a production-oriented lead-worker runtime that routes work from Slack/GitHub/Email/API into Dockerized agent workers, persists memory and identity, and exposes MCP, workflows, pages, and recurring task patterns as reusable swarm infrastructure.",
        "stack": [
            "TypeScript",
            "Docker",
            "MCP",
            "Lead-Worker Swarm"
        ],
        "category": "Compounding Lead-Worker Agent Runtime",
        "status": "candidate",
        "stars": 529,
        "forks": 58,
        "lastPushed": "2026-06-16T02:27:39Z",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/405-agent-swarm-compounding-lead-worker-runtime.md",
        "pattern": "ingest tasks from external channels -> lead agent plans and delegates -> workers run inside isolated Docker environments -> shared memory and identity accumulate across sessions -> pages, PRs, replies, and scheduled workflows turn learnings into reusable operations",
        "tags": [
            "agent-swarm",
            "lead-worker",
            "docker",
            "mcp",
            "compounding-memory"
        ],
        "localPath": "raw-github/desplega-ai_agent-swarm.md"
    },
    {
        "name": "Agency Swarm",
        "repo": "VRSEN/agency-swarm",
        "url": "https://github.com/VRSEN/agency-swarm",
        "description": "Agency Swarm is a mature Python orchestration framework that layers role-aware communication flows, type-safe tools, thread persistence, and terminal/web demos on top of the OpenAI Agents SDK.",
        "stack": [
            "Python",
            "OpenAI Agents SDK",
            "Agency CLI",
            "State Persistence"
        ],
        "category": "OpenAI Agents SDK Swarm Orchestrator",
        "status": "candidate",
        "stars": 4445,
        "forks": 1058,
        "lastPushed": "2026-06-12T00:13:04Z",
        "language": "Python",
        "license": "MIT",
        "report": "projects/27-agency-swarm.md",
        "pattern": "define agents and directional communication flows -> attach function tools and persistence callbacks -> route work through agency-level orchestration -> reuse terminal/web demos and docs as reproducible multi-agent operating patterns",
        "tags": [
            "agency-swarm",
            "openai-agents-sdk",
            "multi-agent",
            "state-persistence",
            "cli"
        ],
        "localPath": "raw-github/vrsen_agency-swarm.md"
    },
    {
        "name": "XSkill",
        "repo": "XSkill-Agent/XSkill",
        "url": "https://github.com/XSkill-Agent/XSkill",
        "description": "XSkill is a multimodal continual-learning paper implementation that extracts task-level skills and action-level experiences from agent trajectories, stores them in a memory bank, and re-injects them during inference across benchmark suites.",
        "stack": [
            "Python",
            "Multimodal Agent",
            "Memory Bank",
            "Benchmark Eval"
        ],
        "category": "Continual Experience and Skill Learning Paper Code",
        "status": "candidate",
        "stars": 221,
        "forks": 27,
        "lastPushed": "2026-05-13T03:56:12Z",
        "language": "Python",
        "license": "NOASSERTION",
        "report": "projects/404-xskill-continual-experience-skill-learning.md",
        "pattern": "collect multimodal trajectories -> summarize and critique experiences -> consolidate reusable skill documents and experience entries -> retrieve relevant memory for new tasks -> evaluate transfer on benchmark suites",
        "tags": [
            "xskill",
            "continual-learning",
            "memory-bank",
            "skills",
            "benchmark"
        ],
        "localPath": "raw-github/xskill-agent_xskill.md"
    },
    {
        "name": "LightAgent",
        "repo": "wanxingai/LightAgent",
        "url": "https://github.com/wanxingai/LightAgent",
        "description": "LightAgent is a lightweight Python agent framework that combines persistent memory, MCP integration, native skills, LightSwarm collaboration, and newly surfaced LightFlow workflow orchestration into a small-footprint self-learning runtime.",
        "stack": [
            "Python",
            "MCP",
            "mem0",
            "Agent Skills",
            "LightFlow"
        ],
        "category": "Memory/MCP Skill Agent Framework",
        "status": "candidate",
        "stars": 1132,
        "forks": 143,
        "lastPushed": "2026-06-05T15:00:09Z",
        "language": "Python",
        "license": "Apache-2.0",
        "report": "projects/139-lightagent-memory-mcp-skills.md",
        "pattern": "compose lightweight agents with tools, MCP, and memory -> add native skills and optional trace observability -> delegate via LightSwarm -> chain deterministic multi-step flows with LightFlow -> keep self-learning behavior grounded in runtime memory and reusable tool plans",
        "tags": [
            "lightagent",
            "memory",
            "mcp",
            "skills",
            "workflow"
        ],
        "localPath": "raw-github/wanxingai_lightagent.md"
    },
    {
        "name": "OpenAI Agents SDK (Python)",
        "repo": "openai/openai-agents-python",
        "url": "https://github.com/openai/openai-agents-python",
        "description": "OpenAI Agents SDK (Python) is the official Python baseline for multi-agent orchestration with handoffs, tool calls, guardrails, tracing, and session state.",
        "stack": [
            "Python",
            "OpenAI Agents SDK",
            "Tracing",
            "Guardrails",
            "Handoffs"
        ],
        "category": "Official OpenAI Agents SDK Runtime Baseline",
        "status": "candidate",
        "stars": 27111,
        "forks": 4185,
        "lastPushed": "2026-06-11T04:10:37Z",
        "language": "Python",
        "license": "MIT",
        "report": "projects/408-openai-agents-python-official-sdk.md",
        "pattern": "define agents plus tools and handoffs -> trace runs and guardrails -> keep session state and memory-like context inside SDK workflows -> reuse the official runtime as the canonical orchestration baseline for third-party swarm and harness claims",
        "tags": [
            "openai-agents-sdk",
            "official-sdk",
            "python",
            "orchestration",
            "guardrails"
        ],
        "localPath": "raw-github/openai_openai-agents-python.md"
    },
    {
        "name": "OpenAI Agents SDK (JS)",
        "repo": "openai/openai-agents-js",
        "url": "https://github.com/openai/openai-agents-js",
        "description": "OpenAI Agents SDK (JS) is the official TypeScript baseline for building agent orchestration loops with tools, handoffs, guardrails, realtime hooks, and tracing.",
        "stack": [
            "TypeScript",
            "OpenAI Agents SDK",
            "Tracing",
            "Guardrails",
            "Handoffs"
        ],
        "category": "Official OpenAI Agents SDK TypeScript Baseline",
        "status": "candidate",
        "stars": 3203,
        "forks": 809,
        "lastPushed": "2026-06-12T08:33:10Z",
        "language": "TypeScript",
        "license": "MIT",
        "report": "projects/409-openai-agents-js-official-sdk.md",
        "pattern": "compose agents in TypeScript -> attach tools, handoffs, and realtime transport -> trace execution and guardrails -> use the official JS runtime as the canonical baseline for browser, frontend, and full-stack swarm orchestration claims",
        "tags": [
            "openai-agents-sdk",
            "official-sdk",
            "typescript",
            "orchestration",
            "realtime"
        ],
        "localPath": "raw-github/openai_openai-agents-js.md"
    },
    {
        "name": "Agentic Harness Engineering",
        "repo": "china-qijizhifeng/agentic-Harness-engineering",
        "url": "https://github.com/china-qijizhifeng/agentic-Harness-engineering",
        "description": "Harness engineering is the layer where prompts, tools, middleware, memory, subagents, and evaluators become editable agent infrastructure rather than fixed wrappers around a base model.",
        "stack": [
            "Python",
            "Harness Evolution",
            "Coding-Agent Workflow"
        ],
        "category": "Harness evolution engineering",
        "status": "candidate",
        "stars": 575,
        "forks": 64,
        "lastPushed": "2026-06-14T16:03:21Z",
        "language": "Python",
        "license": "MIT",
        "report": "projects/43-agentic-harness-engineering.md",
        "pattern": "editable prompts/tools/middleware/skills/memory/subagents -> evaluator pressure -> harness mutation -> regression verification",
        "tags": [
            "harness",
            "skills",
            "memory",
            "evaluation",
            "coding-agent"
        ],
        "localPath": "raw-github/china-qijizhifeng_agentic-harness-engineering.md"
    },
    {
        "name": "Hermes Agent",
        "repo": "NousResearch/hermes-agent",
        "url": "https://github.com/NousResearch/hermes-agent",
        "description": "Hermes Agent is a self-improving personal-agent runtime that combines memory, skill creation, session search, user modeling, messaging gateways, and scheduled automations in one user-facing system.",
        "stack": [
            "Python",
            "TypeScript",
            "Memory",
            "Skills",
            "Messaging-Agent Runtime"
        ],
        "category": "Self-improving personal agent runtime",
        "status": "candidate",
        "stars": 194687,
        "forks": 34157,
        "lastPushed": "2026-06-16T06:10:54Z",
        "language": "Python",
        "license": "MIT",
        "report": "projects/44-hermes-agent.md",
        "pattern": "persistent knowledge -> skill creation/improvement -> session search -> user modeling -> messaging and scheduled automation runtime",
        "tags": [
            "personal-agent",
            "memory",
            "skills",
            "messaging",
            "automation"
        ],
        "localPath": "raw-github/nousresearch_hermes-agent.md"
    },
    {
        "name": "GenericAgent",
        "repo": "lsdefine/GenericAgent",
        "url": "https://github.com/lsdefine/GenericAgent",
        "description": "GenericAgent is a lightweight self-evolving agent framework that grows a skill tree from a small seed loop instead of preloading a large fixed procedure library.",
        "stack": [
            "Python",
            "Self-Evolving Agent",
            "Skill Tree Runtime"
        ],
        "category": "Token-efficient self-evolving agent",
        "status": "candidate",
        "stars": 12889,
        "forks": 1490,
        "lastPushed": "2026-06-15T13:35:30Z",
        "language": "Python",
        "license": "MIT",
        "report": "projects/47-genericagent.md",
        "pattern": "context density -> skill-tree growth -> memory/reflection compression",
        "tags": [
            "self-evolving",
            "skill-tree",
            "memory-system",
            "autonomous-agent",
            "token-efficiency"
        ],
        "localPath": "raw-github/lsdefine_genericagent.md"
    },
    {
        "name": "OpenClaw",
        "repo": "openclaw/openclaw",
        "url": "https://github.com/openclaw/openclaw",
        "description": "OpenClaw is a local-first personal agent runtime whose product surface includes channels, sessions, tools, skills, and companion apps rather than only a benchmark-facing demo loop.",
        "stack": [
            "TypeScript",
            "Local-First Personal Agent",
            "Multi-Channel Runtime"
        ],
        "category": "Personal agent product runtime",
        "status": "candidate",
        "stars": 378926,
        "forks": 79283,
        "lastPushed": "2026-06-16T06:31:55Z",
        "language": "TypeScript",
        "license": "NOASSERTION",
        "report": "projects/48-openclaw.md",
        "pattern": "local-first assistant runtime -> multi-channel gateway -> sessions/tools/skills -> companion apps and durable operating surface",
        "tags": [
            "personal-agent",
            "local-first",
            "channels",
            "skills",
            "runtime"
        ],
        "localPath": "raw-github/openclaw_openclaw.md"
    },
    {
        "name": "Superpowers",
        "repo": "obra/superpowers",
        "url": "https://github.com/obra/superpowers",
        "description": "Superpowers packages reusable development skills and operating procedures for coding agents, turning engineering workflow habits into cross-agent runtime policy.",
        "stack": [
            "Shell",
            "JavaScript",
            "Cross-Agent Skills Methodology"
        ],
        "category": "Agentic skills methodology",
        "status": "candidate",
        "stars": 229084,
        "forks": 20380,
        "lastPushed": "2026-06-16T05:34:02Z",
        "language": "Shell",
        "license": "MIT",
        "report": "projects/49-superpowers.md",
        "pattern": "reusable skills -> disciplined workflow policy -> worktrees/plans/TDD/review -> cross-agent execution",
        "tags": [
            "skills",
            "coding-agent",
            "workflow",
            "methodology",
            "worktrees"
        ],
        "localPath": "raw-github/obra_superpowers.md"
    },
    {
        "name": "agentmemory",
        "repo": "rohitg00/agentmemory",
        "url": "https://github.com/rohitg00/agentmemory",
        "description": "agentmemory is a cross-harness persistent memory layer for coding agents and MCP clients, with wiki-style knowledge capture, retrieval, and continuity signals.",
        "stack": [
            "TypeScript",
            "MCP",
            "Coding-Agent Memory",
            "Wiki Index"
        ],
        "category": "Agent persistent memory layer",
        "status": "candidate",
        "stars": 23006,
        "forks": 1899,
        "lastPushed": "2026-06-15T06:20:23Z",
        "language": "TypeScript",
        "license": "Apache-2.0",
        "report": "projects/50-agentmemory.md",
        "pattern": "persistent memory -> wiki-style knowledge capture -> graph/hybrid retrieval -> cross-harness continuity",
        "tags": [
            "memory",
            "mcp",
            "coding-agent",
            "knowledge-graph",
            "continuity"
        ],
        "localPath": "raw-github/rohitg00_agentmemory.md"
    }
];

export const projectGroups = [
  {
    "title": "进化式代码 / AlphaEvolve 类",
    "repos": [
      "algorithmicsuperintelligence/openevolve",
      "inter-co/science-codeevolve",
      "JARVIS-Xs/SE-Agent",
      "zhang677/accelopt"
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
      "clawland-ai/geneclaw"
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
      "OPPO-Mente-Lab/LLM-Self-Judge",
      "rucbm/laser"
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
      "langchain-ai/langgraph",
      "arthurmgraf/graphmind"
    ]
  },
  {
    "title": "AI 软件工程",
    "repos": [
      "Significant-Gravitas/AutoGPT",
      "princeton-nlp/SWE-agent",
      "All-Hands-AI/OpenHands",
      "stitionai/devika",
      "OpenDevin/OpenDevin",
      "sola-st/repairagent",
      "hwfengcs/dm-code-agent"
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
      "EverMind-AI/EverOS"
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
      "ai4co/awesome-fm4co",
      "paradigmxyz/evmbench"
    ]
  },
  {
    "title": "遗传编程",
    "repos": [
      "pureples/pureples"
    ]
  },
  {
    "title": "多 Agent 协作平台 (Round 4)",
    "repos": [
      "ag2ai/ag2",
      "OpenBMB/ChatDev",
      "xlang-ai/OpenAgents",
      "TransformerOptimus/SuperAGI",
      "phidatahq/phidata",
      "future-agi/future-agi"
    ]
  },
  {
    "title": "LLM 应用开发平台",
    "repos": [
      "langgenius/dify",
      "langflow-ai/langflow",
      "FlowiseAI/Flowise",
      "dataelement/bisheng",
      "n8n-io/n8n"
    ]
  },
  {
    "title": "Agent 评测基准",
    "repos": [
      "SWE-bench/SWE-bench",
      "xlang-ai/OSWorld",
      "web-arena-x/webarena",
      "InternLM/WildClawBench",
      "Agenta-AI/agenta",
      "shareAI-lab/kbench",
      "paradigmxyz/evmbench",
      "plaited/agent-eval-harness",
      "najeed/ai-agent-eval-harness",
      "Arc-Computer/CL-Bench",
      "openclaw/clawbench",
      "benchflow-ai/skillsbench"
    ]
  },
  {
    "title": "LLM 基础设施",
    "repos": [
      "BerriAI/litellm",
      "ollama/ollama",
      "google-gemini/gemini-cli",
      "open-webui/open-webui",
      "e2b-dev/e2b"
    ]
  },
  {
    "title": "Agent Skills / Memory / Harness",
    "repos": [
      "microsoft/waza",
      "mgechev/skillgrade",
      "mgechev/skills-best-practices",
      "webmaxru/Agent-Skills",
      "Orchestra-Research/AI-research-SKILLs",
      "iliaal/ai-skills",
      "wazionapps/nexo",
      "razroo/state-trace",
      "google-gemini/gemini-cli",
      "open-gitagent/gitagent",
      "NirDiamant/Agent_Memory_Techniques",
      "shareAI-lab/kbench",
      "paradigmxyz/evmbench",
      "paradigmxyz/centaur",
      "cuga-project/cuga-agent",
      "AutoX-AI-Labs/AutoR",
      "Chorus-AIDLC/Chorus",
      "kweaver-ai/kweaver-core",
      "suyoumo/ClawProBench",
      "sd0xdev/sd0x-dev-flow",
      "inngest/utah",
      "SuperagenticAI/metaharness",
      "supermemoryai/supermemory",
      "flagos-ai/skills",
      "mem9-ai/mem9",
      "CortexReach/memory-lancedb-pro",
      "garrytan/gbrain",
      "sunnja69/akephalos",
      "InternScience/InternAgent",
      "OpenBMB/ClawXMemory",
      "UnicomAI/hexagent",
      "evalops/agent-harness",
      "harness/harness-evals",
      "browser-use/browser-harness",
      "junminhong/awesome-agent-skills",
      "mindfold-ai/Trellis",
      "Picrew/awesome-agent-harness",
      "AutoJunjie/awesome-agent-harness",
      "shareAI-lab/learn-claude-code",
      "murataslan1/ai-agent-benchmark",
      "AQ-MedAI/MedMemoryBench",
      "holaboss-ai/holaOS",
      "langchain-ai/deepagents",
      "coleam00/Archon",
      "RyanAlberts/best-of-Agent-Harnesses",
      "microsoft/SkillOpt",
      "Tencent/TencentDB-Agent-Memory",
      "QuantaAlpha/GitTaskBench",
      "openclaw/clawhub",
      "VoltAgent/awesome-openclaw-skills",
      "ZeroLu/awesome-openclaw",
      "QuantClaw/QuantClaw",
      "InternScience/Awesome-Scientific-Skills",
      "TIGER-AI-Lab/ClawBench",
      "redis/agent-memory-server",
      "langchain-ai/memory-agent",
      "iflytek/skillhub",
      "memodb-io/Acontext",
      "nemori-ai/nemori",
      "Alienfader/continuity-benchmarks",
      "sachinsharma9780/memweave",
      "qpiai/Proced_mem_bench",
      "Modelcode-ai/mcode-benchmark",
      "sourcegraph/CodeScaleBench",
      "mlcommons/modelbench",
      "BerriAI/self-improving-agent",
      "LLMSecurity/awesome-agent-skills-security",
      "ComposioHQ/awesome-agent-clis",
      "Olshansk/agent-skills",
      "axiomhq/agent-memory",
      "FreedomIntelligence/Tiermem",
      "itgoyo/awesome-agent-skills",
      "back1ply/agent-skill-loader",
      "Da1yuqin/SEAD",
      "ai-agents-2030/darwin-mobile-agent",
      "YuanchenBei/Mem-Gallery",
      "InfiAgent/InfiAgent",
      "openclaw/clownfish",
      "openclaw/crabpot",
      "openclaw/gitcrawl",
      "openclaw/crawlkit",
      "openclaw/discrawl",
      "MemTensor/MemOS-Cloud-OpenClaw-Plugin",
      "openai/swarm",
      "microsoft/agent-lightning",
      "seb1n/awesome-ai-agent-skills",
      "cxxz/awesome-agent-memory",
      "openclaw/acpx",
      "openclaw/crabbox",
      "openclaw/openclaw-windows-node",
      "first-fluke/oh-my-agent",
      "agentscope-ai/ReMe",
      "openmemoryspec/oms",
      "memtomem/memtomem",
      "skillmatic-ai/awesome-agent-skills",
      "sevenschulte/agentic-harness",
      "dotnet/skills",
      "datalayer/agent-skills",
      "block/agent-skills",
      "Corbell-AI/evalmonkey",
      "nomic-ai/aec-bench",
      "google/ax",
      "aiming-lab/AutoHarness",
      "OWASP/www-project-agent-memory-guard",
      "addyosmani/agent-skills",
      "zocomputer/skills",
      "QF-Bench/QuantitativeFinance-Bench",
      "zikuicai/aegisllm",
      "EvoMap/evolver",
      "NousResearch/hermes-agent-self-evolution",
      "knowall-ai/mcp-neo4j-agent-memory",
      "LearnPrompt/cc-harness-skills",
      "aiming-lab/ClawArena",
      "kodustech/awesome-agent-skills",
      "Martian-Engineering/lossless-claw",
      "thinkwee/AgentsMeetRL",
      "syntax-syndicate/OpenHarness-agent-harness",
      "ArcadeAI/openclaw-arcade-plugin",
      "humanitylabs-org/obsidianclaw",
      "momo-personal-assistant/openclaw-plugin",
      "NVIDIA/skills",
      "supabase/agent-skills",
      "MemTensor/skills-vote",
      "aayoawoyemi/ori-mnemos",
      "soimy/openclaw-channel-dingtalk",
      "pwrdrvr/openclaw-codex-app-server",
      "henrikrexed/openclaw-observability-plugin",
      "longmans/self-evolve",
      "MCKRUZ/openclaw-langfuse",
      "hyperspell/hyperspell-openclaw",
      "composio-community/awesome-openclaw-plugins",
      "mvanhorn/last30days-skill",
      "EESIZ/clawdreamer",
      "ThisIsJeron/awesome-openclaw-plugins",
      "BlockRunAI/awesome-OpenClaw-Money-Maker",
      "SamurAIGPT/awesome-openclaw",
      "LHL3341/awesome-claws",
      "pegasi-ai/reins",
      "cloudllm-ai/mentisdb",
      "rohitg00/awesome-openclaw",
      "yoloshii/ClawMem",
      "clawsouls/soulclaw",
      "Team-Commonly/commonly",
      "matevip/mateclaw",
      "christinminor459/OnionClaw",
      "nowledge-co/community",
      "0xNyk/lacp",
      "manthanguptaa/water",
      "SponsioLabs/Sponsio",
      "zorazrw/agent-workflow-memory",
      "webzler/agentMemory",
      "agiresearch/A-mem",
      "elizaOS/agentmemory",
      "apify/agent-skills",
      "openswarm-ai/openswarm",
      "agentralabs/agentic-memory",
      "lhl/agentic-memory",
      "langchain-ai/agentevals",
      "agentevals-dev/agentevals",
      "ALucek/agentic-memory",
      "VectorSpaceLab/general-agentic-memory",
      "Dataojitori/nocturne_memory",
      "plaited/agent-eval-harness",
      "najeed/ai-agent-eval-harness",
      "Arc-Computer/CL-Bench",
      "Versatly/clawvault",
      "opensquilla/opensquilla",
      "GCWing/BitFun",
      "oceanbase/powermem",
      "mnemon-dev/mnemon",
      "alibaizhanov/mengram",
      "im4codes/imcodes",
      "weaviate/query-agent-benchmarking",
      "agentmemoryworld/awesome-agent-memory",
      "letta-ai/learning-sdk",
      "yennning/awesome-code-as-agent-harness-papers",
      "voltagent/awesome-agent-skills",
      "vectorize-io/agent-memory-benchmark",
      "XSkill-Agent/XSkill"
    ]
  },
  {
    "title": "Production Agent Runtimes With Evolution Substrate",
    "repos": [
      "agent0ai/agent-zero",
      "AgentWrapper/agent-orchestrator",
      "elizaOS/eliza",
      "TransformerOptimus/SuperAGI",
      "paradigmxyz/centaur",
      "swarmclawai/swarmclaw",
      "kyegomez/swarms",
      "VRSEN/agency-swarm",
      "desplega-ai/agent-swarm"
    ]
  },
  {
    "title": "Self-Referential Coding Agents",
    "repos": [
      "MaximeRobeyns/self_improving_coding_agent",
      "JARVIS-Xs/SE-Agent",
      "algorithmicsuperintelligence/openevolve",
      "facebookresearch/HyperAgents"
    ]
  },
  {
    "title": "In-Situ Tool Evolution And Agent Control",
    "repos": [
      "YunjueTech/Yunjue-Agent",
      "RangeKing/self-evolving-agent",
      "gofenix/nex-agent",
      "swapedoc/hermes2anti",
      "vilmire/adhdev"
    ]
  },
  {
    "title": "Agent 框架 (Round 4)",
    "repos": [
      "reworkd/AgentGPT",
      "yoheinakajima/babyagi",
      "cheshire-cat-ai/core",
      "huggingface/smolagents",
      "Chainlit/chainlit",
      "smol-ai/developer"
    ]
  },
  {
    "title": "Agent 研究综述 (Round 4)",
    "repos": [
      "XMUDeepLIT/Awesome-Self-Evolving-Agents",
      "luo-junyu/Awesome-Agent-Papers",
      "Zijian-Ni/awesome-ai-agents-2026"
    ]
  }
];
