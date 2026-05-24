---
repo: 01-ai/langcrew
url: https://github.com/01-ai/langcrew
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - 01-ai/langcrew: A high-level multi-agent development framework built on LangGraph, combining CrewAI’s intuitive concepts with enterprise-grade features, ready-to-use templates, and full-stack UI for rapid productization. · GitHub

**Source**: https://github.com/01-ai/langcrew

---

[Skip to content](https://github.com/01-ai/langcrew#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[01-ai](https://github.com/01-ai)

/
**[langcrew](https://github.com/01-ai/langcrew)**

Public

- [Notifications](https://github.com/login?return_to=%2F01-ai%2Flangcrew)You must be signed in to change notification settings
- [Fork
    8](https://github.com/login?return_to=%2F01-ai%2Flangcrew)
- 
[Star
          114](https://github.com/login?return_to=%2F01-ai%2Flangcrew)

[https://github.com/01-ai/langcrew](https://github.com/01-ai/langcrew)

[Branches](https://github.com/01-ai/langcrew/branches)[Tags](https://github.com/01-ai/langcrew/tags)

[https://github.com/01-ai/langcrew/branches](https://github.com/01-ai/langcrew/branches)[https://github.com/01-ai/langcrew/tags](https://github.com/01-ai/langcrew/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History16 Commits16 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| libs | libs |  |  |
| web | web |  |  |
| .dockerignore | .dockerignore |  |  |
| .gitignore | .gitignore |  |  |
| .gitleaks.toml | .gitleaks.toml |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/01-ai/langcrew/blob/main/LICENSE](https://github.com/01-ai/langcrew/blob/main/LICENSE)[https://www.python.org/downloads/](https://www.python.org/downloads/)[https://langchain-ai.github.io/langgraph/](https://langchain-ai.github.io/langgraph/)[https://github.com/01-ai/langcrew/blob/main/docs](https://github.com/01-ai/langcrew/blob/main/docs)

# LangCrew

[https://github.com/01-ai/langcrew#langcrew](https://github.com/01-ai/langcrew#langcrew)

> LangCrew, as the OAK Framework, is a part of [Open AgentKit](https://github.com/01-ai/open-agentkit).

LangCrew is a high-level multi-agent development framework built on LangGraph, combining CrewAI's intuitive concepts with enterprise-grade capabilities and out-of-the-box core features for complex agent collaboration systems.

## Why LangCrew?

[https://github.com/01-ai/langcrew#why-langcrew](https://github.com/01-ai/langcrew#why-langcrew)

### Core Benefits

[https://github.com/01-ai/langcrew#core-benefits](https://github.com/01-ai/langcrew#core-benefits)

- 

**Beyond Traditional Flexible Paradigms**: Provides a simple, highly configurable development experience, featuring powerful built-in mechanisms such as HITL (Human-in-the-Loop), dynamic workflow orchestration, and event-driven processes—empowering stronger agent collaboration.

- 

**Full-Stack Support for Productization**: Comes with an accompanying Agent-UI protocol and React component library, enabling the frontend to clearly visualize agent planning, scheduling, execution processes, and tool invocation details. This significantly accelerates the journey from agent development to productization, allowing for rapid delivery to users.

- 

**Application Templates for Fast Launch**: Offers a rich variety of ready-to-use templates, enabling rapid prototyping and deployment of multi-agent solutions across a wide range of industries and scenarios.

- 

**Integrated Development and Operations Support**: Integrates free SaaS services, seamlessly covering system construction, deep observability, sandbox environments, and deployment resources—simplifying the entire lifecycle from development to operations.

### Comparison with Other Frameworks

[https://github.com/01-ai/langcrew#comparison-with-other-frameworks](https://github.com/01-ai/langcrew#comparison-with-other-frameworks)

| Aspect | LangGraph | CrewAI | LangCrew |
|---|---|---|---|
| Abstraction | Low-level primitives | High-level patterns | High-level on LangGraph |
| Development | Build from scratch | Simple but limited | Best practices pre-built |
| HITL | Basic interrupt/resume | Limited support | Advanced approval system + bilingual UI |
| Memory | Complete primitives/docs | Simple context | LangGraph native + langmem integration |
| Tools | LangChain only | Custom only | Unified registry + LangCrew-Tools |
| UI | None | Basic examples | Full React components |
| Observability | LangSmith integration | Enterprise edition | LangSmith + LangTrace integration |
| Deployment | Platform available | Enterprise edition | Platform (Coming Soon) |

### Key Differentiators

[https://github.com/01-ai/langcrew#key-differentiators](https://github.com/01-ai/langcrew#key-differentiators)

- 

**Lower LangGraph's Barrier**: LangCrew eliminates the complexity of LangGraph by providing pre-built, production-tested implementations of agent orchestration, memory management, and tool integration - no need to make architectural decisions or build foundational components from scratch.

- 

**Enterprise-Grade Open Source**: While CrewAI offers simplicity, LangCrew brings enterprise features to the open-source community - including sophisticated HITL capabilities, multi-layer memory, security guardrails, and comprehensive observability that have been carefully crafted and battle-tested.

- 

**Best of Both Worlds**: Combines LangGraph's power and flexibility with CrewAI's intuitive concepts (crew, agent, task), while adding production-ready components that neither framework provides out of the box.

## Project Components

[https://github.com/01-ai/langcrew#project-components](https://github.com/01-ai/langcrew#project-components)

### Core Framework (`libs/langcrew/`)

[https://github.com/01-ai/langcrew#core-framework-libslangcrew](https://github.com/01-ai/langcrew#core-framework-libslangcrew)

The heart of LangCrew - a high-level abstraction over LangGraph that provides multi-agent orchestration, memory management, and production-ready features.

- [Full documentation →](https://github.com/01-ai/langcrew/blob/main/libs/langcrew/README.md)

### Tool Library (`libs/langcrew-tools/`)

[https://github.com/01-ai/langcrew#tool-library-libslangcrew-tools](https://github.com/01-ai/langcrew#tool-library-libslangcrew-tools)

Production-ready tools for agent workflows including browser automation, cloud phone control, sandboxed code interpreter, and more.

- [Explore tools →](https://github.com/01-ai/langcrew/blob/main/libs/langcrew-tools/README.md)

### Web Platform (`web/`)

[https://github.com/01-ai/langcrew#web-platform-web](https://github.com/01-ai/langcrew#web-platform-web)

Full-stack UI for agent visualization with React components, real-time streaming, and human-in-the-loop interfaces.

- [UI documentation →](https://github.com/01-ai/langcrew/blob/main/web/README.md)

### Examples & Templates (`examples/`)

[https://github.com/01-ai/langcrew#examples--templates-examples](https://github.com/01-ai/langcrew#examples--templates-examples)

Industry-specific solutions ready for deployment:

- [Recruitment System](https://github.com/01-ai/langcrew/blob/main/examples/recruitment) - Multi-agent candidate screening
- [Marketing Strategy](https://github.com/01-ai/langcrew/blob/main/examples/marketing-strategy) - Campaign planning automation
- [Game Development](https://github.com/01-ai/langcrew/blob/main/examples/game-builder-crew) - AI content generation
- [Travel Planning](https://github.com/01-ai/langcrew/blob/main/examples/surprise-trip) - Intelligent itinerary creation
- [Job Posting](https://github.com/01-ai/langcrew/blob/main/examples/job-posting) - Automated job description generation

### Documentation (`docs/`)

[https://github.com/01-ai/langcrew#documentation-docs](https://github.com/01-ai/langcrew#documentation-docs)

Comprehensive guides and API references built with Astro Starlight.

- [Getting Started](https://github.com/01-ai/langcrew/blob/main/docs/src/content/docs/guides/quickstart.mdx) - Build your first agent
- [Core Concepts](https://github.com/01-ai/langcrew/blob/main/docs/src/content/docs/concepts) - Understanding agents, tasks, and crews

## Quick Start

[https://github.com/01-ai/langcrew#quick-start](https://github.com/01-ai/langcrew#quick-start)

### Local Development

[https://github.com/01-ai/langcrew#local-development](https://github.com/01-ai/langcrew#local-development)

**Backend Server:**

```
# 1. Clone repository
git clone https://github.com/01-ai/langcrew.git

# 2. Install uv (choose one method)
# Option A: Official installer (recommended)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Option B: Using pip
pip install uv

# 3. Configure API Key
export OPENAI_API_KEY=your-openai-key   # or ANTHROPIC_API_KEY / DASHSCOPE_API_KEY

# 4. Run the Server
cd langcrew/examples/components/web/web_chat
uv run run_server.py
```

The server will start at **[http://localhost:8000](http://localhost:8000)**

**Frontend Interface:**

```
# 1. Navigate to web directory
cd langcrew/web

# 2. Install dependencies and start development server
pnpm install
pnpm dev
```

Open your browser to **[http://localhost:3600/chat](http://localhost:3600/chat)**

### Docker Compose

[https://github.com/01-ai/langcrew#docker-compose](https://github.com/01-ai/langcrew#docker-compose)

**Prerequisites:** Ensure Docker Compose is installed. If you get "command not found" errors:

```
# Install Docker Compose (choose one method)
# Option 1: Using Docker Desktop (recommended) - includes Compose
# Download from: https://www.docker.com/products/docker-desktop

# Option 2: Using Homebrew (macOS)
brew install docker-compose

# Option 3: Manual installation (Linux/macOS)
curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

#### Quick Start with Docker Compose

[https://github.com/01-ai/langcrew#quick-start-with-docker-compose](https://github.com/01-ai/langcrew#quick-start-with-docker-compose)

Launch the complete LangCrew chat application with frontend and backend services:

```
# From the repository root
export OPENAI_API_KEY=your-openai-key   # or ANTHROPIC_API_KEY / DASHSCOPE_API_KEY

# Optional configuration
export LOG_LEVEL=info # debug|info|warning|error

# Start services
docker compose up --build
```

**Available endpoints:**

- **Web Chat Interface**: [http://localhost:3600](http://localhost:3600)
- **Backend API Documentation**: [http://localhost:8000/docs](http://localhost:8000/docs)

## Contributing

[https://github.com/01-ai/langcrew#contributing](https://github.com/01-ai/langcrew#contributing)

You are welcome to open issues or submit PRs to improve this app, however, please note that we may not review all suggestions.

## License

[https://github.com/01-ai/langcrew#license](https://github.com/01-ai/langcrew#license)

This project is licensed under the MIT License. See the LICENSE file for details.

## About

         A high-level multi-agent development framework built on LangGraph, combining CrewAI’s intuitive concepts with enterprise-grade features, ready-to-use templates, and full-stack UI for rapid productization.       

[langcrew.ai](https://langcrew.ai)

### Resources

[Readme](https://github.com/01-ai/langcrew#readme-ov-file)

### License

[MIT license](https://github.com/01-ai/langcrew#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/01-ai/langcrew/activity)

[Custom properties](https://github.com/01-ai/langcrew/custom-properties)

### Stars

[114
        stars](https://github.com/01-ai/langcrew/stargazers)

### Watchers

[2
        watching](https://github.com/01-ai/langcrew/watchers)

### Forks

[8
        forks](https://github.com/01-ai/langcrew/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2F01-ai%2Flangcrew&report=01-ai+%28user%29)

## [Releases](https://github.com/01-ai/langcrew/releases)

No releases published

## [Packages
      0](https://github.com/orgs/01-ai/packages?repo_name=langcrew)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/01-ai/langcrew/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          75.0%](https://github.com/01-ai/langcrew/search?l=python)
- [TypeScript
          23.3%](https://github.com/01-ai/langcrew/search?l=typescript)
- [CSS
          0.8%](https://github.com/01-ai/langcrew/search?l=css)
- [Less
          0.5%](https://github.com/01-ai/langcrew/search?l=less)
- [JavaScript
          0.3%](https://github.com/01-ai/langcrew/search?l=javascript)
- [Dockerfile
          0.1%](https://github.com/01-ai/langcrew/search?l=dockerfile)

     You can’t perform that action at this time.
