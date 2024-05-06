---
title: 哈希优化策略
customTag: algorithms>算法>搜索
date: 2024.04.01
editLink: true
---

# 哈希优化策略

日常中，我们常常用哈希查找来降低算法的时间复杂度， **其本质是空间换时间**。

下方用两数之和为例子，来讲讲线性查找和哈希查找。

:::info
给定一个整数数组  `nums`  和一个目标元素  `target` ，请在数组中搜索“和”为  `target`  的两个元素，并返回它们的数组索引。返回任意一个解即可。
:::

## 线性查找：用时间换空间

通过线性查找，本质上我们可以通过遍历数据，将数组中的两个元素进行匹配。于是，这里需要一个二层循环。这个时候，**时间复杂度也是 O(n^2)，空间复杂度为 O(1)**。

```ts
const twoSumBruteForce = (arr: number[], target: number): number[] => {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};
```

## 哈希查找：用空间换时间

考虑借助一个哈希表，键值对分别为数组元素和元素索引。循环遍历数组，每轮执行图 10-10 所示的步骤。

1. 判断 `target - nums[i]` 是否在哈希表中，如果在则找到拿到对应的值，进行返回。
2. 否则，将键值对  `nums[i]`（value）  和索引  `i`(index)  添加进哈希表。
   这个时候，**时间复杂度也是 O(n)，空间复杂度为 O(n)**。

```ts
/* 方法二：辅助哈希表 */
function twoSumHashTable(nums: number[], target: number): number[] {
  let map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let index = map.get(target - nums[i]);
    if (index !== undefined) {
      return [index, i];
    }
    map.set(nums[i], i);
  }
  return [];
}
```
