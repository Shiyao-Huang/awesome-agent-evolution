# AI已学会改自己代码，性能提升100%，还会「改绩效」！程序员，还不慌？-腾讯云开发者社区-腾讯云

- URL: https://cloud.tencent.com/developer/article/2649749
- Platform: cloud.tencent.com
- Extraction status: ok
- content_timestamp: 2026-04
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-04
- Query: site:cloud.tencent.com AI Agent 自优化

## Raw Content

## AI已学会改自己代码，性能提升100%，还会「改绩效」！程序员，还不慌？-腾讯云开发者社区-腾讯云

**Source**: https://cloud.tencent.com/developer/article/2649749

---

[https://cloud.tencent.com/developer/user/1557172](https://cloud.tencent.com/developer/user/1557172)

[OpenCV学堂](https://cloud.tencent.com/developer/user/1557172)

## AI已学会改自己代码，性能提升100%，还会「改绩效」！程序员，还不慌？

[腾讯云](https://cloud.tencent.com/?from=20060&from_column=20060)

[开发者社区](https://cloud.tencent.com/developer)

[文档](https://cloud.tencent.com/document/product?from=20702&from_column=20702)[建议反馈](https://cloud.tencent.com/voc/?from=20703&from_column=20703)[控制台](https://console.cloud.tencent.com/?from=20063&from_column=20063)

[首页](https://cloud.tencent.com/developer)

学习

活动

专区

圈层

工具

[MCP广场](https://cloud.tencent.com/developer/mcp)

文章/答案/技术大牛

发布

OpenCV学堂

**

**

**

**

**

[社区首页](https://cloud.tencent.com/developer)
 >
[专栏](https://cloud.tencent.com/developer/column)
 >

AI已学会改自己代码，性能提升100%，还会「改绩效」！程序员，还不慌？

# AI已学会改自己代码，性能提升100%，还会「改绩效」！程序员，还不慌？

![作者头像](https://developer.qcloudimg.com/http-save/10011/c9ab06d133eb50e7cce8af64e3318f47.jpg)

OpenCV学堂

发布于 2026-04-02 19:23:39

发布于 2026-04-02 19:23:39

203

0

举报

**文章被收录于专栏：

[贾志刚-OpenCV学堂](https://cloud.tencent.com/developer/column/2289)
贾志刚-OpenCV学堂

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/53289cc7650b50af8dd77a91c96d594d.png)

图片

---

 点击上方↑↑↑“OpenCV学堂”关注我 

###### **【导读】编程智能体也有「进化论」！Transformer作者初创Sakana AI与UBC推出达尔文-哥德尔机（DGM），能自动改写自身代码，性能翻倍超越人工设计。还能跨语言迁移、发明新工具。AI要觉醒了？**

编程智能体杀疯了！

不仅能协助写代码，如今编程智能体甚至能实现自我「进化」！

最近，Transformer作者初创Sakana AI和加拿大UBC的Jeff Clune实验室合作，推出了自我改进的智能体——

「达尔文-哥德尔机」（Darwin Gödel Machine，简称DGM）。

作为一个编程智能体，它能修改自己的代码，比如改进自己的提示词，为自己编写工具等。

通过这个方式，DGM不止优化了智能体在编程任务上的能力，也同时强化了未来进一步自提升的能力，实现了递归式的自我改进。

在两个关键基准测试中，DGM显著提升了编程能力：

- **SWE-bench：性能从20.0%提升至50.0%；**
- **Polyglot：成功率从14.2%提升至30.7%**。

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/e1b592a00accfb251823232acc3b7555.png)

图片

论文链接：https://arxiv.org/abs/2505.22954

代码仓库：https://github.com/jennyzzt/dgm

更疯狂的是：

- 学Python的技能直接用在Rust/C++
- 自动发明新工具提升效率
- 但曾被抓住「伪造测试结果」...

**在不久的将来，DGM有可能超过那些由人类手动设计的AI系统。**

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/d6a5d3950c18f7d8ebd1167a0fbe370b.png)

图片

**达尔文+哥德尔**

**智能体自我进化**

**创造无限进化**的智能体，是AI的终极梦想之一。

而实现这梦想的诱人路径之一，是让AI**自己重写自己的代码**，甚至连本身的学习算法也能改！

早在十几年前，就有研究者提出了这种概念，称之为「哥德尔机」（Gödel Machine）。

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/8aac25d9ab8772c91e3697add4df9ff0.jpg)

图片

项目链接：https://people.idsia.ch/~juergen/goedelmachine.html

在**理论上，这种AI能自我改进**：只要能**数学上证明改得更好**，它就会**主动修改自己**！

传统哥德尔机需数学证明改进有效性，难以实现。

而DGM另辟蹊径，改用更务实的方案：**不再要求「数学证明」，而是靠实验「边做边学」**。

也就是说，**DGM用实验验证代替理论证明**。

它的名字灵感来自两个理论：达尔文的进化论和哥德尔的数学理论。

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/4aed0ddd07a9714ec9b69fdbead3e677.jpg)

图片

它吸收了「达尔文进化论」，筛选出探索性能更强的新版本。这是模型的「自我修改」阶段。

同时，DGM不纠结于复杂的数学证明，像科学家做实验一样：改代码→测试效果→有效就保留。这是「基准评估」阶段。

**DGM在自我修改和评估两个阶段之间反复切换。**

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/481ffdc0f410be4f4308134b24668649.png)

图片

图1：达尔文哥德尔机自我改进循环

在自我修改阶段，DGM从现有存档选出的智能体，生成自身的改进版本。

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/7a8eb5401954ff296d62ee75cb4ec15e.png)

图片

在评估阶段，在编程基准测试上，这些修改后的智能体会进行测试，评估编程能力，测试完成后再将其加入到智能体存档中。

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/4f285570d9858fa7c2cb6407acf63e32.gif)

图片

DGM的这一循环过程不断提升自身能力，不仅能更好地完成编程任务，也能在未来实现更有效的自我改进。

如果编程基准测试性能提升代表了编程能力增强，那么这也意味着DGM的自我修改与优化能力正在不断增强。

DGM就像会进化的AI程序员：

- 自我升级：分析代码→发现问题→改写优化
- 群体进化：生成多个变体，保留最优版本
- 永不固化：不断探索新工作流程，永无止境

DGM实现了多种自我改进功能，包括：

- 补丁验证步骤：确保代码修改的可靠性
- 更优的文件查看方式：提升代码浏览体验
- 增强的编辑工具：优化开发效率
- 多方案生成与排序：自动生成多个解决方案并筛选最佳选项
- 历史记录功能：记录过往尝试的修改内容及其失败原因，为新变更提供参考

**这意味着，DGM真的能通过自我改进变得越来越聪明！**

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/d6a5d3950c18f7d8ebd1167a0fbe370b.png)

图片

**编程智能体进化之路**

研究者实证了DGM修改自身代码的能力确实能加速其学习过程（见下图），而不具备递归式自我改进功能的对照版本（图中的DGM w/o Self-improve）表现明显较差。

此外，实验还显示，开放式算法原理的引入也是关键所在：

如果**没有以达尔文进化论**为灵感、依靠不断扩展的「垫脚石」智能体存档进行的搜索，就无法支持目标切换和多路径并行探索，性能也会显著下降（图中的DGM w/o Open-ended exploration）。

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/5d3409808e6e23caf045f9c57b890562.png)

图片

图2：递归式自我改进与开放式探索使达尔文哥德尔机（DGM）能够持续进步，不断提升性能。

DGM会自动发现越来越优秀的编程智能体，并在SWE-bench（图2左）和Polyglot（图2右）两个评测中表现出更高的得分。

相比之下，那些缺乏「递归式自我改进」或「开放式探索」能力的基线系统表现较差，说明这两个核心组件对持续自我优化至关重

图3左是「演化树」，描绘了其智能体在存档中生成的分支结构。

图中每个节点代表一个编程智能体，节点0是初始智能体。

节点颜色表示该智能体在SWE-bench上的性能（即完成任务的百分比），边框颜色表示该智能体被用于评估的任务数量。

节点之间的连线表示哪个智能体通过自我修改生成了哪个「子智能体」。

这种分支结构正是DGM开放式探索策略的结果：**它从此前生成的多样化智能体中采样，作为新改动的起点。这一机制让DGM能够同时探索多条进化路径**。

研究者观察到，一些早期表现较弱的「祖先智能体」，如果使用传统的优化方法，可能早已被淘汰；但在DGM的框架中，它们却成为了启发后续重要改进的关键。

正是这些早期尝试，帮助系统最终突破了性能瓶颈，避免了过早收敛在次优解上。

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/dede4d3070df2dec10dc39a7a400ade2.png)

