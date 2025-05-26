// 0 1 背包问题
// 思路： 动态规划

// 状态定义：dp[j] 表示容量为 j 时所能获得的最大价值
// 初始状态：当 j < weight[0] 时, dp[j] = 0; 当 j >= weight[0] 时, dp[j] = value[0]
// 状态转移方程
// - 放不进去：dp[j] = dp[j]
// - 放得进去：dp[j] = Math.max(dp[j], dp[j-weight[i]] + value[i])
// 注意：由于我们采用了滚动数组，所以需要从后往前遍历，这样就不会出现重复计算的情况。

// 复杂度分析：时间复杂度 O(n * w), 空间复杂度 O(w)
function knapsack(n: number, w: number, weight: number[], value: number[]): number {
  const dp = new Array(w + 1).fill(0);

  for (let j = weight[0]; j <= w; j++) {
    dp[j] = value[0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = w; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }

  return dp[w];
}