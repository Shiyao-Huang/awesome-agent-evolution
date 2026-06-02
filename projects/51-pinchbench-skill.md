# PinchBench Skill Model Card

| Field | Value |
|---|---|
| Repository | [pinchbench/skill](https://github.com/pinchbench/skill) |
| Category | Real-World Agent Task Benchmark |
| Stars / forks snapshot | 1200 / 136 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/pinchbench_skill.md |
| Updated by | hourly public metadata update, 2026-06-02 19:52 +0800 |

## 1. Role in Self Evolve

PinchBench is the real-task evaluator for OpenClaw-style agents: it does not evolve the agent itself, but it gives a runtime, skill pack, or harness mutation loop a realistic external judge instead of relying on self-scored demos.

## 2. Working Principle

task suite -> OpenClaw agent execution -> automatic and/or LLM judging -> transcript retention -> optional leaderboard upload

## 3. Evidence Path

The public GitHub page on 2026-06-02 showed about 1.2k stars, 136 forks, 17 open issues, 383 commits, MIT license, 14 releases with latest `v2.0.0`, and a README covering 53 tasks across coding, memory, email, research, analysis, and skill discovery. Shell GitHub API access remained blocked by DNS failure and `gh` could not connect, so this card treats freshness as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain why self-improving agents need an external task harness. PinchBench shows how evaluation becomes believable only when tasks are messy, scores are reproducible, and transcripts are retained for later inspection.

## 5. Limits

This iteration did not run OpenClaw, execute benchmark tasks, or verify leaderboard uploads. The role judgment is based on the public repository surface and README methodology, not a reproduced benchmark run.
