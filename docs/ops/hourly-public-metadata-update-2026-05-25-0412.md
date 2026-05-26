# Hourly Public Metadata Update - 2026-05-25 04:12 +0800

## One Sentence

This run extends the public Self Evolve metadata chain with six web-observed repositories covering secure skill registries, portable skill packs, cross-agent skill memory sync, Skills/MCP runtimes, local RAG skills, and Omni skill runtime surfaces.

## Three Sentences

The public governance rule remains: raw evidence must feed processed analysis, public project cards, site reports, and generated indexes. New raw captures were added for `tech-leads-club/agent-skills`, `jdrhyne/agent-skills`, `opensite-ai/opensite-skills`, `evalstate/fast-agent`, `shinpr/mcp-local-rag`, `diegosouzapw/awesome-omni-skills`. Shell GitHub API freshness is not fabricated; public pages were observed through web access, while local shell network and gh auth checks are validated separately.

## Added Raw Captures

| Repo | Layer | Why it matters |
|---|---|---|
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | skill / 工具/tool | Tech Leads Club Agent Skills 是面向专业 AI coding agents 的安全技能注册表，提供 CLI 安装、缓存、审计日志、MCP progressive disclosure 和多 Agent 目标支持。 |
| [jdrhyne/agent-skills](https://github.com/jdrhyne/agent-skills) | skill / 教程/tutorial | jdrhyne Agent Skills 汇集 Clawdbot、Claude Code、Codex 和 OpenClaw 可用的技能与提示包，突出 context recovery、前端设计、报告生成和任务编排等可迁移工作流。 |
| [opensite-ai/opensite-skills](https://github.com/opensite-ai/opensite-skills) | memory / 工具/tool | OpenSite Skills 把 Claude、Codex、Cursor、Copilot 与 Perplexity Computer 的技能保持在一个 Git 真相源中，并加入跨会话记忆、RAG 与 Playwright 云端上传自动化。 |
| [evalstate/fast-agent](https://github.com/evalstate/fast-agent) | framework / 框架/framework | fast-agent 是面向编码、构建和评测 Agent 的 Python 运行时，集成 SKILL.md、MCP、ACP、shell 模式、/skills 管理和 /connect 工具连接。 |
| [shinpr/mcp-local-rag](https://github.com/shinpr/mcp-local-rag) | memory / 工具/tool | MCP Local RAG 是开发者本地优先的 RAG 服务器，用 TypeScript 提供 MCP/CLI、语义+关键词混合搜索、离线隐私保护和 Codex/Claude Agent Skills 安装。 |
| [diegosouzapw/awesome-omni-skills](https://github.com/diegosouzapw/awesome-omni-skills) | skill / 工具/tool | Awesome Omni Skills 是可安装的 AI coding skills 目录与运行时，把 SKILL.md、CLI、API、MCP、A2A、bundle、验证和多客户端安装统一成一个发布面。 |

## Working Principle

1. Browser-observed GitHub page evidence is stored raw under `raw-github/` with timestamps and freshness caveats.
2. `research/repo-classification.json` turns raw captures into structured repo/theme/function rows.
3. `projects/` and `site/public/reports/projects/` provide teaching model cards for public readers.
4. `site/src/data/projects.ts` exposes the new public project pages and category groups.
5. `.mermaid/current/graph.json` remains the object-graph truth source; `.mmd` and `.md` are rendered views.

## Blockers

- GitHub API freshness remains blocked: `curl -I --max-time 15 https://api.github.com/rate_limit` could not resolve `api.github.com`.
- Local `gh auth status` reports the default token for `Shiyao-Huang` is invalid; authenticated metadata was not used.
- CodeFlow command is unavailable locally (`codeflow not found`); GitNexus is available and was checked with `gitnexus doctor` before the data edit.

## Validation Results

- jq empty research/repo-classification.json .mermaid/current/graph.json: passed
- node --check site/src/data/projects.ts: passed
- curl -I --max-time 15 https://api.github.com/rate_limit: failed DNS resolution, freshness not API-verified
- gh auth status: failed, default token for Shiyao-Huang invalid
- node scripts/generate_project_indexes.mjs: passed, generated docs/indexes and raw GitHub timestamp indexes
- python3 scripts/enforce_raw_timestamps.py: passed, raw-github md=434, md_ok=434, missing_count=0
- node scripts/analyze_github_project_data.mjs: passed, raw=434, classified=434, analyzed_projects=147, strict_evolution=72, broad_evolution=167
- node scripts/generate_visual_assets.mjs: passed, 4 SVG assets regenerated
- HOME=/private/tmp/gitnexus-home gitnexus doctor: passed, GitNexus 1.6.5 graph/full-text/vector capabilities reported available
- HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-agent-evolution-hourly .: passed with changed=13, added=13, deleted=0, 9,853 nodes, 10,150 edges, 30 clusters, 13 flows; FTS degraded because LadybugDB extension download could not connect
- (cd site && npm run build): passed, 228 pages built with existing Astro z deprecation hints
- (cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex): passed, main.pdf 213 pages with existing font/overfull warnings
