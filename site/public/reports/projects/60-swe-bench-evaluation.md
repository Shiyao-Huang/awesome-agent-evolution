# SWE-bench: 真实世界软件工程任务基准测试

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/swe-bench/SWE-bench |
| Star | 2,800+ |
| 技术栈 | Python, Docker (容器化评估), HuggingFace Datasets (数据集分发) |
| 许可证 | MIT |
| 开发者 | Princeton NLP (Carlos Jimenez, John Yang 等) |
| 论文 | SWE-bench: Can Language Models Resolve Real-World GitHub Issues? (ICLR 2024 Oral) |

## 项目简介

SWE-bench 是一个用于评估大语言模型在真实世界 GitHub Issue 上解决软件工程问题能力的基准测试框架。给定一个代码库和一个 Issue 描述，语言模型需要生成能够解决所描述问题的代码补丁（Patch）。它是 AI 编程 Agent 能力评估中常被引用的基准之一，被 ICLR 2024 接收为口头报告论文。

SWE-bench 的核心创新在于其数据集来源：任务从真实的 GitHub 仓库中收集，涵盖了 Django、Flask、SymPy、Matplotlib、Scikit-learn 等 12 个流行 Python 项目的 Issue 和对应合并 PR。这种基于真实软件工程场景的评估方式，使 SWE-bench 成为观察 AI 系统能否处理软件工程问题的重要证据入口；具体结论仍要看任务子集、执行环境和 leaderboard 版本。

项目已发展出多个变体：SWE-bench Verified（500 个人工验证的可解决问题）、SWE-bench Lite（精简子集）、SWE-bench Multimodal（多模态版本，ICLR 2025）和 SWE-bench Multilingual。配套的 SWE-agent、SWE-smith 等工具链形成了完整的软件工程 Agent 评估生态。

## 目录结构
```
SWE-bench/
├── swebench/                ★ 核心评测框架
│   ├── harness/             ★ Docker 评估引擎
│   │   ├── constants.py     常量定义
│   │   ├── docker_build.py  Docker 镜像构建
│   │   ├── run_evaluation.py ★ 评估运行入口
│   │   └── test_spec.py     测试规格定义
│   ├── collect/             数据收集流程
│   ├── inference/           模型推理与数据集构建
│   ├── metrics/             ★ 评估指标计算
│   ├── mapping/             提交映射
│   └── model_validation/    模型验证
├── tests/                   测试套件
├── docs/                    文档与指南
│   ├── guides/              使用教程
│   └── assets/              资源文件
├── pyproject.toml           Python 项目配置
├── mkdocs.yml               文档站点配置
└── codecov.yml              代码覆盖率配置
```

## 核心模块分析

### 1. Docker 评估引擎 (swebench/harness/)
SWE-bench 的评估核心是容器化的执行评估引擎。每个任务在一个独立的 Docker 容器中执行，容器预装了对应版本的代码库和依赖。评估引擎执行模型生成的 Patch，运行项目的测试套件来验证 Patch 是否真正解决了 Issue 中描述的问题。支持本地执行和云端执行（Modal 平台、AWS via sb-cli），推荐 x86_64 机器至少 120GB 存储、16GB 内存、8 CPU 核心。

### 2. 数据收集流程 (swebench/collect/)
从 GitHub 仓库自动收集 Issue-PR 对的训练数据。流程包括：识别有测试的 PR、提取 Issue 描述、生成 Oracle 检索片段等。SWE-smith 是配套的专用数据生成工具，可以大规模创建 SWE-bench 格式的训练数据。

### 3. 评估指标体系 (swebench/metrics/)
核心指标是"解决率"（Resolution Rate），即模型生成的 Patch 能否通过与原始 PR 关联的测试用例。支持细粒度的按仓库、按难度分层的评估结果分析。提供 gold patch 验证基线，确保评估环境的正确性。支持精确匹配和模糊匹配两种验证模式。

### 4. 模型推理接口 (swebench/inference/)
支持在 SWE-bench 上运行模型推理，包括 SWE-Llama 系列模型和通过 API 调用的商业模型。提供从数据预处理、推理执行到结果收集的完整流程。支持 BM25 检索增强的上下文构建，提供 13K/27K/40K/50K 多种检索粒度的预构建数据集。

### 5. 数据集生态
提供多种粒度的数据集变体：完整版（2294 个任务）、Lite 版（300 个任务）、Verified 版（500 个人工验证任务，与 OpenAI Preparedness 合作）、Multimodal 版（含视觉信息的任务，ICLR 2025）。所有数据集通过 HuggingFace 分发，配套 Oracle 和 BM25 检索数据集。

## 技术亮点
1. **真实世界数据**：所有任务来源于真实 GitHub Issue 和 PR，而非人工构造，确保评估的外部效度
2. **容器化评估**：完全基于 Docker 的隔离评估环境，确保可重复性和跨平台公平性
3. **测试套件验证**：使用项目原生测试套件验证 Patch 正确性，避免了启发式评估的偏差
4. **多维度数据集**：Full/Lite/Verified/Multimodal/Multilingual 五种变体，覆盖不同评估场景
5. **配套工具链生态**：SWE-agent（Agent 框架）、SWE-smith（数据生成）、sb-cli（云评估）、SWE-ReX（远程执行）形成配套生态

## 与 Self-Evolve 关联
| 关联维度 | 分析 |
|----------|------|
| 评估框架 | SWE-bench 是 Self-Evolve 评估层最核心的参考基准：其"Issue -> Patch -> Test Verification"的评估范式直接对应 Self-Evolve 的代码进化验证流程 |
| 进化循环 | SWE-bench 的"问题描述 -> 代码生成 -> 测试验证 -> 反馈"流程与 Self-Evolve 的进化循环高度一致 |
| Agent 编排 | SWE-agent 展示了如何编排一个完整的软件工程 Agent：代码库导航、文件定位、代码编辑、测试运行 |
| 自主性度量 | SWE-bench 的解决率可作为 Self-Evolve 自主性层级的关键度量指标 |
| 安全性 | Docker 容器化的评估机制为 Self-Evolve 的安全执行提供了参考实现 |

## 参考资料
- [SWE-bench GitHub](https://github.com/swe-bench/SWE-bench)
- [SWE-bench 官方网站](https://swebench.com)
- [SWE-bench 论文 (ICLR 2024)](https://arxiv.org/abs/2310.06770)
- [SWE-bench Multimodal 论文 (ICLR 2025)](https://arxiv.org/abs/2410.03859)
- [SWE-agent](https://github.com/SWE-agent/SWE-agent)
- [SWE-smith](https://swesmith.com)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/swe_bench__swe_bench`
- **分析命令**：`gitnexus analyze repos/swe_bench__swe_bench --index-only --skip-git --name SWE-bench`
- **知识图谱规模**：待分析
- **查询语句**：`evaluation harness, Docker container, test suite verification, patch generation, issue resolution, BM25 retrieval`
- **核心执行流程候选**：Load Instance -> Build Docker Image -> Apply Patch -> Run Tests -> Compute Metrics
- **关键符号/文件**：`swebench/harness/run_evaluation.py`, `swebench/harness/docker_build.py`, `swebench/metrics/`, `swebench/collect/`
- **调用关系上下文**：评估引擎通过 Docker SDK 创建容器实例，在容器内应用 Patch 并运行项目测试套件，收集测试结果并通过指标模块计算解决率
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
