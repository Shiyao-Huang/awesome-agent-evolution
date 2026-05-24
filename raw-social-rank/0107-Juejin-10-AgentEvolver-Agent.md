# 一天一个开源项目（第10篇）：AgentEvolver - 高效自进化Agent系统

- URL: https://juejin.cn/post/7602100217657475114
- Platform: Juejin
- Extraction status: ok
- content_timestamp: 2026-02
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-02
- Query: site:juejin.cn AI Agent 自进化

## Raw Content

## 一天一个开源项目（第10篇）：AgentEvolver - 高效自进化Agent系统，让AI Agent自主学习和进化 - 掘金

**Source**: https://juejin.cn/post/7602100217657475114

---

#              一天一个开源项目（第10篇）：AgentEvolver - 高效自进化Agent系统，让AI Agent自主学习和进化             

[冬奇Lab](https://juejin.cn/user/1857501105781193/posts)

                     2026-02-02                   
                     411                   

                     阅读10分钟                   

## 引言

> "如果AI Agent能够像生物进化一样，自主发现问题、积累经验、优化策略，那它们就不再是静态的工具，而是真正会'成长'的智能体。"

这是"一天一个开源项目"系列的第10篇文章。今天带你了解的项目是 **AgentEvolver**（[GitHub](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmodelscope%2FAgentEvolver)）。

传统的AI Agent训练需要大量人工标注的数据集，成本高昂且难以扩展。AgentEvolver通过三大自进化机制——Self-Questioning（自主提问）、Self-Navigating（自主导航）、Self-Attributing（自主归因），让AI Agent能够自主生成任务、积累经验、优化策略，实现真正的自我进化。

### 你将学到什么

- AgentEvolver的核心自进化机制和工作原理
- Self-Questioning、Self-Navigating、Self-Attributing三大机制如何协同工作
- 如何搭建和训练自进化Agent系统
- 面向服务的数据流架构设计
- 在AppWorld和BFCL-v3基准测试中的优异表现
- 与其他Agent训练框架的对比分析

### 前置知识

- 对AI Agent和强化学习有基本了解
- 熟悉Python编程
- 了解LLM的基本概念
- 对强化学习训练流程有基本认识（可选）

---

## 项目背景

### 项目简介

**AgentEvolver** 是一个**高效的自进化Agent系统**，通过三大核心机制让AI Agent能够自主学习和进化：

1. **Self-Questioning（自主提问）**：Agent自主探索环境，生成多样化任务，消除昂贵的手动数据集构建成本
2. **Self-Navigating（自主导航）**：总结和复用跨任务经验，引导更高质量的探索，提升探索效率
3. **Self-Attributing（自主归因）**：处理长轨迹，发现中间步骤的因果贡献，实现细粒度和高效的政策优化

**项目解决的核心问题**：

- Agent训练需要大量人工标注数据集，成本高昂
- 缺乏自主探索能力，难以发现新任务
- 经验无法有效复用，探索效率低下
- 长轨迹中的信用分配不精确，政策优化效率低
- 不同环境集成困难，缺乏统一的训练框架

**面向的用户群体**：

- AI Agent研究和开发者
- 需要训练自主Agent的研究人员
- 希望降低Agent训练成本的企业
- 对自进化系统感兴趣的技术人员

### 作者/团队介绍

**团队：ModelScope**

- **背景**：阿里巴巴达摩院ModelScope团队，专注于AI模型和系统开发
- **贡献者**：10位贡献者，包括 @YunpengZhai、@TaoShuchang、@Xinji-Mai 等
- **理念**：构建高效、自主、可进化的AI Agent系统
- **官网**：modelscope.github.io/AgentEvolver

**项目创建时间**：2024年（从GitHub活动来看是持续活跃的项目）

### 项目数据

- ⭐ **GitHub Stars**: 1.1k+（持续增长）
- 🍴 **Forks**: 128+
- 📦 **版本**: 最新版本（持续更新）
- 📄 **License**: Apache-2.0（完全开源，自由使用）
- 🌐 **官网**: [modelscope.github.io/AgentEvolve…](https://link.juejin.cn?target=https%3A%2F%2Fmodelscope.github.io%2FAgentEvolver)
- 📚 **文档**: 包含完整的使用指南和API文档
- 💬 **社区**: GitHub Issues活跃
- 📊 **论文**: [arXiv:2511.10395](https://link.juejin.cn?target=https%3A%2F%2Farxiv.org%2Fabs%2F2511.10395)

**项目发展历程**：

- 2024年：项目创建，开始构建核心自进化机制
- 2024-2025年：完善三大机制，添加多环境支持
- 2025年：发布论文，在AppWorld和BFCL-v3基准测试中取得优异表现
- 2026年：持续优化，添加Game Arena多智能体场景支持

---

## 主要功能

### 核心作用

AgentEvolver的核心作用是**构建高效的自进化Agent系统**，让AI Agent能够：

1. **自主生成任务**：通过Self-Questioning机制，Agent自主探索环境并生成多样化任务
2. **经验引导探索**：通过Self-Navigating机制，总结和复用跨任务经验，提升探索效率
3. **精细信用分配**：通过Self-Attributing机制，精确识别长轨迹中关键步骤的贡献
4. **高效政策优化**：基于精细的信用分配，实现更高效的政策优化

### 使用场景

1. 

**Agent训练和研究**

  - 训练自主探索的AI Agent
  - 研究自进化机制的有效性
  - 降低Agent训练成本

2. 

**复杂环境交互**

  - AppWorld应用操作任务
  - BFCL-v3复杂推理任务
  - 多智能体社交游戏（Avalon、Diplomacy）

3. 

**任务自动生成**

  - 自动发现环境中的新任务
  - 生成多样化的训练数据
  - 减少人工标注成本

4. 

**经验复用和优化**

  - 跨任务经验总结和复用
  - 提升探索效率
  - 加速Agent学习

### 快速开始

#### 安装方式

AgentEvolver需要conda和CUDA工具包：

```
# Step 1: 基础依赖安装
bash install.sh

# Step 2: 设置环境服务（以AppWorld为例）
cd env_service/environments/appworld && bash setup.sh

# Step 3: 设置ReMe（可选，用于经验管理）
bash external/reme/install_reme.sh

# Step 4: 开始训练
conda activate agentevolver

# 方式1: 基础示例（不使用ReMe）
python launcher.py --conf examples/basic.yaml --with-appworld

# 方式2: 完整示例（使用ReMe，包含questioning + navigating + attributing）
python launcher.py --conf examples/overall.yaml --with-appworld --with-reme
```

#### 前置要求

- **conda**：用于环境管理
- **CUDA工具包**：用于GPU加速
- **Python 3.x**：主要编程语言

#### 最简单的使用示例

```
# 复制配置文件
cp example.env .env

# 修改.env文件，设置API key和conda路径
# 然后运行训练

# 基础训练（使用环境内置数据集）
python launcher.py --conf examples/basic.yaml --with-appworld

# 完整自进化训练
python launcher.py --conf examples/overall.yaml --with-appworld --with-reme
```

### 核心特性

- **Self-Questioning（自主提问）**：Agent自主探索环境，生成多样化任务，消除手动数据集构建成本
- **Self-Navigating（自主导航）**：总结和复用跨任务经验，引导高质量探索，提升探索效率
- **Self-Attributing（自主归因）**：处理长轨迹，发现中间步骤的因果贡献，实现精细政策优化
- **环境兼容性**：标准化接口，无缝集成各种外部环境和工具API
- **灵活上下文管理**：内置工具管理多轮上下文和复杂交互逻辑
- **模块化架构**：解耦组件，易于定制、二次开发和算法升级
- **Game Arena支持**：扩展到多智能体社交游戏环境，支持交互、评估和训练

### 项目优势

| 对比项 | AgentEvolver | 传统Agent训练 | 其他自进化框架 |
|---|---|---|---|
| 任务生成 | ✅ 自主生成 | ❌ 需要人工标注 | ⚠️ 部分支持 |
| 经验复用 | ✅ 跨任务经验总结 | ❌ 无法复用 | ⚠️ 有限复用 |
| 信用分配 | ✅ 精细归因 | ⚠️ 粗粒度 | ⚠️ 中等精度 |
| 训练效率 | ✅ 高效 | ❌ 成本高昂 | ⚠️ 中等 |
| 环境支持 | ✅ 标准化接口 | ⚠️ 需要适配 | ⚠️ 有限支持 |
| 多智能体 | ✅ Game Arena | ❌ 不支持 | ⚠️ 部分支持 |

**为什么选择AgentEvolver？**

相比传统Agent训练方法，AgentEvolver通过三大自进化机制实现自主任务生成、经验复用和精细信用分配，大幅降低训练成本，提升训练效率，在AppWorld和BFCL-v3基准测试中表现优异。

---

## 项目详细剖析

### 架构设计

AgentEvolver采用**面向服务的数据流架构**，将环境沙箱、LLM和经验管理无缝集成到模块化服务中。

#### 核心架构

```
AgentEvolver System
├── Environment Service（环境服务）
│   ├── AppWorld环境
│   ├── BFCL-v3环境
│   ├── Game Arena（Avalon、Diplomacy）
│   └── 自定义环境接口
├── LLM Service（LLM服务）
│   ├── Qwen2.5-7B/14B
│   ├── 其他LLM支持
│   └── API调用封装
├── Experience Manager（经验管理器）
│   ├── ReMe集成
│   ├── 经验池管理
│   └── 经验总结和复用
├── Task Manager（任务管理器）
│   ├── 任务探索
│   ├── 合成任务生成
│   └── 训练数据管理
└── Advantage Processor（优势处理器）
    ├── ADCA-GRPO算法
    ├── 信用分配
    └── 政策优化
```

#### Self-Questioning机制

Self-Questioning让Agent自主探索环境并生成多样化任务：

**工作流程**：

1. Agent在环境中自主探索
2. 发现环境中的新任务和挑战
3. 自动生成任务描述和训练数据
4. 消除昂贵的手动数据集构建成本

**优势**：

- 任务多样性高，覆盖环境中的各种场景
- 无需人工标注，大幅降低成本
- 任务质量高，基于实际环境探索

#### Self-Navigating机制

Self-Navigating通过经验总结和复用提升探索效率：

**工作流程**：

1. 总结跨任务的成功经验
2. 构建经验知识库
3. 在新任务中复用相关经验
4. 引导更高质量的探索

**优势**：

- 探索效率显著提升
- 经验可复用，避免重复探索
- 引导更高质量的策略

#### Self-Attributing机制

Self-Attributing通过精细信用分配实现高效政策优化：

**工作流程**：

1. 分析长轨迹中的中间步骤
2. 识别关键步骤的因果贡献
3. 基于贡献分配信用
4. 实现精细的政策优化

**优势**：

- 信用分配精确，避免错误归因
- 政策优化效率高
- 支持长轨迹处理

### 性能表现

AgentEvolver在AppWorld和BFCL-v3基准测试中表现优异：

#### AppWorld基准测试

- **Qwen2.5-7B + AgentEvolver**：avg@8: 32.4%, best@8: 51.2%
- **Qwen2.5-14B + AgentEvolver**：avg@8: 48.7%, best@8: 69.4%

相比基线模型，性能提升显著：

- 7B模型：从1.8%提升到32.4%（avg@8）
- 14B模型：从18.0%提升到48.7%（avg@8）

#### BFCL-v3基准测试

- **Qwen2.5-7B + AgentEvolver**：avg@8: 57.9%, best@8: 69.0%
- **Qwen2.5-14B + AgentEvolver**：avg@8: 66.5%, best@8: 76.7%

相比基线模型，性能提升显著：

- 7B模型：从29.8%提升到57.9%（avg@8）
- 14B模型：从41.6%提升到66.5%（avg@8）

#### 机制消融实验

实验表明，三大机制协同工作效果最佳：

- **+Questioning**：显著提升性能
- **+Questioning&Navigating**：进一步提升探索效率
- **+Questioning&Attributing**：精细优化带来额外提升
- **AgentEvolver（完整）**：三大机制协同，性能最优

### Game Arena多智能体场景

AgentEvolver Game Arena扩展了AgentEvolver到多智能体社交游戏环境：

#### 核心能力

- **Web界面交互**：实时观察AI Agent的推理和通信，或作为人类玩家参与
- **可扩展评估**：运行大规模自对弈或混合模型锦标赛，支持配置和排行榜
- **端到端训练**：在社交游戏环境中使用强化学习方法（如GRPO）直接训练LLM Agent

#### 支持的游戏

- **Avalon（阿瓦隆）**：社交推理游戏，测试Agent的推理和沟通能力
- **Diplomacy（外交）**：复杂的多智能体策略游戏，测试长期规划和协作能力

#### 训练示例

在Avalon游戏中训练assassin角色的训练曲线显示，AgentEvolver能够有效提升Agent在复杂社交推理任务中的表现。

### 环境兼容性

AgentEvolver提供标准化接口，支持无缝集成各种外部环境：

#### 环境接口

- **标准化接口**：统一的环境接口规范
- **工具API集成**：支持各种工具和API的集成
- **自定义环境**：易于添加自定义环境

#### 支持的环境

- **AppWorld**：应用操作任务环境
- **BFCL-v3**：复杂推理任务环境
- **Game Arena**：多智能体社交游戏环境
- **自定义环境**：通过标准接口集成

### 经验管理（ReMe）

AgentEvolver集成ReMe进行经验管理：

#### 功能

- **经验总结**：总结跨任务的成功经验
- **经验池管理**：管理经验池的存储和检索
- **经验复用**：在新任务中复用相关经验

#### 使用

```
# 安装ReMe
bash external/reme/install_reme.sh

# 使用ReMe进行训练
python launcher.py --conf examples/overall.yaml --with-appworld --with-reme
```

---

## 项目地址与资源

### 官方资源

- 🌟 **GitHub**: [github.com/modelscope/…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmodelscope%2FAgentEvolver)
- 🌐 **官网**: [modelscope.github.io/AgentEvolve…](https://link.juejin.cn?target=https%3A%2F%2Fmodelscope.github.io%2FAgentEvolver)
- 📄 **论文**: [arXiv:2511.10395](https://link.juejin.cn?target=https%3A%2F%2Farxiv.org%2Fabs%2F2511.10395)

### 适用人群

**AgentEvolver特别适合**：AI Agent研究和开发者、需要训练自主Agent的研究人员、希望降低Agent训练成本的企业、对自进化系统感兴趣的技术人员、需要多智能体训练的研究团队。

**不适合**：只需要简单Agent的用户、不需要自主学习的场景、缺乏强化学习背景的开发者。

---

*欢迎来我中的[个人主页](https://link.juejin.cn?target=https%3A%2F%2Fhome.wonlab.top)找到更多有用的知识和有趣的产品*

[冬奇Lab
       
        软件架构](https://juejin.cn/user/1857501105781193/posts)
[282
       文章](https://juejin.cn/user/1857501105781193/posts)[152k
       阅读](https://juejin.cn/user/1857501105781193/posts)[436
       粉丝](https://juejin.cn/user/1857501105781193/followers)
