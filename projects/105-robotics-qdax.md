# QDax - 质量多样性加速框架
- **仓库**: adaptive-intelligent-robotics/QDax
- **GitHub**: https://github.com/adaptive-intelligent-robotics/QDax
- **Stars**: 352
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2025-10
- **模式**: 进化/搜索循环

## 概述
QDax 是基于 JAX 的质量多样性（Quality Diversity）优化框架，专注于高性能硬件加速。由自适应智能机器人研究团队开发，它将 MAP-Elites、CMA-ME 等经典 QD 算法通过 JAX 实现了 GPU/TPU 加速，使大规模 QD 搜索成为可能。

## 核心特性
- JAX 全栈加速：所有 QD 算法均基于 JAX 实现，支持 GPU/TPU 加速
- 丰富的 QD 算法集：MAP-Elites、CMA-ME、PGA-ME、OMG-MEGA 等
- 与 Brax 集成：直接支持 Brax 机器人模拟环境
- 可微分 QD：支持结合梯度和进化的混合优化方法

## 技术栈
- Python, JAX, Flax
- Brax (机器人模拟)
- NumPy

## 与 Self Evolve 的关联
QDax 展示了如何通过硬件加速让质量多样性搜索在复杂空间中高效运行，为 AI 系统在高维参数空间中自动发现多样化高性能方案提供了工具基础。

## 分类
- **类别**: 进化策略/ES
- **标签**: quality-diversity, JAX, MAP-Elites, robotics, hardware-acceleration
