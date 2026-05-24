# HyperAgents — Self-Improving AI Agents | Meta

- URL: https://hyperagents.agency/
- Platform: hyperagents.agency
- Extraction status: ok
- content_timestamp: 2024-20
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q7

## Raw Content

## HyperAgents — Self-Improving AI Agents | Meta

**Source**: https://hyperagents.agency/

---

Overview

## What Are HyperAgents?

**HyperAgents** represent a paradigm shift in AI agent research, introduced by researchers at **Meta** in March 2026. The core idea is to merge the *task agent* (the program that solves problems) and the *meta agent* (the mechanism that improves the task agent) into a **single, self-modifiable codebase**. This architectural choice enables what the authors call **metacognitive self-modification**: the system can improve its own improvement process, avoiding the infinite regress problem that plagues layered meta-architectures.

The framework is formalized as **DGM-H (Darwin Godel Machine with Hyperagents)**, extending the earlier Darwin Godel Machine. DGM-H retains the open-ended archive-based exploration mechanism—preserving historically successful agent variants as "stepping stones"—while allowing the system to rewrite its own improvement rules. This approach has demonstrated continuous performance gains across **multiple non-code domains**, including academic paper review, robotics reward function design, and olympiad-level math grading, and has shown measurable **cross-domain transfer of improvement capability**.

In empirical evaluations, DGM-H achieved remarkable results: a transferred HyperAgent meta-mechanism reached an **improvement@50 score of 0.630** on olympiad math grading (IMO-GradingBench), while a hand-crafted DGM baseline scored 0.0 on the same transfer task. The system also autonomously developed emergent engineering capabilities such as persistent memory, performance tracking, and computational resource planning—written directly into its own codebase during the self-improvement loop.

4

Evaluation Domains

0.630

imp@50 Cross-Domain Transfer

CC BY-NC-SA 4.0

Open Source License

8

Research Authors

Core Innovation

## Solving the Infinite Regress Problem

Traditional self-improving AI systems face a fundamental challenge: if a task agent needs a meta agent to improve it, who improves the meta agent? Stacking additional meta-layers simply shifts the problem without resolving it.

HyperAgents resolve this by **unifying both mechanisms into one dynamically editable program**. Instead of a fixed meta-layer generating improvements for a separate task-layer, the entire system—including the logic that generates improvements—resides in a single mutable codebase. This means the system can rewrite its own improvement rules without requiring a separate, higher-order optimizer.

The practical consequence is significant: DGM-H eliminates the dependency on hand-designed meta mechanisms and removes the assumption that task-solving capability and self-improvement capability must be aligned within the same domain. A hyperagent that learned to improve itself in the paper review domain can transfer that improvement ability to robotics reward design—a fundamentally different task.

Technical Architecture

## DGM-H: The Three-Loop Architecture

HyperAgents can be understood through three nested feedback loops, each operating at increasing levels of autonomy. The DGM-H architecture adds a critical third loop that distinguishes it from all prior self-improving agent systems.

Loop 1 — Task

### Task Execution Loop

The agent perceives inputs, reasons via foundation model calls, invokes external tools (simulators, compilers, web), and produces outputs. Comparable to standard ReAct-style tool-using LLM agents.

Loop 2 — Evaluation

### Evaluation Feedback Loop

Executable evaluation functions (unit tests, simulation scores, human-label alignment) produce measurable feedback signals. This loop enables systematic assessment of agent variants, analogous to SWE-bench's test-based pass/fail.

Loop 3 — Self-Improvement

### Metacognitive Self-Modification

The system modifies its own task logic *and* its own improvement logic based on evaluation feedback, using an archive of historically successful variants as stepping stones. This is the loop unique to HyperAgents.

