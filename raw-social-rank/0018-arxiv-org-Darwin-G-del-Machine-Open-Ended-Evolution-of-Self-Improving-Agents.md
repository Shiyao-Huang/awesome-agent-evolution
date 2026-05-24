# Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents

- URL: https://arxiv.org/html/2505.22954
- Platform: arxiv.org
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:x.com "self-evolving agents"

## Raw Content

## Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents

**Source**: https://arxiv.org/html/2505.22954

---

[License: CC BY 4.0](https://info.arxiv.org/help/license/index.html#licenses-available)
 arXiv:2505.22954v3 [cs.AI] 12 Mar 2026

1

1
footnotetext: 
co-first authors  † co-senior authors

# Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents

Jenny Zhang*,1,2  Shengran Hu*,1,2,3  Cong Lu1,2,3  Robert Lange†,3  Jeff Clune†,1,2,4
1University of British Columbia  2Vector Institute  3Sakana AI  4Canada CIFAR AI Chair 

{jennyzzt,srhu,conglu}@cs.ubc.ca
, 
robert@sakana.ai
, 
jeff.clune@ubc.ca

###### Abstract

Most of today’s AI systems are constrained by human-designed, fixed architectures and cannot autonomously and continuously improve themselves. The scientific method, on the other hand, is a cumulative and open-ended system, where each innovation builds upon previous artifacts, enabling future discoveries. There is growing hope that the current manual process of advancing AI could itself be automated. If done safely, such automation would accelerate AI development and allow us to reap its benefits much sooner. This prospect raises the question of how AI systems can endlessly improve themselves while getting better at solving relevant problems. Meta-learning can automate the discovery of novel algorithms, but is limited by first-order improvements and the human design of a suitable search space. The Gödel machine (Schmidhuber, [2007](https://arxiv.org/html/2505.22954#bib.bib22)) proposed a theoretical alternative: a self-improving AI that repeatedly modifies itself in a provably beneficial manner. Unfortunately, proving that most changes are net beneficial is impossible in practice. We introduce the Darwin Gödel Machine (DGM), a novel self-improving system that iteratively modifies its own code (thereby also improving its ability to modify its own codebase) and empirically validates each change using coding benchmarks. Inspired by Darwinian evolution and open-endedness research, the DGM grows an archive of generated coding agents. It samples agents from this archive, which self-modify to create new, interesting versions of themselves. This open-ended exploration forms a growing tree of diverse, high-quality agents and allows the parallel exploration of many different paths through the search space. Empirically, the DGM automatically improves its coding capabilities (e.g., better code editing tools, long-context window management, peer-review mechanisms), increasing performance on SWE-bench from 20.0% to 50.0%, and on Polyglot from 14.2% to 30.7%. Furthermore, the DGM significantly outperforms baselines without self-improvement or open-ended exploration. All experiments were done with safety precautions (e.g., sandboxing, human oversight). Overall, the DGM represents a significant step toward self-improving AI, capable of gathering its own stepping stones along a path that unfolds into endless innovation. All code is open-sourced at [https://github.com/jennyzzt/dgm](https://github.com/jennyzzt/dgm).

## 
1 
Introduction

Scientific progress is cumulative and open-ended, with each breakthrough standing on the shoulders of countless prior insights. In the same way, our most advanced AI systems are built upon a long lineage of innovations. For instance, transformers (Vaswani
 et al.
, [2017](https://arxiv.org/html/2505.22954#bib.bib34)), the backbone of current large language models (LLMs) (Brown
 et al.
, [2020](https://arxiv.org/html/2505.22954#bib.bib94)), did not emerge in isolation but were built upon years of past innovations, such as recurrent neural networks (Linnainmaa, [1970](https://arxiv.org/html/2505.22954#bib.bib173); Amari, [1972](https://arxiv.org/html/2505.22954#bib.bib172); Hopfield, [1982](https://arxiv.org/html/2505.22954#bib.bib39); Rumelhart
 et al.
, [1985](https://arxiv.org/html/2505.22954#bib.bib35)) and attention mechanisms (Schmidhuber and Huber, [1990](https://arxiv.org/html/2505.22954#bib.bib174); Bahdanau
 et al.
, [2015](https://arxiv.org/html/2505.22954#bib.bib36); Kim
 et al.
, [2017](https://arxiv.org/html/2505.22954#bib.bib37); Parikh
 et al.
, [2016](https://arxiv.org/html/2505.22954#bib.bib38)). However, most of today’s AI systems remain bound by fixed, human-designed architectures that learn within predefined boundaries, without the capacity to autonomously rewrite their own source code to self-improve. As a result, each advancement in AI development still leans heavily on human interventions, tethering the pace of progress. This paper investigates the intriguing possibility of safely automating the search for ever-better AI. One can imagine an AI system that, like scientific discovery itself, becomes an engine of its own advancement: building upon its past, recursively improving, and propelling itself toward more advanced capabilities.

![Refer to caption](https://arxiv.org/html/2505.22954v3/x1.png)
Figure 1: 

Darwin Gödel Machine.
 The DGM iteratively builds a growing archive of agents by interleaving self-modification with downstream task evaluation. Agents in the archive are selected for self-modification through open-ended exploration.

Schmidhuber ([2007](https://arxiv.org/html/2505.22954#bib.bib22)) presented a class of mathematically rigorous, self-referential, self-improving problem solvers. It relies on formal proofs to justify code rewrites, ensuring that any self-modification is provably beneficial. However, in practice and without restrictive assumptions about the system, it is impossible to formally prove whether a modification to an AI system will be beneficial. For example, while it may seem that an LLM-based coding agent would benefit from access to more tools (e.g., code search, test runners), the actual impact depends heavily on the model’s training and task context (e.g., a testing tool that is optimized for one setup may confuse the agent when working with others). Instead of requiring formal proofs, we empirically validate self-modifications against a benchmark, allowing the system to improve and explore based on observed results. This approach mirrors biological evolution, where mutations and adaptations are not verified in advance but are produced, trialed, and then selected via natural selection. We also take inspiration from Darwinian evolution (Darwin, [2023](https://arxiv.org/html/2505.22954#bib.bib148)) and investigate the effectiveness of maintaining a library of previously discovered agents to serve as stepping stones for future generations.

We propose the 
Darwin Gödel Machine (DGM)
, a self-referential, self-improving system that writes and modifies its own code to become a better coding agent. Each self-modification requires the DGM to edit its own codebase. We use Python, which is Turing-complete, giving the DGM the potential to build any computable machine. Our framework envisions agents that can rewrite their own training scripts (including training a new foundation model (FM)). However, we do not show that in this paper, as training FMs is computationally intensive and would introduce substantial additional complexity, which we leave as future work. Instead, this paper focuses on improving the design of coding agents with frozen pretrained FMs (e.g., tool use, workflows). The DGM alternates between self-modification and evaluation phases. During the self-modification phase, selected coding agents from the archive generate modified versions of themselves. During the evaluation phase, each modified agent is tested on a coding benchmark, estimating the agent’s coding capabilities, and then added to the archive. By improving its own capabilities through this loop, the DGM becomes better at both solving coding tasks and making future self-improvements. A key assumption is that an increase in performance on coding benchmarks indicates better coding capabilities, and hence better ability to self-modify and self-improve. Furthermore, the DGM maintains an archive of generated coding agents, initialized with only one agent, and continuously accumulates all generated variants over time. To support continual self-improvement, the DGM draws inspiration from open-endedness research (Wang
 et al.
, [2019](https://arxiv.org/html/2505.22954#bib.bib40); Fernando
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib41); Faldor
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib25)), accumulating diverse stepping stones (i.e., interesting yet suboptimal solutions or features that may enable future breakthroughs). This open-ended exploration encourages the discovery of novel and potentially useful self-modifications beyond immediate performance gains.

We present results on two coding benchmarks: SWE-bench (Jimenez
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib28)) and Polyglot (Paul Gauthier, [2024](https://arxiv.org/html/2505.22954#bib.bib31)). The DGM automatically improves itself from 20.0% to 50.0% on SWE-bench, and from 14.2% to 30.7% on Polyglot. We show that self-improvement enables continued progress, as the DGM outperforms the baseline where the same base agent is repeatedly used to modify and generate new agents without self-improvement. We also show that open-ended exploration and keeping an archive of all previously generated agents lead to the discovery of better coding agents. The DGM outperforms the baseline of not having open-ended exploration (i.e., a baseline without the accumulation of an archive of interestingly different stepping stones), where the coding agent always builds off the most recent version of itself. Overall, the DGM represents a step toward AI systems that can build upon their own prior innovations and improve recursively. We consider and discuss safety aspects extensively, including sandboxing and traceability of self-modifications, to ensure responsible experimentation ([Section˜5](https://arxiv.org/html/2505.22954#S5)). By advancing the possibility of safe, self-referential, self-improving models, the DGM moves us closer to AI that not only learns but evolves in an open-ended, self-accelerating trajectory, much like science itself.

## 
2 
Related Work

Open-Endedness.
 A grand challenge for driving unbounded innovation is designing open-ended AI systems that continuously generate novel and learnable artifacts (Stanley
 et al.
, [2017](https://arxiv.org/html/2505.22954#bib.bib45)). Hughes
 et al.
 ([2024](https://arxiv.org/html/2505.22954#bib.bib48)) characterized open-endedness as a system’s capacity to generate sequences of artifacts that are both novel and learnable from an observer’s perspective. A central difficulty lies in structuring and exploring vast search spaces to consistently produce artifacts that are interesting to humans (Clune, [2019](https://arxiv.org/html/2505.22954#bib.bib47); Jiang
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib49)). Early progress drew on quality-diversity algorithms, goal-directed exploration, intrinsic motivation, and learning-progress frameworks (Pugh
 et al.
, [2016](https://arxiv.org/html/2505.22954#bib.bib51); Ecoffet
 et al.
, [2019](https://arxiv.org/html/2505.22954#bib.bib55); Lehman and Stanley, [2011](https://arxiv.org/html/2505.22954#bib.bib53); Oudeyer
 et al.
, [2007](https://arxiv.org/html/2505.22954#bib.bib60)), while recent advances leverage large-scale foundation models (FMs) as proxies for human interestingness and versatile engines for generating and evaluating novel behaviors across diverse domains (Brown
 et al.
, [2020](https://arxiv.org/html/2505.22954#bib.bib94); Hu
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib27); Zhang
 et al.
, [2024b](https://arxiv.org/html/2505.22954#bib.bib24)). However, these approaches have yet to close the self-referential self-improvement loop, meaning improvements on downstream tasks do not translate into enhanced capabilities for self-modification or the acceleration of further innovations. We aim to mimic the acceleration of science and technology, where new tools and discoveries catalyze the creation of even more discoveries. How can we emulate nature’s arc of evolution, which bends not only toward complexity but also an ever greater capacity to evolve (Dawkins, [2019](https://arxiv.org/html/2505.22954#bib.bib42); Gerhart and Kirschner, [2007](https://arxiv.org/html/2505.22954#bib.bib43); Hendrikse
 et al.
, [2007](https://arxiv.org/html/2505.22954#bib.bib44))?

Meta-Learning FM Agents.
 Many FM-based agents are handcrafted. Some building blocks include prompt engineering (Chen
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib126); Schulhoff
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib128)), chain-of-thought (Wei
 et al.
, [2022](https://arxiv.org/html/2505.22954#bib.bib1); Yao
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib98); Hu and Clune, [2024](https://arxiv.org/html/2505.22954#bib.bib127); Guo
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib135); Lightman
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib138); Muennighoff
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib136); Zelikman
 et al.
, [2024a](https://arxiv.org/html/2505.22954#bib.bib137)), self-reflection (Shinn
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib2); Yao
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib98); Madaan
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib101)), multi-agent debate (Zhuge
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib177); Liang
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib6); Khan
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib92)), memory (Liu
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib100); Zhong
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib105); Modarressi
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib106)), temperature sampling (Zhu
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib7)), and retrieval augmented generation (Lewis
 et al.
, [2020](https://arxiv.org/html/2505.22954#bib.bib8)). The manual composition of these components limits the system’s abilities to the ingenuity of its human designer. More recently, several meta-learning approaches have emerged that leverage FM to automatically optimize prompts (Fernando
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib41); (FAIR)†
 et al.
, [2022](https://arxiv.org/html/2505.22954#bib.bib116); Khattab
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib103); Cheng
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib129); Yuksekgonul
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib130); Yuan
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib131)) and design agentic modules (Zhang
 et al.
, [2024c](https://arxiv.org/html/2505.22954#bib.bib9); Zhou
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib102); Yin
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib107); Zhuge
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib132); Rosser and Foerster, [2025](https://arxiv.org/html/2505.22954#bib.bib133); Zhang
 et al.
, [2025a](https://arxiv.org/html/2505.22954#bib.bib134); Ye
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib161); Gao
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib162); Nie
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib163); Su
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib164); Zhang
 et al.
, [2025b](https://arxiv.org/html/2505.22954#bib.bib165); Niu
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib166)). The Automated Design of Agentic Systems (ADAS, Hu
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib27)) iteratively generates downstream agents with a fixed meta-agent, evaluates them against a target benchmark, and incorporates feedback to refine subsequent generations. In contrast, the DGM is a single system that both solves downstream tasks (i.e., coding problems) and refines its own implementation (i.e., its codebase), removing the need for a fixed, handcrafted meta-agent and enabling self-referential improvements.

