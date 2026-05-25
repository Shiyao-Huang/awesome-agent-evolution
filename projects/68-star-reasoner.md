# STaR - 自学推理器
- **仓库**: starreasoner/STaR
- **GitHub**: https://github.com/starreasoner/STaR
- **Stars**: ~300
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-03
- **模式**: 反馈-精炼

## 概述
STaR(Self-Taught Reasoner)是一种让LLM通过自我生成推理链来提升推理能力的方法。该框架通过让模型先尝试解题、然后利用正确答案进行合理性推断(rationalization)来学习自我生成推理步骤，实现了推理能力的自我进化。

## 核心特性
- 自我生成推理链的迭代训练方法
- 合理性推断(rationalization)机制增强学习效果
- 在数学和常识推理任务上显著提升少样本性能

## 技术栈
- Python, PyTorch, Hugging Face Transformers

## 与 Self Evolve 的关联
STaR展示了推理能力的自我进化路径，通过模型自己生成和改进推理步骤来提升认知能力，这种基于自我推理的学习范式是AI自我进化在认知层面的重要实践。

## 分类
- **类别**: 自我对齐/自我奖励
- **标签**: self-taught, reasoning, chain-of-thought, rationalization, self-improvement
