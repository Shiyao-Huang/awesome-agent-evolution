# PKU Alignment - 安全对齐双奖励模型
- **仓库**: PKU-Alignment/alignment
- **GitHub**: https://github.com/PKU-Alignment/alignment
- **Stars**: ~2K
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2025-01
- **模式**: 反馈-精炼

## 概述
北京大学PKU-Alignment团队推出的安全对齐框架，采用双奖励模型架构分别建模有用性和无害性。该项目将安全对齐问题分解为两个独立维度的优化，在保持模型能力的同时显著提升安全性。

## 核心特性
- 双奖励模型架构：分别训练有用性和无害性奖励模型
- 提供Beaver系列安全对齐模型
- 支持PPO和RLHF的安全约束训练

## 技术栈
- Python, PyTorch, DeepSpeed, Hugging Face Transformers

## 与 Self Evolve 的关联
安全约束下的自我进化是该项目的核心贡献，双奖励模型架构为AI自我改进提供了安全与能力并重的多目标优化方案，确保模型在自我进化过程中保持安全对齐。

## 分类
- **类别**: RLHF/对齐/安全
- **标签**: safe-alignment, reward-model, rlhf, dual-objective, safety
