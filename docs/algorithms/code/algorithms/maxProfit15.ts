// 思路：动态规划，hold 表示持有股票的收益，noHold 表示不持有股票的收益
// noHold 表示最大利润
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
function maxProfit(prices: number[]): number {
  let hold = -prices[0], noHold = 0;

  for (let i = 1; i < prices.length; i++) {
    // 手上只能有一股，所以要么是 hold，要么是 noHold - prices[i]
    hold = Math.max(hold, noHold - prices[i]);
    // 手上没有股票，要么是 noHold，要么是 hold + prices[i]
    noHold = Math.max(noHold, hold + prices[i]);
  }

  return noHold;
};