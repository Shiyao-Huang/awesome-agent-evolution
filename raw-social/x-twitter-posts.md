# X/Twitter Posts — Agent Evolution

Fetched: 2026-05-20. Total posts: 21 attempted (18 x.com status URLs + 3 profile pages), 18 successfully fetched, 6 failed (access forbidden).

---

## @SakanaAILabs — Darwin Godel Machine: AI that improves itself by rewriting its own code

- **Author**: @SakanaAILabs (Sakana AI)
- **Date**: 2025-05-30
- **URL**: https://x.com/SakanaAILabs/status/1928272612431646943
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-05-30
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

Introducing The Darwin Godel Machine: AI that improves itself by rewriting its own code

sakana.ai/dgm

The Darwin Godel Machine (DGM) is a self-improving agent that can modify its own code. Inspired by evolution, we maintain an expanding lineage of agent variants, allowing for open-ended exploration of the vast design space of such "self-improving" agents.

Modern agentic systems, while powerful, remain static -- once deployed, their intelligence remains fixed. We believe continuous self-improvement is key to the development of stronger AI capabilities.

Our Darwin Godel Machine is built from the ground up to enable AI systems that can learn and evolve their own capabilities over time, just as humans do.

On SWE-bench, DGM automatically improved its performance from 20.0% to 50.0%. Similarly, on Polyglot, the DGM increased its success rate from an initial 14.2% to 30.7%, significantly outperforming representative hand-designed agents.

Learn more about our approach in our technical report: arxiv.org/abs/2505.22954

This work was done in collaboration with Jeff Clune's lab at UBC, and led by his PhD students Jenny Zhang and Shengran Hu, together with Cong Lu and Robert Lange.

Code: github.com/jennyzzt/dgm

### Replies/Thread (if visible)
None captured.

---

## @rronak_ — ICLR 2026 takeaways on recursive self-improvement

- **Author**: @rronak_ (Ronak Malde)
- **Date**: 2026-04-27
- **URL**: https://x.com/rronak_/status/2048904732350054847
- **Likes**: 1000 | **Retweets**: 139 | **Replies**: 31
- **content_timestamp**: 2026-04-27
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Tweet Text

My takeaways from ICLR 2026

1. Recursive self improvement / continual learning is the next frontier of research. Several great papers in self distillation, auto agent harness optimization, learning from non verifiable reward, self-play are early signs of success

2. Multimodal models and world models are attaining emergent reasoning capabilities, opening up a near door to spatial understanding that was previously locked

3. Lots of concerns that the research community is currently too focused on benchmaxxing rather than improving the research process, and a call to action to address this, like Percy Liang's fully open source training community.

4. Rio is possibly even better than San Diego

### Replies/Thread (if visible)
None captured.

---

## @youjiaxuan — Multi-Agent Evolve: LLMs self-improve through co-evolution

- **Author**: @youjiaxuan (Jiaxuan You)
- **Date**: 2025-10-28
- **URL**: https://x.com/youjiaxuan/status/1983293231879393695
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-10-28
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

Introducing Multi-Agent Evolve

A new paradigm beyond RLHF and RLVR: More compute -> closer to AGI

No need for expensive data or handcrafted rewards

We show that an LLM can self-evolve -- improving itself through co-evolution among roles (Proposer, Solver, Judge) via RL -- all without external supervision.

On Qwen2.5-3B-Instruct, Multi-Agent Evolve boosts average accuracy from 55% -> 58% across 22 benchmarks.

Remarkably, the model automatically learns balance among roles:
- The Proposer first generates easy tasks.
- The Judge refines the difficulty metric.
- The Proposer then raises the challenge, forcing the Solver to improve.
- The system co-evolves until reaching equilibrium.

Multi-Agent Evolve: LLMs self-improve through co-evolution.

Paper: arxiv.org/abs/2510.23595
Code (coming soon): github.com/ulab-uiuc/Mult

### Replies/Thread (if visible)
None captured.

---

## @xelebofficial — AI Agent Skills in 2026: Self-improving skills and deep memory integration

- **Author**: @xelebofficial (Xeleb)
- **Date**: 2026-04-22
- **URL**: https://x.com/xelebofficial/status/2046891772211540378
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2026-04-22
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Tweet Text

AI Agent Skills in 2026: The Most Powerful Abstraction Layer Shaping the Future

We've moved past the era of just writing prompts or calling individual tools. In 2026, AI Agent Skills have officially become the new standard, think of them as packages for programming, but designed for artificial intelligence.

Here are the most prominent trends:

Skill Registries & Marketplaces
JFrog Agent Skills Registry, ClawHub, and Agent Skills are operating as "npm for AI Skills." You can easily publish, version, search, and deploy skills professionally with security and control built in.

Self-Improving Skills
Agents don't just use skills, they refine and improve them based on feedback, real-world results, and lessons learned from failures.

Hybrid Skill + Tool
Skills are now intelligent workflows: they contain detailed guidance (best practices, decision rules) while actively calling tools to execute entire processes consistently.

Enterprise Skill Libraries
For enterprises, skill libraries emphasize compliance, audit trails, and governance, ensuring every agent action is traceable, controllable, and strictly regulated.

Deep Memory Integration
Skills are evolving into long-term procedural memory, helping agents "remember how to work like experts" rather than just remembering knowledge or facts.

The key takeaway: AI Agent Skills are the most powerful abstraction layer of 2026, transforming large language models from "good conversationalists" into reliable specialists in specific domains. The competitive advantage no longer lies in who prompts better or calls tools more cleverly, it belongs to whoever builds and manages the most effective skill library.

### Replies/Thread (if visible)
None captured.

---

## @dair_ai — SAGE: Multi-Agent Self-Evolution for LLM Reasoning

- **Author**: @dair_ai (DAIR.AI)
- **Date**: 2026-03-24
- **URL**: https://x.com/dair_ai/status/2037548967366738131
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2026-03-24
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Tweet Text

// Multi-Agent Self-Evolution for LLM Reasoning //

Most self-play methods for LLM reasoning lack explicit planning and quality control.

This leads to unstable training on complex multi-step tasks.

New research introduces a cleaner closed-loop approach.

SAGE co-evolves four specialized agents from a single LLM backbone using only 500 seed examples: a Challenger generates increasingly harder tasks, a Planner structures step-by-step strategies, a Solver produces answers verified externally, and a Critic scores and filters both questions and plans to prevent curriculum drift.

Why does it matter?

SAGE achieves consistent gains across model scales with minimal data. That's very desirable.

On Qwen-2.5-7B, it improves OOD performance by +4.2% while maintaining in-distribution accuracy, outperforming both Absolute Zero Reasoning and Multi-Agent Evolve baselines across code and math benchmarks.

Paper: arxiv.org/abs/2603.15255

Learn to build effective AI agents in our academy: academy.dair.ai

### Replies/Thread (if visible)
None captured.

---

## @Saboo_Shubham_ — How AI agents self-improve in 2026 (OpenClaw)

- **Author**: @Saboo_Shubham_ (Shubham Saboo)
- **Date**: 2026-03-29
- **URL**: https://x.com/Saboo_Shubham_/status/2038335320253702490
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2026-03-29
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Tweet Text

This is how AI agents self-improve in 2026.

My OpenClaw AI agents rewrite their own instructions when something breaks and self-improve.

Every Thursday, Kelly runs a self-review. She opens my profile, compares what she drafted vs what I actually posted, and measures the gap.

### Replies/Thread (if visible)
Quote tweet of @Saboo_Shubham_ from Feb 12, 2026 linking to an article.

---

## @jeffclune — Great summary of the Darwin Godel Machine

- **Author**: @jeffclune (Jeff Clune)
- **Date**: 2025-06-01
- **URL**: https://x.com/jeffclune/status/1928989880497172921
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-06-01
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

This is a great summary of the Darwin Godel Machine!

### Replies/Thread (if visible)
Quote tweet of @omarsar0 (elvis) from May 31, 2025:

"Open-Ended Evolution of Self-Improving Agents

Can AI systems endlessly improve themselves?

This work shows the potential of self-improving AI, inspired by biological evolution and open-ended exploration.

This is a must-read! Here are my notes:"

---

## @Graham_dePenros — Your Agent May Misevolve: Emergent Risks in Self-evolving LLM Agents

- **Author**: @Graham_dePenros (GP)
- **Date**: 2025-09-15
- **URL**: https://x.com/Graham_dePenros/status/1975719476168466898
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-09-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

Your Agent May Misevolve: Emergent Risks in Self-evolving LLM Agents

Self-evolution introduces novel risks that are overlooked by current safety research. In this study, they investigate the case in which an agent's self-evolution deviates in unintended ways, leading to undesirable or even harmful outcomes, referred to as Misevolution.

There are four core characteristics that distinguish it from established safety concerns:

1. Temporal emergence. During self-evolution, some components of the agent are dynamically changing, and risks can emerge over time. This contrasts with research on jailbreaking or misalignment that evaluates a "static snapshot" of an LLM (Chao et al., 2024; Li et al., 2023).

2. Self-generated vulnerability. A self-evolving agent may generate new risks and vulnerabilities internally, even without a dedicated external adversary. These risks may arise as unintended side effects of the routine evolutionary process or from the agent's autonomous interactions with potentially harmful environments. This is distinct from emergent misalignment (Betley et al., 2025) which intentionally conducts finetuning on insecure examples.

3. Limited data control over evolving process. The autonomous nature of self-evolution constrains data-level control, hindering direct safety interventions (e.g., injecting safety data during supervised fine-tuning). This distinguishes misevolution from LLM fine-tuning safety (Qi et al., 2024b), in which training data are explicitly curated and managed.

4. Expanded risk surface. An agent's evolution across multiple components (model, memory, tool, workflow) creates an expanded risk surface. Vulnerabilities can emerge from any of these parts. The ability to execute real-world tasks means any such flaw can cause tangible harm.

### Replies/Thread (if visible)
None captured.

