---
title: 分数背包问题
customTag: algorithms>算法>贪心
date: 2024.06.11
editLink: true
---

# 分数背包问题

```
题目： 给定 `n` 个物品，第 `i` 个物品的重量为 `wgt[i-1]`, 价值为 `val[i-1]`, 和一个容量为 `cap` 的背包。每个物品只能选择一次，**但可以选择物品的一部分，价值根据选择的重量比例计算**，问在限定背包容量下背包中物品的最大价值。示例如图 15-3 所示。
```

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240611220617.png)

分数背包问题和 0-1 背包问题整体上非常相似，状态包含当前物品 𝑖 和容量 𝑐 ，目标是求限定背包容量下的最大价值。

不同点在于，本题允许只选择物品的一部分。如图 15-4 所示，**我们可以对物品任意地进行切分，并按照重量比例来计算相应价值**。

1. 单位价值：在这里，我们可以得到不同物品 `i` 的单位价值 `val[i-1]/wgt[i-1]`。
2. 假设放入一部分物品 𝑖 ，重量为 𝑤 ，则背包增加的价值为 𝑤×𝑣𝑎𝑙[𝑖−1]/𝑤𝑔𝑡[𝑖−1]
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240611220736.png)


## 1. 贪心策略确定

最大化背包内物品的总价值，**本质上是最大化单位重量下的物品价值**。于是我们的解题思路有。
- 单位价格排序：将单位价格高的物品排在前面。
- 拿物品：如果可以全拿则全拿，否则则拿部分。
![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240611220948.png)

## 2. 代码实现

```ts
interface Item {
  weight: number;
  value: number;
}

function fractionalKnapsack(wgt: number[], val: number[], cap: number): number {
  const n = wgt.length;
  const items: Item[] = [];

  for (let i = 0; i < n; i++) {
    item[i] = {
      weight: wgt[i],
      value: val[i]
    }
  }

  items.sort((a, b) => b.value / b.weight - a.value / a.weight)

  let temp = cap;
  let res = 0;

  for(const item of items) {
    const {
      value,
      weight
    } = item;
    
    if (temp >= weight) {
      temp = temp - weight;
      res = res + value;
    } else {
      res += (item.value / item.weight) * temp;
      break;
    }
  }
  return res;
}
```

上方，空间复杂度为 `O(n)`, 时间复杂度为 `O(n)`


## 3. 正确性证明

采用反证法。假设物品 𝑥 是单位价值最高的物品，使用某算法求得最大价值为 `res` ，但该解中不包含物品 𝑥 。

现在从背包中拿出单位重量的任意物品，并替换为单位重量的物品 𝑥 。由于物品 𝑥 的单位价值最高，因此替换后的总价值一定大于 `res` 。**这与 `res` 是最优解矛盾，说明最优解中必须包含物品 𝑥** 。

对于该解中的其他物品，我们也可以构建出上述矛盾。总而言之，**单位价值更大的物品总是更优选择**，这说明贪心策略是有效的。