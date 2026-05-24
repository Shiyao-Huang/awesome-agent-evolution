# Hourly Public Metadata Update - 2026-05-24 23:06

## L1

新增 6 个 public metadata 项目，重点补齐 cross-agent skills、agent-native memory 和 self-evolving runtime/tool supply chain。

## L2

本轮 raw capture 覆盖 Randroids Dojo Skills、Memori、skills-supply、AgentOS、Qt AI Skills、chriscox Agent Skills。所有 freshness 都标记为 web-observed，因为 shell DNS 无法解析 GitHub API 且 gh token 无效。更新链路是 raw-github -> repo-classification -> model-card project reports -> site data -> Mermaid graph -> generated indexes/analysis。

## Layer Placement

| Layer | Files |
|---|---|
| raw | `raw-github/randroids-dojo_skills.md`, `raw-github/memorilabs_memori.md`, `raw-github/803_skills-supply.md`, `raw-github/iii-experimental_agentos.md`, `raw-github/theqtcompanyrnd_agent-skills.md`, `raw-github/chriscox_agent-skills.md` |
| processed | `research/repo-classification.json`, `research/repo-classification.csv`, `research/repo-classification.md` |
| work | `work/research/hourly-public-metadata-update-2026-05-24-2306.md`, `.mermaid/current/graph.json`, `.mermaid/current/graph.mmd`, `.mermaid/current/graph.md` |
| results | `projects/102-randroids-skills-agent-skill-loop.md`, `site/public/reports/projects/102-randroids-skills-agent-skill-loop.md`, `projects/103-memori-agent-native-memory.md`, `site/public/reports/projects/103-memori-agent-native-memory.md`, `projects/104-skills-supply-cross-agent-skills.md`, `site/public/reports/projects/104-skills-supply-cross-agent-skills.md`, `projects/105-agentos-self-evolving-agent-os.md`, `site/public/reports/projects/105-agentos-self-evolving-agent-os.md`, `projects/106-qt-ai-skills.md`, `site/public/reports/projects/106-qt-ai-skills.md`, `projects/107-chriscox-agent-skills.md`, `site/public/reports/projects/107-chriscox-agent-skills.md`, `site/src/data/projects.ts` |

## New Public Evidence

- [Randroids-Dojo/skills](https://github.com/Randroids-Dojo/skills) - web GitHub page observed 48 commits, MIT license, dual-format Claude Code/Codex/OpenCode skills, .agents/.codex compatibility paths, 33 stars and 2 forks; raw=`raw-github/randroids-dojo_skills.md`; report=`projects/102-randroids-skills-agent-skill-loop.md`.
- [MemoriLabs/Memori](https://github.com/memorilabs/memori) - web GitHub page observed 600 commits, Apache 2.0 license, Python/TypeScript/Rust stack, LoCoMo 81.95% accuracy claim, Version 3.3.4 latest May 20 2026, 14.9k stars and 2.3k forks; raw=`raw-github/memorilabs_memori.md`; report=`projects/103-memori-agent-native-memory.md`.
- [803/skills-supply](https://github.com/803/skills-supply) - web GitHub page observed 60 commits, MIT license, TypeScript primary language, sk CLI with agents.toml, latest sk@0.2.4 on Jan 12 2026, 32 stars and 1 fork; raw=`raw-github/803_skills-supply.md`; report=`projects/104-skills-supply-cross-agent-skills.md`.
- [iii-experimental/agentos](https://github.com/iii-experimental/agentos) - web GitHub page observed redirect to iii-experimental/agentos, 223 commits, Apache-2.0 license, Rust/TypeScript/Python stack, self-evolving topic, 145 stars and 20 forks; raw=`raw-github/iii-experimental_agentos.md`; report=`projects/105-agentos-self-evolving-agent-os.md`.
- [TheQtCompanyRnD/agent-skills](https://github.com/TheQtCompanyRnD/agent-skills) - web GitHub page observed 27 commits, BSD-3-Clause license, Python/C++/HTML stack, Qt C++ and QML review skills, Codex/Claude/Gemini/Copilot install paths, 171 stars and 16 forks; raw=`raw-github/theqtcompanyrnd_agent-skills.md`; report=`projects/106-qt-ai-skills.md`.
- [chriscox/agent-skills](https://github.com/chriscox/agent-skills) - web GitHub page observed 15 commits, MIT license, Shell primary language, Claude Code/Codex/Gemini/OpenClaw support, project-planner and docs-sync workflow signals, 10 stars and 2 forks; raw=`raw-github/chriscox_agent-skills.md`; report=`projects/107-chriscox-agent-skills.md`.

## Working Principle

1. Browser/search-visible GitHub pages provide current public page observations when API freshness is blocked.
2. Raw notes preserve page evidence and blocker context without running benchmarks or claiming verified source behavior.
3. Classification rows normalize each repo into category, function tag, theme, stack, timestamp, evidence, and teaching description.
4. Model cards teach the role, working principle, evidence path, limits, and public-site reading path.
5. Mermaid graph records the data-flow object model so future runs can update truth source first and render views second.

## Blockers

- GitHub API freshness blocked: `curl https://api.github.com/rate_limit` returned DNS failure; `gh auth status` reported invalid token.
- GitNexus will be re-run after generated files settle; previous runs used `HOME=/private/tmp/gitnexus-home` to avoid registry EPERM.

## Validation Results

- `jq empty research/repo-classification.json .mermaid/current/graph.json`: passed.
- `node --check site/src/data/projects.ts`: passed.
- `python3 scripts/enforce_raw_timestamps.py`: passed, raw-github md=405, md_ok=405, missing_count=0.
- `node scripts/generate_project_indexes.mjs`: passed; re-run after analysis fixed master counts to 405 raw captures, 405 classified repos, 116 analyzed projects.
- `node scripts/analyze_github_project_data.mjs`: passed, raw=405, classified=405, analyzed_projects=116, strict_evolution=70, broad_evolution=165.
- `node scripts/generate_visual_assets.mjs`: passed, four SVG public visuals regenerated.
- `(cd site && npm run build)`: passed, 197 pages built; existing Astro `z` deprecation hints remain.
- `HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-evolution-hourly .`: passed, 9,371 nodes / 9,626 edges / 30 clusters / 13 flows; FTS degraded by extension download failure.
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`: passed, `main.pdf` 213 pages; existing font/overfull warnings remain.
