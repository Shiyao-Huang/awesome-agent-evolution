# Deep Review: Evolving from Tool User to Creator via Training-Free Experience Reuse in Multimodal Reasoning (UCT)

- **Paper**: Evolving from Tool User to Creator via Training-Free Experience Reuse in Multimodal Reasoning
- **arXiv ID**: 2602.01983
- **URL**: https://arxiv.org/abs/2602.01983
- **PDF**: https://arxiv.org/pdf/2602.01983
- **Authors**: Xintian Shen, Jiawei Chen, Lihao Zheng, Hao Ma, Tao Wei, Kun Zhan
- **Published**: 2026-02-02
- **Review Date**: 2026-05-21
- **content_timestamp**: 2026-02-02
- **collected_at**: 2026-05-21T00:00:00+08:00
- **time_slice**: 2026-02
- **Evolver category**: Training-free self-evolution / tool creation from experience
- **Evidence status**: local-summary

---

## 1. Executive Summary

UCT (User-to-Creator Transition) proposes a training-free framework that transforms LLM agents from passive tool users into autonomous tool creators. The key insight is that reasoning traces produced during problem-solving encapsulate implicit problem-solving capabilities that can be harvested, distilled, and consolidated into reusable tools. During inference, the agent identifies when existing tools are insufficient, creates new tools from its own reasoning experience, and maintains a tool library through a memory consolidation mechanism. The framework achieves +20.86% and +23.04% gains on mathematical and scientific reasoning benchmarks respectively, validating the self-evolving capability without any additional model training.

This work occupies a distinctive niche in the self-evolution landscape: rather than evolving model weights, prompts, or agent architectures, it evolves the tool ecosystem itself. The agent's capability grows through the accumulation and refinement of experiential memory embodied as reusable tools.

## 2. Method Analysis

**Three-stage pipeline.** UCT operates through: (1) experience harvesting from reasoning traces, (2) tool distillation that compresses successful reasoning patterns into reusable assets, and (3) memory consolidation that maintains the tool library for high reusability.

**Training-free evolution.** The entire pipeline operates at inference time without modifying model weights. Evolution occurs through the growth and refinement of the tool library. Each new problem may trigger tool creation, and the consolidation mechanism prunes and merges tools to prevent bloat. This is a significant design choice: the agent improves without gradient updates, making it applicable to any base model.

**From user to creator.** The conceptual leap is that fixed tool sets limit agents in open-ended scenarios. By enabling the agent to create tools from its own successful reasoning, UCT closes a feedback loop where tool creation and problem-solving co-evolve. Better tools improve reasoning; successful reasoning generates better tools.

**Memory consolidation.** The tool library requires active management to prevent redundancy and maintain quality. The consolidation mechanism ensures that retained experiential memory has high reusability for subsequent tasks. This addresses a common failure mode in self-evolving systems: unbounded accumulation of low-quality artifacts.

**Adaptive creation during inference.** Tools are not pre-computed but created on-demand when the agent encounters a problem that existing tools cannot solve. This makes the system responsive to novel problem types.

## 3. Contributions

1. **Tool creation paradigm**: Shifts from tool use to tool creation, enabling agents to autonomously expand their own capability boundaries during deployment.
2. **Training-free self-evolution**: Demonstrates that meaningful capability improvement can occur without model retraining, reducing computational cost and widening applicability.
3. **Experience distillation into reusable assets**: The idea that reasoning traces contain latent problem-solving patterns that can be extracted and formalized as tools is conceptually novel.
4. **Memory consolidation mechanism**: Addresses the practical challenge of maintaining a growing tool library, ensuring quality and preventing degeneration.
5. **Substantial empirical gains**: +20.86% and +23.04% on multi-domain benchmarks provide strong evidence that the approach produces meaningful capability improvements.

## 4. Limitations

