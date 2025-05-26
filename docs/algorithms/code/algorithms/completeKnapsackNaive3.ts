// 完全背包问题 - 优化版本
// 思路：动态规划, 利用当前行已计算的结果避免重复枚举

// 状态定义：dp[i][j] 表示前 i+1 个物品在容量为 j 时所能获得的最大价值
// 初始状态: 当 j < weight[0] 时, dp[0][j] = 0; 当 j >= weight[0] 时, dp[0][j] = value[0] * Math.floor(j / weight[0])
// 状态转移方程: 
//   dp[i][j] = dp[i-1][j]  (不选择第 i 个物品)
//   dp[i][j] = max(dp[i][j], dp[i][j-weight[i]] + value[i])  (选择第 i 个物品，注意这里用的是 dp[i] 而非 dp[i-1])
// 关键优化：使用 dp[i][j-weight[i]] 而不是 dp[i-1][j-weight[i]]，实现了物品的重复选择

// 复杂度分析：时间复杂度 O(n * w), 空间复杂度 O(n * w)

function completeKnapsackOptimized(n: number, w: number, weight: number[], value: number[]): number {
  const dp = new Array(n).fill(0).map(() => new Array(w + 1).fill(0));

  for (let j = weight[0]; j <= w; j++) {
    dp[0][j] = value[0] * Math.floor(j / weight[0]);
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      dp[i][j] = dp[i - 1][j];

      if (j >= weight[i]) {
        dp[i][j] = Math.max(dp[i][j], dp[i][j - weight[i]] + value[i]);
      }
    }
  }

  return dp[n - 1][w];
}