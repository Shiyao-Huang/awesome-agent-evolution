---
repo: langchain-ai/open-swe
url: https://github.com/langchain-ai/open-swe
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - langchain-ai/open-swe: An Open-Source Asynchronous Coding Agent · GitHub

**Source**: https://github.com/langchain-ai/open-swe

---

[Skip to content](https://github.com/langchain-ai/open-swe#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[langchain-ai](https://github.com/langchain-ai)

/
**[open-swe](https://github.com/langchain-ai/open-swe)**

Public

- [Notifications](https://github.com/login?return_to=%2Flangchain-ai%2Fopen-swe)You must be signed in to change notification settings
- [Fork
    1.1k](https://github.com/login?return_to=%2Flangchain-ai%2Fopen-swe)
- 
[Star
          9.8k](https://github.com/login?return_to=%2Flangchain-ai%2Fopen-swe)

[https://github.com/langchain-ai/open-swe](https://github.com/langchain-ai/open-swe)

[Branches](https://github.com/langchain-ai/open-swe/branches)[Tags](https://github.com/langchain-ai/open-swe/tags)

[https://github.com/langchain-ai/open-swe/branches](https://github.com/langchain-ai/open-swe/branches)[https://github.com/langchain-ai/open-swe/tags](https://github.com/langchain-ai/open-swe/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History740 Commits740 Commits |  |  |  |
| .github | .github |  |  |
| .vscode | .vscode |  |  |
| agent | agent |  |  |
| evals/reviewer | evals/reviewer |  |  |
| scripts | scripts |  |  |
| static | static |  |  |
| tests | tests |  |  |
| ui | ui |  |  |
| .codespellignore | .codespellignore |  |  |
| .dockerignore | .dockerignore |  |  |
| .gitignore | .gitignore |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CUSTOMIZATION.md | CUSTOMIZATION.md |  |  |
| Dockerfile | Dockerfile |  |  |
| INSTALLATION.md | INSTALLATION.md |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| REVIEWER_DESIGN.md | REVIEWER_DESIGN.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| default_prompt.md | default_prompt.md |  |  |
| langgraph.json | langgraph.json |  |  |
| pyproject.toml | pyproject.toml |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/langchain-ai/open-swe](https://github.com/langchain-ai/open-swe)

### Open-source framework for building your org's internal coding agent.

[https://github.com/langchain-ai/open-swe#open-source-framework-for-building-your-orgs-internal-coding-agent](https://github.com/langchain-ai/open-swe#open-source-framework-for-building-your-orgs-internal-coding-agent)

[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)[https://github.com/langchain-ai/open-swe/stargazers](https://github.com/langchain-ai/open-swe/stargazers)[https://github.com/langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)[https://github.com/langchain-ai/deepagents](https://github.com/langchain-ai/deepagents)[https://x.com/langchain](https://x.com/langchain)

Elite engineering orgs like Stripe, Ramp, and Coinbase are building their own internal coding agents — Slackbots, CLIs, and web apps that meet engineers where they already work. These agents are connected to internal systems with the right context, permissioning, and safety boundaries to operate with minimal human oversight.

Open SWE is the open-source version of this pattern. Built on [LangGraph](https://langchain-ai.github.io/langgraph/) and [Deep Agents](https://github.com/langchain-ai/deepagents), it gives you the same architecture those companies built internally: cloud sandboxes, Slack and Linear invocation, subagent orchestration, and automatic PR creation — ready to customize for your own codebase and workflows.

Note

💬 Read the **announcement blog post [here](https://blog.langchain.com/open-swe-an-open-source-framework-for-internal-coding-agents/)**

---

## Architecture

[https://github.com/langchain-ai/open-swe#architecture](https://github.com/langchain-ai/open-swe#architecture)

Open SWE makes the same core architectural decisions as the best internal coding agents. Here's how it maps to the patterns described in [this overview](https://x.com/kishan_dahya/status/2028971339974099317) of Stripe's Minions, Ramp's Inspect, and Coinbase's Cloudbot:

### 1. Agent Harness — Composed on Deep Agents

[https://github.com/langchain-ai/open-swe#1-agent-harness--composed-on-deep-agents](https://github.com/langchain-ai/open-swe#1-agent-harness--composed-on-deep-agents)

Rather than forking an existing agent or building from scratch, Open SWE **composes** on the [Deep Agents](https://github.com/langchain-ai/deepagents) framework — similar to how Ramp built on top of OpenCode. This gives you an upgrade path (pull in upstream improvements) while letting you customize the orchestration, tools, and middleware for your org.

```
create_deep_agent(
    model="openai:gpt-5.5",
    system_prompt=construct_system_prompt(...),
    tools=[http_request, fetch_url, linear_comment, slack_thread_reply],
    backend=sandbox_backend,
    middleware=[ToolErrorMiddleware(), check_message_queue_before_model, ...],
)
```

### 2. Sandbox — Isolated Cloud Environments

[https://github.com/langchain-ai/open-swe#2-sandbox--isolated-cloud-environments](https://github.com/langchain-ai/open-swe#2-sandbox--isolated-cloud-environments)

Every task runs in its own **isolated cloud sandbox** — a remote Linux environment with full shell access. The repo is cloned in, the agent gets full permissions, and the blast radius of any mistake is fully contained. No production access, no confirmation prompts.

Open SWE supports multiple sandbox providers out of the box — [Modal](https://modal.com/), [Daytona](https://www.daytona.io/), [Runloop](https://www.runloop.ai/), and [LangSmith](https://smith.langchain.com/) — and you can plug in your own. See the [Customization Guide](https://github.com/langchain-ai/open-swe/blob/main/CUSTOMIZATION.md#1-sandbox) for details.

This follows the principle all three companies converge on: **isolate first, then give full permissions inside the boundary.**

- Each thread gets a persistent sandbox (reused across follow-up messages)
- Sandboxes auto-recreate if they become unreachable
- Multiple tasks run in parallel — each in its own sandbox, no queuing

### 3. Tools — Curated, Not Accumulated

[https://github.com/langchain-ai/open-swe#3-tools--curated-not-accumulated](https://github.com/langchain-ai/open-swe#3-tools--curated-not-accumulated)

Stripe's key insight: *tool curation matters more than tool quantity.* Open SWE follows this principle with a small, focused toolset:

| Tool | Purpose |
|---|---|
| execute | Shell commands in the sandbox |
| fetch_url | Fetch web pages as markdown |
| http_request | API calls (GET, POST, etc.) |
| linear_comment | Post updates to Linear tickets |
| slack_thread_reply | Reply in Slack threads |

GitHub operations are performed with `GH_TOKEN=dummy gh` inside the sandbox, backed by the LangSmith proxy. Plus the built-in Deep Agents tools: `read_file`, `write_file`, `edit_file`, `ls`, `glob`, `grep`, `write_todos`, and `task` (subagent spawning).

### 4. Context Engineering — AGENTS.md + Source Context

[https://github.com/langchain-ai/open-swe#4-context-engineering--agentsmd--source-context](https://github.com/langchain-ai/open-swe#4-context-engineering--agentsmd--source-context)

Open SWE gathers context from two sources:

- **`AGENTS.md`** — If the repo contains an `AGENTS.md` file at the root, it's read from the sandbox and injected into the system prompt. This is your repo-level equivalent of Stripe's rule files: encoding conventions, testing requirements, and architectural decisions that every agent run should follow.
- **Source context** — The full Linear issue (title, description, comments) or Slack thread history is assembled and passed to the agent, so it starts with rich context rather than discovering everything through tool calls.

### 5. Orchestration — Subagents + Middleware

[https://github.com/langchain-ai/open-swe#5-orchestration--subagents--middleware](https://github.com/langchain-ai/open-swe#5-orchestration--subagents--middleware)

Open SWE's orchestration has two layers:

**Subagents:** The Deep Agents framework natively supports spawning child agents via the `task` tool. The main agent can fan out independent subtasks to isolated subagents — each with its own middleware stack, todo list, and file operations. This is similar to Ramp's child sessions for parallel work.

**Middleware:** Deterministic middleware hooks run around the agent loop:

- **`check_message_queue_before_model`** — Injects follow-up messages (Linear comments or Slack messages that arrive mid-run) before the next model call. You can message the agent while it's working and it'll pick up your input at its next step.
- **`notify_step_limit_reached`** — After-agent hook that posts a Slack reply when the agent hits the model-call limit, so users get a clear signal instead of silence.
- **`ToolErrorMiddleware`** — Catches and handles tool errors gracefully.

### 6. Invocation — Slack, Linear, and GitHub

[https://github.com/langchain-ai/open-swe#6-invocation--slack-linear-and-github](https://github.com/langchain-ai/open-swe#6-invocation--slack-linear-and-github)

All three companies in the article converge on **Slack as the primary invocation surface**. Open SWE does the same:

- **Slack** — Mention the bot in any thread. Supports `repo:owner/name` syntax to specify which repo to work on. The agent replies in-thread with status updates and PR links.
- **Linear** — Comment `@openswe` on any issue. The agent reads the full issue context, reacts with 👀 to acknowledge, and posts results back as comments.
- **GitHub** — Tag `@openswe` in PR comments on agent-created PRs to have it address review feedback and push fixes to the same branch.

Each invocation creates a deterministic thread ID, so follow-up messages on the same issue or thread route to the same running agent.

### 7. Validation — Prompt-Driven

[https://github.com/langchain-ai/open-swe#7-validation--prompt-driven](https://github.com/langchain-ai/open-swe#7-validation--prompt-driven)

The agent is instructed to run linters, formatters, and tests before committing, and is responsible end-to-end for committing, pushing, opening/updating the draft PR, and replying in the source channel. This is an area where you can extend Open SWE for your org: add deterministic CI checks, visual verification, or review gates as additional middleware. See the [Customization Guide](https://github.com/langchain-ai/open-swe/blob/main/CUSTOMIZATION.md#6-middleware) for how.

---

## Comparison

[https://github.com/langchain-ai/open-swe#comparison](https://github.com/langchain-ai/open-swe#comparison)

| Decision | Open SWE | Stripe (Minions) | Ramp (Inspect) | Coinbase (Cloudbot) |
|---|---|---|---|---|
| Harness | Composed (Deep Agents/LangGraph) | Forked (Goose) | Composed (OpenCode) | Built from scratch |
| Sandbox | Pluggable (Modal, Daytona, Runloop, etc.) | AWS EC2 devboxes (pre-warmed) | Modal containers (pre-warmed) | In-house |
| Tools | ~15, curated | ~500, curated per-agent | OpenCode SDK + extensions | MCPs + custom Skills |
| Context | AGENTS.md + issue/thread | Rule files + pre-hydration | OpenCode built-in | Linear-first + MCPs |
| Orchestration | Subagents + middleware | Blueprints (deterministic + agentic) | Sessions + child sessions | Three modes |
| Invocation | Slack, Linear, GitHub | Slack + embedded buttons | Slack + web + Chrome extension | Slack-native |
| Validation | Prompt-driven | 3-layer (local + CI + 1 retry) | Visual DOM verification | Agent councils + auto-merge |

---

## Features

[https://github.com/langchain-ai/open-swe#features](https://github.com/langchain-ai/open-swe#features)

- **Trigger from Linear, Slack, or GitHub** — mention `@openswe` in a comment to kick off a task
- **Instant acknowledgement** — reacts with 👀 the moment it picks up your message
- **Message it while it's running** — send follow-up messages mid-task and it'll pick them up before its next step
- **Run multiple tasks in parallel** — each task runs in its own isolated cloud sandbox
- **GitHub OAuth built-in** — authenticates with your GitHub account automatically
- **Opens PRs automatically** — commits changes and opens a draft PR when done, linked back to your ticket
- **Subagent support** — the agent can spawn child agents for parallel subtasks

---

## Getting Started

[https://github.com/langchain-ai/open-swe#getting-started](https://github.com/langchain-ai/open-swe#getting-started)

- **[Installation Guide](https://github.com/langchain-ai/open-swe/blob/main/INSTALLATION.md)** — GitHub App creation, LangSmith, Linear/Slack/GitHub triggers, and production deployment
- **[Customization Guide](https://github.com/langchain-ai/open-swe/blob/main/CUSTOMIZATION.md)** — swap the sandbox, model, tools, triggers, system prompt, and middleware for your org

## License

[https://github.com/langchain-ai/open-swe#license](https://github.com/langchain-ai/open-swe#license)

MIT

## About

         An Open-Source Asynchronous Coding Agent       

[openswe.vercel.app](https://openswe.vercel.app)

### Topics

[agent](https://github.com/topics/agent)[ai](https://github.com/topics/ai)[openai](https://github.com/topics/openai)[agents](https://github.com/topics/agents)[llm](https://github.com/topics/llm)[llms](https://github.com/topics/llms)[anthropic](https://github.com/topics/anthropic)[claudecode](https://github.com/topics/claudecode)

### Resources

[Readme](https://github.com/langchain-ai/open-swe#readme-ov-file)

### License

[MIT license](https://github.com/langchain-ai/open-swe#MIT-1-ov-file)

### Code of conduct

[Code of conduct](https://github.com/langchain-ai/open-swe#coc-ov-file)

### Contributing

[Contributing](https://github.com/langchain-ai/open-swe#contributing-ov-file)

### Security policy

[Security policy](https://github.com/langchain-ai/open-swe#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/langchain-ai/open-swe/activity)

[Custom properties](https://github.com/langchain-ai/open-swe/custom-properties)

### Stars

[9.8k
        stars](https://github.com/langchain-ai/open-swe/stargazers)

### Watchers

[52
        watching](https://github.com/langchain-ai/open-swe/watchers)

### Forks

[1.1k
        forks](https://github.com/langchain-ai/open-swe/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Flangchain-ai%2Fopen-swe&report=langchain-ai+%28user%29)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/langchain-ai/open-swe/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          91.4%](https://github.com/langchain-ai/open-swe/search?l=python)
- [TypeScript
          7.4%](https://github.com/langchain-ai/open-swe/search?l=typescript)
- 

Other

1.2%

     You can’t perform that action at this time.
