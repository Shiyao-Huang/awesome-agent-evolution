# pyMAP-Elites - MAP-Elites 质量多样性算法
- **仓库**: resibots/pymap_elites
- **GitHub**: https://github.com/resibots/pymap_elites
- **Stars**: 97
- **语言**: Python
- **许可**: NOASSERTION
- **最近活跃**: 2023-09
- **模式**: 进化/搜索循环

## 概述
pyMAP-Elites 是 MAP-Elites 算法的 Python 参考实现，由 ResiBots 团队开发。MAP-Elites 是质量多样性优化的奠基性算法，它通过在行为特征空间中维护一组高性能且多样化的解，使搜索过程既追求性能又保证覆盖度。

## 核心特性
- MAP-Elites 核心实现：完整的 MAP-Elites 算法流程，包括变异数据注入
- 行为描述符灵活定义：用户可自定义行为特征空间
- Archive 可视化：提供 archive 中解的分布可视化工具
- 机器人控制案例：包含机器人步态优化等经典案例

## 技术栈
- Python, NumPy
- scikit-learn (降维可视化)

## 与 Self Evolve 的关联
MAP-Elites 算法体现了 "进化中保持多样性" 的核心思想，这对 AI 自我演化系统至关重要——不仅要追求最优，还需在解决方案空间中维持丰富的多样性，以应对环境变化和未知挑战。

## 分类
- **类别**: 进化策略/ES
- **标签**: MAP-Elites, quality-diversity, behavioral-diversity, robotics, evolutionary-computation
