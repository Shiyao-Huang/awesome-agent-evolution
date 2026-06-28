# Hourly Public Metadata Update - 2026-06-29 05:00 +0800

## One Sentence

Refreshed the tracked GitHub anchors at 2026-06-29 05:00 +0800, propagated the fresher metadata through raw captures, classification, README, Mermaid, site reports, and index-facing surfaces, and removed duplicate front-page metadata blocks.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The GitHub lane is available again in this workspace, so this run records live authenticated GitHub API packets unless a specific request falls back.
The GitNexus lane is limited in this run: `node .gitnexus/run.cjs status` is readable but marks the index `stale`; `query -r awesome-evolution-workspace-cleanup` is blocked by a LadybugDB storage-version mismatch (file:///Users/copizzah/.local/lib/node_modules/gitnexus/dist/core/lbug/pool-adapter.js:325), so this run does not claim refreshed GitNexus relationship evidence.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Source |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 642 | 74 | 46 | 2 | 0 | gh_graphql |
| `NousResearch/hermes-agent` | 204,906 | 36,943 | 13,379 | 7,824 | 16,207 | gh_graphql |
| `stanford-iris-lab/meta-harness` | 1,166 | 113 | 11 | 5 | 0 | gh_graphql |
| `rohitg00/agentmemory` | 24,216 | 1,990 | 463 | 162 | 177 | gh_graphql |
| `pinchbench/skill` | 1,256 | 143 | 383 | 21 | 0 | gh_graphql |
| `lsdefine/GenericAgent` | 13,140 | 1,524 | 891 | 95 | 63 | gh_graphql |
| `openclaw/openclaw` | 380,856 | 79,781 | 62,556 | 3,355 | 3,302 | gh_graphql |
| `obra/superpowers` | 240,594 | 21,364 | 609 | 136 | 147 | gh_graphql |
| `EvoMap/awesome-agent-evolution` | 145 | 20 | 67 | 8 | 1 | gh_graphql |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | gh_graphql |
| `desplega-ai/agent-swarm` | 552 | 62 | 1,692 | 1 | 3 | gh_graphql |

## Delta Summary

- Real public deltas vs 2026-06-28 22:59 +0800: `china-qijizhifeng/agentic-Harness-engineering`, `NousResearch/hermes-agent`, `rohitg00/agentmemory`, `pinchbench/skill`, `lsdefine/GenericAgent`, `openclaw/openclaw`, `obra/superpowers`, `desplega-ai/agent-swarm`.
- Previous packet retained because live fetch degraded: none.

## Working Principle

GitHub API retry/fallback packet -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- Status: Repository: /Users/copizzah/Desktop/work/awesome-evolution
Indexed: 6/20/2026, 3:29:43 PM
Indexed commit: 850ea9f
Current commit: ba004bd
Status: ⚠️ stale (re-run gitnexus analyze)
- Query: `node .gitnexus/run.cjs query -r awesome-evolution-workspace-cleanup "hourly public metadata raw-github repo-classification graph.json README site/public/reports/projects"`
- Result: blocked; file:///Users/copizzah/.local/lib/node_modules/gitnexus/dist/core/lbug/pool-adapter.js:325. This run therefore keeps GitNexus as an explicit blocker rather than relationship evidence.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
