# Meta Self-Rewarding Language Models - 自我奖励语言模型论文

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | meta-llama (参考论文: Self-Rewarding Language Models) |
| GitHub URL | https://arxiv.org/abs/2401.10020 |
| Stars | N/A (论文) |
| 语言 | Python (参考实现) |
| 许可 | 学术使用 |
| 最近活跃 | 2024-01 |
| 模式 | 评估器/打分器 |

## 概述
Self-Rewarding Language Models 是 Meta AI 提出的开创性研究，提出了让语言模型通过自我生成训练信号来实现持续改进的范式。核心思想是在迭代训练中，模型同时充当生成器、评估器和优化器三个角色：(1) 生成多个候选回复；(2) 使用 LLM-as-Judge 方式为每个回复打分；(3) 使用 DPO 在高分和低分回复之间进行偏好优化。实验证明，经过多轮迭代后，模型不仅在指令遵循上持续提升，其自我评估能力也随之增强。

## 核心特性
- **三位一体**: 模型同时扮演生成器、评估器、优化器
- **LLM-as-Judge**: 使用 next-token prediction 输出评分 (如 "Rating: 8/10")
- **迭代自改进**: 多轮迭代中生成和评估能力同步提升
- **DPO 训练**: 使用偏好对进行 Direct Preference Optimization
- **评估能力涌现**: 自我评估能力随迭代提升，出现 "能力涌现" 现象
- **超越外部 RM**: 实验证明自我奖励模型可以超越使用外部奖励模型训练的模型

## 技术栈
- Python, PyTorch
- LLaMA-2 系列模型
- DPO 算法实现

## 与 Self Evolve 的关联
Self-Rewarding LM 论文是 Self Evolve 理论的基础文献之一。它证明了自我进化是可行的——模型可以通过自我评估和自我优化实现持续改进，无需外部人类反馈。评估能力的"涌现"现象表明，自我进化不仅是可行的，而且可能产生超出预期的能力提升。这为构建完全自主的自我进化系统提供了理论依据。

## 分类
- **类别**: 自我奖励研究
- **标签**: self-rewarding, self-improvement, llm-as-judge, dpo, iterative-training, meta-ai
