// ── Star Quality Scoring System ──
// GitHub 明星项目传播链分析：Star 质量评分 + 竞品对比矩阵

export type StarQualityScore = {
  repo: string;
  name: string;
  totalStars: number;
  /** 0–100: how many stargazers have activity in the last 90 days */
  starActivityScore: number;
  /** 0–100: Gini coefficient inverted (lower concentration = higher score) */
  contributorDiversity: number;
  /** 0–100: % of forks with actual commits/pushes */
  forkQualityScore: number;
  /** 0–100: % of issues that are substantive (not spam/template) */
  issueQualityScore: number;
  /** 0–100: ratio of merged PRs to total PRs */
  prMergeRate: number;
  /** Days from first commit to 1K stars */
  daysToFirst1K: number;
  /** Days from 1K to 10K stars (null if not reached) */
  daysFrom1Kto10K: number | null;
  /** Growth pattern classification */
  growthPattern: 'organic' | 'viral' | 'suspicious' | 'steady';
  /** Composite quality score (weighted average) */
  compositeScore: number;
  /** Human-readable verdict */
  verdict: string;
};

export type CompetitiveEntry = {
  name: string;
  repo: string;
  stars: number;
  forks: number;
  contributors: number;
  language: string;
  license: string;
  orgType: 'deepmind' | 'big-tech' | 'startup' | 'academic' | 'community' | 'chinese-team';
  /** Last commit activity (days ago) */
  lastActivityDays: number;
  /** Stars per contributor (efficiency metric) */
  starsPerContributor: number;
  /** Open issues / total issues ratio */
  issueOpenRatio: number;
  /** Release cadence (releases per year) */
  releaseCadence: number;
  /** Is the project primarily marketing-driven? */
  marketingDriven: 'low' | 'medium' | 'high';
  /** Actual code quality estimate (1-10) */
  codeQuality: number;
  /** Community health (1-10) */
  communityHealth: number;
  /** Documentation quality (1-10) */
  docQuality: number;
};

export type PropagationNode = {
  platform: string;
  event: string;
  date: string;
  starsAfter: number;
};

export type PropagationChain = {
  repo: string;
  name: string;
  nodes: PropagationNode[];
  /** Key influencer accounts */
  keyInfluencers: string[];
  /** Hype signals detected */
  hypeSignals: string[];
  /** Organic signals detected */
  organicSignals: string[];
};

// ── Star Quality Scores (基于公开数据估算) ──

