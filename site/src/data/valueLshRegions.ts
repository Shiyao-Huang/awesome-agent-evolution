import { readFileSync } from 'node:fs';
import path from 'node:path';

type ValueClass = 'high-value-candidate' | 'needs-review' | 'low-signal-or-risk';

type MatrixRow = {
  id: string;
  type: string;
  title: string;
  url?: string | null;
  source_path?: string | null;
  value_score: number;
  confidence: number;
  value_class: ValueClass;
  values: Record<string, number>;
  evidence_refs?: {
    frontier_rank?: number | null;
    star_growth_rank?: number | null;
    public_report?: string | null;
    raw_file?: string | null;
  };
};

type GraphNode = {
  id: string;
  type: string;
  title: string;
  url?: string | null;
  source_path?: string | null;
  value_score: number;
  confidence: number;
  value_class: ValueClass;
  embedding_cluster: string;
  lsh_cluster_hint?: string | null;
  x: number;
  y: number;
  z: number;
};

type GraphSnapshot = {
  generated_at: string;
  summary: {
    nodes: number;
    embedding_clusters: number;
    value_classes: Record<ValueClass, number>;
  };
  nodes: GraphNode[];
};

type ClusterRepresentative = {
  id: string;
  title: string;
  type: string;
  url?: string | null;
  value_score: number;
  confidence: number;
  source_path?: string | null;
};

type RegionKind = 'most-advanced' | 'most-attended' | 'highest-quality';

type RegionDefinition = {
  kind: RegionKind;
  title: string;
  shortLabel: string;
  arrow: string;
  color: string;
  rankingLabel: string;
  metricKey: 'frontier' | 'attention' | 'quality';
};

export type ValueLshEmbeddingCluster = {
  clusterId: string;
  size: number;
  centroid: { x: number; y: number; z: number };
  bounds: {
    min: { x: number; y: number; z: number };
    max: { x: number; y: number; z: number };
  };
  metrics: {
    value: number;
    confidence: number;
    frontier: number;
    attention: number;
    quality: number;
    highValueShare: number;
    githubPaperShare: number;
    socialBlogShare: number;
  };
  dominantTypes: { type: string; count: number }[];
  topPositiveFacets: { id: string; label: string; average: number }[];
  topNegativeFacets: { id: string; label: string; average: number }[];
  semanticTitle: string;
  semanticSummary: string;
  meaning: string;
  representatives: ClusterRepresentative[];
};

export type ValueLshRegion = {
  kind: RegionKind;
  title: string;
  shortLabel: string;
  arrow: string;
  color: string;
  rankingLabel: string;
  metricKey: 'frontier' | 'attention' | 'quality';
  metricValue: number;
  clusterId: string;
  nodeCount: number;
  centroid: { x: number; y: number; z: number };
  bounds: {
    min: { x: number; y: number; z: number };
    max: { x: number; y: number; z: number };
  };
  meaning: string;
  summary: string;
  dominantTypes: { type: string; count: number }[];
  topFacets: { id: string; label: string; average: number }[];
  representatives: ClusterRepresentative[];
  metrics: ValueLshEmbeddingCluster['metrics'];
};

const repoRoot = path.resolve(process.cwd(), '..');
const graphPath = path.join(repoRoot, 'analysis/value-lsh-graph-3d.json');
const matrixPath = path.join(repoRoot, 'data-engine/value-lsh-index/value-matrix.jsonl');

const graphSnapshot = JSON.parse(readFileSync(graphPath, 'utf8')) as GraphSnapshot;
const matrixRows = readFileSync(matrixPath, 'utf8')
  .trim()
  .split('\n')
  .filter(Boolean)
  .map((line) => JSON.parse(line) as MatrixRow);

const matrixById = new Map(matrixRows.map((row) => [row.id, row]));

