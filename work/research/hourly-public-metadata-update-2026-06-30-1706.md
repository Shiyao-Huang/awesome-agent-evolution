# Hourly Public Metadata Update - 2026-06-30 17:06 +0800

## One Sentence

Refreshed the tracked GitHub anchors at 2026-06-30 17:06 +0800, propagated the fresher metadata through raw captures, classification, README, Mermaid, site reports, and index-facing surfaces, and removed duplicate front-page metadata blocks.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The GitHub lane is available again in this workspace, so this run records live authenticated GitHub API packets unless a specific request falls back.
The GitNexus lane is limited in this run: `node .gitnexus/run.cjs status` is readable but marks the index `stale`; `query -r awesome-evolution-workspace-cleanup` is blocked by a LadybugDB storage-version mismatch (file:///Users/copizzah/.local/lib/node_modules/gitnexus/dist/core/lbug/pool-adapter.js:325), so this run does not claim refreshed GitNexus relationship evidence.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Source |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 653 | 74 | 46 | 2 | 0 | gh_graphql |
| `NousResearch/hermes-agent` | 206,041 | 37,243 | 13,633 | 8,100 | 16,492 | gh_graphql |
| `stanford-iris-lab/meta-harness` | 1,175 | 113 | 11 | 5 | 0 | gh_graphql |
| `rohitg00/agentmemory` | 24,331 | 1,997 | 463 | 165 | 180 | gh_graphql |
| `pinchbench/skill` | 1,256 | 143 | 383 | 21 | 0 | gh_graphql |
| `lsdefine/GenericAgent` | 13,205 | 1,528 | 892 | 92 | 64 | gh_graphql |
| `openclaw/openclaw` | 381,085 | 79,825 | 62,748 | 3,392 | 3,291 | gh_graphql |
| `obra/superpowers` | 241,913 | 21,474 | 609 | 140 | 153 | gh_graphql |
| `EvoMap/awesome-agent-evolution` | 147 | 20 | 68 | 8 | 1 | gh_graphql |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | gh_graphql |
| `desplega-ai/agent-swarm` | 558 | 63 | 1,703 | 1 | 5 | gh_graphql |

## Delta Summary

- Real public deltas vs 2026-06-30 11:04 +0800: `china-qijizhifeng/agentic-Harness-engineering`, `NousResearch/hermes-agent`, `stanford-iris-lab/meta-harness`, `rohitg00/agentmemory`, `pinchbench/skill`, `lsdefine/GenericAgent`, `openclaw/openclaw`, `obra/superpowers`, `desplega-ai/agent-swarm`.
- Previous packet retained because live fetch degraded: none.

## Working Principle

GitHub API retry/fallback packet -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- Status: Repository: /Users/copizzah/Desktop/work/awesome-evolution
Indexed: 6/20/2026, 3:29:43 PM
Indexed commit: 850ea9f
Current commit: dd38b8d
Status: ⚠️ stale (re-run gitnexus analyze)
- Query: `node .gitnexus/run.cjs query -r awesome-evolution-workspace-cleanup "hourly public metadata raw-github repo-classification graph.json README site/public/reports/projects"`
- Result: blocked; file:///Users/copizzah/.local/lib/node_modules/gitnexus/dist/core/lbug/pool-adapter.js:325. This run therefore keeps GitNexus as an explicit blocker rather than relationship evidence.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`
- `rg -n "TODO i18n|EN-PENDING|未翻译|待翻译|TODO: translate" README.md README-EN.md README-ZH.md site/src docs/seo`
