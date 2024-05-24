---
title: 分治搜索策略
customTag: algorithms>算法>分治
date: 2024.05.24
editLink: true
---

# 分治搜索策略


之前我们学习了搜索相关的知识，搜索方法主要分两类
- **暴力搜索**：它通过遍历数据结构实现，时间复杂度为 O(n)
- **自适应搜索**：它利用特有的数据组织形式或先验信息，时间复杂度可达到 O(log n)甚至 O(1)
 
实际上，一些搜索的算法也是基于分治策略实现的，例如二分查找和树。

- 二分查找的每一步都将问题（在数组中搜索目标元素）分解为一个小问题（在数组的一半中搜索目标元素），这个过程一直持续到数组为空或找到目标元素为止。
- 树是分治思想的代表，在二叉搜索树、AVL 树、堆等数据结构中，各种操作的时间复杂度皆为 O(n)。

二分查找的分治策略如下所示。
- **问题可以分解**：二分查找递归地将原问题（在数组中进行查找）分解为子问题（在数组的一半中进行查找），这是通过比较中间元素和目标元素来实现的。
- **子问题是独立的**：在二分查找中，每轮只处理一个子问题，它不受其他子问题的影响。
- **子问题的解无须合并**：二分查找旨在查找一个特定元素，因此不需要将子问题的解进行合并。当子问题得到解决时，原问题也会同时得到解决。

分治能够提升搜索效率，**本质上是因为分治搜索每轮可以排除一半选项**。

## 基于分治实现二分查找

```ts

function dfs(nums: number[], target: number, left: number, right: number): number {
  if (left > right) {
    return -1;
  }

  const m = left + ((right - left) >> 1);
  if (nums[m] < target) {
    return dfs(nums, target, m + 1, right);
  } else if(nums[m] > target) {
    return dfs(nums, target, left, m - 1);
  } else {
    return m;
  }
}

/* 二分查找 */
function binarySearch(nums: number[], target: number): number {
  const n = nums.length;
  // 求解问题 f(0, n-1)
  return dfs(nums, target, 0, n - 1);
}

console.log(binarySearch([1,2,3,4,5], 3));
```

 
