---
title: 二分查找
customTag: algorithms>算法>搜索
date: 2024.04.01
editLink: true
---

# 二分查找

二分查找是一种在**有序数组**中查找特定元素的有效算法。基本思想是将每次搜索的空间减半（分治），从而减少需要检查的元素数量，达到提高查找效率的目的。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240415083005.png)

## 基本步骤

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

- **时间复杂度为  O(log⁡n)** ：在二分循环中，区间每轮缩小一半，因此循环次数为  log2n。
- **空间复杂度为  O(1)** ：指针  i  和 j  使用常数大小空间。

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

- **二分查找的时间效率高**。在大数据量下，对数阶的时间复杂度具有显著优势。例如，当数据大小  n=2^20  时，线性查找需要  2^20=1048576  轮循环，而二分查找仅需  log2⁡ 2^20=20  轮循环。
- **二分查找无须额外空间**。相较于需要借助额外空间的搜索算法（例如哈希查找），二分查找更加节省空间。

然而，二分查找并非适用于所有情况，主要有以下原因。

- **二分查找仅适用于有序数据**。若输入数据无序，为了使用二分查找而专门进行排序，得不偿失。因为排序算法的时间复杂度通常为  O(nlog⁡=n) ，比线性查找和二分查找都更高。对于频繁插入元素的场景，为保持数组有序性，需要将元素插入到特定位置，时间复杂度为  O(n) ，也是非常昂贵的。
- **二分查找仅适用于数组**。二分查找需要跳跃式（非连续地）访问元素，而在链表中执行跳跃式访问的效率较低，因此不适合应用在链表或基于链表实现的数据结构。
- **小数据量下，线性查找性能更佳**。在线性查找中，每轮只需 1 次判断操作；而在二分查找中，需要 1 次加法、1 次除法、1 ~ 3 次判断操作、1 次加法（减法），共 4 ~ 6 个单元操作；因此，当数据量  n  较小时，线性查找反而比二分查找更快。

## 二分查找插入点

二分查找不仅可用于搜索目标元素，还可用于解决许多变种问题，比如搜索目标元素的插入位置。

### 无重复元素情况

**描述**：给定一个长度为 n 的有序数据，和一个元素 target , 数据不存在重复元素。需要将元素插入数组中。
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240416080133.png)
这里我们考虑两种情况

- **数据不存在 `target`**：不存在 `target` 的情况，这个时候我们有`left` 和 `right` 的指针，这个时候我们 `arr[left]` < `target` , 所以这个时候我们将元素插入在 `left` 位置即可。
- **数据中存在 `target`**: 这个时候我们能找到 `target` 对应的下标。插入索引就是 `target` 索引。

```ts
export const binarySearchInsertionSimple = (
  arr: number[],
  target: number
): number => {
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

  return left;
};
```

### 存在重复元素的情况

假设数组中存在多个  `target` ，则普通二分查找只能返回其中一个  `target`  的索引，**而无法确定该元素的左边和右边还有多少  `target`**。

我们可以通过线性的方法去找左边还有多少 target， 当这样子的话，时间复杂度回比成 O(n)。
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240416081240.png)
于是，我们考虑二分查找。

- 当  `nums[m] < target`  或  `nums[m] > target`  时，说明还没有找到  `target` ，因此采用普通二分查找的缩小区间操作，**从而使指针  left  和  right  向  `target`  靠近**
- 当  `nums[m] == target`  时，说明小于  `target`  的元素在区间  \[i, m-1\]中，因此采用 j = m -1 来缩小区间，**从而使指针  j  向小于  `target`  的元素靠近**

```ts
function binarySearchInsertion(arr: Array<number>, target: number): number {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;

    if (arr[mid] === target) {
      right = mid - 1;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    }

    if (arr[mid] > target) {
      right = mid - 1;
    }
  }

  return left;
}

console.log(binarySearchInsertion([1, 3, 3, 3, 3, 4, 5, 6, 7, 9], 3));
```

## 二分查找边界

### 查找左边界

给定一个长度为 n 的有序数组 nums ，其中可能包含重复元素。请返回数组中最左一个元素 target 的索引。若数组中不包含该元素，则返回 -1。

```ts
function binarySearchLeftEdge(nums: Array<number>, target: number): number {
  // 等价于查找 target 的插入点
  const i = binarySearchInsertion(nums, target);
  // 未找到 target ，返回 -1
  if (i === nums.length || nums[i] !== target) {
    return -1;
  }
  // 找到 target ，返回索引 i
  return i;
}
```

### 查找右边界

实际上，我们可以利用查找最左元素的函数来查找最右元素，具体方法为：将查找最右一个 target 转化为查找最左一个 target + 1。

```ts
/* 二分查找最右一个 target */
function binarySearchRightEdge(nums: Array<number>, target: number): number {
  // 转化为查找最左一个 target + 1
  const i = binarySearchInsertion(nums, target + 1);
  // j 指向最右一个 target ，i 指向首个大于 target 的元素
  const j = i - 1;
  // 未找到 target ，返回 -1
  if (j === -1 || nums[j] !== target) {
    return -1;
  }
  // 找到 target ，返回索引 j
  return j;
}
```
