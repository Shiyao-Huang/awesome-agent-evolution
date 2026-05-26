# Magpie - 从零合成对齐数据
- **仓库**: magpie-align/magpie
- **GitHub**: https://github.com/magpie-align/magpie
- **Stars**: ~800
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2025-03
- **模式**: 训练/数据循环

## 概述
Magpie是一种从对齐LLM中自动合成对齐数据的方法。通过直接提取LLM的预训练模板(prompt template)来生成多样化的指令数据，无需任何种子指令或提示工程。该方法实现了完全从零开始的对齐数据合成，为模型自我进化提供了数据自生成的新范式。

## 核心特性
- 零种子指令的完全自动化数据合成
- 直接从对齐LLM的预训练模板中提取指令
- 生成的数据质量可与人工标注数据媲美

## 技术栈
- Python, PyTorch, Hugging Face Transformers, vLLM

## 与 Self Evolve 的关联
Magpie展示了模型自我生成训练数据的全新范式，通过直接从模型中提取隐含知识来构建训练数据，实现了完全自主的数据-训练闭环，是AI自我进化中数据自供给的关键技术。

## 分类
- **类别**: 自我对齐/自我奖励
- **标签**: data-synthesis, alignment, self-instruct, llm, zero-shot