Self-Improving AI.
 Early on, various researchers outlined theoretical and conceptual approaches to self-improvement (Good, [1966](https://arxiv.org/html/2505.22954#bib.bib12); Schmidhuber, [1987](https://arxiv.org/html/2505.22954#bib.bib14); [2007](https://arxiv.org/html/2505.22954#bib.bib22)). Some practical approaches to automated self-improvement include systems defined by neural network weight parameterizations (Schmidhuber, [1993](https://arxiv.org/html/2505.22954#bib.bib169); Hall, [2007](https://arxiv.org/html/2505.22954#bib.bib20); Hobbhahn, [2025](https://arxiv.org/html/2505.22954#bib.bib30); Kirsch and Schmidhuber, [2022](https://arxiv.org/html/2505.22954#bib.bib13); Irie
 et al.
, [2022](https://arxiv.org/html/2505.22954#bib.bib170); [2025](https://arxiv.org/html/2505.22954#bib.bib171); Lu
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib15); Havrilla
 et al.
, [2024b](https://arxiv.org/html/2505.22954#bib.bib111)). Metz
 et al.
 ([2021](https://arxiv.org/html/2505.22954#bib.bib16)) developed a gradient-based optimizer that is self-referentially meta-trained using a variant of population-based training (Jaderberg
 et al.
, [2017](https://arxiv.org/html/2505.22954#bib.bib21)). Lange
 et al.
 ([2023](https://arxiv.org/html/2505.22954#bib.bib17)) extended this approach to gradient-free learning. Silver
 et al.
 ([2017](https://arxiv.org/html/2505.22954#bib.bib110)) used self-play to continuously evolve agents, achieving superhuman performance in challenging domains such as chess and Go. More closely related to the DGM are recent approaches that leverage FM-based agents for self-improvement (Yin
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib107); Robeyns
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib112); Hu
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib113); Zelikman
 et al.
, [2024b](https://arxiv.org/html/2505.22954#bib.bib99); Huang
 et al.
, [2022](https://arxiv.org/html/2505.22954#bib.bib122); Singh
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib123)). Zelikman
 et al.
 ([2024b](https://arxiv.org/html/2505.22954#bib.bib99)) use a meta-agent to generate downstream agents, updating the meta-agent based on the meta-utility derived from the generated solutions. Yin
 et al.
 ([2024](https://arxiv.org/html/2505.22954#bib.bib107)) use a single system to both solve downstream tasks and recursively modify itself. However, the downstream tasks or the meta-utility do not always align with the capabilities required for self-improvement. In the DGM, improvement in downstream tasks directly reflects an increase in self-improvement ability, enabling the potential for self-accelerating progress. Most similar is concurrent work by Robeyns
 et al.
 ([2025](https://arxiv.org/html/2505.22954#bib.bib112)), which also has a single agent recursively solving coding problems and modifying its own codebase. The main difference from Robeyns
 et al.
 ([2025](https://arxiv.org/html/2505.22954#bib.bib112)) (and also Zelikman
 et al.
 ([2024b](https://arxiv.org/html/2505.22954#bib.bib99)); Yin
 et al.
 ([2024](https://arxiv.org/html/2505.22954#bib.bib107))) is that the DGM has an open-ended exploration loop, encouraging self-modifications beyond immediate performance gains and thus avoiding stagnation in suboptimal states. [Appendix˜B](https://arxiv.org/html/2505.22954#A2) also discusses additional related work on program synthesis and Darwinian evolution.

## 
3 
Darwin Gödel Machine

A Gödel Machine is a theoretical idea of an AI that searches for ways that *provably* improve itself (Schmidhuber, [2007](https://arxiv.org/html/2505.22954#bib.bib22)). In this paper, we propose Darwin Gödel Machine (DGM), an attempt to realize the long-held dream of creating a Gödel Machine. The DGM relaxes the Gödel Machine’s impractical requirement of theoretically *proving* that a change will improve the system, instead requiring *empirical evidence* from experiments to demonstrate that a proposed new version enhances performance. Additionally, since the DGM relies on empirical evidence of improvement, it may get stuck in a local optimum within the vast search space of possible systems (i.e., all computable algorithms). To address this, the DGM maintains an archive of discovered solutions during the search, facilitating open-ended exploration rather than relying on evolving a single solution. Since the principles echo Darwinian evolution (Darwin, [2023](https://arxiv.org/html/2505.22954#bib.bib148)) ([Appendix˜B](https://arxiv.org/html/2505.22954#A2)), where new innovations emerge by selecting an entity from an archive of previously discovered solutions, modifying it, and keeping it if it is interestingly new (Zhang
 et al.
, [2024b](https://arxiv.org/html/2505.22954#bib.bib24); Faldor
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib25); Stanley and Lehman, [2015](https://arxiv.org/html/2505.22954#bib.bib26)), we call our algorithm a Darwin Gödel Machine ([Figure˜1](https://arxiv.org/html/2505.22954#S1.F1)).

Self-referential Self-improvement of Coding Agents.
 The DGM is initialized with only one coding agent, and its progression is evaluated on coding benchmarks. A coding agent is defined as a single system, implemented with a code repository and powered by frozen pretrained foundation models (FMs), capable of reading, writing, and executing code. Code, when expressed in a general-purpose Turing-complete language (e.g., Python), is a powerful medium for building and improving intelligent systems because it can represent any computable process. Recent works (Hu
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib27); Zhang
 et al.
, [2024c](https://arxiv.org/html/2505.22954#bib.bib9)) demonstrate that such agents can be improved through meta-learning of their designs (e.g., prompts, workflows, and tools), which are implemented in their code repository. Therefore, we define self-improvement as a coding task that involves modifying the design of an agent’s own components (i.e., its own code, which does not include the open-ended exploration process described in the next paragraph). The key motivation is that the empirical evidence must reflect the system’s ability to both self-improve and solve downstream tasks. By configuring the DGM as a coding agent and testing its coding capabilities, the observed improvements demonstrate not only enhanced performance in downstream tasks but also the capacity for further self-improvement, as self-improvement is fundamentally a coding task that modifies the coding agent’s own code repository.

Population-based Open-ended Exploration.
 Starting from a single initial coding agent, the DGM builds an archive of all discovered agents. In each iteration, the DGM selects parent agents to self-modify and branch off to produce new agents. Parent selection is roughly proportional to each agent’s performance score and inversely proportional to the number of its children with codebase-editing functionality ([Section˜C.2](https://arxiv.org/html/2505.22954#A3.SS2)). This favors high-performing agents that have been underexplored (i.e., have fewer existing children), thereby promoting both exploitation of strong performers and exploration of promising but less-sampled lineages. All agents retain a non-zero selection probability, ensuring that any path to improvement remains feasible given sufficient compute. Each selected parent analyzes its own benchmark evaluation logs, proposes the next feature to implement, and receives this proposal as a problem statement to execute ([Section˜C.3](https://arxiv.org/html/2505.22954#A3.SS3)). The parent then implements the suggested feature into its own codebase, generating a new coding agent. Each newly generated agent is quantitatively evaluated on a chosen coding benchmark to estimate its coding abilities. Only agents that compile successfully and retain the ability to edit a given codebase are added to the DGM archive, as only they can continue self-modification. All others are discarded. The cycle of parent selection, self-modification, and evaluation continues, progressively growing the archive of solutions. Importantly, we note that archived solutions can serve as stepping stones that result in improvements much later than their original discovery, making our approach substantially different from hill-climbing agentic design approaches (Robeyns
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib112)). Currently, the open-ended exploration process (i.e., archive maintenance, parent selection) is fixed and not modifiable by the DGM, which we leave as an avenue for future work. [Section˜C.4](https://arxiv.org/html/2505.22954#A3.SS4) shows the pseudocode for the DGM algorithm.

## 
4 
Experiments

[Section˜4.1](https://arxiv.org/html/2505.22954#S4.SS1) describes the experimental setup, including the initial coding agent that initializes the DGM. We conduct experiments on two coding benchmarks: SWE-bench (Jimenez
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib28)) and Polyglot (Paul Gauthier, [2024](https://arxiv.org/html/2505.22954#bib.bib31)) ([Section˜4.2](https://arxiv.org/html/2505.22954#S4.SS2)). For each benchmark, we compare the DGM against two baselines: DGM without self-improving agents and DGM without open-ended exploration ([Section˜4.3](https://arxiv.org/html/2505.22954#S4.SS3)). Across all experiments, we find that the DGM outperforms both baselines, showing that the self-improvement mechanism and open-ended exploration are essential for sustained performance gains ([Section˜4.4](https://arxiv.org/html/2505.22954#S4.SS4)). Furthermore, we show that the features discovered by the DGM transfer across models, benchmarks, and tasks ([Section˜4.4](https://arxiv.org/html/2505.22954#S4.SS4)).

### 
4.1 
Experiment Setup

The DGM is initialized with a single coding agent. This base agent is built around a frozen FM and augmented with tool use capabilities (Schick
 et al.
, [2023](https://arxiv.org/html/2505.22954#bib.bib114); Anthropic, [2024b](https://arxiv.org/html/2505.22954#bib.bib115)). The FM autonomously determines its action at each step, using whichever tool it deems appropriate. The base agent has access to two tools: a Bash tool for executing bash commands, and an edit tool for viewing and editing directories and entire files ([Section˜C.1](https://arxiv.org/html/2505.22954#A3.SS1)). The agent receives a single input prompt that specifies the location of the target repository, the problem statement, and the repository’s testing framework ([Section˜C.1](https://arxiv.org/html/2505.22954#A3.SS1)). The base agent is intentionally lightweight to provide a simple starting point from which self-improvement can be clearly demonstrated. We run the DGM for 80 iterations (generating one new agent per iteration), with two iterations running in parallel for SWE-bench and four for Polyglot ([Section˜C.2](https://arxiv.org/html/2505.22954#A3.SS2)). During self-modifications, coding agents are powered by Claude 3.5 Sonnet (New) (Anthropic, [2024a](https://arxiv.org/html/2505.22954#bib.bib32)) in both SWE-bench and Polyglot experiments. During benchmark evaluation, coding agents are powered by Claude 3.5 Sonnet (New) for SWE-bench and o3-mini (OpenAI, [2025](https://arxiv.org/html/2505.22954#bib.bib93)) for Polyglot ([Section˜D.1](https://arxiv.org/html/2505.22954#A4.SS1)).

### 
4.2 
Benchmarks

We evaluate the DGM on two popular benchmarks that assess different aspects of coding tasks to validate the algorithm’s effectiveness across various use cases. Both SWE-bench and Polyglot are benchmarks that evaluate how well AI agents solve coding tasks automatically. Given a code repository and a task instruction, the agent is expected to make changes to the repository in order to fulfill the task. Both SWE-bench and Polyglot are widely used benchmarks (Zhang
 et al.
, [2024d](https://arxiv.org/html/2505.22954#bib.bib140); [a](https://arxiv.org/html/2505.22954#bib.bib141); Xia
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib142); Cao
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib143); Google DeepMind, [2025](https://arxiv.org/html/2505.22954#bib.bib144); Gauthier, [2024](https://arxiv.org/html/2505.22954#bib.bib155)) that require the AI agent to navigate a code repository, understand the interplay between functions in different files, and spot small errors in convoluted code. SWE-bench only has Python tasks, while Polyglot has tasks in multiple programming languages. Another difference is that each SWE-bench task may require edits to multiple files, whereas each Polyglot task primarily involves implementing a solution from scratch in a single file (although the agent still needs to examine other files to understand what changes are necessary), resulting in fewer file edits overall.

SWE-bench.
 To avoid wasting compute on unsolvable tasks, we use SWE-bench Verified (OpenAI, [2024](https://arxiv.org/html/2505.22954#bib.bib29)), a human-filtered subset of SWE-bench (Jimenez
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib28)) where all tasks are solvable. Throughout this paper, the term SWE-bench refers by default to to the SWE-bench Verified subset.

Polyglot.
 Polyglot includes tasks in multiple programming languages (C++, Rust, Python, etc.) (Paul Gauthier, [2024](https://arxiv.org/html/2505.22954#bib.bib31)). Compared to SWE-bench, one of the most widely used coding benchmarks and likely included in the training sets of FMs, Polyglot is more niche and less likely to be included in FMs’ post-training data. Additionally, Polyglot is primarily used by its developer to evaluate Aider (Gauthier, [2024](https://arxiv.org/html/2505.22954#bib.bib155)). This provides an opportunity to compare automatically designed agents with a representative coding agent in the community, which has been continuously developed and tested against the Polyglot benchmark over a year by human developers. Finally, Polyglot enables testing of the DGM’s ability to generalize across multiple programming languages beyond just Python. We follow the Polyglot leaderboard setup (Paul Gauthier, [2024](https://arxiv.org/html/2505.22954#bib.bib31)), with one key difference: the leaderboard reports pass@2, where the agent can view feedback from ground-truth tests once, whereas we report pass@1, where the agent never sees ground-truth test results.

Since it is expensive to evaluate on the full benchmarks ([Section˜E.1](https://arxiv.org/html/2505.22954#A5.SS1)), we use a staged evaluation strategy to estimate the coding agent’s performance. In general, we evaluate the coding agent on more tasks when we are more confident that it is a relatively strong performer. We first evaluate each coding agent on a set of 10 tasks to verify basic codebase-editing functionality. Only agents that retain the ability to edit code can solve downstream coding tasks or perform further self-modifications. Agents that pass this initial stage are then evaluated on an expanded set of 50 tasks. For SWE-bench, tasks are selected based on SWE-bench-verified-mini (Hobbhahn, [2025](https://arxiv.org/html/2505.22954#bib.bib30)), which is designed to be a representative sample of the full benchmark ([Section˜E.2](https://arxiv.org/html/2505.22954#A5.SS2)). For Polyglot, tasks are chosen as a random subset of the full benchmark ([Section˜E.3](https://arxiv.org/html/2505.22954#A5.SS3)). Because the LLMs we use are inherently stochastic, performance can be noisy. We use smaller subset evaluations to estimate general effectiveness and identify top candidates. For SWE-bench, if a coding agent achieves over 40% success (a heuristic chosen based on the noise observed in preliminary runs) on the 60-task subset and ranks among the top two performers in the archive, it is then evaluated on 200 tasks (140 plus the previous 60) to more accurately assess its true coding capability ([Section˜E.2](https://arxiv.org/html/2505.22954#A5.SS2)). For Polyglot, if a coding agent achieves over 40% success on the 10-task subset, it is evaluated on an expanded 50-task subset ([Section˜E.3](https://arxiv.org/html/2505.22954#A5.SS3)).

### 
4.3 
Baselines

To isolate and evaluate the contribution of the DGM’s core components, we compare the DGM against two baselines: DGM without self-improving agents (
DGM w/o self-improve
) and DGM without open-ended exploration (
DGM w/o open-ended exploration
). DGM w/o self-improve replicates the approach of ADAS (Hu
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib27)) in this setting, wherein the meta agent responsible for modifying the coding agents remains fixed as the base agent throughout the experiment ([Algorithm˜2](https://arxiv.org/html/2505.22954#algorithm2)). This baseline allows us to assess the role of iterative self-improvement in accelerating the evolution of better coding agents. DGM w/o open-ended exploration eliminates the use of an archive and always self-modifies the latest stored version of itself ([Algorithm˜3](https://arxiv.org/html/2505.22954#algorithm3)). If a coding agent self-modifies to the point where it loses the basic functionality required to edit a codebase, it can no longer modify itself or solve any coding task. Therefore, DGM w/o open-ended exploration retains the latest version of itself that still maintains the basic functionality for codebase editing. This baseline allows us to evaluate the impact of having an archive and the well-documented beneficial principles of open-ended exploration (Clune, [2019](https://arxiv.org/html/2505.22954#bib.bib47); Stanley and Lehman, [2015](https://arxiv.org/html/2505.22954#bib.bib26); Zhang
 et al.
, [2024b](https://arxiv.org/html/2505.22954#bib.bib24); Fernando
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib41); Lee
 et al.
, [2020](https://arxiv.org/html/2505.22954#bib.bib149); Samvelyan
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib78); Colas
 et al.
, [2022b](https://arxiv.org/html/2505.22954#bib.bib67)) in guiding the agent’s evolution.

In addition to the learned baselines, we compare the DGM against handcrafted, open-source solutions. For SWE-bench, we take the state-of-the-art (SoTA) open-source solution that has been checked (i.e., the SWE-bench team was able to reproduce the results) ([Section˜E.4](https://arxiv.org/html/2505.22954#A5.SS4)). For Polyglot, we take the representative agent (Aider) (Gauthier, [2024](https://arxiv.org/html/2505.22954#bib.bib155)), which is open-sourced and designed to support multiple programming languages and large codebase editing ([Section˜E.5](https://arxiv.org/html/2505.22954#A5.SS5)). For a fair comparison, we measure the percentage of solved tasks on the same benchmark subsets used to evaluate the DGM ([Section˜E.2](https://arxiv.org/html/2505.22954#A5.SS2), [Section˜E.3](https://arxiv.org/html/2505.22954#A5.SS3)). These values are shown as dotted horizontal lines in [Figure˜2](https://arxiv.org/html/2505.22954#S4.F2).

### 
4.4 
Results

![Refer to caption](https://arxiv.org/html/2505.22954v3/x2.png)

![Refer to caption](https://arxiv.org/html/2505.22954v3/x3.png)

Figure 2: 

Self-improvement and open-ended exploration enable the DGM to continue making progress and improve its performance.
 The DGM automatically discovers increasingly better coding agents and performs better on both (Left) SWE-bench and (Right) Polyglot. It outperforms baselines that lack either self-improvement or open-ended exploration, showing that both components are essential for continual self-improvement. These scores are obtained from evaluating on the benchmark subsets detailed in [Section˜4.2](https://arxiv.org/html/2505.22954#S4.SS2).

![Refer to caption](https://arxiv.org/html/2505.22954v3/x4.png)

![Refer to caption](https://arxiv.org/html/2505.22954v3/x5.png)

Figure 3: 

The DGM automatically self-improves to become a better coding agent.
 (Left) Archive of coding agents generated during the DGM run on SWE-bench. Each node represents a coding agent, with node 0 corresponding to the base agent. Node color indicates performance on SWE-bench (percentage of solved tasks), while border color reflects the number of tasks for which the agent was evaluated. Edges show which agents self-modified to produce the offsprings. Many paths to innovation traverse lower-performing nodes, and key innovations (like node 24) lead to an explosion of innovations built on top of them. Both properties underscore the benefits of open-ended search. (Right) Progress plot of the DGM on SWE-bench. The light blue line shows the average score of all agents possessing basic codebase-editing functionality. The blue line tracks the best score achieved by any agent in the archive at each iteration. The dark line shows the lineage of the final best-discovered agent and its precursor nodes, which includes two performance dips. This illustrates the benefits of open-ended search, which explores a diverse set of interesting stepping stones instead of focusing only on branching off the best solution found so far.

After 80 iterations of the DGM, the coding agent’s performance increases from 20.0% to 50.0% on SWE-bench, and from 14.0% to 38.0% on Polyglot ([Figure˜2](https://arxiv.org/html/2505.22954#S4.F2)). Since the DGM is evaluated on only 50 tasks in the Polyglot experiment setup ([Section˜4.2](https://arxiv.org/html/2505.22954#S4.SS2)), we additionally evaluate both the base agent and the best DGM-discovered agent on the full Polyglot benchmark to more accurately estimate the improvement. On the full Polyglot benchmark, the DGM improves the coding agent from 14.2% to 30.7%. This shows that the DGM can automatically self-improve to create a better coding agent. Moreover, the performance of the best DGM-discovered agent is comparable to that of the checked, open-source, human-designed SoTA on SWE-bench ([Figure˜2](https://arxiv.org/html/2505.22954#S4.F2)). On Polyglot, although the DGM starts with a base agent whose performance is lower than that of Aider, it discovers an agent that far surpasses Aider ([Figure˜2](https://arxiv.org/html/2505.22954#S4.F2)). The DGM-discovered agents are comparable to or outperform handcrafted agents on both benchmarks. While the SoTA SWE-bench agent and Aider were painstakingly shaped by human efforts, the DGM hints at a future in which such ingenuity is automated, evolving through self-referential cycles of continuous self-improvements.

The DGM automatically improves both the tools and the workflow of how FMs are utilized ([Figure˜3](https://arxiv.org/html/2505.22954#S4.F3)). For example, the DGM enhanced the edit tool to allow more granular file viewing (by lines) and more precise file editing (by string replacement), instead of always viewing or replacing the entire file. Workflow improvements include making multiple attempts to solve a task and using another FM to evaluate and select the best solution. Other workflow improvements include considering previous attempts when generating subsequent ones. [Section˜F.1](https://arxiv.org/html/2505.22954#A6.SS1) and [Section˜F.2](https://arxiv.org/html/2505.22954#A6.SS2) show all modifications leading up to the final best-discovered agents on SWE-bench and Polyglot respectively.

Because open-ended exploration allows branching from any agent in the archive with non-zero probability, the DGM can get out of deceptive dips or peaks in performance. For example, at iterations 4 and 56 of the experiment on SWE-bench, although the agent’s score temporarily fell below that of its parent, the DGM was still able to explore innovations along that path and create a new agent that outperformed all of its predecessors ([Figure˜3](https://arxiv.org/html/2505.22954#S4.F3)). Furthermore, open-ended exploration allows different implementations of the same target functionality to be attempted. For example, while the goal is to provide finer‑grained editing tools, the specific implementation of this feature can vary greatly and hence lead to very different performance ([Appendix˜G](https://arxiv.org/html/2505.22954#A7)). The DGM can explore multiple implementations to find the most suitable one and avoid getting trapped in a suboptimal one.

The DGM outperforms the baselines of DGM w/o self-improve and DGM w/o open-ended exploration on both benchmarks ([Figure˜2](https://arxiv.org/html/2505.22954#S4.F2)). Without updating the meta agent that modifies coding agents, DGM w/o self-improve improves the agents in early iterations, but its gains taper off quickly ([Section˜A.1](https://arxiv.org/html/2505.22954#A1.SS1)). In DGM w/o open-ended exploration, only the most recent agent is retained, so a poorly performing self-modification makes subsequent improvements harder to achieve ([Section˜A.1](https://arxiv.org/html/2505.22954#A1.SS1)).

![Refer to caption](https://arxiv.org/html/2505.22954v3/x6.png)
Figure 4: 

Transfer between Models, Benchmarks, and Tasks.
 The superior performance of DGM-discovered agents can be transferred across (Left) different models, (Middle) benchmarks, and (Right) different programming language tasks in Polyglot, such as from Python tasks to C++ tasks.

To evaluate the generality of the improvements from the DGM, we tested the base agent ([Section˜4.1](https://arxiv.org/html/2505.22954#S4.SS1)) and the best agent discovered during the DGM run ([Figure˜2](https://arxiv.org/html/2505.22954#S4.F2)) with different FMs than those used during optimization. For SWE-bench, where the DGM was run using Claude 3.5 Sonnet (New), we replaced the FM with Claude 3.7 Sonnet (Anthropic, [2025](https://arxiv.org/html/2505.22954#bib.bib124)) or o3-mini, and evaluated on 200 tasks ([Figure˜4](https://arxiv.org/html/2505.22954#S4.F4), Left). With o3-mini, the base agent achieved 23.0% and the DGM-discovered agent 33.0%. With Claude 3.7 Sonnet, the base agent achieved 19.0% and the DGM-discovered agent 59.5%. These results suggest that the DGM yields improvements that generalize across FMs, rather than being tightly coupled to the specific FM used during its run ([Figure˜4](https://arxiv.org/html/2505.22954#S4.F4)). Model transfer results on Polyglot are presented in [Section˜A.2](https://arxiv.org/html/2505.22954#A1.SS2).

Furthermore, we investigate the transferability of the DGM-discovered agent across different benchmarks and programming languages. First, we evaluate the best DGM-discovered agent from one benchmark (e.g., SWE-bench) on a completely held-out benchmark (e.g., Polyglot), and vice versa ([Figure˜4](https://arxiv.org/html/2505.22954#S4.F4), Middle). The best agent evolved on SWE-bench achieves 28.9% on Polyglot, compared to the initial agent’s baseline of 14.2%. Conversely, the best agent evolved on Polyglot achieves 24.5% on SWE-bench, outperforming the original baseline of 20.0%. Since each agent was optimized without ever accessing the alternate benchmark, these evaluations represent truly held-out tests. The consistent performance gains across benchmarks support our claim that DGM’s improvements reflect general skill acquisition rather than overfitting or exploitation of benchmark-specific artifacts. Second, we experiment with a version of the DGM trained exclusively on Python tasks from Polyglot and then transfer the discovered agent to tasks in other languages. Focusing primarily on Python tasks slightly improves performance on Python tasks but reduces performance on non-Python tasks compared to the DGM trained on all languages ([Figure˜4](https://arxiv.org/html/2505.22954#S4.F4), Right). However, after being transferred from Python to other unseen languages during the search, the agent still achieves performance comparable to that of the DGM trained on all languages and substantially outperforms both the base agent and Aider. These results demonstrate the robustness of the discovered improvements, showing that they do not overfit to a specific programming language. We also present additional results in [Appendix˜A](https://arxiv.org/html/2505.22954#A1).

## 
5 
Safety Discussion

Systems capable of self-improvement, such as the DGM, represent a step toward more autonomous AI development, aligning with long-standing goals in the field of making capable AI that can benefit humanity (Schmidhuber, [1987](https://arxiv.org/html/2505.22954#bib.bib14); Clune, [2019](https://arxiv.org/html/2505.22954#bib.bib47); Markoff, [2016](https://arxiv.org/html/2505.22954#bib.bib150); Lehman, [2023](https://arxiv.org/html/2505.22954#bib.bib151)). However, this capability introduces unique safety considerations stemming from the system’s ability to autonomously modify its own code. Modifications optimized solely for benchmark performance might inadvertently introduce vulnerabilities or behaviors misaligned with human intentions, even if they improve the target metric (Bostrom, [2020](https://arxiv.org/html/2505.22954#bib.bib160)). In particular, if evaluation benchmarks do not fully capture all desired agent properties (e.g., safety and robustness), the self-improvement loop could amplify misalignment over successive generations. Iterative self-modification could also lead to increasingly complex and uninterpretable internal logic, hindering human understanding, oversight, and control (Sheth
 et al.
, [2025](https://arxiv.org/html/2505.22954#bib.bib117); Anwar
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib152); Greenblatt
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib153); Ganguli
 et al.
, [2022](https://arxiv.org/html/2505.22954#bib.bib154)).

Recognizing these challenges, the current implementation and experimental setup of the DGM incorporates several safeguards. All agent execution and self-modification processes are conducted within isolated sandboxed environments, limiting their ability to affect the host system, and thereby mitigating the risk of unintended actions. Each execution within the sandbox is subjected to a strict time limit, reducing the risk of resource exhaustion or unbounded behavior. The self-improvement process is currently confined to the well-defined domain of enhancing performance on specific coding benchmarks by modifying the agent’s own Python codebase, thus limiting the scope of potential modifications. Additionally, we actively monitor agent performance and code changes, with the DGM archive providing a traceable lineage of modifications for review. At this stage, we have found no evidence of harmful or malicious behavior in the generated agents, and the self-modifications have been primarily focused on improving coding capabilities.

Conversely, a significant potential benefit of the self-improvement paradigm is that it could, in principle, be directed toward enhancing safety and interpretability themselves. We conduct a preliminary investigation into how the DGM can be deployed in AI safety settings to develop countermeasures for FM hallucination ([Appendix˜H](https://arxiv.org/html/2505.22954#A8)). Just as the DGM learns to improve its coding capabilities, it could potentially discover and integrate better internal safeguards or modify itself for greater transparency (e.g., incorporating principles akin to Constitutional AI (Bai
 et al.
, [2022](https://arxiv.org/html/2505.22954#bib.bib5))), if such properties were included in its evaluation criteria (Rosser and Foerster, [2025](https://arxiv.org/html/2505.22954#bib.bib133)). This suggests a promising, albeit challenging, pathway in which self-improvement becomes a tool for building more trustworthy AI systems. Additional research could also explore weaving Constitutional AI in from the start, though the challenge would be incentivizing the system to retain these directives (an option worth exploring is to create an unmodifiable part of the system to be able to evaluate at halt the rest).

The DGM demonstrates the potential of self-improving AI while still operating within safe research boundaries due to the current limitations of frontier FMs and effective mitigations like sandboxing. [Appendix˜I](https://arxiv.org/html/2505.22954#A9) presents additional discussion on broader safety uncertainties. We include this safety discussion proactively to raise awareness about the emerging prospect of self-improving AI systems and their associated safety implications, particularly as these systems inevitably become more capable (Yudkowsky and others, [2008](https://arxiv.org/html/2505.22954#bib.bib4); Bostrom, [2002](https://arxiv.org/html/2505.22954#bib.bib3); Ecoffet
 et al.
, [2020](https://arxiv.org/html/2505.22954#bib.bib118); Bengio
 et al.
, [2024](https://arxiv.org/html/2505.22954#bib.bib119); Clune, [2019](https://arxiv.org/html/2505.22954#bib.bib47)). Accordingly, we advocate for continued investigation into the safe and beneficial evolution of AI-Generating Algorithms (Clune, [2019](https://arxiv.org/html/2505.22954#bib.bib47)) and self-improving systems.

## 
6 
Conclusion and Limitations

We introduce the Darwin Gödel Machine (DGM), the first self-improving system powered by FMs with open-ended exploration, where progress on its evaluation benchmarks can directly translate into better self-improvement capabilities. We demonstrate the automatic discovery of better tools and FM systems, resulting in better performance on two benchmarks: SWE-bench and Polyglot. Through self-improvement and open-ended exploration, the DGM shows a continuous increase in performance, bringing us one step closer to self-accelerating, self-improving AI systems.

We demonstrate that the DGM can autonomously achieve performance on par with openly available solutions. However, it still falls short of closed-source SoTA SWE-bench solutions. An open question is whether running the DGM for l

...(内容已截断)
