# LLM 自我训练方向项目索引报告

> 方向：ReST / RLAIF / Constitutional AI / SPIN / STaR / Self-Rewarding
> 分析者：Builder-6（内容整合）
> 日期：2026-05-22

## 方向概述

LLM 自我训练（Self-Training）是指大语言模型在不依赖外部人工标注的情况下，通过自我生成数据、自我评估、自我博弈等方式持续改进能力的技术路线。本报告收录该方向 30 个代表性项目。

## 项目列表

### 1. ReST 系列（Reinforced Self-Training）

#### ReST-RL (THUDM/清华)
- **仓库**：https://github.com/THUDM/ReST-RL
- **方向**：两阶段 RL 框架，显著提升 LLM 代码推理能力
- **核心方法**：强化自训练管线 + 代码推理优化
- **技术栈**：Python, PyTorch, Transformers

#### ReST-MCTS* (THUDM/清华)
- **仓库**：https://github.com/THUDM/ReST-MCTS
- **方向**：结合过程奖励引导与树搜索的强化自训练
- **核心方法**：MCTS* + 过程奖励模型 + 高质量训练数据采集
- **技术栈**：Python, PyTorch, Transformers

### 2. SPIN（Self-Play Fine-Tuning）

#### SPIN (UCLA ML Lab)
- **仓库**：https://github.com/uclaml/SPIN
- **论文**：arXiv 2401.01335（2024年1月）
- **方向**：通过自博弈机制让弱模型变强
- **核心方法**：LLM 与自身前一迭代版本对弈，无需额外标注数据
- **结果**：在多个 benchmark 上超越 DPO 和其他 RLHF 方法
- **技术栈**：Python, PyTorch

### 3. STaR 系列（Self-Taught Reasoning）

#### STaR (Stanford)
- **仓库**：https://github.com/ezelikman/STaR
- **论文**：NeurIPS 2022
- **方向**：通过迭代生成和筛选推理链来引导推理能力
- **核心方法**：生成 rationale → 筛选正确 → 微调 → 重复
- **技术栈**：Python, JAX

#### Quiet-STaR (Stanford)
- **仓库**：https://github.com/ezelikman/quiet-star
- **方向**：在每 token 上生成内部"思考"，提升预测能力
- **核心方法**：REINFORCE + 学习型"思考" token 插入
- **技术栈**：Python, Mistral 架构

#### B-STaR (HKUST)
- **仓库**：https://github.com/hkust-nlp/B-STaR
- **方向**：平衡探索与利用的自改进推理
- **核心方法**：动态平衡探索/利用的自推理框架

### 4. Self-Rewarding Language Models

#### Self-Rewarding LM (lucidrains)
- **仓库**：https://github.com/lucidrains/self-rewarding-lm-pytorch
- **方向**：Meta 提出的 Self-Rewarding LM PyTorch 实现
- **核心方法**：LLM-as-a-Judge 自生成奖励信号 + 迭代自改进

#### Self-Rewarding Reasoning LLM (RLHFlow)
- **仓库**：https://github.com/RLHFlow/Self-rewarding-reasoning-LLM
- **方向**：自奖励推理 LLM，生成推理链并评估自身输出正确性
- **核心方法**：推理 + 自评估联合训练

### 5. TTRL（Test-Time Reinforcement Learning）

#### TTRL (PRIME-RL)
- **仓库**：https://github.com/PRIME-RL/TTRL
- **论文**：NeurIPS 2025
- **方向**：测试时强化学习，无标签数据上的在线 RL
- **核心方法**：在线 RL + 无 ground truth 标签推理训练
- **技术栈**：Python, PyTorch

### 6. RLAIF / Constitutional AI

#### Awesome-RLAIF
- **仓库**：https://github.com/mengdi-li/awesome-RLAIF
- **方向**：RLAIF 资源精选列表

#### Anthropic HH-RLHF
- **仓库**：https://github.com/anthropics/hh-rlhf
- **方向**：Anthropic 的 helpfulness & harmlessness RLHF 数据集

### 7. RLHF / Reward Models

#### Awesome-RLHF (OpenDILab)
- **仓库**：https://github.com/opendilab/awesome-RLHF
- **方向**：RLHF 资源精选

#### RLHFlow Reward Modeling
- **仓库**：https://github.com/RLHFlow/RLHF-Reward-Modeling
- **方向**：奖励模型训练框架

### 8. DPO / RL Training Frameworks

#### DPO (Eric Mitchell)
- **仓库**：https://github.com/eric-mitchell/direct-preference-optimization
- **方向**：直接偏好优化（DPO）官方实现

#### LLaMA-Factory
- **仓库**：https://github.com/hiyouga/LLaMA-Factory
- **方向**：统一 LLM 微调框架，支持 RLHF/DPO/PPO 等多种训练范式
- **Stars**：40,000+

### 9. Open R1 (HuggingFace)
- **仓库**：https://github.com/huggingface/open-r1
- **方向**：DeepSeek-R1 的开源复现，GRPO 训练
- **核心方法**：GRPO（Group Relative Policy Optimization）

### 10. 推理自进化

#### Reasoning Self-Evolution Survey
- **仓库**：https://github.com/Reasoning-Self-Evolution-Survey/Reasoning-Self-Evolution
- **方向**：推理自进化综述

#### Awesome RL for LRMs (清华)
- **仓库**：https://github.com/TsinghuaC3I/Awesome-RL-for-LRMs
- **方向**：大推理模型 RL 综述

#### Awesome Deep Reasoning (ModelScope)
- **仓库**：https://github.com/modelscope/awesome-deep-reasoning
- **方向**：深度推理资源精选

#### Volcengine Reasoning RL
- **仓库**：https://github.com/volcengine/reasoning-rl
- **方向**：推理 RL 框架

### 11. Post-Training 综合资源

#### Awesome LLM Post-Training (MBZUAI)
- **仓库**：https://github.com/mbzuai-oryx/awesome-llm-post-training
- **方向**：LLM 后训练方法分类学

### 12. 其他重要项目

#### IBM Dromedary
- **仓库**：https://github.com/IBM/Dromedary
- **方向**：原则驱动的自对齐语言模型

#### DeepSeek-R1
- **仓库**：https://github.com/deepseek-ai/DeepSeek-R1
- **方向**：DeepSeek R1 推理模型，自博弈 RL 训练

#### ArmoRM (RLHFlow)
- **仓库**：https://github.com/RLHFlow/ArmoRM
- **方向**：多目标奖励模型

## 方向分类统计

| 子方向 | 项目数 |
|--------|--------|
| ReST 系列 | 2 |
| SPIN 自博弈 | 1 |
| STaR 系列 | 3 |
| Self-Rewarding | 2 |
| TTRL 测试时 RL | 1 |
| RLAIF / Constitutional AI | 2 |
| RLHF / Reward Models | 2 |
| DPO / RL 框架 | 2 |
| GRPO (Open R1) | 1 |
| 推理自进化 | 4 |
| Post-Training | 1 |
| 其他 | 4 |
| **总计** | **25+** |

注：部分仓库可能不存在或克隆失败，最终数量以实际成功克隆为准。GitNexus 分析报告见 `projects/` 目录。
