---
repo: ecnu-icalk/autoskill
url: https://github.com/ecnu-icalk/autoskill
content_timestamp: 2026-05-09
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - ECNU-ICALK/AutoSkill: AutoSkill: Experience-Driven Lifelong Learning via Skill Self-Evolution · GitHub

**Source**: https://github.com/ecnu-icalk/autoskill

---

[Skip to content](https://github.com/ecnu-icalk/autoskill#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ECNU-ICALK](https://github.com/ECNU-ICALK)

/
**[AutoSkill](https://github.com/ECNU-ICALK/AutoSkill)**

Public

- [Notifications](https://github.com/login?return_to=%2FECNU-ICALK%2FAutoSkill)You must be signed in to change notification settings
- [Fork
    47](https://github.com/login?return_to=%2FECNU-ICALK%2FAutoSkill)
- 
[Star
          424](https://github.com/login?return_to=%2FECNU-ICALK%2FAutoSkill)

[https://github.com/ECNU-ICALK/AutoSkill](https://github.com/ECNU-ICALK/AutoSkill)

[Branches](https://github.com/ECNU-ICALK/AutoSkill/branches)[Tags](https://github.com/ECNU-ICALK/AutoSkill/tags)

[https://github.com/ECNU-ICALK/AutoSkill/branches](https://github.com/ECNU-ICALK/AutoSkill/branches)[https://github.com/ECNU-ICALK/AutoSkill/tags](https://github.com/ECNU-ICALK/AutoSkill/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History212 Commits212 Commits |  |  |  |
| AutoSkill4Doc | AutoSkill4Doc |  |  |
| AutoSkill4OpenClaw | AutoSkill4OpenClaw |  |  |
| SkillBank | SkillBank |  |  |
| SkillEvo | SkillEvo |  |  |
| autoskill | autoskill |  |  |
| data | data |  |  |
| examples | examples |  |  |
| imgs | imgs |  |  |
| skills/autoskill | skills/autoskill |  |  |
| tests | tests |  |  |
| web | web |  |  |
| .dockerignore | .dockerignore |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| Dockerfile | Dockerfile |  |  |
| README.md | README.md |  |  |
| README.zh-CN.md | README.zh-CN.md |  |  |
| STATUS.md | STATUS.md |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# AutoSkill: Experience-Driven Lifelong Learning via Skill Self-Evolution

[https://github.com/ecnu-icalk/autoskill#autoskill-experience-driven-lifelong-learning-via-skill-self-evolution](https://github.com/ecnu-icalk/autoskill#autoskill-experience-driven-lifelong-learning-via-skill-self-evolution)

English | [中文](https://github.com/ECNU-ICALK/AutoSkill/blob/main/README.zh-CN.md)

[https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/AutoSkill_logo.png](https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/AutoSkill_logo.png)

[https://github.com/ECNU-ICALK/AutoSkill](https://github.com/ECNU-ICALK/AutoSkill)[https://arxiv.org/abs/2603.01145](https://arxiv.org/abs/2603.01145)[https://github.com/ECNU-ICALK/AutoSkill](https://github.com/ECNU-ICALK/AutoSkill)[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

AutoSkill is a practical implementation of **Experience-driven Lifelong Learning (ELL)**. It learns from real interaction experience (dialogue + agents), automatically creates reusable Skills, and continuously evolves existing Skills through merge + version updates.

[https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/Framework.png](https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/Framework.png)

## News

[https://github.com/ecnu-icalk/autoskill#news](https://github.com/ecnu-icalk/autoskill#news)

- **2026-05-09**: Added the installable **AutoSkill Local Skill Manager** (`skills/autoskill`) for maintaining local Agent Skill files after sessions, including reusable-experience triage, similar-skill search, and `discard` / `improve` / `merge` / `create` decisions.
- **2026-03-23**: **SkillEvo 1.0** released (Enabling models to iteratively self-evolve Skills through replay, evaluation, mutation, and promotion).
- **2026-03-13**: **AutoSkill4Doc 1.0** released (Being expext by extracting skills from document/research paper).
- **2026-03-01**: Added offline skill extraction from archived conversations (See Skills in SkillBank/CovSkill).
- **2025-02-26**: **AutoSkill4OpenClaw 1.0** released (Extracting skills from trajectory of OpenClaw).
- **2025-02-04**: **AutoSkill 1.0** released (Extracting skills from dialogues in time).

## Table of Contents

[https://github.com/ecnu-icalk/autoskill#table-of-contents](https://github.com/ecnu-icalk/autoskill#table-of-contents)

- [News](https://github.com/ecnu-icalk/autoskill#news)
- [1. Project Overview](https://github.com/ecnu-icalk/autoskill#1-project-overview)
- [2. Main Components](https://github.com/ecnu-icalk/autoskill#2-main-components)
- [3. Skill Lifecycle Example](https://github.com/ecnu-icalk/autoskill#3-skill-lifecycle-example)
- [4. Documentation Map](https://github.com/ecnu-icalk/autoskill#4-documentation-map)
- [5. Repository Structure (Top Level)](https://github.com/ecnu-icalk/autoskill#5-repository-structure-top-level)
- [6. Star History](https://github.com/ecnu-icalk/autoskill#6-star-history)
- [7. Citation](https://github.com/ecnu-icalk/autoskill#7-citation)
- [8. Contributions and Acknowledgments](https://github.com/ecnu-icalk/autoskill#8-contributions-and-acknowledgments)

## 1. Project Overview

[https://github.com/ecnu-icalk/autoskill#1-project-overview](https://github.com/ecnu-icalk/autoskill#1-project-overview)

- **Experience-driven continuous skill evolution**: extracts reusable capabilities directly from real user interactions and agent traces, then continuously maintains versioned skills so the system aligns with user needs over time.
- **Universal skill format**: uses the Agent Skill artifact (`SKILL.md`) with explainability and editability. Skills remain readable, reviewable, and manually revisable.
- **Offline extraction from completed data**: existing chats and trajectories can be imported directly for offline skill extraction; there is no need to replay the original interaction.
- **Long-term capability value**: AutoSkill turns short-term interaction signals into long-term capability assets that can be reused across runtimes.

## 2. Main Components

[https://github.com/ecnu-icalk/autoskill#2-main-components](https://github.com/ecnu-icalk/autoskill#2-main-components)

- [autoskill/](https://github.com/ECNU-ICALK/AutoSkill/blob/main/autoskill/README.md): core SDK, Web UI, OpenAI-compatible proxy, online skill evolution, offline conversation extraction, and offline trajectory extraction.
- [AutoSkill4Doc/](https://github.com/ECNU-ICALK/AutoSkill/blob/main/AutoSkill4Doc/README.md): standalone document-to-skill pipeline for extracting reusable skills from papers, manuals, and domain documents.
- [AutoSkill4OpenClaw/](https://github.com/ECNU-ICALK/AutoSkill/blob/main/AutoSkill4OpenClaw/README.md): OpenClaw integration for trajectory-driven skill evolution and native skill mirroring.
- [SkillEvo/](https://github.com/ECNU-ICALK/AutoSkill/blob/main/SkillEvo/README.md): replay, evaluation, mutation, and promotion framework for iterative skill self-evolution.

## 3. Skill Lifecycle Example

[https://github.com/ecnu-icalk/autoskill#3-skill-lifecycle-example](https://github.com/ecnu-icalk/autoskill#3-skill-lifecycle-example)

### A) Auto Decision + Feedback-triggered Extraction & Skill Management (v0.1.0)

[https://github.com/ecnu-icalk/autoskill#a-auto-decision--feedback-triggered-extraction--skill-management-v010](https://github.com/ecnu-icalk/autoskill#a-auto-decision--feedback-triggered-extraction--skill-management-v010)

If the user only asks to "write a report" and gives no stable preference/correction, AutoSkill does **not** create a new skill (it outputs an empty extraction result) to avoid noisy, generic skills.

When the user adds durable constraints (for example: "do not hallucinate"), AutoSkill extracts or merges a skill into version `v0.1.0`. Skill management is backend-first (automatic add/merge), with optional human edit/save/delete of `SKILL.md`.

[https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/skill_extraction.png](https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/skill_extraction.png)*Caption: Daily scenario — reusable writing constraints are extracted into a new skill (`v0.1.0`).*

[https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/science_skill_extraction.png](https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/science_skill_extraction.png)*Caption: Science scenario — reusable lab/process constraints (for example hard limits and mandatory SOP steps) are extracted as a skill (`v0.1.0`).*

### B) Skill Update (v0.1.1)

[https://github.com/ecnu-icalk/autoskill#b-skill-update-v011](https://github.com/ecnu-icalk/autoskill#b-skill-update-v011)

When user feedback adds new constraints or changes priorities in later turns, AutoSkill updates the existing skill (instead of creating duplicates) and evolves the version from `v0.1.0` to `v0.1.1`.

[https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/skill_update.png](https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/skill_update.png)*Caption: Daily scenario — later user feedback updates constraints and evolves the skill to `v0.1.1`.*

[https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/science_skill_update.png](https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/science_skill_update.png)*Caption: Science scenario — follow-up technical feedback updates the existing science skill instead of creating duplicates (`v0.1.1`).*

### C) Skill Usage

[https://github.com/ecnu-icalk/autoskill#c-skill-usage](https://github.com/ecnu-icalk/autoskill#c-skill-usage)

For the next similar task (for example, writing a **government report about a self-evolving agent**), the updated skill is retrieved and used to generate outputs aligned with user expectations.

[https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/skill_utilize.png](https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/skill_utilize.png)*Caption: Daily scenario — the evolved skill is retrieved and reused in the next similar task.*

[https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/science_skill_utilize.png](https://github.com/ECNU-ICALK/AutoSkill/blob/main/imgs/science_skill_utilize.png)*Caption: Science scenario — the evolved science skill is retrieved for subsequent domain-consistent requests.*

## 4. Documentation Map

[https://github.com/ecnu-icalk/autoskill#4-documentation-map](https://github.com/ecnu-icalk/autoskill#4-documentation-map)

- Core runtime, SDK, Web UI, proxy, and offline conversation/trajectory extraction: [autoskill/README.md](https://github.com/ECNU-ICALK/AutoSkill/blob/main/autoskill/README.md)
- Document-native extraction pipeline: [AutoSkill4Doc/README.md](https://github.com/ECNU-ICALK/AutoSkill/blob/main/AutoSkill4Doc/README.md)
- OpenClaw integration and deployment: [AutoSkill4OpenClaw/README.md](https://github.com/ECNU-ICALK/AutoSkill/blob/main/AutoSkill4OpenClaw/README.md)
- Skill replay, evaluation, mutation, and promotion: [SkillEvo/README.md](https://github.com/ECNU-ICALK/AutoSkill/blob/main/SkillEvo/README.md)

## 5. Repository Structure (Top Level)

[https://github.com/ecnu-icalk/autoskill#5-repository-structure-top-level](https://github.com/ecnu-icalk/autoskill#5-repository-structure-top-level)

- `autoskill/`: core SDK and runtime.
- `AutoSkill4Doc/`: standalone document-to-skill pipeline.
- `AutoSkill4OpenClaw/`: OpenClaw integration.
- `SkillEvo/`: iterative skill self-evolution framework.
- `examples/`: runnable entrypoints and demos.
- `SkillBank/`: default local skill storage root.
- `data/`: evaluation and sample data.
- `tests/`: automated tests.
- `web/`: local Web UI assets.
- `imgs/`: README figures and demo images.

## 6. Star History

[https://github.com/ecnu-icalk/autoskill#6-star-history](https://github.com/ecnu-icalk/autoskill#6-star-history)

[https://star-history.com/#ECNU-ICALK/AutoSkill&Date](https://star-history.com/#ECNU-ICALK/AutoSkill&Date)

## 7. Citation

[https://github.com/ecnu-icalk/autoskill#7-citation](https://github.com/ecnu-icalk/autoskill#7-citation)

If you use AutoSkill in academic work, technical reports, or demos, please cite:

```
@software{autoskill_2026,
  author = {Yutao Yang, Junsong Li, Qianjun Pan, Bihao Zhan, Yuxuan Cai, Lin Du, Xin Li, Bo Zhang, Qin Chen, Jie Zhou, Kai Chen, Liang He},
  title = {AutoSkill: Experience-Driven Lifelong Learning via Skill Self-Evolution},
  year = {2026},
  url = {https://github.com/ECNU-ICALK/AutoSkill},
  note = {GitHub repository}
}

@misc{yang2026autoskillexperiencedrivenlifelonglearning,
  title={AutoSkill: Experience-Driven Lifelong Learning via Skill Self-Evolution},
  author={Yutao Yang and Junsong Li and Qianjun Pan and Bihao Zhan and Yuxuan Cai and Lin Du and Jie Zhou and Kai Chen and Qin Chen and Xin Li and Bo Zhang and Liang He},
  year={2026},
  eprint={2603.01145},
  archivePrefix={arXiv},
  primaryClass={cs.AI},
  url={https://arxiv.org/abs/2603.01145},
}
```

## 8. Contributions and Acknowledgments

[https://github.com/ecnu-icalk/autoskill#8-contributions-and-acknowledgments](https://github.com/ecnu-icalk/autoskill#8-contributions-and-acknowledgments)

Institutions: Shanghai AI Laboratory, School of Computer Science at East China Normal University

Core Authors: Yutao Yang

Contribution: Junsong Li, Qianjun Pan, Bihao Zhan, Yuxuan Cai, Lin Du

Lead Authors: Jie Zhou, Kai Chen, Liang He

Scientific Directors: Xin Li, Bo Zhang, Qin Chen

## About

         AutoSkill: Experience-Driven Lifelong Learning via Skill Self-Evolution       

### Topics

[continual-learning](https://github.com/topics/continual-learning)[self-evolving](https://github.com/topics/self-evolving)[agent-skills](https://github.com/topics/agent-skills)[experience-driven-lifelong-learning](https://github.com/topics/experience-driven-lifelong-learning)

### Resources

[Readme](https://github.com/ecnu-icalk/autoskill#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/ECNU-ICALK/AutoSkill/activity)

[Custom properties](https://github.com/ECNU-ICALK/AutoSkill/custom-properties)

### Stars

[424
        stars](https://github.com/ECNU-ICALK/AutoSkill/stargazers)

### Watchers

[3
        watching](https://github.com/ECNU-ICALK/AutoSkill/watchers)

### Forks

[47
        forks](https://github.com/ECNU-ICALK/AutoSkill/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FECNU-ICALK%2FAutoSkill&report=ECNU-ICALK+%28user%29)

## [Releases](https://github.com/ECNU-ICALK/AutoSkill/releases)

No releases published

## [Packages
      0](https://github.com/orgs/ECNU-ICALK/packages?repo_name=AutoSkill)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/ECNU-ICALK/AutoSkill/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          73.5%](https://github.com/ECNU-ICALK/AutoSkill/search?l=python)
- [TypeScript
          16.0%](https://github.com/ECNU-ICALK/AutoSkill/search?l=typescript)
- [JavaScript
          6.9%](https://github.com/ECNU-ICALK/AutoSkill/search?l=javascript)
- [HTML
          1.8%](https://github.com/ECNU-ICALK/AutoSkill/search?l=html)
- [CSS
          1.1%](https://github.com/ECNU-ICALK/AutoSkill/search?l=css)
- [Shell
          0.7%](https://github.com/ECNU-ICALK/AutoSkill/search?l=shell)

     You can’t perform that action at this time.