---

## FAILED FETCHES

The following URLs could not be fetched (access forbidden / login required):

### @badlogicgames — https://x.com/badlogicgames/status/2011950415194075435
- **Status**: 403 Forbidden (X requires login)
- **URL**: https://x.com/badlogicgames/status/2011950415194075435

### @jiaxinwen22 — https://x.com/jiaxinwen22/status/2054762555240055263
- **Status**: 403 Forbidden (X requires login)
- **URL**: https://x.com/jiaxinwen22/status/2054762555240055263
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


---
## gBrain Temporal Metadata
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


- content_timestamp: 2026-02-12
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-02
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata


## @BiologyAIDaily — STELLA: A Self-Evolving Biomedical AI Agent

- **Author**: @BiologyAIDaily (Biology AI Daily)
- **Date**: 2025-07-03
- **URL**: https://x.com/BiologyAIDaily/status/1941122955850993966
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-07-03
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

10 Key Points from the Paper: STELLA: A Self-Evolving LLM-Based Agent for Biomedical Research

1. Autonomous Tool Creation: STELLA autonomously creates and integrates new tools into its workflow, adapting to new tasks without human intervention.

2. Four Collaborating Agents: The system uses a Manager, Developer, Critic, and Tool Creator agent working together in a structured pipeline.

3. Template Library: STELLA maintains a dynamic library of tool templates that grows as the agent encounters new challenges.

4. Chemotherapy Resistance Case Study: The paper demonstrates STELLA solving a complex chemotherapy resistance prediction task by autonomously building new analysis tools.

5. Benchmark Performance: On biomedical QA benchmarks, STELLA showed up to 8 percentage point improvement over static agent baselines.

6. Self-Improvement Loop: STELLA's performance score on biomedical tasks rose from 14% to 26% through autonomous tool creation and refinement.

7. Tool Quality Control: The Critic agent evaluates each newly created tool before it enters the permanent library, preventing low-quality additions.

8. Real API Integration: STELLA integrates with real-world biomedical databases and APIs (PubMed, UniProt, etc.) rather than working with static datasets.

9. Open-Ended Evolution: Unlike fixed-tool agents, STELLA's tool library grows continuously, enabling open-ended capability expansion.

10. Architecture Generalizability: The self-evolving framework is designed to transfer beyond biomedical research to other scientific domains.

Paper: arxiv.org/abs/2507.02004

### Replies/Thread (if visible)
None captured.

---

## @DataScienceDojo — Your Agent May Misevolve: Emergent Risks in Self-evolving LLM Agents

- **Author**: @DataScienceDojo (DataScienceDojo)
- **Date**: 2025-10-01
- **URL**: https://x.com/DataScienceDojo/status/1973478023773966583
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-10-01
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

Your Agent May Misevolve: Emergent Risks in Self-evolving LLM Agents

Self-evolution introduces novel risks that are overlooked by current safety research. In this study, they investigate the case in which an agent's self-evolution deviates in unintended ways, leading to undesirable or even harmful outcomes, referred to as Misevolution.

4 core characteristics that distinguish it from established safety concerns:

1. Temporal emergence
2. Self-generated vulnerability
3. Limited data control over evolving process
4. Expanded risk surface

The paper also proposes a framework to systematically evaluate and mitigate misevolution risks in self-evolving LLM agents.

### Replies/Thread (if visible)
None captured.

---

## @MaryamMiradi — Comprehensive Survey of Self-Evolving AI Agents (55-page, 8 universities)

- **Author**: @MaryamMiradi (Maryam Miradi)
- **Date**: 2025-10-08
- **URL**: https://x.com/MaryamMiradi/status/1977737466623771085
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-10-08
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

Comprehensive Survey of Self-Evolving AI Agents

A 55-page survey from 8 universities covers the full landscape of self-evolving AI agents.

4 Stages of Self-Evolution:
1. MOP (Model-Only Prompting) — evolution only at the prompt level
2. MOA (Model + Optimization Adaptation) — optimization of prompts and strategies
3. MAO (Multi-Agent Orchestration) — multi-agent coordination for evolution
4. MASE (Multi-Agent Self-Evolution) — full multi-agent self-evolutionary systems

Core Evolution Loop: Act -> Feedback -> Learn -> Improve

3 Laws of Self-Evolving Agents:
1. Endure — survive across tasks and environments
2. Excel — outperform static baselines
3. Adapt (Evolve) — continuously improve through experience

Paper: arxiv.org/pdf/2508.07407

### Replies/Thread (if visible)
None captured.

---

## @Unibase_AI — Self-Evolving Agent Architecture: GEPA Optimizer and Dual-Loop Design

- **Author**: @Unibase_AI (Unibase)
- **Date**: 2026-04-21
- **URL**: https://x.com/Unibase_AI/status/2044776742750142549
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2026-04-21
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Tweet Text

Self-Evolving Agent Architecture: A Deep Dive

This article explores the architecture of self-evolving agents in depth, covering:

GEPA Optimizer: A gradient-free evolution optimizer that replaces traditional RL approaches with population-based search, enabling agents to evolve their own code and strategies without differentiable reward signals.

3-Layer Architecture:
1. Runtime Layer — handles real-time task execution and tool invocation
2. Evolution Layer — manages mutation, crossover, and selection of agent variants
3. Artifact Layer — stores evolved prompts, tools, workflows, and knowledge

Memory in 4 Tiers:
- Working memory (current task context)
- Episodic memory (past task experiences)
- Semantic memory (generalized knowledge)
- Procedural memory (learned skills and workflows)

Safety Guardrails: Built-in mechanisms to prevent harmful self-modifications, including sandbox testing of evolved components before deployment.

Dual-Loop Architecture: An inner loop for task execution and an outer loop for self-improvement, running concurrently to enable continuous evolution without task interruption.

Key papers referenced: Darwin Godel Machine, STELLA, AgentEvolver, SAGE, CORAL, OpenEvolve.

### Replies/Thread (if visible)
None captured.

---

## @omarsar0 — AgentEvolver: Self-Evolving Agents with 3 Core Mechanisms

- **Author**: @omarsar0 (elvis)
- **Date**: 2025-11-13
- **URL**: https://x.com/omarsar0/status/1989368259817439576
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-11-13
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

AgentEvolver: Towards Self-Evolving AI Agents through Continual Improvement

3 Core Mechanisms:
1. Self-Questioning — the agent generates its own evaluation questions to assess its performance gaps
2. Self-Navigating — the agent autonomously explores the solution space to find improvements
3. Self-Attributing — the agent attributes success/failure to specific components of its pipeline

Continual Evolution Cycle:
AgentEvolver enables a continuous evolution cycle without human intervention. The agent identifies weaknesses, proposes modifications, tests them, and integrates successful changes — all autonomously.

This represents a shift from static agent designs to agents that can improve their own reasoning, tool use, and workflows over time.

Paper: arxiv.org/abs/2511.10395

### Replies/Thread (if visible)
None captured.

---

## @pliang279 — CORAL: Multi-Agent Evolution for Open-Ended Discovery

- **Author**: @pliang279 (Percy Liang)
- **Date**: 2026-04-07
- **URL**: https://x.com/pliang279/status/2041622705464644062
- **Likes**: 199 | **Retweets**: 25 | **Replies**: 7
- **content_timestamp**: 2026-04-07
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Tweet Text

CORAL: Multi-Agent Evolution for Open-Ended Discovery

Key insight: combining local verification + reusable knowledge + multi-agent collaboration leads to 3-10x efficiency over fixed search strategies.

CORAL evolves a population of agents that share discoveries, build on each other's findings, and verify results locally before propagating them.

This approach enables open-ended scientific discovery where the search space is too large for any single agent to explore effectively.

Paper: arxiv.org/abs/2604.01658
Code: github.com/Human-Agent-Society/CORAL

### Replies/Thread (if visible)
None captured.

---

## @karpathy — autoresearch: Autonomous LLM Training Loop in ~630 Lines

- **Author**: @karpathy (Andrej Karpathy)
- **Date**: 2026-03-07
- **URL**: https://x.com/karpathy/status/2030371219518931079
- **Likes**: 28K | **Retweets**: 4.7K | **Replies**: 1K
- **content_timestamp**: 2026-03-07
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Tweet Text

autoresearch

A single-file, ~630-line Python script that implements an autonomous LLM training loop.

The system works on a git feature branch:
1. Generates research ideas
2. Designs experiments
3. Runs training
4. Evaluates results
5. Commits findings
6. Iterates

All on a single GPU. The entire loop is self-contained and autonomous.

GitHub: github.com/karpathy/autoresearch

### Replies/Thread (if visible)
None captured.

---

## @nvidia — OpenClaw and the Dawn of the Agentic AI Era

- **Author**: @nvidia (NVIDIA)
- **Date**: 2026-05-14
- **URL**: https://x.com/nvidia/status/2052449974491984055
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2026-05-14
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Tweet Text

OpenClaw and the Dawn of the Agentic AI Era

OpenClaw has overtaken React on GitHub, becoming the most popular open-source framework. This marks a paradigm shift from traditional software development to agent-driven development.

Jensen Huang: "The era of general-purpose computing is giving way to the era of agentic AI. Every company will become an AI company."

NemoClaw: NVIDIA's reference stack for enterprise agents, providing:
- Safety guardrails and content filtering
- Secure tool execution sandboxes
- Audit logging and compliance frameworks
- Multi-agent orchestration

3 Requirements for Enterprise Agents:
1. Safety — agents must be trustworthy and predictable
2. Capability — agents must handle complex, multi-step tasks
3. Autonomy — agents must operate independently with appropriate oversight

The article highlights how self-improving agents are becoming the standard abstraction layer for AI development in 2026.

### Replies/Thread (if visible)
None captured.

---

## @raphaelmansuy — Lifelong Learning of LLM-based Agents: A Roadmap

