# Deep Review: ReasoningBank -- Scaling Agent Self-Evolution with Reasoning Memory
- **Paper**: ReasoningBank: Scaling Agent Self-Evolving with Reasoning Memory
- **arXiv**: 2509.25140 (v2, 16 Mar 2026)
- **Authors**: Siru Ouyang, Jun Yan, I-Hung Hsu, Yanfei Chen, Ke Jiang, Zifeng Wang, Rujun Han, Long T. Le, Samira Daruki, Xiangru Tang, Vishy Tirumalashetty, George Lee, Mahsan Rofouei, Hangfei Lin, Jiawei Han, Chen-Yu Lee, Tomas Pfister
- **Affiliations**: Google Research, UIUC
- **Published**: September 2025 (v1); March 2026 (v2); Accepted to ICLR 2026
- **Review Date**: 2026-05-21

## Summary

ReasoningBank introduces a memory framework for LLM agents that distills generalizable *reasoning strategies* (not raw trajectories, not just successful routines) from both successful and failed experiences. At test time, agents retrieve relevant reasoning memories to guide their interaction, then integrate new learnings back -- enabling progressive capability improvement. Building on this memory mechanism, the paper further proposes **MaTTS (Memory-aware Test-Time Scaling)**, which allocates additional compute per task to generate abundant, diverse experiences. These diverse experiences provide rich contrastive signals for synthesizing higher-quality memory, which in turn guides more effective future scaling. This bidirectional synergy between memory and test-time scaling is positioned as a new scaling dimension for agent systems. Evaluated on WebArena (web browsing) and SWE-Bench (software engineering), ReasoningBank consistently outperforms memory mechanisms that store raw trajectories or only successful routines. MaTTS further amplifies gains. The paper was accepted to ICLR 2026.

## Method Analysis (Core Architecture + Key Design Decisions)

The framework has two major components: the ReasoningBank memory mechanism and the MaTTS scaling strategy.

**1. ReasoningBank Memory Mechanism.**

The core innovation is the type of content stored in memory. Prior work stores either raw trajectories (ExpeL, Voyager) or only successful task routines. ReasoningBank stores *reasoning strategies* -- generalized, transferable insights distilled from both successes and failures. The key design choices are:

- **Self-judged experience**: The agent determines which of its own experiences were successful vs. failed (using LLM-as-a-Judge for web browsing, or test-based verification for software engineering).
- **Contrastive distillation from both success and failure**: By analyzing why a trajectory succeeded or failed, the system extracts *reasoning patterns* rather than surface-level actions. A success reveals what worked; a failure reveals what to avoid. Both signal types are stored.
- **Retrieval at test time**: When facing a new task, the agent retrieves relevant reasoning memories (presumably via embedding similarity) to inform its approach before and during interaction.
- **Integration of new learnings**: After task completion, new experiences are distilled into reasoning strategies and merged back into the bank, closing the self-evolution loop.

**2. MaTTS (Memory-aware Test-Time Scaling).**

This is the scaling contribution. The insight is that memory quality depends on the diversity and quantity of experiences, and test-time compute can be allocated to generate more experiences per task:

- **Scaling up interaction experience**: By allocating more compute to each task, the agent generates multiple diverse trajectories (different strategies, different failure modes).
- **Contrastive signal richness**: More diverse experiences produce richer contrastive signals (comparing successes vs. failures across different approaches), which yield higher-quality distilled reasoning strategies.
- **Bidirectional synergy**: Better memory (from richer experiences) guides more effective scaling on future tasks (the agent avoids known pitfalls and leverages known strategies), which produces even better experiences, creating a positive feedback loop.
- This positions memory-driven experience accumulation as a *new scaling dimension* -- not scaling model parameters or training data, but scaling the agent's accumulated reasoning experience.

**Key Design Decisions:**
- The focus on reasoning strategies (rather than action sequences or code snippets) is deliberate: reasoning strategies transfer across tasks and domains, while specific actions may not.
- The use of both success and failure signals is critical. Many prior systems learn only from successes; ReasoningBank argues that failures provide equally valuable (and complementary) learning signal.
- The framework supports both web browsing (WebArena) and software engineering (SWE-Bench), demonstrating domain generality.
- The system uses Gemini, GPT, and Claude models via Vertex AI, indicating it is model-agnostic.

## Contributions (Novel + Relationship to Prior Work)

