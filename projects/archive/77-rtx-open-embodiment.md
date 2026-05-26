# RT-X - Open X-Embodiment 机器人学习

| 字段 | 信息 |
|------|------|
| 仓库 | kyegomez/RT-X |
| GitHub URL | https://github.com/kyegomez/RT-X |
| Stars | 241+ |
| 语言 | Python |
| 许可 | MIT |
| 最近活跃 | 2026 年 5 月 |
| 模式 | 训练/数据循环 |

## 概述

RT-X 是 Open X-Embodiment 项目的 PyTorch 开源实现，旨在通过跨实体（cross-embodiment）学习构建通用机器人策略。该项目汇集了来自全球 21 个机构、22 种不同机器人的数据，训练出了可以在不同机器人平台上泛化的 RT-1-X 和 RT-2-X 模型。

## 核心特性

- **跨实体学习**：在多种机器人平台的数据上联合训练，实现跨机器人迁移
- **RT-1-X 实现**：基于 Transformer 的高效机器人策略网络
- **RT-2-X 实现**：结合视觉-语言模型的知识增强策略
- **PyTorch 原生**：纯 PyTorch 实现，便于研究和扩展

## 技术栈

- Python, PyTorch
- Transformer 架构
- Open X-Embodiment 数据集

## 与 Self Evolve 的关联

RT-X 是训练/数据循环的典型代表：
- **训练/数据循环**：通过不断积累多实体机器人数据和迭代训练模型，实现机器人策略的持续进化
- 跨实体学习范式为自我进化提供了更丰富的数据来源

## 分类

具身智能体方向中的跨实体机器人学习，属于「通用机器人策略」。
