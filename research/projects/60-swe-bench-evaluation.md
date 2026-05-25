# SWE-bench: LLM 软件工程能力基准测试框架

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/princeton-nlp/SWE-bench |
| Star | 3,200+ |
| 技术栈 | Python, Docker, HuggingFace Datasets, Git, unittest/pytest |
| 许可证 | MIT |
| 开发者 | Princeton NLP (Carlos E. Jimenez, John Yang, Shunyu Yao 等) |

## 项目简介

SWE-bench 是由 Princeton NLP 团队开发的软件工程基准测试框架，用于评估大型语言模型解决真实 GitHub Issue 的能力。该基准的核心任务是：给定一个代码仓库（codebase）和一个 Issue 描述，让 LLM 生成能够解决问题的代码补丁（patch）。SWE-bench 从 12 个流行的 Python 开源项目中收集了 2,294 个真实 Issue-PR 对，构建了目前最具挑战性的代码生成评估数据集。

项目在 ICLR 2024 上以 Oral 报告的形式发表，并持续演进：推出了 SWE-bench Verified（经人工验证的 500 个子集）、SWE-bench Multimodal（面向视觉软件领域的多模态版本，ICLR 2025），以及配套的 SWE-agent 自主编程代理和 SWE-smith 训练数据生成工具。SWE-bench 已成为衡量 AI 编程能力的行业标准，各大模型厂商均以其作为核心评估指标之一。

框架提供了完整的 Docker 容器化评估流程，支持从数据集加载、模型推理、patch 生成到自动化测试的全链路评估。通过基于真实测试用例的验证机制，SWE-bench 能够精确衡量模型生成的代码是否真正解决了原始问题，而非仅是文本层面的相似。

## 目录结构
```
swe_bench__swe_bench/
├── swebench/                   ★ 核心代码包
│   ├── collect/                ★ 数据采集模块
│   │   ├── make_repo/          仓库克隆与预处理
│   │   ├── cleanup/            数据清洗管道
│   │   └── make_lite/          Lite 子集生成
│   ├── harness/                ★ 评估执行引擎
│   ├── inference/              模型推理接口
│   ├── resources/              预缓存仓库资源
│   └── metrics/                评估指标计算
├── tests/                      单元测试
├── docs/                       文档与教程
├── pyproject.toml              项目配置
└── README.md
```

## 核心模块分析

### 1. 数据采集管道（collect/）
数据采集模块负责从 GitHub 仓库中自动提取 Issue-PR 对。`make_repo/` 子模块克隆目标仓库并解析 Git 历史，`cleanup/` 模块过滤掉不符合条件的 PR（如缺少测试、涉及多个仓库变更等），最终生成结构化的任务实例。每个实例包含：issue 描述、gold patch、相关测试文件以及仓库快照。

```python
from datasets import load_dataset
swebench = load_dataset('princeton-nlp/SWE-bench', split='test')
# 每条数据包含：instance_id, repo, version, base_commit, problem_statement, patch, test_patch 等
```

### 2. 评估执行引擎（harness/）
评估引擎是 SWE-bench 的核心组件，采用 Docker 容器化方案确保评估环境的一致性和可复现性。引擎会为每个任务实例构建独立的 Docker 镜像，安装指定版本的依赖，应用模型生成的 patch，然后执行相关的测试用例来判断 patch 是否正确。

```bash
python -m swebench.harness.run_evaluation \
    --dataset_name princeton-nlp/SWE-bench_Lite \
    --predictions_path <path_to_predictions> \
    --max_workers 4 \
    --run_id my-eval
```

### 3. 模型推理接口（inference/）
推理模块支持多种模型接入方式，包括本地模型（SWE-Llama 7b/13b）和 API 模型（GPT-4、Claude 等）。提供从数据集预处理、上下文检索（Oracle/BM25）到 patch 生成的完整推理流程。`inference/make_datasets/` 子模块还支持从 SWE-bench 数据中创建训练集，用于微调专门的代码修复模型。配套的 RAG 数据集在 HuggingFace 上提供了 13K/27K/40K/50K 不同粒度的代码上下文检索结果。

```python
# Oracle 检索：使用 gold patch 相关文件作为上下文
# BM25 检索：基于 issue 描述自动检索相关代码片段
from datasets import load_dataset
oracle = load_dataset('princeton-nlp/SWE-bench_oracle', split='test')
bm25 = load_dataset('princeton-nlp/SWE-bench_bm25_13K', split='test')
```

