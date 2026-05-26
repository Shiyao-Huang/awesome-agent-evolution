---
arXiv: 2505.22954
title: "Darwin Gödel Machine: Agentic Self-Evolution via Iterative Code Modification"
authors: "Jenny Zhang, Shengran Hu, Cong Lu, Jeff Clune, et al."
year: 2025
venue: "Preprint"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] Darwin Gödel Machine: Agentic Self-Evolution via Iterative Code Modification

## Core Method & Contribution

The Darwin Gödel Machine (DGM) introduces an iterative self-improvement framework in which an agent modifies its own source code and empirically validates each change against coding benchmarks. The system maintains an archive of candidate agent variants and performs open-ended exploration: each iteration samples a parent agent from the archive, proposes a code-level modification, evaluates the modified agent on a suite of coding tasks, and retains improvements in the archive. This evolutionary loop allows the agent to discover non-obvious improvements that a human designer might not anticipate.

The key result reported is a dramatic improvement on SWE-bench, rising from 20.0% to 50.0% solve rate through self-modification alone. This is significant because the gains are achieved without human intervention in the agent design process -- the agent rewrites its own prompting strategies, tool-use patterns, and reasoning procedures through code-level mutations. The archive mechanism ensures that promising trajectories are preserved and that exploration does not collapse into a single local optimum.

DGM's architecture treats the entire agent implementation as mutable code. Unlike approaches that tune hyperparameters or prompts in a constrained space, DGM operates on the full program, meaning structural changes to control flow, new function definitions, and novel tool integrations are all within the search space. The open-ended archive-based exploration borrows principles from quality-diversity algorithms, ensuring both high-performing and behaviorally diverse agents are retained.

## Technical Innovation

The primary technical novelty lies in combining self-referential code modification with empirical validation in an open-ended archive. Prior self-improving systems typically operated within narrow parameter spaces or relied on gradient-based optimization. DGM instead treats the agent's entire codebase as the object of evolution, using an LLM to propose meaningful structural changes rather than random mutations. This makes the search space Turing-complete in principle, though in practice the LLM biases proposals toward sensible modifications.

The archive-based exploration strategy is a meaningful departure from hill-climbing approaches to self-improvement. By maintaining a diverse population of agent variants and allowing the system to revisit and branch from earlier designs, DGM avoids the brittleness of greedy optimization. This is conceptually related to quality-diversity search in evolutionary computation, but applied to the novel domain of LLM agent code.

## Limitations & Critical Assessment

The reliance on benchmark validation creates an obvious alignment risk: agents optimized for coding benchmarks may develop brittle strategies that exploit benchmark-specific patterns rather than generalizable improvements. The 20.0% to 50.0% gain on SWE-bench is impressive, but without analysis of what code changes drove the improvement, it is difficult to assess whether the learned modifications constitute genuine capability gains or benchmark overfitting.

The computational cost of maintaining an archive and running full benchmark evaluations at each iteration is likely substantial, though the paper does not thoroughly address this. Additionally, the safety implications of allowing an agent to modify its own code are acknowledged but not deeply explored -- a self-modifying agent could potentially remove safety constraints or develop undesirable behaviors that are rewarded by the benchmark but problematic in deployment.

## Comparison with Related Work

DGM extends the Gödel Machine theoretical framework into a practical system, complementing Gödel Agent (2410.04444) which takes a different approach to self-reference via monkey patching. While ADAS (2408.08435) also searches over agent implementations in code, ADAS uses a separate meta-agent to design agents, whereas DGM allows the agent to modify itself directly -- a subtle but important distinction in self-referential architecture. Compared to Symbolic Learning (2406.18532), which treats agent optimization as a form of symbolic backpropagation, DGM is more exploratory and less constrained in its modification strategy.

## Implications for Agent Evolution

DGM represents one of the most concrete demonstrations that LLM-based agents can meaningfully improve their own capabilities through self-modification. The archive-based open-ended exploration paradigm suggests that agent evolution need not follow a single trajectory -- maintaining diversity in the agent population may be critical for sustained improvement. The results on SWE-bench provide a compelling proof of concept that self-evolving agents can achieve substantial performance gains, though the gap between benchmark optimization and general capability improvement remains an open question for the field.

---
arXiv: 2410.04444
title: "Gödel Agent: A Self-Eferential Framework for Agent Self-Evolution"
authors: "JianXiong Li, Yihan Wang, Boyu Li, et al."
year: 2025
venue: "ACL 2025"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] Gödel Agent: A Self-Referential Framework for Agent Self-Evolution

## Core Method & Contribution

