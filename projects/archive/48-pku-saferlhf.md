# PKU-Alignment SafeRLHF - 安全对齐双奖励模型
- **仓库**: PKU-Alignment/alignment
- **GitHub**: https://github.com/PKU-Alignment/alignment
- **Stars**: 2000
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2025-08
- **模式**: 评估器/打分器 → 训练/数据循环

## 概述
北京大学团队发布的安全 RLHF 框架，使用双奖励模型（有用性+安全性）同时优化两个目标，解决传统 RLHF 中安全性和有用性的冲突问题。

## 核心特性
- 双奖励模型架构（helpfulness + safety）
- SafeRLHF 对齐算法
- Beaver 奖励模型系列
- PKU-SafeRLHF 偏好数据集

## 技术栈
- Python, PyTorch, Transformers, DeepSpeed

## 与 Self Evolve 的关联
SafeRLHF 的双评估器设计展示了自我进化系统中如何同时优化多个目标，是多维度自我改进的重要参考。

## 分类
- **类别**: 安全 RLHF
- **标签**: safe-rlhf, alignment, dual-reward, pku
