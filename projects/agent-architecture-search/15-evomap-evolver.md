# EvoMap Evolver: GEP 协议进化引擎

> GitHub: https://github.com/EvoMap/evolver
> Stars: 7,300+ | 语言: Node.js | License: GPL-3.0
> 论文: arXiv:2604.15097
> 网站: https://evomap.ai

---

## 核心定位

基于 **GEP (Genome Evolution Protocol)** 协议的自进化引擎。将 Agent 经验编码为"基因 (Gene)"和"胶囊 (Capsule)"，实现可审计、可复用的进化资产管理。7.3K stars 说明社区高度认可。

## 核心概念

### GEP 协议 (Genome Evolution Protocol)

```
Agent 经验 → 编码为 Gene → 进化优化 → 输出 GEP Prompt → 应用
                ↓
           存储为 Capsule（可共享、可审计）
```

### Gene vs Skill 对比

| 维度 | Skill (文档) | Gene (GEP) |
|------|-------------|------------|
| 稳定性 | 不稳定、稀疏控制信号 | 紧凑、鲁棒 |
| 抗扰动 | 差 | 强 |
| 迭代积累 | 弱 | 强 |
| 进化载体 | 差 | **最佳** |

### 关键数据

- **4,590 次对照实验**，45 个科学代码场景
- Gene 进化系统：基础模型从 9.1% → **18.57%**（+9.47pp）
- Gene 进化系统：基础模型从 17.7% → **27.14%**（+9.44pp）

## 技术栈

- **语言**: Node.js ≥ 18
- **安装**: `npm install -g @evomap/evolver`
- **运行**: 在任何 git 仓库中执行 `evolver`
- **依赖**: Git（用于回滚和变更追踪）

## 核心特性

- **协议约束进化**: GEP 协议确保进化过程可审计
- **Gene 编码**: 经验编码为紧凑的基因表示
- **审计追踪**: 所有进化变更有完整记录
- **共享进化**: EvoMap 网络支持 Agent 间共享基因

## 争议

- 2026 年 3 月，Hermes Agent Self-Evolution 被指控抄袭 Evolver 的记忆/技能/进化资产设计
- Evolver 因此从完全开源转为 source-available

## Self Evolve 关联

- **基础设施层**: 为 Agent 自进化提供协议级基础设施
- **Gene 范式**: 将进化从"文档级"提升到"基因级"
- **跨 Agent 共享**: GEP 网络支持不同 Agent 共享进化成果
- **7.3K stars**: 社区认可度最高的自进化基础设施项目

## 本地路径

`repos/evomap__evolver/`
