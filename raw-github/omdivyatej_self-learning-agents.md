---
repo: omdivyatej/self-learning-agents
url: https://github.com/omdivyatej/self-learning-agents
content_timestamp: 2025-05-03
time_slice: 2025-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - omdivyatej/Self-Learning-Agents: A lightweight Python library that allows any LLM agent to self-improve through feedback, without retraining models. · GitHub

**Source**: https://github.com/omdivyatej/self-learning-agents

---

[Skip to content](https://github.com/omdivyatej/self-learning-agents#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[omdivyatej](https://github.com/omdivyatej)

/
**[Self-Learning-Agents](https://github.com/omdivyatej/Self-Learning-Agents)**

Public

- [Notifications](https://github.com/login?return_to=%2Fomdivyatej%2FSelf-Learning-Agents)You must be signed in to change notification settings
- [Fork
    7](https://github.com/login?return_to=%2Fomdivyatej%2FSelf-Learning-Agents)
- 
[Star
          63](https://github.com/login?return_to=%2Fomdivyatej%2FSelf-Learning-Agents)

[https://github.com/omdivyatej/Self-Learning-Agents](https://github.com/omdivyatej/Self-Learning-Agents)

[Branches](https://github.com/omdivyatej/Self-Learning-Agents/branches)[Tags](https://github.com/omdivyatej/Self-Learning-Agents/tags)

[https://github.com/omdivyatej/Self-Learning-Agents/branches](https://github.com/omdivyatej/Self-Learning-Agents/branches)[https://github.com/omdivyatej/Self-Learning-Agents/tags](https://github.com/omdivyatej/Self-Learning-Agents/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History20 Commits20 Commits |  |  |  |
| dead_simple_self_learning | dead_simple_self_learning |  |  |
| examples | examples |  |  |
| .DS_Store | .DS_Store |  |  |
| .gitgnore | .gitgnore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| requirements.txt | requirements.txt |  |  |
| setup.py | setup.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# Dead Simple Self-Learning

[https://github.com/omdivyatej/self-learning-agents#dead-simple-self-learning](https://github.com/omdivyatej/self-learning-agents#dead-simple-self-learning)

A lightweight Python library that allows any LLM agent to self-improve through feedback, without retraining models.

[https://camo.githubusercontent.com/00c8b72869712611903bd0a0d53f02462f933466c7cb3d6403d626e08484c04d/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f7072656d69756d2f706e672d3235362d7468756d622f6d756c74692d6167656e742d323133343436352d313830323436322e706e673f663d7765627026773d323536](https://camo.githubusercontent.com/00c8b72869712611903bd0a0d53f02462f933466c7cb3d6403d626e08484c04d/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f7072656d69756d2f706e672d3235362d7468756d622f6d756c74692d6167656e742d323133343436352d313830323436322e706e673f663d7765627026773d323536)

## 📋 Overview

[https://github.com/omdivyatej/self-learning-agents#-overview](https://github.com/omdivyatej/self-learning-agents#-overview)

**Problem**: LLM agents struggle to consistently learn from user feedback without requiring costly model retraining or complex infrastructure.

**Solution**: This library provides a simple system for capturing, storing, and reusing feedback for LLM tasks. It works by:

1. Collecting feedback on LLM outputs
2. Storing this feedback with embeddings of the original task
3. Retrieving relevant feedback for similar future tasks (feedback selection layer: only openai right now)
4. Enhancing prompts with the feedback to improve results

All of this happens without any model retraining - just by enhancing prompts with contextual feedback.

## ✨ Features

[https://github.com/omdivyatej/self-learning-agents#-features](https://github.com/omdivyatej/self-learning-agents#-features)

- **Simple API**: Just a few methods to enhance prompts and save feedback
- **Multiple Embedding Models**: Support for OpenAI and HuggingFace models (MiniLM, BGE-small)
- **Local-First**: Uses JSON files for storage with no external DB requirements
- **Smart Feedback Selection**: Uses OpenAI to choose the most relevant feedback for a task
- **Async Support**: Both synchronous and asynchronous APIs for better performance
- **Customizable**: Configurable thresholds, formatters, and memory handling
- **Zero Infrastructure**: Works out of the box with minimal setup
- **Framework Agnostic**: Works with any LLM provider (OpenAI, Anthropic, etc.)
- **Integration Examples**: Ready-to-use examples with LangChain, Agno, and more

## 🔧 Installation

[https://github.com/omdivyatej/self-learning-agents#-installation](https://github.com/omdivyatej/self-learning-agents#-installation)

You can install the package via pip:

```
pip install dead_simple_self_learning
```

### Dependencies

[https://github.com/omdivyatej/self-learning-agents#dependencies](https://github.com/omdivyatej/self-learning-agents#dependencies)

- 

**Required**:

  - Python 3.7+
  - numpy >=1.20.0
  - sentence-transformers >=2.2.0

- 

**Optional**:

  - openai >=1.0.0 (for OpenAI embeddings and LLM feedback selection)
  - langchain, agno (for specific integration examples)

Install with optional OpenAI dependency:

```
pip install "dead_simple_self_learning[openai]"
```

Install for development:

```
pip install "dead_simple_self_learning[dev]"
```

## 🚀 Quick Start

[https://github.com/omdivyatej/self-learning-agents#-quick-start](https://github.com/omdivyatej/self-learning-agents#-quick-start)

```
from openai import OpenAI
from dead_simple_self_learning import SelfLearner

# Initialize OpenAI client (you need your own API key)
client = OpenAI(api_key="YOUR_OPENAI_API_KEY")

# Initialize a self-learner (no API key needed for miniLM)
learner = SelfLearner(embedding_model="miniLM")

# Define our task and original prompt
task = "Write a product description for a smartphone"
base_prompt = "You are a copywriter."

# Generate text without feedback
def generate_text(prompt, task):
    return client.chat.completions.create(
        model="gpt-4o", 
        messages=[{"role": "system", "content": prompt}, {"role": "user", "content": task}]
    ).choices[0].message.content

# Generate original text
original = generate_text(base_prompt, task)
print("#######################Original output:", original)

# Save feedback for the task
feedback = "Keep it under 100 words and focus on benefits not features"
learner.save_feedback(task, feedback)

# Apply feedback to the prompt
enhanced_prompt = learner.apply_feedback(task, base_prompt)
enhanced = generate_text(enhanced_prompt, task)

print("######################Improved output:", enhanced)
```

## 📊 Package Structure

[https://github.com/omdivyatej/self-learning-agents#-package-structure](https://github.com/omdivyatej/self-learning-agents#-package-structure)

```
dead_simple_self_learning/
├── __init__.py         # Package exports
├── __main__.py         # CLI entrypoint
├── embedder.py         # Handles embedding generation
├── memory.py           # Manages storage and retrieval
└── learner.py          # Core functionality
```

## 📖 Detailed Guide

[https://github.com/omdivyatej/self-learning-agents#-detailed-guide](https://github.com/omdivyatej/self-learning-agents#-detailed-guide)

### Core Components

[https://github.com/omdivyatej/self-learning-agents#core-components](https://github.com/omdivyatej/self-learning-agents#core-components)

#### Embedder

[https://github.com/omdivyatej/self-learning-agents#embedder](https://github.com/omdivyatej/self-learning-agents#embedder)

The Embedder class generates vector embeddings for tasks:

```
from dead_simple_self_learning import Embedder

# Use a HuggingFace model (no API key required)
embedder = Embedder(model_name="miniLM")  

# Use OpenAI (requires API key in env var OPENAI_API_KEY)
embedder = Embedder(model_name="openai")  

# Generate an embedding
vector = embedder.embed("your text here")
```

## About

         A lightweight Python library that allows any LLM agent to self-improve through feedback, without retraining models.       

[pypi.org/project/dead-simple-self-learning/](https://pypi.org/project/dead-simple-self-learning/)

### Topics

[openai](https://github.com/topics/openai)[rl](https://github.com/topics/rl)[agents](https://github.com/topics/agents)[self-learning](https://github.com/topics/self-learning)[rag](https://github.com/topics/rag)[huggingface](https://github.com/topics/huggingface)[feeback](https://github.com/topics/feeback)[self-learning-ai](https://github.com/topics/self-learning-ai)[huggingface-transformers](https://github.com/topics/huggingface-transformers)[llm](https://github.com/topics/llm)[aiagentsf](https://github.com/topics/aiagentsf)

### Resources

[Readme](https://github.com/omdivyatej/self-learning-agents#readme-ov-file)

### License

[MIT license](https://github.com/omdivyatej/self-learning-agents#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/omdivyatej/Self-Learning-Agents/activity)

### Stars

[63
        stars](https://github.com/omdivyatej/Self-Learning-Agents/stargazers)

### Watchers

[1
        watching](https://github.com/omdivyatej/Self-Learning-Agents/watchers)

### Forks

[7
        forks](https://github.com/omdivyatej/Self-Learning-Agents/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fomdivyatej%2FSelf-Learning-Agents&report=omdivyatej+%28user%29)

## [Releases
      1](https://github.com/omdivyatej/Self-Learning-Agents/releases)

[Release 1.0
        
          Latest
      
      May 3, 2025](https://github.com/omdivyatej/Self-Learning-Agents/releases/tag/release)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/omdivyatej/Self-Learning-Agents/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/omdivyatej/Self-Learning-Agents/search?l=python)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2025-05-03
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-05
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