1. **Tool quality depends on base model reasoning**: If the base model produces flawed reasoning traces, the distilled tools will encode and amplify those flaws. The system has no external verification of tool correctness beyond task outcomes.
2. **Scalability of tool library**: While consolidation manages library size, the paper does not analyze how the system behaves as the library grows to hundreds or thousands of tools. Retrieval accuracy and selection cost may degrade.
3. **Domain specificity**: The evaluation focuses on mathematical and scientific reasoning. Whether the approach transfers to open-ended tasks with ambiguous success criteria (creative writing, planning, dialogue) is unclear.
4. **No inter-agent tool sharing**: The framework operates on a single agent's experience. In a multi-agent setting, tools created by one agent could benefit others, but this dimension is unexplored.
5. **Potential for circular reinforcement**: If a created tool is used to solve problems that generate similar tools, the system may converge to a narrow set of problem types rather than expanding capability.
6. **Limited analysis of tool diversity**: The paper does not characterize the diversity of created tools -- whether they capture genuinely novel reasoning strategies or merely encode variations of the same patterns.

## 5. Reproducibility

**Rating: Medium.** The framework is training-free, which reduces the reproduction barrier significantly. The conceptual pipeline (harvest, distill, consolidate) is clearly described. However, exact reproduction requires the specific memory consolidation algorithm, tool representation format, retrieval mechanism, and the criteria for triggering tool creation vs. using existing tools. The paper's abstract and summary do not include implementation details at this level. Access to the full PDF would clarify these gaps.

## 6. Impact Assessment

| Dimension | Rating | Justification |
|---|---|---|
| Novelty | ★★★★☆ | The user-to-creator transition is a genuine conceptual advance. Tool creation from reasoning traces, without training, is distinctive in the self-evolution literature. |
| Technical Depth | ★★★☆☆ | The three-stage pipeline is well-motivated but the technical details of distillation and consolidation require deeper examination from the full paper. |
| Practical Applicability | ★★★★☆ | Training-free evolution is highly practical. Any deployment of a TIR agent could benefit from this approach without infrastructure changes. |
| Experimental Rigor | ★★★☆☆ | Strong gains on two benchmarks, but limited to mathematical/scientific reasoning. No ablation study details visible in the available content. |
| Scalability | ★★★☆☆ | The training-free nature scales well, but the tool library management challenge at scale is unaddressed. |
| Openness | ★★★☆☆ | No explicit code availability mentioned in the abstract. Training-free approaches have inherently lower reproduction barriers. |

## 7. Key Takeaways

1. **Tool ecosystems can self-evolve**: Rather than treating tools as fixed infrastructure, UCT shows that the tool layer itself can be a substrate for self-evolution.
2. **Training-free does not mean improvement-free**: Meaningful capability gains are achievable without gradient updates, through better organization and reuse of existing model capabilities.
3. **Experience distillation is a general principle**: The idea of extracting reusable patterns from successful reasoning traces extends beyond tools to other aspects of agent behavior (strategies, heuristics, verification procedures).
4. **Memory management is critical**: The consolidation mechanism acknowledges that unbounded growth is a failure mode, and active curation is necessary for sustained improvement.
5. **From passive to active capability expansion**: The shift from tool user to tool creator represents a fundamental change in the agent's relationship with its environment -- from consuming resources to producing them.

## 8. Source Trace

**Local raw file**: `raw-papers/2602.01983.md`

**Raw excerpt used**:

> Recognizing that the reasoning traces of LLMs encapsulate implicit problem-solving capabilities, we propose UCT, a novel training-free framework that transforms agents from tool users to tool creators. This approach harvests reasoning experiences and distills them into reusable assets. This method transforms the agent from a mere tool user into a tool creator, enabling adaptive tool creation and self-updating during the inference process. We also introduce a memory consolidation mechanism to maintain the tool library, ensuring high reusability of retained experiential memory for subsequent reasoning tasks.

## 9. Tags

#tool-creation, #training-free, #experience-reuse, #self-evolution, #tool-integrated-reasoning, #memory-consolidation
