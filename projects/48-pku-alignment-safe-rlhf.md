# PKU-Alignment SafeRLHF - 安全对齐训练框架

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | PKU-Alignment/safe-rlhf (已迁移至 PKU-Alignment/alignment) |
| GitHub URL | https://github.com/PKU-Alignment/alignment |
| Stars | ~2,500 |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2025 |
| 模式 | 训练/数据循环 |

## 概述
SafeRLHF 是北京大学 PKU-Alignment 团队开发的安全对齐训练框架，专注于解决 RLHF 中的安全性问题。该框架提出了一种双奖励模型方法——同时训练有用性奖励模型和无害性奖励模型，通过多目标优化 (Lagrangian 方法) 平衡模型的帮助性和安全性。项目还发布了 Beaver 系列模型和 PKU-SafeRLHF 偏好数据集，为安全对齐研究提供了重要的基准和工具。

## 核心特性
- **双奖励模型**: 分别训练 helpfulness 和 harmlessness 两个奖励模型
- **Lagrangian 优化**: 通过拉格朗日乘子动态平衡有用性与安全性之间的权衡
- **Safe-RLHF 数据集**: 大规模人类标注的安全性偏好数据集
- **Beaver 模型**: 基于 LLaMA 的安全对齐模型系列
- **多算法支持**: 支持 Safe-RLHF (PPO 变体)、Safe-DPO 等算法
- **完整训练管道**: 从数据预处理到模型训练到评估的完整流程
- **Cost Model**: 将安全性约束建模为 cost model，使用约束优化求解

## 技术栈
- Python, PyTorch, Hugging Face Transformers
- DeepSpeed, Accelerate (分布式训练)
- Beam Search, Constrained Decoding

## 与 Self Evolve 的关联
SafeRLHF 的双奖励模型设计为 Self Evolve 系统提供了"训练/数据循环"模式中安全性保障的参考方案。自我进化系统在迭代提升能力的同时，需要确保不会进化出有害行为。SafeRLHF 的 Lagrangian 约束优化方法使得自我进化系统可以在能力提升和安全性之间实现动态平衡。其 cost model 概念也可应用于自我进化系统的安全边界控制。

## 分类
- **类别**: 安全对齐训练框架
- **标签**: safe-rlhf, alignment, safety, dual-reward, constrained-optimization, pku
