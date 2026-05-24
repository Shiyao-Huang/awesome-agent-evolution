---
repo: mitchellgordon95/dspy
url: https://github.com/mitchellgordon95/dspy
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - mitchellgordon95/dspy: DSPy: The framework for programming—not prompting—foundation models · GitHub

**Source**: https://github.com/mitchellgordon95/dspy

---

[Skip to content](https://github.com/mitchellgordon95/dspy#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[mitchellgordon95](https://github.com/mitchellgordon95)

/
**[dspy](https://github.com/mitchellgordon95/dspy)**

Public

       forked from [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy)

- [Notifications](https://github.com/login?return_to=%2Fmitchellgordon95%2Fdspy)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fmitchellgordon95%2Fdspy)
- 
[Star
          0](https://github.com/login?return_to=%2Fmitchellgordon95%2Fdspy)

[https://github.com/mitchellgordon95/dspy](https://github.com/mitchellgordon95/dspy)

[Branches](https://github.com/mitchellgordon95/dspy/branches)[Tags](https://github.com/mitchellgordon95/dspy/tags)

[https://github.com/mitchellgordon95/dspy/branches](https://github.com/mitchellgordon95/dspy/branches)[https://github.com/mitchellgordon95/dspy/tags](https://github.com/mitchellgordon95/dspy/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History1,496 Commits1,496 Commits |  |  |  |
| .github | .github |  |  |
| cache | cache |  |  |
| docs | docs |  |  |
| dsp | dsp |  |  |
| dspy | dspy |  |  |
| examples | examples |  |  |
| inspect-app | inspect-app |  |  |
| testing | testing |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| intro.ipynb | intro.ipynb |  |  |
| mkdocs.yml | mkdocs.yml |  |  |
| poetry.lock | poetry.lock |  |  |
| pyproject.toml | pyproject.toml |  |  |
| pyserini.ipynb | pyserini.ipynb |  |  |
| requirements.txt | requirements.txt |  |  |
| setup.py | setup.py |  |  |
| skycamp2023.ipynb | skycamp2023.ipynb |  |  |
| skycamp2023_completed.ipynb | skycamp2023_completed.ipynb |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/mitchellgordon95/dspy/blob/main/docs/images/DSPy8.png](https://github.com/mitchellgordon95/dspy/blob/main/docs/images/DSPy8.png)

## DSPy: *Programming*—not prompting—Foundation Models

[https://github.com/mitchellgordon95/dspy#dspy-programmingnot-promptingfoundation-models](https://github.com/mitchellgordon95/dspy#dspy-programmingnot-promptingfoundation-models)

**[Oct'23] [DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines](https://arxiv.org/abs/2310.03714)**
 [Jan'24] [In-Context Learning for Extreme Multi-Label Classification](https://arxiv.org/abs/2401.12178)
 [Dec'23] [DSPy Assertions: Computational Constraints for Self-Refining Language Model Pipelines](https://arxiv.org/abs/2312.13382)
 [Dec'22] [Demonstrate-Search-Predict: Composing Retrieval & Language Models for Knowledge-Intensive NLP](https://arxiv.org/abs/2212.14024.pdf)

**Getting Started:**[https://colab.research.google.com/github/stanfordnlp/dspy/blob/main/intro.ipynb](https://colab.research.google.com/github/stanfordnlp/dspy/blob/main/intro.ipynb)

**Documentation:**[DSPy Docs](https://dspy-docs.vercel.app/)

---

**DSPy is a framework for algorithmically optimizing LM prompts and weights**, especially when LMs are used one or more times within a pipeline. To use LMs to build a complex system *without* DSPy, you generally have to: (1) break the problem down into steps, (2) prompt your LM well until each step works well in isolation, (3) tweak the steps to work well together, (4) generate synthetic examples to tune each step, and (5) use these examples to finetune smaller LMs to cut costs. Currently, this is hard and messy: every time you change your pipeline, your LM, or your data, all prompts (or finetuning steps) may need to change.

To make this more systematic and much more powerful, **DSPy** does two things. First, it separates the flow of your program (`modules`) from the parameters (LM prompts and weights) of each step. Second, **DSPy** introduces new `optimizers`, which are LM-driven algorithms that can tune the prompts and/or the weights of your LM calls, given a `metric` you want to maximize.

**DSPy** can routinely teach powerful models like `GPT-3.5` or `GPT-4` and local models like `T5-base` or `Llama2-13b` to be much more reliable at tasks, i.e. having higher quality and/or avoiding specific failure patterns. **DSPy** optimizers will "compile" the *same* program into *different* instructions, few-shot prompts, and/or weight updates (finetunes) for each LM. This is a new paradigm in which LMs and their prompts fade into the background as optimizable pieces of a larger system that can learn from data. **tldr;** less prompting, higher scores, and a more systematic approach to solving hard tasks with LMs.

### Table of Contents

[https://github.com/mitchellgordon95/dspy#table-of-contents](https://github.com/mitchellgordon95/dspy#table-of-contents)

If you need help thinking about your task, we recently created a [Discord server](https://discord.gg/VzS6RHHK6F) for the community.

1. **[Installation](https://github.com/mitchellgordon95/dspy#1-installation)**
2. **[Tutorials & Documentation](https://github.com/mitchellgordon95/dspy#2-documentation)**
3. **[Framework Syntax](https://github.com/mitchellgordon95/dspy#3-syntax-youre-in-charge-of-the-workflowits-free-form-python-code)**
4. **[Compiling: Two Powerful Concepts](https://github.com/mitchellgordon95/dspy#4-two-powerful-concepts-signatures--teleprompters)**
5. **[Pydantic Types](https://github.com/mitchellgordon95/dspy#5-pydantic-types)**
6. **[FAQ: Is DSPy right for me?](https://github.com/mitchellgordon95/dspy#6-faq-is-dspy-right-for-me)**

### Analogy to Neural Networks

[https://github.com/mitchellgordon95/dspy#analogy-to-neural-networks](https://github.com/mitchellgordon95/dspy#analogy-to-neural-networks)

When we build neural networks, we don't write manual *for-loops* over lists of *hand-tuned* floats. Instead, you might use a framework like [PyTorch](https://pytorch.org/) to compose declarative layers (e.g., `Convolution` or `Dropout`) and then use optimizers (e.g., SGD or Adam) to learn the parameters of the network.

Ditto! **DSPy** gives you the right general-purpose modules (e.g., `ChainOfThought`, `ReAct`, etc.), which replace string-based prompting tricks. To replace prompt hacking and one-off synthetic data generators, **DSPy** also gives you general optimizers (`BootstrapFewShotWithRandomSearch` or [BayesianSignatureOptimizer](https://github.com/stanfordnlp/dspy/blob/main/dspy/teleprompt/signature_opt_bayesian.py)), which are algorithms that update parameters in your program. Whenever you modify your code, your data, your assertions, or your metric, you can *compile* your program again and **DSPy** will create new effective prompts that fit your changes.

### Mini-FAQs

[https://github.com/mitchellgordon95/dspy#mini-faqs](https://github.com/mitchellgordon95/dspy#mini-faqs)

**What do DSPy optimizers tune?** Each optimizer is different, but they all seek to maximize a metric on your program by updating prompts or LM weights. Current DSPy `optimizers` can inspect your data, simulate traces through your program to generate good/bad examples of each step, propose or refine instructions for each step based on past results, finetune the weights of your LM on self-generated examples, or combine several of these to improve quality or cut cost. We'd love to merge new optimizers that explore a richer space: most manual steps you currently go through for prompt engineering, "synthetic data" generation, or self-improvement can probably generalized into a DSPy optimizer that acts on arbitrary LM programs.

**How should I use DSPy for my task?** Using DSPy is an iterative process. You first define your task and the metrics you want to maximize, and prepare a few example inputs — typically without labels (or only with labels for the final outputs, if your metric requires them). Then, you build your pipeline by selecting built-in layers (`modules`) to use, giving each layer a `signature` (input/output spec), and then calling your modules freely in your Python code. Lastly, you use a DSPy `optimizer` to compile your code into high-quality instructions, automatic few-shot examples, or updated LM weights for your LM.

**What if I have a better idea for prompting or synthetic data generation?** Perfect. We encourage you to think if it's best expressed as a module or an optimizer, and we'd love to merge it in DSPy so everyone can use it. DSPy is not a complete project; it's an ongoing effort to create structure (modules and optimizers) in place of hacky prompt and pipeline engineering tricks.

**What does DSPy stand for?** It's a long story but the backronym now is **D**eclarative **S**elf-improving Language **P**rograms, p**y**thonically.

## 1) Installation

[https://github.com/mitchellgordon95/dspy#1-installation](https://github.com/mitchellgordon95/dspy#1-installation)

All you need is:

```
pip install dspy-ai
```

Or open our intro notebook in Google Colab: [https://colab.research.google.com/github/stanfordnlp/dspy/blob/main/intro.ipynb](https://colab.research.google.com/github/stanfordnlp/dspy/blob/main/intro.ipynb)

By default, DSPy installs the latest `openai` from pip. However, if you install old version before OpenAI changed their API `openai~=0.28.1`, the library will use that just fine. Both are supported.

For the optional (alphabetically sorted) [Chromadb](https://github.com/chroma-core/chroma), [Qdrant](https://github.com/qdrant/qdrant), [Marqo](https://github.com/marqo-ai/marqo), Pinecone, or [Weaviate](https://github.com/weaviate/weaviate) retrieval integration(s), include the extra(s) below:

```
pip install dspy-ai[chromadb]  # or [qdrant] or [marqo] or [mongodb] or [pinecone] or [weaviate]
```

## 2) Documentation

[https://github.com/mitchellgordon95/dspy#2-documentation](https://github.com/mitchellgordon95/dspy#2-documentation)

The DSPy documentation is divided into **tutorials** (step-by-step illustration of solving a task in DSPy), **guides** (how to use specific parts of the API), and **examples** (self-contained programs that illustrate usage).

### A) Tutorials

[https://github.com/mitchellgordon95/dspy#a-tutorials](https://github.com/mitchellgordon95/dspy#a-tutorials)

| Level | Tutorial | Run in Colab | Description |
|---|---|---|---|
| Beginner | Getting Started |  | Introduces the basic building blocks in DSPy. Tackles the task of complex question answering with HotPotQA. |
| Beginner | Minimal Working Example | N/A | Builds and optimizes a very simple chain-of-thought program in DSPy for math question answering. Very short. |
| Beginner | Compiling for Tricky Tasks | N/A | Teaches LMs to reason about logical statements and negation. Uses GPT-4 to bootstrap few-shot CoT demonstations for GPT-3.5. Establishes a state-of-the-art result on ScoNe. Contributed by Chris Potts. |
| Beginner | Local Models & Custom Datasets |  | Illustrates two different things together: how to use local models (Llama-2-13B in particular) and how to use your own data examples for training and development. |
| Intermediate | The DSPy Paper | N/A | Sections 3, 5, 6, and 7 of the DSPy paper can be consumed as a tutorial. They include explained code snippets, results, and discussions of the abstractions and API. |
| Intermediate | DSPy Assertions |  | Introduces example of applying DSPy Assertions while generating long-form responses to questions with citations. Presents comparative evaluation in both zero-shot and compiled settings. |
| Intermediate | Finetuning for Complex Programs |  | Teaches a local T5 model (770M) to do exceptionally well on HotPotQA. Uses only 200 labeled answers. Uses no hand-written prompts, no calls to OpenAI, and no labels for retrieval or reasoning. |
| Advanced | Information Extraction |  | Tackles extracting information from long articles (biomedical research papers). Combines in-context learning and retrieval to set SOTA on BioDEX. Contributed by Karel D’Oosterlinck. |

**Other resources people find useful**:

- [DSPy talk at ScaleByTheBay Nov 2023](https://www.youtube.com/watch?v=Dt3H2ninoeY).
- [DSPy webinar with MLOps Learners](https://www.youtube.com/watch?v=im7bCLW2aM4), a bit longer with Q&A.
- Hands-on Overviews of DSPy by the community: [DSPy Explained! by Connor Shorten](https://www.youtube.com/watch?v=41EfOY0Ldkc), [DSPy explained by code_your_own_ai](https://www.youtube.com/watch?v=ycfnKPxBMck)
- Interviews: [Weaviate Podcast in-person](https://www.youtube.com/watch?v=CDung1LnLbY), and you can find 6-7 other remote podcasts on YouTube from a few different perspectives/audiences.
- **Tracing in DSPy** with Arize Phoenix: [Tutorial for tracing your prompts and the steps of your DSPy programs](https://colab.research.google.com/github/Arize-ai/phoenix/blob/main/tutorials/tracing/dspy_tracing_tutorial.ipynb)

### B) Guides

[https://github.com/mitchellgordon95/dspy#b-guides](https://github.com/mitchellgordon95/dspy#b-guides)

If you're new to DSPy, it's probably best to go in sequential order. You will probably refer to these guides frequently after that, e.g. to copy/paste snippets that you can edit for your own DSPy programs.

1. 

**[Language Models](https://dspy-docs.vercel.app/docs/building-blocks/language_models)**

2. 

**[Signatures](https://dspy-docs.vercel.app/docs/building-blocks/signatures)**

3. 

**[Modules](https://dspy-docs.vercel.app/docs/building-blocks/modules)**

4. 

**[Data](https://dspy-docs.vercel.app/docs/building-blocks/data)**

5. 

**[Metrics](https://dspy-docs.vercel.app/docs/building-blocks/metrics)**

6. 

**[Optimizers (formerly Teleprompters)](https://dspy-docs.vercel.app/docs/building-blocks/optimizers)**

7. 

**[DSPy Assertions](https://dspy-docs.vercel.app/docs/building-blocks/assertions)**

### C) Examples

[https://github.com/mitchellgordon95/dspy#c-examples](https://github.com/mitchellgordon95/dspy#c-examples)

The DSPy team believes complexity has to be justified. We take this seriously: we never release a complex tutorial (above) or example (below) *unless we can demonstrate empirically that this complexity has generally led to improved quality or cost.* This kind of rule is rarely enforced by other frameworks or docs, but you can count on it in DSPy examples.

There's a bunch of examples in the `examples/` directory and in the top-level directory. We welcome contributions!

You can find other examples tweeted by [@lateinteraction](https://twitter.com/lateinteraction) on Twitter/X.

**Some other examples (not exhaustive, feel free to add more via PR):**

- Applying DSPy Assertions 
  - [Long-form Answer Generation with Citations, by Arnav Singhvi](https://colab.research.google.com/github/stanfordnlp/dspy/blob/main/examples/longformqa/longformqa_assertions.ipynb)
  - [Generating Answer Choices for Quiz Questions, by Arnav Singhvi](https://colab.research.google.com/github/stanfordnlp/dspy/blob/main/examples/quiz/quiz_assertions.ipynb)
  - [Generating Tweets for QA, by Arnav Singhvi](https://colab.research.google.com/github/stanfordnlp/dspy/blob/main/examples/tweets/tweets_assertions.ipynb)

- [Compiling LCEL runnables from LangChain in DSPy](https://github.com/stanfordnlp/dspy/blob/main/examples/tweets/compiling_langchain.ipynb)
- [AI feedback, or writing LM-based metrics in DSPy](https://github.com/stanfordnlp/dspy/blob/main/examples/tweets/tweet_metric.py)
- [DSPy Optimizers Benchmark on a bunch of different tasks, by Michael Ryan](https://github.com/stanfordnlp/dspy/tree/main/testing/tasks)
- [Indian Languages NLI with gains due to compiling by Saiful Haq](https://github.com/saifulhaq95/DSPy-Indic/blob/main/indicxlni.ipynb)
- [Sophisticated Extreme Multi-Class Classification, IReRa, by Karel D’Oosterlinck](https://github.com/KarelDO/xmc.dspy)
- [DSPy on BIG-Bench Hard Example, by Chris Levy](https://drchrislevy.github.io/posts/dspy/dspy.html)
- [Using Ollama with DSPy for Mistral (quantized) by @jrknox1977](https://gist.github.com/jrknox1977/78c17e492b5a75ee5bbaf9673aee4641)
- [Using DSPy, "The Unreasonable Effectiveness of Eccentric Automatic Prompts" (paper) by VMware's Rick Battle & Teja Gollapudi, and interview at TheRegister](https://www.theregister.com/2024/02/22/prompt_engineering_ai_models/)
- Typed DSPy (contributed by [@normal-computing](https://github.com/normal-computing)) 
  - [Using DSPy to train Gpt 3.5 on HumanEval by Thomas Ahle](https://github.com/stanfordnlp/dspy/blob/main/examples/functional/functional.ipynb)
  - [Building a chess playing agent using DSPy by Franck SN](https://medium.com/thoughts-on-machine-learning/building-a-chess-playing-agent-using-dspy-9b87c868f71e)

There are also recent cool examples at [Weaviate's DSPy cookbook](https://github.com/weaviate/recipes/tree/main/integrations/dspy) by Connor Shorten. [See tutorial on YouTube](https://www.youtube.com/watch?v=CEuUG4Umfxs).

## 3) Syntax: You're in charge of the workflow—it's free-form Python code!

[https://github.com/mitchellgordon95/dspy#3-syntax-youre-in-charge-of-the-workflowits-free-form-python-code](https://github.com/mitchellgordon95/dspy#3-syntax-youre-in-charge-of-the-workflowits-free-form-python-code)

**DSPy** hides tedious prompt engineering, but it cleanly exposes the important decisions you need to make: **[1]** what's your system design going to look like? **[2]** what are the important constraints on the behavior of your program?

You express your system as free-form Pythonic modules. **DSPy** will tune the quality of your program *in whatever way* you use foundation models: you can code with loops, `if` statements, or exceptions, and use **DSPy** modules within any Python control flow you think works for your task.

Suppose you want to build a simple retrieval-augmented generation (RAG) system for question answering. You can define your own `RAG` program like this:

```
class RAG(dspy.Module):
    def __init__(self, num_passages=3):
        super().__init__()
        self.retrieve = dspy.Retrieve(k=num_passages)
        self.generate_answer = dspy.ChainOfThought("context, question -> answer")
    
    def forward(self, question):
        context = self.retrieve(question).passages
        answer = self.generate_answer(context=context, question=question)
        return answer
```

A program has two key methods, which you can edit to fit your needs.

**Your `__init__` method** declares the modules you will use. Here, `RAG` will use the built-in `Retrieve` for retrieval and `ChainOfThought` for generating answers. **DSPy** offers general-purpose modules that take the shape of *your own* sub-tasks — and not pre-built functions for specific applications.

Modules that use the LM, like `ChainOfThought`, require a *signature*. That is a declarative spec that tells the module what it's expected to do. In this example, we use the short-hand signature notation `context, question -> answer` to tell `ChainOfThought` it will be given some `context` and a `question` and must produce an `answer`. We will discuss more advanced **[signatures](https://github.com/mitchellgordon95/dspy#3a-declaring-the-inputoutput-behavior-of-lms-with-dspysignature)** below.

**Your `forward` method** expresses any computation you want to do with your modules. In this case, we use the module `self.retrieve` to search for some `context` and then use the module `self.generate_answer`, which uses the `context` and `question` to generate the `answer`!

You can now either use this `RAG` program in **zero-shot mode**. Or **compile** it to obtain higher quality. Zero-shot usage is simple. Just define an instance of your program and then call it:

```
rag = RAG()  # zero-shot, uncompiled version of RAG
rag("what is the capital of France?").answer  # -> "Paris"
```

The next section will discuss how to compile our simple `RAG` program. When we compile it, the **DSPy compiler** will annotate *demonstrations* of its steps: (1) retrieval, (2) using context, and (3) using *chain-of-thought* to answer questions. From these demonstrations, the **DSPy compiler** will make sure it produces an effective few-shot prompt that works well with your LM, retrieval model, and data. If you're working with small models, it'll finetune your model (instead of prompting) to do this task.

If you later decide you need another step in your pipeline, just add another module and compile again. Maybe add a module that takes the chat history into account during search?

## 4) Two Powerful Concepts: Signatures & Teleprompters

[https://github.com/mitchellgordon95/dspy#4-two-powerful-concepts-signatures--teleprompters](https://github.com/mitchellgordon95/dspy#4-two-powerful-concepts-signatures--teleprompters)

**Note:** We will soon rename teleprompters to optimizers. This will not affect their functionality, but will simplify the terms used.

To make it possible to compile any program you write, **DSPy** introduces two simple concepts: Signatures and Teleprompters.

#### 4.a) Declaring the input/output behavior of LMs with `dspy.Signature`

[https://github.com/mitchellgordon95/dspy#4a-declaring-the-inputoutput-behavior-of-lms-with-dspysignature](https://github.com/mitchellgordon95/dspy#4a-declaring-the-inputoutput-behavior-of-lms-with-dspysignature)

When we assign tasks to LMs in **DSPy**, we specify the behavior we need as a **Signature**. A signature is a declarative specification of input/output behavior of a **DSPy module**.

Instead of investing effort into *how* to get your LM to do a sub-task, signatures enable you to inform **DSPy***what* the sub-task is. Later, the **DSPy compiler** will figure out how to build a complex prompt for your large LM (or finetune your small LM) specifically for your signature, on your data, and within your pipeline.
## gBrain Temporal Metadata

- content_timestamp: 2023
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2023-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

