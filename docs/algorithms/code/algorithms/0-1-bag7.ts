// 0 1 背包问题
// 思路：动态规划
// 定义状态： dp[i][j] 表示前 i 个物品在容量为 j 所能获得的最大价值
// 初始状态: j >= weight[0], dp[0][j] = value[0], 否则dp[0][j] = 0
// 状态转移方程：
// - 放不进去：dp[i][j] = dp[i-1][j]
// - 放得进：dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight[i] + value[i]])
function knapsack(n: number, w: number, weight: number[], value: number[]): number {
  const dp = new Array(n).fill(0).map(() => new Array(w + 1).fill(0));

  for (let j = weight[0]; j <= w; j++) {
    dp[0][j] = value[0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      // 放不进去
      if (j < weight[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        // 放与不放
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }

  return dp[n - 1][w];
}