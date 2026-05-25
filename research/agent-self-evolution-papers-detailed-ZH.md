# Agent 自演化 / 自我改进：详细论文参考（100篇论文）

> 生成日期：2026-05-20 | 范围：2022-2026 | 来源：arXiv, NeurIPS, ICLR, ACL, AAAI, Nature
> 类别：14个子类别，涵盖框架、方法、自博弈强化学习、推理、反思、代码自修复、课程学习、经验学习、记忆、对齐、多智能体、进化策略、开放式进化、弱到强

---

## A. 框架（12篇论文）

### 1. Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents
- **Authors**: Jie (Jenny) Zhang, Shengran Hu, Cong Lu, Jeff Clune, Cong Tian, Yuqi Xie, et al.
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2505.22954
- **URL**: https://arxiv.org/abs/2505.22954
- **Abstract**: 大多数AI系统受限于固定架构，无法自主改进。DGM迭代修改自身代码，并使用编码基准测试实证验证更改。受达尔文进化和开放性启发，它不断增长编码智能体档案库，通过采样和自我修改创建多样化版本。SWE-bench 20.0%→50.0%，Polyglot 14.2%→30.7%。
- **Search Source**: Batch 1, Query 1 & 5

### 2. Gödel Agent: A Self-Referential Agent Framework for Recursively Self-Improvement
- **Authors**: Xunjian Yin, Xinyi Wang, Liangming Pan, Xiaojun Wan, William Yang Wang
- **Year**: 2024 (ICLR 2025)
- **Venue**: ICLR 2025
- **arXiv**: 2410.04444
- **URL**: https://arxiv.org/abs/2410.04444
- **Abstract**: 首个受Gödel机器启发的自参照智能体框架。利用LLM通过猴子补丁动态修改自身的逻辑和行为，由高层目标引导。实现持续的自我改进，在性能、效率和泛化能力上超越手工设计的智能体。
- **Search Source**: Batch 1, Query 1 & 4

### 3. RAGEN: Understanding Self-Evolution in LLM Agents via Multi-Turn RL
- **Authors**: Zihan Wang, et al.
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2504.20073
- **URL**: https://arxiv.org/abs/2504.20073
- **Abstract**: 提出StarPO（State-Thinking-Actions-Reward Policy Optimization），一种通用的轨迹级智能体强化学习框架，以及RAGEN模块化训练系统。识别出智能体RL训练中的"Echo Trap"现象，并提出带有轨迹过滤和梯度稳定的StarPO-S。
- **Search Source**: Batch 1, Query 1

### 4. ADAS: Automated Design of Agentic Systems
- **Authors**: Shengran Hu, Cong Lu, Jeff Clune
- **Year**: 2024 (ICLR 2025)
- **Venue**: ICLR 2025
- **arXiv**: 2408.08435
- **URL**: https://arxiv.org/abs/2408.08435
- **Abstract**: 描述了ADAS这一新研究领域，旨在自动创建强大的智能体系统设计。提出Meta Agent Search算法，其中元智能体迭代地用代码编程新智能体。由于编程语言是图灵完备的，这在理论上能够学习任何可能的智能体系统。发明的智能体超越了最先进的手工设计智能体，并可跨领域和模型迁移。
- **Search Source**: Batch 2 (supplementary search)

### 5. Symbolic Learning Enables Self-Evolving Agents
- **Authors**: Wangchunshu Zhou, et al.
- **Year**: 2024 (NeurIPS 2024)
- **Venue**: NeurIPS 2024
- **arXiv**: 2406.18532
- **URL**: https://arxiv.org/abs/2406.18532
- **Abstract**: 引入智能体符号学习，将智能体视为符号网络，其中可学习的权重为提示、工具及其组合。通过自然语言模拟的反向传播和梯度下降进行优化。使语言智能体能够在部署后自我更新，创建"自演化智能体"。
- **Search Source**: Batch 2 (supplementary search)

### 6. EvoMAC: Self-Evolving Multi-Agent Collaboration Networks for Software Development
- **Authors**: Yue Hu, Yuzhu Cai, Yaxin Du, Xinyu Zhu, Xiangrui Liu, Zijie Yu, Yuchen Hou, Shuo Tang, Siheng Chen
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2410.16946
- **URL**: https://arxiv.org/abs/2410.16946
- **Abstract**: 多智能体协作（MAC）网络的新型自演化范式。受神经网络训练启发，使用文本反向传播更新MAC网络。提出rSDE-Bench用于软件级别评估。在rSDE-Bench和HumanEval上均超越最先进方法。
- **Search Source**: Batch 4 (supplementary search)

### 7. AgentEvolver: Towards Efficient Self-Evolving Agent System
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2511.10395
- **URL**: https://arxiv.org/abs/2511.10395
- **Abstract**: 自演化智能体系统，包含三种机制：自我质疑（好奇心驱动的任务生成）、自我导航（经验复用和混合策略引导）和自我归因（基于贡献的差异化奖励）。实现可扩展、成本效益高的持续改进。
- **Search Source**: Batch 1, Query 5

### 8. InfiAgent: Self-Evolving Pyramid Agent Framework for Infinite Scenarios
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2509.22502
- **URL**: https://arxiv.org/abs/2509.22502
- **Abstract**: 基于DAG的多智能体框架，采用金字塔式组织结构。具有智能体即工具机制、双重审计质量控制、智能体路由和用于自主DAG重构的自演化机制。性能比ADAS高9.9%。
- **Search Source**: Batch 1, Query 5

