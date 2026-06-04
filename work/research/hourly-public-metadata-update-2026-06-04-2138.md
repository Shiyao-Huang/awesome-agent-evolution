# Hourly Public Metadata Update - 2026-06-04 21:38 +0800

## One Sentence

Refreshed five existing GitHub metadata anchors and propagated them through raw captures, processed classification, project cards, Mermaid truth state, and public site report surfaces.

## Three Sentences

This iteration targeted repositories that answer direct user concerns around harness mapping, benchmark coverage, skill-facing evaluation, and graph-native memory infrastructure. The run updated raw captures, repo classification rows, model-card reports, site-facing public reports, site project metadata, and the Mermaid truth source using current public GitHub page evidence. Freshness is explicit: shell GitHub API access remained blocked by DNS, `gh` auth stayed invalid, and GitNexus only provided topology help after explicit `--repo` selection while still reporting a stale index.

## Updated Repositories

| Repo | Theme | Stars/Forks | Commits | Public report |
|---|---|---:|---:|---|
| `pinchbench/skill` | evaluation | 1200/136 | 383 | `site/public/reports/projects/51-pinchbench-skill.md` |
| `howdymary/hermes-agent-metaharness` | harness | 89/9 | 11 | `site/public/reports/projects/250-hermes-agent-metaharness-outer-loop.md` |
| `AutoJunjie/awesome-agent-harness` | harness | 437/32 | 59 | `site/public/reports/projects/265-awesome-agent-harness-autojunjie-curation.md` |
| `mem0ai/memory-benchmarks` | memory | 38/12 | 15 | `site/public/reports/projects/87-mem0-memory-benchmarks.md` |
| `neo4j-labs/agent-memory` | memory | 302/67 | 431 | `site/public/reports/projects/130-neo4j-agent-memory.md` |

## Working Principle

Public GitHub page evidence -> `raw-github/*.md` refresh -> `research/repo-classification.*` row updates -> `projects/*.md` and `site/public/reports/projects/*.md` -> `site/src/data/projects.ts` -> Mermaid graph -> indexes, GitHub analysis, and site build.

## Evidence Quality

- Public GitHub page text was used as the freshness source for this iteration.
- `curl -I --max-time 10 https://api.github.com/rate_limit` still failed with DNS resolution error in this workspace.
- `gh auth status` still reported an invalid default token for `Shiyao-Huang`.
- `gitnexus query --repo awesome-evolution-workspace-cleanup ...` succeeded for topology discovery, but the repo index is stale against current HEAD.
- No benchmark was executed and no target repository clone was modified in this pass.
- `.mermaid/current/graph.json` remains the truth source; `.md` and `.mmd` are rendered views.
