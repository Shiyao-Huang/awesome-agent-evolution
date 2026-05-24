---
repo: ashish-kamboj/agentic-ai-workflows
url: https://github.com/ashish-kamboj/agentic-ai-workflows
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - ashish-kamboj/agentic-ai-workflows: AI-agent-driven workflow automation using n8n and CrewAI · GitHub

**Source**: https://github.com/ashish-kamboj/agentic-ai-workflows

---

[Skip to content](https://github.com/ashish-kamboj/agentic-ai-workflows#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ashish-kamboj](https://github.com/ashish-kamboj)

/
**[agentic-ai-workflows](https://github.com/ashish-kamboj/agentic-ai-workflows)**

Public

- [Notifications](https://github.com/login?return_to=%2Fashish-kamboj%2Fagentic-ai-workflows)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fashish-kamboj%2Fagentic-ai-workflows)
- 
[Star
          0](https://github.com/login?return_to=%2Fashish-kamboj%2Fagentic-ai-workflows)

[https://github.com/ashish-kamboj/agentic-ai-workflows](https://github.com/ashish-kamboj/agentic-ai-workflows)

[Branches](https://github.com/ashish-kamboj/agentic-ai-workflows/branches)[Tags](https://github.com/ashish-kamboj/agentic-ai-workflows/tags)

[https://github.com/ashish-kamboj/agentic-ai-workflows/branches](https://github.com/ashish-kamboj/agentic-ai-workflows/branches)[https://github.com/ashish-kamboj/agentic-ai-workflows/tags](https://github.com/ashish-kamboj/agentic-ai-workflows/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History26 Commits26 Commits |  |  |  |
| crewai | crewai |  |  |
| n8n | n8n |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Agentic AI Workflows

[https://github.com/ashish-kamboj/agentic-ai-workflows#agentic-ai-workflows](https://github.com/ashish-kamboj/agentic-ai-workflows#agentic-ai-workflows)

This repository is a curated collection of agentic AI workflows built using [n8n](https://n8n.io/) and [crewAI](https://crewai.com/). It serves as a resource for developers, researchers, and enthusiasts interested in leveraging agent-based automation and orchestration using these powerful platforms.

## Overview

[https://github.com/ashish-kamboj/agentic-ai-workflows#overview](https://github.com/ashish-kamboj/agentic-ai-workflows#overview)

- **n8n workflows**: Visual, low-code automations that can connect APIs, data, and logic for AI-driven operations.
- **crewAI workflows**: Programmatic agent orchestration for complex, multi-step, or multi-agent tasks in Python.

Both workflow types enable you to build, customize, and run agentic pipelines for a wide range of use cases—such as data enrichment, content creation, task delegation, research agents, and more.

---

## Repository Structure

[https://github.com/ashish-kamboj/agentic-ai-workflows#repository-structure](https://github.com/ashish-kamboj/agentic-ai-workflows#repository-structure)

```
agentic-ai-workflows/
├── n8n/
│   └── ...         # n8n workflow JSON files
├── crewai/
│   └── ...         # crewAI workflow Python scripts
├── README.md
└── LICENSE
```

- Put your **n8n workflow files** (exported as .json) inside the `n8n/` directory.
- Place your **crewAI Python scripts** (typically ending with `.py`) inside the `crewai/` directory.

---

## Getting Started

[https://github.com/ashish-kamboj/agentic-ai-workflows#getting-started](https://github.com/ashish-kamboj/agentic-ai-workflows#getting-started)

### 1. Using n8n Workflows

[https://github.com/ashish-kamboj/agentic-ai-workflows#1-using-n8n-workflows](https://github.com/ashish-kamboj/agentic-ai-workflows#1-using-n8n-workflows)

1. 

**Install n8n:**
 Refer to the [n8n documentation](https://docs.n8n.io/hosting/installation/) for installation instructions (Docker, npm, desktop app, etc.).

2. 

**Import a Workflow:**

  - Go to the n8n editor UI.
  - Click "Import" and upload the desired workflow JSON from this repo's `n8n/` folder.
  - Configure any required credentials or environment variables.

3. 

**Run or Schedule the Workflow:**

  - Trigger manually or set up schedules/webhooks as needed.

### 2. Using crewAI Workflows

[https://github.com/ashish-kamboj/agentic-ai-workflows#2-using-crewai-workflows](https://github.com/ashish-kamboj/agentic-ai-workflows#2-using-crewai-workflows)

1. 

**Set up Python environment:**

  - Install Python 3.9+ (ideally in a virtual environment).
  - Install crewAI: 

```
pip install crewai
```

2. 

**Run a Workflow:**

  - Open the desired Python script from the `crewai/` directory.
  - Review and adjust any required prompts, agent definitions, or credentials.
  - Run the script: 

```
python path/to/your_workflow.py
```

---

## n8n Workflows

[https://github.com/ashish-kamboj/agentic-ai-workflows#n8n-workflows](https://github.com/ashish-kamboj/agentic-ai-workflows#n8n-workflows)

Below is a table listing all available n8n workflows in this repository. This makes it easy to browse, search, and understand what each workflow does at a glance.

| Workflow Name | Description | Inputs | Outputs | Special Notes |
|---|---|---|---|---|
| wf_update_google_doc.json | Workflow that automatically updates Google Docs based on chat messages. It uses an AI agent with Ollama's Llama 3.2 model to process incoming chat messages and then inserts the AI-generated output into a specified Google Document. | Chat Message: Any text sent to the chat trigger | Google Document Update: The AI agent's output is automatically inserted into the specified Google Doc | Ollama API: Uses "Ollama account" credential for local LLM access  Google Docs OAuth2: Uses "Google cloud account" credential for document access |
| wf_get_output_using_llm.json | The workflow enables interactive conversations where users can send messages and receive AI-generated responses with memory retention capabilities. | Chat Message: Any text sent to the chat trigger | LLM generated response | Ollama API: Uses "Ollama account" credential for local LLM access |
| wf_send_message_to_telegram_bot.json | The workflow receives messages through a chat interface, processes them with an AI agent, and sends the responses directly to a specific Telegram chat. It combines conversational AI capabilities with Telegram messaging integration. | Chat Message: Any text sent to the chat trigger | Telegram Message: AI-generated responses sent to Telegram | Ollama API: Uses "Ollama account" credential for local LLM access  Telegram bot: Valid Telegram bot token must be configured |
| wf_daily_workflow_backup_to_github.json | This workflow is designed to automatically backup n8n workflows to a GitHub repository on a daily basis. It compares the current state of workflows in n8n with their previously backed-up versions in GitHub and only updates files that have changed or creates new files for new workflows. | Trigger: Scheduled trigger (configured to run daily) | GitHub Files: JSON files containing workflow definitions saved to the GitHub repository | GitHub API Credentials: Required for repository access  n8n API Credentials: Required to fetch workflow data |

---

## crewAI Workflows

[https://github.com/ashish-kamboj/agentic-ai-workflows#crewai-workflows](https://github.com/ashish-kamboj/agentic-ai-workflows#crewai-workflows)

Below is a table listing all available crewAI workflows in this repository. This format helps users easily discover and use workflows relevant to their needs.

| Workflow Name | Description | Inputs | Outputs | Special Notes |
|---|---|---|---|---|
| Agent to research and write article | Automate the process of researching, writing, and editing a blog article. It defines three agents—Content Planner, Content Writer, and Editor—each with specific roles and tasks. The workflow includes planning content, writing a draft, and editing for quality and style, all powered by LLMs. | Research topic | Structured research summary | Uses the ollama/llama3.2:3b model via the Ollama API, which can be set up locally and is free to use.
          Agents are implemented with CrewAI and interact with the local LLM for fast,
          The tasks are performed sequentially. |
| Agent for web scrapping and summarization | Demonstrates how to use CrewAI agents and tools to scrape content from a web page and summarize it using a locally hosted Ollama LLM. The workflow includes initializing the scraping tool, setting up the agent, defining the task, and running the crew to get the summary. | Provide website URL to scrape while initializing ScrapeWebsiteTool() | Structured summary of the scrapped content | Uses the ollama/llama3.2:3b model via the Ollama API, which can be set up locally and is free to use.
          Agents are implemented with CrewAI and interact with the local LLM for fast, private inference. |
| Agent for travel recommendation with mlflow integration | Demonstrates integration between CrewAI and MLflow for tracking AI agent workflows. Creates a travel recommendation system that suggests the best city for photography travel and provide 5-day photography itinerary | No Input as such, it's part of prompt only but can be passed as input | 5-day photography itenary for the choosed city | Uses the ollama/llama3.2:3b model via the Ollama API, which can be set up locally and is free to use.
          Agents are implemented with CrewAI and interact with the local LLM for fast, private inference.
          Used MLflow, which provides a tracing feature that enhances LLM observability by capturing detailed information about the execution of application’s services. Tracing provides a way to record the inputs, outputs, and metadata associated with each intermediate step of a request, enabling you to easily pinpoint the source of bugs and unexpected behaviors. |
| Agent for Summarization and Translation using Groq | Demonstrates a simple two-agent workflow using CrewAI:Documentation-Summarizer produces a concise summary and Technical Translator converts the summary to Hindi | No Input as such, it's part of prompt only but can be passed as input | Text Summary and translation in choosen or provided language | Uses groq/llama-3.3-70b-versatile LLM model, In order to use generate groq API Key from https://console.groq.com/keys
          Agents are implemented with CrewAI and interact with the Grok LLM for fast inference. |

---

## About

         AI-agent-driven workflow automation using n8n and CrewAI       

### Topics

[grok](https://github.com/topics/grok)[ai-agents](https://github.com/topics/ai-agents)[n8n](https://github.com/topics/n8n)[n8n-workflow](https://github.com/topics/n8n-workflow)[ollama](https://github.com/topics/ollama)[crewai](https://github.com/topics/crewai)[agentic-workflow](https://github.com/topics/agentic-workflow)[agentic-ai](https://github.com/topics/agentic-ai)

### Resources

[Readme](https://github.com/ashish-kamboj/agentic-ai-workflows#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/ashish-kamboj/agentic-ai-workflows/activity)

### Stars

[0
        stars](https://github.com/ashish-kamboj/agentic-ai-workflows/stargazers)

### Watchers

[0
        watching](https://github.com/ashish-kamboj/agentic-ai-workflows/watchers)

### Forks

[0
        forks](https://github.com/ashish-kamboj/agentic-ai-workflows/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fashish-kamboj%2Fagentic-ai-workflows&report=ashish-kamboj+%28user%29)

## [Releases](https://github.com/ashish-kamboj/agentic-ai-workflows/releases)

No releases published

## [Packages
      0](https://github.com/users/ashish-kamboj/packages?repo_name=agentic-ai-workflows)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/ashish-kamboj/agentic-ai-workflows/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Jupyter Notebook
          100.0%](https://github.com/ashish-kamboj/agentic-ai-workflows/search?l=jupyter-notebook)

     You can’t perform that action at this time.