**Novel contributions:**
1. **Reasoning as memory content**: Storing abstracted reasoning strategies (rather than raw trajectories or action sequences) is a meaningful departure from prior memory mechanisms. This captures *why* an approach worked or failed, not just *what* happened.
2. **Failure as first-class learning signal**: The explicit use of failed experiences as contrastive learning signal (not just filtering them out) is a principled design choice. The contrast between success and failure on similar tasks is the richest source of learning signal.
3. **MaTTS and the memory-scaling synergy**: The bidirectional relationship between memory quality and test-time scaling is a novel conceptual contribution. It reframes test-time compute not just as "thinking longer" but as "learning more" -- generating training signal for the memory system.
4. **New scaling dimension**: Positioning accumulated reasoning experience as a scaling dimension (alongside parameters and data) is a compelling frame that could influence how the community thinks about agent capability growth.

**Relationship to prior work:**
- **Agent-Workflow-Memory**: ReasoningBank builds on this prior work's codebase and extends it. While AWM stores workflow-level patterns, ReasoningBank focuses on reasoning-level strategies.
- **Voyager**: Voyager stores successful code snippets as skills; ReasoningBank stores reasoning strategies from both success and failure, which are more transferable.
- **ExpeL**: ExpeL stores raw trajectories; ReasoningBank distills reasoning strategies. Both learn from experience, but ReasoningBank's distillation step produces more generalizable knowledge.
- **Reflexion**: Reflexion reflects on failure for immediate retry; ReasoningBank stores reasoning strategies persistently for future tasks across sessions.
- **EvolveR**: Both systems distill experience into reusable knowledge. EvolveR adds RL-based policy evolution (weight updates); ReasoningBank focuses on the memory/retrieval layer without weight changes. They are complementary.
- **Test-time compute scaling (e.g., Tree-of-Thought)**: MaTTS extends the test-time scaling paradigm by coupling it with memory accumulation, turning one-time compute investment into persistent capability gain.

## Limitations (Technical + Community Criticism)

**Technical limitations:**
1. **Reasoning strategy quality is hard to evaluate**: Unlike code or factual knowledge, "reasoning strategies" are subjective and difficult to evaluate objectively. The paper relies on downstream task performance as a proxy, but does not directly measure the quality or transferability of individual reasoning strategies.
2. **Distillation from failure requires accurate failure attribution**: To extract useful reasoning strategies from failures, the system must correctly identify *why* the failure occurred. LLM-based self-judgment may misattribute causes, leading to misleading or incorrect reasoning strategies stored in the bank.
3. **Memory retrieval relevance**: As the ReasoningBank grows, retrieving the most relevant strategies for a new task becomes a harder retrieval problem. The paper does not characterize retrieval performance at scale or study how retrieval quality affects downstream outcomes.
4. **MaTTS compute cost**: Allocating additional compute per task to generate diverse experiences is expensive. The paper does not provide a detailed cost-benefit analysis comparing MaTTS against simply running more tasks with standard compute.
5. **Model-agnostic but model-dependent**: While the framework works with multiple models (Gemini, GPT, Claude), the quality of reasoning strategies extracted likely depends heavily on the underlying model's reasoning capability. This is not analyzed.
6. **Limited to structured environments**: WebArena and SWE-Bench both provide clear success/failure signals (task completion criteria, test pass rates). Extension to domains without such signals (open-ended conversation, creative tasks) is unaddressed.
7. **The HTML version is unavailable**: The arXiv HTML page returns a 404 error (as of review date), which limits accessibility of the full paper content.

**Potential community concerns:**
- The claim of "emergent behaviors naturally arising" from memory-driven scaling is stated in the abstract but the evidence for genuine emergence (as opposed to incremental improvement) is not thoroughly demonstrated.
- The MaTTS scaling argument, while conceptually appealing, risks conflating "more diverse experience" with "better reasoning." Diversity does not guarantee quality -- noisy or misleading experiences could degrade the memory bank.
- The paper builds on existing codebases (Agent-Workflow-Memory, mini-swe-agent), which raises questions about how much of the performance improvement is attributable to the ReasoningBank mechanism itself vs. engineering improvements in the underlying agents.

## Reproducibility

**Strengths:**
- Code is publicly available at `https://github.com/google-research/reasoning-bank`.
- The repository includes implementations for both WebArena and SWE-Bench with detailed setup instructions.
- The project is backed by Google Research, suggesting engineering quality and maintenance.
- Uses standard, publicly available benchmarks (WebArena, SWE-Bench).
- Clear documentation of supported models (GPT, Gemini, Claude on Vertex AI).

