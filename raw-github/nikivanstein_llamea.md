---
repo: nikivanstein/llamea
url: https://github.com/nikivanstein/llamea
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - XAI-liacs/LLaMEA: Large Language Model Evolutionary Algorithm · GitHub

**Source**: https://github.com/nikivanstein/llamea

---

[Skip to content](https://github.com/XAI-liacs/LLaMEA#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[XAI-liacs](https://github.com/XAI-liacs)

/
**[LLaMEA](https://github.com/XAI-liacs/LLaMEA)**

Public

- [Notifications](https://github.com/login?return_to=%2FXAI-liacs%2FLLaMEA)You must be signed in to change notification settings
- [Fork
    24](https://github.com/login?return_to=%2FXAI-liacs%2FLLaMEA)
- 
[Star
          105](https://github.com/login?return_to=%2FXAI-liacs%2FLLaMEA)

[https://github.com/XAI-liacs/LLaMEA](https://github.com/XAI-liacs/LLaMEA)

[Branches](https://github.com/XAI-liacs/LLaMEA/branches)[Tags](https://github.com/XAI-liacs/LLaMEA/tags)

[https://github.com/XAI-liacs/LLaMEA/branches](https://github.com/XAI-liacs/LLaMEA/branches)[https://github.com/XAI-liacs/LLaMEA/tags](https://github.com/XAI-liacs/LLaMEA/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History423 Commits423 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| .vscode | .vscode |  |  |
| benchmarks | benchmarks |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| llamea | llamea |  |  |
| logreader | logreader |  |  |
| misc | misc |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CITATION.cff | CITATION.cff |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| framework.png | framework.png |  |  |
| logo-dark.png | logo-dark.png |  |  |
| logo.png | logo.png |  |  |
| pyproject-lite.toml | pyproject-lite.toml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

![Shows the LLaMEA logo.](https://github.com/XAI-liacs/LLaMEA/raw/main/logo.png)

# LLaMEA: Large Language Model Evolutionary Algorithm

[https://github.com/XAI-liacs/LLaMEA#llamea-large-language-model-evolutionary-algorithm](https://github.com/XAI-liacs/LLaMEA#llamea-large-language-model-evolutionary-algorithm)

> ⭐ If you like this, please give the repo a star – it helps!

[https://pypi.org/project/llamea/](https://pypi.org/project/llamea/)[https://pypi.org/project/llamea/](https://pypi.org/project/llamea/)[https://camo.githubusercontent.com/5530e8ce1df25b69d80111f3ccefeea5422a46441aef098124c1977599308a33/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d61696e7461696e65642533462d7965732d627269676874677265656e2e737667](https://camo.githubusercontent.com/5530e8ce1df25b69d80111f3ccefeea5422a46441aef098124c1977599308a33/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d61696e7461696e65642533462d7965732d627269676874677265656e2e737667)[https://camo.githubusercontent.com/fcdf47071178fa8539294173dc5716605fa3856c2ffc6fd9c2c31e1e742747be/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f507974686f6e2d332e31302b2d626c7565](https://camo.githubusercontent.com/fcdf47071178fa8539294173dc5716605fa3856c2ffc6fd9c2c31e1e742747be/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f507974686f6e2d332e31302b2d626c7565)[https://github.com/XAI-liacs/LLaMEA/actions/workflows/test.yml/badge.svg](https://github.com/XAI-liacs/LLaMEA/actions/workflows/test.yml/badge.svg)[https://codecov.io/gh/XAI-liacs/LLaMEA](https://codecov.io/gh/XAI-liacs/LLaMEA)[https://doi.org/10.5281/zenodo.13842144](https://doi.org/10.5281/zenodo.13842144)[https://colab.research.google.com/github/XAI-liacs/LLaMEA/blob/main/docs/notebooks/simple_example.ipynb](https://colab.research.google.com/github/XAI-liacs/LLaMEA/blob/main/docs/notebooks/simple_example.ipynb)[https://xai-liacs.github.io/LLaMEA/](https://xai-liacs.github.io/LLaMEA/)
[Check our demo on Colab](https://colab.research.google.com/github/XAI-liacs/LLaMEA/blob/main/docs/notebooks/simple_example.ipynb)

> **The fully-open successor to Google DeepMind’s AlphaEvolve for automated algorithm discovery.** First released 📅 Nov 2024 • MIT License • 100 % reproducible. Also read the  [Documentation](https://xai-liacs.github.io/LLaMEA/). 🥈 Winner of the Silver [Humies 2025](https://www.human-competitive.org/awards) at GECCO!

LLaMEA couples large-language-model reasoning with an evolutionary loop to **invent, mutate and benchmark algorithms fully autonomously**.

## Table of Contents

[https://github.com/XAI-liacs/LLaMEA#table-of-contents](https://github.com/XAI-liacs/LLaMEA#table-of-contents)

- [Introduction](https://github.com/XAI-liacs/LLaMEA#introduction)
- [News](https://github.com/XAI-liacs/LLaMEA#-news)
- [Installation](https://github.com/XAI-liacs/LLaMEA#-installation)
- [Quick Start](https://github.com/XAI-liacs/LLaMEA#-quick-start)
- [Configuration](https://github.com/XAI-liacs/LLaMEA#-configuration)
- [Examples](https://github.com/XAI-liacs/LLaMEA#-examples)
  - [Running black-box-optimization.py](https://github.com/XAI-liacs/LLaMEA#running-black-box-optimizationpy)
  - [Running black-box-opt-with-HPO.py (LLaMEA-HPO)](https://github.com/XAI-liacs/LLaMEA#running-black-box-opt-with-hpopy-llamea-hpo)
  - [Running automl_example.py](https://github.com/XAI-liacs/LLaMEA#running-automl_examplepy)

- [Contributing](https://github.com/XAI-liacs/LLaMEA#-contributing)
- [License](https://github.com/XAI-liacs/LLaMEA#-license)
- [Citation](https://github.com/XAI-liacs/LLaMEA#-citation)

## Introduction

[https://github.com/XAI-liacs/LLaMEA#introduction](https://github.com/XAI-liacs/LLaMEA#introduction)

**LLaMEA** (Large Language Model Evolutionary Algorithm) is an innovative framework that leverages the power of large language models (LLMs) such as GPT-4 for the automated generation and refinement of metaheuristic optimization algorithms. The framework utilizes a novel approach to evolve and optimize algorithms iteratively based on performance metrics and runtime evaluations without requiring extensive prior algorithmic knowledge. This makes LLaMEA an ideal tool for both research and practical applications in fields where optimization is crucial.

**Key Features:**

- **Automated Algorithm Generation**: Automatically generates and refines algorithms using GPT-based or similar LLM models.
- **Performance Evaluation**: Integrates seamlessly with the IOHexperimenter for real-time performance feedback, guiding the evolutionary process.
- **LLaMEA-HPO**: Provides an in-the-loop hyper-parameter optimization mechanism (via SMAC) to offload numerical tuning, so that LLM queries focus on novel structural improvements.
- **Extensible & Modular**: You can easily integrate additional models and evaluation tools.
- **Niching for Diversity**: Fitness sharing and clearing strategies maintain a diverse set of solutions.
- **Unified Diff Mode**: Evolve code through patch-based edits for efficient token usage.
- **Population Evaluation Mode**: Optionally evaluate whole populations in a single call to speed up expensive fitness functions.

[https://github.com/XAI-liacs/LLaMEA/blob/main/framework.png](https://github.com/XAI-liacs/LLaMEA/blob/main/framework.png)

**Example use-cases:**

- **Problem specific optimization algorithms**: Easily generate and fine-tune optimization algorithms to work on **your specific** problem. By leveraging problem knowledge in the prompt the generated optimized algorithms can perform even better.
- **Efficient new Bayesian Optimization algorithms**: Generate optimized and novel Bayesian optimization algorithms, specifically for optimizing very expensive problems such as auto-motive crash worthiness or car shape design optimization tasks.
- **Machine Learning Pipelines**: Without any ML knowledge, you can use LLaMEA to generate optimized machine learning pipelines for any task. Just insert the task description and provide the dataset and evaluation metric and start LLaMEA.

## 🔥 News

[https://github.com/XAI-liacs/LLaMEA#-news](https://github.com/XAI-liacs/LLaMEA#-news)

- 2025.08 🥉 **A LLaMEA generated agent won the 3rd price at the IEEE COG Planet Wars RTS competition**
- 2025.07 🥇 **"LLaMEA" won the Silver award at the [Humies @GECCO2025](https://www.human-competitive.org/awards)**
- 2025.07 🥈 **"LLaMEA" won the Any-time Performancy on Many-Affine BBOB 2025 competition**
- 2025.06 🎉 **["LLaMEA-BO: A Large Language Model Evolutionary Algorithm for Automatically Generating Bayesian Optimization Algorithms"](https://arxiv.org/abs/2505.21034) published on Arxiv**
- 2025.05 🎉 **["Optimizing Photonic Structures with Large Language Model Driven Algorithm Discovery"](https://arxiv.org/abs/2503.19742) and ["BLADE: Benchmark Suite for LLM-Driven Automated Design and Evolution of iterative optimisation heuristics"](https://arxiv.org/abs/2504.20183) accepted as workshop papers at GECCO 2025**
- 2025.04 🎉 **LLaMEA-HPO paper accepted in ACM TELO**[“In-the-loop Hyper-Parameter Optimization for LLM-Based Automated Design of Heuristics"](https://dl.acm.org/doi/abs/10.1145/3731567)!
- 2025.04 🎉 **["Code Evolution Graphs"](https://arxiv.org/abs/2503.16668) accepted as full paper at GECCO 2025**!
- 2025.03 🎉 **LLaMEA v1.0.0 released**!
- 2025.01 🎉 **LLaMEA paper accepted in IEEE TEVC**[“Llamea: A large language model evolutionary algorithm for automatically generating metaheuristics"](https://ieeexplore.ieee.org/abstract/document/10752628/)!

## 🎁 Installation

[https://github.com/XAI-liacs/LLaMEA#-installation](https://github.com/XAI-liacs/LLaMEA#-installation)

Important

Ensure that SWIG is installed on your system by running `swig --version` If it is not installed, use the appropriate method for your platform:

- **macOS**: `brew install swig`
- **Ubuntu/Linux**: `sudo apt-get install swig` (or your distribution’s package manager)
- **Windows**: Download and install from the official [SWIG website](https://www.swig.org/download.html) and make sure to add it to your system PATH.

It is the easiest to use LLaMEA from the pypi package.

```
pip install llamea
```

Important

The Python version **must** be higher or equal to 3.11. You need an OpenAI/Gemini/Ollama API key for using LLM models.

For a slimmed-down installation without bundled LLM or HPO dependencies, install the lite package:

```
pip install llamea-lite
```

HPO features in the lite package require installing `ConfigSpace` separately.

You can also install the package from source using [uv](https://docs.astral.sh/uv/) (0.7.19). make sure you have `uv` installed.

1. Clone the repository: 

```
git clone https://github.com/XAI-liacs/LLaMEA.git
cd LLaMEA
```

2. Install the required dependencies via uv: 

```
uv sync
```

3. Optional install dev or/and example dependencies: 

```
uv sync --dev --group examples
```

## 💻 Quick Start

[https://github.com/XAI-liacs/LLaMEA#-quick-start](https://github.com/XAI-liacs/LLaMEA#-quick-start)

Tip

See also the getting started demo: [https://colab.research.google.com/github/XAI-liacs/LLaMEA/blob/main/docs/notebooks/simple_example.ipynb](https://colab.research.google.com/github/XAI-liacs/LLaMEA/blob/main/docs/notebooks/simple_example.ipynb)

[https://camo.githubusercontent.com/eff96fda6b2e0fff8cdf2978f89d61aa434bb98c00453ae23dd0aab8d1451633/68747470733a2f2f636f6c61622e72657365617263682e676f6f676c652e636f6d2f6173736574732f636f6c61622d62616467652e737667](https://camo.githubusercontent.com/eff96fda6b2e0fff8cdf2978f89d61aa434bb98c00453ae23dd0aab8d1451633/68747470733a2f2f636f6c61622e72657365617263682e676f6f676c652e636f6d2f6173736574732f636f6c61622d62616467652e737667)

1. 

Set up an OpenAI API key:

  - Obtain an API key from [OpenAI](https://openai.com/).
  - Set the API key in your environment variables: 

```
export OPENAI_API_KEY='your_api_key_here'
```

2. 

Running an Experiment

To run an optimization experiment using LLaMEA:

```
from llamea import LLaMEA

# Define your evaluation function
def your_evaluation_function(solution):
    # Implementation of your function
    # return feedback, quality score, error information
    return "feedback for LLM", 0.1, ""

# Initialize LLaMEA with your API key and other parameters
optimizer = LLaMEA(f=your_evaluation_function, api_key="your_api_key_here")

# Run the optimizer
best_solution, best_fitness = optimizer.run()
print(f"Best Solution: {best_solution}, Fitness: {best_fitness}")
```

## ⚙️ Configuration

[https://github.com/XAI-liacs/LLaMEA#%EF%B8%8F-configuration](https://github.com/XAI-liacs/LLaMEA#%EF%B8%8F-configuration)

Key hyper-parameters of `LLaMEA`:

| Parameter | Description |
|---|---|
| n_parents, n_offspring | Population sizes controlling selection and mutation |
| budget | Number of generations to run |
| niching | Diversity management strategy (None, "sharing", "clearing") with niche_radius and related options |
| evaluate_population | If True, the evaluation function f operates on a list of solutions |
| diff_mode | Requests unified diff patches instead of full code for mutations |
| HPO | Enable in-the-loop hyper-parameter optimization |
| eval_timeout, max_workers, parallel_backend | Control evaluation time and parallelism |
| adaptive_mutation, adaptive_prompt | Adaptive control of mutation strength and task prompt |

See the [Documentation](https://xai-liacs.github.io/LLaMEA/) for a complete description of all parameters.

---

## 💻 Examples

[https://github.com/XAI-liacs/LLaMEA#-examples](https://github.com/XAI-liacs/LLaMEA#-examples)

Below are two example scripts from the `examples` directory demonstrating LLaMEA in action for black-box optimization with a BBOB (24 noiseless) function suite. One script (`examples/black-box-optimization.py`) runs basic LLaMEA, while the other (`examples/black-box-opt-with-HPO.py`) incorporates a **hyper-parameter optimization** pipeline—known as **LLaMEA-HPO**—that employs SMAC to tune the algorithm’s parameters in the loop.

### Running `black-box-optimization.py`

[https://github.com/XAI-liacs/LLaMEA#running-black-box-optimizationpy](https://github.com/XAI-liacs/LLaMEA#running-black-box-optimizationpy)

**`black-box-optimization.py`** showcases a straightforward use-case of LLaMEA. It:

- Defines an evaluation function `evaluateBBOB` that runs generated algorithms on a standard set of BBOB problems (24 functions).
- Initializes LLaMEA with a specific model (e.g., GPT-4, GPT-3.5) and prompts the LLM to generate metaheuristic code.
- Iterates over a `(1+1)`-style evolutionary loop, refining the code until a certain budget is reached.

**How to run:**

```
uv run python examples/black-box-optimization.py
```

The script will:

1. Query the specified LLM with a prompt describing the black-box optimization task.
2. Dynamically execute each generated algorithm on BBOB problems.
3. Log performance data such as AOCC (Area Over the Convergence Curve).
4. Iteratively refine the best-so-far algorithms.

### Running `black-box-opt-with-HPO.py` (LLaMEA-HPO)

[https://github.com/XAI-liacs/LLaMEA#running-black-box-opt-with-hpopy-llamea-hpo](https://github.com/XAI-liacs/LLaMEA#running-black-box-opt-with-hpopy-llamea-hpo)

**`black-box-opt-with-HPO.py`** extends LLaMEA with **in-the-loop hyper-parameter optimization**—termed **LLaMEA-HPO**. Instead of having the LLM guess or refine hyper-parameters directly, the code:

- Allows the LLM to generate a Python class representing the metaheuristic **plus** a ConfigSpace dictionary describing hyper-parameters.
- Passes these hyper-parameters to SMAC, which then searches for good parameter settings on a BBOB training set.
- Evaluates the best hyper-parameters found by SMAC on the full BBOB suite.
- Feeds back the final performance (and errors) to the LLM, prompting it to mutate the algorithm’s structure (rather than simply numeric settings).

**Why LLaMEA-HPO?** Offloading hyper-parameter search to SMAC significantly reduces LLM query overhead and encourages the LLM to focus on novel structural improvements.

**How to run:**
## gBrain Temporal Metadata

- content_timestamp: 2024
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

