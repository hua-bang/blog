// 思路：动态规划 状态：dp[i] 表示爬到第 i 阶楼梯的方法数， 状态转移方程：dp[i] = dp[i - 2] + dp[i - 1]，初始状态：dp[0] = 1, dp[1] = 2，边界条件：n <= 1
// 复杂度：时间复杂度：O(n)， 空间复杂度：O(n)
function climbStairs(n: number): number {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n - 1];
};