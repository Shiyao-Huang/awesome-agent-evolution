# WildClawBench Model Card

| Field | Value |
|---|---|
| Repository | [InternLM/WildClawBench](https://github.com/InternLM/WildClawBench) |
| Category | Authentic Real-World Agent Benchmark |
| Stars / forks snapshot | 408 / 37 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/internlm_wildclawbench.md |
| Updated by | hourly public metadata update, 2026-05-26 15:57 +0800 |

## 1. Role in Self Evolve

WildClawBench is a real-world-style evaluation benchmark for LLM agents with multi-turn, dynamic and long-horizon tasks. It matters because self-evolving agent claims need independent and robust evaluation pressure rather than only synthetic prompt-level scores.

## 2. Working Principle

real-world task construction -> multi-turn interactive execution -> anti-overfitting benchmark design -> end-to-end grading -> capability profile output

## 3. Evidence Path

web-observed GitHub page showed 408 stars, 37 forks, 10 commits, MIT license, and README claims for authentic real-world agent evaluation with dynamic, multi-turn and anti-overfitting benchmark design. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain why benchmark design is central in self-evolution pipelines: if evaluation is weak, improvement loops optimize noise and produce misleading progress.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or reproduction was performed. Counts and claims are visible public-page/search signals unless independently revalidated later.
