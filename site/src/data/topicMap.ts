import { surveyStats } from './survey';
import { projectReports } from './reports';

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
  seoIntent: string;
  evidence: string;
  seedQueries: string[];
  evidenceLinks: TopicEvidenceLink[];
  nextAsset: string;
}

export const topicMapStats = {
  clusters: 10,
  rawGithubCaptures: 677,
  strictEvolutionRepos: 99,
  broadEvolutionRepos: 204,
  publicReports: projectReports.length,
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
    seoIntent: 'definition / explainer',
    evidence: 'README、paper introduction、resource coverage audit 已经把 self-evolution 从标签改写成可审计系统过程。',
    seedQueries: ['self-evolving AI agents', 'AI 自进化智能体是什么', 'AI agent self improvement survey'],
    evidenceLinks: [
      { label: 'Definition guide', href: '/topics/self-evolving-ai-agents/' },
      { label: 'Survey definition', href: '/survey/' },
      { label: 'Paper', href: '/paper/' },
    ],
    nextAsset: '定义页已上线；下一步补 self-evolution vs AutoML / online learning / ordinary workflow 的对照页。',
  },
  {
    id: 'five-loops',
    rank: 2,
    title: '五类进化回路',
    titleEn: 'Five evolution loops',
    readerQuestion: '不同项目到底在用哪一种反馈闭环?',
    surveyRole: '把 196 篇论文和 348 个展示仓库压成机制分类，而不是按项目名分类。',
    seoIntent: 'taxonomy / comparison',
    evidence: 'Survey data 层有 5 loops、7 method families、6 case studies；mechanisms 页面已经可公开阅读。',
    seedQueries: ['AI self evolution loops', 'agent reflection loop', 'LLM code self modification'],
    evidenceLinks: [
      { label: 'Five-loop guide', href: '/topics/five-evolution-loops/' },
      { label: 'Mechanisms', href: '/survey/mechanisms/' },
      { label: 'Case studies', href: '/survey/case-studies/' },
    ],
    nextAsset: '五类回路主题页已上线；下一步把每个 loop 拆成长尾页，并补代表论文、项目、benchmark 和失败模式。',
  },
  {
    id: 'code-algorithm-discovery',
    rank: 3,
    title: '代码自我改进与算法发现',
    titleEn: 'Code self-improvement and algorithm discovery',
    readerQuestion: '哪些系统真的会改代码、发现算法，并用 benchmark 留下证据?',
    surveyRole: '连接 DGM、ADAS、AlphaEvolve、OpenEvolve、FunSearch 等核心系统，是论文最强证据簇之一。',
    seoIntent: 'benchmark / project comparison',
    evidence: '项目报告、case studies 和 evaluation 章节已经覆盖 code mutation、archive、SWE-bench、HumanEval、算法搜索。',
    seedQueries: ['AI code self improvement', 'Darwin Godel Machine benchmark', 'AlphaEvolve algorithm discovery'],
    evidenceLinks: [
      { label: 'Benchmark matrix', href: '/topics/code-evolution-benchmark/' },
      { label: 'Benchmark', href: '/benchmark/' },
      { label: 'Projects', href: '/projects/' },
    ],
    nextAsset: 'Code-evolution benchmark matrix 已上线；下一步拆 DGM/SICA、AlphaEvolve/OpenEvolve、ADAS/A-Evolve 的代表系统页。',
  },
  {
    id: 'memory-skills',
    rank: 4,
    title: '记忆、技能与知识进化',
    titleEn: 'Memory, skills, and knowledge evolution',
    readerQuestion: 'agent 怎样把一次失败变成未来可复用的经验?',
    surveyRole: '解释 self-evolution 不只发生在模型权重，也发生在 memory、skill library、tool policy 和 retrieval substrate。',
    seoIntent: 'how-to / engineering guide',
    evidence: 'Survey pain points、Voyager/Reflexion 类案例、memory substrate 项目和 Agent-Swarm Evolve 都指向可审计保留机制。',
    seedQueries: ['agent memory evolution', 'AI agent skill library', 'Reflexion memory self improvement'],
    evidenceLinks: [
      { label: 'Survey', href: '/survey/' },
      { label: 'Projects', href: '/projects/' },
      { label: 'Search memory', href: '/search/?q=memory' },
    ],
    nextAsset: '补一个 memory/skill substrate 页面，按持久化、污染、遗忘、迁移、权限和回滚切分。',
  },
  {
    id: 'agent-swarm',
    rank: 5,
    title: 'Agent-Swarm Evolve 与 harness 进化',
    titleEn: 'Agent-Swarm Evolve and harness evolution',
    readerQuestion: '多智能体系统的组织结构、角色、拓扑和 handoff 能不能一起进化?',
    surveyRole: '把用户指定的 agent-swarm evolve 纳入 multi-agent / harness 方向，并和生产运行时、验证器、共享状态连接。',
    seoIntent: 'emerging topic / project map',
    evidence: 'analysis/agent-swarm-evolve.md 已把 CORAL、GPTSwarm、metaswarm、swarmclaw、OpenClaw 和 Insight Swarm 作为种子。',
    seedQueries: ['agent swarm evolve', 'multi-agent self evolution', 'agent harness evolution'],
    evidenceLinks: [
      { label: 'Agent-Swarm analysis', href: 'https://github.com/Shiyao-Huang/awesome-agent-evolution/blob/main/analysis/agent-swarm-evolve.md' },
      { label: 'Homepage section', href: '/#agent-swarm-evolve' },
      { label: 'Search swarm', href: '/search/?q=swarm' },
    ],
    nextAsset: '把 swarm 组织结构做成 topology matrix：角色、共享状态、handoff、验证器、lineage、权限边界。',
  },
  {
    id: 'evaluation-governance',
    rank: 6,
    title: '评估、治理与 Evolve-AGI Index',
    titleEn: 'Evaluation, governance, and Evolve-AGI Index',
    readerQuestion: '怎么避免把 benchmark 热度误读成真实成熟度?',
    surveyRole: '把 benchmark、闭环强度、证据链、迁移、实现可得性、领域动量和治理准备度压成指数。',
    seoIntent: 'metric / decision support',
    evidence: 'Evolve-AGI Index 已有权重、趋势快照、公开页面和 README 核心叙事。',
    seedQueries: ['Evolve-AGI Index', 'AI agent evaluation governance', 'self-evolving agents benchmark'],
    evidenceLinks: [
      { label: 'Evolve-AGI Index', href: '/evolve-agi-index/' },
      { label: 'Benchmark', href: '/benchmark/' },
      { label: 'Star growth', href: '/star-growth/' },
      { label: 'Value LSH', href: '/value-lsh/' },
      { label: 'Reports', href: '/reports/' },
    ],
    nextAsset: '把每个 index signal 做成可解释小页，并链接到代表报告和 benchmark 表。',
  },
  {
    id: 'github-growth',
    rank: 7,
    title: '2026 GitHub 增长与当前动量',
    titleEn: '2026 GitHub growth and current momentum',
    readerQuestion: '哪些自进化项目正在当前阶段获得真实关注，而不是只靠历史累计 Star?',
    surveyRole: '把 GitHub 语料从累计热度榜升级成当前动量数据库，为 Evolve-AGI Index 的 field momentum 信号提供证据边界。',
    seoIntent: 'data / momentum ranking',
    evidence: 'Star-history database 已有 seed、snapshot、star-events、monthly growth 和 coverage-qualified ranking；当前公开页明确区分 final evidence 与 fetch backlog。',
    seedQueries: ['AI agent GitHub star growth 2026', 'self evolving agents new stars', 'AI agent momentum ranking'],
    evidenceLinks: [
      { label: 'Star growth page', href: '/star-growth/' },
      { label: 'Growth ranking', href: 'https://github.com/Shiyao-Huang/awesome-agent-evolution/blob/main/analysis/github-star-growth-ranking.md' },
      { label: 'Evolve-AGI Index', href: '/evolve-agi-index/' },
    ],
    nextAsset: '扩大 strict evolution repos 的完整 stargazer pagination，并把 complete rows 回灌到 Evolve-AGI Index 和 frontier queue。',
  },
  {
    id: 'value-lsh',
    rank: 8,
    title: 'Value LSH 价值分类与证据修复',
    titleEn: 'Value LSH classification and evidence repair',
    readerQuestion: '这么多项目、论文和内容材料，哪些真的值得先深挖?',
    surveyRole: '把用户要求的“谁好谁坏、谁有价值谁没价值”转成 26 条 value lines、LSH 近邻、3D projection 和 evidence repair queue。',
    seoIntent: 'classification / evidence triage',
    evidence: 'Value LSH 已形成 GitHub、papers、social/X 和 blogs 的全量价值比较层，并把结果公开为 LSH buckets、3D projection 和 evidence repair queue；具体计数以 /value-lsh/ 页面与 analysis/value-lsh-index.md 当前快照为准。',
    seedQueries: ['AI agent value classification', 'self evolving agents evidence repair', 'AI project LSH clustering'],
    evidenceLinks: [
      { label: 'Value LSH page', href: '/value-lsh/' },
      { label: 'Value LSH analysis', href: 'https://github.com/Shiyao-Huang/awesome-agent-evolution/blob/main/analysis/value-lsh-index.md' },
      { label: 'Repair queue', href: 'https://github.com/Shiyao-Huang/awesome-agent-evolution/blob/main/analysis/value-evidence-repair-queue.md' },
    ],
    nextAsset: '把 repair queue 的 top projects 逐个转成 model-card 深读，并把稳定 facet 回灌到 Evolve-AGI Index。',
  },
  {
    id: 'production-pain-points',
    rank: 9,
    title: '生产痛点与用户信任边界',
    titleEn: 'Production pain points and trust boundaries',
    readerQuestion: '用户真的需要更自主的 agent，还是需要更可靠、可控、低成本的系统?',
    surveyRole: '用 97 个痛点校验研究方向，防止 survey 只围绕论文 novelty 转。',
    seoIntent: 'buyer / product education',
    evidence: 'Survey 页面公开了 pain point 分类，paper ch7 把可靠性、成本、权限、记忆污染和可观测性纳入核心。',
    seedQueries: ['AI agent production pain points', 'agent reliability observability cost', 'self evolving AI product risks'],
    evidenceLinks: [
      { label: 'Survey pain points', href: '/survey/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'Search reliability', href: '/search/?q=reliability' },
    ],
    nextAsset: '将 97 个 pain points 转成可搜索 FAQ 和 buyer guide，面向工程负责人和产品读者。',
  },
  {
    id: 'resource-library',
    rank: 10,
    title: '资料库覆盖与证据链复查',
    titleEn: 'Resource coverage and evidence traceability',
    readerQuestion: '这个资料库到底收了什么、分析了什么、哪些能公开阅读?',
    surveyRole: '把 raw、processed、work、results 的口径分开，防止公开叙事夸大覆盖。',
    seoIntent: 'resource library / trust page',
    evidence: 'Coverage audit 和 public resource library page 已解释 677 raw GitHub captures、283 analyzed project/model-card reports、483 public project reports、196 survey-display papers 等当前计数边界。',
    seedQueries: ['self-evolving AI agents resource library', 'AI self evolution GitHub projects', 'AI agent survey project reports'],
    evidenceLinks: [
      { label: 'Resource library', href: '/resource-library/' },
      { label: 'Value LSH', href: '/value-lsh/' },
      { label: 'GitHub evidence', href: '/github/' },
      { label: 'Project reports', href: '/reports/' },
    ],
    nextAsset: '让站内搜索和项目报告页按 topic cluster 过滤，让读者从问题直接进入证据。',
  },
];
