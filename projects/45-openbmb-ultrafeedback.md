# OpenBMB UltraFeedback - 偏好反馈数据集

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | OpenBMB/UltraFeedback |
| GitHub URL | https://github.com/OpenBMB/UltraFeedback |
| Stars | ~370 |
| 语言 | Python |
| 许可 | MIT |
| 最近活跃 | 2023-12 |
| 模式 | 训练/数据循环 |

## 概述
UltraFeedback 是 OpenBMB 发布的大规模偏好反馈数据集和生成框架。它包含 64K 条指令，每条指令由多个模型 (如 GPT-4, Llama-2-70B 等) 生成回复，并由 GPT-4 从多个维度进行细粒度评分和反馈。UltraFeedback 是当前 RLHF 社区最重要的开源偏好数据集之一，被广泛用于训练奖励模型 (如 ArmoRM) 和对齐微调 (如 Zephyr, OpenHermes)。

## 核心特性
- **多维度评分**: 每个回复从指令遵循、真实性、诚实度、帮助性等维度评分
- **多模型回复**: 每条指令有来自不同模型的多个回复，形成丰富的偏好对
- **GPT-4 评判**: 使用 GPT-4 作为评判者，提供高质量的人类偏好近似
- **大规模覆盖**: 64K 条指令涵盖多种任务类型
- **偏好数据管道**: 提供完整的数据生成流程，可扩展到新模型和新任务
- **衍生数据集**: 可生成 UltraFeedback-binarized 等多种格式

## 技术栈
- Python, OpenAI API (GPT-4 评判)
- Hugging Face Datasets
- VLLM/SGLang (模型推理)

## 与 Self Evolve 的关联
UltraFeedback 体现了 Self Evolve 中"训练/数据循环"模式的数据生成范式。其多维度评估方法 (而非简单的 chosen/rejected) 为自我进化系统提供了更丰富的反馈信号。数据生成管道本身就是一个自动化反馈系统：指令 -> 多模型生成 -> AI 评估 -> 偏好数据 -> 模型训练。这种范式可直接应用于自我进化系统的数据迭代循环。

## 分类
- **类别**: 偏好数据集/数据生成框架
- **标签**: preference-data, feedback, gpt-4-judge, reward-model-training, alignment
