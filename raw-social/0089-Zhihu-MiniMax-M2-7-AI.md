# MiniMax M2.7实测：当 AI 开始自我优化，懂复盘、会纠错、能演进 - 知乎

- URL: https://zhuanlan.zhihu.com/p/2018038826556204239
- Platform: Zhihu
- Extraction status: ok
- content_timestamp: 2026-03
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-03

## Raw Content

## MiniMax M2.7实测：当 AI 开始自我优化，懂复盘、会纠错、能演进 - 知乎

**Source**: https://zhuanlan.zhihu.com/p/2018038826556204239

---

有问题，就会有答案。知乎，可信赖的问答社区，以让每个人高效获得可信赖的解答为使命。知乎凭借认真、专业和友善的社区氛围，结构化、易获得的优质内容，基于问答的内容生产方式和独特的社区机制，吸引、聚集了各行各业中大量的亲历者、内行人、领域专家、领域爱好者，将高质量的内容透过人的节点来成规模地生产和分享。用户通过问答等交流方式建立信任和连接，打造和提升个人影响力，并发现、获得新机会。

![MiniMax M2.7实测：当 AI 开始自我优化，懂复盘、会纠错、能演进](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>)

> 文章导读：  
> 
> MiniMax 重磅发布主力模型 M2.7，主打的“自我演进”机制引发了从代码生成迈向全链路项目交付的关注。实测结果显示：其真实表现已迈入第一梯队，与顶级模型差距极小；在复杂编程和系统模拟任务中，输出更接近“可交付”标准，展现出从“代码生成”向“工程执行”的跃迁。更关键的是，M2.7 在工程完整性与自我纠错上显著进化，以及极具竞争力的低成本优势，使得其首次从“生成工具”转向“参与交付”的一环。  
> 
> 全文约 3100 字

3月19日，MiniMax 正式将主力模型的版本号迭代至 M2.7。作为 MiniMax 在 Agent 领域的最新力作，M2.7 不仅是参数的堆砌，它引入了极具前瞻性的**自我演进（
Self-Evolution
）机制**，标志着模型在复杂工程任务中的表现再次提升。

