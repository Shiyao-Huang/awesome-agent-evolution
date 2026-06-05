# XSkill Model Card

| Field | Value |
|---|---|
| Repository | [XSkill-Agent/XSkill](https://github.com/XSkill-Agent/XSkill) |
| Category | Continual Experience and Skill Learning Paper Code |
| Stars / forks snapshot | 216 / 27 |
| Commits / issues / PRs snapshot | 16 / 1 / 0 |
| Language | Python |
| License | MIT |
| Latest visible dated signal | 2026-05-01 |
| Raw capture | raw-github/xskill-agent_xskill.md |
| Updated by | hourly public metadata update, 2026-06-05 15:43 +0800 |

## 1. Role in Self Evolve

XSkill is a multimodal continual-learning paper implementation that extracts task-level skills and action-level experiences from agent trajectories, stores them in a memory bank, and re-injects them during inference across benchmark suites. It matters because self-evolving agents need explicit runtime, memory, skill, and benchmark substrates before their improvement claims become trustworthy.

## 2. Working Principle

collect multimodal trajectories -> summarize and critique experiences -> consolidate reusable skill documents and experience entries -> retrieve relevant memory for new tasks -> evaluate transfer on benchmark suites

## 3. Evidence Path

web-observed GitHub repo page showed 216 stars, 27 forks, 1 issue, 0 pull requests, 16 commits, MIT license, no releases, ICML 2026 acceptance news dated 2026-05-01, and a runtime-generated memory_bank plus benchmark/eval folders covering VisualToolBench, TIR-Bench, MMSearch-Plus, AgentVista, and MMBrowseComp. This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on 2026-05-01, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Continual Experience and Skill Learning Paper Code: it shows how swarm runtimes, skill optimizers, benchmark suites, browser harnesses, and memory middleware fit into the broader self-evolving-agent pipeline.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
