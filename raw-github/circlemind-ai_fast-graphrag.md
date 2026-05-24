---
repo: circlemind-ai/fast-graphrag
url: https://github.com/circlemind-ai/fast-graphrag
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - circlemind-ai/fast-graphrag: RAG that intelligently adapts to your use case, data, and queries · GitHub

**Source**: https://github.com/circlemind-ai/fast-graphrag

---

[Skip to content](https://github.com/circlemind-ai/fast-graphrag#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[circlemind-ai](https://github.com/circlemind-ai)

/
**[fast-graphrag](https://github.com/circlemind-ai/fast-graphrag)**

Public

- [Notifications](https://github.com/login?return_to=%2Fcirclemind-ai%2Ffast-graphrag)You must be signed in to change notification settings
- [Fork
    245](https://github.com/login?return_to=%2Fcirclemind-ai%2Ffast-graphrag)
- 
[Star
          3.8k](https://github.com/login?return_to=%2Fcirclemind-ai%2Ffast-graphrag)

[https://github.com/circlemind-ai/fast-graphrag](https://github.com/circlemind-ai/fast-graphrag)

[Branches](https://github.com/circlemind-ai/fast-graphrag/branches)[Tags](https://github.com/circlemind-ai/fast-graphrag/tags)

[https://github.com/circlemind-ai/fast-graphrag/branches](https://github.com/circlemind-ai/fast-graphrag/branches)[https://github.com/circlemind-ai/fast-graphrag/tags](https://github.com/circlemind-ai/fast-graphrag/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History249 Commits249 Commits |  |  |  |
| .github | .github |  |  |
| .vscode | .vscode |  |  |
| benchmarks | benchmarks |  |  |
| examples | examples |  |  |
| fast_graphrag | fast_graphrag |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| banner.png | banner.png |  |  |
| demo.gif | demo.gif |  |  |
| mock_data.txt | mock_data.txt |  |  |
| poetry.lock | poetry.lock |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# [https://github.com/circlemind-ai/fast-graphrag/blob/main/banner.png](https://github.com/circlemind-ai/fast-graphrag/blob/main/banner.png)

[https://github.com/circlemind-ai/fast-graphrag#--](https://github.com/circlemind-ai/fast-graphrag#--)

#### [https://github.com/circlemind-ai/fast-graphrag/blob/main/LICENSE](https://github.com/circlemind-ai/fast-graphrag/blob/main/LICENSE)[https://github.com/circlemind-ai/fast-graphrag/blob/main/CONTRIBUTING.md](https://github.com/circlemind-ai/fast-graphrag/blob/main/CONTRIBUTING.md)[https://circlemind.co](https://circlemind.co)[https://camo.githubusercontent.com/83ecb16ae1b1034e947252ecef00ae39afce142261f7e85d977b0645ab376003/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d3e3d332e31302e312d626c7565](https://camo.githubusercontent.com/83ecb16ae1b1034e947252ecef00ae39afce142261f7e85d977b0645ab376003/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d3e3d332e31302e312d626c7565)

[https://github.com/circlemind-ai/fast-graphrag#--------------------------](https://github.com/circlemind-ai/fast-graphrag#--------------------------)

**Streamlined and promptable Fast GraphRAG framework designed for interpretable, high-precision, agent-driven retrieval workflows. **

#### [Install](https://github.com/circlemind-ai/fast-graphrag#install) |   [Quickstart](https://github.com/circlemind-ai/fast-graphrag#quickstart) |   [Community](https://discord.gg/DvY2B8u4sA) |   [Report Bug](https://github.com/circlemind-ai/fast-graphrag/issues/new?assignees=&labels=&projects=&template=%F0%9F%90%9E-bug-report.md&title=) |   [Request Feature](https://github.com/circlemind-ai/fast-graphrag/issues/new?assignees=&labels=&projects=&template=%F0%9F%92%A1-feature-request.md&title=)

[https://github.com/circlemind-ai/fast-graphrag#--install---quickstart---community---report-bug---request-feature](https://github.com/circlemind-ai/fast-graphrag#--install---quickstart---community---report-bug---request-feature)

Note

Using *The Wizard of Oz*, `fast-graphrag` costs $0.08 vs. `graphrag` $0.48 — **a 6x costs saving** that further improves with data size and number of insertions.

## Features

[https://github.com/circlemind-ai/fast-graphrag#features](https://github.com/circlemind-ai/fast-graphrag#features)

- **Interpretable and Debuggable Knowledge:** Graphs offer a human-navigable view of knowledge that can be queried, visualized, and updated.
- **Fast, Low-cost, and Efficient:** Designed to run at scale without heavy resource or cost requirements.
- **Dynamic Data:** Automatically generate and refine graphs to best fit your domain and ontology needs.
- **Incremental Updates:** Supports real-time updates as your data evolves.
- **Intelligent Exploration:** Leverages PageRank-based graph exploration for enhanced accuracy and dependability.
- **Asynchronous & Typed:** Fully asynchronous, with complete type support for robust and predictable workflows.

Fast GraphRAG is built to fit seamlessly into your retrieval pipeline, giving you the power of advanced RAG, without the overhead of building and designing agentic workflows.

## Install

[https://github.com/circlemind-ai/fast-graphrag#install](https://github.com/circlemind-ai/fast-graphrag#install)

**Install from source (recommended for best performance)**

```
# clone this repo first
cd fast_graphrag
poetry install
```

**Install from PyPi (recommended for stability)**

```
pip install fast-graphrag
```

## Quickstart

[https://github.com/circlemind-ai/fast-graphrag#quickstart](https://github.com/circlemind-ai/fast-graphrag#quickstart)

Set the OpenAI API key in the environment:

```
export OPENAI_API_KEY="sk-..."
```

Download a copy of *A Christmas Carol* by Charles Dickens:

```
curl https://raw.githubusercontent.com/circlemind-ai/fast-graphrag/refs/heads/main/mock_data.txt > ./book.txt
```

Optional: Set the limit for concurrent requests to the LLM (i.e., to control the number of tasks processed simultaneously by the LLM, this is helpful when running local models)

```
export CONCURRENT_TASK_LIMIT=8
```

Use the Python snippet below:

```
from fast_graphrag import GraphRAG

DOMAIN = "Analyze this story and identify the characters. Focus on how they interact with each other, the locations they explore, and their relationships."

EXAMPLE_QUERIES = [
    "What is the significance of Christmas Eve in A Christmas Carol?",
    "How does the setting of Victorian London contribute to the story's themes?",
    "Describe the chain of events that leads to Scrooge's transformation.",
    "How does Dickens use the different spirits (Past, Present, and Future) to guide Scrooge?",
    "Why does Dickens choose to divide the story into \"staves\" rather than chapters?"
]

ENTITY_TYPES = ["Character", "Animal", "Place", "Object", "Activity", "Event"]

grag = GraphRAG(
    working_dir="./book_example",
    domain=DOMAIN,
    example_queries="
".join(EXAMPLE_QUERIES),
    entity_types=ENTITY_TYPES
)

with open("./book.txt") as f:
    grag.insert(f.read())

print(grag.query("Who is Scrooge?").response)
```

The next time you initialize fast-graphrag from the same working directory, it will retain all the knowledge automatically.

## Examples

[https://github.com/circlemind-ai/fast-graphrag#examples](https://github.com/circlemind-ai/fast-graphrag#examples)

Please refer to the `examples` folder for a list of tutorials on common use cases of the library:

- `custom_llm.py`: a brief example on how to configure fast-graphrag to run with different OpenAI API compatible language models and embedders;
- `checkpointing.ipynb`: a tutorial on how to use checkpoints to avoid irreversible data corruption;
- `query_parameters.ipynb`: a tutorial on how to use the different query parameters. In particular, it shows how to include references to the used information in the provided answer (using the `with_references=True` parameter).

## Contributing

[https://github.com/circlemind-ai/fast-graphrag#contributing](https://github.com/circlemind-ai/fast-graphrag#contributing)

Whether it's big or small, we love contributions. Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated. Check out our [guide](https://github.com/circlemind-ai/fast-graphrag/blob/main/CONTRIBUTING.md) to see how to get started.

Not sure where to get started? You can join our [Discord](https://discord.gg/DvY2B8u4sA) and ask us any questions there.

## Philosophy

[https://github.com/circlemind-ai/fast-graphrag#philosophy](https://github.com/circlemind-ai/fast-graphrag#philosophy)

Our mission is to increase the number of successful GenAI applications in the world. To do that, we build memory and data tools that enable LLM apps to leverage highly specialized retrieval pipelines without the complexity of setting up and maintaining agentic workflows.

Fast GraphRAG currently exploit the personalized pagerank algorithm to explore the graph and find the most relevant pieces of information to answer your query. For an overview on why this works, you can check out the HippoRAG paper [here](https://arxiv.org/abs/2405.14831).

## Open-source or Managed Service

[https://github.com/circlemind-ai/fast-graphrag#open-source-or-managed-service](https://github.com/circlemind-ai/fast-graphrag#open-source-or-managed-service)

This repo is under the MIT License. See [LICENSE.txt](https://github.com/circlemind-ai/fast-graphrag/blob/main/LICENSE) for more information.

The fastest and most reliable way to get started with Fast GraphRAG is using our managed service. Your first 100 requests are free every month, after which you pay based on usage.

# [https://github.com/circlemind-ai/fast-graphrag/blob/main/demo.gif](https://github.com/circlemind-ai/fast-graphrag/blob/main/demo.gif)

[https://github.com/circlemind-ai/fast-graphrag#---1](https://github.com/circlemind-ai/fast-graphrag#---1)

To learn more about our managed service, [book a demo](https://circlemind.co/demo) or see our [docs](https://docs.circlemind.co/quickstart).

## About

         RAG that intelligently adapts to your use case, data, and queries       

### Resources

[Readme](https://github.com/circlemind-ai/fast-graphrag#readme-ov-file)

### License

[MIT license](https://github.com/circlemind-ai/fast-graphrag#MIT-1-ov-file)

### Code of conduct

[Code of conduct](https://github.com/circlemind-ai/fast-graphrag#coc-ov-file)

### Contributing

[Contributing](https://github.com/circlemind-ai/fast-graphrag#contributing-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/circlemind-ai/fast-graphrag/activity)

[Custom properties](https://github.com/circlemind-ai/fast-graphrag/custom-properties)

### Stars

[3.8k
        stars](https://github.com/circlemind-ai/fast-graphrag/stargazers)

### Watchers

[19
        watching](https://github.com/circlemind-ai/fast-graphrag/watchers)

### Forks

[245
        forks](https://github.com/circlemind-ai/fast-graphrag/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fcirclemind-ai%2Ffast-graphrag&report=circlemind-ai+%28user%29)

## [Releases](https://github.com/circlemind-ai/fast-graphrag/releases)

No releases published

## [Packages
      0](https://github.com/orgs/circlemind-ai/packages?repo_name=fast-graphrag)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/circlemind-ai/fast-graphrag/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          99.0%](https://github.com/circlemind-ai/fast-graphrag/search?l=python)
- 

Other

1.0%

     You can’t perform that action at this time.
