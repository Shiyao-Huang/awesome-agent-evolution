import type { KnowledgeEdge, KnowledgeNode } from './knowledgeGraph';

export const generatedKnowledgeNodes = [
  {
    "id": "review:2203.14465",
    "label": "STaR: Bootstrapping Reasoning With Reasoning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2203.14465",
    "summary": "Review file: paper-reviews/review-2203.14465-star.md",
    "weight": 4
  },
  {
    "id": "concept:agent-learning",
    "label": "Agent learning",
    "type": "concept",
    "summary": "Inferred from review-2203.14465-star.md",
    "weight": 4
  },
  {
    "id": "cluster:self-evolution-loops",
    "label": "Self-evolution loops",
    "type": "cluster",
    "summary": "Heuristic cluster inferred from local paper-review files.",
    "weight": 8
  },
  {
    "id": "concept:code-evolution",
    "label": "Code evolution",
    "type": "concept",
    "summary": "Inferred from review-2203.14465-star.md",
    "weight": 4
  },
  {
    "id": "cluster:code-and-harness-evolution",
    "label": "Code and harness evolution",
    "type": "cluster",
    "summary": "Heuristic cluster inferred from local paper-review files.",
    "weight": 8
  },
  {
    "id": "concept:benchmark%2Feval",
    "label": "Benchmark/eval",
    "type": "concept",
    "summary": "Inferred from review-2203.14465-star.md",
    "weight": 4
  },
  {
    "id": "cluster:evaluation-and-benchmarks",
    "label": "Evaluation and benchmarks",
    "type": "cluster",
    "summary": "Heuristic cluster inferred from local paper-review files.",
    "weight": 8
  },
  {
    "id": "concept:open-ended-evolution",
    "label": "Open-ended evolution",
    "type": "concept",
    "summary": "Inferred from review-2203.14465-star.md",
    "weight": 4
  },
  {
    "id": "concept:training-time-update",
    "label": "Training-time update",
    "type": "concept",
    "summary": "Inferred from review-2203.14465-star.md",
    "weight": 4
  },
  {
    "id": "cluster:training-time-self-improvement",
    "label": "Training-time self-improvement",
    "type": "cluster",
    "summary": "Heuristic cluster inferred from local paper-review files.",
    "weight": 8
  },
  {
    "id": "review:2303.11366",
    "label": "Reflexion: Language Agents with Verbal Reinforcement Learning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2303.11366",
    "summary": "Review file: paper-reviews/review-2303.11366-reflexion.md",
    "weight": 4
  },
  {
    "id": "concept:self-refinement",
    "label": "Self-refinement",
    "type": "concept",
    "summary": "Inferred from review-2303.11366-reflexion.md",
    "weight": 4
  },
  {
    "id": "concept:reflection-memory",
    "label": "Reflection memory",
    "type": "concept",
    "summary": "Inferred from review-2303.11366-reflexion.md",
    "weight": 4
  },
  {
    "id": "cluster:memory-and-reflection",
    "label": "Memory and reflection",
    "type": "cluster",
    "summary": "Heuristic cluster inferred from local paper-review files.",
    "weight": 8
  },
  {
    "id": "review:deep-academic-review%3A-self-refine%3A-iterative-refinement-with-self-feedback",
    "label": "Deep Academic Review: Self-Refine: Iterative Refinement with Self-Feedback",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2303.17651-self-refine-iterative-refinement-with-self-feedback.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-generative-agents%3A-interactive-simulacra-of-human-behavior",
    "label": "Deep Academic Review: Generative Agents: Interactive Simulacra of Human Behavior",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2304.03442-generative-agents-interactive-simulacra-of-human-behavior.md",
    "weight": 4
  },
  {
    "id": "review:2304.03442",
    "label": "Generative Agents: Interactive Simulacra of Human Behavior",
    "type": "paper",
    "url": "https://arxiv.org/abs/2304.03442",
    "summary": "Review file: paper-reviews/review-2304.03442-generative-agents.md",
    "weight": 4
  },
  {
    "id": "concept:reward%2Fsafety",
    "label": "Reward/safety",
    "type": "concept",
    "summary": "Inferred from review-2304.03442-generative-agents.md",
    "weight": 4
  },
  {
    "id": "cluster:safety-and-governance",
    "label": "Safety and governance",
    "type": "cluster",
    "summary": "Heuristic cluster inferred from local paper-review files.",
    "weight": 8
  },
  {
    "id": "concept:memory-substrate",
    "label": "Memory substrate",
    "type": "concept",
    "summary": "Inferred from review-2304.03442-generative-agents.md",
    "weight": 4
  },
  {
    "id": "review:2305.14325",
    "label": "Improving Factuality and Reasoning in Language Models through Multiagent Debate",
    "type": "paper",
    "url": "https://arxiv.org/abs/2305.14325",
    "summary": "Review file: paper-reviews/review-2305.14325-multi-agent-debate.md",
    "weight": 4
  },
  {
    "id": "review:2305.16291",
    "label": "Voyager: An Open-Ended Embodied Agent with Large Language Models",
    "type": "paper",
    "url": "https://arxiv.org/abs/2305.16291",
    "summary": "Review file: paper-reviews/review-2305.16291-voyager.md",
    "weight": 4
  },
  {
    "id": "review:2308.10144",
    "label": "ExpeL: LLM Agents Are Experiential Learners",
    "type": "paper",
    "url": "https://arxiv.org/abs/2308.10144",
    "summary": "Review file: paper-reviews/review-2308.10144-expel.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-llmrefine%3A-pinpointing-and-refining-large-language-models-via-fine-grained-actionable-feedback",
    "label": "Deep Academic Review: LLMRefine: Pinpointing and Refining Large Language Models via Fine-Grained Actionable Feedback",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2311.09336-llmrefine-pinpointing-and-refining-large-language-models-via-fine-grai.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-weak-to-strong-generalization%3A-eliciting-strong-capabilities-with-weak-supervision",
    "label": "Deep Academic Review: Weak-to-Strong Generalization: Eliciting Strong Capabilities With Weak Supervision",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2312.09390-weak-to-strong-generalization-eliciting-strong-capabilities-with-weak.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-self-play-fine-tuning-converts-weak-language-models-to-strong-language-models",
    "label": "Deep Academic Review: Self-Play Fine-Tuning Converts Weak Language Models to Strong Language Models",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2401.01335-self-play-fine-tuning-converts-weak-language-models-to-strong-language.md",
    "weight": 4
  },
  {
    "id": "review:2401.01335",
    "label": "Self-Play Fine-Tuning Converts Weak Language Models to Strong Language Models",
    "type": "paper",
    "url": "https://arxiv.org/abs/2401.01335",
    "summary": "**EN.** Self-Play Fine-Tuning studies whether weak language models can generate training signals through self-play and improve without relying entirely on stronger teacher labels. **中文。** 这条 review 将论文放入 Evolver 的 **Self-play fine-tuning / model-level self-improvement** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
    "weight": 4
  },
  {
    "id": "review:2401.10020",
    "label": "Self-Rewarding Language Models",
    "type": "paper",
    "url": "https://arxiv.org/abs/2401.10020",
    "summary": "Review file: paper-reviews/review-2401.10020-self-rewarding.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-investigate-consolidate-exploit%3A-a-general-strategy-for-inter-task-agent-self-evolution",
    "label": "Deep Academic Review: Investigate-Consolidate-Exploit: A General Strategy for Inter-Task Agent Self-Evolution",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2401.13996-investigate-consolidate-exploit-a-general-strategy-for-inter-task-agen.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-agent-pro%3A-learning-to-evolve-via-policy-level-reflection-and-optimization",
    "label": "Deep Academic Review: Agent-Pro: Learning to Evolve via Policy-Level Reflection and Optimization",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2402.17574-agent-pro-learning-to-evolve-via-policy-level-reflection-and-optimizat.md",
    "weight": 4
  },
  {
    "id": "review:2402.18381",
    "label": "Deep Academic Review: Large Language Models As Evolution Strategies",
    "type": "paper",
    "url": "https://arxiv.org/abs/2402.18381",
    "summary": "Review file: paper-reviews/review-2402.18381-large-language-models-as-evolution-strategies-arxiv-id-2402-18381-url.md",
    "weight": 4
  },
  {
    "id": "review:2403.18341",
    "label": "IterAlign: Iterative Constitutional Alignment of Large Language Models",
    "type": "paper",
    "url": "https://arxiv.org/abs/2403.18341",
    "summary": "Review file: paper-reviews/review-2403.18341-iteralign.md",
    "weight": 4
  },
  {
    "id": "review:2405.06682",
    "label": "Self-Reflection in LLM Agents: Effects on Problem-Solving Performance",
    "type": "paper",
    "url": "https://arxiv.org/abs/2405.06682",
    "summary": "Review file: paper-reviews/review-2405.06682-self-reflection-agents.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-self-reflection-in-llm-agents%3A-effects-on-problem-solving-performance",
    "label": "Deep Academic Review: Self-Reflection in LLM Agents: Effects on Problem-Solving Performance",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2405.06682-self-reflection-in-llm-agents-effects-on-problem-solving-performance.md",
    "weight": 4
  },
  {
    "id": "review:2406.18532",
    "label": "Deep Academic Review: Symbolic Learning Enables Self-Evolving Agents",
    "type": "paper",
    "url": "https://arxiv.org/abs/2406.18532",
    "summary": "Review file: paper-reviews/review-2406.18532-symbolic-learning-enables-self-evolving-agents-arxiv-id-2406-18532-url.md",
    "weight": 4
  },
  {
    "id": "review:2407.18219",
    "label": "Recursive Introspection: Teaching Language Model Agents How to Self-Improve",
    "type": "paper",
    "url": "https://arxiv.org/abs/2407.18219",
    "summary": "Review file: paper-reviews/review-2407.18219-rise.md",
    "weight": 4
  },
  {
    "id": "review:2407.19594",
    "label": "Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge",
    "type": "paper",
    "url": "https://arxiv.org/abs/2407.19594",
    "summary": "Review file: paper-reviews/review-2407.19594-meta-rewarding.md",
    "weight": 4
  },
  {
    "id": "review:2408.08435",
    "label": "Automated Design of Agentic Systems",
    "type": "paper",
    "url": "https://arxiv.org/abs/2408.08435",
    "summary": "Review file: paper-reviews/review-2408.08435-adas.md",
    "weight": 4
  },
  {
    "id": "review:2409.12147",
    "label": "Deep Academic Review: MAgICoRe: Multi-Agent, Iterative, Coarse-to-Fine Refinement for Reasoning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2409.12147",
    "summary": "Review file: paper-reviews/review-2409.12147-magicore-multi-agent-iterative-coarse-to-fine-refinement-for-reasoning.md",
    "weight": 4
  },
  {
    "id": "review:2409.12917",
    "label": "Training Language Models to Self-Correct via Reinforcement Learning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2409.12917",
    "summary": "Review file: paper-reviews/review-2409.12917-score.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-training-language-models-to-self-correct-via-reinforcement-learning",
    "label": "Deep Academic Review: Training Language Models to Self-Correct via Reinforcement Learning",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2409.12917-training-language-models-to-self-correct-via-reinforcement-learning.md",
    "weight": 4
  },
  {
    "id": "review:2409.14051",
    "label": "Deep Academic Review: GroupDebate: Enhancing the Efficiency of Multi-Agent Debate Using Group Discussion",
    "type": "paper",
    "url": "https://arxiv.org/abs/2409.14051",
    "summary": "Review file: paper-reviews/review-2409.14051-groupdebate-enhancing-the-efficiency-of-multi-agent-debate-using-group.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-curricullm%3A-automatic-task-curricula-design-for-learning-complex-robot-skills-using-large-language-models",
    "label": "Deep Academic Review: CurricuLLM: Automatic Task Curricula Design for Learning Complex Robot Skills using Large Language Models",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2409.18382-curricullm-automatic-task-curricula-design-for-learning-complex-robot.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-from-code-to-correctness%3A-closing-the-last-mile-of-code-generation-with-hierarchical-debugging",
    "label": "Deep Academic Review: From Code to Correctness: Closing the Last Mile of Code Generation with Hierarchical Debugging",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2410.01215-from-code-to-correctness-closing-the-last-mile-of-code-generation-with.md",
    "weight": 4
  },
  {
    "id": "review:2410.01215",
    "label": "From Code to Correctness: Closing the Last Mile of Code Generation with Hierarchical Debugging",
    "type": "paper",
    "url": "https://arxiv.org/abs/2410.01215",
    "summary": "Review file: paper-reviews/review-2410.01215-hierarchical-debugging.md",
    "weight": 4
  },
  {
    "id": "review:2410.04444",
    "label": "Godel Agent: A Self-Referential Agent Framework for Recursively Self-Improvement",
    "type": "paper",
    "url": "https://arxiv.org/abs/2410.04444",
    "summary": "Review file: paper-reviews/review-2410.04444-godel-agent.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-diversity-of-thought-elicits-stronger-reasoning-capabilities-in-multi-agent-debate-frameworks",
    "label": "Deep Academic Review: Diversity of Thought Elicits Stronger Reasoning Capabilities in Multi-Agent Debate Frameworks",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2410.12853-diversity-of-thought-elicits-stronger-reasoning-capabilities-in-multi.md",
    "weight": 4
  },
  {
    "id": "review:2410.15639-can-large-language-models-invent-algorithms-to-improve-themselves-algo",
    "label": "Deep Academic Review: Can Large Language Models Invent Algorithms to Improve Themselves?: Algorithm Discovery for Recursive Self-Improvement through Reinforcement Learning",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2410.15639-can-large-language-models-invent-algorithms-to-improve-themselves-algo.md",
    "weight": 4
  },
  {
    "id": "review:2410.16946",
    "label": "Self-Evolving Multi-Agent Collaboration Networks for Software Development",
    "type": "paper",
    "url": "https://arxiv.org/abs/2410.16946",
    "summary": "Review file: paper-reviews/review-2410.16946-evomac.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-rl-star%3A-theoretical-analysis-of-reinforcement-learning-frameworks-for-self-taught-reasoner",
    "label": "Deep Academic Review: RL-STaR: Theoretical Analysis of Reinforcement Learning Frameworks for Self-Taught Reasoner",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2410.23912-rl-star-theoretical-analysis-of-reinforcement-learning-frameworks-for.md",
    "weight": 4
  },
  {
    "id": "review:2411.02337",
    "label": "Deep Academic Review: WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2411.02337",
    "summary": "Review file: paper-reviews/review-2411.02337-webrl-training-llm-web-agents-via-self-evolving-online-curriculum-rein.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-self-improvement-in-language-models%3A-the-sharpening-mechanism",
    "label": "Deep Academic Review: Self-Improvement in Language Models: The Sharpening Mechanism",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2412.01951-self-improvement-in-language-models-the-sharpening-mechanism.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-progco%3A-program-helps-self-correction-of-large-language-models",
    "label": "Deep Academic Review: ProgCo: Program Helps Self-Correction of Large Language Models",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2501.01264-progco-program-helps-self-correction-of-large-language-models.md",
    "weight": 4
  },
  {
    "id": "review:2501.01264",
    "label": "ProgCo: Program Helps Self-Correction of Large Language Models",
    "type": "paper",
    "url": "https://arxiv.org/abs/2501.01264",
    "summary": "Review file: paper-reviews/review-2501.01264-progco.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-lifelong-learning-of-large-language-model-based-agents%3A-a-roadmap",
    "label": "Deep Academic Review: Lifelong Learning of Large Language Model based Agents: A Roadmap",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2501.07278-lifelong-learning-of-large-language-model-based-agents-a-roadmap.md",
    "weight": 4
  },
  {
    "id": "review:2501.07278",
    "label": "Lifelong Learning of Large Language Model based Agents: A Roadmap",
    "type": "paper",
    "url": "https://arxiv.org/abs/2501.07278",
    "summary": "**EN.** The roadmap positions lifelong learning as the bridge between one-off LLM agents and agents that accumulate reusable capabilities across tasks, users, and environments. **中文。** 这条 review 将论文放入 Evolver 的 **Lifelong learning roadmap / persistent agent evolution** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
    "weight": 4
  },
  {
    "id": "review:2501.11425",
    "label": "Agent-R: Training Language Model Agents to Reflect via Iterative Self-Training",
    "type": "paper",
    "url": "https://arxiv.org/abs/2501.11425",
    "summary": "Review file: paper-reviews/review-2501.11425-agent-r.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-revisit-self-debugging-with-self-generated-tests-for-code-generation",
    "label": "Deep Academic Review: Revisit Self-Debugging with Self-Generated Tests for Code Generation",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2501.12793-revisit-self-debugging-with-self-generated-tests-for-code-generation.md",
    "weight": 4
  },
  {
    "id": "review:2501.12793",
    "label": "Revisit Self-Debugging with Self-Generated Tests for Code Generation",
    "type": "paper",
    "url": "https://arxiv.org/abs/2501.12793",
    "summary": "Review file: paper-reviews/review-2501.12793-self-debugging-tests.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-mona%3A-myopic-optimization-with-non-myopic-approval-can-mitigate-multi-step-reward-hacking",
    "label": "Deep Academic Review: MONA: Myopic Optimization with Non-myopic Approval Can Mitigate Multi-step Reward Hacking",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2501.13011-mona-myopic-optimization-with-non-myopic-approval-can-mitigate-multi-s.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-dominated-novelty-search%3A-rethinking-local-competition-in-quality-diversity",
    "label": "Deep Academic Review: Dominated Novelty Search: Rethinking Local Competition in Quality-Diversity",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2502.00593-dominated-novelty-search-rethinking-local-competition-in-quality-diver.md",
    "weight": 4
  },
  {
    "id": "review:2502.00593",
    "label": "Dominated Novelty Search: Rethinking Local Competition in Quality-Diversity",
    "type": "paper",
    "url": "https://arxiv.org/abs/2502.00593",
    "summary": "**EN.** Dominated Novelty Search contributes an evolutionary-search idea for quality-diversity by rethinking local competition and novelty under domination relationships. **中文。** 这条 review 将论文放入 Evolver 的 **Quality-diversity / evolutionary search primitive** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
    "weight": 4
  },
  {
    "id": "review:2502.04780-sirius-self-improving-multi-agent-systems-via-bootstrapped-reasoning-a",
    "label": "Deep Academic Review: SiriuS: Self-improving Multi-agent Systems via Bootstrapped Reasoning **Authors**: Wanjia Zhao, Mert Yuksekgonul, Shirley Wu, James Zou **Submitted**: 2025-02-07 (v1)",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2502.04780-sirius-self-improving-multi-agent-systems-via-bootstrapped-reasoning-a.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-evolving-llms'-self-refinement-capability-via-synergistic-training-inference-optimization",
    "label": "Deep Academic Review: Evolving LLMs' Self-Refinement Capability via Synergistic Training-Inference Optimization",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2502.05605-evolving-llms-self-refinement-capability-via-synergistic-training-infe.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-autoagent%3A-a-fully-automated-and-zero-code-framework-for-llm-agents",
    "label": "Deep Academic Review: AutoAgent: A Fully-Automated and Zero-Code Framework for LLM Agents",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2502.05957-autoagent-a-fully-automated-and-zero-code-framework-for-llm-agents.md",
    "weight": 4
  },
  {
    "id": "review:2502.12110",
    "label": "Deep Academic Review: A-Mem: Agentic Memory for LLM Agents",
    "type": "paper",
    "url": "https://arxiv.org/abs/2502.12110",
    "summary": "Review file: paper-reviews/review-2502.12110-a-mem-agentic-memory-for-llm-agents-arxiv-id-2502-12110-url-https-arxi.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-star-sql%3A-self-taught-reasoner-for-text-to-sql",
    "label": "Deep Academic Review: STaR-SQL: Self-Taught Reasoner for Text-to-SQL",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2502.13550-star-sql-self-taught-reasoner-for-text-to-sql.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-advances-and-challenges-in-foundation-agents%3A-from-brain-inspired-intelligence-to-evolutionary%2C-collaborative%2C-and-safe-systems",
    "label": "Deep Academic Review: Advances and Challenges in Foundation Agents: From Brain-Inspired Intelligence to Evolutionary, Collaborative, and Safe Systems",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2504.01990-advances-and-challenges-in-foundation-agents-from-brain-inspired-intel.md",
    "weight": 4
  },
  {
    "id": "review:2504.15228",
    "label": "A Self-Improving Coding Agent",
    "type": "paper",
    "url": "https://arxiv.org/abs/2504.15228",
    "summary": "Review file: paper-reviews/review-2504.15228-sica.md",
    "weight": 4
  },
  {
    "id": "review:2504.20073",
    "label": "RAGEN: Understanding Self-Evolution in LLM Agents via Multi-Turn Reinforcement Learning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2504.20073",
    "summary": "Review file: paper-reviews/review-2504.20073-ragen.md",
    "weight": 4
  },
  {
    "id": "review:2504.21024",
    "label": "WebEvolver: Enhancing Web Agent Self-Improvement with Coevolving World Model",
    "type": "paper",
    "url": "https://arxiv.org/abs/2504.21024",
    "summary": "Review file: paper-reviews/review-2504.21024-webevolver.md",
    "weight": 4
  },
  {
    "id": "review:2505.00234-self-generated-in-context-examples-improve-llm-agents-for-sequential-d",
    "label": "Deep Academic Review: Self-Generated In-Context Examples Improve LLM Agents for Sequential Decision-Making Tasks **Authors**: Vishnu Sarukkai, Zhiqiang Xie, Kayvon Fatahalian **Submitted**: 2025-05-01 (v1)",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2505.00234-self-generated-in-context-examples-improve-llm-agents-for-sequential-d.md",
    "weight": 4
  },
  {
    "id": "review:2505.03335",
    "label": "Absolute Zero: Reinforced Self-play Reasoning with Zero Data",
    "type": "paper",
    "url": "https://arxiv.org/abs/2505.03335",
    "summary": "Review file: paper-reviews/review-2505.03335-absolute-zero.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-rlsr%3A-reinforcement-learning-from-self-reward",
    "label": "Deep Academic Review: RLSR: Reinforcement Learning from Self Reward",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2505.08827-rlsr-reinforcement-learning-from-self-reward.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-self-evolving-curriculum-for-llm-reasoning",
    "label": "Deep Academic Review: Self-Evolving Curriculum for LLM Reasoning",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2505.14970-self-evolving-curriculum-for-llm-reasoning.md",
    "weight": 4
  },
  {
    "id": "review:2505.14970",
    "label": "Self-Evolving Curriculum for LLM Reasoning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2505.14970",
    "summary": "Review file: paper-reviews/review-2505.14970-self-evolving-curriculum.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-how-memory-management-impacts-llm-agents%3A-an-empirical-study-of-experience-following-behavior",
    "label": "Deep Academic Review: How Memory Management Impacts LLM Agents: An Empirical Study of Experience-Following Behavior",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2505.16067-how-memory-management-impacts-llm-agents-an-empirical-study-of-experie.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-reflectevo%3A-improving-meta-introspection-of-small-llms-by-learning-self-reflection",
    "label": "Deep Academic Review: ReflectEvo: Improving Meta Introspection of Small LLMs by Learning Self-Reflection",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2505.16475-reflectevo-improving-meta-introspection-of-small-llms-by-learning-self.md",
    "weight": 4
  },
  {
    "id": "review:2505.18646",
    "label": "Deep Academic Review: SEW: Self-Evolving Agentic Workflows for Automated Code Generation",
    "type": "paper",
    "url": "https://arxiv.org/abs/2505.18646",
    "summary": "Review file: paper-reviews/review-2505.18646-sew-self-evolving-agentic-workflows-for-automated-code-generation-arxi.md",
    "weight": 4
  },
  {
    "id": "review:2505.22954",
    "label": "Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents",
    "type": "paper",
    "url": "https://arxiv.org/abs/2505.22954",
    "summary": "Review file: paper-reviews/review-2505.22954-darwin-godel-machine.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-self-correcting-code-generation-using-small-language-models",
    "label": "Deep Academic Review: Self-Correcting Code Generation Using Small Language Models",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2505.23060-self-correcting-code-generation-using-small-language-models.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-self-challenging-language-model-agents",
    "label": "Deep Academic Review: Self-Challenging Language Model Agents",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2506.01716-self-challenging-language-model-agents.md",
    "weight": 4
  },
  {
    "id": "review:2506.04651",
    "label": "Agents of Change: Self-Evolving LLM Agents for Strategic Planning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2506.04651",
    "summary": "Review file: paper-reviews/review-2506.04651-agents-of-change-hexmachina.md",
    "weight": 4
  },
  {
    "id": "concept:multi-agent",
    "label": "Multi-agent",
    "type": "concept",
    "summary": "Inferred from review-2506.04651-agents-of-change-hexmachina.md",
    "weight": 4
  },
  {
    "id": "cluster:multi-agent-evolution",
    "label": "Multi-agent evolution",
    "type": "cluster",
    "summary": "Heuristic cluster inferred from local paper-review files.",
    "weight": 8
  },
  {
    "id": "review:deep-academic-review%3A-agents-of-change%3A-self-evolving-llm-agents-for-strategic-planning",
    "label": "Deep Academic Review: Agents of Change: Self-Evolving LLM Agents for Strategic Planning",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2506.04651-agents-of-change-self-evolving-llm-agents-for-strategic-planning.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-agentic-neural-networks%3A-self-evolving-multi-agent-systems-via-textual-backpropagation",
    "label": "Deep Academic Review: Agentic Neural Networks: Self-Evolving Multi-Agent Systems via Textual Backpropagation",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2506.09046-agentic-neural-networks-self-evolving-multi-agent-systems-via-textual.md",
    "weight": 4
  },
  {
    "id": "review:2506.09046",
    "label": "Agentic Neural Networks: Self-Evolving Multi-Agent Systems via Textual Backpropagation",
    "type": "paper",
    "url": "https://arxiv.org/abs/2506.09046",
    "summary": "Review file: paper-reviews/review-2506.09046-agentic-neural-networks.md",
    "weight": 4
  },
  {
    "id": "review:2506.10943-self-adapting-language-models-authors-adam-zweiger-jyothish-pari-han-g",
    "label": "Deep Academic Review: Self-Adapting Language Models **Authors**: Adam Zweiger, Jyothish Pari, Han Guo, Ekin Akyurek, Yoon Kim, Pulkit Agrawal **Submitted**: 2025-06-12 (v1), last revised 2025-09-18 (v2) **Code**: https://jyopari.github.io/posts/seal",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2506.10943-self-adapting-language-models-authors-adam-zweiger-jyothish-pari-han-g.md",
    "weight": 4
  },
  {
    "id": "review:2506.13131",
    "label": "AlphaEvolve: A coding agent for scientific and algorithmic discovery",
    "type": "paper",
    "url": "https://arxiv.org/abs/2506.13131",
    "summary": "Review file: paper-reviews/review-2506.13131-alphaevolve.md",
    "weight": 4
  },
  {
    "id": "review:2506.24119",
    "label": "SPIRAL: Self-Play on Zero-Sum Games Incentivizes Reasoning via Multi-Agent Multi-Turn Reinforcement Learning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2506.24119",
    "summary": "Review file: paper-reviews/review-2506.24119-spiral.md",
    "weight": 4
  },
  {
    "id": "review:2507.03616-evoagentx-an-automated-framework-for-evolving-agentic-workflows-author",
    "label": "Deep Academic Review: EvoAgentX: An Automated Framework for Evolving Agentic Workflows **Authors**: Yingxu Wang, Siwei Liu, Jinyuan Fang, Zaiqiao Meng **Submitted**: 2025-07-04 (v1), last revised 2025-09-23 (v2) **Code**: https://github.com/EvoAgentX/EvoAgentX",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2507.03616-evoagentx-an-automated-framework-for-evolving-agentic-workflows-author.md",
    "weight": 4
  },
  {
    "id": "review:2507.19457-gepa-reflective-prompt-evolution-can-outperform-reinforcement-learning",
    "label": "Deep Academic Review: GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning **Authors**: Lakshya A Agrawal, Shangyin Tan, Dilara Soylu, Noah Ziems, Rishi Khare, Krista Opsahl-Ong, Arnav Singhvi, Herumb Shandilya, Michael J Ryan, Meng Jiang, Christopher Potts, Koushik Sen, Alexandros G. Dimakis, Ion Stoica, Dan Klein, Matei Zaharia, Omar Khattab **Submitted**: 2025-07-25 (v1), last revised 2026-02-14 (v2) **Code**: https://github.com/gepa-ai/gepa",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2507.19457-gepa-reflective-prompt-evolution-can-outperform-reinforcement-learning.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-a-survey-of-self-evolving-agents%3A-what%2C-when%2C-how%2C-and-where-to-evolve-on-the-path-to-artificial-super-intelligence",
    "label": "Deep Academic Review: A Survey of Self-Evolving Agents: What, When, How, and Where to Evolve on the Path to Artificial Super Intelligence",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2507.21046-a-survey-of-self-evolving-agents-what-when-how-and-where-to-evolve-on.md",
    "weight": 4
  },
  {
    "id": "review:2508.02085",
    "label": "SE-Agent: Self-Evolution Trajectory Optimization in Multi-Step Reasoning with LLM-Based Agents",
    "type": "paper",
    "url": "https://arxiv.org/abs/2508.02085",
    "summary": "**EN.** SE-Agent treats an agent’s multi-step interaction trajectory as reusable evolutionary material that can be revised, recombined, and refined. **中文。** 这条 review 将论文放入 Evolver 的 **Trajectory optimization / evolutionary reasoning repair** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
    "weight": 4
  },
  {
    "id": "review:2508.04700",
    "label": "SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience",
    "type": "paper",
    "url": "https://arxiv.org/abs/2508.04700",
    "summary": "Review file: paper-reviews/review-2508.04700-seagent.md",
    "weight": 4
  },
  {
    "id": "review:2508.07407",
    "label": "A Comprehensive Survey of Self-Evolving AI Agents: A New Paradigm Bridging Foundation Models and Lifelong Agentic Systems",
    "type": "paper",
    "url": "https://arxiv.org/abs/2508.07407",
    "summary": "Review file: paper-reviews/review-2508.07407-self-evolving-agents-survey.md",
    "weight": 4
  },
  {
    "id": "review:2508.09586",
    "label": "EvoCurr: Self-evolving Curriculum with Behavior Code Generation for Complex Decision-making",
    "type": "paper",
    "url": "https://arxiv.org/abs/2508.09586",
    "summary": "Review file: paper-reviews/review-2508.09586-evocurr.md",
    "weight": 4
  },
  {
    "id": "review:2508.19005",
    "label": "Building Self-Evolving Agents via Experience-Driven Lifelong Learning: A Framework and Benchmark",
    "type": "paper",
    "url": "https://arxiv.org/abs/2508.19005",
    "summary": "Review file: paper-reviews/review-2508.19005-ell-framework.md",
    "weight": 4
  },
  {
    "id": "review:2508.19828",
    "label": "Memory-R1: Enhancing Large Language Model Agents to Manage and Utilize Memories via Reinforcement Learning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2508.19828",
    "summary": "Review file: paper-reviews/review-2508.19828-memory-r1.md",
    "weight": 4
  },
  {
    "id": "review:2509.04575",
    "label": "Bootstrapping Task Spaces for Self-Improvement",
    "type": "paper",
    "url": "https://arxiv.org/abs/2509.04575",
    "summary": "**EN.** Bootstrapping Task Spaces introduces Exploratory Iteration (ExIt), an autocurriculum RL family for training LLMs to perform multi-step self-improvement at inference time. **中文。** 这条 review 将论文放入 Evolver 的 **Autocurriculum / task-space bootstrapping** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
    "weight": 4
  },
  {
    "id": "review:2509.20562",
    "label": "SAMULE: Self-Learning Agents Enhanced by Multi-Level Reflection",
    "type": "paper",
    "url": "https://arxiv.org/abs/2509.20562",
    "summary": "Review file: paper-reviews/review-2509.20562-samule.md",
    "weight": 4
  },
  {
    "id": "review:2509.22502",
    "label": "InfiAgent: Self-Evolving Pyramid Agent Framework for Infinite Scenarios",
    "type": "paper",
    "url": "https://arxiv.org/abs/2509.22502",
    "summary": "Review file: paper-reviews/review-2509.22502-infiagent.md",
    "weight": 4
  },
  {
    "id": "review:2509.25140",
    "label": "ReasoningBank: Scaling Agent Self-Evolving with Reasoning Memory",
    "type": "paper",
    "url": "https://arxiv.org/abs/2509.25140",
    "summary": "Review file: paper-reviews/review-2509.25140-reasoningbank.md",
    "weight": 4
  },
  {
    "id": "review:2509.25541",
    "label": "Vision-Zero: Scalable VLM Self-Evolution via Multi-Agent Self-Play",
    "type": "paper",
    "url": "https://arxiv.org/abs/2509.25541",
    "summary": "**EN.** Vision-Zero extends self-evolution to VLMs using label-free, domain-agnostic competitive visual games generated from arbitrary images. **中文。** 这条 review 将论文放入 Evolver 的 **Vision-language self-evolution / multi-agent self-play** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
    "weight": 4
  },
  {
    "id": "review:2509.26354",
    "label": "Your Agent May Misevolve: Emergent Risks in Self-evolving LLM Agents",
    "type": "paper",
    "url": "https://arxiv.org/abs/2509.26354",
    "summary": "Review file: paper-reviews/review-2509.26354-misevolution.md",
    "weight": 4
  },
  {
    "id": "review:2510.04618",
    "label": "Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models",
    "type": "paper",
    "url": "https://arxiv.org/abs/2510.04618",
    "summary": "Review file: paper-reviews/review-2510.04618-ace.md",
    "weight": 4
  },
  {
    "id": "review:2510.06056",
    "label": "Scientific Algorithm Discovery by Augmenting AlphaEvolve with Deep Research",
    "type": "paper",
    "url": "https://arxiv.org/abs/2510.06056",
    "summary": "Review file: paper-reviews/review-2510.06056-deepevolve.md",
    "weight": 4
  },
  {
    "id": "review:2510.07841",
    "label": "Self-Improving LLM Agents at Test-Time",
    "type": "paper",
    "url": "https://arxiv.org/abs/2510.07841",
    "summary": "Review file: paper-reviews/review-2510.07841-test-time-self-improvement.md",
    "weight": 4
  },
  {
    "id": "review:2510.14253",
    "label": "Towards Agentic Self-Learning LLMs in Search Environment",
    "type": "paper",
    "url": "https://arxiv.org/abs/2510.14253",
    "summary": "Review file: paper-reviews/review-2510.14253-agentic-self-learning.md",
    "weight": 4
  },
  {
    "id": "review:2510.16079",
    "label": "EvolveR: Self-Evolving LLM Agents through an Experience-Driven Lifecycle",
    "type": "paper",
    "url": "https://arxiv.org/abs/2510.16079",
    "summary": "Review file: paper-reviews/review-2510.16079-evolver.md",
    "weight": 4
  },
  {
    "id": "review:2510.17498",
    "label": "Deep Self-Evolving Reasoning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2510.17498",
    "summary": "**EN.** DSER conceptualizes iterative reasoning as a Markov chain where small positive probabilities of improvement can be amplified through many long-horizon parallel processes. **中文。** 这条 review 将论文放入 Evolver 的 **Probabilistic long-horizon reasoning evolution** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
    "weight": 4
  },
  {
    "id": "review:2510.18327",
    "label": "InspectCoder: Dynamic Analysis-Enabled Self Repair through interactive LLM-Debugger Collaboration",
    "type": "paper",
    "url": "https://arxiv.org/abs/2510.18327",
    "summary": "Review file: paper-reviews/review-2510.18327-inspectcoder-debugger-repair.md",
    "weight": 4
  },
  {
    "id": "review:2510.23595",
    "label": "Multi-Agent Evolve: LLM Self-Improve through Co-evolution",
    "type": "paper",
    "url": "https://arxiv.org/abs/2510.23595",
    "summary": "**EN.** MAE uses Proposer, Solver, and Judge agents instantiated from one LLM to self-improve across math, reasoning, and general knowledge tasks. **中文。** 这条 review 将论文放入 Evolver 的 **Proposer-Solver-Judge co-evolution** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
    "weight": 4
  },
  {
    "id": "review:2511.06449",
    "label": "FLEX: Continuous Agent Evolution via Forward Learning from Experience",
    "type": "paper",
    "url": "https://arxiv.org/abs/2511.06449",
    "summary": "**EN.** FLEX proposes gradient-free continuous evolution where agents accumulate structured experience from successes and failures and reuse it for future improvement. **中文。** 这条 review 将论文放入 Evolver 的 **Experience-library continuous agent evolution** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
    "weight": 4
  },
  {
    "id": "review:2511.10395",
    "label": "AgentEvolver: Towards Efficient Self-Evolving Agent System",
    "type": "paper",
    "url": "https://arxiv.org/abs/2511.10395",
    "summary": "Review file: paper-reviews/review-2511.10395-agentevolver.md",
    "weight": 4
  },
  {
    "id": "review:2511.16043",
    "label": "Agent0: Unleashing Self-Evolving Agents from Zero Data via Tool-Integrated Reasoning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2511.16043",
    "summary": "**EN.** Agent0 proposes a fully autonomous loop where a curriculum agent and executor co-evolve from the same base model while tools expand the frontier of solvable tasks. **中文。** 这条 review 将论文放入 Evolver 的 **Zero-data co-evolution / tool-integrated curriculum** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
    "weight": 4
  },
  {
    "id": "review:2511.23473",
    "label": "ThetaEvolve: Test-time Learning on Open Problems",
    "type": "paper",
    "url": "https://arxiv.org/abs/2511.23473",
    "summary": "**EN.** ThetaEvolve extends AlphaEvolve-style program evolution with an open-source, single-LLM framework combining in-context search and RL at test time. **中文。** 这条 review 将论文放入 Evolver 的 **Open-source test-time learning for open problems** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
    "weight": 4
  },
  {
    "id": "review:2512.09108",
    "label": "Evolving Excellence: Automated Optimization of LLM-based Agents",
    "type": "paper",
    "url": "https://arxiv.org/abs/2512.09108",
    "summary": "Review file: paper-reviews/review-2512.09108-artemis-evolving-excellence.md",
    "weight": 4
  },
  {
    "id": "review:2512.22716",
    "label": "Memento-II: Learning by Stateful Reflective Memory",
    "type": "paper",
    "url": "https://arxiv.org/abs/2512.22716",
    "summary": "**EN.** Memento-II offers a theoretical framework for continual experiential learning through stateful reflective memory. **中文。** 这条 review 将论文放入 Evolver 的 **Stateful reflective memory / formal continual learning** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
    "weight": 4
  },
  {
    "id": "review:2601.05280-on-the-limits-of-self-improving-in-large-language-models-the-singulari",
    "label": "Deep Academic Review: On the Limits of Self-Improving in Large Language Models: The Singularity Is Not Near Without Symbolic Model Synthesis **Authors**: Hector Zenil **Submitted**: 2026-01-05 (v1), last revised 2026-02-21 (v2)",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2601.05280-on-the-limits-of-self-improving-in-large-language-models-the-singulari.md",
    "weight": 4
  },
  {
    "id": "review:2602.01983",
    "label": "Evolving from Tool User to Creator via Training-Free Experience Reuse in Multimodal Reasoning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2602.01983",
    "summary": "Review file: paper-reviews/review-2602.01983-uct-tool-user-to-creator.md",
    "weight": 4
  },
  {
    "id": "review:2602.02474",
    "label": "MemSkill: Learning and Evolving Memory Skills for Self-Evolving Agents",
    "type": "paper",
    "url": "https://arxiv.org/abs/2602.02474",
    "summary": "Review file: paper-reviews/review-2602.02474-memskill.md",
    "weight": 4
  },
  {
    "id": "review:2602.23720-the-auton-agentic-ai-framework-authors-sheng-cao-zhao-chang-chang-li-h",
    "label": "Deep Academic Review: The Auton Agentic AI Framework **Authors**: Sheng Cao, Zhao Chang, Chang Li, Hannan Li, Liyao Fu, Ji Tang **Submitted**: 2026-02-27 (v1)",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2602.23720-the-auton-agentic-ai-framework-authors-sheng-cao-zhao-chang-chang-li-h.md",
    "weight": 4
  },
  {
    "id": "review:2603.03290",
    "label": "AriadneMem: Threading the Maze of Lifelong Memory for LLM Agents",
    "type": "paper",
    "url": "https://arxiv.org/abs/2603.03290",
    "summary": "Review file: paper-reviews/review-2603.03290-ariadnemem.md",
    "weight": 4
  },
  {
    "id": "review:2603.07970",
    "label": "Advancing Automated Algorithm Design via Evolutionary Stagewise Design with LLMs",
    "type": "paper",
    "url": "https://arxiv.org/abs/2603.07970",
    "summary": "Review file: paper-reviews/review-2603.07970-evostage-evolutionary-stagewise-design.md",
    "weight": 4
  },
  {
    "id": "review:2603.15255",
    "label": "SAGE: Multi-Agent Self-Evolution for LLM Reasoning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2603.15255",
    "summary": "Review file: paper-reviews/review-2603.15255-sage-multi-agent-self-evolution.md",
    "weight": 4
  },
  {
    "id": "review:2603.19461",
    "label": "Hyperagents: Self-Referential Agents with Metacognitive Self-Modification",
    "type": "paper",
    "url": "https://arxiv.org/abs/2603.19461",
    "summary": "Review file: paper-reviews/review-2603.19461-hyperagents.md",
    "weight": 4
  },
  {
    "id": "review:2603.25928",
    "label": "Self-Organizing Multi-Agent Systems for Continuous Software Development",
    "type": "paper",
    "url": "https://arxiv.org/abs/2603.25928",
    "summary": "Review file: paper-reviews/review-2603.25928-self-organizing-mas-software-dev.md",
    "weight": 4
  },
  {
    "id": "review:2603.28990",
    "label": "Drop the Hierarchy and Roles: How Self-Organizing LLM Agents Outperform Designed Structures",
    "type": "paper",
    "url": "https://arxiv.org/abs/2603.28990",
    "summary": "Review file: paper-reviews/review-2603.28990-self-organizing-llm-agents.md",
    "weight": 4
  },
  {
    "id": "review:2604.01658",
    "label": "CORAL: Towards Autonomous Multi-Agent Evolution for Open-Ended Discovery",
    "type": "paper",
    "url": "https://arxiv.org/abs/2604.01658",
    "summary": "Review file: paper-reviews/review-2604.01658-coral-autonomous-multi-agent-evolution.md",
    "weight": 4
  },
  {
    "id": "review:2604.01687-coevoskills-self-evolving-agent-skills-via-co-evolutionary-verificatio",
    "label": "Deep Academic Review: CoEvoSkills: Self-Evolving Agent Skills via Co-Evolutionary Verification **Authors**: Hanrong Zhang, Shicheng Fan, Henry Peng Zou, Yankai Chen, Zhenting Wang, Jiayu Zhou, Chengze Li, Wei-Chieh Huang, Yifei Yao, Kening Zheng, Xue Liu, Xiaoxiao Li, Philip S. Yu **Submitted**: 2026-04-02 (v1)",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2604.01687-coevoskills-self-evolving-agent-skills-via-co-evolutionary-verificatio.md",
    "weight": 4
  },
  {
    "id": "review:2604.02674",
    "label": "Do Agent Societies Develop Intellectual Elites? The Hidden Power Laws of Collective Cognition in LLM Multi-Agent Systems",
    "type": "paper",
    "url": "https://arxiv.org/abs/2604.02674",
    "summary": "Review file: paper-reviews/review-2604.02674-agent-societies-intellectual-elites.md",
    "weight": 4
  },
  {
    "id": "review:2604.10923",
    "label": "Mem2Evolve: Towards Self-Evolving Agents via Co-Evolutionary Capability Expansion and Experience Distillation",
    "type": "paper",
    "url": "https://arxiv.org/abs/2604.10923",
    "summary": "Review file: paper-reviews/review-2604.10923-mem2evolve-co-evolutionary.md",
    "weight": 4
  },
  {
    "id": "review:2604.15034",
    "label": "Autogenesis: A Self-Evolving Agent Protocol",
    "type": "paper",
    "url": "https://arxiv.org/abs/2604.15034",
    "summary": "Review file: paper-reviews/review-2604.15034-autogenesis.md",
    "weight": 4
  },
  {
    "id": "review:2604.17091",
    "label": "GenericAgent: A Token-Efficient Self-Evolving LLM Agent via Contextual Information Density Maximization (V1.0)",
    "type": "paper",
    "url": "https://arxiv.org/abs/2604.17091",
    "summary": "Review file: paper-reviews/review-2604.17091-genericagent.md",
    "weight": 4
  },
  {
    "id": "review:2604.18131",
    "label": "Training LLM Agents for Spontaneous, Reward-Free Self-Evolution via World Knowledge Exploration",
    "type": "paper",
    "url": "https://arxiv.org/abs/2604.18131",
    "summary": "Review file: paper-reviews/review-2604.18131-native-agency-self-evolution.md",
    "weight": 4
  },
  {
    "id": "review:2605.04677",
    "label": "CodeEvolve: LLM-Driven Evolutionary Optimization with Runtime-Enriched Target Selection for Multi-Language Code Enhancement",
    "type": "paper",
    "url": "https://arxiv.org/abs/2605.04677",
    "summary": "Review file: paper-reviews/review-2605.04677-codeevolve.md",
    "weight": 4
  },
  {
    "id": "review:2605.06614-skillos-learning-skill-curation-for-self-evolving-agents-authors-siru",
    "label": "Deep Academic Review: SkillOS: Learning Skill Curation for Self-Evolving Agents **Authors**: Siru Ouyang, Jun Yan, Yanfei Chen, Rujun Han, Zifeng Wang, Bhavana Dalvi Mishra, Rui Meng, Chun-Liang Li, Yizhu Jiao, Kaiwen Zha, Maohao Shen, Vishy Tirumalashetty, George Lee, Jiawei Han, Tomas Pfister, Chen-Yu Lee **Submitted**: 2026-05-07 (v1)",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2605.06614-skillos-learning-skill-curation-for-self-evolving-agents-authors-siru.md",
    "weight": 4
  },
  {
    "id": "review:2605.09315",
    "label": "Do Self-Evolving Agents Forget? Capability Degradation and Preservation in Lifelong LLM Agent Adaptation",
    "type": "paper",
    "url": "https://arxiv.org/abs/2605.09315",
    "summary": "Review file: paper-reviews/review-2605.09315-self-evolving-agents-forget.md",
    "weight": 4
  },
  {
    "id": "review:2605.18930",
    "label": "OEP: Poisoning Self-Evolving LLM Agents via Locally Correct but Non-Transferable Experiences",
    "type": "paper",
    "url": "https://arxiv.org/abs/2605.18930",
    "summary": "Review file: paper-reviews/review-2605.18930-oep-poisoning.md",
    "weight": 4
  },
  {
    "id": "review:2605.19102",
    "label": "Prompt Optimization for LLM Code Generation via Reinforcement Learning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2605.19102",
    "summary": "Review file: paper-reviews/review-2605.19102-prompt-optimization-rl.md",
    "weight": 4
  },
  {
    "id": "review:papers-without-arxiv-ids-%E2%80%94-placeholder-index",
    "label": "Papers Without arXiv IDs — Placeholder Index",
    "type": "paper",
    "summary": "**EN.** This is not a single paper but a tracking record for papers without arXiv IDs or with non-arXiv sources, including FunSearch and several missing items from the 100-paper list. **中文。** 这条 review 将论文放入 Evolver 的 **Data gap / non-arXiv tracking index** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
    "weight": 3
  },
  {
    "id": "review:placeholder.no.arxiv-papers-without-arxiv-ids-placeholder-index-the-following-papers-from-t",
    "label": "Deep Academic Review: Papers Without arXiv IDs — Placeholder Index The following papers from the 100-paper list did not have arXiv IDs at the time of collection. They are tracked here for future extraction. ## Papers needing arXiv search/extraction | # | Title | Year | Status | |---|-------|------|--------| | 43 | Nature-Inspired Population-Based Evolution of LLMs | 2025 | No arXiv found | | 44 | ES vs GRPO in LLM Post-Training | 2025 | No arXiv found | | 60 | LeDex: Self-Debugging + Code Explanation | 2024 | No arXiv found | | 64 | TTCS: Test-Time Curriculum Synthesis | 2025 | No arXiv found | | 78 | Self-Rewarding PPO | 2024 | No arXiv found | | 79 | Process-based Self-Rewarding | 2024 | No arXiv found | | 86 | MARS: Multi-Agent Collaboration for Reasoning | 2024 | No arXiv found | | 88 | Survey: LLMs for Evolutionary Computation | 2024 | No arXiv found | | 89 | Matching Accuracy: ES vs GRPO | 2025 | No arXiv found | | 93 | Safety for Open-Ended Systems | 2025 | No arXiv found | | 97 | Debate Helps Weak-to-Strong | 2024 | No arXiv found | | 99 | Reward Hacking: Mechanisms & Misalignment | 2025 | No arXiv found | ## Non-arXiv papers | # | Title | Year | Source | |---|-------|------|--------| | 50 | FunSearch: Mathematical Discovery via LLM Evolution | 2023 | Nature — https://www.nature.com/articles/s41586-023-06924-6 |",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-placeholder.no.arxiv-papers-without-arxiv-ids-placeholder-index-the-following-papers-from-t.md",
    "weight": 4
  },
  {
    "id": "paper-gap:a-survey-on-self-evolution-of-large-language-models",
    "label": "A Survey on Self-Evolution of Large Language Models",
    "type": "paper",
    "url": "https://arxiv.org/abs/2404.14387",
    "summary": "LLM self-evolution survey; needed as the top-down taxonomy anchor.",
    "weight": 6
  },
  {
    "id": "concept:coverage-gap",
    "label": "Coverage gap",
    "type": "concept",
    "summary": "Important external paper not yet promoted to a full local review.",
    "weight": 6
  },
  {
    "id": "cluster:coverage-debt",
    "label": "Coverage debt",
    "type": "cluster",
    "summary": "Missing or under-reviewed mainstream research that should be added next.",
    "weight": 9
  },
  {
    "id": "paper-gap:a-survey-of-self-evolving-agents",
    "label": "A Survey of Self-Evolving Agents",
    "type": "paper",
    "url": "https://arxiv.org/abs/2507.21046",
    "summary": "Agent-specific survey; needed to benchmark our scope against an external taxonomy.",
    "weight": 6
  },
  {
    "id": "paper-gap:a-comprehensive-survey-of-self-evolving-ai-agents",
    "label": "A Comprehensive Survey of Self-Evolving AI Agents",
    "type": "paper",
    "url": "https://arxiv.org/abs/2508.07407",
    "summary": "Independent survey candidate; useful for cross-checking missed branches.",
    "weight": 6
  },
  {
    "id": "paper-gap:large-language-models-can-self-improve-at-web-agent-tasks",
    "label": "Large Language Models Can Self-Improve At Web Agent Tasks",
    "type": "paper",
    "url": "https://arxiv.org/abs/2405.20309",
    "summary": "WebArena self-improvement benchmark signal; important for agent eval coverage.",
    "weight": 6
  },
  {
    "id": "paper-gap:opt-bench%3A-evaluating-the-iterative-self-optimization-of-llm-agents-in-large-scale-search-spaces",
    "label": "OPT-BENCH: Evaluating the Iterative Self-Optimization of LLM Agents in Large-Scale Search Spaces",
    "type": "paper",
    "url": "https://arxiv.org/abs/2605.08904",
    "summary": "Benchmark for iterative self-optimization; should become an eval anchor.",
    "weight": 6
  },
  {
    "id": "paper-gap:experiential-reflective-learning-for-self-improving-llm-agents",
    "label": "Experiential Reflective Learning for Self-Improving LLM Agents",
    "type": "paper",
    "url": "https://arxiv.org/abs/2603.24639",
    "summary": "Experience-to-heuristic learning; fills memory/reflection transfer branch.",
    "weight": 6
  },
  {
    "id": "paper-gap:specification-self-correction",
    "label": "Specification Self-Correction",
    "type": "paper",
    "url": "https://arxiv.org/abs/2507.18742",
    "summary": "Turns reward hacking into a diagnostic signal for correcting the objective.",
    "weight": 6
  },
  {
    "id": "paper-gap:inference-time-reward-hacking-in-large-language-models",
    "label": "Inference-Time Reward Hacking in Large Language Models",
    "type": "paper",
    "url": "https://arxiv.org/abs/2506.19248",
    "summary": "Safety baseline for proxy reward over-optimization in inference-time improvement.",
    "weight": 6
  },
  {
    "id": "paper-gap:safety-is-essential-for-responsible-open-ended-systems",
    "label": "Safety is Essential for Responsible Open-Ended Systems",
    "type": "paper",
    "url": "https://arxiv.org/abs/2502.04512",
    "summary": "Open-ended evolution risk framing; needed for governance layer.",
    "weight": 6
  }
] satisfies KnowledgeNode[];

