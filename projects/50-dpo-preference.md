# DPO - 直接偏好优化参考实现
- **仓库**: ermongroup/DPO
- **GitHub**: https://github.com/ermongroup/DPO
- **Stars**: ~1.5K
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-06
- **模式**: 反馈-精炼

## 概述
DPO(Direct Preference Optimization)是斯坦福大学提出的直接偏好优化方法的参考实现。DPO通过将RLHF中的奖励模型隐式化，直接利用偏好数据优化策略模型，避免了训练单独奖励模型的复杂性，极大简化了对齐训练流程。

## 核心特性
- 直接从偏好数据优化策略，无需显式奖励模型
- 数学上等价于RLHF但训练更简单稳定
- 提供完整的训练代码和复现实验

## 技术栈
- Python, PyTorch, Hugging Face Transformers, TRL

## 与 Self Evolve 的关联
DPO通过简化偏好优化流程降低了自我进化的门槛，模型可以直接从偏好反馈中学习改进，无需维护独立的奖励模型，为高效的AI自我进化提供了轻量级的优化方案。

## 分类
- **类别**: RLHF/对齐/安全
- **标签**: dpo, preference-optimization, rlhf, alignment, fine-tuning
