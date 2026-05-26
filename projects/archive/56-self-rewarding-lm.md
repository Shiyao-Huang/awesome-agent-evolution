# Self-Rewarding LMs - 自我奖励语言模型
- **仓库**: lucidrains/self-rewarding-lm-pytorch
- **GitHub**: https://github.com/lucidrains/self-rewarding-lm-pytorch
- **Stars**: 400
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-06
- **模式**: 评估器/打分器 → 训练/数据循环

## 概述
Meta Self-Rewarding Language Models 论文的 PyTorch 实现，让 LLM 自己生成训练数据并自己评分（自我奖励），通过迭代自训练持续改进模型质量。

## 核心特性
- 模型自行生成候选并自行评分
- 迭代自训练闭环
- Self-Instruction Fine-Tuning 方法
- 理论上可无限迭代改进

## 技术栈
- Python, PyTorch

## 与 Self Evolve 的关联
Self-Rewarding LMs 是"自我评估→自我训练"闭环的典型实现，模型同时充当生成器和评估器，是自我进化的核心范式。

## 分类
- **类别**: 自我奖励训练
- **标签**: self-rewarding, self-training, iterative