Gödel Agent presents a self-referential agent framework directly inspired by the theoretical Gödel Machine. The central idea is that an LLM-based agent can dynamically modify its own runtime behavior through monkey patching -- injecting or replacing functions and logic at runtime without restarting the system. This creates a tight feedback loop where the agent observes its own performance, identifies deficiencies, and rewrites its own decision-making procedures on the fly.

The framework formalizes self-referential agent design by treating the agent's configuration, prompts, and tool integrations as mutable objects that the agent itself can inspect and modify. Unlike external hyperparameter tuning or prompt optimization, the agent possesses full introspection into its own architecture and can make targeted changes. The acceptance at ACL 2025 validates the linguistic and system-level novelty of this approach within the NLP community.

The contribution is both conceptual and practical: conceptually, it provides a concrete instantiation of the Gödel Machine paradigm for LLM agents; practically, it demonstrates that monkey patching at runtime enables rapid adaptation without costly retraining cycles. The agent can fix its own bugs, refine its reasoning strategies, and adapt to new task distributions in real time.

## Technical Innovation

The use of monkey patching as the mechanism for self-modification is the key technical innovation. This allows changes at the function level -- the agent can replace individual components of its processing pipeline (e.g., how it parses instructions, selects tools, or formats outputs) without redesigning the entire system. This granular mutability is more flexible than prompt-only tuning and more practical than full codebase rewrites.

The self-referential aspect -- where the agent reads and modifies its own specifications -- creates a reflective architecture that is rare in current agent systems. Most agents treat their configuration as fixed after deployment; Gödel Agent treats it as a living document. The framework also introduces mechanisms for validating self-modifications before committing them, preventing catastrophic self-sabotage.

## Limitations & Critical Assessment

Runtime monkey patching introduces significant engineering complexity and reliability risks. Debugging a self-modifying system is inherently difficult, and the paper would benefit from deeper analysis of failure modes -- what happens when the agent makes a modification that subtly corrupts its reasoning? Rollback mechanisms are mentioned but their robustness under adversarial self-modification scenarios is unclear.

The theoretical grounding in the Gödel Machine is inspiring but the connection is somewhat loose. The original Gödel Machine requires formal proofs of improvement before modifying itself, whereas Gödel Agent uses empirical validation, which is a fundamentally different (and weaker) guarantee. The paper could be more explicit about this distinction to avoid overstating the theoretical foundations.

## Comparison with Related Work

Gödel Agent and DGM (2505.22954) represent two approaches to realizing self-referential agent evolution: Gödel Agent through runtime monkey patching for fast adaptation, and DGM through archive-based code modification with benchmark validation. Gödel Agent is more suited to online adaptation scenarios where the agent must respond to changing conditions quickly, while DGM is designed for offline iterative improvement. Compared to ADAS (2408.08435), which uses a separate meta-agent for design search, Gödel Agent's self-modification approach is more aligned with the vision of truly autonomous self-improvement.

## Implications for Agent Evolution

Gödel Agent demonstrates that self-referential modification is feasible for LLM-based agents and can lead to meaningful performance improvements. The monkey patching paradigm suggests that agent evolution need not require expensive retraining or even system restarts -- agents can evolve continuously during deployment. This has profound implications for long-lived autonomous agents that must adapt to shifting task distributions and user requirements. However, the safety and stability challenges of runtime self-modification must be addressed before such systems can be deployed in production environments.

---
arXiv: 2504.20073
title: "RAGEN: Training Agents via Trajectory-Level Reinforcement Learning with StarPO"
authors: "Qianqian Zhang, Shuo Zhang, et al."
year: 2025
venue: "Preprint"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] RAGEN: Training Agents via Trajectory-Level Reinforcement Learning with StarPO

## Core Method & Contribution

RAGEN introduces the StarPO (State-Action-Reward Trajectory Policy Optimization) framework for training LLM-based agents using trajectory-level reinforcement learning. Rather than optimizing individual token-level decisions, StarPO considers entire agent trajectories -- sequences of actions, observations, and rewards -- as the unit of optimization. This is critical for agent training because the quality of an agent's behavior can only be assessed at the trajectory level: a single good action within a failed trajectory is not useful, and a single suboptimal action within an otherwise successful trajectory should not be overly penalized.

The paper identifies and characterizes the "Echo Trap" phenomenon, where agent training collapses into repetitive action patterns. In the Echo Trap, the agent learns to produce safe, repetitive actions that receive moderate rewards rather than exploring diverse strategies that might yield higher returns. This is a specific failure mode of RL for agents that is distinct from typical exploration-exploitation tradeoffs, as it arises from the structural properties of agent-environment interaction loops.

RAGEN provides a modular training system that separates trajectory generation, reward computation, and policy optimization into interchangeable components. This modularity allows researchers to experiment with different reward models, trajectory sampling strategies, and optimization algorithms within a unified framework.

## Technical Innovation

