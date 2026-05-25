# Self-Refine - 迭代自我精炼方法
- **仓库**: madaan/self-refine
- **GitHub**: https://github.com/madaan/self-refine
- **Stars**: ~1.5K
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-06
- **模式**: 反馈-精炼

## 概述
Self-Refine是卡内基梅隆大学提出的经典迭代自我精炼框架。该方法让LLM通过生成-反馈-精炼的多轮循环来改进自身输出，无需额外训练或外部模型辅助。在代码优化、学术论文写作、数学推理等多个任务上展现了显著的效果提升。

## 核心特性
- 零额外训练的自我改进方法，仅依赖推理时迭代
- 生成-反馈-精炼的三阶段闭环结构
- 在代码生成、文本写作、数学推理等多种任务上有效

## 技术栈
- Python, OpenAI API, Hugging Face Transformers

## 与 Self Evolve 的关联
Self-Refine是推理阶段自我进化的经典范式，通过模型对自身输出的审视和改进实现性能提升，这种无需训练参数的自我进化方式为构建轻量级自我改进系统提供了基础方案。

## 分类
- **类别**: 自我对齐/自我奖励
- **标签**: self-refine, iterative, inference-time, self-improvement, feedback
