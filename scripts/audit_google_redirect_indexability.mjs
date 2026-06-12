#!/usr/bin/env node
import fs from 'node:fs';
import http from 'node:http';
import https from 'node:https';
import path from 'node:path';
import tls from 'node:tls';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distRoot = path.join(root, 'site', 'dist');
const reportJsonPath = path.join(root, 'reports', 'google-redirect-indexability.json');
const reportMdPath = path.join(root, 'reports', 'google-redirect-indexability.md');
const canonicalHost = 'agent-evolution.com';
const canonicalOrigin = `https://${canonicalHost}`;
const legacyPagesOrigin = 'https://shiyao-huang.github.io/awesome-agent-evolution';
const strictMode = process.argv.includes('--strict');
const requestedUrls = process.argv.filter((arg) => /^https?:\/\//.test(arg));
const mdText = (value) => String(value ?? '')
  .replace(/\n/g, ' ')
  .replace(/\|/g, '\\|')
  .replace(/\*/g, '\\*');

const read = (file) => fs.readFileSync(file, 'utf8');
const exists = (file) => fs.existsSync(file);
const unique = (items) => Array.from(new Set(items.filter(Boolean)));
const normalizeUrl = (value) => {
  try {
    return new URL(value).toString();
  } catch {
    return String(value || '');
  }
};

const requestHead = (url, { rejectUnauthorized = true, timeout = 15000 } = {}) => new Promise((resolve) => {
  const lib = url.startsWith('https:') ? https : http;
  const startedAt = Date.now();
  const req = lib.request(url, {
    method: 'HEAD',
    rejectUnauthorized,
    timeout,
    headers: {
      'user-agent': 'SelfEvolveRedirectAudit/1.0'
    }
  }, (res) => {
    res.resume();
    resolve({
      url,
      ok: res.statusCode >= 200 && res.statusCode < 400,
      status_code: res.statusCode,
      location: res.headers.location ? normalizeUrl(new URL(res.headers.location, url).toString()) : null,
      elapsed_ms: Date.now() - startedAt
    });
  });
  req.on('timeout', () => req.destroy(new Error('request timeout')));
  req.on('error', (error) => {
    resolve({
      url,
      ok: false,
      error: error.message,
      code: error.code || null,
      elapsed_ms: Date.now() - startedAt
    });
  });
  req.end();
});

const certCoversHost = (certificate, hostname) => {
  const san = certificate.subjectaltname || '';
  const names = san
    .split(',')
    .map((entry) => entry.trim().replace(/^DNS:/i, '').toLowerCase())
    .filter(Boolean);
  const lowerHost = hostname.toLowerCase();
  return names.some((name) => {
    if (name === lowerHost) return true;
    if (!name.startsWith('*.')) return false;
    const suffix = name.slice(1);
    return lowerHost.endsWith(suffix) && lowerHost.split('.').length === name.split('.').length;
  });
};

const inspectCertificate = (hostname) => new Promise((resolve) => {
  const socket = tls.connect({
    host: hostname,
    port: 443,
    servername: hostname,
    rejectUnauthorized: false,
    timeout: 15000
  }, () => {
    const cert = socket.getPeerCertificate();
    resolve({
      ok: Boolean(cert && Object.keys(cert).length),
      subject: cert.subject || null,
      issuer: cert.issuer || null,
      valid_from: cert.valid_from || null,
      valid_to: cert.valid_to || null,
      subjectaltname: cert.subjectaltname || '',
      covers_host: certCoversHost(cert, hostname)
    });
    socket.end();
  });
  socket.on('timeout', () => socket.destroy(new Error('TLS timeout')));
  socket.on('error', (error) => {
    resolve({ ok: false, error: error.message, code: error.code || null, covers_host: false });
  });
});

const loadPagesState = () => {
  try {
    const output = execFileSync('gh', ['api', 'repos/Shiyao-Huang/awesome-agent-evolution/pages'], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe']
    });
    return JSON.parse(output);
  } catch (error) {
    return { error: error.stderr?.toString().trim() || error.message };
  }
};

