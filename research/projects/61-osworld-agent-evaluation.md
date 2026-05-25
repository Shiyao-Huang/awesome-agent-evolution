# OSWorld: 真实操作系统环境下的多模态 Agent 基准测试

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/xlang-ai/OSWorld |
| Star | 4,000+ |
| 技术栈 | Python, VMware/VirtualBox/Docker, PyAutoGUI, 多模态 LLM (GPT-4o 等) |
| 许可证 | Apache 2.0 |
| 开发者 | XLang AI (Tianbao Xie, Danyang Zhang, Tao Yu 等) |

## 项目简介

OSWorld 是首个面向真实计算机操作环境的多模态 Agent 基准测试框架。与传统的文本或网页环境不同，OSWorld 在真实的操作系统（Ubuntu/Windows）中构建评估场景，要求 AI Agent 完成跨应用程序的复杂任务，包括 LibreOffice 文档编辑、Chrome 浏览器操作、文件管理、多媒体处理、专业软件使用等。项目发表于 2024 年，填补了 OS-level Agent 评估的空白。

OSWorld 的技术核心是一套完整的虚拟化桌面环境基础设施。通过 VMware、VirtualBox 或 Docker 提供标准化的虚拟机环境，内置多种常用软件和预配置场景。框架提供了精确的截图捕获、鼠标键盘操作模拟以及基于状态的自动化评估机制，能够判断 Agent 是否真正完成了任务目标。项目还支持 AWS 云端部署实现大规模并行评估，将评估时间压缩至 1 小时以内。

2025 年推出的 OSWorld-Verified 版本在社区反馈基础上修复了大量问题，增强了评估信号的可靠性，并更新了各主流模型（GPT-4o、Claude 等）的基准成绩。项目还衍生出 OSWorld-MCP，用于评估 Computer-Use Agent 调用 MCP 工具的能力。

## 目录结构
```
xlang_ai__osworld/
├── desktop_env/                ★ 桌面环境基础设施
│   ├── providers/              ★ 虚拟化平台适配层
│   │   ├── vmware/             VMware 支持
│   │   ├── virtualbox/         VirtualBox 支持
│   │   ├── docker/             Docker 支持
│   │   └── aws/                AWS 云端支持
│   ├── evaluators/             ★ 任务评估引擎
│   │   ├── metrics/            评估指标
│   │   └── getters/            状态获取器
│   ├── controllers/            VM 控制器
│   └── server/                 环境服务端
├── mm_agents/                  ★ 多模态 Agent 实现
│   ├── autoglm_v/              AutoGLM Agent
│   ├── maestro/                Maestro Agent
│   ├── gta1/                   GTA-1 Agent
│   └── evocua/                 EvoCUA Agent
├── evaluation_examples/        ★ 评估任务实例
├── scripts/                    运行脚本
├── monitor/                    执行监控
├── run.py                      ★ 评估入口
├── lib_run_single.py           单任务运行器
├── show_result.py              结果展示
└── quickstart.py               快速入门
```

## 核心模块分析

### 1. 桌面环境基础设施（desktop_env/）
这是 OSWorld 的技术基石。`providers/` 目录实现了多平台虚拟化适配：VMware/VirtualBox 用于桌面端，Docker 用于服务器端（需 KVM 支持），AWS 用于大规模并行评估。框架通过 `vmrun` 命令和 VNC 协议与虚拟机交互，支持截图捕获、文件传输和命令执行。

```python
# 快速启动示例
python quickstart.py --provider_name vmware --path_to_vm "path/to/vm.vmx"
# 支持多平台切换：vmware / virtualbox / docker / aws
```

### 2. 任务评估引擎（desktop_env/evaluators/）
评估模块通过对比任务执行前后的系统状态来判断任务完成情况。`getters/` 负责从虚拟机中提取状态信息（文件内容、应用状态、系统配置等），`metrics/` 定义了多种评估函数（精确匹配、包含判断、文件比较等）。评估是自动化的，无需人工介入。

```python
# 评估示例：对每个任务自动检查结果
python show_result.py --detailed  # 展示各领域的 score/total 明细
```

### 3. 多模态 Agent 实现（mm_agents/）
框架内置了多个基准 Agent 实现，展示不同的观测-动作空间组合。核心 Agent 接口支持多种观测类型（screenshot 纯截图、a11y_tree 无障碍树、mixed 混合模式）和动作空间（pyautogui 模拟键鼠、custom 自定义 API）。Maestro Agent 采用了 debug_system + sub_worker 的多层级架构。

