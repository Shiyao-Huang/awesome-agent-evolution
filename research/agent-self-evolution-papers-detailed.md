# Agent Self-Evolution / Auto-Improvement: Detailed Paper Reference (108 Papers)

> Generated: 2026-05-20 | Scope: 2022-2026 | Sources: arXiv, NeurIPS, ICLR, ACL, AAAI, Nature
> Categories: 14 subcategories covering frameworks, methods, self-play RL, reasoning, reflection, code self-repair, curriculum, experience learning, memory, alignment, multi-agent, evolutionary strategies, open-ended evolution, weak-to-strong

---

## A. Frameworks (12 papers)

### 1. Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents
- **Authors**: Jie (Jenny) Zhang, Shengran Hu, Cong Lu, Jeff Clune, Cong Tian, Yuqi Xie, et al.
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2505.22954
- **URL**: https://arxiv.org/abs/2505.22954
- **Abstract**: Most AI systems are constrained by fixed architectures and cannot autonomously improve. DGM iteratively modifies its own code and empirically validates changes using coding benchmarks. Inspired by Darwinian evolution and open-endedness, it grows an archive of coding agents, sampling and self-modifying to create diverse versions. SWE-bench 20.0%→50.0%, Polyglot 14.2%→30.7%.
- **Search Source**: Batch 1, Query 1 & 5

### 2. Gödel Agent: A Self-Referential Agent Framework for Recursively Self-Improvement
- **Authors**: Xunjian Yin, Xinyi Wang, Liangming Pan, Xiaojun Wan, William Yang Wang
- **Year**: 2024 (ICLR 2025)
- **Venue**: ICLR 2025
- **arXiv**: 2410.04444
- **URL**: https://arxiv.org/abs/2410.04444
- **Abstract**: First self-referential agent framework inspired by the Gödel machine. Leverages LLMs to dynamically modify its own logic and behavior via monkey patching, guided by high-level objectives. Achieves continuous self-improvement, surpassing manually crafted agents in performance, efficiency, and generalizability.
- **Search Source**: Batch 1, Query 1 & 4

### 3. RAGEN: Understanding Self-Evolution in LLM Agents via Multi-Turn RL
- **Authors**: Zihan Wang, et al.
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2504.20073
- **URL**: https://arxiv.org/abs/2504.20073
- **Abstract**: Proposes StarPO (State-Thinking-Actions-Reward Policy Optimization), a general framework for trajectory-level agent RL, and RAGEN, a modular training system. Identifies "Echo Trap" phenomenon in agent RL training and proposes StarPO-S with trajectory filtering and gradient stabilization.
- **Search Source**: Batch 1, Query 1

### 4. ADAS: Automated Design of Agentic Systems
- **Authors**: Shengran Hu, Cong Lu, Jeff Clune
- **Year**: 2024 (ICLR 2025)
- **Venue**: ICLR 2025
- **arXiv**: 2408.08435
- **URL**: https://arxiv.org/abs/2408.08435
- **Abstract**: Describes the new research area of ADAS which aims to automatically create powerful agentic system designs. Presents Meta Agent Search algorithm where a meta agent iteratively programs new agents in code. Since programming languages are Turing Complete, this theoretically enables learning any possible agentic system. Invented agents outperform SOTA hand-designed agents and transfer across domains and models.
- **Search Source**: Batch 2 (supplementary search)

### 5. Symbolic Learning Enables Self-Evolving Agents
- **Authors**: Wangchunshu Zhou, et al.
- **Year**: 2024 (NeurIPS 2024)
- **Venue**: NeurIPS 2024
- **arXiv**: 2406.18532
- **URL**: https://arxiv.org/abs/2406.18532
- **Abstract**: Introduces agent symbolic learning, treating agents as symbolic networks where learnable weights are prompts, tools, and their composition. Optimizes via natural language simulacrums of back-propagation and gradient descent. Enables language agents to update themselves after deployment, creating "self-evolving agents."
- **Search Source**: Batch 2 (supplementary search)

### 6. EvoMAC: Self-Evolving Multi-Agent Collaboration Networks for Software Development
- **Authors**: Yue Hu, Yuzhu Cai, Yaxin Du, Xinyu Zhu, Xiangrui Liu, Zijie Yu, Yuchen Hou, Shuo Tang, Siheng Chen
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2410.16946
- **URL**: https://arxiv.org/abs/2410.16946
- **Abstract**: Novel self-evolving paradigm for multi-agent collaboration (MAC) networks. Inspired by neural network training, uses textual backpropagation to update the MAC network. Proposes rSDE-Bench for software-level evaluation. Outperforms SOTA on both rSDE-Bench and HumanEval.
- **Search Source**: Batch 4 (supplementary search)

### 7. AgentEvolver: Towards Efficient Self-Evolving Agent System
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2511.10395
- **URL**: https://arxiv.org/abs/2511.10395
- **Abstract**: Self-evolving agent system with three mechanisms: self-questioning (curiosity-driven task generation), self-navigating (experience reuse and hybrid policy guidance), and self-attributing (differentiated rewards based on contribution). Achieves scalable, cost-effective continual improvement.
- **Search Source**: Batch 1, Query 5

### 8. InfiAgent: Self-Evolving Pyramid Agent Framework for Infinite Scenarios
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2509.22502
- **URL**: https://arxiv.org/abs/2509.22502
- **Abstract**: DAG-based multi-agent framework with pyramid-like organization. Features agent-as-a-tool mechanism, dual-audit quality control, agent routing, and self-evolution mechanism for autonomous DAG restructuring. 9.9% higher performance than ADAS.
- **Search Source**: Batch 1, Query 5

