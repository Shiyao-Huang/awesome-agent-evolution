# Hourly Public Metadata Update - 2026-07-01 05:07 +0800

## One Sentence

Refreshed the tracked GitHub anchors at 2026-07-01 05:07 +0800, propagated the fresher metadata through raw captures, classification, README, Mermaid, site reports, and index-facing surfaces, and removed duplicate front-page metadata blocks.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The GitHub lane is available again in this workspace, so this run records live authenticated GitHub API packets unless a specific request falls back.
The GitNexus lane is limited in this run: `node .gitnexus/run.cjs status` is readable but marks the index `stale`; `query -r awesome-evolution-workspace-cleanup` is blocked by a LadybugDB storage-version mismatch (file:///Users/copizzah/.local/lib/node_modules/gitnexus/dist/core/lbug/pool-adapter.js:325), so this run does not claim refreshed GitNexus relationship evidence.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Source |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 658 | 74 | 46 | 2 | 0 | gh_graphql |
| `NousResearch/hermes-agent` | 206,418 | 37,325 | 13,785 | 8,165 | 16,570 | gh_graphql |
| `stanford-iris-lab/meta-harness` | 1,175 | 113 | 11 | 5 | 0 | gh_graphql |
| `rohitg00/agentmemory` | 24,355 | 1,998 | 463 | 166 | 181 | gh_graphql |
| `pinchbench/skill` | 1,256 | 143 | 383 | 21 | 0 | gh_graphql |
| `lsdefine/GenericAgent` | 13,214 | 1,528 | 894 | 93 | 65 | gh_graphql |
| `openclaw/openclaw` | 381,163 | 79,845 | 62,787 | 3,415 | 3,320 | gh_graphql |
| `obra/superpowers` | 242,403 | 21,508 | 618 | 142 | 156 | gh_graphql |
| `EvoMap/awesome-agent-evolution` | 147 | 20 | 68 | 8 | 1 | gh_graphql |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | gh_graphql |
| `desplega-ai/agent-swarm` | 562 | 63 | 1,713 | 1 | 2 | gh_graphql |

## Delta Summary

- Real public deltas vs 2026-06-30 23:06 +0800: `china-qijizhifeng/agentic-Harness-engineering`, `NousResearch/hermes-agent`, `stanford-iris-lab/meta-harness`, `rohitg00/agentmemory`, `pinchbench/skill`, `lsdefine/GenericAgent`, `openclaw/openclaw`, `obra/superpowers`, `desplega-ai/agent-swarm`.
- Previous packet retained because live fetch degraded: none.

## Working Principle

GitHub API retry/fallback packet -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- Status: Repository: /Users/copizzah/Desktop/work/awesome-evolution
Indexed: 6/20/2026, 3:29:43 PM
Indexed commit: 850ea9f
Current commit: 90acb73
Status: ⚠️ stale (re-run gitnexus analyze)
- Query: `node .gitnexus/run.cjs query -r awesome-evolution-workspace-cleanup "hourly public metadata raw-github repo-classification graph.json README site/public/reports/projects"`
- Result: blocked; file:///Users/copizzah/.local/lib/node_modules/gitnexus/dist/core/lbug/pool-adapter.js:325. This run therefore keeps GitNexus as an explicit blocker rather than relationship evidence.

## Validation Results For This Iteration

- `node scripts/generate_project_indexes.mjs` passed and regenerated `docs/indexes`.
- `python3 scripts/enforce_raw_timestamps.py` passed: 686/686 `raw-github` markdown files have required timestamp fields; missing timestamp count is 0.
- `node scripts/analyze_github_project_data.mjs` passed: 686 raw captures, 686 classified repos, 300 analyzed projects, 86 analyzed evolution-focused projects.
- `(cd site && npm run build)` passed: Astro built 1000 static pages and wrote the GitHub Pages CNAME for `agent-evolution.com`; existing Astro/Zod deprecation hints and large-chunk warnings remain.
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)` passed and produced a 210-page `main.pdf`; existing Chinese-glyph warnings remain in generated English analysis tables.
- `rg -n "TODO i18n|EN-PENDING|未翻译|待翻译|TODO: translate" README.md README-EN.md site/src docs/seo` returned no matches.
- `node .gitnexus/run.cjs detect-changes -r awesome-evolution-workspace-cleanup` was attempted before commit but blocked by the same LadybugDB storage-version mismatch (`41` vs `40`).
- Public copy review gate was not run with 3-5 reader/editor agents plus 3 academic agents; synchronized README/site text is factual metadata sync, not final editorial-quality completion.
