---
repo: noahshinn024/reflexion-human-eval
url: https://github.com/noahshinn024/reflexion-human-eval
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - noahshinn/reflexion: [NeurIPS 2023] Reflexion: Language Agents with Verbal Reinforcement Learning · GitHub

**Source**: https://github.com/noahshinn024/reflexion-human-eval

---

[Skip to content](https://github.com/noahshinn/reflexion#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[noahshinn](https://github.com/noahshinn)

/
**[reflexion](https://github.com/noahshinn/reflexion)**

Public

- [Notifications](https://github.com/login?return_to=%2Fnoahshinn%2Freflexion)You must be signed in to change notification settings
- [Fork
    306](https://github.com/login?return_to=%2Fnoahshinn%2Freflexion)
- 
[Star
          3.2k](https://github.com/login?return_to=%2Fnoahshinn%2Freflexion)

[https://github.com/noahshinn/reflexion](https://github.com/noahshinn/reflexion)

[Branches](https://github.com/noahshinn/reflexion/branches)[Tags](https://github.com/noahshinn/reflexion/tags)

[https://github.com/noahshinn/reflexion/branches](https://github.com/noahshinn/reflexion/branches)[https://github.com/noahshinn/reflexion/tags](https://github.com/noahshinn/reflexion/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History176 Commits176 Commits |  |  |  |
| alfworld_runs | alfworld_runs |  |  |
| figures | figures |  |  |
| hotpotqa_runs | hotpotqa_runs |  |  |
| programming_runs | programming_runs |  |  |
| webshop_runs | webshop_runs |  |  |
| .gitignore | .gitignore |  |  |
| .gitmodules | .gitmodules |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# [NeurIPS 2023] Reflexion: Language Agents with Verbal Reinforcement Learning

[https://github.com/noahshinn/reflexion#neurips-2023-reflexion-language-agents-with-verbal-reinforcement-learning](https://github.com/noahshinn/reflexion#neurips-2023-reflexion-language-agents-with-verbal-reinforcement-learning)

This repo holds the code, demos, and log files for [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) by Noah Shinn, Federico Cassano, Edward Berman, Ashwin Gopinath, Karthik Narasimhan, Shunyu Yao.

[https://github.com/noahshinn/reflexion/blob/main/figures/reflexion_rl.png](https://github.com/noahshinn/reflexion/blob/main/figures/reflexion_rl.png)

[https://github.com/noahshinn/reflexion/blob/main/figures/reflexion_tasks.png](https://github.com/noahshinn/reflexion/blob/main/figures/reflexion_tasks.png)

We have released the LeetcodeHardGym [here](https://github.com/GammaTauAI/leetcode-hard-gym)

## To Run: reasoning (HotPotQA)

[https://github.com/noahshinn/reflexion#to-run-reasoning-hotpotqa](https://github.com/noahshinn/reflexion#to-run-reasoning-hotpotqa)

We have provided a set of notebooks to easily run, explore, and interact with the results of the reasoning experiments. Each experiment consists of a random sample of 100 questions from the HotPotQA distractor dataset. Each question in the sample is attempted by an agent with a specific type and reflexion strategy.

### Setup

[https://github.com/noahshinn/reflexion#setup](https://github.com/noahshinn/reflexion#setup)

To get started:

1. Clone this repo and move to the HotPotQA directory:

```
git clone https://github.com/noahshinn/reflexion && cd ./hotpotqa_runs
```

1. Install the module dependencies into your environment:

```
pip install -r requirements.txt
```

1. Set `OPENAI_API_KEY` environment variable to your OpenAI API key:

```
export OPENAI_API_KEY=<your key>
```

#### Agent Types

[https://github.com/noahshinn/reflexion#agent-types](https://github.com/noahshinn/reflexion#agent-types)

Agent type is determined by the notebook you choose to run. The available agent types include:

- 

`ReAct` - ReAct Agent

- 

`CoT_context` - CoT Agent given supporting context about the question

- 

`CoT_no_context` - CoT Agent given no supporting context about the question

The notebook for each agent type is located in the `./hotpot_runs/notebooks` directory.

#### Reflexion Strategies

[https://github.com/noahshinn/reflexion#reflexion-strategies](https://github.com/noahshinn/reflexion#reflexion-strategies)

Each notebook allows you to specify the reflexion strategy to be used by the agents. The available reflexion strategies, which are defined in an `Enum`, include:

- 

`ReflexionStrategy.NONE` - The agent is not given any information about its last attempt.

- 

`ReflexionStrategy.LAST_ATTEMPT` - The agent is given its reasoning trace from its last attempt on the question as context.

- 

`ReflexionStrategy.REFLEXION` - The agent is given its self-reflection on the last attempt as context.

- 

`ReflexionStrategy.LAST_ATTEMPT_AND_REFLEXION` -  The agent is given both its reasoning trace and self-reflection on the last attempt as context.

### To Run: decision-making (AlfWorld)

[https://github.com/noahshinn/reflexion#to-run-decision-making-alfworld](https://github.com/noahshinn/reflexion#to-run-decision-making-alfworld)

Clone this repo and move to the AlfWorld directory

```
git clone https://github.com/noahshinn/reflexion && cd ./alfworld_runs
```

Specify the run parameters in `./run_reflexion.sh`. `num_trials`: number of iterative learning steps `num_envs`: number of task-environment pairs per trial `run_name`: the name for this run `use_memory`: use persisting memory to store self-reflections (turn off to run a baseline run) `is_resume`: use logging directory to resume a previous run `resume_dir`: the logging directory from which to resume the previous run `start_trial_num`: if resume run, then the trial number of which to start

Run the trial

```
./run_reflexion.sh
```

The logs will be sent to `./root/<run_name>`.

### Another Note

[https://github.com/noahshinn/reflexion#another-note](https://github.com/noahshinn/reflexion#another-note)

Due to the nature of these experiments, it may not be feasible for individual developers to rerun the results as GPT-4 has limited access and significant API charges. All runs from the paper and additional results are logged in `./alfworld_runs/root` for decision-making, `./hotpotqa_runs/root` for reasoning, and `./programming_runs/root` for programming

### Other Notes

[https://github.com/noahshinn/reflexion#other-notes](https://github.com/noahshinn/reflexion#other-notes)

Check out the original implementation [here](https://github.com/noahshinn/reflexion-draft)

Read one of the original blog posts [here](https://nanothoughts.substack.com/p/reflecting-on-reflexion)

Check out an [Appl](https://github.com/appl-team/appl) implementation [here](https://github.com/appl-team/reppl/tree/main/reflexion).

Check out an interesting type-prediction implementation here: [OpenTau](https://github.com/GammaTauAI/opentau)

For all questions, contact [noahrshinn@gmail.com](https://github.com/noahshinn/reflexion/blob/main/noahrshinn@gmail.com)

### Cite

[https://github.com/noahshinn/reflexion#cite](https://github.com/noahshinn/reflexion#cite)

```
@misc{shinn2023reflexion,
      title={Reflexion: Language Agents with Verbal Reinforcement Learning}, 
      author={Noah Shinn and Federico Cassano and Edward Berman and Ashwin Gopinath and Karthik Narasimhan and Shunyu Yao},
      year={2023},
      eprint={2303.11366},
      archivePrefix={arXiv},
      primaryClass={cs.AI}
}
```

## About

         [NeurIPS 2023] Reflexion: Language Agents with Verbal Reinforcement Learning       

### Topics

[ai](https://github.com/topics/ai)[artificial-intelligence](https://github.com/topics/artificial-intelligence)[llm](https://github.com/topics/llm)

### Resources

[Readme](https://github.com/noahshinn/reflexion#readme-ov-file)

### License

[MIT license](https://github.com/noahshinn/reflexion#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/noahshinn/reflexion/activity)

### Stars

[3.2k
        stars](https://github.com/noahshinn/reflexion/stargazers)

### Watchers

[31
        watching](https://github.com/noahshinn/reflexion/watchers)

### Forks

[306
        forks](https://github.com/noahshinn/reflexion/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fnoahshinn%2Freflexion&report=noahshinn+%28user%29)

## [Releases](https://github.com/noahshinn/reflexion/releases)

No releases published

## [Packages
      0](https://github.com/users/noahshinn/packages?repo_name=reflexion)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/noahshinn/reflexion/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          90.0%](https://github.com/noahshinn/reflexion/search?l=python)
- [Jupyter Notebook
          7.9%](https://github.com/noahshinn/reflexion/search?l=jupyter-notebook)
- [Shell
          2.1%](https://github.com/noahshinn/reflexion/search?l=shell)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2023
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2023-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

