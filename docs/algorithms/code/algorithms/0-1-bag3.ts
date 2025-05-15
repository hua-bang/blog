// 0-1 背包问题
// 思路：动态规划
// 状态定义: dp[i] 表示容量为 i 的背包中的最大价值
// 状态转移方程： dp[i] = max(dp[i], dp[i- weight[i]] + value[i])
function knapsack(n: number, w: number, weight: number[], value: number[]): number {
  const dp = new Array(w + 1).fill(0);

  for (let i = weight[0]; i <= w; i++) {
    dp[i] = value[0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = w; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }

  return dp[w];
}