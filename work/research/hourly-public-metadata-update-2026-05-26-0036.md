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
- GitNexus blocker/status: local `npx gitnexus status` is checked in this run; final freshness depends on whether `npx gitnexus analyze` can complete without network extension downloads.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source: `.mermaid/current/graph.json`.
