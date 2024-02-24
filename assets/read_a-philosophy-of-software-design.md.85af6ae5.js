import{_ as a,o as e,c as s,Q as t}from"./chunks/framework.99c7eb0c.js";const f=JSON.parse('{"title":"A Philosophy of Software Design","description":"","frontmatter":{"title":"A Philosophy of Software Design","customTag":"read>计算机","editLink":true},"headers":[],"relativePath":"read/a-philosophy-of-software-design.md","filePath":"read/a-philosophy-of-software-design.md","lastUpdated":1708746717000}'),o={name:"read/a-philosophy-of-software-design.md"},r=t('<h1 id="a-philosophy-of-software-design" tabindex="-1">A Philosophy of Software Design <a class="header-anchor" href="#a-philosophy-of-software-design" aria-label="Permalink to &quot;A Philosophy of Software Design&quot;">​</a></h1><p>最近在读 A Philosophy of Software Design, 即软件设计的哲学。</p><p>作者 John Ousterhout 认为<strong>软件设计的最大目标，就是降低复杂性</strong>。并通过自己的实践经验，沉淀了软件设计的原则以及技巧，从而利用降低复杂性来指导软件设计的整个生命周期。</p><p>全书的总体目标主要有两个：</p><ul><li><strong>理解/识别复杂性</strong>：“复杂性”是什么意思，为什么重要，以及当程序具有不必要的复杂性时如何识别？</li><li><strong>减少复杂性</strong>：介绍可在软件开发过程中使用的技术，以最大程度地减少复杂性。</li></ul><h2 id="一、复杂性是什么" tabindex="-1">一、复杂性是什么 <a class="header-anchor" href="#一、复杂性是什么" aria-label="Permalink to &quot;一、复杂性是什么&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Complexity is anything related to the structure of a software system that makes it hard to understand and modify the system.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Complexity is anything related to the structure of a software system that makes it hard to understand and modify the system.</span></span></code></pre></div><p>文中指出，<strong>复杂性是指那些让系统难以理解或修改的与系统相关的任何事物</strong>。</p><h3 id="_1-1-复杂性造成的影响" tabindex="-1">1.1 复杂性造成的影响 <a class="header-anchor" href="#_1-1-复杂性造成的影响" aria-label="Permalink to &quot;1.1 复杂性造成的影响&quot;">​</a></h3><p>作者认为，复杂性一般通过三种方式表现出来，而这里的每一个都使得软件开发更为困难。</p><ul><li><strong>变更放大</strong>：指的是当需要对系统进行修改时，即使是小的变更也需要在多个地方进行修改，从而放大了变化的影响。这种情况虽然麻烦，但只要明确知道需要修改哪些代码，系统在完成变更后仍然可以正常工作。</li><li><strong>认知负载</strong>：涉及到理解和修改系统所需的心智成本。高认知负荷会增加进行更改的成本，但如果清楚知道需要阅读哪些信息，更改仍然有可能是正确的。这表明，即使系统复杂，有足够的信息和指引也可以有效地进行修改。</li><li><strong>未知的未知</strong>：指的是在系统中存在的不确定性，使得开发者不清楚如何进行修改，甚至不确定提出的解决方案是否可行。在这种情况下，唯一确保解决方案正确性的方法可能是阅读系统中的每一行代码，这极大地增加了修改的难度和不确定性。</li></ul><p>其中变更放大和认知负载大多情况下，我们是可以获取具体的信息，并作出修改决策的。但未知的未知是最糟糕的。一个未知的未知意味着你需要知道一些事情，但是你没有办法找到它是什么，甚至是否只有一个问题。</p><h3 id="_1-2-复杂性是递增的" tabindex="-1">1.2 复杂性是递增的 <a class="header-anchor" href="#_1-2-复杂性是递增的" aria-label="Permalink to &quot;1.2 复杂性是递增的&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Complexity isn’t caused by a single catastrophic error;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Complexity isn’t caused by a single catastrophic error;</span></span></code></pre></div><p>复杂性不是由单个灾难性错误引起的。它是由小块堆积而成的。复杂性的增量性质使其难以控制。可以很容易地说服自己，当前更改所带来的一点点复杂性没什么大不了的。但是，如果每个开发人员对每种更改都采用这种方法，那么复杂性就会迅速累积。一旦积累了复杂性，就很难消除它，因为修复单个依赖项或模糊性本身不会产生很大的变化。</p><h2 id="二、复杂性的原因" tabindex="-1">二、复杂性的原因 <a class="header-anchor" href="#二、复杂性的原因" aria-label="Permalink to &quot;二、复杂性的原因&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Complexity is caused by two things: **dependencies** and **obscurity**.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Complexity is caused by two things: **dependencies** and **obscurity**.</span></span></code></pre></div><p>作者认为，复杂性的原因主要有两个：<strong>依赖性和模糊性</strong>。</p><ul><li><strong>依赖性</strong>：当无法孤立地理解和修改给定的一段代码时，便存在依赖关系。不过，依赖关系是软件的基本组成部分，不能完全消除。软件设计的目标之一是减少依赖关系的数量，并使依赖关系保持尽可能简单和明显。</li><li><strong>模糊性</strong>：当我们无法获取模块的重要信息时，就会存在模糊。比如：变量命名的不准确，复杂函数缺乏注释，注释不精准，复杂的设计不提供文档。</li></ul><p>同时，这两个特性可能同时作用，比如，正是因为依赖性不清晰，从而导致模糊性的进一步加深。</p><p><strong>复杂性来自于依赖性和模糊性的积累</strong>。随着复杂性的增加，它会导致变化放大，高认知负荷和未知的未知数。最重要的是，<strong>复杂性使得修改现有代码库变得困难且冒险</strong>。</p><h2 id="三、如何降低复杂性" tabindex="-1">三、如何降低复杂性 <a class="header-anchor" href="#三、如何降低复杂性" aria-label="Permalink to &quot;三、如何降低复杂性&quot;">​</a></h2><p>全文作者也列举了很多设计原则，如<strong>战术&amp;战略编程，模块深浅封装、文档注释、变量命名、一致性、抽象</strong>等。</p><p>由于篇幅问题，这里仅介绍下方几点对我个人印象比较深刻的几点</p><h3 id="_3-1-战术-战略编程" tabindex="-1">3.1 战术&amp;战略编程 <a class="header-anchor" href="#_3-1-战术-战略编程" aria-label="Permalink to &quot;3.1 战术&amp;战略编程&quot;">​</a></h3><ul><li>战术编程：关注于解决眼前的具体问题。</li><li>战略编程：考虑整个系统的可维护性和可扩展性。</li></ul><p>作者强调，优秀的软件设计需要平衡这两者，即在日常编程中不仅要注重立即的问题解决（战术），也要从整体上规划和设计（战略），以确保软件随时间的发展仍能高效运作。</p><h3 id="_3-2-模块深浅封装" tabindex="-1">3.2 模块深浅封装 <a class="header-anchor" href="#_3-2-模块深浅封装" aria-label="Permalink to &quot;3.2 模块深浅封装&quot;">​</a></h3><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240224115032.png" alt="image.png"> 模块的封装不应仅仅是表面上的，而需要深入考虑如何隐藏内部实现的细节，同时提供清晰、简洁的接口。</p><p>深封装强调在模块的设计中追求“深度”，即通过少量强大的概念和功能实现丰富的功能，而浅封装可能只是简单地隐藏了实现细节而未真正减少复杂性。</p><h3 id="_3-3-一致性" tabindex="-1">3.3 一致性 <a class="header-anchor" href="#_3-3-一致性" aria-label="Permalink to &quot;3.3 一致性&quot;">​</a></h3><p>一致性是降低软件复杂性的关键原则之一。它要求软件的设计、实现及文档在风格和结构上保持一致，包括编码风格、命名约定和设计模式等。</p><p>一致性可以减少学习和理解代码的难度，使得维护和扩展变得更加容易。</p><h3 id="_3-4-不同的层-不同的抽象" tabindex="-1">3.4 不同的层，不同的抽象 <a class="header-anchor" href="#_3-4-不同的层-不同的抽象" aria-label="Permalink to &quot;3.4 不同的层，不同的抽象&quot;">​</a></h3><p>软件通常被设计为多层结构，每一层都应该基于适当的抽象级别工作。底层关注于具体实现和性能优化，而高层则应更加关注业务逻辑和用户界面。通过在不同的层次采用不同级别的抽象，可以清晰地分离关注点，降低整体复杂性。</p><p>当然，里面的一些设计思路和技巧还有很多，如<strong>注释早于编码、设计两次、变量命名等</strong>都是不错的设计思想。</p><p>在这里，个人理解降低复杂度可以总结为三点</p><ul><li><strong>封装，减少依赖信息</strong>：封装隐藏细节，减少模块间依赖，简化系统复杂性。</li><li><strong>提供准确有用的信息</strong>：明确文档和注释帮助快速理解系统，减少误解。</li><li><strong>迭代和重构</strong>：通过迭代改进和定期重构维护代码清晰度和系统灵活性。</li></ul><h2 id="四、总结" tabindex="-1">四、总结 <a class="header-anchor" href="#四、总结" aria-label="Permalink to &quot;四、总结&quot;">​</a></h2><p>这本书是关于一件事的：复杂性。处理复杂性是软件设计中最重要的挑战。</p><p>在本书的过程中，作者试图描述导致复杂性的根本原因，依赖性和模糊性，并给了我们降低复杂性的一些设计思想。</p><p>但知易行难，这个过程还需要我们在日常中具体实践，我们才能更好地理解和运用，并且可能我们也会更新自己的设计哲学。</p><h2 id="五、参考链接" tabindex="-1">五、参考链接 <a class="header-anchor" href="#五、参考链接" aria-label="Permalink to &quot;五、参考链接&quot;">​</a></h2><ul><li><a href="https://www.amazon.com/Philosophy-Software-Design-John-Ousterhout/dp/1732102201" target="_blank" rel="noreferrer"><strong>A Philosophy of Software Design</strong></a></li></ul>',44),i=[r];function n(l,p,h,d,c,g){return e(),s("div",null,i)}const m=a(o,[["render",n]]);export{f as __pageData,m as default};
