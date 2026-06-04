# Browser Harness Model Card

| Field | Value |
|---|---|
| Repository | [browser-use/browser-harness](https://github.com/browser-use/browser-harness) |
| Category | Self-Healing Browser Agent Harness |
| Stars / forks snapshot | 14300 / 1300 |
| Commits / issues / PRs snapshot | 391 / 13 / 99 |
| Language | Python |
| License | MIT |
| Latest visible commit date | 2026-05-20 |
| Raw capture | raw-github/browser-use_browser-harness.md |
| Updated by | hourly public metadata update, 2026-06-05 11:00 +0800 |

## 1. Role in Self Evolve

Browser Harness connects LLM agents to a real browser through a thin editable CDP harness and explicitly encourages runtime self-healing by letting the agent write missing helper code during execution. It matters because self-evolving agents need explicit runtime, memory, skill, and benchmark substrates before their improvement claims become trustworthy.

## 2. Working Principle

attach one websocket to Chrome -> let the agent call or write browser helpers -> execute repeatable browser tasks -> keep the harness editable so the next run can reuse stronger helpers

## 3. Evidence Path

web-observed GitHub repo page and commit history showed about 14.3k stars, 1.3k forks, 13 issues, 99 pull requests, 391 commits, MIT license, thin editable CDP harness positioning, self-healing helper generation claims, and latest visible commits on 2026-05-20. This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on 2026-06-05, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain Self-Healing Browser Agent Harness: it shows how swarm runtimes, skill optimizers, benchmark suites, browser harnesses, and memory middleware fit into the broader self-evolving-agent pipeline.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