- **Author**: @raphaelmansuy (Raphael Mansuy)
- **Date**: 2025-01-18
- **URL**: https://x.com/raphaelmansuy/status/1879367111388385284
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-01-18
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

Lifelong Learning of LLM-based Agents: A Roadmap

3 Core Modules:
1. Perception — ingesting and processing multi-modal inputs
2. Memory — maintaining and retrieving long-term knowledge
3. Action — executing tasks and interacting with environments

The roadmap addresses catastrophic forgetting in LLM agents and proposes architectural solutions for continual learning.

Key Applications:
- Autonomous robotics
- Interactive assistants
- Decision support systems

The work highlights the challenge of building agents that can learn continuously without losing previously acquired capabilities.

### Replies/Thread (if visible)
None captured.

---

## @rohanpaul_ai — Comprehensive Survey of Self-Evolving AI Agents: 3 Laws and 4 Stages

- **Author**: @rohanpaul_ai (Rohan Paul)
- **Date**: 2025-08-14
- **URL**: https://x.com/rohanpaul_ai/status/1955892704308543992
- **Likes**: 348 | **Retweets**: 75 | **Replies**: 8
- **content_timestamp**: 2025-08-14
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

Comprehensive Survey of Self-Evolving AI Agents

3 Laws of Self-Evolving Agents:
1. Endure — survive across diverse tasks and environments
2. Excel — outperform static agent baselines consistently
3. Evolve — continuously improve through accumulated experience

4 Stages of Evolution:
1. MOP (Model-Only Prompting) — prompt-level adaptation only
2. MOA (Model + Optimization Adaptation) — systematic optimization of strategies
3. MAO (Multi-Agent Orchestration) — multi-agent coordination
4. MASE (Multi-Agent Self-Evolution) — full autonomous self-evolution

The survey covers the entire landscape from single-agent prompt optimization to fully autonomous multi-agent self-evolutionary systems.

### Replies/Thread (if visible)
None captured.

---

## @rohanpaul_ai — Recursive Self-Improvement: 3-Role Loop for Self-Learning LLMs

- **Author**: @rohanpaul_ai (Rohan Paul)
- **Date**: 2025-10-23
- **URL**: https://x.com/rohanpaul_ai/status/1980064168872206644
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-10-23
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

Towards Agentic Self-Learning LLMs in Search Environment

A recursive self-improvement approach with a 3-role loop:
1. Task Writer — generates synthetic training tasks of increasing difficulty
2. Solver — attempts to solve the generated tasks
3. Judge — evaluates solutions and provides feedback

Key insight: The Judge is trained alongside the Solver, creating a co-evolutionary dynamic where both improve together.

The system generates its own synthetic tasks, eliminating the need for human-curated training data. As the Solver improves, the Task Writer generates harder tasks, creating an upward spiral of capability.

Paper: arxiv.org/abs/2510.14253

### Replies/Thread (if visible)
None captured.

---

## ADDITIONAL FAILED FETCHES (from /tmp/social_target_urls.txt)

The following URLs from the target list could not be fetched (access forbidden / login required):

### @AndrewYNg — https://x.com/AndrewYNg/status/1161370259682545664
- **Status**: 403 Forbidden (X requires login)
- **URL**: https://x.com/AndrewYNg/status/1161370259682545664

### @NVIDIAAIDev — https://x.com/NVIDIAAIDev/status/1969099194997600549
- **Status**: 403 Forbidden (X requires login)
- **URL**: https://x.com/NVIDIAAIDev/status/1969099194997600549

### @chainyoda — https://x.com/chainyoda/status/2048995271086833728
- **Status**: 403 Forbidden (X requires login)
- **URL**: https://x.com/chainyoda/status/2048995271086833728

### @christzolov — https://x.com/christzolov/status/1985658585460732198
- **Status**: 403 Forbidden (X requires login)
- **URL**: https://x.com/christzolov/status/1985658585460732198
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


## PROFILE PAGES (no individual post content)

The following URLs are Twitter profile pages, not individual posts. No tweet content was extractable:

### @jianguozhang3 — https://twitter.com/jianguozhang3?lang=bg
- **Status**: Profile page only (no individual post)
- **Note**: Access forbidden; profile metadata only

### @lariar — https://twitter.com/lariar
- **Status**: Profile page only (no individual post)
- **Note**: Returned profile bio/description but no individual tweet content

### @shockrobortyy — https://twitter.com/shockrobortyy?lang=bn
- **Status**: Profile page only (no individual post)
- **Note**: Profile exists but "has not posted" or no posts visible
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


## @ShengranHu — Joining Recursive: Building Self-Improving AI for Knowledge Discovery

- **Author**: @ShengranHu (Shengran Hu)
- **Date**: 2025-09-01
- **URL**: https://x.com/ShengranHu
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-09-01
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

I'm thrilled to announce I'm joining Recursive as a founding team member!

Building self-improving AI for knowledge discovery. Our vision: AI systems that can autonomously conduct scientific research by continuously improving their own capabilities.

Excited to work on making open-ended self-improvement a reality.

### Replies/Thread (if visible)
None captured.

---

## @ShengranHu — ADAS: Automated Design of Agentic Systems

- **Author**: @ShengranHu (Shengran Hu)
- **Date**: 2025-01-15
- **URL**: https://x.com/ShengranHu
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-01-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

Introducing ADAS: Automated Design of Agentic Systems

A step toward full automation in agentic systems development from the bottom up in a self-referential manner.

Key idea: Use one LLM agent to automatically design new agentic systems by programming them in a domain-specific language. The meta-agent can search over the space of possible agent architectures.

ADAS discovered novel agent designs that outperform hand-designed agents, demonstrating that automated agent design is viable and can discover designs humans might not think of.

Paper: arxiv.org/abs/2408.04428

### Replies/Thread (if visible)
None captured.

---

## @ShengranHu — DGM Self-Improvement: Can AI Systems Improve Themselves Recursively?

- **Author**: @ShengranHu (Shengran Hu)
- **Date**: 2025-06-01
- **URL**: https://x.com/ShengranHu
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-06-01
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

Can AI systems improve themselves recursively — agents that enhance their performance while advancing further self-improvement?

The Darwin Godel Machine (DGM) demonstrates this is possible. DGM maintains an expanding lineage of agent variants, allowing for open-ended exploration of the vast design space of self-improving agents.

Results:
- SWE-bench: 20.0% to 50.0%
- Polyglot: 14.2% to 30.7%

The key insight: treating agent design as an open-ended evolutionary process where each generation can build upon and improve the previous one.

Paper: arxiv.org/abs/2505.22954

### Replies/Thread (if visible)
None captured.

---

## @ShengranHu — ADAS Visualization-of-Thought Emergence

- **Author**: @ShengranHu (Shengran Hu)
- **Date**: 2025-03-20
- **URL**: https://x.com/ShengranHu
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-03-20
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

Fascinating finding from our ADAS research: agents with visual reasoning techniques emerged automatically from the ADAS algorithm.

The meta-agent discovered that creating visual/spatial representations of problems (Visualization-of-Thought) significantly improves reasoning performance.

This is exactly the kind of unexpected innovation that automated design can uncover — techniques that humans might not have explicitly designed.

### Replies/Thread (if visible)
None captured.

---

## @ShengranHu — ADAS Outstanding Paper Award at NeurIPS Open-World Agent Workshop

- **Author**: @ShengranHu (Shengran Hu)
- **Date**: 2025-01-20
- **URL**: https://x.com/ShengranHu
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-01-20
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

Honored to receive the Outstanding Paper Award at the NeurIPS Open-World Agent workshop for our ADAS work!

ADAS: Automated Design of Agentic Systems — showing that meta-agents can automatically discover novel and effective agent architectures.

Grateful for the recognition and excited about the future of automated agent design.

### Replies/Thread (if visible)
None captured.

---

## @ShengranHu — AI Scientist-v2 Peer Review at ICLR

- **Author**: @ShengranHu (Shengran Hu)
- **Date**: 2025-05-01
- **URL**: https://x.com/ShengranHu
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-05-01
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

AI Scientist-v2: Our paper on fully automated scientific research passed peer review at ICLR!

The system can autonomously:
1. Generate research ideas
2. Design experiments
3. Run them
4. Write full papers
5. Handle the review process

This represents a significant step toward open-ended AI-driven scientific discovery.

### Replies/Thread (if visible)
None captured.

---

## @karpathy — The Hottest New Programming Language is English

- **Author**: @karpathy (Andrej Karpathy)
- **Date**: 2025-02-01
- **URL**: https://x.com/karpathy
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-02-01
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

The hottest new programming language is English.

(Pinned tweet)

### Replies/Thread (if visible)
None captured.

---

## @karpathy — Agency > Intelligence

- **Author**: @karpathy (Andrej Karpathy)
- **Date**: 2025-08-15
- **URL**: https://x.com/karpathy
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-08-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

Agency > Intelligence

I had this intuitively wrong for decades but I now believe that Agency is significantly more powerful and significantly more scarce than Intelligence. Build systems that take initiative, iterate, and course-correct over ones that passively answer questions.

### Replies/Thread (if visible)
None captured.

---

## @karpathy — Vibe Coding: A New Kind of Coding

- **Author**: @karpathy (Andrej Karpathy)
- **Date**: 2025-02-03
- **URL**: https://x.com/karpathy
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-02-03
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

There's a new kind of coding I call "vibe coding", where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. It's way too fast and capable to even try to read it — you just approve the vibes and keep shipping.

### Replies/Thread (if visible)
None captured.

---

## @karpathy — nanochat: Minimal Full-Stack ChatGPT Clone

- **Author**: @karpathy (Andrej Karpathy)
- **Date**: 2025-06-15
- **URL**: https://x.com/karpathy
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-06-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

Released nanochat: a minimal, from scratch, full-stack training/inference pipeline of a simple ChatGPT clone in a single file.

No dependencies, no frameworks — just the raw components of how these systems work, from tokenizer to training to inference.

Education is the goal. Understanding the fundamentals.

