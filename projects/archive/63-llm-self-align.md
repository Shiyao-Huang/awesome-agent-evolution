# LLM-Self-Align - 自对齐方法论
- **仓库**: xu1998hz/LLM-Self-Align
- **GitHub**: https://github.com/xu1998hz/LLM-Self-Align
- **Stars**: 200
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-05
- **模式**: 反馈-精炼 → 训练/数据循环

## 概述
LLM-Self-Align 提出系统化的自对齐方法论，通过 LLM 自身生成高质量的指令遵循数据，然后用这些数据微调自身，减少对人类标注的依赖。

## 核心特性
- LLM 自生成指令数据
- 质量过滤+自我评估
- 自动化对齐流程
- 多轮迭代自改进

## 技术栈
- Python, PyTorch, Transformers

## 与 Self Evolve 的关联
LLM-Self-Align 展示了"自我生成训练数据→自我评估→自我训练"的完整自对齐闭环，是自我进化的数据循环范式。

## 分类
- **类别**: 自对齐方法论
- **标签**: self-align, instruction-following, data-generation
