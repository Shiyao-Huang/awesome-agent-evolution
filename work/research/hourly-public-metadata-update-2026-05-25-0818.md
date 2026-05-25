# Hourly Public Metadata Update - 2026-05-25 08:18 +0800

## One Sentence

This run promotes nine web-observed agent-skill, self-evolving-skill, memory, registry, and benchmark-adjacent repositories through raw captures or reused raw captures, classification, public model cards, site data, and Mermaid evidence.

## Three Sentences

The direct user intent source remains `docs/project-management/user-direct-inputs.md` and `CURRENT_GOAL.md`: raw evidence must feed processed analysis, public reports, website data, and indexes. Five new raw captures were added and four existing raw captures were reused rather than overwritten. GitHub shell API freshness is not fabricated; public GitHub pages/search results were observed through web access, while shell DNS/auth checks are recorded separately.

## Added Or Promoted Captures

| Repo | Layer | Raw handling | Why it matters |
|---|---|---|---|
| [agentskills/agentskills](https://github.com/agentskills/agentskills) | skill / 教程/tutorial | reused existing raw | Agent Skills Specification 是 agent skills 生态的公开标准源，定义 SKILL.md、渐进式加载、脚本/参考资料/资产打包和跨 agent 复用边界。 |
| [elastic/agent-skills](https://github.com/elastic/agent-skills) | skill / 工具/tool | new raw capture | Elastic Agent Skills 是厂商官方技能库，把 Elastic 平台经验封装成符合 Agent Skills 开放标准的 agent 可加载工作流。 |
| [hashgraph-online/registry-broker-skills](https://github.com/hashgraph-online/registry-broker-skills) | skill / 工具/tool | new raw capture | HOL Registry Skills 把 Universal Agentic Registry、MCP discovery、agent skills registry 和 skill package publishing 做成可被 Claude/Codex/OpenClaw 等 agent 使用的技能桥。 |
| [CE0Alex/skill-hunter](https://github.com/CE0Alex/skill-hunter) | skill / 评测/evaluation | reused existing raw | Skill Hunter 是一个 meta-skill：它分析当前仓库并推荐最适合的外部 skill 栈，使 agent skills 从静态目录变成可验证、可匹配、可安装的能力选择流程。 |
| [AMAP-ML/SkillClaw](https://github.com/AMAP-ML/SkillClaw) | evolution / 论文代码/paper-code | reused existing raw | SkillClaw 直接回应“skill 如何自进化”：它从真实 agent 会话中抽取、去重、验证并共享可复用 skills，让单用户和多 agent 团队都能把经验沉淀为演化资产。 |
| [HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace) | evolution / 框架/framework | reused existing raw | OpenSpace 把 skills 当作会选择、执行、监控、分析并演化的运行时实体，提供 OpenClaw、nanobot、Claude Code、Codex、Cursor 等 agent 的自进化技能层。 |
| [huytieu/COG-second-brain](https://github.com/huytieu/COG-second-brain) | memory / 应用/application | new raw capture | COG Second Brain 是把 agent skills、worker agents、Obsidian/Git markdown vault 和个人/团队知识流程合成的 self-evolving second brain 产品形态。 |
| [kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory) | memory / 工具/tool | new raw capture | Hippo Memory 是偏研究/工程混合的 agent memory 系统，重点在衰减、强化检索、巩固和可审计 benchmark，尤其适合比较 memory 是否带来随任务序列改进。 |
| [sundial-org/awesome-openclaw-skills](https://github.com/sundial-org/awesome-openclaw-skills) | skill / 教程/tutorial | new raw capture | Awesome OpenClaw Skills 是 OpenClaw skill 生态的热门技能索引，提供 913 个技能、下载/安装名和领域分类，是 public site 比较 skill marketplace 形态的补充证据。 |

## Working Principle

1. Browser/web-observed GitHub evidence is stored raw under `raw-github/` with timestamps and freshness caveats, or reused from existing full raw captures when already present.
2. `research/repo-classification.json` turns raw captures into structured repo/theme/function rows.
3. `projects/` and `site/public/reports/projects/` provide teaching model cards for public readers.
4. `site/src/data/projects.ts` exposes the new public project pages and category groups.
5. `.mermaid/current/graph.json` remains the object-graph truth source; `.mmd` and `.md` are rendered views.

## Blockers

- GitHub API freshness remains blocked in shell: `curl -I --max-time 10 https://api.github.com` could not resolve `api.github.com`, and `gh api rate_limit` could not connect.
- `codeflow` is not installed or not on PATH locally.
- GitNexus is available, but full-text search is degraded because the LadybugDB FTS extension download cannot connect.

## Validation Results

- `jq empty research/repo-classification.json .mermaid/current/graph.json`: passed.
- `node --check site/src/data/projects.ts`: passed.
- `node scripts/generate_project_indexes.mjs`: passed.
- `python3 scripts/enforce_raw_timestamps.py`: passed, raw-github md=456, md_ok=456, missing_count=0.
- `node scripts/analyze_github_project_data.mjs`: passed, raw=456, classified=456, analyzed_projects=174, strict_evolution=77, broad_evolution=172.
- `node scripts/generate_visual_assets.mjs`: passed, 4 SVG assets regenerated.
- `HOME=/private/tmp/gitnexus-home gitnexus doctor`: passed, GitNexus 1.6.5 graph/full-text/vector capabilities reported available.
- `HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-agent-evolution-hourly-0818 .`: passed with changed=12, added=20, deleted=0, 10,524 nodes, 10,992 edges, 34 clusters, 16 flows; FTS degraded because LadybugDB extension download could not connect.
- `(cd site && npm run build)`: passed, 255 pages built with existing Astro `z` deprecation hints.
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`: passed, `main.pdf` 213 pages with existing font/overfull/underfull warnings.

## Source Pages Observed

- https://github.com/agentskills/agentskills
- https://github.com/elastic/agent-skills
- https://github.com/hashgraph-online/registry-broker-skills
- https://github.com/CE0Alex/skill-hunter
- https://github.com/AMAP-ML/SkillClaw
- https://github.com/HKUDS/OpenSpace
- https://github.com/huytieu/COG-second-brain
- https://github.com/kitfunso/hippo-memory
- https://github.com/sundial-org/awesome-openclaw-skills
