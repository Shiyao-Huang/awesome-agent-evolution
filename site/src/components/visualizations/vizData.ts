import analysisJson from '@/data/analysis.json';
import { projects } from '@/data/projects';

type CountEntry = { key: string; count: number };
type AnalysisSnapshot = {
  counts: {
    raw_captures: number;
    classified_repos: number;
    analyzed_projects: number;
    raw_core_evolution: number;
    raw_broad_evolution: number;
  };
  raw_category_counts: CountEntry[];
  raw_theme_counts: CountEntry[];
  raw_time_slice_counts: CountEntry[];
  analyzed_created_month_counts: CountEntry[];
  analyzed_projects: Array<{ created_at?: string | null; created_at_source?: string | null }>;
};

const analysis = analysisJson as AnalysisSnapshot;

export type FunnelStage = { label: string; count: number; description: string };
export type TimeBucket = { key: string; count: number };
export type FamilyOption = {
  id: string;
  label: string;
  shortLabel: string;
  count: number;
  color: string;
  description: string;
  boundary: string;
};
export type TaxonomyNode = {
  label: string;
  count: number;
  description?: string;
  children?: TaxonomyNode[];
};
export type ProjectTaxonomyInput = {
  name?: string | null;
  repo?: string | null;
  category?: string | null;
  pattern?: string | null;
  description?: string | null;
  tags?: string[] | null;
};
export type MechanismClassification = {
  familyId: string;
  familyLabel: string;
  familyShortLabel: string;
  color: string;
  familyDescription: string;
  boundary: string;
  subtype: string;
  subtypeDescription: string;
};

export const summaryStats = {
  totalRaw: analysis.counts.raw_captures,
  totalProjects: analysis.counts.analyzed_projects,
  coreEvolution: analysis.counts.raw_core_evolution,
  broadEvolution: analysis.counts.raw_broad_evolution
};

export const categoryDistribution: CountEntry[] = [...analysis.raw_category_counts]
  .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key));

export const themeDistribution: CountEntry[] = [...analysis.raw_theme_counts]
  .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key));

export const funnelStages: FunnelStage[] = [
  { label: 'Raw Captures', count: analysis.counts.raw_captures, description: 'GitHub repos captured from public sources' },
  { label: 'Classified', count: analysis.counts.classified_repos, description: 'Repositories with category and function tags' },
  { label: 'Model Cards', count: analysis.counts.analyzed_projects, description: 'Projects with public analysis reports' },
  { label: 'Strict Evolution', count: analysis.counts.raw_core_evolution, description: 'Core self-evolution focused projects' },
  { label: 'Broad Evolution', count: analysis.counts.raw_broad_evolution, description: 'Adjacent evolution-related evidence' }
];

