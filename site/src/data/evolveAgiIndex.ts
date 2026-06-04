import analysis from './analysis.json';
import { rankedProfiles } from './rankings';
import { starQualityScores } from './starAnalysis';

type ScoreSignal = {
  id: string;
  label: string;
  shortLabel: string;
  score: number;
  weight: number;
  description: string;
  evidence: string;
};

type BenchmarkEvidence = {
  system: string;
  benchmark: string;
  before: string;
  after: string;
  gain: string;
  indexScore: number;
  source: string;
  note: string;
  family?: string;
  includeInMainIndex?: boolean;
};

type TrendPoint = {
  date: string;
  label: string;
  score: number;
  benchmarkScore: number;
  strictRepos: number;
  broadRepos: number;
  publicReports: number;
  source: string;
  note: string;
  backfilled?: boolean;
};

type CountSnapshot = {
  classified_repos?: number;
  analyzed_projects?: number;
  analyzed_with_public_report?: number;
  raw_core_evolution?: number;
  raw_broad_evolution?: number;
  raw_unknown_time_slice?: number;
};

type CurrentRankingRow = {
  rank: number;
  name: string;
  repo: string;
  category: string;
  pattern: string;
  scores: {
    current_value: number;
    time: number;
    mechanism: number;
    evidence: number;
    adoption: number;
    usefulness: number;
  };
};

type AnalysisSnapshot = typeof analysis & {
  counts: CountSnapshot;
  recency_weighted_project_ranking?: CurrentRankingRow[];
};

const snapshot = analysis as AnalysisSnapshot;
const counts = snapshot.counts ?? {};
const topSystemProfiles = rankedProfiles.slice(0, 10);
const currentRanking = snapshot.recency_weighted_project_ranking ?? [];
const currentTopProjects = currentRanking.slice(0, 5);

const clamp = (value: number, min = 0, max = 100) => Math.min(max, Math.max(min, value));
const round = (value: number, places = 1) => {
  const factor = 10 ** places;
  return Math.round(value * factor) / factor;
};
const average = (values: number[]) => {
  const valid = values.filter((value) => Number.isFinite(value));
  if (!valid.length) return 0;
  return valid.reduce((sum, value) => sum + value, 0) / valid.length;
};

export const benchmarkEvidence: BenchmarkEvidence[] = [
  {
    system: 'Reflexion',
    benchmark: 'HumanEval pass@1',
    before: '80.0% GPT-4 baseline',
    after: '91.0%',
    gain: '+11.0pp',
    indexScore: 91,
    source: 'paper-drafts/appendix.tex; site/src/data/survey.ts',
    note: 'Code-generation pass rate with language reflection memory.'
  },
  {
    system: 'Reflexion',
    benchmark: 'ALFWorld success',
    before: '77%',
    after: '97%',
    gain: '+20pp',
    indexScore: 97,
    source: 'site/src/data/survey.ts; research/ranking-framework/radar-profiles.json',
    note: 'Embodied/web-style task success, used as cross-domain evidence.'
  },
  {
    system: 'SelfEvolve',
    benchmark: 'HumanEval pass@1',
    before: '74.39% ChatGPT baseline',
    after: '85.98%',
    gain: '+11.59pp',
    indexScore: 86,
    source: 'paper-drafts/appendix.tex',
    note: 'Self-improvement loop on coding benchmark.'
  },
  {
    system: 'DGM',
    benchmark: 'SWE-bench Verified',
    before: '20.0%',
    after: '50.0%',
    gain: '+30.0pp',
    indexScore: 86,
    source: 'paper-drafts/appendix.tex; research/ranking-framework/radar-profiles.json',
    note: 'Hard software-engineering benchmark; gain is weighted heavily.'
  },
  {
    system: 'SICA',
    benchmark: 'SWE-bench Verified',
    before: '17.0%',
    after: '53.0%',
    gain: '+36.0pp',
    indexScore: 88,
    source: 'paper-drafts/appendix.tex',
    note: 'Self-modifying coding agent result in software repair.'
  },
  {
    system: 'DGM',
    benchmark: 'Polyglot Coding',
    before: '14.2%',
    after: '30.7%',
    gain: '+16.5pp',
    indexScore: 72,
    source: 'site/src/data/survey.ts; paper-drafts/appendix.tex',
    note: 'Cross-language transfer evidence.'
  },
  {
    system: 'SAGE',
    benchmark: 'LiveCodeBench',
    before: 'backbone model',
    after: '+8.9%',
    gain: '+8.9%',
    indexScore: 71,
    source: 'paper-drafts/appendix.tex',
    note: 'Turn-based self-evolution reasoning improvement.'
  },
  {
    system: 'WebRL',
    benchmark: 'WebArena-Lite',
    before: '4.8%',
    after: '42.4%',
    gain: '+37.6pp',
    indexScore: 82,
    source: 'paper-drafts/appendix.tex',
    note: 'Web-agent benchmark with large absolute improvement.'
  },
  {
    system: 'AgentEvolver',
    benchmark: 'AppWorld',
    before: '1.8%',
    after: '23.2%',
    gain: '+21.4pp',
    indexScore: 67,
    source: 'paper-drafts/appendix.tex',
    note: 'App-agent environment improvement; still low absolute final score.'
  },
  {
    system: 'AlphaEvolve',
    benchmark: 'Algorithm / infra discovery',
    before: 'prior best systems',
    after: '48 multiplications; Borg +0.7%; FlashAttention +23%',
    gain: 'new record / infra gains',
    indexScore: 89,
    source: 'paper-drafts/appendix.tex; research/ranking-framework/radar-profiles.json',
    note: 'Non-pass-rate benchmark family normalized by impact and verification.'
  },
  {
    system: 'MPA / MIRA',
    benchmark: 'Experimental materials properties',
    before: 'direct fine-tuning baseline',
    after: '35/40 SOTA; average MAE -15%; up to -55%',
    gain: 'AI-for-science model improvement',
    indexScore: 84,
    source: 'https://www.deepprinciple.com/papers/mpa.pdf; https://mp.weixin.qq.com/s/Do3sauQ8oSoRluaCptYe-g',
    note: 'Adjacent AI-for-science recursive-training evidence. Kept for context, excluded from the main self-evolving-agent benchmark signal.',
    family: 'ai-for-science-adjacent',
    includeInMainIndex: false
  }
];

