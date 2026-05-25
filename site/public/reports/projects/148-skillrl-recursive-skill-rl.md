# SkillRL Model Card

| Field | Value |
|---|---|
| Repository | [aiming-lab/SkillRL](https://github.com/aiming-lab/SkillRL) |
| Category | Recursive Skill-Augmented RL |
| Stars / forks snapshot | 765 / 59 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/aiming-lab_skillrl.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

SkillRL 是通过自动技能发现连接经验轨迹和策略改进的论文代码，把成功/失败轨迹压缩成层级技能库，并在 RL 中让技能库与 agent policy 递归共进化。

## 2. Working Principle

experience trajectories -> skill distillation -> hierarchical SKILLBANK -> validation-failure analysis -> recursive skill/policy co-evolution

## 3. Evidence Path

web GitHub page observed 21 commits, MIT license, 765 stars and 59 forks; README says SkillRL bridges raw experience and policy improvement through automatic skill discovery, distills trajectories into a hierarchical SKILLBANK, recursively evolves skills from validation failures, reports 10-20% token compression, and released code/model/data artifacts during Feb-May 2026. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Recursive Skill-Augmented RL in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
