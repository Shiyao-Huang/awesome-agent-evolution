---
repo: zou-group/textgrad
url: https://github.com/zou-group/textgrad
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - zou-group/textgrad: TextGrad: Automatic ''Differentiation'' via Text -- using large language models to backpropagate textual gradients. Published in Nature. · GitHub

**Source**: https://github.com/zou-group/textgrad

---

[Skip to content](https://github.com/zou-group/textgrad#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[zou-group](https://github.com/zou-group)

/
**[textgrad](https://github.com/zou-group/textgrad)**

Public

- [Notifications](https://github.com/login?return_to=%2Fzou-group%2Ftextgrad)You must be signed in to change notification settings
- [Fork
    290](https://github.com/login?return_to=%2Fzou-group%2Ftextgrad)
- 
[Star
          3.6k](https://github.com/login?return_to=%2Fzou-group%2Ftextgrad)

[https://github.com/zou-group/textgrad](https://github.com/zou-group/textgrad)

[Branches](https://github.com/zou-group/textgrad/branches)[Tags](https://github.com/zou-group/textgrad/tags)

[https://github.com/zou-group/textgrad/branches](https://github.com/zou-group/textgrad/branches)[https://github.com/zou-group/textgrad/tags](https://github.com/zou-group/textgrad/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History140 Commits140 Commits |  |  |  |
| .github | .github |  |  |
| assets | assets |  |  |
| evaluation | evaluation |  |  |
| examples/notebooks | examples/notebooks |  |  |
| tests | tests |  |  |
| textgrad | textgrad |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| MANIFEST.in | MANIFEST.in |  |  |
| README.md | README.md |  |  |
| requirements.txt | requirements.txt |  |  |
| setup.py | setup.py |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/zou-group/textgrad/blob/main/assets/logo_full.png](https://github.com/zou-group/textgrad/blob/main/assets/logo_full.png)

[https://colab.research.google.com/github/zou-group/TextGrad/blob/main/examples/notebooks/Prompt-Optimization.ipynb](https://colab.research.google.com/github/zou-group/TextGrad/blob/main/examples/notebooks/Prompt-Optimization.ipynb)[https://lbesson.mit-license.org/](https://lbesson.mit-license.org/)[https://www.nature.com/articles/s41586-025-08661-4](https://www.nature.com/articles/s41586-025-08661-4)[https://arxiv.org/abs/2406.07496](https://arxiv.org/abs/2406.07496)[https://textgrad.readthedocs.io/en/latest/?badge=latest](https://textgrad.readthedocs.io/en/latest/?badge=latest)[https://pypi.org/project/textgrad/](https://pypi.org/project/textgrad/)[https://pypi.org/project/textgrad/](https://pypi.org/project/textgrad/)[https://anaconda.org/conda-forge/textgrad](https://anaconda.org/conda-forge/textgrad)[https://anaconda.org/conda-forge/textgrad](https://anaconda.org/conda-forge/textgrad)

## TextGrad: Automatic ''Differentiation'' via Text

[https://github.com/zou-group/textgrad#textgrad-automatic-differentiation-via-text](https://github.com/zou-group/textgrad#textgrad-automatic-differentiation-via-text)

An autograd engine -- for textual gradients!

TextGrad is a powerful framework  building automatic ``differentiation'' via text. TextGrad implements backpropagation through text feedback provided by LLMs, strongly building on the gradient metaphor

We provide a simple and intuitive API that allows you to define your own loss functions and optimize them using text feedback. This API is similar to the Pytorch API, making it simple to adapt to your usecases.

[https://github.com/zou-group/textgrad/blob/main/assets/analogy.png](https://github.com/zou-group/textgrad/blob/main/assets/analogy.png)

### Updates:

[https://github.com/zou-group/textgrad#updates](https://github.com/zou-group/textgrad#updates)

**19th March 2025**

TextGrad published in [Nature](https://www.nature.com/articles/s41586-025-08661-4)!

**Past Updates**:

We are introducing a new engine based on [litellm](https://github.com/BerriAI/litellm). This should allow you to use any model you like, as long as it is supported by litellm. This means that now **Bedrock, Together, Gemini and even more** are all supported by TextGrad!

This should be seen as experimental but we plan to depreciate the old engines in the future.

In addition to this, with the new engines it should be easy to enable and disable caching.

We are in the process of testing these new engines and deprecating the old engines. If you have any issues, please let us know!

The new litellm engines can be loaded with the following code:

An example of loading a litellm engine:

```
engine = get_engine("experimental:gpt-4o", cache=False)

# this also works with

set_backward_engine("experimental:gpt-4o", cache=False)
```

Be sure to set the relevant environment variables for the new engines!

An example of forward pass:

```
import httpx
from textgrad.engine_experimental.litellm import LiteLLMEngine

LiteLLMEngine("gpt-4o", cache=True).generate(content="hello, what's 3+4", system_prompt="you are an assistant")

image_url = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg"
image_data = httpx.get(image_url).content

LiteLLMEngine("gpt-4o", cache=True).generate(content=[image_data, "what is this my boy"], system_prompt="you are an assistant")
```

In the examples folder you will find two new notebooks that show how to use the new engines.

## QuickStart

[https://github.com/zou-group/textgrad#quickstart](https://github.com/zou-group/textgrad#quickstart)

If you know PyTorch, you know 80% of TextGrad. Let's walk through the key components with a simple example. Say we want to use GPT-4o to solve a simple reasoning problem.

The question is *If it takes 1 hour to dry 25 shirts under the sun, how long will it take to dry 30 shirts under the sun? Reason step by step.* (Thanks, [Reddit User](https://www.reddit.com/r/OpenAI/comments/18q479x/comment/kf444es/))

```
import textgrad as tg

tg.set_backward_engine("gpt-4o", override=True)

# Step 1: Get an initial response from an LLM.
model = tg.BlackboxLLM("gpt-4o")
question_string = ("If it takes 1 hour to dry 25 shirts under the sun, "
                   "how long will it take to dry 30 shirts under the sun? "
                   "Reason step by step")

question = tg.Variable(question_string,
                       role_description="question to the LLM",
                       requires_grad=False)

answer = model(question)
```

> ⚠️**answer: To determine how long it will take to dry 30 shirts under the sun,****we can use a proportional relationship based on the given information.****Here’s the step-by-step reasoning: [.....]****So, it will take 1.2 hours (or 1 hour and 12 minutes) to dry 30 shirts under the sun.**

As you can see, **the model's answer is incorrect.** We can optimize the answer using TextGrad to get the correct answer.

```
answer.set_role_description("concise and accurate answer to the question")

# Step 2: Define the loss function and the optimizer, just like in PyTorch!
# Here, we don't have SGD, but we have TGD (Textual Gradient Descent)
# that works with "textual gradients".
optimizer = tg.TGD(parameters=[answer])
evaluation_instruction = (f"Here's a question: {question_string}. "
                           "Evaluate any given answer to this question, "
                           "be smart, logical, and very critical. "
                           "Just provide concise feedback.")

# TextLoss is a natural-language specified loss function that describes
# how we want to evaluate the reasoning.
loss_fn = tg.TextLoss(evaluation_instruction)
```

> 🧠 **loss: [...] Your step-by-step reasoning is clear and logical,****but it contains a critical flaw in the assumption that drying time is****directly proportional to the number of shirts. [...]**

```
# Step 3: Do the loss computation, backward pass, and update the punchline.
# Exact same syntax as PyTorch!
loss = loss_fn(answer)
loss.backward()
optimizer.step()
answer
```

> ✅ **answer: It will still take 1 hour to dry 30 shirts under the sun,****assuming they are all laid out properly to receive equal sunlight.**

We have many more examples around how TextGrad can optimize all kinds of variables -- code, solutions to problems, molecules, prompts, and all that!

### Tutorials

[https://github.com/zou-group/textgrad#tutorials](https://github.com/zou-group/textgrad#tutorials)

We have prepared a couple of tutorials to get you started with TextGrad. The order of this tutorial is what we would recommend to follow for a beginner. You can run them directly in Google Colab by clicking on the links below (but you need an OpenAI/Anthropic key to run the LLMs).

| Tutorial | Difficulty | Colab Link |
|---|---|---|
| 1. Introduction to TextGrad Primitives |  |  |
| 2. Solution Optimization |  |  |
| 3. Optimizing a Code Snippet and Define a New Loss |  |  |
| 4. Prompt Optimization |  |  |
| 5. MultiModal Optimization |  |  |

### Installation

[https://github.com/zou-group/textgrad#installation](https://github.com/zou-group/textgrad#installation)

You can install TextGrad using any of the following methods.

**With `pip`**:

```
pip install textgrad
```

**With `conda`**:

```
conda install -c conda-forge textgrad
```

> 💡 The conda-forge package for `textgrad` is maintained [here](https://github.com/conda-forge/textgrad-feedstock).

**Bleeding edge installation with `pip`**:

```
pip install git+https://github.com/zou-group/textgrad.git
```

**Installing textgrad with vllm**:

```
pip install textgrad[vllm]
```

See [here](https://pip.pypa.io/en/stable/cli/pip_install/) for more details on various methods of pip installation.

## More detailed examples

[https://github.com/zou-group/textgrad#more-detailed-examples](https://github.com/zou-group/textgrad#more-detailed-examples)

### Minimal Instance Optimization Example

[https://github.com/zou-group/textgrad#minimal-instance-optimization-example](https://github.com/zou-group/textgrad#minimal-instance-optimization-example)

TextGrad can optimize unstructured variables, such as text. Let us have an initial solution to a math problem that we want to improve. Here's how to do it with TextGrad, using GPT-4o:

```
tg.set_backward_engine("gpt-4o")

initial_solution = """To solve the equation 3x^2 - 7x + 2 = 0, we use the quadratic formula:
x = (-b ± √(b^2 - 4ac)) / 2a
a = 3, b = -7, c = 2
x = (7 ± √((-7)^2 - 4 * 3(2))) / 6
x = (7 ± √(7^3) / 6
The solutions are:
x1 = (7 + √73)
x2 = (7 - √73)"""

# Define the variable to optimize, let requires_grad=True to enable gradient computation
solution = tg.Variable(initial_solution,
                       requires_grad=True,
                       role_description="solution to the math question")

# Define the optimizer, let the optimizer know which variables to optimize, and run the loss function

loss_fn = tg.TextLoss("You will evaluate a solution to a math question. Do not attempt to solve it yourself, do not give a solution, only identify errors. Be super concise.")

optimizer = tg.TGD(parameters=[solution])
loss = loss_fn(solution)
```

Output:

> Variable(value=Errors:
> 
> 
> 1. Incorrect sign in the discriminant calculation: it should be b^2 - 4ac, not b^2 + 4ac.
> 2. Incorrect simplification of the quadratic formula: the denominator should be 2a, not 6.
> 3. Final solutions are missing the division by 2a., role=response from the language model, grads=)

```
loss.backward()
optimizer.step()
print(solution.value)
```

Output:

> To solve the equation 3x^2 - 7x + 2 = 0, we use the quadratic formula: x = (-b ± √(b^2 - 4ac)) / 2a
> 
> 
> 
> Given: a = 3, b = -7, c = 2
> 
> 
> 
> Substitute the values into the formula: x = (7 ± √((-7)^2 - 4(3)(2))) / 6 x = (7 ± √(49 - 24)) / 6 x = (7 ± √25) / 6 x = (7 ± 5) / 6
> 
> 
> 
> The solutions are: x1 = (7 + 5) / 6 = 12 / 6 = 2 x2 = (7 - 5) / 6 = 2 / 6 = 1/3
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

