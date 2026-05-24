---
repo: openautocoder/live-swe-agent
url: https://github.com/openautocoder/live-swe-agent
content_timestamp: 2025-11-24
time_slice: 2025-11
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - OpenAutoCoder/live-swe-agent: Live-SWE-agent: live, runtime self-evolving software engineering agent · GitHub

**Source**: https://github.com/openautocoder/live-swe-agent

---

[Skip to content](https://github.com/openautocoder/live-swe-agent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[OpenAutoCoder](https://github.com/OpenAutoCoder)

/
**[live-swe-agent](https://github.com/OpenAutoCoder/live-swe-agent)**

Public

- [Notifications](https://github.com/login?return_to=%2FOpenAutoCoder%2Flive-swe-agent)You must be signed in to change notification settings
- [Fork
    39](https://github.com/login?return_to=%2FOpenAutoCoder%2Flive-swe-agent)
- 
[Star
          392](https://github.com/login?return_to=%2FOpenAutoCoder%2Flive-swe-agent)

[https://github.com/OpenAutoCoder/live-swe-agent](https://github.com/OpenAutoCoder/live-swe-agent)

[Branches](https://github.com/OpenAutoCoder/live-swe-agent/branches)[Tags](https://github.com/OpenAutoCoder/live-swe-agent/tags)

[https://github.com/OpenAutoCoder/live-swe-agent/branches](https://github.com/OpenAutoCoder/live-swe-agent/branches)[https://github.com/OpenAutoCoder/live-swe-agent/tags](https://github.com/OpenAutoCoder/live-swe-agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History11 Commits11 Commits |  |  |  |
| assets | assets |  |  |
| config | config |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://live-swe-agent.github.io/](https://live-swe-agent.github.io/)

# Live-SWE-agent | The First Live AI Software Agent

[https://github.com/openautocoder/live-swe-agent#live-swe-agent--the-first-live-ai-software-agent](https://github.com/openautocoder/live-swe-agent#live-swe-agent--the-first-live-ai-software-agent)

[https://live-swe-agent.github.io/](https://live-swe-agent.github.io/)[https://arxiv.org/abs/2511.13646](https://arxiv.org/abs/2511.13646)[https://huggingface.co/livesweagent](https://huggingface.co/livesweagent)

[📣News](https://github.com/openautocoder/live-swe-agent#-news) |     [🏆Leaderboard](https://github.com/openautocoder/live-swe-agent#-leaderboard) |     [📊Comparison](https://github.com/openautocoder/live-swe-agent#-comparison) |      [🚀Setup](https://github.com/openautocoder/live-swe-agent#-setup) |     [⚙️Artifacts](https://github.com/openautocoder/live-swe-agent#-artifacts) |     [📜Attribution](https://github.com/openautocoder/live-swe-agent#-attribution) |     [🙏Acknowledgements](https://github.com/openautocoder/live-swe-agent#-acknowledgements)

Live-SWE-agent is the **first *live*, runtime self-evolving software engineering agent** that expands and revises its own capabilities *on the fly* while working on a real-world issue. Our key insight is that **software agents are themselves software systems**, and modern LLM-based agents already possess the intrinsic capability to extend or modify their own behavior at runtime.

## 📣 News

[https://github.com/openautocoder/live-swe-agent#-news](https://github.com/openautocoder/live-swe-agent#-news)

- **[Nov 24th, 2025]**: Claude Opus 4.5 + Live-SWE-agent scores 79.2% on SWE-bench Verified, leading all current open-source scaffolds and coming very close to Anthropic’s internal, manually engineered scaffold for Opus 4.5!!
- **[Nov 20th, 2025]**: Gemini 3 Pro + Live-SWE-agent scores 77.4% on SWE-bench Verified, outperforming all available models (including Claude 4.5)!
- **[Nov 17th, 2025]**: Live-SWE-agent achieves the new state-of-the-art solve rate of 45.8% on SWE-Bench Pro!
- **[Nov 17th, 2025]**: We've released Live-SWE-agent 1.0.0!

## 🏆 Leaderboard

[https://github.com/openautocoder/live-swe-agent#-leaderboard](https://github.com/openautocoder/live-swe-agent#-leaderboard)

For software tasks, recent LLMs are often benchmarked using manually engineered, proprietary agent scaffolds, which makes it difficult to compare the true capabilities of different models fairly.

Live-SWE-agent not only demonstrates that a minimal, open, and live scaffold already has the ability to outperform proprietary scaffolds, but also offers a unified and powerful platform that enables genuinely fair, apples-to-apples comparisons for future model releases.

As shown below, on our leaderboard of recent models (all evaluated with Live-SWE-agent), **Claude Opus 4.5** retains the #1 spot with a score of 79.2% on SWE-bench Verified by a large margin.

[https://github.com/OpenAutoCoder/live-swe-agent/blob/main/assets/leaderboard.png](https://github.com/OpenAutoCoder/live-swe-agent/blob/main/assets/leaderboard.png)

More model scores are coming soon! For more details, please visit our [leaderboard](https://live-swe-agent.github.io/). Feel free to submit your model's evaluation results to help build a more comprehensive and fair benchmarking platform!

## 📊 Comparison

[https://github.com/openautocoder/live-swe-agent#-comparison](https://github.com/openautocoder/live-swe-agent#-comparison)

Below shows the comparison graph between Live-SWE-agent and state-of-the-art open-source solutions and proprietary commercial agent scaffolds on SWE-bench Verified and SWE-Bench Pro.

[https://github.com/OpenAutoCoder/live-swe-agent/blob/main/assets/comparison.png](https://github.com/OpenAutoCoder/live-swe-agent/blob/main/assets/comparison.png)

## 🚀 Setup

[https://github.com/openautocoder/live-swe-agent#-setup](https://github.com/openautocoder/live-swe-agent#-setup)

We built Live-SWE-agent on top of the popular [mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent) framework with very minimal modifications.

To use Live-SWE-agent, simply install mini-swe-agent first using this [guide](https://github.com/OpenAutoCoder/live-swe-agent/blob/main) and use the custom Live-SWE-agent config:

```
mini --config config/livesweagent.yaml # using custom Live-SWE-agent config
```

See the `config` folder for more details.

## ⚙️ Artifacts

[https://github.com/openautocoder/live-swe-agent#%EF%B8%8F-artifacts](https://github.com/openautocoder/live-swe-agent#%EF%B8%8F-artifacts)

You can download the complete trajectories, patches, and results of Live-SWE-agent in our [v1.0.0 release](https://github.com/OpenAutoCoder/live-swe-agent/releases/tag/v1.0.0):

- `swebench_verified`: complete runs on SWE-bench Verified
- `swebench_pro`: complete runs on SWE-Bench Pro

You also obtain them in our 🤗 huggingface [datasets](https://huggingface.co/livesweagent/datasets)

## 📜 Attribution

[https://github.com/openautocoder/live-swe-agent#-attribution](https://github.com/openautocoder/live-swe-agent#-attribution)

```
@article{livesweagent,
  author    = {Xia, Chunqiu Steven and Wang, Zhe and Yang, Yan and Wei, Yuxiang and Zhang, Lingming},
  title     = {Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly?},
  year      = {2025},
  journal   = {arXiv preprint},
}
```

## 🙏 Acknowledgements

[https://github.com/openautocoder/live-swe-agent#-acknowledgements](https://github.com/openautocoder/live-swe-agent#-acknowledgements)

- [mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent)
- [SWE-bench](https://www.swebench.com/)
- [SWE-Bench Pro](https://scale.com/blog/swe-bench-pro/)

## About

         Live-SWE-agent: live, runtime self-evolving software engineering agent       

### Topics

[agent](https://github.com/topics/agent)[software-development](https://github.com/topics/software-development)[llm](https://github.com/topics/llm)[self-evolving](https://github.com/topics/self-evolving)

### Resources

[Readme](https://github.com/openautocoder/live-swe-agent#readme-ov-file)

### License

[MIT license](https://github.com/openautocoder/live-swe-agent#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/OpenAutoCoder/live-swe-agent/activity)

[Custom properties](https://github.com/OpenAutoCoder/live-swe-agent/custom-properties)

### Stars

[392
        stars](https://github.com/OpenAutoCoder/live-swe-agent/stargazers)

### Watchers

[4
        watching](https://github.com/OpenAutoCoder/live-swe-agent/watchers)

### Forks

[39
        forks](https://github.com/OpenAutoCoder/live-swe-agent/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FOpenAutoCoder%2Flive-swe-agent&report=OpenAutoCoder+%28user%29)

## [Releases
      1](https://github.com/OpenAutoCoder/live-swe-agent/releases)

[Live-SWE-agent v1.0.0
        
          Latest
      
      Nov 17, 2025](https://github.com/OpenAutoCoder/live-swe-agent/releases/tag/v1.0.0)

## [Packages
      0](https://github.com/orgs/OpenAutoCoder/packages?repo_name=live-swe-agent)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/OpenAutoCoder/live-swe-agent/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2025-11-24
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-11
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