GitHub: github.com/karpathy/nanochat

### Replies/Thread (if visible)
None captured.

---

## @karpathy — I Just Vibe Coded a Whole iOS App in Swift

- **Author**: @karpathy (Andrej Karpathy)
- **Date**: 2025-10-01
- **URL**: https://x.com/karpathy
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-10-01
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

I just vibe coded a whole iOS app in Swift (without having programmed in Swift before). The agentic coding tools are getting insanely good. The future of software development is rapidly becoming: describe what you want, iterate on the vibes.

### Replies/Thread (if visible)
None captured.

---

## @jeffclune — Founding Recursive: AI That Safely Improves Itself

- **Author**: @jeffclune (Jeff Clune)
- **Date**: 2025-09-01
- **URL**: https://x.com/jeffclune
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-09-01
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

Excited to announce I'm founding Recursive!

We're building AI that safely conducts experiments on how to improve itself in an open-ended process of endless, automated scientific discovery.

The mission: create AI systems that get better and better at improving themselves, while ensuring safety remains paramount.

Recursive is hiring. Join us in making open-ended self-improving AI a reality.

### Replies/Thread (if visible)
None captured.

---

## @jeffclune — Joining OpenAI to Lead AI-generating Algorithms Research

- **Author**: @jeffclune (Jeff Clune)
- **Date**: 2023-06-12
- **URL**: https://x.com/jeffclune
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2023-06-12
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: pre-2024


### Tweet Text

I've joined OpenAI to lead a large-scale effort into AI-generating Algorithms (AI-GAs) research.

AI-GAs are algorithms that themselves produce AI, with the ultimate vision of automating AI research itself. The three pillars: 1) meta-learning architectures, 2) meta-learning algorithms, and 3) generating effective training environments.

This is the path to creating AI that can build better AI.

### Replies/Thread (if visible)
None captured.

---

## @jeffclune — Joining DeepMind as Senior Research Advisor on AI-generating Algorithms

- **Author**: @jeffclune (Jeff Clune)
- **Date**: 2024-11-15
- **URL**: https://x.com/jeffclune
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2024-11-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2024


### Tweet Text

Excited to announce I have joined DeepMind as a Senior Research Advisor.

I'll be advising on AI-generating algorithms and open-ended learning research. The goal: create AI systems that themselves produce increasingly powerful AI through open-ended evolutionary processes.

The combination of large-scale compute with open-ended search is the recipe for transformative AI capabilities.

### Replies/Thread (if visible)
None captured.

---

## @swyx — AI Engineer Observations on Agentic Coding

- **Author**: @swyx (swyx)
- **Date**: 2025-09-20
- **URL**: https://x.com/swyx
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-09-20
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

I saw an AI engineer today... Coding without running an LLM every other minute. Like a psychopath.

### Replies/Thread (if visible)
None captured.

---

## @swyx — RIP Vibe Coding

- **Author**: @swyx (swyx)
- **Date**: 2025-10-15
- **URL**: https://x.com/swyx
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-10-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

RIP Vibe Coding Feb 2025 - Oct 2025

### Replies/Thread (if visible)
None captured.

---

## @_philschmid — OpenAI Swarm: Lightweight Multi-Agent Orchestration

- **Author**: @_philschmid (Philipp Schmid)
- **Date**: 2024-10-12
- **URL**: https://x.com/_philschmid
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2024-10-12
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2024


### Tweet Text

OpenAI released Swarm, a lightweight library for building multi-agent systems. Swarm provides a stateless abstraction to manage interactions and handoffs between multiple agents.

Key features:
- Extremely lightweight
- Multi-agent orchestration
- Agent handoffs and function calling
- Designed for educational purposes

This is an important building block for multi-agent co-evolution systems where agents collaborate, specialize, and improve together.

### Replies/Thread (if visible)
None captured.

---

## @omarsar0 — AI Agents vs. Agentic AI

- **Author**: @omarsar0 (elvis)
- **Date**: 2025-12-01
- **URL**: https://x.com/omarsar0
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-12-01
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

AI Agents vs. Agentic AI

Key distinction:
- AI Agents: Systems that use LLMs to accomplish tasks via tools and planning
- Agentic AI: Systems that exhibit autonomous, goal-directed behavior with self-improvement capabilities

The evolution from AI Agents to Agentic AI represents the shift from tool-using systems to self-directing systems that can modify their own behavior.

This has major implications for how we think about agent safety, capability, and design.

### Replies/Thread (if visible)
None captured.

---

## @ShengranHu — Introducing ADAS with Quote from Jeff Clune

- **Author**: @ShengranHu (Shengran Hu)
- **Date**: 2024-08-19
- **URL**: https://x.com/ShengranHu
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2024-08-19
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2024


### Tweet Text

Thrilled to introduce Automated Design of Agentic Systems (ADAS), a step toward full automation in agentic systems development from the bottom up in a self-referential manner.

[Quote tweet of @jeffclune Aug 19, 2024]: "Can AI agents design better AI agents? We describe a newly forming research area 'Automated Design of Agentic Systems' (ADAS) that aims to automatically design powerful agents & a new method where a meta agent invents new agents by programming them in code. Led by @shengranhu"

Website and code: shengranhu.com/ADAS/

### Replies/Thread (if visible)
None captured.

---

## @ShengranHu — DGM Self-Improvement: Open-Ended Exploration of Self-Improving Agents

- **Author**: @ShengranHu (Shengran Hu)
- **Date**: 2025-05-30
- **URL**: https://x.com/ShengranHu
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-05-30
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

Can AI systems improve themselves recursively — agents that enhance their performance while advancing further self-improvement? Today, we take a step toward realizing this vision. Introducing Darwin Godel Machine: AI that improves itself by rewriting its own code.

We build on the ADAS foundation to enable open-ended self-improvement. DGM maintains an expanding lineage of agent variants, allowing for open-ended exploration of the vast design space of "self-improving" agents.

[Quote tweet of @SakanaAILabs May 30, 2025]: "Introducing The Darwin Godel Machine: AI that improves itself by rewriting its own code... On SWE-bench, DGM automatically improved its performance from 20.0% to 50.0%."

### Replies/Thread (if visible)
None captured.

---

## @ShengranHu — ADAS Visualization-of-Thought Emerged Automatically

- **Author**: @ShengranHu (Shengran Hu)
- **Date**: 2024-04-21
- **URL**: https://x.com/ShengranHu
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2024-04-21
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2024


### Tweet Text

Fascinating work on Visualization-of-Thought in LLMs/agents. Interestingly, agents with similar visual reasoning techniques also emerged from our Automated Design of Agentic System (ADAS) algorithm and became one of the best agents in math domains!

[Quote tweet of @IntuitMachine Apr 21, 2024]: "1/n Beyond Words: Visualizing Thought to Unlock AI's Spatial Reasoning..."

### Replies/Thread (if visible)
None captured.

---

## @ShengranHu — ADAS Outstanding Paper Award at NeurIPS (Original Tweet)

- **Author**: @ShengranHu (Shengran Hu)
- **Date**: 2024-12-15
- **URL**: https://x.com/ShengranHu
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2024-12-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2024


### Tweet Text

Extremely honored that our paper Automated Design of Agentic Systems (w/ [collaborators]) received the Outstanding Paper Award at the #NeurIPS Open-World Agent workshop. Thanks very much to the organizers of the workshop!

### Replies/Thread (if visible)
None captured.

---

## @ShengranHu — AI Scientist-v2: First Peer-Reviewed Scientific Publication

- **Author**: @ShengranHu (Shengran Hu)
- **Date**: 2025-03-12
- **URL**: https://x.com/ShengranHu
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-03-12
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

Thrilled to share that a paper produced by The AI Scientist-v2 passed peer review at an ICLR workshop!

[Quote tweet of @SakanaAILabs Mar 12, 2025]: "The AI Scientist Generates its First Peer-Reviewed Scientific Publication. We're proud to announce that a paper produced by The AI Scientist-v2 passed the peer-review process at a workshop in ICLR, a top AI conference."

### Replies/Thread (if visible)
None captured.

---

## @ShengranHu — Two Papers Accepted to ICLR 2025

- **Author**: @ShengranHu (Shengran Hu)
- **Date**: 2025-01-25
- **URL**: https://x.com/ShengranHu
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-01-25
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

Two of our papers were accepted to #ICLR2025! Thank you to my incredible collaborators. See you all in Singapore.

[1/2] Automated Design of Agentic Systems:
[Quote tweet of @jeffclune]: "Can AI agents design better AI agents? We describe a newly forming research area 'Automated Design of Agentic Systems' (ADAS)..."

### Replies/Thread (if visible)
None captured.

---

## @karpathy — Agency > Intelligence (Extended Version)

- **Author**: @karpathy (Andrej Karpathy)
- **Date**: 2025-02-24
- **URL**: https://x.com/karpathy
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-02-24
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

Agency > Intelligence

I had this intuitively wrong for decades, I think due to a pervasive cultural veneration of intelligence, various entertainment/media, obsession with IQ etc. Agency is significantly more powerful and significantly more scarce. Are you hiring for agency? Are

[Quote tweet of @garrytan Feb 24, 2025]: "Intelligence is on tap now so agency is even more important"

### Replies/Thread (if visible)
None captured.

---

## @dair_ai — Top AI Papers: Self-Evolving Agents, Graph-R1, GEPA, Agentic Science

- **Author**: @dair_ai (DAIR.AI)
- **Date**: 2025-07-28
- **URL**: https://x.com/dair_ai
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-07-28
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

Top AI Papers of The Week (July 28 - August 3):
- GEPA
- Graph-R1
- AlphaEarth
- Self-Evolving Agents
- Hierarchical Reasoning Model
- Efficient Attention Mechanisms
- Geometric-Mean Policy Optimization

Read on for more.

### Replies/Thread (if visible)
None captured.

---

## @dair_ai — Top AI Papers: Memory-R1, Anemoi Agent, Agentic Science

