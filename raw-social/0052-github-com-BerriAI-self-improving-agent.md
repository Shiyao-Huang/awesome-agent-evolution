# BerriAI/self-improving-agent

- URL: https://github.com/BerriAI/self-improving-agent
- Platform: github.com
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown

## Raw Content

## GitHub - BerriAI/self-improving-agent: Drop-in self-improvement loop for AI agents — two tools + a skill. Agent proposes a diff, human approves, draft PR opens. · GitHub

**Source**: https://github.com/BerriAI/self-improving-agent

---

[Skip to content](https://github.com/BerriAI/self-improving-agent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[BerriAI](https://github.com/BerriAI)

/
**[self-improving-agent](https://github.com/BerriAI/self-improving-agent)**

Public

- [Notifications](https://github.com/login?return_to=%2FBerriAI%2Fself-improving-agent)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FBerriAI%2Fself-improving-agent)
- 
[Star
          4](https://github.com/login?return_to=%2FBerriAI%2Fself-improving-agent)

[https://github.com/BerriAI/self-improving-agent](https://github.com/BerriAI/self-improving-agent)

[Branches](https://github.com/BerriAI/self-improving-agent/branches)[Tags](https://github.com/BerriAI/self-improving-agent/tags)

[https://github.com/BerriAI/self-improving-agent/branches](https://github.com/BerriAI/self-improving-agent/branches)[https://github.com/BerriAI/self-improving-agent/tags](https://github.com/BerriAI/self-improving-agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History15 Commits15 Commits |  |  |  |
| assets | assets |  |  |
| examples | examples |  |  |
| skills | skills |  |  |
| src | src |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| package-lock.json | package-lock.json |  |  |
| package.json | package.json |  |  |
| tsconfig.json | tsconfig.json |  |  |
| View all files |  |  |  |

## Repository files navigation

# self-improving-agent

[https://github.com/BerriAI/self-improving-agent#self-improving-agent](https://github.com/BerriAI/self-improving-agent#self-improving-agent)

**A drop-in self-improvement loop for any AI agent.**

Two tools. The agent proposes a minimal diff, you approve, a draft PR opens.

```
npm install self-improving-agent
```

[https://github.com/BerriAI/self-improving-agent/blob/main/assets/banner.png](https://github.com/BerriAI/self-improving-agent/blob/main/assets/banner.png)

## For AI coding agents

[https://github.com/BerriAI/self-improving-agent#for-ai-coding-agents](https://github.com/BerriAI/self-improving-agent#for-ai-coding-agents)

If you're Cursor / Claude Code / Codex / etc. wiring this into a user's project:

1. `npm install self-improving-agent`
2. Detect the agent framework from `package.json`: 
  - `@anthropic-ai/claude-agent-sdk` → import from `self-improving-agent/claude`
  - `@mariozechner/pi-agent-core` → import from `self-improving-agent/pi`
  - anything else → import from `self-improving-agent` (root)

3. Add the two tools to the agent's existing tool list. **Do not touch the user's system prompt.** The safety/workflow rules are baked into the tool descriptions.
4. Add these two env vars to `.env` / `.env.example`: 
  - `SELF_IMPROVING_AGENT_REPO=<owner>/<name>` — e.g. `BerriAI/shin-builder-oss`
  - `SELF_IMPROVING_AGENT_GITHUB_TOKEN=<PAT>` — fine-grained PAT with `contents: write` + `pull requests: write` on that repo

5. Don't add callbacks or custom approval gates unless the user asks — the defaults are safe.

## Why

[https://github.com/BerriAI/self-improving-agent#why](https://github.com/BerriAI/self-improving-agent#why)

Most agents fail in repeatable ways: skipped setup steps, vague prompts, wrong tool routing. Today you fix them by hand-editing prompts. `self-improving-agent` lets the agent fix itself — under explicit human approval.

## Configure once, via env vars

[https://github.com/BerriAI/self-improving-agent#configure-once-via-env-vars](https://github.com/BerriAI/self-improving-agent#configure-once-via-env-vars)

```
# Required
export SELF_IMPROVING_AGENT_REPO=BerriAI/shin-builder-oss
export SELF_IMPROVING_AGENT_GITHUB_TOKEN=ghp_xxxxxxxxxxxxx

# Optional
export SELF_IMPROVING_AGENT_BASE_BRANCH=main                          # default: main
export SELF_IMPROVING_AGENT_PROPOSALS_DIR=./runs/improvements         # default: ./runs/improvements
export SELF_IMPROVING_AGENT_CACHE_DIR=~/.cache/self-improving-agent/… # default: derived from repo
```

The token must be a [fine-grained PAT](https://github.com/settings/tokens?type=beta) with **Contents: Read & write** and **Pull requests: Read & write** on the configured repo.

The lib clones the repo into `cacheDir` on first use and keeps it on the base branch — no local clone or `gh` CLI required. Push and PR creation go through the GitHub REST API with the token.

## Use it

[https://github.com/BerriAI/self-improving-agent#use-it](https://github.com/BerriAI/self-improving-agent#use-it)

Both subpaths export the same thing: `feedbackTools`, an array of two tools shaped for the framework. Just append them to your existing tool list — your system prompt stays untouched.

### Claude Agent SDK

[https://github.com/BerriAI/self-improving-agent#claude-agent-sdk](https://github.com/BerriAI/self-improving-agent#claude-agent-sdk)

```
import { query } from "@anthropic-ai/claude-agent-sdk";
import { feedbackMcp } from "self-improving-agent/claude";

await query({ prompt: userMessage, options: feedbackMcp() });
```

That's it. `feedbackMcp()` returns `{ mcpServers, allowedTools }` — spread it into `options` and the two tools are wired in.

Already have your own tools? Merge:

```
const fb = feedbackMcp();
await query({
  prompt: userMessage,
  options: {
    mcpServers:  { ...myServers,  ...fb.mcpServers  },
    allowedTools: [...myAllowed,  ...fb.allowedTools],
  },
});
```

> Why the `mcpServers` field? The Claude SDK only exposes custom tools through its in-process `createSdkMcpServer` wrapper and addresses them as `mcp__{server}__{tool}` — that's a Claude SDK requirement, not an external MCP server. `feedbackMcp()` hides the boilerplate. ([custom tools docs](https://code.claude.com/docs/en/agent-sdk/custom-tools))

### pi-agent-core

[https://github.com/BerriAI/self-improving-agent#pi-agent-core](https://github.com/BerriAI/self-improving-agent#pi-agent-core)

```
import { Agent } from "@mariozechner/pi-agent-core";
import { feedbackTools } from "self-improving-agent/pi";

new Agent({
  initialState: {
    systemPrompt: myPrompt,                         // unchanged
    tools: [...myTools, ...feedbackTools],          // just append
    messages: [],
    model,
    thinkingLevel: "high",
  },
  getApiKey,
  toolExecution: "sequential",
});
```

### Any other framework

[https://github.com/BerriAI/self-improving-agent#any-other-framework](https://github.com/BerriAI/self-improving-agent#any-other-framework)

```
import { feedbackTools } from "self-improving-agent";

const fb = feedbackTools(); // returns { writeImprovementProposal, applyProposal }
// each tool: { name, description, parameters (JSON Schema), execute(input): Promise<{ message }> }
```

Pass `parameters` as the tool's input schema and `execute` as the handler. Works with the OpenAI SDK, Vercel AI SDK, LangChain, raw `fetch` — anything.

## Optional: stronger guidance via `feedbackSkill`

[https://github.com/BerriAI/self-improving-agent#optional-stronger-guidance-via-feedbackskill](https://github.com/BerriAI/self-improving-agent#optional-stronger-guidance-via-feedbackskill)

The two tool descriptions already carry the workflow and safety rules, so most agents will use them correctly out of the box. If you find your agent still misroutes (e.g. proposes diffs for normal product feedback), append the skill markdown to your existing system prompt — never replace it:

```
import { feedbackSkill } from "self-improving-agent";   // also re-exported from /claude and /pi

const myPrompt = `${myExistingPrompt}\n\n${feedbackSkill}`;

// Claude SDK alternative — append to the preset:
options: { systemPrompt: { type: "preset", preset: "claude_code", append: feedbackSkill } }
```

## Callbacks (optional)

[https://github.com/BerriAI/self-improving-agent#callbacks-optional](https://github.com/BerriAI/self-improving-agent#callbacks-optional)

For posting the diff or PR URL back to Slack/Discord/wherever:

```
import { createFeedbackTools } from "self-improving-agent/claude";   // or /pi

const tools = createFeedbackTools({
  onProposed: async (p, r) => slack.post(`Proposal ${r.proposalId} — risk: ${p.risk}`),
  onApplied:  async (r) => slack.post(`PR opened: ${r.prUrl}`),
  onBeforeApply: async (proposal, input, ctx) => {
    if (!isApproval(ctx.lastUserMessage)) return false;
  },
});
```

## Safety

[https://github.com/BerriAI/self-improving-agent#safety](https://github.com/BerriAI/self-improving-agent#safety)

`apply_proposal` pushes a branch and opens a PR. Four layers of defense:

1. **Tool description** — model is told to only call `apply_proposal` after explicit approval in the user's *most recent* message.
2. **Schema gate** — tool requires `userConfirmedInThisMessage: true`; executor throws on `false`.
3. **`onBeforeApply` hook** — your code can reject any apply (rate limits, allowlist, custom intent matching).
4. **PAT scope** — the token's GitHub permissions cap blast radius. Use a fine-grained PAT pinned to one repo with only `contents:write` + `pull_requests:write`.

`apply_proposal` also refuses to run if the file is missing in the cloned repo or if `originalSnippet` doesn't appear exactly once. The token rides in argv only for the duration of clone/push — never persisted to `.git/config`.

## Requirements

[https://github.com/BerriAI/self-improving-agent#requirements](https://github.com/BerriAI/self-improving-agent#requirements)

- Node ≥ 18
- `git` on PATH (no `gh` CLI needed)
- A GitHub fine-grained PAT scoped to the target repo
- One of: `@anthropic-ai/claude-agent-sdk`, `@mariozechner/pi-agent-core`, or any agent framework that takes JSON-schema tools

## License

[https://github.com/BerriAI/self-improving-agent#license](https://github.com/BerriAI/self-improving-agent#license)

MIT © BerriAI

## About

         Drop-in self-improvement loop for AI agents — two tools + a skill. Agent proposes a diff, human approves, draft PR opens.       

### Resources

[Readme](https://github.com/BerriAI/self-improving-agent#readme-ov-file)

### License

[MIT license](https://github.com/BerriAI/self-improving-agent#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/BerriAI/self-improving-agent/activity)

[Custom properties](https://github.com/BerriAI/self-improving-agent/custom-properties)

### Stars

[4
        stars](https://github.com/BerriAI/self-improving-agent/stargazers)

### Watchers

[0
        watching](https://github.com/BerriAI/self-improving-agent/watchers)

### Forks

[0
        forks](https://github.com/BerriAI/self-improving-agent/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FBerriAI%2Fself-improving-agent&report=BerriAI+%28user%29)

## [Releases](https://github.com/BerriAI/self-improving-agent/releases)

No releases published

## [Packages
      0](https://github.com/orgs/BerriAI/packages?repo_name=self-improving-agent)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/BerriAI/self-improving-agent/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [TypeScript
          100.0%](https://github.com/BerriAI/self-improving-agent/search?l=typescript)

     You can’t perform that action at this time.
