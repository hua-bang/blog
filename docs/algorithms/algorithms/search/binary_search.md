---
title: 二分查找
customTag: algorithms>算法>搜索
editLink: true
---

# 二分查找

二分查找是一种在**有序数组**中查找特定元素的有效算法。基本思想是将每次搜索的空间减半（分治），从而减少需要检查的元素数量，达到提高查找效率的目的。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240415083005.png)

### 基本步骤

1. **初始化指针**：设置两个指针，`low` 指向数组的第一个元素，`high` 指向最后一个元素。
2. **循环条件**：只要 `low` 小于等于 `high`，循环就继续。
3. **中间元素**：找到中间元素的索引 `Math.floor(mid = low + (high - low) / 2)`。`Math.floor` 用于防止直接 `(high + low) / 2` 可能导致的整数溢出。
4. **比较与移动**：
   - 如果中间元素等于目标值，返回 `mid`。
   - 如果中间元素小于目标值，将 `low` 设置为 `mid + 1`。
   - 如果中间元素大于目标值，将 `high` 设置为 `mid - 1`。
5. **未找到**：如果循环结束，说明没有找到目标值，返回 -1 或其他标记未找到的值。

**举个例子**
下方例子找值等于 7 的元素。
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240415083240.png)
**第一步**：确认指针, 此时 left = 0, right = 5, mid 就为 2
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240415083528.png)

**第二步**：判断 arr[mid]的大小

- 如果中间元素小于目标值，将 `low` 设置为 `mid + 1`。
- 如果中间元素大于目标值，将 `high` 设置为 `mid - 1`。
  这里处理后，变成了 left = 3, right = 5, mid = 4
  ![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240415083801.png)
  **第三步**，继续进行 arr[mid]的大小判断，这个时候找到 `mid=3`，即完成
  ![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240415083936.png)

## 实现代码
- **时间复杂度为 O(log⁡n)** ：在二分循环中，区间每轮缩小一半，因此循环次数为 log2n。
- **空间复杂度为 O(1)** ：指针 i 和 j 使用常数大小空间。

```ts
export const binarySearch = (arr: number[], target: number): number => {
  if (arr.length === 0) {
    return -1;
  }

  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    }

    if (arr[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
};
console.log(binarySearch([1, 3, 4, 5, 6, 7, 9], 9));
```
## 优点与局限性[¶](https://www.hello-algo.com/chapter_searching/binary_search/#1012 "Permanent link")

二分查找在时间和空间方面都有较好的性能。

- **二分查找的时间效率高**。在大数据量下，对数阶的时间复杂度具有显著优势。例如，当数据大小 n=2^20 时，线性查找需要 2^20=1048576 轮循环，而二分查找仅需 log2⁡ 2^20=20 轮循环。
- **二分查找无须额外空间**。相较于需要借助额外空间的搜索算法（例如哈希查找），二分查找更加节省空间。

然而，二分查找并非适用于所有情况，主要有以下原因。

- **二分查找仅适用于有序数据**。若输入数据无序，为了使用二分查找而专门进行排序，得不偿失。因为排序算法的时间复杂度通常为 O(nlog⁡=n) ，比线性查找和二分查找都更高。对于频繁插入元素的场景，为保持数组有序性，需要将元素插入到特定位置，时间复杂度为 O(n) ，也是非常昂贵的。
- **二分查找仅适用于数组**。二分查找需要跳跃式（非连续地）访问元素，而在链表中执行跳跃式访问的效率较低，因此不适合应用在链表或基于链表实现的数据结构。
- **小数据量下，线性查找性能更佳**。在线性查找中，每轮只需 1 次判断操作；而在二分查找中，需要 1 次加法、1 次除法、1 ~ 3 次判断操作、1 次加法（减法），共 4 ~ 6 个单元操作；因此，当数据量 n 较小时，线性查找反而比二分查找更快。