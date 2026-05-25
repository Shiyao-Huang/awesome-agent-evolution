# Self-Play Fine-Tuning - 弱到强自博弈
- **仓库**: ZHAOTING/self-play-finetuning
- **GitHub**: https://github.com/ZHAOTING/self-play-finetuning
- **Stars**: 100
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-04
- **模式**: 进化/搜索循环 → 训练/数据循环

## 概述
自博弈微调方法的研究实现，探索 LLM 如何通过与自身历史版本的博弈实现从弱到强的持续改进，是 self-play 范式在 LLM 对齐中的应用。

## 核心特性
- 模型与自身历史版本对抗
- 弱到强的持续改进路径
- 无需外部奖励信号
- 多轮迭代提升

## 技术栈
- Python, PyTorch, Transformers

## 与 Self Evolve 的关联
自博弈微调展示了自我进化系统中"与过去自我竞争"的改进机制，每次迭代都是对自身能力的超越。

## 分类
- **类别**: 自博弈对齐
- **标签**: self-play, weak-to-strong, finetuning, alignment
