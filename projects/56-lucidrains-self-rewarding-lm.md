# Self-Rewarding LM PyTorch - 自我奖励语言模型

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | lucidrains/self-rewarding-lm-pytorch |
| GitHub URL | https://github.com/lucidrains/self-rewarding-lm-pytorch |
| Stars | ~2,000 |
| 语言 | Python |
| 许可 | MIT |
| 最近活跃 | 2024 |
| 模式 | 训练/数据循环 |

## 概述
Self-Rewarding LM PyTorch 是由 Phil Wang (lucidrains) 实现的 Meta AI 论文 "Self-Rewarding Language Models" 的训练框架。该项目提供了完整的自我奖励训练管道：模型首先进行 SFT，然后为自身生成的回复打分 (LLM-as-Judge)，使用 DPO 在高分和低分回复之间进行偏好优化。项目还额外实现了 SPIN (Self-Play Fine-Tuning) 算法，支持 SFT、自我奖励 DPO、外部奖励 DPO 和 SPIN 的任意顺序组合。

## 核心特性
- **Self-Rewarding DPO**: 模型自身充当奖励模型，为生成的回复打分
- **LLM-as-Judge**: 使用模型自身的 next-token prediction 能力进行评分
- **SPIN 训练**: Self-Play Fine-Tuning，通过自我博弈将弱模型转化为强模型
- **灵活训练管道**: 支持任意顺序组合 SFT、Self-Reward DPO、External Reward DPO、SPIN
- **自定义评估 Prompt**: 支持自定义 reward prompt 模板和正则表达式提取
- **Checkpoint 管理**: 每个训练阶段自动保存 checkpoint
- **pip 安装**: `pip install self-rewarding-lm-pytorch`

## 技术栈
- Python, PyTorch, x-transformers
- Hugging Face Accelerate
- DPO (Direct Preference Optimization)

## 与 Self Evolve 的关联
Self-Rewarding LM 是 Self Evolve 系统中"训练/数据循环"模式的核心参考实现。它展示了最纯粹的自我进化范式：模型自己生成候选、自己评估、自己选择偏好、自己优化。这种自我奖励闭环消除了对外部奖励模型的依赖，实现了完全自主的进化。其灵活的训练管道设计也展示了自我进化系统可以通过混合多种训练策略来加速收敛。

## 分类
- **类别**: 自我奖励训练框架
- **标签**: self-rewarding, dpo, spin, self-play, llm-as-judge, training-loop
