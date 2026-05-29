# Agent Memory Model Card

| Field | Value |
|---|---|
| Repository | [axiomhq/agent-memory](https://github.com/axiomhq/agent-memory) |
| Category | Persistent Agent Memory Runtime |
| Stars / forks snapshot | 5 / 2 |
| Language | TypeScript |
| License | Unspecified |
| Raw capture | raw-github/axiomhq_agent-memory.md |
| Updated by | hourly public metadata update, 2026-05-29 10:08 +0800 |

## 1. Role in Self Evolve

agent-memory is an opinionated TypeScript memory runtime focused on extracting, storing, and retrieving long-lived context for AI agents. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

capture user/agent interaction state -> extract and store memory artifacts in redis-backed structures -> retrieve context through memory APIs -> feed subsequent agent decisions and orchestration flows

## 3. Evidence Path

web-observed GitHub page showed 5 stars, 2 forks, 50 commits, and README documenting extraction/storage/retrieval architecture; no explicit license badge was visible on the page snapshot. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Persistent Agent Memory Runtime: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
