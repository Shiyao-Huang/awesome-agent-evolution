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
    name: "WildClawBench",
    repo: "InternLM/WildClawBench",
    url: "https://github.com/InternLM/WildClawBench",
    stars: 408,
    forks: "37",
    language: "Python",
    license: "MIT",
    report: "projects/245-wildclawbench-authentic-real-world-agent-benchmark.md",
    pattern: "真实场景任务 -> 多轮动态交互 -> anti-overfitting 设计 -> 端到端评分 -> agent 能力画像",
    description: "WildClawBench 是面向 LLM Agent 的真实世界风格评测基准，强调动态、多轮、长程任务与 anti-overfitting 评估设计。",
    stack: [
      "Python",
      "Benchmark"
    ],
    category: "Agent 评测基准",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/internlm_wildclawbench.md",
    status: "candidate",
    tags: [
      "评测基准",
      "真实任务",
      "multi-turn",
      "anti-overfitting"
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
  },
  {
    name: "sd0x-dev-flow",
    repo: "sd0xdev/sd0x-dev-flow",
    url: "https://github.com/sd0xdev/sd0x-dev-flow",
    stars: 157,
    forks: 21,
    language: "TypeScript",
    license: "MIT",
    report: "projects/242-sd0x-dev-flow-claude-code-harness-safety-gates.md",
    pattern: "hook lifecycle -> state-machine gates -> dual-review approvals -> fail-closed enforcement -> reusable skill pack",
    description: "sd0x-dev-flow is a harness layer for Claude Code with dual-review gates, state-machine controls and fail-closed safety for coding-agent workflows.",
    stack: [
      "JavaScript",
      "TypeScript",
      "Claude Code hooks"
    ],
    category: "Claude Code Harness Safety Runtime",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/sd0xdev_sd0x-dev-flow.md",
    status: "candidate",
    tags: [
      "harness",
      "Claude Code",
      "safety gates",
      "skill orchestration",
      "agent workflow"
    ]
  },
  {
    name: "Utah",
    repo: "inngest/utah",
    url: "https://github.com/inngest/utah",
    stars: 116,
    forks: 2,
    language: "TypeScript",
    license: "Apache-2.0",
    report: "projects/243-utah-event-driven-agent-harness.md",
    pattern: "incoming event -> think/act/observe loop -> durable retries and singleton control -> memory/session trace updates -> channel response",
    description: "Utah is a universally triggered agent harness built on Inngest events with durable retries and local worker execution for think-act-observe loops.",
    stack: [
      "TypeScript",
      "Inngest",
      "pi-ai",
      "skills"
    ],
    category: "Event-Driven Agent Harness Runtime",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/inngest_utah.md",
    status: "candidate",
    tags: [
      "harness",
      "event-driven",
      "Inngest",
      "agent memory",
      "skills"
    ]
  },
  {
    name: "Meta Harness",
    repo: "SuperagenticAI/metaharness",
    url: "https://github.com/SuperagenticAI/metaharness",
    stars: 102,
    forks: 11,
    language: "Python",
    license: "Repository LICENSE file",
    report: "projects/244-metaharness-benchmark-driven-harness-evolution.md",
    pattern: "propose harness change -> run benchmark matrix -> compare score/runtime/cost -> keep best candidate -> persist ledger",
    description: "Meta Harness is a benchmark-driven outer loop for coding-agent harness optimization, with reproducible candidate ledgers and run evidence.",
    stack: [
      "Python",
      "Codex CLI",
      "Ollama benchmark harness"
    ],
    category: "Benchmark-Driven Harness Evolution Toolkit",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/superagenticai_metaharness.md",
    status: "candidate",
    tags: [
      "benchmark harness",
      "Codex CLI",
      "Ollama",
      "proposal ledger",
      "agent optimization"
    ]
  },
  {
    name: "Supermemory",
    repo: "supermemoryai/supermemory",
    url: "https://github.com/supermemoryai/supermemory",
    stars: 22700,
    forks: 2100,
    language: "TypeScript",
    license: "MIT",
    report: "projects/246-supermemory-open-memory-infrastructure.md",
    pattern: "chat/browser context ingest -> memory indexing -> retrieval scoring -> personalization -> downstream agent loop reuse",
    description: "Supermemory 是开源 AI memory 基础设施，把聊天与浏览上下文沉淀为可检索、可复用的长期记忆层。",
    stack: [
      "TypeScript",
      "Memory Infrastructure",
      "Postgres",
      "Redis"
    ],
    category: "Open AI Memory Infrastructure",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/supermemoryai_supermemory.md",
    status: "candidate",
    tags: [
      "memory substrate",
      "retrieval",
      "personalization",
      "agent memory",
      "infra"
    ]
  },
  {
    name: "FlagoS Skills",
    repo: "flagos-ai/skills",
    url: "https://github.com/flagos-ai/skills",
    stars: 12,
    forks: 11,
    language: "Python",
    license: "Apache-2.0",
    report: "projects/247-flagos-skills-open-agent-skill-registry.md",
    pattern: "skill package spec -> registry publishing -> install hooks -> versioning -> cross-agent reuse",
    description: "FlagoS skills 提供开源 AI agent 技能注册表和包格式，把技能资产变成可发布、可安装、可复用模块。",
    stack: [
      "Python",
      "Skill Registry",
      "Package Tooling"
    ],
    category: "Open Agent Skill Registry",
    lastPushed: "2026-05-26T00:00:00Z",
    localPath: "raw-github/flagos-ai_skills.md",
    status: "candidate",
    tags: [
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
            "stars": 1200,
            "forks": 302,
            "language": "PDDL",
            "license": "Apache-2.0",
            "report": "projects/248-skillsbench-agent-skills-benchmark.md",
            "pattern": "task + skill set -> agent run -> deterministic verifier scoring -> artifact/leaderboard export -> iteration and comparison",
            "description": "SkillsBench is a gym-style benchmark framework for measuring how well agents use reusable skills across multi-step tasks.",
            "stack": [
                    "PDDL",
                    "Python",
                    "Shell",
                    "TypeScript",
                    "JavaScript",
                    "Scala"
            ],
            "category": "Agent Skills Benchmark Harness",
            "lastPushed": "2026-05-26T00:00:00Z",
            "localPath": "raw-github/benchflow-ai_skillsbench.md",
            "status": "candidate",
            "tags": [
                    "benchmark",
                    "skills",
                    "evaluation harness",
                    "agent reliability",
                    "task composition"
            ]
    },
    {
            "name": "Meta-Harness (Stanford IRIS)",
            "repo": "stanford-iris-lab/meta-harness",
            "url": "https://github.com/stanford-iris-lab/meta-harness",
            "stars": 959,
            "forks": 92,
            "language": "Python",
            "license": "MIT",
            "report": "projects/249-stanford-meta-harness-framework.md",
            "pattern": "define domain spec -> search harness candidates -> run reference experiments -> compare outcomes -> retain stronger harness",
            "description": "Meta-Harness provides reference code for automated search over model harnesses, including terminal benchmark scaffold evolution and text-classification memory-system search.",
            "stack": [
                    "Python",
                    "Shell"
            ],
            "category": "Meta-Harness Framework and Reference Experiments",
            "lastPushed": "2026-05-26T00:00:00Z",
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
            "name": "Hermes Agent Meta-Harness",
            "repo": "howdymary/hermes-agent-metaharness",
            "url": "https://github.com/howdymary/hermes-agent-metaharness",
            "stars": 86,
            "forks": 9,
            "language": "Python",
            "license": "MIT",
            "report": "projects/250-hermes-agent-metaharness-outer-loop.md",
            "pattern": "select candidate -> evaluate on TBLite/TB2 -> parse archives -> compare baseline vs candidate -> update frontier",
            "description": "Hermes Agent Meta-Harness is a standalone outer-loop evaluator that optimizes Hermes benchmark harness candidates without modifying model weights.",
            "stack": [
                    "Python"
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
            "pattern": "register tools once -> normalize json schema and response shape -> lazy provider adapter import -> run identical prompts across OpenAI/Claude backends for comparison",
            "description": "evalops/agent-harness is a lightweight adapter that lets one tool registry run across OpenAI Agents SDK and Anthropic Claude Agent SDK backends.",
            "stack": [
                    "Python",
                    "Bazel",
                    "OpenAI-Agents",
                    "Claude-Agent-SDK"
            ],
            "category": "Cross-Provider Agent Harness Adapter",
            "lastPushed": "2026-05-27T00:00:00Z",
            "localPath": "raw-github/evalops_agent-harness.md",
            "status": "candidate",
            "tags": [
                    "harness",
                    "provider swap",
                    "evaluation",
                    "mcp",
                    "python"
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
            "stars": 13900,
            "forks": 1300,
            "language": "Python",
            "license": "MIT",
            "report": "projects/261-browser-harness-self-healing-web-agent-runtime.md",
            "pattern": "connect llm directly to live browser cdp -> patch missing helpers in agent-workspace during runs -> domain skill playbooks by site -> iteratively improve execution reliability",
            "description": "browser-use/browser-harness connects LLM agents to real browsers through a thin editable CDP harness and encourages run-time self-healing helper generation.",
            "stack": [
                    "Python",
                    "CDP",
                    "Chrome Debugging",
                    "Playwright"
            ],
            "category": "Self-Healing Browser Agent Harness",
            "lastPushed": "2026-05-27T00:00:00Z",
            "localPath": "raw-github/browser-use_browser-harness.md",
            "status": "candidate",
            "tags": [
                    "browser harness",
                    "self-healing",
                    "cdp",
                    "automation",
                    "agent runtime"
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
            "stars": 423,
            "forks": 29,
            "language": "Markdown",
            "license": "Unknown",
            "report": "projects/265-awesome-agent-harness-autojunjie-curation.md",
            "pattern": "collect harness repositories and papers -> classify by benchmark and runtime concerns -> provide quick browse path for reproducibility and safety trends -> keep ecosystem update cadence visible by commit activity",
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
                    "awesome-list",
                    "benchmark",
                    "agent-eval",
                    "curation"
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
            "stars": 45,
            "forks": 4,
            "language": "Python",
            "license": "CC-BY-SA-4.0",
            "report": "projects/271-best-of-agent-harnesses-ranked-index.md",
            "pattern": "collect harness projects -> score and rank ecosystem coverage -> expose category tags and update cadence -> provide comparative entrypoint for reliability-oriented harness selection",
            "description": "best-of-Agent-Harnesses curates and ranks 100+ agent harness projects to provide a comparative map of harness engineering options.",
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
            "stars": 1100,
            "forks": 100,
            "language": "Python",
            "license": "MIT",
            "report": "projects/272-skillopt-self-evolving-agent-skills.md",
            "pattern": "trajectory-driven skill edits -> validation-gated updates -> epoch/batch-style skill training loop -> deployable best_skill artifacts for frozen-agent workflows",
            "description": "SkillOpt trains reusable natural-language skills for frozen LLM agents through validation-gated iterative optimization loops.",
            "stack": [
                    "Python",
                    "HTML",
                    "Skill Training Loops"
            ],
            "category": "Self-Evolving Agent Skill Optimizer",
            "lastPushed": "2026-05-28T00:00:00Z",
            "localPath": "raw-github/microsoft_skillopt.md",
            "status": "candidate",
            "tags": [
                    "skill",
                    "self-evolving",
                    "optimizer",
                    "agent-training",
                    "workflow"
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
            "forks": 51,
            "language": "Python",
            "license": "MIT",
            "report": "projects/281-redis-agent-memory-server-runtime.md",
            "pattern": "agent event and interaction signals -> Redis-backed memory storage and retrieval -> MCP server exposes memory operations to agents -> memory context reused in downstream task loops",
            "description": "agent-memory-server is Redis-maintained memory middleware that gives AI agents fast, persistent, and flexible context memory through an MCP service.",
            "stack": [
                    "Python",
                    "Redis",
                    "MCP Memory Service"
            ],
            "category": "Agent Memory Runtime and Context Service",
            "lastPushed": "2026-05-28T00:00:00Z",
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
                    "memory",
                    "sqlite",
                    "markdown",
                    "longmemeval",
                    "agent-state"
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
  ,{ title: 'Agent Skills / Memory / Harness', repos: ['microsoft/waza', 'mgechev/skillgrade', 'mgechev/skills-best-practices', 'webmaxru/Agent-Skills', 'Orchestra-Research/AI-research-SKILLs', 'iliaal/ai-skills', 'wazionapps/nexo', 'razroo/state-trace', 'google-gemini/gemini-cli', 'open-gitagent/gitagent', 'NirDiamant/Agent_Memory_Techniques', 'shareAI-lab/kbench', 'paradigmxyz/evmbench', 'paradigmxyz/centaur', 'cuga-project/cuga-agent', 'AutoX-AI-Labs/AutoR', 'Chorus-AIDLC/Chorus', 'kweaver-ai/kweaver-core', 'suyoumo/ClawProBench', 'sd0xdev/sd0x-dev-flow', 'inngest/utah', 'SuperagenticAI/metaharness', 'supermemoryai/supermemory', 'flagos-ai/skills', 'mem9-ai/mem9', 'CortexReach/memory-lancedb-pro', 'garrytan/gbrain', 'sunnja69/akephalos', 'InternScience/InternAgent', 'OpenBMB/ClawXMemory', 'UnicomAI/hexagent', 'evalops/agent-harness', 'harness/harness-evals', 'browser-use/browser-harness', 'junminhong/awesome-agent-skills', 'mindfold-ai/Trellis', 'Picrew/awesome-agent-harness', 'AutoJunjie/awesome-agent-harness', 'shareAI-lab/learn-claude-code', 'murataslan1/ai-agent-benchmark', 'holaboss-ai/holaOS', 'langchain-ai/deepagents', 'coleam00/Archon', 'RyanAlberts/best-of-Agent-Harnesses', 'microsoft/SkillOpt', 'Tencent/TencentDB-Agent-Memory', 'QuantaAlpha/GitTaskBench', 'openclaw/clawhub', 'VoltAgent/awesome-openclaw-skills', 'ZeroLu/awesome-openclaw', 'QuantClaw/QuantClaw', 'InternScience/Awesome-Scientific-Skills', 'TIGER-AI-Lab/ClawBench', 'redis/agent-memory-server', 'langchain-ai/memory-agent', 'iflytek/skillhub', 'memodb-io/Acontext', 'nemori-ai/nemori', 'Alienfader/continuity-benchmarks', 'sachinsharma9780/memweave', 'qpiai/Proced_mem_bench', 'Modelcode-ai/mcode-benchmark', 'sourcegraph/CodeScaleBench', 'mlcommons/modelbench', 'BerriAI/self-improving-agent', 'LLMSecurity/awesome-agent-skills-security', 'ComposioHQ/awesome-agent-clis', 'Olshansk/agent-skills', 'axiomhq/agent-memory', 'FreedomIntelligence/Tiermem', 'itgoyo/awesome-agent-skills', 'back1ply/agent-skill-loader', 'Da1yuqin/SEAD', 'ai-agents-2030/darwin-mobile-agent', 'YuanchenBei/Mem-Gallery', 'InfiAgent/InfiAgent'] }
  ,{ title: 'Production Agent Runtimes With Evolution Substrate', repos: ['agent0ai/agent-zero', 'elizaOS/eliza', 'TransformerOptimus/SuperAGI', 'paradigmxyz/centaur'] }
  ,{ title: 'Self-Referential Coding Agents', repos: ['MaximeRobeyns/self_improving_coding_agent', 'JARVIS-Xs/SE-Agent', 'algorithmicsuperintelligence/openevolve', 'facebookresearch/HyperAgents'] }
  ,{ title: 'In-Situ Tool Evolution And Agent Control', repos: ['YunjueTech/Yunjue-Agent', 'RangeKing/self-evolving-agent', 'gofenix/nex-agent', 'swapedoc/hermes2anti', 'vilmire/adhdev'] }
  ,{ title: 'Agent 框架 (Round 4)', repos: ['reworkd/AgentGPT', 'yoheinakajima/babyagi', 'cheshire-cat-ai/core', 'huggingface/smolagents', 'Chainlit/chainlit', 'smol-ai/developer'] }
  ,{ title: 'Agent 研究综述 (Round 4)', repos: ['XMUDeepLIT/Awesome-Self-Evolving-Agents', 'luo-junyu/Awesome-Agent-Papers', 'Zijian-Ni/awesome-ai-agents-2026'] }
];
