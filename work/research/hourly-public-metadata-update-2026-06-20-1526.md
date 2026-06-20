# Hourly Public Metadata Update - 2026-06-20 15:26 +0800

## One Sentence

Refreshed the tracked GitHub anchors at 2026-06-20 15:26 +0800, propagated the fresher metadata through raw captures, classification, README, Mermaid, site reports, and index-facing surfaces, and removed duplicate front-page metadata blocks.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The GitHub lane is available again in this workspace, so this run records live authenticated GitHub API packets unless a specific request falls back.
GitNexus is usable for repo-relationship evidence in this workspace when `-r awesome-evolution-workspace-cleanup` is specified, but its local index still reports `stale`.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Source |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 598 | 66 | 46 | 1 | 0 | gh_graphql |
| `NousResearch/hermes-agent` | 197,809 | 35,051 | 12,226 | 7,351 | 15,118 | gh_graphql |
| `stanford-iris-lab/meta-harness` | 1,127 | 107 | 11 | 5 | 0 | gh_graphql |
| `rohitg00/agentmemory` | 23,486 | 1,930 | 462 | 152 | 160 | gh_graphql |
| `pinchbench/skill` | 1,242 | 140 | 383 | 21 | 0 | gh_graphql |
| `lsdefine/GenericAgent` | 12,970 | 1,501 | 876 | 87 | 63 | gh_graphql |
| `openclaw/openclaw` | 379,558 | 79,466 | 60,718 | 3,272 | 3,154 | gh_graphql |
| `obra/superpowers` | 233,608 | 20,744 | 609 | 126 | 147 | gh_graphql |
| `EvoMap/awesome-agent-evolution` | 142 | 20 | 65 | 6 | 1 | gh_graphql |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | gh_graphql |
| `desplega-ai/agent-swarm` | 536 | 59 | 1,659 | 1 | 4 | gh_graphql |

## Delta Summary

- Real public deltas vs 2026-06-20 09:24 +0800: `china-qijizhifeng/agentic-Harness-engineering`, `NousResearch/hermes-agent`, `stanford-iris-lab/meta-harness`, `rohitg00/agentmemory`, `lsdefine/GenericAgent`, `openclaw/openclaw`, `obra/superpowers`, `desplega-ai/agent-swarm`.
- Previous packet retained because live fetch degraded: none.

## Working Principle

GitHub API retry/fallback packet -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- Status: Repository: /Users/copizzah/Desktop/work/awesome-evolution
Indexed: 6/16/2026, 8:26:12 AM
Indexed commit: 27fbfcd
Current commit: 850ea9f
Status: ⚠️ stale (re-run gitnexus analyze)
- Query: `node .gitnexus/run.cjs query -r awesome-evolution-workspace-cleanup "hourly public metadata raw-github repo-classification graph.json README site/public/reports/projects"`
- Result: the query resolves the loop back to historical script definitions such as `renderGraphJson`, `renderGraphMd`, `renderRunNote`, and `updateGraphAndNotes`, which is enough to justify the Mermaid truth-source and downstream public-surface coupling in this run.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