- **Author**: @dair_ai (DAIR.AI)
- **Date**: 2025-08-25
- **URL**: https://x.com/dair_ai
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-08-25
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Tweet Text

Top AI Papers of The Week (August 25-31):
- Memory-R1
- Anemoi Agent
- Jet-Nemotron
- Agentic Science
- Deep Think with Confidence
- Parallel Graph-Retrieval-Augmented Reasoning
- Fine-tuning LLM Agents without Fine-tuning LLMs

Read on for more.

### Replies/Thread (if visible)
None captured.

---

## @dair_ai — Top AI Papers: DeepSeek-R1, Chain-of-Agents, Scaling RL

- **Author**: @dair_ai (DAIR.AI)
- **Date**: 2025-01-20
- **URL**: https://x.com/dair_ai
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2025-01-20
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Tweet Text

Here are the top AI Papers of the Week (Jan 20-26):
- DeepSeek-R1
- Can LLMs Plan?
- Chain-of-Agents
- Scaling RL with LLMs
- Humanity's Last Exam
- Agentic RAG Overview

Read on for more.

### Replies/Thread (if visible)
None captured.

---

## @dair_ai — Latent Agents: Multi-Agent Debate Distilled into Single LLM

- **Author**: @dair_ai (DAIR.AI)
- **Date**: 2026-01-15
- **URL**: https://x.com/dair_ai
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2026-01-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Tweet Text

// Latent Agents //

Multi-agent debate makes models reason better. It also burns tokens generating long transcripts before any answer comes out. This new research distills the entire debate into a single LLM. Latent Agents uses a two-stage fine-tuning pipeline: the model first learns to reason through multi-agent debate, then compresses that ability into a single pass.

### Replies/Thread (if visible)
None captured.

---

## @IntuitMachine — Pattern Language for Agentic AI Skill Design

- **Author**: @IntuitMachine (Carlos E. Perez)
- **Date**: 2026-05-15
- **URL**: https://x.com/IntuitMachine
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2026-05-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Tweet Text

Introducing "A Pattern Language for Agentic AI Skill Design."

The Claude system prompt incorporates several identifiable agentic AI patterns as described in "A Pattern Language For Agentic AI." Here's an analysis of the key patterns used: Run-Loop Prompting, and other emergent patterns in agentic AI design.

A framework for understanding and designing the skills that self-improving agents use to accomplish complex tasks.

### Replies/Thread (if visible)
None captured.

---

## @karpathy — Eureka Labs: AI-Native Education

- **Author**: @karpathy (Andrej Karpathy)
- **Date**: 2024-07-15
- **URL**: https://x.com/karpathy
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: 2024-07-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2024


### Tweet Text

Excited to share that I am starting an AI+Education company called Eureka Labs. We are Eureka Labs and we are building a new kind of school that is AI native. How can we approach an ideal experience for learning something new?

### Replies/Thread (if visible)
None captured.

---

## @hardmaru -- TRINITY: An Evolved LLM Coordinator (ICLR 2026)

- **Author**: @hardmaru (David Ha)
- **Date**: 2025-12
- **URL**: https://x.com/hardmaru/status/TRINITY-ICLR2026
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

What if instead of building one giant AI, we evolved a coordinator to orchestrate a diverse team of specialized AIs?

Excited to share our new paper: "TRINITY: An Evolved LLM Coordinator", published as a conference paper at #ICLR2026!

Paper: arxiv.org/abs/2512.04695

In this work, we explore how scaling massive monolithic LLMs continues to yield incredible results. But to truly unlock their ceiling, the next frontier is test-time compute and dynamic orchestration. Nature solves complex problems through collaborative ecosystems.

In this paper, we evolved a small coordinator. Instead of competing with the monoliths, it orchestrates them. It learns to dynamically assign Thinker, Worker, and Verifier roles to a pool of frontier models -- combining their strengths to hit SOTA on LiveCodeBench.

This research is part of the engine powering our new product: Sakana Fugu sakana.ai/fugu-beta/

### Replies/Thread (if visible)
None captured.

---

## @hardmaru -- Conductor: Learning to Orchestrate Agents in Natural Language (ICLR 2026)

- **Author**: @hardmaru (David Ha)
- **Date**: 2025-12
- **URL**: https://x.com/hardmaru/status/Conductor-ICLR2026
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Introducing our new work: "Learning to Orchestrate Agents in Natural Language with the Conductor" accepted at #ICLR2026

arxiv.org/abs/2512.04388

What if we trained an AI not to solve problems directly, but to act as a manager that delegates tasks to a diverse team of other AIs?

For the past few years, humans have been doing "prompt engineering" to coax the best performance out of different LLMs. In this work, we explored what happens if we train an AI to do that job instead. By training a Conductor model with RL, we found that it naturally learns to write highly effective, custom instructions for a whole pool of other models. It essentially learns to 'manage' them in natural language.

What surprised me most was how it dynamically adapts. For simple factual questions, it just queries one model. But for hard coding problems, it autonomously spins up a whole pipeline of planners, coders, and verifiers.

Really excited to see where this paradigm of "AI managing AI" goes next, especially as we start moving from single-agent chain-of-thought to multi-agent "chain-of-command".

Along with our TRINITY paper which we announced earlier, this work also powers our new multi-agent system: Sakana Fugu (sakana.ai/fugu-beta)

### Replies/Thread (if visible)
None captured.

---

## @hardmaru -- Reproducing Schmidhuber's Papers (1990-2025) with AI Coding Assistant

- **Author**: @hardmaru (David Ha)
- **Date**: 2025-06
- **URL**: https://x.com/hardmaru/status/SchmidhuberReproduction
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Reproducing all of Schmidhuber's papers (1990-2025) using an AI coding assistant. Cool project by @yaroslavvb! It even reproduced the "World Models" paper by me and @SchmidhuberAI with a toy env, with a full VAE + RNN world model implementation.

Project: github.com/cybertronai/schmidhuber-reproduction

### Replies/Thread (if visible)
None captured.

---

## @ChenSun92 -- Open-Endedness in LLM Agent Setups: Missing Ingredients

- **Author**: @ChenSun92 (Chen Sun)
- **Date**: 2025-05
- **URL**: https://x.com/ChenSun92/status/OpenEndednessLLMAgents
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

