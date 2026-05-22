export type ResearchItem = {
  title: string;
  year: string;
  insight: string;
  tags: string[];
  url?: string;
  cluster?: string;
  relation?: string;
  slug?: string;
};

export const featuredResearch: ResearchItem[] = [
  {
    title: 'Self-Refine：基于自反馈的迭代式优化',
    year: '2023',
    insight: '同一 LLM 生成答案、批评答案并在推理期迭代改写，是轻量 Self Evolve 循环的基线模式。',
    tags: ['自反馈', '迭代优化', '推理期改进'],
    url: 'https://arxiv.org/abs/2303.17651',
    cluster: 'LLM 自我改进',
    relation: '生成 → 反馈 → 修正',
    slug: 'self-refine'
  },
  {
    title: 'Reflexion：带语言强化学习的智能体',
    year: '2023',
    insight: '把失败反馈转化为自然语言反思并写入记忆，让后续任务在不更新权重的情况下改进。',
    tags: ['反思记忆', '智能体', '语言强化学习'],
    url: 'https://arxiv.org/abs/2303.11366',
    cluster: 'LLM 自我改进',
    relation: '反馈 → 反思 → 记忆 → 重试'
  },
  {
    title: 'Teaching LLMs to Self-Debug',
    year: '2023',
    insight: '把执行结果、测试和调试解释作为程序修复信号，直接支撑代码智能体的回归门禁。',
    tags: ['Self-Debug', '代码修复', '执行反馈'],
    url: 'https://arxiv.org/abs/2304.05128',
    cluster: 'LLM 自我改进',
    relation: '代码 → 测试 → 失败解释 → 补丁'
  },
  {
    title: 'SPIN：Self-Play Fine-Tuning',
    year: '2024',
    insight: '通过自博弈微调把弱模型推向更强模型，把自我改进从提示期推进到训练期。',
    tags: ['Self-Play', '微调', '模型级进化'],
    url: 'https://arxiv.org/abs/2401.01335',
    cluster: 'LLM 自我改进',
    relation: '自博弈 → 偏好数据 → 微调'
  },
  {
    title: 'OPRO：Large Language Models as Optimizers',
    year: '2023',
    insight: '用自然语言描述目标和历史分数，让 LLM 基于反馈提出新候选，是通用“LLM 即优化器”模板。',
    tags: ['LLM 优化器', '标量反馈', '候选生成'],
    url: 'https://arxiv.org/abs/2309.03409',
    cluster: '进化计算 + LLM',
    relation: '历史候选 + 分数 → 新候选'
  },
  {
    title: 'FunSearch：LLM + 评估器的程序进化',
    year: '2023',
    insight: '把 LLM 与自动评估器组合，进化数学和科学发现程序，是“生成器 + 验证器 + 谱系”的旗舰案例。',
    tags: ['程序进化', '评估器', '科学发现'],
    url: 'https://www.nature.com/articles/s41586-023-06924-6',
    cluster: '进化计算 + LLM',
    relation: '程序候选 → 评估器 → 种群保留'
  },
  {
    title: 'AutoML-Agent：多 Agent 全流程 AutoML',
    year: '2024',
    insight: '将数据检索、预处理、建模、评估和部署拆成专用 Agent，最接近产品化 Self Evolve 工作流。',
    tags: ['AutoML', '多智能体', '流水线验证'],
    url: 'https://arxiv.org/abs/2410.02958',
    cluster: 'AutoML + LLM',
    relation: '任务规格 → Agent 流水线 → 评估部署'
  },
  {
    title: 'EvoPrompting：代码级神经架构搜索',
    year: '2023',
    insight: '把语言模型作为架构代码的变异算子，用 Benchmark 选择候选，体现“架构即基因组”。',
    tags: ['NAS', '代码变异', '质量-多样性'],
    url: 'https://arxiv.org/abs/2302.14838',
    cluster: 'NAS + LLM',
    relation: '架构代码 → LLM 变异 → 基准选择'
  },
  {
    title: 'AutoGen / MetaGPT / CrewAI：Agent 编排底座',
    year: '2023+',
    insight: 'Agent 框架提供角色、工具和流程编排；Self Evolve 可在其上叠加评估器、记忆、谱系和回归防护。',
    tags: ['Agent 框架', '编排', '进化层'],
    cluster: 'Agent 框架进化',
    relation: '角色/工具/流程 → 评估 → 组织拓扑调整'
  },
  {
    title: 'Agent Symbolic Learning：符号反向传播驱动的自进化智能体',
    year: '2024',
    insight: '将智能体视为符号网络，用"语言梯度"在自然语言空间做反向传播，让提示词、工具和管线自动进化。NeurIPS 2024。',
    tags: ['符号学习', '语言梯度', '智能体进化'],
    url: 'https://arxiv.org/abs/2406.18532',
    cluster: 'LLM 自我改进',
    relation: '前向执行 → 语言损失 → 语言梯度反传 → 权重更新',
    slug: 'agent-symbolic-learning'
  },
  {
    title: 'Darwin Gödel Machine：开放式自进化 Agent 归档',
    year: '2025',
    insight: '结合达尔文进化与哥德尔机自引用，维护开放式 Agent 归档库。SWE-bench 20%→50%，Polyglot 14.2%→30.7%。',
    tags: ['开放式进化', '代码自修改', '哥德尔机'],
    url: 'https://arxiv.org/abs/2505.22954',
    cluster: 'Agent 自我进化',
    relation: '采样父代 → LLM 修改代码 → 评估 → 保留改进',
    slug: 'darwin-godel-machine'
  },
  {
    title: 'Gödel Agent：运行时 monkey patching 自修改',
    year: '2025',
    insight: '通过 monkey patching 实现 Agent 在运行时的自修改，结合自我评估与进化策略动态调整自身代码。',
    tags: ['运行时修改', 'monkey patching', '自评估'],
    url: 'https://arxiv.org/abs/2504.10322',
    cluster: 'Agent 自我进化',
    relation: '执行 → 评估 → 代码补丁 → 重新执行',
    slug: 'godel-agent'
  },
  {
    title: 'ADAS：智能体系统自动设计',
    year: '2025',
    insight: '在图灵完备的 Python 代码空间中搜索最优 Agent 架构，发现的 Agent 跨领域、跨模型迁移且超越人工设计 SOTA。ICLR 2025。',
    tags: ['元搜索', '图灵完备', '架构发现'],
    url: 'https://arxiv.org/abs/2408.08435',
    cluster: 'Agent 自我进化',
    relation: '元 Agent 编写代码 → 评估 → 归档 → 引导搜索',
    slug: 'adas'
  },
  {
    title: 'AlphaEvolve：Gemini 驱动的进化式算法发现',
    year: '2025',
    insight: '结合 Gemini Flash（广度）+ Pro（深度）做 MAP-Elites 质量多样性搜索。56 年来首次改进 Strassen 矩阵乘法。Google DeepMind。',
    tags: ['MAP-Elites', '质量多样性', '算法发现'],
    url: 'https://arxiv.org/abs/2506.13131',
    cluster: '进化计算 + LLM',
    relation: '种群 → 双模型变异 → MAP-Elites 选择 → 归档更新',
    slug: 'alphaevolve'
  },
  {
    title: 'Absolute Zero：零数据自博弈推理强化学习',
    year: '2025',
    insight: '单一模型同时提出任务并求解，仅用自生成数据进行自博弈 RL 训练，彻底消除对外部标注数据的依赖。NeurIPS 2025。',
    tags: ['自博弈', '零数据', '任务生成'],
    url: 'https://arxiv.org/abs/2505.23770',
    cluster: 'LLM 自我改进',
    relation: '任务生成 → 求解 → 代码验证 → RL 训练',
    slug: 'absolute-zero'
  },
  {
    title: 'SelfEvolve：自生成知识 + 迭代自调试',
    year: '2023',
    insight: 'LLM 自生成 API 文档作为知识来源，然后在沙盒中执行代码并将错误反馈回 LLM 进行迭代修复。',
    tags: ['自调试', '沙盒执行', '文档生成'],
    url: 'https://arxiv.org/abs/2306.02907',
    cluster: 'LLM 自我改进',
    relation: '知识生成 → 代码生成 → 执行 → 错误反馈 → 修复',
    slug: 'selfevolve'
  },
  {
    title: 'RISE：推理期自编辑强化学习',
    year: '2024',
    insight: '通过迭代式自编辑（self-edit）让 LLM 在推理时修改自身输出，结合 RL 训练让模型学会何时及如何修改。',
    tags: ['推理期修改', '自编辑', 'RL'],
    url: 'https://arxiv.org/abs/2403.06312',
    cluster: 'LLM 自我改进',
    relation: '生成 → 自编辑 → RL 反馈 → 模型改进',
    slug: 'rise'
  },
  {
    title: 'RAGEN：轨迹级 Agent 强化学习',
    year: '2025',
    insight: '在轨迹级别对 Agent 进行强化学习训练，让 Agent 从完整交互历史中学习策略改进。',
    tags: ['轨迹训练', 'Agent RL', '策略进化'],
    url: 'https://arxiv.org/abs/2504.14773',
    cluster: 'Agent 自我进化',
    relation: '交互轨迹 → RL 训练 → 策略更新 → 重试',
    slug: 'ragen'
  },
  {
    title: 'ReVeal：多轮代码 RL 持续改进',
    year: '2024',
    insight: '多轮代码生成与验证的 RL 框架，让模型在迭代修复循环中持续改进代码质量。Google DeepMind。',
    tags: ['代码 RL', '多轮修复', '持续改进'],
    url: 'https://arxiv.org/abs/2312.05315',
    cluster: 'LLM 自我改进',
    relation: '代码生成 → 测试验证 → RL 反馈 → 重新生成',
    slug: 'reveal'
  }
];

