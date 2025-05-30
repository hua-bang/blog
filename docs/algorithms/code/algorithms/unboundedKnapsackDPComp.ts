/* 完全背包：动态规划 */
function unboundedKnapsackDP(
  wgt: Array<number>,
  val: Array<number>,
  cap: number
): number {
  const n = wgt.length;
  // 初始化 dp 表
  const dp = new Array(n).fill(0).map(() => new Array(cap + 1).fill(0));

  for (let j = wgt[0]; j <= cap; j++) {
    dp[0][j] = val[0] * Math.floor(j / wgt[0]);
  }

  // 状态转移
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= cap; j++) {
      dp[i][j] = dp[i - 1][j];

      if (j >= wgt[i]) {
        dp[i][j] = Math.max(dp[i][j], dp[i][j - wgt[i]] + val[i])
      }
    }
  }

  return dp[n - 1][cap];
}