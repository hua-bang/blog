---
title: 二叉树
customTag: algorithms>数据结构>树
editLink: true
---

# 二叉树

二叉树(`Binary tree`)是一种每个节点最多只有两个子节点的树类型的数据结构，通常将这两个节点称为左节点和右节点。
树和二叉树的主要区别在于：

- 树的节点个数至少为 1，而二叉树的节点个数可以为 0（二叉树允许是空树）
- 树中的最大度数（节点数量）没有限制，而二叉树的节点的最大度数为 2
- 树的节点没有左右之分，而二叉树的节点有左右之分

## 特征

- 若二叉树的层次从 0 开始，则在二叉树的第  `i`  层至多有  `2^i`  个节点（`i >= 0`）
  - `i = 1`  时，只有一个根节点  `2^(i - 1) = 2^ 0 = 1`
- 高度为  `k`  的二叉树最多有  `2^(k + 1) - 1`  个节点（`k>=-1`）（空树的高度为  `-1`）
  - `i = 2`  时，`2 ^ (k + 1) - 1 = 2 ^ 3 - 1 = 7`  个节点
- 对任何一棵二叉树，如果其叶子节点（度为 0）数为  `m`，度为 2 的节点数为  `n`, 则  `m = n + 1`

## 特殊类型

二叉树也分为很多中类型。如`满二叉树` 或 `完全二叉树`。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240320080730.png)

### 完全二叉树

- **概括**：除了最后一层，其他层级都被填满，并且所有的节点都考左侧。
- **性质**：

### 满二叉树

- **概括**：所有层的节点都被完全填满。
- **性质**：
  - 叶节点的度为 0，其他节点的度为 2。
  - 树的高度为 h, 则节点总数为 2^(h+1)-1

|              | 满二叉树                    | 完全二叉树        |
| :----------- | :-------------------------- | :---------------- |
| **总节点 k** | `2^(h - 1) <= k <= 2^h - 1` | `k = 2^h - 1`     |
| **树高 h**   | `h = log2 k + 1`            | `h = log2(k + 1)` |

## 二叉搜索树

二叉树的搜索主要分为 `深度优先搜索(DFS)` 和 `广度优先搜索(BFS)`两种方式。

**深度优先搜索（DFS）**
深度优先搜索（DFS）是一种用于遍历或搜索树或图的算法。在二叉树的上下文中，DFS 通常有三种主要的遍历方式：先序遍历、中序遍历和后序遍历。
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240320081556.png)

- **先序遍历**：先访问根节点，然后遍历左子树，最后遍历右子树。
- **中序遍历**：先遍历左子树，然后访问根节点，最后遍历右子树。对于二叉搜索树，中序遍历可以按升序访问所有节点。
- **后序遍历**：先遍历左子树，然后遍历右子树，最后访问根节点。

**广度优先搜索（BFS）**
广度优先搜索（BFS）是从根节点开始，逐层遍历树中每个节点，同时每层从左到右遍历。BFS 通常使用队列来实现。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240320081657.png)

### 前序遍历

**先序遍历**：先访问根节点，然后遍历左子树，最后遍历右子树。

```ts
const preOrderTraversal = (root: BinaryTree) => {
  const stack: BinaryTree[] = [];
  const result: number[] = [];

  let current: BinaryTree | null = root;

  while (current || stack.length) {
    while (current) {
      result.push(current.value);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop() || null;
    current = current?.right || null;
  }

  return result;
};
```

### 中序遍历

**中序遍历**：先遍历左子树，然后访问根节点，最后遍历右子树。对于二叉搜索树，中序遍历可以按升序访问所有节点。

```ts
const inOrderTraversal = (root: BinaryTree) => {
  const stack: BinaryTree[] = [];
  const result: number[] = [];

  let current: BinaryTree | null = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop()!;
    result.push(current.value);
    current = current.right;
  }

  return result;
};
```

### 后序遍历

### 层序遍历
