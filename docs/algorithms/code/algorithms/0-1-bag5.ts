// 思路：动态规划
// 状态定义: dp[i][j] 表示前 i 个物品在容量为 j 的背包里所能取得的最大价值
// 初始化： j < weight[0] 时，dp[0][j] = 0; j >= weight[0] 时，dp[0][j] = value[0]
// 状态转移方程: dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight[i]] + value[i])
function knapsack(n: number, w: number, weight: number[], value: number[]): number {
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(w + 1).fill(0));
  for (let j = weight[0]; j <= w; j++) {
    dp[0][j] = value[0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      if (j < weight[i]) {
        // 放不下，不放
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
      }
    }
  }

  return dp[n - 1][w];
}