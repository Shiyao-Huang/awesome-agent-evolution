# Hourly Public Metadata Update - 2026-06-03 07:52 +0800

## One Sentence

Refreshed five user-aligned GitHub evidence anchors across harness, benchmark, skill, memory, and OpenClaw self-evolution, then propagated the changes through raw, processed, and public site surfaces.

## Three Sentences

This iteration targeted repositories that sit near the user's current frontier questions: how harnesses are optimized, how continual-learning benchmarks are framed, how skills are trained, how memory stays auditable, and how OpenClaw-style self-evolution loops actually retain experience. The run updated raw captures, project cards, site-facing reports, README/i18n packet summaries, and the Mermaid truth source using current public GitHub page evidence. Freshness is explicit: shell GitHub API access remained blocked in this workspace, and GitNexus CLI is available but currently stale for symbol-level freshness on the root repository.

## Updated Repositories

| Repo | Theme | Stars/Forks | Commits | Public report |
|---|---|---:|---:|---|
| `howdymary/hermes-agent-metaharness` | harness | 88/9 | 11 | `site/public/reports/projects/250-hermes-agent-metaharness-outer-loop.md` |
| `Arc-Computer/CL-Bench` | benchmark | 19/3 | 50 | `site/public/reports/projects/392-arc-continual-learning-benchmark.md` |
| `microsoft/SkillOpt` | skill | 1100/100 | 91 | `site/public/reports/projects/272-skillopt-self-evolving-agent-skills.md` |
| `sachinsharma9780/memweave` | memory | 39/2 | 57 | `site/public/reports/projects/288-memweave-markdown-agent-memory.md` |
| `longmans/self-evolve` | evolution | 96/5 | 27 | `site/public/reports/projects/355-self-evolve-openclaw-playground.md` |

## Working Principle

Public GitHub page evidence -> `raw-github/*.md` refresh -> `research/repo-classification.*` row updates -> `projects/*.md` and `site/public/reports/projects/*.md` -> `site/src/data/projects.ts` -> README/i18n packet + Mermaid graph -> indexes, GitHub analysis, paper-facing corpus snapshot, and site build.

## Evidence Quality

- Public GitHub page text was used as the freshness source for this iteration.
- Shell GitHub API access remained blocked in this workspace; no authenticated API freshness is claimed.
- `npx gitnexus status` succeeded and reported the local index is stale before this iteration commit.
- No benchmark was executed and no target repository clone was modified in this pass.
- `.mermaid/current/graph.json` remains the truth source; `.md` and `.mmd` are rendered views.
