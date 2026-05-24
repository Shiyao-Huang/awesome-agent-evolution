---
repo: haotang1995/worldcoder
url: https://github.com/haotang1995/worldcoder
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - haotang1995/WorldCoder · GitHub

**Source**: https://github.com/haotang1995/worldcoder

---

[Skip to content](https://github.com/haotang1995/worldcoder#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[haotang1995](https://github.com/haotang1995)

/
**[WorldCoder](https://github.com/haotang1995/WorldCoder)**

Public

- [Notifications](https://github.com/login?return_to=%2Fhaotang1995%2FWorldCoder)You must be signed in to change notification settings
- [Fork
    3](https://github.com/login?return_to=%2Fhaotang1995%2FWorldCoder)
- 
[Star
          11](https://github.com/login?return_to=%2Fhaotang1995%2FWorldCoder)

[https://github.com/haotang1995/WorldCoder](https://github.com/haotang1995/WorldCoder)

[Branches](https://github.com/haotang1995/WorldCoder/branches)[Tags](https://github.com/haotang1995/WorldCoder/tags)

[https://github.com/haotang1995/WorldCoder/branches](https://github.com/haotang1995/WorldCoder/branches)[https://github.com/haotang1995/WorldCoder/tags](https://github.com/haotang1995/WorldCoder/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History4 Commits4 Commits |  |  |  |
| assets | assets |  |  |
| worldcoder | worldcoder |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# WorldCoder, a Model-Based LLM Agent: Building World Models by Writing Code and Interacting with the Environment

[https://github.com/haotang1995/worldcoder#worldcoder-a-model-based-llm-agent-building-world-models-by-writing-code-and-interacting-with-the-environment](https://github.com/haotang1995/worldcoder#worldcoder-a-model-based-llm-agent-building-world-models-by-writing-code-and-interacting-with-the-environment)

This is the official codebase of the paper

[WorldCoder, a Model-Based LLM Agent: Building World Models by Writing Code and Interacting with the Environment](https://arxiv.org/pdf/2402.12275)
[Hao Tang](https://haotang1995.github.io/), [Darren Key](https://darrenkey.github.io/), and [Kevin Ellis](https://www.cs.cornell.edu/~ellisk/)

## Overview

[https://github.com/haotang1995/worldcoder#overview](https://github.com/haotang1995/worldcoder#overview)

We give a model-based agent that builds a Python program representing its knowledge of the world based on its interactions with the environment. The world model tries to explain its interactions, while also being optimistic about what reward it can achieve. We define this optimism as a logical constraint between a program and a planner. We study our agent on gridworlds, and on task planning, finding our approach is more sample-efficient compared to deep RL, more compute-efficient compared to ReAct-style agents, and that it can transfer its knowledge across environments by editing its code. [https://github.com/haotang1995/WorldCoder/blob/main/assets/framework.jpg](https://github.com/haotang1995/WorldCoder/blob/main/assets/framework.jpg)[https://github.com/haotang1995/WorldCoder/blob/main/assets/comparison.jpg](https://github.com/haotang1995/WorldCoder/blob/main/assets/comparison.jpg)

## Installation

[https://github.com/haotang1995/worldcoder#installation](https://github.com/haotang1995/worldcoder#installation)

```
pip install -r requirements.txt
```

Note that the codes were implemented with the old numpy, gymnasium, and minigrid. They are not adapted to e.g., the new `__str__` in numpy >= 2.0. Please check requirements.txt for details.

## Run the agent and the experiments

[https://github.com/haotang1995/worldcoder#run-the-agent-and-the-experiments](https://github.com/haotang1995/worldcoder#run-the-agent-and-the-experiments)

```
python -m worldcoder.learn --env sokoban --seed 0 --max_llm_requests 500
```

## About

         No description, website, or topics provided.       

### Resources

[Readme](https://github.com/haotang1995/worldcoder#readme-ov-file)

### License

[MIT license](https://github.com/haotang1995/worldcoder#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/haotang1995/WorldCoder/activity)

### Stars

[11
        stars](https://github.com/haotang1995/WorldCoder/stargazers)

### Watchers

[1
        watching](https://github.com/haotang1995/WorldCoder/watchers)

### Forks

[3
        forks](https://github.com/haotang1995/WorldCoder/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fhaotang1995%2FWorldCoder&report=haotang1995+%28user%29)

## [Releases](https://github.com/haotang1995/WorldCoder/releases)

No releases published

## [Packages
      0](https://github.com/users/haotang1995/packages?repo_name=WorldCoder)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/haotang1995/WorldCoder/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/haotang1995/WorldCoder/search?l=python)

     You can’t perform that action at this time.
