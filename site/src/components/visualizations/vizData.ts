import analysisJson from '../../../../analysis/github-project-data-analysis.json';

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
  analyzed_created_month_counts: CountEntry[];
  raw_time_slice_counts: CountEntry[];
};

const analysisData = analysisJson as AnalysisSnapshot;

export type FunnelStage = { label: string; count: number; description: string };
export type TimeBucket = { key: string; count: number };

export const funnelStages: FunnelStage[] = [
  { label: 'Raw Captures', count: analysisData.counts.raw_captures, description: 'GitHub repos captured from awesome lists and search' },
  { label: 'Classified', count: analysisData.counts.classified_repos, description: 'Repositories with category and function tags' },
  { label: 'Analyzed (Model Cards)', count: analysisData.counts.analyzed_projects, description: 'Projects with full model-card analysis' },
  { label: 'Core Evolution', count: analysisData.counts.raw_core_evolution, description: 'Strict self-evolution focused projects' },
  { label: 'Broad Evolution', count: analysisData.counts.raw_broad_evolution, description: 'Broader evolution-related projects' }
];

export const timelineData: TimeBucket[] = analysisData.analyzed_created_month_counts
  .filter((e: CountEntry) => e.key !== 'unknown')
  .sort((a: CountEntry, b: CountEntry) => a.key.localeCompare(b.key));

export const timeSliceData: TimeBucket[] = analysisData.raw_time_slice_counts
  .filter((e: CountEntry) => e.key !== 'unknown' && !e.key.includes('Q') && e.key !== 'early')
  .sort((a: CountEntry, b: CountEntry) => a.key.localeCompare(b.key));
