---
arXiv: 2303.11366
title: "Reflexion: Language Agents with Verbal Reinforcement Learning"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] Reflexion: Language Agents with Verbal Reinforcement Learning

## Core Method & Contribution

Reflexion introduces a paradigm where language agents learn from failure through verbal self-reflection stored in a dynamic memory. Instead of updating model weights, Reflexion appends textual "reflections" to the agent's context in subsequent trials, enabling trial-and-error learning without gradient updates. The framework evaluates on diverse tasks (HumanEval, AlfWorld, WebShop) showing significant improvements over base ReAct agents.

## Technical Innovation

The key innovation is replacing traditional RL reward signals with natural language self-critiques. The agent generates verbal feedback about its failures, stores it in a scratchpad, and uses it as additional context in future attempts. This avoids expensive weight updates while achieving similar learning effects.

## Limitations & Critical Assessment

Reflections are limited by the base model's ability to diagnose its own failures — if the model cannot identify the root cause, the reflection is useless. The approach also scales poorly with long reflection histories filling up context windows.

## Comparison with Related Work

Reflexion is a precursor to Symbolic Learning (2406.18532) and RAGEN (2504.20073), which formalize self-improvement more rigorously. Unlike Self-Refine which operates on single outputs, Reflexion learns across episodes.

## Implications for Agent Evolution

Reflexion demonstrated that agents can improve through experience alone, without retraining. This is foundational for self-evolving agents that accumulate knowledge over time.

---

---
arXiv: 2303.17651
title: "Self-Refine: Iterative Refinement with Self-Feedback"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] Self-Refine: Iterative Refinement with Self-Feedback

## Core Method & Contribution

Self-Refine shows that LLMs can iteratively improve their own outputs by generating feedback and then refining based on it. The process requires no external feedback, training data, or reinforcement learning — just prompt chaining with an output-feedback-refine loop.

## Technical Innovation

The insight that LLMs can serve as both generator and critic for their own work, without any external reward model or human annotation. The feedback is task-specific natural language that guides subsequent refinements.

## Limitations & Critical Assessment

Quality plateaus after 2-3 iterations. The approach is unreliable for tasks where the model lacks self-assessment capability — the model cannot fix what it cannot detect.

## Comparison with Related Work

Simpler than Reflexion (no cross-episode memory) but more general (no task-specific setup needed). Complements Reflexion — Self-Refine for within-task improvement, Reflexion for cross-task learning.

## Implications for Agent Evolution

Demonstrates that self-feedback loops are a viable lightweight mechanism for agent improvement, forming the basis for more complex systems like AgentEvolver's self-questioning mechanism.

---

---
arXiv: 2203.14465
title: "Large Language Models Can Self-Improve"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] Large Language Models Can Self-Improve

## Core Method & Contribution

Pioneering work demonstrating that LLMs can improve their own reasoning by generating self-play reasoning traces. The model generates multiple chain-of-thought solutions, filters correct ones via majority voting, then fine-tunes on the self-generated correct traces. No human annotation needed.

## Technical Innovation

The self-training loop: generate → filter → fine-tune. This creates a self-reinforcing cycle where the model's own correct outputs become training data for its next version.

## Limitations & Critical Assessment

Risk of distribution collapse — the model may overfit to its own reasoning patterns. Quality of self-training data is bounded by current model capability. Recent work (TT-SI 2510.07841) extends this to test-time.

## Comparison with Related Work

Foundation for SPIN (2401.01335) which replaces fine-tuning with self-play, and Agent0 (2511.16043) which applies this co-evolution concept to agent systems.

## Implications for Agent Evolution

Proves that models can bootstrap improvement from their own outputs — a prerequisite for autonomous self-evolving agents.

---

---
arXiv: 2305.11738
title: "CRITIC: Tool-Interactive Criticism for Self-Correction"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] CRITIC: Tool-Interactive Criticism for Self-Correction

## Core Method & Contribution

CRITIC introduces external tool verification into the self-correction loop. Instead of relying solely on the model's internal judgment, the agent uses external tools (search, code execution, fact-checking) to verify its outputs, then corrects based on tool feedback.

## Technical Innovation

Bridges the gap between pure self-reflection and external supervision by using tools as an objective verification layer. This addresses Reflexion's limitation of unreliable self-diagnosis.

## Limitations & Critical Assessment

Tool availability is a bottleneck. Not all domains have reliable verification tools. The correction quality depends on the tool's coverage and accuracy.

## Comparison with Related Work

Combines ideas from Reflexion (self-correction) with tool-augmented generation. More reliable than pure Self-Refine but requires tool infrastructure.

## Implications for Agent Evolution

Shows that agent self-evolution benefits from grounding in external feedback, not just internal reflection. This principle underpins harness engineering approaches.

---

---
arXiv: 2401.01335
title: "SPIN: Self-Play Fine-Tuning Converts Weak LLM to Strong"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] SPIN: Self-Play Fine-Tuning Converts Weak LLM to Strong

## Core Method & Contribution

SPIN frames LLM self-improvement as a two-player game: the "player" (current model) generates responses, while the "discriminator" (previous model iteration) distinguishes between human and model outputs. Through iterative self-play, the model progressively improves without new human data.

## Technical Innovation

Applying game-theoretic self-play to language model fine-tuning. Each training round creates a stronger player by beating the previous discriminator, converging toward human-level performance.

## Limitations & Critical Assessment

Convergence is not guaranteed to reach beyond the initial human demonstration quality. The approach may plateau when player and discriminator reach equilibrium.

## Comparison with Related Work

Conceptually related to DGM (2505.22954) which applies evolutionary self-play to coding agents, and Multi-Agent Evolve (2510.23595) which uses Proposer-Solver-Judge triads.

## Implications for Agent Evolution