### 9. SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2508.04700
- **URL**: https://arxiv.org/abs/2508.04700
- **Abstract**: Self-evolving framework for computer use agents (CUAs) to autonomously master novel software via experiential learning. Features World State Model for trajectory assessment and Curriculum Generator. Success rate improvement from 11.3% to 34.5% on OS-World.
- **Search Source**: Batch 1, Query 5

### 10. SE-Agent: Self-Evolution Trajectory Optimization in Multi-Step Reasoning
- **Authors**: Jiaye Lin, et al.
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2508.02085
- **URL**: https://arxiv.org/abs/2508.02085
- **Abstract**: Self-Evolution framework that revisits pilot trajectories through revision, recombination, and refinement. Expands search space beyond local optima. Up to 55% relative improvement on SWE-bench Verified.
- **Search Source**: Batch 1, Query 1

### 11. ELL Framework: Building Self-Evolving Agents via Experience-Driven Lifelong Learning
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2508.19005
- **URL**: https://arxiv.org/abs/2508.19005
- **Abstract**: Experience-driven Lifelong Learning (ELL) framework built on four principles: Experience Exploration, Long-term Memory, Skill Learning, and Knowledge Internalization. Includes StuLife benchmark simulating a student's college journey.
- **Search Source**: Batch 1, Query 5

### 12. Agent0: Unleashing Self-Evolving Agents from Zero Data
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2511.16043
- **URL**: https://arxiv.org/abs/2511.16043
- **Abstract**: Fully autonomous framework that evolves agents without external data through multi-step co-evolution with tool integration. Curriculum Agent and Executor Agent co-evolve symbiotically. Achieves 35% math reasoning improvement and 24% general reasoning improvement.
- **Search Source**: Batch 1, Query 5

---

## B. Methods (22 papers)

### 13. RISE: Recursive Introspection: Teaching Language Model Agents How to Self-Improve
- **Authors**: Yuxiao Qu, Tianjun Zhang, Naman Garg, Aviral Kumar
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2407.18219
- **URL**: https://arxiv.org/abs/2407.18219
- **Abstract**: Fine-tuning approach teaching LLMs to introspect and correct mistakes. Poses single-turn fine-tuning as solving a multi-turn MDP. Enables Llama2/3 and Mistral models to improve themselves with more turns on math reasoning, outperforming single-turn strategies.
- **Search Source**: Batch 1, Query 2

### 14. Agent-R: Training Language Model Agents to Reflect via Iterative Self-Training
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2501.11425
- **URL**: https://arxiv.org/abs/2501.11425
- **Abstract**: Iterative self-training framework using MCTS to construct training data that recovers correct trajectories from erroneous ones. Introduces model-guided critique construction. +5.59% over baselines on interactive environments.
- **Search Source**: Batch 1, Query 2

### 15. SICA: A Self-Improving Coding Agent
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2504.15228
- **URL**: https://arxiv.org/abs/2504.15228
- **Abstract**: Agent system that autonomously edits itself to improve performance. Eliminates distinction between meta-agent and target agent. Performance gains from 17% to 53% on SWE-Bench Verified. Non gradient-based learning driven by LLM reflection and code updates.
- **Search Source**: Batch 1, Query 1 & 2

### 16. EvolveR: Self-Evolving LLM Agents through an Experience-Driven Lifecycle
- **Authors**: Rong Wu, Xiaoman Wang, Jianbiao Mei, Pinlong Cai, Daocheng Fu, Cheng Yang, Licheng Wen, Xuemeng Yang, Yufan Shen, Yuxin Wang, Botian Shi
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.16079
- **URL**: https://arxiv.org/abs/2510.16079
- **Abstract**: Closed-loop experience lifecycle: Offline Self-Distillation (synthesize trajectories into strategic principles) + Online Interaction (retrieve principles for decision-making) + Policy Evolution (RL-based updates). Superior performance on multi-hop QA benchmarks.
- **Search Source**: Batch 1, Query 1

### 17. ACE: Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.04618
- **URL**: https://arxiv.org/abs/2510.04618
- **Abstract**: Treats contexts as evolving playbooks that accumulate, refine, and organize strategies. Prevents context collapse with structured incremental updates. +10.6% on agents, +8.6% on finance. Matches top-ranked agent on AppWorld leaderboard using smaller open-source model.
- **Search Source**: Batch 1, Query 2

### 18. Self-Developing: Can LLMs Invent Algorithms to Improve Themselves?
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2410.15639
- **URL**: https://arxiv.org/abs/2410.15639
- **Abstract**: Framework enabling LLMs to autonomously discover, implement, and refine improvement algorithms. Uses iterative DPO cycle. Discovered merging algorithms improve GSM8k by 6%, exceed human-designed Task Arithmetic by 4.3%. 7.4% gains on out-of-domain models.
- **Search Source**: Batch 1, Query 2

### 19. EVOLVE: Evolving LLMs' Self-Refinement Capability via Synergistic Training-Inference Optimization
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2502.05605
- **URL**: https://arxiv.org/abs/2502.05605
- **Abstract**: Framework for eliciting and tracking Self-Refinement evolution through iterative training. Llama-3.1-8B surpasses GPT-4o (62.3% LC win rate on AlpacaEval 2). Generalizes to math reasoning (GSM8K, MATH).
- **Search Source**: Batch 1, Query 3

