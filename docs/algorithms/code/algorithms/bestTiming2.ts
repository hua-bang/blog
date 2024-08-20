function bestTiming(prices: number[]): number {
  if (prices.length === 0) {
    return 0;
  }

  const dp = [0];
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    let profit = prices[i] - min;
    dp[i] = Math.max(dp[i - 1], profit);
  }

  return dp[dp.length - 1];
}
