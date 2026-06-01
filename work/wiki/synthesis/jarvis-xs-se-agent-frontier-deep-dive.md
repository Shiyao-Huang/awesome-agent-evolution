---
title: JARVIS-Xs SE-Agent Frontier Deep Dive
type: synthesis
rank: A
tags: [se-agent, frontier-project, dual-chain, trajectory-evolution, code-agent, reproduction-risk]
sources:
  - analysis/frontier-projects/jarvis-xs-se-agent-dual-chain.md
  - analysis/frontier-value-queue.json
  - raw-github/jarvis-xs_se-agent.md
  - projects/jarvis_xs__se_agent.md
  - repos/jarvis_xs__se_agent
  - https://github.com/JARVIS-Xs/SE-Agent/issues
updated: 2026-06-01
---

# JARVIS-Xs SE-Agent Frontier Deep Dive

> Second project-level sample for the dual-chain frontier research workflow.

## One Sentence

[KNOWN] `JARVIS-Xs/SE-Agent` is a strong trajectory-evolution code-agent archetype, but its current rank should be below fresher systems because release/reproduction continuity is weak. Source: `analysis/frontier-projects/jarvis-xs-se-agent-dual-chain.md`

## Three Sentences

[KNOWN] The local code scan shows an explicit trajectory loop: SWE-agent runs create `.tra` trajectories, `traj.pool` retains summaries, and operators such as `alternative_strategy`, `crossover`, and `traj_pool_summary` generate later-iteration guidance. Source: `analysis/frontier-projects/jarvis-xs-se-agent-dual-chain.md`

[KNOWN] Current GitHub metadata shows no latest release, no open PRs, and open issues questioning 80% reproduction and partial release status. Source: `analysis/frontier-projects/jarvis-xs-se-agent-dual-chain.md`

[INFERRED] The right rank decision is `promote-as-trajectory-evolution-baseline`: keep it high as a mechanism sample, but do not use it as the strongest current frontier anchor. Source: `analysis/frontier-projects/jarvis-xs-se-agent-dual-chain.md`

## Gate Summary

| Gate | Decision | Notes |
|---|---|---|
| Observe | Pass | Prior SWE-agent trajectories are stored and summarized. |
| Interpret | Pass | Operators and evaluators summarize, filter, and select trajectory evidence. |
| Modify | Pass | Later iteration prompt/config guidance is generated from prior runs. |
| Verify | Partial pass | SWE-bench path exists, but reproduction is questioned. |
| Retain | Pass | `traj.pool` and compressed `.tra` files preserve run memory. |
| Rollback/audit | Partial pass | Resume/clean restart and logs exist, but release audit is incomplete. |

## Cross-references

- [[frontier-value-queue]]
- [[modelscope-agentevolver-frontier-deep-dive]]
- [[value-screening-dual-chain-knowledge-base]]
- [[self-evolution-definition-criteria]]
- [[code-evolution-benchmark-matrix]]
