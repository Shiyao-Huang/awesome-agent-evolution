---
repo: khykd/reflector
url: https://github.com/khykd/reflector
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - KhyKd/reflector: Structured self-improvement system for OpenClaw agents. Transforms interactions into learning through a daily/weekly reflection loop that tracks outcomes, extracts patterns, and refines decision-making principles over time. · GitHub

**Source**: https://github.com/khykd/reflector

---

[Skip to content](https://github.com/khykd/reflector#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[KhyKd](https://github.com/KhyKd)

/
**[reflector](https://github.com/KhyKd/reflector)**

Public

- [Notifications](https://github.com/login?return_to=%2FKhyKd%2Freflector)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FKhyKd%2Freflector)
- 
[Star
          4](https://github.com/login?return_to=%2FKhyKd%2Freflector)

[https://github.com/KhyKd/reflector](https://github.com/KhyKd/reflector)

[Branches](https://github.com/KhyKd/reflector/branches)[Tags](https://github.com/KhyKd/reflector/tags)

[https://github.com/KhyKd/reflector/branches](https://github.com/KhyKd/reflector/branches)[https://github.com/KhyKd/reflector/tags](https://github.com/KhyKd/reflector/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History1 Commit1 Commit |  |  |  |
| prompts | prompts |  |  |
| references | references |  |  |
| scripts | scripts |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| SKILL.md | SKILL.md |  |  |
| package.json | package.json |  |  |
| View all files |  |  |  |

## Repository files navigation

# Reflector

[https://github.com/khykd/reflector#reflector](https://github.com/khykd/reflector#reflector)

A structured self-improvement system for [OpenClaw](https://openclaw.ai) agents.

Most agents accumulate experience but don't learn from it. Reflector implements a feedback loop that transforms interactions into better decision-making principles over time.

```
ACT -> OBSERVE -> EXTRACT -> REFINE -> MEASURE -> ACT
```

## How It Works

[https://github.com/khykd/reflector#how-it-works](https://github.com/khykd/reflector#how-it-works)

1. **You work normally.** Reflector doesn't change how you operate.
2. **A daily review** scans all channels for feedback signals - corrections, edits, praise, silence - and logs structured outcomes.
3. **A weekly review** finds patterns across outcomes, evaluates principle candidates against quality gates, and updates your PRINCIPLES.md when evidence warrants it.
4. **You get better.** Principles guide decisions. Better principles mean better decisions.

See [example-principles.md](https://github.com/KhyKd/reflector/blob/main/references/example-principles.md) for what a mature PRINCIPLES.md looks like after a month of use.

## Setup

[https://github.com/khykd/reflector#setup](https://github.com/khykd/reflector#setup)

### Step 1: Initialize

[https://github.com/khykd/reflector#step-1-initialize](https://github.com/khykd/reflector#step-1-initialize)

```
# Clone into your OpenClaw workspace
git clone https://github.com/KhyKd/reflector.git

# Initialize (creates PRINCIPLES.md, tracking files, prints cron config)
node reflector/scripts/init-reflector.js

# Preview without writing anything
node reflector/scripts/init-reflector.js --dry-run
```

### Step 2: Create cron jobs

[https://github.com/khykd/reflector#step-2-create-cron-jobs](https://github.com/khykd/reflector#step-2-create-cron-jobs)

The init script creates your files but cron jobs need to be set up through OpenClaw's cron tool. Create two jobs using the prompts in `prompts/`:

**Daily review** - reads `prompts/daily-review.txt`:

```
Schedule:  30 3 * * *  (3:30 AM daily, adjust to your timezone)
Session:   isolated
Payload:   agentTurn with the contents of prompts/daily-review.txt
Delivery:  none (silent unless something needs human attention)
```

**Weekly refinement** - reads `prompts/weekly-refinement.txt`:

```
Schedule:  0 3 * * 0  (3:00 AM Sunday, adjust to your timezone)
Session:   isolated
Payload:   agentTurn with the contents of prompts/weekly-refinement.txt
Delivery:  announce (sends summary to human)
```

### Step 3: Integrate outcome logging

[https://github.com/khykd/reflector#step-3-integrate-outcome-logging](https://github.com/khykd/reflector#step-3-integrate-outcome-logging)

Add this to your AGENTS.md or equivalent workflow instructions:

```
## After Significant Tasks

When you complete a task and receive feedback (correction, edit, praise,
or notable silence), log the outcome:

  node reflector/scripts/log-outcome.js \
    --task "<what you did>" \
    --quality <correction|edit|praise|silence|unknown> \
    --delta "<what changed between your output and the final result>" \
    --lesson "<what this teaches>"

Not every task needs logging. Log when there's a clear feedback signal -
the human corrected you, rewrote your output, praised your work, or
conspicuously didn't respond to something important.
```

## Log Outcomes

[https://github.com/khykd/reflector#log-outcomes](https://github.com/khykd/reflector#log-outcomes)

```
node reflector/scripts/log-outcome.js \
  --task "Drafted client email" \
  --quality edit \
  --delta "Human shortened technical explanation" \
  --lesson "Executives want implications, not details"
```

Quality types: `correction` | `edit` | `praise` | `silence` | `unknown`

The `--lesson` flag is where the value lives. A log without a lesson is just a record. A log with a lesson is raw material for principles.

## Quality Gates

[https://github.com/khykd/reflector#quality-gates](https://github.com/khykd/reflector#quality-gates)

Principles aren't added on impulse. Before a principle graduates from candidate to active, it must pass all four gates:

- **Evidence threshold** - 3+ supporting outcome observations
- **Tension test** - Does it guide decisions when multiple good options conflict? (A principle that just says "be accurate" isn't a principle - it doesn't help when accuracy conflicts with speed.)
- **Specificity test** - Would it change observable behavior?
- **Uniqueness test** - Not already covered by existing principles?

## Tests

[https://github.com/khykd/reflector#tests](https://github.com/khykd/reflector#tests)

```
npm test
```

40 tests covering initialization, outcome logging, validation, idempotency, and CLI parsing. Uses Node's built-in test runner - no dependencies.

## Documentation

[https://github.com/khykd/reflector#documentation](https://github.com/khykd/reflector#documentation)

| File | What it covers |
|---|---|
| SKILL.md | OpenClaw skill integration |
| references/methodology.md | Why principles beat rules, the three-layer model, failure modes |
| references/templates.md | PRINCIPLES.md framework, example principles, log formats |
| references/example-principles.md | Complete example of a mature PRINCIPLES.md |
| references/cron-prompts.md | Design decisions behind the review prompts |

## Requirements

[https://github.com/khykd/reflector#requirements](https://github.com/khykd/reflector#requirements)

- Node.js >= 18
- [OpenClaw](https://openclaw.ai) (for cron scheduling and session history)

## License

[https://github.com/khykd/reflector#license](https://github.com/khykd/reflector#license)

MIT

## About

         Structured self-improvement system for OpenClaw agents. Transforms interactions into learning through a daily/weekly reflection loop that tracks outcomes, extracts patterns, and refines decision-making principles over time.       

### Resources

[Readme](https://github.com/khykd/reflector#readme-ov-file)

### License

[MIT license](https://github.com/khykd/reflector#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/KhyKd/reflector/activity)

### Stars

[4
        stars](https://github.com/KhyKd/reflector/stargazers)

### Watchers

[0
        watching](https://github.com/KhyKd/reflector/watchers)

### Forks

[0
        forks](https://github.com/KhyKd/reflector/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FKhyKd%2Freflector&report=KhyKd+%28user%29)

## [Releases](https://github.com/KhyKd/reflector/releases)

No releases published

## [Packages
      0](https://github.com/users/KhyKd/packages?repo_name=reflector)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/KhyKd/reflector/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [JavaScript
          100.0%](https://github.com/KhyKd/reflector/search?l=javascript)

     You can’t perform that action at this time.
