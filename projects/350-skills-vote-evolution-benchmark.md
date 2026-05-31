# Skills Vote Evolution Benchmark Model Card

| Field | Value |
|---|---|
| Repository | [MemTensor/skills-vote](https://github.com/MemTensor/skills-vote) |
| Category | Self-Evolving Skill Selection and Benchmark Pipeline |
| Stars / forks snapshot | 267 / 14 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/memtensor_skills-vote.md |
| Updated by | hourly public metadata update, 2026-05-31 19:50 +0800 |

## 1. Role in Self Evolve

MemTensor/skills-vote focuses on self-evolving skill selection and evaluation loops for agent improvement experiments. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

generate multiple candidate skill mutations -> score candidates with voting-style evaluators on benchmark tasks -> retain winning variants in the skill pool -> iterate selection to improve downstream agent performance across tasks

## 3. Evidence Path

web-observed GitHub page showed 267 stars, 14 forks, 35 commits, MIT license, and Python-first implementation for skills-vote evolution loops. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Self-Evolving Skill Selection and Benchmark Pipeline: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
