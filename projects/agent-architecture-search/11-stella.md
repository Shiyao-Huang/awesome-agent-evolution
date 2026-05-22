# STELLA: 生物医学自进化 Agent

> GitHub: https://github.com/asfarasimconcerned/STELLA
> Stars: 100+ | 语言: Python
> 论文: arXiv:2507.02004 (2025) + bioRxiv 扩展版

---

## 核心定位

面向生物医学研究的自进化 LLM Agent。通过**动态模板库 + 动态工具库**两大自进化机制，在 HLE Biomedicine 和 LAB-Bench 上超越 GPT-4 等通用模型。

## 核心架构

### 四 Agent 系统

| Agent | 职责 |
|-------|------|
| **Manager Agent** | 任务分配和协调 |
| **Dev Agent** | 工具开发和执行 |
| **Critic Agent** | 结果评估和反馈 |
| **Tool Creation Agent** | 自主创建新工具 |

### 自进化机制

1. **动态模板库**: 推理策略随使用不断增长
2. **动态工具库**: 可用工具随时间自动扩展
3. **工具海洋 (Tool Ocean)**: 预定义工具 + 自进化工具的统一接口

## 技术栈

- **语言**: Python
- **UI**: Gradio Web 界面
- **记忆**: Mem0 增强记忆系统
- **工具**: 文献搜索、生物数据库、虚拟筛选、酶分析、生物安全

## 性能

- **HLE Biomedicine**: 超越 GPT-4
- **LAB-Bench (DBQA/LitQA)**: 领域最强
- 随计算预算增加，性能持续提升（自进化效果）

## Self Evolve 关联

- **垂直领域自进化**: 将自进化理念应用到生物医学
- **工具自创建**: Tool Creation Agent 自主开发新工具
- **模板学习**: 推理策略的可复用模板
- **持续改进**: 计算预算越多，性能越好

## 本地路径

`repos/asfarasimconcerned__stella/`
