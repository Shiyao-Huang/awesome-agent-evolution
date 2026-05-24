---
repo: skills-mcp/skills-mcp
url: https://github.com/skills-mcp/skills-mcp
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - skills-mcp/skills-mcp: Bring Claude's Skills pattern to any MCP-compatible agent · GitHub

**Source**: https://github.com/skills-mcp/skills-mcp

---

[Skip to content](https://github.com/skills-mcp/skills-mcp#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[skills-mcp](https://github.com/skills-mcp)

/
**[skills-mcp](https://github.com/skills-mcp/skills-mcp)**

Public

- [Notifications](https://github.com/login?return_to=%2Fskills-mcp%2Fskills-mcp)You must be signed in to change notification settings
- [Fork
    8](https://github.com/login?return_to=%2Fskills-mcp%2Fskills-mcp)
- 
[Star
          24](https://github.com/login?return_to=%2Fskills-mcp%2Fskills-mcp)

[https://github.com/skills-mcp/skills-mcp](https://github.com/skills-mcp/skills-mcp)

[Branches](https://github.com/skills-mcp/skills-mcp/branches)[Tags](https://github.com/skills-mcp/skills-mcp/tags)

[https://github.com/skills-mcp/skills-mcp/branches](https://github.com/skills-mcp/skills-mcp/branches)[https://github.com/skills-mcp/skills-mcp/tags](https://github.com/skills-mcp/skills-mcp/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History6 Commits6 Commits |  |  |  |
| docs | docs |  |  |
| src | src |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| package.json | package.json |  |  |
| pnpm-lock.yaml | pnpm-lock.yaml |  |  |
| tsconfig.json | tsconfig.json |  |  |
| View all files |  |  |  |

## Repository files navigation

# Skills MCP

[https://github.com/skills-mcp/skills-mcp#skills-mcp](https://github.com/skills-mcp/skills-mcp#skills-mcp)

Transform any AI agent into a domain expert by giving it access to modular, reusable skills through the Model Context Protocol.

> **Inspired by [Claude Skills](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview)**: This MCP server brings Claude's Skills pattern to any MCP-compatible agent.

- **What**: An MCP server that brings Claude's Skills format to any MCP-compatible agent
- **Why**: Create skills once, use them everywhere—across Claude, VS Code, Cursor, and any MCP tool
- **How**: Point the server at your skills directory and agents discover them automatically

## Quick Setup

[https://github.com/skills-mcp/skills-mcp#quick-setup](https://github.com/skills-mcp/skills-mcp#quick-setup)

The fastest way to get started is with npx. Choose your platform:

**Claude Code**

Create `.mcp.json` in your project or `~/.claude.json` globally:

```
{
  "mcpServers": {
    "skills-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "skills-mcp", "-s", "/absolute/path/to/skills"]
    }
  }
}
```

**Claude for Desktop**

Create `~/Library/Application Support/Claude/claude_desktop_config.json`:

```
{
  "mcpServers": {
    "skills-mcp": {
      "command": "npx",
      "args": ["-y", "skills-mcp", "-s", "/absolute/path/to/skills"]
    }
  }
}
```

**Cursor**

Create `.cursor/mcp.json` in your project or `~/.cursor/mcp.json` globally:

```
{
  "mcpServers": {
    "skills-mcp": {
      "command": "npx",
      "args": ["-y", "skills-mcp", "-s", "/absolute/path/to/skills"]
    }
  }
}
```

**VS Code**

Create `.vscode/mcp.json` in your project:

```
{
  "servers": {
    "skills-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "skills-mcp", "-s", "/absolute/path/to/skills"]
    }
  }
}
```

**Replace**`/absolute/path/to/skills` with your actual skills directory path.

### Try It Out

[https://github.com/skills-mcp/skills-mcp#try-it-out](https://github.com/skills-mcp/skills-mcp#try-it-out)

1. Start the MCP server in your agent
2. **Recommended**: Run the `/init-skills` prompt at the start of each session to provide background guidance on the Skills MCP workflow
3. **Alternative**: Simply ask the agent to complete a task—it will discover and use skills when needed

That's it! Your agent can now discover and use skills.

## Get Example Skills

[https://github.com/skills-mcp/skills-mcp#get-example-skills](https://github.com/skills-mcp/skills-mcp#get-example-skills)

Want to try it out with ready-made skills? Anthropic maintains a [collection of example skills](https://github.com/anthropics/skills) that you can bring into your project instantly using `npx degit`:

```
# Get the skill creator skill
npx degit anthropics/skills/skill-creator skills/skill-creator

# Get the MCP builder skill
npx degit anthropics/skills/mcp-builder skills/mcp-builder
```

These commands will download the skills directly into your `skills/` directory without any git history. Browse the [Anthropic skills repository](https://github.com/anthropics/skills) to see all available examples.

## Agent Instructions Setup

[https://github.com/skills-mcp/skills-mcp#agent-instructions-setup](https://github.com/skills-mcp/skills-mcp#agent-instructions-setup)

Want Skills MCP guidance always available in your agent's context? Export the instructions:

**Recommended**: Use [AGENTS.md](https://agents.md) for broad agent support:

```
npx -y skills-mcp instructions >> AGENTS.md
```

**For agents without `AGENTS.md` support**:

```
# Claude Code
npx -y skills-mcp instructions >> CLAUDE.md
```

### When to Use Instructions File vs `/init-skills` Prompt

[https://github.com/skills-mcp/skills-mcp#when-to-use-instructions-file-vs-init-skills-prompt](https://github.com/skills-mcp/skills-mcp#when-to-use-instructions-file-vs-init-skills-prompt)

- **Use instructions export** if you want skills guidance always present in every conversation
- **Use `/init-skills` prompt** if you want to minimize context usage and only load guidance when needed

Both approaches use the same content—choose based on your preference for context management.

---

## Understanding Skills

[https://github.com/skills-mcp/skills-mcp#understanding-skills](https://github.com/skills-mcp/skills-mcp#understanding-skills)
**What are Skills?**

Skills are modular, self-contained packages that transform general-purpose AI agents into specialized experts. Think of them as "onboarding guides" for specific domains or tasks—they provide procedural knowledge that no model can fully possess.

**Example: A PDF Processing Skill might include:**

- Instructions for extracting text and filling forms
- Python scripts for reliable PDF operations
- Reference documentation for advanced use cases
- Template files for generating documents

Instead of explaining PDF processing in every conversation, you install the skill once and the agent knows when and how to use it.

**Why Skills MCP?**

While Claude has native Skills support built-in, this MCP server brings that same capability to other agents:

- **Universal compatibility**: Any MCP-compatible agent can now use Claude Skills
- **Unified management**: Single skills directory works across all agents and platforms
- **Optional for Claude**: When using Claude Desktop or Claude Code, you can disable this server and use native Skills instead
- **Progressive disclosure**: Skills load information in stages, minimizing context usage

**Key benefit**: Create skills once in Claude's format, use them everywhere—whether with Claude's native support or via MCP in VS Code, Cursor, and other tools.

**How Skills Work**

Skills use a **three-level progressive disclosure** system to manage context efficiently:

1. **Metadata** (~100 tokens): Name and description loaded at startup
2. **Instructions** (~5k tokens): Main SKILL.md content loaded when skill is triggered
3. **Resources** (loaded as needed): References, scripts, and assets accessed on-demand

This means you can install dozens of skills without context penalty—agents only load what they need, when they need it.

---

## Creating Skills

[https://github.com/skills-mcp/skills-mcp#creating-skills](https://github.com/skills-mcp/skills-mcp#creating-skills)
**Quick Start: Basic Skill Structure**

Skills follow Anthropic's convention-based format from [Claude Skills](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview):

```
skill-name/
├── SKILL.md              # Required: Skill metadata and instructions
├── references/           # Optional: Documentation loaded as needed
├── scripts/              # Optional: Executable code
└── assets/               # Optional: Templates and files for output
```

### SKILL.md Format

[https://github.com/skills-mcp/skills-mcp#skillmd-format](https://github.com/skills-mcp/skills-mcp#skillmd-format)

```
---
name: Skill Name
description: What this skill does and when to use it (be specific!)
---

# Skill Name

## Instructions

[Step-by-step guidance for the agent]

## Examples

[Concrete usage examples]
```

**Tips for writing good skills:**

- Make descriptions specific about WHEN to use the skill
- Use imperative/infinitive form in instructions ("To do X, use Y")
- Keep SKILL.md under 5k words; move detailed docs to `references/`
- Bundle scripts for deterministic operations
- Include templates in `assets/` for files used in output

For more details, see the [Skills specification](https://github.com/skills-mcp/skills-mcp/blob/main/docs/spec.md).

---

## Advanced Usage

[https://github.com/skills-mcp/skills-mcp#advanced-usage](https://github.com/skills-mcp/skills-mcp#advanced-usage)
**Command Line Options**

### Arguments

[https://github.com/skills-mcp/skills-mcp#arguments](https://github.com/skills-mcp/skills-mcp#arguments)

- `-s, --skills-dir`: Path to skills directory (**required**, can be specified multiple times, must be absolute paths)

### Multiple Skills Directories

[https://github.com/skills-mcp/skills-mcp#multiple-skills-directories](https://github.com/skills-mcp/skills-mcp#multiple-skills-directories)

When specifying multiple skills directories, all directories are scanned for skills. If multiple skills with the same ID are found across different directories, a warning will be logged and the last loaded skill will be used.

Example configuration with multiple directories:

```
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

