# Hourly Public Metadata Update - 2026-06-17 08:29 +0800

## One Sentence

Refreshed the hourly GitHub metadata packet for the main public anchors, propagated the new counts through raw, processed, public-site, and Mermaid surfaces, and kept the freshness boundary explicit.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third. The freshness boundary remains authenticated GitHub GraphQL/API, not badge scraping or old local summaries. GitNexus is usable for relationship evidence in this workspace, but its local index is still stale and should not be treated as fully current symbol truth.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Latest push |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 580 | 65 | 46 | 0 | 0 | 2026-06-14 |
| `NousResearch/hermes-agent` | 195,343 | 34,303 | 11,856 | 6,978 | 14,228 | 2026-06-17 |
| `stanford-iris-lab/meta-harness` | 1,097 | 105 | 11 | 5 | 0 | 2026-04-29 |
| `rohitg00/agentmemory` | 23,143 | 1,908 | 462 | 147 | 160 | 2026-06-15 |
| `pinchbench/skill` | 1,236 | 140 | 383 | 20 | 1 | 2026-06-02 |
| `lsdefine/GenericAgent` | 12,921 | 1,496 | 866 | 83 | 63 | 2026-06-16 |
| `openclaw/openclaw` | 379,052 | 79,325 | 59,411 | 3,264 | 2,953 | 2026-06-17 |
| `obra/superpowers` | 229,865 | 20,442 | 601 | 122 | 160 | 2026-06-17 |
| `EvoMap/awesome-agent-evolution` | 141 | 20 | 64 | 6 | 1 | 2026-06-15 |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | 2026-03-19 |
| `desplega-ai/agent-swarm` | 530 | 59 | 1,641 | 1 | 2 | 2026-06-16 |

## Delta Summary

- Real deltas after the 2026-06-17 02:30 +0800 packet: `NousResearch/hermes-agent`、`stanford-iris-lab/meta-harness`、`rohitg00/agentmemory`、`pinchbench/skill`、`lsdefine/GenericAgent`、`openclaw/openclaw`、`obra/superpowers`、`desplega-ai/agent-swarm`.
- No public metadata delta after the 2026-06-17 02:30 +0800 packet: `china-qijizhifeng/agentic-Harness-engineering`、`EvoMap/awesome-agent-evolution`、`uid4oe/insight-swarm`.

## Working Principle

Authenticated GitHub API snapshot -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- `node .gitnexus/run.cjs status` works and reports the local repo index as `stale`.
- `node .gitnexus/run.cjs query -r awesome-evolution-workspace-cleanup "hourly public metadata graph.json repo-classification site/src/data/projects.ts"` still resolves this loop back to historical script definitions such as `renderGraphJson`, `renderGraphMd`, and `renderRunNote`.
- This run therefore uses GitNexus as relationship evidence, but not as proof that the local index is fully current.

## Public Surface Sync

- Updated README / README-ZH / README-EN evidence sections so the front-page packet reflects 2026-06-17 08:29 +0800.
- Refreshed raw captures, classification rows, and public project/site cards for AHE, Hermes Agent, Meta-Harness, agentmemory, PinchBench, GenericAgent, OpenClaw, Superpowers, EvoMap, and Agent Swarm.
- Refreshed raw/classification evidence for Insight Swarm while preserving the boundary that it is still not promoted into the public site registry.
- Updated the Mermaid truth source and rendered views so the current object graph reflects the new packet and current GitNexus boundary.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