const facetLabels: Record<string, string> = {
  current_frontier_signal: 'Frontier signal',
  self_evolution_loop_fit: 'Loop fit',
  method_novelty: 'Novelty',
  implementation_runnable: 'Runnable',
  community_momentum: 'Momentum',
  star_growth_current: 'Star growth',
  issue_resource_signal: 'Issue/resource demand',
  useful_for_survey_seo: 'Survey/SEO usefulness',
  evidence_chain_complete: 'Evidence chain',
  verifier_or_benchmark: 'Verifier/benchmark',
  benchmark_result: 'Benchmark result',
  rollback_or_safety: 'Rollback/safety',
  product_usability: 'Usability',
  mutable_artifact_clear: 'Mutable artifact',
  feedback_signal_clear: 'Feedback signal',
  open_source_reuse: 'Reuse',
  retention_or_memory: 'Memory/retention',
  timestamp_freshness: 'Timestamp freshness',
  continuity_active: 'Continuity',
  user_need_fit: 'User-need fit',
  compare_anchor_baseline: 'Comparison anchor',
  teaching_model_card: 'Teaching/model card',
  paper_quality_signal: 'Paper quality',
  hype_without_evidence: 'Hype risk',
  stale_or_unknown_metadata: 'Stale metadata',
  local_code_or_artifact: 'Local artifact',
};

const regionDefinitions: RegionDefinition[] = [
  {
    kind: 'most-advanced',
    title: 'Frontier evidence zone',
    shortLabel: 'Frontier',
    arrow: '↗',
    color: '#FF6B35',
    rankingLabel: '前沿证据',
    metricKey: 'frontier',
  },
  {
    kind: 'most-attended',
    title: 'High-attention evidence zone',
    shortLabel: 'Attention',
    arrow: '→',
    color: '#007AFF',
    rankingLabel: '高关注证据',
    metricKey: 'attention',
  },
  {
    kind: 'highest-quality',
    title: 'Evidence-dense review zone',
    shortLabel: 'Evidence',
    arrow: '↑',
    color: '#2E8B57',
    rankingLabel: '证据密度',
    metricKey: 'quality',
  },
];

const mean = (values: number[]) => values.reduce((sum, value) => sum + value, 0) / (values.length || 1);

const topEntries = (record: Record<string, number>, count: number, order: 'desc' | 'asc') =>
  Object.entries(record)
    .sort((a, b) => order === 'desc' ? b[1] - a[1] : a[1] - b[1])
    .slice(0, count);

const describeCluster = (
  metrics: ValueLshEmbeddingCluster['metrics'],
  topPositive: { id: string; label: string; average: number }[],
  topNegative: { id: string; label: string; average: number }[],
  dominantTypes: { type: string; count: number }[],
) => {
  const topIds = new Set(topPositive.map((item) => item.id));
  const dominantTypeText = dominantTypes.map((item) => `${item.type}:${item.count}`).join(', ');

  if (metrics.quality >= 0.58 && topIds.has('evidence_chain_complete')) {
    return {
      semanticTitle: 'Evidence-backed runnable cluster',
      semanticSummary: `${dominantTypeText}；证据链、验证器和可运行性都比较强。`,
      meaning: '这个簇更适合当论文、首页或公开判断的“证据较完整参考带”，不是热点叙事带，也不是最终质量裁决。',
    };
  }
  if (metrics.attention >= 0.55 && metrics.socialBlogShare >= 0.45) {
    return {
      semanticTitle: 'Attention-heavy discourse cluster',
      semanticSummary: `${dominantTypeText}；关注度和传播面强，但证据密度不一定同步。`,
      meaning: '这个簇适合告诉读者“大家都在看哪里”，但需要额外提醒它不等于证据完备或质量更高。',
    };
  }
  if (metrics.frontier >= 0.62 && topIds.has('self_evolution_loop_fit')) {
    return {
      semanticTitle: 'Frontier self-evolution systems',
      semanticSummary: `${dominantTypeText}；前沿信号、自进化回路和可变对象描述更清晰。`,
      meaning: '这个簇是找“前沿候选路径”时该先看的区域，适合继续做项目级 deep read。',
    };
  }
  if (topIds.has('retention_or_memory')) {
    return {
      semanticTitle: 'Memory and retention substrate cluster',
      semanticSummary: `${dominantTypeText}；长期记忆、回放、知识沉淀是主线。`,
      meaning: '这个簇回答的是 agent 如何把经验沉淀成可复用资产，而不是只追新模型。 ',
    };
  }
  if (topIds.has('benchmark_result') || topIds.has('verifier_or_benchmark')) {
    return {
      semanticTitle: 'Evaluation and benchmark cluster',
      semanticSummary: `${dominantTypeText}；更偏评测、验证器和结果可比性。`,
      meaning: '这个簇的意义在于帮助区分“看起来强”和“真的被测过”的材料。',
    };
  }
  return {
    semanticTitle: 'Mixed evidence exploration cluster',
    semanticSummary: `${dominantTypeText}；同时混合候选、讨论和待修复证据。`,
    meaning: topNegative.length
      ? `这个簇的价值在于比较，而不是直接下结论。当前主要风险是 ${topNegative[0].label.toLowerCase()}。`
      : '这个簇的价值在于比较，而不是直接下结论；它更像一个探索区而不是结论区。',
  };
};

