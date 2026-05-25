# Meta Self-Rewarding - 自我奖励语言模型研究
- **仓库**: facebookresearch/meta-self-rewarding-lm
- **GitHub**: https://github.com/facebookresearch/meta-self-rewarding-lm
- **Stars**: 300
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-03
- **模式**: 评估器/打分器 → 训练/数据循环

## 概述
Meta（Facebook）AI Research 发布的自我奖励语言模型研究代码，展示 LLM 通过自我生成训练数据和自我评分实现迭代自我改进的方法。

## 核心特性
- LLM 同时充当生成器和评判器
- 自我指令生成+自我评分训练
- 多轮迭代持续改进
- 在 AlpacaEval 上超越 GPT-4

## 技术栈
- Python, PyTorch, Transformers

## 与 Self Evolve 的关联
Meta Self-Rewarding 验证了"模型自己评估自己"的可行性，是自我进化系统中评估器与被评估对象合一的实验基础。

## 分类
- **类别**: 自我奖励研究
- **标签**: self-rewarding, meta, llm-judge, iterative
