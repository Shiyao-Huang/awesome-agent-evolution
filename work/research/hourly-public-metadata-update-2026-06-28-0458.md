# Hourly Public Metadata Update - 2026-06-28 04:58 +0800

## One Sentence

Refreshed the tracked GitHub anchors at 2026-06-28 04:58 +0800, propagated the fresher metadata through raw captures, classification, README, Mermaid, site reports, and index-facing surfaces, and removed duplicate front-page metadata blocks.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The GitHub lane is available again in this workspace, so this run records live authenticated GitHub API packets unless a specific request falls back.
The GitNexus lane is limited in this run: `node .gitnexus/run.cjs status` is readable but marks the index `stale`; `query -r awesome-evolution-workspace-cleanup` is blocked by a LadybugDB storage-version mismatch (file:///Users/copizzah/.local/lib/node_modules/gitnexus/dist/core/lbug/pool-adapter.js:325), so this run does not claim refreshed GitNexus relationship evidence.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Source |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 638 | 73 | 46 | 2 | 0 | gh_graphql |
| `NousResearch/hermes-agent` | 204,294 | 36,758 | 13,178 | 7,872 | 16,207 | gh_graphql |
| `stanford-iris-lab/meta-harness` | 1,165 | 113 | 11 | 5 | 0 | gh_graphql |
| `rohitg00/agentmemory` | 24,158 | 1,986 | 462 | 161 | 177 | gh_graphql |
| `pinchbench/skill` | 1,254 | 143 | 383 | 21 | 0 | gh_graphql |
| `lsdefine/GenericAgent` | 13,128 | 1,523 | 887 | 95 | 62 | gh_graphql |
| `openclaw/openclaw` | 380,730 | 79,767 | 62,455 | 3,364 | 3,376 | gh_graphql |
| `obra/superpowers` | 239,999 | 21,297 | 609 | 135 | 151 | gh_graphql |
| `EvoMap/awesome-agent-evolution` | 145 | 20 | 67 | 8 | 1 | gh_graphql |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | gh_graphql |
| `desplega-ai/agent-swarm` | 551 | 62 | 1,688 | 1 | 5 | gh_graphql |

## Delta Summary

- Real public deltas vs 2026-06-27 16:56 +0800: `china-qijizhifeng/agentic-Harness-engineering`, `NousResearch/hermes-agent`, `stanford-iris-lab/meta-harness`, `rohitg00/agentmemory`, `lsdefine/GenericAgent`, `openclaw/openclaw`, `obra/superpowers`, `desplega-ai/agent-swarm`.
- Previous packet retained because live fetch degraded: none.

## Working Principle

GitHub API retry/fallback packet -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- Status: Repository: /Users/copizzah/Desktop/work/awesome-evolution
Indexed: 6/20/2026, 3:29:43 PM
Indexed commit: 850ea9f
Current commit: 2f97776
Status: ⚠️ stale (re-run gitnexus analyze)
- Query: `node .gitnexus/run.cjs query -r awesome-evolution-workspace-cleanup "hourly public metadata raw-github repo-classification graph.json README site/public/reports/projects"`
- Result: blocked; file:///Users/copizzah/.local/lib/node_modules/gitnexus/dist/core/lbug/pool-adapter.js:325. This run therefore keeps GitNexus as an explicit blocker rather than relationship evidence.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`
- `rg -n "TODO i18n|EN-PENDING|未翻译|待翻译|TODO: translate" README.md README-EN.md site/src docs/seo`

## Validation Results

- Project indexes regenerated successfully under `docs/indexes`.
- Raw timestamp enforcement passed: `raw-github` has 686 Markdown captures, 686 timestamp-valid files, and 0 missing timestamps.
- GitHub project analysis regenerated: 686 raw captures / 686 classified repos / 300 analyzed projects.
- Astro site build passed and produced 1000 static pages; existing TypeScript deprecation hints and the existing Vite chunk-size warning remain.
- English paper XeLaTeX build passed and wrote `paper-drafts/main.pdf`; existing generated-table Chinese glyph warnings remain.
- i18n TODO scan returned no matches for `TODO i18n`, `EN-PENDING`, `未翻译`, `待翻译`, or `TODO: translate`.
- GitNexus `status` is readable but stale; `query` and `detect_changes` are blocked by LadybugDB storage-version mismatch (`database version 41`, current build `40`), so this run does not claim refreshed GitNexus relationship evidence.
- Public copy review gate was not rerun with 3-5 reader/editor agents plus 3 academic agents; this was a metadata freshness update, not a claim that public copy quality is complete.