export const mainBenchmarkEvidence = benchmarkEvidence.filter((item) => item.includeInMainIndex !== false);
const topSystemStrength = clamp(
  (average(topSystemProfiles.map((profile) => profile.metadata.composite_score)) / 8) * 100
);
const benchmarkEvidenceScore = clamp(average(mainBenchmarkEvidence.map((item) => item.indexScore)));
const benchmarkProfileStrength = clamp(
  average(topSystemProfiles.map((profile) => (profile.dimensions.D1 ?? 0) * 10))
);
const benchmarkPerformance = clamp(benchmarkEvidenceScore * 0.64 + benchmarkProfileStrength * 0.36);
const reportCoverage = counts.analyzed_projects
  ? clamp(((counts.analyzed_with_public_report ?? 0) / counts.analyzed_projects) * 100)
  : 0;
const timestampConfidence = counts.classified_repos
  ? clamp(100 - ((counts.raw_unknown_time_slice ?? 0) / counts.classified_repos) * 100)
  : 0;
const evidenceStrength = clamp(
  average(topSystemProfiles.map((profile) => (profile.dimensions.D2 ?? 0) * 10)) * 0.7 +
    reportCoverage * 0.3
);
const transferVerification = clamp(
  average(
    topSystemProfiles.map(
      (profile) =>
        (((profile.dimensions.D3 ?? 0) + (profile.dimensions.D4 ?? 0) + (profile.dimensions.U3 ?? 0)) /
          3) *
        10
    )
  )
);
const implementationAccess = clamp(
  average(
    topSystemProfiles.map(
      (profile) =>
        (((profile.dimensions.U1 ?? 0) + (profile.dimensions.U4 ?? 0) + (profile.dimensions.D5 ?? 0)) /
          3) *
        10
    )
  )
);
const recencyMomentum = clamp(average(currentRanking.slice(0, 10).map((project) => project.scores.current_value)));
const starActivityMomentum = clamp(
  average([...starQualityScores].sort((a, b) => b.starActivityScore - a.starActivityScore).slice(0, 10).map((item) => item.starActivityScore))
);
const fieldMomentum = clamp(recencyMomentum * 0.72 + starActivityMomentum * 0.28);
const governanceReadiness = clamp(
  average(topSystemProfiles.map((profile) => (profile.dimensions.D4 ?? 0) * 10)) * 0.68 +
    timestampConfidence * 0.32
);