### 4. 评估指标体系（metrics/）
SWE-bench 的评估核心是基于测试用例的 pass/fail 判定。指标计算模块对比应用 patch 前后的测试结果，计算 resolved rate（完全解决率）作为主要评估指标。一个实例被认为 "resolved" 需要满足两个条件：（1）FAIL_TO_PASS 中的所有失败测试变为通过；（2）PASS_TO_PASS 中的所有原本通过的测试仍然通过，即不引入回归错误。

```bash
# 评估结果存储结构
evaluation_results/
├── {run_id}/
│   ├── patches_applied/       应用的 patch 文件
│   ├── run_evaluation.log     执行日志
│   └── results.json           评估结果摘要
```

### 5. 数据集变体管理
项目维护多个数据集变体以适应不同评估需求：完整版 SWE-bench（2,294 实例，来自 12 个仓库）、Lite（300 实例的精简子集，用于快速迭代）、Verified（500 实例的人工验证子集，与 OpenAI Preparedness 团队合作确保每个实例可解）和 Multimodal（面向 GUI 软件的多模态版本，评估可视化领域的代码能力）。所有数据集通过 HuggingFace Hub 分发，使用 `datasets` 库即可加载。

## 技术亮点

1. **真实世界任务来源**：所有任务来自 12 个活跃 Python 开源项目（Django, Flask, scikit-learn, sympy 等），涵盖 Web 框架、科学计算、DevOps 等领域，确保评估的生态有效性。
2. **容器化评估方案**：基于 Docker 的评估引擎确保环境一致性，每个任务在独立容器中执行，避免依赖冲突和状态污染。
3. **测试驱动的验证机制**：通过执行真实项目的测试套件来判断 patch 正确性，而非依赖文本相似度比较，评估结果高度可信。
4. **多粒度数据集**：提供 Full/Lite/Verified/Multimodal 多个变体，兼顾评估深度与资源消耗。
5. **完整的工具链生态**：配套 SWE-agent（自主代理）、SWE-smith（训练数据生成）、sb-cli（云端评估）形成完整的评估生态。
6. **云原生评估支持**：集成 Modal 平台和 AWS sb-cli 工具，支持无本地 GPU 的云端评估。

## 与 Self-Evolve 关联
| 维度 | 贡献 |
|------|------|
| 评估框架 | 提供代码生成能力的标准化评估基准，是 Self-Evolve 进化循环中的关键验证层 |
| 进化循环 | SWE-bench 的任务实例可直接作为进化目标：LLM 生成 patch -> 测试验证 -> 反馈迭代 |
| Agent 编排 | SWE-agent 展示了如何将 LLM 编排为自主代码修复 Agent，为 Self-Evolve 的 Agent 设计提供参考 |
| 质量度量 | resolved rate 可作为 Self-Evolve 系统的适应度函数，衡量代码进化效果 |
| 数据工程 | collect/ 模块的数据采集管道可作为构建自定义进化任务数据集的模板 |
| 反馈信号 | 基于测试的 pass/fail 判定提供了客观的进化反馈信号 |

## 参考资料
- [SWE-bench 论文 (ICLR 2024)](https://arxiv.org/abs/2310.06770)
- [SWE-bench Multimodal (ICLR 2025)](https://arxiv.org/abs/2410.03859)
- [SWE-bench 官方文档](https://swebench.com/)
- [SWE-agent 仓库](https://github.com/SWE-agent/SWE-agent)
- [SWE-smith 训练数据工具](https://swesmith.com/)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/swe_bench__swe_bench`
- **分析命令**：`gitnexus analyze repos/swe_bench__swe_bench --index-only --skip-git --name SWE-bench`
- **知识图谱规模**：[placeholder]
- **查询语句**：`swebench harness evaluation patch resolve test instance collect inference`
- **核心执行流程候选**：数据采集(make_repo -> cleanup) -> 任务实例生成 -> Docker 镜像构建 -> patch 应用 -> 测试执行 -> 指标计算(resolved rate)
- **关键符号/文件**：`swebench/harness/run_evaluation.py`, `swebench/collect/`, `swebench/metrics/`, `swebench/inference/`, `pyproject.toml`
- **调用关系上下文**：run_evaluation 入口 -> 构建评估镜像 -> 应用 prediction patch -> 执行 repo 测试 -> 计算 pass/resolved 指标；collect 管道独立运行，生成任务 JSON
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
