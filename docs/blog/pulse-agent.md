---
title: Pulse Agent
customTag: blog>AIGC
date: 2026-03-06
editLink: true
---
# Pulse Agent

个人在春节期间从 0 到 1 开发了 [Pulse Agent](https://github.com/hua-bang/pulse-agent)，可以理解做了简易版的 Coding Agent(Claude Code/Codex)、OpenClaw，希望通过一篇文章记录整体的过程。

本文更多是个人想法，不一定对，欢迎交流～

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2UyNDVlYjBjOTdjNTdmN2FiOTQ2YTk1ZDMyMDI5ZmRfUGhKVU1DUGF2dUdCSW93SzBqWVIyQjZNNTFQakx6cElfVG9rZW46SGZXbmJKa0tzbzRMZEN4b3NjWmN1Y2J2bnBjXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjcyMDIxNmIyMGZiYzE4ODhhYjU0ZGMwZmRmYmVhNTFfdlpOU3ZGRHZHSGRla21idzlhazNwWXZ2WWNwRjRqRjFfVG9rZW46SW1rcmJrbEhYb09ZT1F4T0FUN2NUQ3VubmRmXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NjEwMzI5MzVmOGIyNzk5NDFiNmZhY2ExNTRiYzlhOTlfdGViQXJYY2xMMnhnMEpXOWE2cVFtVE9tYUltcmhWUmdfVG9rZW46UnY5emJrQjJ5b20wQlF4UjZuNGNhWG03bklkXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

> 如果你觉得本文还不错的话，能给文章和仓库点小小的点赞、转发、交流就更好了～
> 
> - 代码仓库：https://github.com/hua-bang/pulse-agent 求求 star 🥺
>     

  

## 一、前言

Coding Agent 是我感觉很神奇的产品，

他带来了太多的想象力。

此前我一直很想了解它里面的机制，

如上下文是如何组织的，

部分机制（如 MCP, Skill 等）是如何实现的。

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=OGE0NjBlODU0Yzg1Zjc5N2Y0ZjU0MWE2YjIwYWVlNjRfNlNueEFSZXZ3MTFxdnNGWjFoaE5tN3hMc29mdG9QSHNfVG9rZW46QktwbGJwR0RVb1ZhQW14Rkh0UWNLZGNsbjJkXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

于是趁着春节假期，

我就开始了解背后的机制，

并自己编写 Coding Agent Demo。

但随着项目进行，

我发现他的效果不应该局限在 Demo,

也不应该只局限于 Coding 这个范围。

  

于是有了“**Coder** **-> Pulse Coder -> Pulse Agent”**的改名，

目前 Pulse Agent 已经能做自我迭代了，

且应该给自己提供了 近 100 个 PR。

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWExMGIwNGZkOWIxOTNmY2U0MTNhZWJkNWMwODBhMzJfRHdnaDYwblJ4RTVmZ3YzNGltSTdudW1ESUdTbGtORVFfVG9rZW46TmVGaWJxaEpObzd4RTd4dk05dGM4ajcybndjXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=YTc5MjEzN2I1ZmQyOTc3OWY4YzkzMGM0ZWJlYzllNDRfT2RQZmkzRUUzd2Q2MEZDYnAzd1ExV25IaWtjWlh2ZjlfVG9rZW46WjdBemJTa005b3U4ZnR4aUhXMmNnRE9WbmhoXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

在 Pulse Agent 从 0 到 1 的开发过程，

看着一个 Demo 项目，

看着他不断快速地扩展迭代，

个人有在技术、产品、认知层面，

都有些不小甚至深刻的体会吧。

  

我希望把整个过程记录下来，

并且也把个人的体会、想法记录下。

  

文章会按如下顺序讲，Pulse Agent 是什么、怎么做出来的、背后怎么想的、做完之后我学到了什么。

- **Pulse Agent 介绍**：讲述 Pulse Agent 的定位、所具备的能力、能完成任务效果。
    
- **Pulse Agent 开发历程**：记录从零到一开发 Pulse Agent 的历程（从 Demo -> 基础工程能力 -> 可扩展性）。
    
- **Pulse Agent 技术实现**：讲 Pulse Agent 技术哲学，并且细化部分重要机制是如何实现的。
    
- **Pulse Agent 开发感想**：总结我在开发 Pulse Agent 过程中的体会、感想。
    

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ODliMzc1NGNiZGJiNmU0MDE1YWIzZjFkNGY3MDk3OTdfWlZMQmtFU1NheExYcVc4czJJSWoxckJBN2JRNjJ4Qk1fVG9rZW46SFRsRGJUU3dPb1RpbnJ4NlpBTmNkMWtCbmFjXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

## 二、Pulse Agent 介绍

> 简单介绍下 Pulse Agent, 简要说明定位、能力、完成任务效果。

### 2.1 定位

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MTZiNjRiY2JhYjI4YTc5MTg2ZGY2MzlhNzUxYzZjOWVfZmNPZUtlZ3VITk9Pdm5KZUlTUmg0ajhPaFFQYnVkYUtfVG9rZW46TEhqeGJLTGM3b2tZVk14OHJrQmNxTHZ0bmhnXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

[Pulse Agent](https://github.com/hua-bang/pulse-agent) 是一个**插件优先的 Agent 套件仓库**，涵盖 Agent Loop 引擎、插件系统、内置 Agent 能力（MCP / Skill / SubAgent / Task / Memory）、沙箱执行、交互式 CLI 与 IM 集成（飞书 / Discord），**面向可扩展的 Agent 工程化落地**。

  

上方的描述有点繁杂了，可以简单地理解为：

一个 AI 工具集，提供了下方三种方式

- **Coding Agent**：一个简版的 Coding Cli，定位类似 Claude Code、Codex 等，但部分功能缺失，且暂无 TUI。
    
    ![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZmNkYjg2YjgxZWI1YTdkMGNkYjFlNzM0MGI4NjE1NmFfU3Q4TXRFQm5nTU1hYmVoR09EZ3FMajNNMkc1ZVlCN3pfVG9rZW46UFVma2J6dEY0b2dFZ2d4aVY3NmNCenFIbmVnXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)
    
- **飞书****/Discord Bot**：一个简版类似 OpenClaw 的应用，支持通过飞书/Discord 渠道让 Agent 操作电脑环境。
    
    ![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MmU5ZmQxMWRhYzY0YmI3NTRkNjM1YzJiM2QxZGQ3NjVfcE9OYkszazhjSENLTVFHOVN1c0ZFeURnUjZTT2VuT25fVG9rZW46VFdKc2J3T203bzVJMzh4ZFoxbGNIcWdqbndkXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NGQxYTYyMzU1OWQzM2VkMzU2Njg1M2JiNzY0Yzk5NzFfU290NGZpSEIxRTNiWmhXaVBlWnVpUkIzcGxSZFFjM2pfVG9rZW46UE4wcGJ6MTZIb3hUS0p4eGpKVWNWbXVnbmtiXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)
    
- **Agent 套件：**一个简版 Agent Loop 的 SDK，内置基础工具和机制，且提供部分相关插件和工具。
    
    ![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=YjU1N2YwODJkYzBlNzIzNGY0MDQ5NDM2N2ExNTA0MWNfWjdwcFVGYUE5dEV6VzNxVWRGV3R0dFdyN2Z5dk1TRlRfVG9rZW46QUN1R2JEc0ZFbzNudlh4bFZZVmNHVG5pbjliXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NzMyNTY0MDM5YjM3MGEyZDliMjYyYTMyMGI2NjYyMzBfendwbUFOMmpyOFhhdUlVbTFMRENKcEVIaGt1V1dLbzZfVG9rZW46Q2FYYWJHTHMxb0o4QUF4Y0N3OWNYVWdtbnBoXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)
    

  

### 2.2 目前能力

目前 Pulse Agent 以及具备了几层能力

- **Agent Loop + 插件机制**：依赖 AI SDK 的 [streamText](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text) 做封装，实现类 [pi-mono](https://github.com/badlogic/pi-mono) 的 Agent Loop 能力，并提供插件机制，作为做底层的基础能力，支持运行时、动态灵活调整 prompt + tool。
    
- **Agent 机制层**：通过上述的插件机制，提供 Agent 配套的工具能力，如 MCP、Mempry、Sub Agent、Skill 机制能力，做到可插拔拆卸。
    
- **Agent 入口层**：通过提供 Cli、Discord、Lark 等渠道，作为 Agent 的入口，同时对不同的宿主做了功能上差异的适配，如 Discord 支持 Channel/Thread 对话，Command 命令注册等。
    

  

### 2.3 完成任务效果

目前 Pulse Agent 已经能够帮我完成开发迭代他自己的代码工作，具体效果如

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NDNlZDU1NTJjMTc4YjNmZDJiMGZkZGY5Nzg2M2YyYzJfMWJZNTcwUEY5ZXFRcmFQUkJCSHlwWnlIQjB0N05zU2JfVG9rZW46WEJWdGJ5amU0b0xmWjR4bVdpa2NEZ0MybjFSXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=YjU4NzRhNGEyYzQ0YWYzMGRjNDIzM2Y1MGE1ZDU1NWNfVXNtbzlWeG0yMnMyckVWM2xraEhCbEt4SElsSHZJNmVfVG9rZW46VnVYa2JtWDQ5bzd4WGt4MWN3VWM1SWt5bmViXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTdkZGQ3ZDQwZDgxMTQ0MWNhNGI1MGI4YTkzMTYxMDFfdnJMUFdodzQwakNqQURiS1lwZThVNmtkaTE4OGNxUnpfVG9rZW46U3JZSGJpRDFZb3g5M094eXR3aWN4UTZOblBjXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

## 三、Pulse Agent 开发历程

> 微小地启动，一步步反馈迭代。

其实一开始并没有打算写个项目，

更多是想了解 Coding Agent 的机制。

  

于是做了步微小的启动，

在过程中，

不断有新的问题，

从而一步步反馈迭代。

这个过程很有趣，

所以我希望在这里也展开下。

  

### 3.1 初识原理：好奇心驱动

一切都来源于去年，

Coding Agent 效果确实很好.

  

至少在去年下半年的时间，

有 80，90% 的代码可能是 AI 写的，

一直都想了解其背后的工程机制，

具体来说是其 Agent Loop。

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MWQxMmE0NWNiYmFlMTM3MGU0OWRhMGQxMzM2MzliYWZfaVkyRWdpOE1ZS2YzT2hjWUM0ejVpTlJuSDA0RDRnenNfVG9rZW46WDdpVGJJYkx6b1RxYTh4eUl0MWNwa0VGbmdmXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

而节前刚好抽出时间，

研究了三个仓库，看看内部如何实现的

- [GitHub - anomalyco/opencode: The open source coding agent.](https://github.com/anomalyco/opencode)
    
- [GitHub - openai/codex: Lightweight coding agent that runs in your terminal](https://github.com/openai/codex)
    
- [GitHub - badlogic/pi-mono: AI agent toolkit: coding agent CLI, unified LLM API, TUI & web UI librari](https://github.com/badlogic/pi-mono)
    

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWJlYTM1NGQ5YWEyMjMwNzEwYjdhMDVkMzQzMTkyNGVfVTJUT2RudVM2ZWE3TVhHUGNSZktRVnRwaE91Rm44N3dfVG9rZW46S3dwRGJ6dWtxb294TWV4V0syaGM3S21sbkJiXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=Mzc1N2Q5MWFmMGMzMDFlZmZiZTkxYTRiYjMzMjljNTlfekJDTHNIZGNDbXpxenlCMDVDRFVTeTVSRTlVcmRGVnFfVG9rZW46V3Bna2JreWgyb2FnM0p4T0RLNWNBWmRxbkRoXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZDZhZTE1NDAyYmZmNDRjYjA3ZjAxNDA4NGVjZjcxNDlfYmZLdkZ6YjlhOHZTMDRzdEdtSmEzMERjQlZTYm1GVHhfVG9rZW46TkU3NmJwVHBpb3BhZEp4T1d3QWNrNUhjbkxoXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

结合 AI 和源码做具体分析后，

发现里面的 Agent Loop 都设计得很简洁，

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZDMzYmMyN2UyOTMzNGVmMmVjN2Q3Mjg1ZTg2MjUyNjVfMDZtdmlZTUR3ZjhJTnhaM0pZN0FvMGFUQUFScjBWalBfVG9rZW46VWszMmJnRDhmb09zMEN4VGVxMWNud1ZBbkFiXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTY3MzdhNTdkNGFlNmU0ZTUwODczYWE5YjAwMDk0MTBfb0hFVVFiMVJUcWRHRjd5QW5VNENaZFRvRkRwU2RPbGVfVG9rZW46RXdpbmJ5MHpJb016QVZ4aHJacGN2Z2tGblBiXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=YTExMGFjYjhmNWRiMDRlYjMyMTcyYTlmYjI1ZWVlYmRfREx1TUl6S01OdE01WHhCZkVReDUzM3NFb08ydUlTaGtfVG9rZW46R1VuVmIyM1Brb1hjNE94NGhNVWM3NFVCbndoXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

后续也经过源码调试和接口日志验证，

可以大致理解为下方这个简要流程。

- 用户输入
    
- 模型判断是否需要调用工具
    
- 需要的话，执行工具并将工具结果给到下一轮模型调用
    
- 不需要的话，则直接返回结果给用户。
    

  

当然并非所有 Coding Agent 是这么做的，

如 Kimi Code 会复杂一点点，

但目前看到大部分 Coding Agent，

简化后大体是这个逻辑。

  

### 3.2 小步实践：写个 Demo 试试

了解大概的 Agent Loop 思路，

本来我的本意也到这了。

  

但是想了下，

貌似还是缺失了一些体感，

要不自己来写个 Demo 试试？

于是第一版 Coder 就诞生了。

> [feat: support coder agent demo](https://github.com/hua-bang/pulse-agent/pull/1/changes?diff=unified#diff-0150a6f37ccf49f8d5a521234186a1e982a21e8480c6a30f46e33fa2ef847a3a)

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=YTY2Zjk3YTMxMjQxN2YwZTZiZDA5N2YxYTdlMTJjYmRfbE9xM2xoOTFxa1R1UHhIZklxekpNVkNhdHpOUEp0c0tfVG9rZW46SUdyM2JRQzFhb3c4TkV4SEk0cGNvV09GbmowXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTRjYWU1MzYxZTE5MjQ5N2I1MTdjOTg1MDc0YzVlNGNfY0V1RVRzdzBlSUczNklGQ3R4ZWF2YWhYUTBmSEZxSmNfVG9rZW46T09OaGJseXVqb2dmbkZ4TmdxamNCdHQ0bjhmXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2RhZjE1OTcxZDM5ZjMyMDQ5NmRlMjJlODA2MjlmMzZfNkZ2SnRNcHZYZVdCWHJsNVpZdWN6a0VmNXdXeUNiS1lfVG9rZW46SzF0MWJ4ZzNib0N1c3l4REFtWmNkSU1qblFlXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

一开始跑了跑，

实际上一开始效果也一般，

但个人一直很喜欢 Skill 机制，

所以打算做了下集成，

还做了一点点迭代。

> [feat: support skill feature](https://github.com/hua-bang/pulse-agent/pull/6/changes#diff-85d033da7aaf5872f8fa4138eb71eba5c47a0f341eb204f9588478a5e7a410d7)

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MjQ4MDczODc4NDI0MGNhMTA2ZmIwNDlkMWU2ZjQzNjNfcXNvd0Y2ZGowak9PTUlNZXhmbGFVZEo1eE9CRVV2cVdfVG9rZW46VmFDT2J5aU1Gb012TUJ4a0cyN2NRWmVBblRHXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=YmI0N2M2ZmQzMjg3MjdiM2M0NTA5MDIxYjJlZDI3ZmJfMmFod0JJT0NOdXFmWHdFdDV2UHJjeTF2aXNJZG1zanRfVG9rZW46UDZLRWJWbHZJb25yVU14SHVkQWNKODF3bkpkXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=OWNhZWUxNTA3ZGQwZjc3Yjk3NzdiZTBlMzcxZjUzMzBfY043VUpCVkdPVUoxWUVMbHhjWWQxbWdqYUx1VElxR29fVG9rZW46Q1laamJ2N0JLb3dmcmd4b2ltNGNJRmxlbmpYXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

### 3.3 工程迭代：要不做下工程

实际上面那一版，

已经可以做到了修改仓库代码，

简易地修改一些小需求能力了。

但我在考虑有没有可能让他自己写自己，

但最后是将工程架子搭起来比较重要，

这样子方便后续维护迭代。

  

于是第一个任务就是“项目迁移”，

我让他先出了版本，迁移方案和设计。

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NTU5MDY4YjM1ZDQ1ZDU1YTBkM2E4OThmY2EyZTI2MDZfQmJ0b1ZpcVZ3SUlDU2NUOVJtZHhLNHNOcDNmZm90UzRfVG9rZW46THRXdmJHbVRVbzBTZGN4eDNDTGNmWUFYbmliXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

虽然最后还是人为修了编写 Case，

但基本 95% 以上的工作是他自己完成的，

整体 6 次 commit, 以及近 4000 行代码。

（甚至他还加多了**简单插件机制，**让 Skill 机制插件化）

> [refactor: complete 3-package architecture migration](https://github.com/hua-bang/pulse-agent/pull/11/changes#diff-12438d073831eefc618690ab7798cc7f67186d7ed217c46c7b88c6639bf76aae)

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NzBkM2VjODM3OGU1NTRiNjFmOThmOWI4MGQ4ZWUwNGFfNnI0cFJnREJneEdKSTVIeGtuWThnOGg4aTVKa0RjWThfVG9rZW46Rkc0M2JGS05YbzlRUU94U3ppc2M2UWk4bjBlXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ODRlYjIzZWZjNTY5NjdlMzQwZjZjZTk4MDIxMGYwYTRfQ291RU5ZQksySkpCWWRkVGp6NEttZjd3RGF4R0tYODlfVG9rZW46WFBCYmJEOHhZb1pidmd4WVJBT2NyT0VLbmNiXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NmI1MDVmMjNmZDUwNWM1YmZhNzllOTE3MjQ2YmE2ZTRfcGhNR0xkc0h1dU1FemJDeHpYTklaMmNuWUNTUVZtZ0VfVG9rZW46SW5OOWJmdzJab2V4Sm14RVlrcWNlZDlIbmVnXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

这次迁移，在测试是否能有 Coder 处理复杂任务的能力，

更重要的是，做工程化基建，便于后续 Coder 的迭代。

  

### 3.4 扩展能力：支持插件扩展机制

随着 Coder 的工程建设，也将名字改成了 Pulse-Coder。

改名的原因在于，我觉得我应该可以不断迭代这个项目，

早点改名，也许后续改名改动成本小一点。

  

以及一个比较关键的点，

长远来看，

我应该去实现主流 Coding Agent 的能力，

如 MCP、Skill、Sub Agent、Memory 等机制。

  

但我希望以一种 Pulse-Coder 能尽可能纯粹及可扩展，

其哲学是 `Small core. Infinite surface.`

  

我更希望的是 Pulse Coder 只做纯粹的 Agent Loop，

而具体如 MCP、Skill、Sub Agent 理论上都可以是外部注入，

于是设计了一套关于 Pulse Coder 的插件机制，

但这个插件机制的作用更多是，

**“给 Pulse** **Coder** **集成机制，而非简单的工具”。**

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MTZlMzY0MGFhNTRlYzlhNmUyNWI5YjhjY2Y1MGE4MWNfRFB5aHgyR1gyVndKQ3N0ZHZpYmlGN3MwZFlzbmlmSUFfVG9rZW46RlNseWJZOUIwb1BLVm54YnRtbmNWN3k0bm1iXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

这样子，后续如果有新的标准、协议、机制，

我也可以通过这套插件机制来做实现，从而集成到 Pulse Coder 中。

  

这次，我并没有让 Pulse Coder 来做这个实现，

而是让 Claude Code(Opus 4.6) 来做具体设计，

因为在当时，我并不无法保证 Pulse Coder 的设计能力。

> https://github.com/hua-bang/pulse-agent/pull/47/changes#diff-a1c4ca29e3681a331278b87768390274bf6521c6da98ab53f41b27f35a6dac7e

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MWFiODMyYmJhMWZiZDY0OTI4MmQ5MzlkNmI1ZGU4ZTJfTThwSEJ3WmdJNVJJYTBRRUdObkdhOWg1dUtaS3R1RjJfVG9rZW46QUNNZWJsUmp4b3R1eGF4RE5sN2NGakthbnBoXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MmI3YWQ5Y2EyYWQ0OWMxMWYyNTBiNzMyYzZiZDI0NjVfbXBUU0NRd0lqUmoxMHJ6M2dId3B6R3BJUDNFYU5Jek1fVG9rZW46RkplSmJtbzlHbzNHTjN4aFBXWWN1aHZabnhEXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

但在这个 MR 合并之后，

Pulse Coder 的扩展性有所提高,

后续的插件，

如 MCP, Plan Mode, Skill, Task 都是 Pulse Coder 自行处理了，

而后 **Pulse** **Coder** **貌似开启了自举模式，自己完成了大多代码编写,** **PR** **应该有 100+**

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=OGRjNGVhZDNmZWVlZDU5OWNiYjVhMzBlMjk0YmEwNGFfNVY1R3RDeDI3c0U5cnhXRnFOMTNwRllsamxtbThvMGRfVG9rZW46UzJ0S2JrRDJFb3JXVXN4SndVUmNaWUtLbjJjXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NTk2M2NiYjQ0OTNlMjQ2ZTQ0ZGU5NWQ4OTRkMjlhZTZfN3ptdFdzNEtCSDZjRllnUHRIN1lXdFhkVjI2M1dodXFfVG9rZW46WE5oSGJQSHRqb0JkR2R4RzZoNmNuYUg5bkJjXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

### 3.5 异步协同：集成飞书/Discord, 打造类 OpenClaw

完成了上述几个点之后，

实际上 Pulse Coder 就能完成比较多的任务了。

  

但还有一个点没有实现，

就是目前需要你打开电脑或终端来使用，

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NGRlNmI0ODRkMGQwNjI1NmQ0YTI0Mjc1NjllZTdjNGVfMmtzeUk4bjY0UUJUaU1FNEpVbFFZYnpOZ0VTS2szd05fVG9rZW46QnJva2JaeTE1b0J6bGx4dXEyNGNMS2I4bmRlXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

但春节期间外出比较多。

当时在想要有个能远程办公的方法，

所以一开始采用了朴实无华的方法，

是通过 termius 直接链接机器。

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NDlkNzkyNmVlN2NjOGYwOTM5NGZmNGZmYmY3MTNlZjdfMTNvYzJCNFdqbzZGM2o5dmc2VmZEbkxXSnVZNVdXejRfVG9rZW46QWRpamJlc1NJb1J2NjR4WWV6SWM5VGlEbnpoXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2Y5MWRiYWYwNzQxNWRmM2NlYTUwNzQ2MTg4NjJlZjVfRng0ekxNenhCVlA3Z25XMTgxVk91M25rUnVVNVdKM2JfVG9rZW46VFRjYWJ5Z2pDb2ZNS1B4eUxrbWNzOGFxbmVjXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NGViMDExOGM5YmUzNmEzZTAzMThkMzlmODYxMTMxZWVfZ3FEdm9veEhIT3VFWUFkbTFzdTd6TXE5UGpqdnY5d1RfVG9rZW46QmQ2VGJJbFBIb244d014U3VGTWMxSVZBbkVnXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

但也有弊端，

如 CLI 输出内容多，但屏幕又太小，

且我没做 TUI，基本都是靠原生输入/输出，

所以在体验上，虽然能用，但会稍微有点差。

  

后续想着，要不直接接到飞书，

这样子会尽可能方便多。

于是让 AI 看看飞书如何接入的，

他也很快把飞书渠道给集成进去了，

实际上就有点类似简易版本的 OpenClaw。

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWYzYTBkZTMwYzhkNjA1NmUyNGIyYTMwYmFiNTQ2ZTZfRVREYU9CMFNZUUlISnNsYW9TSXNjdTU1bHdObXNEUE5fVG9rZW46V2VsSGJ6ZkQ4b1NjSnp4eWZJZ2NDNVVMbnZnXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZDk1N2MyYjFlNTgzMWEwYzNjNjgxNTY0M2JmOTA5ZjNfQWdhQVlDU2lnZ1VyTGNEY3U4aVFkNGVZb2ZRNGprTzZfVG9rZW46R2QyZGJxNlRGb0hHcUl4OFdzeGNRV1U2bm9mXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=YzQ3YjEzN2JhOTY3ZTRjN2VmZDAwYjcwNTQzNzU5NWZfZ2d1UUhOM29oM2lDNkkyaWY3UUJ0STBqVkxzRTE0RktfVG9rZW46V0NxemJJVndJb3ppTDN4WTc0TGNobkpnbkFlXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

而后就是异步协作的开始，

飞书让我在路上也在不断地 Vibing。

以及假期回来过程中，

9 个钟的高铁，

我无需掏出电脑来处理，

而是不断地和机器人对话，

也做了关于 Pulse Coder 的 Mermory 插件的设计。

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ODJhZjEwY2Y0ZGE2OWJjOTYxODU3ZWNmMGNmNDQ1MzRfN2txdFRFNkl6SlZ6Z0NJcEdvUUJQVWZCWjVRME9EdWtfVG9rZW46S0VHcmJGS29Tb2N1U1p4YlM1Z2N4U0k5bkNjXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ODcxNjVkYzUyZDM4NjM5ZTJhYmYxZTM2MTIxNTA4ZjRfaDdnV3RmTTlBVHJiSkR1RUt1dUxBYWM4dldlNUZMUFlfVG9rZW46S1k0VWJBQ1Uxb2NJeGZ4WDlxdWM1RGVIbkdmXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MmMyOGViZWMwYWQwMzQ4NmNhOTVmNzVjZTJhMTc2NDZfSU9vN1V6UktzY0doQWp4dVJENmNHdUR3QnplOUhDSGRfVG9rZW46RjdUTWJDdHBGb245T2Z4Q01wWWNnQmFYbkhjXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTFjMDc0MTBiNzE3NDFkODQ3MzQ1OTlmNzA5YTgxMmFfT1llNnlEaVNoS3NZVVp4cEtxa2c5Q2NJUjdqTzFwN3hfVG9rZW46UUFsaWJLVEdqb1dTVDd4cGhRb2NwUFRqbndiXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

但后续由于飞书存在 API 调用限额的原因，

总体用量是 50000, 但我用了 10000 了，

不是个长久之计。

  

于是我后续迁移到 Discord 中，

发现有新的玩法，

即里面的 Channel 和 Thread 的设计和我场景很契合。

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NjhlNzczNTk3ZTc1NThmNzYzYTEyMTFhZmVlYjNjYjRfdGF2eEpvVmQzUFhhbTFuRlRvbWpHeHZqMW9Sd0JqblFfVG9rZW46TG1HZGJpUXBYb0ZreGR4S2NJaGNoSEt0bkFlXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

你可以在不同 Channel 和不同 Thread 中做切换，

且目前是上下文是隔离的，

意味着你可以同时和多个 Agent 聊天。

以及后续工作去结合了 `git worktree` 的能力,

尽量的分开工作区，从而能够实现同一时间做代码改动。

（目前关于 `worktree` 的能力还不稳定，在不断迭代中）

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=OWIyMzg0MjkyZTBlN2I1YmNiYzQyYWMyMzI1Y2RhYzBfNXR2d1k0SDlaWVloSTluQVpDMWRwWjBYWWhaS2dKcjFfVG9rZW46SDZGbmJxbVFpb2w3N1F4b0JadGNkT21NbjJkXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MWQzM2NjNGM3YjQ5OGFkMWZlMDg2YWY1ZTg2MzliODJfYkdLTzRBd1U5MWNaMGpHVWY5eVdlaldSOGRmS1hlS09fVG9rZW46U2dtSGJQaTFIb1MxenJ4eHpwV2NPOEd0bjJRXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

实际上，目前他已经是我个人可自主迭代的小助手，

且目前也把名字从 Pulse Coder 改名为 Pulse Agent。

  

但回顾整个开发历程，

实际上一开始并不打算做 Coding Agent 或 AI Bot，

一切源于“想了解下 Coding Agent 的 Agent Loop 机制”，

但过程中有新的问题和反馈，一步步迭代。

  

也许后续可以留意这种“微小的启动”。

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjlhMmM3MmNlYmFhNzYzYjRiOWEwYWQ2YTZjMWI4MmNfVDc2OURsTG1NSW93ZFdkVXZYUXU4RENRS2RUZnV4SktfVG9rZW46SU5mZ2Jxb2JJb2pUWWl4OGZzZmNDN1dObjljXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

## 四、Pulse Agent 技术实现

> 本章的技术实现会比较细节，可以先跳过，后续对细节感兴趣的同学有时间可以看下。
> 
> 后续逐渐补充吧，细节有点多，或者可以看 https://deepwiki.com/hua-bang/pulse-agent

先在抽象层面，Pulse Agent 整体做了简洁的分层设计

- **基础运行时层**：做底层的基础能力，通过 Agent Loop 满足长任务运行，同时支持运行时、动态灵活调整 prompt + tool，整体参考 pi-mono 和 opencode。
    
- **机制/能力层**：通过插件机制，提供 Agent 配套的工具能力，如 MCP、Mempry、Sub Agent、Skill 机制能力，方便能力集成。
    
- **Agent 入口层**：作为 Agent 的入口，提供 Cli、Discord、Lark 等渠道，既可以做 Cli，又能做轻量的助手，后续也可以接入 Web。
    

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NzQzY2VjZDNjOTEyNjNkMDAwYzFkNTdjZGIxODczZDVfZUl4Y0VlY3VNdnczRkY1MXptZXI5aTR2bDZxTlJZMDFfVG9rZW46R3Q4b2JRVktIb2ZxVzR4dkk4YWNmZXA1bmpnXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

下方具体细节到某些点来讲，

因为 Pulse Agent 也在不断地迭代，

所以下方的内容会不断地更新。

  

### 4.1 Agent Loop

> 代码链接：https://github.com/hua-bang/pulse-agent/blob/master/packages/engine/src/core/loop.ts#L165

想先聊聊的是一个概念，**“Agent Loop”。**

但目前对于这个概念，貌似可能也没有官方的定义。

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWE1ZTk3OWUxNTA3YzUwZjVkMjMzZGNjODVlMjQ1ZTRfZ1NkQlBvcXZvZ2F6Ukg0alZ6RGo1V2VqTVdiZ1hWQmRfVG9rZW46RVVVR2J4Mkxrb29DNHN4U2tPdGNRamU3blplXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

个人的理解是，

**“Agent Loop 是智能体循环，在完成“感知→决策→执行→反馈”的动作，从而完成任务或条件终止。”**

- 感知：读取上下文/状态
    
- 决策：生成下一步行动（或工具调用）
    
- 执行：调用工具/执行操作
    
- 反馈：把结果写回上下文
    
- 终止：完成/失败/超时/用户中断
    

此前一直说的 ReACT 我理解也是 Agent Loop 的一种形式。

  

记得当 Claude Code 去年出的时候有个访谈，

Claude Code 开发者说他就是一个 **Agent Loop**。

实际上，**Agent Loop 可以说是目前大多 AI 工程的核心。**

  

想起早期在做 Agent Loop 相关的时候，

尝试过用不同的框架（如 LangGraph、Eino、手写）去搭建 ReACT、Plan-Execute。

但效果都比较一般。

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MTQ4YjE1ZGJlYWU5MGU4OGZiOThkMzMwZDBkODEzMjhfN3g4V0FwdmdweUViMFA5bE1Rc2E0ejRuam85UW5UYjlfVG9rZW46VkZqRWJHRGh3b1RzVml4cUxucmN4aFRMbktiXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

但去年和今年，你能看到如 pi-mono 的 agent loop 实现就非常简洁。

背后也许是模型能力提高，工具能力的丰富，其核心的流程下图。

(pi-mono 中[实际运行](https://github.com/badlogic/pi-mono/blob/main/packages/agent/src/agent-loop.ts#L104)有两层循环，但外层循环是给消息交替执行用，而内层循环是 Agent Loop，简化后如下图)

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20260306213242.png)


而 Pulse Agent 也是参考这个逻辑，编写的第一版 Agent Loop 代码，一共 41 行代码。

当然这个的话，只能说勉强能开始一点点小任务，执行步骤也比较短。

> https://github.com/hua-bang/pulse-agent/pull/1/changes#diff-0150a6f37ccf49f8d5a521234186a1e982a21e8480c6a30f46e33fa2ef847a3aR5

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTJlOGMwNDg5MzFhNTJhN2Y1ZWM5ZjYxM2JjMzIyZWZfQ3RoUngxdFZUUGJhVU1OWklvZGhvUDIwcE8waWZPOVpfVG9rZW46TklPZmIwZHhTbzVaR2p4NmtHVmMyd0RLbmdjXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

而后续经过不断迭代吧，实际上也加了“上下文压缩”、“Agent Loop 中断”、“生命周期 Hook”等能力。

目前 Agent Loop 任务完成度还不错，部分任务也可能跑到 100 轮，时长可达 30+ mins。

  

关于 Agent Loop 更多细节暂时不展开了，

但其核心**“将上下文和工具调用的原文给模型，让模型自主判断执行动作/完成任务”**

  

过程中几版 Agent Loop 代码

- 最简版：https://github.com/hua-bang/pulse-agent/pull/1/changes#diff-0150a6f37ccf49f8d5a521234186a1e982a21e8480c6a30f46e33fa2ef847a3aR5
    
- Demo 版：https://github.com/hua-bang/pulse-agent/blob/master/apps/coder-demo/src/loop.ts
    
- 现状版：https://github.com/hua-bang/pulse-agent/blob/master/packages/engine/src/core/loop.ts#L165
    

  

### 4.2 插件机制

> 具体 MR：https://github.com/hua-bang/pulse-agent/pull/47/changes

近几年，AI 工程/应用的概念/机制越来越多，

如 MCP、Skill、SubAgent 等

那作为一个 Agent 应用，

如何能扩展这些机制，

方便后续的可插拔呢。

  

我个人并不喜欢把具体工具实现耦合在最底层，

所以我更多是内置了插件系统，方便扩展具体机制。

  

而对于这个插件系统的机制，

我的思考是，

“目前工程更多还是做提示词/上下文工程，

如何高效、动态地拼接提示词和工具”。

  

同时基于目前的情况，

插件系统设计也比较简易，

“提供生命周期钩子，从而支持动态化提示词、工具等配置”。

```SQL
Engine.run(context)
  │
  ├─ beforeRun         ← 整个 run 开始前
  │   能改: { systemPrompt, tools, messages }
  │
  └─ loop (while)
       │
       ├─ beforeLLMCall  ← 每轮 LLM 调用前（包括 tool-calls 继续循环的场景）
       │   能改: { systemPrompt, tools, messages }
       │
       ├─ streamTextAI()
       │
       ├─ beforeToolCall ← 每次工具执行前（现有 ToolHooks.onBeforeToolCall）
       │   能改: { input } 或抛错拦截
       │
       ├─ afterToolCall  ← 每次工具执行后（现有 ToolHooks.onAfterToolCall）
       │   能改: { output }
       │
       ├─ afterLLMCall   ← 一轮 LLM 结束后，判断 finishReason 前
       │   能读: { steps, finishReason, text }
       │
       └─ (continue or break)
  │
  └─ afterRun          ← 整个 run 结束
       能读: { result, context }
```

  

具体伪代码如下

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=YmFlOTcwYmIyNjUwN2EzMzY2NDQyNzUyYmQxODdiY2NfdU1pRUFkVDY0UG5iZWpZeHZobmJSNFg5YzVWMm9pc0RfVG9rZW46STl5QWJhSjZYb01EbDh4aWpCc2N6REI2bkpvXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

整体插件机制目前还比较简单，

但实际上已经能扩展不少能力了。

  

不过，当未来更多插件结合，

且还有可能存在下方问题，

优先级执行、覆盖、插件依赖等问题。

  

但一步一步来吧，

保持迭代。

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MTZiOGFlZmM1Y2YzYzcwMjE4YmFhNmFmNzlhNzVjY2NfMENUUUlQOUF6TURqTmlpT2JYdXg1M1JtYmhnR2pwWFdfVG9rZW46UmtJemJTN25sbzhZdkF4Sk9ZMWNLbms5bjdiXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

### 4.3 MCP/ Skill/ Plan Mode/ Sub Agent 等实现

> `Small core. Infinite surface` Pulse Agent 中尽可能用插件来集成机制。

如上方所提到的，这些机制都是基本通过插件能力进行注入的。

具体而言，大部分机制都是通过注入为 Tools，修改 System Prompt 来做实现的。

**注意**：下方部分机制实现并非和官方主流相似，更多是尽量满足机制效果。

**MCP**

- **实现原理**：Agent 初始化的时候会去拉取 MCP Sever，获取 MCP 的工具 list，注入到工具列表中。
    
- **具体代码**：[Add MCP plugin for enhanced tool capabilities by hua-bang · Pull Request #19 · hua-bang/pulse-agent](https://github.com/hua-bang/pulse-agent/pull/19/changes#diff-8b5fc78425701729dee9f0e3a8a16fa4d3a0913fbab3f602ee12a1980886e715)
    

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=YzA3Y2Q0YzBkOWU2MmZlOGUzZTYwMWZiYTdkNTljYjNfSkNJYU9Ea3pGd3o5NEZJMmhaQldrcjlxTWNhQ0NMRktfVG9rZW46TGlnbmJHVm14b1ZZcnh4dGJTVGN6ZnJlbm5mXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MWIxNjg2YjUzYzRkODU4MTc0YjZmYThhZTkxYmI0MWFfQU15dUdhUWI2SFhKYnRBTFZOa0hUSk5xcHhIWVg1SVJfVG9rZW46T1V5MWJEWTdqb0ZncVF4VDducGMyRVM0bmxnXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

**Skill**

- **实现原理**：Agent 初始化的时候会去注册上 skill 工具，在每次调用 Agent 的时候，会去获取最新的 tool 工具描述，其中包含各种 Skill 的描述。
    
- **具体代码**：https://github.com/hua-bang/pulse-agent/blob/master/packages/engine/src/built-in/skills-plugin/index.ts
    

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTU1OTc2YzBlYTg2ZmUwNjkwYzdhYjI3M2JkYzIzYzJfUmVEZWdlQUszS1dSSzNvMnU5TU5UUkR0OHY3bXNsNlhfVG9rZW46Ulhzd2J5dG5Fb3NrZUt4QjRpcmNuaGRHblpjXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ODExZGUwOGY4N2M5NWQ4NTMwODQ3NDM5ZjhjN2VhMzVfdDFCaHBmcVc4dE1qU3F2T2dGQTB2Z2xqQUtobk1XUHVfVG9rZW46TEw3NmJ3OUVJbzluaTZ4c0c2ZWNGdU50blFlXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=YzBiM2ZmYjRhMzdhNWYxYjRhOTA0YmE3ZmMzMjA3YWNfOXZJYmZZWGt1TVV0M2hZaWFmV08xdW9PMDJYYlA1RVdfVG9rZW46QmhsUmJNRFFqb1J6ODd4c29OeGNudjhkblhkXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

**Plan Mode**

- **实现原理**：Agent 运行时有个 mode 状态，宿主可以切换 mode 状态，从而做计划提示词和执行提示词的切换（作用于系统提示词）。
    
- **具体代码**：https://github.com/hua-bang/pulse-agent/blob/master/packages/engine/src/built-in/plan-mode-plugin/index.ts#L500
    
- **备注**：Plan Mode 是早期实现的，所以目前还是通过提示词作限制，但目前插件机制应该能够做多一层工具过滤。
    

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=YzdjZjRjNzQ4ZDA2Yzc4YmQ0OTgxNThhOGExMDUwNWJfVkRvczlCY0E3RW1sdlIyTm5QU3V1cHNJN1NPT2R3d2hfVG9rZW46UWJwR2JYTFFjb0JueUp4N2h1UWNhUzMwbkNlXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NTVmZTIzMGUzNjY1YTYxY2QyNGMzOTllYTUwNWQ3NTFfZ1lVN3NuT1gwcG84aGRrT090YXdXSkFBNUFiMHdrTEFfVG9rZW46RUVjVGJUM2pmb3ZOVEh4Y3ZMcWNoRHExbnlmXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

**Sub Agent**

- **实现原理**：本质上是根据文件规范来定义 Sub Agent 的行为，在 Agent 初始化的时候，将一个个带自己提示词 Sub Agent + Agent Loop 结合一起打包做成工具。
    
- **具体代码**：https://github.com/hua-bang/pulse-agent/blob/master/packages/engine/src/built-in/sub-agent-plugin/index.ts#L135
    
- **备注**：非对齐 Claude Code 的 Sub Agent 概念。
    

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTc2YjYzYjY2NGJjMGEwOGM4ODdmYTliYjU5ZWMzZjFfUGFhbDc3MnFmdXgxSFhtOUxRZ2RXYVFYR2tVVEoxNUJfVG9rZW46WnVCMWI3NVVXbzZueXh4WGFGY2NORFd3bjllXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=YjM0MzIyNWFiNGFjNDJkOWYyMjc5YjM2YTFhNzU4N2NfVHlPd2JRVXUySWxkdHJCUDlIR1RGVDVXMnliTkhRdzlfVG9rZW46TXRBVmJocjlGb0c3Tm54WGhOWmNqWVpablJNXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

当然除了这上方几个插件外，还有下方的几个插件

- Memory 插件：记忆插件，可以记录你的关键信息和 daily log 信息。
    
- Agent Teams 插件：多 Agent 协作操作，但目前效果还不好，得再具体调试调试。
    
- WorkTree 插件：适配 Git WorkTree 的工作形态插件，一般由宿主层面集成。
    
- ....
    

  

最近我仍在迭代一些机制，

在近期迭代 [Tool Search Tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool) 的能力的时候，

是有点小惊喜的。

通过2，3轮对话就提交一个 MR，

（虽然后续发现有些细节问题，但整体思路没啥毛病）

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NDVmOGQ0YWI0ZDhhYTI2YjEzNDYxZWE3YjQ2ZWYyYThfVkFNN0JaSFppRDlGU3VGNXF2ZlgwNmpha3VMQU5TOXBfVG9rZW46U1BPOGJmUEVXb3VaMTZ4cER4a2NjNjh0blpXXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MDExMTMzMTVmOWE2Yjc4OTk0NTA2MDI5Y2I1ZTRmZWNfZEMxSVBHcHZZdE9HWkpxVU5DYzlwUnhjZHZvRG5KSlZfVG9rZW46Ulp5UWJYVGVpb1lXOFZ4c2NTYWNFTHhtbnhpXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MTM5MjIyMTViZDMyMDQ2YjY5MWJlMjZmNGE2YjZjODJfT25HSlV1M2Q0ZGE1YjhBdUhEbnZGN3VQdlI0ckh0MmxfVG9rZW46UXdGcWJWMVZIb2lqNUR4ak9mSGNGZlhabjhmXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

  

### 4.4 Cli & Channel 等集成

> 由于 Cli 和Channel 属上层应用建设，CLI 层面我没有做过多建设（连 TUI 都没做），而 Channel 更多是平台集成的工作，这块更多是 Pulse Agent 自己做的，**我对这一块的了解也不是很多**。
> 
> 所以 4.4 这一部分内容是 **Pulse Agent 生成，**但并非说这里没有意义，过程中还有很多细节，如会话管理、会话隔离、适配 channel/DM/Thread 的逻辑、会话锁等。

Pulse Agent 的入口层主要有两条：CLI 与 Remote Server（多平台接入）。两者都复用同一套 Engine，只在输入/输出、会话存储与流式展示上做适配。

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=OGI2ZTFmZTRhZmU4Mjg3MjhlMzkyODE4NWNiNTYyZjRfTXJtNW9kUG5EbnkwME9MTXNCdVR3dTBMS3pKbmhhcjJfVG9rZW46RnA2NmJFY1Uyb1dDMFJ4dXk3S2M4bUNmbmRiXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

- CLI 入口（本地交互） CLI 由 `packages/cli/src/index.ts` 启动，内部创建 `PulseAgent`，加载 memory 插件，并补充 `run_js` 工具（来自 `pulse-sandbox`）。CLI 维护本地 `Context`，支持会话管理、技能指令、任务列表切换等命令（`packages/cli/src/session-commands.ts`、`packages/cli/src/skill-commands.ts`），输入管理在 `packages/cli/src/input-manager.ts`。本质流程是 “读取输入 → 解析命令/文本 → engine.run → 输出结果”。
    

  

- Remote Server 入口（多平台） 远端服务位于 `apps/remote-server`，采用 Hono 作为 HTTP 框架。启动流程在 `apps/remote-server/src/index.ts`：初始化 session/memory/worktree，再初始化 engine，然后启动 Discord Gateway 与 Webhook Server。路由定义在 `apps/remote-server/src/server.ts`，当前开放 Feishu/Discord webhook 与内部接口。
    

  

- 统一的 PlatformAdapter 协议 所有平台接入统一实现 `PlatformAdapter`（`apps/remote-server/src/core/types.ts`），包含 `verifyRequest` / `parseIncoming` / `ackRequest` / `createStreamHandle` 四个阶段。适配器实现位于 `apps/remote-server/src/adapters/*`，如 `apps/remote-server/src/adapters/feishu/adapter.ts` 和 `apps/remote-server/src/adapters/discord/adapter.ts`。
    

  

- 入口调度与流式输出 统一入口在 `apps/remote-server/src/core/dispatcher.ts`： `verify → parse → ack → dispatchIncoming`，随后进入 `executeAgentTurn`（`apps/remote-server/src/core/agent-runner.ts`），内部调用 `engine.run`。输出通过 `StreamHandle` 回推平台，支持 onText / onToolCall / onClarification / onDone 等回调。
    

  

- 会话与并发控制 `session-store` 负责跨平台会话存储，`active-run-store` 阻止同一用户并行运行，`clarification-queue` 用于澄清问题的跨消息等待与回收（`apps/remote-server/src/core/clarification-queue.ts`）
    

  

  

## 五、Pulse Agent 开发感想

> 开发 Pulse Agent 有不少体会，在这里简要记录下。
> 
> 个人观点，不一定对。

### 5.1 信息频率

从去年开始，

Coding Agent 带来的效率就给了不小震撼。

而在自己开发 Pulse Agent 的过程，

以及 OpenClaw 助手的出现，

让我再度思考 AI 带来核心变化是什么。

  

与 Claude 就这个话题进行讨论，

而最终得出的一个结论是**“信息处理频率”**

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NGM5YWVhN2VmMTk5OWM5MDUyYmQ2YTVjZGRmY2UyNjhfdjRSTllKMUh4Q09ISVNyd1ExOUVlVktCYTZValFYSDFfVG9rZW46RklmTGJuMGt0b1NIZDJ4WWVoVWNmTm9WblpkXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NDJiYzA0Mjk2YjIwY2FiMzYzODRmNmNhYzZjODQwYmZfeWRhaTQxaHJEVE90M1gyV0pFdHEwYms1WE5uZjFMNEdfVG9rZW46U1ltMGIzNGNub0pEcnF4ZG4xVGNlcHVnbk9OXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

举个例子

- 互联网让信息变得可获取
    
- 搜索让信息可以更容易获取
    
- 推荐让信息和人之间可以交互
    
- AI 则能够帮人处理信息
    

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=YjI3ZjM3OWRiZTA4NDYzYjFhMDQwNWU0NTIyMzExMTJfVFBkblZlUzVoNVpmZk43dnBUWmtxUEk2QmFpcFNoM0FfVG9rZW46UnBnSGJGWDI4b21aOTh4Q3JDQ2NjRFUxblVnXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

上方几个关于技术变化，

都在让我们流转信息的频率越快，

互联网、搜索、推荐都是在加速流动，

而 AI 在加速流动过程，

还有**生成和处理**的操作，

而我认为 AI 的加速会是更快的

而且在一些方面，

人脑处理速度是追不过机器脑的。

  

而频率变高，

也许能诞生出新的需求/机会，

但其代价是压缩。

所以越来越多的人类的信息处理，

在于高层抽象层面，

而细节执行层面可能会越来越交给 AI，

  

**也许是生产侧的注意力剥夺，**

**决策速度如何跟上消化速度，**

**消化速度如何跟上执行速度,**

**过程中，也许会丢失细节。**

  

但我并不觉得丢失细节是好事，

有些经验，锻炼，know how 是从细节中来的。

  

个人认为，

如何适应这种频率是非常重要的，

**未来可能需要具备信息粒度切换能力。**

既能在抽象层面做决策和判断，

又能在细节层面上手做了解。

  

**粗中有细，快中有慢。**

快是要跟上信息流动频率，

慢是要判断好关键问题，

**你得在细节层待过足够长的时间，**

**才能真正建立起抽象判断的直觉**。

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MzUwZDkyZDAzYTlhN2IwY2Y3MzZiYzdiYjkyZWQ4NDNfcTF3TXg1ZE9YcjMwWXRxQk9QQmtLNVhFaHpXcG5xRm9fVG9rZW46V3A2eWJ5dXJab3VIN0p4QkJPMmNuaDVUbjhlXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

### 5.2 关于“迭代”

近期关于 OpenClaw 🦞的话题，

其中有一个就是“自我迭代”。

  

虽然只是简单体验了 OpenClaw，

但我大概的理解是，

你能通过下方，

**编写代码**、**提供工具/技能、上下文环境、记忆系统，**

从而能够让 OpenClaw 功能越来越丰富。

  

也算是一种能自我迭代的软件，

而在开发的 Pulse Agent 的过程，

也尝试去构建可自我迭代的能力。

  

过程中有个感想，

随着 **AI 基础能力提升 + 反馈迭代更快 + 人机协作机制完善，**

未来应该会有越来越多能自我迭代的软件。

  

但在**可迭代**背后藏着几个问题

- **可持续迭代**：可迭代很重要，但如何健康地可迭代也许更为重要，如何保证白盒，而非黑盒迭代。
    
- **可迭代层次**：不同用法具体迭代的层次也不同，工具、流程、机制、思维方式、甚至是世界观。
    

  

OpenClaw 是一个惊艳、伟大的项目，

也确实有丰富功能和自我迭代能力。

  

但对我的判断是，短期来看 OpenClaw

- **安全层面仍有隐患**：近期发版也在逐渐修一些安全问题。
    
- **二次开发层面仍不太稳定**：目前还是会遇到二开过程中，服务挂了的情况。
    
- **迭代能力较黑盒且层次有限**：目前迭代更多限于做工具、流程等。
    

  

当然，我并不是特地想拉踩 OpenClaw

**我觉得长期我还是对 OpenClaw 保持乐观。**

但目前可能这个项目和我的需求不太匹配。

  

但更重要的是，如果要做迭代，

如何保证一个**可持续迭代**和**丰富迭代层次**的能力。

  

Pulse Agent 目前也在实现这两个维度，并不断迭代中

- **可持续迭代：**由于目前底层的 Agent Loop 都是自己实现的，并结合插件系统，从而支持外部做扩展，相对白盒。
    
- **迭代层次**：Pulse Agent 结合插件系统能够做到工具、流程、机制的迭代扩展，而在整体设计 Pulse Agent 的能力时，也在影响我的思维方式、世界观。
    

  

当然，Pulse Agent 的**可迭代能力目前还很一般，**

到后续插件数量多/具体复杂场景，

也许其内部的扩展机制也需要不断地迭代修正。

  

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=NjA2MjA2MTU2YzExNDMyNmMyNzI5M2NlZGQ4NTgwYjNfd0FOa3l6M01mbHFPYVBLU0FReUdXV1VhbmFTc0ZLVnpfVG9rZW46UDFXVmJsZkJQb2JickR4UVYwdWM2Qnl6bnNjXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

但最重要的是，**要找到适合你的可持续迭代机制**。

  

### 5.3 关于“时间”

前几年对于 AI 工具的看法，

更多是作为“生产力工具”。

  

但在去年的体验感受，

以及本次开发 Pulse Agent 的过程中，

也许能称为“生产力”了。

  

那么带来的变化是啥，

思考过一段时间，

但最后的答案是“时间”。

  

我目前还不能很好地概括想法，

但我尝试举一些具体例子。

- 在某些任务上，借助 AI 你能用 2 h 达成过程 1-2 d （甚至更久）的效果，如 Coding。
    
- 同一时间内，你可以指定多个 Agent 去处理不同的工作。
    

  

这是否意味着

- 今天同样时间，我们信息处理的速率变快了。
    
- 同样的，我们可以让 Agent 并行跑具体的任务。
    

  

那这样子推演，

“一个人一天可能就不止有 24 小时”，

又或者说这个说法不准确，

但实际我也没想得很清楚，

但感觉时间的定义在被影响着。

  

### 5.4 人与工具

> 麦克卢汉：我们塑造了工具，而后工具也在塑造我们。

春节假期复工后有个观察，

就是旁边小伙伴都开始聊 OpenClaw 🦞。

  

据我个人有限的观察，

- 有同事深夜翻文档，看如何部署。
    
- 有同事一有时间就开始捣鼓 OpenClaw 🦞。
    
- 社交媒体上关于 OpenClaw 的内容多了很多。
    
- .........
    

  

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWQxMWVlNjEzNTI5NGNkNTEzOWFiNzE0YTQxYzQyZTBfYVpjYmxGbEFYcXZySTd4QjZBN3BRaFBSOHFaUmRnSWhfVG9rZW46RGNmQmJ4RHRlb1JDM2R4MVVFZGNUYnpubmZiXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2VmNjc5MDE3NDM5MjNlNzhlODkyNmJhZmI2ZDk1OTNfajlkZG5YMVdZN1RodHZnOWxsMWZsRVRlT21idHliRVBfVG9rZW46WG5FRWJZOFdQb2Q1Mmt4MUg4Y2NSbFFQbmdnXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MTcxMzFiY2U0YTA5MTA3ZGNmYjU5ZTYzZGM0YmJjZWRfMjRaQWt4ekpvbVFRZWhqQ2s3cDg0aHV2RlVLVkV2N1ZfVG9rZW46Rk56OGJ6SWpOb2dKTmR4Q1FWdWNLOWF3bmtjXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

都在搞小龙虾🦞，

有点**“早期 AI 驯服人类”**的感觉了。

  

实际上，我们日常已经被 AI 影响

- 春晚时候 AI 效果和机器人
    
- 解答问题用 AI 而非搜索/推荐
    
- AI 提升信息频率，人类注意力日益碎片化
    

  

而具体到我个人

- 早起贪黑地看着 AI 领域又发展了啥
    
- 有碎片化时间就给 AI 助手布置消息
    
- 更多用 AI 编码，而少了具体细节编码
    

  

甚至在写这篇文章的时候，

我在想哪些内容他能帮我写，

但最后我还是纯手写了（除了配图）。

  

人和工具是相互影响的，

- 时钟的出现产生了工时概念
    
- 小麦的出现让人们固定居住场地
    
- 互联网出现让人们交流更多内容
    

  

那么 AI 呢？

也许是个值得思考的问题。

我感觉我们很难做到不受影响，

但也许我们得意识到在互相影响。

  

也许某些层面上，

Human in the loop === AI in the loop

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MTc5NTkxMDQ3ZjE1MWI3ZjkwMjMxNTJhZjdkMjU1YzZfSHVSaGFxdFkwYkRQMno2SFhZMjd4bWlhVlJGTlJjQWlfVG9rZW46STIyYWJhT3ZTb0dqbWp4SW9lc2NCckN5bmhiXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

  

### 5.5 实践场

在 Pulse Agent 开发的过程中，

还有一个比较深刻的体会。

“纸上得来终觉浅，绝知此事要躬行”

  

从 2022 年底到现在，

已经处理非常多的概念和名词。

“COT、RAG、ReACT、Tool、MCP、Skill、Workflow、HITL”

等等。

  

实际上要了解理解好这些概念，

成本还是非常高的，

因为这意味着

你不仅得抽象理论，

可能还得具体实践，

需要抽象和体感的结合。

  

而在这次 Pulse Agent 开发过程中，

由于要适配这些机制和协议，

有了具体实践的机会，

从而加深了对这些概念的理解。

  

但实际上我们很难有上手实践的环境，

而如果你在业务工作中，

或者在前期自行搭建一个 Agent 框架，

那后续了解新的机制的成本会稍微低一点。

  

重要的事，也许得构建自己的实践场，

从而能够结合理论更好的理解这个机制。

  

### 5.6 无穷的开始

《无穷的开始》是很我喜欢的一本书。

关于此书

- 涉及科学、文化、哲学
    
- 介绍经验主义/易谬主义/证明主义
    
- 理性与感性，归纳和演绎
    
- ....
    

  

去年读这本书的时候，

硬啃了很久，

很喜欢里面的两个观点。

- 动态社会追求开放、创新的好解释；静态社会遵守旧的坏解释。
    
- 问题是不可避免的，但问题是可以被解决的。
    

![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MDAwODNhZmExN2IyMDAwZWQ2Y2QzMTJhMmYwYWQ2M2NfQmE3NjZFek1ibXFHdjRRU3libkhsOGVBVkVsUlJveWtfVG9rZW46VENGOWIzYUtGb3hFdjl4ZFFCY2NtQ2tubnRlXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=YjQ5ZGQxZjE4ODVkZTJiYTViZTRiZTE5MGJhODljYjdfeUpvdE9OT2VsY2tUSEtURHBTZHF3eGU0MVMxR080NFdfVG9rZW46RTZBVGJqZGFDb0Y3V3B4SUppTWNsTFp1bnViXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)![](https://f6kdiz36ir.feishu.cn/space/api/box/stream/download/asynccode/?code=MmYzNGFkMmJhOWY1MjFjNGIxMmE3ZWM1Y2FkZTA0YzFfcWNNM0czMTVyOG5OZWl1aXBmUlBuQmRLNVNkR1FRUWtfVG9rZW46RGdYZmJ4T2Rsbzk3Ull4UlB2QmNZMFhtbkZmXzE3NzI4MDM4NDY6MTc3MjgwNzQ0Nl9WNA)

  

我觉得这两个观点，

在当前这个情况下，

对个人、组织都应该能有点输入。

  

但倘若你有时间，

对哲学、文化、价值观有兴趣，

不妨也可以读一读此书。

  

## 六、写在最后

实际上，整篇文章更想突出三个关键词，

**“开放、迭代、频率”。**

  

具体而言

- 保持开放谦逊的心态，让新信息流动。
    
- 建立反馈迭代机制，认错改错。
    
- 适配上时代频率，快中有慢。
    

  

结合近几日在读《刷新》这本书

个人认为，支撑到上方这三点，

需要具备相应的世界观，

对于组织而言，也许是环境中的文化、价值观。

  

我有一个不成熟的观点（不一定对）：

在未来多变的时代下，

技术工程能力固然重要，

但个人的世界观/价值观越为重要。

  

> 如果你觉得本文还不错的话，能给文章和仓库点小小的点赞、转发、交流就更好了～
> 
> - 代码仓库：https://github.com/hua-bang/pulse-agent 求求 star 🥺
>     

  

## 关于 Pulse Agent

关于 Pulse Agent 这个项目

目前我并没有做很多开箱即用的能力，

即目前可能需要配置比较多环境变量，

也许才能丝滑跑起来。

  

且 Pulse Agent 目前更多是基于个人情况开发，

多人使用的安全性我也还没能来评估，

且里面的使用交互、习惯都可能会偏向我个人。

  

最重要的是，适合我的不一定适合你，

所以我并不建议你使用 Pulse Agent，

因为他的交互体验并非大众，

且短期看是没有工具生态。

**写这篇文章更多是为了记录、分享、交流**。

  

就像我觉得 OpenClaw 目前还不太适合我，

OpenClaw 有优点有缺点

- 优点：开箱即用，生态丰富、社区内容多
    
- 缺点：早期安全性、稳定性需建设。
    

所以我自己开始捣鼓捣鼓。

  

但最重要的是，你应该找到适合自己的。

Pulse Agent 不适合你，

但 OpenClaw 也未必符合你的需求。

**Build your agent based on your taste**.

  

## 参考资料

> 持续补充中，还没补完

**Github** **仓库**：

- https://github.com/badlogic/pi-mono
    
- https://github.com/anomalyco/opencode
    
- https://github.com/openclaw/openclaw
    
- https://github.com/openai/codex
    
- https://github.com/MoonshotAI/kimi-cli
    

  

**Agent**

- GPT
    
- Claude
    
- Gemini
    
- Pulse Agent