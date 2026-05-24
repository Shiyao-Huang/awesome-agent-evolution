# SkVM Model Card

| Field | Value |
|---|---|
| Repository | [SJTU-IPADS/SkVM](https://github.com/SJTU-IPADS/SkVM) |
| Category | Skill Virtual Machine |
| Stars / forks snapshot | 480 / 41 |
| Language | TypeScript |
| License | MIT |
| Raw capture | raw-github/sjtu-ipads_skvm.md |
| Updated by | hourly public metadata update, 2026-05-24 |

## 1. Role in Self Evolve

SkVM 是面向 agent skills 的语言虚拟机，把技能编译、优化并运行到不同模型和 harness 上，使 skill 在 OpenClaw、Hermes、pi Agent 等环境里可迁移和可评测。

## 2. Working Principle

skill profile -> AOT compilation -> JIT optimization -> benchmark across harness/model pairs

## 3. Evidence Path

web GitHub page observed 86 commits, MIT license, TypeScript primary language, SkVM profiling/AOT/JIT/benchmark flow, OpenClaw/Hermes/pi skill install paths, 480 stars and 41 forks. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Skill Virtual Machine in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows 或 memory experiments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
