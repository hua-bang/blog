import{_ as i,c as a,a1 as n,o as t}from"./chunks/framework.Bkh0U0ho.js";const E=JSON.parse('{"title":"最大切分乘积问题","description":"","frontmatter":{"title":"最大切分乘积问题","customTag":"algorithms>算法>贪心","date":"2024.06.13","editLink":true},"headers":[],"relativePath":"algorithms/algorithms/greedy/max_product_cutting_problem.md","filePath":"algorithms/algorithms/greedy/max_product_cutting_problem.md","lastUpdated":1731976660000}'),h={name:"algorithms/algorithms/greedy/max_product_cutting_problem.md"};function l(p,s,k,e,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="最大切分乘积问题" tabindex="-1">最大切分乘积问题 <a class="header-anchor" href="#最大切分乘积问题" aria-label="Permalink to &quot;最大切分乘积问题&quot;">​</a></h1><aside> 💡 给定一个正整数 𝑛，将其切分为至少两个正整数的和，求切分后所有整数的乘积最大是多少，如图 15-13 所示。 </aside><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240613215754.png" alt="image.png"></p><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240613215809.png" alt="image.png"></p><h2 id="_1-贪心策略确定" tabindex="-1">1. 贪心策略确定 <a class="header-anchor" href="#_1-贪心策略确定" aria-label="Permalink to &quot;1. 贪心策略确定&quot;">​</a></h2><p>根据经验，两个整数的乘积往往比他们的加和大，我们可以计算出边界条件。</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span></span></code></pre></div><p>如图 15-14 所示，当 𝑛≥4 时，切分出一个2后乘积会变大，<strong>这说明大于等于 4 的整数都应该被切分。</strong></p><p><strong>贪心策略一</strong>：如果切分方案中包含≥4的因子，那么它就应该被继续切分。最终的切分方案只应出现1、2、3这三种因子。</p><p><img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/81c4f4c6-d195-4005-94f8-1a64f864a131/29a50260-4567-41e9-8bf5-65dce5a46916/Untitled.png" alt="Untitled"></p><p>接下来思考哪个因子是最优的。在 1、2、3 这三个因子中，显然 1 是最差的，因为 1×(𝑛−1)&lt;𝑛 恒成立，即切分出 1 反而会导致乘积减小。</p><p>如图 15-15 所示，当 𝑛=6 时，有 3×3&gt;2×2×2 。<strong>这意味着切分出 3 比切分出 2 更优</strong>。</p><p><strong>贪心策略二</strong>：在切分方案中，最多只应存在两个2。因为三个2总是可以替换为两个3，从而获得更大的乘积。</p><p><img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/81c4f4c6-d195-4005-94f8-1a64f864a131/8cf20ff2-7606-4f1b-af08-04ebe82f519b/Untitled.png" alt="Untitled"></p><p>综上所述，可推理出以下贪心策略。</p><ol><li>输入整数 n ，从其不断地切分出因子  3，直至余数为 0、1、2。</li><li>当余数为 0 时，代表 n 是 3 的倍数，因此不做任何处理。</li><li>当余数为 2 时，不继续划分，保留。</li><li>当余数为 1 时，由于 2 * 2 &gt; 1 * 3 ，因此应将最后一个 3 替换为 2。</li></ol><h2 id="_2-代码实现" tabindex="-1">2. 代码实现 <a class="header-anchor" href="#_2-代码实现" aria-label="Permalink to &quot;2. 代码实现&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> maxProductCutting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 贪心地切分出 3 ，a 为 3 的个数，b 为余数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">floor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 当余数为 1 时，将一对 1 * 3 转化为 2 * 2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 当余数为 2 时，不做处理</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>时间复杂度取决于编程语言的幂运算的实现方法</strong>。以 Python 为例，常用的幂计算函数有三种。</p><ul><li>运算符 <code>*</code> 和函数 <code>pow()</code> 的时间复杂度均为  𝑂(log⁡⁡𝑎)</li><li>函数 <code>math.pow()</code> 内部调用 C 语言库的 <code>pow()</code> 函数，其执行浮点取幂，时间复杂度为  𝑂(1)。</li></ul><p>变量 𝑎 和 𝑏 使用常数大小的额外空间，<strong>因此空间复杂度为 𝑂(1)</strong> 。</p>`,21)]))}const o=i(h,[["render",l]]);export{E as __pageData,o as default};