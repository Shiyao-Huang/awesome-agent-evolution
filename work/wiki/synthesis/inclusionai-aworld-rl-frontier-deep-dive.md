---
title: inclusionAI AWorld-RL Frontier Deep Dive
type: synthesis
rank: A
tags: [github, aworld-rl, agentic-rl, environment-tuning, tool-use, value-lsh]
sources:
  - raw-github/inclusionai_agenticlearning.md
  - analysis/frontier-projects/inclusionai-agenticlearning-dual-chain.md
  - https://github.com/inclusionAI/AWorld-RL
updated: 2026-06-02
---

# inclusionAI AWorld-RL Frontier Deep Dive

## 1 Sentence

[KNOWN] `inclusionai/agenticlearning` is now canonical `inclusionAI/AWorld-RL`: a high-current agentic-RL training/evaluation bundle with strong environment-feedback and tool-use evidence, but only partial self-evolution fit because it does not show a deployed agent persistently modifying and auditing its own runtime state.

## 3 Sentences

[KNOWN] Live metadata on 2026-06-02 shows `inclusionAI/AWorld-RL` was created on `2025-07-01`, pushed on `2026-04-16`, updated on `2026-05-19`, with 106 stars, 10 forks, MIT license, Python primary language, and no releases/tags. Source: `analysis/frontier-projects/inclusionai-agenticlearning-dual-chain.md`.

[KNOWN] GitHub API tree/content evidence shows multiple subprojects: EnvTuning for multi-turn tool-use RL, RAG-R1 for search/reasoning RL, StressWeb for web-agent stress evaluation, V2P for GUI grounding, and FunReason/FunReason-MT for function-calling data synthesis.

[INFERRED] It should move out of generic `deep-read-needed` and into `frontier-agentic-rl-training-bundle / environment-feedback-tool-use-evaluation`, while keeping local-run and full self-evolution claims unverified.

## Evidence

| Claim | Trust | Source |
|---|---|---|
| Raw metadata is stale: frontmatter says `2024-Q4`, while live repo identity/activity is 2025-2026. | [KNOWN] | `raw-github/inclusionai_agenticlearning.md`; GitHub API |
| EnvTuning is original research code and redirects new users to the actively maintained `IcyFish332/T3RL`. | [KNOWN] | `EnvTuning/README.md` via GitHub API |
| EnvTuning has turn/reward implementation evidence: `TurnManager`, `ScoreCalculator`, and `bfcl_reward.compute_score()`. | [KNOWN] | GitHub API content excerpts |
| RAG-R1 exposes multi-query search/reasoning RL with retrieval server, PPO scripts, and VERL training code. | [KNOWN] | `RAG-R1/README.md`, `RAG-R1/train_ppo_mq.sh`, API tree |
| StressWeb has evaluator and environment-management code for stressed web-agent interaction. | [KNOWN] | `StressWeb/README.md`, `StressWeb/environment_manager.py`, API tree |
| V2P has GUI grounding training/eval code. | [KNOWN] | `V2P/README.md`, `V2P/train.py`, API tree |
| Local clone was attempted twice and failed due GitHub network/RPC failures. | [KNOWN] | `analysis/frontier-projects/inclusionai-agenticlearning-dual-chain.md` |

## Value Decision

| Facet | Decision |
|---|---|
| Time weight | High: live metadata and issues/commits show 2026 activity; raw timestamp should be repaired. |
| Continuity | Medium-high: multiple subprojects and papers across 2025-2026, but EnvTuning active path moves to T3RL. |
| Self-evolution fit | Partial: environment feedback and RL loops exist; persistent online self-modification/retention/audit is not proven. |
| Implementation evidence | Medium: real Python code verified through API tree/content; local clone/run not verified. |
| Issue/resource signal | High: issues cover data, reward, turn definitions, benchmark leakage, testing scripts, dependency errors, and memory fixes. |
| LSH role | `agentic-rl-training-bundle`, `environment-feedback-tool-use`, `search-rl`, `web-agent-evaluation`, `gui-grounding`. |

## Mirror Note

The important comparison is not "is AWorld-RL a self-evolving agent?" but "which parts of the self-evolution pipeline does it strengthen?" It strengthens feedback, reward/evaluation, data synthesis, environment tuning, search interaction, and GUI/web evaluation. It does not yet prove runtime self-retention or audit, so it should guide future systems rather than be counted as a complete self-evolving loop.

## Follow-Up

- Add or ingest `IcyFish332/T3RL` as the active EnvTuning reproduction target.
- Retry clone when network is stable or use an archive download path.
- Split module-level candidates for `EnvTuning`, `RAG-R1`, `StressWeb`, and `V2P` if the value matrix gains module granularity.
- Keep `inclusionai/agenticlearning` metadata repair linked to canonical `inclusionAI/AWorld-RL`.
