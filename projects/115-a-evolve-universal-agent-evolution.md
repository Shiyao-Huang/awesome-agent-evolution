# A-Evolve Model Card

| Field | Value |
|---|---|
| Repository | [a-evo-lab/a-evolve](https://github.com/a-evo-lab/a-evolve) |
| Category | Universal Self-Improving Agent Infrastructure |
| Stars / forks snapshot | 552 / 67 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/a-evo-lab_a-evolve.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

A-Evolve 是通用 self-improving agent 基础设施：给定 base agent、benchmark 和 evolution algorithm，就把 prompt、skills、memory 等 agent workspace 文件作为可变状态进行迭代。

## 2. Working Principle

base agent -> benchmark adapter -> evolution loop -> workspace mutation over prompts/skills/memory -> benchmarked improved agent

## 3. Evidence Path

web GitHub page observed 64 commits, MIT license, Python stack, 552 stars and 67 forks; README says PyTorch for Agentic AI, evolves any agent with any evolution algorithm, and reports MCP-Atlas, SWE-bench Verified, Terminal-Bench, SkillsBench, ARC-AGI, and OSWorld benchmark deltas. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Universal Self-Improving Agent Infrastructure in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
