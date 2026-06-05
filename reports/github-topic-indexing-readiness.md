# GitHub Topic Indexing Readiness Audit

Generated: 2026-06-05T16:30:21.955Z

Repository: [Shiyao-Huang/awesome-agent-evolution](https://github.com/Shiyao-Huang/awesome-agent-evolution)

Topic page: [agent-evolution](https://github.com/topics/agent-evolution?o=desc&s=stars)

Global status: **PASS**

## One-Sentence Verdict

The repository metadata is ready for GitHub topic discovery; API/search membership is verified, while the rendered topic page may lag or paginate.

## 中文结论

当前仓库已经具备 GitHub topic 发现条件：远端 topics 包含 `agent-evolution`，GitHub search 能返回本仓库；如果网页 topic 页没有立刻显示，优先按 GitHub search/API 证据判断，并继续等待页面缓存、分页和排序刷新。

## Why The Topic Page Can Look Missing

- GitHub topic membership is controlled by repository topics, not by website SEO alone.
- The topic page at `s=stars&o=desc` is a rendered ranking surface; it can lag behind Search/API, paginate results, or show a cached subset.
- Repository description, README topic lines, homepage, recent pushes, and adjacent topics improve discoverability, but they do not guarantee immediate visual placement on the first rendered topic page.

## Blocking Failures

- None.

## Warnings

- None.

## Repository Metadata

| Field | Value |
|---|---|
| Description | Open survey and evidence map for AI agent evolution, self-evolving agents, memory, skills, harnesses, benchmarks, and agent-swarm systems. |
| Homepage | [https://agent-evolution.com/](https://agent-evolution.com/) |
| Stars | 136 |
| Pushed at | 2026-06-05T15:16:07Z |
| Updated at | 2026-06-05T15:16:11Z |
| Topics | `agent-evolution`, `agent-framework`, `agent-swarm`, `ai-agent`, `ai-agents`, `ai-research`, `autonomous-agent`, `awesome-list`, `benchmark`, `harness-engineering`, `llm`, `llm-agent`, `memory-system`, `multi-agent`, `prompt-engineering`, `self-evolution`, `self-evolving`, `self-evolving-agents`, `self-improvement`, `skill-library` |

## Checks

| Check | Result |
|---|---:|
| Topic present on repository | true |
| Expected adjacent topics present | true |
| Discovery terms present in description | true |
| Homepage present | true |
| GitHub Search returns repository | true |
| Topic HTML fetch succeeded | true |
| Topic HTML includes repository | true |
| Topic page rank observed, zero-based | 1 |

## Topic Page First Parsed Repositories

| Rank | Repository |
|---:|---|
| 1 | [EvoMap/evolver](https://github.com/EvoMap/evolver) |
| 2 | [Shiyao-Huang/awesome-agent-evolution](https://github.com/Shiyao-Huang/awesome-agent-evolution) |
| 3 | [EvoMap/awesome-agent-evolution](https://github.com/EvoMap/awesome-agent-evolution) |
| 4 | [ythx-101/openclaw-qa](https://github.com/ythx-101/openclaw-qa) |
| 5 | [raphaelchristi/harness-evolver](https://github.com/raphaelchristi/harness-evolver) |
| 6 | [TerryFYL/openclaw-evolution-framework](https://github.com/TerryFYL/openclaw-evolution-framework) |
| 7 | [EvoMap/feishu-evolver-wrapper](https://github.com/EvoMap/feishu-evolver-wrapper) |
| 8 | [trillskillz/clawdmarket](https://github.com/trillskillz/clawdmarket) |
| 9 | [jbrahy/meta-agent-teams](https://github.com/jbrahy/meta-agent-teams) |
| 10 | [HC20251027/penta-harness-src](https://github.com/HC20251027/penta-harness-src) |
| 11 | [dddabtc/appleseed-evolution](https://github.com/dddabtc/appleseed-evolution) |
| 12 | [steezkelly/hermes-agent-self-evolution](https://github.com/steezkelly/hermes-agent-self-evolution) |

## Evidence Commands

- `gh api repos/Shiyao-Huang/awesome-agent-evolution/topics`
- `gh repo view Shiyao-Huang/awesome-agent-evolution --json nameWithOwner,description,homepageUrl,repositoryTopics,url,stargazerCount,pushedAt,updatedAt`
- `gh search repos --topic agent-evolution --owner Shiyao-Huang --json fullName,description,url,stargazersCount,updatedAt --limit 20`
- `curl -L -A 'Mozilla/5.0' 'https://github.com/topics/agent-evolution?o=desc&s=stars'`
