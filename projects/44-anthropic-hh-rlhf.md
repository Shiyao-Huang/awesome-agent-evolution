# Anthropic HH-RLHF - 人类反馈偏好数据集

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | anthropics/hh-rlhf |
| GitHub URL | https://github.com/anthropics/hh-rlhf |
| Stars | ~1,800 |
| 语言 | 数据集 (JSON) |
| 许可 | MIT |
| 最近活跃 | 已归档 (2025) |
| 模式 | 评估器/打分器 |

## 概述
HH-RLHF (Helpful and Harmless RLHF) 是 Anthropic 发布的开创性人类反馈偏好数据集，是 RLHF 研究领域的基准数据集之一。数据集包含人类标注的对话偏好对，每个样本包含 chosen 和 rejected 两个回复。数据集分为 Helpful (有用性) 和 Harmless (无害性) 两个子集，分别关注模型回复的帮助程度和安全性。尽管已归档，该数据集仍被广泛用于 RLHF 算法开发和学术论文中。

## 核心特性
- **双维度标注**: Helpful 和 Harmless 两个独立维度，支持多目标对齐
- **对话格式**: 每个样本为完整的多轮对话，更贴近实际使用场景
- **偏好对格式**: 标准 chosen-rejected 格式，可直接用于 DPO/PPO 训练
- **大规模**: 约 170K 偏好对 (Helpful) + 170K 偏好对 (Harmless)
- **基准地位**: 被用作 RLHF 论文的标准评估数据集

## 技术栈
- JSON 数据格式
- Hugging Face Datasets 可直接加载

## 与 Self Evolve 的关联
HH-RLHF 为 Self Evolve 系统提供了"评估器/打分器"模式的训练数据基础。其双维度 (Helpful + Harmless) 设计启发自我进化系统在评估时需要同时考虑有用性和安全性。该数据集的偏好对格式是构建自我评估闭环的参考范式：模型生成候选 -> 人类/AI 评估偏好 -> 偏好数据驱动模型进化。

## 分类
- **类别**: 偏好数据集
- **标签**: rlhf, dataset, preference, helpful, harmless, alignment, anthropic