### 9. SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2508.04700
- **URL**: https://arxiv.org/abs/2508.04700
- **Abstract**: 计算机使用智能体（CUAs）的自演化框架，通过经验学习自主掌握新软件。具有世界状态模型用于轨迹评估和课程生成器。在OS-World上成功率从11.3%提升到34.5%。
- **Search Source**: Batch 1, Query 5

### 10. SE-Agent: Self-Evolution Trajectory Optimization in Multi-Step Reasoning
- **Authors**: Jiaye Lin, et al.
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2508.02085
- **URL**: https://arxiv.org/abs/2508.02085
- **Abstract**: 自演化框架，通过修订、重组和精炼重新审视先导轨迹。将搜索空间扩展到局部最优之外。在SWE-bench Verified上最高实现55%的相对改进。
- **Search Source**: Batch 1, Query 1

### 11. ELL Framework: Building Self-Evolving Agents via Experience-Driven Lifelong Learning
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2508.19005
- **URL**: https://arxiv.org/abs/2508.19005
- **Abstract**: 基于四个原则构建的经验驱动终身学习（ELL）框架：经验探索、长期记忆、技能学习和知识内化。包含模拟学生大学旅程的StuLife基准测试。
- **Search Source**: Batch 1, Query 5

### 12. Agent0: Unleashing Self-Evolving Agents from Zero Data
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2511.16043
- **URL**: https://arxiv.org/abs/2511.16043
- **Abstract**: 完全自主的框架，通过多步协同进化与工具集成在无需外部数据的情况下演化智能体。课程智能体和执行器智能体共生协同进化。数学推理提升35%，通用推理提升24%。
- **Search Source**: Batch 1, Query 5

---

## B. 方法（22篇论文）

### 13. RISE: Recursive Introspection: Teaching Language Model Agents How to Self-Improve
- **Authors**: Yuxiao Qu, Tianjun Zhang, Naman Garg, Aviral Kumar
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2407.18219
- **URL**: https://arxiv.org/abs/2407.18219
- **Abstract**: 教授LLM自省和纠正错误的微调方法。将单轮微调构建为求解多轮MDP问题。使Llama2/3和Mistral模型在数学推理上通过更多轮次实现自我改进，超越单轮策略。
- **Search Source**: Batch 1, Query 2

### 14. Agent-R: Training Language Model Agents to Reflect via Iterative Self-Training
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2501.11425
- **URL**: https://arxiv.org/abs/2501.11425
- **Abstract**: 使用MCTS构建训练数据的迭代自训练框架，从错误轨迹中恢复正确轨迹。引入模型引导的批评构建。在交互环境中比基线高5.59%。
- **Search Source**: Batch 1, Query 2

### 15. SICA: A Self-Improving Coding Agent
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2504.15228
- **URL**: https://arxiv.org/abs/2504.15228
- **Abstract**: 自主编辑自身以提升性能的智能体系统。消除了元智能体和目标智能体之间的区别。在SWE-Bench Verified上性能从17%提升到53%。基于LLM反思和代码更新的非梯度学习。
- **Search Source**: Batch 1, Query 1 & 2

### 16. EvolveR: Self-Evolving LLM Agents through an Experience-Driven Lifecycle
- **Authors**: Rong Wu, Xiaoman Wang, Jianbiao Mei, Pinlong Cai, Daocheng Fu, Cheng Yang, Licheng Wen, Xuemeng Yang, Yufan Shen, Yuxin Wang, Botian Shi
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.16079
- **URL**: https://arxiv.org/abs/2510.16079
- **Abstract**: 闭环经验生命周期：离线自蒸馏（将轨迹合成为策略原则）+ 在线交互（检索原则用于决策）+ 策略演化（基于RL的更新）。在多跳问答基准测试上表现优越。
- **Search Source**: Batch 1, Query 1

### 17. ACE: Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.04618
- **URL**: https://arxiv.org/abs/2510.04618
- **Abstract**: 将上下文视为不断演化的策略手册，积累、精炼和组织策略。通过结构化增量更新防止上下文坍缩。智能体上提升10.6%，金融领域提升8.6%。使用较小的开源模型在AppWorld排行榜上匹配排名第一的智能体。
- **Search Source**: Batch 1, Query 2

### 18. Self-Developing: Can LLMs Invent Algorithms to Improve Themselves?
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2410.15639
- **URL**: https://arxiv.org/abs/2410.15639
- **Abstract**: 使LLM能够自主发现、实现和精炼改进算法的框架。使用迭代DPO循环。发现的合并算法在GSM8k上提升6%，超过人工设计的Task Arithmetic 4.3%。在域外模型上获得7.4%的提升。
- **Search Source**: Batch 1, Query 2

### 19. EVOLVE: Evolving LLMs' Self-Refinement Capability via Synergistic Training-Inference Optimization
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2502.05605
- **URL**: https://arxiv.org/abs/2502.05605
- **Abstract**: 通过迭代训练引发和跟踪自精炼演化的框架。Llama-3.1-8B超越GPT-4o（在AlpacaEval 2上62.3% LC胜率）。可泛化至数学推理（GSM8K, MATH）。
- **Search Source**: Batch 1, Query 3

