---
repo: ce0alex/skill-hunter
url: https://github.com/ce0alex/skill-hunter
content_timestamp: 2026-01-31
time_slice: 2026-01
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - CE0Alex/skill-hunter: Agent skill to analyze a repo and recommend a best-fit skill stack with verified sources · GitHub

**Source**: https://github.com/ce0alex/skill-hunter

---

[Skip to content](https://github.com/ce0alex/skill-hunter#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[CE0Alex](https://github.com/CE0Alex)

/
**[skill-hunter](https://github.com/CE0Alex/skill-hunter)**

Public

- [Notifications](https://github.com/login?return_to=%2FCE0Alex%2Fskill-hunter)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FCE0Alex%2Fskill-hunter)
- 
[Star
          22](https://github.com/login?return_to=%2FCE0Alex%2Fskill-hunter)

[https://github.com/CE0Alex/skill-hunter](https://github.com/CE0Alex/skill-hunter)

[Branches](https://github.com/CE0Alex/skill-hunter/branches)[Tags](https://github.com/CE0Alex/skill-hunter/tags)

[https://github.com/CE0Alex/skill-hunter/branches](https://github.com/CE0Alex/skill-hunter/branches)[https://github.com/CE0Alex/skill-hunter/tags](https://github.com/CE0Alex/skill-hunter/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History52 Commits52 Commits |  |  |  |
| references | references |  |  |
| .gitignore | .gitignore |  |  |
| AGENTS.md | AGENTS.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| SKILL.md | SKILL.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Skill Hunter

[https://github.com/ce0alex/skill-hunter#skill-hunter](https://github.com/ce0alex/skill-hunter#skill-hunter)

[https://github.com/CE0Alex/skill-hunter](https://github.com/CE0Alex/skill-hunter)

An agent skill that analyzes your project and recommends a curated stack of **external skills** from trusted registries.

## What It Does

[https://github.com/ce0alex/skill-hunter#what-it-does](https://github.com/ce0alex/skill-hunter#what-it-does)

Skill Hunter helps you discover and install the best skills for your project:

1. **Analyzes your project** — scans your codebase to understand the stack, workflows, and constraints
2. **Asks clarifying questions** — confirms your goals, trust preferences, and category focus before searching
3. **Searches skill registries** — queries Context7, skills.sh, and GitHub for relevant skills
4. **Inspects candidates** — verifies each skill's source, maintainer, and compatibility
5. **Recommends a stack** — presents a minimal set of skills with confidence ratings and tradeoffs
6. **Installs after confirmation** — only installs skills you approve, using verified methods

For the complete workflow and rules, see [SKILL.md](https://github.com/CE0Alex/skill-hunter/blob/main/SKILL.md).

## When to Use

[https://github.com/ce0alex/skill-hunter#when-to-use](https://github.com/ce0alex/skill-hunter#when-to-use)

Invoke Skill Hunter when you want to find **new external skills**:

- "Find the best skills for this project"
- "Recommend external skills for TypeScript testing"
- "What skills exist for CI/CD automation?"

**Do not use** for questions about already-installed skills — Skill Hunter is for discovery, not usage guidance.

## Compatibility

[https://github.com/ce0alex/skill-hunter#compatibility](https://github.com/ce0alex/skill-hunter#compatibility)

This skill follows the [Agent Skills](https://agentskills.io) format and works with any agent that supports skills.

### Tested Agents

[https://github.com/ce0alex/skill-hunter#tested-agents](https://github.com/ce0alex/skill-hunter#tested-agents)

| Agent | Version Tested | Status |
|---|---|---|
| Claude Code (CLI) | 2.1.34 | ✅ Supported |
| Codex CLI | 0.98.0 | ✅ Supported |
| Claude (Web/Desktop) | — | ✅ Supported (ZIP upload) |

### Other Agents

[https://github.com/ce0alex/skill-hunter#other-agents](https://github.com/ce0alex/skill-hunter#other-agents)

Skill Hunter supports 50+ agents via the [Skills CLI](https://github.com/vercel-labs/skills) registry. See [references/agent-skills.md](https://github.com/CE0Alex/skill-hunter/blob/main/references/agent-skills.md) for the full list of supported agents and their skill paths.

## Installing Skill Hunter

[https://github.com/ce0alex/skill-hunter#installing-skill-hunter](https://github.com/ce0alex/skill-hunter#installing-skill-hunter)

These instructions are for installing **Skill Hunter itself** as a skill in your agent. Once installed, you can invoke Skill Hunter to discover and install other skills for your project.

### Quick Install (Skills CLI)

[https://github.com/ce0alex/skill-hunter#quick-install-skills-cli](https://github.com/ce0alex/skill-hunter#quick-install-skills-cli)

If your agent supports the [Skills CLI](https://skills.sh):

```
npx skills add CE0Alex/skill-hunter --skill skill-hunter -a <your-agent> -y
```

Replace `<your-agent>` with your agent name (e.g., `claude-code`, `codex`, `cursor`). This command installs **this repo** (`CE0Alex/skill-hunter`) as a skill. See [references/agent-skills.md](https://github.com/CE0Alex/skill-hunter/blob/main/references/agent-skills.md) for the full list of supported agent names and paths.

**Recommended for most users.** This installs the complete `skill-hunter` package (including `references/`).

### Claude Code (CLI)

[https://github.com/ce0alex/skill-hunter#claude-code-cli](https://github.com/ce0alex/skill-hunter#claude-code-cli)

**From GitHub (recommended):**

```
# Project-level
mkdir -p .claude/skills && git clone https://github.com/CE0Alex/skill-hunter.git .claude/skills/skill-hunter

# Or global (available in all projects)
mkdir -p ~/.claude/skills && git clone https://github.com/CE0Alex/skill-hunter.git ~/.claude/skills/skill-hunter
```

**Manual copy (if you already have the files):**

```
mkdir -p .claude/skills
cp -R skill-hunter .claude/skills/
```

### Codex CLI

[https://github.com/ce0alex/skill-hunter#codex-cli](https://github.com/ce0alex/skill-hunter#codex-cli)

**From GitHub:**

```
mkdir -p .codex/skills && git clone https://github.com/CE0Alex/skill-hunter.git .codex/skills/skill-hunter
```

**Using the built-in skill installer:**

```
$skill-installer install the skill-hunter skill from CE0Alex/skill-hunter
```

> **Note:** Restart Codex after installing new skills.

### Claude (Web/Desktop)

[https://github.com/ce0alex/skill-hunter#claude-webdesktop](https://github.com/ce0alex/skill-hunter#claude-webdesktop)

1. Download or clone this repository
2. Create a ZIP file containing the `skill-hunter` folder (include all files: `SKILL.md`, `README.md`, `references/`, etc.)
3. In Claude, go to **Settings > Capabilities**
4. Upload the ZIP file

> Skills and Code Execution must be enabled (org admins may need to enable this).

### Other Agents

[https://github.com/ce0alex/skill-hunter#other-agents-1](https://github.com/ce0alex/skill-hunter#other-agents-1)

For Cursor, Windsurf, Cline, and 50+ other agents, see [references/agent-skills.md](https://github.com/CE0Alex/skill-hunter/blob/main/references/agent-skills.md) for paths. The general pattern is:

```
mkdir -p .<agent>/skills && git clone https://github.com/CE0Alex/skill-hunter.git .<agent>/skills/skill-hunter
```

Paths vary by agent (some use `.agents/skills` or `.augment/rules`), so use the reference file for accuracy.

### Verifying Installation

[https://github.com/ce0alex/skill-hunter#verifying-installation](https://github.com/ce0alex/skill-hunter#verifying-installation)

After installing, ask your agent:

> "What skills do you have available?"

or

> "Do you have the Skill Hunter skill?"

If installed correctly, the agent should recognize Skill Hunter and describe what it does.

---

## How Skill Hunter Installs Discovered Skills

[https://github.com/ce0alex/skill-hunter#how-skill-hunter-installs-discovered-skills](https://github.com/ce0alex/skill-hunter#how-skill-hunter-installs-discovered-skills)

Once Skill Hunter is installed and you invoke it, it uses these tools to find and install skills for your project:

| Tool | Purpose |
|---|---|
| Skills CLI (npx skills) | Primary discovery and installation |
| Context7 CLI (ctx7) | Secondary registry search |
| GitHub search | Fallback for gaps not in registries |

Skill Hunter handles the installation commands automatically after you confirm the recommended stack. For the full CLI reference used internally, see [references/installation.md](https://github.com/CE0Alex/skill-hunter/blob/main/references/installation.md).

Note: detailed Skills CLI safety rules (like verifying a repo with `--list` before install) live in `references/installation.md` to keep this README focused on user setup.

## Example Usage

[https://github.com/ce0alex/skill-hunter#example-usage](https://github.com/ce0alex/skill-hunter#example-usage)

Once installed, invoke Skill Hunter with a prompt like:

> "Find the best skills for this project"

Skill Hunter will:

1. Analyze your codebase
2. Ask about your goals and preferences
3. Search skill registries (Context7, skills.sh, GitHub)
4. Present a recommended stack with confidence ratings
5. Install your chosen skills after confirmation

For the complete workflow, see [SKILL.md](https://github.com/CE0Alex/skill-hunter/blob/main/SKILL.md).

## Repo Structure

[https://github.com/ce0alex/skill-hunter#repo-structure](https://github.com/ce0alex/skill-hunter#repo-structure)

| File | Purpose |
|---|---|
| SKILL.md | The skill itself — workflow rules and instructions for the agent |
| README.md | This file — user documentation |
| AGENTS.md | Contributor guide for maintaining Skill Hunter |
| references/installation.md | Agent reference: CLI commands for installing discovered skills |
| references/agent-skills.md | Agent reference: paths, formats, and supported agents |

## Changelog

[https://github.com/ce0alex/skill-hunter#changelog](https://github.com/ce0alex/skill-hunter#changelog)

- **v1.0.24** — Update tested versions (Claude Code 2.1.34, Codex 0.98.0), add `ctx7 skills suggest` as discovery source, update Skills CLI reference to v1.3.7 features, fix Replit path, add Skills Directory as optional registry, rebuild dist package.
- **v1.0.21** — Adopt clarified README structure, add explicit repo reference in Quick Install, and link detailed CLI safety rules from references.
- **v1.0.20** — Align with latest Skills CLI guidance (source formats, options, maintenance commands) and expand supported agents/discovery locations.

## Spec Evolution

[https://github.com/ce0alex/skill-hunter#spec-evolution](https://github.com/ce0alex/skill-hunter#spec-evolution)

The [Agent Skills specification](https://agentskills.io) continues to evolve. Notable proposals under discussion include inter-skill relationships (`prerequisite-skills`, `related-skills`) in [agentskills/agentskills#90](https://github.com/agentskills/agentskills/issues/90). Skill Hunter will adopt new spec features as they are merged.

## License

[https://github.com/ce0alex/skill-hunter#license](https://github.com/ce0alex/skill-hunter#license)

MIT

## About

         Agent skill to analyze a repo and recommend a best-fit skill stack with verified sources       

### Topics

[ai](https://github.com/topics/ai)[tooling](https://github.com/topics/tooling)[skills](https://github.com/topics/skills)[codex](https://github.com/topics/codex)[claude](https://github.com/topics/claude)[agent-skills](https://github.com/topics/agent-skills)

### Resources

[Readme](https://github.com/ce0alex/skill-hunter#readme-ov-file)

### License

[MIT license](https://github.com/ce0alex/skill-hunter#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/CE0Alex/skill-hunter/activity)

### Stars

[22
        stars](https://github.com/CE0Alex/skill-hunter/stargazers)

### Watchers

[0
        watching](https://github.com/CE0Alex/skill-hunter/watchers)

### Forks

[0
        forks](https://github.com/CE0Alex/skill-hunter/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FCE0Alex%2Fskill-hunter&report=CE0Alex+%28user%29)

## [Releases
      22](https://github.com/CE0Alex/skill-hunter/releases)

[v1.0.23
        
          Latest
      
      Jan 31, 2026](https://github.com/CE0Alex/skill-hunter/releases/tag/v1.0.23)
[+ 21 releases](https://github.com/CE0Alex/skill-hunter/releases)

## [Packages
      0](https://github.com/users/CE0Alex/packages?repo_name=skill-hunter)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/CE0Alex/skill-hunter/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

     You can’t perform that action at this time.
