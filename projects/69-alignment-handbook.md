# Alignment Handbook - 合成数据对齐指南
- **仓库**: huggingface/alignment-handbook
- **GitHub**: https://github.com/huggingface/alignment-handbook
- **Stars**: ~4.5K
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2026-04
- **模式**: 训练/数据循环

## 概述
Hugging Face推出的对齐手册是一个完整的LLM对齐训练框架，涵盖从SFT到DPO/RLHF的全流程。该框架支持合成数据生成和对齐训练，提供了标准化的配置驱动训练流程，使研究者能够快速复现和改进对齐方法。

## 核心特性
- 完整的SFT到DPO/RLHF对齐训练流水线
- 配置驱动的训练流程，支持YAML配置
- 集成合成数据生成和多样化对齐算法

## 技术栈
- Python, PyTorch, DeepSpeed, Hugging Face Transformers, TRL, PEFT

## 与 Self Evolve 的关联
Alignment Handbook为模型自我进化提供了标准化的对齐训练工具链，其合成数据生成能力使模型能够自主创建训练数据进行自我改进，是构建自我进化系统的实用基础设施。

## 分类
- **类别**: 自我对齐/自我奖励
- **标签**: alignment, dpo, rlhf, sft, synthetic-data, huggingface
