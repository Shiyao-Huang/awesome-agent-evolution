# Hourly Public Metadata Update - 2026-05-25 07:15 +0800

## One Sentence

This run adds six web-observed public metadata records for self-evolving team platforms, evolutionary repository agents, skill validation, skill evaluation, and public skill packs, then promotes them through raw captures, classification, project model cards, public site data, and Mermaid evidence.

## Three Sentences

The direct user intent source remains `docs/project-management/user-direct-inputs.md` and `CURRENT_GOAL.md`: raw evidence must feed processed analysis, public reports, website data, and indexes. New raw captures cover `zylos-ai/zylos-core`, `QuantaAlpha/QuantaAlpha`, `agent-ecosystem/skill-validator`, `darkrishabh/agent-skills-eval`, `JimLiu/baoyu-skills`, and `alirezarezvani/claude-skills`. GitHub shell API freshness is not fabricated; public GitHub pages/search results were observed through web access, while shell DNS/auth checks are recorded separately.

## Added Raw Captures

| Repo | Layer | Why it matters |
|---|---|---|
| [zylos-ai/zylos-core](https://github.com/zylos-ai/zylos-core) | evolution / 框架/framework | Zylos Core 是 self-evolving AI team platform，把专门化 agents、共享记忆、工具市场和交付界面组合成持续改进的团队运行时。 |
| [QuantaAlpha/QuantaAlpha](https://github.com/QuantaAlpha/QuantaAlpha) | evolution / 论文代码/paper-code | QuantaAlpha 是面向 repository-level software tasks 的 evolutionary code/repo agent，和 SE-Agent、RepoMaster、GitTaskBench 共同形成真实仓库任务上的自改进链路。 |
| [agent-ecosystem/skill-validator](https://github.com/agent-ecosystem/skill-validator) | skill / 工具/tool | Skill Validator 是面向 Agent Skill 规范的验证工具，把 skill 包从“能被发现”推进到“可检查、可发布、可治理”的质量门。 |
| [darkrishabh/agent-skills-eval](https://github.com/darkrishabh/agent-skills-eval) | evaluation / 评测/benchmark | agent-skills-eval 是面向 agent skills 的轻量评测 harness，用任务执行和结果检查把技能目录转成可比较的质量证据。 |
| [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) | skill / 教程/tutorial | Baoyu Skills 是可安装到 Claude Code、Codex、OpenClaw 等 agent 工具的技能包，代表 agent capability 通过 Markdown/SKILL.md 资产流通的开源形态。 |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | skill / 教程/tutorial | alirezarezvani/claude-skills 是面向 Claude Skills 生态的公开技能包，用 Markdown 工作流指令沉淀可复用 agent 专长。 |

## Working Principle

1. Browser/web-observed GitHub evidence is stored raw under `raw-github/` with timestamps and freshness caveats.
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

- `node --check work/research/hourly-public-metadata-update-2026-05-25-0715.mjs`: passed.
- `node --check site/src/data/projects.ts`: passed.
- JSON parse check for `research/repo-classification.json` and `.mermaid/current/graph.json`: passed.
- `curl -I --max-time 10 https://api.github.com`: failed DNS resolution, freshness not API-verified.
- `gh auth status`: failed, default token invalid.
- `HOME=/private/tmp/gitnexus-home gitnexus doctor`: passed, GitNexus 1.6.5 graph/full-text/vector capabilities reported available.
- `HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-agent-evolution-hourly-0715 .`: passed with changed=12, added=14, deleted=0, 10,326 nodes, 10,752 edges, 33 clusters, 15 flows; FTS degraded because LadybugDB extension download could not connect.
- `node scripts/generate_project_indexes.mjs`: passed.
- `python3 scripts/enforce_raw_timestamps.py`: passed, raw-github md=451, md_ok=451, missing_count=0.
- `node scripts/analyze_github_project_data.mjs`: passed, raw=451, classified=451, analyzed_projects=165, strict_evolution=77, broad_evolution=171.
- `node scripts/generate_visual_assets.mjs`: passed, 4 SVG assets regenerated.
- `(cd site && npm run build)`: passed, 246 pages built with existing Astro `z` deprecation hints.
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`: passed, `main.pdf` 213 pages with existing font/overfull/underfull warnings.

## Source Pages Observed

- https://github.com/zylos-ai/zylos-core
- https://github.com/QuantaAlpha/QuantaAlpha
- https://github.com/agent-ecosystem/skill-validator
- https://github.com/darkrishabh/agent-skills-eval
- https://github.com/JimLiu/baoyu-skills
- https://github.com/alirezarezvani/claude-skills
