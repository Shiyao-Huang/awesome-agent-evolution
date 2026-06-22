import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL } from 'node:url';

const sourcePath = path.resolve('scripts/hourly-public-metadata-update-2026-06-18-0232.mjs');
const tempPath = path.join(os.tmpdir(), 'hourly-public-metadata-update-2026-06-22-1106.runtime.mjs');

const replacements = new Map([
  [/const runAt = '.*';/, "const runAt = '2026-06-22T11:06:23+08:00';"],
  [/const runDate = '.*';/, "const runDate = '2026-06-22';"],
  [/const runDisplay = '.*';/, "const runDisplay = '2026-06-22 11:06 +0800';"],
  [/const runSlug = '.*';/, "const runSlug = '2026-06-22-1106';"],
  [/const timestampSource = '.*';/, "const timestampSource = 'gh_api_graphql_authenticated_2026_06_22_1106';"],
  [/const previousPacketSlug = '.*';/, "const previousPacketSlug = '2026-06-22-0506';"],
  [/const previousPacketLabel = '.*';/, "const previousPacketLabel = '2026-06-22 05:06 +0800';"],
  [/const previousDataPath = `.*`;/, "const previousDataPath = `work/research/hourly-public-metadata-update-2026-06-22-0506-data.json`;"]
]);

let source = fs.readFileSync(sourcePath, 'utf8');
for (const [pattern, replacement] of replacements) {
  source = source.replace(pattern, replacement);
}

fs.writeFileSync(tempPath, source);
await import(pathToFileURL(tempPath).href);
