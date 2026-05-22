# OpenTreeSearch: 基于 PUCT 树搜索的 LLM 引导代码进化

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/Genentech/opentreesearch |
| Star | 0.2k+ |
| 技术栈 | Python, OpenEvolve, PUCT 树搜索, LLM (Gemini/Qwen) |
| 许可证 | Apache 2.0 |
| 安装 | `uv sync` |

## 项目简介

OpenTreeSearch 是 Genentech (基因泰克) 发布的研究工具，实现了基于 PUCT (Predictor + Upper Confidence Bound for Trees) 的树搜索算法，用于 LLM 引导的代码进化。该项目构建在 OpenEvolve 之上，用树搜索替代了 OpenEvolve 原有的九个以上岛进化超参数，仅需**一个超参数**即可开箱即用。

该实现遵循 Google Research 论文《An AI system to help scientists write expert-level empirical software》附录中的算法描述。树搜索的核心思想是将代码进化过程建模为树形结构：每个节点代表一个程序版本，父子关系代表变异关系，通过 PUCT 选择策略平衡探索与利用，通过反向传播更新从叶节点到根节点的访问计数。

OpenTreeSearch 提供了两个示例：二维函数最小化（教学用例）和圆填充问题 (n=26)。在圆填充任务中，使用默认设置在 121 次迭代内达到 2.632，接近 AlphaEvolve (2.635) 和 OpenEvolve (2.634, 200 次迭代) 的结果。项目还提供了交互式 HTML 树可视化工具和可选的 LLM 节点摘要生成器。

## 目录结构

```
opentreesearch/
├── opentreesearch/               # 核心库
│   ├── __init__.py
│   ├── tree_controller.py        # 树搜索控制器 (继承 OpenEvolve)
│   ├── tree_database.py          # 树数据库 (TreeNode, TreeProgramDatabase)
│   ├── tree_process_parallel.py  # 并行进化控制器
│   └── cli.py                    # 命令行入口
├── tools/                        # 可视化与摘要工具
│   ├── generate_tree_search_view.py   # 生成交互式 HTML 树视图
│   └── generate_program_summaries.py  # 生成节点 LLM 摘要
├── examples/                     # 示例
│   ├── function_minimization/    # 二维函数最小化
│   │   ├── initial_program.py    # 初始程序
│   │   ├── evaluator.py          # 评估器
│   │   ├── config.yaml           # 配置文件
│   │   └── visualization.png     # 进化树可视化
│   └── circle_packing/           # 圆填充问题 (n=26)
│       ├── initial_program.py
│       ├── evaluator.py
│       ├── config.yaml
│       └── evolution.gif         # 进化动画
├── tests/                        # 测试
└── config.yaml                   # 默认配置
```

## 核心模块分析

### 1. TreeNode 数据结构

TreeNode 是树搜索的基本单元，代表一个进化中的程序版本：

```python
@dataclass
class TreeNode:
    id: str                        # 唯一标识
    code: str                      # 程序代码
    iteration_found: int           # 发现迭代数
    parent_id: str | None          # 父节点 ID
    depth: int                     # 树深度
    visits: int = 1                # 访问次数 (PUCT 统计)
    children_ids: list[str] = field(default_factory=list)  # 子节点列表
    metrics: dict[str, float] = field(default_factory=dict) # 性能指标
    metadata: dict[str, Any] = field(default_factory=dict)  # 元数据
    prompts: dict[str, Any] | None = None  # 进化提示记录
```

### 2. TreeProgramDatabase (tree_database.py)

树数据库管理所有程序节点的存储、采样和 PUCT 选择：

```python
class TreeProgramDatabase:
    def __init__(self, config, puct_exploration_constant=1.0):
        self.tree: dict[str, TreeNode] = {}
        self._in_flight: dict[str, int] = {}  # 虚拟损失计数
        self.best_program_id: str | None = None
```

PUCT 选择策略 (`ucb_expand`) 使用排名归一化分数加探索奖励：

