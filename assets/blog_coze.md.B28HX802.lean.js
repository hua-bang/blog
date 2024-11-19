import{_ as a,c as o,a1 as e,o as r}from"./chunks/framework.Bkh0U0ho.js";const u=JSON.parse('{"title":"Coze 机器人构建平台","description":"","frontmatter":{"title":"Coze 机器人构建平台","customTag":"blog>AIGC","editLink":true,"date":"2024.01.03"},"headers":[],"relativePath":"blog/coze.md","filePath":"blog/coze.md","lastUpdated":1731976660000}'),s={name:"blog/coze.md"};function l(n,t,i,h,p,c){return r(),o("div",null,t[0]||(t[0]=[e('<h1 id="coze-机器人构建平台" tabindex="-1">Coze 机器人构建平台 <a class="header-anchor" href="#coze-机器人构建平台" aria-label="Permalink to &quot;Coze 机器人构建平台&quot;">​</a></h1><p>最近，字节推出了 Coze 平台，定位为：下一代人工智能聊天机器人构建平台。快速创建无需编码的机器人并将其发布在各种平台上。</p><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20231219232506.png" alt="image.png"></p><p>个人体验了一波，总体体验不错。</p><p>首先先介绍其主要功能。</p><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><h3 id="插件-拓展-bot-的能力" tabindex="-1">插件：*<strong>*拓展 Bot 的能力**</strong> <a class="header-anchor" href="#插件-拓展-bot-的能力" aria-label="Permalink to &quot;插件：\\***\\*拓展 Bot 的能力\\*\\***&quot;">​</a></h3><p>Coze 支持插件调用，记让 LLM 调用外部的能力。同时内部集成了部分常用的插件服务，提供了超过几十款插件，包括谷歌搜索、画图、Github，拓展了 AI Bot 的能力。同时，用户还可以将自己的私有 API 集成为插件。</p><p>你可以理解为 GPTS 中的 action，但目前 Coze 的优势可能在于简单易用，并且内置更多插件。</p><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20231219232551.png" alt="image.png"></p><h3 id="知识库-bot-与数据进行交互" tabindex="-1">知识库： *<strong>*Bot 与数据进行交互**</strong> <a class="header-anchor" href="#知识库-bot-与数据进行交互" aria-label="Permalink to &quot;知识库： \\***\\*Bot 与数据进行交互\\*\\***&quot;">​</a></h3><p>使 AI 能与用户的数据进行交互，用户可以在知识库中存储和管理数据，无论是大量的 PDF 文字还是网站的实时信息。</p><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20231219232536.png" alt="image.png"></p><h3 id="长期记忆-让-bot-拥有持久化的记忆能力" tabindex="-1">*<strong>*长期记忆：让 Bot 拥有持久化的记忆能力**</strong> <a class="header-anchor" href="#长期记忆-让-bot-拥有持久化的记忆能力" aria-label="Permalink to &quot;\\***\\*长期记忆：让 Bot 拥有持久化的记忆能力\\*\\***&quot;">​</a></h3><p>Coze 提供了数据库记忆功能，使 AI Bot 可以持久地记住对话中的关键参数或内容，如用户的饮食偏好或语言偏好。</p><h3 id="定时任务-bot-主动推送" tabindex="-1"><strong>定时任务： Bot 主动推送</strong> <a class="header-anchor" href="#定时任务-bot-主动推送" aria-label="Permalink to &quot;**定时任务： Bot 主动推送**&quot;">​</a></h3><p>用户可以通过自然语言创建复杂的定时任务，让 Bot 按时发送消息，如每天推荐个性化新闻或每周规划旅行。</p><h3 id="工作流-ai-workflow" tabindex="-1"><strong>工作流: AI + WorkFlow</strong> <a class="header-anchor" href="#工作流-ai-workflow" aria-label="Permalink to &quot;**工作流: AI + WorkFlow**&quot;">​</a></h3><p>用户可以将创意转化为 Bot 的技能，无论是否懂得编程，都可以通过简单操作设计工作流，</p><ul><li>如搜集电影评论或撰写行业研究报告。</li><li>如搜索热点内容以及写一篇制作视频。 <img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20231219232655.png" alt="image.png"></li></ul><h2 id="亮点" tabindex="-1">亮点 <a class="header-anchor" href="#亮点" aria-label="Permalink to &quot;亮点&quot;">​</a></h2><p>整体功能如上，但在其中最吸引我的是：插件和工作流</p><ul><li><strong>插件</strong>：plugin 给了 LLM 调用外部系统的能力。</li></ul><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20231219232620.png" alt="image.png"></p><ul><li><strong>工作流</strong>：workflow 的概念也将 AI 能力集成。让 AI 可以按照工作流执行，也让工作流中的节点有 AI 能力。</li></ul><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20231219232632.png" alt="image.png"></p><h2 id="思考" tabindex="-1">思考 <a class="header-anchor" href="#思考" aria-label="Permalink to &quot;思考&quot;">​</a></h2><p>其实，总体下来，我还是喜欢这里的 AI + WorkFlow、插件 的点，也有一些个人思考</p><ol><li>AI + WorkFlow 的开放能力思考：WorkFlow 不应该依赖于平台，故后续会不会开放能力，可以支持 API 方式，来调用 WorkFlow 的服务，从而嵌入自己的工作流中。</li><li>AI + WorkFlow 的成本: 整个平台理论上并非向豆包一样 TOC，这里面向的可能是 C 端的 Dev 这类人员多一点。但 WorkFlow 本身会有一些学习成本，后续，是否可以将 WorkFlow 封装成应用，降低理解成本。</li><li>生态：平台提供插件，工作流的过程，如果能有插件商店，工作流商店，以及应用商店，这个生态会不会更活跃呢。</li></ol>',29)]))}const b=a(s,[["render",l]]);export{u as __pageData,b as default};