export const evolveAgiIndexSignals: ScoreSignal[] = [
  {
    id: 'benchmark-performance',
    label: 'Benchmark 表现',
    shortLabel: 'Bench',
    score: round(benchmarkPerformance),
    weight: 18,
    description: '主指数只纳入 agent/code/web/app/algorithm-discovery 等自进化相关 benchmark family；AI-for-science adjacent evidence 单独展示，不进入主分。',
    evidence: 'paper-drafts/appendix.tex + site/src/data/survey.ts + research/ranking-framework/radar-profiles.json'
  },
  {
    id: 'loop-strength',
    label: '核心闭环强度',
    shortLabel: 'Loop',
    score: round(topSystemStrength),
    weight: 20,
    description: 'Top 自进化系统是否真的有可变对象、反馈信号、选择机制和保留机制。',
    evidence: 'site/src/data/rankings.ts + research/ranking-framework/README.md'
  },
  {
    id: 'evidence-chain',
    label: '证据链可信度',
    shortLabel: 'Evidence',
    score: round(evidenceStrength),
    weight: 18,
    description: '综合 D2 证据强度与项目报告覆盖率，防止只有口号没有 raw / report。',
    evidence: 'analysis/github-project-data-analysis.json + projects/INDEX.md'
  },
  {
    id: 'transfer-verification',
    label: '迁移与验证',
    shortLabel: 'Transfer',
    score: round(transferVerification),
    weight: 14,
    description: '改进是否能跨任务、跨环境或跨时间切片迁移，并有验证门约束。',
    evidence: 'paper-drafts/ch5-evaluation.tex + site/src/data/rankings.ts'
  },
  {
    id: 'implementation-access',
    label: '可运行与可复用',
    shortLabel: 'Access',
    score: round(implementationAccess),
    weight: 12,
    description: '系统是否有开源实现、文档、成本效率和实际采用价值。',
    evidence: 'site/src/data/rankings.ts + site/src/data/starAnalysis.ts'
  },
  {
    id: 'field-momentum',
    label: '领域动量',
    shortLabel: 'Momentum',
    score: round(fieldMomentum),
    weight: 10,
    description: '结合证据分诊队列与 Star 活跃度，提示近期研究和工程关注度，不能单独当作价值排名。',
    evidence: 'site/src/data/analysis.json + site/src/data/starAnalysis.ts'
  },
  {
    id: 'governance-readiness',
    label: '治理成熟度',
    shortLabel: 'Governance',
    score: round(governanceReadiness),
    weight: 8,
    description: '看安全、成本、时间戳置信度和可审计边界是否跟上能力增长。',
    evidence: 'site/src/data/rankings.ts + output/raw-github-timestamp-index.md'
  }
];

const weightedScore = evolveAgiIndexSignals.reduce((sum, signal) => sum + signal.score * signal.weight, 0) / 100;
const gradeFor = (score: number) => {
  if (score >= 85) return 'A';
  if (score >= 72) return 'B+';
  if (score >= 60) return 'B';
  if (score >= 45) return 'C';
  return 'D';
};

