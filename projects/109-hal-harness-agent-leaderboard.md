# HAL Harness Model Card

| Field | Value |
|---|---|
| Repository | [princeton-pli/hal-harness](https://github.com/princeton-pli/hal-harness) |
| Category | Holistic Agent Evaluation Harness |
| Stars / forks snapshot | 289 / 55 |
| Language | Python |
| License | Unknown |
| Raw capture | raw-github/princeton-pli_hal-harness.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

HAL Harness 是 Princeton PLI 的 holistic agent evaluation harness，用统一 CLI 在 SWE-bench、USACO、AppWorld、CORE-bench、tau-bench 等任务上比较 agent，同时记录成本、trace 和 leaderboard 提交流程。

## 2. Working Principle

agent implementation -> hal-eval benchmark adapter -> parallel local/cloud runner -> traces/cost logs -> encrypted leaderboard upload

## 3. Evidence Path

web GitHub page observed 701 commits, Python primary language, no license field visible in captured page, unified hal-eval CLI, Weave cost logging, Docker/Azure runners, HAL leaderboard integration, 289 stars and 55 forks. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Holistic Agent Evaluation Harness in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