The StarPO formulation is the primary technical contribution. By lifting the optimization objective from individual actions to complete trajectories, StarPO captures the sequential dependencies and delayed reward structures that are inherent in agent tasks. This addresses a fundamental mismatch between standard RLHF (which optimizes per-response) and agent training (where multi-step reasoning and action sequences produce delayed outcomes).

The identification of the Echo Trap is a significant diagnostic contribution. While reward hacking and mode collapse are known phenomena in RL for language models, the Echo Trap is specific to agentic settings where the agent interacts with external environments. The paper's analysis of when and why this occurs -- particularly in settings with sparse rewards and long action sequences -- provides practical guidance for avoiding this failure mode in future agent training systems.

## Limitations & Critical Assessment

The trajectory-level optimization approach increases computational cost substantially compared to per-step methods, as each training example requires running a full agent episode. The paper's modular design helps manage this complexity, but scalability to very long trajectories (hundreds of steps) remains an open question.

The Echo Trap analysis, while valuable, raises questions about the generality of the proposed solutions. The paper demonstrates effectiveness on specific benchmarks, but the conditions under which the Echo Trap manifests versus other failure modes are not fully characterized. A more formal treatment of when trajectory-level optimization succeeds versus fails would strengthen the contribution.

## Comparison with Related Work

RAGEN occupies a distinct niche from the code-modification and self-referential approaches in this review collection. While DGM (2505.22954) and Gödel Agent (2410.04444) evolve agent behavior through code-level changes, RAGEN evolves agent behavior through gradient-based RL at the trajectory level. These approaches are complementary: RAGEN could potentially be used as the training backbone within a self-evolving agent framework, providing the policy optimization that a self-modifying agent needs to improve from experience.

## Implications for Agent Evolution

RAGEN addresses one of the foundational challenges for agent self-evolution: how to provide effective learning signals for multi-step agent behavior. The StarPO framework and Echo Trap analysis suggest that naive application of standard RL techniques to agent training will encounter specific failure modes that require dedicated solutions. For the broader agenda of agent self-evolution, RAGEN provides a training methodology that could be integrated with self-modification frameworks, enabling agents that not only modify their own code but also learn from trajectory-level feedback in a principled manner.

---
arXiv: 2408.08435
title: "ADAS: Automated Design of Agentic Systems"
authors: "Shengran Hu, Cong Lu, Jeff Clune"
year: 2025
venue: "ICLR 2025"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] ADAS: Automated Design of Agentic Systems

## Core Method & Contribution

ADAS introduces the Meta Agent Search paradigm, in which a meta-agent programmatically designs and evaluates new agent architectures by writing code. The meta-agent operates in a Turing-complete search space: it can compose arbitrary agent topologies, define custom control flows, specify tool integrations, and implement novel reasoning strategies -- all expressed as executable Python code. Each candidate agent is evaluated on target tasks, and the results feed back into the meta-agent's search process.

The key insight is that hand-designing agent architectures is a bottleneck. The space of possible agent designs is vast and poorly understood, and human designers are constrained by intuition and convention. By automating the design process with a meta-agent that can explore this space systematically, ADAS can discover agent architectures that no human would have designed. The acceptance at ICLR 2025 underscores the significance of this contribution to the ML systems community.

The framework demonstrates that automatically discovered agents can outperform carefully hand-crafted baselines on a range of tasks. The meta-agent learns to compose patterns -- multi-step reflection, dynamic tool selection, iterative refinement -- that emerge from the search process rather than from human engineering. This suggests that the space of effective agent architectures is larger than current design conventions would indicate.

## Technical Innovation

The Turing-complete search space is the defining technical innovation. Unlike neural architecture search (NAS) which operates on bounded graph topologies, ADAS allows the meta-agent to write arbitrary code defining the agent's behavior. This means the search space includes agents with conditional branching, recursive reasoning, dynamic prompt construction, custom memory management, and any other computable pattern. This is both a strength (expressiveness) and a challenge (search difficulty).

The meta-agent search procedure itself is an instance of LLM-driven program search, leveraging the coding capabilities of frontier models to propose, debug, and iterate on agent designs. The meta-agent can read evaluation results, identify failure modes in candidate agents, and propose targeted fixes -- effectively performing a form of automated scientific discovery in the domain of agent design.

## Limitations & Critical Assessment

The Turing-complete search space, while expressive, makes the search process expensive and potentially unbounded. The paper does not fully characterize the computational cost of Meta Agent Search relative to the performance gains achieved. There is also a risk that discovered architectures exploit task-specific shortcuts rather than embodying generalizable design principles, which limits the transferability of results.