### 20. ExIt: Exploratory Iteration - Bootstrapping Task Spaces for Self-Improvement
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2509.04575
- **URL**: https://arxiv.org/abs/2509.04575
- **Abstract**: Autocurriculum RL method exploiting recurrent structure of self-improvement tasks. Trains LLMs for multi-step self-improvement at inference-time using only single-step iterations. Tested on competition math, multi-turn tool-use, and ML engineering.
- **Search Source**: Batch 1, Query 2

### 21. Self-Challenging Language Model Agents
- **Authors**: Jason Weston, et al.
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2506.01716
- **URL**: https://arxiv.org/abs/2506.01716
- **Abstract**: Framework where agent generates tasks (Code-as-Task format with verification), then trains on them with RL using evaluation feedback. Over 2x improvement on Llama-3.1-8B-Instruct on M3ToolEval and TauBench.
- **Search Source**: Batch 1, Query 2

### 22. TT-SI: Self-Improving LLM Agents at Test-Time
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.07841
- **URL**: https://arxiv.org/abs/2510.07841
- **Abstract**: Test-time self-improvement: identifies uncertain samples, generates similar examples, fine-tunes on them. TT-SI achieves +5.48% accuracy using 68x less training samples. Also proposes TT-D (teacher distillation variant).
- **Search Source**: Batch 1, Query 2

### 23. WebEvolver: Enhancing Web Agent Self-Improvement with Coevolving World Model
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2504.21024
- **URL**: https://arxiv.org/abs/2504.21024
- **Abstract**: Web agent + world model co-evolution framework for self-improvement in web environments.
- **Search Source**: Batch 1, Query 1 (cited in Gödel Agent paper)

### 24. Agentic Neural Networks: Self-Evolving Multi-Agent Systems via Textual Backpropagation
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2506.09046
- **URL**: https://arxiv.org/abs/2506.09046
- **Abstract**: Textual backpropagation applied to self-evolving multi-agent systems.
- **Search Source**: Batch 1, Query 1 (cited in Gödel Agent paper)

### 25. Agents of Change: Self-Evolving LLM Agents for Strategic Planning
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2506.04651
- **URL**: https://arxiv.org/abs/2506.04651
- **Abstract**: Self-evolving agents applied to strategic planning domains.
- **Search Source**: Batch 1, Query 1 (cited in Gödel Agent paper)

### 26. Self-Refine: Iterative Refinement with Self-Feedback
- **Authors**: Aman Madaan, Niket Tandon, Prakhar Gupta, Skyler Hallinan, Luyu Gao, Sarah Wiegreffe, Uri Alon, Nouha Dziri, Shrimai Prabhumoye, Yiming Yang, Sean Welleck, Bodhisattwa Prasad Majumder, Amir Yazdanbakhsh, Peter Clark
- **Year**: 2023 (NeurIPS 2023)
- **Venue**: NeurIPS 2023
- **arXiv**: 2303.17651
- **URL**: https://arxiv.org/abs/2303.17651
- **Abstract**: LLM generates output, critiques itself, then refines using feedback—all with a single model. No training data or RL needed. ~20% average improvement across 7 tasks using GPT-3.5/4. Also published at NeurIPS 2023 (proceedings).
- **Search Source**: Batch 1, Query 3

### 27. LLMRefine: Pinpointing and Refining Large Language Models via Fine-Grained Actionable Feedback
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2311.09336
- **URL**: https://arxiv.org/abs/2311.09336
- **Abstract**: Inference-time optimization using learned fine-grained feedback model to pinpoint defects. Uses simulated annealing to trade off exploration and exploitation. Tested on machine translation, long-form QA, and topical summarization.
- **Search Source**: Batch 1, Query 3

### 28. Agent-Pro: Learning to Evolve via Policy-Level Reflection and Optimization
- **Authors**: Wenqi Zhang, Ke Tang, Hai Wu, Mengna Wang, Yongliang Shen, Guiyang Hou, Zeqi Tan, Peng Li, Yueting Zhuang, Weiming Lu
- **Year**: 2024 (ACL 2024)
- **Venue**: ACL 2024
- **arXiv**: 2402.17574
- **URL**: https://arxiv.org/abs/2402.17574
- **Abstract**: LLM agent with policy-level reflection and optimization. Rather than action-level reflection, iteratively reflects on trajectories and beliefs, fine-tuning irrational beliefs. Uses DFS for policy optimization. Outperforms vanilla LLM and specialized models on Blackjack and Texas Hold'em.
- **Search Source**: Batch 2 (supplementary search)

### 29. Self-Correcting Code Small LM (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2505.23060
- **URL**: https://arxiv.org/abs/2505.23060
- **Abstract**: Small language model self-correction for code generation tasks.
- **Search Source**: Batch 5

### 30. ReflectEvo: Small Model Self-Reflection Evolution (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2505.16475
- **URL**: https://arxiv.org/abs/2505.16475
- **Abstract**: Self-reflection evolution approach for smaller models.
- **Search Source**: Batch 5

### 31. Deep Self-Evolving Reasoning (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.17498
- **URL**: https://arxiv.org/abs/2510.17498
- **Abstract**: Deep self-evolving reasoning framework for language models.
- **Search Source**: Batch 5

### 32. Evolving Excellence: Automatic Agent Optimization (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2512.09108
- **URL**: https://arxiv.org/abs/2512.09108
- **Abstract**: Automatic optimization of agentic systems through evolution.
- **Search Source**: Batch 5

