# Browser Harness Model Card

| Field | Value |
|---|---|
| Repository | [browser-use/browser-harness](https://github.com/browser-use/browser-harness) |
| Category | Self-Healing Browser Agent Harness |
| Stars / forks snapshot | 13900 / 1300 |
| Language | Python |
| License | MIT |
| Raw capture | raw-github/browser-use_browser-harness.md |
| Updated by | hourly public metadata update, 2026-06-04 01:56 +0800 |

## 1. Role in Self Evolve

browser-use/browser-harness connects LLM agents to real browsers through a thin editable CDP harness and encourages run-time self-healing helper generation. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

connect llm directly to live browser cdp -> patch missing helpers in agent-workspace during runs -> domain skill playbooks by site -> iteratively improve execution reliability

## 3. Evidence Path

The current run rechecked a cached GitHub search result observed on 2026-06-04, with crawl recency surfaced as `last week`. That cached public result showed 13.9k stars, 1.3k forks, 391 commits, 13 issues, 91 pull requests, MIT licensing, and README claims for direct browser websocket control, self-authored helper code, and domain-skill workflows. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as cached public-page evidence rather than live API verification.

## 4. Teaching Use

Use this card to explain Self-Healing Browser Agent Harness: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
