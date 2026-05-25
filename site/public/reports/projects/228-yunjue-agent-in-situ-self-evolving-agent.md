# Yunjue Agent Model Card

| Field | Value |
|---|---|
| Repository | [YunjueTech/Yunjue-Agent](https://github.com/YunjueTech/Yunjue-Agent) |
| Category | In-Situ Self-Evolving Agent System |
| Stars / forks snapshot | 426 / 49 |
| Language | Python |
| License | Apache-2.0 |
| Raw capture | raw-github/yunjuetech_yunjue-agent.md |
| Updated by | hourly public metadata update, 2026-05-26 05:44 +0800 |

## 1. Role in Self Evolve

Yunjue Agent is a high-signal research system because it makes tool synthesis, execution feedback, trace release, and benchmark reproduction part of the self-evolution loop.

## 2. Working Principle

open-ended task stream -> tool generation and verification -> reusable tool/capability accumulation -> benchmark reproduction and trace audit -> next task starts with expanded capabilities

## 3. Evidence Path

Web-observed GitHub evidence showed 426 stars, 49 forks, 34 commits, Apache-2.0 license, Python-dominant code, public reproduction branch, and public benchmark trace links. The README names HLE, DeepSearchQA, FinSearchComp, xbench-ScienceQA, and xbench-DeepSearch as evaluation surfaces.

## 4. Teaching Use

Use this card when explaining in-situ self-evolution: the agent does not only tune prompts, it turns execution experience into tools that become future reusable capability.

## 5. Limits

The repository was not cloned and no benchmark was rerun in this iteration. Shell GitHub API DNS failed, so metadata is web-observed rather than API-verified.
