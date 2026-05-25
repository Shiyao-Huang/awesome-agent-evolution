# Hourly Public Metadata Update - 2026-05-25 03:09 +0800

## One Sentence

This run extends the public Self Evolve metadata chain with six web-observed repositories covering agent skill control planes, skill installers, Codex skill packs, and graph/shared-memory substrates.

## Three Sentences

The user intent source remains `docs/project-management/user-direct-inputs.md` and `CURRENT_GOAL.md`: raw evidence must feed processed analysis, public project cards, site reports, and generated indexes. New raw captures were added for `jscraik/Agent-Skills`, `Gitmaxd/deepagents-cli-codex-skill`, `vercel-labs/skills`, `neo4j-labs/agent-memory`, `doobidoo/mcp-memory-service`, `microsoft/skills`. Shell GitHub API freshness is not fabricated; public pages were observed through web access, while local shell network and gh auth checks are validated separately.

## Added Raw Captures

| Repo | Layer | Why it matters |
|---|---|---|
| [jscraik/Agent-Skills](https://github.com/jscraik/Agent-Skills) | skill / 工具/tool | Agent Skills Kit 是面向 Codex 和 AI coding agents 的技能控制平面，用 ask CLI、runtime projections、command handles、repo memory search 和 proof commands 管理技能质量与上下文成本。 |
| [Gitmaxd/deepagents-cli-codex-skill](https://github.com/Gitmaxd/deepagents-cli-codex-skill) | skill / 教程/tutorial | Deep Agents CLI Codex Skill 把 LangChain Deep Agents CLI 的命令、provider、memory、sandbox、streaming、SDK customization 和 Agent Client Protocol 知识封装成 Codex 可加载 skill。 |
| [vercel-labs/skills](https://github.com/vercel-labs/skills) | skill / 工具/tool | Vercel Skills CLI 是开放 agent skills 生态的安装工具，支持 OpenCode、Claude Code、Codex、Cursor 等五十多个 agent，把 repo、URL、直接路径或 registry 中的技能安装到对应运行时。 |
| [neo4j-labs/agent-memory](https://github.com/neo4j-labs/agent-memory) | memory / 框架/framework | Neo4j Agent Memory 是图原生 agent memory 系统，提供 Python/TypeScript SDK、MCP server、短期/长期/推理记忆、实体抽取、context graph、eval harness 和 reasoning trace audit edges。 |
| [doobidoo/mcp-memory-service](https://github.com/doobidoo/mcp-memory-service) | memory / 工具/tool | MCP Memory Service 是面向 LangGraph、CrewAI、AutoGen、Claude、OpenCode、Codex CLI 等 agent 的共享记忆后端，提供 REST API、MCP、OAuth、dashboard、知识图谱和本地 embedding。 |
| [microsoft/skills](https://github.com/microsoft/skills) | skill / 教程/tutorial | Microsoft Skills 汇集 SDK skills、MCP servers、custom agents 和 AGENTS.md 模板，用于让 coding agents 在 Azure SDK、Microsoft AI Foundry 和 Microsoft 365 等场景中获得结构化、可测试的工程上下文。 |

## Working Principle

1. Browser-observed GitHub page evidence is stored raw under `raw-github/` with timestamps and freshness caveats.
2. `research/repo-classification.json` turns raw captures into structured repo/theme/function rows.
3. `projects/` and `site/public/reports/projects/` provide teaching model cards for public readers.
4. `site/src/data/projects.ts` exposes the new public project pages and category groups.
5. `.mermaid/current/graph.json` remains the object-graph truth source; `.mmd` and `.md` are rendered views.

## Blockers

- GitHub API freshness must be treated as blocked unless the validation command proves otherwise.
- Local `gh` auth has been invalid in prior hourly runs; authenticated metadata is not used here.
- GitNexus should be rerun after generated files settle; FTS has previously been degraded by LadybugDB extension download failures.

## Validation Results

- jq empty research/repo-classification.json .mermaid/current/graph.json: passed
- node --check site/src/data/projects.ts: passed
- curl -I --max-time 15 https://api.github.com/rate_limit: failed DNS resolution, freshness not API-verified
- gh auth status: failed, default token for Shiyao-Huang invalid
- node scripts/generate_project_indexes.mjs: passed after data and analysis refresh
- python3 scripts/enforce_raw_timestamps.py: passed, raw-github md=428, md_ok=428, missing_count=0
- node scripts/analyze_github_project_data.mjs: passed, raw=428, classified=428, analyzed_projects=141, strict_evolution=72, broad_evolution=167
- node scripts/generate_visual_assets.mjs: passed, 4 SVG assets regenerated
- HOME=/private/tmp/gitnexus-home gitnexus doctor: passed, GitNexus 1.6.5 graph/full-text/vector capabilities reported available
- HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-evolution-hourly .: passed with changed=13, added=13, deleted=0, 9,761 nodes, 10,052 edges, 30 clusters, 13 flows; FTS degraded because LadybugDB extension download could not connect
- (cd site && npm run build): passed, 222 pages built with existing Astro z deprecation hints
- (cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex): passed, main.pdf 213 pages with existing font/overfull warnings
