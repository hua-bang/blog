---
title: 基于 GPT 实现 Agent  🤖️
customTag: tech>AIGC
editLink: true
---

# 基于 GPT 实现 Agent 🤖️

## 一、**引言**

> 前置阅读：
>
> - Agent: <https://js.langchain.com/docs/modules/agents/>
> - OpenAI API: <https://platform.openai.com/docs/api-reference/introduction>

![图片](https://raw.githubusercontent.com/hua-bang/assert-store/master/441e2e7cf89a4b90b15bc4eebb2d43bf~tplv-k3u1fbpfcp-watermark.image)

在这篇文章中，我们将探讨如何使用 GPT 来实现 LangChain 中的 Agent 概念。LangChain 是一个基于语言模型的编程框架，其中的 Agent、LLM 和 Tool 是其核心组件。我们将首先理解这些组件的概念和关系，然后设计一个状态机来描述 Agent 的工作流程，并使用 GPT 来实现 LLM 的功能。

## 二、**背景知识**

首先，我们先来理解下什么是 **Agent？一句话：AI 作为中间代理人，从而进行决策和执行。**

**举个场景**：比如，你有一个应用，里面包含了**计算服务**、**联网服务**、**天气服务**，但是用户输入的格式是不确定的，我们往往需要根据用户的输入，从而去判断用户的一个意图，从而去调用对应服务，返回最终的结果。**而 Agent 就可以直接帮你自动处理，你只需要告诉他，你的需求是什么，后续他会返回给你答案。**

LangChain 的 Agents 概念，就是针对于类似的场景，结合 LLM，可以自动帮你进行处理，需要走具体哪个服务，这个服务需要什么参数，从而给出对应的输出。

![Untitled 1.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/1ed1aec2cee5407da90cf31369f874f3~tplv-k3u1fbpfcp-watermark.image)

**一句话**：在 langChain 中 agent 做调用，llm 做决策，tools 做具体功能实现。

- **agent 做调用**： 只起调用作用，调用 llm 得到决策，调用 tools 得到具体功能结果。
- **llm 做决策**：llm 做决策，根据 agent 提供的信息（用户输入和 tools），得到调用具体的 tool，以及具体给 tool 的传递的参数，这个决策给到 agent。
- **tools 做具体功能实现**：tool 做具体功能实现，如 weather tool 接受提供 weather 服务，search tool 提供搜索服务，并把结果返回给 Agent。

好了，了解了 **Agent** 的概念，以及 GPT 的调用方法，我们就可以开始动手。

（Tip: 关于 GPT 的调用，可以参考 [基于 OpenAI 的 API 快速搭建 ChaBot 🤖️](https://juejin.cn/post/7258337246024450103)）

## 三、整体思路

实际上，我们本次就是实现上方这个图。主要实现三个模块吧。

- **Agent**：Agent 是主导者，负责协调整个流程
- **LLM**：语言处理工具，负责处理语言相关的任务。
- **Tools**: Tools 是执行具体任务的工具或服务，提供了执行任务所需的功能和服务。

![Untitled 2.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/55cabd8c2dfc45a79ed4832fda94bffe%7Etplv-k3u1fbpfcp-watermark.image)

然后我们对流程进行拆解，可以得到下方的表格，并且我们定义对应的状态机。

| 步骤名称     | 对应的状态机状态 | 设计模块    | 角色需要做的事情                                |
| ------------ | ---------------- | ----------- | ----------------------------------------------- |
| 接收用户指令 | INITIAL          | Agent       | 接收并存储用户的指令                            |
| 理解指令     | CALL_LLM         | LLM         | 解析用户的指令，生成行动计划                    |
| 调用工具     | CALL_TOOL        | Agent, Tool | 根据行动计划，选择并调用相应的工具              |
| 处理工具结果 | PROCESS_RESULT   | Agent, LLM  | 接收工具的结果，如果需要，再次调用 LLM 进行处理 |
| 输出结果     | OUTPUT_RESULT    | Agent       | 将最终的结果返回给用户                          |

对模块和流程，我们知道了，那么我们就具体来实现吧。

## 四、具体实现

这里我们主要从模块设计和流程设计两方面讲起。

### 4.1 模块设计

**Tool**

在 LangChain 中，工具（Tool）是具体执行任务的模块，它们为 Agent 提供了执行任务所需的功能和服务。每个工具都有一个特定的功能，例如查询天气、进行数学计算、搜索网页等。工具的设计目标是使其可以接受一个字符串参数并返回一个字符串结果，这样 Agent 就可以使用这个接口来调用各种工具。

为了实现这个目标，我们为工具设计了一个接口，该接口包含三个主要的属性：

- **`name`**：工具的名称，用于在调用工具时进行识别。
- **`description`**：工具的描述，用于解释工具的功能和使用方法。
- **`call`**：工具的主要方法，接受一个字符串参数并返回一个字符串结果。

```tsx
interface Tool {
  name: string; // The name of the tool, used to identify it when the tool is invoked.
  description: string; // A description of the tool, explaining what the tool does and how to use it.
  call: (input: string) => Promise<string>; // The main method of the tool, accepts a string parameter and returns a string result.
}
```

这样的设计使得我们可以轻松地添加新的工具。只需要实现这个接口，就可以创建一个新的工具。然后，我们可以将这个工具添加到 Agent 的工具列表中，Agent 就可以在执行任务时调用这个工具。

**LLM**

在 LangChain 中，LLM 是一个语言模型，它可以理解用户的指令并生成相应的行动计划。LLM 的主要任务是解析用户的指令，确定下一步的动作，并生成相应的参数。

为了实现这个目标，我们使用 OpenAI 的 API 来实现 LLM 的功能。在调用 LLM 时，我们生成一个包含用户指令和工具信息的提示词，然后将其发送给 OpenAI 的 API。API 返回的结果是一个 JSON 字符串，包含下一步的动作和参数。

我们希望通过调用 llm 的 暴露的 api，然后得到一个动作和参数

```tsx
import { Configuration, ConfigurationParameters, OpenAIApi } from "openai";
import { Tool } from "./tool";

export class LLM {
  openai: OpenAIApi;

  async understand(instruction: string, result: string | null, tools: Tool[]) {
    let prompt = generatePrompt(instruction, tools);
    const response = this.openai.createChatCompletion(prompt);
    const { action, params } = JSON.parse(
      response.data.choices[0].message.content
    );
    return { action, params };
  }
}
```

所以上方分三步：prompt 加工、GPT 调用、响应提取。

- **prompt 加工**：这里主要是为了告诉 GPT 指令、目前工具集以及响应返回的格式。

  ```tsx
  export class LLM {
    openai: OpenAIApi;

    async understand(
      instruction: string,
      result: string | null,
      tools: Tool[]
    ) {
      // 生成提示词
      let prompt = "";
      if (result) {
        // 如果有结果，让 LLM 加工结果
        prompt = `You are a helpful assistant. The user says: "${instruction}". The result from the tool is: "${result}". Based on the user's instruction and the tool's result, decide the next action. Your can processing result in params, but must respond with {"action": "output_result", "params": {"result": "the final result"}}.`;
      } else {
        // 如果没有结果，让 LLM 决定下一步动作
        prompt = `You are a helpful assistant. You have the following tools at your disposal: ${toolInfo}. The user says: "${instruction}". Based on the user's instruction and the tools available, decide the next action. If a tool should be used, respond with {"action": "call_tool", "params": {"toolName": "the name of the tool", "toolInput": "the input for the tool"}}. If the final result should be output, respond with {"action": "output_result", "params": {"result": "the final result"}}. Please note that the tool name should be one of the available tools and the tool input should be a valid input for that tool.`;
      }
    }
  }
  ```

- **GPT 调用**：这里调用一下 GPT 提供的 API 就可以。

  ```tsx
  export class LLM {
    openai: OpenAIApi;

    async understand(
      instruction: string,
      result: string | null,
      tools: Tool[]
    ) {
      // other code
      const response = await this.openai.createChatCompletion({
        model: "gpt-4-0613",
        messages: [
          {
            role: "system",
            content: prompt,
          },
          {
            role: "user",
            content: instruction,
          },
        ],
      });
      // other code
    }
  }
  ```

- **响应提取：** 得到的结果 JSON 字符串的格式如下, 我们提取对应的 `action` 和 `params` 就行了。

  ```tsx
  {
    "action": "call_tool",  // action 表示行为 call_tool 为调用 tool，output_result 为输出结果。
    "params": {
      "toolName": "weather_tool",
      "toolInput": "Beijing"
    }
  }
  ```

**Agent**

agent 做 llm 和 tool 的调用，并且将流程串起来，所以可以抽象为三个 API。

- **callLLM**：调用 LLM 模型，让 LLM 给决策
- **callTool**：调用 TOOL 工具，得到具体 TOOL 的输出。
- **processInstruction**: 执行命令，串联流程，中间调用 LLM 和 TOOL。

```tsx
export class Agent {
  state: AgentState;
  llm: LLM;
  tools: Tool[];

