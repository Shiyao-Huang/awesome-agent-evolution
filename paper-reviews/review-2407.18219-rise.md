# Deep Review: RISE - Recursive Introspection for Self-Improvement
- **Paper**: Recursive Introspection: Teaching Language Model Agents How to Self-Improve
- **arXiv**: 2407.18219
- **Authors**: Yuxiao Qu (CMU), Tianjun Zhang (UC Berkeley), Naman Garg (MultiOn), Aviral Kumar (CMU)
- **Published**: 2024-07-25
- **Review Date**: 2026-05-21

## Summary

RISE introduces a fine-tuning approach that teaches LLMs to recursively introspect and improve their own responses across multiple sequential turns at test time. The key insight is converting single-turn problems into multi-turn Markov Decision Processes (MDPs), then using iterative on-policy data collection combined with reward-weighted regression to instill genuine self-correction ability. The paper demonstrates that open-source models (Llama2-7B, Llama3-8B, Mistral-7B) trained via RISE can monotonically improve their math reasoning performance over multiple turns, outperforming even GPT-3.5's natural self-correction capability.

## Method Analysis

### Core Architecture

RISE operates through three interconnected mechanisms:

1. **Multi-turn MDP Construction**: A single-turn prompt-response dataset is converted into a multi-turn MDP where the initial state is the prompt, the action is the LLM's response, and the next state is formed by concatenating the current state, action, and an introspection prompt. The reward is a sparse binary indicator of answer correctness.

2. **Iterative On-Policy Data Collection**: In each round k, the current model is unrolled to produce sequential attempts. Improved responses are obtained via two strategies:
   - **Self-distillation**: Sample N responses from the learner and use the best (highest reward) one as the improved target for the next turn.
   - **Distillation**: Query a more capable model to provide corrected responses given the learner's prior attempts.

3. **Reward-Weighted Regression (RWR)**: The model is trained on collected rollouts using an advantage-weighted supervised learning objective, where weights are proportional to exponentiated advantages (rewards centered around the mean), preventing the "rich-get-richer" phenomenon on easy problems.

### Key Design Decisions

- **On-policy rollouts over off-policy imitation**: The paper shows that simply imitating multi-turn correction data from stronger models fails because such data does not reflect the learner's own error distribution. RISE bootstraps from the learner's actual mistakes, making corrections directly relevant.

- **Restarting from the base model each iteration**: Counterintuitively, the authors found that starting fine-tuning from the original base model (but on data accumulated across all iterations) works better than continuing from the previous iteration's checkpoint. This avoids distribution drift.

- **Knowledge boosting initialization**: Before on-policy rollout collection, the model undergoes a preliminary SFT phase on multi-turn rollouts from a capable model, teaching basic instruction-following and response style for the correction format.

- **Advantage-weighted over reward-weighted training**: Centering rewards around the mean prevents the model from over-investing in easy problems where rewards are already high, focusing learning signal on harder cases where improvement matters.

## Contributions

### Novel Contributions

1. **Formalization of self-improvement as multi-turn MDP**: Provides a principled RL-theoretic framing for test-time self-correction, showing it is learnable despite prior work suggesting intrinsic self-correction is infeasible.

2. **Iterative on-policy self-distillation with reward weighting**: A practical training recipe that generates progressively better self-correction data aligned with the learner's own error distribution.

3. **Theoretical insight via diffusion analogy**: The paper argues that learning a sequence of conditional distributions pi(y_{i+1}|x, y_{0:i}) and marginalizing yields a more expressive distribution than a single monolithic conditional pi(y|x), analogous to how diffusion models outperform VAEs.

4. **Demonstration that self-correction is trainable**: Directly refutes the claim from Huang et al. (2024) that LLMs cannot learn intrinsic self-correction, showing it requires the right training paradigm rather than being fundamentally impossible.

### Relationship to Prior Work

