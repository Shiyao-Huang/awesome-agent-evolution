# EVOTEST Model Card

| Field | Value |
|---|---|
| Repository | [yf-he/EvoTest](https://github.com/yf-he/EvoTest) |
| Category | Evolutionary Test-Time Learning |
| Stars / forks snapshot | 19 / 1 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/yf-he_evotest.md |
| Updated by | hourly public metadata update, 2026-05-25 09:19 +0800 |

## 1. Role in Self Evolve

EVOTEST 是面向 self-improving agentic systems 的 test-time evolution 框架，用 Jericho repeated episodes 检验无梯度、无微调条件下的 prompt、memory、state extractor 与工具策略演化。

## 2. Working Principle

episode rollout -> failure/success memory -> evolver rewrites prompt/state extractor/hyperparameters -> next episode evaluation

## 3. Evidence Path

web GitHub page observed 2 commits, MIT license, Python stack, 19 stars and 1 fork; README says EVOTEST evolves prompts, code-based state extractors, cross-episode memory, and hyperparameters between repeated Jericho game episodes and reports improvements over reflection, memory, and gradient online methods. Shell GitHub API access remained DNS-blocked in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Evolutionary Test-Time Learning in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