const loadSitemapUrls = () => {
  if (!exists(distRoot)) return [];
  const urls = [];
  for (const name of fs.readdirSync(distRoot).filter((entry) => /^sitemap-\d+\.xml$/.test(entry)).sort()) {
    const xml = read(path.join(distRoot, name));
    for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g)) urls.push(match[1]);
  }
  return unique(urls);
};

const hasFileExtension = (pathname) => /\.[a-z0-9]+$/i.test(pathname);
const sitemapUrlProblems = (value) => {
  const problems = [];
  let url;
  try {
    url = new URL(value);
  } catch {
    return ['invalid-url'];
  }
  if (url.protocol !== 'https:') problems.push('not-https');
  if (url.hostname !== canonicalHost) problems.push('not-canonical-host');
  if (url.search) problems.push('has-query');
  if (url.hash) problems.push('has-fragment');
  if (!url.pathname.endsWith('/') && !hasFileExtension(url.pathname)) problems.push('missing-trailing-slash');
  return problems;
};

const canonicalForPath = (pathname) => `${canonicalOrigin}${pathname}`;
const dropTrailingSlash = (pathname) => pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : '';
const samplePaths = (sitemapUrls) => {
  const priority = [
    '/',
    '/graph/',
    '/en/',
    '/topics/self-evolving-ai-agents/',
    '/reports/live-publication-readiness/',
    '/blog/tag/AI%20Self%20Evolution/'
  ];
  const sitemapPaths = sitemapUrls.map((url) => new URL(url).pathname);
  return unique([...priority.filter((pathname) => sitemapPaths.includes(pathname) || pathname === '/reports/google-redirect-indexability/'), ...sitemapPaths.slice(0, 6)]);
};

const classifyVariant = (variant, canonicalUrl) => {
  const status = variant.status_code || 0;
  const location = variant.location || '';
  const normalizedLocation = normalizeUrl(location);
  const normalizedCanonical = normalizeUrl(canonicalUrl);
  if (variant.error) return 'fetch-error';
  if (variant.url === canonicalUrl && status >= 200 && status < 300) return 'canonical-200';
  if (variant.url === canonicalUrl && status >= 300 && status < 400) return 'unexpected-canonical-redirect';
  if (status >= 300 && status < 400 && normalizedLocation === normalizedCanonical) return 'expected-redirect-to-canonical';
  if (status >= 300 && status < 400 && normalizedLocation.startsWith('http://agent-evolution.com/')) return 'redirects-to-http-canonical-host';
  if (status >= 300 && status < 400) return 'redirects-elsewhere';
  if (variant.url.startsWith(`http://${canonicalHost}/`) && status >= 200 && status < 300) return 'http-serves-200-without-https-enforcement';
  if (status >= 200 && status < 300) return 'variant-serves-200';
  return 'other-status';
};

const pages = loadPagesState();
const certificate = await inspectCertificate(canonicalHost);
const sitemapUrls = loadSitemapUrls();
const sitemapProblems = sitemapUrls
  .map((url) => ({ url, problems: sitemapUrlProblems(url) }))
  .filter((entry) => entry.problems.length);

const pathsToCheck = samplePaths(sitemapUrls);
const variantChecks = [];
for (const pathname of pathsToCheck) {
  const canonicalUrl = canonicalForPath(pathname);
  const slashless = dropTrailingSlash(pathname);
  const variants = [
    { kind: 'canonical-relaxed-https', url: canonicalUrl, rejectUnauthorized: false },
    { kind: 'canonical-strict-https', url: canonicalUrl, rejectUnauthorized: true },
    { kind: 'http-apex', url: `http://${canonicalHost}${pathname}`, rejectUnauthorized: false },
    { kind: 'https-www', url: `https://www.${canonicalHost}${pathname}`, rejectUnauthorized: false },
    { kind: 'http-www', url: `http://www.${canonicalHost}${pathname}`, rejectUnauthorized: false },
    slashless ? { kind: 'slashless-https', url: `${canonicalOrigin}${slashless}`, rejectUnauthorized: false } : null,
    { kind: 'github-pages-legacy', url: `${legacyPagesOrigin}${pathname}`, rejectUnauthorized: false }
  ].filter(Boolean);
  for (const variant of variants) {
    variantChecks.push({ pathname, canonical_url: canonicalUrl, ...variant });
  }
}

