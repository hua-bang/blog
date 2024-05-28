---
title: 汉诺塔问题
customTag: algorithms>算法>分治
date: 2024.05.24
editLink: true
---

# 汉诺塔问题

汉诺塔（Tower of Hanoi）问题是一个经典的数学和递归问题。问题的描述如下：

问题描述：

- 有三根柱子，编号为A、B和C。
- 在柱子A上有若干个（至少一个）直径各不相同的圆盘，圆盘按直径大小从小到大自上而下叠放。
- 目标是将所有圆盘从柱子A移动到柱子C，遵循以下规则：
  - 每次只能移动一个圆盘。
  - 圆盘只能放在空柱子或较大圆盘之上（不能把大圆盘放在小圆盘之上）。
  - 可以借助柱子B作为辅助。

## 思路

- 如果只有一个圆盘，其实我们可以直接从 A 移动到 C。
- 如果有多个圆盘，我们可以进行分解。
  1. 将前n-1个圆盘从A移动到B，借助C。
  2. 将第n个圆盘从A移动到C。
  3. 将前n-1个圆盘从B移动到C，借助A。 

那么实际上 f(n) 的问题就被分解为 f(1) + f(n-1) 的问题

## 代码实现

```ts
const move = (src: number[], tar: number[]) => {
  const pan = src.pop();
  tar.push(pan as number);
}


const dfs = (i: number, src: number[], buf: number[], tar: number[]): void => {
  if(i === 1) {
    move(src, tar);
    return;
  }

  dfs(i - 1, src, tar, buf);

  move(src, tar);

  dfs(i-1, buf, src, tar);
}

const hanoita = (A: number[], B: number[], C: number[]) => {
  const n = A.length;
  dfs(n, A, B, C);
}
```

汉诺塔问题形成一棵高度为 
 的递归树，每个节点代表一个子问题，对应一个开启的 dfs() 函数，因此时间复杂度为 O(2^n)，空间复杂度为 O(n)。


## 参考

- [hello 算法](https://www.hello-algo.com/chapter_divide_and_conquer/hanota_problem/#2)