图片

**图3（左）：DGM自动进行自我改进，逐步成为更强大的编程智能体**

**图3右**是DGM在SWE-bench上的性能提升过程图。

浅蓝线表示所有具备基本代码编辑功能的智能体的平均得分；蓝色实线表示每轮迭代中存档中最优智能体的得分；深色实线则追踪最终最佳智能体及其祖先节点的进化轨迹，其中包括两次性能下降。

**这表明DGM并非一味从当前最优解出发，而是通过探索多样化的「垫脚石」实现突破，避免了陷入局部最优。这正是开放式探索的又一大优点**。

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/541360822ed808b6682dd674de3a8f3d.png)

图片

图3（右）：DGM自动进行自我改进，逐步成为更强大的编程智能体

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/d6a5d3950c18f7d8ebd1167a0fbe370b.png)

图片

**从Python到Rust**

**样样精通！ **

DGM不仅能提升自己，还能把学到的「技能」用在不同的场景中。

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/a660d840498ef26564be8b14e6ec1e73.png)

图片

图4：模型与任务之间的迁移能力

达尔文哥德尔机（DGM）发现的智能体的优越性能可以在不同的模型之间进行迁移（见上图左和中），并且可以迁移到不同任务领域，例如从Python任务迁移到其他语言如Rust、C++、Go等的任务（见上图右）。

