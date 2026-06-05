import { surveyStats } from './survey';
import { publicCorpusStats } from './publicCorpusStats';

export interface TopicEvidenceLink {
  label: string;
  href: string;
}

export interface TopicCluster {
  id: string;
  rank: number;
  title: string;
  titleEn: string;
  readerQuestion: string;
  surveyRole: string;
  readerIntent: string;
  evidence: string;
  discoveryQuestions: string[];
  evidenceLinks: TopicEvidenceLink[];
  nextAsset: string;
}

export const topicMapStats = {
  clusters: 10,
  rawGithubCaptures: publicCorpusStats.rawGithubCaptures,
  strictEvolutionRepos: publicCorpusStats.strictEvolutionRepos,
  broadEvolutionRepos: publicCorpusStats.broadEvolutionRepos,
  publicReports: publicCorpusStats.publicProjectReports,
  surveyPapers: surveyStats.papers,
  painPoints: surveyStats.painPoints,
  evolutionLoops: surveyStats.evolutionLoops,
};

export const topicClusters: TopicCluster[] = [
  {
    id: 'definition',
    rank: 1,
    title: '什么才算严格意义上的自进化智能体',
    titleEn: 'What counts as a self-evolving AI agent',
    readerQuestion: '这个系统真的在改进自己，还是只是一个固定 workflow?',
    surveyRole: 'Survey 的定义入口：可变对象、反馈信号、评估器、保留机制和回滚路径。',
    readerIntent: 'definition / explainer',
    evidence: 'README、paper introduction、resource coverage audit 已经把 self-evolution 从标签改写成可审计系统过程。',
    discoveryQuestions: ['self-evolving AI agents', 'AI 自进化智能体是什么', 'AI agent self improvement survey'],
    evidenceLinks: [
      { label: 'Definition guide', href: '/topics/self-evolving-ai-agents/' },
      { label: 'Survey definition', href: '/survey/' },
      { label: 'Paper', href: '/paper/' },
    ],
    nextAsset: '读完定义后，对照 AutoML、online learning 和普通 workflow，先判断系统到底哪里发生了 retained change。',
  },
  {
    id: 'five-loops',
    rank: 2,
    title: '五类进化回路',
    titleEn: 'Five evolution loops',
    readerQuestion: '不同项目到底在用哪一种反馈闭环?',
    surveyRole: '把 196 篇论文和 348 个展示仓库压成机制分类，而不是按项目名分类。',
    readerIntent: 'taxonomy / comparison',
    evidence: 'Survey data 层有 5 loops、7 method families、6 case studies；mechanisms 页面已经可公开阅读。',
    discoveryQuestions: ['AI self evolution loops', 'agent reflection loop', 'LLM code self modification'],
    evidenceLinks: [
      { label: 'Five-loop guide', href: '/topics/five-evolution-loops/' },
      { label: 'Mechanisms', href: '/survey/mechanisms/' },
      { label: 'Case studies', href: '/survey/case-studies/' },
    ],
    nextAsset: '读完五类回路后，选择一个代表系统，检查它的 feedback、evaluator、archive 和失败模式是否公开。',
  },
  {
    id: 'code-algorithm-discovery',
    rank: 3,
    title: '代码自我改进与算法发现',
    titleEn: 'Code self-improvement and algorithm discovery',
    readerQuestion: '哪些系统真的会改代码、发现算法，并用 benchmark 留下证据?',
    surveyRole: '连接 DGM、ADAS、AlphaEvolve、OpenEvolve、FunSearch 等核心系统，是论文证据最集中的簇之一。',
    readerIntent: 'benchmark / project comparison',
    evidence: '项目报告、case studies 和 evaluation 章节已经覆盖 code mutation、archive、SWE-bench、HumanEval、算法搜索。',
    discoveryQuestions: ['AI code self improvement', 'Darwin Godel Machine benchmark', 'AlphaEvolve algorithm discovery'],
    evidenceLinks: [
      { label: 'Benchmark matrix', href: '/topics/code-evolution-benchmark/' },
      { label: 'Benchmark', href: '/benchmark/' },
      { label: 'Projects', href: '/projects/' },
    ],
    nextAsset: '读完 benchmark matrix 后，按 DGM/SICA、AlphaEvolve/OpenEvolve、ADAS/A-Evolve 逐组检查 evaluator 和 retained artifacts。',
  },
  {
    id: 'memory-skills',
    rank: 4,
    title: '记忆、技能与知识进化',
    titleEn: 'Memory, skills, and knowledge evolution',
    readerQuestion: 'agent 怎样把一次失败变成未来可复用的经验?',
    surveyRole: '解释 self-evolution 不只发生在模型权重，也发生在 memory、skill library、tool policy 和 retrieval substrate。',
    readerIntent: 'how-to / engineering guide',
    evidence: 'Survey pain points、Voyager/Reflexion 类案例、memory substrate 项目和 Agent-Swarm Evolve 都指向可审计保留机制。',
    discoveryQuestions: ['agent memory evolution', 'AI agent skill library', 'Reflexion memory self improvement'],
    evidenceLinks: [
      { label: 'Survey', href: '/survey/' },
      { label: 'Projects', href: '/projects/' },
      { label: 'Search memory', href: '/search/?q=memory' },
    ],
    nextAsset: '先看 memory/skill 是否能持久化，再查污染、遗忘、迁移、权限和回滚边界。',
  },
  {
    id: 'agent-swarm',
    rank: 5,
    title: 'Agent-Swarm Evolve 与 harness 进化',
    titleEn: 'Agent-Swarm Evolve and harness evolution',
    readerQuestion: '多智能体系统的组织结构、角色、拓扑和 handoff 能不能一起进化?',
    surveyRole: '把用户指定的 agent-swarm evolve 纳入 multi-agent / harness 方向，并和生产运行时、验证器、共享状态连接。',
    readerIntent: 'emerging topic / project map',
    evidence: 'analysis/agent-swarm-evolve.md 已把 CORAL、GPTSwarm、metaswarm、swarmclaw、OpenClaw 和 Insight Swarm 作为种子。',
    discoveryQuestions: ['agent swarm evolve', 'multi-agent self evolution', 'agent harness evolution'],
    evidenceLinks: [
      { label: 'Agent-Swarm analysis', href: 'https://github.com/Shiyao-Huang/awesome-agent-evolution/blob/main/analysis/agent-swarm-evolve.md' },
      { label: 'Homepage section', href: '/#agent-swarm-evolve' },
      { label: 'Search swarm', href: '/search/?q=swarm' },
    ],
    nextAsset: '阅读 swarm 项目时，按角色、共享状态、handoff、验证器、lineage 和权限边界逐项复核。',
  },
  {
    id: 'evaluation-governance',
    rank: 6,
    title: '评估、治理与 Evolve-AGI Index',
    titleEn: 'Evaluation, governance, and Evolve-AGI Index',
    readerQuestion: '怎么避免把 benchmark 热度误读成真实成熟度?',
    surveyRole: '把 benchmark、闭环强度、证据链、迁移、实现可得性、领域动量和治理准备度压成指数。',
    readerIntent: 'metric / decision support',
    evidence: 'Evolve-AGI Index 已有权重、趋势快照、公开页面和 README 核心叙事。',
    discoveryQuestions: ['Evolve-AGI Index', 'AI agent evaluation governance', 'self-evolving agents benchmark'],
    evidenceLinks: [
      { label: 'Evolve-AGI Index', href: '/evolve-agi-index/' },
      { label: 'Benchmark', href: '/benchmark/' },
      { label: 'Star growth', href: '/star-growth/' },
      { label: 'Value LSH', href: '/value-lsh/' },
      { label: 'Reports', href: '/reports/' },
    ],
    nextAsset: '读指数页时，把每个 signal 当作问题清单，并回到代表报告和 benchmark 表核对来源。',
  },
  {
    id: 'github-growth',
    rank: 7,
    title: '2026 GitHub 增长与当前动量',
    titleEn: '2026 GitHub growth and current momentum',
    readerQuestion: '哪些自进化项目正在当前阶段获得真实关注，而不是只靠历史累计 Star?',
    surveyRole: '把 GitHub 语料从累计热度榜升级成当前动量数据库，为 Evolve-AGI Index 的 field momentum 信号提供证据边界。',
    readerIntent: 'data / momentum audit',
    evidence: 'Star-history database 已有 seed、snapshot、star-events、monthly growth 和 coverage-gated ledger；当前公开页明确区分可判断证据与待抓取 backlog。',
    discoveryQuestions: ['AI agent GitHub star growth 2026', 'self evolving agents new stars', 'AI agent momentum evidence'],
    evidenceLinks: [
      { label: 'Star growth page', href: '/star-growth/' },
      { label: 'Growth audit ledger', href: 'https://github.com/Shiyao-Huang/awesome-agent-evolution/blob/main/analysis/github-star-growth-ranking.md' },
      { label: 'Evolve-AGI Index', href: '/evolve-agi-index/' },
    ],
    nextAsset: '读增长页时，先区分累计 star 与 2026 new-star growth；覆盖不足的项目只当候选线索。',
  },
  {
    id: 'value-lsh',
    rank: 8,
    title: 'Value LSH 证据分诊与证据修复',
    titleEn: 'Value LSH classification and evidence repair',
    readerQuestion: '这么多项目、论文和内容材料，哪些真的值得先深挖?',
    surveyRole: '把用户要求的“谁好谁坏、谁有价值谁没价值”转成 26 条 value lines、LSH 近邻、3D projection 和 evidence repair queue。',
    readerIntent: 'classification / evidence triage',
    evidence: 'Value LSH 已形成 GitHub、papers、social/X 和 blogs 的全量价值比较层，并把结果公开为 LSH buckets、3D projection 和 evidence repair queue；具体计数以 /value-lsh/ 页面与 analysis/value-lsh-index.md 当前快照为准。',
    discoveryQuestions: ['AI agent value classification', 'self evolving agents evidence repair', 'AI project LSH clustering'],
    evidenceLinks: [
      { label: 'Value LSH page', href: '/value-lsh/' },
      { label: 'Value LSH analysis', href: 'https://github.com/Shiyao-Huang/awesome-agent-evolution/blob/main/analysis/value-lsh-index.md' },
      { label: 'Repair queue', href: 'https://github.com/Shiyao-Huang/awesome-agent-evolution/blob/main/analysis/value-evidence-repair-queue.md' },
    ],
    nextAsset: '读 Value LSH 时，优先选择 top repair queue 项目，核对 source、facet、标签覆盖度和待补证据。',
  },
  {
    id: 'production-pain-points',
    rank: 9,
    title: '生产痛点与用户信任边界',
    titleEn: 'Production pain points and trust boundaries',
    readerQuestion: '用户真的需要更自主的 agent，还是需要更可靠、可控、低成本的系统?',
    surveyRole: '用 97 个痛点校验研究方向，防止 survey 只围绕论文 novelty 转。',
    readerIntent: 'buyer / product education',
    evidence: 'Survey 页面公开了 pain point 分类，paper ch7 把可靠性、成本、权限、记忆污染和可观测性纳入核心。',
    discoveryQuestions: ['AI agent production pain points', 'agent reliability observability cost', 'self evolving AI product risks'],
    evidenceLinks: [
      { label: 'Survey pain points', href: '/survey/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'Search reliability', href: '/search/?q=reliability' },
    ],
    nextAsset: '读 pain points 时，先把问题归到可靠性、成本、可观测性、权限或记忆污染，再找对应证据。',
  },
  {
    id: 'resource-library',
    rank: 10,
    title: '资料库覆盖与证据链复查',
    titleEn: 'Resource coverage and evidence traceability',
    readerQuestion: '这个资料库到底收了什么、分析了什么、哪些能公开阅读?',
    surveyRole: '把 raw、processed、work、results 的口径分开，防止公开叙事夸大覆盖。',
    readerIntent: 'resource library / trust page',
    evidence: `Coverage audit 和 public resource library page 已解释 ${publicCorpusStats.rawGithubCaptures} raw GitHub captures、${publicCorpusStats.analyzedProjectReports} analyzed project/model-card reports、${publicCorpusStats.publicProjectReports} public project reports、${publicCorpusStats.surveyDisplayPapers} survey-display papers 等当前计数边界。`,
    discoveryQuestions: ['self-evolving AI agents resource library', 'AI self evolution GitHub projects', 'AI agent survey project reports'],
    evidenceLinks: [
      { label: 'Resource library', href: '/resource-library/' },
      { label: 'Value LSH', href: '/value-lsh/' },
      { label: 'GitHub evidence', href: '/github/' },
      { label: 'Project reports', href: '/reports/' },
    ],
    nextAsset: '从搜索进入时，先用 topic cluster 缩小范围，再回到项目报告、论文页或 benchmark 证据。',
  },
];
