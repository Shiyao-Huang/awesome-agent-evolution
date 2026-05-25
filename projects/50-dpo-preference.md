# DPO - 直接偏好优化
- **仓库**: ermongroup/DPO
- **GitHub**: https://github.com/ermongroup/DPO
- **Stars**: 2500
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-12
- **模式**: 反馈-精炼 → 训练/数据循环

## 概述
斯坦福 DPO（Direct Preference Optimization）的官方实现，将 RLHF 简化为直接偏好优化，无需单独训练奖励模型，通过策略模型直接从偏好数据学习。

## 核心特性
- 无需奖励模型的 RLHF 替代方案
- 直接从偏好对训练
- 训练稳定性显著优于 PPO
- 理论保证与 RLHF 等价

## 技术栈
- Python, PyTorch, Transformers

## 与 Self Evolve 的关联
DPO 展示了"反馈-精炼"循环的简化路径：直接从偏好反馈优化模型，是自我进化系统中无需显式评估器的替代方案。

## 分类
- **类别**: 直接偏好优化
- **标签**: dpo, preference-optimization, rlhf-free, stanford
