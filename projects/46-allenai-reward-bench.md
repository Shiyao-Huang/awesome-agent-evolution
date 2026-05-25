# AllenAI RewardBench - 奖励模型基准

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | allenai/reward-bench |
| GitHub URL | https://github.com/allenai/reward-bench |
| Stars | ~715 |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2026-02 |
| 模式 | 评估器/打分器 |

## 概述
RewardBench 是 Allen AI (AI2) 开发的奖励模型评估基准，旨在系统化地评估奖励模型在 RLHF 中的表现。它提供了一套标准化的评估框架，覆盖 Chat、Chat Hard、Safety、Reasoning 等多个能力维度。RewardBench 已成为奖励模型评估的社区标准，各大模型训练团队在发布新奖励模型时都会报告 RewardBench 分数。项目还包含 RewardBench 2.0，扩展了评估范围和难度。

## 核心特性
- **多维度评估**: Chat, Chat Hard, Safety, Reasoning, Prior Sets 五个评估维度
- **标准化排行榜**: 公开的奖励模型排行榜，支持横向对比
- **RewardBench 2.0**: 扩展版本，增加更多挑战性样本和评估维度
- **模型覆盖**: 支持评估 Bradley-Terry RM、Pairwise PM、LLM-as-Judge 等多种 RM 类型
- **集成评估**: 一条命令即可评估本地或远程奖励模型
- **数据集**: 包含精心构造的偏好对，覆盖各种边缘情况

## 技术栈
- Python, Hugging Face Transformers
- Datasets, evaluate
- vLLM (推理加速)

## 与 Self Evolve 的关联
RewardBench 为 Self Evolve 系统提供了"评估器/打分器"模式的质量保证机制。在自我进化系统中，奖励模型的质量直接决定进化方向是否正确。RewardBench 的多维度评估 (特别是 Safety 和 Reasoning) 确保了自我评估信号在关键维度上的可靠性。其标准化评估方法也是构建自我进化系统评估基础设施的参考模板。

## 分类
- **类别**: 奖励模型评估基准
- **标签**: reward-model, benchmark, evaluation, safety, reasoning, alignment
