---
repo: scienceaix/agentskills
url: https://github.com/scienceaix/agentskills
content_timestamp: 2025-11-25
time_slice: 2025-11
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - scienceaix/agentskills: Awesome Agent Skills collection list, papers, tools, projects, and resources · GitHub

**Source**: https://github.com/scienceaix/agentskills

---

[Skip to content](https://github.com/scienceaix/agentskills#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[scienceaix](https://github.com/scienceaix)

/
**[agentskills](https://github.com/scienceaix/agentskills)**

Public

- [Notifications](https://github.com/login?return_to=%2Fscienceaix%2Fagentskills)You must be signed in to change notification settings
- [Fork
    5](https://github.com/login?return_to=%2Fscienceaix%2Fagentskills)
- 
[Star
          63](https://github.com/login?return_to=%2Fscienceaix%2Fagentskills)

[https://github.com/scienceaix/agentskills](https://github.com/scienceaix/agentskills)

[Branches](https://github.com/scienceaix/agentskills/branches)[Tags](https://github.com/scienceaix/agentskills/tags)

[https://github.com/scienceaix/agentskills/branches](https://github.com/scienceaix/agentskills/branches)[https://github.com/scienceaix/agentskills/tags](https://github.com/scienceaix/agentskills/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History2 Commits2 Commits |  |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Awesome Skills for LLMs [https://arxiv.org/abs/2602.12430](https://arxiv.org/abs/2602.12430)

[https://github.com/scienceaix/agentskills#awesome-skills-for-llms-](https://github.com/scienceaix/agentskills#awesome-skills-for-llms-)

> A curated collection of resources, papers, tools, and frameworks for building, composing, and deploying **skills** for large language models — centered on Skills ecosystem and radiating outward to the broader LLM agent capabilities landscape.

**Agent Skills** was introduced as composable, portable folders of instructions, scripts, and resources that  loads dynamically — turning a general-purpose assistant into a specialized agent. This list tracks everything in the skills-for-LLMs ecosystem: the official Anthropic skill system, the closely related Model Context Protocol (MCP), academic research on skill acquisition and tool use, open-source agent frameworks, computer-use and GUI agents, benchmarks, and practical tutorials.

---

## Contents

[https://github.com/scienceaix/agentskills#contents](https://github.com/scienceaix/agentskills#contents)

- [Awesome Skills for LLMs](https://github.com/scienceaix/agentskills#awesome-skills-for-llms-)
  - [Contents](https://github.com/scienceaix/agentskills#contents)
  - [Anthropic Skills — Core Ecosystem](https://github.com/scienceaix/agentskills#anthropic-skills--core-ecosystem)
    - [Official Announcements & Blog Posts](https://github.com/scienceaix/agentskills#official-announcements--blog-posts)
    - [Documentation & Guides](https://github.com/scienceaix/agentskills#documentation--guides)
    - [GitHub Repositories](https://github.com/scienceaix/agentskills#github-repositories)
    - [Courses & Webinars](https://github.com/scienceaix/agentskills#courses--webinars)

  - [Model Context Protocol (MCP)](https://github.com/scienceaix/agentskills#model-context-protocol-mcp)
    - [Specification & Announcements](https://github.com/scienceaix/agentskills#specification--announcements)
    - [SDKs & Official Repos](https://github.com/scienceaix/agentskills#sdks--official-repos)
    - [Community MCP Resources](https://github.com/scienceaix/agentskills#community-mcp-resources)

  - [Claude Tool Use & Computer Use](https://github.com/scienceaix/agentskills#claude-tool-use--computer-use)
    - [Tool Use Resources](https://github.com/scienceaix/agentskills#tool-use-resources)
    - [Computer Use Resources](https://github.com/scienceaix/agentskills#computer-use-resources)

  - [Academic Papers](https://github.com/scienceaix/agentskills#academic-papers)
    - [Skill Learning & Composition](https://github.com/scienceaix/agentskills#skill-learning--composition)
    - [Tool Use & Function Calling](https://github.com/scienceaix/agentskills#tool-use--function-calling)
    - [Computer Use & GUI Agents](https://github.com/scienceaix/agentskills#computer-use--gui-agents)
    - [Web Agents & Browser Automation](https://github.com/scienceaix/agentskills#web-agents--browser-automation)
    - [GUI Grounding & Visual Understanding](https://github.com/scienceaix/agentskills#gui-grounding--visual-understanding)
    - [OS Agents](https://github.com/scienceaix/agentskills#os-agents)
    - [Multi-Agent Collaboration](https://github.com/scienceaix/agentskills#multi-agent-collaboration)
    - [Surveys & Overviews](https://github.com/scienceaix/agentskills#surveys--overviews)

  - [Open-Source Projects & Frameworks](https://github.com/scienceaix/agentskills#open-source-projects--frameworks)
    - [Agent Frameworks](https://github.com/scienceaix/agentskills#agent-frameworks)
    - [Browser Automation & Computer Use Agents](https://github.com/scienceaix/agentskills#browser-automation--computer-use-agents)
    - [Coding Agents](https://github.com/scienceaix/agentskills#coding-agents)

  - [Benchmarks & Evaluation](https://github.com/scienceaix/agentskills#benchmarks--evaluation)
    - [Agent Benchmarks](https://github.com/scienceaix/agentskills#agent-benchmarks)
    - [Tool Use & Function Calling Benchmarks](https://github.com/scienceaix/agentskills#tool-use--function-calling-benchmarks)
    - [Computer Use & GUI Benchmarks](https://github.com/scienceaix/agentskills#computer-use--gui-benchmarks)
    - [Web Browsing Benchmarks](https://github.com/scienceaix/agentskills#web-browsing-benchmarks)
    - [Leaderboards & Aggregators](https://github.com/scienceaix/agentskills#leaderboards--aggregators)

  - [Tutorials & Educational Resources](https://github.com/scienceaix/agentskills#tutorials--educational-resources)
    - [Anthropic Official Tutorials](https://github.com/scienceaix/agentskills#anthropic-official-tutorials)
    - [Community Skills Guides](https://github.com/scienceaix/agentskills#community-skills-guides)
    - [MCP Tutorials](https://github.com/scienceaix/agentskills#mcp-tutorials)
    - [Agent Architecture Guides](https://github.com/scienceaix/agentskills#agent-architecture-guides)
    - [Tool Use & Function Calling Tutorials](https://github.com/scienceaix/agentskills#tool-use--function-calling-tutorials)
    - [Courses](https://github.com/scienceaix/agentskills#courses)

  - [Related Awesome Lists](https://github.com/scienceaix/agentskills#related-awesome-lists)
  - [Key Timeline](https://github.com/scienceaix/agentskills#key-timeline)
  - [Contributing](https://github.com/scienceaix/agentskills#contributing)
  - [Citation](https://github.com/scienceaix/agentskills#citation)

---

## Anthropic Skills — Core Ecosystem

[https://github.com/scienceaix/agentskills#anthropic-skills--core-ecosystem](https://github.com/scienceaix/agentskills#anthropic-skills--core-ecosystem)

### Official Announcements & Blog Posts

[https://github.com/scienceaix/agentskills#official-announcements--blog-posts](https://github.com/scienceaix/agentskills#official-announcements--blog-posts)

- 

[Introducing Agent Skills](https://www.anthropic.com/news/skills) — Official product launch. Skills are folders of instructions, scripts, and resources that Claude loads dynamically. Available for Pro, Max, Team, and Enterprise users. Updated Dec 18, 2025 with organization-wide management and open standard announcement. *(Oct 2025, updated Dec 2025)*

- 

[Equipping Agents for the Real World with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) — Engineering deep-dive on the Agent Skills architecture: progressive disclosure, SKILL.md format, bundled code execution, and best practices. By Barry Zhang, Keith Lazuka, Mahesh Murag. *(Oct 2025, updated Dec 2025)*

- 

[Skills for Organizations, Partners, the Ecosystem](https://claude.com/blog/organization-skills-and-directory) — Announcement of org-wide skill management, partner-built skills directory, and Skills as an open standard for cross-platform portability. *(Dec 18, 2025)*

- 

[How to Create Skills: Key Steps, Limitations, and Examples](https://claude.com/blog/how-to-create-skills-key-steps-limitations-and-examples) — Practical guide to building Skills: defining name/description, structuring SKILL.md, writing instructions, testing, and governance best practices for teams. *(Nov 2025)*

- 

[How AI Impacts Skill Formation](https://www.anthropic.com/research/AI-assistance-coding-skills) — RCT finding that AI assistance led to 17% lower mastery scores, exploring the tension between productivity and skill development. *(Jan 2026)*

### Documentation & Guides

[https://github.com/scienceaix/agentskills#documentation--guides](https://github.com/scienceaix/agentskills#documentation--guides)

- 

[The Complete Guide to Building Skills for Claude (PDF)](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf?hsLang=en) — Comprehensive PDF covering SKILL.md authoring, frontmatter metadata, progressive disclosure patterns, organization-level deployment, API usage, and MCP integration with partner examples (Sentry, Box, Notion, Canva). *(2025)*

- 

[2026 Agentic Coding Trends Report (PDF)](https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf?hsLang=en) — Report on how agentic AI reshapes SDLC, developer roles, and security, covering Claude Code, Skills, and the MCP ecosystem. *(Early 2026)*

- 

[Build with Claude — Learning Hub](https://www.anthropic.com/learn/build-with-claude) — Hub page linking to Skills docs, best practices, API usage, Claude Code usage, and MCP integration.

### GitHub Repositories

[https://github.com/scienceaix/agentskills#github-repositories](https://github.com/scienceaix/agentskills#github-repositories)

- 

[anthropics/skills](https://github.com/anthropics/skills) — Public repository for Agent Skills: official skill definitions, examples, and the marketplace. ⭐ **62k+**

- 

[anthropics/claude-code](https://github.com/anthropics/claude-code) — Agentic coding tool for terminal. Supports Skills, MCP, subagents, slash commands, and hooks. ⭐ **42k+**

- 

[anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — Recipes and notebooks including agent patterns, tool use examples, and reference implementations. ⭐ **28k+**

- 

[anthropics/courses](https://github.com/anthropics/courses) — Anthropic's educational courses including tool use tutorials. ⭐ **18k+**

- 

[anthropics/prompt-eng-interactive-tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) — Interactive prompt engineering tutorial. ⭐ **26k+**

- 

[anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts) — Quickstart projects including the computer-use-demo Docker container. ⭐ **10k+**

- 

[anthropics/claude-agent-sdk-typescript](https://github.com/anthropics/claude-agent-sdk-typescript) — TypeScript Claude Agent SDK for building custom agents with MCP integration.

- 

[anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) — Official Python SDK for the Anthropic API.

### Courses & Webinars

[https://github.com/scienceaix/agentskills#courses--webinars](https://github.com/scienceaix/agentskills#courses--webinars)

- 

[Agent Skills Webinar: Transform Claude from Assistant to Specialized Agent](https://www.anthropic.com/webinars/agent-skills-transform-claude-from-assistant-to-specialized-agent) — Technical webinar by Marius Buleandra (Anthropic Applied AI) covering Skills architecture, live demos, and best practices. *(Nov 2025)*

- 

[Agent Skills with Anthropic — DeepLearning.AI](https://learn.deeplearning.ai/courses/agent-skills-with-anthropic/lesson/eg4sac/why-use-skills---part-ii) — DeepLearning.AI course on Agent Skills covering the open standard, composability, and cross-platform usage.

- 

[Introduction to Model Context Protocol — Anthropic Academy](https://anthropic.skilljar.com/introduction-to-model-context-protocol) — Official Anthropic course on building MCP servers and clients using Python.

- 

[Claude Code in Action — Anthropic Academy](https://anthropic.skilljar.com/claude-code-in-action) — Free official course for integrating Claude Code into development workflows.

---

## Model Context Protocol (MCP)

[https://github.com/scienceaix/agentskills#model-context-protocol-mcp](https://github.com/scienceaix/agentskills#model-context-protocol-mcp)

### Specification & Announcements

[https://github.com/scienceaix/agentskills#specification--announcements](https://github.com/scienceaix/agentskills#specification--announcements)

- 

[Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol) — Original MCP launch. Open standard for connecting AI to data sources. Pre-built servers for Google Drive, Slack, GitHub, Postgres, Puppeteer. Early adopters: Block, Apollo, Zed, Replit, Sourcegraph. *(Nov 2024)*

- 

[Donating MCP and Establishing the Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation) — MCP donated to Linux Foundation's AAIF, co-founded with Block and OpenAI. **10,000+ active MCP servers**, adopted by ChatGPT, Cursor, Gemini, VS Code. 97M+ monthly SDK downloads. *(Dec 9, 2025)*

- 

[MCP Specification (2025-11-25)](https://modelcontextprotocol.io/specification/2025-11-25) — Latest MCP spec: JSON-RPC 2.0, tools/resources/prompts, security guidelines, async operations, statelessness, server identity.

- 

[One Year of MCP — November 2025 Spec Release](http://blog.modelcontextprotocol.io/posts/2025-11-25-first-mcp-anniversary/) — Anniversary blog detailing 2025-11-25 spec features: tasks, async operations, governance updates.

- 

[MCP Joins the Agentic AI Foundation](http://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/) — Blog post about MCP's donation to Linux Foundation's AAIF.

- 

[Code Execution with MCP](https://www.anthropic.com/engineering/code-execution-with-mcp) — How to use code execution to interact with MCP servers more efficiently, reducing token overhead from tool definitions. *(Nov 4, 2025)*

### SDKs & Official Repos

[https://github.com/scienceaix/agentskills#sdks--official-repos](https://github.com/scienceaix/agentskills#sdks--official-repos)

- 

[modelcontextprotocol/modelcontextprotocol](https://github.com/modelcontextprotocol/modelcontextprotocol) — Main specification and documentation repo. Schema in TypeScript, available as JSON Schema.

- 

[modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — Official and community MCP server implementations: GitHub, GitLab, Google Drive, Google Maps, PostgreSQL, Puppeteer, Redis, Sentry, Slack, SQLite, and hundreds more.

- 

[modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) — Official Python SDK for building MCP servers and clients.

- 

[modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) — Official TypeScript SDK. v2 with Streamable HTTP, Express/Hono integrations.

- 

[modelcontextprotocol/go-sdk](https://github.com/modelcontextprotocol/go-sdk) — Official Go SDK, maintained in collaboration with Google.

- 

[modelcontextprotocol/csharp-sdk](https://github.com/modelcontextprotocol/csharp-sdk) — Official C#/.NET SDK, maintained in collaboration with Microsoft.

- 

[modelcontextprotocol/kotlin-sdk](https://github.com/modelcontextprotocol/kotlin-sdk) — Official Kotlin SDK, maintained in collaboration with JetBrains.

- 

[modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry) — Community-driven registry service for discovering MCP servers. Launched preview Sep 2025.

- 

[modelcontextprotocol/ext-apps](https://github.com/modelcontextprotocol/ext-apps) — MCP Apps Extension — standard for interactive UIs embedded in AI chatbots via MCP servers. Supports React, Vue, Svelte, Solid, Preact.

- 

[modelcontextprotocol/use-mcp](https://github.com/modelcontextprotocol/use-mcp) — Lightweight React hook for connecting to MCP servers.

### Community MCP Resources

[https://github.com/scienceaix/agentskills#community-mcp-resources](https://github.com/scienceaix/agentskills#community-mcp-resources)
## gBrain Temporal Metadata

- content_timestamp: 2025-12-18
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-12
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

