function maxProfit(prices: number[]): number {
  let hold = -prices[0], noHold = 0;
  let max = noHold;

  for (let i = 1; i < prices.length; i++) {
    hold = Math.max(hold, -prices[i]);
    noHold = Math.max(noHold, hold + prices[i]);
    max = Math.max(max, noHold);
  }

  return max;
};
