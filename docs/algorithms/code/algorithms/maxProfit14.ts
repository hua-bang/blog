// 思路：动态规划，hold 表示持有股票的收益，noHold 表示不持有股票的收益
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
function maxProfit(prices: number[]): number {
  let minPrice = prices[0], maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
};