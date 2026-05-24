# AgentEvolver：让智能体系统学会「自我进化」 - 阿里云开发者社区

- URL: https://developer.aliyun.com/article/1689936
- Platform: developer.aliyun.com
- Extraction status: ok
- content_timestamp: 2025-11
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-11

## Raw Content

## AgentEvolver：让智能体系统学会「自我进化」-阿里云开发者社区

**Source**: https://developer.aliyun.com/article/1689936

---

[开发者社区](https://developer.aliyun.com/)[ModelScope模型即服务](https://developer.aliyun.com/modelscope/)[文章](https://developer.aliyun.com/modelscope/article)
正文

# AgentEvolver：让智能体系统学会「自我进化」

2025-11-24

2451

版权

版权声明：

         本文内容由阿里云实名注册用户自发贡献，版权归原作者所有，阿里云开发者社区不拥有其著作权，亦不承担相应法律责任。具体规则请查看《         [阿里云开发者社区用户服务协议](https://developer.aliyun.com/article/768092)》和         《[阿里云开发者社区知识产权保护指引](https://developer.aliyun.com/article/768093)》。如果您发现本社区中有涉嫌抄袭的内容，填写         [侵权投诉表单](https://yida.alibaba-inc.com/o/right)进行举报，一经查实，本社区将立刻删除涉嫌侵权内容。     

**简介：**
AgentEvolver 是一个自进化智能体系统，通过自我任务生成、经验导航与反思归因三大机制，推动AI从“被动执行”迈向“主动学习”。它显著提升强化学习效率，在更少参数下实现更强性能，助力智能体持续自我迭代。开源地址：https://github.com/modelscope/AgentEvolver

AI加速发展的当下，智能体已成为强大的**执行者**，能够与环境交互、调用工具。但它们距离成为真正的**学习者**——能够持续成长与自我迭代的智能体——仍有一步之遥。

**AgentEvolver** 正是为迈出这关键一步而设计的自进化系统。它将「自我任务生成、自我经验导航、自我反思归因」三大支柱融于一身，系统性地解决了Agent RL训练中的任务稀缺、探索低效和学习信号模糊等关键难题。引导智能体从“被动接受训练”的模式，转向“主动寻求进化”的新旅程。

💻 **GitHub 仓库:**

https://

github.com/modelscope/A

gentEvolver

📃 **技术报告:**

https://

arxiv.org/abs/2511.1039

5

**
![](https://ucc.alicdn.com/pic/developer-ecology/xjarurcdaeamu_593b8b92b48145d68c1395998591cc58.png?x-oss-process=image/resize,w_1400/format,webp)

「AgentEvolver 使用更少的参数，但是取得了更优异的性能。」

## **🌱 为何需要“自我进化”？**

尽管智能体技术发展迅速，大多数系统仍停留在“按照指令完成任务”的层面——缺乏持续学习、适应变化的能力。这背后通常存在三大瓶颈：

1. **任务构建成本高：**
新的环境往往需要重新定义任务与目标，人工成本高、覆盖面有限。

2. **探索效率低：**
强化学习依赖大量交互采样，训练成本与时间消耗巨大。

3. **样本利用不充分：**
奖励稀疏且模糊，模型难以判断哪些中间步骤真正起作用。

AgentEvolver 的出现，将这些难题转化为新的突破点。它通过系统内部的多模块协同——让智能体学会提问、整理经验、分析因果——实现持续的自我演化，而无需依赖人工持续介入。

## **🧠 三大机制：驱动系统自进化的核心引擎**

AgentEvolver 的核心，是一个由三大机制驱动的动态学习闭环。它让智能体不再是被动执行任务的“工具”，而是一个能不断学习、总结、改进的动态系统。它的核心在于三大机制的协同作用，驱动智能体在复杂环境中持续优化和演化：

1. **自我任务生成（Self-Questioning）：**自主生成探索任务，摆脱对人工数据集的依赖。

2. **自我经验导航（Self-Navigating）：**高效复用历史经验，提升探索效率。

3. **自我反思归因（Self-Attributing）：**精细评估步骤级奖励，提升样本利用率。

**
![](https://ucc.alicdn.com/pic/developer-ecology/xjarurcdaeamu_4aa9513a2113463c9206157266b8151c.png?x-oss-process=image/resize,w_1400/format,webp)

### **💭 机制①：自我任务生成（Self-Questioning）**

在多数传统方法中，训练任务都由人来定义——写规则、设场景、造目标。但这样的训练集总是有限，如同为系统预设了一张固定的地图，边界清晰但想象力有限。一旦走出地图，系统便会迷失方向。

AgentEvolver 的**自我任务生成**机制，让系统学会主动“提出问题”。它结合长期目标与当前环境，自主生成新的探索任务，去主动探测未知的功能边界。换句话说，**智能体系统不再等待投喂，而是学会反躬**自问：**“我还有什么不知道？”**，并以此获得源源不断的内生探索动力。

**
![](https://ucc.alicdn.com/pic/developer-ecology/xjarurcdaeamu_1c9a54dec8214581a57a1e066f63a214.png?x-oss-process=image/resize,w_1400/format,webp)

「“自我任务生成”流水线，包括环境探索、任务合成和任务筛选。」

其关键技术流程包括：

- **好奇心引导的环境探索：**将环境配置作为先验知识提供给LLM，引导模型在环境中进行自由探索，从而生成多样化、高质量的交互轨迹。

- **适应性任务合成：**LLM 分析探索轨迹，结合用户偏好逆向生成任务查询，并从轨迹中抽取出对应的操作序列作为参考解。

- **任务筛选与验证：**通过语义去重过滤冗余任务，并在真实环境中回放参考解，以验证任务的可行性并剔除幻觉任务。

- **基于参考的合成奖励：**引入 LLM 裁判，通过对比智能体轨迹与参考解，评估关键步骤的覆盖度与执行效率，生成稠密、可靠的奖励信号用于策略优化。

### **机制②：自我经验导航（Self-Navigating）**

在传统的学习范式中，智能体的每次探索往往是孤立的事件。经验无法有效沉淀，导致系统即便面对相似的情境，仍会重复已知的错误，探索效率低下。

AgentEvolver的自我经验导航机制，让系统学会主动“沉淀经验”。它将多轮交互中的成功与失败，提炼为结构化的“可迁移知识”，自主构建起关于策略有效性与环境反馈的内部认知地图。这些经验不再是散乱的数据点，而是成为指导未来决策的导航信标。于是，探索因此不再是随机的撞南墙，而是一种带着记忆和方向感的学习。

**
![](https://ucc.alicdn.com/pic/developer-ecology/xjarurcdaeamu_7c17a04177684920b3a0730fb8f498ae.png?x-oss-process=image/resize,w_1400/format,webp)

「“自我经验导航”流水线，包括经验获取、经验混合探索和经验内化。」

其关键技术流程包括：

- **经验获取：**将历史成败轨迹提炼为结构化的自然语言经验，并将其向量化，构建一个可供随时检索的经验池。

- **经验混合探索：**采用混合策略进行探索，部分轨迹由检索到的相关经验引导，部分进行纯粹探索，以平衡探索与利用。

- **经验内化：**

- **经验剥离：**将指导探索的经验文本从训练样本中移除，迫使模型学习其背后的推理逻辑，而非简单记忆文本。

- **选择性增强：**针对那些由成功经验引导并产生正向收益的轨迹，在计算梯度时给予其更高的权重。

### **⚖ 机制③：自我反思归因（Self-Attributing）**

在长程任务中，由于奖励信号的滞后与模糊，传统的信用分配机制难以定位关键动作，导致策略优化效率低下。

AgentEvolver的自我反思归因机制，让系统学会主动进行“决策归因”。它通过回溯任务轨迹，进行复盘分析，将笼统的最终奖励，精细化地分配到真正起作用的关键动作上。这意味着，智能体系统从被动的“黑箱”执行者，转变为能够自我剖析的分析单元。它不再依赖模糊的最终信号，而是通过识别并强化“关键动作”，在对关键行为的微观洞察中高效迭代策略，显著提升长程任务的样本效率。

其关键技术流程包括：

- **步级贡献归因：**任务完成后，系统调用一个“复盘专家”的 LLM，对整个执行轨迹进行回溯分析，为每一步行为的贡献打上“好”(GOOD) 或“坏”(BAD) 的定性标签。目的是评估过程的合理性。

- **构建双通道复合奖励：**为了全面评估，系统将上述“归因”与“结果”结合，构建一个复合奖励

- 归因奖励 (过程分)：将上一步的“好”/“坏”标签量化为 +1 / -1。
- 结果奖励 (结果分)：保留任务的最终得分。
这两部分奖励会先独立进行标准化，然后再加权融合，形成一个既看重过程又看重结果的综合性奖励信号。

- **优势计算与策略优化：**

将上述综合奖励转化为每一步的优势函数（Advantage），并将该优势值广播至此步骤对应的所有token上，最终通过 GRPO 算法高效地进行策略优化。

💫 三个机制形成了一个持续自我演化的闭环：环境 → 任务 → 经验 → 策略 。AgentEvolver 不再依赖外部指令，而是凭借自身循环不断成长。

## **⚙️ 架构设计：面向扩展与适配性的模块化系统**

强大的进化机制，需要同样强大且灵活的系统架构作为支撑。为此，AgentEvolver 采用模块化、易扩展的系统结构，不仅确保了核心机制可独立演进，更能无缝适配多样的工具、环境与任务需求。

其核心由两大支柱构成：**Env Service** 与 **Context Manager**。一个面向外部世界，一个服务内部推理逻辑。它们相互协同，确保系统在多任务、多环境中保持稳定与连贯，为自我任务生成、自我经验导航、自我反思归因等机制提供统一的运行基础。

**
![](https://ucc.alicdn.com/pic/developer-ecology/xjarurcdaeamu_fb10683bf22d4b34904463f05adbfff8.png?x-oss-process=image/resize,w_1400/format,webp)

### **🌍 Env Service：连接外部世界的桥梁**

Env Service 负责管理智能体与外部环境的交互。它提供标准化接口以支持多种任务沙箱、工具 API 与仿真环境（如 AppWorld、BFCL等）。这一模块不仅执行环境调用与状态同步，还负责反馈执行结果，让系统具备跨环境运行与迁移的能力。

### **🧠 Context Manager：组织推理与交互逻辑的中枢**

Context Manager 定义了智能体“如何思考、如何行动”。它负责管理多轮交互的上下文信息与推理模版，AgentEvolver 内嵌了多种上下文管理模版，这使得它无论面对简单任务、复杂任务、还是长序列任务，Context Manager 都能保持智能体的逻辑连贯与策略自洽。

💫 这两个模块相互独立、又彼此协作—— Env Service 让系统走进环境，Context Manager 让系统理解环境。

它们共同支撑起三大自进化机制（任务生成、经验导航、反思归因），让 AgentEvolver 成为一个能适应不同工具、环境与推理场景的通用进化系统。同时，该体系也降低了研究者的实验门槛，使其能够将更多精力专注于算法本身的设计与验证。

## **📈 实验表现**

在 AppWorld 与 BFCL-v3 两大公开基准测试中，AgentEvolver 的有效性得到了充分验证。

- **更高的参数效率：**搭载 AgentEvolver 完整架构的 7B 模型，平均任务成功率达到 45.2%，显著超越了参数量为其两倍的 14B 基线模型（29.8%）。

- **显著的性能提升：**在同尺寸的 14B 模型上，AgentEvolver 将基线模型的成功率从 29.8% 大幅提升至 57.6%。

- **机制的协同效应：**消融实验证实，自我任务生成、经验导航与反思归因三大机制均对性能有明确的正向贡献，验证了系统设计的完整性。

**
![](https://ucc.alicdn.com/pic/developer-ecology/xjarurcdaeamu_bfe5f0b910af466db11c814318f341cf.png?x-oss-process=image/resize,w_1400/format,webp)

## **🚀 快速上手**

只需几行命令，就能启动一个具备完整自进化循环的智能体系统。

AgentEvolver 会自动进行任务生成、策略优化与反思分析，让学习过程持续向前推进。

```
# 1. 克隆并安装
git clone https://github.com/modelscope/AgentEvolver.git
cd AgentEvolver && bash install.sh
cd env_service/environments/appworld && bash setup.sh
# 2. 启动！(以 AppWorld 为例)
conda activate agentevolver
python launcher.py --conf examples/overall.yaml --with-appworld --with-reme
```

## **💬 我们的愿景**

**从「被动执行」到「主动进化」。**

我们相信，未来的智能体不应仅仅是指令的执行者，更应是能够**自我驱动、探索未知、实现超越的学习者。**AgentEvolver 正是朝着这个方向迈出的坚实一步，为构建能够「自我进化的通用人工智能」奠定基础。

在未来，我们将进一步推动智能体在多智能体场景中的协同进化，探索其在共享与交互环境中的自主共生策略；同时深入研究跨阶段的协作式自进化机制，将提问、导航、归因等能力耦合为持续循环，不断实现能力的相互增强与迭代突破。

**📚 加入我们**

我们开源了 AgentEvolver 的全部代码与技术细节，欢迎你加入这场探索，与我们共同见证 AI 如何学会自我提问、自我导航、自我成长。

💻 GitHub 仓库:

https://

github.com/modelscope/A

gentEvolver

📃 技术报告:

https://

arxiv.org/abs/2511.1039

5

文章标签：

[人工智能](https://developer.aliyun.com/label/article_de-3-100052)

[定位技术](https://developer.aliyun.com/label/article_de-3-100087)

[机器学习/深度学习](https://developer.aliyun.com/label/article_de-3-100042)

[算法](https://developer.aliyun.com/label/article_de-3-100255)

[自然语言处理](https://developer.aliyun.com/label/article_de-3-100040)

[https://developer.aliyun.com/profile/xjarurcdaeamu](https://developer.aliyun.com/profile/xjarurcdaeamu)

[modelscope](https://developer.aliyun.com/profile/xjarurcdaeamu)

目录

相关文章

[modelscope](https://developer.aliyun.com/profile/xjarurcdaeamu)

|

6月前

|

数据采集

人工智能

自然语言处理

[Meta SAM3开源：让图像分割，听懂你的话](https://developer.aliyun.com/article/1689926)
Meta发布并开源SAM 3，首个支持文本或视觉提示的统一图像视频分割模型，可精准分割“红色条纹伞”等开放词汇概念，覆盖400万独特概念，性能达人类水平75%–80%，推动视觉分割新突破。

[modelscope](https://developer.aliyun.com/profile/xjarurcdaeamu)

2117

59

66

[https://developer.aliyun.com/article/1689926](https://developer.aliyun.com/article/1689926)

[阿里云云原生](https://developer.aliyun.com/profile/pawmkwdq37c7s)

|

6月前

|

安全

Java

Android开发

[深度解析 Android 崩溃捕获原理及从崩溃到归因的闭环实践](https://developer.aliyun.com/article/1689106)
崩溃堆栈全是 a.b.c？Native 错误查不到行号？本文详解 Android 崩溃采集全链路原理，教你如何把“天书”变“说明书”。RUM SDK 已支持一键接入。

[阿里云云原生](https://developer.aliyun.com/profile/pawmkwdq37c7s)

1416

276

306

[阿里云开发者](https://developer.aliyun.com/profile/6ibaby6qg4ku4)

|

6月前

|

人工智能

前端开发

算法

[大厂CIO独家分享：AI如何重塑开发者未来十年](https://developer.aliyun.com/article/1690409)
在 AI 时代，若你还在紧盯代码量、执着于全栈工程师的招聘，或者仅凭技术贡献率来评判价值，执着于业务提效的比例而忽略产研价值，你很可能已经被所谓的“常识”困住了脚步。

[阿里云开发者](https://developer.aliyun.com/profile/6ibaby6qg4ku4)

4169

91

103

[https://developer.aliyun.com/article/1690409](https://developer.aliyun.com/article/1690409)

[阿里云开发者](https://developer.aliyun.com/profile/6ibaby6qg4ku4)

|

6月前

|

机器学习/深度学习

人工智能

缓存

[让AI评测AI：构建智能客服的自动化运营Agent体系](https://developer.aliyun.com/article/1690426)
大模型推动客服智能化演进，从规则引擎到RAG，再到AI原生智能体。通过构建“评估-诊断-优化”闭环的运营Agent，实现对话效果自动化评测与持续优化，显著提升服务质量和效率。

[阿里云开发者](https://developer.aliyun.com/profile/6ibaby6qg4ku4)

3156

86

90

[https://developer.aliyun.com/article/1690426](https://developer.aliyun.com/article/1690426)

[灵杰开发者](https://developer.aliyun.com/profile/gfbp4bwpctdbo)

|

5月前

|

存储

自然语言处理

测试技术

[一行代码，让 Elasticsearch 集群瞬间雪崩——5000W 数据压测下的性能避坑全攻略](https://developer.aliyun.com/article/1690891)
本文深入剖析 Elasticsearch 中模糊查询的三大陷阱及性能优化方案。通过5000 万级数据量下做了高压测试，用真实数据复刻事故现场，助力开发者规避“查询雪崩”，为您的业务保驾护航。

[灵杰开发者](https://developer.aliyun.com/profile/gfbp4bwpctdbo)

2021

89

93

[阿里云安全_](https://developer.aliyun.com/profile/v6ez4xoupkzwk)

|

6月前

|

人工智能

运维

安全

[亚太厂商唯一！阿里云以应用身份服务IDaaS入选全球 Gartner Access Management 魔力象限](https://developer.aliyun.com/article/1690480)
中国厂商0→1突破

[阿里云安全_](https://developer.aliyun.com/profile/v6ez4xoupkzwk)

2044

11

13

[https://developer.aliyun.com/article/1690480](https://developer.aliyun.com/article/1690480)

[ModelScope模型即服务](https://developer.aliyun.com/modelscope/)

## 热门文章

## 最新文章

[1
                            
                            中企投资印度新能源“有戏”吗？](https://developer.aliyun.com/article/143447)[2
                            
                            高效部署通义万相Wan2.1：ComfyUI文生/图生视频实战，工作流直取！](https://developer.aliyun.com/article/1655516)[3
                            
                            AgentScope：阿里开源多智能体低代码开发平台，支持一键导出源码、多种模型API和本地模型部署](https://developer.aliyun.com/article/1646479)[4
                            嵌入式开发必备！Keil uVision5 C51 V9.61 安装激活 + 汉化完整教程, 含（Keil MDK 5.39）](https://developer.aliyun.com/article/1687421)[5
                            阿里开源AI视频生成大模型 Wan2.1：14B性能超越Sora、Luma等模型，一键生成复杂运动视频](https://developer.aliyun.com/article/1653942)[6
                            DeepSeek-V4开源：百万上下文，Agent能力比肩顶级闭源模型](https://developer.aliyun.com/article/1730877)[7
                            MNN-LLM App：在手机上离线运行大模型，阿里巴巴开源基于 MNN-LLM 框架开发的手机 AI 助手应用](https://developer.aliyun.com/article/1651331)[8
                            LTX-2.3开源： 视频生成引擎级升级](https://developer.aliyun.com/article/1715460)[9
                            Claude Cowork 支持第三方模型接入 开放而不开源](https://developer.aliyun.com/article/1732254)[10
                            MiniCPM-V 4.6 开源：1.3B 多模态模型登顶同尺寸榜单，6G 内存跑通手机端](https://developer.aliyun.com/article/1734450)

[1
                            
                            HiDream-O1开源：8B参数像素级统一Transformer
                            23](https://developer.aliyun.com/article/1735833)[2
                            
                             我用 PAI/Codex 理解 Harness Engineering：Agent 工作环境到底怎么搭
                            45](https://developer.aliyun.com/article/1735766)[3
                            
                            Harness Engineering 被讲烂之后，Agent 工程真正难的是什么？
                            50](https://developer.aliyun.com/article/1735765)[4
                            可计算元认知文本分析：癌症社会科学研究语义基线的构建与边界信号检测
                            49](https://developer.aliyun.com/article/1735574)[5
                            Google 的 IDE 演进小史
                            53](https://developer.aliyun.com/article/1735526)[6
                            LLM 训练能不能少跑一点？Nous Research 的 TST 方法
                            45](https://developer.aliyun.com/article/1735522)[7
                            终端里跑 3D 老鼠，桌面窗口成摆锤；AI 大佬新公司估值百亿起
                            49](https://developer.aliyun.com/article/1735530)[8
                            用好 Codex Goal，关键就这三步
                            105](https://developer.aliyun.com/article/1735525)[9
                            书尖 AI 借力阿里云云端算力，打造全新智慧阅读学习模式
                            46](https://developer.aliyun.com/article/1735450)[10
                            实战分享：生产级AI Agents 7天内上线完成网站主页/域名/Agent Workflow/ 部署和出海打榜
                            108](https://developer.aliyun.com/article/1735272)

## 相关电子书

[更多](https://developer.aliyun.com/ebook/)

[低代码开发师（初级）实战教程](https://developer.aliyun.com/ebook/7576)[冬季实战营第三期：MySQL数据库进阶实战](https://developer.aliyun.com/ebook/7491)[阿里巴巴DevOps 最佳实践手册](https://developer.aliyun.com/ebook/347)

下一篇

[阿里云网盘 Skill 上线：让 OpenClaw 的成果，手机一点就能发给客户](https://developer.aliyun.com/article/1719163)