### 33. AutoAgent: Fully Automated Zero-Code Agent (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2502.05957
- **URL**: https://arxiv.org/abs/2502.05957
- **Abstract**: Fully automated zero-code agent framework.
- **Search Source**: Batch 5

### 34. SEW: Self-Evolving Workflow for Code Generation (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Self-evolving workflow approach for code generation.
- **Search Source**: Batch 5

---

## C. Self-Play & RL (10 papers)

### 35. Absolute Zero: Reinforced Self-play Reasoning with Zero Data
- **Authors**: Andrew Zhao, Yiran Wu, Yang Yue, Tong Wu, Quentin Xu, Matthieu Lin, Shenzhi Wang, Qingyun Wu, Zilong Zheng, Gao Huang
- **Year**: 2025 (NeurIPS 2025)
- **Venue**: NeurIPS 2025
- **arXiv**: 2505.03335
- **URL**: https://arxiv.org/abs/2505.03335
- **Abstract**: New RLVR paradigm where a single model proposes tasks maximizing its own learning progress and improves reasoning by solving them—zero external data. AZR uses code executor for validation. Overall SOTA on coding and math reasoning, outperforming zero models with tens of thousands of human examples.
- **Search Source**: Batch 4 (supplementary search)

### 36. SPIRAL: Self-Play on Zero-Sum Games Incentivizes Reasoning (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Zero-sum博弈自对弈激励推理能力.
- **Search Source**: Batch 3

### 37. Multi-Agent Evolve (MAE): LLM Self-Improve through Co-evolution
- **Authors**: Yixing Chen, et al.
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.23595
- **URL**: https://arxiv.org/abs/2510.23595
- **Abstract**: Triplet agent framework (Proposer, Solver, Judge) instantiated from single LLM with RL optimization. Qwen2.5-3B achieves 4.54% average improvement on multiple benchmarks.
- **Search Source**: Batch 1, Query 1

### 38. Agentic Self-Learning (ASL): Towards Agentic Self-Learning LLMs
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.14253
- **URL**: https://arxiv.org/abs/2510.14253
- **Abstract**: Fully closed-loop multi-role RL framework unifying task generation (Prompt Generator), policy execution, and evaluation (Generative Reward Model). Surpasses Search-R1, Absolute Zero. Continues improving under zero-labeled-data conditions.
- **Search Source**: Batch 1, Query 1

### 39. Vision-Zero: VLM Multi-Agent Self-Play Self-Evolution (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Vision-Language Model multi-agent self-play for self-evolution.
- **Search Source**: Batch 3

### 40. RLSR: Self-Rewarding Reinforcement Learning (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2505.08827
- **URL**: https://arxiv.org/abs/2505.08827
- **Abstract**: Self-rewarding mechanism integrated with reinforcement learning.
- **Search Source**: Batch 3

### 41. Language Self-Play: Training Without Data (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Language model self-play for training without external data.
- **Search Source**: Batch 3

### 42. Self-Play Fine-Tuning: Converting Weak Models to Strong Models
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2401.01335
- **URL**: https://arxiv.org/abs/2401.01335
- **Abstract**: Self-play fine-tuning to convert weak language models into stronger ones.
- **Search Source**: Batch 3

### 43. Nature-Inspired Population-Based Evolution of LLMs (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Population-based evolutionary methods for LLM improvement inspired by natural selection.
- **Search Source**: Batch 3

### 44. ES vs GRPO in LLM Post-Training (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Comparison of evolutionary strategies vs group relative policy optimization in LLM post-training.
- **Search Source**: Batch 3

---

## D. STaR & Reasoning Self-Improvement (6 papers)

### 45. STaR: Self-Taught Reasoner - Bootstrapping Reasoning With Reasoning
- **Authors**: Eric Zelikman, Yuhuai Wu, Jesse Mu, Noah D. Goodman
- **Year**: 2022 (NeurIPS)
- **Venue**: NeurIPS
- **arXiv**: 2203.14465
- **URL**: https://arxiv.org/abs/2203.14465
- **Abstract**: Iteratively leverages small rationale examples and large datasets without rationales. Loop: generate rationales → if wrong, try again with correct answer → fine-tune on correct rationales → repeat. Performs comparably to fine-tuning a 30x larger model on CommonsenseQA.
- **Search Source**: Batch 6 (supplementary search)

### 46. RL-STaR: RL Framework for Self-Taught Reasoning (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2410.23912
- **URL**: https://arxiv.org/abs/2410.23912
- **Abstract**: Reinforcement learning framework with theoretical analysis of self-taught reasoning.
- **Search Source**: Batch 6

### 47. STaR-SQL: Self-Taught Reasoning for Text-to-SQL (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2502.13550
- **URL**: https://arxiv.org/abs/2502.13550
- **Abstract**: Self-taught reasoning applied to text-to-SQL tasks.
- **Search Source**: Batch 6

### 48. AlphaEvolve: A Coding Agent for Scientific and Algorithmic Discovery
- **Authors**: Alexander Novikov, Ngân Vũ, Marvin Eisenberger, Emilien Dupont, Po-Sen Huang, Adam Zsolt Wagner, Sergey Shirobokov, Borislav Kozlovskii, Francisco J. R. Ruiz, Abbas Mehrabian, M. Pawan Kumar, Abigail See, Swarat Chaudhuri, George Holland, Alex Davies, Sebastian Nowozin, Pushmeet Kohli, Matej Balog
- **Year**: 2025
- **Venue**: arXiv (Google DeepMind)
- **arXiv**: 2506.13131
- **URL**: https://arxiv.org/abs/2506.13131
- **Abstract**: Evolutionary coding agent orchestrating LLMs to improve algorithms via direct code changes. Found first improvement in 56 years over Strassen's algorithm for 4×4 complex matrix multiplication (48 multiplications). Optimized Google data center scheduling, TPU circuit design, and LLM training.
- **Search Source**: Batch 6 (supplementary search)

