# WebArena: 真实网页环境下的自主 Agent 评估基准

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/web-arena-x/webarena |
| Star | 2,800+ |
| 技术栈 | Python, Playwright, Chromium, Docker, OpenAI API |
| 许可证 | Apache 2.0 / MIT |
| 开发者 | Carnegie Mellon University (Shuyan Zhou, Frank F. Xu 等), ServiceNow |

## 项目简介

WebArena 是一个可自托管的、基于真实 Web 应用的自主 Agent 评估环境。与传统的模拟或静态网页测试不同，WebArena 搭建了完整的、可交互的 Web 服务生态系统，包含电商购物网站（基于 OneStopShop）、CMS 管理后台（基于 Magento）、GitLab 代码托管、Reddit 论坛、OpenStreetMap 地图服务和 Wikipedia 百科等六个真实的 Web 应用。Agent 需要通过浏览器（Playwright 控制的 Chromium）在这些网站中完成 812 个端到端任务。

项目发表于 2023 年，是最早提出"真实 Web 环境评估"范式的工作之一。WebArena 的核心理念是：只有让 Agent 在真实可交互的网站中执行任务，才能有效评估其在信息检索、表单填写、数据操作、多页面导航等方面的综合能力。任务设计覆盖了从简单的信息查找到复杂的多步骤操作流程。

框架的交互方式类似 OpenAI Gym 环境，提供标准的 reset/step 接口。Agent 通过可访问性树（accessibility tree）或 HTML 内容感知页面状态，通过执行点击、输入、滚动等操作完成任务。AgentLab 的集成进一步增强了框架的并行实验能力，统一了 WebArena 和 VisualWebArena 的评估流程。

## 目录结构
```
web_arena_x__webarena/
├── browser_env/                ★ 浏览器环境核心
│   └── auto_login.py           自动登录管理
├── agent/                      ★ Agent 实现
│   └── prompts/                ★ Prompt 模板系统
│       ├── raw/                原始 prompt 模板
│       └── prompt_constructor.py ★ Prompt 构造器
├── evaluation_harness/         ★ 评估工具
├── config_files/               任务配置文件
├── environment_docker/         Docker 环境配置
├── llms/                       LLM 接口封装
├── scripts/                    辅助脚本
├── resources/                  执行轨迹与数据
├── run.py                      ★ 评估主入口
├── minimal_example.py          快速入门示例
└── setup.py                    安装配置
```

## 核心模块分析

### 1. 浏览器环境引擎（browser_env/）
浏览器环境是 WebArena 的核心基础设施。基于 Playwright 驱动 Chromium 浏览器，实现了标准化的 reset/step 接口。环境支持多种观测空间：`accessibility_tree`（无障碍树，提供结构化的页面元素信息）、`html`（原始 HTML）、`dom_asdom`（DOM 树）。动作空间支持基于元素 ID 的交互方式，每个可操作元素都有唯一标识符。

```python
from browser_env import ScriptBrowserEnv, create_id_based_action

env = ScriptBrowserEnv(
    headless=False,
    observation_type="accessibility_tree",
    current_viewport_only=True,
    viewport_size={"width": 1280, "height": 720},
)
obs, info = env.reset(options={"config_file": "config_files/0.json"})
action = create_id_based_action("click [42]")
obs, _, terminated, _, info = env.step(action)
```

### 2. Prompt 模板与构造系统（agent/prompts/）
Agent 的行为由精心设计的 Prompt 模板驱动。每个 prompt 定义包含：`intro`（整体指导）、`examples`（少样本示例）、`template`（信息组织模板）和 `meta_data`（观测空间、动作类型、构造器等元信息）。框架提供了 CoT（Chain-of-Thought）和 ReAct 风格的推理 prompt，以及对应的 prompt 构造器。

```python
# Prompt 模板结构
prompt = {
    "intro": "整体任务指导与可用动作说明",
    "examples": [(obs_1, response_1), (obs_2, response_2)],
    "template": "观测: {observation}\n上一步: {previous_action}\n指令: {instruction}",
    "meta_data": {
        "observation": "accessibility_tree",
        "action_type": "id",
        "prompt_constructor": "CoTActConstructor"
    }
}
```

### 3. 端到端评估流程（run.py + evaluation_harness/）
评估主入口 `run.py` 实现了完整的评估管道：加载任务配置 -> 初始化浏览器环境 -> 创建 Agent -> 逐步执行 -> 收集轨迹。`evaluation_harness/` 提供了自动化的结果判定逻辑，根据任务类型（信息查找、内容操作、导航等）采用不同的匹配策略。每条执行轨迹保存为独立的 HTML 文件，可在浏览器中回放。

