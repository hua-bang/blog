// 0 1 背包问题
// 思路：动态规划

// 状态定义: dp[i][j] 表示第 i 个物品在容量为 j 所能获得的最大价值, 
// 但我们可以做状态压缩，即 dp[j] 表示某个容量下所能获得的最大价值。

// 初始状态：当 j >= weight[0], dp[j] = value[0]
// 状态转移方程:
// - 放不进去：dp[j] = dp[j]
// - 放得进：dp[j] = max(dp[j], dp[j-weight[i]] + value[i])

// 注意：由于我们使用的是一维数组，而后续的 dp[j] 是由前置的 dp[j-w] 计算得出的
// 所以这个时候我们需要从后往前遍历，这样就不会出现重复计算的情况。
function knapsack(n: number, w: number, weight: number[], value: number[]): number {
  const dp = new Array(w + 1).fill(0);

  for (let i = weight[0]; i <= w; i++) {
    dp[i] = value[0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = w; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
    }
  }

  return dp[w];
}