```bash
# GPT-4o 纯截图模式评估
python run.py --provider_name docker --headless \
    --observation_type screenshot --model gpt-4o --max_steps 15
```

### 4. 评估任务实例（evaluation_examples/）
任务数据覆盖 LibreOffice（Writer/Calc/Impress）、Chrome、VS Code、GIMP、桌面操作等多个应用领域。每个任务包含：任务指令、初始环境快照、评估函数配置。任务按 domain 组织，支持按领域单独测试。

### 5. 并行评估框架（scripts/python/run_multienv.py）
为解决单任务评估耗时过长的问题，框架提供了多环境并行评估能力。通过 Docker 或 AWS 的多实例部署，可以同时运行多个独立的评估环境，将全量评估时间从数天缩短至 1 小时以内。

```bash
# 并行评估（10 个环境）
python scripts/python/run_multienv.py \
    --provider_name docker --num_envs 10 \
    --model gpt-4o --max_steps 15
```

## 技术亮点

1. **真实 OS 环境**：在完整的 Ubuntu/Windows 操作系统中运行评估，而非模拟器或沙箱，Agent 需要面对真实世界的复杂性和不确定性。
2. **多平台虚拟化支持**：同时支持 VMware、VirtualBox、Docker 和 AWS 四种部署方式，覆盖从笔记本到云端的多种使用场景。
3. **多模态观测空间**：支持纯截图（screenshot）、无障碍树（a11y_tree）和混合模式三种观测方式，可评估 Agent 的多模态理解能力。
4. **自动化状态评估**：通过自定义的 getters 和 metrics 实现完全自动化的任务评估，无需人工判断。
5. **大规模并行能力**：AWS Host-Client 架构支持大规模并行评估，结合预下载缓存文件，全量评估可在 1 小时内完成。
6. **跨应用任务设计**：任务设计覆盖办公、日常、专业三大类别，包含需要跨应用协作的复合任务。

## 与 Self-Evolve 关联
| 维度 | 贡献 |
|------|------|
| 评估框架 | 提供了 OS-level Agent 能力的完整评估基准，可作为 Self-Evolve 系统中 Agent 进化的测试集 |
| 进化循环 | OSWorld 的任务-评估-反馈流程天然适配进化循环：Agent 执行任务 -> 评估器判定 -> 反馈迭代 |
| Agent 编排 | mm_agents/ 中的多种 Agent 实现（Maestro、AutoGLM 等）展示了不同的 Agent 编排策略 |
| 环境模拟 | desktop_env 的虚拟化基础设施可作为 Self-Evolve 训练环境的基础 |
| 多模态能力 | 截图+文本的多模态评估方式为 Self-Evolve 的多模态进化提供了评估标准 |
| 反馈信号 | 自动化评估系统提供了精确的 pass/fail 反馈信号，适合作为进化的适应度函数 |

## 参考资料
- [OSWorld 论文](https://arxiv.org/abs/2404.07972)
- [OSWorld 官方网站](https://os-world.github.io/)
- [OSWorld-Verified 报告](https://xlang.ai/blog/osworld-verified)
- [OSWorld-MCP](https://osworld-mcp.github.io/)
- [数据浏览器](https://os-world.github.io/explorer.html)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/xlang_ai__osworld`
- **分析命令**：`gitnexus analyze repos/xlang_ai__osworld --index-only --skip-git --name OSWorld`
- **知识图谱规模**：[placeholder]
- **查询语句**：`DesktopEnv provider evaluator metric getter agent observation action screenshot pyautogui`
- **核心执行流程候选**：环境初始化(provider) -> VM 创建/恢复 -> 任务 setup -> Agent 循环(observation -> action) -> 状态评估(evaluator) -> 结果输出
- **关键符号/文件**：`desktop_env/providers/`, `desktop_env/evaluators/`, `mm_agents/`, `run.py`, `lib_run_single.py`, `quickstart.py`, `show_result.py`
- **调用关系上下文**：run.py 入口 -> 初始化 DesktopEnv(provider_name, os_type) -> 加载任务(evaluation_examples) -> 创建 Agent -> 循环 step -> evaluator 判定结果
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