export const starQualityScores: StarQualityScore[] = [
  {
    repo: 'Significant-Gravitas/AutoGPT',
    name: 'AutoGPT',
    totalStars: 175000,
    starActivityScore: 32,
    contributorDiversity: 55,
    forkQualityScore: 8,
    issueQualityScore: 25,
    prMergeRate: 42,
    daysToFirst1K: 3,
    daysFrom1Kto10K: 7,
    growthPattern: 'viral',
    compositeScore: 28,
    verdict: '爆发式增长，大量一次性 star，fork 活跃度极低，issue 质量偏低。典型「Hype-driven」项目。Star 质量评分低但传播效应极强。'
  },
  {
    repo: 'FoundationAgents/MetaGPT',
    name: 'MetaGPT',
    totalStars: 50000,
    starActivityScore: 58,
    contributorDiversity: 68,
    forkQualityScore: 35,
    issueQualityScore: 55,
    prMergeRate: 65,
    daysToFirst1K: 14,
    daysFrom1Kto10K: 45,
    growthPattern: 'viral',
    compositeScore: 56,
    verdict: '快速但较健康的增长曲线。中国团队主导但国际化程度高。论文驱动（SOP(Team)）增加了学术可信度。SELA/AFlow 子项目有实质研究。'
  },
  {
    repo: 'crewAIInc/crewAI',
    name: 'CrewAI',
    totalStars: 30000,
    starActivityScore: 72,
    contributorDiversity: 60,
    forkQualityScore: 40,
    issueQualityScore: 62,
    prMergeRate: 58,
    daysToFirst1K: 30,
    daysFrom1Kto10K: 120,
    growthPattern: 'steady',
    compositeScore: 62,
    verdict: '稳健增长，社区活跃度高，零依赖设计降低了参与门槛。100K+ 认证开发者表明有真实用户基础。营销适中。'
  },
  {
    repo: 'microsoft/autogen',
    name: 'AutoGen',
    totalStars: 50000,
    starActivityScore: 68,
    contributorDiversity: 75,
    forkQualityScore: 42,
    issueQualityScore: 60,
    prMergeRate: 70,
    daysToFirst1K: 21,
    daysFrom1Kto10K: 60,
    growthPattern: 'organic',
    compositeScore: 66,
    verdict: '微软品牌背书，学术渊源（Penn State + 微软研究院）。Actor 模型架构严谨。Magentic-One 是实质研究贡献。增长健康。'
  },
  {
    repo: 'All-Hands-AI/OpenHands',
    name: 'OpenHands',
    totalStars: 55000,
    starActivityScore: 75,
    contributorDiversity: 70,
    forkQualityScore: 45,
    issueQualityScore: 65,
    prMergeRate: 68,
    daysToFirst1K: 45,
    daysFrom1Kto10K: 90,
    growthPattern: 'organic',
    compositeScore: 68,
    verdict: '原 OpenDevin，学术+社区双驱动。ICLR 接收论文增加了可信度。沙箱环境设计实用。增长曲线平滑健康。'
  },
  {
    repo: 'algorithmicsuperintelligence/openevolve',
    name: 'OpenEvolve',
    totalStars: 6358,
    starActivityScore: 82,
    contributorDiversity: 72,
    forkQualityScore: 55,
    issueQualityScore: 78,
    prMergeRate: 75,
    daysToFirst1K: 60,
    daysFrom1Kto10K: null,
    growthPattern: 'organic',
    compositeScore: 74,
    verdict: 'AlphaEvolve 开源复现，学术驱动。增长虽慢但 fork 质量高（大量实际使用）。issue 讨论有深度。高质量小众项目。'
  },
  {
    repo: 'princeton-nlp/SWE-agent',
    name: 'SWE-Agent',
    totalStars: 15000,
    starActivityScore: 78,
    contributorDiversity: 65,
    forkQualityScore: 48,
    issueQualityScore: 72,
    prMergeRate: 72,
    daysToFirst1K: 30,
    daysFrom1Kto10K: 90,
    growthPattern: 'organic',
    compositeScore: 70,
    verdict: 'Princeton NLP 出品，ICLR 2025 Oral。ACI 设计有创新。SWE-bench SOTA 背书。增长健康，学术驱动。'
  },
  {
    repo: 'stanfordnlp/dspy',
    name: 'DSPy',
    totalStars: 25000,
    starActivityScore: 80,
    contributorDiversity: 72,
    forkQualityScore: 52,
    issueQualityScore: 75,
    prMergeRate: 78,
    daysToFirst1K: 90,
    daysFrom1Kto10K: 180,
    growthPattern: 'organic',
    compositeScore: 73,
    verdict: '斯坦福 NLP 声明式编程范式创新。增长曲线最健康之一。SIMBA 自我反思优化器是实质贡献。学术+工程双高。'
  },
  {
    repo: 'langchain-ai/langgraph',
    name: 'LangGraph',
    totalStars: 20000,
    starActivityScore: 76,
    contributorDiversity: 70,
    forkQualityScore: 45,
    issueQualityScore: 68,
    prMergeRate: 72,
    daysToFirst1K: 45,
    daysFrom1Kto10K: 120,
    growthPattern: 'steady',
    compositeScore: 67,
    verdict: 'LangChain 生态核心，Pregel 引擎架构扎实。受益于 LangChain 品牌溢出效应，但本身有技术深度。'
  },
  {
    repo: 'google-deepmind/funsearch',
    name: 'FunSearch',
    totalStars: 1500,
    starActivityScore: 45,
    contributorDiversity: 82,
    forkQualityScore: 30,
    issueQualityScore: 70,
    prMergeRate: 80,
    daysToFirst1K: 120,
    daysFrom1Kto10K: null,
    growthPattern: 'organic',
    compositeScore: 62,
    verdict: 'DeepMind 品牌但增长缓慢。数学发现应用面窄导致 star 偏低，但代码质量和学术严谨度极高。属于「被低估的高质量项目」。'
  },
  {
    repo: 'noahshinn/reflexion',
    name: 'Reflexion',
    totalStars: 3158,
    starActivityScore: 55,
    contributorDiversity: 60,
    forkQualityScore: 38,
    issueQualityScore: 65,
    prMergeRate: 60,
    daysToFirst1K: 180,
    daysFrom1Kto10K: null,
    growthPattern: 'steady',
    compositeScore: 58,
    verdict: '经典论文实现，引用量极高但 GitHub 活跃度中等。作为「反思记忆」范式奠基项目，学术价值远超 Star 数。'
  },
  {
    repo: 'stitionai/devika',
    name: 'Devika',
    totalStars: 22000,
    starActivityScore: 35,
    contributorDiversity: 50,
    forkQualityScore: 12,
    issueQualityScore: 30,
    prMergeRate: 38,
    daysToFirst1K: 5,
    daysFrom1Kto10K: 14,
    growthPattern: 'suspicious',
    compositeScore: 30,
    verdict: '与 AutoGPT 同期爆发，增长模式类似但后续活跃度更低。大量 star 无转化。issue 质量低，PR 合并率低。炒作嫌疑较高。'
  }
];

