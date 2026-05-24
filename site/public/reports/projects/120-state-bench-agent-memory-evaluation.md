# STATE-Bench Model Card

| Field | Value |
|---|---|
| Repository | [microsoft/STATE-Bench](https://github.com/microsoft/STATE-Bench) |
| Category | Stateful Agent Memory Benchmark |
| Stars / forks snapshot | 25 / 3 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/microsoft_state-bench.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

STATE-Bench 是 Microsoft 发布的 stateful agent task evaluation benchmark，用三类企业任务评估 memory 是否改善 agent 的可靠性、效率和多步执行。

## 2. Working Principle

enterprise task suite -> sandbox database/tools/user simulator -> stateful agent execution -> deterministic assertions -> memory impact metrics

## 3. Evidence Path

web GitHub page observed 41 commits, MIT license, Python 100% stack, release v0.5.0 latest May 22 2026, 25 stars and 3 forks; README states 450 enterprise tasks across travel, customer support, and shopping assistant domains with sandbox database, tools, simulated user, and procedure/state assertions. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Stateful Agent Memory Benchmark in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
