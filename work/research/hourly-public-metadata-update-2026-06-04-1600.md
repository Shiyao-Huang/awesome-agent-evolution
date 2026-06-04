# Hourly Public Metadata Update - 2026-06-04 16:00 +0800

## One Sentence

Refreshed five stale-or-unknown GitHub metadata anchors and propagated them through raw, processed, README/i18n, Mermaid, project reports, and the public site registry.

## Three Sentences

This iteration targeted repositories that answer direct user concerns around memory resources, embeddable continual-learning SDKs, harness survey maps, controlled self-evolving frameworks, and full-stack agent benchmarks. The run updated raw captures, project cards, site-facing reports, repo classification, README/i18n packet summaries, and the Mermaid truth source using current public GitHub page evidence. Freshness is explicit: shell GitHub API access remained blocked in this workspace, and GitNexus CLI only reported stale index status rather than current repository freshness.

## Updated Repositories

| Repo | Theme | Stars/Forks | Commits | Public report |
|---|---|---:|---:|---|
| `agentmemoryworld/awesome-agent-memory` | memory | 155/8 | 22 | `site/public/reports/projects/398-agentmemoryworld-awesome-agent-memory-resource-index.md` |
| `letta-ai/learning-sdk` | memory | 45/3 | 72 | `site/public/reports/projects/399-letta-learning-sdk-continual-memory-sdk.md` |
| `yennning/awesome-code-as-agent-harness-papers` | harness | 331/24 | 32 | `site/public/reports/projects/400-yennning-code-as-agent-harness-papers.md` |
| `clawland-ai/geneclaw` | evolution | 36/8 | 8 | `site/public/reports/projects/401-geneclaw-safe-self-evolving-agent-framework.md` |
| `openclaw/clawbench` | benchmark | 106/19 | 121 | `site/public/reports/projects/402-openclaw-clawbench-full-stack-agent-benchmark.md` |

## Working Principle

Public GitHub page evidence -> `raw-github/*.md` refresh -> `research/repo-classification.*` row updates -> `projects/*.md` and `site/public/reports/projects/*.md` -> `site/src/data/projects.ts` -> README/i18n packet + Mermaid graph -> indexes, GitHub analysis, and site build.

## Evidence Quality

- Public GitHub page text was used as the freshness source for this iteration.
- Shell GitHub API access remained blocked in this workspace; no authenticated API freshness is claimed.
- `npx gitnexus status` succeeded earlier in the run and reported the root-repo index was stale before this iteration commit.
- No benchmark was executed and no target repository clone was modified in this pass.
- `.mermaid/current/graph.json` remains the truth source; `.md` and `.mmd` are rendered views.
