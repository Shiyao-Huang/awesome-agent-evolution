# Hermes Agent Self-Evolution Model Card

| Field | Value |
|---|---|
| Repository | [NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution) |
| Category | On-Policy RL Self-Evolution Pipeline for Agent Models |
| Stars / forks snapshot | 3700 / 422 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/nousresearch_hermes-agent-self-evolution.md |
| Updated by | hourly public metadata update, 2026-05-31 01:21 +0800 |

## 1. Role in Self Evolve

NousResearch/hermes-agent-self-evolution packages a self-evolving RL training workflow that distills improved interaction behavior into Hermes model variants. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

collect trajectories from environment interaction -> run self-play and reward-driven filtering -> distill improved policy behavior into Hermes checkpoints -> iterate closed-loop updates to increase task-level coding and reasoning performance

## 3. Evidence Path

web-observed GitHub page showed 3.7k stars, 422 forks, 7 commits, MIT-licensed model card references, and explicit self-evolution benchmark claims. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain On-Policy RL Self-Evolution Pipeline for Agent Models: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
