function maxProfit(prices: number[]): number {
  let noHold = 0, hold = -prices[0];

  for(let i = 1; i < prices.length; i++) {
    noHold = Math.max(noHold, hold + prices[i]);
    hold = Math.max(hold, noHold - prices[i]);
  }

  return noHold;
};