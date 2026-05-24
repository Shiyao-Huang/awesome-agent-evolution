---
repo: knowledgexlab/muse
url: https://github.com/knowledgexlab/muse
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - KnowledgeXLab/MUSE: Learning on the Job: An Experience-Driven, Self-Evolving Agent for Long-Horizon Tasks · GitHub

**Source**: https://github.com/knowledgexlab/muse

---

[Skip to content](https://github.com/knowledgexlab/muse#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[KnowledgeXLab](https://github.com/KnowledgeXLab)

/
**[MUSE](https://github.com/KnowledgeXLab/MUSE)**

Public

- [Notifications](https://github.com/login?return_to=%2FKnowledgeXLab%2FMUSE)You must be signed in to change notification settings
- [Fork
    27](https://github.com/login?return_to=%2FKnowledgeXLab%2FMUSE)
- 
[Star
          88](https://github.com/login?return_to=%2FKnowledgeXLab%2FMUSE)

[https://github.com/KnowledgeXLab/MUSE](https://github.com/KnowledgeXLab/MUSE)

[Branches](https://github.com/KnowledgeXLab/MUSE/branches)[Tags](https://github.com/KnowledgeXLab/MUSE/tags)

[https://github.com/KnowledgeXLab/MUSE/branches](https://github.com/KnowledgeXLab/MUSE/branches)[https://github.com/KnowledgeXLab/MUSE/tags](https://github.com/KnowledgeXLab/MUSE/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History6 Commits6 Commits |  |  |  |
| memory | memory |  |  |
| misc | misc |  |  |
| prompt | prompt |  |  |
| toolbox | toolbox |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| agent.py | agent.py |  |  |
| browser.py | browser.py |  |  |
| config.yaml | config.yaml |  |  |
| demo.py | demo.py |  |  |
| log.py | log.py |  |  |
| memory_manager.py | memory_manager.py |  |  |
| model.py | model.py |  |  |
| monitor.py | monitor.py |  |  |
| report.py | report.py |  |  |
| requirements.txt | requirements.txt |  |  |
| run.py | run.py |  |  |
| tool.py | tool.py |  |  |
| utils.py | utils.py |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/KnowledgeXLab/MUSE/blob/main/misc/teaser.png](https://github.com/KnowledgeXLab/MUSE/blob/main/misc/teaser.png)

# 🧠 MUSE: A Memory-Utilizing and Self-Evolving Agent

[https://github.com/knowledgexlab/muse#-muse-a-memory-utilizing-and-self-evolving-agent](https://github.com/knowledgexlab/muse#-muse-a-memory-utilizing-and-self-evolving-agent)

> **Learning on the Job: An Experience-Driven, Self-Evolving Agent for Long-Horizon Tasks**
>  📄 [Paper on arXiv (2510.08002)](https://arxiv.org/abs/2510.08002)

---

## ✨ Abstract

[https://github.com/knowledgexlab/muse#-abstract](https://github.com/knowledgexlab/muse#-abstract)

Large Language Models have demonstrated remarkable capabilities across diverse domains, yet significant challenges persist when deploying them as AI agents for real-world long-horizon tasks. Existing LLM agents suffer from a critical limitation: they are test-time static and cannot learn from experience, lacking the ability to accumulate knowledge and continuously improve on the job. To address this challenge, we propose MUSE, a novel agent framework that introduces an experience-driven, self-evolving system centered around a hierarchical Memory Module. MUSE organizes diverse levels of experience and leverages them to plan and execute long-horizon tasks across multiple applications. After each sub-task execution, the agent autonomously reflects on its trajectory, converting the raw trajectory into structured experience and integrating it back into the Memory Module. This mechanism enables the agent to evolve beyond its static pretrained parameters, fostering continuous learning and self-evolution. We evaluate MUSE on the long-horizon productivity benchmark TAC. It achieves new SOTA performance by a significant margin using only a lightweight Gemini-2.5 Flash model. Sufficient Experiments demonstrate that as the agent autonomously accumulates experience, it exhibits increasingly superior task completion capabilities, as well as robust continuous learning and self-evolution capabilities. Moreover, the accumulated experience from MUSE exhibits strong generalization properties, enabling zero-shot improvement on new tasks. MUSE establishes a new paradigm for AI agents capable of real-world productivity task automation.

---

## 🏆 Benchmark Performance

[https://github.com/knowledgexlab/muse#-benchmark-performance](https://github.com/knowledgexlab/muse#-benchmark-performance)

MUSE ranks **#1** on [The Agent Company Benchmark Leaderboard](https://the-agent-company.com/#/leaderboard).

[https://github.com/KnowledgeXLab/MUSE/blob/main/misc/TAC_rank1.png](https://github.com/KnowledgeXLab/MUSE/blob/main/misc/TAC_rank1.png)

---

## 🚀 Quick Start

[https://github.com/knowledgexlab/muse#-quick-start](https://github.com/knowledgexlab/muse#-quick-start)

### Step 1: Environment Setup

[https://github.com/knowledgexlab/muse#step-1-environment-setup](https://github.com/knowledgexlab/muse#step-1-environment-setup)

```
conda create -n MUSE python=3.12
conda activate MUSE
pip install -r requirements.txt
playwright install chromium
playwright install-deps chromium
```

### Step 2: Run Local Demo

[https://github.com/knowledgexlab/muse#step-2-run-local-demo](https://github.com/knowledgexlab/muse#step-2-run-local-demo)

```
python demo.py
```

---

## 🧪 Run TAC Benchmark

[https://github.com/knowledgexlab/muse#-run-tac-benchmark](https://github.com/knowledgexlab/muse#-run-tac-benchmark)

To evaluate MUSE on **The Agent Company Benchmark**, please follow the detailed setup in: 👉 [TheAgentCompanyForMuse Repository](https://github.com/KnowledgeXLab/TheAgentCompanyForMuse)

---

## 🎥 Demo Showcase

[https://github.com/knowledgexlab/muse#-demo-showcase](https://github.com/knowledgexlab/muse#-demo-showcase)

**Task 1:***HR - Internal Tooling Slides*

[https://www.youtube.com/watch?v=8pK3SP0ZG4k&feature=youtu.be](https://www.youtube.com/watch?v=8pK3SP0ZG4k&feature=youtu.be)

**Task 2:***PM - Updates Plane Issue from GitLab Status*

[https://www.youtube.com/watch?v=hsM0FB9uVhs&feature=youtu.be](https://www.youtube.com/watch?v=hsM0FB9uVhs&feature=youtu.be)

## About

         Learning on the Job: An Experience-Driven, Self-Evolving Agent for Long-Horizon Tasks       

### Resources

[Readme](https://github.com/knowledgexlab/muse#readme-ov-file)

### License

[MIT license](https://github.com/knowledgexlab/muse#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/KnowledgeXLab/MUSE/activity)

[Custom properties](https://github.com/KnowledgeXLab/MUSE/custom-properties)

### Stars

[88
        stars](https://github.com/KnowledgeXLab/MUSE/stargazers)

### Watchers

[1
        watching](https://github.com/KnowledgeXLab/MUSE/watchers)

### Forks

[27
        forks](https://github.com/KnowledgeXLab/MUSE/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FKnowledgeXLab%2FMUSE&report=KnowledgeXLab+%28user%29)

## [Releases](https://github.com/KnowledgeXLab/MUSE/releases)

No releases published

## [Packages
      0](https://github.com/orgs/KnowledgeXLab/packages?repo_name=MUSE)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/KnowledgeXLab/MUSE/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/KnowledgeXLab/MUSE/search?l=python)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

