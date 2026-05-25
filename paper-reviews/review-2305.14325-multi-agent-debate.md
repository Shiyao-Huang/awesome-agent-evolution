# Deep Review: Multi-Agent Debate
- **Paper**: Improving Factuality and Reasoning in Language Models through Multiagent Debate
- **arXiv**: 2305.14325
- **Authors**: Yilun Du, Shuang Li, Antonio Torralba, Joshua B. Tenenbaum, Igor Mordatch
- **Published**: May 2023 (ICML 2024)
- **Review Date**: 2026-05-21

## Summary

This paper proposes a simple but powerful idea: instead of relying on a single LLM instance to generate answers, run **multiple LLM instances as independent agents** that propose initial answers, then engage in multiple rounds of debate where each agent sees all other agents' responses and updates its own. The process is inspired by Minsky's "Society of Mind" and by how humans cross-examine multiple lines of reasoning. The approach requires only black-box access to language model generations -- no gradients, no likelihoods, no model-internal information. With identical prompts and procedures across all tasks, multi-agent debate achieves substantial improvements on arithmetic (67.0% to 81.8%), GSM8K (77.0% to 85.0%), chess move prediction (+31.5 PS), biography factuality (66.0% to 73.8%), and MMLU (63.9% to 71.1%). A key qualitative finding is that debate can correct universally wrong initial answers -- all agents can start incorrect yet converge to the right answer through mutual critique.

## Method Analysis (Core Architecture + Key Design Decisions)

**Core Mechanism.** The debate procedure is straightforward:
1. Given a query, N agents (copies of the same LLM) independently generate initial answers.
2. Each agent receives the concatenated responses of all other agents.
3. Each agent generates an updated response conditioned on both the query and the other agents' responses.
4. Steps 2-3 repeat for R rounds.
5. After the final round, a consensus answer is extracted.

**Consensus Prompt Design.** The authors experiment with two prompt variants:
- **Short prompt**: "These are the solutions to the problem from other agents: [other answers]. Based off the opinion of other agents, can you give an updated response..."
- **Long prompt**: "These are the solutions to the problem from other agents: [other answers]. Using the opinion of other agents as additional advice, can you give an updated response..."

