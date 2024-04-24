---
title: 归并排序
customTag: algorithms>算法>排序
editLink: true
---

# 归并排序

归并排序（merge sort）是一种基于分治策略的排序算法，包含图所示的“划分”和“合并”阶段。先分再合。

1. **划分阶段**：通过递归不断地将数组从中点处分开，将长数组的排序问题转换为短数组的排序问题。
2. **合并阶段**：当子数组长度为 1 时终止划分，开始合并，持续地将左右两个较短的有序数组合并为一个较长的有序数组，直至结束。
   ![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240424082805.png)

## 算法流程

“划分阶段”从顶至底递归地将数组从中点切分为两个子数组。

1. 计算数组中点  `mid` ，递归划分左子数组（区间  `[left, mid]` ）和右子数组（区间  `[mid + 1, right]` ）。
2. 递归执行步骤  `1.` ，直至子数组区间长度为 1 时终止。
   “合并阶段”从底至顶地将左子数组和右子数组合并为一个有序数组。
3. 从长度为 1 的子数组开始合并。
4. 然后每个父数组进行合并，这个过程保证了有序。

## 代码实现

```ts
/* 合并左子数组和右子数组 */
function merge(nums: number[], left: number, mid: number, right: number): void {
  const tmp = new Array(right - left + 1);
  let i = left,
    j = mid + 1,
    k = 0;

  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) {
      tmp[k++] = nums[i++];
    } else {
      tmp[k++] = nums[j++];
    }
  }

  while (i <= mid) {
    tmp[k++] = nums[i++];
  }

  while (j <= right) {
    tmp[k++] = nums[j++];
  }

  for (let k = 0; k < tmp.length; k++) {
    nums[left + k] = tmp[k];
  }
}

const mergeSort = (nums: number[], left: number, right: number): void => {
  if (left >= right) {
    return;
  }

  const mid = (left + right) >> 1;

  mergeSort(nums, left, mid); // 递归左子数组
  mergeSort(nums, mid + 1, right); // 递归右子数组
  // 合并阶段
  merge(nums, left, mid, right);
};
```
## 算法特性

- **时间复杂度为 𝑂(𝑛log⁡𝑛)、非自适应排序**：划分产生高度为 log⁡𝑛 的递归树，每层合并的总操作数量为 𝑛 ，因此总体时间复杂度为 𝑂(𝑛log⁡𝑛) 。
- **空间复杂度为 𝑂(𝑛)、非原地排序**：递归深度为 log⁡𝑛 ，使用 𝑂(log⁡𝑛) 大小的栈帧空间。合并操作需要借助辅助数组实现，使用 𝑂(𝑛) 大小的额外空间。
- **稳定排序**：在合并过程中，相等元素的次序保持不变。
## 参考
- [归并排序](https://www.hello-algo.com/chapter_sorting/merge_sort/#1161)