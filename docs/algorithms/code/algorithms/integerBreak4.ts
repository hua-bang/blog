// 思路：采用动态规划。
// 定义状态：dp[i] 表示将正整数 i 拆分成至少两个正整数的和之后，这些正整数的最大乘积
// 状态转移方程： dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
// 初始状态：dp[0] = 0, dp[1] = 0
// 最终状态：dp[n]
// 时间复杂度：O(n^2)，空间复杂度：O(n)
function integerBreak(n: number): number {
  if (n <= 3) {
    return n - 1;
  }

  const dp = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }

  return dp[n];
};