### 49. ThetaEvolve: Open Problems and Test-Time Learning (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2511.23473
- **URL**: https://arxiv.org/abs/2511.23473
- **Abstract**: Test-time learning approach for open problems using evolutionary methods.
- **Search Source**: Batch 6

### 50. FunSearch: Mathematical Discovery via LLM Evolution (2023)
- **Authors**: (Not fully extracted — Google DeepMind)
- **Year**: 2023
- **Venue**: Nature
- **arXiv**: (Not available — published in Nature)
- **URL**: https://www.nature.com/articles/s41586-023-06924-6
- **Abstract**: LLM-driven evolutionary approach for mathematical discovery. Published in Nature. Combined pre-trained LLMs with systematic evaluation for discovering new solutions in combinatorial mathematics.
- **Search Source**: Batch 6

---

## E. Self-Reflection & Reflexion (6 papers)

### 51. Self-Correct via RL: Training Language Models to Self-Correct via Reinforcement Learning
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2409.12917
- **URL**: https://arxiv.org/abs/2409.12917
- **Abstract**: RL-based approach to train LLMs to self-correct, cited heavily in the self-evolution literature.
- **Search Source**: Batch 1, Query 1 (cited in Gödel Agent)

### 52. Self-Reflection in LLM Agents (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2405.06682
- **URL**: https://arxiv.org/abs/2405.06682
- **Abstract**: Study of how self-reflection impacts LLM agent problem-solving.
- **Search Source**: Batch 5

### 53. Reflexion: Language Agents with Verbal Reinforcement Learning
- **Authors**: Noah Shinn, Federico Cassano, Edward Berman, Ashwin Gopinath, Karthik Narasimhan, Shunyu Yao
- **Year**: 2023 (NeurIPS)
- **Venue**: NeurIPS
- **arXiv**: 2303.11366
- **URL**: https://arxiv.org/abs/2303.11366
- **Abstract**: Reinforces language agents through linguistic feedback, not weight updates. Agents verbally reflect on feedback signals and maintain reflective text in episodic memory. 91% pass@1 on HumanEval (surpassing GPT-4 at 80%).
- **Search Source**: Batch 8 (supplementary search)

### 54. SaMuLe: Multi-Level Reflection Self-Learning Agent (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Multi-level reflection for self-learning agents.
- **Search Source**: Batch 5

### 55. MAR: Multi-Agent Reflection for Improved Reasoning (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Multi-agent reflection mechanism for improved reasoning.
- **Search Source**: Batch 5

### 56. MetaReflection: Learning Instructions from Past Reflections (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Meta-learning from past reflections to improve future instructions.
- **Search Source**: Batch 5

---

## F. Code Self-Correction (5 papers)

### 57. InspectCoder: Dynamic Analysis Self-Repair (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.18327
- **URL**: https://arxiv.org/abs/2510.18327
- **Abstract**: Dynamic analysis-based self-repair for code generation.
- **Search Source**: Batch 5

### 58. Revisit Self-Debugging: Self-Generated Tests for Self-Debugging (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2501.12793
- **URL**: https://arxiv.org/abs/2501.12793
- **Abstract**: Self-generated test cases for self-debugging code.
- **Search Source**: Batch 5

### 59. Hierarchical Debugging: Code to Correctness (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2410.01215
- **URL**: https://arxiv.org/abs/2410.01215
- **Abstract**: Hierarchical approach to debugging generated code.
- **Search Source**: Batch 5

### 60. LeDex: Self-Debugging + Code Explanation (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Self-debugging combined with code explanation.
- **Search Source**: Batch 5

### 61. ProgCo: Program-Assisted Self-Correction (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2501.01264
- **URL**: https://arxiv.org/abs/2501.01264
- **Abstract**: Program-assisted self-correction for code generation.
- **Search Source**: Batch 5

---

## G. Self-Evolving Curriculum (5 papers)

### 62. Self-Evolving Curriculum for LLM Reasoning (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2505.14970
- **URL**: https://arxiv.org/abs/2505.14970
- **Abstract**: Self-evolving curriculum approach for improving LLM reasoning.
- **Search Source**: Batch 6

### 63. EvoCurr: Behavioral Code Generation Self-Evolving Curriculum (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2508.09586
- **URL**: https://arxiv.org/abs/2508.09586
- **Abstract**: Self-evolving curriculum for behavioral code generation.
- **Search Source**: Batch 6

### 64. TTCS: Test-Time Curriculum Synthesis (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Test-time curriculum synthesis for agent learning.
- **Search Source**: Batch 6

### 65. WebRL: Online Curriculum RL Training for Web Agents (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Online curriculum-based RL training for web agents.
- **Search Source**: Batch 6

### 66. CurricuLLM: LLM Designs Robot Skill Curriculum (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2409.18382
- **URL**: https://arxiv.org/abs/2409.18382
- **Abstract**: Using LLMs to design robot skill learning curricula.
- **Search Source**: Batch 6

---

## H. Experience Learning (4 papers)

