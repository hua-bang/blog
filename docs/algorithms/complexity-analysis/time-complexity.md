---
title: 时间复杂度
customTag: algorithms>复杂度分析
date: 2025.06.05
editLink: true
---

# 时间复杂度

时间复杂度，并不是计算算法的运行时间，而是表示算法运行时间和输入规模的关系。

## 函数渐进上界

时间复杂度分析的本质是计算算法的渐进上界。
渐进上界的定义是：
> 存在一个常数 $c$ 和一个函数 $f(n)$，使得当 $n \geq n_0$ 时，有 $T(n) \leq c \cdot f(n)$。
> 
其中，$T(n)$ 是算法的运行时间，$n$ 是输入规模，$c$ 是常数，$f(n)$ 是一个函数。


我们用 O 符号来表示渐进上界，即 $T(n) = O(f(n))$。


举个具体例子：
```c
int sum(int n) {
    int s = 0;
    for (int i = 1; i <= n; i++) {
        s += i;
    }
    return s;
}
```
上面的代码中，我们用了一个 for 循环，循环了 $n$ 次，所以时间复杂度为 $O(n)$。

所以，计算渐进上线就是寻找一个函数 $f(n)$，使当 $n$ 无穷大时,  $T(n)$ 和 $f(n)$ 
 处于相同的增长级别，仅相差一个常数项 $c$
 的倍数。

## 推算方法
### 统计操作数量
1. 忽略 Tn 的常数项：常数项都看成 1
2. 忽略所有系数：忽略所有系数，只保留最高阶项
3. 循环嵌套用乘法：如果有嵌套循环，那么就用乘法
4. 加法去掉低阶：如果包含加法，并存在低阶项，可以忽略低阶项

### 判断渐进上界

时间复杂度由 $T(n)$
 中最高阶的项来决定。这是因为在 
 趋于无穷大时，最高阶的项将发挥主导作用，其他项的影响都可以忽略。

## 常见类型

常见时间复杂度排序：

```
$O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(n^3) < O(2^n) < O(n!) < O(n^n)$
```

### 常数阶 O(1)

常数阶操作数量和输入数据大小无关，即不随着 n 的变化而变化。

```ts
/* 常数阶 */
function constant(n: number): number {
    let count = 0;
    const size = 100000;
    for (let i = 0; i < size; i++) count++;
    return count;
}
```


### 线性阶 O(n)

先行阶操作数量和输入数据大小成线性变化。

```ts
/* 线性阶 */
function linear(n: number): number {
    let count = 0;
    for (let i = 0; i < n; i++) count++;
    return count;
}
```

### 平方阶 $O(n ^ 2)$

先行阶操作数量和输入数据大小成平方级别变化。平方阶通常出现在嵌套循环中，外层循环和内层循环的时间复杂度都为 $O(n)$, 总时间复杂度为 $O(n^2)$

```ts
/* 平方阶 */
function quadratic(n: number): number {
    let count = 0;
    // 循环次数与数据大小 n 成平方关系
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++;
        }
    }
    return count;
}
```

### 指数阶 $O(2^n)$
指数阶通常出现在递归算法中，递归算法的时间复杂度为 $O(2^n)$
```ts
/* 指数阶 */
function exponential(n: number): number {
    if (n <= 1) return 1;
    return exponential(n - 1) + exponential(n - 1);
}
```

### 对数阶 $O(logn)$
对数阶通常出现在二分查找算法中，二分查找算法的时间复杂度为 $O(logn)$
```ts
/* 对数阶 */
function logarithmic(n: number): number {
    let count = 0;
    while (n > 1) {
        n = n / 2;
        count++;
    }
    return count;
}
```

### 线性对数阶 $O(nlogn)$
线性对数阶通常出现在归并排序算法中，归并排序算法的时间复杂度为 $O(nlogn)$
```ts
/* 线性对数阶 */
function linearLogRecur(n: number): number {
    if (n <= 1) return 1;
    let count = linearLogRecur(n / 2) + linearLogRecur(n / 2);
    for (let i = 0; i < n; i++) {
        count++;
    }
    return count;
}
```

### 阶乘阶 $O(n!)$
阶乘阶通常出现在全排列算法中，全排列算法的时间复杂度为 $O(n!)$
```ts
/* 阶乘阶 */
function factorial(n: number): number {
    if (n <= 1) return 1;
    return factorial(n - 1) * n;
}
```


## 最差、最佳、平均时间复杂度
- 最差时间复杂度：在最坏情况下，算法的时间复杂度。
- 最佳时间复杂度：在最好情况下，算法的时间复杂度。
- 平均时间复杂度：算法在所有可能情况下，平均时间复杂度。