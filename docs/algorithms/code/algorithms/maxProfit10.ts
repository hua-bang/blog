function maxProfit(prices: number[]): number {
  let hold = -prices[0], noHold = 0;
  let max = 0;

  // 本质上是在算 noHold
  for (let i = 1; i < prices.length; i++) {
    hold = Math.max(hold, -prices[i]);
    noHold = Math.max(hold + prices[i], noHold);
    max = Math.max(noHold, max);
  }

  return max;
};