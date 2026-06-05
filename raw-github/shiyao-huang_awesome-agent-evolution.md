---
repo: shiyao-huang/awesome-agent-evolution
url: https://github.com/Shiyao-Huang/awesome-agent-evolution
content_timestamp: 2026-06-05
time_slice: 2026-06
timestamp_source: github_api_and_topic_search_observed_2026-06-05
collected_at: 2026-06-05T19:00:31+08:00
source: github_api_and_topic_search
source_tool: gh.repo.view + gh.search.repos + web.open
---

## GitHub public metadata capture

**Source:** https://github.com/Shiyao-Huang/awesome-agent-evolution

## Repository API snapshot

- Repository: `Shiyao-Huang/awesome-agent-evolution`
- Visibility: public
- Fork status: not a fork
- Default branch: `main`
- Stars observed via GitHub API: 136
- Primary language observed via GitHub API: TeX
- License: MIT
- Homepage: https://agent-evolution.com/
- Pushed at: `2026-06-05T10:15:59Z`
- Updated at: `2026-06-05T10:16:03Z`
- Description: Open survey and evidence map for AI agent evolution, self-evolving agents, memory, skills, harnesses, benchmarks, and agent-swarm systems.
- Topics observed: `agent-evolution`, `agent-framework`, `agent-swarm`, `ai-agent`, `ai-agents`, `ai-research`, `autonomous-agent`, `awesome-list`, `benchmark`, `harness-engineering`, `llm`, `llm-agent`, `memory-system`, `multi-agent`, `prompt-engineering`, `self-evolution`, `self-evolving`, `self-evolving-agents`, `self-improvement`, `skill-library`.

## Topic/search evidence

- GitHub topic page opened: https://github.com/topics/agent-evolution?o=desc&s=stars
- Topic page text at capture time said there were 20 public repositories for `agent-evolution`.
- The rendered topic page still showed `EvoMap/awesome-agent-evolution` at 132 stars, while the current repository API showed `Shiyao-Huang/awesome-agent-evolution` at 136 stars.
- `gh search repos 'topic:agent-evolution'` did return `Shiyao-Huang/awesome-agent-evolution` as an `agent-evolution` topic result, second after `EvoMap/evolver`.

## Interpretation boundary

The repository is already present in GitHub search for `topic:agent-evolution` and already has the repository-level `agent-evolution` topic. The mismatch is between GitHub's API/search index and the rendered topic web page, most likely topic-page cache or delayed topic-page synchronization after repository identity/topic changes. This capture does not claim that GitHub has completed every rendered topic-page refresh.

## Indexing signal gap

The API reported primary language as TeX because the repository contains substantial paper and survey sources. This can confuse readers and weakly dilute GitHub discovery signals for an awesome-list/site repository. The mitigation is to keep the corpus and paper assets intact while adding Linguist rules so raw captures, papers, reports, and generated outputs do not dominate the repository language classification.
