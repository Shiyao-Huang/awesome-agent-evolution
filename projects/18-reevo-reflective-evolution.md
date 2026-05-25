# ReEvo: 大语言模型作为超启发式的反射式进化搜索

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/ai4co/reevo |
| Star | 0.5k+ |
| 技术栈 | Python, Hydra/OmegaConf, LiteLLM, NumPy |
| 许可证 | MIT (推测) |
| 安装 | `pip install -e ".[gls,aco,nco]"` 或 `uv sync --all-extras` |

## 项目简介

ReEvo (Reflective Evolution) 是 NeurIPS 2024 接收的研究工作，提出了将大语言模型作为**语言超启发式 (Language Hyper-Heuristics, LHHs)** 的通用搜索框架。传统超启发式 (Hyper-Heuristics) 在预定义的启发式空间中搜索，而 LHHs 利用 LLM 的代码生成能力和互联网规模的领域知识，实现了**最小化人工干预**且**开放式启发式空间**的搜索。

ReEvo 的核心创新在于**反射式进化 (Reflective Evolution)** 机制：模拟人类专家反思式的设计过程，通过短期反射 (Short-term Reflection) 分析当前启发式的优劣，通过长期反射 (Long-term Reflection) 积累跨迭代的经验知识，同时结合交叉 (Crossover) 和变异 (Mutation) 算子进行种群进化。该框架在黑盒和白盒两种设置下，对 TSP、CVRP、OP、MKP、BPP、DPP 等经典组合优化问题均取得了超越人类设计的启发式效果。

项目强调"给 ReEvo 5 分钟，换取一个 SOTA 算法"的理念，展示了 LLM 驱动的自动算法发现在组合优化领域的巨大潜力。

## 目录结构

```
reevo/
├── main.py                 # 入口文件，Hydra 配置驱动
├── reevo.py                # 核心进化框架类
├── cfg/                    # Hydra 配置文件
│   ├── problem/            # 各问题配置 (tsp_aco, cvrp_aco 等)
│   └── llm_client/         # LLM 客户端配置
├── problems/               # 问题定义与评估管道
│   ├── tsp_aco/            # TSP + ACO
│   ├── cvrp_aco/           # CVRP + ACO
│   ├── bpp_offline_aco/    # BPP + ACO
│   ├── tsp_gls/            # TSP + GLS
│   ├── tsp_pomo/           # TSP + POMO (神经组合优化)
│   └── ...                 # 更多问题
├── prompts/                # 提示词模板
│   ├── common/             # 通用提示 (生成器、反射器、交叉、变异)
│   ├── tsp_aco/            # 问题特定提示
│   └── ...
├── utils/                  # 工具函数 (LLM 客户端等)
├── baselines/              # 基线方法
└── docs/                   # 文档构建
```

## 核心模块分析

### 1. ReEvo 主类 (reevo.py)

ReEvo 类是整个框架的核心，管理进化循环、种群维护和多 LLM 协作。其关键设计是支持为四个算子配置不同的 LLM：

```python
class ReEvo:
    def __init__(
        self, cfg, root_dir, generator_llm,
        reflector_llm=None,
        short_reflector_llm=None,   # 短期反射 LLM
        long_reflector_llm=None,    # 长期反射 LLM
        crossover_llm=None,         # 交叉算子 LLM
        mutation_llm=None           # 变异算子 LLM
    ):
        self.long_term_reflection_str = ""  # 累积的长期反射知识
        self.init_prompt()
        self.init_population()
```

### 2. 反射式进化循环

ReEvo 的进化过程包含三个关键反射步骤：

- **短期反射**：分析当前启发式代码在评估中的表现，生成具体的改进建议
- **长期反射**：将历次迭代的经验知识积累成结构化文本，作为后续进化的领域知识
- **交叉与变异**：基于反射结果，利用 LLM 生成新的启发式代码

```python
# 运行示例
python main.py \
    problem=tsp_aco \
    init_pop_size=4 \
    pop_size=4 \
    max_fe=20 \
    timeout=20
```

### 3. 问题适配机制

每个问题目录包含标准化的评估管道：

- `gpt.py`：LLM 生成的启发式代码
- `eval.py`：评估管道，调用生成的启发式并输出元目标值
- `test.ipynb`：测试笔记本

用户只需定义问题配置、评估管道和提示模板即可接入 ReEvo：

```python
# 适配新问题的步骤：
# 1. 在 cfg/problem/ 中定义问题配置
# 2. 在 problems/ 中实现评估管道
# 3. 在 prompts/ 中添加函数描述、签名和种子函数
```

### 4. 多 LLM 后端支持

通过 LiteLLM 支持 OpenAI、DeepSeek、智谱、Llama API 等多种 LLM 后端，可通过命令行参数灵活切换：

```bash
python main.py llm_client=openai llm_client.model=gpt-4o
python main.py llm_client=deepseek llm_client.model=deepseek-chat
```

## 技术亮点

1. **语言超启发式 (LHH) 概念**：首次系统性地将 LLM 定义为超启发式搜索的新型变体，建立了 LHH 的理论框架，实现了开放式的启发式空间探索。
2. **双层反射机制**：短期反射聚焦当前迭代的改进，长期反射积累跨迭代的元知识，两者协同显著加速搜索收敛。
3. **白盒与黑盒统一**：同时支持白盒设置（利用问题结构信息）和黑盒设置（仅依赖评估反馈），覆盖了从完全已知到完全未知的优化场景。
4. **广泛的算法覆盖**：支持 NCO（神经组合优化）、GA、ACO、GLS、构造式启发式等多种算法类型的自动改进。
5. **模块化问题适配**：通过标准化的问题-评估-提示三层结构，新问题只需几步配置即可接入框架。
6. **高效的种群管理**：结合精英保留策略与种群多样性维护，在有限的函数评估次数内达到 SOTA 性能。

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 反射式自我改进 | ReEvo 的短期/长期双层反射机制为 AI 系统的自我进化提供了"反思-改进"的循环范式，直接启发了后续 Agent 系统中的 self-refine 机制 |
| LLM 驱动的代码进化 | 展示了 LLM 可以在极少人工干预下自动发现、改进算法代码，为 Self-Evolve 系统的代码自动进化提供了关键技术路径 |
| 评估-反馈闭环 | 通过评估管道将性能指标反馈给 LLM 指导下一轮进化，构建了完整的"生成-评估-反射-进化"闭环 |
| 开放式搜索 | 开放式启发式空间的理念与 Self-Evolve 系统中开放式的 agent/workflow 进化目标高度一致 |

## 参考资料

- [ReEvo: Large Language Models as Hyper-Heuristics with Reflective Evolution (NeurIPS 2024)](https://arxiv.org/abs/2402.01145)
- [AI4CO Community](https://github.com/ai4co)
- [Eureka: Human-Level Reward Design via Coding Large Language Models](https://github.com/eureka-research/Eureka)
- [FunSearch: Mathematical discoveries from program search with large language models](https://github.com/google-deepmind/funsearch)