The dependence on a capable meta-agent (itself a large LLM) raises questions about the accessibility of this approach. If designing good agents requires running an expensive meta-search, the practical utility may be limited to well-resourced research groups. Additionally, the interpretability of discovered agents is often low -- understanding why a particular automatically designed architecture works is an open challenge.

## Comparison with Related Work

ADAS differs from DGM (2505.22954) and Gödel Agent (2410.04444) in a fundamental way: ADAS uses a separate meta-agent to design agents (the designer and the designed are distinct), while DGM and Gödel Agent enable agents to modify themselves directly. This makes ADAS more akin to automated architecture search than to self-evolution in the strict sense. However, the distinction blurs if the meta-agent could be applied recursively to improve itself. Compared to InfiAgent (2509.22502), which reports 9.9% higher performance, ADAS established the baseline that subsequent systems have sought to improve upon.

## Implications for Agent Evolution

ADAS demonstrates that the design of agentic systems can itself be automated, which is a foundational capability for agent self-evolution. If agents can design other agents, and if this process can be applied recursively, then we have the basic ingredients for an evolutionary trajectory in agent design. The Meta Agent Search paradigm could be extended to self-referential settings where the meta-agent improves its own search strategy over time. ADAS's acceptance at a top venue also signals growing mainstream recognition that automated agent design is a viable and important research direction.

---
arXiv: 2406.18532
title: "Symbolic Learning for Self-Evolving Agents"
authors: "Xuetao Wei, Zhiwei Wang, et al."
year: 2024
venue: "NeurIPS 2024"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] Symbolic Learning for Self-Evolving Agents

## Core Method & Contribution

Symbolic Learning proposes a framework that treats LLM-based agents as symbolic networks, enabling optimization through natural-language simulacrums of backpropagation. In a standard neural network, backpropagation computes gradients with respect to parameters and updates them. Symbolic Learning creates an analogy: the "parameters" of an agent are its prompts, tool configurations, and reasoning strategies (all expressed as natural language), and the "gradient" is a textual analysis of what went wrong and how to fix it, generated by an LLM.

The framework defines a forward pass (agent execution on a task), a loss computation (evaluation of agent performance), and a backward pass (LLM-generated analysis of failures with proposed modifications to the agent's symbolic parameters). This cycle repeats, iteratively refining the agent's behavior. The NeurIPS 2024 acceptance validates the conceptual novelty and practical utility of this approach.

The contribution is both a conceptual framework for understanding agent optimization and a practical methodology for improving agent performance without gradient-based training. By operating at the level of natural language descriptions and symbolic configurations, Symbolic Learning enables optimization in spaces that are inaccessible to traditional gradient methods.

## Technical Innovation

The natural-language simulacrum of backpropagation is the central technical innovation. The idea of treating an agent's configuration as a set of learnable symbolic parameters and applying an LLM-based "gradient" to update them is creative and opens up a new optimization paradigm for agents. Unlike RL-based approaches that require differentiable reward signals, Symbolic Learning can incorporate rich, qualitative feedback from the LLM's analysis of agent failures.

The symbolic network abstraction is also notable: it provides a unifying formalism for describing agent architectures as computational graphs with learnable symbolic parameters at each node. This enables systematic application of the learning procedure across different agent topologies and creates a shared vocabulary for reasoning about agent optimization.

## Limitations & Critical Assessment

The analogy to backpropagation, while conceptually appealing, is imprecise in ways that matter. Real backpropagation computes exact gradients that guarantee monotonic improvement under appropriate learning rates; the textual "gradients" in Symbolic Learning are heuristic and provide no such guarantees. The quality of the learning signal is entirely dependent on the LLM's ability to diagnose failures and propose effective fixes, which varies across tasks and agent configurations.

The iterative optimization process can be slow, as each "backward pass" requires an LLM call to analyze the trajectory and propose modifications. For complex agents with many symbolic parameters, the search space is large and the learning dynamics may be unstable. The paper could benefit from a more rigorous analysis of convergence properties and conditions under which Symbolic Learning reliably improves agent performance.

## Comparison with Related Work

Symbolic Learning is conceptually closest to EvoMAC (2410.16946), which applies textual backpropagation to multi-agent collaboration networks. Symbolic Learning provides the foundational abstraction that EvoMAC extends to multi-agent settings. Compared to RAGEN (2504.20073), which uses trajectory-level RL for optimization, Symbolic Learning operates at a higher level of abstraction -- optimizing symbolic descriptions rather than policy parameters. Both approaches address the challenge of providing effective learning signals for agent improvement, but from fundamentally different angles.

## Implications for Agent Evolution

Symbolic Learning provides a compelling framework for agent self-evolution that does not require gradient-based training or even code modification. The idea that agents can be optimized by reflecting on their own failures and generating natural-language improvement suggestions is both practical and philosophically elegant. For the field of agent evolution, Symbolic Learning suggests that self-improvement need not be limited to systems with differentiable components -- any agent whose behavior can be described in language can, in principle, be optimized through symbolic learning. This dramatically expands the scope of systems that can undergo self-evolution.

---
arXiv: 2410.16946
title: "EvoMAC: Self-Evolving Multi-Agent Collaboration Networks via Textual Backpropagation"
authors: "Chen Qian, Wei Xia, et al."
year: 2024
venue: "Preprint"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] EvoMAC: Self-Evolving Multi-Agent Collaboration Networks

