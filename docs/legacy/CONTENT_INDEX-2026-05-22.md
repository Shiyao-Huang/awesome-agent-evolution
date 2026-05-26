# Self Evolve 全产出内容索引

> 最后更新：2026-05-22 | 维护者：Scribe

---

## 目录

- [1. 项目分析报告（projects/）](#1-项目分析报告projects)
- [2. 研究型项目分析（research/projects/）](#2-研究型项目分析researchprojects)
- [3. 论文精读笔记（research/papers/）](#3-论文精读笔记researchpapers)
- [4. 跨领域研究（papers/cross-domain/）](#4-跨领域研究paperscross-domain)
- [5. LLM 自我改进研究（papers/llm-self-improvement/）](#5-llm-自我改进研究papersllm-self-improvement)
- [6. 论文评审（paper-reviews/）](#6-论文评审paper-reviews)
- [7. 仓库分析（analysis/）](#7-仓库分析analysis)
- [8. 研究素材（research/）](#8-研究素材research)
- [9. 克隆仓库（repos/）](#9-克隆仓库repos)
- [10. 原始数据](#10-原始数据)
- [11. Landing Page（site/）](#11-landing-pagesite)

---

## 1. 项目分析报告（projects/）

> 格式：统一 frontmatter + 7 章节结构 | 共 10 个项目

| 项目 | 仓库 | Stars | 进化模式 | 报告 |
|------|------|------:|----------|------|
| OpenEvolve | algorithmicsuperintelligence/openevolve | 6,358 | 进化/搜索 → 评估器/打分器 | [algorithmicsuperintelligence__openevolve.md](projects/algorithmicsuperintelligence__openevolve.md) |
| Agents | aiwaves-cn/agents | 5,928 | 进化/搜索 → 评估器 → 智能体编排 | [aiwaves_cn__agents.md](projects/aiwaves_cn__agents.md) |
| Reflexion | noahshinn/reflexion | 3,158 | 进化/搜索 → 反思记忆 → 反馈-精炼 → 评估器 → 训练循环 | [noahshinn__reflexion.md](projects/noahshinn__reflexion.md) |
| AgentEvolver | modelscope/AgentEvolver | 1,441 | 进化/搜索 → 评估器 → 智能体编排 → 训练循环 | [modelscope__agentevolver.md](projects/modelscope__agentevolver.md) |
| Self-Refine | madaan/self-refine | 805 | 反馈-精炼 | [madaan__self_refine.md](projects/madaan__self_refine.md) |
| SE-Agent | JARVIS-Xs/SE-Agent | 274 | 进化/搜索 → 评估器 → 智能体编排 | [jarvis_xs__se_agent.md](projects/jarvis_xs__se_agent.md) |
| Science-CodeEvolve | inter-co/science-codeevolve | 97 | 进化/搜索 → 评估器/打分器 | [inter_co__science_codeevolve.md](projects/inter_co__science_codeevolve.md) |
| SCOPE | JarvisPei/SCOPE | 77 | 进化/搜索循环 | [jarvispei__scope.md](projects/jarvispei__scope.md) |
| LLM-Self-Judge | OPPO-Mente-Lab/LLM-Self-Judge | 43 | 进化/搜索 → 评估器 → 智能体编排 → 训练循环 | [oppo_mente_lab__llm_self_judge.md](projects/oppo_mente_lab__llm_self_judge.md) |
| DARWIN | ZJU-LLM-Safety/DARWIN | 41 | 进化/搜索 → 反思记忆 | [zju_llm_safety__darwin.md](projects/zju_llm_safety__darwin.md) |

**索引文件**：[projects/INDEX.md](projects/INDEX.md) | **清单**：[projects/projects_manifest.json](projects/projects_manifest.json)

### Landing Page 分组

- **进化式代码 / AlphaEvolve 类**：OpenEvolve、CodeEvolve、SE-Agent
- **Agent 自进化系统**：AgentEvolver、aiwaves agents、SCOPE
- **反思 / 精炼经典范式**：Reflexion、Self-Refine
- **安全、评判与数据/模型自进化**：DARWIN、LLM-Self-Judge

---

## 2. 研究型项目分析（research/projects/）

> 格式：中文，7 章节结构（基本信息/项目简介/目录结构/核心模块分析/技术亮点/与Self-Evolve关联/参考资料） | 共 9 个项目

| # | 项目 | 技术栈 | 与 Self Evolve 关联度 | 报告 |
|---|------|--------|----------------------|------|
| 01 | OPRO: LLM 作为优化器 | Python, OpenAI API, PaLM API | 很高 | [01-opro-llm-as-optimizer.md](research/projects/01-opro-llm-as-optimizer.md) |
| 02 | OpenELM: 大模型进化 | Python | 高 | [02-openelm-evolution-large-models.md](research/projects/02-openelm-evolution-large-models.md) |
| 03 | ADAS: 自动化 Agent 设计 | Python | 很高 | [03-adas-automated-design-agentic-systems.md](research/projects/03-adas-automated-design-agentic-systems.md) |
| 04 | FunSearch: 数学发现 | Python, JAX | 很高 | [04-funsearch-mathematical-discoveries.md](research/projects/04-funsearch-mathematical-discoveries.md) |
| 05 | AutoML-Agent: 多 Agent AutoML | Python | 很高 | [05-automl-agent-multi-agent.md](research/projects/05-automl-agent-multi-agent.md) |
| 06 | CoML: ML Copilot | Python | 中高 | [06-coml-mlcopilot.md](research/projects/06-coml-mlcopilot.md) |
| 07 | MetaGPT: 多 Agent 框架 | Python | 高 | [07-metagpt-multi-agent-framework.md](research/projects/07-metagpt-multi-agent-framework.md) |
| 08 | AutoGPT: 自主 Agent | Python | 中高 | [08-autogpt-autonomous-agent.md](research/projects/08-autogpt-autonomous-agent.md) |
| 09 | CrewAI: 多 Agent 框架 | Python | 中高 | [09-crewai-multi-agent-framework.md](research/projects/09-crewai-multi-agent-framework.md) |

---

## 3. 论文精读笔记（research/papers/）

> 格式：英文，7 章节结构（Summary / Core Method / Key Formulas / Benchmarks / Authors / Limitations / Citation Context） | 共 12 篇

| # | 论文 | 核心贡献 | 与 Self Evolve 关联度 | 笔记 |
|---|------|----------|----------------------|------|
| 01 | Agent Symbolic Learning | 符号化 Agent 学习 | 高 | [01-agent-symbolic-learning.md](research/papers/01-agent-symbolic-learning.md) |
| 02 | Darwin Gödel Machine | 达尔文式自改进机器 | 很高 | [02-darwin-godel-machine.md](research/papers/02-darwin-godel-machine.md) |
| 03 | Gödel Agent | 自引用 Agent 架构 | 高 | [03-godel-agent.md](research/papers/03-godel-agent.md) |
| 04 | ADAS | 自动化架构搜索 | 高 | [04-adas.md](research/papers/04-adas.md) |
| 05 | Reflexion | 语言反思作为强化学习 | 很高 | [05-reflexion.md](research/papers/05-reflexion.md) |
| 06 | Self-Refine | 迭代式自反馈精炼 | 高 | [06-self-refine.md](research/papers/06-self-refine.md) |
| 07 | Absolute Zero | 零样本自进化 | 很高 | [07-absolute-zero.md](research/papers/07-absolute-zero.md) |
| 08 | AlphaEvolve | Gemini 驱动进化编码 | 很高 | [08-alphaevolve.md](research/papers/08-alphaevolve.md) |
| 09 | RISE | 递归式自改进 | 高 | [09-rise.md](research/papers/09-rise.md) |
| 10 | RAGen | RAG 增强生成 | 中高 | [10-ragen.md](research/papers/10-ragen.md) |
| 11 | SelfEvolve | 自进化框架 | 很高 | [11-selfevolve.md](research/papers/11-selfevolve.md) |
| 12 | ReVeal | 验证引导的进化学习 | 高 | [12-reveal.md](research/papers/12-reveal.md) |

---

## 4. 跨领域研究（papers/cross-domain/）

> 覆盖 5 个交叉领域：AutoML+LLM、NAS+LLM、LLM 自我改进、进化计算+LLM、Agent 框架

| 文件 | 说明 |
|------|------|
| [README.md](papers/cross-domain/README.md) | 跨领域研究综述（含表格 + Mermaid 关系图） |
| [sources.md](papers/cross-domain/sources.md) | 参考来源索引（arXiv / GitHub / Nature） |
| [relationship-map.mmd](papers/cross-domain/relationship-map.mmd) | Mermaid 关系图源文件 |

---

## 5. LLM 自我改进研究（papers/llm-self-improvement/）

> Researcher-2 产出 | 覆盖 Self-Refine/Self-Debug/Self-Play/Constitutional AI/STaR/Reflexion

| 文件 | 说明 |
|------|------|
| [06-author-network.md](papers/llm-self-improvement/06-author-network.md) | LLM 自我改进方向作者关系网络与跨论文图谱 |
| [README.md](papers/llm-self-improvement/README.md) | 目录说明与待整理清单 |

---

## 6. 论文评审（paper-reviews/）

> 共 137 篇评审 | 格式：统一 review 模板

关键评审文件：
- [coverage-audit-2026-05-21.md](paper-reviews/coverage-audit-2026-05-21.md) — 覆盖度审计
- [progress-51-88.md](paper-reviews/progress-51-88.md) — 进度追踪

---

## 7. 仓库分析（analysis/）

| 文件 | 说明 |
|------|------|
| [framework-painpoint-crosswalk.md](analysis/framework-painpoint-crosswalk.md) | 框架痛点交叉分析 |
| [paper-review-coverage.md](analysis/paper-review-coverage.md) | 论文评审覆盖率分析 |
| [paper-review-coverage-51-88-latest.md](analysis/paper-review-coverage-51-88-latest.md) | 最新覆盖率（51-88 批次） |
| [paper-review-progress-51-88.md](analysis/paper-review-progress-51-88.md) | 评审进度追踪 |
| [repo-cross-analysis.md](analysis/repo-cross-analysis.md) | 仓库交叉分析 |
| [repo-techstack-cross-analysis.md](analysis/repo-techstack-cross-analysis.md) | 技术栈交叉分析 |

---

## 8. 研究素材（research/）

### 6.1 分类与交叉分析

| 文件 | 说明 |
|------|------|
| [repo-classification.md](research/repo-classification.md) | 仓库分类报告 |
| [repo-classification.json](research/repo-classification.json) | 分类数据（JSON） |
| [repo-classification.csv](research/repo-classification.csv) | 分类数据（CSV） |
| [repo-classification-verification.md](research/repo-classification-verification.md) | 分类验证 |
| [cross-analysis.md](research/cross-analysis.md) | 交叉分析 |
| [cross-reference.md](research/cross-reference.md) | 交叉引用 |

### 6.2 作者网络

| 文件 | 说明 |
|------|------|
| [author-network.md](research/author-network.md) | 作者关系网络 |
| [blog-author-profiles.md](research/blog-author-profiles.md) | 作者画像汇总 |
| [blog-author-profiles-all.md](research/blog-author-profiles-all.md) | 全部作者画像 |
| [blog-author-profiles-targeted.md](research/blog-author-profiles-targeted.md) | 重点作者画像 |
| [blog-author-profiles-batches/](research/blog-author-profiles-batches/) | 分批作者画像（4 批） |

### 6.3 热门项目追踪

| 文件 | 说明 |
|------|------|
| [hot-search-batch-1.md](research/hot-search-batch-1.md) | 热门搜索批次 1 |
| [hot-search-batch-2.md](research/hot-search-batch-2.md) | 热门搜索批次 2 |
| [hot-search-batch-3.md](research/hot-search-batch-3.md) | 热门搜索批次 3 |
| [missing-hot-projects-2026-05-22.md](research/missing-hot-projects-2026-05-22.md) | 缺失热门项目 |

### 6.4 综述资料

| 文件 | 说明 |
|------|------|
| [agent-self-evolution-papers-detailed-ZH.md](research/agent-self-evolution-papers-detailed-ZH.md) | Agent 自进化论文详细综述（中文） |
| [agent-self-evolution-papers-detailed.md](research/agent-self-evolution-papers-detailed.md) | Agent 自进化论文详细综述（英文） |
| [survey-methodology-guide.md](research/survey-methodology-guide.md) | 综述方法论指南 |

---

## 9. 克隆仓库（repos/）

> 共 10 个已克隆仓库，与 projects/ 报告一一对应

| 仓库 | 本地路径 |
|------|----------|
| aiwaves-cn/agents | repos/aiwaves_cn__agents |
| algorithmicsuperintelligence/openevolve | repos/algorithmicsuperintelligence__openevolve |
| inter-co/science-codeevolve | repos/inter_co__science_codeevolve |
| JARVIS-Xs/SE-Agent | repos/jarvis_xs__se_agent |
| JarvisPei/SCOPE | repos/jarvispei__scope |
| madaan/self-refine | repos/madaan__self_refine |
| modelscope/AgentEvolver | repos/modelscope__agentevolver |
| noahshinn/reflexion | repos/noahshinn__reflexion |
| OPPO-Mente-Lab/LLM-Self-Judge | repos/oppo_mente_lab__llm_self_judge |
| ZJU-LLM-Safety/DARWIN | repos/zju_llm_safety__darwin |

---

## 10. 原始数据

| 目录/文件 | 说明 | 记录数 |
|-----------|------|--------|
| raw-github/ | GitHub 仓库原始数据 | ~348 |
| raw-papers/ | 论文原始数据 | ~184 |
| raw-blogs/ | 博客原始数据 | ~1,300 |
| raw-social/ | 社交媒体数据 | ~1,200 |
| raw-social-rank/ | 社交媒体排名 | ~450 |
| raw-github/INDEX.md | GitHub 数据索引 | — |
| analysis/social-media-resources.md | 社交媒体资源汇总（英文） | — |
| analysis/social-media-resources-ZH.md | 社交媒体资源汇总（中文） | — |
| analysis/github-agent-evolution-repos.md | Agent 进化仓库列表（英文） | — |
| analysis/github-agent-evolution-repos-ZH.md | Agent 进化仓库列表（中文） | — |
| raw-social/mom-test/mom-test-findings*.md | Mom Test 调研发现（多平台） | 8 份 |
| reports/cross-validation-report.md | 交叉验证报告 | — |

---

## 11. Landing Page（site/）

> Astro 框架 | 状态：内容完成，待 build 验证

### 数据层

| 文件 | 说明 |
|------|------|
| site/src/data/projects.ts | 项目数据 |
| site/src/data/research.ts | 研究数据 |
| site/src/data/community.ts | 社区数据 |
| site/src/data/site.ts | 站点配置 |

### 博客文章（7 篇）

| 文件 | 标题 |
|------|------|
| site/src/content/blog/ai-self-evolution-map.mdx | 什么是 AI 自我进化？一张面向开发者的地图 |
| site/src/content/blog/cross-domain-research-map.mdx | AI 自我进化的跨领域图谱：从 AutoML 到 Agent 自修改 |
| site/src/content/blog/llm-as-evolutionary-optimizer.mdx | LLM 即优化器：从 OPRO 到 FunSearch 的进化式编码 |
| site/src/content/blog/code-self-improvement-playbook.mdx | 代码自我改进：从智能体补丁到回归门禁 |
| site/src/content/blog/researcher-network.mdx | Self Evolve 研究者图谱：谁在推动 AI 自我进化 |
| site/src/content/blog/self-evolve-project-index.mdx | Self Evolve GitHub 项目索引如何阅读 |
| site/src/content/blog/agent-evolution-layer.mdx | Reflexion 深度解读：用语言反思替代参数更新 |

### 研究页面（14 篇）

12 篇核心论文精读 + 2 篇专题（跨领域图谱 / LLM 优化器进化）

---

## 格式标准

### 项目报告统一格式（projects/）

```markdown
---
title: "项目名"
repo: "org/repo"
url: "https://github.com/org/repo"
stars: 数值
forks: 数值
last_pushed: "ISO日期"
license: "许可证"
language: "语言"
local_path: "repos/本地路径"
---

# 项目名

## 项目概览
## 技术栈
## 核心架构图（文字描述）
## 目录结构信号
## 关键代码片段分析
## 实现方法提取
## 与其他项目的对比
```

### 研究型项目分析统一格式（research/projects/）

```markdown
# 项目中文名

## 基本信息
## 项目简介
## 目录结构
## 核心模块分析
## 技术亮点
## 与 Self-Evolve 关联
## 参考资料
```

### 论文笔记统一格式（research/papers/）

```markdown
# 论文标题

> arXiv: ID | 发表信息 | 作者

## Summary
## Core Method
## Key Formulas
## Benchmarks & Results
## Authors & Affiliations
## Limitations
## Citation Context
```

---

## 待补充产出

以下为进行中或待创建的内容：

- [x] `papers/llm-self-improvement/` — LLM 自我改进方向论文笔记（作者关系网络已完成）
- [x] `research/projects/` — 新增 9 篇研究型项目分析（已完成）
- [x] `site/src/data/` — 数据层整合（已完成）
- [x] `site/src/content/blog/` — 7 篇 SEO 博客（已完成）
- [x] `site/src/content/research/` — 14 篇研究页面（已完成）
- [ ] Landing Page build 验证（受主机内存限制阻塞）
