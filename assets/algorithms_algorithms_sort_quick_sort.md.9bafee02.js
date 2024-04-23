import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.12a92bfb.js";const m=JSON.parse('{"title":"快速排序","description":"","frontmatter":{"title":"快速排序","customTag":"algorithms>算法>排序","editLink":true},"headers":[],"relativePath":"algorithms/algorithms/sort/quick_sort.md","filePath":"algorithms/algorithms/sort/quick_sort.md","lastUpdated":1713833097000}'),p={name:"algorithms/algorithms/sort/quick_sort.md"},o=l(`<h1 id="快速排序" tabindex="-1">快速排序 <a class="header-anchor" href="#快速排序" aria-label="Permalink to &quot;快速排序&quot;">​</a></h1><p>快速排序（quick sort）是一种基于分治策略的排序算法，运行高效，应用广泛。</p><h2 id="基本流程" tabindex="-1">基本流程 <a class="header-anchor" href="#基本流程" aria-label="Permalink to &quot;基本流程&quot;">​</a></h2><p>快速排序的核心操作是“哨兵划分”，其目标是：选择数组中的某个元素作为“基准数”，将所有小于基准数的元素移到其左侧，而大于基准数的元素移到其右侧。具体来说，哨兵划分的流程如图 11-8 所示。</p><ol><li>选取数组最左端元素作为基准数，初始化两个指针  <code>i</code>  和  <code>j</code>  分别指向数组的两端。</li><li>设置一个循环，在每轮中使用  <code>i</code>（<code>j</code>）分别寻找第一个比基准数大（小）的元素，然后交换这两个元素。</li><li>循环执行步骤  <code>2.</code> ，直到  <code>i</code>  和  <code>j</code>  相遇时停止，最后将基准数交换至两个子数组的分界线。 <img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240423083220.png" alt="image.png"> 哨兵划分完成后，原数组被划分成三部分：左子数组、基准数、右子数组，且满足“左子数组任意元素  ≤  基准数  ≤  右子数组任意元素”。因此，我们接下来只需对这两个子数组进行排序。</li></ol><p>本质上是：通过分治，将一个较长数组的排序问题简化为两个较短数组的排序问题。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">partition</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">nums</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">[], </span><span style="color:#FFAB70;">left</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">right</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> left,</span></span>
<span class="line"><span style="color:#E1E4E8;">    j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> right;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> j) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> nums[j] </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> nums[left]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> nums[i] </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> nums[left]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    [nums[i], nums[j]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [nums[j], nums[i]];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  [nums[i], nums[left]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [nums[left], nums[i]];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">quickSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">nums</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">[], </span><span style="color:#FFAB70;">left</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">right</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (left </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> right) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pivot</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">partition</span><span style="color:#E1E4E8;">(nums, left, right);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">quickSort</span><span style="color:#E1E4E8;">(nums, left, pivot </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">quickSort</span><span style="color:#E1E4E8;">(nums, pivot </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, right);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">partition</span><span style="color:#24292E;">(</span><span style="color:#E36209;">nums</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">[], </span><span style="color:#E36209;">left</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">right</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> left,</span></span>
<span class="line"><span style="color:#24292E;">    j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> right;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> j) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> nums[j] </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> nums[left]) {</span></span>
<span class="line"><span style="color:#24292E;">      j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> nums[i] </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> nums[left]) {</span></span>
<span class="line"><span style="color:#24292E;">      i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    [nums[i], nums[j]] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [nums[j], nums[i]];</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  [nums[i], nums[left]] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [nums[left], nums[i]];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">quickSort</span><span style="color:#24292E;">(</span><span style="color:#E36209;">nums</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">[], </span><span style="color:#E36209;">left</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">right</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (left </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> right) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pivot</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">partition</span><span style="color:#24292E;">(nums, left, right);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">quickSort</span><span style="color:#24292E;">(nums, left, pivot </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">quickSort</span><span style="color:#24292E;">(nums, pivot </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, right);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="算法特性" tabindex="-1">算法特性 <a class="header-anchor" href="#算法特性" aria-label="Permalink to &quot;算法特性&quot;">​</a></h2><ul><li><strong>时间复杂度为 𝑂(𝑛log⁡𝑛)、自适应排序</strong>：在平均情况下，哨兵划分的递归层数为 log⁡𝑛 ，每层中的总循环数为 𝑛 ，总体使用 𝑂(𝑛log⁡𝑛) 时间。在最差情况下，每轮哨兵划分操作都将长度为 𝑛 的数组划分为长度为 0 和 𝑛−1 的两个子数组，此时递归层数达到 𝑛 ，每层中的循环数为 𝑛 ，总体使用 𝑂(𝑛2) 时间。（即原数组都排好序了ß）</li><li><strong>空间复杂度为 𝑂(𝑛)、原地排序</strong>：在输入数组完全倒序的情况下，达到最差递归深度 𝑛 ，使用 𝑂(𝑛) 栈帧空间。排序操作是在原数组上进行的，未借助额外数组。</li><li><strong>非稳定排序</strong>：在哨兵划分的最后一步，基准数可能会被交换至相等元素的右侧。</li></ul>`,9),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{m as __pageData,h as default};
