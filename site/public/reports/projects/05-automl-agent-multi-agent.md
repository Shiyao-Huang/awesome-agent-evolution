# AutoML-Agent: 多 Agent 协作的自动化机器学习

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/DeepAuto-AI/automl-agent |
| 作者 | Patara Trirat, Wonyong Jeong, Sung Ju Hwang |
| 论文 | AutoML-Agent: A Multi-Agent LLM Framework for Full-Pipeline AutoML (ICML 2025) |
| 技术栈 | Python 3.11, vLLM 0.4.1, Mixtral-8x7B (LoRA), PyTorch, LangChain, AutoGluon |
| 许可证 | CC BY-NC 4.0 (非商用) |

## 项目简介

AutoML-Agent 是一个**分层管理式多 Agent** 的 AutoML 框架，用 LLM 驱动的五个专业 Agent 完成从数据理解到模型部署的完整 ML 流水线。

核心创新：将 AutoML 分解为五个专职 Agent 的协作任务 + 多计划并行 + 自动修订循环。

## 目录结构

```
automl-agent/
├── configs.py                    # 全局配置（LLM后端、API密钥、任务指标映射）
├── AutoMLAgent.ipynb             # 入口 Jupyter Notebook
├── agent_manager/                # ★ Manager Agent（状态机 + 知识检索）
│   ├── __init__.py               # AgentManager + 7状态FSM + 主循环
│   └── retriever.py              # 4路知识检索 + 对抗性噪声注入
├── prompt_agent/                 # Prompt Agent（自然语言→JSON）
├── data_agent/                   # Data Agent（数据方案 + 6级检索回退）
│   ├── __init__.py               # DataAgent 类
│   └── retriever.py              # HF/Kaggle/PyTorch/TF/UCI/OpenML 检索
├── model_agent/                  # Model Agent（建模方案 + 3级检索）
│   ├── __init__.py               # ModelAgent 类
│   └── retriever.py              # HF/Kaggle/PyTorch Hub 检索
├── operation_agent/              # Operation Agent（代码生成+自修复）
│   ├── __init__.py               # OperationAgent 类（最多5次迭代修复）
│   └── execution.py              # 子进程代码执行器
├── prompt_pool/                  # 7种任务的代码骨架模板
│   ├── tabular_classification.py # 表格分类（F1）
│   ├── tabular_regression.py     # 回归（RMSLE）
│   ├── tabular_clustering.py     # 聚类（RI）
│   ├── image_classification.py   # 图像分类（ACC）
│   ├── text_classification.py    # 文本分类（ACC）
│   ├── node_classification.py    # 图节点分类（ACC）
│   └── ts_forecasting.py         # 时序预测（RMSLE）
├── experiments/                  # 实验评估（含约束/自由/AgentK/SELA对比）
├── utils/
│   ├── embeddings.py             # RAG 检索（FAISS/BM25 + CrossEncoder重排）
│   └── evol_instruct/            # ★ 进化指令模块（深度+广度进化）
│       ├── depth.py              # 深度进化（4种策略）
│       └── breadth.py            # 广度进化
└── example_plans/                # 示例计划（few-shot）
```

## 核心模块分析

### 1. 多 Agent 协作模式

**分层管理式架构**：

```
用户输入 (自然语言)
       ↓
[Prompt Agent] ──解析──> JSON结构化需求
       ↓
[Agent Manager] ──规划──> 生成N个并行计划
       ├──> [Data Agent] ──数据检索/预处理──> 数据方案
       │       ↓
       ├──> [Model Agent] ──模型检索/优化──> 建模方案
       │       ↓
       └──> [Operation Agent] ──代码生成/执行──> 可执行.py文件
```

**7状态有限状态机**（`agent_manager/__init__.py`）：

| 状态 | 含义 |
|------|------|
| INIT | 接收用户输入，解析需求 |
| PLAN | 生成多个候选计划 |
| ACT | 并行执行 Data/Model Agent |
| PRE_EXEC | 验证方案是否通过 |
| EXEC | Operation Agent 写代码 |
| POST_EXEC | 验证代码执行结果 |
| REV | 修订失败计划 |

**并行执行 + 串行验证**：
```python
# 并行执行多个计划
with Pool(self.n_plans) as pool:
    self.action_results = pool.map(self.execute_plan, self.plans)

# 每个计划内部串行: Data Agent → Model Agent
def execute_plan(self, plan):
    data_result = DataAgent(...).execute_plan(plan, data_path)
    model_result = ModelAgent(...).execute_plan(plan, data_result)
    return {"data": data_result, "model": model_result}
```

### 2. 进化/自我改进机制

**计划级迭代修订**：所有计划失败时，Manager 反思原因并重新规划：
```python
fail_rationale = self.generate_reply(fail_prompt)
plan_prompt = f"使用以下失败洞察创建新计划...{fail_rationale}"
```

**代码级自动修复**（最多 5 次迭代）：
```python
def implement_solution(self, code_instructions, n_attempts=5):
    while iteration < n_attempts:
        rcode, log = self.self_validation(filename)
        if rcode == 0: break
        # 将错误信息反馈到下一轮
        exec_prompt = "...If there is any error, please carefully fix it first."
```