### 20. ExIt: Exploratory Iteration - Bootstrapping Task Spaces for Self-Improvement
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2509.04575
- **URL**: https://arxiv.org/abs/2509.04575
- **Abstract**: 利用自改进任务循环结构的自课程RL方法。仅使用单轮迭代训练LLM在推理时进行多步自我改进。在竞赛数学、多轮工具使用和机器学习工程上进行了测试。
- **Search Source**: Batch 1, Query 2

### 21. Self-Challenging Language Model Agents
- **Authors**: Jason Weston, et al.
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2506.01716
- **URL**: https://arxiv.org/abs/2506.01716
- **Abstract**: 智能体生成任务的框架（Code-as-Task格式，带验证），然后使用评估反馈通过RL进行训练。在M3ToolEval和TauBench上对Llama-3.1-8B-Instruct实现超过2倍的改进。
- **Search Source**: Batch 1, Query 2

### 22. TT-SI: Self-Improving LLM Agents at Test-Time
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.07841
- **URL**: https://arxiv.org/abs/2510.07841
- **Abstract**: 测试时自我改进：识别不确定样本，生成相似示例，并在其上微调。TT-SI使用少68倍的训练样本实现+5.48%的准确率提升。还提出TT-D（教师蒸馏变体）。
- **Search Source**: Batch 1, Query 2

### 23. WebEvolver: Enhancing Web Agent Self-Improvement with Coevolving World Model
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2504.21024
- **URL**: https://arxiv.org/abs/2504.21024
- **Abstract**: Web智能体与世界模型协同进化框架，用于Web环境中的自我改进。
- **Search Source**: Batch 1, Query 1 (cited in Gödel Agent paper)

### 24. Agentic Neural Networks: Self-Evolving Multi-Agent Systems via Textual Backpropagation
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2506.09046
- **URL**: https://arxiv.org/abs/2506.09046
- **Abstract**: 将文本反向传播应用于自演化多智能体系统。
- **Search Source**: Batch 1, Query 1 (cited in Gödel Agent paper)

### 25. Agents of Change: Self-Evolving LLM Agents for Strategic Planning
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2506.04651
- **URL**: https://arxiv.org/abs/2506.04651
- **Abstract**: 将自演化智能体应用于战略规划领域。
- **Search Source**: Batch 1, Query 1 (cited in Gödel Agent paper)

### 26. Self-Refine: Iterative Refinement with Self-Feedback
- **Authors**: Aman Madaan, Niket Tandon, Prakhar Gupta, Skyler Hallinan, Luyu Gao, Sarah Wiegreffe, Uri Alon, Nouha Dziri, Shrimai Prabhumoye, Yiming Yang, Sean Welleck, Bodhisattwa Prasad Majumder, Amir Yazdanbakhsh, Peter Clark
- **Year**: 2023 (NeurIPS 2023)
- **Venue**: NeurIPS 2023
- **arXiv**: 2303.17651
- **URL**: https://arxiv.org/abs/2303.17651
- **Abstract**: LLM生成输出，自我批评，然后使用反馈进行精炼——全部使用单个模型。不需要训练数据或RL。使用GPT-3.5/4在7个任务上平均改进约20%。也在NeurIPS 2023上发表（会议论文）。
- **Search Source**: Batch 1, Query 3

### 27. LLMRefine: Pinpointing and Refining Large Language Models via Fine-Grained Actionable Feedback
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2311.09336
- **URL**: https://arxiv.org/abs/2311.09336
- **Abstract**: 使用学习的细粒度反馈模型进行推理时优化，以精确定位缺陷。使用模拟退火在探索和利用之间权衡。在机器翻译、长篇问答和主题摘要上进行了测试。
- **Search Source**: Batch 1, Query 3

### 28. Agent-Pro: Learning to Evolve via Policy-Level Reflection and Optimization
- **Authors**: Wenqi Zhang, Ke Tang, Hai Wu, Mengna Wang, Yongliang Shen, Guiyang Hou, Zeqi Tan, Peng Li, Yueting Zhuang, Weiming Lu
- **Year**: 2024 (ACL 2024)
- **Venue**: ACL 2024
- **arXiv**: 2402.17574
- **URL**: https://arxiv.org/abs/2402.17574
- **Abstract**: 具有策略级反思和优化的LLM智能体。与动作级反思不同，迭代反思轨迹和信念，微调非理性信念。使用DFS进行策略优化。在二十一点和德州扑克上超越原始LLM和专门模型。
- **Search Source**: Batch 2 (supplementary search)

### 29. Self-Correcting Code Small LM (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2505.23060
- **URL**: https://arxiv.org/abs/2505.23060
- **Abstract**: 小型语言模型在代码生成任务中的自我纠错。
- **Search Source**: Batch 5

### 30. ReflectEvo: Small Model Self-Reflection Evolution (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2505.16475
- **URL**: https://arxiv.org/abs/2505.16475
- **Abstract**: 面向小型模型的自我反思演化方法。
- **Search Source**: Batch 5

### 31. Deep Self-Evolving Reasoning (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.17498
- **URL**: https://arxiv.org/abs/2510.17498
- **Abstract**: 面向语言模型的深度自演化推理框架。
- **Search Source**: Batch 5

