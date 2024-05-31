---
title: 子集和问题1
customTag: algorithms>算法>回溯
date: 2024.05.29
editLink: true
---

# 子集和问题

给定一个正整数数组 `nums` 和一个目标正整数 `target` ，请找出所有可能的组合，使得组合中的元素和等于 `target` 。给定数组无重复元素，每个元素可以被选取多次。请以列表形式返回这些组合，列表中不应包含重复组合。

例如，输入集合 { 3,4,5 } 和 目标 9，可以获得解位 {3,3,3}, {4,5}。


## 回溯方案找到解

这里实际上，我们是对元素去进行重复选择和排序，并且计算元素和。
- 当元素和 === 目标值，则记录数组。
- 当元素和  >  目标值，则剪枝。
- 当元素和  <  目标值，则下钻。

于是，我们可以得到下方代码。

```ts
function backtrack(
  state: number[],
  target: number,
  total: number,
  choices: number[],
  res: number[][]
) {
  if (total === target) {
    res.push([...state]);
    return;
  }

  for(let i = 0; i < choices.length; i++) {
    if (total + choices[i] > target) {
      continue;
    }

    state.push(choices[i]);

    backtrack(state, target, total + choices[i], choices, res);

    state.pop();
  }
}

function subsetSumINaive(nums: number[], target: number): number[][] {
  const state = []; // 状态（子集）
  const total = 0; // 子集和
  const res = []; // 结果列表（子集列表）
  backtrack(state, target, total, nums, res);
  return res;
}
```

向以上代码输入数组 [3,4,5] 和目标元素 9 ，输出结果为 [3,3,3],[4,5],[5,4]。虽然成功找出了所有和为 9 的子集，但其中存在重复的子集 [4,5]和 [5,4] 。

这个时候，其实，我们可以直接对列表去重，但有点不优雅。

## 重复子集剪枝

这里除了做重复子集剪枝外，我们还做排序进行优化。

### 排序
排序是指在处理集合中的元素之前，先将集合中的元素按升序（或降序）排列。排序有以下几个好处：

- 简化重复子集剪枝：排序后，相同的元素会聚集在一起，更容易检测和跳过重复的子集。
- 早期剪枝：当元素按升序排列时，可以更早地判断当前子集是否可能超过目标和，从而提前结束不必要的递归，节省计算时间。

### 重复子集剪枝
重复子集剪枝是指在回溯算法中避免生成重复的子集。具体来说，主要通过以下方式进行剪枝：

- 跳过相同的元素：在递归过程中，如果当前元素和前一个元素相同，则跳过当前元素。这是因为前一个元素已经考虑过了，再次考虑当前元素会产生重复的子集。
- 避免从同一个位置重复选择：在递归过程中，每次选择元素时，只选择从当前索引之后的元素，这样可以避免选择相同的元素组合。

```ts
/* 回溯算法：子集和 I */
function backtrack(
    state: number[],
    target: number,
    choices: number[],
    start: number,
    res: number[][]
): void {
    // 子集和等于 target 时，记录解
    if (target === 0) {
        res.push([...state]);
        return;
    }
    // 遍历所有选择
    // 剪枝二：从 start 开始遍历，避免生成重复子集
    for (let i = start; i < choices.length; i++) {
        // 剪枝一：若子集和超过 target ，则直接结束循环
        // 这是因为数组已排序，后边元素更大，子集和一定超过 target
        if (target - choices[i] < 0) {
            break;
        }
        // 尝试：做出选择，更新 target, start
        state.push(choices[i]);
        // 进行下一轮选择
        backtrack(state, target - choices[i], choices, i, res);
        // 回退：撤销选择，恢复到之前的状态
        state.pop();
    }
}

/* 求解子集和 I */
function subsetSumI(nums: number[], target: number): number[][] {
    const state = []; // 状态（子集）
    nums.sort((a, b) => a - b); // 对 nums 进行排序
    const start = 0; // 遍历起始点
    const res = []; // 结果列表（子集列表）
    backtrack(state, target, nums, start, res);
    return res;
}
```



## 参考
- [子集和问题](https://www.hello-algo.com/chapter_backtracking/subset_sum_problem/)