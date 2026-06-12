# XSkill Model Card

| Field | Value |
|---|---|
| Repository | [XSkill-Agent/XSkill](https://github.com/XSkill-Agent/XSkill) |
| Category | Continual Experience and Skill Learning Paper Code |
| Stars / forks snapshot | 221 / 27 |
| Commits / issues / PRs snapshot | 16 / 1 / 0 |
| Language | Python |
| License | NOASSERTION |
| Latest visible dated signal | 2026-05-13 GitHub API snapshot |
| Raw capture | raw-github/xskill-agent_xskill.md |
| Updated by | hourly public metadata update, 2026-06-13 02:15 +0800 |

## 1. Role in Self Evolve

XSkill is a multimodal continual-learning paper implementation that extracts task-level skills and action-level experiences from agent trajectories, stores them in a memory bank, and re-injects them during inference across benchmark suites. It matters because self-evolving agents need explicit runtime, memory, skill, and benchmark substrates before their improvement claims become trustworthy.

## 2. Working Principle

collect multimodal trajectories -> summarize and critique experiences -> consolidate reusable skill documents and experience entries -> retrieve relevant memory for new tasks -> evaluate transfer on benchmark suites

## 3. Evidence Path

GitHub GraphQL/API snapshot captured via authenticated `gh` on 2026-06-13 showed 221 stars, 27 forks, 1 open issue, 0 open pull requests, 16 commits on `main`, latest push at 2026-05-13T03:56:12Z, no GitHub releases, and no SPDX license value returned by the API. The snapshot also showed no GitHub releases visible in the API snapshot. This run keeps freshness honest because it uses authenticated GitHub API data rather than stale local summaries.

## 4. Teaching Use

Use this card to explain Continual Experience and Skill Learning Paper Code: it shows how paper-code systems accumulate trajectories, distill reusable skills, and test transfer instead of only claiming continual learning in prose.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are GitHub API snapshot signals unless independently revalidated later.
