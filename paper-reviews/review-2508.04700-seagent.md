# Paper Review: SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience

**Paper**: SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience
**Authors**: Zeyi Sun, Ziyu Liu, Yuhang Zang, Yuhang Cao, Xiaoyi Dong, Tong Wu, Dahua Lin, Jiaqi Wang
**Affiliations**: CUHK - SenseTime Joint Lab, Shanghai AI Laboratory, The Chinese University of Hong Kong
**arXiv**: 2508.04700
**Reviewer**: Automated Reviewer
**Date**: 2025-05-21

---

## Summary

SEAgent addresses a critical bottleneck in computer use agents (CUAs): the reliance on human-labeled training data that leaves agents helpless when confronting novel, specialized software without annotations. The authors propose a self-evolving framework where large vision-language models (LVLMs) autonomously master unfamiliar software through experiential learning. The system integrates a World State Model for step-wise trajectory quality assessment, a Curriculum Generator that produces progressively harder tasks from simple to complex, and a dual-strategy policy update combining adversarial imitation of failure actions with Group Relative Policy Optimization (GRPO) on successful trajectories. A notable architectural contribution is the specialist-to-generalist training strategy: individual specialist agents develop experiential insights on specific software, which are then consolidated into a single generalist CUA that surpasses the ensemble of specialists. Evaluated across five novel software environments in OS-World, SEAgent improves success rate from 11.3% to 34.5% over UI-TARS, a 23.2 percentage point gain.

---

## Method Analysis

### Core Architecture

SEAgent operates through four interconnected modules:

1. **World State Model (WSM)**: A trained assessment model that evaluates each step in an agent's trajectory by comparing it against the ground-truth execution path. The WSM assigns quality scores to individual actions, enabling fine-grained trajectory annotation without human labeling. This replaces the typical binary success/failure signal with a richer per-step reward signal that identifies which specific actions helped or hindered task completion.

2. **Curriculum Generator**: Automatically generates tasks of increasing difficulty for novel software environments. Starting from simple interactions (e.g., opening a menu, clicking a button), the curriculum progressively introduces more complex multi-step operations. The generator conditions on the agent's current competency level and the software's available functionality, creating a natural difficulty gradient that prevents the agent from stalling on impossibly hard tasks or wasting time on trivially easy ones.

3. **Dual-Strategy Experiential Learning**:
   - **Adversarial Imitation of Failures**: Rather than discarding failed trajectories, SEAgent extracts instructive negative patterns. The agent learns what not to do by studying its own mistakes, creating a form of adversarial self-play where the current policy is trained to avoid actions similar to those in failed episodes.
   - **GRPO on Successes**: Successful trajectories are leveraged through Group Relative Policy Optimization, a reinforcement learning approach that uses the relative advantage of actions within successful episodes to update the policy. This avoids the need for an explicit reward model by using within-group comparison.

4. **Specialist-to-Generalist Strategy**: Multiple specialist agents are trained independently on different software environments. Their accumulated experience (both successful and failed trajectories) is then pooled to train a single generalist agent. This consolidation is critical: the generalist learns transferable patterns across software types, achieving better performance than any individual specialist even on that specialist's own domain.

### Key Design Decisions

- **Self-generated curricula over fixed task sets**: The Curriculum Generator is essential because novel software, by definition, lacks pre-existing task benchmarks. The agent must invent its own learning objectives, which requires understanding what constitutes a valid and informative task in an unfamiliar environment.

- **GRPO over standard RL**: The choice of Group Relative Policy Optimization is significant. Standard RL approaches require well-defined reward functions, which are difficult to specify for GUI interactions. GRPO sidesteps this by comparing relative quality within groups of trajectories, leveraging the natural variation in the agent's exploration to create implicit reward signals.

- **Trajectory-level learning over step-level feedback**: While the WSM provides step-level assessment, the actual policy updates operate at the trajectory level. This pragmatic choice avoids the noise inherent in individual action evaluations while preserving the richer signal from the WSM's annotations.

- **Vision-language model backbone**: SEAgent operates on LVLMs that process screenshots as visual input, making the approach applicable to any graphical software without requiring API access or DOM extraction. This is a deliberate choice to maximize generality at the cost of potentially richer structured information.

---

## Contributions

### Novel Contributions

1. **Autonomous software mastery without human annotations**: SEAgent is among the first systems to demonstrate that CUAs can learn to use entirely novel software without any human-provided demonstrations or labels. The self-generated curriculum combined with the WSM creates a fully autonomous learning loop.

2. **World State Model for trajectory assessment**: The WSM provides a practical solution to the credit assignment problem in GUI interaction. By training a model to assess step-wise quality relative to ground-truth paths, SEAgent creates dense learning signals from sparse environmental feedback.

3. **Specialist-to-generalist consolidation**: This training strategy is a key contribution with implications beyond CUAs. The finding that a generalist trained on pooled specialist experience can outperform individual specialists on their own domains suggests that cross-domain experience transfer is not just possible but synergistic.

4. **Curriculum learning for software exploration**: The Curriculum Generator's approach of organizing tasks by complexity and progressively increasing difficulty is a principled method for structuring autonomous exploration of unknown software environments.

5. **Strong empirical results on OS-World**: The 23.2 percentage point improvement over UI-TARS on five novel software environments demonstrates practical significance. The OS-World benchmark provides realistic and challenging evaluation conditions.

### Relationship to Prior Work

- **UI-TARS**: SEAgent directly builds on UI-TARS as the base CUA model. The improvement from 11.3% to 34.5% is measured against this strong open-source baseline, making the results particularly meaningful.

