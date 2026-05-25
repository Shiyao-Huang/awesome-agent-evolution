# Theia - 机器人视觉基础模型
- **仓库**: rai-opensource/theia
- **GitHub**: https://github.com/rai-opensource/theia
- **Stars**: ~300
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-12
- **模式**: 训练/数据循环

## 概述
Theia是一个专为机器人视觉理解设计的基础模型，通过从多个视觉基础模型中蒸馏知识，为下游机器人任务提供强大的视觉表征。它显著减少了机器人视觉任务所需的标注数据量。

## 核心特性
- 从多个视觉基础模型（DINO、MAE等）蒸馏知识
- 学习通用视觉表征，支持多种下游机器人任务
- 显著减少下游任务所需标注数据量
- 支持语义分割、深度估计等视觉任务

## 技术栈
- Python
- PyTorch
- Transformers (Hugging Face)
- OpenCV

## 与 Self Evolve 的关联
Theia通过知识蒸馏将通用视觉能力迁移到机器人领域，体现了"知识积累-迁移-精炼"的进化范式。

## 分类
- **类别**: 具身智能 Agent
- **标签**: vision-foundation-model, robotics, knowledge-distillation, embodied-ai
