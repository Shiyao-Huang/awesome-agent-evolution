---
title: tylerdotai Meta-Harness Evolver Frontier Deep Dive
type: synthesis
rank: A
tags: [github, meta-harness, openclaw, harness-evolution, self-mirror, value-lsh]
sources:
  - raw-github/tylerdotai_meta-harness-evolver.md
  - analysis/frontier-projects/tylerdotai-meta-harness-evolver-dual-chain.md
  - projects/repos/tylerdotai__meta-harness-evolver
updated: 2026-06-02
---

# tylerdotai Meta-Harness Evolver Frontier Deep Dive

## 1 Sentence

[KNOWN] `tylerdotai/meta-harness-evolver` is a highly aligned OpenClaw/Hoss harness-evolution prototype that treats self-mirror files as the mutable object, but it must be capped as unverified because public continuity is thin and its evaluator is currently heuristic rather than a real Hoss benchmark runner.

## 3 Sentences

[KNOWN] Live metadata on 2026-06-02 showed creation and push on `2026-03-31`, update on `2026-04-06`, 14 stars, 2 forks, 0 issues, 0 pull requests, MIT license, Python primary language, no releases/tags/topics/templates, and local mirror `projects/repos/tylerdotai__meta-harness-evolver` at `12f3b1d`.

[KNOWN] The implementation has a clear loop: an OpenClaw subagent proposer reads `~/hoss-evolution`, writes one targeted harness edit, validates required files, runs `evaluate.py`, updates the best harness by score, logs JSONL, and can post a Discord research summary.

[INFERRED] The right value label is `frontier-harness-evolution-prototype / verifier-repair-needed`: strong time and mechanism fit, high teaching value for our Self Mirror dual-chain, but low continuity and low benchmark confidence.

## Evidence

| Claim | Trust | Source |
|---|---|---|
| Raw capture exists but lacks usable timestamp/time slice. | [KNOWN] | `raw-github/tylerdotai_meta-harness-evolver.md` |
| Repair queue ranks it first with `value_score: 80.89` and `repair_score: 134.89`. | [KNOWN] | `analysis/value-evidence-repair-queue.json` |
| Root files are README, SKILL, references, and four scripts. | [KNOWN] | `projects/repos/tylerdotai__meta-harness-evolver` |
| Harness target files are `SOUL.md`, `IDENTITY.md`, `AGENTS.md`, `TOOLS.md`, `MEMORY.md`, and `HEARTBEAT.md`. | [KNOWN] | `SKILL.md`; `references/harness-spec.md` |
| `run_evolution.py` spawns an OpenClaw subagent proposer and persists candidates/best/logs under `~/hoss-evolution`. | [KNOWN] | `projects/repos/tylerdotai__meta-harness-evolver/scripts/run_evolution.py` |
| `evaluate.py` has 20 scenarios, but weights add to `1.28` and scoring is static/heuristic. | [KNOWN] | Static extraction from `scripts/evaluate.py` |
| Pareto frontier is described in references but not implemented in code. | [KNOWN] | `references/evolution-logic.md`; `scripts/run_evolution.py` |

## Value Decision

| Facet | Decision |
|---|---|
| Time weight | High: 2026-created and directly about current harness evolution. |
| Continuity | Low: two commits, no releases, no issues/PRs, no topic/community signal. |
| Self-evolution fit | High conceptually: the mutable object is the full agent harness, not only a prompt. |
| Implementation evidence | Medium: local clone and scripts exist; AST/shell syntax checks passed. |
| Benchmark confidence | Low: current scorer does not run real scenarios and weights are not normalized. |
| Issue/resource signal | Low: reference docs are useful, but public issue/PR resources are empty. |
| LSH role | Anchor for `harness-as-self-mirror`, `config-evolution`, `proposer-from-full-history`, and `verifier-gap`. |

## Mirror Note

The most useful lesson is the change object: self-evolution can operate over an agent's operating manual, identity, memory structure, tool map, coordination protocol, and heartbeat checks. That is exactly the mirror-chain layer our corpus needs, but this repo also shows why mirror artifacts need real verifiers, normalized metrics, side-effect isolation, and release/community continuity before they can guide public ranking.

## Follow-Up

- Treat it as a teaching specimen in comparisons with Continual Harness, GEPA, AgentEvolver, SE-Agent, and Open SWE.
- Repair verifier gaps before raising confidence: real scenario runner, normalized weights, implemented Pareto frontier, complete harness validation, and dry-run controls.
- Keep cumulative stars as weak discovery prior only; the value here comes from mechanism fit, not adoption.
