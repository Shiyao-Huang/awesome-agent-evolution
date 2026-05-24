# SkillLearnBench Model Card

| Field | Value |
|---|---|
| Repository | [cxcscmu/SkillLearnBench](https://github.com/cxcscmu/SkillLearnBench) |
| Category | Agent Skill Continual-Learning Benchmark |
| Stars / forks snapshot | 21 / 2 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/cxcscmu_skilllearnbench.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

SkillLearnBench 是面向自动生成 agent skills 的 continual learning benchmark，覆盖真实任务、技能质量、轨迹质量和 task success。

## 2. Working Principle

skill generation method -> skill-dependent task suite -> containerized agent trials -> task/skill/trajectory metrics -> continual learning comparison

## 3. Evidence Path

web GitHub page observed 5 commits, MIT license, Python stack, 21 stars and 2 forks; README states 20 skill-dependent tasks, 15 sub-domains, 100 verified instances, Docker requirement, task success/skill quality/trajectory quality metrics, and arXiv 2604.20087. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Agent Skill Continual-Learning Benchmark in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
