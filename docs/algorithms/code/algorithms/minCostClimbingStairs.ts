// 思路：动态规划 状态：dp[i] 表示爬到第 i 阶楼梯的最小花费， 状态转移方程：dp[i] = min(dp[i - 2], dp[i - 1]) + cost[i]，初始状态：dp[0] = cost[0], dp[1] = cost[1]，边界条件：n <= 1
// 复杂度：时间复杂度：O(n)， 空间复杂度：O(n)
function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  const dp = new Array(n).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }

  return Math.min(dp[n - 1], dp[n - 2]);
};