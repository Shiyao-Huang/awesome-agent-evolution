# Hourly Public Metadata Update - 2026-05-24 17:59

## One Sentence

This run adds six web-observed GitHub captures for agent memory substrates and OS/web agent benchmarks, while explicitly preserving the GitHub API/DNS blocker.

## Three Sentences

Direct user intent still requires raw -> processed -> work -> results traceability. The new raw captures are LangMem, Graphiti, Memobase, OSWorld, WindowsAgentArena, and BrowserGym; each is promoted into classification, public site data, and model-card reports. Shell GitHub API freshness remains unavailable because DNS for api.github.com fails and the gh token is invalid, so the evidence is browser-visible GitHub page evidence only.

## Five Sentences

1. The main gap addressed is the memory/benchmark layer around self-evolving agents, not another generic agent framework list.
2. LangMem, Graphiti, and Memobase show different memory substrate designs: tool-based long-term memory, temporal context graphs, and user profile/event memory.
3. OSWorld, WindowsAgentArena, and BrowserGym provide benchmark harnesses for computer-use and web agents, giving the paper/site stronger evaluation infrastructure coverage.
4. Raw captures stay in raw-github, classification stays in research, learning notes stay in work/research, and public artifacts are mirrored into projects and site/public/reports/projects.
5. Because shell GitHub API access is blocked, current star/fork/commit metadata must be read as web-observed snapshots, not API-verified facts.

## Added Repositories

- langchain-ai/langmem: Agent 长期记忆 SDK; raw=raw-github/langchain-ai_langmem.md; report=projects/70-langmem-agent-memory.md
- getzep/graphiti: Temporal Context Graph Agent Memory; raw=raw-github/getzep_graphiti.md; report=projects/71-graphiti-temporal-context-graphs.md
- memodb-io/memobase: 用户画像长期记忆后端; raw=raw-github/memodb-io_memobase.md; report=projects/72-memobase-user-profile-memory.md
- xlang-ai/OSWorld: Computer-use Agent OS Benchmark; raw=raw-github/xlang-ai_osworld.md; report=projects/73-osworld-computer-agent-benchmark.md
- microsoft/WindowsAgentArena: Windows OS Agent Benchmark; raw=raw-github/microsoft_windowsagentarena.md; report=projects/74-windows-agent-arena.md
- ServiceNow/BrowserGym: Web Agent Benchmark Gym; raw=raw-github/servicenow_browsergym.md; report=projects/75-browsergym-web-agent-benchmark.md

## GitHub Freshness Blocker

- `curl -I --max-time 10 https://api.github.com/repos/langchain-ai/langmem` failed with `Could not resolve host: api.github.com`.
- `gh auth status` reported the default GitHub token is invalid.
- Browser-opened GitHub pages were used as public evidence; no API fields were fabricated.

## Working Principle

GitHub web page -> timestamped raw capture -> repo-classification row -> generated timestamp index and analysis -> site project card -> public model-card report -> Mermaid graph evidence.