const familyRules = [
  {
    id: 'safety-governance',
    label: '安全治理与权限边界',
    shortLabel: '安全治理',
    color: '#B83224',
    description: '权限、策略、沙箱、人类审批和可审计运行边界。',
    boundary: '限制 agent 如何行动，而不是直接证明任务能力提升。',
    test: /safety|security|governance|policy|permission|approval|hitl|sandbox|安全|治理|权限|审批|隔离/i
  },
  {
    id: 'evolution-loop',
    label: '自进化闭环',
    shortLabel: '自进化闭环',
    color: '#FF5B00',
    description: '候选生成、评估打分、反馈精炼和重复优化。',
    boundary: '必须改变 prompt、策略、代码、技能、记忆或种群中的至少一种对象。',
    test: /进化|演化|搜索循环|反馈-精炼|自改进|自进化|evol|self-improv|self-evolv|darwin|godel|gödel|refine|reflection/i
  },
  {
    id: 'memory-context',
    label: '记忆与上下文基底',
    shortLabel: '记忆/上下文',
    color: '#2E6F4E',
    description: '长期记忆、检索、连续性、身份与上下文基底。',
    boundary: '提供可保留状态，但不自动等于自进化；还要看反馈和验证。',
    test: /memory|context|retrieval|rag|knowledge graph|continuity|passport|agent-state|long-term|persistent|记忆|上下文|检索|知识库/i
  },
  {
    id: 'evaluation-benchmark',
    label: '评估、基准与 Harness',
    shortLabel: '评估/基准',
    color: '#007AFF',
    description: 'Benchmark、harness、grader、验证和可靠性测试。',
    boundary: '提供选择压力和证据，不等于系统本身会学习或保留改进。',
    test: /评估|评测|验证|基准|打分|benchmark|eval|judge|reward|grader|score|verifier|validation|reliability|harness|quality gate/i
  },
  {
    id: 'skills-tools',
    label: '技能、工具与插件生态',
    shortLabel: '技能/工具',
    color: '#8B5CF6',
    description: '可复用 skill、工具、插件、MCP、注册表和分发。',
    boundary: '让能力可复用；只有技能会被生成、选择、更新或回滚时才是进化证据。',
    test: /skill|skills|tool|tools|plugin|plugins|mcp|registry|resource-index|package|技能|工具|插件|注册表/i
  },
  {
    id: 'multi-agent-orchestration',
    label: '多 Agent 编排协作',
    shortLabel: '多 Agent 编排',
    color: '#0891B2',
    description: '多智能体角色、工作流编排、任务分解和协作。',
    boundary: '组织多个 agent；是否自进化取决于角色、拓扑或 handoff 是否随反馈改变。',
    test: /multi-agent|orchestrat|workflow|automation|swarm|team|crew|role|智能体编排|多 agent|多 Agent|协作|工作流|任务分解|节点编排/i
  },
  {
    id: 'coding-swe',
    label: '代码与软件工程 Agent',
    shortLabel: '代码/SWE',
    color: '#A56117',
    description: '代码生成、软件工程任务、patch、SWE-bench 和开发工具。',
    boundary: '面向代码任务；只有补丁进入验证、保留和回归门禁时才是强自进化证据。',
    test: /coding|code|software|swe|patch|developer|dev|代码|软件工程|开发助手/i
  },
  {
    id: 'research-survey',
    label: '综述、教程与索引',
    shortLabel: '综述/索引',
    color: '#BE185D',
    description: '论文、survey、教程、awesome list、研究地图和资源索引。',
    boundary: '是发现入口和分类证据，不能单独证明被收录项目可运行或会自我改进。',
    test: /survey|tutorial|awesome|paper|research|curriculum|education|literature|index|resource|综述|教程|论文|索引|文献|资源/i
  },
  {
    id: 'platform-runtime',
    label: '平台、框架与运行时',
    shortLabel: '平台/运行时',
    color: '#586069',
    description: 'Agent 框架、运行时、LLM 平台、UI、基础设施和应用。',
    boundary: '提供执行环境；需要额外证据说明反馈如何改变系统行为。',
    test: /framework|runtime|platform|infrastructure|application|ui|llm|self-hosted|框架|平台|运行时|基础设施|应用|自托管/i
  }
] as const;

const projectText = (project: ProjectTaxonomyInput) =>
  [project.name, project.repo, project.category, project.pattern, project.description, ...(project.tags || [])].filter(Boolean).join(' ');

const familyForProject = (project: ProjectTaxonomyInput) =>
  familyRules.find((family) => family.test.test(projectText(project))) || familyRules.find((family) => family.id === 'platform-runtime')!;

const familyCounts = new Map<string, number>();
for (const project of projects) {
  const family = familyForProject(project);
  familyCounts.set(family.id, (familyCounts.get(family.id) || 0) + 1);
}

export const methodFamilyOptions: FamilyOption[] = familyRules.map((family) => ({
  id: family.id,
  label: family.label,
  shortLabel: family.shortLabel,
  color: family.color,
  description: family.description,
  boundary: family.boundary,
  count: familyCounts.get(family.id) || 0
})).filter((family) => family.count > 0);

export const mechanismFamilyDistribution: CountEntry[] = methodFamilyOptions.map((family) => ({
  key: family.shortLabel,
  count: family.count
}));

