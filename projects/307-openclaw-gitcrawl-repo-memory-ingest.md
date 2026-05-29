# Gitcrawl Model Card

| Field | Value |
|---|---|
| Repository | [openclaw/gitcrawl](https://github.com/openclaw/gitcrawl) |
| Category | Local-First GitHub Crawl and Archive Harness |
| Stars / forks snapshot | 76 / 15 |
| Language | Go |
| License | MIT |
| Raw capture | raw-github/openclaw_gitcrawl.md |
| Updated by | hourly public metadata update, 2026-05-29 22:15 +0800 |

## 1. Role in Self Evolve

gitcrawl is a local-first issue and pull-request crawler for creating reusable repository archives used by maintainer and agent workflows. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

crawl GitHub issues and pull requests locally -> normalize and archive repository discourse -> expose structured artifacts for triage and analysis -> feed downstream maintainer and agent memory workflows

## 3. Evidence Path

web-observed GitHub page showed 76 stars, 15 forks, 435 commits, MIT license, and about text emphasizing local-first issue/PR crawling. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain Local-First GitHub Crawl and Archive Harness: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
