function maxProfit(prices: number[]): number {
  let dpFree = 0,
    dpHold = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    dpFree = dpFree >= dpHold + prices[i] ? dpFree : dpHold + prices[i];
    dpHold = dpHold >= -prices[i] ? dpHold : -prices[i];
  }

  return dpFree;
}