![](https://pic4.zhimg.com/v2-85db0b4cf73ef8e5b2285a45533aa8e9_1440w.jpg)

### 
📊核心亮点：从执行到闭环优化

- **自我演进机制（Self-Evolution）**： 这是 M2.7 最主打的能力。在处理复杂任务时，模型能够自主进行超过 100 次的迭代循环——通过分析失败路径 → 规划优化方案 → 执行改进 → 重新验证，实现任务过程中的自主闭环优化。这意味着 AI 不再是一次性输出结果，而是会不断自我复盘直到交付最优解。
- **复杂 Agent 编排**： M2.7 展现了强大的独立构建复杂代理框架（Agent Harness）的能力。它不仅能写代码，还能管理整个项目的交付周期，包括 Bug 追踪、日志分析、代码安全审计等端到端项目交付环节。

### 🚀专业工程能力的深耕

- **实战选手**： M2.7 将重点瞄准了真实世界软件工程。无论是在自动化项目交付、复杂系统的 Bug 修复，还是规模代码库的安全审计上，M2.7 都表现出超越传统辅助模型的工程生产力。
- **Agent 协作生态**：它被设计为能够更好地融入 Agent 生态系统，与其他智能体协作，处理更具挑战性的跨应用、跨环境业务流程。

![](https://pic3.zhimg.com/v2-09355eb631e63e8cd68b23c0ec9d314e_1440w.jpg)

*在目前的Artificial Analysis榜单中，
MiniMax M2.7
暂居第八。*

MiniMax M2.7 的发布，给 AI 应用开发带来了一个明确的信号：**AI 的生产力边界，正从“代码补全”转向“全链路项目掌控”。**对于需要处理复杂、长期、多环节自动化任务的开发者和企业而言，M2.7 的自我纠错和闭环优化能力，意味着在项目开发过程中将减少大量人工介入的调试时间。当 AI 开始学会自己总结失败、不断自我优化，它能带来的不仅是开发效率的倍增，更是从辅助开发到自主交付的质变。

那么，这个自带“复盘基因”的模型，在实战中表现到底如何？是真进化还是噱头？302.AI将通过实测探究其真实能力。 

---

## 
I. 实测模型基础信息

**（1）实测模型在 302.AI 的价格：**

| 模型名称 | 上下文 | 302.AI内的价格 |
|---|---|---|
| MiniMax-M2.7 | 204800 | 输入 $0.3 / 1M tokens输出 $1.2 / 1M tokens |
| MiniMax-M2.5 | 204800 | 输入 $0.3 / 1M tokens输出 $1.2 / 1M tokens |

**
（2）测评目的：**
本评测侧重模型对逻辑，数学，编程，多模态，人类直觉等问题的测试，非专业前沿领域的权威测试。旨在观察对比模型的进化趋势，提供选型参考。

**（3）测评方法：**
本次测评使用302.AI收录的题库进行独立测试。模型分别就逻辑与数学（共10题），人类直觉（共7题），以及编程模拟（共12题）进行案例测试，对应记分规则取最终结果，下文选取代表性案例进行展示。

题库地址：[https://docs.google.com/spreadsheets/d/1sBxs60yWsxc9I5Va8Rjc1_le1Omg2hOXbwqOzpImZio/edit?gid=0#gid=0](https://link.zhihu.com/?target=https%3A//docs.google.com/spreadsheets/d/1sBxs60yWsxc9I5Va8Rjc1_le1Omg2hOXbwqOzpImZio/edit%3Fgid%3D0%23gid%3D0)

💡**记分规则：**
按满分10分记分，设定对应扣分标准，最终取每轮得分的平均值。

**（4）测评工具：**

- 所有模型均在302.AI Stuidio客户端内使用对应模型，使用统一的提示词，取第一次生成结果
- 编程测试使用302.AI Stuidio客户端的Vibe模式：调用Claude Code沙盒 + Skills（本期实测使用 frontend-design）

编程案例分数评级：
⭐⭐⭐⭐⭐ S 级（封神）： 行业标杆，重新定义标准。
⭐⭐⭐⭐ A 级（卓越）： 生产力合格，无明显短板。
⭐⭐⭐ B 级（优秀）： 表现中规中矩，存在短板。
⭐⭐及以下 C级（不合格）： 不可用，存在明显问题。

---

## 
**II. 测试结果总览**

### **302.AI 模型测评分数总榜单（剔除多模态分数）：**

![](https://picx.zhimg.com/v2-b78c2b51092d7a780aa68254fbdc44e7_1440w.jpg)

---

## 
**III. 案例展示**

### 案例 1：逻辑推理

**MiniMax M2.7** 在复杂逻辑推理能力上较 M2.5 有明显提升，推理步骤更直观。

> **提示词**：根据提示推理出正确密码

![](https://pic4.zhimg.com/v2-fbfe1f57f4d1cb58bf1dd5949b27058d_1440w.jpg)

> **正确答案**：根据 A+B+C+D+E=D*10+E
> **情况 A - 57620**
> 5+7+6+2+0=2*10+0
> 20=20
> **CaseB - 57628**
> 5+7+6+2+8=2*10+8
> 28=28

**MiniMax M2.7 **完整推理出了两种情况

![](https://pica.zhimg.com/v2-28a1d8cfb8afb26ec8e1d52e32b36ea4_1440w.jpg)

**MiniMax M2.5** 只推理出了一种情况

![](https://picx.zhimg.com/v2-b27471f1d343b15a70a23f92d7dc4ee9_1440w.jpg)

### 
案例 2：程序化 SVG 图形生成

> **提示词**：绘制一个鹈鹕骑自行车的动态 SVG

**MiniMax M2.7 **的输出效果在图形嵌合度和情绪表达上占优势，整体比例视觉上更稳固，但是鹈鹕腿部与脚踏板运动未能衔接，不符合物理逻辑

![](https://pic4.zhimg.com/v2-818eb1952f7852c7b982512fa4198a75_1440w.gif)

**MiniMax M2.5** 的图形表现出现了一定程度的畸变，鹈鹕腿部与踏板运动也完全不符合物理逻辑。

![](https://pic1.zhimg.com/v2-528f07a64c1491e33c0188ffb0d5fc70_1440w.gif)

| 测评点 | MiniMax M2.7 | MiniMax M2.5 |
|---|---|---|
| 语义表达准确度 | ⭐⭐⭐ | ⭐⭐⭐ |
| 图形构造复杂度 | ⭐⭐⭐ | ⭐⭐⭐ |
| 视觉设计质量 | ⭐⭐ | ⭐ |

### 

案例 3：交互式动画

> **提示词**：
> 在
> Three.js
> 中创建一个交互式3D的8缸发动机模拟器，具备真实物理渲染与缸体半透明透视视图���实时进排气与点火动力学视觉特效、动态显示转速与扭矩的物理HUD、一键爆炸装配视图和交互式零件物料清单，以及手动油门滑块与自动怠速循环控制功能。

**MiniMax M2.7 输出效果：**

✅ 优势项：

- V8 发动机结构模拟完整，零件细节完善，HUD 仪表盘设计专业
- 物理模拟和交互控制精确，点火顺序逻辑合理，增设了多种视角切换

❌ 缺陷：

- 视觉反馈是可优化项：排气火焰效果、冷却液/机油流动效果等

[https://www.zhihu.com/video/2018040079231250825](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/2018040079231250825)

**MiniMax M2.5 **输出的发动机在建模和物理模拟上明显逊色，仅实现了核心功能，未能达到交付标准。

[https://www.zhihu.com/video/2018040161036973941](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/2018040161036973941)

| 测评点 | MiniMax M2.7 | MiniMax M2.5 |
|---|---|---|
| 功能完整性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 视觉设计 | ⭐⭐⭐ | ⭐⭐ |
| 物理模拟 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

### 
案例 4：
Mac 系统模拟

> **提示词**：用HTML创建一个模拟Mac操作系统界面的页面，包含桌面、菜单栏、Dock 和应用窗口等功能。

**MiniMax M2.7 输出效果：**

✅ 优势项：

- 符合 Mac 经典视觉风格和布局，窗口管理系统完整，7个应用窗口并存，所有应用图标都是内联 SVG
- 细节模拟优质，包括备忘录真实内容模拟、通知中心带天气小组件、相册网格布局

❌ 缺陷：

- 可优化项：启动台和苹果菜单

[https://www.zhihu.com/video/2018040456433387495](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/2018040456433387495)

**MiniMax M2.5 **的 Mac 模拟也满足基本布局和功能要求，视觉和细节处理相对简约，最大缺陷是窗口最大化功能不完整。

[https://www.zhihu.com/video/2018040399571210955](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/2018040399571210955)

| 测评点 | MiniMax M2.7 | MiniMax M2.5 |
|---|---|---|
| 功能完整性 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 视觉还原度 | ⭐⭐⭐⭐ | ⭐⭐ |
| 交互完整性 | ⭐⭐⭐⭐ | ⭐⭐⭐ |

相较于 M2.5，**MiniMax M2.7** 代码输出结果更接近交付水平，在视觉设计与交互细节上有明显提升。

---

## **IV.  MiniMax M2.7 模型实测结论**

![](https://pica.zhimg.com/v2-fe3b08cd69f9227fc0511a8cd67852dc_1440w.jpg)

### 
先说结论：综合数据表现和实测效果来看，MiniMax M2.7 已经具备与当前顶级模型正面竞争的能力。它已不再是追赶者，而是站在同一赛道上的竞争者。

🧠 1. 综合表现：第一梯队中的低成本选手

从实测表现来看，MiniMax M2.7 的整体表现与当前顶级模型之间的差距被压缩到极小范围。在逻辑推理、编程能力以及任务完成度等核心维度上表现出稳定提升。

但如果仅从性能角度评价，M2.7 的意义还不够完整。真正拉开差距的，是其成本结构——**在接近头部模型能力的前提下，其价格仅为竞品模型的约 1/10–1/20**。这种性能接近 + 成本断层的组合，足以使它成为当前少数具备大规模落地潜力的模型之一。

### ⚙️ 2. 工程能力：从能写走向能交付

从实际测试案例中不难看出，M2.7 的能力提升主要体现在工程完成度上。无论是 Three.js 复杂交互项目，还是 Mac 系统级的 UI 模拟，其输出结果都不再停留在基础功能实现，而是逐步接近具备结构完整性、模块划分以及交互逻辑的原型级产品。

相比其前序模型，M2.7 在任务执行过程中表现出更强的整体性意识：不仅关注单点功能实现，还能够在一定程度上兼顾系统结构与用户交互逻辑。这种能力，使得输出结果更接近可继续开发的工程基础，而不是一次性生成的代码片段。

从实际体验来看，它已不只是一个写代码的工具，而更像一个**具备初步工程执行能力的模型**。

### 🔄 3. 自我演进：从生成到执行

M2.7 最瞩目的能力，在于其引入的 Self-Evolution 机制。其影响也作用在复杂输出结果中：

模型更倾向于给出完整路径，并覆盖更多潜在情况，在多步骤问题里，其执行过程也表现出更高的稳定性。这说明模型内部已经具备一定的路径优化与自我修正能力，而不再完全依赖单次生成。这种变化，使“自我演进”不再只是训练层面的机制，而开始影响实际输出质量。

在此基础上，MiniMax M2.7 的定位也更为清晰：**它不再只是用于生成内容或辅助开发的工具，而是逐步具备参与完整任务流程的能力。**其价值并不只体现在单次回答质量上，而在于其在完整任务链中的推进能力——当模型开始能够在一定程度上优化路径并持续完成任务时，其角色已经从“生成工具”，转向“参与交付”的一环。

---

## **V. **如何在 302.AI 上使用

### 1. 使用 302.AI 客户端

步骤指引：对话框内选择模型菜单

![](https://picx.zhimg.com/v2-a543ab8b6529769b7be9044b3cd89735_1440w.jpg)

输入MiniMax M2.7即可获取相应版本调用

![](https://pic4.zhimg.com/v2-a861352f7be7b363ce8d7aab53d681ab_1440w.jpg)

### 
2. 聊天机器人中使用

步骤指引 ：应用超市→聊天机器人→立即体验

![](https://pic4.zhimg.com/v2-d1fd6ed0c90ea1bcc22d270b4c0352a1_1440w.jpg)

选择模型：国产模型→MiniMax M2系列模型→确认

![](https://pica.zhimg.com/v2-aeca7d831ed0bb146708a96c8ae6504a_1440w.jpg)

### 
3. 使用模型 API

步骤指引：API超市→语言大模型→Minimax

![](https://pic3.zhimg.com/v2-7fcee150b73d287d0daaa5cd12f1db64_1440w.jpg)![](https://pic2.zhimg.com/v2-70a43707340aa7675bf57a196353d8af_1440w.jpg)

点击【Playground】在线调用 API

![](https://pic4.zhimg.com/v2-137e9cb38c71db82358ba5c629c91f23_1440w.jpg)

---

![](https://pic1.zhimg.com/v2-72a162aae2cdbdcd2d0c01f3699a8f6c_1440w.jpg)

编辑于 2026-03-19 19:08・广东

[.css-1xlfegr{background:transparent;box-shadow:none;}.css-1gomreu{position:relative;display:inline-block;}AI模型测评](https://www.zhihu.com/topic/28342250)

[AI编程](https://www.zhihu.com/topic/28322950)

[LLM](https://www.zhihu.com/topic/20660508)

关于作者

[.css-1o44jgu{dynamic-range-limit:standard;border-radius:4px;}.css-1qhd7fe{box-sizing:border-box;margin:0;min-width:0;max-width:100%;height:auto;background-color:#ffffff;width:60px;height:60px;dynamic-range-limit:standard;border-radius:4px;}](https://www.zhihu.com/org/302-ai)

[302 AI](https://www.zhihu.com/org/302-ai)

企业级AI资源平台|按量付费，全模型API接入，应用在线使用

[.css-1ldqog6{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}​](https://zhuanlan.zhihu.com/p/96956163)
已认证机构号

[回答](https://www.zhihu.com/org/302-ai/answers)[文章](https://www.zhihu.com/org/302-ai/posts)[关注者](https://www.zhihu.com/org/302-ai/followers)
