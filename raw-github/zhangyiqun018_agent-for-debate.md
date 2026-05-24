---
repo: zhangyiqun018/agent-for-debate
url: https://github.com/zhangyiqun018/agent-for-debate
content_timestamp: 2026-01-18
time_slice: 2026-01
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - ZhangYiqun018/agent-for-debate: [ICASSP 2026] Agent4Debate is a dynamic multi-agent framework that leverages LLMs to achieve human-level performance in competitive debate by dynamically coordinating specialized agents to mitigate hallucinations and enhance competitiveness. · GitHub

**Source**: https://github.com/zhangyiqun018/agent-for-debate

---

[Skip to content](https://github.com/zhangyiqun018/agent-for-debate#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ZhangYiqun018](https://github.com/ZhangYiqun018)

/
**[agent-for-debate](https://github.com/ZhangYiqun018/agent-for-debate)**

Public

- [Notifications](https://github.com/login?return_to=%2FZhangYiqun018%2Fagent-for-debate)You must be signed in to change notification settings
- [Fork
    6](https://github.com/login?return_to=%2FZhangYiqun018%2Fagent-for-debate)
- 
[Star
          38](https://github.com/login?return_to=%2FZhangYiqun018%2Fagent-for-debate)

[https://github.com/ZhangYiqun018/agent-for-debate](https://github.com/ZhangYiqun018/agent-for-debate)

[Branches](https://github.com/ZhangYiqun018/agent-for-debate/branches)[Tags](https://github.com/ZhangYiqun018/agent-for-debate/tags)

[https://github.com/ZhangYiqun018/agent-for-debate/branches](https://github.com/ZhangYiqun018/agent-for-debate/branches)[https://github.com/ZhangYiqun018/agent-for-debate/tags](https://github.com/ZhangYiqun018/agent-for-debate/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History5 Commits5 Commits |  |  |  |
| config | config |  |  |
| figures | figures |  |  |
| prompt | prompt |  |  |
| src | src |  |  |
| LICENSE | LICENSE |  |  |
| OAI_CONFIG_LIST | OAI_CONFIG_LIST |  |  |
| main.py | main.py |  |  |
| readme.md | readme.md |  |  |
| web_demo.sh | web_demo.sh |  |  |
| View all files |  |  |  |

## Repository files navigation

# Agent4Debate: Can LLMs Beat Humans in Debating? A Dynamic Multi-agent Framework for Competitive Debate

[https://github.com/zhangyiqun018/agent-for-debate#agent4debate-can-llms-beat-humans-in-debating-a-dynamic-multi-agent-framework-for-competitive-debate](https://github.com/zhangyiqun018/agent-for-debate#agent4debate-can-llms-beat-humans-in-debating-a-dynamic-multi-agent-framework-for-competitive-debate)

## Update

[https://github.com/zhangyiqun018/agent-for-debate#update](https://github.com/zhangyiqun018/agent-for-debate#update)

- **2026-01-18**: This paper is accepted by ICASSP 2026!
- **2024-10-30**: Opensource our code.
- **2024-08-09**: Ongoing work, coming soon.

## Overview of Agent4Debate

[https://github.com/zhangyiqun018/agent-for-debate#overview-of-agent4debate](https://github.com/zhangyiqun018/agent-for-debate#overview-of-agent4debate)

[https://github.com/ZhangYiqun018/agent-for-debate/blob/main/figures/framework.png](https://github.com/ZhangYiqun018/agent-for-debate/blob/main/figures/framework.png)

     Figure 1. The overview of Agent4Debate. A dynamic multi-agent framework based on LLMs designed to enhance their capabilities in competitive debate. Agent4Debate employs a collaborative architecture where four specialized agents, involving Searcher, Analyzer, Writer, and Reviewer, dynamically interact and cooperate.  

## Task Definition

[https://github.com/zhangyiqun018/agent-for-debate#task-definition](https://github.com/zhangyiqun018/agent-for-debate#task-definition)

Our debate structure comprises three distinct stages, namely *constructive arguments*, *rebuttals*, and *summary statements*.

[https://github.com/ZhangYiqun018/agent-for-debate/blob/main/figures/competitive_debate.png](https://github.com/ZhangYiqun018/agent-for-debate/blob/main/figures/competitive_debate.png)

      Figure 2. Competitive debate format. 

## Elo Ranking

[https://github.com/zhangyiqun018/agent-for-debate#elo-ranking](https://github.com/zhangyiqun018/agent-for-debate#elo-ranking)

We collect records of 200 debate matches, covering 66 debate motions across three categories, including Fact, Value, and Policy. Participants included Agent4Debate using different foundation models, two baselines, and ten human debaters. Then, we calculate Elo scores for all 200 matches and sub-Elo scores for each of the three debate categories.

### Debatrix-Elo Ranking

[https://github.com/zhangyiqun018/agent-for-debate#debatrix-elo-ranking](https://github.com/zhangyiqun018/agent-for-debate#debatrix-elo-ranking)

| Model | Full | Fact | Policy | Value |
|---|---|---|---|---|
| Gemini-1.5-Pro | 1034.15 | 1154.93 | 1231.98 | 1075.30 |
| Claude-3.5-sonnet | 1032.51 | 1159.18 | 1224.19 | 1074.33 |
| Qwen2-72b-Instruct | 1023.31 | 1130.83 | 1179.62 | 1081.75 |
| GPT-4o | 1022.21 | 1150.14 | 1137.49 | 1069.55 |
| Gemini-1.5-Flash | 1012.45 | 1136.21 | 1156.50 | 1057.73 |
| GLM-4-Air | 1011.72 | 1155.07 | 1148.53 | 1048.42 |
| Deepseek-chat | 1004.00 | 1118.98 | 1131.16 | 1054.89 |
| Claude-3.5-sonnet (Baseline) | 982.07 | 479.50 | 956.21 | 1021.44 |
| Human | 978.35 | 1109.73 | 515.57 | 953.05 |
| Deepseek-Chat (Baseline) | 954.34 | 491.13 | 478.78 | 983.99 |

*Table 3: Debatrix-Elo Ranking.*

### Human-Elo Ranking

[https://github.com/zhangyiqun018/agent-for-debate#human-elo-ranking](https://github.com/zhangyiqun018/agent-for-debate#human-elo-ranking)

| Model | Full | Fact | Policy | Value |
|---|---|---|---|---|
| Gemini-1.5-Pro | 1040.64 | 1110.23 | 1104.79 | 1048.10 |
| Claude-3.5-sonnet | 1031.15 | 1093.87 | 1104.44 | 1020.05 |
| GPT-4o | 1028.84 | 1086.78 | 1099.63 | 1033.09 |
| Human | 1006.46 | 1055.82 | 1030.32 | 1006.57 |
| Gemini-1.5-Flash | 1000.00 | 1037.45 | 997.66 | 1003.29 |
| Qwen2-72b-Instruct | 999.70 | 1041.10 | 976.16 | 1005.56 |
| Claude-3.5-sonnet (Baseline) | 991.38 | 1023.29 | 968.34 | 997.47 |
| GLM-4-Air | 972.48 | 940.00 | 948.31 | 996.67 |
| Deepseek-chat | 971.94 | 963.05 | 946.30 | 986.79 |
| Deepseek-Chat (Baseline) | 962.61 | 786.44 | 911.33 | 979.29 |

* Table 4: Human-Elo Ranking. *

[https://github.com/ZhangYiqun018/agent-for-debate/blob/main/figures/elo_win_rate_comparison.png](https://github.com/ZhangYiqun018/agent-for-debate/blob/main/figures/elo_win_rate_comparison.png)

*      Figure 5. Predicted Win Rates Using Elo Rankings for Model A in A vs. B Battles. *

### Case Study

[https://github.com/zhangyiqun018/agent-for-debate#case-study](https://github.com/zhangyiqun018/agent-for-debate#case-study)

(Due to length constraints, the references have been omitted. Translated from Chinese by Claude-3.5-sonnet. If you want to read the original Chinese version, pleas [click here](https://github.com/ZhangYiqun018/agent-for-debate/blob/main/figures/case%20study/readme.md))

[https://github.com/ZhangYiqun018/agent-for-debate/blob/main/figures/case%20study/case_study_value.png](https://github.com/ZhangYiqun018/agent-for-debate/blob/main/figures/case%20study/case_study_value.png)

*Figure 4. Case study of the debate motion "Justice is nothing but interest. (Pro side) / Justice is nothing more than interest (Con side)". Pro side is Agent4Debate (GPT-4o), Con side is Agent4Debate (Claude-3.5-sonnet). *

[https://github.com/ZhangYiqun018/agent-for-debate/blob/main/figures/case%20study/case_study_policy.png](https://github.com/ZhangYiqun018/agent-for-debate/blob/main/figures/case%20study/case_study_policy.png)

*Figure 5. Case study of the debate motion "Developed countries should (Pro side) / Developed countries should not (Con side) impose a fat tax". Pro side is Agent4Debate (Gemini-1.5-Pro), Con side is Agent4Debate (Claude-3.5-sonnet). *

## Related Work

[https://github.com/zhangyiqun018/agent-for-debate#related-work](https://github.com/zhangyiqun018/agent-for-debate#related-work)

[AIDebater 2024](http://www.fudan-disc.com/sharedtask/AIDebater24/index.html)

[Debatrix: Multi-dimensional Debate Judge with Iterative Chronological Analysis Based on LLM](https://arxiv.org/abs/2403.08010)

[Chatbot Arena: New models & Elo system update](https://lmsys.org/blog/2023-12-07-leaderboard/)

## About

         [ICASSP 2026] Agent4Debate is a dynamic multi-agent framework that leverages LLMs to achieve human-level performance in competitive debate by dynamically coordinating specialized agents to mitigate hallucinations and enhance competitiveness.       

[arxiv.org/pdf/2408.04472](https://arxiv.org/pdf/2408.04472)

### Resources

[Readme](https://github.com/zhangyiqun018/agent-for-debate#readme-ov-file)

### License

[GPL-3.0 license](https://github.com/zhangyiqun018/agent-for-debate#GPL-3.0-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/ZhangYiqun018/agent-for-debate/activity)

### Stars

[38
        stars](https://github.com/ZhangYiqun018/agent-for-debate/stargazers)

### Watchers

[1
        watching](https://github.com/ZhangYiqun018/agent-for-debate/watchers)

### Forks

[6
        forks](https://github.com/ZhangYiqun018/agent-for-debate/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FZhangYiqun018%2Fagent-for-debate&report=ZhangYiqun018+%28user%29)

## [Releases](https://github.com/ZhangYiqun018/agent-for-debate/releases)

No releases published

## [Packages
      0](https://github.com/users/ZhangYiqun018/packages?repo_name=agent-for-debate)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/ZhangYiqun018/agent-for-debate/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          99.8%](https://github.com/ZhangYiqun018/agent-for-debate/search?l=python)
- [Shell
          0.2%](https://github.com/ZhangYiqun018/agent-for-debate/search?l=shell)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2026-01-18
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

