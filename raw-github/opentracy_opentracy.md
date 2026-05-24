---
repo: opentracy/opentracy
url: https://github.com/opentracy/opentracy
content_timestamp: 2026-05-18
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - OpenTracy/OpenTracy: Self-improving AI agent harness — propose, eval, approve, ship. AHE autonomous loop + MCP + BYOK + eval suite. · GitHub

**Source**: https://github.com/opentracy/opentracy

---

[Skip to content](https://github.com/opentracy/opentracy#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[OpenTracy](https://github.com/OpenTracy)

/
**[OpenTracy](https://github.com/OpenTracy/OpenTracy)**

Public

- [Notifications](https://github.com/login?return_to=%2FOpenTracy%2FOpenTracy)You must be signed in to change notification settings
- [Fork
    7](https://github.com/login?return_to=%2FOpenTracy%2FOpenTracy)
- 
[Star
          101](https://github.com/login?return_to=%2FOpenTracy%2FOpenTracy)

[https://github.com/OpenTracy/OpenTracy](https://github.com/OpenTracy/OpenTracy)

[Branches](https://github.com/OpenTracy/OpenTracy/branches)[Tags](https://github.com/OpenTracy/OpenTracy/tags)

[https://github.com/OpenTracy/OpenTracy/branches](https://github.com/OpenTracy/OpenTracy/branches)[https://github.com/OpenTracy/OpenTracy/tags](https://github.com/OpenTracy/OpenTracy/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History324 Commits324 Commits |  |  |  |
| agent | agent |  |  |
| backend | backend |  |  |
| config | config |  |  |
| connectors | connectors |  |  |
| corpora | corpora |  |  |
| datasets | datasets |  |  |
| docs | docs |  |  |
| evals | evals |  |  |
| experiments | experiments |  |  |
| harness | harness |  |  |
| infra | infra |  |  |
| ledger | ledger |  |  |
| ml | ml |  |  |
| policies | policies |  |  |
| router | router |  |  |
| runtime | runtime |  |  |
| techniques | techniques |  |  |
| tools | tools |  |  |
| traces | traces |  |  |
| ui | ui |  |  |
| versions | versions |  |  |
| .dockerignore | .dockerignore |  |  |
| .env.example | .env.example |  |  |
| .gcloudignore | .gcloudignore |  |  |
| .gitignore | .gitignore |  |  |
| .mcp.json | .mcp.json |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# OpenTracy

[https://github.com/opentracy/opentracy#opentracy](https://github.com/opentracy/opentracy#opentracy)

Self-improving AI agent harness. You ship a default agent; it learns from real usage, proposes its own improvements, and routes them through evals + human approval before they go live.

> **Status:** experimental. APIs and the agent DSL move week-to-week. Don't pin to a tag yet.

## What it gives you

[https://github.com/opentracy/opentracy#what-it-gives-you](https://github.com/opentracy/opentracy#what-it-gives-you)

- A trainable agent surface at `agent/` — one YAML + a handful of Python files. Mutated by Claude Code (driven by the harness) in response to evidence from real traces.
- An **autonomous engineering loop** modeled on Lin et al.'s AHE algorithm (arxiv 2604.25850). The harness proposes candidate edits, critiques them, runs evals, and applies the winners as file-level patches with cheap rollback.
- A typed runtime that compiles `agent/` into an executable pipeline and serves requests over HTTP, MCP, Slack, WhatsApp, and an embeddable web widget.
- An eval suite with goldens, regression detection, and per-trace attribution so you can see *why* a proposed change is better (or worse).

## Quick start

[https://github.com/opentracy/opentracy#quick-start](https://github.com/opentracy/opentracy#quick-start)

Requirements: Python 3.11+, Node 20+, an Anthropic API key.

```
git clone https://github.com/OpenTracy/OpenTracy
cd OpenTracy

# 1. Runtime (port 8001)
uv sync               # or: pip install -e .
cp .env.example .env  # then fill in ANTHROPIC_API_KEY
uv run python -m runtime

# 2. Backend gateway (port 8002) — new terminal
cd backend && npm install && npm run dev

# 3. UI (port 5173) — new terminal
cd ui && npm install && npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The shell boots straight to Evolution — no login, no signup. OSS runs single-tenant on localhost by design.

## Architecture

[https://github.com/opentracy/opentracy#architecture](https://github.com/opentracy/opentracy#architecture)

| Directory | Role |
|---|---|
| agent/ | The trainable surface. YAML + Python. Mutated by the harness. |
| techniques/ | Catalog of layer types (RAG, reranking, routing). Read-only. |
| runtime/ | Compiles agent/ into a pipeline and serves requests. |
| evals/ | The loss function. Goldens, suites, runners, attribution. |
| experiments/ | Candidate configs + results. The training workspace. |
| harness/ | The optimizer: proposer, critics, approver, executor, rollback. |
| ml/ | Models trained on accumulated data. |
| ledger/ | Append-only audit trail. |
| traces/ | Runtime accumulator (conversations, labels, pins). |
| corpora/ | Knowledge accumulator (RAG content with usage stats). |
| policies/ | Human-set rules for the harness. |
| backend/ | Request-serving layer (API, channels). |
| connectors/ | Outbound integrations. |
| ui/ | Frontend (React + Vite + TS). |

The loop:

```
traces/  →  evals/  →  harness/proposer/  →  harness/critics/
                              ↓
                     harness/synthesizer/  ↔  experiments/candidates/
                              ↓                     (iterate)
                     harness/approver/   →   agent/ (live)   →   traces/
```

The harness mutates `agent/`, appends to `traces/` and `ledger/` via API, and ingests into `corpora/`. Everything else is framework. See `config/claude_code.yaml` for the authoritative allowlist.

Languages: Python (`harness/`, `runtime/`, `evals/`, `ml/`, `techniques/`), TypeScript (`backend/`, `ui/`).

## Distribution modes

[https://github.com/opentracy/opentracy#distribution-modes](https://github.com/opentracy/opentracy#distribution-modes)

| Mode | When | What's different |
|---|---|---|
| OSS local (default) | Clone, run for yourself or a single team. | Single-tenant. No login. Everything at the project root. |
| Hosted/multi-tenant | A managed deploy serving multiple orgs. Enable via OPENTRACY_MULTI_TENANT=1. | Per-tenant namespacing under tenants/<id>/…, Firebase-backed login, per-tenant Bearer tokens, KMS-encrypted BYOK keys. Requires the private opentracy-infra sibling repo. |

Hosted-only code is gated behind the env flag and adds zero overhead when off.

## Configuration

[https://github.com/opentracy/opentracy#configuration](https://github.com/opentracy/opentracy#configuration)

See [.env.example](https://github.com/OpenTracy/OpenTracy/blob/main/.env.example) for the full list. The minimum to get running is `ANTHROPIC_API_KEY`.

## Contributing

[https://github.com/opentracy/opentracy#contributing](https://github.com/opentracy/opentracy#contributing)

PRs welcome. See [CONTRIBUTING.md](https://github.com/OpenTracy/OpenTracy/blob/main/CONTRIBUTING.md).

## License

[https://github.com/opentracy/opentracy#license](https://github.com/opentracy/opentracy#license)

MIT — see [LICENSE](https://github.com/OpenTracy/OpenTracy/blob/main/LICENSE).

## About

         Self-improving AI agent harness — propose, eval, approve, ship. AHE autonomous loop + MCP + BYOK + eval suite.       

### Resources

[Readme](https://github.com/opentracy/opentracy#readme-ov-file)

### License

[MIT license](https://github.com/opentracy/opentracy#MIT-1-ov-file)

### Contributing

[Contributing](https://github.com/opentracy/opentracy#contributing-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/OpenTracy/OpenTracy/activity)

[Custom properties](https://github.com/OpenTracy/OpenTracy/custom-properties)

### Stars

[101
        stars](https://github.com/OpenTracy/OpenTracy/stargazers)

### Watchers

[1
        watching](https://github.com/OpenTracy/OpenTracy/watchers)

### Forks

[7
        forks](https://github.com/OpenTracy/OpenTracy/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FOpenTracy%2FOpenTracy&report=OpenTracy+%28user%29)

## [Releases
      4](https://github.com/OpenTracy/OpenTracy/releases)

[v0.5.0 — OSS relaunch: self-improving agent harness
        
          Latest
      
      May 18, 2026](https://github.com/OpenTracy/OpenTracy/releases/tag/v0.5.0)
[+ 3 releases](https://github.com/OpenTracy/OpenTracy/releases)

## [Packages
      0](https://github.com/orgs/OpenTracy/packages?repo_name=OpenTracy)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/OpenTracy/OpenTracy/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          65.9%](https://github.com/OpenTracy/OpenTracy/search?l=python)
- [TypeScript
          26.6%](https://github.com/OpenTracy/OpenTracy/search?l=typescript)
- [CSS
          7.5%](https://github.com/OpenTracy/OpenTracy/search?l=css)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2026-05-18
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

