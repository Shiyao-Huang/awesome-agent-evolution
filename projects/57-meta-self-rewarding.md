# Meta Self-Rewarding - Meta自我奖励语言模型
- **仓库**: facebookresearch/meta-self-rewarding-lm
- **GitHub**: https://github.com/facebookresearch/meta-self-rewarding-lm
- **Stars**: ~600
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2024-05
- **模式**: 反馈-精炼

## 概述
Meta AI研究院提出的自我奖励语言模型框架，让LLM通过自我生成训练数据和自我评估质量来迭代改进。该研究表明，模型可以通过自我指令跟随和自我偏好评估在多个迭代轮次中持续提升性能，实现了从模型到评估器再到改进模型的闭环。

## 核心特性
- 模型自生成指令和响应作为训练数据
- 自我评估机制替代外部奖励模型
- 多轮迭代训练实现持续性能提升

## 技术栈
- Python, PyTorch, Hugging Face Transformers

## 与 Self Evolve 的关联
该项目是AI自我进化的里程碑式工作，证明了模型可以通过自我奖励机制在多轮迭代中持续进化，无需依赖外部人类反馈或奖励模型，为构建完全自主的自我进化AI系统提供了理论基础。

## 分类
- **类别**: 自我对齐/自我奖励
- **标签**: self-rewarding, iterative-training, self-improvement, alignment, meta-ai
