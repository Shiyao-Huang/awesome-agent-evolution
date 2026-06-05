#!/usr/bin/env node
import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const reportJsonPath = path.join(root, 'reports', 'github-topic-indexing-readiness.json');
const reportMdPath = path.join(root, 'reports', 'github-topic-indexing-readiness.md');
const owner = 'Shiyao-Huang';
const repo = 'awesome-agent-evolution';
const fullName = `${owner}/${repo}`;
const topic = 'agent-evolution';
const topicUrl = `https://github.com/topics/${topic}?o=desc&s=stars`;
const repoUrl = `https://github.com/${fullName}`;
const expectedTopics = [
  'agent-evolution',
  'self-evolving-agents',
  'self-evolution',
  'self-improvement',
  'ai-agent',
  'llm-agent',
  'agent-swarm',
  'memory-system',
  'skill-library',
  'harness-engineering',
  'benchmark'
];
const descriptionTerms = ['agent evolution', 'self-evolving agents', 'memory', 'skills', 'harnesses', 'benchmarks', 'agent-swarm'];

const mdText = (value) => String(value ?? '')
  .replace(/\n/g, ' ')
  .replace(/\|/g, '\\|')
  .replace(/\*/g, '\\*');

const runText = (command, args) => {
  try {
    return {
      ok: true,
      stdout: execFileSync(command, args, {
        cwd: root,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe']
      })
    };
  } catch (error) {
    return {
      ok: false,
      stdout: error.stdout?.toString() || '',
      stderr: error.stderr?.toString().trim() || error.message
    };
  }
};

const runJson = (command, args, fallback = null) => {
  const result = runText(command, args);
  if (!result.ok) return { ok: false, error: result.stderr, data: fallback };
  try {
    return { ok: true, data: JSON.parse(result.stdout) };
  } catch (error) {
    return { ok: false, error: error.message, data: fallback };
  }
};

const fetchText = (url) => new Promise((resolve) => {
  const req = https.get(url, {
    headers: {
      'user-agent': 'SelfEvolveTopicAudit/1.0',
      accept: 'text/html,application/xhtml+xml'
    },
    timeout: 20000
  }, (res) => {
    let body = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      body += chunk;
    });
    res.on('end', () => {
      resolve({
        ok: res.statusCode >= 200 && res.statusCode < 400,
        statusCode: res.statusCode,
        body
      });
    });
  });
  req.on('timeout', () => req.destroy(new Error('request timeout')));
  req.on('error', (error) => resolve({ ok: false, error: error.message, code: error.code || null, body: '' }));
});

