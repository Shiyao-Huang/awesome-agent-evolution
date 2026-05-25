# WildClawBench: 真实环境下的端到端 Agent 能力基准测试

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/internlm/WildClawBench |
| Star | 800+ |
| 技术栈 | Python, Docker, OpenClaw, Claude Code, Codex CLI, Hermes Agent, OpenRouter, Brave Search API |
| 许可证 | MIT License |
| 开发者 | InternLM 团队 (Shuangrui Ding 等，上海 AI Lab / MMLab@NTU， advisor: Dahua Lin, Kai Chen) |

## 项目简介

WildClawBench 是一个面向真实场景的端到端 Agent 基准测试平台，核心理念是测试 AI Agent 能否在不受人工干预的情况下完成真正有价值的工作。与大多数测试单一能力（如函数调用、JSON 解析、单指令跟随）的 Agent 基准不同，WildClawBench 在真实的 OpenClaw 个人 AI 助手环境中投放 60 个手工设计的原创任务，全面考察 Agent 的多步骤工具编排、错误恢复、自主规划等综合能力。

项目最具创新性的设计是"四种 Harness 统一任务套件"：OpenClaw、Claude Code、Codex CLI 和 Hermes Agent 四种 Agent 框架执行相同的 60 个任务，使用相同的评分标准。这种设计能够区分"模型能力"和"框架脚手架"对 Agent 表现的贡献——研究者可以观察同一模型在不同框架下的得分差异。例如，GPT-5.4 在 Codex 下得分 56.8%，而在 Claude Code 下仅 48.4%；MiMo V2 Pro 在 Hermes Agent 下得分 48.1%，远高于 OpenClaw 下的 40.2%。

测试结果表明，即使是最强的前沿模型（Claude Opus 4.7）在总体得分上也仅达到 62.2%，大多数模型远低于此。六大任务类别覆盖了生产力流程、代码智能、社交交互、搜索检索、创意合成和安全对齐，要求 Agent 在真实工具（浏览器、bash、文件系统、邮件、日历）中执行多步骤操作，包括视频理解、多轮邮件协商、代码库推理、隐私泄漏检测等复杂场景。每个任务在独立 Docker 容器中运行，Ground Truth 和评分脚本仅在 Agent 完成后注入，杜绝数据泄漏。

## 目录结构

```
internlm__wildclawbench/
├── tasks/                          ★ 60 个手工设计任务 (6 大类)
│   ├── 01_Productivity_Flow/       生产力流程 (10 个任务)
│   │   └── 01_Productivity_Flow_task_*.md
│   ├── 02_Code_Intelligence/       代码智能 (12 个任务)
│   │   └── 02_Code_Intelligence_task_*.md
│   ├── 03_Social_Interaction/      社交交互 (6 个任务)
│   │   └── 03_Social_Interaction_task_*.md
│   ├── 04_Search_Retrieval/        搜索检索 (11 个任务)
│   │   └── 04_Search_Retrieval_task_*.md
│   ├── 05_Creative_Synthesis/      创意合成 (11 个任务)
│   │   └── 05_Creative_Synthesis_task_*.md
│   ├── 06_Safety_Alignment/        安全对齐 (10 个任务)
│   │   └── 06_Safety_Alignment_task_*.md
│   ├── task0_template.md           新任务创建模板 (带注释)
│   └── appendix_skill_briefs_en.tex LaTeX 技能附录
├── eval/                           ★ 评估执行引擎
│   └── run_batch.py                批量评估入口 (17KB)
├── src/                            核心源码
│   ├── agents/                     Agent 适配器实现 (7 个文件)
│   │   ├── openclaw/               OpenClaw Harness
│   │   ├── claude_code/            Claude Code Harness
│   │   ├── codex/                  Codex CLI Harness
│   │   └── hermes_agent/           Hermes Agent Harness
│   └── utils/                      工具函数 (8 个文件)
├── script/                         运行脚本
│   ├── run.sh                      统一运行入口 (支持四种 Harness)
│   └── prepare.sh                  数据准备（YouTube 视频/模型权重）
├── skills/                         OpenClaw 技能定义
├── assets/                         资源文件 (项目 Logo 等)
├── WildClawBench_report.pdf        ★ 技术报告 PDF
├── requirements.txt                Python 依赖
├── my_api.json                     自定义模型端点配置模板
└── CITATION.cff                    引用元数据
```

## 核心模块分析

### 1. 任务系统 (tasks/)

60 个手工设计的原创任务，分为 6 个类别，横跨英文和中文。生产力流程类（10 个）涵盖 ArXiv 论文摘要、PDF 批量分类、日历调度、Wikipedia 传记、LaTeX 表格提取等。代码智能类（12 个）要求 Agent 阅读无文档代码库（如 SAM3）并编写推理脚本、解决视觉谜题（拼图/连线/像素画）。社交交互类（6 个）测试多轮邮件协商和跨部门沟通。搜索检索类（11 个）要求在冲突信息中辨别真伪、跨源数据调和对账。创意合成类（11 个）涉及足球比赛视频剪辑、论文转海报、服装搭配到模特图生成。安全对齐类（10 个）测试提示注入防御和凭证泄漏检测。`task0_template.md` 提供了带详细注释的新任务创建模板。

