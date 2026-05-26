# SayCan - LLM 机器人规划
- **仓库**: google-research/saycan (关联)
- **GitHub**: https://github.com/google-research/saycan
- **Stars**: 500
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2023-12
- **模式**: 智能体编排 → 反馈-精炼

## 概述
Google Research 的 SayCan 方法，让 LLM 通过语言指令规划机器人行为序列，结合 affordance 函数过滤不可行动作，实现开放式任务规划。

## 核心特性
- LLM 生成高层动作规划
- Affordance 函数过滤不可行动作
- 语言→技能→执行的层次化架构
- 开放式零样本任务执行

## 技术栈
- Python, Google PaLM API

## 与 Self Evolve 的关联
SayCan 的"规划→验证→执行"循环是自我进化在具身智能中的体现：LLM 规划能力与物理可行性验证结合。

## 分类
- **类别**: LLM 机器人规划
- **标签**: saycan, planning, affordance, google