for (const url of requestedUrls) {
  let pathname = '/';
  try {
    pathname = new URL(url).pathname || '/';
    if (!pathname.endsWith('/') && !hasFileExtension(pathname)) pathname += '/';
  } catch {
    pathname = '/';
  }
  variantChecks.push({
    pathname,
    canonical_url: canonicalForPath(pathname),
    kind: 'gsc-input-url',
    url,
    rejectUnauthorized: false
  });
}

const checkedVariants = await Promise.all(variantChecks.map(async (variant) => {
  const result = await requestHead(variant.url, { rejectUnauthorized: variant.rejectUnauthorized });
  return {
    kind: variant.kind,
    pathname: variant.pathname,
    canonical_url: variant.canonical_url,
    ...result,
    classification: classifyVariant(result, variant.canonical_url)
  };
}));

const countBy = (items, key) => items.reduce((counts, item) => {
  counts[item[key]] = (counts[item[key]] || 0) + 1;
  return counts;
}, {});

const canonicalRelaxed = checkedVariants.filter((entry) => entry.kind === 'canonical-relaxed-https');
const canonicalStrict = checkedVariants.filter((entry) => entry.kind === 'canonical-strict-https');
const unexpectedCanonicalRedirects = canonicalRelaxed.filter((entry) => entry.classification === 'unexpected-canonical-redirect');
const expectedRedirects = checkedVariants.filter((entry) => entry.classification === 'expected-redirect-to-canonical');
const httpServing = checkedVariants.filter((entry) => entry.classification === 'http-serves-200-without-https-enforcement');
const legacyToHttp = checkedVariants.filter((entry) => entry.classification === 'redirects-to-http-canonical-host');
const manualInputs = checkedVariants.filter((entry) => entry.kind === 'gsc-input-url');

const blockingFailures = [];
const warnings = [];
if (!sitemapUrls.length) blockingFailures.push('No local sitemap URLs found. Run the site build first.');
if (sitemapProblems.length) blockingFailures.push(`${sitemapProblems.length} sitemap URL(s) are not canonical final URLs.`);
if (unexpectedCanonicalRedirects.length) blockingFailures.push(`${unexpectedCanonicalRedirects.length} sampled canonical sitemap URL(s) redirect instead of returning 200.`);
if (pages.https_enforced !== true) blockingFailures.push('GitHub Pages HTTPS enforcement is disabled.');
if (certificate.covers_host !== true) blockingFailures.push(`TLS certificate does not cover ${canonicalHost}.`);
if (canonicalStrict.some((entry) => !entry.ok)) warnings.push('Strict HTTPS requests fail until the custom-domain certificate is issued.');
if (httpServing.length) warnings.push(`${httpServing.length} sampled HTTP apex URL(s) return 200; after HTTPS is fixed they should redirect to HTTPS canonical URLs.`);
if (legacyToHttp.length) warnings.push(`${legacyToHttp.length} sampled GitHub Pages legacy URL(s) redirect to http://agent-evolution.com; after HTTPS is fixed they should resolve to HTTPS canonical URLs.`);

const report = {
  generated_at: new Date().toISOString(),
  canonical_origin: canonicalOrigin,
  global_status: blockingFailures.length ? 'fail' : 'pass',
  verdict: unexpectedCanonicalRedirects.length || sitemapProblems.length
    ? 'Some submitted sitemap/canonical URLs appear to be redirecting or non-canonical; fix those URLs before asking Google to validate.'
    : 'The generated sitemap is not submitting redirecting URLs in the checked build. Search Console redirect notices are most likely from non-canonical entry points such as www, slashless paths, HTTP, or the legacy GitHub Pages URL.',
  boundary: 'This audit diagnoses Google Search Console "Page with redirect" reports. It does not prove Google has indexed a page, and it does not replace the live HTTPS readiness audit.',
  blocking_failures: blockingFailures,
  warnings,
  github_pages: {
    cname: pages.cname || null,
    html_url: pages.html_url || null,
    https_enforced: pages.https_enforced ?? null,
    https_certificate: pages.https_certificate ?? null,
    error: pages.error || null
  },
  tls_certificate: certificate,
  sitemap: {
    url_count: sitemapUrls.length,
    canonical_hygiene_pass: sitemapProblems.length === 0,
    problem_count: sitemapProblems.length,
    problems: sitemapProblems.slice(0, 80)
  },
  samples: {
    paths_checked: pathsToCheck,
    classification_counts: countBy(checkedVariants, 'classification'),
    expected_redirects: expectedRedirects,
    unexpected_canonical_redirects: unexpectedCanonicalRedirects,
    http_serving_without_https_enforcement: httpServing,
    legacy_redirects_to_http: legacyToHttp,
    manual_gsc_inputs: manualInputs,
    checked_variants: checkedVariants
  },
  how_to_read_gsc_rows: [
    'If the affected URL is http://agent-evolution.com/*, https://www.agent-evolution.com/*, http://www.agent-evolution.com/*, a slashless path such as /graph, or the shiyao-huang.github.io Pages URL, the redirect is an expected canonicalization entry point. Inspect and validate the HTTPS canonical URL instead.',
    'If the affected URL is already a sitemap URL such as https://agent-evolution.com/graph/ and it still redirects, that is a site bug. Run this script with the affected URL as an argument and fix the route/canonical.',
    'Do not submit fragment URLs such as /graph/#coverage-debt as canonical URLs; inspect /graph/ instead.'
  ]
};

