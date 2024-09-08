function maxProfit(prices: number[]): number {
  const n = prices.length;
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(2).fill(0));

  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }

  return dp[n - 1][0];
}

function maxProfit(prices: number[]): number {
  const n = prices.length;
  let dpFree = 0,
    dpHold = -prices[0];

  for (let i = 1; i < n; i++) {
    dpFree = Math.max(dpFree, dpHold + prices[i]);
    dpHold = Math.max(dpHold, -prices[i]);
  }

  return dpFree;
}
