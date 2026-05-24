---
repo: greyhaven-ai/autocontext
url: https://github.com/greyhaven-ai/autocontext
content_timestamp: 2026-04-28
time_slice: 2026-04
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - greyhaven-ai/autocontext: a recursive self-improving harness designed to help your agents (and future iterations of those agents) succeed on any task · GitHub

**Source**: https://github.com/greyhaven-ai/autocontext

---

[Skip to content](https://github.com/greyhaven-ai/autocontext#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[greyhaven-ai](https://github.com/greyhaven-ai)

/
**[autocontext](https://github.com/greyhaven-ai/autocontext)**

Public

- [Notifications](https://github.com/login?return_to=%2Fgreyhaven-ai%2Fautocontext)You must be signed in to change notification settings
- [Fork
    77](https://github.com/login?return_to=%2Fgreyhaven-ai%2Fautocontext)
- 
[Star
          1k](https://github.com/login?return_to=%2Fgreyhaven-ai%2Fautocontext)

[https://github.com/greyhaven-ai/autocontext](https://github.com/greyhaven-ai/autocontext)

[Branches](https://github.com/greyhaven-ai/autocontext/branches)[Tags](https://github.com/greyhaven-ai/autocontext/tags)

[https://github.com/greyhaven-ai/autocontext/branches](https://github.com/greyhaven-ai/autocontext/branches)[https://github.com/greyhaven-ai/autocontext/tags](https://github.com/greyhaven-ai/autocontext/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History1,622 Commits1,622 Commits |  |  |  |
| .github | .github |  |  |
| autocontext | autocontext |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| fixtures/cross-runtime | fixtures/cross-runtime |  |  |
| infra | infra |  |  |
| knowledge | knowledge |  |  |
| packages | packages |  |  |
| pi | pi |  |  |
| protocol | protocol |  |  |
| runs | runs |  |  |
| scripts | scripts |  |  |
| skills | skills |  |  |
| ts | ts |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| .prettierrc.json | .prettierrc.json |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| SUPPORT.md | SUPPORT.md |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/greyhaven-ai/autocontext/blob/main/autocontext/assets/banner.svg](https://github.com/greyhaven-ai/autocontext/blob/main/autocontext/assets/banner.svg)

**a recursive self-improving harness designed to help your agents (and future iterations of those agents) succeed on any task**

[https://github.com/greyhaven-ai/autocontext/blob/main/LICENSE](https://github.com/greyhaven-ai/autocontext/blob/main/LICENSE)[https://github.com/greyhaven-ai/autocontext/stargazers](https://github.com/greyhaven-ai/autocontext/stargazers)[https://github.com/greyhaven-ai/autocontext/commits/main](https://github.com/greyhaven-ai/autocontext/commits/main)[https://pypi.org/project/autocontext/](https://pypi.org/project/autocontext/)[https://www.npmjs.com/package/autoctx](https://www.npmjs.com/package/autoctx)

Autocontext is a harness. You point it at a goal in plain language. It iterates against real evaluation, keeps what worked, throws out what didn't, and produces a structured trace of the work plus the artifacts, playbooks, datasets, and (optionally) a distilled local model that the next agent inherits. Repeated runs get better, not just different.

## Try It In 30 Seconds

[https://github.com/greyhaven-ai/autocontext#try-it-in-30-seconds](https://github.com/greyhaven-ai/autocontext#try-it-in-30-seconds)

The fastest path uses our **Pi runtime**, a local coding agent that handles its own auth. No API key plumbing, no provider config: install Pi, install autocontext, point one at the other.

```
uv tool install autocontext==0.5.0

AUTOCONTEXT_AGENT_PROVIDER=pi \
AUTOCONTEXT_PI_COMMAND=pi \
uv run autoctx solve \
  "improve customer-support replies for billing disputes" \
  --iterations 3
```

Pi runs locally as a subprocess and emits live traces back into the harness. For a hosted Pi, set `AUTOCONTEXT_AGENT_PROVIDER=pi-rpc` and `AUTOCONTEXT_PI_RPC_ENDPOINT` instead.

Prefer TypeScript? Same surface, same command:

```
bun add -g autoctx@0.5.0
AUTOCONTEXT_AGENT_PROVIDER=pi bunx autoctx solve \
  "improve customer-support replies for billing disputes" \
  --iterations 5 --json
```

Already on Anthropic, OpenAI, Gemini, Mistral, Groq, OpenRouter, Azure, Claude CLI, Codex CLI, or MLX? Set `AUTOCONTEXT_AGENT_PROVIDER` and the matching credential env var:

```
AUTOCONTEXT_AGENT_PROVIDER=anthropic \
ANTHROPIC_API_KEY=sk-ant-... \
uv run autoctx solve "..." --iterations 3
```

See [.env.example](https://github.com/greyhaven-ai/autocontext/blob/main/.env.example) for every provider's variables. Prefer to clone and run a starter? [examples/README.md](https://github.com/greyhaven-ai/autocontext/blob/main/examples/README.md) has copy-paste recipes for Python CLI, Claude Code MCP, Python SDK, TypeScript library usage, and the experimental TypeScript agent handler surface.

## Or Just Talk To Your Agent

[https://github.com/greyhaven-ai/autocontext#or-just-talk-to-your-agent](https://github.com/greyhaven-ai/autocontext#or-just-talk-to-your-agent)

If you already work inside a coding agent, you can wire autocontext in once and give the agent a natural-language entry point. Hermes and other terminal-capable agents should start with the CLI-backed skill; MCP remains available for clients that want a tool-catalog protocol.

**Pi** ships an autocontext skill out of the box. Install the published Pi package and Pi loads natural-language wrappers over live tools such as `autocontext_solve_scenario`, `autocontext_evaluate_output`, `autocontext_run_improvement_loop`, `autocontext_run_status`, and `autocontext_list_scenarios`.

```
pi install npm:pi-autocontext
```

Then you just ask:

> "Solve: improve customer-support replies for billing disputes."
> 
> 
> 
> "Judge this output against this rubric and improve it until it scores 0.85."

**Claude Code** (and any other MCP client) gets the same surface by adding one entry to `.claude/settings.json`:

```
{
  "mcpServers": {
    "autocontext": {
      "command": "uv",
      "args": ["run", "--directory", "/path/to/autocontext", "autoctx", "mcp-serve"],
      "env": { "AUTOCONTEXT_AGENT_PROVIDER": "pi", "AUTOCONTEXT_PI_COMMAND": "pi" }
    }
  }
}
```

After that, Python MCP exposes prefixed tools such as `autocontext_solve_scenario`, `autocontext_evaluate_output`, `autocontext_run_improvement_loop`, `autocontext_run_status`, `autocontext_list_scenarios`, `autocontext_export_skill`, and `autocontext_search_strategies`. It also exposes runtime-session readers as `autocontext_list_runtime_sessions`, `autocontext_get_runtime_session`, and `autocontext_get_runtime_session_timeline`, with unprefixed aliases for parity with TypeScript MCP; Python runtime-backed `run` and `solve` role calls populate those logs automatically. The TypeScript package exposes the same capabilities with its documented tool names via `bunx autoctx mcp-serve`.

**Hermes Agent** can load a CLI-first skill and inspect Hermes Curator state without MCP:

```
cd autocontext
uv run autoctx hermes export-skill --output ~/.hermes/skills/autocontext/SKILL.md --json
# Add progressive-disclosure reference files alongside SKILL.md (AC-702)
uv run autoctx hermes export-skill \
    --output ~/.hermes/skills/autocontext/SKILL.md \
    --with-references --json
uv run autoctx hermes inspect --json
```

Full integration guide: [autocontext/docs/agent-integration.md](https://github.com/greyhaven-ai/autocontext/blob/main/autocontext/docs/agent-integration.md).

## What You Get Back

[https://github.com/greyhaven-ai/autocontext#what-you-get-back](https://github.com/greyhaven-ai/autocontext#what-you-get-back)

Every run leaves a structured record on disk. Replay it, diff it, export it, feed it back into training.

```
runs/<run_id>/
├── trace.jsonl              # every prompt, tool call, and outcome, in order
├── generations/
│   ├── gen_1/
│   │   ├── strategy.json    # what the competitor proposed
│   │   ├── analysis.md      # what the analyst observed
│   │   └── score.json       # how it was evaluated
│   └── gen_2/ ...
├── report.md                # human-readable summary of the whole run
└── artifacts/               # files, configs, packages the run produced

knowledge/<scenario>/
├── playbook.md              # accumulated lessons that carried forward
├── hints.md                 # competitor hints that survived the curator
└── tools/                   # any helper tools the architect generated
```

A `playbook.md` is plain markdown the next run reads as context:

```
<!-- PLAYBOOK_START -->

## Billing dispute replies

- Always restate the disputed charge in the first sentence; refunds requested without
  explicit confirmation cause loops.
- "Pending" charges are not yet billable. Don't promise a refund until status flips
  to `posted`. Verified gen_4, regressed in gen_7 when omitted.
- Empathy + specific next step beats empathy alone. Escalation rate dropped from
0.31 to 0.12 once the second sentence named the next-step owner.
<!-- PLAYBOOK_END -->
```

A `trace.jsonl` line is one event:

```
{
  "ts": "2026-04-28T17:42:11Z",
  "gen": 4,
  "role": "competitor",
  "event": "strategy_proposed",
  "score": 0.78,
  "tokens_in": 1840,
  "tokens_out": 612,
  "strategy_id": "s_4f2a"
}
```

Inspect, replay, or compare any of it:

```
uv run autoctx list
uv run autoctx status <run_id>
uv run autoctx replay <run_id> --generation 2
```

## How It Works

[https://github.com/greyhaven-ai/autocontext#how-it-works](https://github.com/greyhaven-ai/autocontext#how-it-works)

Inside each run, five roles cooperate:

- **competitor** proposes a strategy or artifact for the task
- **analyst** explains what happened and why
- **coach** turns that analysis into playbook updates and future hints
- **architect** proposes tools or harness changes when the loop is stuck
- **curator** gates what knowledge is allowed to persist across runs

Strategies are evaluated through scenario execution, staged validation, and gating. Weak changes are rolled back. Successful changes accumulate as reusable knowledge that future runs (and future agents) inherit automatically.

The full vocabulary (Scenario, Task, Mission, Campaign, Run, Verifier, Knowledge, Artifact, Budget, Policy) lives in [docs/concept-model.md](https://github.com/greyhaven-ai/autocontext/blob/main/docs/concept-model.md).

## Capture What's Happening In Production

[https://github.com/greyhaven-ai/autocontext#capture-whats-happening-in-production](https://github.com/greyhaven-ai/autocontext#capture-whats-happening-in-production)

Autocontext can sit alongside your live application and record what your agents do, then turn that into training data. Wrap your existing Anthropic or OpenAI client once:

```
from anthropic import Anthropic
from autocontext.production_traces import instrument_client

client = instrument_client(Anthropic(), app="billing-bot", env="prod")
# use `client` exactly like before; calls are captured to JSONL with content blocks,
# cache-aware usage, and Anthropic-native outcome taxonomy.
```

```
import Anthropic from "@anthropic-ai/sdk";
import { instrumentClient } from "autoctx/production-traces";

const client = instrumentClient(new Anthropic(), { app: "billing-bot", env: "prod" });
```

Then build scoped datasets from the captured traces:

```
uv run autoctx build-dataset \
  --app billing-bot --provider anthropic \
  --env prod --outcome success \
  --output training/billing.jsonl
```

And distill them into a smaller local model with MLX (Apple Silicon) or CUDA (Linux GPUs):

```
uv run autoctx train --scenario support_triage --data training/billing.jsonl --time-budget 300
```

## What's New in 0.5.0

[https://github.com/greyhaven-ai/autocontext#whats-new-in-050](https://github.com/greyhaven-ai/autocontext#whats-new-in-050)

- **Plain-language CLI continuity** lets Python and TypeScript callers use positional goals/scenarios, `--iterations`, and run-scoped exports while preserving the existing flag forms.
- **Hermes Agent integration** adds read-only Hermes v0.12 inspection plus an exportable CLI-first `autocontext` skill for Hermes agents.
- **Packaged CLI startup** no longer crashes when installed without banner assets.
- **Release alignment** bumps Python `autocontext` and npm `autoctx` to `0.5.0`, with `pi-autocontext` moving to `0.2.4` on its own lower-numbered line.

## Choose Your Package

[https://github.com/greyhaven-ai/autocontext#choose-your-package](https://github.com/greyhaven-ai/autocontext#choose-your-package)

| If you want to... | Start here |
|---|---|
## gBrain Temporal Metadata

- content_timestamp: 2026-04
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-04
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

