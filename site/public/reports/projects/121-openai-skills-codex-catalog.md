# OpenAI Skills Model Card

| Field | Value |
|---|---|
| Repository | [openai/skills](https://github.com/openai/skills) |
| Category | Codex Agent Skills Catalog |
| Stars / forks snapshot | 20100 / 1.3k |
| Language | Python/JavaScript/Shell |
| License | Per-skill LICENSE.txt |
| Raw capture | raw-github/openai_skills.md |
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

OpenAI Skills 是 Codex 的官方 skills catalog，把可发现的说明、脚本和资源打包成可安装能力，成为 agent skill 生态的标准入口。

## 2. Working Principle

skill folder standard -> curated/experimental catalog -> skill-installer -> reusable Codex capabilities

## 3. Evidence Path

web GitHub page observed 110 commits, 20.1k stars and 1.3k forks, Python/JavaScript/Shell stack, no releases, README says Agent Skills are folders of instructions/scripts/resources that Codex can discover and install through skill-installer; license is per skill LICENSE.txt. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Codex Agent Skills Catalog in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、SDK examples、skill install flows、memory experiments、agent evolution loops 或 production deployments；star/fork/commit 快照来自公开 GitHub 页面文本或可见页面片段。