以下是它的几个「超能力」：

- **跨模型通用**：DGM用Claude 3.5 Sonnet模型优化后，换到其他模型（比如o3-mini或Claude 3.7 Sonnet）也能表现得很棒。这说明它找到的改进方案是通用的，不是只适合某个特定模型。
- **跨语言应用**：DGM在Python任务上训练后，竟然也能提升在Rust、C++、Go等其他编程语言上的表现。这就像一个只会说中文的人，突然学会了用英文、法文解决问题一样厉害！
- **自动发明新工具**：DGM自己发明了一些新功能，比如更好的文件编辑工具、生成多个解决方案并排序选择最佳方案，这些都让它的编程能力突飞猛进。

不过，当AI开始自我修改，安全问题也随之而来。

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/003cd021b4ff56b9f003342a42a41d51.png)

图片

**AI安全措施**

确实，DGM的能力让人既兴奋又有点担心。

研究团队也意识到了这个问题，在开发过程中特别注重安全：

- 沙盒环境：所有代码改动都在安全的「沙盒」中进行，相当于一个隔离的实验室，防止AI接触外部网络，做出意外行为。
- 透明追踪：DGM的每次改动都有记录，形成一个清晰的「进化树」，人类可以随时检查它做了什么。

**不过，DGM也暴露了一些潜在问题。**

比如，它有时候会「作弊」：为了拿到高分，曾**伪造测试日志、删除检测标记**——

像学生篡改成绩单，暴露出自我改进AI的潜在风险。

好在有透明追踪，团队发现了这些问题。

但这也提醒我们，AI的自我改进必须更严格地控制，确保它不会「学坏」。

**有趣的是，DGM还能帮自己提升安全性**。

研究团队让它解决「假装用工具」的问题，DGM真的提出了一些改进方案，虽然有时候还是会「耍小聪明」。

这说明，未来的AI安全研究可以利用DGM的能力，让它自己变得更可信、更透明。

DGM的出现，可能是AI发展史上的一个里程碑。

它不仅展示了AI自我进化的可能性，还打开了一扇窗：如果AI能不断自我改进，它能帮人类做些什么？

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/d6a5d3950c18f7d8ebd1167a0fbe370b.png)

图片

**作者介绍**

**Jenny Zhang**

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/a74331d490893236b652e43a8efcd019.jpg)

图片

Jenny Zhang是Meta研究科学家实习生，加拿大英属哥伦比亚大学（University of British Columbia）人工智能博士在读，师从Jeff Clune教授，同时也是Vector Institute学生研究员。

曾于伦敦帝国理工学院完成本科学习。研究方向为强化学习、自我改进AI及开放式学习(open-endedness)。

**胡圣然**