RISE builds on online imitation learning (DAgger-family methods) and reward-weighted regression (Peters & Schaal, 2007), but applies them to the novel setting of sequential self-correction. It differs from Self-Refine (Madaan et al., 2023) which relies on prompting alone, and from Self-Correct (Welleck et al., 2023) which trains separate correction models. RISE's closest intellectual ancestor is on-policy distillation (Agarwal et al., 2024), but RISE queries experts on full sequential attempts rather than partial completions.

## Limitations

### Technical Limitations

1. **Reliance on binary reward signal**: The approach uses a sparse correctness indicator. Without rich intermediate feedback, the model must learn self-correction from only success/failure signals, limiting its applicability to domains with clear verifiable answers.

2. **Scalability of on-policy data generation**: Each training iteration requires generating full multi-turn rollouts from the current model across the entire training set, which is computationally expensive for larger models.

3. **Fixed introspection prompt**: The correction prompt ("this response is not correct, please introspect and correct your answer") is hand-designed and static. The approach does not learn how to prompt itself for better introspection.

4. **Evaluation restricted to math reasoning**: Experiments are primarily on GSM8K and MATH. Whether RISE generalizes to open-ended tasks, creative writing, or multi-step agentic scenarios with stochastic environments remains untested.

5. **Distribution shift at inference**: When the number of inference turns exceeds the number of training iterations, the model encounters states outside its training distribution. The shift-window heuristic is a partial patch but not a principled solution.

### Community Criticism

- Critics have noted that the "self-improvement" claim is somewhat overstated: the model improves via majority voting across turns rather than genuine reasoning corrections, and the improvements are partially attributable to increased compute at inference time.
- The reliance on an initial knowledge-boosting phase from a capable teacher model raises questions about how much of the improvement comes from RISE vs. the teacher model's data.
- The paper does not compare against strong inference-time baselines like best-of-N sampling with the same compute budget, making it hard to attribute gains to the self-correction mechanism specifically.

## Reproducibility

- **Code**: Not publicly released as a standalone repository at time of publication, though the algorithm is described in sufficient detail to re-implement.
- **Compute**: Training was done on 7B-parameter models (Llama2-7B, Llama3-8B, Mistral-7B). Multiple iterations of on-policy rollout generation and fine-tuning are needed, requiring significant GPU hours (estimated 8-16 A100 GPUs for full replication).
- **Data**: Uses standard benchmarks (GSM8K, MATH) with publicly available prompts and oracle answers.

## Impact Assessment

**Relevance to Self-Evolution**: ★★★★★
**Practical Applicability**: ★★★☆☆
**Novelty**: ★★★★☆
**Rigor**: ★★★★☆

RISE is directly relevant to self-evolution because it addresses the fundamental question of whether agents can be trained to improve themselves at test time. The MDP formalization and iterative training paradigm provide a blueprint for building agents that get better with more computation.

## Key Takeaways for awesome-evolution

- **Self-correction is a trainable capability, not an innate one**: The key insight is that self-improvement must be trained on the learner's own error distribution, not demonstrated by a teacher. This principle should guide any self-evolving agent design.
- **Multi-turn MDP framing is powerful**: Converting single-turn tasks into multi-turn correction processes provides a principled framework for designing training objectives for self-evolution. This pattern could extend beyond reasoning to tool use, planning, and exploration.
- **On-policy data is essential**: Off-policy imitation of corrections from stronger models fails because corrections are not calibrated to the learner's actual mistakes. Any self-evolution system must generate training data from the agent's own behavior.
- **Advantage-weighted learning prevents mode collapse**: Centering reward signals avoids over-investment in easy problems, a principle that generalizes to any reward-based self-improvement loop.
- **The diffusion analogy suggests deeper architectural possibilities**: Viewing sequential self-correction as analogous to iterative denoising opens the door to borrowing techniques from diffusion models (schedules, guidance, classifier-free approaches) for agent self-improvement.
