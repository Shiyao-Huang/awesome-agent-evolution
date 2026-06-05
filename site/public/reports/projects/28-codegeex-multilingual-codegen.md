# CodeGeeX2 — 多语言代码生成大模型

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/THUDM/CodeGeeX2 |
| Stars | 8,000+ |
| 主要语言 | Python |
| 许可证 | Apache-2.0（代码）/ Model License（模型权重） |
| 开发者 | 清华大学 KEG 实验室 / THUDM |

## 项目简介

CodeGeeX2 是清华大学知识工程实验室（KEG）开发的多语言代码生成大模型 CodeGeeX 的第二代版本。它基于 ChatGLM2-6B 架构进行代码预训练，支持 100+ 编程语言的代码生成、补全、翻译和注释，并提供中英双语提示词交互能力。CodeGeeX 系列是学术界最具影响力的开源代码大模型之一，其原始论文发表于 KDD 2023。

CodeGeeX2-6B 作为第二代模型，在代码生成准确率和多语言支持方面报告了相对第一代（13B 参数）的提升。通过引入 ChatGLM2 的架构优化和筛选后的代码训练数据，CodeGeeX2 以更小的参数量展示了新的性能/规模取舍。项目还提供 VS Code 和 JetBrains IDE 插件，可直接在开发环境中使用模型的代码辅助能力。

## 目录结构

```
CodeGeeX2/
├── inference/               # 推理代码
│   ├── clique_inference.py  # 模型推理入口
│   └── quantization.py      # 量化推理支持
├── demo/                    # 演示应用
├── evaluation/              # 评估脚本（HumanEval-X 等）
├── quantize/                # 模型量化工具
├── README.md                # 中文文档
├── README_EN.md             # 英文文档
└── requirements.txt         # 依赖清单
```

## 核心模块分析

### 1. 代码生成推理引擎

CodeGeeX2 的推理模块支持多种推理后端，包括原生 PyTorch 和量化推理。模型支持 8192 token 的最大序列长度，可处理较长的代码上下文。推理引擎还集成了 INT4/INT8 量化支持，使 6B 参数模型可在消费级 GPU 上高效运行。推理模块提供统一的 API 接口，支持代码补全、代码翻译和代码注释等多种生成模式。

### 2. 多语言评估体系（HumanEval-X）

CodeGeeX 项目构建了 HumanEval-X 多语言代码评估基准，将 OpenAI 的 HumanEval 扩展至 5 种编程语言（Python、C++、Java、JavaScript、Go），包含测试用例和参考解答。这一评估体系已成为代码大模型多语言能力的标准测试基准之一。CodeGeeX2 在该基准上展现了优异的跨语言代码生成能力，特别是在中文提示词场景下表现突出。

### 3. IDE 集成插件

CodeGeeX2 提供了 VS Code 和 JetBrains 系列的 IDE 插件，实现"Ask CodeGeeX"交互式编程助手功能。插件支持实时代码补全、自然语言描述生成代码、代码翻译和代码解释等功能。通过将大模型能力嵌入开发者的日常工作流，CodeGeeX2 实现了从研究到产品化的闭环，目前已有数百万用户。

## 技术亮点

- **ChatGLM2 架构迁移**：基于 ChatGLM2-6B 进行代码领域预训练，以更少的参数量（6B vs 13B）探索代码生成能力，体现了"筛选数据+优化架构"的训练范式。
- **中英双语提示词支持**：原生支持中英文双语交互，是少数支持中文编程需求的代码大模型，对中文开发者社区具有重要价值。
- **多语言代码翻译**：支持 100+ 编程语言之间的代码翻译，将代码视为一种"自然语言"，实现跨语言语义转换。
- **HumanEval-X 评估基准**：构建了业界首个大规模多语言代码评估基准，为代码大模型的能力评估提供了标准化工具。

## 与 Self-Evolve 关联

CodeGeeX2 与 Self-Evolve 研究的关联体现在"AI 生成代码"这一核心能力上。Self-Evolve 的关键假设是 AI 系统能够通过代码自我改写和自我优化来实现进化，而 CodeGeeX2 所代表的多语言代码生成模型正是这一过程的基础设施。

具体而言：第一，CodeGeeX2 的多语言代码生成能力为 Self-Evolve 系统提供了"代码变异"的工具——系统可以生成不同风格的代码实现，作为进化过程中的候选个体。第二，CodeGeeX2 的代码翻译能力展示了 AI 跨语言理解代码语义的能力，这意味着 Self-Evolve 系统可以在不同编程范式之间迁移解决方案。第三，HumanEval-X 评估体系为 Self-Evolve 提供了"适应度函数"的设计参考——通过自动化测试来评估生成代码的质量。第四，CodeGeeX 系列从 v1 到 v2 到 v4 的迭代演进本身，就是一个"模型自我进化"的案例——后一代模型利用前一代模型产生的数据和技术积累来提升自身。

## 参考资料

- [CodeGeeX2 GitHub 仓库](https://github.com/THUDM/CodeGeeX2)
- [CodeGeeX 官方网站](https://keg.cs.tsinghua.edu.cn/codegeex/)
- [CodeGeeX 论文 (KDD 2023)](https://arxiv.org/abs/2303.17568)
- [CodeGeeX2 英文 README](https://github.com/THUDM/CodeGeeX2/blob/main/README_EN.md)
- [CodeGeeX4 — 最新一代模型](https://github.com/THUDM/CodeGeeX4)
- [HuggingFace 模型页面](https://huggingface.co/THUDM/codegeex2-6b)