const taxonomySignals: Record<string, Array<{ label: string; description: string; test: RegExp }>> = {
  'safety-governance': [
    { label: '沙箱/隔离', description: '限制 agent 动作边界。', test: /sandbox|isolat|security|安全|隔离/i },
    { label: '策略/审批', description: '权限、策略和人类确认。', test: /policy|permission|approval|hitl|governance|权限|审批/i },
    { label: '审计/可观测', description: '日志、trace、回放和风险证据。', test: /audit|trace|observability|report|审计|可观测/i }
  ],
  'evolution-loop': [
    { label: '搜索/候选生成', description: '生成候选并选择更优解。', test: /进化\/搜索循环|evol|search|candidate|优化|搜索/i },
    { label: '反馈精炼', description: '批判、反思、反馈后改写。', test: /反馈-精炼|refine|reflection|reflexion|critique/i },
    { label: '训练/数据回流', description: '轨迹或数据进入下一轮。', test: /训练\/数据循环|training|dataset|reinforcement|rl/i },
    { label: 'Prompt/上下文优化', description: '把 prompt 或 context 当成优化对象。', test: /prompt|context|提示|上下文/i }
  ],
  'memory-context': [
    { label: '长期记忆', description: '跨会话保留状态和经验。', test: /long-term|persistent|memory|continuity|记忆/i },
    { label: '图/检索记忆', description: 'Graph、RAG、知识图谱与索引检索。', test: /graph|retrieval|rag|knowledge graph|检索|知识/i },
    { label: '身份/状态', description: 'Agent identity、passport、state 管理。', test: /identity|passport|agent-state|state|local-first/i }
  ],
  'evaluation-benchmark': [
    { label: 'Benchmark 任务集', description: '固定任务和可比较榜单。', test: /benchmark|suite|SWE-bench|评测基准/i },
    { label: 'Harness 运行器', description: '统一运行并产出可复现证据。', test: /harness|runner|runtime|eval\.yaml/i },
    { label: '评分器/质量门', description: 'grader、pass-rate、回归门禁。', test: /grader|score|quality gate|validation|评分|打分/i }
  ],
  'skills-tools': [
    { label: 'Skill 包', description: '可发现、可安装、可复用的 skill。', test: /skill|skills|SKILL\.md|技能/i },
    { label: '工具/MCP/插件', description: '工具调用、MCP、API 和插件。', test: /tool|mcp|plugin|api|工具|插件/i },
    { label: '注册/分发', description: 'registry、package、install 和复用。', test: /registry|package|install|distribution|reuse|注册|分发/i }
  ],
  'multi-agent-orchestration': [
    { label: '角色协作', description: '多 agent 分工与组织协作。', test: /multi-agent|role|team|crew|swarm|协作/i },
    { label: '工作流编排', description: '节点、图式流程和自动化管线。', test: /workflow|orchestrat|automation|编排|工作流/i },
    { label: '任务分解', description: '目标拆解、派发和追踪。', test: /task|planning|任务分解/i }
  ],
  'coding-swe': [
    { label: '代码生成/修复', description: '生成 patch、修复 bug 或改代码。', test: /code|coding|patch|代码/i },
    { label: '软件工程评测', description: '真实仓库、测试和 SWE-bench。', test: /swe|repo|ci|test|software|软件/i },
    { label: '开发者工作台', description: 'CLI、IDE、dashboard 和开发 UX。', test: /cli|dashboard|developer|dev|工作台/i }
  ],
  'research-survey': [
    { label: '论文/综述', description: '论文、survey 和文献综述。', test: /paper|survey|literature|综述|论文/i },
    { label: '教程/课程', description: '教程、curriculum 和学习路径。', test: /tutorial|curriculum|education|教程/i },
    { label: 'Awesome/资源索引', description: '项目目录、资源地图和生态追踪。', test: /awesome|index|resource|索引|资源/i }
  ],
  'platform-runtime': [
    { label: 'Agent 框架', description: '框架、SDK 和生命周期抽象。', test: /framework|sdk|agent framework|框架/i },
    { label: '运行时/基础设施', description: '本地、云端、浏览器和 CLI 环境。', test: /runtime|infrastructure|computer|browser|cli|运行时|基础设施/i },
    { label: 'LLM 应用平台', description: '自托管平台、UI、RAG 和应用。', test: /platform|application|ui|rag|llm|平台|应用|自托管/i }
  ]
};

const subtypeForProject = (familyId: string, project: ProjectTaxonomyInput) => {
  const text = projectText(project);
  const rules = taxonomySignals[familyId] || [];
  return rules.find((rule) => rule.test.test(text)) || {
    label: '综合型',
    description: '该项目跨多个信号，保留在主机制族中继续用 evidence chain 细分。'
  };
};

export const classifyProjectMechanism = (project: ProjectTaxonomyInput): MechanismClassification => {
  const family = familyForProject(project);
  const subtype = subtypeForProject(family.id, project);
  return {
    familyId: family.id,
    familyLabel: family.label,
    familyShortLabel: family.shortLabel,
    color: family.color,
    familyDescription: family.description,
    boundary: family.boundary,
    subtype: subtype.label,
    subtypeDescription: subtype.description
  };
};

