import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.71c8f1eb.js";const d=JSON.parse('{"title":"二叉树","description":"","frontmatter":{"title":"二叉树","customTag":"algorithms>数据结构>树","editLink":true},"headers":[],"relativePath":"algorithms/data-structure/tree/binary-tree.md","filePath":"algorithms/data-structure/tree/binary-tree.md","lastUpdated":1710977305000}'),p={name:"algorithms/data-structure/tree/binary-tree.md"},o=l(`<h1 id="二叉树" tabindex="-1">二叉树 <a class="header-anchor" href="#二叉树" aria-label="Permalink to &quot;二叉树&quot;">​</a></h1><p>二叉树(<code>Binary tree</code>)是一种每个节点最多只有两个子节点的树类型的数据结构，通常将这两个节点称为左节点和右节点。 树和二叉树的主要区别在于：</p><ul><li>树的节点个数至少为 1，而二叉树的节点个数可以为 0（二叉树允许是空树）</li><li>树中的最大度数（节点数量）没有限制，而二叉树的节点的最大度数为 2</li><li>树的节点没有左右之分，而二叉树的节点有左右之分</li></ul><h2 id="特征" tabindex="-1">特征 <a class="header-anchor" href="#特征" aria-label="Permalink to &quot;特征&quot;">​</a></h2><ul><li>若二叉树的层次从 0 开始，则在二叉树的第  <code>i</code>  层至多有  <code>2^i</code>  个节点（<code>i &gt;= 0</code>） <ul><li><code>i = 1</code>  时，只有一个根节点  <code>2^(i - 1) = 2^ 0 = 1</code></li></ul></li><li>高度为  <code>k</code>  的二叉树最多有  <code>2^(k + 1) - 1</code>  个节点（<code>k&gt;=-1</code>）（空树的高度为  <code>-1</code>） <ul><li><code>i = 2</code>  时，<code>2 ^ (k + 1) - 1 = 2 ^ 3 - 1 = 7</code>  个节点</li></ul></li><li>对任何一棵二叉树，如果其叶子节点（度为 0）数为  <code>m</code>，度为 2 的节点数为  <code>n</code>, 则  <code>m = n + 1</code></li></ul><h2 id="特殊类型" tabindex="-1">特殊类型 <a class="header-anchor" href="#特殊类型" aria-label="Permalink to &quot;特殊类型&quot;">​</a></h2><p>二叉树也分为很多中类型。如<code>满二叉树</code> 或 <code>完全二叉树</code>。</p><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240320080730.png" alt="image.png"></p><h3 id="完全二叉树" tabindex="-1">完全二叉树 <a class="header-anchor" href="#完全二叉树" aria-label="Permalink to &quot;完全二叉树&quot;">​</a></h3><ul><li><strong>概括</strong>：除了最后一层，其他层级都被填满，并且所有的节点都考左侧。</li><li><strong>性质</strong>：</li></ul><h3 id="满二叉树" tabindex="-1">满二叉树 <a class="header-anchor" href="#满二叉树" aria-label="Permalink to &quot;满二叉树&quot;">​</a></h3><ul><li><strong>概括</strong>：所有层的节点都被完全填满。</li><li><strong>性质</strong>： <ul><li>叶节点的度为 0，其他节点的度为 2。</li><li>树的高度为 h, 则节点总数为 2^(h+1)-1</li></ul></li></ul><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">满二叉树</th><th style="text-align:left;">完全二叉树</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>总节点 k</strong></td><td style="text-align:left;"><code>2^(h - 1) &lt;= k &lt;= 2^h - 1</code></td><td style="text-align:left;"><code>k = 2^h - 1</code></td></tr><tr><td style="text-align:left;"><strong>树高 h</strong></td><td style="text-align:left;"><code>h = log2 k + 1</code></td><td style="text-align:left;"><code>h = log2(k + 1)</code></td></tr></tbody></table><h2 id="二叉树搜索" tabindex="-1">二叉树搜索 <a class="header-anchor" href="#二叉树搜索" aria-label="Permalink to &quot;二叉树搜索&quot;">​</a></h2><p>二叉树的搜索主要分为 <code>深度优先搜索(DFS)</code> 和 <code>广度优先搜索(BFS)</code>两种方式。</p><p><strong>深度优先搜索（DFS）</strong> 深度优先搜索（DFS）是一种用于遍历或搜索树或图的算法。在二叉树的上下文中，DFS 通常有三种主要的遍历方式：先序遍历、中序遍历和后序遍历。 <img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240320081556.png" alt="image.png"></p><ul><li><strong>先序遍历</strong>：先访问根节点，然后遍历左子树，最后遍历右子树。</li><li><strong>中序遍历</strong>：先遍历左子树，然后访问根节点，最后遍历右子树。对于二叉搜索树，中序遍历可以按升序访问所有节点。</li><li><strong>后序遍历</strong>：先遍历左子树，然后遍历右子树，最后访问根节点。</li></ul><p><strong>广度优先搜索（BFS）</strong> 广度优先搜索（BFS）是从根节点开始，逐层遍历树中每个节点，同时每层从左到右遍历。BFS 通常使用队列来实现。</p><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240320081657.png" alt="image.png"></p><h3 id="前序遍历" tabindex="-1">前序遍历 <a class="header-anchor" href="#前序遍历" aria-label="Permalink to &quot;前序遍历&quot;">​</a></h3><p><strong>先序遍历</strong>：先访问根节点，然后遍历左子树，最后遍历右子树。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">preOrderTraversal</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">root</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">stack</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> current</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (current </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> stack.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (current) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(current.value);</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(current);</span></span>
<span class="line"><span style="color:#E1E4E8;">      current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> current.left;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> stack.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> current?.right </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">preOrderTraversal</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">stack</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> current</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> root;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (current </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> stack.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (current) {</span></span>
<span class="line"><span style="color:#24292E;">      result.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(current.value);</span></span>
<span class="line"><span style="color:#24292E;">      stack.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(current);</span></span>
<span class="line"><span style="color:#24292E;">      current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> current.left;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> stack.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> current?.right </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="中序遍历" tabindex="-1">中序遍历 <a class="header-anchor" href="#中序遍历" aria-label="Permalink to &quot;中序遍历&quot;">​</a></h3><p><strong>中序遍历</strong>：先遍历左子树，然后访问根节点，最后遍历右子树。对于二叉搜索树，中序遍历可以按升序访问所有节点。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">inOrderTraversal</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">root</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">stack</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> current</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (current </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> stack.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (current) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(current);</span></span>
<span class="line"><span style="color:#E1E4E8;">      current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> current.left;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> stack.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(current.value);</span></span>
<span class="line"><span style="color:#E1E4E8;">    current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> current.right;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">inOrderTraversal</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">stack</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> current</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> root;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (current </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> stack.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (current) {</span></span>
<span class="line"><span style="color:#24292E;">      stack.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(current);</span></span>
<span class="line"><span style="color:#24292E;">      current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> current.left;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> stack.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    result.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(current.value);</span></span>
<span class="line"><span style="color:#24292E;">    current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> current.right;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="后序遍历" tabindex="-1">后序遍历 <a class="header-anchor" href="#后序遍历" aria-label="Permalink to &quot;后序遍历&quot;">​</a></h3><p><strong>后序遍历</strong>：先遍历左子树，然后遍历右子树，最后访问根节点。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BinaryTree } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./binary-tree&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">postOrderTraversal</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">root</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">stack</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [root];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (stack.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">node</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> stack.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    result.</span><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">(node.value);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (node.left) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node.left);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (node.right) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(node.right);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">b</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">c</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">b1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">b2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">c1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">c2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BinaryTree</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">a.left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">a.right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> c;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">b.left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> b1;</span></span>
<span class="line"><span style="color:#E1E4E8;">b.right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> b2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">c.left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> c1;</span></span>
<span class="line"><span style="color:#E1E4E8;">c.right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> c2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">postOrderTraversal</span><span style="color:#E1E4E8;">(a);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { BinaryTree } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./binary-tree&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">postOrderTraversal</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">stack</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [root];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (stack.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">node</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> stack.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    result.</span><span style="color:#6F42C1;">unshift</span><span style="color:#24292E;">(node.value);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (node.left) {</span></span>
<span class="line"><span style="color:#24292E;">      stack.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node.left);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (node.right) {</span></span>
<span class="line"><span style="color:#24292E;">      stack.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node.right);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">a</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">b</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">c</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">b1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">b2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">c1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">c2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BinaryTree</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">a.left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> b;</span></span>
<span class="line"><span style="color:#24292E;">a.right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> c;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">b.left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> b1;</span></span>
<span class="line"><span style="color:#24292E;">b.right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> b2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">c.left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> c1;</span></span>
<span class="line"><span style="color:#24292E;">c.right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> c2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">postOrderTraversal</span><span style="color:#24292E;">(a);</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res);</span></span></code></pre></div><h3 id="层序遍历" tabindex="-1">层序遍历 <a class="header-anchor" href="#层序遍历" aria-label="Permalink to &quot;层序遍历&quot;">​</a></h3><p>广度优先搜索（BFS）是从根节点开始，逐层遍历树中每个节点，同时每层从左到右遍历。BFS 通常使用队列来实现。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">import { BinaryTree } from &quot;./binary-tree&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const levelOrder = (root: BinaryTree) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">const res: number[] = [];</span></span>
<span class="line"><span style="color:#E1E4E8;">const queue: BinaryTree[] = [</span><span style="color:#DBEDFF;text-decoration:underline;">root</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">while (queue.length) {</span></span>
<span class="line"><span style="color:#E1E4E8;">const node = queue.shift()!;</span></span>
<span class="line"><span style="color:#E1E4E8;">res.push(node.value);</span></span>
<span class="line"><span style="color:#E1E4E8;">if (node.left) {</span></span>
<span class="line"><span style="color:#E1E4E8;">queue.push(node.left);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    if (node.right) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      queue.push(node.right);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">return res;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const a = new BinaryTree(2);</span></span>
<span class="line"><span style="color:#E1E4E8;">const b = new BinaryTree(3);</span></span>
<span class="line"><span style="color:#E1E4E8;">const c = new BinaryTree(4);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const b1 = new BinaryTree(6);</span></span>
<span class="line"><span style="color:#E1E4E8;">const b2 = new BinaryTree(5);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const c1 = new BinaryTree(7);</span></span>
<span class="line"><span style="color:#E1E4E8;">const c2 = new BinaryTree(8);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">a.left = b;</span></span>
<span class="line"><span style="color:#E1E4E8;">a.right = c;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">b.left = b1;</span></span>
<span class="line"><span style="color:#E1E4E8;">b.right = b2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">c.left = c1;</span></span>
<span class="line"><span style="color:#E1E4E8;">c.right = c2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const res = levelOrder(a);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(res);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">import { BinaryTree } from &quot;./binary-tree&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const levelOrder = (root: BinaryTree) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">const res: number[] = [];</span></span>
<span class="line"><span style="color:#24292E;">const queue: BinaryTree[] = [</span><span style="color:#032F62;text-decoration:underline;">root</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">while (queue.length) {</span></span>
<span class="line"><span style="color:#24292E;">const node = queue.shift()!;</span></span>
<span class="line"><span style="color:#24292E;">res.push(node.value);</span></span>
<span class="line"><span style="color:#24292E;">if (node.left) {</span></span>
<span class="line"><span style="color:#24292E;">queue.push(node.left);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    if (node.right) {</span></span>
<span class="line"><span style="color:#24292E;">      queue.push(node.right);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">return res;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const a = new BinaryTree(2);</span></span>
<span class="line"><span style="color:#24292E;">const b = new BinaryTree(3);</span></span>
<span class="line"><span style="color:#24292E;">const c = new BinaryTree(4);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const b1 = new BinaryTree(6);</span></span>
<span class="line"><span style="color:#24292E;">const b2 = new BinaryTree(5);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const c1 = new BinaryTree(7);</span></span>
<span class="line"><span style="color:#24292E;">const c2 = new BinaryTree(8);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">a.left = b;</span></span>
<span class="line"><span style="color:#24292E;">a.right = c;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">b.left = b1;</span></span>
<span class="line"><span style="color:#24292E;">b.right = b2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">c.left = c1;</span></span>
<span class="line"><span style="color:#24292E;">c.right = c2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const res = levelOrder(a);</span></span>
<span class="line"><span style="color:#24292E;">console.log(res);</span></span></code></pre></div>`,31),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{d as __pageData,h as default};
