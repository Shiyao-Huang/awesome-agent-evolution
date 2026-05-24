---
repo: ecnu-icalk/ell-stulife
url: https://github.com/ecnu-icalk/ell-stulife
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - ECNU-ICALK/ELL-StuLife: Self-Evolving Agent via Experience-Driven Lifelong Learning · GitHub

**Source**: https://github.com/ecnu-icalk/ell-stulife

---

[Skip to content](https://github.com/ecnu-icalk/ell-stulife#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ECNU-ICALK](https://github.com/ECNU-ICALK)

/
**[ELL-StuLife](https://github.com/ECNU-ICALK/ELL-StuLife)**

Public

- [Notifications](https://github.com/login?return_to=%2FECNU-ICALK%2FELL-StuLife)You must be signed in to change notification settings
- [Fork
    2](https://github.com/login?return_to=%2FECNU-ICALK%2FELL-StuLife)
- 
[Star
          74](https://github.com/login?return_to=%2FECNU-ICALK%2FELL-StuLife)

[https://github.com/ECNU-ICALK/ELL-StuLife](https://github.com/ECNU-ICALK/ELL-StuLife)

[Branches](https://github.com/ECNU-ICALK/ELL-StuLife/branches)[Tags](https://github.com/ECNU-ICALK/ELL-StuLife/tags)

[https://github.com/ECNU-ICALK/ELL-StuLife/branches](https://github.com/ECNU-ICALK/ELL-StuLife/branches)[https://github.com/ECNU-ICALK/ELL-StuLife/tags](https://github.com/ECNU-ICALK/ELL-StuLife/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History53 Commits53 Commits |  |  |  |
| Stulife | Stulife |  |  |
| imgs | imgs |  |  |
| task_data | task_data |  |  |
| README.md | README.md |  |  |
| 漫画版本.pdf | 漫画版本.pdf |  |  |
| 经验驱动终身学习-周杰-20251102-Final.pdf | 经验驱动终身学习-周杰-20251102-Final.pdf |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/ECNU-ICALK/ELL-StuLife/blob/main/imgs/Framework.png](https://github.com/ECNU-ICALK/ELL-StuLife/blob/main/imgs/Framework.png)

# Building a Self-Evolving Agent via Experience-Driven Lifelong Learning: A Framework and Benchmark

[https://github.com/ecnu-icalk/ell-stulife#building-a-self-evolving-agent-via-experience-driven-lifelong-learning-a-framework-and-benchmark](https://github.com/ecnu-icalk/ell-stulife#building-a-self-evolving-agent-via-experience-driven-lifelong-learning-a-framework-and-benchmark)

[Website](https://ecnu-icalk.github.io/ELL-StuLife/) • [Paper](https://arxiv.org/pdf/2508.19005) • [Huggingface](https://huggingface.co/datasets/ecnu-icalk/ELL-StuLife)

# Experience-driven Lifelong Learning (ELL)

[https://github.com/ecnu-icalk/ell-stulife#experience-driven-lifelong-learning-ell](https://github.com/ecnu-icalk/ell-stulife#experience-driven-lifelong-learning-ell)

We introduce Experience-driven Lifelong Learning (ELL), a framework for building self-evolving agents capable of continuous growth through real-world interaction. Unlike traditional continual learning approaches, ELL emphasizes learning from experience: agents acquire knowledge not from static, labeled datasets, but through dynamic interaction with their environment. The framework is built on four core principles:

- 

(1) **Experience Exploration**: The agent must be capable of sequentially decomposing and executing complex, long-horizon tasks that involve **continuous interaction over minutes to hours with unquantifiable rewards**. Through sustained and **self-motivated** engagement, it generates rich experiential data, enabling iterative learning and self-correction. This persistent interaction allows the agent to progressively refine strategies and adapt behavior based on dynamic feedback, mimicking the trial-and-error process of real-world learning.

- 

(2) **Long-term Memory**: Experiential data is systematically processed and consolidated into persistent and structured memory, including raw observations, key events, learned facts, temporal contexts, and self-reflective insights. Memory is not passive storage but an active resource: it supports retrieval over long time spans, enables context-aware reasoning, and forms the foundation for future decision-making.

- 

(3) **Skill Learning**: The agent **abstracts recurring patterns from experience into reusable skills**, such as decision rules, functional modules, or problem-solving heuristics. These skills are explicitly constructed through reflection and validated through application in new and evolving tasks. The agent actively manages its skill repertoire, adding, refining, combining, or deprecating skills based on performance, creating a dynamic, self-improving system.

- 

(4) **Knowledge Internalization**: Beyond storing memories and reusing skills, the agent undergoes a process of **knowledge internalization**, transforming explicit and discrete knowledge into implicit and intuitive understanding. Over time, frequently used rules, patterns, and strategies are distilled into the agent's core reasoning process, reducing reliance on external retrieval or step-by-step reflection. This shift from deliberate application to automatic execution mirrors the cognitive transition from novice to expert, where learned behavior becomes "second nature".

# StuLife

[https://github.com/ecnu-icalk/ell-stulife#stulife](https://github.com/ecnu-icalk/ell-stulife#stulife)

## Introduction

[https://github.com/ecnu-icalk/ell-stulife#introduction](https://github.com/ecnu-icalk/ell-stulife#introduction)

StuLife is a new benchmark built upon the `LifelongAgentBench` (LAB) framework, designed to evaluate the long-term memory, planning, adaptation, and autonomous decision-making capabilities of AI agents. It immerses agents in a persistent, stateful, and dynamic virtual university campus environment where their actions have lasting consequences.

Unlike traditional benchmarks that focus on stateless, single-turn tasks, StuLife creates a "virtual world" that evolves over a simulated academic year. An agent's success is not just about solving the immediate problem, but about managing their time, remembering commitments, and navigating a complex web of academic and social responsibilities that persist across hundreds of tasks.

[https://github.com/ECNU-ICALK/ELL-StuLife/blob/main/imgs/stulife_fig1.png?raw=true](https://github.com/ECNU-ICALK/ELL-StuLife/blob/main/imgs/stulife_fig1.png?raw=true)

## What is StuLife 🧐?

[https://github.com/ecnu-icalk/ell-stulife#what-is-stulife-](https://github.com/ecnu-icalk/ell-stulife#what-is-stulife-)

We also introduce `StuLife`, a benchmark dataset for ELL that simulates a student’s holistic college journey—from enrollment to academic and personal development—across three core phases and ten detailed sub-scenarios.

`StuLife` is designed around three key paradigm shifts:

- **From Passive to Proactive**
- **From Context to Memory**
- **From Imitation to Learning**

It features a dynamic, interactive environment in which tasks are highly interconnected, and critical state variables—such as GPA, course availability, advisor relationships, and time—evolve based on the agent’s decisions. Agents must: 1) Autonomously acquire practical skills (e.g., course registration, scheduling, navigation, and communication), 2) Distill experiences into reusable knowledge, and 3) Maintain persistent memory to support future decision-making. Crucially, they are expected to exhibit intrinsic motivation by setting goals, anticipating future needs, and initiating actions without external prompting.

`StuLife` provides a comprehensive platform for evaluating lifelong learning capabilities, including memory retention, skill transfer, and autonomous, goal-directed behavior.

Beyond evaluating state-of-the-art LLMs on the `StuLife` benchmark, we also **explore the role of context engineering in advancing AGI**. Our results suggest that optimizing how we guide models may be as crucial as improving the models themselves, positioning context engineering as a key enabler of progress toward AGI.

[https://github.com/ECNU-ICALK/ELL-StuLife/blob/main/imgs/stulife_fig2.png?raw=true](https://github.com/ECNU-ICALK/ELL-StuLife/blob/main/imgs/stulife_fig2.png?raw=true)

## Core Concepts

[https://github.com/ecnu-icalk/ell-stulife#core-concepts](https://github.com/ecnu-icalk/ell-stulife#core-concepts)

StuLife is founded on three key principles to challenge the frontiers of agent intelligence:

- 

**Persistent World**: The campus environment is a single, continuous Python object (`CampusEnvironment`). Every action an agent takes—from sending an email to reserving a study room—permanently alters the state of this world. A booked room remains booked for all subsequent tasks. This creates a single source of truth and forces the agent to deal with the long-term consequences of its decisions.

- 

**Stateful & Dynamic Subsystems**: The world is composed of multiple interconnected subsystems (e.g., calendar, course selection, geography) that are dynamic and stateful. Course popularity fluctuates, room availability changes, and the agent's location persists between tasks. This requires the agent to constantly query the latest state of the world before acting, rather than relying on outdated information.

- 

**Time-Driven & Self-Directed Tasks**: Agents are not always given explicit instructions. Instead, they operate on a simulated clock and must autonomously consult their internal calendar to understand "what to do next." Whether it's attending a class at 8:00 AM or a club meeting in the evening, the agent must demonstrate a sense of time and initiative, driven by the schedule it builds for itself.

## Architecture Overview

[https://github.com/ecnu-icalk/ell-stulife#architecture-overview](https://github.com/ecnu-icalk/ell-stulife#architecture-overview)

The benchmark's architecture is designed for simplicity and robustness, separating the world simulation from task execution.

- 

**`CampusEnvironment`**: The "world simulator." A long-running Python class that instantiates and manages all subsystems (email, map, etc.). It maintains the global state and exposes a unified set of tools (APIs) for the agent to interact with the world. It contains no task-specific logic.

- 

**`CampusTask`**: The "task controller." It loads task descriptions, presents them to the agent, and injects necessary context (like the current time and rules). It receives the agent's actions, executes them against the `CampusEnvironment`'s tools, and returns the results.

- 

**`ToolManager` (Conceptual)**: A utility responsible for generating a `tools.json` file by reflecting on the methods exposed by `CampusEnvironment`. This provides the agent with a machine-readable, always-up-to-date manual of available tools and their usage.

## Simulated Subsystems

[https://github.com/ecnu-icalk/ell-stulife#simulated-subsystems](https://github.com/ecnu-icalk/ell-stulife#simulated-subsystems)

StuLife's virtual campus is powered by a rich set of interconnected subsystems, each designed to test different facets of an agent's reasoning and planning abilities:

- **World Time & Calendar System**: Manages the flow of simulated time and allows the agent to manage personal, club, and academic schedules with different permission levels.
- **Map & Geography System**: A deterministic system for navigating the campus. Agents must first find building IDs and plan optimal paths before they can physically move. Their location is persistent.
- **Course Selection System**: A dynamic system where agents browse courses, manage a draft schedule, and use priority passes to register. Course popularity and seat availability change based on world events.
- **Reservation System**: A global booking system for rooms and facilities. A successful reservation permanently alters the availability for all future tasks, testing the agent's ability to plan around resource contention.
- **Email & Information System**: Allows agents to send formatted emails and query a rich, read-only database of campus information, from academic regulations in the Student Handbook to details about student clubs.

## How It Works: The Interaction Flow

[https://github.com/ecnu-icalk/ell-stulife#how-it-works-the-interaction-flow](https://github.com/ecnu-icalk/ell-stulife#how-it-works-the-interaction-flow)

An agent's life in StuLife follows a continuous `perceive -> think -> act` loop, driven by a series of time-based tasks.

1. **Context Injection**: At the start of a task, the `CampusTask` provides the agent with the current simulated time and date (e.g., "Current time: Week 1, Monday 14:00").
2. **Perception & Planning**: The agent perceives the time. An advanced agent might check its calendar to see what it's supposed to be doing. For example, it sees a "Study Session" scheduled at the library.
3. **Action - Querying**: The agent checks its current location using `geography.get_current_location()`. It finds it's not at the library.
4. **Action - Planning**: It uses `map.find_optimal_path` to get the walking route to the library.
5. **Action - Execution**: It uses `geography.walk_to` with the calculated path to move to the library.
6. **State Change & Verification**: The `CampusEnvironment` updates the agent's location. The task might require the agent to be at the library (`require_place` check) before it can be completed.
7. **Task Completion**: Once all conditions are met, the agent calls the `finish()` action.

## Evaluation

[https://github.com/ecnu-icalk/ell-stulife#evaluation](https://github.com/ecnu-icalk/ell-stulife#evaluation)

Evaluation in StuLife goes beyond simple correctness. A task is marked as successful only if the agent achieves the desired final state while respecting all constraints. The `CampusTask` assesses performance by:

- **State Validation**: Checking if the final state of the `CampusEnvironment` matches the task's ground truth. (e.g., Was the correct course added? Was the right email sent to the right person?).
- **Constraint Satisfaction**: Verifying that all implicit and explicit task constraints were met (e.g., Was the meeting booked in the required building? Did the agent arrive on time?).
- **Behavioral Sequence Validation**: For complex tasks, ensuring the agent followed a logical sequence of actions (e.g., checking availability *before* making a reservation).

## Dataset Overview

[https://github.com/ecnu-icalk/ell-stulife#dataset-overview](https://github.com/ecnu-icalk/ell-stulife#dataset-overview)

The benchmark includes a comprehensive dataset of **1284 tasks** spanning a full academic year. These tasks cover a wide range of scenarios, including:

- Academic integrity and rule learning
- Campus exploration and facility location
- Course selection and schedule management
- Attending 8 different multi-session courses
- Interacting with academic advisors
- Library resource usage and seat booking
- Midterm and final exams
- Joining and participating in student clubs

## 🚀 Getting Started & Running an Experiment

[https://github.com/ecnu-icalk/ell-stulife#-getting-started--running-an-experiment](https://github.com/ecnu-icalk/ell-stulife#-getting-started--running-an-experiment)

This section provides a comprehensive guide to setting up the environment and running a StuLife experiment. The following instructions assume you are in a bash shell environment.

### 1. Prerequisites

[https://github.com/ecnu-icalk/ell-stulife#1-prerequisites](https://github.com/ecnu-icalk/ell-stulife#1-prerequisites)

- **Conda**: Ensure you have Miniconda or Anaconda installed to manage the environment.
- **CUDA**: A compatible version of the CUDA Toolkit must be installed for GPU acceleration.

### 2. Environment Setup

[https://github.com/ecnu-icalk/ell-stulife#2-environment-setup](https://github.com/ecnu-icalk/ell-stulife#2-environment-setup)

First, clone the repository and prepare the Conda environment.

```
# Activate your conda environment
# (Replace 'stulife' with your environment name if different)
conda activate stulife

# Navigate to the project's root directory
# IMPORTANT: All subsequent commands must be run from this directory.
cd /path/to/your/framework/Stulife

echo "Current working directory: $(pwd)"
```

### 3. Configure Environment Variables

[https://github.com/ecnu-icalk/ell-stulife#3-configure-environment-variables](https://github.com/ecnu-icalk/ell-stulife#3-configure-environment-variables)

Before running the experiment, you need to configure several environment variables. You can save the following script as `setup_env.sh` in the project root and source it, or run the commands directly in your terminal.

```
#!/bin/bash

# --- Environment Variables Configuration ---
echo ">>> Configuring environment variables..."

# Set Hugging Face to offline mode to use local models
export HF_HOME=/path/to/your/model/cache # e.g., /data/model
export HF_HUB_OFFLINE=1
export TRANSFORMERS_OFFLINE=1

# Add Conda and Python paths
export CPATH="${CONDA_PREFIX}/include:${CPATH}"
# Set PYTHONPATH to the project root for module resolution
export PYTHONPATH=.

# Setup CUDA runtime environment
# (Update CUDA_HOME to your CUDA installation path)
export CUDA_HOME=/path/to/your/cuda # e.g., /data/ljs/cuda-12.1
export PATH=${CUDA_HOME}/bin:${PATH}
export LD_LIBRARY_PATH=${CUDA_HOME}/lib:${LD_LIBRARY_PATH}

# Set PyTorch memory allocation policy
export PYTORCH_CUDA_ALLOC_CONF=expandable_segments:True

echo ">>> Environment variables configured."
```

To execute it:

```
source setup_env.sh
```

### 4. Run the Experiment

[https://github.com/ecnu-icalk/ell-stulife#4-run-the-experiment](https://github.com/ecnu-icalk/ell-stulife#4-run-the-experiment)

With the environment set up, you can now run an experiment using `run_experiment.py`. The script requires a path to a configuration file. All paths should be relative to the `Stulife` directory.

```
# --- Execute the Core Task ---
# Example using a local test configuration
# Note the relative path from the project root.
python ./src/run_experiment.py --config_path "../task_data/config/run_local_test.yaml"
```

### 4. Contcat

[https://github.com/ecnu-icalk/ell-stulife#4-contcat](https://github.com/ecnu-icalk/ell-stulife#4-contcat)

If you have any questions, please feel free to contact the authors (e.g., [jzhou@cs.ecnu.edu.cn](mailto:jzhou@cs.ecnu.edu.cn)) as we may not see the issue in time.

## About

         Self-Evolving Agent via Experience-Driven Lifelong Learning       

### Resources
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

