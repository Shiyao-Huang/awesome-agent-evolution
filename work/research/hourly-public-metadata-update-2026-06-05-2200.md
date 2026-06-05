# Hourly Public Metadata Update — 2026-06-05 22:00 +0800

## One Sentence

This iteration added a production coding-agent swarm harness and a healthcare memory benchmark to the public GitHub evidence chain, then propagated those additions into classification, model cards, README surfaces, Mermaid truth, and the public site registry.

## Three Sentences

1. The new repositories are `ComposioHQ/agent-orchestrator` and `AQ-MedAI/MedMemoryBench`, chosen because they fill the user-priority gaps around swarm/harness control planes and domain-sensitive memory benchmarks.
2. GitHub shell access stayed partially blocked in this workspace: `gh search repos ...` returned `error connecting to api.github.com`, so freshness for new captures remains public-page-observed rather than API-verified.
3. GitNexus stayed usable for code-intelligence queries, but its index was stale at the start of the run and needed a local `npx gitnexus analyze` refresh before final validation.

## Five Sentences

1. `ComposioHQ/agent-orchestrator` extends the swarm/harness line from general orchestration into coding-agent worktrees, review gates, and MCP-connected engineering execution.
2. `AQ-MedAI/MedMemoryBench` extends the memory line from generic context retention into personalized-healthcare longitudinal memory evaluation, which is a better test of whether memory helps in safety-sensitive settings.
3. Both repos were added as raw captures first, then converted into processed classification rows and teaching-style model cards, then synced into `site/src/data/projects.ts` and `site/public/reports/projects/`.
4. README and README-EN now surface these repos near the front as evidence updates, while README-ZH was brought back into alignment on topic-indexing status so the bilingual public surface stays on the same evidence chain.
5. Mermaid remains truth-source-first: `.mermaid/current/graph.json` is the source of record, while `graph.md` and `graph.mmd` are rendered views for the next run and for human inspection.

## Evidence Chain

public GitHub page evidence -> `raw-github/composiohq_agent-orchestrator.md` + `raw-github/aq-medai_medmemorybench.md` -> `research/repo-classification.json` -> `projects/406-*.md` + `projects/407-*.md` -> `site/public/reports/projects/406-*.md` + `site/public/reports/projects/407-*.md` -> `site/src/data/projects.ts` -> README/i18n + `.mermaid/current/graph.json` -> indexes + `analysis/github-project-data-analysis.*` + site build

## GitNexus Notes

- `npx gitnexus status` at start: index was stale (`Indexed commit: 65c2f4f`, `Current commit: e2bf455`).
- `npx gitnexus query --repo awesome-evolution "raw-github repo-classification projects.ts github-project-data-analysis hourly metadata mermaid graph"` linked this flow to the hourly scripts and render helpers.
- Symbol/path-style impact evidence remains limited for this loop because the query is strong for discovery, but prior notes already documented blocked path-form impact on generator scripts; no shared function body was manually edited in this run.

## Blockers And Boundaries

- `gh search repos 'agent evolution OR self evolving agent OR agent swarm skill memory benchmark harness' --limit 20 --json ...` failed with `error connecting to api.github.com`.
- Because of that failure, new metadata was captured from public GitHub pages and visible dated signals instead of authenticated API snapshots.
- Public-copy review gate is still a known gap: this iteration updated reader-facing README and site registry surfaces, but did not complete the required `3-5` reader/editor agent reviews plus `3` academic agent reviews.
