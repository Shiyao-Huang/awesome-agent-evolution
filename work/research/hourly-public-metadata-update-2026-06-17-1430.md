# Hourly Public Metadata Update - 2026-06-17 14:30 +0800

## One Sentence

Refreshed the tracked GitHub anchors at 2026-06-17 14:30 +0800, propagated the fresher metadata through raw captures, classification, README, Mermaid, site reports, and index-facing surfaces, and removed duplicate front-page metadata blocks.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The GitHub lane is available again in this workspace, so this run records live authenticated GitHub API packets unless a specific request falls back.
GitNexus is usable for repo-relationship evidence in this workspace when `-r awesome-evolution-workspace-cleanup` is specified, but its local index still reports `stale`.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Source |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 583 | 65 | 46 | 0 | 0 | gh_graphql |
| `NousResearch/hermes-agent` | 195,585 | 34,358 | 11,857 | 7,014 | 14,329 | gh_graphql |
| `stanford-iris-lab/meta-harness` | 1,101 | 105 | 11 | 5 | 0 | gh_graphql |
| `rohitg00/agentmemory` | 23,192 | 1,912 | 462 | 148 | 160 | gh_graphql |
| `pinchbench/skill` | 1,235 | 140 | 383 | 21 | 1 | gh_graphql |
| `lsdefine/GenericAgent` | 12,927 | 1,495 | 866 | 83 | 63 | gh_graphql |
| `openclaw/openclaw` | 379,087 | 79,340 | 59,657 | 3,281 | 3,018 | gh_graphql |
| `obra/superpowers` | 230,146 | 20,463 | 602 | 123 | 162 | gh_graphql |
| `EvoMap/awesome-agent-evolution` | 141 | 20 | 64 | 6 | 1 | gh_graphql |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | gh_graphql |
| `desplega-ai/agent-swarm` | 532 | 59 | 1,641 | 1 | 4 | gh_graphql |

## Delta Summary

- Real public deltas vs 2026-06-17 08:29 +0800: `china-qijizhifeng/agentic-Harness-engineering`, `NousResearch/hermes-agent`, `stanford-iris-lab/meta-harness`, `rohitg00/agentmemory`, `pinchbench/skill`, `lsdefine/GenericAgent`, `openclaw/openclaw`, `obra/superpowers`, `desplega-ai/agent-swarm`.
- Previous packet retained because live fetch degraded: none.

## Working Principle

GitHub API retry/fallback packet -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- Status: Repository: /Users/copizzah/Desktop/work/awesome-evolution
Indexed: 6/16/2026, 8:26:12 AM
Indexed commit: 27fbfcd
Current commit: 43aadb6
Status: ⚠️ stale (re-run gitnexus analyze)
- Query: `node .gitnexus/run.cjs query -r awesome-evolution-workspace-cleanup "hourly public metadata raw-github repo-classification graph.json README site/public/reports/projects"`
- Result: the query resolves the loop back to historical script definitions such as `renderGraphJson`, `renderGraphMd`, `renderRunNote`, and `updateGraphAndNotes`, which is enough to justify the Mermaid truth-source and downstream public-surface coupling in this run.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
