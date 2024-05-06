---
title: 快速排序
customTag: algorithms>算法>排序
date: 2024.04.01
editLink: true
---

# 快速排序

快速排序（quick sort）是一种基于分治策略的排序算法，运行高效，应用广泛。

## 基本流程

快速排序的核心操作是“哨兵划分”，其目标是：选择数组中的某个元素作为“基准数”，将所有小于基准数的元素移到其左侧，而大于基准数的元素移到其右侧。具体来说，哨兵划分的流程如图 11-8 所示。

1. 选取数组最左端元素作为基准数，初始化两个指针  `i`  和  `j`  分别指向数组的两端。
2. 设置一个循环，在每轮中使用  `i`（`j`）分别寻找第一个比基准数大（小）的元素，然后交换这两个元素。
3. 循环执行步骤  `2.` ，直到  `i`  和  `j`  相遇时停止，最后将基准数交换至两个子数组的分界线。
   ![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240423083220.png)
   哨兵划分完成后，原数组被划分成三部分：左子数组、基准数、右子数组，且满足“左子数组任意元素  ≤  基准数  ≤  右子数组任意元素”。因此，我们接下来只需对这两个子数组进行排序。

本质上是：通过分治，将一个较长数组的排序问题简化为两个较短数组的排序问题。

```ts
function partition(nums: number[], left: number, right: number): number {
  let i = left,
    j = right;
  while (i < j) {
    while (i < j && nums[j] >= nums[left]) {
      j = j - 1;
    }
    while (i < j && nums[i] <= nums[left]) {
      i = i + 1;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  [nums[i], nums[left]] = [nums[left], nums[i]];
  return i;
}

function quickSort(nums: number[], left: number, right: number): void {
  if (left >= right) {
    return;
  }

  const pivot = partition(nums, left, right);
  quickSort(nums, left, pivot - 1);
  quickSort(nums, pivot + 1, right);
}
```

## 算法特性

- **时间复杂度为  𝑂(𝑛log⁡𝑛)、自适应排序**：在平均情况下，哨兵划分的递归层数为  log⁡𝑛 ，每层中的总循环数为  𝑛 ，总体使用  𝑂(𝑛log⁡𝑛)  时间。在最差情况下，每轮哨兵划分操作都将长度为  𝑛  的数组划分为长度为  0  和  𝑛−1  的两个子数组，此时递归层数达到  𝑛 ，每层中的循环数为  𝑛 ，总体使用  𝑂(𝑛2)  时间。（即原数组都排好序了 ß）
- **空间复杂度为  𝑂(𝑛)、原地排序**：在输入数组完全倒序的情况下，达到最差递归深度  𝑛 ，使用  𝑂(𝑛)  栈帧空间。排序操作是在原数组上进行的，未借助额外数组。
- **非稳定排序**：在哨兵划分的最后一步，基准数可能会被交换至相等元素的右侧。
