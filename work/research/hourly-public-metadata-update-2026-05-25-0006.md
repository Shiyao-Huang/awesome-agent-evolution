# Hourly Public Metadata Update - 2026-05-25 00:06 +08:00

## One-Sentence Compression

This run extends the raw -> classification -> public-site pipeline with seven web-observed memory, skill, and evaluation repositories while preserving API freshness limits explicitly.

## Three-Sentence Compression

Direct user intent still ranks raw material, processed classification, public site/report output, and Mermaid traceability above team summaries. Shell GitHub API access failed DNS resolution and `gh auth status` reported an invalid token, so repository metadata is browser-observed and not API-verified. GitNexus is available locally and should be rerun after generated indexes and analysis settle so the graph evidence reflects the final filesystem delta.

## Added Raw Captures

| Repo | Layer | Why it matters |
|---|---|---|
| [rendro/sediment](https://github.com/rendro/sediment) | memory / 工具/tool | Sediment 是 local-first、MCP-native 的 agent semantic memory 层，用单文件 Rust binary 把向量检索、关系图、访问衰减、项目隔离和冲突检测组合成可本地运行的记忆系统。 |
| [princeton-pli/hal-harness](https://github.com/princeton-pli/hal-harness) | evaluation / 评测/evaluation | HAL Harness 是 Princeton PLI 的 holistic agent evaluation harness，用统一 CLI 在 SWE-bench、USACO、AppWorld、CORE-bench、tau-bench 等任务上比较 agent，同时记录成本、trace 和 leaderboard 提交流程。 |
| [matrixorigin/Memoria](https://github.com/matrixorigin/Memoria) | memory / 工具/tool | Memoria 把 AI Agent memory 做成类似 Git 的可版本化基础设施，用 snapshot、branch、merge、rollback、语义检索和自治理规则降低幻觉并维护长期上下文一致性。 |
| [HUST-AI-HYZ/MemoryAgentBench](https://github.com/HUST-AI-HYZ/MemoryAgentBench) | memory / 评测/evaluation | MemoryAgentBench 是 ICLR 2026 记忆评测代码库，用增量多轮交互测试 agent memory 的准确检索、测试时学习、长程理解和冲突解决能力。 |
| [pjt222/agent-almanac](https://github.com/pjt222/agent-almanac) | skill / 教程/tutorial | Agent Almanac 是 executable skills、specialist agents 和 pre-built teams 的索引库，用技能目录、agent/team 编排和交互可视化帮助 AI-assisted development 复用操作流程。 |
| [psenger/ai-agent-skills](https://github.com/psenger/ai-agent-skills) | skill / 教程/tutorial | psenger/ai-agent-skills 是面向 Claude Code、Codex、Cursor 和 Agent Skills Open Standard 的 production-ready skill 包，强调 API、Git、Obsidian、架构评审和安全等工程场景。 |
| [OpenHands/benchmarks](https://github.com/OpenHands/benchmarks) | evaluation / 评测/evaluation | OpenHands Benchmarks 是 OpenHands V1 的 evaluation harness，用标准化 pipeline 测试软件工程、通用推理、Commit0 和 workplace safety 等真实任务上的 agent 能力。 |

## Working Principle

1. Browser-observed GitHub page evidence is stored raw under `raw-github/` with timestamps and freshness caveats.
2. `research/repo-classification.json` turns raw captures into structured repo/theme/function rows.
3. `projects/` and `site/public/reports/projects/` provide teaching model cards for public readers.
4. `site/src/data/projects.ts` exposes the new public project pages and category groups.
5. `.mermaid/current/graph.json` remains the object-graph truth source; `.mmd` and `.md` are rendered views.

## Blockers

- `curl https://api.github.com/rate_limit` failed with DNS resolution error in the shell sandbox.
- `gh auth status` reports the configured GitHub token is invalid.
- Freshness is therefore marked `web_observed_github_page`, not `github_api`.

## Validation Results

- `jq empty research/repo-classification.json .mermaid/current/graph.json` passed.
- `node --check site/src/data/projects.ts` passed.
- `node scripts/generate_project_indexes.mjs` passed after analysis refresh.
- `python3 scripts/enforce_raw_timestamps.py` passed: raw-github md=412, md_ok=412, missing_count=0.
- `node scripts/analyze_github_project_data.mjs` passed: raw=412, classified=412, analyzed_projects=123, strict_evolution=70, broad_evolution=165.
- `node scripts/generate_visual_assets.mjs` regenerated four public SVG visualizations.
- `(cd site && npm run build)` passed with 204 pages and existing Astro `z` deprecation hints.
- `HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-evolution-hourly .` passed: 9,476 nodes, 9,731 edges, 30 clusters, 13 flows; FTS unavailable due extension download connection failure.
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)` passed; `main.pdf` is 213 pages with existing font/overfull warnings.
