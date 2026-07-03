# Hourly Public Metadata Update - 2026-07-03 19:38 +0800

## One Sentence

Refreshed the tracked GitHub anchors at 2026-07-03 19:38 +0800, propagated the fresher metadata through raw captures, classification, README, Mermaid, site reports, and index-facing surfaces, and removed duplicate front-page metadata blocks.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The GitHub lane is available again in this workspace, so this run records live authenticated GitHub API packets unless a specific request falls back.
The GitNexus lane is limited in this run: `node .gitnexus/run.cjs status` is readable but marks the index `stale`; `query -r awesome-evolution-workspace-cleanup` is blocked by a LadybugDB storage-version mismatch (file:///Users/copizzah/.local/lib/node_modules/gitnexus/dist/core/lbug/pool-adapter.js:325), so this run does not claim refreshed GitNexus relationship evidence.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Source |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 678 | 74 | 46 | 2 | 0 | gh_graphql |
| `NousResearch/hermes-agent` | 208,405 | 37,947 | 14,313 | 8,397 | 16,814 | gh_graphql |
| `stanford-iris-lab/meta-harness` | 1,194 | 115 | 11 | 6 | 0 | gh_graphql |
| `rohitg00/agentmemory` | 24,493 | 2,015 | 463 | 168 | 183 | gh_graphql |
| `pinchbench/skill` | 1,260 | 144 | 383 | 21 | 0 | gh_graphql |
| `lsdefine/GenericAgent` | 13,276 | 1,533 | 895 | 94 | 68 | gh_graphql |
| `openclaw/openclaw` | 381,571 | 79,980 | 63,563 | 3,559 | 3,405 | gh_graphql |
| `obra/superpowers` | 245,100 | 21,718 | 628 | 145 | 168 | gh_graphql |
| `EvoMap/awesome-agent-evolution` | 162 | 23 | 69 | 9 | 2 | gh_graphql |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | gh_graphql |
| `desplega-ai/agent-swarm` | 572 | 65 | 1,753 | 0 | 3 | gh_graphql |

## Delta Summary

- Real public deltas vs 2026-07-01 23:11 +0800: `china-qijizhifeng/agentic-Harness-engineering`, `NousResearch/hermes-agent`, `stanford-iris-lab/meta-harness`, `rohitg00/agentmemory`, `pinchbench/skill`, `lsdefine/GenericAgent`, `openclaw/openclaw`, `obra/superpowers`, `EvoMap/awesome-agent-evolution`, `desplega-ai/agent-swarm`.
- Previous packet retained because live fetch degraded: none.

## Working Principle

GitHub API retry/fallback packet -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- Status: Repository: /Users/copizzah/Desktop/work/awesome-evolution
Indexed: 6/20/2026, 3:29:43 PM
Indexed commit: 850ea9f
Current commit: e1c0c08
Status: ⚠️ stale (re-run gitnexus analyze)
- Query: `node .gitnexus/run.cjs query -r awesome-evolution-workspace-cleanup "hourly public metadata raw-github repo-classification graph.json README site/public/reports/projects"`
- Result: blocked; file:///Users/copizzah/.local/lib/node_modules/gitnexus/dist/core/lbug/pool-adapter.js:325. This run therefore keeps GitNexus as an explicit blocker rather than relationship evidence.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`

## Validation Outcome

- Project indexes regenerated successfully.
- Raw timestamp enforcement passed with `missing_count: 0`; `raw-github` now has 686 timestamped markdown captures.
- GitHub project analysis regenerated `analysis/github-project-data-analysis.*` with 686 raw captures, 686 classified repos, 300 analyzed project reports, 98 core evolution repos, and 204 broad evolution repos.
- Astro site build passed and generated 1000 static pages; existing TypeScript deprecation hints remain in `site/src/content.config.ts` and `site/src/pages/graph/index.astro`.
- English paper XeLaTeX build passed and wrote `paper-drafts/main.pdf` with 210 pages; existing Chinese-glyph and table layout warnings remain in generated English analysis tables.
- i18n TODO scan found no `TODO i18n`, `EN-PENDING`, `未翻译`, `待翻译`, or `TODO: translate` matches in the checked public paths.
- GitNexus `detect-changes -r awesome-evolution-workspace-cleanup` was attempted before commit and is blocked by the same LadybugDB storage-version mismatch (`41` vs `40`).
