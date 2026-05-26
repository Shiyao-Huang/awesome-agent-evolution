# Hourly Public Metadata Update - 2026-05-25 09:19 +0800

## One Sentence

This run adds seven web-observed repositories that strengthen test-time evolution, portable agent memory/skills, harness factories, Codex tooling, and domain skill supply coverage.

## Three Sentences

The public governance rule remains: raw evidence feeds processed classification, model cards, public reports, site data, indexes, and Mermaid evidence. Shell GitHub API and `gh api` remained blocked, so every current metric is explicitly marked web-observed rather than API verified. The added repositories fill gaps that were still missing after the 08:18 run: EVOTEST, agentic-stack, revfactory/harness, oh-my-skills, OpenClaw Harness, codex-1up, and dotnet-skills.

## Added Captures

| Repo | Layer | Why it matters |
|---|---|---|
| [yf-he/EvoTest](https://github.com/yf-he/EvoTest) | evolution / 论文代码/paper-code | EVOTEST 是面向 self-improving agentic systems 的 test-time evolution 框架，用 Jericho repeated episodes 检验无梯度、无微调条件下的 prompt、memory、state extractor 与工具策略演化。 |
| [codejunkie99/agentic-stack](https://github.com/codejunkie99/agentic-stack) | memory / 工具/tool | agentic-stack 把 memory、skills、protocols 和 harness adapters 放进可迁移的 `.agent/` 层，让 Claude Code、Cursor、OpenClaw、Codex、Gemini、Hermes 等工具共享同一套经验与技能。 |
| [revfactory/harness](https://github.com/revfactory/harness) | skill / 框架/framework | revfactory/harness 是面向 Claude Code 的 team-architecture factory，把领域描述转成 agent team、skills、orchestration protocol 和验证流程，是 harness-as-meta-factory 的代表。 |
| [akillness/oh-my-skills](https://github.com/akillness/oh-my-skills) | skill / 教程/tutorial | oh-my-skills 是跨 Claude Code、Gemini CLI、Codex CLI 和 OpenCode 的技能集合，用 JEO 编排协议把 plan、execute、verify、cleanup、多 agent team coordination 变成可复用技能层。 |
| [guixiang123124/openclaw-harness](https://github.com/guixiang123124/openclaw-harness) | skill / 框架/framework | OpenClaw Harness Engineering 把 OpenClaw agent 包装成工程团队：Lead 规划 sprint，ACP Builder 实现，Lead/Reviewer 按功能、质量、安全、边界条件评分并迭代到可交付。 |
| [regenrek/codex-1up](https://github.com/regenrek/codex-1up) | skill / 工具/tool | codex-1up 是 Codex CLI 增强包，把 Codex 安装/更新、常用 shell 工具、AGENTS.md、配置 profiles、通知和 skills 管理整合成可重复的 agent workstation bootstrap。 |
| [managedcode/dotnet-skills](https://github.com/managedcode/dotnet-skills) | skill / 工具/tool | dotnet-skills 是面向 Codex、Claude Code、GitHub Copilot、Gemini、Junie 的 .NET skill catalog 和 CLI，把现代 .NET 官方文档、包、agents 与 upstream watch 组合成可安装技能供应链。 |

## Working Principle

1. Web-observed GitHub evidence is stored raw under `raw-github/` with timestamp and freshness caveat.
2. `research/repo-classification.json` turns raw captures into structured repo/theme/function rows.
3. `projects/` and `site/public/reports/projects/` provide teaching model cards for public readers.
4. `site/src/data/projects.ts` exposes the new public project pages and group memberships.
5. `.mermaid/current/graph.json` remains the object-graph truth source; `.mmd` and `.md` are rendered views.

## Blockers

- `curl -I --max-time 10 https://api.github.com` failed DNS resolution.
- `gh api rate_limit` could not connect to `api.github.com`.
- CodeFlow availability and GitNexus indexing are checked in validation after generation.

## Source Pages Observed

- https://github.com/yf-he/EvoTest
- https://github.com/codejunkie99/agentic-stack
- https://github.com/revfactory/harness
- https://github.com/akillness/oh-my-skills
- https://github.com/guixiang123124/openclaw-harness
- https://github.com/regenrek/codex-1up
- https://github.com/managedcode/dotnet-skills


## Validation Results

- Shell GitHub API remains DNS-blocked: curl -I --max-time 10 https://api.github.com failed with Could not resolve host; gh api rate_limit could not connect.
- jq empty research/repo-classification.json .mermaid/current/graph.json passed; node --check site/src/data/projects.ts and the 0919 generator passed.
- node scripts/generate_project_indexes.mjs passed after data and analysis refresh.
- python3 scripts/enforce_raw_timestamps.py passed with raw-github md=463, md_ok=463, missing_count=0.
- node scripts/analyze_github_project_data.mjs passed with raw=463, classified=463, analyzed_projects=181, strict_evolution=78, broad_evolution=173.
- node scripts/generate_visual_assets.mjs regenerated four SVG assets.
- command -v codeflow returned no command; CodeFlow is unavailable on PATH in this environment.
- HOME=/private/tmp/gitnexus-home gitnexus doctor passed; analyze passed with changed=14, added=16, deleted=0, 10,690 nodes, 11,498 edges, 36 clusters, 16 flows; FTS degraded because LadybugDB extension download could not connect.
- (cd site && npm run build) passed with 262 pages built and existing Astro z deprecation hints.
- (cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex) passed; main.pdf remains 213 pages with existing font/overfull/underfull warnings.
