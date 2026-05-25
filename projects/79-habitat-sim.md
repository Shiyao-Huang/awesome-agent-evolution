# Habitat-Sim - 3D具身AI模拟器
- **仓库**: facebookresearch/habitat-sim
- **GitHub**: https://github.com/facebookresearch/habitat-sim
- **Stars**: ~2.8K
- **语言**: C++ / Python
- **许可**: MIT
- **最近活跃**: 2026-04
- **模式**: 训练/数据循环

## 概述
Habitat-Sim是Meta AI开发的高性能3D具身AI模拟平台，支持在真实3D扫描环境中训练和评估导航、交互等具身智能任务。它以极高的渲染速度支持大规模并行训练，是具身AI研究的核心基础设施。

## 核心特性
- 支持真实3D扫描环境（Matterport3D、Gibson等）
- 高性能渲染引擎，支持数千FPS并行模拟
- 灵活的传感器模型（RGB、深度、语义等）
- 与Habitat Lab集成，提供完整的训练-评估管线

## 技术栈
- C++
- Python
- Magnum (图形引擎)
- Bullet Physics
- CUDA

## 与 Self Evolve 的关联
Habitat-Sim为具身智能体提供了高保真模拟环境，支持智能体在安全环境中快速迭代和进化导航策略。

## 分类
- **类别**: 具身智能 Agent
- **标签**: simulation, 3d, embodied-ai, navigation, meta-ai, high-performance
