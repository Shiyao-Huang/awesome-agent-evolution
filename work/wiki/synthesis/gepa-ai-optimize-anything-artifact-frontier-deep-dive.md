---
title: gepa-ai optimize-anything Artifact Frontier Deep Dive
type: synthesis
rank: A
tags: [github, gepa, reproducibility, artifact, benchmark, value-evidence-repair]
sources: [analysis/frontier-projects/gepa-ai-optimize-anything-artifact-dual-chain.md, raw-github/gepa-ai_optimize-anything-artifact.md]
updated: 2026-06-02
---

# gepa-ai optimize-anything Artifact Frontier Deep Dive

> Repair queue 第四项样本：`gepa-ai/optimize-anything-artifact` 不是高社区热度项目，而是 `gepa-ai/gepa` 的 paired reproducibility anchor；价值来自 offline verifier、domain logs、checkpoints、re-execution boundary 和 paper-claim evidence chain。

## One Sentence

[CLAIM] `gepa-ai/optimize-anything-artifact` 是高价值复现证据锚：1 star/0 forks/0 issues 不能代表它没价值，因为它主要服务于 ACM CAIS 2026 artifact review，并用 no-API verifier 与 saved logs 支撑 GEPA claims。 — Source: `analysis/frontier-projects/gepa-ai-optimize-anything-artifact-dual-chain.md`

## Three Sentences

[CLAIM] Live GitHub metadata 显示它创建于 `2026-05-19T04:58:54Z`，最后 push 为 `2026-05-22T04:18:55Z`，latest release `v1.4` 发布于 `2026-05-19T05:25:35Z`，MIT license，1 star，0 forks，issues/PRs 为空。 — Source: `analysis/frontier-projects/gepa-ai-optimize-anything-artifact-dual-chain.md`

[CLAIM] GitHub tree API 显示 `acm_cais_artifact_evaluation/` 下有 1,460 个文件、17 个 README、8 个 `main.py` entrypoints、多组 logs 和 `gepa_state.bin` checkpoints。 — Source: `analysis/frontier-projects/gepa-ai-optimize-anything-artifact-dual-chain.md`

[CLAIM] `verify_offline_artifacts.py` 的 saved `verification_v1.4.log` 报告 9/9 PASS，覆盖 AIME、ARC-AGI、Circle Packing、CloudCast、Can't Be Late、gskill、Blackbox 和 KernelBench saved results；完整 live rerun 仍依赖 API、Docker、GPU 和成本。 — Source: `analysis/frontier-projects/gepa-ai-optimize-anything-artifact-dual-chain.md`

## Decision

| Dimension | Decision |
|---|---|
| Time weight | Very high |
| Continuity | Medium |
| Self-evolution fit | Medium direct / high as GEPA evidence support |
| Implementation evidence | High |
| Verifier signal | Very high |
| Issue/resource signal | Low issues / high resources |
| Transfer value | High |
| Adoption signal | Low |
| Reproduction confidence | Medium-high offline |

## Trust Chain

- [KNOWN] Raw source is `raw-github/gepa-ai_optimize-anything-artifact.md`.
- [KNOWN] Deep-read packet is `analysis/frontier-projects/gepa-ai-optimize-anything-artifact-dual-chain.md`.
- [KNOWN] GitHub metadata, releases, issues/PRs, tree API, artifact README, offline guide, re-execution requirements, verifier source, and saved verifier output were inspected on 2026-06-02.
- [INFERRED] The project should leave generic repair queue and become `paired-reproducibility-anchor / local-mirror-needed`.
- [UNVERIFIED] Local clone and local verifier execution were not completed because full and shallow clones failed over GitHub network transport.
