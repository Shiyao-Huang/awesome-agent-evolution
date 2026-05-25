# GFlowNet - 科学发现的生成流网络
- **仓库**: GFNOrg/gflownet
- **GitHub**: https://github.com/GFNOrg/gflownet
- **Stars**: ~500
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2025-08
- **模式**: 进化/搜索循环

## 概述
GFlowNet（Generative Flow Networks）是Yoshua Bengio团队提出的用于科学发现的生成框架，通过学习与奖励成正比的采样策略，高效探索分子、蛋白质等大型组合空间中的多样候选解。

## 核心特性
- 按奖励比例采样，保证候选解的多样性
- 适用于分子设计、药物发现、生物序列优化
- 支持多种GFlowNet训练算法（Flow Matching、Detailed Balance等）
- 可与主动学习循环结合，实现迭代式科学发现

## 技术栈
- Python
- PyTorch
- RDKit
- NumPy
- Matplotlib

## 与 Self Evolve 的关联
GFlowNet通过生成-评估-反馈的迭代循环实现科学发现的自动化，是进化/搜索循环模式在组合优化和科学发现领域的创新应用。

## 分类
- **类别**: AI4Science
- **标签**: gflownet, generative-model, scientific-discovery, molecular-design, diversity
