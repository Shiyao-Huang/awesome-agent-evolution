# Hourly Public Metadata Update - 2026-05-26 07:45 +0800

## One Sentence

Added two web-observed agent skill workflow repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `agiprolabs/claude-trading-skills` and `dceoy/speckit-agent-skills` as skill-layer evidence: one packages domain trading workflows, and the other packages Spec Kit process governance across multiple agent runtimes. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `agiprolabs/claude-trading-skills` | Domain Agent Skill Workflow Pack | `raw-github/agiprolabs_claude-trading-skills.md` | `site/public/reports/projects/235-claude-trading-skills-domain-agent-workflows.md` |
| `dceoy/speckit-agent-skills` | Spec-Driven Agent Workflow Skills | `raw-github/dceoy_speckit-agent-skills.md` | `site/public/reports/projects/236-speckit-agent-skills-spec-driven-workflow.md` |

## Working Principle

Browser-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> README/i18n -> `site/src/data/projects.ts` -> `site/public/reports/projects/` -> Astro site build.

## Evidence Quality

- Public GitHub pages were observed through browser-accessible GitHub text; no authenticated GitHub API freshness was claimed for these two new captures.
- Shell GitHub API blocker: `curl -I --max-time 10 https://api.github.com/rate_limit` failed with DNS resolution error.
- Local `gh auth status` reports the default token for `Shiyao-Huang` is invalid.
- GitNexus is installed and `npx gitnexus status/list` worked; status was stale before this iteration because indexed commit was `60aa9b9` and current commit was `f7b3c64`.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source remains `.mermaid/current/graph.json`; `.mmd` and `.md` are rendered views.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`: passed; regenerated `docs/indexes/*`.
- `python3 scripts/enforce_raw_timestamps.py`: passed; raw-github has 519 Markdown captures, 0 missing timestamps/frontmatter fields under the enforcer.
- `node scripts/analyze_github_project_data.mjs`: passed; counts are 519 raw captures, 519 classified repos, 109 analyzed projects, 82 strict evolution, 185 broad evolution.
- `(cd site && npm run build)`: passed; built 198 pages including `/projects/agiprolabs-claude-trading-skills/` and `/projects/dceoy-speckit-agent-skills/`. Existing duplicate `/visualizations` route warning and Astro `z` deprecation hints remain.
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`: passed; generated 205-page `main.pdf`. Existing undefined citation and layout warnings remain.

## GitNexus Evidence

- `npx gitnexus status` worked but reported a stale index: indexed commit `60aa9b9`, current commit before this iteration `f7b3c64`.
- `npx gitnexus list` worked and showed `awesome-evolution` plus local mirrored repos.
- `npx gitnexus query --repo awesome-evolution "raw-github repo-classification projects.ts generate_project_indexes analyze_github_project_data Mermaid graph hourly metadata"` linked this flow to `scripts/analyze_github_project_data.mjs`, `scripts/generate_project_indexes.mjs`, `scripts/generate_viz_exports.mjs`, `scripts/enforce_raw_timestamps.py`, and prior hourly notes.
- `npx gitnexus impact scripts/analyze_github_project_data.mjs --repo awesome-evolution` returned `Target ... not found`, so path-form blast-radius evidence remains blocked.