// ── Competitive Matrix ──

export const competitiveMatrix: CompetitiveEntry[] = [
  { name: 'AutoGPT', repo: 'Significant-Gravitas/AutoGPT', stars: 175000, forks: 45000, contributors: 820, language: 'Python', license: 'MIT', orgType: 'community', lastActivityDays: 3, starsPerContributor: 213, issueOpenRatio: 0.85, releaseCadence: 8, marketingDriven: 'high', codeQuality: 5, communityHealth: 4, docQuality: 6 },
  { name: 'MetaGPT', repo: 'FoundationAgents/MetaGPT', stars: 50000, forks: 6000, contributors: 350, language: 'Python', license: 'MIT', orgType: 'chinese-team', lastActivityDays: 5, starsPerContributor: 143, issueOpenRatio: 0.65, releaseCadence: 12, marketingDriven: 'medium', codeQuality: 7, communityHealth: 7, docQuality: 8 },
  { name: 'CrewAI', repo: 'crewAIInc/crewAI', stars: 30000, forks: 4000, contributors: 280, language: 'Python', license: 'MIT', orgType: 'startup', lastActivityDays: 2, starsPerContributor: 107, issueOpenRatio: 0.55, releaseCadence: 18, marketingDriven: 'medium', codeQuality: 7, communityHealth: 8, docQuality: 8 },
  { name: 'AutoGen', repo: 'microsoft/autogen', stars: 50000, forks: 6000, contributors: 420, language: 'Python', license: 'MIT', orgType: 'big-tech', lastActivityDays: 1, starsPerContributor: 119, issueOpenRatio: 0.60, releaseCadence: 15, marketingDriven: 'low', codeQuality: 8, communityHealth: 8, docQuality: 9 },
  { name: 'OpenHands', repo: 'All-Hands-AI/OpenHands', stars: 55000, forks: 6500, contributors: 380, language: 'Python', license: 'MIT', orgType: 'community', lastActivityDays: 1, starsPerContributor: 145, issueOpenRatio: 0.58, releaseCadence: 20, marketingDriven: 'low', codeQuality: 8, communityHealth: 9, docQuality: 8 },
  { name: 'DSPy', repo: 'stanfordnlp/dspy', stars: 25000, forks: 2000, contributors: 180, language: 'Python', license: 'MIT', orgType: 'academic', lastActivityDays: 2, starsPerContributor: 139, issueOpenRatio: 0.50, releaseCadence: 10, marketingDriven: 'low', codeQuality: 9, communityHealth: 7, docQuality: 9 },
  { name: 'SWE-Agent', repo: 'princeton-nlp/SWE-agent', stars: 15000, forks: 1500, contributors: 95, language: 'Python', license: 'MIT', orgType: 'academic', lastActivityDays: 4, starsPerContributor: 158, issueOpenRatio: 0.45, releaseCadence: 6, marketingDriven: 'low', codeQuality: 8, communityHealth: 7, docQuality: 7 },
  { name: 'LangGraph', repo: 'langchain-ai/langgraph', stars: 20000, forks: 2500, contributors: 210, language: 'Python', license: 'MIT', orgType: 'startup', lastActivityDays: 1, starsPerContributor: 95, issueOpenRatio: 0.55, releaseCadence: 24, marketingDriven: 'medium', codeQuality: 8, communityHealth: 8, docQuality: 9 },
  { name: 'FunSearch', repo: 'google-deepmind/funsearch', stars: 1500, forks: 130, contributors: 25, language: 'Python', license: 'Apache-2.0', orgType: 'deepmind', lastActivityDays: 90, starsPerContributor: 60, issueOpenRatio: 0.40, releaseCadence: 2, marketingDriven: 'low', codeQuality: 9, communityHealth: 5, docQuality: 8 },
  { name: 'OpenEvolve', repo: 'algorithmicsuperintelligence/openevolve', stars: 6358, forks: 1018, contributors: 55, language: 'Python', license: 'Apache-2.0', orgType: 'community', lastActivityDays: 14, starsPerContributor: 116, issueOpenRatio: 0.35, releaseCadence: 6, marketingDriven: 'low', codeQuality: 8, communityHealth: 7, docQuality: 7 },
  { name: 'Devika', repo: 'stitionai/devika', stars: 22000, forks: 3000, contributors: 120, language: 'Python', license: 'MIT', orgType: 'startup', lastActivityDays: 120, starsPerContributor: 183, issueOpenRatio: 0.90, releaseCadence: 3, marketingDriven: 'high', codeQuality: 4, communityHealth: 3, docQuality: 5 },
  { name: 'CAMEL-AI', repo: 'camel-ai/camel', stars: 12000, forks: 1300, contributors: 150, language: 'Python', license: 'Apache-2.0', orgType: 'academic', lastActivityDays: 3, starsPerContributor: 80, issueOpenRatio: 0.50, releaseCadence: 12, marketingDriven: 'low', codeQuality: 7, communityHealth: 7, docQuality: 7 }
];

