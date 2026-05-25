# RLAIF - AI 反馈强化学习

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | CarperAI/RLAIF (参考) |
| GitHub URL | https://github.com/CarperAI/trlx (相关仓库) |
| Stars | ~2,500 |
| 语言 | Python |
| 许可 | MIT |
| 最近活跃 | 2024 |
| 模式 | 评估器/打分器 |

## 概述
RLAIF (Reinforcement Learning from AI Feedback) 是将 RLHF 中的人类反馈替换为 AI 系统反馈的对齐方法。该方法由 Anthropic 在论文 "Constitutional AI" 中提出并推广，核心思想是使用一个 AI 模型 (通常是更强的 LLM) 来替代人类进行偏好标注和安全评估。RLAIF 通过预定义的"宪法" (Constitution) 规则指导 AI 评估，实现了对齐过程的自动化和规模化。CarperAI 的 trlx 框架提供了 RLAIF 训练的实现支持。

## 核心特性
- **AI-as-Judge**: 使用 AI 模型替代人类进行偏好评估
- **Constitutional AI**: 通过预定义规则 (宪法) 指导 AI 评估过程
- **递归改进**: 支持 RLAIF 递归应用于自身，实现持续改进
- **规模化**: 消除了人类标注的瓶颈，可以大规模生成偏好数据
- **多维度评估**: 支持从有用性、安全性、诚实性等多维度评估
- **成本降低**: 相比人类标注，大幅降低对齐成本

## 技术栈
- Python, PyTorch, CarperAI trlx
- OpenAI API / Anthropic API
- Hugging Face Transformers

## 与 Self Evolve 的关联
RLAIF 是 Self Evolve 系统中"评估器/打分器"模式的核心范式。它证明了 AI 系统可以在没有人类直接参与的情况下实现自我对齐——这正是自我进化的关键前提。Constitutional AI 的规则驱动评估为自我进化系统提供了安全约束的框架。递归 RLAIF 更是直接展示了"AI 评估 -> 改进 -> AI 再评估"的自我进化闭环。

## 分类
- **类别**: AI 反馈对齐
- **标签**: rlaif, constitutional-ai, ai-feedback, self-alignment, automated-evaluation
