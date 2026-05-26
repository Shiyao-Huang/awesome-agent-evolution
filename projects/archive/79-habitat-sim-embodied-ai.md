# Habitat-Sim - 具身 AI 3D 仿真器

| 字段 | 信息 |
|------|------|
| 仓库 | facebookresearch/habitat-sim |
| GitHub URL | https://github.com/facebookresearch/habitat-sim |
| Stars | 3.5k+ |
| 语言 | C++ / Python |
| 许可 | MIT |
| 最近活跃 | 2026 年 5 月 |
| 模式 | 训练/数据循环 |

## 概述

Habitat-Sim 是 Meta (Facebook) AI Research 开发的高性能 3D 仿真平台，专为具身 AI 研究设计。它支持 3D 扫描的室内外场景、CAD 模型和可配置的传感器（RGB-D 相机等），并在渲染 Matterport3D 数据集时能达到每秒数千帧的性能。Habitat-Sim 通常与 Habitat-Lab 配合使用，提供端到端的具身 AI 实验环境。

## 核心特性

- **高性能渲染**：单线程即可达到数千 FPS，多进程超过 10,000 FPS
- **物理仿真**：通过 Bullet 物理引擎支持刚体和关节动力学
- **丰富的 3D 场景**：内置支持 HM3D、HSSD、Matterport3D、Gibson、Replica 等数据集
- **多机器人支持**：通过 URDF 描述支持 Fetch、Franka、AlienGo 等机器人
- **灵活传感器**：可配置 RGB-D 相机、自我运动感知等

## 技术栈

- C++ (核心引擎), Python (API)
- Bullet 物理引擎
- Magnum 图形库
- Conda / Pip 安装

## 与 Self Evolve 的关联

Habitat-Sim 是训练/数据循环的关键基础设施：
- **训练/数据循环**：为具身智能体提供高速仿真环境，支持大规模强化学习训练和数据收集
- 高性能仿真使得智能体可以在短时间内积累大量经验，加速自我进化过程

## 分类

具身智能体方向中的仿真平台，属于「3D 具身 AI 训练基础设施」。
