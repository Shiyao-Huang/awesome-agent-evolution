---
repo: browser-use/web-ui
url: https://github.com/browser-use/web-ui
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - browser-use/web-ui: 🖥️ Run AI Agent in your browser. · GitHub

**Source**: https://github.com/browser-use/web-ui

---

[Skip to content](https://github.com/browser-use/web-ui#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[browser-use](https://github.com/browser-use)

/
**[web-ui](https://github.com/browser-use/web-ui)**

Public

- [Notifications](https://github.com/login?return_to=%2Fbrowser-use%2Fweb-ui)You must be signed in to change notification settings
- [Fork
    2.7k](https://github.com/login?return_to=%2Fbrowser-use%2Fweb-ui)
- 
[Star
          16k](https://github.com/login?return_to=%2Fbrowser-use%2Fweb-ui)

[https://github.com/browser-use/web-ui](https://github.com/browser-use/web-ui)

[Branches](https://github.com/browser-use/web-ui/branches)[Tags](https://github.com/browser-use/web-ui/tags)

[https://github.com/browser-use/web-ui/branches](https://github.com/browser-use/web-ui/branches)[https://github.com/browser-use/web-ui/tags](https://github.com/browser-use/web-ui/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History450 Commits450 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| .vscode | .vscode |  |  |
| assets | assets |  |  |
| src | src |  |  |
| tests | tests |  |  |
| .dockerignore | .dockerignore |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| requirements.txt | requirements.txt |  |  |
| supervisord.conf | supervisord.conf |  |  |
| webui.py | webui.py |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/browser-use/web-ui/blob/main/assets/web-ui.png](https://github.com/browser-use/web-ui/blob/main/assets/web-ui.png)

[https://github.com/browser-use/web-ui/stargazers](https://github.com/browser-use/web-ui/stargazers)[https://link.browser-use.com/discord](https://link.browser-use.com/discord)[https://docs.browser-use.com](https://docs.browser-use.com)[https://x.com/warmshao](https://x.com/warmshao)

This project builds upon the foundation of the [browser-use](https://github.com/browser-use/browser-use), which is designed to make websites accessible for AI agents.

We would like to officially thank [WarmShao](https://github.com/warmshao) for his contribution to this project.

**WebUI:** is built on Gradio and supports most of `browser-use` functionalities. This UI is designed to be user-friendly and enables easy interaction with the browser agent.

**Expanded LLM Support:** We've integrated support for various Large Language Models (LLMs), including: Google, OpenAI, Azure OpenAI, Anthropic, DeepSeek, Ollama etc. And we plan to add support for even more models in the future.

**Custom Browser Support:** You can use your own browser with our tool, eliminating the need to re-login to sites or deal with other authentication challenges. This feature also supports high-definition screen recording.

**Persistent Browser Sessions:** You can choose to keep the browser window open between AI tasks, allowing you to see the complete history and state of AI interactions.

bu-webui-demo.mp4

## Installation Guide

[https://github.com/browser-use/web-ui#installation-guide](https://github.com/browser-use/web-ui#installation-guide)

### Option 1: Local Installation

[https://github.com/browser-use/web-ui#option-1-local-installation](https://github.com/browser-use/web-ui#option-1-local-installation)

Read the [quickstart guide](https://docs.browser-use.com/quickstart#prepare-the-environment) or follow the steps below to get started.

#### Step 1: Clone the Repository

[https://github.com/browser-use/web-ui#step-1-clone-the-repository](https://github.com/browser-use/web-ui#step-1-clone-the-repository)

```
git clone https://github.com/browser-use/web-ui.git
cd web-ui
```

#### Step 2: Set Up Python Environment

[https://github.com/browser-use/web-ui#step-2-set-up-python-environment](https://github.com/browser-use/web-ui#step-2-set-up-python-environment)

We recommend using [uv](https://docs.astral.sh/uv/) for managing the Python environment.

Using uv (recommended):

```
uv venv --python 3.11
```

Activate the virtual environment:

- Windows (Command Prompt):

```
.venv\Scriptsctivate
```

- Windows (PowerShell):

```
.\.venv\Scripts\Activate.ps1
```

- macOS/Linux:

```
source .venv/bin/activate
```

#### Step 3: Install Dependencies

[https://github.com/browser-use/web-ui#step-3-install-dependencies](https://github.com/browser-use/web-ui#step-3-install-dependencies)

Install Python packages:

```
uv pip install -r requirements.txt
```

Install Browsers in playwright.

```
playwright install --with-deps
```

Or you can install specific browsers by running:

```
playwright install chromium --with-deps
```

#### Step 4: Configure Environment

[https://github.com/browser-use/web-ui#step-4-configure-environment](https://github.com/browser-use/web-ui#step-4-configure-environment)

1. Create a copy of the example environment file:

- Windows (Command Prompt):

```
copy .env.example .env
```

- macOS/Linux/Windows (PowerShell):

```
cp .env.example .env
```

1. Open `.env` in your preferred text editor and add your API keys and other settings

#### Step 5: Enjoy the web-ui

[https://github.com/browser-use/web-ui#step-5-enjoy-the-web-ui](https://github.com/browser-use/web-ui#step-5-enjoy-the-web-ui)

1. **Run the WebUI:**

```
python webui.py --ip 127.0.0.1 --port 7788
```

2. **Access the WebUI:** Open your web browser and navigate to `http://127.0.0.1:7788`.
3. **Using Your Own Browser(Optional):**
  - Set `BROWSER_PATH` to the executable path of your browser and `BROWSER_USER_DATA` to the user data directory of your browser. Leave `BROWSER_USER_DATA` empty if you want to use local user data. 
    - Windows 

```
BROWSER_PATH="C:\Program Files\Google\Chrome\Application