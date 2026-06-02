---
title: krzysztofdudek ResearcherSkill Frontier Deep Dive
type: synthesis
rank: A
tags: [github, researcher-skill, agent-skill, experimentation, value-lsh, self-evolution]
sources:
  - raw-github/krzysztofdudek_researcherskill.md
  - analysis/frontier-projects/krzysztofdudek-researcherskill-dual-chain.md
  - projects/repos/krzysztofdudek__researcherskill
updated: 2026-06-02
---

# krzysztofdudek ResearcherSkill Frontier Deep Dive

## 1 Sentence

[KNOWN] `krzysztofdudek/ResearcherSkill` is a 2026 skill-mediated experimentation harness that gives an AI coding agent `.lab/` memory, measured hypotheses, keep/discard rules, branch genealogy, and re-validation discipline; it is high-value for self-improvement protocols, but not a standalone self-evolving runtime.

## 3 Sentences

[KNOWN] Live metadata on 2026-06-02 showed creation on `2026-03-22`, push on `2026-05-31`, update on `2026-06-02`, 230 stars, 26 forks, 0 open issues, MIT license, 12 tags, latest release `v1.7.0`, and a shallow local mirror at `projects/repos/krzysztofdudek__researcherskill` with HEAD `3a70df8`.

[KNOWN] The canonical `skills/researcher/SKILL.md` implements an autonomous experiment workflow: discover objective and metric, create a research branch and `.lab/`, record baseline, repeat THINK -> TEST -> REFLECT, keep improving commits, reset failed experiments after logging, and preserve all experiment knowledge in `.lab/`.

[INFERRED] The correct value label is `frontier-skill-mediated-experiment-harness / controlled-self-improvement-protocol`: excellent for LSH facets around feedback, retention, comparison, and self-observation, but capped by dependence on external metrics, host-agent compliance, and potentially destructive git reset behavior.

## Evidence

| Claim | Trust | Source |
|---|---|---|
| Raw capture exists with `content_timestamp: 2026-05-03` and raw stars/forks `223/25`. | [KNOWN] | `raw-github/krzysztofdudek_researcherskill.md` |
| Repair queue ranked it first with `value_score: 75.8` and `repair_score: 134.8`. | [KNOWN] | `analysis/value-evidence-repair-queue.json` |
| Star-growth coverage is not fetched yet, so current growth is not coverage-qualified. | [KNOWN] | `analysis/github-star-growth-ranking.json` |
| Latest live metadata reports 230 stars, 26 forks, 0 open issues, discussions enabled, and MIT license. | [KNOWN] | GitHub API, 2026-06-02 |
| The local mirror contains README, GUIDE, CHANGELOG, plugin manifests, archived labs, and `skills/researcher/SKILL.md`. | [KNOWN] | `projects/repos/krzysztofdudek__researcherskill` |
| Lab 1 records skill self-improvement from `6.25` to `9.23`. | [KNOWN] | `archive/lab1-skill-discipline-validation/results.tsv` |
| Lab 2 reports 22/33 checkpoints passed and flags guardrail, THINK, and commit-before-run failures. | [KNOWN] | `archive/lab2-skill-discipline-validation/report.md` |

## Value Decision

| Facet | Decision |
|---|---|
| Time weight | High: created and active in 2026, latest push on 2026-05-31. |
| Continuity | Medium-high: versioned releases through `v1.7.0`, but issue community is small. |
| Self-evolution fit | Medium-high: supports measured improvement and retained experiment memory; not an independent recursive runtime. |
| Implementation evidence | Medium: local skill/protocol artifact exists; independent end-to-end reproduction remains undone. |
| Benchmark confidence | Medium: archived labs are concrete, but synthetic and partly failed. |
| Safety boundary | Medium risk: reset-on-discard is central to the workflow and must be sandboxed in protected repos. |
| LSH role | Anchor for `skill-mediated-experimentation`, `.lab-memory`, `metric-driven-selection`, `branching-search`, and `discard-history-retention`. |

## Mirror Note

The important lesson is that a self-improving agent needs more than "try things": it needs an experiment memory, a measurable objective, a baseline, a keep/discard policy, a way to remember failed ideas, and a reason to fork when it is stuck. ResearcherSkill packages exactly that protocol in a one-file skill, but it also shows why our value graph should separate protocol quality from runtime maturity.

## Follow-Up

- Remove it from generic `deep-read-needed` after rebuilding value LSH.
- Keep star-history fetching in the backlog; current growth is still `not_fetched`.
- Compare with GEPA, Meta-Harness Evolver, Continual Harness, autoresearch, and agent-skill libraries.
- Treat reset discipline as an adoption risk in this repository because our own project rules prohibit broad destructive git operations.
