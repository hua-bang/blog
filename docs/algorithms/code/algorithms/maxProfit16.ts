// 思路：贪心算法，遍历一次，记录最小值和最大利润
// 复杂度：时间O(n)，空间O(1)
function maxProfit(prices: number[]): number {
  let maxProfit = 0, min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    maxProfit = maxProfit < (prices[i] - min) ? (prices[i] - min) : maxProfit;
    min = prices[i] < min ? prices[i] : min;
  }

  return maxProfit;
};