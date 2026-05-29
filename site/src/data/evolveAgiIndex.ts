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

const topSystemStrength = clamp(
  (average(topSystemProfiles.map((profile) => profile.metadata.composite_score)) / 8) * 100
);
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
    id: 'loop-strength',
    label: '核心闭环强度',
    shortLabel: 'Loop',
    score: round(topSystemStrength),
    weight: 24,
    description: 'Top 自进化系统是否真的有可变对象、反馈信号、选择机制和保留机制。',
    evidence: 'site/src/data/rankings.ts + research/ranking-framework/README.md'
  },
  {
    id: 'evidence-chain',
    label: '证据链可信度',
    shortLabel: 'Evidence',
    score: round(evidenceStrength),
    weight: 22,
    description: '综合 D2 证据强度与项目报告覆盖率，防止只有口号没有 raw / report。',
    evidence: 'analysis/github-project-data-analysis.json + projects/INDEX.md'
  },
  {
    id: 'transfer-verification',
    label: '迁移与验证',
    shortLabel: 'Transfer',
    score: round(transferVerification),
    weight: 16,
    description: '改进是否能跨任务、跨环境或跨时间切片迁移，并有验证门约束。',
    evidence: 'paper-drafts/ch5-evaluation.tex + site/src/data/rankings.ts'
  },
  {
    id: 'implementation-access',
    label: '可运行与可复用',
    shortLabel: 'Access',
    score: round(implementationAccess),
    weight: 14,
    description: '系统是否有开源实现、文档、成本效率和实际采用价值。',
    evidence: 'site/src/data/rankings.ts + site/src/data/starAnalysis.ts'
  },
  {
    id: 'field-momentum',
    label: '领域动量',
    shortLabel: 'Momentum',
    score: round(fieldMomentum),
    weight: 14,
    description: '结合当前价值排名与 Star 活跃度，衡量近期研究和工程热度。',
    evidence: 'site/src/data/analysis.json + site/src/data/starAnalysis.ts'
  },
  {
    id: 'governance-readiness',
    label: '治理成熟度',
    shortLabel: 'Governance',
    score: round(governanceReadiness),
    weight: 10,
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
  updated: '2026-05-30',
  score: round(weightedScore),
  grade: gradeFor(weightedScore),
  formula: 'EAI = Σ(signal_score × signal_weight)',
  oneSentence:
    '自进化系数不是 AGI 能力分，而是用 AGI Index 风格衡量 AI Agent 自进化领域的闭环成熟度、证据质量和可落地程度。',
  thesis:
    '当前领域已经有强闭环原型和快速增长的开源生态，但治理、跨域迁移和可复用工程仍是短板；指数应优先奖励可验证、可回滚、可复跑的进化系统。',
  counts: {
    classifiedRepos: counts.classified_repos ?? 0,
    analyzedProjects: counts.analyzed_projects ?? 0,
    publicReports: counts.analyzed_with_public_report ?? 0,
    strictEvolutionRepos: counts.raw_core_evolution ?? 0,
    broadEvolutionRepos: counts.raw_broad_evolution ?? 0,
    unknownTimeSlice: counts.raw_unknown_time_slice ?? 0
  },
  supportingMetrics: [
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
    { label: '系统 Rank', href: '/rank/' },
    { label: '当前价值排名', href: '/rankings/' },
    { label: 'GitHub 证据链', href: '/github/' },
    {
      label: '方法说明',
      href: 'https://github.com/Shiyao-Huang/awesome-agent-evolution/blob/main/analysis/evolve-agi-index.md'
    }
  ]
};
