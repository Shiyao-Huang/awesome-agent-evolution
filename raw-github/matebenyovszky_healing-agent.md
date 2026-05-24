---
repo: matebenyovszky/healing-agent
url: https://github.com/matebenyovszky/healing-agent
content_timestamp: 2024-02-01
time_slice: 2024-Q1
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - matebenyovszky/healing-agent: AI powered automatic software healing agent · GitHub

**Source**: https://github.com/matebenyovszky/healing-agent

---

[Skip to content](https://github.com/matebenyovszky/healing-agent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[matebenyovszky](https://github.com/matebenyovszky)

/
**[healing-agent](https://github.com/matebenyovszky/healing-agent)**

Public

- [Notifications](https://github.com/login?return_to=%2Fmatebenyovszky%2Fhealing-agent)You must be signed in to change notification settings
- [Fork
    5](https://github.com/login?return_to=%2Fmatebenyovszky%2Fhealing-agent)
- 
[Star
          23](https://github.com/login?return_to=%2Fmatebenyovszky%2Fhealing-agent)

[https://github.com/matebenyovszky/healing-agent](https://github.com/matebenyovszky/healing-agent)

[Branches](https://github.com/matebenyovszky/healing-agent/branches)[Tags](https://github.com/matebenyovszky/healing-agent/tags)

[https://github.com/matebenyovszky/healing-agent/branches](https://github.com/matebenyovszky/healing-agent/branches)[https://github.com/matebenyovszky/healing-agent/tags](https://github.com/matebenyovszky/healing-agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History18 Commits18 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| examples/tests | examples/tests |  |  |
| healing_agent | healing_agent |  |  |
| scripts | scripts |  |  |
| tests | tests |  |  |
| .cursorignore | .cursorignore |  |  |
| .gitignore | .gitignore |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# Healing Agent 🩺

[https://github.com/matebenyovszky/healing-agent#healing-agent-](https://github.com/matebenyovszky/healing-agent#healing-agent-)

Healer Agent is an intelligent code assistant that catches with detailed context and fixes errors in your Python code. It leverages the power of AI to provide smart suggestions and corrections, helping you write more robust and "self-healing" code. Your program will be able to fix itself, it will have regenerative healing abilities like [Wolverine](https://github.com/biobootloader/wolverine).

⚠️ Not intended for production use. Be extra careful with the optional AUTO_FIX function, as although it makes backups of your code, it actually changes and runs your code. ⚠️

Goal: first actually usable autonomous coding agent in production

[Video demo on Youtube](https://youtu.be/_N1G3qBO34s)

## Features ✨

[https://github.com/matebenyovszky/healing-agent#features-](https://github.com/matebenyovszky/healing-agent#features-)

- 🚨 Automatic error detection and handling of diverse exception types
- 💡 Smart error analysis and solution suggestions (auto-generated fixing hints and code)
- 🔍 Comprehensive error analysis including exception details, stack traces, local and globalvariables and root cause identification
- 🧠 Advanced AI-powered code healing using LLMs of different providers
- 🔧 Zero-config integration with Python projects (just import and decorate)
- 💾 Robust error tracking and debugging: 
  - Exception context saved to JSON (code, error details, function info and args)
  - Automatic code backups before fixes
  - Detailed analysis results and fix history
  - Quick test of fixes

- 🤖 (Optionally) Fully automated operation with minimal human intervention
- 📦 Automatic installation of missing modules

## How it works 🧠

[https://github.com/matebenyovszky/healing-agent#how-it-works-](https://github.com/matebenyovszky/healing-agent#how-it-works-)

```
graph TD
    A[Import healing_agent] --> B[Configuration: AI access etc.]
    B --> C[Decorate functions with healing_agent]
    C --> D[Run Code / Execute Functions]
    D -->|No problem| L[Success]
    D -->|Exception?| F[Get and Save Detailed Context]
    F --> G[Auto-generate Fixing Hints and Code with AI]
    G --> H[Test Generated Code]
    H --> I[Create backup]
    I --> J[Apply Code Fixes]
    J --> D
```

Loading

## Installation 💻

[https://github.com/matebenyovszky/healing-agent#installation-](https://github.com/matebenyovszky/healing-agent#installation-)

To install Healing Agent, follow these steps:

PIP package from GitHub:

```
pip install git+https://github.com/matebenyovszky/healing-agent
```

OR from source:

1. 

Clone the repository:

```
git clone https://github.com/matebenyovszky/healing-agent.git
```

2. 

Navigate to the project directory:

```
cd healing-agent
```

3. 

Install:

```
pip install -e .
```

OR run overall test to install and test functionality:

```
python scripts/overall_test.py
```

## Usage 🔧

[https://github.com/matebenyovszky/healing-agent#usage-](https://github.com/matebenyovszky/healing-agent#usage-)

To use Healing Agent in your project, follow these steps:

1. 

Import the `healing_agent` decorator in your Python file:

```
import healing_agent
```

2. 

Decorate the function you want to monitor with `@healing_agent`:

```
@healing_agent
def your_function():
    # Your code here
```

You can also pass parameters to the decorator to change the behavior set in the config file:

```
@healing_agent(AUTO_FIX=False)
def your_function():
    # Your code here
```

3. 

Run your Python script as usual. Healing Agent will automatically detect, save context and attempt to fix any errors that occur within the decorated function.

Context (and code file backup in case of auto-fix) is saved to a JSON/Python file in the same directory as your script with actual timestamp in the filename.

## Configuration ⚙️

[https://github.com/matebenyovszky/healing-agent#configuration-%EF%B8%8F](https://github.com/matebenyovszky/healing-agent#configuration-%EF%B8%8F)

Healing Agent uses a flexible configuration system that supports multiple AI providers and customizable settings. The configuration is managed through a `healing_agent_config.py` file, which can be located in two places:

1. **Local Project Directory**: Healing Agent first checks for a config file in your project's directory
2. **User Home Directory**: If no local config is found, it looks for `~/.healing_agent/healing_agent_config.py`

### Configuration File Creation

[https://github.com/matebenyovszky/healing-agent#configuration-file-creation](https://github.com/matebenyovszky/healing-agent#configuration-file-creation)

The configuration file is automatically created in one of two ways:

1. 

**Auto-Creation**: When you first run Healing Agent, if no configuration file exists, it will:

  - Create a `.healing_agent` directory in your home folder
  - Copy the template configuration to `~/.healing_agent/healing_agent_config.py`
  - Print a message indicating where the new config file was created

2. 

**Manual Creation**: You can manually create the configuration file:

  - Copy `healing_agent/config_template.py` from the package
  - Rename it to `healing_agent_config.py`
  - Place it in either your project directory or `~/.healing_agent/`
  - Update the AI provider settings and other options

### Configuration Options

[https://github.com/matebenyovszky/healing-agent#configuration-options](https://github.com/matebenyovszky/healing-agent#configuration-options)

The configuration file includes:

1. 

**AI Provider Selection**: Choose from supported providers:

  - OpenAI
  - Azure OpenAI
  - LiteLLM
  - Anthropic
  - Ollama

2. 

**Provider Credentials**: Set up API keys and endpoints

  - Can be defined directly in the config file
  - Can be loaded from environment variables (recommended)

3. 

**Behavior Settings**:

```
MAX_ATTEMPTS = 3      # Maximum fix attempts
DEBUG = True         # Enable detailed logging
AUTO_FIX = True     # Auto-apply fixes
BACKUP_ENABLED = True # Create backups before fixes
```

Example configuration for Azure OpenAI:

```
AI_PROVIDER = "azure"

AZURE = {
    "api_key": os.getenv("AZURE_API_KEY"),  # Recommended: use environment variable
    "endpoint": "https://your-resource.openai.azure.com",
    "deployment_name": "gpt-4",
    "api_version": "2024-02-01"
}
```

**Note**: While multiple providers are supported, Azure OpenAI has been extensively tested. Support for other providers is under active development.

## Testing 🧪

[https://github.com/matebenyovszky/healing-agent#testing-](https://github.com/matebenyovszky/healing-agent#testing-)

To test Healing Agent, you can use the `scripts/test_file_generator.py` script to generate test files in the `tests` directory. `overall_test.py` will run all tests and provide a report on the functionality of Healing Agent.

## Use Cases 💡

[https://github.com/matebenyovszky/healing-agent#use-cases-](https://github.com/matebenyovszky/healing-agent#use-cases-)

- **Development**: Use Healing Agent during development to catch and fix errors early, and let AI generate fixes for your code. This is what you would do anyways, but now it's automated. 😁
- **Educational Tool**: Use Healing Agent as a learning tool to understand AI coding capabilities and limitations.

## Cooking open source 🍳

[https://github.com/matebenyovszky/healing-agent#cooking-open-source-](https://github.com/matebenyovszky/healing-agent#cooking-open-source-)

Healing Agent is distributed under the MIT License. See `LICENSE` for more information. Feedback and contributions are welcome!

## About

         AI powered automatic software healing agent       

### Topics

[agent](https://github.com/topics/agent)[development](https://github.com/topics/development)[ai](https://github.com/topics/ai)[code](https://github.com/topics/code)[coding](https://github.com/topics/coding)[openai](https://github.com/topics/openai)[developer-tools](https://github.com/topics/developer-tools)[healing](https://github.com/topics/healing)[coding-assistant](https://github.com/topics/coding-assistant)[llm](https://github.com/topics/llm)[anthropic](https://github.com/topics/anthropic)[coding-agents](https://github.com/topics/coding-agents)

### Resources
## gBrain Temporal Metadata

- content_timestamp: 2024-02-01
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

