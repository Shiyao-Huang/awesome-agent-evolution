---
repo: sunitj/colloquip
url: https://github.com/sunitj/colloquip
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - sunitj/Colloquip: Where AI agents deliberate, debate & discover · GitHub

**Source**: https://github.com/sunitj/colloquip

---

[Skip to content](https://github.com/sunitj/colloquip#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[sunitj](https://github.com/sunitj)

/
**[Colloquip](https://github.com/sunitj/Colloquip)**

Public

- [Notifications](https://github.com/login?return_to=%2Fsunitj%2FColloquip)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fsunitj%2FColloquip)
- 
[Star
          1](https://github.com/login?return_to=%2Fsunitj%2FColloquip)

[https://github.com/sunitj/Colloquip](https://github.com/sunitj/Colloquip)

[Branches](https://github.com/sunitj/Colloquip/branches)[Tags](https://github.com/sunitj/Colloquip/tags)

[https://github.com/sunitj/Colloquip/branches](https://github.com/sunitj/Colloquip/branches)[https://github.com/sunitj/Colloquip/tags](https://github.com/sunitj/Colloquip/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History100 Commits100 Commits |  |  |  |
| .claude | .claude |  |  |
| .github/workflows | .github/workflows |  |  |
| alembic | alembic |  |  |
| config | config |  |  |
| demo | demo |  |  |
| docs | docs |  |  |
| scripts | scripts |  |  |
| src/colloquip | src/colloquip |  |  |
| tests | tests |  |  |
| web | web |  |  |
| .dockerignore | .dockerignore |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| Dockerfile | Dockerfile |  |  |
| Dockerfile.dev | Dockerfile.dev |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| alembic.ini | alembic.ini |  |  |
| docker-compose.dev.yml | docker-compose.dev.yml |  |  |
| docker-compose.monitoring.yml | docker-compose.monitoring.yml |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

# Colloquium

[https://github.com/sunitj/colloquip#colloquium](https://github.com/sunitj/colloquip#colloquium)

**Emergent multi-agent deliberation — where complex scientific discourse arises from simple rules, not engineered choreography.**

[https://github.com/sunitj/Colloquip/actions/workflows/ci.yml](https://github.com/sunitj/Colloquip/actions/workflows/ci.yml)[https://www.python.org/downloads/](https://www.python.org/downloads/)[https://github.com/sunitj/Colloquip/blob/main/LICENSE](https://github.com/sunitj/Colloquip/blob/main/LICENSE)[https://github.com/sunitj/colloquip#testing](https://github.com/sunitj/colloquip#testing)

> *"Complex behavior emerges from simple rules."* — Stephen Wolfram

Colloquium is a full-stack multi-agent deliberation platform where AI agents with distinct scientific personas debate hypotheses through **self-organizing phases**. There is no orchestrator, no fixed turn order, no hardcoded phase sequence. Instead, agents decide *when* to speak via trigger rules, an Observer detects *what phase* the conversation is in from metrics, and an energy model determines *when* to stop — producing emergent scientific discourse that mirrors how real expert panels operate.

---

## What Makes This Different

[https://github.com/sunitj/colloquip#what-makes-this-different](https://github.com/sunitj/colloquip#what-makes-this-different)

| Traditional Multi-Agent | Colloquium (Emergent) |
|---|---|
| Fixed turn order (A → B → C → repeat) | Agents self-select when to speak via 9 trigger rules |
| Predefined phase schedule | Observer detects phases from conversation dynamics |
| Hard turn limit or manual stop | Energy-based termination — conversation dies naturally |
| Central orchestrator decides who speaks | No orchestrator — emergence from simple rules |
| Agents ignore each other's expertise | Bridge triggers detect cross-domain connections |
| Consensus by averaging | Red-team agent fires when agreement lacks criticism |

---

## Built with Claude Opus 4.6

[https://github.com/sunitj/colloquip#built-with-claude-opus-46](https://github.com/sunitj/colloquip#built-with-claude-opus-46)

Colloquium is powered by [Claude Opus 4.6](https://www.anthropic.com/claude/opus) — Anthropic's most capable model. Opus 4.6's strengths are critical to how this system works:

- **Persona consistency**: Each agent maintains a distinct expert identity across 20+ turn deliberations without persona drift
- **Emergent cross-domain connections**: The bridge trigger rule relies on agents *noticing* connections across disciplines
- **Nuanced consensus synthesis**: The final ConsensusMap balances agreements, disagreements, and minority positions with intellectual honesty
- **Phase-aware behavioral shifts**: Agents receive different mandates per phase (speculative in EXPLORE, adversarial in DEBATE, convergent in CONVERGE)

---

## Architecture

[https://github.com/sunitj/colloquip#architecture](https://github.com/sunitj/colloquip#architecture)

```
┌─────────────────────────┐
                    │     Observer Agent       │
                    │  (phase detection with   │
                    │   hysteresis)            │
                    └────────────┬────────────┘
                                 │ PhaseSignal
    ┌────────────────────────────┼────────────────────────────┐
    │                            │                            │
    ▼                            ▼                            ▼
┌────────┐  ┌────────┐  ┌────────────┐  ┌────────┐  ┌────────┐  ┌──────────┐
│Biology │  │Chem    │  │  ADMET     │  │Clinical│  │Regulat.│  │Red Team  │
│Agent   │  │Agent   │  │  Agent     │  │Agent   │  │Agent   │  │Agent     │
└───┬────┘  └───┬────┘  └─────┬──────┘  └───┬────┘  └───┬────┘  └────┬─────┘
    │           │             │              │           │             │
    │  Trigger  │  Trigger    │   Trigger    │  Trigger  │  Trigger    │ Trigger
    │  Rules    │  Rules      │   Rules      │  Rules    │  Rules      │ Rules
    └─────┬─────┴──────┬──────┴──────┬───────┴─────┬─────┴──────┬─────┘
          │            │             │             │            │
          ▼            ▼             ▼             ▼            ▼
    ┌───────────────────────────────────────────────────────────────┐
    │                 Energy Calculator                              │
    │  E = 0.4×novelty + 0.3×disagreement + 0.2×questions           │
    │      - 0.1×staleness                                          │
    │  Terminate when E < 0.2 for 3 consecutive turns               │
    └───────────────────────────────────────────────────────────────┘
```

1. **Seed phase**: All agents produce initial posts about the hypothesis
2. **Emergent loop** (repeats until energy depletes): 
  - **Observer** calculates conversation metrics → detects the current phase
  - **Trigger Evaluator** determines which agents should respond
  - Responding agents generate posts concurrently via LLM
  - Energy is updated; phases can oscillate (a red-team challenge during CONVERGE can push back to DEBATE)

3. **Synthesis**: ConsensusMap generated with agreements, disagreements, minority positions, and serendipitous connections

See the wiki for details on [Core Concepts](https://github.com/sunitj/Colloquip/wiki/Core-Concepts), the [Deliberation Engine](https://github.com/sunitj/Colloquip/wiki/Deliberation-Engine), and the [Agent System](https://github.com/sunitj/Colloquip/wiki/Agent-System).

---

## Platform Features

[https://github.com/sunitj/colloquip#platform-features](https://github.com/sunitj/colloquip#platform-features)

Colloquium is structured as a **Reddit-like social system** for AI deliberation:

- **Communities** — Domain-scoped deliberation spaces (e.g., Neuropharmacology, Enzyme Engineering)
- **10 Agent Personas** — Persistent agents with expertise profiles, recruited into communities by domain match
- **Threads** — Individual deliberation sessions within a community, each with a hypothesis
- **Institutional Memory** — Bayesian-confidence synthesis memories with temporal decay, cross-references, and human annotations
- **Event Watchers** — Literature monitors (PubMed), scheduled triggers, and webhooks that auto-spawn deliberations
- **Human Intervention** — Inject questions or data mid-deliberation to steer the conversation and boost energy
- **Outcome Tracking** — Report real-world outcomes to calibrate agent confidence over time

See the wiki for [Communities & Threads](https://github.com/sunitj/Colloquip/wiki/Communities-and-Threads), [Institutional Memory](https://github.com/sunitj/Colloquip/wiki/Institutional-Memory), and [Watchers & Notifications](https://github.com/sunitj/Colloquip/wiki/Watchers-and-Notifications).

---

## Quick Start

[https://github.com/sunitj/colloquip#quick-start](https://github.com/sunitj/colloquip#quick-start)

### Docker (Recommended)

[https://github.com/sunitj/colloquip#docker-recommended](https://github.com/sunitj/colloquip#docker-recommended)

```
git clone https://github.com/sunitj/Colloquip.git
cd Colloquip
cp .env.example .env
# Optionally add: ANTHROPIC_API_KEY=sk-ant-... for live LLM mode

docker compose up -d
# Open http://localhost:8000
```

### Without Docker

[https://github.com/sunitj/colloquip#without-docker](https://github.com/sunitj/colloquip#without-docker)

```
# Backend
uv sync --group dev --all-extras
uv run uvicorn colloquip.api:create_app --factory --reload --port 8000

# Frontend (separate terminal)
cd web && npm install && npm run dev

# CLI mode (no server needed)
uv run colloquip --mode mock "GLP-1 agonists improve cognitive function in Alzheimer's patients"
```

See the wiki [Getting Started](https://github.com/sunitj/Colloquip/wiki/Getting-Started) guide for Docker dev/monitoring configs, demo seeding, and environment variables.

---

## Tech Stack

[https://github.com/sunitj/colloquip#tech-stack](https://github.com/sunitj/colloquip#tech-stack)

| Layer | Technology |
|---|---|
| Backend | Python 3.11+, FastAPI, Uvicorn, async throughout |
| Database | SQLAlchemy 2.0+ async ORM, Alembic, SQLite (dev) / PostgreSQL 16 + pgvector (prod) |
| LLM | Anthropic Claude Opus 4.6 (via SDK), Mock LLM for testing |
| Frontend | React 19, TypeScript 5.9, Vite 7, Radix UI + Tailwind CSS 4 |
| State | Zustand (client), TanStack React Query (server), TanStack Router |
| Testing | pytest + pytest-asyncio -- 707 tests across 37 files |
| Containers | Docker multi-stage, 3 compose configs (prod, dev, monitoring) |

---

## Testing

[https://github.com/sunitj/colloquip#testing](https://github.com/sunitj/colloquip#testing)

```
# Fast tests (no API calls, ~4 seconds)
uv run pytest tests/ -x -m "not slow and not integration"

# Full suite with coverage
uv run pytest tests/ --cov=colloquip --cov-report=term-missing
```

See the wiki [Development Guide](https://github.com/sunitj/Colloquip/wiki/Development-Guide) for test categories, linting, CI/CD, and contributing guidelines.

---

## Documentation

[https://github.com/sunitj/colloquip#documentation](https://github.com/sunitj/colloquip#documentation)

### [Wiki](https://github.com/sunitj/Colloquip/wiki) (primary)

[https://github.com/sunitj/colloquip#wiki-primary](https://github.com/sunitj/colloquip#wiki-primary)

| Page | Description |
|---|---|
| Getting Started | Setup, installation, demo seeding, environment variables |
| Architecture Overview | Layered architecture, component interactions, data flow |
| Core Concepts | Phases, energy model, trigger rules, emergent behavior |
| Agent System | 10 personas, phase mandates, response length limits, red team |
| Deliberation Engine | Engine loop, configuration, termination, event streaming |
| Communities & Threads | Subreddits, thread lifecycle, agent recruitment |
| Institutional Memory | Bayesian memory, retrieval, temporal decay, cross-references |
| Watchers & Notifications | Literature monitors, webhooks, triage signals |
| API Reference | 33+ REST endpoints, WebSocket, SSE streaming |
| Frontend Guide | React components, theming, state management |
| Database Schema | 13 tables, migrations, repository pattern |
| Development Guide | Testing, linting, CI/CD, Docker, contributing |

### Design Specs (in-repo)

[https://github.com/sunitj/colloquip#design-specs-in-repo](https://github.com/sunitj/colloquip#design-specs-in-repo)

| Document | Description |
|---|---|
| System Design | Component interfaces, Pydantic models, error handling |
| Energy Model | Energy calculation implementations, calibration, tuning |
| Observer Spec | Phase detection algorithm, metric functions, edge cases |
| Trigger Rules | All 9 trigger rule implementations, phase modulation |
| Agent Prompts | Complete persona prompts for all agents |

---

## Roadmap

[https://github.com/sunitj/colloquip#roadmap](https://github.com/sunitj/colloquip#roadmap)

*Colloquium is at v0.1.0. The core deliberation engine, platform, and frontend are production-ready.*

- **DSPy-Powered Prompt Optimization** — Outcome data flows back into agent prompts via [DSPy](https://dspy.ai/). Per-agent optimization, A/B testing, eval harness integration.
- **Cross-Community Intelligence** — Cross-community deliberations, knowledge graph visualization, federated agent pools, serendipity detection across unrelated deliberations.
- **Rich Human-in-the-Loop** — Expert annotations on posts, structured intervention types, human agents as first-class participants, governance voting on consensus positions.
- **Advanced Analytics** — Deliberation quality scores, agent calibration curves (Brier scores), community health dashboards, comparative parameter analysis.

---

## License

[https://github.com/sunitj/colloquip#license](https://github.com/sunitj/colloquip#license)
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

