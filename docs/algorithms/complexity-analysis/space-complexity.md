---
title: 空间复杂度
customTag: algorithms>复杂度分析
date: 2025.06.09
editLink: true
---

# 空间复杂度

**空间复杂度** 用于衡量算法占用内存空间随数据变大的增长趋势。

## 算法相关空间

- **输入空间**：用于存储算法的输入数据。
- **暂存空间**：用于存储算法在运行过程中的变量、对象、函数上下文等数据。
- **输出空间**：用于存储算法的输出数据。

一般情况下，空间复杂度 = “暂存空间” + “输出空间”。

暂存空间可以进一步划分：
- **暂存数据**：用于保存算法运行过程中的各种常量、变量、对象等。
- **栈帧空间**：用于保存调用函数的上下文数据。系统在每次调用函数时都会在栈顶部创建一个栈帧，函数返回后，栈帧空间会被释放。
- **指令空间**：用于保存编译后的程序指令，在实际统计中通常忽略不计。

所以我们一般统计，暂存数据 + 栈帧空间 + 输出数据三部份。

![](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250610083119.png)


## 推算方法

空间复杂度的推算方法与时间复杂度大致相同，只需将统计对象从“操作数量”转为“使用空间大小”。

而与时间复杂度不同的是，我们通常只关注最差空间复杂度。这是因为内存空间是一项硬性要求，我们必须确保在所有输入数据下都有足够的内存空间预留。

观察以下代码，最差空间复杂度中的“最差”有两层含义。

1. **以最差输入数据为准**：当 n<10 时，空间复杂度为 O(1) ；但当 n>10 时，初始化的数组 `nums` 占用 O(n) 空间，因此最差空间复杂度为 O(n) 。
   
2. **以算法运行中的峰值内存为准**：例如，程序在执行最后一行之前，占用 O(1) 空间；当初始化数组 `nums` 时，程序占用 O(n) 空间，因此最差空间复杂度为 O(n) 。

```ts
function algorithm(n: number): void {
    const a = 0;                   // O(1)
    const b = new Array(10000);    // O(1)
    if (n > 10) {
        const nums = new Array(n); // O(n)
    }
}
```

在递归函数中，需要统计栈帧空间啊。
```ts
function constFunc(): number {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
function loop(n: number): void {
    for (let i = 0; i < n; i++) {
        constFunc();
    }
}
/* 递归的空间复杂度为 O(n) */
function recur(n: number): void {
    if (n === 1) return;
    return recur(n - 1);
}
```

## 常见类型

常见空间复杂度排序：
```
O(1) < O(log n) < O(n) < O(n ^ 2) < O(2 ^ n) 
```

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250610083709.png)

### 常数阶

常数阶常见于数量与输入数据大小 n 无关的常量、变量、对象。

```ts
/* 函数 */
function constFunc(): number {
    // 执行某些操作
    return 0;
}

/* 常数阶 */
function constant(n: number): void {
    // 常量、变量、对象占用 O(1) 空间
    const a = 0;
    const b = 0;
    const nums = new Array(10000);
    const node = new ListNode(0);
    // 循环中的变量占用 O(1) 空间
    for (let i = 0; i < n; i++) {
        const c = 0;
    }
    // 循环中的函数占用 O(1) 空间
    for (let i = 0; i < n; i++) {
        constFunc();
    }
}
```

### 线性阶 O(n)

线性阶常用于元素数量与 n 成正比的数组、链表、栈、队列等。

```ts
function linear(n: number): void {
  const nums = new Array(n);

  for(let i = 0; i < n; i++) {
    nums[i] = i + 1;
  }

  return num;
}
```

递归情况也可以是线性阶
```ts
/* 线性阶（递归实现） */
function linearRecur(n: number): void {
    console.log(`递归 n = ${n}`);
    if (n === 1) return;
    linearRecur(n - 1);
}
```

### 平方阶 O(n ^ 2)

平方阶常见于矩阵和图，元素数量与 n 成平方关系：

```ts
/* 平方阶 */
function quadratic(n: number): void {
    // 矩阵占用 O(n^2) 空间
    const numMatrix = Array(n)
        .fill(null)
        .map(() => Array(n).fill(null));
    // 二维列表占用 O(n^2) 空间
    const numList = [];
    for (let i = 0; i < n; i++) {
        const tmp = [];
        for (let j = 0; j < n; j++) {
            tmp.push(0);
        }
        numList.push(tmp);
    }
}
```

### 指数阶 O(2 ^ n)

指数阶常见于二叉树。层数为 n 的“满二叉树”的节点数量为 $2^n-1$ ，占用 $2 ^ n$ 空间：

```ts
/* 指数阶（建立满二叉树） */
function buildTree(n: number): TreeNode | null {
    if (n === 0) return null;
    const root = new TreeNode(0);
    root.left = buildTree(n - 1);
    root.right = buildTree(n - 1);
    return root;
}
```

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250610084617.png)

### 对数阶

对数阶常见于分治算法。例如归并排序，输入长度为 n 的数组，每轮递归将数组从中点处划分为两半，形成高度为 log⁡n 的递归树，使用 O(log⁡n) 栈帧空间。

再例如将数字转化为字符串，输入一个正整数 n ，它的位数为 ⌊log10⁡n⌋+1 ，即对应字符串长度为 ⌊log10⁡n⌋+1 ，因此空间复杂度为 O(log10⁡n+1)=O(log⁡n) 。


## 权衡时间与空间

理想情况下，我们希望算法的时间复杂度和空间复杂度都能达到最优。然而在实际情况中，同时优化时间复杂度和空间复杂度通常非常困难。

**降低时间复杂度通常意味着要提升空间复杂度为代价，反之亦然。** 即“空间换时间”以及“时间换空间”。