The short prompt (which encourages agents to be more "stubborn" and trust their own reasoning) induces longer debates but better final answers. The long prompt (which treats other agents' responses as "advice") causes faster convergence but to lower-quality consensus.

**Key Design Decisions:**
1. **Black-box only.** The entire approach operates through prompting alone. This makes it model-agnostic and immediately applicable to any LLM API. No fine-tuning, no gradient access, no logprobs.
2. **Homogeneous agents as default.** The default setting uses copies of the same model (chatGPT). The authors briefly explore heterogeneous debate (chatGPT + Bard), which shows further improvements but is not the primary focus.
3. **Summarization for scaling.** When the number of agents exceeds 3-4, direct concatenation of responses exceeds context limits. The authors propose summarizing all other agents' responses into a single response before feeding to each agent -- and surprisingly find this improves performance.
4. **Different persona initialization.** Ablation shows that instructing agents to adopt different personas (professor, doctor, mathematician) improves MMLU from 71.1 to 74.2, suggesting diversity in initial reasoning strategies matters.
5. **No explicit convergence guarantee.** The authors acknowledge that debate is a multi-agent game without guaranteed convergence. Empirically, however, LLMs converge to consensus in most cases. The authors attribute this to instruction tuning making models "relatively agreeable."

## Contributions (Novel + Relationship to Prior Work)

1. **Multi-agent debate as a general-purpose inference strategy.** While majority voting (self-consistency) and self-reflection existed before, this paper introduces the idea of structured multi-round debate between independent agents. The key insight is that debate combines the benefits of both multi-model sampling (diversity) and self-reflection (critique), producing gains that exceed either alone.

2. **Debate can correct universally wrong initial answers.** This is the most striking empirical finding. In single-agent settings, if the model gets the wrong answer, reflection often amplifies the error. In multi-agent debate, even when all agents start wrong, the cross-examination of different incorrect reasoning chains can surface the correct answer. This suggests debate enables a form of emergent collective intelligence.

3. **"Ease of persuasion" as a factuality signal.** The authors observe that on facts the model is confident about (all instances give the same answer), agents are very hard to persuade otherwise. On uncertain facts, agents quickly change their answers. This "persuadability gradient" could serve as a proxy for factual confidence -- a useful signal for any agent that needs to know when it doesn't know.

4. **Biography factuality benchmark.** The authors introduce a new benchmark of 524 computer scientist biographies, where models must generate accurate bullet-point biographies. This exposes a severe hallucination problem in current models.

5. **Relationship to prior work.** The approach is positioned against self-consistency (Wang et al.), reflection (Shinn et al., Madaan et al.), and single-agent chain-of-thought. The key difference from majority voting is that debate uses the LLM to intelligently combine and critique answers rather than simply counting votes. The relationship to Irving et al.'s AI safety debate is acknowledged: that work uses human judges, while this uses LLM self-judgment.

## Limitations (Technical + Community Criticism)

1. **Quadratic cost scaling.** With N agents and R rounds, the approach requires N x R LLM calls, each with a context that grows with the number of agents. The authors use 3 agents and 2 rounds as the default, which already multiplies inference cost by 6x. Scaling to more agents or rounds quickly becomes prohibitively expensive.

2. **Confident wrongness persists.** The authors acknowledge that while debate often converges to correct answers, it can also converge to confident wrong answers. When models agree on an incorrect fact, their mutual affirmation makes the error more entrenched, not less. This is particularly dangerous in high-stakes domains.

3. **No mechanism for stopping criteria.** The number of debate rounds is fixed, not adaptive. There is no principled way to determine when consensus has been reached or when further debate is unlikely to improve the answer. This wastes computation on easy questions and underspends on hard ones.

4. **Homogeneity limits diversity.** Using copies of the same model means all agents share the same knowledge base, biases, and failure modes. The heterogeneous experiment (chatGPT + Bard) is underexplored -- only 20 problems are tested. The diversity benefit of different model architectures or different training data is not systematically analyzed.

5. **Context window degradation.** The authors note that "as debates became longer in duration, current language models sometimes struggled to fully process the entire debate input, and typically only focused on the most recent generations." This is the "lost-in-the-middle" problem applied to debate context, and it fundamentally limits the effectiveness of extended debate rounds.

6. **No learning or improvement over time.** Each debate is independent -- there is no mechanism for the system to learn from past debates, improve its prompting strategy, or accumulate debate-derived knowledge. The approach is purely an inference-time technique with no self-evolution component.

7. **Limited to verifiable domains.** The approach works best on tasks with objective correct answers (math, chess, factual questions). It is unclear how debate would perform on subjective, creative, or open-ended tasks where there is no ground truth to converge toward.

8. **Agreement as correctness proxy.** The implicit assumption is that consensus correlates with correctness. But in domains with systematic biases (e.g., common misconceptions that appear frequently in training data), consensus may amplify bias rather than truth.

## Reproducibility

Code is available at https://github.com/composable-models/llm_multiagent_debate. The prompt templates are explicitly provided in the paper (Figure 3). The experiments use chatGPT (publicly accessible) as the default model. The evaluation tasks (arithmetic, GSM8K, chess, MMLU) are standard benchmarks. The biography benchmark is a novel contribution with 524 subjects. However, the reliance on chatGPT introduces reproducibility challenges due to model versioning and API changes. The variance estimates in the tables suggest multiple runs were conducted, but the exact number of runs and random seeds are not specified.

## Impact Assessment

- **Relevance to awesome-agent-evolution**: 4/5 -- Multi-agent debate is a form of emergent collective intelligence that enables agents to exceed individual capabilities. However, it operates purely at inference time without any self-improvement or learning component.
- **Practical applicability**: 3/5 -- The 6x inference cost and lack of learning limit practical deployment. Best suited for high-value queries where correctness matters more than latency.
- **Novelty**: 4/5 -- The multi-round debate framework with cross-agent critique was novel at publication time and has spawned significant follow-up work.
- **Rigor**: 3/5 -- Six evaluation tasks provide breadth, but small sample sizes (e.g., 20 problems for heterogeneous debate), lack of statistical significance tests, and reliance on a single model family limit confidence.

## Key Takeaways for awesome-agent-evolution

1. **Debate as a collective reasoning primitive.** Multi-agent debate demonstrates that agents can achieve capabilities beyond any individual through structured interaction. For self-evolving systems, debate-like mechanisms could serve as a quality control layer -- generating multiple candidate solutions, having them cross-examine each other, and selecting the most robust.

2. **Emergent correctness from diverse wrongness.** The finding that all-wrong agents can converge to right answers through debate is profound. It suggests that self-evolving agents do not need a perfect starting point -- they need diverse starting points and a mechanism for mutual critique. Diversity of initial hypotheses matters more than initial accuracy.

3. **Inference-time scaling as an alternative to training-time scaling.** Rather than making models bigger, debate makes inference deeper. This is a complementary axis for agent improvement that could be combined with self-evolution: evolve the model through experience, then further improve its outputs through multi-agent debate at inference time.

4. **The missing learning loop.** The paper mentions that debate "may be seen as a method to generate additional data that may be distilled back to self-improve the original base model" but does not implement this. Closing this loop -- using debate outcomes as training signal for model self-improvement -- is a natural next step for self-evolving agents.

5. **Persuadability as a metacognitive signal.** The observation that models are hard to persuade on high-confidence facts and easy to persuade on uncertain facts provides a potential mechanism for self-awareness in agents. An agent that monitors its own "ease of persuasion" during debate could learn to identify and flag its own uncertainty -- a crucial capability for self-evolving systems that need to know what they don't know.

## Cross-Validation Addendum — Evolver #51-#88 Continuation (2026-05-22)

**Paper claim checked:** Multi-Agent Debate claims that multiple agents can critique one another and improve final reasoning quality.  
**Cross-source evidence:** This anticipates later multi-agent evolution systems such as EvoMAC, Agentic Neural Networks, and multi-agent workflow search. Community evidence is mixed: users value independent critique, but report cost blow-ups, collusion-like agreement, shallow disagreement, and difficulty attributing which agent improved the result.  
**Validation judgement:** Debate is a valid selection/critique mechanism for self-evolving systems, but not sufficient by itself. The survey should require ablations on number/diversity of agents, external correctness checks, latency/cost accounting, and failure analysis for consensus on wrong answers.  
**Survey linkage:** Place in the multi-agent/co-evolution branch and cross-reference architecture-search systems that evolve roles, topology, and communication policies rather than only adding more agents.

