# Hourly Public Metadata Update - 2026-05-24 22:08

## L1

新增 6 个 public metadata 项目，重点补齐 domain skills、personal/runtime、memory benchmark 和 agent-team/marketplace self-improvement loops。

## L2

本轮 raw capture 覆盖 ClawBio、EdgeClaw、OpenClaw.NET、JordanMcCann agentmemory、ClawdMarket、Agent Teams。所有 freshness 都标记为 web-observed，因为 shell DNS 无法解析 GitHub API 且 gh token 无效。更新链路是 raw-github -> repo-classification -> model-card project reports -> site data -> Mermaid graph -> generated indexes/analysis。

## Layer Placement

| Layer | Files |
|---|---|
| raw | `raw-github/clawbio_clawbio.md`, `raw-github/openbmb_edgeclaw.md`, `raw-github/clawdotnet_openclaw.net.md`, `raw-github/jordanmccann_agentmemory.md`, `raw-github/trillskillz_clawdmarket.md`, `raw-github/jbrahy_meta-agent-teams.md` |
| processed | `research/repo-classification.json`, `research/repo-classification.csv`, `research/repo-classification.md` |
| work | `work/research/hourly-public-metadata-update-2026-05-24-2208.md`, `.mermaid/current/graph.json`, `.mermaid/current/graph.mmd`, `.mermaid/current/graph.md` |
| results | `projects/96-clawbio-bioinformatics-skills.md`, `site/public/reports/projects/96-clawbio-bioinformatics-skills.md`, `projects/97-edgeclaw-edge-cloud-agent.md`, `site/public/reports/projects/97-edgeclaw-edge-cloud-agent.md`, `projects/98-openclaw-dotnet-runtime.md`, `site/public/reports/projects/98-openclaw-dotnet-runtime.md`, `projects/99-jordanmccann-agentmemory-longmemeval.md`, `site/public/reports/projects/99-jordanmccann-agentmemory-longmemeval.md`, `projects/100-clawdmarket-agent-marketplace.md`, `site/public/reports/projects/100-clawdmarket-agent-marketplace.md`, `projects/101-agent-teams-git-backed-evolution.md`, `site/public/reports/projects/101-agent-teams-git-backed-evolution.md`, `site/src/data/projects.ts` |

## New Public Evidence

- [ClawBio/ClawBio](https://github.com/ClawBio/ClawBio) - web GitHub page observed 864 commits, MIT license, Python skill library, 74 skills, 1,756 tests, validation/benchmark infrastructure, 867 stars and 174 forks; raw=`raw-github/clawbio_clawbio.md`; report=`projects/96-clawbio-bioinformatics-skills.md`.
- [OpenBMB/EdgeClaw](https://github.com/OpenBMB/EdgeClaw) - web GitHub page observed MIT license, OpenClaw-based edge-cloud collaborative agent, ClawXMemory/ClawXSkill/ClawXTool/ClawXKairos signals, 1.2k stars and 70 forks; raw=`raw-github/openbmb_edgeclaw.md`; report=`projects/97-edgeclaw-edge-cloud-agent.md`.
- [clawdotnet/openclaw.net](https://github.com/clawdotnet/openclaw.net) - web GitHub page observed 375 commits, MIT license, C#/.NET runtime folders, self-hosted OpenClaw gateway description, self-evolving/agent-harness topics, 345 stars and 66 forks; raw=`raw-github/clawdotnet_openclaw.net.md`; report=`projects/98-openclaw-dotnet-runtime.md`.
- [JordanMcCann/agentmemory](https://github.com/JordanMcCann/agentmemory) - web GitHub page observed 1 commit, MIT license, Python memory package, LongMemEval 96.20% claim, legitimacy verification notes, 23 stars and 2 forks; raw=`raw-github/jordanmccann_agentmemory.md`; report=`projects/99-jordanmccann-agentmemory-longmemeval.md`.
- [trillskillz/clawdmarket](https://github.com/trillskillz/clawdmarket) - web GitHub page observed 457 commits, MIT license, TypeScript/Next.js app, Karpathy loop self-improvement, MPP/x402/A2A marketplace contracts, 2 stars and 0 forks; raw=`raw-github/trillskillz_clawdmarket.md`; report=`projects/100-clawdmarket-agent-marketplace.md`.
- [jbrahy/meta-agent-teams](https://github.com/jbrahy/meta-agent-teams) - web GitHub page observed 14 commits, AGPL-3.0 license, skill/prompt/teams/docs layout, meta-agent/auditor/git-backed evolution README, 2 stars and topic agent-evolution signal; raw=`raw-github/jbrahy_meta-agent-teams.md`; report=`projects/101-agent-teams-git-backed-evolution.md`.

## Working Principle

1. Browser/search-visible GitHub pages provide current public page observations when API freshness is blocked.
2. Raw notes preserve page evidence and blocker context without running benchmarks or claiming verified source behavior.
3. Classification rows normalize each repo into category, function tag, theme, stack, timestamp, evidence, and teaching description.
4. Model cards teach the role, working principle, evidence path, limits, and public-site reading path.
5. Mermaid graph records the data-flow object model so future runs can update truth source first and render views second.

## Blockers

- GitHub API freshness blocked: `curl https://api.github.com/rate_limit` returned DNS failure; `gh auth status` reported invalid token.
- GitNexus must be re-run after generated files settle; previous runs used `HOME=/private/tmp/gitnexus-home` to avoid registry EPERM.

## Validation Results

- `jq empty research/repo-classification.json .mermaid/current/graph.json`: passed.
- `node --check site/src/data/projects.ts`: passed.
- `node scripts/generate_project_indexes.mjs`: passed, raw timestamp index has 400 records.
- `python3 scripts/enforce_raw_timestamps.py`: passed, raw-github md=400, md_ok=400, missing_count=0.
- `node scripts/analyze_github_project_data.mjs`: passed, raw=400, classified=400, analyzed_projects=110, strict_evolution=69, broad_evolution=165.
- `node scripts/generate_visual_assets.mjs`: passed, four SVG public visuals regenerated.
- `(cd site && npm run build)`: passed, 191 pages built; existing Astro `z` deprecation hints remain.
- `HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-agent-evolution-hourly .`: passed, 9,277 nodes / 9,532 edges / 30 clusters / 13 flows; FTS degraded by extension download failure.
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`: passed, `main.pdf` 213 pages; existing font/overfull warnings remain.