export const evolveAgiIndex = {
  id: 'evolve-agi-index',
  name: 'Evolve-AGI Index',
  zhName: '自进化系数',
  updated: '2026-06-02',
  score: round(weightedScore),
  grade: gradeFor(weightedScore),
  formula: 'EAI = Σ(signal_score × signal_weight)',
  oneSentence:
    'Evolve-AGI Index 不是 AGI 能力分，而是一个 exploratory evidence-maturity worksheet，用来检查 AI Agent 自进化证据是否足够成熟。',
  thesis:
    '当前领域已经出现强闭环原型和若干 benchmark 增益，但治理、跨域迁移和可复用工程仍是短板；这个 worksheet 只应作为研究优先级和证据缺口提示。',
  counts: {
    classifiedRepos: counts.classified_repos ?? 0,
    analyzedProjects: counts.analyzed_projects ?? 0,
    publicReports: counts.analyzed_with_public_report ?? 0,
    strictEvolutionRepos: counts.raw_core_evolution ?? 0,
    broadEvolutionRepos: counts.raw_broad_evolution ?? 0,
    unknownTimeSlice: counts.raw_unknown_time_slice ?? 0
  },
  benchmark: {
    score: round(benchmarkPerformance),
    evidenceScore: round(benchmarkEvidenceScore),
    profileScore: round(benchmarkProfileStrength),
    evidenceCount: mainBenchmarkEvidence.length
  },
  supportingMetrics: [
    {
      label: 'Benchmark evidence',
      value: mainBenchmarkEvidence.length,
      detail: `${round(benchmarkPerformance)} weighted benchmark signal`
    },
    {
      label: 'Strict self-evolution',
      value: counts.raw_core_evolution ?? 0,
      detail: `${counts.raw_core_evolution ?? 0} / ${counts.classified_repos ?? 0} classified repos`
    },
    {
      label: 'Broad related field',
      value: counts.raw_broad_evolution ?? 0,
      detail: 'memory / skill / evaluation / harness included'
    },
    {
      label: 'Public reports',
      value: counts.analyzed_with_public_report ?? 0,
      detail: `${round(reportCoverage, 0)}% of analyzed projects`
    }
  ],
  leaders: topSystemProfiles.slice(0, 5).map((profile, index) => ({
    rank: index + 1,
    name: profile.system_name,
    score: profile.metadata.composite_score,
    tier: profile.metadata.tier,
    maturity: `L${profile.metadata.maturity_level}`,
    summary: profile.summary
  })),
  currentSignals: currentTopProjects.map((project) => ({
    rank: project.rank,
    name: project.name,
    repo: project.repo,
    category: project.category,
    score: round(project.scores.current_value),
    pattern: project.pattern
  })),
  evidenceLinks: [
    { label: '系统证据队列', href: '/rank/' },
    { label: 'Benchmark 追踪', href: '/evolve-agi-index/#benchmark-performance' },
    { label: '研究优先级队列', href: '/rankings/' },
    { label: 'GitHub 证据链', href: '/github/' },
    {
      label: '方法说明',
      href: 'https://github.com/Shiyao-Huang/awesome-agent-evolution/blob/main/analysis/evolve-agi-index.md'
    }
  ]
};

export const evolveAgiTrend: TrendPoint[] = [
  {
    date: '2026-05-26',
    label: 'Archived baseline',
    score: 67.4,
    benchmarkScore: 72.2,
    strictRepos: 82,
    broadRepos: 186,
    publicReports: 90,
    source: 'work/research/archived-analysis/github-project-data-analysis.json',
    note: 'Backfilled with current formula over archived corpus counts.',
    backfilled: true
  },
  {
    date: '2026-05-29',
    label: 'Site snapshot',
    score: 71.3,
    benchmarkScore: 76.4,
    strictRepos: 90,
    broadRepos: 195,
    publicReports: 187,
    source: 'site/src/data/analysis.json',
    note: 'Previous site snapshot before benchmark became a weighted signal.',
    backfilled: true
  },
  {
    date: '2026-05-30',
    label: 'Benchmark-weighted',
    score: 72.9,
    benchmarkScore: 80.1,
    strictRepos: 90,
    broadRepos: 195,
    publicReports: 193,
    source: 'reports/evolve-agi-index-trend.json',
    note: 'First benchmark-weighted snapshot before the public site data snapshot was synced.'
  },
  {
    date: '2026-06-01',
    label: 'Corpus-synced',
    score: 72.9,
    benchmarkScore: 80.1,
    strictRepos: 93,
    broadRepos: 200,
    publicReports: 239,
    source: 'analysis/github-project-data-analysis.json + site/src/data/analysis.json',
    note: 'Public site data snapshot synced to the latest GitHub analysis corpus.'
  },
  {
    date: evolveAgiIndex.updated,
    label: 'MPA evidence added',
    score: evolveAgiIndex.score,
    benchmarkScore: evolveAgiIndex.benchmark.score,
    strictRepos: counts.raw_core_evolution ?? 0,
    broadRepos: counts.raw_broad_evolution ?? 0,
    publicReports: counts.analyzed_with_public_report ?? 0,
    source: 'https://www.deepprinciple.com/papers/mpa.pdf + https://mp.weixin.qq.com/s/Do3sauQ8oSoRluaCptYe-g',
    note: 'Added MPA / MIRA materials-property benchmark evidence; corpus counts unchanged.'
  }
];

export const evolveAgiTrendSummary = {
  delta: round(evolveAgiTrend[evolveAgiTrend.length - 1].score - evolveAgiTrend[0].score),
  benchmarkDelta: round(
    evolveAgiTrend[evolveAgiTrend.length - 1].benchmarkScore - evolveAgiTrend[0].benchmarkScore
  ),
  latestLabel: evolveAgiTrend[evolveAgiTrend.length - 1].label,
  caveat: 'Trend points before 2026-05-30 are backfilled for comparability; future points should be written as real snapshots.'
};
