# Hourly Public Metadata Update - 2026-06-13 08:16 +0800

## One Sentence

Refreshed the public GitHub metadata packet for eight core repos spanning harness, runtime, memory, benchmark, taxonomy, and swarm layers, then propagated the newer API-backed snapshot through raw, processed, public-site, and Mermaid surfaces.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The freshness boundary improved relative to the 2026-06-12 loop because `gh api graphql` succeeded in this workspace, so the packet no longer depends on approximate public-page badge readings.
The remaining blocker is GitNexus database compatibility: status works, but query/analyze fail when loading LadybugDB because the stored database version is newer than the current build storage version.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Latest push |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 548 | 62 | 45 | 0 | 0 | 2026-06-09 |
| `NousResearch/hermes-agent` | 191,978 | 33,445 | 11,512 | 6526 | 13571 | 2026-06-13 |
| `stanford-iris-lab/meta-harness` | 1,062 | 103 | 11 | 4 | 0 | 2026-04-29 |
| `rohitg00/agentmemory` | 22,542 | 1,853 | 462 | 141 | 151 | 2026-06-11 |
| `pinchbench/skill` | 1,229 | 138 | 383 | 18 | 0 | 2026-06-02 |
| `lsdefine/genericagent` | 12,811 | 1,476 | 843 | 77 | 65 | 2026-06-12 |
| `EvoMap/awesome-agent-evolution` | 137 | 20 | 60 | 6 | 1 | 2026-06-11 |
| `uid4oe/insight-swarm` | 0 | 0 | 25 | 0 | 0 | 2026-03-19 |

## Working Principle

Authenticated GitHub API snapshot -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence / Blocker

- `node .gitnexus/run.cjs status` works and reports the local repo index is stale before this run.
- `node .gitnexus/run.cjs query --repo awesome-evolution-workspace-cleanup ...` fails because LadybugDB cannot load the indexed file.
- `node .gitnexus/run.cjs analyze` also fails in the same stage with: `COPY failed for File: Runtime exception: Trying to read a database file with a different version. Database file version: 41, Current build storage version: 40`.
- Practical consequence: GitNexus topology is available only as a stale status signal in this iteration, not as fresh query evidence.

## Public Surface Sync

- Updated README / README-ZH / README-EN evidence sections so the current front-page packet matches this run rather than the earlier 2026-06-13 batch.
- Refreshed public project cards and site reports for AHE, Hermes Agent, Meta-Harness, agentmemory, PinchBench, and EvoMap.
- Refreshed raw/classification-only rows for GenericAgent and Insight Swarm and recorded that they are not yet promoted into the public site registry.
- Updated the Mermaid truth source and rendered views so the blocker narrative now reflects the GitNexus DB-version mismatch instead of the old DNS-only story.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
