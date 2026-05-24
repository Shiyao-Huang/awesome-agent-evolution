# AgentOS Model Card

| Field | Value |
|---|---|
| Repository | [iii-experimental/agentos](https://github.com/iii-experimental/agentos) |
| Category | Self-Evolving Agent Operating System |
| Stars / forks snapshot | 145 / 20 |
| Language | Rust/TypeScript/Python |
| License | Apache-2.0 |
| Raw capture | raw-github/iii-experimental_agentos.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

AgentOS 是 iii engine 上的 self-evolving agent OS，把 worker、function、trigger 三个原语放到统一 bus 上，并把 function generate/register/eval/feedback/promote 作为自进化路径。

## 2. Working Principle

narrow workers -> function registration -> trigger bus -> traces/state/retries -> dynamic function evolution loop

## 3. Evidence Path

web GitHub page observed redirect to iii-experimental/agentos, 223 commits, Apache-2.0 license, Rust/TypeScript/Python stack, self-evolving topic, 145 stars and 20 forks. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Self-Evolving Agent Operating System in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
