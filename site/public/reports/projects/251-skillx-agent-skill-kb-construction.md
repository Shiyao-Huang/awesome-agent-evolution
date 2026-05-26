# SkillX Model Card

| Field | Value |
|---|---|
| Repository | [zjunlp/SkillX](https://github.com/zjunlp/SkillX) |
| Category | Automated Agent Skill KB Construction |
| Stars / forks snapshot | 181 / 16 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/zjunlp_skillx.md |
| Updated by | hourly public metadata update, 2026-05-26 21:54 +0800 |

## 1. Role in Self Evolve

SkillX is a paper-backed framework that automatically constructs reusable multi-level skill knowledge bases for agents from execution experience. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

collect trajectories -> extract multi-level skills -> refine and filter skill library -> expand via exploration -> transfer to other agents

## 3. Evidence Path

web-observed GitHub page showed 181 stars, 16 forks, 17 commits, MIT license, and README details for three-level skill abstraction plus iterative refinement and expansion across AppWorld, BFCL-v3, and τ2-Bench. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Automated Agent Skill KB Construction: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
