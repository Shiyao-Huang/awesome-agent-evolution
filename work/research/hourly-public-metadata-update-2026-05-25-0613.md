# Hourly Public Metadata Update - 2026-05-25 06:13 +0800

## One Sentence

This run adds six web-observed public metadata records for agent skills, agent harnesses, memory substrates, and recursive skill-evolution systems, then promotes them through raw captures, classification, project model cards, public site data, and Mermaid evidence.

## Three Sentences

The direct user intent source remains `docs/project-management/user-direct-inputs.md` and `CURRENT_GOAL.md`: raw evidence must feed processed analysis, public reports, website data, and indexes. New or refreshed raw captures cover `harness/harness-skills`, `HKUDS/OpenHarness`, `sehoon787/my-codex`, `aiming-lab/SkillRL`, `hebbs-ai/hebbs-memory-engine`, and `ViktorAxelsen/MemSkill`. GitHub shell API freshness is not fabricated; public GitHub pages were observed through browser/web access, while shell DNS/auth checks are recorded separately.

## Added Raw Captures

| Repo | Layer | Why it matters |
|---|---|---|
| [harness/harness-skills](https://github.com/harness/harness-skills) | skill / 教程/tutorial | Harness Skills 是面向 Claude Code、Codex、Cursor 和 GitHub Copilot 的 CI/CD agent skills 系统，把 Harness MCP、AGENTS.md、CLAUDE.md 与技能目录组合成可复用的交付工作流。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | framework / 框架/framework | OpenHarness 是内置个人 Agent Ohmo 的开源 agent harness runtime，把 tool-use、skills、memory、多 Agent coordination、MCP 和安全权限系统组织成轻量基础设施。 |
| [sehoon787/my-codex](https://github.com/sehoon787/my-codex) | skill / 框架/framework | my-codex 是面向 OpenAI Codex CLI 的 agent harness 包，把 Boss 元编排器、Codex agents、skills、hooks 和 MCP servers 打包成一键安装的 specialist delegation 环境。 |
| [aiming-lab/SkillRL](https://github.com/aiming-lab/SkillRL) | evolution / 论文代码/paper-code | SkillRL 是通过自动技能发现连接经验轨迹和策略改进的论文代码，把成功/失败轨迹压缩成层级技能库，并在 RL 中让技能库与 agent policy 递归共进化。 |
| [hebbs-ai/hebbs-memory-engine](https://github.com/hebbs-ai/hebbs-memory-engine) | memory / 框架/framework | HEBBS 是面向 AI agents 的 Rust 记忆引擎，把项目旁路的 .hebbs cognition layer、四种召回、原生 consolidation、decay 与 Claude Code/OpenClaw skill surface 组合起来。 |
| [ViktorAxelsen/MemSkill](https://github.com/ViktorAxelsen/MemSkill) | evolution / 论文代码/paper-code | MemSkill 是学习并进化 long-horizon agent 记忆技能的框架，把记忆操作从静态手写规则变成由任务反馈驱动的 meta-memory skill bank。 |

## Working Principle

1. Browser-observed GitHub page evidence is stored raw under `raw-github/` with timestamps and freshness caveats.
2. `research/repo-classification.json` turns raw captures into structured repo/theme/function rows.
3. `projects/` and `site/public/reports/projects/` provide teaching model cards for public readers.
4. `site/src/data/projects.ts` exposes the new public project pages and category groups.
5. `.mermaid/current/graph.json` remains the object-graph truth source; `.mmd` and `.md` are rendered views.

## Blockers

- GitHub API freshness remains blocked in shell: `curl -I --max-time 10 https://api.github.com` could not resolve `api.github.com`.
- Local `gh auth status` reports the default token for `Shiyao-Huang` is invalid; authenticated metadata was not used.
- `codeflow` is not installed or not on PATH locally.
- GitNexus is available, but full-text search is degraded because the LadybugDB FTS extension download cannot connect.

## Validation Results

- `node --check work/research/hourly-public-metadata-update-2026-05-25-0613.mjs`: passed
- `node --check site/src/data/projects.ts`: passed
- JSON parse check for `research/repo-classification.json` and `.mermaid/current/graph.json`: passed
- `curl -I --max-time 10 https://api.github.com`: failed DNS resolution, freshness not API-verified
- `gh auth status`: failed, default token invalid
- `HOME=/private/tmp/gitnexus-home gitnexus doctor`: passed, GitNexus 1.6.5 graph/full-text/vector capabilities reported available
- `HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-evolution-hourly-0613 .`: passed with changed=4, added=15, deleted=0, 10,170 nodes, 10,554 edges, 32 clusters, 14 flows; FTS degraded because LadybugDB extension download could not connect
- `node scripts/generate_project_indexes.mjs`: passed
- `python3 scripts/enforce_raw_timestamps.py`: passed, raw-github md=445, md_ok=445, missing_count=0
- `node scripts/analyze_github_project_data.mjs`: passed, raw=445, classified=445, analyzed_projects=159, strict_evolution=75, broad_evolution=169
- `node scripts/generate_visual_assets.mjs`: passed, 4 SVG assets regenerated
- `(cd site && npm run build)`: passed, 240 pages built with existing Astro `z` deprecation hints
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`: passed, `main.pdf` 213 pages with existing font/overfull warnings

## Source Pages Observed

- https://github.com/harness/harness-skills
- https://github.com/HKUDS/OpenHarness
- https://github.com/sehoon787/my-codex
- https://github.com/aiming-lab/SkillRL
- https://github.com/hebbs-ai/hebbs-memory-engine
- https://github.com/ViktorAxelsen/MemSkill
