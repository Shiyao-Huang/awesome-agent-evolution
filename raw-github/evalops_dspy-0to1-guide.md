---
repo: evalops/dspy-0to1-guide
url: https://github.com/evalops/dspy-0to1-guide
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - evalops/dspy-0to1-guide: A comprehensive 0-to-1 guide for building self-improving LLM applications with DSPy framework · GitHub

**Source**: https://github.com/evalops/dspy-0to1-guide

---

[Skip to content](https://github.com/evalops/dspy-0to1-guide#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[evalops](https://github.com/evalops)

/
**[dspy-0to1-guide](https://github.com/evalops/dspy-0to1-guide)**

Public

- [Notifications](https://github.com/login?return_to=%2Fevalops%2Fdspy-0to1-guide)You must be signed in to change notification settings
- [Fork
    15](https://github.com/login?return_to=%2Fevalops%2Fdspy-0to1-guide)
- 
[Star
          215](https://github.com/login?return_to=%2Fevalops%2Fdspy-0to1-guide)

[https://github.com/evalops/dspy-0to1-guide](https://github.com/evalops/dspy-0to1-guide)

[Branches](https://github.com/evalops/dspy-0to1-guide/branches)[Tags](https://github.com/evalops/dspy-0to1-guide/tags)

[https://github.com/evalops/dspy-0to1-guide/branches](https://github.com/evalops/dspy-0to1-guide/branches)[https://github.com/evalops/dspy-0to1-guide/tags](https://github.com/evalops/dspy-0to1-guide/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History11 Commits11 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| datasets/sample_data | datasets/sample_data |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| scripts | scripts |  |  |
| src | src |  |  |
| tests | tests |  |  |
| .env.example | .env.example |  |  |
| .flake8 | .flake8 |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# DSPy 0‑to‑1 Guide: Building Self‑Improving LLM Applications from Scratch

[https://github.com/evalops/dspy-0to1-guide#dspy-0to1-guide-building-selfimproving-llm-applications-from-scratch](https://github.com/evalops/dspy-0to1-guide#dspy-0to1-guide-building-selfimproving-llm-applications-from-scratch)

## Table of contents

[https://github.com/evalops/dspy-0to1-guide#table-of-contents](https://github.com/evalops/dspy-0to1-guide#table-of-contents)

1. [Why DSPy? Motivation & Problem Statement](https://github.com/evalops/dspy-0to1-guide#why-dspy-motivation--problem-statement)
2. [Core Concepts: Signatures, Modules & Optimizers](https://github.com/evalops/dspy-0to1-guide#core-concepts-signatures-modules--optimizers)
3. [Installation & Hello World](https://github.com/evalops/dspy-0to1-guide#installation--hello-world)
4. [Composing Pipelines: Retrieval‑Augmented Generation & Summarization](https://github.com/evalops/dspy-0to1-guide#composing-pipelines-retrieval-augmented-generation--summarization)
5. [Evaluation & Metrics](https://github.com/evalops/dspy-0to1-guide#evaluation--metrics)
6. [Optimization: Self‑Improving Pipelines](https://github.com/evalops/dspy-0to1-guide#optimization-self-improving-pipelines)
7. [Agents & Tool Use](https://github.com/evalops/dspy-0to1-guide#agents--tool-use)
8. [Advanced Topics](https://github.com/evalops/dspy-0to1-guide#advanced-topics)
9. [Best Practices & Pitfalls](https://github.com/evalops/dspy-0to1-guide#best-practices--pitfalls)
10. [Additional Resources & Next Steps](https://github.com/evalops/dspy-0to1-guide#additional-resources--next-steps)

## Why DSPy? Motivation & Problem Statement

[https://github.com/evalops/dspy-0to1-guide#why-dspy-motivation--problem-statement](https://github.com/evalops/dspy-0to1-guide#why-dspy-motivation--problem-statement)

### The pain of prompt engineering

[https://github.com/evalops/dspy-0to1-guide#the-pain-of-prompt-engineering](https://github.com/evalops/dspy-0to1-guide#the-pain-of-prompt-engineering)

Developers building applications with large language models (LLMs) have traditionally relied on **hand‑crafted prompts** and chain‑of‑thought instructions. This approach is brittle and time‑consuming: small changes in wording can cause wildly different outputs, prompt logic is embedded in code and hard to reuse, and improving performance typically relies on manual trial‑and‑error. Prompt templates also tie the implementation to a specific model; when switching models you often need to rewrite prompts or adjust hyper‑parameters.

### DSPy's solution

[https://github.com/evalops/dspy-0to1-guide#dspys-solution](https://github.com/evalops/dspy-0to1-guide#dspys-solution)

DSPy—short for *Declarative Self‑improving Python*—was developed at Stanford University to address these pain points. It allows developers to **program** their applications rather than engineer prompts. You declare what inputs and outputs your system should handle, write modular Python code, and let DSPy automatically compile prompt templates and optimize them. Key advantages include:

- **Declarative programming:** you specify what your system should accomplish (input/output signatures) rather than how to prompt the model. This decouples high‑level logic from low‑level prompt design.
- **Automatic optimization:** DSPy uses optimizers to refine prompts and few‑shot examples based on feedback and metrics, freeing you from manual prompt tweaking.
- **Production resilience:** built‑in patterns for caching, output validation and monitoring make pipelines less brittle.

DSPy has quickly gained traction; the project (open‑sourced in late 2023) has thousands of stars, hundreds of contributors and is rapidly moving from prototype to production‑ready framework.

## Core Concepts: Signatures, Modules & Optimizers

[https://github.com/evalops/dspy-0to1-guide#core-concepts-signatures-modules--optimizers](https://github.com/evalops/dspy-0to1-guide#core-concepts-signatures-modules--optimizers)

DSPy's design revolves around three core abstractions: signatures, modules and optimizers. These concepts let you write composable code that DSPy compiles into robust LLM interactions.

### Signatures – declarative task specification

[https://github.com/evalops/dspy-0to1-guide#signatures--declarative-task-specification](https://github.com/evalops/dspy-0to1-guide#signatures--declarative-task-specification)

A **signature** defines the input/output behaviour of a task without specifying how the language model should accomplish it. It is analogous to a type declaration. For example, you can define a question‑answering task:

```
import dspy

class QA(dspy.Signature):
    """Question answering task."""
    context: str = dspy.InputField(desc="Background information")
    question: str = dspy.InputField()
    answer: str = dspy.OutputField(desc="Accurate answer")
```

This signature acts as a contract: any module implementing it will accept context and question and return an answer. Using signatures instead of free‑text prompts provides type safety, readability and reusability.

### Modules – composable building blocks

[https://github.com/evalops/dspy-0to1-guide#modules--composable-building-blocks](https://github.com/evalops/dspy-0to1-guide#modules--composable-building-blocks)

A **module** encapsulates a particular prompting strategy or reasoning pattern. DSPy provides modules like Predict (basic prompting), ChainOfThought (step‑by‑step reasoning), ReAct (reasoning and acting via tools) and ProgramOfThought (code generation). You can also write custom modules by subclassing dspy.Module. For instance, a simple retrieval‑augmented QA pipeline may look like this:

```
import dspy

dspy.configure(lm=dspy.LM('openai/gpt-4o-mini'))

class RAG(dspy.Module):
    def __init__(self):
        super().__init__()
        self.retrieve = dspy.Retrieve(k=3)  # retrieval step
        self.generate = dspy.ChainOfThought("question, context -> answer")

    def forward(self, question):
        context = self.retrieve(question)
        return self.generate(question=question, context=context)
```

Modules can be composed like neural‑network layers to build complex pipelines. You can swap modules (e.g., replace ChainOfThought with ProgramOfThought) without changing the signature.

### Optimizers – self‑improving pipelines

[https://github.com/evalops/dspy-0to1-guide#optimizers--selfimproving-pipelines](https://github.com/evalops/dspy-0to1-guide#optimizers--selfimproving-pipelines)

An **optimizer** iteratively improves the prompts or parameters of a module using example data and a metric. DSPy includes optimizers such as BootstrapFewShot and BetterTogether. During optimization, DSPy generates variations of prompts, tests them on your examples, and retains the best ones. This yields higher accuracy and consistency over time without manual tuning.

## Installation & Hello World

[https://github.com/evalops/dspy-0to1-guide#installation--hello-world](https://github.com/evalops/dspy-0to1-guide#installation--hello-world)

### Environment setup

[https://github.com/evalops/dspy-0to1-guide#environment-setup](https://github.com/evalops/dspy-0to1-guide#environment-setup)

1. **Install DSPy:**

```
pip install dspy-ai
```

1. (Optional) **Local LLMs:** If you prefer running models locally for privacy/cost reasons, install [Ollama](https://ollama.ai) and pull a model:

```
brew install ollama  # MacOS example
ollama pull llama3
ollama serve
```

Then configure DSPy with `dspy.LM('ollama_chat/llama3')` instead of an OpenAI model.

### A minimal "Hello World" program

[https://github.com/evalops/dspy-0to1-guide#a-minimal-hello-world-program](https://github.com/evalops/dspy-0to1-guide#a-minimal-hello-world-program)

Below is a first DSPy program that answers a math question. It defines a custom module using the ChainOfThought pattern, which instructs the model to reason step‑by‑step before producing the final answer.

```
import dspy

# Configure the language model (OpenAI's gpt‑4o‑mini for this example)
dspy.configure(lm=dspy.LM('openai/gpt-4o-mini'))

class MathQA(dspy.Module):
    def __init__(self):
        super().__init__()
        # Define the module using Chain‑of‑Thought reasoning
        self.solve = dspy.ChainOfThought("question -> answer: float")

    def forward(self, question: str):
        return self.solve(question=question)

# Instantiate and invoke the module
qa = MathQA()
result = qa("What is 3 * 7 + 2?")
print(result)
```

Running this code will print a JSON‑like object containing the predicted answer and the intermediate reasoning produced by the model. The key takeaways are:

- The signature ("question -> answer: float") separates the task definition from the prompt.
- You can use the same module with any compatible language model by changing the configure call.

## Composing Pipelines: Retrieval‑Augmented Generation & Summarization

[https://github.com/evalops/dspy-0to1-guide#composing-pipelines-retrievalaugmented-generation--summarization](https://github.com/evalops/dspy-0to1-guide#composing-pipelines-retrievalaugmented-generation--summarization)

DSPy shines when you compose multiple modules into richer pipelines. A typical example is Retrieval‑Augmented Generation (RAG):

```
import dspy

# Configure your model (e.g., local LLM or cloud API)
dspy.configure(lm=dspy.LM('openai/gpt-4o-mini'))

# Define a function to call an external retrieval service
# Here we use DSPy's built‑in ColBERTv2 retriever; you could also use your own search API
def search_wikipedia(query: str) -> list[str]:
    results = dspy.ColBERTv2(url='http://20.102.90.50:2017/wiki17_abstracts')(query, k=3)
    return [x['text'] for x in results]

class RAGPipeline(dspy.Module):
    def __init__(self):
        super().__init__()
        self.retrieve = dspy.Retrieve(k=3)  # retrieval via ColBERT
        self.generate = dspy.ChainOfThought("question, context -> answer")

    def forward(self, question: str):
        # Step 1: fetch relevant context
        context = self.retrieve(question)
        # Step 2: ask the model to answer using the context
        return self.generate(question=question, context=context)

# Usage
rag = RAGPipeline()
question = "Who invented the telephone?"
answer = rag(question)
print(answer)
```

In this example the retrieval module fetches context, then the ChainOfThought module reasons over the question and context to generate an answer. Such patterns enable robust question‑answering systems.

### Summarization

[https://github.com/evalops/dspy-0to1-guide#summarization](https://github.com/evalops/dspy-0to1-guide#summarization)

You can build a summarizer by composing modules similarly:

```
import dspy

# Configure the model
dspy.configure(lm=dspy.LM('openai/gpt-4o-mini'))

class Summarizer(dspy.Module):
    def __init__(self):
        super().__init__()
        self.summarize = dspy.ChainOfThought("document -> summary")

    def forward(self, document: str):
        return self.summarize(document=document)

# Example
doc = "DSPy is a framework for programming language models..."
summary = Summarizer()(doc)
print(summary)
```

This pattern can be extended to translation, data extraction and other NLP tasks; you just change the signatures and modules accordingly.

## Evaluation & Metrics

[https://github.com/evalops/dspy-0to1-guide#evaluation--metrics](https://github.com/evalops/dspy-0to1-guide#evaluation--metrics)

Creating pipelines is only half the story; you need to **measure** their performance. DSPy provides a flexible evaluation API with built‑in metrics and support for custom metrics.

1. **Prepare a dataset.** A dataset is a list of dspy.Example objects, each containing inputs and the expected output(s). For instance:

```
from dspy import Example

# Define some QA examples
train_examples = [
    Example(question="What is the capital of France?", answer="Paris").with_inputs("question"),
    Example(question="Who wrote 1984?", answer="George Orwell").with_inputs("question"),
]
```

1. 

**Choose a metric.** DSPy supplies metrics like answer_exact_match and SemanticF1. You can also write your own metric as a function that takes predictions and ground truth and returns a score in [0, 1].

2. 

**Evaluate.** Use dspy.Evaluate to run your pipeline on a dataset and compute the metric:

```
from dspy import Evaluate, metrics

evaluate = Evaluate(
    trainset=train_examples,
    metric=metrics.answer_exact_match,  # use exact match metric
)
# Evaluate your module or compiled program
result = evaluate(rag)  # rag is the RAGPipeline defined earlier
print("Accuracy:", result)
```

Evaluation helps you quantify improvement when applying optimizers or making architectural changes. By default, Evaluate runs on the training set; you should create a separate test set for final validation.

## Optimization: Self‑Improving Pipelines

[https://github.com/evalops/dspy-0to1-guide#optimization-selfimproving-pipelines](https://github.com/evalops/dspy-0to1-guide#optimization-selfimproving-pipelines)

Manual prompt tuning is inefficient. DSPy's **optimizers** automate the process by generating prompt variants, trying them on your examples, and keeping the best ones. Here's a typical optimization loop:

```
import dspy
from dspy.teleprompt import BootstrapFewShot
from dspy import metrics

# Suppose you already have a module (e.g., RAGPipeline) and a dataset of examples
teleprompter = BootstrapFewShot(metric=metrics.answer_exact_match)

# Use compile() to optimize prompts and few-shot examples
compiled_rag = teleprompter.compile(
    rag,  # the module to optimize
    trainset=train_examples,  # your training examples
)

# The compiled program is another module; evaluate it
score_before = dspy.Evaluate(train_examples, metrics.answer_exact_match)(rag)
score_after = dspy.Evaluate(train_examples, metrics.answer_exact_match)(compiled_rag)
print(f"Accuracy before optimization: {score_before:.2f}")
print(f"Accuracy after optimization: {score_after:.2f}")
```

The compile step can produce dramatic improvements; DSPy will automatically generate candidate prompts and few‑shot examples, evaluate them on your data, and adopt the best configuration. You can adjust hyper‑parameters such as the number of candidates or exploration strategies.

Other optimizers like BetterTogether, BootstrapFinetune and COPRO fine‑tune smaller models or jointly optimize prompts across multiple modules.

## Agents & Tool Use

[https://github.com/evalops/dspy-0to1-guide#agents--tool-use](https://github.com/evalops/dspy-0to1-guide#agents--tool-use)

Some tasks require the model to interact with external tools (calculators, APIs, web search). DSPy's ReAct module supports **Reasoning and Acting**: the model can decide whether to call a tool and incorporate the result in its reasoning. Here's a simple agent with a calculator tool:

```
import dspy

# Configure the model
dspy.configure(lm=dspy.LM('openai/gpt-4o-mini'))

# Define a calculator tool
def calculator(expression: str) -> float:
    return eval(expression)

# Create the agent module
class CalculatorAgent(dspy.Module):
    def __init__(self):
        super().__init__()
        # Register the calculator tool with the ReAct module
        self.react = dspy.ReAct("question -> answer", tools=[calculator])

    def forward(self, question: str):
        return self.react(question=question)

agent = CalculatorAgent()
print(agent("What is 2 + 2 * 5?"))  # The model can call calculator() to compute the answer
```

DSPy handles the plumbing: it formats tool calls, parses results and integrates them into the language model's reasoning. You can register multiple tools (e.g., web search, calendar APIs) to build sophisticated agents.

## Advanced Topics

[https://github.com/evalops/dspy-0to1-guide#advanced-topics](https://github.com/evalops/dspy-0to1-guide#advanced-topics)

Once you grasp the basics, DSPy offers several advanced features:

- **Reflective Prompt Evolution (GEPA).** GEPA is a technique where the model reflects on its own prompts and iteratively improves them. It's particularly useful for complex reasoning tasks.
- **Reinforcement Learning optimization.** DSPy's experimental RL optimizer lets you optimize prompts using reinforcement learning signals, enabling deeper exploration of the prompt space.
- **Integration with Pydantic for data validation.** You can use Pydantic models to enforce strict output schemas, catching malformed outputs early and providing runtime safety.
- **Parallel & asynchronous execution.** DSPy supports parallel calls to LLMs and asynchronous pipelines, which is critical for latency‑sensitive applications.
- **Production deployment.** DSPy's caching, logging and observability modules help you deploy pipelines reliably. For example, dspy.Cache can reduce cost by caching LM responses, and debugging tools can record intermediate states.

## Best Practices & Pitfalls

[https://github.com/evalops/dspy-0to1-guide#best-practices--pitfalls](https://github.com/evalops/dspy-0to1-guide#best-practices--pitfalls)
