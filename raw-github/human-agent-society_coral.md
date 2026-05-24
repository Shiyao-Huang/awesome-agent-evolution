---
repo: human-agent-society/coral
url: https://github.com/human-agent-society/coral
content_timestamp: 2026-04-24
time_slice: 2026-04
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - Human-Agent-Society/CORAL: CORAL is a robust, lightweight infrastructure for multi-agent autonomous self-evolution, built for autoresearch. Works with Claude Code, Codex, Cursor, OpenCode, Kiro, and more. · GitHub

**Source**: https://github.com/human-agent-society/coral

---

[Skip to content](https://github.com/human-agent-society/coral#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Human-Agent-Society](https://github.com/Human-Agent-Society)

/
**[CORAL](https://github.com/Human-Agent-Society/CORAL)**

Public

- [Notifications](https://github.com/login?return_to=%2FHuman-Agent-Society%2FCORAL)You must be signed in to change notification settings
- [Fork
    88](https://github.com/login?return_to=%2FHuman-Agent-Society%2FCORAL)
- 
[Star
          669](https://github.com/login?return_to=%2FHuman-Agent-Society%2FCORAL)

[https://github.com/Human-Agent-Society/CORAL](https://github.com/Human-Agent-Society/CORAL)

[Branches](https://github.com/Human-Agent-Society/CORAL/branches)[Tags](https://github.com/Human-Agent-Society/CORAL/tags)

[https://github.com/Human-Agent-Society/CORAL/branches](https://github.com/Human-Agent-Society/CORAL/branches)[https://github.com/Human-Agent-Society/CORAL/tags](https://github.com/Human-Agent-Society/CORAL/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History115 Commits115 Commits |  |  |  |
| .claude/skills | .claude/skills |  |  |
| .github | .github |  |  |
| assets | assets |  |  |
| blog | blog |  |  |
| coral | coral |  |  |
| demos | demos |  |  |
| docker | docker |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| tests | tests |  |  |
| web | web |  |  |
| .dockerignore | .dockerignore |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README_CN.md | README_CN.md |  |  |
| install.sh | install.sh |  |  |
| litellm_config.yaml | litellm_config.yaml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/Human-Agent-Society/CORAL/blob/main/assets/logo.png](https://github.com/Human-Agent-Society/CORAL/blob/main/assets/logo.png)

## Robust, lightweight infrastructure for multi-agent self-evolution, built for autoresearch.

[https://github.com/human-agent-society/coral#robust-lightweight-infrastructure-for-multi-agent-self-evolution-built-for-autoresearch](https://github.com/human-agent-society/coral#robust-lightweight-infrastructure-for-multi-agent-self-evolution-built-for-autoresearch)

[https://arxiv.org/abs/2604.01658v1](https://arxiv.org/abs/2604.01658v1)[https://human-agent-society.github.io/CORAL/](https://human-agent-society.github.io/CORAL/)[https://github.com/Human-Agent-Society/CORAL/blob/main/LICENSE](https://github.com/Human-Agent-Society/CORAL/blob/main/LICENSE)[https://python.org](https://python.org)

**English** | [中文](https://github.com/Human-Agent-Society/CORAL/blob/main/README_CN.md)

[Installation](https://github.com/human-agent-society/coral#installation) · [Supported Agents](https://github.com/human-agent-society/coral#supported-agents) · [How It Works](https://github.com/human-agent-society/coral#how-it-works) · [Examples](https://github.com/human-agent-society/coral#examples) · [Docs](https://docs.coralxyz.com/) · [Paper](https://arxiv.org/abs/2604.01658v1)

**CORAL** is infrastructure for **autonomous AI agent organizations** that run experiments, share knowledge, and continuously improve solutions. Give it a codebase and a grader, and CORAL handles the rest: isolated workspaces, safe evaluation, persistent shared state, and multi-agent collaboration. Natively integrated with Claude Code, OpenCode, Codex, Cursor Agent, and Kiro.

### 🔥 News

[https://github.com/human-agent-society/coral#-news](https://github.com/human-agent-society/coral#-news)

- **[2026-04-24]** Rubric judges — two reusable LLM-judge grader packages for open-ended tasks (reports, memos, legal analysis). See the [Rubric Judges guide](https://docs.coralxyz.com/guides/rubric-judge).
- **[2026-04-03]** Our paper, "CORAL: Towards Autonomous Multi-Agent Evolution for Open-Ended Discovery," is now out! Check it out on [Arxiv](https://arxiv.org/abs/2604.01658v1).
- **[2026-03-18]** CORAL is released! Check out our [blog post](https://human-agent-society.github.io/CORAL/).

[https://github.com/Human-Agent-Society/CORAL/blob/main/assets/demo.gif](https://github.com/Human-Agent-Society/CORAL/blob/main/assets/demo.gif)

### Installation

[https://github.com/human-agent-society/coral#installation](https://github.com/human-agent-society/coral#installation)

```
curl -fsSL https://raw.githubusercontent.com/Human-Agent-Society/CORAL/main/install.sh | sh
```

Installs `coral` globally via `uv tool install`. Pin a version with `CORAL_VERSION=v0.5.0`. See [Installation docs](https://docs.coralxyz.com/getting-started/installation) for manual install, dev setup, and prerequisites.

```
coral init my-task                       # scaffold a task
cd my-task && coral start -c task.yaml   # launch agents
```

### Supported Agents

[https://github.com/human-agent-society/coral#supported-agents](https://github.com/human-agent-society/coral#supported-agents)

| Agent | agents.runtime |
|---|---|
| Claude Code — default | claude_code |
| Codex | codex |
| Cursor Agent | cursor |
| Kiro | kiro |
| OpenCode | opencode |

Each agent must be installed and authenticated separately. Per-runtime config — including the [LiteLLM gateway](https://docs.coralxyz.com/guides/gateway) for custom models — is documented at [Agent Runtimes](https://docs.coralxyz.com/guides/agent-runtimes).

### How It Works

[https://github.com/human-agent-society/coral#how-it-works](https://github.com/human-agent-society/coral#how-it-works)

[https://github.com/Human-Agent-Society/CORAL/blob/main/assets/coral_diagram_trans.jpg](https://github.com/Human-Agent-Society/CORAL/blob/main/assets/coral_diagram_trans.jpg)

Each agent runs in its own git worktree. Shared state (attempts, notes, skills) lives in `.coral/public/` and is symlinked into every worktree — agents see each other's work in real time. A grader daemon scores every commit. The manager interrupts agents with heartbeat prompts (`reflect`, `consolidate`, `pivot`).

Deeper dive: [Concepts](https://docs.coralxyz.com/concepts) · [Multi-agent runs](https://docs.coralxyz.com/guides/multi-agent) · [Eval loop](https://docs.coralxyz.com/concepts/eval-loop)

### Examples

[https://github.com/human-agent-society/coral#examples](https://github.com/human-agent-society/coral#examples)

Ready-to-run task configurations in `examples/`:

| Task | Domain | Description |
|---|---|---|
| circle_packing | Optimization | Pack 26 circles into a unit square to maximize sum of radii |
| erdos | Mathematics | Solve a math conjecture |
| kernel_builder | Systems | VLIW SIMD kernel optimization |
| kernel_engineering | Systems | GPU kernel optimization |
| mnist | ML | Handwritten digit classification |
| spaceship_titanic | ML | Kaggle competition |
| stanford_covid_vaccine | Bio/ML | mRNA degradation prediction |

Full catalogue and walkthroughs at [Examples docs](https://docs.coralxyz.com/examples).

### Development

[https://github.com/human-agent-society/coral#development](https://github.com/human-agent-society/coral#development)

```
# Install dev dependencies
uv sync --extra dev

# Run tests
uv run pytest tests/ -v

# Lint & format
uv run ruff check .
uv run ruff format .
```

Important

**Docker requirement:** Some built-in graders (e.g. SWE-bench, terminal-bench) use [Harbor](https://github.com/corca-ai/harbor) to run evaluations inside Docker containers. CORAL itself must **not** run inside Docker in this case, as Docker-in-Docker (DinD) is not supported. Run CORAL directly on the host machine.

### Contributing

[https://github.com/human-agent-society/coral#contributing](https://github.com/human-agent-society/coral#contributing)

Contributions are welcome — bug reports, new tasks under `examples/`, new agent runtimes, docs, the lot. Start here:

- [CONTRIBUTING.md](https://github.com/Human-Agent-Society/CORAL/blob/main/CONTRIBUTING.md) — dev setup, branch & commit conventions, PR workflow, test/lint commands.
- [AGENTS.md](https://github.com/Human-Agent-Society/CORAL/blob/main/AGENTS.md) — rules for AI-assisted contributions (CORAL is itself agent infrastructure, so we expect agent-authored PRs and have a few specific asks).

For a deeper dive into the codebase, the architecture notes in [CLAUDE.md](https://github.com/Human-Agent-Society/CORAL/blob/main/CLAUDE.md) cover the eval loop, `.coral/{public,private}/` split, grader daemon, and runtime registry.

This project is released under the Apache 2.0 [LICENSE](https://github.com/Human-Agent-Society/CORAL/blob/main/LICENSE).

### Citation

[https://github.com/human-agent-society/coral#citation](https://github.com/human-agent-society/coral#citation)

⭐ If you find CORAL useful, please consider giving us a Star and/or citing it in your work (Please use the official BibTeX below instead of Google Scholar’s auto-generated citation, which may truncate the author list):

```
@article{qu2026coral,
  title={CORAL: Towards Autonomous Multi-Agent Evolution for Open-Ended Discovery},
  author={Qu, Ao and Zheng, Han and Zhou, Zijian and Yan, Yihao and Tang, Yihong and Ong, Shao Yong and Hong, Fenglu and Zhou, Kaichen and Jiang, Chonghe and Kong, Minwei and Zhu, Jiacheng and Jiang, Xuan and Li, Sirui and Wu, Cathy and Low, Bryan Kian Hsiang and Zhao, Jinhua and Liang, Paul Pu},
  journal={arXiv preprint arXiv:2604.01658},
  year={2026}
}
```

[https://www.star-history.com/?repos=Human-Agent-Society%2FCoral&type=date&legend=top-left](https://www.star-history.com/?repos=Human-Agent-Society%2FCoral&type=date&legend=top-left)

### Acknowledgement

[https://github.com/human-agent-society/coral#acknowledgement](https://github.com/human-agent-society/coral#acknowledgement)

We thank the [TNT Accelerator](https://www.tnt.so/) for their generous support of various API credits that have helped during the development of Coral. We would also like to thank many of the inspiring prior works such as [OpenEvolve](https://github.com/algorithmicsuperintelligence/openevolve), [autoresearch](https://github.com/karpathy/autoresearch), [TTT Discover](https://arxiv.org/abs/2601.16175),  etc., that have led to the ideation of Coral.

## About

         CORAL is a robust, lightweight infrastructure for multi-agent autonomous self-evolution, built for autoresearch. Works with Claude Code, Codex, Cursor, OpenCode, Kiro, and more.       

[docs.coralxyz.com](https://docs.coralxyz.com)

### Topics

[opencode](https://github.com/topics/opencode)[multi-agent](https://github.com/topics/multi-agent)[code-generation](https://github.com/topics/code-generation)[evolutionary-algorithm](https://github.com/topics/evolutionary-algorithm)[codex](https://github.com/topics/codex)[autonomous-agents](https://github.com/topics/autonomous-agents)[agent-framework](https://github.com/topics/agent-framework)[large-language-models](https://github.com/topics/large-language-models)[llm-agents](https://github.com/topics/llm-agents)[agentic-ai](https://github.com/topics/agentic-ai)[self-evolving](https://github.com/topics/self-evolving)[claude-code](https://github.com/topics/claude-code)[coding-agent](https://github.com/topics/coding-agent)[alpha-evolve](https://github.com/topics/alpha-evolve)[swe-bench](https://github.com/topics/swe-bench)[self-evolving-agents](https://github.com/topics/self-evolving-agents)[autoresearch](https://github.com/topics/autoresearch)

### Resources

[Readme](https://github.com/human-agent-society/coral#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/human-agent-society/coral#Apache-2.0-1-ov-file)

### Contributing

[Contributing](https://github.com/human-agent-society/coral#contributing-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/Human-Agent-Society/CORAL/activity)

[Custom properties](https://github.com/Human-Agent-Society/CORAL/custom-properties)

### Stars

[669
        stars](https://github.com/Human-Agent-Society/CORAL/stargazers)

### Watchers

[0
        watching](https://github.com/Human-Agent-Society/CORAL/watchers)

### Forks

[88
        forks](https://github.com/Human-Agent-Society/CORAL/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FHuman-Agent-Society%2FCORAL&report=Human-Agent-Society+%28user%29)

## [Releases
      4](https://github.com/Human-Agent-Society/CORAL/releases)

[v0.5.1
        
          Latest
      
      May 9, 2026](https://github.com/Human-Agent-Society/CORAL/releases/tag/v0.5.1)
[+ 3 releases](https://github.com/Human-Agent-Society/CORAL/releases)

## [Packages
      0](https://github.com/orgs/Human-Agent-Society/packages?repo_name=CORAL)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/Human-Agent-Society/CORAL/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          74.0%](https://github.com/Human-Agent-Society/CORAL/search?l=python)
- [HTML
          13.6%](https://github.com/Human-Agent-Society/CORAL/search?l=html)
- [TypeScript
          10.8%](https://github.com/Human-Agent-Society/CORAL/search?l=typescript)
- [Shell
          0.8%](https://github.com/Human-Agent-Society/CORAL/search?l=shell)
- [Dockerfile
          0.6%](https://github.com/Human-Agent-Society/CORAL/search?l=dockerfile)
- [CSS
          0.1%](https://github.com/Human-Agent-Society/CORAL/search?l=css)
- [JavaScript
## gBrain Temporal Metadata

- content_timestamp: 2026-05-09
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

