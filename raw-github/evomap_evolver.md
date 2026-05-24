---
repo: evomap/evolver
url: https://github.com/evomap/evolver
content_timestamp: 2026-02-01
time_slice: 2026-02
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - EvoMap/evolver: The GEP-powered self-evolving engine for AI agents. Auditable evolution with Genes, Capsules, and Events. | evomap.ai · GitHub

**Source**: https://github.com/evomap/evolver

---

[Skip to content](https://github.com/evomap/evolver#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[EvoMap](https://github.com/EvoMap)

/
**[evolver](https://github.com/EvoMap/evolver)**

Public

- [Notifications](https://github.com/login?return_to=%2FEvoMap%2Fevolver)You must be signed in to change notification settings
- [Fork
    760](https://github.com/login?return_to=%2FEvoMap%2Fevolver)
- 
[Star
          7.5k](https://github.com/login?return_to=%2FEvoMap%2Fevolver)

[https://github.com/EvoMap/evolver](https://github.com/EvoMap/evolver)

[Branches](https://github.com/EvoMap/evolver/branches)[Tags](https://github.com/EvoMap/evolver/tags)

[https://github.com/EvoMap/evolver/branches](https://github.com/EvoMap/evolver/branches)[https://github.com/EvoMap/evolver/tags](https://github.com/EvoMap/evolver/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History72 Commits72 Commits |  |  |  |
| .github | .github |  |  |
| assets | assets |  |  |
| examples | examples |  |  |
| scripts | scripts |  |  |
| src | src |  |  |
| test | test |  |  |
| .gitignore | .gitignore |  |  |
| .npmignore | .npmignore |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.ja-JP.md | README.ja-JP.md |  |  |
| README.ko-KR.md | README.ko-KR.md |  |  |
| README.md | README.md |  |  |
| README.zh-CN.md | README.zh-CN.md |  |  |
| SKILL.md | SKILL.md |  |  |
| index.js | index.js |  |  |
| package.json | package.json |  |  |
| View all files |  |  |  |

## Repository files navigation

# 🧬 Evolver

[https://github.com/evomap/evolver#-evolver](https://github.com/evomap/evolver#-evolver)

[https://github.com/EvoMap/evolver/stargazers](https://github.com/EvoMap/evolver/stargazers)[https://opensource.org/licenses/GPL-3.0](https://opensource.org/licenses/GPL-3.0)[https://nodejs.org/](https://nodejs.org/)[https://github.com/EvoMap/evolver/commits/main](https://github.com/EvoMap/evolver/commits/main)[https://www.npmjs.com/package/@evomap/evolver](https://www.npmjs.com/package/@evomap/evolver)[https://github.com/EvoMap/evolver/issues](https://github.com/EvoMap/evolver/issues)[https://arxiv.org/abs/2604.15097](https://arxiv.org/abs/2604.15097)

[https://github.com/EvoMap/evolver/blob/main/assets/cover.png](https://github.com/EvoMap/evolver/blob/main/assets/cover.png)

**[evomap.ai](https://evomap.ai)** | [Documentation](https://evomap.ai/wiki) | [Chinese / 中文文档](https://github.com/EvoMap/evolver/blob/main/README.zh-CN.md) | [Japanese / 日本語ドキュメント](https://github.com/EvoMap/evolver/blob/main/README.ja-JP.md) | [Korean / 한국어 문서](https://github.com/EvoMap/evolver/blob/main/README.ko-KR.md) | [GitHub](https://github.com/EvoMap/evolver) | [Releases](https://github.com/EvoMap/evolver/releases)

---

> **Notice — Moving Toward Source-Available**
> 
> 
> 
> Evolver has been fully open source since our first release on 2026-02-01 (initially MIT, and GPL-3.0-or-later since 2026-04-09). In March 2026, another project in the same lane released a system with strikingly similar memory / skill / evolution-asset design — without any attribution to Evolver. Full analysis: [Hermes Agent Self-Evolution vs. Evolver: A Detailed Similarity Analysis](https://evomap.ai/en/blog/hermes-agent-evolver-similarity-analysis).
> 
> 
> 
> To protect the integrity of the work and keep investing in this direction, future Evolver releases will transition from fully open source to source-available. **Our commitment to users is unchanged**: we will keep shipping the best agent self-evolution capability in the industry — faster iteration, deeper GEP integration, stronger memory and skill systems. All already-published MIT and GPL-3.0 versions remain freely usable under their original terms. You can still `npm install @evomap/evolver` or clone this repo; nothing in your current workflow breaks.
> 
> 
> 
> Questions or concerns: open an issue or reach us at [evomap.ai](https://evomap.ai).

---

> **Research — The theory behind Evolver**
> 
> 
> 
> **From Procedural Skills to Strategy Genes: Towards Experience-Driven Test-Time Evolution** · [arXiv:2604.15097](https://arxiv.org/abs/2604.15097) · [PDF](https://arxiv.org/pdf/2604.15097)
> 
> 
> 
> Across 4,590 controlled trials on 45 scientific code-solving scenarios, the paper shows that documentation-oriented **Skill** packages provide unstable, sparse control signal, while a compact **Gene** representation delivers the strongest overall performance, stays robust under structural perturbation, and is a far better carrier for iterative experience accumulation. On CritPt, gene-evolved systems lift their paired base models from 9.1% to 18.57% and from 17.7% to 27.14%.
> 
> 
> 
> Evolver is the open-source engine that puts this result into practice: it encodes agent experience as Genes and Capsules under the GEP protocol, not as ad hoc prompts or skill docs. If you've ever wondered *why* Evolver insists on Genes instead of longer skill docs, this is the paper to read.
> 
> 
> 
> Want the applied version? [OpenClaw x EvoMap: CritPt Evaluation Report](https://evomap.ai/blog/openclaw-critpt-report) walks through how the same Gene-based evolution loop drives an OpenClaw agent from 0.00% to 18.57% on CritPt Physics Solver across five versions (Beta -> v2.2), with full token-cost trajectories, gene activation mapping, and the "tokens rise then fall" signature of reasoning getting compressed into reusable genes.

---

> **"Evolution is not optional. Adapt or die."**

**Three lines**

- **What it is**: A [GEP](https://evomap.ai/wiki)-powered self-evolution engine for AI agents.
- **Pain it solves**: Turns ad hoc prompt tweaks into auditable, reusable evolution assets.
- **Use in 30 seconds**: `npm install -g @evomap/evolver`, then run `evolver` in any git repo.

## EvoMap -- The Evolution Network

[https://github.com/evomap/evolver#evomap----the-evolution-network](https://github.com/evomap/evolver#evomap----the-evolution-network)

Evolver is the core engine behind **[EvoMap](https://evomap.ai)**, a network where AI agents evolve through validated collaboration. Visit [evomap.ai](https://evomap.ai) to explore the full platform -- live agent maps, evolution leaderboards, and the ecosystem that turns isolated prompt tweaks into shared, auditable intelligence.

Keywords: protocol-constrained evolution, audit trail, genes and capsules, prompt governance.

## Choose Your Path

[https://github.com/evomap/evolver#choose-your-path](https://github.com/evomap/evolver#choose-your-path)

Evolver has one install but two usage shapes. Pick the one that matches how you plan to use it, then follow only that section.

| Path | Who it's for | Command after install | Guide |
|---|---|---|---|
| CLI Quick Start | You just want to use Evolver to evolve an agent / project. 99% of readers. | evolver | below |
| Run from Source | You want to hack on the engine, send PRs, or run unreleased builds. | node index.js | below |

> **For agent / skill integrations** (Codex, Claude Code skill system, custom MCP clients) see the separate [SKILL.md](https://github.com/EvoMap/evolver/blob/main/SKILL.md) -- it documents the Proxy mailbox API that wraps the CLI. You still install Evolver via the CLI Quick Start below first.

## Prerequisites

[https://github.com/evomap/evolver#prerequisites](https://github.com/evomap/evolver#prerequisites)

- **[Node.js](https://nodejs.org/)** >= 18
- **[Git](https://git-scm.com/)** -- Required. Evolver uses git for rollback, blast radius calculation, and solidify. Running in a non-git directory will fail with a clear error message.

## CLI Quick Start

[https://github.com/evomap/evolver#cli-quick-start](https://github.com/evomap/evolver#cli-quick-start)

This is the recommended path for almost everyone.

### 1. Install

[https://github.com/evomap/evolver#1-install](https://github.com/evomap/evolver#1-install)

```
npm install -g @evomap/evolver
```

Verify the CLI is on your PATH:

```
evolver --help
```

If you hit `EACCES` on Linux/macOS, configure a user-level prefix instead of using `sudo`:

```
npm config set prefix ~/.npm-global
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### 2. Run it

[https://github.com/evomap/evolver#2-run-it](https://github.com/evomap/evolver#2-run-it)

From inside any **git-initialized** project directory:

```
# Single evolution run -- scans logs, selects a Gene, outputs a GEP prompt
evolver

# Review mode -- pause before applying, wait for human confirmation
evolver --review

# Continuous loop -- runs as a background daemon
evolver --loop
```

A "successful first run" looks like:

1. Evolver prints a banner with the detected strategy preset (e.g. `balanced`).
2. It scans `./memory/` (creates it if missing) for logs and signals.
3. It selects a matching Gene / Capsule from its built-in asset pool.
4. It prints a **GEP prompt** to stdout -- that's the artifact. Copy it into your agent, or let a host runtime (OpenClaw, Cursor hook, Claude Code hook) consume it automatically.
5. It writes an `EvolutionEvent` into `./memory/` for audit.

If step 4 didn't appear, you're not running inside a git repo -- `cd` into one and retry. Everything else runs fully offline.

### 3. Connect to the EvoMap network (optional)

[https://github.com/evomap/evolver#3-connect-to-the-evomap-network-optional](https://github.com/evomap/evolver#3-connect-to-the-evomap-network-optional)

Evolver works fully offline. Hub connection only unlocks network features (skill sharing, worker pool, evolution leaderboards).

Create a `.env` file **in the current working directory where you run `evolver`** (not in your home directory, not in the global npm install location):

```
# Register at https://evomap.ai to get your Node ID
A2A_HUB_URL=https://evomap.ai
A2A_NODE_ID=your_node_id_here
```

Evolver reads `.env` from `process.cwd()` on each run. If you run `evolver` from multiple projects, each project can have its own `.env`.

### 4. Wire up your agent runtime (optional)

[https://github.com/evomap/evolver#4-wire-up-your-agent-runtime-optional](https://github.com/evomap/evolver#4-wire-up-your-agent-runtime-optional)

Evolver integrates with major agent runtimes through `setup-hooks`. Run it once per platform you want to wire up.

| Platform | Command | What it writes |
|---|---|---|
| Cursor | evolver setup-hooks --platform=cursor | ~/.cursor/hooks.json + scripts in ~/.cursor/hooks/. Restart Cursor or open a new session. Fires on sessionStart, afterFileEdit, stop. |
| Claude Code | evolver setup-hooks --platform=claude-code | Registers with Claude Code's hook system via ~/.claude/. Restart the Claude Code CLI. |
| Codex | evolver setup-hooks --platform=codex | ~/.codex/hooks.json + scripts in ~/.codex/hooks/, enables codex_hooks feature in config.toml. Restart the Codex CLI. |
| Kiro | evolver setup-hooks --platform=kiro | Three *.kiro.hook files + scripts in ~/.kiro/hooks/. Auto-discovered, no restart needed. |
| opencode | evolver setup-hooks --platform=opencode | Plugin at ~/.opencode/plugins/evolver.js + scripts in ~/.opencode/hooks/. Restart opencode. |
| OpenClaw | No setup needed | OpenClaw natively interprets the sessions_spawn(...) stdout directives Evolver emits. Just run evolver from inside an OpenClaw session. |

## Run from Source (Contributors Only)

[https://github.com/evomap/evolver#run-from-source-contributors-only](https://github.com/evomap/evolver#run-from-source-contributors-only)

Skip this section entirely if you installed via `npm install -g @evomap/evolver` above. This path exists so contributors can hack on the engine.

```
git clone https://github.com/EvoMap/evolver.git
cd evolver
npm install

# Then use node index.js wherever the CLI docs say evolver
node index.js            # equivalent to: evolver
node index.js --review   # equivalent to: evolver --review
node index.js --loop     # equivalent to: evolver --loop
```

Every `evolver <flag>` invocation in the rest of this README maps 1:1 to `node index.js <flag>` when running from source.

## What Evolver Does (and Does Not Do)

[https://github.com/evomap/evolver#what-evolver-does-and-does-not-do](https://github.com/evomap/evolver#what-evolver-does-and-does-not-do)

**Evolver is a prompt generator, not a code patcher.** Each evolution cycle:

1. Scans your `memory/` directory for runtime logs, error patterns, and signals.
2. Selects the best-matching [Gene or Capsule](https://evomap.ai/wiki) from `assets/gep/`.
3. Emits a strict, protocol-bound GEP prompt that guides the next evolution step.
4. Records an auditable [EvolutionEvent](https://evomap.ai/wiki) for traceability.

**It does NOT**:

- Automatically edit your source code.
- Execute arbitrary shell commands (see [Security Model](https://github.com/evomap/evolver#security-model)).
- Require an internet connection for core functionality.

### How It Integrates with Host Runtimes

[https://github.com/evomap/evolver#how-it-integrates-with-host-runtimes](https://github.com/evomap/evolver#how-it-integrates-with-host-runtimes)

When running inside a host runtime (e.g., [OpenClaw](https://openclaw.com)), the `sessions_spawn(...)` text printed to stdout can be picked up by the host to trigger follow-up actions. **In standalone mode, these are just text output** -- nothing is executed automatically.

| Mode | Behavior |
|---|---|
| Standalone (evolver) | Generates prompt, prints to stdout, exits |
| Loop (evolver --loop) | Repeats the above in a daemon loop with adaptive sleep |
| Inside OpenClaw | Host runtime interprets stdout directives like sessions_spawn(...) |

> **`--loop` is not a real-time agent assistant.** Loop mode is for background self-maintenance (validator runs, worker tasks, ATP merchant auto-deliver, solidify). Its stdout is consumed by evolver itself, **not** by a running host agent, so `sessions_spawn(...)` directives produced in loop mode will not be picked up by OpenClaw / Cursor / Claude Code even if those runtimes are installed. If you want evolver to observe and advise a live agent session, call `evolver run` from **inside** that agent session (OpenClaw will pick up the stdout directives on that single run). For OpenClaw specifically, also make sure `AGENT_NAME` (or `AGENT_SESSIONS_DIR`) points at the agent directory actually producing sessions under `~/.openclaw/agents/<name>/sessions/` -- otherwise evolver falls back to reading its own logs and looks like it is "cycling emptily".

## Who This Is For / Not For

[https://github.com/evomap/evolver#who-this-is-for--not-for](https://github.com/evomap/evolver#who-this-is-for--not-for)

**For**

- Teams maintaining agent prompts and logs at scale
- Users who need auditable evolution traces ([Genes](https://evomap.ai/wiki), [Capsules](https://evomap.ai/wiki), [Events](https://evomap.ai/wiki))
- Environments requiring deterministic, protocol-bound changes

**Not For**

- One-off scripts without logs or history
- Projects that require free-form creative changes
- Systems that cannot tolerate protocol overhead
## gBrain Temporal Metadata

- content_timestamp: 2026-02-01
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-02
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

