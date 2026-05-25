# Reward Modeling Survey - 奖励建模综述

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | RLHFlow/RLHF-Reward-Modeling (包含综述内容) |
| GitHub URL | https://github.com/RLHFlow/RLHF-Reward-Modeling |
| Stars | ~1,500 |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2025 |
| 模式 | 评估器/打分器 |

## 概述
该综述项目系统化了 RLHF 中奖励建模的研究进展，涵盖了从 Bradley-Terry 模型到多目标奖励模型、从标量奖励到偏好模型、从判别式到生成式奖励模型的技术演进。项目不仅提供了理论综述，还包含了完整的实验代码和可复现的训练配方。它梳理了奖励建模中的核心挑战：reward hacking、长度偏差、分布偏移等，并提供了对应的解决方案。

## 核心特性
- **Bradley-Terry RM**: 经典奖励建模方法的理论和实践
- **ArmoRM**: 多目标奖励模型 + Mixture-of-Experts 聚合
- **生成式 RM**: 利用 LLM next-token prediction 能力做评估
- **决策树 RM**: 可解释的奖励模型，RewardBench 95.4%
- **半监督自训练**: SSRM 通过迭代自训练提升奖励模型
- **Reward Hacking 缓解**: RRM 通过因果推理缓解奖励作弊
- **长度偏差消除**: Odin-RM 解耦奖励和回复长度

## 技术栈
- Python, PyTorch, Hugging Face Transformers
- DeepSpeed, RewardBench

## 与 Self Evolve 的关联
奖励建模综述为 Self Evolve 系统的"评估器/打分器"模式提供了系统化的技术选型参考。不同的奖励建模方法适用于自我进化系统的不同场景：ArmoRM 适合多维度进化评估，生成式 RM 适合复杂推理任务的评估，决策树 RM 提供可解释的进化信号。了解 reward hacking 等挑战对于构建稳健的自我进化系统至关重要。

## 分类
- **类别**: 奖励建模研究
- **标签**: reward-modeling, survey, bradley-terry, armorRM, reward-hacking, evaluation
