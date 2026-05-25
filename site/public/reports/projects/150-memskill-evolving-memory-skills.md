# MemSkill Model Card

| Field | Value |
|---|---|
| Repository | [ViktorAxelsen/MemSkill](https://github.com/ViktorAxelsen/MemSkill) |
| Category | Evolving Memory Skills |
| Stars / forks snapshot | 484 / 31 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/viktoraxelsen_memskill.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

MemSkill 是学习并进化 long-horizon agent 记忆技能的框架，把记忆操作从静态手写规则变成由任务反馈驱动的 meta-memory skill bank。

## 2. Working Principle

long-horizon interaction data -> skill-conditioned memory construction -> hard-case mining -> memory skill refinement/new skill proposals -> reusable skill bank

## 3. Evidence Path

web GitHub page observed 33 commits, Apache-2.0 license, 484 stars and 31 forks; README says MemSkill learns and evolves memory skills for long-horizon agents, replaces static memory operations with a data-driven loop, mines hard cases to refine or propose skills, and evaluates ALFWorld/LoCoMo/LongMemEval style workloads. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Evolving Memory Skills in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
