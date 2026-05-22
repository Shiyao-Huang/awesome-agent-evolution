# SE-Agent: 自进化轨迹优化

> GitHub: https://github.com/JARVIS-Xs/SE-Agent
> Stars: 200+ | 语言: Python | License: MIT
> 论文: arXiv:2508.02085 | 会议: **NeurIPS 2025 Poster**
> 生态: RepoMaster (Spotlight) + GitTaskBench

---

## 核心定位

**轨迹级进化**框架。通过多推理路径间的信息交换，突破单轨迹认知限制。在 SWE-bench Verified 上达到 **80% (Top1 开源框架)**。

## 核心机制

### 轨迹级进化

```
多个推理路径并行 → 路径间信息交换 → 集体交互涌现能力
```

- **打破单轨迹限制**: 传统方法每条路径独立推理
- **信息交换**: 路径间共享关键发现和中间结果
- **逃离局部最优**: 多路径协同搜索更大解空间
- **涌现能力**: 集体交互产生超越个体的能力

### 性能

| 基准 | 结果 |
|------|------|
| **SWE-bench Verified** | **80% (Top1 开源)** |
| 跨 LLM 提升 | DeepSeek, GPT-4 等均显著提升 |

## 技术栈

- **语言**: Python
- **依赖**: DeepSeek API (主要) + 其他 LLM API
- **安装**: `pip install -e .`

## 生态项目

| 项目 | 说明 |
|------|------|
| **RepoMaster** | NeurIPS 2025 Spotlight — 利用 GitHub 仓库解决复杂任务 |
| **GitTaskBench** | Repo 级别 Benchmark & 工具集 |
| **SE-Agent** | 本项目 — 自进化轨迹框架 |

## Self Evolve 关联

- **轨迹进化**: 将进化搜索从 Agent 架构扩展到推理轨迹
- **SWE-bench 冠军**: 证明了自进化方法在代码修复领域的实用性
- **NeurIPS 2025 双收**: SE-Agent (Poster) + RepoMaster (Spotlight ≈3.2%)
- **QuantaAlpha 团队**: 新兴研究团队，聚焦自进化 Agent

## 本地路径

`repos/jarvis_xs__se_agent/`
