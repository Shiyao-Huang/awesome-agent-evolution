# Hourly Public Metadata Update - 2026-05-26 00:36 +0800

## One Sentence

Added two web-observed skill lifecycle repositories, one for evaluating skills and one for reviewed Web API skill production.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop. This iteration adds mgechev/skillgrade and webmaxru/Agent-Skills to raw captures, classification, model-card reports, site data and graph views. GitHub API metadata is not fabricated: public metadata is web-observed and the prior shell DNS / local `gh` token blocker remains the freshness caveat for API verification.

## Added Repositories

- mgechev/skillgrade: Agent Skill Evaluation Harness; raw=raw-github/mgechev_skillgrade.md; report=projects/215-skillgrade-agent-skill-evaluation.md.
- webmaxru/Agent-Skills: Reviewed Web API Agent Skills; raw=raw-github/webmaxru_agent-skills.md; report=projects/216-webmaxru-agent-skills.md.

## Working Principle

Browser/search-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/` + `site/public/reports/projects/` -> `site/src/data/projects.ts` -> README/i18n/site build.

## Evidence Quality

- GitHub shell/API freshness blocker: this run used public GitHub pages through web evidence; shell API freshness remains blocked by the previously observed DNS/auth issue unless later revalidated.
- GitNexus blocker/status: `npx gitnexus status` was available and later reported the repo index up to date at commit `85247b7`, but `npx gitnexus analyze` failed on `/Users/copizzah/.gitnexus/registry.json` EPERM. The temp-HOME local binary workaround avoided the registry permission issue but failed to load LadybugDB FTS because the extension URL could not be reached, then failed with `Trying to insert into an index on table File but its extension is not loaded`.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source: `.mermaid/current/graph.json`.

## Validation

- `node --check site/src/data/projects.ts` and `jq empty research/repo-classification.json .mermaid/current/graph.json analysis/github-project-data-analysis.json output/raw-github-timestamp-index.json` passed.
- `node scripts/generate_project_indexes.mjs` passed.
- `python3 scripts/enforce_raw_timestamps.py` passed with 498/498 raw GitHub markdown records OK and 0 missing timestamps.
- `node scripts/analyze_github_project_data.mjs` passed: raw=498, classified=498, site projects=89, strict evolution=79, broad evolution=179.
- `(cd site && npm run build)` passed and generated 178 pages; pre-existing Astro duplicate `/visualizations` route warning and zod deprecation hints remain.
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)` passed and wrote `main.pdf`; existing undefined citation warnings remain.
