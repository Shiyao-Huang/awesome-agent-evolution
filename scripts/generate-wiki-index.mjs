#!/usr/bin/env node
// @sm:node generate-wiki-index
// Scans work/wiki/ for all .md files, extracts frontmatter (title, tags, rank),
// and generates work/wiki/search-index.json for fast keyword→file lookup.
// Usage: node scripts/generate-wiki-index.mjs

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, relative } from 'path';

const WIKI_DIR = join(process.cwd(), 'work/wiki');
const OUTPUT = join(WIKI_DIR, 'search-index.json');

function walkDir(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) results.push(...walkDir(full));
    else if (entry.endsWith('.md') && entry !== 'index.md' && entry !== 'log.md' && entry !== 'schema.md') {
      results.push(full);
    }
  }
  return results;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*(.+)$/);
    if (m) {
      let val = m[2].trim();
      if (val.startsWith('[') && val.endsWith(']')) {
        val = val.slice(1, -1).split(',').map(s => s.trim().replace(/['"]/g, ''));
      }
      fm[m[1]] = val;
    }
  }
  return fm;
}

function extractKeywords(content) {
  const body = content.replace(/^---[\s\S]*?---\n/, '');
  const headings = [...body.matchAll(/^#+\s+(.+)$/gm)].map(m => m[1]);
  const boldTerms = [...body.matchAll(/\*\*(.+?)\*\*/g)].map(m => m[1]);
  const linkedTerms = [...body.matchAll(/\[\[(.+?)\]\]/g)].map(m => m[1]);
  return [...new Set([...headings, ...boldTerms, ...linkedTerms])].slice(0, 20);
}

// Main
if (!existsSync(WIKI_DIR)) {
  console.error('work/wiki/ not found. Run from project root.');
  process.exit(1);
}

const files = walkDir(WIKI_DIR);
const index = {};
const catalog = [];

for (const fullPath of files) {
  const relPath = relative(WIKI_DIR, fullPath);
  const content = readFileSync(fullPath, 'utf-8');
  const fm = parseFrontmatter(content);
  const keywords = extractKeywords(content);
  const title = fm.title || relPath.replace(/\.md$/, '');
  const tags = Array.isArray(fm.tags) ? fm.tags : (fm.tags ? [fm.tags] : []);
  const rank = fm.rank || 'C';
  const type = fm.type || relPath.split('/')[0].replace(/s$/, '');

  // Keyword index
  const allTerms = [title, ...tags, ...keywords];
  for (const term of allTerms) {
    const key = term.toLowerCase().trim();
    if (!key || key.length < 2) continue;
    if (!index[key]) index[key] = [];
    if (!index[key].includes(relPath)) index[key].push(relPath);
  }

  catalog.push({ path: relPath, title, rank, type, tags });
}

const output = {
  generated: new Date().toISOString(),
  stats: { pages: files.length, keywords: Object.keys(index).length },
  catalog,
  index
};

writeFileSync(OUTPUT, JSON.stringify(output, null, 2));
console.log(`Generated ${OUTPUT}: ${files.length} pages, ${Object.keys(index).length} keywords`);
