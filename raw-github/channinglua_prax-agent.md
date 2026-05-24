---
repo: channinglua/prax-agent
url: https://github.com/channinglua/prax-agent
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - ChanningLua/prax-agent: Self-improving agent runtime that learns from experience — test-verify-fix loops, correction detection, cross-project memory, multi-model orchestration. · GitHub

**Source**: https://github.com/channinglua/prax-agent

---

[Skip to content](https://github.com/channinglua/prax-agent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ChanningLua](https://github.com/ChanningLua)

/
**[prax-agent](https://github.com/ChanningLua/prax-agent)**

Public

- [Notifications](https://github.com/login?return_to=%2FChanningLua%2Fprax-agent)You must be signed in to change notification settings
- [Fork
    35](https://github.com/login?return_to=%2FChanningLua%2Fprax-agent)
- 
[Star
          294](https://github.com/login?return_to=%2FChanningLua%2Fprax-agent)

[https://github.com/ChanningLua/prax-agent](https://github.com/ChanningLua/prax-agent)

[Branches](https://github.com/ChanningLua/prax-agent/branches)[Tags](https://github.com/ChanningLua/prax-agent/tags)

[https://github.com/ChanningLua/prax-agent/branches](https://github.com/ChanningLua/prax-agent/branches)[https://github.com/ChanningLua/prax-agent/tags](https://github.com/ChanningLua/prax-agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History59 Commits59 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| .prax | .prax |  |  |
| bin | bin |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| src/prax | src/prax |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .npmignore | .npmignore |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README.zh-CN.md | README.zh-CN.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| package.json | package.json |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# Prax

[https://github.com/channinglua/prax-agent#prax](https://github.com/channinglua/prax-agent#prax)

**Self-improving agent runtime that learns from experience and drives LLM agents through test-verify-fix loops**

[https://github.com/ChanningLua/prax-agent/blob/main/LICENSE](https://github.com/ChanningLua/prax-agent/blob/main/LICENSE)[https://www.python.org/downloads/](https://www.python.org/downloads/)

[Quick Start](https://github.com/channinglua/prax-agent#quick-start) · [Why Prax](https://github.com/channinglua/prax-agent#why-prax) · [Usage](https://github.com/channinglua/prax-agent#usage-examples) · [Results](https://github.com/channinglua/prax-agent#results) · [Integration Paths](https://github.com/channinglua/prax-agent#integration-paths) · [Configuration](https://github.com/channinglua/prax-agent#configuration) · [Architecture](https://github.com/channinglua/prax-agent#architecture) · [Contributing](https://github.com/channinglua/prax-agent#contributing)

---

## Quick Start

[https://github.com/channinglua/prax-agent#quick-start](https://github.com/channinglua/prax-agent#quick-start)

**Goal**: install Prax, configure an AI key, run your first task — in under 5 minutes. No programming background required.

> Already an experienced user? Jump to [One-liner for experienced users](https://github.com/channinglua/prax-agent#one-liner-for-experienced-users) below.

### Step 1 · Install prerequisites

[https://github.com/channinglua/prax-agent#step-1--install-prerequisites](https://github.com/channinglua/prax-agent#step-1--install-prerequisites)

Prax needs **Node.js** (for the CLI wrapper) and **Python 3.10+** (for the runtime). Check if you already have them:

```
node --version      # should print v14 or higher
python3 --version   # should print Python 3.10 or higher
```

Missing one? Install:

| OS | Install command |
|---|---|
| macOS | brew install node python@3.12 (install Homebrew first if needed) |
| Linux | sudo apt install nodejs python3 python3-pip (Debian/Ubuntu) or sudo dnf install nodejs python3 (Fedora) |
| Windows | Use WSL2 and follow the Linux commands. Native Windows is not supported yet (on the 0.5.x roadmap). |

### Step 2 · Install Prax

[https://github.com/channinglua/prax-agent#step-2--install-prax](https://github.com/channinglua/prax-agent#step-2--install-prax)

```
npm install -g praxagent
```

Verify:

```
prax --version
```

**Should print**:

```
prax 0.5.0
```

(0.5.0 or higher is fine.)

**See `command not found`?**

- macOS with Homebrew Node: run `export PATH=/opt/homebrew/bin:$PATH` then add it to `~/.zshrc`
- Linux: confirm `npm prefix -g`'s `bin/` is on your `$PATH`

### Step 3 · Point Prax at an LLM service

[https://github.com/channinglua/prax-agent#step-3--point-prax-at-an-llm-service](https://github.com/channinglua/prax-agent#step-3--point-prax-at-an-llm-service)

Prax needs two things to call any LLM: an **endpoint URL** and an **API key**. The procedure is the same whether you use an official API or a third-party proxy.

1. 

Get the `base_url` and `api_key` from your service's dashboard or docs.

2. 

Export them as environment variables (the names are arbitrary — any name your shell can `export` works; `LLM_BASE_URL` / `LLM_API_KEY` is just our recommended convention):

```
export LLM_BASE_URL="https://your-service-endpoint"
export LLM_API_KEY="your-key"
```

3. 

Wire them into Prax via `~/.prax/models.yaml`:

```
mkdir -p ~/.prax
cat > ~/.prax/models.yaml <<'YAML'
providers:
  default:
    base_url_env: LLM_BASE_URL
    api_key_env: LLM_API_KEY
    format: openai          # use "anthropic" if your service speaks the Anthropic protocol
    models:
      - name: <your-model>  # the exact model name your service exposes
default_model: <your-model>
YAML
```

Replace `<your-model>` with whatever model identifier your service supports (check the service's `/v1/models` endpoint or its dashboard).

4. 

Verify it works:

```
prax providers
```

You should see your provider listed with the model name and a status. With `LLM_API_KEY` set the status reads `available`; if it shows `missing-credentials`, the env var didn't reach Prax — re-run the `export` and make sure `echo $LLM_API_KEY` echoes the key back.

### Step 4 · Your first task

[https://github.com/channinglua/prax-agent#step-4--your-first-task](https://github.com/channinglua/prax-agent#step-4--your-first-task)

```
mkdir -p ~/Desktop/prax-hello && cd ~/Desktop/prax-hello
prax prompt "你是谁？用一句话回答。"
```

**Should print** something like:

```
我是 Prax 这个智能体运行时里跑的 AI 助手，可以帮你执行代码、测试和自动化任务。
```

Congrats — Prax is working.

### Step 5 · Prove it can touch files (the real power)

[https://github.com/channinglua/prax-agent#step-5--prove-it-can-touch-files-the-real-power](https://github.com/channinglua/prax-agent#step-5--prove-it-can-touch-files-the-real-power)

```
echo "hello world" > greeting.txt
prax prompt "读 greeting.txt 里的内容，然后把它改成全大写再写回去"
cat greeting.txt
```

**Should print**:

```
HELLO WORLD
```

That's the distinguishing capability — Prax doesn't just chat, it **reads, writes, runs tests, and verifies** in a loop. Everything below builds on this.

**Got stuck at any step?** Common issues:

| Symptom | Fix |
|---|---|
| Error: Model 'xxx' not found | The <your-model> name in ~/.prax/models.yaml doesn't match what your service exposes. Check its /v1/models endpoint or dashboard. |
| HTTP 401 / Unauthorized | Key typo or expired. Regenerate and re-export LLM_API_KEY. |
| Silent exit with no output | Your endpoint is unreachable. Try curl -s "$LLM_BASE_URL"/... to confirm, or point LLM_BASE_URL at a healthy endpoint. |
| Chinese characters look broken | Set export LANG=zh_CN.UTF-8 in your shell rc. |

---

## Two ways to use Prax

[https://github.com/channinglua/prax-agent#two-ways-to-use-prax](https://github.com/channinglua/prax-agent#two-ways-to-use-prax)

Once Step 5 above works, you're ready to pick a usage mode.

### Way 1 · Standalone from the terminal (what you just did)

[https://github.com/channinglua/prax-agent#way-1--standalone-from-the-terminal-what-you-just-did](https://github.com/channinglua/prax-agent#way-1--standalone-from-the-terminal-what-you-just-did)

Use Prax directly at the shell prompt — perfect for automation, cron jobs, CI/CD, or just batching work without opening an IDE.

```
prax prompt "run pytest -q, fix the first failure, and stop when tests pass"
prax prompt "read README.md and propose 3 concrete improvements as a checklist"
prax cron add --name daily-news --schedule "0 17 * * *" --prompt "..."   # schedule recurring work
```

Pick a role-matched walkthrough to see a real-world pipeline end-to-end:

| Your role | Tutorial | What you'll build |
|---|---|---|
| PM / support lead | support-digest | Daily PII-redacted ticket digest, local-only processing |
| Content creator / knowledge-base hobbyist | ai-news-daily | Scrape X/知乎/Bilibili → compile Obsidian wiki → send digest |
| Release manager | release-notes | Git log → CHANGELOG + release announcement |
| DevEx / tech writer | docs-audit | Weekly "which docs drifted from the code?" report |
| Engineering lead | pr-triage | Per-PR triage that actually runs tests on both branches |

All five tutorials start with sample data — no external API or real PR needed to follow along.

### Way 2 · Inside Claude Code IDE

[https://github.com/channinglua/prax-agent#way-2--inside-claude-code-ide](https://github.com/channinglua/prax-agent#way-2--inside-claude-code-ide)

If you use [Claude Code](https://claude.com/claude-code) and want Prax's skills, commands, and verification hooks available inside the IDE:

```
prax install --profile full
```

This copies Prax's bundled skills (4 commercial recipes + 1 content-automation pipeline + 4 developer workflows) into `~/.claude/`, registers Prax MCP servers, and wires hooks so Claude Code runs Prax's verification loop on every code change.

Verify:

```
prax doctor --target claude
```

Now reopen your project in Claude Code. You'll see new `/prax-status`, `/prax-doctor`, `/prax-plan`, `/prax-verify` slash commands, the `prax-planner` agent, and Prax's rules automatically applied.

To undo: `prax uninstall --target claude`.

> **Note**: `prax install` only ships a Claude Code integration today. Any LLM you configure via Step 3 still works as Prax's backend regardless of IDE choice. A skill-export path for additional IDE/CLI hosts is on the 0.5.x roadmap.

### One-liner for experienced users

[https://github.com/channinglua/prax-agent#one-liner-for-experienced-users](https://github.com/channinglua/prax-agent#one-liner-for-experienced-users)

```
git clone https://github.com/ChanningLua/prax-agent.git && cd prax-agent
pip install -e .
export LLM_BASE_URL="https://your-service-endpoint"
export LLM_API_KEY="your-key"
# (then write ~/.prax/models.yaml as shown in Step 3 above)
prax prompt "run pytest -q, fix the failure, and stop when tests pass"
```

> Prax can execute shell commands on your behalf. It defaults to `workspace-write` mode — files outside the project are off-limits. Use `--permission-mode read-only` for safe exploration.

---

## Why Prax
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

