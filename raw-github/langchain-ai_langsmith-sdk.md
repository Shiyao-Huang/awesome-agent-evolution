---
repo: langchain-ai/langsmith-sdk
url: https://github.com/langchain-ai/langsmith-sdk
content_timestamp: 2026-05-15
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - langchain-ai/langsmith-sdk: LangSmith Client SDK Implementations · GitHub

**Source**: https://github.com/langchain-ai/langsmith-sdk

---

[Skip to content](https://github.com/langchain-ai/langsmith-sdk#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[langchain-ai](https://github.com/langchain-ai)

/
**[langsmith-sdk](https://github.com/langchain-ai/langsmith-sdk)**

Public

- [Notifications](https://github.com/login?return_to=%2Flangchain-ai%2Flangsmith-sdk)You must be signed in to change notification settings
- [Fork
    234](https://github.com/login?return_to=%2Flangchain-ai%2Flangsmith-sdk)
- 
[Star
          894](https://github.com/login?return_to=%2Flangchain-ai%2Flangsmith-sdk)

[https://github.com/langchain-ai/langsmith-sdk](https://github.com/langchain-ai/langsmith-sdk)

[Branches](https://github.com/langchain-ai/langsmith-sdk/branches)[Tags](https://github.com/langchain-ai/langsmith-sdk/tags)

[https://github.com/langchain-ai/langsmith-sdk/branches](https://github.com/langchain-ai/langsmith-sdk/branches)[https://github.com/langchain-ai/langsmith-sdk/tags](https://github.com/langchain-ai/langsmith-sdk/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History2,675 Commits2,675 Commits |  |  |  |
| .github | .github |  |  |
| .vscode | .vscode |  |  |
| _scripts | _scripts |  |  |
| examples | examples |  |  |
| js | js |  |  |
| openapi | openapi |  |  |
| python | python |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| .mlc_config.json | .mlc_config.json |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| .readthedocs.yml | .readthedocs.yml |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# LangSmith Client SDKs

[https://github.com/langchain-ai/langsmith-sdk#langsmith-client-sdks](https://github.com/langchain-ai/langsmith-sdk#langsmith-client-sdks)

[https://github.com/langchain-ai/langsmith-sdk/releases](https://github.com/langchain-ai/langsmith-sdk/releases)[https://pypi.org/project/langsmith/](https://pypi.org/project/langsmith/)

[https://camo.githubusercontent.com/710facc59f3810ad4abdb266464a80c9d5fbfe2987034283570164891dd35ac5/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f6c616e67736d6974683f6c6f676f3d6e706d](https://camo.githubusercontent.com/710facc59f3810ad4abdb266464a80c9d5fbfe2987034283570164891dd35ac5/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f6c616e67736d6974683f6c6f676f3d6e706d)[https://www.npmjs.com/package/langsmith](https://www.npmjs.com/package/langsmith)

This repository contains the Python and Javascript SDK's for interacting with the [LangSmith platform](https://smith.langchain.com/). Please see [LangSmith Documentation](https://docs.smith.langchain.com/) for documentation about using the LangSmith platform and the client SDK.

LangSmith helps your team debug, evaluate, and monitor your language models and intelligent agents. It works with any LLM Application, including a native integration with the [LangChain Python](https://github.com/langchain-ai/langchain) and [LangChain JS](https://github.com/langchain-ai/langchainjs) open source libraries.

LangSmith is developed and maintained by [LangChain](https://langchain.com/), the company behind the LangChain framework.

## Quick Start

[https://github.com/langchain-ai/langsmith-sdk#quick-start](https://github.com/langchain-ai/langsmith-sdk#quick-start)

To get started with the Python SDK, [install the package](https://pypi.org/project/langsmith/), then follow the instructions in the [Python README](https://github.com/langchain-ai/langsmith-sdk/blob/main/python/README.md).

```
pip install -U langsmith
export LANGSMITH_TRACING=true
export LANGSMITH_API_KEY=ls_...
export LANGSMITH_WORKSPACE_ID=<your-workspace-id> # Required for org-scoped keys
```

Then start tracing your app:

```
import openai
from langsmith import traceable
from langsmith.wrappers import wrap_openai

client = wrap_openai(openai.Client())

client.chat.completions.create(
    messages=[{"role": "user", "content": "Hello, world"}],
    model="gpt-3.5-turbo"
)
```

To get started with the JavaScript / TypeScript SDK, [install the package](https://www.npmjs.com/package/langsmith), then follow the instructions in the [JS README](https://github.com/langchain-ai/langsmith-sdk/blob/main/js/README.md).

```
pnpm add langsmith
export LANGSMITH_TRACING=true
export LANGSMITH_API_KEY=ls_...
export LANGSMITH_WORKSPACE_ID=<your-workspace-id> # Required for org-scoped keys
```

Then start tracing your app!

```
import { OpenAI } from "openai";
import { traceable } from "langsmith/traceable";
import { wrapOpenAI } from "langsmith/wrappers";

const client = wrapOpenAI(new OpenAI());

await client.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [{ content: "Hi there!", role: "user" }],
});
```

```
{
  id: 'chatcmpl-8sOWEOYVyehDlyPcBiaDtTxWvr9v6',
  object: 'chat.completion',
  created: 1707974654,
  model: 'gpt-3.5-turbo-0613',
  choices: [
    {
      index: 0,
      message: { role: 'assistant', content: 'Hello! How can I help you today?' },
      logprobs: null,
      finish_reason: 'stop'
    }
  ],
  usage: { prompt_tokens: 10, completion_tokens: 9, total_tokens: 19 },
  system_fingerprint: null
}
```

## Cookbook

[https://github.com/langchain-ai/langsmith-sdk#cookbook](https://github.com/langchain-ai/langsmith-sdk#cookbook)

For tutorials on how to get more value out of LangSmith, check out the [Langsmith Cookbook](https://github.com/langchain-ai/langsmith-cookbook/tree/main) repo.

## Documentation

[https://github.com/langchain-ai/langsmith-sdk#documentation](https://github.com/langchain-ai/langsmith-sdk#documentation)

To learn more about the LangSmith platform, check out the [docs](https://docs.smith.langchain.com/)

## About

         LangSmith Client SDK Implementations       

[docs.smith.langchain.com/](https://docs.smith.langchain.com/)

### Topics

[evaluation](https://github.com/topics/evaluation)[language-model](https://github.com/topics/language-model)[observability](https://github.com/topics/observability)

### Resources

[Readme](https://github.com/langchain-ai/langsmith-sdk#readme-ov-file)

### License

[MIT license](https://github.com/langchain-ai/langsmith-sdk#MIT-1-ov-file)

### Code of conduct

[Code of conduct](https://github.com/langchain-ai/langsmith-sdk#coc-ov-file)

### Contributing

[Contributing](https://github.com/langchain-ai/langsmith-sdk#contributing-ov-file)

### Security policy

[Security policy](https://github.com/langchain-ai/langsmith-sdk#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/langchain-ai/langsmith-sdk/activity)

[Custom properties](https://github.com/langchain-ai/langsmith-sdk/custom-properties)

### Stars

[894
        stars](https://github.com/langchain-ai/langsmith-sdk/stargazers)

### Watchers

[12
        watching](https://github.com/langchain-ai/langsmith-sdk/watchers)

### Forks

[234
        forks](https://github.com/langchain-ai/langsmith-sdk/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Flangchain-ai%2Flangsmith-sdk&report=langchain-ai+%28user%29)

## [Releases
      442](https://github.com/langchain-ai/langsmith-sdk/releases)

[v0.8.5
        
          Latest
      
      May 15, 2026](https://github.com/langchain-ai/langsmith-sdk/releases/tag/v0.8.5)
[+ 441 releases](https://github.com/langchain-ai/langsmith-sdk/releases)

## [Packages
      0](https://github.com/orgs/langchain-ai/packages?repo_name=langsmith-sdk)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/langchain-ai/langsmith-sdk/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          59.8%](https://github.com/langchain-ai/langsmith-sdk/search?l=python)
- [TypeScript
          39.8%](https://github.com/langchain-ai/langsmith-sdk/search?l=typescript)
- 

Other

0.4%

     You can’t perform that action at this time.
