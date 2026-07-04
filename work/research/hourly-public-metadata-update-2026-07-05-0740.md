# Hourly Public Metadata Update - 2026-07-05 07:40 +0800

## One Sentence

Refreshed the tracked GitHub anchors at 2026-07-05 07:40 +0800, propagated the fresher metadata through raw captures, classification, README, Mermaid, site reports, and index-facing surfaces, and removed duplicate front-page metadata blocks.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The GitHub lane is available again in this workspace, so this run records live authenticated GitHub API packets unless a specific request falls back.
The GitNexus lane is limited in this run: `node .gitnexus/run.cjs status` is readable but marks the index `stale`; `query -r awesome-evolution-workspace-cleanup` is blocked by a LadybugDB storage-version mismatch (file:///Users/copizzah/.local/lib/node_modules/gitnexus/dist/core/lbug/pool-adapter.js:325), so this run does not claim refreshed GitNexus relationship evidence.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Source |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 685 | 75 | 46 | 2 | 0 | gh_graphql |
| `NousResearch/hermes-agent` | 209,194 | 38,173 | 14,427 | 8,600 | 17,193 | gh_graphql |
| `stanford-iris-lab/meta-harness` | 1,201 | 116 | 11 | 6 | 0 | gh_graphql |
| `rohitg00/agentmemory` | 24,554 | 2,021 | 463 | 172 | 188 | gh_graphql |
| `pinchbench/skill` | 1,261 | 144 | 383 | 21 | 0 | gh_graphql |
| `lsdefine/GenericAgent` | 13,284 | 1,535 | 895 | 94 | 72 | gh_graphql |
| `openclaw/openclaw` | 381,730 | 80,030 | 64,040 | 3,604 | 3,469 | gh_graphql |
| `obra/superpowers` | 246,190 | 21,830 | 628 | 148 | 174 | gh_graphql |
| `EvoMap/awesome-agent-evolution` | 163 | 23 | 69 | 9 | 2 | gh_graphql |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | gh_graphql |
| `desplega-ai/agent-swarm` | 573 | 65 | 1,756 | 0 | 3 | gh_graphql |

## Delta Summary

- Real public deltas vs 2026-07-05 01:38 +0800: `china-qijizhifeng/agentic-Harness-engineering`, `NousResearch/hermes-agent`, `rohitg00/agentmemory`, `pinchbench/skill`, `lsdefine/GenericAgent`, `openclaw/openclaw`, `obra/superpowers`.
- Previous packet retained because live fetch degraded: none.

## Working Principle

GitHub API retry/fallback packet -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- Status: Repository: /Users/copizzah/Desktop/work/awesome-evolution
Indexed: 6/20/2026, 3:29:43 PM
Indexed commit: 850ea9f
Current commit: ef99b8e
Status: ⚠️ stale (re-run gitnexus analyze)
- Query: `node .gitnexus/run.cjs query -r awesome-evolution-workspace-cleanup "hourly public metadata raw-github repo-classification graph.json README site/public/reports/projects"`
- Result: blocked; file:///Users/copizzah/.local/lib/node_modules/gitnexus/dist/core/lbug/pool-adapter.js:325. This run therefore keeps GitNexus as an explicit blocker rather than relationship evidence.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
