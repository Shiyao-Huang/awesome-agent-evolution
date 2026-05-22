# AgentEvolver: 高效自进化 Agent 训练框架

> GitHub: https://github.com/modelscope/AgentEvolver
> Stars: 300+ | 语言: Python | License: Apache 2.0
> 论文: arXiv:2511.10395
> 机构: **阿里达摩院 (Alibaba DAMO Academy)**
> 文档: https://modelscope.github.io/AgentEvolver/

---

## 核心定位

端到端自进化训练框架，统一**自提问、自导航、自归因**三大机制。让 Agent 从环境中自主生成任务、总结经验、进行细粒度策略优化。

## 三大自进化机制

### 1. Self-Questioning (自提问)

- Agent 探索环境并**自主创建多样化任务**
- 消除昂贵的人工数据集构建
- 覆盖更多任务空间

### 2. Self-Navigating (自导航)

- 总结和**复用跨任务经验**
- 引导更高质量的 rollout
- 提高探索效率

### 3. Self-Attributing (自归因)

- 处理长轨迹，**发现中间步骤的因果贡献**
- 实现细粒度策略优化
- 解决长轨迹中的信用分配问题

## 技术栈

- **架构**: 服务化数据流架构
- **模块**: 环境沙箱 + LLM 服务 + 经验管理
- **语言**: Python 3.11+
- **兼容**: 标准化接口支持多种环境

## 性能

| 模型 | AppWorld avg@8 | BFCL v3 avg@8 | 总平均 |
|------|----------------|----------------|--------|
| Qwen2.5-7B 基线 | 1.8% | 29.8% | 15.8% |
| + Self-Questioning | **23.2%** | **49.0%** | **36.1%** |

- 7B 参数模型达到接近大模型的效果
- AppWorld 从 1.8% 提升到 23.2% (+21.4pp)

## 扩展生态

- **SeeUPO**: 序列级 Agent RL，收敛性保证
- **CuES**: 扩展自提问方法
- **Game Arena**: 多 Agent 社交推理竞技场（Avalon、Diplomacy）

## Self Evolve 关联

- **工业界标杆**: 阿里出品，面向实际部署
- **三位一体**: 自提问+自导航+自归因 完整覆盖自进化链条
- **服务化架构**: 模块化设计便于集成新环境和新算法
- **与 Absolute Zero 互补**: AZ 聚焦零数据，AgentEvolver 聚焦工程化

## 本地路径

`repos/modelscope__agentevolver/`
