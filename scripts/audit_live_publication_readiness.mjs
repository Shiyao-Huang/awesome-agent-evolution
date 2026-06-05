#!/usr/bin/env node
import dns from 'node:dns/promises';
import fs from 'node:fs';
import https from 'node:https';
import http from 'node:http';
import path from 'node:path';
import tls from 'node:tls';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const reportJsonPath = path.join(root, 'reports', 'live-publication-readiness.json');
const reportMdPath = path.join(root, 'reports', 'live-publication-readiness.md');
const host = 'agent-evolution.com';
const canonical = `https://${host}`;
const githubReportsBase = 'https://github.com/Shiyao-Huang/awesome-agent-evolution/blob/main/reports';
const mdText = (value) => String(value ?? '')
  .replace(/\n/g, ' ')
  .replace(/\|/g, '\\|')
  .replace(/\*/g, '\\*');

const requestHead = (url, { rejectUnauthorized = true } = {}) => new Promise((resolve) => {
  const lib = url.startsWith('https:') ? https : http;
  const req = lib.request(url, { method: 'HEAD', rejectUnauthorized, timeout: 15000 }, (res) => {
    res.resume();
    resolve({
      ok: res.statusCode >= 200 && res.statusCode < 400,
      statusCode: res.statusCode,
      location: res.headers.location || null
    });
  });
  req.on('timeout', () => {
    req.destroy(new Error('request timeout'));
  });
  req.on('error', (error) => {
    resolve({
      ok: false,
      error: error.message,
      code: error.code || null
    });
  });
  req.end();
});

const resolveRecords = async (type, name) => {
  try {
    if (type === 'A') return await dns.resolve4(name);
    if (type === 'AAAA') return await dns.resolve6(name);
    if (type === 'CNAME') return await dns.resolveCname(name);
  } catch (error) {
    return { error: error.message, code: error.code || null };
  }
  return [];
};

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
  socket.on('timeout', () => {
    socket.destroy(new Error('TLS timeout'));
  });
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
    return {
      error: error.stderr?.toString().trim() || error.message
    };
  }
};

const pages = loadPagesState();
const dnsRecords = {
  apex_a: await resolveRecords('A', host),
  apex_aaaa: await resolveRecords('AAAA', host),
  www_cname: await resolveRecords('CNAME', `www.${host}`),
  www_a: await resolveRecords('A', `www.${host}`)
};
const strictHome = await requestHead(`${canonical}/`);
const relaxedHome = await requestHead(`${canonical}/`, { rejectUnauthorized: false });
const strictSitemap = await requestHead(`${canonical}/sitemap-index.xml`);
const relaxedSitemap = await requestHead(`${canonical}/sitemap-index.xml`, { rejectUnauthorized: false });
const httpHome = await requestHead(`http://${host}/`, { rejectUnauthorized: false });
const certificate = await inspectCertificate(host);

const blockingFailures = [];
if (pages.cname !== host) blockingFailures.push(`GitHub Pages CNAME is ${pages.cname || 'missing'}, expected ${host}`);
if (pages.https_enforced !== true) blockingFailures.push('GitHub Pages HTTPS enforcement is disabled');
if (certificate.covers_host !== true) blockingFailures.push(`TLS certificate does not cover ${host}`);
if (!strictHome.ok) blockingFailures.push(`Strict HTTPS homepage is not reachable: ${strictHome.error || strictHome.statusCode}`);
if (!strictSitemap.ok) blockingFailures.push(`Strict HTTPS sitemap is not reachable: ${strictSitemap.error || strictSitemap.statusCode}`);

const report = {
  generated_at: new Date().toISOString(),
  canonical_host: canonical,
  global_status: blockingFailures.length ? 'fail' : 'pass',
  boundary: 'Live publication readiness checks external crawl prerequisites. It complements local sitemap/metadata audits and can fail even when the generated site build is valid.',
  blocking_failures: blockingFailures,
  github_pages: {
    cname: pages.cname || null,
    html_url: pages.html_url || null,
    https_enforced: pages.https_enforced ?? null,
    protected_domain_state: pages.protected_domain_state ?? null,
    pending_domain_unverified_at: pages.pending_domain_unverified_at ?? null,
    error: pages.error || null
  },
  dns: dnsRecords,
  tls_certificate: certificate,
  requests: {
    strict_home: strictHome,
    relaxed_home: relaxedHome,
    http_home: httpHome,
    strict_sitemap: strictSitemap,
    relaxed_sitemap: relaxedSitemap
  }
};

fs.mkdirSync(path.dirname(reportJsonPath), { recursive: true });
fs.writeFileSync(reportJsonPath, `${JSON.stringify(report, null, 2)}\n`);

const failureLines = blockingFailures.length
  ? blockingFailures.map((failure) => `- ${mdText(failure)}`)
  : ['- None.'];

