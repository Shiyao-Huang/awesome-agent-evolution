# Hourly Public Metadata Update - 2026-05-25 02:08 +0800

## One Sentence

This run extends the public Self Evolve metadata chain with six web-observed repositories covering official Codex skills, automated skill evolution, MCP-native memory, and cross-agent skill packs.

## Three Sentences

The user intent source remains `docs/project-management/user-direct-inputs.md` and `CURRENT_GOAL.md`: raw evidence must feed processed analysis, public project cards, site reports, and generated indexes. New raw captures were added for `openai/skills`, `sentient-agi/EvoSkill`, `rtk-ai/icm`, `callstackincubator/agent-skills`, `CodeAlive-AI/ai-driven-development`, `jakenuts/agent-skills`. GitHub API freshness is not fabricated; shell/gh validation is recorded separately and the files mark this batch as `web_observed_github_page`.

## Added Raw Captures

| Repo | Layer | Why it matters |
|---|---|---|
| [openai/skills](https://github.com/openai/skills) | skill / 教程/tutorial | OpenAI Skills 是 Codex 的官方 skills catalog，把可发现的说明、脚本和资源打包成可安装能力，成为 agent skill 生态的标准入口。 |
| [sentient-agi/EvoSkill](https://github.com/sentient-agi/EvoSkill) | evolution / 框架/framework | EvoSkill 把失败轨迹转成可复用 agent skills 和 prompt mutations，用 benchmark 驱动 held-out evaluation，使 coding agent 从单 prompt 修订走向完整 agent program evolution。 |
| [rtk-ai/icm](https://github.com/rtk-ai/icm) | memory / 工具/tool | ICM 是 experimental 但实用的永久 agent memory 层，用 Rust 单二进制和 MCP native 接口让 coding agent 在会话之间保留长期上下文。 |
| [callstackincubator/agent-skills](https://github.com/callstackincubator/agent-skills) | skill / 教程/tutorial | Callstack Agent Skills 把 React Native、GitHub workflow、Actions、upgrade 和 brownfield migration 等移动工程经验封装成 Claude/Codex 可安装的 skills。 |
| [CodeAlive-AI/ai-driven-development](https://github.com/CodeAlive-AI/ai-driven-development) | skill / 教程/tutorial | AI-Driven Development 是跨 Claude Code、Codex CLI、OpenCode、Cursor、Gemini 等工具的 skills 与安全 hook 集合，把 bug fix、研究、MCP、subagents、安全和 repo exploration 变成可复用操作协议。 |
| [jakenuts/agent-skills](https://github.com/jakenuts/agent-skills) | skill / 工具/tool | jakenuts Agent Skills 是面向 Claude Code 与 OpenAI Codex CLI 的技能和专家 agent toolkit，用 init 脚本部署 skills/agents，并通过分层专家定义控制上下文成本。 |

## Working Principle

1. Browser-observed GitHub page evidence is stored raw under `raw-github/` with timestamps and freshness caveats.
2. `research/repo-classification.json` turns raw captures into structured repo/theme/function rows.
3. `projects/` and `site/public/reports/projects/` provide teaching model cards for public readers.
4. `site/src/data/projects.ts` exposes the new public project pages and category groups.
5. `.mermaid/current/graph.json` remains the object-graph truth source; `.mmd` and `.md` are rendered views.

## Blockers

- GitHub API freshness must be treated as blocked unless the validation command proves otherwise.
- Local `gh` auth has been invalid in prior hourly runs; authenticated metadata is not used here.
- GitNexus is rerun after generated files settle; FTS has previously been degraded by LadybugDB extension download failures.

## Validation Results

- jq empty research/repo-classification.json .mermaid/current/graph.json: passed
- node --check site/src/data/projects.ts: passed
- curl -I --max-time 15 https://api.github.com/rate_limit: failed DNS resolution, freshness not API-verified
- gh auth status: failed, default token for Shiyao-Huang invalid
- node scripts/generate_project_indexes.mjs: passed after data and analysis refresh
- python3 scripts/enforce_raw_timestamps.py: passed, raw-github md=422, md_ok=422, missing_count=0
- node scripts/analyze_github_project_data.mjs: passed, raw=422, classified=422, analyzed_projects=135, strict_evolution=72, broad_evolution=167
- node scripts/generate_visual_assets.mjs: passed, 4 SVG assets regenerated
- HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-agent-evolution-hourly .: passed with changed=17, added=27, deleted=0, 9,669 nodes, 9,954 edges, 30 clusters, 13 flows; FTS degraded
- (cd site && npm run build): passed, 216 pages built with existing Astro z deprecation hints
- (cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex): passed, main.pdf 213 pages with existing font/overfull warnings
