# Paper Review: Building Self-Evolving Agents via Experience-Driven Lifelong Learning: A Framework and Benchmark

**Paper**: Building Self-Evolving Agents via Experience-Driven Lifelong Learning: A Framework and Benchmark
**Authors**: Yuxuan Cai, Yipeng Hao, Jie Zhou, Hang Yan, Zhikai Lei, Rui Zhen, Zhenhua Han, Yutao Yang, Junsong Li, Qianjun Pan, Tianyu Huai, Qin Chen, Xin Li, Kai Chen, Bo Zhang, Xipeng Qiu, Liang He
**Affiliations**: East China Normal University, Shanghai AI Laboratory, Fudan University
**arXiv**: 2508.19005
**Reviewer**: Automated Reviewer
**Date**: 2025-05-21

---

## Summary

This paper introduces Experience-driven Lifelong Learning (ELL), a principled framework for building self-evolving agents capable of continuous growth through real-world interaction. The framework is organized around four core principles: (1) Experience Exploration, where agents learn through self-motivated interaction with dynamic environments; (2) Long-term Memory, preserving and structuring historical knowledge including personal experiences, domain expertise, and commonsense reasoning; (3) Skill Learning, abstracting recurring patterns from experience into reusable, validated skills; and (4) Knowledge Internalization, converting explicit experiences into implicit intuitive capabilities as "second nature." Alongside the framework, the authors introduce StuLife, a benchmark dataset simulating a student's holistic college journey across three core phases and ten detailed sub-scenarios, designed to evaluate lifelong learning agents in a realistic, multi-domain setting where tasks are interdependent and skills must accumulate over time.

---

## Method Analysis

### Core Architecture

The ELL framework defines four layers of agent capability, each building on the previous:

1. **Experience Exploration**: The foundational layer where agents interact with dynamic environments through self-motivated exploration. Unlike traditional RL agents that follow fixed task distributions, ELL agents navigate interdependent tasks where solving one task may unlock or complicate others. The exploration is "self-motivated" in that the agent decides what to learn next based on its current state, knowledge gaps, and intrinsic curiosity signals. This generates rich experiential trajectories that form the raw material for all subsequent learning.

2. **Long-term Memory**: A persistent memory system that preserves and structures historical knowledge at multiple levels of abstraction. The memory system stores:
   - Personal experiences (specific episodes and interactions)
   - Domain expertise (generalized patterns and rules)
   - Commonsense reasoning (broadly applicable knowledge)
   The structuring is critical: raw experiences must be organized for efficient retrieval and application. The memory system must also handle forgetting and consolidation, preventing overload while preserving valuable knowledge.

3. **Skill Learning**: Agents abstract recurring patterns from accumulated experience into reusable skills. Each skill is a generalized capability that can be applied across multiple tasks, with active refinement and validation ensuring skills remain correct and useful. The skill learning process involves:
   - Pattern recognition across experiences
   - Abstraction into generalizable procedures
   - Validation through application to new tasks
   - Refinement based on outcomes

4. **Knowledge Internalization**: The highest layer, where explicit and discrete experiences are internalized into implicit, intuitive capabilities. This mirrors human learning where practiced skills become automatic -- "second nature." The internalization process is what transforms an agent that must deliberate about each action into one that can act intuitively, freeing cognitive resources for higher-level reasoning.

### StuLife Benchmark

StuLife simulates a student's complete college experience, from enrollment through academic and personal development. It features:
- Three core phases (e.g., freshman exploration, major study, career preparation)
- Ten detailed sub-scenarios with interdependent tasks
- Realistic task sequences where early learning affects later performance
- Multi-domain evaluation (academic, social, practical skills)

The benchmark is designed around three key paradigms for evaluating lifelong learning agents, testing not just task completion but the ability to accumulate and transfer knowledge across phases.

### Key Design Decisions

- **Layered architecture over monolithic learning**: The four-layer structure (exploration, memory, skills, internalization) provides a principled decomposition of the lifelong learning problem. Each layer has distinct mechanisms and evaluation criteria, enabling modular improvement.

- **"Second nature" internalization**: The knowledge internalization concept is borrowed from cognitive science and is novel in the agent learning literature. Most agent systems stop at skill acquisition; the explicit modeling of how skills become automatic is a distinctive contribution.

- **College simulation as benchmark domain**: The choice of a student's college journey as the benchmark domain is clever: it naturally features progressive difficulty, interdependent skills, and long time horizons. Students must learn foundational skills before advanced ones, and early choices constrain later options -- exactly the structure that makes lifelong learning challenging.

---

## Contributions

### Novel Contributions

1. **Principled four-layer framework**: ELL provides the most complete conceptual framework for agent lifelong learning to date, going beyond simple experience accumulation to model the full learning pipeline from exploration through internalization.

2. **Knowledge internalization as a formal concept**: The explicit formalization of how explicit knowledge becomes implicit capability ("second nature") is novel. This addresses a gap in the agent literature where most systems treat knowledge as always-explicit, missing the efficiency gains from automaticity.

3. **StuLife benchmark**: The benchmark fills an important gap. Existing agent benchmarks typically test isolated skills or short-horizon tasks. StuLife's long-horizon, multi-domain, interdependent task structure provides a more realistic test of lifelong learning capabilities.

