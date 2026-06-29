import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL } from 'node:url';

const sourcePath = path.resolve('scripts/hourly-public-metadata-update-2026-06-18-0232.mjs');
const tempPath = path.join(os.tmpdir(), 'hourly-public-metadata-update-2026-06-30-0503.runtime.mjs');

const replacements = new Map([
  [/const runAt = '.*';/, "const runAt = '2026-06-30T05:03:14+08:00';"],
  [/const runDate = '.*';/, "const runDate = '2026-06-30';"],
  [/const runDisplay = '.*';/, "const runDisplay = '2026-06-30 05:03 +0800';"],
  [/const runSlug = '.*';/, "const runSlug = '2026-06-30-0503';"],
  [/const timestampSource = '.*';/, "const timestampSource = 'gh_api_graphql_authenticated_2026_06_30_0503';"],
  [/const previousPacketSlug = '.*';/, "const previousPacketSlug = '2026-06-29-1703';"],
  [/const previousPacketLabel = '.*';/, "const previousPacketLabel = '2026-06-29 17:03 +0800';"],
  [/const previousDataPath = `.*`;/, "const previousDataPath = `work/research/hourly-public-metadata-update-2026-06-29-1703-data.json`;"]
]);

let source = fs.readFileSync(sourcePath, 'utf8');
for (const [pattern, replacement] of replacements) {
  source = source.replace(pattern, replacement);
}

fs.writeFileSync(tempPath, source);
await import(pathToFileURL(tempPath).href);
