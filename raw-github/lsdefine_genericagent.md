---
repo: lsdefine/genericagent
url: https://github.com/lsdefine/genericagent
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - lsdefine/GenericAgent: Self-evolving agent: grows skill tree from 3.3K-line seed, achieving full system control with 6x less token consumption · GitHub

**Source**: https://github.com/lsdefine/genericagent

---

[Skip to content](https://github.com/lsdefine/genericagent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[lsdefine](https://github.com/lsdefine)

/
**[GenericAgent](https://github.com/lsdefine/GenericAgent)**

Public

- [Notifications](https://github.com/login?return_to=%2Flsdefine%2FGenericAgent)You must be signed in to change notification settings
- [Fork
    1.4k](https://github.com/login?return_to=%2Flsdefine%2FGenericAgent)
- 
[Star
          11.9k](https://github.com/login?return_to=%2Flsdefine%2FGenericAgent)

[https://github.com/lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent)

[Branches](https://github.com/lsdefine/GenericAgent/branches)[Tags](https://github.com/lsdefine/GenericAgent/tags)

[https://github.com/lsdefine/GenericAgent/branches](https://github.com/lsdefine/GenericAgent/branches)[https://github.com/lsdefine/GenericAgent/tags](https://github.com/lsdefine/GenericAgent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History687 Commits687 Commits |  |  |  |
| assets | assets |  |  |
| docs | docs |  |  |
| frontends | frontends |  |  |
| ga_cli | ga_cli |  |  |
| memory | memory |  |  |
| plugins | plugins |  |  |
| reflect | reflect |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| TMWebDriver.py | TMWebDriver.py |  |  |
| agent_loop.py | agent_loop.py |  |  |
| agentmain.py | agentmain.py |  |  |
| ga | ga |  |  |
| ga.cmd | ga.cmd |  |  |
| ga.py | ga.py |  |  |
| hub.pyw | hub.pyw |  |  |
| launch.pyw | launch.pyw |  |  |
| llmcore.py | llmcore.py |  |  |
| mykey_template.py | mykey_template.py |  |  |
| mykey_template_en.py | mykey_template_en.py |  |  |
| pyproject.toml | pyproject.toml |  |  |
| simphtml.py | simphtml.py |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/lsdefine/GenericAgent/blob/main/assets/images/bar.jpg](https://github.com/lsdefine/GenericAgent/blob/main/assets/images/bar.jpg)

# GenericAgent

[https://github.com/lsdefine/genericagent#genericagent](https://github.com/lsdefine/genericagent#genericagent)

**A Minimal, Self-Evolving Autonomous Agent Framework**

*~3K lines of seed code · 9 atomic tools · ~100-line Agent Loop*

[https://arxiv.org/abs/2604.17091](https://arxiv.org/abs/2604.17091)[https://github.com/JinyiHan99/GA-Technical-Report](https://github.com/JinyiHan99/GA-Technical-Report)[https://datawhalechina.github.io/hello-generic-agent/](https://datawhalechina.github.io/hello-generic-agent/)[https://fudankw.cn/sophub](https://fudankw.cn/sophub)

[https://trendshift.io/repositories/25944](https://trendshift.io/repositories/25944)

**[English](https://github.com/lsdefine/genericagent#-english) · [中文](https://github.com/lsdefine/genericagent#-%E4%B8%AD%E6%96%87)**

> 📌 **Official Channel** — This GitHub repository is the **only** official source of GenericAgent. We have no affiliation with any third-party website using the GenericAgent name.

---

## 🌟 Overview

[https://github.com/lsdefine/genericagent#-overview](https://github.com/lsdefine/genericagent#-overview)

**GenericAgent** is a minimal, self-evolving autonomous agent framework. Its core is just **~3K lines of code**. Through **9 atomic tools + a ~100-line Agent Loop**, it grants any LLM system-level control over a local computer — covering browser, terminal, filesystem, keyboard/mouse input, screen vision, and mobile devices (ADB).

> Design philosophy — **don't preload skills, evolve them.**

Every time GenericAgent solves a new task, it automatically crystallizes the execution path into a reusable **Skill**. The longer you use it, the more skills accumulate — forming a personal skill tree grown entirely from 3K lines of seed code.

> 🤖 **Self-Bootstrap Proof** — Everything in this repository, from installing Git and running `git init` to every commit message, was completed autonomously by GenericAgent. The author never opened a terminal once.

### 📑 Table of Contents

[https://github.com/lsdefine/genericagent#-table-of-contents](https://github.com/lsdefine/genericagent#-table-of-contents)

- [Key Features](https://github.com/lsdefine/genericagent#-key-features)
- [Demo Showcase](https://github.com/lsdefine/genericagent#-demo-showcase)
- [Quick Start](https://github.com/lsdefine/genericagent#-quick-start)
- [Usage](https://github.com/lsdefine/genericagent#-usage)
- [Architecture](https://github.com/lsdefine/genericagent#-architecture)
- [Self-Evolution Mechanism](https://github.com/lsdefine/genericagent#-self-evolution-mechanism)
- [Comparison](https://github.com/lsdefine/genericagent#-comparison)
- [Evaluation](https://github.com/lsdefine/genericagent#-evaluation)
- [Roadmap & News](https://github.com/lsdefine/genericagent#-roadmap--news)
- [Community & Support](https://github.com/lsdefine/genericagent#-community--support)
- [License](https://github.com/lsdefine/genericagent#-license)

---

## 📋 Key Features

[https://github.com/lsdefine/genericagent#-key-features](https://github.com/lsdefine/genericagent#-key-features)

| Feature | Description |
|---|---|
| 🧬 Self-Evolving | Automatically crystallizes each task into a Skill. Capabilities grow with every use, forming your personal skill tree. |
| 🪶 Minimal Architecture | ~3K lines of core code. Agent Loop is ~100 lines. No complex dependencies, zero deployment overhead. |
| ⚡ Strong Execution | Injects into a real browser (preserving login sessions). 9 atomic tools take direct control of the system. |
| 🔌 High Compatibility | Supports Claude / Gemini / Kimi / MiniMax and other major models. Cross-platform. |
| 💰 Token Efficient | <30K context window — a fraction of the 200K–1M other agents consume. Less noise, fewer hallucinations, higher success rate, lower cost. |

---

## 🎯 Demo Showcase

[https://github.com/lsdefine/genericagent#-demo-showcase](https://github.com/lsdefine/genericagent#-demo-showcase)

| 🧋 Food Delivery Order | 📈 Quantitative Stock Screening |
|---|---|
|  |  |
| "Order me a milk tea" — navigates the delivery app, selects items, completes checkout. | "Find GEM stocks with EXPMA golden cross, turnover > 5%" — quantitative screening. |
| 🌐 Autonomous Web Exploration | 💰 Expense Tracking |
|  |  |
| Autonomously browses and periodically summarizes web content. | "Find expenses over ¥2K in the last 3 months" — drives Alipay via ADB. |
| 💬 Batch Messaging |  |
|  |  |
| Sends bulk WeChat messages, fully driving the WeChat client. |  |

---

## 🚀 Quick Start

[https://github.com/lsdefine/genericagent#-quick-start](https://github.com/lsdefine/genericagent#-quick-start)

> ⚠️**Python version**: use **Python 3.11 or 3.12**. **Do not** use Python 3.14 — it is incompatible with `pywebview` and a few other GA dependencies.
> 
> 
> 
> 📖 Detailed installation guide: **[installation.md](https://github.com/lsdefine/GenericAgent/blob/main/docs/installation.md)** · **[installation_zh.md（中文）](https://github.com/lsdefine/GenericAgent/blob/main/docs/installation_zh.md)**

### For LLM Agents

[https://github.com/lsdefine/genericagent#for-llm-agents](https://github.com/lsdefine/genericagent#for-llm-agents)

Fetch the installation guide and follow it:

```
curl -fsSL https://raw.githubusercontent.com/lsdefine/GenericAgent/refs/heads/main/docs/installation.md
```

### For Humans

[https://github.com/lsdefine/genericagent#for-humans](https://github.com/lsdefine/genericagent#for-humans)

#### Method 1 — One-line install *(recommended)*

[https://github.com/lsdefine/genericagent#method-1--one-line-install-recommended](https://github.com/lsdefine/genericagent#method-1--one-line-install-recommended)

This installs GenericAgent with an isolated Python environment and Git, then downloads a ready-to-run package.

**Windows PowerShell**

```
powershell -ExecutionPolicy Bypass -c "$env:GLOBAL=1; irm http://fudankw.cn:9000/files/ga_install.ps1 | iex"
```

**Linux / macOS**

```
GLOBAL=1 bash -c "$(curl -fsSL http://fudankw.cn:9000/files/ga_install.sh)"
```

After installation, launch the desktop app from:

```
frontends/GenericAgent.exe
```

#### Method 2 — Python install *(for developers)*

[https://github.com/lsdefine/genericagent#method-2--python-install-for-developers](https://github.com/lsdefine/genericagent#method-2--python-install-for-developers)

```
git clone https://github.com/lsdefine/GenericAgent.git
cd GenericAgent
uv venv
uv pip install -e ".[ui]"          # Core + UI dependencies
cp mykey_template.py mykey.py      # Fill in your LLM API key
python launch.pyw
```

> 💡 GenericAgent is meant to grow its environment **through the Agent itself**, not by pre-installing every possible package.

📖 Full guide: [docs/GETTING_STARTED.md](https://github.com/lsdefine/GenericAgent/blob/main/docs/GETTING_STARTED.md)

---

## 💻 Usage

[https://github.com/lsdefine/genericagent#-usage](https://github.com/lsdefine/genericagent#-usage)

### Frontends

[https://github.com/lsdefine/genericagent#frontends](https://github.com/lsdefine/genericagent#frontends)

#### Desktop App

[https://github.com/lsdefine/genericagent#desktop-app](https://github.com/lsdefine/genericagent#desktop-app)

For one-line installs on Windows, double-click:

```
frontends/GenericAgent.exe
```

#### Terminal UI

[https://github.com/lsdefine/genericagent#terminal-ui](https://github.com/lsdefine/genericagent#terminal-ui)

A lightweight, keyboard-driven interface built on [Textual](https://github.com/Textualize/textual). Supports multiple concurrent sessions and real-time streaming.

```
python frontends/tuiapp_v2.py
```

**⚠️ Windows TUI Troubleshooting**

TUI rendering on Windows can be flaky depending on terminal + font. Common causes:

1. `textual` is not on the latest version — `pip install -U textual` first.
2. PowerShell / cmd ship with terminals that have rough Unicode + key-binding support. **Prefer Git Bash on Windows**, which is much better behaved.
3. If it still looks broken, ask GA itself to fix it: 

> *"My experience using `frontends/tuiapp_v2.py` in PowerShell / cmd / Git Bash on Windows is very poor — lots of incompatibility. Please refer to Claude Code's best practices for the Windows terminal and fix all font and rendering incompatibilities."*

#### Streamlit UI

[https://github.com/lsdefine/genericagent#streamlit-ui](https://github.com/lsdefine/genericagent#streamlit-ui)

```
python launch.pyw
```

### Bot Interface (IM)

[https://github.com/lsdefine/genericagent#bot-interface-im](https://github.com/lsdefine/genericagent#bot-interface-im)

GenericAgent also supports IM frontends such as Telegram, WeChat, QQ, Feishu / Lark, WeCom, and DingTalk.

| Platform | Command |
|---|---|
| Telegram | python frontends/tgapp.py |
| WeChat | python frontends/wechatapp.py |
| QQ | python frontends/qqapp.py |
| Feishu / Lark | python frontends/fsapp.py |
| WeCom | python frontends/wecomapp.py |
| DingTalk | python frontends/dingtalkapp.py |

> For detailed setup, ask GenericAgent itself.

### Common Chat Commands

[https://github.com/lsdefine/genericagent#common-chat-commands](https://github.com/lsdefine/genericagent#common-chat-commands)

| Command | Description |
|---|---|
| /new | Start a fresh conversation and clear the current context |
| /continue | List recoverable conversation snapshots |
| /continue N | Restore the N-th recoverable conversation |

---

## 🧠 Architecture

[https://github.com/lsdefine/genericagent#-architecture](https://github.com/lsdefine/genericagent#-architecture)
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

