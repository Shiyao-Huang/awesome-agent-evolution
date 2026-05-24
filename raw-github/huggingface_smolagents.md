---
repo: huggingface/smolagents
url: https://github.com/huggingface/smolagents
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - huggingface/smolagents: 🤗 smolagents: a barebones library for agents that think in code. · GitHub

**Source**: https://github.com/huggingface/smolagents

---

[Skip to content](https://github.com/huggingface/smolagents#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[huggingface](https://github.com/huggingface)

/
**[smolagents](https://github.com/huggingface/smolagents)**

Public

- [Notifications](https://github.com/login?return_to=%2Fhuggingface%2Fsmolagents)You must be signed in to change notification settings
- [Fork
    2.6k](https://github.com/login?return_to=%2Fhuggingface%2Fsmolagents)
- 
[Star
          27.4k](https://github.com/login?return_to=%2Fhuggingface%2Fsmolagents)

[https://github.com/huggingface/smolagents](https://github.com/huggingface/smolagents)

[Branches](https://github.com/huggingface/smolagents/branches)[Tags](https://github.com/huggingface/smolagents/tags)

[https://github.com/huggingface/smolagents/branches](https://github.com/huggingface/smolagents/branches)[https://github.com/huggingface/smolagents/tags](https://github.com/huggingface/smolagents/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History1,043 Commits1,043 Commits |  |  |  |
| .github | .github |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| src/smolagents | src/smolagents |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| e2b.toml | e2b.toml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/huggingface/smolagents/blob/main/LICENSE](https://github.com/huggingface/smolagents/blob/main/LICENSE)[https://huggingface.co/docs/smolagents](https://huggingface.co/docs/smolagents)[https://github.com/huggingface/smolagents/releases](https://github.com/huggingface/smolagents/releases)[https://github.com/huggingface/smolagents/blob/main/CODE_OF_CONDUCT.md](https://github.com/huggingface/smolagents/blob/main/CODE_OF_CONDUCT.md)[https://deepwiki.com/huggingface/smolagents](https://deepwiki.com/huggingface/smolagents)

### 
[https://camo.githubusercontent.com/774eefdc490eba54630491d3dc58232c5a7ae35e1930003771ee8d19363aa388/68747470733a2f2f68756767696e67666163652e636f2f64617461736574732f68756767696e67666163652f646f63756d656e746174696f6e2d696d616765732f7265736f6c76652f6d61696e2f736d6f6c6167656e74732f736d6f6c6167656e74732e706e67](https://camo.githubusercontent.com/774eefdc490eba54630491d3dc58232c5a7ae35e1930003771ee8d19363aa388/68747470733a2f2f68756767696e67666163652e636f2f64617461736574732f68756767696e67666163652f646f63756d656e746174696f6e2d696d616765732f7265736f6c76652f6d61696e2f736d6f6c6167656e74732f736d6f6c6167656e74732e706e67)

Agents that think in code!

[https://github.com/huggingface/smolagents#----------agents-that-think-in-code--](https://github.com/huggingface/smolagents#----------agents-that-think-in-code--)

`smolagents` is a library that enables you to run powerful agents in a few lines of code. It offers:

✨ **Simplicity**: the logic for agents fits in ~1,000 lines of code (see [agents.py](https://github.com/huggingface/smolagents/blob/main/src/smolagents/agents.py)). We kept abstractions to their minimal shape above raw code!

🧑‍💻 **First-class support for Code Agents**. Our [CodeAgent](https://huggingface.co/docs/smolagents/reference/agents#smolagents.CodeAgent) writes its actions in code (as opposed to "agents being used to write code"). To make it secure, we support executing in sandboxed environments via [Blaxel](https://blaxel.ai), [E2B](https://e2b.dev/), [Modal](https://modal.com/), Docker, or Pyodide+Deno WebAssembly sandbox.

🤗 **Hub integrations**: you can [share/pull tools or agents to/from the Hub](https://huggingface.co/docs/smolagents/reference/tools#smolagents.Tool.from_hub) for instant sharing of the most efficient agents!

🌐 **Model-agnostic**: smolagents supports any LLM. It can be a local `transformers` or `ollama` model, one of [many providers on the Hub](https://huggingface.co/blog/inference-providers), or any model from OpenAI, Anthropic and many others via our [LiteLLM](https://www.litellm.ai/) integration.

👁️ **Modality-agnostic**: Agents support text, vision, video, even audio inputs! Cf [this tutorial](https://huggingface.co/docs/smolagents/examples/web_browser) for vision.

🛠️ **Tool-agnostic**: you can use tools from any [MCP server](https://huggingface.co/docs/smolagents/reference/tools#smolagents.ToolCollection.from_mcp), from [LangChain](https://huggingface.co/docs/smolagents/reference/tools#smolagents.Tool.from_langchain), you can even use a [Hub Space](https://huggingface.co/docs/smolagents/reference/tools#smolagents.Tool.from_space) as a tool.

Full documentation can be found [here](https://huggingface.co/docs/smolagents/index).

Note

Check the our [launch blog post](https://huggingface.co/blog/smolagents) to learn more about `smolagents`!

## Quick demo

[https://github.com/huggingface/smolagents#quick-demo](https://github.com/huggingface/smolagents#quick-demo)

First install the package with a default set of tools:

```
pip install "smolagents[toolkit]"
```

Then define your agent, give it the tools it needs and run it!

```
from smolagents import CodeAgent, WebSearchTool, InferenceClientModel

model = InferenceClientModel()
agent = CodeAgent(tools=[WebSearchTool()], model=model, stream_outputs=True)

agent.run("How many seconds would it take for a leopard at full speed to run through Pont des Arts?")
```

smolagents_readme_leopard.mp4

You can even share your agent to the Hub, as a Space repository:

```
agent.push_to_hub("m-ric/my_agent")

# agent.from_hub("m-ric/my_agent") to load an agent from Hub
```

Our library is LLM-agnostic: you could switch the example above to any inference provider.

**InferenceClientModel, gateway for all [inference providers](https://huggingface.co/docs/inference-providers/index) supported on HF**

```
from smolagents import InferenceClientModel

model = InferenceClientModel(
    model_id="deepseek-ai/DeepSeek-R1",
    provider="together",
)
```

**LiteLLM to access 100+ LLMs**

```
from smolagents import LiteLLMModel

model = LiteLLMModel(
    model_id="anthropic/claude-4-sonnet-latest",
    temperature=0.2,
    api_key=os.environ["ANTHROPIC_API_KEY"]
)
```

**OpenAI-compatible servers: Together AI**

```
import os
from smolagents import OpenAIModel

model = OpenAIModel(
    model_id="deepseek-ai/DeepSeek-R1",
    api_base="https://api.together.xyz/v1/", # Leave this blank to query OpenAI servers.
    api_key=os.environ["TOGETHER_API_KEY"], # Switch to the API key for the server you're targeting.
)
```

**OpenAI-compatible servers: OpenRouter**

```
import os
from smolagents import OpenAIModel

model = OpenAIModel(
    model_id="openai/gpt-4o",
    api_base="https://openrouter.ai/api/v1", # Leave this blank to query OpenAI servers.
    api_key=os.environ["OPENROUTER_API_KEY"], # Switch to the API key for the server you're targeting.
)
```

**Local `transformers` model**

```
from smolagents import TransformersModel

model = TransformersModel(
    model_id="Qwen/Qwen3-Next-80B-A3B-Thinking",
    max_new_tokens=4096,
    device_map="auto"
)
```

**Azure models**

```
import os
from smolagents import AzureOpenAIModel

model = AzureOpenAIModel(
    model_id = os.environ.get("AZURE_OPENAI_MODEL"),
    azure_endpoint=os.environ.get("AZURE_OPENAI_ENDPOINT"),
    api_key=os.environ.get("AZURE_OPENAI_API_KEY"),
    api_version=os.environ.get("OPENAI_API_VERSION")    
)
```

**Amazon Bedrock models**

```
import os
from smolagents import AmazonBedrockModel

model = AmazonBedrockModel(
    model_id = os.environ.get("AMAZON_BEDROCK_MODEL_ID") 
)
```

## CLI

[https://github.com/huggingface/smolagents#cli](https://github.com/huggingface/smolagents#cli)

You can run agents from CLI using two commands: `smolagent` and `webagent`.

`smolagent` is a generalist command to run a multi-step `CodeAgent` that can be equipped with various tools.

```
# Run with direct prompt and options
smolagent "Plan a trip to Tokyo, Kyoto and Osaka between Mar 28 and Apr 7."  --model-type "InferenceClientModel" --model-id "Qwen/Qwen3-Next-80B-A3B-Thinking" --imports pandas numpy --tools web_search

# Run in interactive mode (launches setup wizard when no prompt provided)
smolagent
```

Interactive mode guides you through:

- Agent type selection (CodeAgent vs ToolCallingAgent)
- Tool selection from available toolbox
- Model configuration (type, ID, API settings)
- Advanced options like additional imports
- Task prompt input

Meanwhile `webagent` is a specific web-browsing agent using [helium](https://github.com/mherrmann/helium) (read more [here](https://github.com/huggingface/smolagents/blob/main/src/smolagents/vision_web_browser.py)).

For instance:

```
webagent "go to xyz.com/men, get to sale section, click the first clothing item you see. Get the product details, and the price, return them. note that I'm shopping from France" --model-type "LiteLLMModel" --model-id "gpt-5"
```

## How do Code agents work?

[https://github.com/huggingface/smolagents#how-do-code-agents-work](https://github.com/huggingface/smolagents#how-do-code-agents-work)

Our [CodeAgent](https://huggingface.co/docs/smolagents/reference/agents#smolagents.CodeAgent) works mostly like classical ReAct agents - the exception being that the LLM engine writes its actions as Python code snippets.

```
flowchart TB
    Task[User Task]
    Memory[agent.memory]
    Generate[Generate from agent.model]
    Execute[Execute Code action - Tool calls are written as functions]
    Answer[Return the argument given to 'final_answer']

    Task -->|Add task to agent.memory| Memory

    subgraph ReAct[ReAct loop]
        Memory -->|Memory as chat messages| Generate
        Generate -->|Parse output to extract code action| Execute
        Execute -->|No call to 'final_answer' tool => Store execution logs in memory and keep running| Memory
    end
    
    Execute -->|Call to 'final_answer' tool| Answer

    %% Styling
    classDef default fill:#d4b702,stroke:#8b7701,color:#ffffff
    classDef io fill:#4a5568,stroke:#2d3748,color:#ffffff
    
    class Task,Answer io
```

Loading

Actions are now Python code snippets. Hence, tool calls will be performed as Python function calls. For instance, here is how the agent can perform web search over several websites in one single action:

```
requests_to_search = ["gulf of mexico america", "greenland denmark", "tariffs"]
for request in requests_to_search:
    print(f"Here are the search results for {request}:", web_search(request))
```

Writing actions as code snippets is demonstrated to work better than the current industry practice of letting the LLM output a dictionary of the tools it wants to call: [uses 30% fewer steps](https://huggingface.co/papers/2402.01030) (thus 30% fewer LLM calls) and [reaches higher performance on difficult benchmarks](https://huggingface.co/papers/2411.01747). Head to [our high-level intro to agents](https://huggingface.co/docs/smolagents/conceptual_guides/intro_agents) to learn more on that.

Since code execution can be a serious security concern (arbitrary code execution!), **you should run agent code in a sandbox**. We support several options:

- [E2B](https://e2b.dev/), [Blaxel](https://blaxel.ai), [Modal](https://modal.com/) — managed cloud sandboxes, simplest to set up
- [Docker](https://www.docker.com/) — self-hosted container isolation
- Pyodide+Deno WebAssembly — lightweight sandbox for browser or edge environments

The built-in `LocalPythonExecutor` is **not a security sandbox**. It applies some restrictions but can be bypassed and must not be used as a security boundary.

Alongside [CodeAgent](https://huggingface.co/docs/smolagents/reference/agents#smolagents.CodeAgent), we also provide the standard [ToolCallingAgent](https://huggingface.co/docs/smolagents/reference/agents#smolagents.ToolCallingAgent) which writes actions as JSON/text blobs. You can pick whichever style best suits your use case.

## How smol is this library?

[https://github.com/huggingface/smolagents#how-smol-is-this-library](https://github.com/huggingface/smolagents#how-smol-is-this-library)

We strived to keep abstractions to a strict minimum: the main code in `agents.py` has <1,000 lines of code. Still, we implement several types of agents: `CodeAgent` writes its actions as Python code snippets, and the more classic `ToolCallingAgent` leverages built-in tool calling methods. We also have multi-agent hierarchies, import from tool collections, remote code execution, vision models...

By the way, why use a framework at all? Well, because a big part of this stuff is non-trivial. For instance, the code agent has to keep a consistent format for code throughout its system prompt, its parser, the execution. So our framework handles this complexity for you. But of course we still encourage you to hack into the source code and use only the bits that you need, to the exclusion of everything else!

## How strong are open models for agentic workflows?

[https://github.com/huggingface/smolagents#how-strong-are-open-models-for-agentic-workflows](https://github.com/huggingface/smolagents#how-strong-are-open-models-for-agentic-workflows)

We've created [CodeAgent](https://huggingface.co/docs/smolagents/reference/agents#smolagents.CodeAgent) instances with some leading models, and compared them on [this benchmark](https://huggingface.co/datasets/m-ric/agents_medium_benchmark_2) that gathers questions from a few different benchmarks to propose a varied blend of challenges.

[Find the benchmarking code here](https://github.com/huggingface/smolagents/blob/main/examples/smolagents_benchmark/run.py) for more detail on the agentic setup used, and see a comparison of using LLMs code agents compared to vanilla (spoilers: code agents works better).

[https://camo.githubusercontent.com/57f631b51ae181248b647a7cff76802504ca9f2eb1dd1a10605bd3431ca1a52c/68747470733a2f2f68756767696e67666163652e636f2f64617461736574732f68756767696e67666163652f646f63756d656e746174696f6e2d696d616765732f7265736f6c76652f6d61696e2f736d6f6c6167656e74732f62656e63686d61726b5f636f64655f6167656e74732e6a706567](https://camo.githubusercontent.com/57f631b51ae181248b647a7cff76802504ca9f2eb1dd1a10605bd3431ca1a52c/68747470733a2f2f68756767696e67666163652e636f2f64617461736574732f68756767696e67666163652f646f63756d656e746174696f6e2d696d616765732f7265736f6c76652f6d61696e2f736d6f6c6167656e74732f62656e63686d61726b5f636f64655f6167656e74732e6a706567)

This comparison shows that open-source models can now take on the best closed models!

## Security

[https://github.com/huggingface/smolagents#security](https://github.com/huggingface/smolagents#security)

Security is a critical consideration when working with code-executing agents. Ensure you are using one of the sandboxed execution options that provide isolation from untrusted code.

**Warning:**`LocalPythonExecutor` provides best-effort mitigations only and is **not a security boundary**. Do not use it to run untrusted code.

For security policies, vulnerability reporting, and more information on secure agent execution, please see our [Security Policy](https://github.com/huggingface/smolagents/blob/main/SECURITY.md).

## Contribute

[https://github.com/huggingface/smolagents#contribute](https://github.com/huggingface/smolagents#contribute)

Everyone is welcome to contribute, get started with our [contribution guide](https://github.com/huggingface/smolagents/blob/main/CONTRIBUTING.md).

## Cite smolagents

[https://github.com/huggingface/smolagents#cite-smolagents](https://github.com/huggingface/smolagents#cite-smolagents)

If you use `smolagents` in your publication, please cite it by using the following BibTeX entry.

```
@Misc{smolagents,
  title =        {`smolagents`: a smol library to build great agentic systems.},
  author =       {Aymeric Roucher and Albert Villanova del Moral and Thomas Wolf and Leandro von Werra and Erik Kaunismäki},
  howpublished = { rl{https://github.com/huggingface/smolagents}},
  year =         {2025}
}
```

## About

         🤗 smolagents: a barebones library for agents that think in code.       

[huggingface.co/docs/smolagents](https://huggingface.co/docs/smolagents)

### Resources

[Readme](https://github.com/huggingface/smolagents#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/huggingface/smolagents#Apache-2.0-1-ov-file)

### Code of conduct

[Code of conduct](https://github.com/huggingface/smolagents#coc-ov-file)

### Contributing

[Contributing](https://github.com/huggingface/smolagents#contributing-ov-file)

### Security policy

[Security policy](https://github.com/huggingface/smolagents#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/huggingface/smolagents/activity)

[Custom properties](https://github.com/huggingface/smolagents/custom-properties)

### Stars

[27.4k
        stars](https://github.com/huggingface/smolagents/stargazers)

### Watchers

[135
        watching](https://github.com/huggingface/smolagents/watchers)

### Forks

[2.6k
        forks](https://github.com/huggingface/smolagents/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fhuggingface%2Fsmolagents&report=huggingface+%28user%29)

## [Releases
