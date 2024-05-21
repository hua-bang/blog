---
title: 基数排序
customTag: algorithms>算法>排序
date: 2024.05.21
editLink: true
---

# 基数排序

基数排序（Radix Sort）是一种非比较型整数排序算法，它基于数字的位来排序。
**基数排序的工作原理是将整数按照位来排序，从最低位到最高位。**
这种排序算法可以非常高效，特别是当涉及到的数字位数相对较少时。

## 基础步骤
基数排序的基本步骤如下：

1. 确定最大数的位数：首先确定所有待排序数字中的最大数的位数。

2. 按位排序：从最低位开始，对所有数字的该位进行排序。可以使用稳定的排序算法，如计数排序或桶排序。

3. 重复过程：重复上述过程，每次将排序的位数提高一位，直到达到最高位。

4. 完成排序：当所有位数都排序完成后，整个数组就按照从低到高的顺序排列好了。

基数排序的关键点在于，它不是通过比较数字的大小来进行排序，而是通过数字的每一位来决定其在排序过程中的位置。这使得基数排序在处理大量具有相同位数的数字时效率非常高。

## 具体代码

```ts
/* 获取元素 num 的第 k 位，其中 exp = 10^(k-1) */
function digit(num: number, exp: number): number {
  // 传入 exp 而非 k 可以避免在此重复执行昂贵的次方计算
  return Math.floor(num / exp) % 10;
}

/* 计数排序（根据 nums 第 k 位排序） */
function countingSortDigit(nums: number[], exp: number): void {
    // 十进制的位范围为 0~9 ，因此需要长度为 10 的桶数组
    const counter = new Array(10).fill(0);
    const n = nums.length;
    // 统计 0~9 各数字的出现次数
    for (let i = 0; i < n; i++) {
        const d = digit(nums[i], exp); // 获取 nums[i] 第 k 位，记为 d
        counter[d]++; // 统计数字 d 的出现次数
    }
    // 求前缀和，将“出现个数”转换为“数组索引”
    for (let i = 1; i < 10; i++) {
        counter[i] += counter[i - 1];
    }
    // 倒序遍历，根据桶内统计结果，将各元素填入 res
    const res = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        const d = digit(nums[i], exp);
        const j = counter[d] - 1; // 获取 d 在数组中的索引 j
        res[j] = nums[i]; // 将当前元素填入索引 j
        counter[d]--; // 将 d 的数量减 1
    }
    // 使用结果覆盖原数组 nums
    for (let i = 0; i < n; i++) {
        nums[i] = res[i];
    }
}

function radixSort(nums: number[]): void {
  let m = Number.MIN_VALUE;
  for (const num of nums) {
    if (num > m) {
      m = num;
    }
  }

  // 按照从低位到高位的顺序遍历
  for (let exp = 1; exp <= m; exp *= 10) {
    // 对数组元素的第 k 位执行计数排序
    // k = 1 -> exp = 1
    // k = 2 -> exp = 10
    // 即 exp = 10^(k-1)
    countingSortDigit(nums, exp);
  }
}
```

## 算法特征

相较于计数排序，基数排序适用于数值范围较大的情况，但前提是数据必须可以表示为固定位数的格式，且位数不能过大。例如，浮点数不适合使用基数排序。

- **时间复杂度O(nk)、非自适应排序**：其中n是待排序数字的数量，k是数字的位数。当k（数字的位数）远小于n（数字的数量）时，基数排序的性能通常优于比较型排序算法。
- **空间复杂度为 O(n + d)、非原地排序**：与计数排序相同，基数排序需要借助长度为 n 和 d 的数组 res 和 counter 。


## 参考链接
- [基数排序](https://www.hello-algo.com/chapter_sorting/radix_sort/#11101)