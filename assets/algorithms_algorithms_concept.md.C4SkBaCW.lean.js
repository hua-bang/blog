import{_ as d,c as o,a1 as r,o as e}from"./chunks/framework.CwSCtoP3.js";const g=JSON.parse('{"title":"算法概念","description":"","frontmatter":{"title":"算法概念","customTag":"algorithms>算法","date":"2024.03.01","editLink":true},"headers":[],"relativePath":"algorithms/algorithms/concept.md","filePath":"algorithms/algorithms/concept.md","lastUpdated":1728279581000}'),l={name:"algorithms/algorithms/concept.md"};function a(n,t,i,c,s,h){return e(),o("div",null,t[0]||(t[0]=[r('<h1 id="算法基础概念" tabindex="-1">算法基础概念 <a class="header-anchor" href="#算法基础概念" aria-label="Permalink to &quot;算法基础概念&quot;">​</a></h1><p>学习具体的算法之前，有必要将算法的基础概念理解清楚,对基础概念有了初步认识，再进行进阶学习和实践巩固，也许效果会更好。</p><h2 id="算法复杂度" tabindex="-1">算法复杂度 <a class="header-anchor" href="#算法复杂度" aria-label="Permalink to &quot;算法复杂度&quot;">​</a></h2><p>当我们谈论算法复杂度时，主要有两个层面的目标</p><ol><li><strong>问题的解法</strong>：正确解法。</li><li><strong>最优解法</strong>：最高效的算法。</li></ol><p>如何衡量：即从空间和时间的维度去看。</p><ul><li><strong>时间效率</strong>：算法运行速度的快慢。</li><li><strong>空间效率</strong>：算法占用内存空间的大小</li></ul><p>我们主要关注两种类型：<strong>时间复杂度</strong>和<strong>空间复杂度</strong>。这两种复杂度帮助我们评估算法的效率，从而确定算法对资源的消耗。</p><h3 id="时间复杂度" tabindex="-1">时间复杂度 <a class="header-anchor" href="#时间复杂度" aria-label="Permalink to &quot;时间复杂度&quot;">​</a></h3><p>时间复杂度是指执行算法所需要的计算工作量。它通常以输入大小的函数来表示，帮助我们理解算法随着输入大小增加的运行时间增长速度。常见的时间复杂度包括：</p><table><thead><tr><th>时间复杂度</th><th>描述</th><th>典型算法</th></tr></thead><tbody><tr><td>O(1)</td><td>常数时间，执行时间不随输入大小变化</td><td>直接访问数组元素</td></tr><tr><td>O(log n)</td><td>对数时间，执行时间随输入大小呈对数增长</td><td>二分查找</td></tr><tr><td>O(n)</td><td>线性时间，执行时间与输入大小成正比</td><td>线性搜索</td></tr><tr><td>O(n log n)</td><td>线性对数时间，执行时间随输入大小呈线性对数增长</td><td>快速排序、归并排序</td></tr><tr><td>O(n^2)</td><td>二次时间，执行时间与输入大小的平方成正比</td><td>冒泡排序、选择排序、插入排序</td></tr><tr><td>O(n^3)</td><td>立方时间，执行时间与输入大小的立方成正比</td><td>简单的矩阵乘法</td></tr><tr><td>O(2^n)</td><td>指数时间，执行时间以指数方式增加</td><td>某些递归问题解决方案</td></tr><tr><td>O(n!)</td><td>阶乘时间，执行时间随输入大小的阶乘增加</td><td>旅行商问题的暴力解法</td></tr></tbody></table><p>其中</p><p><code>O(1)</code> &lt; <code>O(log n)</code> &lt; <code>O(n)</code> &lt; <code>O(n log n)</code> &lt; <code>O(n^2)</code> &lt; <code>o(2^n)</code> &lt; <code>O(n!)</code></p><p>算法的时间效率往往不是固定的，而是与输入数据的分布有关。从而分为<code>最差、最佳、平均时间复杂度</code></p><ul><li>最差：最差时间复杂度是指在所有可能的输入情况中，算法运行时间的上界。换句话说，它代表了算法在最不利情况下的执行时间。</li><li>最佳：最佳时间复杂度是指在所有可能的输入情况中，算法运行时间的下界。它描述了算法在最理想情况下的执行时间。</li><li>平均： 平均时间复杂度考虑了所有可能的输入并计算算法的平均运行时间。理解平均时间复杂度可能需要统计和概率知识，因为它通常基于假设所有输入都同样可能出现。</li></ul><h3 id="空间复杂度" tabindex="-1">空间复杂度 <a class="header-anchor" href="#空间复杂度" aria-label="Permalink to &quot;空间复杂度&quot;">​</a></h3><p>算法在运行过程中使用的内存空间主要包括以下几种。</p><ul><li><strong>输入空间</strong>：用于存储算法的输入数据。</li><li><strong>暂存空间</strong>：用于存储算法在运行过程中的变量、对象、函数上下文等数据。</li><li><strong>输出空间</strong>：用于存储算法的输出数据。</li></ul><p>一般我们计算<strong>暂存空间</strong>和<strong>输出空间</strong>。</p><p>空间复杂度是指执行算法所需要的最大内存空间。它同样以输入大小的函数来表示，帮助我们理解算法随着输入大小增加的内存消耗。例如，一个简单的线性搜索算法可能具有 O(1)的空间复杂度，因为它只需要存储一个元素即可进行比较；而归并排序具有 O(n)的空间复杂度，因为它在排序过程中需要与原数组相同大小的辅助空间。</p><table><thead><tr><th>空间复杂度</th><th>描述</th><th>典型算法</th></tr></thead><tbody><tr><td>O(1)</td><td>常数空间，所需额外内存不随输入大小变化</td><td>简单变量的操作</td></tr><tr><td>O(log n)</td><td>对数空间，需要的额外空间随输入大小呈对数增长</td><td>递归算法在递归栈上的空间需求</td></tr><tr><td>O(n)</td><td>线性空间，所需额外内存与输入大小成正比</td><td>动态数组、哈希表</td></tr><tr><td>O(n^2)</td><td>二次空间，所需额外内存与输入大小的平方成正比</td><td>邻接矩阵表示的图</td></tr></tbody></table><p><code>O(1)</code> &lt; <code>O(log n)</code> &lt; <code>O(n)</code> &lt; <code>O(n^2)</code> &lt; <code>O(2^n)</code></p><p>我们如此看重空间复杂度和时间复杂度，是为了让我们根据空间，时间的效率，以及目前我们的资源，来做算法的取舍。</p>',23)]))}const O=d(l,[["render",a]]);export{g as __pageData,O as default};