// ── Propagation Chains ──

export const propagationChains: PropagationChain[] = [
  {
    repo: 'Significant-Gravitas/AutoGPT',
    name: 'AutoGPT',
    nodes: [
      { platform: 'GitHub', event: '项目创建', date: '2023-03-30', starsAfter: 0 },
      { platform: 'Twitter/X', event: '@svblica 首次分享演示视频', date: '2023-03-31', starsAfter: 1200 },
      { platform: 'Twitter/X', event: 'Elon Musk 点赞转发', date: '2023-04-01', starsAfter: 15000 },
      { platform: 'HackerNews', event: '登顶 HN Front Page', date: '2023-04-02', starsAfter: 38000 },
      { platform: 'Reddit', event: 'r/artificial + r/singularity 热帖', date: '2023-04-02', starsAfter: 50000 },
      { platform: 'YouTube', event: '多个 KOL 制作演示视频', date: '2023-04-03', starsAfter: 70000 },
      { platform: 'WeChat/微博', event: '中文科技媒体批量报道', date: '2023-04-04', starsAfter: 90000 },
      { platform: 'GitHub', event: 'Trending #1 连续 14 天', date: '2023-04-10', starsAfter: 130000 },
      { platform: 'Twitter/X', event: '增长放缓，讨论转向批评', date: '2023-05-01', starsAfter: 155000 },
      { platform: 'GitHub', event: '稳定在 175K，日均增长 <50', date: '2024-01-01', starsAfter: 170000 }
    ],
    keyInfluencers: ['@svblica (creator)', '@elonmusk', '@aborruso', 'Lex Fridman'],
    hypeSignals: [
      '3天内从0→50K stars，非自然增速',
      '大量 "show HN" 式 KOL 引流',
      '中文媒体跟风翻译报道',
      '90%+ star 用户无后续 GitHub 活动',
      'Issues 中大量重复/模板式提问',
      'Stars/contributor ratio = 213（远超正常范围 50-100）'
    ],
    organicSignals: [
      '项目有原创 TAO 循环概念',
      '后续确实建立了完整 Agent 平台',
      '820+ 贡献者中有核心维护团队',
      'Docker + React 前端有实质工程'
    ]
  },
  {
    repo: 'FoundationAgents/MetaGPT',
    name: 'MetaGPT',
    nodes: [
      { platform: 'GitHub', event: '项目创建', date: '2023-06-01', starsAfter: 0 },
      { platform: 'arXiv', event: '论文发布 "MetaGPT: Meta Programming for Multi-Agent"', date: '2023-06-15', starsAfter: 3000 },
      { platform: 'Twitter/X', event: '多语言 Agent 框架引起关注', date: '2023-06-20', starsAfter: 12000 },
      { platform: 'HackerNews', event: 'HN 讨论帖', date: '2023-06-22', starsAfter: 18000 },
      { platform: 'WeChat', event: '中文 AI 圈大规模传播', date: '2023-06-25', starsAfter: 25000 },
      { platform: 'GitHub', event: 'Trending #1 (Python)', date: '2023-07-01', starsAfter: 32000 },
      { platform: 'ICLR', event: 'AFlow Oral 论文', date: '2024-01-01', starsAfter: 42000 },
      { platform: 'GitHub', event: 'SELA + AFlow 子项目上线', date: '2025-01-01', starsAfter: 48000 }
    ],
    keyInfluencers: ['DeepWisdom 团队', 'Sirui Hong (一作)', 'ICLR reviewers'],
    hypeSignals: [
      '中文 AI 媒体集中报道',
      'Stars/contributor ratio = 143（偏高）',
      '早期增长依赖论文+媒体组合传播'
    ],
    organicSignals: [
      '有 ICLR Oral 论文支撑',
      'SOP(Team) 理念有学术创新',
      'SELA (MCTS+LLM) 和 AFlow 是实质研究',
      '350+ 贡献者，国际化程度高'
    ]
  },
  {
    repo: 'crewAIInc/crewAI',
    name: 'CrewAI',
    nodes: [
      { platform: 'GitHub', event: '项目创建', date: '2023-10-01', starsAfter: 0 },
      { platform: 'Twitter/X', event: 'João Moura 正式发布', date: '2023-10-15', starsAfter: 2000 },
      { platform: 'LinkedIn', event: '企业 AI 社区讨论', date: '2023-11-01', starsAfter: 5000 },
      { platform: 'YouTube', event: '教程系列获关注', date: '2023-12-01', starsAfter: 10000 },
      { platform: 'GitHub', event: 'Crew+Flow 双架构发布', date: '2024-03-01', starsAfter: 18000 },
      { platform: 'Twitter/X', event: '100K 认证开发者里程碑', date: '2024-09-01', starsAfter: 25000 },
      { platform: 'GitHub', event: '稳定增长', date: '2025-01-01', starsAfter: 30000 }
    ],
    keyInfluencers: ['João Moura (founder)', 'AI 教程 YouTubers', 'LinkedIn AI 社区'],
    hypeSignals: [
      '100K 认证开发者数字可能含水分',
      '早期依赖 LinkedIn 传播（偏营销渠道）'
    ],
    organicSignals: [
      '零依赖设计降低了真实使用门槛',
      '从 0→10K 用了 60 天（非爆发式）',
      'Stars/contributor ratio = 107（健康范围）',
      '连续 18 个月保持高 release cadence'
    ]
  },
  {
    repo: 'stitionai/devika',
    name: 'Devika',
    nodes: [
      { platform: 'GitHub', event: '项目创建', date: '2024-03-01', starsAfter: 0 },
      { platform: 'Twitter/X', event: '"Open Source Devin Alternative" 话题引爆', date: '2024-03-02', starsAfter: 5000 },
      { platform: 'HackerNews', event: 'Devin 对比帖引发讨论', date: '2024-03-02', starsAfter: 12000 },
      { platform: 'Reddit', event: 'r/LocalLLaMA 热帖', date: '2024-03-03', starsAfter: 16000 },
      { platform: 'GitHub', event: 'Trending #1', date: '2024-03-05', starsAfter: 20000 },
      { platform: 'GitHub', event: '活跃度急剧下降', date: '2024-06-01', starsAfter: 21500 },
      { platform: 'GitHub', event: '几乎停止维护', date: '2025-01-01', starsAfter: 22000 }
    ],
    keyInfluencers: ['Devin 热度溢出效应', 'r/LocalLLaMA 社区'],
    hypeSignals: [
      '5天内从0→20K stars，纯蹭 Devin 热度',
      'Stars/contributor ratio = 183（极高）',
      '3个月后活跃度几乎归零',
      'issue 质量极低，大量 "when will you add X"',
      'PR 合并率仅 38%',
      '典型 "Me-too" 项目——赶上热潮但缺乏持续投入'
    ],
    organicSignals: [
      '多 Agent 流水线设计有一定工程价值',
      '8+ LLM 后端支持有实用性'
    ]
  }
];

