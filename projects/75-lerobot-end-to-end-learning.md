# LeRobot - 端到端机器人学习平台

| 字段 | 信息 |
|------|------|
| 仓库 | huggingface/lerobot |
| GitHub URL | https://github.com/huggingface/lerobot |
| Stars | 12k+ |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2026 年 5 月 |
| 模式 | 训练/数据循环, 智能体编排 |

## 概述

LeRobot 是 Hugging Face 开发的端到端机器人学习库，旨在降低机器人 AI 的门槛。它提供了从数据收集、模型训练到部署的完整工具链，支持多种先进的机器人策略模型（ACT、Diffusion Policy、VQ-BeT、Pi0 等），并提供标准化的数据集格式和硬件接口。

## 核心特性

- **多策略支持**：ACT、Diffusion Policy、VQ-BeT、TDMPC、Pi0/Pi0-FAST、GR00T N1.5、SmolVLA 等前沿模型
- **LeRobotDataset 格式**：标准化数据格式（Parquet + MP4），支持高效存储、流式传输和可视化
- **硬件无关接口**：统一 Robot 类接口，支持 SO-100、Koch、Reachy2、Unitree G1 等多种机器人
- **HF Hub 集成**：数据集和模型可直接托管在 Hugging Face Hub
- **端到端工作流**：从遥操作数据收集到模型训练再到实际部署的一体化流程

## 技术栈

- Python, PyTorch
- Hugging Face Hub / Transformers
- OpenCV, WandB
- 多种机器人硬件 SDK

## 与 Self Evolve 的关联

LeRobot 是训练/数据循环和智能体编排的综合平台：
- **训练/数据循环**：标准化的数据收集、训练、评估闭环，支持持续迭代改进
- **智能体编排**：统一的硬件接口和策略接口，便于组合不同模块构建机器人系统

## 分类

具身智能体方向中的机器人学习平台，属于「端到端机器人 AI 基础设施」。
