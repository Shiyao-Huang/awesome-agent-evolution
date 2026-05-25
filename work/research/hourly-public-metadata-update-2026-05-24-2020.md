# Hourly Public Metadata Update - 2026-05-24 20:20

## One Sentence

This run adds skill portability, skill-security, self-improving agent, and memory benchmark evidence to the public metadata pipeline.

## Three Sentences

User direct inputs require raw captures, processed classification, model-card teaching material, and public website impact to stay connected. GitHub API freshness is still blocked by local DNS and invalid `gh` auth, so the new data is explicitly marked as web-observed rather than API-verified. The run adds six new raw captures, promotes the existing MemRL raw capture, adds seven classification rows, seven public model cards, site project entries, and an updated Mermaid object graph.

## Added / Promoted Repositories

- [SJTU-IPADS/SkVM](https://github.com/SJTU-IPADS/SkVM) - Skill Virtual Machine; web GitHub page observed 86 commits, MIT license, TypeScript primary language, SkVM profiling/AOT/JIT/benchmark flow, OpenClaw/Hermes/pi skill install paths, 480 stars and 41 forks.
- [adolfousier/opencrabs](https://github.com/adolfousier/opencrabs) - Self-Improving Terminal Agent; web GitHub page observed MIT license, Rust primary language, 121 releases with v0.3.27 latest on 2026-05-23, local brain/memory/command self-improvement mechanics, 755 stars and 72 forks.
- [aisa-group/skill-inject](https://github.com/aisa-group/skill-inject) - Agent Skill Security Benchmark; web GitHub page observed 8 commits, Python primary language, skill-file injection benchmark, Docker agent containers, Claude/Codex/Gemini agents, 73 stars and 2 forks.
- [huggingface/skills](https://github.com/huggingface/skills) - Agent Skills Registry; web GitHub page observed 285 commits, Apache-2.0 license, Python primary language, Codex/Claude/Gemini/Cursor compatibility, Agent Skills standard, 10.6k stars and 681 forks.
- [aiming-lab/SimpleMem](https://github.com/aiming-lab/SimpleMem) - Self-Evolving Agent Memory Stack; web GitHub page observed MIT license, Python primary language, SimpleMem/Omni-SimpleMem/EvolveMem stack, v0.3.0 release on 2026-05-21, 3.4k stars and 347 forks.
- [mem0ai/memory-benchmarks](https://github.com/mem0ai/memory-benchmarks) - Memory Benchmark Suite; web GitHub page observed 15 commits, Apache-2.0 license, Python/TypeScript stack, LOCOMO/LongMemEval/BEAM benchmarks, Mem0 cloud and OSS paths, 33 stars and 9 forks.
- [MemTensor/MemRL](https://github.com/MemTensor/MemRL) - Runtime Reinforcement Memory; existing raw capture promoted; web GitHub page observed 76 commits, MIT license, Python primary language, HLE/BigCodeBench/ALFWorld/Lifelong Agent Bench runners, 117 stars and 10 forks.

## Data Flow

1. Raw evidence: `raw-github/*.md` with source URL, collected timestamp, and visible page metadata.
2. Processed classification: `research/repo-classification.*` plus generated GitHub analysis outputs.
3. Work notes: this file plus `.mermaid/current/graph.json` as the object-graph truth source.
4. Results: `projects/82-88*.md`, synced `site/public/reports/projects/82-88*.md`, and `site/src/data/projects.ts`.

## Blockers

- `curl https://api.github.com/rate_limit` failed with DNS resolution error.
- `gh auth status` reports the default GitHub token is invalid.
- Any GitHub freshness in this run is browser/web-observed, not API-verified.

## GitNexus Evidence

- Pre-edit `gitnexus doctor` succeeded with GitNexus 1.6.5 and graph/full-text/vector capabilities available.
- Post-edit analyze result is recorded in `.mermaid/current/graph.json` after validation.

## Validations

- `jq empty research/repo-classification.json .mermaid/current/graph.json` passed.
- `node --check site/src/data/projects.ts` passed.
- `node scripts/generate_project_indexes.mjs` passed after data and visual refresh.
- `python3 scripts/enforce_raw_timestamps.py` passed: raw-github md=389, md_ok=389, missing_count=0.
- `node scripts/analyze_github_project_data.mjs` passed: 389 raw captures, 389 classified repos, 97 analyzed projects, 65 strict evolution repos, 159 broad evolution-related repos.
- `node scripts/generate_visual_assets.mjs` regenerated the public SVG charts.
- `(cd site && npm run build)` passed with 178 pages; existing Astro `z` deprecation hints remain.
- `HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-agent-evolution-hourly .` passed: changed=13, added=15, 9,079 nodes, 9,334 edges, 30 clusters, 13 flows; FTS extension download still unavailable.
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)` passed; `main.pdf` remains 213 pages with existing font/overfull warnings.
