# Hourly Public Metadata Update - 2026-05-25 05:11 +0800

## One Sentence

This run extends the public Self Evolve metadata chain with six web-observed repositories covering lightweight skill-aware agents, skill registries, local harness platforms, self-evolving skill memory, domain skill libraries, and phase-gated agent orchestration.

## Three Sentences

The user intent source remains `docs/project-management/user-direct-inputs.md` and `CURRENT_GOAL.md`: raw evidence must feed processed analysis, public project cards, site reports, and generated indexes. New raw captures were added for `wanxingai/LightAgent`, `agent-skills-hub/agent-skills-hub`, `thClaws/thClaws`, `Memento-Teams/Memento-Skills`, `FreedomIntelligence/OpenClaw-Medical-Skills`, `agent-sh/agentsys`. Shell GitHub API freshness is not fabricated; public pages were observed through web access, while local shell network and gh auth checks are validated separately.

## Added Raw Captures

| Repo | Layer | Why it matters |
|---|---|---|
| [wanxingai/LightAgent](https://github.com/wanxingai/LightAgent) | framework / 框架/framework | LightAgent 是轻量级 Python Agent 框架，把 Skills、持久记忆、MCP、Tree-of-Thought 和 multi-agent collaboration 组合成可快速嵌入的 self-learning runtime。 |
| [agent-skills-hub/agent-skills-hub](https://github.com/agent-skills-hub/agent-skills-hub) | skill / 教程/tutorial | Agent Skills Hub 是跨 Claude Code、Gemini、Cursor、Kiro、Codex、Antigravity、OpenCode 等工具的 skills 注册表和 NPX 安装器。 |
| [thClaws/thClaws](https://github.com/thClaws/thClaws) | framework / 框架/framework | thClaws 是本地优先的 Rust Agent harness 平台，用一个 engine 支撑 GUI、CLI、单次命令和 webapp，并把 skills、commands、agent definitions 与 MCP servers 作为可安装插件打包。 |
| [Memento-Teams/Memento-Skills](https://github.com/Memento-Teams/Memento-Skills) | evolution / 框架/framework | Memento-Skills 是 deployment-time learning Agent 框架，让 Agent 在冻结模型参数的前提下通过 skill memory、失败反思和技能重写持续进化。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | skill / 教程/tutorial | OpenClaw Medical Skills 是面向 OpenClaw/NanoClaw 的医学与生物信息 agent skills 库，用 869 个 SKILL.md 模块把数据库、API、临床和组学工作流接入通用 Agent。 |
| [agent-sh/agentsys](https://github.com/agent-sh/agentsys) | framework / 框架/framework | AgentSys 是面向 Claude Code、OpenCode、Codex、Cursor 和 Kiro 的 agent orchestration runtime，把插件、agents、skills、phase gates、持久状态和交付流水线组织成可安装系统。 |

## Working Principle

1. Browser-observed GitHub page evidence is stored raw under `raw-github/` with timestamps and freshness caveats.
2. `research/repo-classification.json` turns raw captures into structured repo/theme/function rows.
3. `projects/` and `site/public/reports/projects/` provide teaching model cards for public readers.
4. `site/src/data/projects.ts` exposes the new public project pages and category groups.
5. `.mermaid/current/graph.json` remains the object-graph truth source; `.mmd` and `.md` are rendered views.

## Blockers

- GitHub API freshness remains blocked: `curl -I --max-time 10 https://api.github.com` could not resolve `api.github.com`.
- Local `gh auth status` reports the default token for `Shiyao-Huang` is invalid; authenticated metadata was not used.
- CodeFlow/GitNexus validation is recorded after local commands run.

## Validation Results

- jq empty research/repo-classification.json .mermaid/current/graph.json: passed
- node --check site/src/data/projects.ts: passed
- curl -I --max-time 10 https://api.github.com: failed DNS resolution, freshness not API-verified
- gh auth status: failed, default token for Shiyao-Huang invalid
- node scripts/generate_project_indexes.mjs: passed after data and analysis refresh
- python3 scripts/enforce_raw_timestamps.py: passed, raw-github md=440, md_ok=440, missing_count=0
- node scripts/analyze_github_project_data.mjs: passed, raw=440, classified=440, analyzed_projects=153, strict_evolution=73, broad_evolution=168
- node scripts/generate_visual_assets.mjs: passed, 4 SVG assets regenerated
- command -v codeflow: not found locally
- HOME=/private/tmp/gitnexus-home gitnexus doctor: passed, GitNexus 1.6.5 graph/full-text/vector capabilities reported available
- HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-agent-evolution-hourly .: passed with changed=13, added=14, deleted=0, 10,002 nodes, 10,343 edges, 31 clusters, 13 flows; FTS degraded because LadybugDB extension download could not connect
- (cd site && npm run build): passed, 234 pages built with existing Astro z deprecation hints
- (cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex): passed, main.pdf 213 pages with existing font/overfull warnings
