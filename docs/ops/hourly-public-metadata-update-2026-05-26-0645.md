# Hourly Public Metadata Update - 2026-05-26 06:45 +0800

## One Sentence

Added two public agent-skill library captures and propagated them through raw, classification, README/i18n, public reports, site data, and the Mermaid graph.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `Orchestra-Research/AI-research-SKILLs` and `iliaal/ai-skills` as skill-layer evidence: both turn reusable agent process or research workflow knowledge into installable assets for Codex, Claude Code, OpenCode, OpenClaw, Cursor, Gemini CLI, and related agents. The corpus now reports 517 raw GitHub captures, 517 classified repositories, 107 site projects, 82 strict evolution repositories, and 185 broad evolution-related repositories.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `Orchestra-Research/AI-research-SKILLs` | Agent research skill library | `raw-github/orchestra-research_ai-research-skills.md` | `site/public/reports/projects/233-ai-research-skills-agent-research-workflow.md` |
| `iliaal/ai-skills` | Agent process skill library | `raw-github/iliaal_ai-skills.md` | `site/public/reports/projects/234-ai-skills-agent-process-discipline.md` |

## Working Principle

Browser-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> README/i18n -> `site/src/data/projects.ts` -> `site/public/reports/projects/` -> Astro site build.

## Evidence Quality

- Public GitHub pages were observed through browser-accessible GitHub text; no authenticated GitHub API freshness was claimed for these two new captures.
- GitNexus is installed and `gitnexus status/list/query --repo awesome-evolution` worked; the query linked the data-flow terms to `scripts/analyze_github_project_data.mjs`, `scripts/generate_project_indexes.mjs`, `scripts/enforce_raw_timestamps.py`, and prior hourly notes.
- `gitnexus impact scripts/analyze_github_project_data.mjs --repo awesome-evolution` returned `Target ... not found`, so blast-radius evidence is explicitly blocked for that exact path form.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source remains `.mermaid/current/graph.json`; `.mmd` and `.md` are rendered views.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
