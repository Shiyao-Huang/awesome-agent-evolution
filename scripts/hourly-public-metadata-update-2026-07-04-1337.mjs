import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL } from 'node:url';

const sourcePath = path.resolve('scripts/hourly-public-metadata-update-2026-06-18-0232.mjs');
const tempPath = path.join(os.tmpdir(), 'hourly-public-metadata-update-2026-07-04-1337.runtime.mjs');

const replacements = new Map([
  [/const runAt = '.*';/, "const runAt = '2026-07-04T13:37:00+08:00';"],
  [/const runDate = '.*';/, "const runDate = '2026-07-04';"],
  [/const runDisplay = '.*';/, "const runDisplay = '2026-07-04 13:37 +0800';"],
  [/const runSlug = '.*';/, "const runSlug = '2026-07-04-1337';"],
  [/const timestampSource = '.*';/, "const timestampSource = 'gh_api_graphql_authenticated_2026_07_04_1337';"],
  [/const previousPacketSlug = '.*';/, "const previousPacketSlug = '2026-07-04-0738';"],
  [/const previousPacketLabel = '.*';/, "const previousPacketLabel = '2026-07-04 07:38 +0800';"],
  [/const previousDataPath = `.*`;/, "const previousDataPath = `work/research/hourly-public-metadata-update-2026-07-04-0738-data.json`;"],
]);

let source = fs.readFileSync(sourcePath, 'utf8');
for (const [pattern, replacement] of replacements) {
  source = source.replace(pattern, replacement);
}

fs.writeFileSync(tempPath, source);
await import(pathToFileURL(tempPath).href);
