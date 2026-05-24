---
repo: onevcat/argue
url: https://github.com/onevcat/argue
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - onevcat/argue: Harness-agnostic orchestration package for multi-agent consensus workflows · GitHub

**Source**: https://github.com/onevcat/argue

---

[Skip to content](https://github.com/onevcat/argue#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[onevcat](https://github.com/onevcat)

/
**[argue](https://github.com/onevcat/argue)**

Public

- [Notifications](https://github.com/login?return_to=%2Fonevcat%2Fargue)You must be signed in to change notification settings
- [Fork
    12](https://github.com/login?return_to=%2Fonevcat%2Fargue)
- 
[Star
          238](https://github.com/login?return_to=%2Fonevcat%2Fargue)

[https://github.com/onevcat/argue](https://github.com/onevcat/argue)

[Branches](https://github.com/onevcat/argue/branches)[Tags](https://github.com/onevcat/argue/tags)

[https://github.com/onevcat/argue/branches](https://github.com/onevcat/argue/branches)[https://github.com/onevcat/argue/tags](https://github.com/onevcat/argue/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History247 Commits247 Commits |  |  |  |
| .claude/skills/release | .claude/skills/release |  |  |
| .github/workflows | .github/workflows |  |  |
| .husky | .husky |  |  |
| docs | docs |  |  |
| packages | packages |  |  |
| scripts | scripts |  |  |
| skills/argue | skills/argue |  |  |
| .gitignore | .gitignore |  |  |
| .prettierignore | .prettierignore |  |  |
| .prettierrc | .prettierrc |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README_CN.md | README_CN.md |  |  |
| README_JP.md | README_JP.md |  |  |
| eslint.config.mjs | eslint.config.mjs |  |  |
| package-lock.json | package-lock.json |  |  |
| package.json | package.json |  |  |
| tsconfig.base.json | tsconfig.base.json |  |  |
| View all files |  |  |  |

## Repository files navigation

# argue

[https://github.com/onevcat/argue#argue](https://github.com/onevcat/argue#argue)

**[中文](https://github.com/onevcat/argue/blob/master/README_CN.md) | [日本語](https://github.com/onevcat/argue/blob/master/README_JP.md)**

> *Follow the argument wherever it leads.* — Socrates, in Plato's *Republic*

argue is a structured multi-agent debate engine. Multiple AI agents analyze the same problem independently, challenge each other's claims across rounds, and converge on consensus through voting — producing higher quality results than any single agent alone.

Give it a question. Get back claims that survived cross-examination, votes that quantify agreement, and a representative report backed by peer-reviewed scoring. Less hallucination, more rigor.

## Live Demo

[https://github.com/onevcat/argue#live-demo](https://github.com/onevcat/argue#live-demo)

[https://argue.onev.cat/example](https://argue.onev.cat/example)

**[https://argue.onev.cat/example](https://argue.onev.cat/example)** — a real argue run rendered in the hosted viewer. Open it to see exactly what argue produces:

- **Agents arguing in the open.** Every claim, peer judgement, merge, and vote, round by round.
- **A polished dossier.** Composed by the highest-scoring agent — ready to read, share, or attach to a PR.
- **Complete raw data on disk.** The same JSON that powers the viewer is saved locally, ready to feed any downstream step (review bot, code generation, audit log, …).

## Install the Argue Skill

[https://github.com/onevcat/argue#install-the-argue-skill](https://github.com/onevcat/argue#install-the-argue-skill)

Already working with an agentic coding assistant (Claude Code, Codex, etc.)? Hand the setup over. Argue ships as an [agent skill](https://skills.sh/) that teaches your agent when to use argue, how to install and configure the CLI, which defaults to recommend, and how to run debates end-to-end.

```
npx skills add https://github.com/onevcat/argue --skill argue
```

Once installed, just ask your agent to "argue about X" or "get a second opinion on Y". It will bootstrap the CLI on first run (asking you before any global install) and drive the debate, the report, and any follow-up action for you.

## Quick Start

[https://github.com/onevcat/argue#quick-start](https://github.com/onevcat/argue#quick-start)

Prefer driving the CLI yourself like a cave-dweller with a stone axe? Suit yourself — here's the manual route.

### Install

[https://github.com/onevcat/argue#install](https://github.com/onevcat/argue#install)

```
npm install -g @onevcat/argue-cli
```

### Configure

[https://github.com/onevcat/argue#configure](https://github.com/onevcat/argue#configure)

```
# Create config file (~/.config/argue/config.json)
argue config init

# Add providers and agents
argue config add-provider --id claude --type cli --cli-type claude --model-id sonnet --agent claude-agent
argue config add-provider --id codex --type cli --cli-type codex --model-id gpt-5.3-codex --agent codex-agent
```

### Run a Debate

[https://github.com/onevcat/argue#run-a-debate](https://github.com/onevcat/argue#run-a-debate)

```
argue run --task "Should we use a monorepo or polyrepo for our microservices?"
```

Add `--verbose` to see each agent's reasoning, claims, and judgements in real time.

Need an agent to **act** on the result? Add `--action`:

```
argue run \
  --task "Review the issue: https://github.com/onevcat/argue/issues/22" \
  --action "Fix the issue based on consensus and open a PR" \
  --verbose
```

### What Happens

[https://github.com/onevcat/argue#what-happens](https://github.com/onevcat/argue#what-happens)

```
[argue] run started
  task: 研究这个 issue 的解法：https://github.com/onevcat/argue/issues/22
  agents: claude-agent, codex-agent | rounds: 2..3

[argue] initial#0  codex-agent (claims+6) — ESLint+Prettier setup, CI lint gate
[argue] initial#0  claude-agent (claims+6) — runtime bugs (couldn't access the issue URL)

[argue] debate#1   codex-agent (1✗ 5↻) — claude's claims valid but out-of-scope
[argue] debate#1   claude-agent (5✗ 1↻) — agreed, self-corrected
[argue] debate#1   claim merged c6 -> c2
  ... 2 more rounds, agents refine and converge ...

[argue] final_vote  11/11 claims accepted unanimously
[argue] result: consensus — codex-agent representative (83.70)
[argue] action: codex-agent opened PR #28
```

codex-agent accessed the issue and proposed ESLint/Prettier claims. claude-agent couldn't reach the URL and found runtime bugs instead. Through debate, codex-agent flagged them as out-of-scope, claude-agent self-corrected, and both converged. All 11 claims passed unanimously. The representative turned consensus into [a real PR](https://github.com/onevcat/argue/pull/28).

After each run, argue writes three output files to `~/.argue/output/<requestId>/` (global config) or `./out/<requestId>/` (local config):

| File | Contents |
|---|---|
| events.jsonl | Streaming event log — every dispatch, response, merge, vote, and score |
| result.json | Structured result — status, claims, resolutions, scores, representative, action |
| summary.md | Human-readable report from the representative agent |

[See the full unabridged output of this run.](https://gist.github.com/onevcat/bbf42778888180c443bea78f395f255b)

### View the Report

[https://github.com/onevcat/argue#view-the-report](https://github.com/onevcat/argue#view-the-report)

After every run, argue prints a hint telling you how to open the report in the hosted viewer:

```
→ View report: argue view argue_1712345678901_a3f9c2
```

You can also open the most recent run directly:

```
argue view                  # open the most recent run
argue view <request-id>     # open a specific run
argue run --view            # open automatically after a run completes
```

The report is gzip-compressed and base64url-encoded into the URL fragment, then decoded entirely in the browser — **nothing is uploaded to any server**. The default viewer is hosted at `https://argue.onev.cat/`. To point at a different viewer (for example, during local viewer development), set `viewer.url` in your config or pass `--viewer-url https://your-viewer/`.

### Common Options

[https://github.com/onevcat/argue#common-options](https://github.com/onevcat/argue#common-options)

For complex or repeated tasks, use an [input JSON file](https://github.com/onevcat/argue/blob/master/packages/argue-cli/examples/task.example.json) instead of inline flags:

```
argue run --input task.json
```

Useful flags:

```
--agents a1,a2                            # pick specific agents from config
--min-participants 2                      # minimum surviving participants required to continue
--on-insufficient-participants interrupt  # interrupt (default) or fail hard
--min-rounds 2                            # at least 2 debate rounds before early-stop
--max-rounds 5                            # cap total debate rounds
--threshold 0.67                          # consensus threshold (default: 1.0 = unanimous)
--action "Fix it"                         # post-debate action for the representative
--verbose                                 # show each agent's reasoning in real time
```

Run `argue --help` for the full list.

> **Behavior change in 0.5.0:** when surviving participants drop below `minParticipants`, argue now returns a structured `interrupted` result instead of throwing a hard error. Pass `--on-insufficient-participants fail` (or set `defaults.participantsPolicy.onInsufficientParticipants: "fail"` in config) to restore the previous behavior.

## Using as a Library

[https://github.com/onevcat/argue#using-as-a-library](https://github.com/onevcat/argue#using-as-a-library)

Behind argue-cli is `@onevcat/argue`, a standalone debate engine you can embed in any system. Implement one interface — `AgentTaskDelegate` — and the engine handles all orchestration.

### Install

[https://github.com/onevcat/argue#install-1](https://github.com/onevcat/argue#install-1)

```
npm install @onevcat/argue
```

### Implement the Delegate

[https://github.com/onevcat/argue#implement-the-delegate](https://github.com/onevcat/argue#implement-the-delegate)

```
import type { AgentTaskDelegate } from "@onevcat/argue";

const delegate: AgentTaskDelegate = {
  async dispatch(task) {
    // Fire off the task and return a taskId immediately.
    // The engine dispatches all participants in parallel, then awaits
    // results separately — so this should return quickly without waiting for completion.
    const taskId = await myAgentFramework.submit(task);
    return { taskId, participantId: task.participantId, kind: task.kind };
  },

  async awaitResult(taskId, timeoutMs) {
    // Called per task to collect the result. The engine uses the taskId
    // to track timeouts, eliminations, and progressive settlement.
    const result = await myAgentFramework.waitFor(taskId, timeoutMs);
    return { ok: true, output: result };
  }
};
```

### Run the Engine

[https://github.com/onevcat/argue#run-the-engine](https://github.com/onevcat/argue#run-the-engine)

```
import { ArgueEngine, MemorySessionStore, DefaultWaitCoordinator } from "@onevcat/argue";

const engine = new ArgueEngine({
  taskDelegate: delegate,
  sessionStore: new MemorySessionStore(),
  waitCoordinator: new DefaultWaitCoordinator(delegate)
});

const result = await engine.start({
  requestId: "review-42",
  task: "Review PR #42 for security and correctness issues",
  participants: [
    { id: "security-agent", role: "security-reviewer" },
    { id: "arch-agent", role: "architecture-reviewer" },
    { id: "correctness-agent", role: "correctness-reviewer" }
  ],
  roundPolicy: { minRounds: 2, maxRounds: 4 },
  consensusPolicy: { threshold: 0.67 },
  reportPolicy: { composer: "representative" },
  actionPolicy: {
    prompt: "Fix all identified issues and post a summary comment."
  }
});
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

