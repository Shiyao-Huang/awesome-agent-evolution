import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const outDir = path.join(root, 'site/public/visuals');
fs.mkdirSync(outDir, { recursive: true });

const readJson = (relative) => JSON.parse(fs.readFileSync(path.join(root, relative), 'utf8'));

const parseProjects = () => {
  const source = fs.readFileSync(path.join(root, 'site/src/data/projects.ts'), 'utf8');
  const match = source.match(/export const projects: Project\[\] = (\[[\s\S]*?\n\]);/);
  if (!match) throw new Error('Cannot find projects array in site/src/data/projects.ts');
  return vm.runInNewContext(match[1]);
};

const parseProjectGroups = () => {
  const source = fs.readFileSync(path.join(root, 'site/src/data/projects.ts'), 'utf8');
  const match = source.match(/export const projectGroups = (\[[\s\S]*?\n\]);/);
  if (!match) throw new Error('Cannot find projectGroups array in site/src/data/projects.ts');
  return vm.runInNewContext(match[1]);
};

const esc = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const frame = (width, height, title, subtitle, body) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${esc(title)}</title>
  <desc id="desc">${esc(subtitle)}</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#0b1020"/>
      <stop offset="1" stop-color="#101827"/>
    </linearGradient>
    <linearGradient id="teal" x1="0" x2="1">
      <stop offset="0" stop-color="#7cf7d4"/>
      <stop offset="1" stop-color="#5fb4ff"/>
    </linearGradient>
    <linearGradient id="amber" x1="0" x2="1">
      <stop offset="0" stop-color="#ffcf7c"/>
      <stop offset="1" stop-color="#ff8f70"/>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="18" flood-color="#000000" flood-opacity=".28"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" rx="34" fill="url(#bg)"/>
  <path d="M0 90 C220 32 330 132 530 70 S890 56 1200 112" fill="none" stroke="#7cf7d4" stroke-opacity=".13" stroke-width="2"/>
  <path d="M0 510 C210 450 420 560 650 496 S960 430 1200 505" fill="none" stroke="#ffcf7c" stroke-opacity=".12" stroke-width="2"/>
  <text x="46" y="58" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="#f6f8ff">${esc(title)}</text>
  <text x="46" y="88" font-family="Inter, Arial, sans-serif" font-size="14" fill="#aab4d4">${esc(subtitle)}</text>
  ${body}
</svg>
`;

const analysis = readJson('analysis/github-project-data-analysis.json');
const projects = parseProjects();
const projectGroups = parseProjectGroups();

const writeCorpusFunnel = () => {
  const rows = [
    ['Raw captures', analysis.counts.raw_captures, '#7cf7d4'],
    ['Classified repos', analysis.counts.classified_repos, '#5fb4ff'],
    ['Site model cards', analysis.counts.analyzed_projects, '#ffcf7c'],
    ['Evolution-focused projects', analysis.counts.analyzed_evolution_focused, '#ff8f70'],
    ['Strict evolution raw', analysis.counts.raw_core_evolution, '#9f7cff']
  ];
  const max = Math.max(...rows.map(([, value]) => value));
  const body = rows.map(([label, value, color], index) => {
    const y = 146 + index * 76;
    const width = Math.max(58, Math.round((Number(value) / max) * 760));
    return `
  <g filter="url(#softShadow)">
    <rect x="48" y="${y}" width="1000" height="54" rx="18" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.14)"/>
    <rect x="270" y="${y + 10}" width="${width}" height="34" rx="12" fill="${color}"/>
  </g>
  <text x="78" y="${y + 34}" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="750" fill="#f6f8ff">${esc(label)}</text>
  <text x="${290 + width}" y="${y + 34}" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="800" fill="#f6f8ff">${value}</text>`;
  }).join('\n');
  fs.writeFileSync(path.join(outDir, 'github-corpus-funnel.svg'), frame(1100, 570, 'GitHub Corpus Funnel', 'Raw evidence to public project analysis, generated from current repository data.', body));
};

const writeThemeDistribution = () => {
  const rows = analysis.raw_theme_counts.slice(0, 10);
  const max = Math.max(...rows.map((row) => row.count));
  const body = rows.map((row, index) => {
    const x = 80 + index * 96;
    const height = Math.round((row.count / max) * 300);
    const y = 430 - height;
    const fill = index % 3 === 0 ? 'url(#teal)' : index % 3 === 1 ? 'url(#amber)' : '#9f7cff';
    const label = row.key.length > 14 ? `${row.key.slice(0, 13)}.` : row.key;
    return `
  <g>
    <rect x="${x}" y="${y}" width="58" height="${height}" rx="14" fill="${fill}" filter="url(#softShadow)"/>
    <text x="${x + 29}" y="${y - 12}" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="800" fill="#f6f8ff">${row.count}</text>
    <text x="${x + 29}" y="465" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="12" fill="#aab4d4">${esc(label)}</text>
  </g>`;
  }).join('\n');
  fs.writeFileSync(path.join(outDir, 'raw-theme-distribution.svg'), frame(1100, 540, 'Raw Theme Distribution', 'The strongest corpus themes: evaluation, memory, evolution, frameworks, lists, and research agents.', body));
};

const writeProjectGroupMap = () => {
  const groupCounts = projectGroups.map((group) => {
    const repoSet = new Set(group.repos.map((repo) => repo.toLowerCase()));
    return {
      label: group.title,
      count: projects.filter((project) => repoSet.has(project.repo.toLowerCase())).length
    };
  }).filter((row) => row.count > 0).sort((a, b) => b.count - a.count).slice(0, 12);
  const max = Math.max(...groupCounts.map((row) => row.count));
  const body = groupCounts.map((row, index) => {
    const y = 132 + index * 34;
    const width = Math.max(36, Math.round((row.count / max) * 420));
    return `
  <text x="58" y="${y + 17}" font-family="Inter, Arial, sans-serif" font-size="13" fill="#dbe6ff">${esc(row.label.slice(0, 34))}</text>
  <rect x="410" y="${y}" width="${width}" height="22" rx="8" fill="${index % 2 ? 'url(#amber)' : 'url(#teal)'}"/>
  <text x="${430 + width}" y="${y + 17}" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="800" fill="#f6f8ff">${row.count}</text>`;
  }).join('\n');
  fs.writeFileSync(path.join(outDir, 'project-group-map.svg'), frame(1100, 590, 'Project Group Coverage', 'How current public model cards distribute across self-evolution implementation routes.', body));
};

const writeDataFlow = () => {
  const stages = [
    ['Raw', 'GitHub, papers, blogs, social'],
    ['Processed', 'classification, timestamps, analysis'],
    ['Work', 'learning notes, Mermaid graph, blockers'],
    ['Results', 'site, reports, paper PDF']
  ];
  const body = stages.map(([title, note], index) => {
    const x = 72 + index * 250;
    const arrow = index < stages.length - 1 ? `<path d="M${x + 180} 298 C${x + 210} 298 ${x + 220} 298 ${x + 250} 298" stroke="#7cf7d4" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M${x + 244} 286 L${x + 262} 298 L${x + 244} 310" fill="none" stroke="#7cf7d4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>` : '';
    return `
  <g filter="url(#softShadow)">
    <rect x="${x}" y="206" width="190" height="180" rx="26" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.16)"/>
    <circle cx="${x + 95}" cy="252" r="28" fill="${index % 2 ? 'url(#amber)' : 'url(#teal)'}"/>
    <text x="${x + 95}" y="312" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="850" fill="#f6f8ff">${esc(title)}</text>
    <foreignObject x="${x + 24}" y="326" width="142" height="46">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Inter,Arial,sans-serif;font-size:13px;line-height:1.35;color:#aab4d4;text-align:center">${esc(note)}</div>
    </foreignObject>
  </g>${arrow}`;
  }).join('\n');
  fs.writeFileSync(path.join(outDir, 'raw-to-public-data-flow.svg'), frame(1100, 520, 'Raw to Public Data Flow', 'The project governance loop requested by the user: raw, processed, work, and results remain separated but connected.', body));
};

writeCorpusFunnel();
writeThemeDistribution();
writeProjectGroupMap();
writeDataFlow();

console.log(JSON.stringify({
  output: path.relative(root, outDir),
  files: [
    'github-corpus-funnel.svg',
    'raw-theme-distribution.svg',
    'project-group-map.svg',
    'raw-to-public-data-flow.svg'
  ]
}, null, 2));