```bash
python run.py \
    --instruction_path agent/prompts/jsons/p_cot_id_actree_2s.json \
    --test_start_idx 0 --test_end_idx 1 \
    --model gpt-3.5-turbo --result_dir ./results
```

### 4. Web 环境托管（environment_docker/）
WebArena 提供了完整的 Docker Compose 配置来托管所有 Web 服务。用户可以一键启动包含电商、CMS、GitLab、Reddit、Map、Wikipedia 在内的完整 Web 生态。还提供了 Amazon Machine Image（AMI）的预装方案，以及环境重置脚本以恢复初始状态。

### 5. LLM 接口层（llms/）
统一的 LLM 调用接口封装了 OpenAI API 等模型服务，支持 GPT-3.5、GPT-4 等多种模型。接口层处理了 token 计算、请求重试、流式响应等细节，Agent 实现无需直接与模型 API 交互。

## 技术亮点

1. **真实 Web 服务生态**：搭建了六个完全可交互的真实 Web 应用，而非模拟或爬取的静态页面，Agent 面对的是真实的 HTTP 请求、JavaScript 渲染和数据库操作。
2. **Gym 兼容接口**：reset/step 交互模式与 OpenAI Gym 一致，降低了 Agent 开发门槛，便于集成到各类 Agent 框架中。
3. **多维度观测空间**：支持 accessibility tree、HTML、DOM 等多种页面表示，适合评估不同粒度的网页理解能力。
4. **CoT/ReAct Prompt 工程**：内置精心设计的 Chain-of-Thought 和 ReAct 推理 prompt，通过少样本示例引导 Agent 的行为模式。
5. **可复现的评估环境**：Docker 化的 Web 服务和自动登录管理确保了评估的可复现性，每次评估从相同的初始状态开始。
6. **轨迹可视化与分析**：执行轨迹保存为可浏览的 HTML 文件，并支持与 Zeno 平台集成进行交互式分析。

## 与 Self-Evolve 关联
| 维度 | 贡献 |
|------|------|
| 评估框架 | 提供了 Web Agent 能力的标准化评估环境，可作为 Self-Evolve 进化循环中的 Web 场景测试集 |
| Prompt 工程 | prompts/ 目录的模板系统和 prompt_constructor 设计为 Self-Evolve 的 Prompt 优化提供了工程模板 |
| Agent 编排 | 标准化的 reset/step 接口展示了如何将 LLM 编排为 Web 操作 Agent |
| 环境模拟 | Docker 化的 Web 服务生态可作为 Self-Evolve 训练和评估的可复现环境 |
| 反馈信号 | evaluation_harness 提供了任务级别的自动化评估反馈，适合作为进化信号 |
| 观测-动作抽象 | 多维度观测空间和 ID-based 动作空间的抽象为 Agent 进化的搜索空间定义提供了参考 |

## 参考资料
- [WebArena 论文](https://arxiv.org/abs/2307.13854)
- [WebArena 官方网站](https://webarena.dev/)
- [AgentLab 集成](https://github.com/ServiceNow/AgentLab/)
- [Zeno 分析平台](https://hub.zenoml.com/project/9db3e1cf-6e28-4cfc-aeec-1670cac01872/WebArena%20Tester)
- [TheAgentCompany](https://the-agent-company.com)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/web_arena_x__webarena`
- **分析命令**：`gitnexus analyze repos/web_arena_x__webarena --index-only --skip-git --name WebArena`
- **知识图谱规模**：[placeholder]
- **查询语句**：`ScriptBrowserEnv reset step accessibility_tree create_id_based_action prompt_constructor evaluation_harness`
- **核心执行流程候选**：环境初始化(ScriptBrowserEnv) -> 任务配置加载(config_files/*.json) -> 自动登录 -> Agent 循环(observation -> prompt 构造 -> LLM 推理 -> action 解析 -> env.step) -> 轨迹保存 -> 结果评估
- **关键符号/文件**：`browser_env/`, `agent/prompts/`, `agent/prompts/prompt_constructor.py`, `evaluation_harness/`, `run.py`, `minimal_example.py`, `config_files/`
- **调用关系上下文**：run.py 入口 -> 创建 ScriptBrowserEnv -> 加载任务 config -> 循环：构造 prompt -> LLM 生成 -> 提取 action -> env.step -> 直至 terminated -> evaluation_harness 判定结果
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
