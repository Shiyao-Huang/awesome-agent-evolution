# Hourly Public Metadata Update - 2026-06-28 10:59 +0800

## One Sentence

Refreshed the tracked GitHub anchors at 2026-06-28 10:59 +0800, propagated the fresher metadata through raw captures, classification, README, Mermaid, site reports, and index-facing surfaces, and removed duplicate front-page metadata blocks.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The GitHub lane is available again in this workspace, so this run records live authenticated GitHub API packets unless a specific request falls back.
The GitNexus lane is limited in this run: `node .gitnexus/run.cjs status` is readable but marks the index `stale`; `query -r awesome-evolution-workspace-cleanup` is blocked by a LadybugDB storage-version mismatch (file:///Users/copizzah/.local/lib/node_modules/gitnexus/dist/core/lbug/pool-adapter.js:325), so this run does not claim refreshed GitNexus relationship evidence.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Source |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 639 | 73 | 46 | 2 | 0 | gh_graphql |
| `NousResearch/hermes-agent` | 204,400 | 36,790 | 13,220 | 7,845 | 16,197 | gh_graphql |
| `stanford-iris-lab/meta-harness` | 1,167 | 113 | 11 | 5 | 0 | gh_graphql |
| `rohitg00/agentmemory` | 24,163 | 1,989 | 462 | 161 | 177 | gh_graphql |
| `pinchbench/skill` | 1,254 | 143 | 383 | 21 | 0 | gh_graphql |
| `lsdefine/GenericAgent` | 13,130 | 1,525 | 887 | 95 | 63 | gh_graphql |
| `openclaw/openclaw` | 380,748 | 79,773 | 62,465 | 3,364 | 3,372 | gh_graphql |
| `obra/superpowers` | 240,110 | 21,310 | 609 | 135 | 151 | gh_graphql |
| `EvoMap/awesome-agent-evolution` | 145 | 20 | 67 | 8 | 1 | gh_graphql |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | gh_graphql |
| `desplega-ai/agent-swarm` | 551 | 62 | 1,688 | 1 | 6 | gh_graphql |

## Delta Summary

- Real public deltas vs 2026-06-28 04:58 +0800: `china-qijizhifeng/agentic-Harness-engineering`, `NousResearch/hermes-agent`, `stanford-iris-lab/meta-harness`, `rohitg00/agentmemory`, `lsdefine/GenericAgent`, `openclaw/openclaw`, `obra/superpowers`, `desplega-ai/agent-swarm`.
- Previous packet retained because live fetch degraded: none.

## Working Principle

GitHub API retry/fallback packet -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- Status: Repository: /Users/copizzah/Desktop/work/awesome-evolution
Indexed: 6/20/2026, 3:29:43 PM
Indexed commit: 850ea9f
Current commit: aad5ef9
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
- `node .gitnexus/run.cjs detect_changes -r awesome-evolution-workspace-cleanup` (blocked by the same LadybugDB storage-version mismatch: database `41`, current build `40`)

## Validation Result

- Index generation passed and refreshed `docs/indexes/*`.
- Raw timestamp enforcement passed with `missing_count: 0`; raw-github now has 686 Markdown captures.
- GitHub project analysis passed with 686 classified repos, 300 analyzed projects, and 86 analyzed evolution-focused projects.
- Astro site build passed and generated 1000 pages; warnings are existing Astro/Zod deprecation hints, one unused variable hint, and bundle-size warnings.
- English paper build passed and wrote a 210-page `paper-drafts/main.pdf`; existing Chinese-glyph and table layout warnings remain.
- i18n TODO scan returned no matches.
- Public copy review gate was not rerun with 3-5 reader/editor agents plus 3 academic agents because this iteration only refreshed timestamped metadata rows; do not treat the public copy quality gate as newly completed.
