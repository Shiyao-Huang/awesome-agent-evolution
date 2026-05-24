---
repo: letta-ai/letta
url: https://github.com/letta-ai/letta
content_timestamp: 2026-05-14
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - letta-ai/letta: Letta is the platform for building stateful agents: AI with advanced memory that can learn and self-improve over time. · GitHub

**Source**: https://github.com/letta-ai/letta

---

[Skip to content](https://github.com/letta-ai/letta#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[letta-ai](https://github.com/letta-ai)

/
**[letta](https://github.com/letta-ai/letta)**

Public

- [Notifications](https://github.com/login?return_to=%2Fletta-ai%2Fletta)You must be signed in to change notification settings
- [Fork
    2.4k](https://github.com/login?return_to=%2Fletta-ai%2Fletta)
- 
[Star
          22.8k](https://github.com/login?return_to=%2Fletta-ai%2Fletta)

[https://github.com/letta-ai/letta](https://github.com/letta-ai/letta)

[Branches](https://github.com/letta-ai/letta/branches)[Tags](https://github.com/letta-ai/letta/tags)

[https://github.com/letta-ai/letta/branches](https://github.com/letta-ai/letta/branches)[https://github.com/letta-ai/letta/tags](https://github.com/letta-ai/letta/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History7,464 Commits7,464 Commits |  |  |  |
| .github | .github |  |  |
| alembic | alembic |  |  |
| assets | assets |  |  |
| certs | certs |  |  |
| db | db |  |  |
| examples/notebooks/data | examples/notebooks/data |  |  |
| fern | fern |  |  |
| letta | letta |  |  |
| otel | otel |  |  |
| sandbox | sandbox |  |  |
| scripts | scripts |  |  |
| tests | tests |  |  |
| .dockerignore | .dockerignore |  |  |
| .env.example | .env.example |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| .python-version | .python-version |  |  |
| AI_POLICY.md | AI_POLICY.md |  |  |
| CITATION.cff | CITATION.cff |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| PRIVACY.md | PRIVACY.md |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| TERMS.md | TERMS.md |  |  |
| WEBHOOK_SETUP.md | WEBHOOK_SETUP.md |  |  |
| alembic.ini | alembic.ini |  |  |
| compose.yaml | compose.yaml |  |  |
| conf.yaml | conf.yaml |  |  |
| dev-compose.yaml | dev-compose.yaml |  |  |
| development.compose.yml | development.compose.yml |  |  |
| docker-compose-vllm.yaml | docker-compose-vllm.yaml |  |  |
| init.sql | init.sql |  |  |
| nginx.conf | nginx.conf |  |  |
| package-lock.json | package-lock.json |  |  |
| project.json | project.json |  |  |
| pyproject.toml | pyproject.toml |  |  |
| test_watchdog_hang.py | test_watchdog_hang.py |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

# Letta (formerly MemGPT)

[https://github.com/letta-ai/letta#letta-formerly-memgpt](https://github.com/letta-ai/letta#letta-formerly-memgpt)

Build AI with advanced memory that can learn and self-improve over time.

- [Letta Code](https://docs.letta.com/letta-code): run agents locally in your terminal
- [Letta API](https://docs.letta.com/quickstart/): build agents into your applications

## Get started in the CLI

[https://github.com/letta-ai/letta#get-started-in-the-cli](https://github.com/letta-ai/letta#get-started-in-the-cli)

Requires [Node.js 18+](https://nodejs.org/en/download)

1. Install the [Letta Code](https://github.com/letta-ai/letta-code) CLI tool: `npm install -g @letta-ai/letta-code`
2. Run `letta` in your terminal to launch an agent with memory running on your local computer

When running the CLI tool, your agent help you code and do any task you can do on your computer.

Letta Code supports [skills](https://docs.letta.com/letta-code/skills) and [subagents](https://docs.letta.com/letta-code/subagents), and bundles pre-built skills/subagents for advanced memory and continual learning. Letta is fully model-agnostic, though we recommend Opus 4.5 and GPT-5.2 for best performance (see our [model leaderboard](https://leaderboard.letta.com/) for our rankings).

## Get started with the Letta API

[https://github.com/letta-ai/letta#get-started-with-the-letta-api](https://github.com/letta-ai/letta#get-started-with-the-letta-api)

Use the Letta API to integrate stateful agents into your own applications. Letta has a full-featured agents API, and a Python and Typescript SDK (view our [API reference](https://docs.letta.com/api)).

### Installation

[https://github.com/letta-ai/letta#installation](https://github.com/letta-ai/letta#installation)

TypeScript / Node.js:

```
npm install @letta-ai/letta-client
```

Python:

```
pip install letta-client
```

### Hello World example

[https://github.com/letta-ai/letta#hello-world-example](https://github.com/letta-ai/letta#hello-world-example)

Below is a quick example of creating a stateful agent and sending it a message (requires a [Letta API key](https://app.letta.com)). See the full [quickstart guide](https://docs.letta.com/quickstart) for complete documentation.

TypeScript:

```
import Letta from "@letta-ai/letta-client";

const client = new Letta({ apiKey: process.env.LETTA_API_KEY });

// Create your agent
const agentState = await client.agents.create({
  model: "openai/gpt-5.2",
  memory_blocks: [
    {
      label: "human",
      value:
        "Name: Timber. Status: dog. Occupation: building Letta, infrastructure to democratize self-improving superintelligence",
    },
    {
      label: "persona",
      value:
        "I am a self-improving superintelligence. Timber is my best friend and collaborator.",
    },
  ],
  tools: ["web_search", "fetch_webpage"],
});

console.log("Agent created with ID:", agentState.id);

// Send your agent a message
const response = await client.agents.messages.create(agentState.id, {
  input: "What do you know about me?",
});

for (const message of response.messages) {
  console.log(message);
}
```

Python:

```
from letta_client import Letta
import os

client = Letta(api_key=os.getenv("LETTA_API_KEY"))

# Create your agent
agent_state = client.agents.create(
    model="openai/gpt-5.2",
    memory_blocks=[
        {
          "label": "human",
          "value": "Name: Timber. Status: dog. Occupation: building Letta, infrastructure to democratize self-improving superintelligence"
        },
        {
          "label": "persona",
          "value": "I am a self-improving superintelligence. Timber is my best friend and collaborator."
        }
    ],
    tools=["web_search", "fetch_webpage"]
)

print(f"Agent created with ID: {agent_state.id}")

# Send your agent a message
response = client.agents.messages.create(
    agent_id=agent_state.id,
    input="What do you know about me?"
)

for message in response.messages:
    print(message)
```

## Contributing

[https://github.com/letta-ai/letta#contributing](https://github.com/letta-ai/letta#contributing)

Letta is an open source project built by over a hundred contributors from around the world. There are many ways to get involved in the Letta OSS project!

- [Join the Discord](https://discord.gg/letta): Chat with the Letta devs and other AI developers.
- [Chat on our forum](https://forum.letta.com/): If you're not into Discord, check out our developer forum.
- **Follow our socials**: [Twitter/X](https://twitter.com/Letta_AI), [LinkedIn](https://www.linkedin.com/in/letta), [YouTube](https://www.youtube.com/@letta-ai)

---

***Legal notices**: By using Letta and related Letta services (such as the Letta endpoint or hosted service), you are agreeing to our [privacy policy](https://www.letta.com/privacy-policy) and [terms of service](https://www.letta.com/terms-of-service).*

## About

         Letta is the platform for building stateful agents: AI with advanced memory that can learn and self-improve over time.       

[docs.letta.com/](https://docs.letta.com/)

### Topics

[ai](https://github.com/topics/ai)[ai-agents](https://github.com/topics/ai-agents)[llm](https://github.com/topics/llm)[llm-agent](https://github.com/topics/llm-agent)

### Resources

[Readme](https://github.com/letta-ai/letta#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/letta-ai/letta#Apache-2.0-1-ov-file)

### Contributing

[Contributing](https://github.com/letta-ai/letta#contributing-ov-file)

### Security policy

[Security policy](https://github.com/letta-ai/letta#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/letta-ai/letta/activity)

[Custom properties](https://github.com/letta-ai/letta/custom-properties)

### Stars

[22.8k
        stars](https://github.com/letta-ai/letta/stargazers)

### Watchers

[136
        watching](https://github.com/letta-ai/letta/watchers)

### Forks

[2.4k
        forks](https://github.com/letta-ai/letta/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fletta-ai%2Fletta&report=letta-ai+%28user%29)

## [Releases
      177](https://github.com/letta-ai/letta/releases)

[v0.16.8
        
          Latest
      
      May 14, 2026](https://github.com/letta-ai/letta/releases/tag/0.16.8)
[+ 176 releases](https://github.com/letta-ai/letta/releases)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/letta-ai/letta/graphs/contributors)

- 

- 

- 

###         Uh oh!
## gBrain Temporal Metadata

- content_timestamp: 2026-05-14
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