  constructor(llm: LLM, tools: Tool[]) {
    this.state = AgentState.INITIAL;
    this.llm = llm;
    this.tools = tools;
  }

  async processInstruction(instruction: string) {}

  async callLLM(instruction: string, result: string | null) {}

  async callTool({
    toolName,
    toolInput,
  }: {
    toolName: string;
    toolInput: string;
  }) {}
}
```

好了，上方我们设计了 `tool` , `Agent`, `llm` 的模块设计，下方我们具体来看流程设计。

### 4.2 流程设计

上面讲到，流程设计主要是 `Agent` 中的 `processInstruction` 承接，然后我们之前也梳理了对应的**步骤名称的状态机器和具体涉及模块。（下图），实际上，我们去进行实行就可以了。**

| 步骤名称     | 对应的状态机状态 | 设计模块    | 角色需要做的事情                                |
| ------------ | ---------------- | ----------- | ----------------------------------------------- |
| 接收用户指令 | INITIAL          | Agent       | 接收并存储用户的指令                            |
| 理解指令     | CALL_LLM         | LLM         | 解析用户的指令，生成行动计划                    |
| 调用工具     | CALL_TOOL        | Agent, Tool | 根据行动计划，选择并调用相应的工具              |
| 处理工具结果 | PROCESS_RESULT   | Agent, LLM  | 接收工具的结果，如果需要，再次调用 LLM 进行处理 |
| 输出结果     | OUTPUT_RESULT    | Agent       | 将最终的结果返回给用户                          |

```tsx
class Agent {
  async processInstruction(instruction: string) {
    let result = null;
    let actionInfo = null;

    while (
      this.state !== AgentState.OUTPUT_RESULT &&
      this.state !== AgentState.HANDLE_ERROR
    ) {
      try {
        switch (this.state) {
          case AgentState.INITIAL:
            this.state = AgentState.CALL_LLM;
            break;
          case AgentState.CALL_LLM:
          case AgentState.PROCESS_RESULT:
            actionInfo = await this.callLLM(instruction, result);
            result = this.updateStateBasedOnAction(actionInfo);
            break;
          case AgentState.CALL_TOOL:
            result = await this.callTool(actionInfo.params);
            this.state = AgentState.PROCESS_RESULT;
            break;
          default:
            throw new Error(`Invalid state, ${this.state}`);
        }
      } catch (error) {
        this.state = AgentState.HANDLE_ERROR;
        result = "An error occurred.";
      }
    }

    return result;
  }
}
```

## 5.1 效果

下方我们已经实现了大体的一个代理，这个时候，我们加入日志功能就能从而来看具体效果吧。

下面举两个例子。

- **天气的例子**： What is the weather in Shanghai?

![Untitled 3.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/bd6730e4f38e40929601f4d7d555ccc1%7Etplv-k3u1fbpfcp-watermark.image)

- **计算例子**：What is the result of 100 \* 100 - 30?

![Untitled 4.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/08337c8b64eb4f8fb9358f83aed68ce8%7Etplv-k3u1fbpfcp-watermark.image)

上方两个例子，符合我们 Agent 的一个流程，我们也能看出他的决策流程。

## **结论**

通过这个项目，我们成功地使用 `GPT` 实现了 `LangChain` 中的 `Agent` 概念。我们设计了一个状态机来描述 `Agent` 的工作流程。

总的来说，本文的代码不重要，我觉得 `Agent` 这个概念是更重要的。

`Agent` 这个概念是非常强大和灵活的，它可以被看作是一个能够理解和执行用户指令的智能实体。在 LangChain 中，Agent 通过调用 LLM（Language Logic Model）和各种工具来完成用户的指令，这种设计使得 Agent 能够处理各种复杂的任务，并且可以通过添加新的工具来扩展其功能。

**参考资料：**

- [ChatGPT](https://chat.openai.com/?model=text-davinci-002-render-sha)
- [platform-openai](https://platform.openai.com/)
- [Agents-LangChain](https://js.langchain.com/docs/modules/agents/)

**完整代码**：

- [Agent-Github](https://github.com/hua-bang/AIGC/blob/master/creative/src/agent-demo/demo.ts)

**如果本文对你有一点点帮助或启发，希望可以点个赞哈 / 下方评论区评论 / 互关注 Github、公众号 学习交流，支持是创作的动力～**。

- **公众号**：华铧同学
- **Github**: [github.com/hua-bang](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fhua-bang)
