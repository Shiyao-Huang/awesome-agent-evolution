# Paper Review: Automated Design of Agentic Systems (ADAS)

**Paper**: Automated Design of Agentic Systems
**Authors**: Shengran Hu, Cong Lu, Jeff Clune
**Venue**: ICLR 2025
**arXiv**: 2408.08435
**Reviewer**: Automated Reviewer
**Date**: 2025-05-21

---

## Summary

ADAS introduces Meta Agent Search, a meta-learning algorithm that automatically discovers novel agentic system designs by having a "meta agent" iteratively program new agent architectures in Python code. The key insight is to treat the design of agentic systems itself as a search problem: rather than hand-crafting agent architectures, a meta agent explores a Turing-complete search space of possible agent designs, guided by performance feedback on downstream tasks. The discovered agents are written as Python functions that operate on an archive of prior discoveries, enabling complex compositional behaviors. Experiments across six benchmarks (ARC, DROP, MGSM, MMLU, Chou-odds, GPQA) demonstrate that ADAS-discovered agents can outperform strong hand-designed baselines, and crucially, the discovered designs transfer across domains and even to different underlying LLMs -- suggesting the method captures general structural principles rather than exploiting model-specific quirks.

---

## Method Analysis

### Core Architecture

The ADAS pipeline consists of three components:

1. **Search Space (Code-based Agent Representations)**: Each agent is a Python function `run_agent(system_prompt, user_query, tools, memory, max_iterations)` that can call an underlying LLM, maintain state in a `memory` variable, and compose arbitrary control flow. This is Turing-complete, meaning the search space includes every possible agentic system expressible in Python. The meta agent can use functions from a growing "archive" of previously discovered agents as building blocks.

2. **Search Algorithm (Meta Agent Search)**: A frozen LLM (e.g., Claude 3.5 Sonnet) acts as the meta agent. In each iteration, it: (a) reads the current archive of discovered agents, (b) proposes a new agent by writing Python code, (c) the new agent is evaluated on a held-out task subset, and (d) added to the archive if it meets quality criteria. The meta agent receives performance feedback and prior designs as context for its next proposal.

3. **Evaluation Protocol**: Discovered agents are tested on held-out examples of the target domain. The paper uses a two-phase protocol: agents discovered during search are evaluated on a validation set, then the best agent is evaluated on the full test set. For transfer experiments, the discovered agent code is applied directly to new domains or new LLMs without modification.

### Key Design Decisions

- **Code as the representation medium**: This is the single most consequential design choice. Unlike previous NAS approaches that search over restricted combinatorial spaces, using code gives the meta agent access to loops, conditionals, variable binding, higher-order functions, and arbitrary data structures. It also means discovered agents are interpretable and debuggable -- a significant practical advantage over black-box neural architectures.

- **Archive-based compositional search**: By maintaining an archive of prior discoveries that can be called as subroutines, the search becomes inherently compositional. Later agents can build on the functionality of earlier ones rather than starting from scratch each iteration. This mirrors the progressive building seen in program synthesis but applied to agent design.