export const generatedKnowledgeEdges = [
  {
    "source": "review:2203.14465",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "concept:agent-learning",
    "target": "cluster:self-evolution-loops",
    "type": "belongs_to",
    "label": "belongs to generated cluster"
  },
  {
    "source": "review:2203.14465",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "concept:code-evolution",
    "target": "cluster:code-and-harness-evolution",
    "type": "belongs_to",
    "label": "belongs to generated cluster"
  },
  {
    "source": "review:2203.14465",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "concept:benchmark%2Feval",
    "target": "cluster:evaluation-and-benchmarks",
    "type": "belongs_to",
    "label": "belongs to generated cluster"
  },
  {
    "source": "review:2203.14465",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "concept:open-ended-evolution",
    "target": "cluster:self-evolution-loops",
    "type": "belongs_to",
    "label": "belongs to generated cluster"
  },
  {
    "source": "review:2203.14465",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "concept:training-time-update",
    "target": "cluster:training-time-self-improvement",
    "type": "belongs_to",
    "label": "belongs to generated cluster"
  },
  {
    "source": "review:2303.11366",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "concept:self-refinement",
    "target": "cluster:self-evolution-loops",
    "type": "belongs_to",
    "label": "belongs to generated cluster"
  },
  {
    "source": "review:2303.11366",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "concept:reflection-memory",
    "target": "cluster:memory-and-reflection",
    "type": "belongs_to",
    "label": "belongs to generated cluster"
  },
  {
    "source": "review:2303.11366",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2303.11366",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2303.11366",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-refine%3A-iterative-refinement-with-self-feedback",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-refine%3A-iterative-refinement-with-self-feedback",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-refine%3A-iterative-refinement-with-self-feedback",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-refine%3A-iterative-refinement-with-self-feedback",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-refine%3A-iterative-refinement-with-self-feedback",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-generative-agents%3A-interactive-simulacra-of-human-behavior",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-generative-agents%3A-interactive-simulacra-of-human-behavior",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-generative-agents%3A-interactive-simulacra-of-human-behavior",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-generative-agents%3A-interactive-simulacra-of-human-behavior",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-generative-agents%3A-interactive-simulacra-of-human-behavior",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2304.03442",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2304.03442",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2304.03442",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2304.03442",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "concept:reward%2Fsafety",
    "target": "cluster:safety-and-governance",
    "type": "belongs_to",
    "label": "belongs to generated cluster"
  },
  {
    "source": "review:2304.03442",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "concept:memory-substrate",
    "target": "cluster:memory-and-reflection",
    "type": "belongs_to",
    "label": "belongs to generated cluster"
  },
  {
    "source": "review:2305.14325",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2305.14325",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2305.14325",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2305.14325",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2305.14325",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2305.16291",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2305.16291",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2305.16291",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2305.16291",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2305.16291",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2308.10144",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2308.10144",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2308.10144",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2308.10144",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2308.10144",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-llmrefine%3A-pinpointing-and-refining-large-language-models-via-fine-grained-actionable-feedback",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-llmrefine%3A-pinpointing-and-refining-large-language-models-via-fine-grained-actionable-feedback",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-llmrefine%3A-pinpointing-and-refining-large-language-models-via-fine-grained-actionable-feedback",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-llmrefine%3A-pinpointing-and-refining-large-language-models-via-fine-grained-actionable-feedback",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-llmrefine%3A-pinpointing-and-refining-large-language-models-via-fine-grained-actionable-feedback",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-weak-to-strong-generalization%3A-eliciting-strong-capabilities-with-weak-supervision",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-weak-to-strong-generalization%3A-eliciting-strong-capabilities-with-weak-supervision",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-weak-to-strong-generalization%3A-eliciting-strong-capabilities-with-weak-supervision",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-weak-to-strong-generalization%3A-eliciting-strong-capabilities-with-weak-supervision",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-weak-to-strong-generalization%3A-eliciting-strong-capabilities-with-weak-supervision",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-play-fine-tuning-converts-weak-language-models-to-strong-language-models",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-play-fine-tuning-converts-weak-language-models-to-strong-language-models",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-play-fine-tuning-converts-weak-language-models-to-strong-language-models",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-play-fine-tuning-converts-weak-language-models-to-strong-language-models",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-play-fine-tuning-converts-weak-language-models-to-strong-language-models",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2401.01335",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2401.01335",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2401.01335",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2401.01335",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2401.01335",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2401.10020",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2401.10020",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2401.10020",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2401.10020",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2401.10020",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-investigate-consolidate-exploit%3A-a-general-strategy-for-inter-task-agent-self-evolution",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-investigate-consolidate-exploit%3A-a-general-strategy-for-inter-task-agent-self-evolution",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-investigate-consolidate-exploit%3A-a-general-strategy-for-inter-task-agent-self-evolution",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-investigate-consolidate-exploit%3A-a-general-strategy-for-inter-task-agent-self-evolution",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-investigate-consolidate-exploit%3A-a-general-strategy-for-inter-task-agent-self-evolution",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-agent-pro%3A-learning-to-evolve-via-policy-level-reflection-and-optimization",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-agent-pro%3A-learning-to-evolve-via-policy-level-reflection-and-optimization",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-agent-pro%3A-learning-to-evolve-via-policy-level-reflection-and-optimization",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-agent-pro%3A-learning-to-evolve-via-policy-level-reflection-and-optimization",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-agent-pro%3A-learning-to-evolve-via-policy-level-reflection-and-optimization",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2402.18381",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2402.18381",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2402.18381",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2402.18381",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2402.18381",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2403.18341",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2403.18341",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2403.18341",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2403.18341",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2403.18341",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2405.06682",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2405.06682",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2405.06682",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2405.06682",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2405.06682",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-reflection-in-llm-agents%3A-effects-on-problem-solving-performance",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-reflection-in-llm-agents%3A-effects-on-problem-solving-performance",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-reflection-in-llm-agents%3A-effects-on-problem-solving-performance",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-reflection-in-llm-agents%3A-effects-on-problem-solving-performance",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-reflection-in-llm-agents%3A-effects-on-problem-solving-performance",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2405.06682",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2406.18532",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2406.18532",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2406.18532",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2406.18532",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2406.18532",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2407.18219",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2407.18219",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2407.18219",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2407.18219",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2407.18219",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2407.19594",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2407.19594",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2407.19594",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2407.19594",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2407.19594",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2408.08435",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2408.08435",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2408.08435",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2408.08435",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2408.08435",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.12147",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.12147",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.12147",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.12147",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.12147",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.12917",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.12917",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.12917",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.12917",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.12917",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-training-language-models-to-self-correct-via-reinforcement-learning",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-training-language-models-to-self-correct-via-reinforcement-learning",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-training-language-models-to-self-correct-via-reinforcement-learning",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-training-language-models-to-self-correct-via-reinforcement-learning",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-training-language-models-to-self-correct-via-reinforcement-learning",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.14051",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.14051",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.14051",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.14051",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.14051",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-curricullm%3A-automatic-task-curricula-design-for-learning-complex-robot-skills-using-large-language-models",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-curricullm%3A-automatic-task-curricula-design-for-learning-complex-robot-skills-using-large-language-models",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-curricullm%3A-automatic-task-curricula-design-for-learning-complex-robot-skills-using-large-language-models",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-curricullm%3A-automatic-task-curricula-design-for-learning-complex-robot-skills-using-large-language-models",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-curricullm%3A-automatic-task-curricula-design-for-learning-complex-robot-skills-using-large-language-models",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-from-code-to-correctness%3A-closing-the-last-mile-of-code-generation-with-hierarchical-debugging",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-from-code-to-correctness%3A-closing-the-last-mile-of-code-generation-with-hierarchical-debugging",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-from-code-to-correctness%3A-closing-the-last-mile-of-code-generation-with-hierarchical-debugging",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-from-code-to-correctness%3A-closing-the-last-mile-of-code-generation-with-hierarchical-debugging",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-from-code-to-correctness%3A-closing-the-last-mile-of-code-generation-with-hierarchical-debugging",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.01215",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.01215",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.01215",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.01215",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.01215",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.04444",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.04444",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.04444",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.04444",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.04444",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-diversity-of-thought-elicits-stronger-reasoning-capabilities-in-multi-agent-debate-frameworks",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-diversity-of-thought-elicits-stronger-reasoning-capabilities-in-multi-agent-debate-frameworks",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-diversity-of-thought-elicits-stronger-reasoning-capabilities-in-multi-agent-debate-frameworks",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-diversity-of-thought-elicits-stronger-reasoning-capabilities-in-multi-agent-debate-frameworks",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-diversity-of-thought-elicits-stronger-reasoning-capabilities-in-multi-agent-debate-frameworks",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.15639-can-large-language-models-invent-algorithms-to-improve-themselves-algo",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.15639-can-large-language-models-invent-algorithms-to-improve-themselves-algo",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.15639-can-large-language-models-invent-algorithms-to-improve-themselves-algo",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.15639-can-large-language-models-invent-algorithms-to-improve-themselves-algo",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.15639-can-large-language-models-invent-algorithms-to-improve-themselves-algo",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.16946",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.16946",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.16946",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.16946",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2410.16946",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-rl-star%3A-theoretical-analysis-of-reinforcement-learning-frameworks-for-self-taught-reasoner",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-rl-star%3A-theoretical-analysis-of-reinforcement-learning-frameworks-for-self-taught-reasoner",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-rl-star%3A-theoretical-analysis-of-reinforcement-learning-frameworks-for-self-taught-reasoner",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-rl-star%3A-theoretical-analysis-of-reinforcement-learning-frameworks-for-self-taught-reasoner",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-rl-star%3A-theoretical-analysis-of-reinforcement-learning-frameworks-for-self-taught-reasoner",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2411.02337",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2411.02337",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2411.02337",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2411.02337",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2411.02337",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2411.02337",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2411.02337",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-improvement-in-language-models%3A-the-sharpening-mechanism",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-improvement-in-language-models%3A-the-sharpening-mechanism",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-improvement-in-language-models%3A-the-sharpening-mechanism",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-improvement-in-language-models%3A-the-sharpening-mechanism",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-improvement-in-language-models%3A-the-sharpening-mechanism",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-progco%3A-program-helps-self-correction-of-large-language-models",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-progco%3A-program-helps-self-correction-of-large-language-models",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-progco%3A-program-helps-self-correction-of-large-language-models",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-progco%3A-program-helps-self-correction-of-large-language-models",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-progco%3A-program-helps-self-correction-of-large-language-models",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.01264",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.01264",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.01264",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.01264",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.01264",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-lifelong-learning-of-large-language-model-based-agents%3A-a-roadmap",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-lifelong-learning-of-large-language-model-based-agents%3A-a-roadmap",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-lifelong-learning-of-large-language-model-based-agents%3A-a-roadmap",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-lifelong-learning-of-large-language-model-based-agents%3A-a-roadmap",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-lifelong-learning-of-large-language-model-based-agents%3A-a-roadmap",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.07278",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.07278",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.07278",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.07278",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.07278",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.11425",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.11425",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.11425",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.11425",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.11425",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-revisit-self-debugging-with-self-generated-tests-for-code-generation",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-revisit-self-debugging-with-self-generated-tests-for-code-generation",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-revisit-self-debugging-with-self-generated-tests-for-code-generation",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-revisit-self-debugging-with-self-generated-tests-for-code-generation",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-revisit-self-debugging-with-self-generated-tests-for-code-generation",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.12793",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.12793",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.12793",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.12793",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2501.12793",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-mona%3A-myopic-optimization-with-non-myopic-approval-can-mitigate-multi-step-reward-hacking",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-mona%3A-myopic-optimization-with-non-myopic-approval-can-mitigate-multi-step-reward-hacking",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-mona%3A-myopic-optimization-with-non-myopic-approval-can-mitigate-multi-step-reward-hacking",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-mona%3A-myopic-optimization-with-non-myopic-approval-can-mitigate-multi-step-reward-hacking",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-mona%3A-myopic-optimization-with-non-myopic-approval-can-mitigate-multi-step-reward-hacking",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-dominated-novelty-search%3A-rethinking-local-competition-in-quality-diversity",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-dominated-novelty-search%3A-rethinking-local-competition-in-quality-diversity",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-dominated-novelty-search%3A-rethinking-local-competition-in-quality-diversity",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-dominated-novelty-search%3A-rethinking-local-competition-in-quality-diversity",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-dominated-novelty-search%3A-rethinking-local-competition-in-quality-diversity",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.00593",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.00593",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.00593",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.00593",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.00593",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.04780-sirius-self-improving-multi-agent-systems-via-bootstrapped-reasoning-a",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.04780-sirius-self-improving-multi-agent-systems-via-bootstrapped-reasoning-a",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.04780-sirius-self-improving-multi-agent-systems-via-bootstrapped-reasoning-a",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.04780-sirius-self-improving-multi-agent-systems-via-bootstrapped-reasoning-a",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.04780-sirius-self-improving-multi-agent-systems-via-bootstrapped-reasoning-a",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-evolving-llms'-self-refinement-capability-via-synergistic-training-inference-optimization",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-evolving-llms'-self-refinement-capability-via-synergistic-training-inference-optimization",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-evolving-llms'-self-refinement-capability-via-synergistic-training-inference-optimization",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-evolving-llms'-self-refinement-capability-via-synergistic-training-inference-optimization",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-evolving-llms'-self-refinement-capability-via-synergistic-training-inference-optimization",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-autoagent%3A-a-fully-automated-and-zero-code-framework-for-llm-agents",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-autoagent%3A-a-fully-automated-and-zero-code-framework-for-llm-agents",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-autoagent%3A-a-fully-automated-and-zero-code-framework-for-llm-agents",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-autoagent%3A-a-fully-automated-and-zero-code-framework-for-llm-agents",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-autoagent%3A-a-fully-automated-and-zero-code-framework-for-llm-agents",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.12110",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.12110",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.12110",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.12110",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.12110",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.12110",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.12110",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-star-sql%3A-self-taught-reasoner-for-text-to-sql",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-star-sql%3A-self-taught-reasoner-for-text-to-sql",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-star-sql%3A-self-taught-reasoner-for-text-to-sql",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-star-sql%3A-self-taught-reasoner-for-text-to-sql",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-star-sql%3A-self-taught-reasoner-for-text-to-sql",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-advances-and-challenges-in-foundation-agents%3A-from-brain-inspired-intelligence-to-evolutionary%2C-collaborative%2C-and-safe-systems",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-advances-and-challenges-in-foundation-agents%3A-from-brain-inspired-intelligence-to-evolutionary%2C-collaborative%2C-and-safe-systems",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-advances-and-challenges-in-foundation-agents%3A-from-brain-inspired-intelligence-to-evolutionary%2C-collaborative%2C-and-safe-systems",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-advances-and-challenges-in-foundation-agents%3A-from-brain-inspired-intelligence-to-evolutionary%2C-collaborative%2C-and-safe-systems",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-advances-and-challenges-in-foundation-agents%3A-from-brain-inspired-intelligence-to-evolutionary%2C-collaborative%2C-and-safe-systems",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.15228",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.15228",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.15228",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.15228",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.15228",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.20073",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.20073",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.20073",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.20073",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.20073",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.21024",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.21024",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.21024",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.21024",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2504.21024",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.00234-self-generated-in-context-examples-improve-llm-agents-for-sequential-d",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.00234-self-generated-in-context-examples-improve-llm-agents-for-sequential-d",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.00234-self-generated-in-context-examples-improve-llm-agents-for-sequential-d",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.00234-self-generated-in-context-examples-improve-llm-agents-for-sequential-d",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.00234-self-generated-in-context-examples-improve-llm-agents-for-sequential-d",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.03335",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.03335",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.03335",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.03335",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.03335",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-rlsr%3A-reinforcement-learning-from-self-reward",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-rlsr%3A-reinforcement-learning-from-self-reward",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-rlsr%3A-reinforcement-learning-from-self-reward",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-rlsr%3A-reinforcement-learning-from-self-reward",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-rlsr%3A-reinforcement-learning-from-self-reward",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-evolving-curriculum-for-llm-reasoning",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-evolving-curriculum-for-llm-reasoning",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-evolving-curriculum-for-llm-reasoning",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-evolving-curriculum-for-llm-reasoning",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-evolving-curriculum-for-llm-reasoning",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.14970",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.14970",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.14970",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-how-memory-management-impacts-llm-agents%3A-an-empirical-study-of-experience-following-behavior",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-how-memory-management-impacts-llm-agents%3A-an-empirical-study-of-experience-following-behavior",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-how-memory-management-impacts-llm-agents%3A-an-empirical-study-of-experience-following-behavior",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-how-memory-management-impacts-llm-agents%3A-an-empirical-study-of-experience-following-behavior",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-how-memory-management-impacts-llm-agents%3A-an-empirical-study-of-experience-following-behavior",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-reflectevo%3A-improving-meta-introspection-of-small-llms-by-learning-self-reflection",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-reflectevo%3A-improving-meta-introspection-of-small-llms-by-learning-self-reflection",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-reflectevo%3A-improving-meta-introspection-of-small-llms-by-learning-self-reflection",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-reflectevo%3A-improving-meta-introspection-of-small-llms-by-learning-self-reflection",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-reflectevo%3A-improving-meta-introspection-of-small-llms-by-learning-self-reflection",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.18646",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.18646",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.18646",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.18646",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.18646",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.22954",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.22954",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.22954",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.22954",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.22954",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-correcting-code-generation-using-small-language-models",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-correcting-code-generation-using-small-language-models",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-correcting-code-generation-using-small-language-models",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-correcting-code-generation-using-small-language-models",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-correcting-code-generation-using-small-language-models",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-challenging-language-model-agents",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-challenging-language-model-agents",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-challenging-language-model-agents",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-challenging-language-model-agents",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-challenging-language-model-agents",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.04651",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.04651",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.04651",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.04651",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.04651",
    "target": "concept:multi-agent",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "concept:multi-agent",
    "target": "cluster:multi-agent-evolution",
    "type": "belongs_to",
    "label": "belongs to generated cluster"
  },
  {
    "source": "review:deep-academic-review%3A-agents-of-change%3A-self-evolving-llm-agents-for-strategic-planning",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-agents-of-change%3A-self-evolving-llm-agents-for-strategic-planning",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-agents-of-change%3A-self-evolving-llm-agents-for-strategic-planning",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-agents-of-change%3A-self-evolving-llm-agents-for-strategic-planning",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-agents-of-change%3A-self-evolving-llm-agents-for-strategic-planning",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-agentic-neural-networks%3A-self-evolving-multi-agent-systems-via-textual-backpropagation",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-agentic-neural-networks%3A-self-evolving-multi-agent-systems-via-textual-backpropagation",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-agentic-neural-networks%3A-self-evolving-multi-agent-systems-via-textual-backpropagation",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-agentic-neural-networks%3A-self-evolving-multi-agent-systems-via-textual-backpropagation",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-agentic-neural-networks%3A-self-evolving-multi-agent-systems-via-textual-backpropagation",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.09046",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.09046",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.09046",
    "target": "concept:multi-agent",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.09046",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.10943-self-adapting-language-models-authors-adam-zweiger-jyothish-pari-han-g",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.10943-self-adapting-language-models-authors-adam-zweiger-jyothish-pari-han-g",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.10943-self-adapting-language-models-authors-adam-zweiger-jyothish-pari-han-g",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.10943-self-adapting-language-models-authors-adam-zweiger-jyothish-pari-han-g",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.10943-self-adapting-language-models-authors-adam-zweiger-jyothish-pari-han-g",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.13131",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.13131",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.13131",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.13131",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.13131",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.24119",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.24119",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.24119",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.24119",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2506.24119",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2507.03616-evoagentx-an-automated-framework-for-evolving-agentic-workflows-author",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2507.03616-evoagentx-an-automated-framework-for-evolving-agentic-workflows-author",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2507.03616-evoagentx-an-automated-framework-for-evolving-agentic-workflows-author",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2507.03616-evoagentx-an-automated-framework-for-evolving-agentic-workflows-author",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2507.03616-evoagentx-an-automated-framework-for-evolving-agentic-workflows-author",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2507.19457-gepa-reflective-prompt-evolution-can-outperform-reinforcement-learning",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2507.19457-gepa-reflective-prompt-evolution-can-outperform-reinforcement-learning",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2507.19457-gepa-reflective-prompt-evolution-can-outperform-reinforcement-learning",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2507.19457-gepa-reflective-prompt-evolution-can-outperform-reinforcement-learning",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2507.19457-gepa-reflective-prompt-evolution-can-outperform-reinforcement-learning",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-a-survey-of-self-evolving-agents%3A-what%2C-when%2C-how%2C-and-where-to-evolve-on-the-path-to-artificial-super-intelligence",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-a-survey-of-self-evolving-agents%3A-what%2C-when%2C-how%2C-and-where-to-evolve-on-the-path-to-artificial-super-intelligence",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-a-survey-of-self-evolving-agents%3A-what%2C-when%2C-how%2C-and-where-to-evolve-on-the-path-to-artificial-super-intelligence",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-a-survey-of-self-evolving-agents%3A-what%2C-when%2C-how%2C-and-where-to-evolve-on-the-path-to-artificial-super-intelligence",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-a-survey-of-self-evolving-agents%3A-what%2C-when%2C-how%2C-and-where-to-evolve-on-the-path-to-artificial-super-intelligence",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.02085",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.02085",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.02085",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.04700",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.04700",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.04700",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.04700",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.04700",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.07407",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.07407",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.07407",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.07407",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.07407",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.09586",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.09586",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.09586",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.09586",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.19005",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.19005",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.19005",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.19005",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.19005",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.19828",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.19828",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.19828",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.19828",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2508.19828",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.04575",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.04575",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.04575",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.20562",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.20562",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.20562",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.20562",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.20562",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.22502",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.22502",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.22502",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.22502",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.22502",
    "target": "concept:multi-agent",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.25140",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.25140",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.25140",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.25140",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.25140",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.25541",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.25541",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.25541",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.25541",
    "target": "concept:multi-agent",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.25541",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.26354",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.26354",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.26354",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.26354",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.26354",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.04618",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.04618",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.04618",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.04618",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.04618",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.06056",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.06056",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.06056",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.06056",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.06056",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.07841",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.07841",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.07841",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.07841",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.07841",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.14253",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.14253",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.14253",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.14253",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.14253",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.16079",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.16079",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.16079",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.16079",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.16079",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.17498",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.17498",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.18327",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.18327",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.18327",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.18327",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.18327",
    "target": "concept:multi-agent",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.23595",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.23595",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.23595",
    "target": "concept:multi-agent",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.23595",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.06449",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.06449",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.06449",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.06449",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.06449",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.06449",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.10395",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.10395",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.10395",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.10395",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.10395",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.16043",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.16043",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.16043",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.16043",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.23473",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.23473",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.23473",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2511.23473",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2512.09108",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2512.09108",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2512.09108",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2512.09108",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2512.09108",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2512.22716",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2512.22716",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2512.22716",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2512.22716",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2512.22716",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2512.22716",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2512.22716",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2601.05280-on-the-limits-of-self-improving-in-large-language-models-the-singulari",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2601.05280-on-the-limits-of-self-improving-in-large-language-models-the-singulari",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2601.05280-on-the-limits-of-self-improving-in-large-language-models-the-singulari",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2601.05280-on-the-limits-of-self-improving-in-large-language-models-the-singulari",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2601.05280-on-the-limits-of-self-improving-in-large-language-models-the-singulari",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.01983",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.01983",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.01983",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.01983",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.01983",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.02474",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.02474",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.02474",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.02474",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.02474",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.23720-the-auton-agentic-ai-framework-authors-sheng-cao-zhao-chang-chang-li-h",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.23720-the-auton-agentic-ai-framework-authors-sheng-cao-zhao-chang-chang-li-h",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.23720-the-auton-agentic-ai-framework-authors-sheng-cao-zhao-chang-chang-li-h",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.23720-the-auton-agentic-ai-framework-authors-sheng-cao-zhao-chang-chang-li-h",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2602.23720-the-auton-agentic-ai-framework-authors-sheng-cao-zhao-chang-chang-li-h",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.03290",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.03290",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.03290",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.03290",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.03290",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.07970",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.07970",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.07970",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.07970",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.07970",
    "target": "concept:multi-agent",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.15255",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.15255",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.15255",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.15255",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.15255",
    "target": "concept:multi-agent",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.19461",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.19461",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.19461",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.19461",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.19461",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.25928",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.25928",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.25928",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.25928",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.25928",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.28990",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.28990",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.28990",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.28990",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2603.28990",
    "target": "concept:multi-agent",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.01658",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.01658",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.01658",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.01658",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.01658",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.01687-coevoskills-self-evolving-agent-skills-via-co-evolutionary-verificatio",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.01687-coevoskills-self-evolving-agent-skills-via-co-evolutionary-verificatio",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.01687-coevoskills-self-evolving-agent-skills-via-co-evolutionary-verificatio",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.01687-coevoskills-self-evolving-agent-skills-via-co-evolutionary-verificatio",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.01687-coevoskills-self-evolving-agent-skills-via-co-evolutionary-verificatio",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.02674",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.02674",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.02674",
    "target": "concept:multi-agent",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.02674",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.10923",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.10923",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.10923",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.10923",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.10923",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.15034",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.15034",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.15034",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.15034",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.15034",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.17091",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.17091",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.17091",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.17091",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.17091",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.18131",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.18131",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.18131",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.18131",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2604.18131",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.04677",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.04677",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.04677",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.04677",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.04677",
    "target": "concept:training-time-update",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.06614-skillos-learning-skill-curation-for-self-evolving-agents-authors-siru",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.06614-skillos-learning-skill-curation-for-self-evolving-agents-authors-siru",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.06614-skillos-learning-skill-curation-for-self-evolving-agents-authors-siru",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.06614-skillos-learning-skill-curation-for-self-evolving-agents-authors-siru",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.06614-skillos-learning-skill-curation-for-self-evolving-agents-authors-siru",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.09315",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.09315",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.09315",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.09315",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.09315",
    "target": "concept:memory-substrate",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.18930",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.18930",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.18930",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.18930",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.18930",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.19102",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.19102",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.19102",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.19102",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2605.19102",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:papers-without-arxiv-ids-%E2%80%94-placeholder-index",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:papers-without-arxiv-ids-%E2%80%94-placeholder-index",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:papers-without-arxiv-ids-%E2%80%94-placeholder-index",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:papers-without-arxiv-ids-%E2%80%94-placeholder-index",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:papers-without-arxiv-ids-%E2%80%94-placeholder-index",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:placeholder.no.arxiv-papers-without-arxiv-ids-placeholder-index-the-following-papers-from-t",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:placeholder.no.arxiv-papers-without-arxiv-ids-placeholder-index-the-following-papers-from-t",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:placeholder.no.arxiv-papers-without-arxiv-ids-placeholder-index-the-following-papers-from-t",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:placeholder.no.arxiv-papers-without-arxiv-ids-placeholder-index-the-following-papers-from-t",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:placeholder.no.arxiv-papers-without-arxiv-ids-placeholder-index-the-following-papers-from-t",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "paper-gap:a-survey-on-self-evolution-of-large-language-models",
    "target": "concept:coverage-gap",
    "type": "belongs_to",
    "label": "needs review"
  },
  {
    "source": "concept:coverage-gap",
    "target": "cluster:coverage-debt",
    "type": "belongs_to",
    "label": "belongs to coverage debt"
  },
  {
    "source": "paper-gap:a-survey-of-self-evolving-agents",
    "target": "concept:coverage-gap",
    "type": "belongs_to",
    "label": "needs review"
  },
  {
    "source": "paper-gap:a-comprehensive-survey-of-self-evolving-ai-agents",
    "target": "concept:coverage-gap",
    "type": "belongs_to",
    "label": "needs review"
  },
  {
    "source": "paper-gap:large-language-models-can-self-improve-at-web-agent-tasks",
    "target": "concept:coverage-gap",
    "type": "belongs_to",
    "label": "needs review"
  },
  {
    "source": "paper-gap:opt-bench%3A-evaluating-the-iterative-self-optimization-of-llm-agents-in-large-scale-search-spaces",
    "target": "concept:coverage-gap",
    "type": "belongs_to",
    "label": "needs review"
  },
  {
    "source": "paper-gap:experiential-reflective-learning-for-self-improving-llm-agents",
    "target": "concept:coverage-gap",
    "type": "belongs_to",
    "label": "needs review"
  },
  {
    "source": "paper-gap:specification-self-correction",
    "target": "concept:coverage-gap",
    "type": "belongs_to",
    "label": "needs review"
  },
  {
    "source": "paper-gap:inference-time-reward-hacking-in-large-language-models",
    "target": "concept:coverage-gap",
    "type": "belongs_to",
    "label": "needs review"
  },
  {
    "source": "paper-gap:safety-is-essential-for-responsible-open-ended-systems",
    "target": "concept:coverage-gap",
    "type": "belongs_to",
    "label": "needs review"
  }
] satisfies KnowledgeEdge[];
