# Hourly Public Metadata Update - 2026-06-05 15:43 +0800

## One Sentence

Added two swarm orchestration anchors, one continual skill-memory paper-code anchor, and one refreshed lightweight runtime across raw captures, processed classification, public project reports, Mermaid truth state, and the site registry.

## Three Sentences

This iteration targeted repositories that answer direct user concerns around production agent swarms, OpenAI Agents SDK-based orchestration, continual skill-memory accumulation, and lightweight memory/MCP/skill runtimes. The run updated raw captures, repo classification rows, model-card reports, site-facing public reports, site project metadata, and the Mermaid truth source using current public GitHub pages plus visible dated signals such as releases and README news. Freshness is explicit: shell GitHub API access remained blocked by DNS, `gh` auth stayed invalid, and GitNexus only provided stale topology help against an older indexed commit.

## Updated Repositories

| Repo | Theme | Stars/Forks | Commits | Latest visible dated signal | Public report |
|---|---|---:|---:|---|---|
| `desplega-ai/agent-swarm` | framework | 505/56 | 1542 | 2026-06-04 | `site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md` |
| `VRSEN/agency-swarm` | framework | 4400/1100 | 2491 | 2026-05-24 | `site/public/reports/projects/27-agency-swarm.md` |
| `XSkill-Agent/XSkill` | skill | 216/27 | 16 | 2026-05-01 | `site/public/reports/projects/404-xskill-continual-experience-skill-learning.md` |
| `wanxingai/LightAgent` | framework | 1100/141 | 104 | 2026-06-02 | `site/public/reports/projects/139-lightagent-memory-mcp-skills.md` |

## Working Principle

Public GitHub repo page + visible dated signals (releases or README news) -> `raw-github/*.md` refresh/add -> `research/repo-classification.*` row updates -> `projects/*.md` and `site/public/reports/projects/*.md` -> `site/src/data/projects.ts` -> Mermaid graph -> indexes, GitHub analysis, and site build.

## Evidence Quality

- Public GitHub page text plus visible dated signals on repo pages (releases or README news) were used as the freshness source for this iteration.
- `curl -I --max-time 10 https://api.github.com/rate_limit` still failed with DNS resolution error in this workspace.
- `gh auth status` still reported an invalid default token for `Shiyao-Huang`.
- `gitnexus status` and `gitnexus query -r awesome-evolution-workspace-cleanup ...` worked, but the local index is stale and the CLI surface differs from the repo docs.
- No benchmark was executed and no target repository clone was modified in this pass.
- `.mermaid/current/graph.json` remains the truth source; `.md` and `.mmd` are rendered views.
