import{_ as i,c as t,o,a3 as l,l as a,a as e}from"./chunks/framework.DbBdm8su.js";const w=JSON.parse('{"title":"亚马逊云科技社区嘉年华","description":"","frontmatter":{"title":"亚马逊云科技社区嘉年华","customTag":"blog>线下活动","editLink":true},"headers":[],"relativePath":"blog/aws-aigc.md","filePath":"blog/aws-aigc.md","lastUpdated":1714888650000}'),r={name:"blog/aws-aigc.md"},n=l('<h1 id="亚马逊云科技社区嘉年华" tabindex="-1">亚马逊云科技社区嘉年华 <a class="header-anchor" href="#亚马逊云科技社区嘉年华" aria-label="Permalink to &quot;亚马逊云科技社区嘉年华&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>Tags: AIGC, 互联网, 创业思考, 线下活动</p></li><li><p>Date: August 27, 2023</p></li><li><p>HightLight:</p></li></ul><ol><li><a href="https://www.notion.so/7d28469ed4c2497fa22bcf8a67c56cdc?pvs=21" target="_blank" rel="noreferrer">https://www.notion.so/7d28469ed4c2497fa22bcf8a67c56cdc?pvs=21</a></li><li><a href="https://www.notion.so/7d28469ed4c2497fa22bcf8a67c56cdc?pvs=21" target="_blank" rel="noreferrer">https://www.notion.so/7d28469ed4c2497fa22bcf8a67c56cdc?pvs=21</a></li><li><a href="https://www.notion.so/7d28469ed4c2497fa22bcf8a67c56cdc?pvs=21" target="_blank" rel="noreferrer">https://www.notion.so/7d28469ed4c2497fa22bcf8a67c56cdc?pvs=21</a></li><li><a href="https://www.notion.so/7d28469ed4c2497fa22bcf8a67c56cdc?pvs=21" target="_blank" rel="noreferrer">https://www.notion.so/7d28469ed4c2497fa22bcf8a67c56cdc?pvs=21</a></li><li>CVP：用知识库改进大模型 (<a href="https://www.notion.so/CVP-d606b67a82c0497ba4fa265c2eb505ae?pvs=21" target="_blank" rel="noreferrer">https://www.notion.so/CVP-d606b67a82c0497ba4fa265c2eb505ae?pvs=21</a>)</li></ol></div><h2 id="生成式-ai-项目的实践范式" tabindex="-1">生成式 AI 项目的实践范式 <a class="header-anchor" href="#生成式-ai-项目的实践范式" aria-label="Permalink to &quot;生成式 AI 项目的实践范式&quot;">​</a></h2><p>创新：生成式 AI + 降本提效。</p><p>模型使用：用特定的 model 处理特定业务的 workflow 节点。</p><p>AI 的冰山：</p><ul><li>冰上之上 模型能力</li><li>冰上之下 数据准备、分析、数据库、数据集成。</li></ul><p>生成 AI 应用公式：提示词 + 上下文 + 模型 = 输出结果。</p><ul><li>应用模式1：上下文提示工程(prompt)</li><li>应用模式2：检索增强生成(RAG)</li><li>应用模式3:微调基础模型(fine ture)</li><li>应用模型4:训练自己的模型(customer model)。</li></ul><p>数据是差异化的优势之一。</p><p>流程：Data Source → Store &amp; Query → Act</p><p>产品: Amazon OpenSearch、CodeWhisper、QuickSight</p><p>生成式 AI = 企业数据 + 企业数据端到端数据贡献。</p><h2 id="is-working-software-still-top-priority" tabindex="-1">Is Working Software Still Top Priority <a class="header-anchor" href="#is-working-software-still-top-priority" aria-label="Permalink to &quot;Is Working Software Still Top Priority&quot;">​</a></h2><ul><li>软件是载体，功能才是你的知识。</li><li>transform learning</li><li>Requirement + Content（KnowLedge） + LLM</li><li>知识库 + 工作流。</li><li>LLM powered autonomous agent.</li><li>LLM as a general knowledge runner</li></ul><h2 id="普通人如何抓住-aigc-时代的机遇" tabindex="-1">普通人如何抓住 AIGC 时代的机遇 <a class="header-anchor" href="#普通人如何抓住-aigc-时代的机遇" aria-label="Permalink to &quot;普通人如何抓住 AIGC 时代的机遇&quot;">​</a></h2><p>**AIGC 的影响：**软件重构 + 中间层消失 + 自动化加速。人机协作提升协作、社会阶层分裂。</p><p>普通人结合 AIGC 领域：工作、生活、教育。</p><h2 id="如何在工作中被-看到" tabindex="-1">如何在工作中被“看到” <a class="header-anchor" href="#如何在工作中被-看到" aria-label="Permalink to &quot;如何在工作中被“看到”&quot;">​</a></h2><p><strong>SEEN Framework</strong></p><ul><li><strong>S</strong>hare your work. 分享你做了啥</li><li><strong>E</strong>xport of a domain. 成为一个具体领域的能手</li><li><strong>E</strong>mpower others,赋能其他人</li><li><strong>N</strong>ew ideas 思路打开</li></ul><h2 id="generative-ai-新世界-过去、现在和未来" tabindex="-1">Generative AI 新世界：过去、现在和未来 <a class="header-anchor" href="#generative-ai-新世界-过去、现在和未来" aria-label="Permalink to &quot;Generative AI 新世界：过去、现在和未来&quot;">​</a></h2><h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h3><ul><li>Transformer “Attention IS All You Need” <ul><li>重要贡献：并行计算、注意力（关联上下文）。</li></ul></li><li>应用</li></ul><h3 id="构建实践" tabindex="-1">构建实践 <a class="header-anchor" href="#构建实践" aria-label="Permalink to &quot;构建实践&quot;">​</a></h3><ul><li>Text Generation <ul><li>Llama-2 7B/70B</li></ul></li><li>Text to Image <ul><li>Stable Diffusion XL 开源</li></ul></li><li>Code Generation <ul><li>Amazon CodeWhisperer</li></ul></li></ul><h3 id="生成式-ai-llms-前沿" tabindex="-1">生成式 AI/LLMs 前沿 <a class="header-anchor" href="#生成式-ai-llms-前沿" aria-label="Permalink to &quot;生成式 AI/LLMs 前沿&quot;">​</a></h3><ul><li>RAG</li><li>REFT</li><li>LoRA/QLoRA</li></ul><h3 id="mark" tabindex="-1">MARK <a class="header-anchor" href="#mark" aria-label="Permalink to &quot;MARK&quot;">​</a></h3><ol><li>了解 transformer、 token 模型</li><li>关注大语言模型的变化</li><li>前沿的构建范式。</li></ol><h2 id="生成式-ai-的加速范式" tabindex="-1">生成式 AI 的加速范式 <a class="header-anchor" href="#生成式-ai-的加速范式" aria-label="Permalink to &quot;生成式 AI 的加速范式&quot;">​</a></h2><p><strong>痛点</strong>：</p><ul><li>模型尺寸大</li><li>内存占用大</li><li>推理速度慢</li><li>优化难度高</li><li>无法灵活切换负载</li></ul><p><strong>解决方案</strong>：OpenViNO，基于 AI 推理的模型套件。 OpenViNO-NoteBook</p><ul><li>减少模型尺寸</li><li>减少内存占用</li><li>推理速度快</li><li>策略性优化</li><li>灵活负载</li></ul><h2 id="aigc-模型端到端服务开发实践目标" tabindex="-1">AIGC 模型端到端服务开发实践目标 <a class="header-anchor" href="#aigc-模型端到端服务开发实践目标" aria-label="Permalink to &quot;AIGC 模型端到端服务开发实践目标&quot;">​</a></h2><h3 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h3><ol><li>项目开发中涉及的需求设计编码测试编码等 AI 赋能</li><li>不是 GitHub Copilot 工具，不是低代码平台</li><li>也不是一端入，另一端出的开发工具。</li></ol><h3 id="项目" tabindex="-1"><strong>项目</strong> <a class="header-anchor" href="#项目" aria-label="Permalink to &quot;**项目**&quot;">​</a></h3><p>将项目从非结构化和非体系化 ——&gt; 结构化 + 体系化。</p><p>当项目结构化和体系化可以帮每个流程都处理掉。</p><h2 id="prompt-engineering-for-everyone" tabindex="-1">Prompt Engineering for Everyone <a class="header-anchor" href="#prompt-engineering-for-everyone" aria-label="Permalink to &quot;Prompt Engineering for Everyone&quot;">​</a></h2><h3 id="large-language-model-basics" tabindex="-1">Large Language Model Basics <a class="header-anchor" href="#large-language-model-basics" aria-label="Permalink to &quot;Large Language Model Basics&quot;">​</a></h3><h3 id="instruction-to-prompts" tabindex="-1">Instruction to Prompts <a class="header-anchor" href="#instruction-to-prompts" aria-label="Permalink to &quot;Instruction to Prompts&quot;">​</a></h3><ul><li>intuition Behind Prompts</li><li>Everyone Can Program with Prompts.</li></ul><h3 id="common-prompt-patterns" tabindex="-1">Common Prompt Patterns <a class="header-anchor" href="#common-prompt-patterns" aria-label="Permalink to &quot;Common Prompt Patterns&quot;">​</a></h3>',46),s=a("ul",null,[a("li",null,[e("Communication-based Patterns "),a("ul",null,[a("li",null,[e("Format of Persona Pattern "),a("ul",null,[a("li",null,"Act as a person who xxx, you will tell me")])]),a("li",null,[e("Format of Question Refinement Pattern "),a("ul",null,[a("li",null,"From now on, whenever I ask a question, suggest a better version of the question to use instead.")])]),a("li",null,"Format of ad Person, explain"),a("li",null,"Format of Cognitive Verifier Pattern")])]),a("li",null,[e("Interaction based Patterns "),a("ul",null,[a("li",null,"Flipped Interaction Pattern"),a("li",null,"Format ask me for the first question")])]),a("li",null,[e("Text Creation Patterns "),a("ul",null,[a("li",{替换词:""},"Template Pattern:$")])]),a("li",null,"Info manager")],-1),c=l('<h2 id="向量数据库-—-知识库-—-改进大模型" tabindex="-1">向量数据库 —&gt; 知识库 —&gt; 改进大模型 <a class="header-anchor" href="#向量数据库-—-知识库-—-改进大模型" aria-label="Permalink to &quot;向量数据库 —&gt; 知识库 —&gt; 改进大模型&quot;">​</a></h2><h3 id="向量数据库" tabindex="-1">向量数据库 <a class="header-anchor" href="#向量数据库" aria-label="Permalink to &quot;向量数据库&quot;">​</a></h3><h3 id="大模型局限性" tabindex="-1">大模型局限性 <a class="header-anchor" href="#大模型局限性" aria-label="Permalink to &quot;大模型局限性&quot;">​</a></h3><ul><li>缺乏领域特定信息</li><li>容器产生幻觉</li><li>无法获取最新信息</li><li>不变的预训练数据</li></ul><h3 id="cvp-用知识库改进大模型" tabindex="-1">CVP：用知识库改进大模型 <a class="header-anchor" href="#cvp-用知识库改进大模型" aria-label="Permalink to &quot;CVP：用知识库改进大模型&quot;">​</a></h3><ul><li>ChatGPT / LLM</li><li>Vector database</li><li>Prompt as code</li></ul>',6),h=[n,s,c];function u(d,p,m,f,g,b){return o(),t("div",null,h)}const q=i(r,[["render",u]]);export{w as __pageData,q as default};
