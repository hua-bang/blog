---
title: Coze 机器人构建平台
customTag: blog>AIGC
editLink: true
---

# Coze 机器人构建平台

最近，字节推出了 Coze 平台，定位为：下一代人工智能聊天机器人构建平台。快速创建无需编码的机器人并将其发布在各种平台上。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20231219232506.png)


个人体验了一波，总体体验不错。

首先先介绍其主要功能。

## 功能

### 插件：****拓展 Bot 的能力****

Coze 支持插件调用，记让 LLM 调用外部的能力。同时内部集成了部分常用的插件服务，提供了超过几十款插件，包括谷歌搜索、画图、Github，拓展了AI Bot的能力。同时，用户还可以将自己的私有API集成为插件。

你可以理解为 GPTS 中的 action，但目前 Coze 的优势可能在于简单易用，并且内置更多插件。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20231219232551.png)


### 知识库： ****Bot 与数据进行交互****

使AI能与用户的数据进行交互，用户可以在知识库中存储和管理数据，无论是大量的PDF文字还是网站的实时信息。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20231219232536.png)

### ****长期记忆：让 Bot 拥有持久化的记忆能力****

Coze提供了数据库记忆功能，使AI Bot可以持久地记住对话中的关键参数或内容，如用户的饮食偏好或语言偏好。

### **定时任务： Bot 主动推送**

用户可以通过自然语言创建复杂的定时任务，让Bot按时发送消息，如每天推荐个性化新闻或每周规划旅行。

### **工作流: AI + WorkFlow**

用户可以将创意转化为Bot的技能，无论是否懂得编程，都可以通过简单操作设计工作流，

- 如搜集电影评论或撰写行业研究报告。
- 如搜索热点内容以及写一篇制作视频。
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20231219232655.png)
## 亮点

整体功能如上，但在其中最吸引我的是：插件和工作流

- **插件**：plugin 给了 LLM 调用外部系统的能力。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20231219232620.png)

- **工作流**：workflow 的概念也将 AI 能力集成。让 AI 可以按照工作流执行，也让工作流中的节点有 AI 能力。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20231219232632.png)

## 思考

其实，总体下来，我还是喜欢这里的 AI + WorkFlow、插件 的点，也有一些个人思考

1. AI + WorkFlow 的开放能力思考：WorkFlow 不应该依赖于平台，故后续会不会开放能力，可以支持 API 方式，来调用 WorkFlow 的服务，从而嵌入自己的工作流中。
2. AI + WorkFlow 的成本: 整个平台理论上并非向豆包一样 TOC，这里面向的可能是 C 端的 Dev 这类人员多一点。但 WorkFlow 本身会有一些学习成本，后续，是否可以将 WorkFlow 封装成应用，降低理解成本。
3. 生态：平台提供插件，工作流的过程，如果能有插件商店，工作流商店，以及应用商店，这个生态会不会更活跃呢。