# Microsoft LLM-Adaptive-Testing - 自适应测试

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | microsoft/LLM-Adaptive-Testing |
| GitHub URL | https://github.com/microsoft/LLM-Adaptive-Testing |
| Stars | ~100 |
| 语言 | Python |
| 许可 | MIT |
| 最近活跃 | 2024 |
| 模式 | 评估器/打分器 |

## 概述
LLM-Adaptive-Testing 是微软研究院提出的 LLM 自适应评估框架。传统的 LLM 评估使用固定的基准数据集，无法根据模型能力动态调整评估难度。LLM-Adaptive-Testing 借鉴教育测量学中的自适应测试 (如 CAT) 思想，根据模型当前表现动态选择评估样本的难度，从而更准确、更高效地评估模型的真实能力水平。这种方法也为自我进化系统提供了更精确的能力评估手段。

## 核心特性
- **自适应难度**: 根据模型当前能力动态调整测试难度
- **能力估计**: 基于 IRT (项目反应理论) 估计模型能力参数
- **高效评估**: 使用更少的样本达到更准确的能力估计
- **多维评估**: 支持从多个维度评估模型能力
- **项目池管理**: 维护不同难度级别的评估项目池
- **标准基准兼容**: 与 MMLU、GSM8K 等标准基准集成

## 技术栈
- Python, PyTorch
- IRT (项目反应理论) 实现
- Hugging Face Transformers

## 与 Self Evolve 的关联
LLM-Adaptive-Testing 为 Self Evolve 系统提供了"评估器/打分器"模式的精准评估工具。在自我进化过程中，准确评估模型当前能力对于选择正确的进化方向至关重要。自适应测试确保了评估的效率和准确性——不会因为测试太简单或太难而浪费评估资源。其 IRT 理论框架也为自我进化系统的能力追踪提供了量化基础。

## 分类
- **类别**: 自适应评估
- **标签**: adaptive-testing, evaluation, irt, capability-assessment, microsoft
