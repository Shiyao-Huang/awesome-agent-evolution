# Voyager - LLM 驱动的 Minecraft 具身智能体

| 字段 | 信息 |
|------|------|
| 仓库 | MineDojo/Voyager |
| GitHub URL | https://github.com/MineDojo/Voyager |
| Stars | 5.8k+ |
| 语言 | Python / JavaScript |
| 许可 | MIT |
| 最近活跃 | 2025 年 |
| 模式 | 智能体编排, 反思记忆 |

## 概述

Voyager 是 NVIDIA 研究团队开发的基于大语言模型（LLM）的 Minecraft 具身智能体，是首个在 Minecraft 开放世界中实现终身学习的 LLM 驱动智能体。它通过自动探索、技能库构建和迭代改进来实现持续自主学习，无需人类干预。

## 核心特性

- **自动课程（Automatic Curriculum）**：利用 GPT-4 根据智能体当前状态和探索进度自动生成适合难度的任务
- **技能库（Skill Library）**：将成功执行的复杂行为抽象为可复用的技能函数，并逐步构建可组合的技能体系
- **迭代提示机制（Iterative Prompting）**：当智能体执行失败时，通过环境反馈和错误信息由 GPT-4 修正代码，实现自我改进
- **终身学习**：无需人工标注，通过探索-反馈-改进循环不断积累新技能

## 技术栈

- Python, JavaScript (Mineflayer)
- GPT-4 / LLM API
- MineDojo 环境
- Minecraft 游戏引擎

## 与 Self Evolve 的关联

Voyager 是智能体编排和反思记忆模式的典型案例：
- **智能体编排**：LLM 充当决策中枢，编排探索、编程、反馈等模块协同工作
- **反思记忆**：技能库作为长期记忆，成功经验被编码存储，失败经验触发 GPT-4 的迭代修正
- **反馈-精炼**：代码执行失败的反馈被送回 LLM，生成修正后的代码

## 分类

具身智能体（Embodied Agent）方向中的 LLM 驱动开放世界探索与终身学习。
