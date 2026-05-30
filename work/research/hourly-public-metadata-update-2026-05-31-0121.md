# Hourly Public Metadata Update - 2026-05-31 01:21 +0800

## One Sentence

Added 6 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `EvoMap/evolver`, `NousResearch/hermes-agent-self-evolution`, `knowall-ai/mcp-neo4j-agent-memory`, `LearnPrompt/cc-harness-skills`, `aiming-lab/ClawArena`, `kodustech/awesome-agent-skills` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `EvoMap/evolver` | Self-Evolving Memory and Reasoning Map Framework | `raw-github/evomap_evolver.md` | `site/public/reports/projects/336-evomap-evolver-self-evolving-memory-framework.md` |
| `NousResearch/hermes-agent-self-evolution` | On-Policy RL Self-Evolution Pipeline for Agent Models | `raw-github/nousresearch_hermes-agent-self-evolution.md` | `site/public/reports/projects/337-hermes-agent-self-evolution-rl-model-card.md` |
| `knowall-ai/mcp-neo4j-agent-memory` | Graph-Memory MCP Server for Long-Horizon Agents | `raw-github/knowall-ai_mcp-neo4j-agent-memory.md` | `site/public/reports/projects/338-mcp-neo4j-agent-memory-server.md` |
| `LearnPrompt/cc-harness-skills` | Codex/Claude Harness Skill Playbooks | `raw-github/learnprompt_cc-harness-skills.md` | `site/public/reports/projects/339-cc-harness-skills-operational-playbooks.md` |
| `aiming-lab/ClawArena` | Interactive Computer-Use Benchmark Harness Arena | `raw-github/aiming-lab_clawarena.md` | `site/public/reports/projects/340-clawarena-computer-use-benchmark.md` |
| `kodustech/awesome-agent-skills` | Curated Agent Skill Catalog and Prompt Workflow Patterns | `raw-github/kodustech_awesome-agent-skills.md` | `site/public/reports/projects/341-kodu-awesome-agent-skills-index.md` |

## Working Principle

Browser-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> README/i18n -> `site/src/data/projects.ts` -> `site/public/reports/projects/` -> Astro site build.

## Evidence Quality

- Public GitHub pages were observed through browser-accessible GitHub text; no authenticated GitHub API freshness was claimed for this iteration's captures.
- Shell GitHub API blocker: `curl -I --max-time 10 https://api.github.com/rate_limit` failed with DNS resolution error.
- Local `gh auth status` reports the default token for `Shiyao-Huang` is invalid.
- GitNexus is installed and `npx gitnexus status/list` worked; stale index state was observed during this run.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source remains `.mermaid/current/graph.json`; `.mmd` and `.md` are rendered views.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