**Weaknesses:**
- Requires substantial infrastructure: Docker setup for WebArena, Vertex AI configuration for Gemini/Claude, and the WebArena environment itself has complex setup requirements.
- The paper lacks detailed hyperparameter specifications (retrieval parameters, distillation prompts, scaling parameters) that would be needed for independent reimplementation without the code.
- MaTTS scaling experiments require significant compute allocation per task.

**Reproducibility rating**: Good. Open-source code with detailed setup instructions and public benchmarks. The infrastructure requirements (WebArena Docker, Vertex AI) create moderate barriers but are standard for this type of research.

## Impact Assessment (Relevance, Practical, Novelty, Rigor)

| Dimension | Score | Justification |
|-----------|-------|---------------|
| **Relevance to awesome-agent-evolution** | 5/5 | Directly addresses agent self-evolution through accumulated reasoning memory. The framework captures the full self-evolution loop (experience -> reasoning -> memory -> application -> new experience) and introduces a scaling dimension for self-evolution. |
| **Practical Impact** | 4/5 | Demonstrated on two major, practical domains (web browsing, software engineering). The framework is model-agnostic and deployable. The MaTTS insight (investing compute in experience generation) has practical implications for agent deployment strategies. |
| **Novelty** | 4/5 | Reasoning strategies as memory content, failure as contrastive signal, and MaTTS are all novel. The "memory as scaling dimension" framing is thought-provoking. Some individual ideas (learning from failure, test-time scaling) have precedents, but the synthesis is original. |
| **Rigor** | 4/5 | ICLR 2026 acceptance indicates strong peer review. Evaluated on two diverse domains (web + code). Would benefit from more detailed analysis of memory content quality, retrieval effectiveness, and scaling efficiency curves. |

## Key Takeaways for awesome-agent-evolution

1. **Reasoning > Actions as memory content**: ReasoningBank demonstrates that storing *reasoning strategies* (abstract, transferable insights about why approaches succeed or fail) is more effective than storing raw trajectories or action sequences. For self-evolution systems, the unit of knowledge accumulation should be at the reasoning level, not the behavioral level.

2. **Failure is as informative as success**: The explicit use of failed experiences as a first-class learning signal (not just filtering them out) produces richer, more contrastive learning. Self-evolution systems should treat failures as carefully as successes -- the contrast between them is where the deepest learning occurs.

3. **Memory-scaling synergy as a new paradigm**: MaTTS reveals a bidirectional relationship: more compute generates richer experiences, which build better memory, which makes future compute more effective. This suggests that self-evolution systems should be designed with a scaling dimension in mind -- not just "how much can the system learn" but "how much should we invest in learning per task."

4. **Self-evolution without weight updates works**: ReasoningBank achieves significant improvements entirely through the memory/retrieval layer, without modifying model weights. This confirms ACE's finding and suggests that for many practical applications, context-level self-evolution is sufficient and more deployable than weight-level evolution.

5. **The importance of self-judgment**: The system's ability to self-judge its own trajectories (determining success vs. failure) is a critical enabler. The quality of this self-judgment directly determines the quality of the memory bank. Investing in accurate self-evaluation mechanisms is essential for any self-evolution system.

6. **Domain generality through abstraction**: By storing reasoning strategies at an abstract level, ReasoningBank achieves cross-task transfer within domains. The awesome-agent-evolution project should consider whether cross-domain transfer of reasoning strategies is achievable -- can web browsing strategies inform software engineering, or vice versa?

## Cross-Validation Addendum — Evolver #51-#88 Continuation (2026-05-22)

**Paper claim checked:** ReasoningBank proposes retaining and reusing reasoning artifacts so agents improve over time.  
**Cross-source evidence:** This is consistent with Memory-R1, AriadneMem, A-Mem, and Memento-II, all of which treat memory management as a first-class evolution object. The counter-signal from Mom Test/community evidence is that long-context and memory-heavy agents often retrieve irrelevant history, hide stale assumptions, or increase cost without measurable reliability gains.  
**Validation judgement:** The approach should be accepted as relevant, but the survey should demand retrieval-quality metrics, ablations against no-memory and random-memory baselines, and contamination checks. Memory improves evolution only when it changes future decisions in a verifiable direction.  
**Survey linkage:** Use as a representative long-term reasoning-memory system and cross-link to evaluation risks around memory pollution, privacy, and cost.

