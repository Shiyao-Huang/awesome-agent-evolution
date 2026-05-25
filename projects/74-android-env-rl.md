# Android Env - Android 强化学习环境

| 字段 | 信息 |
|------|------|
| 仓库 | google-deepmind/android_env |
| GitHub URL | https://github.com/google-deepmind/android_env |
| Stars | 800+ |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2025 年 |
| 模式 | 训练/数据循环 |

## 概述

Android Env 是 Google DeepMind 开发的 Android 系统强化学习环境，为智能体提供了一个与真实 Android 应用交互的仿真平台。它允许智能体通过观察屏幕图像并执行触摸、滑动、输入等操作来与 Android 应用程序交互，是研究移动端具身智能体的重要工具。

## 核心特性

- **完整的 Android 仿真**：基于 Android 模拟器，支持真实 Android 应用
- **多模态观察空间**：提供屏幕截图、UI 层次结构、辅助功能树等多种观察方式
- **丰富的动作空间**：支持触摸、滑动、按键、文本输入等操作
- **任务定义框架**：灵活的奖励函数设计，支持多种任务定义方式
- **与 RL 框架集成**：兼容 dm_env 接口，可轻松对接各种 RL 算法

## 技术栈

- Python
- Android Emulator / Android Virtual Device
- dm_env (DeepMind Environment API)
- Protocol Buffers

## 与 Self Evolve 的关联

Android Env 是训练/数据循环模式的平台支撑：
- **训练/数据循环**：智能体通过与 Android 环境的持续交互收集经验数据，用于改进策略
- 为移动端具身智能体的自我进化提供了环境基础

## 分类

具身智能体方向中的仿真环境与平台，属于「GUI 智能体训练基础设施」。
