/* 爬楼梯最小代价：动态规划 */
// 思路：动态规划
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(n)
function minCostClimbingStairsDP(cost: Array<number>): number {
  const n = cost.length - 1;

  if (n === 1 || n === 2) {
    return cost[n];
  }

  const dp = new Array(n + 1);
  dp[1] = cost[1];
  dp[2] = cost[2];

  for (let i = 3; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }

  return dp[n];
}