### 67. ExpeL: LLM Agents Are Experiential Learners
- **Authors**: Andrew Zhao, Daniel Huang, Quentin Xu, Matthieu Lin, Yong-Jin Liu, Gao Huang
- **Year**: 2024 (AAAI 2024)
- **Venue**: AAAI 2024
- **arXiv**: 2308.10144
- **URL**: https://arxiv.org/abs/2308.10144
- **Abstract**: Agent autonomously gathers experiences, extracts natural language insights from training tasks, and recalls them at inference. No parameter updates needed (compatible with API-only models). Shows consistent improvement as experiences accumulate, with forward transfer learning capability.
- **Search Source**: Batch 2 (supplementary search)

### 68. ICE: Investigate-Consolidate-Exploit: A General Strategy for Inter-Task Agent Self-Evolution
- **Authors**: Cheng Qian, Shihao Liang, Yujia Qin, Yining Ye, Xin Cong, Yankai Lin, Yesai Wu, Zhiyuan Liu, Maosong Sun
- **Year**: 2024 (AAAI 2024)
- **Venue**: AAAI 2024
- **arXiv**: 2401.13996
- **URL**: https://arxiv.org/abs/2401.13996
- **Abstract**: Novel strategy for inter-task self-evolution. Dynamically investigates planning/execution trajectories, consolidates into simplified workflows, and exploits for improved execution. Reduces API calls by 80%. GPT-3.5+ICE matches raw GPT-4 performance.
- **Search Source**: Batch 2 (supplementary search)

### 69. FLEX: Forward Experience Learning for Continual Evolution (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Forward experience learning for continual agent evolution.
- **Search Source**: Batch 3

### 70. ReasoningBank: Scaling Reasoning Memory for Self-Evolution (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2509.25140
- **URL**: https://arxiv.org/abs/2509.25140
- **Abstract**: Scaling reasoning memory bank for agent self-evolution.
- **Search Source**: Batch 5

---

## I. Memory & Lifelong Learning (6 papers)

### 71. AriadneMem: LLM Agent Lifelong Memory (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Lifelong memory system for LLM agents.
- **Search Source**: Batch 5

### 72. Memory-R1: RL for Managing and Utilizing Memory (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Reinforcement learning approach to agent memory management.
- **Search Source**: Batch 5

### 73. Lifelong Learning of LLM Agents: A Roadmap (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2501.07278
- **URL**: https://arxiv.org/abs/2501.07278
- **Abstract**: Roadmap paper for lifelong learning in LLM agents.
- **Search Source**: Batch 5

### 74. Memento 2: State Reflection Memory Learning (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: State reflection-based memory learning for agents.
- **Search Source**: Batch 5

### 75. A-Mem: Agent Memory for LLM Agents (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Memory management approach for LLM agents.
- **Search Source**: Batch 5

### 76. How Memory Management Impacts LLM Agents (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2505.16067
- **URL**: https://arxiv.org/abs/2505.16067
- **Abstract**: Analysis of how memory management strategies impact LLM agent performance.
- **Search Source**: Batch 5

---

## J. Self-Rewarding & Alignment (5 papers)

### 77. Self-Rewarding Language Models
- **Authors**: Weizhe Yuan, Richard Yuanzhe Pang, Kyunghyun Cho, Xian Li, Sainbayar Sukhbaatar, Jing Xu, Jason Weston
- **Year**: 2024
- **Venue**: arXiv (Meta / NYU)
- **arXiv**: 2401.10020
- **URL**: https://arxiv.org/abs/2401.10020
- **Abstract**: Language model provides its own rewards via LLM-as-a-Judge during Iterative DPO training. Both instruction following and reward quality improve. Llama 2 70B fine-tuned with 3 iterations outperforms Claude 2, Gemini Pro, and GPT-4 0613 on AlpacaEval 2.0.
- **Search Source**: Batch 5 (supplementary search)

### 78. Self-Rewarding PPO (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Self-rewarding mechanism integrated with PPO for alignment.
- **Search Source**: Batch 5

### 79. Process-based Self-Rewarding (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Process-based self-rewarding for step-level alignment.
- **Search Source**: Batch 5

### 80. Meta-Rewarding LM: LLM as Meta-Judge for Self-Improvement (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: LLM serves as meta-judge to improve its own reward modeling.
- **Search Source**: Batch 3

### 81. IterAlign: Iterative Constitutional Alignment (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2403.18341
- **URL**: https://arxiv.org/abs/2403.18341
- **Abstract**: Iterative alignment using constitutional AI principles.
- **Search Source**: Batch 3

---

## K. Multi-Agent Debate & Collaboration (5 papers)

### 82. Improving Factuality and Reasoning in Language Models through Multiagent Debate
- **Authors**: Yilun Du, Shuang Li, Antonio Torralba, Joshua B. Tenenbaum, Igor Mordatch
- **Year**: 2023
- **Venue**: arXiv
- **arXiv**: 2305.14325
- **URL**: https://arxiv.org/abs/2305.14325
- **Abstract**: Multiple LLM instances propose and debate responses over multiple rounds. Significantly enhances mathematical and strategic reasoning. Improves factual validity and reduces hallucinations. Uses identical procedure for all tasks.
- **Search Source**: Batch 5 (supplementary search)

### 83. Diversity of Thought: Stronger Reasoning through Thinking Diversity (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2410.12853
- **URL**: https://arxiv.org/abs/2410.12853
- **Abstract**: Leveraging diversity of thought in multi-agent reasoning.
- **Search Source**: Batch 5