const md = [
  '# Live Publication Readiness Audit',
  '',
  `Generated: ${report.generated_at}`,
  '',
  `Canonical host: ${canonical}`,
  '',
  `Global status: **${report.global_status.toUpperCase()}**`,
  '',
  '## One-Sentence Verdict',
  '',
  blockingFailures.length
    ? 'The generated site is locally indexable, but the public custom domain is not yet strict-HTTPS ready for Google-style crawling.'
    : 'The generated site and live custom domain both satisfy the checked publication-readiness conditions.',
  '',
  '## Boundary',
  '',
  report.boundary,
  '',
  `Related generated-site audits: [SEO indexable assets](${githubReportsBase}/seo-indexable-assets.md), [Google indexable routes](${githubReportsBase}/google-indexable-routes.md), and [public i18n route audit](${githubReportsBase}/public-i18n-route-audit.md).`,
  '',
  '## Reader Impact And Next Action',
  '',
  '- What still works today: the generated site builds, sitemap/meta audits pass locally, and relaxed HTTPS/HTTP checks return `200` from GitHub Pages.',
  '- What is blocked: strict HTTPS crawlers cannot trust `https://agent-evolution.com` until GitHub Pages issues a certificate that covers the custom domain.',
  '- Next action: keep the GitHub Pages CNAME on `agent-evolution.com`, wait for certificate issuance or repair domain/DNS verification, enable HTTPS enforcement, then rerun `node scripts/audit_live_publication_readiness.mjs`.',
  '',
  '## Blocking Failures',
  '',
  ...failureLines,
  '',
  '## GitHub Pages State',
  '',
  '| Field | Value |',
  '|---|---|',
  `| CNAME | ${mdText(report.github_pages.cname || 'missing')} |`,
  `| HTML URL | ${mdText(report.github_pages.html_url || 'missing')} |`,
  `| HTTPS enforced | ${String(report.github_pages.https_enforced)} |`,
  `| Protected domain state | ${mdText(report.github_pages.protected_domain_state || 'null')} |`,
  `| Pending domain unverified at | ${mdText(report.github_pages.pending_domain_unverified_at || 'null')} |`,
  '',
  '## TLS Certificate',
  '',
  '| Field | Value |',
  '|---|---|',
  `| Covers \`${host}\` | ${String(report.tls_certificate.covers_host)} |`,
  `| Subject | ${mdText(JSON.stringify(report.tls_certificate.subject || {}))} |`,
  `| Issuer | ${mdText(JSON.stringify(report.tls_certificate.issuer || {}))} |`,
  `| Valid from | ${mdText(report.tls_certificate.valid_from || 'missing')} |`,
  `| Valid to | ${mdText(report.tls_certificate.valid_to || 'missing')} |`,
  `| SAN | ${mdText(report.tls_certificate.subjectaltname || 'missing')} |`,
  '',
  '## Request Checks',
  '',
  '| Check | OK | Status/Error |',
  '|---|---:|---|',
  `| Strict HTTPS homepage | ${String(strictHome.ok)} | ${mdText(strictHome.statusCode || strictHome.error || strictHome.code || '')} |`,
  `| Relaxed HTTPS homepage | ${String(relaxedHome.ok)} | ${mdText(relaxedHome.statusCode || relaxedHome.error || relaxedHome.code || '')} |`,
  `| HTTP homepage | ${String(httpHome.ok)} | ${mdText(`${httpHome.statusCode || httpHome.error || httpHome.code || ''}${httpHome.location ? ` -> ${httpHome.location}` : ''}`)} |`,
  `| Strict HTTPS sitemap | ${String(strictSitemap.ok)} | ${mdText(strictSitemap.statusCode || strictSitemap.error || strictSitemap.code || '')} |`,
  `| Relaxed HTTPS sitemap | ${String(relaxedSitemap.ok)} | ${mdText(relaxedSitemap.statusCode || relaxedSitemap.error || relaxedSitemap.code || '')} |`,
  '',
  '## DNS Observation',
  '',
  'DNS values are recorded as observed from the current runner. The decisive blockers are GitHub Pages HTTPS enforcement and certificate coverage, not local DNS formatting alone. `198.18.0.0/15` values, when present, are runner/resolver-local observations and are not treated as authoritative public DNS evidence.',
  '',
  '## Evidence Commands',
  '',
  '- GitHub Pages API: `gh api repos/Shiyao-Huang/awesome-agent-evolution/pages`',
  '- Strict HTTPS check: `curl -I https://agent-evolution.com/`',
  '- TLS certificate check: `openssl s_client -connect agent-evolution.com:443 -servername agent-evolution.com`',
  '',
  '```json',
  JSON.stringify(dnsRecords, null, 2),
  '```',
  ''
].join('\n');

fs.writeFileSync(reportMdPath, md);

console.log(JSON.stringify({
  status: report.global_status,
  blocking_failures: blockingFailures.length,
  https_enforced: report.github_pages.https_enforced,
  cert_covers_host: report.tls_certificate.covers_host,
  strict_home_ok: strictHome.ok,
  strict_sitemap_ok: strictSitemap.ok,
  report: path.relative(root, reportMdPath)
}, null, 2));

if (report.global_status !== 'pass') {
  process.exitCode = 1;
}
