# Robotics Transformer (RT-1) - 机器人操作的基础模型

| 字段 | 信息 |
|------|------|
| 仓库 | google-research/robotics_transformer |
| GitHub URL | https://github.com/google-research/robotics_transformer |
| Stars | 1.7k+ |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2025 年（已归档） |
| 模式 | 训练/数据循环 |

## 概述

Robotics Transformer (RT-1) 是 Google Research 开发的基于 Transformer 的机器人操作模型。它通过接收摄像头图像和自然语言指令作为输入，直接输出机器人需要执行的动作token序列。RT-1 是机器人大模型领域的开创性工作，展示了 Transformer 架构在机器人控制中的可行性。

## 核心特性

- **Vision-Language-Action 模型**：将图像观察和语言指令映射为机器人动作序列
- **Tokenized Action Space**：将连续动作空间离散化为token，使Transformer可以直接生成动作
- **多任务学习**：单个模型可以执行数百种不同的操作任务
- **泛化能力**：对新指令、新物体和新环境具有良好的泛化性能

## 技术栈

- Python, TensorFlow, JAX
- Transformer 架构 (ViT + Token Learner)
- EfficientNet 视觉编码器

## 与 Self Evolve 的关联

RT-1 体现了训练/数据循环模式：
- **训练/数据循环**：通过大规模机器人数据集训练，模型能力的提升依赖于数据的持续积累和模型的迭代改进
- 该项目为后续的 Open X-Embodiment 和 RT-2/X 系列奠定了基础

## 分类

具身智能体方向中的机器人基础模型，属于「基础模型驱动机器人操作」范式。
