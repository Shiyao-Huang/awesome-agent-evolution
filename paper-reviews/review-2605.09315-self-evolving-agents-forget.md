# Deep Review: Self-Evolving Agents Forget
- **Paper**: Do Self-Evolving Agents Forget? Capability Degradation and Preservation in Lifelong LLM Agent Adaptation
- **arXiv**: 2605.09315
- **Authors**: Ye Yu, Xiaopeng Yuan, Haibo Jin, Heming Liu, Yaoning Yu, Haohan Wang
- **Published**: 2026-05-10
- **Review Date**: 2026-05-21

## Summary
This paper identifies and systematically studies "capability erosion" in self-evolving agents -- the phenomenon where adapting to new task distributions progressively degrades previously acquired capabilities. The authors demonstrate that self-evolution is often non-monotonic: learning new capabilities can actively destroy old ones. This erosion consistently emerges across all four major evolution channels: workflow evolution, skill evolution, model evolution, and memory evolution. To mitigate this, the paper proposes Capability-Preserving Evolution (CPE), a general stabilization principle that constrains destructive capability drift during continual adaptation. Validated with GPT-5.1, CPE improves retained simple-task performance from 41.8% to 52.8% under optimization while simultaneously achieving stronger complex-task adaptation. The paper bridges self-evolving agent research with the lifelong learning and catastrophic forgetting literature.

## Method Analysis
### Core Architecture
The study proceeds through identification, analysis, and mitigation:

1. **Four-Channel Erosion Analysis**: The authors systematically study capability erosion across the four primary channels of agent self-evolution:
   - **Workflow evolution**: Adapting workflow strategies (prompts, planning approaches) for new tasks degrades previously effective workflows.
   - **Skill evolution**: Accumulating new skills can interfere with or overwrite previously mastered skills.
   - **Model evolution**: Fine-tuning or adapting the underlying model on new distributions causes catastrophic forgetting of prior capabilities.
   - **Memory evolution**: Updating memory with new experiences can displace or corrupt previously stored knowledge.

2. **Capability Erosion Measurement**: The authors develop metrics for measuring retained capability on previously mastered tasks after adaptation to new distributions. This quantifies the non-monotonic nature of self-evolution.

3. **Capability-Preserving Evolution (CPE)**: A general stabilization principle that adds constraints to the adaptation process to prevent destructive drift. CPE ensures that adaptation to new capabilities does not come at the cost of losing existing ones.

### Key Design Decisions
- **Bridging two research communities**: By connecting agent self-evolution with catastrophic forgetting in neural networks, the paper brings established theoretical frameworks (elastic weight consolidation, progressive networks) to a new domain.
- **Four-channel comprehensiveness**: Rather than studying erosion in one evolution mechanism, the systematic coverage of all four channels provides a complete picture of the problem.
- **GPT-5.1 validation**: Using the latest frontier model for validation ensures that the findings are current and not artifacts of older model limitations.
- **Simultaneous improvement on old and new**: CPE's key result is not just preserving old capabilities but achieving them alongside stronger new-task adaptation, suggesting that preservation and adaptation are not inherently in tension.

## Contributions
### Novel Contributions
1. **Capability erosion as a systematic phenomenon**: First paper to systematically demonstrate that self-evolution is non-monotonic across all major evolution channels, establishing capability erosion as a first-class concern for self-evolving agent design.
2. **Four-channel analysis**: Comprehensive coverage of workflow, skill, model, and memory evolution provides a complete taxonomy of where erosion occurs.
3. **Capability-Preserving Evolution (CPE)**: A general stabilization principle that can be applied across all four channels to mitigate erosion.
4. **GPT-5.1 validated results**: The 41.8% to 52.8% improvement on retained tasks (with simultaneously stronger new-task performance) demonstrates practical efficacy.
5. **Lifelong learning bridge**: Establishing the connection between agent self-evolution and catastrophic forgetting opens the door to transferring decades of lifelong learning research.

### Relationship to Prior Work
- Directly connects to catastrophic forgetting literature (McCloskey & Cohen, 1989; Kirkpatrick et al., 2017) but in the agent self-evolution context rather than neural network training.
- Extends the self-evolving agent survey taxonomy (what/when/how/where to evolve) by adding the "what you lose" dimension.
- Relates to the stability-plasticity dilemma in continual learning but applies it to multi-channel agent evolution.
- The CPE principle echoes elastic weight consolidation (EWC) in spirit but operates at the agent system level rather than the parameter level.

## Limitations
### Technical Limitations
1. **CPE mechanism details**: The abstract describes CPE as a "general stabilization principle" but does not specify the exact mechanisms. Whether CPE is a set of constraints, a regularization approach, or an architectural modification needs the full paper to assess.
2. **Evaluation scope**: While four channels are analyzed, the evaluation may focus on specific task types. Whether erosion and CPE's mitigation generalize across all task categories is an open question.
3. **Cost of preservation**: CPE likely introduces computational overhead (constraint checking, dual optimization). The paper does not characterize this overhead.
4. **Long-horizon evaluation**: Capability erosion may accumulate over many more adaptation cycles than tested. The long-term dynamics of CPE-preserved evolution need further study.

### Community Criticism
- The finding that self-evolution is non-monotonic may seem obvious in hindsight -- the catastrophic forgetting literature has established this for neural networks. However, systematically demonstrating it across agent evolution channels and proposing mitigation is novel.
- The paper does not compare CPE against simply retraining from scratch periodically, which is a common practical baseline.

## Reproducibility
- **Code**: Not explicitly mentioned as open-source in the available content.
- **Models**: Uses GPT-5.1 (frontier model), which limits reproducibility for researchers without API access.
- **Evaluation framework**: The four-channel analysis framework is well-specified and could be reimplemented.
- **Reproducibility outlook**: Moderate. The analysis framework is clear, but the GPT-5.1 dependency and potential lack of open-source code limit full reproduction.

## Impact Assessment
**Relevance to Self-Evolution**: ★★★★★
**Practical Applicability**: ★★★★★
**Novelty**: ★★★★☆
**Rigor**: ★★★★☆

## Key Takeaways for awesome-agent-evolution
- **Self-evolution is not monotonic**: This is a foundational insight for the survey. Every self-evolving system must address capability erosion -- it is not a bug but a fundamental property of continual adaptation.
- **Four-channel erosion taxonomy**: The workflow/skill/model/memory erosion mapping directly corresponds to evolution channels in existing survey taxonomies and should be integrated as a risk dimension.
- **CPE as a design principle**: Capability-preserving constraints should be a standard component of self-evolving system design, not an optional add-on.
- **Bridges to established research**: The connection to catastrophic forgetting and lifelong learning provides theoretical foundations and a rich toolbox of mitigation strategies that the agent evolution community can leverage.
- **GPT-5.1 validation**: The results on the latest frontier model demonstrate that capability erosion is a current problem, not a historical artifact of weaker models.
