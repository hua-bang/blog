---
title: 有概率的非共识
customTag: blog>AIGC
date: 2025-05-04
editLink: true
---

# 有概率的非共识

“有概率的非共识”

这是在一期博客中提到的一个观点。

个人理解是，

**“选择别人暂时不看好的方向，**

**但不是盲目赌运气，**

**而是在调查论证后确认自己仍有获胜把握的那条偏门路。”**

举个例子

想像大家都去同一条“淘金河”里挖沙子，

你却在旁边一条看 似不起眼的小溪发现还有金块——多数人不信，

但你已经探过水、算过机会，知道“真有可能捞到金子”。

这一两年，关于 AI 方向的探索有挺多，

而 AI 浏览器也是其中一个方向。

并且在今年也有一些进展

- Arc 背后公司开始做新一代 AI 原生浏览器 DIA
- Authing 创始人开始做 Agentic Browser，叫做 Fellou
	![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250504182646.png)

- Perplexity AI 的 **Comet** 是一款定位 “Agentic Search” 的全新浏览器，预计 2025 年 5 月中旬开放公测。

最近刚好有 fellou 的邀请码，也简单地聊一聊产品和使用感受。

## 定位

**Fellou 自称“全球首款 Agentic Browser”**：不仅提供 AI 辅助搜索，而是把“浏览器+AI Agent”融合成一个可执行复杂工作流的“数字伙伴”。官方口号是“Beyond browsing, into action.”

从字面上理解， 将 Fellou 定位成从浏览延伸到“Action”的智能伙伴，目标是让浏览器直接执行任务而非仅呈现网页。

所以，目前的交互形式还是已对话框为主，具体而言如下图。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250504182658.png)

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250504182954.png)

## 功能

在功能上，主要要下方几个核心功能。

|功能|说明|
|---|---|
|**Deep Search**|并行抓取公开站点与需登录平台（LinkedIn、X 等），一键生成可视化报告|
|**Deep Action**|自动规划→调用工具→跨标签执行，如购物、发邮件、会议排程|
|**智能时间线**|任务轨迹可跳转回任意节点恢复上下文|
|**影子工作区**|代理在后台执行，用户可继续前台操作|
|**拖拽交互**|拖网页元素/图片触发解析、上传或新指令|
|**跨端同步**|Groups / Spaces / Split View 支持多窗口分身与实时数据同步|

其中，重点讲讲 Deep Search 和 Deep Action 模块吧

### Deep Search

Deep Search 是指浏览器会去搜索某个话题的信息资料，最终最一个报告的总结。适用于做调研报告等具体场景。

这里举个例子

```jsx
提示词：帮我搜索并总结 Fellou 浏览器的定位，设计理念，功能，优势，劣势等信息，并总结成报告
```

目前会做两步操作，规划和执行。

**任务规划**：将需求转化成指令步骤拆建，并给到你进行确认。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250504182719.png)


**任务执行**：最终会搜集网页，对信息作整合，用网页的形式进行展示。具体效果如下。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250504183014.png)


可以看到，下方的网页中涵盖了概述、市场定位、设计理念的多方面的信息。整体看还是比较全面的。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250504182738.png)


而具体看内容，下方给个示意。

这一页的内容描述还好，但其他部分的内容还是存在一些幻觉。

对这报告有兴趣的可以直接访问 [https://chat.fellou.ai/report/c1e9ca42-67b6-4816-ace6-13bfc8100dd5](https://chat.fellou.ai/report/c1e9ca42-67b6-4816-ace6-13bfc8100dd5)

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250504182756.png)


### Deep Action

Deep Action 相当于是浏览器能够帮你去收集信息后，自动执行任务，从而浏览器不再仅仅是一个信息展示区，他还能帮你直接具体的任务，如发文章，写内容等。

这里也使用了一个例子体验了下

```jsx
提示词：“帮我整理 Fellou 的相关信息，并梳理成小红书文案，发一篇小红书”
```

下方我们从“任务规划”，“任务执行”，“任务效果”来看

**任务规划**：这时候 fellou 会做好任务规划，会将每个步骤进行拆解，并给到最后的 workflow。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250504182807.png)

**任务执行**：在任务执行的过程中， fellou 会去收集信息，从而做后续的行为处理。如这里现实搜索出 fellou 的相关信息，访问 fellou 官网，小红书文案收集。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250504182818.png)

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250504182846.png)

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250504182903.png)

**任务效果：**fellou 把大多任务都完成了，帮我搜集信息，编写文案，打开小红书网页，但在上传图文的时候，可能脱离了浏览器的范围了，所以停止了。不过大体的工作还是完成了。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250504182917.png)


