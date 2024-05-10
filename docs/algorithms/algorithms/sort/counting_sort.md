---
title: 计数排序
customTag: algorithms>算法>排序
date: 2024.05.10
editLink: true
---

# 计数排序

计数排序（counting sort）通过统计元素数量来实现排序，通常应用于整数数组。

## 流程

给定一个长度为  𝑛  的数组  `nums` ，其中的元素都是“非负整数”，整体流程如下。

1. 遍历数组，找出最大值 m， 并创建一个 m + 1 的数组。
2. 借助  **`counter`  统计  `nums`  中各数字的出现次数**，其中  `counter[num]`  对应数字  `num`  的出现次数。统计方法很简单，只需遍历  `nums`（设当前数字为  `num`），每轮将  `counter[num]`  增加  1  即可。
3. **由于  `counter`  的各个索引天然有序，因此相当于所有数字已经排序好了**。接下来，我们遍历  `counter` ，根据各数字出现次数从小到大的顺序填入  `nums`  即可。
   ![](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240510082209.png)

## 代码实现

具体代码实现如下

```ts
function countingSort(nums: number[]) {
  const m = Math.max(...nums);

  const counters = new Array(m + 1).fill(0);

  for (const num of nums) {
    counters[num]++;
  }

  let i = 0;
  for (let num = 0; num < counters.length; num++) {
    for (let j = 0; j < counters[num]; j++) {
      nums[i] = num;
      i++;
    }
  }
}
```

## 特性

- **时间复杂度为 𝑂(𝑛+𝑚)、非自适应排序** ：涉及遍历 `nums` 和遍历 `counter` ，都使用线性时间。一般情况下 𝑛≫𝑚 ，时间复杂度趋于 𝑂(𝑛) 。
- **空间复杂度为 𝑂(𝑛+𝑚)、非原地排序**：借助了长度分别为 𝑛 和 𝑚 的数组 `res` 和 `counter` 。
- **稳定排序**：由于向 `res` 中填充元素的顺序是“从右向左”的，因此倒序遍历 `nums` 可以避免改变相等元素之间的相对位置，从而实现稳定排序。实际上，正序遍历 `nums` 也可以得到正确的排序结果，但结果是非稳定的。

## 局限性
 **计数排序只适用于非负整数**。若想将其用于其他类型的数据，需要确保这些数据可以转换为非负整数，并且在转换过程中不能改变各个元素之间的相对大小关系。例如，对于包含负数的整数数组，可以先给所有数字加上一个常数，将全部数字转化为正数，排序完成后再转换回去。

**计数排序适用于数据量大但数据范围较小的情况**。比如，在上述示例中 𝑚 不能太大，否则会占用过多空间。而当 𝑛≪𝑚 时，计数排序使用 𝑂(𝑚) 时间，可能比 𝑂(𝑛log⁡𝑛) 的排序算法还要慢。

## 参考
- [计数排序](https://www.hello-algo.com/chapter_sorting/counting_sort/#1194)