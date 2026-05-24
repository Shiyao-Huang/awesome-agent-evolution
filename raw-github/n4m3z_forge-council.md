---
repo: n4m3z/forge-council
url: https://github.com/n4m3z/forge-council
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - N4M3Z/forge-council: Multi-agent council orchestration via Claude Code agent teams · GitHub

**Source**: https://github.com/n4m3z/forge-council

---

[Skip to content](https://github.com/n4m3z/forge-council#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[N4M3Z](https://github.com/N4M3Z)

/
**[forge-council](https://github.com/N4M3Z/forge-council)**

Public

- [Notifications](https://github.com/login?return_to=%2FN4M3Z%2Fforge-council)You must be signed in to change notification settings
- [Fork
    3](https://github.com/login?return_to=%2FN4M3Z%2Fforge-council)
- 
[Star
          9](https://github.com/login?return_to=%2FN4M3Z%2Fforge-council)

[https://github.com/N4M3Z/forge-council](https://github.com/N4M3Z/forge-council)

[Branches](https://github.com/N4M3Z/forge-council/branches)[Tags](https://github.com/N4M3Z/forge-council/tags)

[https://github.com/N4M3Z/forge-council/branches](https://github.com/N4M3Z/forge-council/branches)[https://github.com/N4M3Z/forge-council/tags](https://github.com/N4M3Z/forge-council/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History61 Commits61 Commits |  |  |  |
| .claude-plugin | .claude-plugin |  |  |
| .claude | .claude |  |  |
| .codex | .codex |  |  |
| .gemini | .gemini |  |  |
| .github | .github |  |  |
| .opencode | .opencode |  |  |
| agents | agents |  |  |
| lib @ e12eceb | lib @ e12eceb |  |  |
| rules | rules |  |  |
| skills | skills |  |  |
| .gitignore | .gitignore |  |  |
| .gitmodules | .gitmodules |  |  |
| AGENTS.md | AGENTS.md |  |  |
| AgentTeams.md | AgentTeams.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| GEMINI.md | GEMINI.md |  |  |
| INSTALL.md | INSTALL.md |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| VERIFY.md | VERIFY.md |  |  |
| defaults.yaml | defaults.yaml |  |  |
| module.yaml | module.yaml |  |  |
| View all files |  |  |  |

## Repository files navigation

# forge-council

[https://github.com/n4m3z/forge-council#forge-council](https://github.com/n4m3z/forge-council#forge-council)

Thirteen specialists. Four councils. One verdict.

A single AI agent is a single perspective. It gives you one take — its own — and misses everything outside its frame. forge-council provides specialist agents that work from independent perspectives: architecture, design, implementation, testing, security, product, research. Assemble them into councils for multi-round debates, or invoke any specialist standalone.

## Quick Start

[https://github.com/n4m3z/forge-council#quick-start](https://github.com/n4m3z/forge-council#quick-start)

```
git clone --recurse-submodules https://github.com/N4M3Z/forge-council.git
cd forge-council
make install     # Install agents + skills to .claude/, .gemini/, .codex/
make verify
```

Then in your session:

```
/Demo
/Council [topic]
/DeveloperCouncil [task]
/ProductCouncil [requirements]
/KnowledgeCouncil [knowledge-management topic]
```

Or invoke any specialist standalone — no council needed:

```
Task: TheOpponent — "We should rewrite the backend in Rust"
Task: WebResearcher — "Best practices for rate limiting in distributed systems"
Task: SecurityArchitect — "Threat model our authentication system"
```

> **Note**: `make install` defaults to `SCOPE=workspace` and installs into local `./.claude`, `./.gemini`, and `./.codex`. To install globally for your user, use `make install SCOPE=user`.

## Makefile Commands

[https://github.com/n4m3z/forge-council#makefile-commands](https://github.com/n4m3z/forge-council#makefile-commands)

Primary commands:

```
make install                 # install agents + skills + teams config (SCOPE=workspace|user|all)
make install-agents          # install agent artifacts (uses SCOPE)
make install-skills          # install skills for Claude, Gemini, and Codex (uses SCOPE)
make install-skills-codex    # install native council skills (uses SCOPE)
make verify                  # run verification checks (13 agents)
```

## What it does

[https://github.com/n4m3z/forge-council#what-it-does](https://github.com/n4m3z/forge-council#what-it-does)

**3-round debate** — All councils use a structured debate where specialists respond to each other's points across three rounds: initial positions, challenges, convergence. The lead synthesizes areas of agreement, remaining disagreements, and recommended actions.

**Council skills** — `/DeveloperCouncil` for code review, architecture, and debugging. `/DebateCouncil` for cross-domain strategy and design debates. `/ProductCouncil` for requirements, features, and go/no-go decisions. `/KnowledgeCouncil` for knowledge architecture and memory lifecycle decisions. Each selects the right specialists for the task.

**User checkpoints** — After Round 1, the lead shows you the initial positions and asks for your input before the debate rounds begin. Add context, redirect focus, or skip to synthesis. Override with `autonomous` (no stops), `interactive` (stop every round), or `quick` (one round only).

**Standalone specialists** — Every agent works independently via the Task tool. TheOpponent stress-tests your proposals. WebResearcher investigates topics across the web. No orchestration needed.

## What it looks like

[https://github.com/n4m3z/forge-council#what-it-looks-like](https://github.com/n4m3z/forge-council#what-it-looks-like)

You have an idea for a product. Before you write a line of code, you put it in front of the council:

```
/DebateCouncil We're building an AI code review tool for enterprise — $50/seat,
targeting engineering teams of 50+. Should we go all-in?

Round 1 — Initial Positions:
  SystemArchitect: The hard part isn't the AI — it's the integration surface.
              You need to plug into GitHub, GitLab, Bitbucket, and on-prem.
              That's four integration contracts before you ship one review.
  UxDesigner: Enterprise buyers won't even demo without SSO. Your landing
              page needs a "Book a demo" button, not a "Sign up" button.
              The first user isn't a developer — it's a procurement team.
  SoftwareDeveloper: $50/seat is a race to the bottom — GitHub Copilot is $19.
              Sell saved engineering hours, not seats. "This tool caught
              42 bugs last sprint" beats a per-seat invoice.
  WebResearcher: Three competitors pivoted from per-seat to usage-based pricing
              in 2025. CodeRabbit, Sourcery, and Codium all moved to
              per-PR or per-repo models after enterprise pushback on seat
              math for a tool that reviews code, not writes it.

[Checkpoint: Any context to add before debate?]

Round 2 — Challenges:
  SystemArchitect: "WebResearcher's data on pricing pivots changes the equation.
              If we go usage-based, metering infrastructure becomes day-1
              architecture, not a nice-to-have."
  UxDesigner: "SoftwareDeveloper's right on the value pitch, but procurement
              still needs a number. Usage-based with a monthly cap gives
              both — predictable budgets, honest pricing."
  SoftwareDeveloper: "SystemArchitect's integration concern is the real blocker.
              Start with GitHub only. One integration done well beats four
              done poorly. Validate with 10 teams before touching GitLab."
  WebResearcher: "SoftwareDeveloper's 'GitHub first' aligns with the data — 73%
              of enterprise teams use GitHub. But SystemArchitect should flag: the
              GitHub API rate limit (5000/hr) will bottleneck teams over
              200 developers."

Round 3 — Convergence:
  Agreement:  Start GitHub-only. Usage-based pricing (per-PR, monthly cap).
              SSO before launch. Sell outcomes, not seats.
  Disagreement: SystemArchitect wants the integration abstraction layer now
              (10 days). SoftwareDeveloper says YAGNI — build it when GitLab is real.
  Recommendation: Ship GitHub-only MVP with usage-based pricing and SSO.
              Build the abstraction layer when the second integration has
              a signed LOI, not before. The pricing model matters more
              than the code — validate that first.
```

One prompt. Four perspectives. The WebResearcher kills the pricing model with market data. The UxDesigner catches a procurement blocker nobody was thinking about. The SoftwareDeveloper and SystemArchitect disagree on abstraction timing — and the council resolves it with a concrete decision rule.

---

The product council does the same thing for requirements and strategy:

```
/ProductCouncil We're launching a payments API — how should we price it?

Round 1 — Initial Assessments:
  ProductManager: Transaction-based (0.5% + $0.10) aligns cost with value.
                  Developers only pay when they make money.
  UxDesigner:     Developers hate surprise bills. Ship a pricing calculator
                  on day one. Show "your 10K transactions/mo = $60" before
                  they even create an account.
  SoftwareDeveloper: Metering infrastructure for real-time usage tracking is
                  three months of work. We don't have it. Flat tiers ship
                  in two weeks.
  DataAnalyst:    At 0.5%, we're uncompetitive above $200 transactions —
                  Stripe is 2.9% but includes the payment rail. We're just
                  the API layer. Should be 10x cheaper or 10x simpler.

Round 2 — Challenges:
  ProductManager: "DataAnalyst's pricing math is the wake-up call. We're not
                  competing with Stripe — we're competing with 'build it
                  yourself.' Price against internal eng cost, not Stripe."
  DataAnalyst:    "SoftwareDeveloper's right that metering is expensive. But flat
                  tiers leave money on the table above 50K transactions/mo.
                  That's exactly the segment that pays for the product."
  SoftwareDeveloper: "Ship flat tiers now, add metering when we have paying
                  customers funding it. Premature metering killed Segment's
                  first year — they burned runway on billing, not product."
  UxDesigner:     "PM's 'price against internal cost' reframes everything.
                  Landing page should show: '3 engineers x 2 months = $90K.
                  Or $199/mo.' That's the real comparison."

Round 3 — Convergence:
  Recommendation: Three flat tiers ($0/99/499) at launch. Add usage-based
                  above $499 when volume justifies metering investment.
                  Position against build-vs-buy, not against Stripe.
```

## Try it

[https://github.com/n4m3z/forge-council#try-it](https://github.com/n4m3z/forge-council#try-it)

After installing, run the interactive demo:

```
/Demo
```

Or jump straight into a council with your own question:

```
/DebateCouncil [any question worth debating]
/DeveloperCouncil [code to review, architecture to evaluate]
/ProductCouncil [requirements to validate, feature to scope]
```

Or invoke any specialist standalone — no council needed:

```
Task: TheOpponent — "We should rewrite the backend in Rust"
Task: WebResearcher — "Best practices for rate limiting in distributed systems"
Task: SecurityArchitect — "Threat model our authentication system"
```

## Codex Sub-Agents

[https://github.com/n4m3z/forge-council#codex-sub-agents](https://github.com/n4m3z/forge-council#codex-sub-agents)

In Codex, specialists are used via **explicit sub-agent invocation**. They are not auto-selected just because they are installed.

- Use direct invocation style: `Task: SoftwareDeveloper — [request]`
- Use council skills when you want multi-agent debate: `/DebateCouncil`, `/DeveloperCouncil`, `/ProductCouncil`, `/KnowledgeCouncil`
- If you do not ask for a specialist/sub-agent, the main session handles the request alone

## The debate

[https://github.com/n4m3z/forge-council#the-debate](https://github.com/n4m3z/forge-council#the-debate)

```
/DebateCouncil [topic]  or  /DeveloperCouncil [task]  or  /ProductCouncil [spec]
    │
    ▼
┌─────────────────────────────────────────┐
│  Lead: parse task, select specialists,  │
│  detect mode (checkpoint/auto/quick)    │
└─────────────────────────────────────────┘
    │
    ▼  ROUND 1: Initial Positions
┌──────────┬──────────┬──────────┬──────────┐
│ Agent A  │ Agent B  │ Agent C  │ Agent D  │  ← in parallel
└────┬─────┴────┬─────┴────┬─────┴────┬─────┘
     └──────────┴──────────┴──────────┘
                    │
    ▼  [Checkpoint: user input]
                    │
    ▼  ROUND 2: Challenges (with Round 1 transcript)
┌──────────┬──────────┬──────────┬──────────┐
│ Agent A  │ Agent B  │ Agent C  │ Agent D  │  ← in parallel
└────┬─────┴────┬─────┴────┬─────┴────┬─────┘
     └──────────┴──────────┴──────────┘
                    │
    ▼  ROUND 3: Convergence (with full transcript)
┌──────────┬──────────┬──────────┬──────────┐
│ Agent A  │ Agent B  │ Agent C  │ Agent D  │  ← in parallel
└────┬─────┴────┬─────┴────┬─────┴────┬─────┘
     └──────────┴──────────┴──────────┘
                    │
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

