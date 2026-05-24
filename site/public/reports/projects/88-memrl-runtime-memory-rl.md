# MemRL Model Card

| Field | Value |
|---|---|
| Repository | [MemTensor/MemRL](https://github.com/MemTensor/MemRL) |
| Category | Runtime Reinforcement Memory |
| Stars / forks snapshot | 117 / 10 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/memtensor_memrl.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

MemRL 是自进化 agent 的论文代码，用 episodic memory 上的 runtime reinforcement learning 代替参数微调，通过环境反馈筛选高效策略并在多个 benchmark 上验证持续改进。

## 2. Working Principle

episodic memory -> two-phase retrieval -> environmental feedback -> runtime reinforcement update -> benchmark transfer

## 3. Evidence Path

existing raw capture promoted; web GitHub page observed 76 commits, MIT license, Python primary language, HLE/BigCodeBench/ALFWorld/Lifelong Agent Bench runners, 117 stars and 10 forks. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Runtime Reinforcement Memory in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows 或 memory experiments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
