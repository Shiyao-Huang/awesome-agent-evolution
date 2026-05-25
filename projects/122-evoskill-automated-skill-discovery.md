# EvoSkill Model Card

| Field | Value |
|---|---|
| Repository | [sentient-agi/EvoSkill](https://github.com/sentient-agi/EvoSkill) |
| Category | Automated Agent Skill Discovery |
| Stars / forks snapshot | 798 / 85 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/sentient-agi_evoskill.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

EvoSkill 把失败轨迹转成可复用 agent skills 和 prompt mutations，用 benchmark 驱动 held-out evaluation，使 coding agent 从单 prompt 修订走向完整 agent program evolution。

## 2. Working Principle

failed trajectories -> skill/prompt mutation proposals -> held-out evaluation -> new agent program -> reusable skill transfer

## 3. Evidence Path

web GitHub page observed 315 commits, Apache-2.0 license, 798 stars and 85 forks; README says EvoSkill automatically creates and improves AI skills, is compatible with Claude Code, Codex CLI, OpenCode, OpenHands, Goose, Harbor, and extends GEPA from single-file optimization to complete agent evolution. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Automated Agent Skill Discovery in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
