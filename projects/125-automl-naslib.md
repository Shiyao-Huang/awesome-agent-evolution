# NASLib - 神经架构搜索库
- **仓库**: automl/naslib
- **GitHub**: https://github.com/automl/naslib
- **Stars**: 591
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2024-11
- **模式**: 搜索循环

## 概述
NASLib 是 Freiburg 大学 AutoML 团队开发的神经架构搜索（NAS）研究库，提供了标准化的 NAS 基准、搜索空间和优化器实现。它旨在促进 NAS 研究的公平比较和可复现性，支持 NAS-Bench 系列、DARTS、ProxylessNAS 等主流方法和搜索空间。

## 核心特性
- 标准化 NAS 基准：集成 NAS-Bench-101/201/301、TransNAS-Bench-101 等基准
- 模块化搜索空间：Cell、Macro 搜索空间可灵活组合
- 多种 NAS 优化器：DARTS、GDAS、Random Search、Regularized Evolution 等
- 统一评测框架：公平比较不同 NAS 方法
- 可扩展架构：支持自定义搜索空间和优化器

## 技术栈
- Python, PyTorch
- NAS-Bench 基准数据集
- ConfigSpace

## 与 Self Evolve 的关联
NASLib 为 AI 系统自动发现最优神经网络架构提供了标准化的研究和评估平台，其自动化架构搜索能力是 AI 在模型设计层面实现自我进化的核心技术。

## 分类
- **类别**: 自动化 ML / AutoML
- **标签**: NAS, neural-architecture-search, benchmark, DARTS, AutoML
