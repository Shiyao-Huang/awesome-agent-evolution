---
repo: brain-research/guided-evolutionary-strategies
url: https://github.com/brain-research/guided-evolutionary-strategies
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - brain-research/guided-evolutionary-strategies: Guided Evolutionary Strategies · GitHub

**Source**: https://github.com/brain-research/guided-evolutionary-strategies

---

[Skip to content](https://github.com/brain-research/guided-evolutionary-strategies#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

     This repository was archived by the owner on Apr 19, 2026. It is now read-only.   

[brain-research](https://github.com/brain-research)

/
**[guided-evolutionary-strategies](https://github.com/brain-research/guided-evolutionary-strategies)**

Public archive

- [Notifications](https://github.com/login?return_to=%2Fbrain-research%2Fguided-evolutionary-strategies)You must be signed in to change notification settings
- [Fork
    28](https://github.com/login?return_to=%2Fbrain-research%2Fguided-evolutionary-strategies)
- 
[Star
          273](https://github.com/login?return_to=%2Fbrain-research%2Fguided-evolutionary-strategies)

[https://github.com/brain-research/guided-evolutionary-strategies](https://github.com/brain-research/guided-evolutionary-strategies)

[Branches](https://github.com/brain-research/guided-evolutionary-strategies/branches)[Tags](https://github.com/brain-research/guided-evolutionary-strategies/tags)

[https://github.com/brain-research/guided-evolutionary-strategies/branches](https://github.com/brain-research/guided-evolutionary-strategies/branches)[https://github.com/brain-research/guided-evolutionary-strategies/tags](https://github.com/brain-research/guided-evolutionary-strategies/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History20 Commits20 Commits |  |  |  |
| images | images |  |  |
| .gitignore | .gitignore |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| Guided_Evolutionary_Strategies_Demo.ipynb | Guided_Evolutionary_Strategies_Demo.ipynb |  |  |
| Guided_Evolutionary_Strategies_Demo_Jax.ipynb | Guided_Evolutionary_Strategies_Demo_Jax.ipynb |  |  |
| Guided_Evolutionary_Strategies_Demo_TensorFlow2.ipynb | Guided_Evolutionary_Strategies_Demo_TensorFlow2.ipynb |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Guided Evolutionary Strategies

[https://github.com/brain-research/guided-evolutionary-strategies#guided-evolutionary-strategies](https://github.com/brain-research/guided-evolutionary-strategies#guided-evolutionary-strategies)

**Link to demo notebooks**:

- [Guided ES Demo, TensorFlow 2](https://colab.sandbox.google.com/github/brain-research/guided-evolutionary-strategies/blob/master/Guided_Evolutionary_Strategies_Demo_TensorFlow2.ipynb)
- [Guided ES Demo, Jax](https://colab.sandbox.google.com/github/brain-research/guided-evolutionary-strategies/blob/master/Guided_Evolutionary_Strategies_Demo_Jax.ipynb)
- [Guided ES Demo, TensorFlow 1](https://colab.sandbox.google.com/github/brain-research/guided-evolutionary-strategies/blob/master/Guided_Evolutionary_Strategies_Demo.ipynb)

**Link to paper:**[arXiv/1806.10230](https://arxiv.org/abs/1806.10230)

## Overview

[https://github.com/brain-research/guided-evolutionary-strategies#overview](https://github.com/brain-research/guided-evolutionary-strategies#overview)

Many applications in machine learning require optimizing a function whose true gradient is unknown, but where surrogate gradient information (directions that may be correlated with, but not necessarily identical to, the true gradient) is available instead. This arises when an approximate gradient is easier to compute than the full gradient (e.g. in meta-learning or unrolled optimization), or when a true gradient is intractable and is replaced with a surrogate (e.g. in certain reinforcement learning applications, or when using synthetic gradients).

Here, we propose *Guided Evolutionary Strategies* (Guided ES), a method for optimally using surrogate gradient directions along with random search. We define a search distribution for evolutionary strategies that is elongated along a guiding subspace spanned by the surrogate gradients. This allows us to estimate a descent direction which can then be passed to a first-order optimizer.

This repository contains a colaboratory (colab) notebook with a demo of the method on a toy problem (described below).

## Introduction

[https://github.com/brain-research/guided-evolutionary-strategies#introduction](https://github.com/brain-research/guided-evolutionary-strategies#introduction)

Imagine you have a function you would like to optimize, but you only have access to approximate gradients of the function. There are two approaches to optimization. On one hand, you could ignore the surrogate gradient information entirely and perform zeroth-order optimization, using methods such as evolutionary strategies to estimate a descent direction. These methods exhibit poor convergence properties when the parameter dimension is large. On the other hand, you could directly feed the surrogate gradients to a first-order optimization algorithm. However, bias in the surrogate gradients will interfere with optimizing the target problem. Ideally, we would like a method that combines the complementary strengths of these two approaches: we would like to combine the unbiased descent direction estimated with evolutionary strategies with the low-variance estimate given by the surrogate gradient. We propose a method for doing this called guided evolutionary strategies (Guided ES).

## Method

[https://github.com/brain-research/guided-evolutionary-strategies#method](https://github.com/brain-research/guided-evolutionary-strategies#method)

Our idea is to keep track of a low-dimensional subspace defined by the recent history of surrogate gradients during optimization (inspired by quasi-Newton methods) which we call the guiding subspace.

We then perform a finite difference random search (as in evolutionary strategies) preferentially within this subspace. By concentrating our search samples in a low-dimensional subspace where the true gradient has non-negligible support, we can dramatically reduce the variance of our search direction.

The figure panel (a) below depicts the geometry underlying our method. Instead of the true gradient (blue arrow), we are given a surrogate gradient (white arrow) which is correlated with the true gradient. We use this to form a guiding distribution (denoted with white contours) and use this to draw samples (white dots) which we use as part of a random search procedure.

[https://github.com/brain-research/guided-evolutionary-strategies/blob/master/images/fig1.png?raw=true](https://github.com/brain-research/guided-evolutionary-strategies/blob/master/images/fig1.png?raw=true)

In panel (b), we demonstrate the performance of the method on a toy problem. The problem consists of a random quadratic function, where we add an explicit bias and random noise to the gradient. Following the gradient directly with SGD (orange curve) starts fast but starts to diverge due to the bias in the gradient. Performing evolutionary strategies (or an adaptive variant, CMA-ES) succeed in minimizing the true function but proceed slowly and ignore the gradient information.

Guided ES, on the other hand, combines the strengths of these two approaches.

## Citation

[https://github.com/brain-research/guided-evolutionary-strategies#citation](https://github.com/brain-research/guided-evolutionary-strategies#citation)

If you use this code, please consider citing our paper:

```
@article{
   maheswaranathan2018guided,
   title = {Guided evolutionary strategies: escaping the curse of dimensionality in random search},
   author = {Niru Maheswaranathan and Luke Metz and Dami Choi and George Tucker and Jascha Sohl-Dickstein},
   year = {2018},
   eprint = {arXiv:1806.10230},
   url = {https://arxiv.org/abs/1806.10230},
}
```

## Contact

[https://github.com/brain-research/guided-evolutionary-strategies#contact](https://github.com/brain-research/guided-evolutionary-strategies#contact)

Authors:

- Niru Maheswaranathan ([nirum@google.com](mailto:nirum@google.com))
- Luke Metz ([lmetz@google.com](mailto:lmetz@google.com))
- Dami Choi ([damichoi@google.com](mailto:damichoi@google.com))
- George Tucker ([gjt@google.com](mailto:gjt@google.com))
- Jascha Sohl-Dickstein ([jaschasd@google.com](mailto:jaschasd@google.com))

This is not an officially supported Google product.

## About

         Guided Evolutionary Strategies       

[arxiv.org/abs/1806.10230](https://arxiv.org/abs/1806.10230)

### Resources

[Readme](https://github.com/brain-research/guided-evolutionary-strategies#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/brain-research/guided-evolutionary-strategies#Apache-2.0-1-ov-file)

### Contributing

[Contributing](https://github.com/brain-research/guided-evolutionary-strategies#contributing-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/brain-research/guided-evolutionary-strategies/activity)

[Custom properties](https://github.com/brain-research/guided-evolutionary-strategies/custom-properties)

### Stars

[273
        stars](https://github.com/brain-research/guided-evolutionary-strategies/stargazers)

### Watchers

[12
        watching](https://github.com/brain-research/guided-evolutionary-strategies/watchers)

### Forks

[28
        forks](https://github.com/brain-research/guided-evolutionary-strategies/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fbrain-research%2Fguided-evolutionary-strategies&report=brain-research+%28user%29)

## [Releases](https://github.com/brain-research/guided-evolutionary-strategies/releases)

No releases published

## [Packages
      0](https://github.com/orgs/brain-research/packages?repo_name=guided-evolutionary-strategies)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/brain-research/guided-evolutionary-strategies/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Jupyter Notebook
          100.0%](https://github.com/brain-research/guided-evolutionary-strategies/search?l=jupyter-notebook)

     You can’t perform that action at this time.