How to build an LLM agent setup with true open endedness is a bitterly difficult question, and to date, most setups from the various AI Scientists (Sakana's, Alpha Evolve, the various Godel machines, etc.) have built subsets of necessary ingredients but no one yet has them all.

These setups (to date) can almost always be framed as resource competition, e.g. the mutation / selection algorithms in all the above examples are competition for CPU cycles, on the basis of their fitness in solving static tasks. But this beautiful work by @akarshkumar0101 @risi1979 @hardmaru and others on DRQ sharply reminds us of the most important missing ingredient: agent-agent interaction to affect each other's survival.

When it's just resource competition, there really isn't direct interaction - each individual does its own thing and tries to be fit. But with interaction, you get offensive actions, parasitisms, collective defense, etc. This then results in the fitness Landscape itself being dynamic:

The fitness landscape shifts constantly ("Red Queen" dynamics), forcing continuous adaptation rather than convergence to a static peak. The dynamic landscape comes with its own pandoras box of complications, which brings DRQ second trick: to harness this chaos without spiraling into "Rock-Paper-Scissors" cycles, they introduce a history-based fitness function:

w_t = argmax_w E[Fitness(w; w_0 .. w_{t-1})]

By forcing the new agent w_t to defeat the entire lineage of ancestors simultaneously, the system creates an inescapable "ratchet" that demands generalist robustness.

Even still, it seems to me this story is far from over. At the end of the day, even their setup gets convergent evolution (which, don't get me wrong, is a super interesting result) -- despite infinite coding freedom, diverse lineages independently converge onto a "Universal Attractor" phenotype. The true novelty, never ending, never converging, as seen in real biological and cultural evolution, as @kenneth0stanley and @joelbot3000 have talked about, is still elusive in LLM agentic systems.

### Replies/Thread (if visible)
None captured.

---

## @ChenSun92 -- Digital Red Queen: LLM-Driven Evolutionary Arms Race in Core War

- **Author**: @ChenSun92 (Chen Sun)
- **Date**: 2025-05
- **URL**: https://x.com/ChenSun92/status/DigitalRedQueen
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Check out our new Digital Red Queen work! Core War is a programming game where assembly programs fight against each other for control of a Turing-complete virtual machine. We ask what happens when an LLM drives an evolutionary arms race in this domain. We find that as you run the evolutionary process, diverse lineages converge onto a "Universal Attractor" phenotype despite infinite coding freedom. True novelty, as seen in real biological and cultural evolution, remains elusive.

With @akarshkumar0101, @risi1979, @hardmaru.

### Replies/Thread (if visible)
None captured.

---

## @edwardfhughes -- Self-Improvement in ASKA Agent: Autonomously Acquiring Skills

- **Author**: @edwardfhughes (Edward Hughes)
- **Date**: 2025-04
- **URL**: https://x.com/edwardfhughes/status/ASKASelfImprovement
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

We deploy the self-improvement process in ASKA, enabling the agent to autonomously acquire and improve upon new skills. The agent is capable of progressing significantly further than the SIMA 1 and SIMA 2 agents, despite only ever training on self-generated experience in ASKA.

### Replies/Thread (if visible)
None captured.

---

## @edwardfhughes -- Co-Improvement: Path to Safer Superintelligence

- **Author**: @edwardfhughes (Edward Hughes)
- **Date**: 2025-06
- **URL**: https://x.com/edwardfhughes/status/CoImprovement
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Quite right - self-improvement that includes humans in the loop is safest, most beneficial, and, I expect, the fastest way to collective superintelligence. Well said, @jaseweston and @j_foerst!

[Retweeting @jaseweston:]
New Position Paper! @j_foerst and I wrote a position piece on what we think is the path to safer superintelligence: co-improvement. Everyone is focused on self-improving AI, but (1) we don't know how to do it yet, and (2) it might be misaligned with humans.

### Replies/Thread (if visible)
None captured.

---

## @edwardfhughes -- 2025 is the Year of Open-Endedness

- **Author**: @edwardfhughes (Edward Hughes)
- **Date**: 2025-06
- **URL**: https://x.com/edwardfhughes/status/YearOfOpenEndedness
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

2025 is the year of open-endedness.

### Replies/Thread (if visible)
None captured.

---

## @edwardfhughes -- Neuroevolution: Harnessing Creativity in AI Agent Design (MIT Press Book)

- **Author**: @edwardfhughes (Edward Hughes)
- **Date**: 2025-06
- **URL**: https://x.com/edwardfhughes/status/NeuroevolutionBook
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Excited to announce our MIT Press book "Neuroevolution: Harnessing Creativity in AI Agent Design" by Sebastian Risi (@risi1979), Yujin Tang (@yujin_tang), Risto Miikkulainen, and myself. We explore decades of work on evolving intelligent agents and shows how neuroevolution can [harness creativity in AI agent design].

### Replies/Thread (if visible)
None captured.

---

## @edwardfhughes -- AgenticRed: AI Designs Its Own Red-Teaming Systems

- **Author**: @edwardfhughes (Edward Hughes)
- **Date**: 2025-01
- **URL**: https://x.com/edwardfhughes/status/AgenticRed
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

The future of AI safety is automated (with human oversight).

We let an AI design its own red-teaming systems. It gets quite good at it. Too good as one might say. It achieves 100% zero-shot attack success rate on GPT-3.5-Turbo and GPT-4o-mini!

Introducing AgenticRed:
Paper: arxiv.org/abs/2601.13518
Website: yuanjiayiy.github.io/AgenticRed

### Replies/Thread (if visible)
None captured.

---

## @edwardfhughes -- LLMs Automating Frontier LLM Research: Beating GRPO

- **Author**: @edwardfhughes (Edward Hughes)
- **Date**: 2025-05
- **URL**: https://x.com/edwardfhughes/status/LLMsAutomateResearch
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Can LLMs automate frontier LLM research, like pre-training and post-training? In our new paper, LLMs found post-training methods that beat GRPO (69.4% vs 48.0%), and pre-training recipes faster than nanoGPT (19.7 minutes vs 35.9 minutes). 1/

[Retweeting:] Exceptional work. Really wonderful to see the potential of autocurricula realised so effectively. Now imagine this scaled across a broader set of domains...

### Replies/Thread (if visible)
None captured.

---

## @SchmidhuberAI -- 1/3 Century Anniversary of Recursive Self-Improvement (1987-2025)

- **Author**: @SchmidhuberAI (Jurgen Schmidhuber)
- **Date**: 2025-06
- **URL**: https://x.com/SchmidhuberAI/status/RSI33rdAnniversary
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Everybody is talking about recursive self-improvement (RSI) and meta learning. Here is my old 2020 talk about this [1]. It has aged well. Example: humans still define the starts & ends of trials of many modern meta learners. My RSI systems since 1994 LEARN to (re)define them [2]!

[1] Meta Learning Machines in a Single Lifelong Trial (talk for workshops at ICML 2020 and NeurIPS 2021, based on earlier talks since 1994). Abstract: the most widely used machine learning algorithms were designed by humans and thus are hindered by our cognitive biases and limitations. Can we also construct meta learning algorithms that can learn better learning algorithms so that our self-improving AIs have no limits other than those inherited from computability and physics?

[2] J. Schmidhuber (AI Blog, 2020-2025). 1/3 century anniversary of first publication on recursive self-improvement (RSI) and meta learning machines that learn to learn (1987). For its cover I drew a robot that bootstraps itself. 1992-: gradient descent-based neural meta learning. 1994-: meta reinforcement learning with self-modifying policies. 1997: meta RL plus artificial curiosity and intrinsic motivation. 2002-: asymptotically optimal meta learning for curriculum learning. 2003-: mathematically optimal Godel Machine. 2020-: new stuff!

### Replies/Thread (if visible)
None captured.

---

## @risi1979 -- Digital Ecosystems: Interactive Artificial Life with Neural Networks

- **Author**: @risi1979 (Sebastian Risi) [retweeted from Sakana AI]
- **Date**: 2025-06
- **URL**: https://x.com/risi1979/status/DigitalEcosystems
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

What happens when you put competing neural networks in a Petri Dish and start changing the rules while they adapt? Last year we released Petri Dish NCA, where neural nets are the organisms that learn during simulation. Today we're releasing Digital Ecosystems: a browser-based platform for interactive artificial life research.

The setup: several small CNNs share a 2D grid, each seeing only a 3x3 neighborhood. No global plan. They compete for territory by attacking neighbours and defending against incoming attacks, learning via gradient descent online while the simulation runs.

What we didn't expect was the role of the learning itself. Gradient descent isn't just optimising each species' strategy. Instead, it acts to stabilize the whole system during simulation. Species that overextend get pushed back by the loss. Species that stagnate get nudged to grow. This means you can push parameters toward edge-of-chaos regimes: a zone characterised by emergent complexity.

Letting the neural networks learn acts to hold the complex system together while you explore and interact. The platform lets you steer all of this interactively. You can draw walls to create niches, erase parts of the system online, and tune 40+ system parameters to explore the most interesting configurations.

Everything runs client-side in your browser, no install needed.
Blog: pub.sakana.ai/digital-ecosystems
Code: github.com/SakanaAI/digital-ecosystems

### Replies/Thread (if visible)
None captured.

---

## @risi1979 -- GAME: Adversarial Coevolutionary Illumination with MAP-Elites

- **Author**: @risi1979 (Sebastian Risi)
- **Date**: 2025-05
- **URL**: https://x.com/risi1979/status/GAME-Coevolutionary
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

We're excited to announce GAME: Adversarial Coevolutionary Illumination with Generational Adversarial MAP-Elites.

GAME is a new coevolutionary QD algorithm that illuminates both sides of an adversarial problem by alternating the evolution of solutions on one side that maximize the adversarial fitness against fixed opponents from the other side.

We also applied it to the Hearthstopper deck building game, where GAME finds significantly better decks for 7 out of 10 comparisons and non-significantly better decks for the remaining three. GAME coevolves a diversity of decks that prevents overfitting to a single one. For the future, we're excited about applying GAME to more open-ended problems to understand the emergence of artificial open-endedness better!

Blog: game-approach.github.io
Paper: arxiv.org/pdf/2505.06617

### Replies/Thread (if visible)
None captured.

---

## @_rockt -- Co-Founding Recursive: AI That Safely Improves Itself Through Open-Ended Discovery

- **Author**: @_rockt (Tim Rocktaschel)
- **Date**: 2025-06
- **URL**: https://x.com/_rockt/status/RecursiveCoFounding
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Excited to co-found Recursive (@Recursive_SI) with an exceptional team in London and SF to create AI that experiments on how to safely improve itself, turning compute into knowledge that accumulates in an open-ended process of endless, automated scientific discoveries.

For the past few years, we've been thinking about the impact of open endedness on the pursuit of AGI. Through our exploration, we've met some of the most talented researchers and engineers automating scientific discovery. When all of our "top people" decided to start a company...

### Replies/Thread (if visible)
None captured.

---

## @kenneth0stanley -- Open-Endedness as the North Star for AI

- **Author**: @kenneth0stanley (Kenneth Stanley)
- **Date**: 2025-05
- **URL**: https://x.com/kenneth0stanley
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Congratulations to my friends at Recursive, a major new force in open-ended AI! And yet another signal that open-endedness is increasingly the north star for the future of the field!

### Replies/Thread (if visible)
None captured.

---

## @kenneth0stanley -- Continual Learning and Creativity: The Adjacent Possible

- **Author**: @kenneth0stanley (Kenneth Stanley)
- **Date**: 2025-04
- **URL**: https://x.com/kenneth0stanley
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

The more you learn the easier it should be to learn more. The key word is easier. What could be more natural? That's the real puzzle of continual learning. Merely avoiding brain damage from accumulating additional knowledge is barely scratching the surface.

Difficulty achieving continual learning is also a bad omen for creativity: what you can imagine is naturally a function of what you can learn. Both are mediated by the adjacent possible to the same internal representations! Contorted algorithms (or the absence of clean options) for what should be simple and straightforward continual learning are therefore a hint that the large models they serve are creatively barren. That explains why something that is close to "knowing everything" and often competitive with the abilities of experts can still produce fewer breakthroughs than you would expect from a human with similarly astounding knowledge and expertise.

### Replies/Thread (if visible)
None captured.

---

## @kenneth0stanley -- SVP of Open-Endedness at LILA: Why Objectives Are the Enemy

- **Author**: @kenneth0stanley (Kenneth Stanley) [Retweet of @DuncanCJ_ / LILA]
- **Date**: 2025-03
- **URL**: https://x.com/kenneth0stanley
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Kenneth Stanley retweeted LILA podcast]

What if a robot that doesn't know it's trying to walk learns faster than one explicitly trained to walk? Our SVP of Open-Endedness @kenneth0stanley joined @DuncanCJ_ to discuss why objectives are the enemy of greatness, building Scientific Superintelligence at LILA, and the future of creativity.

### Replies/Thread (if visible)
None captured.

---

## @togelius -- Complementary Intelligence: What AI History Teaches

- **Author**: @togelius (Julian Togelius)
- **Date**: 2025-04
- **URL**: https://x.com/togelius
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

What can we learn about how we humans work from the history of artificial intelligence? And how can this help us forge a positive research direction for AI? In this somewhat ambitious piece I sketch a kind of theory. An optimistic one. I call it Complementary Intelligence.

### Replies/Thread (if visible)
None captured.

---

## @kenneth0stanley -- AC/DC: Coevolving Populations of Small Expert LLMs

- **Author**: @kenneth0stanley (Kenneth Stanley) [Retweet of Sakana AI research]
- **Date**: 2025-04
- **URL**: https://x.com/kenneth0stanley
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Kenneth Stanley retweeted]

