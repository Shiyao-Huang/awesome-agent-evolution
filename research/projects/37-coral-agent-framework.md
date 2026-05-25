# CORAL：多 Agent 自主进化基础设施

> **2025-2026 新项目** | 2026 年 3 月发布

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/Human-Agent-Society/CORAL |
| Stars | 673 |
| 主要语言 | Python |
| 许可证 | Apache License 2.0 |
| 创建时间 | 2026-03-16 |

## 项目简介

CORAL 是面向自主 AI Agent 组织的基础设施框架，支持多 Agent 运行实验、共享知识并持续改进解决方案。只需提供代码库和评分器，CORAL 即可自动处理隔离工作空间、安全评估、持久化共享状态和多 Agent 协作。它原生集成 Claude Code、Codex、Cursor Agent、Kiro 和 OpenCode 五大编码 Agent。

论文"CORAL: Towards Autonomous Multi-Agent Evolution for Open-Ended Discovery"详细阐述了其设计理念。CORAL 的核心设计是让每个 Agent 在独立的 Git Worktree 中工作，通过共享状态目录实现实时知识传递，评分守护进程评估每次提交，管理器通过心跳提示（reflect/consolidate/pivot）引导 Agent 方向。

## 目录结构

```
CORAL/
├── coral/               # 核心框架代码
├── examples/            # 预置任务（圆打包、数学、内核优化、ML 等）
├── tests/               # 测试套件
├── docs/                # 文档
├── demos/               # 演示
├── docker/              # Docker 配置
├── web/                 # Web 界面
├── install.sh           # 安装脚本
├── pyproject.toml       # 项目配置
└── litellm_config.yaml  # LLM 网关配置
```

## 核心模块分析

### 1. 多 Agent 隔离工作空间
每个 Agent 运行在独立的 Git Worktree 中，确保代码修改互不干扰。共享状态（`.coral/public/`）通过符号链接映射到每个 Worktree，Agent 可以实时看到其他 Agent 的工作成果。`.coral/private/` 存储 Agent 的私有状态，实现公开共享与私有隔离的精细划分。

### 2. 评分守护进程与评估循环
评分守护进程持续监控所有 Worktree 的提交，自动评分并记录结果。评估循环支持多种内置评分器（包括 Rubric Judge 用于开放式任务的 LLM 评估），以及 Docker 容器内的安全评估。评分结果反馈给 Agent，驱动下一轮改进方向。

### 3. Agent 管理与心跳系统
管理器通过心跳提示词中断 Agent 的执行流，提供三种指导信号：**reflect**（反思当前进展）、**consolidate**（整合已有成果）、**pivot**（转换探索方向）。支持五种主流编码 Agent 运行时，通过 LiteLLM 网关支持自定义模型。

## 技术亮点

1. **Git Worktree 隔离架构**：利用 Git Worktree 实现轻量级的 Agent 隔离——无需容器或虚拟机，每个 Agent 拥有独立文件系统视图，同时通过符号链接实现零延迟的状态共享。

2. **公开/私有状态分离**：`.coral/public/` 用于 Agent 间共享（尝试记录、笔记、技能），`.coral/private/` 保留 Agent 私有状态。这一设计在多 Agent 协作与个体自主性之间取得了优雅的平衡。

3. **跨 Agent 运行时兼容**：通过统一的运行时注册机制支持 Claude Code、Codex、Cursor、Kiro、OpenCode 五大编码 Agent，用户可混合使用不同 Agent 参与同一任务。

4. **开放式发现支持**：不同于仅追求最优解的传统优化框架，CORAL 的心跳系统和共享状态设计支持开放式探索——Agent 可以发现意料之外的有价值解决方案。

## 与 Self-Evolve 关联

CORAL 是 Self-Evolve 的**多 Agent 协作基础设施层**。它解决了一个关键问题：当多个 Agent 共同参与自我进化时，如何协调隔离与共享。其公开/私有状态的分离设计为群体 Self-Evolve 提供了通信原语——Agent 间可以共享成功的策略和发现，同时保留独立探索的空间。心跳系统（reflect/consolidate/pivot）对应了 Self-Evolve 中的元认知能力——系统不仅能执行改进，还能反思改进策略本身。作为 Karpathy AutoResearch 的后续发展，CORAL 将单 Agent 自主研究扩展到了多 Agent 协同进化，代表了 Self-Evolve 从单体到群体、从封闭到开放的重要跃迁。

## 参考资料

- [GitHub 仓库](https://github.com/Human-Agent-Society/CORAL)
- [论文 arXiv:2604.01658](https://arxiv.org/abs/2604.01658v1)
- [项目博客](https://human-agent-society.github.io/CORAL/)
- [文档站点](https://docs.coralxyz.com/)
