# ClawBench Model Card

| Field | Value |
|---|---|
| Repository | [TIGER-AI-Lab/ClawBench](https://github.com/TIGER-AI-Lab/ClawBench) |
| Category | Open-Ended Agent Benchmark Harness |
| Stars / forks snapshot | 530 / 30 (GitHub API, 2026-07-28) |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/tiger-ai-lab_clawbench.md |
| Updated by | community metadata correction, 2026-07-28 |

## 1. Role in Self Evolve

ClawBench is an open-source benchmark for browser and computer-use agents operating on everyday tasks on live websites. It matters to self-evolution research because improvement claims need repeatable harness control, measurable feedback loops, and replayable evidence rather than a final success score alone. ClawBench is harness-agnostic and should not be described as an OpenClaw-only benchmark.

## 2. Working Principle

task instruction -> isolated live-site run -> final side-effect request interception -> deterministic interception check plus rubric-based judgment -> replayable evidence (screenshots, actions, HTTP traffic, messages, and recording)

## 3. Evidence Path

The canonical repository and paper report V1 (153 tasks across 144 live websites) and V2 (130 tasks), with public project, paper, datasets, and trace links. The repository supports multiple agent harnesses, including OpenClaw, Claude Code, Codex, Browser-Use, Hermes, and Pi. The GitHub API snapshot above is timestamped; task counts and protocol claims are sourced from the repository and paper.

## 4. Teaching Use

Use this card to explain how a live-web benchmark supplies external evaluation pressure for evolving harnesses: model and harness changes can be compared against the same task corpus while retaining execution traces for failure analysis.

## 5. Limits

This report does not claim that ClawBench itself performs self-evolution; it is an evaluation substrate. No benchmark run was executed as part of this metadata correction. For primary sources, see the [paper](https://arxiv.org/abs/2604.08523), [project page](https://claw-bench.com), [task dataset](https://huggingface.co/datasets/NAIL-Group/ClawBench), and [trace datasets](https://huggingface.co/datasets/NAIL-Group/ClawBenchV1Trace).
