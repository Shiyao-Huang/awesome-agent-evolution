# Code as Policies - 代码驱动的机器人策略生成

| 字段 | 信息 |
|------|------|
| 仓库 | google-research/robotics_transformer (关联项目) |
| GitHub URL | https://github.com/google-research/robotics_transformer |
| Stars | 1.7k+ |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2025 年 |
| 模式 | 反馈-精炼, 智能体编排 |

## 概述

Code as Policies (CaP) 是 Google Research 提出的一种利用 LLM 直接生成可执行 Python 代码来控制机器人的方法。与 SayCan 不同，CaP 不是从预定义技能库中选择，而是让 LLM 根据感知信息和任务描述直接编写控制代码（包括 API 调用、循环、条件语句等），使机器人获得更灵活的策略生成能力。

## 核心特性

- **代码生成策略**：LLM 直接生成可执行的 Python 控制代码
- **感知引导生成**：利用 3D 场景理解和物体检测信息辅助代码生成
- **无预定义技能限制**：不依赖固定的技能库，可以组合基本动作 API 生成新行为
- **自然语言到代码**：用户指令通过 LLM 翻译为机器人控制代码

## 技术栈

- Python
- 大型语言模型 (Codex / GPT-4)
- 3D 场景理解模块
- 机器人 API（移动、抓取等原语）

## 与 Self Evolve 的关联

Code as Policies 是反馈-精炼模式的典型代表：
- **反馈-精炼**：执行代码的输出（成功/失败/中间状态）作为反馈，驱动 LLM 修正和改进代码
- **智能体编排**：LLM 编排底层机器人 API 的调用序列

## 分类

具身智能体方向中的 LLM 代码生成控制，属于「语言模型驱动的机器人编程」。
