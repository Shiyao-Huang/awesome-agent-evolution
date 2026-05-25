# pyribs - 质量多样性优化库
- **仓库**: icaros-usc/pyribs
- **GitHub**: https://github.com/icaros-usc/pyribs
- **Stars**: 261
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2026-05
- **模式**: 进化/搜索循环

## 概述
pyribs 是一个轻量级、模块化的质量多样性（Quality Diversity, QD）优化库，由南加州大学 iCAROS 实验室开发。它提供了 MAP-Elites、CMA-ME、CMA-MAE 等前沿 QD 算法的统一实现，旨在让研究人员和工程师能够轻松应用和组合不同的 QD 方法。

## 核心特性
- 模块化 QD 算法框架：支持 MAP-Elites、CMA-ME、CMA-MAE、DSGE 等多种 QD 算法
- 灵活的 archive 设计：支持网格 archive、CVT archive、sliding boundary 等
- 基础进化操作器：提供 Gaussian、Gradient、ES 等多种进化操作器
- 丰富的教程和文档：包含从入门到进阶的 Jupyter Notebook 教程

## 技术栈
- Python, NumPy, SciPy
- CMA-ES (pycma)
- Matplotlib, Seaborn (可视化)

## 与 Self Evolve 的关联
pyribs 的质量多样性优化理念与 AI 自我进化高度相关——不仅要找到最优解，还要维护一组多样化的高质量方案，这为 AI 系统的探索性自我改进提供了关键的方法论支持。

## 分类
- **类别**: 进化策略/ES
- **标签**: quality-diversity, MAP-Elites, CMA-ES, black-box-optimization, evolutionary-computation
