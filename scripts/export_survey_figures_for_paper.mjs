import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const requireFromSite = createRequire(path.join(root, 'site', 'package.json'));
const sharp = requireFromSite('sharp');

const figures = [
  ['survey-corpus-funnel.png', 'survey/figures/corpus-funnel.svg'],
  ['survey-method-distribution.png', 'survey/figures/method-distribution.svg'],
  ['survey-cross-source-gap.png', 'survey/figures/cross-source-gap.svg'],
  ['survey-painpoint-platform.png', 'survey/figures/painpoint-platform.svg'],
  ['survey-category-theme-heatmap.png', 'survey/figures/category-theme-heatmap.svg'],
  ['survey-framework-radar.png', 'survey/figures/framework-radar.svg'],
];

const outDir = path.join(root, 'paper-drafts', 'figures');
await fs.mkdir(outDir, { recursive: true });

for (const [target, source] of figures) {
  const input = path.join(root, source);
  const output = path.join(outDir, target);
  await sharp(input, { density: 220 })
    .resize({ width: 1600, withoutEnlargement: false })
    .png({ compressionLevel: 9, palette: false })
    .toFile(output);
  console.log(`${source} -> ${path.relative(root, output)}`);
}
