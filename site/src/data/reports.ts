import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const reportsRoot = path.resolve('public/reports');

export interface ReportEntry {
  slug: string;
  title: string;
  category: 'projects' | 'papers';
  href: string;
  excerpt: string;
}

function parseTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Untitled Report';
}

function parseExcerpt(content: string, maxLen = 120): string {
  const lines = content.split('\n').filter((l) => l.trim() && !l.startsWith('#') && !l.startsWith('|') && !l.startsWith('```'));
  const text = lines.slice(0, 3).join(' ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
  return text.length > maxLen ? text.slice(0, maxLen) + '…' : text;
}

function listMarkdownFiles(dir: string, category: 'projects' | 'papers'): ReportEntry[] {
  const full = path.join(reportsRoot, dir);
  if (!statSync(full, { throwIfNoEntry: false })?.isDirectory()) return [];
  return readdirSync(full)
    .filter((f) => f.endsWith('.md') && !/^index\.md$/i.test(f))
    .map((f) => {
      const content = readFileSync(path.join(full, f), 'utf8');
      const slug = f.replace(/\.md$/, '');
      return {
        slug,
        title: parseTitle(content),
        category,
        href: `/reports/${dir}/${slug}`,
        excerpt: parseExcerpt(content)
      };
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export const projectReports: ReportEntry[] = listMarkdownFiles('projects', 'projects');
export const paperReports: ReportEntry[] = listMarkdownFiles('papers', 'papers');
export const allReports: ReportEntry[] = [...projectReports, ...paperReports];
