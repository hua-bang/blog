---
title: 基于 OpenAI 的 API 快速搭建 ChaBot 🤖️
customTag: tech>AIGC
editLink: true
---

# 基于 OpenAI 的 API 快速搭建 ChaBot 🤖️

## 一、前言

相信目前大家目前对 `ChatGPT` 应该多多少少有所接触。

`ChatGPT` 是由 `OpenAI` 开发的一个人工智能模型，它使用了机器学习技术，尤其是自然语言处理（ `NLP`）技术，以理解和生成人类语言。这种模型基于大规模的文本数据进行训练，能够生成连贯且自然的文本，从而可以与人类进行自然语言对话。

![Untitled.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/5ec16dbdc5fb4bf8bf1070470f2cf3ac%7Etplv-k3u1fbpfcp-watermark.image)

想必大家也多少体验过 `ChatGPT` 。但本文的话，更多是以开发者的视角，通过 `OpenAI` 提供的 `API` ,从而去搭建自己的 `ChatBot` ，最终可以实现如下图的**微信公众号、飞书开放平台等第三方 IM 的接入**。

![Untitled 1.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/b5ce65b03a464e08aa30e65d7534d019~tplv-k3u1fbpfcp-watermark.image)

![Untitled 2.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/76ef809791e94fb689f1ae5c5698b7dd%7Etplv-k3u1fbpfcp-watermark.image)

在此之前，搭建 ChatBot 的所需要的东西

- **OpenAI** 的 **APIKey。**
- **对前后端接口有了解**。
- 对第三方 IM 平台接入开发有所了解/自己有开放的聊天服务。

那么下面，我们就进入正题吧，我们从大体思路开始。

## 二、大体思路

在介绍大体思路之前，我们先思考我们构建 ChatBot 的意图是啥 🤔️。

本质上：**就是通过社交 APP，通过 AI 的功能来加工回复用户的输入信息。**

确定好目标之后，我们如何来实现呢？我们可以看看如何改造我们社交软件回复的流程。

那首先，我们先来看看以往我们聊天软件是如何运行的。

### 以往的流程

以往常见的流程其实会比较简单。如下图，本质上，这里有三个角色

- **User:** 发起会话的用户，作为输入端。
- **IM APP:** 作为消息通信，信息分发的渠道。
- **User / Chat Server:** 回复会话的用户或者自己的聊天服务，作为输出端。

![Untitled 3.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/249a88fef32945188fa2001fa3dce682%7Etplv-k3u1fbpfcp-watermark.image)
从上方的图，我们可以看出来对用户的输入，往往是通过自己人工或者自己的聊天服务来进行回复用户的输入信息的，整个过程 **IM APP** 更多是最为一个渠道。

那么其实我们只需要对响应端即（User / Chat Server）进行改造就行了。

**ChatBot 的流程**

ChatBot 的流程其实很简单，将上方的响应端，换成 ChatBot Server，并且接入 OpenAI 的 API 就行了。

- **User：** 发起会话的用户，作为输入端。
- **IM APP:** 作为消息通信，信息分发的渠道。
- **ChatBot**：处理用户输入的信息，调用 OpenAI 接口，获得响应信息，并加工信息作为回复。

![Untitled 4.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1cd5d04849d84f9eb01262fe318e237a~tplv-k3u1fbpfcp-watermark.image?)

注意：这里还有个 process message 的节点，本质上是对输入输出进行处理。

- **输入处理**：主要是为了生成对应的 Prompt。
- **输出处理**：主要是对获得的 OpenAI 的响应，进行格式化处理。

## 三、具体实现流程

有了上方的思路，其实我们主要要实现的两个点就是 `调用 OpenAI 接口` + `第三方 IM 平台集成` 。

注：由于第三方的接口涉及的文档会比较多，且各个开放平台应该都有对应的文档，所以，这里不会细讲第三方 IM 平台集成。

### 3.1 调用 GPT 接口

> 参考文档：
>
> - <https://platform.openai.com/docs/libraries/node-js-library>
> - <https://platform.openai.com/docs/guides/gpt/chat-completions-api>

目前 `openAI` 也有自己的 npm 包，目前接入的成本其实相对比较低。

**安装依赖**

```bash
npm install openai
```

**参数配置**

Notes:

- **APIKey 问题**：登录 [api_key](https://platform.openai.com/account/api-keys)，免费额度使用完后，可能得自己绑卡了。
- **网络问题**：这里可能会存在网络链接不上的情况，可以自己去做一层代理转发，解决网络问题。可参考 [OpenAI 代理](https://blog.riba2534.cn/blog/2023/%E8%85%BE%E8%AE%AF%E4%BA%91%E5%87%BD%E6%95%B01%E5%88%86%E9%92%9F%E6%90%AD%E5%BB%BAopenai%E5%9B%BD%E5%86%85%E4%BB%A3%E7%90%86/)

```tsx
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  basePath: process.env.OPENAI_BASE_PATH || "https://api.openai.com/v1", // 如果你做了代理转发的话
});
const openai = new OpenAIApi(configuration);
```

**调用接口**

```tsx
const chat_completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{ role: "user", content: "Hello world" }],
});
```

**最终代码**

```tsx
import { Configuration, OpenAIApi } from "openai";

export class ChatGPT {
  private openai: OpenAIApi;

  // This constructor will be called when we create a new instance of the ChatGPT class
  constructor() {
    // Create a new instance of the OpenAI API
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY || "",
      basePath: process.env.OPENAI_BASE_PATH || "https://api.openai.com/v1",
    });

    const openai = new OpenAIApi(configuration);
    this.openai = openai;
  }

  // This function will be called from the controller
  async chat(prompt: string): Promise<string> {
    const llmResponse = await this.openai.createChatCompletion({
      model: process.env.OPENAI_CHATBOT_MODEL_ID || "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
    });
    return llmResponse.data.choices[0].message.content;
  }
}
```

### 3.2 平台集成

我们已经有了 API 的服务了，那么这个时候我们只需要将接口接入对应的平台即可。

> 参考文档：
>
> - 微信公众号：<https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html>
> - 飞书开放平台：<https://open.feishu.cn/document/home/interactive-session-based-robot/subscribe-to-user-group-entry-events-and-send>

![Untitled 2.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/2679b00d5e194e5b82b24ef82771d7fe%7Etplv-k3u1fbpfcp-watermark.image)

本质上是使用了 OpenAI [开放的 OpenAPI 接口](https://platform.openai.com/docs/api-reference) 以及 各个开放平台的 API 进行集成，一个简单的 chatBot 实际上就完成了。

- **OpenAI**：提供文字回答服务。例如我们使用 [chatApi](https://platform.openai.com/docs/api-reference/chat)，就可以能简单地做一个文字的聊天服务。
- **飞书、微信平台集成**：各 APP 端多少都会开放对应的接口给到开发者，用于接收用户的信息，并对用户的信息进行回复。

当然，简单的 ChatBot 你可以直接把用户的提示词和模型的响应直接进行返回，不做任何加工处理。

## 四、补充拓展

上方简单写了如何搭建一个 `ChatBot`，但你可以借助 `OpenAI` 提供的能力去，尝试新的玩法，比如**特定的提示词加工、多模态的交互。同时，你也可以结合 LangChain 做一些自己的应用。**

- **提示词加工**：你可以指定特殊的提示词，从而去做一些扩展应用。比如 [GPT + GitHub 实现自动 Code Review - 掘金](https://juejin.cn/post/7240333779221954616)

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/8cd0653539c049b0963828aa96f81647%7Etplv-k3u1fbpfcp-watermark.image)

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/8970a6b9188646718f5820840a5aa943%7Etplv-k3u1fbpfcp-watermark.image)

- **多模态的交互**：目前 OPENAI 开放的 API 接口其实支持不同模态的交互，比如图片，语音。

  - **图片**：文生图，图生图。
  - **语音**：语音转语音（另一国语言），语音转文字。

- **LangChain**: LangChain 是一个用于开发大型语言模型应用的软件框架。它的目标是**简化使用大型语言模型（LLMs）创建应用的过程**。

## **五、总结**

本文简单介绍了如何搭建根据 OpenAI 提供的 API 搭建 ChatBOT，但更多是希望我们可以从开发者的视角去使用大语言模型，说不定会有新的想法出现呢。💡 有兴趣和想法的同学，可以在评论区留言一起讨论哈。

**参考资料：**

- [ChatGPT](https://chat.openai.com/?model=text-davinci-002-render-sha)
- [platform-openai](https://platform.openai.com/)
- [微信公众开发平台](https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html)
- [飞书开放平台](https://open.feishu.cn/document/home/interactive-session-based-robot/subscribe-to-user-group-entry-events-and-send)

**如果本文对你有一点点帮助或启发，希望可以点个赞哈 / 下方评论区评论 / 互关注 Github、公众号 学习交流，支持是创作的动力～**。

- **公众号**：华铧同学
- **Github**: [github.com/hua-bang](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fhua-bang)