Self-play is a powerful mechanism for agent evolution — agents can improve by competing against their own previous versions, a principle applicable beyond language models.

---

---
arXiv: 2308.10144
title: "EvoPrompt: Connecting LLMs with Evolutionary Algorithms"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] EvoPrompt: Connecting LLMs with Evolutionary Algorithms

## Core Method & Contribution

EvoPrompt combines evolutionary algorithms (genetic algorithms and differential evolution) with LLMs for automatic prompt optimization. The LLM acts as the evolutionary operator — performing crossover and mutation on prompt candidates in natural language.

## Technical Innovation

Replacing mathematical evolutionary operators with LLM-based natural language operations. This allows optimization in the full linguistic space rather than constrained token-level modifications.

## Limitations & Critical Assessment

Expensive in terms of LLM API calls. Optimization landscape is noisy due to LLM non-determinism. No theoretical guarantee of convergence.

## Comparison with Related Work

Foundation for SCOPE (2512.15374) which extends this to agent-level prompt evolution with dual-stream optimization. Also related to AgentEvolver's evolutionary mechanisms.

## Implications for Agent Evolution

Proves that evolutionary algorithms can optimize agent components (prompts) without gradient access, enabling black-box self-evolution.

---

---
arXiv: 2401.13996
title: "PromptAgent: Strategic Planning for Expert-Level Prompt Optimization"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] PromptAgent: Strategic Planning for Expert-Level Prompt Optimization

## Core Method & Contribution

PromptAgent applies Monte Carlo Tree Search (MCTS) to the prompt optimization space. It strategically explores prompt variations, using error feedback from the target model to guide search toward high-performing prompts.

## Technical Innovation

Combining MCTS with LLM-based prompt generation creates a structured search that balances exploration and exploitation in prompt space, unlike random or greedy approaches.

## Limitations & Critical Assessment

Computationally expensive — each MCTS rollout requires model inference. The approach is optimized for single-task performance, not generalization.

## Comparison with Related Work

More structured than EvoPrompt's evolutionary approach. Complements ADAS (2408.08435) which searches in code space rather than prompt space.

## Implications for Agent Evolution

Shows that systematic search over agent configurations can yield superior designs, supporting the ADAS vision of automated agent design.

---

---
arXiv: 2210.03629
title: "ReAct: Synergizing Reasoning and Acting in Language Models"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] ReAct: Synergizing Reasoning and Acting in Language Models

## Core Method & Contribution

ReAct introduces interleaved reasoning (chain-of-thought) and action (tool use) in LLM agents. Instead of reasoning-only or acting-only approaches, ReAct alternates between thinking steps and action steps, creating more grounded and interpretable agent behavior.

## Technical Innovation

The insight that reasoning and acting are complementary: reasoning helps plan actions, while action results ground reasoning in real observations. This simple alternation pattern became the foundation for nearly all modern agentic frameworks.

## Limitations & Critical Assessment

Susceptible to reasoning-action loops where the agent thinks without progressing. Context window limits constrain the number of reasoning-acting cycles.

## Comparison with Related Work

ReAct is the direct foundation for Reflexion (adds memory across episodes), Voyager (adds skill library), and most production agent frameworks. Nearly all self-evolution papers build on ReAct-style agent loops.

## Implications for Agent Evolution

The ReAct loop is the substrate upon which self-evolution mechanisms are built. Every self-improvement framework in this collection assumes some form of observe-think-act cycle.

---

---
arXiv: 2305.16291
title: "Voyager: An Open-Ended Embodied Agent with LLMs"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] Voyager: An Open-Ended Embodied Agent with LLMs

## Core Method & Contribution

Voyager is a lifelong learning agent in Minecraft that uses three components: automatic curriculum (proposes progressively harder tasks), skill library (stores and reuses reusable code skills), and iterative refinement (improves skills through execution feedback).

## Technical Innovation

The skill library is the key innovation — a growing collection of reusable, composable code functions that the agent writes, tests, and stores for future use. This creates compounding improvement as new skills build on existing ones.

## Limitations & Critical Assessment

Limited to Minecraft's well-defined API. Skill transfer to other domains is not demonstrated. The curriculum depends on environment-specific progress metrics.

## Comparison with Related Work

Voyager's skill library concept is extended by STELLA (biomedical domain), SkillWeaver (web domain), and Agent0 (zero-data co-evolution). The automatic curriculum relates to SEAgent's Curriculum Generator.

## Implications for Agent Evolution

Demonstrates that agents can build reusable knowledge over time through experience, a core requirement for self-evolution. The compounding skill library is a model for how agents accumulate capabilities.

---

---
arXiv: 2603.24639
title: "Experiential Reflective Learning for Self-Improving Agents"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] Experiential Reflective Learning for Self-Improving Agents

## Core Method & Contribution

ERL introduces a framework where agents reflect on their execution trajectories to extract transferable heuristics. Rather than storing raw experiences, the system distills failure patterns into actionable guidelines that improve future reasoning.

## Technical Innovation

The trajectory-to-heuristic distillation pipeline: execute → reflect → extract rule → validate → store. This compresses experience into compact, reusable knowledge that is more efficient than raw trajectory replay.

## Limitations & Critical Assessment

Heuristic quality depends on the model's ability to abstract from specific failures. Over-abstracted heuristics may lose task-specific nuance. The reflection step adds computational overhead.

## Comparison with Related Work

Combines Reflexion's reflective mechanism with Voyager's skill library concept. More systematic than Reflexion's raw reflection storage. Related to EvolveR's experience-driven lifecycle approach.

## Implications for Agent Evolution

Shows that the key to effective self-evolution is not just accumulating experience but distilling it into transferable knowledge. This principle — compression of experience into actionable rules — is fundamental to scalable agent evolution.
