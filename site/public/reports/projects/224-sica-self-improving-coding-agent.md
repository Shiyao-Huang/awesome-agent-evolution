# SICA Self-Improving Coding Agent Model Card

| Field | Value |
|---|---|
| Repository | [MaximeRobeyns/self_improving_coding_agent](https://github.com/MaximeRobeyns/self_improving_coding_agent) |
| Category | Self-Improving Coding Agent |
| Stars / forks snapshot | 324 / 56 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/maximerobeyns_self_improving_coding_agent.md |
| Updated by | hourly public metadata update, 2026-05-26 04:41 +0800 |

## 1. Role in Self Evolve

SICA is a core self-evolution artifact because the target of improvement is the coding agent's own codebase, not only a task answer produced by a fixed agent.

## 2. Working Principle

coding task -> agent modifies candidate code -> tests / review signal -> accepted patch -> agent codebase becomes the next starting point

## 3. Evidence Path

Web-observed GitHub evidence showed 324 stars, 56 forks, MIT license, Python-dominant implementation, and a citation to "SICA: A Self-Improving Coding Agent" from the ICLR 2025 Workshop on Scaling Self-Improving Foundation Models. Shell GitHub API freshness was not available in this run, so the metadata is web-observed rather than API-verified.

## 4. Teaching Use

Use this card when explaining the difference between ordinary coding agents and self-referential coding agents: SICA changes the system that will perform future coding work.

## 5. Limits

The repository was not cloned and no SWE-Bench or local tests were run in this iteration. The model card only promotes public metadata and the improvement-loop role into the site.
