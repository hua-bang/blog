// 思路：通过动态规划，dp[i] 表示 i 拆分成至少两个正整数的和之后，这些正整数的最大乘积
// 状态转移方程：dp[i] = max(dp[i], j * (i - j), j * dp[i - j])，j 表示拆分的第一个正整数，i - j 表示拆分的第二个正整数
// 边界条件：dp[0] = 0, dp[1] = 0, dp[2] = 1, dp[3] = 2
// 复杂度: 时间复杂度 O(n ^ 2), 空间复杂度 O(n)
function integerBreak(n: number): number {
  if (n <= 3) {
    return n - 1;
  }

  const dp = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      const product1 = j * (i - j);
      const product2 = j * dp[i - j];
      dp[i] = Math.max(dp[i], product1, product2);
    }
  }

  return dp[n];
};