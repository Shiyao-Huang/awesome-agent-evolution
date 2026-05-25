# Robotics Transformer (RT-1) - 机器人端到端控制Transformer
- **仓库**: google-research/robotics_transformer
- **GitHub**: https://github.com/google-research/robotics_transformer
- **Stars**: ~1.7K
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2025-04
- **模式**: 训练/数据循环

## 概述
RT-1（Robotics Transformer 1）是Google Research提出的端到端机器人控制模型，将视觉输入和语言指令直接映射为机器人动作命令。该仓库包含RT-1的完整实现，包括Film EfficientNet图像tokenizer和Transformer策略网络。

## 核心特性
- Film EfficientNet图像tokenizer骨干网络
- Token Learner压缩输入token，提高推理效率
- Transformer架构实现端到端机器人控制
- 提供预训练检查点（700任务、EDR+Kuka联合训练、仿真+真实联合训练）

## 技术栈
- Python
- TensorFlow
- JAX
- Bazel

## 与 Self Evolve 的关联
RT-1展示了端到端学习如何让机器人通过数据驱动的训练循环持续改进控制策略，是具身智能领域训练/数据循环模式的代表。

## 分类
- **类别**: 具身智能 Agent
- **标签**: robotics, transformer, end-to-end-learning, rt-1, google-research
