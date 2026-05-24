---
repo: shadowrootdev/awesome-agent-skills-mcp
url: https://github.com/shadowrootdev/awesome-agent-skills-mcp
content_timestamp: 2024-11-05
time_slice: 2024-Q4
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - shadowrootdev/awesome-agent-skills-mcp: MCP server providing 100+ AI agent skills from Anthropic, Vercel, Trail of Bits, Hugging Face & more. Works with Claude, GitHub Copilot, and any MCP client. · GitHub

**Source**: https://github.com/shadowrootdev/awesome-agent-skills-mcp

---

[Skip to content](https://github.com/shadowrootdev/awesome-agent-skills-mcp#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[shadowrootdev](https://github.com/shadowrootdev)

/
**[awesome-agent-skills-mcp](https://github.com/shadowrootdev/awesome-agent-skills-mcp)**

Public

- [Notifications](https://github.com/login?return_to=%2Fshadowrootdev%2Fawesome-agent-skills-mcp)You must be signed in to change notification settings
- [Fork
    2](https://github.com/login?return_to=%2Fshadowrootdev%2Fawesome-agent-skills-mcp)
- 
[Star
          23](https://github.com/login?return_to=%2Fshadowrootdev%2Fawesome-agent-skills-mcp)

[https://github.com/shadowrootdev/awesome-agent-skills-mcp](https://github.com/shadowrootdev/awesome-agent-skills-mcp)

[Branches](https://github.com/shadowrootdev/awesome-agent-skills-mcp/branches)[Tags](https://github.com/shadowrootdev/awesome-agent-skills-mcp/tags)

[https://github.com/shadowrootdev/awesome-agent-skills-mcp/branches](https://github.com/shadowrootdev/awesome-agent-skills-mcp/branches)[https://github.com/shadowrootdev/awesome-agent-skills-mcp/tags](https://github.com/shadowrootdev/awesome-agent-skills-mcp/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History18 Commits18 Commits |  |  |  |
| .github | .github |  |  |
| .vscode | .vscode |  |  |
| src | src |  |  |
| tests | tests |  |  |
| .eslintrc.cjs | .eslintrc.cjs |  |  |
| .gitignore | .gitignore |  |  |
| .npmignore | .npmignore |  |  |
| .prettierrc | .prettierrc |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| package-lock.json | package-lock.json |  |  |
| package.json | package.json |  |  |
| server.json | server.json |  |  |
| tsconfig.json | tsconfig.json |  |  |
| vitest.config.ts | vitest.config.ts |  |  |
| View all files |  |  |  |

## Repository files navigation

# Awesome Agent Skills MCP Server

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#awesome-agent-skills-mcp-server](https://github.com/shadowrootdev/awesome-agent-skills-mcp#awesome-agent-skills-mcp-server)

[https://github.com/shadowrootdev/awesome-agent-skills-mcp/actions/workflows/ci.yml](https://github.com/shadowrootdev/awesome-agent-skills-mcp/actions/workflows/ci.yml)[https://github.com/shadowrootdev/awesome-agent-skills-mcp/actions/workflows/security-audit.yml](https://github.com/shadowrootdev/awesome-agent-skills-mcp/actions/workflows/security-audit.yml)[https://github.com/shadowrootdev/awesome-agent-skills-mcp/actions/workflows/codeql.yml](https://github.com/shadowrootdev/awesome-agent-skills-mcp/actions/workflows/codeql.yml)[https://www.npmjs.com/package/awesome-agent-skills-mcp](https://www.npmjs.com/package/awesome-agent-skills-mcp)[https://www.npmjs.com/package/awesome-agent-skills-mcp](https://www.npmjs.com/package/awesome-agent-skills-mcp)[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)[https://nodejs.org](https://nodejs.org)[https://modelcontextprotocol.io](https://modelcontextprotocol.io)[https://github.com/shadowrootdev/awesome-agent-skills-mcp/releases](https://github.com/shadowrootdev/awesome-agent-skills-mcp/releases)[https://github.com/shadowrootdev/awesome-agent-skills-mcp/stargazers](https://github.com/shadowrootdev/awesome-agent-skills-mcp/stargazers)

> **A Model Context Protocol (MCP) server that provides access to 100+ curated AI agent skills from the [VoltAgent Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills) collection.**

Transform your AI assistants into specialized experts with skills from Anthropic, Vercel, Trail of Bits, Hugging Face, Stripe, Expo, and many more leading organizations.

## 🚀 Quick Start

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#-quick-start](https://github.com/shadowrootdev/awesome-agent-skills-mcp#-quick-start)

```
npx awesome-agent-skills-mcp
```

That's it! Add to your MCP client config and start using 100+ AI skills.

---

## Table of Contents

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#table-of-contents](https://github.com/shadowrootdev/awesome-agent-skills-mcp#table-of-contents)

- [Features](https://github.com/shadowrootdev/awesome-agent-skills-mcp#features)
- [Quick Start](https://github.com/shadowrootdev/awesome-agent-skills-mcp#quick-start)
- [Installation](https://github.com/shadowrootdev/awesome-agent-skills-mcp#installation)
- [Configuration](https://github.com/shadowrootdev/awesome-agent-skills-mcp#configuration)
  - [VS Code / GitHub Copilot](https://github.com/shadowrootdev/awesome-agent-skills-mcp#vs-code--github-copilot)
  - [Claude Desktop](https://github.com/shadowrootdev/awesome-agent-skills-mcp#claude-desktop)
  - [OpenCode](https://github.com/shadowrootdev/awesome-agent-skills-mcp#opencode)

- [Available Skills](https://github.com/shadowrootdev/awesome-agent-skills-mcp#available-skills)
- [MCP Tools](https://github.com/shadowrootdev/awesome-agent-skills-mcp#mcp-tools)
- [Usage Examples](https://github.com/shadowrootdev/awesome-agent-skills-mcp#usage-examples)
- [Development](https://github.com/shadowrootdev/awesome-agent-skills-mcp#development)
- [API Reference](https://github.com/shadowrootdev/awesome-agent-skills-mcp#api-reference)
- [Troubleshooting](https://github.com/shadowrootdev/awesome-agent-skills-mcp#troubleshooting)
- [Credits](https://github.com/shadowrootdev/awesome-agent-skills-mcp#credits)
- [License](https://github.com/shadowrootdev/awesome-agent-skills-mcp#license)

---

## Features

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#features](https://github.com/shadowrootdev/awesome-agent-skills-mcp#features)

- **100+ Curated Skills** - Access skills from top organizations including Anthropic, Vercel, Trail of Bits, Hugging Face, and more
- **Auto-Sync** - Automatically fetches and updates skills from the VoltAgent repository
- **MCP 2024-11-05 Compliant** - Full compatibility with the latest Model Context Protocol specification
- **Multi-Client Support** - Works with Claude, GitHub Copilot, OpenCode, and any MCP-compatible client
- **Smart Caching** - Efficient JSON-based caching for fast startup times
- **Type-Safe** - Built with TypeScript and Zod for runtime validation
- **Zero Configuration** - Works out of the box with sensible defaults

---

## Quick Start

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#quick-start](https://github.com/shadowrootdev/awesome-agent-skills-mcp#quick-start)

### Using npx (Recommended)

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#using-npx-recommended](https://github.com/shadowrootdev/awesome-agent-skills-mcp#using-npx-recommended)

```
npx awesome-agent-skills-mcp
```

### Global Installation

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#global-installation](https://github.com/shadowrootdev/awesome-agent-skills-mcp#global-installation)

```
npm install -g awesome-agent-skills-mcp
awesome-agent-skills-mcp
```

---

## Installation

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#installation](https://github.com/shadowrootdev/awesome-agent-skills-mcp#installation)

### Prerequisites

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#prerequisites](https://github.com/shadowrootdev/awesome-agent-skills-mcp#prerequisites)

- **Node.js** >= 20.0.0
- **npm** or **yarn**

### From npm

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#from-npm](https://github.com/shadowrootdev/awesome-agent-skills-mcp#from-npm)

```
npm install awesome-agent-skills-mcp
```

### From Source

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#from-source](https://github.com/shadowrootdev/awesome-agent-skills-mcp#from-source)

```
git clone https://github.com/shadowrootdev/awesome-agent-skills-mcp.git
cd awesome-agent-skills-mcp
npm install
npm run build
```

---

## Configuration

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#configuration](https://github.com/shadowrootdev/awesome-agent-skills-mcp#configuration)

### VS Code / GitHub Copilot

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#vs-code--github-copilot](https://github.com/shadowrootdev/awesome-agent-skills-mcp#vs-code--github-copilot)

Create or update `.vscode/mcp.json` in your project:

```
{
  "servers": {
    "awesome-agent-skills": {
      "command": "npx",
      "args": ["awesome-agent-skills-mcp"]
    }
  }
}
```

Or with a local installation:

```
{
  "servers": {
    "awesome-agent-skills": {
      "command": "node",
      "args": ["/path/to/awesome-agent-skills-mcp/dist/index.js"]
    }
  }
}
```

> **Important**: After adding the configuration, **fully quit VS Code** (Cmd+Q / Alt+F4) and reopen it for changes to take effect.

### Claude Desktop

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#claude-desktop](https://github.com/shadowrootdev/awesome-agent-skills-mcp#claude-desktop)

Add to your Claude Desktop configuration (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```
{
  "mcpServers": {
    "awesome-agent-skills": {
      "command": "npx",
      "args": ["awesome-agent-skills-mcp"]
    }
  }
}
```

### OpenCode

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#opencode](https://github.com/shadowrootdev/awesome-agent-skills-mcp#opencode)

Add to `~/.config/opencode/opencode.json`:

```
{
  "mcp": {
    "awesome-agent-skills": {
      "type": "local",
      "command": ["npx", "awesome-agent-skills-mcp"],
      "enabled": true
    }
  }
}
```

### Environment Variables

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#environment-variables](https://github.com/shadowrootdev/awesome-agent-skills-mcp#environment-variables)

| Variable | Default | Description |
|---|---|---|
| SKILLS_REPO_URL | https://github.com/VoltAgent/awesome-agent-skills.git | Skills repository URL |
| SKILLS_CACHE_DIR | .cache | Cache directory path |
| SKILLS_SYNC_INTERVAL | 60 | Auto-sync interval in minutes (0 to disable) |
| LOG_LEVEL | info | Logging level (debug, info, warn, error) |

---

## Available Skills

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#available-skills](https://github.com/shadowrootdev/awesome-agent-skills-mcp#available-skills)

The server provides access to **100+ skills** from leading organizations:

### Anthropic

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#anthropic](https://github.com/shadowrootdev/awesome-agent-skills-mcp#anthropic)

Document processing, presentation creation, spreadsheet manipulation, PDF handling, algorithmic art, MCP building, and more.

| Skill | Description |
|---|---|
| docx | Create, edit, and analyze Word documents |
| pptx | PowerPoint presentation creation and editing |
| xlsx | Spreadsheet manipulation with formulas |
| pdf | PDF processing and form filling |
| mcp-builder | Guide for creating MCP servers |
| webapp-testing | Playwright-based web app testing |

### Vercel

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#vercel](https://github.com/shadowrootdev/awesome-agent-skills-mcp#vercel)

React and Next.js best practices, deployment, and performance optimization.

| Skill | Description |
|---|---|
| react-best-practices | React performance optimization guidelines |
| next-best-practices | Next.js conventions and patterns |
| web-design-guidelines | UI/UX compliance review |
| vercel-deploy | Deploy apps to Vercel |

### Trail of Bits

[https://github.com/shadowrootdev/awesome-agent-skills-mcp#trail-of-bits](https://github.com/shadowrootdev/awesome-agent-skills-mcp#trail-of-bits)
## gBrain Temporal Metadata

- content_timestamp: 2024-11-05
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q4
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

