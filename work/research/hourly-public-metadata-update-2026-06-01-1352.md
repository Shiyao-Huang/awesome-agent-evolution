# Hourly Public Metadata Update - 2026-06-01 13:52 +0800

## One Sentence

Added 7 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `SamurAIGPT/awesome-openclaw`, `LHL3341/awesome-claws`, `pegasi-ai/reins`, `cloudllm-ai/mentisdb`, `rohitg00/awesome-openclaw`, `yoloshii/ClawMem`, `clawsouls/soulclaw` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `SamurAIGPT/awesome-openclaw` | OpenClaw Ecosystem Curation and Skill Resource Index | `raw-github/samuraigpt_awesome-openclaw.md` | `site/public/reports/projects/363-awesome-openclaw-ecosystem-index-samuraigpt.md` |
| `LHL3341/awesome-claws` | OpenClaw Ecosystem Collection and Skill/Tool Index | `raw-github/lhl3341_awesome-claws.md` | `site/public/reports/projects/364-awesome-claws-collection-lhl3341.md` |
| `pegasi-ai/reins` | Self-Improving Agent Policy Framework and Training Harness | `raw-github/pegasi-ai_reins.md` | `site/public/reports/projects/365-reins-self-improving-model-framework.md` |
| `cloudllm-ai/mentisdb` | Durable Agent Memory Graph Database and Skill Registry Runtime | `raw-github/cloudllm-ai_mentisdb.md` | `site/public/reports/projects/366-mentisdb-agent-memory-graph-database.md` |
| `rohitg00/awesome-openclaw` | OpenClaw Plugin and Agent Skills Resource Index | `raw-github/rohitg00_awesome-openclaw.md` | `site/public/reports/projects/367-awesome-openclaw-plugin-index-rohitg00.md` |
| `yoloshii/ClawMem` | On-Device Memory Layer and Retrieval Runtime for Agents | `raw-github/yoloshii_clawmem.md` | `site/public/reports/projects/368-clawmem-on-device-memory-layer.md` |
| `clawsouls/soulclaw` | OpenClaw Fork with Multi-Tier Memory and Persona Runtime | `raw-github/clawsouls_soulclaw.md` | `site/public/reports/projects/369-soulclaw-openclaw-fork-with-soul-memory.md` |

## Working Principle

Browser-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> README/i18n -> `site/src/data/projects.ts` -> `site/public/reports/projects/` -> Astro site build.

## Evidence Quality

- Public GitHub pages were observed through browser-accessible GitHub text; no authenticated GitHub API freshness was claimed for this iteration's captures.
- Shell GitHub API blocker: `curl -I --max-time 10 https://api.github.com/rate_limit` failed with DNS resolution error.
- Local `gh auth status` reports the default token for `Shiyao-Huang` is invalid.
- GitNexus is installed and `npx gitnexus status/list` worked; stale index state was observed during this run.
- `npx gitnexus analyze .` failed with `EPERM: operation not permitted, open '/Users/copizzah/.gitnexus/registry.json'`.
- Fallback `HOME=/private/tmp/gitnexus-home npx gitnexus analyze --skip-git --index-only --name awesome-evolution-hourly-20260601-1352 .` aborted with `libc++abi: terminating due to uncaught exception of type Napi::Error` (and npm warned project config locks prefix).
- `npx gitnexus query --repo awesome-evolution-workspace-cleanup "openclaw memory harness" --limit 5` and `npx gitnexus detect-changes --scope all --repo awesome-evolution-workspace-cleanup` succeeded (21 files, 42 symbols, risk level low).
- `git push` failed with `Could not resolve host: github.com`; this iteration commit remains local-only until network recovery.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source remains `.mermaid/current/graph.json`; `.mmd` and `.md` are rendered views.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`
