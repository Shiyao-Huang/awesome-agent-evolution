# Self Evolve 论文笔记目录

> 最后更新：2026-05-22

本目录存放按主题分类的论文精读笔记。

## 目录结构

```
papers/
├── cross-domain/           # 跨领域研究综述（AutoML/NAS/LLM自改进/进化计算/Agent框架）
├── llm-self-improvement/   # LLM 自我改进方向（Self-Refine/Self-Debug/Self-Play/Constitutional AI/STaR/Reflexion）
└── README.md               # 本文件
```

## 关联目录

- 详细论文精读笔记（12 篇核心论文）：[research/papers/](../research/papers/)
- 论文评审（137 篇）：[paper-reviews/](../paper-reviews/)
- 全产出索引：[CONTENT_INDEX.md](../CONTENT_INDEX.md)

## 论文笔记格式标准

所有论文笔记应遵循以下中文统一格式：

```markdown
---
title: "论文中文名"
arxiv: "arXiv ID"
authors: "作者列表"
year: 发表年份
venue: "发表会议/期刊"
tags: [标签1, 标签2]
date: "YYYY-MM-DD"
---

# 论文中文名

> 原标题：English Title
> arXiv: ID | 发表信息

## 摘要

一句话中文摘要。

## 核心方法

### 方法架构
（描述核心方法、算法流程）

### 关键公式
| 组件 | 公式 | 说明 |
|------|------|------|

## 基准测试与结果

| 基准 | 方法 | 指标 | 结果 |
|------|------|------|------|

## 作者与机构

## 局限性

## 引用上下文
（与 Self Evolve 的关联、在研究网络中的位置）
```

## 子目录说明

### cross-domain/

跨领域研究图谱，覆盖 5 个交叉领域：
1. AutoML + LLM
2. NAS + LLM
3. LLM 自我改进与反思
4. 进化计算 + LLM
5. AI Agent 框架进化模块

### llm-self-improvement/

LLM 自我改进方向论文笔记，覆盖：
- Self-Refine（迭代式自反馈精炼）
- Self-Debug（自调试）
- Self-Play（自博弈微调）
- Constitutional AI（宪法 AI）
- STaR（自学推理者）
- Reflexion（语言反思强化学习）

> 状态：进行中（Researcher-2 负责）