- **Voyager (Wang et al.)**: The self-generated curriculum concept parallels Voyager's automatic curriculum in Minecraft. SEAgent adapts this idea to the GUI interaction domain, where tasks are inherently more structured (software operations) but also more diverse (different applications with different interfaces).

- **GRPO in RLHF**: The use of GRPO connects to the broader trend of using group-relative optimization for LLM fine-tuning (as in DeepSeek's training pipeline), but applies it specifically to the computer use agent domain with experiential trajectory data.

- **Experiential learning in agents**: SEAgent joins a growing family of systems (ExpeL, AgentPro, Voyager) that learn from accumulated experience. Its distinguishing feature is the application to GUI interaction with vision-language models, a domain with unique challenges (visual grounding, spatial reasoning, action precision).

---

## Limitations

### Technical Limitations

1. **Dependence on ground-truth for WSM training**: The World State Model requires ground-truth execution paths for training its trajectory assessment capability. While this is a one-time cost per software environment, it still requires some form of reference trajectories, which partially undermines the "fully autonomous" claim. In truly novel software with no prior demonstrations, the WSM's training data must come from somewhere.

2. **OS-World evaluation scope**: Five novel software environments, while meaningful, represent a limited evaluation scope. Real-world software diversity is enormous, and the selected environments may not be representative of the full spectrum of GUI complexity (e.g., creative software with canvas-based interactions, IDEs with nested panels, games with real-time requirements).

3. **Base model dependency**: SEAgent's performance ceiling is bounded by the underlying LVLM's capabilities. The specialist-to-generalist strategy helps, but fundamentally, the agent cannot learn behaviors that the base model cannot represent. The 34.5% success rate, while a major improvement, still means failure on roughly two-thirds of attempts.

4. **Scalability of curriculum generation**: The paper does not address how the Curriculum Generator scales with software complexity. For applications with hundreds of features and thousands of possible operations, the curriculum generation itself could become a bottleneck, requiring its own optimization.

5. **No analysis of negative transfer in specialist-to-generalist**: When consolidating experiences from multiple specialists, there is a risk of negative transfer where learning from one domain degrades performance on another. The paper does not investigate this potential pitfall.

6. **Computational cost**: Training multiple specialist agents followed by generalist consolidation is computationally expensive. The paper does not provide cost analysis or comparisons of training compute against alternatives.

---

## Reproducibility

**Rating: 3/5**

Strengths:
- Based on UI-TARS, an open-source CUA model, providing a clear starting point.
- Evaluated on OS-World, a publicly available benchmark.
- Clear description of the four-module architecture and training pipeline.
- Multiple software environments used for evaluation.

Weaknesses:
- The World State Model training requires ground-truth trajectories, the availability of which is unclear.
- No code repository mentioned in the abstract or metadata.
- Training details for GRPO (hyperparameters, group sizes, learning rates) are not specified in the available content.
- The specialist-to-generalist training procedure details are not fully specified.
- Computational requirements are not disclosed.

---

## Impact Assessment

### Novelty: 4/5
The combination of self-generated curricula, World State Model assessment, adversarial imitation of failures, and specialist-to-generalist consolidation for computer use agents is novel and well-integrated. Individual ideas have precedents, but their synthesis in the CUA domain is original.

### Technical Quality: 4/5
Strong empirical results with substantial improvements over a competitive baseline. The dual-strategy learning (adversarial + GRPO) is well-motivated. Main weaknesses are limited evaluation scope (5 environments) and lack of cost analysis.

### Clarity: 3/5
The paper's architecture is clearly described with four distinct modules. However, the interaction between modules during training and the exact training pipeline could be more precisely specified. The specialist-to-generalist procedure needs additional detail.

### Significance: 4/5
Addresses a critical problem (CUA generalization to novel software) with a practical and effective solution. The specialist-to-generalist finding has implications for multi-domain agent learning. The results on OS-World establish a strong baseline for future CUA self-evolution work.

### Overall: 3.75/5
A strong contribution to the CUA self-evolution literature. SEAgent demonstrates that computer use agents can autonomously master novel software through self-generated curricula and experiential learning. The specialist-to-generalist strategy is a particularly valuable contribution with potential applicability beyond GUI agents. The main limitations are evaluation scope and incomplete reproducibility details.

---

## Key Takeaways for awesome-agent-evolution

1. **Self-generated curricula enable zero-annotation learning**: When environments lack human annotations, agents can still learn by inventing their own task progressions. This is a general principle applicable beyond GUI agents to any domain where pre-existing benchmarks are unavailable.

2. **Failure trajectories are as valuable as successes**: The adversarial imitation of failure actions treats mistakes as first-class learning signals. This "negative experience" exploitation is an underexplored dimension in agent self-evolution.

3. **Specialist-to-generalist consolidation creates emergent capabilities**: Pooling experience from multiple domain-specific agents produces a generalist that outperforms individual specialists even on their own domains. This suggests cross-domain experience creates synergistic knowledge transfer.

4. **GRPO provides practical policy optimization for agents**: Group Relative Policy Optimization sidesteps the reward modeling challenge by using within-group comparison, making it particularly suitable for domains where explicit reward functions are hard to define (like GUI interaction).

5. **World State Models solve the credit assignment problem**: By providing per-step quality assessment of trajectories, WSMs create dense learning signals from sparse environmental feedback. This pattern is broadly applicable to any agent learning scenario where success/failure is only observed at episode end.
