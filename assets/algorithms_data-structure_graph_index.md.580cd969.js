import{_ as t,o as r,c as e,Q as a}from"./chunks/framework.71c8f1eb.js";const d=JSON.parse('{"title":"概览","description":"","frontmatter":{"title":"概览","customTag":"algorithms>数据结构>图","editLink":true},"headers":[],"relativePath":"algorithms/data-structure/graph/index.md","filePath":"algorithms/data-structure/graph/index.md","lastUpdated":1711499184000}'),i={name:"algorithms/data-structure/graph/index.md"},s=a('<h1 id="图" tabindex="-1">图 <a class="header-anchor" href="#图" aria-label="Permalink to &quot;图&quot;">​</a></h1><blockquote><p>图是由节点和节点之间的边组成的集合。</p></blockquote><p>在<a href="https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6" target="_blank" rel="noreferrer">计算机科学</a>中，<strong>图</strong>（英語：graph）是一种<a href="https://zh.wikipedia.org/wiki/%E6%8A%BD%E8%B1%A1%E6%95%B8%E6%93%9A%E9%A1%9E%E5%9E%8B" title="抽象數據類型" target="_blank" rel="noreferrer">抽象数据类型</a>，用于实现<a href="https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6" title="数学" target="_blank" rel="noreferrer">数学</a>中<a href="https://zh.wikipedia.org/wiki/%E5%9B%BE%E8%AE%BA" title="图论" target="_blank" rel="noreferrer">图论</a>的<a href="https://zh.wikipedia.org/wiki/%E5%9B%BE_(%E6%95%B0%E5%AD%A6)" title="图 (数学)" target="_blank" rel="noreferrer">无向图</a>和<a href="https://zh.wikipedia.org/wiki/%E6%9C%89%E5%90%91%E5%9B%BE" title="有向图" target="_blank" rel="noreferrer">有向图</a>的概念。</p><p>图的数据结构包含一个有限（可能是可变的）的<a href="https://zh.wikipedia.org/wiki/%E9%9B%86%E5%90%88_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)" title="集合 (计算机科学)" target="_blank" rel="noreferrer">集合</a>作为<strong>节点</strong>集合，以及一个无序对（对应无向图）或有序对（对应有向图）的集合作为<strong>边</strong>（有向图中也称作<strong>弧</strong>）的集合。节点可以是图结构的一部分，也可以是用整数下标或<a href="https://zh.wikipedia.org/wiki/%E5%BC%95%E7%94%A8_(%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)" title="引用 (程序设计)" target="_blank" rel="noreferrer">引用</a>表示的外部实体。 <img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240327081426.png" alt="image.png"><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240327081440.png" alt="image.png"></p><p>图的数据结构还可能包含和每条边相关联的数值（edge value），例如一个标号或一个数值（即权重，weight；表示花费、容量、长度等）。</p><h2 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h2><ul><li><strong>顶点（Vertex）</strong>：图中的一个节点。</li><li><strong>边（Edge）</strong>：连接图中的两个顶点，可以是有向的也可以是无向的。</li><li><strong>路径</strong>：顶点的一个序列，其中任意两个连续的顶点都通过图中的一条边连接。</li><li><strong>连通图</strong>：在无向图中，如果任意两个顶点间都存在路径，则该图为连通图。</li><li><strong>强连通图</strong>：在有向图中，如果任意两个顶点间都存在路径，则该图为强连通图。</li><li><strong>图的遍历</strong>：指的是按照某种顺序访问图中所有顶点的过程。主要的遍历算法有深度优先搜索（DFS）和广度优先搜索（BFS）。</li></ul><h2 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h2><ul><li><strong>无向图</strong>：边没有方向，表示节点间的关系是双向的或者说是对等的。 <img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240327081851.png" alt="image.png"></li><li><strong>有向图</strong>：边有方向，表示从一个节点到另一个节点的单向关系。 <img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240327081858.png" alt="image.png"></li><li><strong>加权图</strong>：边上带有权重，表示节点间关系的某种度量（如成本、距离等）。 <img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240327082214.png" alt="image.png"></li><li><strong>非加权图</strong>：边上没有权重，仅表示节点间存在关系。 <img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240327082120.png" alt="image.png"></li><li><strong>带环图</strong>：图中存在环状结构。 <img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240327082032.png" alt="image.png"></li></ul><h2 id="图的表示" tabindex="-1">图的表示 <a class="header-anchor" href="#图的表示" aria-label="Permalink to &quot;图的表示&quot;">​</a></h2><p>图主要有两种表示方法：邻接矩阵和邻接表。</p><ul><li><strong>邻接矩阵</strong>：使用二维数组来表示图中顶点之间的连接关系。对于无向图来说，邻接矩阵是对称的。这种表示方法空间复杂度较高，但是可以快速查询任意两个顶点是否相连。</li><li><strong>邻接表</strong>：为每个顶点维护一个列表，列出直接连接到的所有顶点。这种表示方法更加节省空间，尤其是对于稀疏图。</li></ul><h2 id="图的遍历" tabindex="-1">图的遍历 <a class="header-anchor" href="#图的遍历" aria-label="Permalink to &quot;图的遍历&quot;">​</a></h2><ul><li><strong>深度优先搜索（DFS）</strong>：模仿走迷宫，尽可能深地搜索图的分支。</li><li><strong>广度优先搜索（BFS）</strong>：从源顶点开始，逐层遍历图，先访问离源顶点最近的顶点。</li></ul>',14),n=[s];function o(g,l,h,p,c,u){return r(),e("div",null,n)}const m=t(i,[["render",o]]);export{d as __pageData,m as default};