## Core Method & Contribution

EvoMAC tackles the problem of optimizing multi-agent collaboration (MAC) networks through a textual backpropagation mechanism. In a MAC system, multiple specialized agents work together, and the topology and communication patterns between them determine overall system performance. EvoMAC treats the collaboration network as a learnable structure: after observing the performance of a MAC network on a task, the system generates textual feedback describing what went wrong and uses this to modify the network structure, agent roles, and communication protocols.

The textual backpropagation mechanism is directly inspired by Symbolic Learning (2406.18532) but applied to the multi-agent setting. Instead of optimizing a single agent's parameters, EvoMAC optimizes the collaboration graph -- which agents exist, how they connect, what messages they exchange, and how their outputs are aggregated. This extends the symbolic learning paradigm from single-agent to multi-agent optimization.

The paper introduces rSDE-Bench, a benchmark for evaluating self-evolving multi-agent systems. This benchmark addresses a gap in the evaluation infrastructure for MAC research, providing standardized tasks and metrics for assessing whether and how multi-agent systems improve over time.

## Technical Innovation

The extension of textual backpropagation from single-agent symbolic learning to multi-agent collaboration networks is the primary technical innovation. This requires not only analyzing individual agent failures but also diagnosing coordination failures, communication bottlenecks, and role misallocations within the team. The textual feedback must address structural properties of the collaboration graph, which is a qualitatively different challenge from optimizing individual agent prompts.

rSDE-Bench is a practical contribution that fills a gap in the evaluation landscape. Without standardized benchmarks, comparing different approaches to multi-agent self-evolution is difficult. The benchmark provides a common ground for measuring progress in this subfield.

## Limitations & Critical Assessment

Scaling textual backpropagation to large multi-agent networks introduces combinatorial challenges. As the number of agents and connections grows, the space of possible network modifications explodes, and the LLM generating textual "gradients" may struggle to identify the root causes of failure in complex collaboration patterns. The paper's experiments appear to focus on relatively small networks, and scalability to larger systems remains an open question.

The rSDE-Bench benchmark, while valuable, may not capture the full complexity of real-world multi-agent scenarios. Tasks that require long-horizon planning, negotiation between agents with conflicting objectives, or adaptation to adversarial conditions are underrepresented. The benchmark's coverage should be expanded in future work to stress-test multi-agent self-evolution more thoroughly.

## Comparison with Related Work

EvoMAC builds directly on the Symbolic Learning (2406.18532) framework, extending it from single-agent to multi-agent settings. This makes it complementary to ADAS (2408.08435), which also designs agent systems but focuses on single-agent architectures. InfiAgent (2509.22502) also addresses multi-agent coordination through DAG-based structures but takes a different architectural approach. EvoMAC's textual backpropagation mechanism is shared with Symbolic Learning, while InfiAgent's focus on quality control and agent-as-a-tool composition represents a distinct design philosophy.

## Implications for Agent Evolution

EvoMAC demonstrates that self-evolution need not be limited to individual agents -- the collaboration structures between agents can also be optimized automatically. This is significant because many practical applications require multi-agent systems, and hand-designing effective collaboration patterns is extremely difficult. The textual backpropagation approach suggests that the principles of symbolic learning can scale to more complex system architectures, pointing toward a future where entire multi-agent ecosystems evolve their organizational structures in response to task demands.

---
arXiv: 2511.10395
title: "AgentEvolver: Self-Questioning, Self-Navigating, Self-Attributing for Agent Self-Evolution"
authors: "Alibaba/ModelScope Team"
year: 2024
venue: "Preprint"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] AgentEvolver: Self-Questioning, Self-Navigating, Self-Attributing for Agent Self-Evolution

## Core Method & Contribution

AgentEvolver introduces three complementary mechanisms for agent self-evolution: self-questioning, self-navigating, and self-attributing. Self-questioning enables the agent to identify gaps in its own knowledge or capability by generating questions about tasks it struggles with. Self-navigating allows the agent to explore solution spaces autonomously, charting its own learning trajectory rather than following a fixed curriculum. Self-attributing provides the agent with the ability to trace its successes and failures back to specific decisions or knowledge components, enabling targeted self-improvement.

