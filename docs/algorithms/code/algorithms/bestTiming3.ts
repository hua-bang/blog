// 思路： 使用动态规划补充
// 状态： dp[i][j] 表示第 i 天结束时，手上持有股票的最大收益
// 状态转移方程： dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
// dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
// 初始状态： dp[0][0] = 0, dp[0][1] = -prices[0]
// 最终状态： dp[n - 1][0]
// 复杂度分析：时间复杂度是 O(n)，空间复杂度也是 O(n)
function bestTiming(prices: number[]): number {
  const n = prices.length;
  if (n === 0) {
    return 0;
  }
  const dp = new Array(n).fill(0).map(() => new Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }

  return dp[n - 1][0];
};