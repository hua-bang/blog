---
title: 冒泡排序
customTag: algorithms>算法>排序
date: 2024.04.01
editLink: true
---

# 冒泡排序

冒泡排序（bubble sort）通过连续地比较与交换相邻元素实现排序。实际上，会开启一次循环，每一次循环中，会从左到右，将两个数组元素比较，将比较大的元素移到右边去。每次循环后，回减小一个区间范围。

## 执行流程

如数组 \[4,5,3,1\], 的一次循环执行如下。
这样子，我们可以看到，每次循环最大的元素一定会到最右边。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240419202303.png)
整体流程
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240419202533.png)

## 代码实现

```ts
const bubbleSort = (arr: number[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};
```

## 效率优化

我们可以在循环中，加一个 `flag`, 表示当前一次循环有没有替换过顺序，没有的话，则说明，已经完成了。

```ts
const bubbleSort = (arr: number[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let flag = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) {
      break;
    }
  }
};
```

## 算法特性

- **时间复杂度为  O(n^2)、自适应排序**：各轮“冒泡”遍历的数组长度依次为  n−1、n−2、…、2、1 ，总和为  (n−1)n/2 。在引入  `flag`  优化后，最佳时间复杂度可达到  O(n) 。
- **空间复杂度为  n(1)、原地排序**：指针  i  和  j  使用常数大小的额外空间。
- **稳定排序**：由于在“冒泡”中遇到相等元素不交换。

## 参考链接

- [冒泡排序](https://www.hello-algo.com/chapter_sorting/bubble_sort/#1132)