**Evol-Instruct 提示进化**（`utils/evol_instruct/`）：
- **深度进化**（4种策略）：添加约束 / 加深问题 / 具体化抽象 / 增加推理步骤
- **广度进化**：基于已有提示创造同领域更罕见的变体

**对抗性噪声注入**（Adversarial Agent）：
- 生成不相关干扰信息测试 Agent 鲁棒性
- 支持 `pre`（注入知识前）和 `post`（注入知识后）两种时机

### 3. Prompt 工程模式

**角色增强梯度策略**（实验验证有效）：
```
"You are a helpful assistant."
  → "You are a [role] of an AutoML project..."
    → "You are an experienced [role]..."
      → "You are the world's best [role]..."
```

**统一 Prompt 模板**：
```
[系统角色定义] + [任务描述] + [上下文信息] + [约束条件列表] + [输出要求]
```

**两级验证**：
- **PRE_EXEC**：代码生成前验证文本方案
- **POST_EXEC**：代码执行后验证结果

**Prompt Pool 代码模板**（7种任务）：
每个模板定义函数签名和评估框架，LLM 填充 TODO：
```python
def preprocess_data():    # TODO: 数据预处理
def train_model():        # TODO: 模型训练
def evaluate_model():     # 框架已有指标计算
def prepare_for_deploy(): # TODO: 模型压缩
```

### 4. 评估框架

**7种任务类型 + 评估指标**：

| 任务 | 指标 | 数据源 |
|------|------|--------|
| 图像分类 | ACC | Butterfly, Shopee |
| 文本分类 | ACC | Ecommerce, Entailment |
| 表格分类 | F1 | Banana, Defects |
| 表格回归 | RMSLE | Crab, Crop |
| 表格聚类 | RI | Smoker, Education |
| 图节点分类 | ACC | Cora, Citeseer |
| 时序预测 | RMSLE | Weather, Electricity |

**RAG 检索管线**（`utils/embeddings.py`）：
- 策略1：FAISS + CrossEncoder 重排序
- 策略2：BM25 稀疏检索

**数据/模型多级回退检索**：
- Data Agent：HF → Kaggle → PyTorch → TF → UCI → OpenML → LLM搜索（7级）
- Model Agent：HF → Kaggle → PyTorch Hub（3级）

**评估方式**：生成 Python 代码 → 无错误执行 → 包含 "Model Performance on Test Set" 输出

## 技术亮点

1. **多计划并行 + 自动修订**：N 个独立计划并行执行，失败后反思重规划
2. **5个专职 Agent**：PM + 数据 + 模型 + 运维 + Prompt 的完整团队
3. **Evol-Instruct 进化**：深度（4策略）+ 广度提示进化
4. **对抗性噪声注入**：内置鲁棒性测试
5. **4路知识检索**：Google/arXiv/PapersWithCode/Kaggle 并行检索
6. **代码自动修复**：最多 5 次迭代修复
7. **ICML 2025** 顶会认可

## 与 Self-Evolve 关联

| 维度 | AutoML-Agent 贡献 |
|------|-------------------|
| 多 Agent | 分层管理式 5 Agent 架构 + 状态机驱动，可参考 |
| 自我改进 | 计划级修订循环 + 代码级自动修复 + Evol-Instruct 进化 |
| Prompt | 角色增强梯度 + 统一模板 + 两级验证 |
| RAG | 4路知识检索 + 多级回退机制 |
| 评估 | 7种任务类型 + 执行式评估 |
| 启示 | "多 Agent 自动化 ML" → "多 Agent 自动化 Agent 自身设计" |

## 参考资料

- 论文：[AutoML-Agent: A Multi-Agent LLM Framework for Full-Pipeline AutoML](https://arxiv.org/abs/2410.02958) (ICML 2025)
- [项目网站](https://deepauto-ai.github.io/automl-agent/)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/deepauto_ai__automl_agent`（指向 `repos/deepauto_ai__automl_agent` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/deepauto_ai__automl_agent --index-only --skip-git --name automl-agent`。
- **知识图谱规模**：1239 symbols / 1517 edges / 19 clusters / 14 flows。
- **查询语句**：`automl agent planner model data operation prompt evaluate`。
- **核心执行流程候选**：
  - Execute_plan → Print_message
  - Implement_solution → Print_message
  - Make_plans → Print_message
  - Initiate_chat → Print_message
- **关键符号/文件**：
  - `__init__.py`（`utils/__init__.py`）
  - `__init__.py`（`operation_agent/__init__.py`）
  - `OperationAgent`（`operation_agent/__init__.py`）
  - `__init__`（`operation_agent/__init__.py`）
  - `DataAgent`（`data_agent/__init__.py`）
  - `__init__.py`（`data_agent/__init__.py`）
- **调用关系上下文**：
  - 符号 `__init__.py` 位于 `utils/__init__.py` 第 ?–? 行
  - 入边/被依赖关系：imports: 8
  - 出边/调用或包含关系：imports: 1
- **架构结论**：该图谱结果用于把报告中的“进化循环 / Prompt 工程 / 评估框架 / Agent 编排”定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