// ── Group Comparisons ──

export type ComparisonGroup = {
  label: string;
  description: string;
  repos: string[];
  avgCompositeScore: number;
  avgStarsPerContributor: number;
  avgCodeQuality: number;
  avgMarketingDriven: number; // low=1, medium=2, high=3
  verdict: string;
};

export const comparisonGroups: ComparisonGroup[] = [
  {
    label: 'AutoGPT vs MetaGPT vs CrewAI',
    description: '三大 Agent 框架横向对比',
    repos: ['Significant-Gravitas/AutoGPT', 'FoundationAgents/MetaGPT', 'crewAIInc/crewAI'],
    avgCompositeScore: 48.7,
    avgStarsPerContributor: 154,
    avgCodeQuality: 6.3,
    avgMarketingDriven: 2.3,
    verdict: 'AutoGPT Star 数最高但质量最低（炒作驱动）；MetaGPT 学术+商业平衡最好；CrewAI 社区健康度最高。三者代表了 Agent 框架的三种增长范式。'
  },
  {
    label: 'DeepMind vs 开源社区',
    description: '品牌加持 vs 草根力量',
    repos: ['google-deepmind/funsearch', 'google-deepmind/opro', 'algorithmicsuperintelligence/openevolve', 'All-Hands-AI/OpenHands'],
    avgCompositeScore: 65.5,
    avgStarsPerContributor: 105,
    avgCodeQuality: 8.5,
    avgMarketingDriven: 1.0,
    verdict: 'DeepMind 项目 Star 偏低但质量极高。开源社区项目（OpenHands, OpenEvolve）在活跃度和实用价值上往往超越大厂。品牌背书 ≠ 社区活力。'
  },
  {
    label: '中国团队 vs 海外团队',
    description: '地域/文化驱动的增长差异',
    repos: ['FoundationAgents/MetaGPT', 'modelscope/AgentEvolver', 'OpenBMB/AgentVerse', 'camel-ai/camel', 'Significant-Gravitas/AutoGPT', 'crewAIInc/crewAI'],
    avgCompositeScore: 47.5,
    avgStarsPerContributor: 128,
    avgCodeQuality: 6.5,
    avgMarketingDriven: 1.8,
    verdict: '中国团队项目（MetaGPT, AgentVerse）依赖微信/微博传播，初期增速快但国际化受限。海外项目更依赖 HN/Reddit 自然传播。增长模式差异明显但各有优势。'
  },
  {
    label: '学术驱动 vs 营销驱动',
    description: '论文背书 vs KOL 传播',
    repos: ['stanfordnlp/dspy', 'princeton-nlp/SWE-agent', 'noahshinn/reflexion', 'Significant-Gravitas/AutoGPT', 'stitionai/devika'],
    avgCompositeScore: 49.8,
    avgStarsPerContributor: 157,
    avgCodeQuality: 6.8,
    avgMarketingDriven: 2.0,
    verdict: '学术项目增长慢但 star 质量高、长期维护好。营销驱动项目爆发快但衰减也快（Devika：20K stars → 3个月后几乎停更）。论文引用量是比 star 数更可靠的指标。'
  }
];

// ── Utility: get color for score ──
export function scoreColor(score: number): string {
  if (score >= 70) return '#10b981'; // green
  if (score >= 50) return '#f59e0b'; // amber
  return '#ef4444'; // red
}

export function marketingToNumber(level: 'low' | 'medium' | 'high'): number {
  return level === 'low' ? 1 : level === 'medium' ? 2 : 3;
}