### 32. Evolving Excellence: Automatic Agent Optimization (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2512.09108
- **URL**: https://arxiv.org/abs/2512.09108
- **Abstract**: 通过进化实现智能体系统的自动优化。
- **Search Source**: Batch 5

### 33. AutoAgent: Fully Automated Zero-Code Agent (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2502.05957
- **URL**: https://arxiv.org/abs/2502.05957
- **Abstract**: 完全自动化的零代码智能体框架。
- **Search Source**: Batch 5

### 34. SEW: Self-Evolving Workflow for Code Generation (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 面向代码生成的自演化工作流方法。
- **Search Source**: Batch 5

---

## C. 自博弈与强化学习（10篇论文）

### 35. Absolute Zero: Reinforced Self-play Reasoning with Zero Data
- **Authors**: Andrew Zhao, Yiran Wu, Yang Yue, Tong Wu, Quentin Xu, Matthieu Lin, Shenzhi Wang, Qingyun Wu, Zilong Zheng, Gao Huang
- **Year**: 2025 (NeurIPS 2025)
- **Venue**: NeurIPS 2025
- **arXiv**: 2505.03335
- **URL**: https://arxiv.org/abs/2505.03335
- **Abstract**: 新的RLVR范式，单个模型提出最大化自身学习进度的任务，并通过解决这些任务来提升推理能力——无需外部数据。AZR使用代码执行器进行验证。在编码和数学推理上整体达到最先进水平，超越了使用数万个人类示例训练的模型。
- **Search Source**: Batch 4 (supplementary search)

### 36. SPIRAL: Self-Play on Zero-Sum Games Incentivizes Reasoning (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 零和博弈自对弈激励推理能力。
- **Search Source**: Batch 3

### 37. Multi-Agent Evolve (MAE): LLM Self-Improve through Co-evolution
- **Authors**: Yixing Chen, et al.
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.23595
- **URL**: https://arxiv.org/abs/2510.23595
- **Abstract**: 三元组智能体框架（Proposer, Solver, Judge），从单个LLM实例化并配合RL优化。Qwen2.5-3B在多个基准测试上平均提升4.54%。
- **Search Source**: Batch 1, Query 1

### 38. Agentic Self-Learning (ASL): Towards Agentic Self-Learning LLMs
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.14253
- **URL**: https://arxiv.org/abs/2510.14253
- **Abstract**: 完全闭环的多角色RL框架，统一任务生成（Prompt Generator）、策略执行和评估（Generative Reward Model）。超越Search-R1和Absolute Zero。在零标签数据条件下持续改进。
- **Search Source**: Batch 1, Query 1

### 39. Vision-Zero: VLM Multi-Agent Self-Play Self-Evolution (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 视觉语言模型多智能体自博弈用于自演化。
- **Search Source**: Batch 3

### 40. RLSR: Self-Rewarding Reinforcement Learning (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2505.08827
- **URL**: https://arxiv.org/abs/2505.08827
- **Abstract**: 自奖励机制与强化学习的集成。
- **Search Source**: Batch 3

### 41. Language Self-Play: Training Without Data (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 语言模型自博弈用于无外部数据训练。
- **Search Source**: Batch 3

### 42. Self-Play Fine-Tuning: Converting Weak Models to Strong Models
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2401.01335
- **URL**: https://arxiv.org/abs/2401.01335
- **Abstract**: 通过自博弈微调将弱语言模型转换为更强的模型。
- **Search Source**: Batch 3

### 43. Nature-Inspired Population-Based Evolution of LLMs (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 受自然选择启发的基于种群的进化方法用于LLM改进。
- **Search Source**: Batch 3

### 44. ES vs GRPO in LLM Post-Training (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 进化策略与组相对策略优化在LLM后训练中的比较。
- **Search Source**: Batch 3

---

## D. STaR与推理自我改进（6篇论文）

### 45. STaR: Self-Taught Reasoner - Bootstrapping Reasoning With Reasoning
- **Authors**: Eric Zelikman, Yuhuai Wu, Jesse Mu, Noah D. Goodman
- **Year**: 2022 (NeurIPS)
- **Venue**: NeurIPS
- **arXiv**: 2203.14465
- **URL**: https://arxiv.org/abs/2203.14465
- **Abstract**: 迭代利用少量推理示例和大量无推理的数据集。循环：生成推理过程 → 如果错误，用正确答案重试 → 在正确推理上微调 → 重复。在CommonsenseQA上表现与微调30倍更大模型相当。
- **Search Source**: Batch 6 (supplementary search)

### 46. RL-STaR: RL Framework for Self-Taught Reasoning (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2410.23912
- **URL**: https://arxiv.org/abs/2410.23912
- **Abstract**: 强化学习框架，对自学习推理进行了理论分析。
- **Search Source**: Batch 6

### 47. STaR-SQL: Self-Taught Reasoning for Text-to-SQL (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2502.13550
- **URL**: https://arxiv.org/abs/2502.13550
- **Abstract**: 将自学习推理应用于文本到SQL任务。
- **Search Source**: Batch 6