The three mechanisms work in concert: self-questioning identifies what to learn, self-navigating determines how to explore the learning space, and self-attributing closes the feedback loop by connecting outcomes to their causes. This creates a self-contained improvement cycle that does not require external teachers or manually designed curricula. The system is developed by the Alibaba/ModelScope team, indicating industrial interest in practical agent self-evolution.

The framework is notable for its emphasis on metacognitive capabilities. Rather than treating self-evolution as an optimization problem (as in RL-based or code-modification approaches), AgentEvolver treats it as a reasoning problem: the agent must think about its own thinking, identify weaknesses, and plan its own improvement.

## Technical Innovation

The three-mechanism decomposition is the primary conceptual contribution. While individual elements -- self-reflection, autonomous exploration, and attribution -- have appeared in prior work, AgentEvolver's explicit formalization and integration of all three into a unified self-evolution loop is novel. The self-attributing mechanism is particularly interesting because it addresses a key challenge in agent improvement: without knowing which component of the agent's pipeline caused a failure, targeted improvement is impossible.

The metacognitive framing distinguishes AgentEvolver from optimization-centric approaches. By treating self-improvement as a form of self-directed reasoning rather than parameter updates or code mutations, AgentEvolver opens a design space that is potentially more interpretable and controllable than gradient-based or evolutionary methods.

## Limitations & Critical Assessment

The three mechanisms, while conceptually clean, are difficult to evaluate in isolation. The paper would benefit from ablation studies that separately assess the contribution of self-questioning, self-navigating, and self-attributing to overall improvement. Without such analysis, it is unclear whether all three mechanisms are necessary or whether simpler combinations could achieve similar results.

The metacognitive approach relies heavily on the LLM's ability to accurately assess its own capabilities, which is known to be unreliable. LLMs tend to be overconfident in their self-assessments, and this bias could propagate through the self-questioning and self-attribution mechanisms, leading to misdirected improvement efforts. The paper should address how the system mitigates this self-assessment bias.

## Comparison with Related Work

AgentEvolver's metacognitive approach contrasts with the code-modification approaches of DGM (2505.22954) and Gödel Agent (2410.04444), and with the optimization approaches of RAGEN (2504.20073) and Symbolic Learning (2406.18532). While those systems modify agent implementations or parameters, AgentEvolver modifies the agent's understanding of its own capabilities and learning trajectory. This is complementary: a fully self-evolving agent might use metacognitive mechanisms to decide what to improve and code-modification mechanisms to implement the improvements.

## Implications for Agent Evolution

AgentEvolver highlights the importance of metacognition in agent self-evolution. The ability to question one's own capabilities, navigate learning trajectories, and attribute outcomes to specific decisions are prerequisites for sustained, directed self-improvement. Without these metacognitive capabilities, self-evolving agents may improve haphazardly, failing to address their most critical weaknesses. AgentEvolver suggests that the most effective self-evolution systems will combine metacognitive reasoning with concrete modification mechanisms, creating agents that know what to improve and have the tools to improve it.

---
arXiv: 2509.22502
title: "InfiAgent: DAG-Based Pyramid Agent Framework with Dual-Audit Quality Control"
authors: "InfiAgent Team"
year: 2025
venue: "Preprint"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] InfiAgent: DAG-Based Pyramid Agent Framework

## Core Method & Contribution

InfiAgent introduces a directed acyclic graph (DAG)-based pyramid agent framework for designing and evolving agentic systems. The core architecture represents agent workflows as DAGs, where nodes are computational steps (agent actions, tool calls, reasoning modules) and edges represent data flow dependencies. The pyramid structure organizes agents at multiple levels of abstraction, from low-level task execution to high-level orchestration and quality control.

A distinctive feature is the "agent-as-a-tool" design pattern, where agents can invoke other agents as tools within their workflows. This compositional approach enables the construction of complex multi-agent systems from simpler, reusable components. The dual-audit quality control mechanism introduces two independent review stages that evaluate agent outputs before they are committed, reducing the risk of error propagation through the DAG.

The paper reports performance 9.9% higher than ADAS (2408.08435), which is significant given that ADAS established strong baselines at ICLR 2025. This improvement suggests that structured architectural constraints (the DAG and pyramid structure) can enhance the effectiveness of automated agent design compared to less constrained search spaces.

## Technical Innovation

The DAG-based representation of agent workflows is technically sound and provides several advantages: explicit dependency tracking, parallelizable execution of independent branches, and clear data flow semantics. The pyramid structure adds hierarchical organization that mirrors how complex systems are typically decomposed in software engineering. This structured approach to agent architecture is a meaningful departure from the more free-form code generation in ADAS.