4. **Interdependent task modeling**: The framework explicitly models task interdependencies, recognizing that in real-world learning, tasks are not independent draws from a fixed distribution but are connected through prerequisite relationships, shared skills, and cumulative knowledge requirements.

### Relationship to Prior Work

- **Voyager (Wang et al.)**: Voyager's skill library corresponds to ELL's Skill Learning layer, but ELL extends this with explicit memory management and knowledge internalization layers that Voyager lacks.

- **ExpeL (Zhao et al.)**: ExpeL's experience-driven learning maps to ELL's Experience Exploration and Long-term Memory layers. ELL adds the higher layers of skill learning and internalization.

- **Generative Agents (Park et al.)**: The memory stream architecture from Generative Agents relates to ELL's Long-term Memory, but ELL provides a more structured approach to memory organization with explicit layers.

- **Continual learning literature**: ELL bridges the gap between traditional continual learning (focused on avoiding catastrophic forgetting in neural networks) and agent self-evolution (which can modify non-parametric components like prompts and tools).

---

## Limitations

### Technical Limitations

1. **Framework generality vs. specificity trade-off**: The four-layer framework is conceptually clean but may be difficult to operationalize precisely. The boundary between Skill Learning and Knowledge Internalization, for example, is philosophically clear but technically fuzzy. Without precise operational definitions, implementations may vary significantly in what they consider a "skill" versus "internalized knowledge."

2. **StuLife evaluation scope**: While the college simulation is creative, it represents a single domain. Whether the ELL framework's principles transfer to other lifelong learning domains (professional work, scientific research, game playing) remains untested.

3. **Limited technical detail on implementation**: The framework paper describes principles and architecture but provides limited detail on how each layer is implemented in practice. Questions about specific memory architectures, skill representation formats, and internalization mechanisms remain open.

4. **Scalability of interdependent task evaluation**: Evaluating lifelong learning with interdependent tasks requires running complete multi-phase trajectories, which is computationally expensive and makes it difficult to isolate the contribution of individual framework components through ablation studies.

5. **No comparison with simpler alternatives**: The paper does not address whether the full four-layer architecture is necessary, or whether simpler approaches (e.g., experience accumulation with a flat memory) might achieve comparable results on the StuLife benchmark.

6. **Knowledge internalization lacks concrete mechanism**: The concept of internalization is appealing, but without a concrete computational mechanism (e.g., distillation, habit formation through repeated execution, weight updates), it remains aspirational rather than implementable.

---

## Reproducibility

**Rating: 3/5**

Strengths:
- Clear conceptual framework with well-defined layers.
- StuLife benchmark with concrete scenarios and evaluation structure.
- The four principles provide a clear implementation roadmap.

Weaknesses:
- Limited implementation details for each framework layer.
- No code repository referenced in available content.
- The specific structure of the StuLife benchmark (task definitions, evaluation metrics) needs more detail for replication.
- No comparison baselines specified.
- The internalization mechanism is underspecified.

---

## Impact Assessment

### Novelty: 4/5
The four-layer framework with explicit knowledge internalization is a genuine conceptual advance. The StuLife benchmark introduces a novel evaluation paradigm for lifelong learning agents. The integration of cognitive science concepts (automaticity, "second nature") into agent learning is fresh.

### Technical Quality: 3/5
The conceptual framework is sound, but the paper is stronger on principles than on concrete implementation and empirical validation. The limited technical detail and lack of experimental results in the available content make it difficult to assess the framework's practical effectiveness.

### Clarity: 4/5
Well-organized with clear layer-by-layer exposition. The college simulation metaphor is intuitive and the benchmark description is accessible. The four principles are well-defined at the conceptual level.

### Significance: 4/5
ELL addresses a fundamental challenge in agent AI: how to build systems that learn continuously over lifetimes, not just episodes. The framework provides conceptual scaffolding that the field needs, and the StuLife benchmark fills an evaluation gap.

### Overall: 3.75/5
A conceptually rich contribution that advances the theoretical foundations of self-evolving agents. The four-layer framework (exploration, memory, skills, internalization) provides a principled decomposition of lifelong learning. The StuLife benchmark is a valuable addition to the evaluation landscape. The main limitation is the gap between conceptual elegance and practical implementation detail.

---

## Key Takeaways for awesome-evolution

1. **Lifelong learning requires layered capability building**: Self-evolving agents must progress through distinct learning stages -- from raw exploration to skill abstraction to intuitive internalization. Systems that skip stages (e.g., trying to internalize without first building skills) will fail.

2. **"Second nature" internalization is the frontier**: Most current systems stop at skill acquisition. The explicit modeling of how skills become automatic (freeing cognitive resources for higher-level reasoning) is the next frontier in agent self-evolution.

3. **Interdependent tasks demand cumulative learning**: Real-world tasks are not independent. College students cannot skip prerequisites; agents cannot skip foundational skills. Benchmarks must model these dependencies to evaluate true lifelong learning.

4. **Memory structuring is as important as memory accumulation**: The framework emphasizes that raw experience accumulation is insufficient. Experiences must be organized into multiple levels of abstraction (personal, domain, commonsense) for effective retrieval and application.

5. **College simulation reveals lifelong learning challenges**: The StuLife benchmark demonstrates that educational/developmental trajectories are excellent testbeds for lifelong learning agents. The natural progression from exploration to specialization to application mirrors the challenges agents face in real-world deployment.
