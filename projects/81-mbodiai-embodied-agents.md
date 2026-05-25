# Embodied Agents - 机器人具身智能体框架

| 字段 | 信息 |
|------|------|
| 仓库 | mbodiai/embodied-agents |
| GitHub URL | https://github.com/mbodiai/embodied-agents |
| Stars | 286+ |
| 语言 | Python |
| 许可 | MIT |
| 最近活跃 | 2025 年 12 月 |
| 模式 | 智能体编排 |

## 概述

Embodied Agents 是 Mbodi AI 开发的开源框架，旨在将基础模型（如 GPT-4V、LLaMA 等）转化为可实际控制的机器人智能体。它提供了统一的接口，使 LLM/VLM 可以感知环境、做出决策并控制机器人执行动作，支持模拟器和真实机器人的无缝切换。

## 核心特性

- **VLM/LLM 集成**：将视觉-语言模型作为决策核心，理解场景并生成动作指令
- **统一接口**：模拟器与真实机器人共享同一 API，降低从仿真到实物的迁移成本
- **模块化架构**：感知、规划、控制模块可独立替换和升级
- **多任务支持**：支持抓取、导航、操作等多种机器人任务

## 技术栈

- Python
- GPT-4V / LLaMA 等 LLM/VLM API
- PyBullet / MuJoCo (仿真)
- ROS 兼容

## 与 Self Evolve 的关联

Embodied Agents 体现了智能体编排模式：
- **智能体编排**：LLM/VLM 作为编排中枢，协调感知、决策、控制等模块
- **反馈-精炼**：通过环境反馈（如操作失败）驱动 LLM 重新规划和决策

## 分类

具身智能体方向中的 LLM 驱动机器人框架，属于「基础模型驱动机器人控制」。
