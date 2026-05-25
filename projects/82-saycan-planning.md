# SayCan - LLM机器人任务规划
- **仓库**: google-research/saycan
- **GitHub**: https://github.com/google-research/saycan
- **Stars**: ~1.8K
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2024-09
- **模式**: 评估器/打分器

## 概述
SayCan是Google Research提出的LLM机器人规划方法，通过将语言模型的规划能力与机器人可执行技能的可行性评分相结合，让LLM生成的计划能够在真实世界中落地执行。它开创了LLM+机器人领域的研究方向。

## 核心特性
- LLM生成高层任务计划，亲和度模型评估可行性
- 技能库中的原语技能与语言描述对齐
- 在真实机器人上验证的完整管线
- 结合语言理解和物理可行性的双重评分机制

## 技术栈
- Python
- TensorFlow / JAX
- Google PaLM
- ROS

## 与 Self Evolve 的关联
SayCan的双重评分机制（LLM规划+可行性评估）是评估器/打分器模式的典型应用，通过持续反馈优化语言模型到物理动作的映射。

## 分类
- **类别**: 具身智能 Agent
- **标签**: llm-planning, robotics, saycan, affordance, google-research
