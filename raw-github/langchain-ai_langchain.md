---
repo: langchain-ai/langchain
url: https://github.com/langchain-ai/langchain
content_timestamp: 2026-05-11
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - langchain-ai/langchain: The agent engineering platform. · GitHub

**Source**: https://github.com/langchain-ai/langchain

---

[Skip to content](https://github.com/langchain-ai/langchain#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[langchain-ai](https://github.com/langchain-ai)

/
**[langchain](https://github.com/langchain-ai/langchain)**

Public

- [Notifications](https://github.com/login?return_to=%2Flangchain-ai%2Flangchain)You must be signed in to change notification settings
- [Fork
    22.7k](https://github.com/login?return_to=%2Flangchain-ai%2Flangchain)
- 
[Star
          137k](https://github.com/login?return_to=%2Flangchain-ai%2Flangchain)

[https://github.com/langchain-ai/langchain](https://github.com/langchain-ai/langchain)

[Branches](https://github.com/langchain-ai/langchain/branches)[Tags](https://github.com/langchain-ai/langchain/tags)

[https://github.com/langchain-ai/langchain/branches](https://github.com/langchain-ai/langchain/branches)[https://github.com/langchain-ai/langchain/tags](https://github.com/langchain-ai/langchain/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History16,023 Commits16,023 Commits |  |  |  |
| .devcontainer | .devcontainer |  |  |
| .github | .github |  |  |
| .vscode | .vscode |  |  |
| libs | libs |  |  |
| .dockerignore | .dockerignore |  |  |
| .editorconfig | .editorconfig |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| .markdownlint.json | .markdownlint.json |  |  |
| .mcp.json | .mcp.json |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CITATION.cff | CITATION.cff |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://docs.langchain.com/oss/python/langchain/overview](https://docs.langchain.com/oss/python/langchain/overview)

### The agent engineering platform.

[https://github.com/langchain-ai/langchain#the-agent-engineering-platform](https://github.com/langchain-ai/langchain#the-agent-engineering-platform)

[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)[https://pypistats.org/packages/langchain](https://pypistats.org/packages/langchain)[https://pypi.org/project/langchain/#history](https://pypi.org/project/langchain/#history)[https://x.com/langchain_oss](https://x.com/langchain_oss)

LangChain is a framework for building agents and LLM-powered applications. It helps you chain together interoperable components and third-party integrations to simplify AI application development — all while future-proofing decisions as the underlying technology evolves.

Tip

Just getting started? Check out **[Deep Agents](http://docs.langchain.com/oss/python/deepagents/)** — a higher-level package built on LangChain for agents that have built-in capabilites for common usage patterns such as planning, subagents, file system usage, and more.

## Quickstart

[https://github.com/langchain-ai/langchain#quickstart](https://github.com/langchain-ai/langchain#quickstart)

```
pip install langchain
# or
uv add langchain
```

```
from langchain.chat_models import init_chat_model

model = init_chat_model("openai:gpt-5.4")
result = model.invoke("Hello, world!")
```

If you're looking for more advanced customization or agent orchestration, check out [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview), our framework for building controllable agent workflows.

For an equivalent JS/TS library, check out [LangChain.js](https://github.com/langchain-ai/langchainjs).

Tip

For developing, debugging, and deploying AI agents and LLM applications, see [LangSmith](https://docs.langchain.com/langsmith/home).

## LangChain ecosystem

[https://github.com/langchain-ai/langchain#langchain-ecosystem](https://github.com/langchain-ai/langchain#langchain-ecosystem)

While the LangChain framework can be used standalone, it also integrates seamlessly with any LangChain product, giving developers a full suite of tools when building LLM applications.

- **[Deep Agents](http://docs.langchain.com/oss/python/deepagents/)** — Build agents that can plan, use subagents, and leverage file systems for complex tasks
- **[LangGraph](https://docs.langchain.com/oss/python/langgraph/overview)** — Build agents that can reliably handle complex tasks with our low-level agent orchestration framework
- **[Integrations](https://docs.langchain.com/oss/python/integrations/providers/overview)** — Chat & embedding models, tools & toolkits, and more
- **[LangSmith](https://www.langchain.com/langsmith)** — Agent evals, observability, and debugging for LLM apps
- **[LangSmith Deployment](https://docs.langchain.com/langsmith/deployments)** — Deploy and scale agents with a purpose-built platform for long-running, stateful workflows

## Why use LangChain?

[https://github.com/langchain-ai/langchain#why-use-langchain](https://github.com/langchain-ai/langchain#why-use-langchain)

LangChain helps developers build applications powered by LLMs through a standard interface for models, embeddings, vector stores, and more.

- **Real-time data augmentation** — Easily connect LLMs to diverse data sources and external/internal systems, drawing from LangChain's vast library of integrations with model providers, tools, vector stores, retrievers, and more
- **Model interoperability** — Swap models in and out as your engineering team experiments to find the best choice for your application's needs. As the industry frontier evolves, adapt quickly — LangChain's abstractions keep you moving without losing momentum
- **Rapid prototyping** — Quickly build and iterate on LLM applications with LangChain's modular, component-based architecture. Test different approaches and workflows without rebuilding from scratch, accelerating your development cycle
- **Production-ready features** — Deploy reliable applications with built-in support for monitoring, evaluation, and debugging through integrations like LangSmith. Scale with confidence using battle-tested patterns and best practices
- **Vibrant community and ecosystem** — Leverage a rich ecosystem of integrations, templates, and community-contributed components. Benefit from continuous improvements and stay up-to-date with the latest AI developments through an active open-source community
- **Flexible abstraction layers** — Work at the level of abstraction that suits your needs — from high-level chains for quick starts to low-level components for fine-grained control. LangChain grows with your application's complexity

---

## Documentation

[https://github.com/langchain-ai/langchain#documentation](https://github.com/langchain-ai/langchain#documentation)

- [docs.langchain.com](https://docs.langchain.com/oss/python/langchain/overview) – Comprehensive documentation, including conceptual overviews and guides
- [reference.langchain.com/python](https://reference.langchain.com/python) – API reference docs for LangChain packages
- [Chat LangChain](https://chat.langchain.com/) – Chat with the LangChain documentation and get answers to your questions

**Discussions**: Visit the [LangChain Forum](https://forum.langchain.com) to connect with the community and share all of your technical questions, ideas, and feedback.

## Additional resources

[https://github.com/langchain-ai/langchain#additional-resources](https://github.com/langchain-ai/langchain#additional-resources)

- [Contributing Guide](https://docs.langchain.com/oss/python/contributing/overview) – Learn how to contribute to LangChain projects and find good first issues.
- [Code of Conduct](https://github.com/langchain-ai/langchain/?tab=coc-ov-file) – Our community guidelines and standards for participation.
- [LangChain Academy](https://academy.langchain.com/) – Comprehensive, free courses on LangChain libraries and products, made by the LangChain team.

## About

         The agent engineering platform.       

[docs.langchain.com/langchain/](https://docs.langchain.com/langchain/)

### Topics

[python](https://github.com/topics/python)[open-source](https://github.com/topics/open-source)[enterprise](https://github.com/topics/enterprise)[framework](https://github.com/topics/framework)[typescript](https://github.com/topics/typescript)[ai](https://github.com/topics/ai)[gemini](https://github.com/topics/gemini)[openai](https://github.com/topics/openai)[multiagent](https://github.com/topics/multiagent)[agents](https://github.com/topics/agents)[ai-agents](https://github.com/topics/ai-agents)[rag](https://github.com/topics/rag)[pydantic](https://github.com/topics/pydantic)[llm](https://github.com/topics/llm)[generative-ai](https://github.com/topics/generative-ai)[chatgpt](https://github.com/topics/chatgpt)[langchain](https://github.com/topics/langchain)[anthropic](https://github.com/topics/anthropic)[langgraph](https://github.com/topics/langgraph)[deepagents](https://github.com/topics/deepagents)

### Resources

[Readme](https://github.com/langchain-ai/langchain#readme-ov-file)

### License

[MIT license](https://github.com/langchain-ai/langchain#MIT-1-ov-file)

### Code of conduct

[Code of conduct](https://github.com/langchain-ai/langchain#coc-ov-file)

### Contributing

[Contributing](https://github.com/langchain-ai/langchain#contributing-ov-file)

### Security policy

[Security policy](https://github.com/langchain-ai/langchain#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/langchain-ai/langchain/activity)

[Custom properties](https://github.com/langchain-ai/langchain/custom-properties)

### Stars

[137k
        stars](https://github.com/langchain-ai/langchain/stargazers)

### Watchers

[872
        watching](https://github.com/langchain-ai/langchain/watchers)

### Forks

[22.7k
        forks](https://github.com/langchain-ai/langchain/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Flangchain-ai%2Flangchain&report=langchain-ai+%28user%29)

## [Releases
      1,250](https://github.com/langchain-ai/langchain/releases)

[langchain-core==1.4.0
        
          Latest
      
      May 11, 2026](https://github.com/langchain-ai/langchain/releases/tag/langchain-core%3D%3D1.4.0)
[+ 1,249 releases](https://github.com/langchain-ai/langchain/releases)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/langchain-ai/langchain/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          99.3%](https://github.com/langchain-ai/langchain/search?l=python)
- [Makefile
          0.5%](https://github.com/langchain-ai/langchain/search?l=makefile)
- [Shell
          0.1%](https://github.com/langchain-ai/langchain/search?l=shell)
- [XSLT
          0.1%](https://github.com/langchain-ai/langchain/search?l=xslt)
- [HTML
          0.0%](https://github.com/langchain-ai/langchain/search?l=html)
- [Dockerfile
          0.0%](https://github.com/langchain-ai/langchain/search?l=dockerfile)

     You can’t perform that action at this time.
