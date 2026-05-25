# MatterGen - AI材料生成
- **仓库**: microsoft/mattergen
- **GitHub**: https://github.com/microsoft/mattergen
- **Stars**: ~800
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2025-09
- **模式**: 反馈-精炼

## 概述
MatterGen是微软研究院推出的AI材料生成模型，基于扩散模型生成具有目标性质的新型材料结构。它可以直接生成满足特定磁性、电子、机械等属性要求的晶体结构。

## 核心特性
- 基于扩散模型的材料结构生成
- 支持条件生成（目标属性引导）
- 涵盖多种材料属性（磁性、电子、力学等）
- 可与第一性原理计算验证结合形成反馈闭环

## 技术栈
- Python
- PyTorch
- ASE (Atomic Simulation Environment)
- pymatgen
- Diffusion Models

## 与 Self Evolve 的关联
MatterGen通过生成-验证-反馈的闭环实现材料发现的自我进化，生成的候选材料经过DFT计算验证后反馈给模型进行精炼改进。

## 分类
- **类别**: AI4Science
- **标签**: materials-science, diffusion-model, crystal-generation, microsoft, inverse-design
