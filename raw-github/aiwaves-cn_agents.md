---
repo: aiwaves-cn/agents
url: https://github.com/aiwaves-cn/agents
content_timestamp: 2024-06-25
time_slice: 2024-Q2
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - aiwaves-cn/agents: An Open-source Framework for Data-centric, Self-evolving Autonomous Language Agents · GitHub

**Source**: https://github.com/aiwaves-cn/agents

---

[Skip to content](https://github.com/aiwaves-cn/agents#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[aiwaves-cn](https://github.com/aiwaves-cn)

/
**[agents](https://github.com/aiwaves-cn/agents)**

Public

- [Notifications](https://github.com/login?return_to=%2Faiwaves-cn%2Fagents)You must be signed in to change notification settings
- [Fork
    482](https://github.com/login?return_to=%2Faiwaves-cn%2Fagents)
- 
[Star
          5.9k](https://github.com/login?return_to=%2Faiwaves-cn%2Fagents)

[https://github.com/aiwaves-cn/agents](https://github.com/aiwaves-cn/agents)

[Branches](https://github.com/aiwaves-cn/agents/branches)[Tags](https://github.com/aiwaves-cn/agents/tags)

[https://github.com/aiwaves-cn/agents/branches](https://github.com/aiwaves-cn/agents/branches)[https://github.com/aiwaves-cn/agents/tags](https://github.com/aiwaves-cn/agents/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History1,325 Commits1,325 Commits |  |  |  |
| assets | assets |  |  |
| examples | examples |  |  |
| src/agents | src/agents |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| requirements.txt | requirements.txt |  |  |
| setup.py | setup.py |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/aiwaves-cn/agents/blob/master/assets/agents-logo.png](https://github.com/aiwaves-cn/agents/blob/master/assets/agents-logo.png)

## 

Agents 2.0: Symbolic Learning Enables Self-Evolving Agents

[https://github.com/aiwaves-cn/agents#agents-20-symbolic-learning-enables-self-evolving-agents](https://github.com/aiwaves-cn/agents#agents-20-symbolic-learning-enables-self-evolving-agents)

[[🤖Project]](https://aiwaves-cn.github.io/agents/)[[📄Paper]](https://arxiv.org/abs/2406.18532)[[📝Docs]](https://agentsv2.readthedocs.io/)[[🌟Overview]](https://github.com/aiwaves-cn/agents#overview)[[🔧Installation]](https://github.com/aiwaves-cn/agents#installation)[[🚩Citation]](https://github.com/aiwaves-cn/agents#citation)

[https://camo.githubusercontent.com/b951909e82b1527095a313fa2daec4a70645ddc9e8b8e2310394961f794b5d7d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f76657273696f6e2d76322e302e302d626c7565](https://camo.githubusercontent.com/b951909e82b1527095a313fa2daec4a70645ddc9e8b8e2310394961f794b5d7d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f76657273696f6e2d76322e302e302d626c7565)[https://opensource.org/license/apache-2-0](https://opensource.org/license/apache-2-0)[https://camo.githubusercontent.com/03dd77628fcf3d76220ac802a503d9c78e7df6916973c1273927e470d255b8db/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6173742d636f6d6d69742f616977617665732d636e2f6167656e74733f636f6c6f723d677265656e](https://camo.githubusercontent.com/03dd77628fcf3d76220ac802a503d9c78e7df6916973c1273927e470d255b8db/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6173742d636f6d6d69742f616977617665732d636e2f6167656e74733f636f6c6f723d677265656e)[https://camo.githubusercontent.com/fa01e9f119c993564fff9af95629193b044b998c3eaca7e3b411a1065578cdcd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d57656c636f6d652d726564](https://camo.githubusercontent.com/fa01e9f119c993564fff9af95629193b044b998c3eaca7e3b411a1065578cdcd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d57656c636f6d652d726564)

---

## 🔔News

[https://github.com/aiwaves-cn/agents#news](https://github.com/aiwaves-cn/agents#news)

- [2024-06-25] We release [Agents](https://agentsv2.readthedocs.io/en/latest/) 2.0, a major update to the original library, adding support for agent learning and evaluation.

---

## 🌟Overview

[https://github.com/aiwaves-cn/agents#overview](https://github.com/aiwaves-cn/agents#overview)

Agent symbolic learning is a systematic framework for training language agents, which is inspired by the connectionist learning procedure used for training neural nets. We make an analogy between language agents and neural nets: the agent pipeline of an agent corresponds to the computational graph of a neural net, a node in the agent pipeline corresponds to a layer in the neural net, and the prompts and tools for a node correspond to the weights of a layer. In this way, we are able to implement the main components of connectionist learning, i.e., backward propagation and gradient-based weight update, in the context of agent training using language-based loss, gradients, and weights.

[https://github.com/aiwaves-cn/agents/blob/master/assets/overview.png](https://github.com/aiwaves-cn/agents/blob/master/assets/overview.png)

We implement loss function, back-propagation, and weight optimizer in the context of agent training with carefully designed prompt pipelines. For a training example, our framework first conducts the "forward pass" (agent execution) and stores the input, output, prompts, and tool usage in each node in a "trajectory". We then use a prompt-based loss function to evaluate the outcome, resulting in a "language loss". Afterward, we back-propagate the language loss from the last to the first node along the trajectory, resulting in textual analyses and reflections for the symbolic components within each node, we call them language gradients. Finally, we update all symbolic components in each node, as well as the computational graph consisting of the nodes and their connections, according to the language gradients with another carefully designed prompt. Our approach also naturally supports optimizing multi-agent systems by considering nodes as different agents or allowing multiple agents to take actions in one node.

### Workflow Illustration

[https://github.com/aiwaves-cn/agents#workflow-illustration](https://github.com/aiwaves-cn/agents#workflow-illustration)

[https://github.com/aiwaves-cn/agents/blob/master/assets/workflow.gif](https://github.com/aiwaves-cn/agents/blob/master/assets/workflow.gif)

---

## 🔧Installation

[https://github.com/aiwaves-cn/agents#installation](https://github.com/aiwaves-cn/agents#installation)

**Installation from git repo branch:**

```
pip install git+https://github.com/aiwaves-cn/agents@master
```

**Installation for local development:**

```
git clone -b master https://github.com/aiwaves-cn/agents
cd agents
pip install -e .
```

---

## ⭐ Star History

[https://github.com/aiwaves-cn/agents#-star-history](https://github.com/aiwaves-cn/agents#-star-history)

[https://star-history.com/#aiwaves-cn/agents&Date](https://star-history.com/#aiwaves-cn/agents&Date)

---

## 🚩Citation

[https://github.com/aiwaves-cn/agents#citation](https://github.com/aiwaves-cn/agents#citation)

If you find our repository useful in your research, please kindly consider cite:

```
@article{zhou2024agents2,
      title={Symbolic Learning Enables Self-Evolving Agents}, 
      author={Wangchunshu Zhou and Yixin Ou and Shengwei Ding and Long Li and Jialong Wu and Tiannan Wang and Jiamin Chen and Shuai Wang and Xiaohua Xu and Ningyu Zhang and Huajun Chen and Yuchen Eleanor Jiang},
      year={2024},
      eprint={2406.18532},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2406.18532}, 
}

@article{zhou2023agents,
      title={Agents: An Open-source Framework for Autonomous Language Agents}, 
      author={Wangchunshu Zhou and Yuchen Eleanor Jiang and Long Li and Jialong Wu and Tiannan Wang and Shi Qiu and Jintian Zhang and Jing Chen and Ruipu Wu and Shuai Wang and Shiding Zhu and Jiyu Chen and Wentao Zhang and Xiangru Tang and Ningyu Zhang and Huajun Chen and Peng Cui and Mrinmaya Sachan},
      year={2023},
      eprint={2309.07870},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2309.07870}, 
}
```

## About

         An Open-source Framework for Data-centric, Self-evolving Autonomous Language Agents       

### Topics

[language-model](https://github.com/topics/language-model)[autonomous-agents](https://github.com/topics/autonomous-agents)[llm](https://github.com/topics/llm)

### Resources

[Readme](https://github.com/aiwaves-cn/agents#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/aiwaves-cn/agents#Apache-2.0-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/aiwaves-cn/agents/activity)

[Custom properties](https://github.com/aiwaves-cn/agents/custom-properties)

### Stars

[5.9k
        stars](https://github.com/aiwaves-cn/agents/stargazers)

### Watchers

[60
        watching](https://github.com/aiwaves-cn/agents/watchers)

### Forks

[482
        forks](https://github.com/aiwaves-cn/agents/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Faiwaves-cn%2Fagents&report=aiwaves-cn+%28user%29)

## [Releases](https://github.com/aiwaves-cn/agents/releases)

No releases published

## [Packages
      0](https://github.com/orgs/aiwaves-cn/packages?repo_name=agents)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/aiwaves-cn/agents/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/aiwaves-cn/agents/search?l=python)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2024-06-25
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q2
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