### 48. AlphaEvolve: A Coding Agent for Scientific and Algorithmic Discovery
- **Authors**: Alexander Novikov, Ngân Vũ, Marvin Eisenberger, Emilien Dupont, Po-Sen Huang, Adam Zsolt Wagner, Sergey Shirobokov, Borislav Kozlovskii, Francisco J. R. Ruiz, Abbas Mehrabian, M. Pawan Kumar, Abigail See, Swarat Chaudhuri, George Holland, Alex Davies, Sebastian Nowozin, Pushmeet Kohli, Matej Balog
- **Year**: 2025
- **Venue**: arXiv (Google DeepMind)
- **arXiv**: 2506.13131
- **URL**: https://arxiv.org/abs/2506.13131
- **Abstract**: 编排LLM通过直接代码更改来改进算法的进化编码智能体。发现了56年来对Strassen算法在4x4复矩阵乘法上的首次改进（48次乘法）。优化了Google数据中心调度、TPU电路设计和LLM训练。
- **Search Source**: Batch 6 (supplementary search)

### 49. ThetaEvolve: Open Problems and Test-Time Learning (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2511.23473
- **URL**: https://arxiv.org/abs/2511.23473
- **Abstract**: 使用进化方法对开放问题进行测试时学习。
- **Search Source**: Batch 6

### 50. FunSearch: Mathematical Discovery via LLM Evolution (2023)
- **Authors**: (Not fully extracted — Google DeepMind)
- **Year**: 2023
- **Venue**: Nature
- **arXiv**: (Not available — published in Nature)
- **URL**: https://www.nature.com/articles/s41586-023-06924-6
- **Abstract**: LLM驱动的进化方法用于数学发现。发表于Nature。结合预训练LLM与系统评估，在组合数学中发现新的解决方案。
- **Search Source**: Batch 6

---

## E. 自我反思与Reflexion（6篇论文）

### 51. Self-Correct via RL: Training Language Models to Self-Correct via Reinforcement Learning
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2409.12917
- **URL**: https://arxiv.org/abs/2409.12917
- **Abstract**: 基于RL训练LLM自我纠错的方法，在自演化文献中被广泛引用。
- **Search Source**: Batch 1, Query 1 (cited in Gödel Agent)

### 52. Self-Reflection in LLM Agents (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2405.06682
- **URL**: https://arxiv.org/abs/2405.06682
- **Abstract**: 研究自我反思如何影响LLM智能体的问题求解。
- **Search Source**: Batch 5

### 53. Reflexion: Language Agents with Verbal Reinforcement Learning
- **Authors**: Noah Shinn, Federico Cassano, Edward Berman, Ashwin Gopinath, Karthik Narasimhan, Shunyu Yao
- **Year**: 2023 (NeurIPS)
- **Venue**: NeurIPS
- **arXiv**: 2303.11366
- **URL**: https://arxiv.org/abs/2303.11366
- **Abstract**: 通过语言反馈而非权重更新来强化语言智能体。智能体以语言形式反思反馈信号，并将反思文本保存在情景记忆中。在HumanEval上达到91% pass@1（超越GPT-4的80%）。
- **Search Source**: Batch 8 (supplementary search)

### 54. SaMuLe: Multi-Level Reflection Self-Learning Agent (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 面向自学习智能体的多级反思。
- **Search Source**: Batch 5

### 55. MAR: Multi-Agent Reflection for Improved Reasoning (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 多智能体反思机制用于改进推理。
- **Search Source**: Batch 5

### 56. MetaReflection: Learning Instructions from Past Reflections (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 从过去的反思中元学习以改进未来的指令。
- **Search Source**: Batch 5

---

## F. 代码自我纠错（5篇论文）

### 57. InspectCoder: Dynamic Analysis Self-Repair (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.18327
- **URL**: https://arxiv.org/abs/2510.18327
- **Abstract**: 基于动态分析的代码生成自修复。
- **Search Source**: Batch 5

### 58. Revisit Self-Debugging: Self-Generated Tests for Self-Debugging (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2501.12793
- **URL**: https://arxiv.org/abs/2501.12793
- **Abstract**: 自生成测试用例用于代码自调试。
- **Search Source**: Batch 5

### 59. Hierarchical Debugging: Code to Correctness (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2410.01215
- **URL**: https://arxiv.org/abs/2410.01215
- **Abstract**: 层次化的生成代码调试方法。
- **Search Source**: Batch 5

### 60. LeDex: Self-Debugging + Code Explanation (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 自调试结合代码解释。
- **Search Source**: Batch 5

### 61. ProgCo: Program-Assisted Self-Correction (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2501.01264
- **URL**: https://arxiv.org/abs/2501.01264
- **Abstract**: 程序辅助的代码生成自我纠错。
- **Search Source**: Batch 5

---

## G. 自演化课程学习（5篇论文）

### 62. Self-Evolving Curriculum for LLM Reasoning (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2505.14970
- **URL**: https://arxiv.org/abs/2505.14970
- **Abstract**: 自演化课程方法用于改进LLM推理。
- **Search Source**: Batch 6

### 63. EvoCurr: Behavioral Code Generation Self-Evolving Curriculum (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2508.09586
- **URL**: https://arxiv.org/abs/2508.09586
- **Abstract**: 面向行为代码生成的自演化课程。
- **Search Source**: Batch 6

### 64. TTCS: Test-Time Curriculum Synthesis (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 面向智能体学习的测试时课程合成。
- **Search Source**: Batch 6

