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
    name: "openevolve",
    repo: "algorithmicsuperintelligence/openevolve",
    url: "https://github.com/algorithmicsuperintelligence/openevolve",
    stars: 6358,
    forks: "1018",
    language: "Python",
    license: "Apache-2.0",
    report: "projects/algorithmicsuperintelligence__openevolve.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "开源 AlphaEvolve 风格的进化式编码智能体，使用 LLM 生成程序变体、评估打分并选择高分候选持续迭代。",
    stack: [
      "Python",
      "OpenAI 兼容 API",
      "PyTorch",
      "pytest"
    ],
    category: "进化式代码优化",
    lastPushed: "2026-03-18T12:25:39Z",
    localPath: "repos/algorithmicsuperintelligence__openevolve",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器"
    ]
  },
  {
    name: "agents",
    repo: "aiwaves-cn/agents",
    url: "https://github.com/aiwaves-cn/agents",
    stars: 5928,
    forks: "482",
    language: "Python",
    license: "Apache-2.0",
    report: "projects/aiwaves_cn__agents.md",
    pattern: "进化/搜索循环 → 评估器/打分器 → 智能体编排",
    description: "数据中心化的自进化语言智能体框架，强调用数据、环境反馈和智能体编排让 Agent 在任务中持续改进。",
    stack: [
      "Python",
      "OpenAI 兼容 API",
      "PyTorch",
      "Transformers",
      "LangChain"
    ],
    category: "数据驱动 Agent 进化",
    lastPushed: "2024-09-26T03:12:53Z",
    localPath: "repos/aiwaves_cn__agents",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器",
      "智能体编排"
    ]
  },
  {
    name: "reflexion",
    repo: "noahshinn/reflexion",
    url: "https://github.com/noahshinn/reflexion",
    stars: 3158,
    forks: "306",
    language: "Python",
    license: "MIT",
    report: "projects/noahshinn__reflexion.md",
    pattern: "进化/搜索循环 → 反思记忆 → 反馈-精炼 → 评估器/打分器 → 训练/数据循环",
    description: "Reflexion 经典实现，使用语言反思作为“ verbal reinforcement ”，把失败经验写入记忆以改进后续行为。",
    stack: [
      "Python",
      "OpenAI 兼容 API",
      "PyTorch",
      "Transformers",
      "LangChain"
    ],
    category: "反思记忆",
    lastPushed: "2025-01-14T07:54:02Z",
    localPath: "repos/noahshinn__reflexion",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "反思记忆",
      "反馈-精炼",
      "评估器/打分器",
      "训练/数据循环"
    ]
  },
  {
    name: "AgentEvolver",
    repo: "modelscope/AgentEvolver",
    url: "https://github.com/modelscope/AgentEvolver",
    stars: 1441,
    forks: "167",
    language: "Python",
    license: "Apache-2.0",
    report: "projects/modelscope__agentevolver.md",
    pattern: "进化/搜索循环 → 评估器/打分器 → 智能体编排 → 训练/数据循环",
    description: "面向高效自进化智能体系统的研究实现，核心关注轨迹、经验和评估反馈驱动的 Agent 能力提升。",
    stack: [
      "Python",
      "FastAPI"
    ],
    category: "Agent 进化框架",
    lastPushed: "2026-04-01T08:47:19Z",
    localPath: "repos/modelscope__agentevolver",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器",
      "智能体编排",
      "训练/数据循环"
    ]
  },
  {
    name: "self-refine",
    repo: "madaan/self-refine",
    url: "https://github.com/madaan/self-refine",
    stars: 805,
    forks: "70",
    language: "Python",
    license: "Apache-2.0",
    report: "projects/madaan__self_refine.md",
    pattern: "反馈-精炼",
    description: "Self-Refine 经典实现，用同一个 LLM 生成初稿、生成反馈、再根据反馈迭代精炼，无需训练或强化学习。",
    stack: [
      "Python"
    ],
    category: "反馈精炼",
    lastPushed: "2024-10-04T21:06:28Z",
    localPath: "repos/madaan__self_refine",
    status: "verified",
    tags: [
      "反馈-精炼"
    ]
  },
  {
    name: "SE-Agent",
    repo: "JARVIS-Xs/SE-Agent",
    url: "https://github.com/JARVIS-Xs/SE-Agent",
    stars: 274,
    forks: "29",
    language: "Python",
    license: "MIT",
    report: "projects/jarvis_xs__se_agent.md",
    pattern: "进化/搜索循环 → 评估器/打分器 → 智能体编排",
    description: "面向代码智能体的自进化框架，通过 Revision、Recombination、Refinement 在多条推理轨迹间交换信息，扩大搜索空间。",
    stack: [
      "Python"
    ],
    category: "代码智能体自进化",
    lastPushed: "2025-09-23T01:32:14Z",
    localPath: "repos/jarvis_xs__se_agent",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器",
      "智能体编排"
    ]
  },
  {
    name: "science-codeevolve",
    repo: "inter-co/science-codeevolve",
    url: "https://github.com/inter-co/science-codeevolve",
    stars: 97,
    forks: "14",
    language: "Python",
    license: "Apache-2.0",
    report: "projects/inter_co__science_codeevolve.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "面向科学与算法发现的 CodeEvolve 实现，将 LLM 与遗传算法、岛屿模型、交叉/变异等机制结合。",
    stack: [
      "Python",
      "OpenAI 兼容 API",
      "PyTorch",
      "pytest"
    ],
    category: "科学代码进化",
    lastPushed: "2026-04-08T14:38:23Z",
    localPath: "repos/inter_co__science_codeevolve",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器"
    ]
  },
  {
    name: "SCOPE",
    repo: "JarvisPei/SCOPE",
    url: "https://github.com/JarvisPei/SCOPE",
    stars: 77,
    forks: "6",
    language: "Python",
    license: "MIT",
    report: "projects/jarvispei__scope.md",
    pattern: "进化/搜索循环",
    description: "Self-evolving Context Optimization via Prompt Evolution，通过提示词/上下文演化优化 LLM 的任务表现。",
    stack: [
      "Python",
      "OpenAI 兼容 API",
      "Anthropic/Claude",
      "pytest"
    ],
    category: "上下文/Prompt 进化",
    lastPushed: "2026-03-26T03:01:04Z",
    localPath: "repos/jarvispei__scope",
    status: "verified",
    tags: [
      "进化/搜索循环"
    ]
  },
  {
    name: "LLM-Self-Judge",
    repo: "OPPO-Mente-Lab/LLM-Self-Judge",
    url: "https://github.com/OPPO-Mente-Lab/LLM-Self-Judge",
    stars: 43,
    forks: "1",
    language: "Python",
    license: "Apache-2.0",
    report: "projects/oppo_mente_lab__llm_self_judge.md",
    pattern: "进化/搜索循环 → 评估器/打分器 → 智能体编排 → 训练/数据循环",
    description: "围绕多模态推理中模型自评判和无监督自进化的官方实现，关注 judge 信号如何驱动模型/数据改进。",
    stack: [
      "Python",
      "PyTorch",
      "Transformers",
      "vLLM",
      "FastAPI",
      "pytest"
    ],
    category: "自评判训练",
    lastPushed: "2026-03-24T03:51:30Z",
    localPath: "repos/oppo_mente_lab__llm_self_judge",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器",
      "智能体编排",
      "训练/数据循环"
    ]
  },
  {
    name: "DARWIN",
    repo: "ZJU-LLM-Safety/DARWIN",
    url: "https://github.com/ZJU-LLM-Safety/DARWIN",
    stars: 41,
    forks: "4",
    language: "Python",
    license: "NOASSERTION",
    report: "projects/zju_llm_safety__darwin.md",
    pattern: "进化/搜索循环 → 反思记忆",
    description: "自进化 LLM 越狱/安全研究框架，维护策略池并用检索、过滤、马尔可夫选择、反思和遗传演化扩展攻击策略。",
    stack: [
      "Python",
      "OpenAI 兼容 API",
      "PyTorch",
      "Transformers"
    ],
    category: "安全策略进化",
    lastPushed: "2026-05-07T03:26:42Z",
    localPath: "repos/zju_llm_safety__darwin",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "反思记忆"
    ]
  },
  {
    name: "OPRO",
    repo: "google-deepmind/opro",
    url: "https://github.com/google-deepmind/opro",
    stars: 2500,
    forks: "200",
    language: "Python",
    license: "Apache-2.0",
    report: "projects/01-opro-llm-as-optimizer.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "Google DeepMind 的 OPRO（Optimization by PROmpting），用 LLM 作为优化器，通过进化式 Prompt 迭代搜索最优解。",
    stack: [
      "Python",
      "Google PaLM/Gemini API"
    ],
    category: "LLM 作为优化器",
    lastPushed: "2024-01-01T00:00:00Z",
    localPath: "repos/google_deepmind__opro",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器",
      "LLM-as-Optimizer"
    ]
  },
  {
    name: "OpenELM",
    repo: "carperai/openelm",
    url: "https://github.com/carperai/openelm",
    stars: 1800,
    forks: "150",
    language: "Python",
    license: "MIT",
    report: "projects/02-openelm-evolution-large-models.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "CarperAI 的开源进化大模型框架，使用 MAP-Elites 质量多样性算法进化 LLM Prompt 和代码。",
    stack: [
      "Python",
      "OpenAI API",
      "PyTorch"
    ],
    category: "进化式 Prompt 优化",
    lastPushed: "2024-01-01T00:00:00Z",
    localPath: "repos/carperai__openelm",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "MAP-Elites",
      "质量多样性"
    ]
  },
  {
    name: "ADAS",
    repo: "shengranhu/adas",
    url: "https://github.com/ShengranHu/ADAS",
    stars: 1200,
    forks: "100",
    language: "Python",
    license: "MIT",
    report: "projects/03-adas-automated-design-agentic-systems.md",
    pattern: "进化/搜索循环 → 智能体编排 → 评估器/打分器",
    description: "自动设计智能体系统（ADAS），使用 Meta Agent Search 在代码层面搜索最优 Agent 架构。",
    stack: [
      "Python",
      "Anthropic Claude API"
    ],
    category: "Agent 架构自动搜索",
    lastPushed: "2024-01-01T00:00:00Z",
    localPath: "repos/shengranhu__adas",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "Meta Agent Search",
      "智能体编排"
    ]
  },
  {
    name: "FunSearch",
    repo: "google-deepmind/funsearch",
    url: "https://github.com/google-deepmind/funsearch",
    stars: 1500,
    forks: "130",
    language: "Python",
    license: "Apache-2.0",
    report: "projects/04-funsearch-mathematical-discoveries.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "Google DeepMind 的 FunSearch，用 LLM + 岛屿模型进化搜索发现数学新知识，首个在数学开放问题上超越人类已知的 LLM 系统。",
    stack: [
      "Python",
      "Google PaLM 2 API"
    ],
    category: "进化式数学发现",
    lastPushed: "2024-01-01T00:00:00Z",
    localPath: "repos/google_deepmind__funsearch",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "岛屿模型",
      "数学发现"
    ]
  },
  {
    name: "AutoML-Agent",
    repo: "DeepAuto-AI/automl-agent",
    url: "https://github.com/DeepAuto-AI/automl-agent",
    stars: 500,
    forks: "50",
    language: "Python",
    license: "CC-BY-NC-4.0",
    report: "projects/05-automl-agent-multi-agent.md",
    pattern: "智能体编排 → 进化/搜索循环 → 评估器/打分器",
    description: "ICML 2025 论文实现，分层管理式 5 Agent 的 AutoML 框架，含 7 状态 FSM + Evol-Instruct 进化 + 代码自动修复。",
    stack: [
      "Python",
      "vLLM",
      "Mixtral-8x7B",
      "LangChain",
      "AutoGluon"
    ],
    category: "多 Agent AutoML",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/deepauto_ai__automl_agent",
    status: "verified",
    tags: [
      "智能体编排",
      "Evol-Instruct",
      "AutoML"
    ]
  },
  {
    name: "CoML",
    repo: "microsoft/CoML",
    url: "https://github.com/microsoft/CoML",
    stars: 300,
    forks: "40",
    language: "Python",
    license: "MIT",
    report: "projects/06-coml-mlcopilot.md",
    pattern: "反馈-精炼 → 评估器/打分器",
    description: "微软研究院的交互式 ML 编程助手，通过知识库驱动的配置推荐和 Jupyter Magic 实现经验积累与迁移。",
    stack: [
      "Python",
      "OpenAI GPT-3.5",
      "Jupyter",
      "TypeScript"
    ],
    category: "ML 知识库驱动",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/microsoft__coml",
    status: "verified",
    tags: [
      "反馈-精炼",
      "知识库",
      "配置迁移"
    ]
  },
  {
    name: "MetaGPT",
    repo: "FoundationAgents/MetaGPT",
    url: "https://github.com/FoundationAgents/MetaGPT",
    stars: 50000,
    forks: "6000",
    language: "Python",
    license: "MIT",
    report: "projects/07-metagpt-multi-agent-framework.md",
    pattern: "智能体编排 → 反馈-精炼",
    description: "最成熟的多智能体协作框架，Code = SOP(Team) 理念，含 SELA（MCTS+LLM）和 AFlow（ICLR 2025 Oral）。",
    stack: [
      "Python",
      "OpenAI/Azure/Ollama API"
    ],
    category: "多 Agent 协作框架",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/foundation_agents__metagpt",
    status: "verified",
    tags: [
      "智能体编排",
      "SOP(Team)",
      "SELA",
      "AFlow"
    ]
  },
  {
    name: "AutoGPT",
    repo: "Significant-Gravitas/AutoGPT",
    url: "https://github.com/Significant-Gravitas/AutoGPT",
    stars: 175000,
    forks: "45000",
    language: "Python",
    license: "MIT",
    report: "projects/08-autogpt-autonomous-agent.md",
    pattern: "智能体编排",
    description: "GitHub 历史最高星标之一，定义了自主 Agent 的 TAO 循环（Thought-Action-Observation），已演进为完整 Agent 平台。",
    stack: [
      "Python",
      "Docker",
      "React",
      "TypeScript",
      "FastAPI"
    ],
    category: "自主 Agent 平台",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/significant_gravitas__autogpt",
    status: "verified",
    tags: [
      "智能体编排",
      "TAO循环",
      "Agent平台"
    ]
  },
  {
    name: "CrewAI",
    repo: "crewAIInc/crewAI",
    url: "https://github.com/crewAIInc/crewAI",
    stars: 30000,
    forks: "4000",
    language: "Python",
    license: "MIT",
    report: "projects/09-crewai-multi-agent-framework.md",
    pattern: "智能体编排",
    description: "轻量高性能多 Agent 自动化框架，Crew + Flow 双架构，零依赖独立实现，100k+ 认证开发者。",
    stack: [
      "Python"
    ],
    category: "多 Agent 协作框架",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/crewai_inc__crewai",
    status: "verified",
    tags: [
      "智能体编排",
      "Crew+Flow",
      "零依赖"
    ]
  },
  {
    name: "DSPy",
    repo: "stanfordnlp/dspy",
    url: "https://github.com/stanfordnlp/dspy",
    stars: 25000,
    forks: "2000",
    language: "Python",
    license: "MIT",
    report: "projects/10-dspy-declarative-llm-programming.md",
    pattern: "反馈-精炼 → 进化/搜索循环 → 评估器/打分器",
    description: "斯坦福 NLP 声明式 LLM 编程框架，将 Prompt 视为可优化参数，含 SIMBA 自我反思优化器和丰富 Teleprompter 家族。",
    stack: [
      "Python",
      "Pydantic",
      "LiteLLM",
      "Optuna"
    ],
    category: "声明式 Prompt 优化",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/stanfordnlp__dspy",
    status: "verified",
    tags: [
      "反馈-精炼",
      "Prompt优化",
      "SIMBA",
      "Teleprompter"
    ]
  },
  {
    name: "AutoGen",
    repo: "microsoft/autogen",
    url: "https://github.com/microsoft/autogen",
    stars: 50000,
    forks: "6000",
    language: "Python",
    license: "MIT",
    report: "projects/11-autogen-multi-agent-conversation.md",
    pattern: "智能体编排",
    description: "微软多智能体对话框架，基于 Actor 模型的消息传递运行时，支持 Round-Robin/Group Chat/Society of Mind 多种编排。",
    stack: [
      "Python",
      "gRPC",
      "FastAPI",
      "React"
    ],
    category: "多 Agent 对话框架",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/microsoft__autogen",
    status: "verified",
    tags: [
      "智能体编排",
      "Actor模型",
      "Magentic-One"
    ]
  },
  {
    name: "CAMEL-AI",
    repo: "camel-ai/camel",
    url: "https://github.com/camel-ai/camel",
    stars: 12000,
    forks: "1300",
    language: "Python",
    license: "Apache-2.0",
    report: "projects/12-camel-ai-communicative-agents.md",
    pattern: "智能体编排 → 反馈-精炼",
    description: "最早探索多 Agent 角色扮演对话的框架，含 Critic 在环批评机制和 Self-Instruct 数据生成。",
    stack: [
      "Python",
      "OpenAI/Anthropic/Google API",
      "Pydantic"
    ],
    category: "角色扮演 Agent 框架",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/camel_ai__camel",
    status: "verified",
    tags: [
      "智能体编排",
      "角色扮演",
      "Critic在环"
    ]
  },
  {
    name: "LangGraph",
    repo: "langchain-ai/langgraph",
    url: "https://github.com/langchain-ai/langgraph",
    stars: 20000,
    forks: "2500",
    language: "Python",
    license: "MIT",
    report: "projects/13-langgraph-agent-workflows.md",
    pattern: "智能体编排",
    description: "LangChain 的状态化多 Agent 工作流框架，将 Agent 编排建模为有向图，支持循环/分支/并行和状态持久化。",
    stack: [
      "Python",
      "TypeScript",
      "LangChain Core",
      "Pydantic"
    ],
    category: "图式 Agent 编排",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/langchain_ai__langgraph",
    status: "verified",
    tags: [
      "智能体编排",
      "有向图",
      "Pregel引擎"
    ]
  },
  {
    name: "SWE-Agent",
    repo: "princeton-nlp/SWE-agent",
    url: "https://github.com/princeton-nlp/SWE-agent",
    stars: 15000,
    forks: "1500",
    language: "Python",
    license: "MIT",
    report: "projects/14-swe-agent-software-engineering.md",
    pattern: "反馈-精炼 → 评估器/打分器",
    description: "Princeton NLP 软件工程 Agent，ICLR 2025 Oral，首创 Agent-Computer Interface (ACI)，在 SWE-bench 上达到 SOTA。",
    stack: [
      "Python",
      "Jinja2",
      "Docker",
      "swerex"
    ],
    category: "软件工程 Agent",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/swe_agent__swe_agent",
    status: "verified",
    tags: [
      "反馈-精炼",
      "ACI设计",
      "SWE-bench"
    ]
  },
  {
    name: "OpenHands",
    repo: "All-Hands-AI/OpenHands",
    url: "https://github.com/All-Hands-AI/OpenHands",
    stars: 55000,
    forks: "6500",
    language: "Python",
    license: "MIT",
    report: "projects/15-openhands-ai-software-dev.md",
    pattern: "智能体编排",
    description: "开源 AI 软件开发平台（原 OpenDevin），AI Agent + 完整开发环境（编辑器/终端/浏览器），55k+ Stars。",
    stack: [
      "Python",
      "React",
      "Docker",
      "FastAPI"
    ],
    category: "AI 软件开发平台",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/all_hands_ai__openhands",
    status: "verified",
    tags: [
      "智能体编排",
      "Microagent",
      "沙箱环境"
    ]
  },
  {
    name: "Devika",
    repo: "stitionai/devika",
    url: "https://github.com/stitionai/devika",
    stars: 22000,
    forks: "3000",
    language: "Python",
    license: "MIT",
    report: "projects/16-devika-ai-software-engineer.md",
    pattern: "智能体编排 → 反馈-精炼",
    description: "开源 AI 软件工程师，多 Agent 流水线（规划→研究→决策→编码→测试→修复），支持 8+ LLM 后端。",
    stack: [
      "Python",
      "Flask",
      "Socket.IO",
      "Playwright",
      "BERT"
    ],
    category: "AI 软件工程师",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/stitionai__devika",
    status: "verified",
    tags: [
      "智能体编排",
      "多LLM",
      "流水线"
    ]
  },
  {
    name: "AgentVerse",
    repo: "OpenBMB/AgentVerse",
    url: "https://github.com/OpenBMB/AgentVerse",
    stars: 5000,
    forks: "500",
    language: "Python",
    license: "Apache-2.0",
    report: "projects/17-agentverse-multi-agent-platform.md",
    pattern: "智能体编排 → 反思记忆",
    description: "清华 OpenBMB 多智能体仿真平台（ACL 2024），双模式（仿真+任务求解），含 Reflection 记忆操作器。",
    stack: [
      "Python",
      "Pydantic",
      "OpenAI API",
      "React"
    ],
    category: "多 Agent 仿真平台",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/openbmb__agentverse",
    status: "verified",
    tags: [
      "智能体编排",
      "涌现行为",
      "Reflection"
    ]
  },
  {
    name: "ReEvo",
    repo: "ai4co/reevo",
    url: "https://github.com/ai4co/reevo",
    stars: 500,
    forks: "50",
    language: "Python",
    license: "MIT",
    report: "projects/18-reevo-reflective-evolution.md",
    pattern: "进化/搜索循环 → 反思记忆 → 评估器/打分器",
    description: "NeurIPS 2024 反射式进化搜索框架，将 LLM 作为语言超启发式（LHHs），通过短期/长期反射机制结合交叉变异实现组合优化算法的自动发现。",
    stack: [
      "Python",
      "Hydra/OmegaConf",
      "LiteLLM",
      "NumPy"
    ],
    category: "反射式进化搜索",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/ai4co__reevo",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "反思记忆",
      "超启发式",
      "组合优化"
    ]
  },
  {
    name: "LLaMEA",
    repo: "xai-liacs/LLaMEA",
    url: "https://github.com/XAI-liacs/LLaMEA",
    stars: 1200,
    forks: "100",
    language: "Python",
    license: "MIT",
    report: "projects/19-llamea-llm-evolutionary-algorithm.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "IEEE TEVC 2025 论文，自称 AlphaEvolve 的完全开源后继者，利用 LLM 自动生成和优化元启发式算法，获 GECCO 2025 银质 Humies 奖。",
    stack: [
      "Python",
      "OpenAI/Gemini/Ollama API",
      "IOHexperimenter",
      "SMAC",
      "NumPy"
    ],
    category: "LLM 驱动算法自动发现",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/xai_liacs__llamea",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器",
      "元启发式",
      "算法自动发现"
    ]
  },
  {
    name: "EvoPrompt",
    repo: "beeevita/EvoPrompt",
    url: "https://github.com/beeevita/EvoPrompt",
    stars: 300,
    forks: "30",
    language: "Python",
    license: "MIT",
    report: "projects/20-evoprompt-prompt-optimization.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "ICLR 2024 论文，将进化算法（GA/DE）与 LLM 结合实现离散提示词优化，在 31 个数据集上显著超越人工设计的提示词。",
    stack: [
      "Python",
      "OpenAI API",
      "Alpaca (LLaMA)",
      "NumPy"
    ],
    category: "进化式 Prompt 优化",
    lastPushed: "2024-01-01T00:00:00Z",
    localPath: "repos/beeevita__evoprompt",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器",
      "Prompt优化"
    ]
  },
  {
    name: "EvoAgent",
    repo: "siyuyuan/evoagent",
    url: "https://github.com/siyuyuan/evoagent",
    stars: 200,
    forks: "20",
    language: "Python",
    license: "NOASSERTION",
    report: "projects/21-evoagent-evolutionary-multi-agent.md",
    pattern: "进化/搜索循环 → 智能体编排",
    description: "NeurIPS 2024 论文，通过进化算法自动将专家 Agent 扩展为多智能体系统，模拟人类社会的繁衍机制实现从单 Agent 到多 Agent 的自动化扩展。",
    stack: [
      "Python",
      "OpenAI API",
      "Gemini API",
      "LangChain",
      "ScienceWorld"
    ],
    category: "进化式多 Agent 系统",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/siyuyuan__evoagent",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "智能体编排",
      "多Agent生成"
    ]
  },
  {
    name: "EvoAgentX",
    repo: "EvoAgentX/EvoAgentX",
    url: "https://github.com/EvoAgentX/EvoAgentX",
    stars: 1000,
    forks: "100",
    language: "Python",
    license: "MIT",
    report: "projects/22-evoagentx-agent-evolution-framework.md",
    pattern: "进化/搜索循环 → 智能体编排 → 评估器/打分器 → 反馈-精炼",
    description: "面向 LLM Agent 的构建、评估与自动进化开源框架，集成 TextGrad/MIPRO/AFlow/EvoPrompt 等多种进化算法优化 workflow 结构与提示词。",
    stack: [
      "Python",
      "OpenAI/Qwen/Claude/Deepseek API",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "FAISS"
    ],
    category: "自进化 Agent 生态系统",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/evoagentx__evoagentx",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "智能体编排",
      "评估器/打分器",
      "反馈-精炼",
      "自进化引擎"
    ]
  },
  {
    name: "EverOS",
    repo: "EverMind-AI/EverOS",
    url: "https://github.com/EverMind-AI/EverOS",
    stars: 1000,
    forks: "100",
    language: "Python",
    license: "Apache-2.0",
    report: "projects/23-everos-self-evolving-agents.md",
    pattern: "反思记忆 → 智能体编排",
    description: "面向自进化 Agent 的统一平台，核心组件 EverCore 受生物印刻启发的自组织记忆系统，在 LoCoMo/LongMemEval 基准上达到最佳水平。",
    stack: [
      "Python",
      "FastAPI",
      "Docker",
      "Milvus",
      "Elasticsearch"
    ],
    category: "自进化 Agent 记忆系统",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/evermind_ai__everos",
    status: "verified",
    tags: [
      "反思记忆",
      "智能体编排",
      "长期记忆",
      "自进化Agent"
    ]
  },
  {
    name: "OpenTreeSearch",
    repo: "Genentech/OpenTreeSearch",
    url: "https://github.com/Genentech/opentreesearch",
    stars: 200,
    forks: "20",
    language: "Python",
    license: "Apache-2.0",
    report: "projects/24-opentreesearch-llm-code-evolution.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "Genentech 发布的基于 PUCT 树搜索的 LLM 引导代码进化工具，构建在 OpenEvolve 之上，用单超参数替代岛屿模型多超参数。",
    stack: [
      "Python",
      "OpenEvolve",
      "PUCT树搜索",
      "LLM (Gemini/Qwen)"
    ],
    category: "LLM 引导代码进化",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/genentech__opentreesearch",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器",
      "树搜索",
      "代码进化"
    ]
  },
  {
    name: "pyribs",
    repo: "icaros-usc/pyribs",
    url: "https://github.com/icaros-usc/pyribs",
    stars: 800,
    forks: "80",
    language: "Python",
    license: "MIT",
    report: "projects/25-pyribs-quality-diversity.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "USC ICAROS Lab 的质量多样性（QD）优化库，实现高度模块化的 RIBS 框架，支持 CMA-ME/CMA-MEGA/CMA-MAE 等先进 QD 算法。",
    stack: [
      "Python",
      "NumPy",
      "SciPy",
      "JAX",
      "PyTorch"
    ],
    category: "质量多样性优化",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/icaros_usc__pyribs",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器",
      "质量多样性",
      "MAP-Elites"
    ]
  },
  {
    name: "LLM4EC",
    repo: "wuxingyu-ai/LLM4EC",
    url: "https://github.com/wuxingyu-ai/LLM4EC",
    stars: 200,
    forks: "20",
    language: "Markdown",
    license: "NOASSERTION",
    report: "projects/26-llm4ec-llm-evolutionary-computation.md",
    pattern: "文献综述",
    description: "IEEE TEVC 综述论文配套资源库，系统整理 LLM 与 EC 交叉领域研究，划分为 LLM 增强 EA、EA 增强 LLM、LLM 与 EA 协同应用三大方向。",
    stack: [
      "Markdown",
      "论文索引"
    ],
    category: "LLM+EC 交叉综述",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/wuxingyu_ai__llm4ec",
    status: "verified",
    tags: [
      "文献综述",
      "LLM+EC",
      "进化计算"
    ]
  },
  {
    name: "LLM4Opt",
    repo: "FeiLiu36/LLM4Opt",
    url: "https://github.com/FeiLiu36/LLM4Opt",
    stars: 400,
    forks: "40",
    language: "Markdown",
    license: "NOASSERTION",
    report: "projects/27-llm4opt-llm-optimization.md",
    pattern: "文献综述",
    description: "ACM Computing Surveys 2025 综述配套资源库，提出 LLM 在算法设计中的四范式分类：LLMaO/LLMaP/LLMaE/LLMaD，收录 300+ 篇论文。",
    stack: [
      "Markdown",
      "论文索引"
    ],
    category: "LLM 驱动算法设计综述",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/feiliu36__llm4opt",
    status: "verified",
    tags: [
      "文献综述",
      "LLM-as-Optimizer",
      "算法设计"
    ]
  },
  {
    name: "Nevergrad",
    repo: "facebookresearch/nevergrad",
    url: "https://github.com/facebookresearch/nevergrad",
    stars: 4000,
    forks: "400",
    language: "Python",
    license: "MIT",
    report: "projects/28-nevergrad-derivative-free.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "Meta Research 的 Python 无梯度优化平台，实现 100+ 种优化器的统一接口，含差分进化/CMA-ES/粒子群/贝叶斯优化等，通过 NGOpt 自动选择算法。",
    stack: [
      "Python",
      "NumPy",
      "SciPy"
    ],
    category: "无梯度优化框架",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/facebookresearch__nevergrad",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器",
      "无梯度优化",
      "NGOpt"
    ]
  },
  {
    name: "DEAP",
    repo: "DEAP/deap",
    url: "https://github.com/DEAP/deap",
    stars: 6000,
    forks: "1200",
    language: "Python",
    license: "LGPL-3.0",
    report: "projects/29-deap-evolutionary-framework.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "JMLR 2012 经典进化计算框架，支持 GA/GP/ES/多目标/协同进化等多种范式，以算法显式化、数据结构透明化为设计理念，与 multiprocessing/SCOOP 兼容。",
    stack: [
      "Python",
      "NumPy",
      "multiprocessing",
      "SCOOP"
    ],
    category: "经典进化算法框架",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/deap__deap",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器",
      "遗传算法",
      "遗传编程"
    ]
  },
  {
    name: "pycma",
    repo: "CMA-ES/pycma",
    url: "https://github.com/CMA-ES/pycma",
    stars: 1000,
    forks: "250",
    language: "Python",
    license: "BSD-3-Clause",
    report: "projects/30-pycma-cma-es.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "CMA-ES 官方 Python 参考实现，适用于非凸、病态、多模态和噪声连续优化问题，含边界/约束处理、噪声处理和混合整数优化支持。",
    stack: [
      "Python",
      "NumPy",
      "matplotlib"
    ],
    category: "经典进化策略",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/cma_es__pycma",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "CMA-ES",
      "无导数优化"
    ]
  },
  {
    name: "auto-sklearn",
    repo: "automl/auto-sklearn",
    url: "https://github.com/automl/auto-sklearn",
    stars: 7500,
    forks: "1000",
    language: "Python",
    license: "Apache-2.0",
    report: "projects/31-autosklearn-automl.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "Freiburg 大学 AutoML 团队开发的自动化机器学习框架（NeurIPS 2015），结合元学习、贝叶斯优化和自动模型集成实现端到端 ML 流程自动化。",
    stack: [
      "Python",
      "scikit-learn",
      "SMAC",
      "ConfigSpace",
      "Dask"
    ],
    category: "AutoML 框架",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/automl__auto_sklearn",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器",
      "AutoML",
      "贝叶斯优化"
    ]
  },
  {
    name: "Self-Evolving-Agents",
    repo: "CharlesQ9/Self-Evolving-Agents",
    url: "https://github.com/CharlesQ9/Self-Evolving-Agents",
    stars: 300,
    forks: "30",
    language: "Markdown",
    license: "NOASSERTION",
    report: "projects/32-self-evolving-agents-survey.md",
    pattern: "文献综述",
    description: "普林斯顿/UIUC/MIT 等联合撰写的自进化 Agent 综述，系统回答 What/When/How/Where to Evolve 四个核心问题，覆盖从模型权重到 Agent 架构的多个进化层次。",
    stack: [
      "Markdown",
      "论文索引"
    ],
    category: "自进化 Agent 综述",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/charlesq9__self_evolving_agents",
    status: "verified",
    tags: [
      "文献综述",
      "自进化Agent",
      "超级智能"
    ]
  },
  {
    name: "self-improvement-llm",
    repo: "Zesearch/self-improvement-llm",
    url: "https://github.com/Zesearch/self-improvement-llm",
    stars: 200,
    forks: "20",
    language: "Markdown",
    license: "NOASSERTION",
    report: "projects/33-self-improvement-llm.md",
    pattern: "文献综述",
    description: "Stony Brook University 发布的 LLM 自改进系统级综述，提出覆盖数据获取/选择/模型优化/推理优化/自主评估的五组件框架，收录 300+ 篇论文。",
    stack: [
      "Markdown",
      "论文索引"
    ],
    category: "LLM 自改进综述",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/zesearch__self_improvement_llm",
    status: "verified",
    tags: [
      "文献综述",
      "自改进",
      "LLM优化"
    ]
  },
  {
    name: "LLM-EA-Survey",
    repo: "xiaofangxd/LLM_EA",
    url: "https://github.com/xiaofangxd/LLM_EA",
    stars: 300,
    forks: "30",
    language: "Markdown",
    license: "NOASSERTION",
    report: "projects/34-llm-ea-survey.md",
    pattern: "文献综述",
    description: "LLM 与 EA 交叉研究综述论文配套资源库，将论文分为 LLM 用于 EA 和 EA 用于 LLM 两大方向，涵盖 2022-2024 年 100+ 篇重要文献。",
    stack: [
      "Markdown",
      "BibTeX"
    ],
    category: "LLM+EA 交叉综述",
    lastPushed: "2024-01-01T00:00:00Z",
    localPath: "repos/xiaofangxd__llm_ea",
    status: "verified",
    tags: [
      "文献综述",
      "LLM+EA",
      "进化计算"
    ]
  },
  {
    name: "Tutorial-GP-LLM",
    repo: "alfa-group/tutorial_gp_llm",
    url: "https://github.com/alfa-group/tutorial_gp_llm",
    stars: 50,
    forks: "10",
    language: "Python",
    license: "NOASSERTION",
    report: "projects/35-tutorial-gp-llm.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "MIT ALFA Group 的教学项目，展示如何将 LLM 集成到 GP 进化算子中，扩展 pony_gp 框架实现 LLM 驱动的个体初始化、交叉和变异操作。",
    stack: [
      "Python",
      "OpenAI API",
      "YAML",
      "符号回归"
    ],
    category: "GP+LLM 教学",
    lastPushed: "2024-01-01T00:00:00Z",
    localPath: "repos/alfa_group__tutorial_gp_llm",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "遗传编程",
      "LLM算子",
      "教学"
    ]
  },
  {
    name: "LLM-Agent-Optimization",
    repo: "YoungDubbyDu/LLM-Agent-Optimization",
    url: "https://github.com/YoungDubbyDu/LLM-Agent-Optimization",
    stars: 500,
    forks: "50",
    language: "Markdown",
    license: "NOASSERTION",
    report: "projects/36-llm-agent-optimization.md",
    pattern: "文献综述",
    description: "ACM Computing Surveys 接收论文配套列表，系统探讨 LLM Agent 优化技术，划分为参数驱动/无参数/数据集与基准/应用四大类别，收录 200+ 篇论文。",
    stack: [
      "Markdown",
      "学术文献管理"
    ],
    category: "LLM Agent 优化综述",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/youngdubbydu__llm_agent_optimization",
    status: "verified",
    tags: [
      "文献综述",
      "Agent优化",
      "参数优化",
      "无参数优化"
    ]
  },
  {
    name: "Awesome-Code-LLM",
    repo: "CodeFuse-ML/awesome-code-llm",
    url: "https://github.com/CodeFuse-ML/awesome-code-llm",
    stars: 2000,
    forks: "150",
    language: "Markdown",
    license: "NOASSERTION",
    report: "projects/37-awesome-code-llm.md",
    pattern: "文献综述",
    description: "CodeFuse AI (蚂蚁集团) 维护的代码 LLM 全景资源列表，TMLR 论文配套仓库，涵盖模型架构/预训练/代码推理/评估基准等 8 大类别。",
    stack: [
      "Markdown",
      "学术文献索引"
    ],
    category: "代码 LLM 综述",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/codefuse_ml__awesome_code_llm",
    status: "verified",
    tags: [
      "文献综述",
      "代码LLM",
      "模型架构"
    ]
  },
  {
    name: "AgentBench",
    repo: "THUDM/AgentBench",
    url: "https://github.com/THUDM/AgentBench",
    stars: 3000,
    forks: "300",
    language: "Python",
    license: "Apache-2.0",
    report: "projects/38-agentbench.md",
    pattern: "评估器/打分器",
    description: "清华 THUDM 开发的首个系统性 LLM-as-Agent 评测基准（ICLR 2024），设计 8 个截然不同的评测环境，全面评估规划/推理/工具使用/长程决策能力。",
    stack: [
      "Python",
      "Docker",
      "Redis",
      "MySQL",
      "OpenAI API"
    ],
    category: "Agent 评测基准",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/thudm__agentbench",
    status: "verified",
    tags: [
      "评估器/打分器",
      "Agent评测",
      "多环境基准"
    ]
  },
  {
    name: "RL4CO",
    repo: "ai4co/rl4co",
    url: "https://github.com/ai4co/rl4co",
    stars: 1200,
    forks: "150",
    language: "Python",
    license: "MIT",
    report: "projects/39-rl4co-reinforcement-learning.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "AI4CO 团队的强化学习组合优化基准框架（KDD 2025），基于 PyTorch 生态，包含 20+ 种前沿模型，支持路由/调度/图问题等多种 CO 任务。",
    stack: [
      "PyTorch",
      "TorchRL",
      "PyTorch Lightning",
      "Hydra",
      "TensorDict"
    ],
    category: "RL 组合优化基准",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/ai4co__rl4co",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "评估器/打分器",
      "强化学习",
      "组合优化"
    ]
  },
  {
    name: "Awesome-FM4CO",
    repo: "ai4co/awesome-fm4co",
    url: "https://github.com/ai4co/awesome-fm4co",
    stars: 500,
    forks: "50",
    language: "Markdown",
    license: "MIT",
    report: "projects/40-awesome-fm4co.md",
    pattern: "文献综述",
    description: "AI4CO 团队维护的基础模型驱动的组合优化前沿研究索引，收录 2022-2026 年 200+ 篇论文，从 LLM 解决 CO 和领域 FM 两个维度组织文献。",
    stack: [
      "Markdown",
      "表格索引"
    ],
    category: "基础模型+组合优化综述",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/ai4co__awesome_fm4co",
    status: "verified",
    tags: [
      "文献综述",
      "基础模型",
      "组合优化"
    ]
  },
  {
    name: "OpenDevin",
    repo: "OpenDevin/OpenDevin",
    url: "https://github.com/OpenDevin/OpenDevin",
    stars: 50000,
    forks: "6000",
    language: "Python",
    license: "MIT",
    report: "projects/41-opendevin-ai-software.md",
    pattern: "智能体编排 → 反馈-精炼",
    description: "开源 AI 软件开发平台（原 OpenDevin，现 OpenHands），在 SWE-bench 上达到 77.6% 解决率，被 TikTok/Amazon/Netflix/NVIDIA/Google 等采用。",
    stack: [
      "Python",
      "React",
      "Docker",
      "PyTorch",
      "Claude/GPT API",
      "FastAPI"
    ],
    category: "AI 软件开发平台",
    lastPushed: "2026-01-01T00:00:00Z",
    localPath: "repos/opendevin__opendevin",
    status: "verified",
    tags: [
      "智能体编排",
      "反馈-精炼",
      "SWE-bench",
      "软件开发"
    ]
  },
  {
    name: "GP-LLM-Code-Evolution",
    repo: "pureples/pureples",
    url: "https://github.com/pureples/pureples",
    stars: 100,
    forks: "20",
    language: "Python",
    license: "NOASSERTION",
    report: "projects/42-gp-llm-code-evolution.md",
    pattern: "进化/搜索循环 → 评估器/打分器",
    description: "GP+LLM 融合代码进化综合研究报告，分析遗传编程与大语言模型融合的技术路线，涵盖 LLM 作为遗传算子/优化器/超启发式/进化编码 Agent 等方向。",
    stack: [
      "Python",
      "OpenAI API",
      "进化算法框架",
      "LLM API"
    ],
    category: "GP+LLM 代码进化",
    lastPushed: "2025-01-01T00:00:00Z",
    localPath: "repos/pureples__pureples",
    status: "verified",
    tags: [
      "进化/搜索循环",
      "遗传编程",
      "LLM",
      "代码进化"
    ]
  },
  {
    name: "future-agi",
    repo: "future-agi/future-agi",
    url: "https://github.com/future-agi/future-agi",
    stars: 5200,
    forks: "420",
    language: "Python",
    license: "Apache-2.0",
    report: "research/projects/43-future-agi-self-improving.md",
    pattern: "自改进循环 → 评估 → 迭代优化",
    description: "FutureAGI 自改进 AI Agent 框架，支持 Agent 通过反馈循环持续优化自身行为。",
    stack: [
      "Python",
      "LLM API",
      "FastAPI"
    ],
    category: "自改进 Agent",
    lastPushed: "2025-06-01T00:00:00Z",
    localPath: "repos/future_agi__future_agi",
    status: "candidate",
    tags: [
      "自改进",
      "反馈循环",
      "Agent 框架"
    ]
  },
  {
    name: "awesome-self-evolving-agents",
    repo: "XMUDeepLIT/Awesome-Self-Evolving-Agents",
    url: "https://github.com/XMUDeepLIT/Awesome-Self-Evolving-Agents",
    stars: 3800,
    forks: "280",
    language: "Markdown",
    license: "CC-BY-4.0",
    report: "research/projects/44-xmu-self-evolving-agents.md",
    pattern: "综述索引 → 自进化 Agent 论文集合",
    description: "厦门大学 XMUDeepLIT 维护的自进化 Agent 领域论文精选列表，涵盖 Self-Evolving、Self-Improving、Self-Debugging 等方向。",
    stack: [
      "Markdown",
      "论文索引"
    ],
    category: "自进化 Agent 综述",
    lastPushed: "2026-01-15T00:00:00Z",
    localPath: "repos/xmudeeplit__awesome_self_evolving_agents",
    status: "candidate",
    tags: [
      "综述",
      "自进化",
      "论文索引"
    ]
  },
  {
    name: "ag2",
    repo: "ag2ai/ag2",
    url: "https://github.com/ag2ai/ag2",
    stars: 5200,
    forks: "680",
    language: "Python",
    license: "Apache-2.0",
    report: "research/projects/45-ag2-multi-agent.md",
    pattern: "多 Agent 对话 → 编排 → 协作",
    description: "AG2（原 AutoGen）微软开源的多 Agent 对话框架，支持可组合的 Agent 编排、群聊、人机协作和工具集成。",
    stack: [
      "Python",
      "OpenAI API",
      "Docker"
    ],
    category: "多 Agent 协作框架",
    lastPushed: "2026-05-20T00:00:00Z",
    localPath: "repos/ag2ai__ag2",
    status: "candidate",
    tags: [
      "多 Agent",
      "对话编排",
      "人机协作"
    ]
  },
  {
    name: "chatdev",
    repo: "OpenBMB/ChatDev",
    url: "https://github.com/OpenBMB/ChatDev",
    stars: 26000,
    forks: "3200",
    language: "Python",
    license: "Apache-2.0",
    report: "research/projects/46-chatdev-multi-agent-platform.md",
    pattern: "虚拟公司 → 角色对话链 → 软件开发",
    description: "ChatDev 清华 OpenBMB 多智能体协作平台，2.0 版为零代码编排平台，Puppeteer 用 RL 优化 Agent 编排（NeurIPS 2025）。",
    stack: [
      "Python",
      "LLM API",
      "React"
    ],
    category: "多 Agent 协作框架",
    lastPushed: "2026-01-07T00:00:00Z",
    localPath: "repos/openbmb__chatdev",
    status: "candidate",
    tags: [
      "多 Agent",
      "角色扮演",
      "RL 编排"
    ]
  },
  {
    name: "openagents",
    repo: "xlang-ai/OpenAgents",
    url: "https://github.com/xlang-ai/OpenAgents",
    stars: 4200,
    forks: "410",
    language: "Python",
    license: "Apache-2.0",
    report: "research/projects/47-openagents-platform.md",
    pattern: "工具调用 → 函数选择 → 代码执行",
    description: "OpenAgents 开源 Agent 平台，专注于 LLM 工具使用（Tool Use）和函数调用能力。",
    stack: [
      "Python",
      "LLM API",
      "React"
    ],
    category: "Agent 工具使用",
    lastPushed: "2025-08-01T00:00:00Z",
    localPath: "repos/xlang_ai__openagents",
    status: "candidate",
    tags: [
      "工具调用",
      "函数选择",
      "Agent 平台"
    ]
  },
  {
    name: "superagi",
    repo: "TransformerOptimus/SuperAGI",
    url: "https://github.com/TransformerOptimus/SuperAGI",
    stars: 16000,
    forks: "1900",
    language: "Python",
    license: "MIT",
    report: "research/projects/48-superagi-platform.md",
    pattern: "自主 Agent → 工具生态 → 任务执行",
    description: "SuperAGI 开源自主 AI Agent 框架，提供丰富的工具生态和 Web UI 管理。",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Docker"
    ],
    category: "自主 Agent 框架",
    lastPushed: "2025-03-01T00:00:00Z",
    localPath: "repos/superagi__superagi",
    status: "candidate",
    tags: [
      "自主 Agent",
      "工具生态",
      "Web UI"
    ]
  },
  {
    name: "phidata",
    repo: "phidatahq/phidata",
    url: "https://github.com/phidatahq/phidata",
    stars: 18000,
    forks: "2200",
    language: "Python",
    license: "MIT",
    report: "research/projects/49-phidata-framework.md",
    pattern: "Agent → 记忆 + 知识 + 工具 → 执行",
    description: "PhiData Agent 框架，内置记忆系统、知识库和工具集成，支持构建生产级 AI Agent。",
    stack: [
      "Python",
      "LLM API",
      "PostgreSQL"
    ],
    category: "Agent 框架",
    lastPushed: "2026-05-15T00:00:00Z",
    localPath: "repos/phidata__phidata",
    status: "candidate",
    tags: [
      "Agent 框架",
      "记忆系统",
      "知识库"
    ]
  },
  {
    name: "smol-developer",
    repo: "smol-ai/developer",
    url: "https://github.com/smol-ai/developer",
    stars: 14000,
    forks: "1600",
    language: "Python",
    license: "MIT",
    report: "research/projects/50-smol-developer.md",
    pattern: "最小 Agent → 代码生成 → 迭代",
    description: "Smol Developer 极简 AI 开发助手，以最少的代码实现 AI 辅助开发。",
    stack: [
      "Python",
      "LLM API"
    ],
    category: "AI 开发助手",
    lastPushed: "2025-06-01T00:00:00Z",
    localPath: "repos/smol_ai__developer",
    status: "candidate",
    tags: [
      "极简 Agent",
      "代码生成",
      "AI 开发"
    ]
  },
  {
    name: "dify",
    repo: "langgenius/dify",
    url: "https://github.com/langgenius/dify",
    stars: 95000,
    forks: "14000",
    language: "Python",
    license: "Apache-2.0",
    report: "research/projects/51-dify-ai-platform.md",
    pattern: "可视化工作流 → LLM 编排 → 应用部署",
    description: "Dify 开源 LLM 应用开发平台，提供可视化工作流编排、RAG 引擎和 Agent 构建工具。",
    stack: [
      "Python",
      "Flask",
      "React",
      "PostgreSQL",
      "Docker"
    ],
    category: "LLM 应用平台",
    lastPushed: "2026-05-22T00:00:00Z",
    localPath: "repos/langgenius__dify",
    status: "candidate",
    tags: [
      "LLM 平台",
      "工作流编排",
      "RAG"
    ]
  },
  {
    name: "agentgpt",
    repo: "reworkd/AgentGPT",
    url: "https://github.com/reworkd/AgentGPT",
    stars: 33000,
    forks: "9100",
    language: "TypeScript",
    license: "MIT",
    report: "research/projects/52-agentgpt-autonomous.md",
    pattern: "自主循环 → 任务分解 → 执行 → 学习",
    description: "AgentGPT 浏览器内自主 AI Agent 平台，通过思考→执行→学习循环自动达成目标。",
    stack: [
      "TypeScript",
      "Next.js",
      "Python",
      "FastAPI",
      "MySQL"
    ],
    category: "自主 Agent 平台",
    lastPushed: "2025-08-01T00:00:00Z",
    localPath: "repos/reworkd__agentgpt",
    status: "candidate",
    tags: [
      "自主 Agent",
      "任务分解",
      "Web UI"
    ]
  },
  {
    name: "agenta",
    repo: "Agenta-AI/agenta",
    url: "https://github.com/Agenta-AI/agenta",
    stars: 8000,
    forks: "850",
    language: "Python",
    license: "MIT",
    report: "research/projects/53-agenta-evaluation.md",
    pattern: "Prompt 管理 → 测试集 → 评估器 → 可观测性",
    description: "Agenta 开源 LLMOps 评测平台，集成 Prompt 管理、系统化评估和可观测性。",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Docker"
    ],
    category: "LLM 评测平台",
    lastPushed: "2026-05-10T00:00:00Z",
    localPath: "repos/agenta_ai__agenta",
    status: "candidate",
    tags: [
      "LLMOps",
      "评测框架",
      "Prompt 管理"
    ]
  },
  {
    name: "e2b",
    repo: "e2b-dev/e2b",
    url: "https://github.com/e2b-dev/e2b",
    stars: 7000,
    forks: "450",
    language: "Python",
    license: "MIT",
    report: "research/projects/54-e2b-sandbox.md",
    pattern: "AI 代码 → 安全沙箱 → 隔离执行",
    description: "E2B 开源 AI 代码安全执行沙箱，基于 Firecracker 微虚拟机实现毫秒级启动的隔离环境。",
    stack: [
      "Python",
      "TypeScript",
      "gRPC",
      "Firecracker"
    ],
    category: "代码执行沙箱",
    lastPushed: "2026-05-18T00:00:00Z",
    localPath: "repos/e2b__code_interpreter",
    status: "candidate",
    tags: [
      "沙箱",
      "代码执行",
      "安全隔离"
    ]
  },
  {
    name: "open-webui",
    repo: "open-webui/open-webui",
    url: "https://github.com/open-webui/open-webui",
    stars: 124000,
    forks: "15000",
    language: "Python",
    license: "MIT",
    report: "research/projects/55-open-webui.md",
    pattern: "自托管 → 多 LLM → RAG → 插件",
    description: "Open WebUI 124K+ stars 自托管 AI 平台，支持 Ollama/OpenAI API、内置 RAG、Python 工具插件。",
    stack: [
      "Python",
      "Svelte",
      "Docker",
      "Ollama"
    ],
    category: "自托管 AI 平台",
    lastPushed: "2026-05-22T00:00:00Z",
    localPath: "repos/open_webui__open_webui",
    status: "candidate",
    tags: [
      "自托管",
      "多 LLM",
      "RAG",
      "插件"
    ]
  },
  {
    name: "Gemini CLI Auto Memory",
    repo: "google-gemini/gemini-cli",
    url: "https://github.com/google-gemini/gemini-cli",
    stars: 105000,
    forks: "13900",
    language: "TypeScript",
    license: "Apache-2.0",
    report: "projects/214-gemini-cli-auto-memory-skills.md",
    pattern: "session transcripts -> auto-memory mining -> reviewable patches / SKILL.md drafts -> approved durable memory or skill assets",
    description: "Gemini CLI 是 Google 开源终端 AI Agent；Auto Memory 路线把历史会话挖掘成可审核的 durable memory 和 Agent Skills 草稿。",
    stack: [
      "TypeScript",
      "Node.js",
      "MCP",
      "Auto Memory",
      "Agent Skills"
    ],
    category: "Agent CLI Auto-Memory and Skills",
    lastPushed: "2026-05-25T00:00:00Z",
    localPath: "repos/google_gemini__gemini_cli",
    status: "candidate",
    tags: [
      "CLI Agent",
      "Google Gemini",
      "MCP",
      "agent memory",
      "skills"
    ]
  },
  {
    name: "n8n",
    repo: "n8n-io/n8n",
    url: "https://github.com/n8n-io/n8n",
    stars: 75000,
    forks: "8000",
    language: "TypeScript",
    license: "Sustainable Use",
    report: "research/projects/57-n8n-workflow-automation.md",
    pattern: "可视化工作流 → 节点编排 → AI Agent 节点",
    description: "n8n 开源工作流自动化平台，支持 400+ 集成和 AI Agent 节点，可视化编排自动化流程。",
    stack: [
      "TypeScript",
      "Node.js",
      "Vue.js"
    ],
    category: "工作流自动化",
    lastPushed: "2026-05-22T00:00:00Z",
    localPath: "repos/n8n__n8n",
    status: "candidate",
    tags: [
      "工作流",
      "自动化",
      "AI Agent"
    ]
  },
  {
    name: "langflow",
    repo: "langflow-ai/langflow",
    url: "https://github.com/langflow-ai/langflow",
    stars: 58000,
    forks: "6100",
    language: "Python",
    license: "MIT",
    report: "research/projects/58-langflow-visual-agent.md",
    pattern: "拖拽可视化 → LangChain 组件 → Agent 编排",
    description: "Langflow LangChain 生态的可视化 Agent/工作流构建器，拖拽式设计 LangChain 应用。",
    stack: [
      "Python",
      "React",
      "LangChain"
    ],
    category: "可视化 Agent 平台",
    lastPushed: "2026-05-20T00:00:00Z",
    localPath: "repos/langflow__langflow",
    status: "candidate",
    tags: [
      "可视化",
      "LangChain",
      "拖拽构建"
    ]
  },
  {
    name: "awesome-agent-papers",
    repo: "luo-junyu/Awesome-Agent-Papers",
    url: "https://github.com/luo-junyu/Awesome-Agent-Papers",
    stars: 1200,
    forks: "100",
    language: "Markdown",
    license: "MIT",
    report: "research/projects/59-awesome-agent-papers.md",
    pattern: "论文索引 → LLM Agent 研究追踪",
    description: "Awesome Agent Papers LLM Agent 研究论文精选列表，追踪 Agent 领域最新进展。",
    stack: [
      "Markdown"
    ],
    category: "Agent 研究综述",
    lastPushed: "2026-03-01T00:00:00Z",
    localPath: "repos/luo_junyu__awesome_agent_papers",
    status: "candidate",
    tags: [
      "论文索引",
      "Agent 研究"
    ]
  },
  {
    name: "swe-bench",
    repo: "SWE-bench/SWE-bench",
    url: "https://github.com/SWE-bench/SWE-bench",
    stars: 2800,
    forks: "420",
    language: "Python",
    license: "MIT",
    report: "research/projects/60-swe-bench-evaluation.md",
    pattern: "真实 GitHub Issue → 模型生成 Patch → 评估",
    description: "SWE-bench 软件工程评测基准，使用真实 GitHub Issue 评估 LLM 生成补丁的能力。",
    stack: [
      "Python",
      "Docker",
      "Git"
    ],
    category: "Agent 评测基准",
    lastPushed: "2026-04-01T00:00:00Z",
    localPath: "repos/swe_bench__swe_bench",
    status: "candidate",
    tags: [
      "评测基准",
      "软件工程",
      "代码补丁"
    ]
  },
  {
    name: "osworld",
    repo: "xlang-ai/OSWorld",
    url: "https://github.com/xlang-ai/OSWorld",
    stars: 2200,
    forks: "180",
    language: "Python",
    license: "MIT",
    report: "research/projects/61-osworld-agent-evaluation.md",
    pattern: "桌面 OS 环境 → Agent 操作 → 任务评估",
    description: "OSWorld 桌面级 OS Agent 评测基准，在真实操作系统环境中评估 AI Agent 的端到端任务完成能力。",
    stack: [
      "Python",
      "VirtualBox",
      "Docker"
    ],
    category: "Agent 评测基准",
    lastPushed: "2025-12-01T00:00:00Z",
    localPath: "repos/xlang_ai__osworld",
    status: "candidate",
    tags: [
      "评测基准",
      "OS 操作",
      "端到端"
    ]
  },
  {
    name: "webarena",
    repo: "web-arena-x/webarena",
    url: "https://github.com/web-arena-x/webarena",
    stars: 2800,
    forks: "260",
    language: "Python",
    license: "MIT",
    report: "research/projects/62-webarena-web-evaluation.md",
    pattern: "Web 环境 → Agent 浏览 → 任务完成评估",
    description: "WebArena Web Agent 评测基准，在真实网站环境中评估 Agent 的网页交互任务完成能力。",
    stack: [
      "Python",
      "Docker",
      "Playwright"
    ],
    category: "Agent 评测基准",
    lastPushed: "2025-10-01T00:00:00Z",
    localPath: "repos/web_arena_x__webarena",
    status: "candidate",
    tags: [
      "评测基准",
      "Web 交互",
      "浏览器"
    ]
  },
  {
    name: "litellm",
    repo: "BerriAI/litellm",
    url: "https://github.com/BerriAI/litellm",
    stars: 22000,
    forks: "2800",
    language: "Python",
    license: "MIT",
    report: "research/projects/63-litellm-gateway.md",
    pattern: "统一接口 → 100+ LLM → 代理网关",
    description: "LiteLLM 统一 LLM 网关，提供 100+ LLM 提供商的统一接口，支持 Python SDK 和代理服务器。",
    stack: [
      "Python",
      "FastAPI",
      "Proxy"
    ],
    category: "LLM 基础设施",
    lastPushed: "2026-05-22T00:00:00Z",
    localPath: "repos/berriai__litellm",
    status: "candidate",
    tags: [
      "LLM 网关",
      "统一接口",
      "代理"
    ]
  },
  {
    name: "ollama",
    repo: "ollama/ollama",
    url: "https://github.com/ollama/ollama",
    stars: 140000,
    forks: "11000",
    language: "Go",
    license: "MIT",
    report: "research/projects/64-ollama-llm-runtime.md",
    pattern: "本地推理 → 模型管理 → API 服务",
    description: "Ollama 140K+ stars 本地 LLM 推理运行时，支持 Llama、Gemma、Mistral 等模型的一键部署。",
    stack: [
      "Go",
      "C++",
      "llama.cpp"
    ],
    category: "LLM 基础设施",
    lastPushed: "2026-05-22T00:00:00Z",
    localPath: "repos/ollama__ollama",
    status: "candidate",
    tags: [
      "LLM 推理",
      "本地部署",
      "模型管理"
    ]
  },
  {
    name: "flowise",
    repo: "FlowiseAI/Flowise",
    url: "https://github.com/FlowiseAI/Flowise",
    stars: 36000,
    forks: "4500",
    language: "TypeScript",
    license: "Apache-2.0",
    report: "research/projects/65-flowise-visual-llm.md",
    pattern: "拖拽 UI → LLM 链 → 可视化编排",
    description: "Flowise 拖拽式 LLM 可视化构建器，通过 UI 拖拽构建 LLM 应用链。",
    stack: [
      "TypeScript",
      "Node.js",
      "React",
      "LangChain"
    ],
    category: "可视化 LLM 平台",
    lastPushed: "2026-05-15T00:00:00Z",
    localPath: "repos/flowiseai__flowise",
    status: "candidate",
    tags: [
      "可视化",
      "拖拽构建",
      "LLM 链"
    ]
  },
  {
    name: "babyagi",
    repo: "yoheinakajima/babyagi",
    url: "https://github.com/yoheinakajima/babyagi",
    stars: 21000,
    forks: "2900",
    language: "Python",
    license: "MIT",
    report: "research/projects/66-babyagi-task-agent.md",
    pattern: "目标 → 任务分解 → 优先级 → 执行 → 学习",
    description: "BabyAGI 任务驱动自主 Agent，通过目标分解、优先级排序和自我反馈循环自动完成复杂任务。",
    stack: [
      "Python",
      "OpenAI API",
      "Pinecone"
    ],
    category: "自主 Agent 框架",
    lastPushed: "2024-06-01T00:00:00Z",
    localPath: "repos/yoheinakajima__babyagi",
    status: "candidate",
    tags: [
      "自主 Agent",
      "任务分解",
      "自反馈"
    ]
  },
  {
    name: "cheshire-cat",
    repo: "cheshire-cat-ai/core",
    url: "https://github.com/cheshire-cat-ai/core",
    stars: 3200,
    forks: "380",
    language: "Python",
    license: "GPL-3.0",
    report: "research/projects/67-cheshire-cat-ai-framework.md",
    pattern: "插件式 AI → 模块化 → 可扩展",
    description: "Cheshire Cat AI 模块化聊天框架，通过插件系统实现可扩展的 AI 对话能力。",
    stack: [
      "Python",
      "FastAPI",
      "Qdrant",
      "Docker"
    ],
    category: "AI 聊天框架",
    lastPushed: "2026-05-10T00:00:00Z",
    localPath: "repos/cheshire_cat_ai__core",
    status: "candidate",
    tags: [
      "插件系统",
      "模块化",
      "聊天框架"
    ]
  },
  {
    name: "smolagents",
    repo: "huggingface/smolagents",
    url: "https://github.com/huggingface/smolagents",
    stars: 15000,
    forks: "1300",
    language: "Python",
    license: "Apache-2.0",
    report: "research/projects/68-smolagents-huggingface.md",
    pattern: "轻量 Agent → 工具调用 → HuggingFace 集成",
    description: "smolagents HuggingFace 轻量级 Agent 框架，简洁 API 构建 AI Agent。",
    stack: [
      "Python",
      "HuggingFace",
      "Transformers"
    ],
    category: "Agent 框架",
    lastPushed: "2026-05-20T00:00:00Z",
    localPath: "repos/huggingface__smolagents",
    status: "candidate",
    tags: [
      "轻量 Agent",
      "HuggingFace",
      "工具调用"
    ]
  },
  {
    name: "bisheng",
    repo: "dataelement/bisheng",
    url: "https://github.com/dataelement/bisheng",
    stars: 8000,
    forks: "1300",
    language: "Python",
    license: "Apache-2.0",
    report: "research/projects/69-bisheng-llm-platform.md",
    pattern: "LLM 应用平台 → 可视化编排 → 知识库",
    description: "Bisheng 开源 LLM 应用开发平台（毕昇），提供可视化编排、知识库管理和 RAG 引擎。",
    stack: [
      "Python",
      "React",
      "PostgreSQL",
      "Docker"
    ],
    category: "LLM 应用平台",
    lastPushed: "2026-05-18T00:00:00Z",
    localPath: "repos/dataelement__bisheng",
    status: "candidate",
    tags: [
      "LLM 平台",
      "可视化编排",
      "RAG"
    ]
  },
  {
    name: "chainlit",
    repo: "Chainlit/chainlit",
    url: "https://github.com/Chainlit/chainlit",
    stars: 10000,
    forks: "1200",
    language: "Python",
    license: "Apache-2.0",
    report: "research/projects/70-chainlit-llm-chat.md",
    pattern: "LLM 聊天 UI → 快速构建 → 部署",
    description: "Chainlit LLM 聊天应用框架，快速构建类似 ChatGPT 的 LLM 应用界面。",
    stack: [
      "Python",
      "React",
      "FastAPI"
    ],
    category: "LLM 聊天框架",
    lastPushed: "2026-05-15T00:00:00Z",
    localPath: "repos/chainlit__chainlit",
    status: "candidate",
    tags: [
      "聊天 UI",
      "LLM 应用",
      "快速构建"
    ]
  },
  {
    name: "wildclawbench",
    repo: "InternLM/WildClawBench",
    url: "https://github.com/InternLM/WildClawBench",
    stars: 500,
    forks: "50",
    language: "Python",
    license: "Apache-2.0",
    report: "research/projects/71-wildclawbench-agent-benchmark.md",
    pattern: "真实任务 → 端到端评估 → 无人工干预",
    description: "WildClawBench 浦语（InternLM）真实环境 Agent 评测，测试 AI Agent 无人工辅助的端到端能力。",
    stack: [
      "Python",
      "Docker"
    ],
    category: "Agent 评测基准",
    lastPushed: "2026-02-01T00:00:00Z",
    localPath: "repos/internlm__wildclawbench",
    status: "candidate",
    tags: [
      "评测基准",
      "真实任务",
      "端到端"
    ]
  },
  {
    name: "awesome-ai-agents-2026",
    repo: "Zijian-Ni/awesome-ai-agents-2026",
    url: "https://github.com/Zijian-Ni/awesome-ai-agents-2026",
    stars: 800,
    forks: "80",
    language: "Markdown",
    license: "CC-BY-4.0",
    report: "research/projects/72-awesome-ai-agents-2026.md",
    pattern: "2026 Agent 追踪 → 实时更新",
    description: "Awesome AI Agents 2026 精选列表，追踪 2026 年先进 AI Agent 项目和基准。",
    stack: [
      "Markdown"
    ],
    category: "Agent 研究综述",
    lastPushed: "2026-05-20T00:00:00Z",
    localPath: "repos/zijian_ni__awesome_ai_agents_2026",
    status: "candidate",
    tags: [
      "综述",
      "2026 Agent",
      "项目追踪"
    ]
  },
  {
    name: "Awesome Agent Memory by cxxz",
    repo: "cxxz/awesome-agent-memory",
    url: "https://github.com/cxxz/awesome-agent-memory",
    stars: 10,
    forks: 3,
    language: "Markdown",
    license: "MIT",
    report: "projects/209-cxxz-awesome-agent-memory.md",
    pattern: "memory systems -> tools/patterns/research -> agent memory taxonomy",
    description: "A curated agent-memory resource index that helps separate memory tools, patterns and research signals from runtime claims.",
    stack: [
      "Markdown"
    ],
    category: "Agent Memory Resource Index",
    lastPushed: "2026-05-25T00:00:00Z",
    localPath: "raw-github/cxxz_awesome-agent-memory.md",
    status: "candidate",
    tags: [
      "agent memory",
      "research index",
      "taxonomy"
    ]
  },
  {
    name: "Memoir",
    repo: "zhangfengcdt/memoir",
    url: "https://github.com/zhangfengcdt/memoir",
    stars: 549,
    forks: 35,
    language: "Python",
    license: "Apache-2.0",
    report: "projects/210-memoir-agent-auto-memory.md",
    pattern: "agent activity -> hierarchical memory paths -> Git-like commits/branches -> recoverable continuity",
    description: "Memoir frames agent memory as declarative, hierarchical and Git-like, making memory state inspectable through commits and branches instead of only vector retrieval.",
    stack: [
      "Python",
      "Git-like memory"
    ],
    category: "Git-like Agent Auto-Memory",
    lastPushed: "2026-05-25T00:00:00Z",
    localPath: "raw-github/zhangfengcdt_memoir.md",
    status: "candidate",
    tags: [
      "agent memory",
      "versioned memory",
      "continuity"
    ]
  },
  {
    name: "Awesome GraphMemory",
    repo: "DEEP-PolyU/Awesome-GraphMemory",
    url: "https://github.com/DEEP-PolyU/Awesome-GraphMemory",
    stars: 273,
    forks: 15,
    language: "Markdown",
    license: "Unknown",
    report: "projects/211-awesome-graphmemory.md",
    pattern: "graph memory papers -> techniques/applications -> memory substrate map",
    description: "Awesome GraphMemory is a paper-facing index for graph-based agent memory, giving the corpus a bridge from memory substrates to graph knowledge structures.",
    stack: [
      "Markdown",
      "Graph memory papers"
    ],
    category: "Graph-Based Agent Memory Index",
    lastPushed: "2026-05-25T00:00:00Z",
    localPath: "raw-github/deep-polyu_awesome-graphmemory.md",
    status: "candidate",
    tags: [
      "graph memory",
      "agent memory",
      "paper index"
    ]
  },
  {
    name: "ATANT",
    repo: "Kenotic-Labs/ATANT",
    url: "https://github.com/Kenotic-Labs/ATANT",
    stars: 3,
    forks: 0,
    language: "Python",
    license: "License visible",
    report: "projects/212-atant-agent-continuity-eval.md",
    pattern: "agent narrative checkpoints -> continuity tests -> self/identity drift evidence",
    description: "ATANT adds an agent-continuity evaluation angle: memory is not only retrieval quality, but whether an agent maintains narrative state and checkpoint continuity.",
    stack: [
      "Python",
      "Evaluation framework"
    ],
    category: "Agent Continuity Evaluation",
    lastPushed: "2026-05-25T00:00:00Z",
    localPath: "raw-github/kenotic-labs_atant.md",
    status: "candidate",
    tags: [
      "agent continuity",
      "evaluation",
      "memory benchmark"
    ]
  },
  {
    name: "Gitagent",
    repo: "open-gitagent/gitagent",
    url: "https://github.com/open-gitagent/gitagent",
    stars: 404,
    forks: 82,
    language: "TypeScript",
    license: "MIT",
    report: "projects/213-gitagent-git-native-agent-framework.md",
    pattern: "git repository -> agent identity/rules/memory/tools/skills/hooks -> auditable agent runtime",
    description: "Gitagent treats an agent as a Git repository: identity, rules, memory, tools, skills, hooks, plugins and audit state all live in version-controlled files.",
    stack: [
      "TypeScript",
      "Git-native agent runtime"
    ],
    category: "Git-Native Agent Framework",
    lastPushed: "2026-05-25T00:00:00Z",
    localPath: "raw-github/open-gitagent_gitagent.md",
    status: "candidate",
    tags: [
      "git-native agent",
      "agent memory",
      "skills",
      "audit"
    ]
  },
  {
    name: "Skillgrade Agent Skill Evaluation",
    repo: "mgechev/skillgrade",
    url: "https://github.com/mgechev/skillgrade",
    stars: 490,
    forks: 35,
    language: "TypeScript",
    license: "MIT",
    report: "projects/215-skillgrade-agent-skill-evaluation.md",
    pattern: "SKILL.md package -> eval.yaml tasks and graders -> sandboxed agent trials -> pass-rate gate",
    description: "Skillgrade turns Agent Skills into testable assets with repeatable smoke, reliability and regression trials across Gemini, Claude, Codex, ACP and OpenCode-style agents.",
    stack: [
      "TypeScript",
      "Node.js",
      "Docker",
      "Agent Skills"
    ],
    category: "Agent Skill Evaluation Harness",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/mgechev_skillgrade.md",
    status: "candidate",
    tags: [
      "agent skills",
      "evaluation",
      "benchmark",
      "quality gate"
    ]
  },
  {
    name: "Webmaxru Agent Skills",
    repo: "webmaxru/Agent-Skills",
    url: "https://github.com/webmaxru/Agent-Skills",
    stars: 29,
    forks: 2,
    language: "TypeScript / JavaScript",
    license: "Public repository license visible",
    report: "projects/216-webmaxru-agent-skills.md",
    pattern: "Web API source material -> skill authoring -> validation/remediation -> install verification",
    description: "Webmaxru Agent Skills is a reviewed Web API skills collection with explicit creation, validation, remediation and install-check phases.",
    stack: [
      "TypeScript",
      "JavaScript",
      "Web API Agent Skills"
    ],
    category: "Reviewed Web API Agent Skills",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/webmaxru_agent-skills.md",
    status: "candidate",
    tags: [
      "agent skills",
      "web APIs",
      "validation",
      "skill lifecycle"
    ]
  },
  {
    name: "Waza",
    repo: "microsoft/waza",
    url: "https://github.com/microsoft/waza",
    stars: 904,
    forks: 49,
    language: "Go",
    license: "MIT",
    report: "projects/217-waza-agent-skill-evaluation-cli.md",
    pattern: "SKILL.md asset -> eval scaffold -> benchmark run -> grader/coverage report -> skill quality gate",
    description: "Waza is Microsoft's Go CLI / framework for agent skills: it scaffolds skills and eval suites, runs benchmark tasks, compares models, checks coverage, and turns SKILL.md assets into measurable quality gates.",
    stack: [
      "Go"
    ],
    category: "Waza Agent Skill Evaluation CLI",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/microsoft_waza.md",
    status: "candidate",
    tags: [
      "agent skills",
      "evaluation",
      "benchmark",
      "quality gate"
    ]
  },
  {
    name: "NEXO Brain",
    repo: "wazionapps/nexo",
    url: "https://github.com/wazionapps/nexo",
    stars: 22,
    forks: 9,
    language: "Python / MCP",
    license: "Open source public repository",
    report: "projects/218-nexo-agent-memory-runtime.md",
    pattern: "conversation/session traces -> cognitive memory extraction -> semantic/temporal retrieval -> trust/forgetting gates -> proactive context packets",
    description: "NEXO Brain is a local shared-brain memory runtime for Claude Code, Codex, Claude Desktop and MCP clients, combining persistent memory, RAG, temporal recall, forgetting, trust scoring, benchmark reporting and background self-improvement jobs.",
    stack: [
      "Python",
      "MCP"
    ],
    category: "NEXO Agent Memory Runtime",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/wazionapps_nexo.md",
    status: "candidate",
    tags: [
      "agent memory",
      "MCP",
      "LoCoMo",
      "self-improvement"
    ]
  },
  {
    name: "state-trace",
    repo: "razroo/state-trace",
    url: "https://github.com/razroo/state-trace",
    stars: 1,
    forks: 0,
    language: "Python",
    license: "Public repository license not verified",
    report: "projects/219-state-trace-agent-memory-engine.md",
    pattern: "agent log step -> typed memory node/edge -> capacity-aware decay -> graph traversal retrieval",
    description: "state-trace is a graph-native memory engine for AI agents that stores typed memories and causal links, then retrieves state-aware context through graph traversal instead of only vector similarity.",
    stack: [
      "Python"
    ],
    category: "state-trace Agent Memory Engine",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/razroo_state-trace.md",
    status: "candidate",
    tags: [
      "agent memory",
      "graph memory",
      "stateful agents"
    ]
  },
  {
    name: "Agent Memory Techniques",
    repo: "NirDiamant/Agent_Memory_Techniques",
    url: "https://github.com/NirDiamant/Agent_Memory_Techniques",
    stars: 412,
    forks: 58,
    language: "Jupyter Notebook / Python",
    license: "Apache-2.0",
    report: "projects/220-agent-memory-techniques.md",
    pattern: "memory need -> 30 runnable techniques -> taxonomy/decision tree -> evaluation and production notebooks",
    description: "Agent Memory Techniques is a runnable notebook cookbook for 30 LLM-agent memory patterns, covering short-term buffers, long-term stores, cognitive architectures, multi-agent shared memory, framework integrations, LoCoMo-style evaluation and production patterns.",
    stack: [
      "Jupyter Notebook",
      "Python",
      "Mermaid"
    ],
    category: "Agent Memory Technique Cookbook",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/nirdiamant_agent_memory_techniques.md",
    status: "candidate",
    tags: [
      "agent memory",
      "cookbook",
      "LoCoMo",
      "knowledge graph",
      "production patterns"
    ]
  },
  {
    name: "kbench",
    repo: "shareAI-lab/kbench",
    url: "https://github.com/shareAI-lab/kbench",
    stars: 10,
    forks: 1,
    language: "TypeScript / Python",
    license: "Apache-2.0",
    report: "projects/221-kbench-agent-harness-benchmark-cli.md",
    pattern: "benchmark bridge -> kbench CLI -> built-in or custom agent harness -> standardized run artifacts",
    description: "kbench normalizes SWE, Terminal-Bench 2.0, tau-bench and Standardized Agent Exams through one CLI and harness contract, including Codex, Claude Code, Gemini CLI, kode-agent-sdk and custom adapter paths.",
    stack: [
      "TypeScript",
      "Python",
      "Shell"
    ],
    category: "Agent Harness Benchmark CLI",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/shareai-lab_kbench.md",
    status: "candidate",
    tags: [
      "agent harness",
      "benchmark",
      "SWE-bench",
      "terminal-bench",
      "SAE"
    ]
  },
  {
    name: "evmbench",
    repo: "paradigmxyz/evmbench",
    url: "https://github.com/paradigmxyz/evmbench",
    stars: 421,
    forks: 62,
    language: "TypeScript / Python",
    license: "Apache-2.0",
    report: "projects/222-evmbench-smart-contract-agent-harness.md",
    pattern: "contract upload -> sandboxed Codex detect worker -> JSON vulnerability report -> UI/report validation",
    description: "evmbench is a domain-specific benchmark and harness for LLM agents that find and exploit smart-contract bugs, wrapping Codex detect-mode workers, job queues, secret handling, result validation and a report UI.",
    stack: [
      "TypeScript",
      "Python",
      "Docker"
    ],
    category: "Smart Contract Agent Benchmark Harness",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/paradigmxyz_evmbench.md",
    status: "candidate",
    tags: [
      "agent benchmark",
      "security",
      "codex",
      "smart contracts",
      "sandbox"
    ]
  },
  {
    name: "Skills Best Practices",
    repo: "mgechev/skills-best-practices",
    url: "https://github.com/mgechev/skills-best-practices",
    stars: 1900,
    forks: 131,
    language: "Python / Markdown",
    license: "not verified",
    report: "projects/223-skills-best-practices-agent-skill-authoring.md",
    pattern: "skill need -> trigger-optimized frontmatter -> lean SKILL.md -> references/scripts/assets -> discovery/logic/edge-case validation -> regression-aware skill iteration",
    description: "Skills Best Practices is a methodology layer for professional-grade agent skills, emphasizing discoverable frontmatter, progressive disclosure, deterministic helper scripts and LLM-based validation loops.",
    stack: [
      "Python",
      "Markdown",
      "Agent Skills"
    ],
    category: "Agent Skill Authoring Methodology",
    lastPushed: "2026-05-24T00:00:00Z",
    localPath: "raw-github/mgechev_skills-best-practices.md",
    status: "candidate",
    tags: [
      "agent skills",
      "skill authoring",
      "progressive disclosure",
      "validation",
      "skillgrade"
    ]
  },
  {
    name: "SICA Self-Improving Coding Agent",
    repo: "MaximeRobeyns/self_improving_coding_agent",
    url: "https://github.com/MaximeRobeyns/self_improving_coding_agent",
    stars: 324,
    forks: 56,
    language: "Python",
    license: "MIT",
    report: "projects/224-sica-self-improving-coding-agent.md",
    pattern: "coding agent -> own-codebase modification -> tests/review signal -> improved next agent iteration",
    description: "SICA is a self-improving coding-agent implementation where the agent works on its own codebase, making it a core self-referential improvement artifact.",
    stack: [
      "Python",
      "JavaScript",
      "Docker"
    ],
    category: "Self-Improving Coding Agent",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/maximerobeyns_self_improving_coding_agent.md",
    status: "candidate",
    tags: [
      "self-improving coding agent",
      "SICA",
      "code self-modification",
      "ICLR 2025 workshop"
    ]
  },
  {
    name: "Agent Zero",
    repo: "agent0ai/agent-zero",
    url: "https://github.com/agent0ai/agent-zero",
    stars: 17600,
    forks: 3600,
    language: "Python",
    license: "Public repository license visible",
    report: "projects/225-agent-zero-runtime.md",
    pattern: "project workspace -> Linux/tools/browser/memory/skills -> inspectable agent work -> reusable state",
    description: "Agent Zero is an autonomous-agent runtime with Linux execution, memory, browser automation, skills, plugins, projects and subordinate agents.",
    stack: [
      "Python",
      "Docker",
      "Browser automation",
      "Agent Skills"
    ],
    category: "Autonomous Agent Runtime",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/agent0ai_agent-zero.md",
    status: "candidate",
    tags: [
      "agent runtime",
      "memory",
      "skills",
      "multi-agent",
      "browser automation"
    ]
  },
  {
    name: "elizaOS",
    repo: "elizaOS/eliza",
    url: "https://github.com/elizaOS/eliza",
    stars: 17300,
    forks: 5400,
    language: "TypeScript",
    license: "MIT",
    report: "projects/226-elizaos-autonomous-agent-framework.md",
    pattern: "autonomous-agent framework -> plugins/CLI/web lifecycle -> deployed agent applications",
    description: "elizaOS is a high-adoption autonomous-agent framework whose plugin and lifecycle surface can host memory, skill, workflow and evaluator loops.",
    stack: [
      "TypeScript",
      "CLI",
      "Plugins",
      "Web interface"
    ],
    category: "Autonomous Agent Framework",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/elizaos_eliza.md",
    status: "candidate",
    tags: [
      "agent framework",
      "plugins",
      "autonomous agents",
      "runtime infrastructure"
    ]
  },
  {
    name: "Centaur",
    repo: "paradigmxyz/centaur",
    url: "https://github.com/paradigmxyz/centaur",
    stars: 469,
    forks: 55,
    language: "Python / TypeScript",
    license: "View license / MIT signal from public site",
    report: "projects/227-centaur-secure-team-agent-runtime.md",
    pattern: "Slack/API request -> durable control plane -> sandboxed harness -> tools/workflows -> replayable team result",
    description: "Centaur is a multiplayer self-hosted secure team-agent runtime with Kubernetes sandboxes, bring-your-own harness support, durable workflows, tools and credential boundaries.",
    stack: [
      "Python",
      "TypeScript",
      "Kubernetes",
      "Slack",
      "Agent harness"
    ],
    category: "Secure Team Agent Runtime",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/paradigmxyz_centaur.md",
    status: "candidate",
    tags: [
      "team agent runtime",
      "harness",
      "durable workflows",
      "credential boundaries",
      "sandbox"
    ]
  },
  {
    name: "Yunjue Agent",
    repo: "YunjueTech/Yunjue-Agent",
    url: "https://github.com/YunjueTech/Yunjue-Agent",
    stars: 426,
    forks: 49,
    language: "Python",
    license: "Apache-2.0",
    report: "projects/228-yunjue-agent-in-situ-self-evolving-agent.md",
    pattern: "open-ended task stream -> tool evolution -> reusable capabilities -> trace/reproduction audit",
    description: "Yunjue Agent is a reproducible zero-start in-situ self-evolving agent system that turns execution feedback into reusable tools and auditable traces.",
    stack: [
      "Python",
      "Tool synthesis",
      "Benchmark traces",
      "Codex CLI"
    ],
    category: "In-Situ Self-Evolving Agent System",
    lastPushed: "2026-02-11T00:00:00Z",
    localPath: "raw-github/yunjuetech_yunjue-agent.md",
    status: "candidate",
    tags: [
      "in-situ self-evolution",
      "tool evolution",
      "benchmark traces",
      "reproducibility",
      "open-ended tasks"
    ]
  },
  {
    name: "self-evolving-agent",
    repo: "RangeKing/self-evolving-agent",
    url: "https://github.com/RangeKing/self-evolving-agent",
    stars: 9,
    forks: 0,
    language: "Python",
    license: "MIT",
    report: "projects/229-rangeking-self-evolving-agent-skill.md",
    pattern: "agent run -> .evolution workspace -> evaluation/curriculum -> promoted capability",
    description: "RangeKing/self-evolving-agent is an OpenClaw skill that upgrades self-improvement logs into a governed evolution workspace with curriculum, evals and promotion.",
    stack: [
      "Python",
      "OpenClaw",
      "Benchmarks",
      "Hooks"
    ],
    category: "OpenClaw Self-Evolving Skill",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/rangeking_self-evolving-agent.md",
    status: "candidate",
    tags: [
      "agent skill",
      "OpenClaw",
      "curriculum",
      "evaluation",
      "promotion"
    ]
  },
  {
    name: "NexAgent",
    repo: "gofenix/nex-agent",
    url: "https://github.com/gofenix/nex-agent",
    stars: 64,
    forks: 5,
    language: "Elixir",
    license: "Unknown",
    report: "projects/230-nex-agent-elixir-otp-self-evolving-agent.md",
    pattern: "supervised runtime -> memory/tools/skills -> subagents/jobs -> source-level upgrades",
    description: "NexAgent uses Elixir/OTP supervision to combine persistent sessions, memory, dynamic tools, skills, cron, subagents and source-level self-improvement.",
    stack: [
      "Elixir",
      "OTP",
      "Memory",
      "Dynamic tools"
    ],
    category: "Elixir/OTP Self-Evolving Agent Runtime",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/gofenix_nex-agent.md",
    status: "candidate",
    tags: [
      "self-evolving runtime",
      "Elixir/OTP",
      "persistent memory",
      "subagents",
      "code upgrades"
    ]
  },
  {
    name: "hermes2anti",
    repo: "swapedoc/hermes2anti",
    url: "https://github.com/swapedoc/hermes2anti",
    stars: 4,
    forks: 0,
    language: "Python",
    license: "MIT",
    report: "projects/231-hermes2anti-self-improve-agent-memory-skills.md",
    pattern: "task session -> golden path extraction -> skill creation/security scan -> memory recall",
    description: "hermes2anti is a compact Hermes-inspired memory and skill loop that persists lessons, creates reusable skills, scans them, and recalls prior sessions.",
    stack: [
      "Python",
      "SQLite FTS5",
      "Agent Skills",
      "Security scanner"
    ],
    category: "Memory and Skill Self-Improvement Toolkit",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/swapedoc_hermes2anti.md",
    status: "candidate",
    tags: [
      "memory",
      "skills",
      "Hermes Agent",
      "security scanning",
      "session recall"
    ]
  },
  {
    name: "ADHDev",
    repo: "vilmire/adhdev",
    url: "https://github.com/vilmire/adhdev",
    stars: 33,
    forks: 8,
    language: "TypeScript",
    license: "AGPL-3.0",
    report: "projects/232-adhdev-agent-dashboard-control-plane.md",
    pattern: "coding-agent session -> local dashboard/control plane -> approval, status, history and continuation",
    description: "ADHDev is a self-hosted control plane for long-running coding-agent sessions across IDEs and CLIs, including Codex, Claude Code and Hermes Agent.",
    stack: [
      "TypeScript",
      "Node.js",
      "Local daemon",
      "Dashboard"
    ],
    category: "Coding-Agent Control Plane",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/vilmire_adhdev.md",
    status: "candidate",
    tags: [
      "control plane",
      "coding agents",
      "session dashboard",
      "Codex",
      "Claude Code"
    ]
  },
  {
    name: "AI Research SKILLs",
    repo: "Orchestra-Research/AI-research-SKILLs",
    url: "https://github.com/Orchestra-Research/AI-research-SKILLs",
    stars: 8900,
    forks: 679,
    language: "Markdown",
    license: "MIT",
    report: "projects/233-ai-research-skills-agent-research-workflow.md",
    pattern: "research skill library -> autoresearch orchestration -> evaluation, agents, prompting and paper workflow skills",
    description: "AI Research SKILLs is a large open-source skill library for turning coding agents into AI research agents across ideation, experiments, evaluation and paper writing.",
    stack: [
      "Markdown",
      "npm installer",
      "Claude Code marketplace",
      "Agent skills"
    ],
    category: "Agent Research Skill Library",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/orchestra-research_ai-research-skills.md",
    status: "candidate",
    tags: [
      "skills",
      "autoresearch",
      "evaluation",
      "paper writing",
      "agent workflow"
    ]
  },
  {
    name: "ai-skills",
    repo: "iliaal/ai-skills",
    url: "https://github.com/iliaal/ai-skills",
    stars: 13,
    forks: 3,
    language: "Shell",
    license: "MIT",
    report: "projects/234-ai-skills-agent-process-discipline.md",
    pattern: "portable agent skills -> planning, debugging, review and verification discipline -> reusable behavior layer",
    description: "ai-skills is a compact behavioral skill library for coding agents, distributing process discipline across Codex, Claude Code, Cursor, Gemini CLI and related runtimes.",
    stack: [
      "Shell",
      "Markdown",
      "npx skills installer",
      "Agent skills"
    ],
    category: "Agent Process Skill Library",
    lastPushed: "2026-05-16T00:00:00Z",
    localPath: "raw-github/iliaal_ai-skills.md",
    status: "candidate",
    tags: [
      "skills",
      "verification",
      "debugging",
      "planning",
      "multi-agent orchestration"
    ]
  },
  {
    name: "Claude Trading Skills",
    repo: "agiprolabs/claude-trading-skills",
    url: "https://github.com/agiprolabs/claude-trading-skills",
    stars: 31,
    forks: 14,
    language: "Python",
    license: "MIT",
    report: "projects/235-claude-trading-skills-domain-agent-workflows.md",
    pattern: "domain skill pack -> market data / backtesting / risk / tax workflows -> reusable agent task procedures",
    description: "Claude Trading Skills packages trading, DeFi and quantitative finance procedures as reusable Agent Skills for Claude Code, Codex, Cursor, Gemini CLI and other compatible runtimes.",
    stack: [
      "Python",
      "Markdown",
      "Agent Skills"
    ],
    category: "Domain Agent Skill Workflow Pack",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/agiprolabs_claude-trading-skills.md",
    status: "candidate",
    tags: [
      "agent skills",
      "domain workflow",
      "trading",
      "Codex",
      "Claude Code"
    ]
  },
  {
    name: "Spec Kit Agent Skills",
    repo: "dceoy/speckit-agent-skills",
    url: "https://github.com/dceoy/speckit-agent-skills",
    stars: 88,
    forks: 21,
    language: "Shell",
    license: "AGPL-3.0",
    report: "projects/236-speckit-agent-skills-spec-driven-workflow.md",
    pattern: "spec-driven workflow -> constitution/specify/plan/tasks/implement skills -> multi-runtime agent process discipline",
    description: "speckit-agent-skills maps Spec Kit methodology into shared skills, prompts, commands and agent files for Claude Code, Codex CLI, GitHub Copilot CLI, Gemini CLI and related runtimes.",
    stack: [
      "Shell",
      "Markdown",
      "Spec Kit"
    ],
    category: "Spec-Driven Agent Workflow Skills",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/dceoy_speckit-agent-skills.md",
    status: "candidate",
    tags: [
      "agent skills",
      "spec-driven development",
      "workflow orchestration",
      "Codex",
      "Gemini CLI"
    ]
  },
  {
    name: "CUGA Agent",
    repo: "cuga-project/cuga-agent",
    url: "https://github.com/cuga-project/cuga-agent",
    stars: 742,
    forks: 132,
    language: "Python",
    license: "Open source public repository",
    report: "projects/237-cuga-agent-enterprise-agent-harness.md",
    pattern: "enterprise agent config -> tools/MCP/OpenAPI -> policies/HITL -> optional memory/knowledge/skills -> trajectory visualization",
    description: "CUGA is an enterprise generalist agent harness that wires APIs, MCP servers, policies, memory, knowledge and agent skills into configurable web/API task execution.",
    stack: [
      "Python",
      "TypeScript",
      "Agent Skills",
      "MCP"
    ],
    category: "Enterprise Generalist Agent Harness",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/cuga-project_cuga-agent.md",
    status: "candidate",
    tags: [
      "agent harness",
      "MCP",
      "policy",
      "skills",
      "enterprise agents"
    ]
  },
  {
    name: "AutoR",
    repo: "AutoX-AI-Labs/AutoR",
    url: "https://github.com/AutoX-AI-Labs/AutoR",
    stars: 897,
    forks: 22,
    language: "Python",
    license: "Public repository license not verified",
    report: "projects/238-autor-human-centered-research-harness.md",
    pattern: "human research intent -> staged agent execution -> approval checkpoints -> artifact-backed run directory -> resume/redo/rollback",
    description: "AutoR is a terminal-first research harness where AI handles execution, humans retain direction, and every run is stored as an inspectable artifact on disk.",
    stack: [
      "Python",
      "JavaScript",
      "Research Harness"
    ],
    category: "Human-Centered Research Harness",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/autox-ai-labs_autor.md",
    status: "candidate",
    tags: [
      "research agent",
      "harness",
      "artifact-backed runs",
      "human approval"
    ]
  },
  {
    name: "Chorus",
    repo: "Chorus-AIDLC/Chorus",
    url: "https://github.com/Chorus-AIDLC/Chorus",
    stars: 909,
    forks: 84,
    language: "TypeScript",
    license: "AGPL-3.0",
    report: "projects/239-chorus-ai-human-collaboration-harness.md",
    pattern: "requirements/task state -> sub-agent orchestration -> permissions/context injection -> observability/failure recovery -> OpenSpec archival",
    description: "Chorus is an AI-human collaboration harness that manages session lifecycle, task state, sub-agent orchestration, permissions, observability and failure recovery around LLM agents.",
    stack: [
      "TypeScript",
      "Shell",
      "Astro"
    ],
    category: "AI-Human Collaboration Harness",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/chorus-aidlc_chorus.md",
    status: "candidate",
    tags: [
      "agent harness",
      "multi-agent",
      "AI-DLC",
      "permissions",
      "observability"
    ]
  },
  {
    name: "KWeaver Core",
    repo: "kweaver-ai/kweaver-core",
    url: "https://github.com/kweaver-ai/kweaver-core",
    stars: 803,
    forks: 92,
    language: "Go",
    license: "Apache-2.0",
    report: "projects/240-kweaver-core-enterprise-decision-agent-harness.md",
    pattern: "business knowledge network -> governed context loader -> tool curation/path guidance -> decision agent execution -> TraceAI feedback evidence",
    description: "KWeaver Core is a harness-first foundation for enterprise decision agents, combining governed context, knowledge networks, tool policies and TraceAI-style feedback evidence.",
    stack: [
      "Go",
      "Python",
      "Knowledge Network"
    ],
    category: "Enterprise Decision Agent Harness",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/kweaver-ai_kweaver-core.md",
    status: "candidate",
    tags: [
      "decision agents",
      "harness",
      "knowledge network",
      "TraceAI",
      "governance"
    ]
  },
  {
    name: "ClawProBench",
    repo: "suyoumo/ClawProBench",
    url: "https://github.com/suyoumo/ClawProBench",
    stars: 690,
    forks: 50,
    language: "Python",
    license: "Apache-2.0",
    report: "projects/241-clawprobench-live-openclaw-benchmark.md",
    pattern: "OpenClaw runtime task -> live scenario execution -> deterministic grading -> structured report -> leaderboard/profile selection",
    description: "ClawProBench is a live-first benchmark harness for evaluating LLM agents in the OpenClaw runtime with deterministic grading, profile selection and repeated-trial reliability.",
    stack: [
      "Python",
      "OpenClaw",
      "Benchmark"
    ],
    category: "Live OpenClaw Benchmark Harness",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/suyoumo_clawprobench.md",
    status: "candidate",
    tags: [
      "benchmark",
      "OpenClaw",
      "agent evaluation",
      "deterministic grading"
    ]
  }
];

