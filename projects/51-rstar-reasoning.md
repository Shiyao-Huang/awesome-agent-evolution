# rStar - 自我推理+MCTS
- **仓库**: ZhiningLiu-nlp/rStar
- **GitHub**: https://github.com/ZhiningLiu-nlp/rStar
- **Stars**: 500
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2025-06
- **模式**: 进化/搜索循环 → 反思记忆

## 概述
rStar（Self-Taught Reasoner）通过 MCTS 搜索+自我推理+相互一致性验证，让小型 LLM 自主生成高质量推理轨迹，实现自我改进。

## 核心特性
- MCTS 搜索扩展推理空间
- 多轮自我推理生成
- 相互一致性（Mutual Consistency）验证
- 小模型通过自学习接近大模型表现

## 技术栈
- Python, vLLM, PyTorch

## 与 Self Evolve 的关联
rStar 是"进化/搜索循环+自我评估"的典型实现：MCTS 搜索生成候选→自我验证筛选→迭代改进，是自我进化的推理增强范式。

## 分类
- **类别**: 自我推理优化
- **标签**: rstar, mcts, self-reasoning, reasoning
