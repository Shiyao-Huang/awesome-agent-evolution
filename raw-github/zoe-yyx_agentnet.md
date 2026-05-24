---
repo: zoe-yyx/agentnet
url: https://github.com/zoe-yyx/agentnet
content_timestamp: 2025-04-22
time_slice: 2025-04
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - zoe-yyx/AgentNet: [NIPS2025] A decentralized, RAG-enhanced multi-agent framework for LLMs with dynamic task routing and agent evolution. · GitHub

**Source**: https://github.com/zoe-yyx/agentnet

---

[Skip to content](https://github.com/zoe-yyx/agentnet#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[zoe-yyx](https://github.com/zoe-yyx)

/
**[AgentNet](https://github.com/zoe-yyx/AgentNet)**

Public

- [Notifications](https://github.com/login?return_to=%2Fzoe-yyx%2FAgentNet)You must be signed in to change notification settings
- [Fork
    3](https://github.com/login?return_to=%2Fzoe-yyx%2FAgentNet)
- 
[Star
          46](https://github.com/login?return_to=%2Fzoe-yyx%2FAgentNet)

[https://github.com/zoe-yyx/AgentNet](https://github.com/zoe-yyx/AgentNet)

[Branches](https://github.com/zoe-yyx/AgentNet/branches)[Tags](https://github.com/zoe-yyx/AgentNet/tags)

[https://github.com/zoe-yyx/AgentNet/branches](https://github.com/zoe-yyx/AgentNet/branches)[https://github.com/zoe-yyx/AgentNet/tags](https://github.com/zoe-yyx/AgentNet/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History70 Commits70 Commits |  |  |  |
| AgentNet_Code | AgentNet_Code |  |  |
| Figure | Figure |  |  |
| Video | Video |  |  |
| .DS_Store | .DS_Store |  |  |
| AgentNet.pdf | AgentNet.pdf |  |  |
| readme.md | readme.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# 🌐 [NIPS2025] AgentNet: Decentralized Evolutionary Coordination for LLM-Based Multi-Agent Systems

[https://github.com/zoe-yyx/agentnet#-nips2025-agentnet-decentralized-evolutionary-coordination-for-llm-based-multi-agent-systems](https://github.com/zoe-yyx/agentnet#-nips2025-agentnet-decentralized-evolutionary-coordination-for-llm-based-multi-agent-systems)

This is the official implementation of the paper "AgentNet: Decentralized Evolutionary Coordination for LLM-Based Multi-Agent Systems" accepted by Neurips 2025.

**AgentNet** is a novel framework for building **decentralized, privacy-preserving, and adaptive multi-agent systems (MAS)** powered by large language models (LLMs). It addresses the limitations of traditional MAS architectures that rely on centralized controllers and static workflows.

> 📄 **Paper Title**: *AgentNet: Decentralized Evolutionary Coordination for LLM-Based Multi-Agent Systems*

> 👨‍🔬 Authors: Yingxuan Yang*, Huacan Chai*, Shuai Shao, Yuanyi Song, Siyuan Qi, Renting Rui, Weinan Zhang

> 🏫 Affiliation: Shanghai Jiao Tong University

> 📎 [arXiv:2504.00587](https://arxiv.org/abs/2504.00587)

---

## 🧱 AgentNet Architecture

[https://github.com/zoe-yyx/agentnet#-agentnet-architecture](https://github.com/zoe-yyx/agentnet#-agentnet-architecture)

This figure illustrates the overall architecture of AgentNet. It consists of multiple LLM-based agents connected in a dynamic, decentralized Directed Acyclic Graph (DAG). Each agent has its own retrieval-augmented memory, local routing strategy, and can evolve independently.

[https://github.com/zoe-yyx/AgentNet/blob/main/Figure/llutration%20of%20AgentNet.png](https://github.com/zoe-yyx/AgentNet/blob/main/Figure/llutration%20of%20AgentNet.png)

---

## 🚀 Key Innovations

[https://github.com/zoe-yyx/agentnet#-key-innovations](https://github.com/zoe-yyx/agentnet#-key-innovations)

- 

**🧠 Fully Decentralized Architecture**
 No central coordinator. Every agent makes autonomous routing and execution decisions, improving fault tolerance and enabling emergent collaboration.

- 

**🔀 Dynamically Evolving DAG Topology**
 Agent connections adapt in real time based on task success metrics, forming a Directed Acyclic Graph (DAG) that optimizes collaboration.

- 

**📚 Retrieval-Augmented Adaptive Learning**
 Agents store and retrieve relevant memory fragments from past tasks to refine their expertise over time, supporting continuous specialization.

---

## 🧭 Why AgentNet over Traditional Architectures?

[https://github.com/zoe-yyx/agentnet#-why-agentnet-over-traditional-architectures](https://github.com/zoe-yyx/agentnet#-why-agentnet-over-traditional-architectures)

This illustration compares conventional **Pre-Defined Multi-Agent Systems** (which are hierarchical, static, and prone to single points of failure) with **AgentNet**, which is fully decentralized, self-evolving, and dynamically specialized.

[https://github.com/zoe-yyx/AgentNet/blob/main/Figure/compare_systems.png](https://github.com/zoe-yyx/AgentNet/blob/main/Figure/compare_systems.png)

AgentNet enables fault-tolerant collaboration and adaptive skill growth without needing predefined roles or a central controller.

---

## 🎥 Demo: Agent Collaboration, Task Processing, and Specialization in Action

[https://github.com/zoe-yyx/agentnet#-demo-agent-collaboration-task-processing-and-specialization-in-action](https://github.com/zoe-yyx/agentnet#-demo-agent-collaboration-task-processing-and-specialization-in-action)

The following animation provides a comprehensive demonstration of AgentNet's decentralized multi-agent coordination:

- How tasks are dynamically **routed, forwarded, split, and executed** across agents
- How agents **adapt and evolve their capabilities** based on their past performance
- The emergence of **specialized agent roles** over time

[https://github.com/zoe-yyx/AgentNet/blob/main/Video/Recording_Agentnet.gif](https://github.com/zoe-yyx/AgentNet/blob/main/Video/Recording_Agentnet.gif)

📹 [Watch Full Video Demo](https://github.com/zoe-yyx/AgentNet/blob/main/Video/Recording%202025-04-22%20235246%20(online-video-cutter.com).mp4)

## 📌 Citation

[https://github.com/zoe-yyx/agentnet#-citation](https://github.com/zoe-yyx/agentnet#-citation)

If you use AgentNet in your research, please cite us as follows:

```
@misc{yang2025agentnetdecentralizedevolutionarycoordination,
  title={AgentNet: Decentralized Evolutionary Coordination for LLM-based Multi-Agent Systems}, 
  author={Yingxuan Yang and Huacan Chai and Shuai Shao and Yuanyi Song and Siyuan Qi and Renting Rui and Weinan Zhang},
  year={2025},
  eprint={2504.00587},
  archivePrefix={arXiv},
  primaryClass={cs.MA},
  url={https://arxiv.org/abs/2504.00587}
}
```

## About

         [NIPS2025] A decentralized, RAG-enhanced multi-agent framework for LLMs with dynamic task routing and agent evolution.       

[arxiv.org/abs/2504.00587](https://arxiv.org/abs/2504.00587)

### Topics

[coordination](https://github.com/topics/coordination)[decentralization](https://github.com/topics/decentralization)[multi-agent-systems](https://github.com/topics/multi-agent-systems)[few-shot-learning](https://github.com/topics/few-shot-learning)[rag](https://github.com/topics/rag)[agentnet](https://github.com/topics/agentnet)[lamas](https://github.com/topics/lamas)[llm](https://github.com/topics/llm)

### Resources

[Readme](https://github.com/zoe-yyx/agentnet#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/zoe-yyx/AgentNet/activity)

### Stars

[46
        stars](https://github.com/zoe-yyx/AgentNet/stargazers)

### Watchers

[0
        watching](https://github.com/zoe-yyx/AgentNet/watchers)

### Forks

[3
        forks](https://github.com/zoe-yyx/AgentNet/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fzoe-yyx%2FAgentNet&report=zoe-yyx+%28user%29)

## [Releases](https://github.com/zoe-yyx/AgentNet/releases)

No releases published

## [Packages
      0](https://github.com/users/zoe-yyx/packages?repo_name=AgentNet)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/zoe-yyx/AgentNet/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/zoe-yyx/AgentNet/search?l=python)

     You can’t perform that action at this time.