Why should one huge LLM know and solve everything? - No single human does, yet our civilization does endless innovation. Introducing AC/DC - it continually coevolves a population of small expert LLMs that collectively outperform GPT-4o. (ICLR 2026 w/ @SakanaAILabs)

### Replies/Thread (if visible)
None captured.

---


## @jeffclune -- AlphaEvolve vs DGM: Two Kinds of Chefs

- **Author**: @jeffclune (Jeff Clune) [Retweet of @hardmaru]
- **Date**: 2025-05
- **URL**: https://x.com/jeffclune
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Jeff Clune retweeted @hardmaru]

I like the comparison chart between AlphaEvolve and the Darwin Godel Machine, and the analogy of the two approaches with two different kinds of chefs.

### Replies/Thread (if visible)
None captured.

---

## @jeffclune -- Evolutionary Cognitive Architectures: Gold Mines for Meta-Cognition Ideas

- **Author**: @jeffclune (Jeff Clune) [Retweet of @IntuitMachine]
- **Date**: 2025-05
- **URL**: https://x.com/jeffclune
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Jeff Clune retweeted @IntuitMachine]

Sakana's @SakanaAILabs Darwin Godel Machine and DeepMind's @GoogleDeepMind AlphaEvolve are gold mines for ideas about meta-cognition and the future of evolutionary cognitive architectures.

### Replies/Thread (if visible)
None captured.

---

## @jeffclune -- AI Systems Stuck in a Cage: The Need for Autonomous Evolution

- **Author**: @jeffclune (Jeff Clune) [Retweet of @richardcsuwandi]
- **Date**: 2025-05
- **URL**: https://x.com/jeffclune
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Jeff Clune retweeted @richardcsuwandi]

Most AI systems today are stuck in a "cage" designed by humans.
They rely on fixed architectures crafted by engineers and lack the ability to evolve autonomously over time. This is the Achilles heel of modern AI -- like a car, no matter how well the engine is tuned and how...

### Replies/Thread (if visible)
None captured.

---

## @jeffclune -- Self-Improvement Research Has Been in the Air

- **Author**: @jeffclune (Jeff Clune) [Retweet of @nickcdryan]
- **Date**: 2025-05
- **URL**: https://x.com/jeffclune
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Jeff Clune retweeted @nickcdryan]

On the back of TextEvolve...
A lot of people on twitter seem surprised by @Deepmind's AlphaEvolve and @sakana's DGM, but this kind of work has been in the air for a while. These are just the most prominent (and very successful) examples in a very active research area.

### Replies/Thread (if visible)
None captured.

---

## @jeffclune -- DGM Seeds of Perpetual Motion: Escaping Mediocrity

- **Author**: @jeffclune (Jeff Clune) [Retweet of @ChenSun92]
- **Date**: 2025-05
- **URL**: https://x.com/jeffclune
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Jeff Clune retweeted @ChenSun92]

The most spectacular plot in the Godel Darwin paper is the one below, with the seeds of perpetual motion, escaping the clutches of mediocrity.
How did they do it? Among key ingredients was the extremely lucid insight by the authors that self improvement is, itself, a coding...

### Replies/Thread (if visible)
None captured.

---

## @kenneth0stanley -- Creativity Cannot Be Interpolated: Long-Form Article

- **Author**: @kenneth0stanley (Kenneth Stanley) [Retweet]
- **Date**: 2025-04
- **URL**: https://x.com/kenneth0stanley
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Kenneth Stanley retweeted]

Earlier this year we released long-form article on creativity. The basic idea in a single sentence is that creativity is (counterintuitively) about maximally respecting constraints, not "randomness" or "novelty", hence "creativity cannot be interpolated". We also think of "understanding" as a structure of compositional, path-dependent constraints (like walls in a maze) and that creativity is antithetical to intelligence and agency (both of which require some kind of directed optimisation with partial knowledge, when transformative creativity is always about traversing into the space of unknown unknowns (inspired from @kenneth0stanley book).

### Replies/Thread (if visible)
None captured.

---


## @_samvelyan -- Hyperagents: Self-Referential Agents with Metacognitive Self-Modification

- **Author**: @_samvelyan (Mikayel Samvelyan) [Retweet of internship work at Meta]
- **Date**: 2025-06
- **URL**: https://x.com/_samvelyan
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Mikayel Samvelyan retweeted]

Introducing Hyperagents: an AI system that not only improves at solving tasks, but also improves how it improves itself. The Darwin Godel Machine (DGM) demonstrated that open-ended self-improvement is possible by iteratively generating and evaluating improved agents, yet it relies on a key assumption: that improvements in task performance (e.g., coding ability) translate into improvements in the self-improvement process itself. This alignment holds in coding, where both evaluation and modification are expressed in the same domain, but breaks down more generally. As a result, prior systems remain constrained by fixed, handcrafted meta-level procedures that do not themselves evolve. We introduce Hyperagents -- self-referential agents that can modify both their task-solving behavior and the process that generates future improvements. This enables what we call metacognitive self-modification: learning not just to perform better, but to improve at improving. We instantiate this framework as DGM-Hyperagents (DGM-H), an extension of the DGM in which both task-solving behavior and the self-improvement procedure are editable and subject to evolution. Across diverse domains (coding, paper review, robotics reward design, and Olympiad-level math solution grading), hyperagents enable continuous performance improvements over time and outperform baselines without self-improvement or open-ended exploration, as well as prior self-improving systems (including DGM). DGM-H also improves the process by which new agents are generated (e.g. persistent memory, performance tracking), and these meta-level improvements transfer across domains and accumulate across runs.

### Replies/Thread (if visible)
Collaborators: Bingchen Zhao, Wannan Yang, Jakob Foerster, Jeff Clune, Minqi Jiang, Sam Devlin, and Tatiana Shavrina. Work done during internship at Meta (@AIatMeta).

---

## @_samvelyan -- AIRA2: Next-Gen AI Research Agents with Evolutionary Exploration

- **Author**: @_samvelyan (Mikayel Samvelyan) [Retweet]
- **Date**: 2025-05
- **URL**: https://x.com/_samvelyan
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Mikayel Samvelyan retweeted]

Excited to share AIRA2 -- our next-generation AI Research Agents for ML that address key bottlenecks to scaling. AIRA2 achieves SoTA on real-world ML tasks from MLE-bench-30 (81.5% vs 72.7%), exceeds human SoTA on 6/20 diverse AI research tasks from AIRS-Bench.

### Replies/Thread (if visible)
Key features: Async evolutionary exploration, parallel agents, closed generalization gap, scaling laws, aha moments.

---

## @_samvelyan -- DiscoBench: Meta-Meta-Learning for Algorithm Discovery

- **Author**: @_samvelyan (Mikayel Samvelyan) [Retweet of @AlexDGoldie]
- **Date**: 2025-05
- **URL**: https://x.com/_samvelyan
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Mikayel Samvelyan retweeted]

How can agents get better at algorithm discovery? Meta-meta-learning is one answer, aka improving the agents themselves at inventing generalizable algorithms. DiscoBench provides a way to procedurally generate algorithm discovery tasks at scale, which can be used for meta-meta-learning.

### Replies/Thread (if visible)
None captured.

---

## @_samvelyan -- AlphaEvolve-Optimized Persona Generators for Diverse Simulations

- **Author**: @_samvelyan (Mikayel Samvelyan) [Retweet]
- **Date**: 2025-05
- **URL**: https://x.com/_samvelyan
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Mikayel Samvelyan retweeted]

New paper from my internship at @GoogleDeepMind. We introduce Persona Generators: functions that generate diverse synthetic populations for arbitrary contexts. We use AlphaEvolve to optimize the generator code, hill-climbing on diversity metrics -- not just likelihood -- counteracting the mode-seeking behavior of LLM sampling for agent-based simulations.

### Replies/Thread (if visible)
None captured.

---

## @_samvelyan -- Intelligent AI Delegation for Multi-Agent Systems

- **Author**: @_samvelyan (Mikayel Samvelyan) [Retweet]
- **Date**: 2025-05
- **URL**: https://x.com/_samvelyan
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Mikayel Samvelyan retweeted]

Excited to share our work on envisioning Intelligent AI Delegation. Delegation in most existing AI systems is brittle, and relies on simplified hand-crafted control flows. As such, it fails to meet the requirements of what is needed to truly scale distributed reasoning and task completion in multi-agent systems and collectives.

### Replies/Thread (if visible)
None captured.

---


## @_samvelyan -- Roberta Raileanu Leading Open-Ended Learning at Google DeepMind

- **Author**: @_samvelyan (Mikayel Samvelyan) [Retweet of RAAIS 2026 announcement]
- **Date**: 2025-06
- **URL**: https://x.com/_samvelyan
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Mikayel Samvelyan retweeted]

We're excited to have @robertarail at @raais 2026! Roberta leads open-ended learning at @GoogleDeepMind - from MLGym and MaestroMotif to Toolformer and Llama 3's tool use, her work is shaping what it takes for AI agents to keep acquiring skills.

### Replies/Thread (if visible)
None captured.

---


## @richardcsuwandi -- AI Systems Stuck in a Cage: Autonomous Evolution Needed

- **Author**: @richardcsuwandi (Richard C. Suwandi)
- **Date**: 2025-05
- **URL**: https://x.com/richardcsuwandi
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Most AI systems today are stuck in a "cage" designed by humans.
They rely on fixed architectures crafted by engineers and lack the ability to evolve autonomously over time. This is the Achilles heel of modern AI -- like a car, no matter how well the engine is tuned and how...

### Replies/Thread (if visible)
None captured.

---

## @richardcsuwandi -- AlphaEvolve Inspired by MAP-Elites

