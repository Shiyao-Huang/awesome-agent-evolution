---
repo: sola-st/repairagent
url: https://github.com/sola-st/repairagent
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - sola-st/RepairAgent: RepairAgent is an autonomous LLM-based agent for software repair. · GitHub

**Source**: https://github.com/sola-st/repairagent

---

[Skip to content](https://github.com/sola-st/repairagent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[sola-st](https://github.com/sola-st)

/
**[RepairAgent](https://github.com/sola-st/RepairAgent)**

Public

- [Notifications](https://github.com/login?return_to=%2Fsola-st%2FRepairAgent)You must be signed in to change notification settings
- [Fork
    29](https://github.com/login?return_to=%2Fsola-st%2FRepairAgent)
- 
[Star
          95](https://github.com/login?return_to=%2Fsola-st%2FRepairAgent)

[https://github.com/sola-st/RepairAgent](https://github.com/sola-st/RepairAgent)

[Branches](https://github.com/sola-st/RepairAgent/branches)[Tags](https://github.com/sola-st/RepairAgent/tags)

[https://github.com/sola-st/RepairAgent/branches](https://github.com/sola-st/RepairAgent/branches)[https://github.com/sola-st/RepairAgent/tags](https://github.com/sola-st/RepairAgent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History62 Commits62 Commits |  |  |  |
| .devcontainer | .devcontainer |  |  |
| data | data |  |  |
| repair_agent | repair_agent |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# RepairAgent

[https://github.com/sola-st/repairagent#repairagent](https://github.com/sola-st/repairagent#repairagent)

**Autonomous LLM-powered bug repair for Java projects — no human intervention needed.**

[https://github.com/codespaces/new?hide_repo_select=true&repo=sola-st/RepairAgent&ref=main](https://github.com/codespaces/new?hide_repo_select=true&repo=sola-st/RepairAgent&ref=main)[https://arxiv.org/abs/2403.17134](https://arxiv.org/abs/2403.17134)[https://github.com/sola-st/RepairAgent/blob/main/LICENSE](https://github.com/sola-st/RepairAgent/blob/main/LICENSE)[https://www.python.org/downloads/](https://www.python.org/downloads/)

---

RepairAgent is an autonomous agent that fixes bugs in Java projects using LLMs. It operates in a loop: **localize the bug -> analyze the code -> generate a fix -> test it -> iterate** — all without human guidance.

On the [Defects4J](https://github.com/rjust/defects4j) benchmark, RepairAgent correctly fixed **164 bugs**, outperforming prior state-of-the-art tools:

| Tool | Correct Fixes | Year |
|---|---|---|
| RepairAgent | 164 | 2024 |
| ChatRepair | 162 | 2024 |
| SelfAPR | 110 | 2023 |
| ITER | 107 | 2023 |
| AlphaRepair | 100 | 2022 |
| Recoder | 68 | 2021 |

> Published at [ICSE 2025](https://arxiv.org/abs/2403.17134). RepairAgent is the first autonomous agent-based approach to automated program repair.

## How It Works

[https://github.com/sola-st/repairagent#how-it-works](https://github.com/sola-st/repairagent#how-it-works)

```
RepairAgent Workflow
                     ====================

  +---------------------------------------------------------------+
  |                      LLM-Powered Agent                        |
  |                                                               |
  |   +-----------------+    +------------------+    +----------+ |
  |   |  1. Understand  | -> |   2. Collect Info | -> | 3. Fix   | |
  |   |     the Bug     |    |    to Fix the Bug |    | the Bug  | |
  |   +-----------------+    +------------------+    +----------+ |
  |   | - Extract test  |    | - Search codebase |    | - Write  | |
  |   | - Form          |    | - Extract methods |    |   patch   | |
  |   |   hypothesis    |    | - Find similar    |    | - Run    | |
  |   |                 |    |   patterns        |    |   tests  | |
  |   +-----------------+    +------------------+    +----+-----+ |
  |         ^                                              |      |
  |         |           iterate if tests fail              |      |
  |         +----------------------------------------------+      |
  +---------------------------------------------------------------+

  Input: Buggy Java project + failing test
  Output: Correct patch that passes all tests
```

The agent has three states, each with specialized commands:

- **Understand the bug**: reads failing tests, forms hypotheses about root causes
- **Collect information**: searches the codebase, extracts method signatures and similar code patterns
- **Try fixes**: generates patches, applies them, runs the test suite, and iterates

## Supported Models

[https://github.com/sola-st/repairagent#supported-models](https://github.com/sola-st/repairagent#supported-models)

RepairAgent supports both **OpenAI** and **Anthropic (Claude)** models:

| Provider | Models | Environment Variable |
|---|---|---|
| OpenAI | gpt-4o, gpt-4o-mini, gpt-4.1, gpt-4.1-mini, gpt-4.1-nano, gpt-4-turbo, gpt-3.5-turbo | OPENAI_API_KEY |
| OpenAI (gpt-5) | gpt-5-mini, and other gpt-5-* variants | OPENAI_API_KEY |
| Anthropic | claude-sonnet-4-20250514, claude-haiku-4-20250414, claude-opus-4-20250514 | ANTHROPIC_API_KEY |

> **Note:** You can pass any OpenAI or Anthropic model name via `--model` — the table above lists the models with pre-configured cost tracking, but unlisted models work too (cost tracking will be skipped).
> 
> 
> 
> **gpt-5 family:** These models only accept `temperature=1.0`. RepairAgent handles this automatically — any `--temperature` value is overridden to `1.0` when using a `gpt-5-*` model.

---

## Quick Start

[https://github.com/sola-st/repairagent#quick-start](https://github.com/sola-st/repairagent#quick-start)

The guided CLI handles everything — environment checks, API key setup, model selection, and bug picking:

```
cd repair_agent
python3 repairagent.py                    # Interactive wizard — walks you through everything
```

Or run directly without prompts:

```
python3 repairagent.py run --bugs "Chart 1, Math 5" --model gpt-4o-mini
```

That's it. The CLI will tell you if anything is missing and help you set it up.

### Environment options

[https://github.com/sola-st/repairagent#environment-options](https://github.com/sola-st/repairagent#environment-options)

You need **Java 11**, **Perl**, and **Defects4J** installed. Pick whichever setup method is easiest for you:

| Method | What to do |
|---|---|
| Codespaces (zero install) | Click the Codespaces badge above. Everything is pre-installed. |
| VS Code Dev Container | Clone the repo, open in VS Code, click "Reopen in Container". See details below. |
| Docker | python3 repairagent.py run --docker --bugs "Chart 1" --model gpt-4o-mini — builds and runs in a container. |
| Local | Install Java 11, Perl, Defects4J manually. Run python3 repairagent.py setup to verify. |

### VS Code Dev Container

[https://github.com/sola-st/repairagent#vs-code-dev-container](https://github.com/sola-st/repairagent#vs-code-dev-container)

1. 

**Clone and prepare:**

```
git clone https://github.com/sola-st/RepairAgent.git
cd RepairAgent/repair_agent
rm -rf defects4j
git clone https://github.com/rjust/defects4j.git
cp -r ../data/buggy-lines defects4j
cp -r ../data/buggy-methods defects4j
cd ..
```

2. 

**Open in VS Code**, then click "Reopen in Container" (or Command Palette: `Dev Containers: Reopen in Container`).

3. 

**Run:**

```
cd repair_agent
python3 repairagent.py
```

---

## Table of Contents

[https://github.com/sola-st/repairagent#table-of-contents](https://github.com/sola-st/repairagent#table-of-contents)

1. [Usage](https://github.com/sola-st/repairagent#usage)
2. [Requirements](https://github.com/sola-st/repairagent#requirements)
3. [Configuration](https://github.com/sola-st/repairagent#configuration)
4. [Analyzing Results](https://github.com/sola-st/repairagent#analyzing-results)
5. [Replicating Experiments](https://github.com/sola-st/repairagent#replicating-experiments)
6. [Our Data](https://github.com/sola-st/repairagent#our-data)
7. [Contributing](https://github.com/sola-st/repairagent#contributing)
8. [Citation](https://github.com/sola-st/repairagent#citation)

---

## Usage

[https://github.com/sola-st/repairagent#usage](https://github.com/sola-st/repairagent#usage)

### Interactive mode

[https://github.com/sola-st/repairagent#interactive-mode](https://github.com/sola-st/repairagent#interactive-mode)

```
python3 repairagent.py
```

The wizard guides you through:

1. **Environment check** — verifies Python, Java, Defects4J, API keys
2. **API key setup** — configures OpenAI and/or Anthropic keys
3. **Model selection** — pick from available models
4. **Bug selection** — enter manually, pick from a project, or load a file
5. **Run** — executes the agent and shows a results summary

### Direct mode (for scripting/CI)

[https://github.com/sola-st/repairagent#direct-mode-for-scriptingci](https://github.com/sola-st/repairagent#direct-mode-for-scriptingci)

```
# Single bug
python3 repairagent.py run --bugs "Chart 1" --model gpt-4o-mini

# Multiple bugs
python3 repairagent.py run --bugs "Chart 1, Math 5, Lang 22" --model claude-sonnet-4-20250514

# From a file
python3 repairagent.py run --bugs-file experimental_setups/bugs_list --model gpt-4o-mini

# In Docker
python3 repairagent.py run --docker --bugs "Chart 1" --model gpt-4o-mini

# Custom cycle limit
python3 repairagent.py run --bugs "Chart 1" --model gpt-4o --max-cycles 60

# Custom temperature
python3 repairagent.py run --bugs "Chart 1" --model gpt-4o --temperature 0.5

# Custom hyperparameters file
python3 repairagent.py run --bugs "Chart 1" --model gpt-4o-mini --hyperparams my_hyperparams.json
```

### CLI flags

[https://github.com/sola-st/repairagent#cli-flags](https://github.com/sola-st/repairagent#cli-flags)

| Flag | Description | Default |
|---|---|---|
| --bugs | Comma-separated bugs, e.g. "Chart 1,Math 5" | — |
| --bugs-file | Path to a text file with one bug per line | — |
| --model | LLM model name | gpt-4o-mini |
| --temperature | LLM temperature (0.0–2.0). Ignored for gpt-5 family (forced to 1.0). | 0.0 |
| --max-cycles | Maximum agent cycles per bug | 40 |
| --hyperparams | Path to hyperparameters JSON file | hyperparams.json |
| --docker | Run inside a Docker container | off |

### Setup only

[https://github.com/sola-st/repairagent#setup-only](https://github.com/sola-st/repairagent#setup-only)

```
python3 repairagent.py setup                  # Check environment & configure API keys
python3 repairagent.py setup --docker         # Build Docker image
python3 repairagent.py setup --install-deps   # Install all missing dependencies automatically
```

### Shell script (advanced)

[https://github.com/sola-st/repairagent#shell-script-advanced](https://github.com/sola-st/repairagent#shell-script-advanced)

For users who prefer the original shell-based workflow:

```
./run_on_defects4j.sh <bugs_file> <hyperparams_file> [model]
```

| Argument | Description | Example |
|---|---|---|
| bugs_file | Text file with one Project BugIndex per line | experimental_setups/bugs_list |
| hyperparams_file | JSON file with agent hyperparameters | hyperparams.json |
| model | Model name (optional, default: gpt-4o-mini) | gpt-4o, claude-sonnet-4-20250514 |
## gBrain Temporal Metadata

- content_timestamp: 2021
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: early
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

