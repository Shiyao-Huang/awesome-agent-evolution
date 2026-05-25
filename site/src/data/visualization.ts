/**
 * @sm:node site-viz-data-interface
 * Typed data interface for visualization components.
 * Viz builders import from this module to access structured project/research data.
 */
import type { projects } from './projects';

export type ProjectData = (typeof projects)[number];

export interface VizProjectDatum {
  name: string;
  repo: string;
  stars: number;
  forks: number;
  language: string;
  category: string;
  pattern: string;
  tags: string[];
  lastPushed: string;
  license: string;
}

export interface VizCategoryAggregate {
  category: string;
  count: number;
  totalStars: number;
  repos: string[];
}

export interface VizLanguageDistribution {
  language: string;
  count: number;
  repos: string[];
}

export interface VizTimelineEntry {
  year: string;
  month: string;
  count: number;
  repos: string[];
}

export interface VizTagCloud {
  tag: string;
  count: number;
}

/** Transform project data for chart consumption */
export function toVizData(projectList: ProjectData[]): VizProjectDatum[] {
  return projectList.map((p) => ({
    name: p.name,
    repo: p.repo,
    stars: Number(p.stars || 0),
    forks: Number(p.forks || 0),
    language: p.language,
    category: p.category,
    pattern: p.pattern,
    tags: p.tags,
    lastPushed: p.lastPushed,
    license: p.license
  }));
}

/** Aggregate projects by category */
export function aggregateByCategory(data: VizProjectDatum[]): VizCategoryAggregate[] {
  const map = new Map<string, VizCategoryAggregate>();
  for (const p of data) {
    const existing = map.get(p.category);
    if (existing) {
      existing.count++;
      existing.totalStars += p.stars;
      existing.repos.push(p.repo);
    } else {
      map.set(p.category, { category: p.category, count: 1, totalStars: p.stars, repos: [p.repo] });
    }
  }
  return [...map.values()].sort((a, b) => b.totalStars - a.totalStars);
}

/** Aggregate projects by language */
export function aggregateByLanguage(data: VizProjectDatum[]): VizLanguageDistribution[] {
  const map = new Map<string, VizLanguageDistribution>();
  for (const p of data) {
    const existing = map.get(p.language);
    if (existing) {
      existing.count++;
      existing.repos.push(p.repo);
    } else {
      map.set(p.language, { language: p.language, count: 1, repos: [p.repo] });
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count);
}

/** Build tag frequency */
export function buildTagCloud(data: VizProjectDatum[]): VizTagCloud[] {
  const map = new Map<string, number>();
  for (const p of data) {
    for (const tag of p.tags) {
      map.set(tag, (map.get(tag) || 0) + 1);
    }
  }
  return [...map.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/** Build activity timeline */
export function buildTimeline(data: VizProjectDatum[]): VizTimelineEntry[] {
  const map = new Map<string, VizTimelineEntry>();
  for (const p of data) {
    const key = p.lastPushed.slice(0, 7);
    const [year, month] = key.split('-');
    const existing = map.get(key);
    if (existing) {
      existing.count++;
      existing.repos.push(p.repo);
    } else {
      map.set(key, { year, month, count: 1, repos: [p.repo] });
    }
  }
  return [...map.values()].sort((a, b) => `${a.year}-${a.month}`.localeCompare(`${b.year}-${b.month}`));
}