### 84. MAgICoRe: Multi-Agent Iterative Coarse-to-Fine Refinement (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Multi-agent iterative refinement from coarse to fine.
- **Search Source**: Batch 5

### 85. GroupDebate: Efficient Multi-Agent Debate (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Efficient multi-agent debate approach.
- **Search Source**: Batch 5

### 86. MARS: Multi-Agent Collaboration for Reasoning (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Multi-agent collaboration system for improved reasoning.
- **Search Source**: Batch 5

---

## L. Evolutionary Strategies & Discovery (5 papers)

### 87. LLMs As Evolution Strategies (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Using large language models as evolution strategies.
- **Search Source**: Batch 6

### 88. Survey: LLMs for Evolutionary Computation (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Survey on applying LLMs to evolutionary computation.
- **Search Source**: Batch 6

### 89. Matching Accuracy: ES vs GRPO (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Comparison study of evolutionary strategies vs group relative policy optimization.
- **Search Source**: Batch 3

### 90. Scientific Algorithm Discovery via AlphaEvolve (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2510.06056
- **URL**: https://arxiv.org/abs/2510.06056
- **Abstract**: Application of AlphaEvolve-style evolutionary coding agents for scientific algorithm discovery.
- **Search Source**: Batch 6

---

## M. Open-Ended Evolution & Classics (5 papers)

### 91. Voyager: An Open-Ended Embodied Agent with Large Language Models
- **Authors**: Guanzhi Wang, Yuqi Xie, Yunfan Jiang, Ajay Mandlekar, Chaowei Xiao, Yuke Zhu, Linxi "Jim" Fan, Anima Anandkumar
- **Year**: 2023 (NeurIPS)
- **Venue**: NeurIPS
- **arXiv**: 2305.16291
- **URL**: https://arxiv.org/abs/2305.16291
- **Abstract**: First LLM-powered embodied lifelong learning agent in Minecraft. Three components: automatic curriculum for exploration, ever-growing skill library of executable code, iterative prompting with self-verification. 3.3x more unique items, 2.3x longer distances, 15.3x faster tech tree milestones than prior SOTA.
- **Search Source**: Batch 6 (supplementary search)