```
PUCT(parent) = normalized_score + C * sqrt(ln(parent.visits) / child.visits)
```

- C = `puct_exploration_constant` (默认 1.0)
- 较高的 C 值偏向探索未访问的分支
- 反向传播：子节点评估后沿路径递增所有祖先的访问计数

### 3. TreeSearch 控制器 (tree_controller.py)

TreeSearch 继承自 OpenEvolve，替换了岛式 MAP-Elites 为 PUCT 树搜索：

```python
class TreeSearch(OpenEvolve):
    def __init__(self, initial_program_path, evaluation_file, config_path=None, ...):
        super().__init__(initial_program_path, evaluation_file, config=config)
        self.database = TreeProgramDatabase(
            self.config.database,
            puct_exploration_constant=self.puct_c,
        )

    async def run(self, iterations=None, target_score=None):
        # 1. 评估初始程序，创建根节点
        # 2. PUCT 选择父节点
        # 3. LLM 变异生成子节点
        # 4. 评估子节点
        # 5. 反向传播更新访问计数
        # 6. 重复直到达到迭代次数或目标分数
```

### 4. 运行示例

```bash
# 函数最小化
uv run treesearch-run \
    examples/function_minimization/initial_program.py \
    examples/function_minimization/evaluator.py \
    --config examples/function_minimization/config.yaml \
    --output output/func_min/run_1/

# 圆填充问题
uv run treesearch-run \
    examples/circle_packing/initial_program.py \
    examples/circle_packing/evaluator.py \
    --config examples/circle_packing/config.yaml \
    --output output/circle_packing/run_1/
```

### 5. 可视化工具

```bash
# 生成 LLM 节点摘要 (可选)
uv run python tools/generate_program_summaries.py \
    output/func_min/run_1/checkpoints/checkpoint_10 \
    --config examples/function_minimization/config.yaml

# 生成交互式 HTML 树视图
uv run python tools/generate_tree_search_view.py \
    output/func_min/run_1/checkpoints/checkpoint_10
```

## 技术亮点

1. **单超参数设计**：将 OpenEvolve 的 9+ 个岛进化超参数简化为单个 `puct_exploration_constant` 参数（默认 1.0），极大地降低了代码进化的使用门槛，开箱即用。
2. **PUCT 树搜索替代岛模型**：用蒙特卡洛树搜索中的 PUCT 策略替代传统的岛式进化模型，通过访问计数和探索奖励实现更精确的探索-利用平衡。
3. **虚拟损失机制**：在并行进化中使用虚拟损失 (virtual loss) 防止多个 worker 同时选择同一父节点，提高了并行效率。
4. **完整的可视化工具链**：提供交互式 HTML 树视图和 LLM 节点摘要生成器，使代码进化过程完全可追溯和可解释。
5. **与 AlphaEvolve 的性能对比**：在圆填充任务上，使用更少的迭代次数 (121 vs 200) 达到了接近 AlphaEvolve 的性能 (2.632 vs 2.635)。

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 树搜索式代码进化 | OpenTreeSearch 将 MCTS 中的 PUCT 策略引入代码进化，为 Self-Evolve 系统的代码自动改进提供了比传统进化算法更高效的搜索策略 |
| 单参数极简配置 | 证明了复杂的代码进化系统可以通过精心设计的搜索策略大幅简化配置，启发 Self-Evolve 系统追求"开箱即用"的设计理念 |
| 进化可追溯性 | 完整的树结构记录和可视化工具，为 Self-Evolve 系统的进化过程审计和调试提供了技术参考 |

## 参考资料

- [An AI system to help scientists write expert-level empirical software (Google Research)](https://arxiv.org/abs/2509.06503)
- [Google Research Blog](https://research.google/blog/accelerating-scientific-discovery-with-ai-powered-empirical-software/)
- [OpenEvolve](https://github.com/algorithmicsuperintelligence/openevolve)
- [AlphaEvolve (arXiv)](https://arxiv.org/abs/2506.13131)
