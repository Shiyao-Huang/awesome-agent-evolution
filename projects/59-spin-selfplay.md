# SPIN - 自我对弈微调方法
- **仓库**: uclaml/SPIN
- **GitHub**: https://github.com/uclaml/SPIN
- **Stars**: ~1.2K
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2024-09
- **模式**: 进化/搜索循环

## 概述
UCLA提出的Self-Play Fine-Tuning(SPIN)方法，利用模型与自身先前版本的对弈来实现对齐。SPIN无需额外的人类偏好数据或奖励模型，通过让当前模型区分自己生成的响应和人类标注数据来实现自我改进。

## 核心特性
- 无需人类偏好数据和奖励模型的对齐方法
- 基于自我对弈的训练范式，模型与前版本进行博弈
- 理论上证明了SPIN等价于KL正则化的RLHF目标函数

## 技术栈
- Python, PyTorch, DeepSpeed, Hugging Face Transformers

## 与 Self Evolve 的关联
SPIN展示了自我对弈作为自我进化机制的强大潜力，通过模型与自身历史版本的博弈实现持续进化，为不依赖外部反馈的纯内生自我进化提供了理论保障和实践方案。

## 分类
- **类别**: 自我对齐/自我奖励
- **标签**: self-play, alignment, dpo, fine-tuning, spin, no-reward-model
