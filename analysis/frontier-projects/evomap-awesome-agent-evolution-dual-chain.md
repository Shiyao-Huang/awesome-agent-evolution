# evomap/awesome-agent-evolution Dual-Chain Deep Dive

> Date: 2026-06-13. Layer: `processed/analysis`. Source queue: `analysis/value-evidence-repair-queue.json`. Evidence quality: authenticated GitHub API metadata + raw capture; local script execution not performed.

## One Sentence

`EvoMap/awesome-agent-evolution` is not a runnable self-evolving system but a valuable external taxonomy mirror: it packages the same field into a curated awesome-list structure that we can learn from, compare against, and deliberately diverge from where our evidence standards are higher.

## Three Sentences

[KNOWN] The authenticated GitHub API snapshot on 2026-06-13 shows `EvoMap/awesome-agent-evolution` at 137 stars, 20 forks, 60 commits, 6 open issues, and 1 open pull request. Source: `raw-github/evomap_awesome-agent-evolution.md`.

[KNOWN] The raw capture and topic list still show the same packaging logic: self-evolution, memory, protocols, coding, benchmarks, swarm adjacency, and community knowledge as reader-facing navigation categories. Source: `raw-github/evomap_awesome-agent-evolution.md`.

[INFERRED] Its correct frontier role remains `resource-index / taxonomy comparator`: it matters less as a direct implementation target and more as a signal for how the wider ecosystem currently packages and markets the self-evolving agent space.

## Evidence Chain

| Link | Status | Evidence |
|---|---|---|
| Raw capture | [KNOWN] | `raw-github/evomap_awesome-agent-evolution.md` refreshed on 2026-06-13 with authenticated GitHub API counts, topic signals, and taxonomy surface. |
| Queue row | [KNOWN] | `analysis/value-evidence-repair-queue.json` keeps the repo as a high-value comparator, but the freshness blocker is cleared for this row. |
| Project card | [KNOWN] | `projects/394-evomap-awesome-agent-evolution.md` and `site/public/reports/projects/394-evomap-awesome-agent-evolution.md`. |
| Site data | [KNOWN] | `site/src/data/projects.ts` keeps the repo in the public project registry. |
| API access | [KNOWN] | `gh api graphql` succeeded in this workspace on 2026-06-13; the old API-blocked interpretation is no longer correct for this row. |

## Mirror Chain

```json
{
  "node": "project.evomap.awesome-agent-evolution",
  "feature": "value-evidence-repair.deep-read",
  "intent": "Use an external awesome list as a mirror for our own curation logic rather than treating it as a runtime implementation.",
  "rank_decision": "promote-to-taxonomy-comparator",
  "rank_confidence": "medium",
  "main_tension": "Broad, readable field packaging vs shallow evidence density compared with our model-card-first pipeline.",
  "why_now": "The user explicitly wants README, website, graph, benchmark, memory, and Agent-Swarm surfaces to move together; this repo is a live external comparator for that packaging problem.",
  "next_action": "Keep as an external awesome-list anchor and compare its taxonomy with our README/site topic map, especially around memory, benchmark, and swarm boundaries."
}
```

## Working Principle

```mermaid
flowchart TD
  Taxonomy["field taxonomy"] --> CuratedList["awesome-list sections"]
  CuratedList --> Projects["projects and tools"]
  CuratedList --> Papers["papers and methods"]
  CuratedList --> Benchmarks["benchmarks and evaluation"]
  CuratedList --> Community["community and related awesome lists"]
  Community --> Swarm["separate awesome-agent-swarm pointer"]
```

## Trust Chain

- [KNOWN] Authenticated GitHub API metadata and README taxonomy were re-read on 2026-06-13.
- [KNOWN] Freshness is API-backed in this pass; the earlier API-blocked note is now historical context only.
- [INFERRED] The taxonomy-comparator decision comes from the repo structure, category layout, and relationship to our own public packaging goals.
- [UNVERIFIED] No local execution of EvoMap `data/` or `scripts/` was performed in this pass.
