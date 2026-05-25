# DEAP - 分布式进化算法框架
- **仓库**: DEAP/deap
- **GitHub**: https://github.com/DEAP/deap
- **Stars**: 6401
- **语言**: Python
- **许可**: LGPL-3.0
- **最近活跃**: 2026-04
- **模式**: 进化/搜索循环

## 概述
DEAP（Distributed Evolutionary Algorithms in Python）是最成熟、最广泛使用的 Python 进化计算框架之一。它提供了从遗传算法、遗传规划到进化策略、多目标优化的全面工具集，其透明的数据结构和显式的算法设计使得研究人员可以快速原型化和测试新想法。

## 核心特性
- 全面的进化算法覆盖：GA、GP、ES（含 CMA-ES）、PSO、DE、EDA 等
- 多目标优化：内置 NSGA-II、NSGA-III、SPEA2、MO-CMA-ES
- 高度可定制：支持任意表示（列表、数组、树、NumPy 数组等）
- 并行化支持：与 multiprocessing 和 SCOOP 无缝集成
- 族谱追踪：与 NetworkX 兼容的进化族谱记录

## 技术栈
- Python, NumPy
- multiprocessing, SCOOP
- NetworkX (族谱可视化)

## 与 Self Evolve 的关联
DEAP 作为进化计算的基础设施库，为 AI 系统通过进化方法实现自我改进提供了底层算法支持。其灵活的框架设计使得各种自我进化策略可以方便地构建和实验。

## 分类
- **类别**: 进化策略/ES
- **标签**: evolutionary-algorithms, genetic-programming, CMA-ES, multi-objective, Python-framework