const extractTopicPageRepos = (html) => {
  const repos = [];
  const seen = new Set();
  const repoLinkPattern = /href="\/([^/"]+)\/([^/"]+)"[^>]*class="[^"]*Link text-bold wb-break-word[^"]*"/g;
  for (const match of html.matchAll(repoLinkPattern)) {
    const candidate = `${match[1]}/${match[2]}`;
    if (seen.has(candidate)) continue;
    seen.add(candidate);
    repos.push(candidate);
  }
  return repos;
};

const repoView = runJson('gh', [
  'repo',
  'view',
  fullName,
  '--json',
  'nameWithOwner,description,homepageUrl,repositoryTopics,url,stargazerCount,pushedAt,updatedAt'
], {});

const topicsApi = runJson('gh', ['api', `repos/${fullName}/topics`], {});
const repoApi = runJson('gh', ['api', `repos/${fullName}`], {});
const searchResult = runJson('gh', [
  'search',
  'repos',
  '--topic',
  topic,
  '--owner',
  owner,
  '--json',
  'fullName,description,url,stargazersCount,updatedAt',
  '--limit',
  '20'
], []);
const topicPage = await fetchText(topicUrl);
const topicPageRepos = topicPage.ok ? extractTopicPageRepos(topicPage.body) : [];
const localReadme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
const localReadmeEn = fs.readFileSync(path.join(root, 'README-EN.md'), 'utf8');

const repoTopics = topicsApi.data?.names || repoView.data?.repositoryTopics?.map((entry) => entry.name) || [];
const missingExpectedTopics = expectedTopics.filter((name) => !repoTopics.includes(name));
const description = repoView.data?.description || repoApi.data?.description || '';
const homepage = repoView.data?.homepageUrl || repoApi.data?.homepage || '';
const normalizedDescription = description.toLowerCase();
const missingDescriptionTerms = descriptionTerms.filter((term) => !normalizedDescription.includes(term));
const searchItems = Array.isArray(searchResult.data) ? searchResult.data : [];
const searchReturnsRepo = searchItems.some((item) => item.fullName === fullName);
const topicPageIncludesRepo = topicPage.body.includes(`/${fullName}`) || topicPageRepos.includes(fullName);
const topicPageRank = topicPageRepos.indexOf(fullName);

const blockingFailures = [];
const warnings = [];
if (!repoTopics.includes(topic)) blockingFailures.push(`GitHub repository topics do not include ${topic}`);
if (!searchReturnsRepo) blockingFailures.push(`GitHub search did not return ${fullName} for --topic ${topic} --owner ${owner}`);
if (!homepage) blockingFailures.push('GitHub repository homepage URL is missing');
if (!description) blockingFailures.push('GitHub repository description is missing');
if (missingExpectedTopics.length) warnings.push(`Missing expected adjacent topics: ${missingExpectedTopics.join(', ')}`);
if (missingDescriptionTerms.length) warnings.push(`Description does not include every preferred discovery term: ${missingDescriptionTerms.join(', ')}`);
if (!topicPage.ok) warnings.push(`Topic page fetch failed: ${topicPage.error || topicPage.statusCode}`);
if (topicPage.ok && !topicPageIncludesRepo) warnings.push('GitHub topic HTML page did not show the repository in the fetched page; search/API already prove topic membership, so this is treated as page rendering, pagination, or cache lag.');
if (!localReadme.includes('GitHub Topics:') || !localReadme.includes(topic)) warnings.push('README.md does not expose the GitHub Topics line.');
if (!localReadmeEn.includes('GitHub Topics:') || !localReadmeEn.includes(topic)) warnings.push('README-EN.md does not expose the GitHub Topics line.');

const report = {
  generated_at: new Date().toISOString(),
  repository: fullName,
  repository_url: repoUrl,
  topic,
  topic_url: topicUrl,
  global_status: blockingFailures.length ? 'fail' : 'pass',
  verdict: blockingFailures.length
    ? 'The repository still has blocking metadata gaps for GitHub topic discovery.'
    : 'The repository metadata is ready for GitHub topic discovery; API/search membership is verified, while the rendered topic page may lag or paginate.',
  blocking_failures: blockingFailures,
  warnings,
  repository_metadata: {
    description,
    homepage,
    topics: repoTopics,
    stars: repoView.data?.stargazerCount ?? repoApi.data?.stargazers_count ?? null,
    pushed_at: repoView.data?.pushedAt || repoApi.data?.pushed_at || null,
    updated_at: repoView.data?.updatedAt || repoApi.data?.updated_at || null,
    private: repoApi.data?.private ?? null,
    fork: repoApi.data?.fork ?? null,
    archived: repoApi.data?.archived ?? null
  },
  checks: {
    topic_present: repoTopics.includes(topic),
    expected_topics_present: missingExpectedTopics.length === 0,
    description_terms_present: missingDescriptionTerms.length === 0,
    homepage_present: Boolean(homepage),
    search_returns_repo: searchReturnsRepo,
    topic_page_fetch_ok: topicPage.ok,
    topic_page_status_code: topicPage.statusCode || null,
    topic_page_includes_repo: topicPageIncludesRepo,
    topic_page_observed_rank_zero_based: topicPageRank >= 0 ? topicPageRank : null,
    topic_page_first_repositories: topicPageRepos.slice(0, 12)
  },
  evidence_commands: [
    `gh api repos/${fullName}/topics`,
    `gh repo view ${fullName} --json nameWithOwner,description,homepageUrl,repositoryTopics,url,stargazerCount,pushedAt,updatedAt`,
    `gh search repos --topic ${topic} --owner ${owner} --json fullName,description,url,stargazersCount,updatedAt --limit 20`,
    `curl -L -A 'Mozilla/5.0' '${topicUrl}'`
  ]
};

fs.mkdirSync(path.dirname(reportJsonPath), { recursive: true });
fs.writeFileSync(reportJsonPath, `${JSON.stringify(report, null, 2)}\n`);

const listOrNone = (items) => items.length ? items.map((item) => `- ${mdText(item)}`).join('\n') : '- None.';
const topicsCells = repoTopics.map((name) => `\`${name}\``).join(', ');
const firstRepos = report.checks.topic_page_first_repositories.length
  ? report.checks.topic_page_first_repositories.map((name, index) => `| ${index + 1} | [${name}](https://github.com/${name}) |`).join('\n')
  : '| — | No repositories parsed from topic page HTML |';

const md = [
  '# GitHub Topic Indexing Readiness Audit',
  '',
  `Generated: ${report.generated_at}`,
  '',
  `Repository: [${fullName}](${repoUrl})`,
  '',
  `Topic page: [${topic}](${topicUrl})`,
  '',
  `Global status: **${report.global_status.toUpperCase()}**`,
  '',
  '## One-Sentence Verdict',
  '',
  report.verdict,
  '',
  '## 中文结论',
  '',
  blockingFailures.length
    ? `当前仓库仍有 GitHub topic 发现阻断项，必须先修复远端 topics、description 或 homepage。`
    : `当前仓库已经具备 GitHub topic 发现条件：远端 topics 包含 \`${topic}\`，GitHub search 能返回本仓库；如果网页 topic 页没有立刻显示，优先按 GitHub search/API 证据判断，并继续等待页面缓存、分页和排序刷新。`,
  '',
  '## Why The Topic Page Can Look Missing',
  '',
  '- GitHub topic membership is controlled by repository topics, not by website SEO alone.',
  '- The topic page at `s=stars&o=desc` is a rendered ranking surface; it can lag behind Search/API, paginate results, or show a cached subset.',
  '- Repository description, README topic lines, homepage, recent pushes, and adjacent topics improve discoverability, but they do not guarantee immediate visual placement on the first rendered topic page.',
  '',
  '## Blocking Failures',
  '',
  listOrNone(blockingFailures),
  '',
  '## Warnings',
  '',
  listOrNone(warnings),
  '',
  '## Repository Metadata',
  '',
  '| Field | Value |',
  '|---|---|',
  `| Description | ${mdText(description || 'missing')} |`,
  `| Homepage | ${homepage ? `[${homepage}](${homepage})` : 'missing'} |`,
  `| Stars | ${String(report.repository_metadata.stars ?? 'unknown')} |`,
  `| Pushed at | ${mdText(report.repository_metadata.pushed_at || 'unknown')} |`,
  `| Updated at | ${mdText(report.repository_metadata.updated_at || 'unknown')} |`,
  `| Topics | ${topicsCells || 'missing'} |`,
  '',
  '## Checks',
  '',
  '| Check | Result |',
  '|---|---:|',
  `| Topic present on repository | ${String(report.checks.topic_present)} |`,
  `| Expected adjacent topics present | ${String(report.checks.expected_topics_present)} |`,
  `| Discovery terms present in description | ${String(report.checks.description_terms_present)} |`,
  `| Homepage present | ${String(report.checks.homepage_present)} |`,
  `| GitHub Search returns repository | ${String(report.checks.search_returns_repo)} |`,
  `| Topic HTML fetch succeeded | ${String(report.checks.topic_page_fetch_ok)} |`,
  `| Topic HTML includes repository | ${String(report.checks.topic_page_includes_repo)} |`,
  `| Topic page rank observed, zero-based | ${String(report.checks.topic_page_observed_rank_zero_based ?? 'not observed')} |`,
  '',
  '## Topic Page First Parsed Repositories',
  '',
  '| Rank | Repository |',
  '|---:|---|',
  firstRepos,
  '',
  '## Evidence Commands',
  '',
  report.evidence_commands.map((command) => `- \`${command}\``).join('\n'),
  ''
].join('\n');

fs.writeFileSync(reportMdPath, md);

console.log(JSON.stringify({
  status: report.global_status,
  repository: fullName,
  topic,
  topic_present: report.checks.topic_present,
  search_returns_repo: report.checks.search_returns_repo,
  topic_page_includes_repo: report.checks.topic_page_includes_repo,
  blocking_failures: blockingFailures.length,
  warnings: warnings.length,
  report: path.relative(root, reportMdPath)
}, null, 2));

if (blockingFailures.length) {
  process.exitCode = 1;
}
