# Hourly Public Metadata Update - 2026-06-21 23:06 +0800

## One Sentence

Refreshed the tracked GitHub anchors at 2026-06-21 23:06 +0800, propagated the fresher metadata through raw captures, classification, README, Mermaid, site reports, and index-facing surfaces, and removed duplicate front-page metadata blocks.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The GitHub lane is available again in this workspace, so this run records live authenticated GitHub API packets unless a specific request falls back.
GitNexus is usable for repo-relationship evidence in this workspace when `-r awesome-evolution-workspace-cleanup` is specified, but its local index still reports `stale`.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Source |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 605 | 68 | 46 | 1 | 0 | gh_graphql |
| `NousResearch/hermes-agent` | 198,749 | 35,280 | 12,373 | 7,384 | 15,218 | gh_graphql |
| `stanford-iris-lab/meta-harness` | 1,132 | 108 | 11 | 5 | 0 | gh_graphql |
| `rohitg00/agentmemory` | 23,593 | 1,939 | 462 | 154 | 168 | gh_graphql |
| `pinchbench/skill` | 1,243 | 140 | 383 | 21 | 0 | gh_graphql |
| `lsdefine/GenericAgent` | 12,986 | 1,507 | 878 | 89 | 62 | gh_graphql |
| `openclaw/openclaw` | 379,777 | 79,500 | 61,202 | 3,290 | 3,165 | gh_graphql |
| `obra/superpowers` | 234,773 | 20,840 | 609 | 128 | 151 | gh_graphql |
| `EvoMap/awesome-agent-evolution` | 142 | 20 | 65 | 7 | 1 | gh_graphql |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | gh_graphql |
| `desplega-ai/agent-swarm` | 542 | 60 | 1,660 | 1 | 3 | gh_graphql |

## Delta Summary

- Real public deltas vs 2026-06-21 17:05 +0800: `china-qijizhifeng/agentic-Harness-engineering`, `NousResearch/hermes-agent`, `stanford-iris-lab/meta-harness`, `rohitg00/agentmemory`, `pinchbench/skill`, `lsdefine/GenericAgent`, `openclaw/openclaw`, `obra/superpowers`, `EvoMap/awesome-agent-evolution`, `desplega-ai/agent-swarm`.
- Previous packet retained because live fetch degraded: none.

## Working Principle

GitHub API retry/fallback packet -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- Status: Repository: /Users/copizzah/Desktop/work/awesome-evolution
Indexed: 6/20/2026, 3:29:43 PM
Indexed commit: 850ea9f
Current commit: 6351acf
Status: ⚠️ stale (re-run gitnexus analyze)
- Query: `node .gitnexus/run.cjs query -r awesome-evolution-workspace-cleanup "hourly public metadata raw-github repo-classification graph.json README site/public/reports/projects"`
- Result: the query resolves the loop back to historical script definitions such as `renderGraphJson`, `renderGraphMd`, `renderRunNote`, and `updateGraphAndNotes`, which is enough to justify the Mermaid truth-source and downstream public-surface coupling in this run.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`
- `rg -n "TODO i18n|EN-PENDING|未翻译|待翻译|TODO: translate" README.md README-EN.md site/src docs/seo` returned no matches.

## Validation Notes

- Site build passed with existing Astro/Zod deprecation hints and the known large-chunk warning.
- Paper build passed and wrote `paper-drafts/main.pdf`; the log still contains existing Chinese glyph and table layout warnings in the English paper-facing insert.
