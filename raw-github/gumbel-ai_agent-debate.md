---
repo: gumbel-ai/agent-debate
url: https://github.com/gumbel-ai/agent-debate
content_timestamp: 2026-03-07
time_slice: 2026-03
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - gumbel-ai/agent-debate: Structured protocol for AI coding agents to debate technical decisions via shared markdown · GitHub

**Source**: https://github.com/gumbel-ai/agent-debate

---

[Skip to content](https://github.com/gumbel-ai/agent-debate#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[gumbel-ai](https://github.com/gumbel-ai)

/
**[agent-debate](https://github.com/gumbel-ai/agent-debate)**

Public

- [Notifications](https://github.com/login?return_to=%2Fgumbel-ai%2Fagent-debate)You must be signed in to change notification settings
- [Fork
    2](https://github.com/login?return_to=%2Fgumbel-ai%2Fagent-debate)
- 
[Star
          12](https://github.com/login?return_to=%2Fgumbel-ai%2Fagent-debate)

[https://github.com/gumbel-ai/agent-debate](https://github.com/gumbel-ai/agent-debate)

[Branches](https://github.com/gumbel-ai/agent-debate/branches)[Tags](https://github.com/gumbel-ai/agent-debate/tags)

[https://github.com/gumbel-ai/agent-debate/branches](https://github.com/gumbel-ai/agent-debate/branches)[https://github.com/gumbel-ai/agent-debate/tags](https://github.com/gumbel-ai/agent-debate/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History33 Commits33 Commits |  |  |  |
| assets | assets |  |  |
| debates | debates |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| TEMPLATE.md | TEMPLATE.md |  |  |
| agent-guardrails.md | agent-guardrails.md |  |  |
| debate.config.json | debate.config.json |  |  |
| install.sh | install.sh |  |  |
| orchestrate.sh | orchestrate.sh |  |  |
| View all files |  |  |  |

## Repository files navigation

# agent-debate

[https://github.com/gumbel-ai/agent-debate#agent-debate](https://github.com/gumbel-ai/agent-debate#agent-debate)

[https://github.com/gumbel-ai/agent-debate/blob/main/assets/banner.png](https://github.com/gumbel-ai/agent-debate/blob/main/assets/banner.png)

AI agents debate your technical decisions — then you make the call.

Two to four agents (Claude, Codex, Gemini, Copilot) edit a shared markdown file in-place. They strikethrough to disagree, cite `file:line` as evidence, track disputes in a log, and must converge or escalate. It's adversarial code review, not a chatbot.

## What a debate looks like

[https://github.com/gumbel-ai/agent-debate#what-a-debate-looks-like](https://github.com/gumbel-ai/agent-debate#what-a-debate-looks-like)

Here's a real excerpt from a [3-agent debate on adding OpenRouter support](https://github.com/gumbel-ai/agent-debate/blob/main/debates/1-2026-03-07-add-openrouter-support.md) (Claude vs Codex vs Gemini):

```
~~Why a wrapper: Dependencies are just `curl` + `jq`, both standard
on macOS/Linux. [A1-R1]~~
Wrapper is correct, but `jq` is unnecessary dependency surface for v1.
Evidence: repo currently has no `jq` dependency, while `python3` is already
required by orchestrator (`orchestrate.sh:139,445,492,753`). Minimum viable
should be a Python wrapper using stdlib `json` + `urllib.request`. [A2-R1]

### Claude accepts Codex's corrections [A1-R2]

**Python wrapper over bash+jq:** Codex is right. Verified: `orchestrate.sh`
already requires `python3` at 4+ callsites. Adding `jq` as a new dependency
when Python stdlib can do the same job is unnecessary. Conceding. [A1-R2]
```

Agents propose, disagree with evidence, and concede when wrong. Every claim is grounded in actual code. The [full debate](https://github.com/gumbel-ai/agent-debate/blob/main/debates/1-2026-03-07-add-openrouter-support.md) converged in 1 round with all disputes closed.

## Why not just ask one AI?

[https://github.com/gumbel-ai/agent-debate#why-not-just-ask-one-ai](https://github.com/gumbel-ai/agent-debate#why-not-just-ask-one-ai)

- **One agent has blind spots.** A second agent catches what the first missed — wrong assumptions, unnecessary dependencies, missing code paths.
- **Evidence, not vibes.** The protocol forces agents to cite `file:line`, paste log output, and verify each other's claims before agreeing.
- **Scope creep dies here.** Agents must justify every addition. "Easy to add" is not a reason. Unrelated ideas go to a parking lot.
- **You decide, they inform.** Agents converge on a recommendation. You pick what ships.

*10 debates. 12 points to Codex. 9 concessions from Claude. Gemini turned accepted fixes into production-ready plans.*

## Install

[https://github.com/gumbel-ai/agent-debate#install](https://github.com/gumbel-ai/agent-debate#install)

```
curl -fsSL https://raw.githubusercontent.com/gumbel-ai/agent-debate/main/install.sh | bash
```

Works with [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [Codex](https://github.com/openai/codex), [Gemini CLI](https://github.com/google-gemini/gemini-cli), and [GitHub Copilot CLI](https://github.com/github/copilot-cli). Install for one agent only with `--agent claude`, `--agent codex`, `--agent gemini`, or `--agent copilot`. Install Copilot CLI with Homebrew: `brew install copilot-cli`.

## Usage

[https://github.com/gumbel-ai/agent-debate#usage](https://github.com/gumbel-ai/agent-debate#usage)

Just tell any agent what you want:

```
"Start a debate on whether to use WebSockets or polling. Add Codex too."
```

```
"Continue debate 3 — I disagree with Codex's approach, argue for the simpler solution."
```

```
"Auto debate this auth refactor with Codex and Gemini, max 3 rounds."
```

Two modes:

- **Manual** — you switch between agent terminals, each takes a turn editing the shared file
- **Auto** — orchestrator runs agents round-robin until they converge or hit max rounds. By default it then runs a Plan phase; pass `--no-plan` to skip. Use `--skip-provider` if you want to participate as one of the agents yourself Plan controls: `--no-plan` (disable) and `--plan-rounds N` (default: 2).

## How it works

[https://github.com/gumbel-ai/agent-debate#how-it-works](https://github.com/gumbel-ai/agent-debate#how-it-works)

All agents follow the same [guardrails](https://github.com/gumbel-ai/agent-debate/blob/main/agent-guardrails.md):

| Rule | What it means |
|---|---|
| Living document | Agents edit in-place with strikethrough + counter, not append-only chat |
| Evidence required | Every claim must cite file:line, log data, or runtime output inline |
| Disputes tracked | Tabular log with OPEN/CLOSED/PARKED statuses |
| Convergence | All agents must mark STATUS: CONVERGED; any can revert to STATUS: OPEN |
| Scope creep blocked | New ideas go to Parking Lot unless required for the fix |

## Configuration

[https://github.com/gumbel-ai/agent-debate#configuration](https://github.com/gumbel-ai/agent-debate#configuration)

Default agents: `opus` (Claude Opus) + `codex` (OpenAI Codex). Built-in aliases:

| Alias | Agent | Effort support |
|---|---|---|
| opus | Claude Opus | low/medium/high |
| sonnet | Claude Sonnet | low/medium/high |
| codex | Codex | low/medium/high |
| gemini | Gemini (auto) | — |
| copilot | Copilot CLI | — |

3-agent debates: `--agents opus,codex,gemini`. 4-agent debates: `--agents opus,codex,gemini,copilot`.
 Agent count limits come from `debate.max_agents` in config (default in this repo: 4). Override per-project with a `debate.config.json` in your project root. Edit `~/.agent-debate/config.json` to add custom aliases or adjust min/max agent limits.

## Uninstall

[https://github.com/gumbel-ai/agent-debate#uninstall](https://github.com/gumbel-ai/agent-debate#uninstall)

```
curl -fsSL https://raw.githubusercontent.com/gumbel-ai/agent-debate/main/install.sh | bash -s -- --uninstall
```

## Known limitations

[https://github.com/gumbel-ai/agent-debate#known-limitations](https://github.com/gumbel-ai/agent-debate#known-limitations)

- When running inside a host CLI session (Claude/Codex/Gemini), include `--skip-provider <host>` and take that provider's turns directly in the debate file.
- For Copilot host sessions, set `AGENT_DEBATE_HOST_PROVIDER=copilot` and use `--skip-provider copilot`.
- This project orchestrates CLIs; reliability depends on local provider CLI behavior, auth state, and model availability.
- Copilot CLI auth env precedence: `COPILOT_GITHUB_TOKEN`, then `GH_TOKEN`, then `GITHUB_TOKEN` (with Copilot Requests permission).
- Copilot Free tier is 50 premium requests/month; each Copilot turn consumes one request.
- No built-in cost/token accounting yet. If you add paid providers, you need your own usage controls.
- Auto mode validates structure and tags, but final judgment is still human.

## License

[https://github.com/gumbel-ai/agent-debate#license](https://github.com/gumbel-ai/agent-debate#license)

MIT

## About

         Structured protocol for AI coding agents to debate technical decisions via shared markdown       

### Topics

[multi-agent](https://github.com/topics/multi-agent)[gemini](https://github.com/topics/gemini)[developer-tools](https://github.com/topics/developer-tools)[code-review](https://github.com/topics/code-review)[debate](https://github.com/topics/debate)[codex](https://github.com/topics/codex)[ai-agents](https://github.com/topics/ai-agents)[claude](https://github.com/topics/claude)

### Resources

[Readme](https://github.com/gumbel-ai/agent-debate#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/gumbel-ai/agent-debate/activity)

[Custom properties](https://github.com/gumbel-ai/agent-debate/custom-properties)

### Stars

[12
        stars](https://github.com/gumbel-ai/agent-debate/stargazers)

### Watchers

[0
        watching](https://github.com/gumbel-ai/agent-debate/watchers)

### Forks

[2
        forks](https://github.com/gumbel-ai/agent-debate/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fgumbel-ai%2Fagent-debate&report=gumbel-ai+%28user%29)

## [Releases
      9](https://github.com/gumbel-ai/agent-debate/releases)

[v0.5.0 — Karpathy principles
        
          Latest
      
      Apr 13, 2026](https://github.com/gumbel-ai/agent-debate/releases/tag/v0.5.0)
[+ 8 releases](https://github.com/gumbel-ai/agent-debate/releases)

## [Packages
      0](https://github.com/orgs/gumbel-ai/packages?repo_name=agent-debate)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/gumbel-ai/agent-debate/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Shell
          100.0%](https://github.com/gumbel-ai/agent-debate/search?l=shell)

     You can’t perform that action at this time.
