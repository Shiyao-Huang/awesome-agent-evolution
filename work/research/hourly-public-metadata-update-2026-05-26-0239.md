# Hourly Public Metadata Update - 2026-05-26 02:39 +0800

## One Sentence

Added three web-observed memory and agent-benchmark repositories while preserving API freshness caveats.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop. This iteration adds NirDiamant/Agent_Memory_Techniques, shareAI-lab/kbench and paradigmxyz/evmbench to raw captures, classification, model-card reports, site data and graph views. GitHub API metadata is not fabricated: shell `curl https://api.github.com/rate_limit` failed DNS resolution and `gh auth status` reports an invalid token.

## Added Repositories

- NirDiamant/Agent_Memory_Techniques: Agent Memory Technique Cookbook; raw=raw-github/nirdiamant_agent_memory_techniques.md; report=projects/220-agent-memory-techniques.md.
- shareAI-lab/kbench: Agent Harness Benchmark CLI; raw=raw-github/shareai-lab_kbench.md; report=projects/221-kbench-agent-harness-benchmark-cli.md.
- paradigmxyz/evmbench: Smart Contract Agent Benchmark Harness; raw=raw-github/paradigmxyz_evmbench.md; report=projects/222-evmbench-smart-contract-agent-harness.md.

## Working Principle

Browser/search-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/` + `site/public/reports/projects/` -> `site/src/data/projects.ts` -> README/i18n/site build.

## Evidence Quality

- GitHub shell/API freshness blocker: DNS failure for `api.github.com` and invalid local `gh` token.
- GitNexus blocker/status: `npx gitnexus analyze` attempted an incremental refresh and failed at `/Users/copizzah/.gitnexus/registry.json` with EPERM; `npx gitnexus status` afterwards reported the committed head up-to-date.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source: `.mermaid/current/graph.json`.
