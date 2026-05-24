# EvoMap Evolver Model Card

## One Sentence

EvoMap Evolver is a GEP-based self-evolution engine for AI agents, centered on auditable Genes, Capsules, and Events.

## Three Sentences

It matters because it tries to make agent capability evolution inspectable rather than hidden in prompt edits. Its README surface includes CLI usage, multilingual docs, a `SKILL.md` integration path, and links to GEP documentation. In the project graph it belongs near skill systems, harness evolution, and memory/runtime projects.

## Model Card

| Field | Value |
|---|---|
| Repository | `EvoMap/evolver` |
| Source | `raw-github/evomap_evolver.md` |
| Category | Auditable agent evolution engine |
| Pattern | Genome Evolution Protocol -> Genes/Capsules/Events -> logged evolution |
| Evidence | GitHub raw capture, 2026-05 |

## Teaching Use

Use EvoMap to teach "evolution as a traceable protocol." A reader can ask: what is the gene, what is the capsule, what event records the change, and how is the evolved behavior verified? This makes the project useful for bridging abstract self-evolution theory and operational logs.

## Evidence And Limits

The raw capture reports about 7.5k stars, 760 forks, JavaScript/Node.js, GPL-3.0, documentation, and an npm package. The next step is deeper code analysis of `src`, `examples`, and `SKILL.md` to verify whether the GEP abstraction is enforced by code or mainly by documentation.
