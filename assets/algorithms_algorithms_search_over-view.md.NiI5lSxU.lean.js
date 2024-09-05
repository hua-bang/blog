import{_ as i,c as r,a1 as t,o as a}from"./chunks/framework.Cpkhi2qG.js";const u=JSON.parse('{"title":"搜索算法","description":"","frontmatter":{"title":"搜索算法","customTag":"algorithms>算法>搜索","date":"2024.04.01","editLink":true},"headers":[],"relativePath":"algorithms/algorithms/search/over-view.md","filePath":"algorithms/algorithms/search/over-view.md","lastUpdated":1725494688000}'),e={name:"algorithms/algorithms/search/over-view.md"};function o(s,l,n,h,g,p){return a(),r("div",null,l[0]||(l[0]=[t('<h1 id="搜索算法概述" tabindex="-1">搜索算法概述 <a class="header-anchor" href="#搜索算法概述" aria-label="Permalink to &quot;搜索算法概述&quot;">​</a></h1><p><strong>搜索算法的本质</strong>是在数据结构中搜索一个或一组满足条件的元素。 主要的实现思路有两个</p><ul><li><strong>通过遍历数据结构来定位目标元素</strong>，例如数组、链表、树和图的遍历等。</li><li><strong>利用数据组织结构或数据包含的先验信息，实现高效元素查找</strong>，例如二分查找、哈希查找和二叉搜索树查找等。</li></ul><h2 id="暴力搜索" tabindex="-1">暴力搜索 <a class="header-anchor" href="#暴力搜索" aria-label="Permalink to &quot;暴力搜索&quot;">​</a></h2><p>暴力搜索通过遍历数据结构的每个元素来定位目标元素。</p><ul><li><strong>“线性搜索”适用于数组和链表等线性数据结构</strong>。它从数据结构的一端开始，逐个访问元素，直到找到目标元素或到达另一端仍没有找到目标元素为止。</li><li><strong>“广度优先搜索”和“深度优先搜索”是图和树的两种遍历策略。</strong> 广度优先搜索从初始节点开始逐层搜索，由近及远地访问各个节点。深度优先搜索从初始节点开始，沿着一条路径走到头，再回溯并尝试其他路径，直到遍历完整个数据结构。 暴力搜索的优点是简单且通用性好，<strong>无须对数据做预处理和借助额外的数据结构</strong>。</li></ul><h2 id="自适应搜索" tabindex="-1">自适应搜索 <a class="header-anchor" href="#自适应搜索" aria-label="Permalink to &quot;自适应搜索&quot;">​</a></h2><p>自适应搜索利用数据的特有属性（例如有序性）来优化搜索过程，从而更高效地定位目标元素。</p><ul><li>“二分查找”利用数据的有序性实现高效查找，仅适用于数组。</li><li>“哈希查找”利用哈希表将搜索数据和目标数据建立为键值对映射，从而实现查询操作。</li><li>“树查找”在特定的树结构（例如二叉搜索树）中，基于比较节点值来快速排除节点，从而定位目标元素。</li></ul><p>此类算法的优点是效率高，**时间复杂度可达到 O（logn）甚至 O(1)。 然而，**使用这些算法往往需要对数据进行预处理**。例如，二分查找需要预先对数组进行排序，哈希查找和树查找都需要借助额外的数据结构，维护这些数据结构也需要额外的时间和空间开销。</p><p>搜索算法的选择还取决于数据体量、搜索性能要求、数据查询与更新频率等。</p><p><strong>线性搜索</strong></p><ul><li>通用性较好，无须任何数据预处理操作。假如我们仅需查询一次数据，那么其他三种方法的数据预处理的时间比线性搜索的时间还要更长。</li><li>适用于体量较小的数据，此情况下时间复杂度对效率影响较小。</li><li>适用于数据更新频率较高的场景，因为该方法不需要对数据进行任何额外维护。</li></ul><p><strong>二分查找</strong></p><ul><li>适用于大数据量的情况，效率表现稳定，最差时间复杂度为  O(log⁡n) 。</li><li>数据量不能过大，因为存储数组需要连续的内存空间。</li><li>不适用于高频增删数据的场景，因为维护有序数组的开销较大。</li></ul><p><strong>哈希查找</strong></p><ul><li>适合对查询性能要求很高的场景，平均时间复杂度为  O(1) 。</li><li>不适合需要有序数据或范围查找的场景，因为哈希表无法维护数据的有序性。</li><li>对哈希函数和哈希冲突处理策略的依赖性较高，具有较大的性能劣化风险。</li><li>不适合数据量过大的情况，因为哈希表需要额外空间来最大程度地减少冲突，从而提供良好的查询性能。</li></ul><p><strong>树查找</strong></p><ul><li>适用于海量数据，因为树节点在内存中是分散存储的。</li><li>适合需要维护有序数据或范围查找的场景。</li><li>在持续增删节点的过程中，二叉搜索树可能产生倾斜，时间复杂度劣化至 O（n）。</li><li>若使用 AVL 树或红黑树，则各项操作可在  O(log⁡n)  效率下稳定运行，但维护树平衡的操作会增加额外的开销。</li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://www.hello-algo.com/chapter_searching/searching_algorithm_revisited/" target="_blank" rel="noreferrer">重识搜索算法</a></p>',21)]))}const d=i(e,[["render",o]]);export{u as __pageData,d as default};
