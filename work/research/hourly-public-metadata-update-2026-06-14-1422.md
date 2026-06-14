# Hourly Public Metadata Update - 2026-06-14 14:22 +0800

## One Sentence

Fetched a new authenticated GitHub metadata packet on 2026-06-14, found fresh public deltas on 7 of the 8 tracked anchors, and propagated that newer state through raw, processed, public-site, and Mermaid surfaces.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The freshness boundary remains authenticated GitHub GraphQL/API, not badge scraping or stale local summaries.
GitHub credentials and rate-limit access are healthy in this workspace; the remaining tooling blocker is GitNexus database compatibility, where status works but query/analyze fail on the LadybugDB version mismatch.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Latest push |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 556 | 62 | 45 | 0 | 0 | 2026-06-09 |
| `NousResearch/hermes-agent` | 192,929 | 33,681 | 11,641 | 6640 | 13761 | 2026-06-14 |
| `stanford-iris-lab/meta-harness` | 1,064 | 104 | 11 | 4 | 0 | 2026-04-29 |
| `rohitg00/agentmemory` | 22,716 | 1,868 | 462 | 144 | 156 | 2026-06-11 |
| `pinchbench/skill` | 1,230 | 139 | 383 | 19 | 0 | 2026-06-02 |
| `lsdefine/GenericAgent` | 12,844 | 1,480 | 855 | 80 | 59 | 2026-06-14 |
| `EvoMap/awesome-agent-evolution` | 138 | 20 | 60 | 6 | 1 | 2026-06-11 |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | 2026-03-19 |

## Delta Summary

- Fresh public deltas versus the 2026-06-13 14:16 packet: `china-qijizhifeng/agentic-Harness-engineering`, `NousResearch/hermes-agent`, `stanford-iris-lab/meta-harness`, `rohitg00/agentmemory`, `pinchbench/skill`, `lsdefine/GenericAgent`, `EvoMap/awesome-agent-evolution`.
- No public-count delta versus the 2026-06-13 14:16 packet: `uid4oe/insight-swarm`.

## Working Principle

Authenticated GitHub API snapshot -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence / Blocker

- `node .gitnexus/run.cjs status` works and reports the local repo index is stale before this run.
- `node .gitnexus/run.cjs query --repo awesome-evolution-workspace-cleanup` and `analyze` fail because LadybugDB cannot load the indexed file.
- Exact blocker: `Runtime exception: Trying to read a database file with a different version. Database file version: 41, Current build storage version: 40`.

## Public Surface Sync

- Updated README / README-ZH / README-EN evidence sections so the front-page packet now reflects the 2026-06-14 authenticated refresh.
- Refreshed public project cards and site reports for AHE, Hermes Agent, Meta-Harness, agentmemory, PinchBench, and EvoMap.
- Refreshed raw/classification-only rows for GenericAgent and Insight Swarm and recorded that they are still not promoted into the public site registry.
- Updated the Mermaid truth source and rendered views so the current object graph reflects the 2026-06-14 packet and the live GitNexus blocker.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