### 65. WebRL: Online Curriculum RL Training for Web Agents (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 基于在线课程的RL训练方法用于Web智能体。
- **Search Source**: Batch 6

### 66. CurricuLLM: LLM Designs Robot Skill Curriculum (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2409.18382
- **URL**: https://arxiv.org/abs/2409.18382
- **Abstract**: 使用LLM设计机器人技能学习课程。
- **Search Source**: Batch 6

---

## H. 经验学习（4篇论文）

### 67. ExpeL: LLM Agents Are Experiential Learners
- **Authors**: Andrew Zhao, Daniel Huang, Quentin Xu, Matthieu Lin, Yong-Jin Liu, Gao Huang
- **Year**: 2024 (AAAI 2024)
- **Venue**: AAAI 2024
- **arXiv**: 2308.10144
- **URL**: https://arxiv.org/abs/2308.10144
- **Abstract**: 智能体自主收集经验，从训练任务中提取自然语言洞察，并在推理时回忆。无需参数更新（兼容仅API模型）。随着经验积累显示持续改进，具有前向迁移学习能力。
- **Search Source**: Batch 2 (supplementary search)

### 68. ICE: Investigate-Consolidate-Exploit: A General Strategy for Inter-Task Agent Self-Evolution
- **Authors**: Cheng Qian, Shihao Liang, Yujia Qin, Yining Ye, Xin Cong, Yankai Lin, Yesai Wu, Zhiyuan Liu, Maosong Sun
- **Year**: 2024 (AAAI 2024)
- **Venue**: AAAI 2024
- **arXiv**: 2401.13996
- **URL**: https://arxiv.org/abs/2401.13996
- **Abstract**: 任务间自演化的新策略。动态调查规划/执行轨迹，整合为简化的工作流程，并加以利用以改进执行。API调用减少80%。GPT-3.5+ICE匹配原始GPT-4性能。
- **Search Source**: Batch 2 (supplementary search)

### 69. FLEX: Forward Experience Learning for Continual Evolution (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 前向经验学习用于智能体持续演化。
- **Search Source**: Batch 3

### 70. ReasoningBank: Scaling Reasoning Memory for Self-Evolution (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2509.25140
- **URL**: https://arxiv.org/abs/2509.25140
- **Abstract**: 扩展推理记忆库用于智能体自演化。
- **Search Source**: Batch 5

---

## I. 记忆与终身学习（6篇论文）

### 71. AriadneMem: LLM Agent Lifelong Memory (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: LLM智能体的终身记忆系统。
- **Search Source**: Batch 5

### 72. Memory-R1: RL for Managing and Utilizing Memory (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 基于强化学习的智能体记忆管理方法。
- **Search Source**: Batch 5

### 73. Lifelong Learning of LLM Agents: A Roadmap (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2501.07278
- **URL**: https://arxiv.org/abs/2501.07278
- **Abstract**: LLM智能体终身学习的路线图论文。
- **Search Source**: Batch 5

### 74. Memento 2: State Reflection Memory Learning (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 基于状态反思的记忆学习方法用于智能体。
- **Search Source**: Batch 5

### 75. A-Mem: Agent Memory for LLM Agents (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 面向LLM智能体的记忆管理方法。
- **Search Source**: Batch 5

### 76. How Memory Management Impacts LLM Agents (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2505.16067
- **URL**: https://arxiv.org/abs/2505.16067
- **Abstract**: 分析记忆管理策略如何影响LLM智能体性能。
- **Search Source**: Batch 5

---

## J. 自奖励与对齐（5篇论文）

### 77. Self-Rewarding Language Models
- **Authors**: Weizhe Yuan, Richard Yuanzhe Pang, Kyunghyun Cho, Xian Li, Sainbayar Sukhbaatar, Jing Xu, Jason Weston
- **Year**: 2024
- **Venue**: arXiv (Meta / NYU)
- **arXiv**: 2401.10020
- **URL**: https://arxiv.org/abs/2401.10020
- **Abstract**: 语言模型在迭代DPO训练期间通过LLM-as-a-Judge提供自身奖励。指令遵循和奖励质量均有提升。经过3轮迭代微调的Llama 2 70B在AlpacaEval 2.0上超越Claude 2、Gemini Pro和GPT-4 0613。
- **Search Source**: Batch 5 (supplementary search)

### 78. Self-Rewarding PPO (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 自奖励机制与PPO的集成用于对齐。
- **Search Source**: Batch 5

### 79. Process-based Self-Rewarding (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 基于过程的自奖励用于步骤级对齐。
- **Search Source**: Batch 5

### 80. Meta-Rewarding LM: LLM as Meta-Judge for Self-Improvement (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: LLM作为元评判者改进自身的奖励建模。
- **Search Source**: Batch 3

### 81. IterAlign: Iterative Constitutional Alignment (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2403.18341
- **URL**: https://arxiv.org/abs/2403.18341
- **Abstract**: 使用宪法AI原则进行迭代对齐。
- **Search Source**: Batch 3

---

## K. 多智能体辩论与协作（5篇论文）

### 82. Improving Factuality and Reasoning in Language Models through Multiagent Debate
- **Authors**: Yilun Du, Shuang Li, Antonio Torralba, Joshua B. Tenenbaum, Igor Mordatch
- **Year**: 2023
- **Venue**: arXiv
- **arXiv**: 2305.14325
- **URL**: https://arxiv.org/abs/2305.14325
- **Abstract**: 多个LLM实例在多轮中提出并辩论回答。显著增强数学和战略推理。提高事实有效性并减少幻觉。所有任务使用相同的过程。
- **Search Source**: Batch 5 (supplementary search)

