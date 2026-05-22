# 代码生成+进化 (Code Generation + Evolution) 项目索引

> 研究方向：LLM 驱动的代码生成、进化优化、自我改进编程系统
> 分析人：Researcher-2
> 日期：2026-05-22
> 项目总数：30

---

## 分类概览

| 类别 | 项目数 | 说明 |
|------|--------|------|
| 进化代码优化 | 6 | LLM+进化算法自动发现/优化代码 |
| 代码生成 RL | 2 | 强化学习驱动的代码生成 |
| 代码生成模型 | 8 | 基础代码 LLM |
| 代码 Agent 工具 | 6 | AI 编程助手/Agent |
| 评测基准 | 3 | 代码生成评测数据集 |
| 综述/资源库 | 5 | 论文索引、综述、工具集合 |

---

## Self Evolve 关联度

| 等级 | 项目 |
|------|------|
| **核心 (HIGH)** | OpenEvolve, CodeEvolve, ReEvo, LLaMEA, FunSearch, WizardCoder, OpenCodeInterpreter, CodeAct, CodeRL, EvoPrompt, Self-Evolving-Agents |
| **相关 (MEDIUM)** | Magicoder, DeepSeek-Coder, CodeT5, CodeContests, Aider, LLM4EC, LLM4Opt, Continue, Sweep, GPT-Engineer |
| **基础 (LOW)** | CodeGen, StarCoder2, Tabby, CodeGeeX, CodeBERT, SQLCoder, LLM_EA, Awesome-Code-LLM, EvoCodeBench |

---

## 项目清单

详细分析见各子文件：

- [01-进化代码优化](./01-evolutionary-code-optimization.md) — OpenEvolve, CodeEvolve, ReEvo, LLaMEA, FunSearch, EvoPrompt
- [02-代码生成RL](./02-code-generation-rl.md) — CodeRL, CodeT5
- [03-代码生成模型](./03-code-generation-models.md) — CodeGen, Magicoder, WizardCoder, DeepSeek-Coder, StarCoder2, CodeGeeX, CodeBERT, SQLCoder
- [04-代码Agent工具](./04-code-agent-tools.md) — OpenCodeInterpreter, CodeAct, Aider, Sweep, GPT-Engineer, Continue
- [05-评测基准](./05-benchmarks.md) — CodeContests/AlphaCode, EvoCodeBench, Tabby
- [06-综述资源](./06-surveys-resources.md) — Self-Evolving-Agents, LLM4EC, LLM4Opt, LLM_EA, Awesome-Code-LLM

---

## Mermaid 关联图谱

```mermaid
graph TB
    subgraph 进化核心
        OE[OpenEvolve]
        CE[CodeEvolve]
        RE[ReEvo]
        LL[LLaMEA]
        FS[FunSearch]
    end

    subgraph 代码生成RL
        CRL[CodeRL]
        CT5[CodeT5/CodeT5+]
    end

    subgraph 代码生成模型
        CG[CodeGen]
        MC[Magicoder]
        WC[WizardCoder]
        DS[DeepSeek-Coder]
        SC[StarCoder2]
        GX[CodeGeeX]
    end

    subgraph 代码Agent
        OCI[OpenCodeInterpreter]
        CA[CodeAct]
        AI[Aider]
        SW[Sweep]
        GE[GPT-Engineer]
        CO[Continue]
    end

    subgraph 综述资源
        SEA[Self-Evolving-Agents]
        L4EC[LLM4EC]
        L4O[LLM4Opt]
    end

    %% 核心进化关系
    FS --> OE --> CE
    RE --> OE
    LL --> CE

    %% 模型依赖
    CT5 --> CRL
    DS --> OCI
    DS --> MC
    SC --> OCI

    %% Agent 依赖模型
    DS --> AI
    CG --> GE

    %% 方法论影响
    WC -->|Evol-Instruct| MC
    SEA -->|综述| OE
    SEA -->|综述| CE
```
