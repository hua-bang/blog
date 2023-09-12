# 亚马逊云科技社区嘉年华

:::tip
- Tags: AIGC, 互联网, 创业思考, 线下活动

- Date: August 27, 2023

- HightLight: 
1. https://www.notion.so/7d28469ed4c2497fa22bcf8a67c56cdc?pvs=21
2.  https://www.notion.so/7d28469ed4c2497fa22bcf8a67c56cdc?pvs=21
3. https://www.notion.so/7d28469ed4c2497fa22bcf8a67c56cdc?pvs=21
4. https://www.notion.so/7d28469ed4c2497fa22bcf8a67c56cdc?pvs=21
5. CVP：用知识库改进大模型 (https://www.notion.so/CVP-d606b67a82c0497ba4fa265c2eb505ae?pvs=21)

:::

## 生成式 AI 项目的实践范式

创新：生成式 AI + 降本提效。

模型使用：用特定的 model 处理特定业务的 workflow 节点。

AI 的冰山：

- 冰上之上 模型能力
- 冰上之下 数据准备、分析、数据库、数据集成。

生成 AI 应用公式：提示词 + 上下文 + 模型 = 输出结果。

- 应用模式1：上下文提示工程(prompt)
- 应用模式2：检索增强生成(RAG)
- 应用模式3:微调基础模型(fine ture)
- 应用模型4:训练自己的模型(customer model)。

数据是差异化的优势之一。

流程：Data Source → Store & Query → Act

产品: Amazon OpenSearch、CodeWhisper、QuickSight

生成式 AI = 企业数据 + 企业数据端到端数据贡献。

## Is Working Software Still Top Priority

- 软件是载体，功能才是你的知识。
- transform learning
- Requirement + Content（KnowLedge） + LLM
- 知识库 + 工作流。
- LLM powered autonomous agent.
- LLM as a general knowledge runner

## 普通人如何抓住 AIGC 时代的机遇

**AIGC 的影响：**软件重构 + 中间层消失 + 自动化加速。人机协作提升协作、社会阶层分裂。

普通人结合 AIGC 领域：工作、生活、教育。

## 如何在工作中被“看到”

**SEEN Framework**

- **S**hare your work. 分享你做了啥
- **E**xport of a domain. 成为一个具体领域的能手
- **E**mpower others,赋能其他人
- **N**ew ideas 思路打开

## Generative AI 新世界：过去、现在和未来

### 概述

- Transformer “Attention IS All You Need”
    - 重要贡献：并行计算、注意力（关联上下文）。
- 应用

### 构建实践

- Text Generation
    - Llama-2 7B/70B
- Text to Image
    - Stable Diffusion XL 开源
- Code Generation
    - Amazon CodeWhisperer

### 生成式 AI/LLMs 前沿

- RAG
- REFT
- LoRA/QLoRA

### MARK

1. 了解 transformer、 token 模型
2. 关注大语言模型的变化
3. 前沿的构建范式。

## 生成式 AI 的加速范式

**痛点**：

- 模型尺寸大
- 内存占用大
- 推理速度慢
- 优化难度高
- 无法灵活切换负载

**解决方案**：OpenViNO，基于 AI 推理的模型套件。 OpenViNO-NoteBook

- 减少模型尺寸
- 减少内存占用
- 推理速度快
- 策略性优化
- 灵活负载

## AIGC 模型端到端服务开发实践目标

### 目标

1. 项目开发中涉及的需求设计编码测试编码等 AI 赋能
2. 不是 GitHub Copilot 工具，不是低代码平台
3. 也不是一端入，另一端出的开发工具。

### **项目**

将项目从非结构化和非体系化 ——> 结构化 + 体系化。

当项目结构化和体系化可以帮每个流程都处理掉。

## Prompt Engineering for Everyone

### Large Language Model Basics

### Instruction to Prompts

- intuition Behind Prompts
- Everyone Can Program with Prompts.

### Common Prompt Patterns

- Communication-based Patterns
    - Format of Persona Pattern
        - Act as a person who xxx, you will tell me
    - Format of Question Refinement Pattern
        - From now on, whenever I ask a question, suggest a better version of the question to use instead.
    - Format of ad Person, explain
    - Format of Cognitive Verifier Pattern
- Interaction based Patterns
    - Flipped Interaction Pattern
    - Format ask me for the first question
- Text Creation Patterns
    - Template Pattern:${替换词}
- Info manager

## 向量数据库 —> 知识库 —> 改进大模型

### 向量数据库

### 大模型局限性

- 缺乏领域特定信息
- 容器产生幻觉
- 无法获取最新信息
- 不变的预训练数据

### CVP：用知识库改进大模型

- ChatGPT / LLM
- Vector database
- Prompt as code