export const projectRankData = projects
  .map((project) => {
    const taxonomy = classifyProjectMechanism(project);
    return {
      name: project.name,
      repo: project.repo,
      url: project.url,
      stars: Number(project.stars || 0),
      category: taxonomy.familyShortLabel,
      rawCategory: project.category,
      methodFamilyId: taxonomy.familyId,
      methodFamily: taxonomy.familyLabel,
      methodFamilyDescription: taxonomy.familyDescription,
      taxonomyBoundary: taxonomy.boundary,
      subtype: taxonomy.subtype,
      subtypeDescription: taxonomy.subtypeDescription,
      pattern: project.pattern,
      tags: project.tags,
      lastPushed: project.lastPushed
    };
  })
  .sort((a, b) => b.stars - a.stars || a.name.localeCompare(b.name));

export const taxonomyTree: TaxonomyNode[] = methodFamilyOptions.map((family) => {
  const scopedProjects = projects.filter((project) => familyForProject(project).id === family.id);
  const rules = taxonomySignals[family.id] || [];
  const children = rules
    .map((rule) => ({
      label: rule.label,
      count: scopedProjects.filter((project) => rule.test.test(projectText(project))).length,
      description: rule.description
    }))
    .filter((node) => node.count > 0);
  return {
    label: family.label,
    count: family.count,
    description: family.description,
    children
  };
});

const themeLabels: Record<string, string> = {
  memory: '记忆/上下文',
  evaluation: '评估/基准',
  skill: '技能/工具',
  evolution: '自进化闭环',
  framework: '框架/运行时',
  'education-list': '教程/索引',
  'research-agent': '研究 Agent',
  'prompt-optimization': 'Prompt 优化',
  'coding-agent': '代码 Agent',
  'workflow-automation': '工作流自动化',
  safety: '安全治理'
};

const themeTests: Record<string, RegExp> = {
  memory: /memory|context|retrieval|rag|knowledge graph|continuity|记忆|上下文/i,
  evaluation: /evaluation|benchmark|eval|harness|grader|score|评测|评估|打分|验证/i,
  skill: /skill|skills|tool|plugin|mcp|registry|工具|技能|插件/i,
  evolution: /evolution|evolve|self-improvement|self-evolution|进化|自改进|搜索循环|反馈-精炼/i,
  framework: /framework|runtime|platform|infrastructure|框架|平台|运行时|基础设施/i,
  'education-list': /tutorial|awesome|curriculum|education|教程|索引/i,
  'research-agent': /research|paper|survey|scientific|综述|论文|研究/i,
  'prompt-optimization': /prompt|提示/i,
  'coding-agent': /coding|code|swe|软件|代码/i,
  'workflow-automation': /workflow|automation|orchestrat|编排|工作流/i,
  safety: /safety|security|governance|policy|安全|治理/i
};

export const radarAxes = themeDistribution.slice(0, 10).map((entry) => {
  const modelCount = projects.filter((project) => (themeTests[entry.key] || new RegExp(entry.key, 'i')).test(projectText(project))).length;
  return {
    key: entry.key,
    label: themeLabels[entry.key] || entry.key,
    rawCount: entry.count,
    modelCount
  };
});

const shareOf = (count: number, total: number) =>
  total > 0 ? Math.round((count / total) * 1000) / 10 : 0;

export const radarSeries = [
  {
    name: 'Raw corpus share',
    total: analysis.counts.raw_captures,
    values: radarAxes.map((axis) => shareOf(axis.rawCount, analysis.counts.raw_captures))
  },
  {
    name: 'Model card share',
    total: analysis.counts.analyzed_projects,
    values: radarAxes.map((axis) => shareOf(axis.modelCount, analysis.counts.analyzed_projects))
  }
];

export const timelineData: TimeBucket[] = (analysis.analyzed_created_month_counts || [])
  .filter((entry) => entry.key !== 'unknown')
  .sort((a, b) => a.key.localeCompare(b.key));

export const timeSliceData: TimeBucket[] = (analysis.raw_time_slice_counts || [])
  .filter((entry) => entry.key !== 'unknown' && !entry.key.includes('Q') && entry.key !== 'early')
  .sort((a, b) => a.key.localeCompare(b.key));

const rawKnown = timeSliceData.reduce((sum, entry) => sum + entry.count, 0);
const createdKnown = timelineData.reduce((sum, entry) => sum + entry.count, 0);

export const timeCoverage = {
  rawKnown,
  rawUnknown: Math.max(0, analysis.counts.classified_repos - rawKnown),
  createdKnown,
  createdUnknown: Math.max(0, analysis.counts.analyzed_projects - createdKnown),
  verifiedCreated: (analysis.analyzed_projects || []).filter((project) => project.created_at_source === 'github_api').length,
  fallbackCreated: Math.max(0, createdKnown - (analysis.analyzed_projects || []).filter((project) => project.created_at_source === 'github_api').length)
};
