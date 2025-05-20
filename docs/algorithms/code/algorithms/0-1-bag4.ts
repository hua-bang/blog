// 0-1背包问题
// 思路：动态规划
// 状态定义： dp[i][j] 表示 i个物品在容量为j的背包中的最大价值
// 状态转移方程: dp[i][j] = max(dp[i-1][j], dp[i-1][j - weight[i]] + value[i])
function knapsack(n: number, w: number, weight: number[], value: number[]): number {
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(w + 1).fill(0));
  for (let i = weight[0]; i <= w; i++) {
    dp[0][i] = value[0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      if (j < weight[i]) {
        // 放不下，不放
        dp[i][j] = dp[i - 1][j];
      } else {
        // 放得下，得看放不放
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
      }
    }
  }

  return dp[n - 1][w];
}