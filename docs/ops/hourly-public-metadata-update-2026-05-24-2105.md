# Hourly Public Metadata Update 2026-05-24T21:05:00+08:00

## Direct user intent

This run follows the public data-flow rule: keep raw material raw, process classification separately, publish model-card/project reports to the site, and keep the data flow indexed.

## One sentence

Added five new raw GitHub captures and promoted seven project/model-card entries into the public Self Evolve site pipeline.

## Three sentences

The new raw captures cover ScienceClaw, memsearch, swarmclaw, MOLT, and OpenClaw Evolution Framework. Existing raw captures for CORAL and VoltAgent awesome-agent-skills were promoted into public project reports because they are high-signal multi-agent evolution and skill-index references. GitHub API freshness is blocked by shell DNS and invalid `gh` auth, so all current metadata is marked web-observed rather than API-verified.

## Data-flow evidence

| Layer | Paths |
|---|---|
| raw | `raw-github/beita6969_scienceclaw.md`, `raw-github/zilliztech_memsearch.md`, `raw-github/swarmclawai_swarmclaw.md`, `raw-github/oiioai_molt.md`, `raw-github/terryfyl_openclaw-evolution-framework.md` |
| processed | `research/repo-classification.json`, `research/repo-classification.csv`, `research/repo-classification.md` |
| work | `work/research/hourly-public-metadata-update-2026-05-24-2105.md`, `.mermaid/current/graph.json` |
| results | `projects/89-95*.md`, `site/public/reports/projects/89-95*.md`, `site/src/data/projects.ts` |

## Blockers

- `curl https://api.github.com/rate_limit` failed with `Could not resolve host: api.github.com`.
- `gh auth status` reports the active GitHub token is invalid.
- GitNexus is available and should be run after the file updates; previous FTS degradation should be checked in the validation step.
