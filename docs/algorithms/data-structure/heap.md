---
title: 堆
customTag: algorithms>数据结构
editLink: true
---

# 堆

在计算机科学中, 一个 堆(heap) 是一种特殊的基于树的数据结构，它满足下面描述的堆属性。

- 堆中每个节点的值都大于等于（或者小于等于）其左右子节点的值。
- 堆通常是一颗 `完全二叉树`。

## 二叉堆

二叉堆是一颗完全二叉树，二叉堆分为大顶堆（最大堆）和小顶堆（最小堆）。

- 最大堆：对于每个节点的值都大于等于子树中每个节点值的堆，我们叫作 大顶堆。
- 最小堆：对于每个节点的值都小于等于子树中每个节点值的堆，我们叫作 小顶堆。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240314220952.png)
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240314221014.png)

性质：
- 任何一个非树根节点的父节点为 `Math.floor((index - 1) / 2)`
- 任何一个非叶子节点的左子节点为 `index * 2 + 1`
- 任何一个非叶子节点的右子节点为 `index * 2 + 2`