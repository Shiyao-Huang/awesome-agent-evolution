---
repo: gepa-ai/gepa
url: https://github.com/gepa-ai/gepa
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - gepa-ai/gepa: Optimize prompts, code, and more with AI-powered Reflective Text Evolution · GitHub

**Source**: https://github.com/gepa-ai/gepa

---

[Skip to content](https://github.com/gepa-ai/gepa#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[gepa-ai](https://github.com/gepa-ai)

/
**[gepa](https://github.com/gepa-ai/gepa)**

Public

- [Notifications](https://github.com/login?return_to=%2Fgepa-ai%2Fgepa)You must be signed in to change notification settings
- [Fork
    380](https://github.com/login?return_to=%2Fgepa-ai%2Fgepa)
- 
[Star
          4.5k](https://github.com/login?return_to=%2Fgepa-ai%2Fgepa)

[https://github.com/gepa-ai/gepa](https://github.com/gepa-ai/gepa)

[Branches](https://github.com/gepa-ai/gepa/branches)[Tags](https://github.com/gepa-ai/gepa/tags)

[https://github.com/gepa-ai/gepa/branches](https://github.com/gepa-ai/gepa/branches)[https://github.com/gepa-ai/gepa/tags](https://github.com/gepa-ai/gepa/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History791 Commits791 Commits |  |  |  |
| .github | .github |  |  |
| assets | assets |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| src/gepa | src/gepa |  |  |
| tests | tests |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CITATION.cff | CITATION.cff |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| pyrightconfig.json | pyrightconfig.json |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://raw.githubusercontent.com/gepa-ai/gepa/refs/heads/main/docs/docs/assets/gepa_logo_with_text.svg](https://raw.githubusercontent.com/gepa-ai/gepa/refs/heads/main/docs/docs/assets/gepa_logo_with_text.svg)

**Optimize any text parameter — prompts, code, agent architectures, configurations — using LLM-based reflection and Pareto-efficient evolutionary search.**

[Website](https://gepa-ai.github.io/gepa/)  |    [Quick Start](https://gepa-ai.github.io/gepa/guides/quickstart/)  |    [Paper](https://arxiv.org/abs/2507.19457)  |    [Blog](https://gepa-ai.github.io/gepa/blog/)  |    [Discord](https://discord.gg/WXFSeVGdbW)

[https://pypi.org/project/gepa/](https://pypi.org/project/gepa/)[https://pepy.tech/projects/gepa](https://pepy.tech/projects/gepa)[https://github.com/gepa-ai/gepa](https://github.com/gepa-ai/gepa)[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

[https://join.slack.com/t/gepa-ai/shared_invite/zt-3o352xhyf-QZDfwmMpiQjsvoSYo7M1_w](https://join.slack.com/t/gepa-ai/shared_invite/zt-3o352xhyf-QZDfwmMpiQjsvoSYo7M1_w)[https://discord.gg/WXFSeVGdbW](https://discord.gg/WXFSeVGdbW)

---

## What is GEPA?

[https://github.com/gepa-ai/gepa#what-is-gepa](https://github.com/gepa-ai/gepa#what-is-gepa)

**GEPA** (Genetic-Pareto) is a framework for optimizing any system with textual parameters against any evaluation metric. Unlike RL or gradient-based methods that collapse execution traces into a single scalar reward, GEPA uses LLMs to *read* full execution traces — error messages, profiling data, reasoning logs — to diagnose *why* a candidate failed and propose targeted fixes. Through iterative reflection, mutation, and Pareto-aware selection, GEPA evolves high-performing variants with minimal evaluations.

**If you can measure it, you can optimize it**: prompts, code, agent architectures, scheduling policies, vector graphics, and more.

### Key Results

[https://github.com/gepa-ai/gepa#key-results](https://github.com/gepa-ai/gepa#key-results)

|  |  |
|---|---|
| 90x cheaper | Open-source models + GEPA beat Claude Opus 4.1 at Databricks |
| 35x faster than RL | 100–500 evaluations vs. 5,000–25,000+ for GRPO (paper) |
| 32% → 89% | ARC-AGI agent accuracy via architecture discovery |
| 40.2% cost savings | Cloud scheduling policy discovered by GEPA, beating expert heuristics |
| 55% → 82% | Coding agent resolve rate on Jinja via auto-learned skills |
| 50+ production uses | Across Shopify, Databricks, Dropbox, OpenAI, Pydantic, MLflow, Comet ML, and more |

> *"Both DSPy and (especially) **GEPA are currently severely under hyped** in the AI context engineering world"* — **Tobi Lutke**, CEO, Shopify

---

## Installation

[https://github.com/gepa-ai/gepa#installation](https://github.com/gepa-ai/gepa#installation)

```
pip install gepa
```

To install the latest from `main`:

```
pip install git+https://github.com/gepa-ai/gepa.git
```

---

## Quick Start

[https://github.com/gepa-ai/gepa#quick-start](https://github.com/gepa-ai/gepa#quick-start)

### Simple Prompt Optimization

[https://github.com/gepa-ai/gepa#simple-prompt-optimization](https://github.com/gepa-ai/gepa#simple-prompt-optimization)

Optimize a system prompt for math problems from the AIME benchmark in a few lines of code ([full tutorial](https://dspy.ai/tutorials/gepa_aime/)):

```
import gepa

trainset, valset, _ = gepa.examples.aime.init_dataset()

seed_prompt = {
    "system_prompt": "You are a helpful assistant. Answer the question. "
                     "Put your final answer in the format '### <answer>'"
}

result = gepa.optimize(
    seed_candidate=seed_prompt,
    trainset=trainset,
    valset=valset,
    task_lm="openai/gpt-4.1-mini",
    max_metric_calls=150,
    reflection_lm="openai/gpt-5",
)

print("Optimized prompt:", result.best_candidate['system_prompt'])
```

**Result:** GPT-4.1 Mini goes from 46.6% → 56.6% on AIME 2025 (+10 percentage points).

### With DSPy (Recommended for AI Pipelines)

[https://github.com/gepa-ai/gepa#with-dspy-recommended-for-ai-pipelines](https://github.com/gepa-ai/gepa#with-dspy-recommended-for-ai-pipelines)

The most powerful way to use GEPA for prompt optimization is within [DSPy](https://dspy.ai/), where it's available as `dspy.GEPA`. See [dspy.GEPA tutorials](https://dspy.ai/tutorials/gepa_ai_program/) for executable notebooks.

```
import dspy

optimizer = dspy.GEPA(
    metric=your_metric,
    max_metric_calls=150,
    reflection_lm="openai/gpt-5",
)
optimized_program = optimizer.compile(student=MyProgram(), trainset=trainset, valset=valset)
```

### optimize_anything: Beyond Prompts

[https://github.com/gepa-ai/gepa#optimize_anything-beyond-prompts](https://github.com/gepa-ai/gepa#optimize_anything-beyond-prompts)

The [optimize_anything](https://gepa-ai.github.io/gepa/blog/introducing-optimize-anything/) API optimizes *any* text artifact — code, agent architectures, configurations, SVGs — not just prompts. You provide an evaluator; the system handles the search.

```
import gepa.optimize_anything as oa
from gepa.optimize_anything import optimize_anything, GEPAConfig, EngineConfig

def evaluate(candidate: str) -> float:
    result = run_my_system(candidate)
    oa.log(f"Output: {result.output}")      # Actionable Side Information
    oa.log(f"Error: {result.error}")         # feeds back into reflection
    return result.score

result = optimize_anything(
    seed_candidate="<your initial artifact>",
    evaluator=evaluate,
    objective="Describe what you want to optimize for.",
    config=GEPAConfig(engine=EngineConfig(max_metric_calls=100)),
)
```

---

## How It Works

[https://github.com/gepa-ai/gepa#how-it-works](https://github.com/gepa-ai/gepa#how-it-works)

Traditional optimizers know *that* a candidate failed but not *why*. GEPA takes a different approach:

1. **Select** a candidate from the Pareto frontier (candidates excelling on different task subsets)
2. **Execute** on a minibatch, capturing full execution traces
3. **Reflect** — an LLM reads the traces (error messages, profiler output, reasoning logs) and diagnoses failures
4. **Mutate** — generate an improved candidate informed by accumulated lessons from all ancestors
5. **Accept** — add to the pool if improved, update the Pareto front

GEPA also supports **system-aware merge** — combining strengths of two Pareto-optimal candidates excelling on different tasks. The key concept is **Actionable Side Information (ASI)**: diagnostic feedback returned by evaluators that serves as the text-optimization analogue of a gradient.

For details, see the [paper](https://arxiv.org/abs/2507.19457) and the [documentation](https://gepa-ai.github.io/gepa/guides/).

---

## Adapters: Plug GEPA into Any System

[https://github.com/gepa-ai/gepa#adapters-plug-gepa-into-any-system](https://github.com/gepa-ai/gepa#adapters-plug-gepa-into-any-system)

GEPA connects to your system via the [GEPAAdapter](https://github.com/gepa-ai/gepa/blob/main/src/gepa/core/adapter.py) interface — implement `evaluate` and `make_reflective_dataset`, and GEPA handles the rest.

**Built-in adapters:**

| Adapter | Description |
|---|---|
| DefaultAdapter | System prompt optimization for single-turn LLM tasks |
| ConfidenceAdapter | Logprob-aware classification optimization — penalizes lucky guesses and feeds confidence diagnostics into reflection. pip install "gepa[confidence]" |
| DSPy Full Program | Evolves entire DSPy programs (signatures, modules, control flow). 67% → 93% on MATH. |
| Generic RAG | Vector store-agnostic RAG optimization (ChromaDB, Weaviate, Qdrant, Pinecone) |
| MCP Adapter | Optimize MCP tool descriptions and system prompts |
| TerminalBench | Optimize the Terminus terminal-use agent |
| AnyMaths | Mathematical problem-solving and reasoning tasks |

See the [adapters guide](https://gepa-ai.github.io/gepa/guides/adapters/) for how to build your own, and [DSPy's adapter](https://github.com/stanfordnlp/dspy/tree/main/dspy/teleprompt/gepa/gepa_utils.py) as a reference.

---

## Integrations

[https://github.com/gepa-ai/gepa#integrations](https://github.com/gepa-ai/gepa#integrations)

GEPA is integrated into several major frameworks:

- **[DSPy](https://dspy.ai/)** — `dspy.GEPA` for optimizing DSPy programs. [Tutorials](https://dspy.ai/tutorials/gepa_ai_program/).
- **[MLflow](https://mlflow.org/docs/latest/genai/prompt-registry/optimize-prompts/)** — `mlflow.genai.optimize_prompts()` for automatic prompt improvement.
- **[Comet ML Opik](https://www.comet.com/docs/opik/agent_optimization/algorithms/gepa_optimizer)** — Core optimization algorithm in Opik Agent Optimizer.
- **[Pydantic](https://pydantic.dev/articles/prompt-optimization-with-gepa)** — Prompt optimization for Pydantic AI.
- **[OpenAI Cookbook](https://cookbook.openai.com/examples/partners/self_evolving_agents/autonomous_agent_retraining)** — Self-evolving agents with GEPA.
- **[HuggingFace Cookbook](https://huggingface.co/learn/cookbook/en/dspy_gepa)** — Prompt optimization guide.
- **[Google ADK](https://adk.dev/optimize/)** — Built-in agent optimization in Google's Agent Development Kit. [Community tutorial](https://raphaelmansuy.github.io/adk_training/blog/gepa-optimization-tutorial/).

---

## Example Optimized Prompts

[https://github.com/gepa-ai/gepa#example-optimized-prompts](https://github.com/gepa-ai/gepa#example-optimized-prompts)

GEPA can be thought of as precomputing reasoning during optimization to produce a plan for future task instances. Here are examples of the detailed prompts GEPA discovers:

| Example GEPA Prompts |  |
|---|---|
| HotpotQA (multi-hop QA) Prompt | AIME Prompt |
| Click to view full HotpotQA prompt
[HotpotQA Prompt Begin]
You will be given two input fields: question and summary_1.
Your task is to generate a new search query (query) optimized for the second hop of a multi-hop retrieval system. The original user question is typically complex and requires information from multiple documents to answer. The first hop query is the original question used to retrieve an initial set of documents. Your goal is to generate a second hop query that retrieves additional relevant documents that were not found in the first hop but are necessary to answer the original question completely.
Detailed task instructions and hints:

Input Understanding:

question is the original multi-hop question posed by the user.
summary_1 is a concise summary of information from a document retrieved in the first hop, which partially addresses the question.

Purpose and Context:

Your generated query aims to find the missing pieces of information needed to fully answer the question.
The multi-hop retrieval system works in stages:

First hop: The original question returns some documents.
Second hop: Your query must help retrieve any other relevant documents NOT found in the first hop that hold complementary or broader context necessary for final answer extraction.

Key Observations from Examples and Feedback:

First-hop documents often cover one entity or aspect in the question.
Remaining relevant documents often involve connected or higher-level concepts mentioned in summary_1 but not explicitly asked in the original question.
The query should be formulated to explicitly target these missing, but logically linked, documents.
Avoid merely paraphrasing the original question or restating known facts from summary_1.
Instead, infer what broader or related entities/concepts might provide the crucial missing information.
For example, if summary_1 describes a population for a small civil parish, but the question wants total population of the wider region, your query should target that wider region (e.g., "Madeira archipelago population in 2011").
Similarly, if summary_1 covers a song and the question wants the album it came from, but first hop got song-level documents, your query should retrieve documents about the album itself.

How to Build the Query:

Identify the entities or topics mentioned in summary_1 that appear related but different from first-hop documents.
Reframe the query to explicitly mention these broader or related entities connected to the original question.
Include relevant key context from the question to maintain specificity, but shift focus to the missing piece.
The goal is to retrieve documents that link or complement what was retrieved initially.

Practical Strategy:

Read the summary_1 carefully to spot references to bigger contexts or other entities not covered in the first hop.
Ask yourself, "What entity or aspect does this summary hint at that could answer the original question but was not found yet?"
Formulate a precise, focused factual query targeting that entity or concept to retrieve the missing documents.

Output:

Produce only the field query as a clear, concise question or keyword phrase designed for efficient retrieval of second-hop documents.
Ensure the query relates logically to the original question while targeting the broader or complementary knowledge identified in summary_1.
Do not include the original question or simply rephrase it.
Do not duplicate information already well-covered by the first hop retrieval.

By following these principles, you will help the multi-hop retrieval system find all necessary documents to answer the multi-faceted original question completely.
[HotpotQA Prompt End] | Click to view full AIME prompt
[AIME Prompt Begin]
You will be given one math problem as plain text under a key like "problem." Your job is to solve it correctly and return:

reasoning: a concise, logically ordered solution that uses identities/structure to avoid brute force, ends with a quick verification.
answer: the final requested number/expression only (no extra words).

Formatting:

Use exactly two top-level fields named "reasoning" and "answer."
Keep reasoning succinct but complete. Bullet points are fine.
The answer field must contain only the final value requested (e.g., 227, 585, 601).

General problem-solving guidance:

Parse the problem type (e.g., base representation, intersecting families of subsets, avoiding arithmetic progressions, symmetric sums with constraints, ordered tuples counting).
Always enforce domain constraints (e.g., base-b digits in 0..b−1; no leading zero for base-10 "three-digit"; ordered vs unordered families; strict increase conditions in sequences).
Use algebraic identities and modular arithmetic to reduce the search space; prefer structural arguments over naive enumeration.
For "greatest/least" questions, derive tight bounds and give a construction that attains them.

Domain-specific strategies and pitfalls (learned from typical contest problems and prior feedback):

Base-conversion/digit rearrangement:

Translate positional notation correctly: in base b, (a b c)_b = a·b^2 + b·b + c; in base 10: abc = 100a + 10b + c.
Enforce digit ranges strictly (e.g., in base 9, digits ∈ {0,…,8}; if also a is a base-10 leading digit, then a ∈ {1,…,8}).
Set up equality and simplify. Use modular constraints to prune:
• Mod 9 often collapses coefficients; e.g., 99a = 71b + 8c ⇒ mod 9 gives b + c ≡ 0 (mod 9).
• Mod 8: 99 ≡ 3, 71 ≡ 7 ⇒ 3a ≡ 7b (mod 8) ⇒ b ≡ −3a (mod 8).
Solve within digit bounds and verify numerically.

Palindromes across bases:

Bound the base length by magnitude (e.g., n < 1000 ⇒ octal has 3–4 digits).
Characterize palindromes:
• 3-digit octal: (A B A)_8 = 65A + 8B.
• 4-digit octal: (A B B A)_8 = 513A + 72B (with A ≥ 1).
Enumerate small parameter ranges and test the other-base palindrome constraint. For "greatest", check candidates in descending order with justification.

Symmetric sums with a + b + c fixed (ordered triples of nonnegative integers):

Use identities to compress expressions:
S = ab(a + b) + bc(b + c) + ca(c + a) = (a + b + c)(ab + bc + ca) − 3abc.
With a + b + c known (e.g., 300), convert the given sum into a relation among ab + bc + ca and abc.
Use the shift a = A + x etc. to isolate a product like (a−A)(b−A)(c−A) and deduce factorization constraints, enabling clean counting.
Count ordered solutions carefully; include/exclude symmetric/degenerate cases precisely.

Intersecting families of subsets (collections from the power set):

Intersecting means every pair has nonempty intersection. The empty set cannot be included.
Complement pairs: S and S^c cannot both be present. Use this to structure counts.
Use size-based pigeonhole facts: In [n], any two subsets of size > n/2 must intersect. For n = 5, any two subsets of size ≥ 3 intersect; thus "all subsets of size ≥ 3" is an intersecting family (size 16).
Do not assume that "stars" (all subsets containing a fixed element) are the only intersecting families of maximum size. For odd n, both the star and "all subsets of size > n/2" have size 2^{n−1}.
When counting collections of a fixed size:
• Consider the minimum set size N in the family and do casework on how many 2-element sets are included (for n=5), as these control which 3-sets must be excluded (complements).
• Ensure completeness of cases and avoid double counting by parameterizing canonical patterns (e.g., how many 2-sets, how they overlap, whether they share a common element).
• Remember order of subsets in a collection does not matter; count distinct families.

Avoiding 4-term arithmetic progressions in a strictly increasing sequence with fixed anchors:

First bound the variable terms by strict increase (e.g., if fixed terms are 3,4,5,...,30,40,50 then 6 ≤ a < b ≤ 29).
Pre-eliminate values that cause a 4-term AP with three fixed terms:
• 3,4,5,a forbids a = 6.
• b,30,40,50 forbids b = 20.
• Similarly, a,30,40,50 forbids a = 20.
Start with the count of pairs from allowed values and then subtract specific pairs that complete APs with two fixed endpoints:
• 3,5,a,b ⇒ (a,b) = (7,9).
• 3,a,b,30 ⇒ (a,b) = (12,21).
• 4,a,b,40 ⇒ (a,b) = (16,28).
• 5,a,b,50 ⇒ (a,b) = (20,35) but may be outside bounds or pre-excluded (e.g., 20 banned).
Systematically check all endpoint combinations; use the fact that if endpoints differ by Δ, then Δ must be divisible by 3 for a 4-term AP, and solve for integer a,b within bounds.
Avoid double subtraction; ensure monotonicity and domain constraints are respected.

Order statistics with sum and absolute-sum constraints (e.g., x_1 ≤ ... ≤ x_n, sum |x_i| = 1, sum x_i = 0):

Total positive mass equals total negative mass: both = 1/2.
For maximizing x_k (k near the top): if there are T largest terms from k to n (T = n − k + 1), then sum of these T terms ≥ T·x_k. Since the total positive mass ≤ 1/2, we get x_k ≤ (1/2)/T.
For minimizing x_l (l near the bottom): if there are l smallest terms, sum of these l terms ≤ l·x_l. Since the total negative mass is −1/2, we get x_l ≥ (−1/2)/l.
To attain these bounds, concentrate masses evenly on exactly those positions: set the smallest l terms equal to −1/(2l), the largest T terms equal to 1/(2T), and the middle to 0 (respecting monotonicity). Verify sums and absolute sums.
Example: For n=100, maximize x_76 − x_16: T = 25 ⇒ x_76 ≤ 1/50; l = 16 ⇒ x_16 ≥ −1/32; construction with 16 negatives at −1/32, 59 zeros, 25 positives at 1/50 attains 1/50 − (−1/32) = 41/800.

Quality checks:

Verify digit/base constraints and final equalities numerically if applicable.
For extremal problems, provide both a tight bound and an explicit construction achieving it.
For counting, explicitly handle ordered vs unordered, exclude impossible/duplicate cases, and check complements/forbidden pairs.
For AP-avoidance, confirm integrality and bounds; ensure no missed endpoint combinations.
For "greatest/least" questions, justify optimality structurally (e.g., convexity/majorization/pigeonhole).
