---
repo: internscience/internagent
url: https://github.com/internscience/internagent
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - InternScience/InternAgent: InternAgent-1.5: A Unified Agentic Framework for Long-Horizon Autonomous Scientific Discovery · GitHub

**Source**: https://github.com/internscience/internagent

---

[Skip to content](https://github.com/internscience/internagent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[InternScience](https://github.com/InternScience)

/
**[InternAgent](https://github.com/InternScience/InternAgent)**

Public

- [Notifications](https://github.com/login?return_to=%2FInternScience%2FInternAgent)You must be signed in to change notification settings
- [Fork
    115](https://github.com/login?return_to=%2FInternScience%2FInternAgent)
- 
[Star
          1.3k](https://github.com/login?return_to=%2FInternScience%2FInternAgent)

[https://github.com/InternScience/InternAgent](https://github.com/InternScience/InternAgent)

[Branches](https://github.com/InternScience/InternAgent/branches)[Tags](https://github.com/InternScience/InternAgent/tags)

[https://github.com/InternScience/InternAgent/branches](https://github.com/InternScience/InternAgent/branches)[https://github.com/InternScience/InternAgent/tags](https://github.com/InternScience/InternAgent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History45 Commits45 Commits |  |  |  |
| assets | assets |  |  |
| config | config |  |  |
| docs | docs |  |  |
| internagent | internagent |  |  |
| sci_tasks @ 9b5288e | sci_tasks @ 9b5288e |  |  |
| scripts | scripts |  |  |
| tasks | tasks |  |  |
| .env.example | .env.example |  |  |
| .env.template | .env.template |  |  |
| .gitignore | .gitignore |  |  |
| .gitmodules | .gitmodules |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| add_offline_mem.sh | add_offline_mem.sh |  |  |
| demo.py | demo.py |  |  |
| launch.py | launch.py |  |  |
| launch_discovery.py | launch_discovery.py |  |  |
| launch_qa.py | launch_qa.py |  |  |
| mcp_demo.py | mcp_demo.py |  |  |
| requirements.txt | requirements.txt |  |  |
| visualize_mcts.py | visualize_mcts.py |  |  |
| visualize_mcts_claude.py | visualize_mcts_claude.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# InternAgent-1.5: A Unified Agentic Framework for Long-Horizon Autonomous Scientific Discovery

[https://github.com/internscience/internagent#internagent-15-a-unified-agentic-framework-for-long-horizon-autonomous-scientific-discovery](https://github.com/internscience/internagent#internagent-15-a-unified-agentic-framework-for-long-horizon-autonomous-scientific-discovery)

> *Autonomous Discovery Across All Sciences*

- **Papers**: [InternAgent 1.0](https://arxiv.org/abs/2505.16938) | [InternAgent 1.5](https://huggingface.co/papers/2602.08990)
- **Links**: [Website](https://discovery.intern-ai.org.cn) | [HuggingFace](https://huggingface.co/collections/InternScience/internagent)

## 🔥 News

[https://github.com/internscience/internagent#-news](https://github.com/internscience/internagent#-news)

- 

**2026.5.07**: 🔥🔥 We have open-sourced InternAgent-1.5 with advanced features, including  enhanced algorithm discovery tasks, autonomous scientific paper reproduction, memory module, and deep research for tackling complex research challenges.

- 

**2026.3.17**: 🚀🚀 We provide public [access](https://scphub.intern-ai.org.cn/detail/28) to InternAgent's Deep Research capabilities, enabling developers and researchers to seamlessly integrate its advanced deep research functionality into their own workflows.

- 

**2026.2.14**: ❤️‍🔥❤️‍🔥 We open-source **[MLEvolve](https://github.com/InternScience/MLEvolve)**, the core implementation of InternAgent's solution optimization subsystem for algorithm design tasks. As the **open-source method** to achieve **#1 on MLEBench**, MLEvolve demonstrates powerful capabilities in solution optimization within bounded hypothesis spaces.

- 

**2026.2.10**: 🔥 Official release of the [InternAgent 1.5 Technical Report](https://huggingface.co/papers/2602.08990). InternAgent 1.5 achieves leading performance on scientific reasoning benchmarks including **GAIA, HLE, GPQA, and FrontierScience**, and supports end-to-end autonomous scientific discovery tasks across **Physical, Biology, Earth, and Life Science domains**, enabling both algorithm discovery and empirical discovery (dry/wet-lab experiments).

- 

**2025.10.13**: InternAgent-1.0 code has been fully open-sourced, supporting end-to-end automation and autonomous evolution across 12 scientific research tasks.

more...
- 

**2025.07.17**: The source code of InternAgent has been partially open-sourced. The complete version of InternAgent (covering 12 types of tasks for autonomous scientific research) will be open-sourced soon. This code repository can be used for full-cycle autonomous scientific research, ranging from hypothesis generation to automated experimental execution.

- 

**2025.07.10**: *NovelSeek* has been renamed to **InternAgent**. This change embodies our hopeful vision for autonomous scientific research framework, and we hope it will empower all researchers to achieve great scientific discoveries.

---

## 🚀 Getting Started

[https://github.com/internscience/internagent#-getting-started](https://github.com/internscience/internagent#-getting-started)

### Installation

[https://github.com/internscience/internagent#installation](https://github.com/internscience/internagent#installation)

```
conda create -n InternAgent python=3.11
conda activate InternAgent
pip install -r requirements.txt
```

### Configure API Keys

[https://github.com/internscience/internagent#configure-api-keys](https://github.com/internscience/internagent#configure-api-keys)

Rename `.env.example` to `.env` and fill in your API keys:

```
mv .env.example .env
```

Key fields in `.env`:

```
OPENAI_API_KEY=        # OpenAI or compatible API key (used for embeddings and memory)
OPENAI_API_BASE_URL=   # Base URL for OpenAI-compatible endpoints
ANTHROPIC_API_KEY=     # Anthropic API key (for Claude-based experiment backends)
```

### Run a Discovery Experiment

[https://github.com/internscience/internagent#run-a-discovery-experiment](https://github.com/internscience/internagent#run-a-discovery-experiment)

`AutoDebug` is a self-contained toy task (no dataset or model downloads required) and is the recommended first run to verify your setup.

```
python launch_discovery.py \
    --config ./config/default_config.yaml \
    --task AutoDebug \
    --exp_backend claudecode
```

### Run a QA Query

[https://github.com/internscience/internagent#run-a-qa-query](https://github.com/internscience/internagent#run-a-qa-query)

QA mode uses InternAgent's deep research pipeline to answer a research question directly — no experiment loop, just a synthesized answer grounded in literature.

```
python launch_qa.py --question "What are recent advances in memory-augmented LLMs?"

# Optionally save the answer to a file
python launch_qa.py -q "What are recent advances in memory-augmented LLMs?" -o answer.md
```

### Master Launcher

[https://github.com/internscience/internagent#master-launcher](https://github.com/internscience/internagent#master-launcher)

`launch.py` is a unified entry point for both modes:

```
python launch.py --mode discovery --task AutoDebug --exp_backend claudecode
python launch.py --mode qa --question "What are recent advances in memory-augmented LLMs?"
```

**Configuration tips:**

- Configuration lives in `config/` — `default_config.yaml` is the main starting point.
- Results are saved under `results/`, logs under `logs/`.
- To skip idea generation and run experiments from existing ideas: add `--skip_idea_generation --idea_path <path/to/ideas.json>`.
- See `scripts/` for ready-to-use example scripts.

### Research Tasks

[https://github.com/internscience/internagent#research-tasks](https://github.com/internscience/internagent#research-tasks)

**Algorithm discovery tasks** live under `tasks/`. Each contains a `prompt.json` (task description), baseline `code/`, and a `launcher.sh`. Datasets and environment-specific setup vary per task — refer to the code in each task folder.

**Scientific paper reproduction tasks** (`sci_tasks`) are a distinct mode where InternAgent is given a published paper and its data, and asked to reproduce the key findings autonomously. These tasks live under `sci_tasks/tasks/` (from the [ResearchClawBench](https://github.com/InternScience/ResearchClawBench) benchmark). See [docs/sci_tasks.md](https://github.com/InternScience/InternAgent/blob/main/docs/sci_tasks.md) for a full guide.

### Quick-Start Scripts

[https://github.com/internscience/internagent#quick-start-scripts](https://github.com/internscience/internagent#quick-start-scripts)

Ready-to-use example scripts are provided under `scripts/`:

| Script | Description |
|---|---|
| run_discovery.sh | Run a full discovery experiment (idea generation → experiments) |
| run_skip-idea.sh | Run experiments from an existing idea file, skipping generation |
| run_sci.sh | Run a scientific paper reproduction task (defaults to Astronomy_000) |
| run_qa.sh | Answer a research question via deep research |

---

## 🔧 Advanced Features

[https://github.com/internscience/internagent#-advanced-features](https://github.com/internscience/internagent#-advanced-features)

### Memory Module

[https://github.com/internscience/internagent#memory-module](https://github.com/internscience/internagent#memory-module)

InternAgent 1.5 includes a persistent memory module that records experiment outcomes across sessions, helping the agent avoid previously failed directions and build on successful ones. See [docs/memory_module.md](https://github.com/InternScience/InternAgent/blob/main/docs/memory_module.md) for configuration and setup.

### Deep Research

[https://github.com/internscience/internagent#deep-research](https://github.com/internscience/internagent#deep-research)

The Deep Research (DR) module decomposes a research question into subtasks, gathers information from academic databases and the web in parallel, and synthesizes findings into a direct answer or structured report. See [docs/deep_research.md](https://github.com/InternScience/InternAgent/blob/main/docs/deep_research.md) for configuration and setup.

---

## 📝 Citation

[https://github.com/internscience/internagent#-citation](https://github.com/internscience/internagent#-citation)

```
@article{feng2026internagent,
  title={InternAgent-1.5: A Unified Agentic Framework for Long-Horizon Autonomous Scientific Discovery},
  author={Shiyang Feng and Runmin Ma and Xiangchao Yan and Yue Fan and Yusong Hu and Songtao Huang and Shuaiyu Zhang and Zongsheng Cao and Tianshuo Peng and Jiakang Yuan and Zijie Guo and Zhijie Zhong and Shangheng Du and Weida Wang and Jinxin Shi and Yuhao Zhou and Xiaohan He and Zhiyin Yu and Fangchen Yu and Bihao Zhan and Qihao Zheng and Jiamin Wu and Mianxin Liu and Chi Zhang and Shaowei Hou and Shuya Li and Yankai Jiang and Wenjie Lou and Lilong Wang and Zifu Wang and Jiong Wang and Wanghan Xu and Yue Deng and Dongrui Liu and Yiheng Wang and Wenlong Zhang and Fenghua Ling and Shufei Zhang and Xiaosong Wang and Shuangjia Zheng and Xun Huang and Siqi Sun and Shuyue Hu and Peng Ye and Chunfeng Song and Bin Wang and Conghui He and Yihao Liu and Xin Li and Qibin Hou and Tao Chen and Xiangyu Yue and Bin Wang and Liang He and Dahua Lin and Bowen Zhou and Bo Zhang and Lei Bai},
  journal={arXiv preprint arXiv:2602.08990},
  year={2026}
}
```

```
@article{team2025internagent,
  title={InternAgent: When Agent Becomes the Scientist--Building Closed-Loop System from Hypothesis to Verification},
  author={Team, InternAgent and Zhang, Bo and Feng, Shiyang and Yan, Xiangchao and Yuan, Jiakang and Ma, Runmin and Hu, Yusong and Yu, Zhiyin and He, Xiaohan and Huang, Songtao and others},
  journal={arXiv e-prints},
  pages={arXiv--2505},
  year={2025}
}
```

```
@article{hu2025flowsearch,
  title={FlowSearch: Advancing deep research with dynamic structured knowledge flow},
  author={Yusong Hu and Runmin Ma and Yue Fan and Jinxin Shi and Zongsheng Cao and Yuhao Zhou and Jiakang Yuan and Xiangchao Yan and Wenlong Zhang and Lei Bai and Bo Zhang},
  journal={arXiv preprint arXiv:2510.08521},
  year={2025}
}
```

```
@article{du2025automlgen,
  title={AutoMLGen: Navigating Fine-Grained Optimization for Coding Agents},
  author={Shangheng Du and Xiangchao Yan and Dengyang Jiang and Jiakang Yuan and Yusong Hu and Xin Li and Liang He and Bo Zhang and Lei Bai},
  journal={arXiv preprint arXiv:2510.08521},
  year={2025}
}
```

## About

         InternAgent-1.5: A Unified Agentic Framework for Long-Horizon Autonomous Scientific Discovery       

[discovery.intern-ai.org.cn/home](https://discovery.intern-ai.org.cn/home)

### Topics

[multi-agent-systems](https://github.com/topics/multi-agent-systems)[hypothesis-generation](https://github.com/topics/hypothesis-generation)[ai-scientists](https://github.com/topics/ai-scientists)[llm-coder](https://github.com/topics/llm-coder)[coding-agents](https://github.com/topics/coding-agents)[agentic-framework](https://github.com/topics/agentic-framework)[automatic-scientific-discovery](https://github.com/topics/automatic-scientific-discovery)[automatic-paper-survey](https://github.com/topics/automatic-paper-survey)

### Resources

[Readme](https://github.com/internscience/internagent#readme-ov-file)

### License

[View license](https://github.com/internscience/internagent#License-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/InternScience/InternAgent/activity)

[Custom properties](https://github.com/InternScience/InternAgent/custom-properties)

### Stars

[1.3k
        stars](https://github.com/InternScience/InternAgent/stargazers)

### Watchers

[41
        watching](https://github.com/InternScience/InternAgent/watchers)

### Forks

[115
        forks](https://github.com/InternScience/InternAgent/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FInternScience%2FInternAgent&report=InternScience+%28user%29)

## [Releases](https://github.com/InternScience/InternAgent/releases)

[3
      tags](https://github.com/InternScience/InternAgent/tags)

## [Packages
      0](https://github.com/orgs/InternScience/packages?repo_name=InternAgent)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/InternScience/InternAgent/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          97.1%](https://github.com/InternScience/InternAgent/search?l=python)
- [Shell
          2.8%](https://github.com/InternScience/InternAgent/search?l=shell)
- 

Other

0.1%

     You can’t perform that action at this time.
