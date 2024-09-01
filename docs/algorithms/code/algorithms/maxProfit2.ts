function maxProfit(prices: number[]): number {
  const n = prices.length;
  // 动态规划，用 dp 来进行存储
  const dp: number[][] = new Array(n).fill(0).map(() => {
    return new Array(2).fill(0);
  });

  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < n; i++) {
    // 计算 dp 最多
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return dp[n - 1][0];
}
