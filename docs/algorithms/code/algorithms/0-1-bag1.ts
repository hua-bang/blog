// 思路：采用动态规划。
// 定义状态： dp[i][j] 表示当前背包容量为 j 时，前 i 个物品的最大价值
// 状态转移方程:
// 1. 如果 j < weights[i]，说明当前物品无法放入背包，那么 dp[i][j] = dp[i - 1][j]
// 2. 如果 j >= weights[i]，说明当前物品可以放入背包，那么 dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weights[i]] + values[i])
// 复杂度分析：时间复杂度 O(n * capacity)，空间复杂度 O(n * capacity)
// 其中 n 为物品数量，capacity 为背包容量

function knapsack01(capacity: number, weights: number[], values: number[]): number {
  const n = weights.length;
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(capacity + 1).fill(0));

  for (let j = weights[0]; j <= capacity; j++) {
    dp[0][j] = values[0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (j < weights[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i]] + values[i]);
      }
    }
  }

  return dp[n - 1][capacity];
}
