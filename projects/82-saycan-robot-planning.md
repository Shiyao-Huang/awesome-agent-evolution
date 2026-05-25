# SayCan - 基于语言模型的机器人任务规划

| 字段 | 信息 |
|------|------|
| 仓库 | google-research/google_robotics_transformer (关联) |
| GitHub URL | https://github.com/google-research/robotics_transformer |
| Stars | 1.7k+ |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2025 年 |
| 模式 | 智能体编排, 反馈-精炼 |

## 概述

SayCan（Say what you Can do）是 Google Research 提出的将大型语言模型（LLM）与机器人底层技能相结合的框架。LLM 作为高层规划器生成自然语言描述的步骤序列，而机器人的可执行技能库（"Can"部分）通过学习的"可行性"函数来验证每一步在当前状态下是否可执行。只有 LLM 提议且可行性高的技能才会被执行。

## 核心特性

- **LLM 规划 + 技能验证**：LLM 生成高层任务分解，机器人验证每一步的可执行性
- **可行性评分**：每个基础技能配有一个 learned affordance function，评估当前状态下的执行成功率
- **迭代规划**：每步执行后重新查询 LLM，实现动态任务规划
- **自然语言接口**：用户通过自然语言下达指令，无需编程

## 技术栈

- Python
- 大型语言模型 (PaLM / GPT 系列)
- RT-1 等底层技能策略
- TensorFlow / JAX

## 与 Self Evolve 的关联

SayCan 是智能体编排和反馈-精炼的典型案例：
- **智能体编排**：LLM 编排多个底层机器人技能，形成复杂的任务执行链
- **反馈-精炼**：每步执行后的环境状态反馈给 LLM，驱动下一步规划的调整

## 分类

具身智能体方向中的 LLM 机器人规划，属于「语言模型驱动的任务分解与执行」。
