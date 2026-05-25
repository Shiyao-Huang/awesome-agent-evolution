# Facebook Self-Align Research - 自对齐研究

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | facebookresearch/self-align (参考) |
| GitHub URL | https://github.com/facebookresearch/self-align |
| Stars | ~150 |
| 语言 | Python |
| 许可 | MIT |
| 最近活跃 | 2024 |
| 模式 | 训练/数据循环 |

## 概述
Facebook Research 的 Self-Align 项目探索了如何利用 LLM 自身能力来减少对齐过程中的人类干预。该项目研究了一系列自对齐技术，包括使用 LLM 生成高质量的指令遵循数据、自我评估和过滤、以及通过自我反馈进行迭代优化。项目与 Meta AI 的 Self-Rewarding Language Models 研究紧密关联，共同推动了自对齐方法的前沿发展。

## 核心特性
- **自动化数据生成**: 使用 LLM 生成多样化的指令和回复对
- **质量过滤**: 多维度自动过滤低质量生成数据
- **自我评估**: 模型对自身输出进行质量评估
- **迭代改进**: 多轮自对齐迭代持续提升模型质量
- **最小人类输入**: 仅需极少种子示例即可启动自对齐流程
- **评估框架**: 标准化的自对齐效果评估方法

## 技术栈
- Python, PyTorch, Hugging Face Transformers
- LLaMA 系列模型
- AlpacaEval, MT-Bench (评估)

## 与 Self Evolve 的关联
Facebook Self-Align 为 Self Evolve 系统提供了"训练/数据循环"模式的工业级参考。其在最小化人类输入方面的研究直接服务于自我进化系统的自主性目标。自动化数据生成和质量过滤方法为自我进化系统的数据管道提供了实用工具。

## 分类
- **类别**: 自对齐研究
- **标签**: self-alignment, data-generation, self-evaluation, minimal-human-input, meta
