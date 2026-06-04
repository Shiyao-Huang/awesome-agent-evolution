# ClawBench Model Card

| Field | Value |
|---|---|
| Repository | [openclaw/clawbench](https://github.com/openclaw/clawbench) |
| Category | Trace-Scored Full-Stack Agent Benchmark |
| Stars / forks snapshot | 106 / 19 |
| Commits / issues / PRs snapshot | 121 / 0 / 2 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/openclaw_clawbench.md |
| Updated by | hourly public metadata update, 2026-06-04 16:00 +0800 |

## 1. Role in Self Evolve

ClawBench is a benchmark for agent systems that scores the full stack through execution traces, reliability metrics, and diagnostics rather than only final-task success. It matters because self-evolving agents need explicit memory, harness, benchmark, and safety substrates before their improvement claims become trustworthy.

## 2. Working Principle

run container-isolated tasks -> capture full execution traces -> score deterministic completion, trajectory quality, and behavior -> quantify noise and failure regimes -> compare harness/model/config combinations

## 3. Evidence Path

web-observed GitHub page showed 106 stars, 19 forks, 121 commits, MIT license, 0 issues, 2 pull requests, and a trace-scored benchmark that measures harness, config, and model instead of only final LLM output. This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on 2026-06-04, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Trace-Scored Full-Stack Agent Benchmark: it shows how survey indexes, embeddable memory SDKs, harness taxonomies, controlled self-modification, or trace-scored benchmarks connect to the broader self-evolving-agent pipeline.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
