# Hourly Public Metadata Update - 2026-05-25 01:06 +0800

## One Sentence

This run extended the public Self Evolve metadata chain with current web-observed evidence for A-Evolve, AutoResearchClaw, MemOS, SkillLearnBench, AgentSkillOS, and STATE-Bench.

## Three Sentences

The user intent source remains `docs/project-management/user-direct-inputs.md` and `CURRENT_GOAL.md`: raw evidence must feed processed analysis, public project cards, site reports, and generated indexes. Four new raw GitHub captures were added, while existing A-Evolve and MemOS raw captures were promoted into site/model-card coverage. GitHub API freshness is not fabricated: shell DNS still cannot resolve `api.github.com`, and `gh auth status` reports an invalid token.

## Five Sentences

1. Raw additions: raw-github/aiming-lab_autoresearchclaw.md, raw-github/cxcscmu_skilllearnbench.md, raw-github/ynulihao_agentskillos.md, raw-github/microsoft_state-bench.md.
2. Public model cards: projects/115-a-evolve-universal-agent-evolution.md, projects/116-autoresearchclaw-self-evolving-research-agent.md, projects/117-memos-self-evolving-memory-os.md, projects/118-skilllearnbench-agent-skill-generation.md, projects/119-agentskillos-skill-retrieval-orchestration.md, projects/120-state-bench-agent-memory-evaluation.md.
3. Classification now covers the current run in `research/repo-classification.json`, `.csv`, and `.md`.
4. The public site impact is in `site/src/data/projects.ts` plus synced copies under `site/public/reports/projects/`.
5. The Mermaid truth source remains `.mermaid/current/graph.json`, with `.mmd` and `.md` rendered as views.

## Evidence Quality

- Browser/web evidence: public GitHub pages and Microsoft open-source blog/search evidence were used for visible stars, forks, commits, language, license, release and README claims.
- Shell GitHub API: blocked by DNS resolution failure for `api.github.com`.
- GitHub CLI: blocked by invalid local token.
- GitNexus: run separately with `HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-evolution-hourly .`; result should be copied into graph evidence after completion.

## Working Principle

The data flow is raw GitHub capture -> classification row -> aggregate timestamp and GitHub analysis -> public project model card -> site project card -> generated public reports and indexes. Raw files preserve public page evidence and blockers without turning them into conclusions; processed files classify and explain; work notes preserve handoff context; public reports expose the updated evidence to readers.

## Validation Results

- `jq empty research/repo-classification.json .mermaid/current/graph.json`: passed.
- `node --check site/src/data/projects.ts`: passed.
- `curl -I --max-time 15 https://api.github.com/rate_limit`: failed DNS resolution; no API freshness fabricated.
- `gh auth status`: failed because the default token is invalid.
- `HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-evolution-hourly .`: passed with 9,477 nodes, 9,732 edges, 30 clusters, and 13 flows; FTS degraded because extension download could not connect.
- `node scripts/generate_project_indexes.mjs`: passed after data and project-index updates.
- `python3 scripts/enforce_raw_timestamps.py`: passed; missing_count=0 and raw-github md_ok=416.
- `node scripts/analyze_github_project_data.mjs`: passed; 416 raw captures, 416 classified repos, 129 analyzed projects, 71 strict evolution repos, 166 broad evolution-related repos.
- `node scripts/generate_visual_assets.mjs`: passed; 4 SVG visual assets regenerated.
- `(cd site && npm run build)`: passed; 210 pages built with existing Astro `z` deprecation hints.
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`: passed; `main.pdf` remains 213 pages with existing font/overfull warnings.