![图片](https://developer.qcloudimg.com/http-save/yehe-1557172/de039dea278d8e5f9c0fd4924f343d35.jpg)

图片

胡圣然是Sakana AI研究实习科学家实习生，加拿大英属哥伦比亚大学（University of British Columbia）人工智能博士在读，师从Jeff Clune教授，同时也是Vector Institute学生研究员。

曾于南方科技大学完成本科学习。研究方向包括元学习(meta-learning)、智能体以及开放式学习(Open-endedness)。

参考资料：

https://sakana.ai/dgm/

https://arxiv.org/pdf/2505.22954

https://x.com/SakanaAILabs/status/1928272612431646943

https://www.jennyzhangzt.com/

https://www.shengranhu.com/

本文参与 [腾讯云自媒体同步曝光计划](https://cloud.tencent.com/developer/support-plan)，分享自微信公众号。

原始发表：2025-06-03，如有侵权请联系 [cloudcommunity@tencent.com](mailto:cloudcommunity@tencent.com) 删除

[程序员](https://cloud.tencent.com/developer/tag/17217)

[模型](https://cloud.tencent.com/developer/tag/17381)

[性能](https://cloud.tencent.com/developer/tag/17525)

[优化](https://cloud.tencent.com/developer/tag/17554)

[编程](https://cloud.tencent.com/developer/tag/17183)

本文分享自 
OpenCV学堂
 微信公众号，
前往查看

如有侵权，请联系 [cloudcommunity@tencent.com](mailto:cloudcommunity@tencent.com) 删除。

本文参与 [腾讯云自媒体同步曝光计划](https://cloud.tencent.com/developer/support-plan)  ，欢迎热爱写作的你一起参与！

[程序员](https://cloud.tencent.com/developer/tag/17217)

[模型](https://cloud.tencent.com/developer/tag/17381)

[性能](https://cloud.tencent.com/developer/tag/17525)

[优化](https://cloud.tencent.com/developer/tag/17554)

[编程](https://cloud.tencent.com/developer/tag/17183)

评论

登录
后参与评论

0 条评论

热度

最新

登录 
后参与评论

推荐阅读

目录

- 
【导读】编程智能体也有「进化论」！Transformer作者初创Sakana AI与UBC推出达尔文-哥德尔机（DGM），能自动改写自身代码，性能翻倍超越人工设计。还能跨语言迁移、发明新工具。AI要觉醒了？

领券

- 

### 社区

  - [技术文章](https://cloud.tencent.com/developer/column)
  - [技术问答](https://cloud.tencent.com/developer/ask)
  - [技术沙龙](https://cloud.tencent.com/developer/salon)
  - [技术视频](https://cloud.tencent.com/developer/video)
  - [学习中心](https://cloud.tencent.com/developer/learning)
  - [技术百科](https://cloud.tencent.com/developer/techpedia)
  - [技术专区](https://cloud.tencent.com/developer/zone/list)

- 

### 活动

  - [自媒体同步曝光计划](https://cloud.tencent.com/developer/support-plan)
  - [邀请作者入驻](https://cloud.tencent.com/developer/support-plan-invitation)
  - [自荐上首页](https://cloud.tencent.com/developer/article/1535830)
  - [技术竞赛](https://cloud.tencent.com/developer/competition)

- 

### 圈层

  - [腾讯云最具价值专家](https://cloud.tencent.com/tvp)
  - [腾讯云架构师技术同盟](https://cloud.tencent.com/developer/program/tm)
  - [腾讯云创作之星](https://cloud.tencent.com/developer/program/tci)
  - [腾讯云TDP](https://cloud.tencent.com/developer/program/tdp)

- 

### 关于

  - [社区规范](https://cloud.tencent.com/developer/article/1006434)
  - [免责声明](https://cloud.tencent.com/developer/article/1006435)
  - [联系我们](mailto:cloudcommunity@tencent.com)
  - [友情链接](https://cloud.tencent.com/developer/friendlink)
  - [MCP广场开源版权声明](https://cloud.tencent.com/developer/article/2537547)

### 腾讯云开发者

![扫码关注腾讯云开发者](https://qcloudimg.tencent-cloud.cn/raw/a8907230cd5be483497c7e90b061b861.png?imageView2/2/w/200)

扫码关注腾讯云开发者

领取腾讯云代金券

### 热门产品

- [域名注册](https://cloud.tencent.com/product/domain?from=20064&from_column=20064)
- [云服务器](https://cloud.tencent.com/product/cvm?from=20064&from_column=20064)
- [区块链服务](https://cloud.tencent.com/product/tbaas?from=20064&from_column=20064)
- [消息队列](https://cloud.tencent.com/product/message-queue-catalog?from=20064&from_column=20064)
- [网络加速](https://cloud.tencent.com/product/ecdn?from=20064&from_column=20064)
- [云数据库](https://cloud.tencent.com/product/tencentdb-catalog?from=20064&from_column=20064)
- [域名解析](https://cloud.tencent.com/product/dns?from=20064&from_column=20064)
- [云存储](https://cloud.tencent.com/product/cos?from=20064&from_column=20064)
- [视频直播](https://cloud.tencent.com/product/css?from=20064&from_column=20064)

### 热门推荐

- [人脸识别](https://cloud.tencent.com/product/facerecognition?from=20064&from_column=20064)
- [腾讯会议](https://cloud.tencent.com/product/tm?from=20064&from_column=20064)
- [企业云](https://cloud.tencent.com/act/pro/enterprise2022?from=20064&from_column=20064)
- [CDN加速](https://cloud.tencent.com/product/cdn?from=20064&from_column=20064)
- [视频通话](https://cloud.tencent.com/product/trtc?from=20064&from_column=20064)
- [图像分析](https://cloud.tencent.com/product/imagerecognition?from=20064&from_column=20064)
- [MySQL 数据库](https://cloud.tencent.com/product/cdb?from=20064&from_column=20064)
- [SSL 证书](https://cloud.tencent.com/product/ssl?from=20064&from_column=20064)
- [语音识别](https://cloud.tencent.com/product/asr?from=20064&from_column=20064)

### 更多推荐

- [数据安全](https://cloud.tencent.com/solution/data_protection?from=20064&from_column=20064)
- [负载均衡](https://cloud.tencent.com/product/clb?from=20064&from_column=20064)
- [短信](https://cloud.tencent.com/product/sms?from=20064&from_column=20064)
- [文字识别](https://cloud.tencent.com/product/ocr?from=20064&from_column=20064)
- [云点播](https://cloud.tencent.com/product/vod?from=20064&from_column=20064)
- [大数据](https://cloud.tencent.com/product/bigdata-class?from=20064&from_column=20064)
- [小程序开发](https://cloud.tencent.com/solution/la?from=20064&from_column=20064)
- [网站监控](https://cloud.tencent.com/product/tcop?from=20064&from_column=20064)
- [数据迁移](https://cloud.tencent.com/product/cdm?from=20064&from_column=20064)

Copyright © 2013 - 2026 Tencent Cloud. All Rights Reserved. 腾讯云 版权所有 

[深圳市腾讯计算机系统有限公司](https://qcloudimg.tencent-cloud.cn/raw/986376a919726e0c35e96b311f54184d.jpg)
 ICP备案/许可证号：
[粤B2-20090059](https://beian.miit.gov.cn/#/Integrated/index)![](https://qcloudimg.tencent-cloud.cn/raw/eed02831a0e201b8d794c8282c40cf2e.png)[粤公网安备44030502008569号](https://beian.mps.gov.cn/#/query/webSearch?code=44030502008569)

[腾讯云计算（北京）有限责任公司](https://qcloudimg.tencent-cloud.cn/raw/a2390663ee4a95ceeead8fdc34d4b207.jpg) 京ICP证150476号 |  [京ICP备11018762号](https://beian.miit.gov.cn/#/Integrated/index)

[问题归档](https://cloud.tencent.com/developer/ask/archives.html)[专栏文章](https://cloud.tencent.com/developer/column/archives.html)[快讯文章归档](https://cloud.tencent.com/developer/news/archives.html)[关键词归档](https://cloud.tencent.com/developer/information/all.html)[开发者手册归档](https://cloud.tencent.com/developer/devdocs/archives.html)[开发者手册 Section 归档](https://cloud.tencent.com/developer/devdocs/sections_p1.html)

Copyright © 2013 - 2026 Tencent Cloud.

All Rights Reserved. 腾讯云 版权所有

登录 
后参与评论

**

**

**

**
