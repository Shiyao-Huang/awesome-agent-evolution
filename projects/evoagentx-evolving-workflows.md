# EvoAgentX: Automated Framework for Evolving Agentic Workflows

## 基本信息

| 字段 | 内容 |
|---|---|
| 论文 | 2507.03616 — EvoAgentX: An Automated Framework for Evolving Agentic Workflows |
| 作者 | Yingxu Wang, Siwei Liu, Jinyuan Fang, Zaiqiao Meng |
| 机构 | University of Sheffield, 等多机构 |
| 发表时间 | 2025-07 |
| 进化层级 | L4 (Workflow/Architecture Evolution) |
| 优化范式 | Hybrid (TextGrad + AFlow + MIPRO) |
| 代码 | https://github.com/EvoAgentX/EvoAgentX |
| 关联 Survey | 2508.07407 — A Comprehensive Survey of Self-Evolving AI Agents |

## 1. 任务定义

EvoAgentX 解决的核心问题是：如何自动化多 Agent 工作流的生成、执行和进化优化。现有 MAS 框架通常需要手工配置工作流，且缺乏对动态进化优化的原生支持。EvoAgentX 提供了一个统一平台，集成三种优化算法（TextGrad、AFlow、MIPRO），迭代优化 Agent prompt、工具配置和工作流拓扑。

## 2. 方法核心

### 2.1 改进对象
- **c** (prompts): Agent 提示词
- **g** (workflow topology): 工作流图结构（节点是 agent，边是依赖关系）
- **工具配置**: 每个 agent 的工具选择和参数

### 2.2 变异算子 U
三种进化算法：
1. **TextGrad**: 基于"文本梯度"的 prompt 优化，模拟反向传播
2. **AFlow**: 基于 MCTS 的工作流拓扑搜索
3. **MIPRO**: 黑盒评估 + 自适应重排序的 prompt 优化

### 2.3 适应度函数 V
任务基准分数：HotPotQA F1、MBPP pass@1、MATH solve accuracy、GAIA accuracy。

### 2.4 选择机制 S
基于 benchmark 分数的迭代选择，保留改进后的 workflow 配置。

### 2.5 闭环结构
五层架构：基础组件层 → Agent 层 → 工作流层 → 进化层 → 评估层。进化层在评估层反馈驱动下迭代优化前三层。

## 3. 定量证据

| 基准 | 基线 | 最佳 | 改进幅度 | 算法 |
|---|---|---|---|---|
| HotPotQA F1 | Base workflow | EvoAgentX | **+7.44%** | TextGrad/AFlow/MIPRO |
| MBPP pass@1 | Base workflow | EvoAgentX | **+10.00%** | TextGrad/AFlow/MIPRO |
| MATH solve accuracy | Base workflow | EvoAgentX | **+10.00%** | TextGrad/AFlow/MIPRO |
| GAIA accuracy | Base workflow | EvoAgentX | **up to +20.00%** | TextGrad/AFlow/MIPRO |

## 4. 定性判断

### 4.1 限制
- 依赖 benchmark 评估，开放式任务适用性未知
- 三种算法的选择和组合策略需要更多研究
- 计算成本随工作流复杂度增长
- 开源版本可能与论文版本有差异

### 4.2 适用场景
- 多 Agent 工作流自动优化
- 研究不同进化算法的比较
- 从手工配置到自动化 workflow 演进的过渡

### 4.3 教学价值
EvoAgentX 是理解 L4 (Workflow Evolution) 的重要案例：
1. 展示了多种进化算法的统一集成框架
2. 提供了 TextGrad/AFlow/MIPRO 的直接比较平台
3. 五层架构设计可作为 MAS 自进化系统的参考模型
4. 同时也是自进化 survey 的产出平台，体现了"研究-工程"闭环

## 5. 与自进化的关系

EvoAgentX 在 L1-L5 分类中属于 **L4 (Workflow/Architecture Evolution)**。

它同时修改 prompts (L1)、工具配置和 workflow topology (L4)，是混合层级的进化系统。三种算法代表了三种优化范式：
- TextGrad: 模拟梯度下降的文本优化（Search）
- AFlow: 基于 MCTS 的拓扑搜索（Search）
- MIPRO: 黑盒评估的 prompt 优化（Evolutionary）

EvoAgentX 的独特贡献是将这些算法统一在一个模块化框架中，允许在同一平台上进行公平比较。其关联的 comprehensive survey (2508.07407) 也是自进化研究的重要参考。