The agent-as-a-tool pattern is a practical innovation that enables flexible composition. By treating agents as first-class composable units, InfiAgent supports recursive and nested architectures where an agent at one level can delegate to sub-agents at lower levels. The dual-audit quality control mechanism addresses a real concern in multi-agent systems: without validation at intermediate stages, errors compound through the pipeline.

## Limitations & Critical Assessment

While the 9.9% improvement over ADAS is noteworthy, the comparison may not be entirely fair if InfiAgent uses more computational resources, stronger base models, or different evaluation protocols. The paper should provide detailed resource-matched comparisons to isolate the contribution of the architectural framework from improvements in underlying model capabilities.

The DAG constraint, while providing structure, may also limit the expressiveness of the search space. Some effective agent architectures might require cyclic patterns (e.g., iterative refinement loops, recursive self-correction) that are not naturally expressible as DAGs. The pyramid hierarchy also introduces a rigidity that may not suit all task types, particularly those requiring dynamic, flat collaboration patterns.

## Comparison with Related Work

InfiAgent directly improves upon ADAS (2408.08435), suggesting that structured architectural constraints can outperform unconstrained search. Compared to EvoMAC (2410.16946), which also optimizes multi-agent collaboration, InfiAgent takes a more hierarchical approach (pyramid structure) versus EvoMAC's flatter textual backpropagation over collaboration graphs. The dual-audit mechanism parallels the quality control concerns addressed by SEAgent's (2508.04700) curriculum-based validation, though the mechanisms differ substantially.

## Implications for Agent Evolution

InfiAgent demonstrates that architectural structure matters for agent self-evolution. The DAG and pyramid constraints guide the search process toward more effective agent designs, suggesting that completely unconstrained self-modification (as in DGM or Gödel Agent) may not always be optimal. For the field, this implies that future self-evolving agent systems should incorporate architectural inductive biases that constrain the search space while preserving sufficient expressiveness. The agent-as-a-tool pattern also suggests a path toward composable, modular self-evolution where individual components can be improved independently.

---
arXiv: 2508.04700
title: "SEAgent: Self-Evolving Computer Use Agents via World State Modeling and Curriculum Generation"
authors: "SEAgent Team"
year: 2025
venue: "Preprint"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] SEAgent: Self-Evolving Computer Use Agents

## Core Method & Contribution

SEAgent addresses self-evolution in the domain of computer use agents -- systems that interact with graphical user interfaces to accomplish tasks. The framework introduces two core components: a World State Model (WSM) that captures the agent's understanding of the computer environment's current state and dynamics, and a Curriculum Generator that produces progressively challenging training scenarios to drive skill development.

The reported improvement from 11.3% to 34.5% on OS-World is substantial, demonstrating that computer use agents can significantly improve through self-evolution. OS-World is a particularly challenging benchmark that requires understanding diverse GUI elements, navigating complex application interfaces, and chaining multi-step operations -- skills that are difficult to specify manually and benefit greatly from automated learning.

The curriculum-based approach is inspired by human learning: rather than attempting all tasks immediately, the agent builds competence gradually, mastering simpler interactions before progressing to more complex ones. The World State Model provides the agent with a structured representation of the environment that supports planning and reflection, while the Curriculum Generator ensures that training tasks are appropriately calibrated to the agent's current skill level.

## Technical Innovation

The combination of World State Modeling with curriculum generation for GUI agents is novel. The WSM provides a symbolic or semi-symbolic representation of the computer environment that the agent can reason over, which is particularly important for GUI interaction where raw pixel input is high-dimensional and difficult to learn from directly. The Curriculum Generator automates the design of training progressions, which is critical for efficient self-evolution -- without curriculum structuring, the agent may waste effort on tasks far beyond its current capability.

The application of self-evolution to computer use agents is itself a significant contribution. Most prior work on agent self-evolution focuses on text-based tasks (coding, reasoning, QA). Extending to GUI interaction requires handling a qualitatively different type of environment with different state representations, action spaces, and evaluation criteria.

## Limitations & Critical Assessment

The 11.3% to 34.5% improvement, while impressive in relative terms, leaves the agent at a 34.5% success rate on OS-World, indicating that the majority of tasks remain unsolved. This suggests fundamental limitations in either the agent's perceptual capabilities (understanding GUI elements), its planning abilities, or the scope of the self-evolution process. The paper should analyze which types of tasks remain difficult and why.

The World State Model's fidelity to the actual computer environment is a potential bottleneck. If the WSM fails to capture critical aspects of the GUI state (e.g., hidden dialogs, scrolling content, dynamic loading), the agent's planning will be based on incomplete information. The paper should characterize the accuracy and coverage of the WSM and its failure modes.

## Comparison with Related Work

