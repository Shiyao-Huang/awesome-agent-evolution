# OpenPI - 开源视觉-语言-动作模型

| 字段 | 信息 |
|------|------|
| 仓库 | Physical-Intelligence/openpi |
| GitHub URL | https://github.com/Physical-Intelligence/openpi |
| Stars | 5k+ |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2026 年 5 月 |
| 模式 | 训练/数据循环 |

## 概述

OpenPI 是 Physical Intelligence 公司开源的机器人基础模型项目，包含 pi0、pi0-FAST 和 pi0.5 三种 Vision-Language-Action (VLA) 模型。这些模型在超过 1 万小时的机器人数据上预训练，并提供了在 DROID、ALOHA、LIBERO 等平台上的微调示例。

## 核心特性

- **pi0 Flow Matching VLA**：基于流匹配的视觉-语言-动作模型
- **pi0-FAST 自回归 VLA**：基于 FAST 动作 tokenizer 的自回归 VLA 变体
- **pi0.5 知识隔离**：升级版 pi0，通过知识隔离实现更好的开放世界泛化
- **预训练基础模型**：在 10k+ 小时机器人数据上预训练的通用基础检查点
- **PyTorch + JAX 双支持**：同时提供 JAX 和 PyTorch 实现

## 技术栈

- Python, JAX, PyTorch
- LeRobot 数据集格式
- Weights & Biases (训练监控)
- FSDP 分布式训练

## 与 Self Evolve 的关联

OpenPI 体现了训练/数据循环模式：
- **训练/数据循环**：大规模预训练 + 特定任务微调的范式，通过持续的数据积累和模型迭代实现自我进化
- **反馈-精炼**：支持从基础模型出发，通过下游任务的微调反馈来改进模型表现

## 分类

具身智能体方向中的机器人基础模型，属于「视觉-语言-动作大模型」。
