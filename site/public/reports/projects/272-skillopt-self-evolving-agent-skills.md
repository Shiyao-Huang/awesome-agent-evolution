# SkillOpt Model Card

| Field | Value |
|---|---|
| Repository | [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) |
| Category | Self-Evolving Agent Skill Optimizer |
| Stars / forks snapshot | 4000 / 416 |
| Commits / issues / PRs snapshot | 92 / 5 / 2 |
| Language | Python |
| License | MIT |
| Latest visible commit date | 2026-05-31 |
| Raw capture | raw-github/microsoft_skillopt.md |
| Updated by | hourly public metadata update, 2026-06-05 11:00 +0800 |

## 1. Role in Self Evolve

SkillOpt is a text-space optimizer that trains reusable natural-language skills for frozen LLM agents through trajectory-driven edits, validation-gated updates, and deployable best_skill.md artifacts. It matters because self-evolving agents need explicit runtime, memory, skill, and benchmark substrates before their improvement claims become trustworthy.

## 2. Working Principle

collect trajectories -> propose skill edits -> validate on held-out tasks -> keep stronger best_skill artifacts -> repeat like epochs and mini-batches without touching base model weights

## 3. Evidence Path

web-observed GitHub repo page and commit history showed about 4k stars, 416 forks, 5 issues, 2 pull requests, 92 commits, MIT license, explicit epoch/batch/validation-gate framing for text-space skill optimization, and latest visible commits on 2026-05-31. This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on 2026-06-05, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Self-Evolving Agent Skill Optimizer: it shows how swarm runtimes, skill optimizers, benchmark suites, browser harnesses, and memory middleware fit into the broader self-evolving-agent pipeline.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
