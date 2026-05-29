# Agent Lightning Model Card

| Field | Value |
|---|---|
| Repository | [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) |
| Category | Reinforcement-Learning Agent Training Framework |
| Stars / forks snapshot | 17300 / 1500 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/microsoft_agent-lightning.md |
| Updated by | hourly public metadata update, 2026-05-30 01:15 +0800 |

## 1. Role in Self Evolve

Agent Lightning is Microsoft's framework for turning arbitrary agent execution traces into RL-friendly transitions and optimizing agent behavior with LightningRL. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

decouple agent execution from RL training through unified trajectories -> build a training-agent disaggregation architecture -> optimize downstream agent policies with LightningRL credit assignment -> feed validated gains back into agent runtime loops

## 3. Evidence Path

web-observed GitHub page showed ~17.3k stars, ~1.5k forks, 255 commits, MIT license, and README claims that Agent Lightning can train any AI agents with almost zero code modifications. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Reinforcement-Learning Agent Training Framework: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
