# Hourly Public Metadata Update - 2026-06-21 11:07 +0800

## One Sentence

Refreshed the tracked GitHub anchors at 2026-06-21 11:07 +0800, propagated the fresher metadata through raw captures, classification, README, Mermaid, site reports, and index-facing surfaces, and removed duplicate front-page metadata blocks.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The GitHub lane is available again in this workspace, so this run records live authenticated GitHub API packets unless a specific request falls back.
GitNexus status is readable in this workspace, but repo-relationship queries are blocked by a LadybugDB storage-version mismatch; this run records the blocker instead of using stale relationship evidence.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Source |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 600 | 67 | 46 | 1 | 0 | gh_graphql |
| `NousResearch/hermes-agent` | 198,376 | 35,189 | 12,281 | 7,428 | 15,204 | gh_graphql |
| `stanford-iris-lab/meta-harness` | 1,129 | 107 | 11 | 5 | 0 | gh_graphql |
| `rohitg00/agentmemory` | 23,550 | 1,938 | 462 | 154 | 168 | gh_graphql |
| `pinchbench/skill` | 1,243 | 140 | 383 | 21 | 0 | gh_graphql |
| `lsdefine/GenericAgent` | 12,976 | 1,503 | 878 | 89 | 62 | gh_graphql |
| `openclaw/openclaw` | 379,689 | 79,481 | 61,019 | 3,282 | 3,181 | gh_graphql |
| `obra/superpowers` | 234,281 | 20,797 | 609 | 128 | 151 | gh_graphql |
| `EvoMap/awesome-agent-evolution` | 142 | 20 | 65 | 6 | 1 | gh_graphql |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | gh_graphql |
| `desplega-ai/agent-swarm` | 538 | 60 | 1,660 | 1 | 3 | gh_graphql |

## Delta Summary

- Real public deltas vs 2026-06-20 15:26 +0800: `china-qijizhifeng/agentic-Harness-engineering`, `NousResearch/hermes-agent`, `stanford-iris-lab/meta-harness`, `rohitg00/agentmemory`, `pinchbench/skill`, `lsdefine/GenericAgent`, `openclaw/openclaw`, `obra/superpowers`, `desplega-ai/agent-swarm`.
- Previous packet retained because live fetch degraded: none.

## Working Principle

GitHub API retry/fallback packet -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- Status: Repository: /Users/copizzah/Desktop/work/awesome-evolution
Indexed: 6/20/2026, 3:29:43 PM
Indexed commit: 850ea9f
Current commit: 1ec3a56
Status: ⚠️ stale (re-run gitnexus analyze)
- Query: `node .gitnexus/run.cjs query -r awesome-evolution-workspace-cleanup "hourly public metadata raw-github repo-classification graph.json README site/public/reports/projects"`
- Result: blocked. LadybugDB reports a storage-version mismatch (`Database file version: 41`, `Current build storage version: 40`), so this iteration records GitNexus as unavailable for current relationship evidence until the index/tooling is rebuilt or aligned.
- Pre-commit change detection: `node .gitnexus/run.cjs detect_changes --repo awesome-evolution-workspace-cleanup --scope compare --base-ref main` is blocked by the same LadybugDB storage-version mismatch.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
- `node scripts/generate-wiki-index.mjs`