const themeScore = (theme: RegionDefinition, cluster: ValueLshEmbeddingCluster) => {
  const metrics = cluster.metrics;
  if (theme.kind === 'most-advanced') {
    return (
      metrics.frontier * 0.42 +
      (metrics.value / 100) * 0.28 +
      metrics.highValueShare * 0.18 +
      metrics.githubPaperShare * 0.12
    );
  }
  if (theme.kind === 'most-attended') {
    return (
      metrics.attention * 0.45 +
      metrics.socialBlogShare * 0.2 +
      (metrics.value / 100) * 0.15 +
      metrics.highValueShare * 0.1 +
      metrics.frontier * 0.1
    );
  }
  return (
    metrics.quality * 0.4 +
    (metrics.confidence / 100) * 0.25 +
    (metrics.value / 100) * 0.2 +
    metrics.highValueShare * 0.15
  );
};

const embeddingClusters = Object.entries(
  graphSnapshot.nodes.reduce((acc, node) => {
    const row = matrixById.get(node.id);
    if (!row) return acc;
    const list = acc[node.embedding_cluster] || [];
    list.push({ node, row });
    acc[node.embedding_cluster] = list;
    return acc;
  }, {} as Record<string, { node: GraphNode; row: MatrixRow }[]>),
).map(([clusterId, members]) => {
  const xs = members.map(({ node }) => node.x);
  const ys = members.map(({ node }) => node.y);
  const zs = members.map(({ node }) => node.z);
  const typeCounts = members.reduce((acc, { row }) => {
    acc[row.type] = (acc[row.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const classCounts = members.reduce((acc, { row }) => {
    acc[row.value_class] = (acc[row.value_class] || 0) + 1;
    return acc;
  }, {} as Record<ValueClass, number>);
  const facetAverages = members.reduce((acc, { row }) => {
    for (const [facetId, value] of Object.entries(row.values || {})) {
      acc[facetId] = (acc[facetId] || 0) + value;
    }
    return acc;
  }, {} as Record<string, number>);
  for (const facetId of Object.keys(facetAverages)) {
    facetAverages[facetId] /= members.length;
  }

  const dominantTypes = topEntries(typeCounts, 3, 'desc').map(([type, count]) => ({ type, count }));
  const topPositiveFacets = topEntries(facetAverages, 6, 'desc')
    .filter(([, average]) => average > 0)
    .map(([id, average]) => ({ id, label: facetLabels[id] || id, average: Number(average.toFixed(3)) }));
  const topNegativeFacets = topEntries(facetAverages, 4, 'asc')
    .filter(([, average]) => average < 0)
    .map(([id, average]) => ({ id, label: facetLabels[id] || id, average: Number(average.toFixed(3)) }));

  const metrics = {
    value: Number(mean(members.map(({ row }) => row.value_score)).toFixed(2)),
    confidence: Number(mean(members.map(({ row }) => row.confidence)).toFixed(2)),
    frontier: Number(mean(members.map(({ row }) => mean([
      row.values.current_frontier_signal || 0,
      row.values.self_evolution_loop_fit || 0,
      row.values.method_novelty || 0,
      row.values.implementation_runnable || 0,
    ]))).toFixed(3)),
    attention: Number(mean(members.map(({ row }) => mean([
      row.values.community_momentum || 0,
      row.values.star_growth_current || 0,
      row.values.issue_resource_signal || 0,
      row.values.useful_for_survey_seo || 0,
    ]))).toFixed(3)),
    quality: Number(mean(members.map(({ row }) => mean([
      row.values.evidence_chain_complete || 0,
      row.values.verifier_or_benchmark || 0,
      row.values.benchmark_result || 0,
      row.values.rollback_or_safety || 0,
      row.values.product_usability || 0,
    ]))).toFixed(3)),
    highValueShare: Number(((classCounts['high-value-candidate'] || 0) / members.length).toFixed(3)),
    githubPaperShare: Number(((members.filter(({ row }) => row.type === 'github' || row.type === 'paper').length) / members.length).toFixed(3)),
    socialBlogShare: Number(((members.filter(({ row }) => row.type === 'social' || row.type === 'blog').length) / members.length).toFixed(3)),
  };

  const semantic = describeCluster(metrics, topPositiveFacets, topNegativeFacets, dominantTypes);

  return {
    clusterId,
    size: members.length,
    centroid: {
      x: Number(mean(xs).toFixed(3)),
      y: Number(mean(ys).toFixed(3)),
      z: Number(mean(zs).toFixed(3)),
    },
    bounds: {
      min: {
        x: Number((Math.min(...xs) - 0.06).toFixed(3)),
        y: Number((Math.min(...ys) - 0.06).toFixed(3)),
        z: Number((Math.min(...zs) - 0.06).toFixed(3)),
      },
      max: {
        x: Number((Math.max(...xs) + 0.06).toFixed(3)),
        y: Number((Math.max(...ys) + 0.06).toFixed(3)),
        z: Number((Math.max(...zs) + 0.06).toFixed(3)),
      },
    },
    metrics,
    dominantTypes,
    topPositiveFacets,
    topNegativeFacets,
    semanticTitle: semantic.semanticTitle,
    semanticSummary: semantic.semanticSummary,
    meaning: semantic.meaning,
    representatives: members
      .slice()
      .sort((a, b) => b.row.value_score - a.row.value_score)
      .slice(0, 4)
      .map(({ row }) => ({
        id: row.id,
        title: row.title,
        type: row.type,
        url: row.url || null,
        value_score: row.value_score,
        confidence: row.confidence,
        source_path: row.source_path || null,
      })),
  } satisfies ValueLshEmbeddingCluster;
}).sort((a, b) => (
  (b.metrics.value + b.metrics.confidence * 0.45 + b.metrics.highValueShare * 100 * 0.15)
  - (a.metrics.value + a.metrics.confidence * 0.45 + a.metrics.highValueShare * 100 * 0.15)
));

const selectedClusterIds = new Set<string>();

const valueLshRegions = regionDefinitions.map((definition) => {
  const candidates = embeddingClusters
    .filter((cluster) => cluster.size >= 24)
    .filter((cluster) => definition.kind !== 'most-attended' || cluster.metrics.socialBlogShare >= 0.25)
    .filter((cluster) => definition.kind !== 'highest-quality' || cluster.metrics.githubPaperShare >= 0.25)
    .filter((cluster) => definition.kind !== 'most-advanced' || cluster.metrics.githubPaperShare >= 0.2)
    .sort((a, b) => themeScore(definition, b) - themeScore(definition, a));
  const chosen = candidates.find((cluster) => !selectedClusterIds.has(cluster.clusterId)) || candidates[0];
  if (chosen) selectedClusterIds.add(chosen.clusterId);
  if (!chosen) {
    throw new Error(`No embedding cluster available for ${definition.kind}`);
  }
  return {
    kind: definition.kind,
    title: definition.title,
    shortLabel: definition.shortLabel,
    arrow: definition.arrow,
    color: definition.color,
    rankingLabel: definition.rankingLabel,
    metricKey: definition.metricKey,
    metricValue: chosen.metrics[definition.metricKey],
    clusterId: chosen.clusterId,
    nodeCount: chosen.size,
    centroid: chosen.centroid,
    bounds: chosen.bounds,
    meaning: chosen.meaning,
    summary: chosen.semanticSummary,
    dominantTypes: chosen.dominantTypes,
    topFacets: chosen.topPositiveFacets.slice(0, 4),
    representatives: chosen.representatives,
    metrics: chosen.metrics,
  } satisfies ValueLshRegion;
}).sort((a, b) => b.metricValue - a.metricValue);

export { graphSnapshot as valueLshGraphSnapshot, embeddingClusters as valueLshEmbeddingClusters, valueLshRegions };
