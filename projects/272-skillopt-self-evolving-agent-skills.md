# SkillOpt Model Card

| Field | Value |
|---|---|
| Repository | [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) |
| Category | Self-Evolving Agent Skill Optimizer |
| Stars / forks snapshot | 1100 / 100 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/microsoft_skillopt.md |
| Updated by | hourly public metadata update, 2026-05-28 04:00 +0800 |

## 1. Role in Self Evolve

SkillOpt trains reusable natural-language skills for frozen LLM agents through validation-gated iterative optimization loops. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

trajectory-driven skill edits -> validation-gated updates -> epoch/batch-style skill training loop -> deployable best_skill artifacts for frozen-agent workflows

## 3. Evidence Path

web-observed GitHub page showed 1.1k stars, 100 forks, 50 commits, MIT license, and README emphasis on trajectory-driven skill optimization without changing base model weights. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Self-Evolving Agent Skill Optimizer: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