### 92. Generative Agents: Interactive Simulacra of Human Behavior
- **Authors**: Joon Sung Park, Joseph C. O'Brien, Carrie J. Cai, Meredith Ringel Morris, Percy Liang, Michael S. Bernstein
- **Year**: 2023 (UIST)
- **Venue**: UIST 2023
- **arXiv**: 2304.03442
- **URL**: https://arxiv.org/abs/2304.03442
- **Abstract**: Computational agents simulating believable human behavior. Architecture extends LLM with complete experience records, higher-level reflections, and dynamic retrieval for planning. 25 agents in sandbox environment produce emergent social behaviors (e.g., autonomously organizing a Valentine's Day party).
- **Search Source**: Batch 8 (supplementary search)

### 93. Safety for Open-Ended Systems (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Safety considerations for open-ended AI systems.
- **Search Source**: Batch 5

### 94. Dominated Novelty Search (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2502.00593
- **URL**: https://arxiv.org/abs/2502.00593
- **Abstract**: Novelty search approach for open-ended evolution.
- **Search Source**: Batch 5

### 95. Foundation Agents: Brain-Inspired Intelligence to Evolutionary, Collaborative, and Safe Systems (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2504.01990
- **URL**: https://arxiv.org/abs/2504.01990
- **Abstract**: Comprehensive survey/framework covering brain-inspired approaches to evolutionary, collaborative, and safe agent systems.
- **Search Source**: Batch 1 (cited in Gödel Agent)

---

## N. Weak-to-Strong & Theory (5 papers)

### 96. Weak-to-Strong Generalization: Eliciting Strong Capabilities With Weak Supervision
- **Authors**: Collin Burns, Pavel Izmailov, Jan Hendrik Kirchner, Bowen Baker, Leo Gao, Leopold Aschenbrenner, Yining Chen, Adrien Ecoffet, Manas Joglekar, Jan Leike, Ilya Sutskever, Jeff Wu (OpenAI)
- **Year**: 2024
- **Venue**: arXiv (OpenAI)
- **arXiv**: 2312.09390
- **URL**: https://arxiv.org/abs/2312.09390
- **Abstract**: Studies whether weak supervision can elicit full capabilities of stronger models. Finds consistent "weak-to-strong generalization" where strong models outperform weak supervisors. With GPT-2-level supervision + confidence loss, recovers close to GPT-3.5 performance.
- **Search Source**: Batch 5 (supplementary search)

### 97. Debate Helps Weak-to-Strong (2024)
- **Authors**: (Not fully extracted)
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Debate mechanism applied to weak-to-strong generalization.
- **Search Source**: Batch 7

### 98. Self-Improvement in Language Models: The Sharpening Mechanism
- **Authors**: Adam B. Block, et al.
- **Year**: 2024
- **Venue**: arXiv
- **arXiv**: 2412.01951
- **URL**: https://arxiv.org/abs/2412.01951
- **Abstract**: Statistical framework for self-improvement as "sharpening" — using the model as verifier during post-training to sharpen toward high-quality sequences. Analyzes fundamental limits and two families of algorithms (SFT-based and RLHF-based).
- **Search Source**: Batch 1, Query 2

### 99. Reward Hacking: Mechanisms & Misalignment (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: (Not available)
- **URL**: N/A
- **Abstract**: Analysis of reward hacking mechanisms and misalignment risks in self-improving systems.
- **Search Source**: Batch 7

### 100. MONA: Myopic Optimization Non-myopic Approval (2025)
- **Authors**: (Not fully extracted)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2501.13011
- **URL**: https://arxiv.org/abs/2501.13011
- **Abstract**: Myopic optimization with non-myopic approval for safe self-improvement.
- **Search Source**: Batch 7

---

## 2026 Supplemental Frontier Papers

### 101. Self-Evolving Software Agents
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2604.27264
- **URL**: https://arxiv.org/abs/2604.27264
- **Abstract**: Introduces self-evolving software agents that combine BDI reasoning with LLMs so goals, reasoning rules, and executable code can evolve from operational experience. Important for the software-agent line because it frames evolution as requirements/design/code update, not only prompt retry.
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

### 102. EvoMemBench: Benchmarking Agent Memory from a Self-Evolving Perspective
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2605.18421
- **URL**: https://arxiv.org/abs/2605.18421
- **Abstract**: Defines a benchmark for agent memory under self-evolution, separating in-episode vs. cross-episode memory and knowledge-oriented vs. execution-oriented memory. Important for judging whether memory really improves future behavior instead of merely storing more context.
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

### 103. SEA-Eval: A Benchmark for Evaluating Self-Evolving Agents Beyond Episodic Assessment
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2604.08988
- **URL**: https://arxiv.org/abs/2604.08988
- **Abstract**: Introduces SEA-Eval for evaluating self-evolving agents beyond one-off episodic task success, with emphasis on intra-task reliability and long-term evolutionary performance. This directly targets the benchmark gap in this project.
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

### 104. Group-Evolving Agents: Open-Ended Self-Improvement via Experience Sharing
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2602.04837
- **URL**: https://arxiv.org/abs/2602.04837
- **Abstract**: Treats a group of agents as the evolutionary unit and studies open-ended improvement through shared experience reuse. Useful for comparing individual self-modification, multi-agent collaboration, and population-level agent evolution.
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

### 105. EvoSkill: Automated Skill Discovery for Multi-Agent Systems
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2603.02766
- **URL**: https://arxiv.org/abs/2603.02766
- **Abstract**: Studies automatic skill discovery for multi-agent systems, linking the skill-supply repositories in the GitHub corpus to paper-level evidence about how reusable skills can be generated and evaluated.
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

### 106. The Devil Behind Moltbook: Anthropic Safety is Always Vanishing in Self-Evolving AI Societies
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2602.09877
- **URL**: https://arxiv.org/abs/2602.09877
- **Abstract**: Analyzes safety degradation in self-evolving AI societies. This is a needed counterweight to performance-only self-evolution claims because it asks whether autonomous adaptation erodes alignment or governance properties.
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

### 107. SAGER: Self-Evolving User Policy Skills for Recommendation Agent
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2604.14972
- **URL**: https://arxiv.org/abs/2604.14972
- **Abstract**: Applies self-evolving policy skills to recommendation agents, separating evolving user memory from evolving decision policy. Useful as a product-facing example where skill evolution is personalized and continuously updated.
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

### 108. Bifrost: Steering Strategic Trajectories to Bridge Contextual Gaps for Self-Improving Agents
- **Authors**: (see arXiv)
- **Year**: 2026
- **Venue**: arXiv
- **arXiv**: 2602.05810
- **URL**: https://arxiv.org/abs/2602.05810
- **Abstract**: Focuses on steering strategic trajectories for self-improving agents when context gaps block improvement. Relevant to the context-engineering and trajectory-control branch of self-evolution.
- **Search Source**: 2026-05-25 follow-up mining for paper-undercoverage gap

## Surveys (additional references)

### S1. A Survey of Self-Evolving Agents: On Path to Artificial Super Intelligence
- **Authors**: (Multiple — see arXiv)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2507.21046
- **URL**: https://arxiv.org/abs/2507.21046
- **Abstract**: First systematic review of self-evolving agents organized around three dimensions: what to evolve, when to evolve, how to evolve. Covers agent components, adaptation stages, algorithmic designs, evaluation metrics, and applications.

### S2. A Comprehensive Survey of Self-Evolving AI Agents
- **Authors**: (Multiple — see arXiv)
- **Year**: 2025
- **Venue**: arXiv
- **arXiv**: 2508.07407
- **URL**: https://arxiv.org/abs/2508.07407
- **Abstract**: Survey bridging foundation models and lifelong agentic systems.

---

## Statistics

| Category | Count |
|----------|-------|
| A. Frameworks | 12 |
| B. Methods | 22 |
| C. Self-Play & RL | 10 |
| D. STaR & Reasoning | 6 |
| E. Self-Reflection | 6 |
| F. Code Self-Correction | 5 |
| G. Self-Evolving Curriculum | 5 |
| H. Experience Learning | 4 |
| I. Memory & Lifelong Learning | 6 |
| J. Self-Rewarding & Alignment | 5 |
| K. Multi-Agent Debate | 5 |
| L. Evolutionary Strategies | 4 |
| M. Open-Ended & Classics | 5 |
| N. Weak-to-Strong & Theory | 5 |
| **Total** | **108** |

| Venue | Count |
|-------|-------|
| NeurIPS | 5 |
| ICLR | 2 |
| ACL | 1 |
| AAAI | 2 |
| Nature | 1 |
| UIST | 1 |
| arXiv only | 96 |
| **2024-2026 papers** | **~85%** |