SEAgent differs from most papers in this collection by targeting the computer use domain rather than text-based tasks. Its curriculum-based approach parallels Agent0's (2511.16043) curriculum co-evolution mechanism, though applied to a different domain. The World State Model concept is related to the environment modeling components in RAGEN (2504.20073), though SEAgent's WSM is specifically designed for GUI environments rather than general agent-environment interaction.

## Implications for Agent Evolution

SEAgent demonstrates that self-evolution can produce dramatic improvements in domains where manual engineering is particularly difficult. GUI interaction is a domain where the state space is enormous, the action space is complex, and human intuition about effective strategies is limited. The curriculum-based self-evolution approach suggests a general principle: self-evolving agents benefit from structured learning progressions that match task difficulty to current capability. This principle likely extends beyond computer use to other complex interaction domains such as web navigation, game playing, and robotic manipulation.

---
arXiv: 2511.16043
title: "Agent0: Zero-Data Self-Evolving Agents via Curriculum Co-Evolution"
authors: "Agent0 Team"
year: 2024
venue: "Preprint"
content_timestamp: "2026-05-21"
collected_at: "2026-05-21"
time_slice: "2026-05"
---

# [Review] Agent0: Zero-Data Self-Evolving Agents

## Core Method & Contribution

Agent0 proposes a zero-data approach to agent self-evolution through the co-evolution of a Curriculum Agent and an Executor Agent. The Curriculum Agent is responsible for generating training tasks and learning scenarios, while the Executor Agent attempts to solve them. As the Executor improves, the Curriculum Agent adapts by generating harder tasks, creating a co-evolutionary arms race that drives continuous improvement without requiring external training data.

The reported 35% improvement on mathematical reasoning tasks demonstrates that zero-data self-evolution is feasible and effective. This is significant because it removes one of the primary bottlenecks in agent training: the need for curated, task-specific training data. By generating its own training curriculum, Agent0 enables self-evolution in domains where labeled data is scarce or expensive.

The co-evolutionary dynamic between Curriculum and Executor is inspired by adversarial training and competitive co-evolution in evolutionary computation. The Curriculum Agent learns to probe the Executor's weaknesses, while the Executor learns to overcome increasingly challenging problems. This creates a self-sustaining improvement loop that does not plateau as long as the Curriculum Agent can continue generating novel challenges.

## Technical Innovation

The zero-data framing is the most distinctive contribution. While other systems in this review collection use benchmarks or curated datasets for evaluation and training, Agent0 eliminates this dependency entirely. The Curriculum Agent generates tasks from scratch, using only its understanding of the domain and the Executor's current capabilities. This is conceptually important because it demonstrates that self-evolution need not be tethered to static evaluation sets.

The co-evolutionary architecture, where two specialized agents drive each other's improvement, is a practical instantiation of the generate-and-test paradigm with adaptive difficulty. The Curriculum Agent must balance exploitation (generating tasks at the edge of the Executor's ability) with exploration (generating novel task types that expand the Executor's skill set). This balancing act is a non-trivial optimization problem that the paper addresses through the Curriculum Agent's own learning process.

## Limitations & Critical Assessment

The 35% improvement on math tasks is encouraging but raises questions about the ceiling of this approach. Mathematical reasoning has clear right/wrong answers that make curriculum generation and evaluation straightforward; domains with subjective or ambiguous success criteria may be more challenging for the zero-data paradigm. The paper should discuss the generalizability of the co-evolutionary approach beyond mathematical reasoning.

The quality and diversity of the Curriculum Agent's generated tasks is critical. If the Curriculum Agent converges to generating a narrow family of tasks, the Executor's improvement will plateau despite the co-evolutionary framework. The paper should analyze the diversity of generated curricula and demonstrate that improvement is not driven by a narrow set of task types. Additionally, the computational cost of maintaining two co-evolving agents should be characterized.

## Comparison with Related Work

Agent0's co-evolutionary approach is conceptually related to SEAgent's (2508.04700) Curriculum Generator, but Agent0 eliminates the need for any external task data, whereas SEAgent's curriculum is grounded in the OS-World environment. The zero-data aspect also distinguishes Agent0 from DGM (2505.22954) and ADAS (2408.08435), which rely on benchmark evaluations. Compared to AgentEvolver's (2511.10395) self-navigating mechanism, Agent0's Curriculum Agent provides a more structured and adversarial approach to self-directed learning.

## Implications for Agent Evolution

Agent0 demonstrates that self-evolution can proceed without external data, which is a crucial capability for agents deployed in novel environments where no training data exists. The co-evolutionary paradigm suggests that the most effective self-evolving systems may involve multiple interacting components that drive each other's improvement, rather than a single agent optimizing itself in isolation. For the field, Agent0 establishes that zero-data self-evolution is achievable, opening the door to agents that can bootstrap their own capabilities from scratch in any domain where task success can be automatically evaluated.
