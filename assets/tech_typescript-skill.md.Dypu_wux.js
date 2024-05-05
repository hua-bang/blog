import{_ as e,c as t,o as p,a3 as a}from"./chunks/framework.DbBdm8su.js";const u=JSON.parse('{"title":"TypeScript 类型编程小技巧","description":"","frontmatter":{"title":"TypeScript 类型编程小技巧","customTag":"tech>TypeScript","editLink":true},"headers":[],"relativePath":"tech/typescript-skill.md","filePath":"tech/typescript-skill.md","lastUpdated":1714888650000}'),r={name:"tech/typescript-skill.md"},i=a('<h1 id="typescript-类型编程小技巧" tabindex="-1">TypeScript 类型编程小技巧 <a class="header-anchor" href="#typescript-类型编程小技巧" aria-label="Permalink to &quot;TypeScript 类型编程小技巧&quot;">​</a></h1><p><code>TypeScript</code> 可以通过类型编程去灵活生成我们想要的类型。下面我们就来讲讲其中的一些小技巧吧。</p><h2 id="三种类型系统" tabindex="-1">三种类型系统 <a class="header-anchor" href="#三种类型系统" aria-label="Permalink to &quot;三种类型系统&quot;">​</a></h2><p>首先，我们先来讲讲类型系统。</p><h3 id="简单类型系统" tabindex="-1">简单类型系统 <a class="header-anchor" href="#简单类型系统" aria-label="Permalink to &quot;简单类型系统&quot;">​</a></h3><p>最基础的类型系统，保证了类型安全，但只有最基础的类型设置，类型灵活性比较低。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be505c186be5415ab9c28019436c272b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h3 id="支持泛型的类型系统" tabindex="-1">支持泛型的类型系统 <a class="header-anchor" href="#支持泛型的类型系统" aria-label="Permalink to &quot;支持泛型的类型系统&quot;">​</a></h3><p>进阶一点的，其实就是我们支持泛型的类型系统，我们可以通过我们泛型系统和指定的参数去生成我们指定的类型，增加了类型的灵活性。</p><blockquote><p>泛型提供了编译时类型安全检测机制，该机制允许开发在编译时检测到非法的类型。 泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数。</p></blockquote><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67d060e9c18f458c966b720b31a4db87~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h3 id="支持类型编程的类型系统" tabindex="-1">支持类型编程的类型系统 <a class="header-anchor" href="#支持类型编程的类型系统" aria-label="Permalink to &quot;支持类型编程的类型系统&quot;">​</a></h3><p>支持对传入的类型参数做逻辑运算，并且能够产生新类型的类型系统，这种操作也就是字面意义的类型编程，这大大提高了类型系统的灵活性。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3b3118b42084439aeaaa7bb719b57af~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h2 id="类型编程-类型体操" tabindex="-1">类型编程？类型体操？ <a class="header-anchor" href="#类型编程-类型体操" aria-label="Permalink to &quot;类型编程？类型体操？&quot;">​</a></h2><p><code>TypeScript</code>很明显就是支持类型编程的类型系统，类型编程提供了高度的灵活性。</p><p><code>TypeScript</code>是图灵完备的，我们能够用TS所提供的语法以及基础工具，去进行条件判断，递归，类型推断等操作去，同时我们进行复杂的组合计算，获得新的类型，从而可以去实现<code>Pick</code>等内置泛型工具, <code>斐波那契数列</code>,<code>中国象棋</code>,<code>Lisp解释器</code>,<code>HypeScript</code>类型系统，这也被称为<code>类型体操</code>。</p><h1 id="类型编程的小技巧" tabindex="-1">类型编程的小技巧 <a class="header-anchor" href="#类型编程的小技巧" aria-label="Permalink to &quot;类型编程的小技巧&quot;">​</a></h1><h2 id="前置知识" tabindex="-1">前置知识 <a class="header-anchor" href="#前置知识" aria-label="Permalink to &quot;前置知识&quot;">​</a></h2><p>在接触类型编程/体操，我们需要对<code>TypeScript</code>的基础有一定了解和熟悉，这能让我们更加好的理解。</p><h3 id="条件类型" tabindex="-1">条件类型 <a class="header-anchor" href="#条件类型" aria-label="Permalink to &quot;条件类型&quot;">​</a></h3><p><code>extends</code>的写法，有点类似于三目运算符。</p><blockquote><p>简单理解：如果<code>T</code>包含的类型 是 <code>U</code>包含的类型的 &#39;子集&#39;，那么取结果<code>X</code>，否则取结果<code>Y</code></p></blockquote><p>typescript</p><p>复制代码</p><p><code>T extends U ? X : Y</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c993d30933bb49898a13f69a896fb8a2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h3 id="infer推断" tabindex="-1"><code>infer</code>推断 <a class="header-anchor" href="#infer推断" aria-label="Permalink to &quot;`infer`推断&quot;">​</a></h3><p><code>infer</code>, 能够推断出变量的类型，但是，只能在条件语句<code>extends</code>下进行使用。</p><p>typescript</p><p>复制代码</p><p><code>type ReturnType&lt;T&gt; = T extends (...args: any[]) =&gt; infer R ? R : never;</code></p><h3 id="元组操作" tabindex="-1">元组操作 <a class="header-anchor" href="#元组操作" aria-label="Permalink to &quot;元组操作&quot;">​</a></h3><p>元祖我们可以理解为定长、定类型的数组。</p><p>typescript</p><p>复制代码</p><p><code>type Tunple = [1, &#39;string&#39;, false];</code></p><p>元组的核心在于<code>...</code>和<code>infer</code>的结合。</p><p>typescript</p><p>复制代码</p><p><code>type concat&lt;A extends any[], B extends any[]&gt; = [...A, ...B]; type GetFirst&lt;T extends any[]&gt; = T extends [infer First, ...infer any[]] ? First : never;</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6addddd88d8240ec83d4460b16b989c1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h3 id="泛型工具" tabindex="-1">泛型工具 <a class="header-anchor" href="#泛型工具" aria-label="Permalink to &quot;泛型工具&quot;">​</a></h3><blockquote><p><code>TypeScript</code>中,有内置一些泛型工具,提供我们做类型转换。</p></blockquote><p>这里的话就不加多介绍了， 可以查阅TS的文档<a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2Futility-types.html" title="https://www.typescriptlang.org/docs/handbook/utility-types.html" target="_blank" rel="noreferrer">Documentation - Utility Types</a>。</p><table><thead><tr><th>Partial</th><th>Required</th><th>Readonly</th><th>Record&lt;Keys, Type&gt;</th><th>Pick&lt;Type, Keys&gt;</th><th>Omit&lt;Type, Keys&gt;</th><th>Exclude&lt;UnionType, ExcludedMembers&gt;</th></tr></thead><tbody><tr><td>Extract&lt;Type, Union&gt;</td><td>NonNullable</td><td>Parameters</td><td>ConstructorParameters</td><td>ReturnType</td><td>InstanceType</td><td>ThisParameterType</td></tr><tr><td>OmitThisParameter</td><td>ThisType</td><td>Uppercase</td><td>Lowercase</td><td>Capitalize</td><td>Uncapitalize</td><td></td></tr></tbody></table><p>当然, <code>TypeScript</code>的基础当然不止这么多，还有<code>索引类型</code>,<code>as</code>等。</p><h2 id="模式匹配" tabindex="-1">模式匹配 <a class="header-anchor" href="#模式匹配" aria-label="Permalink to &quot;模式匹配&quot;">​</a></h2><p>想象一个场景，如果我们想提取元组的最后一个元素的类型。</p><p>这个时候，其实我们可以借助<code>infer</code>这个工具来满足我们的需求。</p><h3 id="getlast" tabindex="-1">GetLast <a class="header-anchor" href="#getlast" aria-label="Permalink to &quot;GetLast&quot;">​</a></h3><p>实现一个类型，用于提取元组的最后一个元素类型。</p><p>typescript</p><p>复制代码</p><p><code>type GetLast&lt;T extends unknown[]&gt; = T extends [...any[], infer Last] ? Last : never;</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a077246fe294d899b642b5e3d9a65e9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h3 id="getfirst" tabindex="-1">GetFirst <a class="header-anchor" href="#getfirst" aria-label="Permalink to &quot;GetFirst&quot;">​</a></h3><p>实现一个类型，用于提取元组的第一个元素类型。</p><p>typescript</p><p>复制代码</p><p><code>type GetFirst&lt;Arr extends unknow[]&gt; = Arr extends [infer First, ...unknown[]] ? First : never;</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d9451fdff34438ebc9700f026e86a25~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h3 id="startswith" tabindex="-1">StartsWith <a class="header-anchor" href="#startswith" aria-label="Permalink to &quot;StartsWith&quot;">​</a></h3><p>判断字符串是否以某个前缀开头。</p><p>typescript</p><p>复制代码</p><p><code>type StartsWith&lt; Str extends string, Prefix extends string &gt; = Prefix extends &#39;&#39; ? true : Str extends `${Prefix}${string}` ? true : false;</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/18347e7df07e4e2ea02e196831c2a18c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h3 id="getparameters" tabindex="-1">GetParameters <a class="header-anchor" href="#getparameters" aria-label="Permalink to &quot;GetParameters&quot;">​</a></h3><p>实现一个Parameters泛型工具。</p><p>typescript</p><p>复制代码</p><p><code>type GetParameters&lt;Func extends Function&gt; = Func extends ( ...args: infer Parameters ) =&gt; any ? Parameters : never;</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/597bd99be21c4308bc56f6bea26487f3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>模式匹配可以用在数组、字符串、函数等，实际上是我们去为类型构建对应的条件，从而利用<code>extends</code>和<code>infer</code>两个基础工具，去对我们产生的新类型进行构造，<code>伪代码</code>表示。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd749c2fe86a405481d9fb9ded9365e9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h2 id="重新构造" tabindex="-1">重新构造 <a class="header-anchor" href="#重新构造" aria-label="Permalink to &quot;重新构造&quot;">​</a></h2><p>注意，我们都知道TS中的类型不会像我们的变量那样支持重新赋值的，即我们用<code>type</code>,<code>infer</code>,<code>泛型参数</code>都是唯一确定的，无法修改的，这个时候我们要产生新的类型就要对类型去进行修改。</p><h3 id="appendargument" tabindex="-1">AppendArgument <a class="header-anchor" href="#appendargument" aria-label="Permalink to &quot;AppendArgument&quot;">​</a></h3><p>实现一个函数，对函数类型的，往函数类型里面添加新的类型参数。</p><p>typescript</p><p>复制代码</p><p><code>type AppendArgument&lt;Fun extends Function, Ele&gt; = Fun extends (...args: infer OriginArgs) =&gt; any ? (...args: [Ele, ...OriginArgs]) =&gt; any : void;</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7189c2c7962145b69b5a0b1e042b3478~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h3 id="replacestr" tabindex="-1">ReplaceStr <a class="header-anchor" href="#replacestr" aria-label="Permalink to &quot;ReplaceStr&quot;">​</a></h3><p>我们实现字符串类型中的指定字符的替换。</p><p>typescript</p><p>复制代码</p><p><code>type ReplaceStr&lt; Str extends string, From extends string, To extends string &gt; = Str extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}` : Str;</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b77ae13d26641a183cd0e2e84947451~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h3 id="paritalbykeys" tabindex="-1">ParitalByKeys <a class="header-anchor" href="#paritalbykeys" aria-label="Permalink to &quot;ParitalByKeys&quot;">​</a></h3><p>实现一个根据<code>Key</code>值过滤的Parital。</p><p>typescript</p><p>复制代码</p><p><code>type PartialByKeys&lt;T, K = keyof T&gt; = { [P in keyof T as P extends K ? never : P]: T[P] } &amp; { [P in keyof T as P extends K ? P : never]?: T[P] } extends infer A ? { [P in keyof A]: A[P] } : never;</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e5467ff98764e0ea4dfd64cc43a1d6b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>重新构造的点也在于，我们如何<strong>提取</strong>，以及如何<strong>构造</strong>， <code>伪代码</code>表示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e4ddf95a82e4286b8ef3b1b3f70ea79~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h2 id="递归操作" tabindex="-1">递归操作 <a class="header-anchor" href="#递归操作" aria-label="Permalink to &quot;递归操作&quot;">​</a></h2><p><code>TS</code>中是支持我们去做递归计算的，不过最好结合<code>extends</code>和<code>infer</code>。</p><blockquote><p><strong>递归的基本要素</strong></p><p>基线条件：确定递归到何时终止，函数不再调用自己，也称为递归出口； 递归条件：函数调用自己，将大问题分解为类似的小问题，也称为递归体。</p></blockquote><h3 id="deepawaited" tabindex="-1">DeepAwaited <a class="header-anchor" href="#deepawaited" aria-label="Permalink to &quot;DeepAwaited&quot;">​</a></h3><p>实现一个嵌套<code>Promise</code>的提取。</p><p>typescript</p><p>复制代码</p><p><code>type DeepAwaited&lt;T&gt; = T extends Promise&lt;infer R&gt; ? R extends Promise&lt;infer P&gt; ? DeepAwaited&lt;P&gt; : R : T; type Test = DeepAwaited&lt;Promise&lt;Promise&lt;Promise&lt;Promise&lt;Promise&lt;number&gt;&gt;&gt;&gt;&gt;&gt;</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b45e1d9c5688430e8612f1f14ebc7bf4~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h3 id="replaceall" tabindex="-1">ReplaceAll <a class="header-anchor" href="#replaceall" aria-label="Permalink to &quot;ReplaceAll&quot;">​</a></h3><p>之前实现了<code>Reaplce</code>, 当时只支持了一次匹配替换，接下来，我们可以在原来的基础上加上递归操作。</p><p>typescript</p><p>复制代码</p><p><code>type ReplaceAll&lt; Str extends string, From extends string, To extends string &gt; = Str extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${ReplaceAll&lt;Suffix, From, To&gt;}` : Str;</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e5d9fb3411b4699a4124199da65801b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h3 id="reverse" tabindex="-1">Reverse <a class="header-anchor" href="#reverse" aria-label="Permalink to &quot;Reverse&quot;">​</a></h3><p>实现一个类型，类似于<code>Array.reverse</code></p><p>typescript</p><p>复制代码</p><p><code>type Reverse&lt;T extends any[]&gt; = T extends [...(infer Rest), infer Last] ? [Last, ...Reverse&lt;Rest&gt;] : [];</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21f749d763c84f52ab3cdae5233fe52e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h3 id="buildarr" tabindex="-1">BuildArr <a class="header-anchor" href="#buildarr" aria-label="Permalink to &quot;BuildArr&quot;">​</a></h3><p>实现一个类型，构建数组。</p><p>typescript</p><p>复制代码</p><p><code>type BuildArr&lt; Length extends number, Ele = unknown, Arr extends unknown[] = [] &gt; = Arr[&#39;length&#39;] extends Length ? Arr : BuildArr&lt;Length, Ele, [...Arr, Ele]&gt;;</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef97ffa719b8440ca540e16007a36dba~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>递归操作注意<strong>递归出口</strong>+<strong>递归体</strong>， <code>伪代码</code>表示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf9102a8c42a4cc28767f744d6362be2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h2 id="类型计数" tabindex="-1">类型计数 <a class="header-anchor" href="#类型计数" aria-label="Permalink to &quot;类型计数&quot;">​</a></h2><h3 id="lengthofstring" tabindex="-1">LengthOfString <a class="header-anchor" href="#lengthofstring" aria-label="Permalink to &quot;LengthOfString&quot;">​</a></h3><p>实现一个类型，可以统计传入的字符串字面量的长度。</p><p>typescript</p><p>复制代码</p><p><code>type LengthOfString&lt;S extends string, Result extends string[] = []&gt; = S extends `${infer First}${infer Next}` ? LengthOfString&lt;Next, [...Result, First]&gt; : Result[&#39;length&#39;];</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/925e57de53654f1abed486bba23d586a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h3 id="add" tabindex="-1">Add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;Add&quot;">​</a></h3><p>实现一个类型加法。</p><p>typescript</p><p>复制代码</p><p><code>type Add&lt;num1 extends number, num2 extends number&gt; = [ ...BuildArr&lt;num1&gt;, ...BuildArr&lt;num2&gt;, ][&#39;length&#39;];</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f17c6a90da474e72a9e468d1db110a7e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>数值一般是对数组进行操作，并提取他的<code>length</code>属性, <code>伪代码</code>表示。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d41597c108fd482fa1db47c430596228~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><h1 id="类型编程的意义" tabindex="-1">类型编程的意义 <a class="header-anchor" href="#类型编程的意义" aria-label="Permalink to &quot;类型编程的意义&quot;">​</a></h1><ul><li><p>技术上类型理解</p></li><li><p>业务开发中的规范</p></li><li><p>类型编程？类型体操？</p></li></ul><p><strong>类型编程能帮助你更好地理解复杂类型编程的底层原理，同时类型编程可以通过类型运算产出更准确的类型，也能够让你获得独立解决各种类型问题的能力。</strong></p><h1 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h1><p><strong>Lisp解释器：</strong> <a href="https://juejin.cn/post/7024673107906396190" title="https://juejin.cn/post/7024673107906396190" target="_blank" rel="noreferrer">TypeScript 类型体操天花板，用类型运算写一个 Lisp 解释器 - 掘金</a></p><p><strong>中国象棋</strong>：<a href="https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F426966480" title="https://zhuanlan.zhihu.com/p/426966480" target="_blank" rel="noreferrer">用 TypeScript 类型运算实现一个中国象棋程序</a></p><p><strong>井字棋：</strong> <a href="https://juejin.cn/post/7128621293011730469" title="https://juejin.cn/post/7128621293011730469" target="_blank" rel="noreferrer">TS实现简易的井字棋 - 掘金</a></p><p><strong>HypeScript</strong>: <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fronami%2FHypeScript" title="https://github.com/ronami/HypeScript" target="_blank" rel="noreferrer">GitHub - ronami/HypeScript: 🐬 A simplified implementation of TypeScript&#39;s type system written in Typ</a></p><h1 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h1><ul><li><p><a href="https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fzh-cn%2F%25E9%25A1%259E%25E5%259E%258B%25E7%25B3%25BB%25E7%25B5%25B1%23%25E5%259E%258B%25E5%2588%25A5%25E7%259A%2584%25E5%259E%258B%25E5%2588%25A5" title="https://zh.wikipedia.org/zh-cn/%E9%A1%9E%E5%9E%8B%E7%B3%BB%E7%B5%B1#%E5%9E%8B%E5%88%A5%E7%9A%84%E5%9E%8B%E5%88%A5" target="_blank" rel="noreferrer">类型系统-wiki</a></p></li><li><p><a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ftype-challenges%2Ftype-challenges" title="https://github.com/type-challenges/type-challenges" target="_blank" rel="noreferrer">type-challenges</a></p></li><li><p><a href="https://juejin.cn/book/7047524421182947366" title="https://juejin.cn/book/7047524421182947366" target="_blank" rel="noreferrer">TypeScript 全面进阶指南</a></p></li><li><p><a href="https://juejin.cn/book/7086408430491172901" title="https://juejin.cn/book/7086408430491172901" target="_blank" rel="noreferrer">TypeScript 类型体操通关秘籍</a></p></li><li><p><a href="https://juejin.cn/post/7025619077158666270" title="https://juejin.cn/post/7025619077158666270" target="_blank" rel="noreferrer">TypeScript类型元编程入门指南 - 掘金</a></p></li><li><p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2F" title="https://www.typescriptlang.org/docs/" target="_blank" rel="noreferrer">The starting point for learning TypeScript</a></p></li><li><p><a href="https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F426966480" title="https://zhuanlan.zhihu.com/p/426966480" target="_blank" rel="noreferrer">用 TypeScript 类型运算实现一个中国象棋程序</a></p></li><li><p><a href="https://juejin.cn/post/7024673107906396190" title="https://juejin.cn/post/7024673107906396190" target="_blank" rel="noreferrer">TypeScript 类型体操天花板，用类型运算写一个 Lisp 解释器 - 掘金</a></p></li><li><p><a href="https://juejin.cn/post/6844903901066428423" title="https://juejin.cn/post/6844903901066428423" target="_blank" rel="noreferrer">一文理解静态语言、动态语言、解释型语言、编译型语言、强类型语言、弱类型语言 - 掘金</a></p></li></ul>',152),o=[i];function c(n,s,l,d,h,f){return p(),t("div",null,o)}const m=e(r,[["render",c]]);export{u as __pageData,m as default};