### 2. 评估引擎 (eval/run_batch.py)

17KB 的批量评估入口，支持并行运行（`--parallel`）、分类筛选（`--category`）、单任务执行（`--task`）。自动生成 per-category 和 global 摘要（`output/summary_all.json`），每个指标评分 0.00-1.00。结果目录包含评分（score.json）、用量统计（usage.json，含 token 计数/成本/耗时）、Agent 日志（agent.log）和完整对话追踪（chat.jsonl / claude_code_log / codex_sessions）。还支持自定义模型端点（通过 `--models-config` 参数注入 JSON 配置到 OpenClaw）。

### 3. 多 Harness 架构 (src/agents/)

四种 Agent 框架的统一适配，位于 `src/agents/` 目录下：OpenClaw（原生环境，真实个人 AI 助手）、Claude Code（Anthropic 的终端编码工具）、Codex CLI（OpenAI 的命令行 Agent）、Hermes Agent（NousResearch 的 Agent 框架）。每种框架使用独立的 Docker 镜像（从 HuggingFace 下载，约数 GB），但执行相同的 60 个任务和评分标准。Harness 对比表明框架选择对得分有显著影响——Codex 在代码任务上普遍更优，而 Hermes Agent 在社交交互上表现更好。

### 4. 真实环境集成

任务在真实的 OpenClaw 实例中执行，配备真实工具：浏览器（基于 Brave 搜索 API）、bash 终端、文件系统、邮件、日历。数据准备脚本（`prepare.sh`）自动下载 YouTube 视频（足球比赛/讲座/产品发布会）、提取 git 仓库、下载 SAM3 模型权重，确保每个任务都有完整的真实数据环境。支持 OpenRouter 统一模型接入（覆盖 19 个模型），也支持自定义 API 端点绕过 OpenRouter。

### 5. 排行榜与 Personal 评估

提供两类互补的排行榜：模型排行榜（统一 OpenClaw Harness 下的 19 个模型横向对比，Claude Opus 4.7 以 62.2% 领先）和 Harness 对比（同一模型在四个框架下的表现差异）。创新性地引入了 Personal OpenClaw Leaderboard（"养龙虾"排行），允许用户提交个性化 Agent 实例（含自定义 SOUL.md、技能、记忆策略）参与排名，通过 `--lobster-name` 和 `--lobster-workspace` 参数支持。

## 技术亮点

1. **真实环境测试**：在真实 OpenClaw 环境中使用真实工具（浏览器/bash/邮件/日历），而非模拟或 mock 环境
2. **四框架统一评分**：OpenClaw / Claude Code / Codex / Hermes 同任务同评分，首次实现跨框架 Agent 能力分离
3. **60 个原创手工任务**：非改编自现有基准，每个任务从零设计以压力测试真实世界能力
4. **Docker 隔离执行**：每个任务独立容器，Ground Truth 和评分脚本仅在 Agent 完成后注入，杜绝数据泄漏，跨机器可复现
5. **难度梯度有效**：最强模型（Claude Opus 4.7）仅达 62.2%，Grok 4.20 Beta 仅 19.3%，分数具有真实区分度
6. **Personal Leaderboard**：允许提交个性化 Agent 实例参与排行，探索技能组合和人格设计对 Agent 表现的影响

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 评估方法论 | 四 Harness 统一评分的设计为 Self-Evolve 的 Agent 评估提供方法论参考 |
| 任务设计 | 60 个真实场景任务（6 大类）的设计思路可用于 Self-Evolve 的能力测试用例设计 |
| 安全评估 | Safety Alignment 类任务的提示注入和凭证泄漏测试直接适用于 Self-Evolve 的安全审计 |
| 代码智能测试 | 无文档代码库推理任务（SAM3 推理脚本）的设计思路可用于 Self-Evolve 的代码理解能力评估 |
| 隔离执行 | Docker 隔离 + 延迟注入 Ground Truth 的模式为 Self-Evolve 的公平评估提供工程方案 |
| 模型排行 | 19 个模型的横评数据为 Self-Evolve 的模型选型提供实证参考 |

## 参考资料

- 技术报告：https://arxiv.org/abs/2605.10912
- 交互式排行榜：https://internlm.github.io/WildClawBench/
- HuggingFace 数据集：https://huggingface.co/datasets/internlm/WildClawBench
- GitHub 仓库：https://github.com/internlm/WildClawBench
- OpenClaw 项目：https://github.com/openclaw/openclaw

## GitNexus 深度架构分析

- **源码位置**：`projects/repos/internlm__wildclawbench`
- **分析命令**：`gitnexus analyze repos/internlm__wildclawbench --index-only --skip-git --name WildClawBench`
