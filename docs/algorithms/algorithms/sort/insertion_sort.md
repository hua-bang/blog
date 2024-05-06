---
title: 插入排序
customTag: algorithms>算法>排序
date: 2024.04.01
editLink: true
---

# 插入排序

插入排序（insertion sort）是一种简单的排序算法，它的工作原理与手动整理一副牌的过程非常相似。

具体来说，我们在未排序区间选择一个基准元素，将该元素与其左侧已排序区间的元素逐一比较大小，并将该元素插入到正确的位置。

## 算法流程

### 单次插入流程

数组 = 【已经排序数据 + 未排序数据】
找到当前的未排序数据的第一个元素，称为基准元素，记录索引和值，做下方操作。

- 如果已经排序数据中有元素比基准元素大，那么这些元素回向右移动一位，而基准元素会直接作用在第一个比他的索引上。
- 如果没有，则保留原来位置。
  ![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240422082952.png)

### 整体流程

整体流程如下。
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240422083142.png)

## 代码实现

具体实现如下

```ts
const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let base = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > base) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = base;
  }
};
```

## 算法特性

- **时间复杂度为 O(n^2)\ 自适应**：在最差情况下，每次插入操作分别需要循环 n-1、n-2、....、1， 复杂度为 O(n^2)。当输入数组完全有序时，插入排序达到最佳时间复杂度 O（n）
- **空间复杂度为  𝑂(1)、原地排序**：指针  𝑖  和  𝑗  使用常数大小的额外空间。
- - **稳定排序**：在插入操作过程中，我们会将元素插入到相等元素的右侧，不会改变它们的顺序。
