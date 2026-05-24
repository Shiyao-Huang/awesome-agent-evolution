---
repo: adam-s/intercept
url: https://github.com/adam-s/intercept
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - adam-s/intercept: Turn any website into a typed JSON API using self improving agents · GitHub

**Source**: https://github.com/adam-s/intercept

---

[Skip to content](https://github.com/adam-s/intercept#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[adam-s](https://github.com/adam-s)

/
**[intercept](https://github.com/adam-s/intercept)**

Public

- [Notifications](https://github.com/login?return_to=%2Fadam-s%2Fintercept)You must be signed in to change notification settings
- [Fork
    15](https://github.com/login?return_to=%2Fadam-s%2Fintercept)
- 
[Star
          127](https://github.com/login?return_to=%2Fadam-s%2Fintercept)

[https://github.com/adam-s/intercept](https://github.com/adam-s/intercept)

[Branches](https://github.com/adam-s/intercept/branches)[Tags](https://github.com/adam-s/intercept/tags)

[https://github.com/adam-s/intercept/branches](https://github.com/adam-s/intercept/branches)[https://github.com/adam-s/intercept/tags](https://github.com/adam-s/intercept/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History9 Commits9 Commits |  |  |  |
| .claude | .claude |  |  |
| .github/workflows | .github/workflows |  |  |
| apps | apps |  |  |
| docs/blog | docs/blog |  |  |
| domains/boardshop | domains/boardshop |  |  |
| packages | packages |  |  |
| scripts | scripts |  |  |
| services/python | services/python |  |  |
| tests/e2e | tests/e2e |  |  |
| .dockerignore | .dockerignore |  |  |
| .env.example | .env.example |  |  |
| .env.production.example | .env.production.example |  |  |
| .gitignore | .gitignore |  |  |
| .npmrc | .npmrc |  |  |
| Caddyfile | Caddyfile |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| biome.json | biome.json |  |  |
| docker-compose.prod.yml | docker-compose.prod.yml |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| package.json | package.json |  |  |
| playwright.config.ts | playwright.config.ts |  |  |
| pnpm-lock.yaml | pnpm-lock.yaml |  |  |
| pnpm-workspace.yaml | pnpm-workspace.yaml |  |  |
| tsconfig.base.json | tsconfig.base.json |  |  |
| turbo.json | turbo.json |  |  |
| vitest.config.ts | vitest.config.ts |  |  |
| View all files |  |  |  |

## Repository files navigation

# Interceptor

[https://github.com/adam-s/intercept#interceptor](https://github.com/adam-s/intercept#interceptor)

   Turn any website into a typed JSON API — using Claude Code with self improving agents. 

---

Reverse-engineers any website by doing a breadth search across every transport (JSON, WebSocket, WebRTC, GraphQL, SSE, HLS, PubSub), listing them all, and generating a typed JSON API that bypasses almost all bot protections — including Turnstile. I didn't include the ability, but it bypassed the most advanced ChatGPT + Turnstile. Built with self-improving Claude Code agents that rewrite their own instructions until fresh agents consistently succeed.

Once connected to a page, it intercepts every byte of network traffic — then actively drives the page to surface endpoints that only fire on interaction. It types into forms, clicks buttons, scrolls, triggers modals, paginates, submits searches, and walks through multi-step flows, watching what each action produces on the wire. Every request gets captured with its method, headers, payload shape, and response, then classified by transport (JSON, WebSocket, WebRTC, GraphQL, SSE, HLS, PubSub). The result is a complete map of the site's real API surface — including the hidden endpoints that only exist behind a click — turned into typed proxy routes you can curl.

---

## Prerequisites

[https://github.com/adam-s/intercept#prerequisites](https://github.com/adam-s/intercept#prerequisites)

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed and authenticated

## Getting Started

[https://github.com/adam-s/intercept#getting-started](https://github.com/adam-s/intercept#getting-started)

```
git clone https://github.com/adam-s/intercept.git
cd intercept
claude
```

That's it. Claude Code reads the `.claude/` directory automatically — it contains all the rules, skills, and agent definitions that drive the system. It handles installing dependencies, starting services, and everything else. Just tell it what you want.

### Discover a website's API

[https://github.com/adam-s/intercept#discover-a-websites-api](https://github.com/adam-s/intercept#discover-a-websites-api)

Tell Claude what site you want:

```
> Discover the API for Hacker News
```

Or use the slash command directly:

```
> /api-discovery https://news.ycombinator.com
```

Claude will:

1. Connect a browser to the site
2. Navigate pages and capture network traffic
3. Classify every data transport (JSON, WebSocket, GraphQL, SSE, etc.)
4. Build typed proxy routes that return clean JSON
5. Test every route through the API server

When it's done, you can curl your new API:

```
curl localhost:3001/api/hackernews/top?page=1&limit=5
curl localhost:3001/api/hackernews/search?query=rust
curl localhost:3001/api/hackernews/story/12345
```

### Build a dashboard

[https://github.com/adam-s/intercept#build-a-dashboard](https://github.com/adam-s/intercept#build-a-dashboard)

Once routes exist, ask Claude to build a frontend:

```
> /dashboard-builder
```

Or just describe what you want:

```
> Build a dashboard page for Hacker News with search, story list, and comments
```

Claude builds a Next.js page at `apps/web/app/<domain>/page.tsx` that calls your proxy routes.

### Build an entire app from a description

[https://github.com/adam-s/intercept#build-an-entire-app-from-a-description](https://github.com/adam-s/intercept#build-an-entire-app-from-a-description)

```
> /app
```

Describe what you want in plain language ("compare ticket prices across sites", "track HN trends over time"). Claude asks clarifying questions, discovers the APIs, and builds the dashboard.

## Slash Commands

[https://github.com/adam-s/intercept#slash-commands](https://github.com/adam-s/intercept#slash-commands)

Type `/` in Claude Code to see available commands:

| Command | What it does |
|---|---|
| /api-discovery | Discover a website's API and create proxy routes |
| /dashboard-builder | Build a Next.js page for existing routes |
| /app | Build a complete app from a plain-language description |
| /visual-dev | Screenshot-driven UI iteration |
| /debug-logs | Iterative debugging with targeted logs |
| /ci-check | Run lint, build, typecheck, and tests |
| /instruction-tuning | Improve the discovery instructions by testing agents on real sites |
| /instruction-dashboard-tuning | Improve dashboard-building instructions the same way |
| /ec2-deploy | Deploy to production |

## How It Works

[https://github.com/adam-s/intercept#how-it-works](https://github.com/adam-s/intercept#how-it-works)

Claude Code reads the `.claude/` directory on startup. That directory contains:

- **Rules** — mandatory protocols the agent follows (discovery steps, workflow gates, compliance checks)
- **Skills** — slash commands that orchestrate multi-step tasks
- **Agents** — specialized sub-agent identities (discovery, dashboard, reviewer)
- **Hooks** — shell scripts that run on events (cleanup, worktree isolation, write guards)

When you ask Claude to discover a site's API, it follows a 5-step protocol: pre-flight analysis, browser traffic gathering, HTML/JS scanning, transport classification, and route building. The protocol was refined over 47+ iterations of self-improving instruction tuning — agents testing the instructions, failing, and the instructions being fixed until fresh agents consistently succeed.

The generated domain plugins live in `domains/<name>/` and expose routes through the Hono API server at `localhost:3001/api/<domain>/<path>`.

## The Self-Improving Skill

[https://github.com/adam-s/intercept#the-self-improving-skill](https://github.com/adam-s/intercept#the-self-improving-skill)

The `.claude/` instructions aren't static — they're the product of iterative refinement. The `/instruction-tuning` skill launches parallel agents against real websites, scores their results, diagnoses failures, and fixes the instructions. The agents' code is throwaway. The instruction improvements are the product.

```
graph TD
    O[Orchestrator] -->|"launches 8 parallel agents<br/>in isolated worktrees"| A1[Agent 1]
    O --> A2[Agent 2]
    O --> AN[Agent N...]

    A1 --> S[Score against 18-check scorecard]
    A2 --> S
    AN --> S

    S --> D{All passed?}
    D -- Yes --> C["Instructions converged"]
    D -- No --> F["Diagnose: which rule<br/>was too soft or missing?"]
    F --> R["Fix the instruction<br/>(generalized, not site-specific)"]
    R --> CC["Consistency check<br/>across all .claude/ files"]
    CC --> O
```

Loading

```
Iteration 1:  "you should capture traffic first" → agent skips it
              → Fix: "MUST produce elimination table BEFORE code"

Iteration 15: Agents miss WebSocket transports
              → Fix: Add real-time transport checklist to pre-flight

Iteration 44: Two-pass strategy doubles transport coverage (2.1 → 4.3 avg)
              → 70+ routes, new transports: WS, SSE, HLS, PubSub
```

## Tech Stack

[https://github.com/adam-s/intercept#tech-stack](https://github.com/adam-s/intercept#tech-stack)

TypeScript · Hono · Next.js · Patchright · Turborepo · pnpm · Vitest · Biome · Claude Code

## License

[https://github.com/adam-s/intercept#license](https://github.com/adam-s/intercept#license)

MIT

---

Warning

**Experimental Software — Use at Your Own Risk**

This tool automates a real browser to intercept network traffic on third-party websites. Before using it against any target:

- **Get explicit permission.** Intercepting traffic on sites you do not own or operate may violate their Terms of Service, the Computer Fraud and Abuse Act (CFAA), the GDPR, or equivalent laws in your jurisdiction. Only run this against sites you own, operate, or have written authorization to test.
- **No scraping guarantees.** Bot-detection systems (Cloudflare, Akamai, Kasada, DataDome) may flag or block your IP. Some sites explicitly prohibit automated access. Check `robots.txt` and the site's ToS before proceeding.
- **AI agent autonomy.** The discovery and instruction-tuning agents make autonomous decisions — navigating pages, clicking elements, extracting data, and writing code — based on natural-language rules. Their behavior is not fully deterministic and has not been validated against every possible target.
- **Resource consumption.** Agents burn through API tokens (50K-170K per agent, 400K-1.3M for a parallel batch). Sub-agents can become detached zombie processes. Chrome instances can be orphaned. Run `bash .claude/hooks/cleanup-agents.sh` to clean up.

**This is purely experimental research code.** The authors make no warranties, express or implied, regarding fitness for any particular purpose, correctness, or safety. The authors are not responsible for any consequences — legal, financial, technical, or otherwise — arising from the use or misuse of this software. Use it only in contexts where you have the legal right to do so.

## About

         Turn any website into a typed JSON API using self improving agents       

### Resources

[Readme](https://github.com/adam-s/intercept#readme-ov-file)

### License

[MIT license](https://github.com/adam-s/intercept#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/adam-s/intercept/activity)

### Stars

[127
        stars](https://github.com/adam-s/intercept/stargazers)

### Watchers

[0
        watching](https://github.com/adam-s/intercept/watchers)

### Forks

[15
        forks](https://github.com/adam-s/intercept/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fadam-s%2Fintercept&report=adam-s+%28user%29)

## [Releases](https://github.com/adam-s/intercept/releases)
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

