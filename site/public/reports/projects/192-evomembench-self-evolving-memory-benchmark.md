# EvoMemBench Model Card

| Field | Value |
|---|---|
| Repository | [DSAIL-Memory/EvoMemBench](https://github.com/DSAIL-Memory/EvoMemBench) |
| Category | Self-Evolving Agent Memory Benchmark |
| Stars / forks snapshot | 0 / 0 |
| Language | Markdown |
| License | Apache-2.0 |
| Raw capture | raw-github/dsail-memory_evomembench.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

EvoMemBench 是 2026-05 arXiv 论文配套的 agent memory benchmark，按 in-episode/cross-episode 与 knowledge/execution 两条轴评估记忆机制是否支持自演化 agent。

## 2. Working Principle

agent tasks -> memory mechanism variants -> in/cross-episode benchmark axes -> self-evolving memory evidence

## 3. Evidence Path

web GitHub page observed public repository with 2 commits, Apache-2.0 license, 0 stars and 0 forks, README says Coming soon; arXiv 2605.18421 states the code is available at this repository and frames EvoMemBench as agent memory benchmarking from a self-evolving perspective. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Self-Evolving Agent Memory Benchmark in the raw -> classification -> project card -> site/report pipeline. The key question is whether memory/context evidence improves downstream agent behavior, or only improves retrieval on a local benchmark.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
