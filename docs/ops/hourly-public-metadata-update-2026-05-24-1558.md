# Hourly Public Metadata Update - 2026-05-24 15:58 +08:00

## One Sentence

Added six web-observed GitHub metadata captures across memory, benchmark, skill, and computer-use-agent evolution lanes, then propagated them into classification, project reports, public site data, and Mermaid evidence.

## Three Sentences

Direct user intent still prioritizes raw -> processed -> work -> results traceability. Shell GitHub API access remains blocked by DNS and gh auth is invalid, so this run uses browser-observed GitHub pages and marks freshness as web-observed rather than API-verified. The added repositories are Mem0, TiMem, AMA-Bench, Agent Skills Directory, AceForge, and EvoCUA.

## Data Flow

1. Raw GitHub captures: new files in `raw-github/` with frontmatter timestamps.
2. Processed classification: `research/repo-classification.*` gains matching rows.
3. Results/public site: `site/src/data/projects.ts`, `projects/`, and `site/public/reports/projects/` gain model-card entries.
4. Graph evidence: `.mermaid/current/graph.json` remains truth source; `.mmd` and `.md` are rendered views.

## GitNexus / Freshness Notes

- GitNexus 1.6.5 is installed and `gitnexus doctor` reports graph/full-text/vector capabilities.
- Rechecked GitNexus with `HOME=/private/tmp/gitnexus-home`; registry EPERM was avoided, but `gitnexus analyze --skip-git --index-only --name awesome-agent-evolution-hourly .` still failed because the FTS extension could not be downloaded and LadybugDB reported `index extension is not loaded`.
- GitHub API freshness is blocked: `curl https://api.github.com/rate_limit` cannot resolve host and gh has an invalid token.

## Added Repositories

- mem0ai/mem0: Agent 通用记忆层; raw=raw-github/mem0ai_mem0.md; report=projects/58-mem0-agent-memory.md
- TiMEM-AI/timem: 长程 Agent 时间记忆; raw=raw-github/timem-ai_timem.md; report=projects/59-timem-temporal-memory.md
- AMA-Bench/AMA-Bench: Agent 长程记忆基准; raw=raw-github/ama-bench_ama-bench.md; report=projects/60-ama-bench-memory-evaluation.md
- dmgrok/agent_skills_directory: Agent 技能发现索引; raw=raw-github/dmgrok_agent_skills_directory.md; report=projects/61-agent-skills-directory.md
- sudokrang/aceforge: OpenClaw 技能自进化引擎; raw=raw-github/sudokrang_aceforge.md; report=projects/62-aceforge-skill-evolution.md
- meituan/EvoCUA: Computer Use Agent 进化模型; raw=raw-github/meituan_evocua.md; report=projects/63-evocua-computer-use-agent.md

## Validation Results

- `node scripts/generate_project_indexes.mjs`: passed after adding raw GitHub timestamp index generation.
- `python3 scripts/enforce_raw_timestamps.py`: passed with missing_count=0; raw-github md_ok=366.
- `node scripts/analyze_github_project_data.mjs`: passed; raw_captures=366, classified_repos=365, analyzed_projects=73.
- `(cd site && npm run build)`: passed; 154 pages built, existing Astro `z` deprecation hints only.
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`: passed; main.pdf generated at 213 pages with existing overfull/underfull table warnings.
