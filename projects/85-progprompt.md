# ProgPrompt - 程序化机器人提示工程
- **仓库**: google-research/progprompt
- **GitHub**: https://github.com/google-research/progprompt
- **Stars**: ~400
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2024-05
- **模式**: 反馈-精炼

## 概述
ProgPrompt是Google Research提出的程序化提示方法，将机器人任务规划转化为结构化的程序生成问题。通过在提示中嵌入环境状态和执行反馈，LLM能够生成更可靠的机器人行动计划。

## 核心特性
- 将任务规划转化为结构化程序生成
- 在提示中嵌入环境状态和执行反馈
- 支持条件分支和循环等程序结构
- 执行失败时的自动重规划和错误恢复

## 技术栈
- Python
- Large Language Models
- VirtualHome / Habitat
- OpenAI API

## 与 Self Evolve 的关联
ProgPrompt通过执行反馈驱动的重规划机制体现了反馈-精炼模式，智能体根据环境反馈持续优化生成的行动计划。

## 分类
- **类别**: 具身智能 Agent
- **标签**: programmatic-prompting, robotics, task-planning, llm, google-research
