// 思路：动态规划，记录不持有股票和持有股票的最大利润
// 复杂度：时间O(n)，空间O(1)
function maxProfit(prices: number[]): number {
  let noHold = 0, hold = -prices[0];

  for (let i = 0; i < prices.length; i++) {
    noHold = Math.max(noHold, hold + prices[i]);
    hold = Math.max(hold, noHold - prices[i]);
  }

  return noHold;
};