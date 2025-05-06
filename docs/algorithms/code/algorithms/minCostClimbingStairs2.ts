// 思路：采用动态规划。
// 定义状态：dp[i] 表示到达从 i 位置往上爬 1/2 的总最低花费
// 状态转移方程：dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
// 初始状态：dp[0] = cost[0], dp[1] = cost[1]
// 最终状态：Math.min(dp[n - 1], dp[n - 2])
// 时间复杂度：O(n)，空间复杂度：O(n)
function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  const dp = new Array(n).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + (cost[i] || 0);
  }

  return Math.min(dp[n - 1], dp[n - 2]);
};