export const projectGroups = [
  { title: '进化式代码 / AlphaEvolve 类', repos: ['algorithmicsuperintelligence/openevolve', 'inter-co/science-codeevolve', 'JARVIS-Xs/SE-Agent'] },
  { title: 'LLM 作为优化器', repos: ['google-deepmind/opro', 'carperai/openelm', 'google-deepmind/funsearch'] },
  { title: 'Agent 架构自动搜索', repos: ['ShengranHu/ADAS'] },
  { title: 'Agent 自进化系统', repos: ['modelscope/AgentEvolver', 'aiwaves-cn/agents', 'JarvisPei/SCOPE'] },
  { title: '反思 / 精炼经典范式', repos: ['noahshinn/reflexion', 'madaan/self-refine'] },
  { title: '安全、评判与数据/模型自进化', repos: ['ZJU-LLM-Safety/DARWIN', 'OPPO-Mente-Lab/LLM-Self-Judge'] },
  { title: '声明式 Prompt 优化', repos: ['stanfordnlp/dspy'] },
  { title: '多 Agent 协作框架', repos: ['FoundationAgents/MetaGPT', 'crewAIInc/crewAI', 'microsoft/autogen', 'camel-ai/camel', 'OpenBMB/AgentVerse'] },
  { title: '图式 Agent 编排', repos: ['langchain-ai/langgraph'] },
  { title: 'AI 软件工程', repos: ['Significant-Gravitas/AutoGPT', 'princeton-nlp/SWE-agent', 'All-Hands-AI/OpenHands', 'stitionai/devika', 'OpenDevin/OpenDevin'] },
  { title: 'AutoML / ML 知识驱动', repos: ['DeepAuto-AI/automl-agent', 'microsoft/CoML'] },
  { title: '反射式进化搜索', repos: ['ai4co/reevo', 'xai-liacs/LLaMEA'] },
  { title: '进化式 Prompt/上下文优化', repos: ['beeevita/EvoPrompt'] },
  { title: '进化式多 Agent 系统', repos: ['siyuyuan/evoagent', 'EvoAgentX/EvoAgentX', 'EverMind-AI/EverOS'] },
  { title: 'LLM 驱动进化计算', repos: ['Genentech/OpenTreeSearch', 'wuxingyu-ai/LLM4EC', 'FeiLiu36/LLM4Opt', 'xiaofangxd/LLM_EA', 'alfa-group/tutorial_gp_llm'] },
  { title: '质量多样性优化', repos: ['icaros-usc/pyribs'] },
  { title: '经典进化算法框架', repos: ['DEAP/deap', 'CMA-ES/pycma', 'facebookresearch/nevergrad'] },
  { title: 'AutoML 框架', repos: ['automl/auto-sklearn'] },
  { title: '自进化 Agent 综述', repos: ['CharlesQ9/Self-Evolving-Agents', 'Zesearch/self-improvement-llm'] },
  { title: 'LLM Agent 优化', repos: ['YoungDubbyDu/LLM-Agent-Optimization'] },
  { title: '代码模型与评测', repos: ['CodeFuse-ML/awesome-code-llm', 'THUDM/AgentBench', 'ai4co/rl4co', 'ai4co/awesome-fm4co', 'paradigmxyz/evmbench'] },
  { title: '遗传编程', repos: ['pureples/pureples'] }
  ,{ title: '多 Agent 协作平台 (Round 4)', repos: ['ag2ai/ag2', 'OpenBMB/ChatDev', 'xlang-ai/OpenAgents', 'TransformerOptimus/SuperAGI', 'phidatahq/phidata', 'future-agi/future-agi'] }
  ,{ title: 'LLM 应用开发平台', repos: ['langgenius/dify', 'langflow-ai/langflow', 'FlowiseAI/Flowise', 'dataelement/bisheng', 'n8n-io/n8n'] }
  ,{ title: 'Agent 评测基准', repos: ['SWE-bench/SWE-bench', 'xlang-ai/OSWorld', 'web-arena-x/webarena', 'InternLM/WildClawBench', 'Agenta-AI/agenta', 'shareAI-lab/kbench', 'paradigmxyz/evmbench'] }
  ,{ title: 'LLM 基础设施', repos: ['BerriAI/litellm', 'ollama/ollama', 'google-gemini/gemini-cli', 'open-webui/open-webui', 'e2b-dev/e2b'] }
  ,{ title: 'Agent Skills / Memory / Harness', repos: ['microsoft/waza', 'mgechev/skillgrade', 'mgechev/skills-best-practices', 'webmaxru/Agent-Skills', 'Orchestra-Research/AI-research-SKILLs', 'iliaal/ai-skills', 'wazionapps/nexo', 'razroo/state-trace', 'google-gemini/gemini-cli', 'open-gitagent/gitagent', 'NirDiamant/Agent_Memory_Techniques', 'shareAI-lab/kbench', 'paradigmxyz/evmbench', 'paradigmxyz/centaur', 'cuga-project/cuga-agent', 'AutoX-AI-Labs/AutoR', 'Chorus-AIDLC/Chorus', 'kweaver-ai/kweaver-core', 'suyoumo/ClawProBench'] }
  ,{ title: 'Production Agent Runtimes With Evolution Substrate', repos: ['agent0ai/agent-zero', 'elizaOS/eliza', 'TransformerOptimus/SuperAGI', 'paradigmxyz/centaur'] }
  ,{ title: 'Self-Referential Coding Agents', repos: ['MaximeRobeyns/self_improving_coding_agent', 'JARVIS-Xs/SE-Agent', 'algorithmicsuperintelligence/openevolve', 'facebookresearch/HyperAgents'] }
  ,{ title: 'In-Situ Tool Evolution And Agent Control', repos: ['YunjueTech/Yunjue-Agent', 'RangeKing/self-evolving-agent', 'gofenix/nex-agent', 'swapedoc/hermes2anti', 'vilmire/adhdev'] }
  ,{ title: 'Agent 框架 (Round 4)', repos: ['reworkd/AgentGPT', 'yoheinakajima/babyagi', 'cheshire-cat-ai/core', 'huggingface/smolagents', 'Chainlit/chainlit', 'smol-ai/developer'] }
  ,{ title: 'Agent 研究综述 (Round 4)', repos: ['XMUDeepLIT/Awesome-Self-Evolving-Agents', 'luo-junyu/Awesome-Agent-Papers', 'Zijian-Ni/awesome-ai-agents-2026'] }
];
