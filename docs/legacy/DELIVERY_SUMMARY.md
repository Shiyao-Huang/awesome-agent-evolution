# Delivery Summary

> Updated: 2026-05-24

## 一句话

项目已从“长清单 + 散落文档”整理为 `raw -> processed -> work -> results` 的可索引研究工程结构。

## 本轮交付

| Area | Delivered |
|---|---|
| README | 根 [README.md](README.md) 改为项目总控入口，明确目录边界、关键数据、验证命令 |
| Index | 新增 [CONTENT_INDEX.md](CONTENT_INDEX.md) 和 `docs/indexes/*` 全量索引 |
| Structure | 新增 [docs/project-management/project-structure.md](docs/project-management/project-structure.md) |
| Operating model | 新增 [docs/project-management/operating-model.md](docs/project-management/operating-model.md) |
| Noncanonical cleanup | 新增 [docs/project-management/noncanonical-cleanup-policy.md](docs/project-management/noncanonical-cleanup-policy.md) 和 `docs/indexes/noncanonical-index.md` |
| Local privacy | 用户输入记忆仅本地保留；公开版本只保存抽象治理原则，不发布用户原文或抽取文件 |
| Agent docs | 新增 [AGENTS.md](AGENTS.md)、[CLAUDE.md](CLAUDE.md)、[CLOUD.md](CLOUD.md) |
| Generator | 新增 [scripts/generate_project_indexes.mjs](scripts/generate_project_indexes.mjs)，可重复生成索引 |
| Legacy | 旧长 README、旧内容索引、旧交付摘要保留在 [docs/legacy/](docs/legacy/) |

## Current Verified Metrics

| Metric | Value |
|---|---:|
| GitHub raw captures | 348 |
| Classified GitHub repositories | 348 |
| Analyzed project/model-card reports | 52 |
| Strict evolution-related repositories | 58 |
| Broad evolution-related repositories | 151 |
| Raw paper markdown files | 184 |
| Paper PDF pages | 213 |
| Astro pages built | 133 |

## Validation

| Command | Result |
|---|---|
| `node scripts/generate_project_indexes.mjs` | pass |
| `python3 scripts/enforce_raw_timestamps.py` | pass, missing_count 0 |
| `node scripts/analyze_github_project_data.mjs` | pass |
| `cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex` | pass, 213 pages |
| `cd site && npm run build` | pass, 133 pages, 18 Astro `z` deprecation hints |

## Compatibility Note

根目录中仍保留 `raw-social/mom-test/mom-test-findings*.md`、`raw-github/INDEX.md`、`social-media-raw-data*.md` 等兼容文件，因为脚本、论文和调查章节仍引用它们。后续做物理迁移前，需要先改引用、跑验证，再记录迁移。
