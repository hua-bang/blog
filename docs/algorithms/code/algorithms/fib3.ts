// 思路：使用动态规划来做，其中 dp[i] 表示第 i 个斐波那契数，状态转移方程为 dp[i] = dp[i - 1] + dp[i - 2]
// 复杂度分析：时间复杂度 O(n)，空间复杂度为 O(n)
function fib(n: number): number {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}