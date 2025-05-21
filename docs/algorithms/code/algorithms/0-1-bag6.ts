// 0 1 背包问题
// 思路：动态规划
// 状态定义: dp[i][j] 表示第 i 个物品在容量为 j 所能获得的最大价值
// 初始状态：当 j >= weight[0], dp[0][j] = value[0]
// 状态转移方程: dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight[i]] + value[i])
function knapsack(n: number, w: number, weight: number[], value: number[]): number {
  const dp = new Array(n).fill(0).map(() => new Array(w + 1).fill(0));

  for (let j = weight[0]; j <= w; j++) {
    dp[0][j] = value[0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      if (j < weight[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }

  return dp[n - 1][w];
}