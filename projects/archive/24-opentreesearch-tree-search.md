# OpenTreeSearch: 基于 PUCT 树搜索的 LLM 代码进化系统

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/genentech/opentreesearch |
| Star | 50+ |
| 技术栈 | Python, OpenEvolve, LiteLLM, uv |
| 许可证 | Apache 2.0 |
| 开发者 | Max Shen, Amy Wang, Frances Ding, Jai Doshi, Zach Wang (Genentech) |
| 论文 | An AI system to help scientists write expert-level empirical software (Google Research) |

## 项目简介

OpenTreeSearch 是一个基于 PUCT（Predictor + Upper Confidence Bound for Trees）的树搜索算法，用于 LLM 引导的代码进化。它构建在 OpenEvolve 之上，用单一的树搜索超参数（`puct_exploration_constant`）替代了 OpenEvolve 原有的九个以上岛屿进化超参数，实现了开箱即用的良好性能。实现灵感来源于 Google Research 关于 AI 辅助科学软件开发的论文附录。在 Circle Packing（n=26）任务中，使用默认设置在 121 次迭代内达到了 2.632 的结果，接近 AlphaEvolve 的 2.635。

## 目录结构

```
opentreesearch/
├── opentreesearch/                    # ★ 核心库
│   ├── __init__.py
│   ├── tree_database.py              # ★ PUCT 树数据库（TreeNode, TreeProgramDatabase）
│   ├── tree_controller.py            # ★ 树搜索控制器
│   ├── tree_process_parallel.py      # 并行工作进程
│   └── cli.py                        # 命令行入口
├── tools/                             # 可视化工具
│   ├── generate_tree_search_view.py  # ★ 树结构可视化（生成 HTML）
│   └── generate_program_summaries.py # ★ LLM 程序摘要生成
├── examples/                          # 示例
│   ├── function_minimization/        # 函数最小化示例
│   │   ├── initial_program.py        # 初始程序
│   │   ├── evaluator.py              # 评估器
│   │   └── config.yaml               # 配置
│   └── circle_packing/               # 圆填充示例
│       ├── initial_program.py
│       ├── evaluator.py
│       └── config.yaml
└── tests/                             # 测试
```

## 核心模块分析

### 1. PUCT 树搜索数据库（tree_database.py）

核心数据结构是 `TreeNode` 和 `TreeProgramDatabase`：

**TreeNode 数据类**：表示树中的一个程序节点

```python
@dataclass
class TreeNode:
    id: str                    # 唯一标识
    code: str                  # 程序代码
    iteration_found: int       # 发现时的迭代数
    parent_id: str | None      # 父节点 ID
    depth: int                 # 树深度
    visits: int = 1            # 访问次数
    children_ids: list[str]    # 子节点列表
    metrics: dict[str, float]  # 性能指标
    metadata: dict[str, Any]   # 元数据
```

**PUCT 选择算法（ucb_expand）**：

```python
def ucb_expand(self, num_inspirations=None):
    # PUCT(i) = RankScore(i) + c * P(i) * sqrt(total_visits) / (1 + visits_i)
    # RankScore: 基于适应度的排名归一化到 [0, 1]
    # P(i): 均匀先验概率 = 1/N
    # c: puct_exploration_constant（默认 1.0）
    # 选择 PUCT 分数最高的节点作为父节点
    # 同时返回 top-K 灵感程序（按得分排序的其他节点）
```

### 2. 虚拟损失与反向传播

- **反向传播（Backpropagation）**：子节点评估后，沿祖先链递增访问计数直至根节点
- **虚拟损失（Virtual Loss）**：通过 `_in_flight` 字典跟踪正在扩展的节点，PUCT 选择时惩罚已被选中的节点，实现并行化

```python
def add(self, node, iteration=None, root=False):
    self.tree[node.id] = node
    if not root:
        self.tree[node.parent_id].children_ids.append(node.id)
        # 反向传播：更新所有祖先的访问计数
        ancestor_id = node.parent_id
        while ancestor_id in self.tree:
            self.tree[ancestor_id].visits += 1
            ancestor_id = self.tree[ancestor_id].parent_id
```

### 3. 可视化工具（tools/）

- **树搜索视图**：将检查点转换为自包含的 HTML 页面，展示程序树结构、每节点指标和源代码
- **LLM 摘要**：可选地为每个节点生成程序摘要和与父节点的差异描述

### 4. 与 OpenEvolve 的集成

OpenTreeSearch 通过替换 OpenEvolve 的 `ProgramDatabase` 为 `TreeProgramDatabase` 实现集成：
- 兼容 OpenEvolve 的控制器接口（`programs` 属性别名）
- 复用 OpenEvolve 的 LLM 配置、评估管道和迭代管理
- 唯一新增配置项：`database.puct_exploration_constant`

## 技术亮点

1. **单参数优化**：用 `puct_exploration_constant` 一个参数替代 OpenEvolve 的九个以上岛屿进化超参数，极大降低了调参难度
2. **PUCT 搜索策略**：将 AlphaGo 等博弈 AI 中的 PUCT 算法应用于代码进化，实现了探索-利用的自适应平衡
3. **排名归一化评分**：使用排名而非原始分数进行 PUCT 计算，对异常值和尺度差异具有更好的鲁棒性
4. **虚拟损失并行化**：通过虚拟损失机制支持并行树搜索，避免多个工作进程同时探索相同分支
5. **交互式可视化**：内置树结构可视化工具，支持节点级别的代码差异比较和 LLM 生成的摘要

## 与 Self-Evolve 关联

| 维度 | OpenTreeSearch 贡献 |
|------|--------------------|
| 树搜索式代码进化 | 用 PUCT 树搜索替代传统的岛屿进化模型，为 Self-Evolve 系统提供了更高效、更易调参的搜索策略 |
| 自适应探索-利用 | PUCT 的自适应探索机制使搜索能够自动在已知优秀解的深度开发和未知区域的广度探索之间取得平衡 |
| 简化的超参数管理 | 单参数控制的设计理念为 Self-Evolve 系统的易用性提供了重要参考 |
| 代码进化可视化 | 树形结构的可视化工具为 Self-Evolve 系统的进化过程可解释性提供了实现范式 |
| 与 AlphaEvolve 的关联 | 作为 AlphaEvolve 树搜索思想的开源实现，为 Self-Evolve 社区提供了可复用的基础设施 |

## 参考资料

- [Google Research 论文](https://arxiv.org/abs/2509.06503)
- [Google Research 博客](https://research.google/blog/accelerating-scientific-discovery-with-ai-powered-empirical-software/)
- [AlphaEvolve 论文](https://arxiv.org/abs/2506.13131)
- [OpenEvolve](https://github.com/algorithmicsuperintelligence/openevolve)
