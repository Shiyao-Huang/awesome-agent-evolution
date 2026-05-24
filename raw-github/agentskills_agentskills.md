---
repo: agentskills/agentskills
url: https://github.com/agentskills/agentskills
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - agentskills/agentskills: Specification and documentation for Agent Skills · GitHub

**Source**: https://github.com/agentskills/agentskills

---

[Skip to content](https://github.com/agentskills/agentskills#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[agentskills](https://github.com/agentskills)

/
**[agentskills](https://github.com/agentskills/agentskills)**

Public

- [Notifications](https://github.com/login?return_to=%2Fagentskills%2Fagentskills)You must be signed in to change notification settings
- [Fork
    1.2k](https://github.com/login?return_to=%2Fagentskills%2Fagentskills)
- 
[Star
          19k](https://github.com/login?return_to=%2Fagentskills%2Fagentskills)

[https://github.com/agentskills/agentskills](https://github.com/agentskills/agentskills)

[Branches](https://github.com/agentskills/agentskills/branches)[Tags](https://github.com/agentskills/agentskills/tags)

[https://github.com/agentskills/agentskills/branches](https://github.com/agentskills/agentskills/branches)[https://github.com/agentskills/agentskills/tags](https://github.com/agentskills/agentskills/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History123 Commits123 Commits |  |  |  |
| .claude | .claude |  |  |
| docs | docs |  |  |
| skills-ref | skills-ref |  |  |
| .gitignore | .gitignore |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| package.json | package.json |  |  |
| View all files |  |  |  |

## Repository files navigation

# Agent Skills

[https://github.com/agentskills/agentskills#agent-skills](https://github.com/agentskills/agentskills#agent-skills)

[https://discord.gg/MKPE9g8aUy](https://discord.gg/MKPE9g8aUy)

A standardized way to give AI agents new capabilities and expertise.

## What are Agent Skills?

[https://github.com/agentskills/agentskills#what-are-agent-skills](https://github.com/agentskills/agentskills#what-are-agent-skills)

Agent Skills are a lightweight, open format for extending AI agent capabilities with specialized knowledge and workflows.

At its core, a skill is a folder containing a `SKILL.md` file. This file includes metadata (`name` and `description`, at minimum) and instructions that tell an agent how to perform a specific task. Skills can also bundle scripts, reference materials, templates, and other resources.

```
my-skill/
├── SKILL.md          # Required: metadata + instructions
├── scripts/          # Optional: executable code
├── references/       # Optional: documentation
├── assets/           # Optional: templates, resources
└── ...               # Any additional files or directories
```

## Why Agent Skills?

[https://github.com/agentskills/agentskills#why-agent-skills](https://github.com/agentskills/agentskills#why-agent-skills)

Agents are increasingly capable, but often don't have the context they need to do real work reliably. Skills solve this by packaging procedural knowledge and company-, team-, and user-specific context into portable, version-controlled folders that agents load on demand. This gives agents:

- **Domain expertise**: Capture specialized knowledge — from legal review processes to data analysis pipelines to presentation formatting — as reusable instructions and resources.
- **Repeatable workflows**: Turn multi-step tasks into consistent, auditable procedures.
- **Cross-product reuse**: Build a skill once and use it across any skills-compatible agent.

## How do Agent Skills work?

[https://github.com/agentskills/agentskills#how-do-agent-skills-work](https://github.com/agentskills/agentskills#how-do-agent-skills-work)

Agents load skills through **progressive disclosure**, in three stages:

1. 

**Discovery**: At startup, agents load only the name and description of each available skill, just enough to know when it might be relevant.

2. 

**Activation**: When a task matches a skill's description, the agent reads the full `SKILL.md` instructions into context.

3. 

**Execution**: The agent follows the instructions, optionally executing bundled code or loading referenced files as needed.

Full instructions load only when a task calls for them, so agents can keep many skills on hand with only a small context footprint.

## Where can I use Agent Skills?

[https://github.com/agentskills/agentskills#where-can-i-use-agent-skills](https://github.com/agentskills/agentskills#where-can-i-use-agent-skills)

Agent Skills are supported by a large number of AI tools and agentic clients — see the [Client Showcase](https://agentskills.io/clients) to explore some of them!

## Getting started

[https://github.com/agentskills/agentskills#getting-started](https://github.com/agentskills/agentskills#getting-started)

- **[Documentation](https://agentskills.io)** — Guides and tutorials
- **[Specification](https://agentskills.io/specification)** — Format details
- **[Example Skills](https://github.com/anthropics/skills)** — See what's possible
- **[Discord](https://discord.gg/MKPE9g8aUy)** — Share what you're building!

## Open development

[https://github.com/agentskills/agentskills#open-development](https://github.com/agentskills/agentskills#open-development)

The Agent Skills format was originally developed by [Anthropic](https://www.anthropic.com/), released as an open standard, and has been adopted by a growing number of agent products. The standard is open to contributions from the broader ecosystem — see [CONTRIBUTING.md](https://github.com/agentskills/agentskills/blob/main/CONTRIBUTING.md) for how to get involved.

## License

[https://github.com/agentskills/agentskills#license](https://github.com/agentskills/agentskills#license)

Code in this repository is licensed under [Apache 2.0](https://github.com/agentskills/agentskills/blob/main/LICENSE). Documentation is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). See individual directories for details.

## About

         Specification and documentation for Agent Skills       

[agentskills.io](https://agentskills.io)

### Topics

[agent-skills](https://github.com/topics/agent-skills)

### Resources

[Readme](https://github.com/agentskills/agentskills#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/agentskills/agentskills#Apache-2.0-1-ov-file)

### Contributing

[Contributing](https://github.com/agentskills/agentskills#contributing-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/agentskills/agentskills/activity)

[Custom properties](https://github.com/agentskills/agentskills/custom-properties)

### Stars

[19k
        stars](https://github.com/agentskills/agentskills/stargazers)

### Watchers

[161
        watching](https://github.com/agentskills/agentskills/watchers)

### Forks

[1.2k
        forks](https://github.com/agentskills/agentskills/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fagentskills%2Fagentskills&report=agentskills+%28user%29)

## [Releases](https://github.com/agentskills/agentskills/releases)

No releases published

## [Packages
      0](https://github.com/orgs/agentskills/packages?repo_name=agentskills)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/agentskills/agentskills/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          99.1%](https://github.com/agentskills/agentskills/search?l=python)
- [Shell
          0.9%](https://github.com/agentskills/agentskills/search?l=shell)

     You can’t perform that action at this time.