### 83. Diversity of Thought: Stronger Reasoning through Thinking Diversity (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2410.12853
- **URL**: https://arxiv.org/abs/2410.12853
- **Abstract**: 利用思维多样性进行多智能体推理。
- **Search Source**: Batch 5

### 84. MAgICoRe: Multi-Agent Iterative Coarse-to-Fine Refinement (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 多智能体从粗到细的迭代精炼。
- **Search Source**: Batch 5

### 85. GroupDebate: Efficient Multi-Agent Debate (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 高效的多智能体辩论方法。
- **Search Source**: Batch 5

### 86. MARS: Multi-Agent Collaboration for Reasoning (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 多智能体协作系统用于改进推理。
- **Search Source**: Batch 5

---

## L. 进化策略与发现（4篇论文）

### 87. LLMs As Evolution Strategies (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 将大型语言模型用作进化策略。
- **Search Source**: Batch 6

### 88. Survey: LLMs for Evolutionary Computation (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 关于将LLM应用于进化计算的综述。
- **Search Source**: Batch 6

### 89. Matching Accuracy: ES vs GRPO (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 进化策略与组相对策略优化的比较研究。
- **Search Source**: Batch 3

### 90. Scientific Algorithm Discovery via AlphaEvolve (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.06056
- **URL**: https://arxiv.org/abs/2510.06056
- **Abstract**: 应用AlphaEvolve风格的进化编码智能体进行科学算法发现。
- **Search Source**: Batch 6

---

## M. 开放式进化与经典（5篇论文）

### 91. Voyager: An Open-Ended Embodied Agent with Large Language Models
- **Authors**: Guanzhi Wang, Yuqi Xie, Yunfan Jiang, Ajay Mandlekar, Chaowei Xiao, Yuke Zhu, Linxi "Jim" Fan, Anima Anandkumar
- **Year**: 2023 (NeurIPS)
- **Venue**: NeurIPS
- **arXiv**: 2305.16291
- **URL**: https://arxiv.org/abs/2305.16291
- **Abstract**: 首个LLM驱动的Minecraft中的具身终身学习智能体。三个组件：用于探索的自动课程、不断增长的可执行代码技能库、带自验证的迭代提示。独特物品数量是先前最先进方法的3.3倍，移动距离2.3倍，科技树里程碑速度快15.3倍。
- **Search Source**: Batch 6 (supplementary search)

### 92. Generative Agents: Interactive Simulacra of Human Behavior
- **Authors**: Joon Sung Park, Joseph C. O'Brien, Carrie J. Cai, Meredith Ringel Morris, Percy Liang, Michael S. Bernstein
- **Year**: 2023 (UIST)
- **Venue**: UIST 2023
- **arXiv**: 2304.03442
- **URL**: https://arxiv.org/abs/2304.03442
- **Abstract**: 模拟可信人类行为的计算智能体。架构将LLM扩展为完整的经验记录、高级反思和用于规划的动态检索。沙盒环境中的25个智能体产生了涌现的社会行为（如自主组织情人节派对）。
- **Search Source**: Batch 8 (supplementary search)

### 93. Safety for Open-Ended Systems (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 开放式AI系统的安全性考量。
- **Search Source**: Batch 5

### 94. Dominated Novelty Search (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2502.00593
- **URL**: https://arxiv.org/abs/2502.00593
- **Abstract**: 面向开放式进化的新颖性搜索方法。
- **Search Source**: Batch 5

### 95. Foundation Agents: Brain-Inspired Intelligence to Evolutionary, Collaborative, and Safe Systems (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2504.01990
- **URL**: https://arxiv.org/abs/2504.01990
- **Abstract**: 涵盖从大脑启发方法到进化、协作和安全智能体系统的综合综述/框架。
- **Search Source**: Batch 1 (cited in Gödel Agent)

---

## N. 弱到强与理论（5篇论文）

### 96. Weak-to-Strong Generalization: Eliciting Strong Capabilities With Weak Supervision
- **Authors**: Collin Burns, Pavel Izmailov, Jan Hendrik Kirchner, Bowen Baker, Leo Gao, Leopold Aschenbrenner, Yining Chen, Adrien Ecoffet, Manas Joglekar, Jan Leike, Ilya Sutskever, Jeff Wu (OpenAI)
- **Year**: 2024
- **Venue**: arXiv (OpenAI)
- **arXiv**: 2312.09390
- **URL**: https://arxiv.org/abs/2312.09390
- **Abstract**: 研究弱监督是否能够激发更强模型的全部能力。发现一致的"弱到强泛化"现象，即强模型超越弱监督者。使用GPT-2级别的监督加上置信度损失，恢复接近GPT-3.5的性能。
- **Search Source**: Batch 5 (supplementary search)

### 97. Debate Helps Weak-to-Strong (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 将辩论机制应用于弱到强泛化。
- **Search Source**: Batch 7

