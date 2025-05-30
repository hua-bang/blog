// 0-1 背包：动态规划
// 状态定义： dp[i][j] 表示前 i 个物品在容量为 j 的背包中的最大价值
// 初始状态： 当 j < wgt[0] 时，dp[0][j] = 0，当 j >= wgt[0] 时，dp[0][j] = val[0]
// 状态转移： dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-wgt[i]] + val[i])
// 复杂度：时间 O(n*c)，空间 O(n*c)
function knapsackDP(wgt: Array<number>, val: Array<number>, c: number): number {
  const n = wgt.length;
  const dp = new Array(n).fill(0).map(() => new Array(c + 1).fill(0));

  for (let j = wgt[0]; j <= c; j++) {
    dp[0][j] = val[0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= c; j++) {
      if (j < wgt[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - wgt[i]] + val[i]);
      }
    }
  }

  return dp[n - 1][c];
}