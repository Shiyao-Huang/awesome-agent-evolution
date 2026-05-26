# Self-Refine - 迭代自我精炼（经典）
- **仓库**: madaan/self-refine
- **GitHub**: https://github.com/madaan/self-refine
- **Stars**: 805
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2024-10
- **模式**: 反馈-精炼

## 概述
Self-Refine 经典实现，用同一个 LLM 生成初稿、生成反馈、再根据反馈迭代精炼，无需外部训练或强化学习，是自改进的基本范式。

## 核心特性
- 单一 LLM 同时充当生成器和批评者
- 无需额外训练或微调
- 多轮迭代精炼闭环
- 适用于代码生成、文本改写等多任务

## 技术栈
- Python, OpenAI API

## 与 Self Evolve 的关联
Self-Refine 是自我进化系统中最基础的"反馈-精炼"循环实现，是所有迭代改进范式的原型。

## 分类
- **类别**: 迭代自我精炼
- **标签**: self-refine, iterative, feedback, refinement
