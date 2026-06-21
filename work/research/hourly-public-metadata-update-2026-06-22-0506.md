# Hourly Public Metadata Update - 2026-06-22 05:06 +0800

## One Sentence

Refreshed the tracked GitHub anchors at 2026-06-22 05:06 +0800, propagated the fresher metadata through raw captures, classification, README, Mermaid, site reports, and index-facing surfaces, and removed duplicate front-page metadata blocks.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The GitHub lane is available again in this workspace, so this run records live authenticated GitHub API packets unless a specific request falls back.
GitNexus is usable for repo-relationship evidence in this workspace when `-r awesome-evolution-workspace-cleanup` is specified, but its local index still reports `stale`.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Source |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 605 | 68 | 46 | 1 | 0 | gh_graphql |
| `NousResearch/hermes-agent` | 198,925 | 35,320 | 12,446 | 7,303 | 15,156 | gh_graphql |
| `stanford-iris-lab/meta-harness` | 1,132 | 108 | 11 | 5 | 0 | gh_graphql |
| `rohitg00/agentmemory` | 23,604 | 1,939 | 462 | 154 | 168 | gh_graphql |
| `pinchbench/skill` | 1,243 | 140 | 383 | 21 | 0 | gh_graphql |
| `lsdefine/GenericAgent` | 12,987 | 1,507 | 878 | 90 | 61 | gh_graphql |
| `openclaw/openclaw` | 379,814 | 79,505 | 61,289 | 3,290 | 3,171 | gh_graphql |
| `obra/superpowers` | 234,928 | 20,858 | 609 | 129 | 149 | gh_graphql |
| `EvoMap/awesome-agent-evolution` | 142 | 20 | 65 | 7 | 1 | gh_graphql |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | gh_graphql |
| `desplega-ai/agent-swarm` | 544 | 60 | 1,660 | 1 | 4 | gh_graphql |

## Delta Summary

- Real public deltas vs 2026-06-21 23:06 +0800: `NousResearch/hermes-agent`, `rohitg00/agentmemory`, `lsdefine/GenericAgent`, `openclaw/openclaw`, `obra/superpowers`, `desplega-ai/agent-swarm`.
- Previous packet retained because live fetch degraded: none.

## Working Principle

GitHub API retry/fallback packet -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- Status: Repository: /Users/copizzah/Desktop/work/awesome-evolution
Indexed: 6/20/2026, 3:29:43 PM
Indexed commit: 850ea9f
Current commit: 0e32b58
Status: ⚠️ stale (re-run gitnexus analyze)
- Query: `node .gitnexus/run.cjs query -r awesome-evolution-workspace-cleanup "hourly public metadata raw-github repo-classification graph.json README site/public/reports/projects"`
- Result: the query resolves the loop back to historical script definitions such as `renderGraphJson`, `renderGraphMd`, `renderRunNote`, and `updateGraphAndNotes`, which is enough to justify the Mermaid truth-source and downstream public-surface coupling in this run.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs` — passed; refreshed `docs/indexes/*`.
- `python3 scripts/enforce_raw_timestamps.py` — passed; `missing_count=0`, `raw-github md=686`, `updated_in_this_run=0`.
- `node scripts/analyze_github_project_data.mjs` — passed; `raw_captures=686`, `classified_repos=686`, `analyzed_projects=300`, `analyzed_evolution_focused=86`.
- `(cd site && npm run build)` — passed; built 1000 static pages and rewrote the GitHub Pages CNAME.
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)` — passed; wrote `main.pdf` with existing glyph/layout warnings.
- `rg -n "TODO i18n|EN-PENDING|未翻译|待翻译|TODO: translate" README.md README-EN.md site/src docs/seo` — passed with no matches.
- `npx gitnexus detect_changes -r awesome-evolution-workspace-cleanup` — passed; 60 changed files scanned, 124 changed symbols, 0 affected processes, low risk. The scan includes pre-existing uncommitted AGENTS/CLAUDE/style diffs that are not staged by this iteration.

## Commit Scope Note

Pre-existing uncommitted files at run start were `AGENTS.md`, `CLAUDE.md`, `site/src/styles/global.css`, `scripts/hourly-public-metadata-update-2026-06-13-1416.mjs`, and several older `work/research/hourly-public-metadata-update-*` artifacts. This iteration preserves them and stages only the 2026-06-22 05:06 metadata packet plus generated public/index/paper outputs that belong to the current run.
