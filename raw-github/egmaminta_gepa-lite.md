---
repo: egmaminta/gepa-lite
url: https://github.com/egmaminta/gepa-lite
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - egmaminta/GEPA-Lite: A lightweight implementation of the GEPA (Genetic-Pareto) prompt optimization method for large language models. · GitHub

**Source**: https://github.com/egmaminta/gepa-lite

---

[Skip to content](https://github.com/egmaminta/gepa-lite#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[egmaminta](https://github.com/egmaminta)

/
**[GEPA-Lite](https://github.com/egmaminta/GEPA-Lite)**

Public

- [Notifications](https://github.com/login?return_to=%2Fegmaminta%2FGEPA-Lite)You must be signed in to change notification settings
- [Fork
    4](https://github.com/login?return_to=%2Fegmaminta%2FGEPA-Lite)
- 
[Star
          55](https://github.com/login?return_to=%2Fegmaminta%2FGEPA-Lite)

[https://github.com/egmaminta/GEPA-Lite](https://github.com/egmaminta/GEPA-Lite)

[Branches](https://github.com/egmaminta/GEPA-Lite/branches)[Tags](https://github.com/egmaminta/GEPA-Lite/tags)

[https://github.com/egmaminta/GEPA-Lite/branches](https://github.com/egmaminta/GEPA-Lite/branches)[https://github.com/egmaminta/GEPA-Lite/tags](https://github.com/egmaminta/GEPA-Lite/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History2 Commits2 Commits |  |  |  |
| .gitignore | .gitignore |  |  |
| Dfeedback.json | Dfeedback.json |  |  |
| Dpareto.json | Dpareto.json |  |  |
| GEPA.py | GEPA.py |  |  |
| GEPA_cfg.yaml | GEPA_cfg.yaml |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| demo.gif | demo.gif |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# GEPA-Lite: Let the LLM reflect and optimize its own prompts.

[https://github.com/egmaminta/gepa-lite#gepa-lite-let-the-llm-reflect-and-optimize-its-own-prompts](https://github.com/egmaminta/gepa-lite#gepa-lite-let-the-llm-reflect-and-optimize-its-own-prompts)

`#ForTheLoveOfCode`

**GEPA-Lite** is a lightweight implementation based on the proposed [GEPA prompt optimization method](https://arxiv.org/pdf/2507.19457) that is custom fit for single-task applications. It's built on the **core principle of LLM self-reflection, self-improvement, streamlined**.

Developed in the spirit of open-source initiatives like `Google Summer of Code 2025` and `For the Love of Code 2025`, this project leverages **Gemma** (`ollama::gemma3n:e4b`) as its core model. The project also offers optional support for the **Gemini API**, allowing access to powerful models like `gemini-2.5-flash-lite`, `gemini-2.5-flash`, and `gemini-2.5-pro`.

Created by: *Emmanuel G. Maminta** (`GitHub: egmaminta`, [LinkedIn: egmaminta](https://ph.linkedin.com/in/egmaminta), [Personal Blog: egmaminta.github.io](https://egmaminta.github.io/), `Email: egmaminta@up.edu.ph`)

*University of the Philippines

#### Demonstration

[https://github.com/egmaminta/gepa-lite#demonstration](https://github.com/egmaminta/gepa-lite#demonstration)

[https://github.com/egmaminta/GEPA-Lite/blob/main/demo.gif](https://github.com/egmaminta/GEPA-Lite/blob/main/demo.gif)

       GEPA-Lite demonstration on sampled GSM8K**. **Initial prompt**: *"You are an assistant and your task is to answer the user's question."***Final prompt**: *"Your task is to solve mathematical word problems and output only the final numerical answer."*

**[GSM8K](https://github.com/openai/grade-school-math) consists of 8.5K high quality grade school math problems created by human problem writers.

#### Four strategies implemented

[https://github.com/egmaminta/gepa-lite#four-strategies-implemented](https://github.com/egmaminta/gepa-lite#four-strategies-implemented)

| Strategy | Trigger condition | Action taken | Goal |
|---|---|---|---|
| Exploit-Max | Only one best candidate remains | Select it directly | Focus on clear winner |
| Exploit-Normal | Multiple best, Q branch | Sample one by frequency as "best" | Exploit robust, multi-task candidates |
| Exploit-Merge | Multiple best, (1-Q) branch | Merge (mutate) all bests into a new candidate | Synthesize new, possibly better prompt |
| Explore | With probability (1-P) | Pick a random candidate from the pool | Maintain diversity, avoid local optima |

Note: `P`: Exploit probability, `Q`: Probability to not merge (or not mutate) all bests

Disclaimer: This implementation contains minor deviations from the reference paper. I, the creator of this repository, am held accountable for any part that is implemented incorrectly. However, the idea remains the same. Feel free to contribute!

## Reference paper

[https://github.com/egmaminta/gepa-lite#reference-paper](https://github.com/egmaminta/gepa-lite#reference-paper)

Title: [GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning](https://arxiv.org/pdf/2507.19457)

Authors: *Lakshya A Agrawal1*, *Shangyin Tan1*, *Dilara Soylu2*, *Noah Ziems4*, *Rishi Khare1*, *Krista Opsahl-Ong5*, *Arnav Singhvi2,5*, *Herumb Shandilya2*, *Michael J Ryan2*, *Meng Jiang4*, *Christopher Potts2*, *Koushik Sen1*, *Alexandros G. Dimakis1,3*, *Ion Stoica1*, *Dan Klein1*, *Matei Zaharia1,5*, *Omar Khattab6*

1UC Berkeley, 2Stanford University, 3BespokeLabs.ai, 4Notre Dame, 5Databricks, 6MIT

TL;DR: GEPA is introduced, which utilizes natural language reflection to learn from trial and error. GEPA outperforms the reinforcement learning method GRPO (Group Relative Policy Optimization) by an average of 10% and up to 20%, while using up to 35 times fewer rollouts. It also surpasses the leading prompt optimizer, MIPROv2, by over 10%. Additionally, GEPA shows potential as an effective inference-time search strategy for code optimization.

## About the implementation

[https://github.com/egmaminta/gepa-lite#about-the-implementation](https://github.com/egmaminta/gepa-lite#about-the-implementation)

This implementation performs iterative prompt evolution using concurrent generation, evaluation, Pareto-style selection, reflection-based mutation, and optional merging. It is fully asynchronous around model I/O to maximize throughput under a fixed evaluation budget.

#### High-level flow

[https://github.com/egmaminta/gepa-lite#high-level-flow](https://github.com/egmaminta/gepa-lite#high-level-flow)

1. Load config (`GEPA_cfg.yaml`) and datasets (`Dpareto.json`, `Dfeedback.json`).
2. Generate an initial pool of diverse candidate prompts concurrently from a seed prompt.
3. Evaluate each candidate over the full Pareto set (`Dpareto`) to build a score matrix S (candidates × tasks).
4. Enter the optimization loop (budget-limited): 
  - Sample a mini-batch of feedback examples (`Dfeedback`).
  - Choose a candidate via exploitation (probability P) or random exploration (1−P).
  - Under exploitation: 
    - Use Pareto-based filtering + dominance removal to get a set of non-dominated "best-on-something" candidates.
    - With probability Q: sample one candidate proportional to its frequency of being per-task best.
    - With probability (1−Q): merge multiple top candidates into a synthesized prompt.

  - Evaluate the chosen prompt on the mini-batch, collect structured feedback text.
  - Reflect (mutation step): ask the reflection model to propose an improved prompt.
  - Evaluate the new prompt on the same mini-batch; if it meets or exceeds the parent’s mean mini-batch score, evaluate it on the full Pareto set and append to the pool.

5. After budget exhaustion, report the prompt with highest mean Pareto score.

#### Data roles

[https://github.com/egmaminta/gepa-lite#data-roles](https://github.com/egmaminta/gepa-lite#data-roles)

- `Dpareto`: Ground-truth QA pairs used for stable, comparable scoring across candidates.
- `Dfeedback`: Additional sampled items for rapid, lower-cost iterative refinement.
- `Scores`: String similarity via `difflib.SequenceMatcher` (ratio ∈ [0,1]); exact matches earn 1. (You have the option to implement your own `eval_metric` and `eval_feedback` functions).

#### Target and reflection model

[https://github.com/egmaminta/gepa-lite#target-and-reflection-model](https://github.com/egmaminta/gepa-lite#target-and-reflection-model)

- Target model is the worker that actually answers the user's questions. It runs candidate prompts and produces task outputs that get scored.
- Reflection model is the coach that looks at the worker's prompt plus feedback and suggests an improved prompt. It never answers the task directly; it just proposes new or merged prompts.

#### Candidate selection (Pareto filtering)

[https://github.com/egmaminta/gepa-lite#candidate-selection-pareto-filtering](https://github.com/egmaminta/gepa-lite#candidate-selection-pareto-filtering)

- For each task (column), collect candidates achieving the column max.
- Union these sets → initial elite pool.
- Remove dominated candidates: a candidate dominated if another is ≥ on all tasks and > on at least one.
- Count how often each survivor is task-best; convert frequencies to a sampling distribution.
- This concentrates probability mass on genuinely distinct trade-offs and eliminates strictly inferior prompts.

#### Reflection & mutation

[https://github.com/egmaminta/gepa-lite#reflection--mutation](https://github.com/egmaminta/gepa-lite#reflection--mutation)

- A meta prompt (`META_PROMPT`) injects the current prompt and structured per-sample feedback (query, model answer, ground truth, score, textual feedback).
- The reflection model returns at most one improved prompt (keeps loop tight, reduces drift).
- Only promotes a mutant to global evaluation if it does not regress on the mini-batch.

#### Merging

[https://github.com/egmaminta/gepa-lite#merging](https://github.com/egmaminta/gepa-lite#merging)

When multiple strong candidates exist, a merge step requests a synthesized prompt that preserves strengths and addresses weaknesses (controlled by probability branch).

#### Four strategies used in the GEPA optimization loop

[https://github.com/egmaminta/gepa-lite#four-strategies-used-in-the-gepa-optimization-loop](https://github.com/egmaminta/gepa-lite#four-strategies-used-in-the-gepa-optimization-loop)

1. `Exploit-Max`
  - When: Only one candidate survives Pareto filtering (i.e., it is the clear best).
  - What happens: The algorithm selects this single best candidate deterministically for further evaluation and mutation.
  - Purpose: Quickly exploit a clear winner, focusing resources on refining the top performer.

2. `Exploit-Normal`
  - When: Multiple non-dominated candidates survive, and a random draw (with probability Q) chooses not to merge.
  - What happens: One candidate is sampled from the survivors, with probability proportional to how often each is "best" across tasks.
  - Purpose: Exploit strong candidates while maintaining diversity, allowing the process to focus on robust prompts that perform well on multiple tasks.

3. `Exploit-Merge`
  - When: Multiple non-dominated candidates survive, and a random draw (with probability 1-Q) chooses to merge.
  - What happens: The algorithm synthesizes a new prompt by merging the surviving candidates, aiming to combine their strengths and address their weaknesses.
  - Purpose: Encourage innovation and avoid stagnation by creating new, potentially superior prompts from the best available options.

4. `Explore`
  - When: With probability (1-P), the algorithm chooses to explore rather than exploit.
  - What happens: A random candidate is selected from the entire pool, regardless of its current performance.
  - Purpose: Maintain diversity, prevent premature convergence, and allow the discovery of overlooked or novel solutions.

#### Concurrency

[https://github.com/egmaminta/gepa-lite#concurrency](https://github.com/egmaminta/gepa-lite#concurrency)

- Async tasks evaluate prompts across samples in parallel (per candidate and per mini-batch mutation stage).
- A semaphore throttles concurrent initial generations to respect model rate limits.

#### Key functions

[https://github.com/egmaminta/gepa-lite#key-functions](https://github.com/egmaminta/gepa-lite#key-functions)

- `generate_initial_candidates_from_seed`: Concurrent single-prompt generations for diversity + deduplication.
- `select_candidate`: Pareto elite extraction, dominance pruning, probability assignment.
- `extract_response_from_target` / `extract_response_from_reflection`: Structured JSON-like parsing via `Pydantic` schema.
- `GEPA`: Orchestrates the evolutionary loop with budget accounting.
- `extract_merged_prompt`: Synthesizes multiple prompts into one.
- `eval_metric` / `eval_feedback`: Scoring + diagnostic feedback synthesis.

#### Budget control

[https://github.com/egmaminta/gepa-lite#budget-control](https://github.com/egmaminta/gepa-lite#budget-control)

Every model query against a sample decrements the global budget. Full-set evaluations are only triggered when a mutation shows promise on the mini-batch, amortizing expensive scoring.

#### Design rationale

[https://github.com/egmaminta/gepa-lite#design-rationale](https://github.com/egmaminta/gepa-lite#design-rationale)

- Frequency weighting of per-task best appearances yields a simple proxy for multi-task robustness without solving a weighted scalarization.
- Using an explicit merge path combats stagnation when multiple partial specialists exist.
- Mini-batch gating reduces variance while avoiding full-set overfitting each iteration.
- Limiting reflection to one improvement per cycle simplifies acceptance logic and traceability.

#### Limitations / future improvements

[https://github.com/egmaminta/gepa-lite#limitations--future-improvements](https://github.com/egmaminta/gepa-lite#limitations--future-improvements)

- Similarity metric is surface-level; could plug in semantic or task-specific evaluators.
- Needs epsilon-based comparisons for floating scores to avoid brittle equality.
- Dominance check is O(k^2 * tasks); could be optimized for large pools.
- No archival mechanism (e.g., hall-of-fame) or diversity penalty to prevent convergence to local optima.
- Reflection may benefit from multiple candidates with bandit selection.
- Logging could be made structured (JSON) for analytics.

#### Extensibility points

[https://github.com/egmaminta/gepa-lite#extensibility-points](https://github.com/egmaminta/gepa-lite#extensibility-points)

- Swap `eval_metric` for domain-specific scoring.
- Add alternative selection policies (e.g., Thompson sampling on mean + variance).
- Introduce early stopping when no improvement in N consecutive accepted mutations.
- Integrate caching for repeated model queries on unchanged (prompt, query) pairs.

## General instructions

[https://github.com/egmaminta/gepa-lite#general-instructions](https://github.com/egmaminta/gepa-lite#general-instructions)

1. Ensure you have `miniconda` / `anaconda` installed. Create a virtual environment with Python ver. 3.11.13.

```
conda create -n "GEPA-Lite" python=3.11.13 -y
```

1. Activate the virtual environment.

```
conda activate GEPA-Lite
```

1. Install the required libraries.

```
pip install -r requirements.txt
```

## Configuration instructions

[https://github.com/egmaminta/gepa-lite#configuration-instructions](https://github.com/egmaminta/gepa-lite#configuration-instructions)

1. Open `GEPA_cfg.yml`.
2. **(Gemini API)** Replace placeholder `PROJECT` and `LOCATION` if `VERTEXAI: true`; else optionally set `VERTEXAI: false`. **(Ollama API)** Replace `TARGET_MODEL` and `REFLECTION_MODEL` to Ollama-provided `gemma3n:e4b` model.
3. Adjust `BUDGET` ensuring it's ≥ `(NUM_INITIAL_CANDIDATE_PROMPTS * |Dpareto|) + (MINI_BATCH_SIZE * 5 * |Dpareto|) + safety margin (~30%)`.
4. Tune `EXPLOIT_PROB` and `MERGE_PROB` based on desired exploration.
5. Save and re-run the main script (`GEPA.py`).

## Dpareto and Dfeedback instructions

[https://github.com/egmaminta/gepa-lite#dpareto-and-dfeedback-instructions](https://github.com/egmaminta/gepa-lite#dpareto-and-dfeedback-instructions)

1. Purpose 
  - `Dpareto.json`: Stable evaluation set. Used to compute full score vectors per candidate prompt (deterministic performance basis).
  - `Dfeedback.json`: Fast adaptation pool. Small random mini-batches sampled each iteration to generate feedback and mutate prompts.

2. Expected schema. Required keys: `question`, `answer` (non-empty strings). Avoid extra keys unless you extend code to read them.

```
[
  {
    "question": "string input or query",
    "answer": "ground truth string answer"
  },
  ...
]
```

1. Choosing content 
  - `Dpareto.json`: Must be representative, cover all subtopics / formats / difficulty tiers. It must vary in length, phrasing, edge cases (numbers, units, multi-step reasoning). Do not modify mid-run.
  - `Dfeedback.json`: Larger pool than `MINI_BATCH_SIZE` (≥ twice the size of `Dpareto`). Higher variability, includes tricky and failure-prone cases. Can include some overlap with `Dpareto`, but prefer mostly distinct to broaden learning signals.

2. Sizing guidelines 
  - `Dpareto` size: Small tasks (QA-like) 15-40; moderate 40-100. Larger increases cost linearly.
  - `Dfeedback` size: 2–5× `Dpareto` or at least 50 if you want variety; `minimum = MINI_BATCH_SIZE * 2 * |Dpareto|`.
  - Budget sanity: `Initial cost = NUM_INITIAL_CANDIDATE_PROMPTS * |Dpareto|`. Each accepted new candidate costs another `|Dpareto|`. Ensure `BUDGET ≥ initial + (expected improvements * |Dpareto|) + iteration minibatch costs`.

3. Difficulty / Distribution Strategy 
  - Create a difficulty split: easy / medium / hard (e.g., 40/40/20). Hard items expose weaknesses; easy items stabilize averages.
  - Ensure each sub-domain appears at least twice in `Dpareto` to reduce variance.
  - Put rare but critical edge cases (formatting, units, rounding) in `Dpareto` so they can influence selection pressure.

4. Workflow to build `Dpareto`
  1. Gather raw candidate pairs.
  2. Deduplicate (case-insensitive question hash).
  3. Remove ambiguous items.
  4. Normalize answers.
  5. Tag coverage (spread topics).
  6. Shuffle with fixed seed; pick top N.
  7. Save to `Dpareto.json` and freeze (commit with version tag).

5. Workflow to build `Dfeedback`
  1. Start with remaining pool not used in Dpareto.
  2. Inject a few "stress" / adversarial items (format traps, long inputs).
  3. Ensure at least `MINI_BATCH_SIZE * 2 * |Dpareto|` total.
  4. Optionally rotate / refresh between runs (version the file).

## Acknowledgments

[https://github.com/egmaminta/gepa-lite#acknowledgments](https://github.com/egmaminta/gepa-lite#acknowledgments)

I'd like to acknowledge the authors of GEPA paper for their awesome work; the team (developers, engineers, and scientists) behind [Gemma 3n](https://deepmind.google/models/gemma/gemma-3n/), [Gemini](https://deepmind.google/models/gemini/) for their powerful models; and [Google Summer of Code 2025](https://summerofcode.withgoogle.com/) and [For the Love of Code 2025](https://github.blog/open-source/for-the-love-of-code-2025/) for inspiring me to continue contributing to open-source. `#ForTheLoveOfCode`

## About

         A lightweight implementation of the GEPA (Genetic-Pareto) prompt optimization method for large language models.       

### Topics

[open-source](https://github.com/topics/open-source)[gemini](https://github.com/topics/gemini)[google-summer-of-code](https://github.com/topics/google-summer-of-code)[gemma](https://github.com/topics/gemma)[gemini-api](https://github.com/topics/gemini-api)[prompt-tuning](https://github.com/topics/prompt-tuning)[large-language-models](https://github.com/topics/large-language-models)[student-vscode](https://github.com/topics/student-vscode)[ollama](https://github.com/topics/ollama)[prompt-optimization](https://github.com/topics/prompt-optimization)[fortheloveofcode](https://github.com/topics/fortheloveofcode)

### Resources

[Readme](https://github.com/egmaminta/gepa-lite#readme-ov-file)

### License

[MIT license](https://github.com/egmaminta/gepa-lite#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/egmaminta/GEPA-Lite/activity)

### Stars

[55
        stars](https://github.com/egmaminta/GEPA-Lite/stargazers)

### Watchers

[0
        watching](https://github.com/egmaminta/GEPA-Lite/watchers)

### Forks

[4
        forks](https://github.com/egmaminta/GEPA-Lite/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fegmaminta%2FGEPA-Lite&report=egmaminta+%28user%29)

## [Releases](https://github.com/egmaminta/GEPA-Lite/releases)

No releases published

## [Packages
      0](https://github.com/users/egmaminta/packages?repo_name=GEPA-Lite)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/egmaminta/GEPA-Lite/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.
