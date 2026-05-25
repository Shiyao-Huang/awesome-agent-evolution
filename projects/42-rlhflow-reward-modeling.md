# RLHFlow Reward Modeling - 奖励模型训练配方

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | RLHFlow/RLHF-Reward-Modeling |
| GitHub URL | https://github.com/RLHFlow/RLHF-Reward-Modeling |
| Stars | ~1,500 |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2025-01 |
| 模式 | 评估器/打分器 |

## 概述
RLHFlow Reward Modeling 是 RLHF 工作流中奖励模型训练的权威配方库，由 RLHFlow 团队维护。该项目提供了从经典 Bradley-Terry 奖励模型到前沿 ArmoRM (多目标奖励模型) 的完整训练方案。其在 RewardBench 排行榜上取得 SOTA 表现，ArmoRM-Llama3-8B-v0.1 曾获 RewardBench 开源 8B 模型排名第一。项目还包含配对偏好模型、半监督奖励模型 (SSRM)、决策树奖励模型等多种奖励建模技术。

## 核心特性
- **Bradley-Terry RM**: 经典 BT 奖励模型训练，FsfairX-LLaMA3-RM-v0.1 在 RewardBench 获得 83.6 分
- **ArmoRM**: 多目标奖励模型 + MoE 聚合，Rank #1 开源 8B 模型 (89.0 分)
- **Pairwise Preference Model**: 配对偏好模型，利用 next-token prediction 做生成式 RM
- **SSRM**: 半监督奖励建模，通过迭代自训练提升奖励模型质量
- **Math RM**: 过程奖励模型 (PRM) 和结果奖励模型 (ORM) 训练代码
- **Decision Tree RM**: 决策树奖励模型，Gemma-2-27B 达到 RewardBench 95.4% SOTA
- **Odin-RM**: 解耦奖励建模中的长度偏差
- **RRM**: 利用因果推理增强偏好数据集，缓解 reward hacking

## 技术栈
- Python, PyTorch, Hugging Face Transformers
- DeepSpeed Zero-3, Gradient Checkpointing
- RewardBench (评估), UltraFeedback (数据)

## 与 Self Evolve 的关联
奖励模型是 Self Evolve 系统中"评估器/打分器"模式的核心组件。RLHFlow 提供的多种奖励建模方法为自我进化系统提供了高质量的自动评估能力。特别是 ArmoRM 的多目标设计和 Decision Tree RM 的可解释性，使得系统可以针对不同进化维度 (有用性、安全性、推理能力) 进行细粒度评估。SSRM 的自训练机制本身就是一个自我进化闭环。

## 分类
- **类别**: 奖励模型训练
- **标签**: reward-model, bradley-terry, armorRM, preference-learning, rewardbench, evaluation
