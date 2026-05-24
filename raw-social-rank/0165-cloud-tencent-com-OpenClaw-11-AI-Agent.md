# 我用OpenClaw搭了11个AI Agent，它们学会了自我进化-腾讯云开发者社区-腾讯云

- URL: https://cloud.tencent.com/developer/article/2633970
- Platform: cloud.tencent.com
- Extraction status: ok
- content_timestamp: 2026-03
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-03
- Query: site:cloud.tencent.com AI Agent 自优化

## Raw Content

## 我用OpenClaw搭了11个AI Agent，它们学会了自我进化-腾讯云开发者社区-腾讯云

**Source**: https://cloud.tencent.com/developer/article/2633970

---

[https://cloud.tencent.com/developer/user/2556764](https://cloud.tencent.com/developer/user/2556764)

[孟健](https://cloud.tencent.com/developer/user/2556764)

## 我用OpenClaw搭了11个AI Agent，它们学会了自我进化

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

孟健

**

**

**

**

**

[社区首页](https://cloud.tencent.com/developer)
 >
[专栏](https://cloud.tencent.com/developer/column)
 >

我用OpenClaw搭了11个AI Agent，它们学会了自我进化

# 我用OpenClaw搭了11个AI Agent，它们学会了自我进化

![作者头像](https://ask.qcloudimg.com/avatar/2556764/e8xqlkkbgf.png)

孟健

发布于 2026-03-04 18:45:25

发布于 2026-03-04 18:45:25

2.1K

0

举报

**文章被收录于专栏：

[前端工程](https://cloud.tencent.com/developer/column/4340)
前端工程

大家好，我是孟健。

今天分享一个让我特别兴奋的进展：**我的11个AI Agent终于学会了自我进化**。

不是我每天教它们，而是它们自己在观察、学习、调整策略。

先看一组数据：

- 视频号「放弃Cursor半年」：4.7万播放，658转发，3天净增300+粉
- 掘金「16个AI Agent」：持续热榜第9天，14,701阅读
- 知乎Cursor文章：1.5万阅读，收藏率3.7%（平均只有1-2%）
- YouTube：28天+833%成长期爆发

**这些成绩不是我盯出来的**，是11个Agent各自在自己的领域里复盘、迭代、越做越好。

我的Agent军团

先介绍一下这个团队：

![Agent团队](https://developer.qcloudimg.com/http-save/yehe-2556764/f8f477c5364448553e964886e945883d.jpg)

Agent团队

14个成员，覆盖**公众号、视频号、抖音、知乎、小红书、掘金、Twitter、YouTube、B站、微博、即刻、知识星球**——每个平台一个专属Agent。

每个Agent都有自己的workspace、记忆系统、Playbook，完全独立运作。

什么叫「自我进化」？

先看一张截图，这是墨微Agent（负责公众号）每天自动生成的竞品分析：

![墨微竞品分析](https://developer.qcloudimg.com/http-save/yehe-2556764/95f5c41ce5b3a572647fffbd6df51cca.jpg)

墨微竞品分析

它在做什么？

1. 扫描竞品热点：「Claude Code Just Killed OpenClaw」17小时前发布
2. 发现选题机会：NanoClaw、5款工具对比实测
3. 更新策略：Playbook新增v3.5，确认「质量>数量」
4. 制定明日计划：回应「Claude Code杀死OpenClaw」

**这些全是Agent自己做的决策**，不是我写的脚本或者规则。

再看墨媒的「今日进化摘要」：

![今日进化摘要](https://developer.qcloudimg.com/http-save/yehe-2556764/95754d3bfe918349488f4226e413f91a.jpg)

今日进化摘要

6个Agent各自的策略调整：

**墨视**：验证了爆款公式「个人经历+时间反差+悬念」，决定把「放弃xx」做成系列

**墨抖**：更新Playbook——争议性内容比科普性更有效，封面公式=大厂Logo+情绪词+数字量化

**墨知**：发现claude.md是蓝海（393关注但只有48个回答），确定为下期主攻方向

**墨金**：发现「Vibe Coding→Agent军团」进阶角度有效，两篇同日上AI热榜

**墨油**：Qwen3.5爆款视频验证了CTR改善方案，下个视频准备用「混合流」缩略图

**墨圈**：修复微博正确UID后，即刻涨粉+5，说明「94万册」简介有效

这就是「自我进化」——**每个Agent都在自己的领域里学习什么有效、什么无效，然后调整策略**。

这套系统是怎么运行的？

三个核心机制：

1. 定时触发（Cron调度）

每个Agent有固定的晚间复盘时间，错开10分钟避免资源冲突：

代码语言：
javascript

复制

```
21:30 墨微（公众号）
21:40 墨知（知乎）
21:50 墨视（视频号）
22:00 墨抖（抖音）
...
23:30 墨媒（汇总全局日报）
```

OpenClaw内置cron调度器，每个任务在独立会话中运行，互不干扰。

2. 数据驱动（采集→分析→结论）

Agent不是凭感觉做决策，而是基于真实数据。

看墨知的深度复盘：

![墨知深度复盘](https://developer.qcloudimg.com/http-save/yehe-2556764/9452724a93885c9a149062a4d222cd9f.jpg)

墨知深度复盘

它分析自己的Cursor文章：

- 阅读1.5万
- 赞同58
- 收藏56
- 收藏率3.7%（优于均值1-2%）

得出结论：技术深度内容有长尾流量。

然后它还在主动发现机会：

- 知乎推荐位出现多个openclaw相关问题待抢占
- 「从夸到拉」全景测评文火爆 → 分类清晰是关键
- 国产替代话题热度高

**这不是我告诉它的**，是它自己分析数据、观察竞品后得出的结论。

3. 可写可改（Agent有权更新自己的规则）

这是最关键的一点：**Agent不只是读取策略，还能修改自己的Playbook**。

看墨视的爆款追踪：

![墨视爆款追踪](https://developer.qcloudimg.com/http-save/yehe-2556764/fa373401390147ca2595b1588857ba13.jpg)

墨视爆款追踪

「放弃Cursor半年」这条视频：

- 累计4.7万播放
- 658转发
- 转发率1.4%
- 3天净增300+粉

它不仅追踪数据，还在做视觉复盘：

- 封面：简洁文字版CTR较高
- 前5秒：「去年8月」时间锚开场验证有效
- 字幕：52px清晰，节奏2-3秒/句ok

然后它就在Playbook里记下这些发现。**下次创作时，它会读取这些新规则**。

记忆系统：如何让Agent「记住」

每个Agent有两层记忆：

**长期记忆（MEMORY.md）**

- 架构决策、踩坑记录、账号信息
- 比如：「公众号标题用数字效果更好」「周末发文阅读量下降30%」
- 有重大变化时才更新

**日记（memory/YYYY-MM-DD.md）**

- 每日操作记录、数据、策略变更
- 每次任务后都会写
- 第二天Agent醒来先读昨天的日记

**核心原则：文件是唯一的真相来源**。AI对话记忆会被压缩、会丢失，但写进文件的东西永远在。

每次会话启动时，OpenClaw会自动注入这些文件：

- SOUL.md — 你是谁（人设）
- AGENTS.md — 你管什么（职责）
- TOOLS.md — 怎么用工具
- MEMORY.md — 历史经验
- USER.md — 帮谁工作

Agent一醒来就知道自己是谁、要做什么、之前学到了什么。

Agent之间如何协作？

三种方式：

**1. 公共数据池**

墨媒每天早上07:50扫描全网热点，存入公共位置：

代码语言：
javascript

复制

```
data/daily_hotspots/2026-03-01.json
```

各平台Agent在08:00-09:40读取同一个文件，基于自己平台的特点决定要不要跟进。

**2. 跨会话消息**

Agent可以直接问其他Agent：

代码语言：
javascript

复制

```
sessions_send({
  label: "media-wechat",
  message: "今天公众号发了什么文章？"
})
```

比如墨知想参考公众号的选题方向，就直接问墨微。

**3. 层级汇报**

各平台Agent复盘后，把关键数据汇报给墨媒。墨媒23:45汇总所有数据，出全局日报。

进化闭环

完整的进化流程：

代码语言：
javascript

复制

```
1. 采集数据 → 存入 data/platform_daily/
2. 分析对比 → 今日 vs 历史
3. 得出结论 → 哪个策略有效
4. 更新规则 → 写入 playbook + changelog
5. 下次执行 → 读取新规则
```

举个真实例子：

墨视发现「放弃Cursor半年」爆了之后：

1. 采集数据：4.7万播、658转、300+粉
2. 分析原因：个人经历+时间反差+反常识观点
3. 得出结论：「放弃xx」系列可以持续做
4. 更新Playbook：在标题规则里加一条「放弃xx系列有效，数据支撑：03-01测试」
5. 下次创作：读取这条规则，考虑继续做「放弃xx」系列

**这就是自我进化——不是我教它，是它自己在学**。

这套系统的价值

**对我来说**：一个人运营13个平台，靠的就是这套自我进化的系统。

**对你来说**：如果你也想让AI成为长期伙伴而不是「用完即走」的工具，记忆和进化是必须的。

大多数人用AI，都是问一个问题、得到答案、结束。但AI真正的威力在于持续协作——让它帮你运营业务，而且**越用越聪明**。

没有记忆的AI，只是一个聪明的工具。 有记忆且能进化的AI，才是会成长的伙伴。

OpenClaw是开源的（GitHub 195,000+ Stars），如果你也想搭建这样的Agent系统：github.com/openclaw/openclaw

**今日互动**：你希望AI Agent能自己学会什么能力？是写作风格、数据分析、还是用户洞察？评论区聊聊。

📚 精选文章推荐

- [估值293亿美元的Cursor，为什么突然没人讨论了？](https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzk0ODM5NTEyNA%3D%3D%26mid%3D2247505357%26idx%3D1%26sn%3D9c66b589785fd89672b48dbbc84b9266%26scene%3D21%23wechat_redirect&objectId=2633970&objectType=1&contentType=undefined)
- [我的网站被黑了：一天灌入 227 万条垃圾数据，AI 写的代码差点让我社死](https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzk0ODM5NTEyNA%3D%3D%26mid%3D2247505324%26idx%3D1%26sn%3D21a80764339ed68218bcda49c7b7b33c%26scene%3D21%23wechat_redirect&objectId=2633970&objectType=1&contentType=undefined)
- [装了 OpenClaw 一个月，每天叫醒我的不是梦想](https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzk0ODM5NTEyNA%3D%3D%26mid%3D2247505309%26idx%3D1%26sn%3Dafd8727821254ec22f828a40b0757b0f%26scene%3D21%23wechat_redirect&objectId=2633970&objectType=1&contentType=undefined)
- [程序员就业率暴跌27.5%：我离开大厂5个月后，看懂了这件事](https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzk0ODM5NTEyNA%3D%3D%26mid%3D2247505292%26idx%3D1%26sn%3D9ff68cb859cd4646029922f0b38baf01%26scene%3D21%23wechat_redirect&objectId=2633970&objectType=1&contentType=undefined)
- [开Mercury美国银行账户全记录](https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzk0ODM5NTEyNA%3D%3D%26mid%3D2247505281%26idx%3D1%26sn%3D1103bfc65b4f29862946a1d5b61d7bdf%26scene%3D21%23wechat_redirect&objectId=2633970&objectType=1&contentType=undefined)
- [用OpenClaw搭了16个AI Agent，一个人运营13个自媒体平台](https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzk0ODM5NTEyNA%3D%3D%26mid%3D2247505266%26idx%3D1%26sn%3D034ebe482d8b1b2f05018a3cdfe1deea%26scene%3D21%23wechat_redirect&objectId=2633970&objectType=1&contentType=undefined)
- [Claude Sonnet 4.6 编程实测：免费用户也能用Opus级编程能力](https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzk0ODM5NTEyNA%3D%3D%26mid%3D2247505249%26idx%3D1%26sn%3D9de701daba80e3a6edc8586e9ede3181%26scene%3D21%23wechat_redirect&objectId=2633970&objectType=1&contentType=undefined)
- [创业半年，我用5个AI Agent替代了一个团队](https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzk0ODM5NTEyNA%3D%3D%26mid%3D2247505205%26idx%3D1%26sn%3D9a636b093e0240049e8438dff9ab71ef%26scene%3D21%23wechat_redirect&objectId=2633970&objectType=1&contentType=undefined)
- [90%程序员还在让 AI 补代码，1%已经在指挥 AI 军团](https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzk0ODM5NTEyNA%3D%3D%26mid%3D2247505186%26idx%3D1%26sn%3Dde212e4d51e846d9f54bb31c0379d3e1%26scene%3D21%23wechat_redirect&objectId=2633970&objectType=1&contentType=undefined)
- [用 OpenClaw 做视频：播放量从几十涨到 9000，成本一毛钱](https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzk0ODM5NTEyNA%3D%3D%26mid%3D2247505171%26idx%3D1%26sn%3Dbef515b0bed851c6ba64b6e7ef5d5b21%26scene%3D21%23wechat_redirect&objectId=2633970&objectType=1&contentType=undefined)

本文参与 [腾讯云自媒体同步曝光计划](https://cloud.tencent.com/developer/support-plan)，分享自微信公众号。

原始发表：2026-03-01，如有侵权请联系 [cloudcommunity@tencent.com](mailto:cloudcommunity@tencent.com) 删除

[数据](https://cloud.tencent.com/developer/tag/17440)

[系统](https://cloud.tencent.com/developer/tag/17506)

[agent](https://cloud.tencent.com/developer/tag/11736)

[公众号](https://cloud.tencent.com/developer/tag/17283)

[视频](https://cloud.tencent.com/developer/tag/17431)

本文分享自 

 微信公众号，
前往查看

如有侵权，请联系 [cloudcommunity@tencent.com](mailto:cloudcommunity@tencent.com) 删除。

本文参与 [腾讯云自媒体同步曝光计划](https://cloud.tencent.com/developer/support-plan)  ，欢迎热爱写作的你一起参与！

[数据](https://cloud.tencent.com/developer/tag/17440)

[系统](https://cloud.tencent.com/developer/tag/17506)

[agent](https://cloud.tencent.com/developer/tag/11736)

[公众号](https://cloud.tencent.com/developer/tag/17283)

[视频](https://cloud.tencent.com/developer/tag/17431)

评论

登录
后参与评论

0 条评论

热度

最新

登录 
后参与评论

推荐阅读

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
