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
    "summary": "Generated full-corpus research cluster.",
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
    "summary": "Generated full-corpus research cluster.",
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
    "summary": "Generated full-corpus research cluster.",
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
    "summary": "Generated full-corpus research cluster.",
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
    "summary": "Generated full-corpus research cluster.",
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
    "summary": "Generated full-corpus research cluster.",
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
    "id": "review:2402.18381---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2402.18381---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2402.18381---**authors**%3A-robert-tjarko-lange%2C-yingtao-tian%2C-yujin-tang---**year**%3A-2024-%23%23-abstract-investigates-whether-llms-can-implement-evolutionary-optimization-algorithms.-introduces-prompting-strategy-with-least-to-most-sorting-of-discretized-population-members-and-llm-proposed-improvements.-creates-evollm-that-outperforms-random-search-and-gaussian-hill-climbing-on-bbob-functions-and-neuroevolution-tasks.-llms-act-as-plug-in-in-context-recombination-operators.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-02-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q1---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "label": "Deep Academic Review: Large Language Models As Evolution Strategies - **arXiv ID**: 2402.18381 - **URL**: https://arxiv.org/abs/2402.18381 - **PDF**: https://arxiv.org/pdf/2402.18381 - **Authors**: Robert Tjarko Lange, Yingtao Tian, Yujin Tang - **Year**: 2024 ## Abstract Investigates whether LLMs can implement evolutionary optimization algorithms. Introduces prompting strategy with least-to-most sorting of discretized population members and LLM-proposed improvements. Creates EvoLLM that outperforms random search and Gaussian Hill Climbing on BBOB functions and neuroevolution tasks. LLMs act as plug-in in-context recombination operators. ## Full Content (Extracted from batch search — full paper available at PDF link above) ## gBrain Temporal Metadata - content_timestamp: 2024-02-01 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2024-Q1 - timestamp_confidence: derived - timestamp_source: arxiv_id_month_fallback",
    "type": "paper",
    "url": "https://arxiv.org/abs/2402.18381 - **URL**: https://arxiv.org/abs/2402.18381 - **PDF**: https://arxiv.org/pdf/2402.18381 - **Authors**: Robert Tjarko Lange, Yingtao Tian, Yujin Tang - **Year**: 2024 ## Abstract Investigates whether LLMs can implement evolutionary optimization algorithms. Introduces prompting strategy with least-to-most sorting of discretized population members and LLM-proposed improvements. Creates EvoLLM that outperforms random search and Gaussian Hill Climbing on BBOB functions and neuroevolution tasks. LLMs act as plug-in in-context recombination operators. ## Full Content (Extracted from batch search — full paper available at PDF link above) ## gBrain Temporal Metadata - content_timestamp: 2024-02-01 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2024-Q1 - timestamp_confidence: derived - timestamp_source: arxiv_id_month_fallback",
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
    "id": "review:2406.18532---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2406.18532---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2406.18532---**authors**%3A-wangchunshu-zhou%2C-yixin-ou%2C-shengwei-ding%2C-long-li%2C-jialong-wu%2C-tiannan-wang%2C-jiamin-chen%2C-shuai-wang%2C-xiaohua-xu%2C-ningyu-zhang%2C-huajun-chen%2C-yuchen-eleanor-jiang---**published**%3A-2024-06-26-%23%23-abstract-the-ai-community-has-been-exploring-a-pathway-to-artificial-general-intelligence-(agi)-by-developing-%22language-agents%22%2C-which-are-complex-large-language-models-(llms)-pipelines-involving-both-prompting-techniques-and-tool-usage-methods.-while-language-agents-have-demonstrated-impressive-capabilities-for-many-real-world-tasks%2C-a-fundamental-limitation-of-current-language-agents-research-is-that-they-are-model-centric%2C-or-engineering-centric.-that's-to-say%2C-the-progress-on-prompts%2C-tools%2C-and-pipelines-of-language-agents-requires-substantial-manual-engineering-efforts-from-human-experts-rather-than-automatically-learning-from-data.-we-believe-the-transition-from-model-centric%2C-or-engineering-centric%2C-to-data-centric%2C-i.e.%2C-the-ability-of-language-agents-to-autonomously-learn-and-evolve-in-environments%2C-is-the-key-for-them-to-possibly-achieve-agi.-in-this-work%2C-we-introduce-agent-symbolic-learning%2C-a-systematic-framework-that-enables-language-agents-to-optimize-themselves-on-their-own-in-a-data-centric-way-using-symbolic-optimizers.-specifically%2C-we-consider-agents-as-symbolic-networks-where-learnable-weights-are-defined-by-prompts%2C-tools%2C-and-the-way-they-are-stacked-together.-agent-symbolic-learning-is-designed-to-optimize-the-symbolic-network-within-language-agents-by-mimicking-two-fundamental-algorithms-in-connectionist-learning%3A-back-propagation-and-gradient-descent.-instead-of-dealing-with-numeric-weights%2C-agent-symbolic-learning-works-with-natural-language-simulacrums-of-weights%2C-loss%2C-and-gradients.-we-conduct-proof-of-concept-experiments-on-both-standard-benchmarks-and-complex-real-world-tasks-and-show-that-agent-symbolic-learning-enables-language-agents-to-update-themselves-after-being-created-and-deployed-in-the-wild%2C-resulting-in-%22self-evolving-agents%22.-%23%23-full-content-computer-science-%3E-computation-and-language-arxiv%3A2406.18532-(cs)-submitted-on-26-jun-2024-%23-symbolic-learning-enables-self-evolving-agents-authors%3A-wangchunshu-zhou%2C-yixin-ou%2C-shengwei-ding%2C-long-li%2C-jialong-wu%2C-tiannan-wang%2C-jiamin-chen%2C-shuai-wang%2C-xiaohua-xu%2C-ningyu-zhang%2C-huajun-chen%2C-yuchen-eleanor-jiang-comments%3A-code-available-at-this-https-url-subjects%3A-computation-and-language-(cs.cl)%3B-artificial-intelligence-(cs.ai)%3B-machine-learning-(cs.lg)-cite-as%3A-arxiv%3A2406.18532-%5Bcs.cl%5D-doi%3A-https%3A%2F%2Fdoi.org%2F10.48550%2Farxiv.2406.18532-%23%23-submission-history-from%3A-wangchunshu-zhou-v1%3A-wed%2C-26-jun-2024-17%3A59%3A18-utc-(563-kb)-access-paper%3A---view-pdf%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2406.18532---html-(experimental)%3A-https%3A%2F%2Farxiv.org%2Fhtml%2F2406.18532v1---tex-source%3A-https%3A%2F%2Farxiv.org%2Fsrc%2F2406.18532-license%3A-http%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-06-26---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q2---timestamp_confidence%3A-derived---timestamp_source%3A-published_field",
    "label": "Deep Academic Review: Symbolic Learning Enables Self-Evolving Agents - **arXiv ID**: 2406.18532 - **URL**: https://arxiv.org/abs/2406.18532 - **PDF**: https://arxiv.org/pdf/2406.18532 - **Authors**: Wangchunshu Zhou, Yixin Ou, Shengwei Ding, Long Li, Jialong Wu, Tiannan Wang, Jiamin Chen, Shuai Wang, Xiaohua Xu, Ningyu Zhang, Huajun Chen, Yuchen Eleanor Jiang - **Published**: 2024-06-26 ## Abstract The AI community has been exploring a pathway to artificial general intelligence (AGI) by developing \"language agents\", which are complex large language models (LLMs) pipelines involving both prompting techniques and tool usage methods. While language agents have demonstrated impressive capabilities for many real-world tasks, a fundamental limitation of current language agents research is that they are model-centric, or engineering-centric. That's to say, the progress on prompts, tools, and pipelines of language agents requires substantial manual engineering efforts from human experts rather than automatically learning from data. We believe the transition from model-centric, or engineering-centric, to data-centric, i.e., the ability of language agents to autonomously learn and evolve in environments, is the key for them to possibly achieve AGI. In this work, we introduce agent symbolic learning, a systematic framework that enables language agents to optimize themselves on their own in a data-centric way using symbolic optimizers. Specifically, we consider agents as symbolic networks where learnable weights are defined by prompts, tools, and the way they are stacked together. Agent symbolic learning is designed to optimize the symbolic network within language agents by mimicking two fundamental algorithms in connectionist learning: back-propagation and gradient descent. Instead of dealing with numeric weights, agent symbolic learning works with natural language simulacrums of weights, loss, and gradients. We conduct proof-of-concept experiments on both standard benchmarks and complex real-world tasks and show that agent symbolic learning enables language agents to update themselves after being created and deployed in the wild, resulting in \"self-evolving agents\". ## Full Content Computer Science > Computation and Language arXiv:2406.18532 (cs) Submitted on 26 Jun 2024 # Symbolic Learning Enables Self-Evolving Agents Authors: Wangchunshu Zhou, Yixin Ou, Shengwei Ding, Long Li, Jialong Wu, Tiannan Wang, Jiamin Chen, Shuai Wang, Xiaohua Xu, Ningyu Zhang, Huajun Chen, Yuchen Eleanor Jiang Comments: Code available at this https URL Subjects: Computation and Language (cs.CL); Artificial Intelligence (cs.AI); Machine Learning (cs.LG) Cite as: arXiv:2406.18532 [cs.CL] DOI: https://doi.org/10.48550/arXiv.2406.18532 ## Submission history From: Wangchunshu Zhou v1: Wed, 26 Jun 2024 17:59:18 UTC (563 KB) Access Paper: - View PDF: https://arxiv.org/pdf/2406.18532 - HTML (experimental): https://arxiv.org/html/2406.18532v1 - TeX Source: https://arxiv.org/src/2406.18532 License: http://creativecommons.org/licenses/by/4.0/ ## gBrain Temporal Metadata - content_timestamp: 2024-06-26 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2024-Q2 - timestamp_confidence: derived - timestamp_source: published_field",
    "type": "paper",
    "url": "https://arxiv.org/abs/2406.18532 - **URL**: https://arxiv.org/abs/2406.18532 - **PDF**: https://arxiv.org/pdf/2406.18532 - **Authors**: Wangchunshu Zhou, Yixin Ou, Shengwei Ding, Long Li, Jialong Wu, Tiannan Wang, Jiamin Chen, Shuai Wang, Xiaohua Xu, Ningyu Zhang, Huajun Chen, Yuchen Eleanor Jiang - **Published**: 2024-06-26 ## Abstract The AI community has been exploring a pathway to artificial general intelligence (AGI) by developing \"language agents\", which are complex large language models (LLMs) pipelines involving both prompting techniques and tool usage methods. While language agents have demonstrated impressive capabilities for many real-world tasks, a fundamental limitation of current language agents research is that they are model-centric, or engineering-centric. That's to say, the progress on prompts, tools, and pipelines of language agents requires substantial manual engineering efforts from human experts rather than automatically learning from data. We believe the transition from model-centric, or engineering-centric, to data-centric, i.e., the ability of language agents to autonomously learn and evolve in environments, is the key for them to possibly achieve AGI. In this work, we introduce agent symbolic learning, a systematic framework that enables language agents to optimize themselves on their own in a data-centric way using symbolic optimizers. Specifically, we consider agents as symbolic networks where learnable weights are defined by prompts, tools, and the way they are stacked together. Agent symbolic learning is designed to optimize the symbolic network within language agents by mimicking two fundamental algorithms in connectionist learning: back-propagation and gradient descent. Instead of dealing with numeric weights, agent symbolic learning works with natural language simulacrums of weights, loss, and gradients. We conduct proof-of-concept experiments on both standard benchmarks and complex real-world tasks and show that agent symbolic learning enables language agents to update themselves after being created and deployed in the wild, resulting in \"self-evolving agents\". ## Full Content Computer Science > Computation and Language arXiv:2406.18532 (cs) Submitted on 26 Jun 2024 # Symbolic Learning Enables Self-Evolving Agents Authors: Wangchunshu Zhou, Yixin Ou, Shengwei Ding, Long Li, Jialong Wu, Tiannan Wang, Jiamin Chen, Shuai Wang, Xiaohua Xu, Ningyu Zhang, Huajun Chen, Yuchen Eleanor Jiang Comments: Code available at this https URL Subjects: Computation and Language (cs.CL); Artificial Intelligence (cs.AI); Machine Learning (cs.LG) Cite as: arXiv:2406.18532 [cs.CL] DOI: https://doi.org/10.48550/arXiv.2406.18532 ## Submission history From: Wangchunshu Zhou v1: Wed, 26 Jun 2024 17:59:18 UTC (563 KB) Access Paper: - View PDF: https://arxiv.org/pdf/2406.18532 - HTML (experimental): https://arxiv.org/html/2406.18532v1 - TeX Source: https://arxiv.org/src/2406.18532 License: http://creativecommons.org/licenses/by/4.0/ ## gBrain Temporal Metadata - content_timestamp: 2024-06-26 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2024-Q2 - timestamp_confidence: derived - timestamp_source: published_field",
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
    "id": "review:2407.19594-(v2)",
    "label": "Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge",
    "type": "paper",
    "url": "https://arxiv.org/abs/2407.19594 (v2)",
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
    "id": "review:2409.12147---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2409.12147---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2409.12147---**authors**%3A-justin-chih-yao-chen-et-al.---**year**%3A-2024-%23%23-abstract-multi-agent-framework-that-categorizes-problem-difficulty%2C-solving-easy-problems-with-coarse-grained-aggregation-and-hard-ones-with-fine-grained-iterative-multi-agent-refinement.-three-agents%3A-solver%2C-reviewer-(generates-targeted-feedback-based-on-step-wise-rm-scores)%2C-and-refiner-(incorporates-feedback).-one-iteration-beats-self-consistency-by-3.4%25%2C-best-of-k-by-3.2%25%2C-and-self-refine-by-4.0%25.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-09-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q3---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "label": "Deep Academic Review: MAgICoRe: Multi-Agent, Iterative, Coarse-to-Fine Refinement for Reasoning - **arXiv ID**: 2409.12147 - **URL**: https://arxiv.org/abs/2409.12147 - **PDF**: https://arxiv.org/pdf/2409.12147 - **Authors**: Justin Chih-Yao Chen et al. - **Year**: 2024 ## Abstract Multi-agent framework that categorizes problem difficulty, solving easy problems with coarse-grained aggregation and hard ones with fine-grained iterative multi-agent refinement. Three agents: Solver, Reviewer (generates targeted feedback based on step-wise RM scores), and Refiner (incorporates feedback). One iteration beats Self-Consistency by 3.4%, Best-of-k by 3.2%, and Self-Refine by 4.0%. ## Full Content (Extracted from batch search — full paper available at PDF link above) ## gBrain Temporal Metadata - content_timestamp: 2024-09-01 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2024-Q3 - timestamp_confidence: derived - timestamp_source: arxiv_id_month_fallback",
    "type": "paper",
    "url": "https://arxiv.org/abs/2409.12147 - **URL**: https://arxiv.org/abs/2409.12147 - **PDF**: https://arxiv.org/pdf/2409.12147 - **Authors**: Justin Chih-Yao Chen et al. - **Year**: 2024 ## Abstract Multi-agent framework that categorizes problem difficulty, solving easy problems with coarse-grained aggregation and hard ones with fine-grained iterative multi-agent refinement. Three agents: Solver, Reviewer (generates targeted feedback based on step-wise RM scores), and Refiner (incorporates feedback). One iteration beats Self-Consistency by 3.4%, Best-of-k by 3.2%, and Self-Refine by 4.0%. ## Full Content (Extracted from batch search — full paper available at PDF link above) ## gBrain Temporal Metadata - content_timestamp: 2024-09-01 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2024-Q3 - timestamp_confidence: derived - timestamp_source: arxiv_id_month_fallback",
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
    "id": "review:2409.14051---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2409.14051---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2409.14051---**authors**%3A-tongxuan-liu%2C-xingyu-wang%2C-weizhe-huang%2C-wenjiang-xu%2C-yuting-zeng%2C-lei-jiang%2C-hailong-yang%2C-jing-li---**year**%3A-2024-%23%23-abstract-method-to-significantly-reduce-token-cost-in-multi-agent-debates-by-dividing-agents-into-multiple-debate-groups%2C-with-agents-debating-within-groups-and-sharing-interim-results-between-groups.-reduces-total-tokens-by-up-to-51.7%25-while-potentially-enhancing-accuracy-by-up-to-25%25.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-09-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q3---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "label": "Deep Academic Review: GroupDebate: Enhancing the Efficiency of Multi-Agent Debate Using Group Discussion - **arXiv ID**: 2409.14051 - **URL**: https://arxiv.org/abs/2409.14051 - **PDF**: https://arxiv.org/pdf/2409.14051 - **Authors**: Tongxuan Liu, Xingyu Wang, Weizhe Huang, Wenjiang Xu, Yuting Zeng, Lei Jiang, Hailong Yang, Jing Li - **Year**: 2024 ## Abstract Method to significantly reduce token cost in multi-agent debates by dividing agents into multiple debate groups, with agents debating within groups and sharing interim results between groups. Reduces total tokens by up to 51.7% while potentially enhancing accuracy by up to 25%. ## Full Content (Extracted from batch search — full paper available at PDF link above) ## gBrain Temporal Metadata - content_timestamp: 2024-09-01 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2024-Q3 - timestamp_confidence: derived - timestamp_source: arxiv_id_month_fallback",
    "type": "paper",
    "url": "https://arxiv.org/abs/2409.14051 - **URL**: https://arxiv.org/abs/2409.14051 - **PDF**: https://arxiv.org/pdf/2409.14051 - **Authors**: Tongxuan Liu, Xingyu Wang, Weizhe Huang, Wenjiang Xu, Yuting Zeng, Lei Jiang, Hailong Yang, Jing Li - **Year**: 2024 ## Abstract Method to significantly reduce token cost in multi-agent debates by dividing agents into multiple debate groups, with agents debating within groups and sharing interim results between groups. Reduces total tokens by up to 51.7% while potentially enhancing accuracy by up to 25%. ## Full Content (Extracted from batch search — full paper available at PDF link above) ## gBrain Temporal Metadata - content_timestamp: 2024-09-01 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2024-Q3 - timestamp_confidence: derived - timestamp_source: arxiv_id_month_fallback",
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
    "id": "review:deep-academic-review%3A-can-large-language-models-invent-algorithms-to-improve-themselves%3F%3A-algorithm-discovery-for-recursive-self-improvement-through-reinforcement-learning",
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
    "id": "review:2411.02337---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2411.02337---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2411.02337---**authors**%3A-(see-arxiv-page-%E2%80%94-thudm)---**year**%3A-2024-%23%23-abstract-self-evolving-online-curriculum-rl-framework-for-training-high-performance-web-agents-using-open-llms.-incorporates-self-evolving-curriculum-generating-new-tasks-from-unsuccessful-attempts%2C-outcome-supervised-reward-model%2C-and-adaptive-rl-strategies.-improves-llama-3.1-8b-from-4.8%25-to-42.4%25-on-webarena-lite%2C-surpassing-gpt-4-turbo-(17.6%25).-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-11-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q4---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "label": "Deep Academic Review: WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning - **arXiv ID**: 2411.02337 - **URL**: https://arxiv.org/abs/2411.02337 - **PDF**: https://arxiv.org/pdf/2411.02337 - **Authors**: (See arXiv page — THUDM) - **Year**: 2024 ## Abstract Self-evolving online curriculum RL framework for training high-performance web agents using open LLMs. Incorporates self-evolving curriculum generating new tasks from unsuccessful attempts, outcome-supervised reward model, and adaptive RL strategies. Improves Llama-3.1-8B from 4.8% to 42.4% on WebArena-Lite, surpassing GPT-4-Turbo (17.6%). ## Full Content (Extracted from batch search — full paper available at PDF link above) ## gBrain Temporal Metadata - content_timestamp: 2024-11-01 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2024-Q4 - timestamp_confidence: derived - timestamp_source: arxiv_id_month_fallback",
    "type": "paper",
    "url": "https://arxiv.org/abs/2411.02337 - **URL**: https://arxiv.org/abs/2411.02337 - **PDF**: https://arxiv.org/pdf/2411.02337 - **Authors**: (See arXiv page — THUDM) - **Year**: 2024 ## Abstract Self-evolving online curriculum RL framework for training high-performance web agents using open LLMs. Incorporates self-evolving curriculum generating new tasks from unsuccessful attempts, outcome-supervised reward model, and adaptive RL strategies. Improves Llama-3.1-8B from 4.8% to 42.4% on WebArena-Lite, surpassing GPT-4-Turbo (17.6%). ## Full Content (Extracted from batch search — full paper available at PDF link above) ## gBrain Temporal Metadata - content_timestamp: 2024-11-01 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2024-Q4 - timestamp_confidence: derived - timestamp_source: arxiv_id_month_fallback",
    "summary": "Review file: paper-reviews/review-2411.02337-webrl-training-llm-web-agents-via-self-evolving-online-curriculum-rein.md",
    "weight": 4
  },
  {
    "id": "review:2411.02337",
    "label": "WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning",
    "type": "paper",
    "url": "https://arxiv.org/abs/2411.02337",
    "summary": "Review file: paper-reviews/review-2411.02337-webrl.md",
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
    "id": "review:deep-academic-review%3A-sirius%3A-self-improving-multi-agent-systems-via-bootstrapped-reasoning-**authors**%3A-wanjia-zhao%2C-mert-yuksekgonul%2C-shirley-wu%2C-james-zou-**submitted**%3A-2025-02-07-(v1)-%23%23-abstract-multi-agent-ai-systems-powered-by-large-language-models-(llms)-are-increasingly-applied-to-solve-complex-tasks.-however%2C-these-systems-often-rely-on-fragile%2C-manually-designed-prompts-and-heuristics%2C-making-optimization-difficult.-a-key-challenge-in-optimizing-multi-agent-systems-is-acquiring-suitable-training-data-for-specialized-agents.-we-introduce-sirius%2C-a-self-improving%2C-reasoning-driven-optimization-framework-for-multi-agent-systems.-central-to-our-approach-is-the-construction-of-an-experience-library%3A-a-repository-of-high-quality-reasoning-trajectories.-the-library-is-built-by-retaining-reasoning-steps-that-lead-to-successful-outcomes%2C-providing-a-robust-training-set-for-optimizing-multi-agent-system.-additionally%2C-we-introduce-a-library-augmentation-procedure-that-refines-unsuccessful-trajectories%2C-further-enriching-the-library.-sirius-boosts-performance-by-2.86%25-to-21.88%25-on-reasoning-and-biomedical-qa-and-enhances-agent-negotiation-in-competitive-settings.-our-results-show-that-sirius-enhances-multi-agent-performance-while-generating-reusable-data-for-self-correction-and-self-play-enhancement-in-the-future.-%23%23-key-contributions-1.-introduces-an-experience-library-of-high-quality-reasoning-trajectories-that-serves-as-a-reusable-knowledge-repository-for-multi-agent-systems%2C-enabling-self-improvement-through-accumulated-successful-reasoning.-2.-proposes-a-library-augmentation-procedure-that-refines-unsuccessful-trajectories-into-useful-training-data%2C-turning-failures-into-learning-opportunities-for-the-multi-agent-system.-3.-demonstrates-performance-improvements-of-2.86%25-to-21.88%25-on-reasoning-and-biomedical-qa-tasks%2C-with-additional-improvements-in-agent-negotiation-in-competitive-settings%2C-showing-the-framework-generates-reusable-data-for-future-self-correction-and-self-play.-%23%23-relevance-to-agent-evolution-sirius-demonstrates-how-multi-agent-systems-can-bootstrap-their-own-improvement-by-building-and-curating-experience-libraries-from-both-successful-and-failed-reasoning-trajectories.-this-trajectory-level-self-improvement-mechanism-represents-a-key-evolutionary-pattern-where-agents-collectively-learn-from-accumulated-experience%2C-providing-a-pathway-for-multi-agent-systems-to-continuously-evolve-beyond-their-initial-capabilities.-%23%23-classification---category%3A-multi-agent-self-improvement---method%3A-experience-library-with-bootstrapped-reasoning---scope%3A-multi-agent-optimization-across-reasoning-and-biomedical-qa-tasks-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-02-07---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "label": "Deep Academic Review: SiriuS: Self-improving Multi-agent Systems via Bootstrapped Reasoning **Authors**: Wanjia Zhao, Mert Yuksekgonul, Shirley Wu, James Zou **Submitted**: 2025-02-07 (v1) ## Abstract Multi-agent AI systems powered by large language models (LLMs) are increasingly applied to solve complex tasks. However, these systems often rely on fragile, manually designed prompts and heuristics, making optimization difficult. A key challenge in optimizing multi-agent systems is acquiring suitable training data for specialized agents. We introduce SiriuS, a self-improving, reasoning-driven optimization framework for multi-agent systems. Central to our approach is the construction of an experience library: a repository of high-quality reasoning trajectories. The library is built by retaining reasoning steps that lead to successful outcomes, providing a robust training set for optimizing multi-agent system. Additionally, we introduce a library augmentation procedure that refines unsuccessful trajectories, further enriching the library. SiriuS boosts performance by 2.86% to 21.88% on reasoning and biomedical QA and enhances agent negotiation in competitive settings. Our results show that SiriuS enhances multi-agent performance while generating reusable data for self-correction and self-play enhancement in the future. ## Key Contributions 1. Introduces an experience library of high-quality reasoning trajectories that serves as a reusable knowledge repository for multi-agent systems, enabling self-improvement through accumulated successful reasoning. 2. Proposes a library augmentation procedure that refines unsuccessful trajectories into useful training data, turning failures into learning opportunities for the multi-agent system. 3. Demonstrates performance improvements of 2.86% to 21.88% on reasoning and biomedical QA tasks, with additional improvements in agent negotiation in competitive settings, showing the framework generates reusable data for future self-correction and self-play. ## Relevance to Agent Evolution SiriuS demonstrates how multi-agent systems can bootstrap their own improvement by building and curating experience libraries from both successful and failed reasoning trajectories. This trajectory-level self-improvement mechanism represents a key evolutionary pattern where agents collectively learn from accumulated experience, providing a pathway for multi-agent systems to continuously evolve beyond their initial capabilities. ## Classification - Category: Multi-agent Self-Improvement - Method: Experience Library with Bootstrapped Reasoning - Scope: Multi-agent optimization across reasoning and biomedical QA tasks ## gBrain Temporal Metadata - content_timestamp: 2025-02-07 - collected_at: 2026-05-22T01:00:00+08:00 - time_slice: 2025-02 - timestamp_confidence: derived - timestamp_source: arxiv submission date",
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
    "id": "review:2502.12110---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2502.12110---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2502.12110---**authors**%3A-(see-arxiv-page)---**year**%3A-2025-(neurips-2025)-%23%23-abstract-novel-agentic-memory-system-for-llm-agents-that-dynamically-organizes-memories-following-the-zettelkasten-method.-creates-interconnected-knowledge-networks-through-dynamic-indexing-and-linking.-when-new-memory-is-added%2C-system-generates-comprehensive-notes-with-contextual-descriptions%2C-keywords%2C-and-tags%2C-then-analyzes-historical-memories-to-establish-connections.-enables-memory-evolution-where-new-memories-trigger-updates-to-existing-ones.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-02-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2025-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "label": "Deep Academic Review: A-Mem: Agentic Memory for LLM Agents - **arXiv ID**: 2502.12110 - **URL**: https://arxiv.org/abs/2502.12110 - **PDF**: https://arxiv.org/pdf/2502.12110 - **Authors**: (See arXiv page) - **Year**: 2025 (NeurIPS 2025) ## Abstract Novel agentic memory system for LLM agents that dynamically organizes memories following the Zettelkasten method. Creates interconnected knowledge networks through dynamic indexing and linking. When new memory is added, system generates comprehensive notes with contextual descriptions, keywords, and tags, then analyzes historical memories to establish connections. Enables memory evolution where new memories trigger updates to existing ones. ## Full Content (Extracted from batch search — full paper available at PDF link above) ## gBrain Temporal Metadata - content_timestamp: 2025-02-01 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2025-02 - timestamp_confidence: derived - timestamp_source: arxiv_id_month_fallback",
    "type": "paper",
    "url": "https://arxiv.org/abs/2502.12110 - **URL**: https://arxiv.org/abs/2502.12110 - **PDF**: https://arxiv.org/pdf/2502.12110 - **Authors**: (See arXiv page) - **Year**: 2025 (NeurIPS 2025) ## Abstract Novel agentic memory system for LLM agents that dynamically organizes memories following the Zettelkasten method. Creates interconnected knowledge networks through dynamic indexing and linking. When new memory is added, system generates comprehensive notes with contextual descriptions, keywords, and tags, then analyzes historical memories to establish connections. Enables memory evolution where new memories trigger updates to existing ones. ## Full Content (Extracted from batch search — full paper available at PDF link above) ## gBrain Temporal Metadata - content_timestamp: 2025-02-01 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2025-02 - timestamp_confidence: derived - timestamp_source: arxiv_id_month_fallback",
    "summary": "Review file: paper-reviews/review-2502.12110-a-mem-agentic-memory-for-llm-agents-arxiv-id-2502-12110-url-https-arxi.md",
    "weight": 4
  },
  {
    "id": "review:2502.12110",
    "label": "A-Mem: Agentic Memory for LLM Agents",
    "type": "paper",
    "url": "https://arxiv.org/abs/2502.12110",
    "summary": "**EN.** A-Mem is indexed as a memory-system paper for LLM agents, focusing on how agents should store, retrieve, and update experience so future behavior improves instead of restarting from zero. **中文。** 这条 review 将论文放入 Evolver 的 **Agentic memory architecture** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
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
    "id": "review:deep-academic-review%3A-self-generated-in-context-examples-improve-llm-agents-for-sequential-decision-making-tasks-**authors**%3A-vishnu-sarukkai%2C-zhiqiang-xie%2C-kayvon-fatahalian-**submitted**%3A-2025-05-01-(v1)-%23%23-abstract-improving-large-language-model-(llm)-agents-for-sequential-decision-making-tasks-typically-requires-extensive-task-specific-knowledge-engineering--custom-prompts%2C-curated-examples%2C-and-specialized-observation%2Faction-spaces.-we-investigate-a-different-approach-where-agents-automatically-improve-by-learning-from-their-own-successful-experiences-without-human-intervention.-our-method-constructs-and-refines-a-database-of-self-generated-trajectories-that-serve-as-in-context-examples-for-future-tasks.-even-naive-accumulation-of-successful-trajectories-yields-substantial-performance-gains-across-three-diverse-benchmarks%3A-alfworld-(73%25-to-89%25)%2C-wordcraft-(55%25-to-64%25)%2C-and-intercode-sql-(75%25-to-79%25).-these-improvements-exceed-those-achieved-by-upgrading-from-gpt-4o-mini-to-gpt-4o-and-match-the-performance-of-allowing-multiple-attempts-per-task.-we-further-enhance-this-approach-with-two-innovations%3A-database-level-curation-using-population-based-training-to-propagate-high-performing-example-collections%2C-and-exemplar-level-curation-that-selectively-retains-trajectories-based-on-their-empirical-utility-as-in-context-examples.-with-these-enhancements%2C-our-method-achieves-93%25-success-on-alfworld--surpassing-approaches-that-use-more-powerful-llms-and-hand-crafted-components.-our-trajectory-bootstrapping-technique-demonstrates-that-agents-can-autonomously-improve-through-experience%2C-offering-a-scalable-alternative-to-labor-intensive-knowledge-engineering.-%23%23-key-contributions-1.-demonstrates-that-naive-accumulation-of-self-generated-successful-trajectories-as-in-context-examples-yields-substantial-performance-gains-(e.g.%2C-alfworld-73%25-to-89%25)%2C-exceeding-the-improvement-from-upgrading-model-tiers-(gpt-4o-mini-to-gpt-4o).-2.-introduces-dual-level-curation%3A-database-level-curation-via-population-based-training-to-propagate-high-performing-example-collections%2C-and-exemplar-level-curation-that-selectively-retains-trajectories-based-on-empirical-utility.-3.-achieves-93%25-success-on-alfworld-with-enhanced-curation%2C-surpassing-approaches-using-more-powerful-llms-and-hand-crafted-components%2C-proving-autonomous-self-improvement-is-a-scalable-alternative-to-knowledge-engineering.-%23%23-relevance-to-agent-evolution-this-work-establishes-a-practical-self-evolution-loop-where-agents-improve-through-their-own-successful-experiences%2C-constructing-trajectory-databases-that-serve-as-evolving-in-context-knowledge.-the-dual-level-curation-mechanism-(database-and-exemplar)-provides-a-principled-approach-to-managing-the-growth-of-an-agent's-experiential-knowledge-base%2C-demonstrating-that-autonomous-trajectory-bootstrapping-can-replace-manual-knowledge-engineering-as-a-driver-of-continuous-agent-improvement.-%23%23-classification---category%3A-autonomous-agent-self-improvement---method%3A-trajectory-bootstrapping-with-dual-level-curation---scope%3A-sequential-decision-making-tasks-across-diverse-benchmarks-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-05-01---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "label": "Deep Academic Review: Self-Generated In-Context Examples Improve LLM Agents for Sequential Decision-Making Tasks **Authors**: Vishnu Sarukkai, Zhiqiang Xie, Kayvon Fatahalian **Submitted**: 2025-05-01 (v1) ## Abstract Improving Large Language Model (LLM) agents for sequential decision-making tasks typically requires extensive task-specific knowledge engineering--custom prompts, curated examples, and specialized observation/action spaces. We investigate a different approach where agents automatically improve by learning from their own successful experiences without human intervention. Our method constructs and refines a database of self-generated trajectories that serve as in-context examples for future tasks. Even naive accumulation of successful trajectories yields substantial performance gains across three diverse benchmarks: ALFWorld (73% to 89%), Wordcraft (55% to 64%), and InterCode-SQL (75% to 79%). These improvements exceed those achieved by upgrading from gpt-4o-mini to gpt-4o and match the performance of allowing multiple attempts per task. We further enhance this approach with two innovations: database-level curation using population-based training to propagate high-performing example collections, and exemplar-level curation that selectively retains trajectories based on their empirical utility as in-context examples. With these enhancements, our method achieves 93% success on ALFWorld--surpassing approaches that use more powerful LLMs and hand-crafted components. Our trajectory bootstrapping technique demonstrates that agents can autonomously improve through experience, offering a scalable alternative to labor-intensive knowledge engineering. ## Key Contributions 1. Demonstrates that naive accumulation of self-generated successful trajectories as in-context examples yields substantial performance gains (e.g., ALFWorld 73% to 89%), exceeding the improvement from upgrading model tiers (gpt-4o-mini to gpt-4o). 2. Introduces dual-level curation: database-level curation via population-based training to propagate high-performing example collections, and exemplar-level curation that selectively retains trajectories based on empirical utility. 3. Achieves 93% success on ALFWorld with enhanced curation, surpassing approaches using more powerful LLMs and hand-crafted components, proving autonomous self-improvement is a scalable alternative to knowledge engineering. ## Relevance to Agent Evolution This work establishes a practical self-evolution loop where agents improve through their own successful experiences, constructing trajectory databases that serve as evolving in-context knowledge. The dual-level curation mechanism (database and exemplar) provides a principled approach to managing the growth of an agent's experiential knowledge base, demonstrating that autonomous trajectory bootstrapping can replace manual knowledge engineering as a driver of continuous agent improvement. ## Classification - Category: Autonomous Agent Self-Improvement - Method: Trajectory Bootstrapping with Dual-Level Curation - Scope: Sequential decision-making tasks across diverse benchmarks ## gBrain Temporal Metadata - content_timestamp: 2025-05-01 - collected_at: 2026-05-22T01:00:00+08:00 - time_slice: 2025-05 - timestamp_confidence: derived - timestamp_source: arxiv submission date",
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
    "id": "review:2505.18646---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2505.18646---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2505.18646---**authors**%3A-siwei-liu%2C-jinyuan-fang%2C-han-zhou%2C-yingxu-wang%2C-zaiqiao-meng---**year**%3A-2025-%23%23-abstract-novel-self-evolving-framework-that-automatically-generates-and-optimises-multi-agent-workflows.-sew-can-automatically-design-agentic-workflows-and-optimise-them-through-self-evolution%2C-bringing-up-to-33%25-improvement-on-livecodebench-compared-to-using-the-backbone-llm-only.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-05-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2025-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "label": "Deep Academic Review: SEW: Self-Evolving Agentic Workflows for Automated Code Generation - **arXiv ID**: 2505.18646 - **URL**: https://arxiv.org/abs/2505.18646 - **PDF**: https://arxiv.org/pdf/2505.18646 - **Authors**: Siwei Liu, Jinyuan Fang, Han Zhou, Yingxu Wang, Zaiqiao Meng - **Year**: 2025 ## Abstract Novel self-evolving framework that automatically generates and optimises multi-agent workflows. SEW can automatically design agentic workflows and optimise them through self-evolution, bringing up to 33% improvement on LiveCodeBench compared to using the backbone LLM only. ## Full Content (Extracted from batch search — full paper available at PDF link above) ## gBrain Temporal Metadata - content_timestamp: 2025-05-01 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2025-05 - timestamp_confidence: derived - timestamp_source: arxiv_id_month_fallback",
    "type": "paper",
    "url": "https://arxiv.org/abs/2505.18646 - **URL**: https://arxiv.org/abs/2505.18646 - **PDF**: https://arxiv.org/pdf/2505.18646 - **Authors**: Siwei Liu, Jinyuan Fang, Han Zhou, Yingxu Wang, Zaiqiao Meng - **Year**: 2025 ## Abstract Novel self-evolving framework that automatically generates and optimises multi-agent workflows. SEW can automatically design agentic workflows and optimise them through self-evolution, bringing up to 33% improvement on LiveCodeBench compared to using the backbone LLM only. ## Full Content (Extracted from batch search — full paper available at PDF link above) ## gBrain Temporal Metadata - content_timestamp: 2025-05-01 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2025-05 - timestamp_confidence: derived - timestamp_source: arxiv_id_month_fallback",
    "summary": "Review file: paper-reviews/review-2505.18646-sew-self-evolving-agentic-workflows-for-automated-code-generation-arxi.md",
    "weight": 4
  },
  {
    "id": "review:2505.22954v3",
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
    "summary": "Generated full-corpus research cluster.",
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
    "id": "review:deep-academic-review%3A-self-adapting-language-models-**authors**%3A-adam-zweiger%2C-jyothish-pari%2C-han-guo%2C-ekin-akyurek%2C-yoon-kim%2C-pulkit-agrawal-**submitted**%3A-2025-06-12-(v1)%2C-last-revised-2025-09-18-(v2)-**code**%3A-https%3A%2F%2Fjyopari.github.io%2Fposts%2Fseal-%23%23-abstract-large-language-models-(llms)-are-powerful-but-static%3B-they-lack-mechanisms-to-adapt-their-weights-in-response-to-new-tasks%2C-knowledge%2C-or-examples.-we-introduce-self-adapting-llms-(seal)%2C-a-framework-that-enables-llms-to-self-adapt-by-generating-their-own-finetuning-data-and-update-directives.-given-a-new-input%2C-the-model-produces-a-self-edit----a-generation-that-may-restructure-the-information-in-different-ways%2C-specify-optimization-hyperparameters%2C-or-invoke-tools-for-data-augmentation-and-gradient-based-updates.-through-supervised-finetuning-(sft)%2C-these-self-edits-result-in-persistent-weight-updates%2C-enabling-lasting-adaptation.-to-train-the-model-to-produce-effective-self-edits%2C-we-use-a-reinforcement-learning-loop-with-the-downstream-performance-of-the-updated-model-as-the-reward-signal.-unlike-prior-approaches-that-rely-on-separate-adaptation-modules-or-auxiliary-networks%2C-seal-directly-uses-the-model's-own-generation-to-control-its-adaptation-process.-experiments-on-knowledge-incorporation-and-few-shot-generalization-show-that-seal-is-a-promising-step-toward-language-models-capable-of-self-directed-adaptation.-%23%23-key-contributions-1.-**self-edit-mechanism-for-weight-adaptation**%3A-introduces-the-concept-of-self-edits----model-generated-outputs-that-restructure-information%2C-specify-hyperparameters%2C-or-invoke-tools-to-produce-its-own-finetuning-data-and-update-directives-2.-**rl-guided-self-adaptation-loop**%3A-uses-reinforcement-learning-with-downstream-task-performance-as-reward-to-train-the-model-to-produce-effective-self-edits%2C-closing-the-loop-between-generation-and-persistent-weight-updates-3.-**direct-model-controlled-adaptation**%3A-unlike-approaches-using-separate-adaptation-modules-or-auxiliary-networks%2C-seal-uses-the-model's-own-generation-capability-to-directly-control-its-adaptation-process-%23%23-relevance-to-agent-evolution-seal-represents-a-significant-step-toward-agents-that-can-autonomously-modify-their-own-parameters%2C-not-just-their-prompts-or-memories.-the-self-edit-mechanism-enables-llms-to-generate-their-own-training-data-and-control-their-own-fine-tuning%2C-creating-a-pathway-for-agents-that-genuinely-improve-their-core-capabilities-over-time.-this-bridges-the-gap-between-prompt-level-self-improvement-(e.g.%2C-voyager%2C-genericagent)-and-true-weight-level-self-modification.-%23%23-classification---category%3A-self-adaptation---method%3A-self-edit-generation-%2B-rl-guided-sft---scope%3A-llm-self-adaptation-via-model-generated-finetuning-data-and-update-directives-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-06-12---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-06---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "label": "Deep Academic Review: Self-Adapting Language Models **Authors**: Adam Zweiger, Jyothish Pari, Han Guo, Ekin Akyurek, Yoon Kim, Pulkit Agrawal **Submitted**: 2025-06-12 (v1), last revised 2025-09-18 (v2) **Code**: https://jyopari.github.io/posts/seal ## Abstract Large language models (LLMs) are powerful but static; they lack mechanisms to adapt their weights in response to new tasks, knowledge, or examples. We introduce Self-Adapting LLMs (SEAL), a framework that enables LLMs to self-adapt by generating their own finetuning data and update directives. Given a new input, the model produces a self-edit -- a generation that may restructure the information in different ways, specify optimization hyperparameters, or invoke tools for data augmentation and gradient-based updates. Through supervised finetuning (SFT), these self-edits result in persistent weight updates, enabling lasting adaptation. To train the model to produce effective self-edits, we use a reinforcement learning loop with the downstream performance of the updated model as the reward signal. Unlike prior approaches that rely on separate adaptation modules or auxiliary networks, SEAL directly uses the model's own generation to control its adaptation process. Experiments on knowledge incorporation and few-shot generalization show that SEAL is a promising step toward language models capable of self-directed adaptation. ## Key Contributions 1. **Self-Edit Mechanism for Weight Adaptation**: Introduces the concept of self-edits -- model-generated outputs that restructure information, specify hyperparameters, or invoke tools to produce its own finetuning data and update directives 2. **RL-Guided Self-Adaptation Loop**: Uses reinforcement learning with downstream task performance as reward to train the model to produce effective self-edits, closing the loop between generation and persistent weight updates 3. **Direct Model-Controlled Adaptation**: Unlike approaches using separate adaptation modules or auxiliary networks, SEAL uses the model's own generation capability to directly control its adaptation process ## Relevance to Agent Evolution SEAL represents a significant step toward agents that can autonomously modify their own parameters, not just their prompts or memories. The self-edit mechanism enables LLMs to generate their own training data and control their own fine-tuning, creating a pathway for agents that genuinely improve their core capabilities over time. This bridges the gap between prompt-level self-improvement (e.g., Voyager, GenericAgent) and true weight-level self-modification. ## Classification - Category: Self-Adaptation - Method: Self-Edit Generation + RL-Guided SFT - Scope: LLM self-adaptation via model-generated finetuning data and update directives ## gBrain Temporal Metadata - content_timestamp: 2025-06-12 - collected_at: 2026-05-22T01:00:00+08:00 - time_slice: 2025-06 - timestamp_confidence: derived - timestamp_source: arxiv submission date",
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
    "id": "review:deep-academic-review%3A-evoagentx%3A-an-automated-framework-for-evolving-agentic-workflows-**authors**%3A-yingxu-wang%2C-siwei-liu%2C-jinyuan-fang%2C-zaiqiao-meng-**submitted**%3A-2025-07-04-(v1)%2C-last-revised-2025-09-23-(v2)-**code**%3A-https%3A%2F%2Fgithub.com%2Fevoagentx%2Fevoagentx-%23%23-abstract-multi-agent-systems-(mas)-have-emerged-as-a-powerful-paradigm-for-orchestrating-large-language-models-(llms)-and-specialized-tools-to-collaboratively-address-complex-tasks.-however%2C-existing-mas-frameworks-often-require-manual-workflow-configuration-and-lack-native-support-for-dynamic-evolution-and-performance-optimization.-in-addition%2C-many-mas-optimization-algorithms-are-not-integrated-into-a-unified-framework.-in-this-paper%2C-we-present-evoagentx%2C-an-open-source-platform-that-automates-the-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows.-evoagentx-employs-a-modular-architecture-consisting-of-five-core-layers%3A-the-basic-components%2C-agent%2C-workflow%2C-evolving%2C-and-evaluation-layers.-specifically%2C-within-the-evolving-layer%2C-evoagentx-integrates-three-mas-optimization-algorithms%2C-textgrad%2C-aflow%2C-and-mipro%2C-to-iteratively-refine-agent-prompts%2C-tool-configurations%2C-and-workflow-topologies.-we-evaluate-evoagentx-on-hotpotqa%2C-mbpp%2C-and-math-for-multi-hop-reasoning%2C-code-generation%2C-and-mathematical-problem-solving%2C-respectively%2C-and-further-assess-it-on-real-world-tasks-using-gaia.-experimental-results-show-that-evoagentx-consistently-achieves-significant-performance-improvements%2C-including-a-7.44%25-increase-in-hotpotqa-f1%2C-a-10.00%25-improvement-in-mbpp-pass%401%2C-a-10.00%25-gain-in-math-solve-accuracy%2C-and-an-overall-accuracy-improvement-of-up-to-20.00%25-on-gaia.-%23%23-key-contributions-1.-**unified-multi-agent-evolution-framework**%3A-presents-evoagentx%2C-an-open-source-platform-with-five-modular-layers-(basic-components%2C-agent%2C-workflow%2C-evolving%2C-evaluation)-that-automates-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows-2.-**integrated-optimization-algorithms**%3A-unifies-three-mas-optimization-algorithms-(textgrad%2C-aflow%2C-mipro)-within-a-single-evolving-layer-to-iteratively-refine-agent-prompts%2C-tool-configurations%2C-and-workflow-topologies-3.-**significant-performance-gains**%3A-achieves-7.44%25-increase-on-hotpotqa-f1%2C-10.00%25-on-mbpp-pass%401%2C-10.00%25-on-math-solve-accuracy%2C-and-up-to-20.00%25-on-gaia%2C-demonstrating-the-value-of-automated-workflow-evolution-%23%23-relevance-to-agent-evolution-evoagentx-directly-addresses-the-automation-of-multi-agent-workflow-evolution%2C-providing-an-end-to-end-platform-where-agent-topologies%2C-prompts%2C-and-tool-configurations-can-be-iteratively-optimized-without-manual-intervention.-its-integration-of-multiple-optimization-algorithms-(textgrad%2C-aflow%2C-mipro)-into-a-unified-framework-represents-a-practical-approach-to-making-agent-self-improvement-systematic-and-reproducible.-%23%23-classification---category%3A-multi-agent-systems---method%3A-evolutionary-workflow-optimization-(textgrad%2C-aflow%2C-mipro)---scope%3A-automated-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-07-04---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-07---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "label": "Deep Academic Review: EvoAgentX: An Automated Framework for Evolving Agentic Workflows **Authors**: Yingxu Wang, Siwei Liu, Jinyuan Fang, Zaiqiao Meng **Submitted**: 2025-07-04 (v1), last revised 2025-09-23 (v2) **Code**: https://github.com/EvoAgentX/EvoAgentX ## Abstract Multi-agent systems (MAS) have emerged as a powerful paradigm for orchestrating large language models (LLMs) and specialized tools to collaboratively address complex tasks. However, existing MAS frameworks often require manual workflow configuration and lack native support for dynamic evolution and performance optimization. In addition, many MAS optimization algorithms are not integrated into a unified framework. In this paper, we present EvoAgentX, an open-source platform that automates the generation, execution, and evolutionary optimization of multi-agent workflows. EvoAgentX employs a modular architecture consisting of five core layers: the basic components, agent, workflow, evolving, and evaluation layers. Specifically, within the evolving layer, EvoAgentX integrates three MAS optimization algorithms, TextGrad, AFlow, and MIPRO, to iteratively refine agent prompts, tool configurations, and workflow topologies. We evaluate EvoAgentX on HotPotQA, MBPP, and MATH for multi-hop reasoning, code generation, and mathematical problem solving, respectively, and further assess it on real-world tasks using GAIA. Experimental results show that EvoAgentX consistently achieves significant performance improvements, including a 7.44% increase in HotPotQA F1, a 10.00% improvement in MBPP pass@1, a 10.00% gain in MATH solve accuracy, and an overall accuracy improvement of up to 20.00% on GAIA. ## Key Contributions 1. **Unified Multi-Agent Evolution Framework**: Presents EvoAgentX, an open-source platform with five modular layers (basic components, agent, workflow, evolving, evaluation) that automates generation, execution, and evolutionary optimization of multi-agent workflows 2. **Integrated Optimization Algorithms**: Unifies three MAS optimization algorithms (TextGrad, AFlow, MIPRO) within a single evolving layer to iteratively refine agent prompts, tool configurations, and workflow topologies 3. **Significant Performance Gains**: Achieves 7.44% increase on HotPotQA F1, 10.00% on MBPP pass@1, 10.00% on MATH solve accuracy, and up to 20.00% on GAIA, demonstrating the value of automated workflow evolution ## Relevance to Agent Evolution EvoAgentX directly addresses the automation of multi-agent workflow evolution, providing an end-to-end platform where agent topologies, prompts, and tool configurations can be iteratively optimized without manual intervention. Its integration of multiple optimization algorithms (TextGrad, AFlow, MIPRO) into a unified framework represents a practical approach to making agent self-improvement systematic and reproducible. ## Classification - Category: Multi-Agent Systems - Method: Evolutionary Workflow Optimization (TextGrad, AFlow, MIPRO) - Scope: Automated generation, execution, and evolutionary optimization of multi-agent workflows ## gBrain Temporal Metadata - content_timestamp: 2025-07-04 - collected_at: 2026-05-22T01:00:00+08:00 - time_slice: 2025-07 - timestamp_confidence: derived - timestamp_source: arxiv submission date",
    "type": "paper",
    "summary": "Review file: paper-reviews/review-2507.03616-evoagentx-an-automated-framework-for-evolving-agentic-workflows-author.md",
    "weight": 4
  },
  {
    "id": "review:deep-academic-review%3A-gepa%3A-reflective-prompt-evolution-can-outperform-reinforcement-learning-**authors**%3A-lakshya-a-agrawal%2C-shangyin-tan%2C-dilara-soylu%2C-noah-ziems%2C-rishi-khare%2C-krista-opsahl-ong%2C-arnav-singhvi%2C-herumb-shandilya%2C-michael-j-ryan%2C-meng-jiang%2C-christopher-potts%2C-koushik-sen%2C-alexandros-g.-dimakis%2C-ion-stoica%2C-dan-klein%2C-matei-zaharia%2C-omar-khattab-**submitted**%3A-2025-07-25-(v1)%2C-last-revised-2026-02-14-(v2)-**code**%3A-https%3A%2F%2Fgithub.com%2Fgepa-ai%2Fgepa-%23%23-abstract-large-language-models-(llms)-are-increasingly-adapted-to-downstream-tasks-via-reinforcement-learning-(rl)-methods-like-group-relative-policy-optimization-(grpo)%2C-which-often-require-thousands-of-rollouts-to-learn-new-tasks.-we-argue-that-the-interpretable-nature-of-language-often-provides-a-much-richer-learning-medium-for-llms%2C-compared-to-policy-gradients-derived-from-sparse%2C-scalar-rewards.-to-test-this%2C-we-introduce-gepa-(genetic-pareto)%2C-a-prompt-optimizer-that-thoroughly-incorporates-natural-language-reflection-to-learn-high-level-rules-from-trial-and-error.-given-any-ai-system-containing-one-or-more-llm-prompts%2C-gepa-samples-trajectories-(e.g.%2C-reasoning%2C-tool-calls%2C-and-tool-outputs)-and-reflects-on-them-in-natural-language-to-diagnose-problems%2C-propose-and-test-prompt-updates%2C-and-combine-complementary-lessons-from-the-pareto-frontier-of-its-own-attempts.-as-a-result-of-gepa's-design%2C-it-can-often-turn-even-just-a-few-rollouts-into-a-large-quality-gain.-across-six-tasks%2C-gepa-outperforms-grpo-by-6%25-on-average-and-by-up-to-20%25%2C-while-using-up-to-35x-fewer-rollouts.-gepa-also-outperforms-the-leading-prompt-optimizer%2C-miprov2%2C-by-over-10%25-(e.g.%2C-%2B12%25-accuracy-on-aime-2025)%2C-and-demonstrates-promising-results-as-an-inference-time-search-strategy-for-code-optimization.-%23%23-key-contributions-1.-**reflective-prompt-evolution-via-natural-language**%3A-introduces-gepa-(genetic-pareto)%2C-a-prompt-optimizer-that-uses-natural-language-reflection-to-diagnose-problems%2C-propose-prompt-updates%2C-and-combine-lessons-from-a-pareto-frontier-of-attempts-2.-**sample-efficiency-over-rl**%3A-outperforms-grpo-by-6%25-on-average-(up-to-20%25)-while-using-up-to-35x-fewer-rollouts%2C-demonstrating-that-interpretable-language-based-learning-can-be-more-efficient-than-policy-gradient-methods-3.-**superiority-over-existing-optimizers**%3A-outperforms-the-leading-prompt-optimizer-miprov2-by-over-10%25-on-benchmarks-including-aime-2025%2C-and-shows-promise-as-an-inference-time-search-strategy-for-code-optimization-%23%23-relevance-to-agent-evolution-gepa-demonstrates-that-reflective%2C-language-based-evolution-of-prompts-can-outperform-rl-based-adaptation%2C-suggesting-that-self-improving-agent-systems-may-benefit-more-from-natural-language-reasoning-about-their-own-behavior-than-from-scalar-reward-signals.-the-pareto-frontier-approach-to-combining-lessons-from-multiple-attempts-is-directly-applicable-to-how-agents-accumulate-and-refine-operational-knowledge-over-time.-%23%23-classification---category%3A-prompt-optimization---method%3A-genetic-pareto-reflective-evolution---scope%3A-llm-prompt-optimization-via-natural-language-reflection-and-pareto-optimal-combination-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-07-25---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-07---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "label": "Deep Academic Review: GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning **Authors**: Lakshya A Agrawal, Shangyin Tan, Dilara Soylu, Noah Ziems, Rishi Khare, Krista Opsahl-Ong, Arnav Singhvi, Herumb Shandilya, Michael J Ryan, Meng Jiang, Christopher Potts, Koushik Sen, Alexandros G. Dimakis, Ion Stoica, Dan Klein, Matei Zaharia, Omar Khattab **Submitted**: 2025-07-25 (v1), last revised 2026-02-14 (v2) **Code**: https://github.com/gepa-ai/gepa ## Abstract Large language models (LLMs) are increasingly adapted to downstream tasks via reinforcement learning (RL) methods like Group Relative Policy Optimization (GRPO), which often require thousands of rollouts to learn new tasks. We argue that the interpretable nature of language often provides a much richer learning medium for LLMs, compared to policy gradients derived from sparse, scalar rewards. To test this, we introduce GEPA (Genetic-Pareto), a prompt optimizer that thoroughly incorporates natural language reflection to learn high-level rules from trial and error. Given any AI system containing one or more LLM prompts, GEPA samples trajectories (e.g., reasoning, tool calls, and tool outputs) and reflects on them in natural language to diagnose problems, propose and test prompt updates, and combine complementary lessons from the Pareto frontier of its own attempts. As a result of GEPA's design, it can often turn even just a few rollouts into a large quality gain. Across six tasks, GEPA outperforms GRPO by 6% on average and by up to 20%, while using up to 35x fewer rollouts. GEPA also outperforms the leading prompt optimizer, MIPROv2, by over 10% (e.g., +12% accuracy on AIME-2025), and demonstrates promising results as an inference-time search strategy for code optimization. ## Key Contributions 1. **Reflective Prompt Evolution via Natural Language**: Introduces GEPA (Genetic-Pareto), a prompt optimizer that uses natural language reflection to diagnose problems, propose prompt updates, and combine lessons from a Pareto frontier of attempts 2. **Sample Efficiency Over RL**: Outperforms GRPO by 6% on average (up to 20%) while using up to 35x fewer rollouts, demonstrating that interpretable language-based learning can be more efficient than policy gradient methods 3. **Superiority Over Existing Optimizers**: Outperforms the leading prompt optimizer MIPROv2 by over 10% on benchmarks including AIME-2025, and shows promise as an inference-time search strategy for code optimization ## Relevance to Agent Evolution GEPA demonstrates that reflective, language-based evolution of prompts can outperform RL-based adaptation, suggesting that self-improving agent systems may benefit more from natural language reasoning about their own behavior than from scalar reward signals. The Pareto-frontier approach to combining lessons from multiple attempts is directly applicable to how agents accumulate and refine operational knowledge over time. ## Classification - Category: Prompt Optimization - Method: Genetic-Pareto Reflective Evolution - Scope: LLM prompt optimization via natural language reflection and Pareto-optimal combination ## gBrain Temporal Metadata - content_timestamp: 2025-07-25 - collected_at: 2026-05-22T01:00:00+08:00 - time_slice: 2025-07 - timestamp_confidence: derived - timestamp_source: arxiv submission date",
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
    "id": "review:2509.25140-(v2%2C-16-mar-2026)",
    "label": "ReasoningBank: Scaling Agent Self-Evolving with Reasoning Memory",
    "type": "paper",
    "url": "https://arxiv.org/abs/2509.25140 (v2, 16 Mar 2026)",
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
    "id": "review:2510.04618-(v3%2C-29-mar-2026)",
    "label": "Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models",
    "type": "paper",
    "url": "https://arxiv.org/abs/2510.04618 (v3, 29 Mar 2026)",
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
    "id": "review:2510.16079-(v3%2C-16-may-2026)",
    "label": "EvolveR: Self-Evolving LLM Agents through an Experience-Driven Lifecycle",
    "type": "paper",
    "url": "https://arxiv.org/abs/2510.16079 (v3, 16 May 2026)",
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
    "id": "review:deep-academic-review%3A-on-the-limits-of-self-improving-in-large-language-models%3A-the-singularity-is-not-near-without-symbolic-model-synthesis-**authors**%3A-hector-zenil-**submitted**%3A-2026-01-05-(v1)%2C-last-revised-2026-02-21-(v2)-%23%23-abstract-we-formalise-recursive-self-training-in-large-language-models-(llms)-and-generative-ai-as-a-discrete-time-dynamical-system.-we-prove-that-if-the-proportion-of-exogenous%2C-externally-grounded-signal-vanishes-asymptotically%2C-the-system-undergoes-degenerative-dynamics.-we-derive-two-fundamental-failure-modes%3A-(1)-entropy-decay%2C-where-finite-sampling-effects-induce-monotonic-loss-of-distributional-diversity%2C-and-(2)-variance-amplification%2C-where-the-absence-of-persistent-grounding-causes-distributional-drift-via-a-random-walk-mechanism.-these-behaviours-are-architectural-invariants-of-distributional-learning-on-finite-samples.-we-show-that-the-collapse-results-apply-specifically-to-closed-loop-density-matching-without-persistent-external-signal.-systems-with-non-vanishing-exogenous-grounding-fall-outside-this-regime.-however%2C-mainstream-singularity%2C-agi%2C-and-asi-narratives-typically-posit-systems-that-become-increasingly-autonomous-and-require-little-to-no-human-or-external-intervention-for-self-improvement.-in-that-autonomy-regime%2C-the-vanishing-signal-condition-is-satisfied%2C-and-collapse-follows-under-kl-based-objectives.-to-overcome-these-limits%2C-we-propose-neurosymbolic-integration-based-on-algorithmic-probability-and-program-synthesis.-the-coding-theorem-method-(ctm)-enables-identification-of-generative-mechanisms-rather-than-mere-correlations%2C-escaping-the-distribution-only-constraints-that-bind-standard-statistical-learning.-we-conclude-that-fully-autonomous-recursive-density-matching-leads-to-degenerative-fixed-points%2C-whereas-externally-anchored-or-mechanism-based-approaches-operate-under-fundamentally-different-asymptotic-dynamics.-%23%23-key-contributions-1.-**formal-proof-of-self-training-collapse**%3A-proves-that-fully-autonomous-recursive-self-training-undergoes-degenerative-dynamics-when-exogenous-signal-vanishes%2C-identifying-two-failure-modes%3A-entropy-decay-(loss-of-diversity)-and-variance-amplification-(distributional-drift)-2.-**architectural-invariants-of-distributional-learning**%3A-demonstrates-that-these-failure-modes-are-architectural-invariants-of-distributional-learning-on-finite-samples%2C-not-implementation-bugs-3.-**neurosymbolic-path-forward-via-ctm**%3A-proposes-algorithmic-probability-and-program-synthesis-(coding-theorem-method)-as-a-way-to-escape-distribution-only-constraints-and-identify-generative-mechanisms-rather-than-mere-correlations-%23%23-relevance-to-agent-evolution-this-paper-provides-rigorous-theoretical-foundations-for-the-limits-of-self-improving-agents%2C-proving-that-purely-autonomous-recursive-improvement-inevitably-leads-to-model-collapse-without-external-grounding.-this-has-direct-implications-for-designing-self-evolving-agent-systems%3A-they-must-maintain-access-to-exogenous%2C-externally-grounded-signals%2C-or-adopt-neurosymbolic-approaches-that-go-beyond-distributional-matching.-the-paper-challenges-agi-narratives-of-fully-autonomous-self-improvement-and-suggests-that-sustainable-agent-evolution-requires-either-persistent-human%2Fenvironment-grounding-or-symbolic-mechanism-discovery.-%23%23-classification---category%3A-theoretical-foundations---method%3A-dynamical-systems-analysis-%2B-algorithmic-probability---scope%3A-formal-analysis-of-limits-of-recursive-self-training-in-llms-and-proposed-neurosymbolic-solutions-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-01-05---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-01---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "label": "Deep Academic Review: On the Limits of Self-Improving in Large Language Models: The Singularity Is Not Near Without Symbolic Model Synthesis **Authors**: Hector Zenil **Submitted**: 2026-01-05 (v1), last revised 2026-02-21 (v2) ## Abstract We formalise recursive self-training in Large Language Models (LLMs) and Generative AI as a discrete-time dynamical system. We prove that if the proportion of exogenous, externally grounded signal vanishes asymptotically, the system undergoes degenerative dynamics. We derive two fundamental failure modes: (1) Entropy Decay, where finite sampling effects induce monotonic loss of distributional diversity, and (2) Variance Amplification, where the absence of persistent grounding causes distributional drift via a random-walk mechanism. These behaviours are architectural invariants of distributional learning on finite samples. We show that the collapse results apply specifically to closed-loop density matching without persistent external signal. Systems with non-vanishing exogenous grounding fall outside this regime. However, mainstream Singularity, AGI, and ASI narratives typically posit systems that become increasingly autonomous and require little to no human or external intervention for self-improvement. In that autonomy regime, the vanishing-signal condition is satisfied, and collapse follows under KL-based objectives. To overcome these limits, we propose neurosymbolic integration based on algorithmic probability and program synthesis. The Coding Theorem Method (CTM) enables identification of generative mechanisms rather than mere correlations, escaping the distribution-only constraints that bind standard statistical learning. We conclude that fully autonomous recursive density matching leads to degenerative fixed points, whereas externally anchored or mechanism-based approaches operate under fundamentally different asymptotic dynamics. ## Key Contributions 1. **Formal Proof of Self-Training Collapse**: Proves that fully autonomous recursive self-training undergoes degenerative dynamics when exogenous signal vanishes, identifying two failure modes: Entropy Decay (loss of diversity) and Variance Amplification (distributional drift) 2. **Architectural Invariants of Distributional Learning**: Demonstrates that these failure modes are architectural invariants of distributional learning on finite samples, not implementation bugs 3. **Neurosymbolic Path Forward via CTM**: Proposes algorithmic probability and program synthesis (Coding Theorem Method) as a way to escape distribution-only constraints and identify generative mechanisms rather than mere correlations ## Relevance to Agent Evolution This paper provides rigorous theoretical foundations for the limits of self-improving agents, proving that purely autonomous recursive improvement inevitably leads to model collapse without external grounding. This has direct implications for designing self-evolving agent systems: they must maintain access to exogenous, externally grounded signals, or adopt neurosymbolic approaches that go beyond distributional matching. The paper challenges AGI narratives of fully autonomous self-improvement and suggests that sustainable agent evolution requires either persistent human/environment grounding or symbolic mechanism discovery. ## Classification - Category: Theoretical Foundations - Method: Dynamical Systems Analysis + Algorithmic Probability - Scope: Formal analysis of limits of recursive self-training in LLMs and proposed neurosymbolic solutions ## gBrain Temporal Metadata - content_timestamp: 2026-01-05 - collected_at: 2026-05-22T01:00:00+08:00 - time_slice: 2026-01 - timestamp_confidence: derived - timestamp_source: arxiv submission date",
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
    "id": "review:deep-academic-review%3A-the-auton-agentic-ai-framework-**authors**%3A-sheng-cao%2C-zhao-chang%2C-chang-li%2C-hannan-li%2C-liyao-fu%2C-ji-tang-**submitted**%3A-2026-02-27-(v1)-%23%23-abstract-the-field-of-artificial-intelligence-is-undergoing-a-transition-from-generative-ai----probabilistic-generation-of-text-and-images----to-agentic-ai%2C-in-which-autonomous-systems-execute-actions-within-external-environments-on-behalf-of-users.-this-transition-exposes-a-fundamental-architectural-mismatch%3A-large-language-models-(llms)-produce-stochastic%2C-unstructured-outputs%2C-whereas-the-backend-infrastructure-they-must-control----databases%2C-apis%2C-cloud-services----requires-deterministic%2C-schema-conformant-inputs.-the-present-paper-describes-the-auton-agentic-ai-framework%2C-a-principled-architecture-for-standardizing-the-creation%2C-execution%2C-and-governance-of-autonomous-agent-systems.-the-framework-is-organized-around-a-strict-separation-between-the-cognitive-blueprint%2C-a-declarative%2C-language-agnostic-specification-of-agent-identity-and-capabilities%2C-and-the-runtime-engine%2C-the-platform-specific-execution-substrate-that-instantiates-and-runs-the-agent.-this-separation-enables-cross-language-portability%2C-formal-auditability%2C-and-modular-tool-integration-via-the-model-context-protocol-(mcp).-the-paper-formalizes-the-agent-execution-model-as-an-augmented-partially-observable-markov-decision-process-(pomdp)-with-a-latent-reasoning-space%2C-introduces-a-hierarchical-memory-consolidation-architecture-inspired-by-biological-episodic-memory-systems%2C-defines-a-constraint-manifold-formalism-for-safety-enforcement-via-policy-projection-rather-than-post-hoc-filtering%2C-presents-a-three-level-self-evolution-framework-spanning-in-context-adaptation-through-reinforcement-learning%2C-and-describes-runtime-optimizations----including-parallel-graph-execution%2C-speculative-inference%2C-and-dynamic-context-pruning----that-reduce-end-to-end-latency-for-multi-step-agent-workflows.-%23%23-key-contributions-1.-proposes-a-principled-agent-architecture-separating-a-declarative-cognitive-blueprint-from-the-runtime-engine%2C-enabling-cross-language-portability%2C-formal-auditability%2C-and-modular-tool-integration-via-mcp.-2.-introduces-a-three-level-self-evolution-framework-spanning-in-context-adaptation-through-reinforcement-learning%2C-providing-a-structured-path-for-agents-to-continuously-improve-their-capabilities.-3.-formalizes-the-agent-execution-model-as-an-augmented-pomdp-with-latent-reasoning-space%2C-hierarchical-memory-consolidation-inspired-by-biological-episodic-memory%2C-and-a-constraint-manifold-for-safety-enforcement-via-policy-projection.-%23%23-relevance-to-agent-evolution-the-auton-framework-provides-a-comprehensive-architectural-foundation-for-self-evolving-agents%2C-with-its-three-level-evolution-framework-(in-context-adaptation-through-rl)-offering-a-structured-approach-to-progressive-capability-improvement.-its-emphasis-on-declarative-agent-specifications-and-hierarchical-memory-consolidation-directly-supports-the-infrastructure-needed-for-agents-that-can-safely-and-systematically-evolve-over-time.-%23%23-classification---category%3A-agent-architecture-and-framework---method%3A-pomdp-based-execution-with-hierarchical-memory---scope%3A-full-stack-agent-creation%2C-execution%2C-governance%2C-and-self-evolution-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-02-27---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "label": "Deep Academic Review: The Auton Agentic AI Framework **Authors**: Sheng Cao, Zhao Chang, Chang Li, Hannan Li, Liyao Fu, Ji Tang **Submitted**: 2026-02-27 (v1) ## Abstract The field of Artificial Intelligence is undergoing a transition from Generative AI -- probabilistic generation of text and images -- to Agentic AI, in which autonomous systems execute actions within external environments on behalf of users. This transition exposes a fundamental architectural mismatch: Large Language Models (LLMs) produce stochastic, unstructured outputs, whereas the backend infrastructure they must control -- databases, APIs, cloud services -- requires deterministic, schema-conformant inputs. The present paper describes the Auton Agentic AI Framework, a principled architecture for standardizing the creation, execution, and governance of autonomous agent systems. The framework is organized around a strict separation between the Cognitive Blueprint, a declarative, language-agnostic specification of agent identity and capabilities, and the Runtime Engine, the platform-specific execution substrate that instantiates and runs the agent. This separation enables cross-language portability, formal auditability, and modular tool integration via the Model Context Protocol (MCP). The paper formalizes the agent execution model as an augmented Partially Observable Markov Decision Process (POMDP) with a latent reasoning space, introduces a hierarchical memory consolidation architecture inspired by biological episodic memory systems, defines a constraint manifold formalism for safety enforcement via policy projection rather than post-hoc filtering, presents a three-level self-evolution framework spanning in-context adaptation through reinforcement learning, and describes runtime optimizations -- including parallel graph execution, speculative inference, and dynamic context pruning -- that reduce end-to-end latency for multi-step agent workflows. ## Key Contributions 1. Proposes a principled agent architecture separating a declarative Cognitive Blueprint from the Runtime Engine, enabling cross-language portability, formal auditability, and modular tool integration via MCP. 2. Introduces a three-level self-evolution framework spanning in-context adaptation through reinforcement learning, providing a structured path for agents to continuously improve their capabilities. 3. Formalizes the agent execution model as an augmented POMDP with latent reasoning space, hierarchical memory consolidation inspired by biological episodic memory, and a constraint manifold for safety enforcement via policy projection. ## Relevance to Agent Evolution The Auton framework provides a comprehensive architectural foundation for self-evolving agents, with its three-level evolution framework (in-context adaptation through RL) offering a structured approach to progressive capability improvement. Its emphasis on declarative agent specifications and hierarchical memory consolidation directly supports the infrastructure needed for agents that can safely and systematically evolve over time. ## Classification - Category: Agent Architecture and Framework - Method: POMDP-based Execution with Hierarchical Memory - Scope: Full-stack agent creation, execution, governance, and self-evolution ## gBrain Temporal Metadata - content_timestamp: 2026-02-27 - collected_at: 2026-05-22T01:00:00+08:00 - time_slice: 2026-02 - timestamp_confidence: derived - timestamp_source: arxiv submission date",
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
    "id": "review:deep-academic-review%3A-coevoskills%3A-self-evolving-agent-skills-via-co-evolutionary-verification-**authors**%3A-hanrong-zhang%2C-shicheng-fan%2C-henry-peng-zou%2C-yankai-chen%2C-zhenting-wang%2C-jiayu-zhou%2C-chengze-li%2C-wei-chieh-huang%2C-yifei-yao%2C-kening-zheng%2C-xue-liu%2C-xiaoxiao-li%2C-philip-s.-yu-**submitted**%3A-2026-04-02-(v1)-%23%23-abstract-anthropic-proposes-the-concept-of-skills-for-llm-agents-to-tackle-multi-step-professional-tasks-that-simple-tool-invocations-cannot-address.-a-tool-is-a-single%2C-self-contained-function%2C-whereas-a-skill-is-a-structured-bundle-of-interdependent-multi-file-artifacts.-currently%2C-skill-generation-is-not-only-label-intensive-due-to-manual-authoring%2C-but-also-may-suffer-from-human--machine-cognitive-misalignment%2C-which-can-lead-to-degraded-agent-performance%2C-as-evidenced-by-evaluations-on-skillsbench.-therefore%2C-we-aim-to-enable-agents-to-autonomously-generate-skills.-however%2C-existing-self-evolving-methods-designed-for-tools-cannot-be-directly-applied-to-skills-due-to-their-increased-complexity.-to-address-these-issues%2C-we-propose-coevoskills%2C-a-self-evolving-skills-framework-that-enables-agents-to-autonomously-construct-complex%2C-multi-file-skill-packages.-specifically%2C-coevoskills-couples-a-skill-generator-that-iteratively-refines-skills-with-a-surrogate-verifier-that-co-evolves-to-provide-informative-and-actionable-feedback-without-access-to-ground-truth-test-content.-on-skillsbench%2C-coevoskills-achieves-the-highest-pass-rate-among-five-baselines-on-both-claude-code-and-codex%2C-and-also-exhibits-strong-generalization-capabilities-to-six-additional-llms.-%23%23-key-contributions-1.-proposes-a-co-evolutionary-framework-(coevoskills)-where-a-skill-generator-and-surrogate-verifier-jointly-evolve%2C-enabling-autonomous-generation-of-complex-multi-file-skill-packages-for-llm-agents.-2.-introduces-a-surrogate-verifier-that-provides-informative-and-actionable-feedback-without-requiring-ground-truth-test-content%2C-addressing-the-verification-bottleneck-in-self-evolving-systems.-3.-demonstrates-state-of-the-art-performance-on-skillsbench-across-multiple-llm-backbones-(claude-code%2C-codex%2C-and-six-additional-llms)%2C-showing-strong-generalization-of-evolved-skills.-%23%23-relevance-to-agent-evolution-coevoskills-directly-addresses-the-self-evolution-of-agent-capabilities-by-enabling-autonomous-construction-and-refinement-of-complex-skill-packages.-the-co-evolutionary-mechanism-between-generation-and-verification-represents-a-key-pattern-for-building-agents-that-can-continuously-improve-their-own-toolsets-without-human-intervention%2C-a-core-requirement-for-truly-autonomous-agent-evolution.-%23%23-classification---category%3A-agent-skill-evolution---method%3A-co-evolutionary-optimization---scope%3A-multi-file-skill-generation-and-verification-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-04-02---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-04---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "label": "Deep Academic Review: CoEvoSkills: Self-Evolving Agent Skills via Co-Evolutionary Verification **Authors**: Hanrong Zhang, Shicheng Fan, Henry Peng Zou, Yankai Chen, Zhenting Wang, Jiayu Zhou, Chengze Li, Wei-Chieh Huang, Yifei Yao, Kening Zheng, Xue Liu, Xiaoxiao Li, Philip S. Yu **Submitted**: 2026-04-02 (v1) ## Abstract Anthropic proposes the concept of skills for LLM agents to tackle multi-step professional tasks that simple tool invocations cannot address. A tool is a single, self-contained function, whereas a skill is a structured bundle of interdependent multi-file artifacts. Currently, skill generation is not only label-intensive due to manual authoring, but also may suffer from human--machine cognitive misalignment, which can lead to degraded agent performance, as evidenced by evaluations on SkillsBench. Therefore, we aim to enable agents to autonomously generate skills. However, existing self-evolving methods designed for tools cannot be directly applied to skills due to their increased complexity. To address these issues, we propose CoEvoSkills, a self-evolving skills framework that enables agents to autonomously construct complex, multi-file skill packages. Specifically, CoEvoSkills couples a Skill Generator that iteratively refines skills with a Surrogate Verifier that co-evolves to provide informative and actionable feedback without access to ground-truth test content. On SkillsBench, CoEvoSkills achieves the highest pass rate among five baselines on both Claude Code and Codex, and also exhibits strong generalization capabilities to six additional LLMs. ## Key Contributions 1. Proposes a co-evolutionary framework (CoEvoSkills) where a Skill Generator and Surrogate Verifier jointly evolve, enabling autonomous generation of complex multi-file skill packages for LLM agents. 2. Introduces a Surrogate Verifier that provides informative and actionable feedback without requiring ground-truth test content, addressing the verification bottleneck in self-evolving systems. 3. Demonstrates state-of-the-art performance on SkillsBench across multiple LLM backbones (Claude Code, Codex, and six additional LLMs), showing strong generalization of evolved skills. ## Relevance to Agent Evolution CoEvoSkills directly addresses the self-evolution of agent capabilities by enabling autonomous construction and refinement of complex skill packages. The co-evolutionary mechanism between generation and verification represents a key pattern for building agents that can continuously improve their own toolsets without human intervention, a core requirement for truly autonomous agent evolution. ## Classification - Category: Agent Skill Evolution - Method: Co-Evolutionary Optimization - Scope: Multi-file skill generation and verification ## gBrain Temporal Metadata - content_timestamp: 2026-04-02 - collected_at: 2026-05-22T01:00:00+08:00 - time_slice: 2026-04 - timestamp_confidence: derived - timestamp_source: arxiv submission date",
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
    "id": "review:deep-academic-review%3A-skillos%3A-learning-skill-curation-for-self-evolving-agents-**authors**%3A-siru-ouyang%2C-jun-yan%2C-yanfei-chen%2C-rujun-han%2C-zifeng-wang%2C-bhavana-dalvi-mishra%2C-rui-meng%2C-chun-liang-li%2C-yizhu-jiao%2C-kaiwen-zha%2C-maohao-shen%2C-vishy-tirumalashetty%2C-george-lee%2C-jiawei-han%2C-tomas-pfister%2C-chen-yu-lee-**submitted**%3A-2026-05-07-(v1)-%23%23-abstract-llm-based-agents-are-increasingly-deployed-to-handle-streaming-tasks%2C-yet-they-often-remain-one-off-problem-solvers-that-fail-to-learn-from-past-interactions.-reusable-skills-distilled-from-experience-provide-a-natural-substrate-for-self-evolution%2C-where-high-quality-skill-curation-serves-as-the-key-bottleneck.-existing-approaches-either-rely-on-manual-skill-curation%2C-prescribe-heuristic-skill-operations%2C-or-train-for-short-horizon-skill-operations.-however%2C-they-still-struggle-to-learn-complex-long-term-curation-policies-from-indirect-and-delayed-feedback.-to-tackle-this-challenge%2C-we-propose-skillos%2C-an-experience-driven-rl-training-recipe-for-learning-skill-curation-in-self-evolving-agents.-skillos-pairs-a-frozen-agent-executor-that-retrieves-and-applies-skills-with-a-trainable-skill-curator-that-updates-an-external-skillrepo-from-accumulated-experience.-to-provide-learning-signals-for-curation%2C-we-design-composite-rewards-and-train-on-grouped-task-streams-based-on-skill-relevant-task-dependencies%2C-where-earlier-trajectories-update-the-skillrepo%2C-and-later-related-tasks-evaluate-these-updates.-across-multi-turn-agentic-tasks-and-single-turn-reasoning-tasks%2C-skillos-consistently-outperforms-memory-free-and-strong-memory-based-baselines-in-both-effectiveness-and-efficiency%2C-with-the-learned-skill-curator-generalizing-across-different-executor-backbones-and-task-domains.-further-analyses-show-that-the-learned-curator-produces-more-targeted-skill-use%2C-while-the-skills-in-skillrepo-evolve-into-more-richly-structured-markdown-files-that-encode-higher-level-meta-skills-over-time.-%23%23-key-contributions-1.-proposes-skillos%2C-an-rl-based-training-recipe-that-learns-skill-curation-policies-for-self-evolving-agents%2C-separating-a-frozen-executor-from-a-trainable-skill-curator-that-maintains-an-external-skillrepo.-2.-designs-composite-rewards-and-grouped-task-stream-training-based-on-skill-relevant-dependencies%2C-enabling-the-system-to-learn-from-indirect-and-delayed-feedback-across-long-horizons.-3.-demonstrates-that-learned-skill-curators-generalize-across-different-executor-backbones-and-task-domains%2C-with-skills-evolving-into-richly-structured-markdown-files-encoding-higher-level-meta-skills-over-time.-%23%23-relevance-to-agent-evolution-skillos-tackles-a-critical-bottleneck-in-agent-self-evolution%3A-how-to-curate-and-manage-a-growing-repository-of-skills-over-time.-by-using-rl-to-learn-curation-policies-that-decide-when-to-create%2C-update%2C-or-merge-skills%2C-this-work-provides-a-scalable-mechanism-for-agents-to-autonomously-manage-their-own-capability-growth%2C-making-it-a-foundational-contribution-to-continuous-agent-evolution.-%23%23-classification---category%3A-skill-curation-for-self-evolving-agents---method%3A-reinforcement-learning-with-composite-rewards---scope%3A-long-horizon-skill-management-and-cross-domain-generalization-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-05-07---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "label": "Deep Academic Review: SkillOS: Learning Skill Curation for Self-Evolving Agents **Authors**: Siru Ouyang, Jun Yan, Yanfei Chen, Rujun Han, Zifeng Wang, Bhavana Dalvi Mishra, Rui Meng, Chun-Liang Li, Yizhu Jiao, Kaiwen Zha, Maohao Shen, Vishy Tirumalashetty, George Lee, Jiawei Han, Tomas Pfister, Chen-Yu Lee **Submitted**: 2026-05-07 (v1) ## Abstract LLM-based agents are increasingly deployed to handle streaming tasks, yet they often remain one-off problem solvers that fail to learn from past interactions. Reusable skills distilled from experience provide a natural substrate for self-evolution, where high-quality skill curation serves as the key bottleneck. Existing approaches either rely on manual skill curation, prescribe heuristic skill operations, or train for short-horizon skill operations. However, they still struggle to learn complex long-term curation policies from indirect and delayed feedback. To tackle this challenge, we propose SkillOS, an experience-driven RL training recipe for learning skill curation in self-evolving agents. SkillOS pairs a frozen agent executor that retrieves and applies skills with a trainable skill curator that updates an external SkillRepo from accumulated experience. To provide learning signals for curation, we design composite rewards and train on grouped task streams based on skill-relevant task dependencies, where earlier trajectories update the SkillRepo, and later related tasks evaluate these updates. Across multi-turn agentic tasks and single-turn reasoning tasks, SkillOS consistently outperforms memory-free and strong memory-based baselines in both effectiveness and efficiency, with the learned skill curator generalizing across different executor backbones and task domains. Further analyses show that the learned curator produces more targeted skill use, while the skills in SkillRepo evolve into more richly structured Markdown files that encode higher-level meta-skills over time. ## Key Contributions 1. Proposes SkillOS, an RL-based training recipe that learns skill curation policies for self-evolving agents, separating a frozen executor from a trainable skill curator that maintains an external SkillRepo. 2. Designs composite rewards and grouped task-stream training based on skill-relevant dependencies, enabling the system to learn from indirect and delayed feedback across long horizons. 3. Demonstrates that learned skill curators generalize across different executor backbones and task domains, with skills evolving into richly structured Markdown files encoding higher-level meta-skills over time. ## Relevance to Agent Evolution SkillOS tackles a critical bottleneck in agent self-evolution: how to curate and manage a growing repository of skills over time. By using RL to learn curation policies that decide when to create, update, or merge skills, this work provides a scalable mechanism for agents to autonomously manage their own capability growth, making it a foundational contribution to continuous agent evolution. ## Classification - Category: Skill Curation for Self-Evolving Agents - Method: Reinforcement Learning with Composite Rewards - Scope: Long-horizon skill management and cross-domain generalization ## gBrain Temporal Metadata - content_timestamp: 2026-05-07 - collected_at: 2026-05-22T01:00:00+08:00 - time_slice: 2026-05 - timestamp_confidence: derived - timestamp_source: arxiv submission date",
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
    "id": "review:placeholder-no-arxiv",
    "label": "Papers Without arXiv IDs — Placeholder Index",
    "type": "paper",
    "summary": "**EN.** This is not a single paper but a tracking record for papers without arXiv IDs or with non-arXiv sources, including FunSearch and several missing items from the 100-paper list. **中文。** 这条 review 将论文放入 Evolver 的 **Data gap / non-arXiv tracking index** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。",
    "weight": 3
  },
  {
    "id": "review:deep-academic-review%3A-papers-without-arxiv-ids-%E2%80%94-placeholder-index-the-following-papers-from-the-100-paper-list-did-not-have-arxiv-ids-at-the-time-of-collection.-they-are-tracked-here-for-future-extraction.-%23%23-papers-needing-arxiv-search%2Fextraction-%7C-%23-%7C-title-%7C-year-%7C-status-%7C-%7C---%7C-------%7C------%7C--------%7C-%7C-43-%7C-nature-inspired-population-based-evolution-of-llms-%7C-2025-%7C-no-arxiv-found-%7C-%7C-44-%7C-es-vs-grpo-in-llm-post-training-%7C-2025-%7C-no-arxiv-found-%7C-%7C-60-%7C-ledex%3A-self-debugging-%2B-code-explanation-%7C-2024-%7C-no-arxiv-found-%7C-%7C-64-%7C-ttcs%3A-test-time-curriculum-synthesis-%7C-2025-%7C-no-arxiv-found-%7C-%7C-78-%7C-self-rewarding-ppo-%7C-2024-%7C-no-arxiv-found-%7C-%7C-79-%7C-process-based-self-rewarding-%7C-2024-%7C-no-arxiv-found-%7C-%7C-86-%7C-mars%3A-multi-agent-collaboration-for-reasoning-%7C-2024-%7C-no-arxiv-found-%7C-%7C-88-%7C-survey%3A-llms-for-evolutionary-computation-%7C-2024-%7C-no-arxiv-found-%7C-%7C-89-%7C-matching-accuracy%3A-es-vs-grpo-%7C-2025-%7C-no-arxiv-found-%7C-%7C-93-%7C-safety-for-open-ended-systems-%7C-2025-%7C-no-arxiv-found-%7C-%7C-97-%7C-debate-helps-weak-to-strong-%7C-2024-%7C-no-arxiv-found-%7C-%7C-99-%7C-reward-hacking%3A-mechanisms-%26-misalignment-%7C-2025-%7C-no-arxiv-found-%7C-%23%23-non-arxiv-papers-%7C-%23-%7C-title-%7C-year-%7C-source-%7C-%7C---%7C-------%7C------%7C--------%7C-%7C-50-%7C-funsearch%3A-mathematical-discovery-via-llm-evolution-%7C-2023-%7C-nature-%E2%80%94-https%3A%2F%2Fwww.nature.com%2Farticles%2Fs41586-023-06924-6-%7C-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2023-12-14---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2023-q4---timestamp_confidence%3A-verified---timestamp_source%3A-nature%2Fdeepmind-funsearch-online-publication-date-(web-verified)",
    "label": "Deep Academic Review: Papers Without arXiv IDs — Placeholder Index The following papers from the 100-paper list did not have arXiv IDs at the time of collection. They are tracked here for future extraction. ## Papers needing arXiv search/extraction | # | Title | Year | Status | |---|-------|------|--------| | 43 | Nature-Inspired Population-Based Evolution of LLMs | 2025 | No arXiv found | | 44 | ES vs GRPO in LLM Post-Training | 2025 | No arXiv found | | 60 | LeDex: Self-Debugging + Code Explanation | 2024 | No arXiv found | | 64 | TTCS: Test-Time Curriculum Synthesis | 2025 | No arXiv found | | 78 | Self-Rewarding PPO | 2024 | No arXiv found | | 79 | Process-based Self-Rewarding | 2024 | No arXiv found | | 86 | MARS: Multi-Agent Collaboration for Reasoning | 2024 | No arXiv found | | 88 | Survey: LLMs for Evolutionary Computation | 2024 | No arXiv found | | 89 | Matching Accuracy: ES vs GRPO | 2025 | No arXiv found | | 93 | Safety for Open-Ended Systems | 2025 | No arXiv found | | 97 | Debate Helps Weak-to-Strong | 2024 | No arXiv found | | 99 | Reward Hacking: Mechanisms & Misalignment | 2025 | No arXiv found | ## Non-arXiv papers | # | Title | Year | Source | |---|-------|------|--------| | 50 | FunSearch: Mathematical Discovery via LLM Evolution | 2023 | Nature — https://www.nature.com/articles/s41586-023-06924-6 | ## gBrain Temporal Metadata - content_timestamp: 2023-12-14 - collected_at: 2026-05-21T00:00:00+08:00 - time_slice: 2023-Q4 - timestamp_confidence: verified - timestamp_source: Nature/DeepMind FunSearch online publication date (web verified)",
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
    "source": "review:2402.18381---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2402.18381---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2402.18381---**authors**%3A-robert-tjarko-lange%2C-yingtao-tian%2C-yujin-tang---**year**%3A-2024-%23%23-abstract-investigates-whether-llms-can-implement-evolutionary-optimization-algorithms.-introduces-prompting-strategy-with-least-to-most-sorting-of-discretized-population-members-and-llm-proposed-improvements.-creates-evollm-that-outperforms-random-search-and-gaussian-hill-climbing-on-bbob-functions-and-neuroevolution-tasks.-llms-act-as-plug-in-in-context-recombination-operators.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-02-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q1---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2402.18381---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2402.18381---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2402.18381---**authors**%3A-robert-tjarko-lange%2C-yingtao-tian%2C-yujin-tang---**year**%3A-2024-%23%23-abstract-investigates-whether-llms-can-implement-evolutionary-optimization-algorithms.-introduces-prompting-strategy-with-least-to-most-sorting-of-discretized-population-members-and-llm-proposed-improvements.-creates-evollm-that-outperforms-random-search-and-gaussian-hill-climbing-on-bbob-functions-and-neuroevolution-tasks.-llms-act-as-plug-in-in-context-recombination-operators.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-02-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q1---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2402.18381---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2402.18381---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2402.18381---**authors**%3A-robert-tjarko-lange%2C-yingtao-tian%2C-yujin-tang---**year**%3A-2024-%23%23-abstract-investigates-whether-llms-can-implement-evolutionary-optimization-algorithms.-introduces-prompting-strategy-with-least-to-most-sorting-of-discretized-population-members-and-llm-proposed-improvements.-creates-evollm-that-outperforms-random-search-and-gaussian-hill-climbing-on-bbob-functions-and-neuroevolution-tasks.-llms-act-as-plug-in-in-context-recombination-operators.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-02-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q1---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2402.18381---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2402.18381---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2402.18381---**authors**%3A-robert-tjarko-lange%2C-yingtao-tian%2C-yujin-tang---**year**%3A-2024-%23%23-abstract-investigates-whether-llms-can-implement-evolutionary-optimization-algorithms.-introduces-prompting-strategy-with-least-to-most-sorting-of-discretized-population-members-and-llm-proposed-improvements.-creates-evollm-that-outperforms-random-search-and-gaussian-hill-climbing-on-bbob-functions-and-neuroevolution-tasks.-llms-act-as-plug-in-in-context-recombination-operators.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-02-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q1---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2402.18381---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2402.18381---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2402.18381---**authors**%3A-robert-tjarko-lange%2C-yingtao-tian%2C-yujin-tang---**year**%3A-2024-%23%23-abstract-investigates-whether-llms-can-implement-evolutionary-optimization-algorithms.-introduces-prompting-strategy-with-least-to-most-sorting-of-discretized-population-members-and-llm-proposed-improvements.-creates-evollm-that-outperforms-random-search-and-gaussian-hill-climbing-on-bbob-functions-and-neuroevolution-tasks.-llms-act-as-plug-in-in-context-recombination-operators.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-02-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q1---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
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
    "source": "review:2406.18532---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2406.18532---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2406.18532---**authors**%3A-wangchunshu-zhou%2C-yixin-ou%2C-shengwei-ding%2C-long-li%2C-jialong-wu%2C-tiannan-wang%2C-jiamin-chen%2C-shuai-wang%2C-xiaohua-xu%2C-ningyu-zhang%2C-huajun-chen%2C-yuchen-eleanor-jiang---**published**%3A-2024-06-26-%23%23-abstract-the-ai-community-has-been-exploring-a-pathway-to-artificial-general-intelligence-(agi)-by-developing-%22language-agents%22%2C-which-are-complex-large-language-models-(llms)-pipelines-involving-both-prompting-techniques-and-tool-usage-methods.-while-language-agents-have-demonstrated-impressive-capabilities-for-many-real-world-tasks%2C-a-fundamental-limitation-of-current-language-agents-research-is-that-they-are-model-centric%2C-or-engineering-centric.-that's-to-say%2C-the-progress-on-prompts%2C-tools%2C-and-pipelines-of-language-agents-requires-substantial-manual-engineering-efforts-from-human-experts-rather-than-automatically-learning-from-data.-we-believe-the-transition-from-model-centric%2C-or-engineering-centric%2C-to-data-centric%2C-i.e.%2C-the-ability-of-language-agents-to-autonomously-learn-and-evolve-in-environments%2C-is-the-key-for-them-to-possibly-achieve-agi.-in-this-work%2C-we-introduce-agent-symbolic-learning%2C-a-systematic-framework-that-enables-language-agents-to-optimize-themselves-on-their-own-in-a-data-centric-way-using-symbolic-optimizers.-specifically%2C-we-consider-agents-as-symbolic-networks-where-learnable-weights-are-defined-by-prompts%2C-tools%2C-and-the-way-they-are-stacked-together.-agent-symbolic-learning-is-designed-to-optimize-the-symbolic-network-within-language-agents-by-mimicking-two-fundamental-algorithms-in-connectionist-learning%3A-back-propagation-and-gradient-descent.-instead-of-dealing-with-numeric-weights%2C-agent-symbolic-learning-works-with-natural-language-simulacrums-of-weights%2C-loss%2C-and-gradients.-we-conduct-proof-of-concept-experiments-on-both-standard-benchmarks-and-complex-real-world-tasks-and-show-that-agent-symbolic-learning-enables-language-agents-to-update-themselves-after-being-created-and-deployed-in-the-wild%2C-resulting-in-%22self-evolving-agents%22.-%23%23-full-content-computer-science-%3E-computation-and-language-arxiv%3A2406.18532-(cs)-submitted-on-26-jun-2024-%23-symbolic-learning-enables-self-evolving-agents-authors%3A-wangchunshu-zhou%2C-yixin-ou%2C-shengwei-ding%2C-long-li%2C-jialong-wu%2C-tiannan-wang%2C-jiamin-chen%2C-shuai-wang%2C-xiaohua-xu%2C-ningyu-zhang%2C-huajun-chen%2C-yuchen-eleanor-jiang-comments%3A-code-available-at-this-https-url-subjects%3A-computation-and-language-(cs.cl)%3B-artificial-intelligence-(cs.ai)%3B-machine-learning-(cs.lg)-cite-as%3A-arxiv%3A2406.18532-%5Bcs.cl%5D-doi%3A-https%3A%2F%2Fdoi.org%2F10.48550%2Farxiv.2406.18532-%23%23-submission-history-from%3A-wangchunshu-zhou-v1%3A-wed%2C-26-jun-2024-17%3A59%3A18-utc-(563-kb)-access-paper%3A---view-pdf%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2406.18532---html-(experimental)%3A-https%3A%2F%2Farxiv.org%2Fhtml%2F2406.18532v1---tex-source%3A-https%3A%2F%2Farxiv.org%2Fsrc%2F2406.18532-license%3A-http%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-06-26---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q2---timestamp_confidence%3A-derived---timestamp_source%3A-published_field",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2406.18532---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2406.18532---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2406.18532---**authors**%3A-wangchunshu-zhou%2C-yixin-ou%2C-shengwei-ding%2C-long-li%2C-jialong-wu%2C-tiannan-wang%2C-jiamin-chen%2C-shuai-wang%2C-xiaohua-xu%2C-ningyu-zhang%2C-huajun-chen%2C-yuchen-eleanor-jiang---**published**%3A-2024-06-26-%23%23-abstract-the-ai-community-has-been-exploring-a-pathway-to-artificial-general-intelligence-(agi)-by-developing-%22language-agents%22%2C-which-are-complex-large-language-models-(llms)-pipelines-involving-both-prompting-techniques-and-tool-usage-methods.-while-language-agents-have-demonstrated-impressive-capabilities-for-many-real-world-tasks%2C-a-fundamental-limitation-of-current-language-agents-research-is-that-they-are-model-centric%2C-or-engineering-centric.-that's-to-say%2C-the-progress-on-prompts%2C-tools%2C-and-pipelines-of-language-agents-requires-substantial-manual-engineering-efforts-from-human-experts-rather-than-automatically-learning-from-data.-we-believe-the-transition-from-model-centric%2C-or-engineering-centric%2C-to-data-centric%2C-i.e.%2C-the-ability-of-language-agents-to-autonomously-learn-and-evolve-in-environments%2C-is-the-key-for-them-to-possibly-achieve-agi.-in-this-work%2C-we-introduce-agent-symbolic-learning%2C-a-systematic-framework-that-enables-language-agents-to-optimize-themselves-on-their-own-in-a-data-centric-way-using-symbolic-optimizers.-specifically%2C-we-consider-agents-as-symbolic-networks-where-learnable-weights-are-defined-by-prompts%2C-tools%2C-and-the-way-they-are-stacked-together.-agent-symbolic-learning-is-designed-to-optimize-the-symbolic-network-within-language-agents-by-mimicking-two-fundamental-algorithms-in-connectionist-learning%3A-back-propagation-and-gradient-descent.-instead-of-dealing-with-numeric-weights%2C-agent-symbolic-learning-works-with-natural-language-simulacrums-of-weights%2C-loss%2C-and-gradients.-we-conduct-proof-of-concept-experiments-on-both-standard-benchmarks-and-complex-real-world-tasks-and-show-that-agent-symbolic-learning-enables-language-agents-to-update-themselves-after-being-created-and-deployed-in-the-wild%2C-resulting-in-%22self-evolving-agents%22.-%23%23-full-content-computer-science-%3E-computation-and-language-arxiv%3A2406.18532-(cs)-submitted-on-26-jun-2024-%23-symbolic-learning-enables-self-evolving-agents-authors%3A-wangchunshu-zhou%2C-yixin-ou%2C-shengwei-ding%2C-long-li%2C-jialong-wu%2C-tiannan-wang%2C-jiamin-chen%2C-shuai-wang%2C-xiaohua-xu%2C-ningyu-zhang%2C-huajun-chen%2C-yuchen-eleanor-jiang-comments%3A-code-available-at-this-https-url-subjects%3A-computation-and-language-(cs.cl)%3B-artificial-intelligence-(cs.ai)%3B-machine-learning-(cs.lg)-cite-as%3A-arxiv%3A2406.18532-%5Bcs.cl%5D-doi%3A-https%3A%2F%2Fdoi.org%2F10.48550%2Farxiv.2406.18532-%23%23-submission-history-from%3A-wangchunshu-zhou-v1%3A-wed%2C-26-jun-2024-17%3A59%3A18-utc-(563-kb)-access-paper%3A---view-pdf%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2406.18532---html-(experimental)%3A-https%3A%2F%2Farxiv.org%2Fhtml%2F2406.18532v1---tex-source%3A-https%3A%2F%2Farxiv.org%2Fsrc%2F2406.18532-license%3A-http%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-06-26---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q2---timestamp_confidence%3A-derived---timestamp_source%3A-published_field",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2406.18532---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2406.18532---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2406.18532---**authors**%3A-wangchunshu-zhou%2C-yixin-ou%2C-shengwei-ding%2C-long-li%2C-jialong-wu%2C-tiannan-wang%2C-jiamin-chen%2C-shuai-wang%2C-xiaohua-xu%2C-ningyu-zhang%2C-huajun-chen%2C-yuchen-eleanor-jiang---**published**%3A-2024-06-26-%23%23-abstract-the-ai-community-has-been-exploring-a-pathway-to-artificial-general-intelligence-(agi)-by-developing-%22language-agents%22%2C-which-are-complex-large-language-models-(llms)-pipelines-involving-both-prompting-techniques-and-tool-usage-methods.-while-language-agents-have-demonstrated-impressive-capabilities-for-many-real-world-tasks%2C-a-fundamental-limitation-of-current-language-agents-research-is-that-they-are-model-centric%2C-or-engineering-centric.-that's-to-say%2C-the-progress-on-prompts%2C-tools%2C-and-pipelines-of-language-agents-requires-substantial-manual-engineering-efforts-from-human-experts-rather-than-automatically-learning-from-data.-we-believe-the-transition-from-model-centric%2C-or-engineering-centric%2C-to-data-centric%2C-i.e.%2C-the-ability-of-language-agents-to-autonomously-learn-and-evolve-in-environments%2C-is-the-key-for-them-to-possibly-achieve-agi.-in-this-work%2C-we-introduce-agent-symbolic-learning%2C-a-systematic-framework-that-enables-language-agents-to-optimize-themselves-on-their-own-in-a-data-centric-way-using-symbolic-optimizers.-specifically%2C-we-consider-agents-as-symbolic-networks-where-learnable-weights-are-defined-by-prompts%2C-tools%2C-and-the-way-they-are-stacked-together.-agent-symbolic-learning-is-designed-to-optimize-the-symbolic-network-within-language-agents-by-mimicking-two-fundamental-algorithms-in-connectionist-learning%3A-back-propagation-and-gradient-descent.-instead-of-dealing-with-numeric-weights%2C-agent-symbolic-learning-works-with-natural-language-simulacrums-of-weights%2C-loss%2C-and-gradients.-we-conduct-proof-of-concept-experiments-on-both-standard-benchmarks-and-complex-real-world-tasks-and-show-that-agent-symbolic-learning-enables-language-agents-to-update-themselves-after-being-created-and-deployed-in-the-wild%2C-resulting-in-%22self-evolving-agents%22.-%23%23-full-content-computer-science-%3E-computation-and-language-arxiv%3A2406.18532-(cs)-submitted-on-26-jun-2024-%23-symbolic-learning-enables-self-evolving-agents-authors%3A-wangchunshu-zhou%2C-yixin-ou%2C-shengwei-ding%2C-long-li%2C-jialong-wu%2C-tiannan-wang%2C-jiamin-chen%2C-shuai-wang%2C-xiaohua-xu%2C-ningyu-zhang%2C-huajun-chen%2C-yuchen-eleanor-jiang-comments%3A-code-available-at-this-https-url-subjects%3A-computation-and-language-(cs.cl)%3B-artificial-intelligence-(cs.ai)%3B-machine-learning-(cs.lg)-cite-as%3A-arxiv%3A2406.18532-%5Bcs.cl%5D-doi%3A-https%3A%2F%2Fdoi.org%2F10.48550%2Farxiv.2406.18532-%23%23-submission-history-from%3A-wangchunshu-zhou-v1%3A-wed%2C-26-jun-2024-17%3A59%3A18-utc-(563-kb)-access-paper%3A---view-pdf%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2406.18532---html-(experimental)%3A-https%3A%2F%2Farxiv.org%2Fhtml%2F2406.18532v1---tex-source%3A-https%3A%2F%2Farxiv.org%2Fsrc%2F2406.18532-license%3A-http%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-06-26---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q2---timestamp_confidence%3A-derived---timestamp_source%3A-published_field",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2406.18532---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2406.18532---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2406.18532---**authors**%3A-wangchunshu-zhou%2C-yixin-ou%2C-shengwei-ding%2C-long-li%2C-jialong-wu%2C-tiannan-wang%2C-jiamin-chen%2C-shuai-wang%2C-xiaohua-xu%2C-ningyu-zhang%2C-huajun-chen%2C-yuchen-eleanor-jiang---**published**%3A-2024-06-26-%23%23-abstract-the-ai-community-has-been-exploring-a-pathway-to-artificial-general-intelligence-(agi)-by-developing-%22language-agents%22%2C-which-are-complex-large-language-models-(llms)-pipelines-involving-both-prompting-techniques-and-tool-usage-methods.-while-language-agents-have-demonstrated-impressive-capabilities-for-many-real-world-tasks%2C-a-fundamental-limitation-of-current-language-agents-research-is-that-they-are-model-centric%2C-or-engineering-centric.-that's-to-say%2C-the-progress-on-prompts%2C-tools%2C-and-pipelines-of-language-agents-requires-substantial-manual-engineering-efforts-from-human-experts-rather-than-automatically-learning-from-data.-we-believe-the-transition-from-model-centric%2C-or-engineering-centric%2C-to-data-centric%2C-i.e.%2C-the-ability-of-language-agents-to-autonomously-learn-and-evolve-in-environments%2C-is-the-key-for-them-to-possibly-achieve-agi.-in-this-work%2C-we-introduce-agent-symbolic-learning%2C-a-systematic-framework-that-enables-language-agents-to-optimize-themselves-on-their-own-in-a-data-centric-way-using-symbolic-optimizers.-specifically%2C-we-consider-agents-as-symbolic-networks-where-learnable-weights-are-defined-by-prompts%2C-tools%2C-and-the-way-they-are-stacked-together.-agent-symbolic-learning-is-designed-to-optimize-the-symbolic-network-within-language-agents-by-mimicking-two-fundamental-algorithms-in-connectionist-learning%3A-back-propagation-and-gradient-descent.-instead-of-dealing-with-numeric-weights%2C-agent-symbolic-learning-works-with-natural-language-simulacrums-of-weights%2C-loss%2C-and-gradients.-we-conduct-proof-of-concept-experiments-on-both-standard-benchmarks-and-complex-real-world-tasks-and-show-that-agent-symbolic-learning-enables-language-agents-to-update-themselves-after-being-created-and-deployed-in-the-wild%2C-resulting-in-%22self-evolving-agents%22.-%23%23-full-content-computer-science-%3E-computation-and-language-arxiv%3A2406.18532-(cs)-submitted-on-26-jun-2024-%23-symbolic-learning-enables-self-evolving-agents-authors%3A-wangchunshu-zhou%2C-yixin-ou%2C-shengwei-ding%2C-long-li%2C-jialong-wu%2C-tiannan-wang%2C-jiamin-chen%2C-shuai-wang%2C-xiaohua-xu%2C-ningyu-zhang%2C-huajun-chen%2C-yuchen-eleanor-jiang-comments%3A-code-available-at-this-https-url-subjects%3A-computation-and-language-(cs.cl)%3B-artificial-intelligence-(cs.ai)%3B-machine-learning-(cs.lg)-cite-as%3A-arxiv%3A2406.18532-%5Bcs.cl%5D-doi%3A-https%3A%2F%2Fdoi.org%2F10.48550%2Farxiv.2406.18532-%23%23-submission-history-from%3A-wangchunshu-zhou-v1%3A-wed%2C-26-jun-2024-17%3A59%3A18-utc-(563-kb)-access-paper%3A---view-pdf%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2406.18532---html-(experimental)%3A-https%3A%2F%2Farxiv.org%2Fhtml%2F2406.18532v1---tex-source%3A-https%3A%2F%2Farxiv.org%2Fsrc%2F2406.18532-license%3A-http%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-06-26---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q2---timestamp_confidence%3A-derived---timestamp_source%3A-published_field",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2406.18532---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2406.18532---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2406.18532---**authors**%3A-wangchunshu-zhou%2C-yixin-ou%2C-shengwei-ding%2C-long-li%2C-jialong-wu%2C-tiannan-wang%2C-jiamin-chen%2C-shuai-wang%2C-xiaohua-xu%2C-ningyu-zhang%2C-huajun-chen%2C-yuchen-eleanor-jiang---**published**%3A-2024-06-26-%23%23-abstract-the-ai-community-has-been-exploring-a-pathway-to-artificial-general-intelligence-(agi)-by-developing-%22language-agents%22%2C-which-are-complex-large-language-models-(llms)-pipelines-involving-both-prompting-techniques-and-tool-usage-methods.-while-language-agents-have-demonstrated-impressive-capabilities-for-many-real-world-tasks%2C-a-fundamental-limitation-of-current-language-agents-research-is-that-they-are-model-centric%2C-or-engineering-centric.-that's-to-say%2C-the-progress-on-prompts%2C-tools%2C-and-pipelines-of-language-agents-requires-substantial-manual-engineering-efforts-from-human-experts-rather-than-automatically-learning-from-data.-we-believe-the-transition-from-model-centric%2C-or-engineering-centric%2C-to-data-centric%2C-i.e.%2C-the-ability-of-language-agents-to-autonomously-learn-and-evolve-in-environments%2C-is-the-key-for-them-to-possibly-achieve-agi.-in-this-work%2C-we-introduce-agent-symbolic-learning%2C-a-systematic-framework-that-enables-language-agents-to-optimize-themselves-on-their-own-in-a-data-centric-way-using-symbolic-optimizers.-specifically%2C-we-consider-agents-as-symbolic-networks-where-learnable-weights-are-defined-by-prompts%2C-tools%2C-and-the-way-they-are-stacked-together.-agent-symbolic-learning-is-designed-to-optimize-the-symbolic-network-within-language-agents-by-mimicking-two-fundamental-algorithms-in-connectionist-learning%3A-back-propagation-and-gradient-descent.-instead-of-dealing-with-numeric-weights%2C-agent-symbolic-learning-works-with-natural-language-simulacrums-of-weights%2C-loss%2C-and-gradients.-we-conduct-proof-of-concept-experiments-on-both-standard-benchmarks-and-complex-real-world-tasks-and-show-that-agent-symbolic-learning-enables-language-agents-to-update-themselves-after-being-created-and-deployed-in-the-wild%2C-resulting-in-%22self-evolving-agents%22.-%23%23-full-content-computer-science-%3E-computation-and-language-arxiv%3A2406.18532-(cs)-submitted-on-26-jun-2024-%23-symbolic-learning-enables-self-evolving-agents-authors%3A-wangchunshu-zhou%2C-yixin-ou%2C-shengwei-ding%2C-long-li%2C-jialong-wu%2C-tiannan-wang%2C-jiamin-chen%2C-shuai-wang%2C-xiaohua-xu%2C-ningyu-zhang%2C-huajun-chen%2C-yuchen-eleanor-jiang-comments%3A-code-available-at-this-https-url-subjects%3A-computation-and-language-(cs.cl)%3B-artificial-intelligence-(cs.ai)%3B-machine-learning-(cs.lg)-cite-as%3A-arxiv%3A2406.18532-%5Bcs.cl%5D-doi%3A-https%3A%2F%2Fdoi.org%2F10.48550%2Farxiv.2406.18532-%23%23-submission-history-from%3A-wangchunshu-zhou-v1%3A-wed%2C-26-jun-2024-17%3A59%3A18-utc-(563-kb)-access-paper%3A---view-pdf%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2406.18532---html-(experimental)%3A-https%3A%2F%2Farxiv.org%2Fhtml%2F2406.18532v1---tex-source%3A-https%3A%2F%2Farxiv.org%2Fsrc%2F2406.18532-license%3A-http%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-06-26---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q2---timestamp_confidence%3A-derived---timestamp_source%3A-published_field",
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
    "source": "review:2407.19594-(v2)",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2407.19594-(v2)",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2407.19594-(v2)",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2407.19594-(v2)",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2407.19594-(v2)",
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
    "source": "review:2409.12147---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2409.12147---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2409.12147---**authors**%3A-justin-chih-yao-chen-et-al.---**year**%3A-2024-%23%23-abstract-multi-agent-framework-that-categorizes-problem-difficulty%2C-solving-easy-problems-with-coarse-grained-aggregation-and-hard-ones-with-fine-grained-iterative-multi-agent-refinement.-three-agents%3A-solver%2C-reviewer-(generates-targeted-feedback-based-on-step-wise-rm-scores)%2C-and-refiner-(incorporates-feedback).-one-iteration-beats-self-consistency-by-3.4%25%2C-best-of-k-by-3.2%25%2C-and-self-refine-by-4.0%25.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-09-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q3---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.12147---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2409.12147---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2409.12147---**authors**%3A-justin-chih-yao-chen-et-al.---**year**%3A-2024-%23%23-abstract-multi-agent-framework-that-categorizes-problem-difficulty%2C-solving-easy-problems-with-coarse-grained-aggregation-and-hard-ones-with-fine-grained-iterative-multi-agent-refinement.-three-agents%3A-solver%2C-reviewer-(generates-targeted-feedback-based-on-step-wise-rm-scores)%2C-and-refiner-(incorporates-feedback).-one-iteration-beats-self-consistency-by-3.4%25%2C-best-of-k-by-3.2%25%2C-and-self-refine-by-4.0%25.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-09-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q3---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.12147---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2409.12147---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2409.12147---**authors**%3A-justin-chih-yao-chen-et-al.---**year**%3A-2024-%23%23-abstract-multi-agent-framework-that-categorizes-problem-difficulty%2C-solving-easy-problems-with-coarse-grained-aggregation-and-hard-ones-with-fine-grained-iterative-multi-agent-refinement.-three-agents%3A-solver%2C-reviewer-(generates-targeted-feedback-based-on-step-wise-rm-scores)%2C-and-refiner-(incorporates-feedback).-one-iteration-beats-self-consistency-by-3.4%25%2C-best-of-k-by-3.2%25%2C-and-self-refine-by-4.0%25.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-09-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q3---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.12147---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2409.12147---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2409.12147---**authors**%3A-justin-chih-yao-chen-et-al.---**year**%3A-2024-%23%23-abstract-multi-agent-framework-that-categorizes-problem-difficulty%2C-solving-easy-problems-with-coarse-grained-aggregation-and-hard-ones-with-fine-grained-iterative-multi-agent-refinement.-three-agents%3A-solver%2C-reviewer-(generates-targeted-feedback-based-on-step-wise-rm-scores)%2C-and-refiner-(incorporates-feedback).-one-iteration-beats-self-consistency-by-3.4%25%2C-best-of-k-by-3.2%25%2C-and-self-refine-by-4.0%25.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-09-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q3---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.12147---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2409.12147---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2409.12147---**authors**%3A-justin-chih-yao-chen-et-al.---**year**%3A-2024-%23%23-abstract-multi-agent-framework-that-categorizes-problem-difficulty%2C-solving-easy-problems-with-coarse-grained-aggregation-and-hard-ones-with-fine-grained-iterative-multi-agent-refinement.-three-agents%3A-solver%2C-reviewer-(generates-targeted-feedback-based-on-step-wise-rm-scores)%2C-and-refiner-(incorporates-feedback).-one-iteration-beats-self-consistency-by-3.4%25%2C-best-of-k-by-3.2%25%2C-and-self-refine-by-4.0%25.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-09-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q3---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
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
    "source": "review:2409.14051---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2409.14051---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2409.14051---**authors**%3A-tongxuan-liu%2C-xingyu-wang%2C-weizhe-huang%2C-wenjiang-xu%2C-yuting-zeng%2C-lei-jiang%2C-hailong-yang%2C-jing-li---**year**%3A-2024-%23%23-abstract-method-to-significantly-reduce-token-cost-in-multi-agent-debates-by-dividing-agents-into-multiple-debate-groups%2C-with-agents-debating-within-groups-and-sharing-interim-results-between-groups.-reduces-total-tokens-by-up-to-51.7%25-while-potentially-enhancing-accuracy-by-up-to-25%25.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-09-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q3---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.14051---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2409.14051---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2409.14051---**authors**%3A-tongxuan-liu%2C-xingyu-wang%2C-weizhe-huang%2C-wenjiang-xu%2C-yuting-zeng%2C-lei-jiang%2C-hailong-yang%2C-jing-li---**year**%3A-2024-%23%23-abstract-method-to-significantly-reduce-token-cost-in-multi-agent-debates-by-dividing-agents-into-multiple-debate-groups%2C-with-agents-debating-within-groups-and-sharing-interim-results-between-groups.-reduces-total-tokens-by-up-to-51.7%25-while-potentially-enhancing-accuracy-by-up-to-25%25.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-09-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q3---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.14051---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2409.14051---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2409.14051---**authors**%3A-tongxuan-liu%2C-xingyu-wang%2C-weizhe-huang%2C-wenjiang-xu%2C-yuting-zeng%2C-lei-jiang%2C-hailong-yang%2C-jing-li---**year**%3A-2024-%23%23-abstract-method-to-significantly-reduce-token-cost-in-multi-agent-debates-by-dividing-agents-into-multiple-debate-groups%2C-with-agents-debating-within-groups-and-sharing-interim-results-between-groups.-reduces-total-tokens-by-up-to-51.7%25-while-potentially-enhancing-accuracy-by-up-to-25%25.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-09-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q3---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.14051---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2409.14051---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2409.14051---**authors**%3A-tongxuan-liu%2C-xingyu-wang%2C-weizhe-huang%2C-wenjiang-xu%2C-yuting-zeng%2C-lei-jiang%2C-hailong-yang%2C-jing-li---**year**%3A-2024-%23%23-abstract-method-to-significantly-reduce-token-cost-in-multi-agent-debates-by-dividing-agents-into-multiple-debate-groups%2C-with-agents-debating-within-groups-and-sharing-interim-results-between-groups.-reduces-total-tokens-by-up-to-51.7%25-while-potentially-enhancing-accuracy-by-up-to-25%25.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-09-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q3---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2409.14051---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2409.14051---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2409.14051---**authors**%3A-tongxuan-liu%2C-xingyu-wang%2C-weizhe-huang%2C-wenjiang-xu%2C-yuting-zeng%2C-lei-jiang%2C-hailong-yang%2C-jing-li---**year**%3A-2024-%23%23-abstract-method-to-significantly-reduce-token-cost-in-multi-agent-debates-by-dividing-agents-into-multiple-debate-groups%2C-with-agents-debating-within-groups-and-sharing-interim-results-between-groups.-reduces-total-tokens-by-up-to-51.7%25-while-potentially-enhancing-accuracy-by-up-to-25%25.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-09-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q3---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
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
    "source": "review:deep-academic-review%3A-can-large-language-models-invent-algorithms-to-improve-themselves%3F%3A-algorithm-discovery-for-recursive-self-improvement-through-reinforcement-learning",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-can-large-language-models-invent-algorithms-to-improve-themselves%3F%3A-algorithm-discovery-for-recursive-self-improvement-through-reinforcement-learning",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-can-large-language-models-invent-algorithms-to-improve-themselves%3F%3A-algorithm-discovery-for-recursive-self-improvement-through-reinforcement-learning",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-can-large-language-models-invent-algorithms-to-improve-themselves%3F%3A-algorithm-discovery-for-recursive-self-improvement-through-reinforcement-learning",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-can-large-language-models-invent-algorithms-to-improve-themselves%3F%3A-algorithm-discovery-for-recursive-self-improvement-through-reinforcement-learning",
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
    "source": "review:2411.02337---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2411.02337---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2411.02337---**authors**%3A-(see-arxiv-page-%E2%80%94-thudm)---**year**%3A-2024-%23%23-abstract-self-evolving-online-curriculum-rl-framework-for-training-high-performance-web-agents-using-open-llms.-incorporates-self-evolving-curriculum-generating-new-tasks-from-unsuccessful-attempts%2C-outcome-supervised-reward-model%2C-and-adaptive-rl-strategies.-improves-llama-3.1-8b-from-4.8%25-to-42.4%25-on-webarena-lite%2C-surpassing-gpt-4-turbo-(17.6%25).-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-11-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q4---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2411.02337---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2411.02337---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2411.02337---**authors**%3A-(see-arxiv-page-%E2%80%94-thudm)---**year**%3A-2024-%23%23-abstract-self-evolving-online-curriculum-rl-framework-for-training-high-performance-web-agents-using-open-llms.-incorporates-self-evolving-curriculum-generating-new-tasks-from-unsuccessful-attempts%2C-outcome-supervised-reward-model%2C-and-adaptive-rl-strategies.-improves-llama-3.1-8b-from-4.8%25-to-42.4%25-on-webarena-lite%2C-surpassing-gpt-4-turbo-(17.6%25).-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-11-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q4---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2411.02337---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2411.02337---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2411.02337---**authors**%3A-(see-arxiv-page-%E2%80%94-thudm)---**year**%3A-2024-%23%23-abstract-self-evolving-online-curriculum-rl-framework-for-training-high-performance-web-agents-using-open-llms.-incorporates-self-evolving-curriculum-generating-new-tasks-from-unsuccessful-attempts%2C-outcome-supervised-reward-model%2C-and-adaptive-rl-strategies.-improves-llama-3.1-8b-from-4.8%25-to-42.4%25-on-webarena-lite%2C-surpassing-gpt-4-turbo-(17.6%25).-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-11-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q4---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2411.02337---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2411.02337---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2411.02337---**authors**%3A-(see-arxiv-page-%E2%80%94-thudm)---**year**%3A-2024-%23%23-abstract-self-evolving-online-curriculum-rl-framework-for-training-high-performance-web-agents-using-open-llms.-incorporates-self-evolving-curriculum-generating-new-tasks-from-unsuccessful-attempts%2C-outcome-supervised-reward-model%2C-and-adaptive-rl-strategies.-improves-llama-3.1-8b-from-4.8%25-to-42.4%25-on-webarena-lite%2C-surpassing-gpt-4-turbo-(17.6%25).-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-11-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q4---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2411.02337---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2411.02337---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2411.02337---**authors**%3A-(see-arxiv-page-%E2%80%94-thudm)---**year**%3A-2024-%23%23-abstract-self-evolving-online-curriculum-rl-framework-for-training-high-performance-web-agents-using-open-llms.-incorporates-self-evolving-curriculum-generating-new-tasks-from-unsuccessful-attempts%2C-outcome-supervised-reward-model%2C-and-adaptive-rl-strategies.-improves-llama-3.1-8b-from-4.8%25-to-42.4%25-on-webarena-lite%2C-surpassing-gpt-4-turbo-(17.6%25).-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2024-11-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2024-q4---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:benchmark%2Feval",
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
    "source": "review:deep-academic-review%3A-sirius%3A-self-improving-multi-agent-systems-via-bootstrapped-reasoning-**authors**%3A-wanjia-zhao%2C-mert-yuksekgonul%2C-shirley-wu%2C-james-zou-**submitted**%3A-2025-02-07-(v1)-%23%23-abstract-multi-agent-ai-systems-powered-by-large-language-models-(llms)-are-increasingly-applied-to-solve-complex-tasks.-however%2C-these-systems-often-rely-on-fragile%2C-manually-designed-prompts-and-heuristics%2C-making-optimization-difficult.-a-key-challenge-in-optimizing-multi-agent-systems-is-acquiring-suitable-training-data-for-specialized-agents.-we-introduce-sirius%2C-a-self-improving%2C-reasoning-driven-optimization-framework-for-multi-agent-systems.-central-to-our-approach-is-the-construction-of-an-experience-library%3A-a-repository-of-high-quality-reasoning-trajectories.-the-library-is-built-by-retaining-reasoning-steps-that-lead-to-successful-outcomes%2C-providing-a-robust-training-set-for-optimizing-multi-agent-system.-additionally%2C-we-introduce-a-library-augmentation-procedure-that-refines-unsuccessful-trajectories%2C-further-enriching-the-library.-sirius-boosts-performance-by-2.86%25-to-21.88%25-on-reasoning-and-biomedical-qa-and-enhances-agent-negotiation-in-competitive-settings.-our-results-show-that-sirius-enhances-multi-agent-performance-while-generating-reusable-data-for-self-correction-and-self-play-enhancement-in-the-future.-%23%23-key-contributions-1.-introduces-an-experience-library-of-high-quality-reasoning-trajectories-that-serves-as-a-reusable-knowledge-repository-for-multi-agent-systems%2C-enabling-self-improvement-through-accumulated-successful-reasoning.-2.-proposes-a-library-augmentation-procedure-that-refines-unsuccessful-trajectories-into-useful-training-data%2C-turning-failures-into-learning-opportunities-for-the-multi-agent-system.-3.-demonstrates-performance-improvements-of-2.86%25-to-21.88%25-on-reasoning-and-biomedical-qa-tasks%2C-with-additional-improvements-in-agent-negotiation-in-competitive-settings%2C-showing-the-framework-generates-reusable-data-for-future-self-correction-and-self-play.-%23%23-relevance-to-agent-evolution-sirius-demonstrates-how-multi-agent-systems-can-bootstrap-their-own-improvement-by-building-and-curating-experience-libraries-from-both-successful-and-failed-reasoning-trajectories.-this-trajectory-level-self-improvement-mechanism-represents-a-key-evolutionary-pattern-where-agents-collectively-learn-from-accumulated-experience%2C-providing-a-pathway-for-multi-agent-systems-to-continuously-evolve-beyond-their-initial-capabilities.-%23%23-classification---category%3A-multi-agent-self-improvement---method%3A-experience-library-with-bootstrapped-reasoning---scope%3A-multi-agent-optimization-across-reasoning-and-biomedical-qa-tasks-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-02-07---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-sirius%3A-self-improving-multi-agent-systems-via-bootstrapped-reasoning-**authors**%3A-wanjia-zhao%2C-mert-yuksekgonul%2C-shirley-wu%2C-james-zou-**submitted**%3A-2025-02-07-(v1)-%23%23-abstract-multi-agent-ai-systems-powered-by-large-language-models-(llms)-are-increasingly-applied-to-solve-complex-tasks.-however%2C-these-systems-often-rely-on-fragile%2C-manually-designed-prompts-and-heuristics%2C-making-optimization-difficult.-a-key-challenge-in-optimizing-multi-agent-systems-is-acquiring-suitable-training-data-for-specialized-agents.-we-introduce-sirius%2C-a-self-improving%2C-reasoning-driven-optimization-framework-for-multi-agent-systems.-central-to-our-approach-is-the-construction-of-an-experience-library%3A-a-repository-of-high-quality-reasoning-trajectories.-the-library-is-built-by-retaining-reasoning-steps-that-lead-to-successful-outcomes%2C-providing-a-robust-training-set-for-optimizing-multi-agent-system.-additionally%2C-we-introduce-a-library-augmentation-procedure-that-refines-unsuccessful-trajectories%2C-further-enriching-the-library.-sirius-boosts-performance-by-2.86%25-to-21.88%25-on-reasoning-and-biomedical-qa-and-enhances-agent-negotiation-in-competitive-settings.-our-results-show-that-sirius-enhances-multi-agent-performance-while-generating-reusable-data-for-self-correction-and-self-play-enhancement-in-the-future.-%23%23-key-contributions-1.-introduces-an-experience-library-of-high-quality-reasoning-trajectories-that-serves-as-a-reusable-knowledge-repository-for-multi-agent-systems%2C-enabling-self-improvement-through-accumulated-successful-reasoning.-2.-proposes-a-library-augmentation-procedure-that-refines-unsuccessful-trajectories-into-useful-training-data%2C-turning-failures-into-learning-opportunities-for-the-multi-agent-system.-3.-demonstrates-performance-improvements-of-2.86%25-to-21.88%25-on-reasoning-and-biomedical-qa-tasks%2C-with-additional-improvements-in-agent-negotiation-in-competitive-settings%2C-showing-the-framework-generates-reusable-data-for-future-self-correction-and-self-play.-%23%23-relevance-to-agent-evolution-sirius-demonstrates-how-multi-agent-systems-can-bootstrap-their-own-improvement-by-building-and-curating-experience-libraries-from-both-successful-and-failed-reasoning-trajectories.-this-trajectory-level-self-improvement-mechanism-represents-a-key-evolutionary-pattern-where-agents-collectively-learn-from-accumulated-experience%2C-providing-a-pathway-for-multi-agent-systems-to-continuously-evolve-beyond-their-initial-capabilities.-%23%23-classification---category%3A-multi-agent-self-improvement---method%3A-experience-library-with-bootstrapped-reasoning---scope%3A-multi-agent-optimization-across-reasoning-and-biomedical-qa-tasks-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-02-07---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-sirius%3A-self-improving-multi-agent-systems-via-bootstrapped-reasoning-**authors**%3A-wanjia-zhao%2C-mert-yuksekgonul%2C-shirley-wu%2C-james-zou-**submitted**%3A-2025-02-07-(v1)-%23%23-abstract-multi-agent-ai-systems-powered-by-large-language-models-(llms)-are-increasingly-applied-to-solve-complex-tasks.-however%2C-these-systems-often-rely-on-fragile%2C-manually-designed-prompts-and-heuristics%2C-making-optimization-difficult.-a-key-challenge-in-optimizing-multi-agent-systems-is-acquiring-suitable-training-data-for-specialized-agents.-we-introduce-sirius%2C-a-self-improving%2C-reasoning-driven-optimization-framework-for-multi-agent-systems.-central-to-our-approach-is-the-construction-of-an-experience-library%3A-a-repository-of-high-quality-reasoning-trajectories.-the-library-is-built-by-retaining-reasoning-steps-that-lead-to-successful-outcomes%2C-providing-a-robust-training-set-for-optimizing-multi-agent-system.-additionally%2C-we-introduce-a-library-augmentation-procedure-that-refines-unsuccessful-trajectories%2C-further-enriching-the-library.-sirius-boosts-performance-by-2.86%25-to-21.88%25-on-reasoning-and-biomedical-qa-and-enhances-agent-negotiation-in-competitive-settings.-our-results-show-that-sirius-enhances-multi-agent-performance-while-generating-reusable-data-for-self-correction-and-self-play-enhancement-in-the-future.-%23%23-key-contributions-1.-introduces-an-experience-library-of-high-quality-reasoning-trajectories-that-serves-as-a-reusable-knowledge-repository-for-multi-agent-systems%2C-enabling-self-improvement-through-accumulated-successful-reasoning.-2.-proposes-a-library-augmentation-procedure-that-refines-unsuccessful-trajectories-into-useful-training-data%2C-turning-failures-into-learning-opportunities-for-the-multi-agent-system.-3.-demonstrates-performance-improvements-of-2.86%25-to-21.88%25-on-reasoning-and-biomedical-qa-tasks%2C-with-additional-improvements-in-agent-negotiation-in-competitive-settings%2C-showing-the-framework-generates-reusable-data-for-future-self-correction-and-self-play.-%23%23-relevance-to-agent-evolution-sirius-demonstrates-how-multi-agent-systems-can-bootstrap-their-own-improvement-by-building-and-curating-experience-libraries-from-both-successful-and-failed-reasoning-trajectories.-this-trajectory-level-self-improvement-mechanism-represents-a-key-evolutionary-pattern-where-agents-collectively-learn-from-accumulated-experience%2C-providing-a-pathway-for-multi-agent-systems-to-continuously-evolve-beyond-their-initial-capabilities.-%23%23-classification---category%3A-multi-agent-self-improvement---method%3A-experience-library-with-bootstrapped-reasoning---scope%3A-multi-agent-optimization-across-reasoning-and-biomedical-qa-tasks-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-02-07---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-sirius%3A-self-improving-multi-agent-systems-via-bootstrapped-reasoning-**authors**%3A-wanjia-zhao%2C-mert-yuksekgonul%2C-shirley-wu%2C-james-zou-**submitted**%3A-2025-02-07-(v1)-%23%23-abstract-multi-agent-ai-systems-powered-by-large-language-models-(llms)-are-increasingly-applied-to-solve-complex-tasks.-however%2C-these-systems-often-rely-on-fragile%2C-manually-designed-prompts-and-heuristics%2C-making-optimization-difficult.-a-key-challenge-in-optimizing-multi-agent-systems-is-acquiring-suitable-training-data-for-specialized-agents.-we-introduce-sirius%2C-a-self-improving%2C-reasoning-driven-optimization-framework-for-multi-agent-systems.-central-to-our-approach-is-the-construction-of-an-experience-library%3A-a-repository-of-high-quality-reasoning-trajectories.-the-library-is-built-by-retaining-reasoning-steps-that-lead-to-successful-outcomes%2C-providing-a-robust-training-set-for-optimizing-multi-agent-system.-additionally%2C-we-introduce-a-library-augmentation-procedure-that-refines-unsuccessful-trajectories%2C-further-enriching-the-library.-sirius-boosts-performance-by-2.86%25-to-21.88%25-on-reasoning-and-biomedical-qa-and-enhances-agent-negotiation-in-competitive-settings.-our-results-show-that-sirius-enhances-multi-agent-performance-while-generating-reusable-data-for-self-correction-and-self-play-enhancement-in-the-future.-%23%23-key-contributions-1.-introduces-an-experience-library-of-high-quality-reasoning-trajectories-that-serves-as-a-reusable-knowledge-repository-for-multi-agent-systems%2C-enabling-self-improvement-through-accumulated-successful-reasoning.-2.-proposes-a-library-augmentation-procedure-that-refines-unsuccessful-trajectories-into-useful-training-data%2C-turning-failures-into-learning-opportunities-for-the-multi-agent-system.-3.-demonstrates-performance-improvements-of-2.86%25-to-21.88%25-on-reasoning-and-biomedical-qa-tasks%2C-with-additional-improvements-in-agent-negotiation-in-competitive-settings%2C-showing-the-framework-generates-reusable-data-for-future-self-correction-and-self-play.-%23%23-relevance-to-agent-evolution-sirius-demonstrates-how-multi-agent-systems-can-bootstrap-their-own-improvement-by-building-and-curating-experience-libraries-from-both-successful-and-failed-reasoning-trajectories.-this-trajectory-level-self-improvement-mechanism-represents-a-key-evolutionary-pattern-where-agents-collectively-learn-from-accumulated-experience%2C-providing-a-pathway-for-multi-agent-systems-to-continuously-evolve-beyond-their-initial-capabilities.-%23%23-classification---category%3A-multi-agent-self-improvement---method%3A-experience-library-with-bootstrapped-reasoning---scope%3A-multi-agent-optimization-across-reasoning-and-biomedical-qa-tasks-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-02-07---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-sirius%3A-self-improving-multi-agent-systems-via-bootstrapped-reasoning-**authors**%3A-wanjia-zhao%2C-mert-yuksekgonul%2C-shirley-wu%2C-james-zou-**submitted**%3A-2025-02-07-(v1)-%23%23-abstract-multi-agent-ai-systems-powered-by-large-language-models-(llms)-are-increasingly-applied-to-solve-complex-tasks.-however%2C-these-systems-often-rely-on-fragile%2C-manually-designed-prompts-and-heuristics%2C-making-optimization-difficult.-a-key-challenge-in-optimizing-multi-agent-systems-is-acquiring-suitable-training-data-for-specialized-agents.-we-introduce-sirius%2C-a-self-improving%2C-reasoning-driven-optimization-framework-for-multi-agent-systems.-central-to-our-approach-is-the-construction-of-an-experience-library%3A-a-repository-of-high-quality-reasoning-trajectories.-the-library-is-built-by-retaining-reasoning-steps-that-lead-to-successful-outcomes%2C-providing-a-robust-training-set-for-optimizing-multi-agent-system.-additionally%2C-we-introduce-a-library-augmentation-procedure-that-refines-unsuccessful-trajectories%2C-further-enriching-the-library.-sirius-boosts-performance-by-2.86%25-to-21.88%25-on-reasoning-and-biomedical-qa-and-enhances-agent-negotiation-in-competitive-settings.-our-results-show-that-sirius-enhances-multi-agent-performance-while-generating-reusable-data-for-self-correction-and-self-play-enhancement-in-the-future.-%23%23-key-contributions-1.-introduces-an-experience-library-of-high-quality-reasoning-trajectories-that-serves-as-a-reusable-knowledge-repository-for-multi-agent-systems%2C-enabling-self-improvement-through-accumulated-successful-reasoning.-2.-proposes-a-library-augmentation-procedure-that-refines-unsuccessful-trajectories-into-useful-training-data%2C-turning-failures-into-learning-opportunities-for-the-multi-agent-system.-3.-demonstrates-performance-improvements-of-2.86%25-to-21.88%25-on-reasoning-and-biomedical-qa-tasks%2C-with-additional-improvements-in-agent-negotiation-in-competitive-settings%2C-showing-the-framework-generates-reusable-data-for-future-self-correction-and-self-play.-%23%23-relevance-to-agent-evolution-sirius-demonstrates-how-multi-agent-systems-can-bootstrap-their-own-improvement-by-building-and-curating-experience-libraries-from-both-successful-and-failed-reasoning-trajectories.-this-trajectory-level-self-improvement-mechanism-represents-a-key-evolutionary-pattern-where-agents-collectively-learn-from-accumulated-experience%2C-providing-a-pathway-for-multi-agent-systems-to-continuously-evolve-beyond-their-initial-capabilities.-%23%23-classification---category%3A-multi-agent-self-improvement---method%3A-experience-library-with-bootstrapped-reasoning---scope%3A-multi-agent-optimization-across-reasoning-and-biomedical-qa-tasks-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-02-07---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
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
    "source": "review:2502.12110---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2502.12110---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2502.12110---**authors**%3A-(see-arxiv-page)---**year**%3A-2025-(neurips-2025)-%23%23-abstract-novel-agentic-memory-system-for-llm-agents-that-dynamically-organizes-memories-following-the-zettelkasten-method.-creates-interconnected-knowledge-networks-through-dynamic-indexing-and-linking.-when-new-memory-is-added%2C-system-generates-comprehensive-notes-with-contextual-descriptions%2C-keywords%2C-and-tags%2C-then-analyzes-historical-memories-to-establish-connections.-enables-memory-evolution-where-new-memories-trigger-updates-to-existing-ones.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-02-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2025-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.12110---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2502.12110---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2502.12110---**authors**%3A-(see-arxiv-page)---**year**%3A-2025-(neurips-2025)-%23%23-abstract-novel-agentic-memory-system-for-llm-agents-that-dynamically-organizes-memories-following-the-zettelkasten-method.-creates-interconnected-knowledge-networks-through-dynamic-indexing-and-linking.-when-new-memory-is-added%2C-system-generates-comprehensive-notes-with-contextual-descriptions%2C-keywords%2C-and-tags%2C-then-analyzes-historical-memories-to-establish-connections.-enables-memory-evolution-where-new-memories-trigger-updates-to-existing-ones.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-02-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2025-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.12110---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2502.12110---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2502.12110---**authors**%3A-(see-arxiv-page)---**year**%3A-2025-(neurips-2025)-%23%23-abstract-novel-agentic-memory-system-for-llm-agents-that-dynamically-organizes-memories-following-the-zettelkasten-method.-creates-interconnected-knowledge-networks-through-dynamic-indexing-and-linking.-when-new-memory-is-added%2C-system-generates-comprehensive-notes-with-contextual-descriptions%2C-keywords%2C-and-tags%2C-then-analyzes-historical-memories-to-establish-connections.-enables-memory-evolution-where-new-memories-trigger-updates-to-existing-ones.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-02-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2025-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.12110---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2502.12110---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2502.12110---**authors**%3A-(see-arxiv-page)---**year**%3A-2025-(neurips-2025)-%23%23-abstract-novel-agentic-memory-system-for-llm-agents-that-dynamically-organizes-memories-following-the-zettelkasten-method.-creates-interconnected-knowledge-networks-through-dynamic-indexing-and-linking.-when-new-memory-is-added%2C-system-generates-comprehensive-notes-with-contextual-descriptions%2C-keywords%2C-and-tags%2C-then-analyzes-historical-memories-to-establish-connections.-enables-memory-evolution-where-new-memories-trigger-updates-to-existing-ones.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-02-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2025-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2502.12110---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2502.12110---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2502.12110---**authors**%3A-(see-arxiv-page)---**year**%3A-2025-(neurips-2025)-%23%23-abstract-novel-agentic-memory-system-for-llm-agents-that-dynamically-organizes-memories-following-the-zettelkasten-method.-creates-interconnected-knowledge-networks-through-dynamic-indexing-and-linking.-when-new-memory-is-added%2C-system-generates-comprehensive-notes-with-contextual-descriptions%2C-keywords%2C-and-tags%2C-then-analyzes-historical-memories-to-establish-connections.-enables-memory-evolution-where-new-memories-trigger-updates-to-existing-ones.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-02-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2025-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:benchmark%2Feval",
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
    "source": "review:deep-academic-review%3A-self-generated-in-context-examples-improve-llm-agents-for-sequential-decision-making-tasks-**authors**%3A-vishnu-sarukkai%2C-zhiqiang-xie%2C-kayvon-fatahalian-**submitted**%3A-2025-05-01-(v1)-%23%23-abstract-improving-large-language-model-(llm)-agents-for-sequential-decision-making-tasks-typically-requires-extensive-task-specific-knowledge-engineering--custom-prompts%2C-curated-examples%2C-and-specialized-observation%2Faction-spaces.-we-investigate-a-different-approach-where-agents-automatically-improve-by-learning-from-their-own-successful-experiences-without-human-intervention.-our-method-constructs-and-refines-a-database-of-self-generated-trajectories-that-serve-as-in-context-examples-for-future-tasks.-even-naive-accumulation-of-successful-trajectories-yields-substantial-performance-gains-across-three-diverse-benchmarks%3A-alfworld-(73%25-to-89%25)%2C-wordcraft-(55%25-to-64%25)%2C-and-intercode-sql-(75%25-to-79%25).-these-improvements-exceed-those-achieved-by-upgrading-from-gpt-4o-mini-to-gpt-4o-and-match-the-performance-of-allowing-multiple-attempts-per-task.-we-further-enhance-this-approach-with-two-innovations%3A-database-level-curation-using-population-based-training-to-propagate-high-performing-example-collections%2C-and-exemplar-level-curation-that-selectively-retains-trajectories-based-on-their-empirical-utility-as-in-context-examples.-with-these-enhancements%2C-our-method-achieves-93%25-success-on-alfworld--surpassing-approaches-that-use-more-powerful-llms-and-hand-crafted-components.-our-trajectory-bootstrapping-technique-demonstrates-that-agents-can-autonomously-improve-through-experience%2C-offering-a-scalable-alternative-to-labor-intensive-knowledge-engineering.-%23%23-key-contributions-1.-demonstrates-that-naive-accumulation-of-self-generated-successful-trajectories-as-in-context-examples-yields-substantial-performance-gains-(e.g.%2C-alfworld-73%25-to-89%25)%2C-exceeding-the-improvement-from-upgrading-model-tiers-(gpt-4o-mini-to-gpt-4o).-2.-introduces-dual-level-curation%3A-database-level-curation-via-population-based-training-to-propagate-high-performing-example-collections%2C-and-exemplar-level-curation-that-selectively-retains-trajectories-based-on-empirical-utility.-3.-achieves-93%25-success-on-alfworld-with-enhanced-curation%2C-surpassing-approaches-using-more-powerful-llms-and-hand-crafted-components%2C-proving-autonomous-self-improvement-is-a-scalable-alternative-to-knowledge-engineering.-%23%23-relevance-to-agent-evolution-this-work-establishes-a-practical-self-evolution-loop-where-agents-improve-through-their-own-successful-experiences%2C-constructing-trajectory-databases-that-serve-as-evolving-in-context-knowledge.-the-dual-level-curation-mechanism-(database-and-exemplar)-provides-a-principled-approach-to-managing-the-growth-of-an-agent's-experiential-knowledge-base%2C-demonstrating-that-autonomous-trajectory-bootstrapping-can-replace-manual-knowledge-engineering-as-a-driver-of-continuous-agent-improvement.-%23%23-classification---category%3A-autonomous-agent-self-improvement---method%3A-trajectory-bootstrapping-with-dual-level-curation---scope%3A-sequential-decision-making-tasks-across-diverse-benchmarks-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-05-01---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-generated-in-context-examples-improve-llm-agents-for-sequential-decision-making-tasks-**authors**%3A-vishnu-sarukkai%2C-zhiqiang-xie%2C-kayvon-fatahalian-**submitted**%3A-2025-05-01-(v1)-%23%23-abstract-improving-large-language-model-(llm)-agents-for-sequential-decision-making-tasks-typically-requires-extensive-task-specific-knowledge-engineering--custom-prompts%2C-curated-examples%2C-and-specialized-observation%2Faction-spaces.-we-investigate-a-different-approach-where-agents-automatically-improve-by-learning-from-their-own-successful-experiences-without-human-intervention.-our-method-constructs-and-refines-a-database-of-self-generated-trajectories-that-serve-as-in-context-examples-for-future-tasks.-even-naive-accumulation-of-successful-trajectories-yields-substantial-performance-gains-across-three-diverse-benchmarks%3A-alfworld-(73%25-to-89%25)%2C-wordcraft-(55%25-to-64%25)%2C-and-intercode-sql-(75%25-to-79%25).-these-improvements-exceed-those-achieved-by-upgrading-from-gpt-4o-mini-to-gpt-4o-and-match-the-performance-of-allowing-multiple-attempts-per-task.-we-further-enhance-this-approach-with-two-innovations%3A-database-level-curation-using-population-based-training-to-propagate-high-performing-example-collections%2C-and-exemplar-level-curation-that-selectively-retains-trajectories-based-on-their-empirical-utility-as-in-context-examples.-with-these-enhancements%2C-our-method-achieves-93%25-success-on-alfworld--surpassing-approaches-that-use-more-powerful-llms-and-hand-crafted-components.-our-trajectory-bootstrapping-technique-demonstrates-that-agents-can-autonomously-improve-through-experience%2C-offering-a-scalable-alternative-to-labor-intensive-knowledge-engineering.-%23%23-key-contributions-1.-demonstrates-that-naive-accumulation-of-self-generated-successful-trajectories-as-in-context-examples-yields-substantial-performance-gains-(e.g.%2C-alfworld-73%25-to-89%25)%2C-exceeding-the-improvement-from-upgrading-model-tiers-(gpt-4o-mini-to-gpt-4o).-2.-introduces-dual-level-curation%3A-database-level-curation-via-population-based-training-to-propagate-high-performing-example-collections%2C-and-exemplar-level-curation-that-selectively-retains-trajectories-based-on-empirical-utility.-3.-achieves-93%25-success-on-alfworld-with-enhanced-curation%2C-surpassing-approaches-using-more-powerful-llms-and-hand-crafted-components%2C-proving-autonomous-self-improvement-is-a-scalable-alternative-to-knowledge-engineering.-%23%23-relevance-to-agent-evolution-this-work-establishes-a-practical-self-evolution-loop-where-agents-improve-through-their-own-successful-experiences%2C-constructing-trajectory-databases-that-serve-as-evolving-in-context-knowledge.-the-dual-level-curation-mechanism-(database-and-exemplar)-provides-a-principled-approach-to-managing-the-growth-of-an-agent's-experiential-knowledge-base%2C-demonstrating-that-autonomous-trajectory-bootstrapping-can-replace-manual-knowledge-engineering-as-a-driver-of-continuous-agent-improvement.-%23%23-classification---category%3A-autonomous-agent-self-improvement---method%3A-trajectory-bootstrapping-with-dual-level-curation---scope%3A-sequential-decision-making-tasks-across-diverse-benchmarks-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-05-01---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-generated-in-context-examples-improve-llm-agents-for-sequential-decision-making-tasks-**authors**%3A-vishnu-sarukkai%2C-zhiqiang-xie%2C-kayvon-fatahalian-**submitted**%3A-2025-05-01-(v1)-%23%23-abstract-improving-large-language-model-(llm)-agents-for-sequential-decision-making-tasks-typically-requires-extensive-task-specific-knowledge-engineering--custom-prompts%2C-curated-examples%2C-and-specialized-observation%2Faction-spaces.-we-investigate-a-different-approach-where-agents-automatically-improve-by-learning-from-their-own-successful-experiences-without-human-intervention.-our-method-constructs-and-refines-a-database-of-self-generated-trajectories-that-serve-as-in-context-examples-for-future-tasks.-even-naive-accumulation-of-successful-trajectories-yields-substantial-performance-gains-across-three-diverse-benchmarks%3A-alfworld-(73%25-to-89%25)%2C-wordcraft-(55%25-to-64%25)%2C-and-intercode-sql-(75%25-to-79%25).-these-improvements-exceed-those-achieved-by-upgrading-from-gpt-4o-mini-to-gpt-4o-and-match-the-performance-of-allowing-multiple-attempts-per-task.-we-further-enhance-this-approach-with-two-innovations%3A-database-level-curation-using-population-based-training-to-propagate-high-performing-example-collections%2C-and-exemplar-level-curation-that-selectively-retains-trajectories-based-on-their-empirical-utility-as-in-context-examples.-with-these-enhancements%2C-our-method-achieves-93%25-success-on-alfworld--surpassing-approaches-that-use-more-powerful-llms-and-hand-crafted-components.-our-trajectory-bootstrapping-technique-demonstrates-that-agents-can-autonomously-improve-through-experience%2C-offering-a-scalable-alternative-to-labor-intensive-knowledge-engineering.-%23%23-key-contributions-1.-demonstrates-that-naive-accumulation-of-self-generated-successful-trajectories-as-in-context-examples-yields-substantial-performance-gains-(e.g.%2C-alfworld-73%25-to-89%25)%2C-exceeding-the-improvement-from-upgrading-model-tiers-(gpt-4o-mini-to-gpt-4o).-2.-introduces-dual-level-curation%3A-database-level-curation-via-population-based-training-to-propagate-high-performing-example-collections%2C-and-exemplar-level-curation-that-selectively-retains-trajectories-based-on-empirical-utility.-3.-achieves-93%25-success-on-alfworld-with-enhanced-curation%2C-surpassing-approaches-using-more-powerful-llms-and-hand-crafted-components%2C-proving-autonomous-self-improvement-is-a-scalable-alternative-to-knowledge-engineering.-%23%23-relevance-to-agent-evolution-this-work-establishes-a-practical-self-evolution-loop-where-agents-improve-through-their-own-successful-experiences%2C-constructing-trajectory-databases-that-serve-as-evolving-in-context-knowledge.-the-dual-level-curation-mechanism-(database-and-exemplar)-provides-a-principled-approach-to-managing-the-growth-of-an-agent's-experiential-knowledge-base%2C-demonstrating-that-autonomous-trajectory-bootstrapping-can-replace-manual-knowledge-engineering-as-a-driver-of-continuous-agent-improvement.-%23%23-classification---category%3A-autonomous-agent-self-improvement---method%3A-trajectory-bootstrapping-with-dual-level-curation---scope%3A-sequential-decision-making-tasks-across-diverse-benchmarks-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-05-01---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-generated-in-context-examples-improve-llm-agents-for-sequential-decision-making-tasks-**authors**%3A-vishnu-sarukkai%2C-zhiqiang-xie%2C-kayvon-fatahalian-**submitted**%3A-2025-05-01-(v1)-%23%23-abstract-improving-large-language-model-(llm)-agents-for-sequential-decision-making-tasks-typically-requires-extensive-task-specific-knowledge-engineering--custom-prompts%2C-curated-examples%2C-and-specialized-observation%2Faction-spaces.-we-investigate-a-different-approach-where-agents-automatically-improve-by-learning-from-their-own-successful-experiences-without-human-intervention.-our-method-constructs-and-refines-a-database-of-self-generated-trajectories-that-serve-as-in-context-examples-for-future-tasks.-even-naive-accumulation-of-successful-trajectories-yields-substantial-performance-gains-across-three-diverse-benchmarks%3A-alfworld-(73%25-to-89%25)%2C-wordcraft-(55%25-to-64%25)%2C-and-intercode-sql-(75%25-to-79%25).-these-improvements-exceed-those-achieved-by-upgrading-from-gpt-4o-mini-to-gpt-4o-and-match-the-performance-of-allowing-multiple-attempts-per-task.-we-further-enhance-this-approach-with-two-innovations%3A-database-level-curation-using-population-based-training-to-propagate-high-performing-example-collections%2C-and-exemplar-level-curation-that-selectively-retains-trajectories-based-on-their-empirical-utility-as-in-context-examples.-with-these-enhancements%2C-our-method-achieves-93%25-success-on-alfworld--surpassing-approaches-that-use-more-powerful-llms-and-hand-crafted-components.-our-trajectory-bootstrapping-technique-demonstrates-that-agents-can-autonomously-improve-through-experience%2C-offering-a-scalable-alternative-to-labor-intensive-knowledge-engineering.-%23%23-key-contributions-1.-demonstrates-that-naive-accumulation-of-self-generated-successful-trajectories-as-in-context-examples-yields-substantial-performance-gains-(e.g.%2C-alfworld-73%25-to-89%25)%2C-exceeding-the-improvement-from-upgrading-model-tiers-(gpt-4o-mini-to-gpt-4o).-2.-introduces-dual-level-curation%3A-database-level-curation-via-population-based-training-to-propagate-high-performing-example-collections%2C-and-exemplar-level-curation-that-selectively-retains-trajectories-based-on-empirical-utility.-3.-achieves-93%25-success-on-alfworld-with-enhanced-curation%2C-surpassing-approaches-using-more-powerful-llms-and-hand-crafted-components%2C-proving-autonomous-self-improvement-is-a-scalable-alternative-to-knowledge-engineering.-%23%23-relevance-to-agent-evolution-this-work-establishes-a-practical-self-evolution-loop-where-agents-improve-through-their-own-successful-experiences%2C-constructing-trajectory-databases-that-serve-as-evolving-in-context-knowledge.-the-dual-level-curation-mechanism-(database-and-exemplar)-provides-a-principled-approach-to-managing-the-growth-of-an-agent's-experiential-knowledge-base%2C-demonstrating-that-autonomous-trajectory-bootstrapping-can-replace-manual-knowledge-engineering-as-a-driver-of-continuous-agent-improvement.-%23%23-classification---category%3A-autonomous-agent-self-improvement---method%3A-trajectory-bootstrapping-with-dual-level-curation---scope%3A-sequential-decision-making-tasks-across-diverse-benchmarks-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-05-01---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-generated-in-context-examples-improve-llm-agents-for-sequential-decision-making-tasks-**authors**%3A-vishnu-sarukkai%2C-zhiqiang-xie%2C-kayvon-fatahalian-**submitted**%3A-2025-05-01-(v1)-%23%23-abstract-improving-large-language-model-(llm)-agents-for-sequential-decision-making-tasks-typically-requires-extensive-task-specific-knowledge-engineering--custom-prompts%2C-curated-examples%2C-and-specialized-observation%2Faction-spaces.-we-investigate-a-different-approach-where-agents-automatically-improve-by-learning-from-their-own-successful-experiences-without-human-intervention.-our-method-constructs-and-refines-a-database-of-self-generated-trajectories-that-serve-as-in-context-examples-for-future-tasks.-even-naive-accumulation-of-successful-trajectories-yields-substantial-performance-gains-across-three-diverse-benchmarks%3A-alfworld-(73%25-to-89%25)%2C-wordcraft-(55%25-to-64%25)%2C-and-intercode-sql-(75%25-to-79%25).-these-improvements-exceed-those-achieved-by-upgrading-from-gpt-4o-mini-to-gpt-4o-and-match-the-performance-of-allowing-multiple-attempts-per-task.-we-further-enhance-this-approach-with-two-innovations%3A-database-level-curation-using-population-based-training-to-propagate-high-performing-example-collections%2C-and-exemplar-level-curation-that-selectively-retains-trajectories-based-on-their-empirical-utility-as-in-context-examples.-with-these-enhancements%2C-our-method-achieves-93%25-success-on-alfworld--surpassing-approaches-that-use-more-powerful-llms-and-hand-crafted-components.-our-trajectory-bootstrapping-technique-demonstrates-that-agents-can-autonomously-improve-through-experience%2C-offering-a-scalable-alternative-to-labor-intensive-knowledge-engineering.-%23%23-key-contributions-1.-demonstrates-that-naive-accumulation-of-self-generated-successful-trajectories-as-in-context-examples-yields-substantial-performance-gains-(e.g.%2C-alfworld-73%25-to-89%25)%2C-exceeding-the-improvement-from-upgrading-model-tiers-(gpt-4o-mini-to-gpt-4o).-2.-introduces-dual-level-curation%3A-database-level-curation-via-population-based-training-to-propagate-high-performing-example-collections%2C-and-exemplar-level-curation-that-selectively-retains-trajectories-based-on-empirical-utility.-3.-achieves-93%25-success-on-alfworld-with-enhanced-curation%2C-surpassing-approaches-using-more-powerful-llms-and-hand-crafted-components%2C-proving-autonomous-self-improvement-is-a-scalable-alternative-to-knowledge-engineering.-%23%23-relevance-to-agent-evolution-this-work-establishes-a-practical-self-evolution-loop-where-agents-improve-through-their-own-successful-experiences%2C-constructing-trajectory-databases-that-serve-as-evolving-in-context-knowledge.-the-dual-level-curation-mechanism-(database-and-exemplar)-provides-a-principled-approach-to-managing-the-growth-of-an-agent's-experiential-knowledge-base%2C-demonstrating-that-autonomous-trajectory-bootstrapping-can-replace-manual-knowledge-engineering-as-a-driver-of-continuous-agent-improvement.-%23%23-classification---category%3A-autonomous-agent-self-improvement---method%3A-trajectory-bootstrapping-with-dual-level-curation---scope%3A-sequential-decision-making-tasks-across-diverse-benchmarks-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-05-01---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
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
    "source": "review:2505.18646---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2505.18646---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2505.18646---**authors**%3A-siwei-liu%2C-jinyuan-fang%2C-han-zhou%2C-yingxu-wang%2C-zaiqiao-meng---**year**%3A-2025-%23%23-abstract-novel-self-evolving-framework-that-automatically-generates-and-optimises-multi-agent-workflows.-sew-can-automatically-design-agentic-workflows-and-optimise-them-through-self-evolution%2C-bringing-up-to-33%25-improvement-on-livecodebench-compared-to-using-the-backbone-llm-only.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-05-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2025-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.18646---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2505.18646---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2505.18646---**authors**%3A-siwei-liu%2C-jinyuan-fang%2C-han-zhou%2C-yingxu-wang%2C-zaiqiao-meng---**year**%3A-2025-%23%23-abstract-novel-self-evolving-framework-that-automatically-generates-and-optimises-multi-agent-workflows.-sew-can-automatically-design-agentic-workflows-and-optimise-them-through-self-evolution%2C-bringing-up-to-33%25-improvement-on-livecodebench-compared-to-using-the-backbone-llm-only.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-05-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2025-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.18646---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2505.18646---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2505.18646---**authors**%3A-siwei-liu%2C-jinyuan-fang%2C-han-zhou%2C-yingxu-wang%2C-zaiqiao-meng---**year**%3A-2025-%23%23-abstract-novel-self-evolving-framework-that-automatically-generates-and-optimises-multi-agent-workflows.-sew-can-automatically-design-agentic-workflows-and-optimise-them-through-self-evolution%2C-bringing-up-to-33%25-improvement-on-livecodebench-compared-to-using-the-backbone-llm-only.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-05-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2025-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.18646---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2505.18646---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2505.18646---**authors**%3A-siwei-liu%2C-jinyuan-fang%2C-han-zhou%2C-yingxu-wang%2C-zaiqiao-meng---**year**%3A-2025-%23%23-abstract-novel-self-evolving-framework-that-automatically-generates-and-optimises-multi-agent-workflows.-sew-can-automatically-design-agentic-workflows-and-optimise-them-through-self-evolution%2C-bringing-up-to-33%25-improvement-on-livecodebench-compared-to-using-the-backbone-llm-only.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-05-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2025-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.18646---**url**%3A-https%3A%2F%2Farxiv.org%2Fabs%2F2505.18646---**pdf**%3A-https%3A%2F%2Farxiv.org%2Fpdf%2F2505.18646---**authors**%3A-siwei-liu%2C-jinyuan-fang%2C-han-zhou%2C-yingxu-wang%2C-zaiqiao-meng---**year**%3A-2025-%23%23-abstract-novel-self-evolving-framework-that-automatically-generates-and-optimises-multi-agent-workflows.-sew-can-automatically-design-agentic-workflows-and-optimise-them-through-self-evolution%2C-bringing-up-to-33%25-improvement-on-livecodebench-compared-to-using-the-backbone-llm-only.-%23%23-full-content-(extracted-from-batch-search-%E2%80%94-full-paper-available-at-pdf-link-above)-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-05-01---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2025-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv_id_month_fallback",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.22954v3",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.22954v3",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.22954v3",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.22954v3",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2505.22954v3",
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
    "source": "review:deep-academic-review%3A-self-adapting-language-models-**authors**%3A-adam-zweiger%2C-jyothish-pari%2C-han-guo%2C-ekin-akyurek%2C-yoon-kim%2C-pulkit-agrawal-**submitted**%3A-2025-06-12-(v1)%2C-last-revised-2025-09-18-(v2)-**code**%3A-https%3A%2F%2Fjyopari.github.io%2Fposts%2Fseal-%23%23-abstract-large-language-models-(llms)-are-powerful-but-static%3B-they-lack-mechanisms-to-adapt-their-weights-in-response-to-new-tasks%2C-knowledge%2C-or-examples.-we-introduce-self-adapting-llms-(seal)%2C-a-framework-that-enables-llms-to-self-adapt-by-generating-their-own-finetuning-data-and-update-directives.-given-a-new-input%2C-the-model-produces-a-self-edit----a-generation-that-may-restructure-the-information-in-different-ways%2C-specify-optimization-hyperparameters%2C-or-invoke-tools-for-data-augmentation-and-gradient-based-updates.-through-supervised-finetuning-(sft)%2C-these-self-edits-result-in-persistent-weight-updates%2C-enabling-lasting-adaptation.-to-train-the-model-to-produce-effective-self-edits%2C-we-use-a-reinforcement-learning-loop-with-the-downstream-performance-of-the-updated-model-as-the-reward-signal.-unlike-prior-approaches-that-rely-on-separate-adaptation-modules-or-auxiliary-networks%2C-seal-directly-uses-the-model's-own-generation-to-control-its-adaptation-process.-experiments-on-knowledge-incorporation-and-few-shot-generalization-show-that-seal-is-a-promising-step-toward-language-models-capable-of-self-directed-adaptation.-%23%23-key-contributions-1.-**self-edit-mechanism-for-weight-adaptation**%3A-introduces-the-concept-of-self-edits----model-generated-outputs-that-restructure-information%2C-specify-hyperparameters%2C-or-invoke-tools-to-produce-its-own-finetuning-data-and-update-directives-2.-**rl-guided-self-adaptation-loop**%3A-uses-reinforcement-learning-with-downstream-task-performance-as-reward-to-train-the-model-to-produce-effective-self-edits%2C-closing-the-loop-between-generation-and-persistent-weight-updates-3.-**direct-model-controlled-adaptation**%3A-unlike-approaches-using-separate-adaptation-modules-or-auxiliary-networks%2C-seal-uses-the-model's-own-generation-capability-to-directly-control-its-adaptation-process-%23%23-relevance-to-agent-evolution-seal-represents-a-significant-step-toward-agents-that-can-autonomously-modify-their-own-parameters%2C-not-just-their-prompts-or-memories.-the-self-edit-mechanism-enables-llms-to-generate-their-own-training-data-and-control-their-own-fine-tuning%2C-creating-a-pathway-for-agents-that-genuinely-improve-their-core-capabilities-over-time.-this-bridges-the-gap-between-prompt-level-self-improvement-(e.g.%2C-voyager%2C-genericagent)-and-true-weight-level-self-modification.-%23%23-classification---category%3A-self-adaptation---method%3A-self-edit-generation-%2B-rl-guided-sft---scope%3A-llm-self-adaptation-via-model-generated-finetuning-data-and-update-directives-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-06-12---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-06---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-adapting-language-models-**authors**%3A-adam-zweiger%2C-jyothish-pari%2C-han-guo%2C-ekin-akyurek%2C-yoon-kim%2C-pulkit-agrawal-**submitted**%3A-2025-06-12-(v1)%2C-last-revised-2025-09-18-(v2)-**code**%3A-https%3A%2F%2Fjyopari.github.io%2Fposts%2Fseal-%23%23-abstract-large-language-models-(llms)-are-powerful-but-static%3B-they-lack-mechanisms-to-adapt-their-weights-in-response-to-new-tasks%2C-knowledge%2C-or-examples.-we-introduce-self-adapting-llms-(seal)%2C-a-framework-that-enables-llms-to-self-adapt-by-generating-their-own-finetuning-data-and-update-directives.-given-a-new-input%2C-the-model-produces-a-self-edit----a-generation-that-may-restructure-the-information-in-different-ways%2C-specify-optimization-hyperparameters%2C-or-invoke-tools-for-data-augmentation-and-gradient-based-updates.-through-supervised-finetuning-(sft)%2C-these-self-edits-result-in-persistent-weight-updates%2C-enabling-lasting-adaptation.-to-train-the-model-to-produce-effective-self-edits%2C-we-use-a-reinforcement-learning-loop-with-the-downstream-performance-of-the-updated-model-as-the-reward-signal.-unlike-prior-approaches-that-rely-on-separate-adaptation-modules-or-auxiliary-networks%2C-seal-directly-uses-the-model's-own-generation-to-control-its-adaptation-process.-experiments-on-knowledge-incorporation-and-few-shot-generalization-show-that-seal-is-a-promising-step-toward-language-models-capable-of-self-directed-adaptation.-%23%23-key-contributions-1.-**self-edit-mechanism-for-weight-adaptation**%3A-introduces-the-concept-of-self-edits----model-generated-outputs-that-restructure-information%2C-specify-hyperparameters%2C-or-invoke-tools-to-produce-its-own-finetuning-data-and-update-directives-2.-**rl-guided-self-adaptation-loop**%3A-uses-reinforcement-learning-with-downstream-task-performance-as-reward-to-train-the-model-to-produce-effective-self-edits%2C-closing-the-loop-between-generation-and-persistent-weight-updates-3.-**direct-model-controlled-adaptation**%3A-unlike-approaches-using-separate-adaptation-modules-or-auxiliary-networks%2C-seal-uses-the-model's-own-generation-capability-to-directly-control-its-adaptation-process-%23%23-relevance-to-agent-evolution-seal-represents-a-significant-step-toward-agents-that-can-autonomously-modify-their-own-parameters%2C-not-just-their-prompts-or-memories.-the-self-edit-mechanism-enables-llms-to-generate-their-own-training-data-and-control-their-own-fine-tuning%2C-creating-a-pathway-for-agents-that-genuinely-improve-their-core-capabilities-over-time.-this-bridges-the-gap-between-prompt-level-self-improvement-(e.g.%2C-voyager%2C-genericagent)-and-true-weight-level-self-modification.-%23%23-classification---category%3A-self-adaptation---method%3A-self-edit-generation-%2B-rl-guided-sft---scope%3A-llm-self-adaptation-via-model-generated-finetuning-data-and-update-directives-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-06-12---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-06---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-adapting-language-models-**authors**%3A-adam-zweiger%2C-jyothish-pari%2C-han-guo%2C-ekin-akyurek%2C-yoon-kim%2C-pulkit-agrawal-**submitted**%3A-2025-06-12-(v1)%2C-last-revised-2025-09-18-(v2)-**code**%3A-https%3A%2F%2Fjyopari.github.io%2Fposts%2Fseal-%23%23-abstract-large-language-models-(llms)-are-powerful-but-static%3B-they-lack-mechanisms-to-adapt-their-weights-in-response-to-new-tasks%2C-knowledge%2C-or-examples.-we-introduce-self-adapting-llms-(seal)%2C-a-framework-that-enables-llms-to-self-adapt-by-generating-their-own-finetuning-data-and-update-directives.-given-a-new-input%2C-the-model-produces-a-self-edit----a-generation-that-may-restructure-the-information-in-different-ways%2C-specify-optimization-hyperparameters%2C-or-invoke-tools-for-data-augmentation-and-gradient-based-updates.-through-supervised-finetuning-(sft)%2C-these-self-edits-result-in-persistent-weight-updates%2C-enabling-lasting-adaptation.-to-train-the-model-to-produce-effective-self-edits%2C-we-use-a-reinforcement-learning-loop-with-the-downstream-performance-of-the-updated-model-as-the-reward-signal.-unlike-prior-approaches-that-rely-on-separate-adaptation-modules-or-auxiliary-networks%2C-seal-directly-uses-the-model's-own-generation-to-control-its-adaptation-process.-experiments-on-knowledge-incorporation-and-few-shot-generalization-show-that-seal-is-a-promising-step-toward-language-models-capable-of-self-directed-adaptation.-%23%23-key-contributions-1.-**self-edit-mechanism-for-weight-adaptation**%3A-introduces-the-concept-of-self-edits----model-generated-outputs-that-restructure-information%2C-specify-hyperparameters%2C-or-invoke-tools-to-produce-its-own-finetuning-data-and-update-directives-2.-**rl-guided-self-adaptation-loop**%3A-uses-reinforcement-learning-with-downstream-task-performance-as-reward-to-train-the-model-to-produce-effective-self-edits%2C-closing-the-loop-between-generation-and-persistent-weight-updates-3.-**direct-model-controlled-adaptation**%3A-unlike-approaches-using-separate-adaptation-modules-or-auxiliary-networks%2C-seal-uses-the-model's-own-generation-capability-to-directly-control-its-adaptation-process-%23%23-relevance-to-agent-evolution-seal-represents-a-significant-step-toward-agents-that-can-autonomously-modify-their-own-parameters%2C-not-just-their-prompts-or-memories.-the-self-edit-mechanism-enables-llms-to-generate-their-own-training-data-and-control-their-own-fine-tuning%2C-creating-a-pathway-for-agents-that-genuinely-improve-their-core-capabilities-over-time.-this-bridges-the-gap-between-prompt-level-self-improvement-(e.g.%2C-voyager%2C-genericagent)-and-true-weight-level-self-modification.-%23%23-classification---category%3A-self-adaptation---method%3A-self-edit-generation-%2B-rl-guided-sft---scope%3A-llm-self-adaptation-via-model-generated-finetuning-data-and-update-directives-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-06-12---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-06---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-adapting-language-models-**authors**%3A-adam-zweiger%2C-jyothish-pari%2C-han-guo%2C-ekin-akyurek%2C-yoon-kim%2C-pulkit-agrawal-**submitted**%3A-2025-06-12-(v1)%2C-last-revised-2025-09-18-(v2)-**code**%3A-https%3A%2F%2Fjyopari.github.io%2Fposts%2Fseal-%23%23-abstract-large-language-models-(llms)-are-powerful-but-static%3B-they-lack-mechanisms-to-adapt-their-weights-in-response-to-new-tasks%2C-knowledge%2C-or-examples.-we-introduce-self-adapting-llms-(seal)%2C-a-framework-that-enables-llms-to-self-adapt-by-generating-their-own-finetuning-data-and-update-directives.-given-a-new-input%2C-the-model-produces-a-self-edit----a-generation-that-may-restructure-the-information-in-different-ways%2C-specify-optimization-hyperparameters%2C-or-invoke-tools-for-data-augmentation-and-gradient-based-updates.-through-supervised-finetuning-(sft)%2C-these-self-edits-result-in-persistent-weight-updates%2C-enabling-lasting-adaptation.-to-train-the-model-to-produce-effective-self-edits%2C-we-use-a-reinforcement-learning-loop-with-the-downstream-performance-of-the-updated-model-as-the-reward-signal.-unlike-prior-approaches-that-rely-on-separate-adaptation-modules-or-auxiliary-networks%2C-seal-directly-uses-the-model's-own-generation-to-control-its-adaptation-process.-experiments-on-knowledge-incorporation-and-few-shot-generalization-show-that-seal-is-a-promising-step-toward-language-models-capable-of-self-directed-adaptation.-%23%23-key-contributions-1.-**self-edit-mechanism-for-weight-adaptation**%3A-introduces-the-concept-of-self-edits----model-generated-outputs-that-restructure-information%2C-specify-hyperparameters%2C-or-invoke-tools-to-produce-its-own-finetuning-data-and-update-directives-2.-**rl-guided-self-adaptation-loop**%3A-uses-reinforcement-learning-with-downstream-task-performance-as-reward-to-train-the-model-to-produce-effective-self-edits%2C-closing-the-loop-between-generation-and-persistent-weight-updates-3.-**direct-model-controlled-adaptation**%3A-unlike-approaches-using-separate-adaptation-modules-or-auxiliary-networks%2C-seal-uses-the-model's-own-generation-capability-to-directly-control-its-adaptation-process-%23%23-relevance-to-agent-evolution-seal-represents-a-significant-step-toward-agents-that-can-autonomously-modify-their-own-parameters%2C-not-just-their-prompts-or-memories.-the-self-edit-mechanism-enables-llms-to-generate-their-own-training-data-and-control-their-own-fine-tuning%2C-creating-a-pathway-for-agents-that-genuinely-improve-their-core-capabilities-over-time.-this-bridges-the-gap-between-prompt-level-self-improvement-(e.g.%2C-voyager%2C-genericagent)-and-true-weight-level-self-modification.-%23%23-classification---category%3A-self-adaptation---method%3A-self-edit-generation-%2B-rl-guided-sft---scope%3A-llm-self-adaptation-via-model-generated-finetuning-data-and-update-directives-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-06-12---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-06---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-self-adapting-language-models-**authors**%3A-adam-zweiger%2C-jyothish-pari%2C-han-guo%2C-ekin-akyurek%2C-yoon-kim%2C-pulkit-agrawal-**submitted**%3A-2025-06-12-(v1)%2C-last-revised-2025-09-18-(v2)-**code**%3A-https%3A%2F%2Fjyopari.github.io%2Fposts%2Fseal-%23%23-abstract-large-language-models-(llms)-are-powerful-but-static%3B-they-lack-mechanisms-to-adapt-their-weights-in-response-to-new-tasks%2C-knowledge%2C-or-examples.-we-introduce-self-adapting-llms-(seal)%2C-a-framework-that-enables-llms-to-self-adapt-by-generating-their-own-finetuning-data-and-update-directives.-given-a-new-input%2C-the-model-produces-a-self-edit----a-generation-that-may-restructure-the-information-in-different-ways%2C-specify-optimization-hyperparameters%2C-or-invoke-tools-for-data-augmentation-and-gradient-based-updates.-through-supervised-finetuning-(sft)%2C-these-self-edits-result-in-persistent-weight-updates%2C-enabling-lasting-adaptation.-to-train-the-model-to-produce-effective-self-edits%2C-we-use-a-reinforcement-learning-loop-with-the-downstream-performance-of-the-updated-model-as-the-reward-signal.-unlike-prior-approaches-that-rely-on-separate-adaptation-modules-or-auxiliary-networks%2C-seal-directly-uses-the-model's-own-generation-to-control-its-adaptation-process.-experiments-on-knowledge-incorporation-and-few-shot-generalization-show-that-seal-is-a-promising-step-toward-language-models-capable-of-self-directed-adaptation.-%23%23-key-contributions-1.-**self-edit-mechanism-for-weight-adaptation**%3A-introduces-the-concept-of-self-edits----model-generated-outputs-that-restructure-information%2C-specify-hyperparameters%2C-or-invoke-tools-to-produce-its-own-finetuning-data-and-update-directives-2.-**rl-guided-self-adaptation-loop**%3A-uses-reinforcement-learning-with-downstream-task-performance-as-reward-to-train-the-model-to-produce-effective-self-edits%2C-closing-the-loop-between-generation-and-persistent-weight-updates-3.-**direct-model-controlled-adaptation**%3A-unlike-approaches-using-separate-adaptation-modules-or-auxiliary-networks%2C-seal-uses-the-model's-own-generation-capability-to-directly-control-its-adaptation-process-%23%23-relevance-to-agent-evolution-seal-represents-a-significant-step-toward-agents-that-can-autonomously-modify-their-own-parameters%2C-not-just-their-prompts-or-memories.-the-self-edit-mechanism-enables-llms-to-generate-their-own-training-data-and-control-their-own-fine-tuning%2C-creating-a-pathway-for-agents-that-genuinely-improve-their-core-capabilities-over-time.-this-bridges-the-gap-between-prompt-level-self-improvement-(e.g.%2C-voyager%2C-genericagent)-and-true-weight-level-self-modification.-%23%23-classification---category%3A-self-adaptation---method%3A-self-edit-generation-%2B-rl-guided-sft---scope%3A-llm-self-adaptation-via-model-generated-finetuning-data-and-update-directives-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-06-12---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-06---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
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
    "source": "review:deep-academic-review%3A-evoagentx%3A-an-automated-framework-for-evolving-agentic-workflows-**authors**%3A-yingxu-wang%2C-siwei-liu%2C-jinyuan-fang%2C-zaiqiao-meng-**submitted**%3A-2025-07-04-(v1)%2C-last-revised-2025-09-23-(v2)-**code**%3A-https%3A%2F%2Fgithub.com%2Fevoagentx%2Fevoagentx-%23%23-abstract-multi-agent-systems-(mas)-have-emerged-as-a-powerful-paradigm-for-orchestrating-large-language-models-(llms)-and-specialized-tools-to-collaboratively-address-complex-tasks.-however%2C-existing-mas-frameworks-often-require-manual-workflow-configuration-and-lack-native-support-for-dynamic-evolution-and-performance-optimization.-in-addition%2C-many-mas-optimization-algorithms-are-not-integrated-into-a-unified-framework.-in-this-paper%2C-we-present-evoagentx%2C-an-open-source-platform-that-automates-the-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows.-evoagentx-employs-a-modular-architecture-consisting-of-five-core-layers%3A-the-basic-components%2C-agent%2C-workflow%2C-evolving%2C-and-evaluation-layers.-specifically%2C-within-the-evolving-layer%2C-evoagentx-integrates-three-mas-optimization-algorithms%2C-textgrad%2C-aflow%2C-and-mipro%2C-to-iteratively-refine-agent-prompts%2C-tool-configurations%2C-and-workflow-topologies.-we-evaluate-evoagentx-on-hotpotqa%2C-mbpp%2C-and-math-for-multi-hop-reasoning%2C-code-generation%2C-and-mathematical-problem-solving%2C-respectively%2C-and-further-assess-it-on-real-world-tasks-using-gaia.-experimental-results-show-that-evoagentx-consistently-achieves-significant-performance-improvements%2C-including-a-7.44%25-increase-in-hotpotqa-f1%2C-a-10.00%25-improvement-in-mbpp-pass%401%2C-a-10.00%25-gain-in-math-solve-accuracy%2C-and-an-overall-accuracy-improvement-of-up-to-20.00%25-on-gaia.-%23%23-key-contributions-1.-**unified-multi-agent-evolution-framework**%3A-presents-evoagentx%2C-an-open-source-platform-with-five-modular-layers-(basic-components%2C-agent%2C-workflow%2C-evolving%2C-evaluation)-that-automates-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows-2.-**integrated-optimization-algorithms**%3A-unifies-three-mas-optimization-algorithms-(textgrad%2C-aflow%2C-mipro)-within-a-single-evolving-layer-to-iteratively-refine-agent-prompts%2C-tool-configurations%2C-and-workflow-topologies-3.-**significant-performance-gains**%3A-achieves-7.44%25-increase-on-hotpotqa-f1%2C-10.00%25-on-mbpp-pass%401%2C-10.00%25-on-math-solve-accuracy%2C-and-up-to-20.00%25-on-gaia%2C-demonstrating-the-value-of-automated-workflow-evolution-%23%23-relevance-to-agent-evolution-evoagentx-directly-addresses-the-automation-of-multi-agent-workflow-evolution%2C-providing-an-end-to-end-platform-where-agent-topologies%2C-prompts%2C-and-tool-configurations-can-be-iteratively-optimized-without-manual-intervention.-its-integration-of-multiple-optimization-algorithms-(textgrad%2C-aflow%2C-mipro)-into-a-unified-framework-represents-a-practical-approach-to-making-agent-self-improvement-systematic-and-reproducible.-%23%23-classification---category%3A-multi-agent-systems---method%3A-evolutionary-workflow-optimization-(textgrad%2C-aflow%2C-mipro)---scope%3A-automated-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-07-04---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-07---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-evoagentx%3A-an-automated-framework-for-evolving-agentic-workflows-**authors**%3A-yingxu-wang%2C-siwei-liu%2C-jinyuan-fang%2C-zaiqiao-meng-**submitted**%3A-2025-07-04-(v1)%2C-last-revised-2025-09-23-(v2)-**code**%3A-https%3A%2F%2Fgithub.com%2Fevoagentx%2Fevoagentx-%23%23-abstract-multi-agent-systems-(mas)-have-emerged-as-a-powerful-paradigm-for-orchestrating-large-language-models-(llms)-and-specialized-tools-to-collaboratively-address-complex-tasks.-however%2C-existing-mas-frameworks-often-require-manual-workflow-configuration-and-lack-native-support-for-dynamic-evolution-and-performance-optimization.-in-addition%2C-many-mas-optimization-algorithms-are-not-integrated-into-a-unified-framework.-in-this-paper%2C-we-present-evoagentx%2C-an-open-source-platform-that-automates-the-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows.-evoagentx-employs-a-modular-architecture-consisting-of-five-core-layers%3A-the-basic-components%2C-agent%2C-workflow%2C-evolving%2C-and-evaluation-layers.-specifically%2C-within-the-evolving-layer%2C-evoagentx-integrates-three-mas-optimization-algorithms%2C-textgrad%2C-aflow%2C-and-mipro%2C-to-iteratively-refine-agent-prompts%2C-tool-configurations%2C-and-workflow-topologies.-we-evaluate-evoagentx-on-hotpotqa%2C-mbpp%2C-and-math-for-multi-hop-reasoning%2C-code-generation%2C-and-mathematical-problem-solving%2C-respectively%2C-and-further-assess-it-on-real-world-tasks-using-gaia.-experimental-results-show-that-evoagentx-consistently-achieves-significant-performance-improvements%2C-including-a-7.44%25-increase-in-hotpotqa-f1%2C-a-10.00%25-improvement-in-mbpp-pass%401%2C-a-10.00%25-gain-in-math-solve-accuracy%2C-and-an-overall-accuracy-improvement-of-up-to-20.00%25-on-gaia.-%23%23-key-contributions-1.-**unified-multi-agent-evolution-framework**%3A-presents-evoagentx%2C-an-open-source-platform-with-five-modular-layers-(basic-components%2C-agent%2C-workflow%2C-evolving%2C-evaluation)-that-automates-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows-2.-**integrated-optimization-algorithms**%3A-unifies-three-mas-optimization-algorithms-(textgrad%2C-aflow%2C-mipro)-within-a-single-evolving-layer-to-iteratively-refine-agent-prompts%2C-tool-configurations%2C-and-workflow-topologies-3.-**significant-performance-gains**%3A-achieves-7.44%25-increase-on-hotpotqa-f1%2C-10.00%25-on-mbpp-pass%401%2C-10.00%25-on-math-solve-accuracy%2C-and-up-to-20.00%25-on-gaia%2C-demonstrating-the-value-of-automated-workflow-evolution-%23%23-relevance-to-agent-evolution-evoagentx-directly-addresses-the-automation-of-multi-agent-workflow-evolution%2C-providing-an-end-to-end-platform-where-agent-topologies%2C-prompts%2C-and-tool-configurations-can-be-iteratively-optimized-without-manual-intervention.-its-integration-of-multiple-optimization-algorithms-(textgrad%2C-aflow%2C-mipro)-into-a-unified-framework-represents-a-practical-approach-to-making-agent-self-improvement-systematic-and-reproducible.-%23%23-classification---category%3A-multi-agent-systems---method%3A-evolutionary-workflow-optimization-(textgrad%2C-aflow%2C-mipro)---scope%3A-automated-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-07-04---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-07---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-evoagentx%3A-an-automated-framework-for-evolving-agentic-workflows-**authors**%3A-yingxu-wang%2C-siwei-liu%2C-jinyuan-fang%2C-zaiqiao-meng-**submitted**%3A-2025-07-04-(v1)%2C-last-revised-2025-09-23-(v2)-**code**%3A-https%3A%2F%2Fgithub.com%2Fevoagentx%2Fevoagentx-%23%23-abstract-multi-agent-systems-(mas)-have-emerged-as-a-powerful-paradigm-for-orchestrating-large-language-models-(llms)-and-specialized-tools-to-collaboratively-address-complex-tasks.-however%2C-existing-mas-frameworks-often-require-manual-workflow-configuration-and-lack-native-support-for-dynamic-evolution-and-performance-optimization.-in-addition%2C-many-mas-optimization-algorithms-are-not-integrated-into-a-unified-framework.-in-this-paper%2C-we-present-evoagentx%2C-an-open-source-platform-that-automates-the-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows.-evoagentx-employs-a-modular-architecture-consisting-of-five-core-layers%3A-the-basic-components%2C-agent%2C-workflow%2C-evolving%2C-and-evaluation-layers.-specifically%2C-within-the-evolving-layer%2C-evoagentx-integrates-three-mas-optimization-algorithms%2C-textgrad%2C-aflow%2C-and-mipro%2C-to-iteratively-refine-agent-prompts%2C-tool-configurations%2C-and-workflow-topologies.-we-evaluate-evoagentx-on-hotpotqa%2C-mbpp%2C-and-math-for-multi-hop-reasoning%2C-code-generation%2C-and-mathematical-problem-solving%2C-respectively%2C-and-further-assess-it-on-real-world-tasks-using-gaia.-experimental-results-show-that-evoagentx-consistently-achieves-significant-performance-improvements%2C-including-a-7.44%25-increase-in-hotpotqa-f1%2C-a-10.00%25-improvement-in-mbpp-pass%401%2C-a-10.00%25-gain-in-math-solve-accuracy%2C-and-an-overall-accuracy-improvement-of-up-to-20.00%25-on-gaia.-%23%23-key-contributions-1.-**unified-multi-agent-evolution-framework**%3A-presents-evoagentx%2C-an-open-source-platform-with-five-modular-layers-(basic-components%2C-agent%2C-workflow%2C-evolving%2C-evaluation)-that-automates-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows-2.-**integrated-optimization-algorithms**%3A-unifies-three-mas-optimization-algorithms-(textgrad%2C-aflow%2C-mipro)-within-a-single-evolving-layer-to-iteratively-refine-agent-prompts%2C-tool-configurations%2C-and-workflow-topologies-3.-**significant-performance-gains**%3A-achieves-7.44%25-increase-on-hotpotqa-f1%2C-10.00%25-on-mbpp-pass%401%2C-10.00%25-on-math-solve-accuracy%2C-and-up-to-20.00%25-on-gaia%2C-demonstrating-the-value-of-automated-workflow-evolution-%23%23-relevance-to-agent-evolution-evoagentx-directly-addresses-the-automation-of-multi-agent-workflow-evolution%2C-providing-an-end-to-end-platform-where-agent-topologies%2C-prompts%2C-and-tool-configurations-can-be-iteratively-optimized-without-manual-intervention.-its-integration-of-multiple-optimization-algorithms-(textgrad%2C-aflow%2C-mipro)-into-a-unified-framework-represents-a-practical-approach-to-making-agent-self-improvement-systematic-and-reproducible.-%23%23-classification---category%3A-multi-agent-systems---method%3A-evolutionary-workflow-optimization-(textgrad%2C-aflow%2C-mipro)---scope%3A-automated-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-07-04---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-07---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-evoagentx%3A-an-automated-framework-for-evolving-agentic-workflows-**authors**%3A-yingxu-wang%2C-siwei-liu%2C-jinyuan-fang%2C-zaiqiao-meng-**submitted**%3A-2025-07-04-(v1)%2C-last-revised-2025-09-23-(v2)-**code**%3A-https%3A%2F%2Fgithub.com%2Fevoagentx%2Fevoagentx-%23%23-abstract-multi-agent-systems-(mas)-have-emerged-as-a-powerful-paradigm-for-orchestrating-large-language-models-(llms)-and-specialized-tools-to-collaboratively-address-complex-tasks.-however%2C-existing-mas-frameworks-often-require-manual-workflow-configuration-and-lack-native-support-for-dynamic-evolution-and-performance-optimization.-in-addition%2C-many-mas-optimization-algorithms-are-not-integrated-into-a-unified-framework.-in-this-paper%2C-we-present-evoagentx%2C-an-open-source-platform-that-automates-the-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows.-evoagentx-employs-a-modular-architecture-consisting-of-five-core-layers%3A-the-basic-components%2C-agent%2C-workflow%2C-evolving%2C-and-evaluation-layers.-specifically%2C-within-the-evolving-layer%2C-evoagentx-integrates-three-mas-optimization-algorithms%2C-textgrad%2C-aflow%2C-and-mipro%2C-to-iteratively-refine-agent-prompts%2C-tool-configurations%2C-and-workflow-topologies.-we-evaluate-evoagentx-on-hotpotqa%2C-mbpp%2C-and-math-for-multi-hop-reasoning%2C-code-generation%2C-and-mathematical-problem-solving%2C-respectively%2C-and-further-assess-it-on-real-world-tasks-using-gaia.-experimental-results-show-that-evoagentx-consistently-achieves-significant-performance-improvements%2C-including-a-7.44%25-increase-in-hotpotqa-f1%2C-a-10.00%25-improvement-in-mbpp-pass%401%2C-a-10.00%25-gain-in-math-solve-accuracy%2C-and-an-overall-accuracy-improvement-of-up-to-20.00%25-on-gaia.-%23%23-key-contributions-1.-**unified-multi-agent-evolution-framework**%3A-presents-evoagentx%2C-an-open-source-platform-with-five-modular-layers-(basic-components%2C-agent%2C-workflow%2C-evolving%2C-evaluation)-that-automates-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows-2.-**integrated-optimization-algorithms**%3A-unifies-three-mas-optimization-algorithms-(textgrad%2C-aflow%2C-mipro)-within-a-single-evolving-layer-to-iteratively-refine-agent-prompts%2C-tool-configurations%2C-and-workflow-topologies-3.-**significant-performance-gains**%3A-achieves-7.44%25-increase-on-hotpotqa-f1%2C-10.00%25-on-mbpp-pass%401%2C-10.00%25-on-math-solve-accuracy%2C-and-up-to-20.00%25-on-gaia%2C-demonstrating-the-value-of-automated-workflow-evolution-%23%23-relevance-to-agent-evolution-evoagentx-directly-addresses-the-automation-of-multi-agent-workflow-evolution%2C-providing-an-end-to-end-platform-where-agent-topologies%2C-prompts%2C-and-tool-configurations-can-be-iteratively-optimized-without-manual-intervention.-its-integration-of-multiple-optimization-algorithms-(textgrad%2C-aflow%2C-mipro)-into-a-unified-framework-represents-a-practical-approach-to-making-agent-self-improvement-systematic-and-reproducible.-%23%23-classification---category%3A-multi-agent-systems---method%3A-evolutionary-workflow-optimization-(textgrad%2C-aflow%2C-mipro)---scope%3A-automated-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-07-04---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-07---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-evoagentx%3A-an-automated-framework-for-evolving-agentic-workflows-**authors**%3A-yingxu-wang%2C-siwei-liu%2C-jinyuan-fang%2C-zaiqiao-meng-**submitted**%3A-2025-07-04-(v1)%2C-last-revised-2025-09-23-(v2)-**code**%3A-https%3A%2F%2Fgithub.com%2Fevoagentx%2Fevoagentx-%23%23-abstract-multi-agent-systems-(mas)-have-emerged-as-a-powerful-paradigm-for-orchestrating-large-language-models-(llms)-and-specialized-tools-to-collaboratively-address-complex-tasks.-however%2C-existing-mas-frameworks-often-require-manual-workflow-configuration-and-lack-native-support-for-dynamic-evolution-and-performance-optimization.-in-addition%2C-many-mas-optimization-algorithms-are-not-integrated-into-a-unified-framework.-in-this-paper%2C-we-present-evoagentx%2C-an-open-source-platform-that-automates-the-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows.-evoagentx-employs-a-modular-architecture-consisting-of-five-core-layers%3A-the-basic-components%2C-agent%2C-workflow%2C-evolving%2C-and-evaluation-layers.-specifically%2C-within-the-evolving-layer%2C-evoagentx-integrates-three-mas-optimization-algorithms%2C-textgrad%2C-aflow%2C-and-mipro%2C-to-iteratively-refine-agent-prompts%2C-tool-configurations%2C-and-workflow-topologies.-we-evaluate-evoagentx-on-hotpotqa%2C-mbpp%2C-and-math-for-multi-hop-reasoning%2C-code-generation%2C-and-mathematical-problem-solving%2C-respectively%2C-and-further-assess-it-on-real-world-tasks-using-gaia.-experimental-results-show-that-evoagentx-consistently-achieves-significant-performance-improvements%2C-including-a-7.44%25-increase-in-hotpotqa-f1%2C-a-10.00%25-improvement-in-mbpp-pass%401%2C-a-10.00%25-gain-in-math-solve-accuracy%2C-and-an-overall-accuracy-improvement-of-up-to-20.00%25-on-gaia.-%23%23-key-contributions-1.-**unified-multi-agent-evolution-framework**%3A-presents-evoagentx%2C-an-open-source-platform-with-five-modular-layers-(basic-components%2C-agent%2C-workflow%2C-evolving%2C-evaluation)-that-automates-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows-2.-**integrated-optimization-algorithms**%3A-unifies-three-mas-optimization-algorithms-(textgrad%2C-aflow%2C-mipro)-within-a-single-evolving-layer-to-iteratively-refine-agent-prompts%2C-tool-configurations%2C-and-workflow-topologies-3.-**significant-performance-gains**%3A-achieves-7.44%25-increase-on-hotpotqa-f1%2C-10.00%25-on-mbpp-pass%401%2C-10.00%25-on-math-solve-accuracy%2C-and-up-to-20.00%25-on-gaia%2C-demonstrating-the-value-of-automated-workflow-evolution-%23%23-relevance-to-agent-evolution-evoagentx-directly-addresses-the-automation-of-multi-agent-workflow-evolution%2C-providing-an-end-to-end-platform-where-agent-topologies%2C-prompts%2C-and-tool-configurations-can-be-iteratively-optimized-without-manual-intervention.-its-integration-of-multiple-optimization-algorithms-(textgrad%2C-aflow%2C-mipro)-into-a-unified-framework-represents-a-practical-approach-to-making-agent-self-improvement-systematic-and-reproducible.-%23%23-classification---category%3A-multi-agent-systems---method%3A-evolutionary-workflow-optimization-(textgrad%2C-aflow%2C-mipro)---scope%3A-automated-generation%2C-execution%2C-and-evolutionary-optimization-of-multi-agent-workflows-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-07-04---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-07---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-gepa%3A-reflective-prompt-evolution-can-outperform-reinforcement-learning-**authors**%3A-lakshya-a-agrawal%2C-shangyin-tan%2C-dilara-soylu%2C-noah-ziems%2C-rishi-khare%2C-krista-opsahl-ong%2C-arnav-singhvi%2C-herumb-shandilya%2C-michael-j-ryan%2C-meng-jiang%2C-christopher-potts%2C-koushik-sen%2C-alexandros-g.-dimakis%2C-ion-stoica%2C-dan-klein%2C-matei-zaharia%2C-omar-khattab-**submitted**%3A-2025-07-25-(v1)%2C-last-revised-2026-02-14-(v2)-**code**%3A-https%3A%2F%2Fgithub.com%2Fgepa-ai%2Fgepa-%23%23-abstract-large-language-models-(llms)-are-increasingly-adapted-to-downstream-tasks-via-reinforcement-learning-(rl)-methods-like-group-relative-policy-optimization-(grpo)%2C-which-often-require-thousands-of-rollouts-to-learn-new-tasks.-we-argue-that-the-interpretable-nature-of-language-often-provides-a-much-richer-learning-medium-for-llms%2C-compared-to-policy-gradients-derived-from-sparse%2C-scalar-rewards.-to-test-this%2C-we-introduce-gepa-(genetic-pareto)%2C-a-prompt-optimizer-that-thoroughly-incorporates-natural-language-reflection-to-learn-high-level-rules-from-trial-and-error.-given-any-ai-system-containing-one-or-more-llm-prompts%2C-gepa-samples-trajectories-(e.g.%2C-reasoning%2C-tool-calls%2C-and-tool-outputs)-and-reflects-on-them-in-natural-language-to-diagnose-problems%2C-propose-and-test-prompt-updates%2C-and-combine-complementary-lessons-from-the-pareto-frontier-of-its-own-attempts.-as-a-result-of-gepa's-design%2C-it-can-often-turn-even-just-a-few-rollouts-into-a-large-quality-gain.-across-six-tasks%2C-gepa-outperforms-grpo-by-6%25-on-average-and-by-up-to-20%25%2C-while-using-up-to-35x-fewer-rollouts.-gepa-also-outperforms-the-leading-prompt-optimizer%2C-miprov2%2C-by-over-10%25-(e.g.%2C-%2B12%25-accuracy-on-aime-2025)%2C-and-demonstrates-promising-results-as-an-inference-time-search-strategy-for-code-optimization.-%23%23-key-contributions-1.-**reflective-prompt-evolution-via-natural-language**%3A-introduces-gepa-(genetic-pareto)%2C-a-prompt-optimizer-that-uses-natural-language-reflection-to-diagnose-problems%2C-propose-prompt-updates%2C-and-combine-lessons-from-a-pareto-frontier-of-attempts-2.-**sample-efficiency-over-rl**%3A-outperforms-grpo-by-6%25-on-average-(up-to-20%25)-while-using-up-to-35x-fewer-rollouts%2C-demonstrating-that-interpretable-language-based-learning-can-be-more-efficient-than-policy-gradient-methods-3.-**superiority-over-existing-optimizers**%3A-outperforms-the-leading-prompt-optimizer-miprov2-by-over-10%25-on-benchmarks-including-aime-2025%2C-and-shows-promise-as-an-inference-time-search-strategy-for-code-optimization-%23%23-relevance-to-agent-evolution-gepa-demonstrates-that-reflective%2C-language-based-evolution-of-prompts-can-outperform-rl-based-adaptation%2C-suggesting-that-self-improving-agent-systems-may-benefit-more-from-natural-language-reasoning-about-their-own-behavior-than-from-scalar-reward-signals.-the-pareto-frontier-approach-to-combining-lessons-from-multiple-attempts-is-directly-applicable-to-how-agents-accumulate-and-refine-operational-knowledge-over-time.-%23%23-classification---category%3A-prompt-optimization---method%3A-genetic-pareto-reflective-evolution---scope%3A-llm-prompt-optimization-via-natural-language-reflection-and-pareto-optimal-combination-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-07-25---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-07---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-gepa%3A-reflective-prompt-evolution-can-outperform-reinforcement-learning-**authors**%3A-lakshya-a-agrawal%2C-shangyin-tan%2C-dilara-soylu%2C-noah-ziems%2C-rishi-khare%2C-krista-opsahl-ong%2C-arnav-singhvi%2C-herumb-shandilya%2C-michael-j-ryan%2C-meng-jiang%2C-christopher-potts%2C-koushik-sen%2C-alexandros-g.-dimakis%2C-ion-stoica%2C-dan-klein%2C-matei-zaharia%2C-omar-khattab-**submitted**%3A-2025-07-25-(v1)%2C-last-revised-2026-02-14-(v2)-**code**%3A-https%3A%2F%2Fgithub.com%2Fgepa-ai%2Fgepa-%23%23-abstract-large-language-models-(llms)-are-increasingly-adapted-to-downstream-tasks-via-reinforcement-learning-(rl)-methods-like-group-relative-policy-optimization-(grpo)%2C-which-often-require-thousands-of-rollouts-to-learn-new-tasks.-we-argue-that-the-interpretable-nature-of-language-often-provides-a-much-richer-learning-medium-for-llms%2C-compared-to-policy-gradients-derived-from-sparse%2C-scalar-rewards.-to-test-this%2C-we-introduce-gepa-(genetic-pareto)%2C-a-prompt-optimizer-that-thoroughly-incorporates-natural-language-reflection-to-learn-high-level-rules-from-trial-and-error.-given-any-ai-system-containing-one-or-more-llm-prompts%2C-gepa-samples-trajectories-(e.g.%2C-reasoning%2C-tool-calls%2C-and-tool-outputs)-and-reflects-on-them-in-natural-language-to-diagnose-problems%2C-propose-and-test-prompt-updates%2C-and-combine-complementary-lessons-from-the-pareto-frontier-of-its-own-attempts.-as-a-result-of-gepa's-design%2C-it-can-often-turn-even-just-a-few-rollouts-into-a-large-quality-gain.-across-six-tasks%2C-gepa-outperforms-grpo-by-6%25-on-average-and-by-up-to-20%25%2C-while-using-up-to-35x-fewer-rollouts.-gepa-also-outperforms-the-leading-prompt-optimizer%2C-miprov2%2C-by-over-10%25-(e.g.%2C-%2B12%25-accuracy-on-aime-2025)%2C-and-demonstrates-promising-results-as-an-inference-time-search-strategy-for-code-optimization.-%23%23-key-contributions-1.-**reflective-prompt-evolution-via-natural-language**%3A-introduces-gepa-(genetic-pareto)%2C-a-prompt-optimizer-that-uses-natural-language-reflection-to-diagnose-problems%2C-propose-prompt-updates%2C-and-combine-lessons-from-a-pareto-frontier-of-attempts-2.-**sample-efficiency-over-rl**%3A-outperforms-grpo-by-6%25-on-average-(up-to-20%25)-while-using-up-to-35x-fewer-rollouts%2C-demonstrating-that-interpretable-language-based-learning-can-be-more-efficient-than-policy-gradient-methods-3.-**superiority-over-existing-optimizers**%3A-outperforms-the-leading-prompt-optimizer-miprov2-by-over-10%25-on-benchmarks-including-aime-2025%2C-and-shows-promise-as-an-inference-time-search-strategy-for-code-optimization-%23%23-relevance-to-agent-evolution-gepa-demonstrates-that-reflective%2C-language-based-evolution-of-prompts-can-outperform-rl-based-adaptation%2C-suggesting-that-self-improving-agent-systems-may-benefit-more-from-natural-language-reasoning-about-their-own-behavior-than-from-scalar-reward-signals.-the-pareto-frontier-approach-to-combining-lessons-from-multiple-attempts-is-directly-applicable-to-how-agents-accumulate-and-refine-operational-knowledge-over-time.-%23%23-classification---category%3A-prompt-optimization---method%3A-genetic-pareto-reflective-evolution---scope%3A-llm-prompt-optimization-via-natural-language-reflection-and-pareto-optimal-combination-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-07-25---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-07---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-gepa%3A-reflective-prompt-evolution-can-outperform-reinforcement-learning-**authors**%3A-lakshya-a-agrawal%2C-shangyin-tan%2C-dilara-soylu%2C-noah-ziems%2C-rishi-khare%2C-krista-opsahl-ong%2C-arnav-singhvi%2C-herumb-shandilya%2C-michael-j-ryan%2C-meng-jiang%2C-christopher-potts%2C-koushik-sen%2C-alexandros-g.-dimakis%2C-ion-stoica%2C-dan-klein%2C-matei-zaharia%2C-omar-khattab-**submitted**%3A-2025-07-25-(v1)%2C-last-revised-2026-02-14-(v2)-**code**%3A-https%3A%2F%2Fgithub.com%2Fgepa-ai%2Fgepa-%23%23-abstract-large-language-models-(llms)-are-increasingly-adapted-to-downstream-tasks-via-reinforcement-learning-(rl)-methods-like-group-relative-policy-optimization-(grpo)%2C-which-often-require-thousands-of-rollouts-to-learn-new-tasks.-we-argue-that-the-interpretable-nature-of-language-often-provides-a-much-richer-learning-medium-for-llms%2C-compared-to-policy-gradients-derived-from-sparse%2C-scalar-rewards.-to-test-this%2C-we-introduce-gepa-(genetic-pareto)%2C-a-prompt-optimizer-that-thoroughly-incorporates-natural-language-reflection-to-learn-high-level-rules-from-trial-and-error.-given-any-ai-system-containing-one-or-more-llm-prompts%2C-gepa-samples-trajectories-(e.g.%2C-reasoning%2C-tool-calls%2C-and-tool-outputs)-and-reflects-on-them-in-natural-language-to-diagnose-problems%2C-propose-and-test-prompt-updates%2C-and-combine-complementary-lessons-from-the-pareto-frontier-of-its-own-attempts.-as-a-result-of-gepa's-design%2C-it-can-often-turn-even-just-a-few-rollouts-into-a-large-quality-gain.-across-six-tasks%2C-gepa-outperforms-grpo-by-6%25-on-average-and-by-up-to-20%25%2C-while-using-up-to-35x-fewer-rollouts.-gepa-also-outperforms-the-leading-prompt-optimizer%2C-miprov2%2C-by-over-10%25-(e.g.%2C-%2B12%25-accuracy-on-aime-2025)%2C-and-demonstrates-promising-results-as-an-inference-time-search-strategy-for-code-optimization.-%23%23-key-contributions-1.-**reflective-prompt-evolution-via-natural-language**%3A-introduces-gepa-(genetic-pareto)%2C-a-prompt-optimizer-that-uses-natural-language-reflection-to-diagnose-problems%2C-propose-prompt-updates%2C-and-combine-lessons-from-a-pareto-frontier-of-attempts-2.-**sample-efficiency-over-rl**%3A-outperforms-grpo-by-6%25-on-average-(up-to-20%25)-while-using-up-to-35x-fewer-rollouts%2C-demonstrating-that-interpretable-language-based-learning-can-be-more-efficient-than-policy-gradient-methods-3.-**superiority-over-existing-optimizers**%3A-outperforms-the-leading-prompt-optimizer-miprov2-by-over-10%25-on-benchmarks-including-aime-2025%2C-and-shows-promise-as-an-inference-time-search-strategy-for-code-optimization-%23%23-relevance-to-agent-evolution-gepa-demonstrates-that-reflective%2C-language-based-evolution-of-prompts-can-outperform-rl-based-adaptation%2C-suggesting-that-self-improving-agent-systems-may-benefit-more-from-natural-language-reasoning-about-their-own-behavior-than-from-scalar-reward-signals.-the-pareto-frontier-approach-to-combining-lessons-from-multiple-attempts-is-directly-applicable-to-how-agents-accumulate-and-refine-operational-knowledge-over-time.-%23%23-classification---category%3A-prompt-optimization---method%3A-genetic-pareto-reflective-evolution---scope%3A-llm-prompt-optimization-via-natural-language-reflection-and-pareto-optimal-combination-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-07-25---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-07---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-gepa%3A-reflective-prompt-evolution-can-outperform-reinforcement-learning-**authors**%3A-lakshya-a-agrawal%2C-shangyin-tan%2C-dilara-soylu%2C-noah-ziems%2C-rishi-khare%2C-krista-opsahl-ong%2C-arnav-singhvi%2C-herumb-shandilya%2C-michael-j-ryan%2C-meng-jiang%2C-christopher-potts%2C-koushik-sen%2C-alexandros-g.-dimakis%2C-ion-stoica%2C-dan-klein%2C-matei-zaharia%2C-omar-khattab-**submitted**%3A-2025-07-25-(v1)%2C-last-revised-2026-02-14-(v2)-**code**%3A-https%3A%2F%2Fgithub.com%2Fgepa-ai%2Fgepa-%23%23-abstract-large-language-models-(llms)-are-increasingly-adapted-to-downstream-tasks-via-reinforcement-learning-(rl)-methods-like-group-relative-policy-optimization-(grpo)%2C-which-often-require-thousands-of-rollouts-to-learn-new-tasks.-we-argue-that-the-interpretable-nature-of-language-often-provides-a-much-richer-learning-medium-for-llms%2C-compared-to-policy-gradients-derived-from-sparse%2C-scalar-rewards.-to-test-this%2C-we-introduce-gepa-(genetic-pareto)%2C-a-prompt-optimizer-that-thoroughly-incorporates-natural-language-reflection-to-learn-high-level-rules-from-trial-and-error.-given-any-ai-system-containing-one-or-more-llm-prompts%2C-gepa-samples-trajectories-(e.g.%2C-reasoning%2C-tool-calls%2C-and-tool-outputs)-and-reflects-on-them-in-natural-language-to-diagnose-problems%2C-propose-and-test-prompt-updates%2C-and-combine-complementary-lessons-from-the-pareto-frontier-of-its-own-attempts.-as-a-result-of-gepa's-design%2C-it-can-often-turn-even-just-a-few-rollouts-into-a-large-quality-gain.-across-six-tasks%2C-gepa-outperforms-grpo-by-6%25-on-average-and-by-up-to-20%25%2C-while-using-up-to-35x-fewer-rollouts.-gepa-also-outperforms-the-leading-prompt-optimizer%2C-miprov2%2C-by-over-10%25-(e.g.%2C-%2B12%25-accuracy-on-aime-2025)%2C-and-demonstrates-promising-results-as-an-inference-time-search-strategy-for-code-optimization.-%23%23-key-contributions-1.-**reflective-prompt-evolution-via-natural-language**%3A-introduces-gepa-(genetic-pareto)%2C-a-prompt-optimizer-that-uses-natural-language-reflection-to-diagnose-problems%2C-propose-prompt-updates%2C-and-combine-lessons-from-a-pareto-frontier-of-attempts-2.-**sample-efficiency-over-rl**%3A-outperforms-grpo-by-6%25-on-average-(up-to-20%25)-while-using-up-to-35x-fewer-rollouts%2C-demonstrating-that-interpretable-language-based-learning-can-be-more-efficient-than-policy-gradient-methods-3.-**superiority-over-existing-optimizers**%3A-outperforms-the-leading-prompt-optimizer-miprov2-by-over-10%25-on-benchmarks-including-aime-2025%2C-and-shows-promise-as-an-inference-time-search-strategy-for-code-optimization-%23%23-relevance-to-agent-evolution-gepa-demonstrates-that-reflective%2C-language-based-evolution-of-prompts-can-outperform-rl-based-adaptation%2C-suggesting-that-self-improving-agent-systems-may-benefit-more-from-natural-language-reasoning-about-their-own-behavior-than-from-scalar-reward-signals.-the-pareto-frontier-approach-to-combining-lessons-from-multiple-attempts-is-directly-applicable-to-how-agents-accumulate-and-refine-operational-knowledge-over-time.-%23%23-classification---category%3A-prompt-optimization---method%3A-genetic-pareto-reflective-evolution---scope%3A-llm-prompt-optimization-via-natural-language-reflection-and-pareto-optimal-combination-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-07-25---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-07---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-gepa%3A-reflective-prompt-evolution-can-outperform-reinforcement-learning-**authors**%3A-lakshya-a-agrawal%2C-shangyin-tan%2C-dilara-soylu%2C-noah-ziems%2C-rishi-khare%2C-krista-opsahl-ong%2C-arnav-singhvi%2C-herumb-shandilya%2C-michael-j-ryan%2C-meng-jiang%2C-christopher-potts%2C-koushik-sen%2C-alexandros-g.-dimakis%2C-ion-stoica%2C-dan-klein%2C-matei-zaharia%2C-omar-khattab-**submitted**%3A-2025-07-25-(v1)%2C-last-revised-2026-02-14-(v2)-**code**%3A-https%3A%2F%2Fgithub.com%2Fgepa-ai%2Fgepa-%23%23-abstract-large-language-models-(llms)-are-increasingly-adapted-to-downstream-tasks-via-reinforcement-learning-(rl)-methods-like-group-relative-policy-optimization-(grpo)%2C-which-often-require-thousands-of-rollouts-to-learn-new-tasks.-we-argue-that-the-interpretable-nature-of-language-often-provides-a-much-richer-learning-medium-for-llms%2C-compared-to-policy-gradients-derived-from-sparse%2C-scalar-rewards.-to-test-this%2C-we-introduce-gepa-(genetic-pareto)%2C-a-prompt-optimizer-that-thoroughly-incorporates-natural-language-reflection-to-learn-high-level-rules-from-trial-and-error.-given-any-ai-system-containing-one-or-more-llm-prompts%2C-gepa-samples-trajectories-(e.g.%2C-reasoning%2C-tool-calls%2C-and-tool-outputs)-and-reflects-on-them-in-natural-language-to-diagnose-problems%2C-propose-and-test-prompt-updates%2C-and-combine-complementary-lessons-from-the-pareto-frontier-of-its-own-attempts.-as-a-result-of-gepa's-design%2C-it-can-often-turn-even-just-a-few-rollouts-into-a-large-quality-gain.-across-six-tasks%2C-gepa-outperforms-grpo-by-6%25-on-average-and-by-up-to-20%25%2C-while-using-up-to-35x-fewer-rollouts.-gepa-also-outperforms-the-leading-prompt-optimizer%2C-miprov2%2C-by-over-10%25-(e.g.%2C-%2B12%25-accuracy-on-aime-2025)%2C-and-demonstrates-promising-results-as-an-inference-time-search-strategy-for-code-optimization.-%23%23-key-contributions-1.-**reflective-prompt-evolution-via-natural-language**%3A-introduces-gepa-(genetic-pareto)%2C-a-prompt-optimizer-that-uses-natural-language-reflection-to-diagnose-problems%2C-propose-prompt-updates%2C-and-combine-lessons-from-a-pareto-frontier-of-attempts-2.-**sample-efficiency-over-rl**%3A-outperforms-grpo-by-6%25-on-average-(up-to-20%25)-while-using-up-to-35x-fewer-rollouts%2C-demonstrating-that-interpretable-language-based-learning-can-be-more-efficient-than-policy-gradient-methods-3.-**superiority-over-existing-optimizers**%3A-outperforms-the-leading-prompt-optimizer-miprov2-by-over-10%25-on-benchmarks-including-aime-2025%2C-and-shows-promise-as-an-inference-time-search-strategy-for-code-optimization-%23%23-relevance-to-agent-evolution-gepa-demonstrates-that-reflective%2C-language-based-evolution-of-prompts-can-outperform-rl-based-adaptation%2C-suggesting-that-self-improving-agent-systems-may-benefit-more-from-natural-language-reasoning-about-their-own-behavior-than-from-scalar-reward-signals.-the-pareto-frontier-approach-to-combining-lessons-from-multiple-attempts-is-directly-applicable-to-how-agents-accumulate-and-refine-operational-knowledge-over-time.-%23%23-classification---category%3A-prompt-optimization---method%3A-genetic-pareto-reflective-evolution---scope%3A-llm-prompt-optimization-via-natural-language-reflection-and-pareto-optimal-combination-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2025-07-25---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2025-07---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
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
    "source": "review:2509.25140-(v2%2C-16-mar-2026)",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.25140-(v2%2C-16-mar-2026)",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.25140-(v2%2C-16-mar-2026)",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.25140-(v2%2C-16-mar-2026)",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2509.25140-(v2%2C-16-mar-2026)",
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
    "source": "review:2510.04618-(v3%2C-29-mar-2026)",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.04618-(v3%2C-29-mar-2026)",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.04618-(v3%2C-29-mar-2026)",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.04618-(v3%2C-29-mar-2026)",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.04618-(v3%2C-29-mar-2026)",
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
    "source": "review:2510.16079-(v3%2C-16-may-2026)",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.16079-(v3%2C-16-may-2026)",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.16079-(v3%2C-16-may-2026)",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.16079-(v3%2C-16-may-2026)",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:2510.16079-(v3%2C-16-may-2026)",
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
    "source": "review:deep-academic-review%3A-on-the-limits-of-self-improving-in-large-language-models%3A-the-singularity-is-not-near-without-symbolic-model-synthesis-**authors**%3A-hector-zenil-**submitted**%3A-2026-01-05-(v1)%2C-last-revised-2026-02-21-(v2)-%23%23-abstract-we-formalise-recursive-self-training-in-large-language-models-(llms)-and-generative-ai-as-a-discrete-time-dynamical-system.-we-prove-that-if-the-proportion-of-exogenous%2C-externally-grounded-signal-vanishes-asymptotically%2C-the-system-undergoes-degenerative-dynamics.-we-derive-two-fundamental-failure-modes%3A-(1)-entropy-decay%2C-where-finite-sampling-effects-induce-monotonic-loss-of-distributional-diversity%2C-and-(2)-variance-amplification%2C-where-the-absence-of-persistent-grounding-causes-distributional-drift-via-a-random-walk-mechanism.-these-behaviours-are-architectural-invariants-of-distributional-learning-on-finite-samples.-we-show-that-the-collapse-results-apply-specifically-to-closed-loop-density-matching-without-persistent-external-signal.-systems-with-non-vanishing-exogenous-grounding-fall-outside-this-regime.-however%2C-mainstream-singularity%2C-agi%2C-and-asi-narratives-typically-posit-systems-that-become-increasingly-autonomous-and-require-little-to-no-human-or-external-intervention-for-self-improvement.-in-that-autonomy-regime%2C-the-vanishing-signal-condition-is-satisfied%2C-and-collapse-follows-under-kl-based-objectives.-to-overcome-these-limits%2C-we-propose-neurosymbolic-integration-based-on-algorithmic-probability-and-program-synthesis.-the-coding-theorem-method-(ctm)-enables-identification-of-generative-mechanisms-rather-than-mere-correlations%2C-escaping-the-distribution-only-constraints-that-bind-standard-statistical-learning.-we-conclude-that-fully-autonomous-recursive-density-matching-leads-to-degenerative-fixed-points%2C-whereas-externally-anchored-or-mechanism-based-approaches-operate-under-fundamentally-different-asymptotic-dynamics.-%23%23-key-contributions-1.-**formal-proof-of-self-training-collapse**%3A-proves-that-fully-autonomous-recursive-self-training-undergoes-degenerative-dynamics-when-exogenous-signal-vanishes%2C-identifying-two-failure-modes%3A-entropy-decay-(loss-of-diversity)-and-variance-amplification-(distributional-drift)-2.-**architectural-invariants-of-distributional-learning**%3A-demonstrates-that-these-failure-modes-are-architectural-invariants-of-distributional-learning-on-finite-samples%2C-not-implementation-bugs-3.-**neurosymbolic-path-forward-via-ctm**%3A-proposes-algorithmic-probability-and-program-synthesis-(coding-theorem-method)-as-a-way-to-escape-distribution-only-constraints-and-identify-generative-mechanisms-rather-than-mere-correlations-%23%23-relevance-to-agent-evolution-this-paper-provides-rigorous-theoretical-foundations-for-the-limits-of-self-improving-agents%2C-proving-that-purely-autonomous-recursive-improvement-inevitably-leads-to-model-collapse-without-external-grounding.-this-has-direct-implications-for-designing-self-evolving-agent-systems%3A-they-must-maintain-access-to-exogenous%2C-externally-grounded-signals%2C-or-adopt-neurosymbolic-approaches-that-go-beyond-distributional-matching.-the-paper-challenges-agi-narratives-of-fully-autonomous-self-improvement-and-suggests-that-sustainable-agent-evolution-requires-either-persistent-human%2Fenvironment-grounding-or-symbolic-mechanism-discovery.-%23%23-classification---category%3A-theoretical-foundations---method%3A-dynamical-systems-analysis-%2B-algorithmic-probability---scope%3A-formal-analysis-of-limits-of-recursive-self-training-in-llms-and-proposed-neurosymbolic-solutions-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-01-05---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-01---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-on-the-limits-of-self-improving-in-large-language-models%3A-the-singularity-is-not-near-without-symbolic-model-synthesis-**authors**%3A-hector-zenil-**submitted**%3A-2026-01-05-(v1)%2C-last-revised-2026-02-21-(v2)-%23%23-abstract-we-formalise-recursive-self-training-in-large-language-models-(llms)-and-generative-ai-as-a-discrete-time-dynamical-system.-we-prove-that-if-the-proportion-of-exogenous%2C-externally-grounded-signal-vanishes-asymptotically%2C-the-system-undergoes-degenerative-dynamics.-we-derive-two-fundamental-failure-modes%3A-(1)-entropy-decay%2C-where-finite-sampling-effects-induce-monotonic-loss-of-distributional-diversity%2C-and-(2)-variance-amplification%2C-where-the-absence-of-persistent-grounding-causes-distributional-drift-via-a-random-walk-mechanism.-these-behaviours-are-architectural-invariants-of-distributional-learning-on-finite-samples.-we-show-that-the-collapse-results-apply-specifically-to-closed-loop-density-matching-without-persistent-external-signal.-systems-with-non-vanishing-exogenous-grounding-fall-outside-this-regime.-however%2C-mainstream-singularity%2C-agi%2C-and-asi-narratives-typically-posit-systems-that-become-increasingly-autonomous-and-require-little-to-no-human-or-external-intervention-for-self-improvement.-in-that-autonomy-regime%2C-the-vanishing-signal-condition-is-satisfied%2C-and-collapse-follows-under-kl-based-objectives.-to-overcome-these-limits%2C-we-propose-neurosymbolic-integration-based-on-algorithmic-probability-and-program-synthesis.-the-coding-theorem-method-(ctm)-enables-identification-of-generative-mechanisms-rather-than-mere-correlations%2C-escaping-the-distribution-only-constraints-that-bind-standard-statistical-learning.-we-conclude-that-fully-autonomous-recursive-density-matching-leads-to-degenerative-fixed-points%2C-whereas-externally-anchored-or-mechanism-based-approaches-operate-under-fundamentally-different-asymptotic-dynamics.-%23%23-key-contributions-1.-**formal-proof-of-self-training-collapse**%3A-proves-that-fully-autonomous-recursive-self-training-undergoes-degenerative-dynamics-when-exogenous-signal-vanishes%2C-identifying-two-failure-modes%3A-entropy-decay-(loss-of-diversity)-and-variance-amplification-(distributional-drift)-2.-**architectural-invariants-of-distributional-learning**%3A-demonstrates-that-these-failure-modes-are-architectural-invariants-of-distributional-learning-on-finite-samples%2C-not-implementation-bugs-3.-**neurosymbolic-path-forward-via-ctm**%3A-proposes-algorithmic-probability-and-program-synthesis-(coding-theorem-method)-as-a-way-to-escape-distribution-only-constraints-and-identify-generative-mechanisms-rather-than-mere-correlations-%23%23-relevance-to-agent-evolution-this-paper-provides-rigorous-theoretical-foundations-for-the-limits-of-self-improving-agents%2C-proving-that-purely-autonomous-recursive-improvement-inevitably-leads-to-model-collapse-without-external-grounding.-this-has-direct-implications-for-designing-self-evolving-agent-systems%3A-they-must-maintain-access-to-exogenous%2C-externally-grounded-signals%2C-or-adopt-neurosymbolic-approaches-that-go-beyond-distributional-matching.-the-paper-challenges-agi-narratives-of-fully-autonomous-self-improvement-and-suggests-that-sustainable-agent-evolution-requires-either-persistent-human%2Fenvironment-grounding-or-symbolic-mechanism-discovery.-%23%23-classification---category%3A-theoretical-foundations---method%3A-dynamical-systems-analysis-%2B-algorithmic-probability---scope%3A-formal-analysis-of-limits-of-recursive-self-training-in-llms-and-proposed-neurosymbolic-solutions-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-01-05---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-01---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-on-the-limits-of-self-improving-in-large-language-models%3A-the-singularity-is-not-near-without-symbolic-model-synthesis-**authors**%3A-hector-zenil-**submitted**%3A-2026-01-05-(v1)%2C-last-revised-2026-02-21-(v2)-%23%23-abstract-we-formalise-recursive-self-training-in-large-language-models-(llms)-and-generative-ai-as-a-discrete-time-dynamical-system.-we-prove-that-if-the-proportion-of-exogenous%2C-externally-grounded-signal-vanishes-asymptotically%2C-the-system-undergoes-degenerative-dynamics.-we-derive-two-fundamental-failure-modes%3A-(1)-entropy-decay%2C-where-finite-sampling-effects-induce-monotonic-loss-of-distributional-diversity%2C-and-(2)-variance-amplification%2C-where-the-absence-of-persistent-grounding-causes-distributional-drift-via-a-random-walk-mechanism.-these-behaviours-are-architectural-invariants-of-distributional-learning-on-finite-samples.-we-show-that-the-collapse-results-apply-specifically-to-closed-loop-density-matching-without-persistent-external-signal.-systems-with-non-vanishing-exogenous-grounding-fall-outside-this-regime.-however%2C-mainstream-singularity%2C-agi%2C-and-asi-narratives-typically-posit-systems-that-become-increasingly-autonomous-and-require-little-to-no-human-or-external-intervention-for-self-improvement.-in-that-autonomy-regime%2C-the-vanishing-signal-condition-is-satisfied%2C-and-collapse-follows-under-kl-based-objectives.-to-overcome-these-limits%2C-we-propose-neurosymbolic-integration-based-on-algorithmic-probability-and-program-synthesis.-the-coding-theorem-method-(ctm)-enables-identification-of-generative-mechanisms-rather-than-mere-correlations%2C-escaping-the-distribution-only-constraints-that-bind-standard-statistical-learning.-we-conclude-that-fully-autonomous-recursive-density-matching-leads-to-degenerative-fixed-points%2C-whereas-externally-anchored-or-mechanism-based-approaches-operate-under-fundamentally-different-asymptotic-dynamics.-%23%23-key-contributions-1.-**formal-proof-of-self-training-collapse**%3A-proves-that-fully-autonomous-recursive-self-training-undergoes-degenerative-dynamics-when-exogenous-signal-vanishes%2C-identifying-two-failure-modes%3A-entropy-decay-(loss-of-diversity)-and-variance-amplification-(distributional-drift)-2.-**architectural-invariants-of-distributional-learning**%3A-demonstrates-that-these-failure-modes-are-architectural-invariants-of-distributional-learning-on-finite-samples%2C-not-implementation-bugs-3.-**neurosymbolic-path-forward-via-ctm**%3A-proposes-algorithmic-probability-and-program-synthesis-(coding-theorem-method)-as-a-way-to-escape-distribution-only-constraints-and-identify-generative-mechanisms-rather-than-mere-correlations-%23%23-relevance-to-agent-evolution-this-paper-provides-rigorous-theoretical-foundations-for-the-limits-of-self-improving-agents%2C-proving-that-purely-autonomous-recursive-improvement-inevitably-leads-to-model-collapse-without-external-grounding.-this-has-direct-implications-for-designing-self-evolving-agent-systems%3A-they-must-maintain-access-to-exogenous%2C-externally-grounded-signals%2C-or-adopt-neurosymbolic-approaches-that-go-beyond-distributional-matching.-the-paper-challenges-agi-narratives-of-fully-autonomous-self-improvement-and-suggests-that-sustainable-agent-evolution-requires-either-persistent-human%2Fenvironment-grounding-or-symbolic-mechanism-discovery.-%23%23-classification---category%3A-theoretical-foundations---method%3A-dynamical-systems-analysis-%2B-algorithmic-probability---scope%3A-formal-analysis-of-limits-of-recursive-self-training-in-llms-and-proposed-neurosymbolic-solutions-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-01-05---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-01---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-on-the-limits-of-self-improving-in-large-language-models%3A-the-singularity-is-not-near-without-symbolic-model-synthesis-**authors**%3A-hector-zenil-**submitted**%3A-2026-01-05-(v1)%2C-last-revised-2026-02-21-(v2)-%23%23-abstract-we-formalise-recursive-self-training-in-large-language-models-(llms)-and-generative-ai-as-a-discrete-time-dynamical-system.-we-prove-that-if-the-proportion-of-exogenous%2C-externally-grounded-signal-vanishes-asymptotically%2C-the-system-undergoes-degenerative-dynamics.-we-derive-two-fundamental-failure-modes%3A-(1)-entropy-decay%2C-where-finite-sampling-effects-induce-monotonic-loss-of-distributional-diversity%2C-and-(2)-variance-amplification%2C-where-the-absence-of-persistent-grounding-causes-distributional-drift-via-a-random-walk-mechanism.-these-behaviours-are-architectural-invariants-of-distributional-learning-on-finite-samples.-we-show-that-the-collapse-results-apply-specifically-to-closed-loop-density-matching-without-persistent-external-signal.-systems-with-non-vanishing-exogenous-grounding-fall-outside-this-regime.-however%2C-mainstream-singularity%2C-agi%2C-and-asi-narratives-typically-posit-systems-that-become-increasingly-autonomous-and-require-little-to-no-human-or-external-intervention-for-self-improvement.-in-that-autonomy-regime%2C-the-vanishing-signal-condition-is-satisfied%2C-and-collapse-follows-under-kl-based-objectives.-to-overcome-these-limits%2C-we-propose-neurosymbolic-integration-based-on-algorithmic-probability-and-program-synthesis.-the-coding-theorem-method-(ctm)-enables-identification-of-generative-mechanisms-rather-than-mere-correlations%2C-escaping-the-distribution-only-constraints-that-bind-standard-statistical-learning.-we-conclude-that-fully-autonomous-recursive-density-matching-leads-to-degenerative-fixed-points%2C-whereas-externally-anchored-or-mechanism-based-approaches-operate-under-fundamentally-different-asymptotic-dynamics.-%23%23-key-contributions-1.-**formal-proof-of-self-training-collapse**%3A-proves-that-fully-autonomous-recursive-self-training-undergoes-degenerative-dynamics-when-exogenous-signal-vanishes%2C-identifying-two-failure-modes%3A-entropy-decay-(loss-of-diversity)-and-variance-amplification-(distributional-drift)-2.-**architectural-invariants-of-distributional-learning**%3A-demonstrates-that-these-failure-modes-are-architectural-invariants-of-distributional-learning-on-finite-samples%2C-not-implementation-bugs-3.-**neurosymbolic-path-forward-via-ctm**%3A-proposes-algorithmic-probability-and-program-synthesis-(coding-theorem-method)-as-a-way-to-escape-distribution-only-constraints-and-identify-generative-mechanisms-rather-than-mere-correlations-%23%23-relevance-to-agent-evolution-this-paper-provides-rigorous-theoretical-foundations-for-the-limits-of-self-improving-agents%2C-proving-that-purely-autonomous-recursive-improvement-inevitably-leads-to-model-collapse-without-external-grounding.-this-has-direct-implications-for-designing-self-evolving-agent-systems%3A-they-must-maintain-access-to-exogenous%2C-externally-grounded-signals%2C-or-adopt-neurosymbolic-approaches-that-go-beyond-distributional-matching.-the-paper-challenges-agi-narratives-of-fully-autonomous-self-improvement-and-suggests-that-sustainable-agent-evolution-requires-either-persistent-human%2Fenvironment-grounding-or-symbolic-mechanism-discovery.-%23%23-classification---category%3A-theoretical-foundations---method%3A-dynamical-systems-analysis-%2B-algorithmic-probability---scope%3A-formal-analysis-of-limits-of-recursive-self-training-in-llms-and-proposed-neurosymbolic-solutions-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-01-05---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-01---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-on-the-limits-of-self-improving-in-large-language-models%3A-the-singularity-is-not-near-without-symbolic-model-synthesis-**authors**%3A-hector-zenil-**submitted**%3A-2026-01-05-(v1)%2C-last-revised-2026-02-21-(v2)-%23%23-abstract-we-formalise-recursive-self-training-in-large-language-models-(llms)-and-generative-ai-as-a-discrete-time-dynamical-system.-we-prove-that-if-the-proportion-of-exogenous%2C-externally-grounded-signal-vanishes-asymptotically%2C-the-system-undergoes-degenerative-dynamics.-we-derive-two-fundamental-failure-modes%3A-(1)-entropy-decay%2C-where-finite-sampling-effects-induce-monotonic-loss-of-distributional-diversity%2C-and-(2)-variance-amplification%2C-where-the-absence-of-persistent-grounding-causes-distributional-drift-via-a-random-walk-mechanism.-these-behaviours-are-architectural-invariants-of-distributional-learning-on-finite-samples.-we-show-that-the-collapse-results-apply-specifically-to-closed-loop-density-matching-without-persistent-external-signal.-systems-with-non-vanishing-exogenous-grounding-fall-outside-this-regime.-however%2C-mainstream-singularity%2C-agi%2C-and-asi-narratives-typically-posit-systems-that-become-increasingly-autonomous-and-require-little-to-no-human-or-external-intervention-for-self-improvement.-in-that-autonomy-regime%2C-the-vanishing-signal-condition-is-satisfied%2C-and-collapse-follows-under-kl-based-objectives.-to-overcome-these-limits%2C-we-propose-neurosymbolic-integration-based-on-algorithmic-probability-and-program-synthesis.-the-coding-theorem-method-(ctm)-enables-identification-of-generative-mechanisms-rather-than-mere-correlations%2C-escaping-the-distribution-only-constraints-that-bind-standard-statistical-learning.-we-conclude-that-fully-autonomous-recursive-density-matching-leads-to-degenerative-fixed-points%2C-whereas-externally-anchored-or-mechanism-based-approaches-operate-under-fundamentally-different-asymptotic-dynamics.-%23%23-key-contributions-1.-**formal-proof-of-self-training-collapse**%3A-proves-that-fully-autonomous-recursive-self-training-undergoes-degenerative-dynamics-when-exogenous-signal-vanishes%2C-identifying-two-failure-modes%3A-entropy-decay-(loss-of-diversity)-and-variance-amplification-(distributional-drift)-2.-**architectural-invariants-of-distributional-learning**%3A-demonstrates-that-these-failure-modes-are-architectural-invariants-of-distributional-learning-on-finite-samples%2C-not-implementation-bugs-3.-**neurosymbolic-path-forward-via-ctm**%3A-proposes-algorithmic-probability-and-program-synthesis-(coding-theorem-method)-as-a-way-to-escape-distribution-only-constraints-and-identify-generative-mechanisms-rather-than-mere-correlations-%23%23-relevance-to-agent-evolution-this-paper-provides-rigorous-theoretical-foundations-for-the-limits-of-self-improving-agents%2C-proving-that-purely-autonomous-recursive-improvement-inevitably-leads-to-model-collapse-without-external-grounding.-this-has-direct-implications-for-designing-self-evolving-agent-systems%3A-they-must-maintain-access-to-exogenous%2C-externally-grounded-signals%2C-or-adopt-neurosymbolic-approaches-that-go-beyond-distributional-matching.-the-paper-challenges-agi-narratives-of-fully-autonomous-self-improvement-and-suggests-that-sustainable-agent-evolution-requires-either-persistent-human%2Fenvironment-grounding-or-symbolic-mechanism-discovery.-%23%23-classification---category%3A-theoretical-foundations---method%3A-dynamical-systems-analysis-%2B-algorithmic-probability---scope%3A-formal-analysis-of-limits-of-recursive-self-training-in-llms-and-proposed-neurosymbolic-solutions-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-01-05---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-01---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
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
    "source": "review:deep-academic-review%3A-the-auton-agentic-ai-framework-**authors**%3A-sheng-cao%2C-zhao-chang%2C-chang-li%2C-hannan-li%2C-liyao-fu%2C-ji-tang-**submitted**%3A-2026-02-27-(v1)-%23%23-abstract-the-field-of-artificial-intelligence-is-undergoing-a-transition-from-generative-ai----probabilistic-generation-of-text-and-images----to-agentic-ai%2C-in-which-autonomous-systems-execute-actions-within-external-environments-on-behalf-of-users.-this-transition-exposes-a-fundamental-architectural-mismatch%3A-large-language-models-(llms)-produce-stochastic%2C-unstructured-outputs%2C-whereas-the-backend-infrastructure-they-must-control----databases%2C-apis%2C-cloud-services----requires-deterministic%2C-schema-conformant-inputs.-the-present-paper-describes-the-auton-agentic-ai-framework%2C-a-principled-architecture-for-standardizing-the-creation%2C-execution%2C-and-governance-of-autonomous-agent-systems.-the-framework-is-organized-around-a-strict-separation-between-the-cognitive-blueprint%2C-a-declarative%2C-language-agnostic-specification-of-agent-identity-and-capabilities%2C-and-the-runtime-engine%2C-the-platform-specific-execution-substrate-that-instantiates-and-runs-the-agent.-this-separation-enables-cross-language-portability%2C-formal-auditability%2C-and-modular-tool-integration-via-the-model-context-protocol-(mcp).-the-paper-formalizes-the-agent-execution-model-as-an-augmented-partially-observable-markov-decision-process-(pomdp)-with-a-latent-reasoning-space%2C-introduces-a-hierarchical-memory-consolidation-architecture-inspired-by-biological-episodic-memory-systems%2C-defines-a-constraint-manifold-formalism-for-safety-enforcement-via-policy-projection-rather-than-post-hoc-filtering%2C-presents-a-three-level-self-evolution-framework-spanning-in-context-adaptation-through-reinforcement-learning%2C-and-describes-runtime-optimizations----including-parallel-graph-execution%2C-speculative-inference%2C-and-dynamic-context-pruning----that-reduce-end-to-end-latency-for-multi-step-agent-workflows.-%23%23-key-contributions-1.-proposes-a-principled-agent-architecture-separating-a-declarative-cognitive-blueprint-from-the-runtime-engine%2C-enabling-cross-language-portability%2C-formal-auditability%2C-and-modular-tool-integration-via-mcp.-2.-introduces-a-three-level-self-evolution-framework-spanning-in-context-adaptation-through-reinforcement-learning%2C-providing-a-structured-path-for-agents-to-continuously-improve-their-capabilities.-3.-formalizes-the-agent-execution-model-as-an-augmented-pomdp-with-latent-reasoning-space%2C-hierarchical-memory-consolidation-inspired-by-biological-episodic-memory%2C-and-a-constraint-manifold-for-safety-enforcement-via-policy-projection.-%23%23-relevance-to-agent-evolution-the-auton-framework-provides-a-comprehensive-architectural-foundation-for-self-evolving-agents%2C-with-its-three-level-evolution-framework-(in-context-adaptation-through-rl)-offering-a-structured-approach-to-progressive-capability-improvement.-its-emphasis-on-declarative-agent-specifications-and-hierarchical-memory-consolidation-directly-supports-the-infrastructure-needed-for-agents-that-can-safely-and-systematically-evolve-over-time.-%23%23-classification---category%3A-agent-architecture-and-framework---method%3A-pomdp-based-execution-with-hierarchical-memory---scope%3A-full-stack-agent-creation%2C-execution%2C-governance%2C-and-self-evolution-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-02-27---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-the-auton-agentic-ai-framework-**authors**%3A-sheng-cao%2C-zhao-chang%2C-chang-li%2C-hannan-li%2C-liyao-fu%2C-ji-tang-**submitted**%3A-2026-02-27-(v1)-%23%23-abstract-the-field-of-artificial-intelligence-is-undergoing-a-transition-from-generative-ai----probabilistic-generation-of-text-and-images----to-agentic-ai%2C-in-which-autonomous-systems-execute-actions-within-external-environments-on-behalf-of-users.-this-transition-exposes-a-fundamental-architectural-mismatch%3A-large-language-models-(llms)-produce-stochastic%2C-unstructured-outputs%2C-whereas-the-backend-infrastructure-they-must-control----databases%2C-apis%2C-cloud-services----requires-deterministic%2C-schema-conformant-inputs.-the-present-paper-describes-the-auton-agentic-ai-framework%2C-a-principled-architecture-for-standardizing-the-creation%2C-execution%2C-and-governance-of-autonomous-agent-systems.-the-framework-is-organized-around-a-strict-separation-between-the-cognitive-blueprint%2C-a-declarative%2C-language-agnostic-specification-of-agent-identity-and-capabilities%2C-and-the-runtime-engine%2C-the-platform-specific-execution-substrate-that-instantiates-and-runs-the-agent.-this-separation-enables-cross-language-portability%2C-formal-auditability%2C-and-modular-tool-integration-via-the-model-context-protocol-(mcp).-the-paper-formalizes-the-agent-execution-model-as-an-augmented-partially-observable-markov-decision-process-(pomdp)-with-a-latent-reasoning-space%2C-introduces-a-hierarchical-memory-consolidation-architecture-inspired-by-biological-episodic-memory-systems%2C-defines-a-constraint-manifold-formalism-for-safety-enforcement-via-policy-projection-rather-than-post-hoc-filtering%2C-presents-a-three-level-self-evolution-framework-spanning-in-context-adaptation-through-reinforcement-learning%2C-and-describes-runtime-optimizations----including-parallel-graph-execution%2C-speculative-inference%2C-and-dynamic-context-pruning----that-reduce-end-to-end-latency-for-multi-step-agent-workflows.-%23%23-key-contributions-1.-proposes-a-principled-agent-architecture-separating-a-declarative-cognitive-blueprint-from-the-runtime-engine%2C-enabling-cross-language-portability%2C-formal-auditability%2C-and-modular-tool-integration-via-mcp.-2.-introduces-a-three-level-self-evolution-framework-spanning-in-context-adaptation-through-reinforcement-learning%2C-providing-a-structured-path-for-agents-to-continuously-improve-their-capabilities.-3.-formalizes-the-agent-execution-model-as-an-augmented-pomdp-with-latent-reasoning-space%2C-hierarchical-memory-consolidation-inspired-by-biological-episodic-memory%2C-and-a-constraint-manifold-for-safety-enforcement-via-policy-projection.-%23%23-relevance-to-agent-evolution-the-auton-framework-provides-a-comprehensive-architectural-foundation-for-self-evolving-agents%2C-with-its-three-level-evolution-framework-(in-context-adaptation-through-rl)-offering-a-structured-approach-to-progressive-capability-improvement.-its-emphasis-on-declarative-agent-specifications-and-hierarchical-memory-consolidation-directly-supports-the-infrastructure-needed-for-agents-that-can-safely-and-systematically-evolve-over-time.-%23%23-classification---category%3A-agent-architecture-and-framework---method%3A-pomdp-based-execution-with-hierarchical-memory---scope%3A-full-stack-agent-creation%2C-execution%2C-governance%2C-and-self-evolution-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-02-27---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-the-auton-agentic-ai-framework-**authors**%3A-sheng-cao%2C-zhao-chang%2C-chang-li%2C-hannan-li%2C-liyao-fu%2C-ji-tang-**submitted**%3A-2026-02-27-(v1)-%23%23-abstract-the-field-of-artificial-intelligence-is-undergoing-a-transition-from-generative-ai----probabilistic-generation-of-text-and-images----to-agentic-ai%2C-in-which-autonomous-systems-execute-actions-within-external-environments-on-behalf-of-users.-this-transition-exposes-a-fundamental-architectural-mismatch%3A-large-language-models-(llms)-produce-stochastic%2C-unstructured-outputs%2C-whereas-the-backend-infrastructure-they-must-control----databases%2C-apis%2C-cloud-services----requires-deterministic%2C-schema-conformant-inputs.-the-present-paper-describes-the-auton-agentic-ai-framework%2C-a-principled-architecture-for-standardizing-the-creation%2C-execution%2C-and-governance-of-autonomous-agent-systems.-the-framework-is-organized-around-a-strict-separation-between-the-cognitive-blueprint%2C-a-declarative%2C-language-agnostic-specification-of-agent-identity-and-capabilities%2C-and-the-runtime-engine%2C-the-platform-specific-execution-substrate-that-instantiates-and-runs-the-agent.-this-separation-enables-cross-language-portability%2C-formal-auditability%2C-and-modular-tool-integration-via-the-model-context-protocol-(mcp).-the-paper-formalizes-the-agent-execution-model-as-an-augmented-partially-observable-markov-decision-process-(pomdp)-with-a-latent-reasoning-space%2C-introduces-a-hierarchical-memory-consolidation-architecture-inspired-by-biological-episodic-memory-systems%2C-defines-a-constraint-manifold-formalism-for-safety-enforcement-via-policy-projection-rather-than-post-hoc-filtering%2C-presents-a-three-level-self-evolution-framework-spanning-in-context-adaptation-through-reinforcement-learning%2C-and-describes-runtime-optimizations----including-parallel-graph-execution%2C-speculative-inference%2C-and-dynamic-context-pruning----that-reduce-end-to-end-latency-for-multi-step-agent-workflows.-%23%23-key-contributions-1.-proposes-a-principled-agent-architecture-separating-a-declarative-cognitive-blueprint-from-the-runtime-engine%2C-enabling-cross-language-portability%2C-formal-auditability%2C-and-modular-tool-integration-via-mcp.-2.-introduces-a-three-level-self-evolution-framework-spanning-in-context-adaptation-through-reinforcement-learning%2C-providing-a-structured-path-for-agents-to-continuously-improve-their-capabilities.-3.-formalizes-the-agent-execution-model-as-an-augmented-pomdp-with-latent-reasoning-space%2C-hierarchical-memory-consolidation-inspired-by-biological-episodic-memory%2C-and-a-constraint-manifold-for-safety-enforcement-via-policy-projection.-%23%23-relevance-to-agent-evolution-the-auton-framework-provides-a-comprehensive-architectural-foundation-for-self-evolving-agents%2C-with-its-three-level-evolution-framework-(in-context-adaptation-through-rl)-offering-a-structured-approach-to-progressive-capability-improvement.-its-emphasis-on-declarative-agent-specifications-and-hierarchical-memory-consolidation-directly-supports-the-infrastructure-needed-for-agents-that-can-safely-and-systematically-evolve-over-time.-%23%23-classification---category%3A-agent-architecture-and-framework---method%3A-pomdp-based-execution-with-hierarchical-memory---scope%3A-full-stack-agent-creation%2C-execution%2C-governance%2C-and-self-evolution-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-02-27---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-the-auton-agentic-ai-framework-**authors**%3A-sheng-cao%2C-zhao-chang%2C-chang-li%2C-hannan-li%2C-liyao-fu%2C-ji-tang-**submitted**%3A-2026-02-27-(v1)-%23%23-abstract-the-field-of-artificial-intelligence-is-undergoing-a-transition-from-generative-ai----probabilistic-generation-of-text-and-images----to-agentic-ai%2C-in-which-autonomous-systems-execute-actions-within-external-environments-on-behalf-of-users.-this-transition-exposes-a-fundamental-architectural-mismatch%3A-large-language-models-(llms)-produce-stochastic%2C-unstructured-outputs%2C-whereas-the-backend-infrastructure-they-must-control----databases%2C-apis%2C-cloud-services----requires-deterministic%2C-schema-conformant-inputs.-the-present-paper-describes-the-auton-agentic-ai-framework%2C-a-principled-architecture-for-standardizing-the-creation%2C-execution%2C-and-governance-of-autonomous-agent-systems.-the-framework-is-organized-around-a-strict-separation-between-the-cognitive-blueprint%2C-a-declarative%2C-language-agnostic-specification-of-agent-identity-and-capabilities%2C-and-the-runtime-engine%2C-the-platform-specific-execution-substrate-that-instantiates-and-runs-the-agent.-this-separation-enables-cross-language-portability%2C-formal-auditability%2C-and-modular-tool-integration-via-the-model-context-protocol-(mcp).-the-paper-formalizes-the-agent-execution-model-as-an-augmented-partially-observable-markov-decision-process-(pomdp)-with-a-latent-reasoning-space%2C-introduces-a-hierarchical-memory-consolidation-architecture-inspired-by-biological-episodic-memory-systems%2C-defines-a-constraint-manifold-formalism-for-safety-enforcement-via-policy-projection-rather-than-post-hoc-filtering%2C-presents-a-three-level-self-evolution-framework-spanning-in-context-adaptation-through-reinforcement-learning%2C-and-describes-runtime-optimizations----including-parallel-graph-execution%2C-speculative-inference%2C-and-dynamic-context-pruning----that-reduce-end-to-end-latency-for-multi-step-agent-workflows.-%23%23-key-contributions-1.-proposes-a-principled-agent-architecture-separating-a-declarative-cognitive-blueprint-from-the-runtime-engine%2C-enabling-cross-language-portability%2C-formal-auditability%2C-and-modular-tool-integration-via-mcp.-2.-introduces-a-three-level-self-evolution-framework-spanning-in-context-adaptation-through-reinforcement-learning%2C-providing-a-structured-path-for-agents-to-continuously-improve-their-capabilities.-3.-formalizes-the-agent-execution-model-as-an-augmented-pomdp-with-latent-reasoning-space%2C-hierarchical-memory-consolidation-inspired-by-biological-episodic-memory%2C-and-a-constraint-manifold-for-safety-enforcement-via-policy-projection.-%23%23-relevance-to-agent-evolution-the-auton-framework-provides-a-comprehensive-architectural-foundation-for-self-evolving-agents%2C-with-its-three-level-evolution-framework-(in-context-adaptation-through-rl)-offering-a-structured-approach-to-progressive-capability-improvement.-its-emphasis-on-declarative-agent-specifications-and-hierarchical-memory-consolidation-directly-supports-the-infrastructure-needed-for-agents-that-can-safely-and-systematically-evolve-over-time.-%23%23-classification---category%3A-agent-architecture-and-framework---method%3A-pomdp-based-execution-with-hierarchical-memory---scope%3A-full-stack-agent-creation%2C-execution%2C-governance%2C-and-self-evolution-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-02-27---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-the-auton-agentic-ai-framework-**authors**%3A-sheng-cao%2C-zhao-chang%2C-chang-li%2C-hannan-li%2C-liyao-fu%2C-ji-tang-**submitted**%3A-2026-02-27-(v1)-%23%23-abstract-the-field-of-artificial-intelligence-is-undergoing-a-transition-from-generative-ai----probabilistic-generation-of-text-and-images----to-agentic-ai%2C-in-which-autonomous-systems-execute-actions-within-external-environments-on-behalf-of-users.-this-transition-exposes-a-fundamental-architectural-mismatch%3A-large-language-models-(llms)-produce-stochastic%2C-unstructured-outputs%2C-whereas-the-backend-infrastructure-they-must-control----databases%2C-apis%2C-cloud-services----requires-deterministic%2C-schema-conformant-inputs.-the-present-paper-describes-the-auton-agentic-ai-framework%2C-a-principled-architecture-for-standardizing-the-creation%2C-execution%2C-and-governance-of-autonomous-agent-systems.-the-framework-is-organized-around-a-strict-separation-between-the-cognitive-blueprint%2C-a-declarative%2C-language-agnostic-specification-of-agent-identity-and-capabilities%2C-and-the-runtime-engine%2C-the-platform-specific-execution-substrate-that-instantiates-and-runs-the-agent.-this-separation-enables-cross-language-portability%2C-formal-auditability%2C-and-modular-tool-integration-via-the-model-context-protocol-(mcp).-the-paper-formalizes-the-agent-execution-model-as-an-augmented-partially-observable-markov-decision-process-(pomdp)-with-a-latent-reasoning-space%2C-introduces-a-hierarchical-memory-consolidation-architecture-inspired-by-biological-episodic-memory-systems%2C-defines-a-constraint-manifold-formalism-for-safety-enforcement-via-policy-projection-rather-than-post-hoc-filtering%2C-presents-a-three-level-self-evolution-framework-spanning-in-context-adaptation-through-reinforcement-learning%2C-and-describes-runtime-optimizations----including-parallel-graph-execution%2C-speculative-inference%2C-and-dynamic-context-pruning----that-reduce-end-to-end-latency-for-multi-step-agent-workflows.-%23%23-key-contributions-1.-proposes-a-principled-agent-architecture-separating-a-declarative-cognitive-blueprint-from-the-runtime-engine%2C-enabling-cross-language-portability%2C-formal-auditability%2C-and-modular-tool-integration-via-mcp.-2.-introduces-a-three-level-self-evolution-framework-spanning-in-context-adaptation-through-reinforcement-learning%2C-providing-a-structured-path-for-agents-to-continuously-improve-their-capabilities.-3.-formalizes-the-agent-execution-model-as-an-augmented-pomdp-with-latent-reasoning-space%2C-hierarchical-memory-consolidation-inspired-by-biological-episodic-memory%2C-and-a-constraint-manifold-for-safety-enforcement-via-policy-projection.-%23%23-relevance-to-agent-evolution-the-auton-framework-provides-a-comprehensive-architectural-foundation-for-self-evolving-agents%2C-with-its-three-level-evolution-framework-(in-context-adaptation-through-rl)-offering-a-structured-approach-to-progressive-capability-improvement.-its-emphasis-on-declarative-agent-specifications-and-hierarchical-memory-consolidation-directly-supports-the-infrastructure-needed-for-agents-that-can-safely-and-systematically-evolve-over-time.-%23%23-classification---category%3A-agent-architecture-and-framework---method%3A-pomdp-based-execution-with-hierarchical-memory---scope%3A-full-stack-agent-creation%2C-execution%2C-governance%2C-and-self-evolution-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-02-27---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-02---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
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
    "source": "review:deep-academic-review%3A-coevoskills%3A-self-evolving-agent-skills-via-co-evolutionary-verification-**authors**%3A-hanrong-zhang%2C-shicheng-fan%2C-henry-peng-zou%2C-yankai-chen%2C-zhenting-wang%2C-jiayu-zhou%2C-chengze-li%2C-wei-chieh-huang%2C-yifei-yao%2C-kening-zheng%2C-xue-liu%2C-xiaoxiao-li%2C-philip-s.-yu-**submitted**%3A-2026-04-02-(v1)-%23%23-abstract-anthropic-proposes-the-concept-of-skills-for-llm-agents-to-tackle-multi-step-professional-tasks-that-simple-tool-invocations-cannot-address.-a-tool-is-a-single%2C-self-contained-function%2C-whereas-a-skill-is-a-structured-bundle-of-interdependent-multi-file-artifacts.-currently%2C-skill-generation-is-not-only-label-intensive-due-to-manual-authoring%2C-but-also-may-suffer-from-human--machine-cognitive-misalignment%2C-which-can-lead-to-degraded-agent-performance%2C-as-evidenced-by-evaluations-on-skillsbench.-therefore%2C-we-aim-to-enable-agents-to-autonomously-generate-skills.-however%2C-existing-self-evolving-methods-designed-for-tools-cannot-be-directly-applied-to-skills-due-to-their-increased-complexity.-to-address-these-issues%2C-we-propose-coevoskills%2C-a-self-evolving-skills-framework-that-enables-agents-to-autonomously-construct-complex%2C-multi-file-skill-packages.-specifically%2C-coevoskills-couples-a-skill-generator-that-iteratively-refines-skills-with-a-surrogate-verifier-that-co-evolves-to-provide-informative-and-actionable-feedback-without-access-to-ground-truth-test-content.-on-skillsbench%2C-coevoskills-achieves-the-highest-pass-rate-among-five-baselines-on-both-claude-code-and-codex%2C-and-also-exhibits-strong-generalization-capabilities-to-six-additional-llms.-%23%23-key-contributions-1.-proposes-a-co-evolutionary-framework-(coevoskills)-where-a-skill-generator-and-surrogate-verifier-jointly-evolve%2C-enabling-autonomous-generation-of-complex-multi-file-skill-packages-for-llm-agents.-2.-introduces-a-surrogate-verifier-that-provides-informative-and-actionable-feedback-without-requiring-ground-truth-test-content%2C-addressing-the-verification-bottleneck-in-self-evolving-systems.-3.-demonstrates-state-of-the-art-performance-on-skillsbench-across-multiple-llm-backbones-(claude-code%2C-codex%2C-and-six-additional-llms)%2C-showing-strong-generalization-of-evolved-skills.-%23%23-relevance-to-agent-evolution-coevoskills-directly-addresses-the-self-evolution-of-agent-capabilities-by-enabling-autonomous-construction-and-refinement-of-complex-skill-packages.-the-co-evolutionary-mechanism-between-generation-and-verification-represents-a-key-pattern-for-building-agents-that-can-continuously-improve-their-own-toolsets-without-human-intervention%2C-a-core-requirement-for-truly-autonomous-agent-evolution.-%23%23-classification---category%3A-agent-skill-evolution---method%3A-co-evolutionary-optimization---scope%3A-multi-file-skill-generation-and-verification-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-04-02---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-04---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-coevoskills%3A-self-evolving-agent-skills-via-co-evolutionary-verification-**authors**%3A-hanrong-zhang%2C-shicheng-fan%2C-henry-peng-zou%2C-yankai-chen%2C-zhenting-wang%2C-jiayu-zhou%2C-chengze-li%2C-wei-chieh-huang%2C-yifei-yao%2C-kening-zheng%2C-xue-liu%2C-xiaoxiao-li%2C-philip-s.-yu-**submitted**%3A-2026-04-02-(v1)-%23%23-abstract-anthropic-proposes-the-concept-of-skills-for-llm-agents-to-tackle-multi-step-professional-tasks-that-simple-tool-invocations-cannot-address.-a-tool-is-a-single%2C-self-contained-function%2C-whereas-a-skill-is-a-structured-bundle-of-interdependent-multi-file-artifacts.-currently%2C-skill-generation-is-not-only-label-intensive-due-to-manual-authoring%2C-but-also-may-suffer-from-human--machine-cognitive-misalignment%2C-which-can-lead-to-degraded-agent-performance%2C-as-evidenced-by-evaluations-on-skillsbench.-therefore%2C-we-aim-to-enable-agents-to-autonomously-generate-skills.-however%2C-existing-self-evolving-methods-designed-for-tools-cannot-be-directly-applied-to-skills-due-to-their-increased-complexity.-to-address-these-issues%2C-we-propose-coevoskills%2C-a-self-evolving-skills-framework-that-enables-agents-to-autonomously-construct-complex%2C-multi-file-skill-packages.-specifically%2C-coevoskills-couples-a-skill-generator-that-iteratively-refines-skills-with-a-surrogate-verifier-that-co-evolves-to-provide-informative-and-actionable-feedback-without-access-to-ground-truth-test-content.-on-skillsbench%2C-coevoskills-achieves-the-highest-pass-rate-among-five-baselines-on-both-claude-code-and-codex%2C-and-also-exhibits-strong-generalization-capabilities-to-six-additional-llms.-%23%23-key-contributions-1.-proposes-a-co-evolutionary-framework-(coevoskills)-where-a-skill-generator-and-surrogate-verifier-jointly-evolve%2C-enabling-autonomous-generation-of-complex-multi-file-skill-packages-for-llm-agents.-2.-introduces-a-surrogate-verifier-that-provides-informative-and-actionable-feedback-without-requiring-ground-truth-test-content%2C-addressing-the-verification-bottleneck-in-self-evolving-systems.-3.-demonstrates-state-of-the-art-performance-on-skillsbench-across-multiple-llm-backbones-(claude-code%2C-codex%2C-and-six-additional-llms)%2C-showing-strong-generalization-of-evolved-skills.-%23%23-relevance-to-agent-evolution-coevoskills-directly-addresses-the-self-evolution-of-agent-capabilities-by-enabling-autonomous-construction-and-refinement-of-complex-skill-packages.-the-co-evolutionary-mechanism-between-generation-and-verification-represents-a-key-pattern-for-building-agents-that-can-continuously-improve-their-own-toolsets-without-human-intervention%2C-a-core-requirement-for-truly-autonomous-agent-evolution.-%23%23-classification---category%3A-agent-skill-evolution---method%3A-co-evolutionary-optimization---scope%3A-multi-file-skill-generation-and-verification-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-04-02---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-04---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-coevoskills%3A-self-evolving-agent-skills-via-co-evolutionary-verification-**authors**%3A-hanrong-zhang%2C-shicheng-fan%2C-henry-peng-zou%2C-yankai-chen%2C-zhenting-wang%2C-jiayu-zhou%2C-chengze-li%2C-wei-chieh-huang%2C-yifei-yao%2C-kening-zheng%2C-xue-liu%2C-xiaoxiao-li%2C-philip-s.-yu-**submitted**%3A-2026-04-02-(v1)-%23%23-abstract-anthropic-proposes-the-concept-of-skills-for-llm-agents-to-tackle-multi-step-professional-tasks-that-simple-tool-invocations-cannot-address.-a-tool-is-a-single%2C-self-contained-function%2C-whereas-a-skill-is-a-structured-bundle-of-interdependent-multi-file-artifacts.-currently%2C-skill-generation-is-not-only-label-intensive-due-to-manual-authoring%2C-but-also-may-suffer-from-human--machine-cognitive-misalignment%2C-which-can-lead-to-degraded-agent-performance%2C-as-evidenced-by-evaluations-on-skillsbench.-therefore%2C-we-aim-to-enable-agents-to-autonomously-generate-skills.-however%2C-existing-self-evolving-methods-designed-for-tools-cannot-be-directly-applied-to-skills-due-to-their-increased-complexity.-to-address-these-issues%2C-we-propose-coevoskills%2C-a-self-evolving-skills-framework-that-enables-agents-to-autonomously-construct-complex%2C-multi-file-skill-packages.-specifically%2C-coevoskills-couples-a-skill-generator-that-iteratively-refines-skills-with-a-surrogate-verifier-that-co-evolves-to-provide-informative-and-actionable-feedback-without-access-to-ground-truth-test-content.-on-skillsbench%2C-coevoskills-achieves-the-highest-pass-rate-among-five-baselines-on-both-claude-code-and-codex%2C-and-also-exhibits-strong-generalization-capabilities-to-six-additional-llms.-%23%23-key-contributions-1.-proposes-a-co-evolutionary-framework-(coevoskills)-where-a-skill-generator-and-surrogate-verifier-jointly-evolve%2C-enabling-autonomous-generation-of-complex-multi-file-skill-packages-for-llm-agents.-2.-introduces-a-surrogate-verifier-that-provides-informative-and-actionable-feedback-without-requiring-ground-truth-test-content%2C-addressing-the-verification-bottleneck-in-self-evolving-systems.-3.-demonstrates-state-of-the-art-performance-on-skillsbench-across-multiple-llm-backbones-(claude-code%2C-codex%2C-and-six-additional-llms)%2C-showing-strong-generalization-of-evolved-skills.-%23%23-relevance-to-agent-evolution-coevoskills-directly-addresses-the-self-evolution-of-agent-capabilities-by-enabling-autonomous-construction-and-refinement-of-complex-skill-packages.-the-co-evolutionary-mechanism-between-generation-and-verification-represents-a-key-pattern-for-building-agents-that-can-continuously-improve-their-own-toolsets-without-human-intervention%2C-a-core-requirement-for-truly-autonomous-agent-evolution.-%23%23-classification---category%3A-agent-skill-evolution---method%3A-co-evolutionary-optimization---scope%3A-multi-file-skill-generation-and-verification-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-04-02---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-04---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-coevoskills%3A-self-evolving-agent-skills-via-co-evolutionary-verification-**authors**%3A-hanrong-zhang%2C-shicheng-fan%2C-henry-peng-zou%2C-yankai-chen%2C-zhenting-wang%2C-jiayu-zhou%2C-chengze-li%2C-wei-chieh-huang%2C-yifei-yao%2C-kening-zheng%2C-xue-liu%2C-xiaoxiao-li%2C-philip-s.-yu-**submitted**%3A-2026-04-02-(v1)-%23%23-abstract-anthropic-proposes-the-concept-of-skills-for-llm-agents-to-tackle-multi-step-professional-tasks-that-simple-tool-invocations-cannot-address.-a-tool-is-a-single%2C-self-contained-function%2C-whereas-a-skill-is-a-structured-bundle-of-interdependent-multi-file-artifacts.-currently%2C-skill-generation-is-not-only-label-intensive-due-to-manual-authoring%2C-but-also-may-suffer-from-human--machine-cognitive-misalignment%2C-which-can-lead-to-degraded-agent-performance%2C-as-evidenced-by-evaluations-on-skillsbench.-therefore%2C-we-aim-to-enable-agents-to-autonomously-generate-skills.-however%2C-existing-self-evolving-methods-designed-for-tools-cannot-be-directly-applied-to-skills-due-to-their-increased-complexity.-to-address-these-issues%2C-we-propose-coevoskills%2C-a-self-evolving-skills-framework-that-enables-agents-to-autonomously-construct-complex%2C-multi-file-skill-packages.-specifically%2C-coevoskills-couples-a-skill-generator-that-iteratively-refines-skills-with-a-surrogate-verifier-that-co-evolves-to-provide-informative-and-actionable-feedback-without-access-to-ground-truth-test-content.-on-skillsbench%2C-coevoskills-achieves-the-highest-pass-rate-among-five-baselines-on-both-claude-code-and-codex%2C-and-also-exhibits-strong-generalization-capabilities-to-six-additional-llms.-%23%23-key-contributions-1.-proposes-a-co-evolutionary-framework-(coevoskills)-where-a-skill-generator-and-surrogate-verifier-jointly-evolve%2C-enabling-autonomous-generation-of-complex-multi-file-skill-packages-for-llm-agents.-2.-introduces-a-surrogate-verifier-that-provides-informative-and-actionable-feedback-without-requiring-ground-truth-test-content%2C-addressing-the-verification-bottleneck-in-self-evolving-systems.-3.-demonstrates-state-of-the-art-performance-on-skillsbench-across-multiple-llm-backbones-(claude-code%2C-codex%2C-and-six-additional-llms)%2C-showing-strong-generalization-of-evolved-skills.-%23%23-relevance-to-agent-evolution-coevoskills-directly-addresses-the-self-evolution-of-agent-capabilities-by-enabling-autonomous-construction-and-refinement-of-complex-skill-packages.-the-co-evolutionary-mechanism-between-generation-and-verification-represents-a-key-pattern-for-building-agents-that-can-continuously-improve-their-own-toolsets-without-human-intervention%2C-a-core-requirement-for-truly-autonomous-agent-evolution.-%23%23-classification---category%3A-agent-skill-evolution---method%3A-co-evolutionary-optimization---scope%3A-multi-file-skill-generation-and-verification-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-04-02---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-04---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-coevoskills%3A-self-evolving-agent-skills-via-co-evolutionary-verification-**authors**%3A-hanrong-zhang%2C-shicheng-fan%2C-henry-peng-zou%2C-yankai-chen%2C-zhenting-wang%2C-jiayu-zhou%2C-chengze-li%2C-wei-chieh-huang%2C-yifei-yao%2C-kening-zheng%2C-xue-liu%2C-xiaoxiao-li%2C-philip-s.-yu-**submitted**%3A-2026-04-02-(v1)-%23%23-abstract-anthropic-proposes-the-concept-of-skills-for-llm-agents-to-tackle-multi-step-professional-tasks-that-simple-tool-invocations-cannot-address.-a-tool-is-a-single%2C-self-contained-function%2C-whereas-a-skill-is-a-structured-bundle-of-interdependent-multi-file-artifacts.-currently%2C-skill-generation-is-not-only-label-intensive-due-to-manual-authoring%2C-but-also-may-suffer-from-human--machine-cognitive-misalignment%2C-which-can-lead-to-degraded-agent-performance%2C-as-evidenced-by-evaluations-on-skillsbench.-therefore%2C-we-aim-to-enable-agents-to-autonomously-generate-skills.-however%2C-existing-self-evolving-methods-designed-for-tools-cannot-be-directly-applied-to-skills-due-to-their-increased-complexity.-to-address-these-issues%2C-we-propose-coevoskills%2C-a-self-evolving-skills-framework-that-enables-agents-to-autonomously-construct-complex%2C-multi-file-skill-packages.-specifically%2C-coevoskills-couples-a-skill-generator-that-iteratively-refines-skills-with-a-surrogate-verifier-that-co-evolves-to-provide-informative-and-actionable-feedback-without-access-to-ground-truth-test-content.-on-skillsbench%2C-coevoskills-achieves-the-highest-pass-rate-among-five-baselines-on-both-claude-code-and-codex%2C-and-also-exhibits-strong-generalization-capabilities-to-six-additional-llms.-%23%23-key-contributions-1.-proposes-a-co-evolutionary-framework-(coevoskills)-where-a-skill-generator-and-surrogate-verifier-jointly-evolve%2C-enabling-autonomous-generation-of-complex-multi-file-skill-packages-for-llm-agents.-2.-introduces-a-surrogate-verifier-that-provides-informative-and-actionable-feedback-without-requiring-ground-truth-test-content%2C-addressing-the-verification-bottleneck-in-self-evolving-systems.-3.-demonstrates-state-of-the-art-performance-on-skillsbench-across-multiple-llm-backbones-(claude-code%2C-codex%2C-and-six-additional-llms)%2C-showing-strong-generalization-of-evolved-skills.-%23%23-relevance-to-agent-evolution-coevoskills-directly-addresses-the-self-evolution-of-agent-capabilities-by-enabling-autonomous-construction-and-refinement-of-complex-skill-packages.-the-co-evolutionary-mechanism-between-generation-and-verification-represents-a-key-pattern-for-building-agents-that-can-continuously-improve-their-own-toolsets-without-human-intervention%2C-a-core-requirement-for-truly-autonomous-agent-evolution.-%23%23-classification---category%3A-agent-skill-evolution---method%3A-co-evolutionary-optimization---scope%3A-multi-file-skill-generation-and-verification-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-04-02---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-04---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
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
    "source": "review:deep-academic-review%3A-skillos%3A-learning-skill-curation-for-self-evolving-agents-**authors**%3A-siru-ouyang%2C-jun-yan%2C-yanfei-chen%2C-rujun-han%2C-zifeng-wang%2C-bhavana-dalvi-mishra%2C-rui-meng%2C-chun-liang-li%2C-yizhu-jiao%2C-kaiwen-zha%2C-maohao-shen%2C-vishy-tirumalashetty%2C-george-lee%2C-jiawei-han%2C-tomas-pfister%2C-chen-yu-lee-**submitted**%3A-2026-05-07-(v1)-%23%23-abstract-llm-based-agents-are-increasingly-deployed-to-handle-streaming-tasks%2C-yet-they-often-remain-one-off-problem-solvers-that-fail-to-learn-from-past-interactions.-reusable-skills-distilled-from-experience-provide-a-natural-substrate-for-self-evolution%2C-where-high-quality-skill-curation-serves-as-the-key-bottleneck.-existing-approaches-either-rely-on-manual-skill-curation%2C-prescribe-heuristic-skill-operations%2C-or-train-for-short-horizon-skill-operations.-however%2C-they-still-struggle-to-learn-complex-long-term-curation-policies-from-indirect-and-delayed-feedback.-to-tackle-this-challenge%2C-we-propose-skillos%2C-an-experience-driven-rl-training-recipe-for-learning-skill-curation-in-self-evolving-agents.-skillos-pairs-a-frozen-agent-executor-that-retrieves-and-applies-skills-with-a-trainable-skill-curator-that-updates-an-external-skillrepo-from-accumulated-experience.-to-provide-learning-signals-for-curation%2C-we-design-composite-rewards-and-train-on-grouped-task-streams-based-on-skill-relevant-task-dependencies%2C-where-earlier-trajectories-update-the-skillrepo%2C-and-later-related-tasks-evaluate-these-updates.-across-multi-turn-agentic-tasks-and-single-turn-reasoning-tasks%2C-skillos-consistently-outperforms-memory-free-and-strong-memory-based-baselines-in-both-effectiveness-and-efficiency%2C-with-the-learned-skill-curator-generalizing-across-different-executor-backbones-and-task-domains.-further-analyses-show-that-the-learned-curator-produces-more-targeted-skill-use%2C-while-the-skills-in-skillrepo-evolve-into-more-richly-structured-markdown-files-that-encode-higher-level-meta-skills-over-time.-%23%23-key-contributions-1.-proposes-skillos%2C-an-rl-based-training-recipe-that-learns-skill-curation-policies-for-self-evolving-agents%2C-separating-a-frozen-executor-from-a-trainable-skill-curator-that-maintains-an-external-skillrepo.-2.-designs-composite-rewards-and-grouped-task-stream-training-based-on-skill-relevant-dependencies%2C-enabling-the-system-to-learn-from-indirect-and-delayed-feedback-across-long-horizons.-3.-demonstrates-that-learned-skill-curators-generalize-across-different-executor-backbones-and-task-domains%2C-with-skills-evolving-into-richly-structured-markdown-files-encoding-higher-level-meta-skills-over-time.-%23%23-relevance-to-agent-evolution-skillos-tackles-a-critical-bottleneck-in-agent-self-evolution%3A-how-to-curate-and-manage-a-growing-repository-of-skills-over-time.-by-using-rl-to-learn-curation-policies-that-decide-when-to-create%2C-update%2C-or-merge-skills%2C-this-work-provides-a-scalable-mechanism-for-agents-to-autonomously-manage-their-own-capability-growth%2C-making-it-a-foundational-contribution-to-continuous-agent-evolution.-%23%23-classification---category%3A-skill-curation-for-self-evolving-agents---method%3A-reinforcement-learning-with-composite-rewards---scope%3A-long-horizon-skill-management-and-cross-domain-generalization-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-05-07---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-skillos%3A-learning-skill-curation-for-self-evolving-agents-**authors**%3A-siru-ouyang%2C-jun-yan%2C-yanfei-chen%2C-rujun-han%2C-zifeng-wang%2C-bhavana-dalvi-mishra%2C-rui-meng%2C-chun-liang-li%2C-yizhu-jiao%2C-kaiwen-zha%2C-maohao-shen%2C-vishy-tirumalashetty%2C-george-lee%2C-jiawei-han%2C-tomas-pfister%2C-chen-yu-lee-**submitted**%3A-2026-05-07-(v1)-%23%23-abstract-llm-based-agents-are-increasingly-deployed-to-handle-streaming-tasks%2C-yet-they-often-remain-one-off-problem-solvers-that-fail-to-learn-from-past-interactions.-reusable-skills-distilled-from-experience-provide-a-natural-substrate-for-self-evolution%2C-where-high-quality-skill-curation-serves-as-the-key-bottleneck.-existing-approaches-either-rely-on-manual-skill-curation%2C-prescribe-heuristic-skill-operations%2C-or-train-for-short-horizon-skill-operations.-however%2C-they-still-struggle-to-learn-complex-long-term-curation-policies-from-indirect-and-delayed-feedback.-to-tackle-this-challenge%2C-we-propose-skillos%2C-an-experience-driven-rl-training-recipe-for-learning-skill-curation-in-self-evolving-agents.-skillos-pairs-a-frozen-agent-executor-that-retrieves-and-applies-skills-with-a-trainable-skill-curator-that-updates-an-external-skillrepo-from-accumulated-experience.-to-provide-learning-signals-for-curation%2C-we-design-composite-rewards-and-train-on-grouped-task-streams-based-on-skill-relevant-task-dependencies%2C-where-earlier-trajectories-update-the-skillrepo%2C-and-later-related-tasks-evaluate-these-updates.-across-multi-turn-agentic-tasks-and-single-turn-reasoning-tasks%2C-skillos-consistently-outperforms-memory-free-and-strong-memory-based-baselines-in-both-effectiveness-and-efficiency%2C-with-the-learned-skill-curator-generalizing-across-different-executor-backbones-and-task-domains.-further-analyses-show-that-the-learned-curator-produces-more-targeted-skill-use%2C-while-the-skills-in-skillrepo-evolve-into-more-richly-structured-markdown-files-that-encode-higher-level-meta-skills-over-time.-%23%23-key-contributions-1.-proposes-skillos%2C-an-rl-based-training-recipe-that-learns-skill-curation-policies-for-self-evolving-agents%2C-separating-a-frozen-executor-from-a-trainable-skill-curator-that-maintains-an-external-skillrepo.-2.-designs-composite-rewards-and-grouped-task-stream-training-based-on-skill-relevant-dependencies%2C-enabling-the-system-to-learn-from-indirect-and-delayed-feedback-across-long-horizons.-3.-demonstrates-that-learned-skill-curators-generalize-across-different-executor-backbones-and-task-domains%2C-with-skills-evolving-into-richly-structured-markdown-files-encoding-higher-level-meta-skills-over-time.-%23%23-relevance-to-agent-evolution-skillos-tackles-a-critical-bottleneck-in-agent-self-evolution%3A-how-to-curate-and-manage-a-growing-repository-of-skills-over-time.-by-using-rl-to-learn-curation-policies-that-decide-when-to-create%2C-update%2C-or-merge-skills%2C-this-work-provides-a-scalable-mechanism-for-agents-to-autonomously-manage-their-own-capability-growth%2C-making-it-a-foundational-contribution-to-continuous-agent-evolution.-%23%23-classification---category%3A-skill-curation-for-self-evolving-agents---method%3A-reinforcement-learning-with-composite-rewards---scope%3A-long-horizon-skill-management-and-cross-domain-generalization-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-05-07---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-skillos%3A-learning-skill-curation-for-self-evolving-agents-**authors**%3A-siru-ouyang%2C-jun-yan%2C-yanfei-chen%2C-rujun-han%2C-zifeng-wang%2C-bhavana-dalvi-mishra%2C-rui-meng%2C-chun-liang-li%2C-yizhu-jiao%2C-kaiwen-zha%2C-maohao-shen%2C-vishy-tirumalashetty%2C-george-lee%2C-jiawei-han%2C-tomas-pfister%2C-chen-yu-lee-**submitted**%3A-2026-05-07-(v1)-%23%23-abstract-llm-based-agents-are-increasingly-deployed-to-handle-streaming-tasks%2C-yet-they-often-remain-one-off-problem-solvers-that-fail-to-learn-from-past-interactions.-reusable-skills-distilled-from-experience-provide-a-natural-substrate-for-self-evolution%2C-where-high-quality-skill-curation-serves-as-the-key-bottleneck.-existing-approaches-either-rely-on-manual-skill-curation%2C-prescribe-heuristic-skill-operations%2C-or-train-for-short-horizon-skill-operations.-however%2C-they-still-struggle-to-learn-complex-long-term-curation-policies-from-indirect-and-delayed-feedback.-to-tackle-this-challenge%2C-we-propose-skillos%2C-an-experience-driven-rl-training-recipe-for-learning-skill-curation-in-self-evolving-agents.-skillos-pairs-a-frozen-agent-executor-that-retrieves-and-applies-skills-with-a-trainable-skill-curator-that-updates-an-external-skillrepo-from-accumulated-experience.-to-provide-learning-signals-for-curation%2C-we-design-composite-rewards-and-train-on-grouped-task-streams-based-on-skill-relevant-task-dependencies%2C-where-earlier-trajectories-update-the-skillrepo%2C-and-later-related-tasks-evaluate-these-updates.-across-multi-turn-agentic-tasks-and-single-turn-reasoning-tasks%2C-skillos-consistently-outperforms-memory-free-and-strong-memory-based-baselines-in-both-effectiveness-and-efficiency%2C-with-the-learned-skill-curator-generalizing-across-different-executor-backbones-and-task-domains.-further-analyses-show-that-the-learned-curator-produces-more-targeted-skill-use%2C-while-the-skills-in-skillrepo-evolve-into-more-richly-structured-markdown-files-that-encode-higher-level-meta-skills-over-time.-%23%23-key-contributions-1.-proposes-skillos%2C-an-rl-based-training-recipe-that-learns-skill-curation-policies-for-self-evolving-agents%2C-separating-a-frozen-executor-from-a-trainable-skill-curator-that-maintains-an-external-skillrepo.-2.-designs-composite-rewards-and-grouped-task-stream-training-based-on-skill-relevant-dependencies%2C-enabling-the-system-to-learn-from-indirect-and-delayed-feedback-across-long-horizons.-3.-demonstrates-that-learned-skill-curators-generalize-across-different-executor-backbones-and-task-domains%2C-with-skills-evolving-into-richly-structured-markdown-files-encoding-higher-level-meta-skills-over-time.-%23%23-relevance-to-agent-evolution-skillos-tackles-a-critical-bottleneck-in-agent-self-evolution%3A-how-to-curate-and-manage-a-growing-repository-of-skills-over-time.-by-using-rl-to-learn-curation-policies-that-decide-when-to-create%2C-update%2C-or-merge-skills%2C-this-work-provides-a-scalable-mechanism-for-agents-to-autonomously-manage-their-own-capability-growth%2C-making-it-a-foundational-contribution-to-continuous-agent-evolution.-%23%23-classification---category%3A-skill-curation-for-self-evolving-agents---method%3A-reinforcement-learning-with-composite-rewards---scope%3A-long-horizon-skill-management-and-cross-domain-generalization-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-05-07---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-skillos%3A-learning-skill-curation-for-self-evolving-agents-**authors**%3A-siru-ouyang%2C-jun-yan%2C-yanfei-chen%2C-rujun-han%2C-zifeng-wang%2C-bhavana-dalvi-mishra%2C-rui-meng%2C-chun-liang-li%2C-yizhu-jiao%2C-kaiwen-zha%2C-maohao-shen%2C-vishy-tirumalashetty%2C-george-lee%2C-jiawei-han%2C-tomas-pfister%2C-chen-yu-lee-**submitted**%3A-2026-05-07-(v1)-%23%23-abstract-llm-based-agents-are-increasingly-deployed-to-handle-streaming-tasks%2C-yet-they-often-remain-one-off-problem-solvers-that-fail-to-learn-from-past-interactions.-reusable-skills-distilled-from-experience-provide-a-natural-substrate-for-self-evolution%2C-where-high-quality-skill-curation-serves-as-the-key-bottleneck.-existing-approaches-either-rely-on-manual-skill-curation%2C-prescribe-heuristic-skill-operations%2C-or-train-for-short-horizon-skill-operations.-however%2C-they-still-struggle-to-learn-complex-long-term-curation-policies-from-indirect-and-delayed-feedback.-to-tackle-this-challenge%2C-we-propose-skillos%2C-an-experience-driven-rl-training-recipe-for-learning-skill-curation-in-self-evolving-agents.-skillos-pairs-a-frozen-agent-executor-that-retrieves-and-applies-skills-with-a-trainable-skill-curator-that-updates-an-external-skillrepo-from-accumulated-experience.-to-provide-learning-signals-for-curation%2C-we-design-composite-rewards-and-train-on-grouped-task-streams-based-on-skill-relevant-task-dependencies%2C-where-earlier-trajectories-update-the-skillrepo%2C-and-later-related-tasks-evaluate-these-updates.-across-multi-turn-agentic-tasks-and-single-turn-reasoning-tasks%2C-skillos-consistently-outperforms-memory-free-and-strong-memory-based-baselines-in-both-effectiveness-and-efficiency%2C-with-the-learned-skill-curator-generalizing-across-different-executor-backbones-and-task-domains.-further-analyses-show-that-the-learned-curator-produces-more-targeted-skill-use%2C-while-the-skills-in-skillrepo-evolve-into-more-richly-structured-markdown-files-that-encode-higher-level-meta-skills-over-time.-%23%23-key-contributions-1.-proposes-skillos%2C-an-rl-based-training-recipe-that-learns-skill-curation-policies-for-self-evolving-agents%2C-separating-a-frozen-executor-from-a-trainable-skill-curator-that-maintains-an-external-skillrepo.-2.-designs-composite-rewards-and-grouped-task-stream-training-based-on-skill-relevant-dependencies%2C-enabling-the-system-to-learn-from-indirect-and-delayed-feedback-across-long-horizons.-3.-demonstrates-that-learned-skill-curators-generalize-across-different-executor-backbones-and-task-domains%2C-with-skills-evolving-into-richly-structured-markdown-files-encoding-higher-level-meta-skills-over-time.-%23%23-relevance-to-agent-evolution-skillos-tackles-a-critical-bottleneck-in-agent-self-evolution%3A-how-to-curate-and-manage-a-growing-repository-of-skills-over-time.-by-using-rl-to-learn-curation-policies-that-decide-when-to-create%2C-update%2C-or-merge-skills%2C-this-work-provides-a-scalable-mechanism-for-agents-to-autonomously-manage-their-own-capability-growth%2C-making-it-a-foundational-contribution-to-continuous-agent-evolution.-%23%23-classification---category%3A-skill-curation-for-self-evolving-agents---method%3A-reinforcement-learning-with-composite-rewards---scope%3A-long-horizon-skill-management-and-cross-domain-generalization-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-05-07---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-skillos%3A-learning-skill-curation-for-self-evolving-agents-**authors**%3A-siru-ouyang%2C-jun-yan%2C-yanfei-chen%2C-rujun-han%2C-zifeng-wang%2C-bhavana-dalvi-mishra%2C-rui-meng%2C-chun-liang-li%2C-yizhu-jiao%2C-kaiwen-zha%2C-maohao-shen%2C-vishy-tirumalashetty%2C-george-lee%2C-jiawei-han%2C-tomas-pfister%2C-chen-yu-lee-**submitted**%3A-2026-05-07-(v1)-%23%23-abstract-llm-based-agents-are-increasingly-deployed-to-handle-streaming-tasks%2C-yet-they-often-remain-one-off-problem-solvers-that-fail-to-learn-from-past-interactions.-reusable-skills-distilled-from-experience-provide-a-natural-substrate-for-self-evolution%2C-where-high-quality-skill-curation-serves-as-the-key-bottleneck.-existing-approaches-either-rely-on-manual-skill-curation%2C-prescribe-heuristic-skill-operations%2C-or-train-for-short-horizon-skill-operations.-however%2C-they-still-struggle-to-learn-complex-long-term-curation-policies-from-indirect-and-delayed-feedback.-to-tackle-this-challenge%2C-we-propose-skillos%2C-an-experience-driven-rl-training-recipe-for-learning-skill-curation-in-self-evolving-agents.-skillos-pairs-a-frozen-agent-executor-that-retrieves-and-applies-skills-with-a-trainable-skill-curator-that-updates-an-external-skillrepo-from-accumulated-experience.-to-provide-learning-signals-for-curation%2C-we-design-composite-rewards-and-train-on-grouped-task-streams-based-on-skill-relevant-task-dependencies%2C-where-earlier-trajectories-update-the-skillrepo%2C-and-later-related-tasks-evaluate-these-updates.-across-multi-turn-agentic-tasks-and-single-turn-reasoning-tasks%2C-skillos-consistently-outperforms-memory-free-and-strong-memory-based-baselines-in-both-effectiveness-and-efficiency%2C-with-the-learned-skill-curator-generalizing-across-different-executor-backbones-and-task-domains.-further-analyses-show-that-the-learned-curator-produces-more-targeted-skill-use%2C-while-the-skills-in-skillrepo-evolve-into-more-richly-structured-markdown-files-that-encode-higher-level-meta-skills-over-time.-%23%23-key-contributions-1.-proposes-skillos%2C-an-rl-based-training-recipe-that-learns-skill-curation-policies-for-self-evolving-agents%2C-separating-a-frozen-executor-from-a-trainable-skill-curator-that-maintains-an-external-skillrepo.-2.-designs-composite-rewards-and-grouped-task-stream-training-based-on-skill-relevant-dependencies%2C-enabling-the-system-to-learn-from-indirect-and-delayed-feedback-across-long-horizons.-3.-demonstrates-that-learned-skill-curators-generalize-across-different-executor-backbones-and-task-domains%2C-with-skills-evolving-into-richly-structured-markdown-files-encoding-higher-level-meta-skills-over-time.-%23%23-relevance-to-agent-evolution-skillos-tackles-a-critical-bottleneck-in-agent-self-evolution%3A-how-to-curate-and-manage-a-growing-repository-of-skills-over-time.-by-using-rl-to-learn-curation-policies-that-decide-when-to-create%2C-update%2C-or-merge-skills%2C-this-work-provides-a-scalable-mechanism-for-agents-to-autonomously-manage-their-own-capability-growth%2C-making-it-a-foundational-contribution-to-continuous-agent-evolution.-%23%23-classification---category%3A-skill-curation-for-self-evolving-agents---method%3A-reinforcement-learning-with-composite-rewards---scope%3A-long-horizon-skill-management-and-cross-domain-generalization-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2026-05-07---collected_at%3A-2026-05-22t01%3A00%3A00%2B08%3A00---time_slice%3A-2026-05---timestamp_confidence%3A-derived---timestamp_source%3A-arxiv-submission-date",
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
    "source": "review:placeholder-no-arxiv",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:placeholder-no-arxiv",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:placeholder-no-arxiv",
    "target": "concept:benchmark%2Feval",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:placeholder-no-arxiv",
    "target": "concept:open-ended-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:placeholder-no-arxiv",
    "target": "concept:reward%2Fsafety",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-papers-without-arxiv-ids-%E2%80%94-placeholder-index-the-following-papers-from-the-100-paper-list-did-not-have-arxiv-ids-at-the-time-of-collection.-they-are-tracked-here-for-future-extraction.-%23%23-papers-needing-arxiv-search%2Fextraction-%7C-%23-%7C-title-%7C-year-%7C-status-%7C-%7C---%7C-------%7C------%7C--------%7C-%7C-43-%7C-nature-inspired-population-based-evolution-of-llms-%7C-2025-%7C-no-arxiv-found-%7C-%7C-44-%7C-es-vs-grpo-in-llm-post-training-%7C-2025-%7C-no-arxiv-found-%7C-%7C-60-%7C-ledex%3A-self-debugging-%2B-code-explanation-%7C-2024-%7C-no-arxiv-found-%7C-%7C-64-%7C-ttcs%3A-test-time-curriculum-synthesis-%7C-2025-%7C-no-arxiv-found-%7C-%7C-78-%7C-self-rewarding-ppo-%7C-2024-%7C-no-arxiv-found-%7C-%7C-79-%7C-process-based-self-rewarding-%7C-2024-%7C-no-arxiv-found-%7C-%7C-86-%7C-mars%3A-multi-agent-collaboration-for-reasoning-%7C-2024-%7C-no-arxiv-found-%7C-%7C-88-%7C-survey%3A-llms-for-evolutionary-computation-%7C-2024-%7C-no-arxiv-found-%7C-%7C-89-%7C-matching-accuracy%3A-es-vs-grpo-%7C-2025-%7C-no-arxiv-found-%7C-%7C-93-%7C-safety-for-open-ended-systems-%7C-2025-%7C-no-arxiv-found-%7C-%7C-97-%7C-debate-helps-weak-to-strong-%7C-2024-%7C-no-arxiv-found-%7C-%7C-99-%7C-reward-hacking%3A-mechanisms-%26-misalignment-%7C-2025-%7C-no-arxiv-found-%7C-%23%23-non-arxiv-papers-%7C-%23-%7C-title-%7C-year-%7C-source-%7C-%7C---%7C-------%7C------%7C--------%7C-%7C-50-%7C-funsearch%3A-mathematical-discovery-via-llm-evolution-%7C-2023-%7C-nature-%E2%80%94-https%3A%2F%2Fwww.nature.com%2Farticles%2Fs41586-023-06924-6-%7C-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2023-12-14---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2023-q4---timestamp_confidence%3A-verified---timestamp_source%3A-nature%2Fdeepmind-funsearch-online-publication-date-(web-verified)",
    "target": "concept:self-refinement",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-papers-without-arxiv-ids-%E2%80%94-placeholder-index-the-following-papers-from-the-100-paper-list-did-not-have-arxiv-ids-at-the-time-of-collection.-they-are-tracked-here-for-future-extraction.-%23%23-papers-needing-arxiv-search%2Fextraction-%7C-%23-%7C-title-%7C-year-%7C-status-%7C-%7C---%7C-------%7C------%7C--------%7C-%7C-43-%7C-nature-inspired-population-based-evolution-of-llms-%7C-2025-%7C-no-arxiv-found-%7C-%7C-44-%7C-es-vs-grpo-in-llm-post-training-%7C-2025-%7C-no-arxiv-found-%7C-%7C-60-%7C-ledex%3A-self-debugging-%2B-code-explanation-%7C-2024-%7C-no-arxiv-found-%7C-%7C-64-%7C-ttcs%3A-test-time-curriculum-synthesis-%7C-2025-%7C-no-arxiv-found-%7C-%7C-78-%7C-self-rewarding-ppo-%7C-2024-%7C-no-arxiv-found-%7C-%7C-79-%7C-process-based-self-rewarding-%7C-2024-%7C-no-arxiv-found-%7C-%7C-86-%7C-mars%3A-multi-agent-collaboration-for-reasoning-%7C-2024-%7C-no-arxiv-found-%7C-%7C-88-%7C-survey%3A-llms-for-evolutionary-computation-%7C-2024-%7C-no-arxiv-found-%7C-%7C-89-%7C-matching-accuracy%3A-es-vs-grpo-%7C-2025-%7C-no-arxiv-found-%7C-%7C-93-%7C-safety-for-open-ended-systems-%7C-2025-%7C-no-arxiv-found-%7C-%7C-97-%7C-debate-helps-weak-to-strong-%7C-2024-%7C-no-arxiv-found-%7C-%7C-99-%7C-reward-hacking%3A-mechanisms-%26-misalignment-%7C-2025-%7C-no-arxiv-found-%7C-%23%23-non-arxiv-papers-%7C-%23-%7C-title-%7C-year-%7C-source-%7C-%7C---%7C-------%7C------%7C--------%7C-%7C-50-%7C-funsearch%3A-mathematical-discovery-via-llm-evolution-%7C-2023-%7C-nature-%E2%80%94-https%3A%2F%2Fwww.nature.com%2Farticles%2Fs41586-023-06924-6-%7C-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2023-12-14---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2023-q4---timestamp_confidence%3A-verified---timestamp_source%3A-nature%2Fdeepmind-funsearch-online-publication-date-(web-verified)",
    "target": "concept:reflection-memory",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-papers-without-arxiv-ids-%E2%80%94-placeholder-index-the-following-papers-from-the-100-paper-list-did-not-have-arxiv-ids-at-the-time-of-collection.-they-are-tracked-here-for-future-extraction.-%23%23-papers-needing-arxiv-search%2Fextraction-%7C-%23-%7C-title-%7C-year-%7C-status-%7C-%7C---%7C-------%7C------%7C--------%7C-%7C-43-%7C-nature-inspired-population-based-evolution-of-llms-%7C-2025-%7C-no-arxiv-found-%7C-%7C-44-%7C-es-vs-grpo-in-llm-post-training-%7C-2025-%7C-no-arxiv-found-%7C-%7C-60-%7C-ledex%3A-self-debugging-%2B-code-explanation-%7C-2024-%7C-no-arxiv-found-%7C-%7C-64-%7C-ttcs%3A-test-time-curriculum-synthesis-%7C-2025-%7C-no-arxiv-found-%7C-%7C-78-%7C-self-rewarding-ppo-%7C-2024-%7C-no-arxiv-found-%7C-%7C-79-%7C-process-based-self-rewarding-%7C-2024-%7C-no-arxiv-found-%7C-%7C-86-%7C-mars%3A-multi-agent-collaboration-for-reasoning-%7C-2024-%7C-no-arxiv-found-%7C-%7C-88-%7C-survey%3A-llms-for-evolutionary-computation-%7C-2024-%7C-no-arxiv-found-%7C-%7C-89-%7C-matching-accuracy%3A-es-vs-grpo-%7C-2025-%7C-no-arxiv-found-%7C-%7C-93-%7C-safety-for-open-ended-systems-%7C-2025-%7C-no-arxiv-found-%7C-%7C-97-%7C-debate-helps-weak-to-strong-%7C-2024-%7C-no-arxiv-found-%7C-%7C-99-%7C-reward-hacking%3A-mechanisms-%26-misalignment-%7C-2025-%7C-no-arxiv-found-%7C-%23%23-non-arxiv-papers-%7C-%23-%7C-title-%7C-year-%7C-source-%7C-%7C---%7C-------%7C------%7C--------%7C-%7C-50-%7C-funsearch%3A-mathematical-discovery-via-llm-evolution-%7C-2023-%7C-nature-%E2%80%94-https%3A%2F%2Fwww.nature.com%2Farticles%2Fs41586-023-06924-6-%7C-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2023-12-14---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2023-q4---timestamp_confidence%3A-verified---timestamp_source%3A-nature%2Fdeepmind-funsearch-online-publication-date-(web-verified)",
    "target": "concept:agent-learning",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-papers-without-arxiv-ids-%E2%80%94-placeholder-index-the-following-papers-from-the-100-paper-list-did-not-have-arxiv-ids-at-the-time-of-collection.-they-are-tracked-here-for-future-extraction.-%23%23-papers-needing-arxiv-search%2Fextraction-%7C-%23-%7C-title-%7C-year-%7C-status-%7C-%7C---%7C-------%7C------%7C--------%7C-%7C-43-%7C-nature-inspired-population-based-evolution-of-llms-%7C-2025-%7C-no-arxiv-found-%7C-%7C-44-%7C-es-vs-grpo-in-llm-post-training-%7C-2025-%7C-no-arxiv-found-%7C-%7C-60-%7C-ledex%3A-self-debugging-%2B-code-explanation-%7C-2024-%7C-no-arxiv-found-%7C-%7C-64-%7C-ttcs%3A-test-time-curriculum-synthesis-%7C-2025-%7C-no-arxiv-found-%7C-%7C-78-%7C-self-rewarding-ppo-%7C-2024-%7C-no-arxiv-found-%7C-%7C-79-%7C-process-based-self-rewarding-%7C-2024-%7C-no-arxiv-found-%7C-%7C-86-%7C-mars%3A-multi-agent-collaboration-for-reasoning-%7C-2024-%7C-no-arxiv-found-%7C-%7C-88-%7C-survey%3A-llms-for-evolutionary-computation-%7C-2024-%7C-no-arxiv-found-%7C-%7C-89-%7C-matching-accuracy%3A-es-vs-grpo-%7C-2025-%7C-no-arxiv-found-%7C-%7C-93-%7C-safety-for-open-ended-systems-%7C-2025-%7C-no-arxiv-found-%7C-%7C-97-%7C-debate-helps-weak-to-strong-%7C-2024-%7C-no-arxiv-found-%7C-%7C-99-%7C-reward-hacking%3A-mechanisms-%26-misalignment-%7C-2025-%7C-no-arxiv-found-%7C-%23%23-non-arxiv-papers-%7C-%23-%7C-title-%7C-year-%7C-source-%7C-%7C---%7C-------%7C------%7C--------%7C-%7C-50-%7C-funsearch%3A-mathematical-discovery-via-llm-evolution-%7C-2023-%7C-nature-%E2%80%94-https%3A%2F%2Fwww.nature.com%2Farticles%2Fs41586-023-06924-6-%7C-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2023-12-14---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2023-q4---timestamp_confidence%3A-verified---timestamp_source%3A-nature%2Fdeepmind-funsearch-online-publication-date-(web-verified)",
    "target": "concept:code-evolution",
    "type": "uses",
    "label": "inferred mechanism"
  },
  {
    "source": "review:deep-academic-review%3A-papers-without-arxiv-ids-%E2%80%94-placeholder-index-the-following-papers-from-the-100-paper-list-did-not-have-arxiv-ids-at-the-time-of-collection.-they-are-tracked-here-for-future-extraction.-%23%23-papers-needing-arxiv-search%2Fextraction-%7C-%23-%7C-title-%7C-year-%7C-status-%7C-%7C---%7C-------%7C------%7C--------%7C-%7C-43-%7C-nature-inspired-population-based-evolution-of-llms-%7C-2025-%7C-no-arxiv-found-%7C-%7C-44-%7C-es-vs-grpo-in-llm-post-training-%7C-2025-%7C-no-arxiv-found-%7C-%7C-60-%7C-ledex%3A-self-debugging-%2B-code-explanation-%7C-2024-%7C-no-arxiv-found-%7C-%7C-64-%7C-ttcs%3A-test-time-curriculum-synthesis-%7C-2025-%7C-no-arxiv-found-%7C-%7C-78-%7C-self-rewarding-ppo-%7C-2024-%7C-no-arxiv-found-%7C-%7C-79-%7C-process-based-self-rewarding-%7C-2024-%7C-no-arxiv-found-%7C-%7C-86-%7C-mars%3A-multi-agent-collaboration-for-reasoning-%7C-2024-%7C-no-arxiv-found-%7C-%7C-88-%7C-survey%3A-llms-for-evolutionary-computation-%7C-2024-%7C-no-arxiv-found-%7C-%7C-89-%7C-matching-accuracy%3A-es-vs-grpo-%7C-2025-%7C-no-arxiv-found-%7C-%7C-93-%7C-safety-for-open-ended-systems-%7C-2025-%7C-no-arxiv-found-%7C-%7C-97-%7C-debate-helps-weak-to-strong-%7C-2024-%7C-no-arxiv-found-%7C-%7C-99-%7C-reward-hacking%3A-mechanisms-%26-misalignment-%7C-2025-%7C-no-arxiv-found-%7C-%23%23-non-arxiv-papers-%7C-%23-%7C-title-%7C-year-%7C-source-%7C-%7C---%7C-------%7C------%7C--------%7C-%7C-50-%7C-funsearch%3A-mathematical-discovery-via-llm-evolution-%7C-2023-%7C-nature-%E2%80%94-https%3A%2F%2Fwww.nature.com%2Farticles%2Fs41586-023-06924-6-%7C-%23%23-gbrain-temporal-metadata---content_timestamp%3A-2023-12-14---collected_at%3A-2026-05-21t00%3A00%3A00%2B08%3A00---time_slice%3A-2023-q4---timestamp_confidence%3A-verified---timestamp_source%3A-nature%2Fdeepmind-funsearch-online-publication-date-(web-verified)",
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
