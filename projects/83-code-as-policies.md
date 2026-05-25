# Code as Policies - 代码驱动机器人控制
- **仓库**: google-research/code-as-policies
- **GitHub**: https://github.com/google-research/code-as-policies
- **Stars**: ~1.5K
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2024-06
- **模式**: 进化/搜索循环

## 概述
Code as Policies是Google Research提出的方法，利用LLM直接生成可执行的Python代码作为机器人控制策略。通过将语言指令转化为代码程序，实现了灵活的、可组合的机器人行为生成。

## 核心特性
- LLM直接生成可执行Python代码控制机器人
- 支持空间几何推理和数学计算
- 代码的可组合性允许复杂任务的层次化分解
- 无需额外微调，利用预训练LLM的编程能力

## 技术栈
- Python
- Large Language Models
- NumPy
- PyBullet / Real Robot APIs

## 与 Self Evolve 的关联
Code as Policies将代码生成作为策略进化的一种形式，LLM生成的代码通过环境反馈持续改进，是进化/搜索循环在机器人控制中的创新应用。

## 分类
- **类别**: 具身智能 Agent
- **标签**: code-generation, robotics, llm-policy, language-to-code, google-research