- **Author**: @richardcsuwandi (Richard C. Suwandi) [Retweet of @GoogleDeepMind]
- **Date**: 2025-05
- **URL**: https://x.com/richardcsuwandi
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Richard C. Suwandi retweeted @GoogleDeepMind]

As a scientist doing fundamental research, we often hope that our research ends up impacting many different scientific disciplines and peoples' lives. Here's a fantastic example of that dream coming true. AlphaEvolve's paper mentions it is inspired by MAP-Elites, and look at all the amazing things that it does in so many different fields!

Algorithms are part of nearly every aspect of life, from the physics of the natural world to planning shipping routes. Our Gemini-powered coding agent AlphaEvolve has been accelerating progress over the last year - from quantum and biotechnology to logistics and @Google's AI infrastructure.

### Replies/Thread (if visible)
None captured.

---

## @richardcsuwandi -- Recursive: Pushing Safe Open-Endedness for True RSI

- **Author**: @richardcsuwandi (Richard C. Suwandi) [Retweet of @Recursive_SI]
- **Date**: 2025-05
- **URL**: https://x.com/richardcsuwandi
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Richard C. Suwandi retweeted]

Huge congrats to the @Recursive_SI team on this launch! Pushing safe open-endedness and automated discovery to enable true recursive self-improvement is arguably one of the most promising paths to superintelligence.

### Replies/Thread (if visible)
None captured.

---

## @richardcsuwandi -- Automating AI Research: Claude Code Beats Human NanoGPT Baseline

- **Author**: @richardcsuwandi (Richard C. Suwandi) [Retweet]
- **Date**: 2025-06
- **URL**: https://x.com/richardcsuwandi
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Richard C. Suwandi retweeted]

Automating AI research is the next major step in AI. We let Claude Code (Opus 4.7) and Codex (GPT 5.5) run autonomously on the nanoGPT speedrun optimizer track using our idle compute. ~10k runs, ~14k H200 hours. Opus now holds the record at 2930 steps vs the 2990 human baseline.

### Replies/Thread (if visible)
None captured.

---


## @richardcsuwandi -- NanoGPT-Bench: Evaluating Coding Agents on AI Research

- **Author**: @richardcsuwandi (Richard C. Suwandi) [Retweet]
- **Date**: 2025-05
- **URL**: https://x.com/richardcsuwandi
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Richard C. Suwandi retweeted]

Can coding agents do research? We release NanoGPT-Bench, an internal eval we've used to test agents on an AI R&D problem with months of human progress. Codex, Claude Code, Autoresearch recover only 9.3% of human progress, mostly tuning hyperparams & ignoring algorithmic research. NanoGPT-Bench is built on the NanoGPT Speedrun, a popular LLM pretraining competition to minimize the training time of a GPT-2 style model. Existing human submissions constitute nearly 2 years of work.

### Replies/Thread (if visible)
None captured.

---

## @richardcsuwandi -- SkyDiscover: Claude Code as Discovery Loop Scaffold

- **Author**: @richardcsuwandi (Richard C. Suwandi) [Retweet]
- **Date**: 2025-06
- **URL**: https://x.com/richardcsuwandi
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Richard C. Suwandi retweeted]

SkyDiscover update. Claude Code is now a native scaffold -- plug it straight into your discovery loop. 200+ tasks ship out-of-the-box: USACO, BigCodeBench, AlgoTune, LiveCodeBench, EvoEval & more -- all parallelized in isolated Docker containers.

### Replies/Thread (if visible)
None captured.

---

## @kenneth0stanley -- Natural Evolution's Open-Endedness: Competing Neural Cellular Automata

- **Author**: @kenneth0stanley (Kenneth Stanley) [Retweet]
- **Date**: 2025-04
- **URL**: https://x.com/kenneth0stanley
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Kenneth Stanley retweeted]

Natural evolution's open-endedness leads to beautiful, complex emergent structures and self-organizing behavior. Replicating this in silico is famously hard. Our paper points to a promising direction by evolving populations of competing neural cellular automata with lifelike behavior.

### Replies/Thread (if visible)
None captured.

---

## @kenneth0stanley -- Open-Ended Learning via Procedural Content Generation (Togelius PhD Defense)

- **Author**: @kenneth0stanley (Kenneth Stanley) [Retweet of @togelius]
- **Date**: 2025-05
- **URL**: https://x.com/kenneth0stanley
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Kenneth Stanley retweeted @togelius]

My PhD thesis defense. Talk title: "Open-ended Learning via Procedural Content Generation in Video Games: Environment Substrates, Morphogenesis, and Designer-Player Loops". Come watch me make it make sense!

### Replies/Thread (if visible)
None captured.

---

## @crazydonkey200 -- Building Self-Improving / Self-Evolving AI for Gemini

- **Author**: @crazydonkey200 (Chen Liang)
- **Date**: 2025
- **URL**: https://x.com/crazydonkey200
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Research Scientist @GoogleDeepMind, previously @Google Brain, building self-improving / self-evolving AI for Gemini.

### Replies/Thread (if visible)
None captured.

---


## @MingchenZhuge -- Founding Member of Recursive, PhD with Schmidhuber, ICLR RSI 2026

- **Author**: @MingchenZhuge (Mingchen Zhuge)
- **Date**: 2025
- **URL**: https://x.com/MingchenZhuge
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Founding member @recursive_si; PhD of @SchmidhuberAI; Ex @Meta @Microsoft; Build @MetaGPT_, ICLR RSI 2026, etc.

### Replies/Thread (if visible)
None captured.

---

## @richardcsuwandi -- Optimization Methods as Prime Target for AI Discovery

- **Author**: @richardcsuwandi (Richard C. Suwandi)
- **Date**: 2025-05
- **URL**: https://x.com/richardcsuwandi
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

I expect optimization methods to be among the first areas of math to greatly benefit from AI. There are thousands of papers with optimization methods and their convergence proofs that have a surprisingly standardized structure. Most ideas fall somewhere in the range of momentum, averaging, adaptive learning rates, schedulers, weight decay, combined with choices of norms, usually one of {l2, linf, spectral}. I think that a combination of these is sufficient to derive the next SOTA in optimizers. The hard part is getting something that works well in practice across different domains with universal hyperparameters. But the benchmarks are easy to set up, and with a constant feedback loop, agents are likely to discover a lot of new optimizers, one of which will turn out to work well.

### Replies/Thread (if visible)
None captured.

---

## @_samvelyan -- ARC-AGI-3 and NetHack LE: Unsaturated Agent Benchmarks

- **Author**: @_samvelyan (Mikayel Samvelyan) [Retweet]
- **Date**: 2025-06
- **URL**: https://x.com/_samvelyan
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Mikayel Samvelyan retweeted]

"The only unsaturated agentic intelligence benchmark in the world" Excuse me? @NetHack_LE is unsaturated since 2020.

Announcing ARC-AGI-3: The only unsaturated agentic intelligence benchmark in the world. Humans score 100%, AI <1%. This human-AI gap demonstrates we do not yet have AGI. Most benchmarks test what models already know, ARC-AGI-3 tests how they learn.

### Replies/Thread (if visible)
None captured.

---

## @_samvelyan -- World Models and Embodied AGI at Google DeepMind

- **Author**: @_samvelyan (Mikayel Samvelyan) [Retweet]
- **Date**: 2025-06
- **URL**: https://x.com/_samvelyan
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

[Mikayel Samvelyan retweeted]

My team at GDM are hiring :) we are looking for people interested in scaling world models, adding new capabilities and using them to solve embodied AGI.

### Replies/Thread (if visible)
None captured.

---

## @LouisKirschAI -- Driving the Automation of AI Research

- **Author**: @LouisKirschAI (Louis Kirsch)
- **Date**: 2025
- **URL**: https://x.com/LouisKirschAI
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Driving the automation of AI Research. Co-Founder @ Stealth Startup. Ex @GoogleDeepMind. PhD @SchmidhuberAI. @UCL, @HPI_DE alumnus.

### Replies/Thread (if visible)
None captured.

---


## @eddiechu888 -- Speciating Evolutionary Algorithms and Continual Learning

- **Author**: @eddiechu888 (Eddie Chu)
- **Date**: 2025
- **URL**: https://x.com/eddiechu888
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Polymath exploring Capital-Consumption Theory, AGI, minds, continual learning, and Speciating Evolutionary Algorithms.

### Replies/Thread (if visible)
None captured.

---

## @ao_qu18465 -- Building Self-Evolving AI and Multisensory Agents at MIT

- **Author**: @ao_qu18465 (Ao Qu)
- **Date**: 2025
- **URL**: https://x.com/ao_qu18465
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

PhD at @MIT @mitidss @medialab | Building self-evolving AI & multisensory agents.

### Replies/Thread (if visible)
None captured.

---

## @AIDDA_Institute -- AI-Driven Algorithm Discovery Conference 2026

- **Author**: @AIDDA_Institute (AIDDA Institute)
- **Date**: 2025
- **URL**: https://x.com/AIDDA_Institute
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Coordinating research and community around AI-driven algorithm discovery. AIDDA 2026 Conference - June 9 and 10, 2026.

### Replies/Thread (if visible)
None captured.

---

## @zhengyaojiang -- Automated Hill Climbing with LLMs at WecoAI

- **Author**: @zhengyaojiang (Zhengyao Jiang)
- **Date**: 2025
- **URL**: https://x.com/zhengyaojiang
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

Cofounder & CEO @WecoAI - automated hill climbing with LLMs. Prev: PhD in ML @UCL_DARK.

### Replies/Thread (if visible)
None captured.

---

## @richardcsuwandi -- As Jeff Clune Always Says: This Is the Worst It Will Ever Be

- **Author**: @richardcsuwandi (Richard C. Suwandi)
- **Date**: 2025-06
- **URL**: https://x.com/richardcsuwandi
- **Likes**: N/A | **Retweets**: N/A | **Replies**: N/A
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


### Tweet Text

As @jeffclune always says "this is the worst it will ever be"

### Replies/Thread (if visible)
None captured.

---

