import{_ as s,c as n,a1 as t,o as e}from"./chunks/framework.Cpkhi2qG.js";const d=JSON.parse('{"title":"AVL 树","description":"","frontmatter":{"title":"AVL 树","customTag":"algorithms>数据结构>树","date":"2024.04.01","editLink":true},"headers":[],"relativePath":"algorithms/data-structure/tree/avl-tree.md","filePath":"algorithms/data-structure/tree/avl-tree.md","lastUpdated":1725494688000}'),p={name:"algorithms/data-structure/tree/avl-tree.md"};function l(i,a,r,o,c,g){return e(),n("div",null,a[0]||(a[0]=[t(`<p>计算机领域中，AVL 树是一种平衡的二叉搜索树。在 AVL 树中，同一节点的两个子节点树的高度不会相差大于 1。如果在任何时候它们相差不止一个，则进行重新平衡以恢复此属性。</p><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><h3 id="二叉搜索树" tabindex="-1">二叉搜索树 <a class="header-anchor" href="#二叉搜索树" aria-label="Permalink to &quot;二叉搜索树&quot;">​</a></h3><p>前文有提及，这里不做过多描述了哈。<a href="/blog/algorithms/data-structure/tree/binary-search-tree.html">二叉搜索树</a></p><h3 id="平衡" tabindex="-1">平衡 <a class="header-anchor" href="#平衡" aria-label="Permalink to &quot;平衡&quot;">​</a></h3><p>由于平衡在不同的场景，不同的数据结构中，可能定义略为不一样。我们这里主要探讨在平衡二叉树上下文的定义。</p><p>在平衡二叉树的上下文中，指的是一种特定的树结构属性，它旨在减小树的高度，以优化各种树操作（如查找、插入、删除等）的效率。</p><p>在 AVL 树（一种自平衡二叉搜索树）中，“平衡”被定义为树中任意节点的左右子树的高度差的绝对值不超过 1。用数学语言来描述就是，对于任何节点 N，设其左子树的高度为 H_L，右子树的高度为 H_R，则满足|H_L - H_R| ≤ 1。</p><p>这种平衡条件确保了树的形状尽可能接近完全二叉树，从而保持树的高度最小，进而使得查找、插入、删除等操作能在对数时间内完成。</p><h3 id="平衡因子" tabindex="-1">平衡因子 <a class="header-anchor" href="#平衡因子" aria-label="Permalink to &quot;平衡因子&quot;">​</a></h3><p>平衡因子针对的对象是节点粒度。对于 AVL 树中的任何一个节点，其平衡因子被定义为该节点的左子树的高度减去其右子树的高度。用数学符号表示就是：\`平衡因子=高度(左子树)− 高度(右子树) <img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240324112302.png" alt="image.png"></p><h3 id="平衡情况" tabindex="-1">平衡情况 <a class="header-anchor" href="#平衡情况" aria-label="Permalink to &quot;平衡情况&quot;">​</a></h3><p><strong>左左情况</strong>：指的是一种特定的不平衡状态，其中一个节点的左子树的左侧更重（即左子树的高度大于右子树的高度），并且这种不平衡状态发生在两级连续的左子节点上。这种情况需要通过右旋转操作来修正不平衡。 <img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240324112433.png" alt="image.png"></p><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240324103855.png" alt="image.png"></p><p><strong>右右情况</strong>：是与左左（LL）情况相对应的另一种特定不平衡场景。当在 AVL 树的某个节点的右子树的右侧添加一个新节点后，导致那个节点的右子树比左子树高出 2 级，这时就出现了 RR 不平衡。</p><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240324112516.png" alt="image.png"></p><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240324103903.png" alt="image.png"></p><p><strong>左右不平衡</strong>： 左-右（LR）不平衡是 AVL 树中的一种特殊情况，当一个节点的左子树的右子树比它的左子树高时，会发生这种不平衡。更具体地说，LR 不平衡是在某个节点的左子树的右子树添加一个新节点后，导致该节点的左子树比右子树高 2 层，从而破坏了 AVL 树平衡因子的规则。</p><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240324112553.png" alt="image.png"></p><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240324103913.png" alt="image.png"></p><p><strong>右-左（RL）不平衡</strong>：是 AVL 树中的一种特定不平衡情况。当在一个节点的右子树的左子树进行插入操作，导致这个节点的右子树的高度比左子树高 2 级时，就会发生 RL 不平衡。 <img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240324112703.png" alt="image.png"></p><p><img src="https://raw.githubusercontent.com/hua-bang/assert-store/master/20240324103922.png" alt="image.png"></p><h2 id="性质" tabindex="-1">性质 <a class="header-anchor" href="#性质" aria-label="Permalink to &quot;性质&quot;">​</a></h2><p>AVL 是一种平衡的二叉搜索树，我们抓住中间两个关键词，<code>平衡</code>, <code>二叉搜索树</code>。</p><p>那也就意味着有下方性质</p><ul><li><p><strong>高度平衡</strong>：对于 AVL 树中的每一个节点，<strong>其左子树和右子树的高度差（称为平衡因子）的绝对值不超过 1</strong>。这意味着 AVL 树是高度平衡的，从而保证了树的深度大约是 logN（N 为树中节点数），确保了操作的高效性。</p></li><li><p><strong>自平衡性</strong>： 当通过插入或删除操作破坏了 AVL 树的高度平衡后，树会通过一系列的旋转操作自动恢复平衡。这些旋转操作包括单旋转（左旋和右旋）和双旋转（左-右旋和右-左旋）。</p></li><li><p><strong>二叉搜索树的性质</strong>： AVL 树是一种特殊的二叉搜索树，所以<strong>它继承了二叉搜索树的所有性质</strong>。例如，对于任意节点，其左子树中的所有节点的值都小于该节点的值，而右子树中的所有节点的值都大于该节点的值。这一性质使得 AVL 树在执行查找、插入和删除操作时非常高效。</p></li><li><p><strong>动态数据结构</strong>： AVL 树是一个动态的数据结构，可以在<strong>保持高度平衡的情况下动态地插入和删除节点。</strong> 这使得 AVL 树非常适合于需要频繁更新的数据集合，如数据库索引和内存管理系统。</p></li><li><p><strong>路径最优性</strong>： 由于 AVL 树的高度平衡特性，<strong>任意节点到根节点的最长可能路径不会超过 logN</strong>，这保证了查找效率是对数级别的。因此，AVL 树在最坏情况下也能保证较好的查找性能。</p></li><li><p><strong>旋转复杂性</strong>： 尽管 AVL 树的旋转操作能够保证树的平衡，但这也意味着在每次插入或删除操作后可能需要进行多次旋转，这在某些情况下可能会导致操作成本较高。然而，通过智能地选择旋转类型和顺序，AVL 树能够最小化这种成本，以保证高效的操作性能。</p></li></ul><p>AVL 树通过这些性质，为许多应用提供了一个既高效又可靠的数据结构方案，特别是在那些对查找、插入和删除操作的性能要求较高的场合。</p><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><p>AVL 树适合用于插入删除次数比较少，但查找多的情况。也在 Windows 进程地址空间管理中得到了使用。旋转的目的是为了降低树的高度，使其平衡。</p><h2 id="旋转操作" tabindex="-1">旋转操作 <a class="header-anchor" href="#旋转操作" aria-label="Permalink to &quot;旋转操作&quot;">​</a></h2><p>从上文知道，AVL 主要是在插入/删除过程中进行不同的旋转，其中分为</p><ul><li><strong>右旋（Single Right Rotation）：</strong> 当某个节点的左子树比右子树高，且左子树的左子树比左子树的右子树高时，对该节点进行右旋。</li><li><strong>左旋（Single Left Rotation）：</strong> 当某个节点的右子树比左子树高，且右子树的右子树比右子树的左子树高时，对该节点进行左旋。</li><li><strong>左-右旋（Left-Right Rotation）：</strong> 当某个节点的左子树比右子树高，且左子树的右子树比左子树的左子树高时，先对该节点的左子树进行左旋，然后对该节点进行右旋。</li><li><strong>右-左旋（Right-Left Rotation）：</strong> 当某个节点的右子树比左子树高，且右子树的左子树比右子树的右子树高时，先对该节点的右子树进行右旋，然后对该节点进行左旋。</li></ul><h3 id="右旋" tabindex="-1">右旋 <a class="header-anchor" href="#右旋" aria-label="Permalink to &quot;右旋&quot;">​</a></h3><p>右旋转是一种在 AVL 树或其他自平衡二叉搜索树中用来修正不平衡的操作。当一个节点的左子树的高度比右子树的高度大 2 时，即发生了左左不平衡（LL），这时可以通过右旋转来恢复平衡。以下是一个需要右旋转的树的例子</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>      A</span></span>
<span class="line"><span>     / \\</span></span>
<span class="line"><span>    B   C</span></span>
<span class="line"><span>   /</span></span>
<span class="line"><span>  D</span></span>
<span class="line"><span> /</span></span>
<span class="line"><span>E</span></span></code></pre></div><p><strong>右旋转步骤：</strong></p><ol><li><strong>确定旋转的节点</strong>： <ul><li>旋转发生在最小不平衡子树的根节点，在这个例子中是节点 B。</li></ul></li><li><strong>旋转的操作</strong>： <ul><li>将节点 D 作为 A 的左子节点。</li><li>将节点 B 降为节点 D 的右子节点。</li><li>如果节点 D 有右子节点，这个右子节点将成为节点 B 的左子节点。</li></ul></li><li><strong>更新引用</strong>： - 原本 A 的左子节点是 B，现在变成 D。 - 原本 B 的右子节点是 D，现在没有。 - D 没有右节点，现在是 B <strong>旋转后的树</strong></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>      A</span></span>
<span class="line"><span>     / \\</span></span>
<span class="line"><span>    D   C</span></span>
<span class="line"><span>   / \\</span></span>
<span class="line"><span>  E   B</span></span></code></pre></div><p>经过右旋转，平衡因子重新计算，树的平衡被恢复。这是一种简化版的解释，实际的 AVL 树还会在每一步操作后更新每个节点的高度信息。</p><h3 id="左旋" tabindex="-1">左旋 <a class="header-anchor" href="#左旋" aria-label="Permalink to &quot;左旋&quot;">​</a></h3><p>左旋转是一种在 AVL 树或其他自平衡二叉搜索树中用来修正不平衡的操作。当一个节点的右子树的高度比左子树的高度大 2 时，即发生了右右不平衡（RR），这时可以通过左旋转来恢复平衡。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>     A</span></span>
<span class="line"><span>    / \\</span></span>
<span class="line"><span>   B   C</span></span>
<span class="line"><span>	    \\</span></span>
<span class="line"><span>         D</span></span>
<span class="line"><span>          \\</span></span>
<span class="line"><span>           E</span></span></code></pre></div><p><strong>左旋转步骤：</strong></p><ol><li><strong>确定旋转的节点</strong>： <ul><li>旋转发生在最小不平衡子树的根节点，在这个例子中是节点 C。</li></ul></li><li><strong>旋转的操作</strong>：</li></ol><ul><li>首先，D 节点将上升成为 C 的父节点的右子节点，也就是 A 的右子节点。</li><li>如果 D 节点有左子节点，该左子节点将成为 C 的右子节点。</li><li>C 节点下降，成为 D 的左子节点。</li></ul><ol start="3"><li><strong>更新引用</strong> - A 的右子节点更新为 D。 - C 成为 D 的左子节点。 - 1. - 如果 D 原本有左子节点，那么这个左子节点现在应该挂到 C 的右侧。 <strong>旋转后的树</strong></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>     A</span></span>
<span class="line"><span>    / \\</span></span>
<span class="line"><span>   B   D</span></span>
<span class="line"><span>	  / \\</span></span>
<span class="line"><span>     C   E</span></span></code></pre></div><p>经过左旋转，平衡因子重新计算，树的平衡被恢复。这是一种简化版的解释，实际的 AVL 树还会在每一步操作后更新每个节点的高度信息。</p><h3 id="左-右旋" tabindex="-1">左-右旋 <a class="header-anchor" href="#左-右旋" aria-label="Permalink to &quot;左-右旋&quot;">​</a></h3><p>LR 不平衡是 AVL 树中的另一种不平衡情况，它指的是一个节点的左子树的右子树比左子树的左子树高，导致整个树失去平衡。这种情况下，我们需要通过一系列旋转操作来恢复树的平衡。解决 LR 不平衡问题通常需要两步：首先是对不平衡节点的左子树进行左旋，转变为 LL 不平衡，然后对不平衡节点本身进行右旋。</p><p><strong>示例树（在 LR 不平衡之前）</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>     A</span></span>
<span class="line"><span>    /</span></span>
<span class="line"><span>   B</span></span>
<span class="line"><span>    \\</span></span>
<span class="line"><span>     C</span></span></code></pre></div><p>在这个示例中，节点 A 的左子树的右子树（节点 C）的高度比左子树的左子树（不存在）的高度高，造成了 LR 不平衡。</p><p><strong>解决 LR 不平衡的步骤</strong>：</p><ol><li><strong>对 B 进行左旋</strong>： 首先，对 A 的左子节点 B 进行左旋操作，使得 C 上升为 B 的位置，B 降低为 C 的左子节点。左旋 B 后的结构如下：我们能看到变成了左左不平衡情况。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>     A</span></span>
<span class="line"><span>    /</span></span>
<span class="line"><span>   C</span></span>
<span class="line"><span>  /</span></span>
<span class="line"><span> B</span></span></code></pre></div><ol start="2"><li><strong>对 A 进行右旋</strong>： 接下来，对 A 进行右旋操作，使得 C 上升到 A 的位置，A 降低成为 C 的右子节点。右旋 A 后的结构如下：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   C</span></span>
<span class="line"><span>  / \\</span></span>
<span class="line"><span> B   A</span></span></code></pre></div><p>经过这两步操作（左旋 B，然后右旋 A），树的平衡被恢复。这种方法有效地解决了 LR 不平衡的问题，保持了 AVL 树的特性，即任何节点的左右子树的高度差不超过 1。</p><p>通过对特定的不平衡情况采取适当的旋转操作，AVL 树确保了其高度平衡的性质，从而在插入、删除和查找操作中保持了较高的效率。</p><h3 id="右-左旋" tabindex="-1">右-左旋 <a class="header-anchor" href="#右-左旋" aria-label="Permalink to &quot;右-左旋&quot;">​</a></h3><p>RL 不平衡是指一个节点的右子节点的左子树高于其右子树，导致整个树不平衡。为了解决这种不平衡，我们首先进行一次右旋（针对不平衡节点的右子节点），然后进行一次左旋（针对不平衡节点本身）。</p><p><strong>在旋转之前的树结构</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   C</span></span>
<span class="line"><span>    \\</span></span>
<span class="line"><span>     D</span></span>
<span class="line"><span>    /</span></span>
<span class="line"><span>   E</span></span></code></pre></div><p>在这个例子中，C 节点的右子节点 D 的左子树（包含 E）比其右子树高，形成了 RL 不平衡。</p><p><strong>恢复平衡的步骤</strong>：</p><p>解决 RL 不平衡的标准方法是进行两步旋转：先右旋，后左旋。</p><ol><li><strong>右旋</strong>（针对 D 和 E）： <ul><li>首先，对 D 进行右旋。这意味着 E 将上升成为 C 的右子节点，而 D 将下降成为 E 的右子节点。</li></ul></li></ol><p><strong>右旋后的树</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   C</span></span>
<span class="line"><span>    \\</span></span>
<span class="line"><span>     E</span></span>
<span class="line"><span>      \\</span></span>
<span class="line"><span>       D</span></span></code></pre></div><ol start="2"><li><strong>左旋</strong>（针对 C 和 E）： <ul><li>接下来，对 C 进行左旋。E 将上升成为这棵树的根节点，C 将成为 E 的左子节点，D 保持为 E 的右子节点。</li></ul></li></ol><p><strong>左旋后的树结构</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>     E</span></span>
<span class="line"><span>    / \\</span></span>
<span class="line"><span>   C   D</span></span></code></pre></div><p>通过这两步旋转操作（先右旋再左旋），RL 不平衡被成功地解决，恢复了树的平衡性。每一步旋转都是为了减少高度差异，确保任何节点的左右子树的高度差不会超过 1，这是 AVL 树平衡的关键条件。</p><h2 id="其他操作" tabindex="-1">其他操作 <a class="header-anchor" href="#其他操作" aria-label="Permalink to &quot;其他操作&quot;">​</a></h2><h3 id="插入操作" tabindex="-1">插入操作 <a class="header-anchor" href="#插入操作" aria-label="Permalink to &quot;插入操作&quot;">​</a></h3><ol><li>先判断边界问题，当根节点为空时，创建新节点</li><li>根据目标节点索引大小，递归左右子树，若索引相同则不插入新元素</li><li>更新节点高度后，根据当前节点子树的平衡状态进行处理</li></ol><h3 id="删除操作" tabindex="-1">删除操作 <a class="header-anchor" href="#删除操作" aria-label="Permalink to &quot;删除操作&quot;">​</a></h3><ol><li>先判断边界问题，当根节点为空时，创建新节点</li><li>根据目标节点索引大小，递归左右子树，若索引相同则不插入新元素</li><li>更新节点高度后，根据当前节点子树的平衡状态进行处理</li></ol><h3 id="查找操作" tabindex="-1">查找操作 <a class="header-anchor" href="#查找操作" aria-label="Permalink to &quot;查找操作&quot;">​</a></h3><p>查找操作比较直接：从根节点开始，递归地向左或向右遍历树，根据目标值与当前节点值的比较结果决定遍历方向。如果找到了目标值，返回该节点；如果遍历到了空节点，说明树中不存在目标值。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://tsejx.github.io/data-structure-and-algorithms-guidebook/data-structure/tree/avl-tree#%E6%9F%A5%E6%89%BE%E6%93%8D%E4%BD%9C" target="_blank" rel="noreferrer">AVL 树</a></li><li><a href="https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/avl-tree" target="_blank" rel="noreferrer">AVL javascript-algorithms</a></li></ul>`,83)]))}const u=s(p,[["render",l]]);export{d as __pageData,u as default};