export const researchClusters = [
  {
    title: 'AutoML + LLM',
    summary: '从自然语言任务规格生成机器学习流水线，并用指标、部署检查和实验历史持续改进。',
    items: ['AutoML-GPT', 'AutoML-Agent', 'LLM + AutoML', 'AutoM3L']
  },
  {
    title: 'NAS + LLM',
    summary: '把神经架构或代码表示为可变异基因组，用 LLM 生成候选并用 NAS 基准筛选。',
    items: ['EvoPrompting', 'LLMatic', 'LLaMA-NAS', 'NADER']
  },
  {
    title: 'LLM 自我改进',
    summary: '围绕输出、轨迹、反思记忆和模型权重形成经验飞轮。',
    items: ['Self-Refine', 'Reflexion', 'Self-Debug', 'SPIN', 'Agent Symbolic Learning', 'Absolute Zero', 'SelfEvolve', 'RISE', 'ReVeal']
  },
  {
    title: '进化计算 + LLM',
    summary: '把 LLM 作为优化器、变异器或重组器，用适应度函数维护候选谱系。',
    items: ['OPRO', 'LLM as Evolutionary Optimizer', 'FunSearch', 'AlphaEvolve', 'ReEvo', 'LLaMEA']
  },
  {
    title: 'Agent 自我进化',
    summary: 'Agent 在代码层面自修改、自搜索架构、自评估，实现开放式能力增长。',
    items: ['ADAS', 'DGM', 'Gödel Agent', 'RAGEN', 'Agent Symbolic Learning']
  },
  {
    title: 'Agent 框架进化',
    summary: '在 AutoGPT、MetaGPT、AutoGen、CrewAI 等编排底座上补齐评估、记忆和进化层。',
    items: ['AutoGPT', 'MetaGPT', 'AutoGen', 'CrewAI', 'AutoAgents']
  }
];
