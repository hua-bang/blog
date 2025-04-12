// 思路：采用动态规划
// 初始情况： n <= 3, return n - 1
// 状态转移方: dp[i] = max(dp[i], j * (i - j), j * dp[i - j]);
// 边界条件： i >= 2, j >= 1
// 复杂度分析：空间复杂度 O(n), 时间复杂度 O(n^2)
function integerBreak(n: number): number {
  if (n <= 3) {
    return n - 1;
  }

  const dp: number[] = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      const product1 = j * (i - j);
      const product2 = j * dp[i - j];

      dp[i] = Math.max(dp[i], product1, product2);
    }
  }

  return dp[n];
};