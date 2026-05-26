# UltraFeedback - 大规模偏好反馈数据集
- **仓库**: openbmb/UltraFeedback
- **GitHub**: https://github.com/openbmb/UltraFeedback
- **Stars**: 1500
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2025-06
- **模式**: 训练/数据循环

## 概述
清华 OpenBMB 发布的大规模指令遵循偏好数据集，包含 64K 指令的多模型响应及 GPT-4 评分标注，是当前最广泛使用的开源 RLHF 训练数据之一。

## 核心特性
- 64K 指令的多模型响应偏好标注
- GPT-4 自动评分（细粒度分数）
- 覆盖多个评估维度（有用性、诚实性等）
- 衍生出 UltraRM 奖励模型

## 技术栈
- Python, JSONL, GPT-4 评分

## 与 Self Evolve 的关联
UltraFeedback 展示了自动评分驱动的偏好数据生成流程，这是自我进化系统中"LLM 作为评估器"模式的重要实践。

## 分类
- **类别**: 偏好数据集
- **标签**: ultrafeedback, preference, dataset, gpt4, openbmb
