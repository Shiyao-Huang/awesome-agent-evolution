# Autonomous Java Bug Repair Agent Model Card

| Field | Value |
|---|---|
| Repository | [sola-st/repairagent](https://github.com/sola-st/RepairAgent) |
| Category | Autonomous Java Bug Repair Agent |
| Stars / forks snapshot | 99 / 32 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/sola-st_repairagent.md |
| Updated by | hourly public metadata update, 2026-06-03 13:55 +0800 |

## 1. Role in Self Evolve

RepairAgent is an autonomous agent that fixes bugs in Java projects using LLMs through a localize-analyze-fix-test iteration loop. It matters because self-evolving agents need explicit feedback loops, observable retention mechanisms, and auditable evaluation pressure before improvement claims become useful.

## 2. Working Principle

read failing test -> localize bug -> analyze code -> generate patch -> run tests -> iterate until a correct fix survives validation

## 3. Evidence Path

web-observed GitHub page showed 99 stars, 32 forks, 82 commits, MIT license badge, an autonomous bug-repair loop over Defects4J, and a reported 164 correct fixes benchmark result. This iteration keeps freshness honest: the snapshot comes from the current public GitHub page, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Autonomous Java Bug Repair Agent: it shows how coding-agent, self-rewarding, optimization, or graph-runtime layers convert agent behavior into a reproducible engineering story.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or training experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
