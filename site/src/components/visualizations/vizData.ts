import analysisJson from '../../../../work/research/archived-analysis/github-project-data-analysis.json';

type CountEntry = { key: string; count: number };
type AnalysisSnapshot = {
  counts: { raw_captures: number; classified_repos: number; analyzed_projects: number; raw_core_evolution: number; raw_broad_evolution: number; };
  analyzed_created_month_counts: CountEntry[];
  raw_time_slice_counts: CountEntry[];
};

const d = analysisJson as AnalysisSnapshot;
export type FunnelStage = { label: string; count: number; description: string };
export type TimeBucket = { key: string; count: number };

export const funnelStages: FunnelStage[] = [
  { label: 'Raw Captures', count: d.counts.raw_captures, description: 'GitHub repos captured from awesome lists and search' },
  { label: 'Classified', count: d.counts.classified_repos, description: 'Repositories with category and function tags' },
  { label: 'Analyzed (Model Cards)', count: d.counts.analyzed_projects, description: 'Projects with full model-card analysis' },
  { label: 'Core Evolution', count: d.counts.raw_core_evolution, description: 'Strict self-evolution focused projects' },
  { label: 'Broad Evolution', count: d.counts.raw_broad_evolution, description: 'Broader evolution-related projects' }
];

export const timelineData: TimeBucket[] = (d.analyzed_created_month_counts || []).filter((e: CountEntry) => e.key !== 'unknown').sort((a: CountEntry, b: CountEntry) => a.key.localeCompare(b.key));
export const timeSliceData: TimeBucket[] = (d.raw_time_slice_counts || []).filter((e: CountEntry) => e.key !== 'unknown' && !e.key.includes('Q') && e.key !== 'early').sort((a: CountEntry, b: CountEntry) => a.key.localeCompare(b.key));
