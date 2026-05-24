# 揭秘AI“自我进化”新突破！普林斯顿团队Alita智能体：让MCP工具自动生长，GAIA测试碾压同行_alita v2.1-CSDN博客

- URL: https://malijinkuang.blog.csdn.net/article/details/148358237
- Platform: CSDN
- Extraction status: ok
- content_timestamp: 2026-05
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05
- Query: site:blog.csdn.net AI Agent 自我改进

## Raw Content

## 揭秘AI“自我进化”新突破！普林斯顿团队Alita智能体：让MCP工具自动生长，GAIA测试碾压同行_alita v2.1-CSDN博客

**Source**: https://malijinkuang.blog.csdn.net/article/details/148358237

---

# 揭秘AI“自我进化”新突破！普林斯顿团队Alita智能体：让MCP工具自动生长，GAIA测试碾压同行

最新推荐文章于 2026-05-20 23:07:53 发布

原创

最新推荐文章于 2026-05-20 23:07:53 发布

·

1.2k 阅读

·
![](https://csdnimg.cn/release/blogv2/dist/pc/img/newHeart2023Active.png)![](https://csdnimg.cn/release/blogv2/dist/pc/img/newHeart2023Black.png)
                       14                   

·
9
·

CC 4.0 BY-SA版权

                                   版权声明：本文为博主原创文章，遵循[CC 4.0 BY-SA](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。                       

文章标签：

[#人工智能](https://so.csdn.net/so/search/s.do?q=%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)[#大数据](https://so.csdn.net/so/search/s.do?q=%E5%A4%A7%E6%95%B0%E6%8D%AE&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)[#数据挖掘](https://so.csdn.net/so/search/s.do?q=%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)[#服务器](https://so.csdn.net/so/search/s.do?q=%E6%9C%8D%E5%8A%A1%E5%99%A8&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)[#java](https://so.csdn.net/so/search/s.do?q=java&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)[#数据库](https://so.csdn.net/so/search/s.do?q=%E6%95%B0%E6%8D%AE%E5%BA%93&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)[#python](https://so.csdn.net/so/search/s.do?q=python&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)

[人工智能
                                    同时被 3 个专栏收录](https://blog.csdn.net/lbh73/category_12925970.html)

1342 篇文章

订阅专栏

[python](https://blog.csdn.net/lbh73/category_12922475.html)

1276 篇文章

订阅专栏

[MCP](https://blog.csdn.net/lbh73/category_12946869.html)

1273 篇文章

订阅专栏

在AI智能体领域，如何让系统像人类一样“自我学习、自我优化”一直是技术瓶颈。普林斯顿大学王梦迪团队最新发布的Alita智能体彻底打破了这个僵局！它不仅能拆解任务、自主生成工具，还能通过MCP协议实现“自我进化”，在GAIA基准测试中准确率登顶。本文将用最通俗的语言，带你深入解析Alita的核心技术、实战应用，甚至揭秘一种“低成本蒸馏策略”，让开发者轻松复用其能力！

---

一、AI智能体的“进化困境”：为什么需要Alita？
 传统AI智能体（如OpenAI的某DeepResearch、某Claude系列）虽然强大，但存在两大痛点：

1. 工具依赖僵化：执行复杂任务时，需提前预设所有工具和流程，无法动态生成新工具应对未知场景。
2. 优化成本高：模型迭代依赖大量数据训练，成本高且效率低，难以快速适应新需求。
 Alita的出现，正是为了解决这些问题！它的核心目标是：让智能体像人类一样“边工作、边进化”，自主创造工具并提升效率。这听起来像科幻？其实背后有一套精妙的模块化设计。

---

二、Alita的三大核心模块：拆解任务→生成工具→自我进化

1. Manager Agent：任务拆解与动态调度“大脑”

- 任务拆解：将复杂任务（如“分析某电商平台销售数据并生成可视化报告”）拆解为子任务（数据爬取、清洗、图表生成）。
- 智能分配：根据子任务需求，动态调度Web Agent、MCP组件等工具，甚至“临时创造”新工具（详见下文）。
- 环境适配：自动配置工具运行的环境参数（如API密钥、依赖库版本），无需人工干预。
 类比理解：就像项目经理接到需求后，自动拆分工作并分配团队资源，还能按需招聘新成员！

1. Web Agent：跨网页信息“狩猎者”

- 多网页浏览：并行访问多个目标网站，模拟人类“多标签页”信息检索。
- 精准抽取：通过语义匹配，抓取指定数据（如商品价格、用户评价）或链接，支持正则表达式、关键词过滤等灵活策略。
- 输出灵活：可返回结构化数据（JSON格式）或原始内容片段，供后续模块处理。
 实战场景：当Manager Agent需要“查询某科技公司股票历史数据”时，Web Agent会自主访问财经网站、解析表格，并提取关键指标——无需提前预设固定数据源。

1. MCP（模型上下文协议）创建组件：自我进化的“魔法引擎”
 这是Alita最核心的创新！包含三个子模块：

- MCP Brainstorming：评估当前任务缺口，识别需要新工具的场景（如“缺少某数据库查询工具”）。
- ScriptGeneratingTool：基于识别结果，自动生成工具开发脚本（Python/Java等），包含API调用逻辑、错误处理框架。
- CodeRunningTool：实时编译并运行生成的代码，将新工具无缝接入系统，无需重启服务！
 进化实例：当处理“解析医学影像报告”任务时，Alita发现缺乏专用分析库，于是自动编写调用某医疗API的脚本，并在10分钟内完成工具部署——这才是真正的“边工作、边成长”！

---

三、GAIA测试碾压同行：Alita的实战成绩单
 GAIA基准测试（General AI Assistants Benchmark）是AI智能体的“高考”，涵盖多步骤推理、工具调用、跨模态处理等466个真实任务。Alita的表现堪称惊艳：

- 综合准确率：所有难度级别均优于其他主流智能体（如某GPT-4o、某Claude-Sonnet-4）。
- Pass@1/Pass@3指标：在应用Alita生成的MCPs后，某Claude-Sonnet-4的GAIA通过率从XX%提升至75.15%（Pass@1），某GPT-4o提升至87.27%（Pass@3）。
- 效率优势：相比从头训练新模型，Alita的“工具自动生成”策略成本降低80%，但性能提升明显！
 数据说话：这证明Alita不仅能“自我进化”，其生成的MCP工具还能被其他智能体复用，形成“低成本蒸馏”策略。

---

四、技术深挖：Alita的“智能体蒸馏”策略与开源潜力

1. 什么是“智能体蒸馏”？
 类比模型蒸馏：用大模型（教师）训练小模型（学生），智能体蒸馏则是用高性能智能体（如Alita）生成的MCP工具，提升其他智能体的执行能力。
2. Alita蒸馏的优势：

- 零训练成本：无需重新训练目标智能体，直接注入Alita生成的工具脚本。
- 精度显著提升：例如在某GPT-4o上运行Open Deep Research-smolagents，引入Alita的MCP后，GAIA各级任务准确度平均提升20%~30%。
- 适用性广泛：任何支持MCP协议的智能体均可受益（如某代码助手、某机器人框架）。

1. 开发者如何快速上手？

```
步骤1：初始化Alita的MCP生成器  
mcp_generator = AlitaMCPGenerator(task="金融数据分析")  
步骤2：生成专用工具脚本（如数据库查询工具）  
mcp_script = mcp_generator.generate_tool_script()  
步骤3：部署到目标智能体（如某GPT-4o框架）  
target_agent.load_mcp_script(mcp_script)  
效果：目标智能体自动获得新工具，执行效率提升！
```

---

五、未来展望：Alita可能颠覆的三大领域

1. 企业自动化：动态生成工具链，让RPA（机器人流程自动化）系统不再依赖固定脚本。
2. 科研加速：自主调用分析工具，助力生物、物理等领域快速处理实验数据。
3. 个人开发者利器：一键生成MCP工具，降低AI项目开发门槛。
 王梦迪团队的下一步：计划开放部分MCP生成模块的API，推动社区共建“智能工具库”，让Alita的进化能力普惠更多场景！

---

六、总结：为什么你应该关注Alita？

- 技术突破：首次实现智能体的“自我工具生成+低成本蒸馏”，打破传统AI优化的天花板。
- 实用价值：无论是企业降本增效，还是个人开发者创新，都能从中找到灵感。
- 伦理与安全：通过模块化设计，Alita的进化过程可追溯、可控制，避免“黑盒”风险。
 你的行动：点赞收藏本文，关注后续技术动态！若你在实践中尝试了Alita相关策略，欢迎评论区分享经验——或许下一个技术突破，就来自你的灵感！

---

> 如果您觉得这篇文章对你有帮助，欢迎点赞、关注和评论！你的支持是我创作的最大动力！

![](https://csdnimg.cn/release/blogv2/dist/pc/img/vip-limited-close-newWhite.png)
         确定要放弃本次机会？       

福利倒计时

*:*

*:*

![](https://csdnimg.cn/release/blogv2/dist/pc/img/vip-limited-close-roup.png)
立减 ¥

普通VIP年卡可用

[立即使用](https://mall.csdn.net/vip)

[码力金矿](https://malijinkuang.blog.csdn.net)

[关注](javascript:;)关注

- 14

点赞

- 

踩

- [9](javascript:;)

                     收藏                   

                   觉得还不错?                   
                     一键收藏                   
![](https://csdnimg.cn/release/blogv2/dist/pc/img/collectionCloseWhite.png)

- 
![](https://csdnimg.cn/release/blogv2/dist/pc/img/guideRedReward01.png)
[0](https://malijinkuang.blog.csdn.net/article/details/148358237#commentBox)

评论

- [分享](javascript:;)

复制链接

分享到 QQ

分享到新浪微博

![](https://csdnimg.cn/release/blogv2/dist/pc/img/share/icon-wechat.png)扫一扫                     

- [打赏](javascript:;)

打赏

- 

打赏举报

举报

专栏目录

[自动进化新突破！普林斯顿Alita通用智能体：让MCP工具自我生长，性能碾压同行](https://devpress.csdn.net/v1/article/detail/148801183)

[分享平时的学习心得和笔记](https://blog.csdn.net/lbh73)

06-20

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 822 

[摘要：普林斯顿大学王梦迪团队开发的Alita通用智能体突破传统AI依赖预设工具的局限，通过三大核心模块实现了动态工具生成能力。其创新性的MCP工具自动生成机制，使智能体能够自主创建并优化工具，在GAIA基准测试中以75.15%准确率显著领先。Alita采用极简架构设计，支持沙箱安全运行，可复用工具提升其他智能体性能。这项技术标志着AI从固定功能向自主进化的转变，为通用智能体发展提供了新范式。](https://devpress.csdn.net/v1/article/detail/148801183)

[麻省理工MIT硬核神课《如何用AI做任何事》：多模态大模型底层逻辑与商业前沿全解析](https://devpress.csdn.net/v1/article/detail/161200904)

[https://blog.csdn.net/xianggll](https://blog.csdn.net/xianggll)

05-18

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 487 

[麻省理工学院Paul Liang教授的《如何用AI做任何事》彻底重构了人工智能的认知底座。本文为您进行深度拆解，从多模态数据图谱、图网络架构，一路进阶至流匹配生成引擎与交互式智能体。带您穿透技术迷雾，抢占下一代人机协同的科研高地与商业爆发点。](https://devpress.csdn.net/v1/article/detail/161200904)

参与评论

您还未登录，请先

登录

后发表或查看评论

[2026 AI x Web3 School共学营笔记-Day3
					最新发布](https://blog.csdn.net/wwh1st/article/details/161265421)

[kennyharris](https://blog.csdn.net/wwh1st)

05-20

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 194 

[接收方RPC节点的接收流程：收到原始交易信息的消息  还有 声称的发送地址 ，还有携带的签名。计算出的地址和发送方地址完全匹配，通过了密码学的校验。区块链发送方流程：首先自己要先创建钱包，有了钱包就有了私钥，也有钱包地址。交易和查询都会产生Gas Fee.只不过查询的Gas Fee太少，RPC节点直接把查询这部分的Gas Fee给我们免掉了。这个网站提供了 一个很形象的上车排队的 可视化形容区块链网络运行流程的图片。这个网站提供了 一个很形象的上车排队的 可视化形容区块链网络运行流程的图片。](https://blog.csdn.net/wwh1st/article/details/161265421)

[网安进入“AI自动攻击时代”，如何用AI守住AI？](https://blog.csdn.net/bjzlxc/article/details/161261064)

[bjzlxc的博客](https://blog.csdn.net/bjzlxc)

05-20

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 117 

[我们必须把AI植入到防御的最前线，让它去处理那些海量的、瞬息万变的威胁数据，把我们这些人类安全专家，从繁琐的日志分析中解放出来，去处理那些更具战略性、更需要人类智慧的决策。真正的“守住AI”，是让人类站在AI的肩膀上，用更广阔的视野去审视风险，用更深邃的智慧去制定规则，让技术回归到保护文明、守护信任的初衷上来。不过千万别忘了，AI本身也是有漏洞的，攻击者可能会通过“数据投毒”来误导你的防御模型，这种“套娃式”的攻防博弈，才是未来网安最残酷也最精彩的地方��想想都让人有点兴奋又有点头疼。](https://blog.csdn.net/bjzlxc/article/details/161261064)

[AI动态简报之商业洞察篇](https://devpress.csdn.net/v1/article/detail/161185664)

[英辰朗迪aibridge的官方博客](https://blog.csdn.net/aibridge)

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

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1415 

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

[Spring AI RAG - 09 AI 绘图 ImageModel 集成](https://devpress.csdn.net/v1/article/detail/161137581)

[小工匠](https://blog.csdn.net/yangshangwei)

05-16

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 199 

[本文介绍了基于Spring AI的AI绘图功能实现方案。通过ImageModel抽象层统一接入不同厂商的图像生成API，后端采用代理下载模式将临时URL转换为图片字节流返回。文章详细解析了从Prompt到图片的端到端流程，包括Spring AI的Image抽象设计、DashScope图像模型自动装配、DrawImageController实现代码，以及前端集成方式。该方案具有接口统一、隐藏实现细节、便于扩展优化等特点，支持同步和异步两种调用方式，生成一张1024×1024图片耗时约5-15秒。未来可进一步优](https://devpress.csdn.net/v1/article/detail/161137581)

[深度学习优化算法（四）—— 参数初始化策略（Xavier/Kaiming/正交）（三十六）](https://helloreader.blog.csdn.net/article/details/161183480)

[hello.reader](https://blog.csdn.net/weixin_43114209)

05-18

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 417 

[本文系统分析了神经网络参数初始化的核心问题与解决方案。首先指出初始化需要满足两个关键目标：打破参数对称性和保持信号传播稳定性。随后揭示了朴素初始化方法（全零、大/小方差随机）的失败原因，并深入推导了Xavier和Kaiming两种经典初始化策略的数学原理。特别强调了ReLU激活函数对初始化方差的特殊要求，以及Kaiming初始化如何通过调整方差标度来保证深层网络的稳定训练。最后总结了不同激活函数对应的初始化增益系数，为实践提供了具体指导。这些方法构成了现代深度神经网络训练的基础，特别](https://helloreader.blog.csdn.net/article/details/161183480)

[Three.js 抽象艺术着色器效果 | 三维可视化 / AI 提示词](https://blog.csdn.net/huhuan123456/article/details/160745912)

[huhuan123456的博客](https://blog.csdn.net/huhuan123456)

05-20

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 175 

[这篇技术文档介绍了使用Three.js实现抽象艺术着色器效果的方案。核心内容包括五种抽象艺术类型（几何、色彩、动态、分形、光影）的着色器实现，每种类型都通过GLSL代码片段展示了关键技术点。文档采用结构化呈现方式，包含效果预览、技术拆解表格、着色器代码示例以及调试优化建议。技术实现上重点使用自定义着色器创造艺术效果，配合GUI控制参数和交互功能。扩展部分提出了艺术风格迁移、音乐可视化等进阶方向。整体方案结合了计算机图形学和数字艺术创作，为Web端实现高质量抽象视觉效果提供了实用参考。](https://blog.csdn.net/huhuan123456/article/details/160745912)

[AI行动力重塑未来职场，道可云携“OpenClaw”智能体走进青岛职教课堂](https://daokeyun.blog.csdn.net/article/details/161114462)

[道可云](https://blog.csdn.net/Daokeyunkj)

05-15

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 637 

[五月的青岛，海风习习，职业教育的热情在校园涌动。与平日课堂不同，讲台上站的是道可云公司总经理孙即林，这位来自人工智能产业一线的“导师”，以“技能成才+AI”为题，为数百名学子带来了一场关于技术、产业与未来的思想碰撞，OpenClaw（“大龙虾”）及其代表的“AI行动力”，成为了连接在校学生与未来职场的关键纽带。”青岛工程职业学院相关负责人表示，此次邀请企业一线从业者进校园，希望通过真实产业案例，让学生更直观地了解人工智能发展趋势，增强学生对新技术、新职业的认知，进一步推动职业教育与产业需求深度衔接。](https://daokeyun.blog.csdn.net/article/details/161114462)

评论
![](https://csdnimg.cn/release/blogv2/dist/pc/img/closeBt.png)

![](https://csdnimg.cn/release/blogv2/dist/pc/img/commentArrowLeftWhite.png)
被折叠的 

 条评论  [为什么被折叠?](https://blogdev.blog.csdn.net/article/details/122245662)[到【灌水乐园】发言](https://bbs.csdn.net/forums/FreeZone)

查看更多评论

       添加红包       

![](https://csdnimg.cn/release/blogv2/dist/pc/img/guideRedReward02.png)

![](https://csdnimg.cn/release/blogv2/dist/pc/img/guideRedReward03.png)

打赏作者
![](https://csdnimg.cn/release/blogv2/dist/pc/img/closeBt.png)

[https://malijinkuang.blog.csdn.net](https://malijinkuang.blog.csdn.net)

码力金矿

谢谢您的打赏，我将会更好创作。

¥1

¥2

¥4

¥6

¥10

¥20

扫码支付：

¥1

![](https://csdnimg.cn/release/blogv2/dist/pc/img/pay-time-out.png)
获取中

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newWeiXin.png)![](https://csdnimg.cn/release/blogv2/dist/pc/img/newZhiFuBao.png)
扫码支付

您的余额不足，请更换扫码支付或[充值](https://i.csdn.net/#/wallet/balance/recharge?utm_source=RewardVip)

打赏作者

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
