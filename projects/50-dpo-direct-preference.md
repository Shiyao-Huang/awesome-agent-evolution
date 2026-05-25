# DPO (Direct Preference Optimization) - 直接偏好优化

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | eric-mitchell/direct-preference-optimization (参考实现) |
| GitHub URL | https://github.com/eric-mitchell/direct-preference-optimization |
| Stars | ~900 |
| 语言 | Python |
| 许可 | MIT |
| 最近活跃 | 2024 |
| 模式 | 训练/数据循环 |

## 概述
DPO (Direct Preference Optimization) 是斯坦福大学提出的开创性对齐算法，它绕过了传统 RLHF 中需要显式训练奖励模型和使用 PPO 进行强化学习的复杂流程。DPO 直接利用偏好数据 (chosen/rejected 对) 通过简单的分类损失函数优化语言模型策略，将 RLHF 问题转化为一个简单的二分类问题。DPO 的理论保证 (隐式奖励模型) 和工程简洁性使其成为当前最流行的对齐方法之一。

## 核心特性
- **无需奖励模型**: 直接从偏好数据学习策略，跳过显式 RM 训练
- **简化训练流程**: 从 SFT -> RM -> PPO 简化为 SFT -> DPO
- **理论保证**: 证明 DPO 优化的策略等价于 KL 约束下的奖励最大化
- **稳定性**: 避免了 PPO 训练中的不稳定性问题
- **参考实现**: 提供完整的训练代码和评估脚本
- **衍生算法**: 激发了 IPO, SLiC, KTO, ORPO, SimPO 等大量后续工作

## 技术栈
- Python, PyTorch, Hugging Face Transformers
- Datasets, Wandb

## 与 Self Evolve 的关联
DPO 为 Self Evolve 系统提供了"训练/数据循环"模式中最简洁的训练方案。在自我进化系统中，DPO 使得每轮迭代只需要收集偏好对数据即可进行模型更新，无需维护复杂的奖励模型和 PPO 训练管道。这种简化大大降低了自我进化系统的工程复杂度。DPO 的迭代版本 (Iterative DPO, Online DPO) 更是与自我进化范式完美契合。

## 分类
- **类别**: 对齐算法
- **标签**: dpo, preference-optimization, alignment, rlhf, direct-optimization
