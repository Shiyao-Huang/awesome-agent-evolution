---
repo: incidentfox/self-learning-ai-agent
url: https://github.com/incidentfox/self-learning-ai-agent
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - incidentfox/self-learning-ai-agent: Self-learning AI agents that get smarter from your Slack, docs, meetings, and code. RAPTOR trees + knowledge graph + multi-strategy RAG. Drop into any Slack channel — it starts learning automatically. · GitHub

**Source**: https://github.com/incidentfox/self-learning-ai-agent

---

[Skip to content](https://github.com/incidentfox/self-learning-ai-agent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[incidentfox](https://github.com/incidentfox)

/
**[self-learning-ai-agent](https://github.com/incidentfox/self-learning-ai-agent)**

Public

- [Notifications](https://github.com/login?return_to=%2Fincidentfox%2Fself-learning-ai-agent)You must be signed in to change notification settings
- [Fork
    1](https://github.com/login?return_to=%2Fincidentfox%2Fself-learning-ai-agent)
- 
[Star
          1](https://github.com/login?return_to=%2Fincidentfox%2Fself-learning-ai-agent)

[https://github.com/incidentfox/self-learning-ai-agent](https://github.com/incidentfox/self-learning-ai-agent)

[Branches](https://github.com/incidentfox/self-learning-ai-agent/branches)[Tags](https://github.com/incidentfox/self-learning-ai-agent/tags)

[https://github.com/incidentfox/self-learning-ai-agent/branches](https://github.com/incidentfox/self-learning-ai-agent/branches)[https://github.com/incidentfox/self-learning-ai-agent/tags](https://github.com/incidentfox/self-learning-ai-agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History1 Commit1 Commit |  |  |  |
| .github/workflows | .github/workflows |  |  |
| agent-service | agent-service |  |  |
| config-service | config-service |  |  |
| infra | infra |  |  |
| launch | launch |  |  |
| learning-engine | learning-engine |  |  |
| meeting-bot | meeting-bot |  |  |
| scripts | scripts |  |  |
| slack-bot | slack-bot |  |  |
| tests | tests |  |  |
| web-ui | web-ui |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| BUILD_PLAN.md | BUILD_PLAN.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| docker-compose.prod.yml | docker-compose.prod.yml |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| slack-app-manifest.yml | slack-app-manifest.yml |  |  |
| View all files |  |  |  |

## Repository files navigation

# Self-Learning AI Agents

[https://github.com/incidentfox/self-learning-ai-agent#self-learning-ai-agents](https://github.com/incidentfox/self-learning-ai-agent#self-learning-ai-agents)

**AI agents that learn from your team's Slack, meetings, docs, and code — and get smarter every day.**

[https://github.com/incidentfox/self-learning-ai-agent/blob/main/LICENSE](https://github.com/incidentfox/self-learning-ai-agent/blob/main/LICENSE)

Add the bot to any Slack channel. It scans history, extracts knowledge, and starts answering questions — no manual setup required. New conversations are picked up daily, checked for conflicts with existing knowledge, and committed with human approval. The knowledge base just grows.

Under the hood: RAPTOR hierarchical trees, a knowledge graph, multi-strategy retrieval (semantic + BM25 + graph traversal), and 5 proactive behaviors that make the agent feel like a team member, not a search box.

---

## Quick Start

[https://github.com/incidentfox/self-learning-ai-agent#quick-start](https://github.com/incidentfox/self-learning-ai-agent#quick-start)

```
git clone https://github.com/incidentfox/self-learning-ai-agent.git
cd self-learning-ai-agent

cp .env.example .env
# Edit .env — set OPENAI_API_KEY and ANTHROPIC_API_KEY

make dev          # Starts postgres + config-service + learning-engine + agent-service
make dev-slack    # Also starts slack-bot (needs SLACK_BOT_TOKEN + SLACK_APP_TOKEN)
make dev-web      # Also starts web-ui on http://localhost:3000
```

### Prerequisites

[https://github.com/incidentfox/self-learning-ai-agent#prerequisites](https://github.com/incidentfox/self-learning-ai-agent#prerequisites)

- Docker and Docker Compose
- An OpenAI API key (for embeddings) + Anthropic API key (for completions)
- For Slack: a [Slack app with Socket Mode](https://github.com/incidentfox/self-learning-ai-agent#slack-app-setup)

---

## What It Does

[https://github.com/incidentfox/self-learning-ai-agent#what-it-does](https://github.com/incidentfox/self-learning-ai-agent#what-it-does)

### Self-Learning Loop

[https://github.com/incidentfox/self-learning-ai-agent#self-learning-loop](https://github.com/incidentfox/self-learning-ai-agent#self-learning-loop)

1. **Onboard** — Bot scans channel history, extracts knowledge, builds a RAPTOR tree
2. **Answer** — @mention the bot. It answers using multi-strategy RAG retrieval.
3. **Learn daily** — New messages → extract → conflict check → auto-approve or queue for review
4. **Correct** — Say "actually, it's X not Y" in a thread → bot detects and learns
5. **Escalate** — Low confidence → asks designated buddies in a private channel

### Proactive Behaviors

[https://github.com/incidentfox/self-learning-ai-agent#proactive-behaviors](https://github.com/incidentfox/self-learning-ai-agent#proactive-behaviors)

- **Daily digest** — Summary of questions answered, knowledge learned, corrections
- **Stale knowledge alerts** — Flags knowledge past its freshness threshold
- **Contradiction detection** — Catches when new info conflicts with existing knowledge
- **Follow-up tracking** — Reminds about open action items and decisions
- **Context surfacing** — Proactively injects relevant context when discussions match existing knowledge

### Use Cases

[https://github.com/incidentfox/self-learning-ai-agent#use-cases](https://github.com/incidentfox/self-learning-ai-agent#use-cases)

Every behavior is parameterized by the channel's use case:

| Use Case | Extraction Focus | Staleness | Example |
|---|---|---|---|
| Help Desk | FAQs, resolution patterns, escalation paths | 30 days | Support channels |
| Engineering | Architecture decisions, debugging patterns, conventions | 90 days | Engineering channels |
| Onboarding | Processes, contacts, tool guides, tribal knowledge | 60 days | New hire channels |
| Chief of Staff | Decisions, action items, blockers, competitive intel | 14 days | Strategy channels |
| Custom | Describe your team → LLM generates prompts | Configurable | Anything |

---

## Architecture

[https://github.com/incidentfox/self-learning-ai-agent#architecture](https://github.com/incidentfox/self-learning-ai-agent#architecture)

```
Slack → slack-bot (Bolt) → agent-service (LLM + RAG) → learning-engine (RAPTOR + Knowledge Graph)
Web UI → agent-service ↗                    ↕
                                     config-service (PostgreSQL + pgvector)
```

| Service | Port | Purpose |
|---|---|---|
| config-service | 8001 | Control plane: teams, channels, integrations, analytics |
| learning-engine | 8002 | Self-learning core: RAG, teaching, conflict resolution, pipelines |
| agent-service | 8003 | Chat agent with RAG tools, SSE streaming, public API |
| slack-bot | 3001 | Slack UI: OAuth, setup modals, chat, buddy escalation |
| web-ui | 3000 | Admin dashboard: knowledge explorer, analytics, chat |
| meeting-bot | 8004 | Meeting transcript processing (Recall.ai / Circleback) |

### Integrations

[https://github.com/incidentfox/self-learning-ai-agent#integrations](https://github.com/incidentfox/self-learning-ai-agent#integrations)

Connect data sources for automatic ingestion:

| Integration | What's Ingested | Method |
|---|---|---|
| Slack | Channel history, threads | Onboarding scan + daily |
| GitHub | README/docs, merged PRs | Daily crawl |
| Notion | Pages + block content | OAuth or API key |
| Confluence | Recently updated pages | API key |
| Jira | Issues (summary, status, assignee) | API key |
| Linear | Issues via GraphQL | API key |
| Zoom/Meets | Meeting transcripts | Recall.ai / Circleback webhook |

---

## Slack App Setup

[https://github.com/incidentfox/self-learning-ai-agent#slack-app-setup](https://github.com/incidentfox/self-learning-ai-agent#slack-app-setup)

### Option A: Import Manifest (Recommended)

[https://github.com/incidentfox/self-learning-ai-agent#option-a-import-manifest-recommended](https://github.com/incidentfox/self-learning-ai-agent#option-a-import-manifest-recommended)

1. Go to [api.slack.com/apps](https://api.slack.com/apps) → **Create New App** → **From a manifest**
2. Select your workspace
3. Paste the contents of [slack-app-manifest.yml](https://github.com/incidentfox/self-learning-ai-agent/blob/main/slack-app-manifest.yml)
4. Install to workspace
5. Copy **Bot User OAuth Token** (`xoxb-...`) → `SLACK_BOT_TOKEN` in `.env`
6. Go to **Socket Mode** → Enable → Create app-level token → copy (`xapp-...`) → `SLACK_APP_TOKEN` in `.env`

### Option B: Manual Setup

[https://github.com/incidentfox/self-learning-ai-agent#option-b-manual-setup](https://github.com/incidentfox/self-learning-ai-agent#option-b-manual-setup)

Create a Slack app with these scopes:

**Bot Token Scopes:**`app_mentions:read`, `channels:history`, `channels:read`, `chat:write`, `files:read`, `groups:history`, `groups:read`, `groups:write`, `im:history`, `im:read`, `im:write`, `reactions:write`, `users:read`, `commands`

**Event Subscriptions:**`app_mention`, `message.channels`, `message.groups`, `message.im`, `member_joined_channel`, `app_home_opened`

**Socket Mode:** Enabled

---

## Web UI

[https://github.com/incidentfox/self-learning-ai-agent#web-ui](https://github.com/incidentfox/self-learning-ai-agent#web-ui)

The admin dashboard at `http://localhost:3000` provides:

- **Dashboard** — Stats, activity feed, service health
- **Chat** — Talk to the agent from your browser (SSE streaming)
- **Knowledge Base** — Interactive RAPTOR tree visualization, search, detail panel
- **Teaching Queue** — Review and approve/reject pending knowledge
- **Integrations** — Connect and manage data sources
- **Analytics** — Questions answered, confidence trends, knowledge growth
- **Feed Knowledge** — Upload documents, paste URLs, or enter text directly

---

## API

[https://github.com/incidentfox/self-learning-ai-agent#api](https://github.com/incidentfox/self-learning-ai-agent#api)

The agent-service exposes a public REST API:

```
# Query the knowledge base
curl -X POST http://localhost:8003/api/v1/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What did we decide about pricing?", "team_id": "YOUR_TEAM_ID"}'

# Create an agent run
curl -X POST http://localhost:8003/api/v1/runs \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"query": "Summarize this week", "mode": "fast"}'
```

Full API docs at `http://localhost:8003/docs` (OpenAPI / Swagger).

---

## Deployment

[https://github.com/incidentfox/self-learning-ai-agent#deployment](https://github.com/incidentfox/self-learning-ai-agent#deployment)

### Local Development

[https://github.com/incidentfox/self-learning-ai-agent#local-development](https://github.com/incidentfox/self-learning-ai-agent#local-development)

```
make dev           # Core services
make dev-slack     # + Slack bot
make dev-web       # + Web UI
make test-e2e      # Run E2E tests (requires running services)
```

### Production (Docker Compose + EC2)

[https://github.com/incidentfox/self-learning-ai-agent#production-docker-compose--ec2](https://github.com/incidentfox/self-learning-ai-agent#production-docker-compose--ec2)

```
# Infrastructure (Terraform)
cd infra/terraform && terraform init && terraform apply

# Build AMD64 images → push to ECR (or use GitHub Actions)
git push origin main  # GHA builds automatically

# Deploy on EC2
ssh ubuntu@YOUR_EC2_IP
cd /opt/sla && docker compose -f docker-compose.prod.yml up -d
```

See [infra/](https://github.com/incidentfox/self-learning-ai-agent/blob/main/infra) for Terraform configs, nginx reverse proxy, and SSL setup scripts.

---

## Tech Stack

[https://github.com/incidentfox/self-learning-ai-agent#tech-stack](https://github.com/incidentfox/self-learning-ai-agent#tech-stack)

- **Backend**: Python 3.11, FastAPI, SQLAlchemy (async), Alembic
- **LLM**: litellm (provider-agnostic) — Claude Sonnet for completions, text-embedding-3-small for embeddings
- **Knowledge**: RAPTOR hierarchical trees + pgvector + NetworkX knowledge graph
- **Retrieval**: 6-strategy ensemble (semantic, BM25, graph, HyDE, multi-query, query decomposition)
- **Slack**: Bolt SDK with Socket Mode
- **Frontend**: Next.js 15, React 19, TailwindCSS v4
- **Database**: PostgreSQL 16 with pgvector extension
- **Infrastructure**: Docker Compose (dev), EC2 + nginx (staging), GHA CI/CD

---

## Contributing

[https://github.com/incidentfox/self-learning-ai-agent#contributing](https://github.com/incidentfox/self-learning-ai-agent#contributing)

See [CONTRIBUTING.md](https://github.com/incidentfox/self-learning-ai-agent/blob/main/CONTRIBUTING.md) for development setup, coding standards, and PR guidelines.

---

## License

[https://github.com/incidentfox/self-learning-ai-agent#license](https://github.com/incidentfox/self-learning-ai-agent#license)

Apache License 2.0 — see [LICENSE](https://github.com/incidentfox/self-learning-ai-agent/blob/main/LICENSE).

Built by [IncidentFox](https://incidentfox.ai) (YC W25).

## About

         Self-learning AI agents that get smarter from your Slack, docs, meetings, and code. RAPTOR trees + knowledge graph + multi-strategy RAG. Drop into any Slack channel — it starts learning automatically.       

[incidentfox.ai](https://incidentfox.ai)

### Topics

[nextjs](https://github.com/topics/nextjs)[knowledge-graph](https://github.com/topics/knowledge-graph)[slack-bot](https://github.com/topics/slack-bot)[self-learning](https://github.com/topics/self-learning)[raptor](https://github.com/topics/raptor)[ai-agents](https://github.com/topics/ai-agents)[rag](https://github.com/topics/rag)[fastapi](https://github.com/topics/fastapi)[llm](https://github.com/topics/llm)[pgvector](https://github.com/topics/pgvector)

### Resources

[Readme](https://github.com/incidentfox/self-learning-ai-agent#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/incidentfox/self-learning-ai-agent#Apache-2.0-1-ov-file)

### Contributing

[Contributing](https://github.com/incidentfox/self-learning-ai-agent#contributing-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/incidentfox/self-learning-ai-agent/activity)

[Custom properties](https://github.com/incidentfox/self-learning-ai-agent/custom-properties)

### Stars

[1
        star](https://github.com/incidentfox/self-learning-ai-agent/stargazers)

### Watchers

[0
        watching](https://github.com/incidentfox/self-learning-ai-agent/watchers)

### Forks

[1
        fork](https://github.com/incidentfox/self-learning-ai-agent/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fincidentfox%2Fself-learning-ai-agent&report=incidentfox+%28user%29)

## [Releases](https://github.com/incidentfox/self-learning-ai-agent/releases)

No releases published

## [Packages
      0](https://github.com/orgs/incidentfox/packages?repo_name=self-learning-ai-agent)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/incidentfox/self-learning-ai-agent/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          81.8%](https://github.com/incidentfox/self-learning-ai-agent/search?l=python)
- [TypeScript
          14.4%](https://github.com/incidentfox/self-learning-ai-agent/search?l=typescript)
- [Shell
          2.8%](https://github.com/incidentfox/self-learning-ai-agent/search?l=shell)
- [HCL
          0.5%](https://github.com/incidentfox/self-learning-ai-agent/search?l=hcl)
