# OSWorld: 操作系统级多模态 Agent 基准测试

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/xlang-ai/OSWorld |
| Star | 1,800+ |
| 技术栈 | Python, VMware/VirtualBox/Docker (虚拟化), 多操作系统支持 (Ubuntu/Windows/macOS) |
| 许可证 | Apache 2.0 |
| 开发者 | XLang AI (Tianbao Xie, Danyang Zhang 等, 港大/斯坦福/Salesforce 研究) |

## 项目简介

OSWorld 是首个用于评估多模态 Agent 在真实计算机环境中执行开放式任务能力的基准测试框架。与传统的纯文本或 Web 环境不同，OSWorld 提供了一个完整的、可交互的桌面操作系统环境（支持 Ubuntu、Windows 和 macOS），Agent 需要通过屏幕截图或可访问性树观察环境状态，并通过键盘/鼠标操作完成任务。

OSWorld 包含 369 个跨多个应用领域的真实计算机任务，涵盖办公软件（LibreOffice、Chrome、VLC）、日常应用（Reddit、地图、邮件）和专业工具（GIMP、VS Code、终端）等场景。每个任务都定义了初始环境状态、目标任务描述和基于函数的自动评估指标。实验结果表明，即使是 GPT-4o 等最先进模型，在 OSWorld 上的成功率也仅为 12.24%，揭示了当前 Agent 系统在真实操作系统环境中的巨大改进空间。

2025 年发布的 OSWorld-Verified 版本修复了社区反馈的问题，新增 AWS 并行评估支持（可将评估时间缩短至 1 小时以内），并使基准信号更加有效。该工作被多篇顶会论文引用，已成为计算机使用 Agent（Computer Use Agent）评估的核心基准。

## 目录结构
```
OSWorld/
├── desktop_env/             ★ 桌面环境管理（虚拟化层）
│   └── providers/           虚拟化后端（VMware/VirtualBox/Docker/AWS）
├── mm_agents/               ★ 多模态 Agent 实现
├── evaluation_examples/     ★ 369 个评估任务
├── scripts/                 辅助脚本
│   └── python/              Python 工具脚本
├── run.py                   ★ 评估入口
├── show_result.py           结果展示工具
├── quickstart.py            快速入门脚本
├── monitor/                 监控工具
├── tests/                   测试套件
├── requirements.txt         Python 依赖
├── pyproject.toml           项目配置
└── SETUP_GUIDELINE.md       详细设置指南
```

## 核心模块分析

### 1. 桌面环境管理 (desktop_env/)
提供统一的桌面环境抽象层，支持多种虚拟化后端：VMware Workstation/Fusion（裸金属）、VirtualBox（备用方案）、Docker（服务器 + KVM 加速）、AWS（云端并行评估）。环境管理包括虚拟机创建、快照恢复、初始状态设置和资源清理。每个评估任务开始前自动恢复到预定义的干净状态。

### 2. 多模态 Agent 接口 (mm_agents/)
定义了 Agent 的标准交互接口。Agent 接收环境观察（屏幕截图或可访问性树），输出操作指令（基于 pyautogui 的鼠标/键盘操作或 a11y 树操作）。支持纯截图模式、纯 a11y 树模式和混合模式。提供基于 GPT-4o 的基线 Agent 实现。

### 3. 任务定义与评估 (evaluation_examples/)
包含 369 个精心设计的评估任务，分布在多个应用领域。每个任务由 JSON 配置文件定义，包含：任务指令、初始环境状态（文件、应用设置）、预期结果描述和自动评估函数。评估函数基于文件内容检查、应用状态验证等方式自动判断任务是否成功完成。

### 4. 并行评估框架 (scripts/python/run_multienv.py)
支持同时运行多个虚拟环境实例进行并行评估，大幅缩短全量评估时间。AWS 后端支持将评估时间压缩至 1 小时以内。包含结果收集、视频录制和日志聚合功能。

### 5. 任务域分类
任务按领域分为三大类别：Office（办公：LibreOffice Writer/Calc/Impress、Chrome）、Daily（日常：Reddit、地图、邮件、文件管理）、Professional（专业：GIMP、VS Code、终端、系统管理）。每个域包含从简单到复杂的梯度难度任务。

## 技术亮点
1. **真实操作系统环境**：提供完整桌面操作系统（Ubuntu/Windows/macOS），而非模拟环境，评估结果具有极高的外部效度
2. **多虚拟化后端**：支持 VMware、VirtualBox、Docker、AWS 四种部署方式，适应从个人开发到大规模并行评估的不同场景
3. **多模态观察空间**：同时支持截图视觉输入和可访问性树结构化输入，评估 Agent 的多模态理解能力
4. **函数化自动评估**：每个任务配备基于函数的自动评估器，无需人工判断即可准确评估任务完成度
5. **AWS 并行加速**：OSWorld-Verified 版本的 AWS 支持可将全量评估时间从数小时缩短至 1 小时以内

## 与 Self-Evolve 关联
| 关联维度 | 分析 |
|----------|------|
| 评估框架 | OSWorld 的真实操作系统环境评估为 Self-Evolve 提供了端到端 Agent 能力评估的终极基准 |
| Agent 编排 | OSWorld 的 Agent 接口设计（观察 -> 推理 -> 操作）是 Self-Evolve Agent 编排的核心参考 |
| 进化循环 | OSWorld 揭示的 12.24% GPT-4o 成功率表明当前 Agent 需要更强的自我纠错和进化能力 |
| 自主性度量 | OSWorld 的任务成功率可作为 Self-Evolve 自主性层级 L3+（真实环境自主操作）的关键度量 |
| 安全性 | 虚拟化隔离机制为 Self-Evolve 在真实环境中安全执行提供了基础设施参考 |

## 参考资料
- [OSWorld GitHub](https://github.com/xlang-ai/OSWorld)
- [OSWorld 官方网站](https://os-world.github.io)
- [OSWorld 论文](https://arxiv.org/abs/2404.07972)
- [OSWorld-Verified 报告](https://xlang.ai/blog/osworld-verified)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/xlang_ai__osworld`
- **分析命令**：`gitnexus analyze repos/xlang_ai__osworld --index-only --skip-git --name OSWorld`
- **知识图谱规模**：待分析
- **查询语句**：`desktop environment, VMware provider, multimodal agent, accessibility tree, evaluation metric, pyautogui action`
- **核心执行流程候选**：Init VM -> Setup Task State -> Agent Observe (Screenshot/a11y) -> Agent Act (pyautogui) -> Evaluate Result
- **关键符号/文件**：`desktop_env/` (环境管理), `mm_agents/` (Agent 实现), `evaluation_examples/` (任务定义), `run.py` (评估入口)
- **调用关系上下文**：run.py 初始化 DesktopEnv（虚拟机实例），循环调用 Agent 的 observe/act 方法，每次 act 后 sleep 等待 UI 更新，任务结束后调用评估函数检查最终状态
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
