# Hourly Public Metadata Update - 2026-06-01 01:50 +0800

## One Sentence

Added 8 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `longmans/self-evolve`, `MCKRUZ/openclaw-langfuse`, `hyperspell/hyperspell-openclaw`, `composio-community/awesome-openclaw-plugins`, `mvanhorn/last30days-skill`, `EESIZ/clawdreamer`, `ThisIsJeron/awesome-openclaw-plugins`, `BlockRunAI/awesome-OpenClaw-Money-Maker` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `longmans/self-evolve` | Self-Evolving OpenClaw Workflow Playground and Benchmark Harness | `raw-github/longmans_self-evolve.md` | `site/public/reports/projects/355-self-evolve-openclaw-playground.md` |
| `MCKRUZ/openclaw-langfuse` | OpenClaw Tracing Plugin for Langfuse Observability | `raw-github/mckruz_openclaw-langfuse.md` | `site/public/reports/projects/356-openclaw-langfuse-observability-plugin.md` |
| `hyperspell/hyperspell-openclaw` | OpenClaw Memory and Context Enhancement Runtime | `raw-github/hyperspell_hyperspell-openclaw.md` | `site/public/reports/projects/357-hyperspell-openclaw-memory-engine.md` |
| `composio-community/awesome-openclaw-plugins` | OpenClaw Plugin Ecosystem Index and Skill Resource Map | `raw-github/composio-community_awesome-openclaw-plugins.md` | `site/public/reports/projects/358-awesome-openclaw-plugins-composio-community.md` |
| `mvanhorn/last30days-skill` | Reproducible Agent Skill Benchmark and Evaluation Harness | `raw-github/mvanhorn_last30days-skill.md` | `site/public/reports/projects/359-last30days-skill-benchmark-harness.md` |
| `EESIZ/clawdreamer` | OpenClaw Automation App and Productivity Workflow Plugin | `raw-github/eesiz_clawdreamer.md` | `site/public/reports/projects/360-clawdreamer-automation-plugin.md` |
| `ThisIsJeron/awesome-openclaw-plugins` | OpenClaw Plugin Catalog and Community Knowledge Index | `raw-github/thisisjeron_awesome-openclaw-plugins.md` | `site/public/reports/projects/361-awesome-openclaw-plugins-thisisjeron.md` |
| `BlockRunAI/awesome-OpenClaw-Money-Maker` | Agent Monetization Workflow and OpenClaw Use-Case Index | `raw-github/blockrunai_awesome-openclaw-money-maker.md` | `site/public/reports/projects/362-awesome-openclaw-money-maker-index.md` |

## Working Principle

Browser-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> README/i18n -> `site/src/data/projects.ts` -> `site/public/reports/projects/` -> Astro site build.

## Evidence Quality

- Public GitHub pages were observed through browser-accessible GitHub text; no authenticated GitHub API freshness was claimed for this iteration's captures.
- Shell GitHub API blocker: `curl -I --max-time 10 https://api.github.com/rate_limit` failed with DNS resolution error.
- Local `gh auth status` reports the default token for `Shiyao-Huang` is invalid.
- GitNexus is installed and `npx gitnexus status/list` worked; stale index state was observed during this run.
- `npx gitnexus analyze .` failed with LadybugDB lock error on `.gitnexus/lbug`.
- `HOME=/private/tmp/gitnexus-home npx gitnexus analyze --skip-git --index-only --name awesome-evolution-hourly-20260601-0150 .` failed because FTS extension download was blocked, causing COPY/index binder failure.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source remains `.mermaid/current/graph.json`; `.mmd` and `.md` are rendered views.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`