总之，在个人看来， Deep Action 是让浏览器能够帮我们解析指令、智能拆解任务，并跨多个网页系统操作。

## 新奇 & 吐槽

目前还是主要体验了 Fellou 浏览器，使用过程中感觉有新奇的点。

- **规划能力强**：目前输入了一句话，确实能够快速拆解出具体可执行的步骤信息，作为工作流。
- **操作浏览器：**Fellou 依赖的一个能力还是 browser use 技术，但 Fellou 自研了这套技术，整体体验下来，可能比其他产品好点点。
- **交互新颖**： AI 浏览器本来就是个新鲜的事，况且若将浏览器从浏览内容扩展成支持行为的浏览器，人机交互是需要改动的，而 Fellou 貌似也算在探索这个事。

当然，也有一些吐槽的点

- **效果不稳定**：目前 fellou 仍处早期 Beta / 功能不完整, 想 deep action 这个东西实际上效果不太问题。
- **内存占用**：在使用过程中，在任务管理器中能看到会占用不小的内存。
- **部分交互细节**：虽然提供了影子空间的能力，但还是存在开新tab默认跳出指令弹框，影响操作

但还比较早期，吐槽点的存在可能更是产品不断更新迭代进步的燃料。

## 最后 🤔

Fellou 团队对浏览器进行了下方的划分，下面来自是在网上看到 Fellou 对浏览器的看法，做下引用

以往，浏览器有三种：

- **传统普通浏览器**：侧重信息浏览，目前浏览器的最常见形态；
- **对话式浏览器** （Conversational Browsers）：侧重信息交互与内容生成，侧重于通过 AI 辅助实现信息交互与内容生成。例如 Microsoft Edge（Copilot）、Opera One + Aria、360 AI 浏览器、豆包和部分 Arc 版本，均以自然语言交互、问答和内容摘要为主，但整体操作仍由用户主导；
- **搜索优化型 AI 浏览器**（Search-Optimized AI Browsers）：侧重深度信息检索和摘要，通过 AI 技术对网页内容进行整合和生成精准答案。例如 Perplexity Comet 和新夸克均以深度检索和内容整合为主要卖点，提供精准信息查询服务；

而 Fellou 尝试开创第四种**行动型浏览器（Agentic Browser ）**：侧重端到端自主行动，一种集成了具备思考和行动能力的智能代理的浏览器，其不仅展示信息，更能根据用户高层目标自主拆解任务、跨界操作并完成端到端任务交付。

目前来看，AI 浏览器还比较早期，具体而言有下方几点

- **基础设施不够完善**：多模态模型目前的效果和成本都还不够成熟，效果的稳定性和成本是个问题。
- **生态需发展**：AI 浏览器也需要生态，也许未来有一种规范协议，能让网页能够更好被检索，读取，操作，从而构建一个浏览器和网页交互更友好的协议。
- **人机交互突破和理念**：目前体验的 AI browser 的人交互，貌似都没有特别惊讶的感觉，也不确定未来是不是什么样的交互会成为主流，可能都还在探索阶段吧。同时，如何做好理论的宣传和普及是需要做用户教育。

所以当我和朋友聊到 AI 浏览器的时候，

听到大多数是

“产品不够成熟”，

“目前使用场景不多”，

“稳定性不好保障”

等等。

实际上，

我也没完全看懂做 AI 浏览器的公司的理念，

fellou 的设计理念可能我的看法也比较片面。

但也许这就是

“探索未来新的人机交互”，

“探索 AI 直接执行动作的尝试”

“探索新一代浏览器的交互方式”。

也许这过程有人会赞同，有人会质疑，

并且可能在早期，质疑的声音是比较多的，

但也许这就是一种“有概率的非共识”。

目前还是早期，

所以不好过早下绝对的判断，

期待着 AI 浏览器的发展迭代吧，

也期待着新的人机交互的出现。

**参考文章/资料**

- [Fellou：AI 的「组团打工」时代，由中国团队揭幕](https://mp.weixin.qq.com/s/IuOgfZWT8jdXWnjm6yEb-Q)
- [59. 和杨植麟聊大模型创业这一年：人类理想的增量、有概率的非共识和Sora](https://www.xiaoyuzhoufm.com/episode/65e16b5b6144a933b1d968b5)
- [34.与Fellou创始人谢扬的3小时访谈：孤独、95后、牌桌与生产力的完美创业](https://www.xiaoyuzhoufm.com/episode/680b04ea7a449ae85895ba00)
- [E11 ｜ 95后CEO：我相信员工是自驱的，关键是让他们看到未来](https://podwise.ai/dashboard/episodes/198576)