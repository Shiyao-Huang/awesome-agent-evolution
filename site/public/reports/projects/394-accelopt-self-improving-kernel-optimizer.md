# Self-Improving Accelerator Kernel Optimization Agent Model Card

| Field | Value |
|---|---|
| Repository | [zhang677/accelopt](https://github.com/zhang677/AccelOpt) |
| Category | Self-Improving Accelerator Kernel Optimization Agent |
| Stars / forks snapshot | 51 / 7 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/zhang677_accelopt.md |
| Updated by | hourly public metadata update, 2026-06-03 13:55 +0800 |

## 1. Role in Self Evolve

AccelOpt is a self-improving LLM agentic system that iteratively optimizes AI accelerator kernels using optimization memory and benchmarked kernel profiling. It matters because self-evolving agents need explicit feedback loops, observable retention mechanisms, and auditable evaluation pressure before improvement claims become useful.

## 2. Working Principle

generate candidate kernel -> consult optimization memory -> profile on NKIBench or FlashInfer-Bench -> compare slow-fast kernel pairs -> keep stronger optimization traces

## 3. Evidence Path

web-observed GitHub page showed 51 stars, 7 forks, 67 commits, Apache-2.0 license, NKIBench and FlashInfer-Bench evaluation paths, and an optimization memory over slow-fast kernel pairs. This iteration keeps freshness honest: the snapshot comes from the current public GitHub page, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Self-Improving Accelerator Kernel Optimization Agent: it shows how coding-agent, self-rewarding, optimization, or graph-runtime layers convert agent behavior into a reproducible engineering story.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or training experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
