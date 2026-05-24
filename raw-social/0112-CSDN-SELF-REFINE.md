# SELF-REFINE: 带自我反馈的迭代改进

- URL: https://blog.csdn.net/yorkhunter/article/details/142436343
- Platform: CSDN
- Extraction status: ok
- content_timestamp: 2026-05
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05

## Raw Content

## SELF-REFINE: 带自我反馈的迭代改进_self-refine: iterative refinement with self-feedba-CSDN博客

**Source**: https://blog.csdn.net/yorkhunter/article/details/142436343

---

# SELF-REFINE: 带自我反馈的迭代改进

最新推荐文章于 2026-05-20 23:07:53 发布

原创

最新推荐文章于 2026-05-20 23:07:53 发布

·

1.3k 阅读

·
![](https://csdnimg.cn/release/blogv2/dist/pc/img/newHeart2023Active.png)![](https://csdnimg.cn/release/blogv2/dist/pc/img/newHeart2023Black.png)
                       16                   

·
10
·

CC 4.0 BY-SA版权

                                   版权声明：本文为博主原创文章，遵循[CC 4.0 BY-SA](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。                       

文章标签：

[#语言模型](https://so.csdn.net/so/search/s.do?q=%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)[#人工智能](https://so.csdn.net/so/search/s.do?q=%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)[#机器学习](https://so.csdn.net/so/search/s.do?q=%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)

[大模型
                                    同时被 3 个专栏收录](https://blog.csdn.net/yorkhunter/category_12670466.html)

1228 篇文章

订阅专栏

[智能体](https://blog.csdn.net/yorkhunter/category_12675024.html)

1024 篇文章

订阅专栏

[人工智能](https://blog.csdn.net/yorkhunter/category_12662597.html)

526 篇文章

订阅专栏

23年5月来自CMU、AI2、U Washington、Nvidia、UCSD和谷歌的论文 “SELF-REFINE: Iterative Refinement with Self-Feedback”。

与人类一样，大语言模型 (LLM) 并不总是在第一次尝试时就能产生最佳输出。受人类改进书面文本的方式的启发，引入 SELF-REFINE，一种通过迭代反馈和改进来改进 LLM 初始输出的方法。主要思想是使用 LLM 生成初始输出；然后，相同的 LLM 为其输出提供反馈，并使用它迭代地改进自身。SELF-REFINE 不需要任何监督训练数据、额外训练或强化学习，而是使用单个 LLM 作为生成器、改进器和反馈提供。用先进的 (GPT-3.5 和 GPT-4) LLM，在 7 个不同的任务中评估 SELF-REFINE，从对话响应生成到数学推理。

迭代自我改进是人类解决问题的基本特征（Simon，1962；Flower & Hayes，1981；Amabile，1983）。迭代自我改进是一个过程，包括创建初稿，然后根据自我提供的反馈对其进行改进。例如，在起草一封电子邮件向同事请求文档时，个人最初可能会写一个直接请求，例如“尽快将数据发送给我”。然而，经过深思熟虑，作者意识到这种措辞可能有些不礼貌，于是将其修改为“嗨，阿什利，你能尽快把数据发给我吗？”。在编写代码时，程序员可能会实现一个初始的“快速而粗糙”的实现，然后经过深思熟虑，将他们的代码重构为一个更高效、更易读的解决方案。

SELF-REFINE 是一种迭代自改进算法，在两个生成步骤（反馈和改进）之间交替进行。这些步骤协同工作以生成高质量的输出。给定由模型 M 生成的初始输出，将其传回同一模型 M 以获得反馈。然后，将反馈传回同一模型以改进先前生成的草稿。此过程重复指定次数的迭代或直到 M 确定不需要进一步改进。如图所示：给定一个输入 (0)，SELF-REFINE 首先生成一个输出并将其传回同一模型 M 以获得反馈 (1)。反馈被传回 M，M 会细化先前生成的输出 (2)。步骤 (1) 和 (2) 不断迭代，直到满足停止条件。SELF-REFINE 使用 GPT-3.5 等语言模型实例化，不需要人工协助。

![请添加图片描述](https://i-blog.csdnimg.cn/direct/9ae37eeb9b8c45ad876ee49f96bb6e9e.png)

SELF-REFINE 的算法如下所示。

![请添加图片描述](https://i-blog.csdnimg.cn/direct/d317c91e63a04cd38266ef6a4209ae36.png)

本文在 7 个不同的任务上对 SELF-REFINE 进行评估：对话响应生成（Mehri & Eskenazi，2020）、代码优化（Madaan，2023）、代码可读性改进（Puri，2021）、数学推理（Cobbe，2021）、情绪逆转（Zhang，2015），并且引入了两个新任务：首字母缩略词生成和约束生成，注：（Lin 2020）的更难版本。

反馈质量在 SELF-REFINE 中起着至关重要的作用。为了量化其影响，利用具体、可操作反馈的 SELF-REFINE 与两种消融方法进行比较：一种使用通用反馈，另一种不使用反馈（模型可能仍会迭代地改进其生成，但没有明确提供反馈来这样做）。例如，在代码优化任务中：可操作的反馈，例如避免在 for 循环中重复计算，可以精确指出问题并提出明显的改进建议。通用反馈，例如提高代码效率，缺乏这种精确性和方向性。

对 SELF-REFINE 及其后续改进产生的反馈进行定性分析。手动分析代码优化（Madaan，2023）和数学推理（Cobbe，2021）总共 70 个样本（35 个成功案例和 35 个失败案例）。对于数学推理和代码优化，反馈主要是可操作的，大多数反馈都指出了原始生成中存在的问题并提出了纠正方法。

虽然评估侧重于基准任务，但 SELF-REFINE 的设计考虑了更广泛的适用性。在网站生成的实际用例中探索了这一点，其中用户提供高级目标，SELF-REFINE 协助迭代开发网站。从基本的初始设计开始，SELF-REFINE 改进 HTML、CSS 和 JS，以在可用性和美观性方面改进网站。

![](https://csdnimg.cn/release/blogv2/dist/pc/img/vip-limited-close-newWhite.png)
         确定要放弃本次机会？       

福利倒计时

*:*

*:*

![](https://csdnimg.cn/release/blogv2/dist/pc/img/vip-limited-close-roup.png)
立减 ¥

普通VIP年卡可用

[立即使用](https://mall.csdn.net/vip)

[三谷秋水](https://blog.csdn.net/yorkhunter)

[关注](javascript:;)关注

- 16

点赞

- 

踩

- [10](javascript:;)

                     收藏                   

                   觉得还不错?                   
                     一键收藏                   
![](https://csdnimg.cn/release/blogv2/dist/pc/img/collectionCloseWhite.png)

- 
![](https://csdnimg.cn/release/blogv2/dist/pc/img/guideRedReward01.png)
[0](https://blog.csdn.net/yorkhunter/article/details/142436343#commentBox)

评论

- [分享](javascript:;)

复制链接

分享到 QQ

分享到新浪微博

![](https://csdnimg.cn/release/blogv2/dist/pc/img/share/icon-wechat.png)扫一扫                     

- 

举报

举报

专栏目录

[论文阅读 - SELF-REFINE: Iterative Refinement with Self-Feedback](https://blog.csdn.net/qq_40671063/article/details/142317944)

[qq_40671063的博客](https://blog.csdn.net/qq_40671063)

09-17

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 2519 

[与人类一样，大型语言模型（LLMs）并非总能在首次尝试时产生最佳输出结果。受人类如何完善书面文本的启发，作者引入了 SELF-REFINE，这是一种通过迭代反馈和完善来改进 LLM 初始输出的方法。其主要思路是使用 LLM 生成初始输出；然后，同一 LLM 为其输出提供反馈，并利用反馈反复改进自身。不需要任何有监督的训练数据、额外的训练或强化学习，而是使用单个 LLM 作为生成器、改进器和反馈提供者。作者使用最先进的 LLM（GPT-3.5 和 GPT-4）对 SELF-REFINE 在。](https://blog.csdn.net/qq_40671063/article/details/142317944)

[【亲测免费】 Self-Refine：基于自我反馈的迭代优化](https://blog.csdn.net/gitblog_00813/article/details/142808130)

[gitblog_00813的博客](https://blog.csdn.net/gitblog_00813)

10-10

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 970 

[**Self-Refine** 是一个创新的开源项目，旨在通过自我反馈机制，使大型语言模型（LLMs）能够生成对其输出的反馈，并利用这些反馈来改进输出，从而实现迭代优化。这一过程不仅提高了模型的输出质量，还展示了LLMs在自我改进方面的潜力。

![Self-Refine 动画示例](https://raw.githubusercontent.com/madaan/self-refine/main...](https://blog.csdn.net/gitblog_00813/article/details/142808130)

参与评论

您还未登录，请先

登录

后发表或查看评论

[智能体九大推理范式之四——Self-Refine（自我优化）， 简单迭代范式](https://blog.csdn.net/m0_56852482/article/details/159930644)

[聚焦大模型理解与应用开发](https://blog.csdn.net/m0_56852482)

04-09

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 358 

[Self-Refine（自我优化）是一种AI模型的内部迭代范式，通过"生成→评判→修改"循环优化输出结果。其核心特点包括：1）纯模型内部迭代，不依赖外部工具；2）适用于文本润色、代码优化等简单场景；3）包含生成初稿、自我评判和修改优化三个关键步骤。该范式通过多次迭代逐步改进输出质量，但需注意控制迭代次数（通常3-5次）以避免过度消耗资源。实现方式上可采用LangChain等工具构建自动化流程，典型案例包括养老产品文案优化等场景。相比其他范式，Self-Refine更专注于结果优化而非过程](https://blog.csdn.net/m0_56852482/article/details/159930644)

[LLM agentic模式之reflection：SELF-REFINE、Reflexion、CRITIC](https://devpress.csdn.net/v1/article/detail/139902804)

[beingstrong的博客](https://blog.csdn.net/beingstrong)

06-23

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 7152 

[LLM agentic论文《Self-Refine: Iterative Refinement with Self-Feedback》
《Reflexion: Language Agents with Verbal Reinforcement Learning》《CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing》](https://devpress.csdn.net/v1/article/detail/139902804)

[让语言模型自我进化：探索 Self-Refine 的迭代反馈机制](https://harryliu.blog.csdn.net/article/details/151228815)

[Harry的博客](https://blog.csdn.net/keeppractice)

09-05

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1334 

[特性说明通用性强只要是支持语言生成的 LLM，都可立即使用，无需再训练无需额外数据纯粹测试时操作，不依赖额外标签或训练样本简单有效通过反馈—修正的闭环流程，提升模型输出质量可扩展性好理论上适用于各种任务类型，比如生成、理解、推理等。](https://harryliu.blog.csdn.net/article/details/151228815)

[麻省理工MIT硬核神课《如何用AI做任何事》：多模态大模型底层逻辑与商业前沿全解析](https://devpress.csdn.net/v1/article/detail/161200904)

[https://blog.csdn.net/xianggll](https://blog.csdn.net/xianggll)

05-18

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 487 

[麻省理工学院Paul Liang教授的《如何用AI做任何事》彻底重构了人工智能的认知底座。本文为您进行深度拆解，从多模态数据图谱、图网络架构，一路进阶至流匹配生成引擎与交互式智能体。带您穿透技术迷雾，抢占下一代人机协同的科研高地与商业爆发点。](https://devpress.csdn.net/v1/article/detail/161200904)

[2026 AI x Web3 School共学营笔记-Day3
					最新发布](https://blog.csdn.net/wwh1st/article/details/161265421)

[kennyharris](https://blog.csdn.net/wwh1st)

05-20

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 194 

[接收方RPC节点的接收流程：收到原始交易信息的消息  还有 声称的发送地址 ，还有携带的签名。计算出的地址和发送方地址完全匹配，通过了密码学的校验。区块链发送方流程：首先自己要先创建钱包，有了钱包就有了私钥，也有钱包地址。交易和查询都会产生Gas Fee.只不过查询的Gas Fee太少，RPC节点直接把查询这部分的Gas Fee给我们免掉了。这个网站提供了 一个很形象的上车排队的 可视化形容区块链网络运行流程的图片。这个网站提供了 一个很形象的上车排队的 可视化形容区块链网络运行流程的图片。](https://blog.csdn.net/wwh1st/article/details/161265421)

[网安进入“AI自动攻击时代”，如何用AI守住AI？](https://blog.csdn.net/bjzlxc/article/details/161261064)

[bjzlxc的博客](https://blog.csdn.net/bjzlxc)

05-20

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 118 

[我们必须把AI植入到防御的最前线，让它去处理那些海量的、瞬息万变的威胁数据，把我们这些人类安全专家，从繁琐的日志分析中解放出来，去处理那些更具战略性、更需要人类智慧的决策。真正的“守住AI”，是让人类站在AI的肩膀上，用更广阔的视野去审视风险，用更深邃的智慧去制定规则，让技术回归到保护文明、守护信任的初衷上来。不过千万别忘了，AI本身也是有漏洞的，攻击者可能会通过“数据投毒”来误导你的防御模型，这种“套娃式”的攻防博弈，才是未来网安最残酷也最精彩的地方，想想都让人有点兴奋又有点头疼。](https://blog.csdn.net/bjzlxc/article/details/161261064)

[AI动态简报之商业洞察篇](https://devpress.csdn.net/v1/article/detail/161185664)

[英辰朗迪aibridge的官方���客](https://blog.csdn.net/aibridge)

05-18

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 328 

[AI商业化赛道迎来关键突破：深演智能冲刺"港股决策AI第一股"，其"卖结果"模式凸显垂直场景决策智能的商业价值；月之暗面完成136亿元D轮融资，创中国大模型单笔融资纪录，显示资本向头部企业集中。政策推动下，AI智能体在19个场景加速落地，企业级市场达数百亿规模。同时，AI搜索重构商业获客路径，68%消费者依赖AI推荐决策，GEO（生成式引擎优化）市场规模预计2030年突破6000亿，成为企业营销新战场。这些动态共同揭示：AI价值正从技术层面向实际商业成效快速迁移，垂直](https://devpress.csdn.net/v1/article/detail/161185664)

[AI 导出鸭内容格式转换新手实战指南](https://devpress.csdn.net/v1/article/detail/161137100)

[aidssxz的博客](https://blog.csdn.net/aidssxz)

05-16

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 527 

[AI格式转换工具解决内容导出痛点 摘要：针对AI生成内容导出时格式混乱的问题，"AI导出鸭"等专业工具提供了高效解决方案。这类工具支持无损转换和多格式兼容，能够完美保留代码高亮、表格结构等复杂格式。用户可通过在线平台快速访问，支持剪贴板导入、文件上传等多种方式，并可自定义输出格式参数。工具提供实时预览、批量处理和API自动化等功能，显著提升从对话到正式文档的转换效率，适用于技术文档、会议纪要等多种场景，解决了AI内容应用的"最后一公里"问题。](https://devpress.csdn.net/v1/article/detail/161137100)

[新书速览|信息与通信工程综合实验:自动目标识别专题](https://blog.csdn.net/quanzhankaifaqua/article/details/161193290)

[quanzhankaifaqua的博客](https://blog.csdn.net/quanzhankaifaqua)

05-18

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1733 

[凭借丰富的教学经验与竞赛评审阅历，编者精准把握学习者痛点与行业需求，将“软硬结合、贴近实战、赛教融合、点面兼顾”四大特色贯穿全书，尤其在赛教融合方面，专门选编两篇中国研究生电子设计竞赛优秀获奖作品，严格遵循竞赛技术论文要求，详细拆解作品的系统结构、难点创新与场景应用，为参赛学生提供最具参考价值的实战范本，助力其快速掌握竞赛核心要求与创作技巧。《信息与通信工程综合实验:自动目标识别专题》内容丰富、实用，叙述简洁、清晰，工程性强，适合作为高等学校电子信息类、自动化类及计算机类专业研究生的。](https://blog.csdn.net/quanzhankaifaqua/article/details/161193290)

[【人工智能与机器人研究】基于改进YOLOv11的野外中草药目标检测](https://devpress.csdn.net/v1/article/detail/161184339)

[汉斯出版社旗下编辑，定期更新计算机前沿论文](https://blog.csdn.net/2501_92218442)

05-18

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 415 

[本文针对野外中草药检测中的小目标漏检、背景干扰等问题，提出基于YOLOv11的改进模型。通过将SPPF替换为AIFI模块降低计算复杂度，采用Dysample增强细节恢复能力，新增小目标检测层并嵌入CBAM注意力机制。实验表明，改进模型mAP@0.5达81.2%，较基线提升2.9%，推理速度266FPS，参数量仅2.80M，有效提升了复杂场景下的检测精度与效率。该研究为野外中草药智能识别提供了可靠技术方案。](https://devpress.csdn.net/v1/article/detail/161184339)

[实战指南：Python全栈项目——基于机器学习的推荐引擎设计](https://blog.csdn.net/exlink2012/article/details/161227145)

[exlink2012的专栏](https://blog.csdn.net/exlink2012)

05-19

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1645 

[本文介绍了基于Python构建全栈推荐系统的技术方案。系统采用前后端分离架构，前端使用Vue/React展示推荐结果并收集用户行为数据，后端通过FastAPI提供高并发API服务，算法层使用Scikit-learn/Surprise实现协同过滤和矩阵分解等推荐模型。文章重点阐述了数据准备、混合推荐策略（召回+排序）、模型部署和实时反馈机制等关键环节，并针对冷启动和实时性等痛点提出了解决方案。该方案从简单协同过滤起步，逐步优化召回和排序精度，适合推荐系统初学者实践。](https://blog.csdn.net/exlink2012/article/details/161227145)

[AI药物研发：贝叶斯优化颠覆传统实验！逆向AI实验设计智能体加速CMC工艺与配方设计优化](https://blog.csdn.net/Lab_AI/article/details/161199836)

[Lab_AI的博客](https://blog.csdn.net/Lab_AI)

05-18

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1416 

[摘要：MaXFlow平台通过贝叶斯优化算法颠覆传统实验设计，有效解决创新药CMC阶段"设计空间大"与"实验资源少"的矛盾。在小分子合成中，仅用15次实验即找到98.49%产率的最优条件；在大分子制剂开发中，仅33次实验完成多目标优化，效率超传统DOE一倍。该技术突破性地实现了全局最优搜索、多目标平衡和复杂约束处理，显著提升研发效率并降低成本。](https://blog.csdn.net/Lab_AI/article/details/161199836)

[MMAUD：面向现代微型无人机威胁的全面多模态反无人机数据集](https://wanghao.blog.csdn.net/article/details/161232501)

[AI浩](https://blog.csdn.net/hhhhhhhhhhwwwwwwwwww)

05-19

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 868 

[针对小型无人机（UAV）不断演变的挑战（其具备运输有害载荷或独立造成破坏的潜力），我们推出了 MMAUD：一个全面的多模态反无人机数据集。MMAUD 通过专注于无人机检测、无人机类型分类和轨迹估计，填补了当代威胁检测方法中的关键空白。MMAUD 的突出之处在于融合了多种传感输入，包括立体视觉、各类激光雷达（Lidar）、雷达（Radar）和音频阵列。它提供了一种独特的俯视空中检测视角，对于解决现实场景具有比使用热成像和 RGB 相机在特定视点捕获的数据集更高的保真度。](https://wanghao.blog.csdn.net/article/details/161232501)

[从鸿蒙 AI 聊天 Demo 学习 ArkUI V2：第一天上手记录](https://devpress.csdn.net/v1/article/detail/161229320)

[A6516565189的博客](https://blog.csdn.net/A6516565189)

05-19

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 475 

[本文记录了作者第一天学习HarmonyOS NEXT和ArkUI V2的实践过程。通过拆解AI聊天业务，作者理解了核心数据流和状态驱动UI的原理，重点掌握了ViewModel作为统一状态中心的作用。文章详细介绍了ArkUI V2的关键特性如@BuilderParam插槽机制、响应式状态管理(@Local/@Param)和布局组件(Column/Row/Stack)，并通过商品管理Demo实践了列表渲染、手势交互等核心功能。作者强调业务驱动学习的重要性，建议通过实际项目结合文档和Demo验证来快速掌握新技术。](https://devpress.csdn.net/v1/article/detail/161229320)

[基于 SARIMA-GARCH-TCN-Attention-XGBoost 的混合时间序列预测模型研究](https://devpress.csdn.net/v1/article/detail/161092116)

[2501_92464201的博客](https://blog.csdn.net/2501_92464201)

05-15

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 594 

[设时间序列观测值为ytt1Tyt​t1T​，其中ttt为时间索引。ytftεtyt​ftεt​其中，ftf(t)ft表示趋势、季节项、外生变量和可解释特征共同形成的确定性或弱随机结构，εtεt​表示模型未能解释的随机扰动。对于金融类序列，εtεt​常具有尖峰厚尾、波动聚集和条件异方差等特征，因此仅采用均值方程建模往往不足。在深度学习和机器学习建模中，不同变量量纲差异可能影响参数优化。xt′xt−μσx。](https://devpress.csdn.net/v1/article/detail/161092116)

[AI提示词极限赛：突破边界的艺术](https://blog.csdn.net/liudanzhengxi/article/details/161130956)

[liudanzhengxi的博客](https://blog.csdn.net/liudanzhengxi)

05-16

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1436 

[摘要： AI提示词极限赛通过竞赛形式探索提示词工程的技术边界，旨在激发大语言模型的最大潜能。文章从赛制设计、评价体系切入，解析高阶策略如分步思考链、动态调整和对抗性测试，并探讨如何突破模型保守性、处理幻觉问题。通过创意生成、精确约束等实战案例，展示提示词设计在复杂任务中的优化方法，强调自动化评价与人工评估的结合。未来，赛事将推动提示词标准化、多模态框架及伦理研究，成为AI能力挖掘的重要试验场。](https://blog.csdn.net/liudanzhengxi/article/details/161130956)

[ubuntu26.04音频转srt字幕](https://blog.csdn.net/weixin_43465752/article/details/161251250)

[weixin_43465752的博客](https://blog.csdn.net/weixin_43465752)

05-20

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 211 

[ubuntu26.04音频转srt字幕](https://blog.csdn.net/weixin_43465752/article/details/161251250)

[【论文阅读】RoboAgent: 通过语义增强和动作分块实现机器人操作的泛化与效率](https://blog.csdn.net/qq_43854103/article/details/161233837)

[qq_43854103的博客](https://blog.csdn.net/qq_43854103)

05-19

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 771 

[只用了很少的真机训练数据（7.5k条），通过“P图”扩充数据和“预测动作片段”而非单步动作，训练出了一个能听懂人话、在没见过的厨房场景里也能完成多种复杂任务的通用机器人。](https://blog.csdn.net/qq_43854103/article/details/161233837)

评论
![](https://csdnimg.cn/release/blogv2/dist/pc/img/closeBt.png)

![](https://csdnimg.cn/release/blogv2/dist/pc/img/commentArrowLeftWhite.png)
被折叠的 

 条评论  [为什么被折叠?](https://blogdev.blog.csdn.net/article/details/122245662)[到【灌水乐园】发言](https://bbs.csdn.net/forums/FreeZone)

查看更多评论

       添加红包       

![](https://csdnimg.cn/release/blogv2/dist/pc/img/guideRedReward02.png)

![](https://csdnimg.cn/release/blogv2/dist/pc/img/guideRedReward03.png)

实付
元

[使用余额支付](javascript:;)

![](https://csdnimg.cn/release/blogv2/dist/pc/img/pay-time-out.png)
点击重新获取

![](https://csdnimg.cn/release/blogv2/dist/pc/img/weixin.png)

![](https://csdnimg.cn/release/blogv2/dist/pc/img/zhifubao.png)

![](https://csdnimg.cn/release/blogv2/dist/pc/img/jingdong.png)

扫码支付

钱包余额

0

![](https://csdnimg.cn/release/blogv2/dist/pc/img/pay-help.png)

抵扣说明：

 1.余额是钱包充值的虚拟货币，按照1:1的比例进行支付金额的抵扣。
 2.余额无法直接购买下载，可以购买VIP、付费专栏及课程。

[余额充值](https://i.csdn.net/#/wallet/balance/recharge)