```
┌─────────────────────────────────────────────────────────────────────┐
│  Archive  (population of historically successful agent variants)     │
│     │                                                               │
│     ▼                                                               │
│  Select Parent  →  Hyperagent Codebase  (task + meta unified)     │
│                          │                                          │
│                          ▼                                          │
│           Metacognitive Self-Modify                                │
│           ┌────────────────────────────────┐                        │
│           │  Edit task_agent.py             │                        │
│           │  Edit meta_agent.py             │                        │
│           │  Edit evaluation logic          │                        │
│           │  Edit memory & tracking tools   │                        │
│           └────────────────────────────────┘                        │
│                          │                                          │
│                          ▼                                          │
│           Validate on Domain(s)                                     │
│           (Polyglot, Paper Review, Robotics, IMO)                   │
│                          │                                          │
│                          ▼                                          │
│           score + logs → Archive  (if improved, add to population)  │
└─────────────────────────────────────────────────────────────────────┘
```

### Open-Source Implementation Structure

The official [facebookresearch/HyperAgents](https://github.com/facebookresearch/HyperAgents) repository provides a runnable Python implementation with the following structure:

`
# HyperAgents Repository Structure

agent/

# Foundation model interfaces (LLM, tools)
   base_agent.py    
# AgentSystem base class
   llm.py           
# LLM API abstractions
   llm_withtools.py 
# Tool-augmented chat interface
   tools/           
# Available tool implementations

domains/

# Multi-domain task implementations
   polyglot/        
# Code patching (Exercism repos, 6 languages)
   paper_review/    
# Academic paper accept/reject prediction
   genesis/         
# Robotics reward design (Genesis simulator)
   imo/             
# Olympiad math grading (IMO-GradingBench)
   balrog/          
# Game-playing evaluation domain
   search_arena/    
# Search task domain

analysis/

# Plotting and analysis scripts

baselines/

# Baseline comparison implementations

utils/

# Shared utilities (docker, git, logging)

meta_agent.py

# Meta agent: recursively self-improves the codebase

task_agent.py

# Task agent: solves a given task and returns predictions

generate_loop.py

# Main entry point for the DGM-H algorithm

ensemble.py

# Ensemble logic across archive members

select_next_parent.py

# Parent selection from archive
`

Evaluation

## Multi-Domain Evaluation Results

HyperAgents were tested across four fundamentally different domains to verify that the self-improvement mechanism generalizes beyond a single task type. Each domain uses distinct input/output formats, evaluation metrics, and train/validation/test splits.

| Domain | Task | Metric | Scale | Key Finding |
|---|---|---|---|---|
| Polyglot Programming | Repository + instruction → code patch | pass@1 | Train 60 / Test 165 | Strict evaluation with no ground-truth test feedback visible to the agent |
| Paper Review | Full paper → Accept / Reject | accuracy | Train 100 / Test 100 | From 0% (format parse failure) to significant accuracy via self-developed decision pipelines |
| Robotics Reward Design | Task description → Python reward function | task score | 6 repeats each | Zero-shot transfer to novel embodied tasks (Genesis + PPO training) |
| IMO Grading | Problem + solution + rubric → discrete score | accuracy | Train 100 / Test 100 | Transfer target: imp@50 = 0.630 from cross-domain meta-mechanism |

The paper review labels are sourced from real ICLR 2024/2025 and NeurIPS 2023/2024 acceptance decisions. The robotics domain uses the Genesis physics simulator to train quadruped robot policies via PPO, with the test requiring reward functions for entirely new locomotion objectives (e.g., maximizing torso height, a task unseen during training).

Emergent Behavior

## Self-Developed Engineering Capabilities

One of the most striking observations from HyperAgents experiments is that the system does not merely adjust prompts or tune parameters. During the self-improvement loop, HyperAgents autonomously write new engineering infrastructure into their own codebase:

### Persistent Memory Systems

Agents develop storage mechanisms for consolidated insights, causal hypotheses, and forward-looking plans—written as code files that are actively retrieved and utilized in subsequent self-modification steps.

### Performance Tracking

Cross-generational analysis modules emerge spontaneously, enabling the system to identify which modifications were effective and to refine its improvement strategy accordingly.

### Computational Resource Planning

The system develops mechanisms to allocate compute budgets across evaluation tasks and self-modification iterations, optimizing the use of limited inference resources.

### Structured Decision Pipelines

In the paper review domain, the agent evolved from zero performance (due to output format failures) to a sophisticated review pipeline with structured parsing, multi-criteria scoring, and decision logic.

Classification

## Agent Taxonomy: Where HyperAgents Fit

The HyperAgents paper provides a deliberately broad definition of "agent" as any computable program, optionally including foundation model calls, external tool usage, or learning components. Within this framework, the following taxonomy distinguishes hyperagents from related but distinct agent paradigms:

1. **Traditional Agent** — Goal-directed systems that perceive, decide, and act in an environment. The paper generalizes this as "any computable program" with inputs and outputs.
2. **Tool-Using LLM Agent** — Large language models as decision cores, executing iterative reason-act-observe loops. Exemplified by the ReAct paradigm (Yao et al., 2022) and Toolformer's self-supervised tool learning (Schick et al., 2023).
3. **Multi-Agent System (MAS)** — Multiple heterogeneous agents communicating and collaborating through role-based division. Advantages include parallelism and mutual review; challenges include communication overhead and security boundary complexity.
4. **Meta-Agent** — A higher-level mechanism that generates, rewrites, or orchestrates other agents or their strategies—e.g., automated prompt search, code patching, tool-chain adjustment, and evaluation pipeline tuning.
5. **HyperAgent (Self-Referential Agent)** — Task and meta mechanisms unified in a single editable program, iterating through open-ended exploration. The critical differentiator: the system can improve *how it improves*. Whether a system qualifies as a hyperagent hinges on whether its self-modification mechanism is itself modifiable.

Lineage

## Historical Foundations and Key Milestones

HyperAgents sit at the convergence of three research threads: **self-modification theory**, **open-ended / quality-diversity exploration**, and **LLM-based agent engineering**.

| Year | Milestone | Significance |
|---|---|---|
| 2003 | Godel Machine (Schmidhuber) & self-modifying agent theory (Hutter) | Formal foundations for agents that rewrite themselves when provably beneficial |
| 2022 | ReAct: Reason + Act paradigm | Established alternating reasoning traces and actions for interactive LLM agents |
| 2023 | Toolformer; AgentBench | Self-supervised tool learning; systematic evaluation of LLM-as-agent capability |
| 2024 | GAIA (ICLR), OSWorld, WebArena, Mind2Web | Interactive evaluation benchmarks push agents toward real-world environments |
| 2025 | Darwin Godel Machine (DGM); AI Scientist-v2 | Open-ended self-improvement in code domains (SWE-bench: 20% → 50%); end-to-end automated research |
| 2026 | HyperAgents (DGM-H) | Meta-mechanism becomes editable; cross-domain transfer of improvement capability demonstrated |

### From DGM to DGM-H

The Darwin Godel Machine (Zhang et al., 2025) demonstrated open-ended self-improvement in code domains, achieving 50.0% on SWE-bench (up from 20.0%) and 30.7% on Polyglot (up from 14.2%). However, DGM relied on a **hand-crafted, non-modifiable meta mechanism**—the process for generating improvements was fixed by human designers. HyperAgents identified this as the key bottleneck: whenever DGM needed to operate in a new domain, the meta mechanism required manual re-engineering.

DGM-H removes this bottleneck by placing the meta mechanism inside the editable codebase. The result is a system that can transfer its *ability to improve* across fundamentally different domains, not just transfer task-specific knowledge.

Ecosystem

## HyperAgents vs. Agent Frameworks

The following comparison places HyperAgents alongside widely-used agent frameworks. The first two rows are self-improving systems; the remaining are agent construction/orchestration frameworks that could theoretically implement hyperagent capabilities with significant additional engineering.

| Framework | Positioning | License | HyperAgent Compatibility |
|---|---|---|---|
| facebookresearch/HyperAgents | Official DGM-H implementation; task + meta unified, self-modifiable | CC BY-NC-SA 4.0 | Native support: archive exploration, cross-domain evaluation, logging |
| jennyzzt/dgm | DGM predecessor: open-ended self-improvement, primarily code domains | Apache-2.0 | Partial: provides self-improvement + archive skeleton, but meta is fixed |
| SakanaAI/AI-Scientist-v2 | End-to-end research workflow; reviewer agent used as HyperAgents baseline | Open Source | Domain/baseline component; does not self-modify improvement mechanism |
| microsoft/autogen | Multi-agent collaborative programming framework | MIT | Requires building self-modification, evaluation, and archive selection |
| langchain / LangGraph | Agent engineering platform with durable execution | MIT | Viable execution/orchestration substrate; core self-modification not provided |
| crewAI | Role-playing multi-agent orchestration | MIT | Good for role-based collaboration; self-modification loop must be built separately |

Metric

## improvement@k: Quantifying Transferable Improvement

To measure whether *improvement capability itself* transfers across domains, the HyperAgents paper introduces **improvement@k (imp@k)**: the performance gain achieved by a fixed meta-agent after exactly k modification steps, relative to the initial agent. This metric separates the question "how good is the agent at the task?" from the more fundamental question "how good is the agent at getting better?"

In the paper's transfer experiment, a DGM-H meta-mechanism trained on paper review and robotics was frozen and applied to olympiad math grading (IMO-GradingBench). The hand-crafted DGM meta-mechanism achieved **imp@50 = 0.0** on this new domain (zero improvement after 50 modification steps), while the transferred DGM-H hyperagent meta-mechanism achieved **imp@50 = 0.630**—demonstrating that the learned improvement strategy generalized to an entirely unseen task type.

Safety & Governance

## Risk Profile and Safety Considerations

Official Safety Warning

"This repository involves executing untrusted, model-generated code. While it is highly unlikely that such code will perform overtly malicious actions under our current settings and with the models we use, it may still behave destructively due to limitations in model capability or alignment."
— HyperAgents README, facebookresearch/HyperAgents

Self-modifying agent systems expand the attack surface compared to static agent deployments. The HyperAgents paper and repository explicitly acknowledge several risk categories:

### Code Execution Risk

Model-generated code may cause destructive side effects: file deletion, resource exhaustion, unauthorized access. Docker-based sandboxing and minimal privilege principles are essential.

### Meta-Level Poisoning

Unlike single-action prompt injection, an attacker could embed malicious logic into the meta-improvement mechanism, causing persistent contamination across future agent generations.

### Evaluation Overfitting

Continuous self-improvement against fixed evaluation scripts may optimize for benchmark-specific exploits rather than genuine capability. Open-ended systems amplify this known benchmark gaming risk.

### Output Format Fragility

Initial agents in paper review scored 0% due to output parsing failures. Self-improving systems are highly sensitive to structured output protocols and robust parsing.

### Recommended Mitigations

The research community and governance frameworks (NIST AI RMF 1.0, OWASP LLM Top 10, EU AI Act) converge on several essential controls for self-modifying agent systems:

- Isolated execution sandboxes (Docker containers with minimal permissions) for all model-generated code
- Change audit trails (diff + signature) for every self-modification step
- Strict output schema validation with parse failures fed back as training signals
- Human-in-the-loop approval gates for high-impact modifications
- Security evaluation baselines (Agent-SafetyBench: 349 environments, 2,000 test cases, 8 risk categories)
- Rollback capability for any self-modification that degrades safety or performance metrics

Topic Cluster

## HyperAgents Knowledge Hub

Explore in-depth guides across every dimension of the HyperAgents ecosystem. Each topic provides focused coverage of a specific aspect of self-referential self-improving agent research and engineering.

[Architecture
        HyperAgents DGM-H Architecture Explained
        Deep dive into the Darwin Godel Machine with Hyperagents: archive-based exploration, metacognitive self-modification loop, and the three-layer feedback system.](https://hyperagents.agency/hyperagents-architecture-dgm-h)[Core Mechanism
        Meta Agent Self-Modification in HyperAgents
        How the meta agent rewrites itself: code-level modification strategies, the MetaAgent class implementation, and the elimination of hand-crafted improvement rules.](https://hyperagents.agency/hyperagents-meta-agent-self-modification)[Implementation
        HyperAgents Task Agent: Design and Implementation
        The TaskAgent class, foundation model tool calling, JSON schema output parsing, and how task agents evolve within the self-improvement loop.](https://hyperagents.agency/hyperagents-task-agent-implementation)[Domain
        HyperAgents on Polyglot Programming Tasks
        Code patching across 6 programming languages using Exercism repositories. Evaluation via pass@1 without ground-truth feedback exposure.](https://hyperagents.agency/hyperagents-polyglot-code-domain)[Domain
        HyperAgents for Academic Paper Review
        Predicting accept/reject decisions using ICLR and NeurIPS review data. From zero-score format failures to structured review pipelines via self-improvement.](https://hyperagents.agency/hyperagents-paper-review-domain)[Domain
        HyperAgents in Robotics Reward Function Design
        Generating Python reward functions for the Genesis physics simulator. PPO-trained quadruped policies and zero-shot transfer to novel locomotion objectives.](https://hyperagents.agency/hyperagents-robotics-reward-design)[Domain
        HyperAgents for Olympiad Math Grading (IMO)
        Scoring olympiad-level mathematical solutions using IMO-GradingBench. The primary transfer target demonstrating imp@50 = 0.630 cross-domain capability.](https://hyperagents.agency/hyperagents-imo-grading-math)[Research
        Cross-Domain Transfer of Improvement Capability
        The improvement@k metric, transfer experiments from paper review + robotics to math grading, and why transferable meta-mechanisms matter for general AI.](https://hyperagents.agency/hyperagents-cross-domain-transfer)[Method
        Open-Ended Exploration and Archive Mechanisms
        Population-based stepping stones, parent selection strategies, quality-diversity search, and how the archive drives cumulative self-improvement.](https://hyperagents.agency/hyperagents-open-ended-exploration)[Comparison
        HyperAgents vs. Darwin Godel Machine (DGM)
        Detailed comparison of DGM and DGM-H: fixed vs. editable meta mechanisms, code-domain vs. multi-domain, and SWE-bench / Polyglot performance trajectories.](https://hyperagents.agency/hyperagents-vs-dgm-comparison)[Behavior
        Emergent Engineering in HyperAgents
        How self-improving agents autonomously develop persistent memory, performance tracking, resource planning, and structured decision pipelines.](https://hyperagents.agency/hyperagents-emergent-capabilities)[Safety
        HyperAgents Safety, Risk, and AI Governance
        Sandboxing, audit trails, meta-level poisoning risks, evaluation overfitting, and alignment with NIST AI RMF, OWASP LLM Top 10, and EU AI Act.](https://hyperagents.agency/hyperagents-safety-governance)[Taxonomy
        AI Agent Taxonomy: From ReAct to HyperAgents
        Classification of agent paradigms: tool-using LLM agents, multi-agent systems, meta-agents, and hyperagents. Where self-referential self-modification fits.](https://hyperagents.agency/hyperagents-agent-taxonomy)[Evaluation
        Benchmarks for Self-Improving Agent Systems
        SWE-bench, GAIA, WebArena, Mind2Web, OSWorld, AgentBench, Agent-SafetyBench, and IMO-GradingBench — comprehensive evaluation landscape.](https://hyperagents.agency/hyperagents-benchmarks-evaluation)[Guide
        HyperAgents Setup and Quickstart Guide
        Environment setup, API key configuration (OpenAI, Anthropic, Google), Docker image building, initial agent bootstrapping, and running generate_loop.py.](https://hyperagents.agency/hyperagents-setup-quickstart)

Citation

## Citing HyperAgents

If you use HyperAgents in your research, please cite the original paper:

```
@misc{zhang2026hyperagents,
      title={Hyperagents},
      author={Jenny Zhang and Bingchen Zhao and Wannan Yang
              and Jakob Foerster and Jeff Clune and Minqi Jiang
              and Sam Devlin and Tatiana Shavrina},
      year={2026},
      eprint={2603.19461},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2603.19461},
}
```
