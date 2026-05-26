# SPIN - 自博弈微调
- **仓库**: uclaml/SPIN
- **GitHub**: https://github.com/uclaml/SPIN
- **Stars**: 800
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2024-08
- **模式**: 进化/搜索循环 → 训练/数据循环

## 概述
UCLA 提出的 Self-Play Fine-Tuning 方法，让 LLM 与自己前一轮的生成进行博弈，无需额外人类标注数据即可实现对齐，理论上可从弱到强持续改进。

## 核心特性
- 自博弈（Self-Play）微调范式
- 无需人类偏好数据
- 弱到强（Weak-to-Strong）改进路径
- 理论收敛性保证

## 技术栈
- Python, PyTorch, Transformers, DeepSpeed

## 与 Self Evolve 的关联
SPIN 的自博弈机制是自我进化的另一种范式：通过与自身历史版本对抗来驱动改进，类似 AlphaGo 的自我对弈训练。

## 分类
- **类别**: 自博弈对齐
- **标签**: spin, self-play, alignment, weak-to-strong