fs.mkdirSync(path.dirname(reportJsonPath), { recursive: true });
fs.writeFileSync(reportJsonPath, `${JSON.stringify(report, null, 2)}\n`);

const failureLines = blockingFailures.length ? blockingFailures.map((failure) => `- ${mdText(failure)}`) : ['- None.'];
const warningLines = warnings.length ? warnings.map((warning) => `- ${mdText(warning)}`) : ['- None.'];
const sitemapProblemLines = sitemapProblems.length
  ? sitemapProblems.slice(0, 25).map((entry) => `| ${entry.url} | ${entry.problems.join(', ')} |`)
  : ['| None | None |'];
const variantLines = checkedVariants.slice(0, 80).map((entry) =>
  `| ${entry.kind} | ${entry.pathname} | ${entry.status_code || entry.code || 'error'} | ${mdText(entry.location || entry.error || '')} | ${entry.classification} |`
);
const manualLines = manualInputs.length
  ? manualInputs.map((entry) => `| ${entry.url} | ${entry.status_code || entry.code || 'error'} | ${mdText(entry.location || entry.error || '')} | ${entry.classification} |`)
  : ['| None supplied | — | — | — |'];

const md = [
  '# Google Redirect Indexability Triage',
  '',
  `Generated: ${report.generated_at}`,
  '',
  `Canonical origin: ${canonicalOrigin}`,
  '',
  `Global status: **${report.global_status.toUpperCase()}**`,
  '',
  '## 一句话结论 / One-Sentence Verdict',
  '',
  '中文：当前 build 的 sitemap 没有把会重定向的 URL 当成 canonical 提交；Search Console 的“网页会自动重定向”更可能来自 `http`、`www`、无尾斜杠或 GitHub Pages 旧域这些非规范入口，但 GitHub Pages HTTPS 证书和强制 HTTPS 仍必须修好。',
  '',
  report.verdict,
  '',
  '## 三句话证据 / Three-Sentence Evidence',
  '',
  `1. 本地 sitemap 观察到 ${sitemapUrls.length} 条 URL，canonical hygiene ${sitemapProblems.length === 0 ? '通过' : '未通过'}：没有 ` + '`http`、`www`、fragment、query 或缺尾斜杠的 sitemap URL。',
  `2. 抽样 canonical URL 在 relaxed HTTPS 下返回 200；但 strict HTTPS 仍受证书阻断，GitHub Pages API 当前显示 HTTPS enforced = \`${String(pages.https_enforced ?? null)}\`。`,
  '3. 抽样非规范入口会出现可解释的 301：`www` 归并到 apex，无尾斜杠归并到尾斜杠，legacy GitHub Pages URL 归并到自定义域；这些 URL 不应被要求单独索引，应该让 Google 看到最终 HTTPS canonical URL。',
  '',
  'In English: the generated sitemap is clean in this build, so Google Search Console redirect rows should be interpreted by URL class. Non-canonical entry points are expected to redirect; canonical sitemap URLs should return 200 and are the URLs to inspect after HTTPS is fixed.',
  '',
  '## What To Fix Now',
  '',
  '1. Keep sitemap, canonical, robots, and internal links on `https://agent-evolution.com/.../` final URLs.',
  '2. In GitHub Pages, finish custom-domain certificate issuance and enable **Enforce HTTPS**. Until then, GitHub Pages can expose `http://agent-evolution.com/` and redirect legacy Pages URLs to HTTP.',
  '3. In Search Console, inspect canonical URLs such as `https://agent-evolution.com/graph/`, not `http`, `www`, slashless, fragment, or `github.io` variants.',
  '4. If Search Console lists a canonical sitemap URL as redirecting, rerun `node scripts/audit_google_redirect_indexability.mjs <affected-url>` and fix that route.',
  '',
  '## Blocking Failures',
  '',
  ...failureLines,
  '',
  '## Warnings',
  '',
  ...warningLines,
  '',
  '## GitHub Pages And TLS State',
  '',
  '| Field | Value |',
  '|---|---|',
  `| CNAME | ${mdText(report.github_pages.cname || 'missing')} |`,
  `| HTML URL | ${mdText(report.github_pages.html_url || 'missing')} |`,
  `| HTTPS enforced | ${String(report.github_pages.https_enforced)} |`,
  `| Certificate covers \`${canonicalHost}\` | ${String(report.tls_certificate.covers_host)} |`,
  `| Certificate SAN | ${mdText(report.tls_certificate.subjectaltname || 'missing')} |`,
  '',
  '## Sitemap Canonical Hygiene',
  '',
  '| Metric | Value |',
  '|---|---:|',
  `| Sitemap URLs | ${sitemapUrls.length} |`,
  `| Problem URLs | ${sitemapProblems.length} |`,
  `| Canonical hygiene pass | ${String(sitemapProblems.length === 0)} |`,
  '',
  '| URL | Problems |',
  '|---|---|',
  ...sitemapProblemLines,
  '',
  '## Checked Redirect Samples',
  '',
  '| Kind | Path | Status | Location/Error | Classification |',
  '|---|---|---:|---|---|',
  ...variantLines,
  '',
  '## Manual GSC Inputs',
  '',
  'Pass affected Search Console URLs as arguments to classify them directly, for example: `node scripts/audit_google_redirect_indexability.mjs https://agent-evolution.com/graph`.',
  '',
  '| URL | Status | Location/Error | Classification |',
  '|---|---:|---|---|',
  ...manualLines,
  '',
  '## How To Read Search Console Rows',
  '',
  '- `http://agent-evolution.com/*`, `https://www.agent-evolution.com/*`, `http://www.agent-evolution.com/*`, slashless paths like `/graph`, and the legacy GitHub Pages repository URL are non-canonical entry points. It is normal for them to be excluded as redirecting pages.',
  '- `https://agent-evolution.com/.../` URLs that appear in `sitemap-0.xml` should not redirect. If one does, it is a route or hosting bug.',
  '- Fragment URLs such as `/graph/#coverage-debt` should be collapsed to `/graph/` for inspection and canonicalization.',
  '',
  '## Evidence Commands',
  '',
  '- `node scripts/audit_google_redirect_indexability.mjs`',
  '- `gh api repos/Shiyao-Huang/awesome-agent-evolution/pages`',
  '- `curl -I https://agent-evolution.com/graph`',
  '- Legacy Pages URL check: `curl -I https://shiyao-huang.github.io/<repo>/graph/`',
  ''
].join('\n');

fs.writeFileSync(reportMdPath, md);

const summary = {
  status: report.global_status,
  sitemap_urls: sitemapUrls.length,
  sitemap_problem_urls: sitemapProblems.length,
  unexpected_canonical_redirects: unexpectedCanonicalRedirects.length,
  expected_redirects: expectedRedirects.length,
  http_serving_without_https_enforcement: httpServing.length,
  legacy_redirects_to_http: legacyToHttp.length,
  https_enforced: report.github_pages.https_enforced,
  cert_covers_host: report.tls_certificate.covers_host,
  report: path.relative(root, reportMdPath)
};
console.log(JSON.stringify(summary, null, 2));

if (strictMode && report.global_status !== 'pass') {
  process.exitCode = 1;
}
