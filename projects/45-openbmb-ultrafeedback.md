# UltraFeedback - 大规模细粒度偏好反馈数据集
- **仓库**: OpenBMB/UltraFeedback
- **GitHub**: https://github.com/OpenBMB/UltraFeedback
- **Stars**: ~2K
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2024-01
- **模式**: 训练/数据循环

## 概述
UltraFeedback是一个大规模、细粒度、多样化的偏好数据集，包含64K提示和256K响应。该数据集使用GPT-4从指令遵循、真实性、诚实性和有用性四个维度进行细粒度标注，并附带训练好的奖励模型UltraRM和评论模型UltraCM。

## 核心特性
- 64K提示、256K响应、约340K比较对，覆盖6种数据源和17种模型
- 四维度细粒度标注：指令遵循、真实性、诚实性、有用性
- 附带SOTA奖励模型UltraRM和评论模型UltraCM

## 技术栈
- Python, PyTorch, Hugging Face Transformers, GPT-4标注

## 与 Self Evolve 的关联
高质量偏好数据是模型自我进化的核心驱动力，UltraFeedback提供了多样化的偏好信号来源，配合UltraRM奖励模型可构建自动化的模型评估和迭代改进循环。

## 分类
- **类别**: RLHF/对齐/安全
- **标签**: preference-dataset, reward-model, feedback, rlhf, alignment
