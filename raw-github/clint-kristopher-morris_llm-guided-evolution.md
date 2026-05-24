---
repo: clint-kristopher-morris/llm-guided-evolution
url: https://github.com/clint-kristopher-morris/llm-guided-evolution
content_timestamp: 2024-07-08
time_slice: 2024-Q3
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - clint-kristopher-morris/llm-guided-evolution: LLM Guided Evolution - The Automation of Models Advancing Models · GitHub

**Source**: https://github.com/clint-kristopher-morris/llm-guided-evolution

---

[Skip to content](https://github.com/clint-kristopher-morris/llm-guided-evolution#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[clint-kristopher-morris](https://github.com/clint-kristopher-morris)

/
**[llm-guided-evolution](https://github.com/clint-kristopher-morris/llm-guided-evolution)**

Public

- [Notifications](https://github.com/login?return_to=%2Fclint-kristopher-morris%2Fllm-guided-evolution)You must be signed in to change notification settings
- [Fork
    26](https://github.com/login?return_to=%2Fclint-kristopher-morris%2Fllm-guided-evolution)
- 
[Star
          19](https://github.com/login?return_to=%2Fclint-kristopher-morris%2Fllm-guided-evolution)

[https://github.com/clint-kristopher-morris/llm-guided-evolution](https://github.com/clint-kristopher-morris/llm-guided-evolution)

[Branches](https://github.com/clint-kristopher-morris/llm-guided-evolution/branches)[Tags](https://github.com/clint-kristopher-morris/llm-guided-evolution/tags)

[https://github.com/clint-kristopher-morris/llm-guided-evolution/branches](https://github.com/clint-kristopher-morris/llm-guided-evolution/branches)[https://github.com/clint-kristopher-morris/llm-guided-evolution/tags](https://github.com/clint-kristopher-morris/llm-guided-evolution/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History75 Commits75 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| assets | assets |  |  |
| sota/ExquisiteNetV2 | sota/ExquisiteNetV2 |  |  |
| src | src |  |  |
| templates | templates |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| change.txt | change.txt |  |  |
| cleanup.sh | cleanup.sh |  |  |
| pyproject.toml | pyproject.toml |  |  |
| run.sh | run.sh |  |  |
| run_improved.py | run_improved.py |  |  |
| View all files |  |  |  |

## Repository files navigation

## Guided Evolution:

[https://github.com/clint-kristopher-morris/llm-guided-evolution#guided-evolution](https://github.com/clint-kristopher-morris/llm-guided-evolution#guided-evolution)

[https://github.com/clint-kristopher-morris/llm-guided-evolution/blob/main/assets/header.png](https://github.com/clint-kristopher-morris/llm-guided-evolution/blob/main/assets/header.png)

### Introduction:

[https://github.com/clint-kristopher-morris/llm-guided-evolution#introduction](https://github.com/clint-kristopher-morris/llm-guided-evolution#introduction)

In the ever-evolving domain of machine learning, the convergence of human cognitive skills and automated algorithms is entering a pivotal junction. This paper introduces “Guided Evolution” (GE), a novel framework that combines the human-like expertise of Large Language Models (LLMs) with the robust capabilities of Neural Architecture Search (NAS) through genetic algorithms. This innovative fusion advances automated machine learning, elevating traditional NAS by integrating a more insightful, intelligently guided evolutionary process.

Central to this framework is our  “Evolution of Thought” (EoT) technique, which extends and refines concepts like Zero-Shot Chain-of-Thought, Automated Chain-of-Thought, and Tree-of-Thought. These methodologies aim to improve the reasoning capabilities of LLMs. EoT takes a unique step forward by enabling LLMs to receive result-driven feedback, empowering them to make informed improvements based on the performance of their prior code augmentations, a significant advancement in intelligent automated machine learning.

EoT catalyzes LLMs to introspect and fine-tune suggestions based on past iterations, creating a self-enhancing feedback loop that fine-tunes architectural evolution. At the same, GE maintains essential genetic diversity for evolutionary algorithms while injecting human-like expertise and creativity into the evolutionary framework. Building from the insights of Ma et al., our Guided Evolutionary framework is further enhanced by a Character Role Play (CRP) technique, to markedly increase the feasibility, usefulness and creativity of ideas engendered by the LLM.

The effectiveness of the Guided Evolution (GE) framework is showcased in the evolution of the ExquisiteNetV2 model. This evolution, initiated with a State-Of-The-Art (SOTA) seed model, not only demonstrates the capacity of LLMs to build upon and enhance SOTA models in collaboration with human expertise but also underscores their autonomous model design. This case study illustrates the framework's self-sufficient ability to generate improved model variants, emphasizing the burgeoning impact of LLMs in redefining traditional model design pipelines, a step towards models that independently evolve and refine their architectures.

---

### Setup

[https://github.com/clint-kristopher-morris/llm-guided-evolution#setup](https://github.com/clint-kristopher-morris/llm-guided-evolution#setup)

This code utilizes [ExquisiteNetV2](https://github.com/shyhyawJou/ExquisiteNetV2) which is copied into the sota directory.

Dependencies are managed through `pyproject.toml`. This package can be installed with `pip install .` or interacted with through tools such as `uv`

Then follow the instructions to prepare the CIFAR10 dataset in the [ExquisiteNetV2 README](https://github.com/clint-kristopher-morris/llm-guided-evolution/blob/main/sota/ExquisiteNetV2/README.md)

This code has been tested on Python 3.12

If you wish to use features with Google's Gemini, please follow the instructions for [Setting Up an API Key](https://ai.google.dev/gemini-api/docs/api-key)

---

### Autonomous Model Evolution:

[https://github.com/clint-kristopher-morris/llm-guided-evolution#autonomous-model-evolution](https://github.com/clint-kristopher-morris/llm-guided-evolution#autonomous-model-evolution)

[https://github.com/clint-kristopher-morris/llm-guided-evolution/blob/main/assets/ge_run1.gif](https://github.com/clint-kristopher-morris/llm-guided-evolution/blob/main/assets/ge_run1.gif)

---

### Paper

[https://github.com/clint-kristopher-morris/llm-guided-evolution#paper](https://github.com/clint-kristopher-morris/llm-guided-evolution#paper)

[LLM Guided Evolution - The Automation of Models Advancing Models](https://github.com/clint-kristopher-morris/llm-guided-evolution/blob/main/assets/paper/LLM_Guided_Evolution___The_Automation_of_Models_Advancing_Models.pdf)

---

### Cited by DeepMind **AlphaEvolve**

[https://github.com/clint-kristopher-morris/llm-guided-evolution#cited-by-deepmind-alphaevolve](https://github.com/clint-kristopher-morris/llm-guided-evolution#cited-by-deepmind-alphaevolve)

DeepMind’s agent **AlphaEvolve** references our *LLM-Guided Evolution* framework as prior work (see reference [72] in the white-paper).

AlphaEvolve shares the GE concept of letting an LLM propose, mutate, and test code and scales it to discover state-of-the-art algorithms across mathematics, scheduling, and hardware design.

We’re proud that the concepts first open-sourced here are now being implemented in frontier research at Google DeepMind.
 Read the white-paper below:

[https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/](https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/)

## About

         LLM Guided Evolution - The Automation of Models Advancing Models       

### Topics

[machine-learning](https://github.com/topics/machine-learning)[evolutionary-algorithms](https://github.com/topics/evolutionary-algorithms)[mixture-of-experts](https://github.com/topics/mixture-of-experts)[llm](https://github.com/topics/llm)[mixtral-8x7b](https://github.com/topics/mixtral-8x7b)

### Resources

[Readme](https://github.com/clint-kristopher-morris/llm-guided-evolution#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/clint-kristopher-morris/llm-guided-evolution/activity)

### Stars

[19
        stars](https://github.com/clint-kristopher-morris/llm-guided-evolution/stargazers)

### Watchers

[3
        watching](https://github.com/clint-kristopher-morris/llm-guided-evolution/watchers)

### Forks

[26
        forks](https://github.com/clint-kristopher-morris/llm-guided-evolution/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fclint-kristopher-morris%2Fllm-guided-evolution&report=clint-kristopher-morris+%28user%29)

## [Releases
      1](https://github.com/clint-kristopher-morris/llm-guided-evolution/releases)

[Version Corresponding to Initial Publication
        
          Latest
      
      Jul 8, 2024](https://github.com/clint-kristopher-morris/llm-guided-evolution/releases/tag/Gecco-24-Paper)

## [Packages
      0](https://github.com/users/clint-kristopher-morris/packages?repo_name=llm-guided-evolution)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/clint-kristopher-morris/llm-guided-evolution/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          98.2%](https://github.com/clint-kristopher-morris/llm-guided-evolution/search?l=python)
- [Shell
          1.8%](https://github.com/clint-kristopher-morris/llm-guided-evolution/search?l=shell)

     You can’t perform that action at this time.