- **Frozen meta agent**: The meta agent itself is not fine-tuned. It uses in-context learning to propose new designs based on the archive and feedback. This is both a strength (no additional training cost, any sufficiently capable LLM can serve as meta agent) and a limitation (the search quality is bounded by the meta agent's code generation and reasoning capabilities).

- **Function-level granularity**: Each discovered agent is a single function, not a multi-file system. This constrains the complexity of individual discoveries but keeps the search space tractable. The archive mechanism partially compensates by allowing function composition.

---

## Contributions

### Novel Contributions

1. **Conceptual reframing**: ADAS frames agent design as a program search problem over a Turing-complete space, moving beyond the manual design paradigm. This is a clean formalization that connects agent design to the well-studied field of program synthesis and NAS.

2. **Demonstrated transferability**: The cross-domain and cross-model transfer results are the most impactful finding. When an agent discovered on ARC is applied to MMLU or when an agent designed for GPT-3.5 is used with Gemini, performance often remains strong. This suggests the method discovers structural invariants of effective agent design -- reusable "design patterns" rather than overfitted solutions.

3. **Interpretability of discoveries**: Because discovered agents are Python code, they can be inspected, understood, and manually improved. The paper includes qualitative analysis of what the meta agent discovers (e.g., agents that implement self-debate, multi-perspective reasoning, or iterative refinement). This provides actionable insights for human agent designers.

4. **Open-source release**: The complete codebase is available at github.com/ShengranHu/ADAS, enabling reproduction and extension.

### Relationship to Prior Work

- **Neural Architecture Search (NAS)**: ADAS directly parallels NAS but operates on agent architectures rather than neural network topologies. The key difference is the search space: NAS typically operates on constrained graph spaces (cells, blocks), while ADAS operates on arbitrary Python code. This gives ADAS far more expressive power but also a harder search problem.

- **LLM-based program synthesis**: Work like FunSearch (Romera-Paredes et al., 2024) also uses LLMs to search over code spaces. ADAS differs in its focus on agentic systems (functions that call LLMs as tools) rather than mathematical functions, and in its archive-based compositional search.

- **Prompt optimization**: Methods like APO (Pryzant et al.) or DSPy (Khattab et al.) optimize prompts or prompt programs. ADAS operates at a higher level of abstraction, searching over complete agent implementations including control flow and state management.

- **Hand-designed multi-agent systems**: Systems like AutoGen, CrewAI, or LangGraph require manual architecture design. ADAS automates this design process, and its discoveries can inform the design of such systems.

---

## Limitations

### Technical Limitations

1. **Computational cost**: Each ADAS run requires hundreds of LLM calls for both the meta agent and evaluation of discovered agents. The paper reports costs of approximately $300-500 per run (depending on domain and number of search iterations). While cheaper than training a model, this is non-trivial for research groups with limited API budgets, especially since multiple runs may be needed to find good agents for a given domain.

2. **Search scalability**: The meta agent's context window limits the size of the archive it can reason about. As the archive grows, the meta agent must either be given a subset (potentially missing useful prior discoveries) or operate with less attention per entry. The paper does not thoroughly analyze how search quality scales with archive size or number of iterations.

3. **Evaluation reliability**: Agent performance on the held-out evaluation set can be noisy, especially on difficult tasks where success rates are low. A few lucky or unlucky evaluations could determine whether an agent enters the archive, propagating noise into subsequent search. The paper uses relatively small evaluation sets (e.g., 50 ARC examples), which may not be sufficient to reliably rank agents with similar performance.

4. **Turing-completeness as a double-edged sword**: While the code search space is expressive, it is also vast. The meta agent must explore a combinatorially explosive space of possible programs. The paper shows this works with current LLMs, but does not provide theoretical or empirical bounds on how many iterations are needed to find good agents, or whether the search converges.

5. **Safety concerns**: Discovered agents execute arbitrary Python code. The paper does not discuss sandboxing or safety mechanisms in detail. If ADAS were applied to agents with real-world tool access (e.g., web browsing, file system operations), the discovered code could have unintended side effects.

### Community Criticism and Open Questions

- **Reproducibility of specific discovered agents**: While the search process is reproducible given the same LLM API, stochasticity in both the meta agent's proposals and the evaluation means different runs may discover quite different agents. The paper acknowledges this but could benefit from analyzing the diversity of discovered solutions across runs.

- **Diminishing returns with scale**: The paper demonstrates ADAS on relatively focused tasks (single-turn reasoning benchmarks). It remains unclear whether the approach scales to more complex, multi-turn, open-ended agent tasks where evaluation itself becomes expensive and ambiguous.

- **Dependence on meta agent quality**: The entire approach hinges on the meta agent being able to propose reasonable code. If the underlying LLM is not sufficiently capable at code generation and reasoning about agent architectures, the search degrades significantly. The paper does not explore the minimum capability threshold for the meta agent.

- **Comparison ceiling**: The hand-designed baselines (e.g., standard ReAct, Reflexion) may not represent the true state of the art in manually designed agents. More sophisticated baselines (e.g., agents with planning, memory retrieval, or tool-learning) might close the gap with ADAS-discovered agents.

---

## Reproducibility

**Rating: 4/5**

Strengths:
- Complete open-source release with code, configuration files, and documentation.
- Detailed description of the search algorithm and evaluation protocol.
- Specified LLM versions and API configurations used.
- Clear task descriptions and dataset references.

Weaknesses:
- Reliance on proprietary LLM APIs (Claude 3.5 Sonnet, GPT-4) means exact reproducibility depends on API stability. Model updates can change the meta agent's behavior.
- Stochastic elements in the search (LLM sampling, evaluation randomness) are controlled by seeds but API-level non-determinism may still cause variation.
- Cost information ($300-500/run) is provided but may become outdated.

---

## Impact Assessment

### Novelty: 4/5
The framing of agent design as program search is clean and timely. The Turing-complete search space is a meaningful advance over constrained alternatives. Minor deduction for the conceptual similarity to prior program synthesis work (FunSearch) and NAS.

### Technical Quality: 4/5
Solid experimental methodology with appropriate baselines and transfer experiments. The cross-domain and cross-model transfer results are compelling. Would benefit from more rigorous statistical testing and scalability analysis.

### Clarity: 4/5
Well-written paper with clear motivation, method description, and results. The qualitative analysis of discovered agents is a nice touch. The appendices with full discovered code are valuable.

### Significance: 4/5
High potential impact on the field. If agent design can be automated, it changes how the community approaches building agentic systems. The transferability results suggest discovered patterns could become standard building blocks. The main uncertainty is whether the approach scales to more complex domains.

### Overall: 4/5
A strong paper that introduces a practical and conceptually clean approach to automating agent design. The transferability results are the standout contribution, suggesting the method captures genuine design principles rather than surface-level optimizations. The main open question is scalability to more complex agentic settings.

---

## Key Takeaways

1. **Agent design can be automated**: ADAS provides concrete evidence that meta-learning over agent architectures is feasible with current LLMs. The discovered agents are competitive with or superior to hand-designed alternatives across multiple domains.

2. **Code is the right abstraction**: Using Python code as the search space representation provides Turing-completeness, interpretability, and composability simultaneously. This design choice likely generalizes to other meta-search problems in AI.

3. **Transferability is real and valuable**: The fact that agents discovered on one domain transfer to others, and agents designed for one LLM transfer to others, suggests there exist universal structural principles of effective agent design. This is an important finding for the field.

4. **Compositional search is powerful**: The archive mechanism, where discovered agents become building blocks for future discoveries, enables progressive complexity that mirrors how human engineers build systems. This is a simple but effective idea.

5. **Practical cost is manageable but not trivial**: At $300-500 per run, ADAS is accessible to most research groups but is not free. As LLM costs decrease, this approach becomes increasingly attractive as a standard tool in the agent design pipeline.
