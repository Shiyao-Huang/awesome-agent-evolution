import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const base = (process.env.SITE_BASE_PATH || '/awesome-agent-evolution').replace(/\/$/, '');

if (!base || base === '/') process.exit(0);

const textExtensions = new Set(['.html', '.xml', '.txt', '.json', '.webmanifest']);

const rewriteUrl = (value) => {
  if (!value.startsWith('/')) return value;
  if (value.startsWith('//')) return value;
  if (value === base || value.startsWith(`${base}/`)) return value;
  return `${base}${value}`;
};

const rewrite = (text) =>
  text
    .replace(/\b(href|src|content|action)=(")(\/[^"#?]*[^"]*)(")/g, (_match, attr, quote, value, end) => `${attr}=${quote}${rewriteUrl(value)}${end}`)
    .replace(/\b(href|src|content|action)=(')(\/[^'#?]*[^']*)(')/g, (_match, attr, quote, value, end) => `${attr}=${quote}${rewriteUrl(value)}${end}`)
    .replace(/<loc>(\/[^<]+)<\/loc>/g, (_match, value) => `<loc>${rewriteUrl(value)}</loc>`);

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full);
      continue;
    }
    if (!textExtensions.has(path.extname(full))) continue;
    const before = readFileSync(full, 'utf8');
    const after = rewrite(before);
    if (after !== before) writeFileSync(full, after);
  }
}

walk(root);
console.log(`Applied GitHub Pages base path ${base} to ${root}`);