### 98. Self-Improvement in Language Models: The Sharpening Mechanism
- **Authors**: Adam B. Block, et al.
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2412.01951
- **URL**: https://arxiv.org/abs/2412.01951
- **Abstract**: 将自我改进视为"锐化"的统计框架——在后训练期间使用模型作为验证者，向高质量序列锐化。分析基本限制和两族算法（基于SFT和基于RLHF的）。
- **Search Source**: Batch 1, Query 2

### 99. Reward Hacking: Mechanisms & Misalignment (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: 分析自改进系统中奖励黑客的机制和对齐失准风险。
- **Search Source**: Batch 7

### 100. MONA: Myopic Optimization Non-myopic Approval (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2501.13011
- **URL**: https://arxiv.org/abs/2501.13011
- **Abstract**: 近视优化与非近视审批用于安全的自我改进。
- **Search Source**: Batch 7

---

## 2026 补充前沿论文

### 101. Self-Evolving Software Agents
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2604.27264
- **URL**: https://arxiv.org/abs/2604.27264
- **Abstract**: 提出结合 BDI 推理与 LLM 的自演化软件智能体，使目标、推理规则和可执行代码能从运行经验中更新。它把自演化从 prompt retry 推到 requirements/design/code 更新层。
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

### 102. EvoMemBench: Benchmarking Agent Memory from a Self-Evolving Perspective
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2605.18421
- **URL**: https://arxiv.org/abs/2605.18421
- **Abstract**: 从自演化角度定义 agent memory benchmark，区分 episode 内/跨 episode、知识型/执行型记忆。它直接回答“记忆是否真的改善未来行为，而不是堆上下文”。
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

### 103. SEA-Eval: A Benchmark for Evaluating Self-Evolving Agents Beyond Episodic Assessment
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2604.08988
- **URL**: https://arxiv.org/abs/2604.08988
- **Abstract**: 提出 SEA-Eval，用于评估自演化智能体，而不只看单次 episodic task 成功率；重点覆盖任务内可靠性和长期演化表现。它正好补上本项目 benchmark 缺口。
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

### 104. Group-Evolving Agents: Open-Ended Self-Improvement via Experience Sharing
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2602.04837
- **URL**: https://arxiv.org/abs/2602.04837
- **Abstract**: 把 agent group 作为演化单位，通过经验共享研究开放式自我改进。它适合比较单体自修改、多智能体协作和群体级演化。
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

### 105. EvoSkill: Automated Skill Discovery for Multi-Agent Systems
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2603.02766
- **URL**: https://arxiv.org/abs/2603.02766
- **Abstract**: 研究多智能体系统中的自动技能发现，把 GitHub 语料里的 skill supply 热点连接到论文层面的技能生成与评估证据。
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

### 106. The Devil Behind Moltbook: Anthropic Safety is Always Vanishing in Self-Evolving AI Societies
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2602.09877
- **URL**: https://arxiv.org/abs/2602.09877
- **Abstract**: 分析自演化 AI 社会中的安全属性退化，是 performance-only 自演化 claim 的必要反面证据：系统越会自改，治理/对齐会不会消失？
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

### 107. SAGER: Self-Evolving User Policy Skills for Recommendation Agent
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2604.14972
- **URL**: https://arxiv.org/abs/2604.14972
- **Abstract**: 把自演化 policy skill 用在推荐智能体中，区分用户记忆演化和决策策略演化。它是更产品化的例子：skill 可以个性化、持续更新。
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

### 108. Bifrost: Steering Strategic Trajectories to Bridge Contextual Gaps for Self-Improving Agents
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2602.05810
- **URL**: https://arxiv.org/abs/2602.05810
- **Abstract**: 研究自改进智能体如何通过战略轨迹 steering 跨越 context gaps，属于 context engineering / trajectory control 分支。
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

## 综述（附加参考文献）

### S1. A Survey of Self-Evolving Agents: On Path to Artificial Super Intelligence
- **Authors**: (Multiple — see arXiv)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2507.21046
- **URL**: https://arxiv.org/abs/2507.21046
- **Abstract**: 首篇自演化智能体系统综述，围绕三个维度组织：演化什么、何时演化、如何演化。涵盖智能体组件、适应阶段、算法设计、评估指标和应用。

### S2. A Comprehensive Survey of Self-Evolving AI Agents
- **Authors**: (Multiple — see arXiv)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2508.07407
- **URL**: https://arxiv.org/abs/2508.07407
- **Abstract**: 连接基础模型和终身智能体系统的综述。

---

## 统计

| 类别 | 数量 |
|------|------|
| A. 框架 | 12 |
| B. 方法 | 22 |
| C. 自博弈与强化学习 | 10 |
| D. STaR与推理 | 6 |
| E. 自我反思 | 6 |
| F. 代码自我纠错 | 5 |
| G. 自演化课程学习 | 5 |
| H. 经验学习 | 4 |
| I. 记忆与终身学习 | 6 |
| J. 自奖励与对齐 | 5 |
| K. 多智能体辩论 | 5 |
| L. 进化策略 | 4 |
| M. 开放式与经典 | 5 |
| N. 弱到强与理论 | 5 |
| **总计** | **108** |

| 发表场所 | 数量 |
|----------|------|
| NeurIPS | 5 |
| ICLR | 2 |
| ACL | 1 |
| AAAI | 2 |
| Nature | 1 |
| UIST | 1 |
| 仅arXiv | 96 |
| **2024-2026年论文** | **约85%** |
