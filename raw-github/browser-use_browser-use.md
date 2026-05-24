---
repo: browser-use/browser-use
url: https://github.com/browser-use/browser-use
content_timestamp: 2026-05-19
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - browser-use/browser-use: 🌐 Make websites accessible for AI agents. Automate tasks online with ease. · GitHub

**Source**: https://github.com/browser-use/browser-use

---

[Skip to content](https://github.com/browser-use/browser-use#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[browser-use](https://github.com/browser-use)

/
**[browser-use](https://github.com/browser-use/browser-use)**

Public

- [Notifications](https://github.com/login?return_to=%2Fbrowser-use%2Fbrowser-use)You must be signed in to change notification settings
- [Fork
    10.7k](https://github.com/login?return_to=%2Fbrowser-use%2Fbrowser-use)
- 
[Star
          94.8k](https://github.com/login?return_to=%2Fbrowser-use%2Fbrowser-use)

[https://github.com/browser-use/browser-use](https://github.com/browser-use/browser-use)

[Branches](https://github.com/browser-use/browser-use/branches)[Tags](https://github.com/browser-use/browser-use/tags)

[https://github.com/browser-use/browser-use/branches](https://github.com/browser-use/browser-use/branches)[https://github.com/browser-use/browser-use/tags](https://github.com/browser-use/browser-use/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History9,247 Commits9,247 Commits |  |  |  |
| .github | .github |  |  |
| bin | bin |  |  |
| browser_use | browser_use |  |  |
| docker | docker |  |  |
| examples | examples |  |  |
| skills | skills |  |  |
| static | static |  |  |
| tests | tests |  |  |
| .dockerignore | .dockerignore |  |  |
| .env.example | .env.example |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| .python-version | .python-version |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CLOUD.md | CLOUD.md |  |  |
| Dockerfile | Dockerfile |  |  |
| Dockerfile.fast | Dockerfile.fast |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

![Shows a black Browser Use Logo in light color mode and a white one in dark color mode.](https://github.com/user-attachments/assets/2ccdb752-22fb-41c7-8948-857fc1ad7e24)
![The AI browser agent.](https://github.com/user-attachments/assets/9955dda9-ede3-4971-8ee0-91cbc3850125)

[https://cloud.browser-use.com?utm_source=github&utm_medium=readme-badge-downloads](https://cloud.browser-use.com?utm_source=github&utm_medium=readme-badge-downloads)

---

[https://github.com/browser-use/browser-use#demos](https://github.com/browser-use/browser-use#demos)[https://docs.browser-use.com](https://docs.browser-use.com)[https://browser-use.com/posts](https://browser-use.com/posts)[https://browsermerch.com](https://browsermerch.com)[https://github.com/browser-use/browser-use](https://github.com/browser-use/browser-use)[https://x.com/intent/user?screen_name=browser_use](https://x.com/intent/user?screen_name=browser_use)[https://link.browser-use.com/discord](https://link.browser-use.com/discord)[https://cloud.browser-use.com?utm_source=github&utm_medium=readme-badge-cloud](https://cloud.browser-use.com?utm_source=github&utm_medium=readme-badge-cloud)

🌤️ Want to skip the setup? Use our **[cloud](https://cloud.browser-use.com?utm_source=github&utm_medium=readme-skip-setup)** for faster, scalable, stealth-enabled browser automation!

# 🤖 LLM Quickstart

[https://github.com/browser-use/browser-use#-llm-quickstart](https://github.com/browser-use/browser-use#-llm-quickstart)

1. Direct your favorite coding agent (Cursor, Claude Code, etc) to [Agents.md](https://docs.browser-use.com/llms-full.txt)
2. Prompt away!

# 👋 Human Quickstart

[https://github.com/browser-use/browser-use#-human-quickstart](https://github.com/browser-use/browser-use#-human-quickstart)

**1. Create environment and install Browser-Use with [uv](https://docs.astral.sh/uv/) (Python>=3.11):**

```
uv init && uv add browser-use && uv sync
# uvx browser-use install  # Run if you don't have Chromium installed
```

**2. [Optional] Get your API key from [Browser Use Cloud](https://cloud.browser-use.com/new-api-key?utm_source=github&utm_medium=readme-quickstart-api-key):**

```
# .env
BROWSER_USE_API_KEY=your-key
# GOOGLE_API_KEY=your-key
# ANTHROPIC_API_KEY=your-key
```

**3. Run your first agent:**

```
from browser_use import Agent, Browser, ChatBrowserUse
# from browser_use import ChatGoogle  # ChatGoogle(model='gemini-3-flash-preview')
# from browser_use import ChatAnthropic  # ChatAnthropic(model='claude-sonnet-4-6')
import asyncio

async def main():
    browser = Browser(
        # use_cloud=True,  # Use a stealth browser on Browser Use Cloud
    )

    agent = Agent(
        task="Find the number of stars of the browser-use repo",
        llm=ChatBrowserUse(),
        # llm=ChatGoogle(model='gemini-3-flash-preview'),
        # llm=ChatAnthropic(model='claude-sonnet-4-6'),
        browser=browser,
    )
    await agent.run()

if __name__ == "__main__":
    asyncio.run(main())
```

Check out the [library docs](https://docs.browser-use.com/open-source/introduction) and the [cloud docs](https://docs.cloud.browser-use.com?utm_source=github&utm_medium=readme-cloud-docs) for more!

# Open Source vs Cloud

[https://github.com/browser-use/browser-use#open-source-vs-cloud](https://github.com/browser-use/browser-use#open-source-vs-cloud)
![BU Bench V1 - LLM Success Rates](https://github.com/browser-use/browser-use/raw/main/static/accuracy_by_model_light.png)

We benchmark Browser Use across 100 real-world browser tasks. Full benchmark is open source: **[browser-use/benchmark](https://github.com/browser-use/benchmark)**.

**Use the Open-Source Agent**

- You need [custom tools](https://docs.browser-use.com/customize/tools/basics) or deep code-level integration
- We recommend pairing with our [cloud browsers](https://docs.browser-use.com/open-source/customize/browser/remote) for leading stealth, proxy rotation, and scaling
- Or self-host the open-source agent fully on your own machines

**Use the [Fully-Hosted Cloud Agent](https://cloud.browser-use.com?utm_source=github&utm_medium=readme-hosted-agent) (recommended)**

- Much more powerful agent for complex tasks (see plot above)
- Easiest way to start and scale
- Best stealth with proxy rotation and captcha solving
- 1000+ integrations (Gmail, Slack, Notion, and more)
- Persistent filesystem and memory

# Demos

[https://github.com/browser-use/browser-use#demos](https://github.com/browser-use/browser-use#demos)

### 📋 Form-Filling

[https://github.com/browser-use/browser-use#-form-filling](https://github.com/browser-use/browser-use#-form-filling)

#### Task = "Fill in this job application with my resume and information."

[https://github.com/browser-use/browser-use#task--fill-in-this-job-application-with-my-resume-and-information](https://github.com/browser-use/browser-use#task--fill-in-this-job-application-with-my-resume-and-information)

[https://private-user-images.githubusercontent.com/43824272/501209081-57865ee6-6004-49d5-b2c2-6dff39ec2ba9.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTk0ODksIm5iZiI6MTc3OTI5OTE4OSwicGF0aCI6Ii80MzgyNDI3Mi81MDEyMDkwODEtNTc4NjVlZTYtNjAwNC00OWQ1LWIyYzItNmRmZjM5ZWMyYmE5LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIwVDE3NDYyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgwYmFjNjA1NDgyMGJiMjdiZGM3MjQ4YmM1ODY5ZjZiNGZmOTZhNGMyYzM3ZDc5MGFjNzc2NGUwODBjNjEwNTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRmdpZiJ9.JJTRrVmZ4wXhylQS4m0Rwir7TR9P_yzdHPGZrfE4a4k](https://private-user-images.githubusercontent.com/43824272/501209081-57865ee6-6004-49d5-b2c2-6dff39ec2ba9.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTk0ODksIm5iZiI6MTc3OTI5OTE4OSwicGF0aCI6Ii80MzgyNDI3Mi81MDEyMDkwODEtNTc4NjVlZTYtNjAwNC00OWQ1LWIyYzItNmRmZjM5ZWMyYmE5LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIwVDE3NDYyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgwYmFjNjA1NDgyMGJiMjdiZGM3MjQ4YmM1ODY5ZjZiNGZmOTZhNGMyYzM3ZDc5MGFjNzc2NGUwODBjNjEwNTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRmdpZiJ9.JJTRrVmZ4wXhylQS4m0Rwir7TR9P_yzdHPGZrfE4a4k)[Example code ↗](https://github.com/browser-use/browser-use/blob/main/examples/use-cases/apply_to_job.py)

### 🍎 Grocery-Shopping

[https://github.com/browser-use/browser-use#-grocery-shopping](https://github.com/browser-use/browser-use#-grocery-shopping)

#### Task = "Put this list of items into my instacart."

[https://github.com/browser-use/browser-use#task--put-this-list-of-items-into-my-instacart](https://github.com/browser-use/browser-use#task--put-this-list-of-items-into-my-instacart)

grocery-use-large.mp4

[Example code ↗](https://github.com/browser-use/browser-use/blob/main/examples/use-cases/buy_groceries.py)

### 💻 Personal-Assistant.

[https://github.com/browser-use/browser-use#-personal-assistant](https://github.com/browser-use/browser-use#-personal-assistant)

#### Task = "Help me find parts for a custom PC."

[https://github.com/browser-use/browser-use#task--help-me-find-parts-for-a-custom-pc](https://github.com/browser-use/browser-use#task--help-me-find-parts-for-a-custom-pc)

pc-use-large.mp4

[Example code ↗](https://github.com/browser-use/browser-use/blob/main/examples/use-cases/pcpartpicker.py)

### 💡See [more examples here ↗](https://docs.browser-use.com/examples) and give us a star!

[https://github.com/browser-use/browser-use#see-more-examples-here--and-give-us-a-star](https://github.com/browser-use/browser-use#see-more-examples-here--and-give-us-a-star)

# 🚀 Template Quickstart

[https://github.com/browser-use/browser-use#-template-quickstart](https://github.com/browser-use/browser-use#-template-quickstart)

**Want to get started even faster?** Generate a ready-to-run template:

```
uvx browser-use init --template default
```

This creates a `browser_use_default.py` file with a working example. Available templates:

- `default` - Minimal setup to get started quickly
- `advanced` - All configuration options with detailed comments
- `tools` - Examples of custom tools and extending the agent

You can also specify a custom output path:

```
uvx browser-use init --template default --output my_agent.py
```

# 💻 CLI

[https://github.com/browser-use/browser-use#-cli](https://github.com/browser-use/browser-use#-cli)

Fast, persistent browser automation from the command line:

```
browser-use open https://example.com    # Navigate to URL
browser-use state                       # See clickable elements
browser-use click 5                     # Click element by index
browser-use type "Hello"                # Type text
browser-use screenshot page.png         # Take screenshot
browser-use close                       # Close browser
```

The CLI keeps the browser running between commands for fast iteration. See [CLI docs](https://github.com/browser-use/browser-use/blob/main/browser_use/skill_cli/README.md) for all commands.

### Claude Code Skill

[https://github.com/browser-use/browser-use#claude-code-skill](https://github.com/browser-use/browser-use#claude-code-skill)

For [Claude Code](https://claude.ai/code), install the skill to enable AI-assisted browser automation:

```
mkdir -p ~/.claude/skills/browser-use
curl -o ~/.claude/skills/browser-use/SKILL.md \
  https://raw.githubusercontent.com/browser-use/browser-use/main/skills/browser-use/SKILL.md
```

## Integrations, hosting, custom tools, MCP, and more on our [Docs ↗](https://docs.browser-use.com)

[https://github.com/browser-use/browser-use#integrations-hosting-custom-tools-mcp-and-more-on-our-docs-](https://github.com/browser-use/browser-use#integrations-hosting-custom-tools-mcp-and-more-on-our-docs-)

# FAQ

[https://github.com/browser-use/browser-use#faq](https://github.com/browser-use/browser-use#faq)
**What's the best model to use?**

We optimized **ChatBrowserUse()** specifically for browser automation tasks. On avg it completes tasks 3-5x faster than other models with SOTA accuracy.

**Pricing (per 1M tokens):**

- Input tokens: $0.20
- Cached input tokens: $0.02
- Output tokens: $2.00

For other LLM providers, see our [supported models documentation](https://docs.browser-use.com/supported-models).

**Should I use the Browser Use system prompt with the open-source preview model?**

Yes. If you use `ChatBrowserUse(model='browser-use/bu-30b-a3b-preview')` with a normal `Agent(...)`, Browser Use still sends its default agent system prompt for you.

You do **not** need to add a separate custom "Browser Use system message" just because you switched to the open-source preview model. Only use `extend_system_message` or `override_system_message` when you intentionally want to customize the default behavior for your task.

If you want the best default speed/accuracy, we still recommend the newer hosted `bu-*` models. If you want the open-source preview model, the setup stays the same apart from the `model=` value.

**Can I use custom tools with the agent?**

Yes! You can add custom tools to extend the agent's capabilities:

```
from browser_use import Tools

tools = Tools()

@tools.action(description='Description of what this tool does.')
def custom_tool(param: str) -> str:
    return f"Result: {param}"

agent = Agent(
    task="Your task",
    llm=llm,
    browser=browser,
    tools=tools,
)
```

**Can I use this for free?**

Yes! Browser-Use is open source and free to use. You only need to choose an LLM provider (like OpenAI, Google, ChatBrowserUse, or run local models with Ollama).

**Terms of Service**

This open-source library is licensed under the MIT License. For Browser Use services & data policy, see our [Terms of Service](https://browser-use.com/legal/terms-of-service) and [Privacy Policy](https://browser-use.com/privacy/).

**How do I handle authentication?**

Check out our authentication examples:

- [Using real browser profiles](https://github.com/browser-use/browser-use/blob/main/examples/browser/real_browser.py) - Reuse your existing Chrome profile with saved logins
- If you want to use temporary accounts with inbox, choose AgentMail
- To sync your auth profile with the remote browser, run `curl -fsSL https://browser-use.com/profile.sh | BROWSER_USE_API_KEY=XXXX sh` (replace XXXX with your API key)

These examples show how to maintain sessions and handle authentication seamlessly.

**How do I solve CAPTCHAs?**

For CAPTCHA handling, you need better browser fingerprinting and proxies. Use [Browser Use Cloud](https://cloud.browser-use.com?utm_source=github&utm_medium=readme-faq-captcha) which provides stealth browsers designed to avoid detection and CAPTCHA challenges.

**How do I go into production?**

Chrome can consume a lot of memory, and running many agents in parallel can be tricky to manage.

For production use cases, use our [Browser Use Cloud API](https://cloud.browser-use.com?utm_source=github&utm_medium=readme-faq-production) which handles:

- Scalable browser infrastructure
- Memory management
- Proxy rotation
- Stealth browser fingerprinting
- High-performance parallel execution

**Tell your computer what to do, and it gets it done.**

[https://private-user-images.githubusercontent.com/67061560/425692580-06fa3078-8461-4560-b434-445510c1766f.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTk0ODksIm5iZiI6MTc3OTI5OTE4OSwicGF0aCI6Ii82NzA2MTU2MC80MjU2OTI1ODAtMDZmYTMwNzgtODQ2MS00NTYwLWI0MzQtNDQ1NTEwYzE3NjZmLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxNzQ2MjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MTdjOTgzNGUxNjhiNzE3YzNkNGMxMWQ2MmVkZjFmZTk0Mjk4ZTlmMDllYmQ4Yjc4YzczYzI1ZGU2OTc0YmY0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZqcGVnIn0.BucwjCoXy7n4Tizy8ruHoXTQ8ETOm6FUVjlTozqqtbU](https://private-user-images.githubusercontent.com/67061560/425692580-06fa3078-8461-4560-b434-445510c1766f.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTk0ODksIm5iZiI6MTc3OTI5OTE4OSwicGF0aCI6Ii82NzA2MTU2MC80MjU2OTI1ODAtMDZmYTMwNzgtODQ2MS00NTYwLWI0MzQtNDQ1NTEwYzE3NjZmLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxNzQ2MjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MTdjOTgzNGUxNjhiNzE3YzNkNGMxMWQ2MmVkZjFmZTk0Mjk4ZTlmMDllYmQ4Yjc4YzczYzI1ZGU2OTc0YmY0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZqcGVnIn0.BucwjCoXy7n4Tizy8ruHoXTQ8ETOm6FUVjlTozqqtbU)

[https://x.com/intent/user?screen_name=mamagnus00](https://x.com/intent/user?screen_name=mamagnus00)[https://x.com/intent/user?screen_name=gregpr07](https://x.com/intent/user?screen_name=gregpr07)

 Made with ❤️ in Zurich and San Francisco 

## About

         🌐 Make websites accessible for AI agents. Automate tasks online with ease.       

[browser-use.com](https://browser-use.com)

### Topics

[python](https://github.com/topics/python)[browser-automation](https://github.com/topics/browser-automation)[ai-agents](https://github.com/topics/ai-agents)[playwright](https://github.com/topics/playwright)[ai-tools](https://github.com/topics/ai-tools)[llm](https://github.com/topics/llm)[browser-use](https://github.com/topics/browser-use)

### Resources

[Readme](https://github.com/browser-use/browser-use#readme-ov-file)

### License

[MIT license](https://github.com/browser-use/browser-use#MIT-1-ov-file)

### Contributing

[Contributing](https://github.com/browser-use/browser-use#contributing-ov-file)

### Security policy

[Security policy](https://github.com/browser-use/browser-use#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/browser-use/browser-use/activity)

[Custom properties](https://github.com/browser-use/browser-use/custom-properties)

### Stars

[94.8k
        stars](https://github.com/browser-use/browser-use/stargazers)

### Watchers

[434
        watching](https://github.com/browser-use/browser-use/watchers)

### Forks

[10.7k
        forks](https://github.com/browser-use/browser-use/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fbrowser-use%2Fbrowser-use&report=browser-use+%28user%29)

## [Releases
      124](https://github.com/browser-use/browser-use/releases)

[0.12.7
        
          Latest
      
      May 19, 2026](https://github.com/browser-use/browser-use/releases/tag/0.12.7)
[+ 123 releases](https://github.com/browser-use/browser-use/releases)
