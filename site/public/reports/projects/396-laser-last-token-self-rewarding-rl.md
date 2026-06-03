# Last-Token Self-Rewarding Reinforcement Learning Recipe Model Card

| Field | Value |
|---|---|
| Repository | [rucbm/laser](https://github.com/RUCBM/LaSeR) |
| Category | Last-Token Self-Rewarding Reinforcement Learning Recipe |
| Stars / forks snapshot | 36 / 2 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/rucbm_laser.md |
| Updated by | hourly public metadata update, 2026-06-03 13:55 +0800 |

## 1. Role in Self Evolve

LaSeR is a reinforcement-learning recipe that jointly improves reasoning and self-rewarding behavior by adding an MSE self-reward term to the RLVR objective. It matters because self-evolving agents need explicit feedback loops, observable retention mechanisms, and auditable evaluation pressure before improvement claims become useful.

## 2. Working Principle

optimize RLVR objective -> learn last-token self-reward signal -> reuse auxiliary reward during training and testing -> improve reasoning and reward calibration together

## 3. Evidence Path

web-observed GitHub page showed 36 stars, 2 forks, 6 commits, MIT license, a last-token self-rewarding RLVR objective, released checkpoints, and auxiliary self-reward usage at both training and testing time. This iteration keeps freshness honest: the snapshot comes from the current public GitHub page, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Last-Token Self-Rewarding Reinforcement Learning Recipe: it shows how coding-agent, self-rewarding, optimization, or graph-runtime layers convert agent behavior into a reproducible engineering story.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or training experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
