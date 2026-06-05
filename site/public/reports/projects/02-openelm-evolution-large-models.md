# OpenELM: 通过大模型进行进化搜索

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/CarperAI/OpenELM |
| 开发者 | CarperAI (Stability AI 旗下) |
| 技术栈 | Python, LangChain, HuggingFace Transformers, Hydra, NumPy |
| 许可证 | MIT |
| 安装 | `pip install openelm` |

## 项目简介

OpenELM (Open-source Evolution through Large Models) 是 CarperAI 发布的开源进化搜索框架，将**进化算法与 LLM 结合**，支持代码和自然语言的进化搜索。它是 ELM (Evolution Through Large Models) 的开源实现。

核心理念：**用 LLM 替代传统进化算子**（变异、交叉），通过 prompt 引导 LLM 生成多样化的候选解，再用质量-多样性算法（MAP-Elites）维护种群。

## 目录结构

```
OpenELM/
├── src/openelm/
│   ├── elm.py              # ELM 主类（搜索入口）
│   ├── mapelites.py        # MAP-Elites 算法实现
│   ├── environment.py      # 进化环境基类
│   ├── mutation_model.py   # LLM 变异模型封装
│   ├── configs.py          # Hydra 配置（dataclass）
│   ├── codegen/            # 代码生成模块
│   │   ├── codegen.py      # 代码生成器
│   │   └── triton_utils/   # Triton 推理加速
│   ├── sandbox/            # 代码执行沙箱（gVisor）
│   └── environments/       # 各种进化环境
│       ├── sodaracer.py    # 2D 物理仿真机器人
│       ├── image_evolution.py  # 图像进化
│       ├── programming_puzzles.py  # 编程谜题
│       ├── prompt_evolution.py  # Prompt 进化
│       └── poetry.py       # 诗歌创作（QDAIF）
├── run_elm.py              # 主运行入口
├── run_p3.py               # 编程谜题入口
├── tests/                  # 测试
├── docs/                   # 文档
└── trlx_example/           # RLHF 示例
```

## 核心模块分析

### 1. 进化循环实现

OpenELM 的进化架构分为四层：

```
ELM (主控制器)
  └── MAP-Elites (选择算法)
        └── Environment (环境/适应度)
              └── MutationModel (LLM 变异)
```

**MAP-Elites 算法流程**：
1. **初始化**：随机或用 LLM 生成初始种群
2. **变异**：调用 `MutationModel`（LLM）对选中个体进行变异
3. **评估**：在 `Environment` 中评估适应度和多样性特征
4. **选择**：MAP-Elites 网格维护：新个体替换同格子中更差的个体
5. **迭代**：重复 2-4 直到收敛

支持的质量-多样性算法：
- **MAP-Elites**：标准网格映射
- **CVT-MAP-Elites**：连续 Voronoi 分类
- **Deep Grid MAP-Elites**：深度学习增强的网格

### 2. Prompt 工程模式

OpenELM 使用 prompt 驱动的进化算子：

**变异 Prompt**（基于 instruct model）：
```
以下是一个 {domain} 解决方案：
{parent_code}
请对这个方案进行修改/变异，保持功能但尝试不同的方法。
```

**交叉 Prompt**（LLM 驱动的交叉）：
```
以下是两个 {domain} 解决方案：
方案A: {parent_a_code}
方案B: {parent_b_code}
请结合两个方案的优点，生成一个新的解决方案。
```

**Diff 模型**：专门的代码 diff 模型，用于精确的代码变异。

### 3. 评估框架

**环境类型**：

| 环境 | 适应度函数 | 多样性度量 |
|------|-----------|-----------|
| Sodarace | 2D 物理仿真中机器人的移动距离 | 形态特征 |
| 图像进化 | 视觉质量评分 | 像素特征 |
| 编程谜题 | 通过率 | 解法多样性 |
| Prompt 进化 | 目标 LLM 性能 | Prompt 特征 |
| 诗歌 (QDAIF) | LLM 质量评分 + 多样性 | 文本特征 |

**沙箱机制**：使用 gVisor 容器隔离执行生成的代码，确保安全性。

### 4. GitNexus 知识图谱

- **节点**：覆盖所有核心类和函数
- **核心进程**：
  - `Main → Evaluate` (主循环评估)
  - `Main → Construct_prompt` (构造变异 prompt)
  - `Main → To_mapindex` (映射到 MAP-Elites 网格)
  - `Main → To_phenotype` (基因型到表现型转换)

## 技术亮点

1. **LLM 作为进化算子**：用 LLM 替代传统变异/交叉，更智能地生成候选解
2. **质量-多样性搜索**：不只寻找单一候选，而是维护一组多样化的高评分候选
3. **LangChain 集成**：支持几乎所有 LLM API（OpenAI, HuggingFace, 本地模型）
4. **安全沙箱**：gVisor 隔离的代码执行环境
5. **可扩展环境**：5 种预置环境 + 易于自定义新环境
6. **Hydra 配置**：所有参数可通过命令行覆盖

## 与 Self-Evolve 关联

| 维度 | OpenELM 贡献 |
|------|-------------|
| 进化循环 | 完整的 MAP-Elites + LLM 进化框架，可作为 Agent 进化的基础 |
| Prompt 工程 | 变异/交叉 prompt 模板设计参考 |
| 多样性 | 质量-多样性搜索保证进化不陷入局部最优 |
| 沙箱 | 安全执行进化代码的参考实现 |
| 启示 | "LLM 进化代码" 的范式直接适用于 Self-Evolve 的代码自我改进 |

## 参考资料

- [CarperAI OpenELM GitHub](https://github.com/CarperAI/OpenELM)
- ELM 论文: Evolution Through Large Models
- [Quality-Diversity with AI Feedback (QDAIF)](https://carper.ai/qdaif)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/carperai__openelm`（指向 `repos/carperai__openelm` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/carperai__openelm --index-only --skip-git --name OpenELM`。
- **知识图谱规模**：3596 symbols / 6639 edges / 157 clusters / 139 flows。
- **查询语句**：`evolution search language model mutate evaluate population`。
- **核心执行流程候选**：
  - Fitness → Format
  - Main → Benchmark_bugs
  - Main → Mutate_code
  - Main → Pool_exec_processes
- **关键符号/文件**：
  - `elm.py`（`src/openelm/elm.py`）
  - `ELM`（`src/openelm/elm.py`）
  - `__init__`（`src/openelm/elm.py`）
  - `run_p3.py`（`run_p3.py`）
  - `P3`（`run_p3.py`）
  - `__init__`（`run_p3.py`）
- **调用关系上下文**：
  - 符号 `elm.py` 位于 `src/openelm/elm.py` 第 ?–? 行
  - 入边/被依赖关系：imports: 1
  - 出边/调用或包含关系：imports: 8
- **架构结论**：该图谱结果用于把报告中的“进化循环 / Prompt 工程 / 评估框架 / Agent 编排”定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
