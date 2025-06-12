// 思路：通过统计最小值和最大利润，从而计算出最大利润
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
function maxProfit(prices: number[]): number {
  let minPrice = prices[0], maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    }
  }

  return maxProfit;
};