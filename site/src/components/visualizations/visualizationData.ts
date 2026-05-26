import { projects } from '@/data/projects';
import analysisJson from '../../../../work/research/archived-analysis/github-project-data-analysis.json';

// ── Types ──

type CountEntry = {
  key: string;
  count: number;
};

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

export type FunnelStage = {
  label: string;
  count: number;
  description: string;
};

export type TaxonomyNode = {
  id: string;
  label: string;
  count: number;
  children?: TaxonomyNode[];
};

export type TimeBucket = {
  key: string;
  count: number;
};

export type ProjectRank = {
  name: string;
  repo: string;
  url: string;
  stars: number;
  forks: string | number;
  category: string;
  pattern: string;
  tags: string[];
  lastPushed: string;
  stack: string[];
  description: string;
};

export type RadarDimension = {
  axis: string;
  values: number[];
};

// ── Funnel: Corpus Pipeline ──

export const funnelStages: FunnelStage[] = [
  {
    label: 'Raw Captures',
    count: analysisData.counts.raw_captures,
    description: 'GitHub repos captured from awesome lists and search'
  },
  {
    label: 'Classified',
    count: analysisData.counts.classified_repos,
    description: 'Repositories with category and function tags'
  },
  {
    label: 'Analyzed (Model Cards)',
    count: analysisData.counts.analyzed_projects,
    description: 'Projects with full model-card analysis'
  },
  {
    label: 'Core Evolution',
    count: analysisData.counts.raw_core_evolution,
    description: 'Strict self-evolution focused projects'
  },
  {
    label: 'Broad Evolution',
    count: analysisData.counts.raw_broad_evolution,
    description: 'Broader evolution-related projects'
  }
];

// ── Taxonomy: Method Families ──

const categoryMap = new Map<string, number>();
for (const entry of analysisData.raw_category_counts) {
  categoryMap.set(entry.key, entry.count);
}

const themeMap = new Map<string, number>();
for (const entry of analysisData.raw_theme_counts) {
  themeMap.set(entry.key, entry.count);
}

// Build hierarchy: theme → categories under that theme (from projects)
const themeToCategories = new Map<string, Map<string, number>>();
for (const project of projects) {
  const cats = themeToCategories.get(project.category) || new Map<string, number>();
  for (const tag of project.tags) {
    cats.set(tag, (cats.get(tag) || 0) + 1);
  }
  themeToCategories.set(project.category, cats);
}

// Top-level taxonomy: categories with their projects
export const taxonomyTree: TaxonomyNode[] = (() => {
  const categoryGroups = new Map<string, { count: number; tags: Map<string, number> }>();
  for (const project of projects) {
    const existing = categoryGroups.get(project.category);
    if (existing) {
      existing.count++;
      for (const tag of project.tags) {
        existing.tags.set(tag, (existing.tags.get(tag) || 0) + 1);
      }
    } else {
      const tags = new Map<string, number>();
      for (const tag of project.tags) tags.set(tag, 1);
      categoryGroups.set(project.category, { count: 1, tags });
    }
  }

  return [...categoryGroups.entries()]
    .sort((a, b) => b[1].count - a[1].count)
    .map(([category, data]) => ({
      id: `cat:${category}`,
      label: category,
      count: data.count,
      children: [...data.tags.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([tag, count]) => ({
          id: `tag:${tag}`,
          label: tag,
          count
        }))
    }));
})();

// ── Timeline: Creation Activity ──

export const timelineData: TimeBucket[] = analysisData.analyzed_created_month_counts
  .filter((entry: { key: string; count: number }) => entry.key !== 'unknown')
  .sort((a: { key: string }, b: { key: string }) => a.key.localeCompare(b.key));

export const timeSliceData: TimeBucket[] = analysisData.raw_time_slice_counts
  .filter((entry: { key: string; count: number }) => entry.key !== 'unknown' && !entry.key.includes('Q') && entry.key !== 'early')
  .sort((a: { key: string }, b: { key: string }) => a.key.localeCompare(b.key));

// ── Rank Table: Projects ──

export const projectRankData: ProjectRank[] = [...projects]
  .sort((a, b) => Number(b.stars || 0) - Number(a.stars || 0))
  .map(p => ({
    name: p.name,
    repo: p.repo,
    url: p.url,
    stars: Number(p.stars || 0),
    forks: p.forks,
    category: p.category,
    pattern: p.pattern,
    tags: p.tags,
    lastPushed: p.lastPushed,
    stack: p.stack,
    description: p.description
  }));

// ── Radar: Theme Comparison ──

const topThemes = analysisData.raw_theme_counts
  .filter((e: { key: string }) => e.key !== 'safety')
  .slice(0, 6)
  .map((e: { key: string }) => e.key);

const themeCategoryMatrix = new Map<string, Map<string, number>>();
for (const project of projects) {
  const projectTags = new Set(project.tags.map(t => t.toLowerCase()));
  for (const theme of topThemes) {
    if (!themeCategoryMatrix.has(theme)) themeCategoryMatrix.set(theme, new Map());
    const catMap = themeCategoryMatrix.get(theme)!;
    if (projectTags.has(theme) || project.category.toLowerCase().includes(theme)) {
      catMap.set(project.category, (catMap.get(project.category) || 0) + 1);
    }
  }
}

export const radarDimensions: RadarDimension[] = topThemes.map(theme => {
  const catMap = themeCategoryMatrix.get(theme);
  const topCats = [...(catMap?.entries() || [])].sort((a, b) => b[1] - a[1]).slice(0, 6);
  return {
    axis: theme,
    values: topCats.map(([, count]) => count)
  };
});

// Radar: category coverage (how many themes each category touches)
const allCategories = [...new Set(projects.map(p => p.category))];
export const radarAxes = allCategories.slice(0, 8);
export const radarSeries = topThemes.slice(0, 6).map(theme => {
  const catMap = themeCategoryMatrix.get(theme);
  return {
    name: theme,
    values: radarAxes.map(cat => catMap?.get(cat) || 0)
  };
});

// ── Summary Stats ──

export const summaryStats = {
  totalProjects: projects.length,
  totalRaw: analysisData.counts.raw_captures,
  coreEvolution: analysisData.counts.raw_core_evolution,
  broadEvolution: analysisData.counts.raw_broad_evolution,
  categories: analysisData.raw_category_counts.length,
  themes: analysisData.raw_theme_counts.length,
  topStars: projectRankData[0]?.stars || 0,
  topProject: projectRankData[0]?.name || ''
};
